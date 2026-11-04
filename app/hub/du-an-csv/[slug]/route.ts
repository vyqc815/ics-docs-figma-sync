import { readFile } from "@/lib/qc/github";

export const dynamic = "force-dynamic";

const cell = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;

/** GET /hub/du-an-csv/<slug> → the code proposal as a spreadsheet (CSV with BOM so Excel reads Vietnamese). */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }): Promise<Response> {
  const { slug } = await params;
  if (!/^[a-z0-9-]+$/.test(slug)) return new Response("Không có dự án.", { status: 404 });
  const f = await readFile(`docs/du-an/${slug}/de-xuat-ma.json`).catch(() => null);
  if (!f) return new Response("Chưa có đề xuất mã.", { status: 404 });
  const d = JSON.parse(f.text) as { frames: Record<string, string | boolean>[] };
  const head = ["Mã", "Tên mới (đặt cho frame)", "Tên hiện tại", "Loại", "Màn gốc", "Mức tin", "Trang", "Section", "Link Figma", "Đã đổi"];
  const lines = [head.map(cell).join(",")];
  for (const r of d.frames)
    lines.push([r.maDeXuat, r.tenMoi, r.tenHienTai, r.loai, r.manGoc, r.duyet ? "đã duyệt" : r.mucTin, r.page, r.section, r.link, ""].map(cell).join(","));
  return new Response(`﻿${lines.join("\r\n")}\r\n`, {
    headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="de-xuat-ma-${slug}.csv"` },
  });
}
