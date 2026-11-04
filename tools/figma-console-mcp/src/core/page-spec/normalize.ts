/**
 * Page spec normalizer.
 *
 * Turns the raw node tree read by the plugin (plugin-scripts.ts) into a
 * framework-agnostic PageSpec: a layout tree where every node carries its exact
 * box, its Figma semantics (auto layout, sizing, typography, tokens, component)
 * AND the CSS declarations that reproduce it at the design width. Code
 * generators (Next.js today, anything later) and the per-page Markdown spec
 * both read this one structure, so they never disagree.
 *
 * Where CSS cannot express a Figma feature exactly, the node still gets the
 * closest CSS and a warning is recorded — the pixel-diff step uses those
 * warnings to explain the regions it flags.
 */

import type { AssetJob } from "./plugin-scripts.js";

// biome-ignore lint/suspicious/noExplicitAny: raw plugin output is untyped JSON
type RawNode = Record<string, any>;
type Css = Record<string, string>;

export const PAGE_SPEC_VERSION = 1;

export interface SpecWarning {
	nodeId: string;
	nodeName: string;
	code: string;
	message: string;
}

export interface SpecBox {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface SpecTextSegment {
	start: number;
	end: number;
	characters: string;
	font: {
		family: string;
		style: string;
		weight: number;
		size: number;
		italic: boolean;
	};
	lineHeight: string;
	letterSpacing: string;
	color?: string;
	textCase?: string;
	decoration?: string;
	href?: string;
	list?: string;
	indentation?: number;
	textStyle?: string;
	tokens?: Record<string, string>;
	css: Css;
}

export interface SpecNode {
	id: string;
	name: string;
	type: string;
	role: "page" | "container" | "text" | "image" | "icon" | "shape" | "instance";
	/** Position relative to the parent node, size of the node (unrotated). */
	box: SpecBox;
	/** Position relative to the exported root frame. */
	frameBox: SpecBox;
	rotation?: number;
	positioning: "root" | "flow" | "absolute";
	layout?: {
		mode: "row" | "column" | "grid" | "none";
		wrap: boolean;
		gap: number;
		crossGap?: number;
		padding: { top: number; right: number; bottom: number; left: number };
		justify: string;
		align: string;
	};
	sizing?: { horizontal: string; vertical: string };
	text?: {
		characters: string;
		align: string;
		verticalAlign: string;
		autoResize: string;
		truncation?: { maxLines: number | null };
		paragraphSpacing: number;
		paragraphIndent: number;
		segments: SpecTextSegment[];
	};
	component?: {
		name: string;
		key: string | null;
		set?: string;
		setKey?: string | null;
		properties?: Record<string, string | boolean>;
		remote: boolean;
	};
	tokens?: Record<string, string | string[]>;
	styles?: Record<string, string>;
	annotations?: {
		label: string;
		category: string | null;
		properties: string[];
	}[];
	interactions?: { trigger: string; actions: Record<string, unknown>[] }[];
	/** Hidden per-node overrides from sharedPluginData figma_console/spec. */
	meta?: Record<string, unknown>;
	asset?: string;
	/** Rendered bounds of an exported asset relative to the node origin (shadows/strokes can overflow). */
	renderBounds?: SpecBox;
	css: Css;
	children: SpecNode[];
}

export interface SpecAsset {
	id: string;
	kind: "image" | "svg" | "png";
	file: string;
	url: string;
	nodeIds: string[];
	fetched: boolean;
	width?: number;
	height?: number;
	bytes?: number;
}

export interface SpecVariable {
	name: string;
	collection: string | null;
	mode: string | null;
	type: string;
	value: string | number | boolean | null;
	aliasOf: string[];
	cssVariable: string;
	codeSyntax: Record<string, string>;
}

export interface PageSpec {
	specVersion: number;
	source: {
		fileKey: string | null;
		fileName: string;
		pageName: string | null;
		nodeId: string;
		nodeName: string;
		exportedAt: string;
	};
	frame: { width: number; height: number; background?: string };
	fonts: { family: string; styles: string[]; weights: number[] }[];
	tokens: {
		variables: SpecVariable[];
		styles: { name: string; type: string; description: string }[];
	};
	assets: SpecAsset[];
	/** Asset files directory, relative to page-spec.json (set when assets were written). */
	assetsDir?: string;
	reference?: { file: string; scale: number; width?: number; height?: number };
	stats: {
		nodes: number;
		texts: number;
		images: number;
		icons: number;
		instances: number;
	};
	warnings: SpecWarning[];
	tree: SpecNode;
}

export interface RawExtract {
	file: { fileKey: string | null; fileName: string; pageName: string | null };
	tree: RawNode;
	variables: RawNode[];
	styles: RawNode[];
	assets: AssetJob[];
	warnings: SpecWarning[];
	nodeCount: number;
}

export interface FetchedAsset {
	file: string;
	width?: number;
	height?: number;
	bytes?: number;
}

export interface NormalizeOptions {
	/** URL prefix the assets are served from, e.g. "/figma/home". */
	assetsPublicPath: string;
	/** Assets already written to disk, by asset id. */
	fetchedAssets?: Record<string, FetchedAsset>;
	exportedAt?: string;
}

// ============================================================================
// Small helpers
// ============================================================================

export function round(n: number, digits = 2): number {
	const f = 10 ** digits;
	const r = Math.round(n * f) / f;
	return Object.is(r, -0) ? 0 : r;
}

export function px(n: number): string {
	const r = round(n);
	return r === 0 ? "0" : `${r}px`;
}

function pct(n: number): string {
	return `${round(n * 100)}%`;
}

export function slug(s: string): string {
	return s
		.normalize("NFD")
		.replace(/[̀-ͯ]/g, "")
		.replace(/đ/g, "d")
		.replace(/Đ/g, "D")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 48);
}

/** Figma 0–1 RGB(A) → CSS: #rrggbb when opaque, rgba() otherwise. */
export function cssColor(
	c: { r: number; g: number; b: number; a?: number },
	opacity = 1,
): string {
	const to = (v: number) => Math.round(Math.min(1, Math.max(0, v)) * 255);
	const a = round((c.a ?? 1) * opacity, 3);
	if (a >= 1) {
		return `#${[c.r, c.g, c.b].map((v) => to(v).toString(16).padStart(2, "0")).join("")}`;
	}
	return `rgba(${to(c.r)}, ${to(c.g)}, ${to(c.b)}, ${a})`;
}

type Affine = number[][];

function invert(m: Affine): Affine {
	const [a, b, c] = m[0];
	const [d, e, f] = m[1];
	const det = a * e - b * d;
	if (Math.abs(det) < 1e-12)
		return [
			[1, 0, 0],
			[0, 1, 0],
		];
	return [
		[e / det, -b / det, (b * f - e * c) / det],
		[-d / det, a / det, (d * c - a * f) / det],
	];
}

function apply(m: Affine, x: number, y: number): [number, number] {
	return [
		m[0][0] * x + m[0][1] * y + m[0][2],
		m[1][0] * x + m[1][1] * y + m[1][2],
	];
}

/** File extension from an image's magic bytes. */
export function sniffImageExt(buf: Uint8Array): string {
	if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47)
		return "png";
	if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpg";
	if (buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46) return "gif";
	if (
		buf[0] === 0x52 &&
		buf[1] === 0x49 &&
		buf[2] === 0x46 &&
		buf[3] === 0x46 &&
		buf[8] === 0x57 &&
		buf[9] === 0x45
	)
		return "webp";
	return "png";
}

/** Width/height from a PNG's IHDR chunk. */
export function pngSize(
	buf: Uint8Array,
): { width: number; height: number } | null {
	if (buf.length < 24 || sniffImageExt(buf) !== "png") return null;
	const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	return { width: view.getUint32(16), height: view.getUint32(20) };
}

export function assetFileName(job: AssetJob, ext: string): string {
	const base =
		job.kind === "image"
			? `img-${job.imageHash.slice(0, 12)}`
			: `${slug(job.name) || job.kind}-${job.nodeId.replace(/[^0-9a-zA-Z]+/g, "-")}`;
	return `${base}.${ext}`;
}

// ============================================================================
// Paints, strokes, effects
// ============================================================================

