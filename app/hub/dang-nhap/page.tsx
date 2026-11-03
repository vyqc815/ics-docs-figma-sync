import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LockKeyhole } from "lucide-react";

import { Logo } from "@/components/qc/logo";
import { COOKIE, checkPassword, passwordSet } from "@/lib/qc/auth";
import "../hub.css";

export const metadata = { title: "Đăng nhập · QC PLS" };

async function login(form: FormData): Promise<void> {
  "use server";
  const next = String(form.get("next") || "/hub");
  const value = checkPassword(String(form.get("password") ?? ""));
  if (!value) redirect(`/hub/dang-nhap?sai=1&next=${encodeURIComponent(next)}`);
  (await cookies()).set(COOKIE, value, { httpOnly: true, secure: true, sameSite: "lax", path: "/hub", maxAge: 60 * 60 * 24 * 30 });
  redirect(next.startsWith("/hub") ? next : "/hub");
}

/** Shared team password for the QC hub. */
const LoginPage = async ({ searchParams }: { searchParams: Promise<{ sai?: string; next?: string }> }): Promise<React.JSX.Element> => {
  const { sai, next } = await searchParams;
  return (
    <main className="hub grid min-h-screen place-items-center px-4">
      <form action={login} className="w-full max-w-sm rounded-3xl border border-(--hub-line) bg-(--hub-shell) p-8 shadow-[0_40px_120px_-40px_rgb(133_114_255/0.45)]">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-(--hub-accent-soft) text-(--hub-accent)">
            <LockKeyhole className="size-5" />
          </span>
          <div>
            <Logo className="h-7 w-auto" />
            <p className="text-xs text-(--hub-muted)">Figma · Requirement · Testcase</p>
          </div>
        </div>
        {!passwordSet() ? (
          <p className="text-sm text-(--hub-amber)">Chưa cài mật khẩu (QC_WEB_PASSWORD) trên server.</p>
        ) : (
          <>
            <input type="hidden" name="next" value={next ?? "/hub"} />
            <label className="mb-2 block text-sm text-(--hub-muted)" htmlFor="password">
              Mật khẩu team
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoFocus
              required
              className="w-full rounded-xl border border-(--hub-line) bg-(--hub-panel) px-4 py-3 text-sm outline-none focus:border-(--hub-accent)"
            />
            {sai && <p className="mt-2 text-xs text-(--hub-red)">Sai mật khẩu.</p>}
            <button className="mt-5 w-full rounded-xl bg-(--hub-accent-strong) py-3 text-sm font-semibold text-white hover:bg-(--hub-accent)">
              Vào
            </button>
          </>
        )}
      </form>
    </main>
  );
};

export default LoginPage;
