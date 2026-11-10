"use server";

import { requireRole } from "@/lib/qc/auth";
import {
  cleanDir,
  DEFAULT_PROJECT,
  dataDirs,
  defaultDocsDir,
  getProject,
  loadProjects,
  type Project,
  projectDir,
  PROJECTS_FILE,
  reloadProjects,
  RESERVED_DIRS,
  type ScanScope,
} from "@/lib/projects";
import { deleteFolder, listFiles, readFile, startWorkflow, workflowRuns, writeFile } from "@/lib/qc/github";
import { primeLive } from "@/lib/qc/remote";

/**
 * Reading a Figma file for the "Dự án" page: its pages and sections, then the screens in the parts the
 * user ticked. Through the REST API with the server's FIGMA_ACCESS_TOKEN (the file must be shared with it).
 * Projects are saved in this repo: the list in docs/du-an/projects.json, each project's data in
 * docs/du-an/<slug>/, its requirement Markdown in a folder of this repo (docsDir). QC / admin only.
 */

type Rn = { id: string; name: string; type: string; children?: Rn[]; absoluteBoundingBox?: { width: number; height: number } };

export type Outline = {
  fileKey: string;
  name: string;
  pages: { id: string; name: string; frames: number; sections: { id: string; name: string; frames: number }[] }[];
};
export type Screen = { id: string; name: string; code: string | null; kind: string; page: string; section: string | null; width: number; height: number };

const CODE = /^([A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}(?:-DK)?)/;

async function figma(path: string): Promise<unknown> {
  await requireRole("edit");
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) throw new Error("Server chưa có FIGMA_ACCESS_TOKEN.");
  const res = await fetch(`https://api.figma.com${path}`, { headers: { "X-Figma-Token": token }, cache: "no-store" });
  if (res.status === 403 || res.status === 404) throw new Error("Không mở được file: kiểm tra link, và file đã chia sẻ cho tài khoản Figma của server chưa.");
  if (!res.ok) throw new Error(`Figma trả lỗi ${res.status}.`);
  return res.json();
}

const countFrames = (n: Rn): number => (n.children ?? []).reduce((k, c) => k + (c.type === "FRAME" ? 1 : c.type === "SECTION" || c.type === "GROUP" ? countFrames(c) : 0), 0);

export async function readFigmaFile(link: string): Promise<Outline> {
  const fileKey = link.match(/figma\.com\/(?:design|file|proto)\/([A-Za-z0-9]+)/)?.[1] ?? (/^[A-Za-z0-9]{15,}$/.test(link.trim()) ? link.trim() : null);
  if (!fileKey) throw new Error("Link không phải link file Figma (figma.com/design/…).");
  const file = (await figma(`/v1/files/${fileKey}?depth=3`)) as { name: string; document: Rn };
  return {
    fileKey,
    name: file.name,
    pages: (file.document.children ?? []).map((p) => ({
      id: p.id,
      name: p.name.trim(),
      frames: (p.children ?? []).filter((c) => c.type === "FRAME").length,
      sections: (p.children ?? []).filter((c) => c.type === "SECTION").map((s) => ({ id: s.id, name: s.name.trim(), frames: countFrames(s) })),
    })),
  };
}

function kindOf(code: string | null): string {
  if (!code) return "Khác";
  if (code.endsWith("-DK")) return "Bản tối";
  return /00$/.test(code) ? "Màn chính" : "Popup / trạng thái";
}

/** Frames in the ticked pages (whole page) and sections; with onlyCoded, only frames named "<MÃ> — …". */
export async function scanFigmaFile(fileKey: string, pageIds: string[], sectionIds: string[], onlyCoded: boolean): Promise<Screen[]> {
  const pagesOf = (await figma(`/v1/files/${fileKey}?depth=2`)) as { document: Rn };
  const out: Screen[] = [];
  for (const page of pagesOf.document.children ?? []) {
    const whole = pageIds.includes(page.id);
    const sections = (page.children ?? []).filter((c) => c.type === "SECTION" && sectionIds.includes(c.id));
    if (!whole && !sections.length) continue;
    const res = (await figma(`/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(page.id)}&depth=4`)) as { nodes: Record<string, { document: Rn } | null> };
    const visit = (n: Rn, section: string | null, take: boolean) => {
      if (n.type === "FRAME") {
        if (!take) return;
        const code = n.name.match(CODE)?.[1] ?? null;
        const box = n.absoluteBoundingBox ?? { width: 0, height: 0 };
        if (onlyCoded ? code : box.width >= 320 && box.height >= 200)
          out.push({ id: n.id, name: n.name, code, kind: kindOf(code), page: page.name.trim(), section, width: Math.round(box.width), height: Math.round(box.height) });
        return;
      }
      if (n.type === "SECTION" || n.type === "GROUP")
        for (const c of n.children ?? []) visit(c, n.type === "SECTION" ? n.name.trim() : section, take || sectionIds.includes(n.id));
    };
    for (const c of res.nodes[page.id]?.document.children ?? []) visit(c, null, whole);
  }
  return out;
}

