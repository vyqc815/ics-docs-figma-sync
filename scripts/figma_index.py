"""Build the screen list from Figma.

Source of truth: the "Danh sách màn hình" table on the NAVIGATION page (config `navigation_node`):
  code, name (linked to its frame), type badge, Figma page, Final checkbox, "Chưa làm", strikethrough = removed.
Enriched by scanning frame names (ROLE-MENU-MMTTPS[-DK] — Tên / ...):
  "-DK" frames become their own codes (dark-mode screens), frames missing from the table are flagged.

Output:
  sync/figma_index.json            every code: title, kind, type, page, node, url, final/todo/removed flags
  sync/export/figma_screens.json   route tree for source code: ROLE-MENU-MM -> tabs -> popups -> states

Usage:  FIGMA_TOKEN=xxx python scripts/figma_index.py
"""
import os
import re
import sys
from collections import OrderedDict
from datetime import datetime

import requests

import sync_lib as lib

API = "https://api.figma.com/v1"
FRAME_NAME = re.compile(r"^(?P<code>[A-Z]{2,4}-[A-Z]{2,5}-\d{6})(?P<dk>-DK)?\s+—\s+(?P<title>.+)$")
CODE_ONLY = re.compile(r"^[A-Z]{2,4}-[A-Z]{2,5}-\d{6}$")
FRAME_TYPES = {"FRAME", "SECTION", "COMPONENT"}


# ---------- Figma API ----------

def _session():
    token = os.environ.get("FIGMA_TOKEN")
    if not token:
        raise lib.SyncError("Thiếu biến môi trường FIGMA_TOKEN")
    s = requests.Session()
    s.headers["X-Figma-Token"] = token
    return s


def fetch_navigation(session, key):
    r = session.get(f"{API}/files/{key}/nodes", params={"ids": lib.NAV_NODE}, timeout=300)
    r.raise_for_status()
    node = (r.json().get("nodes") or {}).get(lib.NAV_NODE)
    if not node:
        raise lib.SyncError(f"Không thấy frame NAVIGATION {lib.NAV_NODE}, kiểm tra navigation_node trong sync/config.yml")
    return node["document"]


def fetch_frames(session, key):
    r = session.get(f"{API}/files/{key}", params={"depth": 6}, timeout=600)
    r.raise_for_status()
    return r.json()


# ---------- Parsing ----------

def _texts(node):
    out = []

    def walk(n):
        if n.get("type") == "TEXT":
            out.append(n)
        for c in n.get("children", []):
            walk(c)

    walk(node)
    return out


def _link(text_node):
    link = (text_node.get("style") or {}).get("hyperlink") or {}
    if link.get("type") == "NODE":
        return link.get("nodeID")
    for ov in (text_node.get("styleOverrideTable") or {}).values():
        if (ov.get("hyperlink") or {}).get("type") == "NODE":
            return ov["hyperlink"]["nodeID"]
    return None


def _checked(cell):
    def walk(n):
        props = n.get("componentProperties") or {}
        if "Checked" in props:
            return props["Checked"].get("value") == "Yes"
        return any(walk(c) for c in n.get("children", []))
    return walk(cell)


def parse_navigation(nav):
    """Rows of the screen table, grouped as on the page."""
    rows, groups = [], {}

    def walk(n):
        children = n.get("children", [])
        if any(c.get("name") == "Group header" for c in children):
            header = next(c for c in children if c.get("name") == "Group header")
            texts = [t.get("characters", "") for t in _texts(header)]
            if len(texts) >= 2:
                groups[texts[0]] = texts[1].split(" — ")[0]
        if n.get("name") == "Row":
            cells = n.get("children", [])
            if len(cells) >= 5:
                code_t = _texts(cells[0])
                name_t = _texts(cells[1])
                code = (code_t[0].get("characters", "") if code_t else "").strip()
                if CODE_ONLY.match(code):
                    row_texts = [t.get("characters", "").strip() for t in _texts(n)]
                    rows.append({
                        "code": code,
                        "title": name_t[0].get("characters", "").strip() if name_t else "",
                        "node": _link(name_t[0]) if name_t else None,
                        "type": " ".join(t.get("characters", "") for t in _texts(cells[2])).strip(),
                        "page": " ".join(t.get("characters", "") for t in _texts(cells[3])).strip(),
                        "final": _checked(cells[4]),
                        "todo": "Chưa làm" in row_texts,
                        "removed": any((t.get("style") or {}).get("textDecoration") == "STRIKETHROUGH" for t in code_t),
                    })
            return
        for c in children:
            walk(c)

    walk(nav)
    return rows, groups


