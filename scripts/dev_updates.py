"""Per-account "done up to here" checkpoints, and what changed in a doc since a dev's checkpoint.

Marks are per account AND per doc file: a dev marks "done up to here" on one doc, either up to now
or up to one listed change. The doc page then lists every docs commit (with the sections it touched)
and every Figma change after that point, each flagged with whether a sync baseline covers it.
Each mark is kept in a short history so the dev can roll back to the previous one; admins see
every dev's latest mark. Stored in sync/dev_marks.json (personal data, not committed).
"""
import re
import subprocess
from datetime import datetime
from pathlib import Path

import sync_lib as lib

MARKS_FILE = lib.SYNC / "dev_marks.json"
HUNK = re.compile(r"^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@")
HEADING = re.compile(r"^(#{1,6})\s+(.+?)\s*#*\s*$")
SAMPLE, SAMPLE_LEN = 3, 160
KEEP = 20  # marks kept per dev per doc (for rollback)


def _rel(doc):
    rel = Path(doc).as_posix().removeprefix("docs/")
    if not rel.endswith(".md") or not (lib.DOCS / rel).exists():
        raise lib.SyncError(f"Không thấy file {doc}")
    return rel


def _git(rel, *args):
    path = (lib.DOCS / rel).resolve()
    try:
        return subprocess.run(["git", *args], cwd=path.parent, capture_output=True, text=True, check=True).stdout
    except (subprocess.CalledProcessError, FileNotFoundError):
        return ""


def _name(rel):
    return (lib.DOCS / rel).resolve().name


def _commits(rel, since=None, limit=30):
    rng = [f"{since}..HEAD"] if since else []
    out = _git(rel, "log", f"-{limit}", "--date=format:%d/%m/%Y %H:%M", "--pretty=format:%H\x1f%ad\x1f%an\x1f%s",
               *rng, "--", _name(rel))
    rows = []
    for line in filter(None, out.splitlines()):
        sha, date, author, msg = line.split("\x1f", 3)
        rows.append({"sha": sha, "date": date, "who": author, "text": msg})
    return rows


def _headings(text):
    heads, fence = [], False
    for i, line in enumerate(text.splitlines(), 1):
        if line.lstrip().startswith(("```", "~~~")):
            fence = not fence
        m = not fence and HEADING.match(line)
        if m:
            heads.append((i, len(m.group(1)), m.group(2)))
    return heads


def _section(heads, line):
    """Heading path ("2. UI › Bảng") of the section that contains `line`."""
    path = []
    for no, level, title in heads:
        if no > line:
            break
        path = [p for p in path if p[0] < level] + [(level, title)]
    return " › ".join(t for _, t in path[-2:]) or "Đầu tài liệu"


def _short(line):
    line = re.sub(r"<[^>]+>", " ", line).strip(" |-*>#\t")
    line = re.sub(r"\s+", " ", line)
    return line[:SAMPLE_LEN] + ("…" if len(line) > SAMPLE_LEN else "")


def commit_sections(rel, sha):
    """Sections a commit touched, with counts and a few sample lines added / removed."""
    name = _name(rel)
    heads = _headings(_git(rel, "show", f"{sha}:./{name}"))
    diff = _git(rel, "show", "--format=", "-U0", "--no-color", sha, "--", name)
    sections, cur = {}, None
    for line in diff.splitlines():
        m = HUNK.match(line)
        if m:
            cur = sections.setdefault(_section(heads, int(m.group(1)) or 1),
                                      {"added": 0, "removed": 0, "add": [], "del": []})
            continue
        if cur is None or line.startswith(("+++", "---")):
            continue
        kind = "add" if line.startswith("+") else "del" if line.startswith("-") else None
        if not kind:
            continue
        cur["added" if kind == "add" else "removed"] += 1
        text = _short(line[1:])
        if text and len(cur[kind]) < SAMPLE:
            cur[kind].append(text)
    return [dict(v, title=k) for k, v in sections.items()]


def _after(date, ref):
    return ref is None or lib._sort_key({"date": date}) > lib._sort_key({"date": ref})


def _synced_after(date, baselines):
    """First sync baseline set at/after `date` (that baseline confirms docs and Figma matched)."""
    later = [b for b in baselines if not _after(date, b["date"])]
    return min(later, key=lambda b: lib._sort_key(b)) if later else None


def load_marks():
    """{user: {doc rel: [mark, ...]}}, oldest first; the last one is the current mark."""
    marks = lib.read_json(MARKS_FILE, {})
    for docs in marks.values():
        for rel, v in docs.items():
            if isinstance(v, dict):  # old format: a single mark
                docs[rel] = [dict(v, by=v.get("by"), upto=v.get("upto") or v["date"])]
    return marks


def _current(marks, user, rel):
    hist = marks.get(user, {}).get(rel) or []
    return hist[-1] if hist else None


def _now():
    return datetime.now().strftime("%d/%m/%Y %H:%M")


