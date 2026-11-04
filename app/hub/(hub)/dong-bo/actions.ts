"use server";

import { redirect } from "next/navigation";

import { requireRole } from "@/lib/qc/auth";
import { MOC, docsHash, forgetSync, readMarks, type Mark } from "@/lib/qc/dong-bo";
import { requirementFiles } from "@/lib/qc/data";
import { writeFile } from "@/lib/qc/github";

/** "Đánh dấu đã đồng bộ": the requirement and its screens were compared and match; the mark is the new baseline. */
export async function markSynced(form: FormData): Promise<void> {
  const me = await requireRole("edit");
  const file = String(form.get("file"));
  const hash = docsHash(file);
  if (!hash) throw new Error("Không thấy file requirement.");
  const { marks, sha } = await readMarks();
  marks[file] = { docs: hash, at: new Date().toISOString(), by: me.name };
  await writeFile(MOC, `${JSON.stringify(marks, null, 1)}\n`, `Đồng bộ: ${me.name} đánh dấu ${file}`, sha);
  forgetSync();
  const back = String(form.get("back") ?? "");
  redirect(back.startsWith("/hub/") ? back : `/hub/dong-bo?${String(form.get("q") ?? "")}`);
}

/** First baseline: every file without a mark gets one now (admin only). */
export async function markAllUnmarked(): Promise<void> {
  const me = await requireRole("admin");
  const { marks, sha } = await readMarks();
  const at = new Date().toISOString();
  let n = 0;
  for (const f of requirementFiles()) {
    const hash = docsHash(f.path);
    if (marks[f.path] || !hash) continue;
    marks[f.path] = { docs: hash, at, by: me.name } satisfies Mark;
    n += 1;
  }
  if (n) await writeFile(MOC, `${JSON.stringify(marks, null, 1)}\n`, `Đồng bộ: ${me.name} đặt mốc đầu cho ${n} file`, sha);
  forgetSync();
  redirect("/hub/dong-bo");
}
