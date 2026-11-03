import Link from "next/link";
import { notFound } from "next/navigation";
import { Code2, ExternalLink, MonitorPlay, PenTool } from "lucide-react";

import { RequirementMarkdown } from "@/components/qc/markdown";
import { KindTag, LiveShot, PageHead, Panel, PriorityTag, Stat, StatusTag, TabBar, Tag } from "@/components/qc/ui";
import { builtPage, figmaUrl, registry, requirementMarkdown, stats, type Registry } from "@/lib/qc/data";

type Search = { tab?: string; file?: string; req?: string; p?: string };

/** One cluster: its screens, requirement files, items and testcases. */
const ClusterPage = async ({ params, searchParams }: { params: Promise<{ name: string }>; searchParams: Promise<Search> }): Promise<React.JSX.Element> => {
  const { name } = await params;
  const sp = await searchParams;
  const r = registry(name);
  if (!r) notFound();
  const s = stats(r);
  const tab = sp.tab ?? (r.requirementFiles.length ? "requirement" : "man");
  const base = `/hub/cum/${name}`;
  const tabs = [
    { key: "man", label: "Màn hình", href: `${base}?tab=man`, count: s.screens },
    { key: "requirement", label: "Requirement", href: `${base}?tab=requirement`, count: s.files },
    { key: "item", label: "Item", href: `${base}?tab=item`, count: s.items },
    { key: "testcase", label: "Testcase", href: `${base}?tab=testcase`, count: s.testcases },
  ];

  return (
    <>
      <PageHead back="/hub" title={r.title} sub={`Cụm ${name}${r.requirementFiles.length ? ` · ${r.requirementFiles.map((f) => f.prefix).join(", ")}` : ""}`} />
      <div className="mb-5 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Màn" value={s.screens} />
        <Stat label="Item" value={s.items} hint={`${s.matched} thấy trên Figma`} tone="green" />
        <Stat label="Testcase" value={s.testcases} />
        <Stat label="Việc cần xem" value={s.issues} tone={s.issues ? "amber" : undefined} hint="REQ chưa có case, frame thiếu…" />
      </div>
      <div className="mb-6">
        <TabBar tabs={tabs} active={tab} />
      </div>
      {tab === "man" && <Screens r={r} />}
      {tab === "requirement" && <Requirement r={r} base={base} file={sp.file} />}
      {tab === "item" && <Items r={r} name={name} />}
      {tab === "testcase" && <Testcases r={r} base={base} req={sp.req} priority={sp.p} />}
    </>
  );
};

