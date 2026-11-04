/**
 * Page Spec Export MCP Tool
 *
 * figma_export_page_spec reads a whole page frame through the Desktop Bridge
 * and writes a framework-agnostic page spec (page-spec.json) plus every image
 * and icon it needs and a reference render of the frame. Code generators and
 * the per-page Markdown docs are built from this spec; the reference render is
 * what the pixel-diff check compares against.
 *
 * Runs through the existing EXECUTE_CODE command, so no plugin update is
 * required. Writing to disk is local-mode only.
 */

import { createHash } from "node:crypto";
import {
	copyFileSync,
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import {
	dirname,
	extname,
	isAbsolute,
	join,
	relative,
	resolve,
} from "node:path";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { createChildLogger } from "./logger.js";
import {
	buildReport,
	DEFAULT_THRESHOLDS,
	diffImages,
	type FidelityThresholds,
	reportMarkdown,
} from "./page-spec/fidelity.js";
import {
	type CaptureOptions,
	type CaptureResult,
	capturePage,
} from "./page-spec/headless.js";
import {
	type DocLanguage,
	generatePageMarkdown,
} from "./page-spec/markdown.js";
import {
	GENERATED_MARKER,
	codeFileBase,
	generatedHeader,
	generateNextPage,
	type NextGenOptions,
	type SectionSource,
	sectionFile,
} from "./page-spec/nextjs-codegen.js";
import {
	assetFileName,
	type FetchedAsset,
	normalizePageSpec,
	type PageSpec,
	pngSize,
	type RawExtract,
	sniffImageExt,
} from "./page-spec/normalize.js";
import {
	type AssetJob,
	type ExtractParams,
	buildAssetScript,
	buildExtractScript,
	buildReferenceScript,
	PAGE_SPEC_KEY,
	PAGE_SPEC_NAMESPACE,
} from "./page-spec/plugin-scripts.js";
import { decodePng, encodePng } from "./page-spec/png.js";

const logger = createChildLogger({ component: "page-spec-tools" });

const EXTRACT_TIMEOUT_MS = 180000;
const ASSET_TIMEOUT_MS = 60000;
const INLINE_LIMIT_KB = 400;

const bool = (def: boolean) =>
	z.preprocess(
		(v) => (typeof v === "string" ? v === "true" : v),
		z.boolean().optional().default(def),
	);

/** EXECUTE_CODE results can arrive wrapped in one or more { result } layers. */
export function unwrapScriptResult(raw: unknown): unknown {
	let value = raw as
		| { success?: boolean; error?: string; result?: unknown }
		| unknown;
	for (let i = 0; i < 4; i++) {
		if (typeof value === "string") return JSON.parse(value);
		if (value && typeof value === "object") {
			const v = value as {
				success?: boolean;
				error?: string;
				result?: unknown;
			};
			if (v.success === false)
				throw new Error(v.error || "Plugin script failed");
			if ("result" in v) {
				value = v.result;
				continue;
			}
		}
		break;
	}
	if (value && typeof value === "object") return value;
	throw new Error("The Desktop Bridge returned no data.");
}

interface Connector {
	executeCodeViaUI(
		code: string,
		timeoutMs?: number,
		fileKey?: string,
	): Promise<unknown>;
}

/**
 * Where an export reads Figma from: the Desktop Bridge plugin (default) or the REST API
 * (rest-source.ts, no Figma Desktop needed). Both return the plugin's raw shape.
 */
export interface SpecSource {
	extract(params: ExtractParams): Promise<RawExtract>;
	asset(job: AssetJob): Promise<{ base64?: string; text?: string; width?: number; height?: number }>;
	reference(nodeId: string, scale: number): Promise<{ base64?: string }>;
}

export function pluginSource(connector: Connector): SpecSource {
	return {
		extract: async (params) =>
			unwrapScriptResult(await connector.executeCodeViaUI(buildExtractScript(params), EXTRACT_TIMEOUT_MS)) as RawExtract,
		asset: async (job) =>
			unwrapScriptResult(await connector.executeCodeViaUI(buildAssetScript(job), ASSET_TIMEOUT_MS)) as {
				base64?: string;
				text?: string;
				width?: number;
				height?: number;
			},
		reference: async (nodeId, scale) =>
			unwrapScriptResult(await connector.executeCodeViaUI(buildReferenceScript(nodeId, scale), EXTRACT_TIMEOUT_MS)) as {
				base64?: string;
			},
	};
}

interface ExportArgs {
	nodeId?: string;
	outputDir?: string;
	assetsDir?: string;
	assetsPublicPath?: string;
	exportAssets: boolean;
	includeReference: boolean;
	referenceScale: number;
	detectIcons: boolean;
	respectExportSettings: boolean;
	includeHidden: boolean;
	/** Epoch ms after which the export gives up (PageTimeoutError) instead of waiting on Figma. */
	deadline?: number;
}

/** An export that ran past its deadline: the page is skipped and its old files are kept. */
export class PageTimeoutError extends Error {}

/**
 * Runs a bridge call, retrying on failure: long exports can hit a moment where
 * the plugin briefly loses its connection to Figma ("Unable to establish
 * connection…"); one more try a second later normally succeeds.
 */
export async function withRetry<T>(
	fn: () => Promise<T>,
	attempts = 3,
	delayMs = 1000,
): Promise<T> {
	let last: unknown;
	for (let i = 0; i < attempts; i++) {
		try {
			return await fn();
		} catch (err) {
			last = err;
			if (i < attempts - 1)
				await new Promise((r) => setTimeout(r, delayMs * (i + 1)));
		}
	}
	throw last;
}

/** Assets a previous export of the same page fetched, by asset id. */
function previousAssets(specPath: string): Map<string, FetchedAsset> {
	const out = new Map<string, FetchedAsset>();
	if (!existsSync(specPath)) return out;
	try {
		const old = JSON.parse(readFileSync(specPath, "utf-8")) as PageSpec;
		for (const a of old.assets ?? []) {
			if (!a.fetched) continue;
			out.set(a.id, {
				file: a.file,
				width: a.width,
				height: a.height,
				bytes: a.bytes,
			});
		}
	} catch {
		// An unreadable old spec just means nothing to fall back on.
	}
	return out;
}

export async function exportPageSpec(
	from: Connector | SpecSource,
	args: ExportArgs,
	cwd: string = process.cwd(),
): Promise<{ spec: PageSpec; written: string[] }> {
	const source = "extract" in from ? from : pluginSource(from);
	const raw = await source.extract({
		nodeId: args.nodeId,
		includeHidden: args.includeHidden,
		detectIcons: args.detectIcons,
		respectExportSettings: args.respectExportSettings,
	});

	const outDir = args.outputDir
		? isAbsolute(args.outputDir)
			? args.outputDir
			: resolve(cwd, args.outputDir)
		: null;
	const assetsDir = outDir
		? args.assetsDir
			? isAbsolute(args.assetsDir)
				? args.assetsDir
				: resolve(cwd, args.assetsDir)
			: join(outDir, "assets")
		: null;
	const assetsPublicPath =
		args.assetsPublicPath ??
		(outDir && assetsDir
			? relative(outDir, assetsDir).split("\\").join("/") || "."
			: "assets");

	const written: string[] = [];
	const fetchedAssets: Record<string, FetchedAsset> = {};
	const extraWarnings: PageSpec["warnings"] = [];

	if (outDir && assetsDir && args.exportAssets && raw.assets.length) {
		mkdirSync(assetsDir, { recursive: true });
		const previous = previousAssets(join(outDir, "page-spec.json"));
		for (const job of raw.assets as AssetJob[]) {
			// A stalled Figma (another file in front, a lost connection) must not hold the
			// whole run: stop here; page-spec.json is only written once all assets are in.
			if (args.deadline && Date.now() > args.deadline)
				throw new PageTimeoutError(
					`timed out after ${written.length}/${raw.assets.length} assets`,
				);
			try {
				const res = await withRetry(() => source.asset(job));
				let data: Buffer;
				let ext: string;
				if (typeof res.text === "string") {
					data = Buffer.from(res.text, "utf-8");
					ext = "svg";
				} else if (typeof res.base64 === "string") {
					data = Buffer.from(res.base64, "base64");
					ext = job.kind === "image" ? sniffImageExt(data) : "png";
				} else throw new Error("no file data returned");
				const file = assetFileName(job, ext);
				const fullPath = join(assetsDir, file);
				writeFileSync(fullPath, data);
				written.push(fullPath);
				fetchedAssets[job.id] = {
					file,
					width: res.width,
					height: res.height,
					bytes: data.length,
				};
			} catch (err) {
				const message = err instanceof Error ? err.message : String(err);
				// A dropped connection must not blank out an icon exported on an
				// earlier run: keep that file, and say so.
				const prev = previous.get(job.id);
				if (prev && existsSync(join(assetsDir, prev.file))) {
					fetchedAssets[job.id] = prev;
					extraWarnings.push({
						nodeId: job.kind === "image" ? job.nodeIds[0] : job.nodeId,
						nodeName: job.name,
						code: "ASSET_EXPORT_STALE",
						message: `Asset ${job.id} (${job.kind}) could not be re-exported (${message}); kept the file from the previous export.`,
					});
					continue;
				}
				extraWarnings.push({
					nodeId: job.kind === "image" ? job.nodeIds[0] : job.nodeId,
					nodeName: job.name,
					code: "ASSET_EXPORT_FAILED",
					message: `Asset ${job.id} (${job.kind}) could not be exported: ${message}`,
				});
			}
		}
	}

	const spec = normalizePageSpec(
		{ ...raw, warnings: [...(raw.warnings ?? []), ...extraWarnings] },
		{ assetsPublicPath, fetchedAssets },
	);

	if (outDir && assetsDir && Object.keys(fetchedAssets).length) {
		spec.assetsDir = relative(outDir, assetsDir).split("\\").join("/") || ".";
	}

	if (outDir && args.includeReference) {
		try {
			const res = await source.reference(spec.source.nodeId, args.referenceScale);
			if (!res.base64) throw new Error("no image data returned");
			const data = Buffer.from(res.base64, "base64");
			const file = `reference@${args.referenceScale}x.png`;
			mkdirSync(outDir, { recursive: true });
			writeFileSync(join(outDir, file), data);
			written.push(join(outDir, file));
			const size = pngSize(data);
			spec.reference = { file, scale: args.referenceScale, ...(size ?? {}) };
			const expectedW = Math.round(spec.frame.width * args.referenceScale);
			if (size && Math.abs(size.width - expectedW) > 1) {
				spec.warnings.push({
					nodeId: spec.source.nodeId,
					nodeName: spec.source.nodeName,
					code: "REFERENCE_DOWNSCALED",
					message: `Figma rendered the reference at ${size.width}px wide instead of ${expectedW}px (export size limit). Compare at that scale or export a lower referenceScale.`,
				});
			}
		} catch (err) {
			spec.warnings.push({
				nodeId: spec.source.nodeId,
				nodeName: spec.source.nodeName,
				code: "REFERENCE_FAILED",
				message: `Reference render failed: ${err instanceof Error ? err.message : String(err)}`,
			});
		}
	}

	if (outDir) {
		mkdirSync(outDir, { recursive: true });
		const specPath = join(outDir, "page-spec.json");
		writeFileSync(specPath, `${JSON.stringify(spec, null, 2)}\n`, "utf-8");
		written.unshift(specPath);
	}
	return { spec, written };
}

export function registerPageSpecTools(
	server: McpServer,
	getDesktopConnector: () => Promise<Connector>,
): void {
	registerNextGenTool(server);
	registerPageDocTool(server);
	registerFidelityTool(server);

	server.tool(
		"figma_export_page_spec",
		`Export a whole Figma page frame as a framework-agnostic page spec for pixel-exact code generation. Reads the frame through the Desktop Bridge and produces: page-spec.json (layout tree with exact boxes, auto layout → flex, sizing, typography per text run, fills/gradients/strokes/effects, design tokens and styles used, component instances, annotations, prototype interactions, and ready-to-use CSS for every node), every image fill and icon as files (icons auto-detected as SVG), and reference@<scale>x.png — the frame rendered by Figma, for pixel-diff checks. Warnings list every spot where CSS cannot match Figma exactly. Per-node overrides can be stored invisibly in sharedPluginData namespace "${PAGE_SPEC_NAMESPACE}", key "${PAGE_SPEC_KEY}" (JSON, e.g. {"export":"png"} to export a layer as one image, {"export":"none"} to stop icon detection, plus any notes for codegen) — viewers never see it. Without outputDir the spec is returned inline and no files are written. Local mode only for writing files. Requires the Desktop Bridge plugin.`,
		{
			nodeId: z
				.string()
				.optional()
				.describe(
					"Page frame node ID (e.g. '12:345'). Defaults to the current selection in Figma.",
				),
			outputDir: z
				.string()
				.optional()
				.describe(
					"Directory to write page-spec.json, assets and the reference render into (absolute, or relative to the MCP server's working directory). Omit to return the spec inline.",
				),
			assetsDir: z
				.string()
				.optional()
				.describe(
					"Where to write image/icon files (default: <outputDir>/assets). For Next.js, point this inside public/, e.g. '<repo>/public/figma/home'.",
				),
			assetsPublicPath: z
				.string()
				.optional()
				.describe(
					"URL prefix used for assets in the generated CSS, e.g. '/figma/home'. Default: assetsDir relative to outputDir.",
				),
			exportAssets: bool(true).describe(
				"Export image fills and icons as files (default true; needs outputDir).",
			),
			includeReference: bool(true).describe(
				"Render the frame to reference@<scale>x.png for pixel-diff checks (default true; needs outputDir).",
			),
			referenceScale: z
				.preprocess(
					(v) => (typeof v === "string" ? Number(v) : v),
					z.number().min(0.25).max(4).optional().default(1),
				)
				.describe("Scale of the reference render (default 1 = design pixels)."),
			detectIcons: bool(true).describe(
				"Export layers made only of vector shapes as a single SVG (default true).",
			),
			respectExportSettings: bool(false).describe(
				"Also export any layer that has Figma export settings as a single SVG/PNG instead of rebuilding it (default false).",
			),
			includeHidden: bool(false).describe(
				"Include hidden layers (rendered with display:none) — useful for state variants (default false).",
			),
		},
		async (args) => {
			try {
				logger.info(
					{ nodeId: args.nodeId, outputDir: args.outputDir },
					"Exporting page spec",
				);
				const connector = await getDesktopConnector();
				const { spec, written } = await exportPageSpec(
					connector,
					args as ExportArgs,
				);
				if (!args.outputDir) {
					const json = JSON.stringify(spec);
					const sizeKB = Math.round(json.length / 1024);
					return {
						content: [
							{
								type: "text" as const,
								text:
									sizeKB > INLINE_LIMIT_KB
										? JSON.stringify({
												error: "page_spec_too_large",
												message: `The spec is ${sizeKB}KB — too large to return inline. Pass outputDir to write it to disk.`,
												stats: spec.stats,
											})
										: json,
							},
						],
					};
				}
				return {
					content: [
						{
							type: "text" as const,
							text: JSON.stringify({
								success: true,
								source: spec.source,
								frame: spec.frame,
								files: written,
								stats: spec.stats,
								assets: {
									total: spec.assets.length,
									exported: spec.assets.filter((a) => a.fetched).length,
								},
								fonts: spec.fonts,
								variablesUsed: spec.tokens.variables.length,
								stylesUsed: spec.tokens.styles.length,
								warningCount: spec.warnings.length,
								warnings: spec.warnings.slice(0, 40),
								next: "Generate code and the page Markdown from page-spec.json; compare the rendered page with the reference PNG at the same width.",
							}),
						},
					],
				};
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				logger.error({ error }, "Page spec export failed");
				return {
					content: [
						{
							type: "text" as const,
							text: JSON.stringify({
								error: "page_spec_export_failed",
								message: `Cannot export page spec. ${message}`,
								hint: "Requires the Desktop Bridge plugin running in the Figma file that contains the frame. Select the frame or pass its nodeId.",
							}),
						},
					],
					isError: true,
				};
			}
		},
	);
}

interface NextGenArgs {
	specPath: string;
	projectRoot: string;
	route: string;
	pageName?: string;
	appDir?: string;
	componentsDir?: string;
	publicDir?: string;
	fontSource: NextGenOptions["fontSource"];
	styling?: NextGenOptions["styling"];
	codeStyle?: NextGenOptions["codeStyle"];
	debugIds: boolean;
	overwrite: boolean;
	/** Sections shared between pages (see planSharedSections). */
	shared?: NextGenOptions["shared"];
	/** Put assets in public/figma/assets/ named by content, so pages share identical files. */
	shareAssets?: boolean;
	/** Also write the per-page Markdown spec (default true). */
	writeDoc?: boolean;
	docsDir?: string;
	docLanguage?: DocLanguage;
}

const DOC_HEADER = (spec: PageSpec) =>
	`<!-- ${GENERATED_MARKER} from Figma ${spec.source.fileName} › ${spec.source.nodeName} (${spec.source.nodeId}). Re-running the generator overwrites this file. -->\n\n`;

/** How a doc refers to the full spec: relative inside `root`, absolute when the spec lives elsewhere. */
function specReference(
	docPath: string,
	specPath: string,
	root: string = dirname(docPath),
): string {
	const inside =
		!relative(root, specPath).startsWith("..") &&
		!isAbsolute(relative(root, specPath));
	return inside
		? relative(dirname(docPath), specPath).split("\\").join("/")
		: specPath;
}

/**
 * Figma suffixes every name inside an exported SVG with the node id
 * (clip0_7147_82653, effect1_dropShadow_7147_82760), so the same icon exported
 * from two pages differs only there. Dropping the suffix makes identical icons
 * byte-identical; names stay unique within the file (clip0, clip1, …).
 */
export function canonicalSvg(svg: string): string {
	return svg.replace(
		/\b([A-Za-z][A-Za-z0-9]*(?:_[A-Za-z][A-Za-z0-9]*)*)_\d+_\d+\b/g,
		"$1",
	);
}

/** Asset bytes as published: SVG ids made canonical, other files as exported. */
function assetBytes(path: string): Buffer {
	const data = readFileSync(path);
	return extname(path) === ".svg"
		? Buffer.from(canonicalSvg(data.toString("utf-8")), "utf-8")
		: data;
}

/** Public name of an asset shared by content: same bytes, same file. */
function sharedAssetName(path: string): string {
	const ext = extname(path) || ".bin";
	return `${createHash("sha1").update(assetBytes(path)).digest("hex").slice(0, 12)}${ext}`;
}

/** Read a page spec and generate its code in memory (no writes). */
function loadAndGenerate(args: NextGenArgs, cwd: string) {
	const abs = (p: string) => (isAbsolute(p) ? p : resolve(cwd, p));
	const specPath = abs(args.specPath);
	const projectRoot = abs(args.projectRoot);
	if (!existsSync(specPath))
		throw new Error(
			`page spec not found: ${specPath}. Run figma_export_page_spec with outputDir first.`,
		);
	if (!existsSync(join(projectRoot, "package.json")))
		throw new Error(
			`${projectRoot} has no package.json — pass the Next.js project root.`,
		);
	const spec = JSON.parse(readFileSync(specPath, "utf-8")) as PageSpec;
	if (spec.specVersion !== 1)
		throw new Error(`Unsupported page spec version ${spec.specVersion}.`);

	const assetsDir = resolve(dirname(specPath), spec.assetsDir ?? "assets");
	let assetNames: Map<string, string> | undefined;
	if (args.shareAssets) {
		assetNames = new Map();
		for (const a of spec.assets) {
			const file = join(assetsDir, a.file);
			if (a.fetched && existsSync(file))
				assetNames.set(a.file, sharedAssetName(file));
		}
	}
	const hasSrc = existsSync(join(projectRoot, "src", "app"));
	const result = generateNextPage(spec, {
		route: args.route,
		pageName: args.pageName,
		appDir: args.appDir ?? (hasSrc ? "src/app" : "app"),
		componentsDir:
			args.componentsDir ??
			(hasSrc ? "src/components/figma" : "components/figma"),
		publicDir: args.publicDir ?? "public",
		fontSource: args.fontSource,
		styling: args.styling,
		codeStyle: args.codeStyle,
		debugIds: args.debugIds,
		shared: args.shared,
		assetNames,
	});
	return { spec, specPath, projectRoot, assetsDir, assetNames, result };
}

/**
 * Sections that come out identical on two or more pages become one shared
 * component in <componentsDir>/shared/. Decided over all pages at once, so the
 * result does not depend on build order. Returns the map to pass to each
 * page's build and the shared files to write.
 */
export function planSharedSections(
	pages: NextGenArgs[],
	cwd: string = process.cwd(),
) {
	const byHash = new Map<
		string,
		{ src: SectionSource; spec: PageSpec; pages: Set<string> }
	>();
	let componentsDir = "";
	const style = pages[0]?.codeStyle;
	for (const args of [...pages].sort((a, b) =>
		(a.pageName ?? a.route).localeCompare(b.pageName ?? b.route),
	)) {
		const { spec, result } = loadAndGenerate(
			{ ...args, shared: undefined },
			cwd,
		);
		componentsDir = dirname(dirname(result.pageFile));
		for (const src of result.sectionSources) {
			const e = byHash.get(src.hash) ?? { src, spec, pages: new Set() };
			e.pages.add(args.pageName ?? args.route);
			byHash.set(src.hash, e);
		}
	}
	const shared = new Map<string, { component: string; ids: string[] }>();
	const files: { path: string; content: string }[] = [];
	const taken = new Map<string, number>();
	for (const [hash, e] of byHash) {
		if (e.pages.size < 2) continue;
		const n = (taken.get(e.src.name) ?? 0) + 1;
		taken.set(e.src.name, n);
		const component = n === 1 ? e.src.name : `${e.src.name}${n}`;
		shared.set(hash, { component, ids: e.src.ids });
		const header = `${generatedHeader(e.spec).replace(
			" */\n",
			`\n * Shared by ${e.pages.size} pages: ${[...e.pages].join(", ")}. */\n`,
		)}`;
		files.push({
			path: join(
				componentsDir,
				"shared",
				`${codeFileBase(component, style)}.tsx`,
			)
				.split("\\")
				.join("/"),
			content: sectionFile(header, component, e.src, false, style),
		});
	}
	return { shared, files, componentsDir };
}

/** Write the shared components and remove shared files an earlier build made that are gone now. */
/** Leaves a generated file alone when only its export timestamp would change. */
export function writeGenerated(full: string, content: string): boolean {
	const strip = (s: string) => s.replace(/Exported: \S+?\.(?= )/g, "Exported:");
	if (
		existsSync(full) &&
		strip(readFileSync(full, "utf-8")) === strip(content)
	)
		return false;
	writeFileSync(full, content, "utf-8");
	return true;
}

export function writeSharedSections(
	projectRoot: string,
	plan: ReturnType<typeof planSharedSections>,
): { written: string[]; removed: string[] } {
	const dir = join(projectRoot, plan.componentsDir, "shared");
	mkdirSync(dir, { recursive: true });
	const written: string[] = [];
	const keep = new Set<string>();
	for (const f of plan.files) {
		const full = join(projectRoot, f.path);
		if (
			existsSync(full) &&
			!readFileSync(full, "utf-8").includes(GENERATED_MARKER)
		)
			throw new Error(
				`${f.path} exists and was not generated by this tool; rename it or remove it.`,
			);
		writeGenerated(full, f.content);
		written.push(f.path);
		keep.add(full);
	}
	const removed: string[] = [];
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (keep.has(full) || !name.endsWith(".tsx")) continue;
		if (!readFileSync(full, "utf-8").includes(GENERATED_MARKER)) continue;
		rmSync(full);
		removed.push(relative(projectRoot, full));
	}
	return { written, removed };
}

