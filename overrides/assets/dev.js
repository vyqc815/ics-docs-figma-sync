// "Cập nhật cho dev": what changed in this doc (docs commits by section, Figma changes) since this account's
// "done up to here" checkpoint, and whether each change is covered by a docs ↔ Figma sync baseline.
// Also puts a "N mới" badge on docs in the sidebar that changed after the checkpoint.
(function () {
  var ui = function () { return window.SyncUI; };

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function post(path, payload) {
    return fetch(ui().url(path), { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload || {}) }).then(function (r) { return r.json(); });
  }

  // Jump target for a section title: the page heading whose text ends the "A › B" path.
  function headingFor(title) {
    var norm = window.SyncSearch ? window.SyncSearch.norm : function (s) { return s.toLowerCase(); };
    var want = norm(title.split(" › ").slice(-1)[0]).trim();
    return Array.from(document.querySelectorAll(".md-content h1[id], .md-content h2[id], .md-content h3[id], .md-content h4[id], .md-content h5[id], .md-content h6[id]"))
      .find(function (h) { return norm(h.textContent).trim() === want; });
  }

  function syncPill(item, hasFigma) {
    if (item.kind === "baseline" || !hasFigma) return null;
    return item.synced
      ? el("span", "dev-sync is-yes", "Đã đồng bộ Figma · " + item.synced.date)
      : el("span", "dev-sync is-no", "Chưa đồng bộ Figma");
  }

  function act(path, payload, btn, box) {
    if (btn) btn.disabled = true;
    post(path, payload).then(function (res) {
      ui().toast(res.message, res.ok ? "" : "error");
      if (res.ok) load(box); else if (btn) btn.disabled = false;
    }).catch(function (e) { console.error("[Dev] Error:", e); ui().toast("Lỗi kết nối máy chủ", "error"); if (btn) btn.disabled = false; });
  }

  function renderItem(item, data, box) {
    var li = el("li", "dev-item kind-" + item.kind), head = el("div", "dev-item-head");
    head.append(el("span", "kind kind-" + item.kind, { docs: "Docs", ui: "UI", baseline: "Mốc" }[item.kind]),
      el("span", "when", [item.date, item.who].filter(Boolean).join(" · ")), el("span", "msg", item.text));
    if (item.sha) head.append(el("code", "", item.sha));
    var pill = syncPill(item, data.has_figma);
    if (pill) head.append(pill);
    if (item.kind !== "baseline" && item.date) {
      var upto = el("button", "chip dev-upto", "Đã làm tới đây");
      upto.title = "Đánh dấu bạn đã làm xong thay đổi này và các thay đổi trước nó";
      upto.addEventListener("click", function () {
        act("/api/dev/mark", item.sha ? { doc: box.dataset.doc, sha: item.sha } : { doc: box.dataset.doc, upto: item.date }, upto, box);
      });
      head.append(upto);
    }
    li.append(head);
    (item.sections || []).forEach(function (s) {
      var sec = el("div", "dev-sec"), title = el("div", "dev-sec-title"), h = headingFor(s.title);
      if (h) { var a = el("a", "", s.title); a.href = "#" + h.id; title.append(a); } else title.append(document.createTextNode(s.title));
      title.append(el("span", "n", "+" + s.added + " / −" + s.removed + " dòng"));
      sec.append(title);
      s.del.forEach(function (t) { sec.append(el("p", "dev-line is-del", "− " + t)); });
      s.add.forEach(function (t) { sec.append(el("p", "dev-line is-add", "+ " + t)); });
      li.append(sec);
    });
    if (item.thumb) {
      var a = el("a", "", "Xem ảnh frame ↗"); a.href = item.thumb; a.target = "_blank";
      li.append(a);
    }
    return li;
  }

  function markText(m) {
    return "Làm tới " + m.upto + " · đánh dấu lúc " + m.date + (m.by ? " bởi " + m.by : "");
  }

  function renderProgress(rows) {
    var wrap = el("div", "dev-progress");
    wrap.append(el("div", "dev-progress-title", "Tiến độ dev (chỉ admin thấy)"));
    if (!rows.length) { wrap.append(el("div", "muted", "Chưa dev nào đánh dấu tài liệu này.")); return wrap; }
    var table = el("table", "dev-table"), tr = el("tr");
    ["Dev", "Làm tới", "Đánh dấu lúc", "Còn lại"].forEach(function (t) { tr.append(el("th", "", t)); });
    table.append(tr);
    rows.forEach(function (r) {
      var row = el("tr");
      row.append(el("td", "", r.user), el("td", "", r.mark.upto), el("td", "", r.mark.date));
      var td = el("td");
      td.append(el("span", r.behind ? "dev-badge" : "dev-badge is-ok", r.behind ? r.behind + " cập nhật mới" : "Đã theo kịp"));
      row.append(td);
      table.append(row);
    });
    wrap.append(table);
    return wrap;
  }

  function render(box, data) {
    var open = box.dataset.open !== "0";
    box.innerHTML = "";
    box.hidden = false;
    var head = el("div", "dev-head"), detail = el("div", "dev-detail"), list = el("ul", "dev-list");
    var changes = data.items.filter(function (i) { return i.kind !== "baseline"; });
    var pending = changes.filter(function (i) { return !i.synced; }).length;
    head.append(el("strong", "", "Cập nhật cho dev"));
    if (data.mark) {
      head.append(el("span", changes.length ? "dev-badge" : "dev-badge is-ok",
        changes.length ? changes.length + " cập nhật mới" : "Không có gì mới"));
      head.append(el("span", "muted", markText(data.mark) +
        (pending && data.has_figma ? " · " + pending + " thay đổi chưa đồng bộ Figma" : "")));
    } else {
      head.append(el("span", "muted", "Bạn chưa đánh dấu tài liệu này. Dưới đây là các thay đổi gần nhất."));
    }
    var hasDetail = data.items.length || data.progress || data.history.length;
    if (hasDetail) {
      var toggle = el("button", "chip", open ? "Thu gọn" : "Xem chi tiết");
      toggle.addEventListener("click", function () {
        open = !open;
        box.dataset.open = open ? "1" : "0";
        detail.hidden = !open;
        toggle.textContent = open ? "Thu gọn" : "Xem chi tiết";
      });
      head.append(toggle);
    }
    if (data.mark) {
      var back = el("button", "chip", "Hoàn tác mốc");
      back.title = data.history.length ? "Quay về mốc trước: " + data.history[0].upto : "Xoá mốc, về trạng thái chưa đánh dấu";
      back.addEventListener("click", function () {
        if (confirm(back.title + "?")) act("/api/dev/rollback", { doc: box.dataset.doc }, back, box);
      });
      head.append(back);
    }
    if (!data.mark || changes.length) {  // nothing new → nothing to mark
      var markBtn = el("button", "btn btn-primary", "Đã làm hết tới hiện tại");
      markBtn.title = "Lưu mốc của riêng bạn: lần sau chỉ hiện các thay đổi sau thời điểm này";
      markBtn.addEventListener("click", function () { act("/api/dev/mark", { doc: box.dataset.doc }, markBtn, box); });
      head.append(markBtn);
    }
    box.append(head);
    data.items.forEach(function (i) { list.append(renderItem(i, data, box)); });
    if (data.items.length) detail.append(list);
    if (data.history.length) {
      var h = el("div", "dev-history muted", "Các mốc trước của bạn: " +
        data.history.map(function (m) { return m.upto; }).join(" · "));
      detail.append(h);
    }
    if (data.progress) detail.append(renderProgress(data.progress));
    detail.hidden = !open;
    box.append(detail);
  }

  // History panel: add a row per dev mark ("dev X đã làm tới …"), merged into the existing rows by date.
  function historyMarks(doc) {
    var panel = document.querySelector(".history-panel");
    if (!panel) return;
    fetch(ui().url("/api/dev/marks?doc=" + encodeURIComponent(doc))).then(function (r) { return r.json(); }).then(function (res) {
      if (!res.ok) return;
      panel.querySelectorAll(".history-row.is-dev").forEach(function (r) { r.remove(); });
      var key = function (d) { var p = d.split(" "), x = p[0].split("/"); return x[2] + x[1] + x[0] + (p[1] || ""); };
      res.marks.forEach(function (m) {
        var row = el("div", "history-row is-dev");
        row.dataset.key = key(m.date);
        row.append(el("span", "kind kind-dev", "Dev"), el("span", "when", m.date + " · " + m.user),
          el("div", "", m.user + " đã làm tới mốc " + m.upto));
        var next = Array.from(panel.querySelectorAll(".history-row")).find(function (r) {
          var k = r.dataset.key || key(r.querySelector(".when").textContent.split(" · ")[0]);
          return k < row.dataset.key;
        });
        if (next) panel.insertBefore(row, next); else panel.append(row);
        var empty = panel.querySelector(":scope > p.muted");
        if (empty) empty.remove();
      });
    }).catch(function () {});
  }

  function load(box) {
    historyMarks(box.dataset.doc);
    fetch(ui().url("/api/dev/updates?doc=" + encodeURIComponent(box.dataset.doc)))
      .then(function (r) { if (!r.ok && r.status !== 400) throw new Error(r.status); return r.json(); })
      .then(function (data) { if (data.ok) render(box, data); })
      .catch(function (e) { console.error("[Dev] Error:", e); });
    badges();
  }

  function badges() {
    fetch(ui().url("/api/dev/summary")).then(function (r) { return r.json(); }).then(function (res) {
      if (!res.ok) return;
      document.querySelectorAll(".md-nav--primary .nav-new").forEach(function (b) { b.remove(); });
      document.querySelectorAll(".md-nav--primary .md-nav__link[href]").forEach(function (a) {
        var href = decodeURIComponent(a.href.split("#")[0].replace(ui().root(), ""));
        var rel = href.replace(/\.html$/, ".md"), n = res.docs[rel];
        if (!n || href.indexOf("#") !== -1) return;
        var b = el("span", "nav-new", n + " mới");
        b.title = n + " cập nhật sau lần bạn làm";
        a.append(b);
      });
    }).catch(function () {});  // static build without the API server
  }

  // ---------- Admin overview page: every dev × every doc they marked ----------
  function initOverview(host) {
    if (host.dataset.ready) return;
    host.dataset.ready = "1";
    Promise.all([
      fetch(ui().url("/api/dev/overview")).then(function (r) { return r.json(); }),
      fetch(ui().root() + "assets/tags.json").then(function (r) { return r.json(); }),
    ]).then(function (res) {
      if (!res[0].ok) { host.textContent = res[0].message || "Chỉ admin xem được trang này."; return; }
      var titles = {};
      res[1].docs.forEach(function (d) { titles[d.url.replace(/\.html$/, ".md")] = d; });
      renderOverview(host, res[0], titles);
    }).catch(function (e) { console.error("[Dev] Error:", e); host.textContent = "Không tải được tiến độ dev."; });
  }

  function renderOverview(host, data, titles) {
    var state = { dev: "", q: "", behind: false };
    var stats = el("div", "dev-stats"), bar = el("div", "dev-filters"), table = el("table", "dev-table dev-table-wide");
    var devSel = el("select", "figma-select"), q = el("input"), only = el("label", "sb-filter");
    devSel.append(new Option("Mọi dev", ""));
    data.devs.forEach(function (d) { devSel.append(new Option(d, d)); });
    q.placeholder = "Tìm tài liệu…";
    var cb = el("input"); cb.type = "checkbox";
    only.append(cb, el("span", "", "Chỉ hiện chưa theo kịp"));
    bar.append(devSel, q, only);
    devSel.addEventListener("change", function () { state.dev = devSel.value; draw(); });
    q.addEventListener("input", function () { state.q = q.value; draw(); });
    cb.addEventListener("change", function () { state.behind = cb.checked; draw(); });
    host.append(stats, bar, table);

    // One card per dev: docs marked, docs behind, total new changes, last activity.
    data.devs.forEach(function (d) {
      var rows = data.rows.filter(function (r) { return r.user === d; });
      var behind = rows.filter(function (r) { return r.behind; });
      var last = rows.map(function (r) { return r.mark.date; }).sort(function (a, b) { return key(b) < key(a) ? -1 : 1; })[0];
      var card = el("button", "dev-stat card");
      card.append(el("strong", "", d),
        el("span", "", rows.length + " tài liệu đã đánh dấu"),
        el("span", behind.length ? "dev-badge" : "dev-badge is-ok",
          behind.length ? behind.length + " tài liệu có cập nhật mới" : (rows.length ? "Đã theo kịp" : "Chưa đánh dấu gì")),
        el("span", "muted", last ? "Đánh dấu gần nhất " + last : ""));
      card.addEventListener("click", function () { devSel.value = state.dev = state.dev === d ? "" : d; draw(); });
      stats.append(card);
    });

    function key(date) { var p = date.split(" "), d = p[0].split("/"); return d[2] + d[1] + d[0] + (p[1] || ""); }

    function draw() {
      var norm = window.SyncSearch ? window.SyncSearch.norm : function (s) { return s.toLowerCase(); };
      var nq = norm(state.q.trim());
      stats.querySelectorAll(".dev-stat").forEach(function (c) {
        c.classList.toggle("is-on", c.querySelector("strong").textContent === state.dev);
      });
      var rows = data.rows.filter(function (r) {
        var t = titles[r.doc];
        return (!state.dev || r.user === state.dev) && (!state.behind || r.behind) &&
          (!nq || norm((t ? t.title : "") + " " + r.doc).indexOf(nq) !== -1);
      }).sort(function (a, b) { return b.behind - a.behind || (a.user < b.user ? -1 : 1); });
      table.innerHTML = "";
      var tr = el("tr");
      ["Dev", "Tài liệu", "Làm tới", "Đánh dấu lúc", "Còn lại"].forEach(function (t) { tr.append(el("th", "", t)); });
      table.append(tr);
      if (!rows.length) {
        var empty = el("tr"), td = el("td", "muted", "Không có dữ liệu");
        td.colSpan = 5; empty.append(td); table.append(empty);
      }
      rows.forEach(function (r) {
        var t = titles[r.doc], row = el("tr"), link = el("a", "", t ? t.title : r.doc), doc = el("td");
        link.href = ui().root() + r.doc.replace(/\.md$/, ".html");
        doc.append(link, el("div", "muted", r.doc));
        var left = el("td");
        left.append(el("span", r.behind ? "dev-badge" : "dev-badge is-ok", r.behind ? r.behind + " cập nhật mới" : "Đã theo kịp"));
        row.append(el("td", "", r.user), doc, el("td", "", r.mark.upto), el("td", "", r.mark.date), left);
        table.append(row);
      });
    }
    draw();
  }

  function init() {
    var host = document.getElementById("dev-overview");
    if (host) initOverview(host);
    var box = document.querySelector(".dev-updates");
    if (box) load(box); else badges();
  }
  if (window.document$) window.document$.subscribe(init); else document.addEventListener("DOMContentLoaded", init);
})();
