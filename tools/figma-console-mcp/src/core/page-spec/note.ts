/**
 * The "code note": a thin strip right under each page frame in Figma that
 * everyone sees in any mode (no Dev Mode seat, no comments, no annotations)
 * — route, code files, page Markdown and the last check result.
 *
 * It is kept to two lines so it fits the gap designers usually leave between
 * stacked frames. A new note goes right under the frame; layers it overlaps
 * (flow arrows, the next screen's label…) are reported so the team can spread
 * the layout out. It is a group (a background and two text lines), not a
 * frame, so Figma does not print its name on the canvas. It is not locked:
 * designers can drag it anywhere, and later runs only rewrite its content where
 * it now sits. The pipeline finds its own note through ids in sharedPluginData.
 */

import type { FidelityReport } from "./fidelity.js";
import type { PageSpec } from "./normalize.js";
import { PAGE_SPEC_NAMESPACE } from "./plugin-scripts.js";

/** sharedPluginData key on the page frame → id of its note, and on the note → id of its page frame. */
export const NOTE_KEY = "codeNote";
export const NOTE_FOR_KEY = "codeNoteFor";

/** Longest status line before issues are cut, so the note stays two lines at 1920px. */
const MAX_STATUS_CHARS = 150;

export interface NoteContext {
	route: string;
	/** Project-relative paths. */
	pageFile: string;
	docFile: string;
	fidelity?: { report: FidelityReport; checkedAt: string };
	/** Where the files can be opened (e.g. GitHub); the note links to them when given. */
	links?: { demo?: string; doc?: string; code?: string; report?: string };
}

export interface NoteLink {
	start: number;
	end: number;
	url: string;
}

export interface NoteContent {
	title: string;
	/** Clickable ranges of the title. */
	titleLinks: NoteLink[];
	status: string;
	/** Visual state of the note. */
	tone: "pass" | "fail" | "unchecked";
}

