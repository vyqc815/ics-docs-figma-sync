/**
 * Figma code note tests
 *
 * The two-line note written right under each page frame: its content, and the
 * plugin script that places it — run against a mock `figma` to check it lands
 * under the frame, is locked, is rewritten in place on the next run, reports
 * the layers it overlaps, and can be removed.
 */

import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { FidelityReport } from "../src/core/page-spec/fidelity";
import type { PageSpec } from "../src/core/page-spec/normalize";
import {
	buildNote,
	buildNoteScript,
	NOTE_FOR_KEY,
	NOTE_KEY,
} from "../src/core/page-spec/note";
import { type Deps, runCli } from "../src/page-cli";

function spec(warnings = 0): PageSpec {
	const box = { x: 0, y: 0, width: 1920, height: 3139 };
	return {
		specVersion: 1,
		source: {
			fileKey: "F",
			fileName: "F",
			pageName: "P",
			nodeId: "1:1",
			nodeName: "KH-LP-14",
			exportedAt: "2026-11-01T00:00:00.000Z",
		},
		frame: { width: 1920, height: 3139 },
		fonts: [],
		tokens: { variables: [], styles: [] },
		assets: [],
		stats: { nodes: 1, texts: 0, images: 0, icons: 0, instances: 0 },
		warnings: Array.from({ length: warnings }, (_, i) => ({
			nodeId: `w${i}`,
			nodeName: "x",
			code: "STROKE_GRADIENT_INSIDE",
			message: "x",
		})),
		tree: {
			id: "1:1",
			name: "KH-LP-14",
			type: "FRAME",
			role: "page",
			box,
			frameBox: box,
			positioning: "root",
			css: {},
			children: [],
		},
	};
}

const ctx = {
	route: "/khoa-hoc",
	pageFile: "components/figma/khoa-hoc/index.tsx",
	docFile: "docs/pages/khoa-hoc.md",
};

function report(
	over: FidelityReport["boxes"] extends infer B
		? B extends { over: infer O }
			? O
			: never
		: never,
	pass = false,
): FidelityReport {
	return {
		pass,
		thresholds: {
			maxPixelDiffPercent: 0.5,
			maxBoxDelta: 1,
			maxTextBoxDelta: 2.5,
			colorThreshold: 0.1,
			aaRadius: 1,
			subpixel: true,
			maxTextNodeDiffPercent: 35,
		},
		pixels: {
			width: 1920,
			height: 3139,
			mismatched: 1,
			percent: 0.3,
			shapePercent: 0.034,
			textPercent: 2,
			sizeMismatch: false,
		},
		textNodes: [],
		regions: [],
		boxes: {
			measured: 427,
			missing: [],
			withinThreshold: 427 - over.length,
			buckets: {},
			worst: [],
			maxDelta: 2.78,
			over,
		},
		failures: [],
	};
}

const vatLy = {
	id: "3:2",
	name: "VẬT LÝ 12",
	role: "text",
	delta: 2.78,
	dx: 0,
	dy: 0,
	dw: 2.78,
	dh: 0,
	limit: 2.5,
	textDriven: true,
};

