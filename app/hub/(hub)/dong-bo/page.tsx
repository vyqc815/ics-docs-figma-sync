import Link from "next/link";

import { PageHead, Panel, Tag } from "@/components/qc/ui";
import { can, session } from "@/lib/qc/auth";
import { STATES, syncRows, type State } from "@/lib/qc/dong-bo";
import { clusterOfFile } from "@/lib/qc/data";

import { markAllUnmarked, markSynced } from "./actions";

export const dynamic = "force-dynamic";

const time = (iso: string): string => new Date(iso).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", dateStyle: "short", timeStyle: "short" });

/** Requirement ↔ Figma per file: changed since the last "đã đồng bộ" mark, which screens changed and how. */
const SyncPage = async ({ searchParams }: { searchParams: Promise<{ tt?: string }> }): Promise<React.JSX.Element> => {
  const { tt = "" } = await searchParams;
  const me = await session();
  let rows: Awaited<ReturnType<typeof syncRows>>;
  try {
    rows = await syncRows();
  } catch (e) {
    return (
      <>
        <PageHead title="Đồng bộ" />
        <Panel>Không đọc được dữ liệu đồng bộ: {(e as Error).message}</Panel>
      </>
    );
  }
  const counts = Object.fromEntries(Object.keys(STATES).map((k) => [k, rows.filter((r) => r.state === k).length])) as Record<State, number>;
  const order: State[] = ["do", "lam", "cam", "chua", "xanh"];
  const list = rows.filter((r) => !tt || r.state === tt).sort((a, b) => order.indexOf(a.state) - order.indexOf(b.state) || a.file.localeCompare(b.file));

  return (
    <>
      <PageHead
        title="Đồng bộ"
        sub="Requirement và màn Figma của nó có còn khớp kể từ lần ai đó so và bấm “Đã đồng bộ”. Figma được quét mỗi giờ (7h–19h, thứ 2–7)."
      >
        {can(me, "admin") && counts.chua > 0 && (
          <form action={markAllUnmarked}>
            <button className="rounded-xl bg-(--hub-panel-2) px-4 py-2 text-sm hover:text-(--hub-accent)">Đặt mốc cho {counts.chua} file chưa có mốc</button>
          </form>
        )}
      </PageHead>
      <div className="mb-5 flex flex-wrap gap-1.5">
        <Link href="/hub/dong-bo" className={`rounded-full px-3 py-1 text-xs ${!tt ? "bg-(--hub-accent-strong) text-white" : "bg-(--hub-panel-2) text-(--hub-muted)"}`}>
          Tất cả {rows.length}
        </Link>
        {order.map((k) => (
          <Link
            key={k}
            href={`/hub/dong-bo?tt=${k}`}
            className={`rounded-full px-3 py-1 text-xs ${tt === k ? "bg-(--hub-accent-strong) text-white" : "bg-(--hub-panel-2) text-(--hub-muted) hover:text-(--hub-text)"}`}
          >
            {STATES[k].icon} {STATES[k].label} {counts[k]}
          </Link>
        ))}
      </div>
      <Panel>
        <ul className="divide-y divide-(--hub-line)/60 text-[13px]">
          {list.map((r) => {
            const cluster = clusterOfFile(r.file);
            const href = cluster ? `/hub/cum/${cluster}?tab=requirement&file=${encodeURIComponent(r.file)}` : `/hub/requirement/xem?f=${encodeURIComponent(r.file)}`;
            const s = STATES[r.state];
            return (
              <li key={r.file} className="py-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span title={s.label}>{s.icon}</span>
                  <Link href={href} className="w-[80px] shrink-0 font-mono text-(--hub-accent) hover:underline">
                    {r.prefix || "—"}
                  </Link>
                  <Link href={href} className="min-w-0 flex-1 truncate hover:text-(--hub-accent)">
                    {r.title}
                  </Link>
                  {r.state !== "xanh" && r.state !== "chua" && <Tag tone={s.tone}>{s.label}</Tag>}
                  <span className="hidden text-xs text-(--hub-faint) md:block">{r.mark ? `Mốc ${time(r.mark.at)} · ${r.mark.by}` : "Chưa có mốc"}</span>
                  {can(me, "edit") && r.state !== "xanh" && (
                    <form action={markSynced}>
                      <input type="hidden" name="file" value={r.file} />
                      <input type="hidden" name="q" value={tt ? `tt=${tt}` : ""} />
                      <button className="rounded-lg bg-(--hub-panel-2) px-3 py-1 text-xs hover:text-(--hub-green)">Đã đồng bộ</button>
                    </form>
                  )}
                </div>
                {(r.changes.length > 0 || r.docsChanged) && (
                  <ul className="mt-1.5 ml-8 space-y-0.5 text-xs text-(--hub-muted)">
                    {r.docsChanged && <li>Requirement đã sửa sau mốc</li>}
                    {r.changes.slice(0, 4).map((c) => (
                      <li key={c.code + c.at}>
                        <Link href={`/hub/man/${c.code.replace(/-DK$/, "")}`} className="font-mono text-(--hub-accent) hover:underline">
                          {c.code}
                        </Link>{" "}
                        {c.what} · {time(c.at)}
                      </li>
                    ))}
                    {r.changes.length > 4 && <li>… và {r.changes.length - 4} lần đổi khác</li>}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </Panel>
    </>
  );
};

export default SyncPage;
