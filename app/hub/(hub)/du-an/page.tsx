import { PageHead } from "@/components/qc/ui";
import { clusters, frames } from "@/lib/qc/data";

import { listProjects } from "./actions";
import { Projects } from "./projects";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

const ProjectsPage = async (): Promise<React.JSX.Element> => {
  const initial = await listProjects().catch(() => []);
  return (
    <>
      <PageHead title="Dự án" sub="Chọn dự án, hoặc thêm dự án mới từ link file Figma: chọn trang/Section → quét ra màn → đề xuất mã" />
      <Projects initial={initial} ics={{ screens: Object.keys(frames()).filter((c) => !c.endsWith("-DK")).length, clusters: clusters().length }} />
    </>
  );
};

export default ProjectsPage;
