#!/usr/bin/env bash
# Build site rồi chạy server có đăng nhập (mặc định http://127.0.0.1:8000, đổi bằng PORT / BASE_PATH trong .env)
cd "$(dirname "$0")/.." || exit 1
if [ -f .env ]; then set -a; . ./.env; set +a; fi  # .env dùng chung cho cả mkdocs build và server
.venv/bin/mkdocs build -q || exit 1
exec .venv/bin/python -u scripts/server.py
