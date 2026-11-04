/**
 * Per-project configuration for the Figma page pipeline: figma.pages.json.
 *
 * One file at the project root lists the Figma frames the project builds and
 * where each one goes, so every project runs the same commands
 * (figma-page export / build / check) without repeating options.
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { z } from "zod";

export const CONFIG_FILE = "figma.pages.json";

const pageSchema = z.object({
	/** Short, URL-safe name: folder of the spec and of the generated components. */
	name: z
		.string()
		.regex(/^[a-z0-9][a-z0-9-]*$/, "use lowercase letters, digits and dashes"),
	/** Figma node ID of the page frame, e.g. "3496:84092". */
	nodeId: z
		.string()
		.regex(
			/^I?\d+[:-]\d+(;\d+[:-]\d+)*$/,
			"expected a Figma node ID like 3496:84092",
		),
	/** Route the page is served at, e.g. "/luyen-de/lam-bai". */
	route: z.string().startsWith("/"),
	/** Only the page Markdown and the Figma note — no code, assets or checks. */
	docOnly: z.boolean().optional(),
});

const configSchema = z.object({
	/** Figma file key; export refuses to read from a different file. */
	fileKey: z.string().optional(),
	/** Where page specs, assets and reference renders are kept (one folder per page). */
	specDir: z.string().default(".figma/pages"),
	appDir: z.string().optional(),
	componentsDir: z.string().optional(),
	publicDir: z.string().optional(),
	docsDir: z.string().default("docs/pages"),
	docLanguage: z.enum(["vi", "en"]).default("vi"),
	fontSource: z.enum(["google", "local", "none"]).default("google"),
	/** How generated code is styled: a CSS Module per section, or Tailwind classes inline. */
	styling: z.enum(["css-modules", "tailwind"]).default("css-modules"),
	/**
	 * Share between pages (Tailwind only): sections that come out identical on two or
	 * more pages become one component in <componentsDir>/shared/, and assets go to
	 * public/figma/assets/ named by content.
	 */
	share: z.boolean().default(false),
	/** data-figma-id attributes on generated elements (needed by `check`). */
	debugIds: z.boolean().default(true),
	/** Write the code note (route, files, last check) right under each frame in Figma (sync and check). */
	figmaNote: z.boolean().default(true),
	/** Web URL of the project repository for the note's links (default: the git remote "origin"). */
	repoUrl: z.string().optional(),
	/** Branch the links point at (default: the current git branch). */
	branch: z.string().optional(),
	/** Base URL of a deployed preview (e.g. Vercel); the note links each page there. */
	demoUrl: z.string().optional(),
	/**
	 * Open the note's MD and code links in the deployed app (`<demoUrl>/figma/<page>/spec`
	 * and `/code`) instead of the repository, so people with view-only access read them
	 * without a repo account. The app must serve those pages.
	 */
	sourceViewer: z.boolean().default(false),
	/**
	 * Match the project's code conventions: kebab-case file names, arrow-function
	 * components, imports through an alias (e.g. "@/"), and Prettier on the
	 * generated files (the project's own config).
	 */
	codeStyle: z
		.object({
			kebabFiles: z.boolean().optional(),
			arrowComponents: z.boolean().optional(),
			importAlias: z.string().optional(),
			prettier: z.boolean().optional(),
		})
		.optional(),
	/** Base URL of the running app, used by `check`. */
	baseUrl: z.string().default("http://localhost:3000"),
	thresholds: z
		.object({
			maxPixelDiffPercent: z.number().optional(),
			maxBoxDelta: z.number().optional(),
			maxTextBoxDelta: z.number().optional(),
			colorThreshold: z.number().optional(),
		})
		.default({}),
	/**
	 * What `discover --rest` scans (saved by the first run, reused by CI): Figma pages and sections
	 * by name (none = every page), and the frames to register (regex on the frame name; default:
	 * page-sized frames).
	 */
	scan: z
		.object({
			figmaPages: z.array(z.string()).optional(),
			sections: z.array(z.string()).optional(),
			match: z.string().optional(),
		})
		.optional(),
	pages: z.array(pageSchema).default([]),
});

export type PageEntry = z.infer<typeof pageSchema>;
export type ProjectConfig = z.infer<typeof configSchema>;

export function defaultConfig(): ProjectConfig {
	return configSchema.parse({});
}

export function configPath(projectRoot: string): string {
	return join(projectRoot, CONFIG_FILE);
}

export function loadConfig(projectRoot: string): ProjectConfig {
	const path = configPath(projectRoot);
	if (!existsSync(path))
		throw new Error(
			`${CONFIG_FILE} not found in ${projectRoot}. Run: figma-page init`,
		);
	let raw: unknown;
	try {
		raw = JSON.parse(readFileSync(path, "utf-8"));
	} catch (err) {
		throw new Error(
			`${path} is not valid JSON: ${err instanceof Error ? err.message : String(err)}`,
		);
	}
	const parsed = configSchema.safeParse(raw);
	if (!parsed.success) {
		const issues = parsed.error.issues
			.map((i) => `${i.path.join(".") || "(root)"}: ${i.message}`)
			.join("; ");
		throw new Error(`${path} is invalid — ${issues}`);
	}
	const names = new Set<string>();
	for (const p of parsed.data.pages) {
		if (names.has(p.name))
			throw new Error(`${path}: page name "${p.name}" is used twice.`);
		names.add(p.name);
	}
	return parsed.data;
}

export function saveConfig(projectRoot: string, config: ProjectConfig): void {
	writeFileSync(
		configPath(projectRoot),
		`${JSON.stringify(config, null, 2)}\n`,
		"utf-8",
	);
}

