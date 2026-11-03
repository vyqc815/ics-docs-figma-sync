import Link from "next/link";
import { notFound } from "next/navigation";
import { Code2, FileText, MonitorPlay, PenTool } from "lucide-react";

import { KindTag, LiveShot, PageHead, Panel, PriorityTag, StatusTag, Tag } from "@/components/qc/ui";
import { builtPage, clusterOfFile, clustersOf, figmaUrl, frames, registry, requirementPages, reserved } from "@/lib/qc/data";

/** One screen: live Figma render, where requirements talk about it, its items and the testcases that cover them. */
const ScreenPage = async ({ params }: { params: Promise<{ code: string }> }): Promise<React.JSX.Element> => {
  const code = (await params).code.toUpperCase();
  const frame = frames()[code];
  const planned = reserved()[code];
  if (!frame && !planned) notFound();
  const inClusters = clustersOf(code);
  const lower = code.toLowerCase();
  const items = inClusters.flatMap((c) =>
    registry(c.name)!.regions.flatMap((g) => g.items.filter((i) => i.matches[lower]).map((i) => ({ ...i, cluster: c.name, region: g.title }))),
  );
  const itemIds = new Set(items.map((i) => i.id));
  const regionIds = new Set(inClusters.flatMap((c) => registry(c.name)!.regions.filter((g) => g.screens.includes(lower)).map((g) => g.id)));
  const cases = inClusters.flatMap((c) =>
    registry(c.name)!.testcases.filter((t) => t.items.some((i) => itemIds.has(i)) || (t.region && regionIds.has(t.region))).map((t) => ({ ...t, cluster: c.name })),
  );
  const screen = inClusters.map((c) => registry(c.name)!.screens[code]).find(Boolean);
  const pages = requirementPages(code);
  const built = builtPage(code);

  return (
    <>
      <PageHead
        title={<span className="font-mono">{code}</span>}
        sub={frame?.title ?? planned?.title ?? "Mã dự kiến"}
      >
        <div className="flex gap-2 text-sm">
          {frame && <KindTag kind={frame.loai} />}
          {!frame && <Tag tone="gray">Chưa có thiết kế</Tag>}
        </div>
      </PageHead>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Panel>
          <LiveShot code={code} className="min-h-[260px]" />
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {screen?.link && (
              <a href={screen.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-xl bg-(--qc-panel-2) px-3 py-2 hover:text-(--qc-accent)">
                <MonitorPlay className="size-4" /> Mở demo
              </a>
            )}
            {frame && (
              <a href={figmaUrl(frame.id)} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-xl bg-(--qc-panel-2) px-3 py-2 hover:text-(--qc-accent)">
                <PenTool className="size-4" /> Mở Figma
              </a>
            )}
            {built && (
              <>
                <a href={built.code} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-xl bg-(--qc-panel-2) px-3 py-2 hover:text-(--qc-accent)">
                  <Code2 className="size-4" /> Xem code
                </a>
                <a href={built.spec} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-xl bg-(--qc-panel-2) px-3 py-2 hover:text-(--qc-accent)">
                  <FileText className="size-4" /> Spec
                </a>
              </>
            )}
            {frame?.parent && frame.parent !== code && (
              <Link href={`/qc/man/${frame.parent}`} className="rounded-xl bg-(--qc-panel-2) px-3 py-2 text-(--qc-muted) hover:text-(--qc-accent)">
                Màn cha: <span className="font-mono">{frame.parent}</span>
              </Link>
            )}
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel title="Requirement nói về màn này">
            {pages.length ? (
              <ul className="space-y-3 text-sm">
                {pages.map((p) => {
                  const c = clusterOfFile(p.file);
                  return (
                    <li key={p.file} className="rounded-2xl bg-(--qc-panel-2) p-3">
                      <p className="font-medium">{p.title}</p>
                      <p className="font-mono text-[11px] text-(--qc-faint)">{p.prefix || p.file}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {p.pages.map((n) => (
                          <Link
                            key={n}
                            href={c ? `/qc/cum/${c}?tab=requirement&file=${encodeURIComponent(p.file)}#trang-${n}` : "#"}
                            className="rounded-lg bg-(--qc-panel) px-2 py-1 text-xs hover:text-(--qc-accent)"
                          >
                            Trang {n}
                          </Link>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-(--qc-muted)">Chưa có trang requirement nào gắn mã màn này.</p>
            )}
          </Panel>
          <Panel title="Thuộc cụm">
            <div className="flex flex-wrap gap-2">
              {inClusters.map((c) => (
                <Link key={c.name} href={`/qc/cum/${c.name}`} className="rounded-xl bg-(--qc-panel-2) px-3 py-2 text-sm hover:text-(--qc-accent)">
                  {c.title}
                </Link>
              ))}
              {!inClusters.length && <p className="text-sm text-(--qc-muted)">Chưa thuộc cụm nào.</p>}
            </div>
          </Panel>
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Panel title={`Item trên màn (${items.length})`}>
          {items.length ? (
            <ul className="divide-y divide-(--qc-line)/60 text-[13px]">
              {items.map((i) => (
                <li key={i.id} className="flex items-start gap-3 py-2.5">
                  <Link href={`/qc/cum/${i.cluster}?tab=item#${i.id}`} className="font-mono text-[12px] whitespace-nowrap text-(--qc-accent) hover:underline">
                    {i.id}
                  </Link>
                  <span className="min-w-0 flex-1">
                    {i.label}
                    <span className="block text-[11px] text-(--qc-faint)">
                      {i.region} · layer “{i.matches[lower][0]?.layer}”
                    </span>
                  </span>
                  <StatusTag status={i.status} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-(--qc-muted)">Chưa có item requirement nào khớp layer trên màn này.</p>
          )}
        </Panel>
        <Panel title={`Testcase liên quan (${cases.length})`}>
          {cases.length ? (
            <ul className="divide-y divide-(--qc-line)/60 text-[13px]">
              {cases.map((t) => (
                <li key={t.id} className="flex items-start gap-3 py-2.5">
                  <Link href={`/qc/cum/${t.cluster}?tab=testcase#${t.id}`} className="font-mono text-[12px] whitespace-nowrap text-(--qc-accent) hover:underline">
                    {t.id}
                  </Link>
                  <span className="min-w-0 flex-1">{t.title}</span>
                  <PriorityTag priority={t.priority} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-(--qc-muted)">Chưa có testcase nào trỏ tới item hay khu vực của màn này.</p>
          )}
        </Panel>
      </div>
    </>
  );
};

export default ScreenPage;
