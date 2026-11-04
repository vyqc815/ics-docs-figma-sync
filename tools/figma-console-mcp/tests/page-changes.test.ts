import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
	changesMarkdown,
	diffSnapshots,
	fetchSnapshot,
	restClient,
	summarizeFrame,
} from "../src/core/page-spec/changes";
import { runCli } from "../src/page-cli";

const box = (x: number, y: number, width: number, height: number) => ({
	x,
	y,
	width,
	height,
});
const frame = (text: string, extra: object[] = []) => ({
	id: "1:1",
	name: "CD-KH-060100 — BTVN",
	type: "FRAME",
	absoluteBoundingBox: box(100, 100, 1440, 900),
	fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
	children: [
		{
			id: "1:2",
			name: "Tiêu đề",
			type: "TEXT",
			characters: text,
			absoluteBoundingBox: box(110, 120, 200, 20),
		},
		{ id: "1:3", name: "Ẩn", type: "TEXT", characters: "x", visible: false },
		...extra,
	],
});

describe("page changes", () => {
	it("keeps positions relative to the frame and skips hidden layers", () => {
		const s = summarizeFrame(frame("A"));
		expect(s.layers["1:2"].box).toEqual([10, 20, 200, 20]);
		expect(s.layers["1:3"]).toBeUndefined();
	});

	it("does not report a frame that only moved on the canvas", () => {
		const moved = {
			...frame("A"),
			absoluteBoundingBox: box(500, 500, 1440, 900),
			children: [
				{
					...frame("A").children[0],
					absoluteBoundingBox: box(510, 520, 200, 20),
				},
			],
		};
		const a = { version: 1 as const, pages: { p: summarizeFrame(frame("A")) } };
		const b = { version: 1 as const, pages: { p: summarizeFrame(moved) } };
		expect(diffSnapshots(a, b)).toEqual([]);
	});

	it("reports text, added, removed and whole screens", () => {
		const extra = {
			id: "1:4",
			name: "Nút",
			type: "INSTANCE",
			componentId: "9:9",
			absoluteBoundingBox: box(100, 100, 10, 10),
		};
		const a = {
			version: 1 as const,
			pages: {
				p: summarizeFrame(frame("A", [extra])),
				gone: summarizeFrame(frame("A")),
			},
		};
		const b = {
			version: 1 as const,
			pages: {
				p: summarizeFrame(frame("B")),
				fresh: summarizeFrame(frame("A")),
			},
		};
		const diff = diffSnapshots(a, b);
		expect(diff.map((d) => [d.page, d.status]).sort()).toEqual([
			["fresh", "new"],
			["gone", "removed"],
			["p", "changed"],
		]);
		const kinds = diff.find((d) => d.page === "p")?.changes.map((c) => c.kind);
		expect(kinds?.sort()).toEqual(["removed", "text"]);
		const md = changesMarkdown(diff);
		expect(md).toContain("“A” → “B”");
		expect(md).toContain("Màn mới.");
	});

	it("waits and retries on a rate limit, then gives up with the status", async () => {
		const waits: number[] = [];
		const wait = async (ms: number) => {
			waits.push(ms);
		};
		const ok = new Response("{}", { status: 200 });
		const limited = new Response("", {
			status: 429,
			headers: { "retry-after": "7" },
		});
		const fetchFn = jest
			.fn()
			.mockResolvedValueOnce(limited)
			.mockResolvedValueOnce(ok);
		await restClient("t", fetchFn as never, wait)("/v1/x");
		expect(waits).toEqual([7000]);
		const denied = jest.fn().mockResolvedValue(new Response("", { status: 403 }));
		await expect(
			restClient("t", denied as never, wait)("/v1/x?secret=1"),
		).rejects.toThrow("Figma REST 403 on /v1/x");
	});

	it("reads in batches and lists frames Figma no longer has", async () => {
		const get = jest.fn(async (path: string) => ({
			version: "v1",
			nodes: path.includes("2%3A2")
				? { "2:2": null }
				: { "1:1": { document: frame("A") } },
		}));
		const { snapshot, missing } = await fetchSnapshot(
			get,
			"KEY",
			[
				{ name: "a", nodeId: "1:1" },
				{ name: "b", nodeId: "2:2" },
			],
			undefined,
			1,
		);
		expect(get).toHaveBeenCalledTimes(2);
		expect(Object.keys(snapshot.pages)).toEqual(["a"]);
		expect(missing).toEqual(["b"]);
	});

	describe("figma-page changes", () => {
		let dir: string;
		const logs: string[] = [];
		const io = { log: (l: string) => logs.push(l), error: (l: string) => logs.push(l) };
		beforeEach(() => {
			logs.length = 0;
			dir = mkdtempSync(join(tmpdir(), "figchanges-"));
			writeFileSync(join(dir, "package.json"), "{}");
			writeFileSync(
				join(dir, "figma.pages.json"),
				JSON.stringify({
					fileKey: "KEY",
					pages: [{ name: "p", nodeId: "1:1", route: "/p" }],
				}),
			);
		});
		afterEach(() => rmSync(dir, { recursive: true, force: true }));
		const deps = (text: string) =>
			({
				openBridge: jest.fn(),
				checkPage: jest.fn(),
				rest: async () => ({ nodes: { "1:1": { document: frame(text) } } }),
			}) as never;

		it("saves a first snapshot, then reports a change with exit code 3", async () => {
			expect(await runCli(["changes", "--save"], io, deps("A"), dir)).toBe(0);
			expect(await runCli(["changes"], io, deps("A"), dir)).toBe(0);
			const report = join(dir, "out/report.md");
			expect(
				await runCli(["changes", "--report", report], io, deps("B"), dir),
			).toBe(3);
			expect(readFileSync(report, "utf-8")).toContain("“A” → “B”");
		});

		it("needs a token when no client is given", async () => {
			const saved = process.env.FIGMA_ACCESS_TOKEN;
			delete process.env.FIGMA_ACCESS_TOKEN;
			const code = await runCli(
				["changes"],
				io,
				{ openBridge: jest.fn(), checkPage: jest.fn() } as never,
				dir,
			);
			if (saved) process.env.FIGMA_ACCESS_TOKEN = saved;
			expect(code).toBe(1);
			expect(logs.join("\n")).toContain("FIGMA_ACCESS_TOKEN");
		});
	});
});
