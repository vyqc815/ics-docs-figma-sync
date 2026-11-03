# GV-LOP-05xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-050110` | Chi tiết lớp / Tự học / Có dữ liệu | `/chi-tiet-lop/tu-hoc/co-du-lieu` | `GV-LOP-050110-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `GV-LOP-050110` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-badge | `Atom/Badge`  | `5425:281700` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | component-2 | `Switch Center`  | `5425:281389` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | account | `ACCOUNT` Size=Default | `5425:281391` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | header-vai-tro |  | `5425:281392` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | sidebar-menu-teacher | `MENU - TEACHER`  | `5425:281483` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Frame Figma chưa có requirement (1): `GV-LOP-050110`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
