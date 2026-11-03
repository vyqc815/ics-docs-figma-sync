import { signedIn } from "@/lib/qc/auth";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const NO_STORE = { "Cache-Control": "no-store" };

/**
 * GET /hub/node-anh?file=<fileKey>&node=<id>&scale=<0.25–2> → current render of any frame of any Figma file
 * the server token can read. Used by the hub's project scan, where screens are not in this app's map.
 */
export async function GET(req: Request): Promise<Response> {
  const q = new URL(req.url).searchParams;
  const file = q.get("file") ?? "";
  const node = q.get("node") ?? "";
  const scale = Math.min(2, Math.max(0.25, Number(q.get("scale") ?? 0.5)));
  // any file the server token can read: hub users only
  if (!(await signedIn())) return new Response("Cần đăng nhập Hub.", { status: 401 });
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!/^[A-Za-z0-9]{10,}$/.test(file) || !/^[\d:;I-]+$/.test(node)) return new Response("Thiếu file/node.", { status: 400 });
  if (!token) return new Response("Thiếu FIGMA_ACCESS_TOKEN trên server.", { status: 503 });
  const rendered = await fetch(`https://api.figma.com/v1/images/${file}?ids=${encodeURIComponent(node)}&format=png&scale=${scale}`, {
    headers: { "X-Figma-Token": token },
    cache: "no-store",
  });
  const url = rendered.ok ? ((await rendered.json()) as { images?: Record<string, string | null> }).images?.[node] : null;
  if (!url) return new Response(`Figma không trả ảnh (${rendered.status}).`, { status: 502, headers: NO_STORE });
  const png = await fetch(url, { cache: "no-store" });
  if (!png.ok || !png.body) return new Response("Không tải được ảnh từ Figma.", { status: 502, headers: NO_STORE });
  return new Response(png.body, {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=86400" },
  });
}
