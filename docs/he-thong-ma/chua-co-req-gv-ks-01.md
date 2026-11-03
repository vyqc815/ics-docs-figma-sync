# GV-KS-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-KS-010010` | Khảo sát / Làm khảo sát | `/khao-sat/lam-khao-sat` | `GV-KS-010010-DK` | Figma |
| `GV-KS-010020` | Khảo sát / Đã hoàn thành | `/khao-sat/da-hoan-thanh` | `GV-KS-010020-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-KS-010011` | Popup xác nhận gửi | Popup | GV-KS-010010 | GV-KS-010010 | — | `/khao-sat/lam-khao-sat?popup=GV-KS-010011` | Figma | cao |
| `GV-KS-010012` | Popup gửi thành công | Popup | GV-KS-010010 | GV-KS-010010 | — | `/khao-sat/lam-khao-sat?popup=GV-KS-010012` | Figma | cao |
| `GV-KS-010021` | Popup câu trả lời của bạn | Popup | GV-KS-010020 | GV-KS-010020 | — | `/khao-sat/da-hoan-thanh?popup=GV-KS-010021` | Figma | cao |

## 4. Khu vực và item

### `F01` Header

Frame: `GV-KS-010010`, `GV-KS-010020` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `4686:43844` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | component-2 | `Switch Center`  | `4686:43846` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | header-vai-tro |  | `4899:187338` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Sidebar

Frame: `GV-KS-010010`, `GV-KS-010020` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | card-menu | `Card Menu v2 (Test)` Type=Chính, State=Default | `6244:56406` Card Menu | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | header-gop-y | `Header/Góp ý` Kiểu=Đầy đủ, State=Enable | `4885:104500` Header/Góp ý | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | header-khao-sat | `Header/Khảo sát` Kiểu=Đầy đủ, State=Active | `4885:104504` Header/Khảo sát | — |  |  | Chỉ có trên Figma | Figma |

### `F03` (ngoài Body)

Frame: `GV-KS-010010`, `GV-KS-010020` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | luu-nhap | `Atom/Button` Type=Outlined, Size=Small | `4686:43931` Lưu nháp | — |  |  | Chỉ có trên Figma | Figma |
| `F03.02` | gui-khao-sat | `Atom/Button` Type=Primary, Size=Small | `4686:43932` Gửi khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F03.03` | cau-30 | `Atom/Badge`  | `4686:43946` Câu 30 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.04` | trac-nghiem | `Atom/Badge`  | `4686:43949` Trắc nghiệm | — |  |  | Chỉ có trên Figma | Figma |
| `F03.05` | bat-buoc | `Atom/Badge`  | `4686:43950` Bắt buộc | — |  |  | Chỉ có trên Figma | Figma |
| `F03.06` | radio-button | `Radio Button` Size=20 | `4686:43953` Radio Button | — |  |  | Chỉ có trên Figma | Figma |
| `F03.07` | cau-31 | `Atom/Badge`  | `4686:43963` Câu 31 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.08` | cau-32 | `Atom/Badge`  | `4686:43981` Câu 32 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.09` | doan-ngan | `Atom/Badge`  | `4686:43984` Đoạn ngắn | — |  |  | Chỉ có trên Figma | Figma |
| `F03.10` | khong-bat-buoc | `Atom/Badge`  | `4686:43985` Không bắt buộc | — |  |  | Chỉ có trên Figma | Figma |
| `F03.11` | cau-tra-loi | `Atom/Input` State=Default, Kiểu=Chuẩn | `4686:43987` Câu trả lời | — |  |  | Chỉ có trên Figma | Figma |
| `F03.12` | tab-can-lam | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4686:44123` Tab · Cần làm | — |  |  | Chỉ có trên Figma | Figma |
| `F03.13` | tab-da-hoan-thanh | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4686:44124` Tab · Đã hoàn thành | — |  |  | Chỉ có trên Figma | Figma |
| `F03.14` | trang-thai | `Atom/Badge`  | `4686:44133` Trạng thái | — |  |  | Chỉ có trên Figma | Figma |
| `F03.15` | liner-icon | `Liner Icon`  | `4686:44129` Liner Icon | — |  |  | Chỉ có trên Figma | Figma |
| `F03.16` | xem-lai | `Atom/Button` Type=Primary, Size=Small | `4686:44139` Xem lại | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (5): `GV-KS-010010`, `GV-KS-010011`, `GV-KS-010012`, `GV-KS-010020`, `GV-KS-010021`
- Thiếu prototype link đi vào (3): `GV-KS-010011`, `GV-KS-010012`, `GV-KS-010021`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
