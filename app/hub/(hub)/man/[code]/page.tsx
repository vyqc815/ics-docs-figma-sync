import Link from "next/link";
import { notFound } from "next/navigation";
import { Code2, PenTool } from "lucide-react";

import { KindTag, LiveShot, PageHead, Panel, PriorityTag, StatusTag, TabBar, Tag } from "@/components/qc/ui";
import { session } from "@/lib/qc/auth";
import { PROGRESS, PROGRESS_LABEL, readJson, type Progress } from "@/lib/qc/store";
import { setProgress } from "../../docs/actions";
import { builtPage, clusterOfFile, clustersOf, figmaUrl, frames, navRow, registry, requirementPages, reserved } from "@/lib/qc/data";
import { withBase } from "@/lib/base-path";

/** Site of vyqc815/ics-docs-figma-sync (BA docs ↔ Figma), opened on the screen's code. */
const DOCS_BA = (process.env.DOCS_FIGMA_URL ?? "https://icstestsapi.pls.edu.vn/docs-figma").replace(/\/$/, "");

/** Flags from the NAVIGATION table on Figma, the official screen list design keeps. */
const NavTags = ({ code }: { code: string }): React.JSX.Element => {
  const n = navRow(code);
  if (!n) return <Tag tone="amber">Chưa có trong NAVIGATION</Tag>;
  return (
    <>
      {n.removed && <Tag tone="red">Đã bỏ</Tag>}
      {n.todo && <Tag tone="gray">Chưa làm</Tag>}
      {n.final && <Tag tone="green">Final</Tag>}
    </>
  );
};

