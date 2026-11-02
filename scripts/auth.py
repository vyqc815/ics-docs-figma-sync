"""Users, password hashing and in-memory sessions.

Users live in users.yml at the repo root (gitignored): {username: {role: admin|viewer, password: pbkdf2$...}}
Manage them with:  python scripts/users.py add <username> --role admin
"""
import hashlib
import hmac
import re
import secrets
import time

import yaml

import sync_lib as lib

USERS_FILE = lib.ROOT / "users.yml"
ROLES = ("admin", "viewer")
SESSION_TTL = 12 * 3600
ITERATIONS = 200_000
MIN_PASSWORD = 4  # chỉ cần độ dài tối thiểu, không bắt buộc ký tự đặc biệt
_sessions = {}  # sid -> {"user", "role", "expires"}


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
    return yaml.safe_load(USERS_FILE.read_text(encoding="utf-8")) or {}


def save_users(users):
    USERS_FILE.write_text(yaml.safe_dump(users, allow_unicode=True, sort_keys=True), encoding="utf-8")


def login(username, password):
    user = load_users().get(username)
    if not user or not verify_password(password, user.get("password")):
        return None
    sid = secrets.token_urlsafe(32)
    _sessions[sid] = {"user": username, "role": user.get("role", "viewer"), "expires": time.time() + SESSION_TTL}
    return sid


def session(sid):
    s = _sessions.get(sid or "")
    if not s or s["expires"] < time.time():
        _sessions.pop(sid or "", None)
        return None
    return s


def logout(sid):
    _sessions.pop(sid or "", None)


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
    return [{"username": n, "role": u.get("role", "viewer")} for n, u in sorted(load_users().items())]


def save_user(actor, username, role, password=None):
    """Create a user, or change role / reset password of an existing one."""
    users = load_users()
    if role not in ROLES:
        raise AccountError("Quyền không hợp lệ")
    if not NAME.fullmatch(username or ""):
        raise AccountError("Tên tài khoản 2-32 ký tự, không có dấu cách")
    exists = username in users
    if not exists and not password:
        raise AccountError("Tài khoản mới cần mật khẩu")
    if username == actor and role != "admin":
        raise AccountError("Không thể tự bỏ quyền admin của chính mình")
    entry = users.setdefault(username, {})
    entry["role"] = role
    if password:
        _check_password(password)
        entry["password"] = hash_password(password)
    save_users(users)
    if username != actor:
        _drop_sessions(username)
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
    for sid in [s for s, v in _sessions.items() if v["user"] == username]:
        _sessions.pop(sid, None)
