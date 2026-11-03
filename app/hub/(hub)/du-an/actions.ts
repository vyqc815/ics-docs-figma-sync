"use server";

import { signedIn } from "@/lib/qc/auth";

/**
 * Reading a Figma file for the "Dự án" page: its pages and sections, then the screens in the parts the
 * user ticked. Through the REST API with the server's FIGMA_ACCESS_TOKEN (the file must be shared with it).
 */

type Rn = { id: string; name: string; type: string; children?: Rn[]; absoluteBoundingBox?: { width: number; height: number } };

export type Outline = {
  fileKey: string;
  name: string;
  pages: { id: string; name: string; frames: number; sections: { id: string; name: string; frames: number }[] }[];
};
export type Screen = { id: string; name: string; code: string | null; kind: string; page: string; section: string | null; width: number; height: number };

const CODE = /^([A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}(?:-DK)?)/;

async function figma(path: string): Promise<unknown> {
  if (!(await signedIn())) throw new Error("Cần đăng nhập Hub.");
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) throw new Error("Server chưa có FIGMA_ACCESS_TOKEN.");
  const res = await fetch(`https://api.figma.com${path}`, { headers: { "X-Figma-Token": token }, cache: "no-store" });
  if (res.status === 403 || res.status === 404) throw new Error("Không mở được file: kiểm tra link, và file đã chia sẻ cho tài khoản Figma của server chưa.");
  if (!res.ok) throw new Error(`Figma trả lỗi ${res.status}.`);
  return res.json();
}

const countFrames = (n: Rn): number => (n.children ?? []).reduce((k, c) => k + (c.type === "FRAME" ? 1 : c.type === "SECTION" || c.type === "GROUP" ? countFrames(c) : 0), 0);

export async function readFigmaFile(link: string): Promise<Outline> {
  const fileKey = link.match(/figma\.com\/(?:design|file|proto)\/([A-Za-z0-9]+)/)?.[1] ?? (/^[A-Za-z0-9]{15,}$/.test(link.trim()) ? link.trim() : null);
  if (!fileKey) throw new Error("Link không phải link file Figma (figma.com/design/…).");
  const file = (await figma(`/v1/files/${fileKey}?depth=3`)) as { name: string; document: Rn };
  return {
    fileKey,
    name: file.name,
    pages: (file.document.children ?? []).map((p) => ({
      id: p.id,
      name: p.name.trim(),
      frames: (p.children ?? []).filter((c) => c.type === "FRAME").length,
      sections: (p.children ?? []).filter((c) => c.type === "SECTION").map((s) => ({ id: s.id, name: s.name.trim(), frames: countFrames(s) })),
    })),
  };
}

function kindOf(code: string | null): string {
  if (!code) return "Khác";
  if (code.endsWith("-DK")) return "Bản tối";
  return /00$/.test(code) ? "Màn chính" : "Popup / trạng thái";
}

/** Frames in the ticked pages (whole page) and sections; with onlyCoded, only frames named "<MÃ> — …". */
export async function scanFigmaFile(fileKey: string, pageIds: string[], sectionIds: string[], onlyCoded: boolean): Promise<Screen[]> {
  const pagesOf = (await figma(`/v1/files/${fileKey}?depth=2`)) as { document: Rn };
  const out: Screen[] = [];
  for (const page of pagesOf.document.children ?? []) {
    const whole = pageIds.includes(page.id);
    const sections = (page.children ?? []).filter((c) => c.type === "SECTION" && sectionIds.includes(c.id));
    if (!whole && !sections.length) continue;
    const res = (await figma(`/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(page.id)}&depth=4`)) as { nodes: Record<string, { document: Rn } | null> };
    const visit = (n: Rn, section: string | null, take: boolean) => {
      if (n.type === "FRAME") {
        if (!take) return;
        const code = n.name.match(CODE)?.[1] ?? null;
        const box = n.absoluteBoundingBox ?? { width: 0, height: 0 };
        if (onlyCoded ? code : box.width >= 320 && box.height >= 200)
          out.push({ id: n.id, name: n.name, code, kind: kindOf(code), page: page.name.trim(), section, width: Math.round(box.width), height: Math.round(box.height) });
        return;
      }
      if (n.type === "SECTION" || n.type === "GROUP")
        for (const c of n.children ?? []) visit(c, n.type === "SECTION" ? n.name.trim() : section, take || sectionIds.includes(n.id));
    };
    for (const c of res.nodes[page.id]?.document.children ?? []) visit(c, null, whole);
  }
  return out;
}
