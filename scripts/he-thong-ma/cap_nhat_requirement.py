#!/usr/bin/env python3
"""Một lệnh: bộ requirement mới của QC (zip) -> docs/requirements theo template, gắn mã, ảnh Figma, zip gửi QC.

  cap_nhat_requirement.py <requirements.zip của QC> [--work .] [--out file.zip]

Các bước:
  1. Giải nén; bỏ file đã được thay (requirements-map.json "replaced"); file mẫu/audit chỉ chép nguyên vào zip.
  2. File requirement mới chưa có trong requirements-map.json: tự thêm, màn lấy theo mã màn file nhắc tới.
  3. Chuyển template (req_to_template.py, mã item đã khoá) và kiểm từng file đủ nội dung + đủ testcase
     (kiem_noi_dung.py). Thiếu ở bất kỳ file nào thì dừng, không đụng docs/requirements.
  4. Dựng lại cụm + registry + danh sách sửa Figma theo bộ mới.
  5. Thay docs/requirements; ghi mã dự kiến, mã trang, ảnh Figma mới nhất.
  6. Đóng zip gửi QC (mặc định cạnh thư mục repo, tên theo ngày, không ghi đè).
Xong thì xem `git diff`, commit, push.
"""
import argparse, datetime, json, os, re, shutil, subprocess, sys, tempfile, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from kiem_noi_dung import missing  # noqa: E402
from khoa_ma import Lock  # noqa: E402
from req_to_template import CODE, FRAMES, convert  # noqa: E402

KEEP_RAW = re.compile(r"(^|/)(requirement_template|legacy_source_review|[^/]*_audit)\.md$")
IMAGE = re.compile(r"!\[[^\]]*\]\((?!https?:)([^)\s]+)\)")


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
    ap.add_argument("zip")
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    ap.add_argument("--out")
    args = ap.parse_args()
    w = args.work
    tmp = tempfile.mkdtemp(prefix="cap-nhat-req-")
    src = extract(os.path.expanduser(args.zip), os.path.join(tmp, "qc"))
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
            if a.startswith(src) and os.path.isfile(a):
                b = os.path.join(new, os.path.relpath(a, src))
                os.makedirs(os.path.dirname(b), exist_ok=True)
                shutil.copy2(a, b)
    if problems:
        print("\n".join(problems[:50]))
        sys.exit(f"DỪNG: {len(problems)} chỗ thiếu nội dung, docs/requirements chưa đổi. Bản nháp ở {tmp}")
    lock.save()
    if added:
        json.dump(reqmap, open(map_path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

    # 4. registry theo bộ mới
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

    # 6. zip gửi QC
    out = out_path(w, args.out)
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
    print(f"\nXong: {len(feats)} file requirement, đủ nội dung và testcase.")
    for label, items in (("File mới", sorted(now - before)), ("File bỏ", sorted(before - now)), ("Tự thêm vào requirements-map", added)):
        if items:
            print(f"{label}: " + "; ".join(items))
    print(f"Zip gửi QC: {out}")
    print("Trang chưa gắn mã: docs/he-thong-ma/trang-chua-gan-ma.md. Xem git diff rồi commit.")


if __name__ == "__main__":
    main()
