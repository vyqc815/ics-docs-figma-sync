/**
 * Page fidelity check (pure part).
 *
 * Compares a rendered page with Figma's reference render and with the spec:
 *  - pixels: perceptual (YIQ) color difference, ignoring anti-aliasing shifts
 *    (a pixel only counts when no neighbour within `aaRadius` in the other
 *    image matches it), so font smoothing differences between Figma and the
 *    browser don't drown real defects;
 *  - regions: mismatched pixels grouped into boxes, each attributed to the
 *    deepest spec node that contains it — what to fix, not just where;
 *  - boxes: every element's measured position/size against Figma's frameBox
 *    (needs data-figma-id attributes — generate with debugIds).
 * Produces a verdict against thresholds plus a Markdown report.
 */

import type { PageSpec, SpecNode } from "./normalize.js";
import type { RgbaImage } from "./png.js";

export interface FidelityThresholds {
	/** Max share of mismatched pixels, in percent (default 0.5). */
	maxPixelDiffPercent: number;
	/** Max position/size difference of an element, in px (default 1). */
	maxBoxDelta: number;
	/**
	 * Limit for text-driven elements, in px (default 2.5): text boxes, hug containers
	 * holding text, auto-layout siblings of those, and their descendants. Glyph
	 * widths differ slightly between Figma and browsers (font builds, rasterizers),
	 * and those differences move whatever sizes or flows around the text.
	 */
	maxTextBoxDelta: number;
	/** Per-pixel color threshold, 0–1 (pixelmatch-style, default 0.1). */
	colorThreshold: number;
	/** Neighbourhood radius in px tolerated as anti-aliasing shift (default 1). */
	aaRadius: number;
	/**
	 * Accept a pixel when the 3×3 average colors match: an edge or hairline moved by
	 * a fraction of a pixel (Figma blends it over two rows, the browser snaps it to
	 * one) keeps the same local average, while a missing or recolored line does not.
	 */
	subpixel: boolean;
	/** Max share of differing pixels inside any single text box, in percent (default 35). */
	maxTextNodeDiffPercent: number;
}

export const DEFAULT_THRESHOLDS: FidelityThresholds = {
	maxPixelDiffPercent: 0.5,
	maxBoxDelta: 1,
	maxTextBoxDelta: 2.5,
	colorThreshold: 0.1,
	aaRadius: 1,
	subpixel: true,
	maxTextNodeDiffPercent: 35,
};

export interface PixelDiff {
	width: number;
	height: number;
	mismatched: number;
	percent: number;
	sizeMismatch: boolean;
	mask: Uint8Array;
	diffImage: RgbaImage;
}

export interface DiffRegion {
	x: number;
	y: number;
	width: number;
	height: number;
	pixels: number;
	node?: { id: string; name: string; role: string };
}

export interface MeasuredBox {
	x: number;
	y: number;
	width: number;
	height: number;
	hidden?: boolean;
}

export interface BoxDelta {
	id: string;
	name: string;
	role: string;
	delta: number;
	dx: number;
	dy: number;
	dw: number;
	dh: number;
	/** Limit that applies to this element (text-driven elements get maxTextBoxDelta). */
	limit: number;
	textDriven: boolean;
}

export interface BoxReport {
	measured: number;
	missing: string[];
	withinThreshold: number;
	buckets: Record<string, number>;
	worst: BoxDelta[];
	maxDelta: number;
	/** Elements over their own limit. */
	over: BoxDelta[];
}

export interface FidelityReport {
	pass: boolean;
	thresholds: FidelityThresholds;
	pixels: {
		width: number;
		height: number;
		mismatched: number;
		percent: number;
		/** Differing pixels outside text boxes, as a share of the page — the verdict uses this. */
		shapePercent: number;
		/** Differing pixels inside text boxes, as a share of the text area (glyph rendering). */
		textPercent: number;
		sizeMismatch: boolean;
	};
	/** Text boxes with the most differing pixels (wrong font, weight or color shows up here). */
	textNodes: { id: string; name: string; percent: number; pixels: number }[];
	regions: DiffRegion[];
	boxes: BoxReport | null;
	failures: string[];
}