describe("buildNote", () => {
	it("says where the page lives in code and that it was not checked yet", () => {
		expect(buildNote(spec(), ctx)).toEqual({
			title:
				"</>  /khoa-hoc  ·  docs/pages/khoa-hoc.md  ·  components/figma/khoa-hoc/index.tsx",
			titleLinks: [],
			status: "Chưa kiểm tra bản build này — chạy figma-page check",
			tone: "unchecked",
		});
	});

	it("turns the files into clickable links when the repo is known", () => {
		const doc = "https://github.com/org/web/blob/main/docs/pages/khoa-hoc.md";
		const code =
			"https://github.com/org/web/tree/main/components/figma/khoa-hoc";
		const report =
			"https://github.com/org/web/blob/main/.figma/pages/khoa-hoc/fidelity/report.md";
		const note = buildNote(spec(), { ...ctx, links: { doc, code, report } });
		expect(note.title).toBe(
			"</>  /khoa-hoc  ·  📄 Spec MD ↗  ·  🧩 Code ↗  ·  📊 Báo cáo kiểm tra ↗",
		);
		expect(
			note.titleLinks.map((l) => [note.title.slice(l.start, l.end), l.url]),
		).toEqual([
			["📄 Spec MD ↗", doc],
			["🧩 Code ↗", code],
			["📊 Báo cáo kiểm tra ↗", report],
		]);
	});

	it("links the deployed preview of the page first", () => {
		const demo = "https://web.vercel.app/khoa-hoc";
		const note = buildNote(spec(), { ...ctx, links: { demo } });
		expect(note.title.startsWith("</>  /khoa-hoc  ·  ▶ Xem demo ↗  ·  ")).toBe(
			true,
		);
		expect(note.titleLinks[0]).toMatchObject({ url: demo });
		expect(
			note.title.slice(note.titleLinks[0].start, note.titleLinks[0].end),
		).toBe("▶ Xem demo ↗");
		// A page without code has nothing to preview.
		const docOnly = buildNote(spec(), {
			...ctx,
			pageFile: "",
			links: { demo },
		});
		expect(docOnly.titleLinks).toEqual([]);
	});

	it("adds the check result and what is off", () => {
		const note = buildNote(spec(1), {
			...ctx,
			fidelity: { report: report([vatLy]), checkedAt: "2026-11-01T21:41:00" },
		});
		expect(note.tone).toBe("fail");
		expect(note.status).toBe(
			"Kiểm tra 01/11 21:41: FAIL · hộp 426/427 · pixel ngoài chữ 0.034% · Lệch: “VẬT LÝ 12” rộng hơn 2.78px · 1 chỗ CSS gần đúng",
		);
		expect(
			buildNote(spec(), {
				...ctx,
				fidelity: {
					report: report([], true),
					checkedAt: "2026-11-01T21:41:00",
				},
			}),
		).toMatchObject({
			tone: "pass",
			status:
				"Kiểm tra 01/11 21:41: PASS · hộp 427/427 · pixel ngoài chữ 0.034%",
		});
	});

	it("keeps the status to about two lines by summarising extra issues", () => {
		const many = Array.from({ length: 12 }, (_, i) => ({
			...vatLy,
			id: `x${i}`,
			name: `Một tiêu đề khá dài số ${i}`,
		}));
		const note = buildNote(spec(), {
			...ctx,
			fidelity: { report: report(many), checkedAt: "2026-11-01T21:41:00" },
		});
		expect(note.status.length).toBeLessThan(200);
		expect(note.status).toMatch(/\(\+\d+ chỗ khác, xem report\.md\)$/);
	});
});

// ---------------------------------------------------------------------------
// Plugin script against a mock figma
// ---------------------------------------------------------------------------

interface MockNode {
	id: string;
	name: string;
	type: string;
	x: number;
	y: number;
	width: number;
	height: number;
	visible: boolean;
	locked?: boolean;
	children: MockNode[];
	parent?: MockNode;
	data: Record<string, string>;
	[key: string]: unknown;
}

function mockFigma(blockerAt?: number) {
	let seq = 100;
	const all = new Map<string, MockNode>();
	const make = (o: Partial<MockNode>): MockNode => {
		const n: MockNode = {
			id: `${seq++}:1`,
			name: "",
			type: "FRAME",
			x: 0,
			y: 0,
			width: 100,
			height: 100,
			visible: true,
			children: [],
			data: {},
			...o,
		};
		n.getSharedPluginData = (_ns: string, k: string) => n.data[k] ?? "";
		n.setSharedPluginData = (_ns: string, k: string, v: string) => {
			n.data[k] = v;
		};
		n.appendChild = (c: MockNode) => {
			c.parent = n;
			n.children.push(c);
		};
		n.insertChild = (i: number, c: MockNode) => {
			c.parent = n;
			n.children.splice(i, 0, c);
		};
		n.remove = () => {
			const p = n.parent;
			if (p) p.children = p.children.filter((c) => c !== n);
			all.delete(n.id);
		};
		n.resize = (w: number, h: number) => {
			n.width = w;
			n.height = h;
		};
		all.set(n.id, n);
		return n;
	};
	const section = make({
		id: "0:1",
		name: "Section",
		type: "SECTION",
		width: 12000,
		height: 11000,
	});
	const frame = make({
		id: "1:1",
		name: "KH-LP-14",
		x: 200,
		y: 846,
		width: 1920,
		height: 3139,
	});
	(section.appendChild as (c: MockNode) => void)(frame);
	section.height = 11000;
	if (blockerAt !== undefined) {
		const label = make({
			id: "2:1",
			name: "Label / Video học thử",
			type: "GROUP",
			x: 200,
			y: blockerAt,
			width: 1920,
			height: 125,
		});
		(section.appendChild as (c: MockNode) => void)(label);
		section.height = 11000;
	}
	const figma = {
		getNodeByIdAsync: async (id: string) => all.get(id) ?? null,
		loadFontAsync: async () => undefined,
		createRectangle: () => make({ type: "RECTANGLE" }),
		group: (nodes: MockNode[], parent: MockNode, index: number) => {
			const g = make({ type: "GROUP" });
			for (const c of nodes) {
				(c.remove as () => void)();
				all.set(c.id, c);
				c.parent = g;
			}
			g.children = nodes;
			g.x = Math.min(...nodes.map((c) => c.x));
			g.y = Math.min(...nodes.map((c) => c.y));
			g.width = Math.max(...nodes.map((c) => c.x + c.width)) - g.x;
			g.height = Math.max(...nodes.map((c) => c.y + c.height)) - g.y;
			g.parent = parent;
			parent.children.splice(index, 0, g);
			return g;
		},
		createText: () => {
			// One line of text, whatever the width.
			const t = make({ type: "TEXT", height: 26 });
			delete t.appendChild;
			const links: { text: string; url: string }[] = [];
			t.links = links;
			t.setRangeHyperlink = (
				start: number,
				end: number,
				link: { type: string; value: string } | null,
			) => {
				if (!link) {
					links.length = 0;
					return;
				}
				links.push({
					text: String(t.characters).slice(start, end),
					url: link.value,
				});
			};
			t.setRangeTextDecoration = () => undefined;
			t.setRangeFills = () => undefined;
			return t;
		},
	};
	return { figma, frame, section, all, make };
}

