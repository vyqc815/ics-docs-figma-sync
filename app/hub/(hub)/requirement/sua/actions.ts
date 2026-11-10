"use server";

import { dataDirs, isLive } from "@/lib/projects";
import { requireRole, signedIn } from "@/lib/qc/auth";
import { REPO } from "@/lib/qc/github";
import { hubProject } from "@/lib/qc/project";
import { primeLive } from "@/lib/qc/remote";

/**
 * Editing a requirement from the hub, for the project picked in the header. ICS: the QC original in
 * qc/requirements, committed to GitHub (GITHUB_WRITE_TOKEN: Contents + Actions read/write on this repo); the
 * commit starts requirements.yml (template, codes, registry, Chat) and deploy.yml puts it on the hub. A project
 * added from the hub: the file in its docs folder, which the hub reads live, so it shows at once.
 */
async function gh(path: string, init?: RequestInit): Promise<Response> {
  if (!(await signedIn())) throw new Error("Cần đăng nhập Hub.");
  const token = process.env.GITHUB_WRITE_TOKEN;
  if (!token) throw new Error("Server chưa có GITHUB_WRITE_TOKEN: chưa lưu được lên GitHub.");
  return fetch(`https://api.github.com/repos/${REPO}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", ...(init?.headers ?? {}) },
    cache: "no-store",
  });
}

const safe = async (file: string): Promise<{ path: string; dir: string; live: boolean }> => {
  if (!/^[\w\-./]+\.md$/.test(file) || file.includes("..")) throw new Error("Đường dẫn file không hợp lệ.");
  const p = await hubProject();
  const dir = isLive(p) ? dataDirs(p).requirements : "qc/requirements";
  return { path: `${dir}/${file}`, dir, live: isLive(p) };
};
const encode = (path: string) => path.split("/").map(encodeURIComponent).join("/");

export async function loadOriginal(file: string): Promise<{ text: string; sha: string }> {
  const { path, dir } = await safe(file);
  const res = await gh(`/contents/${encode(path)}?ref=main`);
  if (res.status === 404) throw new Error(`Không thấy bản gốc của file này trong ${dir}.`);
  if (!res.ok) throw new Error(`GitHub trả lỗi ${res.status}.`);
  const j = (await res.json()) as { content: string; sha: string };
  return { text: Buffer.from(j.content, "base64").toString("utf-8"), sha: j.sha };
}

export async function saveOriginal(file: string, text: string, sha: string, note: string): Promise<{ sha: string; commit: string; live: boolean }> {
  const me = await requireRole("edit");
  const { path, live } = await safe(file);
  const res = await gh(`/contents/${encode(path)}`, {
    method: "PUT",
    body: JSON.stringify({
      message: `${me.name} sửa requirement trên Hub: ${file}${note ? ` — ${note}` : ""}`,
      content: Buffer.from(text, "utf-8").toString("base64"),
      sha,
      branch: "main",
    }),
  });
  if (res.status === 409) throw new Error("File vừa được người khác sửa. Tải lại trang để lấy bản mới rồi sửa tiếp.");
  if (!res.ok) throw new Error(`Lưu thất bại (GitHub ${res.status}).`);
  const j = (await res.json()) as { content: { sha: string }; commit: { html_url: string } };
  // a hub-added project reads its docs live: rebuild now so the next page shows the saved text
  if (live) await primeLive(await hubProject(), true).catch(() => undefined);
  return { sha: j.content.sha, commit: j.commit.html_url, live };
}

/** Puts the latest main on the hub now instead of at the next scheduled deploy. */
export async function deployNow(): Promise<void> {
  await requireRole("edit");
  const res = await gh(`/actions/workflows/deploy.yml/dispatches`, { method: "POST", body: JSON.stringify({ ref: "main" }) });
  if (!res.ok) throw new Error(`Không kích được deploy (GitHub ${res.status}).`);
}
