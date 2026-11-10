#!/usr/bin/env python3
"""Đề xuất loại màn và màn gốc cho file Figma CHƯA có mã (bước trước khi đánh mã).

Mỗi frame được tóm tắt (cỡ, nền, chữ, chữ trên nút, tiêu đề, component, link prototype, vị trí, trang/Section),
rồi:
  - loại: màn gốc / popup / dropdown / trạng thái / bản tối;
  - màn gốc của popup/dropdown/trạng thái: chấm điểm từng màn gốc ứng viên —
      prototype (màn gốc có nút mở frame này)                       +10
      chữ nút ↔ tiêu đề popup (“Thêm hoá đơn” ↔ “Thêm hoá đơn”)     +6 (khớp hẳn) / +3 (chứa)
      bố cục giống (component + chữ chung, kiểu trạng thái)          +6 × độ giống
      cùng Section +2, cùng trang +1, gần nhau trên canvas +0..2
  - bản tối: bản sáng giống nhất cùng cỡ.
Mức tin: "chắc" khi điểm cao và cách xa ứng viên thứ hai, còn lại "cần xem" kèm 3 ứng viên.

Đo trên ICS (đã có mã chuẩn, bỏ mã khỏi tên trước khi đoán):
  de_xuat_ma.py danh-gia [--work .] [--full figma-depth5.json]
Đề xuất cho một file Figma qua REST (FIGMA_ACCESS_TOKEN), ra JSON + CSV (Excel) + Markdown:
  de_xuat_ma.py de-xuat --file <fileKey|link> --project ABC [--pages "Trang A,Trang B"] [--out thư-mục]
Mã: <DỰ ÁN>-<MODULE>-SSMMKK  (SS = Section trong module, MM = màn gốc, KK = 00 màn gốc · 01–09 trạng thái ·
10, 20… popup/dropdown); bản tối = mã bản sáng + "-DK".
"""
import argparse, collections, glob, json, math, os, re, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
CODE = re.compile(r"^[A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}(?:-DK)?\s*[—–-]\s*")
CHROME = 0.0  # weight of components every screen shares (sidebar, header) is cut by idf below


def norm(s):
    s = (s or "").replace("đ", "d").replace("Đ", "D")
    s = "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


def luminance(hexcolor):
    m = re.match(r"#([0-9a-f]{6})", hexcolor or "", re.I)
    if not m:
        return 1.0
    r, g, b = (int(m[1][i:i + 2], 16) / 255 for i in (0, 2, 4))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


# ---------------------------------------------------------------- frame summary
def summarize(spec, name, page, section, pos):
    tree, frame = spec["tree"], spec["frame"]
    texts, buttons, comps, targets, titles = [], set(), set(), set(), []

    def walk(n, in_button=False, depth=0):
        comp = n.get("component") or {}
        in_button = in_button or bool(n.get("interactions")) or n.get("type") == "INSTANCE"
        cname = f"{comp.get('set') or ''} {comp.get('name') or ''}"
        if comp.get("setKey") or comp.get("key"):
            comps.add(comp.get("setKey") or comp.get("key"))
        btn = in_button or bool(re.search(r"button|btn|nut|cta", norm(cname)))
        head = re.search(r"header|title|tieu de", norm(cname))
        for it in n.get("interactions") or []:
            for a in it.get("actions") or []:
                if a.get("destinationId"):
                    targets.add(a["destinationId"])
        t = (n.get("text") or {}).get("characters")
        if t and t.strip():
            size = ((n.get("text") or {}).get("segments") or [{}])[0].get("font", {}).get("size", 14)
            texts.append(norm(t))
            if btn and len(t) <= 40:
                buttons.add(norm(t))
            if head or (n.get("box", {}).get("y", 999) < 90 and size >= 16):
                titles.append((size, norm(t)))
        for c in n.get("children") or []:
            walk(c, btn or bool(head and False), depth + 1)

    walk(tree)
    titles.sort(reverse=True)
    w, h = frame["width"], frame["height"]
    return {
        "name": name, "title": norm(name), "page": page, "section": section, "pos": pos, "w": w, "h": h,
        # dark: a dark background, or placed in a page/section meant for the dark theme (popups may have no background)
        "dark": luminance(frame.get("background")) < 0.35 or bool(re.search(r"\b(dark|toi)\b", norm(f"{page} {section or ''}"))), "texts": set(texts), "buttons": buttons,
        "titles": [t for _, t in titles[:3]], "comps": comps, "targets": targets,
    }


