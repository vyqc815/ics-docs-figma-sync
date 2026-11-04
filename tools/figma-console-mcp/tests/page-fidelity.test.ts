/**
 * Page fidelity check tests
 *
 * PNG codec, perceptual pixel diff with anti-aliasing tolerance, region
 * grouping and node attribution, box comparison, the verdict, and the tool
 * pipeline with a fake capture (no Chrome needed).
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
import { deflateSync } from "node:zlib";
import {
	attributeRegions,
	buildReport,
	compareBoxes,
	DEFAULT_THRESHOLDS,
	diffImages,
	findRegions,
	reportMarkdown,
	textDrivenNodes,
} from "../src/core/page-spec/fidelity";
import { findChrome } from "../src/core/page-spec/headless";
import type { PageSpec, SpecNode } from "../src/core/page-spec/normalize";
import {
	decodePng,
	encodePng,
	type RgbaImage,
} from "../src/core/page-spec/png";
import { checkPageFidelity } from "../src/core/page-spec-tools";

function solid(
	width: number,
	height: number,
	rgb: [number, number, number],
): RgbaImage {
	const data = new Uint8Array(width * height * 4);
	for (let i = 0; i < width * height; i++) data.set([...rgb, 255], i * 4);
	return { width, height, data };
}

function fill(
	img: RgbaImage,
	x: number,
	y: number,
	w: number,
	h: number,
	rgb: [number, number, number],
): RgbaImage {
	const data = new Uint8Array(img.data);
	for (let yy = y; yy < y + h; yy++)
		for (let xx = x; xx < x + w; xx++)
			data.set([...rgb, 255], (yy * img.width + xx) * 4);
	return { ...img, data };
}

function node(
	id: string,
	name: string,
	box: [number, number, number, number],
	children: SpecNode[] = [],
	role: SpecNode["role"] = "container",
): SpecNode {
	const [x, y, width, height] = box;
	return {
		id,
		name,
		type: "FRAME",
		role,
		box: { x, y, width, height },
		frameBox: { x, y, width, height },
		positioning: "absolute",
		css: {},
		children,
	};
}

function spec(): PageSpec {
	const tree = node(
		"0:1",
		"page",
		[0, 0, 100, 60],
		[
			node(
				"1:1",
				"Header",
				[0, 0, 100, 20],
				[node("1:2", "Logo", [4, 4, 12, 12], [], "icon")],
			),
			node("2:1", "Body", [0, 20, 100, 40]),
		],
	);
	tree.role = "page";
	return {
		specVersion: 1,
		source: {
			fileKey: "F",
			fileName: "F",
			pageName: "P",
			nodeId: "0:1",
			nodeName: "page",
			exportedAt: "2026-11-01T00:00:00.000Z",
		},
		frame: { width: 100, height: 60 },
		fonts: [],
		tokens: { variables: [], styles: [] },
		assets: [],
		reference: { file: "reference@1x.png", scale: 1, width: 100, height: 60 },
		stats: { nodes: 4, texts: 0, images: 0, icons: 1, instances: 0 },
		warnings: [],
		tree,
	};
}

describe("png codec", () => {
	it("round-trips RGBA images", () => {
		const img = fill(solid(7, 5, [10, 20, 30]), 2, 1, 3, 2, [200, 100, 50]);
		const back = decodePng(encodePng(img));
		expect(back.width).toBe(7);
		expect(back.height).toBe(5);
		expect(Buffer.from(back.data).equals(Buffer.from(img.data))).toBe(true);
	});

	it("decodes RGB rows with every filter type and palette images", () => {
		const crc = (b: Buffer) => {
			let c = 0xffffffff;
			for (const byte of b) {
				c ^= byte;
				for (let k = 0; k < 8; k++)
					c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
			}
			return (c ^ 0xffffffff) >>> 0;
		};
		const chunk = (type: string, body: Buffer) => {
			const head = Buffer.alloc(8);
			head.writeUInt32BE(body.length);
			head.write(type, 4, "latin1");
			const c = Buffer.alloc(4);
			c.writeUInt32BE(crc(Buffer.concat([head.subarray(4), body])));
			return Buffer.concat([head, body, c]);
		};
		const png = (
			w: number,
			h: number,
			depth: number,
			colorType: number,
			raw: Buffer,
			extra: Buffer[] = [],
		) => {
			const ihdr = Buffer.alloc(13);
			ihdr.writeUInt32BE(w, 0);
			ihdr.writeUInt32BE(h, 4);
			ihdr[8] = depth;
			ihdr[9] = colorType;
			return Buffer.concat([
				Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
				chunk("IHDR", ihdr),
				...extra,
				chunk("IDAT", deflateSync(raw)),
				chunk("IEND", Buffer.alloc(0)),
			]);
		};
		// 2×5 RGB, all pixels (10, 20, 30): row filters none, sub, up, average, paeth.
		const rows = [
			[0, 10, 20, 30, 10, 20, 30],
			[1, 10, 20, 30, 0, 0, 0],
			[2, 0, 0, 0, 0, 0, 0],
			[3, 5, 10, 15, 0, 0, 0],
			[4, 0, 0, 0, 0, 0, 0],
		];
		const rgb = decodePng(png(2, 5, 8, 2, Buffer.from(rows.flat())));
		for (let i = 0; i < 10; i++)
			expect([...rgb.data.subarray(i * 4, i * 4 + 4)]).toEqual([
				10, 20, 30, 255,
			]);
		// 4×1 palette at 2 bits/pixel with transparency on index 1.
		const pal = decodePng(
			png(4, 1, 2, 3, Buffer.from([0, 0b00011011]), [
				chunk("PLTE", Buffer.from([255, 0, 0, 0, 255, 0, 0, 0, 255, 9, 9, 9])),
				chunk("tRNS", Buffer.from([255, 0])),
			]),
		);
		expect([...pal.data]).toEqual([
			255, 0, 0, 255, 0, 255, 0, 0, 0, 0, 255, 255, 9, 9, 9, 255,
		]);
		expect(() => decodePng(Buffer.from("nope"))).toThrow(/Not a PNG/);
	});
});

describe("diffImages", () => {
	it("finds nothing between identical images", () => {
		const a = fill(solid(40, 30, [255, 255, 255]), 5, 5, 10, 10, [0, 0, 0]);
		expect(diffImages(a, a).mismatched).toBe(0);
	});

	it("tolerates a 1px anti-aliasing shift but flags real color changes", () => {
		const ref = fill(solid(40, 30, [255, 255, 255]), 5, 5, 10, 10, [0, 0, 0]);
		const shifted = fill(
			solid(40, 30, [255, 255, 255]),
			6,
			5,
			10,
			10,
			[0, 0, 0],
		);
		expect(diffImages(ref, shifted).mismatched).toBe(0);
		expect(
			diffImages(ref, shifted, { ...DEFAULT_THRESHOLDS, aaRadius: 0 })
				.mismatched,
		).toBeGreaterThan(0);
		const recolored = fill(ref, 20, 10, 8, 6, [255, 0, 0]);
		const d = diffImages(ref, recolored);
		expect(d.mismatched).toBe(48);
		expect(d.percent).toBeCloseTo(4, 5);
		expect([
			...d.diffImage.data.subarray((10 * 40 + 20) * 4, (10 * 40 + 20) * 4 + 4),
		]).toEqual([255, 0, 0, 255]);
	});

	it("accepts a hairline Figma blends over two rows where the browser snaps it to one", () => {
		// Figma: 1px #d1d1d1 line at y = 10.5 → two rows of the 50/50 blend. Browser: one full row.
		const bg: [number, number, number] = [57, 25, 109];
		const blend: [number, number, number] = [133, 117, 159];
		const figma = fill(
			fill(solid(40, 20, bg), 0, 10, 40, 1, blend),
			0,
			11,
			40,
			1,
			blend,
		);
		const browser = fill(solid(40, 20, bg), 0, 11, 40, 1, [209, 209, 209]);
		expect(diffImages(figma, browser).mismatched).toBe(0);
		expect(
			diffImages(figma, browser, { ...DEFAULT_THRESHOLDS, subpixel: false })
				.mismatched,
		).toBeGreaterThan(0);
		// A line that is missing altogether is still reported.
		expect(diffImages(figma, solid(40, 20, bg)).mismatched).toBeGreaterThan(0);
	});

	it("counts a size difference as mismatched area", () => {
		const d = diffImages(
			solid(10, 10, [255, 255, 255]),
			solid(10, 12, [255, 255, 255]),
		);
		expect(d.sizeMismatch).toBe(true);
		expect(d.mismatched).toBe(20);
	});
});

describe("regions and boxes", () => {
	it("groups mismatches into regions and blames the deepest node", () => {
		const ref = solid(100, 60, [255, 255, 255]);
		const d = diffImages(
			ref,
			fill(fill(ref, 5, 5, 8, 8, [255, 0, 0]), 60, 40, 20, 10, [0, 0, 255]),
		);
		const regions = attributeRegions(
			findRegions(d.mask, d.width, d.height),
			spec(),
		);
		expect(regions).toHaveLength(2);
		expect(regions[0]).toMatchObject({
			x: 56,
			y: 40,
			width: 24,
			height: 16,
			pixels: 200,
			node: { id: "2:1", name: "Body" },
		});
		expect(regions[1]).toMatchObject({
			pixels: 64,
			node: { id: "1:2", name: "Logo", role: "icon" },
		});
	});

	it("does not measure a blank text box", () => {
		const s = spec();
		s.tree.children[1].text = { characters: " " } as never;
		const r = compareBoxes(s, {
			"1:1": { x: 0, y: 0, width: 100, height: 20 },
			"1:2": { x: 4, y: 4, width: 12, height: 12 },
			"2:1": { x: 0, y: 20, width: 500, height: 40 },
		});
		expect(r.worst.map((d) => d.id)).not.toContain("2:1");
		expect(r.measured).toBe(2);
	});

	it("compares measured boxes with Figma boxes", () => {
		const r = compareBoxes(spec(), {
			"1:1": { x: 0, y: 0, width: 100, height: 20 },
			"1:2": { x: 4.4, y: 4, width: 14.5, height: 12 },
		});
		expect(r.missing).toEqual(["2:1"]);
		expect(r.measured).toBe(2);
		expect(r.worst[0]).toMatchObject({
			id: "1:2",
			delta: 2.5,
			dx: 0.4,
			dw: 2.5,
		});
		expect(r.buckets).toEqual({
			"≤0.5px": 1,
			"≤1px": 1,
			"≤2px": 1,
			"≤4px": 2,
			">4px": 0,
		});
	});

	it("scores pixels inside text boxes separately and flags a text box that is mostly wrong", () => {
		const s2 = spec();
		s2.tree.children[1].children = [
			node("2:2", "Title", [10, 30, 30, 10], [], "text"),
		];
		s2.tree.children[1].children[0].text = {
			characters: "x",
			align: "LEFT",
			verticalAlign: "TOP",
			autoResize: "WIDTH_AND_HEIGHT",
			paragraphSpacing: 0,
			paragraphIndent: 0,
			segments: [],
		};
		const ref = solid(100, 60, [255, 255, 255]);
		const r = buildReport(
			s2,
			diffImages(ref, fill(ref, 10, 30, 30, 10, [0, 0, 0])),
			null,
		);
		expect(r.pixels.shapePercent).toBe(0);
		expect(r.pixels.textPercent).toBeGreaterThan(70);
		expect(r.textNodes[0]).toMatchObject({ id: "2:2", name: "Title" });
		expect(r.regions).toEqual([]);
		expect(r.failures).toEqual([
			"1 text boxes differ in more than 35% of their pixels (check font, weight, color).",
		]);
	});

	it("gives text-driven elements the text limit and keeps the strict limit elsewhere", () => {
		// Row: [hug card with a title] [link pushed along by the card] [fixed icon box]; separate absolute badge.
		const title = node("3:2", "Title", [0, 0, 80, 20], [], "text");
		title.text = {
			characters: "x",
			align: "LEFT",
			verticalAlign: "TOP",
			autoResize: "WIDTH_AND_HEIGHT",
			paragraphSpacing: 0,
			paragraphIndent: 0,
			segments: [],
		};
		const card = node("3:1", "Card", [0, 0, 80, 20], [title]);
		card.sizing = { horizontal: "HUG", vertical: "HUG" };
		card.positioning = "flow";
		const link = node(
			"3:3",
			"Link",
			[90, 0, 30, 20],
			[node("3:4", "Arrow", [90, 0, 8, 8], [], "icon")],
		);
		link.positioning = "flow";
		const row = node("3:0", "Row", [0, 0, 100, 20], [card, link]);
		row.layout = {
			mode: "row",
			wrap: false,
			gap: 10,
			padding: { top: 0, right: 0, bottom: 0, left: 0 },
			justify: "MIN",
			align: "MIN",
		};
		const badge = node("4:1", "Badge", [0, 30, 10, 10], [], "shape");
		const s2 = spec();
		s2.tree.children = [row, badge];
		expect([...textDrivenNodes(s2)].sort()).toEqual([
			"3:1",
			"3:2",
			"3:3",
			"3:4",
		]);

		const boxes = {
			"3:0": { x: 0, y: 0, width: 100, height: 20 },
			"3:1": { x: 0, y: 0, width: 81.8, height: 20 },
			"3:2": { x: 0, y: 0, width: 81.8, height: 20 },
			"3:3": { x: 91.8, y: 0, width: 30, height: 20 },
			"3:4": { x: 91.8, y: 0, width: 8, height: 8 },
			"4:1": { x: 1.5, y: 30, width: 10, height: 10 },
		};
		const r = compareBoxes(s2, boxes);
		expect(r.over.map((d) => [d.id, d.limit])).toEqual([["4:1", 1]]);
		expect(r.worst.find((d) => d.id === "3:3")).toMatchObject({
			delta: 1.8,
			limit: 2.5,
			textDriven: true,
		});
		expect(
			compareBoxes(s2, {
				...boxes,
				"4:1": { x: 0, y: 30, width: 10, height: 10 },
			}).over,
		).toEqual([]);
	});

	it("passes only when pixels and boxes are within thresholds", () => {
		const ref = solid(100, 60, [255, 255, 255]);
		const boxes = {
			"1:1": { x: 0, y: 0, width: 100, height: 20 },
			"1:2": { x: 4, y: 4, width: 12, height: 12 },
			"2:1": { x: 0, y: 20, width: 100, height: 40 },
		};
		expect(buildReport(spec(), diffImages(ref, ref), boxes).pass).toBe(true);
		const bad = buildReport(
			spec(),
			diffImages(ref, fill(ref, 0, 0, 20, 20, [0, 0, 0])),
			{ ...boxes, "1:2": { x: 7, y: 4, width: 12, height: 12 } },
		);
		expect(bad.pass).toBe(false);
		expect(bad.failures).toEqual([
			"6.667% of non-text pixels differ (limit 0.5%).",
			"1 elements are off by more than their limit (1px, 2.5px for text-driven; worst 3px).",
		]);
		const md = reportMarkdown(bad, "page", "http://x");
		expect(md).toContain("- Verdict: **FAIL**");
		expect(md).toContain("| Logo (`1:2`) | icon | 3 ✗ | 1 | 3 | 0 | 0 | 0 |");
	});
});

describe("checkPageFidelity", () => {
	let dir: string;
	beforeEach(() => {
		dir = mkdtempSync(join(tmpdir(), "fidelity-"));
		mkdirSync(join(dir, "spec"));
		writeFileSync(join(dir, "spec", "page-spec.json"), JSON.stringify(spec()));
		writeFileSync(
			join(dir, "spec", "reference@1x.png"),
			encodePng(solid(100, 60, [255, 255, 255])),
		);
	});
	afterEach(() => rmSync(dir, { recursive: true, force: true }));

	it("captures at the design size, compares, and writes the report", async () => {
		const capture = jest.fn(async () => ({
			png: encodePng(
				fill(solid(100, 60, [255, 255, 255]), 60, 40, 20, 10, [0, 0, 255]),
			),
			boxes: {
				"1:1": { x: 0, y: 0, width: 100, height: 20 },
				"1:2": { x: 4, y: 4, width: 12, height: 12 },
				"2:1": { x: 0, y: 20, width: 100, height: 40 },
			},
			rootFound: true,
			chromePath: "/fake/chrome",
			consoleErrors: [],
		}));
		const res = await checkPageFidelity(
			{
				specPath: join(dir, "spec", "page-spec.json"),
				url: "http://localhost:3000/x",
				maxPixelDiffPercent: 5,
			},
			capture,
		);
		expect(capture).toHaveBeenCalledWith(
			expect.objectContaining({
				url: "http://localhost:3000/x",
				width: 100,
				height: 60,
				scale: 1,
				rootId: "0:1",
			}),
		);
		expect(res.pass).toBe(true);
		expect(res.pixels.percent).toBeCloseTo(3.333, 3);
		expect(res.regions[0].node).toMatchObject({ name: "Body" });
		for (const f of ["actual.png", "diff.png", "report.json", "report.md"])
			expect(existsSync(join(dir, "spec", "fidelity", f))).toBe(true);
		expect(
			decodePng(readFileSync(join(dir, "spec", "fidelity", "diff.png"))).width,
		).toBe(100);
	});

	it("explains a missing reference render", async () => {
		const s = spec();
		delete s.reference;
		writeFileSync(join(dir, "spec", "page-spec.json"), JSON.stringify(s));
		await expect(
			checkPageFidelity(
				{ specPath: join(dir, "spec", "page-spec.json"), url: "http://x" },
				jest.fn(),
			),
		).rejects.toThrow(/no reference render/);
	});

	it("honours an explicit Chrome path and reports when it does not exist", () => {
		expect(findChrome("/definitely/not/here")).toBeNull();
	});
});
