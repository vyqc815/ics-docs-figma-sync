#!/usr/bin/env python3
"""Kiểm bản đã chuyển template còn đủ nội dung bản gốc QC: không mất câu, không mất ô bảng, đủ testcase.

Mỗi dòng chữ, mỗi ô bảng và mỗi tiêu đề mục ### của bản gốc phải có trong bản chuyển (so sau khi bỏ định dạng
markdown). Tiêu đề phần (## …), hàng tiêu đề bảng, "#### Testcase …" và "Giải thích thành phần" (đổi thành
"Điểm cần lưu ý") là khung, không so. Dòng REQ đổi thành bảng thì so từng phần quanh dấu ":" / "–".
Số testcase (hàng của bảng có cột Given/When/Then) phải bằng nhau.

  kiem_noi_dung.py <file gốc> <file chuyển>      # in chỗ thiếu, thoát 1 nếu thiếu
"""
import re, sys

TAG = re.compile(r"</?[a-zA-Z][^>]*>")


def flat(s):
    s = TAG.sub(" ", s.replace("\\|", "|"))
    s = re.sub(r"[*`_>#|]", " ", s)
    return re.sub(r"\s+", " ", s).strip().lower()


def tables(text):
    return [m[0].strip().split("\n") for m in re.finditer(r"(?:^\|.*\n?)+", text, re.M) if m[0].strip().count("\n") >= 2]


def cells(line):
    return [c.strip() for c in re.sub(r"\\\|", "\x00", line).strip().strip("|").split("|")]


def testcases(text):
    return sum(len(t) - 2 for t in tables(text) if re.search(r"given", t[0], re.I))


def missing(orig, conv):
    have = flat(conv)
    out = []
    in_table = set()
    for t in tables(orig):
        in_table.update(t)
        for row in t[2:]:
            for c in cells(row):
                v = flat(c.replace("\x00", "|"))
                if v and v not in have:
                    out.append(f"ô bảng: {c[:80]}")
    for line in orig.split("\n"):
        s = line.strip()
        if not s or s in in_table or re.match(r"^(##? |#### Testcase|---|\||\*\*Giải thích thành phần:\*\*$)", s):
            continue
        s = re.sub(r"^###\s*(Trang \d+:\s*)?", "", s)
        s = re.sub(r"^(\d+\.|[-*+])\s+", "", s)  # gạch đầu dòng có thể đổi dạng (REQ thành bảng)
        v = flat(s)
        if v and v not in have and not all(flat(p) in have for p in re.split(r"\s*[:：–—]\s*", s) if flat(p)):
            out.append(f"dòng: {s[:80]}")
    a, b = testcases(orig), testcases(conv)
    if a != b:
        out.append(f"testcase: gốc {a}, bản chuyển {b}")
    return out


if __name__ == "__main__":
    miss = missing(open(sys.argv[1], encoding="utf-8").read(), open(sys.argv[2], encoding="utf-8").read())
    print("\n".join(miss) or "đủ")
    sys.exit(1 if miss else 0)
