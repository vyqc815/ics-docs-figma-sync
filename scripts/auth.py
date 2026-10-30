"""Users, password hashing and in-memory sessions.

Users live in users.yml at the repo root (gitignored): {username: {role: admin|viewer, password: pbkdf2$...}}
Manage them with:  python scripts/users.py add <username> --role admin
"""
import hashlib
import hmac
import secrets
import time

import yaml

import sync_lib as lib

USERS_FILE = lib.ROOT / "users.yml"
ROLES = ("admin", "viewer")
SESSION_TTL = 12 * 3600
ITERATIONS = 200_000
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
