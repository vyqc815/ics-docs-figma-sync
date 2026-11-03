import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LockKeyhole } from "lucide-react";

import { COOKIE, checkPassword, passwordSet } from "@/lib/qc/auth";
import "../qc.css";

export const metadata = { title: "Đăng nhập · ICS QC Hub" };

async function login(form: FormData): Promise<void> {
  "use server";
  const next = String(form.get("next") || "/qc");
  const value = checkPassword(String(form.get("password") ?? ""));
  if (!value) redirect(`/qc/dang-nhap?sai=1&next=${encodeURIComponent(next)}`);
  (await cookies()).set(COOKIE, value, { httpOnly: true, secure: true, sameSite: "lax", path: "/qc", maxAge: 60 * 60 * 24 * 30 });
  redirect(next.startsWith("/qc") ? next : "/qc");
}

/** Shared team password for the QC hub. */
const LoginPage = async ({ searchParams }: { searchParams: Promise<{ sai?: string; next?: string }> }): Promise<React.JSX.Element> => {
  const { sai, next } = await searchParams;
  return (
    <main className="qc grid min-h-screen place-items-center px-4">
      <form action={login} className="w-full max-w-sm rounded-3xl border border-(--qc-line) bg-(--qc-shell) p-8 shadow-[0_40px_120px_-40px_rgb(133_114_255/0.45)]">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-(--qc-accent-soft) text-(--qc-accent)">
            <LockKeyhole className="size-5" />
          </span>
          <div>
            <p className="text-lg font-semibold">ICS QC Hub</p>
            <p className="text-xs text-(--qc-muted)">Figma · Requirement · Testcase</p>
          </div>
        </div>
        {!passwordSet() ? (
          <p className="text-sm text-(--qc-amber)">Chưa cài mật khẩu (QC_WEB_PASSWORD) trên server.</p>
        ) : (
          <>
            <input type="hidden" name="next" value={next ?? "/qc"} />
            <label className="mb-2 block text-sm text-(--qc-muted)" htmlFor="password">
              Mật khẩu team
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoFocus
              required
              className="w-full rounded-xl border border-(--qc-line) bg-(--qc-panel) px-4 py-3 text-sm outline-none focus:border-(--qc-accent)"
            />
            {sai && <p className="mt-2 text-xs text-(--qc-red)">Sai mật khẩu.</p>}
            <button className="mt-5 w-full rounded-xl bg-(--qc-accent-strong) py-3 text-sm font-semibold text-white hover:bg-(--qc-accent)">
              Vào
            </button>
          </>
        )}
      </form>
    </main>
  );
};

export default LoginPage;
