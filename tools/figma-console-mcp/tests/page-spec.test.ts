/**
 * Page spec export tests
 *
 * Covers the CSS normalizer (exact geometry/typography mapping), the
 * plugin-side extraction script (executed against a mock `figma` global, so
 * syntax and traversal bugs surface here rather than inside Figma), and the
 * end-to-end tool writing spec, assets and reference render to disk.
 */

import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
	cssColor,
	letterSpacingCss,
	linearGradientCss,
	lineHeightCss,
	normalizePageSpec,
	pngSize,
	type RawExtract,
	slug,
	sniffImageExt,
} from "../src/core/page-spec/normalize";
import { buildExtractScript } from "../src/core/page-spec/plugin-scripts";
import {
	exportPageSpec,
	PageTimeoutError,
	registerPageSpecTools,
	unwrapScriptResult,
	withRetry,
} from "../src/core/page-spec-tools";

// ---------------------------------------------------------------------------
// Mock Figma
// ---------------------------------------------------------------------------

const MIXED = Symbol("mixed");
const PNG_1x1 = Buffer.from(
	"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
	"base64",
);

type MockNode = Record<string, unknown> & { id: string; children?: MockNode[] };

function at(x: number, y: number) {
	return [
		[1, 0, x],
		[0, 1, y],
	];
}

function makeFigma() {
	const icon: MockNode = {
		id: "1:20",
		name: "Icon / Arrow",
		type: "INSTANCE",
		visible: true,
		absoluteTransform: at(1700, 40),
		width: 24,
		height: 24,
		absoluteRenderBounds: { x: 1700, y: 40, width: 24, height: 24 },
		fills: [],
		children: [
			{
				id: "1:21",
				name: "Vector",
				type: "VECTOR",
				visible: true,
				absoluteTransform: at(1704, 44),
				width: 16,
				height: 16,
				children: undefined,
			},
		],
		getMainComponentAsync: async () => ({
			id: "9:1",
			name: "Arrow",
			key: "k-arrow",
			remote: false,
			parent: { type: "COMPONENT_SET", name: "Icon", key: "k-icon" },
		}),
		componentProperties: { "Size#1:0": { type: "VARIANT", value: "24" } },
	};
	const title: MockNode = {
		id: "1:10",
		name: "Title",
		type: "TEXT",
		visible: true,
		absoluteTransform: at(120, 40),
		width: 300,
		height: 48,
		characters: "Xin chào",
		textAlignHorizontal: "LEFT",
		textAlignVertical: "TOP",
		textAutoResize: "WIDTH_AND_HEIGHT",
		layoutSizingHorizontal: "HUG",
		layoutSizingVertical: "HUG",
		fills: [
			{
				type: "SOLID",
				visible: true,
				opacity: 1,
				color: { r: 1, g: 0, b: 0 },
				boundVariables: { color: { type: "VARIABLE_ALIAS", id: "v:1" } },
			},
		],
		getStyledTextSegments: () => [
			{
				characters: "Xin chào",
				start: 0,
				end: 8,
				fontName: { family: "Be Vietnam Pro", style: "Bold" },
				fontSize: 40,
				fontWeight: 700,
				lineHeight: { unit: "PIXELS", value: 48 },
				letterSpacing: { unit: "PERCENT", value: -2 },
				fills: [
					{
						type: "SOLID",
						visible: true,
						opacity: 1,
						color: { r: 1, g: 0, b: 0 },
						boundVariables: { color: { type: "VARIABLE_ALIAS", id: "v:1" } },
					},
				],
				textDecoration: "NONE",
				textCase: "UPPER",
				textStyleId: "S:h1",
			},
		],
	};
	const photo: MockNode = {
		id: "1:30",
		name: "Photo",
		type: "RECTANGLE",
		visible: true,
		absoluteTransform: at(100, 200),
		width: 400,
		height: 300,
		layoutPositioning: "ABSOLUTE",
		cornerRadius: 12,
		fills: [
			{
				type: "IMAGE",
				visible: true,
				opacity: 1,
				scaleMode: "FILL",
				imageHash: "abcdef0123456789",
			},
		],
		getSharedPluginData: (ns: string, key: string) =>
			ns === "figma_console" && key === "spec" ? '{"note":"hero photo"}' : "",
	};
	const hidden: MockNode = {
		id: "1:40",
		name: "Hidden",
		type: "RECTANGLE",
		visible: false,
		absoluteTransform: at(0, 0),
		width: 10,
		height: 10,
	};
	const root: MockNode = {
		id: "1:1",
		name: "page:/home @1920",
		type: "FRAME",
		visible: true,
		absoluteTransform: at(100, 0),
		width: 1920,
		height: 900,
		layoutMode: "HORIZONTAL",
		primaryAxisAlignItems: "SPACE_BETWEEN",
		counterAxisAlignItems: "CENTER",
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 40,
		paddingBottom: 40,
		itemSpacing: 16,
		layoutSizingHorizontal: "FIXED",
		layoutSizingVertical: "FIXED",
		clipsContent: true,
		fills: [
			{ type: "SOLID", visible: true, opacity: 1, color: { r: 1, g: 1, b: 1 } },
		],
		exportAsync: async () => PNG_1x1,
		children: [title, icon, photo, hidden],
	};
	const page = { type: "PAGE", name: "Home", parent: null };
	const all: MockNode[] = [];
	const link = (n: MockNode, parent: unknown) => {
		n.parent = parent;
		if (typeof n.getSharedPluginData !== "function")
			n.getSharedPluginData = () => "";
		all.push(n);
		for (const c of n.children ?? []) link(c, n);
	};
	link(root, page);
	icon.exportAsync = async () => '<svg width="24" height="24"></svg>';

	return {
		mixed: MIXED,
		fileKey: "FILE123",
		root: { name: "PLS Web" },
		currentPage: { selection: [root] },
		getNodeByIdAsync: async (id: string) =>
			all.find((n) => n.id === id) ?? null,
		getStyleByIdAsync: async (id: string) =>
			id === "S:h1"
				? { name: "Heading/H1", type: "TEXT", description: "" }
				: null,
		getImageByHash: (hash: string) =>
			hash === "abcdef0123456789"
				? {
						getBytesAsync: async () => new Uint8Array(PNG_1x1),
						getSizeAsync: async () => ({ width: 800, height: 600 }),
					}
				: null,
		base64Encode: (b: Uint8Array) => Buffer.from(b).toString("base64"),
		variables: {
			getVariableByIdAsync: async (id: string) =>
				id === "v:1"
					? {
							id,
							name: "color/primary",
							resolvedType: "COLOR",
							variableCollectionId: "c:1",
							valuesByMode: { "m:1": { type: "VARIABLE_ALIAS", id: "v:2" } },
							codeSyntax: { WEB: "var(--primary)" },
						}
					: id === "v:2"
						? {
								id,
								name: "red/500",
								resolvedType: "COLOR",
								variableCollectionId: "c:1",
								valuesByMode: { "m:1": { r: 1, g: 0, b: 0, a: 1 } },
								codeSyntax: {},
							}
						: null,
			getVariableCollectionByIdAsync: async () => ({
				id: "c:1",
				name: "Theme",
				defaultModeId: "m:1",
				modes: [{ modeId: "m:1", name: "Light" }],
			}),
		},
	};
}

