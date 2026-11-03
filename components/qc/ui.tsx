import Link from "next/link";
import type { ReactNode } from "react";

/** Small building blocks of the QC hub, all on the dark panel palette from app/qc/qc.css. */

export function Panel({ title, action, children, className = "" }: { title?: ReactNode; action?: ReactNode; children: ReactNode; className?: string }): React.JSX.Element {
  return (
    <section className={`rounded-3xl border border-(--hub-line)/60 bg-(--hub-panel) p-5 ${className}`}>
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-3">
          {title && <h2 className="text-[17px] font-semibold">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function Stat({ label, value, hint, tone }: { label: string; value: ReactNode; hint?: ReactNode; tone?: "green" | "amber" | "red" }): React.JSX.Element {
  const color = tone === "green" ? "text-(--hub-green)" : tone === "amber" ? "text-(--hub-amber)" : tone === "red" ? "text-(--hub-red)" : "";
  return (
    <div className="rounded-2xl bg-(--hub-panel-2) px-4 py-3">
      <p className="text-xs text-(--hub-muted)">{label}</p>
      <p className={`mt-1 text-xl font-semibold ${color}`}>{value}</p>
      {hint && <p className="mt-0.5 text-xs text-(--hub-faint)">{hint}</p>}
    </div>
  );
}

const TONES: Record<string, string> = {
  violet: "bg-(--hub-accent-soft) text-(--hub-accent)",
  green: "bg-[rgb(74_222_128/0.12)] text-(--hub-green)",
  amber: "bg-[rgb(245_165_36/0.14)] text-(--hub-amber)",
  red: "bg-[rgb(248_113_113/0.14)] text-(--hub-red)",
  gray: "bg-(--hub-panel-3) text-(--hub-muted)",
};

export function Tag({ tone = "gray", children }: { tone?: keyof typeof TONES; children: ReactNode }): React.JSX.Element {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide whitespace-nowrap ${TONES[tone]}`}>{children}</span>;
}

const KIND: Record<string, [string, keyof typeof TONES]> = {
  "man-chinh": ["Màn chính", "violet"],
  popup: ["Popup", "amber"],
  "trang-thai": ["Trạng thái", "gray"],
  dropdown: ["Dropdown", "gray"],
  "ban-toi": ["Bản tối", "gray"],
};
export const KindTag = ({ kind }: { kind: string }): React.JSX.Element => {
  const [label, tone] = KIND[kind] ?? [kind, "gray"];
  return <Tag tone={tone}>{label}</Tag>;
};

const STATUS: Record<string, [string, keyof typeof TONES]> = {
  khop: ["Khớp Figma", "green"],
  "chi-co-tren-figma": ["Chỉ có trên Figma", "violet"],
  "khop-mot-phan": ["Khớp một phần", "amber"],
  "chua-thay-tren-figma": ["Chưa thấy trên Figma", "red"],
  "chua-co-thiet-ke": ["Chưa có thiết kế", "gray"],
  "req-ghi-thieu-nhung-figma-co": ["Figma đã có", "green"],
  "chua-co-spec": ["Chưa có spec", "gray"],
};
export const StatusTag = ({ status }: { status?: string }): React.JSX.Element => {
  const [label, tone] = STATUS[status ?? ""] ?? [status ?? "—", "gray"];
  return <Tag tone={tone}>{label}</Tag>;
};

export const PriorityTag = ({ priority }: { priority: string }): React.JSX.Element => {
  const p = priority.toLowerCase();
  return <Tag tone={p.startsWith("high") ? "red" : p.startsWith("medium") ? "amber" : "gray"}>{priority || "—"}</Tag>;
};

export function TabBar({ tabs, active }: { tabs: { key: string; label: string; href: string; count?: number }[]; active: string }): React.JSX.Element {
  return (
    <div className="flex flex-wrap gap-1 rounded-2xl bg-(--hub-panel-2) p-1">
      {tabs.map((t) => (
        <Link
          key={t.key}
          href={t.href}
          className={`flex-1 rounded-xl px-4 py-2 text-center text-sm font-medium whitespace-nowrap transition-colors ${
            t.key === active ? "bg-(--hub-accent-strong) text-white" : "text-(--hub-muted) hover:text-(--hub-text)"
          }`}
        >
          {t.label}
          {t.count !== undefined && <span className="ml-1.5 opacity-70">{t.count}</span>}
        </Link>
      ))}
    </div>
  );
}

export function PageHead({ title, sub, children }: { title: ReactNode; sub?: ReactNode; children?: ReactNode }): React.JSX.Element {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-[28px] leading-tight font-semibold">{title}</h1>
        {sub && <p className="mt-1.5 text-[15px] text-(--hub-muted)">{sub}</p>}
      </div>
      {children}
    </div>
  );
}

/**
 * Live Figma render of a screen; the route serves a "Chưa có thiết kế" card for codes not drawn yet.
 * QC_IMAGE_BASE points a local run without a Figma token at the deployed route.
 */
export function LiveShot({ code, className = "" }: { code: string; className?: string }): React.JSX.Element {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-(--hub-panel-3) ${className}`}>
      <span className="absolute inset-0 grid place-items-center text-xs text-(--hub-faint)">Đang tải ảnh Figma…</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${process.env.QC_IMAGE_BASE ?? ""}/api/figma-frame/${code}.png`} alt={code} loading="lazy" className="relative h-full w-full object-cover object-top" />
    </div>
  );
}

export function SearchBox({ defaultValue = "", placeholder }: { defaultValue?: string; placeholder: string }): React.JSX.Element {
  return (
    <form action="/hub" className="w-full max-w-md">
      <input
        name="q"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-(--hub-line) bg-(--hub-panel) px-4 py-2.5 text-sm outline-none placeholder:text-(--hub-faint) focus:border-(--hub-accent)"
      />
    </form>
  );
}
