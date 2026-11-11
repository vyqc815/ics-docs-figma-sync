"use server";

import { requireRole } from "@/lib/qc/auth";
import {
  DEFAULT_PROJECT,
  DOCS_ROOT,
  FOLDER,
  folderOf,
  getProject,
  loadProjects,
  type Project,
  projectDir,
  PROJECTS_FILE,
  reloadProjects,
  RESERVED_FOLDERS,
  type ScanScope,
} from "@/lib/projects";
import { copyFolder, deleteFolder, listFiles, readFile, startWorkflow, workflowRuns, writeFile } from "@/lib/qc/github";
import { primeLive } from "@/lib/qc/remote";

/**
 * Reading a Figma file for the "Dự án" page: its pages and sections, then the screens in the parts the
 * user ticked. Through the REST API with the server's FIGMA_ACCESS_TOKEN (the file must be shared with it).
 * Projects are saved in this repo: the list in docs/du-an/projects.json, each project's data in
 * docs/du-an/<slug>/, its requirements and generated code system in projects/<folder>/. QC / admin only.
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

/** Nodes that can be a screen: a frame, or a component / instance drawn as one. */
const SCREEN = new Set(["FRAME", "COMPONENT", "INSTANCE"]);
/** Containers opened while looking for screens. */
const BOX = new Set(["SECTION", "GROUP", "COMPONENT_SET"]);
const countFrames = (n: Rn): number => (n.children ?? []).reduce((k, c) => k + (SCREEN.has(c.type) ? 1 : BOX.has(c.type) ? countFrames(c) : 0), 0);

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
      frames: (p.children ?? []).filter((c) => SCREEN.has(c.type)).length + (p.children ?? []).filter((c) => c.type === "GROUP" || c.type === "COMPONENT_SET").reduce((k, c) => k + countFrames(c), 0),
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
      if (SCREEN.has(n.type)) {
        if (!take) return;
        const code = n.name.match(CODE)?.[1] ?? null;
        const box = n.absoluteBoundingBox ?? { width: 0, height: 0 };
        if (onlyCoded ? code : box.width >= 320 && box.height >= 200)
          out.push({ id: n.id, name: n.name, code, kind: kindOf(code), page: page.name.trim(), section, width: Math.round(box.width), height: Math.round(box.height) });
        return;
      }
      if (BOX.has(n.type))
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

export type FolderInfo = { name: string; files: number; built: boolean; used: string | null };

/** Folders under projects/ (one per project, picked by name), with how many requirement files each holds. */
export async function projectFolders(): Promise<FolderInfo[]> {
  await requireRole("edit");
  const list = (await loadProjects()).filter((p) => p.slug !== DEFAULT_PROJECT);
  const found = new Map<string, FolderInfo>();
  for (const e of await listFiles(DOCS_ROOT)) {
    const [, name, ...rest] = e.path.split("/");
    if (!name || !rest.length || !FOLDER.test(name) || RESERVED_FOLDERS.includes(name)) continue;
    const f = found.get(name) ?? { name, files: 0, built: false, used: list.find((p) => folderOf(p) === name)?.name ?? null };
    if (rest[0] === "requirements" && e.path.endsWith(".md")) f.files += 1;
    if (rest[0] === "_hub") f.built = true;
    found.set(name, f);
  }
  return [...found.values()].sort((x, y) => x.name.localeCompare(y.name));
}

/** A folder this project may use: a plain name, not the template / ICS note, not another project's. */
async function checkFolder(folder: string, slug: string): Promise<string> {
  const f = folder.trim();
  if (!FOLDER.test(f)) throw new Error("Tên thư mục chỉ gồm chữ thường không dấu, số, “-” hoặc “_”, vd. thu-hoa-don.");
  if (RESERVED_FOLDERS.includes(f)) throw new Error(`projects/${f} là mẫu / ghi chú tham chiếu, chọn thư mục khác.`);
  const other = (await loadProjects()).find((p) => p.slug !== slug && p.slug !== DEFAULT_PROJECT && folderOf(p) === f);
  if (other) throw new Error(`projects/${f} đang là thư mục của dự án “${other.name}”.`);
  return f;
}

/** A folder new on main gets the template's requirements (projects/_mau-du-an), so QC fills it in. */
async function ensureFolder(folder: string, name: string): Promise<void> {
  if ((await listFiles(`${DOCS_ROOT}/${folder}`)).length) return;
  await copyFolder(`${DOCS_ROOT}/_mau-du-an`, `${DOCS_ROOT}/${folder}`, `Dự án ${name}: tạo projects/${folder} từ mẫu`, (rel) => rel === "README.md");
}

/** "ADM-KH-010100" frames → "ADM"; none → initials of the name ("Thu hoá đơn" → "THD"), 2–4 letters. */
function codeOf(name: string, screens: Screen[]): string {
  const count = new Map<string, number>();
  for (const s of screens) if (s.code) count.set(s.code.split("-")[0], (count.get(s.code.split("-")[0]) ?? 0) + 1);
  const top = [...count].sort((a, b) => b[1] - a[1])[0]?.[0];
  if (top) return top;
  const letters = slugOf(name).split("-").map((w) => w[0] ?? "").join("").toUpperCase().slice(0, 4);
  return letters.length >= 2 ? letters : (slugOf(name).replace(/-/g, "").toUpperCase().slice(0, 3) || "DA").padEnd(2, "A");
}

type NewProject = { name: string; fileKey: string; fileName: string; pages: string[]; scan: ScanScope; folder: string };

/** Saves a project (a new one, or the one already made from this Figma file) with its scanned screens. */
export async function saveProject(p: NewProject, screens: Screen[]): Promise<string> {
  await requireRole("edit");
  const ics = getProject(DEFAULT_PROJECT);
  if (ics?.fileKey && ics.fileKey === p.fileKey) throw new Error("File Figma này là của ICS, đã có sẵn trong Hub.");
  const current = await readFile(LIST);
  const list: ProjectInfo[] = current ? JSON.parse(current.text) : [];
  const old = list.find((x) => x.fileKey === p.fileKey && x.slug !== DEFAULT_PROJECT);
  const slug = old?.slug ?? (await slugFor(p.name));
  const folder = await checkFolder(p.folder || slug, slug);
  await ensureFolder(folder, p.name);
  await writeScreens(slug, p.name, screens);
  const { docsDir: _old, ...rest } = old ?? ({} as Partial<ProjectInfo>);
  void _old;
  // no project code to type: the prefix most frames already carry, else the initials of the name (Chat threads, proposals)
  const code = rest.code ?? codeOf(p.name, screens);
  const next = [...list.filter((x) => x.slug !== slug), { ...rest, ...p, code, folder, slug, count: screens.length, scannedAt: new Date().toISOString() }];
  // this commit runs requirements-du-an.yml: the code system of the project is built from its folder
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

/** Points the project at another folder under projects/ (created from the template when new). */
export async function setFolder(slug: string, folder: string): Promise<FolderInfo> {
  await requireRole("edit");
  const f = await checkFolder(folder, slug);
  const p = (await listProjects()).find((x) => x.slug === slug);
  if (!p) throw new Error("Không thấy dự án.");
  await ensureFolder(f, p.name);
  const next = await patchProject(slug, { folder: f, docsDir: undefined }, `Dự án ${p.name}: thư mục projects/${f}`);
  await primeLive(next, true).catch(() => undefined);
  return (await projectFolders()).find((x) => x.name === f) ?? { name: f, files: 0, built: false, used: p.name };
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