// ============================================================================
// Pixels
// ============================================================================

const MAX_YIQ_DELTA = 35215;

/** RGB of pixel i blended over white (transparent areas compare as white). */
function rgbAt(d: Uint8Array, i: number): [number, number, number] {
	const a = d[i + 3] / 255;
	return [
		255 + (d[i] - 255) * a,
		255 + (d[i + 1] - 255) * a,
		255 + (d[i + 2] - 255) * a,
	];
}

/** pixelmatch's perceptual color distance (squared YIQ). */
function yiqDelta(
	a: [number, number, number],
	b: [number, number, number],
): number {
	const y1 = a[0] * 0.29889531 + a[1] * 0.58662247 + a[2] * 0.11448223;
	const i1 = a[0] * 0.59597799 - a[1] * 0.2741761 - a[2] * 0.32180189;
	const q1 = a[0] * 0.21147017 - a[1] * 0.52261711 + a[2] * 0.31114694;
	const y2 = b[0] * 0.29889531 + b[1] * 0.58662247 + b[2] * 0.11448223;
	const i2 = b[0] * 0.59597799 - b[1] * 0.2741761 - b[2] * 0.32180189;
	const q2 = b[0] * 0.21147017 - b[1] * 0.52261711 + b[2] * 0.31114694;
	const dy = y1 - y2;
	const di = i1 - i2;
	const dq = q1 - q2;
	return 0.5053 * dy * dy + 0.299 * di * di + 0.1957 * dq * dq;
}

/** 3×3 mean of each pixel's color (over white), as RGB bytes. */
function boxBlur(img: RgbaImage): Uint8Array {
	const { width: w, height: h } = img;
	const flat = new Float32Array(w * h * 3);
	for (let i = 0; i < w * h; i++) {
		const [r, g, b] = rgbAt(img.data, i * 4);
		flat[i * 3] = r;
		flat[i * 3 + 1] = g;
		flat[i * 3 + 2] = b;
	}
	const horiz = new Float32Array(w * h * 3);
	for (let y = 0; y < h; y++) {
		for (let x = 0; x < w; x++) {
			const x0 = Math.max(0, x - 1);
			const x1 = Math.min(w - 1, x + 1);
			for (let c = 0; c < 3; c++) {
				let sum = 0;
				for (let xx = x0; xx <= x1; xx++) sum += flat[(y * w + xx) * 3 + c];
				horiz[(y * w + x) * 3 + c] = sum / (x1 - x0 + 1);
			}
		}
	}
	const out = new Uint8Array(w * h * 3);
	for (let y = 0; y < h; y++) {
		const y0 = Math.max(0, y - 1);
		const y1 = Math.min(h - 1, y + 1);
		for (let x = 0; x < w; x++) {
			for (let c = 0; c < 3; c++) {
				let sum = 0;
				for (let yy = y0; yy <= y1; yy++) sum += horiz[(yy * w + x) * 3 + c];
				out[(y * w + x) * 3 + c] = Math.round(sum / (y1 - y0 + 1));
			}
		}
	}
	return out;
}

