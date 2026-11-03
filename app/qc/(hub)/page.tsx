import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ClusterGrid } from "@/components/qc/cluster-grid";
import { PageHead, Panel, SearchBox, Stat, Tag } from "@/components/qc/ui";
import { clusters, frames, registry, requirementFiles, reserved, search, stats, unmappedPages } from "@/lib/qc/data";

const KIND_TONE = { "màn": "violet", "cụm": "gray", "item": "green", "yêu cầu": "amber", testcase: "red" } as const;

/** Overview: totals, search across every code, and the clusters. */
const Overview = async ({ searchParams }: { searchParams: Promise<{ q?: string }> }): Promise<React.JSX.Element> => {
  const { q = "" } = await searchParams;
  const all = clusters().map((c) => stats(registry(c.name)!));
  const sum = (k: keyof (typeof all)[number]) => all.reduce((n, s) => n + s[k], 0);
  const items = sum("items");
  const matched = sum("matched");
  const files = requirementFiles().length;
  const hits = q ? search(q) : [];

  return (
    <>
      <PageHead title="Tổng quan" sub="Mọi màn Figma, requirement QC và testcase nối bằng cùng một mã · cập nhật tự động từ main">
        <SearchBox defaultValue={q} placeholder="Tìm mã màn, item (A03.07), REQ, testcase, tên màn…" />
      </PageHead>

      {q && (
        <Panel title={`Kết quả cho “${q}”`} action={<span className="text-sm text-(--qc-muted)">{hits.length} kết quả</span>} className="mb-6">
          {hits.length === 0 ? (
            <p className="text-sm text-(--qc-muted)">Không thấy. Thử mã ngắn hơn, ví dụ “040200” hoặc “REQ02”.</p>
          ) : (
            <ul className="divide-y divide-(--qc-line)/60">
              {hits.map((h) => (
                <li key={`${h.kind}-${h.code}-${h.href}`}>
                  <Link href={h.href} className="flex items-center gap-3 py-2.5 hover:text-(--qc-accent)">
                    <Tag tone={KIND_TONE[h.kind]}>{h.kind}</Tag>
                    <span className="font-mono text-[13px] text-(--qc-accent)">{h.code}</span>
                    <span className="min-w-0 flex-1 truncate">{h.title}</span>
                    {h.sub && <span className="hidden truncate text-xs text-(--qc-faint) md:block md:max-w-[35%]">{h.sub}</span>}
                    <ArrowUpRight className="size-4 shrink-0 text-(--qc-faint)" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      )}

      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        <Stat label="Cụm màn" value={clusters().length} />
        <Stat label="Frame Figma" value={Object.keys(frames()).length} hint={`${Object.keys(reserved()).length} mã dự kiến`} />
        <Stat label="File requirement" value={<Link href="/qc/requirement" className="hover:text-(--qc-accent)">{files}</Link>} />
        <Stat label="Item requirement" value={items} hint={`${Math.round((matched / Math.max(items, 1)) * 100)}% thấy trên Figma`} tone="green" />
        <Stat label="Testcase" value={sum("testcases")} />
        <Stat label="Trang chưa gắn mã" value={unmappedPages().length} tone="amber" hint={<Link href="/qc/chua-gan-ma" className="hover:text-(--qc-accent)">Xem danh sách →</Link>} />
      </div>

      <Panel title="Cụm có requirement" action={<Link href="/qc/cum" className="text-sm text-(--qc-accent)">Tất cả cụm →</Link>}>
        <ClusterGrid onlyWithRequirement />
      </Panel>
    </>
  );
};

export default Overview;