def mark(user, doc, sha=None, upto=None):
    """Mark `doc` done up to now, or up to the commit `sha` / the change dated `upto`."""
    rel = _rel(doc)
    commits = _commits(rel, limit=200)
    if sha:
        hit = next((c for c in commits if c["sha"].startswith(sha)), None)
        if not hit:
            raise lib.SyncError("Không thấy commit này trong lịch sử tài liệu")
        upto, head, docs_hash = hit["date"], hit, None
    elif upto:
        head = next((c for c in commits if not _after(c["date"], upto)), None)
        docs_hash = None
    else:
        upto, head, docs_hash = _now(), commits[0] if commits else None, lib.docs_hash(rel)
    marks = load_marks()
    hist = marks.setdefault(user, {}).setdefault(rel, [])
    hist.append({"date": _now(), "by": user, "upto": upto, "sha": head["sha"] if head else None, "docs_hash": docs_hash})
    del hist[:-KEEP]
    lib.write_json(MARKS_FILE, marks)
    return f"Đã đánh dấu bạn làm tới {upto}"


def rollback(user, doc):
    rel = _rel(doc)
    marks = load_marks()
    hist = marks.get(user, {}).get(rel) or []
    if not hist:
        raise lib.SyncError("Chưa có mốc nào để hoàn tác")
    hist.pop()
    if not hist:
        marks[user].pop(rel)
    lib.write_json(MARKS_FILE, marks)
    return f"Đã quay về mốc {hist[-1]['upto']}" if hist else "Đã xoá mốc, tài liệu về trạng thái chưa đánh dấu"


def _new_items(rel, m, baselines, figma_events):
    """Changes after mark `m` (or the latest few when there is no mark)."""
    commits = _commits(rel, since=m and m.get("sha"), limit=30 if m else 5)
    if m and not m.get("sha"):  # marked before the first commit we know of: everything counts
        commits = _commits(rel, limit=30)
    items = [dict(c, kind="docs", full_sha=c["sha"], sha=c["sha"][:7], synced=_synced_after(c["date"], baselines))
             for c in commits]
    if m and not commits and m.get("docs_hash") and lib.docs_hash(rel) != m["docs_hash"]:
        items.append({"kind": "docs", "date": "", "who": "", "text": "Nội dung đã đổi (chưa có commit git)", "synced": None})
    for ev in figma_events:
        if not m or _after(ev["date"], m["upto"]):
            items.append({"kind": "ui", "date": ev["date"], "who": "Figma", "text": ev.get("text", "Frame thay đổi"),
                          "thumb": ev.get("thumb"), "synced": _synced_after(ev["date"], baselines)})
    return items


def updates(user, doc, admin=False):
    rel = _rel(doc)
    marks = load_marks()
    m = _current(marks, user, rel)
    baselines = (lib.read_json(lib.STATE_FILE, {}).get(rel) or {}).get("log", [])
    figma = lib.read_json(lib.FIGMA_HISTORY_FILE, {}).get(rel, [])
    items = _new_items(rel, m, baselines, figma)
    for it in items:
        if it.get("full_sha"):
            it["sections"] = commit_sections(rel, it.pop("full_sha"))
    for b in baselines:
        if m and _after(b["date"], m["upto"]):
            items.append({"kind": "baseline", "date": b["date"], "who": b["by"], "text": "Đặt mốc đồng bộ docs ↔ Figma"})
    items.sort(key=lambda r: lib._sort_key(r) if r["date"] else "9", reverse=True)
    if not m:
        items = items[:8]
    out = {"mark": m, "history": (marks.get(user, {}).get(rel) or [])[-6:-1][::-1], "items": items,
           "has_figma": bool(lib.doc_frames(rel, lib.doc_meta(rel), lib.load_index()))}
    if admin:
        out["progress"] = progress(rel, marks, baselines, figma)
    return out


def progress(rel, marks, baselines, figma):
    """Latest mark of every dev on this doc and how many changes they are behind."""
    rows = []
    for user, docs in marks.items():
        m = _current(marks, user, rel)
        if m:
            rows.append({"user": user, "mark": m, "behind": len(_new_items(rel, m, baselines, figma))})
    return sorted(rows, key=lambda r: (-r["behind"], r["user"]))


def summary(user):
    """{doc rel path: number of new changes} for docs this user has a mark on."""
    figma = lib.read_json(lib.FIGMA_HISTORY_FILE, {})
    marks = load_marks()
    out = {}
    for rel in marks.get(user, {}):
        if (lib.DOCS / rel).exists():
            out[rel] = len(_new_items(rel, _current(marks, user, rel), [], figma.get(rel, [])))
    return out


def overview(users):
    """Admin: every dev's latest mark on every doc, and how far behind each one is."""
    marks = load_marks()
    state = lib.read_json(lib.STATE_FILE, {})
    figma = lib.read_json(lib.FIGMA_HISTORY_FILE, {})
    rows = []
    for user, docs in marks.items():
        for rel in docs:
            m = _current(marks, user, rel)
            if m and (lib.DOCS / rel).exists():
                baselines = (state.get(rel) or {}).get("log", [])
                rows.append({"user": user, "doc": rel, "mark": m,
                             "behind": len(_new_items(rel, m, baselines, figma.get(rel, [])))})
    devs = sorted(set(u["username"] for u in users if "dev" in u["roles"]) | set(marks))
    return {"devs": devs, "rows": rows}


def doc_marks(doc):
    """Every mark any dev made on this doc (for the history panel), newest first."""
    rel = _rel(doc)
    rows = [{"user": user, "date": m["date"], "upto": m["upto"]}
            for user, docs in load_marks().items() for m in docs.get(rel) or []]
    return sorted(rows, key=lambda r: lib._sort_key(r), reverse=True)
