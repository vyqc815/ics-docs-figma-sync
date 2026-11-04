/**
 * Per-page Markdown spec.
 *
 * Renders a PageSpec as one Markdown document that a person or an AI can read
 * to rebuild the page in any language or framework: overview, theme tokens,
 * typography, section map, the full layout tree with exact sizes and styles,
 * component instances, verbatim content, assets, interactions/annotations,
 * fidelity notes and the rules for reading the numbers. It is generated from
 * the same spec as the code, so the two never drift apart.
 */

import type { PageSpec, SpecNode, SpecTextSegment } from "./normalize.js";

export type DocLanguage = "vi" | "en";

export interface PageDocOptions {
	language: DocLanguage;
	/** Route the page is served at, if known. */
	route?: string;
	/** Name of the full spec file, referenced for exact values. */
	specFile?: string;
	/** Rewrites spec asset URLs (e.g. to the public/ path used by the app). */
	assetUrl?: (file: string, specUrl: string) => string;
}

const L = {
	vi: {
		source: "Nguồn",
		route: "Route",
		frame: "Khung thiết kế",
		exported: "Xuất lúc",
		fullSpec: "Spec đầy đủ (giá trị chính xác từng node)",
		overview: "Tổng quan",
		overviewText: (
			w: number,
			h: number,
			n: number,
			t: number,
			i: number,
			ic: number,
			c: number,
		) =>
			`Trang rộng **${w}px**, cao **${h}px**, gồm ${n} layer (tính cả frame gốc): ${t} đoạn chữ, ${i} ảnh, ${ic} icon, ${c} component instance.`,
		background: "Nền trang",
		clipped: "cắt phần tràn ra ngoài khung",
		sections: "Các vùng chính (theo thứ tự từ trên xuống)",
		section: "Vùng",
		position: "Vị trí (x, y)",
		size: "Kích thước",
		layout: "Bố cục",
		theme: "Theme — màu và token",
		token: "Token",
		cssVar: "Biến CSS",
		value: "Giá trị",
		alias: "Trỏ tới",
		collection: "Bộ / mode",
		noTokens:
			"Frame này không gắn biến (variable) nào của Figma; màu được ghi trực tiếp trong cây layout.",
		styles: "Style Figma đang dùng",
		typography: "Typography",
		fonts: "Font",
		family: "Font family",
		weights: "Độ đậm",
		styleNames: "Kiểu",
		textStyles: "Các kiểu chữ đang dùng",
		size_lh: "Cỡ / line-height",
		weight: "Độ đậm",
		letter: "Letter-spacing",
		color: "Màu",
		uses: "Số lần",
		example: "Ví dụ",
		tree: "Cấu trúc chi tiết",
		treeIntro:
			"Mỗi dòng là một layer: `[vai trò] Tên — kích thước · vị trí · bố cục · style`. Dòng đầu tiên là chính frame trang (gốc). Tên layer nằm trong `**…**`, chữ hiển thị nằm trong `“…”`, giá trị CSS nguyên văn nằm trong backtick: dấu `·` hay `—` **bên trong** các cặp đó là nội dung, chỉ dấu ` · ` bên ngoài mới ngăn cách các trường. Toạ độ `@ (x, y)` tính từ góc trên-trái của layer cha; layer **flow** do auto layout của cha xếp, layer **abs** đặt tuyệt đối. Các layer cùng cấp được liệt kê **theo thứ tự vẽ của Figma: layer sau nằm đè lên layer trước**. ID ở cuối dòng là node ID trong Figma.",
		components: "Component đang dùng",
		component: "Component",
		props: "Thuộc tính / variant",
		count: "Số instance",
		content: "Nội dung (nguyên văn, theo thứ tự đọc)",
		assets: "Ảnh và icon",
		file: "File",
		kind: "Loại",
		usedBy: "Dùng ở",
		interactions: "Tương tác, liên kết và ghi chú",
		annotations: "Annotation",
		links: "Liên kết",
		prototype: "Prototype",
		notes: "Ghi chú ẩn (sharedPluginData)",
		none: "Không có.",
		fidelity: "Lưu ý độ chính xác",
		fidelityIntro:
			"Những chỗ CSS không thể tái hiện y hệt Figma (đã dùng cách gần nhất):",
		fidelityNone: "Không có — mọi thuộc tính đều có CSS tương đương chính xác.",
		rebuild: "Hướng dẫn dựng lại (cho người và AI)",
		rebuildRules: [
			"Đơn vị là **px ở chiều rộng thiết kế**; mọi phần tử dùng `box-sizing: border-box`.",
			"**row / column** = flex-direction; `gap` = khoảng cách giữa các con; `pad T R B L` = padding.",
			"`justify` (trục chính) và `align` (trục phụ): MIN = start, CENTER = center, MAX = end, SPACE_BETWEEN = space-between, BASELINE = baseline.",
			"Kích thước con: **FIXED** = cố định đúng số px; **HUG** = co theo nội dung; **FILL** = giãn lấp phần còn trống của cha (flex: 1 trên trục chính, stretch trên trục phụ).",
			"Layer **abs** đặt bằng position absolute theo `@ (x, y)` so với **mép ngoài** của cha, kể cả khi cha là row/column (padding của cha không ảnh hưởng): `left: x; top: y`. Nếu cha có `border` thì trừ độ dày viền trái/trên, vì CSS tính từ bên trong viền. Layer **flow** để auto layout xếp, `@ (x, y)` chỉ để đối chiếu.",
			"Viền (stroke) **không** chiếm chỗ trong layout: `shadow inset 0 0 0 Wpx` = viền phía trong, `outline` = viền ở giữa hoặc nét đứt, shadow `0 0 0 Wpx` không inset = viền phía ngoài. Chỉ khi ghi `border` thì viền mới chiếm chỗ (strokesIncludedInLayout).",
			"Chữ: `cỡ/line-height` tính bằng px, hoặc là hệ số nhân với cỡ chữ nếu không có đơn vị (giá trị px tương ứng ghi trong ngoặc, ví dụ `15/1.25 (18.75px)`; dùng đúng giá trị đó, chiều cao khung chữ có thể đã được Figma làm tròn); `auto` = line-height mặc định của font (CSS `normal`). `case upper` / `lower` / `title` = `text-transform: uppercase` / `lowercase` / `capitalize`, `case small_caps` = `font-variant-caps: small-caps`; chữ trong `“…”` là chữ gốc, chưa đổi hoa/thường. Letter-spacing dạng `em` là phần trăm cỡ chữ. Chữ có chiều rộng tự động (`no-wrap`) **không xuống dòng**. Giữ nguyên mọi khoảng trắng, trừ chữ `no-wrap`: ở loại này **bỏ dấu cách ở cuối mỗi dòng** (Figma không tính chúng vào độ rộng); `⏎` là xuống dòng (CSS `white-space: pre`, hoặc `pre-wrap` cho chữ có chiều rộng cố định). Figma **làm tròn lên** độ rộng của chữ `no-wrap` thành số nguyên px — đặt `min-width` bằng đúng độ rộng ghi trong dòng.",
			"Icon và hình minh hoạ đã xuất sẵn thành file — dùng nguyên file, không vẽ lại. Ảnh nền dùng đúng chế độ cover/contain/crop ghi trong style.",
			"Màu có token thì dùng token (biến CSS) với giá trị dự phòng ghi kèm.",
			"Giá trị mặc định khi dòng không ghi: `justify` và `align` = MIN — trong CSS phải **tự đặt `align-items: flex-start`** vì mặc định của CSS là stretch; không có `[..]` = FIXED×FIXED; layer không ghi row/column là khung thường, các con của nó đặt **abs**; không ghi `bg` = nền trong suốt.",
			"Nhiều con FILL cùng hàng có thể lệch nhau vài phần px do Figma làm tròn — dùng flex: 1 cho tất cả, con số chỉ để đối chiếu. `wrap cross-gap N` = khoảng cách giữa các hàng (dòng) khi xuống dòng.",
			"Icon/ảnh xuất sẵn: layer giữ đúng kích thước của nó (position: relative), bên trong đặt một `<img>` position absolute. Không ghi `covers` thì ảnh phủ đúng khung layer; `file … covers (x, y) W×H` = file vẽ tràn ra ngoài khung (bóng, viền ngoài, phần bị khung cha cắt) — đặt `<img>` tại (x, y) so với góc layer với đúng W×H. Phép xoay/lật đã nằm sẵn trong file.",
			"`bg #màu` là màu nền; `bg `…`` (gradient) và `image `url(…) …`` là shorthand CSS `background` đầy đủ (vị trí / kích thước / lặp) — dùng nguyên văn để có đúng vùng crop. `border W style màu` = CSS `border` (hoặc `border-width` 4 cạnh T R B L). Layer ghi `trống` không có nền, viền, con hay file: giữ một khung rỗng đúng kích thước.",
		],
		exact: "Giá trị chính xác đến từng node (kèm CSS dựng sẵn) nằm trong",
		roles: {
			page: "trang",
			container: "khối",
			text: "chữ",
			image: "ảnh",
			icon: "icon",
			shape: "hình",
			instance: "instance",
		},
		empty: "trống",
	},
	en: {
		source: "Source",
		route: "Route",
		frame: "Design frame",
		exported: "Exported",
		fullSpec: "Full spec (exact per-node values)",
		overview: "Overview",
		overviewText: (
			w: number,
			h: number,
			n: number,
			t: number,
			i: number,
			ic: number,
			c: number,
		) =>
			`The page is **${w}px** wide and **${h}px** tall, with ${n} layers (including the root frame): ${t} text blocks, ${i} images, ${ic} icons, ${c} component instances.`,
		background: "Page background",
		clipped: "content outside the frame is clipped",
		sections: "Main sections (top to bottom)",
		section: "Section",
		position: "Position (x, y)",
		size: "Size",
		layout: "Layout",
		theme: "Theme — colors and tokens",
		token: "Token",
		cssVar: "CSS variable",
		value: "Value",
		alias: "Alias of",
		collection: "Collection / mode",
		noTokens:
			"This frame uses no Figma variables; colors are written directly in the layout tree.",
		styles: "Figma styles in use",
		typography: "Typography",
		fonts: "Fonts",
		family: "Font family",
		weights: "Weights",
		styleNames: "Styles",
		textStyles: "Text styles in use",
		size_lh: "Size / line-height",
		weight: "Weight",
		letter: "Letter-spacing",
		color: "Color",
		uses: "Uses",
		example: "Example",
		tree: "Detailed structure",
		treeIntro:
			"One line per layer: `[role] Name — size · position · layout · style`. The first line is the page frame itself (the root). Layer names are inside `**…**`, displayed text inside `“…”`, verbatim CSS values inside backticks: a `·` or `—` **inside** those is content; only a ` · ` outside them separates fields. `@ (x, y)` is relative to the parent's top-left; **flow** layers are placed by the parent's auto layout, **abs** layers are absolutely positioned. Siblings are listed **in Figma paint order: later layers are drawn on top of earlier ones**. The trailing ID is the Figma node ID.",
		components: "Components in use",
		component: "Component",
		props: "Properties / variants",
		count: "Instances",
		content: "Content (verbatim, reading order)",
		assets: "Images and icons",
		file: "File",
		kind: "Kind",
		usedBy: "Used by",
		interactions: "Interactions, links and notes",
		annotations: "Annotations",
		links: "Links",
		prototype: "Prototype",
		notes: "Hidden notes (sharedPluginData)",
		none: "None.",
		fidelity: "Fidelity notes",
		fidelityIntro:
			"Places where CSS cannot reproduce Figma exactly (closest equivalent used):",
		fidelityNone: "None — every property has an exact CSS equivalent.",
		rebuild: "Rebuild guide (for people and AI)",
		rebuildRules: [
			"Units are **px at the design width**; every element uses `box-sizing: border-box`.",
			"**row / column** = flex-direction; `gap` = space between children; `pad T R B L` = padding.",
			"`justify` (main axis) and `align` (cross axis): MIN = start, CENTER = center, MAX = end, SPACE_BETWEEN = space-between, BASELINE = baseline.",
			"Child sizing: **FIXED** = exact px; **HUG** = shrink to content; **FILL** = take the parent's free space (flex: 1 on the main axis, stretch on the cross axis).",
			"**abs** layers are absolutely positioned at `@ (x, y)` from the parent's **outer edge**, also inside a row/column parent (the parent's padding does not apply): `left: x; top: y`. If the parent has a `border`, subtract its left/top width, since CSS measures from inside the border. **flow** layers are placed by auto layout and `@ (x, y)` is for reference only.",
			"Strokes do **not** take layout space: `shadow inset 0 0 0 Wpx` = inside stroke, `outline` = center or dashed stroke, a non-inset `0 0 0 Wpx` shadow = outside stroke. Only a `border` takes space (strokesIncludedInLayout).",
			"Text: `size/line-height` in px, or a multiplier of the font size when unitless (the px value follows in parentheses, e.g. `15/1.25 (18.75px)`; use exactly that — Figma may round the text box height); `auto` = the font's default line height (CSS `normal`). `case upper` / `lower` / `title` = `text-transform: uppercase` / `lowercase` / `capitalize`, `case small_caps` = `font-variant-caps: small-caps`; text inside `“…”` is the original, before case changes. `em` letter-spacing is a percentage of the font size. Auto-width text (`no-wrap`) **never wraps**. Keep every space, except in `no-wrap` text: there **drop spaces at the end of each line** (Figma leaves them out of the width); `⏎` is a line break (CSS `white-space: pre`, or `pre-wrap` for fixed-width text). Figma **rounds the width of `no-wrap` text up** to whole px — set `min-width` to exactly the width on the line.",
			"Icons and illustrations are exported files — use them as-is, do not redraw. Background images use the cover/contain/crop mode given in the style.",
			"Where a color has a token, use the token (CSS variable) with the listed fallback value.",
			"Defaults when a line omits them: `justify` and `align` = MIN — in CSS **set `align-items: flex-start` explicitly**, since the CSS default is stretch; no `[..]` = FIXED×FIXED; a layer without row/column is a plain box whose children are **abs**; no `bg` = transparent.",
			"Several FILL siblings may differ by a fraction of a px from Figma rounding — give them all flex: 1; the numbers are for reference. `wrap cross-gap N` = spacing between wrapped lines.",
			"Exported icons/images: the layer keeps its own size (position: relative) and holds an absolutely positioned `<img>`. Without `covers` the image fills the layer box; `file … covers (x, y) W×H` = the file extends beyond the box (shadows, outside strokes, parts clipped by the parent) — place the `<img>` at (x, y) from the layer's corner at exactly W×H. Rotation/flip is already baked into the file.",
			"`bg #color` is a background color; `bg `…`` (gradient) and `image `url(…) …`` are complete CSS `background` shorthands (position / size / repeat) — use them verbatim to get the exact crop. `border W style color` = CSS `border` (or 4-side `border-width` T R B L). A layer marked `empty` has no fill, stroke, children or file: keep an empty box of exactly that size.",
		],
		exact: "Exact per-node values (with ready-made CSS) are in",
		roles: {
			page: "page",
			container: "box",
			text: "text",
			image: "image",
			icon: "icon",
			shape: "shape",
			instance: "instance",
		},
		empty: "empty",
	},
};

