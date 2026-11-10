import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

import { dataDirs, originalsDir, type Project, projectDir, workDir } from "@/lib/projects";
import { assemble, type Data, type Frame, type IndexFile, prime, type Registry, type Screen } from "@/lib/qc/data";
import { listFiles, readBlob, readFile, type TreeEntry } from "@/lib/qc/github";

/**
 * Live data of a project added from the hub, read from main through GitHub (a commit shows without a deploy;
 * the copy on disk when GitHub is not reachable). Rebuilt at most every few minutes per server instance.
 *
 * Full: the code system scripts/he-thong-ma/du_an.py generated in projects/<folder>/_hub (clusters, registry,
 * items, testcases, page codes, screen → requirement pages), the same files ICS reads, so every hub page works
 * as for ICS. Light, until that first run: the originals in projects/<folder>/requirements, one cluster per
 * file holding the screen codes it names, screens from the Figma scan (+ proposed codes).
 */

type Scanned = { id: string; name: string; code: string | null; kind: string };
type ProposalRow = { nodeId: string; maDeXuat?: string; manGoc?: string };

const TTL_MS = 3 * 60_000;
const MAX_FILES = 300;
const CODE = /\b[A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}(?:-DK)?\b/g;
const ONE_CODE = /^[A-Z]{2,4}(?:-[A-Z0-9]{1,4})+-\d{6}(?:-DK)?$/;
const ROOT = /* turbopackIgnore: true */ process.cwd();

const built = new Map<string, { at: number; data: Data }>();
const pending = new Map<string, Promise<Data>>();
/** Blob sha → text: unchanged files are not fetched again on the next build. */
const blobs = new Map<string, string>();

const loaiOf = (code: string): string => (code.endsWith("-DK") ? "ban-toi" : /00$/.test(code) ? "man-chinh" : "popup");

async function texts(entries: TreeEntry[]): Promise<Map<string, string>> {
  const out = new Map<string, string>();
  for (let i = 0; i < entries.length; i += 8)
    await Promise.all(
      entries.slice(i, i + 8).map(async (e) => {
        let text = blobs.get(e.sha);
        if (text === undefined) blobs.set(e.sha, (text = await readBlob(e.sha)));
        out.set(e.path, text);
      }),
    );
  return out;
}

/** The generated code system of the project (projects/<folder>/_hub), or null before its first run. */
async function readSystem(p: Project): Promise<Data | null> {
  const dirs = dataDirs(p);
  let files: TreeEntry[];
  try {
    files = await listFiles(workDir(p));
  } catch {
    return null; // no GitHub: the light build reads the disk
  }
  if (!files.some((e) => e.path === `${dirs.sys}/clusters.json`)) return null;
  const wanted = files.filter(
    (e) =>
      (e.path.startsWith(`${dirs.sys}/`) && !e.path.slice(dirs.sys.length + 1).includes("/") && /\.(json|md)$/.test(e.path)) ||
      e.path === dirs.screenReq ||
      (e.path.startsWith(`${dirs.requirements}/`) && e.path.endsWith(".md")),
  );
  const got = await texts(wanted.slice(0, MAX_FILES * 3));
  const data = assemble((path, fallback) => (got.has(path) ? JSON.parse(got.get(path)!) : fallback), dirs, p.fileKey);
  const req = `${dirs.requirements}/`;
  data.docs = new Map([...got].filter(([k]) => k.startsWith(req)).map(([k, v]) => [k.slice(req.length), v]));
  data.unmapped = got.get(`${dirs.sys}/trang-chua-gan-ma.md`) ?? "";
  return data;
}

/** Every .md under the docs folder, path relative to it. */
async function readDocs(dir: string): Promise<Map<string, string>> {
  const out = new Map<string, string>();
  try {
    const files = (await listFiles(dir)).filter((e) => e.path.endsWith(".md")).slice(0, MAX_FILES);
    for (let i = 0; i < files.length; i += 8)
      await Promise.all(
        files.slice(i, i + 8).map(async (e) => {
          let text = blobs.get(e.sha);
          if (text === undefined) blobs.set(e.sha, (text = await readBlob(e.sha)));
          out.set(e.path.slice(dir.length + 1), text);
        }),
      );
    return out;
  } catch (e) {
    // no GitHub (local dev without a token): the files on disk
    const abs = join(/* turbopackIgnore: true */ ROOT, dir);
    if (!existsSync(abs)) throw e;
    const walk = (d: string) => {
      for (const name of readdirSync(d)) {
        if (name.startsWith(".")) continue;
        const p = join(d, name);
        if (statSync(p).isDirectory()) walk(p);
        else if (name.endsWith(".md") && out.size < MAX_FILES) out.set(relative(abs, p).split("\\").join("/"), readFileSync(p, "utf-8"));
      }
    };
    walk(abs);
    return out;
  }
}