/** Generate a Next.js page from page-spec.json and write it into the project. */
export function generateNextPageFiles(
	args: NextGenArgs,
	cwd: string = process.cwd(),
) {
	const { spec, specPath, projectRoot, assetsDir, assetNames, result } =
		loadAndGenerate(args, cwd);
	const assetPublicUrl = (file: string) =>
		assetNames?.has(file)
			? `/figma/assets/${assetNames.get(file)}`
			: `${result.publicBase}/${file}`;

	let docFile: string | undefined;
	if (args.writeDoc !== false) {
		const segs = result.route.split("/").filter(Boolean);
		const docRel = join(
			args.docsDir ?? "docs/pages",
			`${segs.length ? segs.join("/") : "index"}.md`,
		)
			.split("\\")
			.join("/");
		docFile = docRel;
		result.files.push({
			path: docRel,
			content:
				DOC_HEADER(spec) +
				generatePageMarkdown(spec, {
					language: args.docLanguage ?? "vi",
					route: result.route,
					specFile: specReference(
						join(projectRoot, docRel),
						specPath,
						projectRoot,
					),
					assetUrl: assetPublicUrl,
				}),
		});
	}

	// Never clobber hand-written code: only files this generator wrote may be replaced.
	const blocked = result.files
		.map((f) => join(projectRoot, f.path))
		.filter(
			(p) =>
				existsSync(p) && !readFileSync(p, "utf-8").includes(GENERATED_MARKER),
		);
	if (blocked.length && !args.overwrite) {
		throw new Error(
			`Nothing was written. These files exist and were not generated by this tool: ${blocked.join(", ")}. Choose another route/pageName, or pass overwrite: true to replace them.`,
		);
	}

	const missing = result.assets.filter(
		(a) => !existsSync(join(assetsDir, a.file)),
	);
	if (missing.length) {
		throw new Error(
			`Nothing was written. Asset files are missing from ${assetsDir}: ${missing.map((m) => m.file).join(", ")}. Re-run figma_export_page_spec.`,
		);
	}

	const written: string[] = [];
	for (const f of result.files) {
		const full = join(projectRoot, f.path);
		mkdirSync(dirname(full), { recursive: true });
		writeGenerated(full, f.content);
		written.push(f.path);
	}
	for (const a of result.assets) {
		const full = join(projectRoot, a.to);
		mkdirSync(dirname(full), { recursive: true });
		if (assetNames?.has(a.file))
			writeFileSync(full, assetBytes(join(assetsDir, a.file)));
		else copyFileSync(join(assetsDir, a.file), full);
		written.push(a.to);
	}
	// Assets moved to the shared folder: drop this page's old copies.
	if (assetNames?.size) {
		const oldDir = join(
			projectRoot,
			args.publicDir ?? "public",
			result.publicBase,
		);
		for (const file of assetNames.keys()) {
			const old = join(oldDir, file);
			if (existsSync(old)) rmSync(old);
		}
	}
	// Files an earlier run generated that this one no longer writes (sections that
	// were renamed, CSS Modules after switching to Tailwind) would linger: remove them.
	const removed: string[] = [];
	const compDir = join(projectRoot, dirname(result.pageFile));
	const current = new Set(result.files.map((f) => join(projectRoot, f.path)));
	for (const name of readdirSync(compDir)) {
		const full = join(compDir, name);
		if (current.has(full) || !/\.(tsx?|css)$/.test(name)) continue;
		if (!readFileSync(full, "utf-8").includes(GENERATED_MARKER)) continue;
		rmSync(full);
		removed.push(relative(projectRoot, full));
	}
	return { ...result, written, removed, projectRoot, docFile };
}

