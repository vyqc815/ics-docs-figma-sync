#!/usr/bin/env node
/**
 * Page specs in git, compressed: .figma/pages/<màn>/page-spec.json (1.1GB with assets, not committed)
 * ↔ .figma/specs/<màn>.json.gz (~40MB, committed).
 *
 * figma-page build shares components across every coded screen, so a build on GitHub Actions needs every
 * spec, not just the edited ones. `pack` after an export (plugin or --rest), `unpack` before a build there.
 * Same content gives the same bytes (gzip header without a timestamp), so git only sees real changes.
 *
 *   node scripts/figma/specs-pack.mjs pack|unpack
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { gunzipSync, gzipSync } from "node:zlib";

const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "figma.pages.json"), "utf-8"));
const specDir = join(root, config.specDir ?? ".figma/pages");
const packDir = join(root, ".figma/specs");
const mode = process.argv[2];
let n = 0;

if (mode === "pack") {
	mkdirSync(packDir, { recursive: true });
	for (const name of readdirSync(specDir)) {
		const src = join(specDir, name, "page-spec.json");
		if (!existsSync(src)) continue;
		const data = readFileSync(src);
		const out = join(packDir, `${name}.json.gz`);
		if (existsSync(out) && gunzipSync(readFileSync(out)).equals(data)) continue;
		writeFileSync(out, gzipSync(data, { level: 9 }));
		n++;
	}
	console.log(`${n} spec đã nén vào .figma/specs`);
} else if (mode === "unpack") {
	for (const file of existsSync(packDir) ? readdirSync(packDir) : []) {
		const name = file.replace(/\.json\.gz$/, "");
		const dest = join(specDir, name, "page-spec.json");
		if (existsSync(dest)) continue;
		mkdirSync(join(specDir, name), { recursive: true });
		writeFileSync(dest, gunzipSync(readFileSync(join(packDir, file))));
		n++;
	}
	console.log(`${n} spec đã giải nén vào ${config.specDir ?? ".figma/pages"}`);
} else {
	console.error("Dùng: specs-pack.mjs pack|unpack");
	process.exit(2);
}