export function diffImages(
	ref: RgbaImage,
	act: RgbaImage,
	t: FidelityThresholds = DEFAULT_THRESHOLDS,
): PixelDiff {
	const width = Math.max(ref.width, act.width);
	const height = Math.max(ref.height, act.height);
	const sizeMismatch = ref.width !== act.width || ref.height !== act.height;
	const limit = MAX_YIQ_DELTA * t.colorThreshold * t.colorThreshold;
	const mask = new Uint8Array(width * height);
	const out = new Uint8Array(width * height * 4);
	const r = t.aaRadius;
	const blurRef = t.subpixel ? boxBlur(ref) : null;
	const blurAct = t.subpixel ? boxBlur(act) : null;
	const blurAt = (
		b: Uint8Array,
		img: RgbaImage,
		x: number,
		y: number,
	): [number, number, number] => {
		const i = (y * img.width + x) * 3;
		return [b[i], b[i + 1], b[i + 2]];
	};

	const px = (img: RgbaImage, x: number, y: number) =>
		rgbAt(img.data, (y * img.width + x) * 4);
	/** Does any pixel of `img` within radius r of (x, y) match color c? */
	const nearMatch = (
		img: RgbaImage,
		x: number,
		y: number,
		c: [number, number, number],
	) => {
		for (
			let yy = Math.max(0, y - r);
			yy <= Math.min(img.height - 1, y + r);
			yy++
		) {
			for (
				let xx = Math.max(0, x - r);
				xx <= Math.min(img.width - 1, x + r);
				xx++
			) {
				if (yiqDelta(px(img, xx, yy), c) <= limit) return true;
			}
		}
		return false;
	};

	let mismatched = 0;
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const o = (y * width + x) * 4;
			const inRef = x < ref.width && y < ref.height;
			const inAct = x < act.width && y < act.height;
			let bad = !(inRef && inAct);
			let base: [number, number, number] = [255, 255, 255];
			if (inRef && inAct) {
				const a = px(ref, x, y);
				const b = px(act, x, y);
				base = a;
				if (yiqDelta(a, b) > limit) {
					// Anti-aliasing / sub-pixel shift: tolerated when each side finds its
					// color in the other image's neighbourhood.
					bad = !(r > 0 && nearMatch(act, x, y, a) && nearMatch(ref, x, y, b));
					if (
						bad &&
						blurRef &&
						blurAct &&
						yiqDelta(blurAt(blurRef, ref, x, y), blurAt(blurAct, act, x, y)) <=
							limit
					)
						bad = false;
				}
			} else if (inRef) base = px(ref, x, y);
			if (bad) {
				mismatched++;
				mask[y * width + x] = 1;
				out[o] = 255;
				out[o + 1] = 0;
				out[o + 2] = 0;
			} else {
				// Faded reference for context.
				const g =
					255 -
					(255 - (base[0] * 0.3 + base[1] * 0.59 + base[2] * 0.11)) * 0.15;
				out[o] = g;
				out[o + 1] = g;
				out[o + 2] = g;
			}
			out[o + 3] = 255;
		}
	}
	return {
		width,
		height,
		mismatched,
		percent: (mismatched / (width * height)) * 100,
		sizeMismatch,
		mask,
		diffImage: { width, height, data: out },
	};
}

// ============================================================================
// Regions
// ============================================================================

/** Groups mismatched pixels into boxes (cells of `cell` px, 8-connected). */
export function findRegions(
	mask: Uint8Array,
	width: number,
	height: number,
	cell = 8,
	minPixels = 4,
): DiffRegion[] {
	const cw = Math.ceil(width / cell);
	const ch = Math.ceil(height / cell);
	const counts = new Uint32Array(cw * ch);
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++)
			if (mask[y * width + x])
				counts[Math.floor(y / cell) * cw + Math.floor(x / cell)]++;
	}
	const seen = new Uint8Array(cw * ch);
	const regions: DiffRegion[] = [];
	for (let start = 0; start < counts.length; start++) {
		if (seen[start] || counts[start] === 0) continue;
		let minX = Infinity;
		let minY = Infinity;
		let maxX = -1;
		let maxY = -1;
		let pixels = 0;
		const stack = [start];
		seen[start] = 1;
		while (stack.length) {
			const c = stack.pop() as number;
			const cx = c % cw;
			const cy = Math.floor(c / cw);
			pixels += counts[c];
			minX = Math.min(minX, cx);
			minY = Math.min(minY, cy);
			maxX = Math.max(maxX, cx);
			maxY = Math.max(maxY, cy);
			for (let dy = -1; dy <= 1; dy++) {
				for (let dx = -1; dx <= 1; dx++) {
					const nx = cx + dx;
					const ny = cy + dy;
					if (nx < 0 || ny < 0 || nx >= cw || ny >= ch) continue;
					const n = ny * cw + nx;
					if (!seen[n] && counts[n] > 0) {
						seen[n] = 1;
						stack.push(n);
					}
				}
			}
		}
		if (pixels < minPixels) continue;
		regions.push({
			x: minX * cell,
			y: minY * cell,
			width: Math.min(width, (maxX + 1) * cell) - minX * cell,
			height: Math.min(height, (maxY + 1) * cell) - minY * cell,
			pixels,
		});
	}
	return regions.sort((a, b) => b.pixels - a.pixels);
}

