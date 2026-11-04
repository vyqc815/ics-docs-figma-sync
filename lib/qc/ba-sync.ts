import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

import { ghUnchecked } from "@/lib/qc/github";

/**
 * BA docs → hub. On the company server the BE deploy keeps the BA's requirement docs (branch stable) in a folder
 * (DOCS_BA_DIR; the old docs site read the same folder). Every few minutes the hub compares that folder with
 * qc/requirements on main and commits what was added or changed in one commit; that push runs requirements.yml
 * (template, codes, registry), like a QC upload did. BA docs are the source: files only in the repo are reported,
 * never deleted (QC's set may hold files BA does not have).
 */
const PREFIX = "qc/requirements";
const MAX_FILES = 300;

type TreeEntry = { path: string; type: string; sha: string };

const blobSha = (buf: Buffer): string => createHash("sha1").update(`blob ${buf.length}\0`).update(buf).digest("hex");

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await ghUnchecked(path, init ? { ...init, headers: { "Content-Type": "application/json" } } : undefined);
  if (!res.ok) throw new Error(`GitHub ${res.status} ${path.split("?")[0]}`);
  return (await res.json()) as T;
}

function localFiles(dir: string): Map<string, Buffer> {
  const out = new Map<string, Buffer>();
  const walk = (d: string) => {
    for (const name of readdirSync(d)) {
      if (name.startsWith(".")) continue;
      const p = join(d, name);
      const st = statSync(p);
      if (st.isDirectory()) walk(p);
      else if (!name.endsWith(".html")) out.set(relative(dir, p).split("\\").join("/"), readFileSync(p));
    }
  };
  walk(dir);
  return out;
}

let running = false;

/** One round; returns a short Vietnamese summary for the log. */
export async function syncBaDocs(dir: string): Promise<string> {
  if (running) return "đang chạy lượt trước";
  running = true;
  try {
    const local = localFiles(dir);
    if (!local.size) return `không thấy file nào trong ${dir}`;
    const head = (await api<{ object: { sha: string } }>("/git/ref/heads/main")).object.sha;
    const commit = await api<{ tree: { sha: string } }>(`/git/commits/${head}`);
    const top = await api<{ tree: TreeEntry[] }>(`/git/trees/${commit.tree.sha}`);
    const qc = top.tree.find((e) => e.path === "qc");
    const qcTree = qc ? await api<{ tree: TreeEntry[] }>(`/git/trees/${qc.sha}`) : { tree: [] };
    const reqDir = qcTree.tree.find((e) => e.path === "requirements");
    const remote = new Map<string, string>();
    if (reqDir) for (const e of (await api<{ tree: TreeEntry[] }>(`/git/trees/${reqDir.sha}?recursive=1`)).tree) if (e.type === "blob") remote.set(e.path, e.sha);

    const changed = [...local].filter(([p, buf]) => remote.get(p) !== blobSha(buf));
    const onlyRepo = [...remote.keys()].filter((p) => !local.has(p));
    if (!changed.length) return `không đổi (${local.size} file BA${onlyRepo.length ? `, ${onlyRepo.length} file chỉ có trong repo` : ""})`;

    const batch = changed.slice(0, MAX_FILES);
    const tree = [];
    for (const [p, buf] of batch) {
      const blob = await api<{ sha: string }>("/git/blobs", { method: "POST", body: JSON.stringify({ content: buf.toString("base64"), encoding: "base64" }) });
      tree.push({ path: `${PREFIX}/${p}`, mode: "100644", type: "blob", sha: blob.sha });
    }
    const newTree = await api<{ sha: string }>("/git/trees", { method: "POST", body: JSON.stringify({ base_tree: commit.tree.sha, tree }) });
    const names = batch.map(([p]) => p.split("/").pop()).slice(0, 6).join(", ");
    const message = `Docs BA (stable): ${batch.length} file thêm/sửa — ${names}${batch.length > 6 ? ", …" : ""}`;
    const made = await api<{ sha: string }>("/git/commits", { method: "POST", body: JSON.stringify({ message, tree: newTree.sha, parents: [head] }) });
    // not forced: if someone pushed meanwhile this fails and the next round starts from the new main
    await api("/git/refs/heads/main", { method: "PATCH", body: JSON.stringify({ sha: made.sha, force: false }) });
    return `${message} (${made.sha.slice(0, 8)})${changed.length > batch.length ? `; còn ${changed.length - batch.length} file cho lượt sau` : ""}`;
  } finally {
    running = false;
  }
}

/** Started once per server process (instrumentation.ts) when DOCS_BA_DIR is set. */
export function startBaSync(): void {
  const dir = process.env.DOCS_BA_DIR;
  if (!dir || !process.env.GITHUB_WRITE_TOKEN) return;
  const minutes = Number(process.env.DOCS_BA_SYNC_MINUTES ?? 5) || 5;
  const round = () =>
    syncBaDocs(dir)
      .then((s) => console.log(`[docs BA] ${s}`))
      .catch((e: Error) => console.error(`[docs BA] lỗi: ${e.message}`));
  setTimeout(round, 30_000);
  setInterval(round, minutes * 60_000);
  console.log(`[docs BA] đồng bộ ${dir} → ${PREFIX} mỗi ${minutes} phút`);
}
