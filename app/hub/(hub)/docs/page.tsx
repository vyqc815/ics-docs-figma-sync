import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, History, PencilLine } from "lucide-react";

import { FigmaPanel, type PanelScreen } from "@/components/qc/figma-panel";
import { RequirementMarkdown } from "@/components/qc/markdown";
import { Tag } from "@/components/qc/ui";
import { can, session } from "@/lib/qc/auth";
import { STATES, syncRowsCached } from "@/lib/qc/dong-bo";
import { builtPage, clusterOfFile, figmaUrl, frames, requirementFiles, requirementMarkdown } from "@/lib/qc/data";

import { markSynced } from "../dong-bo/actions";
import { saveTags } from "./actions";
import { DOC_META, readJson, type DocMeta } from "@/lib/qc/store";

export const dynamic = "force-dynamic";

const time = (iso: string): string => new Date(iso).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", dateStyle: "short", timeStyle: "short" });
const DOT = { green: "var(--hub-green)", amber: "var(--hub-amber)", violet: "var(--hub-accent)", red: "var(--hub-red)", gray: "var(--hub-faint)" };

/**
 * One requirement document as on the docs site of ics-docs-figma-sync: its sync state on top (with "Đã đồng bộ"),
 * the document, and the Figma screens it mentions in a panel on the right.
 */
const DocPage = async ({ searchParams }: { searchParams: Promise<{ f?: string }> }): Promise<React.JSX.Element> => {
  const { f = "" } = await searchParams;
  const text = f.endsWith(".md") ? requirementMarkdown(f) : null;
  if (!text) notFound();
  const info = requirementFiles().find((x) => x.path === f);
  const me = await session();
  const row = (await syncRowsCached().catch(() => [])).find((r) => r.file === f);
  const s = STATES[row?.state ?? "chua"];
  const all = frames();
  const screens: PanelScreen[] = (info?.screens ?? [])
    .filter((c) => all[c])
    .map((c) => {
      const built = builtPage(c);
      return { code: c, title: all[c].title, figma: figmaUrl(all[c].id), demo: built?.route, source: built ? `${built.code}?embed=1` : undefined };
    })
    // in the order the document mentions them, so the panel opens on the first screen of the text
    .sort((a, b) => (text.indexOf(a.code) + 1 || Infinity) - (text.indexOf(b.code) + 1 || Infinity));
  const cluster = clusterOfFile(f);
  const back = `/hub/docs?f=${encodeURIComponent(f)}`;
  const tags = (await readJson<DocMeta>(DOC_META, {}).catch((): DocMeta => ({})))[f]?.tags ?? [];

  return (
    <div className="flex items-start">
      <div className="min-w-0 flex-1">
        <div className="mb-4 flex flex-wrap items-center gap-3 rounded-[20px] bg-(--hub-panel) px-4 py-3">
          <span className="size-2.5 shrink-0 rounded-full" style={{ background: DOT[s.tone], boxShadow: `0 0 0 4px color-mix(in srgb, ${DOT[s.tone]} 18%, transparent)` }} />
          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-medium">{s.label}</p>
            <p className="text-xs text-(--hub-muted)">
              {row?.mark ? `Mốc ${time(row.mark.at)} · ${row.mark.by}` : "Chưa ai so requirement này với Figma"}
              {screens.length > 0 && ` · ${screens.length} màn Figma`}
            </p>
          </div>
          {can(me, "edit") && row?.state !== "xanh" && (
            <form action={markSynced}>
              <input type="hidden" name="file" value={f} />
              <input type="hidden" name="back" value={back} />
              <button className="rounded-xl bg-(--hub-accent-strong) px-3 py-1.5 text-xs font-semibold text-white hover:bg-(--hub-accent)">Đã đồng bộ</button>
            </form>
          )}
          {can(me, "edit") && (
            <Link href={`/hub/requirement/sua?f=${encodeURIComponent(f)}`} title="Sửa requirement" className="rounded-lg p-2 text-(--hub-muted) hover:bg-(--hub-panel-2) hover:text-(--hub-text)">
              <PencilLine className="size-4" />
            </Link>
          )}
          <a href={`/hub/tai-md?f=${encodeURIComponent(f)}`} title="Tải file MD" className="rounded-lg p-2 text-(--hub-muted) hover:bg-(--hub-panel-2) hover:text-(--hub-text)">
            <Download className="size-4" />
          </a>
          <Link href="/hub/dong-bo" title="Lịch sử đồng bộ" className="rounded-lg p-2 text-(--hub-muted) hover:bg-(--hub-panel-2) hover:text-(--hub-text)">
            <History className="size-4" />
          </Link>
        </div>
        {row && (row.changes.length > 0 || row.docsChanged) && (
          <div className="mb-4 rounded-[20px] bg-(--hub-panel) px-4 py-3 text-xs text-(--hub-muted)">
            <p className="mb-1 font-medium text-(--hub-text)">Đổi sau mốc</p>
            {row.docsChanged && <p>Requirement đã sửa</p>}
            {row.changes.slice(0, 6).map((c) => (
              <p key={c.code + c.at}>
                <span className="font-mono text-(--hub-accent)">{c.code}</span> {c.what} · {time(c.at)}
              </p>
            ))}
          </div>
        )}
        <article className="rounded-[20px] bg-(--hub-panel) px-6 py-6">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {info?.prefix && <Tag tone="violet">{info.prefix}</Tag>}
            {tags.map((t) => (
              <Link key={t} href={`/hub/tag?t=${encodeURIComponent(t)}`} className="rounded-full bg-(--hub-panel-2) px-2.5 py-0.5 text-xs text-(--hub-muted) hover:text-(--hub-accent)">
                #{t}
              </Link>
            ))}
            {can(me, "edit") && (
              <details className="relative">
                <summary className="cursor-pointer list-none rounded-full px-2 py-0.5 text-xs text-(--hub-faint) hover:text-(--hub-accent) [&::-webkit-details-marker]:hidden">
                  {tags.length ? "Sửa tag" : "+ Tag"}
                </summary>
                <form action={saveTags} className="absolute z-10 mt-1 flex w-72 gap-2 rounded-xl border border-(--hub-line) bg-(--hub-panel-2) p-2">
                  <input type="hidden" name="file" value={f} />
                  <input
                    name="tags"
                    defaultValue={tags.join(", ")}
                    placeholder="course, homework"
                    className="min-w-0 flex-1 rounded-lg border border-(--hub-line) bg-(--hub-panel) px-2 py-1 text-xs outline-none focus:border-(--hub-accent)"
                  />
                  <button className="rounded-lg bg-(--hub-accent-strong) px-2.5 text-xs font-semibold text-white">Lưu</button>
                </form>
              </details>
            )}
            {cluster && (
              <Link href={`/hub/cum/${cluster}`} className="text-xs text-(--hub-muted) hover:text-(--hub-accent)">
                Item, testcase của cụm →
              </Link>
            )}
            <span className="ml-auto font-mono text-[11px] text-(--hub-faint)">{f}</span>
          </div>
          <div id="doc-body">
            <RequirementMarkdown file={f} text={text} />
          </div>
        </article>
      </div>
      <FigmaPanel screens={screens} docId="doc-body" liveBase={process.env.QC_IMAGE_BASE ?? ""} />
    </div>
  );
};

export default DocPage;