type Labels = (typeof L)["vi"];

// ============================================================================
// Helpers
// ============================================================================

function cell(s: string | number | undefined | null): string {
	return String(s ?? "")
		.replace(/\|/g, "\\|")
		.replace(/\r?\n/g, " ⏎ ");
}

function table(head: string[], rows: (string | number)[][]): string {
	if (!rows.length) return "";
	return [
		`| ${head.join(" | ")} |`,
		`| ${head.map(() => "---").join(" | ")} |`,
		...rows.map((r) => `| ${r.map(cell).join(" | ")} |`),
	].join("\n");
}

function n2(v: number): string {
	return String(Math.round(v * 100) / 100);
}

/** Visual order: auto layout keeps its order, free-positioned children read top→bottom, left→right. */
function ordered(node: SpecNode): SpecNode[] {
	if (node.layout && node.layout.mode !== "none" && node.layout.mode !== "grid")
		return node.children;
	return [...node.children].sort(
		(a, b) => a.box.y - b.box.y || a.box.x - b.box.x,
	);
}

function walk(
	node: SpecNode,
	fn: (n: SpecNode, depth: number) => void,
	depth = 0,
): void {
	fn(node, depth);
	for (const c of ordered(node)) walk(c, fn, depth + 1);
}

/** Figma layer order: bottom layer first, so later siblings paint on top. */
function walkPaint(
	node: SpecNode,
	fn: (n: SpecNode, depth: number) => void,
	depth = 0,
): void {
	fn(node, depth);
	for (const c of node.children) walkPaint(c, fn, depth + 1);
}

