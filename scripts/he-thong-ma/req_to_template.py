#!/usr/bin/env python3
"""Sắp một file requirement gốc theo template_req_docs.md, giữ nguyên nội dung, gắn mã.

Chuyển máy móc, không viết lại câu chữ:
  - mỗi mục `###` của phần UI thành `### Trang N: <mã màn> — <tên mục>`; mã màn lấy từ các mã Figma
    mà chính mục đó nhắc tới (thường ở chú thích ảnh);
  - mỗi dòng bảng trong mục UI thành một dòng "Điểm cần lưu ý" mở đầu bằng mã item `Axx.yy`,
    đánh số đúng như registry.py; mã đã khoá trong khoa-ma.json (khoa_ma.py), chèn/xoá dòng không dịch mã cũ;
  - mọi bảng testcase gom về `## 3. Testcase`, đủ mọi case; cột "Loại test" ghép vào Priority;
  - REQ dạng gạch đầu dòng thành bảng; "Cần xác nhận" thành Q01…; mục ngoài template giữ ở cuối.

  req_to_template.py <file gốc> <file ra>
"""
import json, os, re, sys

from khoa_ma import Lock, rel_of

HERE = os.path.dirname(os.path.abspath(__file__))
CODE = r"[A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}(?:-DK)?"
FRAMES = json.load(open(os.path.join(HERE, "..", "..", "docs", "he-thong-ma", "figma-frames.json")))["frames"]


def cells(line):
    return [c.strip() for c in re.sub(r"\\\|", "\x00", line).strip().strip("|").split("|")]


def unesc(s):
    return s.replace("\x00", "\\|")


def split_h(text, level):
    """[(heading or None, body)] split on lines starting with `level` hashes + space."""
    parts, head, buf = [], None, []
    pat = re.compile(rf"^{'#' * level} (.*)$")
    for line in text.split("\n"):
        m = pat.match(line)
        if m:
            parts.append((head, "\n".join(buf)))
            head, buf = m[1], []
        else:
            buf.append(line)
    parts.append((head, "\n".join(buf)))
    return parts


def html_images(text, page_no):
    """<p align=center><a><img src alt></a><br><em>cap</em></p> -> markdown image + italic caption."""
    def rep(m):
        block = m[0]
        src = re.search(r'<img[^>]*src="([^"]+)"', block)
        cap = re.search(r"<em>(.*?)</em>", block, re.S)
        out = f"![Trang {page_no}]({src[1]})" if src else ""
        if cap:
            out += f"\n\n*{cap[1].strip()}*"
        return out
    return re.sub(r"<p align=\"center\">.*?</p>", rep, text, flags=re.S)


def table_blocks(text):
    """Spans of markdown tables (>= 3 lines) in order."""
    return [(m.start(), m.end(), m[0]) for m in re.finditer(r"(?:^\|.*\n?)+", text, re.M) if m[0].strip().count("\n") >= 2]


def table_to_notes(block, area, number):
    """number(label) -> mã item đã khoá của dòng."""
    rows = block.strip().split("\n")
    head = cells(rows[0])
    out = []
    for row in rows[2:]:
        c = cells(row)
        label = unesc(c[0])
        n = number(label)
        rest = []
        for i, v in enumerate(c[1:], 1):
            v = unesc(v)
            if not v:
                continue
            h = head[i] if i < len(head) else ""  # a stray "|" in a cell makes extra cells: keep them
            rest.append(v if h.lower() in ("yêu cầu", "mô tả", "nội dung", "") else f"{unesc(h)}: {v}")
        out.append(f"- `{area}.{n:02d}` **{label}**" + (f": {'; '.join(rest)}" if rest else ""))
    return "\n".join(out)


TC_COLS = ["Tên testcase", "Priority", "Scenario", "Role", "Pre-condition", "Given/When/Then", "Expected Result"]


