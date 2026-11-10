"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { ChevronLeft, FolderPlus, Loader2, ScanSearch, Trash2 } from "lucide-react";

import { withBase } from "@/lib/base-path";
import { switchProject } from "@/lib/qc/project-actions";

import { deleteProject, type FolderInfo, type Outline, projectFolders, type ProjectInfo, readFigmaFile, saveProject, type Screen, scanFigmaFile, slugFor } from "./actions";
import { FolderPicker } from "./folder-picker";

/**
 * Projects page: ICS is built in; other projects come from a Figma link + the folder of this repo that holds
 * their requirement Markdown → pick pages/sections → scan → screens with live renders. Saved in the repo
 * (docs/du-an, read by lib/projects.ts), shared by the whole team.
 */
type Project = { fileKey: string };

const btn = "flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium disabled:opacity-50";
const primary = `${btn} bg-(--hub-accent-strong) text-white hover:bg-(--hub-accent)`;
const ghost = `${btn} bg-(--hub-panel-2) hover:text-(--hub-accent)`;
const thumb = (p: Pick<Project, "fileKey">, s: Screen) => withBase(`/hub/node-anh?file=${p.fileKey}&node=${encodeURIComponent(s.id)}&scale=0.25`);

export function Projects({ ics, initial, canEdit }: { ics: { screens: number; clusters: number }; initial: ProjectInfo[]; canEdit: boolean }): React.JSX.Element {
  const router = useRouter();
  const [list, setList] = useState(initial);
  const [adding, setAdding] = useState(false);
  const [busy, start] = useTransition();

  if (adding) return <NewProject onCancel={() => setAdding(false)} onSaved={(slug) => router.push(`/hub/du-an/${slug}`)} />;

  return (
    <div className="space-y-4">
      {canEdit && (
        <div className="flex justify-end">
          <button type="button" className={primary} onClick={() => setAdding(true)}>
            <FolderPlus className="size-4" /> Dự án mới
          </button>
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <button type="button" disabled={busy} onClick={() => start(() => switchProject("ics"))} className="cursor-pointer rounded-2xl bg-(--hub-panel) p-5 text-left hover:bg-(--hub-panel-2)">
          <p className="text-lg font-semibold">ICS</p>
          <p className="mt-1 text-sm text-(--hub-muted)">
            {ics.screens} màn · {ics.clusters} cụm · đủ requirement, registry, code
          </p>
          <p className="mt-3 text-xs text-(--hub-green)">● Đang chạy tự động</p>
        </button>
        {list.map((p) => (
          <div key={p.slug} className="relative cursor-pointer rounded-2xl bg-(--hub-panel) p-5 hover:bg-(--hub-panel-2)">
            <Link href={`/hub/du-an/${p.slug}`} className="block">
              <p className="text-lg font-semibold">{p.name}</p>
              <p className="mt-1 text-sm text-(--hub-muted)">
                {p.count} màn · file “{p.fileName}”
              </p>
              <p className="mt-1 truncate font-mono text-xs text-(--hub-muted)">docs: projects/{p.folder ?? p.docsDir?.split("/")[1] ?? p.slug}/requirements</p>
              <p className="mt-3 text-xs text-(--hub-faint)">Quét lúc {new Date(p.scannedAt).toLocaleString("vi-VN")}</p>
            </Link>
            {canEdit && <button
              type="button"
              aria-label="Bỏ dự án"
              disabled={busy}
              className="absolute top-4 right-4 text-(--hub-faint) hover:text-(--hub-red)"
              onClick={() =>
                confirm(`Bỏ dự án “${p.name}” khỏi danh sách? Dữ liệu Hub của dự án (lần quét, đề xuất mã, mốc đồng bộ, tag) bị xoá; thư mục docs được giữ.`) &&
                start(async () => {
                  await deleteProject(p.slug);
                  setList(list.filter((x) => x.slug !== p.slug));
                })
              }
            >
              <Trash2 className="size-4" />
            </button>}
          </div>
        ))}
      </div>
    </div>
  );
}

function NewProject({ onCancel, onSaved }: { onCancel: () => void; onSaved: (slug: string) => void }): React.JSX.Element {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [folder, setFolder] = useState("");
  const [folders, setFolders] = useState<FolderInfo[]>([]);
  useEffect(() => {
    projectFolders().then(setFolders, () => setFolders([]));
  }, []);
  const [outline, setOutline] = useState<Outline | null>(null);
  const [pages, setPages] = useState<Set<string>>(new Set());
  const [sections, setSections] = useState<Set<string>>(new Set());
  const [onlyCoded, setOnlyCoded] = useState(true);
  const [screens, setScreens] = useState<Screen[] | null>(null);
  const [error, setError] = useState("");
  const [busy, start] = useTransition();
  const run = (fn: () => Promise<void>) =>
    start(async () => {
      setError("");
      try {
        await fn();
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      }
    });
  const toggle = (set: Set<string>, id: string, apply: (s: Set<string>) => void) => {
    const next = new Set(set);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    apply(next);
  };
  const step = screens ? 3 : outline ? 2 : 1;

  return (
    <div className="space-y-4">
      <button type="button" className={ghost} onClick={onCancel}>
        <ChevronLeft className="size-4" /> Danh sách dự án
      </button>
      <ol className="flex gap-2 text-xs">
        {["Link Figma", "Chọn phần cần quét", "Kết quả"].map((t, i) => (
          <li key={t} className={`rounded-full px-3 py-1 ${step === i + 1 ? "bg-(--hub-accent-strong) text-white" : "bg-(--hub-panel-2) text-(--hub-muted)"}`}>
            {i + 1}. {t}
          </li>
        ))}
      </ol>

      <section className="space-y-3 rounded-3xl bg-(--hub-panel) p-5">
        <div className="grid gap-3 md:grid-cols-[1fr_2fr_auto]">
          <div className="flex gap-2">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên dự án" className="min-w-0 flex-1 rounded-xl border border-(--hub-line) bg-(--hub-panel-2) px-4 py-2.5 text-sm outline-none focus:border-(--hub-accent)" />
          </div>
          <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link file Figma: https://www.figma.com/design/…" className="rounded-xl border border-(--hub-line) bg-(--hub-panel-2) px-4 py-2.5 text-sm outline-none focus:border-(--hub-accent)" />
          <button
            type="button"
            className={primary}
            disabled={busy || !link}
            onClick={() =>
              run(async () => {
                const o = await readFigmaFile(link);
                setOutline(o);
                setScreens(null);
                setPages(new Set());
                setSections(new Set());
                if (!name) setName(o.name);
                if (!folder) {
                  // a free folder named like the project, else a new one with its slug
                  const slug = await slugFor(name || o.name);
                  setFolder(folders.find((f) => f.name === slug && !f.used)?.name ?? slug);
                }
              })
            }
          >
            {busy && !outline ? <Loader2 className="size-4 animate-spin" /> : null} Đọc file
          </button>
        </div>
        <FolderPicker folders={folders} value={folder} onChange={setFolder} />
        {error && <p className="text-sm text-(--hub-red)">{error}</p>}
      </section>

      {outline && (
        <section className="rounded-3xl bg-(--hub-panel) p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <p className="font-semibold">File “{outline.name}” · tick trang (cả trang) hoặc từng Section</p>
            <label className="flex items-center gap-2 text-sm text-(--hub-muted)">
              <input type="checkbox" checked={onlyCoded} onChange={(e) => setOnlyCoded(e.target.checked)} /> Chỉ frame có mã ở đầu tên
            </label>
          </div>
          <ul className="hub-scroll max-h-[46vh] space-y-1 overflow-y-auto text-sm">
            {outline.pages.map((p) => (
              <li key={p.id}>
                <label className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-(--hub-panel-2)">
                  <input type="checkbox" checked={pages.has(p.id)} onChange={() => toggle(pages, p.id, setPages)} />
                  <span className="font-medium">{p.name}</span>
                  <span className="text-xs text-(--hub-faint)">{p.frames + p.sections.reduce((k, s) => k + s.frames, 0)} frame</span>
                </label>
                {!pages.has(p.id) &&
                  p.sections.map((s) => (
                    <label key={s.id} className="ml-7 flex items-center gap-2 rounded-lg px-2 py-1 text-(--hub-muted) hover:bg-(--hub-panel-2)">
                      <input type="checkbox" checked={sections.has(s.id)} onChange={() => toggle(sections, s.id, setSections)} />
                      {s.name} <span className="text-xs text-(--hub-faint)">{s.frames} frame</span>
                    </label>
                  ))}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className={primary}
              disabled={busy || (!pages.size && !sections.size)}
              onClick={() => run(async () => setScreens(await scanFigmaFile(outline.fileKey, [...pages], [...sections], onlyCoded)))}
            >
              {busy ? <Loader2 className="size-4 animate-spin" /> : <ScanSearch className="size-4" />} Quét
            </button>
          </div>
        </section>
      )}

      {outline && screens && (
        <section className="rounded-3xl bg-(--hub-panel) p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="font-semibold">Tìm thấy {screens.length} màn</p>
            <button
              type="button"
              className={primary}
              disabled={busy || !screens.length}
              onClick={() =>
                run(async () => {
                  const picked = outline.pages.filter((p) => pages.has(p.id) || p.sections.some((x) => sections.has(x.id))).map((p) => p.name);
                  onSaved(
                    await saveProject(
                      {
                        name: name || outline.name,
                        fileKey: outline.fileKey,
                        fileName: outline.name,
                        pages: picked,
                        scan: { pageIds: [...pages], sectionIds: [...sections], onlyCoded },
                        folder: folder.trim(),
                      },
                      screens,
                    ),
                  );
                })
              }
            >
              {busy ? <Loader2 className="size-4 animate-spin" /> : null} Lưu dự án
            </button>
          </div>
          <Grid project={{ fileKey: outline.fileKey }} screens={screens.slice(0, 24)} />
          {screens.length > 24 && <p className="mt-3 text-xs text-(--hub-faint)">… và {screens.length - 24} màn nữa (xem đủ sau khi lưu)</p>}
        </section>
      )}
    </div>
  );
}

export function Grid({ project, screens }: { project: Pick<Project, "fileKey">; screens: Screen[] }): React.JSX.Element {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {screens.map((s) => (
        <a key={s.id} href={`https://www.figma.com/design/${project.fileKey}/?node-id=${s.id.replace(":", "-")}`} target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl bg-(--hub-panel-2) hover:bg-(--hub-panel-3)">
          <span className="relative block aspect-[16/10] bg-(--hub-panel-3)">
            <span className="absolute inset-0 grid place-items-center text-xs text-(--hub-faint)">Đang tải ảnh Figma…</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumb(project, s)} alt={s.name} loading="lazy" className="relative h-full w-full object-cover object-top" />
          </span>
          <span className="block p-3">
            <span className="block font-mono text-[12px] text-(--hub-accent)">{s.code ?? "—"}</span>
            <span className="mt-0.5 line-clamp-2 block text-xs text-(--hub-muted)">{s.name.replace(/^\S+\s*[—–-]\s*/, "")}</span>
            <span className="mt-1 block text-[11px] text-(--hub-faint)">
              {s.kind} · {s.section ?? s.page}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
