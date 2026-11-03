import ids from "@/lib/figma-frame-ids.generated.json";
import config from "@/figma.pages.json";

export const dynamic = "force-dynamic";

const FRAME_IDS = ids as Record<string, string>;

/**
 * GET /api/figma-frame/<MÃ>.png → the frame's current render on Figma, so a requirement
 * that embeds this URL always shows the latest design. Rendered through the Figma REST API
 * (no plugin); the CDN keeps it a minute, then asks Figma again.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ code: string }> }): Promise<Response> {
  const code = (await params).code.replace(/\.png$/i, "").toUpperCase();
  const nodeId = FRAME_IDS[code];
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!nodeId) return new Response(`Không có frame mã ${code} trên Figma.`, { status: 404 });
  if (!token) return new Response("Thiếu FIGMA_ACCESS_TOKEN trên server.", { status: 503 });

  const api = `https://api.figma.com/v1/images/${config.fileKey}?ids=${encodeURIComponent(nodeId)}&format=png&scale=1`;
  const rendered = await fetch(api, { headers: { "X-Figma-Token": token }, cache: "no-store" });
  const url = rendered.ok ? ((await rendered.json()) as { images?: Record<string, string | null> }).images?.[nodeId] : null;
  if (!url) return new Response(`Figma không trả ảnh cho ${code} (${rendered.status}).`, { status: 502 });

  const png = await fetch(url, { cache: "no-store" });
  if (!png.ok || !png.body) return new Response("Không tải được ảnh từ Figma.", { status: 502 });
  return new Response(png.body, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
