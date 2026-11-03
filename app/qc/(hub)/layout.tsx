import type { ReactNode } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { TriangleAlert } from "lucide-react";

import { QcNav } from "@/components/qc/nav";
import { signedIn } from "@/lib/qc/auth";
import { clusters, frames, indexInfo, reserved, unmappedPages } from "@/lib/qc/data";
import "../qc.css";

export const metadata = { title: "ICS QC Hub", robots: { index: false } };
export const dynamic = "force-dynamic";

/** Shell of the QC hub: password gate, sidebar, status bar. */
const HubLayout = async ({ children }: { children: ReactNode }): Promise<React.JSX.Element> => {
  if (!(await signedIn())) {
    const path = (await headers()).get("x-invoke-path") ?? "/qc";
    redirect(`/qc/dang-nhap?next=${encodeURIComponent(path)}`);
  }
  const info = indexInfo();
  const unmapped = unmappedPages().length;
  const notDrawn = Object.keys(reserved()).filter((c) => !frames()[c]).length;
  const updated = info.generatedAt ? new Date(info.generatedAt).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }) : "—";

  return (
    <div className="qc min-h-screen p-0 lg:p-6">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col overflow-hidden border-(--qc-line)/60 bg-(--qc-shell) lg:min-h-[calc(100vh-48px)] lg:flex-row lg:rounded-[28px] lg:border lg:shadow-[0_60px_160px_-60px_rgb(133_114_255/0.55)]">
        <aside className="flex shrink-0 flex-col border-(--qc-line)/60 px-4 py-6 lg:w-[260px] lg:border-r">
          <div className="px-3 lg:text-center">
            <p className="text-[22px] font-semibold">ICS QC Hub</p>
            <p className="mt-0.5 text-[13px] text-(--qc-muted)">Figma · Requirement · Testcase</p>
          </div>
          <div className="mt-6 lg:mt-0">
            <QcNav />
          </div>
          <div className="mt-auto hidden rounded-2xl bg-(--qc-panel) p-4 text-[13px] lg:block">
            <p className="text-[11px] tracking-wider text-(--qc-faint) uppercase">Requirement</p>
            <p className="mt-1">Bản {info.version?.slice(0, 8) ?? "—"}</p>
            <p className="text-(--qc-muted)">Cập nhật {updated}</p>
            <p className="mt-4 text-[11px] tracking-wider text-(--qc-faint) uppercase">Figma</p>
            <p className="mt-1">{Object.keys(frames()).length} frame · {clusters().length} cụm</p>
            <p className="text-(--qc-muted)">Ảnh trực tiếp, trễ ≤ 5 phút</p>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 border-b border-(--qc-line)/60 px-6 py-3 text-[13px]">
            <p className="flex min-w-0 flex-1 items-center gap-2">
              <TriangleAlert className="size-4 shrink-0 text-(--qc-amber)" />
              <span className="whitespace-nowrap text-(--qc-amber)">Cần xử lý:</span>
              <span className="truncate text-(--qc-muted)">
                {unmapped} trang requirement chưa gắn mã màn · {notDrawn} mã dự kiến chưa có thiết kế
              </span>
            </p>
            <p className="hidden text-(--qc-muted) sm:block">
              Requirement: <span className="text-(--qc-text)">{info.version?.slice(0, 8) ?? "—"}</span>
            </p>
            <p className="text-(--qc-muted)">
              Figma: <span className="text-(--qc-green)">Live</span>
            </p>
          </div>
          <main className="qc-scroll min-w-0 flex-1 overflow-y-auto px-5 py-7 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default HubLayout;
