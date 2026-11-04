/**
 * figma-page — run the Figma page pipeline in any project.
 *
 * Reads figma.pages.json at the project root and runs the same steps the MCP
 * tools expose: export frames from Figma (through the Desktop Bridge plugin),
 * generate Next.js code + page Markdown, and check the running page against
 * the design. Works outside an AI client too (CI: `figma-page check` exits 1
 * on FAIL).
 */

import { execFileSync } from "node:child_process";
import {
	existsSync,
	mkdirSync,
	readFileSync,
	statSync,
	writeFileSync,
} from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import type { FidelityReport } from "./core/page-spec/fidelity.js";
import {
	GENERATED_MARKER,
	type NextGenOptions,
} from "./core/page-spec/nextjs-codegen.js";
import type { PageSpec } from "./core/page-spec/normalize.js";
import {
	buildNote,
	buildNoteScript,
	type NoteContext,
} from "./core/page-spec/note.js";
import {
	changesMarkdown,
	diffSnapshots,
	type FetchJson,
	fetchSnapshot,
	restClient,
	type Snapshot,
} from "./core/page-spec/changes.js";
import { buildDiscoverScript } from "./core/page-spec/plugin-scripts.js";
import { restSource, type TokenTable } from "./core/page-spec/rest-source.js";
import { buildTokenTable } from "./core/page-spec/token-table.js";
import { restFrames, restOutline } from "./core/page-spec/rest-discover.js";
import {
	CONFIG_FILE,
	configPath,
	defaultConfig,
	loadConfig,
	MAIN_SCREEN,
	type PageEntry,
	type ProjectConfig,
	pageFromFrame,
	parseFigmaTarget,
	repoFileUrl,
	repoWebUrl,
	saveConfig,
	selectPages,
	specPathFor,
	upsertPage,
} from "./core/page-spec/project-config.js";
import { SKILL_PATH, skillMarkdown } from "./core/page-spec/skill-template.js";
import {
	checkPageFidelity,
	exportPageSpec,
	generateNextPageFiles,
	PageTimeoutError,
	planSharedSections,
	unwrapScriptResult,
	writePageDoc,
	writeSharedSections,
} from "./core/page-spec-tools.js";
import { DEFAULT_WS_PORT, getPortRange } from "./core/port-discovery.js";
import { WebSocketConnector } from "./core/websocket-connector.js";
import { FigmaWebSocketServer } from "./core/websocket-server.js";

export interface Io {
	log: (line: string) => void;
	error: (line: string) => void;
}

interface Bridge {
	executeCodeViaUI(
		code: string,
		timeoutMs?: number,
		fileKey?: string,
	): Promise<unknown>;
	/** Connected Figma files, for the file-key check. */
	files(): { fileKey: string | null; fileName: string }[];
	close(): Promise<void>;
}

export interface Deps {
	openBridge: (timeoutMs: number, io: Io, fileKey?: string) => Promise<Bridge>;
	checkPage: typeof checkPageFidelity;
	/** REST client for tests; by default built from FIGMA_ACCESS_TOKEN. */
	rest?: FetchJson;
}

/** Variable id → token, built by `figma-page tokens` for exports through REST. */
const TOKEN_TABLE = ".figma/token-table.json";

/** Timeouts in a row that mean Figma itself is stuck, not one heavy screen. */
const STALL_LIMIT = 3;

const HELP = `figma-page — Figma frames → pixel-exact Next.js pages (figma-console-mcp)

Usage: figma-page <command> [args] [--project <dir>]

  init                               Create ${CONFIG_FILE} and the Claude Code skill in the project
  discover --rest --list              Pages and sections of the Figma file (REST, no Figma Desktop)
  discover --rest [--figma-page a,b] [--sections x,y] [--match <regex>]
                                     Register frames through REST from the chosen pages/sections; the
                                     choice is saved ("scan") and reused when run again without flags
  discover [--main | --match <regex>] [--figma-page <name> | --all-pages] [--route-prefix /x] [--doc-only]
                                     Register every page-sized frame of a Figma page (default: the
                                     page open in Figma). --main keeps main screens (code ending in 00).
  add <name> <figma-link|node-id> <route> [--doc-only]
                                     Register (or update) a page
  list                               Show the pages and whether each has been exported
  export [names…] [--rest]           Read the frames from Figma (Desktop Bridge plugin must be open;
                                     --rest: through the REST API with FIGMA_ACCESS_TOKEN, no Figma)
  tokens                             Pair variable ids with token names from the exported specs
                                     (.figma/token-table.json), so export --rest keeps design tokens
  build  [names…]                    Generate Next.js code + page Markdown from the exported specs
  sync   [names…]                    export + build
  check  [names…] [--base-url URL]   Compare the running pages with Figma; exits 1 on FAIL
  changes [names…] [--save] [--report <file>] [--names <file.json>]
                                     What changed on Figma since the last --save, read through the
                                     REST API (FIGMA_ACCESS_TOKEN); Figma need not be open. Exits 3
                                     when something changed.
  note   [names…]                    Refresh the Figma code notes (links, last check result) without
                                     exporting or checking again

Options:
  --project <dir>    Project root (default: current directory)
  --base-url <url>   App URL for check (default: baseUrl in ${CONFIG_FILE})
  --chrome <path>    Chrome/Chromium binary for check (default: auto-detect / CHROME_PATH)
  --timeout <sec>    How long export waits for the Figma plugin (default 60)
  --page-timeout <sec>
                     Skip a page whose export takes longer (default 300, 0 = no limit);
                     the run goes on and prints the command to retry the skipped ones;
                     after ${STALL_LIMIT} timeouts in a row Figma counts as stalled and the run stops
  --since <time>     (export, sync) Skip a page whose spec was written at or after this time,
                     e.g. 2026-11-03T08:00, to continue a run that stopped
  --overwrite        Let build replace files it did not generate
  --no-figma-note    Do not write the code note under the Figma frames
  --doc-only         (add, discover) Page gets the Markdown spec and the Figma note only — no code
  --help             Show this help

No names = every page in ${CONFIG_FILE}.`;