interface Ctx {
	warn: (n: RawNode, code: string, message: string) => void;
	varName: (id: string) => string | undefined;
	styleName: (id: string) => string | undefined;
	assetUrl: (id: string) => string;
	assetSize: (id: string) => { width?: number; height?: number };
}

function stopsCss(
	stops: RawNode[],
	opacity: number,
	pos: (t: number) => string,
): string {
	return stops
		.map((s) => `${cssColor(s.color, opacity)} ${pos(s.position)}`)
		.join(", ");
}

/** Exact CSS for a Figma linear gradient on a w×h box (projects stops onto the CSS gradient line). */
export function linearGradientCss(
	paint: RawNode,
	w: number,
	h: number,
): string {
	const inv = invert(paint.gradientTransform);
	const [sx, sy] = apply(inv, 0, 0.5);
	const [ex, ey] = apply(inv, 1, 0.5);
	const S = [sx * w, sy * h];
	const E = [ex * w, ey * h];
	const dx = E[0] - S[0];
	const dy = E[1] - S[1];
	const len = Math.hypot(dx, dy) || 1;
	const dir = [dx / len, dy / len];
	const theta = Math.atan2(dir[0], -dir[1]);
	const L = Math.abs(w * Math.sin(theta)) + Math.abs(h * Math.cos(theta)) || 1;
	const P0 = [w / 2 - (dir[0] * L) / 2, h / 2 - (dir[1] * L) / 2];
	const deg = round(((theta * 180) / Math.PI + 360) % 360);
	const stops = stopsCss(paint.gradientStops, paint.opacity ?? 1, (t) => {
		const pt = [S[0] + t * dx, S[1] + t * dy];
		return pct(((pt[0] - P0[0]) * dir[0] + (pt[1] - P0[1]) * dir[1]) / L);
	});
	return `linear-gradient(${deg}deg, ${stops})`;
}

function radialGeometry(paint: RawNode, w: number, h: number) {
	const inv = invert(paint.gradientTransform);
	const [cx, cy] = apply(inv, 0.5, 0.5);
	const [r1x, r1y] = apply(inv, 1, 0.5);
	const [r2x, r2y] = apply(inv, 0.5, 1);
	const C = [cx * w, cy * h];
	const a1 = [r1x * w - C[0], r1y * h - C[1]];
	const a2 = [r2x * w - C[0], r2y * h - C[1]];
	return {
		C,
		a1,
		a2,
		rx: Math.hypot(a1[0], a1[1]),
		ry: Math.hypot(a2[0], a2[1]),
	};
}

function paintLayer(
	paint: RawNode,
	n: RawNode,
	ctx: Ctx,
): { layer: string; solid?: string } | null {
	const w = n.width;
	const h = n.height;
	const opacity = paint.opacity ?? 1;
	if (
		paint.blendMode &&
		paint.blendMode !== "NORMAL" &&
		paint.blendMode !== "PASS_THROUGH"
	) {
		ctx.warn(
			n,
			"PAINT_BLEND_MODE",
			`Fill blend mode ${paint.blendMode} is not reproduced per layer.`,
		);
	}
	switch (paint.type) {
		case "SOLID": {
			const c = cssColor(paint.color, opacity);
			return { layer: `linear-gradient(${c}, ${c})`, solid: c };
		}
		case "GRADIENT_LINEAR":
			return { layer: linearGradientCss(paint, w, h) };
		case "GRADIENT_RADIAL":
		case "GRADIENT_DIAMOND": {
			const g = radialGeometry(paint, w, h);
			const tilt = Math.abs(Math.atan2(g.a1[1], g.a1[0]));
			if (tilt > 0.01 && Math.abs(tilt - Math.PI) > 0.01) {
				ctx.warn(
					n,
					"GRADIENT_ROTATED",
					"Rotated radial gradient: CSS ellipses are axis-aligned, rendered unrotated.",
				);
			}
			if (paint.type === "GRADIENT_DIAMOND") {
				ctx.warn(
					n,
					"GRADIENT_DIAMOND",
					"Diamond gradient has no CSS equivalent; approximated with a radial gradient.",
				);
			}
			const stops = stopsCss(paint.gradientStops, opacity, pct);
			return {
				layer: `radial-gradient(${px(g.rx)} ${px(g.ry)} at ${px(g.C[0])} ${px(g.C[1])}, ${stops})`,
			};
		}
		case "GRADIENT_ANGULAR": {
			const g = radialGeometry(paint, w, h);
			const from = round(
				((Math.atan2(g.a1[0], -g.a1[1]) * 180) / Math.PI + 360) % 360,
			);
			const stops = stopsCss(paint.gradientStops, opacity, pct);
			return {
				layer: `conic-gradient(from ${from}deg at ${px(g.C[0])} ${px(g.C[1])}, ${stops})`,
			};
		}
		case "IMAGE": {
			if (!paint.assetId) return null;
			if (opacity < 1)
				ctx.warn(
					n,
					"IMAGE_OPACITY",
					`Image fill opacity ${round(opacity)} needs a separate layer (CSS backgrounds have no per-layer opacity).`,
				);
			if (
				paint.filters &&
				Object.values(paint.filters).some(
					(v) => typeof v === "number" && v !== 0,
				)
			) {
				ctx.warn(
					n,
					"IMAGE_FILTERS",
					"Image adjustments (exposure, contrast…) are not reproduced; export the image with them baked in.",
				);
			}
			if (paint.rotation)
				ctx.warn(
					n,
					"IMAGE_ROTATION",
					`Image fill rotated ${paint.rotation}° is not reproduced.`,
				);
			const url = `url("${ctx.assetUrl(paint.assetId)}")`;
			switch (paint.scaleMode) {
				case "FIT":
					return { layer: `${url} center / contain no-repeat` };
				case "TILE": {
					const s = ctx.assetSize(paint.assetId);
					const f = paint.scalingFactor ?? 1;
					const size =
						s.width && s.height
							? `${px(s.width * f)} ${px(s.height * f)}`
							: "auto";
					return { layer: `${url} 0 0 / ${size} repeat` };
				}
				case "CROP": {
					const t: Affine | undefined = paint.imageTransform;
					if (!t) return { layer: `${url} center / cover no-repeat` };
					if (Math.abs(t[0][1]) > 1e-6 || Math.abs(t[1][0]) > 1e-6) {
						ctx.warn(
							n,
							"IMAGE_CROP_ROTATED",
							"Rotated image crop is not reproduced.",
						);
					}
					const bw = w / t[0][0];
					const bh = h / t[1][1];
					return {
						layer: `${url} ${px(-t[0][2] * bw)} ${px(-t[1][2] * bh)} / ${px(bw)} ${px(bh)} no-repeat`,
					};
				}
				default:
					return { layer: `${url} center / cover no-repeat` };
			}
		}
		default:
			ctx.warn(
				n,
				"PAINT_UNSUPPORTED",
				`Paint type ${paint.type} is not supported.`,
			);
			return null;
	}
}

function visiblePaints(paints: unknown): RawNode[] {
	if (!Array.isArray(paints)) return [];
	return paints.filter((p) => p.visible !== false && (p.opacity ?? 1) > 0);
}

/** Figma fills (bottom→top) → CSS background (top→bottom). */
function backgroundCss(n: RawNode, ctx: Ctx, css: Css): void {
	const layers = visiblePaints(n.fills)
		.map((p) => paintLayer(p, n, ctx))
		.filter((l): l is { layer: string; solid?: string } => l !== null)
		.reverse();
	if (layers.length === 0) return;
	if (layers.length === 1 && layers[0].solid)
		css["background-color"] = layers[0].solid;
	else css.background = layers.map((l) => l.layer).join(", ");
}

/**
 * Exact gradient stroke for an opaque box: a transparent border shows a
 * border-box gradient layer under the padding-box fill. The padding shrinks by
 * the stroke width so the content stays where Figma puts it.
 */
