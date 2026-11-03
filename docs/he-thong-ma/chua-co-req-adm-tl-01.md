# ADM-TL-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-TL-010000` | Tài liệu / Chi tiết tài liệu | `/tai-lieu/chi-tiet-tai-lieu` | `ADM-TL-010000-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-TL-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:249842` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-input | `Atom/Input` State=Default, Kiểu=Chuẩn | `4193:146189` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-dropzone | `Atom/Dropzone` Kiểu=Mặc định | `4193:146185` Atom/Dropzone | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-icon-button | `Atom/Icon Button`  | `4193:146193` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | add-new-bar-nhap-noi-dung-moi | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `4193:146143` Add New Bar · Nhập nội dung mới | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | add-new-bar-nhap-danh-muc-moi | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `4193:145393` Add New Bar · Nhập danh mục mới | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | atom-status | `Atom/Status` Size=S | `4193:145511` Atom/Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | add-new-bar-them-moi | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `4193:145435` Add New Bar · Thêm mới | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (1): `ADM-TL-010000`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
