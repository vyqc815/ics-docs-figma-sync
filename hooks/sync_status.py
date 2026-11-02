"""MkDocs hook: sync status/history per page, tags, clickable screen codes, overview, screen and tag browsers."""
import html as html_lib
import json
import re
import sys
from pathlib import Path

from mkdocs.plugins import event_priority
from mkdocs.structure.files import File

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "scripts"))
import sync_lib as lib  # noqa: E402

SCREENS_MD = """---
title: Màn hình Figma
hide: [toc]
---
# Màn hình Figma

<div id="screen-browser" class="screen-browser"></div>
"""
TAGS_MD = """---
title: Tag
hide: [toc]
---
# Tag

<div id="tag-browser" class="tag-browser"></div>
"""
REVIEW_ORDER = ["both", "ui", "docs", "no_baseline"]
_cache = {}
_index = {}
_backlinks = {}


def _title(rel):
    for line in (lib.DOCS / rel).read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return rel


def on_files(files, config):
    global _index
    _index = lib.load_index()
    central = lib.load_central_meta()
    state = lib.read_json(lib.STATE_FILE, {})
    snapshot = lib.read_json(lib.SNAPSHOT_FILE, {})
    status_map = {}
    _cache.clear()
    _backlinks.clear()
    for f in files.documentation_pages():
        rel = f.src_uri
        meta = lib.doc_meta(rel, central)
        frames = lib.doc_frames(rel, meta, _index)
        file_tags, web_tags = lib.doc_tags(rel, central)
        status = lib.compute_status(rel, frames, state, snapshot)
        names = {n: v.get("name") for n, v in (snapshot.get(rel) or {}).get("frames", {}).items()}
        _cache[rel] = {"meta": meta, "frames": frames, "status": status, "state": state, "names": names,
                       "changed": lib.changed_frames(rel, frames, state, snapshot), "url": f.url,
                       "title": _title(rel), "file_tags": file_tags, "web_tags": web_tags}
        status_map[f.url] = status
        for fr in frames:
            if fr.get("code"):
                _backlinks.setdefault(fr["code"], []).append({"url": f.url, "title": _cache[rel]["title"]})
    if _index.get("frames"):
        files.append(File.generated(config, "figma-screens.md", content=SCREENS_MD))
    files.append(File.generated(config, "tags.md", content=TAGS_MD))
    if not files.get_file_from_path("index.md"):
        files.append(File.generated(config, "index.md", content=home_markdown(state)))
    config.extra["sync_map"] = status_map
    return files


# ---------- Overview page ----------

def _e(text):
    return html_lib.escape(str(text))


def home_markdown(state):
    docs = list(_cache.values())
    stats = [(k, sum(1 for d in docs if d["status"] == k)) for k in REVIEW_ORDER + ["synced", "no_figma"]]
    cards = "".join(
        f'<a class="stat-card card sync-{lib.STATUSES[k]["color"]}" href="#status-{k}">'
        f'<span class="stat-label"><span class="sync-dot"></span>{_e(lib.STATUSES[k]["label"])}</span>'
        f'<span class="stat-value">{n}</span></a>' for k, n in stats)

    review = sorted((d for d in docs if d["status"] in REVIEW_ORDER),
                    key=lambda d: (REVIEW_ORDER.index(d["status"]), d["title"]))
    review_html = "".join(
        f'<li id="status-{d["status"]}"><span class="nav-dot sync-{lib.STATUSES[d["status"]]["color"]}"></span>'
        f'<a href="{_e(d["url"])}">{_e(d["title"])}</a><span class="muted">{_e(lib.STATUSES[d["status"]]["label"])}</span></li>'
        for d in review) or '<li class="muted">Không có tài liệu nào cần review</li>'

    tag_count = {}
    for d in docs:
        for t in d["file_tags"] + d["web_tags"]:
            tag_count[t] = tag_count.get(t, 0) + 1
    tags_html = "".join(f'<a class="tag-chip" href="tags.html#{_e(t)}">#{_e(t)}<span>{n}</span></a>'
                        for t, n in sorted(tag_count.items(), key=lambda x: (-x[1], x[0]))[:30]) \
        or '<span class="muted">Chưa có tag nào</span>'

    frames = [f for f in (_index.get("frames") or {}).values() if not f.get("dark")]
    fig = [("Mã màn hình", len(frames)), ("Final", sum(1 for f in frames if f.get("final"))),
           ("Chưa Final", sum(1 for f in frames if not f.get("final"))),
           ("Chưa làm", sum(1 for f in frames if f.get("todo"))),
           ("Có bản Dark", sum(1 for f in frames if f.get("dark_code")))]
    fig_html = "".join(f'<div class="mini-stat"><span>{_e(k)}</span><strong>{v}</strong></div>' for k, v in fig)

    recent = sorted(((rel, ev) for rel, s in state.items() for ev in s.get("log", [])),
                    key=lambda x: lib._sort_key({"date": x[1]["date"]}), reverse=True)[:8]
    recent_html = "".join(
        f'<li><a href="{_e(_cache[rel]["url"])}">{_e(_cache[rel]["title"])}</a>'
        f'<span class="muted">{_e(ev["date"])} · {_e(ev["by"])}</span></li>'
        for rel, ev in recent if rel in _cache) or '<li class="muted">Chưa có mốc đồng bộ nào</li>'

    return f"""---
title: Tổng quan
hide: [toc]
---
# Tổng quan

<div class="stat-grid">{cards}</div>
<div class="widget-grid">
<section class="widget card widget-wide"><h2>Cần review <span class="pill">{len(review)}</span></h2><ul class="widget-list">{review_html}</ul></section>
<section class="widget card"><h2>Màn hình Figma</h2><div class="mini-stats">{fig_html}</div>
<p><a href="figma-screens.html">Mở danh sách màn hình →</a> <span class="muted">Sync {_e(_index.get("updated") or "chưa có")}</span></p></section>
<section class="widget card"><h2>Tag</h2><div class="tag-cloud">{tags_html}</div><p><a href="tags.html">Xem tất cả tag →</a></p></section>
<section class="widget card"><h2>Đồng bộ gần đây</h2><ul class="widget-list">{recent_html}</ul></section>
</div>
"""


