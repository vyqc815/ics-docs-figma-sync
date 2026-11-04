#!/usr/bin/env node
/**
 * Báo màn Figma đã đổi vào Google Chat. GitHub Actions chạy định kỳ (figma-changes.yml).
 *
 * Đọc Figma qua REST, không cần Figma Desktop hay plugin. File chưa sửa từ lần trước
 * thì dừng sau một request; có sửa thì đọc lại các màn đã đăng ký, so với mốc,
 * ghi báo cáo và gửi tóm tắt vào Google Chat.
 *
 * Chỉ báo khi design sửa thật: so theo id frame (đổi mã, đổi tên màn trong danh sách không tính),
 * bỏ qua màn mới đưa vào danh sách, đổi tên layer và lệch vị trí ≤ 1px. Không còn gì thì không gửi tin.
 *
 * Env: FIGMA_ACCESS_TOKEN (bắt buộc), GOOGLE_CHAT_WEBHOOK_URL (không có thì chỉ in ra),
 * FIGMA_PROJECT (tên dự án; mỗi dự án một luồng trong Space chung),
 * RUN_URL (link tới lượt chạy, kèm vào tin nhắn).
 * Dưới mỗi màn đổi ghi kèm trang requirement cần xem lại (scripts/figma/screen-requirements.json).
 * Exit: 0 = không đổi hoặc lần đầu, 3 = có đổi (đã báo), 1 = lỗi.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { changesMarkdown, diffFrame, fetchSnapshot, restClient } from "./changes.mjs";

/** Google Chat cắt tin nhắn dài; phần còn lại nằm trong báo cáo đầy đủ. */
const CHAT_LIMIT = 3500;
const LABEL = { added: "Thêm", removed: "Xoá", text: "Đổi chữ", component: "Đổi component", style: "Đổi màu/kiểu", layout: "Đổi vị trí, kích thước" };

const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "figma.pages.json"), "utf-8"));
const snapshotPath = join(root, config.specDir ?? ".figma/pages", "snapshot.json");
const reportPath = join(root, "figma-changes.md");
const project = process.env.FIGMA_PROJECT || config.fileKey;
/** Screen code → requirement pages about it (screen_requirements.py), so QC knows what to re-check. */
const reqPath = join(root, "scripts/figma/screen-requirements.json");
const requirements = existsSync(reqPath) ? JSON.parse(readFileSync(reqPath, "utf-8")) : {};

if (process.env.CHAT_TEST === "true") {
	await postToChat(
		`*[${project}] Thử kết nối*\nTin này gửi tay để kiểm tra đường báo thay đổi Figma, không phải báo đổi màn.`,
	);
	process.exit(0);
}

const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
	console.error("Thiếu FIGMA_ACCESS_TOKEN.");
	process.exit(1);
}
const get = restClient(token);

const previous = existsSync(snapshotPath)
	? JSON.parse(readFileSync(snapshotPath, "utf-8"))
	: null;

const file = await get(`/v1/files/${config.fileKey}?depth=1`);
if (previous && previous.lastModified === file.lastModified) {
	console.log(`Figma chưa sửa từ ${file.lastModified}.`);
	process.exit(0);
}

const pages = config.pages.map((p) => ({ name: p.name, nodeId: p.nodeId }));
const { snapshot, missing } = await fetchSnapshot(
	get,
	config.fileKey,
	pages,
	(done, total) => {
		if (done % 100 === 0 || done === total) console.log(`  đọc ${done}/${total}`);
	},
);
snapshot.lastModified = file.lastModified;
mkdirSync(dirname(snapshotPath), { recursive: true });
writeFileSync(snapshotPath, `${JSON.stringify(snapshot)}\n`, "utf-8");

if (!previous) {
	console.log(`Lần đầu: đã lưu mốc ${Object.keys(snapshot.pages).length} màn, chưa có gì để so.`);
	process.exit(0);
}

const changes = designChanges(previous, snapshot);
// a frame deleted on Figma is a design change only if it was being watched before
const watched = new Set(Object.values(previous.pages).map((f) => f.nodeId));
const deleted = missing.filter((n) => watched.has(config.pages.find((p) => p.name === n)?.nodeId));
const report = changesMarkdown(changes, 12, pages.length);
writeFileSync(reportPath, report, "utf-8");
console.log(report);
for (const name of missing) console.log(`! ${name}: không thấy frame trên Figma`);
if (!changes.length && !deleted.length) {
	console.log("Không có thay đổi thật của design, không gửi tin.");
	process.exit(0);
}