# ---------------------------------------------------------------- kind + parent
KW = {
    "popup": r"\b(popup|modal|dialog|hop thoai|xac nhan|confirm)\b",
    "dropdown": r"\b(dropdown|drop down|menu|select|chon)\b",
    "state": r"\b(trong|empty|loading|dang tai|loi|error|hover|da chon|selected|state|trang thai)\b",
}


def is_full(s):
    return s["w"] >= 1200 and s["h"] >= 600


def kind_guess(s):
    t = s["title"]
    if not is_full(s):
        if re.search(KW["dropdown"], t) or (s["w"] <= 420 and s["h"] <= 700):
            return "dropdown"
        return "popup"
    if re.search(KW["dropdown"], t):
        return "dropdown"  # dropdown drawn open over a full copy of its screen
    if re.search(KW["popup"], t):
        return "popup"  # popup drawn over a full copy of its screen
    return "full"


def similarity(a, b, idf):
    ca = sum(idf.get(c, 0) for c in a["comps"] & b["comps"])
    cu = sum(idf.get(c, 0) for c in a["comps"] | b["comps"]) or 1
    ta = len(a["texts"] & b["texts"]) / (len(a["texts"] | b["texts"]) or 1)
    return 0.6 * ca / cu + 0.4 * ta


def propose(frames):
    """frames: id -> summary. Returns id -> {kind, parent, score, alts, confidence}."""
    n = len(frames)
    df = collections.Counter(c for s in frames.values() for c in s["comps"])
    idf = {c: math.log(n / (1 + k)) for c, k in df.items()}
    ids = list(frames)
    kind = {i: kind_guess(frames[i]) for i in ids}
    light_full = [i for i in ids if kind[i] == "full" and not frames[i]["dark"]]

    # dark variants: the most similar light frame of the same size
    out = {}
    for i in ids:
        s = frames[i]
        if s["dark"]:
            # a dark copy repeats the light frame's words: compare texts first, layout second
            pool = [j for j in ids if not frames[j]["dark"] and abs(frames[j]["w"] - s["w"]) < 2 and abs(frames[j]["h"] - s["h"]) < 40]
            def dark_score(j):
                o = frames[j]
                t = len(s["texts"] & o["texts"]) / (len(s["texts"] | o["texts"]) or 1)
                same_name = 0.3 if re.sub(r"\b(dark|toi|dk)\b", "", s["title"]).strip() == o["title"] else 0
                return 0.7 * t + 0.3 * similarity(s, o, idf) + same_name
            best = sorted(((dark_score(j), j) for j in pool), reverse=True)[:3]
            out[i] = {"kind": "ban-toi", "parent": best[0][1] if best else None, "score": round(best[0][0], 3) if best else 0,
                      "alts": [j for _, j in best[1:]], "confidence": "chac" if best and best[0][0] > 0.6 and (len(best) < 2 or best[0][0] - best[1][0] > 0.08) else "can-xem"}

    # states: a full light frame whose name continues another one's ("Danh sách hoá đơn / Sau khi thêm tag"),
    # or carries a state word and looks like it; every other full light frame is a main screen
    def words(t):
        return t.split()

    def prefix_of(a, b):
        wa, wb = words(a), words(b)
        return len(wa) >= 2 and len(wb) > len(wa) and wb[: len(wa)] == wa

    out_state = {}
    for j in light_full:
        tj = frames[j]["title"]
        owners = [i for i in light_full if i != j and prefix_of(frames[i]["title"], tj)]
        if owners:
            out_state[j] = max(owners, key=lambda i: len(frames[i]["title"]))
            continue
        if re.search(KW["state"], tj):
            best = max(((similarity(frames[j], frames[i], idf), i) for i in light_full if i != j and not re.search(KW["state"], frames[i]["title"])), default=(0, None))
            if best[0] > 0.6:
                out_state[j] = best[1]
    mains = [i for i in light_full if i not in out_state]
    for i in mains:
        out[i] = {"kind": "man-chinh", "parent": None, "score": 1, "alts": [], "confidence": "chac"}
    for j, i in out_state.items():
        by_name = prefix_of(frames[i]["title"], frames[j]["title"])
        out[j] = {"kind": "trang-thai", "parent": i, "score": round(similarity(frames[j], frames[i], idf), 3), "alts": [],
                  "confidence": "chac" if by_name else "can-xem"}

    # smaller frames named after another one ("Popup thêm hoá đơn / Chọn đơn vị tiền"): a state of that popup
    light = [i for i in ids if not frames[i]["dark"]]
    for j in light:
        if j in out or kind[j] == "full":
            continue
        owners = [i for i in light if i != j and prefix_of(frames[i]["title"], frames[j]["title"])]
        owners = [i for i in owners if kind[i] != "full" or not re.search(KW["popup"] + "|" + KW["dropdown"], frames[j]["title"])]
        if owners:
            o = max(owners, key=lambda i: len(frames[i]["title"]))
            if kind[o] != "full":
                out[j] = {"kind": "trang-thai", "parent": o, "score": 1, "alts": [], "confidence": "chac"}

    def dist(a, b):
        if not a["pos"] or not b["pos"]:
            return None
        return math.hypot(a["pos"][0] - b["pos"][0], a["pos"][1] - b["pos"][1])

    for i in ids:
        if i in out:
            continue
        s = frames[i]
        scores = {}
        for m in mains:
            ms = frames[m]
            sc = 0.0
            if i in ms["targets"]:
                sc += 10
            for t in s["titles"]:
                if t and (t in ms["buttons"] or t in ms["texts"]):
                    sc += 6
                    break
                if t and any(t in b or b in t for b in ms["buttons"] if len(b) > 4):
                    sc += 3
                    break
            sc += 6 * similarity(s, ms, idf) if kind[i] == "full" else 2 * similarity(s, ms, idf)
            # shared start of the names ("Hoá đơn / Danh sách" ↔ "Hoá đơn / Popup thêm"): +0..4
            a, b = s["title"].split(), ms["title"].split()
            k = 0
            while k < min(len(a), len(b)) and a[k] == b[k]:
                k += 1
            sc += 4 * k / max(len(b), 1)
            if s["section"] and s["section"] == ms["section"]:
                sc += 2
            if s["page"] == ms["page"]:
                sc += 1
            d = dist(s, ms)
            if d is not None:
                sc += max(0.0, 2 - d / 2000)
            scores[m] = sc
        ranked = sorted(scores.items(), key=lambda x: -x[1])[:3]
        top = ranked[0] if ranked else (None, 0)
        second = ranked[1][1] if len(ranked) > 1 else 0
        k = "trang-thai" if kind[i] == "full" else ("dropdown" if kind[i] == "dropdown" else "popup")
        # sure only with a prototype link to that screen alone, or far ahead of the next candidate
        linked = [m for m, _ in ranked if i in frames[m]["targets"]]
        sure = (len(linked) == 1 and linked[0] == top[0]) or (top[1] >= 6 and top[1] - second >= 4)
        out[i] = {"kind": k, "parent": top[0], "score": round(top[1], 2), "alts": [m for m, _ in ranked[1:]], "confidence": "chac" if sure else "can-xem"}
    return out


