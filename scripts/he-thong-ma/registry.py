#!/usr/bin/env python3
"""Registry for one cluster: requirement (QC) + Figma frames + page specs -> registry.json + standard MD.

Code sources, in priority order (PLAN-he-thong-ma.md, "Nguồn mã và dữ liệu cho registry"):
  qc      - written in the QC requirement (REQ/EX/Flow/Case ids, screen codes it cites, its tables)
  figma   - frame codes / layer names designers put in Figma, where the requirement says nothing
  tu-dien - filled in by this tool from the base convention (A01, A01.03, F01 ...)
Every entry carries `source` (who gave the code) and `content` (who gave the name/text).
Requirements are read only, never changed.

  registry.py build <cluster> [--req ~/Downloads/requirements.zip] [--work .]
  registry.py md <cluster>
  registry.py all            # build + md for every cluster in clusters.json
"""
import argparse, collections, json, os, re, sys, unicodedata, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
CODE = r"[A-Z]{2,4}(?:-[A-Z]{1,4})+-\d{6}"


def norm(s):
    s = s.replace("đ", "d").replace("Đ", "D")
    s = "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


def slug(s):
    return norm(s).replace(" ", "-")[:40]


def cells(line):
    return [c.strip() for c in re.sub(r"\\\|", "/", line).strip().strip("|").split("|")]


# ---------------------------------------------------------------- requirement files
class Requirements:
    """requirements.zip or an extracted folder; paths are relative to `requirements/`."""

    def __init__(self, src):
        self.src = os.path.expanduser(src)
        self.zip = zipfile.ZipFile(self.src) if self.src.endswith(".zip") else None

    def names(self):
        if self.zip:
            return [n[len("requirements/"):] for n in self.zip.namelist() if n.startswith("requirements/") and n.endswith(".md")]
        return [os.path.relpath(os.path.join(d, f), self.src) for d, _, fs in os.walk(self.src) for f in fs if f.endswith(".md")]

    def read(self, rel):
        if self.zip:
            return self.zip.read("requirements/" + rel).decode("utf-8")
        return open(os.path.join(self.src, rel), encoding="utf-8").read()


def auto_prefix(rel):
    """course_management/homework-test/homework-test.md -> CM-HT (initials of first folder + file)."""
    parts = rel[:-3].split("/")
    ini = lambda s: "".join(w[0] for w in re.split(r"[_\-\s]+", s) if w and w not in ("requirement", "requirements")).upper()
    head, stem = ini(parts[0]) or parts[0][:2].upper(), ini(parts[-1])
    if len(stem) < 2:
        stem = re.sub(r"[^a-z]", "", parts[-1].lower())[:2].upper()
    return f"{head}-{stem[:3]}"


def prefixes(reqs, overrides):
    out, used = {}, collections.Counter()
    for rel in sorted(reqs.names()):
        if rel.endswith("requirement_template.md"):
            continue
        p = overrides.get(rel) or auto_prefix(rel)
        used[p] += 1
        out[rel] = p if used[p] == 1 else f"{p}{used[p]}"
    return out


def expand_refs(text):
    """codes cited in text, including short lists 'CD-KH-060100 / 060200'."""
    found = {m.upper() for m in re.findall(CODE, text, re.I)}
    for m in re.finditer(rf"({CODE})((?:\s*/\s*\d{{6}})+)", text, re.I):
        pre = m[1].upper().rsplit("-", 1)[0]
        found |= {f"{pre}-{x}" for x in re.findall(r"\d{6}", m[2])}
    return sorted(found)


