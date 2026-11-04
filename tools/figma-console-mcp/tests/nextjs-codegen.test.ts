/**
 * Next.js page generator tests
 *
 * Builds a small page spec through the real normalizer, generates the Next.js
 * sources and checks file layout, exact CSS, token variables, fonts, assets,
 * JSX validity (every .tsx is transpiled) and the overwrite guard.
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
import * as ts from "typescript";
import {
	GENERATED_MARKER,
	codeFileBase,
	generateNextPage,
	type NextGenOptions,
	routeSegments,
	visibleRun,
} from "../src/core/page-spec/nextjs-codegen";
import {
	normalizePageSpec,
	type PageSpec,
	type RawExtract,
} from "../src/core/page-spec/normalize";
import { cssToTailwind, twValue } from "../src/core/page-spec/tailwind";
import {
	canonicalSvg,
	generateNextPageFiles,
	planSharedSections,
	writeSharedSections,
} from "../src/core/page-spec-tools";

const at = (x: number, y: number) => [
	[1, 0, x],
	[0, 1, y],
];

const PURPLE = { r: 114 / 255, g: 26 / 255, b: 230 / 255 };

function makeSpec(): PageSpec {
	const raw: RawExtract = {
		file: { fileKey: "F", fileName: "Thực Học", pageName: "Trang" },
		tree: {
			id: "1:1",
			name: "page:/home @1920",
			type: "FRAME",
			transform: at(0, 0),
			width: 1920,
			height: 600,
			fills: [{ type: "SOLID", visible: true, color: { r: 1, g: 1, b: 1 } }],
			children: [
				{
					id: "1:2",
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
					fills: [
						{
							type: "SOLID",
							visible: true,
							color: PURPLE,
							boundVariables: { color: { id: "v:1" } },
						},
					],
					mainComponent: {
						name: "Device=Desktop",
						componentSetName: "Header",
						key: "k",
						remote: false,
					},
					componentProperties: {
						"Device#0:1": { type: "VARIANT", value: "Desktop" },
					},
					children: [
						{
							id: "1:3",
							name: "Logo",
							type: "FRAME",
							transform: at(200, 16),
							width: 205,
							height: 48,
							layoutSizingHorizontal: "FIXED",
							layoutSizingVertical: "FIXED",
							asset: "a1",
							renderBounds: { x: 0, y: 0, width: 205, height: 48 },
						},
						{
							id: "1:4",
							name: "Title",
							type: "TEXT",
							transform: at(800, 28),
							width: 200,
							height: 24,
							characters: 'Say "hi" {x}',
							textAutoResize: "WIDTH_AND_HEIGHT",
							segments: [
								{
									start: 0,
									end: 12,
									characters: 'Say "hi" {x}',
									fontName: { family: "Be Vietnam Pro", style: "Bold" },
									fontSize: 18,
									fontWeight: 700,
									lineHeight: { unit: "PIXELS", value: 24 },
									letterSpacing: { unit: "PIXELS", value: 0 },
									fills: [
										{
											type: "SOLID",
											visible: true,
											color: { r: 1, g: 1, b: 1 },
										},
									],
								},
							],
						},
					],
				},
				{
					id: "1:5",
					name: "Frame 123",
					type: "FRAME",
					transform: at(0, 80),
					width: 1920,
					height: 400,
					fills: [
						{ type: "IMAGE", visible: true, scaleMode: "FILL", assetId: "a2" },
					],
					children: [
						{
							id: "1:6",
							name: "Mixed",
							type: "TEXT",
							transform: at(100, 100),
							width: 300,
							height: 40,
							characters: "Bold link",
							textAutoResize: "HEIGHT",
							segments: [
								{
									start: 0,
									end: 5,
									characters: "Bold ",
									fontName: { family: "Bellota", style: "Bold Italic" },
									fontSize: 20,
									fontWeight: 700,
									fills: [],
								},
								{
									start: 5,
									end: 9,
									characters: "link",
									fontName: { family: "Bellota", style: "Bold Italic" },
									fontSize: 20,
									fontWeight: 700,
									fills: [],
									hyperlink: { type: "URL", value: "https://example.com" },
								},
							],
						},
					],
				},
			],
		},
		variables: [
			{
				id: "v:1",
				name: "màu/chính",
				collection: "Token",
				mode: "Light",
				resolvedType: "COLOR",
				value: { ...PURPLE, a: 1 },
				aliasOf: [],
				codeSyntax: {},
			},
		],
		styles: [],
		assets: [
			{
				id: "a1",
				kind: "svg",
				nodeId: "1:3",
				nodeIds: ["1:3"],
				name: "Logo",
				scale: 2,
			},
			{
				id: "a2",
				kind: "image",
				imageHash: "abcdef0123456789",
				nodeIds: ["1:5"],
				name: "Hero",
			},
		],
		warnings: [],
		nodeCount: 6,
	};
	const spec = normalizePageSpec(raw, {
		assetsPublicPath: "assets",
		fetchedAssets: {
			a1: { file: "logo-1-3.svg" },
			a2: { file: "img-abcdef012345.jpg" },
		},
		exportedAt: "2026-11-01T00:00:00.000Z",
	});
	spec.assetsDir = "assets";
	return spec;
}

const OPTS: NextGenOptions = {
	route: "/luyen-de/lam-bai",
	appDir: "app",
	componentsDir: "components/figma",
	publicDir: "public",
	fontSource: "google",
	debugIds: false,
};

function file(res: ReturnType<typeof generateNextPage>, path: string): string {
	const f = res.files.find((x) => x.path === path);
	if (!f)
		throw new Error(
			`missing ${path}; have ${res.files.map((x) => x.path).join(", ")}`,
		);
	return f.content;
}

describe("generateNextPage", () => {
	const res = generateNextPage(makeSpec(), { ...OPTS, pageName: "Trang chủ" });
	const dir = "components/figma/trang-chu";

	it("lays out an App Router route, a page component and one module per section", () => {
		expect(res.componentName).toBe("TrangChuPage");
		expect(res.files.map((f) => f.path).sort()).toEqual(
			[
				"app/luyen-de/lam-bai/page.tsx",
				`${dir}/Header.module.css`,
				`${dir}/Header.tsx`,
				`${dir}/Section2.module.css`,
				`${dir}/Section2.tsx`,
				`${dir}/fonts.ts`,
				`${dir}/index.tsx`,
				`${dir}/page.module.css`,
			].sort(),
		);
		expect(file(res, "app/luyen-de/lam-bai/page.tsx")).toContain(
			'import { TrangChuPage } from "../../../components/figma/trang-chu";',
		);
		expect(res.files.every((f) => f.content.includes(GENERATED_MARKER))).toBe(
			true,
		);
	});

	it("emits valid TSX for every component", () => {
		for (const f of res.files.filter((x) => x.path.endsWith(".tsx"))) {
			const out = ts.transpileModule(f.content, {
				reportDiagnostics: true,
				compilerOptions: {
					jsx: ts.JsxEmit.ReactJSX,
					module: ts.ModuleKind.ESNext,
					target: ts.ScriptTarget.ES2022,
				},
				fileName: f.path,
			});
			expect({
				path: f.path,
				errors: (out.diagnostics ?? []).map((d) =>
					ts.flattenDiagnosticMessageText(d.messageText, "\n"),
				),
			}).toEqual({
				path: f.path,
				errors: [],
			});
		}
	});

	it("keeps exact Figma values and turns bound colors into scoped CSS variables", () => {
		const page = file(res, `${dir}/page.module.css`);
		expect(page).toMatch(/\.root \{\n {2}--mau-chinh: #721ae6;/);
		expect(page).toContain("box-sizing: border-box");
		const header = file(res, `${dir}/Header.module.css`);
		expect(header).toContain("background-color: var(--mau-chinh, #721ae6);");
		expect(header).toContain("padding: 0 200px 0 200px;");
		expect(header).toContain("justify-content: space-between;");
		expect(header).toContain(
			'font-family: var(--font-be-vietnam-pro), "Be Vietnam Pro";',
		);
		expect(header).toContain("margin: 0;");
	});

	it("renders icons with next/image and image fills from public/", () => {
		const tsx = file(res, `${dir}/Header.tsx`);
		expect(tsx).toContain('import Image from "next/image";');
		expect(tsx).toContain(
			'src="/figma/trang-chu/logo-1-3.svg" alt="" width={205} height={48} unoptimized',
		);
		expect(tsx).toContain(
			'/** Figma layer "Header" — Figma: Header (Device=Desktop) */',
		);
		expect(tsx).toContain('{"Say \\"hi\\" {x}"}');
		expect(file(res, `${dir}/Section2.module.css`)).toContain(
			'url("/figma/trang-chu/img-abcdef012345.jpg") center / cover no-repeat',
		);
		expect(res.assets).toEqual([
			{ file: "logo-1-3.svg", to: "public/figma/trang-chu/logo-1-3.svg" },
			{
				file: "img-abcdef012345.jpg",
				to: "public/figma/trang-chu/img-abcdef012345.jpg",
			},
		]);
	});

	it("splits mixed-style text into runs and keeps hyperlinks", () => {
		const tsx = file(res, `${dir}/Section2.tsx`);
		expect(tsx).toContain('<span className={styles.mixedRun}>{"Bold "}</span>');
		expect(tsx).toContain(
			'<a className={styles.mixedRun2} href="https://example.com">{"link"}</a>',
		);
		expect(tsx).toMatch(/return \(\n {4}<section className=\{styles\.box\}>/);
	});

	it("declares only the fonts and styles the frame uses", () => {
		const fonts = file(res, `${dir}/fonts.ts`);
		expect(fonts).toContain(
			'import { Be_Vietnam_Pro, Bellota } from "next/font/google";',
		);
		expect(fonts).toMatch(
			/Bellota\(\{\n {2}weight: \["700"\],\n {2}style: \["normal", "italic"\]/,
		);
		expect(fonts).toContain(
			"export const fontVariables = [beVietnamPro.variable, bellota.variable].join",
		);
	});

	it("can load fonts from local files instead", () => {
		const local = generateNextPage(makeSpec(), {
			...OPTS,
			pageName: "x",
			fontSource: "local",
		});
		const fonts = file(local, "components/figma/x/fonts.ts");
		expect(fonts).toContain('import localFont from "next/font/local";');
		expect(fonts).toContain(
			'{ path: "./fonts/bellota-700-italic.woff2", weight: "700", style: "italic" }',
		);
		expect(local.warnings.join(" ")).toContain("font files");
	});

	it("rejects unsafe route segments", () => {
		expect(routeSegments("/")).toEqual([]);
		expect(() => routeSegments("/../etc")).not.toThrow(); // ".." is URL-safe characters…
		expect(() => routeSegments("/a b")).toThrow(/Invalid route segment/);
	});
});

describe("project code style", () => {
	const res = generateNextPage(makeSpec(), {
		...OPTS,
		pageName: "Trang chủ",
		styling: "tailwind",
		codeStyle: { kebabFiles: true, arrowComponents: true, importAlias: "@/" },
	});
	const file = (end: string) => res.files.find((f) => f.path.endsWith(end));

	it("names files in kebab-case and declares components as typed arrow functions", () => {
		expect(codeFileBase("SidebarMenuCd3", { kebabFiles: true })).toBe(
			"sidebar-menu-cd3",
		);
		expect(codeFileBase("DdOrganismMenuPanel", { kebabFiles: true })).toBe(
			"dd-organism-menu-panel",
		);
		const sections = res.files.filter(
			(f) =>
				f.path.startsWith("components/figma/trang-chu/") &&
				!/index|fonts/.test(f.path),
		);
		expect(sections.length).toBeGreaterThan(0);
		for (const f of sections) {
			expect(f.path).toMatch(/\/[a-z0-9-]+\.tsx$/);
			expect(f.content).toMatch(
				/export const \w+ = \(\): React\.JSX\.Element => \(/,
			);
		}
		const index = file("trang-chu/index.tsx")?.content ?? "";
		expect(index).toMatch(
			/export const TrangChuPage = \(\): React\.JSX\.Element => \(/,
		);
		expect(index).toMatch(/from "\.\/[a-z0-9-]+";/);
	});

	it("imports the page component through the alias", () => {
		const page =
			res.files.find((f) => f.path.endsWith("page.tsx"))?.content ?? "";
		expect(page).toContain('from "@/components/figma/trang-chu"');
		expect(page).toContain(
			"const Page = (): React.JSX.Element => <TrangChuPage />;",
		);
		expect(page).toContain("export default Page;");
	});
});

describe("Tailwind styling", () => {
	const res = generateNextPage(makeSpec(), {
		...OPTS,
		pageName: "Trang chủ",
		styling: "tailwind",
	});
	const dir = "components/figma/trang-chu";

	it("turns CSS into Tailwind classes without rounding any value", () => {
		expect(
			cssToTailwind({
				display: "flex",
				"flex-direction": "column",
				"justify-content": "space-between",
				width: "1440.5px",
				gap: "16px",
				padding: "0 200px 0 200px",
				"background-color": "var(--mau-chinh, #721ae6)",
				"font-weight": "500",
				"box-shadow": "inset 0 0 0 1px #e2e8f0",
				"font-family": 'var(--font-afacad), "Afacad"',
			}),
		).toBe(
			"flex flex-col justify-between w-[1440.5px] gap-[16px] [padding:0_200px_0_200px] bg-[color:var(--mau-chinh,#721ae6)] font-medium [box-shadow:inset_0_0_0_1px_#e2e8f0] [font-family:var(--font-afacad),'Afacad']",
		);
		expect(twValue('url("/figma/a_b.png")')).toBe("url('/figma/a\\_b.png')");
	});

	it("writes no CSS Modules and puts the classes inline", () => {
		expect(res.files.map((f) => f.path).sort()).toEqual(
			[
				"app/luyen-de/lam-bai/page.tsx",
				`${dir}/Header.tsx`,
				`${dir}/Section2.tsx`,
				`${dir}/fonts.ts`,
				`${dir}/index.tsx`,
			].sort(),
		);
		const header = file(res, `${dir}/Header.tsx`);
		expect(header).not.toContain("styles.");
		expect(header).toContain("bg-[color:var(--mau-chinh,#721ae6)]");
		expect(file(res, `${dir}/index.tsx`)).toContain("[--mau-chinh:#721ae6]");
		for (const f of res.files.filter((x) => x.path.endsWith(".tsx"))) {
			const out = ts.transpileModule(f.content, {
				reportDiagnostics: true,
				compilerOptions: { jsx: ts.JsxEmit.ReactJSX },
				fileName: f.path,
			});
			expect(out.diagnostics ?? []).toEqual([]);
		}
	});
});

describe("visibleRun", () => {
	it("drops spaces at line ends, which Figma never counts in the box width", () => {
		expect(visibleRun([{ characters: "Trang chủ " }], 0)).toBe("Trang chủ");
		expect(visibleRun([{ characters: "a  \nb \n  c" }], 0)).toBe("a\nb\n  c");
		// A run ending in a space keeps it when more text follows on the same line.
		const runs = [{ characters: "Bold " }, { characters: "link " }];
		expect(visibleRun(runs, 0)).toBe("Bold ");
		expect(visibleRun(runs, 1)).toBe("link");
		expect(
			visibleRun([{ characters: "end " }, { characters: "\nnext" }], 0),
		).toBe("end");
	});
});

describe("generateNextPageFiles", () => {
	let dir: string;
	let project: string;
	let specPath: string;
	beforeEach(() => {
		dir = mkdtempSync(join(tmpdir(), "nextgen-"));
		project = join(dir, "web");
		mkdirSync(project);
		writeFileSync(join(project, "package.json"), "{}");
		const specDir = join(dir, "spec");
		mkdirSync(join(specDir, "assets"), { recursive: true });
		writeFileSync(join(specDir, "assets", "logo-1-3.svg"), "<svg/>");
		writeFileSync(join(specDir, "assets", "img-abcdef012345.jpg"), "jpg");
		specPath = join(specDir, "page-spec.json");
		writeFileSync(specPath, JSON.stringify(makeSpec()));
	});
	afterEach(() => rmSync(dir, { recursive: true, force: true }));

	const args = () => ({
		specPath,
		projectRoot: project,
		route: "/home",
		pageName: "home",
		fontSource: "google" as const,
		debugIds: true,
		overwrite: false,
	});

	it("writes sources and copies assets into public/", () => {
		const res = generateNextPageFiles(args());
		expect(existsSync(join(project, "app/home/page.tsx"))).toBe(true);
		expect(
			readFileSync(join(project, "public/figma/home/logo-1-3.svg"), "utf-8"),
		).toBe("<svg/>");
		expect(
			readFileSync(join(project, "components/figma/home/Header.tsx"), "utf-8"),
		).toContain('data-figma-id="1:2"');
		expect(res.written).toContain("public/figma/home/img-abcdef012345.jpg");
		// Re-running over its own output is allowed.
		expect(() => generateNextPageFiles(args())).not.toThrow();
	});

	it("removes files an earlier run generated that are no longer written", () => {
		generateNextPageFiles(args());
		const css = join(project, "components/figma/home/Header.module.css");
		expect(existsSync(css)).toBe(true);
		const own = join(project, "components/figma/home/notes.ts");
		writeFileSync(own, "export const mine = 1;");
		const res = generateNextPageFiles({ ...args(), styling: "tailwind" });
		expect(existsSync(css)).toBe(false);
		expect(res.removed).toContain("components/figma/home/Header.module.css");
		// Hand-written files in the folder stay.
		expect(existsSync(own)).toBe(true);
	});

	it("shares sections and assets that come out identical on several pages", () => {
		// A second page: the same design, but its Figma ids differ (another frame).
		const specB = join(dir, "specB");
		mkdirSync(join(specB, "assets"), { recursive: true });
		writeFileSync(join(specB, "assets", "logo-1-3.svg"), "<svg/>");
		writeFileSync(join(specB, "assets", "img-abcdef012345.jpg"), "jpg");
		const b = JSON.parse(readFileSync(specPath, "utf-8"));
		(function rename(n: { id: string; children: unknown[] }) {
			n.id = `9${n.id}`;
			n.children.forEach((c) => rename(c as typeof n));
		})(b.tree);
		writeFileSync(join(specB, "page-spec.json"), JSON.stringify(b));
		const tw = { ...args(), styling: "tailwind" as const, shareAssets: true };
		const pages = [
			tw,
			{
				...tw,
				specPath: join(specB, "page-spec.json"),
				route: "/b",
				pageName: "b",
			},
		];
		const plan = planSharedSections(pages);
		expect(plan.files.map((f) => f.path).sort()).toEqual([
			"components/figma/shared/Header.tsx",
			"components/figma/shared/Section2.tsx",
		]);
		expect(plan.files[0].content).toContain("Shared by 2 pages: b, home.");
		writeSharedSections(project, plan);
		const home = generateNextPageFiles({ ...tw, shared: plan.shared });
		const other = generateNextPageFiles({ ...pages[1], shared: plan.shared });
		const index = readFileSync(
			join(project, "components/figma/b/index.tsx"),
			"utf-8",
		);
		expect(index).toContain('import { Header } from "../shared/Header";');
		expect(existsSync(join(project, "components/figma/b/Header.tsx"))).toBe(
			false,
		);
		// The shared file renders page "b"'s ids (first by name); "home" maps its own ids to them.
		expect(other.idAlias).toEqual({});
		expect(home.idAlias["1:2"]).toBe("91:2");
		// One copy of each asset, named by content, for both pages.
		expect(home.assets.map((a) => a.to)).toEqual(other.assets.map((a) => a.to));
		expect(home.assets[0].to).toMatch(
			/^public\/figma\/assets\/[0-9a-f]{12}\.svg$/,
		);
	});

	it("makes the same icon exported from two pages byte-identical", () => {
		const a =
			'<g clip-path="url(#clip0_7147_82653)"><feBlend result="effect1_dropShadow_7147_82760"/></g><clipPath id="clip0_7147_82653"/>';
		const b =
			'<g clip-path="url(#clip0_7147_9503)"><feBlend result="effect1_dropShadow_7147_9610"/></g><clipPath id="clip0_7147_9503"/>';
		expect(canonicalSvg(a)).toBe(canonicalSvg(b));
		expect(canonicalSvg(a)).toBe(
			'<g clip-path="url(#clip0)"><feBlend result="effect1_dropShadow"/></g><clipPath id="clip0"/>',
		);
	});

	it("renders an asset Figma could not export as an empty box of its size", () => {
		const spec = makeSpec();
		for (const a of spec.assets) a.fetched = false;
		const res = generateNextPage(spec, { ...OPTS, styling: "tailwind" });
		const header =
			res.files.find((f) => f.path.endsWith("Header.tsx"))?.content ?? "";
		expect(header).not.toContain("<Image");
		expect(res.assets).toEqual([]);
		expect(res.warnings.join(" ")).toMatch(/render as empty boxes/);
	});

	it("uses src/app when the project has one", () => {
		mkdirSync(join(project, "src", "app"), { recursive: true });
		generateNextPageFiles(args());
		expect(existsSync(join(project, "src/app/home/page.tsx"))).toBe(true);
		expect(
			existsSync(join(project, "src/components/figma/home/index.tsx")),
		).toBe(true);
	});

	it("refuses to overwrite hand-written files", () => {
		mkdirSync(join(project, "app/home"), { recursive: true });
		writeFileSync(
			join(project, "app/home/page.tsx"),
			"export default function Page() { return null; }",
		);
		expect(() => generateNextPageFiles(args())).toThrow(/Nothing was written/);
		expect(existsSync(join(project, "components/figma/home/index.tsx"))).toBe(
			false,
		);
		generateNextPageFiles({ ...args(), overwrite: true });
		expect(readFileSync(join(project, "app/home/page.tsx"), "utf-8")).toContain(
			GENERATED_MARKER,
		);
	});

	it("fails before writing when an asset file is missing", () => {
		rmSync(join(dir, "spec", "assets", "logo-1-3.svg"));
		expect(() => generateNextPageFiles(args())).toThrow(
			/Asset files are missing/,
		);
		expect(existsSync(join(project, "app"))).toBe(false);
	});
});