function gradientBorderCss(
	n: RawNode,
	stroke: RawNode,
	ctx: Ctx,
	css: Css,
): boolean {
	if (!String(stroke.type).startsWith("GRADIENT_")) return false;
	const w = n.strokeWeight;
	if (typeof w !== "number" || !(w > 0)) return false;
	if (Array.isArray(n.dashPattern) && n.dashPattern.length) return false;
	const align: string = n.strokeAlign ?? "INSIDE";
	// Takes layout space exactly like a CSS border; otherwise the padding gives the room back.
	const takesSpace = align === "INSIDE" && !!n.strokesIncludedInLayout;
	const fills = visiblePaints(n.fills);
	const opaque =
		fills.length === 1 &&
		fills[0].type === "SOLID" &&
		(fills[0].opacity ?? 1) >= 1 &&
		(fills[0].color?.a ?? 1) >= 1;
	if (!opaque) return false;
	const pad = [
		n.paddingTop ?? 0,
		n.paddingRight ?? 0,
		n.paddingBottom ?? 0,
		n.paddingLeft ?? 0,
	];
	const hasChildren = Array.isArray(n.children) && n.children.length > 0;
	if (
		hasChildren &&
		!takesSpace &&
		!(isAutoLayout(n) && pad.every((v) => v >= w))
	)
		return false;
	const gradient = paintLayer(stroke, n, ctx);
	if (!gradient) return false;
	const fill = cssColor(fills[0].color);
	css.background = `linear-gradient(${fill}, ${fill}) padding-box, ${gradient.layer} border-box`;
	delete css["background-color"];
	css.border = `${px(w)} solid transparent`;
	if (!takesSpace && isAutoLayout(n) && pad.some((v) => v))
		css.padding = pad.map((v) => px(v - w)).join(" ");
	if (align !== "INSIDE") {
		ctx.warn(
			n,
			"STROKE_GRADIENT_INSIDE",
			`Gradient ${align.toLowerCase()} stroke is drawn inside the box (${round(align === "CENTER" ? w / 2 : w)}px inward); colors are exact.`,
		);
	}
	return true;
}

function strokeCss(n: RawNode, ctx: Ctx, css: Css, shadows: string[]): void {
	const strokes = visiblePaints(n.strokes);
	if (strokes.length === 0) return;
	if (strokes.length > 1)
		ctx.warn(n, "STROKE_MULTIPLE", "Only the top stroke paint is reproduced.");
	const top = strokes[strokes.length - 1];
	if (gradientBorderCss(n, top, ctx, css)) return;
	let color: string;
	if (top.type === "SOLID") color = cssColor(top.color, top.opacity ?? 1);
	else {
		ctx.warn(
			n,
			"STROKE_GRADIENT",
			"Gradient/image strokes are approximated with their first color.",
		);
		color = top.gradientStops?.[0]
			? cssColor(top.gradientStops[0].color, top.opacity ?? 1)
			: "currentColor";
	}
	const uniform = typeof n.strokeWeight === "number";
	const sides = {
		top: uniform ? n.strokeWeight : (n.strokeTopWeight ?? 0),
		right: uniform ? n.strokeWeight : (n.strokeRightWeight ?? 0),
		bottom: uniform ? n.strokeWeight : (n.strokeBottomWeight ?? 0),
		left: uniform ? n.strokeWeight : (n.strokeLeftWeight ?? 0),
	};
	const w = sides.top;
	if (!uniform && !Object.values(sides).some((v) => v > 0)) return;
	if (uniform && !(w > 0)) return;
	const dashed = Array.isArray(n.dashPattern) && n.dashPattern.length > 0;
	const align = n.strokeAlign ?? "INSIDE";

	// "Include strokes in layout" only makes INSIDE strokes take space (children
	// move in by the stroke, hug sizes grow); center/outside strokes never do.
	if (n.strokesIncludedInLayout && align === "INSIDE") {
		// Strokes take layout space in Figma here — a real border matches that.
		// Browsers snap border widths to device pixels (1.5px is 1px at 1x), so a
		// fractional stroke becomes padding for the space plus an inset shadow.
		const widths = [sides.top, sides.right, sides.bottom, sides.left];
		if (!dashed && widths.some((v) => v % 1 !== 0)) {
			const pad = (css.padding ?? "0").split(/\s+/).map(Number.parseFloat);
			const [t = 0, r = t, b = t, l = r] = pad;
			css.padding = [t, r, b, l].map((v, i) => px(v + widths[i])).join(" ");
			if (uniform) shadows.push(`inset 0 0 0 ${px(w)} ${color}`);
			else {
				if (sides.top) shadows.push(`inset 0 ${px(sides.top)} 0 0 ${color}`);
				if (sides.bottom)
					shadows.push(`inset 0 ${px(-sides.bottom)} 0 0 ${color}`);
				if (sides.left) shadows.push(`inset ${px(sides.left)} 0 0 0 ${color}`);
				if (sides.right)
					shadows.push(`inset ${px(-sides.right)} 0 0 0 ${color}`);
			}
			return;
		}
		const style = dashed ? "dashed" : "solid";
		if (uniform) css.border = `${px(w)} ${style} ${color}`;
		else {
			css["border-style"] = style;
			css["border-color"] = color;
			css["border-width"] = [sides.top, sides.right, sides.bottom, sides.left]
				.map(px)
				.join(" ");
		}
		return;
	}
	if (dashed) {
		if (!uniform)
			ctx.warn(
				n,
				"STROKE_DASHED_SIDES",
				"Dashed per-side strokes are drawn on all sides.",
			);
		ctx.warn(
			n,
			"STROKE_DASH_PATTERN",
			"CSS dashes cannot follow Figma's dash pattern exactly.",
		);
		css.outline = `${px(w)} dashed ${color}`;
		css["outline-offset"] = px(
			align === "INSIDE" ? -w : align === "CENTER" ? -w / 2 : 0,
		);
		return;
	}
	if (uniform) {
		if (align === "INSIDE") shadows.push(`inset 0 0 0 ${px(w)} ${color}`);
		else if (align === "OUTSIDE") shadows.push(`0 0 0 ${px(w)} ${color}`);
		else {
			css.outline = `${px(w)} solid ${color}`;
			css["outline-offset"] = px(-w / 2);
		}
		return;
	}
	if (align !== "INSIDE")
		ctx.warn(
			n,
			"STROKE_SIDES_ALIGN",
			`Per-side ${align.toLowerCase()} strokes are drawn inside.`,
		);
	if (sides.top) shadows.push(`inset 0 ${px(sides.top)} 0 0 ${color}`);
	if (sides.bottom) shadows.push(`inset 0 ${px(-sides.bottom)} 0 0 ${color}`);
	if (sides.left) shadows.push(`inset ${px(sides.left)} 0 0 0 ${color}`);
	if (sides.right) shadows.push(`inset ${px(-sides.right)} 0 0 0 ${color}`);
}

function effectsCss(
	n: RawNode,
	ctx: Ctx,
	css: Css,
	shadows: string[],
	isText: boolean,
): void {
	if (!Array.isArray(n.effects)) return;
	const textShadows: string[] = [];
	const filters: string[] = [];
	for (const e of n.effects) {
		if (e.visible === false) continue;
		const color = e.color ? cssColor(e.color) : "transparent";
		const x = px(e.offset?.x ?? 0);
		const y = px(e.offset?.y ?? 0);
		const r = px(e.radius ?? 0);
		switch (e.type) {
			case "DROP_SHADOW":
				if (isText) textShadows.push(`${x} ${y} ${r} ${color}`);
				else shadows.push(`${x} ${y} ${r} ${px(e.spread ?? 0)} ${color}`);
				break;
			case "INNER_SHADOW":
				if (isText)
					ctx.warn(
						n,
						"TEXT_INNER_SHADOW",
						"Inner shadow on text has no CSS equivalent.",
					);
				else shadows.push(`inset ${x} ${y} ${r} ${px(e.spread ?? 0)} ${color}`);
				break;
			case "LAYER_BLUR":
				filters.push(`blur(${px((e.radius ?? 0) / 2)})`);
				break;
			case "BACKGROUND_BLUR":
				css["backdrop-filter"] = `blur(${px((e.radius ?? 0) / 2)})`;
				break;
			default:
				ctx.warn(
					n,
					"EFFECT_UNSUPPORTED",
					`Effect ${e.type} is not reproduced.`,
				);
		}
	}
	if (textShadows.length) css["text-shadow"] = textShadows.join(", ");
	if (filters.length) css.filter = filters.join(" ");
}

