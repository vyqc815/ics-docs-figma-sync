import { PageHead, Panel, Tag } from "@/components/qc/ui";
import { ROLES, can, session } from "@/lib/qc/auth";
import { NOTIFY, maskWebhook, readJson, type NotifySettings } from "@/lib/qc/store";
import { readUsers } from "@/lib/qc/users";

import { addUser, changeOwnPassword, logout, removeUser, resetPassword, saveWebhook, setRole, testWebhook } from "./actions";

export const dynamic = "force-dynamic";

const input =
  "rounded-xl border border-(--hub-line) bg-(--hub-panel) px-3 py-2 text-sm outline-none placeholder:text-(--hub-faint) focus:border-(--hub-accent)";
const button = "rounded-xl bg-(--hub-accent-strong) px-4 py-2 text-sm font-semibold text-white hover:bg-(--hub-accent)";
const small = "rounded-lg bg-(--hub-panel-2) px-3 py-1.5 text-xs hover:text-(--hub-accent)";

const RoleSelect = ({ value }: { value?: string }): React.JSX.Element => (
  <select name="role" defaultValue={value ?? "dev"} className={input}>
    {Object.entries(ROLES).map(([k, label]) => (
      <option key={k} value={k}>
        {label}
      </option>
    ))}
  </select>
);

/** A saved webhook is never shown in full: only its tail, with replace, test and remove. */
const WebhookForm = ({ target, saved }: { target: "me" | "project"; saved?: string }): React.JSX.Element => (
  <div className="flex flex-wrap items-center gap-2">
    <form action={saveWebhook} className="flex min-w-0 flex-1 flex-wrap gap-2">
      <input type="hidden" name="target" value={target} />
      <input name="url" type="url" required placeholder="https://chat.googleapis.com/v1/spaces/…/messages?key=…" className={`${input} min-w-[280px] flex-1`} />
      <button className={button}>{saved ? "Thay" : "Lưu"}</button>
    </form>
    {saved && (
      <>
        <span className="font-mono text-xs text-(--hub-muted)">Đang dùng: {maskWebhook(saved)}</span>
        <form action={testWebhook}>
          <input type="hidden" name="target" value={target} />
          <button className={small}>Gửi thử</button>
        </form>
        <form action={saveWebhook}>
          <input type="hidden" name="target" value={target} />
          <input type="hidden" name="url" value="" />
          <button className={`${small} text-(--hub-red)`}>Bỏ</button>
        </form>
      </>
    )}
  </div>
);

/** Your account and Chat notifications; for admins, the project's notifications and every account of the hub. */
const AccountsPage = async ({ searchParams }: { searchParams: Promise<{ ok?: string; loi?: string }> }): Promise<React.JSX.Element> => {
  const { ok, loi } = await searchParams;
  const me = (await session())!;
  const admin = can(me, "admin");
  const users = admin ? (await readUsers()).users : [];
  const notify = await readJson<NotifySettings>(NOTIFY, {}).catch((): NotifySettings => ({}));

  return (
    <>
      <PageHead title="Tài khoản" sub={`Đang đăng nhập: ${me.name} · ${ROLES[me.role]}`}>
        <form action={logout}>
          <button className={small}>Đăng xuất</button>
        </form>
      </PageHead>
      {ok && <p className="mb-4 rounded-xl bg-[rgb(74_222_128/0.12)] px-4 py-2 text-sm text-(--hub-green)">{ok}</p>}
      {loi && <p className="mb-4 rounded-xl bg-[rgb(248_113_113/0.14)] px-4 py-2 text-sm text-(--hub-red)">{loi}</p>}

      <div className="space-y-6">
        {me.name !== "admin" && (
          <Panel title="Đổi mật khẩu">
            <form action={changeOwnPassword} className="flex flex-wrap gap-2">
              <input name="password" type="password" minLength={4} required placeholder="Mật khẩu mới (≥ 4 ký tự)" autoComplete="new-password" className={input} />
              <button className={button}>Đổi</button>
            </form>
          </Panel>
        )}

        <Panel title="Thông báo Google Chat của bạn">
          <WebhookForm target="me" saved={notify.devs?.[me.name]} />
          <p className="mt-3 text-xs text-(--hub-faint)">
            Màn bạn đánh dấu Đang làm / Xong mà requirement hoặc Figma đổi sau đó thì Hub nhắn vào đây. Lấy link: Google Chat › mở space (hoặc tạo space chỉ
            có bạn) › tên space › Ứng dụng và tích hợp › Webhook › Thêm webhook › chép link.
          </p>
        </Panel>

        {admin && (
          <>
            <Panel title="Thông báo Google Chat của dự án">
              <WebhookForm target="project" saved={notify.project} />
              <p className="mt-3 text-xs text-(--hub-faint)">Mọi tin “màn đổi sau khi dev code” của cả team cũng gửi vào space này, ghi rõ tên dev.</p>
            </Panel>

            <Panel title="Thêm tài khoản">
              <form action={addUser} className="flex flex-wrap gap-2">
                <input name="name" required type="email" placeholder="email đăng nhập (vd vy@pls.edu.vn)" className={input} />
                <RoleSelect />
                <input name="password" type="password" minLength={4} required placeholder="Mật khẩu (≥ 4 ký tự)" autoComplete="new-password" className={input} />
                <button className={button}>Thêm</button>
              </form>
              <p className="mt-3 text-xs text-(--hub-faint)">
                Đăng nhập không nhập tên + mật khẩu team (QC_WEB_PASSWORD) là admin. Khi đã có tài khoản cho cả team, đổi mật khẩu team để chỉ admin biết.
              </p>
            </Panel>

            <Panel title={`Tài khoản (${users.length})`}>
              {users.length === 0 ? (
                <p className="text-sm text-(--hub-muted)">Chưa có tài khoản nào.</p>
              ) : (
                <ul className="divide-y divide-(--hub-line)/60 text-[13px]">
                  {users.map((u) => (
                    <li key={u.name} className="flex flex-wrap items-center gap-2 py-2.5">
                      <span className="w-[140px] font-mono text-(--hub-accent)">{u.name}</span>
                      <Tag tone={u.role === "admin" ? "red" : u.role === "qc" ? "violet" : "gray"}>{u.role}</Tag>
                      <form action={setRole} className="ml-auto flex gap-1">
                        <input type="hidden" name="name" value={u.name} />
                        <RoleSelect value={u.role} />
                        <button className={small}>Đổi quyền</button>
                      </form>
                      <form action={resetPassword} className="flex gap-1">
                        <input type="hidden" name="name" value={u.name} />
                        <input name="password" type="password" minLength={4} required placeholder="Mật khẩu mới" autoComplete="new-password" className={`${input} w-36`} />
                        <button className={small}>Đặt lại</button>
                      </form>
                      <form action={removeUser}>
                        <input type="hidden" name="name" value={u.name} />
                        <button className={`${small} text-(--hub-red)`}>Xoá</button>
                      </form>
                    </li>
                  ))}
                </ul>
              )}
            </Panel>
          </>
        )}
      </div>
    </>
  );
};

export default AccountsPage;
