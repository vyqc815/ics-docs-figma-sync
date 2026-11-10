"use client";

import { useMemo, useState, useTransition } from "react";
import { Download, Loader2, Save, Send } from "lucide-react";

import { type Proposal, type ProposalRow, saveProposal, sendToDesign } from "../../actions";
import { withBase } from "@/lib/base-path";

const CODE = /[A-Z]{2,4}(?:-[A-Z0-9]{1,4})+-\d{6}(?:-DK)?/g;

/**
 * Proposal table: thumbnail, current name, kind, proposed code (editable), parent screen (pick among the
 * suggestions), confidence. "Lưu" commits the decisions; "Gửi cho design" posts the summary to Chat.
 */
export function Review({ slug, initial, sha: firstSha }: { slug: string; initial: Proposal; sha: string }): React.JSX.Element {
  const [rows, setRows] = useState<ProposalRow[]>(initial.frames);
  const [sha, setSha] = useState(firstSha);
  const [only, setOnly] = useState(true);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [dirty, setDirty] = useState(false);
  const [busy, start] = useTransition();
  const todo = rows.filter((r) => r.mucTin === "cần xem" && !r.duyet).length;
  const shown = useMemo(() => (only && todo ? rows.filter((r) => r.mucTin === "cần xem") : rows), [rows, only, todo]);
  const edit = (id: string, patch: Partial<ProposalRow>) => {
    setRows((rs) => rs.map((r) => (r.nodeId === id ? { ...r, ...patch, tenMoi: `${patch.maDeXuat ?? r.maDeXuat} — ${r.tenHienTai}` } : r)));
    setDirty(true);
  };
  const act = (fn: () => Promise<string>) =>
    start(async () => {
      try {
        setMsg({ ok: true, text: await fn() });
      } catch (e) {
        setMsg({ ok: false, text: e instanceof Error ? e.message : String(e) });
      }
    });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <p className="mr-auto text-sm text-(--hub-muted)">
          {todo ? <span className="text-(--hub-amber)">{todo} chỗ cần xem</span> : <span className="text-(--hub-green)">Đã duyệt hết</span>} · {rows.length} frame
        </p>
        <label className="flex items-center gap-2 text-sm text-(--hub-muted)">
          <input type="checkbox" checked={only} onChange={(e) => setOnly(e.target.checked)} /> Chỉ hiện chỗ cần xem
        </label>
        <button
          type="button"
          disabled={busy || !dirty}
          onClick={() =>
            act(async () => {
              setSha(await saveProposal(slug, { ...initial, frames: rows }, sha));
              setDirty(false);
              return "Đã lưu. Hub dùng mã này ngay cho các màn chưa có mã trên Figma; design đổi tên frame xong thì bấm Quét lại Figma.";
            })
          }
          className="flex items-center gap-1.5 rounded-xl bg-(--hub-accent-strong) px-4 py-2.5 text-sm font-medium text-white hover:bg-(--hub-accent) disabled:opacity-50"
        >
          {busy ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />} Lưu
        </button>
        <a href={withBase(`/hub/du-an-csv/${slug}`)} className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-4 py-2.5 text-sm hover:text-(--hub-accent)">
          <Download className="size-4" /> Tải Excel
        </a>
        <button
          type="button"
          disabled={busy || dirty}
          title={dirty ? "Lưu trước khi gửi" : undefined}
          onClick={() =>
            act(async () => {
              const link = `${location.origin}/hub/du-an/${slug}/ma`;
              await sendToDesign(
                slug,
                `*[${initial.project}] Mã màn cho file “${initial.fileName}”* — ${rows.length} frame${todo ? `, còn ${todo} chỗ cần xem` : ", đã duyệt"}.\n` +
                  `Đổi tên frame theo cột “Tên mới” và bố trí theo hướng dẫn: ${link}\nTải Excel: ${location.origin}/hub/du-an-csv/${slug}`,
              );
              return "Đã gửi vào Google Chat (luồng design của dự án).";
            })
          }
          className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-4 py-2.5 text-sm hover:text-(--hub-accent) disabled:opacity-50"
        >
          <Send className="size-4" /> Gửi cho design
        </button>
      </div>
      {msg && <p className={`text-sm ${msg.ok ? "text-(--hub-green)" : "text-(--hub-red)"}`}>{msg.text}</p>}

      <div className="hub-scroll overflow-x-auto rounded-3xl bg-(--hub-panel) p-4">
        <table className="w-full min-w-[980px] text-[13px]">
          <thead className="text-left text-(--hub-faint)">
            <tr>
              <th className="py-2 pr-3 font-medium">Frame</th>
              <th className="py-2 pr-3 font-medium">Loại</th>
              <th className="py-2 pr-3 font-medium">Mã đề xuất</th>
              <th className="py-2 pr-3 font-medium">Màn gốc</th>
              <th className="py-2 font-medium">Mức tin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-(--hub-line)/60">
            {shown.map((r) => {
              const options = [...new Set([r.manGoc, ...(r.goiYKhac.match(CODE) ?? [])].filter(Boolean))];
              return (
                <tr key={r.nodeId} className="align-top">
                  <td className="py-2.5 pr-3">
                    <a href={r.link} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-(--hub-accent)">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={withBase(`/hub/node-anh?file=${initial.fileKey}&node=${encodeURIComponent(r.nodeId)}&scale=0.25`)} alt="" loading="lazy" className="h-16 w-28 shrink-0 rounded-lg bg-(--hub-panel-3) object-cover object-top" />
                      <span className="min-w-0">
                        <span className="line-clamp-2">{r.tenHienTai}</span>
                        <span className="text-[11px] text-(--hub-faint)">{r.section || r.page}</span>
                      </span>
                    </a>
                  </td>
                  <td className="py-2.5 pr-3 whitespace-nowrap">{r.loai}</td>
                  <td className="py-2.5 pr-3">
                    <input
                      value={r.maDeXuat}
                      onChange={(e) => edit(r.nodeId, { maDeXuat: e.target.value.toUpperCase() })}
                      className="w-44 rounded-lg border border-(--hub-line) bg-(--hub-panel-2) px-2 py-1 font-mono text-[12px] outline-none focus:border-(--hub-accent)"
                    />
                  </td>
                  <td className="py-2.5 pr-3">
                    {options.length > 0 ? (
                      <select
                        value={r.manGoc}
                        onChange={(e) => edit(r.nodeId, { manGoc: e.target.value, duyet: true })}
                        className="rounded-lg border border-(--hub-line) bg-(--hub-panel-2) px-2 py-1 font-mono text-[12px]"
                      >
                        {options.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-(--hub-faint)">—</span>
                    )}
                  </td>
                  <td className="py-2.5">
                    {r.mucTin === "cần xem" ? (
                      <label className="flex items-center gap-2 whitespace-nowrap">
                        <input type="checkbox" checked={!!r.duyet} onChange={(e) => edit(r.nodeId, { duyet: e.target.checked })} />
                        <span className={r.duyet ? "text-(--hub-green)" : "text-(--hub-amber)"}>{r.duyet ? "Đã duyệt" : "Cần xem"}</span>
                      </label>
                    ) : (
                      <span className="text-(--hub-green)">Chắc</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-(--hub-faint)">
        Design đổi tên từng frame thành “Mã — tên” (cột Tên mới trong file Excel) và xếp mỗi màn gốc cùng popup/trạng thái của nó vào một Section; bản tối hàng dưới.
        Hệ thống bám theo id frame nên đổi tên lúc nào cũng được, không lệch dữ liệu.
      </p>
    </div>
  );
}