def tc_rows(block):
    rows = block.strip().split("\n")
    head = [re.sub(r"\s+", "", h).lower() for h in cells(rows[0])]
    def col(*names):
        for nm in names:
            if nm in head:
                return head.index(nm)
        return None
    idx = {"name": col("têntestcase", "testcase"), "prio": col("priority"), "kind": col("loạitest"),
           "scen": col("scenario"), "role": col("role", "role/pre-condition"), "pre": col("pre-condition", "precondition"),
           "gwt": col("given/when/then"), "exp": col("expectedresult")}
    if idx["name"] is None or idx["gwt"] is None:
        return None
    mapped = {i for i in idx.values() if i is not None}
    raw_head = cells(rows[0])
    out = []
    for row in rows[2:]:
        c = cells(row) + [""] * 10
        g = lambda k: unesc(c[idx[k]]) if idx[k] is not None else ""
        prio = g("prio") + (f" · {g('kind')}" if g("kind") else "")
        # columns the template has no place for go into Scenario with their header
        extra = [f"{unesc(raw_head[i])}: {unesc(c[i])}" for i in range(len(raw_head)) if i not in mapped and c[i].strip()]
        scen = "; ".join([x for x in [g("scen")] + extra if x])
        out.append("| " + " | ".join([g("name"), prio, scen, g("role"), g("pre"), g("gwt"), g("exp")]) + " |")
    return out