const COMMANDS = [
	"init",
	"add",
	"discover",
	"list",
	"export",
	"build",
	"sync",
	"check",
	"changes",
	"note",
	"tokens",
];

// ============================================================================
// Bridge (export)
// ============================================================================

async function openBridge(
	timeoutMs: number,
	io: Io,
	fileKey?: string,
): Promise<Bridge> {
	for (const port of getPortRange(DEFAULT_WS_PORT)) {
		const server = new FigmaWebSocketServer({ port, host: "localhost" });
		try {
			await server.start();
		} catch (err) {
			const code = (err as { code?: string }).code;
			if (code === "EADDRINUSE") continue;
			throw err;
		}
		io.log(
			`Waiting for the Figma Desktop Bridge plugin (port ${port})… open Figma → Plugins → Development → Figma Desktop Bridge.`,
		);
		const ready = () => {
			const files = server.getConnectedFiles();
			return fileKey
				? files.some((f) => f.fileKey === fileKey)
				: server.isClientConnected();
		};
		const started = Date.now();
		while (!ready()) {
			if (Date.now() - started > timeoutMs) {
				const open = server
					.getConnectedFiles()
					.map((f) => `${f.fileName} (${f.fileKey})`);
				await server.stop();
				throw new Error(
					fileKey
						? `Figma file ${fileKey} did not connect within ${timeoutMs / 1000}s. ${open.length ? `Connected instead: ${open.join(", ")}. ` : ""}Open that file with the Desktop Bridge plugin running.`
						: `No Figma file connected within ${timeoutMs / 1000}s. Open the file in Figma Desktop and run the Desktop Bridge plugin.`,
				);
			}
			await new Promise((r) => setTimeout(r, 500));
		}
		const connector = new WebSocketConnector(server);
		return {
			executeCodeViaUI: (code, t, key) =>
				connector.executeCodeViaUI(code, t, key ?? fileKey),
			files: () => server.getConnectedFiles(),
			close: () => server.stop(),
		};
	}
	throw new Error(
		"All Desktop Bridge ports (9223–9232) are in use. Close an MCP server and retry.",
	);
}

// ============================================================================
// Commands
// ============================================================================

function writeSkill(projectRoot: string, io: Io): void {
	const path = join(projectRoot, SKILL_PATH);
	if (
		existsSync(path) &&
		!readFileSync(path, "utf-8").includes(GENERATED_MARKER)
	) {
		io.log(`Kept ${SKILL_PATH} (edited by hand).`);
		return;
	}
	mkdirSync(dirname(path), { recursive: true });
	writeFileSync(path, skillMarkdown(), "utf-8");
	io.log(`Wrote ${SKILL_PATH}`);
}

function cmdInit(projectRoot: string, io: Io): number {
	if (!existsSync(join(projectRoot, "package.json")))
		throw new Error(
			`${projectRoot} has no package.json — run init in the Next.js project root.`,
		);
	if (existsSync(configPath(projectRoot)))
		io.log(`Kept existing ${CONFIG_FILE}.`);
	else {
		saveConfig(projectRoot, defaultConfig());
		io.log(`Wrote ${CONFIG_FILE}`);
	}
	writeSkill(projectRoot, io);
	io.log("");
	io.log(
		'Next: figma-page add <name> "<figma link to the frame>" <route>, then figma-page sync <name>.',
	);
	return 0;
}

function cmdAdd(
	projectRoot: string,
	args: string[],
	io: Io,
	docOnly = false,
): number {
	const [name, target, route] = args;
	if (!name || !target || !route)
		throw new Error(
			"Usage: figma-page add <name> <figma-link|node-id> <route>",
		);
	let config = loadConfig(projectRoot);
	const { nodeId, fileKey } = parseFigmaTarget(target);
	if (fileKey) {
		if (config.fileKey && config.fileKey !== fileKey) {
			throw new Error(
				`This link is from Figma file ${fileKey}, but ${CONFIG_FILE} is set to ${config.fileKey}. One config reads from one Figma file.`,
			);
		}
		config = { ...config, fileKey };
	}
	const res = upsertPage(config, {
		name,
		nodeId,
		route,
		...(docOnly ? { docOnly: true } : {}),
	});
	saveConfig(projectRoot, res.config);
	io.log(
		`${res.updated ? "Updated" : "Added"} page "${name}" → ${route} (node ${nodeId})${docOnly ? " — doc only" : ""}.`,
	);
	return 0;
}