function registerNextGenTool(server: McpServer): void {
	server.tool(
		"figma_generate_nextjs_page",
		"Generate a Next.js App Router page from a page-spec.json written by figma_export_page_spec. Writes app/<route>/page.tsx, a page component folder (one component + CSS Module per top-level Figma section, exact Figma values, color variables as CSS custom properties, next/font setup) and copies the images/icons into public/figma/<page>/. Renders 1:1 at the design width. Only replaces files it generated before (marked @generated) unless overwrite is true. Works offline — no Figma connection needed. Local mode only.",
		{
			specPath: z
				.string()
				.describe(
					"Path to page-spec.json (absolute, or relative to the MCP server's working directory).",
				),
			projectRoot: z
				.string()
				.describe(
					"Root of the Next.js project (the folder with package.json).",
				),
			route: z
				.string()
				.describe("URL route for the page, e.g. '/luyen-de/lam-bai' or '/'."),
			pageName: z
				.string()
				.optional()
				.describe(
					"Name for the component folder and page component. Default: the Figma frame name.",
				),
			appDir: z
				.string()
				.optional()
				.describe(
					"App directory relative to projectRoot. Default: 'src/app' if it exists, else 'app'.",
				),
			componentsDir: z
				.string()
				.optional()
				.describe(
					"Where the page component folder goes, relative to projectRoot. Default: '(src/)components/figma'.",
				),
			publicDir: z
				.string()
				.optional()
				.describe(
					"Public directory relative to projectRoot. Default: 'public'.",
				),
			fontSource: z
				.enum(["google", "local", "none"])
				.optional()
				.default("google")
				.describe(
					"google: next/font/google (default). local: next/font/local with font files you add (use Figma's exact files for exact text widths). none: the app loads fonts itself.",
				),
			styling: z
				.enum(["css-modules", "tailwind"])
				.optional()
				.default("css-modules")
				.describe(
					"css-modules: one .module.css per section (default). tailwind: Tailwind v4 classes inline, exact values as arbitrary values; the project must use Tailwind.",
				),
			debugIds: bool(false).describe(
				"Add data-figma-id attributes to every element (used by the pixel-diff check).",
			),
			overwrite: bool(false).describe(
				"Allow replacing existing files that were not generated by this tool.",
			),
			writeDoc: bool(true).describe(
				"Also write the per-page Markdown spec to <docsDir>/<route>.md (default true).",
			),
			docsDir: z
				.string()
				.optional()
				.describe(
					"Directory for the page Markdown, relative to projectRoot. Default: 'docs/pages'.",
				),
			docLanguage: z
				.enum(["vi", "en"])
				.optional()
				.default("vi")
				.describe("Language of the page Markdown (default 'vi')."),
		},
		async (args) => {
			try {
				const res = generateNextPageFiles(args as NextGenArgs);
				return {
					content: [
						{
							type: "text" as const,
							text: JSON.stringify({
								success: true,
								route: res.route,
								component: res.componentName,
								projectRoot: res.projectRoot,
								files: res.written,
								warnings: res.warnings,
								next: `Run the dev server and open ${res.route} at the design width to compare with the reference render.`,
							}),
						},
					],
				};
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				logger.error({ error }, "Next.js page generation failed");
				return {
					content: [
						{
							type: "text" as const,
							text: JSON.stringify({
								error: "nextjs_generation_failed",
								message,
							}),
						},
					],
					isError: true,
				};
			}
		},
	);
}

