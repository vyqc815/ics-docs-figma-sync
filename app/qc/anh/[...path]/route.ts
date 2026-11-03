import { readFile } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";

import { signedIn } from "@/lib/qc/auth";
import { REQ_DIR } from "@/lib/qc/data";

export const dynamic = "force-dynamic";

const TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

/** GET /qc/anh/<path> → an image a requirement links to, only for signed-in hub users. */
export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }): Promise<Response> {
  if (!(await signedIn())) return new Response("Cần đăng nhập.", { status: 401 });
  const file = normalize(join(REQ_DIR, ...(await params).path.map(decodeURIComponent)));
  const type = TYPES[extname(file).toLowerCase()];
  if (!type || !file.startsWith(REQ_DIR + sep)) return new Response("Không có ảnh này.", { status: 404 });
  try {
    return new Response(new Uint8Array(await readFile(file)), { headers: { "Content-Type": type, "Cache-Control": "private, max-age=3600" } });
  } catch {
    return new Response("Không có ảnh này.", { status: 404 });
  }
}
