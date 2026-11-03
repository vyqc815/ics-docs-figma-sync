// "Màn hình Figma": the NAVIGATION screen table, searchable by code prefix / name, previewed on the right.
(function () {
  var KIND_ORDER = { screen: 0, tab: 1, popup: 2, state: 2, "popup-state": 3 };
  var STATUS = [
    ["", "Mọi trạng thái"], ["final", "Final"], ["notfinal", "Chưa Final"], ["todo", "Chưa làm"],
    ["removed", "Đã bỏ (gạch ngang)"], ["outside", "Ngoài NAVIGATION"],
  ];
  var THEMES = [["light", "Bản Light"], ["dark", "Bản Dark (-DK)"], ["", "Light và Dark"]];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function init() {
    var host = document.getElementById("screen-browser");
    if (!host || host.dataset.ready) return;
    host.dataset.ready = "1";
    var ui = window.SyncUI;
    fetch(ui.root() + "assets/figma_index.json").then(function (r) { return r.json(); })
      .then(function (data) { render(host, data, ui); })
      .catch(function (e) { console.error("[Screens] Error:", e); host.textContent = "Không tải được danh sách màn hình."; });
  }

  function matchStatus(f, st) {
    if (st === "final") return !!f.final;
    if (st === "notfinal") return !f.final;
    if (st === "todo") return !!f.todo;
    if (st === "removed") return !!f.removed;
    if (st === "outside") return !f.in_nav;
    return true;
  }

  function render(host, data, ui) {
    var state = { q: "", group: "", type: "", status: "", theme: "light", current: null };
    var list = el("div", "sb-list card"), preview = el("div", "sb-preview card");
    var search = el("div", "sb-search"), input = el("input");
    input.placeholder = "Tìm mã (ADM-HV-02) hoặc tên màn…  /";
    var filters = el("div", "sb-filters"), count = el("div", "sb-count");
    var items = el("div", "sb-items");
    search.append(input, filters, count);
    list.append(search, items);
    var info = el("div", "sb-info"), frame = el("div", "figma-frame is-loading");
    frame.innerHTML = '<div class="figma-loading">Chọn một màn hình để xem</div><iframe title="Figma" allowfullscreen></iframe>';
    preview.append(info, frame);
    host.append(list, preview);
    var iframe = frame.querySelector("iframe");
    iframe.addEventListener("load", function () { if (iframe.src) frame.classList.remove("is-loading"); });

    function dropdown(key, label, options) {
      var wrap = el("label", "sb-filter");
      wrap.append(el("span", "", label));
      var sel = el("select", "figma-select");
      options.forEach(function (o) { sel.append(new Option(o[1], o[0], false, o[0] === state[key])); });
      sel.addEventListener("change", function () { state[key] = sel.value; draw(); });
      wrap.append(sel);
      filters.append(wrap);
      return sel;
    }
    var groupOpts = [["", "Mọi nhóm"]].concat(Object.keys(data.groups).sort().map(function (g) {
      return [g, g + " · " + data.groups[g]];
    }));
    var types = Array.from(new Set(data.frames.map(function (f) { return f.type; }).filter(Boolean))).sort();
    dropdown("group", "Nhóm", groupOpts);
    dropdown("type", "Loại", [["", "Mọi loại"]].concat(types.map(function (t) { return [t, t]; })));
    dropdown("status", "Trạng thái", STATUS);
    dropdown("theme", "Bản", THEMES);
    var reset = el("button", "chip", "Xoá bộ lọc");
    reset.addEventListener("click", function () {
      state.q = ""; input.value = ""; state.group = ""; state.type = ""; state.status = ""; state.theme = "light";
      filters.querySelectorAll("select").forEach(function (sel, i) { sel.value = ["", "", "", "light"][i]; });
      draw();
    });
    filters.append(reset);

    function filtered(f) {
      if (state.group && f.role + "-" + f.menu !== state.group) return false;
      if (state.type && f.type !== state.type) return false;
      if (state.theme === "light" && f.dark) return false;
      if (state.theme === "dark" && !f.dark) return false;
      return matchStatus(f, state.status);
    }

    // Code prefix match first; otherwise every word of the query (any order, accent-insensitive) must appear
    // somewhere in the title path ("Học viên / Trạng thái" ← "trạng thái học viên"), ranked by closeness.
    function score(f) {
      var raw = state.q.trim();
      if (!raw) return 1;
      var S = window.SyncSearch, up = raw.toUpperCase().replace(/\s+/g, "");
      if (f.code.indexOf(up) === 0 || f.code.replace(/-/g, "").indexOf(up.replace(/-/g, "")) === 0) return 1000 - f.code.length;
      var toks = S.tokens(raw), q = S.norm(raw).trim(), title = S.norm(f.title), last = S.norm(f.title.split(" / ").slice(-1)[0]);
      var code = f.code.toLowerCase();
      if (!toks.every(function (t) { return title.indexOf(t) !== -1 || code.indexOf(t) !== -1; })) return 0;
      return 1 + S.scoreField(last, q, toks, 5).s + S.scoreField(title, q, toks, 2).s + (title.indexOf(q) !== -1 ? 20 : 0);
    }

    function draw() {
      items.innerHTML = "";
      var lastGroup = null, ranked = !!state.q.trim();
      var shown = data.frames.filter(filtered).map(function (f, i) { return { f: f, s: score(f), i: i }; })
        .filter(function (x) { return x.s > 0; });
      if (ranked) shown.sort(function (a, b) { return b.s - a.s || a.i - b.i; });
      count.textContent = shown.length + " / " + data.frames.length + " mã" + (data.updated ? " · sync " + data.updated : "");
      shown.slice(0, 800).forEach(function (x) {
        var f = x.f, g = f.role + "-" + f.menu;
        if (!ranked && g !== lastGroup) {
          lastGroup = g;
          items.append(el("div", "sb-route", g + " · " + (data.groups[g] || "")));
        }
        var b = el("button", "sb-item" + (state.current === f.code ? " is-on" : "") + (f.removed ? " is-removed" : ""));
        b.dataset.kind = f.kind;
        b.dataset.code = f.code;
        b.append(el("code", "", f.code + " "), document.createTextNode(ranked ? f.title : f.title.split(" / ").slice(-1)[0]));
        if (f.todo) b.append(el("span", "sb-flag is-todo", "Chưa làm"));
        if (f.final) b.append(el("span", "sb-flag is-final", "Final"));
        if (f.dark) b.append(el("span", "sb-flag is-todo", "Dark"));
        b.title = f.title;
        b.addEventListener("click", function () { open(f); });
        items.append(b);
      });
    }

    function open(f) {
      state.current = f.code;
      items.querySelectorAll(".sb-item").forEach(function (b) { b.classList.toggle("is-on", b.dataset.code === f.code); });
      info.innerHTML = "";
      info.append(el("h2", "", f.code), el("div", "muted", f.title));
      var meta = el("div", "sb-meta");
      [data.groups[f.role + "-" + f.menu], f.type, "Trang: " + (f.page || "—"), f.dark ? "Dark" : "Light",
        f.final ? "Final" : "Chưa Final", f.todo ? "Chưa làm" : null, f.ready ? "Ready for dev" : null,
        f.in_nav ? null : "Chưa có trong NAVIGATION"]
        .filter(Boolean).forEach(function (t) { meta.append(el("span", "pill", t)); });
      if (f.url) {
        var openLink = el("a", "", "Mở trong Figma ↗");
        openLink.href = f.url; openLink.target = "_blank";
        meta.append(openLink);
      }
      var other = f.dark ? f.code.replace(/-DK$/, "") : f.dark_code;
      if (other) {
        var sw = el("button", "chip", f.dark ? "Xem bản Light" : "Xem bản Dark");
        sw.addEventListener("click", function () {
          var target = data.frames.find(function (x) { return x.code === other; });
          if (!target) return;
          if (state.theme && state.theme !== (target.dark ? "dark" : "light")) {
            state.theme = "";
            filters.querySelectorAll("select")[3].value = "";
            draw();
          }
          open(target);
        });
        meta.append(sw);
      }
      info.append(meta);
      var docs = el("div", "sb-docs");
      docs.append(el("span", "muted", f.docs.length ? "Tài liệu: " : "Chưa có tài liệu nào nhắc tới mã này"));
      f.docs.forEach(function (d) {
        var a = el("a", "", d.title);
        a.href = ui.root() + d.url;
        docs.append(a);
      });
      info.append(docs);
      if (f.embed) {
        frame.classList.add("is-loading");
        frame.querySelector(".figma-loading").textContent = "Đang tải Figma…";
        iframe.src = ui.embedFor(f);
      } else {
        iframe.removeAttribute("src");
        frame.classList.add("is-loading");
        frame.querySelector(".figma-loading").textContent = "Mã này chưa có frame trên Figma";
      }
      history.replaceState(null, "", "#" + f.code);
    }

    new MutationObserver(function () {
      var f = data.frames.find(function (x) { return x.code === state.current; });
      if (f && f.embed) iframe.src = ui.embedFor(f);
    }).observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });

    input.addEventListener("input", function () { state.q = input.value; draw(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); input.focus(); }
    });
    draw();
    var initial = data.frames.find(function (f) { return f.code === decodeURIComponent(location.hash.slice(1)); });
    if (initial) {
      if (initial.dark) { state.theme = "dark"; filters.querySelectorAll("select")[3].value = "dark"; }
      input.value = initial.route; state.q = initial.route; draw(); open(initial);
    }
  }

  if (window.document$) window.document$.subscribe(init); else document.addEventListener("DOMContentLoaded", init);
})();
