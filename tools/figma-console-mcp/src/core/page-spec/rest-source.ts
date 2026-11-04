/**
 * Page-spec source that reads Figma through the REST API instead of the Desktop Bridge plugin, so a
 * server or CI can export new and edited screens without Figma Desktop open.
 *
 * It returns the same raw shape as the plugin's extract script (plugin-scripts.ts), so normalize,
 * the code generator and the fidelity check stay unchanged:
 *   - REST omits fields at their default value: they are filled in as the plugin reports them;
 *   - absolute transforms are composed from relativeTransform down the tree;
 *   - text styles become plugin-style segments (fontName, lineHeight/letterSpacing units);
 *   - gradients get a gradientTransform from their handle positions;
 *   - variable names and values, which REST only gives to Enterprise plans, come from a token table
 *     (see tokenTable): a variable missing from it keeps its raw colour and is reported.
 */
import type { FetchJson } from "./changes.js";
import type { RawExtract } from "./normalize.js";
import { type AssetJob, type ExtractParams, PAGE_SPEC_KEY, PAGE_SPEC_NAMESPACE } from "./plugin-scripts.js";

// biome-ignore lint/suspicious/noExplicitAny: Figma REST JSON, same loose shape as normalize's RawNode
type Rn = Record<string, any>;
type Affine = [[number, number, number], [number, number, number]];

/** A variable as the plugin resolved it on light and on dark (-DK) screens. */
export interface TableVariable {
	name: string;
	collection: string | null;
	resolvedType: string;
	codeSyntax: Record<string, string>;
	remote: boolean;
	modes: Partial<Record<"light" | "dark", { mode: string | null; value: unknown; aliasOf: string[] }>>;
}
export type TokenTable = Record<string, TableVariable>;

export interface RestSourceOptions {
	fileKey: string;
	/** Token table by variable id; without it bound colours stay raw values. */
	tokens?: TokenTable;
	/** Whether the frame renders in the dark mode; default: its name has a -DK screen code. */
	dark?: (frameName: string) => boolean;
	/** Figma page name of the frame (REST /nodes does not return it). */
	pageName?: string | null;
	/** Downloads a signed image URL (S3); default fetch. */
	download?: (url: string) => Promise<Uint8Array>;
}

export interface AssetResult {
	base64?: string;
	text?: string;
	width?: number;
	height?: number;
}

const VECTORISH = new Set(["VECTOR", "BOOLEAN_OPERATION", "STAR", "POLYGON", "LINE", "REGULAR_POLYGON"]);
const CONTAINERS = new Set(["FRAME", "GROUP", "INSTANCE", "COMPONENT"]);
const FRAMELIKE = new Set(["FRAME", "INSTANCE", "COMPONENT", "COMPONENT_SET"]);

const mul = (a: Affine, b: Affine): Affine => [
	[a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1], a[0][0] * b[0][2] + a[0][1] * b[1][2] + a[0][2]],
	[a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1], a[1][0] * b[0][2] + a[1][1] * b[1][2] + a[1][2]],
];

function invert(m: Affine): Affine {
	const [[a, b, c], [d, e, f]] = m;
	const det = a * e - b * d || 1e-9;
	return [
		[e / det, -b / det, (b * f - c * e) / det],
		[-d / det, a / det, (c * d - a * f) / det],
	];
}

/** Plugin gradientTransform from REST handles: the inverse of the map (0,.5)→p0, (1,.5)→p1, (0,1)→p2. */
function gradientTransform(handles: { x: number; y: number }[]): Affine {
	const [p0, p1, p2] = handles;
	const b = 2 * (p2.x - p0.x);
	const e = 2 * (p2.y - p0.y);
	return invert([
		[p1.x - p0.x, b, p0.x - 0.5 * b],
		[p1.y - p0.y, e, p0.y - 0.5 * e],
	]);
}

