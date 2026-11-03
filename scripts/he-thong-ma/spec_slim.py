#!/usr/bin/env python3
"""Rút gọn `.figma/pages/<màn>/page-spec.json` (không commit, ~640MB) thành `docs/he-thong-ma/spec-slim/<màn>.json.gz`.

Chỉ giữ những gì registry.py cần để khớp item requirement với layer Figma: id, tên, loại, chữ, component
(set + properties) và cây con. Nhờ đó registry chạy được trên GitHub Actions (không có page-spec.json) và ra
đúng kết quả như trên máy. Chạy lại sau mỗi lần export Figma (figma-page export); không đổi gì thì không ghi.

  spec_slim.py [--work .]
"""
import argparse, glob, gzip, json, os

HERE = os.path.dirname(os.path.abspath(__file__))


def slim(n):
    out = {"id": n["id"], "name": n["name"], "type": n["type"]}
    t = n.get("text")
    if isinstance(t, dict) and t.get("characters") is not None:
        out["text"] = {"characters": t["characters"]}
    comp = n.get("component") or {}
    if comp.get("set") or comp.get("properties"):
        out["component"] = {"set": comp.get("set"), "properties": comp.get("properties") or {}}
    if n.get("children"):
        out["children"] = [slim(c) for c in n["children"]]
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    w = ap.parse_args().work
    dest = f"{w}/docs/he-thong-ma/spec-slim"
    os.makedirs(dest, exist_ok=True)
    wrote = 0
    for path in sorted(glob.glob(f"{w}/.figma/pages/*/page-spec.json")):
        name = os.path.basename(os.path.dirname(path))
        data = json.dumps({"tree": slim(json.load(open(path))["tree"])}, ensure_ascii=False, separators=(",", ":")).encode()
        target = f"{dest}/{name}.json.gz"
        if os.path.exists(target) and gzip.open(target).read() == data:
            continue
        with open(target, "wb") as fh:  # mtime=0: same content gives the same bytes, so git sees no change
            fh.write(gzip.compress(data, mtime=0))
        wrote += 1
    print(wrote, "màn đã ghi bản rút gọn")


if __name__ == "__main__":
    main()
