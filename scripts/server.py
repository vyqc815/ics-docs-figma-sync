"""Serves the built site behind a login, plus the admin API.

  dev: read the site, keep own "done up to here" marks
  admin : + mark synced, sync Figma (index + check), rebuild the site

Run with scripts/dev.sh (builds first). Listens on 127.0.0.1:8000.
"""
import json
import mimetypes
import os
import time
import subprocess
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, quote, unquote, urlparse

import auth
import figma_check
import dev_updates
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
    def _sids(self):
        """Every sid cookie sent: another app on the same host (any port) may also set one named sid."""
        parts = (c.strip().split("=", 1) for c in self.headers.get("Cookie", "").split(";"))
        return [p[1] for p in parts if len(p) == 2 and p[0] == "sid"]

    def _sid(self):
        return next((s for s in self._sids() if auth.session(s)), None)

    def _user(self):
        return auth.session(self._sid())

    def _account_sids(self):
        """Every account signed in on this browser (cookie `sids`), still valid, one per user."""
        raw = next((p.split("=", 1)[1] for p in (c.strip() for c in self.headers.get("Cookie", "").split(";"))
                    if p.startswith("sids=")), "")
        out, seen = [], set()
        for sid in [self._sid()] + raw.split("."):
            if not sid:
                continue
            s = auth.session(sid)
            if s and s["user"] not in seen:
                seen.add(s["user"])
                out.append(sid)
        return out

    def _cookies(self, active, sids):
        if not active:
            return [("Set-Cookie", f"sid=; Max-Age=0; {COOKIE_FLAGS}"), ("Set-Cookie", f"sids=; Max-Age=0; {COOKIE_FLAGS}")]
        keep = f"Max-Age={auth.SESSION_TTL}; {COOKIE_FLAGS}"
        return [("Set-Cookie", f"sid={active}; {keep}"), ("Set-Cookie", f"sids={'.'.join(sids)}; {keep}")]

    def _json(self, code, body, headers=None):
        data = json.dumps(body, ensure_ascii=False).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        for k, v in (headers.items() if isinstance(headers, dict) else headers or []):
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
            if not user:
                return self._json(200, {"user": None})
            active = self._sid()
            accounts = [dict(user=s["user"], roles=s["roles"], active=sid == active)
                        for sid in self._account_sids() for s in [auth.session(sid)]]
            if not any(a["active"] for a in accounts):
                accounts.insert(0, {"user": user["user"], "roles": user["roles"], "active": True})
            return self._json(200, {"user": user["user"], "role": user["role"], "roles": user["roles"],
                                    "accounts": accounts, "docs_pull": DOCS_PULL})
        if path == "/api/users":
            if not user or user["role"] != "admin":
                return self._json(403, {"ok": False, "message": "Chỉ admin xem được danh sách tài khoản"})
            return self._json(200, {"ok": True, "users": auth.list_users()})
        if not user:
            self.send_response(302)
            self.send_header("Location", f"{BASE_PATH}/login?next=" + quote(self.path))
            return self.end_headers()
        if path == "/api/dev/updates":
            try:
                return self._json(200, dict(ok=True, **dev_updates.updates(user["user"], (query.get("doc") or [""])[0], user["role"] == "admin")))
            except lib.SyncError as e:
                return self._json(400, {"ok": False, "message": str(e)})
        if path == "/api/dev/overview":
            if user["role"] != "admin":
                return self._json(403, {"ok": False, "message": "Chỉ admin xem được tiến độ dev"})
            return self._json(200, dict(ok=True, **dev_updates.overview(auth.list_users())))
        if path == "/api/dev/marks":
            try:
                return self._json(200, {"ok": True, "marks": dev_updates.doc_marks((query.get("doc") or [""])[0])})
            except lib.SyncError as e:
                return self._json(400, {"ok": False, "message": str(e)})
        if path == "/api/dev/summary":
            return self._json(200, {"ok": True, "docs": dev_updates.summary(user["user"])})
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
            name = body.get("username", "")
            sid = auth.login(name, body.get("password", ""))
            if not sid:
                return self._json(401, {"ok": False, "message": "Sai tài khoản hoặc mật khẩu"})
            others = [s for s in self._account_sids() if auth.session(s)["user"] != name]
            return self._json(200, {"ok": True}, self._cookies(sid, [sid] + others))
        if path == "/api/logout":
            active = self._sid()
            auth.logout(active)
            rest = [s for s in self._account_sids() if s != active]
            return self._json(200, {"ok": True, "switched": bool(rest)}, self._cookies(rest[0] if rest else None, rest))
        if path == "/api/session/switch":
            sids = self._account_sids()
            sid = next((s for s in sids if auth.session(s)["user"] == body.get("user")), None)
            if not sid:
                return self._json(400, {"ok": False, "message": "Tài khoản này chưa đăng nhập trên trình duyệt"})
            return self._json(200, {"ok": True, "message": f"Đã chuyển sang {body.get('user')}"}, self._cookies(sid, sids))

        user = self._user()
        if not user:
            return self._json(401, {"ok": False, "message": "Cần đăng nhập"})
        account_actions = {
            "/api/session/role": lambda: auth.set_role(self._sid(), body.get("role")),
            "/api/dev/mark": lambda: dev_updates.mark(user["user"], body.get("doc", ""), body.get("sha"), body.get("upto")),
            "/api/dev/rollback": lambda: dev_updates.rollback(user["user"], body.get("doc", "")),
            "/api/account/password": lambda: auth.change_password(user["user"], body.get("old"), body.get("new")),
            "/api/users/save": lambda: auth.save_user(user["user"], body.get("username", "").strip(),
                                                      body.get("roles") or body.get("role"), body.get("password") or None),
            "/api/users/delete": lambda: auth.delete_user(user["user"], body.get("username", "")),
        }
        if path in account_actions:
            if path.startswith("/api/users") and user["role"] != "admin":
                return self._json(403, {"ok": False, "message": "Chỉ admin quản lý tài khoản"})
            try:
                return self._json(200, {"ok": True, "message": account_actions[path]()})
            except (auth.AccountError, lib.SyncError) as e:
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
