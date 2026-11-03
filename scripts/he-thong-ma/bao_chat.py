#!/usr/bin/env python3
"""Gửi kết quả cập nhật requirement vào Google Chat (luồng riêng `requirement-<dự án>`).

  bao_chat.py ok <tom-tat.md>     # cập nhật xong
  bao_chat.py khong-doi           # bản gốc đổi nhưng kết quả không khác (vd. chỉ sửa ảnh không dùng)
  bao_chat.py loi <run.log>       # bị dừng: gửi các dòng lỗi

Env: GOOGLE_CHAT_WEBHOOK_URL (không có thì chỉ in), FIGMA_PROJECT, RUN_URL, QC_VERSION.
"""
import json, os, sys, urllib.parse, urllib.request

project = os.environ.get("FIGMA_PROJECT", "ICS")
run_url = os.environ.get("RUN_URL", "")
kind = sys.argv[1]
if kind == "ok":
    body = open(sys.argv[2], encoding="utf-8").read().strip()
    text = (f"*[{project}] Requirement đã cập nhật từ bản gốc QC*\n{body}\n"
            f"Web QC lấy bản mới qua /api/qc (version {os.environ.get('QC_VERSION', '?')}); demo đang deploy.")
elif kind == "khong-doi":
    text = f"*[{project}] Bản gốc QC vừa sửa*, kết quả sau khi chuyển không khác bản đang có, không cần cập nhật."
else:
    log = open(sys.argv[2], encoding="utf-8").read().splitlines() if len(sys.argv) > 2 else []
    err = [l for l in log if "DỪNG" in l or "Error" in l or "Traceback" in l or ": ô bảng" in l or ": dòng" in l][:12]
    text = f"*[{project}] Cập nhật requirement bị dừng*, docs/requirements giữ bản cũ.\n" + "\n".join(err)
if run_url:
    text += f"\n\nChi tiết: {run_url}"

url = os.environ.get("GOOGLE_CHAT_WEBHOOK_URL")
if not url:
    print(text)
    sys.exit(0)
parts = urllib.parse.urlsplit(url)
query = urllib.parse.parse_qs(parts.query)
query.update({"threadKey": [f"requirement-{project}"], "messageReplyOption": ["REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"]})
target = urllib.parse.urlunsplit(parts._replace(query=urllib.parse.urlencode(query, doseq=True)))
req = urllib.request.Request(target, data=json.dumps({"text": text}).encode(), method="POST",
                             headers={"Content-Type": "application/json; charset=UTF-8"})
urllib.request.urlopen(req, timeout=30)
print("Đã gửi vào Google Chat.")
