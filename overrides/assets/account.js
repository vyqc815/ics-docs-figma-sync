// Account menu: change own password (everyone), manage accounts (admin).
(function () {
  var MIN = 4;  // keep in sync with MIN_PASSWORD in scripts/auth.py
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function field(label, type, name, attrs) {
    var wrap = el("label", "form-field");
    wrap.append(el("span", "", label));
    var input = el(type === "select" ? "select" : "input");
    if (type !== "select") input.type = type;
    input.name = name;
    Object.keys(attrs || {}).forEach(function (k) { input.setAttribute(k, attrs[k]); });
    wrap.append(input);
    return wrap;
  }
  function form(fields, submitText) {
    var f = el("form", "modal-form");
    f.noValidate = true;
    fields.forEach(function (x) { f.append(x); });
    f.append(el("div", "form-error"));
    var actions = el("div", "form-actions");
    var cancel = el("button", "btn", "Huỷ");
    cancel.type = "button";
    cancel.setAttribute("data-close", "");
    var submit = el("button", "btn btn-primary", submitText);
    submit.type = "submit";
    actions.append(cancel, submit);
    f.append(actions);
    f.addEventListener("input", function () { f.querySelector(".form-error").textContent = ""; });
    return f;
  }
  function fail(f, msg) { f.querySelector(".form-error").textContent = msg; }
  function submitTo(f, path, payload, done) {
    var btn = f.querySelector("[type=submit]");
    btn.disabled = true;
    SyncUI.api(path, payload).then(function (res) {
      btn.disabled = false;
      if (!res.ok) return fail(f, res.message);
      SyncUI.toast(res.message);
      done();
    }).catch(function (e) { btn.disabled = false; console.error("[Account] Error:", e); fail(f, "Lỗi kết nối máy chủ"); });
  }

  // ---------- Change own password ----------
  function openPassword() {
    var f = form([
      field("Mật khẩu hiện tại", "password", "old", { autocomplete: "current-password" }),
      field("Mật khẩu mới (từ " + MIN + " ký tự, chữ hoặc số đều được)", "password", "new", { autocomplete: "new-password" }),
      field("Nhập lại mật khẩu mới", "password", "again", { autocomplete: "new-password" }),
    ], "Đổi mật khẩu");
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = { old: f.old.value, new: f.new.value, again: f.again.value };
      if (!v.old || !v.new) return fail(f, "Nhập đủ mật khẩu hiện tại và mật khẩu mới");
      if (v.new.length < MIN) return fail(f, "Mật khẩu mới phải từ " + MIN + " ký tự");
      if (v.new !== v.again) return fail(f, "Hai lần nhập mật khẩu mới chưa giống nhau");
      submitTo(f, "/api/account/password", { old: v.old, new: v.new }, SyncUI.closeModal);
    });
    SyncUI.openModal("Đổi mật khẩu", f);
  }

  // ---------- Manage accounts (admin) ----------
  var ICON_RESET = "M12.63,2C18.16,2 22.64,6.5 22.64,12C22.64,17.5 18.16,22 12.63,22C9.12,22 6.05,20.18 4.26,17.43L5.84,16.18C7.25,18.47 9.76,20 12.64,20A8,8 0 0,0 20.64,12A8,8 0 0,0 12.64,4C8.56,4 5.2,7.06 4.71,11H7.47L3.73,14.73L0,11H2.69C3.19,5.95 7.45,2 12.63,2M15.59,10.24C16.09,10.25 16.5,10.65 16.5,11.16V15.77C16.5,16.27 16.09,16.69 15.58,16.69H10.05C9.54,16.69 9.13,16.27 9.13,15.77V11.16C9.13,10.65 9.54,10.25 10.04,10.24V9.23C10.04,7.7 11.29,6.46 12.81,6.46C14.34,6.46 15.59,7.7 15.59,9.23V10.24M12.81,7.86C12.06,7.86 11.44,8.47 11.44,9.23V10.24H14.19V9.23C14.19,8.47 13.57,7.86 12.81,7.86Z";
  var ICON_DELETE = "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";
  function iconBtn(path, label, onClick, cls) {
    var b = el("button", "tool-btn" + (cls ? " " + cls : ""));
    b.type = "button";
    b.title = label;
    b.setAttribute("aria-label", label);
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + path + '"/></svg>';
    b.addEventListener("click", onClick);
    return b;
  }
  function roleSelect(value) {
    var s = el("select", "figma-select");
    [["viewer", "Xem"], ["admin", "Admin"]].forEach(function (r) { s.append(new Option(r[1], r[0], false, r[0] === value)); });
    return s;
  }
  function openUsers() {
    var box = el("div", "users-box");
    SyncUI.openModal("Quản lý tài khoản", box, true);
    load(box);
  }
  function load(box) {
    fetch(SyncUI.url("/api/users")).then(function (r) { return r.json(); }).then(function (res) {
      if (!res.ok) { box.textContent = res.message; return; }
      render(box, res.users);
    }).catch(function (e) { console.error("[Account] Error:", e); box.textContent = "Không tải được danh sách tài khoản"; });
  }
  function render(box, users) {
    box.innerHTML = "";
    var me = document.body.dataset.user;
    var table = el("table", "users-table");
    table.innerHTML = '<colgroup><col><col style="width:9rem"><col style="width:6rem"></colgroup>' +
      '<thead><tr><th>Tài khoản</th><th class="c">Quyền</th><th class="c">Thao tác</th></tr></thead>';
    var tbody = el("tbody");
    users.forEach(function (u) {
      var tr = el("tr");
      var name = el("td", "users-name");
      var avatar = el("span", "avatar", u.username.slice(0, 2));
      name.append(avatar, el("span", "", u.username));
      if (u.username === me) name.append(el("span", "pill", "Bạn"));
      var roleTd = el("td", "c"), sel = roleSelect(u.role);
      sel.className = "role-select";
      sel.disabled = u.username === me;
      sel.title = u.username === me ? "Không thể tự đổi quyền của chính mình" : "Đổi quyền";
      sel.addEventListener("change", function () {
        SyncUI.api("/api/users/save", { username: u.username, role: sel.value }).then(function (res) {
          SyncUI.toast(res.message, res.ok ? "" : "error");
          load(box);
        });
      });
      roleTd.append(sel);
      var act = el("td", "c users-actions");
      act.append(iconBtn(ICON_RESET, "Đặt lại mật khẩu cho " + u.username, function () { openReset(box, u); }));
      if (u.username !== me) {
        act.append(iconBtn(ICON_DELETE, "Xoá tài khoản " + u.username, function () {
          if (!window.confirm("Xoá tài khoản " + u.username + "? Người này sẽ không đăng nhập được nữa.")) return;
          SyncUI.api("/api/users/delete", { username: u.username }).then(function (res) {
            SyncUI.toast(res.message, res.ok ? "" : "error");
            load(box);
          });
        }, "is-danger"));
      }
      tr.append(name, roleTd, act);
      tbody.append(tr);
    });
    table.append(tbody);
    var wrap = el("div", "users-table-wrap");
    wrap.append(table);
    box.append(wrap);

    box.append(el("h3", "", "Tạo tài khoản mới"));
    var role = field("Quyền", "select", "role");
    role.querySelector("select").replaceWith(Object.assign(roleSelect("viewer"), { name: "role" }));
    var f = form([
      field("Tên tài khoản", "text", "username", { autocomplete: "off", placeholder: "nguyen.van.a" }),
      role,
      field("Mật khẩu (từ " + MIN + " ký tự)", "password", "password", { autocomplete: "new-password" }),
    ], "Tạo tài khoản");
    f.querySelector("[data-close]").remove();
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = { username: f.username.value.trim(), role: f.role.value, password: f.password.value };
      if (!/^[a-zA-Z0-9._-]{3,32}$/.test(v.username)) return fail(f, "Tên tài khoản 3-32 ký tự: chữ, số, dấu . _ -");
      if (v.password.length < MIN) return fail(f, "Mật khẩu phải từ " + MIN + " ký tự");
      if (users.some(function (u) { return u.username === v.username; })) return fail(f, "Tài khoản này đã tồn tại");
      submitTo(f, "/api/users/save", v, function () { load(box); });
    });
    box.append(f);
  }
  function openReset(box, u) {
    var f = form([field("Mật khẩu mới cho " + u.username + " (từ " + MIN + " ký tự)", "password", "password", { autocomplete: "new-password" })],
      "Lưu mật khẩu");
    f.querySelector("[data-close]").removeAttribute("data-close");
    f.querySelector(".form-actions .btn").addEventListener("click", function () { f.remove(); });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (f.password.value.length < MIN) return fail(f, "Mật khẩu phải từ " + MIN + " ký tự");
      submitTo(f, "/api/users/save", { username: u.username, role: u.role, password: f.password.value }, function () { load(box); });
    });
    box.prepend(f);
    f.password.focus();
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-account]");
    if (!a) return;
    document.querySelectorAll(".dropdown.is-open").forEach(function (d) { d.classList.remove("is-open"); });
    if (a.dataset.account === "password") openPassword(); else openUsers();
  });
})();