/** Registers every page-sized frame of a Figma page, named and routed from the frame names. */
async function cmdDiscover(
	projectRoot: string,
	flags: Record<string, string | boolean>,
	io: Io,
	deps: Deps,
): Promise<number> {
	let config = loadConfig(projectRoot);
	const match =
		flags.main === true
			? MAIN_SCREEN
			: typeof flags.match === "string"
				? new RegExp(flags.match)
				: null;
	const timeoutMs =
		(typeof flags.timeout === "string" ? Number(flags.timeout) : 60) * 1000;
	let found: {
		page: string;
		fileKey: string | null;
		frames: { id: string; name: string }[];
	};
	if (flags.rest === true) {
		// Through REST: no Figma Desktop. The scope (pages, sections, match) is saved for the next runs.
		if (!config.fileKey)
			throw new Error(
				`No fileKey in ${CONFIG_FILE}: add one screen first (figma-page add) or set it.`,
			);
		const rest = restFrom(deps);
		if (flags.list === true) {
			for (const p of await restOutline(rest, config.fileKey as string)) {
				io.log(`${p.name}${p.frames ? `  (${p.frames} frames)` : ""}`);
				for (const sec of p.sections)
					io.log(`  └ ${sec.name}  (${sec.frames} frames)`);
			}
			return 0;
		}
		const list = (v: string | boolean | undefined) =>
			typeof v === "string"
				? v
						.split(",")
						.map((x) => x.trim())
						.filter(Boolean)
				: undefined;
		const given =
			list(flags["figma-page"]) ||
			list(flags.sections) ||
			typeof flags.match === "string";
		const scan = given
			? {
					figmaPages: list(flags["figma-page"]),
					sections: list(flags.sections),
					match: typeof flags.match === "string" ? flags.match : undefined,
				}
			: (config.scan ?? {});
		if (given) config = { ...config, scan };
		found = await restFrames(rest, config.fileKey as string, {
			figmaPages: scan.figmaPages,
			sections: scan.sections,
			match: scan.match ? new RegExp(scan.match) : undefined,
			minWidth: 800,
			minHeight: 400,
		});
	} else {
		const bridge = await deps.openBridge(timeoutMs, io, config.fileKey);
		try {
			const script = buildDiscoverScript({
				pageName:
					typeof flags["figma-page"] === "string"
						? flags["figma-page"]
						: undefined,
				allPages: flags["all-pages"] === true,
				minWidth: 800,
				minHeight: 400,
			});
			found = unwrapScriptResult(
				await bridge.executeCodeViaUI(script, 180000),
			) as typeof found;
		} finally {
			await bridge.close();
		}
	}
	if (!config.fileKey && found.fileKey)
		config = { ...config, fileKey: found.fileKey };
	const frames = match
		? found.frames.filter((f) => match.test(f.name))
		: found.frames;
	const prefix =
		typeof flags["route-prefix"] === "string" ? flags["route-prefix"] : "";
	let added = 0;
	let updated = 0;
	let kept = 0;
	for (const frame of frames) {
		// Through REST (run by CI on a schedule) only new frames are added: a registered one keeps its name and route.
		if (flags.rest === true && config.pages.some((p) => p.nodeId === frame.id)) {
			kept++;
			continue;
		}
		// A frame already registered under another name (maybe with code) stays as it is.
		if (
			config.pages.some(
				(p) =>
					p.nodeId === frame.id && p.name !== pageFromFrame(frame, prefix).name,
			)
		) {
			kept++;
			continue;
		}
		const base = pageFromFrame(frame, prefix);
		const entry = {
			...base,
			// popups, dropdowns and states (code not ending in 00) open over their screen: /frames/<code>
			...(flags.rest === true && !MAIN_SCREEN.test(frame.name) && /-\d{6}/.test(frame.name) ? { route: `/frames/${base.name}` } : {}),
			...(flags["doc-only"] === true ? { docOnly: true } : {}),
		};
		// The same screen code on two Figma pages (a screen copied into another role's page): keep both.
		for (
			let n = 2;
			config.pages.some(
				(p) => p.name === entry.name && p.nodeId !== entry.nodeId,
			);
			n++
		) {
			entry.name = `${pageFromFrame(frame, prefix).name}-${n}`;
		}
		// Two frames with the same title (e.g. a light and a dark version): keep both routes apart.
		if (
			config.pages.some((p) => p.route === entry.route && p.name !== entry.name)
		)
			entry.route += `-${entry.name}`;
		const res = upsertPage(config, entry);
		config = res.config;
		if (res.updated) updated++;
		else added++;
	}
	saveConfig(projectRoot, config);
	io.log(
		`Figma page “${found.page.trim()}”: ${found.frames.length} frames, ${frames.length} match → ${added} added, ${updated} updated${kept ? `, ${kept} already registered under another name` : ""}.`,
	);
	for (const f of frames.slice(0, 5)) {
		const p = pageFromFrame(f, prefix);
		io.log(`  ${p.name.padEnd(20)} ${p.route}`);
	}
	if (frames.length > 5)
		io.log(`  … ${frames.length - 5} more (figma-page list)`);
	return 0;
}

function cmdList(projectRoot: string, io: Io): number {
	const config = loadConfig(projectRoot);
	if (!config.pages.length) {
		io.log(
			`No pages in ${CONFIG_FILE}. Add one: figma-page add <name> <figma-link> <route>`,
		);
		return 0;
	}
	for (const p of config.pages) {
		const specPath = specPathFor(projectRoot, config, p);
		let state = "not exported";
		if (existsSync(specPath)) {
			try {
				state = `exported ${JSON.parse(readFileSync(specPath, "utf-8")).source.exportedAt}`;
			} catch {
				state = "spec unreadable";
			}
		}
		io.log(
			`${p.name.padEnd(24)} ${p.route.padEnd(32)} ${p.nodeId.padEnd(14)} ${state}`,
		);
	}
	return 0;
}

