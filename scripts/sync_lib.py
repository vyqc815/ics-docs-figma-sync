"""Shared logic: doc metadata, fingerprints, sync status, history.

Sync status is NOT decided by timestamps. When a reviewer confirms docs and
Figma match, we store a baseline (docs body hash + Figma node hash). Status is
the comparison of the current state against that baseline.
"""
import hashlib
import json
import os
import re
import subprocess
from pathlib import Path
from urllib.parse import parse_qs, quote, urlparse

import yaml

ROOT = Path(__file__).resolve().parent.parent


def load_dotenv(path=ROOT / ".env"):
    """Read KEY=VALUE lines from .env (gitignored) without overriding variables already set."""
    if not path.exists():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        key, sep, value = line.strip().partition("=")
        if sep and key and not key.startswith("#"):
            os.environ.setdefault(key.strip(), value.strip().strip("'\""))


load_dotenv()
DOCS = ROOT / "docs"
SYNC = ROOT / "sync"
META_FILE = SYNC / "docs_meta.yml"
STATE_FILE = SYNC / "state.json"
SNAPSHOT_FILE = SYNC / "figma_snapshot.json"
FIGMA_HISTORY_FILE = SYNC / "figma_history.json"
INDEX_FILE = SYNC / "figma_index.json"
EXPORT_DIR = SYNC / "export"
CONFIG = yaml.safe_load((SYNC / "config.yml").read_text(encoding="utf-8")) if (SYNC / "config.yml").exists() else {}
FIGMA_FILE_KEY = CONFIG.get("figma_file_key")
FIGMA_FILE_SLUG = CONFIG.get("figma_file_slug", "file")
NAV_NODE = CONFIG.get("navigation_node")

CODE = re.compile(r"\b([A-Z]{2,4}-[A-Z]{2,5})-(\d{6})(-DK)?\b")  # -DK = dark-mode frame
CODE_RANGE = re.compile(r"\b([A-Z]{2,4}-[A-Z]{2,5})-(\d{6})`?\s*(?:–|—|→|->|đến)\s*`?(?:[A-Z]{2,4}-[A-Z]{2,5}-)?(\d{6})\b")
SHORT_CODE = re.compile(r"`(\d{6})`")


class SyncError(Exception):
    pass

FRONTMATTER = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.S)

STATUSES = {
    "synced": {"label": "Đồng bộ", "color": "green"},
    "docs": {"label": "Docs đổi, UI chưa cập nhật", "color": "orange"},
    "ui": {"label": "UI đổi, docs chưa cập nhật", "color": "blue"},
    "both": {"label": "Cả hai đổi, cần review lại", "color": "red"},
    "no_baseline": {"label": "Chưa có mốc đồng bộ", "color": "gray"},
    "no_figma": {"label": "Chưa gắn Figma", "color": "none"},
}
NEEDS_REVIEW = {"docs", "ui", "both", "no_baseline"}


