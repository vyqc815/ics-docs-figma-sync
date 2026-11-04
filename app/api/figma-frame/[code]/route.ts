import ids from "@/lib/figma-frame-ids.generated.json";
import sections from "@/lib/figma-sections.generated.json";
import config from "@/figma.pages.json";
import navigation from "@/docs/he-thong-ma/navigation.json";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const FRAME_IDS = ids as Record<string, string>;
const SECTIONS = sections as Record<string, string[]>;
/** Frames linked from the NAVIGATION table: codes design listed before naming the frame. */
type NavCodes = { codes: Record<string, { code: string; node: string | null; removed: boolean }> };
const NAV: Record<string, string> = Object.fromEntries(
  Object.values((navigation as NavCodes).codes)
    .filter((r) => r.node && !r.removed)
    .map((r) => [r.code, r.node as string]),
);
const CODE = /^[A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}(?:-DK)?$/;
const FRAME_NAME = /^(?:[①-⑳] \S+ · )?([A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}(?:-DK)?)\s*[—–-]/u;

/** Frames found on Figma after the last deploy, kept while this instance is warm. */
const found = new Map<string, string>();
const NO_STORE = { "Cache-Control": "no-store" };

type SectionNodes = { nodes?: Record<string, { document?: { children?: { id: string; name: string; type: string }[] } } | null> };

/**
 * A frame drawn after the last deploy: look for it in the Sections that hold its code family
 * (CD-KH-03…), a few seconds instead of reading the whole Figma file.
 */
async function findOnFigma(code: string, token: string): Promise<string | undefined> {
  if (found.has(code)) return found.get(code);
  const inFamily = SECTIONS[code.replace(/\d{4}(?:-DK)?$/, "")];
  if (!inFamily) return undefined;
  const res = await fetch(
    `https://api.figma.com/v1/files/${config.fileKey}/nodes?depth=1&ids=${encodeURIComponent(inFamily.join(","))}`,
    { headers: { "X-Figma-Token": token }, cache: "no-store" },
  );
  if (!res.ok) return undefined;
  for (const node of Object.values(((await res.json()) as SectionNodes).nodes ?? {})) {
    for (const child of node?.document?.children ?? []) {
      if (child.type !== "SECTION" && FRAME_NAME.exec(child.name)?.[1] === code) {
        found.set(code, child.id);
        return child.id;
      }
    }
  }
  return undefined;
}

/** Shown for a code with no frame yet, so the requirement shows a clear card instead of a broken image. */
function notDrawn(code: string): Response {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
<rect width="960" height="540" fill="#F4F5F7"/><rect x="1" y="1" width="958" height="538" fill="none" stroke="#C9CDD4" stroke-dasharray="8 6"/>
<text x="480" y="250" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#344054" text-anchor="middle">${code}</text>
<text x="480" y="300" font-family="Arial, sans-serif" font-size="22" fill="#667085" text-anchor="middle">Chưa có thiết kế trên Figma</text>
</svg>`;
  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8", "Cache-Control": "public, max-age=300, s-maxage=300" },
  });
}

/**
 * GET /api/figma-frame/<MÃ>.png → the frame's current render on Figma, so a requirement
 * that embeds this URL always shows the latest design. Rendered through the Figma REST API
 * (no plugin); the CDN keeps it 5 minutes, then refreshes it in the background. Errors are never cached,
 * so a busy Figma API leaves the last good image in place. A code not drawn yet shows
 * a "Chưa có thiết kế" card and turns into the real image once design draws the frame.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ code: string }> }): Promise<Response> {
  const code = (await params).code.replace(/\.png$/i, "").toUpperCase();
  if (!CODE.test(code)) return new Response(`Mã ${code} không đúng dạng.`, { status: 404 });
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) return new Response("Thiếu FIGMA_ACCESS_TOKEN trên server.", { status: 503 });
  const nodeId = FRAME_IDS[code] ?? NAV[code] ?? (await findOnFigma(code, token));
  if (!nodeId) return notDrawn(code);

  const api = `https://api.figma.com/v1/images/${config.fileKey}?ids=${encodeURIComponent(nodeId)}&format=png&scale=1`;
  const rendered = await fetch(api, { headers: { "X-Figma-Token": token }, cache: "no-store" });
  const url = rendered.ok ? ((await rendered.json()) as { images?: Record<string, string | null> }).images?.[nodeId] : null;
  if (!url) return new Response(`Figma không trả ảnh cho ${code} (${rendered.status}).`, { status: 502, headers: NO_STORE });

  const png = await fetch(url, { cache: "no-store" });
  if (!png.ok || !png.body) return new Response("Không tải được ảnh từ Figma.", { status: 502, headers: NO_STORE });
  return new Response(png.body, {
    headers: {
      "Content-Type": "image/png",
      // 5 minutes fresh; after that the CDN serves the cached image at once and refreshes it in the background
      "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=86400",
    },
  });
}