/** One screen: live Figma render, where requirements talk about it, its items and the testcases that cover them. */
const ScreenPage = async ({ params, searchParams }: { params: Promise<{ code: string }>; searchParams: Promise<{ xem?: string }> }): Promise<React.JSX.Element> => {
  const code = (await params).code.toUpperCase();
  const { xem = "figma" } = await searchParams;
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
  const demo = screen?.link ?? built?.route;
  const base = `/hub/man/${code}?xem=`;
  // Demo, code and spec are the demo's own pages, embedded: no extra files ship with the hub
  const views = [
    { key: "figma", label: "Figma", href: `${base}figma` },
    ...(demo ? [{ key: "demo", label: "Demo thật", href: `${base}demo` }] : []),
    ...(built ? [{ key: "spec", label: "Spec MD", href: `${base}spec` }] : []),
    ...(built && frame ? [{ key: "so-sanh", label: "Trước / sau", href: `${base}so-sanh` }] : []),
  ];
  const view = xem === "demo" && demo ? "demo" : xem === "spec" && built ? "spec" : xem === "so-sanh" && built && frame ? "so-sanh" : "figma";
  const me = await session();
  const progress = (await readJson<Progress>(PROGRESS, {}).catch((): Progress => ({})))[code] ?? {};
  const mine = me ? progress[me.name]?.s : undefined;

  return (
    <>
      <PageHead
        back="/hub/man"
        title={<span className="font-mono">{code}</span>}
        sub={frame?.title ?? planned?.title ?? "Mã dự kiến"}
      >
        <div className="flex gap-2 text-sm">
          {frame && <KindTag kind={frame.loai} />}
          <NavTags code={code} />
          {!frame && <Tag tone="gray">Chưa có thiết kế</Tag>}
        </div>
        {me && frame && (
          <form action={setProgress} className="flex items-center gap-1 rounded-xl bg-(--hub-panel) p-1 text-xs" title="Tiến độ của bạn ở màn này">
            <input type="hidden" name="code" value={code} />
            <span className="px-2 text-(--hub-muted)">Tôi:</span>
            {(["", "dang", "xong"] as const).map((v) => (
              <button
                key={v}
                name="s"
                value={v}
                className={`rounded-lg px-2.5 py-1 ${(mine ?? "") === v ? "bg-(--hub-accent-strong) text-white" : "text-(--hub-muted) hover:text-(--hub-text)"}`}
              >
                {v ? PROGRESS_LABEL[v] : "Chưa làm"}
              </button>
            ))}
          </form>
        )}
        {Object.keys(progress).length > 0 && (
          <p className="w-full text-xs text-(--hub-muted)">
            {Object.entries(progress)
              .map(([name, p]) => `${name}: ${PROGRESS_LABEL[p.s]}`)
              .join(" · ")}
          </p>
        )}
      </PageHead>
      <Panel className="mb-6">
        <div className="mb-4">
          <TabBar tabs={views} active={view} />
        </div>
        {view === "figma" && <LiveShot code={code} className="min-h-[260px]" live />}
        {view === "so-sanh" && (
          <div className="grid gap-3 lg:grid-cols-2">
            <figure>
              <figcaption className="mb-1.5 text-xs text-(--hub-muted)">Trước · bản export lúc sinh code gần nhất</figcaption>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBase(`/figma-ref/${code}.png`)} alt={`${code} trước`} className="w-full rounded-xl border border-(--hub-line)" />
            </figure>
            <figure>
              <figcaption className="mb-1.5 text-xs text-(--hub-muted)">Sau · Figma hiện tại</figcaption>
              <LiveShot code={code} live />
            </figure>
          </div>
        )}
        {view === "demo" && demo && (
          <>
            <iframe src={withBase(demo)} title={`${code} · demo`} className="h-[78vh] min-h-[560px] w-full rounded-xl border border-(--hub-line) bg-white" />
          </>
        )}
        {view === "spec" && built && (
          <iframe src={withBase(`${built.spec}?embed=1`)} title={`${code} · spec`} className="h-[78vh] min-h-[560px] w-full rounded-xl border border-(--hub-line) bg-white" />
        )}
        {(frame || built) && (
          <details className="group mt-3">
            <summary className="flex list-none items-center gap-2 text-sm [&::-webkit-details-marker]:hidden">
              {frame && (
                <a href={figmaUrl(frame.id)} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-3 py-2 hover:text-(--hub-accent)">
                  <PenTool className="size-4" /> Mở Figma ↗
                </a>
              )}
              {navRow(code) && (
                <a
                  href={`${DOCS_BA}/figma-screens.html#${code}`}
                  target="_blank"
                  rel="noreferrer"
                  title="Docs BA trên ics-docs-figma-sync (cần tài khoản bên đó)"
                  className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-3 py-2 hover:text-(--hub-accent)"
                >
                  Docs BA ↗
                </a>
              )}
              {built && (
                <span className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-3 py-2 select-none hover:text-(--hub-accent) group-open:text-(--hub-accent)">
                  <Code2 className="size-4" /> Xem code
                </span>
              )}
            </summary>
            {built && <iframe src={withBase(`${built.code}?embed=1`)} title={`${code} · code`} loading="lazy" className="mt-3 h-[70vh] w-full rounded-xl bg-white" />}
          </details>
        )}
      </Panel>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="contents">
          <Panel title="Requirement nói về màn này">
            {pages.length ? (
              <ul className="space-y-3 text-sm">
                {pages.map((p) => {
                  const c = clusterOfFile(p.file);
                  return (
                    <li key={p.file} className="rounded-2xl bg-(--hub-panel-2) p-3">
                      <p className="font-medium">{p.title}</p>
                      <p className="font-mono text-[11px] text-(--hub-faint)">{p.prefix || p.file}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {p.pages.map((n) => (
                          <Link
                            key={n}
                            href={c ? `/hub/cum/${c}?tab=requirement&file=${encodeURIComponent(p.file)}#trang-${n}` : "#"}
                            className="rounded-lg bg-(--hub-panel) px-2 py-1 text-xs hover:text-(--hub-accent)"
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
              <p className="text-sm text-(--hub-muted)">Chưa có trang requirement nào gắn mã màn này.</p>
            )}
          </Panel>
          <Panel title="Thuộc cụm">
            <div className="flex flex-wrap gap-2">
              {inClusters.map((c) => (
                <Link key={c.name} href={`/hub/cum/${c.name}`} className="rounded-xl bg-(--hub-panel-2) px-3 py-2 text-sm hover:text-(--hub-accent)">
                  {c.title}
                </Link>
              ))}
              {!inClusters.length && <p className="text-sm text-(--hub-muted)">Chưa thuộc cụm nào.</p>}
            </div>
          </Panel>
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Panel title={`Item trên màn (${items.length})`}>
          {items.length ? (
            <ul className="divide-y divide-(--hub-line)/60 text-[13px]">
              {items.map((i) => (
                <li key={i.id} className="flex items-start gap-3 py-2.5">
                  <Link href={`/hub/cum/${i.cluster}?tab=item#${i.id}`} className="font-mono text-[12px] whitespace-nowrap text-(--hub-accent) hover:underline">
                    {i.id}
                  </Link>
                  <span className="min-w-0 flex-1">
                    {i.label}
                    <span className="block text-[11px] text-(--hub-faint)">
                      {i.region} · layer “{i.matches[lower][0]?.layer}”
                    </span>
                  </span>
                  <StatusTag status={i.status} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-(--hub-muted)">Chưa có item requirement nào khớp layer trên màn này.</p>
          )}
        </Panel>
        <Panel title={`Testcase liên quan (${cases.length})`}>
          {cases.length ? (
            <ul className="divide-y divide-(--hub-line)/60 text-[13px]">
              {cases.map((t) => (
                <li key={t.id} className="flex items-start gap-3 py-2.5">
                  <Link href={`/hub/cum/${t.cluster}?tab=testcase#${t.id}`} className="font-mono text-[12px] whitespace-nowrap text-(--hub-accent) hover:underline">
                    {t.id}
                  </Link>
                  <span className="min-w-0 flex-1">{t.title}</span>
                  <PriorityTag priority={t.priority} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-(--hub-muted)">Chưa có testcase nào trỏ tới item hay khu vực của màn này.</p>
          )}
        </Panel>
      </div>
    </>
  );
};

export default ScreenPage;
