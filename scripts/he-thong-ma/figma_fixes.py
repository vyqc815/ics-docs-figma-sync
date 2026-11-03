#!/usr/bin/env python3
"""Việc design cần làm trên Figma để khớp requirement (requirement là chuẩn).

Đọc mọi `docs/he-thong-ma/*.registry.json`, gom:
  - ghi chú "Khác Figma" QC viết trong requirement;
  - item requirement ghi cần bổ sung mà tool chưa thấy trên màn đã sync;
  - khu vực requirement ghi "UI cần bổ sung" chưa có item nào ở trên.
Ra `danh-sach-sua-figma.md` + `.json`. Không ghi gì lên Figma.

  figma_fixes.py [--work .]
"""
import argparse, glob, json, os

HERE = os.path.dirname(os.path.abspath(__file__))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    args = ap.parse_args()
    base = f"{args.work}/docs/he-thong-ma"
    frames_doc = json.load(open(f"{base}/figma-frames.json"))
    frames, file_key = frames_doc["frames"], frames_doc["fileKey"]

    def link(code):
        f = frames.get(code.upper())
        return f"https://www.figma.com/design/{file_key}/?node-id={f['id'].replace(':', '-')}" if f else None

    fixes = []
    for path in sorted(glob.glob(f"{base}/*.registry.json")):
        R = json.load(open(path))
        for r in R["regions"]:
            screens = [s.upper() for s in r["screens"]]
            for note in r.get("figmaDiffNotes", []):
                fixes.append({"cluster": R["cluster"], "clusterTitle": R["title"], "region": r["id"], "regionTitle": r["title"],
                              "screens": screens, "kind": "khac-figma", "requirement": r.get("requirement"),
                              "item": None, "text": note})
            missing = [i for i in r["items"] if i["status"] == "chua-co-thiet-ke"]
            for i in missing:
                fixes.append({"cluster": R["cluster"], "clusterTitle": R["title"], "region": r["id"], "regionTitle": r["title"],
                              "screens": screens, "kind": "thieu-thiet-ke", "requirement": r.get("requirement"),
                              "item": i["id"], "text": f"Thêm `{i['label']}`" + (f": {i['spec']}" if i["spec"] else "")})
            if r.get("needsDesign") and not missing:
                fixes.append({"cluster": R["cluster"], "clusterTitle": R["title"], "region": r["id"], "regionTitle": r["title"],
                              "screens": screens, "kind": "khu-vuc-can-bo-sung", "requirement": r.get("requirement"),
                              "item": None, "text": "Requirement ghi khu vực này \"UI cần bổ sung\"; vẽ theo bảng item của khu vực."})
    for n, f in enumerate(fixes, 1):
        f["id"] = f"FIX-{n:03d}"
        f["links"] = {s: link(s) for s in f["screens"]}

    json.dump({"note": "Requirement là chuẩn; design sửa Figma theo danh sách này. Sinh từ registry.", "fixes": fixes},
              open(f"{base}/danh-sach-sua-figma.json", "w"), ensure_ascii=False, indent=1)

    KIND = {"khac-figma": "Figma khác requirement", "thieu-thiet-ke": "Chưa có thiết kế",
            "khu-vuc-can-bo-sung": "Khu vực cần bổ sung"}
    esc = lambda s: str(s).replace("|", "\\|").replace("\n", " ")
    count = {k: sum(1 for f in fixes if f["kind"] == k) for k in KIND}
    L = ["# Danh sách sửa Figma theo requirement", "",
         "> Requirement của QC là chuẩn. Mỗi dòng là một việc design làm trên Figma. Sinh từ registry "
         "(`scripts/he-thong-ma/figma_fixes.py`), không ghi gì lên Figma.", "",
         "Trước khi sửa, design xem requirement còn đúng không: nhiều ghi chú \"Khác Figma\" và \"UI cần bổ sung\" "
         "viết từ bản Figma cũ. Ghi chú đã cũ thì báo QC xoá, không sửa Figma. "
         "Dòng *Chưa có thiết kế* là chỗ tool chưa thấy trên màn đã sync; nếu nó nằm trong popup chưa sync thì có thể đã có.", "",
         "| Loại | Số việc |", "|---|---:|"] + [f"| {KIND[k]} | {v} |" for k, v in count.items()] + [""]
    by_cluster = {}
    for f in fixes:
        by_cluster.setdefault((f["cluster"], f["clusterTitle"]), []).append(f)
    for (name, title), fs in by_cluster.items():
        L += [f"## {title}", "", f"Cụm `{name}` · MD: `docs/he-thong-ma/{name}.md`", "",
              "| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |", "|---|---|---|---|---|---|"]
        for f in fs:
            scr = ", ".join(f"[{s}]({u})" if u else s for s, u in f["links"].items()) or "chưa gắn màn"
            where = f"`{f['region'].split('.', 1)[-1]}` {esc(f['regionTitle'])[:50]}" + (f" · `{f['item'].split('.', 1)[-1]}`" if f["item"] else "")
            L.append(f"| {f['id']} | {scr} | {where} | {KIND[f['kind']]} | {esc(f['text'])[:400]} | ☐ |")
        L.append("")
    open(f"{base}/danh-sach-sua-figma.md", "w", encoding="utf-8").write("\n".join(L))
    print(len(fixes), count)


if __name__ == "__main__":
    main()
