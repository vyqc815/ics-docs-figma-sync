# Tổng quan (S1)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-020100` | Chi tiết khoá học / Tổng quan | `/chi-tiet-khoa-hoc/tong-quan` | `CD-KH-020100-DK` | QC |

Requirement: `course_management/overview-s1/overview-s1.md` — Tổng quan (S1) (tiền tố `CM-OS`).

## 2. Luồng

- `FLOW01` Nhập Số buổi / Thời gian mỗi buổi ở card tổng quan — 
- `FLOW02` Thêm nhanh nội dung buổi học mới — 
- `FLOW03` Chỉnh sửa thông tin một nội dung — 
- `FLOW04` Đổi loại thao tác (Tự chọn / Giảng dạy) — 
- `FLOW05` Tự động tính toán — 
- `FLOW06` Xoá một nội dung — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Trang 1: Tổng quan (S1)

Frame: `CD-KH-020100` (tool đoán:CD-KH-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | so-buoi | `Thẻ chỉ số` Kiểu=Chuẩn | `2812:25145` Thẻ chỉ số | — |  | `TC02`, `TC04`, `TC07` | Khớp | QC |
| `A01.02` | thoi-gian-moi-buoi | `Thẻ chỉ số` Kiểu=Chuẩn | `2812:25154` Thẻ chỉ số | — |  | `TC02` | Khớp | QC |
| `A01.03` | tong-thoi-gian | `Thẻ chỉ số` Kiểu=Chuẩn | `2812:25164` Thẻ chỉ số | — |  | `TC02`, `TC04`, `TC05`, `TC07` | Khớp | QC |
| `A01.04` | thoi-gian-thuc-te | `Thẻ chỉ số` Kiểu=Chuẩn | `2812:25174` Thẻ chỉ số | — |  | `TC05` | Khớp | QC |
| `A01.05` | thoi-gian-con-lai | `Thẻ chỉ số` Kiểu=Chuẩn | `2812:25184` Thẻ chỉ số | — |  | `TC05`, `TC07` | Khớp | QC |

### `A02` Khu vực: Bảng "Nội dung buổi học"

Frame: `CD-KH-020100` (tool đoán:CD-KH-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | id |  | `1448:6747` ID | — |  |  | Khớp | QC |
| `A02.02` | ten |  | `1448:6749` Tên | — |  |  | Khớp | QC |
| `A02.03` | mo-ta |  | `1448:6751` Mô tả | — |  |  | Khớp | QC |
| `A02.04` | so-buoi | `Thẻ chỉ số` Kiểu=Chuẩn | `2812:25145` Thẻ chỉ số | — |  | `TC02`, `TC04`, `TC07` | Khớp | QC |
| `A02.05` | thoi-gian-hoc |  | `1448:6755` Thời gian học | — |  | `TC04`, `TC07` | Khớp | QC |
| `A02.06` | tong-thoi-gian | `Thẻ chỉ số` Kiểu=Chuẩn | `2812:25164` Thẻ chỉ số | — |  | `TC02`, `TC04`, `TC05`, `TC07` | Khớp | QC |
| `A02.07` |  |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.08` | thao-tac |  | `1448:6761` Thao tác | — |  | `TC06`, `TC07`, `TC10` | Khớp | QC |

### `A03` Khu vực: Thêm nội dung buổi học mới

Frame: `CD-KH-020100` (tool đoán:CD-KH-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A04` Toast phản hồi CRUD

Frame: `CD-KH-020100` (tool đoán:CD-KH-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa khớp tự động | QC |
| `A04.02` | thong-tin |  |  | — |  | `TC02`, `TC04` | Chưa khớp tự động | QC |
| `A04.03` | canh-bao |  |  | — |  | `TTC02`, `TC07` | Chưa khớp tự động | QC |
| `A04.04` | loi | `Card Menu v2 (Test)` Type=Menu phụ, State=Default | `I4915:255903;4901:220870;2245:87908` Label | — |  |  | Khớp | QC |

### `F01` Row

Frame: `CD-KH-020100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-id-badge | `Atom/ID Badge` Type=6-digit, Size=26H | `2409:144771` Atom/ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `2812:25761` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |

### `F02` (ngoài Body)

Frame: `CD-KH-020100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | add-new-bar-them-noi-dung-khoa-hoc-moi | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `2812:32946` Add New Bar · Thêm nội dung khoá học mới | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | sidebar-menu-cd | `MENU - CD`  | `4915:255903` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | account | `ACCOUNT` Size=Default | `2812:32932` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | component-2 | `Switch Center`  | `4273:160623` Component 2 | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Công thức Tổng thời gian (dòng) | Tổng thời gian (dòng) = Số buổi (dòng) × Thời gian học (dòng). |
| `REQ02` | Công thức % (dòng) | % (dòng) = Tổng thời gian (dòng) ÷ Tổng thời gian (card tổng quan) × 100. |
| `REQ03` | Công thức Tổng thời gian (card) | Tổng thời gian (card tổng quan) = Số buổi (card) × Thời gian mỗi buổi (card). |
| `REQ04` | Công thức Thời gian thực tế (card) | Thời gian thực tế (card) = tổng cột "Tổng thời gian" của toàn bộ các dòng trong bảng. |
| `REQ05` | Công thức Thời gian còn lại (card) | Thời gian còn lại (card) = Tổng thời gian (card) − Thời gian thực tế (card). |
| `REQ06` | Nhập Số buổi / Thời gian mỗi buổi (card) | 2 giá trị này mặc định là 0, do CD tự nhập tay, không tự động lấy từ nguồn dữ liệu khác. |
| `REQ07` | Thêm nhanh bằng Tên + Enter | Chỉ cần nhập Tên và nhấn Enter là tạo được nội dung mới; các field khác để trống/mặc định, bổ sung sau. |
| `REQ08` | Loại thao tác của nội dung | Mỗi nội dung có loại thao tác là Tự chọn hoặc Giảng dạy, đổi qua lại bằng icon cạnh nút xoá trong cột "Thao tác". |
| `REQ09` | Cảnh báo khi Thời gian còn lại âm | Khi tổng thời gian các nội dung vượt quá Tổng thời gian (card), hệ thống hiển thị cảnh báo cho CD. |
| `REQ10` | Xoá mềm nội dung | Xoá một nội dung buổi học là xoá mềm, có popup xác nhận trước khi xoá. |
| `EX01` | Ngoại lệ | Tổng thời gian các nội dung trong bảng vượt quá "Tổng thời gian" ở card tổng quan (khiến "Thời gian còn lại" âm) → hệ thống **hiển thị cảnh báo** cho CD (không chặn thao tác). |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A04` | `A04.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A04` | `A04.01`, `A04.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A04` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A04` | `A04.01` |
| `TC01` | Case 1: Xem tổng quan | High | Có | Flow chính | — |  |
| `TC02` | Case 2: Nhập Số buổi / Thời gian mỗi buổi lần đầu | High |  | Flow 1 / REQ06 | — | `A01.01`, `A01.02`, `A01.03`, `A02.04`, `A02.06`, `A04.02` |
| `TC03` | Case 3: Thêm nhanh nội dung mới | High | Có | Flow 2 / REQ07 | — |  |
| `TC04` | Case 4: Sửa Số buổi/Thời gian học → tự tính Tổng thời gian và % | High |  | Flow 5 / REQ01 / REQ02 | — | `A01.01`, `A01.03`, `A02.04`, `A02.05`, `A02.06`, `A04.02` |
| `TC05` | Case 5: Tự động cập nhật Thời gian thực tế và Thời gian còn lại | High |  | Flow 5 / REQ04 / REQ05 | — | `A01.03`, `A01.04`, `A01.05`, `A02.06` |
| `TC06` | Case 6: Đổi loại thao tác Tự chọn/Giảng dạy | Medium |  | Flow 4 / REQ08 | — | `A02.08` |
| `TC07` | Case 7: Thời gian còn lại bị âm | Medium |  | EX01 / REQ09 | — | `A01.01`, `A01.03`, `A01.05`, `A02.04`, `A02.05`, `A02.06`, `A02.08`, `A04.03` |
| `TC08` | Case 8: Xoá một nội dung | High |  | Flow 6 / REQ10 | — |  |
| `TC09` | Case 9: Huỷ xoá nội dung | Medium |  | Flow 6 | — |  |
| `TC10` | Case 10: Kiểm tra quyền truy cập | High |  | Ràng buộc quyền | — | `A02.08` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (4): `A02.07`, `A04.01`, `A04.02`, `A04.03`
- Testcase không trỏ REQ (6): `TTC01`, `TTC02`, `TTC03`, `TTC04`, `TC01`, `TC10`
- REQ/EX chưa có testcase (1): `REQ03`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