def parse_requirement(text, prefix):
    m = re.search(r"\n## \d+\.\s*Yêu cầu", text)
    ui, rest = (text[:m.start()], text[m.start():]) if m else (text, "")
    ui = re.split(r"\n## \d+\.\s*UI\b", ui, 1)[-1]
    tests_block = ""
    tm = re.search(r"\n## \d+\.\s*Testcase", rest)
    if tm:  # 24 files keep testcases in their own top-level section
        nxt = re.search(r"\n## \d+\.", rest[tm.end():])
        tests_block = rest[tm.start(): tm.end() + nxt.start()] if nxt else rest[tm.start():]
    loose = tests_block if "\n#### Testcase" not in tests_block else ""  # one flat table, no per-section headings
    sections = []
    for chunk in re.split(r"\n### ", ui)[1:]:
        title, _, body = chunk.partition("\n")
        head, _, tests = body.partition("\n#### Testcase")
        sections.append({"no": len(sections) + 1, "title": title.strip(), "head": head, "tests": tests})
    if tests_block:  # "#### Testcase — <section title>" -> attach to that section
        for chunk in re.split(r"\n#### Testcase", tests_block)[1:]:
            title, _, body = chunk.partition("\n")
            t = norm(title.strip(" —-"))
            sec = next((s for s in sections if t and (t in norm(s["title"]) or norm(s["title"]) in t)), None)
            if sec:
                sec["tests"] += "\n" + body
            elif sections:
                sections[-1]["tests"] += "\n" + body

    reqs = {}
    for m in re.finditer(r"\*\*(REQ\d+)(?:\s*[–-]\s*([^:*]+))?:\*\*\s*(.+)", rest):
        reqs[m[1]] = {"id": f"{prefix}.{m[1]}", "name": (m[2] or "").strip(), "text": m[3].strip(), "source": "qc", "content": "qc"}
    for m in re.finditer(r"^\|\s*(REQ\d+)\s*\|([^|]*)\|(.*)\|\s*$", rest, re.M):
        c = cells(m[0])
        reqs.setdefault(m[1], {"id": f"{prefix}.{m[1]}", "name": c[1], "text": " | ".join(c[2:]), "source": "qc", "content": "qc"})
    exc = {}
    for m in re.finditer(r"\*\*(EX\d+)(?:\s*[–-]\s*[^:*]+)?:\*\*\s*(.+)", rest):
        exc[m[1]] = {"id": f"{prefix}.{m[1]}", "text": m[2].strip(), "source": "qc", "content": "qc"}
    for m in re.finditer(r"^\|\s*(EX\d+)\s*\|(.*)\|\s*$", rest, re.M):
        exc.setdefault(m[1], {"id": f"{prefix}.{m[1]}", "text": " | ".join(cells(m[0])[1:]), "source": "qc", "content": "qc"})
    flows = {}
    for m in re.finditer(r"\*\*Flow (\d+)(?: / ([^:*]+))?(?::\s*([^*]+))?\*\*(?::?\s*(.*))?", rest):
        name = (m[3] or m[4] or "").strip()
        if f"Flow {m[1]}" in flows:
            continue
        flows[f"Flow {m[1]}"] = {"id": f"{prefix}.FLOW{int(m[1]):02d}", "name": name[:120], "source": "qc", "content": "qc",
                                 "requirements": [f"{prefix}.{r}" for r in expand_req_range(m[2] or "")]}
    return sections, reqs, exc, flows, loose


def expand_req_range(s):
    out = []
    for a, b in re.findall(r"REQ(\d+)(?:\s*[–-]\s*REQ(\d+))?", s):
        out += [f"REQ{i:02d}" for i in range(int(a), int(b or a) + 1)]
    return out


# ---------------------------------------------------------------- figma page specs
class Specs:
    def __init__(self, work):
        self.work, self.cache, self.code_ids = work, {}, {}

    def nodes(self, name):
        if name in self.cache:
            return self.cache[name]
        path = f"{self.work}/.figma/pages/{name}/page-spec.json"
        if not os.path.exists(path):
            self.cache[name] = None
            return None
        tree = json.load(open(path))["tree"]
        nodes = []

        def walk(n, trail, region, parent=None):
            t = n.get("text")
            comp = n.get("component") or {}
            props = comp.get("properties") or {}
            me = {"id": n["id"], "name": n["name"], "type": n["type"],
                  "chars": t.get("characters") if isinstance(t, dict) else None,
                  "set": comp.get("set"), "props": props,
                  "labels": [v for v in props.values() if isinstance(v, str) and not re.fullmatch(r"\d+:\d+", v)],
                  "trail": trail, "region": region, "parent": parent}
            nodes.append(me)
            for c in n.get("children") or []:
                walk(c, trail + [n["name"]], region or (c["name"] if n["name"] == "Body" else None), me)

        content = next((c for c in tree["children"] if c["name"] == "Content"), tree)  # popups have no Content wrapper
        walk(content, [], None)
        self.cache[name] = nodes
        return nodes

    def in_code(self, name, node_id):
        if name not in self.code_ids:
            p = f"{self.work}/components/figma/{name}/Content.tsx"
            self.code_ids[name] = set(re.findall(r'data-figma-id="([^"]+)"', open(p).read())) if os.path.exists(p) else set()
        return node_id in self.code_ids[name]


RANK = {"TEXT": 0, "INSTANCE": 1, "FRAME": 2}


