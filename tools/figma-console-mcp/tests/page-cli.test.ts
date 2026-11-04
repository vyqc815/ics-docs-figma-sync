/**
 * figma-page CLI tests
 *
 * Project config (figma.pages.json) parsing and validation, Figma link
 * parsing, and every CLI command with a fake bridge and a fake page check —
 * no Figma or Chrome needed.
 */

import {
	existsSync,
	mkdirSync,
	mkdtempSync,
	readFileSync,
	rmSync,
	utimesSync,
	writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildDiscoverScript } from "../src/core/page-spec/plugin-scripts";
import {
	CONFIG_FILE,
	defaultConfig,
	loadConfig,
	MAIN_SCREEN,
	pageFromFrame,
	parseFigmaTarget,
	repoFileUrl,
	repoWebUrl,
	selectPages,
	upsertPage,
} from "../src/core/page-spec/project-config";
import { SKILL_PATH } from "../src/core/page-spec/skill-template";
import { type Deps, runCli } from "../src/page-cli";

const PNG_1x1 =
	"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

/** Bridge that answers the extraction, asset and reference scripts like the plugin would. */
function fakeBridge(files = [{ fileKey: "FILEKEY1", fileName: "Thực Học" }]) {
	const notes: {
		frameId: string;
		title: string;
		status: string;
		tone: string;
	}[] = [];
	const executeCodeViaUI = jest.fn(async (code: string) => {
		if (code.includes("figma.group(") && code.includes("var N = ")) {
			const params = JSON.parse(
				code.slice(code.indexOf("var N = ") + 8, code.indexOf(";\nvar NS")),
			);
			notes.push(params);
			return {
				success: true,
				result: JSON.stringify({
					placed: true,
					created: notes.length === 1,
					noteId: "9:9",
					height: 64,
				}),
			};
		}
		if (code.includes("var P = ") && code.includes("walk(root)")) {
			// A frame that is gone from the file.
			if (code.includes('"nodeId":"9:9"'))
				return { success: false, error: "Node not found: 9:9" };
			const extract = {
				file: { fileKey: "FILEKEY1", fileName: "Thực Học", pageName: "Trang" },
				tree: {
					id: "1:1",
					name: "Home",
					type: "FRAME",
					transform: [
						[1, 0, 0],
						[0, 1, 0],
					],
					width: 1920,
					height: 600,
					fills: [
						{ type: "SOLID", visible: true, color: { r: 1, g: 1, b: 1 } },
					],
					children: [],
				},
				variables: [],
				styles: [],
				assets: [],
				warnings: [],
				nodeCount: 1,
			};
			return { success: true, result: JSON.stringify(extract) };
		}
		return {
			success: true,
			result: JSON.stringify({ base64: PNG_1x1, width: 1920, height: 600 }),
		};
	});
	return {
		executeCodeViaUI,
		notes,
		files: () => files,
		close: jest.fn(async () => undefined),
	};
}

function harness(dir: string, overrides: Partial<Deps> = {}) {
	const out: string[] = [];
	const err: string[] = [];
	const bridge = fakeBridge();
	const deps: Deps = {
		openBridge: jest.fn(async () => bridge),
		checkPage: jest.fn(async (args) => ({
			pass: !String(args.url).includes("bad"),
			failures: String(args.url).includes("bad")
				? ["2 elements are off by more than their limit"]
				: [],
			pixels: {
				width: 1920,
				height: 600,
				mismatched: 0,
				percent: 0,
				shapePercent: 0.01,
				textPercent: 1,
				sizeMismatch: false,
			},
			textNodes: [],
			regions: [],
			boxes: {
				measured: 10,
				missing: [],
				withinThreshold: 10,
				buckets: {},
				worst: [],
				maxDelta: 0,
				over: [],
			},
			thresholds: {} as never,
			url: String(args.url),
			chrome: "/fake",
			consoleErrors: [],
			rootFound: true,
			outputDir: join(dir, ".figma/pages/home/fidelity"),
			files: [],
		})),
		...overrides,
	};
	const run = (...argv: string[]) =>
		runCli(
			argv,
			{ log: (l) => out.push(l), error: (l) => err.push(l) },
			deps,
			dir,
		);
	return { run, out, err, deps, bridge };
}