async function cmdExport(
	projectRoot: string,
	config: ProjectConfig,
	pages: PageEntry[],
	timeoutMs: number,
	io: Io,
	deps: Deps,
	whileConnected?: (bridge: Bridge, skipped: PageEntry[]) => Promise<void>,
	pageTimeoutMs = 0,
	sinceMs = 0,
	/** Read through the REST API instead of the plugin (export --rest): no Figma Desktop needed. */
	rest?: FetchJson,
): Promise<number> {
	if (!pages.length)
		throw new Error(
			`No pages to export. Add one: figma-page add <name> <figma-link> <route>`,
		);
	if (rest && !config.fileKey)
		throw new Error(`export --rest needs "fileKey" in ${CONFIG_FILE}.`);
	const tokenPath = join(projectRoot, TOKEN_TABLE);
	const tokens =
		rest && existsSync(tokenPath)
			? (JSON.parse(readFileSync(tokenPath, "utf-8")) as TokenTable)
			: undefined;
	if (rest && !tokens)
		io.log(
			`! ${TOKEN_TABLE} missing: bound colours stay raw values. Build it with: figma-page tokens`,
		);
	const bridge = rest
		? null
		: await deps.openBridge(timeoutMs, io, config.fileKey);
	const skipped: { page: PageEntry; reason: string }[] = [];
	const resumeFrom = new Date(sinceMs || Date.now()).toISOString();
	let timeoutsInARow = 0;
	let stalled = false;
	let alreadyDone = 0;
	try {
		for (const [i, p] of pages.entries()) {
			const specPath = specPathFor(projectRoot, config, p);
			if (
				sinceMs &&
				existsSync(specPath) &&
				statSync(specPath).mtimeMs >= sinceMs
			) {
				alreadyDone++;
				continue;
			}
			const outputDir = dirname(specPath);
			try {
				const pageName = existsSync(specPath)
					? (JSON.parse(readFileSync(specPath, "utf-8")).source?.pageName ??
						null)
					: null;
				const from = rest
					? restSource(rest, {
							fileKey: config.fileKey as string,
							tokens,
							pageName,
						})
					: (bridge as Bridge);
				const { spec } = await exportPageSpec(from, {
					nodeId: p.nodeId,
					outputDir,
					// Doc-only pages need neither asset files nor a reference render.
					exportAssets: !p.docOnly,
					includeReference: !p.docOnly,
					referenceScale: 1,
					detectIcons: true,
					respectExportSettings: false,
					includeHidden: false,
					deadline: pageTimeoutMs ? Date.now() + pageTimeoutMs : undefined,
				});
				const exported = spec.assets.filter((a) => a.fetched).length;
				timeoutsInARow = 0;
				io.log(
					`✓ ${p.name}: ${spec.source.nodeName} ${spec.frame.width}×${spec.frame.height}, ${spec.stats.nodes} layers, ${exported}/${spec.assets.length} assets, ${spec.warnings.length} warnings → ${relative(projectRoot, outputDir)}`,
				);
			} catch (err) {
				// One stuck or broken screen must not stop a run over hundreds of them.
				const reason = err instanceof Error ? err.message : String(err);
				skipped.push({ page: p, reason });
				io.log(`✗ ${p.name}: skipped — ${reason}`);
				if (
					err instanceof PageTimeoutError &&
					++timeoutsInARow >= STALL_LIMIT
				) {
					// Waiting out every remaining screen would only lose hours.
					stalled = true;
					for (const rest of pages.slice(i + 1))
						skipped.push({ page: rest, reason: "not reached" });
					break;
				}
			}
		}
		if (alreadyDone)
			io.log(`  ${alreadyDone} page(s) already exported since ${resumeFrom}`);
		if (whileConnected && bridge)
			await whileConnected(
				bridge,
				skipped.map((s) => s.page),
			);
	} finally {
		await bridge?.close();
	}
	if (stalled) {
		const names =
			pages.length === config.pages.length
				? ""
				: ` ${pages.map((p) => p.name).join(" ")}`;
		io.log(
			`! Stopped: ${STALL_LIMIT} pages in a row timed out, so Figma looks stalled (window hidden, screen off, lost connection). Finished pages are kept. Continue with:\n  figma-page export${names} --since ${resumeFrom}`,
		);
		return 1;
	}
	if (skipped.length) {
		io.log(
			`! ${skipped.length} page(s) skipped; their earlier export (if any) is kept. Retry them with:\n  figma-page export ${skipped.map((s) => s.page.name).join(" ")}`,
		);
		return 1;
	}
	return 0;
}

