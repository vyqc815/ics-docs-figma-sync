"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronsRight, ExternalLink, MonitorSmartphone, PanelRightOpen } from "lucide-react";

import { FigmaShot } from "@/components/qc/figma-shot";

export type PanelScreen = { code: string; title: string; figma?: string };

const CODE = /\b[A-Z]{2,4}(?:-[A-Z]{1,5})+-\d{6}(?:-DK)?\b/g;
const WIDTH_KEY = "hub-figma-panel-w";

/**
 * Right-hand Figma panel of a document, like the docs site of ics-docs-figma-sync: the screens the document
 * mentions, one at a time as a live Figma image (no Figma sign-in needed). Screen codes in the document text
 * become buttons that open their screen here. The panel is resized by dragging its left edge and can be folded.
 */
export function FigmaPanel({ screens, docId, liveBase = "" }: { screens: PanelScreen[]; docId: string; liveBase?: string }): React.JSX.Element {
  const [code, setCode] = useState(screens[0]?.code ?? "");
  const [width, setWidth] = useState(46);
  const [folded, setFolded] = useState(false);
  const known = useRef(new Set(screens.map((s) => s.code)));

  useEffect(() => {
    try {
      const w = Number(localStorage.getItem(WIDTH_KEY));
      // the saved width exists only in the browser: read after hydration so the server render matches
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (w >= 25 && w <= 70) setWidth(w);
    } catch {}
  }, []);

  // screen codes in the document → buttons that show their screen in the panel
  useEffect(() => {
    const root = document.getElementById(docId);
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    while (walker.nextNode()) {
      const t = walker.currentNode as Text;
      if (CODE.test(t.data) && !t.parentElement?.closest("a, button, .hub-fcode")) nodes.push(t);
      CODE.lastIndex = 0;
    }
    for (const t of nodes) {
      const frag = document.createDocumentFragment();
      let last = 0;
      for (const m of t.data.matchAll(CODE)) {
        const base = m[0].replace(/-DK$/, "");
        if (!known.current.has(base)) continue;
        frag.append(t.data.slice(last, m.index));
        const b = document.createElement("button");
        b.type = "button";
        b.className = "hub-fcode";
        b.dataset.code = base;
        b.textContent = m[0];
        frag.append(b);
        last = (m.index ?? 0) + m[0].length;
      }
      if (last) {
        frag.append(t.data.slice(last));
        t.replaceWith(frag);
      }
    }
    const onClick = (e: MouseEvent) => {
      const b = (e.target as HTMLElement).closest<HTMLElement>(".hub-fcode");
      if (!b?.dataset.code) return;
      setCode(b.dataset.code);
      setFolded(false);
    };
    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, [docId]);

  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".hub-fcode").forEach((b) => b.classList.toggle("is-current", b.dataset.code === code));
  }, [code]);

  const drag = (e: React.PointerEvent) => {
    e.preventDefault();
    const box = (e.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
    const move = (ev: PointerEvent) => setWidth(Math.min(70, Math.max(25, ((box.right - ev.clientX) / box.width) * 100)));
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      setWidth((w) => {
        try {
          localStorage.setItem(WIDTH_KEY, String(Math.round(w)));
        } catch {}
        return w;
      });
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  if (!screens.length) return <></>;
  if (folded)
    return (
      <button
        type="button"
        onClick={() => setFolded(false)}
        className="sticky top-[80px] hidden h-fit items-center gap-1.5 rounded-xl bg-(--hub-panel) px-2 py-3 text-xs text-(--hub-muted) [writing-mode:vertical-rl] hover:text-(--hub-accent) xl:flex"
      >
        <PanelRightOpen className="size-4 rotate-90" /> Figma ({screens.length})
      </button>
    );
  const current = screens.find((s) => s.code === code) ?? screens[0];
  return (
    <>
      <div onPointerDown={drag} className="group hidden w-3.5 shrink-0 cursor-col-resize self-stretch xl:block" title="Kéo để đổi độ rộng">
        <div className="mx-auto h-full w-0.5 rounded-full bg-transparent group-hover:bg-(--hub-accent)" />
      </div>
      <aside style={{ width: `${width}%` }} className="sticky top-[80px] hidden h-[calc(100vh-104px)] min-w-[280px] shrink-0 flex-col overflow-hidden rounded-[20px] bg-(--hub-panel) xl:flex">
        <div className="flex items-center gap-2 border-b border-(--hub-line) p-3">
          <select
            value={current.code}
            onChange={(e) => setCode(e.target.value)}
            className="min-w-0 flex-1 rounded-xl border border-(--hub-line) bg-(--hub-panel-2) px-3 py-2 text-[13px] outline-none focus:border-(--hub-accent)"
          >
            {screens.map((s) => (
              <option key={s.code} value={s.code}>
                {s.code} — {s.title}
              </option>
            ))}
          </select>
          <button type="button" onClick={() => setFolded(true)} title="Thu gọn" className="rounded-lg p-2 text-(--hub-muted) hover:bg-(--hub-panel-2) hover:text-(--hub-text)">
            <ChevronsRight className="size-4" />
          </button>
        </div>
        <div className="hub-scroll min-h-0 flex-1 overflow-y-auto p-3">
          <FigmaShot key={current.code} code={current.code} live liveBase={liveBase} />
        </div>
        <div className="flex gap-2 border-t border-(--hub-line) p-3 text-[13px]">
          <Link href={`/hub/man/${current.code}`} className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-3 py-2 hover:text-(--hub-accent)">
            <MonitorSmartphone className="size-4" /> Màn, demo, code
          </Link>
          {current.figma && (
            <a href={current.figma} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-3 py-2 hover:text-(--hub-accent)">
              <ExternalLink className="size-4" /> Mở Figma
            </a>
          )}
        </div>
      </aside>
    </>
  );
}