describe("project config", () => {
	it("parses Figma links and node IDs", () => {
		expect(
			parseFigmaTarget(
				"https://www.figma.com/design/njkD5CTk7hOwoPtZt3kXey/TH%E1%BB%B0C?node-id=3496-84092&t=x",
			),
		).toEqual({
			nodeId: "3496:84092",
			fileKey: "njkD5CTk7hOwoPtZt3kXey",
		});
		expect(parseFigmaTarget("3496-84092")).toEqual({ nodeId: "3496:84092" });
		expect(parseFigmaTarget("12:34")).toEqual({ nodeId: "12:34" });
		expect(() =>
			parseFigmaTarget("https://www.figma.com/design/abc/x"),
		).toThrow(/no node-id/);
		expect(() => parseFigmaTarget("home")).toThrow(/neither a Figma node ID/);
	});

	it("adds, updates and selects pages, guarding names and routes", () => {
		let c = defaultConfig();
		c = upsertPage(c, { name: "home", nodeId: "1:1", route: "/" }).config;
		const up = upsertPage(c, { name: "home", nodeId: "1:2", route: "/" });
		expect(up.updated).toBe(true);
		expect(up.config.pages).toEqual([
			{ name: "home", nodeId: "1:2", route: "/" },
		]);
		expect(() =>
			upsertPage(c, { name: "other", nodeId: "1:3", route: "/" }),
		).toThrow(/already used by page "home"/);
		expect(() =>
			upsertPage(c, { name: "Bad Name", nodeId: "1:3", route: "/x" }),
		).toThrow();
		expect(selectPages(c, [])).toHaveLength(1);
		expect(() => selectPages(c, ["nope"])).toThrow(/Unknown page\(s\): nope/);
	});

	it("reports invalid config files clearly", () => {
		const dir = mkdtempSync(join(tmpdir(), "figcfg-"));
		try {
			expect(() => loadConfig(dir)).toThrow(/figma-page init/);
			writeFileSync(
				join(dir, CONFIG_FILE),
				JSON.stringify({ pages: [{ name: "home", nodeId: "x", route: "/" }] }),
			);
			expect(() => loadConfig(dir)).toThrow(/pages.0.nodeId/);
			writeFileSync(join(dir, CONFIG_FILE), JSON.stringify({ pages: [] }));
			expect(loadConfig(dir)).toMatchObject({
				specDir: ".figma/pages",
				docsDir: "docs/pages",
				fontSource: "google",
				debugIds: true,
				baseUrl: "http://localhost:3000",
			});
		} finally {
			rmSync(dir, { recursive: true, force: true });
		}
	});
});