function radiusCss(n: RawNode, ctx: Ctx, css: Css): void {
	if (n.type === "ELLIPSE") {
		css["border-radius"] = "50%";
		return;
	}
	if (typeof n.cornerRadius === "number") {
		if (n.cornerRadius > 0) css["border-radius"] = px(n.cornerRadius);
	} else if (n.topLeftRadius !== undefined) {
		const r = [
			n.topLeftRadius,
			n.topRightRadius,
			n.bottomRightRadius,
			n.bottomLeftRadius,
		];
		if (r.some((v) => v > 0))
			css["border-radius"] = r.map((v) => px(v ?? 0)).join(" ");
	}
	if (n.cornerSmoothing > 0 && css["border-radius"]) {
		ctx.warn(
			n,
			"CORNER_SMOOTHING",
			`Corner smoothing ${round(n.cornerSmoothing * 100)}% (squircle) is drawn as a plain radius.`,
		);
	}
}

const BLEND_MODES: Record<string, string> = {
	DARKEN: "darken",
	MULTIPLY: "multiply",
	COLOR_BURN: "color-burn",
	LIGHTEN: "lighten",
	SCREEN: "screen",
	COLOR_DODGE: "color-dodge",
	OVERLAY: "overlay",
	SOFT_LIGHT: "soft-light",
	HARD_LIGHT: "hard-light",
	DIFFERENCE: "difference",
	EXCLUSION: "exclusion",
	HUE: "hue",
	SATURATION: "saturation",
	COLOR: "color",
	LUMINOSITY: "luminosity",
};

// ============================================================================
// Typography
// ============================================================================

/**
 * A percent line height is laid out by Figma at whole pixels (15px × 125% =
 * 18.75 → 19, 12px × 125% = 15, 13px × 125% = 16.25 → 16), so it becomes that px
 * value; a bare 1.25 would drift by up to half a pixel on every line.
 */
export function lineHeightCss(
	lh: RawNode | undefined,
	fontSize?: number,
): string {
	if (!lh || lh.unit === "AUTO") return "normal";
	if (lh.unit === "PIXELS") return px(lh.value);
	if (fontSize) return px(Math.round((lh.value / 100) * fontSize));
	return String(round(lh.value / 100, 4));
}

export function letterSpacingCss(ls: RawNode | undefined): string {
	if (!ls || !ls.value) return "0";
	if (ls.unit === "PIXELS") return px(ls.value);
	return `${round(ls.value / 100, 4)}em`;
}

const TEXT_CASE: Record<string, [string, string]> = {
	UPPER: ["text-transform", "uppercase"],
	LOWER: ["text-transform", "lowercase"],
	TITLE: ["text-transform", "capitalize"],
	SMALL_CAPS: ["font-variant-caps", "small-caps"],
	SMALL_CAPS_FORCED: ["font-variant-caps", "all-small-caps"],
};

function segmentFromRaw(seg: RawNode, n: RawNode, ctx: Ctx): SpecTextSegment {
	const family: string = seg.fontName?.family ?? "sans-serif";
	const style: string = seg.fontName?.style ?? "Regular";
	const italic = /italic|oblique/i.test(style);
	const weight: number =
		typeof seg.fontWeight === "number" ? seg.fontWeight : 400;
	const size: number = seg.fontSize ?? 16;
	const css: Css = {
		"font-family": `"${family}"`,
		"font-size": px(size),
		"font-weight": String(weight),
		"line-height": lineHeightCss(seg.lineHeight, size),
		"letter-spacing": letterSpacingCss(seg.letterSpacing),
	};
	if (italic) css["font-style"] = "italic";
	const out: SpecTextSegment = {
		start: seg.start,
		end: seg.end,
		characters: seg.characters,
		font: { family, style, weight, size, italic },
		lineHeight: css["line-height"],
		letterSpacing: css["letter-spacing"],
		css,
	};

	const fills = visiblePaints(seg.fills);
	if (fills.length === 1 && fills[0].type === "SOLID") {
		out.color = cssColor(fills[0].color, fills[0].opacity ?? 1);
		css.color = out.color;
	} else if (fills.length > 0) {
		const bg: Css = {};
		backgroundCss({ ...n, fills: seg.fills }, ctx, bg);
		css.background = bg.background ?? bg["background-color"];
		css["-webkit-background-clip"] = "text";
		css["background-clip"] = "text";
		css.color = "transparent";
	}
	if (seg.textCase && TEXT_CASE[seg.textCase]) {
		out.textCase = seg.textCase;
		const [k, v] = TEXT_CASE[seg.textCase];
		css[k] = v;
	}
	if (
		seg.textDecoration === "UNDERLINE" ||
		seg.textDecoration === "STRIKETHROUGH"
	) {
		out.decoration = seg.textDecoration;
		css["text-decoration"] =
			seg.textDecoration === "UNDERLINE" ? "underline" : "line-through";
	}
	if (seg.hyperlink?.type === "URL") out.href = seg.hyperlink.value;
	if (seg.listOptions?.type && seg.listOptions.type !== "NONE")
		out.list = seg.listOptions.type;
	if (seg.indentation) out.indentation = seg.indentation;
	if (typeof seg.textStyleId === "string" && seg.textStyleId)
		out.textStyle = ctx.styleName(seg.textStyleId);
	const tokens = tokenNames(seg.boundVariables, ctx);
	const fillToken = paintTokens(seg.fills, ctx);
	if (fillToken.length) tokens.fills = fillToken;
	if (Object.keys(tokens).length) out.tokens = tokens as Record<string, string>;
	return out;
}

const TEXT_ALIGN: Record<string, string> = {
	LEFT: "left",
	CENTER: "center",
	RIGHT: "right",
	JUSTIFIED: "justify",
};