function when(iso: string): string {
	const d = new Date(iso);
	const p = (n: number) => String(n).padStart(2, "0");
	return `${p(d.getDate())}/${p(d.getMonth() + 1)} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

function issue(d: {
	name: string;
	dx: number;
	dy: number;
	dw: number;
	dh: number;
}): string {
	const f = (v: number) => `${Math.round(Math.abs(v) * 100) / 100}px`;
	const what =
		Math.abs(d.dw) >= Math.max(Math.abs(d.dh), Math.abs(d.dx), Math.abs(d.dy))
			? d.dw > 0
				? `rộng hơn ${f(d.dw)}`
				: `hẹp hơn ${f(d.dw)}`
			: Math.abs(d.dh) >= Math.max(Math.abs(d.dx), Math.abs(d.dy))
				? d.dh > 0
					? `cao hơn ${f(d.dh)}`
					: `thấp hơn ${f(d.dh)}`
				: `lệch ${f(Math.max(Math.abs(d.dx), Math.abs(d.dy)))}`;
	return `“${d.name.length > 40 ? `${d.name.slice(0, 39)}…` : d.name}” ${what}`;
}

/** The first line: route, then each file as a link when it can be opened online, else its path. */
function titleLine(ctx: NoteContext): {
	title: string;
	titleLinks: NoteLink[];
} {
	const parts: { text: string; url?: string }[] = [
		{ text: `</>  ${ctx.route}` },
	];
	const l = ctx.links ?? {};
	if (l.demo && ctx.pageFile) parts.push({ text: "▶ Xem demo ↗", url: l.demo });
	parts.push(
		l.doc ? { text: "📄 Spec MD ↗", url: l.doc } : { text: ctx.docFile },
	);
	if (!ctx.pageFile) parts.push({ text: "🧩 Chưa có code" });
	else
		parts.push(
			l.code ? { text: "🧩 Code ↗", url: l.code } : { text: ctx.pageFile },
		);
	if (l.report) parts.push({ text: "📊 Báo cáo kiểm tra ↗", url: l.report });
	let title = "";
	const titleLinks: NoteLink[] = [];
	parts.forEach((p, i) => {
		if (i) title += "  ·  ";
		// Figma ranges count UTF-16 code units, like JavaScript string indices.
		if (p.url)
			titleLinks.push({
				start: title.length,
				end: title.length + p.text.length,
				url: p.url,
			});
		title += p.text;
	});
	return { title, titleLinks };
}

export function buildNote(spec: PageSpec, ctx: NoteContext): NoteContent {
	const { title, titleLinks } = titleLine(ctx);
	const r = ctx.fidelity?.report;
	if (!r || !ctx.fidelity) {
		return {
			title,
			titleLinks,
			status: ctx.pageFile
				? "Chưa kiểm tra bản build này — chạy figma-page check"
				: "Đã có mô tả (MD) · chưa sinh code cho màn này",
			tone: "unchecked",
		};
	}
	const boxes = r.boxes
		? ` · hộp ${r.boxes.withinThreshold}/${r.boxes.measured}`
		: "";
	let status = `Kiểm tra ${when(ctx.fidelity.checkedAt)}: ${r.pass ? "PASS" : "FAIL"}${boxes} · pixel ngoài chữ ${r.pixels.shapePercent}%`;
	const issues = [
		...(r.boxes?.over ?? []).map(issue),
		...r.textNodes
			.filter((t) => t.percent > r.thresholds.maxTextNodeDiffPercent)
			.map((t) => `“${t.name}” chữ khác ${t.percent}%`),
	];
	if (issues.length) {
		let shown = 0;
		let text = "";
		for (const i of issues) {
			const next = `${text ? `${text}; ` : ""}${i}`;
			if (`${status} · Lệch: ${next}`.length > MAX_STATUS_CHARS && shown > 0)
				break;
			text = next;
			shown++;
		}
		const more = issues.length - shown;
		status += ` · Lệch: ${text}${more ? ` (+${more} chỗ khác, xem report.md)` : ""}`;
	}
	if (spec.warnings.length)
		status += ` · ${spec.warnings.length} chỗ CSS gần đúng`;
	return { title, titleLinks, status, tone: r.pass ? "pass" : "fail" };
}

const NOTE_SCRIPT = `
var N = __PARAMS__;
var NS = '${PAGE_SPEC_NAMESPACE}';
var frame = await figma.getNodeByIdAsync(N.frameId);
if (!frame) throw new Error('Page frame not found: ' + N.frameId);
var parent = frame.parent;

var note = null;
var noteId = frame.getSharedPluginData(NS, N.key);
if (noteId) {
  var found = await figma.getNodeByIdAsync(noteId);
  if (found && found.getSharedPluginData(NS, N.forKey) === frame.id) note = found;
}
if (N.remove) {
  if (note) note.remove();
  frame.setSharedPluginData(NS, N.key, '');
  return JSON.stringify({ removed: !!note });
}

var family = 'Inter';
try { await figma.loadFontAsync({ family: 'Inter', style: 'Regular' }); await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' }); }
catch (e) { family = 'Roboto'; await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' }); await figma.loadFontAsync({ family: 'Roboto', style: 'Medium' }); }
var bold = family === 'Inter' ? 'Semi Bold' : 'Medium';

// The note is a GROUP, not a frame: Figma prints the name of every top-level
// frame on the canvas, and with hundreds of screens that is a lot of text.
var tones = { pass: [0.86, 0.97, 0.9], fail: [1, 0.93, 0.92], unchecked: [0.94, 0.96, 0.98] };
var edges = { pass: [0.13, 0.6, 0.33], fail: [0.85, 0.27, 0.22], unchecked: [0.45, 0.52, 0.6] };
var bg = tones[N.tone] || tones.unchecked;
var edge = edges[N.tone] || edges.unchecked;

// An existing note stays wherever the team dragged it; a new one goes right under the frame.
var created = !note;
var x = note ? note.x : frame.x;
var y = note ? note.y : frame.y + frame.height + N.gap;
var width = frame.width;
// x/y are relative to the note's parent, which may differ if the team moved it.
var host = note ? note.parent : parent;
var parts = {};
if (note && note.type === 'GROUP') {
  for (var c = 0; c < note.children.length; c++) parts[note.children[c].name] = note.children[c];
}
if (!parts.bg || !parts.title || !parts.status) {
  // Notes from earlier versions were frames: rebuild them as a group in the same place.
  if (note) note.remove();
  note = null;
  parts = { bg: figma.createRectangle(), title: figma.createText(), status: figma.createText() };
  parts.bg.name = 'bg'; parts.title.name = 'title'; parts.status.name = 'status';
  host.appendChild(parts.bg); host.appendChild(parts.title); host.appendChild(parts.status);
}

function setText(t, text, style, size, color) {
  t.fontName = { family: family, style: style };
  t.fontSize = size;
  t.characters = text;
  t.fills = [{ type: 'SOLID', color: { r: color[0], g: color[1], b: color[2] } }];
  t.textAutoResize = 'HEIGHT';
  t.resize(width - 48, t.height);
}
setText(parts.title, N.title, bold, 20, [0.07, 0.09, 0.15]);
var len = parts.title.characters.length;
if (len) {
  parts.title.setRangeHyperlink(0, len, null);
  parts.title.setRangeTextDecoration(0, len, 'NONE');
}
for (var li = 0; li < (N.titleLinks || []).length; li++) {
  var L = N.titleLinks[li];
  parts.title.setRangeHyperlink(L.start, L.end, { type: 'URL', value: L.url });
  parts.title.setRangeTextDecoration(L.start, L.end, 'UNDERLINE');
  parts.title.setRangeFills(L.start, L.end, [{ type: 'SOLID', color: { r: 0.09, g: 0.36, b: 0.85 } }]);
}
setText(parts.status, N.status, 'Regular', 18, edge);

var height = 10 + parts.title.height + 4 + parts.status.height + 10;
parts.bg.resize(width, height);
parts.bg.cornerRadius = 12;
parts.bg.fills = [{ type: 'SOLID', color: { r: bg[0], g: bg[1], b: bg[2] } }];
parts.bg.strokes = [{ type: 'SOLID', color: { r: edge[0], g: edge[1], b: edge[2] } }];
parts.bg.strokeWeight = 1;
parts.bg.strokeAlign = 'INSIDE';
parts.bg.x = x; parts.bg.y = y;
parts.title.x = x + 24; parts.title.y = y + 10;
parts.status.x = x + 24; parts.status.y = y + 10 + parts.title.height + 4;

if (!note) {
  var at = host === parent ? parent.children.indexOf(frame) + 1 : host.children.length;
  note = figma.group([parts.bg, parts.title, parts.status], host, at);
  note.setSharedPluginData(NS, N.forKey, frame.id);
}
note.locked = false;
note.name = 'Code · ' + frame.name;

// Layers it overlaps are reported so the team can spread the layout out.
var top = y, bottom = y + height, left = x, right = x + width;
var overlaps = [];
for (var i = 0; i < host.children.length; i++) {
  var s = host.children[i];
  if (s === note || s === frame || !s.visible) continue;
  if (s.x < right && s.x + s.width > left && s.y < bottom && s.y + s.height > top) overlaps.push(s.name);
}
frame.setSharedPluginData(NS, N.key, note.id);
return JSON.stringify({ placed: true, created: created, noteId: note.id, height: Math.round(height), overlaps: overlaps });
`;

export function buildNoteScript(
	frameId: string,
	content: NoteContent | null,
	gap = 12,
): string {
	const params = content
		? { frameId, key: NOTE_KEY, forKey: NOTE_FOR_KEY, gap, ...content }
		: { frameId, key: NOTE_KEY, forKey: NOTE_FOR_KEY, remove: true };
	return NOTE_SCRIPT.replace("__PARAMS__", () => JSON.stringify(params));
}