def find(nodes, term):
    """Best layer for a label. Exact visible text/prop > exact layer name > containment."""
    t = norm(term)
    if len(t) < 2:
        return None, None
    pick = lambda cands: sorted(cands, key=lambda n: (RANK.get(n["type"], 3), len(n["trail"])))[0]
    a = [n for n in nodes if (n["chars"] and norm(n["chars"]) == t) or any(norm(l) == t for l in n["labels"])]
    inst = [n for n in a if n["type"] == "INSTANCE"]  # prefer the owning instance over its inner text layer
    if inst:
        return pick(inst), "cao"
    if a:
        return pick(a), "cao"
    b = [n for n in nodes if len(t) > 2 and (norm(n["name"]).endswith(" " + t) or norm(n["name"]) == t)]
    if b:
        return pick(b), "cao"
    if len(t) < 3:
        return None, None
    c = [n for n in nodes if (n["chars"] and t in norm(n["chars"])) or t in norm(n["name"]) or any(t in norm(l) for l in n["labels"])]
    return (pick(c), "thap") if c else (None, None)


def owner_component(node):
    while node:
        if node["set"]:
            return node
        node = node["parent"]
    return None


def special_match(nodes, label, term):
    """filters open a DD trigger; '⋮' is the row action icon."""
    if norm(label).startswith("loc "):
        trig = [x for x in nodes if x["set"] == "DD/Molecule/Trigger" and any(
            norm(term)[:8] in norm(c["chars"] or "") for c in nodes
            if c["parent"] is x or (c["parent"] and c["parent"]["parent"] is x))]
        if trig:
            return trig[0], "cao"
    if "⋮" in label:
        icons = [x for x in nodes if x["set"] == "Action Icon" and "cell hanh dong" in norm(" ".join(x["trail"]))]
        if icons:
            return icons[0], "cao"
    return None, None


# ---------------------------------------------------------------- build
def build(cluster, args):
    work = args.work
    pages = {p["name"]: p for p in json.load(open(f"{work}/figma.pages.json"))["pages"]}
    figma = json.load(open(f"{work}/docs/he-thong-ma/figma-frames.json"))["frames"]
    reqmap = json.load(open(f"{work}/docs/requirements-map.json"))["requirements"]
    reqs = Requirements(args.req)
    pref = prefixes(reqs, cluster.get("prefix", {}))
    in_cluster = re.compile(cluster["screens"])
    specs = Specs(work)

    # screens: Figma frames of the cluster, plus whatever the requirement cites
    req_files = cluster.get("requirements") or [k for k, v in reqmap.items() if any(in_cluster.match(s) for s in v["screens"])]
    texts = {rel: reqs.read(rel) for rel in req_files}
    cited = set()
    for t in texts.values():
        cited |= {c for c in expand_refs(t) if in_cluster.match(c)}
    for rel in req_files:
        cited |= {s for s in reqmap.get(rel, {}).get("screens", []) if in_cluster.match(s)}
    figma_prefix = cluster.get("prefix_figma") or (pref[req_files[0]] if req_files else cluster["name"].upper())
    codes = sorted({c for c in figma if not c.endswith("-DK") and in_cluster.match(c)} | cited)

    def route_of(code):
        return pages.get(code.lower(), {}).get("route")

    screens = {}
    for code in codes:
        f = figma.get(code)
        kind = f["loai"] if f else "chua-co-frame"
        shown = f.get("manHienThi") if f else None
        q = {"popup": "?popup=", "dropdown": "?popup=", "trang-thai": "?state="}.get(kind)
        base = route_of(shown) if shown else None
        screens[code] = {
            "id": code, "name": slug(f["title"].split(" / ")[-1]) if f else None, "title": f["title"] if f else None,
            "kind": kind, "parent": f.get("parent") if f else None, "shownOn": shown,
            "kindConfidence": f.get("tinCay") if f else None,
            "source": "qc" if code in cited else "figma", "content": "figma" if f else "qc",
            "nodeId": f["id"] if f else None, "inFigma": bool(f), "inPageList": code.lower() in pages,
            "synced": bool(specs.nodes(code.lower())), "route": route_of(code),
            "link": (base + q + code) if (q and base) else (route_of(code) if kind == "man-chinh" else None),
            "dark": code + "-DK" if code + "-DK" in figma else None, "openedFrom": [c for c in (f or {}).get("linksIn", []) if not c.endswith("-DK")],
            "citedByRequirement": code in cited, "regions": []}

    out = {"cluster": cluster["name"], "title": cluster["title"], "figmaPrefix": figma_prefix, "requirements": [], "screens": screens, "regions": [],
           "exceptions": [], "flows": [], "testcases": [], "issues": []}
    for rel in req_files:
        mapped = [s for s in reqmap.get(rel, {}).get("screens", []) if s in screens and screens[s]["kind"] == "man-chinh"]
        build_requirement(rel, pref[rel], texts[rel], screens, specs, out, mapped)

    # Figma layers no requirement item names: keep them as figma items so nothing on screen goes uncoded
    main_synced = [c.lower() for c, s in screens.items() if s["kind"] == "man-chinh" and s["synced"]]
    used = {m["figmaId"] for r in out["regions"] for it in r["items"] for ms in it["matches"].values() for m in ms}
    by_region = collections.defaultdict(list)
    skip = re.compile(r"^(spacer|container|label|icon|frame \d+|cell ·|row|chevron)", re.I)
    for name in main_synced:
        for n in specs.nodes(name):
            if (n["type"] == "INSTANCE" and n["id"] not in used and not skip.match(n["name"])
                    and n["set"] not in ("Icon", "Action Icon", "Checkbox", "Atom/Tag") and not n["id"].startswith("I")):
                by_region[n["region"] or "(ngoài Body)"].append((name, n))
    qc_region_of = {}  # figma region name -> qc region that already matched layers inside it
    for r in out["regions"]:
        for it in r["items"]:
            for ms in it["matches"].values():
                for m in ms:
                    if m["region"]:
                        qc_region_of.setdefault(m["region"], r)
    fno = 0
    for fr, layers in by_region.items():
        target = qc_region_of.get(fr)
        if not target:
            fno += 1
            target = {"id": f"{figma_prefix}.F{fno:02d}", "name": slug(fr), "title": fr, "screens": sorted({x for x, _ in layers}),
                      "source": "tu-dien", "content": "figma", "needsDesign": False, "figmaDiffNotes": [], "items": []}
            out["regions"].append(target)
        seen = set()
        for name, n in layers:
            key = (n["name"], n["set"])
            if key in seen:
                continue
            seen.add(key)
            k = len(target["items"]) + 1
            own = n
            target["items"].append({
                "id": f"{target['id']}.{k:02d}", "name": slug(n["name"]), "label": n["name"], "spec": "",
                "source": "tu-dien", "content": "figma", "status": "chi-co-tren-figma", "relations": [], "testcases": [],
                "missingTerms": [],
                "matches": {name: [{"term": n["name"], "figmaId": n["id"], "layer": n["name"], "confidence": "cao",
                                    "region": n["region"], "owner": own["name"], "component": own["set"],
                                    "variant": own["props"], "inCode": specs.in_code(name, n["id"])}]}})

    for r in out["regions"]:
        for s in r["screens"]:
            if s.upper() in screens and r["id"] not in screens[s.upper()]["regions"]:
                screens[s.upper()]["regions"].append(r["id"])
    issues(out, screens)
    path = f"{args.out}/{cluster['name']}.registry.json"
    json.dump(out, open(path, "w"), ensure_ascii=False, indent=1)
    return out, path


