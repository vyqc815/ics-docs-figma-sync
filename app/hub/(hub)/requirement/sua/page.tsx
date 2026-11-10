import { notFound } from "next/navigation";

import { PageHead, Panel } from "@/components/qc/ui";
import Link from "next/link";

import { can, session } from "@/lib/qc/auth";
import { baDocsMode } from "@/lib/qc/store";
import { isLive, originalsDir } from "@/lib/projects";
import { hubProject } from "@/lib/qc/project";

import { Editor } from "./editor";

/** Edit a QC requirement on the hub (original file, committed to GitHub on save). */
const EditPage = async ({ searchParams }: { searchParams: Promise<{ f?: string }> }): Promise<React.JSX.Element> => {
  const { f = "" } = await searchParams;
  if (!f.endsWith(".md")) notFound();
  const project = await hubProject();
  const live = isLive(project);
  return (
    <>
      <PageHead back="/hub/requirement" title="Sửa requirement" sub={f} />
      {baDocsMode() && !live ? (
        <Panel>
          QC viết requirement ở repo docs, nhánh stable. Hub tự lấy bản mới mỗi 5 phút, nên không sửa ở đây (sửa sẽ bị ghi đè).{" "}
          <Link href="/hub/huong-dan" className="text-(--hub-accent) hover:underline">
            Xem luồng viết requirement →
          </Link>
        </Panel>
      ) : can(await session(), "edit") ? <Editor file={f} live={live} folder={live ? originalsDir(project) : "qc/requirements"} project={live ? project.slug : undefined} /> : <Panel>Tài khoản dev chỉ được xem. Cần quyền QC hoặc admin để sửa requirement.</Panel>}
    </>
  );
};

export default EditPage;
