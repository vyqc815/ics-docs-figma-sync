import { posix } from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { FigmaShot } from "@/components/qc/figma-shot";

const QC_SHOT = "qc-shot:";

/**
 * On a page that has a live Figma image, the screenshots QC attached are only shown as a link: the live
 * image is the current design, the screenshot may be old. Display only; the requirement file is unchanged.
 */
function preferFigma(text: string): string {
  return text
    .split(/(?=^### )/m)
    .map((section) =>
      section.includes("![Figma mới nhất")
        ? section.replace(/!\[([^\]]*)\]\((?!https?:)([^)\s]+)\)/g, (_m, alt: string, src: string) => `![${QC_SHOT}${alt}](${src})`)
        : section,
    )
    .join("");
}

/**
 * A requirement file as the team reads it. Relative images resolve to /hub/anh (behind the hub password);
 * "### Trang N" headings get an id (trang-N) so the page index and other screens can link to them.
 */
export function RequirementMarkdown({ file, text }: { file: string; text: string }): React.JSX.Element {
  const dir = posix.dirname(file);
  return (
    <div className="hub-md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        urlTransform={(url) => (/^(https?:|\/|#|mailto:)/.test(url) ? url : `/hub/anh/${posix.normalize(posix.join(dir, url))}`)}
        components={{
          h3: ({ children }) => {
            const no = String(Array.isArray(children) ? children[0] : children).match(/^Trang (\d+)/)?.[1];
            return <h3 id={no ? `trang-${no}` : undefined}>{children}</h3>;
          },
          img: ({ src, alt }) => {
            const url = typeof src === "string" ? src : undefined;
            if (alt?.startsWith(QC_SHOT))
              return (
                <a href={url} target="_blank" rel="noreferrer" className="hub-qc-shot">
                  Ảnh QC chụp{alt.length > QC_SHOT.length ? ` · ${alt.slice(QC_SHOT.length)}` : ""} ↗
                </a>
              );
            const code = url?.match(/\/api\/figma-frame\/([A-Z0-9-]+)\.png$/)?.[1];
            if (code) return <FigmaShot code={code} live liveBase={url?.split("/api/")[0] ?? ""} className="my-2.5" />;
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={url} alt={alt ?? ""} loading="lazy" />;
          },
          a: ({ href, children }) => (
            <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {preferFigma(text)}
      </ReactMarkdown>
    </div>
  );
}
