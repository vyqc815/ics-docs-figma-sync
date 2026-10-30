"""Record a sync baseline: "docs and Figma match as of now", reviewed by <name>.

Usage:  python scripts/mark_synced.py docs/course_management/library/library.md --by vy-qc
(or the "Đánh dấu đã đồng bộ" button on the site, via scripts/sync_api.py)
Then commit sync/state.json so everyone sees the new baseline.
"""
import argparse
import sys
from datetime import datetime
from pathlib import Path

import sync_lib as lib


SyncError = lib.SyncError


def mark(doc, by):
    rel = Path(doc).as_posix().removeprefix("docs/")
    if not by.strip():
        raise SyncError("Thiếu tên người review")
    if not (lib.DOCS / rel).exists():
        raise SyncError(f"Không thấy file {doc}")
    meta = lib.doc_meta(rel)
    frames = lib.doc_frames(rel, meta, lib.load_index())
    if not frames:
        raise SyncError("Tài liệu chưa có mã màn hình hoặc link Figma nào")
    current = lib.current_frame_hashes(rel, frames, lib.read_json(lib.SNAPSHOT_FILE, {}))
    missing = [f["name"] for f in frames if f["node"] not in current]
    if missing:
        raise SyncError(f"Chưa có dữ liệu Figma cho {missing}, chạy scripts/figma_check.py trước")

    state = lib.read_json(lib.STATE_FILE, {})
    now = datetime.now().strftime("%d/%m/%Y %H:%M")
    entry = state.setdefault(rel, {"log": []})
    entry.update({"docs_hash": lib.docs_hash(rel), "figma_hash": lib.combined_hash(current),
                  "frames": current})
    entry["log"].append({"date": now, "by": by.strip()})
    lib.write_json(lib.STATE_FILE, state)
    return f"Đã đặt mốc đồng bộ cho {rel} ({now}, {by.strip()})"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("doc", help="đường dẫn file docs, vd docs/a/b.md")
    ap.add_argument("--by", required=True, help="tên người review")
    args = ap.parse_args()
    try:
        print(mark(args.doc, args.by))
    except SyncError as e:
        sys.exit(str(e))


if __name__ == "__main__":
    main()