STOP = {"popup", "va", "cua", "bang", "cau", "hoi", "trang", "man", "danh", "sach"}


def guess_sections(sections, screens, cited):
    """popup/state frames the requirement never cites -> the one section they most likely belong to.
    Strong: the frame's own name appears in the section text. Else: shared rare words with the section title."""
    out = collections.defaultdict(list)
    for c, s in screens.items():
        if c in cited or s["kind"] not in ("popup", "trang-thai", "dropdown") or not s["title"]:
            continue
        last = norm(s["title"].split(" / ")[-1].split(" · ")[0])
        words = set(last.split()) - STOP
        best, score = None, 0
        for sec in sections:
            title = set(norm(sec["title"]).split()) - STOP
            sc = 3 if len(last) > 6 and last.replace("popup ", "") in norm(sec["title"] + " " + sec["head"]) else 0
            sc += len(words & title)
            if sc > score:
                best, score = sec["no"], sc
        if best and score >= 2:
            out[best].append(c)
    return out


# A section that cites no screen code is matched against the requirement's own screens, if they are few.
MAX_FALLBACK_SCREENS = 4


def build_requirement(rel, P, text, screens, specs, out, mapped=()):
    sections, reqs, exc, flows, loose = parse_requirement(text, P)
    out["requirements"] += list(reqs.values())
    out["exceptions"] += list(exc.values())
    out["flows"] += list(flows.values())
    title_of = {s["no"]: s["title"] for s in sections}

    def target_section(phrase):
        words = norm(phrase.replace("`", "")).split()
        for size in range(len(words), 0, -1):
            p = " ".join(words[:size])
            if len(p) < 6:
                break
            for s in sections:
                if p in norm(s["title"]):
                    return s["no"]
        for s in sections:  # phrase only appears inside a section body, e.g. a confirm popup
            if len(words) > 1 and " ".join(words) in norm(s["head"]):
                return s["no"]
        return None

    TERM = re.compile(r"`([^`]+)`")
    cited = {c for c in expand_refs(text)}
    guesses = guess_sections(sections, screens, cited)
    regions = []
    for s in sections:
        area = f"A{s['no']:02d}"
        refs = [c for c in expand_refs(s["head"]) if c in screens]
        guessed = [c for c in guesses.get(s["no"], []) if c not in refs]
        if not refs and not guessed and 0 < len(mapped) <= MAX_FALLBACK_SCREENS:
            guessed = list(mapped)
        lacks_ui = "UI cần bổ sung" in s["head"] or "cần bổ sung" in s["head"].split("**Giải thích")[0]
        region = {"id": f"{P}.{area}", "name": slug(s["title"]), "title": s["title"],
                  "screens": [c.lower() for c in refs + guessed], "screensGuessed": guessed,
                  "source": "tu-dien", "content": "qc", "requirement": rel, "needsDesign": lacks_ui,
                  "figmaDiffNotes": [l.strip("- ").strip() for l in s["head"].splitlines() if "Khác Figma" in l], "items": []}
        regions.append(region)
        synced = [c for c in region["screens"] if specs.nodes(c)]
        n = 0
        for block in re.findall(r"((?:^\|.*\n)+)", s["head"] + "\n", flags=re.M):
            rows = block.strip().splitlines()
            if len(rows) < 3:
                continue
            for row in rows[2:]:
                c = cells(row)
                n += 1
                label = c[0]
                terms = TERM.findall(label) or [re.sub(r"[*`]", "", label).strip()]
                detail = " | ".join(c[1:])
                if not TERM.findall(label):
                    terms += TERM.findall(detail)[:1]
                if norm(label) == "cot":
                    terms = [t for t in TERM.findall(detail) if len(norm(t)) > 1]
                if "⋮" in label:
                    terms = ["⋮"]
                item = {"id": f"{P}.{area}.{n:02d}", "name": slug(TERM.sub(r"\1", label)), "label": re.sub(r"[`*]", "", label),
                        "spec": detail, "source": "tu-dien", "content": "qc", "matches": {}, "relations": [], "testcases": []}
                for scr in synced:
                    nodes = specs.nodes(scr)
                    for t in terms:
                        node, conf = special_match(nodes, label, t)
                        if not node:
                            node, conf = find(nodes, t)
                        if not node:
                            continue
                        own = owner_component(node)
                        item["matches"].setdefault(scr, []).append({
                            "term": t, "figmaId": node["id"], "layer": node["name"], "confidence": conf, "region": node["region"],
                            "owner": own["name"] if own else None, "component": own["set"] if own else None,
                            "variant": own["props"] if own else None, "inCode": specs.in_code(scr, node["id"])})
                found = {m["term"] for ms in item["matches"].values() for m in ms}
                item["missingTerms"] = [t for t in terms if t not in found] if synced else []
                wants = "cần bổ sung" in detail or "cần bổ sung" in label
                if wants and item["matches"]:
                    item["status"] = "req-ghi-thieu-nhung-figma-co"
                elif wants:
                    item["status"] = "chua-co-thiet-ke"
                elif item["matches"]:
                    item["status"] = "khop" if len(item["matches"]) == len(synced) else "khop-mot-phan"
                elif synced:
                    item["status"] = "chua-thay-tren-figma"
                elif lacks_ui:
                    item["status"] = "chua-co-thiet-ke"
                else:
                    item["status"] = "chua-co-spec"
                for m in re.finditer(r"[Mm]ở popup ([^.;,)(]+)", detail):
                    sec = target_section(m[1])
                    item["relations"].append({"type": "opens", "target": f"{P}.A{sec:02d}" if sec else None, "raw": m[0]})
                for m in re.finditer(r"[Xx]em khu vực ([^.;,)(]+)", detail):
                    sec = target_section(m[1])
                    item["relations"].append({"type": "see", "target": f"{P}.A{sec:02d}" if sec else None, "raw": m[0]})
                for r in re.findall(r"REQ\d+", detail):
                    item["relations"].append({"type": "governed-by", "target": f"{P}.{r}", "raw": r})
                region["items"].append(item)

    seen_tc = collections.Counter()
    pairs = [(s["tests"], region) for s, region in zip(sections, regions)] + [(loose, None)]
    for tests, region in pairs:
        for row in tests.splitlines():
            if not re.match(r"^\| *(Toast )?Case", row):
                continue
            c = cells(row)
            if len(c) < 4:
                continue
            name = c[0].split(":")[0].replace(" ", "")
            num = re.search(r"[0-9]+[a-z]?", name)
            base = f"{P}.{'T' if 'Toast' in name else ''}TC{(num[0] if num else '0').zfill(2)}"
            seen_tc[base] += 1
            # columns: Case | Priority | [Smoke] | Scenario (REQ/EX/Flow) | Role | Precondition | Steps | Expected
            si = next((i for i in (3, 2) if re.search(r"REQ|EX\d|Flow", c[i])), 3 if c[2] in ("", "Smoke") else 2)
            scen = c[si]
            tc = {"id": base if seen_tc[base] == 1 else f"{base}-{seen_tc[base]}", "title": c[0], "priority": c[1],
                  "smoke": "Smoke" in c[2], "region": region["id"] if region else None, "scenario": scen, "source": "qc", "content": "qc",
                  "requirements": [f"{P}.{r}" for r in expand_req_range(scen)],
                  "exceptions": [f"{P}.{r}" for r in re.findall(r"EX\d+", scen)],
                  "flows": [flows[f]["id"] for f in re.findall(r"Flow \d+", scen) if f in flows], "items": []}
            if seen_tc[base] > 1:
                tc["idNote"] = "requirement lặp số Case; tool thêm hậu tố"
            blob = norm(" ".join(c[si + 3:]))
            for it in (region["items"] if region else [i for r in regions for i in r["items"]]):
                lab = norm(it["label"])
                if len(lab) > 3 and lab in blob:
                    tc["items"].append(it["id"])
                    it["testcases"].append(tc["id"])
            out["testcases"].append(tc)
    out["regions"] += regions
    out.setdefault("requirementFiles", []).append({"file": rel, "prefix": P, "title": text.splitlines()[0].lstrip("# ").strip()})