function layoutSummary(n: SpecNode): string {
	if (n.asset) return ""; // the exported file already contains the inner layout
	const l = n.layout;
	if (!l || l.mode === "none") return "";
	if (l.mode === "grid") return "grid";
	const p = l.padding;
	const parts: string[] = [l.mode];
	if (l.justify === "SPACE_BETWEEN") parts.push("space-between");
	else if (l.gap) parts.push(`gap ${n2(l.gap)}`);
	if (l.wrap)
		parts.push(`wrap${l.crossGap ? ` cross-gap ${n2(l.crossGap)}` : ""}`);
	if (p.top || p.right || p.bottom || p.left)
		parts.push(`pad ${[p.top, p.right, p.bottom, p.left].map(n2).join(" ")}`);
	if (l.justify !== "MIN" && l.justify !== "SPACE_BETWEEN")
		parts.push(`justify ${l.justify}`);
	if (l.align !== "MIN") parts.push(`align ${l.align}`);
	return parts.join(" ");
}

function tokenNote(n: SpecNode, key: "fills" | "strokes"): string {
	const t = n.tokens?.[key];
	const list = Array.isArray(t) ? t : t ? [t] : [];
	return list.length ? ` (${list.join(", ")})` : "";
}

function shorten(v: string, max = 90): string {
	return v.length > max ? `${v.slice(0, max - 1)}…` : v;
}

