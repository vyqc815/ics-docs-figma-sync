"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenText, CircleAlert, Layers, LayoutGrid, MonitorSmartphone } from "lucide-react";

const ITEMS = [
  { href: "/hub", label: "Tổng quan", icon: LayoutGrid, exact: true },
  { href: "/hub/cum", label: "Cụm màn", icon: Layers },
  { href: "/hub/requirement", label: "Requirement", icon: BookOpenText },
  { href: "/hub/man", label: "Màn hình", icon: MonitorSmartphone },
  { href: "/hub/chua-gan-ma", label: "Chưa gắn mã", icon: CircleAlert },
];

/** Sidebar links; the active one gets the violet bar like the reference design. */
export function QcNav(): React.JSX.Element {
  const path = usePathname();
  return (
    <nav className="hub-scroll flex gap-1 overflow-x-auto lg:mt-10 lg:flex-col lg:overflow-visible">
      {ITEMS.map(({ href, label, icon: Icon, exact }) => {
        const active = exact ? path === href : path === href || path.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={`relative flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-[15px] whitespace-nowrap transition-colors ${
              active ? "text-(--hub-accent)" : "text-(--hub-muted) hover:bg-(--hub-panel) hover:text-(--hub-text)"
            }`}
          >
            <Icon className="size-[18px]" />
            {label}
            {active && <span className="absolute top-1.5 -right-[17px] bottom-1.5 hidden w-[3px] rounded-full bg-(--hub-accent) lg:block" />}
          </Link>
        );
      })}
    </nav>
  );
}