# ---------- Markdown / HTML processing ----------

BLOCK_START = re.compile(r"^\s{0,3}([-*+]\s|\d+[.)]\s|\|)")


def github_like_blocks(markdown):
    """Docs are written for GitHub, where a list/table may follow a paragraph without a blank line."""
    out, in_fence, prev = [], False, ""
    for line in markdown.split("\n"):
        if line.lstrip().startswith(("```", "~~~")):
            in_fence = not in_fence
        starts_block = not in_fence and BLOCK_START.match(line)
        if starts_block and prev.strip() and not BLOCK_START.match(prev) and not prev.startswith(" "):
            out.append("")
        out.append(line)
        prev = line
    return "\n".join(out)


@event_priority(100)
def on_page_markdown(markdown, page, config, files):
    _, markdown = lib.strip_tag_lines(markdown)  # tags are shown as chips, not as a text line
    markdown = github_like_blocks(markdown)
    info = _cache.get(page.file.src_uri)
    if info and info["meta"].get("version") and "version" not in page.meta:
        page.meta["version"] = info["meta"]["version"]
    return markdown


TAG = re.compile(r"(<[^>]+>)")


def linkify_codes(html):
    """Turn known screen codes in text into links that open the frame in the side panel."""
    frames = _index.get("frames") or {}
    if not frames:
        return html
    out, skip = [], 0
    for part in TAG.split(html):
        if part.startswith("<"):
            low = part.lower()
            if low.startswith(("<a ", "<a>", "<pre")):
                skip += 1
            elif low.startswith(("</a", "</pre")):
                skip = max(0, skip - 1)
            out.append(part)
        elif skip:
            out.append(part)
        else:
            out.append(lib.CODE.sub(lambda m: _code_link(m.group(0), frames), part))
    return "".join(out)


def _code_link(code, frames):
    f = frames.get(code)
    if not f:
        return code
    if not f.get("url"):
        return f'<span class="fcode is-missing" title="Chưa có frame trên Figma">{code}</span>'
    title = f["title"].replace('"', "&quot;")
    return f'<a class="fcode" href="{f["url"]}" data-code="{code}" title="{title}">{code}</a>'


def on_page_content(html, page, config, files):
    return linkify_codes(html)


def on_page_context(context, page, config, nav):
    rel = page.file.src_uri
    info = _cache.get(rel)
    if not info:
        return context
    base = info["state"].get(rel) or {}
    frames = []
    for f in info["frames"]:
        name = f["name"] if f["name"] != f["node"] else info["names"].get(f["node"]) or f["node"]
        frames.append(dict(f, name=name, embed=lib.figma_embed_url(f["url"]),
                           changed=f["node"] in info["changed"]))
    page.sync = {
        "status": info["status"],
        "label": lib.STATUSES[info["status"]]["label"],
        "color": lib.STATUSES[info["status"]]["color"],
        "frames": frames,
        "baseline": base.get("log", [None])[-1] if base.get("log") else None,
        "history": lib.full_history(rel, info["state"]),
        "path": "docs/" + rel,
        "file_tags": info["file_tags"],
        "web_tags": info["web_tags"],
    }
    return context


def on_post_build(config):
    """Data files for the screen browser and the tag browser."""
    assets = Path(config.site_dir) / "assets"
    assets.mkdir(parents=True, exist_ok=True)
    keys = ("code", "title", "kind", "type", "route", "role", "menu", "group", "page", "url",
            "final", "todo", "removed", "in_nav", "dark", "dark_code", "ready")
    frames = [dict({k: f.get(k) for k in keys}, embed=lib.figma_embed_url(f["url"]) if f.get("url") else None,
                   docs=_backlinks.get(f["code"], []))
              for f in (_index.get("frames") or {}).values()]
    data = {"groups": _index.get("groups", {}), "updated": _index.get("updated"), "frames": frames}
    (assets / "figma_index.json").write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
    docs = [{"url": d["url"], "title": d["title"], "status": d["status"], "file_tags": d["file_tags"],
             "web_tags": d["web_tags"]} for d in _cache.values()]
    (assets / "tags.json").write_text(json.dumps({"docs": docs}, ensure_ascii=False), encoding="utf-8")
