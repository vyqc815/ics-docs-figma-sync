#!/usr/bin/env node
/**
 * Copies each screen's Figma render (.figma/pages/<màn>/reference@1x.png, refreshed by every export) to
 * public/figma-ref/<MÃ>.png before `next build`, so the hub shows a screen at once from the CDN instead
 * of waiting for Figma to render it (seconds each, rate-limited when a grid asks for dozens).
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const src = ".figma/pages";
const dest = "public/figma-ref";
mkdirSync(dest, { recursive: true });
let n = 0;
for (const name of existsSync(src) ? readdirSync(src) : []) {
	const ref = join(src, name, "reference@1x.png");
	if (!existsSync(ref)) continue;
	copyFileSync(ref, join(dest, `${name.toUpperCase()}.png`));
	n++;
}
console.log(`${n} ảnh màn → ${dest}`);