/** Runs a plugin script the way EXECUTE_CODE does: body of an async function. */
async function runInMockFigma(code: string, figma: unknown): Promise<unknown> {
	const fn = new Function("figma", `return (async function() {\n${code}\n})()`);
	return fn(figma);
}

function mockConnector(figma: unknown) {
	return {
		executeCodeViaUI: jest.fn(async (code: string) => {
			try {
				return { success: true, result: await runInMockFigma(code, figma) };
			} catch (e) {
				return {
					success: false,
					error: e instanceof Error ? e.message : String(e),
				};
			}
		}),
	};
}

const DEFAULT_ARGS = {
	exportAssets: true,
	includeReference: true,
	referenceScale: 1,
	detectIcons: true,
	respectExportSettings: false,
	includeHidden: false,
};

// ---------------------------------------------------------------------------
// Normalizer helpers
// ---------------------------------------------------------------------------

describe("page spec CSS helpers", () => {
	it("converts colors", () => {
		expect(cssColor({ r: 1, g: 0, b: 0 })).toBe("#ff0000");
		expect(cssColor({ r: 0, g: 0, b: 0, a: 0.5 })).toBe("rgba(0, 0, 0, 0.5)");
		expect(cssColor({ r: 1, g: 1, b: 1 }, 0.25)).toBe(
			"rgba(255, 255, 255, 0.25)",
		);
	});

	it("maps line height and letter spacing units", () => {
		expect(lineHeightCss({ unit: "AUTO" })).toBe("normal");
		expect(lineHeightCss({ unit: "PIXELS", value: 24 })).toBe("24px");
		expect(lineHeightCss({ unit: "PERCENT", value: 150 })).toBe("1.5");
		expect(letterSpacingCss({ unit: "PERCENT", value: -2 })).toBe("-0.02em");
		expect(letterSpacingCss({ unit: "PIXELS", value: 0.5 })).toBe("0.5px");
		expect(letterSpacingCss({ unit: "PIXELS", value: 0 })).toBe("0");
	});

	it("projects linear gradients exactly", () => {
		const stops = [
			{ position: 0, color: { r: 1, g: 0, b: 0, a: 1 } },
			{ position: 1, color: { r: 0, g: 0, b: 1, a: 1 } },
		];
		// Identity transform: left → right.
		expect(
			linearGradientCss(
				{
					gradientTransform: [
						[1, 0, 0],
						[0, 1, 0],
					],
					gradientStops: stops,
				},
				200,
				100,
			),
		).toBe("linear-gradient(90deg, #ff0000 0%, #0000ff 100%)");
		// Top → bottom (handles rotated 90°).
		expect(
			linearGradientCss(
				{
					gradientTransform: [
						[0, 1, 0],
						[-1, 0, 1],
					],
					gradientStops: stops,
				},
				200,
				100,
			),
		).toBe("linear-gradient(180deg, #ff0000 0%, #0000ff 100%)");
	});

	it("slugs Vietnamese names", () => {
		expect(slug("Ảnh Đại diện / Trang chủ")).toBe("anh-dai-dien-trang-chu");
	});

	it("sniffs image types and PNG size", () => {
		expect(sniffImageExt(PNG_1x1)).toBe("png");
		expect(sniffImageExt(new Uint8Array([0xff, 0xd8, 0xff, 0xe0]))).toBe("jpg");
		expect(pngSize(PNG_1x1)).toEqual({ width: 1, height: 1 });
	});
});