function styleSummary(
	n: SpecNode,
	assetUrl: (id: string) => string | undefined,
	imageUrl: (specUrl: string) => string,
): string[] {
	const c = n.css;
	const out: string[] = [];
	if (c["background-color"])
		out.push(`bg ${c["background-color"]}${tokenNote(n, "fills")}`);
	else if (c.background) {
		const bg = c.background.replace(
			/url\("([^"]+)"\)/g,
			(_m, u) => `url("${imageUrl(u)}")`,
		);
		out.push(
			`${/url\(/.test(bg) ? "image" : "bg"} \`${bg}\`${tokenNote(n, "fills")}`,
		);
	}
	if (c["border-radius"]) out.push(`radius ${c["border-radius"]}`);
	if (c.border) out.push(`border ${c.border}${tokenNote(n, "strokes")}`);
	if (c["border-width"])
		out.push(
			`border ${c["border-width"]} ${c["border-style"] ?? "solid"} ${c["border-color"]}${tokenNote(n, "strokes")}`,
		);
	if (c["box-shadow"]) out.push(`shadow ${c["box-shadow"]}`);
	if (c.outline)
		out.push(`outline ${c.outline} offset ${c["outline-offset"] ?? "0"}`);
	if (c.opacity) out.push(`opacity ${c.opacity}`);
	if (c.overflow === "hidden" && !n.text) out.push("clip");
	if (c.filter) out.push(`filter ${c.filter}`);
	if (c["backdrop-filter"]) out.push(`backdrop ${c["backdrop-filter"]}`);
	if (c["mix-blend-mode"]) out.push(`blend ${c["mix-blend-mode"]}`);
	if (n.rotation && !n.asset) out.push(`rotate ${n.rotation}°`);
	if (n.asset) {
		const url = assetUrl(n.asset);
		if (url) {
			const rb = n.renderBounds;
			const differs =
				rb &&
				(Math.abs(rb.x) > 0.5 ||
					Math.abs(rb.y) > 0.5 ||
					Math.abs(rb.width - n.box.width) > 0.5 ||
					Math.abs(rb.height - n.box.height) > 0.5);
			out.push(
				differs && rb
					? `file ${url} covers (${n2(rb.x)}, ${n2(rb.y)}) ${n2(rb.width)}×${n2(rb.height)}`
					: `file ${url}`,
			);
		}
	}
	return out;
}