// ---------------------------------------------------------------- projects saved in the repo (docs/du-an)

export type ProjectInfo = Project;
export type ProposalRow = {
  nodeId: string;
  page: string;
  section: string;
  tenHienTai: string;
  loai: string;
  maDeXuat: string;
  tenMoi: string;
  manGoc: string;
  mucTin: string;
  goiYKhac: string;
  link: string;
  duyet?: boolean;
};
export type Proposal = { project: string; fileKey: string; fileName: string; frames: ProposalRow[] };

const LIST = PROJECTS_FILE;
const slugOf = (name: string) =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40) || "du-an";

/** Saved projects (without the built-in ICS entry). */
export async function listProjects(): Promise<ProjectInfo[]> {
  const f = await readFile(LIST);
  return f ? (JSON.parse(f.text) as ProjectInfo[]).filter((p) => p.slug !== DEFAULT_PROJECT) : [];
}

/** The slug a new project with this name gets, so the form can show its default docs folder. */
export async function slugFor(name: string): Promise<string> {
  const list = await listProjects();
  const base = slugOf(name);
  let slug = base;
  for (let i = 2; slug === DEFAULT_PROJECT || list.some((x) => x.slug === slug); i++) slug = `${base}-${i}`;
  return slug;
}

/** Folders of this repo that hold Markdown, with how many files: choices for a project's docs folder. */
export async function docsFolders(): Promise<{ dir: string; files: number; used: string | null }[]> {
  await requireRole("edit");
  const list = await loadProjects();
  const count = new Map<string, number>();
  for (const e of await listFiles())
    if (e.path.endsWith(".md") && !e.path.startsWith(".") && !e.path.startsWith("node_modules/")) {
      const parts = e.path.split("/").slice(0, -1);
      for (let i = 1; i <= parts.length; i++) count.set(parts.slice(0, i).join("/"), (count.get(parts.slice(0, i).join("/")) ?? 0) + 1);
    }
  return [...count]
    .filter(([dir]) => !RESERVED_DIRS.some((r) => dir === r || dir.startsWith(`${r}/`)))
    .map(([dir, files]) => ({ dir, files, used: list.find((p) => dataDirs(p).requirements === dir)?.name ?? null }))
    .sort((a, b) => a.dir.localeCompare(b.dir));
}

/** A docs folder this project may use: inside the repo, not ICS's, not another project's (nor inside one). */
async function checkDir(dir: string, slug: string): Promise<{ dir: string; files: number }> {
  const d = cleanDir(dir);
  if (!d) throw new Error("Thư mục docs không hợp lệ: ghi đường dẫn trong repo, vd. projects/ten-du-an/requirements.");
  const inside = (a: string, b: string) => a === b || a.startsWith(`${b}/`) || b.startsWith(`${a}/`);
  if (RESERVED_DIRS.some((r) => inside(d, r))) throw new Error(`Thư mục ${d} thuộc dữ liệu của ICS/Hub, chọn thư mục khác.`);
  const other = (await loadProjects()).find((p) => p.slug !== slug && inside(dataDirs(p).requirements, d));
  if (other) throw new Error(`Thư mục ${d} đang là docs của dự án “${other.name}”.`);
  const files = (await listFiles(d)).filter((e) => e.path.endsWith(".md")).length;
  return { dir: d, files };
}

type NewProject = { name: string; code: string; fileKey: string; fileName: string; pages: string[]; scan: ScanScope; docsDir: string };

/** Saves a project (a new one, or the one already made from this Figma file) with its scanned screens. */
export async function saveProject(p: NewProject, screens: Screen[]): Promise<string> {
  await requireRole("edit");
  if (!/^[A-Z]{2,4}$/.test(p.code)) throw new Error("Mã dự án là 2–4 chữ in hoa, vd. ADM.");
  const ics = getProject(DEFAULT_PROJECT);
  if (ics?.fileKey && ics.fileKey === p.fileKey) throw new Error("File Figma này là của ICS, đã có sẵn trong Hub.");
  const current = await readFile(LIST);
  const list: ProjectInfo[] = current ? JSON.parse(current.text) : [];
  const old = list.find((x) => x.fileKey === p.fileKey && x.slug !== DEFAULT_PROJECT);
  const slug = old?.slug ?? (await slugFor(p.name));
  const { dir } = await checkDir(p.docsDir || defaultDocsDir(slug), slug);
  await writeScreens(slug, p.name, screens);
  const next = [...list.filter((x) => x.slug !== slug), { ...old, ...p, docsDir: dir, slug, count: screens.length, scannedAt: new Date().toISOString() }];
  await writeFile(LIST, `${JSON.stringify(next, null, 1)}\n`, `Dự án ${p.name}: lưu`, current?.sha);
  reloadProjects();
  return slug;
}

async function writeScreens(slug: string, name: string, screens: Screen[]): Promise<void> {
  const path = `${projectDir(slug)}/screens.json`;
  const old = await readFile(path);
  await writeFile(path, `${JSON.stringify(screens, null, 1)}\n`, `Dự án ${name}: ${screens.length} màn quét từ Figma`, old?.sha);
}