def issues(out, screens):
    """cross-checks QC vs Figma; registry keeps QC and reports the gap."""
    add = lambda kind, ref, text: out["issues"].append({"kind": kind, "ref": ref, "text": text})
    for c, s in screens.items():
        if s["citedByRequirement"] and not s["inFigma"]:
            add("qc-ma-khong-co-tren-figma", c, "requirement nhắc mã này nhưng Figma không có frame")
        if not s["citedByRequirement"] and s["inFigma"] and s["kind"] != "ban-toi":
            add("figma-chua-co-requirement", c, f"{s['kind']} “{s['title']}” chưa được requirement nhắc tới")
        if s["kind"] in ("popup", "trang-thai", "dropdown") and not s["shownOn"]:
            add("popup-khong-co-man-cha", c, "chưa xác định được màn chính để mở")
        if s["kind"] != "man-chinh" and s["kindConfidence"] and s["kindConfidence"] != "cao":
            add("phan-loai-can-duyet", c, f"loại {s['kind']}, màn cha {s['parent']} — tin cậy {s['kindConfidence']}")
        if s["kind"] in ("popup", "trang-thai") and s["inFigma"] and not s["openedFrom"]:
            add("thieu-prototype-link", c, "không có prototype link nào đi vào frame")
    ids = collections.Counter(i["id"] for r in out["regions"] for i in r["items"])
    for i, n in ids.items():
        if n > 1:
            add("trung-ma", i, f"mã item lặp {n} lần")
    for t in out["testcases"]:
        if not (t["requirements"] or t["exceptions"] or t["flows"]):
            add("testcase-khong-tro-req", t["id"], "testcase không ghi REQ/EX/Flow")
    known = {x["id"] for x in out["requirements"] + out["exceptions"]}
    for t in out["testcases"]:
        for r in t["requirements"] + t["exceptions"]:
            if r not in known:
                add("testcase-tro-ma-khong-ton-tai", t["id"], f"trỏ tới {r}")
    for x in out["requirements"] + out["exceptions"]:
        if not any(x["id"] in t["requirements"] + t["exceptions"] for t in out["testcases"]):
            add("req-chua-co-testcase", x["id"], "chưa có testcase ghi mã này")