interface PageDocArgs {
	specPath: string;
	outputPath?: string;
	language: DocLanguage;
	route?: string;
	assetsPublicPath?: string;
	/** Project root: the spec is referenced relative to the doc when both live under it. */
	root?: string;
}

/** Write the per-page Markdown spec for a page-spec.json (no code generation). */
export function writePageDoc(args: PageDocArgs, cwd: string = process.cwd()) {
	const abs = (p: string) => (isAbsolute(p) ? p : resolve(cwd, p));
	const specPath = abs(args.specPath);
	if (!existsSync(specPath))
		throw new Error(
			`page spec not found: ${specPath}. Run figma_export_page_spec with outputDir first.`,
		);
	const spec = JSON.parse(readFileSync(specPath, "utf-8")) as PageSpec;
	if (spec.specVersion !== 1)
		throw new Error(`Unsupported page spec version ${spec.specVersion}.`);
	const outputPath = args.outputPath
		? abs(args.outputPath)
		: join(dirname(specPath), "page.md");
	if (
		existsSync(outputPath) &&
		!readFileSync(outputPath, "utf-8").includes(GENERATED_MARKER)
	) {
		throw new Error(
			`Nothing was written. ${outputPath} exists and was not generated by this tool; choose another outputPath.`,
		);
	}
	const prefix = args.assetsPublicPath?.replace(/\/+$/, "");
	const markdown =
		DOC_HEADER(spec) +
		generatePageMarkdown(spec, {
			language: args.language,
			route: args.route,
			specFile: specReference(
				outputPath,
				specPath,
				args.root ? abs(args.root) : undefined,
			),
			assetUrl: prefix ? (file) => `${prefix}/${file}` : undefined,
		});
	mkdirSync(dirname(outputPath), { recursive: true });
	writeFileSync(outputPath, markdown, "utf-8");
	return {
		outputPath,
		bytes: Buffer.byteLength(markdown),
		lines: markdown.split("\n").length,
	};
}