describe("figma-page CLI", () => {
	let dir: string;
	beforeEach(() => {
		dir = mkdtempSync(join(tmpdir(), "figcli-"));
		writeFileSync(join(dir, "package.json"), "{}");
	});
	afterEach(() => rmSync(dir, { recursive: true, force: true }));

	it("init writes the config and the Claude Code skill, and keeps hand-edited skills", async () => {
		const h = harness(dir);
		expect(await h.run("init")).toBe(0);
		expect(
			JSON.parse(readFileSync(join(dir, CONFIG_FILE), "utf-8")),
		).toMatchObject({ pages: [], docLanguage: "vi" });
		const skill = readFileSync(join(dir, SKILL_PATH), "utf-8");
		expect(skill).toMatch(/^---\nname: figma-to-nextjs\ndescription: /);
		expect(skill).toContain("figma-page check");

		writeFileSync(join(dir, SKILL_PATH), "# my own skill");
		expect(await h.run("init")).toBe(0);
		expect(readFileSync(join(dir, SKILL_PATH), "utf-8")).toBe("# my own skill");
		expect(h.out).toContain(`Kept existing ${CONFIG_FILE}.`);
	});

	it("add registers a page from a Figma link and pins the file key", async () => {
		const h = harness(dir);
		await h.run("init");
		expect(
			await h.run(
				"add",
				"home",
				"https://www.figma.com/design/FILEKEY1/Name?node-id=1-1",
				"/",
			),
		).toBe(0);
		expect(loadConfig(dir)).toMatchObject({
			fileKey: "FILEKEY1",
			pages: [{ name: "home", nodeId: "1:1", route: "/" }],
		});
		expect(
			await h.run(
				"add",
				"other",
				"https://www.figma.com/design/OTHERKEY/Name?node-id=2-2",
				"/other",
			),
		).toBe(1);
		expect(h.err.join("\n")).toContain("One config reads from one Figma file");
	});

	it("sync exports through the bridge, then builds code and the page doc", async () => {
		const h = harness(dir);
		await h.run("init");
		await h.run(
			"add",
			"home",
			"https://www.figma.com/design/FILEKEY1/Name?node-id=1-1",
			"/",
		);
		expect(await h.run("sync", "home")).toBe(0);
		expect(h.deps.openBridge).toHaveBeenCalledWith(
			60000,
			expect.anything(),
			"FILEKEY1",
		);
		expect(h.bridge.close).toHaveBeenCalled();
		for (const f of [
			".figma/pages/home/page-spec.json",
			".figma/pages/home/reference@1x.png",
			"app/page.tsx",
			"components/figma/home/index.tsx",
			"docs/pages/index.md",
		]) {
			expect(existsSync(join(dir, f))).toBe(true);
		}
		expect(
			readFileSync(join(dir, "components/figma/home/index.tsx"), "utf-8"),
		).toContain('data-figma-id="1:1"');
		expect(h.out.join("\n")).toMatch(
			/✓ home: Home 1920×600, 1 layers, 0\/0 assets/,
		);
		expect(h.out.join("\n")).toMatch(
			/✓ home: \/ — \d+ files \(component HomePage\)/,
		);

		// A code note goes right under the frame with the new code paths.
		expect(h.bridge.notes).toEqual([
			expect.objectContaining({
				frameId: "1:1",
				title:
					"</>  /  ·  docs/pages/index.md  ·  components/figma/home/index.tsx",
				status: "Chưa kiểm tra bản build này — chạy figma-page check",
				tone: "unchecked",
			}),
		]);
		expect(h.out.join("\n")).toContain(
			"✓ home: Figma code note added under the frame",
		);

		await h.run("list");
		expect(h.out.at(-1)).toMatch(/^home\s+\/\s+1:1\s+exported 20/);
	});

	it("with shared sections, building some pages regenerates every coded page", async () => {
		const h = harness(dir);
		await h.run("init");
		await h.run("add", "home", "1:1", "/");
		await h.run("add", "about", "1:1", "/about");
		const cfgPath = join(dir, "figma.pages.json");
		const cfg = JSON.parse(readFileSync(cfgPath, "utf-8"));
		writeFileSync(
			cfgPath,
			JSON.stringify({ ...cfg, styling: "tailwind", share: true }, null, 2),
		);
		expect(await h.run("sync", "--no-figma-note")).toBe(0);
		// Another page's code is gone (or imports shared names that changed):
		// building only "home" must bring it back in line with the shared plan.
		rmSync(join(dir, "components/figma/about"), { recursive: true });
		expect(await h.run("build", "home")).toBe(0);
		expect(h.out.join("\n")).toContain(
			"regenerating 1 other coded pages against them",
		);
		expect(existsSync(join(dir, "components/figma/about/index.tsx"))).toBe(
			true,
		);
	});

	it("sync skips a page that fails, finishes the others and says how to retry", async () => {
		const h = harness(dir);
		await h.run("init");
		await h.run("add", "home", "1:1", "/");
		await h.run("add", "ghost", "9:9", "/ghost");
		expect(await h.run("sync", "--no-figma-note")).toBe(1);
		const out = h.out.join("\n");
		expect(out).toMatch(/✗ ghost: skipped — /);
		expect(out).toContain("figma-page export ghost");
		// The page that exported is still built.
		expect(existsSync(join(dir, "components/figma/home/index.tsx"))).toBe(true);
		expect(existsSync(join(dir, "components/figma/ghost/index.tsx"))).toBe(
			false,
		);
	});

	describe("a stalled Figma", () => {
		/** Every page has an asset, and a deadline already past makes it time out. */
		function stallingHarness() {
			const h = harness(dir);
			const inner = h.bridge.executeCodeViaUI.getMockImplementation() as (
				code: string,
			) => Promise<{ result?: string }>;
			h.bridge.executeCodeViaUI.mockImplementation(async (code: string) => {
				const res = await inner(code);
				if (!code.includes("walk(root)") || !res.result) return res;
				const raw = JSON.parse(res.result);
				raw.assets = [{ id: "1:1", kind: "image" }];
				return { ...res, result: JSON.stringify(raw) };
			});
			return h;
		}

		it("stops after 3 timeouts in a row and prints how to continue", async () => {
			const h = stallingHarness();
			await h.run("init");
			for (const n of ["a", "b", "c", "d", "e"])
				await h.run("add", n, "1:1", `/${n}`);
			expect(await h.run("export", "--page-timeout=-1")).toBe(1);
			const out = h.out.join("\n");
			expect(out.match(/✗ /g)).toHaveLength(3);
			expect(out).toContain("Stopped: 3 pages in a row timed out");
			expect(out).toMatch(/figma-page export --since \d{4}-/);
		});

		it("--since skips pages already exported, not older ones", async () => {
			const h = harness(dir);
			await h.run("init");
			await h.run("add", "home", "1:1", "/");
			await h.run("add", "about", "1:1", "/about");
			expect(await h.run("export")).toBe(0);
			const cfg = JSON.parse(readFileSync(join(dir, "figma.pages.json"), "utf-8"));
			const spec = join(dir, cfg.specDir, "about", "page-spec.json");
			const old = new Date("2020-01-01");
			utimesSync(spec, old, old);
			const before = h.out.length;
			expect(await h.run("export", "--since", "2021-01-01")).toBe(0);
			const out = h.out.slice(before).join("\n");
			expect(out).toContain("✓ about:");
			expect(out).not.toContain("✓ home:");
			expect(out).toContain("1 page(s) already exported");
		});

		it("rejects a --since that is not a date", async () => {
			const h = harness(dir);
			await h.run("init");
			await h.run("add", "home", "1:1", "/");
			expect(await h.run("export", "--since", "hôm qua")).toBe(1);
			expect(h.err.join("\n")).toContain("--since: not a date");
		});
	});

	it("build refuses pages that were never exported", async () => {
		const h = harness(dir);
		await h.run("init");
		await h.run("add", "home", "1:1", "/");
		expect(await h.run("build")).toBe(1);
		expect(h.err.join("\n")).toContain("figma-page export home");
	});

	it("check skips a page that never loads, checks the rest and says how to retry", async () => {
		const h = harness(dir);
		const inner = h.deps.checkPage.getMockImplementation() as typeof h.deps.checkPage;
		h.deps.checkPage = jest.fn(async (args) => {
			if (String(args.url).endsWith("/slow"))
				throw new Error("Timed out waiting for Page.loadEventFired");
			return inner(args);
		}) as typeof h.deps.checkPage;
		await h.run("init");
		await h.run("add", "slow", "1:2", "/slow");
		await h.run("add", "home", "1:1", "/");
		for (const n of ["slow", "home"]) {
			mkdirSync(join(dir, ".figma/pages", n), { recursive: true });
			writeFileSync(join(dir, ".figma/pages", n, "page-spec.json"), "{}");
		}
		expect(await h.run("check")).toBe(1);
		const log = h.out.join("\n");
		expect(log).toContain("✗ slow http://localhost:3000/slow: not checked — Timed out");
		expect(log).toContain("PASS home http://localhost:3000/");
		expect(log).toContain("figma-page check slow");
	});

	it("check exits 1 when any page fails and passes the base URL and thresholds", async () => {
		const h = harness(dir);
		await h.run("init");
		await h.run("add", "home", "1:1", "/");
		await h.run("add", "bad", "1:2", "/bad");
		const cfg = loadConfig(dir);
		writeFileSync(
			join(dir, CONFIG_FILE),
			JSON.stringify({ ...cfg, thresholds: { maxTextBoxDelta: 3 } }),
		);
		for (const n of ["home", "bad"]) {
			mkdirSync(join(dir, ".figma/pages", n), { recursive: true });
			writeFileSync(join(dir, ".figma/pages", n, "page-spec.json"), "{}");
		}
		expect(
			await h.run("check", "home", "--base-url", "http://localhost:3107/"),
		).toBe(0);
		expect(h.deps.checkPage).toHaveBeenCalledWith(
			expect.objectContaining({
				url: "http://localhost:3107/",
				maxTextBoxDelta: 3,
			}),
		);
		expect(await h.run("check")).toBe(1);
		const log = h.out.join("\n");
		expect(log).toContain(
			"PASS home http://localhost:3000/ — non-text pixels 0.01%, boxes 10/10 within limit",
		);
		expect(log).toContain("FAIL bad http://localhost:3000/bad");
		expect(log).toContain("1/2 pages pass.");
	});

	it("shows help and rejects unknown commands", async () => {
		const h = harness(dir);
		expect(await h.run("--help")).toBe(0);
		expect(h.out[0]).toContain("figma-page — Figma frames");
		expect(await h.run("frobnicate")).toBe(2);
		expect(h.err[0]).toContain('Unknown command "frobnicate"');
	});
});

