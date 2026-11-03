# ics-docs-figma-sync

Đồng bộ requirement docs và UI Figma của ICS 2026: xem docs và prototype song song, biết tài liệu nào lệch,
tra cứu màn hình theo mã, có đăng nhập và phân quyền.

- Docs gốc vẫn nằm ở repo FE. `docs/` ở đây là symlink tới `fe_ics_2026_old/docs/requirements`. Không sửa file docs gốc.
- Docs **chỉ cần ghi mã màn hình** (vd `CD-KH-070160`, hoặc dải `CD-KH-070301`–`070305`): hệ thống tự tìm frame Figma.

## Chạy

```bash
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
.venv/bin/python scripts/users.py add <tên> --role admin     # tạo admin đầu tiên (các tài khoản sau tạo trên web)
cp .env.example .env                                         # rồi điền FIGMA_TOKEN vào .env
scripts/dev.sh                                               # http://127.0.0.1:8000
```

| Quyền | Được làm |
|---|---|
| dev | Xem docs, Figma, lịch sử, tra cứu màn hình; đánh dấu tiến độ làm của riêng mình |
| admin | + menu Đồng bộ, Đánh dấu đã đồng bộ |

Hướng dẫn chi tiết từng nút: menu tài khoản (góc phải) › Hướng dẫn sử dụng.
Đổi mật khẩu, tạo / phân quyền / xoá tài khoản: menu tài khoản › Đổi mật khẩu, Quản lý tài khoản (admin).
Sửa `.env` thì phải tắt server (Ctrl+C) và chạy lại `scripts/dev.sh`, reload trang web là chưa đủ.

## Luồng

1. **Designer** đặt tên frame đúng quy ước `ROLE-MENU-MMTTPS — Tên / Tab / Popup / Trạng thái`, bật Ready for dev khi bàn giao.
2. **BA** viết docs, ghi mã màn hình ở chỗ mô tả UI. Không cần dán link Figma.
3. **Admin** mở menu **Đồng bộ**:
   - **Sync danh sách màn**: đọc bảng NAVIGATION trên Figma (`navigation_node` trong `sync/config.yml`) + quét tên frame để lấy màn `-DK`.
   - **Kiểm tra UI thay đổi**: lấy dấu vân tay từng frame mà docs nhắc tới.
   - **Cập nhật docs từ Git**: `git pull --ff-only` repo FE chứa docs (file thêm/sửa/xoá đều theo), dọn dữ liệu của docs đã xoá, build lại.
   - **Build lại site**: khi docs vừa sửa trực tiếp trên máy chạy server.
4. Tài liệu đổi màu theo trạng thái. Người review so docs với prototype, bấm **Đánh dấu đã đồng bộ**.
5. **Dev** dùng `sync/export/figma_screens.json` (route → tab → popup → trạng thái, kèm link Figma).

| Figma so với mốc | Docs so với mốc | Trạng thái |
|---|---|---|
| không đổi | không đổi | 🟢 Đồng bộ |
| không đổi | đổi | 🟠 Docs đổi, UI chưa cập nhật |
| đổi | không đổi | 🔵 UI đổi, docs chưa cập nhật |
| đổi | đổi | 🔴 Cả hai đổi |
| — | — | ⚪ Chưa có mốc |

## Cấu trúc

```
mkdocs.yml                cấu hình site
hooks/sync_status.py      trạng thái, lịch sử, biến mã thành link, trang "Màn hình Figma"
overrides/                giao diện (layout 2 cột, panel Figma, tra cứu màn hình)
server/login.html         trang đăng nhập
scripts/server.py         server: đăng nhập, phân quyền, API admin
scripts/figma_index.py    bảng NAVIGATION + tên frame -> chỉ mục mã + file export cho dev
scripts/figma_check.py    dấu vân tay các frame docs nhắc tới
scripts/mark_synced.py    đặt mốc đồng bộ
scripts/users.py          quản lý tài khoản (users.yml, không commit)
sync/config.yml           file key Figma
sync/docs_meta.yml        tag, version, link Figma thêm tay (tuỳ chọn)
sync/state.json           các mốc đồng bộ
```

## Triển khai: https://icstestsapi.pls.edu.vn/docs-figma/

Docs lấy từ source BE mà workflow `Testing CD` rsync lên server mỗi lần push `stable`
(`/root/ics_testing/backend/docs/requirements`). Thêm / sửa / xoá docs trên `stable` là web tự build lại.
Nginx của domain do script deploy BE sinh lại mỗi lần deploy, nên khối `/docs-figma/` nằm trong template của repo BE
(`ops/testing-deploy-repo-template/deploy/nginx/*.conf`), không thêm tay trên server.

1. Tải code và trỏ docs về thư mục docs của BE:
   ```bash
   sudo mkdir -p /opt/docs-figma && sudo chown $USER /opt/docs-figma && cd /opt/docs-figma
   git clone https://github.com/vyqc815/ics-docs-figma-sync.git app && cd app
   ln -sfn /root/ics_testing/backend/docs/requirements docs
   python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
   ```
2. Tạo `.env`:
   ```
   FIGMA_TOKEN=figd_xxx
   BASE_PATH=/docs-figma
   COOKIE_SECURE=1
   DOCS_PULL=0
   DOCS_WATCH_SECONDS=120
   PORT=8030
   NO_MKDOCS_2_WARNING=1
   ```
   - `DOCS_PULL=0`: ẩn nút "Cập nhật docs từ Git" (không được git pull vào repo BE đang chạy).
   - `DOCS_WATCH_SECONDS=120`: cứ 2 phút kiểm tra thư mục docs, có file thêm / sửa / xoá thì tự build lại.
3. Tạo admin: `.venv/bin/python scripts/users.py add <tên> --role admin`
4. Chạy nền bằng systemd (`/etc/systemd/system/docs-figma.service`), user chạy phải đọc được thư mục docs của BE:
   ```ini
   [Unit]
   Description=ICS Docs Figma
   After=network.target
   [Service]
   User=<user>
   WorkingDirectory=/opt/docs-figma/app
   ExecStart=/opt/docs-figma/app/scripts/dev.sh
   Restart=always
   [Install]
   WantedBy=multi-user.target
   ```
   `sudo systemctl daemon-reload && sudo systemctl enable --now docs-figma`
5. Nginx của `icstestsapi.pls.edu.vn`, trong block `server` có `listen 443`:
   ```nginx
   location /docs-figma/ {
       proxy_pass http://127.0.0.1:8000;
       proxy_set_header Host $host;
       proxy_read_timeout 600s;
   }
   ```
   `sudo nginx -t && sudo systemctl reload nginx`
6. Sao lưu định kỳ `users.yml` và thư mục `sync/`.

Cập nhật code web: push lên `main` là workflow `Deploy` (`.github/workflows/deploy.yml`) tự SSH vào server,
`git pull` rồi restart. Cần thêm secrets `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY` trong Settings › Secrets
của repo; user đó phải chạy được `sudo systemctl restart docs-figma` không cần mật khẩu. Làm tay:
`cd /opt/docs-figma/app && git pull && sudo systemctl restart docs-figma`.
Port 8000 đã bị dùng: thêm `PORT=8010` vào `.env` và đổi `proxy_pass` tương ứng.
