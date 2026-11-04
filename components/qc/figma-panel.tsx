"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronsRight, Code2, ExternalLink, MonitorPlay, PanelRightOpen } from "lucide-react";

import { FigmaShot } from "@/components/qc/figma-shot";
import { BASE } from "@/lib/base-path";

export type PanelScreen = { code: string; title: string; figma?: string; demo?: string; source?: string };

const CODE = /\b[A-Z]{2,4}(?:-[A-Z]{1,5})+-\d{6}(?:-DK)?\b/g;
const WIDTH_KEY = "hub-figma-panel-w";

/** A folded section under the image; the page inside loads only when opened. */
function Fold({ icon, label, src, desktop = false }: { icon: React.ReactNode; label: string; src: string; desktop?: boolean }): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(0.4);
  const box = useRef<HTMLDivElement>(null);
  // the demo is laid out at desktop width (1440) and scaled down to the panel, so it looks like the design
  useEffect(() => {
    if (!open || !desktop || !box.current) return;
    const el = box.current;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / 1440));
    ro.observe(el);
    return () => ro.disconnect();
  }, [open, desktop]);
  return (
    <div className="rounded-xl bg-(--hub-panel-2)">
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-2 px-3 py-2.5 text-[13px] hover:text-(--hub-accent)">
        <ChevronRight className={`size-4 text-(--hub-faint) transition-transform ${open ? "rotate-90" : ""}`} />
        {icon}
        {label}
      </button>
      {open &&
        (desktop ? (
          <div ref={box} className="overflow-hidden rounded-b-xl border-t border-(--hub-line) bg-white" style={{ height: 900 * scale }}>
            <iframe src={src} title={label} style={{ width: 1440, height: 900, transform: `scale(${scale})`, transformOrigin: "0 0" }} />
          </div>
        ) : (
          <iframe src={src} title={label} className="h-[70vh] w-full rounded-b-xl border-t border-(--hub-line) bg-white" />
        ))}
    </div>
  );
}

/**
 * Right-hand Figma panel of a document, like the docs site of ics-docs-figma-sync: the screens the document
 * mentions, one at a time as a live Figma image (no Figma sign-in needed). Screen codes in the document text
 * become buttons that open their screen here. The panel is resized by dragging its left edge and can be folded.
 */
export function FigmaPanel({ screens, docId, liveBase = BASE }: { screens: PanelScreen[]; docId: string; liveBase?: string }): React.JSX.Element {
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
        <div className="hub-scroll min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
          <FigmaShot key={current.code} code={current.code} live liveBase={liveBase} />
          {current.demo && <Fold key={`d-${current.code}`} icon={<MonitorPlay className="size-4" />} label="Demo thật" src={current.demo} desktop />}
          {current.source && <Fold key={`c-${current.code}`} icon={<Code2 className="size-4" />} label="Code" src={current.source} />}
        </div>
        <div className="flex gap-2 border-t border-(--hub-line) p-3 text-[13px]">
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
