// Site search: replaces Material's lunr search (no Vietnamese support, "hoá" ≠ "hóa", prefix-only).
// Accent-insensitive, partial match, ranked by how well the page matches; also exposes SyncSearch.norm.
(function () {
  function norm(s) {
    return (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
  }
  function tokens(q) { return norm(q).split(/[\s\-_/.,;:()]+/).filter(Boolean); }
  function count(hay, needle, cap) {
    var n = 0, i = hay.indexOf(needle);
    while (i !== -1 && n < cap) { n++; i = hay.indexOf(needle, i + needle.length); }
    return n;
  }
  // Score one field: whole phrase > all words > some words; word-start matches beat mid-word ones.
  function scoreField(text, q, toks, weight) {
    if (!text) return { s: 0, hit: 0 };
    var s = 0, hit = 0;
    if (toks.length > 1 && text.indexOf(q) !== -1) s += 8 * weight;
    toks.forEach(function (t) {
      var c = count(text, t, 5);
      if (!c) return;
      hit++;
      s += weight * (1 + Math.log(1 + c)) * (new RegExp("(^|[^a-z0-9])" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(text) ? 2 : 1);
    });
    return { s: s, hit: hit };
  }
  window.SyncSearch = { norm: norm, tokens: tokens, scoreField: scoreField };

  var docs = null, loading = null;
  function load() {
    if (loading) return loading;
    loading = fetch(window.SyncUI.root() + "search/search_index.json").then(function (r) { return r.json(); }).then(function (d) {
      var pages = {};
      d.docs.forEach(function (x) { if (x.location.indexOf("#") === -1) pages[x.location] = x.title; });
      docs = d.docs.map(function (x) {
        var tmp = document.createElement("div");
        tmp.innerHTML = x.text;
        var text = tmp.textContent.replace(/\s+/g, " ").trim(), page = x.location.split("#")[0];
        return { loc: x.location, title: x.title, page: pages[page] || "", text: text,
          nt: norm(x.title), np: norm(pages[page] || ""), nx: norm(text) };
      });
    });
    return loading;
  }

  function search(query) {
    var q = norm(query).trim(), toks = tokens(query);
    if (!toks.length) return [];
    var need = Math.max(1, Math.ceil(toks.length / 2)), out = [];
    docs.forEach(function (d) {
      var t = scoreField(d.nt, q, toks, 10), p = scoreField(d.np, q, toks, 3), x = scoreField(d.nx, q, toks, 1);
      var hit = 0;
      toks.forEach(function (tk) { if (d.nt.indexOf(tk) !== -1 || d.np.indexOf(tk) !== -1 || d.nx.indexOf(tk) !== -1) hit++; });
      if (hit < need) return;
      out.push({ d: d, s: (t.s + p.s + x.s) * Math.pow(hit / toks.length, 2) });
    });
    return out.sort(function (a, b) { return b.s - a.s; });
  }

  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  // Highlight on the original (accented) text using positions found in the normalized copy (same length per char).
  function mark(text, toks) {
    var n = norm(text), on = new Array(text.length).fill(false);
    if (n.length !== text.length) return esc(text);
    toks.forEach(function (t) { var i = n.indexOf(t); while (i !== -1) { for (var k = i; k < i + t.length; k++) on[k] = true; i = n.indexOf(t, i + 1); } });
    var html = "", open = false;
    for (var i = 0; i < text.length; i++) {
      if (on[i] !== open) { html += on[i] ? "<mark>" : "</mark>"; open = on[i]; }
      html += esc(text[i]);
    }
    return html + (open ? "</mark>" : "");
  }
  function snippet(d, toks) {
    var i = -1;
    toks.some(function (t) { i = d.nx.indexOf(t); return i !== -1; });
    if (i === -1) return d.text.slice(0, 160);
    var a = Math.max(0, i - 60);
    return (a ? "…" : "") + d.text.slice(a, a + 200) + (a + 200 < d.text.length ? "…" : "");
  }

  function render(input) {
    var list = document.querySelector(".md-search-result__list"), meta = document.querySelector(".md-search-result__meta");
    if (!list) return;
    var q = input.value;
    if (!q.trim()) { list.innerHTML = ""; if (meta) meta.textContent = "Nhập từ khoá để tìm"; return; }
    load().then(function () {
      if (input.value !== q) return;
      var res = search(q), toks = tokens(q);
      if (meta) meta.textContent = res.length ? res.length + " kết quả" : "Không tìm thấy";
      list.innerHTML = res.slice(0, 60).map(function (r) {
        var d = r.d, sub = d.page && d.page !== d.title ? '<div class="md-search-result__teaser">' + esc(d.page) + "</div>" : "";
        return '<li class="md-search-result__item"><a href="' + window.SyncUI.root() + d.loc + '" class="md-search-result__link" tabindex="-1">' +
          '<article class="md-search-result__article md-typeset"><h1>' + mark(d.title, toks) + "</h1>" + sub +
          '<p class="md-search-result__teaser">' + mark(snippet(d, toks), toks) + "</p></article></a></li>";
      }).join("");
    });
  }

  var timer;
  ["input", "keyup", "change"].forEach(function (type) {
    document.addEventListener(type, function (e) {
      var input = e.target;
      if (!input.matches || !input.matches('[data-md-component="search-query"]')) return;
      if (type === "keyup" && /^(Arrow|Enter|Escape|Tab)/.test(e.key)) return;  // keep Material's keyboard navigation
      e.stopPropagation();
      clearTimeout(timer);
      timer = setTimeout(function () { render(input); }, 120);
    }, true);
  });
  document.addEventListener("focusin", function (e) {
    if (e.target.matches && e.target.matches('[data-md-component="search-query"]')) load();
  });
})();
