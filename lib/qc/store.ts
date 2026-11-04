import { readFile, writeFile } from "@/lib/qc/github";

/**
 * Small JSON files the hub keeps in this repo (docs/hub/…), read and written live through the GitHub API so
 * every viewer sees a change at once, no deploy. A write that loses a race (someone saved in between) is
 * replayed once on the fresh copy.
 */
export async function readJson<T>(path: string, fallback: T): Promise<T> {
  const f = await readFile(path);
  return f ? (JSON.parse(f.text) as T) : fallback;
}

export async function updateJson<T>(path: string, fallback: T, change: (data: T) => T, message: string): Promise<T> {
  for (let attempt = 0; ; attempt += 1) {
    const f = await readFile(path);
    const next = change(f ? (JSON.parse(f.text) as T) : structuredClone(fallback));
    try {
      await writeFile(path, `${JSON.stringify(next, null, 1)}\n`, message, f?.sha);
      return next;
    } catch (e) {
      if (attempt >= 1 || !String((e as Error).message).includes("người khác")) throw e;
    }
  }
}

/** docs/hub/tai-lieu.json: tags per requirement file (seeded from ics-docs-figma-sync sync/docs_meta.yml). */
export const DOC_META = "docs/hub/tai-lieu.json";
export type DocMeta = Record<string, { tags?: string[] }>;

/** docs/hub/tien-do.json: each developer's own progress per screen code. */
export const PROGRESS = "docs/hub/tien-do.json";
export type ProgressState = "dang" | "xong";
export type Progress = Record<string, Record<string, { s: ProgressState; at: string }>>;
export const PROGRESS_LABEL: Record<ProgressState, string> = { dang: "Đang làm", xong: "Xong" };
