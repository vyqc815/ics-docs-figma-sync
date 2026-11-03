# [Phụ trách lớp] Thống kê

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CH-TK-010000` | Thống kê | `/phu-trach-lop/thong-ke` | `CH-TK-010000-DK` | QC |

Requirement: `class_handler_support/statistics/statistics.md` — [Phụ trách lớp] Thống kê (tiền tố `CHS-ST`).

## 2. Luồng

- `FLOW01` Xem thống kê — 
- `FLOW02` Lọc — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Trang 1: Thống kê

Frame: `CH-TK-010000` (tool đoán:CH-TK-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `6935:381681` Filter · Trung tâm | — |  | `TC11` | Khớp | QC |
| `A01.02` | thoi-gian-nut-hien-thi-gia-tri-dang-chon | `DD/Molecule/Trigger` Size=XS, State=Active | `3857:82088` Filter · Tháng này | — |  |  | Khớp | QC |
| `A01.03` | trinh-do | `DD/Molecule/Trigger` Size=XS, State=Default | `3857:82108` Filter · Trình độ | — |  | `TC01`, `TC04`, `TC07` | Khớp | QC |
| `A01.04` | hoc-ky | `DD/Molecule/Trigger` Size=XS, State=Default | `3857:82120` Filter · Học kỳ | — |  | `TC01`, `TC04`, `TC07` | Khớp | QC |
| `A01.05` | kpi | `Card Menu v2 (Test)` Type=Chính, State=Default; `Thẻ chỉ số` Kiểu=Chuẩn | `I4969:25446;4901:227392` Card Menu; `3857:82943` Thẻ chỉ số · KPI Cá Nhân | — |  |  | Khớp | QC |
| `A01.06` | kpi | `Card Menu v2 (Test)` Type=Chính, State=Default; `Thẻ chỉ số` Kiểu=Chuẩn | `I4969:25446;4901:227392` Card Menu; `3857:82944` Thẻ chỉ số · Tiền KPI Lớp | — |  |  | Khớp | QC |
| `A01.07` | lop | `Thẻ chỉ số` Kiểu=Chuẩn | `3857:82155` Lớp; `3857:82918` Thẻ chỉ số · Số Lớp Bắt Đầu | — |  |  | Khớp | QC |
| `A01.08` | lop | `Thẻ chỉ số` Kiểu=Chuẩn | `3857:82155` Lớp; `3857:82919` Thẻ chỉ số · Số Lớp Kết Thúc | — |  |  | Khớp | QC |
| `A01.09` | lop | `Thẻ chỉ số` Kiểu=Chuẩn | `3857:82155` Lớp; `3857:82920` Thẻ chỉ số · Tổng Số Lớp | — |  |  | Khớp | QC |
| `A01.10` | ti-le | `Thẻ chỉ số` Kiểu=Chuẩn | `3857:82184` Tỉ lệ; `3857:82202` Thẻ chỉ số · Đi Học | — |  | `TC07`, `TC09` | Khớp | QC |
| `A01.11` | ti-le | `Thẻ chỉ số` Kiểu=Chuẩn | `3857:82184` Tỉ lệ; `3857:82890` Thẻ chỉ số · Bài Tập Về Nhà | — |  | `TC07`, `TC09` | Khớp | QC |
| `A01.12` | ti-le | `Thẻ chỉ số` Kiểu=Chuẩn | `3857:82184` Tỉ lệ; `3857:82899` Thẻ chỉ số · Lên Kỳ | — |  | `TC07`, `TC09` | Khớp | QC |
| `A01.13` | doanh-thu | `Thẻ chỉ số` Kiểu=Chuẩn | `3857:82212` Doanh thu; `3857:82968` Thẻ chỉ số · Tổng Doanh Thu Lớp | — |  | `TC03`, `TC07`, `TC09` | Khớp | QC |
| `A01.14` | doanh-thu | `Thẻ chỉ số` Kiểu=Chuẩn | `3857:82212` Doanh thu; `3857:82969` Thẻ chỉ số · Doanh Thu Trung Bình | — |  | `TC03`, `TC07`, `TC09` | Khớp | QC |
| `A01.15` | sidebar-menu-class-handler | `MENU - CLASS HANDLER`  | `4969:25446` Sidebar · MENU - CLASS HANDLER | — |  |  | Chỉ có trên Figma | Figma |

### `A02` Trang 2: Dropdown Trình độ và Học kỳ

Frame: `CH-TK-010000` (tool đoán:CH-TK-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `F01` Header

Frame: `CH-TK-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `3857:81056` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Phạm vi | Chỉ lớp có user trong danh sách Phụ trách lớp (loại Hủy, Xóa) và hoá đơn/khoản KPI của chính user; backend xác định user từ token. |
| `REQ02` | Bộ lọc | Trung tâm (chọn nhiều, mặc định tất cả), Thời gian (chọn 1, mặc định Tháng này), Trình độ, Học kỳ (chọn nhiều, mặc định tất cả). Mọi thẻ theo bộ lọc; KPI Cá Nhân theo Trung tâm + Thời gian. |
| `REQ03` | Thẻ KPI | KPI Cá Nhân = Số KPI của Trang chủ; Tiền KPI Lớp = KPI Đã xác nhận của user, ngày ghi nhận trong khoảng. |
| `REQ04` | Thẻ Lớp | Số Lớp Bắt Đầu / Kết Thúc theo ngày bắt đầu / kết thúc chính thức trong khoảng; Tổng Số Lớp = lớp đang phụ trách trong khoảng. |
| `REQ05` | Thẻ Tỉ lệ | Đi Học, BTVN, Lên Kỳ theo công thức Trang chủ, tính trên Tập lớp trong khoảng; Đi Học/BTVN chỉ lấy buổi/bài trong khoảng. |
| `REQ06` | Thẻ Doanh thu | Tổng Doanh Thu Lớp = học phí đã đóng của Tập lớp trong khoảng; Doanh Thu Trung Bình = Tổng Doanh Thu Lớp / Tổng Số Lớp. |
| `REQ07` | Dòng khoảng ngày | Mỗi nhóm thẻ hiển thị `(Trong khoảng: dd.MM.yyyy - dd.MM.yyyy)` theo bộ lọc Thời gian. |
| `EX01` | Ngoại lệ | Phụ trách lớp chưa có lớp / bộ lọc không ra lớp → thẻ lớp, tỉ lệ, doanh thu, Tiền KPI Lớp hiển thị `0` / `0%` / `0 đ`; `KPI Cá Nhân` vẫn tính theo hoá đơn. |
| `EX02` | Ngoại lệ | Tải dữ liệu thất bại → vùng lỗi có `Thử lại`; không hiển thị `0` giả. |
| `EX03` | Ngoại lệ | Đổi bộ lọc liên tục, response cũ về sau → bỏ qua response cũ. |
| `EX04` | Ngoại lệ | Hoá đơn có tổng KPI = 0 hoặc lớp có mẫu số tỉ lệ = 0 → không chia 0, xử lý như Trang chủ. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở trang mặc định | High |  | Flow 1 / REQ02 / REQ07 | — | `A01.03`, `A01.04` |
| `TC02` | Case 2: Thẻ Lớp | High |  | REQ04 | — |  |
| `TC03` | Case 3: Doanh thu trung bình | High |  | REQ06 | — | `A01.13`, `A01.14` |
| `TC04` | Case 4: KPI Cá Nhân | High |  | REQ03 | — | `A01.03`, `A01.04` |
| `TC05` | Case 5: Tiền KPI Lớp | High |  | REQ03 | — |  |
| `TC06` | Case 6: Tỉ lệ trong khoảng | High |  | REQ05 | — |  |
| `TC07` | Case 7: Lọc Trình độ / Học kỳ | Medium |  | Flow 2 / REQ02 | — | `A01.03`, `A01.04`, `A01.10`, `A01.11`, `A01.12`, `A01.13`, `A01.14` |
| `TC11` | Case 11: Lọc Trung tâm | High |  | Flow 2 / REQ02 | — | `A01.01` |
| `TC08` | Case 8: Tùy chọn khoảng ngày | Medium |  | Flow 2 / REQ07 | — |  |
| `TC09` | Case 9: Không có lớp, lỗi tải | Medium |  | EX01 / EX02 | — | `A01.10`, `A01.11`, `A01.12`, `A01.13`, `A01.14` |
| `TC10` | Case 10: Chặn xem số liệu người khác | High |  | Ràng buộc quyền | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Testcase không trỏ REQ (1): `TC10`
- REQ/EX chưa có testcase (3): `REQ01`, `EX03`, `EX04`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