# ---------------------------------------------------------------- md
STATUS = {"khop": "Khớp", "khop-mot-phan": "Khớp một phần", "chua-thay-tren-figma": "Chưa thấy trên Figma",
          "chua-co-spec": "Chưa sync", "chua-co-thiet-ke": "Chưa có thiết kế",
          "req-ghi-thieu-nhung-figma-co": "Requirement ghi thiếu, Figma đã có", "chi-co-tren-figma": "Chỉ có trên Figma"}
KIND = {"man-chinh": "Màn chính", "popup": "Popup", "trang-thai": "Trạng thái", "dropdown": "Dropdown", "chua-co-frame": "Chưa có frame"}
TIN = {"cao": "cao", "trung-binh": "trung bình", "thap": "thấp"}
SRC = {"qc": "QC", "figma": "Figma", "tu-dien": "Tự điền"}
ISSUE = {"qc-ma-khong-co-tren-figma": "Requirement nhắc mã Figma không có", "figma-chua-co-requirement": "Frame Figma chưa có requirement",
         "popup-khong-co-man-cha": "Popup chưa có màn cha", "phan-loai-can-duyet": "Phân loại cần design duyệt",
         "thieu-prototype-link": "Thiếu prototype link đi vào", "trung-ma": "Trùng mã",
         "testcase-khong-tro-req": "Testcase không trỏ REQ", "testcase-tro-ma-khong-ton-tai": "Testcase trỏ mã không tồn tại",
         "req-chua-co-testcase": "REQ/EX chưa có testcase"}


