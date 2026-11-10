import { Suspense, type ReactNode } from "react";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Logo } from "@/components/qc/logo";
import { QcNav } from "@/components/qc/nav";
import { ProjectPicker } from "@/components/qc/project-picker";
import { DocTree, type TreeGroup } from "@/components/qc/doc-tree";
import { listProjects } from "@/lib/projects";
import { session, signedIn } from "@/lib/qc/auth";
import { syncRowsCached, type State } from "@/lib/qc/dong-bo";
import { indexInfo, requirementFiles, unmappedPages } from "@/lib/qc/data";
import { hubProject } from "@/lib/qc/project";
import "../hub.css";

export const metadata = { title: "QC PLS", robots: { index: false } };
export const dynamic = "force-dynamic";

const DOT: Record<State, string> = {
  xanh: "bg-(--hub-green)",
  cam: "bg-(--hub-amber)",
  lam: "bg-(--hub-accent)",
  do: "bg-(--hub-red)",
  chua: "bg-(--hub-faint)",
};

/** Shell of the QC hub: sign-in gate, header, menu + document tree. */
const HubLayout = async ({ children }: { children: ReactNode }): Promise<React.JSX.Element> => {
  if (!(await signedIn())) {
    const path = (await headers()).get("x-invoke-path") ?? "/hub";
    redirect(`/hub/dang-nhap?next=${encodeURIComponent(path)}`);
  }
  const project = await hubProject();
  const info = indexInfo();
  const unmapped = unmappedPages().length;
  const updated = info.generatedAt ? new Date(info.generatedAt).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }) : "—";

  const me = await session();
  const rows = await syncRowsCached().catch(() => []);
  const state = new Map(rows.map((r) => [r.file, r.state]));
  const groups: TreeGroup[] = [...Map.groupBy(requirementFiles(), (f) => f.path.split("/")[0])].map(([folder, files]) => ({
    folder,
    files: files.map((f) => ({ path: f.path, title: f.title, prefix: f.prefix, dot: DOT[state.get(f.path) ?? "chua"] })),
  }));

  // Layout of the ics-docs-figma-sync docs site (header across the top, menu + document tree on the left,
  // content beside it), drawn in the hub's dark violet style.
  return (
    <div className="hub flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 flex flex-wrap items-center gap-x-6 gap-y-1 border-b border-(--hub-line)/60 bg-(--hub-shell)/95 px-5 py-3 backdrop-blur">
        <Link href="/hub" className="flex items-center gap-3">
          <Logo className="h-7 w-auto" />
          <span className="hidden text-[13px] text-(--hub-muted) md:block">Figma · Requirement · Testcase</span>
        </Link>
        <ProjectPicker current={project.slug} projects={listProjects().map(({ slug, name }) => ({ slug, name }))} />
        <span className="flex-1" />
        <p className="hidden text-[13px] text-(--hub-muted) lg:block">
          Requirement <span className="text-(--hub-text)">{info.version?.slice(0, 8) ?? "—"}</span> · {updated}
        </p>
        <p className="text-[13px] text-(--hub-muted)">
          Figma: <span className="text-(--hub-green)">Live</span>
        </p>
        {me && (
          <Link href="/hub/tai-khoan" className="flex items-center gap-2 text-[13px] hover:text-(--hub-accent)">
            <span className="grid size-7 place-items-center rounded-full bg-(--hub-accent-soft) font-semibold text-(--hub-accent) uppercase">{me.name[0]}</span>
            <span className="hidden sm:block">{me.name}</span>
            <span className="rounded-full bg-(--hub-panel-2) px-2 py-0.5 text-[11px] text-(--hub-muted)">{me.role}</span>
          </Link>
        )}
      </header>

      <div className="flex min-h-0 flex-1 flex-col bg-(--hub-shell) lg:flex-row">
        <aside className="hub-scroll shrink-0 border-(--hub-line)/60 px-3 py-5 lg:sticky lg:top-[57px] lg:h-[calc(100vh-57px)] lg:w-[280px] lg:overflow-y-auto lg:border-r">
          <QcNav badges={{ "/hub/chua-gan-ma": unmapped }} />
          <Suspense>
            <DocTree groups={groups} />
          </Suspense>
        </aside>
        <main className="min-w-0 flex-1 px-5 py-7 lg:px-8">{children}</main>
      </div>
    </div>
  );
};

export default HubLayout;
