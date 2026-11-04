import Link from "next/link";

import { PageHead, Panel } from "@/components/qc/ui";
import { requirementFiles } from "@/lib/qc/data";
import { DOC_META, readJson, type DocMeta } from "@/lib/qc/store";

export const dynamic = "force-dynamic";

/** Every tag with its documents; ?t= opens one tag. Tags are set on each document's page. */
const TagsPage = async ({ searchParams }: { searchParams: Promise<{ t?: string }> }): Promise<React.JSX.Element> => {
  const { t = "" } = await searchParams;
  const meta = await readJson<DocMeta>(DOC_META, {}).catch((): DocMeta => ({}));
  const title = new Map(requirementFiles().map((f) => [f.path, f.title]));
  const byTag = new Map<string, string[]>();
  for (const [file, m] of Object.entries(meta)) for (const tag of m.tags ?? []) byTag.set(tag, [...(byTag.get(tag) ?? []), file]);
  const tags = [...byTag].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  const shown = t ? tags.filter(([tag]) => tag === t) : tags;

  return (
    <>
      <PageHead back={t ? "/hub/tag" : undefined} title={t ? `#${t}` : "Tag"} sub="Gắn tag ở đầu mỗi tài liệu (quyền QC / admin)." />
      <div className="mb-5 flex flex-wrap gap-1.5">
        {tags.map(([tag, files]) => (
          <Link
            key={tag}
            href={`/hub/tag?t=${encodeURIComponent(tag)}`}
            className={`rounded-full px-3 py-1 text-xs ${tag === t ? "bg-(--hub-accent-strong) text-white" : "bg-(--hub-panel-2) text-(--hub-muted) hover:text-(--hub-text)"}`}
          >
            #{tag} <span className="opacity-60">{files.length}</span>
          </Link>
        ))}
        {!tags.length && <p className="text-sm text-(--hub-muted)">Chưa có tag nào.</p>}
      </div>
      <div className="space-y-4">
        {shown.map(([tag, files]) => (
          <Panel key={tag} title={`#${tag}`}>
            <ul className="divide-y divide-(--hub-line)/60 text-[13px]">
              {files.map((f) => (
                <li key={f}>
                  <Link href={`/hub/docs?f=${encodeURIComponent(f)}`} className="block py-2.5 hover:text-(--hub-accent)">
                    {title.get(f) ?? f}
                    <span className="ml-2 font-mono text-[11px] text-(--hub-faint)">{f}</span>
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

export default TagsPage;
