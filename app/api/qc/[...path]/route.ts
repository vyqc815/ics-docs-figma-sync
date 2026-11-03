import { readFile } from "node:fs/promises";
import { timingSafeEqual } from "node:crypto";
import { extname, join, normalize, sep } from "node:path";

export const dynamic = "force-dynamic";

const DOCS = join(process.cwd(), "docs");
/** Only these folders are served; everything else in the repo stays private. */
const ROOTS = ["requirements", "he-thong-ma"];
const TYPES: Record<string, string> = {
  ".md": "text/markdown; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "x-qc-key, authorization" };

function allowed(req: Request): boolean {
  const key = process.env.QC_API_KEY;
  const sent = req.headers.get("x-qc-key") ?? req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (!key || !sent) return false;
  const a = Buffer.from(key);
  const b = Buffer.from(sent);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function OPTIONS(): Response {
  return new Response(null, { status: 204, headers: CORS });
}

/**
 * GET /api/qc/<path> → requirement Markdown, its images and the code-system data, for the QC web.
 *   index.json                      list of requirement files, their pages and screen codes
 *   requirements/<file>.md | image  one requirement (template + codes) or an image it links to
 *   he-thong-ma/<file>.json | .md   registry, frames, reserved codes, code lock, rules
 * Needs the key in `x-qc-key` (or `Authorization: Bearer`). Call it from the QC web's server so the key stays hidden.
 */
export async function GET(req: Request, { params }: { params: Promise<{ path: string[] }> }): Promise<Response> {
  if (!process.env.QC_API_KEY) return new Response("Chưa cài QC_API_KEY trên server.", { status: 503, headers: CORS });
  if (!allowed(req)) return new Response("Sai hoặc thiếu khoá (x-qc-key).", { status: 401, headers: CORS });

  const parts = (await params).path.map(decodeURIComponent);
  const rel = parts.join("/") === "index.json" ? "he-thong-ma/qc-index.json" : parts.join("/");
  const file = normalize(join(DOCS, rel));
  const type = TYPES[extname(file).toLowerCase()];
  if (!type || !ROOTS.some((r) => file.startsWith(join(DOCS, r) + sep))) {
    return new Response("Không có file này.", { status: 404, headers: CORS });
  }
  try {
    const body = await readFile(file);
    return new Response(new Uint8Array(body), {
      headers: { ...CORS, "Content-Type": type, "Cache-Control": "private, max-age=60" },
    });
  } catch {
    return new Response("Không có file này.", { status: 404, headers: CORS });
  }
}