function sizingNote(n: SpecNode): string {
	if (!n.sizing || n.positioning !== "flow") return "";
	const { horizontal: h, vertical: v } = n.sizing;
	return h === "FIXED" && v === "FIXED" ? "" : ` [${h}×${v}]`;
}

function lineHeightLabel(s: SpecTextSegment): string {
	return s.lineHeight === "normal" ? "auto" : s.lineHeight;
}

/** Unitless line heights also carry their px value, e.g. `1.25 (18.75px)`. */
function lineHeightFull(s: SpecTextSegment): string {
	const lh = lineHeightLabel(s);
	return /^[\d.]+$/.test(lh) ? `${lh} (${n2(Number(lh) * s.font.size)}px)` : lh;
}

function fontLabel(s: SpecTextSegment): string {
	const lh = lineHeightFull(s);
	return `${s.font.family} ${n2(s.font.size)}/${lh} ${s.font.weight}${s.font.italic ? " italic" : ""}`;
}

function textDetails(s: SpecTextSegment): string {
	const parts = [`${fontLabel(s)} ${segColor(s)}`];
	if (s.letterSpacing !== "0") parts.push(`letter-spacing ${s.letterSpacing}`);
	if (s.textCase) parts.push(`case ${s.textCase.toLowerCase()}`);
	if (s.decoration) parts.push(s.decoration.toLowerCase());
	if (s.href) parts.push(`link ${s.href}`);
	return parts.join(" ");
}