describe("normalizePageSpec layout", () => {
	const node = (o: Record<string, unknown>) => ({
		visible: true,
		transform: at(0, 0),
		width: 100,
		height: 100,
		...o,
	});

	function spec(tree: Record<string, unknown>) {
		const raw: RawExtract = {
			file: { fileKey: "F", fileName: "F", pageName: "P" },
			tree,
			variables: [],
			styles: [],
			assets: [],
			warnings: [],
			nodeCount: 1,
		};
		return normalizePageSpec(raw, {
			assetsPublicPath: "/a",
			exportedAt: "2026-01-01T00:00:00.000Z",
		});
	}

	it("shrinks padding that is wider than its fixed frame, as Figma shows it", () => {
		const s = spec(
			node({
				id: "r",
				name: "card",
				type: "FRAME",
				width: 326,
				height: 40,
				layoutMode: "VERTICAL",
				paddingLeft: 389,
				paddingRight: 389,
				paddingTop: 16,
				paddingBottom: 12,
			}),
		);
		expect(s.tree.css.padding).toBe("16px 163px 12px 163px");
	});

	it("maps auto layout to flex, FILL children to flex:1 and absolute children to left/top", () => {
		const s = spec(
			node({
				id: "r",
				name: "root",
				type: "FRAME",
				width: 1000,
				height: 200,
				layoutMode: "HORIZONTAL",
				itemSpacing: 24,
				paddingLeft: 10,
				paddingRight: 10,
				counterAxisAlignItems: "CENTER",
				children: [
					node({
						id: "a",
						name: "fill",
						type: "FRAME",
						transform: at(10, 0),
						layoutSizingHorizontal: "FILL",
						layoutSizingVertical: "FIXED",
						height: 50,
					}),
					node({
						id: "b",
						name: "abs",
						type: "RECTANGLE",
						transform: at(30, 40),
						layoutPositioning: "ABSOLUTE",
						width: 20,
						height: 10,
					}),
				],
			}),
		);
		expect(s.tree.css).toMatchObject({
			display: "flex",
			"flex-direction": "row",
			gap: "24px",
			padding: "0 10px 0 10px",
			"align-items": "center",
			width: "1000px",
			height: "200px",
		});
		const [fill, abs] = s.tree.children;
		expect(fill.positioning).toBe("flow");
		expect(fill.css).toMatchObject({
			flex: "1 1 100px",
			"min-width": "0",
			height: "50px",
		});
		expect(fill.css.width).toBeUndefined();
		expect(abs.positioning).toBe("absolute");
		expect(abs.css).toMatchObject({
			position: "absolute",
			left: "30px",
			top: "40px",
			width: "20px",
			height: "10px",
		});
	});

	it("keeps the last size of a fill child along a hugging parent's main axis", () => {
		const [cell] = spec(
			node({
				id: "col",
				name: "col",
				type: "FRAME",
				layoutMode: "VERTICAL",
				width: 120,
				height: 24,
				children: [
					node({
						id: "cell",
						name: "cell",
						type: "FRAME",
						layoutMode: "HORIZONTAL",
						layoutSizingHorizontal: "HUG",
						width: 114,
						height: 24,
						children: [
							node({
								id: "data",
								name: "data",
								type: "FRAME",
								layoutMode: "VERTICAL",
								layoutSizingHorizontal: "FILL",
								width: 82,
								height: 19,
								children: [
									node({
										id: "t",
										name: "t",
										type: "FRAME",
										width: 82,
										height: 19,
									}),
								],
							}),
						],
					}),
				],
			}),
		).tree.children;
		const data = cell.children[0];
		expect(data.css.width).toBe("82px");
		expect(data.css.flex).toBeUndefined();
	});

	it("keeps Shift+Enter (U+2028) as a line break", () => {
		const t = spec(
			node({
				id: "t",
				name: "t",
				type: "TEXT",
				width: 200,
				height: 38,
				characters: "Một\u2028Hai",
				textAutoResize: "HEIGHT",
			}),
		).tree;
		expect(t.text?.characters).toBe("Một\nHai");
	});

	it("overlaps children by a negative item spacing", () => {
		const avatar = (id: string) =>
			node({ id, name: id, type: "FRAME", width: 28, height: 28 });
		const [a, b, c] = spec(
			node({
				id: "stack",
				name: "stack",
				type: "FRAME",
				layoutMode: "HORIZONTAL",
				itemSpacing: -12,
				width: 120,
				height: 28,
				children: [avatar("a"), avatar("b"), avatar("c")],
			}),
		).tree.children;
		expect(a.css["margin-left"]).toBeUndefined();
		expect([b, c].map((n) => n.css["margin-left"])).toEqual(["-12px", "-12px"]);
	});

	it("gives fill siblings Figma's sizes even when their padding differs", () => {
		const button = (id: string, pad: number) =>
			node({
				id,
				name: id,
				type: "FRAME",
				layoutMode: "HORIZONTAL",
				layoutSizingHorizontal: "FILL",
				paddingLeft: pad,
				paddingRight: pad,
				width: 135,
				height: 36,
			});
		const s = spec(
			node({
				id: "row",
				name: "row",
				type: "FRAME",
				layoutMode: "HORIZONTAL",
				itemSpacing: 10,
				width: 280,
				height: 36,
				children: [button("a", 8), button("b", 16)],
			}),
		);
		// With a 0 basis the 16px-padded button would end up 16px wider.
		expect(s.tree.children.map((c) => c.css.flex)).toEqual([
			"1 1 135px",
			"1 1 135px",
		]);
	});

	it("keeps a blank text one line tall", () => {
		const t = spec(
			node({
				id: "t",
				name: "t",
				type: "TEXT",
				width: 0,
				height: 18,
				characters: " ",
				textAutoResize: "WIDTH_AND_HEIGHT",
			}),
		).tree;
		expect(t.css["min-height"]).toBe("18px");
	});

	it("mirrors a flipped frame with scaleX(-1) and keeps its children in its own axes", () => {
		// Figma: a 330.5px row flipped horizontally, its origin (right edge) at x=322;
		// a child 84.63px into the row's own axes.
		const row = spec(
			node({
				id: "card",
				name: "card",
				type: "FRAME",
				width: 314,
				height: 120,
				children: [
					node({
						id: "row",
						name: "row",
						type: "FRAME",
						layoutPositioning: "ABSOLUTE",
						rotation: -180,
						transform: [
							[-1, 0, 322],
							[0, 1, 24],
						],
						width: 330.5,
						height: 48,
						children: [
							node({
								id: "col",
								name: "col",
								type: "FRAME",
								transform: [
									[-1, 0, 322 - 84.63],
									[0, 1, 24],
								],
								width: 76.63,
								height: 48,
							}),
						],
					}),
				],
			}),
		).tree.children[0];
		expect(row.css).toMatchObject({
			position: "absolute",
			left: "-8.5px",
			top: "24px",
			transform: "scaleX(-1)",
		});
		expect(row.rotation).toBeUndefined();
		expect(row.children[0].box).toMatchObject({ x: 84.63, y: 0 });
		expect(row.frameBox.x).toBe(-8.5);
	});

	it("keeps a label above an absolute layer drawn before it", () => {
		const [ring, label] = spec(
			node({
				id: "gauge",
				name: "gauge",
				type: "FRAME",
				layoutMode: "VERTICAL",
				width: 36,
				height: 36,
				children: [
					node({
						id: "ring",
						name: "ring",
						type: "FRAME",
						layoutPositioning: "ABSOLUTE",
						width: 36,
						height: 36,
					}),
					node({
						id: "label",
						name: "80%",
						type: "FRAME",
						width: 17,
						height: 12,
					}),
				],
			}),
		).tree.children;
		expect(ring.css.position).toBe("absolute");
		// Without it the ring would paint over the label in a browser.
		expect(label.css.position).toBe("relative");
	});

	it("stacks earlier children on top when Figma says first on top", () => {
		const row = (id: string) =>
			node({ id, name: id, type: "FRAME", width: 100, height: 20 });
		const body = spec(
			node({
				id: "body",
				name: "body",
				type: "FRAME",
				layoutMode: "VERTICAL",
				itemReverseZIndex: true,
				width: 100,
				height: 60,
				children: [row("a"), row("b"), row("c")],
			}),
		).tree;
		const [a, b, c] = body.children;
		expect(body.css.isolation).toBe("isolate");
		expect([a, b, c].map((n) => n.css["z-index"])).toEqual(["3", "2", "1"]);
		expect(a.css.position).toBe("relative");
	});

	it("lets only INSIDE strokes take layout space when Figma includes strokes in layout", () => {
		const frame = (strokeAlign: string) =>
			spec(
				node({
					id: "r",
					name: "box",
					type: "FRAME",
					layoutMode: "VERTICAL",
					paddingTop: 12,
					paddingLeft: 12,
					strokesIncludedInLayout: true,
					strokes: [
						{ type: "SOLID", visible: true, color: { r: 0, g: 0, b: 0 } },
					],
					strokeWeight: 3,
					strokeAlign,
				}),
			).tree.css;
		// Figma: child at y = 12 + 3, hug height grows by 2 × 3 — exactly a CSS border.
		expect(frame("INSIDE")).toMatchObject({
			border: "3px solid #000000",
			padding: "12px 0 0 12px",
		});
		// A fractional stroke would snap to 1px as a border at 1x: padding keeps the space.
		const half = spec(
			node({
				id: "r",
				name: "box",
				type: "FRAME",
				layoutMode: "VERTICAL",
				paddingTop: 12,
				paddingLeft: 12,
				strokesIncludedInLayout: true,
				strokes: [
					{ type: "SOLID", visible: true, color: { r: 0, g: 0, b: 0 } },
				],
				strokeWeight: 1.5,
				strokeAlign: "INSIDE",
			}),
		).tree.css;
		expect(half.border).toBeUndefined();
		expect(half).toMatchObject({
			padding: "13.5px 1.5px 1.5px 13.5px",
			"box-shadow": "inset 0 0 0 1.5px #000000",
		});
		// A center stroke never moves children or grows the box.
		const center = frame("CENTER");
		expect(center.border).toBeUndefined();
		expect(center).toMatchObject({
			outline: "3px solid #000000",
			"outline-offset": "-1.5px",
		});
	});

	it("draws a gradient stroke exactly on an opaque box, keeping the content in place", () => {
		const s = spec(
			node({
				id: "r",
				name: "pill",
				type: "FRAME",
				width: 200,
				height: 40,
				layoutMode: "HORIZONTAL",
				paddingTop: 8,
				paddingRight: 8,
				paddingBottom: 8,
				paddingLeft: 16,
				cornerRadius: 20,
				fills: [{ type: "SOLID", visible: true, color: { r: 1, g: 1, b: 1 } }],
				strokes: [
					{
						type: "GRADIENT_LINEAR",
						visible: true,
						gradientTransform: [
							[1, 0, 0],
							[0, 1, 0],
						],
						gradientStops: [
							{ position: 0, color: { r: 1, g: 0, b: 0, a: 1 } },
							{ position: 1, color: { r: 0, g: 0, b: 1, a: 1 } },
						],
					},
				],
				strokeWeight: 2,
				strokeAlign: "INSIDE",
				children: [
					node({
						id: "c",
						name: "label",
						type: "FRAME",
						transform: at(16, 8),
						width: 50,
						height: 24,
					}),
				],
			}),
		);
		expect(s.tree.css).toMatchObject({
			background:
				"linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(90deg, #ff0000 0%, #0000ff 100%) border-box",
			border: "2px solid transparent",
			padding: "6px 6px 6px 14px",
			"border-radius": "20px",
		});
		expect(s.tree.css["background-color"]).toBeUndefined();
		expect(s.warnings.map((w) => w.code)).not.toContain("STROKE_GRADIENT");
	});

	it("draws inside strokes as inset shadows so they never shift children", () => {
		const s = spec(
			node({
				id: "r",
				name: "card",
				type: "FRAME",
				strokes: [
					{ type: "SOLID", visible: true, color: { r: 0, g: 0, b: 0 } },
				],
				strokeWeight: 2,
				strokeAlign: "INSIDE",
				effects: [
					{
						type: "DROP_SHADOW",
						visible: true,
						color: { r: 0, g: 0, b: 0, a: 0.1 },
						offset: { x: 0, y: 4 },
						radius: 8,
						spread: 0,
					},
				],
				cornerRadius: 8,
			}),
		);
		expect(s.tree.css["box-shadow"]).toBe(
			"inset 0 0 0 2px #000000, 0 4px 8px 0 rgba(0, 0, 0, 0.1)",
		);
		expect(s.tree.css["border-radius"]).toBe("8px");
		expect(s.tree.css.border).toBeUndefined();
	});

	it("maps a cropped image fill to exact background size/position", () => {
		const raw: RawExtract = {
			file: { fileKey: "F", fileName: "F", pageName: "P" },
			tree: node({
				id: "r",
				name: "img",
				type: "RECTANGLE",
				width: 200,
				height: 100,
				fills: [
					{
						type: "IMAGE",
						visible: true,
						scaleMode: "CROP",
						imageTransform: [
							[0.5, 0, 0.25],
							[0, 0.5, 0.1],
						],
						assetId: "a1",
					},
				],
			}),
			variables: [],
			styles: [],
			assets: [
				{
					id: "a1",
					kind: "image",
					imageHash: "0123456789abcdef",
					nodeIds: ["r"],
					name: "img",
				},
			],
			warnings: [],
			nodeCount: 1,
		};
		const s = normalizePageSpec(raw, { assetsPublicPath: "/figma/home/" });
		expect(s.assets[0].url).toBe("/figma/home/img-0123456789ab.png");
		expect(s.tree.css.background).toBe(
			'url("/figma/home/img-0123456789ab.png") -100px -20px / 400px 200px no-repeat',
		);
	});

	it("gives an exported hug-content auto layout icon its exact box and no flex/clip", () => {
		const raw: RawExtract = {
			file: { fileKey: "F", fileName: "F", pageName: "P" },
			tree: node({
				id: "r",
				name: "root",
				type: "FRAME",
				children: [
					node({
						id: "logo",
						name: "Logo",
						type: "FRAME",
						transform: at(20, 10),
						width: 205,
						height: 48,
						layoutMode: "HORIZONTAL",
						layoutSizingHorizontal: "HUG",
						layoutSizingVertical: "HUG",
						itemSpacing: 8,
						clipsContent: true,
						opacity: 0.5,
						asset: "a1",
						childCount: 2,
					}),
				],
			}),
			variables: [],
			styles: [],
			assets: [
				{
					id: "a1",
					kind: "svg",
					nodeId: "logo",
					nodeIds: ["logo"],
					name: "Logo",
					scale: 2,
				},
			],
			warnings: [],
			nodeCount: 2,
		};
		const [logo] = normalizePageSpec(raw, { assetsPublicPath: "/a" }).tree
			.children;
		expect(logo.role).toBe("icon");
		expect(logo.css).toEqual({
			position: "absolute",
			left: "20px",
			top: "10px",
			width: "205px",
			height: "48px",
		});
	});

	it("keeps the Figma size of an empty hug auto layout frame (spacers)", () => {
		const s = spec(
			node({
				id: "r",
				name: "row",
				type: "FRAME",
				layoutMode: "HORIZONTAL",
				children: [
					node({
						id: "sp",
						name: "spacer",
						type: "FRAME",
						layoutMode: "HORIZONTAL",
						layoutSizingHorizontal: "FILL",
						layoutSizingVertical: "HUG",
						width: 841,
						height: 100,
						children: [],
					}),
				],
			}),
		);
		expect(s.tree.children[0].css).toMatchObject({
			flex: "1 1 841px",
			height: "100px",
		});
	});

	it("uses Figma's measured height for auto line-height on auto-width text (CJK fonts)", () => {
		const text = (
			characters: string,
			height: number,
			textAutoResize = "WIDTH_AND_HEIGHT",
		) =>
			spec(
				node({
					id: "t",
					name: characters,
					type: "TEXT",
					width: 36,
					height,
					characters,
					textAutoResize,
					segments: [
						{
							start: 0,
							end: characters.length,
							characters,
							fontName: { family: "Noto Sans SC", style: "Medium" },
							fontSize: 18,
							fontWeight: 500,
							lineHeight: { unit: "AUTO" },
							fills: [
								{ type: "SOLID", visible: true, color: { r: 0, g: 0, b: 0 } },
							],
						},
					],
				}),
			).tree;
		// Figma: 你好 at 18px "Auto" is 22px tall; a browser's `normal` would give ~26px.
		const single = text("你好", 22);
		expect(single.css["line-height"]).toBe("22px");
		expect(single.text?.segments[0].lineHeight).toBe("22px");
		expect(text("你好\n再见", 44).css["line-height"]).toBe("22px");
		// A fixed-width box shorter than two lines is one line.
		expect(text("你好", 22, "HEIGHT").css["line-height"]).toBe("22px");
		// Several wrapped lines and nothing to measure from: Figma's auto stays `normal`.
		expect(text("你好你好你好", 70, "HEIGHT").css["line-height"]).toBe(
			"normal",
		);
	});

	it("keeps text lines as tall and as many as in Figma", () => {
		const seg = (characters: string, family: string, start = 0) => ({
			start,
			end: start + characters.length,
			characters,
			fontName: { family, style: "Medium" },
			fontSize: 15,
			fontWeight: 500,
			lineHeight: { unit: "PERCENT", value: 125 },
			fills: [{ type: "SOLID", visible: true, color: { r: 0, g: 0, b: 0 } }],
		});
		const text = (
			id: string,
			characters: string,
			height: number,
			segments: unknown[],
		) =>
			node({
				id,
				name: id,
				type: "TEXT",
				width: 106,
				height,
				characters,
				textAutoResize: "HEIGHT",
				segments,
			});
		const [mixed, empty, single] = spec(
			node({
				id: "root",
				name: "root",
				type: "FRAME",
				width: 400,
				height: 400,
				children: [
					text("mixed", "C. 我是学生", 19, [
						seg("C. ", "Afacad"),
						seg("我是学生", "Noto Sans SC", 3),
					]),
					text("empty", "", 17, [seg("", "Afacad")]),
					text("single", "Tổng thời gian", 19, [
						seg("Tổng thời gian", "Afacad"),
					]),
				],
			}),
		).tree.children;
		// Runs are spans: the box itself carries the font, or it inherits the app's 24px lines.
		expect(mixed.css).toMatchObject({
			"font-size": "15px",
			"line-height": "19px", // 15px × 125%, laid out by Figma at whole pixels
			// Mixed fonts on one line share a baseline and grow the line; pin it.
			height: "19px",
		});
		// An empty text keeps one line's height.
		expect(empty.css["min-height"]).toBe("17px");
		// One line in Figma stays one line, even if the browser draws the font wider.
		expect(single.css["white-space"]).toBe("pre");

		// A one-line text filling a shorter parent keeps its line height (Figma overflows).
		const [filled] = spec(
			node({
				id: "row",
				name: "row",
				type: "FRAME",
				layoutMode: "HORIZONTAL",
				width: 200,
				height: 16,
				children: [
					{
						...text("f", "Vận mẫu đơn", 19, [seg("Vận mẫu đơn", "Afacad")]),
						layoutSizingVertical: "FILL",
					},
				],
			}),
		).tree.children;
		expect(filled.css).toMatchObject({
			"align-self": "stretch",
			"min-height": "19px",
		});
	});

	it("applies Figma's Auto line height measured on one text to the page's others", () => {
		const seg = (characters: string, fontSize: number) => ({
			start: 0,
			end: characters.length,
			characters,
			fontName: { family: "Noto Sans SC", style: "Medium" },
			fontSize,
			fontWeight: 500,
			lineHeight: { unit: "AUTO" },
			fills: [{ type: "SOLID", visible: true, color: { r: 0, g: 0, b: 0 } }],
		});
		const t = (
			id: string,
			characters: string,
			size: number,
			height: number,
			auto: string,
		) =>
			node({
				id,
				name: id,
				type: "TEXT",
				width: 200,
				height,
				characters,
				textAutoResize: auto,
				segments: [seg(characters, size)],
			});
		const tree = spec(
			node({
				id: "root",
				name: "root",
				type: "FRAME",
				width: 400,
				height: 400,
				children: [
					t("label", "你好", 14, 17, "WIDTH_AND_HEIGHT"),
					t("para", "很长的一段话很长的一段话很长的一段话", 14, 68, "HEIGHT"),
					t("big", "很长的一段话很长的一段话", 28, 102, "HEIGHT"),
				],
			}),
		).tree;
		const [, para, big] = tree.children;
		// Same font and size as the measured label: Figma's 17px, not the browser's ~20px.
		expect(para.css["line-height"]).toBe("17px");
		// Another size of that font: scaled from the measured ratio (17 / 14 × 28 = 34).
		expect(big.css["line-height"]).toBe("34px");
	});

	it("warns where CSS cannot be exact", () => {
		const s = spec(
			node({
				id: "r",
				name: "r",
				type: "FRAME",
				cornerRadius: 16,
				cornerSmoothing: 0.6,
			}),
		);
		expect(s.warnings.map((w) => w.code)).toContain("CORNER_SMOOTHING");
	});
});

