#!/usr/bin/env node
/**
 * Server build under a sub-path (NEXT_PUBLIC_BASE_PATH=/docs-figma): the generated demo screens point at their
 * images as "/figma/assets/…" (src and CSS url()), which Next does not prefix. Rewrite them in the build checkout
 * only (deploy.yml, job "server"); the committed code stays as generated. No-op when the variable is empty.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
if (!base) process.exit(0);

let files = 0;
let hits = 0;
const walk = (dir) => {
	for (const name of readdirSync(dir)) {
		const p = join(dir, name);
		if (statSync(p).isDirectory()) walk(p);
		else if (/\.(tsx?|css)$/.test(name)) {
			const text = readFileSync(p, "utf-8");
			const out = text.replace(/(["'`(])\/figma\/assets\//g, (_m, q) => {
				hits += 1;
				return `${q}${base}/figma/assets/`;
			});
			if (out !== text) {
				writeFileSync(p, out);
				files += 1;
			}
		}
	}
};
walk("components/figma");
console.log(`base-path ${base}: ${hits} đường dẫn ảnh trong ${files} file`);