/**
 * Accepts a node ID ("3496:84092", "3496-84092") or a Figma URL with ?node-id=…
 * and returns the node ID plus the file key when the URL has one.
 */
export function parseFigmaTarget(input: string): {
	nodeId: string;
	fileKey?: string;
} {
	const trimmed = input.trim();
	if (/^https?:\/\//.test(trimmed)) {
		const url = new URL(trimmed);
		const id = url.searchParams.get("node-id");
		if (!id)
			throw new Error(
				"The Figma link has no node-id. In Figma, right-click the frame → Copy/Paste as → Copy link to selection.",
			);
		const fileKey = url.pathname.match(
			/\/(?:design|file|proto)\/([A-Za-z0-9]+)/,
		)?.[1];
		return { nodeId: id.replace(/-/g, ":"), ...(fileKey ? { fileKey } : {}) };
	}
	if (/^\d+[:-]\d+$/.test(trimmed))
		return { nodeId: trimmed.replace("-", ":") };
	throw new Error(
		`"${input}" is neither a Figma node ID (e.g. 3496:84092) nor a Figma link.`,
	);
}

/** Adds a page, or updates the one with the same name. */
export function upsertPage(
	config: ProjectConfig,
	page: PageEntry,
): { config: ProjectConfig; updated: boolean } {
	pageSchema.parse(page);
	const clash = config.pages.find(
		(p) => p.route === page.route && p.name !== page.name,
	);
	if (clash)
		throw new Error(
			`Route ${page.route} is already used by page "${clash.name}".`,
		);
	const exists = config.pages.some((p) => p.name === page.name);
	const pages = exists
		? config.pages.map((p) => (p.name === page.name ? page : p))
		: [...config.pages, page];
	return { config: { ...config, pages }, updated: exists };
}

/** Pages selected by name; all pages when no names are given. */
export function selectPages(
	config: ProjectConfig,
	names: string[],
): PageEntry[] {
	if (!names.length) return config.pages;
	const unknown = names.filter((n) => !config.pages.some((p) => p.name === n));
	if (unknown.length) {
		throw new Error(
			`Unknown page(s): ${unknown.join(", ")}. Known: ${config.pages.map((p) => p.name).join(", ") || "none — add one with figma-page add"}`,
		);
	}
	return config.pages.filter((p) => names.includes(p.name));
}

export function specPathFor(
	projectRoot: string,
	config: ProjectConfig,
	page: PageEntry,
): string {
	return join(projectRoot, config.specDir, page.name, "page-spec.json");
}

/** "git@github.com:org/repo.git" or "https://github.com/org/repo.git" → "https://github.com/org/repo". */
export function repoWebUrl(remote: string): string | null {
	const r = remote.trim();
	const ssh = r.match(/^(?:ssh:\/\/)?git@([^:/]+)[:/](.+?)(?:\.git)?\/?$/);
	if (ssh) return `https://${ssh[1]}/${ssh[2]}`;
	const http = r.match(/^https?:\/\/(?:[^@/]+@)?([^/]+)\/(.+?)(?:\.git)?\/?$/);
	return http ? `https://${http[1]}/${http[2]}` : null;
}

/** Links to a file or folder in the repository web UI (GitHub style; GitLab uses /-/). */
export function repoFileUrl(
	repoUrl: string,
	branch: string,
	path: string,
	kind: "blob" | "tree",
): string {
	const sep = /gitlab/i.test(repoUrl) ? `/-/${kind}/` : `/${kind}/`;
	const clean = path
		.replace(/^\.?\/+/, "")
		.split("/")
		.map(encodeURIComponent)
		.join("/");
	return `${repoUrl.replace(/\/+$/, "")}${sep}${encodeURIComponent(branch)}/${clean}`;
}

/** Screen code at the start of a frame name, e.g. "CD-KH-070100" or "CD-KH-070100-DK". */
const SCREEN_CODE = /^([A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+)(?=\s|$)/;

/** Main screens by the team's naming: the numeric part of the code ends in "00". */
export const MAIN_SCREEN =
	/^[A-Z][A-Z0-9]*-[A-Z0-9]+-\d{4}00(?:-[A-Z]+)?(?=\s|$)/;

/**
 * Page entry for a discovered frame: name from the screen code (or the frame
 * name), route from the title after "—", e.g.
 * "CD-KH-070100 — Thư viện / Kiến thức" → cd-kh-070100, /thu-vien/kien-thuc.
 * A variant suffix on the code (-DK) is kept on the last route segment.
 */
export function pageFromFrame(
	frame: { id: string; name: string },
	routePrefix = "",
): PageEntry {
	const code = frame.name.match(SCREEN_CODE)?.[1];
	const title =
		frame.name
			.split(/\s+[—–-]\s+/)
			.slice(code ? 1 : 0)
			.join(" / ") || frame.name;
	const segs = title
		.split("/")
		.map((s) => slugPart(s))
		.filter(Boolean);
	const variant = code?.match(/-\d+-([A-Z]+)$/)?.[1];
	if (variant && segs.length)
		segs[segs.length - 1] += `-${variant.toLowerCase()}`;
	const prefix = routePrefix
		.replace(/\/+$/, "")
		.split("/")
		.map(slugPart)
		.filter(Boolean);
	const route = `/${[...prefix, ...segs].join("/")}`;
	const name =
		slugPart(code ?? title).slice(0, 60) ||
		`frame-${frame.id.replace(/[^0-9]+/g, "-")}`;
	return { name, nodeId: frame.id, route: route === "/" ? `/${name}` : route };
}

function slugPart(s: string): string {
	return s
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "d")
		.replace(/Đ/g, "D")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}
