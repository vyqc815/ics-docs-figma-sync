import { notFound } from "next/navigation";

import { RequirementMarkdown } from "@/components/qc/markdown";
import { Panel } from "@/components/qc/ui";
import { requirementMarkdown } from "@/lib/qc/data";

/** A requirement file outside every cluster (screens not drawn on Figma yet), read on its own. */
const RequirementView = async ({ searchParams }: { searchParams: Promise<{ f?: string }> }): Promise<React.JSX.Element> => {
  const { f = "" } = await searchParams;
  const text = f.endsWith(".md") ? requirementMarkdown(f) : null;
  if (!text) notFound();
  return (
    <Panel className="max-w-5xl">
      <p className="mb-4 font-mono text-xs text-(--qc-faint)">docs/requirements/{f}</p>
      <RequirementMarkdown file={f} text={text} />
    </Panel>
  );
};

export default RequirementView;
