"use client";

import { useState } from "react";

/** Copies the given text and says so for a moment. */
export const CopyButton = ({ text, label = "Copy" }: { text: string; label?: string }): React.JSX.Element => {
  const [done, setDone] = useState(false);
  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older browsers or blocked clipboard: fall back to a hidden textarea.
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  };
  return (
    <button type="button" onClick={copy} className="fv-btn">
      {done ? "Đã copy ✓" : label}
    </button>
  );
};
