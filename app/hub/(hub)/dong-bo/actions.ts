"use server";

import { redirect } from "next/navigation";

import { requireRole } from "@/lib/qc/auth";
import { docsHash, forgetSync, mocPath, readMarks, type Mark } from "@/lib/qc/dong-bo";
import { requirementFiles } from "@/lib/qc/data";
import { writeFile } from "@/lib/qc/github";
import { hubProject } from "@/lib/qc/project";

/** "Đánh dấu đã đồng bộ": the requirement and its screens were compared and match; the mark is the new baseline. */
export async function markSynced(form: FormData): Promise<void> {
  const me = await requireRole("edit");
  // a server action renders no layout: load the project picked in the header and name it on every read
  const { slug } = await hubProject();
  const file = String(form.get("file"));
  const hash = docsHash(file, slug);
  if (!hash) throw new Error("Không thấy file requirement.");
  const { marks, sha } = await readMarks(slug);
  marks[file] = { docs: hash, at: new Date().toISOString(), by: me.name };
  await writeFile(mocPath(slug), `${JSON.stringify(marks, null, 1)}\n`, `Đồng bộ: ${me.name} đánh dấu ${file}`, sha);
  forgetSync(slug);
  const back = String(form.get("back") ?? "");
  redirect(back.startsWith("/hub/") ? back : `/hub/dong-bo?${String(form.get("q") ?? "")}`);
}

/** First baseline: every file without a mark gets one now (admin only). */
export async function markAllUnmarked(): Promise<void> {
  const me = await requireRole("admin");
  const { slug } = await hubProject();
  const { marks, sha } = await readMarks(slug);
  const at = new Date().toISOString();
  let n = 0;
  for (const f of requirementFiles(slug)) {
    const hash = docsHash(f.path, slug);
    if (marks[f.path] || !hash) continue;
    marks[f.path] = { docs: hash, at, by: me.name } satisfies Mark;
    n += 1;
  }
  if (n) await writeFile(mocPath(slug), `${JSON.stringify(marks, null, 1)}\n`, `Đồng bộ: ${me.name} đặt mốc đầu cho ${n} file`, sha);
  forgetSync(slug);
  redirect("/hub/dong-bo");
}