const titleOf = (path: string, text: string): string => text.match(/^#\s+(.+)$/m)?.[1].trim() ?? path.split("/").pop()!.replace(/\.md$/, "");
const nameOf = (path: string): string => path.replace(/\.md$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Screen code → frame: the code in the frame name, else the proposed one. */
export function framesOf(scanned: Scanned[], proposal: ProposalRow[]): Record<string, Frame> {
  const proposed = new Map(proposal.filter((r) => r.maDeXuat && ONE_CODE.test(r.maDeXuat)).map((r) => [r.nodeId, r]));
  const frames: Record<string, Frame> = {};
  for (const s of scanned) {
    const code = s.code ?? proposed.get(s.id)?.maDeXuat ?? null;
    if (!code || frames[code]) continue;
    const parent = proposed.get(s.id)?.manGoc;
    frames[code] = { id: s.id, title: s.name.replace(/^\S+\s*[—–-]\s*/, ""), loai: loaiOf(code), parent: parent && ONE_CODE.test(parent) ? parent : null };
  }
  return frames;
}

async function build(p: Project): Promise<Data> {
  return (await readSystem(p)) ?? light(p);
}

async function light(p: Project): Promise<Data> {
  const dir = projectDir(p.slug);
  const [scan, prop] = await Promise.all([readFile(`${dir}/screens.json`), readFile(`${dir}/de-xuat-ma.json`)]);
  const scanned = (scan ? JSON.parse(scan.text) : []) as Scanned[];
  const proposal = (prop ? (JSON.parse(prop.text) as { frames?: ProposalRow[] }).frames : null) ?? [];
  const frames = framesOf(scanned, proposal);

  const docs = await readDocs(originalsDir(p));
  const screenOf = (code: string): Screen => ({ id: code, title: frames[code].title, kind: frames[code].loai, parent: frames[code].parent, nodeId: frames[code].id, inFigma: true });
  const empty = { requirements: [], exceptions: [], regions: [], testcases: [], issues: [] };

  const files: IndexFile[] = [];
  const registries = new Map<string, Registry>();
  const screenReq: Data["screenReq"] = {};
  const named = new Set<string>();
  for (const [path, text] of [...docs].sort(([a], [b]) => a.localeCompare(b))) {
    const title = titleOf(path, text);
    const codes = [...new Set(text.match(CODE) ?? [])].filter((c) => frames[c]);
    files.push({ path, title, prefix: "", screens: codes, pages: [] });
    let name = nameOf(path) || `file-${files.length}`;
    while (registries.has(name)) name = `${name}-2`;
    registries.set(name, {
      cluster: name,
      title,
      ...empty,
      screens: Object.fromEntries(codes.map((c) => [c, screenOf(c)])),
      requirementFiles: [{ file: path, prefix: "", title }],
    });
    for (const c of codes) {
      named.add(c);
      (screenReq[c] ??= []).push({ file: path, prefix: "", title, pages: [] });
    }
  }
  const rest = Object.keys(frames).filter((c) => !named.has(c));
  if (rest.length)
    registries.set("chua-co-docs", {
      cluster: "chua-co-docs",
      title: "Màn chưa có trong docs",
      ...empty,
      screens: Object.fromEntries(rest.map((c) => [c, screenOf(c)])),
      requirementFiles: [],
    });

  return {
    clusters: [...registries.values()].map((r) => ({ name: r.cluster, title: r.title })),
    registries,
    frames,
    fileKey: p.fileKey,
    screenReq,
    reserved: {},
    index: { version: new Date().toISOString().replace(/\D/g, "").slice(0, 12), generatedAt: new Date().toISOString(), files },
    pages: new Map(),
    nav: {},
    sys: "",
    req: "",
    docs,
  };
}

/** Builds (or reuses) the project's live data and hands it to lib/qc/data.ts. `fresh` skips the cache. */
export async function primeLive(p: Project, fresh = false): Promise<void> {
  const hit = built.get(p.slug);
  if (hit && !fresh && Date.now() - hit.at < TTL_MS) return prime(p.slug, hit.data);
  let job = fresh ? undefined : pending.get(p.slug);
  if (!job) {
    job = build(p).finally(() => pending.delete(p.slug));
    pending.set(p.slug, job);
  }
  try {
    const data = await job;
    built.set(p.slug, { at: Date.now(), data });
    prime(p.slug, data);
  } catch (e) {
    // GitHub or Figma scan unreadable: keep the last good copy if there is one
    if (!hit) throw e;
    prime(p.slug, hit.data);
  }
}
