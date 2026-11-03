# ADM-GC-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-GC-010000` | Ghi chú / Danh sách ghi chú | `/ghi-chu/danh-sach-ghi-chu` | `ADM-GC-010000-DK` | Figma |
| `ADM-GC-010001` | Gift code / Danh sách gift code / Đã sao chép mã | `/gift-code/danh-sach-gift-code/da-sao-chep-ma` | — | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-GC-010010` | Popup tạo gift code | Popup | — | — | — | — | Figma | thấp |
| `ADM-GC-010020` | Popup cập nhật gift code | Popup | — | — | — | — | Figma | thấp |

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-GC-010000`, `ADM-GC-010001` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | dropdown-trung-tam | `DD/Molecule/Trigger` Size=S, State=Default | `4713:129156` Dropdown · Trung tâm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | dropdown | `DD/Molecule/Trigger` Size=S, State=Default | `4083:136063` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | avatar | `Avatar` Size=24 | `4083:136074` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:221051` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | account | `ACCOUNT` Size=Default | `4083:136568` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-icon-button | `Atom/Icon Button`  | `5165:186929` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | tim-kiem-theo-loai | `Atom/Input` State=Search theo loại, Kiểu=Chuẩn | `5165:186931` Tìm kiếm theo loại | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | atom-chip | `Atom/Chip` Type=Date không có thứ | `5165:186956` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | atom-number-badge | `Atom/Number Badge` Type=Square, Size=Medium, State=Active | `5165:186958` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | atom-badge | `Atom/Badge`  | `5165:186962` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | phan-trang |  | `5165:187092` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | molecule-tooltip | `Molecule/Tooltip`  | `5165:187648` Molecule/Tooltip | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (4): `ADM-GC-010000`, `ADM-GC-010001`, `ADM-GC-010010`, `ADM-GC-010020`
- Popup chưa có màn cha (2): `ADM-GC-010010`, `ADM-GC-010020`
- Phân loại cần design duyệt (2): `ADM-GC-010010`, `ADM-GC-010020`
- Thiếu prototype link đi vào (2): `ADM-GC-010010`, `ADM-GC-010020`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
