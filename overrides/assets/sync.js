(function () {
  var COLORS = { synced: "green", docs: "orange", ui: "blue", both: "red", no_baseline: "gray" };
  var REVIEW = { docs: 1, ui: 1, both: 1, no_baseline: 1 };
  var body = document.body;
  var root = function () { return window.__md_scope ? window.__md_scope.href : new URL("./", location.href).href; };

  // ---------- Shared helpers ----------
  function pref(key, value) {
    try {
      if (value === undefined) return localStorage.getItem("sync." + key);
      if (value === null) localStorage.removeItem("sync." + key); else localStorage.setItem("sync." + key, value);
    } catch (e) { return null; }
  }
  function toast(msg, type) {
    var t = document.createElement("div");
    t.className = "sync-toast" + (type ? " is-" + type : "");
    t.textContent = msg;
    body.append(t);
    setTimeout(function () { t.remove(); }, type === "info" ? 120000 : 5000);
    return t;
  }
  function url(path) { return root() + path.replace(/^\//, ""); }  // works under a sub-path too
  function api(path, payload) {
    return fetch(url(path), { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload || {}) }).then(function (r) { return r.json(); });
  }
  function isDark() { return body.getAttribute("data-md-color-scheme") === "slate"; }
  // A code always opens its own frame: plain code = light screen, "-DK" code = dark screen.
  // `theme` only changes the Figma viewer chrome.
  function embedFor(frame) { return frame.embed + "&theme=" + (isDark() ? "dark" : "light"); }
  function embedFromUrl(url) {
    var u = new URL(url);
    return "https://embed.figma.com" + u.pathname + "?node-id=" + u.searchParams.get("node-id") + "&embed-host=ics-docs-figma-sync";
  }
  window.SyncUI = { pref: pref, toast: toast, embedFor: embedFor, root: root, url: url };

  // ---------- Header: screens link, admin menu, account menu ----------
  var ADMIN_ITEMS = [
    ["/api/docs/pull", "Cập nhật docs từ Git", "Lấy docs mới nhất của repo FE: file thêm, sửa, xoá đều được cập nhật"],
    ["/api/figma/screens", "Sync danh sách màn", "Đọc lại bảng NAVIGATION trên Figma: mã, tên, loại, Final, Chưa làm"],
    ["/api/figma/check", "Kiểm tra UI thay đổi", "So từng frame mà docs nhắc tới với lần kiểm tra trước"],
    ["/api/rebuild", "Build lại site", "Khi docs trên máy này vừa sửa mà chưa push Git (site thường tự build lại khi docs đổi)"],
  ];
  function menu(label, cls, items) {
    var wrap = document.createElement("div");
    wrap.className = "dropdown " + (cls || "");
    wrap.innerHTML = '<button class="btn dropdown-toggle" aria-haspopup="true" aria-expanded="false"></button><div class="dropdown-menu card" role="menu"></div>';
    wrap.firstChild.append(label);
    items.forEach(function (it) { wrap.lastChild.append(it); });
    return wrap;
  }
  function item(text, hint, attrs) {
    var b = document.createElement("button");
    b.className = "dropdown-item";
    b.setAttribute("role", "menuitem");
    Object.keys(attrs || {}).forEach(function (k) { b.setAttribute(k, attrs[k]); });
    b.innerHTML = "<span></span><small></small>";
    b.firstChild.textContent = text;
    b.lastChild.textContent = hint || "";
    return b;
  }
  function initHeader() {
    var logo = document.querySelector(".md-header__button.md-logo");
    if (logo) logo.addEventListener("click", function (e) { e.preventDefault(); location.reload(); });
    if (logo) logo.title = "Tải lại trang";
    fetch(url("/api/me")).then(function (r) { return r.json(); }).then(function (me) {
      if (!me.user) return;
      body.dataset.role = me.role;
      var bar = document.createElement("div");
      bar.className = "header-actions";
      var screens = document.createElement("a");
      screens.className = "btn";
      screens.href = root() + "figma-screens.html";
      screens.textContent = "Màn hình Figma";
      var tagsLink = document.createElement("a");
      tagsLink.className = "btn";
      tagsLink.href = root() + "tags.html";
      tagsLink.textContent = "Tag";
      bar.append(screens, tagsLink);
      if (me.role === "admin") {
        var items = ADMIN_ITEMS.filter(function (a) { return me.docs_pull || a[0] !== "/api/docs/pull"; });
        bar.append(menu("Đồng bộ", "admin-only", items.map(function (a) {
          return item(a[1], a[2], { "data-admin": a[0] });
        })));
      }
      var chip = document.createElement("span");
      chip.className = "user-chip";
      chip.innerHTML = '<span class="avatar"></span><span class="uname"></span><span class="role-badge"></span>';
      chip.querySelector(".avatar").textContent = me.user.slice(0, 2);
      chip.querySelector(".uname").textContent = me.user;
      chip.querySelector(".role-badge").textContent = me.role === "admin" ? "Admin" : "Xem";
      var accountItems = [
        item("Hướng dẫn sử dụng", "Bấm vào đâu để làm gì", { "data-help": "" }),
        item("Đổi mật khẩu", "", { "data-account": "password" }),
      ];
      if (me.role === "admin") accountItems.push(item("Quản lý tài khoản", "Tạo, phân quyền, đặt lại mật khẩu", { "data-account": "users" }));
      accountItems.push(item("Đăng xuất", "", { "data-logout": "" }));
      bar.append(menu(chip, "account-menu", accountItems));
      body.dataset.user = me.user;
      var search = document.querySelector(".md-header__inner .md-search");
      search.parentNode.insertBefore(bar, search.nextSibling);
    }).catch(function (e) { console.error("[Sync] Error:", e); });
  }
  function closeMenus(except) {
    document.querySelectorAll(".dropdown.is-open").forEach(function (d) {
      if (d !== except) { d.classList.remove("is-open"); d.firstChild.setAttribute("aria-expanded", "false"); }
    });
  }
  document.addEventListener("click", function (e) {
    var toggle = e.target.closest(".dropdown-toggle");
    if (toggle) {
      var d = toggle.parentNode, open = !d.classList.contains("is-open");
      closeMenus(d);
      d.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      return;
    }
    if (!e.target.closest(".dropdown-menu")) closeMenus();
    var admin = e.target.closest("[data-admin]");
    if (admin) runAdmin(admin);
    if (e.target.closest("[data-logout]")) api("/api/logout").then(function () { location.href = url("/login"); });
    if (e.target.closest("[data-help]")) { closeMenus(); openHelp(); }
  });
  function runAdmin(btn) {
    closeMenus();
    btn.disabled = true;
    var wait = toast(btn.firstChild.textContent + "… có thể mất vài phút", "info");
    api(btn.getAttribute("data-admin")).then(function (res) {
      wait.remove();
      toast(res.message, res.ok ? "" : "error");
      if (res.ok) setTimeout(function () { location.reload(); }, 1800); else btn.disabled = false;
    }).catch(function (err) {
      wait.remove(); console.error("[Sync] Error:", err); toast("Lỗi kết nối máy chủ", "error"); btn.disabled = false;
    });
  }

  // ---------- Modal (help, account forms) ----------
  var lastFocus = null;
  function openModal(title, content, wide) {
    closeModal();
    lastFocus = document.activeElement;
    var overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = '<div class="modal card" role="dialog" aria-modal="true">' +
      '<div class="modal-head"><h2></h2><button class="tool-btn" data-close title="Đóng" aria-label="Đóng">✕</button></div>' +
      '<div class="modal-body md-typeset"></div></div>';
    overlay.querySelector(".modal").classList.toggle("is-narrow", !wide);
    overlay.querySelector("h2").textContent = title;
    overlay.querySelector(".modal").setAttribute("aria-label", title);
    overlay.querySelector(".modal-body").append(content);
    body.append(overlay);
    var first = overlay.querySelector(".modal-body input, .modal-body select, .modal-body button") || overlay.querySelector("[data-close]");
    first.focus();
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.closest("[data-close]")) closeModal();
    });
    return overlay;
  }
  function closeModal() {
    var o = document.querySelector(".modal-overlay");
    if (o) { o.remove(); if (lastFocus) lastFocus.focus(); }
  }
  function openHelp() {
    fetch(root() + "assets/help.htm").then(function (r) { return r.text(); }).then(function (html) {
      var t = document.createElement("template");
      t.innerHTML = html;
      openModal("Hướng dẫn sử dụng", t.content, true);
    }).catch(function (e) { console.error("[Sync] Error:", e); toast("Không tải được hướng dẫn", "error"); });
  }
  window.SyncUI.openModal = openModal;
  window.SyncUI.closeModal = closeModal;
  window.SyncUI.api = api;

  // ---------- Collapsible sections (each control sits on its own section) ----------
  function applyPrefs() {
    body.classList.toggle("hide-nav", pref("hideNav") === "1");
    var toc = pref("hideToc");  // default: hide the page TOC when Figma is beside the doc
    body.classList.toggle("hide-toc", toc === "1" || (toc === null && !!document.querySelector(".split.has-figma")));
    body.classList.toggle("figma-collapsed", pref("figmaCollapsed") === "1");
    var w = parseFloat(pref("sidePct"));
    if (w > 0 && w < 80) document.documentElement.style.setProperty("--side-w", w + "%");
  }
  function placeCollapseButtons() {
    [["tpl-collapse-nav", ".md-sidebar--primary .md-sidebar__scrollwrap"], ["tpl-collapse-toc", ".md-sidebar--secondary .md-sidebar__scrollwrap"]]
      .forEach(function (pair) {
        var tpl = document.getElementById(pair[0]), host = document.querySelector(pair[1]);
        if (tpl && host && !host.querySelector(".collapse-btn")) host.prepend(tpl.content.cloneNode(true));
      });
  }
  var ACTIONS = {
    "toggle-nav": function () { pref("hideNav", body.classList.toggle("hide-nav") ? "1" : null); },
    "toggle-toc": function () { pref("hideToc", body.classList.toggle("hide-toc") ? "1" : "0"); },
    "toggle-figma": function () {
      body.classList.remove("show-history");
      pref("figmaCollapsed", body.classList.toggle("figma-collapsed") ? "1" : null);
    },
    "toggle-history": function () { body.classList.toggle("show-history"); },
  };
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-action]");
    if (btn && ACTIONS[btn.dataset.action]) ACTIONS[btn.dataset.action]();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (document.querySelector(".modal-overlay")) return closeModal();
    closeMenus();
    body.classList.remove("show-history");
  });

  // ---------- Resizable side panel ----------
  function initGutter() {
    var gutter = document.querySelector(".split-gutter");
    if (!gutter) return;
    var split = document.querySelector(".split"), side = document.querySelector(".split-side");
    gutter.addEventListener("pointerdown", function (e) {
      e.preventDefault();
      gutter.setPointerCapture(e.pointerId);
      body.classList.add("resizing");
      function move(ev) {
        var rect = split.getBoundingClientRect();
        var w = Math.max(260, Math.min(rect.right - ev.clientX, rect.width - 320));
        document.documentElement.style.setProperty("--side-w", (w / rect.width * 100).toFixed(1) + "%");
      }
      function up() {
        body.classList.remove("resizing");
        gutter.removeEventListener("pointermove", move);
        gutter.removeEventListener("pointerup", up);
        pref("sidePct", (side.getBoundingClientRect().width / split.getBoundingClientRect().width * 100).toFixed(1));
      }
      gutter.addEventListener("pointermove", move);
      gutter.addEventListener("pointerup", up);
    });
    gutter.addEventListener("dblclick", function () {
      document.documentElement.style.removeProperty("--side-w");
      pref("sidePct", null);
    });
  }

  // ---------- Figma panel: frame picker + clickable codes ----------
  function initFigma() {
    var panel = document.querySelector(".figma-panel");
    if (!panel) return;
    var frames = JSON.parse(panel.querySelector(".figma-frames").textContent);
    var box = panel.querySelector(".figma-frame"), iframe = box.querySelector("iframe");
    var select = panel.querySelector(".figma-select"), current = 0;
    iframe.addEventListener("load", function () { if (iframe.src) box.classList.remove("is-loading"); });
    function show(i) {
      current = i;
      select.value = String(i);
      box.classList.add("is-loading");
      iframe.src = embedFor(frames[i]);
      panel.querySelector(".figma-open").href = frames[i].url;
      document.querySelectorAll("a.fcode").forEach(function (a) {
        a.classList.toggle("is-current", a.dataset.code === frames[i].code);
      });
    }
    select.addEventListener("change", function () { show(+select.value); });
    new MutationObserver(function () { show(current); })
      .observe(body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
    document.addEventListener("click", function (e) {
      var a = e.target.closest("a.fcode");
      if (!a || e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      var i = frames.findIndex(function (f) { return f.code === a.dataset.code; });
      if (i === -1) {  // a code not in this doc's list yet (e.g. a -DK screen): add it on the fly
        frames.push({ code: a.dataset.code, url: a.href, embed: embedFromUrl(a.href), name: a.dataset.code + " — " + a.title });
        i = frames.length - 1;
        var opt = document.createElement("option");
        opt.value = String(i);
        opt.textContent = frames[i].name;
        select.append(opt);
      }
      body.classList.remove("show-history", "figma-collapsed");
      pref("figmaCollapsed", null);
      show(i);
    });
    show(0);
  }

  // ---------- Mark synced (admin) ----------
  function initMark() {
    var btn = document.querySelector(".sync-mark-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      btn.disabled = true;
      api("/api/mark-synced", { doc: btn.dataset.doc }).then(function (res) {
        toast(res.message, res.ok ? "" : "error");
        if (res.ok) setTimeout(function () { location.reload(); }, 1500); else btn.disabled = false;
      }).catch(function (err) { console.error("[Sync] Error:", err); toast("Lỗi kết nối máy chủ", "error"); btn.disabled = false; });
    });
  }

  // ---------- Sidebar: status dot per doc, needs-review count per section ----------
  function decorateNav() {
    if (!window.SYNC_MAP) return;
    document.querySelectorAll(".md-nav--primary .md-nav__link[href]").forEach(function (a) {
      if (a.querySelector(".nav-dot") || a.getAttribute("href").indexOf("#") !== -1) return;
      var s = window.SYNC_MAP[decodeURIComponent(a.href.split("#")[0].replace(root(), ""))];
      if (!COLORS[s]) return;
      var dot = document.createElement("span");
      dot.className = "nav-dot sync-" + COLORS[s];
      a.prepend(dot);
      if (REVIEW[s]) a.dataset.review = "1";
    });
    document.querySelectorAll(".md-nav--primary .md-nav__item--nested").forEach(function (it) {
      var label = it.querySelector(":scope > .md-nav__link, :scope > div > .md-nav__link");
      if (!label || label.querySelector(".nav-count")) return;
      var n = it.querySelectorAll("nav [data-review]").length;
      if (!n) return;
      var c = document.createElement("span");
      c.className = "nav-count";
      c.title = n + " tài liệu cần review";
      c.textContent = n;
      label.append(c);
    });
  }

  function init() {
    applyPrefs(); placeCollapseButtons(); initHeader(); initGutter(); initFigma(); initMark(); decorateNav();
  }
  if (window.document$) window.document$.subscribe(init); else document.addEventListener("DOMContentLoaded", init);
})();
