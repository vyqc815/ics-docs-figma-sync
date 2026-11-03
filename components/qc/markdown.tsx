import { posix } from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
          // eslint-disable-next-line @next/next/no-img-element
          img: ({ src, alt }) => <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" />,
          a: ({ href, children }) => (
            <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
