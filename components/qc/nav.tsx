"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenText, CircleAlert, CircleHelp, FolderKanban, Hash, LayoutGrid, ListChecks, MonitorSmartphone, UserRound } from "lucide-react";

const ITEMS = [
  { href: "/hub/du-an", label: "Dự án", icon: FolderKanban },
  { href: "/hub", label: "Tổng quan", icon: LayoutGrid, exact: true },
  { href: "/hub/requirement", label: "Requirement", icon: BookOpenText },
  { href: "/hub/man", label: "Màn hình", icon: MonitorSmartphone },
  { href: "/hub/tien-do", label: "Tiến độ dev", icon: ListChecks },
  { href: "/hub/tag", label: "Tag", icon: Hash },
  { href: "/hub/chua-gan-ma", label: "Chưa gắn mã", icon: CircleAlert },
  { href: "/hub/tai-khoan", label: "Tài khoản", icon: UserRound },
  { href: "/hub/huong-dan", label: "Hướng dẫn", icon: CircleHelp },
];

/** Sidebar links; the active one gets the violet bar like the reference design. */
export function QcNav({ badges = {} }: { badges?: Record<string, number> }): React.JSX.Element {
  const path = usePathname();
  return (
    <nav className="hub-scroll flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
      {ITEMS.map(({ href, label, icon: Icon, exact }) => {
        // a cluster page (/hub/cum/…) belongs to the overview, where the clusters are listed
        const active = exact ? path === href || path.startsWith("/hub/cum/") : path === href || path.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={`relative flex shrink-0 items-center gap-3 rounded-xl px-4 py-2.5 text-[14px] whitespace-nowrap transition-colors ${
              active ? "text-(--hub-accent)" : "text-(--hub-muted) hover:bg-(--hub-panel) hover:text-(--hub-text)"
            }`}
          >
            <Icon className="size-[18px]" />
            {label}
            {badges[href] ? (
              <span className="ml-auto rounded-full bg-(--hub-amber)/15 px-2 py-0.5 text-[11px] font-semibold text-(--hub-amber) tabular-nums">{badges[href]}</span>
            ) : null}
            {active && <span className="absolute top-1.5 -right-[13px] bottom-1.5 hidden w-[3px] rounded-full bg-(--hub-accent) lg:block" />}
          </Link>
        );
      })}
    </nav>
  );
}
