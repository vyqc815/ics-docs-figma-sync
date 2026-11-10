#!/usr/bin/env node
/**
 * Báo dev qua Google Chat khi màn họ đã đánh dấu Đang làm / Xong trên Hub đổi sau đó.
 *
 * Mốc của dev nằm trong docs/hub/tien-do.json (Hub ghi khi dev bấm, lib/qc/dev-moc.ts): thời điểm + hash requirement.
 *   Figma: docs/dong-bo/figma-doi.json có lần đổi sau mốc (figma-changes.yml chạy mỗi giờ, gọi không có --docs).
 *   --docs: so thêm hash requirement của màn với mốc (deploy.yml gọi sau khi deploy, lúc Hub đã hiện bản mới).
 * Hash tính giống hệt lib/qc/dev-moc.ts: sửa một bên thì sửa cả bên kia.
 * Mỗi thay đổi chỉ báo một lần (nUi / nRules / nFigma trong tien-do.json). Gửi tới webhook của từng dev và webhook
 * dự án (docs/hub/thong-bao.json, điền ở Hub › Tài khoản). Dev chưa có webhook thì chỉ thấy cảnh báo trên Hub.
 *
 * Env: GITHUB_TOKEN + GITHUB_REPOSITORY (đọc / ghi tien-do.json, thong-bao.json bản mới nhất qua GitHub API;
 * không có thì dùng file trong thư mục), HUB_URL (vd https://icstestsapi.pls.edu.vn/docs-figma, để gắn link màn).
 *   node scripts/figma/notify-devs.mjs [--docs]
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const withDocs = process.argv.includes("--docs");
const PROGRESS = "docs/hub/tien-do.json";
const NOTIFY = "docs/hub/thong-bao.json";
// the hub keeps its own data on this branch (lib/qc/github.ts), so its clicks do not fill main with commits
const DATA_BRANCH = process.env.HUB_DATA_BRANCH ?? "hub-data";
const CHAT_LIMIT = 3500;
const hub = (process.env.HUB_URL ?? "").replace(/\/$/, "");
const repo = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;

const local = (rel, fallback) => {
	const p = join(root, rel);
	return existsSync(p) ? JSON.parse(readFileSync(p, "utf-8")) : fallback;
};

async function gh(path, init = {}) {
	return fetch(`https://api.github.com/repos/${repo}${path}`, {
		...init,
		headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", ...(init.headers ?? {}) },
	});
}

/** Latest copy on main (other people write these files from the hub), else the checked-out one. */
async function readShared(rel, fallback) {
	if (!repo || !token) return { data: local(rel, fallback), sha: undefined };
	let res = await gh(`/contents/${rel}?ref=${DATA_BRANCH}`);
	if (res.status === 404) res = await gh(`/contents/${rel}?ref=main`); // not written on the data branch yet
	if (res.status === 404) return { data: fallback, sha: undefined };
	if (!res.ok) throw new Error(`GitHub ${res.status} khi đọc ${rel}`);
	const j = await res.json();
	return { data: JSON.parse(Buffer.from(j.content, "base64").toString("utf-8")), sha: j.sha };
}

// ------------------------------------------------------------------ same hashes as lib/qc/dev-moc.ts
const screenReq = local("scripts/figma/screen-requirements.json", {});
const sha = (parts) => (parts.length ? createHash("sha256").update(parts.join("\n\n")).digest("hex").slice(0, 16) : undefined);

function section(text, start, level) {
	const lines = text.split("\n");
	const from = lines.findIndex((l) => start.test(l));
	if (from < 0) return "";
	const end = new RegExp(`^#{1,${level}} `);
	const to = lines.findIndex((l, i) => i > from && end.test(l));
	return lines.slice(from, to < 0 ? undefined : to).join("\n").trim();
}

