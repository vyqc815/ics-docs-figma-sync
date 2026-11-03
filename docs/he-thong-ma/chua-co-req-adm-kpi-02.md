# ADM-KPI-02xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-KPI-020000` | KPI & OT / Danh sách OT | `/kpi-ot/danh-sach-ot` | `ADM-KPI-020000-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-KPI-020000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `3708:21797` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-icon-button | `Atom/Icon Button`  | `3708:21802` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `3708:21804` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-badge | `Atom/Badge`  | `3708:21827` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | phan-trang |  | `3708:22017` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | account | `ACCOUNT` Size=Default | `3708:22066` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:237176` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (1): `ADM-KPI-020000`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
