import type { User } from "@/lib/qc/auth";
import { ghUnchecked, writeFile } from "@/lib/qc/github";

/** docs/hub/users.json in this private repo: name, role, scrypt salt + hash. Read at sign-in, so without the session check. */
export const USERS = "docs/hub/users.json";

export async function readUsers(): Promise<{ users: User[]; sha?: string }> {
  if (!process.env.GITHUB_WRITE_TOKEN) return { users: [] };
  const res = await ghUnchecked(`/contents/${USERS}?ref=main`);
  if (res.status === 404 || !res.ok) return { users: [] };
  const j = (await res.json()) as { content: string; sha: string };
  return { users: JSON.parse(Buffer.from(j.content, "base64").toString("utf-8")) as User[], sha: j.sha };
}

/** Callers check the role first (requireRole). */
export async function writeUsers(users: User[], sha: string | undefined, message: string): Promise<void> {
  await writeFile(USERS, `${JSON.stringify(users, null, 1)}\n`, message, sha);
}
