import Link from "next/link";

import { PageHead, Panel, Tag } from "@/components/qc/ui";
import { frames } from "@/lib/qc/data";
import { hubProject } from "@/lib/qc/project";
import { isLive, listProjects } from "@/lib/projects";
import { changesSince } from "@/lib/qc/dev-moc";
import { readFigmaLog, type FigmaLog } from "@/lib/qc/dong-bo";
import { PROGRESS, PROGRESS_LABEL, readJson, type Progress, type ProgressEntry } from "@/lib/qc/store";

export const dynamic = "force-dynamic";

const time = (iso: string): string => new Date(iso).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", dateStyle: "short", timeStyle: "short" });

/**
 * Developers' own progress per screen (marked on each screen's page), grouped by developer; ?dev= one person,
 * ?cap-nhat=1 only screens that changed after the developer marked them (lib/qc/dev-moc.ts).
 */
const ProgressPage = async ({ searchParams }: { searchParams: Promise<{ dev?: string; "cap-nhat"?: string }> }): Promise<React.JSX.Element> => {
  const { dev = "", "cap-nhat": onlyUpdated } = await searchParams;
  const project = await hubProject();
  const [allProgress, log] = await Promise.all([
    readJson<Progress>(PROGRESS, {}).catch((): Progress => ({})),
    readFigmaLog().catch((): FigmaLog => ({})),
  ]);
  const all = frames();
  // one progress file for every project: keep this project's screens (ICS: all but the codes of hub-added projects)
  const others = listProjects().filter((p) => isLive(p)).map((p) => `${p.code}-`);
  const mine = (code: string): boolean => !!all[code.replace(/-DK$/, "")] || (!isLive(project) && !others.some((o) => code.startsWith(o)));
  const progress = Object.fromEntries(Object.entries(allProgress).filter(([code]) => mine(code))) as Progress;
  const total = Object.keys(all).filter((c) => !c.endsWith("-DK")).length;
  const byDev = new Map<string, (ProgressEntry & { code: string; updated: boolean })[]>();
  for (const [code, row] of Object.entries(progress))
    for (const [name, p] of Object.entries(row)) {
      const updated = !!changesSince(code, p, log);
      if (!onlyUpdated || updated) byDev.set(name, [...(byDev.get(name) ?? []), { code, ...p, updated }]);
    }
  const done = new Set(Object.entries(progress).filter(([, row]) => Object.values(row).some((p) => p.s === "xong")).map(([c]) => c));
  const devs = [...byDev].filter(([name]) => !dev || name === dev).sort((a, b) => a[0].localeCompare(b[0]));
  const filter = (on: boolean): string => `/hub/tien-do?${new URLSearchParams({ ...(dev ? { dev } : {}), ...(on ? { "cap-nhat": "1" } : {}) })}`;

  return (
    <>
      <PageHead
        back={dev ? "/hub/tien-do" : undefined}
        title={dev ? `Tiến độ · ${dev}` : "Tiến độ dev"}
        sub={`${done.size}/${total} màn có người làm xong · mỗi dev tự đánh dấu ở trang màn (Đang làm / Xong)`}
      >
        <div className="flex gap-1 rounded-xl bg-(--hub-panel) p-1 text-xs">
          {[false, true].map((on) => (
            <Link
              key={String(on)}
              href={filter(on)}
              className={`rounded-lg px-2.5 py-1 ${!!onlyUpdated === on ? "bg-(--hub-accent-strong) text-white" : "text-(--hub-muted) hover:text-(--hub-text)"}`}
            >
              {on ? "Có cập nhật sau khi code" : "Tất cả"}
            </Link>
          ))}
        </div>
      </PageHead>
      {!devs.length && <Panel>{onlyUpdated ? "Không màn nào đổi sau khi dev đánh dấu." : "Chưa ai đánh dấu tiến độ."}</Panel>}
      <div className="space-y-4">
        {devs.map(([name, rows]) => (
          <Panel
            key={name}
            title={
              <Link href={`/hub/tien-do?dev=${encodeURIComponent(name)}`} className="hover:text-(--hub-accent)">
                {name} · {rows.filter((r) => r.s === "xong").length} xong, {rows.filter((r) => r.s === "dang").length} đang làm
              </Link>
            }
          >
            <ul className="divide-y divide-(--hub-line)/60 text-[13px]">
              {rows
                .sort((a, b) => b.at.localeCompare(a.at))
                .slice(0, dev ? undefined : 8)
                .map((r) => (
                  <li key={r.code}>
                    <Link href={`/hub/man/${r.code}`} className="flex items-center gap-3 py-2 hover:text-(--hub-accent)">
                      <span className="w-[150px] shrink-0 font-mono text-(--hub-accent)">{r.code}</span>
                      <span className="min-w-0 flex-1 truncate">{all[r.code]?.title ?? ""}</span>
                      <span className="text-xs text-(--hub-faint)">{time(r.at)}</span>
                      {r.updated && <Tag tone="red">Có cập nhật</Tag>}
                      <Tag tone={r.s === "xong" ? "green" : "amber"}>{PROGRESS_LABEL[r.s]}</Tag>
                    </Link>
                  </li>
                ))}
            </ul>
          </Panel>
        ))}
      </div>
    </>
  );
};

export default ProgressPage;
