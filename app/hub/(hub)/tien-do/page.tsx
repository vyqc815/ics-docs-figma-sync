import Link from "next/link";

import { PageHead, Panel, Tag } from "@/components/qc/ui";
import { frames } from "@/lib/qc/data";
import { PROGRESS, PROGRESS_LABEL, readJson, type Progress } from "@/lib/qc/store";

export const dynamic = "force-dynamic";

const time = (iso: string): string => new Date(iso).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", dateStyle: "short", timeStyle: "short" });

/** Developers' own progress per screen (marked on each screen's page), grouped by developer; ?dev= one person. */
const ProgressPage = async ({ searchParams }: { searchParams: Promise<{ dev?: string }> }): Promise<React.JSX.Element> => {
  const { dev = "" } = await searchParams;
  const progress = await readJson<Progress>(PROGRESS, {}).catch((): Progress => ({}));
  const all = frames();
  const total = Object.keys(all).filter((c) => !c.endsWith("-DK")).length;
  const byDev = new Map<string, { code: string; s: "dang" | "xong"; at: string }[]>();
  for (const [code, row] of Object.entries(progress)) for (const [name, p] of Object.entries(row)) byDev.set(name, [...(byDev.get(name) ?? []), { code, ...p }]);
  const done = new Set(Object.entries(progress).filter(([, row]) => Object.values(row).some((p) => p.s === "xong")).map(([c]) => c));
  const devs = [...byDev].filter(([name]) => !dev || name === dev).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <>
      <PageHead
        back={dev ? "/hub/tien-do" : undefined}
        title={dev ? `Tiến độ · ${dev}` : "Tiến độ dev"}
        sub={`${done.size}/${total} màn có người làm xong · mỗi dev tự đánh dấu ở trang màn (Đang làm / Xong)`}
      />
      {!devs.length && <Panel>Chưa ai đánh dấu tiến độ.</Panel>}
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
