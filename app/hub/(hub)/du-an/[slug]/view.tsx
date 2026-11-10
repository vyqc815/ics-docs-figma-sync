"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { FolderOpen, Loader2, RefreshCw, ScanSearch, SquareArrowOutUpRight, Wand2 } from "lucide-react";

import { refreshProject, switchProject } from "@/lib/qc/project-actions";

import { type ProjectInfo, rescanProject, type Screen, setDocsDir, startProposal } from "../actions";
import { Grid } from "../projects";

type Summary = { running: boolean; lastRun: string | null; total: number; review: number; codes: Record<string, string> };

/** A project's screens with their proposed codes: open it in the hub, scan Figma again, its docs folder, "Đề xuất mã". */
export function ProjectView({
  project,
  docsDir,
  canEdit,
  screens,
  proposal,
}: {
  project: ProjectInfo;
  docsDir: string;
  canEdit: boolean;
  screens: Screen[];
  proposal: Summary;
}): React.JSX.Element {
  const router = useRouter();
  const [kind, setKind] = useState("Tất cả");
  const [q, setQ] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [dir, setDir] = useState(docsDir);
  const [busy, start] = useTransition();
  const act = (fn: () => Promise<string>) =>
    start(async () => {
      setMsg(null);
      try {
        setMsg({ ok: true, text: await fn() });
        router.refresh();
      } catch (e) {
        setMsg({ ok: false, text: e instanceof Error ? e.message : String(e) });
      }
    });
  // a screen without a code in Figma shows the proposed one
  const withCodes = useMemo(() => screens.map((s) => ({ ...s, code: s.code ?? proposal.codes[s.id] ?? null })), [screens, proposal]);
  const kinds = useMemo(() => ["Tất cả", ...new Set(withCodes.map((s) => s.kind))], [withCodes]);
  const shown = withCodes.filter((s) => (kind === "Tất cả" || s.kind === kind) && (!q || `${s.code} ${s.name}`.toLowerCase().includes(q.toLowerCase())));
  const uncoded = screens.filter((s) => !s.code).length;

  return (
    <div className="space-y-5">
      <section className="flex flex-wrap items-center gap-3 rounded-3xl bg-(--hub-panel) p-5">
        <div className="min-w-0 flex-1">
          <p className="font-semibold">Xem trong Hub</p>
          <p className="mt-1 text-sm text-(--hub-muted)">
            Tổng quan, requirement, màn hình của dự án này: requirement là các file .md trong <span className="font-mono">{docsDir}</span> (nhánh main), màn từ lần quét Figma.
          </p>
          {msg && <p className={`mt-1 text-sm ${msg.ok ? "text-(--hub-green)" : "text-(--hub-red)"}`}>{msg.text}</p>}
        </div>
        <button
          type="button"
          disabled={busy}
          onClick={() => act(async () => (await refreshProject(project.slug), "Đã đọc lại docs và mã màn."))}
          className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-4 py-2.5 text-sm hover:text-(--hub-accent) disabled:opacity-50"
          title="Đọc lại file .md trong thư mục docs và mã đề xuất ngay, không chờ vài phút"
        >
          <RefreshCw className="size-4" /> Đọc lại docs
        </button>
        {canEdit && (
          <button
            type="button"
            disabled={busy}
            onClick={() => act(async () => `Đã quét lại: ${await rescanProject(project.slug)} màn.`)}
            className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-4 py-2.5 text-sm hover:text-(--hub-accent) disabled:opacity-50"
            title="Quét lại file Figma (cùng các trang/Section đã chọn lúc thêm dự án): lấy frame mới, tên và mã mới"
          >
            {busy ? <Loader2 className="size-4 animate-spin" /> : <ScanSearch className="size-4" />} Quét lại Figma
          </button>
        )}
        <button
          type="button"
          disabled={busy}
          onClick={() => start(() => switchProject(project.slug))}
          className="flex items-center gap-1.5 rounded-xl bg-(--hub-accent-strong) px-4 py-2.5 text-sm font-medium text-white hover:bg-(--hub-accent) disabled:opacity-50"
        >
          <SquareArrowOutUpRight className="size-4" /> Mở trong Hub
        </button>
      </section>
      {canEdit && (
        <section className="flex flex-wrap items-center gap-3 rounded-3xl bg-(--hub-panel) p-5">
          <p className="font-semibold">Thư mục docs</p>
          <input
            value={dir}
            onChange={(e) => setDir(e.target.value)}
            className="min-w-64 flex-1 rounded-xl border border-(--hub-line) bg-(--hub-panel-2) px-4 py-2.5 font-mono text-sm outline-none focus:border-(--hub-accent)"
          />
          <button
            type="button"
            disabled={busy || !dir.trim() || dir.trim() === docsDir}
            onClick={() =>
              act(async () => {
                const r = await setDocsDir(project.slug, dir);
                setDir(r.dir);
                return `Docs ở ${r.dir}: ${r.files} file .md.`;
              })
            }
            className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-4 py-2.5 text-sm hover:text-(--hub-accent) disabled:opacity-50"
          >
            <FolderOpen className="size-4" /> Đổi thư mục
          </button>
        </section>
      )}
      <section className="flex flex-wrap items-center gap-3 rounded-3xl bg-(--hub-panel) p-5">
        <div className="min-w-0 flex-1">
          <p className="font-semibold">Mã màn</p>
          <p className="mt-1 text-sm text-(--hub-muted)">
            {proposal.running
              ? "Đang đề xuất mã… (vài phút, tải lại trang để xem)"
              : proposal.total
                ? `Đã đề xuất ${proposal.total} mã · ${proposal.review} chỗ cần design xem · Hub dùng mã đề xuất cho màn chưa có mã trên Figma`
                : uncoded
                  ? `${uncoded}/${screens.length} màn chưa có mã trên Figma: chưa hiện trong Hub cho tới khi có mã (đặt trên Figma hoặc Đề xuất mã)`
                  : "Mọi màn đã có mã trên Figma"}
          </p>
        </div>
        {proposal.total > 0 && (
          <Link href={`/hub/du-an/${project.slug}/ma`} className="rounded-xl bg-(--hub-accent-strong) px-4 py-2.5 text-sm font-medium text-white hover:bg-(--hub-accent)">
            Duyệt mã & gửi design
          </Link>
        )}
        {canEdit && <button
          type="button"
          disabled={busy || proposal.running}
          onClick={() =>
            act(async () => {
              await startProposal(project.slug);
              setTimeout(() => router.refresh(), 4000);
              return "Đã bắt đầu đề xuất mã. Khoảng vài phút nữa có kết quả, Chat sẽ báo ở luồng design.";
            })
          }
          className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-4 py-2.5 text-sm hover:text-(--hub-accent) disabled:opacity-50"
        >
          {busy || proposal.running ? <Loader2 className="size-4 animate-spin" /> : <Wand2 className="size-4" />}
          {proposal.total ? "Đề xuất lại" : "Đề xuất mã"}
        </button>}
      </section>

      <div className="flex flex-wrap items-center gap-2">
        {kinds.map((k) => (
          <button key={k} type="button" onClick={() => setKind(k)} className={`rounded-full px-3 py-1 text-xs ${k === kind ? "bg-(--hub-accent-strong) text-white" : "bg-(--hub-panel-2) text-(--hub-muted)"}`}>
            {k}
          </button>
        ))}
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Lọc mã hoặc tên…" className="ml-auto w-64 rounded-xl border border-(--hub-line) bg-(--hub-panel) px-4 py-2 text-sm outline-none focus:border-(--hub-accent)" />
      </div>
      <Grid project={project} screens={shown} />
    </div>
  );
}
