# ADM-GFT-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-GFT-010000` | Gift code / Danh sách gift code | `/gift-code/danh-sach-gift-code` | `ADM-GFT-010000-DK` | Figma |
| `ADM-GFT-010001` | Gift code / Danh sách gift code / Đã sao chép mã | `/gift-code/danh-sach-gift-code/da-sao-chep-ma` | — | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-GFT-010010` | Popup tạo gift code | Popup | ADM-GFT-010000 | ADM-GFT-010000 | — | `/gift-code/danh-sach-gift-code?popup=ADM-GFT-010010` | Figma | cao |
| `ADM-GFT-010020` | Popup cập nhật gift code | Popup | ADM-GFT-010000 | ADM-GFT-010000 | — | `/gift-code/danh-sach-gift-code?popup=ADM-GFT-010020` | Figma | cao |

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-GFT-010000`, `ADM-GFT-010001` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:240264` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | account | `ACCOUNT` Size=Default | `3857:85799` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-icon-button | `Atom/Icon Button`  | `3977:76312` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | tim-kiem-theo-loai | `Atom/Input` State=Search theo loại, Kiểu=Chuẩn | `3977:76492` Tìm kiếm theo loại | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-chip | `Atom/Chip` Type=Date không có thứ | `3977:76515` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-number-badge | `Atom/Number Badge` Type=Square, Size=Medium, State=Active | `3977:76520` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | atom-badge | `Atom/Badge`  | `3977:76526` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | phan-trang |  | `3977:76485` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | molecule-tooltip | `Molecule/Tooltip`  | `5165:187648` Molecule/Tooltip | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (4): `ADM-GFT-010000`, `ADM-GFT-010001`, `ADM-GFT-010010`, `ADM-GFT-010020`
- Thiếu prototype link đi vào (2): `ADM-GFT-010010`, `ADM-GFT-010020`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