# ---------------------------------------------------------------- ICS evaluation
def ics_frames(work, full_path):
    F = json.load(open(f"{work}/docs/he-thong-ma/figma-frames.json"))["frames"]
    pos = {}
    if full_path and os.path.exists(full_path):
        def walk(n, section=None):
            bb = n.get("absoluteBoundingBox")
            if n.get("type") == "FRAME" and bb:
                pos[n["id"]] = (bb["x"], bb["y"])
                return
            for c in n.get("children", []):
                walk(c, section)
        walk(json.load(open(full_path))["document"])
    frames, truth = {}, {}
    for code, f in F.items():
        p = f"{work}/.figma/pages/{code.lower()}/page-spec.json"
        if not os.path.exists(p):
            continue
        spec = json.load(open(p))
        name = CODE.sub("", spec["source"]["nodeName"])  # no code: guess from the title only
        frames[f["id"]] = summarize(spec, name, f["page"], f.get("container"), pos.get(f["id"]))
        truth[f["id"]] = (f["loai"], F[f["parent"]]["id"] if f.get("parent") in F else None, code)
    return frames, truth


def evaluate(args):
    frames, truth = ics_frames(args.work, args.full)
    got = propose(frames)
    kinds = collections.Counter()
    par = collections.Counter()
    by_kind = collections.Counter()
    conf = collections.Counter()
    miss = []
    for i, (k, parent, code) in truth.items():
        g = got[i]
        kinds[(k, g["kind"])] += 1
        if k != "man-chinh":
            ok = g["parent"] == parent
            par["ok" if ok else "sai"] += 1
            by_kind[(k, ok)] += 1
            conf[(g["confidence"], ok)] += 1
            if not ok and g["confidence"] == "chac" and len(miss) < 12:
                miss.append((code, k, g["kind"], g["score"]))
    total = sum(kinds.values())
    right = sum(v for (a, b), v in kinds.items() if a == b)
    print(f"Loại đúng: {right}/{total} = {right / total:.0%}")
    for (a, b), v in sorted(kinds.items(), key=lambda x: -x[1])[:12]:
        print(f"  thật {a:11} → đoán {b:11} {v}")
    print(f"Màn gốc đúng (popup/trạng thái/dropdown/bản tối): {par['ok']}/{par['ok'] + par['sai']} = {par['ok'] / max(1, par['ok'] + par['sai']):.0%}")
    sure = conf[("chac", True)] + conf[("chac", False)]
    print(f"  'chắc': {sure}, trong đó sai {conf[('chac', False)]} · 'cần xem': {conf[('can-xem', True)] + conf[('can-xem', False)]}")
    for k in ("ban-toi", "popup", "trang-thai", "dropdown"):
        print(f"  {k:10} màn gốc đúng {by_kind[(k, True)]}/{by_kind[(k, True)] + by_kind[(k, False)]}")
    print("  vài ca 'chắc' mà sai:", miss[:6])


