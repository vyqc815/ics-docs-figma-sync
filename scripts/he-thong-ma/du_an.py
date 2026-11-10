#!/usr/bin/env python3
"""Chạy hệ thống mã như ICS cho một dự án thêm từ Hub (docs/du-an/projects.json).

  du_an.py <slug> [--summary tom-tat.md]       # một dự án
  du_an.py --changed <sha-trước> <sha-sau>     # các dự án có file đổi giữa hai commit (requirements-du-an.yml)

Mỗi dự án có một thư mục projects/<thư mục>/ (chọn ở Hub, trường "folder"):
  requirements/   bản gốc QC viết (như qc/requirements của ICS)
  _hub/           thư mục làm việc sinh tự động, cùng bố cục với repo ICS để dùng chung các script:
    figma.pages.json                    fileKey (dự án chưa có code demo: pages rỗng)
    lib/figma-frame-ids.generated.json  mã → node id (apply_page_codes.py)
    docs/requirements/                  bản đã chuyển template, gắn mã (Hub đọc bản này)
    docs/requirements-map.json          file → màn
    docs/he-thong-ma/                   figma-frames.json (từ lần quét Figma + mã đề xuất), cụm, registry, khoá mã, mục lục
    scripts/figma/screen-requirements.json
Bước: dựng figma-frames.json từ docs/du-an/<slug>/screens.json + de-xuat-ma.json, tạo các file khởi đầu còn thiếu,
rồi chạy cap_nhat_requirement.py với --work = _hub (chuyển template, kiểm nội dung, registry, gắn mã, mục lục).
Thiếu nội dung thì dừng như ICS, _hub giữ bản cũ. Không có file .md nào thì chỉ dựng figma-frames.json.
"""
import argparse, hashlib, json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
CODE = re.compile(r"^[A-Z]{2,4}(?:-[A-Z0-9]{1,4})+-\d{6}(?:-DK)?$")


def load(path, fallback):
    return json.load(open(path, encoding="utf-8")) if os.path.exists(path) else fallback