function Screens({ r }: { r: Registry }): React.JSX.Element {
  const list = Object.values(r.screens).filter((s) => !s.id.endsWith("-DK"));
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {list.map((s) => (
        <div key={s.id} className="overflow-hidden rounded-2xl bg-(--hub-panel)">
          <Link href={`/hub/man/${s.id}`} className="block aspect-[16/10] overflow-hidden bg-(--hub-panel-3)">
            <LiveShot code={s.id} className="h-full rounded-none" />
          </Link>
          <div className="p-4">
            <div className="flex items-center justify-between gap-2">
              <Link href={`/hub/man/${s.id}`} className="font-mono text-[13px] text-(--hub-accent) hover:underline">
                {s.id}
              </Link>
              <KindTag kind={s.kind} />
            </div>
            <p className="mt-1.5 line-clamp-2 text-sm text-(--hub-muted)">{s.title}</p>
            <div className="mt-3 flex gap-2 text-xs">
              {s.link && (
                <a href={s.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 rounded-lg bg-(--hub-panel-2) px-2.5 py-1.5 hover:text-(--hub-accent)">
                  <MonitorPlay className="size-3.5" /> Demo
                </a>
              )}
              {s.nodeId && (
                <a href={figmaUrl(s.nodeId)} target="_blank" rel="noreferrer" className="flex items-center gap-1 rounded-lg bg-(--hub-panel-2) px-2.5 py-1.5 hover:text-(--hub-accent)">
                  <PenTool className="size-3.5" /> Figma
                </a>
              )}
              {builtPage(s.id) && (
                <a href={builtPage(s.id)!.code} target="_blank" rel="noreferrer" className="flex items-center gap-1 rounded-lg bg-(--hub-panel-2) px-2.5 py-1.5 hover:text-(--hub-accent)">
                  <Code2 className="size-3.5" /> Code
                </a>
              )}
              {!s.inFigma && <Tag tone="gray">Chưa vẽ</Tag>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Requirement({ r, base, file }: { r: Registry; base: string; file?: string }): React.JSX.Element {
  if (!r.requirementFiles.length) return <Panel>Cụm này chưa có file requirement của QC.</Panel>;
  const current = r.requirementFiles.find((f) => f.file === file) ?? r.requirementFiles[0];
  const text = requirementMarkdown(current.file);
  const pages = [...(text ?? "").matchAll(/^### Trang (\d+): (?:(.*?) — )?(.*)$/gm)].map((m) => ({ no: m[1], codes: m[2], title: m[3] }));
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_280px]">
      <Panel className="min-w-0">
        {r.requirementFiles.length > 1 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {r.requirementFiles.map((f) => (
              <Link
                key={f.file}
                href={`${base}?tab=requirement&file=${encodeURIComponent(f.file)}`}
                className={`rounded-full px-3 py-1 text-xs ${f.file === current.file ? "bg-(--hub-accent-strong) text-white" : "bg-(--hub-panel-2) text-(--hub-muted)"}`}
              >
                {f.prefix} · {f.title}
              </Link>
            ))}
          </div>
        )}
        <p className="mb-4 font-mono text-xs text-(--hub-faint)">
          {current.prefix} · docs/requirements/{current.file}
        </p>
        {text ? <RequirementMarkdown file={current.file} text={text} /> : <p>Không đọc được file.</p>}
      </Panel>
      <aside className="hidden xl:block">
        <div className="sticky top-0 max-h-[calc(100vh-140px)] overflow-y-auto rounded-3xl bg-(--hub-panel) p-4 hub-scroll">
          <p className="mb-3 text-sm font-semibold">Các trang</p>
          <ol className="space-y-1 text-[13px]">
            {pages.map((p) => (
              <li key={p.no}>
                <a href={`#trang-${p.no}`} className="block rounded-lg px-2 py-1.5 text-(--hub-muted) hover:bg-(--hub-panel-2) hover:text-(--hub-text)">
                  <span className="text-(--hub-faint)">{p.no}.</span> {p.title}
                  {p.codes ? <span className="block font-mono text-[11px] text-(--hub-accent)">{p.codes}</span> : <span className="block text-[11px] text-(--hub-amber)">chưa gắn mã</span>}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </div>
  );
}

function Items({ r, name }: { r: Registry; name: string }): React.JSX.Element {
  const regions = r.regions.filter((g) => g.items.length);
  if (!regions.length) return <Panel>Cụm này chưa có item.</Panel>;
  return (
    <div className="space-y-5">
      {regions.map((g) => (
        <Panel
          key={g.id}
          title={
            <span>
              <span className="mr-2 font-mono text-[13px] text-(--hub-accent)">{g.id}</span>
              {g.title}
            </span>
          }
          action={
            <div className="flex flex-wrap justify-end gap-1">
              {g.screens.map((c) => (
                <Link key={c} href={`/hub/man/${c.toUpperCase()}`} className="font-mono text-[11px] text-(--hub-muted) hover:text-(--hub-accent)">
                  {c.toUpperCase()}
                </Link>
              ))}
            </div>
          }
        >
          <div className="overflow-x-auto hub-scroll">
            <table className="w-full min-w-[720px] text-[13px]">
              <thead className="text-left text-(--hub-faint)">
                <tr>
                  <th className="py-2 pr-3 font-medium">Mã</th>
                  <th className="py-2 pr-3 font-medium">Thành phần</th>
                  <th className="py-2 pr-3 font-medium">Mô tả</th>
                  <th className="py-2 pr-3 font-medium">Trên Figma</th>
                  <th className="py-2 font-medium">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--hub-line)/60">
                {g.items.map((i) => {
                  const layers = Object.entries(i.matches).flatMap(([scr, ms]) => ms.slice(0, 1).map((m) => `${scr.toUpperCase()} · ${m.layer}`));
                  return (
                    <tr key={i.id} id={i.id} className="align-top target:bg-(--hub-accent-soft)">
                      <td className="py-2.5 pr-3 font-mono text-[12px] whitespace-nowrap text-(--hub-accent)">{i.id.replace(`${r.requirementFiles.length === 1 ? r.requirementFiles[0].prefix + "." : ""}`, "")}</td>
                      <td className="py-2.5 pr-3 font-medium">{i.label}</td>
                      <td className="max-w-[420px] py-2.5 pr-3 text-(--hub-muted)">{i.spec.replace(/\*\*/g, "")}</td>
                      <td className="py-2.5 pr-3 text-[12px] text-(--hub-muted)">
                        {layers.length ? layers.map((l) => <p key={l}>{l}</p>) : <span className="text-(--hub-faint)">—</span>}
                      </td>
                      <td className="py-2.5">
                        <StatusTag status={i.status} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Panel>
      ))}
      <p className="text-xs text-(--hub-faint)">
        Mã item đã khoá: QC chèn/xoá dòng không làm đổi mã cũ. Khoá toàn cục = tiền tố file + mã, ví dụ {r.requirementFiles[0]?.prefix ?? name}.A03.07.
      </p>
    </div>
  );
}

function Testcases({ r, base, req, priority }: { r: Registry; base: string; req?: string; priority?: string }): React.JSX.Element {
  const list = r.testcases.filter((t) => (!req || t.requirements.includes(req) || t.exceptions.includes(req)) && (!priority || t.priority.toLowerCase().startsWith(priority)));
  const reqs = [...r.requirements, ...r.exceptions];
  const name = (id: string) => reqs.find((q) => q.id === id)?.name;
  const chip = (label: string, href: string, on: boolean) => (
    <Link key={label} href={href} className={`rounded-full px-3 py-1 text-xs ${on ? "bg-(--hub-accent-strong) text-white" : "bg-(--hub-panel-2) text-(--hub-muted) hover:text-(--hub-text)"}`}>
      {label}
    </Link>
  );
  return (
    <Panel
      title={`${list.length} testcase${req ? ` cho ${req}` : ""}`}
      action={
        <div className="flex flex-wrap gap-1.5">
          {chip("Tất cả", `${base}?tab=testcase${req ? `&req=${req}` : ""}`, !priority)}
          {chip("High", `${base}?tab=testcase&p=high${req ? `&req=${req}` : ""}`, priority === "high")}
          {chip("Medium", `${base}?tab=testcase&p=medium${req ? `&req=${req}` : ""}`, priority === "medium")}
          {chip("Low", `${base}?tab=testcase&p=low${req ? `&req=${req}` : ""}`, priority === "low")}
        </div>
      }
    >
      {req && (
        <p className="mb-4 rounded-xl bg-(--hub-panel-2) px-4 py-3 text-sm">
          <span className="font-mono text-(--hub-accent)">{req}</span> {name(req)}
          <Link href={`${base}?tab=testcase`} className="ml-3 text-xs text-(--hub-muted) hover:text-(--hub-text)">
            Bỏ lọc
          </Link>
        </p>
      )}
      <div className="overflow-x-auto hub-scroll">
        <table className="w-full min-w-[760px] text-[13px]">
          <thead className="text-left text-(--hub-faint)">
            <tr>
              <th className="py-2 pr-3 font-medium">Mã</th>
              <th className="py-2 pr-3 font-medium">Testcase</th>
              <th className="py-2 pr-3 font-medium">Priority</th>
              <th className="py-2 pr-3 font-medium">Yêu cầu / Flow</th>
              <th className="py-2 font-medium">Item</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-(--hub-line)/60">
            {list.map((t) => (
              <tr key={t.id} id={t.id} className="align-top target:bg-(--hub-accent-soft)">
                <td className="py-2.5 pr-3 font-mono text-[12px] whitespace-nowrap text-(--hub-accent)">{t.id}</td>
                <td className="py-2.5 pr-3">
                  {t.title}
                  {t.smoke && (
                    <span className="ml-2">
                      <Tag tone="violet">Smoke</Tag>
                    </span>
                  )}
                </td>
                <td className="py-2.5 pr-3">
                  <PriorityTag priority={t.priority} />
                </td>
                <td className="py-2.5 pr-3">
                  <div className="flex flex-wrap gap-1">
                    {[...t.requirements, ...t.exceptions].map((q) => (
                      <Link key={q} href={`${base}?tab=testcase&req=${q}`} title={name(q)} className="font-mono text-[11px] text-(--hub-amber) hover:underline">
                        {q.split(".").pop()}
                      </Link>
                    ))}
                    {t.flows.map((f) => (
                      <span key={f} className="font-mono text-[11px] text-(--hub-muted)">
                        {f.split(".").pop()}
                      </span>
                    ))}
                    {!t.requirements.length && !t.exceptions.length && !t.flows.length && <span className="text-(--hub-faint)">{t.scenario || "—"}</span>}
                  </div>
                </td>
                <td className="py-2.5 font-mono text-[11px] text-(--hub-muted)">
                  {t.items.map((i) => (
                    <a key={i} href={`?tab=item#${i}`} className="mr-1.5 hover:text-(--hub-accent)">
                      {i.split(".").slice(-2).join(".")}
                    </a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 flex items-center gap-1 text-xs text-(--hub-faint)">
        <ExternalLink className="size-3" /> Nội dung đầy đủ từng case (Given/When/Then, Expected) nằm ở mục 3 của tab Requirement.
      </p>
    </Panel>
  );
}

export default ClusterPage;
