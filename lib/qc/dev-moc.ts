import { createHash } from "node:crypto";

import { requirementMarkdown, requirementPages } from "@/lib/qc/data";
import type { FigmaLog } from "@/lib/qc/dong-bo";
import type { ProgressEntry } from "@/lib/qc/store";

/**
 * A developer's own baseline per screen: when they mark "Đang làm" / "Xong", the hub keeps the time and two hashes
 * of the requirement they coded against. Later edits show as "Có cập nhật sau khi bạn code" until they mark again.
 *   ui     the "### Trang N" sections that cite the screen (scripts/figma/screen-requirements.json)
 *   rules  sections "## 2. Yêu cầu" and "## 3. Testcase" of those files (business rules, testcases)
 * scripts/figma/notify-devs.mjs computes the same hashes to send Google Chat messages: keep the two in step.
 */
const sha = (parts: string[]): string | undefined =>
  parts.length ? createHash("sha256").update(parts.join("\n\n")).digest("hex").slice(0, 16) : undefined;

/** Lines from the heading matching `start` up to the next heading of level ≤ `level`. */
function section(text: string, start: RegExp, level: number): string {
  const lines = text.split("\n");
  const from = lines.findIndex((l) => start.test(l));
  if (from < 0) return "";
  const end = new RegExp(`^#{1,${level}} `);
  const to = lines.findIndex((l, i) => i > from && end.test(l));
  return lines.slice(from, to < 0 ? undefined : to).join("\n").trim();
}

export type DocsHashes = { ui?: string; rules?: string };

export function screenHashes(code: string): DocsHashes {
  const pages = [...requirementPages(code)].sort((a, b) => a.file.localeCompare(b.file));
  const ui: string[] = [];
  const rules: string[] = [];
  for (const p of pages) {
    const text = requirementMarkdown(p.file);
    if (!text) continue;
    for (const n of [...p.pages].sort((a, b) => a - b)) ui.push(`${p.file}#${n}\n${section(text, new RegExp(`^### Trang ${n}:`), 3)}`);
    rules.push(`${p.file}\n${section(text, /^## 2\. /, 2)}\n${section(text, /^## 3\. /, 2)}`);
  }
  return { ui: sha(ui), rules: sha(rules) };
}

export type DevChanges = { ui: boolean; rules: boolean; figma: { code: string; at: string; what: string }[] };

/** What changed on a screen since the developer's mark; null when nothing did. Old marks without hashes compare Figma only. */
export function changesSince(code: string, entry: ProgressEntry, log: FigmaLog): DevChanges | null {
  const now = screenHashes(code);
  const ui = !!entry.ui && entry.ui !== now.ui;
  const rules = !!entry.rules && entry.rules !== now.rules;
  const figma = [code, `${code}-DK`]
    .flatMap((c) => (log[c] ?? []).filter((x) => x.at > entry.at).map((x) => ({ code: c, ...x })))
    .sort((a, b) => b.at.localeCompare(a.at));
  return ui || rules || figma.length ? { ui, rules, figma } : null;
}