// ---------------------------------------------------------------------------
// Plugin script + end-to-end export
// ---------------------------------------------------------------------------

describe("page spec extraction script", () => {
	it("runs in a mock Figma and returns a parseable tree", async () => {
		const figma = makeFigma();
		const out = JSON.parse(
			(await runInMockFigma(
				buildExtractScript({
					includeHidden: false,
					detectIcons: true,
					respectExportSettings: false,
				}),
				figma,
			)) as string,
		);
		expect(out.file).toEqual({
			fileKey: "FILE123",
			fileName: "PLS Web",
			pageName: "Home",
		});
		expect(out.tree.children.map((c: { id: string }) => c.id)).toEqual([
			"1:10",
			"1:20",
			"1:30",
		]);
		const icon = out.tree.children[1];
		expect(icon.asset).toBeDefined();
		expect(icon.children).toBeUndefined();
		expect(out.assets.map((a: { kind: string }) => a.kind).sort()).toEqual([
			"image",
			"svg",
		]);
		expect(out.tree.children[2].meta).toEqual({ note: "hero photo" });
		expect(out.variables).toEqual([
			expect.objectContaining({
				name: "color/primary",
				value: { r: 1, g: 0, b: 0, a: 1 },
				aliasOf: ["red/500"],
				mode: "Light",
			}),
		]);
		expect(out.styles).toEqual([
			{ id: "S:h1", name: "Heading/H1", type: "TEXT", description: "" },
		]);
	});

	it("describes a rotated exported icon by its bounding box (rotation is baked into the file)", async () => {
		const figma = makeFigma();
		const icon = (await figma.getNodeByIdAsync("1:20")) as Record<
			string,
			unknown
		>;
		icon.absoluteTransform = [
			[-1, 0, 1724],
			[0, -1, 64],
		];
		icon.rotation = 180;
		icon.absoluteBoundingBox = { x: 1700, y: 40, width: 24, height: 24 };
		const out = JSON.parse(
			(await runInMockFigma(
				buildExtractScript({
					includeHidden: false,
					detectIcons: true,
					respectExportSettings: false,
				}),
				figma,
			)) as string,
		);
		const leaf = out.tree.children[1];
		expect(leaf.transform).toEqual([
			[1, 0, 1700],
			[0, 1, 40],
		]);
		expect(leaf.rotation).toBeUndefined();
		expect(leaf.renderBounds).toEqual({ x: 0, y: 0, width: 24, height: 24 });
	});

	it("reports a clear error when nothing is selected", async () => {
		const figma = { ...makeFigma(), currentPage: { selection: [] } };
		await expect(
			runInMockFigma(
				buildExtractScript({
					includeHidden: false,
					detectIcons: true,
					respectExportSettings: false,
				}),
				figma,
			),
		).rejects.toThrow(/Nothing is selected/);
	});
});