const run = async (code: string, figma: unknown) =>
	JSON.parse(
		await new Function("figma", `return (async function() {\n${code}\n})()`)(
			figma,
		),
	);
const texts = (n: MockNode) =>
	n.children.filter((c) => c.type === "TEXT").map((c) => c.characters);
const note = {
	title: "</>  /khoa-hoc  ·  a  ·  b",
	status: "Chưa kiểm tra",
	tone: "unchecked" as const,
};

describe("code note plugin script", () => {
	it("puts an unlocked two-line note right under the frame and links both ways", async () => {
		const m = mockFigma(4079); // the real KH-LP-14 layout: next label 94px below
		const res = await run(buildNoteScript("1:1", note), m.figma);
		expect(res).toMatchObject({ placed: true, created: true, height: 76 });
		const n = m.all.get(res.noteId) as MockNode;
		// A group, so Figma prints no frame name above it on the canvas.
		expect(n).toMatchObject({
			type: "GROUP",
			name: "Code · KH-LP-14",
			x: 200,
			y: 846 + 3139 + 12,
			width: 1920,
			height: 76,
			locked: false,
		});
		expect(texts(n)).toEqual([note.title, note.status]);
		expect(m.section.children.map((c) => c.id)).toEqual([
			"1:1",
			res.noteId,
			"2:1",
		]);
		expect(m.frame.data[NOTE_KEY]).toBe(res.noteId);
		expect(n.data[NOTE_FOR_KEY]).toBe("1:1");
	});

	it("makes the link ranges of the first line clickable", async () => {
		const m = mockFigma();
		const content = buildNote(spec(), {
			...ctx,
			links: { doc: "https://x/doc.md", code: "https://x/code" },
		});
		const res = await run(buildNoteScript("1:1", content), m.figma);
		const title = (m.all.get(res.noteId) as MockNode).children.find(
			(c) => c.name === "title",
		) as MockNode;
		expect(title.links).toEqual([
			{ text: "📄 Spec MD ↗", url: "https://x/doc.md" },
			{ text: "🧩 Code ↗", url: "https://x/code" },
		]);
	});

	it("rewrites the same note on the next run instead of adding another, wherever it was dragged", async () => {
		const m = mockFigma(4079);
		const first = await run(buildNoteScript("1:1", note), m.figma);
		// The team drags the note somewhere else.
		const dragged = m.all.get(first.noteId) as MockNode;
		dragged.x = 2400;
		dragged.y = 900;
		const second = await run(
			buildNoteScript("1:1", {
				...note,
				status: "Kiểm tra: PASS",
				tone: "pass",
			}),
			m.figma,
		);
		expect(second).toMatchObject({
			placed: true,
			created: false,
			noteId: first.noteId,
		});
		expect(texts(m.all.get(first.noteId) as MockNode)).toEqual([
			note.title,
			"Kiểm tra: PASS",
		]);
		expect(dragged).toMatchObject({ x: 2400, y: 900 });
		// Its parts are laid out where it was dragged.
		expect(dragged.children.map((c) => [c.name, c.x, c.y])).toEqual([
			["bg", 2400, 900],
			["title", 2424, 910],
			["status", 2424, 940],
		]);
		expect(m.section.children).toHaveLength(3);
	});

	it("is always placed under the frame and reports what it overlaps", async () => {
		const m = mockFigma(4000); // only 15px free: the next label starts right below
		const res = await run(buildNoteScript("1:1", note), m.figma);
		expect(res).toMatchObject({
			placed: true,
			created: true,
			overlaps: ["Label / Video học thử"],
		});
		expect(m.section.children.map((c) => c.id)).toEqual([
			"1:1",
			res.noteId,
			"2:1",
		]);
		expect(m.frame.data[NOTE_KEY]).toBe(res.noteId);
	});

	it("turns a note from an earlier version (a frame) into a group in the same place", async () => {
		const m = mockFigma();
		const old = m.make({ name: "Code · KH-LP-14", x: 3000, y: 500 });
		(m.section.appendChild as (c: MockNode) => void)(old);
		old.data[NOTE_FOR_KEY] = "1:1";
		m.frame.data[NOTE_KEY] = old.id;
		const res = await run(buildNoteScript("1:1", note), m.figma);
		expect(res).toMatchObject({ placed: true, created: false });
		expect(m.all.has(old.id)).toBe(false);
		const n = m.all.get(res.noteId) as MockNode;
		expect(n).toMatchObject({ type: "GROUP", x: 3000, y: 500 });
		expect(m.frame.data[NOTE_KEY]).toBe(n.id);
		expect(n.data[NOTE_FOR_KEY]).toBe("1:1");
		expect(m.section.children).toHaveLength(2);
	});

	it("removes its note on request", async () => {
		const m = mockFigma();
		const { noteId } = await run(buildNoteScript("1:1", note), m.figma);
		expect(await run(buildNoteScript("1:1", null), m.figma)).toEqual({
			removed: true,
		});
		expect(m.all.has(noteId)).toBe(false);
	});
});

