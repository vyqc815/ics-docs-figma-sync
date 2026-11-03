#!/usr/bin/env node
/**
 * Phút GitHub Actions repo này đã chạy trong tháng (ước tính: thời lượng từng lượt chạy, làm tròn lên phút như
 * GitHub tính; một request mỗi 100 lượt). Gói miễn phí repo riêng tư: 2.000 phút/tháng cho cả tài khoản; vượt thì GitHub dừng workflow
 * tới tháng sau. Workflow gọi script này để giãn lịch khi gần chạm ngưỡng.
 *
 * Env: GITHUB_TOKEN, GITHUB_REPOSITORY (Actions có sẵn), LIMIT (mặc định 1800).
 * Ghi ra GITHUB_OUTPUT: minutes=<số>, tight=true|false.
 */
import { appendFileSync } from "node:fs";

const repo = process.env.GITHUB_REPOSITORY;
const limit = Number(process.env.LIMIT || 1800);
const headers = { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github+json" };
const now = new Date();
const since = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString().slice(0, 10);

async function get(path) {
	const res = await fetch(`https://api.github.com/repos/${repo}${path}`, { headers });
	if (!res.ok) throw new Error(`GitHub ${res.status} on ${path}`);
	return res.json();
}

let minutes = 0;
for (let page = 1; page < 50; page++) {
	const { workflow_runs: runs } = await get(`/actions/runs?created=>=${since}&per_page=100&page=${page}`);
	for (const run of runs) {
		// one request per page, not per job: a run's span, rounded up like GitHub bills each job
		if (run.status !== "completed" || !run.run_started_at) continue;
		minutes += Math.max(1, Math.ceil((new Date(run.updated_at) - new Date(run.run_started_at)) / 60000));
	}
	if (runs.length < 100) break;
}

const tight = minutes >= limit;
console.log(`Phút Actions tháng này (repo ${repo}): ~${minutes}/${limit}${tight ? " → giãn lịch" : ""}`);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `minutes=${minutes}\ntight=${tight}\n`);