describe("exportPageSpec", () => {
	let dir: string;
	beforeEach(() => {
		dir = mkdtempSync(join(tmpdir(), "page-spec-"));
	});
	afterEach(() => rmSync(dir, { recursive: true, force: true }));

	it("writes spec, assets and the reference render", async () => {
		const connector = mockConnector(makeFigma());
		const { spec, written } = await exportPageSpec(connector, {
			...DEFAULT_ARGS,
			outputDir: dir,
			assetsPublicPath: "/figma/home",
		});

		expect(written[0]).toBe(join(dir, "page-spec.json"));
		const onDisk = JSON.parse(
			readFileSync(join(dir, "page-spec.json"), "utf-8"),
		);
		expect(onDisk.source).toMatchObject({
			fileKey: "FILE123",
			nodeId: "1:1",
			pageName: "Home",
		});
		expect(existsSync(join(dir, "reference@1x.png"))).toBe(true);
		expect(spec.reference).toMatchObject({
			file: "reference@1x.png",
			width: 1,
			height: 1,
		});
		// 1×1 render of a 1920px frame triggers the downscale warning.
		expect(spec.warnings.map((w) => w.code)).toContain("REFERENCE_DOWNSCALED");

		const image = spec.assets.find((a) => a.kind === "image");
		const svg = spec.assets.find((a) => a.kind === "svg");
		expect(image).toMatchObject({
			fetched: true,
			file: "img-abcdef012345.png",
			url: "/figma/home/img-abcdef012345.png",
			width: 800,
			height: 600,
		});
		expect(svg).toMatchObject({ fetched: true, file: "icon-arrow-1-20.svg" });
		expect(
			readFileSync(join(dir, "assets", "icon-arrow-1-20.svg"), "utf-8"),
		).toContain("<svg");

		const [title, icon, photo] = spec.tree.children;
		expect(title.role).toBe("text");
		expect(title.css).toMatchObject({
			"font-family": '"Be Vietnam Pro"',
			"font-size": "40px",
			"font-weight": "700",
			"line-height": "48px",
			"letter-spacing": "-0.02em",
			"text-transform": "uppercase",
			"white-space": "pre",
			// Figma rounds auto-width text boxes up; keep its box in the browser.
			"min-width": "300px",
			color: "#ff0000",
		});
		expect(title.tokens).toEqual({ fills: ["color/primary"] });
		expect(title.styles).toEqual({ text: "Heading/H1" });
		expect(icon).toMatchObject({
			role: "icon",
			component: { name: "Arrow", set: "Icon", properties: { Size: "24" } },
		});
		expect(photo.css.background).toBe(
			'url("/figma/home/img-abcdef012345.png") center / cover no-repeat',
		);
		expect(photo.css).toMatchObject({
			position: "absolute",
			left: "0",
			top: "200px",
			"border-radius": "12px",
		});
		expect(spec.tree.css["justify-content"]).toBe("space-between");
		expect(spec.tree.css.gap).toBeUndefined();
		expect(spec.fonts).toEqual([
			{ family: "Be Vietnam Pro", styles: ["Bold"], weights: [700] },
		]);
		expect(spec.tokens.variables[0]).toMatchObject({
			name: "color/primary",
			value: "#ff0000",
			cssVariable: "--primary",
		});
	});

	it("keeps the previous export's files when re-exporting an asset fails", async () => {
		const args = { ...DEFAULT_ARGS, outputDir: dir };
		await exportPageSpec(mockConnector(makeFigma()), args);

		const flaky = mockConnector(makeFigma());
		const ok = flaky.executeCodeViaUI.getMockImplementation()!;
		flaky.executeCodeViaUI.mockImplementation(async (code: string) =>
			/"kind":"(svg|image)"/.test(code)
				? { success: false, error: "Unable to establish connection" }
				: ok(code),
		);
		const { spec } = await exportPageSpec(flaky, args);

		const svg = spec.assets.find((a) => a.kind === "svg");
		const image = spec.assets.find((a) => a.kind === "image");
		expect(svg).toMatchObject({ fetched: true, file: "icon-arrow-1-20.svg" });
		expect(image).toMatchObject({ fetched: true, width: 800, height: 600 });
		const codes = spec.warnings.map((w) => w.code);
		expect(codes.filter((c) => c === "ASSET_EXPORT_STALE")).toHaveLength(2);
		expect(codes).not.toContain("ASSET_EXPORT_FAILED");
	}, 20000);

	it("gives up past its deadline and leaves the earlier spec in place", async () => {
		const args = { ...DEFAULT_ARGS, outputDir: dir };
		await exportPageSpec(mockConnector(makeFigma()), args);
		const before = readFileSync(join(dir, "page-spec.json"), "utf-8");
		await expect(
			exportPageSpec(mockConnector(makeFigma()), {
				...args,
				deadline: Date.now() - 1,
			}),
		).rejects.toBeInstanceOf(PageTimeoutError);
		expect(readFileSync(join(dir, "page-spec.json"), "utf-8")).toBe(before);
	});

	it("returns the spec without touching disk when no outputDir is given", async () => {
		const connector = mockConnector(makeFigma());
		const { spec, written } = await exportPageSpec(connector, DEFAULT_ARGS);
		expect(written).toEqual([]);
		expect(spec.assets.every((a) => !a.fetched)).toBe(true);
		// Only the extraction script ran — no asset or reference calls.
		expect(connector.executeCodeViaUI).toHaveBeenCalledTimes(1);
	});
});