/** REST paint → plugin paint: alpha moves from color.a into opacity, handles into gradientTransform, imageRef into imageHash. */
function paint(p: Rn): Rn {
	const out: Rn = { ...p };
	out.visible = p.visible ?? true;
	out.blendMode = p.blendMode ?? "NORMAL";
	if (p.type === "SOLID" && p.color) {
		const { r, g, b, a = 1 } = p.color;
		out.color = { r, g, b };
		out.opacity = (p.opacity ?? 1) * a;
	} else out.opacity = p.opacity ?? 1;
	if (p.gradientHandlePositions) {
		out.gradientTransform = gradientTransform(p.gradientHandlePositions);
		delete out.gradientHandlePositions;
	}
	if (p.gradientStops) out.gradientStops = p.gradientStops.map((s: Rn) => ({ ...s, color: { a: 1, ...s.color } }));
	if (p.imageRef) {
		out.imageHash = p.imageRef;
		delete out.imageRef;
		// REST calls the plugin's CROP mode STRETCH
		out.scaleMode = p.scaleMode === "STRETCH" ? "CROP" : (p.scaleMode ?? "FILL");
	}
	return out;
}

const paints = (list: Rn[] | undefined): Rn[] => (list ?? []).map(paint);

const CORNER: Record<string, string> = {
	RECTANGLE_TOP_LEFT_CORNER_RADIUS: "topLeftRadius",
	RECTANGLE_TOP_RIGHT_CORNER_RADIUS: "topRightRadius",
	RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: "bottomRightRadius",
	RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: "bottomLeftRadius",
};

/** REST boundVariables → the plugin's keys: rectangleCornerRadii.RECTANGLE_TOP_LEFT_CORNER_RADIUS → topLeftRadius. */
export function pluginBoundVariables(bv: Rn | undefined): Rn | undefined {
	if (!bv) return bv;
	const out: Rn = {};
	for (const [k, v] of Object.entries(bv)) {
		if (k === "rectangleCornerRadii" && v && typeof v === "object") {
			for (const [corner, alias] of Object.entries(v as Rn)) out[CORNER[corner] ?? corner] = alias;
		} else out[k] = v;
	}
	return out;
}

function lineHeight(s: Rn): Rn {
	if (s.lineHeightUnit === "PIXELS") return { unit: "PIXELS", value: s.lineHeightPx };
	if (s.lineHeightUnit === "FONT_SIZE_%") return { unit: "PERCENT", value: s.lineHeightPercentFontSize ?? 100 };
	return { unit: "AUTO" };
}

/** fontName.style: REST gives fontStyle; older payloads only the PostScript name ("Inter-SemiBold"). */
function fontName(s: Rn): Rn {
	const style = s.fontStyle ?? (s.fontPostScriptName?.split("-")[1] || (s.italic ? "Italic" : "Regular"));
	return { family: s.fontFamily, style };
}

function textFields(s: Rn): Rn {
	return {
		fontName: fontName(s),
		fontSize: s.fontSize,
		fontWeight: s.fontWeight,
		lineHeight: lineHeight(s),
		letterSpacing: { unit: "PIXELS", value: s.letterSpacing ?? 0 },
		textCase: s.textCase ?? "ORIGINAL",
		textDecoration: s.textDecoration ?? "NONE",
	};
}

/** characterStyleOverrides + styleOverrideTable → plugin getStyledTextSegments() output. */
function segments(n: Rn, styleIdOf: (n: Rn, key: string) => string): Rn[] {
	const chars: string = n.characters ?? "";
	const over: number[] = n.characterStyleOverrides ?? [];
	const table: Record<string, Rn> = n.styleOverrideTable ?? {};
	const out: Rn[] = [];
	let start = 0;
	for (let i = 1; i <= chars.length; i++) {
		if (i < chars.length && (over[i] ?? 0) === (over[start] ?? 0)) continue;
		const id = over[start] ?? 0;
		const style = id ? { ...n.style, ...table[id] } : n.style;
		const fills = id && table[id]?.fills ? table[id].fills : n.fills;
		out.push({
			characters: chars.slice(start, i),
			start,
			end: i,
			...textFields(style),
			fills: paints(fills),
			textStyleId: styleIdOf(n, "text"),
			fillStyleId: styleIdOf(n, "fill"),
			...(style.hyperlink ? { hyperlink: style.hyperlink } : {}),
			...(style.boundVariables ? { boundVariables: style.boundVariables } : {}),
		});
		start = i;
	}
	return out;
}

