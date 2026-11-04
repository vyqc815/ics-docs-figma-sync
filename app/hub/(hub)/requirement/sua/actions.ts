"use server";

import { requireRole, signedIn } from "@/lib/qc/auth";
import { REPO } from "@/lib/qc/github";

/**
 * Editing a QC requirement from the hub: the original file in qc/requirements is read from and committed to
 * GitHub (GITHUB_WRITE_TOKEN: Contents + Actions read/write on this repo). The commit starts requirements.yml
 * (template, codes, registry, Chat); deploy.yml puts it on the hub.
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

const safe = (file: string) => {
  if (!/^[\w\-./]+\.md$/.test(file) || file.includes("..")) throw new Error("Đường dẫn file không hợp lệ.");
  return `qc/requirements/${file}`;
};

export async function loadOriginal(file: string): Promise<{ text: string; sha: string }> {
  const res = await gh(`/contents/${safe(file)}?ref=main`);
  if (res.status === 404) throw new Error("Không thấy bản gốc của file này trong qc/requirements.");
  if (!res.ok) throw new Error(`GitHub trả lỗi ${res.status}.`);
  const j = (await res.json()) as { content: string; sha: string };
  return { text: Buffer.from(j.content, "base64").toString("utf-8"), sha: j.sha };
}

export async function saveOriginal(file: string, text: string, sha: string, note: string): Promise<{ sha: string; commit: string }> {
  const me = await requireRole("edit");
  const res = await gh(`/contents/${safe(file)}`, {
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
  return { sha: j.content.sha, commit: j.commit.html_url };
}

/** Puts the latest main on the hub now instead of at the next scheduled deploy. */
export async function deployNow(): Promise<void> {
  await requireRole("edit");
  const res = await gh(`/actions/workflows/deploy.yml/dispatches`, { method: "POST", body: JSON.stringify({ ref: "main" }) });
  if (!res.ok) throw new Error(`Không kích được deploy (GitHub ${res.status}).`);
}
