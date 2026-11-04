/**
 * Headless page capture for the fidelity check.
 *
 * Drives a locally installed Chrome/Chromium (or chrome-headless-shell) over
 * the DevTools protocol with the `ws` package already used by the bridge — no
 * Puppeteer/Playwright dependency. Renders a URL at the design width, waits for
 * fonts, measures every [data-figma-id] element relative to the page root and
 * screenshots the root's box.
 */

import { type ChildProcess, spawn } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, rmSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import WebSocket from "ws";
import type { MeasuredBox } from "./fidelity.js";

export interface CaptureOptions {
	url: string;
	width: number;
	height: number;
	/** Device scale factor (match the reference render's scale). */
	scale: number;
	/** data-figma-id of the page root, used to clip the screenshot and measure boxes. */
	rootId: string;
	chromePath?: string;
	/** Extra settle time after fonts are ready, in ms. */
	waitMs: number;
	timeoutMs: number;
}

export interface CaptureResult {
	png: Buffer;
	boxes: Record<string, MeasuredBox> | null;
	rootFound: boolean;
	chromePath: string;
	consoleErrors: string[];
}

/** Newest chrome-headless-shell / chrome installed by `npx @puppeteer/browsers`. */
function puppeteerCacheBrowser(): string | null {
	const root = join(homedir(), ".cache", "puppeteer");
	for (const product of ["chrome-headless-shell", "chrome"]) {
		const dir = join(root, product);
		if (!existsSync(dir)) continue;
		for (const version of readdirSync(dir).sort().reverse()) {
			for (const sub of readdirSync(join(dir, version))) {
				const base = join(dir, version, sub);
				const candidates = [
					join(base, "chrome-headless-shell"),
					join(base, "chrome-headless-shell.exe"),
					join(base, "chrome"),
					join(base, "chrome.exe"),
					join(
						base,
						"Google Chrome for Testing.app",
						"Contents",
						"MacOS",
						"Google Chrome for Testing",
					),
				];
				const hit = candidates.find((c) => existsSync(c));
				if (hit) return hit;
			}
		}
	}
	return null;
}

export function findChrome(explicit?: string): string | null {
	const fromEnv =
		explicit ?? process.env.FIGMA_CONSOLE_CHROME ?? process.env.CHROME_PATH;
	if (fromEnv) return existsSync(fromEnv) ? fromEnv : null;
	const known = [
		"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
		"/Applications/Chromium.app/Contents/MacOS/Chromium",
		"/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
		"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
		join(
			homedir(),
			"Applications",
			"Google Chrome.app",
			"Contents",
			"MacOS",
			"Google Chrome",
		),
		"/usr/bin/google-chrome",
		"/usr/bin/google-chrome-stable",
		"/usr/bin/chromium",
		"/usr/bin/chromium-browser",
		"/snap/bin/chromium",
		"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
		"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
		"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
	];
	return known.find((p) => existsSync(p)) ?? puppeteerCacheBrowser();
}

export const NO_CHROME_HINT =
	"No Chrome/Chromium found. Install one, set CHROME_PATH (or pass chromePath), or download a headless build with: npx @puppeteer/browsers install chrome-headless-shell@stable --path ~/.cache/puppeteer";

