import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

import config from "../figma.pages.json";

/** Screens generated from Figma: their page Markdown and code, read from the project files. */

export interface FigmaPage {
  name: string;
  nodeId: string;
  route: string;
  docOnly?: boolean;
}

export interface FigmaSource {
  name: string;
  route: string;
  doc: { path: string; text: string } | null;
  files: { path: string; code: string }[];
}

interface BuildInfo {
  pageFile: string;
  docFile: string;
}

const root = process.cwd();
const read = (rel: string): string | null => {
  const full = join(root, rel);
  return existsSync(full) ? readFileSync(full, "utf-8") : null;
};

export const figmaPages = (): FigmaPage[] => config.pages as FigmaPage[];

/** The first of the given Figma ids (innermost first) that is a screen. */
export const pageByNode = (ids: string[]): FigmaPage | undefined =>
  ids.map((id) => figmaPages().find((p) => p.nodeId === id)).find(Boolean);

export const pageByName = (name: string): FigmaPage | undefined => figmaPages().find((p) => p.name === name);

/** The page's own files, following relative imports from its index (own sections, then shared ones). */
function codeFiles(pageFile: string): FigmaSource["files"] {
  const out: FigmaSource["files"] = [];
  const seen = new Set<string>();
  const visit = (rel: string): void => {
    if (seen.has(rel)) return;
    seen.add(rel);
    const code = read(rel);
    if (code === null) return;
    out.push({ path: rel, code });
    for (const m of code.matchAll(/from "(\.{1,2}\/[^"]+)"/g)) {
      const base = normalize(join(dirname(rel), m[1]));
      const file = [".tsx", ".ts"].map((ext) => base + ext).find((f) => existsSync(join(root, f)));
      if (file) visit(file);
    }
  };
  visit(pageFile);
  return out;
}

export function figmaSource(page: FigmaPage): FigmaSource {
  const buildText = read(join(config.specDir, page.name, "build.json"));
  const build = buildText ? (JSON.parse(buildText) as BuildInfo) : null;
  return {
    name: page.name,
    route: page.route,
    doc: build?.docFile ? { path: build.docFile, text: read(build.docFile) ?? "" } : null,
    files: build?.pageFile ? codeFiles(build.pageFile) : [],
  };
}

const esc = (s: string): string => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Light TSX highlighting as HTML: comments, strings, JSX tags and attributes, keywords. */
export function highlightTsx(code: string): string {
  const re =
    /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|(<\/?[A-Za-z][\w.]*)|(\b[a-zA-Z-]+(?==))|\b(import|from|export|default|function|return|const|let|type|interface|async|await|if|else)\b/g;
  let out = "";
  let last = 0;
  for (let m = re.exec(code); m; m = re.exec(code)) {
    out += esc(code.slice(last, m.index));
    const cls = m[1] ? "com" : m[2] ? "str" : m[3] ? "tag" : m[4] ? "attr" : "kw";
    out += `<span class="${cls}">${esc(m[0])}</span>`;
    last = re.lastIndex;
  }
  return out + esc(code.slice(last));
}

const inline = (s: string): string =>
  esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

/** The page Markdown as HTML: headings, quotes, lists, tables, code blocks, inline code, bold, links. */
export function markdownHtml(md: string): string {
  const lines = md.replace(/<!--[\s\S]*?-->\n?/g, "").split("\n");
  let html = "";
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (l.startsWith("```")) {
      const body: string[] = [];
      let j = i + 1;
      while (j < lines.length && !lines[j].startsWith("```")) body.push(lines[j++]);
      html += `<pre>${esc(body.join("\n"))}</pre>`;
      i = j + 1;
      continue;
    }
    const h = l.match(/^(#{1,4})\s+(.*)/);
    if (h) {
      html += `<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`;
      i++;
      continue;
    }
    if (l.startsWith(">")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) quote.push(lines[i++].replace(/^>\s?/, ""));
      html += `<blockquote>${quote.filter((q) => q.trim()).map(inline).join("<br>")}</blockquote>`;
      continue;
    }
    if (l.startsWith("|")) {
      const rows: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) rows.push(lines[i++]);
      const cells = (r: string) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const body = rows.filter((r) => !/^\|[\s:|-]+\|$/.test(r));
      html += `<table>${body
        .map((r, k) => `<tr>${cells(r).map((c) => (k ? `<td>${inline(c)}</td>` : `<th>${inline(c)}</th>`)).join("")}</tr>`)
        .join("")}</table>`;
      continue;
    }
    if (/^\s*[-*]\s+/.test(l)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-*]\s+/, ""));
      html += `<ul>${items.map((t) => `<li>${inline(t)}</li>`).join("")}</ul>`;
      continue;
    }
    if (l.trim()) html += `<p>${inline(l)}</p>`;
    i++;
  }
  return html;
}
