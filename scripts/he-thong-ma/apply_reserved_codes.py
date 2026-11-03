#!/usr/bin/env python3
"""Ghi mã màn dự kiến (docs/he-thong-ma/ma-du-kien.json) vào tiêu đề Trang của requirement chưa có frame Figma.

Khớp theo tên trang, không theo số thứ tự, nên requirement thêm hay bớt trang vẫn giữ đúng mã.
Trang đã có mã thì để nguyên.

  apply_reserved_codes.py [--work .]
"""
import argparse, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    w = ap.parse_args().work
    codes = json.load(open(f"{w}/docs/he-thong-ma/ma-du-kien.json"))["codes"]
    by_file = {}
    for code, info in codes.items():
        for page in info["pages"]:
            title = re.sub(r"^Trang \d+:\s*", "", page).strip()
            by_file.setdefault(info["requirement"], {})[title] = code
    done = 0
    for rel, titles in by_file.items():
        path = f"{w}/docs/requirements/{rel}"
        if not os.path.exists(path):
            print("không thấy", rel)
            continue
        text = open(path, encoding="utf-8").read()

        def rep(m):
            nonlocal done
            title = m[2].strip()
            if title in titles:
                done += 1
                return f"### Trang {m[1]}: {titles[title]} — {title}"
            return m[0]
        text = re.sub(r"^### Trang (\d+): (?![A-Z]{2,4}-)(.*)$", rep, text, flags=re.M)
        open(path, "w", encoding="utf-8").write(text)
    print(done, "trang đã ghi mã dự kiến")


if __name__ == "__main__":
    main()