function textCss(
	n: RawNode,
	ctx: Ctx,
	css: Css,
): NonNullable<SpecNode["text"]> {
	// Shift+Enter puts U+2028 in the text: the designer's line break. Figma only
	// wraps there when the line is full and browsers never do; keep the break.
	const breaks = (t: string) => t.replace(/[\u2028\u2029]/g, "\n");
	if (typeof n.characters === "string") n.characters = breaks(n.characters);
	for (const g of n.segments ?? [])
		if (typeof g.characters === "string") g.characters = breaks(g.characters);
	const raw: RawNode[] =
		Array.isArray(n.segments) && n.segments.length
			? n.segments
			: [{ ...n, start: 0, end: (n.characters ?? "").length }];
	const segments = raw.map((s) => segmentFromRaw(s, n, ctx));
	const autoResize: string = n.textAutoResize ?? "NONE";
	const verticalAlign: string = n.textAlignVertical ?? "TOP";
	// Several runs become spans inside the text box. The box's own font still sets
	// the minimum height of every line (its strut), and it would inherit the app's
	// (e.g. 16px / 1.5 = 24px a line). Give it the tallest run's font instead, so
	// lines are exactly as tall as in Figma.
	if (segments.length > 1) {
		const lineOf = (g: SpecTextSegment) =>
			g.lineHeight === "normal"
				? g.font.size
				: g.lineHeight.endsWith("px")
					? Number.parseFloat(g.lineHeight)
					: Number.parseFloat(g.lineHeight) * g.font.size;
		const tallest = segments.reduce((a, b) => (lineOf(b) > lineOf(a) ? b : a));
		for (const k of ["font-family", "font-size", "line-height"])
			if (tallest.css[k]) css[k] = tallest.css[k];
	}

	// An empty (or blank) text keeps one line's height in Figma; in a browser it has none.
	if (!(n.characters ?? "").trim() && n.height > 0)
		css["min-height"] = px(n.height);

	css["text-align"] = TEXT_ALIGN[n.textAlignHorizontal ?? "LEFT"] ?? "left";
	css["white-space"] = autoResize === "WIDTH_AND_HEIGHT" ? "pre" : "pre-wrap";
	// Figma rounds an auto-width text box up to whole pixels; the browser's box is
	// the exact glyph width. A min-width keeps the Figma box (and everything laid
	// out around it) while still growing if the text gets longer.
	if (autoResize === "WIDTH_AND_HEIGHT" && !css.flex && !css["min-width"])
		css["min-width"] = px(n.width);
	if (autoResize !== "WIDTH_AND_HEIGHT") css["overflow-wrap"] = "break-word";
	// A fixed-width text that is one line in Figma must stay one line: browsers draw
	// some fonts a hair wider, and the last word would wrap onto a second line.
	if (
		autoResize !== "WIDTH_AND_HEIGHT" &&
		!(n.characters ?? "").includes("\n")
	) {
		const lineOf = (g: SpecTextSegment) =>
			g.lineHeight === "normal"
				? g.font.size * 1.25
				: g.lineHeight.endsWith("px")
					? Number.parseFloat(g.lineHeight)
					: Number.parseFloat(g.lineHeight) * g.font.size;
		const line = Math.max(...segments.map(lineOf));
		if (line > 0 && n.height < line * 1.5) css["white-space"] = "pre";
	}
	const fixedHeight = autoResize === "NONE" || autoResize === "TRUNCATE";
	if (fixedHeight && verticalAlign !== "TOP") {
		css.display = "flex";
		css["flex-direction"] = "column";
		css["justify-content"] = verticalAlign === "CENTER" ? "center" : "flex-end";
	}
	let truncation: { maxLines: number | null } | undefined;
	if (n.textTruncation === "ENDING") {
		truncation = {
			maxLines: typeof n.maxLines === "number" ? n.maxLines : null,
		};
		css.overflow = "hidden";
		if (truncation.maxLines && truncation.maxLines > 1) {
			css.display = "-webkit-box";
			css["-webkit-box-orient"] = "vertical";
			css["-webkit-line-clamp"] = String(truncation.maxLines);
			delete css["flex-direction"];
			delete css["justify-content"];
		} else {
			css["white-space"] = "nowrap";
			css["text-overflow"] = "ellipsis";
		}
	}
	// Runs in different fonts sit on one baseline, so a mixed line is taller than
	// any run's line height in a browser. When the text is certainly one line,
	// pin it to Figma's height.
	if (
		segments.length > 1 &&
		!css.height &&
		n.height > 0 &&
		!(n.characters ?? "").includes("\n") &&
		(css["white-space"] === "pre" || css["white-space"] === "nowrap")
	)
		css.height = px(n.height);
	// Figma never makes a line of text shorter than the line, even when it fills a
	// smaller parent (it overflows instead); a stretched box in CSS would shrink.
	if (
		n.layoutSizingVertical === "FILL" &&
		n.height > 0 &&
		!(n.characters ?? "").includes("\n") &&
		(css["white-space"] === "pre" || css["white-space"] === "nowrap")
	)
		css["min-height"] = px(n.height);
	if (n.paragraphIndent) css["text-indent"] = px(n.paragraphIndent);
	if (segments.length === 1) Object.assign(css, segments[0].css);

	const strokes = visiblePaints(n.strokes);
	if (
		strokes.length &&
		typeof n.strokeWeight === "number" &&
		n.strokeWeight > 0 &&
		strokes[0].type === "SOLID"
	) {
		ctx.warn(
			n,
			"TEXT_STROKE",
			"Text stroke uses -webkit-text-stroke, which is always centered.",
		);
		css["-webkit-text-stroke"] =
			`${px(n.strokeWeight)} ${cssColor(strokes[0].color, strokes[0].opacity ?? 1)}`;
	}

	return {
		characters: n.characters ?? "",
		align: n.textAlignHorizontal ?? "LEFT",
		verticalAlign,
		autoResize,
		truncation,
		paragraphSpacing: n.paragraphSpacing ?? 0,
		paragraphIndent: n.paragraphIndent ?? 0,
		segments,
	};
}

// ============================================================================
// Tokens & styles
// ============================================================================

function tokenNames(
	bv: RawNode | undefined,
	ctx: Ctx,
): Record<string, string | string[]> {
	const out: Record<string, string | string[]> = {};
	if (!bv || typeof bv !== "object") return out;
	for (const [prop, binding] of Object.entries(bv)) {
		if (prop === "fills" || prop === "strokes") continue; // read from the paints themselves
		const list = Array.isArray(binding) ? binding : [binding];
		const names = list
			.map((b: RawNode) => (b?.id ? ctx.varName(b.id) : undefined))
			.filter((x): x is string => !!x);
		if (names.length) out[prop] = Array.isArray(binding) ? names : names[0];
	}
	return out;
}

function paintTokens(paints: unknown, ctx: Ctx): string[] {
	if (!Array.isArray(paints)) return [];
	return paints
		.map((p: RawNode) =>
			p.boundVariables?.color?.id
				? ctx.varName(p.boundVariables.color.id)
				: undefined,
		)
		.filter((x): x is string => !!x);
}

function variableValue(v: RawNode): string | number | boolean | null {
	const val = v.value;
	if (val && typeof val === "object" && "r" in val) return cssColor(val);
	if (typeof val === "number") return round(val, 4);
	if (typeof val === "string" || typeof val === "boolean") return val;
	return null;
}

function cssVariableName(v: RawNode): string {
	const web: string | undefined = v.codeSyntax?.WEB;
	if (web) {
		const m = web.match(/--[A-Za-z0-9_-]+/);
		if (m) return m[0];
	}
	return `--${slug(v.name.replace(/\//g, "-"))}`;
}

// ============================================================================
// Layout
// ============================================================================

function isAutoLayout(n: RawNode | null): boolean {
	return !!n && (n.layoutMode === "HORIZONTAL" || n.layoutMode === "VERTICAL");
}

const JUSTIFY: Record<string, string> = {
	MIN: "flex-start",
	CENTER: "center",
	MAX: "flex-end",
	SPACE_BETWEEN: "space-between",
};
const ALIGN: Record<string, string> = {
	MIN: "flex-start",
	CENTER: "center",
	MAX: "flex-end",
	BASELINE: "baseline",
};

function layoutInfo(n: RawNode): SpecNode["layout"] {
	const mode =
		n.layoutMode === "HORIZONTAL"
			? "row"
			: n.layoutMode === "VERTICAL"
				? "column"
				: n.layoutMode === "GRID"
					? "grid"
					: "none";
	return {
		mode,
		wrap: n.layoutWrap === "WRAP",
		gap: n.itemSpacing ?? 0,
		crossGap: n.layoutWrap === "WRAP" ? (n.counterAxisSpacing ?? 0) : undefined,
		padding: {
			top: n.paddingTop ?? 0,
			right: n.paddingRight ?? 0,
			bottom: n.paddingBottom ?? 0,
			left: n.paddingLeft ?? 0,
		},
		justify: n.primaryAxisAlignItems ?? "MIN",
		align: n.counterAxisAlignItems ?? "MIN",
	};
}

function flexContainerCss(n: RawNode, css: Css, ctx: Ctx): void {
	const row = n.layoutMode === "HORIZONTAL";
	css.display = "flex";
	css["flex-direction"] = row ? "row" : "column";
	const justify = n.primaryAxisAlignItems ?? "MIN";
	css["justify-content"] = JUSTIFY[justify] ?? "flex-start";
	css["align-items"] = ALIGN[n.counterAxisAlignItems ?? "MIN"] ?? "flex-start";
	const gap = n.itemSpacing ?? 0;
	if (n.layoutWrap === "WRAP") {
		css["flex-wrap"] = "wrap";
		if (justify !== "SPACE_BETWEEN" && gap)
			css[row ? "column-gap" : "row-gap"] = px(gap);
		if (n.counterAxisSpacing)
			css[row ? "row-gap" : "column-gap"] = px(n.counterAxisSpacing);
		css["align-content"] =
			n.counterAxisAlignContent === "SPACE_BETWEEN"
				? "space-between"
				: "flex-start";
	} else if (justify !== "SPACE_BETWEEN" && gap) {
		// Negative spacing (overlapping items) becomes margins on the children.
		if (gap > 0) css.gap = px(gap);
	}
	const pad = [
		n.paddingTop ?? 0,
		n.paddingRight ?? 0,
		n.paddingBottom ?? 0,
		n.paddingLeft ?? 0,
	];
	// Figma lets padding exceed the frame's size; a browser grows the box instead,
	// so shrink each pair in proportion until it fits.
	const fit = (a: number, b: number, size: number) => {
		const sum = pad[a] + pad[b];
		if (size > 0 && sum > size) {
			pad[a] *= size / sum;
			pad[b] *= size / sum;
		}
	};
	fit(1, 3, n.width);
	fit(0, 2, n.height);
	if (pad.some((v) => v)) css.padding = pad.map(px).join(" ");
}

