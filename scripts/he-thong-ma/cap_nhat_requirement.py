#!/usr/bin/env python3
"""Một lệnh: bộ requirement gốc của QC -> docs/requirements theo template, gắn mã, ảnh Figma, zip gửi QC.

  cap_nhat_requirement.py <requirements.zip của QC>      # bản gốc mới: chép vào projects/ics/requirements rồi chạy
  cap_nhat_requirement.py projects/ics/requirements --no-zip       # bản gốc trong repo (GitHub Actions dùng cách này)
  thêm: [--work .] [--out file.zip] [--summary tom-tat.md]

Bản gốc QC luôn nằm ở projects/ics/requirements trong repo; QC sửa ở đó (GitHub web) thì
.github/workflows/requirements.yml tự chạy lệnh này, commit, deploy và báo Google Chat.

Các bước:
  1. Đọc bản gốc; bỏ file đã được thay (requirements-map.json "replaced"); file mẫu/audit chỉ chép nguyên vào zip.
  2. File requirement mới chưa có trong requirements-map.json: tự thêm, màn lấy theo mã màn file nhắc tới.
  3. Chuyển template (req_to_template.py, mã item đã khoá) và kiểm từng file đủ nội dung + đủ testcase
     (kiem_noi_dung.py). Thiếu ở bất kỳ file nào thì dừng, không đụng docs/requirements.
  4. Dựng lại cụm + registry + danh sách sửa Figma theo bộ mới.
  5. Thay docs/requirements; ghi mã dự kiến, mã trang, ảnh Figma mới nhất, bảng màn -> requirement cho bot báo,
     mục lục cho web QC Hub (/hub).
  6. Đóng zip gửi QC (mặc định cạnh thư mục repo, tên theo ngày, không ghi đè).
Xong thì xem `git diff`, commit, push.
"""
import argparse, datetime, json, os, re, shutil, subprocess, sys, tempfile, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
# --work also picks the code lock and Figma frames the modules below load at import (HTM_WORK, khoa_ma.py);
# the scripts run after inherit it
if "--work" in sys.argv[:-1]:
    os.environ["HTM_WORK"] = os.path.abspath(sys.argv[sys.argv.index("--work") + 1])
from kiem_noi_dung import missing  # noqa: E402
from khoa_ma import Lock  # noqa: E402
from req_to_template import CODE, FRAMES, convert  # noqa: E402

KEEP_RAW = re.compile(r"(^|/)(requirement_template|legacy_source_review|[^/]*_audit)\.md$")
IMAGE = re.compile(r"!\[[^\]]*\]\((?!https?:|figma:)([^)\s]+)\)")


def run(*args):
    print("·", " ".join(os.path.basename(a) if a.endswith(".py") else a for a in args[:2]))
    subprocess.run([sys.executable, *args], check=True)


def extract(zpath, dest):
    with zipfile.ZipFile(zpath) as z:
        for n in z.namelist():
            if n.startswith("/") or ".." in n.split("/"):
                continue  # đường dẫn lạ trong zip: bỏ qua
            z.extract(n, dest)
    root = os.path.join(dest, "requirements")
    if not os.path.isdir(root):
        sys.exit("zip không có thư mục requirements/ ở gốc")
    return root


