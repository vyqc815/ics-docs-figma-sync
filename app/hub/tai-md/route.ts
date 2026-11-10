import { session } from "@/lib/qc/auth";
import { requirementMarkdown } from "@/lib/qc/data";
import { hubProject } from "@/lib/qc/project";

/** GET /hub/tai-md?f=<file>: the requirement as a .md file (behind the hub sign-in, like every /hub path). */
export async function GET(req: Request): Promise<Response> {
  if (!(await session())) return new Response("Cần đăng nhập.", { status: 401 });
  const f = new URL(req.url).searchParams.get("f") ?? "";
  const { slug } = await hubProject();
  const text = f.endsWith(".md") ? requirementMarkdown(f, slug) : null;
  if (!text) return new Response("Không thấy file.", { status: 404 });
  const name = f.split("/").pop() ?? "requirement.md";
  return new Response(text, {
    headers: { "Content-Type": "text/markdown; charset=utf-8", "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(name)}` },
  });
}
