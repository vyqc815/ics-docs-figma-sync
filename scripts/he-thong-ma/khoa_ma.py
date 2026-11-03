"""Khoá mã khu vực (A03) và mã item (A03.07) của requirement, để QC chèn hay xoá dòng/mục không làm dịch mã cũ.

Mã lưu ở docs/he-thong-ma/khoa-ma.json, theo file requirement:
  areas: tên mục (đã chuẩn hoá) -> số khu vực
  items: số khu vực -> nhãn dòng (đã chuẩn hoá, lặp lại thì thêm #2, #3) -> số item
Lần đầu gặp một file: đánh số theo thứ tự như trước rồi ghi lại. Các lần sau: mục/dòng đã có giữ số cũ,
mục/dòng mới lấy số kế tiếp sau số lớn nhất từng dùng; số của mục/dòng bị xoá không cấp lại.
QC đổi chữ trong nhãn thì dòng đó coi như dòng mới (mã mới), mã cũ bỏ.
req_to_template.py và registry.py dùng chung module này nên mã hai bên luôn trùng.
"""
import collections, json, os, re, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
PATH = os.path.join(HERE, "..", "..", "docs", "he-thong-ma", "khoa-ma.json")


def norm(s):
    s = re.sub(r"^Trang \d+:\s*", "", s.strip()).replace("đ", "d").replace("Đ", "D")
    s = "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


def rel_of(path):
    """…/requirements/a/b.md -> a/b.md (khoá theo đường dẫn trong bộ requirement)."""
    path = os.path.normpath(path).replace(os.sep, "/")
    return path.rsplit("/requirements/", 1)[-1]


class Lock:
    def __init__(self, path=PATH):
        self.path = os.path.abspath(path)
        self.data = json.load(open(self.path, encoding="utf-8")) if os.path.exists(self.path) else {}
        self.seen = collections.Counter()

    def start(self, rel):
        """Gọi trước khi đọc lại một file: đếm lại các nhãn lặp từ đầu."""
        for k in [k for k in self.seen if k[0] == rel]:
            del self.seen[k]

    def _file(self, rel):
        return self.data.setdefault(rel, {"areas": {}, "items": {}})

    def area(self, rel, title, order):
        f = self._file(rel)
        key = norm(title)
        if key not in f["areas"]:
            used = set(f["areas"].values())
            f["areas"][key] = order if order not in used and (not used or order > max(used)) else max(used) + 1
        return f["areas"][key]

    def item(self, rel, area, label):
        f = self._file(rel)
        items = f["items"].setdefault(str(area), {})
        base = norm(re.sub(r"[`*]", "", label)) or "?"
        self.seen[(rel, area, base)] += 1
        k = self.seen[(rel, area, base)]
        key = base if k == 1 else f"{base}#{k}"
        if key not in items:
            items[key] = max(items.values(), default=0) + 1
        return items[key]

    def save(self):
        with open(self.path, "w", encoding="utf-8") as fh:
            json.dump(self.data, fh, ensure_ascii=False, indent=1, sort_keys=True)
            fh.write("\n")
