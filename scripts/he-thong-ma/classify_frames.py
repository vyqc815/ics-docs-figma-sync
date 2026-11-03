#!/usr/bin/env python3
"""Classify Figma screen codes outside figma.pages.json: popup / trang-thai / dropdown / ban-toi / man-chinh,
with suggested parent and confidence. Read-only. Usage: classify.py full.json codes.json figma.pages.json out_dir"""
import json, re, sys, collections

FULL, CODES, PAGES, OUT = sys.argv[1:5]
doc = json.load(open(FULL))["document"]
want = json.load(open(CODES))
in_pages = {p["name"].upper() for p in json.load(open(PAGES))["pages"]}

CODE = r"[A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{4,6}(?:-DK)?"
FRAME_NAME = re.compile(rf"^(?:[①-⑳] \S+ · )?({CODE})\s*[—–-]\s*(.*)$")
LABEL = re.compile(rf"^(Code|Nhãn|Banner) · ({CODE})")

DOC_TITLE = re.compile(rf"({CODE})\s+—\s+([^↗\n]+)")
doc_titles = {}  # code -> title written in a note / index table (frame may be gone)
frames, labels = {}, collections.defaultdict(list)  # code -> first frame; code -> label groups
by_id = {}
incoming = collections.defaultdict(set)  # dest node id -> source top frame ids

def dests(n):
    out = set()
    if n.get("transitionNodeID"):
        out.add(n["transitionNodeID"])
    for it in n.get("interactions") or []:
        for a in it.get("actions") or []:
            if a and a.get("destinationId"):
                out.add(a["destinationId"])
    return out

def walk(n, page, container, top, path):
    m = FRAME_NAME.match(n["name"]) if n["type"] in ("FRAME", "COMPONENT", "INSTANCE") else None
    if m:
        code = m[1].upper()
        bb = n.get("absoluteBoundingBox") or {}
        info = {"code": code, "id": n["id"], "title": m[2].strip(), "page": page.strip(), "container": container,
                "w": bb.get("width"), "h": bb.get("height"), "nested": top is not None, "inside": top}
        frames.setdefault(code, info)
        by_id[n["id"]] = code
        if top is None:
            top = code
    if n["type"] == "TEXT":
        for dm in DOC_TITLE.finditer(n.get("characters") or ""):
            doc_titles.setdefault(dm[1].upper(), dm[2].strip())
    lm = LABEL.match(n["name"])
    if lm:
        labels[lm[2].upper()].append(lm[1])
    if top:
        for d in dests(n):
            incoming[d].add(top)
    if not m and n["type"] in ("SECTION", "FRAME", "GROUP") and top is None:
        container = n["name"]
    for c in n.get("children") or []:
        walk(c, page, container, top, path)

for p in doc["children"]:
    walk(p, p["name"], None, None, [])

# destination ids may be the frame itself or a node inside it; map to frame code by id only (frames are prototype targets)
links_in = collections.defaultdict(set)
for dest, srcs in incoming.items():
    code = by_id.get(dest)
    if code:
        links_in[code] |= {s for s in srcs if s != code}

def segs(title):
    return [s.strip() for s in title.split(" / ")]

POPUP = re.compile(r"\b(popup|modal|dialog|drawer)\b", re.I)
POPUP_SOFT = re.compile(r"\b(xác nhận|thông báo|kết quả import|soát lỗi)\b", re.I)
DROP = re.compile(r"\b(dropdown|đang mở|hover menu|menu thao tác|ẩn hiện cột|chọn nhân sự)\b", re.I)
STATE = re.compile(r"(trống|empty|· lỗi|^lỗi|đang tạo|loading|sau khi|sau generate|chưa có|chưa gắn|thành công|hết hạn|"
                   r"hợp lệ|điền sai|preview|xem trước|xem tiêu chí|xem theo|bản đầy đủ|^tab |\(\d+\)|^chọn |^mở |^đã chọn|·)", re.I)

def base_candidates(code):
    """060112 -> 060110, 060100, 060000 ; ADM-HV-010062 -> 010060, 010000."""
    pre, num = code.rsplit("-", 1)
    out = []
    for k in range(1, len(num)):
        cand = num[:len(num) - k] + "0" * k
        if cand != num and cand not in out:
            out.append(cand)
    return [f"{pre}-{c}" for c in out]

def is_full(f):
    return (f.get("w") or 0) >= 1200 and (f.get("h") or 0) >= 650

