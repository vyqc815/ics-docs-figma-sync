"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

/** "<" back to the previous hub page; opened from a link elsewhere (no history) it goes to `fallback`. */
export function BackButton({ fallback }: { fallback: string }): React.JSX.Element {
	const router = useRouter();
	return (
		<button
			type="button"
			aria-label="Quay lại"
			onClick={() => (window.history.length > 1 ? router.back() : router.push(fallback))}
			className="grid size-10 shrink-0 place-items-center rounded-xl bg-(--hub-panel) text-(--hub-muted) hover:bg-(--hub-panel-2) hover:text-(--hub-text)"
		>
			<ChevronLeft className="size-5" />
		</button>
	);
}