def read_json(path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return default


def write_json(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def split_frontmatter(text):
    m = FRONTMATTER.match(text)
    if not m:
        return {}, text
    return yaml.safe_load(m.group(1)) or {}, text[m.end():]


def load_central_meta():
    if not META_FILE.exists():
        return {}
    return yaml.safe_load(META_FILE.read_text(encoding="utf-8")) or {}


def doc_meta(rel_path, central=None):
    """Frontmatter wins over sync/docs_meta.yml (central file keeps source docs untouched)."""
    central = load_central_meta() if central is None else central
    front, _ = split_frontmatter((DOCS / rel_path).read_text(encoding="utf-8"))
    merged = dict(central.get(rel_path) or {})
    merged.update(front)
    return merged


def docs_hash(rel_path):
    _, body = split_frontmatter((DOCS / rel_path).read_text(encoding="utf-8"))
    return hashlib.sha256(body.strip().encode("utf-8")).hexdigest()[:16]


def parse_figma_url(url):
    """Return (file_key, node_id) from a figma.com/design|file URL."""
    parsed = urlparse(url)
    parts = parsed.path.strip("/").split("/")
    file_key = parts[1] if len(parts) > 1 else None
    node = parse_qs(parsed.query).get("node-id", [None])[0]
    return file_key, node.replace("-", ":") if node else None


def figma_frames(meta):
    """Normalize `figma:` (a URL, a list of URLs, or a list of {url, name}) to [{url, node, name}]."""
    raw = meta.get("figma") or []
    if isinstance(raw, (str, dict)):
        raw = [raw]
    frames = []
    for item in raw:
        url = item if isinstance(item, str) else item.get("url")
        if not url:
            continue
        key, node = parse_figma_url(url)
        name = None if isinstance(item, str) else item.get("name")
        frames.append({"url": url, "file_key": key, "node": node, "name": name or node})
    return frames


def node_url(file_key, slug, node_id):
    return f"https://www.figma.com/design/{file_key}/{slug}?node-id={node_id.replace(':', '-')}"


def load_index():
    return read_json(INDEX_FILE, {"frames": {}, "roles": {}, "menus": {}})


def codes_in_text(text, known):
    """Codes a doc mentions: full codes, ranges (`A-B-030301`–`030305`), short `030302` after a full code."""
    found = []
    for line in text.splitlines():
        for prefix, start, end in CODE_RANGE.findall(line):
            lo, hi = sorted((int(start), int(end)))
            found += [c for c in known if not c.endswith("-DK") and c.rpartition("-")[0] == prefix
                      and lo <= int(c[-6:]) <= hi]
        full = CODE.findall(line)
        found += [f"{p}-{n}{dk}" for p, n, dk in full]
        if full:
            found += [f"{full[0][0]}-{n}" for n in SHORT_CODE.findall(line)]
    return list(dict.fromkeys(found))


def doc_frames(rel_path, meta, index):
    """Frames of a doc = codes written in the doc (resolved via the Figma index) + manual `figma:` links."""
    frames, seen, codes = [], set(), set()
    text = (DOCS / rel_path).read_text(encoding="utf-8")
    for code in codes_in_text(text, index["frames"]):
        f = index["frames"].get(code)
        if f and f.get("node") and f["node"] not in seen:
            seen.add(f["node"])
            codes.add(code)
            frames.append({"url": f["url"], "node": f["node"], "name": f"{code} — {f['title']}",
                           "code": code, "kind": f["kind"], "file_key": index.get("file_key")})
    for f in figma_frames(meta):
        m = CODE.search(f["name"] or "")
        if m and m.group(0) in codes:
            continue  # already resolved from the doc's codes
        if f["node"] not in seen:
            seen.add(f["node"])
            frames.append(f)
    return frames


def combined_hash(frame_hashes):
    joined = ",".join(f"{k}={v}" for k, v in sorted(frame_hashes.items()))
    return hashlib.sha256(joined.encode()).hexdigest()[:16]


def current_frame_hashes(rel_path, frames, snapshot):
    snap = (snapshot.get(rel_path) or {}).get("frames", {})
    return {f["node"]: snap[f["node"]]["hash"] for f in frames if f["node"] in snap}


def figma_embed_url(url):
    """Embed URL without theme; the page adds &theme=light|dark to follow the site's color scheme."""
    parsed = urlparse(url)
    node = parse_qs(parsed.query).get("node-id", [""])[0]
    return f"https://embed.figma.com{parsed.path}?node-id={quote(node)}&embed-host=ics-docs-figma-sync"


def compute_status(rel_path, frames, state, snapshot):
    if not frames:
        return "no_figma"
    base = state.get(rel_path)
    if not base:
        return "no_baseline"
    docs_changed = docs_hash(rel_path) != base.get("docs_hash")
    current = current_frame_hashes(rel_path, frames, snapshot)
    ui_changed = bool(current) and combined_hash(current) != base.get("figma_hash")
    if docs_changed and ui_changed:
        return "both"
    if docs_changed:
        return "docs"
    if ui_changed:
        return "ui"
    return "synced"


def changed_frames(rel_path, frames, state, snapshot):
    """Nodes whose hash differs from the baseline (new frames count as changed)."""
    base = (state.get(rel_path) or {}).get("frames", {})
    current = current_frame_hashes(rel_path, frames, snapshot)
    return {node for node, h in current.items() if base.get(node) != h} if state.get(rel_path) else set()


def git_history(rel_path, limit=15):
    path = (DOCS / rel_path).resolve()
    try:
        out = subprocess.run(
            ["git", "log", f"-{limit}", "--date=format:%d/%m/%Y %H:%M",
             "--pretty=format:%ad\x1f%an\x1f%s", "--", path.name],
            cwd=path.parent, capture_output=True, text=True, check=True,
        ).stdout
    except (subprocess.CalledProcessError, FileNotFoundError):
        return []
    rows = []
    for line in filter(None, out.splitlines()):
        date, author, msg = line.split("\x1f", 2)
        rows.append({"kind": "docs", "date": date, "who": author, "text": msg})
    return rows


def _sort_key(row):
    d, _, t = row["date"].partition(" ")
    day, month, year = d.split("/")
    return f"{year}{month}{day}{t}"


def full_history(rel_path, state):
    rows = git_history(rel_path)
    for ev in read_json(FIGMA_HISTORY_FILE, {}).get(rel_path, []):
        rows.append({"kind": "ui", "date": ev["date"], "who": "Figma",
                     "text": ev.get("text", "Frame thay đổi"), "thumb": ev.get("thumb")})
    for ev in (state.get(rel_path) or {}).get("log", []):
        rows.append({"kind": "baseline", "date": ev["date"], "who": ev["by"],
                     "text": "Mốc đồng bộ"})
    return sorted(rows, key=_sort_key, reverse=True)


def prune_deleted_docs():
    """Drop sync data of docs that no longer exist, so deleted files leave nothing behind."""
    existing = {p.relative_to(DOCS).as_posix() for p in DOCS.rglob("*.md")}
    removed = set()
    for path in (STATE_FILE, SNAPSHOT_FILE, FIGMA_HISTORY_FILE):
        data = read_json(path, {})
        gone = [k for k in data if k not in existing]
        for k in gone:
            data.pop(k)
        if gone:
            write_json(path, data)
            removed.update(gone)
    if META_FILE.exists():
        raw = META_FILE.read_text(encoding="utf-8")
        meta = yaml.safe_load(raw) or {}
        gone = [k for k in meta if k not in existing]
        if gone:
            for k in gone:
                meta.pop(k)
            write_central_meta(meta)
            removed.update(gone)
    return sorted(removed)


def docs_repo():
    """Git repo that holds the docs folder (docs/ is a symlink into the FE repo)."""
    return DOCS.resolve()


# ---------- Tags ----------
# In a doc:  frontmatter `tags: [lop-hoc, giao-vien]`  or a line  `Tags: #lop-hoc #giao-vien`
# On the web: stored in sync/docs_meta.yml (`tags:`), editable by admins.
TAG_LINE = re.compile(r"^[ \t>]*(?:\*\*)?(?:tags?|thẻ)(?:\*\*)?[ \t]*:[ \t]*(#[^\n]*)$", re.I | re.M)
HASHTAG = re.compile(r"#([^\s#,]+)")


def normalize_tag(tag):
    return re.sub(r"\s+", "-", str(tag).strip().lstrip("#").lower())


def _unique(tags):
    return [t for t in dict.fromkeys(normalize_tag(t) for t in tags) if t]


def strip_tag_lines(body):
    """Tags found on `Tags: #a #b` lines, and the body without those lines."""
    tags = [t for m in TAG_LINE.finditer(body) for t in HASHTAG.findall(m.group(1))]
    return _unique(tags), TAG_LINE.sub("", body)


def doc_tags(rel_path, central=None):
    """(tags written in the doc file, tags added on the web)."""
    central = load_central_meta() if central is None else central
    front, body = split_frontmatter((DOCS / rel_path).read_text(encoding="utf-8"))
    front_tags = front.get("tags") or []
    in_file = _unique((front_tags if isinstance(front_tags, list) else [front_tags]) + strip_tag_lines(body)[0])
    web = _unique((central.get(rel_path) or {}).get("tags") or [])
    return in_file, [t for t in web if t not in in_file]


def write_central_meta(meta):
    raw = META_FILE.read_text(encoding="utf-8") if META_FILE.exists() else ""
    header = "".join(l + "\n" for l in raw.splitlines() if l.startswith("#"))
    META_FILE.write_text(header + "\n" + yaml.safe_dump(meta, allow_unicode=True, sort_keys=True, width=200),
                         encoding="utf-8")


def set_web_tags(doc, tags):
    rel = Path(doc).as_posix().removeprefix("docs/")
    if not (DOCS / rel).exists():
        raise SyncError(f"Không thấy file {doc}")
    meta = load_central_meta()
    entry = meta.setdefault(rel, {}) or {}
    meta[rel] = entry
    clean = _unique(tags or [])
    if any(len(t) > 40 for t in clean):
        raise SyncError("Tag dài tối đa 40 ký tự")
    if clean:
        entry["tags"] = clean
    else:
        entry.pop("tags", None)
        if not entry:
            meta.pop(rel)
    write_central_meta(meta)
    return f"Đã lưu {len(clean)} tag" if clean else "Đã xoá tag gắn trên web"


def figma_get(session, url, params=None, timeout=120, retries=3, max_wait=90):
    """GET the Figma API, waiting out 429 rate limits (Retry-After) a few times before giving up."""
    import time
    for attempt in range(retries + 1):
        r = session.get(url, params=params, timeout=timeout)
        if r.status_code != 429:
            r.raise_for_status()
            return r
        wait = int(r.headers.get("Retry-After") or 0) or 10 * 2 ** attempt
        if attempt == retries or wait > max_wait:
            mins = max(1, round(wait / 60))
            raise SyncError(f"Figma đang giới hạn số lần gọi API (429). Thử lại sau khoảng {mins} phút.")
        time.sleep(wait)
