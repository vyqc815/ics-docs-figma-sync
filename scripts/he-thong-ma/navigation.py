"""Danh sách màn chính thức từ bảng "Danh sách màn hình" trên trang NAVIGATION của Figma (design tự giữ bảng này).

Mỗi dòng bảng: mã, tên (link tới frame), loại, trang Figma, ô Final, "Chưa làm", gạch ngang = đã bỏ.
Cách đọc bảng giống repo vyqc815/ics-docs-figma-sync (scripts/figma_index.py), để hai hệ thống ra cùng một danh sách.

Ra:
  docs/he-thong-ma/navigation.json   mã → tên, loại, trang, node, final/chưa làm/đã bỏ, nhóm
  docs/he-thong-ma/lech-navigation.md  mã lệch giữa bảng NAVIGATION và các frame hệ thống đang có

Dùng:  FIGMA_ACCESS_TOKEN=… python3 scripts/he-thong-ma/navigation.py
"""
import json
import os
import re
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from de_xuat_ma import rest_get  # noqa: E402  (curl, token không lộ trong danh sách tiến trình)

ROOT = Path(__file__).resolve().parents[2]
SYS = ROOT / "docs" / "he-thong-ma"
FILE_KEY = json.loads((ROOT / "figma.pages.json").read_text())["fileKey"]
NAV_NODE = os.environ.get("FIGMA_NAV_NODE", "2553:193020")  # frame "Danh sách màn hình" trên trang NAVIGATION
CODE_ONLY = re.compile(r"^[A-Z]{2,4}-[A-Z]{2,5}-\d{6}$")


def texts(n):
    out = []
    stack = [n]
    while stack:
        x = stack.pop()
        if x.get("type") == "TEXT":
            out.append(x)
        stack.extend(reversed(x.get("children", [])))
    return out


def link(t):
    h = (t.get("style") or {}).get("hyperlink") or {}
    if h.get("type") == "NODE":
        return h.get("nodeID")
    for ov in (t.get("styleOverrideTable") or {}).values():
        if (ov.get("hyperlink") or {}).get("type") == "NODE":
            return ov["hyperlink"]["nodeID"]
    return None


def checked(cell):
    p = cell.get("componentProperties") or {}
    if "Checked" in p:
        return p["Checked"].get("value") == "Yes"
    return any(checked(c) for c in cell.get("children", []))


def parse(nav):
    rows, groups = [], {}

    def walk(n):
        kids = n.get("children", [])
        head = next((c for c in kids if c.get("name") == "Group header"), None)
        if head:
            t = [x.get("characters", "") for x in texts(head)]
            if len(t) >= 2:
                groups[t[0]] = t[1].split(" — ")[0]
        if n.get("name") == "Row" and len(kids) >= 5:
            code_t, name_t = texts(kids[0]), texts(kids[1])
            code = (code_t[0].get("characters", "") if code_t else "").strip()
            if CODE_ONLY.match(code):
                row = [x.get("characters", "").strip() for x in texts(n)]
                rows.append({
                    "code": code,
                    "title": name_t[0].get("characters", "").strip() if name_t else "",
                    "node": link(name_t[0]) if name_t else None,
                    "type": " ".join(x.get("characters", "") for x in texts(kids[2])).strip(),
                    "page": " ".join(x.get("characters", "") for x in texts(kids[3])).strip(),
                    "final": checked(kids[4]),
                    "todo": "Chưa làm" in row,
                    "removed": any((x.get("style") or {}).get("textDecoration") == "STRIKETHROUGH" for x in code_t),
                })
            return
        for c in kids:
            walk(c)

    walk(nav)
    return rows, groups


def loai(code, kind_text):
    """Loại theo cách hệ thống mình gọi (man-chinh / popup / trang-thai / dropdown)."""
    k = kind_text.lower()
    if "dropdown" in k:
        return "dropdown"
    d = code.split("-")[2]
    if d[4] != "0":
        return "popup"
    if d[5] != "0":
        return "trang-thai"
    return "man-chinh"


