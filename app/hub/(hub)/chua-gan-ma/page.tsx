import Link from "next/link";

import { PageHead, Panel, Tag } from "@/components/qc/ui";
import { clusterOfFile, unmappedPages } from "@/lib/qc/data";
import { hubProject } from "@/lib/qc/project";

/** Requirement pages with no screen code yet (toasts, screens not drawn), from docs/he-thong-ma/trang-chua-gan-ma.md. */
const UnmappedPage = async (): Promise<React.JSX.Element> => {
  await hubProject();
  const rows = unmappedPages();
  return (
    <>
      <PageHead
        title="Trang chưa gắn mã màn"
        sub={`${rows.length} trang · toast không có frame riêng, hoặc màn chưa vẽ trên Figma. Gắn mã: sửa docs/he-thong-ma/ma-trang-duyet.json`}
      />
      <Panel>
        <div className="overflow-x-auto hub-scroll">
          <table className="w-full min-w-[720px] text-[13px]">
            <thead className="text-left text-(--hub-faint)">
              <tr>
                <th className="py-2 pr-3 font-medium">File</th>
                <th className="py-2 pr-3 font-medium">Trang</th>
                <th className="py-2 pr-3 font-medium">Lý do</th>
                <th className="py-2 font-medium">Frame ứng viên</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--hub-line)/60">
              {rows.map((r) => {
                const c = clusterOfFile(r.file);
                const no = r.page.match(/^Trang (\d+)/)?.[1];
                return (
                  <tr key={`${r.file}-${r.page}`} className="align-top">
                    <td className="py-2.5 pr-3 font-mono text-[11px] text-(--hub-muted)">{r.file}</td>
                    <td className="py-2.5 pr-3">
                      {c ? (
                        <Link href={`/hub/cum/${c}?tab=requirement&file=${encodeURIComponent(r.file)}#trang-${no}`} className="hover:text-(--hub-accent)">
                          {r.page}
                        </Link>
                      ) : (
                        r.page
                      )}
                    </td>
                    <td className="py-2.5 pr-3">
                      <Tag tone={r.page.includes("Toast") ? "gray" : "amber"}>{r.reason}</Tag>
                    </td>
                    <td className="py-2.5 font-mono text-[11px]">
                      {r.candidates
                        .split(", ")
                        .filter(Boolean)
                        .map((code) => (
                          <Link key={code} href={`/hub/man/${code}`} className="mr-2 text-(--hub-accent) hover:underline">
                            {code}
                          </Link>
                        ))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
};

export default UnmappedPage;
