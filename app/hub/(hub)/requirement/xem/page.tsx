import { notFound } from "next/navigation";

import { RequirementMarkdown } from "@/components/qc/markdown";
import { BackButton } from "@/components/qc/back-button";
import { Panel } from "@/components/qc/ui";
import { requirementMarkdown } from "@/lib/qc/data";
import { hubProject } from "@/lib/qc/project";

/** A requirement file outside every cluster (screens not drawn on Figma yet), read on its own. */
const RequirementView = async ({
  searchParams,
}: {
  searchParams: Promise<{ f?: string }>;
}): Promise<React.JSX.Element> => {
  const { f = "" } = await searchParams;
  await hubProject();
  const text = f.endsWith(".md") ? requirementMarkdown(f) : null;
  if (!text) notFound();
  return (
    <>
      <div className="mb-4">
        <BackButton fallback="/hub/requirement" />
      </div>
      <Panel className="max-w-5xl">
        <p className="mb-4 font-mono text-xs text-(--hub-faint)">docs/requirements/{f}</p>
        <RequirementMarkdown file={f} text={text} />
      </Panel>
    </>
  );
};

export default RequirementView;