def main():
    nav = rest_get(f"{FILE_KEY}/nodes?ids={NAV_NODE}")["nodes"].get(NAV_NODE)
    if not nav:
        sys.exit(f"Không thấy frame NAVIGATION {NAV_NODE} (đặt FIGMA_NAV_NODE nếu design đã đổi frame).")
    rows, groups = parse(nav["document"])
    if not rows:
        sys.exit("Không đọc được dòng nào trong bảng NAVIGATION.")
    codes = {}
    for r in sorted(rows, key=lambda r: r["code"]):
        role, menu, _ = r["code"].split("-")
        codes[r["code"]] = {**r, "loai": loai(r["code"], r["type"]), "group": groups.get(f"{role}-{menu}", "")}
    vn = datetime.now(timezone(timedelta(hours=7))).strftime("%d/%m/%Y %H:%M")
    out = {"fileKey": FILE_KEY, "node": NAV_NODE, "updated": vn, "groups": groups, "codes": codes}
    new = json.dumps(out, ensure_ascii=False, indent=1) + "\n"
    path = SYS / "navigation.json"
    old = json.loads(path.read_text()) if path.exists() else {}
    if {k: v for k, v in old.items() if k != "updated"} != {k: v for k, v in out.items() if k != "updated"}:
        path.write_text(new)  # chỉ ghi khi bảng thật sự đổi, khỏi commit thừa

    # ---- lệch giữa bảng NAVIGATION và frame hệ thống đang có
    frames = json.loads((SYS / "figma-frames.json").read_text())["frames"]
    have = {c: f for c, f in frames.items() if not c.endswith("-DK")}
    live = {c: r for c, r in codes.items() if not r["removed"]}
    only_nav = sorted(c for c in live if c not in have)
    only_us = sorted(c for c in have if c not in codes)
    node_diff = sorted(c for c in live if c in have and live[c]["node"] and live[c]["node"] != have[c]["id"])
    removed_used = sorted(c for c, r in codes.items() if r["removed"] and c in have)
    L = [
        "# Lệch giữa bảng NAVIGATION (Figma) và hệ thống mã",
        "",
        f"Cập nhật {vn} · bảng NAVIGATION: {len(codes)} mã ({sum(r['final'] for r in codes.values())} Final, "
        f"{sum(r['todo'] for r in codes.values())} chưa làm, {sum(r['removed'] for r in codes.values())} đã bỏ) · hệ thống: {len(have)} mã có frame.",
        "",
        "Bảng NAVIGATION là danh sách chính thức. Mã chỉ có trong bảng vẫn hiện trên Hub (ảnh lấy theo link trong bảng).",
        "",
        f"## Có frame mang mã nhưng không có trong bảng NAVIGATION ({len(only_us)})",
        "Design thêm vào bảng, hoặc đổi tên frame cho đúng mã trong bảng.",
        "",
        *[f"- `{c}` {have[c].get('title', '')}" for c in only_us],
        "",
        f"## Link trong bảng trỏ tới frame khác với frame mang mã ({len(node_diff)})",
        "",
        *[f"- `{c}` bảng → `{live[c]['node']}`, frame mang mã → `{have[c]['id']}`" for c in node_diff],
        "",
        f"## Mã đã gạch (bỏ) trong bảng nhưng frame vẫn còn ({len(removed_used)})",
        "",
        *[f"- `{c}` {codes[c]['title']}" for c in removed_used],
        "",
        f"## Có trong bảng, hệ thống chưa có frame mang mã ({len(only_nav)})",
        "Thường là design chưa đặt mã vào tên frame. Hub vẫn hiện ảnh nhờ link trong bảng.",
        "",
        *[f"- `{c}` {live[c]['title']}" for c in only_nav],
        "",
    ]
    (SYS / "lech-navigation.md").write_text("\n".join(L))
    print(f"NAVIGATION: {len(codes)} mã · chỉ trong bảng {len(only_nav)} · chỉ có frame {len(only_us)} · link lệch {len(node_diff)} · gạch mà còn {len(removed_used)}")


if __name__ == "__main__":
    main()
