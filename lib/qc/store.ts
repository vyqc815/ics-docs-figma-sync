import { DEFAULT_PROJECT, projectDir } from "@/lib/projects";
import { requestProject } from "@/lib/qc/data";
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

/**
 * docs/hub/tai-lieu.json: tags per requirement file (seeded from ics-docs-figma-sync sync/docs_meta.yml); a project
 * added from the hub keeps its own in docs/du-an/<slug>/tai-lieu.json. For the project of this request.
 */
export const docMetaPath = (slug: string = requestProject().slug): string => (slug === DEFAULT_PROJECT ? "docs/hub/tai-lieu.json" : `${projectDir(slug)}/tai-lieu.json`);
export type DocMeta = Record<string, { tags?: string[] }>;

/**
 * docs/hub/tien-do.json: each developer's own progress per screen code. Marking a state is also the developer's
 * baseline for that screen (lib/qc/dev-moc.ts): `at` and the hashes of the requirement it was coded against.
 * nUi / nRules / nFigma: what scripts/figma/notify-devs.mjs already sent to Google Chat, so nothing is sent twice.
 */
export const PROGRESS = "docs/hub/tien-do.json";
export type ProgressState = "dang" | "xong";
export type ProgressEntry = { s: ProgressState; at: string; ui?: string; rules?: string; nUi?: string; nRules?: string; nFigma?: string };
export type Progress = Record<string, Record<string, ProgressEntry>>;
export const PROGRESS_LABEL: Record<ProgressState, string> = { dang: "Đang làm", xong: "Xong" };

/**
 * docs/hub/thong-bao.json: Google Chat webhooks for "your screen changed" messages: one per developer (set by
 * themselves) and one for the project (set by an admin), read by scripts/figma/notify-devs.mjs. Never shown in full.
 */
export const NOTIFY = "docs/hub/thong-bao.json";
export type NotifySettings = { project?: string; devs?: Record<string, string> };
export const WEBHOOK = /^https:\/\/chat\.googleapis\.com\/v1\/spaces\/[\w-]+\/messages\?\S+$/;
/** "…" + the last characters, enough to recognise which webhook is saved. */
export const maskWebhook = (url: string): string => `chat.googleapis.com/…${url.slice(-6)}`;

/**
 * Docs repo as the source (DOCS_BA_DIR set, company server): QC writes requirements in the docs repo, branch stable,
 * and the hub copies them in (lib/qc/ba-sync.ts), so it does not edit them itself.
 */
export const baDocsMode = (): boolean => !!process.env.DOCS_BA_DIR;