const hasImageFill = (n: Rn): boolean => (n.fills ?? []).some((f: Rn) => f.type === "IMAGE" || f.type === "VIDEO");
const visible = (n: Rn): boolean => n.visible !== false;

function isPartialEllipse(n: Rn): boolean {
	if (n.type !== "ELLIPSE" || !n.arcData) return false;
	const a = n.arcData;
	return a.innerRadius > 0 || Math.abs(a.endingAngle - a.startingAngle - Math.PI * 2) > 0.0001;
}
const hasComplexStroke = (n: Rn): boolean => (n.strokes ?? []).some((s: Rn) => s.visible !== false && s.type !== "SOLID");
function isVectorish(n: Rn): boolean {
	if (VECTORISH.has(n.type) || isPartialEllipse(n)) return true;
	return (n.type === "ELLIPSE" || n.type === "RECTANGLE") && !hasImageFill(n) && hasComplexStroke(n);
}
/** Same rule as the plugin: vectors only, no text or images, at any depth. */
function isIconLike(n: Rn): boolean {
	if (isVectorish(n)) return true;
	if (!CONTAINERS.has(n.type) || !n.children?.length) return false;
	let hasVector = false;
	const scan = (c: Rn): boolean => {
		for (const ch of c.children ?? []) {
			if (!visible(ch)) continue;
			if (ch.type === "TEXT" || hasImageFill(ch)) return false;
			if (isVectorish(ch)) hasVector = true;
			else if (ch.type === "RECTANGLE" || ch.type === "ELLIPSE") {
				// plain shapes are fine inside an icon
			} else if (ch.children) {
				if (!scan(ch)) return false;
			} else return false;
		}
		return true;
	};
	return scan(n) && hasVector;
}

/** Plugin-reported defaults that REST leaves out. */
function frameDefaults(n: Rn): Rn {
	return {
		layoutMode: "NONE",
		layoutWrap: "NO_WRAP",
		primaryAxisSizingMode: "AUTO",
		counterAxisSizingMode: "AUTO",
		primaryAxisAlignItems: "MIN",
		counterAxisAlignItems: "MIN",
		counterAxisAlignContent: "AUTO",
		paddingLeft: 0,
		paddingRight: 0,
		paddingTop: 0,
		paddingBottom: 0,
		itemSpacing: 0,
		counterAxisSpacing: n.layoutWrap === "WRAP" ? 0 : null,
		itemReverseZIndex: false,
		strokesIncludedInLayout: false,
		clipsContent: false,
	};
}

