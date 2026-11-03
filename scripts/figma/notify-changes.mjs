#!/usr/bin/env node
/**
 * Báo màn Figma đã đổi vào Google Chat. GitHub Actions chạy định kỳ (figma-changes.yml).
 *
 * Đọc Figma qua REST, không cần Figma Desktop hay plugin. File chưa sửa từ lần trước
 * thì dừng sau một request; có sửa thì đọc lại các màn đã đăng ký, so với mốc,
 * ghi báo cáo và gửi tóm tắt vào Google Chat.
 *
 * Env: FIGMA_ACCESS_TOKEN (bắt buộc), GOOGLE_CHAT_WEBHOOK_URL (không có thì chỉ in ra),
 * FIGMA_PROJECT (tên dự án; mỗi dự án một luồng trong Space chung),
 * RUN_URL (link tới lượt chạy, kèm vào tin nhắn).
 * Exit: 0 = không đổi hoặc lần đầu, 3 = có đổi (đã báo), 1 = lỗi.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import {
	changesMarkdown,
	diffSnapshots,
	fetchSnapshot,
	restClient,
} from "./changes.mjs";

/** Google Chat cắt tin nhắn dài; phần còn lại nằm trong báo cáo đầy đủ. */
const CHAT_LIMIT = 3500;

const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "figma.pages.json"), "utf-8"));
const snapshotPath = join(root, config.specDir ?? ".figma/pages", "snapshot.json");
const reportPath = join(root, "figma-changes.md");
const project = process.env.FIGMA_PROJECT || config.fileKey;

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

const changes = diffSnapshots(previous, snapshot);
const report = changesMarkdown(changes, 12, pages.length);
writeFileSync(reportPath, report, "utf-8");
console.log(report);
for (const name of missing) console.log(`! ${name}: không thấy frame trên Figma`);
if (!changes.length) process.exit(0);

await postToChat(chatText(report, missing));
process.exit(3);

/** Markdown của báo cáo sang cú pháp Google Chat (*đậm*), cắt cho vừa một tin. */
function chatText(markdown, missingNames) {
	let text = markdown
		.replace(/^# (.*)$/gm, `*[${project}] $1*`)
		.replace(/^## (.*)$/gm, "*$1*")
		.replace(/\n{3,}/g, "\n\n")
		.trim();
	if (missingNames.length)
		text += `\n\n*Không thấy trên Figma:* ${missingNames.join(", ")}`;
	const link = process.env.RUN_URL ? `\n\nBáo cáo đầy đủ: ${process.env.RUN_URL}` : "";
	if (text.length > CHAT_LIMIT) text = `${text.slice(0, CHAT_LIMIT)}\n…(còn nữa)`;
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
