import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CopyButton } from "@/components/figma-viewer/copy-button";
import { ViewerShell } from "@/components/figma-viewer/viewer-shell";
import { figmaSource, markdownHtml, pageByName } from "@/lib/figma-source";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ name: string }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => ({
  title: `${(await params).name.toUpperCase()} · Spec MD`,
});

/** A screen's page Markdown, rendered. */
const SpecPage = async ({ params }: Props): Promise<React.JSX.Element> => {
  const page = pageByName((await params).name);
  if (!page) notFound();
  const src = figmaSource(page);

  return (
    <ViewerShell page={page} active="spec" hasCode={src.files.length > 0}>
      {src.doc ? (
        <>
          <div className="fv-bar">
            <span>{src.doc.path}</span>
            <CopyButton text={src.doc.text} label="Copy MD" />
          </div>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: generated from the project's own Markdown, escaped. */}
          <article className="fv-md" dangerouslySetInnerHTML={{ __html: markdownHtml(src.doc.text) }} />
        </>
      ) : (
        <p className="fv-bar">Màn này chưa có MD.</p>
      )}
    </ViewerShell>
  );
};

export default SpecPage;
