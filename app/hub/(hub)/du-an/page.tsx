import { PageHead } from "@/components/qc/ui";
import { clusters, frames } from "@/lib/qc/data";

import { Projects } from "./projects";

export const maxDuration = 60;

const ProjectsPage = (): React.JSX.Element => (
  <>
    <PageHead title="Dự án" sub="Chọn dự án, hoặc thêm dự án mới từ link file Figma: chọn trang/Section → quét ra màn" />
    <Projects ics={{ screens: Object.keys(frames()).filter((c) => !c.endsWith("-DK")).length, clusters: clusters().length }} />
  </>
);

export default ProjectsPage;
