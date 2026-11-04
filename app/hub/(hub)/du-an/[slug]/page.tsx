import { notFound } from "next/navigation";

import { PageHead } from "@/components/qc/ui";

import { listProjects, projectScreens, proposalState } from "../actions";
import { ProjectView } from "./view";

export const dynamic = "force-dynamic";

/** One project: its screens (live from Figma) and the code proposal. */
const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }): Promise<React.JSX.Element> => {
  const { slug } = await params;
  const project = (await listProjects()).find((p) => p.slug === slug);
  if (!project) notFound();
  const [screens, state] = await Promise.all([projectScreens(slug), proposalState(slug)]);
  const rows = state.proposal?.frames ?? [];
  return (
    <>
      <PageHead back="/hub/du-an" title={project.name} sub={`${screens.length} màn · mã dự án ${project.code} · file “${project.fileName}”`} />
      <ProjectView
        project={project}
        screens={screens}
        proposal={{
          running: state.running,
          lastRun: state.lastRun,
          total: rows.length,
          review: rows.filter((r) => r.mucTin === "cần xem" && !r.duyet).length,
          codes: Object.fromEntries(rows.map((r) => [r.nodeId, r.maDeXuat])),
        }}
      />
    </>
  );
};

export default ProjectPage;
