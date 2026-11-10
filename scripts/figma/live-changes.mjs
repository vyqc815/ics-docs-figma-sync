#!/usr/bin/env node
/**
 * Màn Figma đã đổi của các dự án thêm từ Hub (docs/du-an/projects.json, trừ ICS). figma-changes.yml chạy sau
 * phần của ICS, cùng giờ.
 *
 * Mỗi dự án: file Figma chưa sửa từ lần trước thì bỏ qua sau 1 request; có sửa thì đọc lại các màn có mã (mã ở
 * tên frame, hoặc mã đề xuất trong de-xuat-ma.json), so với mốc trong .figma/live/<slug>.json (cache của Actions),
 * ghi docs/du-an/<slug>/figma-doi.json (Hub dùng cho 🔵 / 🔴) và báo vào Google Chat, luồng figma-<MÃ DỰ ÁN>.
 * Cùng quy tắc với notify-changes.mjs: chỉ tính design sửa thật (bỏ đổi tên layer, lệch ≤ 1px, màn mới).
 *
 * Env: FIGMA_ACCESS_TOKEN (bắt buộc), GOOGLE_CHAT_WEBHOOK_URL (không có thì chỉ in ra), RUN_URL.
 * Exit: 0 = không đổi, 3 = có đổi (đã ghi, đã báo), 1 = lỗi.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { diffFrame, fetchSnapshot, restClient } from "./changes.mjs";

const LABEL = { added: "Thêm", removed: "Xoá", text: "Đổi chữ", component: "Đổi component", style: "Đổi màu/kiểu", layout: "Đổi vị trí, kích thước" };
const CODE = /^[A-Z]{2,4}(?:-[A-Z0-9]{1,4})+-\d{6}(?:-DK)?$/;
const CHAT_LIMIT = 3500;

const root = process.cwd();
const read = (p, fallback) => (existsSync(join(root, p)) ? JSON.parse(readFileSync(join(root, p), "utf-8")) : fallback);
const write = (p, data) => {
	mkdirSync(dirname(join(root, p)), { recursive: true });
	writeFileSync(join(root, p), `${JSON.stringify(data, null, 1)}\n`, "utf-8");
};

const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
	console.error("Thiếu FIGMA_ACCESS_TOKEN.");
	process.exit(1);
}
const get = restClient(token);

const projects = read("docs/du-an/projects.json", []).filter((p) => p.slug !== "ics" && !p.data?.sys && p.fileKey);
let changedAny = false;
let failed = false;

for (const p of projects) {
	try {
		if (await project(p)) changedAny = true;
	} catch (e) {
		failed = true;
		console.error(`! ${p.slug}: ${e.message}`);
	}
}
process.exit(changedAny ? 3 : failed ? 1 : 0);

/** One project; true when design really changed something. */
async function project(p) {
	const dir = `docs/du-an/${p.slug}`;
	const snapPath = `.figma/live/${p.slug}.json`;
	const screens = read(`${dir}/screens.json`, []);
	const proposed = new Map((read(`${dir}/de-xuat-ma.json`, { frames: [] }).frames ?? []).map((r) => [r.nodeId, r.maDeXuat]));
	// the same codes the hub uses (lib/qc/remote.ts): the frame's own, else the proposed one
	const seen = new Set();
	const pages = [];
	for (const s of screens) {
		const code = s.code ?? (CODE.test(proposed.get(s.id) ?? "") ? proposed.get(s.id) : null);
		if (!code || seen.has(code)) continue;
		seen.add(code);
		pages.push({ name: code, nodeId: s.id });
	}
	if (!pages.length) return false;

	const previous = existsSync(join(root, snapPath)) ? JSON.parse(readFileSync(join(root, snapPath), "utf-8")) : null;
	const file = await get(`/v1/files/${p.fileKey}?depth=1`);
	if (previous && previous.lastModified === file.lastModified) {
		console.log(`${p.slug}: Figma chưa sửa từ ${file.lastModified}.`);
		return false;
	}
	const { snapshot } = await fetchSnapshot(get, p.fileKey, pages);
	snapshot.lastModified = file.lastModified;
	mkdirSync(dirname(join(root, snapPath)), { recursive: true });
	writeFileSync(join(root, snapPath), `${JSON.stringify(snapshot)}\n`, "utf-8");
	if (!previous) {
		console.log(`${p.slug}: lần đầu, đã lưu mốc ${pages.length} màn.`);
		return false;
	}

	const changes = designChanges(previous, snapshot);
	if (!changes.length) {
		console.log(`${p.slug}: không có thay đổi thật của design.`);
		return false;
	}
	const log = read(`${dir}/figma-doi.json`, {});
	const at = new Date().toISOString();
	for (const c of changes) log[c.code] = [{ at, what: summary(c.changes) }, ...(log[c.code] ?? [])].slice(0, 10);
	write(`${dir}/figma-doi.json`, log);
	console.log(`${p.slug}: ${changes.length} màn đổi.`);
	// the log is written either way: a Chat failure must not lose it
	await postToChat(p.code || p.slug, chatText(p, changes)).catch((e) => console.error(`! ${p.slug}: ${e.message}`));
	return true;
}