function registerPageDocTool(server: McpServer): void {
	server.tool(
		"figma_generate_page_doc",
		"Write the per-page Markdown spec for a page-spec.json from figma_export_page_spec: overview and section map, theme tokens, typography, full layout tree with exact sizes/positions/styles, component instances, verbatim content, assets, annotations/links/prototype notes, fidelity notes and rebuild rules. Language- and framework-agnostic, so a person or an AI can rebuild the page in any stack. figma_generate_nextjs_page writes the same document into the project automatically. Works offline. Local mode only.",
		{
			specPath: z.string().describe("Path to page-spec.json."),
			outputPath: z
				.string()
				.optional()
				.describe(
					"Where to write the Markdown. Default: page.md next to the spec.",
				),
			language: z
				.enum(["vi", "en"])
				.optional()
				.default("vi")
				.describe("Document language (default 'vi')."),
			route: z
				.string()
				.optional()
				.describe("Route the page is served at, shown in the header."),
			assetsPublicPath: z
				.string()
				.optional()
				.describe(
					"URL prefix to show for assets, e.g. '/figma/home'. Default: the paths stored in the spec.",
				),
		},
		async (args) => {
			try {
				const res = writePageDoc(args as PageDocArgs);
				return {
					content: [
						{
							type: "text" as const,
							text: JSON.stringify({ success: true, ...res }),
						},
					],
				};
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				logger.error({ error }, "Page doc generation failed");
				return {
					content: [
						{
							type: "text" as const,
							text: JSON.stringify({ error: "page_doc_failed", message }),
						},
					],
					isError: true,
				};
			}
		},
	);
}

