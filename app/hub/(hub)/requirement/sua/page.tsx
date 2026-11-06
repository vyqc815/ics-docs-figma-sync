import { notFound } from "next/navigation";

import { PageHead, Panel } from "@/components/qc/ui";
import Link from "next/link";

import { can, session } from "@/lib/qc/auth";
import { baDocsMode } from "@/lib/qc/store";

import { Editor } from "./editor";

/** Edit a QC requirement on the hub (original file, committed to GitHub on save). */
const EditPage = async ({ searchParams }: { searchParams: Promise<{ f?: string }> }): Promise<React.JSX.Element> => {
  const { f = "" } = await searchParams;
  if (!f.endsWith(".md")) notFound();
  return (
    <>
      <PageHead back="/hub/requirement" title="Sửa requirement" sub={f} />
      {baDocsMode() ? (
        <Panel>
          QC viết requirement ở repo docs, nhánh stable. Hub tự lấy bản mới mỗi 5 phút, nên không sửa ở đây (sửa sẽ bị ghi đè).{" "}
          <Link href="/hub/huong-dan" className="text-(--hub-accent) hover:underline">
            Xem luồng viết requirement →
          </Link>
        </Panel>
      ) : can(await session(), "edit") ? <Editor file={f} /> : <Panel>Tài khoản dev chỉ được xem. Cần quyền QC hoặc admin để sửa requirement.</Panel>}
    </>
  );
};

export default EditPage;