function designChanges(before, after) {
	const byNode = new Map(Object.values(before.pages).map((f) => [f.nodeId, f]));
	const out = [];
	for (const [code, frame] of Object.entries(after.pages)) {
		const prev = byNode.get(frame.nodeId);
		if (!prev) continue; // newly watched screen, not an edit
		const real = diffFrame(prev, frame).filter(meaningful);
		if (real.length) out.push({ code, frameName: frame.frameName, changes: real });
	}
	return out;
}

function meaningful(c) {
	if (c.kind === "renamed") return false;
	if (c.kind === "layout" && c.before && c.after) {
		const a = c.before.split(",").map(Number);
		const b = c.after.split(",").map(Number);
		return a.some((v, i) => Math.abs(v - b[i]) > 1);
	}
	return true;
}

function summary(changes) {
	const counts = {};
	for (const c of changes) counts[c.kind] = (counts[c.kind] ?? 0) + 1;
	return Object.entries(counts).map(([k, n]) => `${LABEL[k] ?? k} ${n}`).join(", ");
}

function chatText(p, changed) {
	const q = (s) => `“${String(s ?? "").replace(/\s+/g, " ").slice(0, 50)}”`;
	const lines = [`*[${p.code || p.name}] Design vừa sửa ${changed.length} màn* (file “${p.fileName}”)`];
	for (const c of changed) {
		lines.push(`• *${c.frameName ?? c.code}*: ${summary(c.changes).replace(/, /g, " · ")}`);
		for (const t of c.changes.filter((x) => x.kind === "text").slice(0, 2)) lines.push(`    ${q(t.before)} → ${q(t.after)}`);
	}
	let text = lines.join("\n");
	if (text.length > CHAT_LIMIT) text = `${text.slice(0, CHAT_LIMIT)}\n…(còn nữa)`;
	return text + (process.env.RUN_URL ? `\n\nChi tiết: ${process.env.RUN_URL}` : "");
}

async function postToChat(project, text) {
	const url = process.env.GOOGLE_CHAT_WEBHOOK_URL;
	if (!url) {
		console.log(`--- Chưa có GOOGLE_CHAT_WEBHOOK_URL, tin nhắn sẽ là:\n${text}`);
		return;
	}
	const target = new URL(url);
	target.searchParams.set("threadKey", `figma-${project}`);
	target.searchParams.set("messageReplyOption", "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD");
	const res = await fetch(target, { method: "POST", headers: { "Content-Type": "application/json; charset=UTF-8" }, body: JSON.stringify({ text }) });
	if (!res.ok) throw new Error(`Google Chat trả ${res.status}`);
}