# ---------------------------------------------------------------- REST: any Figma file
def rest_get(path):
    """Figma REST through curl (same as figma_rest.py: the token never shows in the process list)."""
    import subprocess, time
    token = os.environ.get("FIGMA_ACCESS_TOKEN") or subprocess.check_output(
        ["security", "find-generic-password", "-s", "figma-page-token", "-w"], text=True).strip()
    for attempt in range(6):
        try:
            raw = subprocess.check_output(["curl", "-sf", "--max-time", "600", "-K", "-", f"https://api.figma.com/v1/files/{path}"],
                                          input=f'header = "X-Figma-Token: {token}"\n', text=True)
            return json.loads(raw)
        except subprocess.CalledProcessError:  # rate limit / timeout: back off
            if attempt == 5:
                raise
            time.sleep(2 ** attempt * 2)


def rest_spec(doc, comps):
    """REST node → the small spec shape summarize() reads (tree with text, component, interactions)."""
    def conv(n, top=None):
        top = top or n.get("absoluteBoundingBox", {"x": 0, "y": 0})
        bb = n.get("absoluteBoundingBox") or top
        c = comps.get(n.get("componentId", ""), {})
        out = {"id": n["id"], "name": n["name"], "type": n["type"], "box": {"y": bb["y"] - top["y"]},
               "interactions": [{"actions": [{"destinationId": a.get("destinationId") or n.get("transitionNodeID")}
                                             for a in i.get("actions") or []]} for i in n.get("interactions") or []]}
        if c:
            out["component"] = {"name": c.get("name"), "key": c.get("key"), "set": c.get("componentSetName"), "setKey": c.get("componentSetId")}
        if n.get("characters"):
            out["text"] = {"characters": n["characters"], "segments": [{"font": {"size": (n.get("style") or {}).get("fontSize", 14)}}]}
        out["children"] = [conv(ch, top) for ch in n.get("children") or [] if ch.get("visible", True)]
        return out
    bg = next((f for f in doc.get("fills") or [] if f.get("type") == "SOLID" and f.get("visible", True)), None)
    hexbg = "#%02x%02x%02x" % tuple(int(bg["color"][k] * 255) for k in "rgb") if bg else None
    bb = doc.get("absoluteBoundingBox", {"width": 0, "height": 0})
    return {"tree": conv(doc), "frame": {"width": bb["width"], "height": bb["height"], "background": hexbg}}


