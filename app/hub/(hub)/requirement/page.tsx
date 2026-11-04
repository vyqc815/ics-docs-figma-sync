import Link from "next/link";

import { PageHead, Panel, Tag } from "@/components/qc/ui";
import { can, session } from "@/lib/qc/auth";
import { clusterOfFile, requirementFiles } from "@/lib/qc/data";

/** Every requirement file, grouped by its top folder; opens in its cluster when it has one. */
const RequirementsPage = async (): Promise<React.JSX.Element> => {
  const edit = can(await session(), "edit");
  const files = requirementFiles();
  const groups = Map.groupBy(files, (f) => f.path.split("/")[0]);
  return (
    <>
      <PageHead title="Requirement" sub={`${files.length} file của QC · đã xếp theo template, gắn mã màn, mã item và ảnh Figma mới nhất`} />
      <div className="space-y-5">
        {[...groups].map(([group, list]) => (
          <Panel key={group} title={<span className="font-mono text-[15px]">{group}</span>}>
            <ul className="divide-y divide-(--hub-line)/60 text-[13px]">
              {list.map((f) => {
                const cluster = clusterOfFile(f.path);
                const mapped = f.pages.filter((p) => p.screens.length).length;
                const href = `/hub/docs?f=${encodeURIComponent(f.path)}`;
                return (
                  <li key={f.path} className="flex items-center gap-3">
                    <Link href={href} className="flex min-w-0 flex-1 items-center gap-3 py-2.5 hover:text-(--hub-accent)">
                      <span className="w-[90px] shrink-0 font-mono text-(--hub-accent)">{f.prefix || "—"}</span>
                      <span className="min-w-0 flex-1 truncate">{f.title}</span>
                      <span className="hidden text-xs text-(--hub-faint) md:block">
                        {mapped}/{f.pages.length} trang có mã màn
                      </span>
                      {!cluster && <Tag tone="gray">Chưa có màn Figma</Tag>}
                    </Link>
                    {edit && <Link href={`/hub/requirement/sua?f=${encodeURIComponent(f.path)}`} className="rounded-lg bg-(--hub-panel-2) px-3 py-1 text-xs hover:text-(--hub-accent)">
                      Sửa
                    </Link>}
                  </li>
                );
              })}
            </ul>
          </Panel>
        ))}
      </div>
    </>
  );
};

export default RequirementsPage;