describe("repository links", () => {
	it("turns git remotes into web URLs and links files and folders", () => {
		expect(repoWebUrl("git@github.com:org/pls_web-fe.git")).toBe(
			"https://github.com/org/pls_web-fe",
		);
		expect(repoWebUrl("https://github.com/org/pls_web-fe.git")).toBe(
			"https://github.com/org/pls_web-fe",
		);
		expect(repoWebUrl("https://token@github.com/org/repo")).toBe(
			"https://github.com/org/repo",
		);
		expect(repoWebUrl("ssh://git@gitlab.com/group/sub/repo.git")).toBe(
			"https://gitlab.com/group/sub/repo",
		);
		expect(repoWebUrl("/local/path")).toBeNull();
		expect(
			repoFileUrl(
				"https://github.com/org/web",
				"main",
				"docs/pages/khoa-hoc.md",
				"blob",
			),
		).toBe("https://github.com/org/web/blob/main/docs/pages/khoa-hoc.md");
		expect(
			repoFileUrl(
				"https://gitlab.com/g/web/",
				"feat/x",
				"components/figma/khoa-hoc",
				"tree",
			),
		).toBe(
			"https://gitlab.com/g/web/-/tree/feat%2Fx/components/figma/khoa-hoc",
		);
	});
});

describe("discover and doc-only pages", () => {
	let dir: string;
	beforeEach(() => {
		dir = mkdtempSync(join(tmpdir(), "figdisc-"));
		writeFileSync(join(dir, "package.json"), "{}");
	});
	afterEach(() => rmSync(dir, { recursive: true, force: true }));

	const frames = [
		{ id: "10:1", name: "CD-KH-070100 — Thư viện / Kiến thức" },
		{
			id: "10:2",
			name: "CD-KH-070101 — Thư viện / Kiến thức · Menu ⋮ (Nháp, chưa dùng)",
		},
		{ id: "10:3", name: "CD-KH-070100-DK — Thư viện / Kiến thức" },
		{ id: "10:4", name: "CD-KH-010000 — Quản lý khoá học" },
	];

	/** Fake bridge that also answers the discovery script, and records every script it runs. */
	function discoveringHarness() {
		const h = harness(dir);
		const scripts: string[] = [];
		const inner = h.bridge.executeCodeViaUI.getMockImplementation() as (
			code: string,
		) => Promise<unknown>;
		h.bridge.executeCodeViaUI.mockImplementation(async (code: string) => {
			scripts.push(code);
			if (code.includes("var D = ")) {
				return {
					success: true,
					result: JSON.stringify({
						page: "  ├─ KHOÁ HỌC",
						fileKey: "ICSKEY",
						frames,
					}),
				};
			}
			return inner(code);
		});
		return { ...h, scripts };
	}

	it("names pages after the screen code and routes them by the title", () => {
		expect(pageFromFrame(frames[0])).toEqual({
			name: "cd-kh-070100",
			nodeId: "10:1",
			route: "/thu-vien/kien-thuc",
		});
		expect(pageFromFrame(frames[2])).toEqual({
			name: "cd-kh-070100-dk",
			nodeId: "10:3",
			route: "/thu-vien/kien-thuc-dk",
		});
		expect(pageFromFrame(frames[3], "/cd/")).toEqual({
			name: "cd-kh-010000",
			nodeId: "10:4",
			route: "/cd/quan-ly-khoa-hoc",
		});
		expect(pageFromFrame({ id: "1:2", name: "Trang chủ" })).toEqual({
			name: "trang-chu",
			nodeId: "1:2",
			route: "/trang-chu",
		});
		expect(
			frames.filter((f) => MAIN_SCREEN.test(f.name)).map((f) => f.id),
		).toEqual(["10:1", "10:3", "10:4"]);
	});

	it("discover --main --doc-only registers the main screens from the open Figma page", async () => {
		const h = discoveringHarness();
		await h.run("init");
		expect(await h.run("discover", "--main", "--doc-only")).toBe(0);
		const config = loadConfig(dir);
		expect(config.fileKey).toBe("ICSKEY");
		expect(config.pages).toEqual([
			{
				name: "cd-kh-070100",
				nodeId: "10:1",
				route: "/thu-vien/kien-thuc",
				docOnly: true,
			},
			{
				name: "cd-kh-070100-dk",
				nodeId: "10:3",
				route: "/thu-vien/kien-thuc-dk",
				docOnly: true,
			},
			{
				name: "cd-kh-010000",
				nodeId: "10:4",
				route: "/quan-ly-khoa-hoc",
				docOnly: true,
			},
		]);
		expect(h.out.join("\n")).toContain(
			"Figma page “├─ KHOÁ HỌC”: 4 frames, 3 match → 3 added, 0 updated.",
		);
		// Running it again updates instead of duplicating.
		await h.run("discover", "--main", "--doc-only");
		expect(loadConfig(dir).pages).toHaveLength(3);

		// A frame already registered under its own name (e.g. with code) is left alone.
		const own = loadConfig(dir);
		writeFileSync(
			join(dir, CONFIG_FILE),
			JSON.stringify({
				...own,
				pages: [
					{ name: "thu-vien", nodeId: "10:1", route: "/thu-vien" },
					...own.pages.slice(1),
				],
			}),
		);
		await h.run("discover", "--main", "--doc-only");
		expect(loadConfig(dir).pages.filter((p) => p.nodeId === "10:1")).toEqual([
			{ name: "thu-vien", nodeId: "10:1", route: "/thu-vien" },
		]);
		expect(h.out.at(-4)).toContain("1 already registered under another name");
	});

	it("doc-only pages get the MD and the Figma note, but no code, assets or checks", async () => {
		const h = discoveringHarness();
		await h.run("init");
		await h.run(
			"add",
			"kien-thuc",
			"10:1",
			"/thu-vien/kien-thuc",
			"--doc-only",
		);
		expect(await h.run("sync")).toBe(0);
		// No asset or reference-render scripts for a doc-only export.
		expect(h.scripts.filter((c) => c.includes("var J = "))).toEqual([]);
		expect(existsSync(join(dir, "docs/pages/thu-vien/kien-thuc.md"))).toBe(
			true,
		);
		// The doc points at its spec inside the project, not at an absolute path on this machine.
		expect(
			readFileSync(join(dir, "docs/pages/thu-vien/kien-thuc.md"), "utf-8"),
		).toContain("`../../../.figma/pages/kien-thuc/page-spec.json`");
		expect(existsSync(join(dir, "components"))).toBe(false);
		expect(existsSync(join(dir, "app"))).toBe(false);
		expect(h.bridge.notes.at(-1)).toMatchObject({
			title:
				"</>  /thu-vien/kien-thuc  ·  docs/pages/thu-vien/kien-thuc.md  ·  🧩 Chưa có code",
			status: "Đã có mô tả (MD) · chưa sinh code cho màn này",
		});
		expect(h.out.join("\n")).toContain(
			"✓ kien-thuc: /thu-vien/kien-thuc — page MD only (docs/pages/thu-vien/kien-thuc.md)",
		);
		expect(await h.run("check")).toBe(0);
		expect(h.deps.checkPage).not.toHaveBeenCalled();
		expect(h.out.join("\n")).toContain(
			"- kien-thuc: doc-only page, nothing to check",
		);
	});

	it("opens MD and code in the deployed viewer with sourceViewer", async () => {
		const h = discoveringHarness();
		await h.run("init");
		await h.run("add", "home", "1:1", "/");
		writeFileSync(
			join(dir, CONFIG_FILE),
			JSON.stringify({
				...loadConfig(dir),
				repoUrl: "https://github.com/org/web",
				branch: "main",
				demoUrl: "https://web.vercel.app/",
				sourceViewer: true,
			}),
		);
		await h.run("sync");
		const note = h.bridge.notes.at(-1);
		expect(note.title).toBe(
			"</>  /  ·  ▶ Xem demo ↗  ·  📄 Spec MD ↗  ·  🧩 Code ↗",
		);
		expect(note.titleLinks.map((l: { url: string }) => l.url)).toEqual([
			"https://web.vercel.app/",
			"https://web.vercel.app/figma/home/spec",
			"https://web.vercel.app/figma/home/code",
		]);
	});

	it("note rewrites the notes from the last check without checking again", async () => {
		const h = discoveringHarness();
		await h.run("init");
		await h.run("add", "home", "1:1", "/");
		await h.run("sync");
		await h.run("check");
		// The real checker saves its report next to the spec; the fake one does not.
		const report = await (h.deps.checkPage as jest.Mock).mock.results[0].value;
		mkdirSync(join(dir, ".figma/pages/home/fidelity"), { recursive: true });
		writeFileSync(
			join(dir, ".figma/pages/home/fidelity/report.json"),
			JSON.stringify(report),
		);
		const checked = h.bridge.notes.at(-1);
		expect(checked.tone).toBe("pass");
		const checks = (h.deps.checkPage as jest.Mock).mock.calls.length;

		expect(await h.run("note")).toBe(0);
		expect((h.deps.checkPage as jest.Mock).mock.calls.length).toBe(checks);
		expect(h.bridge.notes.at(-1)).toMatchObject({
			tone: "pass",
			status: checked.status,
		});

		// A build newer than the report makes it stale: the note says unchecked.
		await h.run("build");
		await h.run("note");
		expect(h.bridge.notes.at(-1).tone).toBe("unchecked");
	});

	it("links the check report only when the page fails", async () => {
		const h = discoveringHarness();
		await h.run("init");
		await h.run("add", "home", "1:1", "/");
		await h.run("add", "bad", "1:2", "/bad");
		writeFileSync(
			join(dir, CONFIG_FILE),
			JSON.stringify({
				...loadConfig(dir),
				repoUrl: "https://github.com/org/web",
				branch: "main",
			}),
		);
		await h.run("sync");
		for (const n of ["home", "bad"]) {
			mkdirSync(join(dir, ".figma/pages", n, "fidelity"), { recursive: true });
			writeFileSync(
				join(dir, ".figma/pages", n, "fidelity/report.md"),
				"# report",
			);
		}
		await h.run("check");
		const notes = h.bridge.notes.slice(-2);
		expect(notes[0].title).toBe("</>  /  ·  📄 Spec MD ↗  ·  🧩 Code ↗");
		expect(notes[1].title).toBe(
			"</>  /bad  ·  📄 Spec MD ↗  ·  🧩 Code ↗  ·  📊 Báo cáo kiểm tra ↗",
		);
	});
});