def rest_frames(file_key, pages_wanted):
    outline = rest_get(f"{file_key}?depth=2")
    frames, raw = {}, {}
    for page in outline["document"]["children"]:
        pname = page["name"].strip()
        if pages_wanted and not any(norm(p) == norm(pname) for p in pages_wanted):
            continue
        tree = rest_get(f"{file_key}/nodes?ids={page['id']}&depth=4")["nodes"][page["id"]]["document"]
        found = []
        def walk(n, section):
            if n["type"] == "FRAME":
                bb = n.get("absoluteBoundingBox") or {}
                # screens only: notes, labels and code banners designers keep next to them are skipped
                note = re.match(r"^\s*(nhan|code|banner|note|ghi chu|label|chu thich|annotation)\b", norm(n["name"]))
                if bb.get("width", 0) >= 200 and bb.get("height", 0) >= 120 and not note:
                    found.append((n["id"], n["name"], section, (bb["x"], bb["y"])))
                return
            if n["type"] in ("SECTION", "GROUP"):
                for c in n.get("children", []):
                    walk(c, n["name"].strip() if n["type"] == "SECTION" else section)
        for c in tree.get("children", []):
            walk(c, None)
        for k in range(0, len(found), 8):
            batch = found[k:k + 8]
            res = rest_get(f"{file_key}/nodes?ids={','.join(i for i, *_ in batch)}")
            for fid, name, section, pos in batch:
                node = res["nodes"].get(fid)
                if not node:
                    continue
                spec = rest_spec(node["document"], node.get("components", {}))
                frames[fid] = summarize(spec, CODE.sub("", name), pname, section, pos)  # an old code never decides
                raw[fid] = {"name": name, "page": pname, "section": section, "pos": pos}
            print(f"  {pname}: {min(k + 8, len(found))}/{len(found)} frame", flush=True)
    return frames, raw, outline.get("name", file_key)


def abbr(name, used):
    """Module prefix from a page/section name: initials of its words ("HOÁ ĐƠN" → HD), unique in the file."""
    words = [w for w in norm(re.sub(r"[^\w\s]", " ", name)).split() if w not in ("dark", "mode", "toi")]
    base = "".join(w[0] for w in words[:3]).upper() or "MD"
    cand, k = base, 2
    while cand in used:
        cand, k = f"{base}{k}", k + 1
    used.add(cand)
    return cand


