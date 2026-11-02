import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CopyButton } from "@/components/figma-viewer/copy-button";
import { ViewerShell } from "@/components/figma-viewer/viewer-shell";
import { figmaSource, highlightTsx, pageByName } from "@/lib/figma-source";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ name: string }>; searchParams: Promise<{ file?: string }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => ({
  title: `${(await params).name.toUpperCase()} · Code`,
});

/** Short label of a file: its folder and name, e.g. "shared/Header4.tsx". */
const label = (path: string): string => path.split("/").slice(-2).join("/");

/** A screen's generated code, one file at a time (?file=<label>). */
const CodePage = async ({ params, searchParams }: Props): Promise<React.JSX.Element> => {
  const page = pageByName((await params).name);
  if (!page) notFound();
  const src = figmaSource(page);
  const wanted = (await searchParams).file;
  const file = src.files.find((f) => label(f.path) === wanted) ?? src.files[0];

  return (
    <ViewerShell page={page} active="code" hasCode={src.files.length > 0}>
      {file ? (
        <>
          <nav className="fv-files">
            {src.files.map((f) => (
              <Link
                key={f.path}
                href={`/figma/${page.name}/code?file=${encodeURIComponent(label(f.path))}`}
                className="fv-chip"
                aria-current={f === file ? "page" : undefined}
              >
                {label(f.path)}
              </Link>
            ))}
          </nav>
          <div className="fv-bar">
            <span>
              {file.path} · {file.code.split("\n").length} dòng
            </span>
            <CopyButton text={file.code} />
          </div>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: the project's own code, escaped by highlightTsx. */}
          <pre dangerouslySetInnerHTML={{ __html: highlightTsx(file.code) }} />
        </>
      ) : (
        <p className="fv-bar">Màn này chưa có code.</p>
      )}
    </ViewerShell>
  );
};

export default CodePage;
