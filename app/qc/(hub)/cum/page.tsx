import { ClusterGrid } from "@/components/qc/cluster-grid";
import { PageHead } from "@/components/qc/ui";
import { clusters } from "@/lib/qc/data";

const ClustersPage = (): React.JSX.Element => (
  <>
    <PageHead title="Cụm màn" sub={`${clusters().length} cụm · mỗi cụm gom màn Figma, file requirement, item và testcase cùng chủ đề`} />
    <ClusterGrid />
  </>
);

export default ClustersPage;
