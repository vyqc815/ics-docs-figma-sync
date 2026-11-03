import Link from "next/link";

import { LiveShot } from "@/components/qc/ui";
import { clusters, registry, stats } from "@/lib/qc/data";

/** Cluster cards: first main screen as a live thumbnail, then counts. */
export function ClusterGrid({ onlyWithRequirement = false }: { onlyWithRequirement?: boolean }): React.JSX.Element {
  const list = clusters()
    .map((c) => ({ ...c, r: registry(c.name)! }))
    .filter((c) => !onlyWithRequirement || c.r.requirementFiles.length > 0)
    .map((c) => ({ ...c, s: stats(c.r), cover: Object.values(c.r.screens).find((s) => s.kind === "man-chinh" && s.inFigma && !s.id.endsWith("-DK")) }));
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {list.map((c) => (
        <Link key={c.name} href={`/qc/cum/${c.name}`} className="group overflow-hidden rounded-2xl bg-(--qc-panel-2) transition-colors hover:bg-(--qc-panel-3)">
          <div className="aspect-[16/9] overflow-hidden bg-(--qc-panel-3)">{c.cover && <LiveShot code={c.cover.id} className="h-full rounded-none" />}</div>
          <div className="p-4">
            <p className="line-clamp-2 min-h-[40px] text-[15px] leading-5 font-medium group-hover:text-(--qc-accent)">{c.title}</p>
            <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[11px] text-(--qc-muted)">
              {[
                ["Màn", c.s.screens],
                ["File", c.s.files],
                ["Item", c.s.items],
                ["Case", c.s.testcases],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-(--qc-panel) py-1.5">
                  <p className="text-[14px] font-semibold text-(--qc-text)">{v}</p>
                  {k}
                </div>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
