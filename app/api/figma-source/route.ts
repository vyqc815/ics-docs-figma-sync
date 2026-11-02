import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

import config from "../../../figma.pages.json";

export const dynamic = "force-dynamic";

interface FigmaPage {
  name: string;
  nodeId: string;
  route: string;
  docOnly?: boolean;
}

interface BuildInfo {
  pageFile: string;
  docFile: string;
}

// The Figma plugin panel runs in a sandboxed iframe (origin "null").
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const root = process.cwd();
const read = (rel: string): string | null => {
  const full = join(root, rel);
  return existsSync(full) ? readFileSync(full, "utf-8") : null;
};

/** The page's own files, following relative imports from its index (own sections, then shared ones). */
function codeFiles(pageFile: string): { path: string; code: string }[] {
  const out: { path: string; code: string }[] = [];
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

export function OPTIONS(): Response {
  return new Response(null, { status: 204, headers: CORS });
}

/** GET ?node=<id>[,<id>…] → the page's route, Markdown spec and code files. */
export function GET(req: Request): Response {
  // The selection and its ancestors, innermost first: the first one that is a page wins.
  const nodes = (new URL(req.url).searchParams.get("node") ?? "").split(",").filter(Boolean);
  const pages = config.pages as FigmaPage[];
  const page = nodes.map((id) => pages.find((p) => p.nodeId === id)).find(Boolean);
  if (!page) return Response.json({ error: "Chọn một màn (frame) đã có trong figma.pages.json." }, { status: 404, headers: CORS });

  const buildText = read(join(config.specDir, page.name, "build.json"));
  const build = buildText ? (JSON.parse(buildText) as BuildInfo) : null;
  return Response.json(
    {
      name: page.name,
      route: page.route,
      doc: build?.docFile ? { path: build.docFile, text: read(build.docFile) ?? "" } : null,
      files: build?.pageFile ? codeFiles(build.pageFile) : [],
    },
    { headers: CORS },
  );
}
