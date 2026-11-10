"use client";

import { useTransition } from "react";
import { Loader2 } from "lucide-react";

import { switchProject } from "@/lib/qc/project-actions";

/** Header dropdown: which project the hub shows (kept in a cookie, lib/qc/project.ts). */
export function ProjectPicker({ current, projects }: { current: string; projects: { slug: string; name: string }[] }): React.JSX.Element {
  const [busy, start] = useTransition();
  return (
    <label className="flex items-center gap-2 text-[13px] text-(--hub-muted)">
      Dự án
      <select
        value={current}
        disabled={busy}
        onChange={(e) => {
          const slug = e.target.value;
          start(() => switchProject(slug));
        }}
        className="rounded-lg border border-(--hub-line) bg-(--hub-panel-2) px-2 py-1 text-(--hub-text) outline-none focus:border-(--hub-accent)"
      >
        {projects.map((p) => (
          <option key={p.slug} value={p.slug}>
            {p.name}
          </option>
        ))}
      </select>
      {busy && <Loader2 className="size-3.5 animate-spin" />}
    </label>
  );
}
