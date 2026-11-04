import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Accounts of the QC hub (/hub). Users live in docs/hub/users.json of this (private) repo, password as scrypt
 * hashes, written through the GitHub API by an admin on /hub/tai-khoan. The team password (QC_WEB_PASSWORD on
 * the server) still signs in, as admin "admin": the way in before any account exists.
 *
 * Cookie: base64url(JSON {n, r, e}) + "." + HMAC-SHA256(QC_WEB_PASSWORD, "ics-qc-hub|" + payload). Changing
 * QC_WEB_PASSWORD signs everyone out. proxy.ts checks the same signature before any hub page renders.
 */
export const COOKIE = "qc_hub";
export const MAX_AGE = 60 * 60 * 24 * 30;

export type Role = "admin" | "qc" | "dev";
export const ROLES: Record<Role, string> = {
  admin: "Admin: mọi quyền, quản lý tài khoản",
  qc: "QC: sửa requirement, đánh dấu đồng bộ, dự án",
  dev: "Dev: chỉ xem",
};
export type Session = { name: string; role: Role };
export type User = { name: string; role: Role; salt: string; hash: string };

const secret = (): string | undefined => process.env.QC_WEB_PASSWORD;
const sig = (payload: string, key: string): string => createHmac("sha256", key).update(`ics-qc-hub|${payload}`).digest("hex");
const same = (a: string, b: string): boolean => {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
};

export const passwordSet = (): boolean => !!secret();

export function hashPassword(password: string, salt = randomBytes(16).toString("hex")): { salt: string; hash: string } {
  return { salt, hash: scryptSync(password, salt, 32).toString("hex") };
}

/** Cookie value for a signed-in user. */
export function token(s: Session): string {
  const key = secret();
  if (!key) throw new Error("Server chưa có QC_WEB_PASSWORD.");
  const payload = Buffer.from(JSON.stringify({ n: s.name, r: s.role, e: Math.floor(Date.now() / 1000) + MAX_AGE })).toString("base64url");
  return `${payload}.${sig(payload, key)}`;
}

/** Name + password against the user list; an empty name with the team password is the admin way in. */
export function checkLogin(name: string, password: string, users: User[]): Session | null {
  const key = secret();
  if (!key || !password) return null;
  const n = name.trim().toLowerCase();
  if ((!n || n === "admin") && same(password, key)) return { name: "admin", role: "admin" };
  const u = users.find((x) => x.name.toLowerCase() === n);
  if (!u) return null;
  return same(hashPassword(password, u.salt).hash, u.hash) ? { name: u.name, role: u.role } : null;
}

export async function session(): Promise<Session | null> {
  const key = secret();
  const value = (await cookies()).get(COOKIE)?.value;
  if (!key || !value) return null;
  const [payload, s] = value.split(".");
  if (!payload || !s || !same(s, sig(payload, key))) return null;
  try {
    const { n, r, e } = JSON.parse(Buffer.from(payload, "base64url").toString()) as { n: string; r: Role; e: number };
    return e > Date.now() / 1000 && r in ROLES ? { name: n, role: r } : null;
  } catch {
    return null;
  }
}

export async function signedIn(): Promise<boolean> {
  return !!(await session());
}

/** What a role may do: dev only reads; qc edits requirements, marks sync, runs projects; admin also manages accounts. */
export const can = (s: Session | null, what: "edit" | "admin"): boolean => !!s && (s.role === "admin" || (what === "edit" && s.role === "qc"));

/** For server actions that write: throws unless the signed-in user may. */
export async function requireRole(what: "edit" | "admin"): Promise<Session> {
  const s = await session();
  if (!s) throw new Error("Cần đăng nhập Hub.");
  if (!can(s, what)) throw new Error(what === "admin" ? "Chỉ admin được làm việc này." : "Tài khoản dev chỉ được xem.");
  return s;
}
