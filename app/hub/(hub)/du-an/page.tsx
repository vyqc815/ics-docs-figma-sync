import { PageHead } from "@/components/qc/ui";
import { DEFAULT_PROJECT } from "@/lib/projects";
import { can, session } from "@/lib/qc/auth";
import { clusters, frames } from "@/lib/qc/data";

import { listProjects } from "./actions";
import { Projects } from "./projects";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

const ProjectsPage = async (): Promise<React.JSX.Element> => {
  const initial = (await listProjects().catch(() => [])).filter((p) => p.slug !== DEFAULT_PROJECT);
  return (
    <>
      <PageHead title="Dự án" sub="Chọn dự án, hoặc thêm dự án mới từ link file Figma + thư mục docs trong repo: chọn trang/Section → quét ra màn → mở trong Hub" />
      <Projects initial={initial} canEdit={can(await session(), "edit")} ics={{ screens: Object.keys(frames(DEFAULT_PROJECT)).filter((c) => !c.endsWith("-DK")).length, clusters: clusters(DEFAULT_PROJECT).length }} />
    </>
  );
};

export default ProjectsPage;
