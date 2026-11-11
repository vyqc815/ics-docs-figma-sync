"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

import { withBase } from "@/lib/base-path";

const MINE = process.env.HUB_BUILD_ID ?? "";
const EVERY_MS = 2 * 60_000;

/**
 * "Web đã có phiên bản mới" with "Tải lại" and "Bỏ qua" (nothing is reloaded for the user: work in progress on the
 * old page stays until they choose): this page's code carries the build id it was built with, the server
 * answers with the one it runs; they differ once a deploy has gone out. Checked every 2 minutes and when the tab
 * comes back into view.
 */
export function NewVersion(): React.JSX.Element | null {
	const [fresh, setFresh] = useState(false);
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		if (!MINE) return;
		let stop = false;
		const check = async () => {
			if (stop || document.visibilityState !== "visible") return;
			try {
				const res = await fetch(withBase("/hub/phien-ban"), { cache: "no-store" });
				const { build } = (await res.json()) as { build?: string };
				if (build && build !== MINE) {
					setFresh(true);
					stop = true;
				}
			} catch {
				// server restarting during a deploy, signed out, offline: try again next time
			}
		};
		const timer = setInterval(check, EVERY_MS);
		const onShow = () => void check();
		document.addEventListener("visibilitychange", onShow);
		return () => {
			stop = true;
			clearInterval(timer);
			document.removeEventListener("visibilitychange", onShow);
		};
	}, []);

	if (!fresh || hidden) return null;
	return (
		<div role="status" className="fixed right-4 bottom-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-2xl border border-(--hub-accent)/40 bg-(--hub-panel-2) py-3 pr-3 pl-4 shadow-2xl shadow-black/50">
			<span className="size-2 shrink-0 rounded-full bg-(--hub-accent) shadow-[0_0_0_4px_var(--hub-accent-soft)]" />
			<p className="text-[13px]">
				<span className="font-medium">Web đã có phiên bản mới.</span> <span className="text-(--hub-muted)">Vui lòng tải lại trang.</span>
			</p>
			<button
				type="button"
				onClick={() => window.location.reload()}
				className="flex items-center gap-1.5 rounded-xl bg-(--hub-accent-strong) px-3 py-1.5 text-xs font-semibold text-white hover:bg-(--hub-accent)"
			>
				<RefreshCw className="size-3.5" /> Tải lại
			</button>
			<button type="button" onClick={() => setHidden(true)} className="rounded-xl px-3 py-1.5 text-xs text-(--hub-muted) hover:bg-(--hub-panel-3) hover:text-(--hub-text)">
				Bỏ qua
			</button>
		</div>
	);
}