function cmdBuild(
	projectRoot: string,
	config: ProjectConfig,
	pages: PageEntry[],
	overwrite: boolean,
	io: Io,
): number {
	if (!pages.length) throw new Error("No pages to build.");
	const genArgs = (p: PageEntry) => ({
		specPath: specPathFor(projectRoot, config, p),
		projectRoot,
		route: p.route,
		pageName: p.name,
		appDir: config.appDir,
		componentsDir: config.componentsDir,
		publicDir: config.publicDir,
		fontSource: config.fontSource,
		styling: config.styling,
		codeStyle: config.codeStyle,
		debugIds: config.debugIds,
		overwrite,
		shareAssets: share,
	});
	const share = config.share && config.styling === "tailwind";
	if (config.share && !share)
		io.log('! "share" needs "styling": "tailwind"; building without sharing.');
	// Shared sections are decided over every coded page, not just the ones being built.
	let shared: NextGenOptions["shared"];
	let toBuild = pages;
	const codeFiles: string[] = [];
	if (share) {
		const coded = config.pages.filter(
			(p) => !p.docOnly && existsSync(specPathFor(projectRoot, config, p)),
		);
		const plan = planSharedSections(coded.map(genArgs), projectRoot);
		shared = plan.shared;
		const res = writeSharedSections(projectRoot, plan);
		io.log(
			`✓ shared: ${res.written.length} components used by 2+ pages${res.removed.length ? `, ${res.removed.length} old ones removed` : ""}`,
		);
		codeFiles.push(...res.written);
		// The plan can rename or drop shared components, so every coded page is
		// regenerated against it (offline and quick), not only the ones asked for.
		const others = coded.filter((c) => !pages.some((p) => p.name === c.name));
		if (others.length) {
			io.log(`  regenerating ${others.length} other coded pages against them`);
			toBuild = [...pages, ...others];
		}
	}
	for (const p of toBuild) {
		const specPath = specPathFor(projectRoot, config, p);
		if (!existsSync(specPath))
			throw new Error(
				`Page "${p.name}" has not been exported yet. Run: figma-page export ${p.name}`,
			);
		if (p.docOnly) {
			const segs = p.route.split("/").filter(Boolean);
			const docFile = join(
				config.docsDir,
				`${segs.length ? segs.join("/") : "index"}.md`,
			)
				.split("\\")
				.join("/");
			writePageDoc(
				{
					specPath,
					outputPath: join(projectRoot, docFile),
					language: config.docLanguage,
					route: p.route,
					root: projectRoot,
				},
				projectRoot,
			);
			const build: BuildInfo = {
				route: p.route,
				pageFile: "",
				docFile,
				sections: [],
			};
			writeFileSync(
				join(dirname(specPath), "build.json"),
				`${JSON.stringify(build, null, 2)}\n`,
				"utf-8",
			);
			io.log(`✓ ${p.name}: ${p.route} — page MD only (${docFile})`);
			continue;
		}
		const res = generateNextPageFiles({
			...genArgs(p),
			shared,
			writeDoc: true,
			docsDir: config.docsDir,
			docLanguage: config.docLanguage,
		});
		const build: BuildInfo = {
			route: res.route,
			pageFile: res.pageFile,
			docFile: res.docFile ?? "",
			sections: res.sections,
			...(Object.keys(res.idAlias).length ? { idAlias: res.idAlias } : {}),
		};
		writeFileSync(
			join(dirname(specPath), "build.json"),
			`${JSON.stringify(build, null, 2)}\n`,
			"utf-8",
		);
		io.log(
			`✓ ${p.name}: ${res.route} — ${res.written.length} files (component ${res.componentName})`,
		);
		for (const w of res.warnings) io.log(`  ! ${w}`);
		codeFiles.push(...res.written);
	}
	if (config.codeStyle?.prettier)
		formatWithPrettier(
			projectRoot,
			codeFiles.filter((f) => /\.(tsx?|css)$/.test(f)),
			io,
		);
	return 0;
}

/** Formats generated files with the project's own Prettier and config. */
function formatWithPrettier(
	projectRoot: string,
	files: string[],
	io: Io,
): void {
	const bin = join(projectRoot, "node_modules", ".bin", "prettier");
	if (!existsSync(bin)) {
		io.log(
			"! codeStyle.prettier: Prettier is not installed in the project; files left as generated.",
		);
		return;
	}
	const unique = [...new Set(files)];
	// Batches keep the command line short on projects with hundreds of pages.
	for (let i = 0; i < unique.length; i += 200)
		execFileSync(
			bin,
			["--write", "--log-level", "warn", ...unique.slice(i, i + 200)],
			{
				cwd: projectRoot,
				stdio: "pipe",
			},
		);
	io.log(`✓ formatted ${unique.length} files with Prettier`);
}

/** What the last build produced, kept next to the spec so check can update the note without rebuilding. */
interface BuildInfo {
	route: string;
	pageFile: string;
	docFile: string;
	sections: { nodeId: string; component: string; file: string }[];
	/** Figma id → data-figma-id rendered by a shared section (for check). */
	idAlias?: Record<string, string>;
}

function git(projectRoot: string, args: string[]): string | null {
	try {
		return execFileSync("git", args, {
			cwd: projectRoot,
			encoding: "utf-8",
			stdio: ["ignore", "pipe", "ignore"],
		}).trim();
	} catch {
		return null;
	}
}

/** Where the note links point: the repo's web UI, at the configured or current branch. */
function noteLinks(
	projectRoot: string,
	config: ProjectConfig,
	page: PageEntry,
	build: BuildInfo,
	fidelity?: NoteContext["fidelity"],
): NoteContext["links"] {
	const base = config.demoUrl?.replace(/\/+$/, "");
	const demo = base && build.pageFile ? `${base}${page.route}` : undefined;
	// The deployed app shows the MD and code to anyone with the link.
	const viewer =
		base && config.sourceViewer ? `${base}/figma/${page.name}` : undefined;
	const remote =
		config.repoUrl ?? git(projectRoot, ["remote", "get-url", "origin"]);
	const repo = remote ? repoWebUrl(remote) : null;
	let branch =
		config.branch ?? git(projectRoot, ["rev-parse", "--abbrev-ref", "HEAD"]);
	if (!branch || branch === "HEAD") branch = "main";
	const inRepo = (path: string, kind: "blob" | "tree") =>
		repo ? repoFileUrl(repo, branch, path, kind) : undefined;
	const reportPath = join(config.specDir, page.name, "fidelity", "report.md")
		.split("\\")
		.join("/");
	const links: NonNullable<NoteContext["links"]> = {
		demo,
		doc: !build.docFile
			? undefined
			: viewer
				? `${viewer}/spec`
				: inRepo(build.docFile, "blob"),
		code: !build.pageFile
			? undefined
			: viewer
				? `${viewer}/code`
				: inRepo(dirname(build.pageFile), "tree"),
		// The report only matters when something is off.
		report:
			fidelity &&
			!fidelity.report.pass &&
			existsSync(join(projectRoot, reportPath))
				? inRepo(reportPath, "blob")
				: undefined,
	};
	return Object.values(links).some(Boolean) ? links : undefined;
}

