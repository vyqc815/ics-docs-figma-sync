import { readFileSync } from "node:fs";
import { join } from "node:path";

import { RequirementMarkdown } from "@/components/qc/markdown";
import { Panel } from "@/components/qc/ui";

/** The code convention (docs/he-thong-ma/quy-uoc-web-qc.md) as the team reads it. */
const RulesPage = (): React.JSX.Element => (
  <Panel className="max-w-4xl">
    <RequirementMarkdown file="he-thong-ma/quy-uoc-web-qc.md" text={readFileSync(join(process.cwd(), "docs", "he-thong-ma", "quy-uoc-web-qc.md"), "utf-8")} />
  </Panel>
);

export default RulesPage;
