import { createHash } from "node:crypto";

import { readFile } from "@/lib/qc/github";
import { DEFAULT_PROJECT, projectDir } from "@/lib/projects";
import { requestProject, requirementFiles, requirementMarkdown } from "@/lib/qc/data";

/**
 * Whether a requirement file and its Figma screens still match since someone checked them ("Đánh dấu đã đồng bộ"),
 * like vyqc815/ics-docs-figma-sync does for BA docs:
 *   docs/dong-bo/moc.json        file → hash of the requirement when marked, when, by whom (written from the hub)
 *   docs/dong-bo/figma-doi.json  code → latest real design changes (figma-changes.yml, hourly)
 * Both are read live from GitHub, so a mark or a Figma change shows without a deploy. The requirement text is the
 * one the hub shows. A project added from the hub keeps its own pair in docs/du-an/<slug>/ (dong-bo.json,
 * figma-doi.json written by scripts/figma/live-changes.mjs), for the project of this request (lib/qc/project.ts).
 */
const live = (slug: string): boolean => slug !== DEFAULT_PROJECT;
export const mocPath = (slug: string = requestProject().slug): string => (live(slug) ? `${projectDir(slug)}/dong-bo.json` : "docs/dong-bo/moc.json");
export const doiPath = (slug: string = requestProject().slug): string => (live(slug) ? `${projectDir(slug)}/figma-doi.json` : "docs/dong-bo/figma-doi.json");

export type Mark = { docs: string; at: string; by: string };
export type State = "xanh" | "cam" | "lam" | "do" | "chua";
export const STATES: Record<State, { icon: string; label: string; tone: "green" | "amber" | "violet" | "red" | "gray" }> = {
  xanh: { icon: "🟢", label: "Đồng bộ", tone: "green" },
  cam: { icon: "🟠", label: "Requirement đổi, UI chưa cập nhật", tone: "amber" },
  lam: { icon: "🔵", label: "UI đổi, requirement chưa cập nhật", tone: "violet" },
  do: { icon: "🔴", label: "Cả hai đổi", tone: "red" },
  chua: { icon: "⚪", label: "Chưa có mốc", tone: "gray" },
};
export type SyncRow = {
  file: string;
  title: string;
  prefix: string;
  screens: string[];
  state: State;
  mark?: Mark;
  docsChanged: boolean;
  changes: { code: string; at: string; what: string }[];
};

export const docsHash = (file: string, slug?: string): string | null => {
  const text = requirementMarkdown(file, slug);
  return text === null ? null : createHash("sha256").update(text).digest("hex").slice(0, 16);
};

export async function readMarks(slug?: string): Promise<{ marks: Record<string, Mark>; sha?: string }> {
  const f = await readFile(mocPath(slug));
  return f ? { marks: JSON.parse(f.text), sha: f.sha } : { marks: {} };
}

/** Short cache per project: the menu shows a dot per file on every page, two GitHub reads each time would be slow. */
const cached = new Map<string, { at: number; rows: SyncRow[] }>();
export const forgetSync = (slug: string = requestProject().slug): void => void cached.delete(slug);

export async function syncRowsCached(maxAgeMs = 60_000): Promise<SyncRow[]> {
  const slug = requestProject().slug;
  const hit = cached.get(slug);
  if (hit && Date.now() - hit.at < maxAgeMs) return hit.rows;
  const rows = await syncRows();
  cached.set(slug, { at: Date.now(), rows });
  return rows;
}

export type FigmaLog = Record<string, { at: string; what: string }[]>;

/** docs/dong-bo/figma-doi.json: code → real design changes, newest written hourly by figma-changes.yml. */
export async function readFigmaLog(): Promise<FigmaLog> {
  const doi = await readFile(doiPath());
  return doi ? (JSON.parse(doi.text) as FigmaLog) : {};
}

export async function syncRows(): Promise<SyncRow[]> {
  const [{ marks }, log] = await Promise.all([readMarks(), readFigmaLog()]);
  return requirementFiles().map((f) => {
    const mark = marks[f.path];
    const hash = docsHash(f.path);
    const docsChanged = !!mark && hash !== mark.docs;
    const changes = f.screens
      .flatMap((code) => [code, `${code}-DK`])
      .flatMap((code) => (log[code] ?? []).filter((c) => !mark || c.at > mark.at).map((c) => ({ code, ...c })))
      .sort((a, b) => b.at.localeCompare(a.at));
    const ui = !!mark && changes.length > 0;
    const state: State = !mark ? "chua" : docsChanged && ui ? "do" : docsChanged ? "cam" : ui ? "lam" : "xanh";
    return { file: f.path, title: f.title, prefix: f.prefix, screens: f.screens, state, mark, docsChanged, changes };
  });
}