def out_path(work, given):
    if given:
        return os.path.abspath(given)
    base = os.path.join(os.path.dirname(work), f"requirements-{datetime.date.today():%Y-%m-%d}")
    path, n = base + ".zip", 1
    while os.path.exists(path):
        n += 1
        path = f"{base}-v{n}.zip"
    return path


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("source", help="zip của QC, hoặc thư mục requirements gốc")
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    ap.add_argument("--out")
    ap.add_argument("--no-zip", action="store_true", help="không đóng zip gửi QC (web QC Hub /hub đọc thẳng từ repo)")
    ap.add_argument("--summary", help="ghi tóm tắt Markdown (cho tin báo Google Chat)")
    args = ap.parse_args()
    w = args.work
    tmp = tempfile.mkdtemp(prefix="cap-nhat-req-")
    source = os.path.abspath(os.path.expanduser(args.source))
    originals = f"{w}/hub/requirements"
    if os.path.isdir(source):
        src = source
    else:  # zip mới: thay bản gốc trong repo để lần sau sửa tiếp ở đó
        src = extract(source, os.path.join(tmp, "qc"))
        if os.path.abspath(src) != os.path.abspath(originals):
            shutil.rmtree(originals, ignore_errors=True)
            shutil.copytree(src, originals, ignore=shutil.ignore_patterns(".DS_Store", "__MACOSX"))
    names = sorted(os.path.relpath(os.path.join(d, f), src) for d, _, fs in os.walk(src) for f in fs if f.endswith(".md"))

    # 1-2. chọn file, map file mới
    map_path = f"{w}/docs/requirements-map.json"
    reqmap = json.load(open(map_path, encoding="utf-8"))
    replaced = set(reqmap.get("replaced", {}))
    raw = [n for n in names if KEEP_RAW.search(n)]
    feats = [n for n in names if n not in raw and n not in replaced]
    added = []
    for rel in feats:
        if rel not in reqmap["requirements"]:
            text = open(os.path.join(src, rel), encoding="utf-8").read()
            screens = sorted({c for c in re.findall(CODE, text)
                              if c in FRAMES and not c.endswith("-DK") and FRAMES[c].get("loai") == "man-chinh"})
            title = text.split("\n", 1)[0].lstrip("# ").strip()
            reqmap["requirements"][rel] = {"title": title, "screens": screens, "source": "tự thêm theo mã màn trong file"}
            added.append(f"{rel} ({len(screens)} màn)")

    # 3. chuyển + kiểm, chưa đụng repo
    new = os.path.join(tmp, "moi", "requirements")
    lock, problems = Lock(), []
    for rel in feats:
        s, d = os.path.join(src, rel), os.path.join(new, rel)
        os.makedirs(os.path.dirname(d), exist_ok=True)
        text = convert(s, lock)
        open(d, "w", encoding="utf-8").write(text)
        problems += [f"{rel}: {m}" for m in missing(open(s, encoding="utf-8").read(), text)]
        for img in IMAGE.findall(text):
            a = os.path.normpath(os.path.join(os.path.dirname(s), img))
            if not a.startswith(src + os.sep):
                continue
            img_rel = os.path.relpath(a, src)
            kept = os.path.join(w, "docs", "requirements", img_rel)  # zip mới thiếu ảnh mà repo đang có: giữ
            found = a if os.path.isfile(a) else kept if os.path.isfile(kept) else None
            if found:
                b = os.path.join(new, img_rel)
                os.makedirs(os.path.dirname(b), exist_ok=True)
                shutil.copy2(found, b)
            else:
                print(f"thiếu ảnh: {rel} -> {img}")
    if problems:
        print("\n".join(problems[:50]))
        sys.exit(f"DỪNG: {len(problems)} chỗ thiếu nội dung, docs/requirements chưa đổi. Bản nháp ở {tmp}")
    lock.save()
    if added:
        json.dump(reqmap, open(map_path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

    # 4. registry theo bộ mới (spec_slim: bản rút gọn page-spec để GitHub Actions khớp layer như trên máy)
    run(f"{HERE}/spec_slim.py", "--work", w)
    run(f"{HERE}/make_clusters.py", "--work", w)
    run(f"{HERE}/registry.py", "all", "--req", src, "--work", w)
    run(f"{HERE}/figma_fixes.py", "--work", w)

    # 5. thay docs/requirements rồi gắn mã, ảnh
    before = {os.path.relpath(os.path.join(d, f), f"{w}/docs/requirements")
              for d, _, fs in os.walk(f"{w}/docs/requirements") for f in fs if f.endswith(".md")}
    shutil.rmtree(f"{w}/docs/requirements")
    shutil.copytree(new, f"{w}/docs/requirements")
    run(f"{HERE}/apply_reserved_codes.py", "--work", w)
    run(f"{HERE}/apply_page_codes.py", "--work", w)
    run(f"{HERE}/add_live_images.py", "--work", w)
    run(f"{HERE}/screen_requirements.py", "--work", w)
    run(f"{HERE}/qc_index.py", "--work", w)

    # 6. zip gửi QC
    out = None if args.no_zip else out_path(w, args.out)
    if out:
        with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
            for d, _, fs in os.walk(f"{w}/docs/requirements"):
                for f in fs:
                    if f != ".DS_Store":
                        p = os.path.join(d, f)
                        z.write(p, os.path.join("requirements", os.path.relpath(p, f"{w}/docs/requirements")))
            for rel in raw:
                z.write(os.path.join(src, rel), os.path.join("requirements", rel))
    shutil.rmtree(tmp, ignore_errors=True)

    now = set(feats)
    unmapped = sum(1 for l in open(f"{w}/docs/he-thong-ma/trang-chua-gan-ma.md", encoding="utf-8") if l.startswith("| `"))
    lines = [f"{len(feats)} file requirement, đủ nội dung và testcase."]
    for label, items in (("File mới", sorted(now - before)), ("File bỏ", sorted(before - now)), ("Tự thêm vào requirements-map", added)):
        if items:
            lines.append(f"{label}: " + "; ".join(items))
    lines.append(f"Trang chưa gắn mã màn: {unmapped} (docs/he-thong-ma/trang-chua-gan-ma.md)")
    print("\nXong: " + "\n".join(lines))
    if out:
        print(f"Zip gửi QC: {out}")
    if args.summary:
        open(args.summary, "w", encoding="utf-8").write("\n".join(lines) + "\n")
    print("Xem git diff rồi commit.")


if __name__ == "__main__":
    main()
