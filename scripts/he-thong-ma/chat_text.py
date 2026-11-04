#!/usr/bin/env python3
"""Gửi một tin vào Google Chat, vào luồng `<thread>` (threadKey). Không có GOOGLE_CHAT_WEBHOOK_URL thì chỉ in ra.

  chat_text.py <thread> <nội dung>
"""
import json, os, sys, urllib.parse, urllib.request

thread, text = sys.argv[1], sys.argv[2]
url = os.environ.get("GOOGLE_CHAT_WEBHOOK_URL")
if not url:
    print(text)
    sys.exit(0)
parts = urllib.parse.urlsplit(url)
query = urllib.parse.parse_qs(parts.query)
query.update({"threadKey": [thread[:120]], "messageReplyOption": ["REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"]})
target = urllib.parse.urlunsplit(parts._replace(query=urllib.parse.urlencode(query, doseq=True)))
req = urllib.request.Request(target, data=json.dumps({"text": text[:3800]}).encode(), method="POST",
                             headers={"Content-Type": "application/json; charset=UTF-8"})
urllib.request.urlopen(req, timeout=30)
print("Đã gửi vào Google Chat.")