/** Writes (or refreshes) the code note under the page frame in Figma. */
async function notePage(
	bridge: Bridge,
	projectRoot: string,
	config: ProjectConfig,
	page: PageEntry,
	io: Io,
	fidelity?: NoteContext["fidelity"],
): Promise<void> {
	const specPath = specPathFor(projectRoot, config, page);
	const buildPath = join(dirname(specPath), "build.json");
	if (!existsSync(buildPath)) {
		io.log(
			`  ! ${page.name}: no build yet — run figma-page build ${page.name} first.`,
		);
		return;
	}
	const spec = JSON.parse(readFileSync(specPath, "utf-8")) as PageSpec;
	const build = JSON.parse(readFileSync(buildPath, "utf-8")) as BuildInfo;
	const note = buildNote(spec, {
		route: build.route,
		pageFile: build.pageFile,
		docFile: build.docFile,
		fidelity,
		links: noteLinks(projectRoot, config, page, build, fidelity),
	});
	const res = unwrapScriptResult(
		await bridge.executeCodeViaUI(
			buildNoteScript(spec.source.nodeId, note),
			60000,
		),
	) as { created?: boolean; overlaps?: string[] };
	io.log(
		`✓ ${page.name}: Figma code note ${res.created ? "added" : "updated"} under the frame`,
	);
	if (res.overlaps?.length) {
		const names = res.overlaps
			.slice(0, 5)
			.map((n) => `“${n}”`)
			.join(", ");
		io.log(
			`  ! it overlaps ${names}${res.overlaps.length > 5 ? ` (+${res.overlaps.length - 5})` : ""} — spread the layout out when convenient.`,
		);
	}
}

/**
 * Rewrites the code notes from what is on disk: the build and the last check
 * report (when it is newer than the build), e.g. after changing the links.
 */
async function cmdNote(
	projectRoot: string,
	config: ProjectConfig,
	pages: PageEntry[],
	io: Io,
	deps: Deps,
): Promise<number> {
	if (!pages.length) throw new Error("No pages to note.");
	const bridge = await deps.openBridge(15000, io, config.fileKey);
	try {
		for (const p of pages) {
			const dir = dirname(specPathFor(projectRoot, config, p));
			const reportPath = join(dir, "fidelity", "report.json");
			const buildPath = join(dir, "build.json");
			// A report older than the build describes code that is gone.
			const fresh =
				!p.docOnly &&
				existsSync(reportPath) &&
				existsSync(buildPath) &&
				statSync(reportPath).mtimeMs >= statSync(buildPath).mtimeMs;
			const fidelity = fresh
				? {
						report: JSON.parse(
							readFileSync(reportPath, "utf-8"),
						) as FidelityReport,
						checkedAt: statSync(reportPath).mtime.toISOString(),
					}
				: undefined;
			await notePage(bridge, projectRoot, config, p, io, fidelity);
		}
	} finally {
		await bridge.close();
	}
	return 0;
}

async function cmdCheck(
	projectRoot: string,
	config: ProjectConfig,
	pages: PageEntry[],
	baseUrl: string,
	chromePath: string | undefined,
	figmaNote: boolean,
	io: Io,
	deps: Deps,
): Promise<number> {
	if (!pages.length) throw new Error("No pages to check.");
	const results: { page: PageEntry; report: FidelityReport }[] = [];
	if (!config.debugIds)
		io.log(
			"! debugIds is off in the config: box measurements are skipped (pixels only).",
		);
	let failed = 0;
	const unchecked: string[] = [];
	for (const p of pages) {
		if (p.docOnly) {
			io.log(`- ${p.name}: doc-only page, nothing to check`);
			continue;
		}
		const specPath = specPathFor(projectRoot, config, p);
		if (!existsSync(specPath))
			throw new Error(
				`Page "${p.name}" has not been exported yet. Run: figma-page export ${p.name}`,
			);
		const url = `${baseUrl.replace(/\/+$/, "")}${p.route}`;
		const buildPath = join(dirname(specPath), "build.json");
		const idAlias = existsSync(buildPath)
			? (JSON.parse(readFileSync(buildPath, "utf-8")) as BuildInfo).idAlias
			: undefined;
		let r: Awaited<ReturnType<Deps["checkPage"]>>;
		try {
			r = await deps.checkPage({
				specPath,
				url,
				idAlias,
				chromePath,
				...config.thresholds,
			});
		} catch (err) {
			// One page that never loads must not end a check over hundreds of them.
			io.log(
				`✗ ${p.name} ${url}: not checked — ${err instanceof Error ? err.message : String(err)}`,
			);
			unchecked.push(p.name);
			failed++;
			continue;
		}
		const boxes = r.boxes
			? `, boxes ${r.boxes.withinThreshold}/${r.boxes.measured} within limit`
			: "";
		io.log(
			`${r.pass ? "PASS" : "FAIL"} ${p.name} ${url} — non-text pixels ${r.pixels.shapePercent}%${boxes}`,
		);
		for (const f of r.failures) io.log(`  - ${f}`);
		io.log(
			`  report: ${relative(projectRoot, join(r.outputDir, "report.md"))}`,
		);
		if (!r.pass) failed++;
		results.push({ page: p, report: r });
	}
	if (unchecked.length)
		io.log(
			`! ${unchecked.length} page(s) not checked. Retry them with:\n  figma-page check ${unchecked.join(" ")}`,
		);
	if (figmaNote) {
		// The note is a convenience: a closed Figma must not turn a check into an error (CI).
		const checkedAt = new Date().toISOString();
		let bridge: Bridge | null = null;
		try {
			bridge = await deps.openBridge(15000, io, config.fileKey);
			for (const { page, report } of results)
				await notePage(bridge, projectRoot, config, page, io, {
					report,
					checkedAt,
				});
		} catch (err) {
			io.log(
				`! Skipped the Figma code note: ${err instanceof Error ? err.message : String(err)}`,
			);
		} finally {
			await bridge?.close();
		}
	}
	if (pages.length > 1)
		io.log(`${pages.length - failed}/${pages.length} pages pass.`);
	return failed ? 1 : 0;
}

