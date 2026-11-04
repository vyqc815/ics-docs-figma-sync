#!/usr/bin/env python3
"""Tin báo design khi đề xuất mã của một dự án đã xong (dùng trong .github/workflows/de-xuat-ma.yml).

  tin_de_xuat.py <slug>
"""
import json, sys

slug = sys.argv[1]
d = json.load(open(f"docs/du-an/{slug}/de-xuat-ma.json", encoding="utf-8"))
rows = d["frames"]
review = sum(r["mucTin"] == "cần xem" for r in rows)
print(f"*[{d['project']}] Đề xuất mã đã xong* · file “{d['fileName']}”: {len(rows)} frame, {review} cần design xem.\n"
      f"Duyệt và tải file: https://ics-figma-demo.vercel.app/hub/du-an/{slug}/ma")
