# ADM-LOP-05xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-050204` | Lớp học / Nhật ký / Ghi chú | `/lop-hoc/nhat-ky/ghi-chu` | `ADM-LOP-050204-DK` | Figma |
| `ADM-LOP-050304` | Lớp học / Nhật ký / Lịch hẹn | `/lop-hoc/nhat-ky/lich-hen` | `ADM-LOP-050304-DK` | Figma |
| `ADM-LOP-050404` | Lớp học / Nhật ký / Tin nhắn | `/lop-hoc/nhat-ky/tin-nhan` | `ADM-LOP-050404-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-050406` | Popup xác nhận xoá | Popup | ADM-LOP-050404 | ADM-LOP-050404 | — | `/lop-hoc/nhat-ky/tin-nhan?popup=ADM-LOP-050406` | Figma | cao |
| `ADM-LOP-050407` | Popup xác nhận gửi | Popup | ADM-LOP-050404 | ADM-LOP-050404 | — | `/lop-hoc/nhat-ky/tin-nhan?popup=ADM-LOP-050407` | Figma | cao |
| `ADM-LOP-050408` | Popup tạo tin nhắn | Popup | ADM-LOP-050404 | ADM-LOP-050404 | — | `/lop-hoc/nhat-ky/tin-nhan?popup=ADM-LOP-050408` | Figma | cao |
| `ADM-LOP-050410` | Popup tạo tin nhắn bán tự động | Popup | ADM-LOP-050404 | ADM-LOP-050404 | — | `/lop-hoc/nhat-ky/tin-nhan?popup=ADM-LOP-050410` | Figma | cao |

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-LOP-050204`, `ADM-LOP-050304`, `ADM-LOP-050404` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2533:32349` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | dropdown | `DD/Molecule/Trigger` Size=S, State=Default | `2533:32370` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | avatar | `Avatar` Size=24 | `3641:78915` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:230853` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | account | `ACCOUNT` Size=Default | `3497:53417` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-icon-button | `Atom/Icon Button`  | `2533:33024` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | thoi-gian-lich-hen | `Thời gian lịch hẹn` Size=24H | `2533:37361` Thời gian lịch hẹn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | mouse-click |  | `2533:37364` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | atom-avatar-initials | `Atom/Avatar Initials`  | `2533:37366` Atom/Avatar Initials | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | atom-id-badge | `Atom/ID Badge` Type=Mã lớp, Size=20H | `2533:37370` Atom/ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `2533:33573` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | dd-molecule-trigger | `DD/Molecule/Trigger` Size=XS, State=Default | `3705:83403` DD/Molecule/Trigger | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | atom-badge | `Atom/Badge`  | `3705:83418` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | atom-button | `Atom/Button` Type=Primary, Size=XSmall | `3705:83421` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | molecule-o-dinh-danh |  | `3705:83585` Molecule/Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | chon-nen-tang | `DD/Molecule/Trigger` Size=XS, State=Default | `3705:84697` Chọn nền tảng | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | dropdown-nen-tang-tin-nhan | `DD/Organism/Menu Panel` Type=Single | `3705:84572` Dropdown · Nền tảng tin nhắn | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (7): `ADM-LOP-050204`, `ADM-LOP-050304`, `ADM-LOP-050404`, `ADM-LOP-050406`, `ADM-LOP-050407`, `ADM-LOP-050408`, `ADM-LOP-050410`
- Thiếu prototype link đi vào (4): `ADM-LOP-050406`, `ADM-LOP-050407`, `ADM-LOP-050408`, `ADM-LOP-050410`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