function sizingOf(
	n: RawNode,
	parent: RawNode | null,
): { horizontal: string; vertical: string } {
	let horizontal: string = n.layoutSizingHorizontal ?? "FIXED";
	let vertical: string = n.layoutSizingVertical ?? "FIXED";
	if (n.type === "TEXT") {
		if (n.textAutoResize === "WIDTH_AND_HEIGHT")
			horizontal = horizontal === "FILL" ? "FILL" : "HUG";
		if (
			n.textAutoResize === "WIDTH_AND_HEIGHT" ||
			n.textAutoResize === "HEIGHT"
		)
			vertical = vertical === "FILL" ? "FILL" : "HUG";
	}
	if (n.type === "GROUP") {
		horizontal = "FIXED";
		vertical = "FIXED";
	}
	// An empty hug frame keeps its last size in Figma; in CSS it would collapse to 0.
	const empty = !(n.children ?? []).some((c: RawNode) => !c.hidden);
	if ((!isAutoLayout(n) || empty) && n.type !== "TEXT") {
		if (horizontal === "HUG") horizontal = "FIXED";
		if (vertical === "HUG") vertical = "FIXED";
	}
	// FILL only means something inside an auto-layout parent.
	if (!isAutoLayout(parent) || n.layoutPositioning === "ABSOLUTE") {
		if (horizontal === "FILL") horizontal = "FIXED";
		if (vertical === "FILL") vertical = "FIXED";
	}
	return { horizontal, vertical };
}

/**
 * Whether a frame's size on an axis comes from its content: it hugs, or it
 * fills a parent whose size comes from content. Figma keeps the last size of a
 * fill child along such a parent's main axis.
 */
const contentSized = new WeakMap<
	RawNode,
	{ horizontal: boolean; vertical: boolean }
>();
function sizeFromContent(n: RawNode, axis: "horizontal" | "vertical"): boolean {
	return contentSized.get(n)?.[axis] ?? false;
}

function sizeCss(
	n: RawNode,
	parent: RawNode | null,
	inFlow: boolean,
	sizing: { horizontal: string; vertical: string },
	css: Css,
): void {
	const parentRow = parent?.layoutMode === "HORIZONTAL";
	const inherits = (axis: "horizontal" | "vertical") =>
		sizing[axis] === "HUG" ||
		(sizing[axis] === "FILL" &&
			inFlow &&
			!!parent &&
			sizeFromContent(parent, axis));
	contentSized.set(n, {
		horizontal: inherits("horizontal"),
		vertical: inherits("vertical"),
	});
	const axes: ["horizontal" | "vertical", "width" | "height", number][] = [
		["horizontal", "width", n.width],
		["vertical", "height", n.height],
	];
	for (const [axis, prop, value] of axes) {
		const mode = sizing[axis];
		if (mode === "FIXED") css[prop] = px(value);
		else if (mode === "FILL" && inFlow) {
			const primary = parentRow === (axis === "horizontal");
			const parentHugs = !!parent && sizeFromContent(parent, axis);
			if (primary && parentHugs) {
				// Figma does not allow fill along the main axis of a hugging parent
				// (instance overrides still produce it): the child keeps its last size.
				css[prop] = px(value);
			} else if (primary) {
				// Figma splits the space so fill siblings have equal outer sizes; with a
				// 0 basis CSS first gives each its padding, so the padded one ends up
				// wider. Starting from Figma's size keeps every sibling exact.
				css.flex = `1 1 ${px(value)}`;
				css[prop === "width" ? "min-width" : "min-height"] = "0";
			} else css["align-self"] = "stretch";
		}
	}
	for (const [key, prop] of [
		["minWidth", "min-width"],
		["maxWidth", "max-width"],
		["minHeight", "min-height"],
		["maxHeight", "max-height"],
	] as const) {
		if (typeof n[key] === "number") css[prop] = px(n[key]);
	}
	if (inFlow && !css.flex) css["flex-shrink"] = "0";
}

// ============================================================================
// Tree
// ============================================================================

/** n's transform in the coordinates of `parent` (inverse(parent) × n). */
function localTransform(n: RawNode, parent: RawNode): Affine {
	const [[a, b, e], [c, d, f]] = parent.transform as Affine;
	const det = a * d - b * c || 1;
	const inv = [
		[d / det, -b / det, (b * f - d * e) / det],
		[-c / det, a / det, (c * e - a * f) / det],
	];
	const [[na, nb, ne], [nc, nd, nf]] = n.transform as Affine;
	return [
		[
			inv[0][0] * na + inv[0][1] * nc,
			inv[0][0] * nb + inv[0][1] * nd,
			inv[0][0] * ne + inv[0][1] * nf + inv[0][2],
		],
		[
			inv[1][0] * na + inv[1][1] * nc,
			inv[1][0] * nb + inv[1][1] * nd,
			inv[1][0] * ne + inv[1][1] * nf + inv[1][2],
		],
	];
}

/**
 * A plain mirror of a layer within its parent ("x": flipped horizontally, "y":
 * vertically). Figma reports these as a ±180° rotation; CSS needs scaleX/Y(-1).
 */
function mirrorOf(local: Affine): "x" | "y" | null {
	const [[a, b], [c, d]] = local;
	if (Math.abs(b) > 1e-6 || Math.abs(c) > 1e-6) return null;
	if (a < 0 && d > 0) return "x";
	if (a > 0 && d < 0) return "y";
	return null;
}

/**
 * The layer's box. Within its parent: its offset in the parent's own axes, so a
 * rotated or mirrored parent does not throw its children off. Relative to the
 * page frame (frameBox): the canvas box, the visual bounds when mirrored.
 */
function boxOf(n: RawNode, origin: RawNode | null, local?: boolean): SpecBox {
	const width = round(n.width);
	const height = round(n.height);
	const t = n.transform as Affine;
	if (local && origin) {
		const m = localTransform(n, origin);
		const mirror = mirrorOf(m);
		// A mirrored layer's origin is its far edge; CSS boxes start at the near one.
		return {
			x: round(mirror === "x" ? m[0][2] - n.width : m[0][2]),
			y: round(mirror === "y" ? m[1][2] - n.height : m[1][2]),
			width,
			height,
		};
	}
	const ox = origin ? origin.transform[0][2] : t[0][2];
	const oy = origin ? origin.transform[1][2] : t[1][2];
	if (t[0][0] * t[1][1] - t[0][1] * t[1][0] < 0) {
		const xs = [0, n.width].flatMap((x) =>
			[0, n.height].map((y) => t[0][0] * x + t[0][1] * y + t[0][2]),
		);
		const ys = [0, n.width].flatMap((x) =>
			[0, n.height].map((y) => t[1][0] * x + t[1][1] * y + t[1][2]),
		);
		return {
			x: round(Math.min(...xs) - ox),
			y: round(Math.min(...ys) - oy),
			width,
			height,
		};
	}
	return { x: round(t[0][2] - ox), y: round(t[1][2] - oy), width, height };
}

function roleOf(n: RawNode): SpecNode["role"] {
	if (n.asset) {
		const kind = n.assetKind as string | undefined;
		return kind === "png" ? "image" : "icon";
	}
	if (n.type === "TEXT") return "text";
	if (n.type === "INSTANCE") return "instance";
	if (
		visiblePaints(n.fills).some((p) => p.type === "IMAGE") &&
		!n.children?.length
	)
		return "image";
	if (n.type === "RECTANGLE" || n.type === "ELLIPSE") return "shape";
	return "container";
}