describe("figma_export_page_spec tool", () => {
	it("registers and reports bridge failures as tool errors", async () => {
		const tools: Record<
			string,
			(
				args: Record<string, unknown>,
			) => Promise<{ content: { text: string }[]; isError?: boolean }>
		> = {};
		const server = {
			tool: jest.fn((name, _d, _s, handler) => {
				tools[name] = handler;
			}),
		};
		registerPageSpecTools(server as never, async () => ({
			executeCodeViaUI: async () => ({
				success: false,
				error: "Node not found: 9:9",
			}),
		}));
		const res = await tools.figma_export_page_spec({
			nodeId: "9:9",
			...DEFAULT_ARGS,
		});
		expect(res.isError).toBe(true);
		expect(JSON.parse(res.content[0].text).message).toContain(
			"Node not found: 9:9",
		);
	});

	it("unwraps nested EXECUTE_CODE results", () => {
		expect(
			unwrapScriptResult({ success: true, result: { result: '{"a":1}' } }),
		).toEqual({ a: 1 });
		expect(() => unwrapScriptResult({ success: false, error: "boom" })).toThrow(
			"boom",
		);
	});
});

describe("withRetry", () => {
	it("retries a failing bridge call and gives up after the last attempt", async () => {
		let calls = 0;
		const flaky = async () => {
			calls++;
			if (calls < 3)
				throw new Error(
					"Unable to establish connection to Figma after 10 seconds.",
				);
			return "ok";
		};
		await expect(withRetry(flaky, 3, 1)).resolves.toBe("ok");
		expect(calls).toBe(3);
		await expect(
			withRetry(async () => Promise.reject(new Error("down")), 2, 1),
		).rejects.toThrow("down");
	});
});
