import { figmaSource, pageByNode } from "@/lib/figma-source";

export const dynamic = "force-dynamic";

// The Figma plugin panel runs in a sandboxed iframe (origin "null").
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

export function OPTIONS(): Response {
  return new Response(null, { status: 204, headers: CORS });
}

/** GET ?node=<id>[,<id>…] → the screen's route, Markdown spec and code files (the selection and its ancestors, innermost first). */
export function GET(req: Request): Response {
  const ids = (new URL(req.url).searchParams.get("node") ?? "").split(",").filter(Boolean);
  const page = pageByNode(ids);
  if (!page)
    return Response.json({ error: "Chọn một màn (frame) đã có trong figma.pages.json." }, { status: 404, headers: CORS });
  return Response.json(figmaSource(page), { headers: CORS });
}