def save(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as fh:
        json.dump(data, fh, ensure_ascii=False, indent=1)
        fh.write("\n")


def projects():
    return [p for p in load(f"{ROOT}/docs/du-an/projects.json", []) if p.get("slug") != "ics" and not (p.get("data") or {}).get("sys")]


def folder_of(p):
    return p.get("folder") or p["slug"]


def loai_of(code):
    if code.endswith("-DK"):
        return "ban-toi"
    kk = int(code[-2:])
    return "man-chinh" if kk == 0 else "trang-thai" if kk < 10 else "popup"


def frames_of(p):
    """Mã màn → frame, như lib/qc/remote.ts: mã ở tên frame, không có thì mã đề xuất."""
    d = f"{ROOT}/docs/du-an/{p['slug']}"
    screens = load(f"{d}/screens.json", [])
    proposal = {r["nodeId"]: r for r in load(f"{d}/de-xuat-ma.json", {}).get("frames", []) if CODE.match(r.get("maDeXuat") or "")}
    frames = {}
    for s in screens:
        code = s.get("code") or (proposal.get(s["id"]) or {}).get("maDeXuat")
        if not code or code in frames:
            continue
        frames[code] = {"id": s["id"], "title": re.sub(r"^\S+\s*[—–-]\s*", "", s["name"]), "page": s.get("page"),
                        "container": s.get("section"), "w": s.get("width"), "h": s.get("height"), "inPageList": False,
                        "loai": loai_of(code), "parent": None, "manHienThi": code, "tinCay": "cao" if s.get("code") else "trung-binh", "linksIn": []}
    for code, f in frames.items():
        base = code[:-3] if code.endswith("-DK") else code
        main = base[:-2] + "00"
        if f["loai"] == "ban-toi":
            f["parent"], f["manHienThi"] = base, base
        elif f["loai"] != "man-chinh":
            manual = (proposal.get(f["id"]) or {}).get("manGoc")
            parent = manual if manual in frames else main if main in frames else None
            f["parent"], f["manHienThi"] = parent, parent or code
    return frames


def prepare(p):
    """Thư mục _hub của dự án: figma-frames.json mới, các file khởi đầu nếu chưa có. Trả (thư mục gốc, _hub)."""
    base = f"{ROOT}/projects/{folder_of(p)}"
    work = f"{base}/_hub"
    sys_dir = f"{work}/docs/he-thong-ma"
    frames = frames_of(p)
    save(f"{sys_dir}/figma-frames.json", {"fileKey": p["fileKey"], "frames": frames})
    save(f"{work}/lib/figma-frame-ids.generated.json", {c: f["id"] for c, f in sorted(frames.items())})
    for path, data in ((f"{work}/figma.pages.json", {"fileKey": p["fileKey"], "pages": []}),
                       (f"{work}/docs/requirements-map.json", {"requirements": {}, "replaced": {}}),
                       (f"{sys_dir}/clusters.json", {"clusters": []}),
                       (f"{sys_dir}/ma-du-kien.json", {"codes": {}}),
                       (f"{sys_dir}/ma-trang-duyet.json", {"pages": {}}),
                       (f"{sys_dir}/khoa-ma.json", {}),
                       (f"{work}/scripts/figma/screen-requirements.json", {})):
        if not os.path.exists(path):
            save(path, data)
    os.makedirs(f"{work}/docs/requirements", exist_ok=True)
    return base, work


def digest(folder):
    """Hash of every file under a folder: did a run change anything."""
    h = hashlib.sha256()
    for d, _, fs in sorted(os.walk(folder)):
        for f in sorted(fs):
            path = os.path.join(d, f)
            h.update(os.path.relpath(path, folder).encode() + open(path, "rb").read())
    return h.hexdigest()


def run(p, summary=None):
    """Builds the project; the summary is written only when its code system really changed (no Chat otherwise)."""
    before = digest(f"{ROOT}/projects/{folder_of(p)}/_hub")
    base, work = prepare(p)
    src = f"{base}/requirements"
    has_md = os.path.isdir(src) and any(f.endswith(".md") for _, _, fs in os.walk(src) for f in fs)
    if not has_md:
        print(f"{p['slug']}: chưa có file .md trong projects/{folder_of(p)}/requirements, chỉ dựng figma-frames.json")
        return
    cmd = [sys.executable, f"{HERE}/cap_nhat_requirement.py", src, "--work", work, "--no-zip"]
    if summary:
        cmd += ["--summary", summary]
    print(f"== {p['slug']} ({p.get('code')}) · projects/{folder_of(p)}")
    subprocess.run(cmd, check=True, env={**os.environ, "HTM_WORK": work})
    if summary and os.path.exists(summary) and digest(work) == before:
        os.remove(summary)
        print(f"{p['slug']}: kết quả không đổi")


def changed(before, after):
    """Dự án có file đổi: bản gốc (projects/<thư mục>/requirements) hoặc lần quét / mã đề xuất (docs/du-an/<slug>)."""
    try:
        out = subprocess.run(["git", "diff", "--name-only", before, after], cwd=ROOT, check=True, capture_output=True, text=True).stdout
    except subprocess.CalledProcessError:
        return projects()  # lần push đầu / lịch sử bị viết lại: chạy hết
    paths = out.split()
    return [p for p in projects()
            if any(x.startswith(f"projects/{folder_of(p)}/requirements/") or x.startswith(f"docs/du-an/{p['slug']}/screens.json")
                   or x.startswith(f"docs/du-an/{p['slug']}/de-xuat-ma.json") or x == "docs/du-an/projects.json" for x in paths)]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("slug", nargs="?")
    ap.add_argument("--changed", nargs=2, metavar=("BEFORE", "AFTER"))
    ap.add_argument("--summary")
    args = ap.parse_args()
    if args.changed:
        todo = changed(*args.changed)
    else:
        todo = [p for p in projects() if p["slug"] == args.slug or not args.slug]
        if args.slug and not todo:
            sys.exit(f"Không có dự án {args.slug} trong docs/du-an/projects.json")
    if not todo:
        print("Không dự án nào đổi.")
    lines, failed = [], []
    for p in todo:
        part = f"{args.summary}.{p['slug']}" if args.summary else None
        try:
            run(p, part)
            if part and os.path.exists(part):
                lines.append(f"*{p['name']}* ({p.get('code')}): " + open(part, encoding="utf-8").read().strip())
        except subprocess.CalledProcessError:
            failed.append(p["slug"])
    if args.summary and lines:
        open(args.summary, "w", encoding="utf-8").write("\n".join(lines) + "\n")
    if failed:
        sys.exit(f"DỪNG ở dự án: {', '.join(failed)}")


if __name__ == "__main__":
    main()