function screenHashes(code) {
	const pages = [...(screenReq[code] ?? [])].sort((a, b) => a.file.localeCompare(b.file));
	const ui = [];
	const rules = [];
	for (const p of pages) {
		const path = join(root, "docs", "requirements", p.file);
		if (!existsSync(path)) continue;
		const text = readFileSync(path, "utf-8");
		for (const n of [...p.pages].sort((a, b) => a - b)) ui.push(`${p.file}#${n}\n${section(text, new RegExp(`^### Trang ${n}:`), 3)}`);
		rules.push(`${p.file}\n${section(text, /^## 2\. /, 2)}\n${section(text, /^## 3\. /, 2)}`);
	}
	return { ui: sha(ui), rules: sha(rules) };
}

// ------------------------------------------------------------------ what is new for each developer
const { data: progress } = await readShared(PROGRESS, {});
const { data: notify } = await readShared(NOTIFY, {});
const log = local("docs/dong-bo/figma-doi.json", {});
// projects added from the hub log their own Figma changes (scripts/figma/live-changes.mjs); codes carry the project prefix
for (const p of local("docs/du-an/projects.json", []))
	if (p.slug !== "ics") for (const [code, rows] of Object.entries(local(`docs/du-an/${p.slug}/figma-doi.json`, {}))) log[code] = [...rows, ...(log[code] ?? [])];
const titles = local("docs/he-thong-ma/figma-frames.json", { frames: {} }).frames;
const time = (iso) => new Date(iso).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", dateStyle: "short", timeStyle: "short" });
const LABEL = { dang: "Đang làm", xong: "Xong" };

const byDev = new Map(); // name → [{ code, entry, lines, patch }]
for (const [code, row] of Object.entries(progress)) {
	const now = withDocs ? screenHashes(code) : {};
	for (const [name, e] of Object.entries(row)) {
		const since = e.nFigma && e.nFigma > e.at ? e.nFigma : e.at;
		const figma = [code, `${code}-DK`].flatMap((c) => (log[c] ?? []).filter((x) => x.at > since).map((x) => ({ code: c, ...x })));
		const ui = withDocs && e.ui && now.ui !== e.ui && now.ui !== e.nUi;
		const rules = withDocs && e.rules && now.rules !== e.rules && now.rules !== e.nRules;
		if (!figma.length && !ui && !rules) continue;
		const what = [];
		if (ui) what.push(`requirement Trang ${(screenReq[code] ?? []).flatMap((p) => p.pages).join(", ")} đổi`);
		if (rules) what.push("yêu cầu / testcase đổi");
		for (const f of figma.sort((a, b) => b.at.localeCompare(a.at)).slice(0, 3)) what.push(`Figma ${f.code === code ? "" : `${f.code} `}${f.what} (${time(f.at)})`);
		const patch = {
			...(ui ? { nUi: now.ui } : {}),
			...(rules ? { nRules: now.rules } : {}),
			...(figma.length ? { nFigma: figma.map((f) => f.at).sort().at(-1) } : {}),
		};
		byDev.set(name, [...(byDev.get(name) ?? []), { code, entry: e, what, patch }]);
	}
}
if (!byDev.size) {
	console.log("Không màn nào của dev đổi sau mốc.");
	process.exit(0);
}

const screenLine = (it) => {
	const label = hub ? `<${hub}/hub/man/${it.code}|${it.code}>` : it.code;
	const title = titles[it.code]?.title ? ` ${titles[it.code].title}` : "";
	return `• ${label}${title} · ${LABEL[it.entry.s] ?? it.entry.s} lúc ${time(it.entry.at)}\n   ${it.what.join(" · ")}`;
};
const clip = (text) => (text.length > CHAT_LIMIT ? `${text.slice(0, CHAT_LIMIT)}\n…(còn nữa, xem Hub › Tiến độ dev)` : text);

async function post(url, threadKey, text) {
	const target = new URL(url);
	target.searchParams.set("threadKey", threadKey);
	target.searchParams.set("messageReplyOption", "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD");
	const res = await fetch(target, { method: "POST", headers: { "Content-Type": "application/json; charset=UTF-8" }, body: JSON.stringify({ text: clip(text) }) });
	if (!res.ok) throw new Error(`Google Chat trả ${res.status}`);
}

const sent = []; // { code, name, at, patch } to save; a developer whose message failed is retried next run
for (const [name, items] of byDev) {
	const url = notify.devs?.[name];
	if (url) {
		const text = [
			`*[QC Hub] Màn bạn đã đánh dấu có cập nhật* (${items.length} màn)`,
			...items.map(screenLine),
			"Mở màn, xem thay đổi rồi bấm “Đã code theo bản mới”.",
		].join("\n");
		try {
			await post(url, `dev-cap-nhat-${name}`, text);
			console.log(`Đã báo ${name}: ${items.length} màn.`);
		} catch (e) {
			console.error(`Không báo được ${name}: ${e.message}`);
			continue;
		}
	} else console.log(`${name} chưa có webhook: ${items.length} màn chỉ hiện trên Hub.`);
	for (const it of items) sent.push({ code: it.code, name, at: it.entry.at, patch: it.patch });
}

if (notify.project) {
	const all = [...byDev].filter(([name]) => sent.some((s) => s.name === name));
	const lines = all.flatMap(([name, items]) => [`*${name}*`, ...items.map(screenLine)]);
	if (lines.length)
		await post(notify.project, "dev-cap-nhat", [`*[QC Hub] Màn đổi sau khi dev code* (${sent.length} màn)`, ...lines].join("\n")).then(
			() => console.log("Đã báo vào space dự án."),
			(e) => console.error(`Không báo được space dự án: ${e.message}`),
		);
}

// ------------------------------------------------------------------ remember what was sent
const apply = (data) => {
	for (const s of sent) {
		const e = data[s.code]?.[s.name];
		if (e && e.at === s.at) Object.assign(e, s.patch); // the developer re-marked meanwhile: their new mark wins
	}
	return data;
};
if (!sent.length) process.exit(0);
if (!repo || !token) {
	writeFileSync(join(root, PROGRESS), `${JSON.stringify(apply(local(PROGRESS, {})), null, 1)}\n`, "utf-8");
	process.exit(0);
}
for (let attempt = 0; attempt < 3; attempt += 1) {
	const { data } = await readShared(PROGRESS, {});
	if (!(await gh(`/git/ref/heads/${DATA_BRANCH}`)).ok) {
		const head = await (await gh(`/git/ref/heads/main`)).json();
		await gh(`/git/refs`, { method: "POST", body: JSON.stringify({ ref: `refs/heads/${DATA_BRANCH}`, sha: head.object.sha }) });
	}
	const cur = await gh(`/contents/${PROGRESS}?ref=${DATA_BRANCH}`);
	const fileSha = cur.ok ? (await cur.json()).sha : undefined;
	const body = { message: `Tiến độ: đã báo dev ${sent.length} màn có cập nhật`, content: Buffer.from(`${JSON.stringify(apply(data), null, 1)}\n`).toString("base64"), branch: DATA_BRANCH, ...(fileSha ? { sha: fileSha } : {}) };
	const res = await gh(`/contents/${PROGRESS}`, { method: "PUT", body: JSON.stringify(body) });
	if (res.ok) process.exit(0);
	if (res.status !== 409 && res.status !== 422) throw new Error(`GitHub ${res.status} khi lưu ${PROGRESS}`);
}
throw new Error(`Không lưu được ${PROGRESS} sau 3 lần (người khác đang ghi).`);
