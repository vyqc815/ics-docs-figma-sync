"""Poll Figma for every doc that has a `figma:` link; record a hash per frame.

Usage:  FIGMA_TOKEN=xxx python scripts/figma_check.py [--thumbs]
A frame whose hash differs from the previous run gets a history entry
(and, with --thumbs, a PNG link of the new version for before/after compare).
"""
import argparse
import hashlib
import json
import os
import sys
from collections import defaultdict
from datetime import datetime

import requests

import sync_lib as lib

API = "https://api.figma.com/v1"
VOLATILE = {"absoluteRenderBounds", "transitionNodeID", "prototypeStartNodeID"}


def stable(node):
    if isinstance(node, dict):
        return {k: stable(v) for k, v in sorted(node.items()) if k not in VOLATILE}
    if isinstance(node, list):
        return [stable(v) for v in node]
    return node


def fetch_nodes(session, file_key, node_ids, batch=50):
    ids = sorted(set(node_ids))
    merged = {"nodes": {}}
    for i in range(0, len(ids), batch):
        r = session.get(f"{API}/files/{file_key}/nodes", params={"ids": ",".join(ids[i:i + batch])}, timeout=120)
        r.raise_for_status()
        data = r.json()
        merged["nodes"].update(data.get("nodes") or {})
        merged["lastModified"] = data.get("lastModified")
    return merged


def fetch_thumbs(session, file_key, node_ids):
    r = session.get(f"{API}/images/{file_key}", params={"ids": ",".join(node_ids), "format": "png", "scale": 1}, timeout=60)
    r.raise_for_status()
    return r.json().get("images", {})


def collect_targets():
    central = lib.load_central_meta()
    index = lib.load_index()
    targets = defaultdict(list)  # file_key -> [(doc, node_id, url)]
    for path in sorted(lib.DOCS.rglob("*.md")):
        rel = path.relative_to(lib.DOCS).as_posix()
        for f in lib.doc_frames(rel, lib.doc_meta(rel, central), index):
            if f["file_key"] and f["node"]:
                targets[f["file_key"]].append((rel, f["node"]))
            else:
                print(f"[figma] Bỏ qua link thiếu node-id trong {rel}: {f['url']}", file=sys.stderr)
    return targets


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--thumbs", action="store_true", help="lưu link ảnh PNG của frame khi có thay đổi")
    args = ap.parse_args()
    try:
        print(run(args.thumbs))
    except lib.SyncError as e:
        sys.exit(str(e))


def run(thumbs=True):
    token = os.environ.get("FIGMA_TOKEN")
    if not token:
        raise lib.SyncError("Thiếu biến môi trường FIGMA_TOKEN")

    session = requests.Session()
    session.headers["X-Figma-Token"] = token
    snapshot = lib.read_json(lib.SNAPSHOT_FILE, {})
    history = lib.read_json(lib.FIGMA_HISTORY_FILE, {})
    now = datetime.now().strftime("%d/%m/%Y %H:%M")
    changed = checked = 0
    targets = collect_targets()
    if not targets:
        raise lib.SyncError("Chưa có tài liệu nào gắn mã hoặc link Figma, không có gì để kiểm tra")

    for file_key, items in targets.items():
        try:
            data = fetch_nodes(session, file_key, [n for _, n in items])
        except requests.RequestException as e:
            print(f"[figma] Lỗi file {file_key}: {e}", file=sys.stderr)
            continue
        changed_nodes = []
        for rel, node in items:
            entry = (data.get("nodes") or {}).get(node)
            if not entry:
                print(f"[figma] Không thấy node {node} cho {rel}", file=sys.stderr)
                continue
            doc = entry["document"]
            h = hashlib.sha256(json.dumps(stable(doc), sort_keys=True).encode()).hexdigest()[:16]
            snap = snapshot.get(rel) or {}
            if "frames" not in snap:  # older single-frame format
                snap = {"frames": {}}
            prev = snap["frames"].get(node, {}).get("hash")
            checked += 1
            snap["frames"][node] = {"hash": h, "name": doc.get("name"), "type": doc.get("type")}
            snap["checked"] = now
            snapshot[rel] = snap
            if prev and prev != h:
                event = {"date": now, "hash": h, "node": node, "text": f'Frame "{doc.get("name")}" thay đổi'}
                history.setdefault(rel, []).append(event)
                changed_nodes.append((node, event))
        if thumbs and changed_nodes:
            images = fetch_thumbs(session, file_key, sorted({n for n, _ in changed_nodes}))
            for node, event in changed_nodes:
                event["thumb"] = images.get(node)
        changed += len(changed_nodes)

    lib.write_json(lib.SNAPSHOT_FILE, snapshot)
    lib.write_json(lib.FIGMA_HISTORY_FILE, history)
    return f"Đã kiểm tra {checked} frame, {changed} frame thay đổi so với lần trước"


if __name__ == "__main__":
    main()
