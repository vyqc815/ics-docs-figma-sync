#!/usr/bin/env bash
# Build site rồi chạy server có đăng nhập ở http://127.0.0.1:8000
cd "$(dirname "$0")/.." || exit 1
.venv/bin/mkdocs build -q || exit 1
exec .venv/bin/python scripts/server.py