describe("discover across pages", () => {
	it("walks every Figma page and keeps screens that share a code on different pages", async () => {
		const frame = (id: string, name: string) => ({
			id,
			name,
			type: "FRAME",
			width: 1440,
			height: 900,
			children: [],
		});
		const page = (name: string, children: unknown[]) => ({
			name,
			children,
			loadAsync: async () => undefined,
		});
		const figma = {
			currentPage: null,
			fileKey: "ICSKEY",
			root: {
				children: [
					page("  ├─ ADMIN · HỌC VIÊN", [
						frame("1:1", "AD-HV-010000 — Học viên"),
						{
							type: "SECTION",
							children: [frame("1:2", "AD-HV-010110 — Học viên / Chi tiết")],
						},
					]),
					page("  ├─ CH · HỌC VIÊN", [frame("2:1", "AD-HV-010000 — Học viên")]),
				],
			},
		};
		const script = buildDiscoverScript({
			allPages: true,
			minWidth: 800,
			minHeight: 400,
		});
		const found = JSON.parse(
			await new Function(
				"figma",
				`return (async function() {\n${script}\n})()`,
			)(figma),
		);
		expect(found.page).toBe("all 2 pages");
		expect(
			found.frames.map(
				(f: { id: string; page: string }) => `${f.id}@${f.page}`,
			),
		).toEqual([
			"1:1@├─ ADMIN · HỌC VIÊN",
			"1:2@├─ ADMIN · HỌC VIÊN",
			"2:1@├─ CH · HỌC VIÊN",
		]);

		const dir = mkdtempSync(join(tmpdir(), "figall-"));
		try {
			writeFileSync(join(dir, "package.json"), "{}");
			const bridge = {
				executeCodeViaUI: jest.fn(async () => ({
					success: true,
					result: JSON.stringify(found),
				})),
				files: () => [],
				close: jest.fn(async () => undefined),
			};
			const deps = {
				openBridge: jest.fn(async () => bridge),
				checkPage: jest.fn(),
			} as unknown as Deps;
			const out: string[] = [];
			const io = {
				log: (l: string) => out.push(l),
				error: (l: string) => out.push(l),
			};
			await runCli(["init"], io, deps, dir);
			expect(
				await runCli(
					["discover", "--all-pages", "--main", "--doc-only"],
					io,
					deps,
					dir,
				),
			).toBe(0);
			expect(loadConfig(dir).pages).toEqual([
				{
					name: "ad-hv-010000",
					nodeId: "1:1",
					route: "/hoc-vien",
					docOnly: true,
				},
				{
					name: "ad-hv-010000-2",
					nodeId: "2:1",
					route: "/hoc-vien-ad-hv-010000-2",
					docOnly: true,
				},
			]);
			// Running it again changes nothing.
			await runCli(
				["discover", "--all-pages", "--main", "--doc-only"],
				io,
				deps,
				dir,
			);
			expect(loadConfig(dir).pages).toHaveLength(2);
		} finally {
			rmSync(dir, { recursive: true, force: true });
		}
	});
});
