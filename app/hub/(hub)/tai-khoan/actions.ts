"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { COOKIE, ROLES, hashPassword, requireRole, session, type Role, type User } from "@/lib/qc/auth";
import { readUsers, writeUsers } from "@/lib/qc/users";

/** Account management of the hub: admin adds, changes, removes accounts; everyone changes their own password. */
const back = (q: string): never => redirect(`/hub/tai-khoan?${q}`);
const NAME = /^[a-z0-9._-]{2,32}$/;

async function edit(change: (users: User[]) => User[] | string, message: string): Promise<void> {
  const { users, sha } = await readUsers();
  const next = change(users);
  if (typeof next === "string") back(`loi=${encodeURIComponent(next)}`);
  await writeUsers(next as User[], sha, message);
}

export async function addUser(form: FormData): Promise<void> {
  await requireRole("admin");
  const name = String(form.get("name") ?? "").trim().toLowerCase();
  const role = String(form.get("role")) as Role;
  const password = String(form.get("password") ?? "");
  if (!NAME.test(name) || name === "admin") back(`loi=${encodeURIComponent("Tên 2–32 ký tự: chữ thường, số, . _ -; không dùng admin.")}`);
  if (!(role in ROLES)) back("loi=Quy%E1%BB%81n%20kh%C3%B4ng%20%C4%91%C3%BAng.");
  if (password.length < 8) back(`loi=${encodeURIComponent("Mật khẩu ít nhất 8 ký tự.")}`);
  await edit((u) => (u.some((x) => x.name === name) ? `Đã có tài khoản ${name}.` : [...u, { name, role, ...hashPassword(password) }]), `Hub: thêm tài khoản ${name} (${role})`);
  back(`ok=${encodeURIComponent(`Đã thêm ${name}.`)}`);
}

export async function setRole(form: FormData): Promise<void> {
  await requireRole("admin");
  const name = String(form.get("name"));
  const role = String(form.get("role")) as Role;
  if (!(role in ROLES)) back("loi=Quy%E1%BB%81n%20kh%C3%B4ng%20%C4%91%C3%BAng.");
  await edit((u) => u.map((x) => (x.name === name ? { ...x, role } : x)), `Hub: ${name} → ${role}`);
  back(`ok=${encodeURIComponent(`${name}: ${role}.`)}`);
}

export async function resetPassword(form: FormData): Promise<void> {
  await requireRole("admin");
  const name = String(form.get("name"));
  const password = String(form.get("password") ?? "");
  if (password.length < 8) back(`loi=${encodeURIComponent("Mật khẩu ít nhất 8 ký tự.")}`);
  await edit((u) => u.map((x) => (x.name === name ? { ...x, ...hashPassword(password) } : x)), `Hub: đặt lại mật khẩu ${name}`);
  back(`ok=${encodeURIComponent(`Đã đặt lại mật khẩu ${name}.`)}`);
}

export async function removeUser(form: FormData): Promise<void> {
  await requireRole("admin");
  const name = String(form.get("name"));
  await edit((u) => u.filter((x) => x.name !== name), `Hub: xoá tài khoản ${name}`);
  back(`ok=${encodeURIComponent(`Đã xoá ${name}. Phiên đang mở của họ hết hạn sau tối đa 30 ngày, đổi QC_WEB_PASSWORD để đăng xuất ngay.`)}`);
}

export async function changeOwnPassword(form: FormData): Promise<void> {
  const me = await session();
  if (!me) redirect("/hub/dang-nhap");
  if (me.name === "admin") back(`loi=${encodeURIComponent("Tài khoản admin dùng mật khẩu team (QC_WEB_PASSWORD), đổi trong biến môi trường của server.")}`);
  const password = String(form.get("password") ?? "");
  if (password.length < 8) back(`loi=${encodeURIComponent("Mật khẩu ít nhất 8 ký tự.")}`);
  await edit((u) => u.map((x) => (x.name === me.name ? { ...x, ...hashPassword(password) } : x)), `Hub: ${me.name} đổi mật khẩu`);
  back(`ok=${encodeURIComponent("Đã đổi mật khẩu.")}`);
}

export async function logout(): Promise<void> {
  (await cookies()).delete({ name: COOKIE, path: "/hub" });
  redirect("/hub/dang-nhap");
}