def scan_frames(tree):
    """code(+-DK) -> {node, title, page, ready} from frame names across the file."""
    found = {}

    def walk(n, page):
        name = n.get("name", "")
        if name.startswith("_"):
            return
        m = FRAME_NAME.match(name) if n.get("type") in FRAME_TYPES else None
        if m:
            code = m.group("code") + (m.group("dk") or "")
            found.setdefault(code, {"node": n["id"], "title": m.group("title").strip(), "page": page.strip(" ├└─│"),
                                    "ready": (n.get("devStatus") or {}).get("type") == "READY_FOR_DEV"})
            return
        for c in n.get("children", []):
            walk(c, page)

    for page in tree["document"].get("children", []):
        walk(page, page.get("name", ""))
    return found


def kind_of(code):
    digits = code.split("-")[2]
    tt, p, s = digits[2:4], digits[4], digits[5]
    if p != "0":
        return "popup-state" if s != "0" else "popup"
    if s != "0":
        return "state"
    return "tab" if tt != "00" else "screen"


def build(nav_rows, groups, scanned, key, slug):
    frames = {}
    for r in nav_rows:
        node = r["node"] or (scanned.get(r["code"]) or {}).get("node")
        frames[r["code"]] = dict(r, node=node, url=lib.node_url(key, slug, node) if node else None,
                                 in_nav=True, dark=False, ready=(scanned.get(r["code"]) or {}).get("ready", False))
    for code, f in scanned.items():
        base = code[:-3] if code.endswith("-DK") else code
        if code in frames:
            continue
        parent = frames.get(base, {})
        frames[code] = {
            "code": code, "title": parent.get("title") or f["title"], "node": f["node"],
            "url": lib.node_url(key, slug, f["node"]), "type": parent.get("type") or "",
            "page": f["page"], "final": parent.get("final", False), "todo": False, "removed": False,
            "in_nav": code.endswith("-DK") and base in frames, "dark": code.endswith("-DK"), "ready": f["ready"],
        }
    for code, f in frames.items():
        base = code[:-3] if f["dark"] else code
        role, menu, digits = base.split("-")
        f.update(role=role, menu=menu, route=f"{role}-{menu}-{digits[:2]}", kind=kind_of(base),
                 group=groups.get(f"{role}-{menu}", ""), dark_code=f"{base}-DK" if f"{base}-DK" in frames and not f["dark"] else None)
    return OrderedDict(sorted(frames.items()))


def export_routes(index):
    """Route tree for the FE codebase: 1 route per ROLE-MENU-MM; tabs, popups and states hang under it."""
    routes = OrderedDict()
    for f in index["frames"].values():
        if f["dark"] or f["removed"]:
            continue
        r = routes.setdefault(f["route"], {"route": f["route"], "role": f["role"], "menu": f["menu"],
                                           "group": f["group"], "screens": []})
        dark = index["frames"].get(f["dark_code"] or "", {})
        r["screens"].append({"code": f["code"], "kind": f["kind"], "type": f["type"], "title": f["title"],
                             "figma": f["url"], "figma_dark": dark.get("url"), "final": f["final"],
                             "todo": f["todo"], "ready_for_dev": f["ready"]})
    return list(routes.values())


def run():
    key, slug = lib.FIGMA_FILE_KEY, lib.FIGMA_FILE_SLUG
    session = _session()
    try:
        nav_rows, groups = parse_navigation(fetch_navigation(session, key))
        scanned = scan_frames(fetch_frames(session, key))
    except requests.RequestException as e:
        raise lib.SyncError(f"Lỗi tải dữ liệu Figma: {e}")
    if not nav_rows:
        raise lib.SyncError("Không đọc được dòng nào trong bảng NAVIGATION")
    frames = build(nav_rows, groups, scanned, key, slug)
    index = {"file_key": key, "slug": slug, "updated": datetime.now().strftime("%d/%m/%Y %H:%M"),
             "groups": groups, "frames": frames}
    lib.write_json(lib.INDEX_FILE, index)
    lib.EXPORT_DIR.mkdir(exist_ok=True)
    lib.write_json(lib.EXPORT_DIR / "figma_screens.json", export_routes(index))
    extra = sum(1 for f in frames.values() if not f["in_nav"])
    return (f"Đã sync {len(nav_rows)} mã từ NAVIGATION, {sum(1 for f in frames.values() if f['dark'])} màn Dark"
            + (f", {extra} frame có mã nhưng chưa có trong NAVIGATION" if extra else ""))


if __name__ == "__main__":
    try:
        print(run())
    except lib.SyncError as e:
        sys.exit(str(e))
