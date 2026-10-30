"""Serves the built site behind a login, plus the admin API.

  viewer: read the site
  admin : + mark synced, sync Figma (index + check), rebuild the site

Run with scripts/dev.sh (builds first). Listens on 127.0.0.1:8000.
"""
import json
import mimetypes
import subprocess
import threading
from http.cookies import SimpleCookie
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import quote, unquote, urlparse

import auth
import figma_check
import figma_index
import sync_lib as lib
from mark_synced import mark

HOST, PORT = "127.0.0.1", 8000
SITE = lib.ROOT / "site"
LOGIN_PAGE = lib.ROOT / "server" / "login.html"
MKDOCS = lib.ROOT / ".venv" / "bin" / "mkdocs"
_job_lock = threading.Lock()


def rebuild():
    r = subprocess.run([str(MKDOCS), "build", "-q"], cwd=lib.ROOT, capture_output=True, text=True)
    if r.returncode != 0:
        print(f"[server] Build error: {r.stderr[-2000:]}")
        raise lib.SyncError("Build site lỗi, xem log server")


def admin_job(fn):
    if not _job_lock.acquire(blocking=False):
        raise lib.SyncError("Đang có tác vụ khác chạy, thử lại sau")
    try:
        message = fn()
        rebuild()
        return message
    finally:
        _job_lock.release()




class Handler(BaseHTTPRequestHandler):
    # ---------- helpers ----------
    def _sid(self):
        cookie = SimpleCookie(self.headers.get("Cookie", ""))
        return cookie["sid"].value if "sid" in cookie else None

    def _user(self):
        return auth.session(self._sid())

    def _json(self, code, body, headers=None):
        data = json.dumps(body, ensure_ascii=False).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        for k, v in (headers or {}).items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(data)

    def _body(self):
        try:
            return json.loads(self.rfile.read(int(self.headers.get("Content-Length", 0))) or b"{}")
        except ValueError:
            return {}

    def _file(self, path, status=200):
        self.send_response(status)
        self.send_header("Content-Type", mimetypes.guess_type(str(path))[0] or "application/octet-stream")
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(path.read_bytes())

    # ---------- GET ----------
    def do_GET(self):
        url = urlparse(self.path)
        if url.path == "/login":
            return self._file(LOGIN_PAGE)
        user = self._user()
        if url.path == "/api/me":
            return self._json(200, {"user": user["user"], "role": user["role"]} if user else {"user": None})
        if not user:
            self.send_response(302)
            self.send_header("Location", "/login?next=" + quote(self.path))
            return self.end_headers()
        target = (SITE / unquote(url.path).lstrip("/")).resolve()
        if SITE.resolve() not in target.parents and target != SITE.resolve():
            return self._json(403, {"message": "Forbidden"})
        if target.is_dir():
            target = target / "index.html"
        if not target.exists():
            return self._file(SITE / "404.html", 404) if (SITE / "404.html").exists() else self._json(404, {})
        self._file(target)

    # ---------- POST ----------
    def do_POST(self):
        path = urlparse(self.path).path
        body = self._body()
        if path == "/api/login":
            sid = auth.login(body.get("username", ""), body.get("password", ""))
            if not sid:
                return self._json(401, {"ok": False, "message": "Sai tài khoản hoặc mật khẩu"})
            return self._json(200, {"ok": True}, {"Set-Cookie": f"sid={sid}; HttpOnly; SameSite=Strict; Path=/"})
        if path == "/api/logout":
            auth.logout(self._sid())
            return self._json(200, {"ok": True}, {"Set-Cookie": "sid=; Max-Age=0; Path=/"})

        user = self._user()
        if not user:
            return self._json(401, {"ok": False, "message": "Cần đăng nhập"})
        if user["role"] != "admin":
            return self._json(403, {"ok": False, "message": "Chỉ admin được thực hiện thao tác này"})
        actions = {
            "/api/mark-synced": lambda: mark(body.get("doc", ""), user["user"]),
            "/api/figma/screens": figma_index.run,
            "/api/figma/check": lambda: figma_check.run(thumbs=True),
            "/api/rebuild": lambda: "Đã build lại site",
        }
        if path not in actions:
            return self._json(404, {"ok": False, "message": "Not found"})
        try:
            self._json(200, {"ok": True, "message": admin_job(actions[path])})
        except lib.SyncError as e:
            self._json(400, {"ok": False, "message": str(e)})
        except Exception as e:  # keep the server alive, surface the error
            print(f"[server] Error: {e}")
            self._json(500, {"ok": False, "message": "Lỗi máy chủ, xem log"})

    def log_message(self, fmt, *args):
        if not self.path.startswith("/assets"):
            super().log_message(fmt, *args)


if __name__ == "__main__":
    if not auth.load_users():
        print("[server] Chưa có tài khoản. Tạo admin: .venv/bin/python scripts/users.py add <tên> --role admin")
    print(f"[server] http://{HOST}:{PORT}")
    ThreadingHTTPServer((HOST, PORT), Handler).serve_forever()
