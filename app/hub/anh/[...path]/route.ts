import { readFile } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";

import { signedIn } from "@/lib/qc/auth";
import { dataDirs, isLive, originalsDir } from "@/lib/projects";
import { readBytes } from "@/lib/qc/github";
import { reqDir } from "@/lib/qc/data";
import { hubProject } from "@/lib/qc/project";

export const dynamic = "force-dynamic";

const TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

/** GET /hub/anh/<path> → an image a requirement links to, only for signed-in hub users. */
export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }): Promise<Response> {
  if (!(await signedIn())) return new Response("Cần đăng nhập.", { status: 401 });
  const project = await hubProject();
  const REQ_DIR = reqDir(project.slug);
  const file = normalize(join(REQ_DIR, ...(await params).path.map(decodeURIComponent)));
  const type = TYPES[extname(file).toLowerCase()];
  if (!type || !file.startsWith(REQ_DIR + sep)) return new Response("Không có ảnh này.", { status: 404 });
  // a hub-added project's docs are read live from main: its images too (the copy on disk without GitHub)
  if (isLive(project)) {
    const rel = file.slice(REQ_DIR.length + 1).split(sep).join("/");
    // the converted copy (images copied with it), else the original before the code system first ran
    const bytes =
      (await readBytes(`${dataDirs(project).requirements}/${rel}`).catch(() => null)) ?? (await readBytes(`${originalsDir(project)}/${rel}`).catch(() => null));
    if (bytes) return new Response(bytes as BodyInit, { headers: { "Content-Type": type, "Cache-Control": "private, max-age=300" } });
  }
  try {
    return new Response(new Uint8Array(await readFile(file)), { headers: { "Content-Type": type, "Cache-Control": "private, max-age=3600" } });
  } catch {
    return new Response("Không có ảnh này.", { status: 404 });
  }
}
