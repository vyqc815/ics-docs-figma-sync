#!/usr/bin/env python3
"""Sinh `components/frames/frames.generated.ts`: popup, dropdown và trạng thái mở trên route màn cha.

Mỗi màn trong figma.pages.json có mã thuộc loại popup / dropdown / trang-thai (theo figma-frames.json,
đã áp kết quả design duyệt) và đã có code ở `components/figma/<tên>/` được đưa vào bản đồ.
`FrameHost` đọc bản đồ này: `?popup=<MÃ>` phủ popup lên màn hiện tại, `?state=<MÃ>` thay màn bằng trạng thái.

  frames_map.py [--work .]
"""
import argparse, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
KIND = {"popup": "popup", "dropdown": "popup", "trang-thai": "state"}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    args = ap.parse_args()
    w = args.work
    frames = json.load(open(f"{w}/docs/he-thong-ma/figma-frames.json"))["frames"]
    pages = json.load(open(f"{w}/figma.pages.json"))["pages"]
    rows = []
    for p in pages:
        code = p["name"].upper()
        f = frames.get(code)
        if f and f["loai"] == "ban-toi":  # a dark frame opens the way its light twin does
            f = {**f, "loai": (frames.get(code[:-3]) or {}).get("loai", ""), "manHienThi": f.get("manHienThi")}
        kind = KIND.get(f["loai"] if f else "")
        index = f"{w}/components/figma/{p['name']}/index.tsx"
        if not kind or not os.path.exists(index):
            continue
        m = re.search(r"export (?:const|function) (\w+Page)\b", open(index, encoding="utf-8").read())
        if m:
            rows.append((code, kind, p["name"], m[1], f.get("manHienThi")))
    rows.sort()
    out = [
        "// Sinh bởi scripts/he-thong-ma/frames_map.py. Không sửa tay.",
        'import type { ComponentType } from "react";',
        "",
        'export type FrameKind = "popup" | "state";',
        "",
        "/** Mã frame → loại, màn hiển thị theo và component (nạp khi mở). */",
        "export const FRAMES: Record<string, { kind: FrameKind; shownOn: string | null; load: () => Promise<ComponentType> }> = {",
    ]
    for code, kind, name, comp, shown in rows:
        out.append(f'  "{code}": {{ kind: "{kind}", shownOn: {json.dumps(shown)}, load: () => import("@/components/figma/{name}").then((m) => m.{comp}) }},')
    out += ["};", ""]
    path = f"{w}/components/frames/frames.generated.ts"
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, "w", encoding="utf-8").write("\n".join(out))
    print(len(rows), "frame:", sum(r[1] == "popup" for r in rows), "popup,", sum(r[1] == "state" for r in rows), "trạng thái")


if __name__ == "__main__":
    main()
