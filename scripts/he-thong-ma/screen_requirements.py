#!/usr/bin/env python3
"""Sinh `scripts/figma/screen-requirements.json`: mã màn -> các trang requirement nói về màn đó.

Bot báo thay đổi Figma (notify-changes.mjs) dùng file này để ghi kèm "requirement bị ảnh hưởng" dưới mỗi màn đổi,
QC biết ngay phải xem lại file nào, trang nào. Popup/trạng thái không có trang riêng thì lấy theo màn cha.
cap_nhat_requirement.py chạy lại file này mỗi lần cập nhật requirement.

  screen_requirements.py [--work .]
"""
import argparse, collections, glob, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
CODE = r"[A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    w = ap.parse_args().work
    prefix = {}
    for f in glob.glob(f"{w}/docs/he-thong-ma/*.registry.json"):
        for rf in json.load(open(f)).get("requirementFiles", []):
            prefix[rf["file"]] = rf["prefix"]
    refs = collections.defaultdict(list)
    for path in sorted(glob.glob(f"{w}/docs/requirements/**/*.md", recursive=True)):
        rel = os.path.relpath(path, f"{w}/docs/requirements")
        text = open(path, encoding="utf-8").read()
        title = text.split("\n", 1)[0].lstrip("# ").strip()
        pages = collections.defaultdict(list)
        for m in re.finditer(r"^### Trang (\d+): (.*?) — ", text, re.M):
            for c in re.findall(CODE, m[2]):
                pages[c].append(int(m[1]))
        for c, nos in pages.items():
            refs[c].append({"file": rel, "prefix": prefix.get(rel, ""), "title": title, "pages": nos})
    frames = json.load(open(f"{w}/docs/he-thong-ma/figma-frames.json"))["frames"]
    out = {}
    for code, fr in frames.items():
        base = re.sub(r"-DK$", "", code)
        own = refs.get(base) or refs.get(fr.get("parent") or "") or []
        if own:
            out[code] = own
    with open(f"{w}/scripts/figma/screen-requirements.json", "w", encoding="utf-8") as fh:
        json.dump(out, fh, ensure_ascii=False, indent=1, sort_keys=True)
        fh.write("\n")
    print(len(out), "màn có requirement")


if __name__ == "__main__":
    main()