def by_title(code, title):
    """frame named by this one's path minus its last part; else a full-size sibling in the same group and code family."""
    s = segs(title)
    for k in range(len(s) - 1, 0, -1):
        head = s[:k]
        exact = [c for c, f in frames.items() if c != code and not c.endswith("-DK") and segs(f["title"]) == head]
        if exact:
            return sorted(exact, key=lambda c: (c not in in_pages, c))[0]
        sib = [c for c, f in frames.items() if c != code and not c.endswith("-DK") and c[:-4] == code[:-4]
               and is_full(f) and segs(f["title"])[:k] == head and len(segs(f["title"])) == k + 1]
        if sib:
            num = int(code.rsplit("-", 1)[1])
            dist = lambda c: (int(c.rsplit("-", 1)[1]) > num, abs(num - int(c.rsplit("-", 1)[1])))
            return sorted(sib, key=dist)[0]
    return None

def kind_of(title, w, h):
    """(loai, tin cay cua loai, ly do) from the frame name, size as a tie-break."""
    s = segs(title)
    last = s[-1]
    full = w >= 1200 and h >= 650
    in_popup = any(POPUP.search(x) for x in s[:-1])
    if POPUP.match(last) or (POPUP.search(last) and not DROP.search(last)):
        return "popup", "cao", f"tên: “{last}”"
    if DROP.search(last):
        return "dropdown", "cao", f"tên: “{last}”"
    if POPUP.search(last):  # "Popup … · Đang mở" is a popup whose status reads "đang mở"
        return "popup", "trung-binh", f"tên có cả popup và dropdown: “{last}”"
    if STATE.search(last):
        return "trang-thai", "trung-binh", f"trạng thái của {'popup' if in_popup else 'màn'}: “{last}”"
    if POPUP_SOFT.search(last):
        return "popup", "trung-binh", f"tên: “{last}”, không ghi chữ Popup"
    if full:
        return "man-chinh", "trung-binh", f"frame cỡ màn hình {int(w)}×{int(h)}, tên không có popup/trạng thái"
    if in_popup:
        return "trang-thai", "trung-binh", f"bước/trạng thái trong popup: “{last}”"
    return "popup", "thap", f"frame nhỏ {int(w)}×{int(h)}, tên không ghi loại"

RANK = {"cao": 2, "trung-binh": 1, "thap": 0}
def lower(a, b):
    return a if RANK[a] <= RANK[b] else b

def classify(code):
    f = frames.get(code)
    if code.endswith("-DK"):
        base = code[:-3]
        return {"loai": "ban-toi", "parent": base, "tinCay": "cao" if base in frames else "trung-binh",
                "lyDo": "hậu tố -DK" + ("" if base in frames else "; chưa thấy frame bản sáng")}
    dark = frames.get(code + "-DK")
    note = ""
    if not f:
        title = (dark or {}).get("title") or doc_titles.get(code)
        note = ("chỉ có frame bản tối -DK" if dark else
                "không còn frame, mã chỉ ghi trong bảng mục lục/ghi chú" + (f" (“{title}”)" if title else ""))
        if not title:
            return {"loai": "chua-ro", "parent": None, "tinCay": "thap", "lyDo": note, "goiY": {}}
        f = {"title": title, "w": (dark or {}).get("w") or 0, "h": (dark or {}).get("h") or 0, "nested": False, "inside": None}
    title = f["title"]
    loai, tin_loai, why = kind_of(title, f["w"] or 0, f["h"] or 0)
    reasons = [x for x in (note, why) if x]

    tparent = by_title(code, title)
    cparent = next((c for c in base_candidates(code) if c in frames), None)
    if cparent and segs(frames[cparent]["title"])[0] != segs(title)[0]:
        reasons.append(f"mã gần nhất {cparent} (“{frames[cparent]['title']}”) thuộc nhóm khác — tiền tố mã có thể bị trùng")
        cparent = None
    proto = sorted(links_in.get(code, set()) - {code + "-DK"})
    proto_light = [p for p in proto if not p.endswith("-DK")]
    nparent = f["inside"] if f.get("nested") else None
    votes = collections.Counter()
    for p in proto_light:
        votes[p] += 2
    for p in (tparent, cparent, nparent):
        if p:
            votes[p] += 1
    parent = votes.most_common(1)[0][0] if votes else None
    agree = sum(1 for p in (tparent, cparent, nparent) if p == parent) + (1 if parent in proto_light else 0)
    if loai == "man-chinh":
        tin_cha = "trung-binh"  # a main screen hangs off its route group; the parent here is context only
    elif not parent:
        tin_cha = "thap"
    elif agree >= 2:
        tin_cha = "cao"
    elif len(votes) == 1:
        tin_cha = "trung-binh"
    else:
        tin_cha = "thap"
    if len(votes) > 1:
        reasons.append("màn cha có nhiều gợi ý")
    tin = lower(tin_loai, tin_cha)
    if note:
        tin = "thap"
    return {"loai": loai, "parent": parent, "tinCay": tin, "tinCayLoai": tin_loai, "tinCayCha": tin_cha,
            "lyDo": "; ".join(reasons), "goiY": {"theoTen": tparent, "theoMa": cparent, "prototype": proto, "namTrong": nparent}}