def assign_codes(project, frames, got, raw):
    """Codes in the ICS shape, grouped by page (module) and section; returns id -> code."""
    used, module = set(), {}
    codes = {}
    by_page = collections.defaultdict(list)
    for i, g in got.items():
        if g["kind"] == "man-chinh":
            by_page[raw[i]["page"]].append(i)
    for page, mains in by_page.items():
        mod = abbr(re.sub(r"[├└─│]", "", page), used)
        sections = []
        for m in sorted(mains, key=lambda i: (raw[i]["section"] or "", raw[i]["pos"][1], raw[i]["pos"][0])):
            sec = raw[m]["section"] or ""
            if sec not in sections:
                sections.append(sec)
            ss = sections.index(sec) + 1
            mm = sum(1 for c in codes.values() if c.startswith(f"{project}-{mod}-{ss:02d}")) + 1
            codes[m] = f"{project}-{mod}-{ss:02d}{mm:02d}00"
    # children: states 01–09, popups/dropdowns 10, 20, … (nested states of a popup: popup + 1, 2…)
    def child_code(i, depth=0):
        if i in codes or depth > 5:
            return codes.get(i)
        g = got[i]
        if g["kind"] == "ban-toi":
            base = child_code(g["parent"], depth + 1) if g["parent"] else None
            codes[i] = f"{base}-DK" if base else None
            return codes[i]
        parent = child_code(g["parent"], depth + 1) if g["parent"] else None
        if not parent:
            return None
        stem = parent[:-2] if parent.endswith("00") else parent[:-1]
        taken = {c for c in codes.values() if c and c.startswith(stem)}
        if g["kind"] == "trang-thai":
            seq = [f"{stem}{k:02d}" if parent.endswith("00") else f"{stem}{k}" for k in range(1, 10)]
        else:
            seq = [f"{stem}{k:02d}" for k in range(10, 100, 10)] if parent.endswith("00") else [f"{stem}{k}" for k in range(1, 10)]
        codes[i] = next((c for c in seq if c not in taken), None)
        return codes[i]
    for i in got:
        child_code(i)
    return codes


KIND_VI = {"man-chinh": "Màn gốc", "popup": "Popup", "dropdown": "Dropdown", "trang-thai": "Trạng thái", "ban-toi": "Bản tối"}


