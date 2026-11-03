import { notFound } from "next/navigation";

import { PageHead } from "@/components/qc/ui";

import { Editor } from "./editor";

/** Edit a QC requirement on the hub (original file, committed to GitHub on save). */
const EditPage = async ({ searchParams }: { searchParams: Promise<{ f?: string }> }): Promise<React.JSX.Element> => {
  const { f = "" } = await searchParams;
  if (!f.endsWith(".md")) notFound();
  return (
    <>
      <PageHead back="/hub/requirement" title="Sửa requirement" sub={f} />
      <Editor file={f} />
    </>
  );
};

export default EditPage;