/** The deepest visible node containing the region's centre: the most likely culprit. */
export function attributeRegions(
	regions: DiffRegion[],
	spec: PageSpec,
): DiffRegion[] {
	const nodes: { n: SpecNode; area: number }[] = [];
	(function walk(n: SpecNode, depth: number) {
		if (n.css.display === "none") return;
		if (depth > 0)
			nodes.push({ n, area: n.frameBox.width * n.frameBox.height });
		for (const c of n.children) walk(c, depth + 1);
	})(spec.tree, 0);
	return regions.map((r) => {
		const cx = r.x + r.width / 2;
		const cy = r.y + r.height / 2;
		let best: { n: SpecNode; area: number } | undefined;
		for (const c of nodes) {
			const b = c.n.frameBox;
			if (
				cx >= b.x &&
				cx <= b.x + b.width &&
				cy >= b.y &&
				cy <= b.y + b.height &&
				(!best || c.area <= best.area)
			)
				best = c;
		}
		return best
			? { ...r, node: { id: best.n.id, name: best.n.name, role: best.n.role } }
			: r;
	});
}

// ============================================================================
// Boxes
// ============================================================================

/**
 * Nodes whose box legitimately follows text metrics: text, hug containers that
 * hold text, flow siblings of those (they are pushed along), and descendants.
 */
export function textDrivenNodes(spec: PageSpec): Set<string> {
	const hasText = new Map<string, boolean>();
	const containsText = (n: SpecNode): boolean => {
		const cached = hasText.get(n.id);
		if (cached !== undefined) return cached;
		const v = !!n.text || n.children.some(containsText);
		hasText.set(n.id, v);
		return v;
	};
	const self = (n: SpecNode) =>
		!!n.text ||
		(containsText(n) &&
			(n.sizing?.horizontal === "HUG" || n.sizing?.vertical === "HUG"));
	const out = new Set<string>();
	(function walk(n: SpecNode, inherited: boolean) {
		const flowDriven = n.children.some(
			(c) => c.positioning === "flow" && self(c),
		);
		for (const c of n.children) {
			const driven =
				inherited || self(c) || (c.positioning === "flow" && flowDriven);
			if (driven) out.add(c.id);
			walk(c, driven);
		}
	})(spec.tree, false);
	return out;
}

export function compareBoxes(
	spec: PageSpec,
	measured: Record<string, MeasuredBox>,
	t: FidelityThresholds = DEFAULT_THRESHOLDS,
): BoxReport {
	const textDriven = textDrivenNodes(spec);
	const deltas: BoxDelta[] = [];
	const missing: string[] = [];
	const r2 = (v: number) => Math.round(v * 100) / 100;
	(function walk(n: SpecNode, depth: number) {
		if (n.css.display === "none") return;
		if (depth > 0 && !n.rotation) {
			const m = measured[n.id];
			// A blank text draws nothing; its siblings still show if it pushes them.
			const blank = n.text !== undefined && !n.text.characters.trim();
			if (!m) missing.push(n.id);
			else if (!m.hidden && !blank) {
				const f = n.frameBox;
				const dx = m.x - f.x;
				const dy = m.y - f.y;
				const dw = m.width - f.width;
				const dh = m.height - f.height;
				const driven = textDriven.has(n.id);
				deltas.push({
					id: n.id,
					name: n.name,
					role: n.role,
					delta: r2(
						Math.max(Math.abs(dx), Math.abs(dy), Math.abs(dw), Math.abs(dh)),
					),
					dx: r2(dx),
					dy: r2(dy),
					dw: r2(dw),
					dh: r2(dh),
					limit: driven ? t.maxTextBoxDelta : t.maxBoxDelta,
					textDriven: driven,
				});
			}
		}
		for (const c of n.children) walk(c, depth + 1);
	})(spec.tree, 0);
	deltas.sort((a, b) => b.delta - a.delta);
	const within = (v: number) => deltas.filter((d) => d.delta <= v).length;
	const over = deltas.filter((d) => d.delta > d.limit);
	return {
		measured: deltas.length,
		missing,
		withinThreshold: deltas.length - over.length,
		buckets: {
			"≤0.5px": within(0.5),
			"≤1px": within(1),
			"≤2px": within(2),
			"≤4px": within(4),
			">4px": deltas.length - within(4),
		},
		worst: deltas.slice(0, 25),
		maxDelta: deltas[0]?.delta ?? 0,
		over,
	};
}

