"use server";

import { redirect } from "next/navigation";

import { requireRole, session } from "@/lib/qc/auth";
import { randomBytes } from "node:crypto";

import { COMMENTS, DOC_META, PROGRESS, updateJson, type Comments, type DocMeta, type Progress, type ProgressState } from "@/lib/qc/store";

const tagOf = (s: string): string =>
  s
    .trim()
    .replace(/^#/, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}_-]/gu, "")
    .slice(0, 30);

/** Tags of a requirement file, typed as "course, homework" (QC / admin). */
export async function saveTags(form: FormData): Promise<void> {
  const me = await requireRole("edit");
  const file = String(form.get("file"));
  const tags = [...new Set(String(form.get("tags") ?? "").split(",").map(tagOf).filter(Boolean))].slice(0, 12);
  await updateJson<DocMeta>(DOC_META, {}, (m) => ({ ...m, [file]: { ...m[file], tags } }), `Tag ${file}: ${tags.join(", ") || "(bỏ hết)"} · ${me.name}`);
  redirect(`/hub/docs?f=${encodeURIComponent(file)}`);
}

/** A developer marks their own progress on a screen; "" clears it. Everyone signed in may (it is their own row). */
export async function setProgress(form: FormData): Promise<void> {
  const me = await session();
  if (!me) redirect("/hub/dang-nhap");
  const code = String(form.get("code"));
  const s = String(form.get("s")) as ProgressState | "";
  await updateJson<Progress>(
    PROGRESS,
    {},
    (p) => {
      const row = { ...p[code] };
      if (s === "dang" || s === "xong") row[me.name] = { s, at: new Date().toISOString() };
      else delete row[me.name];
      return { ...p, [code]: row };
    },
    `Tiến độ ${code}: ${me.name} ${s || "bỏ đánh dấu"}`,
  );
  const back = String(form.get("back") ?? "");
  redirect(back.startsWith("/hub/") ? back : `/hub/man/${code}`);
}

/** A comment on a requirement for the BA (anyone signed in). */
export async function addComment(form: FormData): Promise<void> {
  const me = await session();
  if (!me) redirect("/hub/dang-nhap");
  const file = String(form.get("file"));
  const text = String(form.get("text") ?? "").trim().slice(0, 4000);
  if (text)
    await updateJson<Comments>(
      COMMENTS,
      {},
      (c) => ({ ...c, [file]: [...(c[file] ?? []), { id: randomBytes(4).toString("hex"), by: me.name, at: new Date().toISOString(), text }] }),
      `Góp ý ${file} · ${me.name}`,
    );
  redirect(`/hub/docs?f=${encodeURIComponent(file)}#gop-y`);
}

/** Mark a comment as handled (QC / admin), once the BA changed the doc. */
export async function resolveComment(form: FormData): Promise<void> {
  const me = await requireRole("edit");
  const file = String(form.get("file"));
  const id = String(form.get("id"));
  await updateJson<Comments>(
    COMMENTS,
    {},
    (c) => ({ ...c, [file]: (c[file] ?? []).map((x) => (x.id === id ? { ...x, done: { by: me.name, at: new Date().toISOString() } } : x)) }),
    `Góp ý ${file}: đã xử lý · ${me.name}`,
  );
  redirect(`/hub/docs?f=${encodeURIComponent(file)}#gop-y`);
}
