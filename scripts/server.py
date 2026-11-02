"""Serves the built site behind a login, plus the admin API.

  viewer: read the site
  admin : + mark synced, sync Figma (index + check), rebuild the site

Run with scripts/dev.sh (builds first). Listens on 127.0.0.1:8000.
"""
import json
import mimetypes
import os
import time
import subprocess
import threading
from http.cookies import SimpleCookie
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, quote, unquote, urlparse

import auth
import figma_check
import figma_index
import sync_lib as lib
from mark_synced import mark

HOST = os.environ.get("HOST", "127.0.0.1")
PORT = int(os.environ.get("PORT", "8000"))
BASE_PATH = os.environ.get("BASE_PATH", "").rstrip("/")  # vd "/docs-figma" khi chạy chung domain với hệ thống khác
COOKIE_FLAGS = "HttpOnly; SameSite=Strict; Path=" + (BASE_PATH or "/") + ("; Secure" if os.environ.get("COOKIE_SECURE") == "1" else "")
SITE = lib.ROOT / "site"
LOGIN_PAGE = lib.ROOT / "server" / "login.html"
MKDOCS = lib.ROOT / ".venv" / "bin" / "mkdocs"
DOCS_PULL = os.environ.get("DOCS_PULL", "1") == "1"  # 0: docs folder is updated by something else (vd BE deploy)
DOCS_WATCH_SECONDS = int(os.environ.get("DOCS_WATCH_SECONDS", "0"))  # >0: rebuild when docs files change
_job_lock = threading.Lock()


def rebuild():
    gone = lib.prune_deleted_docs()
    if gone:
        print(f"[server] Đã dọn dữ liệu của {len(gone)} tài liệu không còn: {gone}")
    r = subprocess.run([str(MKDOCS), "build", "-q"], cwd=lib.ROOT, capture_output=True, text=True)
    if r.returncode != 0:
        print(f"[server] Build error: {r.stderr[-2000:]}")
        raise lib.SyncError("Build site lỗi, xem log server")


def pull_docs():
    """git pull (fast-forward only) in the repo holding the docs, so new/edited/deleted docs come in."""
    repo = lib.docs_repo()
    branch = subprocess.run(["git", "rev-parse", "--abbrev-ref", "HEAD"], cwd=repo,
                            capture_output=True, text=True).stdout.strip()
    before = subprocess.run(["git", "rev-parse", "HEAD"], cwd=repo, capture_output=True, text=True).stdout.strip()
    r = subprocess.run(["git", "pull", "--ff-only"], cwd=repo, capture_output=True, text=True)
    if r.returncode != 0:
        print(f"[server] git pull error: {r.stderr[-2000:]}")
        raise lib.SyncError(f"Không pull được nhánh {branch}: " + (r.stderr.strip().splitlines() or ["lỗi git"])[-1])
    changed = subprocess.run(["git", "diff", "--name-status", before, "HEAD", "--", "."], cwd=repo,
                             capture_output=True, text=True).stdout.splitlines()
    docs = [c for c in changed if c.endswith(".md")]
    if not docs:
        return f"Docs trên nhánh {branch} đã mới nhất"
    added = sum(1 for c in docs if c.startswith("A"))
    deleted = sum(1 for c in docs if c.startswith("D"))
    return f"Đã cập nhật nhánh {branch}: {len(docs) - added - deleted} sửa, {added} thêm, {deleted} xoá"


def docs_fingerprint():
    """Changes when any .md is added, removed or edited."""
    return sorted((str(p.relative_to(lib.DOCS)), p.stat().st_mtime_ns) for p in lib.DOCS.rglob("*.md"))


def watch_docs():
    """Rebuild by itself when the docs folder changes, so new/edited/deleted docs show up without a button."""
    last = docs_fingerprint()
    while True:
        time.sleep(DOCS_WATCH_SECONDS)
        try:
            now = docs_fingerprint()
            if now != last and _job_lock.acquire(blocking=False):
                try:
                    rebuild()
                    print(f"[server] Docs thay đổi, đã build lại ({len(now)} file)")
                    last = now
                finally:
                    _job_lock.release()
        except (OSError, lib.SyncError) as e:
            print(f"[server] Watch error: {e}")


