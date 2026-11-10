import { signedIn } from "@/lib/qc/auth";

/**
 * The hub's access to this repository (GITHUB_WRITE_TOKEN: Contents + Actions read/write): read and commit
 * files on main, start workflows, read their runs. Data saved here (projects, code proposals) is shared by
 * the whole team and read live, without a deploy.
 */
/** This repository: GITHUB_REPO, else the repo Vercel deployed from, else the original one. */
export const REPO =
  process.env.GITHUB_REPO ??
  (process.env.VERCEL_GIT_REPO_OWNER && process.env.VERCEL_GIT_REPO_SLUG
    ? `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
    : "vyqc815/ics-docs-figma-sync");

async function gh(path: string, init?: RequestInit): Promise<Response> {
  if (!(await signedIn())) throw new Error("Cần đăng nhập Hub.");
  return ghUnchecked(path, init);
}

/** Without the sign-in check: only for reading the account list at sign-in (lib/qc/users.ts). */
export async function ghUnchecked(path: string, init?: RequestInit): Promise<Response> {
  const token = process.env.GITHUB_WRITE_TOKEN;
  if (!token) throw new Error("Server chưa có GITHUB_WRITE_TOKEN.");
  return fetch(`https://api.github.com/repos/${REPO}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", ...(init?.headers ?? {}) },
    cache: "no-store",
  });
}

export async function readFile(path: string): Promise<{ text: string; sha: string } | null> {
  const res = await gh(`/contents/${path}?ref=main`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub ${res.status} khi đọc ${path}.`);
  const j = (await res.json()) as { content: string; sha: string; encoding: string; download_url?: string };
  // files over 1MB come back without content: fetch the raw file instead
  if (!j.content && j.download_url) {
    const raw = await gh(`/contents/${path}?ref=main`, { headers: { Accept: "application/vnd.github.raw+json" } });
    return { text: await raw.text(), sha: j.sha };
  }
  return { text: Buffer.from(j.content, "base64").toString("utf-8"), sha: j.sha };
}

export async function writeFile(path: string, text: string, message: string, sha?: string): Promise<string> {
  const res = await gh(`/contents/${path}`, {
    method: "PUT",
    body: JSON.stringify({ message, content: Buffer.from(text, "utf-8").toString("base64"), branch: "main", ...(sha ? { sha } : {}) }),
  });
  if (res.status === 409 || res.status === 422) throw new Error("File vừa được người khác lưu. Tải lại trang rồi làm lại.");
  if (!res.ok) throw new Error(`Lưu thất bại (GitHub ${res.status}).`);
  return ((await res.json()) as { content: { sha: string } }).content.sha;
}

export async function startWorkflow(file: string, inputs: Record<string, string>): Promise<void> {
  const res = await gh(`/actions/workflows/${file}/dispatches`, { method: "POST", body: JSON.stringify({ ref: "main", inputs }) });
  if (!res.ok) throw new Error(`Không chạy được ${file} (GitHub ${res.status}).`);
}

export type Run = { status: string; conclusion: string | null; createdAt: string; url: string };

/** Latest runs of a workflow, newest first. */
export async function workflowRuns(file: string, n = 10): Promise<Run[]> {
  const res = await gh(`/actions/workflows/${file}/runs?per_page=${n}`);
  if (!res.ok) return [];
  const j = (await res.json()) as { workflow_runs: { status: string; conclusion: string | null; created_at: string; html_url: string; display_title: string }[] };
  return j.workflow_runs.map((r) => ({ status: r.status, conclusion: r.conclusion, createdAt: r.created_at, url: r.html_url }));
}

export type TreeEntry = { path: string; type: string; sha: string };

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await gh(path, init ? { ...init, headers: { "Content-Type": "application/json" } } : undefined);
  if (!res.ok) throw new Error(`GitHub ${res.status} ${path.split("?")[0]}`);
  return (await res.json()) as T;
}

/** Every file on main under a folder (all of them without one), paths repo-relative. */
export async function listFiles(prefix = ""): Promise<TreeEntry[]> {
  const j = await api<{ tree: TreeEntry[]; truncated?: boolean }>(`/git/trees/main?recursive=1`);
  const p = prefix ? `${prefix.replace(/\/$/, "")}/` : "";
  return j.tree.filter((e) => e.type === "blob" && e.path.startsWith(p));
}

/** Text of a blob by its sha (from listFiles); the sha names the content, so callers may cache by it. */
export async function readBlob(sha: string): Promise<string> {
  const j = await api<{ content: string; encoding: string }>(`/git/blobs/${sha}`);
  return Buffer.from(j.content, j.encoding === "base64" ? "base64" : "utf-8").toString("utf-8");
}

/** Deletes every file under a folder on main in one commit; returns how many. */
export async function deleteFolder(prefix: string, message: string): Promise<number> {
  const p = `${prefix.replace(/\/$/, "")}/`;
  const head = (await api<{ object: { sha: string } }>("/git/ref/heads/main")).object.sha;
  const commit = await api<{ tree: { sha: string } }>(`/git/commits/${head}`);
  const all = await api<{ tree: TreeEntry[] }>(`/git/trees/${commit.tree.sha}?recursive=1`);
  const gone = all.tree.filter((e) => e.type === "blob" && e.path.startsWith(p));
  if (!gone.length) return 0;
  const tree = await api<{ sha: string }>("/git/trees", {
    method: "POST",
    body: JSON.stringify({ base_tree: commit.tree.sha, tree: gone.map((e) => ({ path: e.path, mode: "100644", type: "blob", sha: null })) }),
  });
  const made = await api<{ sha: string }>("/git/commits", { method: "POST", body: JSON.stringify({ message, tree: tree.sha, parents: [head] }) });
  await api("/git/refs/heads/main", { method: "PATCH", body: JSON.stringify({ sha: made.sha, force: false }) });
  return gone.length;
}

/** Bytes of a file on main (images in a docs folder); null when it is not there. */
export async function readBytes(path: string): Promise<Uint8Array | null> {
  const res = await gh(`/contents/${path.split("/").map(encodeURIComponent).join("/")}?ref=main`, { headers: { Accept: "application/vnd.github.raw+json" } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub ${res.status} khi đọc ${path}.`);
  return new Uint8Array(await res.arrayBuffer());
}
