"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronRight } from "lucide-react";

export type TreeFile = { path: string; title: string; prefix: string; dot: string };
export type TreeGroup = { folder: string; files: TreeFile[] };

const label = (folder: string): string => folder.replace(/_requirements?$/, "").replace(/[_-]/g, " ");

/**
 * The requirement documents under the menu, folder by folder like the docs site of ics-docs-figma-sync:
 * a coloured dot per file for its sync state, the open file highlighted, its folder opened.
 */
export function DocTree({ groups }: { groups: TreeGroup[] }): React.JSX.Element {
  const path = usePathname();
  const f = useSearchParams().get("f") ?? "";
  const open = path === "/hub/docs" ? f : "";
  return (
    <div className="mt-6 hidden border-t border-(--hub-line) pt-5 lg:block">
      <p className="mb-2 px-4 text-[11px] font-semibold tracking-wider text-(--hub-faint) uppercase">Tài liệu</p>
      <div className="space-y-0.5">
        {groups.map((g) => (
          <details key={g.folder} open={g.files.some((f) => f.path === open)} className="group">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl px-4 py-2 text-[13px] font-medium text-(--hub-text) capitalize hover:bg-(--hub-panel) [&::-webkit-details-marker]:hidden">
              <ChevronRight className="size-3.5 shrink-0 text-(--hub-faint) transition-transform group-open:rotate-90" />
              <span className="min-w-0 flex-1 truncate">{label(g.folder)}</span>
              <span className="text-[11px] text-(--hub-faint)">{g.files.length}</span>
            </summary>
            <ul className="ml-[22px] border-l border-(--hub-line) py-1 pl-2">
              {g.files.map((f) => {
                const active = f.path === open;
                return (
                  <li key={f.path}>
                    <Link
                      href={`/hub/docs?f=${encodeURIComponent(f.path)}`}
                      title={f.title}
                      className={`relative flex items-center gap-2 rounded-lg py-1.5 pr-3 pl-2 text-[12.5px] leading-snug ${
                        active ? "text-(--hub-accent)" : "text-(--hub-muted) hover:bg-(--hub-panel) hover:text-(--hub-text)"
                      }`}
                    >
                      <span className={`size-1.5 shrink-0 rounded-full ${f.dot}`} />
                      <span className="line-clamp-2">{f.title}</span>
                      {active && <span className="absolute top-1 -right-[13px] bottom-1 hidden w-[3px] rounded-full bg-(--hub-accent) lg:block" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}
