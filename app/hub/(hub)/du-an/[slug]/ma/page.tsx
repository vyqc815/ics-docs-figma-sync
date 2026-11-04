import { notFound } from "next/navigation";

import { PageHead } from "@/components/qc/ui";

import { listProjects, proposalState } from "../../actions";
import { Review } from "./review";

export const dynamic = "force-dynamic";

/** Review the proposed codes, then send them to design. */
const ReviewPage = async ({ params }: { params: Promise<{ slug: string }> }): Promise<React.JSX.Element> => {
  const { slug } = await params;
  const project = (await listProjects()).find((p) => p.slug === slug);
  const state = await proposalState(slug);
  if (!project || !state.proposal || !state.sha) notFound();
  return (
    <>
      <PageHead back={`/hub/du-an/${slug}`} title={`Đề xuất mã · ${project.name}`} sub={`${state.proposal.frames.length} frame · file “${project.fileName}”`} />
      <Review slug={slug} initial={state.proposal} sha={state.sha} />
    </>
  );
};

export default ReviewPage;