class Cdp {
	private id = 0;
	private pending = new Map<
		number,
		{ resolve: (v: any) => void; reject: (e: Error) => void }
	>();
	private listeners: ((m: any) => void)[] = [];
	constructor(private ws: WebSocket) {
		ws.on("message", (raw) => {
			const msg = JSON.parse(raw.toString());
			if (msg.id && this.pending.has(msg.id)) {
				const p = this.pending.get(msg.id);
				this.pending.delete(msg.id);
				if (msg.error) p?.reject(new Error(`${msg.error.message}`));
				else p?.resolve(msg.result);
			} else for (const l of this.listeners) l(msg);
		});
	}
	send(
		method: string,
		params: Record<string, unknown> = {},
		sessionId?: string,
	): Promise<any> {
		const id = ++this.id;
		this.ws.send(
			JSON.stringify({
				id,
				method,
				params,
				...(sessionId ? { sessionId } : {}),
			}),
		);
		return new Promise((resolve, reject) =>
			this.pending.set(id, { resolve, reject }),
		);
	}
	waitFor(method: string, sessionId: string, timeoutMs: number): Promise<any> {
		return new Promise((resolve, reject) => {
			const timer = setTimeout(
				() => reject(new Error(`Timed out waiting for ${method}`)),
				timeoutMs,
			);
			const l = (m: any) => {
				if (m.method === method && m.sessionId === sessionId) {
					clearTimeout(timer);
					this.listeners = this.listeners.filter((x) => x !== l);
					resolve(m.params);
				}
			};
			this.listeners.push(l);
		});
	}
	on(l: (m: any) => void): void {
		this.listeners.push(l);
	}
}

function launch(
	chromePath: string,
	userDataDir: string,
	timeoutMs: number,
): Promise<{ proc: ChildProcess; wsUrl: string }> {
	const args = [
		"--headless=new",
		"--remote-debugging-port=0",
		`--user-data-dir=${userDataDir}`,
		"--no-first-run",
		"--no-default-browser-check",
		"--hide-scrollbars",
		"--mute-audio",
		"--disable-gpu",
		"--disable-extensions",
		"--disable-background-networking",
		"--force-color-profile=srgb",
		"about:blank",
	];
	const proc = spawn(chromePath, args, { stdio: ["ignore", "ignore", "pipe"] });
	return new Promise((resolve, reject) => {
		let stderr = "";
		const timer = setTimeout(() => {
			proc.kill();
			reject(
				new Error(
					`Chrome did not start within ${timeoutMs}ms. ${stderr.slice(-400)}`,
				),
			);
		}, timeoutMs);
		proc.stderr?.on("data", (d) => {
			stderr += d.toString();
			const m = stderr.match(/DevTools listening on (ws:\/\/\S+)/);
			if (m) {
				clearTimeout(timer);
				resolve({ proc, wsUrl: m[1] });
			}
		});
		proc.on("exit", (code) => {
			clearTimeout(timer);
			reject(
				new Error(
					`Chrome exited (${code}) before it was ready. ${stderr.slice(-400)}`,
				),
			);
		});
	});
}

const DEV_OVERLAYS =
	"nextjs-portal,[data-nextjs-toast],vite-error-overlay,#webpack-dev-server-client-overlay";

const MEASURE = (rootId: string) => `(() => {
  const root = document.querySelector('[data-figma-id="' + ${JSON.stringify(rootId)}.replace(/"/g, '\\\\"') + '"]');
  if (!root) return JSON.stringify({ root: null });
  const rr = root.getBoundingClientRect();
  const boxes = {};
  for (const el of document.querySelectorAll('[data-figma-id]')) {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    boxes[el.getAttribute('data-figma-id')] = { x: r.x - rr.x, y: r.y - rr.y, width: r.width, height: r.height, hidden: cs.display === 'none' || cs.visibility === 'hidden' };
  }
  return JSON.stringify({ root: { x: rr.x + scrollX, y: rr.y + scrollY }, boxes });
})()`;