// ============================================================================
// Verdict & report
// ============================================================================

/** Text boxes of the spec, in frame coordinates, grown by 1px for glyph overhang. */
function textBoxes(spec: PageSpec): {
	id: string;
	name: string;
	x0: number;
	y0: number;
	x1: number;
	y1: number;
}[] {
	const out: {
		id: string;
		name: string;
		x0: number;
		y0: number;
		x1: number;
		y1: number;
	}[] = [];
	(function walk(n: SpecNode) {
		if (n.css.display === "none") return;
		if (n.text) {
			const b = n.frameBox;
			out.push({
				id: n.id,
				name: n.name,
				x0: Math.floor(b.x - 1),
				y0: Math.floor(b.y - 1),
				x1: Math.ceil(b.x + b.width + 1),
				y1: Math.ceil(b.y + b.height + 1),
			});
		}
		for (const c of n.children) walk(c);
	})(spec.tree);
	return out;
}

export function buildReport(
	spec: PageSpec,
	diff: PixelDiff,
	measured: Record<string, MeasuredBox> | null,
	t: FidelityThresholds = DEFAULT_THRESHOLDS,
): FidelityReport {
	// Split mismatches: inside text boxes (glyph rasterization differs between Figma
	// and browsers; text placement is checked by the box measurements) vs the rest.
	const texts = textBoxes(spec);
	const inText = new Uint8Array(diff.width * diff.height);
	for (const b of texts) {
		for (let y = Math.max(0, b.y0); y < Math.min(diff.height, b.y1); y++)
			inText.fill(
				1,
				y * diff.width + Math.max(0, b.x0),
				y * diff.width + Math.min(diff.width, b.x1),
			);
	}
	const shapeMask = new Uint8Array(diff.mask.length);
	let textArea = 0;
	let textMismatched = 0;
	let shapeMismatched = 0;
	for (let i = 0; i < diff.mask.length; i++) {
		if (inText[i]) {
			textArea++;
			if (diff.mask[i]) textMismatched++;
		} else if (diff.mask[i]) {
			shapeMismatched++;
			shapeMask[i] = 1;
		}
	}
	const textNodes = texts
		.map((b) => {
			let pixels = 0;
			for (let y = Math.max(0, b.y0); y < Math.min(diff.height, b.y1); y++) {
				for (let x = Math.max(0, b.x0); x < Math.min(diff.width, b.x1); x++)
					pixels += diff.mask[y * diff.width + x];
			}
			const area = Math.max(1, (b.x1 - b.x0) * (b.y1 - b.y0));
			return {
				id: b.id,
				name: b.name,
				pixels,
				percent: Math.round((pixels / area) * 1000) / 10,
			};
		})
		.sort((a, b) => b.percent - a.percent)
		.slice(0, 15);

	const regions = attributeRegions(
		findRegions(shapeMask, diff.width, diff.height),
		spec,
	).slice(0, 30);
	const boxes = measured ? compareBoxes(spec, measured, t) : null;
	const total = diff.width * diff.height;
	const shapePercent = (shapeMismatched / total) * 100;
	const failures: string[] = [];
	if (diff.sizeMismatch)
		failures.push("Rendered size differs from the reference render.");
	if (shapePercent > t.maxPixelDiffPercent)
		failures.push(
			`${shapePercent.toFixed(3)}% of non-text pixels differ (limit ${t.maxPixelDiffPercent}%).`,
		);
	const badTexts = textNodes.filter(
		(n) => n.percent > t.maxTextNodeDiffPercent,
	);
	if (badTexts.length)
		failures.push(
			`${badTexts.length} text boxes differ in more than ${t.maxTextNodeDiffPercent}% of their pixels (check font, weight, color).`,
		);
	if (boxes) {
		if (boxes.missing.length)
			failures.push(
				`${boxes.missing.length} spec nodes have no element with data-figma-id.`,
			);
		if (boxes.over.length)
			failures.push(
				`${boxes.over.length} elements are off by more than their limit (${t.maxBoxDelta}px, ${t.maxTextBoxDelta}px for text-driven; worst ${boxes.over[0].delta}px).`,
			);
	}
	const r3 = (v: number) => Math.round(v * 1000) / 1000;
	return {
		pass: failures.length === 0,
		thresholds: t,
		pixels: {
			width: diff.width,
			height: diff.height,
			mismatched: diff.mismatched,
			percent: r3(diff.percent),
			shapePercent: r3(shapePercent),
			textPercent: r3(textArea ? (textMismatched / textArea) * 100 : 0),
			sizeMismatch: diff.sizeMismatch,
		},
		textNodes,
		regions,
		boxes,
		failures,
	};
}