def root_screen(code, seen=()):
    """main screen that displays this frame (follow parents through popup → popup chains)."""
    k = allk.get(code)
    if not k or code in seen:
        return None
    if k["loai"] == "man-chinh" or (code in in_pages and k["loai"] not in ("popup", "dropdown", "trang-thai", "ban-toi")):
        return code
    if k["loai"] == "ban-toi":
        return root_screen(k["parent"], seen + (code,))
    p = k["parent"]
    if not p:
        return None
    pk = allk.get(p)
    if p in in_pages and pk and pk["loai"] == "man-chinh":
        return p
    return root_screen(p, seen + (code,)) or (p if p in in_pages else None)

allk = {c: classify(c) for c in set(frames) | set(want)}

VN = {"cao": "cao", "trung-binh": "trung bình", "thap": "thấp"}
rows = []
for code in want:
    f = frames.get(code) or {}
    r = {"code": code, "title": f.get("title"), "nodeId": f.get("id"), "page": f.get("page"),
         "container": f.get("container"), "size": [f.get("w"), f.get("h")] if f else None, **allk[code]}
    r["title"] = r["title"] or (frames.get(code + "-DK") or {}).get("title") or doc_titles.get(code)
    r["manHienThi"] = root_screen(code)
    r["parentInPageList"] = bool(r["parent"] and r["parent"] in in_pages)
    r["hasDark"] = code + "-DK" in frames
    r["canDuyet"] = r["tinCay"] != "cao"
    rows.append(r)

json.dump({"fileKey": "rRVs5HX0kIHffbS0V40djG", "note": "Sinh tự động từ Figma REST; chưa đưa vào figma.pages.json.",
           "codes": rows}, open(f"{OUT}/phan-loai-ma-ngoai-danh-sach.json", "w"), ensure_ascii=False, indent=1)
# compact prototype map for every coded frame: used by the registry step
allc = {}
for c, f in frames.items():
    k = allk[c]
    allc[c] = {**{x: f[x] for x in ("id", "title", "page", "container", "w", "h")}, "inPageList": c in in_pages,
               "loai": k["loai"], "parent": k["parent"], "manHienThi": root_screen(c), "tinCay": k["tinCay"], "linksIn": sorted(links_in.get(c, ()))}
json.dump({"fileKey": "rRVs5HX0kIHffbS0V40djG", "frames": allc},
          open(f"{OUT}/figma-frames.json", "w"), ensure_ascii=False)

L = ["# Phân loại 178 mã ngoài danh sách màn", "",
     "Sinh tự động từ Figma (REST, chỉ đọc). Chưa thêm vào `figma.pages.json`, chưa sinh code.",
     "Design duyệt các dòng có tin cậy *trung bình* / *thấp*. Màn cha suy từ prototype link, tên frame và mã; “Hiển thị theo” là màn chính mở popup/trạng thái này (`?popup=`, `?state=`).", ""]
cnt = collections.Counter(r["loai"] for r in rows)
tc = collections.Counter(r["tinCay"] for r in rows)
L += ["| Loại | Số mã |", "|---|---|"] + [f"| {k} | {v} |" for k, v in cnt.most_common()]
L += ["", f"Tin cậy: cao {tc['cao']}, trung bình {tc['trung-binh']}, thấp {tc['thap']}.", ""]
L += ["## Cần duyệt", "", "| Mã | Tên frame | Loại | Màn cha | Hiển thị theo | Tin cậy | Lý do / gợi ý khác |", "|---|---|---|---|---|---|---|"]
def other(r):
    g = r.get("goiY") or {}
    alt = {g.get("theoTen"), g.get("theoMa"), *(g.get("prototype") or [])} - {None, r["parent"]}
    return (r["lyDo"] + (f"; nguồn khác: {', '.join(sorted(alt))}" if alt else "")).replace("|", "/")
for r in rows:
    if r["canDuyet"]:
        L.append(f"| `{r['code']}` | {(r['title'] or '—')[:70]} | {r['loai']} | {r['parent'] or '—'} | {r['manHienThi'] or '—'} | {VN[r['tinCay']]} | {other(r)} |")
L += ["", "## Đã chắc (tin cậy cao)", "", "| Mã | Tên frame | Loại | Màn cha | Hiển thị theo |", "|---|---|---|---|---|"]
for r in rows:
    if not r["canDuyet"]:
        L.append(f"| `{r['code']}` | {(r['title'] or '—')[:70]} | {r['loai']} | {r['parent']} | {r['manHienThi'] or '—'} |")
open(f"{OUT}/phan-loai-ma-ngoai-danh-sach.md", "w", encoding="utf-8").write("\n".join(L) + "\n")
print(cnt, tc, "frames", len(frames), "with links", len(links_in))
