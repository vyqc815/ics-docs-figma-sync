// Tags: the "Tag" page (search + filter docs by tags) and the tag editor on each doc (admin).
(function () {
  var COLORS = { synced: "green", docs: "orange", ui: "blue", both: "red", no_baseline: "gray" };
  var cache = null;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function loadTags() {
    if (!cache) cache = fetch(SyncUI.root() + "assets/tags.json").then(function (r) { return r.json(); });
    return cache;
  }
  function allTags(docs) {
    var count = {};
    docs.forEach(function (d) { d.file_tags.concat(d.web_tags).forEach(function (t) { count[t] = (count[t] || 0) + 1; }); });
    return Object.keys(count).sort(function (a, b) { return count[b] - count[a] || a.localeCompare(b); })
      .map(function (t) { return { tag: t, count: count[t] }; });
  }

  // ---------- Tag page ----------
  function initBrowser() {
    var host = document.getElementById("tag-browser");
    if (!host || host.dataset.ready) return;
    host.dataset.ready = "1";
    loadTags().then(function (data) { renderBrowser(host, data.docs); })
      .catch(function (e) { console.error("[Tags] Error:", e); host.textContent = "Không tải được danh sách tag."; });
  }
  function renderBrowser(host, docs) {
    var selected = decodeURIComponent(location.hash.slice(1)).split(",").filter(Boolean);
    var left = el("div", "card tb-tags"), right = el("div", "card tb-docs");
    var input = el("input", "tb-search");
    input.placeholder = "Tìm tag hoặc tài liệu…  /";
    var chosen = el("div", "tb-chosen"), cloud = el("div", "tag-cloud"), list = el("ul", "widget-list");
    var head = el("h2");
    left.append(input, chosen, cloud);
    right.append(head, list);
    host.append(left, right);
    var tags = allTags(docs);

    function toggle(t) {
      var i = selected.indexOf(t);
      if (i === -1) selected.push(t); else selected.splice(i, 1);
      history.replaceState(null, "", selected.length ? "#" + selected.join(",") : location.pathname);
      draw();
    }
    function draw() {
      var q = input.value.trim().toLowerCase().replace(/^#/, "");
      chosen.innerHTML = "";
      selected.forEach(function (t) {
        var c = el("button", "tag-chip is-on", "#" + t + " ✕");
        c.title = "Bỏ lọc tag này";
        c.addEventListener("click", function () { toggle(t); });
        chosen.append(c);
      });
      cloud.innerHTML = "";
      tags.filter(function (x) { return !q || x.tag.indexOf(q) !== -1; }).forEach(function (x) {
        var c = el("button", "tag-chip" + (selected.indexOf(x.tag) !== -1 ? " is-on" : ""));
        c.append("#" + x.tag, el("span", "", String(x.count)));
        c.addEventListener("click", function () { toggle(x.tag); });
        cloud.append(c);
      });
      if (!cloud.children.length) cloud.append(el("span", "muted", "Không có tag khớp"));

      var shown = docs.filter(function (d) {
        var ts = d.file_tags.concat(d.web_tags);
        var hasAll = selected.every(function (t) { return ts.indexOf(t) !== -1; });
        var text = !q || d.title.toLowerCase().indexOf(q) !== -1 || ts.some(function (t) { return t.indexOf(q) !== -1; });
        return hasAll && text && (selected.length || q || ts.length);
      });
      head.textContent = (selected.length ? "Tài liệu có tag " + selected.map(function (t) { return "#" + t; }).join(" + ")
        : q ? "Kết quả cho “" + q + "”" : "Tài liệu có tag") + " (" + shown.length + ")";
      list.innerHTML = "";
      shown.forEach(function (d) {
        var li = el("li");
        var dot = el("span", "nav-dot sync-" + (COLORS[d.status] || "gray"));
        var a = el("a", "", d.title);
        a.href = SyncUI.root() + d.url;
        var ts = el("span", "tb-doc-tags");
        d.file_tags.concat(d.web_tags).forEach(function (t) {
          var c = el("button", "tag-chip is-small" + (selected.indexOf(t) !== -1 ? " is-on" : ""), "#" + t);
          c.addEventListener("click", function () { toggle(t); });
          ts.append(c);
        });
        li.append(dot, a, ts);
        list.append(li);
      });
      if (!shown.length) list.append(el("li", "muted", "Không có tài liệu nào khớp"));
    }
    input.addEventListener("input", draw);
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); input.focus(); }
    });
    draw();
  }

  // ---------- Tag editor on a doc (admin) ----------
  function openEditor(row) {
    var fileTags = row.dataset.fileTags ? row.dataset.fileTags.split(",") : [];
    var webTags = row.dataset.webTags ? row.dataset.webTags.split(",") : [];
    var box = el("div", "tag-editor");
    if (fileTags.length) {
      box.append(el("div", "form-label", "Tag ghi trong file docs (sửa trong file)"));
      var locked = el("div", "tag-cloud");
      fileTags.forEach(function (t) { locked.append(el("span", "tag-chip", "#" + t)); });
      box.append(locked);
    }
    box.append(el("div", "form-label", "Tag gắn trên web"));
    var chips = el("div", "tag-input");
    var input = el("input");
    input.placeholder = "Gõ tag rồi Enter";
    input.setAttribute("list", "tag-suggest");
    var datalist = el("datalist");
    datalist.id = "tag-suggest";
    chips.append(input);
    box.append(chips, datalist);
    var err = el("div", "form-error");
    box.append(err, el("p", "muted", "Muốn ghi tag thẳng trong file docs: thêm một dòng  Tags: #ten-tag #ten-tag-khac"));
    var actions = el("div", "form-actions");
    var cancel = el("button", "btn", "Huỷ");
    cancel.setAttribute("data-close", "");
    var save = el("button", "btn btn-primary", "Lưu tag");
    actions.append(cancel, save);
    box.append(actions);

    function norm(t) { return t.trim().replace(/^#/, "").toLowerCase().replace(/\s+/g, "-"); }
    function drawChips() {
      chips.querySelectorAll(".tag-chip").forEach(function (c) { c.remove(); });
      webTags.forEach(function (t) {
        var c = el("button", "tag-chip is-web", "#" + t + " ✕");
        c.type = "button";
        c.title = "Bỏ tag này";
        c.addEventListener("click", function () { webTags = webTags.filter(function (x) { return x !== t; }); drawChips(); });
        chips.insertBefore(c, input);
      });
    }
    function add() {
      input.value.split(",").map(norm).filter(Boolean).forEach(function (t) {
        if (t.length > 40) { err.textContent = "Tag dài tối đa 40 ký tự"; return; }
        if (webTags.indexOf(t) === -1 && fileTags.indexOf(t) === -1) webTags.push(t);
      });
      input.value = "";
      drawChips();
    }
    input.addEventListener("keydown", function (e) {
      err.textContent = "";
      if (e.key === "Enter" || e.key === ",") { e.preventDefault(); add(); }
      if (e.key === "Backspace" && !input.value && webTags.length) { webTags.pop(); drawChips(); }
    });
    save.addEventListener("click", function () {
      add();
      save.disabled = true;
      var wait = SyncUI.toast("Đang lưu tag và build lại…", "info");
      SyncUI.api("/api/tags/save", { doc: row.dataset.doc, tags: webTags }).then(function (res) {
        wait.remove();
        save.disabled = false;
        if (!res.ok) { err.textContent = res.message; return; }
        SyncUI.toast(res.message);
        SyncUI.closeModal();
        setTimeout(function () { location.reload(); }, 800);
      }).catch(function (e) { wait.remove(); save.disabled = false; console.error("[Tags] Error:", e); err.textContent = "Lỗi kết nối máy chủ"; });
    });
    drawChips();
    SyncUI.openModal("Sửa tag", box);
    input.focus();
    loadTags().then(function (data) {
      allTags(data.docs).forEach(function (x) { datalist.append(new Option(x.tag)); });
    });
  }
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".tag-edit-btn");
    if (btn) openEditor(btn.closest(".tag-row"));
  });

  if (window.document$) window.document$.subscribe(initBrowser); else document.addEventListener("DOMContentLoaded", initBrowser);
})();
