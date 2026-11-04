/**
 * Frame discovery through the REST API (figma-page discover --rest): lists the file's pages and
 * sections, and finds the frames to register in the chosen ones, without Figma Desktop open.
 * Same frames as the plugin's discover script: top level of a page, or inside sections and groups.
 */
import type { FetchJson } from "./changes.js";

// biome-ignore lint/suspicious/noExplicitAny: Figma REST JSON
type Rn = Record<string, any>;

export interface Scope {
	figmaPages?: string[];
	sections?: string[];
	/** Frames whose name matches; without it, page-sized frames (minWidth × minHeight). */
	match?: RegExp;
	minWidth: number;
	minHeight: number;
}

const norm = (s: string) => s.trim().toLowerCase();

/** Pages of the file with their sections and how many frames sit at the top of each. */
export async function restOutline(get: FetchJson, fileKey: string): Promise<{ name: string; frames: number; sections: { name: string; frames: number }[] }[]> {
	const doc = ((await get(`/v1/files/${fileKey}?depth=3`)) as Rn).document;
	return (doc.children ?? []).map((page: Rn) => {
		const top = page.children ?? [];
		return {
			name: page.name.trim(),
			frames: top.filter((n: Rn) => n.type === "FRAME").length,
			sections: top
				.filter((n: Rn) => n.type === "SECTION")
				.map((s: Rn) => ({ name: s.name.trim(), frames: (s.children ?? []).filter((n: Rn) => n.type === "FRAME").length })),
		};
	});
}

export async function restFrames(
	get: FetchJson,
	fileKey: string,
	scope: Scope,
): Promise<{ page: string; fileKey: string; frames: { id: string; name: string; page: string; width: number; height: number }[] }> {
	const pages: Rn[] = ((await get(`/v1/files/${fileKey}?depth=1`)) as Rn).document.children ?? [];
	const wanted = scope.figmaPages?.length ? pages.filter((p) => scope.figmaPages?.some((n) => norm(n) === norm(p.name))) : pages;
	if (scope.figmaPages?.length && !wanted.length) throw new Error(`Figma page not found: ${scope.figmaPages.join(", ")}`);
	const sections = scope.sections?.map(norm);
	const frames: { id: string; name: string; page: string; width: number; height: number }[] = [];
	for (const page of wanted) {
		const res = (await get(`/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(page.id)}&depth=4`)) as Rn;
		const visit = (n: Rn, inSection: boolean) => {
			const box = n.absoluteBoundingBox ?? { width: 0, height: 0 };
			if (n.type === "FRAME" && inSection) {
				const ok = scope.match ? scope.match.test(n.name) : box.width >= scope.minWidth && box.height >= scope.minHeight;
				if (ok) frames.push({ id: n.id, name: n.name, page: page.name.trim(), width: Math.round(box.width), height: Math.round(box.height) });
				return;
			}
			if (n.type === "SECTION" || n.type === "GROUP")
				for (const c of n.children ?? []) visit(c, inSection || !sections || (n.type === "SECTION" && sections.includes(norm(n.name))));
		};
		for (const c of res.nodes?.[page.id]?.document?.children ?? []) visit(c, !sections);
	}
	return { page: wanted.length === pages.length ? `all ${pages.length} pages` : wanted.map((p) => p.name.trim()).join(", "), fileKey, frames };
}