/** Raw page spec of one frame, read through REST: the shape plugin-scripts' extract returns. */
export async function restExtract(get: FetchJson, opts: RestSourceOptions, params: ExtractParams): Promise<RawExtract> {
	if (!params.nodeId) throw new Error("REST export needs the frame's node id.");
	const res = (await get(
		`/v1/files/${opts.fileKey}/nodes?ids=${encodeURIComponent(params.nodeId)}&geometry=paths&plugin_data=shared`,
	)) as Rn;
	const entry = res.nodes?.[params.nodeId];
	if (!entry?.document) throw new Error(`Node not found: ${params.nodeId}`);
	const root: Rn = entry.document;
	const components: Record<string, Rn> = entry.components ?? {};
	const componentSets: Record<string, Rn> = entry.componentSets ?? {};
	const styleDefs: Record<string, Rn> = entry.styles ?? {};

	const varIds = new Set<string>();
	const styleIds = new Set<string>();
	const assets: AssetJob[] = [];
	const assetByKey = new Map<string, AssetJob>();
	const warnings: RawExtract["warnings"] = [];
	let nodeCount = 0;

	const noteVars = (bv: Rn | undefined) => {
		for (const v of Object.values(bv ?? {})) for (const b of Array.isArray(v) ? v : [v]) if (b?.id) varIds.add(b.id);
	};
	const notePaints = (ps: Rn[] | undefined) => {
		for (const p of ps ?? []) noteVars(p.boundVariables);
	};
	const styleIdOf = (n: Rn, key: string): string => {
		const id = n.styles?.[key];
		if (id) styleIds.add(id);
		return id ?? "";
	};
	const addAsset = (key: string, job: Omit<AssetJob, "id">): string => {
		const existing = assetByKey.get(key);
		if (existing) {
			for (const id of job.nodeIds) if (!existing.nodeIds.includes(id)) existing.nodeIds.push(id);
			return existing.id;
		}
		const full = { ...job, id: `a${assets.length + 1}` } as AssetJob;
		assets.push(full);
		assetByKey.set(key, full);
		return full.id;
	};

	const rootBox = root.absoluteBoundingBox ?? { x: 0, y: 0 };
	const rootAbs: Affine = [
		[1, 0, rootBox.x],
		[0, 1, rootBox.y],
	];

	function walk(n: Rn, abs: Affine): Rn | null {
		if (!visible(n) && !params.includeHidden) return null;
		nodeCount++;
		const d: Rn = { id: n.id, name: n.name, type: n.type };
		if (!visible(n)) d.hidden = true;
		d.transform = abs.map((r) => [...r]);
		d.width = n.size?.x ?? n.absoluteBoundingBox?.width ?? 0;
		d.height = n.size?.y ?? n.absoluteBoundingBox?.height ?? 0;
		const rot = Math.round((Math.atan2(-abs[1][0], abs[0][0]) * 180) / Math.PI * 1e6) / 1e6;
		if (rot) d.rotation = rot;

		if (FRAMELIKE.has(n.type)) Object.assign(d, frameDefaults(n));
		for (const [k, v] of Object.entries(n)) {
			if (v === undefined || v === null) continue;
			if (["children", "fillGeometry", "strokeGeometry", "absoluteBoundingBox", "absoluteRenderBounds", "relativeTransform", "size",
				"styles", "style", "characterStyleOverrides", "styleOverrideTable", "lineTypes", "lineIndentations", "sharedPluginData",
				"interactions", "componentId", "overrides", "background", "backgroundColor", "complexStrokeProperties", "scrollBehavior",
				"individualStrokeWeights", "rectangleCornerRadii", "strokeDashes", "exportSettings", "prototypeStartNodeID", "flowStartingPoints",
				"prototypeDevice", "targetAspectRatio", "transitionNodeID", "transitionDuration", "transitionEasing", "id", "name", "type",
				"visible"].includes(k))
				continue;
			d[k] = v;
		}
		if (n.boundVariables) d.boundVariables = pluginBoundVariables(n.boundVariables);
		d.opacity = n.opacity ?? 1;
		d.blendMode = n.blendMode ?? "PASS_THROUGH";
		d.isMask = n.isMask ?? false;
		if ("fills" in n || FRAMELIKE.has(n.type) || n.type === "TEXT" || n.type === "RECTANGLE" || n.type === "ELLIPSE" || VECTORISH.has(n.type))
			d.fills = paints(n.fills);
		if (n.strokes) d.strokes = paints(n.strokes);
		if (n.strokeDashes) d.dashPattern = n.strokeDashes;
		if (n.effects) d.effects = n.effects.map((e: Rn) => ({ ...e, visible: e.visible ?? true }));
		if (n.individualStrokeWeights) {
			const w = n.individualStrokeWeights;
			Object.assign(d, { strokeTopWeight: w.top, strokeRightWeight: w.right, strokeBottomWeight: w.bottom, strokeLeftWeight: w.left });
			// the plugin reports a mixed weight when the sides differ
			if (!(w.top === w.right && w.right === w.bottom && w.bottom === w.left)) d.strokeWeight = "MIXED";
		} else if (typeof n.strokeWeight === "number" && FRAMELIKE.has(n.type)) {
			const w = n.strokeWeight;
			Object.assign(d, { strokeTopWeight: w, strokeRightWeight: w, strokeBottomWeight: w, strokeLeftWeight: w });
		}
		if (n.rectangleCornerRadii) {
			const [tl, tr, br, bl] = n.rectangleCornerRadii;
			Object.assign(d, { topLeftRadius: tl, topRightRadius: tr, bottomRightRadius: br, bottomLeftRadius: bl, cornerRadius: "MIXED" });
		} else if ("cornerRadius" in n || FRAMELIKE.has(n.type) || n.type === "RECTANGLE") {
			const r = n.cornerRadius ?? 0;
			d.cornerRadius = r;
			Object.assign(d, { topLeftRadius: r, topRightRadius: r, bottomRightRadius: r, bottomLeftRadius: r });
		}
		for (const [key, field] of [["fill", "fillStyleId"], ["stroke", "strokeStyleId"], ["effect", "effectStyleId"], ["text", "textStyleId"]] as const) {
			const id = n.styles?.[key];
			if (id) {
				d[field] = id;
				styleIds.add(id);
			} else if (n.type === "TEXT" || FRAMELIKE.has(n.type)) d[field] = "";
		}
		noteVars(d.boundVariables);
		notePaints(d.fills);
		notePaints(d.strokes);
		for (const e of d.effects ?? []) noteVars(e.boundVariables);

		if (n.type === "TEXT" && n.style) {
			const s = n.style;
			const segs = segments(n, styleIdOf);
			const same = (k: string) => segs.every((g) => JSON.stringify(g[k]) === JSON.stringify(segs[0][k]));
			const base = textFields(s);
			for (const k of Object.keys(base)) d[k] = segs.length > 1 && !same(k) ? "MIXED" : base[k];
			Object.assign(d, {
				textAlignHorizontal: s.textAlignHorizontal ?? "LEFT",
				textAlignVertical: s.textAlignVertical ?? "TOP",
				textAutoResize: s.textAutoResize ?? "NONE",
				textTruncation: s.textTruncation ?? "DISABLED",
				maxLines: s.maxLines ?? null,
				paragraphSpacing: s.paragraphSpacing ?? 0,
				paragraphIndent: s.paragraphIndent ?? 0,
				leadingTrim: s.leadingTrim ?? "NONE",
			});
			d.segments = segs;
			for (const g of segs) {
				notePaints(g.fills);
				noteVars(g.boundVariables);
			}
		}

		if (n.type === "INSTANCE" && n.componentId) {
			const mc = components[n.componentId];
			if (mc) {
				d.mainComponent = { id: n.componentId, name: mc.name, key: mc.key ?? null, remote: !!mc.remote };
				const set = mc.componentSetId ? componentSets[mc.componentSetId] : undefined;
				if (set) {
					d.mainComponent.componentSetName = set.name;
					d.mainComponent.componentSetKey = set.key ?? null;
				}
			}
		}

		// Same fields as the plugin; REST leaves destinationId null on instances and keeps it in transitionNodeID.
		if (n.interactions?.length)
			d.reactions = n.interactions.map((r: Rn) => ({
				trigger: r.trigger,
				actions: (r.actions ?? []).map((a: Rn) => {
					const o: Rn = { type: a.type };
					const dest = a.destinationId ?? (a.type === "NODE" ? n.transitionNodeID : undefined);
					if (dest) o.destinationId = dest;
					if (a.navigation) o.navigation = a.navigation;
					if (a.url) o.url = a.url;
					if (a.transition) o.transition = a.transition;
					return o;
				}),
			}));

		const metaRaw = n.sharedPluginData?.[PAGE_SPEC_NAMESPACE]?.[PAGE_SPEC_KEY];
		let meta: Rn | null = null;
		if (metaRaw) {
			try {
				meta = JSON.parse(metaRaw);
			} catch {
				meta = { raw: metaRaw };
				warnings.push({ nodeId: n.id, nodeName: n.name, code: "META_INVALID_JSON", message: `sharedPluginData ${PAGE_SPEC_NAMESPACE}/${PAGE_SPEC_KEY} is not valid JSON; kept as raw text.` });
			}
			d.meta = meta;
		}

		// Leaf export: icons and illustrations become one SVG/PNG asset, as the plugin does.
		const exportMode = meta?.export;
		let leaf: "svg" | "png" | null = null;
		if (n !== root && exportMode !== "none") {
			if (exportMode === "svg" || exportMode === "png") leaf = exportMode;
			else if (params.respectExportSettings && n.exportSettings?.length) leaf = n.exportSettings[0].format === "SVG" ? "svg" : "png";
			else if (params.detectIcons && isIconLike(n)) leaf = "svg";
		}
		if (leaf) {
			let ox = abs[0][2];
			let oy = abs[1][2];
			if (abs[0][0] !== 1 || abs[0][1] !== 0 || abs[1][0] !== 0 || abs[1][1] !== 1) {
				const bb = n.absoluteBoundingBox;
				if (bb) {
					ox = bb.x - rootBox.x + rootAbs[0][2];
					oy = bb.y - rootBox.y + rootAbs[1][2];
					d.transform = [
						[1, 0, ox],
						[0, 1, oy],
					];
					d.width = bb.width;
					d.height = bb.height;
					delete d.rotation;
				}
			}
			const rb = n.absoluteRenderBounds;
			if (rb) d.renderBounds = { x: rb.x - rootBox.x + rootAbs[0][2] - ox, y: rb.y - rootBox.y + rootAbs[1][2] - oy, width: rb.width, height: rb.height };
			d.asset = addAsset(`node:${n.id}:${leaf}`, { kind: leaf, nodeId: n.id, nodeIds: [n.id], name: n.name, scale: meta?.scale || 2 } as Omit<AssetJob, "id">);
			if (n.children) d.childCount = n.children.length;
			return d;
		}

		d.fills = (d.fills ?? []).map((f: Rn) =>
			f.type === "IMAGE" && f.imageHash
				? { ...f, assetId: addAsset(`image:${f.imageHash}`, { kind: "image", imageHash: f.imageHash, nodeIds: [n.id], name: n.name } as Omit<AssetJob, "id">) }
				: f,
		);
		if (d.fills.some((f: Rn) => f.type === "VIDEO"))
			warnings.push({ nodeId: n.id, nodeName: n.name, code: "VIDEO_FILL", message: "Video fills cannot be exported through the REST API; add the video file manually." });
		if (!d.fills.length && !("fills" in n) && !FRAMELIKE.has(n.type)) delete d.fills;

		if (n.children) {
			d.children = [];
			for (const c of n.children) {
				const rel: Affine = c.relativeTransform ?? [
					[1, 0, 0],
					[0, 1, 0],
				];
				const child = walk(c, mul(abs, rel));
				if (child) d.children.push(child);
			}
		}
		return d;
	}

	const tree = walk(root, rootAbs) as Rn;

	// Variables: names and values come from the token table (REST gives them to Enterprise plans only).
	const variables: Rn[] = [];
	const dark = opts.dark ? opts.dark(root.name) : /-DK\b/.test(root.name);
	for (const id of varIds) {
		const v = opts.tokens?.[id];
		if (!v) {
			warnings.push({ nodeId: root.id, nodeName: root.name, code: "TOKEN_UNKNOWN", message: `Variable ${id} is not in the token table; its raw value is used. Re-run the token table after design adds tokens.` });
			continue;
		}
		const m = (dark ? v.modes.dark : v.modes.light) ?? v.modes.light ?? v.modes.dark;
		if (!m) continue;
		variables.push({ id, name: v.name, collection: v.collection, mode: m.mode, resolvedType: v.resolvedType, value: m.value, aliasOf: m.aliasOf, codeSyntax: v.codeSyntax, remote: v.remote });
	}
	const styles = [...styleIds]
		.filter((id) => styleDefs[id])
		.map((id) => ({ id, name: styleDefs[id].name, type: styleDefs[id].styleType, description: styleDefs[id].description ?? "" }));

	return {
		file: { fileKey: opts.fileKey, fileName: res.name, pageName: opts.pageName ?? null },
		tree,
		variables,
		styles,
		assets,
		warnings,
		nodeCount,
	};
}