// ============================================================================
// Entry
// ============================================================================

/** REST client from FIGMA_ACCESS_TOKEN (or the test double in deps). */
function restFrom(deps: Deps): FetchJson {
	const token = process.env.FIGMA_ACCESS_TOKEN;
	if (!deps.rest && !token)
		throw new Error(
			"Set FIGMA_ACCESS_TOKEN to read Figma through the REST API.",
		);
	return deps.rest ?? restClient(token as string);
}

/** Token table for export --rest: variable ids paired with the names in the plugin-exported specs. */
async function cmdTokens(
	projectRoot: string,
	config: ProjectConfig,
	io: Io,
	rest: FetchJson,
): Promise<number> {
	if (!config.fileKey) throw new Error(`No fileKey in ${CONFIG_FILE}.`);
	const screens = config.pages
		.filter((p) => existsSync(specPathFor(projectRoot, config, p)))
		.map((p) => {
			const spec = JSON.parse(
				readFileSync(specPathFor(projectRoot, config, p), "utf-8"),
			) as PageSpec;
			return {
				nodeId: p.nodeId,
				spec,
				dark: /-DK\b/.test(spec.source.nodeName),
			};
		})
		.filter((s) => s.spec.tokens?.variables?.length);
	if (!screens.length)
		throw new Error(
			"No exported page specs with tokens: export some screens through the plugin first.",
		);
	const { table, conflicts } = await buildTokenTable(
		rest,
		config.fileKey,
		screens,
		(d, n) => {
			if (d % 80 < 8 || d === n) io.log(`  ${d}/${n}`);
		},
	);
	const path = join(projectRoot, TOKEN_TABLE);
	mkdirSync(dirname(path), { recursive: true });
	writeFileSync(path, `${JSON.stringify(table, null, 1)}\n`, "utf-8");
	const names = new Set(
		screens.flatMap((s) => s.spec.tokens.variables.map((v) => v.name)),
	);
	const paired = new Set(Object.values(table).map((v) => v.name));
	io.log(
		`✓ ${TOKEN_TABLE}: ${Object.keys(table).length} variables, ${paired.size}/${names.size} token names${conflicts ? `, ${conflicts} conflicting pairs` : ""}`,
	);
	return 0;
}

/** Compares the registered screens on Figma with the last saved snapshot. */
async function cmdChanges(
	projectRoot: string,
	config: ProjectConfig,
	pages: PageEntry[],
	flags: Record<string, string | boolean>,
	io: Io,
	deps: Deps,
): Promise<number> {
	if (!config.fileKey) throw new Error(`No fileKey in ${CONFIG_FILE}.`);
	const token = process.env.FIGMA_ACCESS_TOKEN;
	if (!deps.rest && !token)
		throw new Error(
			"Set FIGMA_ACCESS_TOKEN to read Figma through the REST API.",
		);
	const rest = deps.rest ?? restClient(token as string);
	const snapshotPath = join(projectRoot, config.specDir, "snapshot.json");
	const previous: Snapshot | null = existsSync(snapshotPath)
		? JSON.parse(readFileSync(snapshotPath, "utf-8"))
		: null;
	const { snapshot, missing } = await fetchSnapshot(
		rest,
		config.fileKey,
		pages.map((p) => ({ name: p.name, nodeId: p.nodeId })),
		(done, total) => {
			if (done % 50 === 0 || done === total) io.log(`  read ${done}/${total}`);
		},
	);
	for (const name of missing) io.log(`! ${name}: frame not found on Figma`);
	// Only the screens read this time are compared; a partial run keeps the others.
	const before: Snapshot = previous
		? {
				...previous,
				pages: Object.fromEntries(
					pages
						.filter((p) => previous.pages[p.name])
						.map((p) => [p.name, previous.pages[p.name]]),
				),
			}
		: { version: 1, pages: {} };
	const changes = previous ? diffSnapshots(before, snapshot) : [];
	const report = previous
		? changesMarkdown(changes, 12, pages.length)
		: `Lần đầu: đã đọc ${Object.keys(snapshot.pages).length} màn, chưa có gì để so.\n`;
	if (typeof flags.report === "string") {
		const out = resolve(projectRoot, flags.report);
		mkdirSync(dirname(out), { recursive: true });
		writeFileSync(out, report, "utf-8");
	}
	io.log(report.trimEnd());
	// Names of the screens to re-export (edited, renamed or newly drawn), for scripts: --names <file.json>
	if (typeof flags.names === "string") {
		const out = resolve(projectRoot, flags.names);
		mkdirSync(dirname(out), { recursive: true });
		writeFileSync(
			out,
			`${JSON.stringify(changes.filter((c) => c.status !== "removed").map((c) => c.page))}\n`,
			"utf-8",
		);
	}
	if (flags.save === true) {
		mkdirSync(dirname(snapshotPath), { recursive: true });
		const merged: Snapshot = {
			...snapshot,
			pages: { ...previous?.pages, ...snapshot.pages },
		};
		writeFileSync(snapshotPath, `${JSON.stringify(merged)}\n`, "utf-8");
		io.log(`✓ snapshot saved: ${relative(projectRoot, snapshotPath)}`);
	}
	return changes.length ? 3 : 0;
}

