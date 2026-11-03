"""Users, password hashing and in-memory sessions.

Users live in users.yml at the repo root (gitignored): {username: {roles: [admin, dev], password: pbkdf2$...}}
Sessions live in sessions.json (gitignored, keyed by sid hash) so a login lasts SESSION_TTL across restarts.
Manage them with:  python scripts/users.py add <username> --role admin
"""
import hashlib
import hmac
import json
import re
import secrets
import time

import yaml

import sync_lib as lib

USERS_FILE = lib.ROOT / "users.yml"
ROLES = ("admin", "dev")
ROLE_LABELS = {"admin": "Admin", "dev": "Dev"}
LEGACY_ROLES = {"viewer": "dev"}  # role cũ trong users.yml
SESSION_TTL = 7 * 24 * 3600  # 7 ngày
SESSIONS_FILE = lib.ROOT / "sessions.json"
ITERATIONS = 200_000
MIN_PASSWORD = 4  # chỉ cần độ dài tối thiểu, không bắt buộc ký tự đặc biệt
_sessions = {}  # sid hash -> {"user", "roles", "role" (active), "expires"}


def hash_password(password):
    salt = secrets.token_hex(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), ITERATIONS).hex()
    return f"pbkdf2${ITERATIONS}${salt}${digest}"


def verify_password(password, stored):
    try:
        _, iterations, salt, digest = stored.split("$")
    except (AttributeError, ValueError):
        return False
    test = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), int(iterations)).hex()
    return hmac.compare_digest(test, digest)


def load_users():
    if not USERS_FILE.exists():
        return {}
    users = yaml.safe_load(USERS_FILE.read_text(encoding="utf-8")) or {}
    for u in users.values():
        roles = u.pop("roles", None) or [u.get("role") or "dev"]
        u.pop("role", None)
        u["roles"] = [r for r in ROLES if r in {LEGACY_ROLES.get(x, x) for x in roles}] or ["dev"]
    return users


def save_users(users):
    USERS_FILE.write_text(yaml.safe_dump(users, allow_unicode=True, sort_keys=True), encoding="utf-8")


def _key(sid):
    return hashlib.sha256((sid or "").encode()).hexdigest()


def _load_sessions():
    if not _sessions and SESSIONS_FILE.exists():
        try:
            _sessions.update(json.loads(SESSIONS_FILE.read_text(encoding="utf-8")))
        except ValueError:
            pass


def _save_sessions():
    now = time.time()
    for k in [k for k, v in _sessions.items() if v["expires"] < now]:
        _sessions.pop(k)
    SESSIONS_FILE.write_text(json.dumps(_sessions), encoding="utf-8")
    SESSIONS_FILE.chmod(0o600)


def login(username, password):
    user = load_users().get(username)
    if not user or not verify_password(password, user.get("password")):
        return None
    _load_sessions()
    sid = secrets.token_urlsafe(32)
    _sessions[_key(sid)] = {"user": username, "roles": user["roles"], "role": user["roles"][0],
                            "expires": time.time() + SESSION_TTL}
    _save_sessions()
    return sid


def session(sid):
    _load_sessions()
    s = _sessions.get(_key(sid))
    if not s or s["expires"] < time.time():
        return None
    return s


def set_role(sid, role):
    s = session(sid)
    if not s or role not in s["roles"]:
        raise AccountError("Tài khoản này không có quyền đó")
    s["role"] = role
    _save_sessions()
    return f"Đã chuyển sang quyền {ROLE_LABELS[role]}"


def logout(sid):
    _load_sessions()
    if _sessions.pop(_key(sid), None):
        _save_sessions()


# ---------- Account management (web) ----------
NAME = re.compile(r"^[\w.@-]{2,32}$")  # chữ (có dấu cũng được), số, . _ - @; không dấu cách


class AccountError(Exception):
    pass


def _check_password(password):
    if len(password or "") < MIN_PASSWORD:
        raise AccountError(f"Mật khẩu phải từ {MIN_PASSWORD} ký tự")


def change_password(username, old, new):
    users = load_users()
    user = users.get(username)
    if not user or not verify_password(old or "", user.get("password")):
        raise AccountError("Mật khẩu hiện tại không đúng")
    _check_password(new)
    user["password"] = hash_password(new)
    save_users(users)
    return "Đã đổi mật khẩu"


def list_users():
    return [{"username": n, "roles": u["roles"]} for n, u in sorted(load_users().items())]


def save_user(actor, username, roles, password=None):
    """Create a user, or change roles / reset password of an existing one."""
    users = load_users()
    roles = [roles] if isinstance(roles, str) else list(roles or [])
    if not roles or any(r not in ROLES for r in roles):
        raise AccountError("Chọn ít nhất một quyền hợp lệ")
    if not NAME.fullmatch(username or ""):
        raise AccountError("Tên tài khoản 2-32 ký tự, không có dấu cách")
    exists = username in users
    if not exists and not password:
        raise AccountError("Tài khoản mới cần mật khẩu")
    if username == actor and "admin" not in roles:
        raise AccountError("Không thể tự bỏ quyền admin của chính mình")
    entry = users.setdefault(username, {})
    entry.pop("role", None)
    entry["roles"] = [r for r in ROLES if r in roles]
    if password:
        _check_password(password)
        entry["password"] = hash_password(password)
    save_users(users)
    if username != actor:
        _drop_sessions(username)
    else:  # keep own sessions, with the new roles
        _load_sessions()
        for s in _sessions.values():
            if s["user"] == actor:
                s["roles"] = entry["roles"]
                s["role"] = s["role"] if s["role"] in s["roles"] else s["roles"][0]
        _save_sessions()
    return f"Đã {'cập nhật' if exists else 'tạo'} tài khoản {username}"


def delete_user(actor, username):
    users = load_users()
    if username == actor:
        raise AccountError("Không thể xoá tài khoản đang đăng nhập")
    if users.pop(username, None) is None:
        raise AccountError(f"Không có tài khoản {username}")
    save_users(users)
    _drop_sessions(username)
    return f"Đã xoá tài khoản {username}"


def _drop_sessions(username):
    """Role or password changed: sign that user out everywhere."""
    _load_sessions()
    for key in [k for k, v in _sessions.items() if v["user"] == username]:
        _sessions.pop(key, None)
    _save_sessions()