/** Changes a saved project's fields in docs/du-an/projects.json. */
async function patchProject(slug: string, patch: Partial<ProjectInfo>, message: string): Promise<ProjectInfo> {
  const current = await readFile(LIST);
  const list: ProjectInfo[] = current ? JSON.parse(current.text) : [];
  const p = list.find((x) => x.slug === slug);
  if (!p || slug === DEFAULT_PROJECT) throw new Error("Không thấy dự án.");
  const next = { ...p, ...patch };
  await writeFile(LIST, `${JSON.stringify(list.map((x) => (x.slug === slug ? next : x)), null, 1)}\n`, message, current?.sha);
  reloadProjects();
  return next;
}

/** Scans the project's Figma file again (same pages / sections as when it was added) and rebuilds its hub data. */
export async function rescanProject(slug: string): Promise<number> {
  await requireRole("edit");
  const p = (await listProjects()).find((x) => x.slug === slug);
  if (!p) throw new Error("Không thấy dự án.");
  let scope = p.scan;
  if (!scope) {
    // projects saved before the scope was kept: the pages by name, whole
    const outline = await readFigmaFile(p.fileKey);
    scope = { pageIds: outline.pages.filter((x) => p.pages.includes(x.name)).map((x) => x.id), sectionIds: [], onlyCoded: true };
  }
  const screens = await scanFigmaFile(p.fileKey, scope.pageIds, scope.sectionIds, scope.onlyCoded);
  if (!screens.length) throw new Error("Lần quét này không thấy màn nào (trang/Section đã đổi?). Giữ lần quét cũ.");
  await writeScreens(slug, p.name, screens);
  const next = await patchProject(slug, { count: screens.length, scannedAt: new Date().toISOString(), scan: scope }, `Dự án ${p.name}: quét lại ${screens.length} màn`);
  await primeLive(next, true).catch(() => undefined);
  return screens.length;
}

/** Points the project at another docs folder of this repo. */
export async function setDocsDir(slug: string, dir: string): Promise<{ dir: string; files: number }> {
  await requireRole("edit");
  const checked = await checkDir(dir, slug);
  const next = await patchProject(slug, { docsDir: checked.dir }, `Dự án ${slug}: docs ở ${checked.dir}`);
  await primeLive(next, true).catch(() => undefined);
  return checked;
}

/** Removes the project from the list and its hub data (docs/du-an/<slug>); its docs folder is kept. */
export async function deleteProject(slug: string): Promise<void> {
  await requireRole("edit");
  if (slug === DEFAULT_PROJECT) throw new Error("Không bỏ được dự án ICS.");
  const current = await readFile(LIST);
  if (!current) return;
  const list = (JSON.parse(current.text) as ProjectInfo[]).filter((x) => x.slug !== slug);
  await writeFile(LIST, `${JSON.stringify(list, null, 1)}\n`, `Dự án ${slug}: bỏ khỏi danh sách`, current.sha);
  reloadProjects();
  await deleteFolder(projectDir(slug), `Dự án ${slug}: xoá dữ liệu Hub`).catch(() => 0);
}

export async function projectScreens(slug: string): Promise<Screen[]> {
  const f = await readFile(`${projectDir(slug)}/screens.json`);
  return f ? JSON.parse(f.text) : [];
}

export async function startProposal(slug: string): Promise<void> {
  await requireRole("edit");
  const p = (await listProjects()).find((x) => x.slug === slug);
  if (!p) throw new Error("Không thấy dự án.");
  // "|" between page names: a Figma page name may hold a comma
  await startWorkflow("de-xuat-ma.yml", { slug, file: p.fileKey, project: p.code, pages: p.pages.join("|") });
}

/** Whether a proposal run is going, and the proposal itself once it exists. */
export async function proposalState(slug: string): Promise<{ running: boolean; lastRun: string | null; proposal: Proposal | null; sha: string | null }> {
  const runs = await workflowRuns("de-xuat-ma.yml", 5);
  const f = await readFile(`${projectDir(slug)}/de-xuat-ma.json`);
  return {
    running: runs.some((r) => r.status !== "completed"),
    lastRun: runs[0]?.createdAt ?? null,
    proposal: f ? (JSON.parse(f.text) as Proposal) : null,
    sha: f?.sha ?? null,
  };
}

export async function saveProposal(slug: string, proposal: Proposal, sha: string): Promise<string> {
  await requireRole("edit");
  const next = await writeFile(`${projectDir(slug)}/de-xuat-ma.json`, `${JSON.stringify(proposal, null, 1)}\n`, `Đề xuất mã ${slug}: design duyệt`, sha);
  const p = (await listProjects()).find((x) => x.slug === slug);
  if (p) await primeLive(p, true).catch(() => undefined);
  return next;
}

export async function sendToDesign(slug: string, text: string): Promise<void> {
  await requireRole("edit");
  await startWorkflow("chat-message.yml", { thread: `design-${slug}`, text });
}
