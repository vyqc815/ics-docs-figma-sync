#!/usr/bin/env python3
"""Sinh `docs/he-thong-ma/qc-index.json`: mục lục cho web QC Hub (/hub): danh sách file requirement, trang, mã màn.

Mỗi file requirement: đường dẫn, tiền tố mã, tên, các trang (số, tên, mã màn), ảnh gốc kèm theo;
cùng danh sách file dữ liệu hệ thống mã (registry, frame, mã dự kiến, khoá mã).
`version` là mã băm nội dung; `generatedAt` chỉ đổi khi `version` đổi, web QC so `version` để biết có bản mới. cap_nhat_requirement.py chạy lại file này.

  qc_index.py [--work .]
"""
import argparse, datetime, glob, hashlib, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
CODE = r"[A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}"
IMAGE = re.compile(r"!\[[^\]]*\]\((?!https?:)([^)\s]+)\)")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    w = ap.parse_args().work
    req, sys_dir = f"{w}/docs/requirements", f"{w}/docs/he-thong-ma"
    prefix = {}
    for f in glob.glob(f"{sys_dir}/*.registry.json"):
        for rf in json.load(open(f)).get("requirementFiles", []):
            prefix[rf["file"]] = {"prefix": rf["prefix"], "registry": f"he-thong-ma/{os.path.basename(f)}"}
    files = []
    for path in sorted(glob.glob(f"{req}/**/*.md", recursive=True)):
        rel = os.path.relpath(path, req)
        text = open(path, encoding="utf-8").read()
        pages = [{"no": int(m[1]), "title": m[3].strip(), "screens": re.findall(CODE, m[2] or "")}
                 for m in re.finditer(r"^### Trang (\d+): (?:(.*?) — )?(.*)$", text, re.M)]
        images = sorted({os.path.normpath(os.path.join(os.path.dirname(rel), i)) for i in IMAGE.findall(text)})
        files.append({"path": f"requirements/{rel}", "title": text.split("\n", 1)[0].lstrip("# ").strip(),
                      **prefix.get(rel, {"prefix": "", "registry": None}),
                      "screens": sorted({c for p in pages for c in p["screens"]}),
                      "pages": pages, "images": [f"requirements/{i}" for i in images]})
    data = {name: f"he-thong-ma/{name}" for name in
            ("figma-frames.json", "ma-du-kien.json", "khoa-ma.json", "clusters.json", "quy-uoc-web-qc.md")}
    # version = hash of every served file: generatedAt only moves when something QC reads really changed
    h = hashlib.sha256()
    for path in sorted(glob.glob(f"{req}/**/*", recursive=True) + glob.glob(f"{sys_dir}/*.json") + glob.glob(f"{sys_dir}/*.md")):
        if os.path.isfile(path) and not path.endswith("qc-index.json"):
            h.update(path[len(w):].encode() + open(path, "rb").read())
    version = h.hexdigest()[:16]
    index_path = f"{sys_dir}/qc-index.json"
    old = json.load(open(index_path)) if os.path.exists(index_path) else {}
    out = {"version": version,
           "generatedAt": old["generatedAt"] if old.get("version") == version else
           datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
           "liveImage": "https://ics-figma-demo.vercel.app/api/figma-frame/{code}.png",
           "files": files, "data": data,
           "registries": sorted(f"he-thong-ma/{os.path.basename(f)}" for f in glob.glob(f"{sys_dir}/*.registry.json"))}
    with open(index_path, "w", encoding="utf-8") as fh:
        json.dump(out, fh, ensure_ascii=False, indent=1)
        fh.write("\n")
    print(len(files), "file requirement trong mục lục")


if __name__ == "__main__":
    main()