def md(cluster, R, path):
    esc = lambda s: str(s).replace("|", "\\|").replace("\n", " ")
    one = [f["prefix"] for f in R.get("requirementFiles", [])]
    strip = ([one[0] + "."] if len(one) == 1 else []) + [R["figmaPrefix"] + "."]  # several files: keep file prefixes
    short = lambda s: next((s[len(p):] for p in strip if s and s.startswith(p)), s)
    S = R["screens"]
    mains = [s for s in S.values() if s["kind"] == "man-chinh"]
    subs = [s for s in S.values() if s["kind"] not in ("man-chinh",)]
    L = [f"# {R['title']}", "", "> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, "
         "Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.", "",
         "## 1. Định danh", "", "| Mã | Tên | Route | Bản tối | Nguồn |", "|---|---|---|---|---|"]
    for s in mains:
        L.append(f"| `{s['id']}` | {esc(s['title'] or '—')} | `{s['route'] or '—'}` | {('`' + s['dark'] + '`') if s['dark'] else '—'} | {SRC[s['source']]} |")
    L += [""] + [f"Requirement: `{f['file']}` — {f['title']} (tiền tố `{f['prefix']}`)." for f in R.get("requirementFiles", [])]
    L += ["", "## 2. Luồng", ""]
    for f in R["flows"]:
        L.append(f"- `{short(f['id'])}` {esc(f['name'])} — " + ", ".join(f"`{short(r)}`" for r in f["requirements"]))
    L += ["", "## 3. Popup, trạng thái, dropdown", "",
          "| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |", "|---|---|---|---|---|---|---|---|---|"]
    for s in sorted(subs, key=lambda s: s["id"]):
        L.append(f"| `{s['id']}` | {esc((s['title'] or '—').split(' / ')[-1])} | {KIND.get(s['kind'], s['kind'])} | {s['parent'] or '—'} | "
                 f"{s['shownOn'] or '—'} | {', '.join(s['openedFrom']) or '—'} | {('`' + s['link'] + '`') if s['link'] else '—'} | "
                 f"{SRC[s['source']]} | {TIN.get(s['kindConfidence'], '—')} |")
    L += ["", "## 4. Khu vực và item", ""]
    for r in R["regions"]:
        L += [f"### `{short(r['id'])}` {esc(r['title'])}", "",
              "Frame: " + (", ".join(f"`{s.upper()}`" for s in r["screens"]) or "chưa có")
              + (f" (tool đoán:{', '.join(r['screensGuessed'])})" if r.get("screensGuessed") else "")
              + f" · Nguồn nội dung: {SRC[r['content']]}", "",
              "| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |",
              "|---|---|---|---|---|---|---|---|---|"]
        for i in r["items"]:
            first = next(iter(i["matches"].values()), [])
            comp = "; ".join(sorted({f"`{m['component']}` " + ", ".join(f"{k}={v}" for k, v in (m["variant"] or {}).items() if k in ("Type", "Size", "State", "Kiểu"))
                                     for m in first if m["component"]}))
            layer = "; ".join(f"`{m['figmaId']}` {m['layer']}" for m in first[:2])
            code = "có" if first and all(m["inCode"] for m in first) else "—"
            rel = "; ".join(f"{x['type']} `{short(x['target'])}`" for x in i["relations"] if x["target"])
            tc = ", ".join(f"`{short(t)}`" for t in i["testcases"])
            L.append(f"| `{short(i['id'])}` | {i['name']} | {esc(comp)} | {esc(layer)} | {code} | {rel} | {tc} | {STATUS[i['status']]} | {SRC[i['content']]} |")
        L.append("")
    L += ["## 5. Nghiệp vụ", "", "| Mã | Tên | Nội dung |", "|---|---|---|"]
    L += [f"| `{short(x['id'])}` | {esc(x['name'])} | {esc(x['text'])} |" for x in R["requirements"]]
    L += [f"| `{short(x['id'])}` | Ngoại lệ | {esc(x['text'])} |" for x in R["exceptions"]]
    L += ["", "## 6. Testcase", "", "| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |", "|---|---|---|---|---|---|---|"]
    for t in R["testcases"]:
        L.append(f"| `{short(t['id'])}` | {esc(t['title'])} | {t['priority']} | {'Có' if t['smoke'] else ''} | {esc(t['scenario'])} | "
                 f"{('`' + short(t['region']) + '`') if t['region'] else '—'} | " + ", ".join(f"`{short(i)}`" for i in t["items"]) + " |")
    L += ["", "## 7. Code", "",
          "- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.",
          "- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.", "",
          "## 8. Độ lệch cần xử lý", ""]
    if cluster.get("notes"):
        L += ["**Đã đối chiếu trực tiếp**", ""] + [f"- {n}" for n in cluster["notes"]] + [""]
    L += ["**Tool báo, cần người xem**", ""]
    for r in R["regions"]:
        for n in r["figmaDiffNotes"]:
            L.append(f"- `{short(r['id'])}` {esc(n)}")
    for s in ("chua-thay-tren-figma", "req-ghi-thieu-nhung-figma-co", "chua-co-spec"):
        its = [short(i["id"]) for r in R["regions"] for i in r["items"] if i["status"] == s]
        if its:
            L.append(f"- {STATUS[s]} ({len(its)}): " + ", ".join(f"`{x}`" for x in its))
    grouped = collections.defaultdict(list)
    for x in R["issues"]:
        grouped[x["kind"]].append(x)
    for k, xs in grouped.items():
        L.append(f"- {ISSUE.get(k, k)} ({len(xs)}): " + ", ".join(f"`{short(x['ref'])}`" for x in xs[:40]) + (" …" if len(xs) > 40 else ""))
    L += ["", "## 9. Chi tiết dựng", "", "Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.", ""]
    open(path, "w", encoding="utf-8").write("\n".join(L))
    return len(L)


