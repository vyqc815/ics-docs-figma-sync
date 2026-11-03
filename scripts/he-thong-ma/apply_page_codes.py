#!/usr/bin/env python3
"""Ghi mã màn vào tiêu đề Trang của requirement còn chưa có mã, theo khớp trong registry.

Chỉ ghi khi khớp chắc chắn:
  - item của trang tìm thấy trên frame (độ tin cao) ở ít nhất 2 item, hoặc 1 item khi chính
    requirement/tool đã nêu frame đó; tối đa 3 frame một trang;
  - hoặc file requirement chỉ có đúng 1 màn và trang không phải popup.
Trang có trong docs/he-thong-ma/ma-trang-duyet.json (design duyệt tay) lấy mã ở đó trước.
Còn lại ghi vào docs/he-thong-ma/trang-chua-gan-ma.md để duyệt tay. Chỉ thêm mã, không đổi chữ.
Chạy sau apply_reserved_codes.py, trước add_live_images.py. Chạy lại nhiều lần không đổi kết quả.

  apply_page_codes.py [--work .]
"""
import argparse, collections, glob, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
MAX_SCREENS = 3


def pick(region, ids):
    hits = collections.Counter(s for it in region["items"] for s, ms in it["matches"].items()
                               if any(m["confidence"] == "cao" for m in ms))
    named = {c.lower() for c in region.get("screensGuessed") or []}
    if hits:
        codes = [s for s in region["screens"] if hits[s] >= (1 if s in named else 2)]
        why = "item khớp trên frame"
    elif len(region["screens"]) == 1 and not re.match(r"(?i)popup", region["title"].split(": ", 1)[-1]):
        codes, why = region["screens"], "màn duy nhất của requirement"
    else:
        return [], "chưa đủ chắc"
    codes = [c.upper() for c in codes if c.upper() in ids and not c.upper().endswith("-DK")]
    if not codes:
        return [], "không item nào khớp đủ"
    if len(codes) > MAX_SCREENS:
        return [], f"khớp {len(codes)} frame, quá nhiều"
    return codes, why


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    w = ap.parse_args().work
    ids = json.load(open(f"{w}/lib/figma-frame-ids.generated.json"))
    regions = {}
    for f in glob.glob(f"{w}/docs/he-thong-ma/*.registry.json"):
        for r in json.load(open(f))["regions"]:
            if r.get("requirement"):
                regions[(r["requirement"], re.sub(r"^Trang \d+:\s*", "", r["title"]).strip())] = r
    approved = json.load(open(f"{w}/docs/he-thong-ma/ma-trang-duyet.json"))["pages"]  # design duyệt tay, ưu tiên
    done, review = collections.Counter(), []
    for path in sorted(glob.glob(f"{w}/docs/requirements/**/*.md", recursive=True)):
        rel = os.path.relpath(path, f"{w}/docs/requirements")
        text = open(path, encoding="utf-8").read()

        def rep(m):
            title = m[2].strip()
            r = regions.get((rel, title))
            if m[1] in approved.get(rel, {}):
                codes, why = approved[rel][m[1]].split(", "), "design duyệt"
            else:
                codes, why = pick(r, ids) if r else ([], "không có trong registry")
            if not codes:
                guess = ", ".join(s.upper() for s in r["screens"]) if r else ""
                review.append(f"| `{rel}` | Trang {m[1]}: {title} | {why} | {guess} |")
                return m[0]
            done[why] += 1
            return f"### Trang {m[1]}: {', '.join(codes)} — {title}"
        new = re.sub(r"^### Trang (\d+): (?![A-Z]{2,4}-)(.*)$", rep, text, flags=re.M)
        if new != text:
            open(path, "w", encoding="utf-8").write(new)
    with open(f"{w}/docs/he-thong-ma/trang-chua-gan-ma.md", "w", encoding="utf-8") as out:
        out.write("# Trang requirement chưa gắn mã màn\n\n"
                  "Các trang dưới đây chưa khớp chắc chắn với frame Figma nên chưa có ảnh Figma mới nhất. "
                  "Đã duyệt: toast (không có frame riêng) và màn chưa vẽ trên Figma để trống có chủ đích.\n\n"
                  "| File | Trang | Lý do | Frame ứng viên |\n|---|---|---|---|\n" + "\n".join(review) + "\n")
    print(dict(done), "· chưa gắn:", len(review))


if __name__ == "__main__":
    main()
