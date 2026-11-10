"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { COOKIE, ROLES, hashPassword, requireRole, session, type Role, type User } from "@/lib/qc/auth";
import { NOTIFY, WEBHOOK, readJson, updateJson, type NotifySettings } from "@/lib/qc/store";
import { readUsers, writeUsers } from "@/lib/qc/users";
import { withBase } from "@/lib/base-path";

/** Account management of the hub: admin adds, changes, removes accounts; everyone changes their own password. */
const back = (q: string): never => redirect(`/hub/tai-khoan?${q}`);
const NAME = /^[a-z0-9._+@-]{2,64}$/;

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
  if (!NAME.test(name) || name === "admin") back(`loi=${encodeURIComponent("Tên đăng nhập là email (2–64 ký tự, không dùng admin).")}`);
  if (!(role in ROLES)) back("loi=Quy%E1%BB%81n%20kh%C3%B4ng%20%C4%91%C3%BAng.");
  if (password.length < 4) back(`loi=${encodeURIComponent("Mật khẩu ít nhất 4 ký tự.")}`);
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
  if (password.length < 4) back(`loi=${encodeURIComponent("Mật khẩu ít nhất 4 ký tự.")}`);
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
  if (password.length < 4) back(`loi=${encodeURIComponent("Mật khẩu ít nhất 4 ký tự.")}`);
  await edit((u) => u.map((x) => (x.name === me.name ? { ...x, ...hashPassword(password) } : x)), `Hub: ${me.name} đổi mật khẩu`);
  back(`ok=${encodeURIComponent("Đã đổi mật khẩu.")}`);
}

/**
 * Google Chat webhooks for "your screen changed" (scripts/figma/notify-devs.mjs): each user sets their own,
 * an admin sets the project's. Field "url" empty removes it.
 */
export async function saveWebhook(form: FormData): Promise<void> {
  const target = String(form.get("target"));
  const me = target === "project" ? await requireRole("admin") : await session();
  if (!me) redirect("/hub/dang-nhap");
  const url = String(form.get("url") ?? "").trim();
  if (url && !WEBHOOK.test(url)) back(`loi=${encodeURIComponent("Link webhook phải có dạng https://chat.googleapis.com/v1/spaces/…/messages?key=…")}`);
  await updateJson<NotifySettings>(
    NOTIFY,
    {},
    (n) => {
      if (target === "project") return { ...n, project: url || undefined };
      const devs = { ...n.devs };
      if (url) devs[me.name] = url;
      else delete devs[me.name];
      return { ...n, devs };
    },
    `Thông báo: ${target === "project" ? "webhook dự án" : `webhook của ${me.name}`} ${url ? "lưu" : "bỏ"} · ${me.name}`,
  );
  back(`ok=${encodeURIComponent(url ? "Đã lưu webhook." : "Đã bỏ webhook.")}`);
}

/** Sends one test message to the saved webhook (own, or the project's for an admin). */
export async function testWebhook(form: FormData): Promise<void> {
  const target = String(form.get("target"));
  const me = target === "project" ? await requireRole("admin") : await session();
  if (!me) redirect("/hub/dang-nhap");
  const n = await readJson<NotifySettings>(NOTIFY, {});
  const url = target === "project" ? n.project : n.devs?.[me.name];
  if (!url) back(`loi=${encodeURIComponent("Chưa lưu webhook.")}`);
  const res = await fetch(url as string, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ text: `*[QC Hub] Tin thử* từ ${me.name}: màn bạn đang làm đổi requirement hoặc Figma thì Hub báo vào đây.` }),
    cache: "no-store",
  }).catch(() => null);
  back(res?.ok ? `ok=${encodeURIComponent("Đã gửi tin thử, kiểm tra Google Chat.")}` : `loi=${encodeURIComponent(`Gửi không được (${res?.status ?? "lỗi mạng"}). Kiểm tra lại link webhook.`)}`);
}

export async function logout(): Promise<void> {
  (await cookies()).delete({ name: COOKIE, path: withBase("/hub") });
  redirect("/hub/dang-nhap");
}