function segColor(s: SpecTextSegment): string {
	const tok = s.tokens?.fills;
	const name = Array.isArray(tok) ? tok[0] : tok;
	const color = s.color ?? (s.css.background ? "gradient" : "");
	return name ? `${color} (${name})` : color;
}

function quote(text: string, max = 80): string {
	const t = text.replace(/\s*\n\s*/g, " ⏎ ");
	return `“${t.length > max ? `${t.slice(0, max - 1)}…` : t}”`;
}

// ============================================================================
// Document
// ============================================================================

export function generatePageMarkdown(
	spec: PageSpec,
	opts: PageDocOptions,
): string {
	const t: Labels = L[opts.language] ?? L.vi;
	const specFile = opts.specFile ?? "page-spec.json";
	const assetById = new Map(spec.assets.map((a) => [a.id, a]));
	const assetUrl = (id: string) => {
		const a = assetById.get(id);
		return a
			? opts.assetUrl
				? opts.assetUrl(a.file, a.url)
				: a.url
			: undefined;
	};
	const byUrl = new Map(spec.assets.map((a) => [a.url, a]));
	const imageUrl = (specUrl: string) => {
		const a = byUrl.get(specUrl);
		return a && opts.assetUrl ? opts.assetUrl(a.file, a.url) : specUrl;
	};
	const title = spec.source.nodeName.replace(/^page:\s*/i, "");
	const out: string[] = [];
	const h2 = (n: number, s: string) => out.push("", `## ${n}. ${s}`, "");

	out.push(`# ${title}`, "");
	out.push(
		`> **${t.source}:** ${spec.source.fileName} › ${spec.source.pageName ?? "?"} › ${spec.source.nodeName} (\`${spec.source.nodeId}\`${
			spec.source.fileKey ? `, file \`${spec.source.fileKey}\`` : ""
		})  `,
	);
	if (opts.route) out.push(`> **${t.route}:** \`${opts.route}\`  `);
	out.push(
		`> **${t.frame}:** ${spec.frame.width} × ${spec.frame.height} px${spec.tree.css.overflow === "hidden" ? ` (${t.clipped})` : ""}  `,
	);
	out.push(`> **${t.exported}:** ${spec.source.exportedAt}  `);
	out.push(`> **${t.fullSpec}:** \`${specFile}\``);

	// 1. Overview
	h2(1, t.overview);
	const s = spec.stats;
	out.push(
		t.overviewText(
			spec.frame.width,
			spec.frame.height,
			s.nodes,
			s.texts,
			s.images,
			s.icons,
			s.instances,
		),
	);
	const rootBg = spec.tree.css["background-color"] ?? spec.tree.css.background;
	if (rootBg)
		out.push(
			"",
			`${t.background}: \`${shorten(rootBg)}\`${tokenNote(spec.tree, "fills")}.`,
		);
	out.push("", `**${t.sections}:**`, "");
	out.push(
		table(
			[t.section, t.position, t.size, t.layout],
			ordered(spec.tree).map((c) => [
				`${c.name}${c.component ? ` (${c.component.set ?? c.component.name})` : ""}`,
				`${n2(c.box.x)}, ${n2(c.box.y)}`,
				`${n2(c.box.width)} × ${n2(c.box.height)}`,
				layoutSummary(c) || (c.positioning === "absolute" ? "abs" : "flow"),
			]),
		),
	);

	// 2. Theme
	h2(2, t.theme);
	if (spec.tokens.variables.length) {
		out.push(
			table(
				[t.token, t.cssVar, t.value, t.alias, t.collection],
				spec.tokens.variables.map((v) => [
					`\`${v.name}\``,
					`\`${v.cssVariable}\``,
					v.value === null ? "" : `\`${v.value}\``,
					v.aliasOf.join(" → "),
					[v.collection, v.mode].filter(Boolean).join(" / "),
				]),
			),
		);
	} else out.push(t.noTokens);
	if (spec.tokens.styles.length) {
		out.push("", `**${t.styles}:**`, "");
		out.push(
			table(
				["Style", t.kind],
				spec.tokens.styles.map((st) => [`\`${st.name}\``, st.type]),
			),
		);
	}

	// 3. Typography
	h2(3, t.typography);
	out.push(`**${t.fonts}:**`, "");
	out.push(
		table(
			[t.family, t.weights, t.styleNames],
			spec.fonts.map((f) => [
				f.family,
				f.weights.join(", "),
				f.styles.join(", "),
			]),
		),
	);
	const textStyles = new Map<
		string,
		{ seg: SpecTextSegment; count: number; style?: string; example: string }
	>();
	walk(spec.tree, (n) => {
		for (const seg of n.text?.segments ?? []) {
			const key = [
				fontLabel(seg),
				seg.letterSpacing,
				segColor(seg),
				seg.textCase ?? "",
				seg.decoration ?? "",
			].join("|");
			const entry = textStyles.get(key) ?? {
				seg,
				count: 0,
				style: seg.textStyle ?? n.styles?.text,
				example: seg.characters,
			};
			entry.count++;
			textStyles.set(key, entry);
		}
	});
	out.push("", `**${t.textStyles}:**`, "");
	out.push(
		table(
			[
				"Style",
				t.family,
				t.size_lh,
				t.weight,
				t.letter,
				t.color,
				t.uses,
				t.example,
			],
			[...textStyles.values()]
				.sort((a, b) => b.seg.font.size - a.seg.font.size || b.count - a.count)
				.map(({ seg, count, style, example }) => [
					style ? `\`${style}\`` : "—",
					seg.font.family,
					`${n2(seg.font.size)} / ${lineHeightFull(seg)}`,
					`${seg.font.weight}${seg.font.italic ? " italic" : ""}${seg.textCase ? ` · case ${seg.textCase.toLowerCase()}` : ""}${seg.decoration ? ` ${seg.decoration.toLowerCase()}` : ""}`,
					seg.letterSpacing,
					segColor(seg),
					count,
					quote(example, 40),
				]),
		),
	);

	// 4. Tree
	h2(4, t.tree);
	out.push(t.treeIntro, "");
	walkPaint(spec.tree, (n, depth) => {
		const pad = "  ".repeat(depth);
		const role = t.roles[n.role] ?? n.role;
		const parts = [`${n2(n.box.width)}×${n2(n.box.height)}${sizingNote(n)}`];
		if (depth > 0)
			parts.push(
				`@ (${n2(n.box.x)}, ${n2(n.box.y)}) ${n.positioning === "absolute" ? "abs" : "flow"}`,
			);
		const lay = layoutSummary(n);
		if (lay) parts.push(lay);
		if (n.text) {
			const segs = n.text.segments;
			parts.push(
				segs.length === 1
					? textDetails(segs[0])
					: `runs: ${segs.map((g) => `${quote(g.characters, Infinity)} ${textDetails(g)}`).join("; ")}`,
			);
			if (n.text.align !== "LEFT")
				parts.push(`text-align ${n.text.align.toLowerCase()}`);
			if (n.text.autoResize === "WIDTH_AND_HEIGHT") parts.push("no-wrap");
			if (n.text.truncation)
				parts.push(
					`truncate${n.text.truncation.maxLines ? ` ${n.text.truncation.maxLines} lines` : ""}`,
				);
		}
		const style = styleSummary(n, assetUrl, imageUrl);
		parts.push(...style);
		if (
			depth > 0 &&
			!n.text &&
			!n.asset &&
			!n.children.length &&
			!style.some((p) => !/^(clip|opacity|rotate)/.test(p))
		)
			parts.push(t.empty);
		if (n.css.display === "none") parts.push("hidden");
		const label = n.text ? quote(n.text.characters, Infinity) : `**${n.name}**`;
		const comp = n.component
			? ` ⟨${n.component.set ?? n.component.name}${
					n.component.properties
						? `: ${Object.entries(n.component.properties)
								.map(([k, v]) => `${k}=${v}`)
								.join(", ")}`
						: ""
				}⟩`
			: "";
		out.push(
			`${pad}- [${role}] ${label}${comp} — ${parts.join(" · ")} \`${n.id}\``,
		);
	});

	// 5. Components
	h2(5, t.components);
	const comps = new Map<
		string,
		{ label: string; props: Set<string>; count: number; key: string | null }
	>();
	walk(spec.tree, (n) => {
		if (!n.component) return;
		const label = n.component.set ?? n.component.name;
		const entry = comps.get(label) ?? {
			label,
			props: new Set<string>(),
			count: 0,
			key: n.component.setKey ?? n.component.key,
		};
		entry.count++;
		if (n.component.properties)
			entry.props.add(
				Object.entries(n.component.properties)
					.map(([k, v]) => `${k}=${v}`)
					.join(", "),
			);
		comps.set(label, entry);
	});
	out.push(
		comps.size
			? table(
					[t.component, t.props, t.count],
					[...comps.values()]
						.sort((a, b) => b.count - a.count)
						.map((c) => [
							`\`${c.label}\``,
							[...c.props].slice(0, 6).join("; ") +
								(c.props.size > 6 ? "; …" : ""),
							c.count,
						]),
				)
			: t.none,
	);

	// 6. Content
	h2(6, t.content);
	for (const section of ordered(spec.tree)) {
		const texts: string[] = [];
		walk(section, (n) => {
			if (n.text && n.css.display !== "none") texts.push(n.text.characters);
		});
		if (!texts.length) continue;
		out.push(`**${section.name}**`, "");
		for (const tx of texts) out.push(`- ${tx.replace(/\r?\n/g, "  \n  ")}`);
		out.push("");
	}

	// 7. Assets
	h2(7, t.assets);
	out.push(
		spec.assets.length
			? table(
					[t.file, t.kind, t.size, t.usedBy],
					spec.assets.map((a) => [
						`\`${opts.assetUrl ? opts.assetUrl(a.file, a.url) : a.url}\``,
						a.kind,
						a.width && a.height ? `${n2(a.width)} × ${n2(a.height)}` : "",
						a.nodeIds.slice(0, 4).join(", ") +
							(a.nodeIds.length > 4 ? ", …" : ""),
					]),
				)
			: t.none,
	);

	// 8. Interactions / annotations / notes
	h2(8, t.interactions);
	const anns: string[] = [];
	const links: string[] = [];
	const protos: string[] = [];
	const notes: string[] = [];
	walk(spec.tree, (n) => {
		for (const a of n.annotations ?? [])
			anns.push(
				`- **${n.name}** (\`${n.id}\`): ${a.label.replace(/\n/g, " ")}${a.properties.length ? ` — ${a.properties.join(", ")}` : ""}`,
			);
		for (const seg of n.text?.segments ?? [])
			if (seg.href) links.push(`- ${quote(seg.characters, 40)} → ${seg.href}`);
		for (const i of n.interactions ?? []) {
			const acts = i.actions
				.map((a) =>
					[a.type, a.url ?? a.destinationId ?? a.navigation]
						.filter(Boolean)
						.join(" "),
				)
				.join(", ");
			protos.push(`- **${n.name}** (\`${n.id}\`): ${i.trigger} → ${acts}`);
		}
		if (n.meta)
			notes.push(
				`- **${n.name}** (\`${n.id}\`): \`${JSON.stringify(n.meta)}\``,
			);
	});
	for (const [label, list] of [
		[t.annotations, anns],
		[t.links, links],
		[t.prototype, protos],
		[t.notes, notes],
	] as const) {
		out.push(`**${label}:**`, "", ...(list.length ? list : [t.none]), "");
	}

	// 9. Fidelity
	h2(9, t.fidelity);
	if (spec.warnings.length) {
		out.push(t.fidelityIntro, "");
		for (const w of spec.warnings)
			out.push(
				`- \`${w.code}\` — **${w.nodeName}** (\`${w.nodeId}\`): ${w.message}`,
			);
	} else out.push(t.fidelityNone);

	// 10. Rebuild guide
	h2(10, t.rebuild);
	out.push(...t.rebuildRules.map((r, i) => `${i + 1}. ${r}`));
	out.push("", `${t.exact} \`${specFile}\`.`, "");

	return out.join("\n");
}