describe("figma-page check note", () => {
	let dir: string;
	beforeEach(() => {
		dir = mkdtempSync(join(tmpdir(), "fignote-"));
		writeFileSync(join(dir, "package.json"), "{}");
		writeFileSync(
			join(dir, "figma.pages.json"),
			JSON.stringify({
				pages: [{ name: "khoa-hoc", nodeId: "1:1", route: "/khoa-hoc" }],
			}),
		);
		const pageDir = join(dir, ".figma/pages/khoa-hoc");
		mkdirSync(pageDir, { recursive: true });
		writeFileSync(join(pageDir, "page-spec.json"), JSON.stringify(spec()));
		writeFileSync(
			join(pageDir, "build.json"),
			JSON.stringify({ ...ctx, sections: [] }),
		);
	});
	afterEach(() => rmSync(dir, { recursive: true, force: true }));

	function deps(openBridge: Deps["openBridge"]): Deps {
		return {
			openBridge,
			checkPage: jest.fn(async () => ({
				...report([vatLy]),
				url: "u",
				chrome: "c",
				consoleErrors: [],
				rootFound: true,
				outputDir: join(dir, "x"),
				files: [],
			})),
		};
	}

	it("refreshes the note with the result, reports overlaps, and survives a closed Figma", async () => {
		const scripts: string[] = [];
		const bridge = {
			executeCodeViaUI: jest.fn(async (code: string) => {
				scripts.push(code);
				return {
					success: true,
					result: JSON.stringify({
						placed: true,
						created: true,
						overlaps: ["Mũi tên", "Label / Video học thử"],
					}),
				};
			}),
			files: () => [],
			close: jest.fn(async () => undefined),
		};
		const out: string[] = [];
		const io = { log: (l: string) => out.push(l), error: () => undefined };
		expect(
			await runCli(["check"], io, deps(jest.fn(async () => bridge)), dir),
		).toBe(1);
		expect(scripts[0]).toContain("Lệch: “VẬT LÝ 12” rộng hơn 2.78px");
		expect(out.join("\n")).toContain(
			"! it overlaps “Mũi tên”, “Label / Video học thử” — spread the layout out when convenient.",
		);

		expect(
			await runCli(
				["check"],
				io,
				deps(
					jest.fn(async () =>
						Promise.reject(new Error("No Figma file connected within 15s.")),
					),
				),
				dir,
			),
		).toBe(1);
		expect(out.join("\n")).toContain(
			"! Skipped the Figma code note: No Figma file connected within 15s.",
		);

		const off = deps(jest.fn());
		await runCli(["check", "--no-figma-note"], io, off, dir);
		expect(off.openBridge).not.toHaveBeenCalled();
	});
});