interface FidelityArgs {
	specPath: string;
	url: string;
	/** Figma id → data-figma-id rendered instead (sections shared between pages). */
	idAlias?: Record<string, string>;
	outputDir?: string;
	maxPixelDiffPercent?: number;
	maxBoxDelta?: number;
	maxTextBoxDelta?: number;
	colorThreshold?: number;
	chromePath?: string;
	waitMs?: number;
}

/** Render the page, compare with Figma's reference render and the spec, write the report. */
export async function checkPageFidelity(
	args: FidelityArgs,
	capture: (opts: CaptureOptions) => Promise<CaptureResult> = capturePage,
	cwd: string = process.cwd(),
) {
	const abs = (p: string) => (isAbsolute(p) ? p : resolve(cwd, p));
	const specPath = abs(args.specPath);
	if (!existsSync(specPath))
		throw new Error(`page spec not found: ${specPath}`);
	const spec = JSON.parse(readFileSync(specPath, "utf-8")) as PageSpec;
	if (!spec.reference) {
		throw new Error(
			"The spec has no reference render. Re-run figma_export_page_spec with outputDir and includeReference: true.",
		);
	}
	const refPath = join(dirname(specPath), spec.reference.file);
	if (!existsSync(refPath))
		throw new Error(`Reference render not found: ${refPath}`);
	const reference = decodePng(readFileSync(refPath));
	const thresholds: FidelityThresholds = {
		...DEFAULT_THRESHOLDS,
		...(args.maxPixelDiffPercent !== undefined
			? { maxPixelDiffPercent: args.maxPixelDiffPercent }
			: {}),
		...(args.maxBoxDelta !== undefined
			? { maxBoxDelta: args.maxBoxDelta }
			: {}),
		...(args.maxTextBoxDelta !== undefined
			? { maxTextBoxDelta: args.maxTextBoxDelta }
			: {}),
		...(args.colorThreshold !== undefined
			? { colorThreshold: args.colorThreshold }
			: {}),
	};

	const shot = await capture({
		url: args.url,
		width: spec.frame.width,
		height: spec.frame.height,
		scale: spec.reference.scale,
		rootId: spec.source.nodeId,
		chromePath: args.chromePath,
		waitMs: args.waitMs ?? 500,
		timeoutMs: 60000,
	});
	if (args.idAlias && shot.boxes)
		for (const [id, rendered] of Object.entries(args.idAlias))
			if (shot.boxes[rendered]) shot.boxes[id] = shot.boxes[rendered];
	const actual = decodePng(shot.png);
	const diff = diffImages(reference, actual, thresholds);
	const report = buildReport(
		spec,
		diff,
		shot.rootFound ? shot.boxes : null,
		thresholds,
	);

	const outDir = args.outputDir
		? abs(args.outputDir)
		: join(dirname(specPath), "fidelity");
	mkdirSync(outDir, { recursive: true });
	writeFileSync(join(outDir, "actual.png"), shot.png);
	writeFileSync(join(outDir, "diff.png"), encodePng(diff.diffImage));
	const full = {
		...report,
		url: args.url,
		chrome: shot.chromePath,
		consoleErrors: shot.consoleErrors,
		rootFound: shot.rootFound,
	};
	writeFileSync(
		join(outDir, "report.json"),
		`${JSON.stringify(full, null, 2)}\n`,
		"utf-8",
	);
	writeFileSync(
		join(outDir, "report.md"),
		reportMarkdown(report, spec.source.nodeName, args.url),
		"utf-8",
	);
	return {
		...full,
		outputDir: outDir,
		files: ["actual.png", "diff.png", "report.json", "report.md"].map((f) =>
			join(outDir, f),
		),
	};
}