def export(out_dir, project, file_key, file_name, frames, raw, got, codes):
    os.makedirs(out_dir, exist_ok=True)
    rows = []
    for i, g in got.items():
        title = re.sub(r"^\s+|\s+$", "", raw[i]["name"])
        code = codes.get(i)
        rows.append({
            "nodeId": i, "page": raw[i]["page"], "section": raw[i]["section"] or "", "tenHienTai": title,
            "loai": KIND_VI[g["kind"]], "maDeXuat": code or "", "tenMoi": f"{code} — {title}" if code else "",
            "manGoc": codes.get(g["parent"], "") if g["parent"] else "", "mucTin": "chắc" if g["confidence"] == "chac" else "cần xem",
            "goiYKhac": ", ".join(codes.get(a, "") or raw[a]["name"] for a in g["alts"]),
            "link": f"https://www.figma.com/design/{file_key}/?node-id={i.replace(':', '-')}",
        })
    rows.sort(key=lambda r: (r["maDeXuat"].replace("-DK", "~") or "~", r["tenHienTai"]))
    json.dump({"project": project, "fileKey": file_key, "fileName": file_name, "frames": rows}, open(f"{out_dir}/de-xuat-ma.json", "w"), ensure_ascii=False, indent=1)
    import csv
    with open(f"{out_dir}/de-xuat-ma.csv", "w", encoding="utf-8-sig", newline="") as fh:  # BOM: Excel reads Vietnamese
        w = csv.writer(fh)
        w.writerow(["Mã đề xuất", "Tên mới (đặt cho frame)", "Tên hiện tại", "Loại", "Màn gốc", "Mức tin", "Gợi ý khác", "Trang", "Section", "Link Figma", "Đã đổi"])
        for r in rows:
            w.writerow([r["maDeXuat"], r["tenMoi"], r["tenHienTai"], r["loai"], r["manGoc"], r["mucTin"], r["goiYKhac"], r["page"], r["section"], r["link"], ""])
    review = [r for r in rows if r["mucTin"] == "cần xem"]
    mods = sorted({r["maDeXuat"].split("-")[1] for r in rows if r["maDeXuat"]})
    L = [f"# Đề xuất gắn mã — {file_name}", "",
         f"{len(rows)} frame · {sum(r['loai'] == 'Màn gốc' for r in rows)} màn gốc · {len(review)} cần design xem. Mã đã gắn sẵn trong hệ thống "
         "(theo id frame), nên Hub/requirement/ảnh chạy ngay; đổi tên trên Figma theo bảng lúc nào cũng được.", "",
         "## 1. Quy ước mã", "",
         f"`{project}-<MODULE>-SSMMKK`: MODULE = trang Figma ({', '.join(mods)}), SS = Section trong trang, MM = màn gốc, "
         "KK = `00` màn gốc · `01–09` trạng thái · `10, 20…` popup/dropdown (trạng thái của popup: số cuối 1–9). Bản tối: mã bản sáng + `-DK`.",
         "Tên frame: `MÃ — Tên màn / chi tiết`.", "",
         "## 2. Bố trí trong Figma", "",
         "- Mỗi MODULE một Page; mỗi màn gốc cùng popup/trạng thái của nó một Section, đặt tên `MÃ màn gốc — tên`.",
         "- Trong Section: màn gốc bên trái, popup/dropdown/trạng thái xếp ngay bên phải theo thứ tự mã; bản tối hàng dưới, đúng cột với bản sáng.",
         "- Frame nháp, trùng, không dùng: dồn vào Page/Section “Lưu trữ” (không quét).", "",
         "## 3. Cần design xem", "", "| Frame | Đề xuất | Màn gốc đề xuất | Gợi ý khác |", "|---|---|---|---|"]
    L += [f"| [{r['tenHienTai'][:60]}]({r['link']}) | `{r['maDeXuat']}` {r['loai']} | `{r['manGoc']}` | {r['goiYKhac']} |" for r in review]
    L += ["", "## 4. Cụm màn", ""]
    for r in [r for r in rows if r["loai"] == "Màn gốc"]:
        kids = [k for k in rows if k["maDeXuat"] and k["maDeXuat"] != r["maDeXuat"] and k["maDeXuat"].startswith(r["maDeXuat"][:-2]) and not k["maDeXuat"].endswith("-DK")]
        L.append(f"- **`{r['maDeXuat']}`** {r['tenHienTai']}" + "".join(f"\n  - `{k['maDeXuat']}` {k['loai']} · {k['tenHienTai']}" for k in kids))
    L += ["", "Bảng đầy đủ từng frame: `de-xuat-ma.csv` (mở bằng Excel, cột “Đã đổi” để tick)."]
    open(f"{out_dir}/de-xuat-ma.md", "w", encoding="utf-8").write("\n".join(L) + "\n")
    return len(rows), len(review)


def suggest(args):
    key = re.search(r"figma\.com/(?:design|file)/([A-Za-z0-9]+)", args.file)
    key = key[1] if key else args.file
    # Hub joins page names with "|" (a Figma page name may hold a comma); by hand "," still works
    sep = "|" if "|" in (args.pages or "") else ","
    pages = [p.strip() for p in args.pages.split(sep) if p.strip()] if args.pages else None
    frames, raw, fname = rest_frames(key, pages)
    got = propose(frames)
    codes = assign_codes(args.project, frames, got, raw)
    n, review = export(args.out, args.project, key, fname, frames, raw, got, codes)
    print(f"{n} frame, {review} cần xem → {args.out}/de-xuat-ma.md · .csv · .json")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("cmd", choices=["danh-gia", "de-xuat"])
    ap.add_argument("--file")
    ap.add_argument("--project", default="PRJ")
    ap.add_argument("--pages")
    ap.add_argument("--out", default="de-xuat-ma")
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    ap.add_argument("--full")
    args = ap.parse_args()
    suggest(args) if args.cmd == "de-xuat" else evaluate(args)


if __name__ == "__main__":
    main()
