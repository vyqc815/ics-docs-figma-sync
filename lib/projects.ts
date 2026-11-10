import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Projects the hub serves. Each one has its own Figma file, its own requirement docs and the same code system
 * (clusters, registry, items, testcases, codes) built by scripts/he-thong-ma. ICS is built in and keeps the
 * folders it always had; projects added from the "Dự án" page live in docs/du-an/projects.json, with
 *   projects/<folder>/requirements/   QC's original Markdown (like projects/ics/requirements of ICS)
 *   projects/<folder>/_hub/           the code system generated from it (scripts/he-thong-ma/du_an.py,
 *                                     .github/workflows/requirements-du-an.yml), laid out like the ICS repo
 *   docs/du-an/<slug>/                the hub's data: Figma scan, code proposal, sync marks, tags, Figma changes
 *
 * Usage: `await loadProjects()` once per request (lib/qc/project.ts), then `getProject(slug)` / `listProjects()`.
 * The list is read live from main through GitHub (the hub writes it there), so a new project shows at once;
 * without GitHub access, the copy on disk.
 */

/** Repo-relative folders of a project's data. */
export type DataDirs = {
  /** Generated code system: clusters.json, *.registry.json, figma-frames.json, qc-index.json… */
  sys: string;
  /** Requirement Markdown as the hub reads it. */
  requirements: string;
  /** Screen → requirement pages map. */
  screenReq: string;
  /** Built pages (name → route); only ICS has demo code in this repo. */
  pages: string | null;
};

/** What was ticked when the project's Figma file was scanned, so "Quét lại" scans the same parts. */
export type ScanScope = { pageIds: string[]; sectionIds: string[]; onlyCoded: boolean };

export type Project = {
  slug: string;
  name: string;
  /** Prefix of the project's screen codes (ICS, ADM…). */
  code: string;
  fileKey: string;
  fileName: string;
  /** Figma pages the screens were scanned from. */
  pages: string[];
  scan?: ScanScope;
  scannedAt: string;
  count: number;
  /** Its folder under projects/ (picked on the hub); the slug when not set. */
  folder?: string;
  /** Older saves: the requirement folder itself (projects/<folder>/requirements). */
  docsDir?: string;
  data?: Partial<DataDirs>;
};

export const DEFAULT_PROJECT = "ics";
export const PROJECTS_FILE = "docs/du-an/projects.json";
/** Folder of a live project's hub data (scan, code proposal, sync marks, tags, Figma changes). */
export const projectDir = (slug: string): string => `docs/du-an/${slug}`;
/** Every hub-added project has its folder under projects/ (see projects/README.md). */
export const DOCS_ROOT = "projects";
/** Folders under projects/ that are not a project: the ICS reference note and the template. */
export const RESERVED_FOLDERS = ["ics", "_mau-du-an"];
/** A folder name under projects/: letters, digits, "-" and "_", not starting with "." or "_". */
export const FOLDER = /^[a-z0-9][a-z0-9_-]{0,59}$/;

/** The project's folder under projects/. */
export const folderOf = (p: Project): string => p.folder ?? p.docsDir?.match(/^projects\/([^/]+)/)?.[1] ?? p.slug;
/** Where QC writes a hub-added project's requirements (originals). */
export const originalsDir = (p: Project): string => `${DOCS_ROOT}/${folderOf(p)}/requirements`;
/** Its generated code system, laid out like the ICS repo (scripts/he-thong-ma/du_an.py). */
export const workDir = (p: Project): string => `${DOCS_ROOT}/${folderOf(p)}/_hub`;

const ROOT = /* turbopackIgnore: true */ process.cwd();
const json = <T,>(path: string, fallback: T): T => (existsSync(path) ? (JSON.parse(readFileSync(path, "utf-8")) as T) : fallback);

/** ICS: the folders this repo was built around. */
function ics(): Project {
  const cfg = json<{ fileKey?: string }>(join(/* turbopackIgnore: true */ ROOT, "figma.pages.json"), {});
  return {
    slug: DEFAULT_PROJECT,
    name: "ICS",
    code: "ICS",
    fileKey: cfg.fileKey ?? "",
    fileName: "PLS-ICS",
    pages: [],
    scannedAt: "",
    count: 0,
    data: { sys: "docs/he-thong-ma", requirements: "docs/requirements", screenReq: "scripts/figma/screen-requirements.json", pages: "figma.pages.json" },
  };
}

/** Data folders of a project: what it sets (ICS), else its generated code system in projects/<folder>/_hub. */
export const dataDirs = (p: Project): DataDirs => ({
  sys: p.data?.sys ?? `${workDir(p)}/docs/he-thong-ma`,
  requirements: p.data?.requirements ?? `${workDir(p)}/docs/requirements`,
  screenReq: p.data?.screenReq ?? `${workDir(p)}/scripts/figma/screen-requirements.json`,
  pages: p.data?.pages ?? null,
});

/** The saved list as last read live from GitHub, and when. */
let live: { at: number; list: Project[] } | null = null;
const LIVE_MS = 30_000;

/** Reads the saved list from main (at most every 30 s); keeps the last good copy when GitHub fails. */
export async function loadProjects(): Promise<Project[]> {
  if (!live || Date.now() - live.at > LIVE_MS) {
    try {
      const { readFile } = await import("@/lib/qc/github");
      const f = await readFile(PROJECTS_FILE);
      live = { at: Date.now(), list: f ? (JSON.parse(f.text) as Project[]) : [] };
    } catch {
      live = live ? { ...live, at: Date.now() } : null;
    }
  }
  return listProjects();
}

/** Forget the live copy, after the hub saved the list. */
export const reloadProjects = (): void => void (live = null);

/** A project whose data is not generated in this repo: built live from its docs folder and Figma scan. */
export const isLive = (p: Project): boolean => !p.data?.sys;

/** Built-in ICS first, then the saved ones (a saved "ics" entry overrides fields of the built-in one). */
export function listProjects(): Project[] {
  const saved = live?.list ?? json<Project[]>(join(/* turbopackIgnore: true */ ROOT, PROJECTS_FILE), []);
  const base = ics();
  const own = saved.find((p) => p.slug === base.slug);
  return [own ? { ...base, ...own, data: { ...base.data, ...own.data } } : base, ...saved.filter((p) => p.slug !== base.slug)];
}

export const getProject = (slug: string = DEFAULT_PROJECT): Project | undefined => listProjects().find((p) => p.slug === slug);