function registerFidelityTool(server: McpServer): void {
	server.tool(
		"figma_check_page_fidelity",
		"Check a built page against its Figma design: renders the URL in headless Chrome at the frame's design width, compares the screenshot with the reference render from figma_export_page_spec (perceptual pixel diff that ignores anti-aliasing shifts), and measures every element with a data-figma-id against the Figma box (generate the page with debugIds: true). Returns PASS/FAIL against thresholds, the mismatched regions attributed to the most likely Figma node, and the largest box differences; writes actual.png, diff.png, report.json and report.md. Use it in a loop: fix the listed nodes, re-run until PASS. Needs a local Chrome/Chromium (or CHROME_PATH). Local mode only.",
		{
			specPath: z
				.string()
				.describe(
					"Path to page-spec.json (its reference render is the baseline).",
				),
			url: z
				.string()
				.describe(
					"URL of the built page, e.g. 'http://localhost:3000/luyen-de/lam-bai'.",
				),
			outputDir: z
				.string()
				.optional()
				.describe(
					"Where to write the report and images. Default: <spec dir>/fidelity.",
				),
			maxPixelDiffPercent: z
				.preprocess(
					(v) => (typeof v === "string" ? Number(v) : v),
					z.number().min(0).max(100).optional(),
				)
				.describe(
					`Max share of differing pixels in percent (default ${DEFAULT_THRESHOLDS.maxPixelDiffPercent}).`,
				),
			maxBoxDelta: z
				.preprocess(
					(v) => (typeof v === "string" ? Number(v) : v),
					z.number().min(0).optional(),
				)
				.describe(
					`Max position/size difference per element in px (default ${DEFAULT_THRESHOLDS.maxBoxDelta}); text-driven elements use maxTextBoxDelta.`,
				),
			maxTextBoxDelta: z
				.preprocess(
					(v) => (typeof v === "string" ? Number(v) : v),
					z.number().min(0).optional(),
				)
				.describe(
					`Limit in px for text-driven elements — text, hug containers holding text, their auto-layout siblings and descendants (default ${DEFAULT_THRESHOLDS.maxTextBoxDelta}). Glyph widths differ slightly between Figma and browsers.`,
				),
			colorThreshold: z
				.preprocess(
					(v) => (typeof v === "string" ? Number(v) : v),
					z.number().min(0).max(1).optional(),
				)
				.describe(
					`Per-pixel color threshold 0–1 (default ${DEFAULT_THRESHOLDS.colorThreshold}); lower is stricter.`,
				),
			chromePath: z
				.string()
				.optional()
				.describe(
					"Path to a Chrome/Chromium binary. Default: auto-detect, or CHROME_PATH.",
				),
			waitMs: z
				.preprocess(
					(v) => (typeof v === "string" ? Number(v) : v),
					z.number().min(0).max(30000).optional(),
				)
				.describe(
					"Extra wait after fonts load before capturing, in ms (default 500).",
				),
		},
		async (args) => {
			try {
				const res = await checkPageFidelity(args as FidelityArgs);
				return {
					content: [
						{
							type: "text" as const,
							text: JSON.stringify({
								pass: res.pass,
								failures: res.failures,
								pixels: res.pixels,
								boxes: res.boxes
									? {
											...res.boxes,
											worst: res.boxes.worst.slice(0, 10),
											over: res.boxes.over.slice(0, 10),
											missing: res.boxes.missing.slice(0, 10),
										}
									: null,
								regions: res.regions.slice(0, 10),
								consoleErrors: res.consoleErrors.slice(0, 5),
								files: res.files,
								next: res.pass
									? "The page matches the design within the thresholds."
									: "Fix the nodes listed in regions/boxes (compare their CSS with page-spec.json), then run this check again.",
							}),
						},
					],
				};
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				logger.error({ error }, "Fidelity check failed");
				return {
					content: [
						{
							type: "text" as const,
							text: JSON.stringify({ error: "fidelity_check_failed", message }),
						},
					],
					isError: true,
				};
			}
		},
	);
}
