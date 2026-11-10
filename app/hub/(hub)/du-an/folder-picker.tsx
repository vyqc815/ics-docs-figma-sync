"use client";

import { useState } from "react";

import type { FolderInfo } from "./actions";

const NEW = "__new__";
const field = "rounded-xl border border-(--hub-line) bg-(--hub-panel-2) px-3 py-2.5 font-mono text-sm outline-none focus:border-(--hub-accent)";

/**
 * Picks the project's folder under projects/ by name: an existing one (with how many requirement files it holds),
 * or a new name, which the hub creates from the template (projects/_mau-du-an) on save.
 */
export function FolderPicker({
  folders,
  value,
  onChange,
  own,
}: {
  folders: FolderInfo[];
  value: string;
  onChange: (name: string) => void;
  /** The folder the project already uses: selectable although it is "used". */
  own?: string;
}): React.JSX.Element {
  const exists = folders.some((f) => f.name === value);
  const [forceNew, setForceNew] = useState(false);
  // a name not on main yet is a new folder
  const typing = forceNew || (!!value && !exists);
  const picked = folders.find((f) => f.name === value);
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-(--hub-muted)">Thư mục</span>
        <span className="font-mono text-sm text-(--hub-faint)">projects/</span>
        <select
          value={typing ? NEW : value}
          onChange={(e) => {
            const v = e.target.value;
            setForceNew(v === NEW);
            onChange(v === NEW ? "" : v);
          }}
          className={field}
        >
          <option value="" disabled>
            — chọn thư mục —
          </option>
          {folders.map((f) => (
            <option key={f.name} value={f.name} disabled={!!f.used && f.name !== own}>
              {f.name} · {f.files} file .md{f.used && f.name !== own ? ` · của “${f.used}”` : ""}
            </option>
          ))}
          <option value={NEW}>+ Thư mục mới…</option>
        </select>
        {typing && (
          <input
            value={value}
            onChange={(e) => onChange(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "-"))}
            placeholder="ten-du-an"
            className={`${field} w-56`}
          />
        )}
        <span className="font-mono text-sm text-(--hub-faint)">/requirements</span>
      </div>
      <p className="text-xs text-(--hub-faint)">
        {typing || !picked
          ? "Thư mục mới: Hub tạo projects/<tên>/requirements từ mẫu (projects/_mau-du-an) khi lưu."
          : `${picked.files} file requirement · ${picked.built ? "đã có hệ thống mã (_hub)" : "chưa chạy hệ thống mã (chạy sau khi lưu)"}`}
        {" "}QC viết file .md ở projects/&lt;tên&gt;/requirements, đẩy lên main; hệ thống chuyển template, gắn mã như ICS (projects/README.md).
      </p>
    </div>
  );
}
