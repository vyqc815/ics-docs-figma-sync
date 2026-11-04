"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { Loader2, Wand2 } from "lucide-react";

import { type ProjectInfo, type Screen, startProposal } from "../actions";
import { Grid } from "../projects";

type Summary = { running: boolean; lastRun: string | null; total: number; review: number; codes: Record<string, string> };

/** A project's screens with their proposed codes, and the "Đề xuất mã" action. */
export function ProjectView({ project, screens, proposal }: { project: ProjectInfo; screens: Screen[]; proposal: Summary }): React.JSX.Element {
  const router = useRouter();
  const [kind, setKind] = useState("Tất cả");
  const [q, setQ] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, start] = useTransition();
  // a screen without a code in Figma shows the proposed one
  const withCodes = useMemo(() => screens.map((s) => ({ ...s, code: s.code ?? proposal.codes[s.id] ?? null })), [screens, proposal]);
  const kinds = useMemo(() => ["Tất cả", ...new Set(withCodes.map((s) => s.kind))], [withCodes]);
  const shown = withCodes.filter((s) => (kind === "Tất cả" || s.kind === kind) && (!q || `${s.code} ${s.name}`.toLowerCase().includes(q.toLowerCase())));
  const uncoded = screens.filter((s) => !s.code).length;

  return (
    <div className="space-y-5">
      <section className="flex flex-wrap items-center gap-3 rounded-3xl bg-(--hub-panel) p-5">
        <div className="min-w-0 flex-1">
          <p className="font-semibold">Mã màn</p>
          <p className="mt-1 text-sm text-(--hub-muted)">
            {proposal.running
              ? "Đang đề xuất mã… (vài phút, tải lại trang để xem)"
              : proposal.total
                ? `Đã đề xuất ${proposal.total} mã · ${proposal.review} chỗ cần design xem`
                : uncoded
                  ? `${uncoded}/${screens.length} màn chưa có mã trên Figma`
                  : "Mọi màn đã có mã trên Figma"}
          </p>
          {msg && <p className="mt-1 text-sm text-(--hub-green)">{msg}</p>}
        </div>
        {proposal.total > 0 && (
          <Link href={`/hub/du-an/${project.slug}/ma`} className="rounded-xl bg-(--hub-accent-strong) px-4 py-2.5 text-sm font-medium text-white hover:bg-(--hub-accent)">
            Duyệt mã & gửi design
          </Link>
        )}
        <button
          type="button"
          disabled={busy || proposal.running}
          onClick={() =>
            start(async () => {
              await startProposal(project.slug);
              setMsg("Đã bắt đầu. Khoảng vài phút nữa có kết quả, Chat sẽ báo ở luồng design.");
              setTimeout(() => router.refresh(), 4000);
            })
          }
          className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-4 py-2.5 text-sm hover:text-(--hub-accent) disabled:opacity-50"
        >
          {busy || proposal.running ? <Loader2 className="size-4 animate-spin" /> : <Wand2 className="size-4" />}
          {proposal.total ? "Đề xuất lại" : "Đề xuất mã"}
        </button>
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