logChanges(changes);
await postToChat(chatText(changes, deleted));
process.exit(3);

/**
 * docs/dong-bo/figma-doi.json: when each screen last changed on Figma (10 latest per code). The hub compares it
 * with the "đã đồng bộ" mark of each requirement file to show 🔵 UI đổi / 🔴 cả hai đổi.
 */
function logChanges(changed) {
	const path = "docs/dong-bo/figma-doi.json";
	const log = existsSync(path) ? JSON.parse(readFileSync(path, "utf-8")) : {};
	const at = new Date().toISOString();
	for (const p of changed) {
		const counts = {};
		for (const c of p.changes) counts[c.kind] = (counts[c.kind] ?? 0) + 1;
		const what = Object.entries(counts).map(([k, n]) => `${LABEL[k] ?? k} ${n}`).join(", ");
		const code = p.page.toUpperCase();
		log[code] = [{ at, what }, ...(log[code] ?? [])].slice(0, 10);
	}
	mkdirSync(dirname(path), { recursive: true });
	writeFileSync(path, `${JSON.stringify(log, null, 1)}\n`, "utf-8");
}

/** Changes design made, matched by frame id; sync work on our side does not count. */
function designChanges(before, after) {
	const byNode = new Map(Object.values(before.pages).map((f) => [f.nodeId, f]));
	const out = [];
	for (const [page, frame] of Object.entries(after.pages)) {
		const prev = byNode.get(frame.nodeId);
		if (!prev) continue; // newly registered screen, not an edit
		const real = diffFrame(prev, frame).filter(meaningful);
		if (real.length) out.push({ page, frameName: frame.frameName, status: "changed", changes: real });
	}
	return out;
}

function meaningful(c) {
	if (c.kind === "renamed") return false; // layer names are not visible
	if (c.kind === "layout" && c.before && c.after) {
		const a = c.before.split(",").map(Number);
		const b = c.after.split(",").map(Number);
		return a.some((v, i) => Math.abs(v - b[i]) > 1); // rounding moves 1px
	}
	return true;
}

/** One line per changed screen with what changed, a few text edits quoted; the full list is in the report. */
function chatText(changed, deleted) {
	const q = (s) => `“${String(s ?? "").replace(/\s+/g, " ").slice(0, 50)}”`;
	const lines = [`*[${project}] Design vừa sửa ${changed.length} màn*`];
	for (const p of changed) {
		const counts = {};
		for (const c of p.changes) counts[c.kind] = (counts[c.kind] ?? 0) + 1;
		lines.push(`• *${p.frameName}*: ${Object.entries(counts).map(([k, n]) => `${LABEL[k] ?? k} ${n}`).join(" · ")}`);
		for (const c of p.changes.filter((c) => c.kind === "text").slice(0, 2))
			lines.push(`    ${q(c.before)} → ${q(c.after)}`);
		for (const r of (requirements[p.page.toUpperCase()] ?? []).slice(0, 2))
			lines.push(`    ↳ Xem lại: ${r.prefix ? `${r.prefix} · ` : ""}${r.title} · Trang ${r.pages.join(", ")}`);
	}
	if (deleted.length) lines.push("", `*Frame bị xoá trên Figma:* ${deleted.join(", ")}`);
	let text = lines.join("\n");
	if (text.length > CHAT_LIMIT) text = `${text.slice(0, CHAT_LIMIT)}\n…(còn nữa)`;
	const link = process.env.RUN_URL ? `\n\nChi tiết từng màn: ${process.env.RUN_URL}` : "";
	return text + link;
}

async function postToChat(text) {
	const url = process.env.GOOGLE_CHAT_WEBHOOK_URL;
	if (!url) {
		console.log("--- Chưa có GOOGLE_CHAT_WEBHOOK_URL, tin nhắn sẽ là:\n" + text);
		return;
	}
	// Cùng threadKey thì tin vào cùng một luồng; luồng chưa có thì Chat tạo mới.
	const target = new URL(url);
	target.searchParams.set("threadKey", `figma-${project}`);
	target.searchParams.set(
		"messageReplyOption",
		"REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD",
	);
	const res = await fetch(target, {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=UTF-8" },
		body: JSON.stringify({ text }),
	});
	if (!res.ok) throw new Error(`Google Chat trả ${res.status}`);
	console.log("Đã gửi vào Google Chat.");
}
