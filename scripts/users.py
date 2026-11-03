"""Manage login accounts.

  python scripts/users.py add <username> --role admin --role dev   (asks for the password)
  python scripts/users.py remove <username>
  python scripts/users.py list
"""
import argparse
import getpass
import sys

import auth


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    add = sub.add_parser("add")
    add.add_argument("username")
    add.add_argument("--role", choices=auth.ROLES, action="append", help="lặp lại để cấp nhiều quyền")
    sub.add_parser("remove").add_argument("username")
    sub.add_parser("list")
    args = ap.parse_args()

    users = auth.load_users()
    if args.cmd == "list":
        for name, u in sorted(users.items()):
            print(f"{name}\t{','.join(u['roles'])}")
        return
    if args.cmd == "remove":
        if users.pop(args.username, None) is None:
            sys.exit(f"Không có tài khoản {args.username}")
        auth.save_users(users)
        print(f"Đã xoá {args.username}")
        return
    password = getpass.getpass("Mật khẩu: ")
    if len(password) < auth.MIN_PASSWORD or password != getpass.getpass("Nhập lại: "):
        sys.exit(f"Mật khẩu phải từ {auth.MIN_PASSWORD} ký tự và hai lần nhập phải giống nhau")
    roles = [r for r in auth.ROLES if r in (args.role or ["dev"])]
    users[args.username] = {"roles": roles, "password": auth.hash_password(password)}
    auth.save_users(users)
    print(f"Đã lưu {args.username} ({', '.join(roles)})")


if __name__ == "__main__":
    main()
