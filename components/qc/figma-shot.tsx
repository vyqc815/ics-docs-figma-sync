"use client";

import { useEffect, useState } from "react";

/**
 * A screen's Figma image: the render saved at the last export (public/figma-ref, from the CDN, instant)
 * first; with `live`, the current render from Figma is fetched in the background and swapped in when it
 * arrives, so the page is fast and still shows edits made since the last export. A span (block) so it can
 * sit inside the paragraph Markdown puts an image in.
 */
export function FigmaShot({ code, liveBase = "", live = false, className = "" }: { code: string; liveBase?: string; live?: boolean; className?: string }): React.JSX.Element {
	const liveUrl = `${liveBase}/api/figma-frame/${code}.png`;
	const [src, setSrc] = useState(`/figma-ref/${code}.png`);
	const [fresh, setFresh] = useState(false);
	useEffect(() => {
		if (!live) return;
		const img = new Image();
		img.onload = () => {
			setSrc(liveUrl);
			setFresh(true);
		};
		img.src = liveUrl;
		return () => {
			img.onload = null;
		};
	}, [live, liveUrl]);
	return (
		<span className={`relative block overflow-hidden rounded-xl bg-(--hub-panel-3) ${className}`}>
			<span className="absolute inset-0 grid place-items-center text-xs text-(--hub-faint)">Đang tải ảnh Figma…</span>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={src}
				alt={code}
				loading="lazy"
				onError={() => src !== liveUrl && setSrc(liveUrl)}
				className="relative block h-full w-full object-cover object-top"
			/>
			{live && (
				<span className="absolute top-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-white">{fresh ? "Figma mới nhất" : "Bản export gần nhất"}</span>
			)}
		</span>
	);
}