function buildNode(
	n: RawNode,
	parent: RawNode | null,
	root: RawNode,
	ctx: Ctx,
	stats: PageSpec["stats"],
	fonts: Map<string, { styles: Set<string>; weights: Set<number> }>,
): SpecNode {
	const isRoot = parent === null;
	const inFlow =
		!isRoot && isAutoLayout(parent) && n.layoutPositioning !== "ABSOLUTE";
	const css: Css = {};
	const shadows: string[] = [];
	const box = boxOf(n, parent, true);
	const sizing = sizingOf(n, parent);

	const local = parent ? localTransform(n, parent) : (n.transform as Affine);
	const mirror = parent ? mirrorOf(local) : null;
	if (
		!n.asset &&
		!mirror &&
		local[0][0] * local[1][1] - local[0][1] * local[1][0] < 0
	)
		ctx.warn(
			n,
			"FLIPPED",
			"Mirrored and rotated layer: add the mirror (scaleX(-1)) by hand.",
		);

	if (isRoot) {
		css.position = "relative";
	} else if (!inFlow) {
		css.position = "absolute";
		css.left = px(box.x);
		css.top = px(box.y);
	} else if (n.children?.length) {
		css.position = "relative";
	}
	if (inFlow && n.rotation && !mirror && !n.asset)
		ctx.warn(
			n,
			"ROTATED_FLOW_ITEM",
			"Rotated auto-layout item: Figma lays it out by its rotated bounds.",
		);
	if (mirror && !n.asset) {
		// Figma calls a mirror a 180° rotation; it only swaps one axis.
		css.transform = mirror === "x" ? "scaleX(-1)" : "scaleY(-1)";
	} else if (n.rotation && !n.asset) {
		css["transform-origin"] = "0 0";
		css.transform = `rotate(${round(-n.rotation)}deg)`;
	}
	// An exported asset has no children left to size it: always give it its exact box.
	const cssSizing = n.asset
		? {
				horizontal: sizing.horizontal === "FILL" ? "FILL" : "FIXED",
				vertical: sizing.vertical === "FILL" ? "FILL" : "FIXED",
			}
		: sizing;
	sizeCss(n, parent, inFlow, cssSizing, css);
	if (isRoot && sizing.vertical !== "FIXED") css.height = px(n.height);
	if (isRoot && sizing.horizontal !== "FIXED") css.width = px(n.width);

	if (n.asset) {
		// Layout, clipping and opacity are baked into the exported file.
	} else if (isAutoLayout(n)) flexContainerCss(n, css, ctx);
	else if (n.layoutMode === "GRID") {
		ctx.warn(
			n,
			"GRID_LAYOUT",
			"Figma grid layout is exported with absolutely positioned children.",
		);
	}
	if (n.clipsContent && !n.asset) css.overflow = "hidden";
	if (!n.asset && typeof n.opacity === "number" && n.opacity < 1)
		css.opacity = String(round(n.opacity, 3));
	if (n.blendMode && BLEND_MODES[n.blendMode])
		css["mix-blend-mode"] = BLEND_MODES[n.blendMode];
	else if (n.blendMode === "LINEAR_BURN" || n.blendMode === "LINEAR_DODGE")
		ctx.warn(n, "BLEND_MODE", `${n.blendMode} has no CSS equivalent.`);
	if (n.isMask)
		ctx.warn(
			n,
			"MASK",
			'Mask layer: export the masked group as an image (sharedPluginData export: "png") for an exact result.',
		);

	let text: SpecNode["text"];
	if (n.asset) {
		// Rendered by the exported asset; only the box matters here.
	} else if (n.type === "TEXT") {
		text = textCss(n, ctx, css);
		effectsCss(n, ctx, css, shadows, true);
		stats.texts++;
		for (const s of text.segments) {
			const f = fonts.get(s.font.family) ?? {
				styles: new Set(),
				weights: new Set(),
			};
			f.styles.add(s.font.style);
			f.weights.add(s.font.weight);
			fonts.set(s.font.family, f);
		}
	} else {
		backgroundCss(n, ctx, css);
		radiusCss(n, ctx, css);
		strokeCss(n, ctx, css, shadows);
		effectsCss(n, ctx, css, shadows, false);
	}
	if (shadows.length) css["box-shadow"] = shadows.join(", ");
	if (n.hidden) css.display = "none";

	const node: SpecNode = {
		id: n.id,
		name: n.name,
		type: n.type,
		role: isRoot ? "page" : roleOf(n),
		box,
		frameBox: boxOf(n, root),
		positioning: isRoot ? "root" : inFlow ? "flow" : "absolute",
		css,
		children: [],
	};
	if (n.rotation && !mirror) node.rotation = round(n.rotation);
	if (n.layoutMode && n.layoutMode !== "NONE") node.layout = layoutInfo(n);
	if (!isRoot) node.sizing = sizing;
	if (text) node.text = text;
	if (node.role === "image") stats.images++;
	if (node.role === "icon") stats.icons++;

	if (n.mainComponent) {
		stats.instances++;
		const props: Record<string, string | boolean> = {};
		for (const [k, v] of Object.entries(
			(n.componentProperties ?? {}) as Record<string, RawNode>,
		)) {
			if (v && (typeof v.value === "string" || typeof v.value === "boolean"))
				props[k.replace(/#[^#]*$/, "")] = v.value;
		}
		node.component = {
			name: n.mainComponent.name,
			key: n.mainComponent.key ?? null,
			remote: !!n.mainComponent.remote,
			...(n.mainComponent.componentSetName
				? {
						set: n.mainComponent.componentSetName,
						setKey: n.mainComponent.componentSetKey ?? null,
					}
				: {}),
			...(Object.keys(props).length ? { properties: props } : {}),
		};
	}

	const tokens = tokenNames(n.boundVariables, ctx);
	const fillTokens = paintTokens(n.fills, ctx);
	const strokeTokens = paintTokens(n.strokes, ctx);
	if (fillTokens.length) tokens.fills = fillTokens;
	if (strokeTokens.length) tokens.strokes = strokeTokens;
	if (Object.keys(tokens).length) node.tokens = tokens;

	const styles: Record<string, string> = {};
	for (const [key, label] of [
		["fillStyleId", "fill"],
		["strokeStyleId", "stroke"],
		["effectStyleId", "effect"],
		["textStyleId", "text"],
	] as const) {
		const name =
			typeof n[key] === "string" && n[key] ? ctx.styleName(n[key]) : undefined;
		if (name) styles[label] = name;
	}
	if (text && !styles.text) {
		const shared = new Set(text.segments.map((s) => s.textStyle));
		const only = [...shared][0];
		if (shared.size === 1 && only) styles.text = only;
	}
	if (Object.keys(styles).length) node.styles = styles;

	if (Array.isArray(n.annotations) && n.annotations.length) {
		node.annotations = n.annotations.map((a: RawNode) => ({
			label: a.label ?? "",
			category: a.categoryId ?? null,
			properties: (a.properties ?? []).map((p: RawNode) => p.type),
		}));
	}
	if (Array.isArray(n.reactions) && n.reactions.length) {
		node.interactions = n.reactions.map((r: RawNode) => ({
			trigger: r.trigger?.type ?? "UNKNOWN",
			actions: r.actions ?? [],
		}));
	}
	if (n.meta) node.meta = n.meta;
	if (n.asset) {
		node.asset = n.asset;
		if (n.renderBounds) {
			node.renderBounds = {
				x: round(n.renderBounds.x),
				y: round(n.renderBounds.y),
				width: round(n.renderBounds.width),
				height: round(n.renderBounds.height),
			};
		}
	}

	for (const child of n.children ?? []) {
		node.children.push(buildNode(child, n, root, ctx, stats, fonts));
	}
	// Absolute layers paint over every non-positioned sibling in CSS, whatever
	// their order; Figma paints in layer order (a ring drawn behind its "80%"
	// label). Positioning the in-flow siblings too keeps Figma's order.
	if (node.children.some((c) => c.positioning === "absolute"))
		for (const c of node.children)
			if (c.positioning === "flow" && !c.css.position)
				c.css.position = "relative";
	// Negative spacing has no gap equivalent: pull every child after the first
	// back by it, so they overlap as in Figma.
	const spacing = n.itemSpacing ?? 0;
	if (
		spacing < 0 &&
		isAutoLayout(n) &&
		n.layoutWrap !== "WRAP" &&
		n.primaryAxisAlignItems !== "SPACE_BETWEEN"
	) {
		const side = n.layoutMode === "HORIZONTAL" ? "margin-left" : "margin-top";
		node.children
			.filter((c) => c.positioning === "flow")
			.slice(1)
			.forEach((c) => {
				c.css[side] = px(spacing);
			});
	}
	// "First on top": earlier children paint over later ones (a dropdown in one
	// row over the rows below it). Isolated, so the order stays inside this frame
	// and does not lift its children over later layers elsewhere on the page.
	if (n.itemReverseZIndex) {
		node.css.isolation = "isolate";
		const count = node.children.length;
		node.children.forEach((c, i) => {
			if (!c.css.position) c.css.position = "relative";
			c.css["z-index"] = String(count - i);
		});
	}
	return node;
}

/**
 * Figma's "Auto" line height comes from its own font metrics, and a browser's
 * `normal` can be far off (Noto Sans SC 14px: Figma 17px, Chrome ~20px). Where a
 * text's line count is certain (auto-width, a single truncated line, or a box
 * shorter than two lines) its height gives Figma's value; apply it to every
 * "Auto" run of the same font and size on the page, and scale it for other
 * sizes of that font.
 */
function calibrateAutoLineHeights(tree: SpecNode): void {
	const texts: SpecNode[] = [];
	(function walk(n: SpecNode) {
		if (n.text) texts.push(n);
		n.children.forEach(walk);
	})(tree);
	const isAuto = (g: SpecTextSegment) => g.lineHeight === "normal";
	const exact = new Map<string, number>();
	const ratios = new Map<string, number[]>();
	const own = new Map<SpecNode, number>();
	for (const n of texts) {
		const t = n.text;
		if (!t?.segments.length || !t.segments.every(isAuto)) continue;
		const size = t.segments[0].font.size;
		const family = t.segments[0].font.family;
		if (
			t.segments.some((g) => g.font.size !== size || g.font.family !== family)
		)
			continue;
		const lines =
			t.autoResize === "WIDTH_AND_HEIGHT"
				? t.characters.split("\n").length
				: (t.truncation && (t.truncation.maxLines ?? 1) === 1) ||
						(!t.characters.includes("\n") && n.box.height < size * 1.8)
					? 1
					: 0;
		if (!lines || !(n.box.height > 0)) continue;
		const lh = n.box.height / lines;
		own.set(n, lh);
		exact.set(`${family}|${size}`, lh);
		ratios.set(family, [...(ratios.get(family) ?? []), lh / size]);
	}
	if (!exact.size) return;
	const figmaLine = (g: SpecTextSegment): number | undefined => {
		const known = exact.get(`${g.font.family}|${g.font.size}`);
		if (known) return known;
		const r = ratios.get(g.font.family);
		if (!r) return undefined;
		const sorted = [...r].sort((a, b) => a - b);
		return Math.round(sorted[Math.floor(sorted.length / 2)] * g.font.size);
	};
	for (const n of texts) {
		let tallest = 0;
		for (const g of n.text?.segments ?? []) {
			if (!isAuto(g)) continue;
			const lh = own.get(n) ?? figmaLine(g);
			if (!lh) continue;
			g.lineHeight = px(lh);
			g.css["line-height"] = px(lh);
			tallest = Math.max(tallest, lh);
		}
		if (tallest && n.css["line-height"] === "normal")
			n.css["line-height"] = px(tallest);
	}
}

/** Left and top widths of a CSS border, in px. */
function borderInset(css: Css): { left: number; top: number } {
	if (css.border) {
		const w = Number.parseFloat(css.border);
		return Number.isFinite(w) ? { left: w, top: w } : { left: 0, top: 0 };
	}
	if (css["border-width"]) {
		const [top = 0, right = top, , left = right] = css["border-width"]
			.split(/\s+/)
			.map((v) => Number.parseFloat(v) || 0);
		return { left, top };
	}
	return { left: 0, top: 0 };
}

/**
 * Figma places absolute children from the parent's outer edge; CSS places them
 * from inside the parent's border. Shift them by the border so both agree.
 */
function insetAbsoluteChildren(node: SpecNode): void {
	const inset = borderInset(node.css);
	for (const c of node.children) {
		if (c.css.position === "absolute" && (inset.left || inset.top)) {
			if (inset.left) c.css.left = px(c.box.x - inset.left);
			if (inset.top) c.css.top = px(c.box.y - inset.top);
		}
		insetAbsoluteChildren(c);
	}
}

export function normalizePageSpec(
	raw: RawExtract,
	opts: NormalizeOptions,
): PageSpec {
	const warnings: SpecWarning[] = [...(raw.warnings ?? [])];
	const seen = new Set(warnings.map((w) => `${w.nodeId}|${w.code}`));
	const varById = new Map(raw.variables.map((v) => [v.id as string, v]));
	const styleById = new Map(raw.styles.map((s) => [s.id as string, s]));
	const fetched = opts.fetchedAssets ?? {};
	const publicPath = opts.assetsPublicPath.replace(/\/+$/, "");

	const assets: SpecAsset[] = raw.assets.map((job) => {
		const f = fetched[job.id];
		const file =
			f?.file ?? assetFileName(job, job.kind === "svg" ? "svg" : "png");
		return {
			id: job.id,
			kind: job.kind,
			file,
			url: `${publicPath}/${file}`,
			nodeIds: job.nodeIds,
			fetched: !!f,
			...(f?.width !== undefined ? { width: round(f.width) } : {}),
			...(f?.height !== undefined ? { height: round(f.height) } : {}),
			...(f?.bytes !== undefined ? { bytes: f.bytes } : {}),
		};
	});
	const assetById = new Map(assets.map((a) => [a.id, a]));

	const ctx: Ctx = {
		warn: (n, code, message) => {
			const key = `${n.id}|${code}`;
			if (seen.has(key)) return;
			seen.add(key);
			warnings.push({ nodeId: n.id, nodeName: n.name, code, message });
		},
		varName: (id) => varById.get(id)?.name,
		styleName: (id) => styleById.get(id)?.name,
		assetUrl: (id) => assetById.get(id)?.url ?? "",
		assetSize: (id) => ({
			width: assetById.get(id)?.width,
			height: assetById.get(id)?.height,
		}),
	};

	// Asset kind decides icon vs image role.
	const markKinds = (n: RawNode): void => {
		if (n.asset) n.assetKind = assetById.get(n.asset)?.kind;
		for (const c of n.children ?? []) markKinds(c);
	};
	markKinds(raw.tree);

	const stats = {
		nodes: raw.nodeCount,
		texts: 0,
		images: 0,
		icons: 0,
		instances: 0,
	};
	const fonts = new Map<
		string,
		{ styles: Set<string>; weights: Set<number> }
	>();
	const tree = buildNode(raw.tree, null, raw.tree, ctx, stats, fonts);
	insetAbsoluteChildren(tree);
	calibrateAutoLineHeights(tree);

	return {
		specVersion: PAGE_SPEC_VERSION,
		source: {
			fileKey: raw.file.fileKey,
			fileName: raw.file.fileName,
			pageName: raw.file.pageName,
			nodeId: raw.tree.id,
			nodeName: raw.tree.name,
			exportedAt: opts.exportedAt ?? new Date().toISOString(),
		},
		frame: {
			width: round(raw.tree.width),
			height: round(raw.tree.height),
			...(tree.css["background-color"]
				? { background: tree.css["background-color"] }
				: {}),
		},
		fonts: [...fonts.entries()]
			.map(([family, f]) => ({
				family,
				styles: [...f.styles].sort(),
				weights: [...f.weights].sort((a, b) => a - b),
			}))
			.sort((a, b) => a.family.localeCompare(b.family)),
		tokens: {
			variables: raw.variables
				.map((v) => ({
					name: v.name,
					collection: v.collection ?? null,
					mode: v.mode ?? null,
					type: v.resolvedType,
					value: variableValue(v),
					aliasOf: v.aliasOf ?? [],
					cssVariable: cssVariableName(v),
					codeSyntax: v.codeSyntax ?? {},
				}))
				.sort((a, b) => a.name.localeCompare(b.name)),
			styles: raw.styles
				.map((s) => ({
					name: s.name,
					type: s.type,
					description: s.description ?? "",
				}))
				.sort((a, b) => a.name.localeCompare(b.name)),
		},
		assets,
		stats,
		warnings,
		tree,
	};
}