function parseArgs(argv: string[]): {
	command: string;
	args: string[];
	flags: Record<string, string | boolean>;
} {
	const flags: Record<string, string | boolean> = {};
	const args: string[] = [];
	const valued = new Set([
		"project",
		"base-url",
		"chrome",
		"timeout",
		"match",
		"figma-page",
		"route-prefix",
		"sections",
		"page-timeout",
		"report",
		"names",
		"since",
	]);
	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		if (a.startsWith("--")) {
			const [key, inline] = a.slice(2).split("=", 2);
			if (inline !== undefined) flags[key] = inline;
			else if (valued.has(key)) {
				const v = argv[++i];
				if (v === undefined) throw new Error(`--${key} needs a value`);
				flags[key] = v;
			} else flags[key] = true;
		} else args.push(a);
	}
	const [command = "help", ...rest] = args;
	return { command, args: rest, flags };
}

export async function runCli(
	argv: string[],
	io: Io,
	deps: Deps = { openBridge, checkPage: checkPageFidelity },
	cwd: string = process.cwd(),
): Promise<number> {
	try {
		const { command, args, flags } = parseArgs(argv);
		if (flags.help || command === "help") {
			io.log(HELP);
			return 0;
		}
		if (!COMMANDS.includes(command)) {
			io.error(`Unknown command "${command}".\n\n${HELP}`);
			return 2;
		}
		const projectRoot = resolve(
			cwd,
			typeof flags.project === "string" ? flags.project : ".",
		);
		switch (command) {
			case "init":
				return cmdInit(projectRoot, io);
			case "add":
				return cmdAdd(projectRoot, args, io, flags["doc-only"] === true);
			case "discover":
				return await cmdDiscover(projectRoot, flags, io, deps);
			case "list":
				return cmdList(projectRoot, io);
		}
		const config = loadConfig(projectRoot);
		const pages = selectPages(config, args);
		const figmaNote = config.figmaNote && flags["no-figma-note"] !== true;
		const timeoutMs =
			(typeof flags.timeout === "string" ? Number(flags.timeout) : 60) * 1000;
		// How long one page may take to export before it is skipped (0 = no limit).
		const pageTimeoutMs =
			(typeof flags["page-timeout"] === "string"
				? Number(flags["page-timeout"])
				: 300) * 1000;
		const sinceMs =
			typeof flags.since === "string" ? Date.parse(flags.since) : 0;
		if (Number.isNaN(sinceMs))
			throw new Error(`--since: not a date: ${flags.since}`);
		const rest =
			flags.rest === true || command === "tokens" ? restFrom(deps) : undefined;
		switch (command) {
			case "export":
				return await cmdExport(
					projectRoot,
					config,
					pages,
					timeoutMs,
					io,
					deps,
					undefined,
					pageTimeoutMs,
					sinceMs,
					rest,
				);
			case "tokens":
				return await cmdTokens(projectRoot, config, io, rest as FetchJson);
			case "build":
				return cmdBuild(
					projectRoot,
					config,
					pages,
					flags.overwrite === true,
					io,
				);
			case "sync": {
				if (rest) {
					// REST has no plugin to write the Figma code note: export, then build.
					const code = await cmdExport(
						projectRoot,
						config,
						pages,
						timeoutMs,
						io,
						deps,
						undefined,
						pageTimeoutMs,
						sinceMs,
						rest,
					);
					const ready = pages.filter((p) =>
						existsSync(specPathFor(projectRoot, config, p)),
					);
					if (ready.length)
						cmdBuild(projectRoot, config, ready, flags.overwrite === true, io);
					return code;
				}
				// Build while Figma is still connected, then refresh the code note under each frame.
				return await cmdExport(
					projectRoot,
					config,
					pages,
					timeoutMs,
					io,
					deps,
					async (bridge, skipped) => {
						// A skipped page still builds from its earlier export; one never exported cannot.
						const ready = pages.filter(
							(p) =>
								!skipped.includes(p) ||
								existsSync(specPathFor(projectRoot, config, p)),
						);
						if (!ready.length) return;
						cmdBuild(projectRoot, config, ready, flags.overwrite === true, io);
						if (figmaNote)
							for (const p of ready)
								await notePage(bridge, projectRoot, config, p, io);
					},
					pageTimeoutMs,
					sinceMs,
				);
			}
			case "check":
				return await cmdCheck(
					projectRoot,
					config,
					pages,
					typeof flags["base-url"] === "string"
						? flags["base-url"]
						: config.baseUrl,
					typeof flags.chrome === "string" ? flags.chrome : undefined,
					figmaNote,
					io,
					deps,
				);
			case "changes":
				return await cmdChanges(projectRoot, config, pages, flags, io, deps);
			case "note":
				return await cmdNote(projectRoot, config, pages, io, deps);
			default:
				return 2;
		}
	} catch (err) {
		io.error(`Error: ${err instanceof Error ? err.message : String(err)}`);
		return 1;
	}
}
