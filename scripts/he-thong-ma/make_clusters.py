#!/usr/bin/env python3
"""Fill clusters.json so every Figma screen belongs to a cluster registry.py can build.

  - one cluster per requirement file: the screens it maps to, plus their popups, states and dropdowns;
  - main screens no requirement covers: one cluster per code family (CD-KH-07, ADM-LOP-02 ...).
Hand-written clusters (no "auto": true) are kept as they are; their requirement files and screens are skipped.

  make_clusters.py [--work .]
"""
import argparse, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    args = ap.parse_args()
    path = f"{args.work}/docs/he-thong-ma/clusters.json"
    doc = json.load(open(path))
    manual = [c for c in doc["clusters"] if not c.get("auto")]
    reqmap = json.load(open(f"{args.work}/docs/requirements-map.json"))["requirements"]
    frames = json.load(open(f"{args.work}/docs/he-thong-ma/figma-frames.json"))["frames"]

    taken_files = {f for c in manual for f in c.get("requirements", [])}
    taken = {code for code in frames for c in manual if re.match(c["screens"], code)}
    subs = [c for c, f in frames.items() if f["loai"] in ("popup", "trang-thai", "dropdown")]

    def with_children(mains):
        out = set(mains)
        for c in subs:
            f = frames[c]
            if f.get("parent") in out or f.get("manHienThi") in out:
                out.add(c)
        return out

    def regex(codes):
        return "^(" + "|".join(re.escape(c) for c in sorted(codes)) + ")$"

    auto, covered = [], set()
    for rel, r in sorted(reqmap.items()):
        screens = [s for s in r.get("screens", []) if s not in taken]
        if rel in taken_files or not screens:
            continue
        codes = with_children(screens)
        covered |= codes
        auto.append({"name": slug(rel[:-3].split("/")[-1]), "title": r.get("title") or rel, "screens": regex(codes),
                     "requirements": [rel], "auto": True})

    family = lambda c: re.match(r"^[A-Z]+-[A-Z]+-\d\d", c)[0]
    rest = [c for c, f in frames.items() if f["loai"] == "man-chinh" and c not in covered and c not in taken]
    families = {}
    for c in rest:
        families.setdefault(family(c), set()).add(c)
    for fam in families:
        families[fam] = with_children(families[fam]) - covered - taken
    # popups and states with no known parent still need a home: their code family
    placed = covered | taken | {c for codes in families.values() for c in codes}
    for c in subs:
        if c not in placed:
            families.setdefault(family(c), set()).add(c)
    for fam, codes in sorted(families.items()):
        auto.append({"name": "chua-co-req-" + fam.lower(), "title": f"{fam}xx (chưa có requirement)", "screens": regex(codes),
                     "requirements": [], "prefix_figma": fam, "auto": True})

    names = [c["name"] for c in manual + auto]
    dup = {n for n in names if names.count(n) > 1}
    for c in auto:  # two requirement files with the same stem
        if c["name"] in dup:
            c["name"] = slug(c["requirements"][0][:-3]) if c["requirements"] else c["name"]
    doc["clusters"] = manual + auto
    json.dump(doc, open(path, "w"), ensure_ascii=False, indent=1)
    print(f"{len(manual)} cụm viết tay, {len(auto)} cụm tự tạo")


if __name__ == "__main__":
    main()