def convert(src, lock=None):
    lock = lock or Lock()
    rel = rel_of(src)
    lock.start(rel)
    text = open(src, encoding="utf-8").read().replace("\r\n", "\n")
    title, _, rest = text.partition("\n")
    h2 = split_h(rest, 2)
    preface = h2[0][1].strip()
    sections = h2[1:]
    ui = next((b for h, b in sections if re.match(r"\d+\.\s*(UI|Giao diện)", h)), "")
    req = next((b for h, b in sections if re.match(r"\d+\.\s*(Yêu cầu|Quy tắc)", h)), "")
    tcs = [b for h, b in sections if re.match(r"\d+\.\s*Testcase", h)]
    ask = next((b for h, b in sections if re.match(r"\d+\.\s*(Cần xác nhận|Câu hỏi|Cần đối chiếu)", h)), None)
    used = {id(x) for x in (ui, req, ask) if x is not None} | {id(x) for x in tcs}
    extra = [(re.sub(r"^\d+\.\s*", "", h), b) for h, b in sections if id(b) not in used]

    out = [title.strip(), ""]
    if preface:
        out += [re.sub(r"^> ?", "", preface, flags=re.M), ""]

    # ---- 1. UI
    out += ["## 1. UI", ""]
    tc_tables = []
    pages = split_h(ui, 3)
    lead = pages[0][1].strip()
    if lead:
        out += [lead, ""]
    for no, (head, body) in enumerate(pages[1:], 1):
        area_no = lock.area(rel, head, no)
        area = f"A{area_no:02d}"
        body, _, tests = body.partition("\n#### Testcase")
        if tests:
            tc_tables.append(tests)
        codes = list(dict.fromkeys(c for c in re.findall(CODE, head + "\n" + body) if c in FRAMES and not c.endswith("-DK")))
        name = re.sub(r"^Trang \d+:\s*", "", head.strip())  # some originals already say "Trang N:"
        out.append(f"### Trang {no}: " + (f"{', '.join(codes)} — " if codes else "") + name)
        body = html_images(body, no)
        pieces, pos = [], 0
        for s, e, block in table_blocks(body):
            notes = table_to_notes(block, area, lambda label: lock.item(rel, area_no, label))
            pieces += [body[pos:s], notes + "\n"]
            pos = e
        body = "".join(pieces) + body[pos:]
        body = body.replace("**Giải thích thành phần:**", "**Điểm cần lưu ý:**")
        first = body.find("**Điểm cần lưu ý:**")
        if first >= 0:  # one notes list: table rows first, then the original notes
            body = body[:first + 1] + body[first + 1:].replace("**Điểm cần lưu ý:**\n\n", "").replace("**Điểm cần lưu ý:**\n", "")
        out += [body.strip(), ""]

    # ---- 2. Yêu cầu
    out += ["---", "", "## 2. Yêu cầu", ""]
    def req_table(m):
        rows = [r for r in m[0].strip().split("\n") if r.strip()]
        lines = ["| Mã | Tên yêu cầu | Mô tả |", "|---|---|---|"]
        for r in rows:
            mm = re.match(r"- \*\*(REQ\d+)(?:\s*[–-]\s*([^:*]+))?:\*\*\s*(.*)", r)
            if not mm:
                return m[0]
            lines.append(f"| {mm[1]} | {(mm[2] or '').strip()} | {mm[3].replace('|', chr(92) + '|')} |")
        return "\n".join(lines) + "\n"
    req = re.sub(r"(?:^- \*\*REQ\d+.*\n?)+", req_table, req, flags=re.M)
    if "#### Quyền" not in req:  # role table straight under 2.4: give it the template's headings
        m = re.search(r"^### 2\.4.*\n", req, re.M)
        t = re.search(r"(?:^\| *Role\b.*\n)(?:^\|.*\n?)+", req[m.end():], re.M) if m else None
        if t:
            start, end = m.end() + t.start(), m.end() + t.end()
            after = req[end:]
            nxt = re.search(r"^#{2,4} ", after, re.M)
            body = after[:nxt.start()] if nxt else after
            rest = f"\n#### Ràng buộc khác\n{body}" if body.strip() else body
            req = req[:start] + "#### Quyền\n\n" + req[start:end] + rest + (after[nxt.start():] if nxt else "")
    parts = split_h(req, 4)
    if len(parts) > 1:
        rebuilt = [parts[0][1]]
        renamed = False
        for head, body in parts[1:]:
            if head.strip() == "Quyền" or renamed or head.strip() == "Ràng buộc khác":
                rebuilt.append(f"#### {head}\n{body}")
            else:
                rebuilt.append(f"#### Ràng buộc khác\n\n**{head.strip()}**\n{body}")
                renamed = True
        req = "\n".join(rebuilt)
    out += [req.strip(), ""]

    # ---- 3. Testcase
    out += ["---", "", "## 3. Testcase", "", f"### Feature: {title.lstrip('# ').strip()}", "",
            "| " + " | ".join(TC_COLS) + " |", "|---|---|---|---|---|---|---|"]
    leftovers = []
    for chunk in tc_tables + tcs:
        from_ui = chunk in tc_tables  # starts with the rest of "#### Testcase — <mục>"
        last = 0
        for s, e, block in table_blocks(chunk):
            rows = tc_rows(block)
            if rows is None:
                leftovers.append(block)
            else:
                out += rows
            between = chunk[last:s].strip()
            if from_ui and last == 0:
                between = re.sub(r"^[^\n]*", "", between, count=1).strip()
            if between:
                leftovers.append(between)
            last = e
        tail = chunk[last:].strip()
        if tail:
            leftovers.append(tail)
    out.append("")
    if leftovers:
        out += [x.strip() + "\n" for x in leftovers]

    # ---- 4. Câu hỏi
    if ask is not None and ask.strip():
        q = 0
        def qrep(m):
            nonlocal q
            q += 1
            return f"- **Q{q:02d}:** {m[1]}"
        out += ["---", "", "## 4. Câu hỏi cần xác nhận", "", re.sub(r"^- (?!\*\*Q\d)(.*)$", qrep, ask.strip(), flags=re.M), ""]

    for i, (head, body) in enumerate(extra, 5):
        out += ["---", "", f"## {i}. {head}", "", body.strip(), ""]
    return re.sub(r"\n{3,}", "\n\n", "\n".join(out)).rstrip() + "\n"


if __name__ == "__main__":
    src, dst = sys.argv[1:3]
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    lock = Lock()
    open(dst, "w", encoding="utf-8").write(convert(src, lock))
    lock.save()
