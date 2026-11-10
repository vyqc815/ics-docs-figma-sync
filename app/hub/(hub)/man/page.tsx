import Link from "next/link";

import { KindTag, PageHead, Panel, Tag } from "@/components/qc/ui";
import { frames, navRow, requirementPages, reserved } from "@/lib/qc/data";
import { hubProject } from "@/lib/qc/project";

const KINDS = [
  ["", "Tất cả"],
  ["man-chinh", "Màn chính"],
  ["popup", "Popup"],
  ["trang-thai", "Trạng thái"],
  ["dropdown", "Dropdown"],
  ["du-kien", "Mã dự kiến"],
  ["final", "Final"],
  ["ngoai-nav", "Chưa có trong NAVIGATION"],
] as const;

/** Every screen code, filterable by kind; dark variants are left out (they are themes of the same screen). */
const ScreensPage = async ({ searchParams }: { searchParams: Promise<{ loai?: string; q?: string }> }): Promise<React.JSX.Element> => {
  const { loai = "", q = "" } = await searchParams;
  await hubProject();
  const needle = q.toLowerCase();
  const rows =
    loai === "du-kien"
      ? Object.entries(reserved())
          .filter(([c]) => !frames()[c])
          .map(([code, r]) => ({ code, title: r.title ?? r.pages?.[0] ?? "", kind: "du-kien" }))
      : Object.entries(frames())
          .filter(([c]) => !c.endsWith("-DK"))
          .filter(([c, f]) => !loai || (loai === "final" ? navRow(c)?.final : loai === "ngoai-nav" ? !navRow(c) : f.loai === loai))
          .map(([code, f]) => ({ code, title: f.title, kind: f.loai }));
  const list = rows.filter((r) => !needle || r.code.toLowerCase().includes(needle) || r.title.toLowerCase().includes(needle)).sort((a, b) => a.code.localeCompare(b.code));

  return (
    <>
      <PageHead title="Màn hình" sub={`${list.length} mã · bản tối (-DK) là theme của cùng màn nên không liệt kê riêng`}>
        <form className="w-full max-w-sm">
          <input type="hidden" name="loai" value={loai} />
          <input
            name="q"
            defaultValue={q}
            placeholder="Lọc theo mã hoặc tên…"
            className="w-full rounded-2xl border border-(--hub-line) bg-(--hub-panel) px-4 py-2.5 text-sm outline-none placeholder:text-(--hub-faint) focus:border-(--hub-accent)"
          />
        </form>
      </PageHead>
      <div className="mb-5 flex flex-wrap gap-1.5">
        {KINDS.map(([k, label]) => (
          <Link
            key={k}
            href={`/hub/man?loai=${k}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
            className={`rounded-full px-3 py-1 text-xs ${k === loai ? "bg-(--hub-accent-strong) text-white" : "bg-(--hub-panel-2) text-(--hub-muted) hover:text-(--hub-text)"}`}
          >
            {label}
            {k === "du-kien" && <span className="ml-1.5 tabular-nums opacity-70">{Object.keys(reserved()).filter((c) => !frames()[c]).length}</span>}
          </Link>
        ))}
      </div>
      <Panel>
        <ul className="divide-y divide-(--hub-line)/60 text-[13px]">
          {list.map((r) => (
            <li key={r.code}>
              <Link href={`/hub/man/${r.code}`} className="flex items-center gap-3 py-2.5 hover:text-(--hub-accent)">
                <span className="w-[150px] shrink-0 font-mono text-(--hub-accent)">{r.code}</span>
                <span className="min-w-0 flex-1 truncate">{r.title}</span>
                {navRow(r.code)?.final && <Tag tone="violet">Final</Tag>}
                {requirementPages(r.code).length > 0 && <Tag tone="green">Có requirement</Tag>}
                {r.kind === "du-kien" ? <Tag tone="gray">Chưa vẽ</Tag> : <KindTag kind={r.kind} />}
              </Link>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
};

export default ScreensPage;
