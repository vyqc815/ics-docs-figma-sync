#!/usr/bin/env python3
"""Sinh `lib/figma-sections.generated.json`: nhóm mã (CD-KH-03, ADM-LOP-02 …) → Section Figma đang chứa frame của nhóm.

Route `/api/figma-frame/<MÃ>.png` dùng file này để tìm frame mới vẽ chưa có trong `figma-frame-ids.generated.json`:
chỉ đọc vài Section của đúng nhóm (khoảng 5 giây) thay vì cả file Figma (khoảng 100 giây).
Design vẽ màn mới vào Section đã có thì không cần chạy lại; tạo nhóm mã mới ở Section mới thì chạy lại rồi deploy.

  figma_sections.py [--work .] [--full file.json]   # --full: dùng file Figma đã tải (depth ≥ 5)
"""
import argparse, collections, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
CODE = r"[A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}(?:-DK)?"
FRAME_NAME = re.compile(rf"^(?:[①-⑳] \S+ · )?({CODE})\s*[—–-]")


def family(code):
    return re.sub(r"\d{4}(?:-DK)?$", "", code)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    ap.add_argument("--full")
    args = ap.parse_args()
    if args.full:
        doc = json.load(open(args.full))
    else:
        import figma_rest
        doc = figma_rest.get("?depth=5")
    sections = collections.defaultdict(set)

    def walk(n, section):
        m = FRAME_NAME.match(n.get("name", ""))
        if m and n["type"] != "SECTION" and section:
            sections[family(m[1])].add(section)
            return
        for c in n.get("children", []):
            walk(c, n["id"] if n["type"] == "SECTION" else section)
    walk(doc["document"], None)
    out = {k: sorted(v) for k, v in sorted(sections.items())}
    with open(f"{args.work}/lib/figma-sections.generated.json", "w", encoding="utf-8") as fh:
        json.dump(out, fh, ensure_ascii=False, indent=1)
        fh.write("\n")
    print(len(out), "nhóm mã,", sum(map(len, out.values())), "Section")


if __name__ == "__main__":
    main()
