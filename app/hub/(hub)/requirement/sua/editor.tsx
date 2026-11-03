"use client";

import { useEffect, useState, useTransition } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Loader2, Rocket, Save } from "lucide-react";

import { deployNow, loadOriginal, saveOriginal } from "./actions";

/** QC edits the original requirement (left) with a live preview (right); saving commits it to GitHub. */
export function Editor({ file }: { file: string }): React.JSX.Element {
  const [text, setText] = useState("");
  const [sha, setSha] = useState("");
  const [saved, setSaved] = useState("");
  const [note, setNote] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, start] = useTransition();
  useEffect(() => {
    loadOriginal(file)
      .then((r) => {
        setText(r.text);
        setSaved(r.text);
        setSha(r.sha);
      })
      .catch((e: Error) => setMsg({ ok: false, text: e.message }))
      .finally(() => setLoading(false));
  }, [file]);
  const dirty = text !== saved;
  const act = (fn: () => Promise<string>) =>
    start(async () => {
      try {
        setMsg({ ok: true, text: await fn() });
      } catch (e) {
        setMsg({ ok: false, text: e instanceof Error ? e.message : String(e) });
      }
    });

  if (loading) return <p className="flex items-center gap-2 text-sm text-(--hub-muted)"><Loader2 className="size-4 animate-spin" /> Đang tải bản gốc…</p>;
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ghi chú thay đổi (tuỳ chọn)" className="min-w-60 flex-1 rounded-xl border border-(--hub-line) bg-(--hub-panel) px-4 py-2.5 text-sm outline-none focus:border-(--hub-accent)" />
        <button
          type="button"
          disabled={busy || !dirty || !sha}
          onClick={() =>
            act(async () => {
              const r = await saveOriginal(file, text, sha, note);
              setSha(r.sha);
              setSaved(text);
              setNote("");
              return "Đã lưu. Khoảng 1–2 phút nữa hệ thống chuyển template, gắn mã và báo Chat; bấm “Đưa lên Hub ngay” để không chờ lượt deploy.";
            })
          }
          className="flex items-center gap-1.5 rounded-xl bg-(--hub-accent-strong) px-4 py-2.5 text-sm font-medium text-white hover:bg-(--hub-accent) disabled:opacity-50"
        >
          {busy ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />} Lưu
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() =>
            act(async () => {
              await deployNow();
              return "Đã kích deploy: khoảng 15–20 phút nữa Hub có bản mới (đợi bước chuyển template xong trước khi bấm).";
            })
          }
          className="flex items-center gap-1.5 rounded-xl bg-(--hub-panel-2) px-4 py-2.5 text-sm hover:text-(--hub-accent) disabled:opacity-50"
        >
          <Rocket className="size-4" /> Đưa lên Hub ngay
        </button>
      </div>
      {msg && <p className={`text-sm ${msg.ok ? "text-(--hub-green)" : "text-(--hub-red)"}`}>{msg.text}</p>}
      {dirty && <p className="text-xs text-(--hub-amber)">Có thay đổi chưa lưu.</p>}
      <div className="grid gap-4 xl:grid-cols-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
          className="hub-scroll h-[72vh] w-full resize-none rounded-2xl border border-(--hub-line) bg-(--hub-panel) p-4 font-mono text-[13px] leading-6 outline-none focus:border-(--hub-accent)"
        />
        <div className="hub-scroll hub-md h-[72vh] overflow-y-auto rounded-2xl bg-(--hub-panel) p-5">
          <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={(u) => (/^(https?:|\/|#)/.test(u) ? u : "")}>
            {text}
          </ReactMarkdown>
        </div>
      </div>
      <p className="text-xs text-(--hub-faint)">
        Đây là bản gốc QC (qc/requirements/{file}). Ghi mã màn ở tiêu đề mục (ví dụ “### CD-KH-030200 — Danh sách bài học”) để trang đó tự có ảnh Figma
        thật, không cần chụp ảnh. Lưu xong hệ thống tự kiểm không mất nội dung; nếu thiếu sẽ giữ bản cũ và báo Chat.
      </p>
    </div>
  );
}