/** One asset file: SVG/PNG renders through /v1/images, image fills through /v1/files/:key/images. */
export async function restAsset(get: FetchJson, opts: RestSourceOptions, job: AssetJob & { frameBounds?: boolean }): Promise<AssetResult> {
	const download = opts.download ?? (async (url: string) => new Uint8Array(await (await fetch(url)).arrayBuffer()));
	if (job.kind === "image") {
		const res = (await get(`/v1/files/${opts.fileKey}/images`)) as Rn;
		const url = res.meta?.images?.[job.imageHash];
		if (!url) throw new Error(`Image not found for hash ${job.imageHash}`);
		const bytes = await download(url);
		return { base64: Buffer.from(bytes).toString("base64"), ...pngDims(bytes) };
	}
	const q =
		job.kind === "svg"
			? "format=svg&svg_outline_text=true&svg_include_id=false"
			: `format=png&scale=${job.scale}${job.frameBounds ? "&use_absolute_bounds=true" : ""}`;
	const res = (await get(`/v1/images/${opts.fileKey}?ids=${encodeURIComponent(job.nodeId)}&${q}`)) as Rn;
	const url = res.images?.[job.nodeId];
	if (!url) throw new Error(`Figma did not render ${job.nodeId}`);
	const bytes = await download(url);
	// The plugin reports the rendered bounds; REST renders those same bounds, so read them back from the file.
	if (job.kind === "svg") {
		const text = Buffer.from(bytes).toString("utf-8");
		const m = /<svg[^>]*\swidth="([\d.]+)"[^>]*\sheight="([\d.]+)"/.exec(text);
		return { text, ...(m ? { width: Number(m[1]), height: Number(m[2]) } : {}) };
	}
	const dims = pngDims(bytes);
	return { base64: Buffer.from(bytes).toString("base64"), ...(dims.width ? { width: dims.width / job.scale, height: (dims.height ?? 0) / job.scale } : {}) };
}