export async function capturePage(
	opts: CaptureOptions,
): Promise<CaptureResult> {
	const chromePath = findChrome(opts.chromePath);
	if (!chromePath) throw new Error(NO_CHROME_HINT);
	const userDataDir = mkdtempSync(join(tmpdir(), "figma-fidelity-"));
	const { proc, wsUrl } = await launch(chromePath, userDataDir, opts.timeoutMs);
	const ws = new WebSocket(wsUrl, {
		perMessageDeflate: false,
		maxPayload: 512 * 1024 * 1024,
	});
	try {
		await new Promise<void>((resolve, reject) => {
			ws.once("open", () => resolve());
			ws.once("error", reject);
		});
		const cdp = new Cdp(ws);
		const { targetId } = await cdp.send("Target.createTarget", {
			url: "about:blank",
		});
		const { sessionId } = await cdp.send("Target.attachToTarget", {
			targetId,
			flatten: true,
		});
		const consoleErrors: string[] = [];
		cdp.on((m) => {
			if (m.sessionId !== sessionId) return;
			if (m.method === "Runtime.exceptionThrown")
				consoleErrors.push(
					m.params.exceptionDetails?.exception?.description ??
						m.params.exceptionDetails?.text ??
						"exception",
				);
			if (
				m.method === "Runtime.consoleAPICalled" &&
				m.params.type === "error"
			) {
				consoleErrors.push(
					m.params.args
						.map((a: any) => a.value ?? a.description ?? "")
						.join(" "),
				);
			}
		});
		await cdp.send("Page.enable", {}, sessionId);
		await cdp.send("Runtime.enable", {}, sessionId);
		await cdp.send(
			"Emulation.setDeviceMetricsOverride",
			{
				width: Math.round(opts.width),
				height: Math.round(opts.height),
				deviceScaleFactor: opts.scale,
				mobile: false,
			},
			sessionId,
		);
		const loaded = cdp.waitFor(
			"Page.loadEventFired",
			sessionId,
			opts.timeoutMs,
		);
		// A slow navigation (a dev server compiling the route) can outlast the wait;
		// the rejection is handled at `await loaded`, not left to crash the process.
		loaded.catch(() => {});
		const nav = await cdp.send("Page.navigate", { url: opts.url }, sessionId);
		if (nav.errorText)
			throw new Error(`Could not open ${opts.url}: ${nav.errorText}`);
		await loaded;
		await cdp.send(
			"Runtime.evaluate",
			{
				expression: `document.fonts.ready.then(() => new Promise((r) => setTimeout(r, ${Math.max(0, opts.waitMs)})))`,
				awaitPromise: true,
			},
			sessionId,
		);
		// Dev-server overlays (Next.js badge, Vite/webpack error overlays) are not part of the design.
		await cdp.send(
			"Runtime.evaluate",
			{
				expression: `document.head.insertAdjacentHTML('beforeend', '<style>${DEV_OVERLAYS}{display:none!important}</style>')`,
			},
			sessionId,
		);
		const measured = await cdp.send(
			"Runtime.evaluate",
			{ expression: MEASURE(opts.rootId), returnByValue: true },
			sessionId,
		);
		const info = JSON.parse(measured.result.value) as {
			root: { x: number; y: number } | null;
			boxes?: Record<string, MeasuredBox>;
		};
		const clip = {
			x: info.root?.x ?? 0,
			y: info.root?.y ?? 0,
			width: opts.width,
			height: opts.height,
			scale: 1,
		};
		const shot = await cdp.send(
			"Page.captureScreenshot",
			{ format: "png", clip, captureBeyondViewport: true, fromSurface: true },
			sessionId,
		);
		await cdp.send("Browser.close").catch(() => undefined);
		return {
			png: Buffer.from(shot.data, "base64"),
			boxes: info.boxes ?? null,
			rootFound: !!info.root,
			chromePath,
			consoleErrors,
		};
	} finally {
		ws.close();
		await stopChrome(proc);
		// Chrome can still be flushing its profile for a moment; cleanup must never fail the check.
		try {
			rmSync(userDataDir, {
				recursive: true,
				force: true,
				maxRetries: 5,
				retryDelay: 100,
			});
		} catch {
			// A leftover temp profile is harmless.
		}
	}
}

/** Ends Chrome and waits until the process has exited (SIGKILL after 3s). */
function stopChrome(proc: ChildProcess): Promise<void> {
	if (proc.exitCode !== null || proc.signalCode !== null)
		return Promise.resolve();
	return new Promise((resolve) => {
		const force = setTimeout(() => proc.kill("SIGKILL"), 3000);
		proc.once("exit", () => {
			clearTimeout(force);
			resolve();
		});
		proc.kill();
	});
}
