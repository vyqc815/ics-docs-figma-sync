# ics-docs-figma-sync

Đồng bộ requirement docs và UI Figma của ICS 2026: xem docs và prototype song song, biết tài liệu nào lệch,
tra cứu màn hình theo mã, có đăng nhập và phân quyền.

- Docs gốc vẫn nằm ở repo FE. `docs/` ở đây là symlink tới `fe_ics_2026_old/docs/requirements`. Không sửa file docs gốc.
- Docs **chỉ cần ghi mã màn hình** (vd `CD-KH-070160`, hoặc dải `CD-KH-070301`–`070305`): hệ thống tự tìm frame Figma.

## Chạy

```bash
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
.venv/bin/python scripts/users.py add <tên> --role admin     # tạo tài khoản (hỏi mật khẩu)
export FIGMA_TOKEN=...                                       # cần cho nút "Đồng bộ Figma"
scripts/dev.sh                                               # http://127.0.0.1:8000
```

| Quyền | Được làm |
|---|---|
| viewer | Xem docs, Figma, lịch sử, tra cứu màn hình |
| admin | + menu Đồng bộ, Đánh dấu đã đồng bộ |

Hướng dẫn chi tiết từng nút: menu tài khoản (góc phải) › Hướng dẫn.

## Luồng

1. **Designer** đặt tên frame đúng quy ước `ROLE-MENU-MMTTPS — Tên / Tab / Popup / Trạng thái`, bật Ready for dev khi bàn giao.
2. **BA** viết docs, ghi mã màn hình ở chỗ mô tả UI. Không cần dán link Figma.
3. **Admin** mở menu **Đồng bộ**:
   - **Sync danh sách màn**: đọc bảng NAVIGATION trên Figma (`navigation_node` trong `sync/config.yml`) + quét tên frame để lấy màn `-DK`.
   - **Kiểm tra UI thay đổi**: lấy dấu vân tay từng frame mà docs nhắc tới.
   - **Build lại site**: khi docs vừa sửa.
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