def _pull_disabled():
    raise lib.SyncError("Docs trên server này được cập nhật tự động, không cần pull")


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

    def _route(self):
        """Request path without BASE_PATH, plus the query."""
        url = urlparse(self.path)
        path = url.path
        if BASE_PATH and (path == BASE_PATH or path.startswith(BASE_PATH + "/")):
            path = path[len(BASE_PATH):] or "/"
        return path, parse_qs(url.query)

    def _file(self, path, status=200, download_name=None):
        self.send_response(status)
        self.send_header("Content-Type", mimetypes.guess_type(str(path))[0] or "application/octet-stream")
        if download_name:
            self.send_header("Content-Disposition", "attachment; filename*=UTF-8''" + quote(download_name))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(path.read_bytes())

    # ---------- GET ----------
    def do_GET(self):
        path, query = self._route()
        if path == "/login":
            return self._file(LOGIN_PAGE)
        user = self._user()
        if path == "/api/me":
            return self._json(200, {"user": user["user"], "role": user["role"], "docs_pull": DOCS_PULL}
                              if user else {"user": None})
        if path == "/api/users":
            if not user or user["role"] != "admin":
                return self._json(403, {"ok": False, "message": "Chỉ admin xem được danh sách tài khoản"})
            return self._json(200, {"ok": True, "users": auth.list_users()})
        if not user:
            self.send_response(302)
            self.send_header("Location", f"{BASE_PATH}/login?next=" + quote(self.path))
            return self.end_headers()
        if path == "/api/docs/raw":
            return self._raw_doc((query.get("doc") or [""])[0])
        target = (SITE / unquote(path).lstrip("/")).resolve()
        if SITE.resolve() not in target.parents and target != SITE.resolve():
            return self._json(403, {"message": "Forbidden"})
        if target.is_dir():
            target = target / "index.html"
        if not target.exists():
            return self._file(SITE / "404.html", 404) if (SITE / "404.html").exists() else self._json(404, {})
        self._file(target)

    def _raw_doc(self, doc):
        """Download the original markdown file of a requirement."""
        rel = doc.removeprefix("docs/")
        target = (lib.DOCS / rel).resolve()
        if target.suffix != ".md" or lib.DOCS.resolve() not in target.parents or not target.exists():
            return self._json(404, {"ok": False, "message": "Không thấy file docs"})
        self._file(target, download_name=target.name)

    # ---------- POST ----------
    def do_POST(self):
        path, _ = self._route()
        body = self._body()
        if path == "/api/login":
            sid = auth.login(body.get("username", ""), body.get("password", ""))
            if not sid:
                return self._json(401, {"ok": False, "message": "Sai tài khoản hoặc mật khẩu"})
            return self._json(200, {"ok": True}, {"Set-Cookie": f"sid={sid}; {COOKIE_FLAGS}"})
        if path == "/api/logout":
            auth.logout(self._sid())
            return self._json(200, {"ok": True}, {"Set-Cookie": f"sid=; Max-Age=0; {COOKIE_FLAGS}"})

        user = self._user()
        if not user:
            return self._json(401, {"ok": False, "message": "Cần đăng nhập"})
        account_actions = {
            "/api/account/password": lambda: auth.change_password(user["user"], body.get("old"), body.get("new")),
            "/api/users/save": lambda: auth.save_user(user["user"], body.get("username", "").strip(),
                                                      body.get("role"), body.get("password") or None),
            "/api/users/delete": lambda: auth.delete_user(user["user"], body.get("username", "")),
        }
        if path in account_actions:
            if path != "/api/account/password" and user["role"] != "admin":
                return self._json(403, {"ok": False, "message": "Chỉ admin quản lý tài khoản"})
            try:
                return self._json(200, {"ok": True, "message": account_actions[path]()})
            except auth.AccountError as e:
                return self._json(400, {"ok": False, "message": str(e)})
        if user["role"] != "admin":
            return self._json(403, {"ok": False, "message": "Chỉ admin được thực hiện thao tác này"})
        actions = {
            "/api/mark-synced": lambda: mark(body.get("doc", ""), user["user"]),
            "/api/figma/screens": figma_index.run,
            "/api/figma/check": lambda: figma_check.run(thumbs=True),
            "/api/rebuild": lambda: "Đã build lại site",
            "/api/docs/pull": pull_docs if DOCS_PULL else _pull_disabled,
            "/api/tags/save": lambda: lib.set_web_tags(body.get("doc", ""), body.get("tags") or []),
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
    if DOCS_WATCH_SECONDS > 0:
        threading.Thread(target=watch_docs, daemon=True).start()
        print(f"[server] Theo dõi thư mục docs mỗi {DOCS_WATCH_SECONDS}s")
    print(f"[server] http://{HOST}:{PORT}{BASE_PATH}/")
    ThreadingHTTPServer((HOST, PORT), Handler).serve_forever()
