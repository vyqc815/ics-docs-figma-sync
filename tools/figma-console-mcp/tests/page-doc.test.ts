/**
 * Per-page Markdown spec tests
 *
 * Checks that the document carries everything needed to rebuild a page —
 * header, sections, tokens, typography, the layout tree with exact numbers,
 * components, verbatim content, assets, notes, fidelity warnings and the
 * rebuild rules — in both languages, plus the file-writing tool.
 */

import {
	existsSync,
	mkdirSync,
	mkdtempSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { generatePageMarkdown } from "../src/core/page-spec/markdown";
import {
	normalizePageSpec,
	type PageSpec,
	type RawExtract,
} from "../src/core/page-spec/normalize";
import {
	generateNextPageFiles,
	writePageDoc,
} from "../src/core/page-spec-tools";

const at = (x: number, y: number) => [
	[1, 0, x],
	[0, 1, y],
];

function makeSpec(): PageSpec {
	const raw: RawExtract = {
		file: { fileKey: "FK", fileName: "Thực Học", pageName: "Trang" },
		tree: {
			id: "1:1",
			name: "page:/home @1920",
			type: "FRAME",
			transform: at(0, 0),
			width: 1920,
			height: 900,
			fills: [
				{
					type: "SOLID",
					visible: true,
					color: { r: 1, g: 1, b: 1 },
					boundVariables: { color: { id: "v:bg" } },
				},
			],
			children: [
				{
					id: "2:1",
					name: "Footer",
					type: "FRAME",
					transform: at(0, 700),
					width: 1920,
					height: 200,
					layoutMode: "VERTICAL",
					itemSpacing: 24,
					paddingTop: 40,
					paddingLeft: 200,
					paddingRight: 200,
					paddingBottom: 40,
					children: [
						{
							id: "2:2",
							name: "Copy",
							type: "TEXT",
							transform: at(200, 740),
							width: 300,
							height: 18,
							characters: "© 2026 | Thực Học",
							textAutoResize: "WIDTH_AND_HEIGHT",
							segments: [
								{
									start: 0,
									end: 17,
									characters: "© 2026 | Thực Học",
									fontName: { family: "Be Vietnam Pro", style: "Medium" },
									fontSize: 12,
									fontWeight: 500,
									lineHeight: { unit: "AUTO" },
									letterSpacing: { unit: "PIXELS", value: 0 },
									fills: [
										{
											type: "SOLID",
											visible: true,
											color: { r: 0, g: 0, b: 0 },
										},
									],
								},
							],
						},
					],
				},
				{
					id: "3:1",
					name: "Header",
					type: "INSTANCE",
					transform: at(0, 0),
					width: 1920,
					height: 80,
					layoutMode: "HORIZONTAL",
					primaryAxisAlignItems: "SPACE_BETWEEN",
					counterAxisAlignItems: "CENTER",
					paddingLeft: 200,
					paddingRight: 200,
					mainComponent: {
						name: "Device=Desktop",
						componentSetName: "Header",
						key: "k",
						remote: false,
					},
					componentProperties: {
						"Device#0:1": { type: "VARIANT", value: "Desktop" },
					},
					annotations: [
						{
							label: "Sticky on scroll",
							categoryId: null,
							properties: [{ type: "height" }],
						},
					],
					meta: { tag: "header" },
					strokes: [
						{ type: "SOLID", visible: true, color: { r: 0.9, g: 0.9, b: 0.9 } },
					],
					strokeWeight: 1,
					strokeAlign: "INSIDE",
					children: [
						{
							id: "3:2",
							name: "Logo",
							type: "FRAME",
							transform: at(200, 16),
							width: 205,
							height: 48,
							layoutMode: "HORIZONTAL",
							asset: "a1",
							renderBounds: { x: 0, y: 0, width: 205, height: 48 },
						},
						{
							id: "3:3",
							name: "Link",
							type: "TEXT",
							transform: at(900, 30),
							width: 80,
							height: 20,
							characters: "Blog",
							textAutoResize: "WIDTH_AND_HEIGHT",
							reactions: [
								{
									trigger: { type: "ON_CLICK" },
									actions: [{ type: "URL", url: "https://blog.example" }],
								},
							],
							segments: [
								{
									start: 0,
									end: 4,
									characters: "Blog",
									fontName: { family: "Be Vietnam Pro", style: "Bold" },
									fontSize: 18,
									fontWeight: 700,
									lineHeight: { unit: "PIXELS", value: 24 },
									letterSpacing: { unit: "PERCENT", value: -2 },
									fills: [
										{
											type: "SOLID",
											visible: true,
											color: { r: 0.447, g: 0.102, b: 0.902 },
											boundVariables: { color: { id: "v:main" } },
										},
									],
									hyperlink: { type: "URL", value: "https://blog.example" },
								},
							],
						},
					],
				},
			],
		},
		variables: [
			{
				id: "v:bg",
				name: "màu/nền",
				collection: "Token",
				mode: "Light",
				resolvedType: "COLOR",
				value: { r: 1, g: 1, b: 1, a: 1 },
				aliasOf: [],
				codeSyntax: {},
			},
			{
				id: "v:main",
				name: "màu/chính",
				collection: "Token",
				mode: "Light",
				resolvedType: "COLOR",
				value: { r: 0.447, g: 0.102, b: 0.902, a: 1 },
				aliasOf: ["tím/500"],
				codeSyntax: {},
			},
		],
		styles: [],
		assets: [
			{
				id: "a1",
				kind: "svg",
				nodeId: "3:2",
				nodeIds: ["3:2"],
				name: "Logo",
				scale: 2,
			},
		],
		warnings: [
			{
				nodeId: "9:9",
				nodeName: "Blob",
				code: "GRADIENT_DIAMOND",
				message: "approximated",
			},
		],
		nodeCount: 6,
	};
	const spec = normalizePageSpec(raw, {
		assetsPublicPath: "assets",
		fetchedAssets: { a1: { file: "logo-3-2.svg", width: 205, height: 48 } },
		exportedAt: "2026-11-01T00:00:00.000Z",
	});
	spec.assetsDir = "assets";
	return spec;
}

describe("generatePageMarkdown", () => {
	const md = generatePageMarkdown(makeSpec(), {
		language: "vi",
		route: "/home",
		assetUrl: (f) => `/figma/home/${f}`,
	});

	it("has a header and every section in order", () => {
		expect(md.startsWith("# /home @1920\n")).toBe(true);
		expect(md).toContain("> **Route:** `/home`");
		expect(md).toContain("> **Khung thiết kế:** 1920 × 900 px");
		const headings = md.split("\n").filter((l) => l.startsWith("## "));
		expect(headings).toEqual([
			"## 1. Tổng quan",
			"## 2. Theme — màu và token",
			"## 3. Typography",
			"## 4. Cấu trúc chi tiết",
			"## 5. Component đang dùng",
			"## 6. Nội dung (nguyên văn, theo thứ tự đọc)",
			"## 7. Ảnh và icon",
			"## 8. Tương tác, liên kết và ghi chú",
			"## 9. Lưu ý độ chính xác",
			"## 10. Hướng dẫn dựng lại (cho người và AI)",
		]);
	});

	it("lists sections top to bottom even when layers are ordered differently", () => {
		const overview = md.slice(md.indexOf("## 1."), md.indexOf("## 2."));
		expect(
			overview.indexOf("| Header (Header) | 0, 0 | 1920 × 80 |"),
		).toBeGreaterThan(-1);
		expect(overview.indexOf("Header (Header)")).toBeLessThan(
			overview.indexOf("| Footer |"),
		);
		expect(overview).toContain("Nền trang: `#ffffff` (màu/nền).");
	});

	it("documents tokens with CSS variables and aliases", () => {
		expect(md).toContain(
			"| `màu/chính` | `--mau-chinh` | `#721ae6` | tím/500 | Token / Light |",
		);
	});

	it("documents typography in one consistent notation", () => {
		expect(md).toContain(
			"| — | Be Vietnam Pro | 18 / 24px | 700 | -0.02em | #721ae6 (màu/chính) | 1 | “Blog” |",
		);
		expect(md).toContain(
			"| — | Be Vietnam Pro | 12 / 18px | 500 | 0 | #000000 | 1 |",
		);
	});

	it("writes the layout tree with exact sizes, positions, layout and styles", () => {
		expect(md).toContain(
			"- [instance] **Header** ⟨Header: Device=Desktop⟩ — 1920×80 · @ (0, 0) abs · row space-between pad 0 200 0 200 align CENTER · shadow inset 0 0 0 1px #e6e6e6 `3:1`",
		);
		// Exported icons show the file, not their inner layout.
		expect(md).toContain(
			"  - [icon] **Logo** — 205×48 · @ (200, 16) flow · file /figma/home/logo-3-2.svg `3:2`",
		);
		expect(md).toContain(
			"  - [chữ] “Blog” — 80×20 [HUG×HUG] · @ (900, 30) flow · Be Vietnam Pro 18/24px 700 #721ae6 (màu/chính) letter-spacing -0.02em link https://blog.example · no-wrap `3:3`",
		);
		expect(md).toContain(
			"- [khối] **Footer** — 1920×200 · @ (0, 700) abs · column gap 24 pad 40 200 40 200 `2:1`",
		);
	});

	it("lists the tree in Figma paint order and marks assets that overflow their box", () => {
		const tree = md.slice(md.indexOf("## 4."), md.indexOf("## 5."));
		// Footer is the bottom layer in Figma, so it comes first here (Header paints on top).
		expect(tree.indexOf("**Footer**")).toBeLessThan(tree.indexOf("**Header**"));
		const spec = makeSpec();
		const logo = spec.tree.children[1].children[0];
		logo.renderBounds = { x: -4, y: -2, width: 213, height: 56 };
		expect(generatePageMarkdown(spec, { language: "vi" })).toContain(
			"file assets/logo-3-2.svg covers (-4, -2) 213×56",
		);
	});

	it("starts the tree with the root frame and its ID", () => {
		const tree = md.slice(md.indexOf("## 4."), md.indexOf("## 5."));
		expect(tree).toContain(
			"- [trang] **page:/home @1920** — 1920×900 · bg #ffffff (màu/nền) `1:1`",
		);
		expect(tree).toContain("\n  - [khối] **Footer**");
		expect(md).toContain("gồm 6 layer (tính cả frame gốc)");
	});

	it("spells out line heights, text case, border style and empty boxes", () => {
		const raw: RawExtract = {
			file: { fileKey: "FK", fileName: "F", pageName: "P" },
			tree: {
				id: "1:1",
				name: "Page",
				type: "FRAME",
				transform: at(0, 0),
				width: 400,
				height: 300,
				children: [
					{
						id: "2:1",
						name: "Card",
						type: "FRAME",
						transform: at(0, 0),
						width: 200,
						height: 100,
						strokes: [
							{ type: "SOLID", visible: true, color: { r: 0, g: 0, b: 0 } },
						],
						strokeTopWeight: 2,
						strokeRightWeight: 0,
						strokeBottomWeight: 0,
						strokeLeftWeight: 4,
						strokeAlign: "INSIDE",
						strokesIncludedInLayout: true,
						children: [
							{
								id: "2:2",
								name: "Icon · Loa (trống)",
								type: "FRAME",
								transform: at(10, 20),
								width: 16,
								height: 16,
							},
							{
								id: "2:3",
								name: "Tab",
								type: "TEXT",
								transform: at(40, 20),
								width: 60,
								height: 19,
								characters: "ngữ pháp",
								textAutoResize: "WIDTH_AND_HEIGHT",
								segments: [
									{
										start: 0,
										end: 8,
										characters: "ngữ pháp",
										fontName: { family: "Afacad", style: "Medium" },
										fontSize: 15,
										fontWeight: 500,
										textCase: "TITLE",
										lineHeight: { unit: "PERCENT", value: 125 },
										letterSpacing: { unit: "PIXELS", value: 0 },
										fills: [
											{
												type: "SOLID",
												visible: true,
												color: { r: 0, g: 0, b: 0 },
											},
										],
									},
								],
							},
						],
					},
				],
			},
			variables: [],
			styles: [],
			assets: [],
			warnings: [],
			nodeCount: 4,
		};
		const spec = normalizePageSpec(raw, {
			assetsPublicPath: "assets",
			exportedAt: "2026-11-01T00:00:00.000Z",
		});
		const doc = generatePageMarkdown(spec, { language: "vi" });
		expect(doc).toContain(
			"**Card** — 200×100 · @ (0, 0) abs · border 2px 0 0 4px solid #000000 `2:1`",
		);
		expect(doc).toContain(
			"**Icon · Loa (trống)** — 16×16 · @ (10, 20) abs · trống `2:2`",
		);
		expect(doc).toContain(
			"“ngữ pháp” — 60×19 · @ (40, 20) abs · Afacad 15/19px 500 #000000 case title",
		);
		expect(doc).toContain(
			"| — | Afacad | 15 / 19px | 500 · case title |",
		);
		// CSS positions absolute children inside the border; Figma from the outer edge.
		const [icon] = spec.tree.children[0].children;
		expect(icon.css.left).toBe("6px");
		expect(icon.css.top).toBe("18px");
		expect(icon.box.x).toBe(10);
	});

	it("keeps content verbatim and escapes table pipes", () => {
		expect(md).toContain("**Footer**\n\n- © 2026 | Thực Học");
		expect(md).toContain("“© 2026 \\| Thực Học”");
	});

	it("lists components, assets, annotations, links, prototype, notes and warnings", () => {
		expect(md).toContain("| `Header` | Device=Desktop | 1 |");
		expect(md).toContain(
			"| `/figma/home/logo-3-2.svg` | svg | 205 × 48 | 3:2 |",
		);
		expect(md).toContain("- **Header** (`3:1`): Sticky on scroll — height");
		expect(md).toContain("- “Blog” → https://blog.example");
		expect(md).toContain(
			"- **Link** (`3:3`): ON_CLICK → URL https://blog.example",
		);
		expect(md).toContain('- **Header** (`3:1`): `{"tag":"header"}`');
		expect(md).toContain(
			"- `GRADIENT_DIAMOND` — **Blob** (`9:9`): approximated",
		);
		expect(md).toContain(
			"Giá trị chính xác đến từng node (kèm CSS dựng sẵn) nằm trong `page-spec.json`.",
		);
	});

	it("can be written in English", () => {
		const en = generatePageMarkdown(makeSpec(), { language: "en" });
		expect(en).toContain("## 10. Rebuild guide (for people and AI)");
		expect(en).toContain("- [text] “Blog”");
		expect(en).toContain("file assets/logo-3-2.svg");
	});
});

describe("page doc files", () => {
	let dir: string;
	let specPath: string;
	beforeEach(() => {
		dir = mkdtempSync(join(tmpdir(), "pagedoc-"));
		mkdirSync(join(dir, "spec", "assets"), { recursive: true });
		writeFileSync(join(dir, "spec", "assets", "logo-3-2.svg"), "<svg/>");
		specPath = join(dir, "spec", "page-spec.json");
		writeFileSync(specPath, JSON.stringify(makeSpec()));
	});
	afterEach(() => rmSync(dir, { recursive: true, force: true }));

	it("writes page.md next to the spec and refuses to replace hand-written files", () => {
		const res = writePageDoc({
			specPath,
			language: "vi",
			assetsPublicPath: "/figma/home/",
		});
		expect(res.outputPath).toBe(join(dir, "spec", "page.md"));
		const md = readFileSync(res.outputPath, "utf-8");
		expect(md).toContain("@generated by figma-console-mcp");
		expect(md).toContain("file /figma/home/logo-3-2.svg");
		expect(() => writePageDoc({ specPath, language: "en" })).not.toThrow();

		const handWritten = join(dir, "notes.md");
		writeFileSync(handWritten, "# my notes");
		expect(() =>
			writePageDoc({ specPath, language: "vi", outputPath: handWritten }),
		).toThrow(/Nothing was written/);
	});

	it("is written into docs/pages/<route>.md by the Next.js generator", () => {
		const project = join(dir, "web");
		mkdirSync(project);
		writeFileSync(join(project, "package.json"), "{}");
		generateNextPageFiles({
			specPath,
			projectRoot: project,
			route: "/luyen-de/lam-bai",
			pageName: "home",
			fontSource: "google",
			debugIds: false,
			overwrite: false,
		});
		const docPath = join(project, "docs/pages/luyen-de/lam-bai.md");
		expect(existsSync(docPath)).toBe(true);
		const md = readFileSync(docPath, "utf-8");
		expect(md).toContain("> **Route:** `/luyen-de/lam-bai`");
		expect(md).toContain("file /figma/home/logo-3-2.svg");
		expect(md).toContain(`\`${specPath}\``); // spec outside the project → absolute path

		generateNextPageFiles({
			specPath,
			projectRoot: project,
			route: "/",
			pageName: "root",
			fontSource: "google",
			debugIds: false,
			overwrite: false,
			writeDoc: false,
		});
		expect(existsSync(join(project, "docs/pages/index.md"))).toBe(false);
	});
});
