"""MkDocs hook: sync status/history per page, clickable screen codes, and the Figma screen browser."""
import json
import re
import sys
from pathlib import Path

from mkdocs.plugins import event_priority
from mkdocs.structure.files import File

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "scripts"))
import sync_lib as lib  # noqa: E402

SCREENS_PAGE = "figma-screens.md"
SCREENS_MD = """---
title: Màn hình Figma
hide: [toc]
---
# Màn hình Figma

<div id="screen-browser" class="screen-browser"></div>
"""
def home_markdown(pages):
    """Overview: docs grouped by sync status, the ones needing review first."""
    order = ["both", "ui", "docs", "no_baseline", "synced"]
    lines = ["---", "title: Tổng quan", "hide: [toc]", "---", "# Tổng quan", ""]
    counts = {k: sum(1 for p in pages if p[2] == k) for k in order}
    lines.append(" · ".join(f"**{lib.STATUSES[k]['label']}**: {counts[k]}" for k in order))
    for k in order:
        items = [p for p in pages if p[2] == k]
        if not items:
            continue
        lines += ["", f"## {lib.STATUSES[k]['label']} ({len(items)})", ""]
        lines += [f"- [{title}]({rel})" for rel, title, _ in sorted(items)]
    lines += ["", f"{sum(1 for p in pages if p[2] == 'no_figma')} tài liệu chưa ghi mã màn hình nào."]
    return "\n".join(lines) + "\n"


def _title(rel):
    for line in (lib.DOCS / rel).read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return rel
_cache = {}
_index = {}
_backlinks = {}


def on_files(files, config):
    global _index
    _index = lib.load_index()
    central = lib.load_central_meta()
    state = lib.read_json(lib.STATE_FILE, {})
    snapshot = lib.read_json(lib.SNAPSHOT_FILE, {})
    status_map = {}
    _backlinks.clear()
    for f in files.documentation_pages():
        rel = f.src_uri
        meta = lib.doc_meta(rel, central)
        frames = lib.doc_frames(rel, meta, _index)
        status = lib.compute_status(rel, frames, state, snapshot)
        names = {n: v.get("name") for n, v in (snapshot.get(rel) or {}).get("frames", {}).items()}
        _cache[rel] = {"meta": meta, "frames": frames, "status": status, "state": state, "names": names,
                       "changed": lib.changed_frames(rel, frames, state, snapshot)}
        status_map[f.url] = status
        for fr in frames:
            if fr.get("code"):
                _backlinks.setdefault(fr["code"], []).append({"url": f.url, "title": rel})
    if _index.get("frames"):
        files.append(File.generated(config, SCREENS_PAGE, content=SCREENS_MD))
    if not files.get_file_from_path("index.md"):
        pages = [(rel, _title(rel), c["status"]) for rel, c in _cache.items() if c["status"] != "no_figma"]
        pages += [(rel, rel, "no_figma") for rel, c in _cache.items() if c["status"] == "no_figma"]
        files.append(File.generated(config, "index.md", content=home_markdown(pages)))
    config.extra["sync_map"] = status_map
    return files


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
    markdown = github_like_blocks(markdown)
    info = _cache.get(page.file.src_uri)
    if info:
        for key in ("tags", "version"):
            if info["meta"].get(key) and key not in page.meta:
                page.meta[key] = info["meta"][key]
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
    }
    return context


def on_post_build(config):
    """Slim index for the in-browser screen browser and code links."""
    keys = ("code", "title", "kind", "type", "route", "role", "menu", "group", "page", "url",
            "final", "todo", "removed", "in_nav", "dark", "dark_code", "ready")
    frames = []
    for f in (_index.get("frames") or {}).values():
        frames.append(dict({k: f.get(k) for k in keys}, embed=lib.figma_embed_url(f["url"]) if f.get("url") else None,
                           docs=_backlinks.get(f["code"], [])))
    data = {"groups": _index.get("groups", {}), "updated": _index.get("updated"), "frames": frames}
    out = Path(config.site_dir) / "assets" / "figma_index.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