def summary(R):
    src = collections.Counter()
    for s in R["screens"].values():
        src["man/" + s["source"]] += 1
    for r in R["regions"]:
        src["khu-vuc/" + r["source"] + "+" + r["content"]] += 1
        for i in r["items"]:
            src["item/" + i["source"] + "+" + i["content"]] += 1
    for k in ("requirements", "exceptions", "flows", "testcases"):
        src[k + "/qc"] += len(R[k])
    st = collections.Counter(i["status"] for r in R["regions"] for i in r["items"])
    return {"nguon": dict(sorted(src.items())), "trangThaiItem": dict(st), "issues": dict(collections.Counter(x["kind"] for x in R["issues"]))}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("cmd", choices=["build", "md", "all"])
    ap.add_argument("cluster", nargs="?")
    ap.add_argument("--req", default="~/Downloads/requirements.zip")
    ap.add_argument("--work", default=os.path.abspath(os.path.join(HERE, "..", "..")))
    ap.add_argument("--out", default=None)
    ap.add_argument("--screens", help="cụm tạm chưa có trong clusters.json: regex mã màn")
    ap.add_argument("--title")
    args = ap.parse_args()
    args.out = args.out or f"{args.work}/docs/he-thong-ma"
    clusters = {c["name"]: c for c in json.load(open(f"{args.work}/docs/he-thong-ma/clusters.json"))["clusters"]}
    if args.screens and args.cluster not in clusters:
        clusters[args.cluster] = {"name": args.cluster, "title": args.title or args.cluster, "screens": args.screens}
    names = list(clusters) if args.cmd == "all" else [args.cluster]
    for name in names:
        c = clusters[name]
        if args.cmd in ("build", "all"):
            R, p = build(c, args)
            print(p)
        else:
            R = json.load(open(f"{args.out}/{name}.registry.json"))
        if args.cmd in ("md", "all", "build"):
            n = md(c, R, f"{args.out}/{name}.md")
            print(f"{args.out}/{name}.md", n, "dòng")
        print(json.dumps(summary(R), ensure_ascii=False))


if __name__ == "__main__":
    sys.exit(main())