function pngDims(b: Uint8Array): { width?: number; height?: number } {
	if (b.length > 24 && b[0] === 0x89 && b[1] === 0x50)
		return { width: (b[16] << 24) | (b[17] << 16) | (b[18] << 8) | b[19], height: (b[20] << 24) | (b[21] << 16) | (b[22] << 8) | b[23] };
	return {};
}

/**
 * Export source (page-spec-tools SpecSource) reading through REST. Renders are asked for in one
 * /v1/images call per kind and scale for the whole frame, and the image-fill URL list once per run:
 * one request per icon would take minutes per screen under Figma's rate limits.
 */
export function restSource(get: FetchJson, opts: RestSourceOptions) {
	let jobs: AssetJob[] = [];
	/** Visible size of each leaf, as the plugin reports an asset (render bounds, clipped by its parents). */
	const bounds = new Map<string, { width: number; height: number }>();
	const renderUrls = new Map<string, Promise<Record<string, string | null>>>();
	let fillUrls: Promise<Record<string, string>> | null = null;
	const download = opts.download ?? (async (url: string) => new Uint8Array(await (await fetch(url)).arrayBuffer()));

	const urlFor = async (job: AssetJob & { frameBounds?: boolean }): Promise<string | undefined> => {
		if (job.kind === "image") {
			fillUrls ??= get(`/v1/files/${opts.fileKey}/images`).then((r) => ((r as Rn).meta?.images ?? {}) as Record<string, string>);
			return (await fillUrls)[job.imageHash];
		}
		const scale = job.kind === "png" ? job.scale : 1;
		const key = `${job.kind}@${scale}${job.frameBounds ? ":frame" : ""}`;
		if (!renderUrls.has(key)) {
			const ids = job.frameBounds
				? [job.nodeId]
				: jobs.filter((j) => j.kind === job.kind && (j.kind !== "png" || j.scale === scale)).map((j) => (j as { nodeId: string }).nodeId);
			if (!ids.includes(job.nodeId)) ids.push(job.nodeId);
			const q = job.kind === "svg" ? "format=svg&svg_outline_text=true&svg_include_id=false" : `format=png&scale=${scale}${job.frameBounds ? "&use_absolute_bounds=true" : ""}`;
			const all: Record<string, string | null> = {};
			const batch = (async () => {
				for (let i = 0; i < ids.length; i += 50) {
					const r = (await get(`/v1/images/${opts.fileKey}?ids=${encodeURIComponent(ids.slice(i, i + 50).join(","))}&${q}`)) as Rn;
					Object.assign(all, r.images ?? {});
				}
				return all;
			})();
			renderUrls.set(key, batch);
		}
		const urls = await (renderUrls.get(key) as Promise<Record<string, string | null>>);
		return urls[job.nodeId] ?? undefined;
	};

	return {
		extract: async (params: ExtractParams) => {
			const raw = await restExtract(get, opts, params);
			jobs = raw.assets;
			renderUrls.clear();
			bounds.clear();
			const note = (n: Rn) => {
				if (n.asset && n.renderBounds) bounds.set(n.id, { width: n.renderBounds.width, height: n.renderBounds.height });
				for (const c of n.children ?? []) note(c);
			};
			note(raw.tree);
			return raw;
		},
		asset: async (job: AssetJob & { frameBounds?: boolean }): Promise<AssetResult> => {
			const url = await urlFor(job);
			if (!url) throw new Error(job.kind === "image" ? `Image not found for hash ${job.imageHash}` : `Figma did not render ${job.nodeId}`);
			const bytes = await download(url);
			if (job.kind === "image") return { base64: Buffer.from(bytes).toString("base64"), ...pngDims(bytes) };
			const seen = bounds.get(job.nodeId);
			if (job.kind === "svg") {
				const text = Buffer.from(bytes).toString("utf-8");
				const m = /<svg[^>]*\swidth="([\d.]+)"[^>]*\sheight="([\d.]+)"/.exec(text);
				return { text, ...(seen ?? (m ? { width: Number(m[1]), height: Number(m[2]) } : {})) };
			}
			const dims = pngDims(bytes);
			return { base64: Buffer.from(bytes).toString("base64"), ...(seen ?? (dims.width ? { width: dims.width / job.scale, height: (dims.height ?? 0) / job.scale } : {})) };
		},
		reference: async (nodeId: string, scale: number) => {
			const url = await urlFor({ id: "reference", kind: "png", nodeId, nodeIds: [nodeId], name: "reference", scale, frameBounds: true });
			if (!url) throw new Error(`Figma did not render ${nodeId}`);
			return { base64: Buffer.from(await download(url)).toString("base64") };
		},
	};
}
