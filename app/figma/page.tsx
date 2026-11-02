import type { Metadata } from "next";
import Link from "next/link";

import config from "../../figma.pages.json";

export const metadata: Metadata = { title: "Màn hình Figma" };

interface FigmaPage {
  name: string;
  route: string;
  docOnly?: boolean;
}

/** Cluster of a screen name: "cd-kh-040100-dk" → "cd-kh". */
const clusterOf = (name: string): string => name.split("-").slice(0, 2).join("-");

/** Index of every screen generated from Figma, grouped by cluster. */
const FigmaIndexPage = (): React.JSX.Element => {
  const pages = (config.pages as FigmaPage[]).filter((p) => !p.docOnly);
  const clusters = new Map<string, FigmaPage[]>();
  for (const p of pages) clusters.set(clusterOf(p.name), [...(clusters.get(clusterOf(p.name)) ?? []), p]);

  return (
    <main className="mx-auto max-w-5xl p-8 font-sans text-neutral-900">
      <h1 className="text-2xl font-semibold">Màn hình Figma</h1>
      <p className="mt-1 text-sm text-neutral-600">
        {pages.length} màn trong {clusters.size} cụm, dựng 1:1 ở chiều rộng 1440px. Bản tối có hậu tố -dk.
      </p>
      {[...clusters].map(([cluster, list]) => (
        <section key={cluster} className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            {cluster} · {list.length}
          </h2>
          <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
            {list.map((p) => (
              <li key={p.name}>
                <Link href={p.route} className="text-sm text-blue-700 hover:underline">
                  {p.name}
                </Link>
                <Link href={`/figma/${p.name}/spec`} className="ml-2 text-xs text-neutral-600 hover:underline">
                  MD
                </Link>
                <Link href={`/figma/${p.name}/code`} className="ml-2 text-xs text-neutral-600 hover:underline">
                  Code
                </Link>
                <span className="ml-2 text-xs text-neutral-400">{p.route}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};

export default FigmaIndexPage;