export function reportMarkdown(
	r: FidelityReport,
	title: string,
	url: string,
): string {
	const lines = [
		`# Fidelity: ${title}`,
		"",
		`- URL: \`${url}\``,
		`- Verdict: **${r.pass ? "PASS" : "FAIL"}**`,
		`- Pixels outside text: **${r.pixels.shapePercent}%** differ (limit ${r.thresholds.maxPixelDiffPercent}%); all pixels: ${r.pixels.percent}%; inside text boxes: ${r.pixels.textPercent}% (glyph rendering)`,
	];
	if (r.boxes) {
		lines.push(
			`- Boxes: ${r.boxes.withinThreshold}/${r.boxes.measured} within their limit (${r.thresholds.maxBoxDelta}px, ${r.thresholds.maxTextBoxDelta}px for text-driven) — ${Object.entries(
				r.boxes.buckets,
			)
				.map(([k, v]) => `${k}: ${v}`)
				.join(", ")}`,
		);
	} else
		lines.push(
			"- Boxes: not measured (generate the page with debugIds to get data-figma-id attributes).",
		);
	if (r.failures.length)
		lines.push("", "## Failures", "", ...r.failures.map((f) => `- ${f}`));
	if (r.regions.length) {
		lines.push(
			"",
			"## Pixel regions (largest first)",
			"",
			"| Region (x, y, w×h) | Pixels | Likely node |",
			"| --- | --- | --- |",
		);
		for (const g of r.regions)
			lines.push(
				`| ${g.x}, ${g.y}, ${g.width}×${g.height} | ${g.pixels} | ${g.node ? `${g.node.name} (\`${g.node.id}\`, ${g.node.role})` : "—"} |`,
			);
	}
	if (r.textNodes.length) {
		lines.push(
			"",
			`## Text boxes with most differing pixels (limit ${r.thresholds.maxTextNodeDiffPercent}%)`,
			"",
			"| Text | Differing |",
			"| --- | --- |",
		);
		for (const n of r.textNodes)
			lines.push(
				`| ${n.name.replace(/\|/g, "\\|").slice(0, 60)} (\`${n.id}\`) | ${n.percent}% |`,
			);
	}
	if (r.boxes?.worst.length) {
		lines.push(
			"",
			"## Largest box differences",
			"",
			"| Node | Role | Δ | Limit | dx | dy | dw | dh |",
			"| --- | --- | --- | --- | --- | --- | --- | --- |",
		);
		for (const d of r.boxes.worst)
			lines.push(
				`| ${d.name.replace(/\|/g, "\\|").slice(0, 60)} (\`${d.id}\`) | ${d.role} | ${d.delta}${d.delta > d.limit ? " ✗" : ""} | ${d.limit}${d.textDriven ? " (text)" : ""} | ${d.dx} | ${d.dy} | ${d.dw} | ${d.dh} |`,
			);
	}
	lines.push("");
	return lines.join("\n");
}
