#!/usr/bin/env python3
"""Thêm vào mỗi Trang có mã màn một ảnh trỏ tới bản Figma mới nhất của frame đó.

Ảnh dùng route `/api/figma-frame/<MÃ>.png` của demo (lấy thẳng từ Figma, cache 1 phút), nên
design sửa trên Figma thì requirement trên web QC tự hiện ảnh mới. Ảnh gốc QC đính kèm giữ nguyên.
Mã dự kiến chưa có frame cũng được thêm: route trả thẻ "Chưa có thiết kế", design vẽ xong thì tự thành ảnh thật.
Chạy lại nhiều lần không thêm trùng.

  add_live_images.py [--work .] [--base https://ics-figma-demo.vercel.app]
"""
import argparse, glob, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
CODE = r"[A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}(?:-DK)?"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    ap.add_argument("--base", default="https://ics-figma-demo.vercel.app")
    args = ap.parse_args()
    added = 0
    for path in glob.glob(f"{args.work}/docs/requirements/**/*.md", recursive=True):
        text = open(path, encoding="utf-8").read()

        def rep(m):
            nonlocal added
            head = m[0]
            codes = [c for c in re.findall(CODE, head.split(" — ")[0]) if not c.endswith("-DK")]
            lines = [f"![Figma mới nhất · {c}]({args.base}/api/figma-frame/{c}.png)" for c in codes]
            below = re.split(r"^#{1,3} ", text[m.end():], maxsplit=1, flags=re.M)[0]  # this page only
            lines = [l for l in lines if l not in below]
            added += len(lines)
            return head + ("\n\n" + "\n\n".join(lines) + "\n" if lines else "")
        new = re.sub(r"^### Trang \d+: .*$", rep, text, flags=re.M)
        if new != text:
            open(path, "w", encoding="utf-8").write(new)
    print(added, "ảnh Figma mới nhất đã thêm")


if __name__ == "__main__":
    main()
