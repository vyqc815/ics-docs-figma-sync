# [Phụ trách lớp] Trang chủ — Thống kê tổng quan

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CH-TC-010003` | Trang chủ / Thống kê theo tháng | `/trang-chu/thong-ke-theo-thang` | `CH-TC-010003-DK` | QC |

Requirement: `class_handler_support/overview/overview.md` — [Phụ trách lớp] Trang chủ — Thống kê tổng quan (tiền tố `CHS-OV`).

## 2. Luồng

- `FLOW01` Mở Trang chủ — 
- `FLOW02` Lọc — 
- `FLOW03` Xem nhanh và vào Chi tiết lớp — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CH-TC-010001` | Chọn T9/2026 | Trạng thái | CH-TC-010003 | CH-TC-010003 | CH-TC-010002, CH-TC-010003 | `/trang-chu/thong-ke-theo-thang?state=CH-TC-010001` | Figma | trung bình |

## 4. Khu vực và item

### `A01` Trang 1: Thống kê tổng quan

Frame: `CH-TC-010003` (tool đoán:CH-TC-010003) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | trung-tam |  |  | — |  | `TC01`, `TC02` | Chưa khớp tự động | QC |
| `A01.02` | loai-lop |  |  | — |  | `TC04` | Chưa khớp tự động | QC |
| `A01.03` | khoa-hoc |  | `7015:12024` Khoá học & tiến độ | — |  | `TC04` | Khớp | QC |
| `A01.04` | trang-thai-nut-hien-thi-gia-tri-dang-cho | `CLass Status`  | `7015:12037` CLass Status | — |  |  | Khớp | QC |
| `A01.05` | thoi-gian-nut-hien-thi-gia-tri-dang-chon |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.06` | che-do-loc |  |  | — |  | `TC03` | Chưa khớp tự động | QC |
| `A01.07` | ngay-bat-dau-du-kien-chinh-thuc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.08` | ngay-ket-thuc-du-kien-chinh-thuc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.09` | doanh-thu |  |  | — |  | `TC04`, `TC13` | Chưa khớp tự động | QC |
| `A01.10` | so-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `7015:12015` Thẻ chỉ số · KPI | — |  | `TC04`, `TC13` | Khớp | QC |
| `A01.11` | kpi-nhan-duoc |  |  | — |  | `TC04`, `TC13` | Chưa khớp tự động | QC |
| `A01.12` | kpi-lop |  |  | — |  | `TC05`, `TC09` | Chưa khớp tự động | QC |
| `A01.13` | so-lop | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `7015:12008` Thẻ chỉ số · Số lớp | — |  | `TC01`, `TC09` | Khớp | QC |
| `A01.14` | di-hoc | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `7015:12010` Thẻ chỉ số · Đi học | — |  | `TC06`, `TC09` | Khớp | QC |
| `A01.15` | btvn | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `7015:12011` Thẻ chỉ số · BTVN | — |  | `TC06`, `TC09` | Khớp | QC |
| `A01.16` | len-ky | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `7015:12009` Thẻ chỉ số · Lên kỳ | — |  | `TC12`, `TC09` | Khớp | QC |
| `A01.17` | badge-hang-tong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.18` | hoan-thanh |  |  | — |  | `TC02`, `TC12` | Chưa khớp tự động | QC |
| `A01.19` | chua-hoan-thanh-dang-hoc | `CLass Status`  | `7015:12037` CLass Status | — |  |  | Khớp | QC |

### `F01` Header

Frame: `CH-TC-010003` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `7015:13208` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Sidebar · MENU - CLASS HANDLER

Frame: `CH-TC-010003` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | sidebar-menu-class-handler | `MENU - CLASS HANDLER`  | `7015:13210` Sidebar · MENU - CLASS HANDLER | — |  |  | Chỉ có trên Figma | Figma |

### `F03` (ngoài Body)

Frame: `CH-TC-010003` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | the-chi-so-dat-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `7015:12012` Thẻ chỉ số · Đạt KPI | — |  |  | Chỉ có trên Figma | Figma |
| `F03.02` | the-chi-so-luong-cung | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `7015:12014` Thẻ chỉ số · Lương cứng | — |  |  | Chỉ có trên Figma | Figma |
| `F03.03` | progress-diem-danh-gia-a-f | `Progress/Điểm Đánh Giá (A-F)` Size=36x32 | `7015:12017` Progress/Điểm Đánh Giá (A-F) | — |  |  | Chỉ có trên Figma | Figma |
| `F03.04` | global-progress-bar | `Global Progress Bar`  | `7015:12046` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F03.05` | percent-di-hoc | `PERCENT %`  | `7015:12048` PERCENT % · Đi học | — |  |  | Chỉ có trên Figma | Figma |
| `F03.06` | percent-btvn | `PERCENT %`  | `7015:12050` PERCENT % · BTVN | — |  |  | Chỉ có trên Figma | Figma |
| `F03.07` | percent | `PERCENT %`  | `7015:12054` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F03.08` | class-status | `CLass Status`  | `7015:12059` CLass Status | — |  |  | Chỉ có trên Figma | Figma |
| `F03.09` | filter-nam | `DD/Molecule/Trigger` Size=XS, State=Default | `7015:12217` Filter · Năm | — |  |  | Chỉ có trên Figma | Figma |
| `F03.10` | thang-t10-2026 | `Item tháng`  | `7015:12228` Tháng · T10/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.11` | thang-t9-2026 | `Item tháng`  | `7015:12229` Tháng · T9/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.12` | thang-t8-2026 | `Item tháng`  | `7015:12230` Tháng · T8/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.13` | thang-t7-2026 | `Item tháng`  | `7015:12231` Tháng · T7/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.14` | thang-t6-2026 | `Item tháng`  | `7015:12232` Tháng · T6/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.15` | thang-t5-2026 | `Item tháng`  | `7015:12233` Tháng · T5/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.16` | thang-t4-2026 | `Item tháng`  | `7015:12234` Tháng · T4/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.17` | thang-t3-2026 | `Item tháng`  | `7015:12235` Tháng · T3/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.18` | thang-t2-2026 | `Item tháng`  | `7015:12236` Tháng · T2/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.19` | thang-t1-2026 | `Item tháng`  | `7015:12237` Tháng · T1/2026 | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Phạm vi dữ liệu | Không dùng trung tâm ở header. Chỉ lớp có user trong danh sách Phụ trách lớp và hoá đơn có user là Người phụ trách. Backend xác định user từ token, không nhận `handler_id` từ client. |
| `REQ02` | Bộ lọc đồng bộ | Trung tâm (mặc định Tất cả), Loại lớp, Khoá học, Trạng thái (`Đang học`, `Hoàn thành`; mặc định Đang học), Thời gian (mặc định Tháng này), Chế độ lọc (4 mốc ngày, chọn nhiều; mặc định Ngày kết thúc chính thức; bỏ chọn hết thì Thời gian không lọc tập lớp). Mọi bộ lọc áp cho tập lớp; thẻ hoá đơn áp Trung tâm + Thời gian. |
| `REQ03` | Thẻ hoá đơn & KPI | Doanh Thu = Σ Giá trị HĐ × KPI PTL / Tổng KPI HĐ; Số KPI = Σ KPI PTL; KPI Nhận Được = Σ KPI PTL / Σ Tổng KPI HĐ; KPI Lớp = tiền KPI Đã xác nhận của user thuộc các lớp trong tập. |
| `REQ04` | Thẻ học tập | Số Lớp; Đi Học, BTVN theo công thức trang Lớp role Giáo viên (trung bình theo học viên); Lên Kỳ = trung bình tỷ lệ lên kỳ từng lớp (lớp Hoàn thành: Up-sale/Force/Super up-sale/Hoàn thành ÷ học viên còn tính; lớp chưa hoàn thành: Đang học ÷ (tổng − chuyển lớp)); 1 chữ số thập phân; badge hạng tổng getEvaluate. |
| `REQ08` | Tỷ lệ lên kỳ lớp | Vòng `%` trên card và thẻ Lên Kỳ dùng cùng tỷ lệ lên kỳ của lớp; mẫu số 0 → 0%. |
| `REQ05` | Khối lớp đang chọn | Bấm card hiện thông số nhanh; mặc định lớp đầu tiên; Kết quả, ngày (kết thúc viền đỏ khi chưa đến hạn), khung giờ, 6 chỉ số + biểu đồ theo Tổng quan lớp. |
| `REQ06` | Danh sách lớp | Card: icon trạng thái, mã lớp, khoá học, tiến độ `x/y Buổi`, badge hạng, vòng KPI lớp, `>` vào Quản lý → Lớp học → Tổng quan lớp. Sắp theo mã lớp, không phân trang. |
| `REQ07` | Chỉ xem | Trang không có thao tác thêm/sửa/xoá; không có Toast CRUD. |
| `EX01` | Ngoại lệ | Phụ trách lớp chưa được thêm vào lớp nào / bộ lọc không ra lớp → `Số Lớp` = 0, `KPI Lớp` = `0 đ`, Đi Học/BTVN/Lên Kỳ `0%`, badge trống; ẩn khối lớp; danh sách `Bảng dữ liệu này đang trống`. Thẻ hoá đơn vẫn tính độc lập theo Trung tâm + Thời gian. |
| `EX02` | Ngoại lệ | Tải dữ liệu thất bại → vùng lỗi có `Thử lại`; không hiển thị `0` giả, không giữ số liệu của bộ lọc cũ. |
| `EX03` | Ngoại lệ | Đổi bộ lọc liên tục, response cũ về sau → bỏ qua response cũ, chỉ render theo bộ lọc mới nhất. |
| `EX04` | Ngoại lệ | Truy cập Chi tiết lớp không được phân công (sửa URL) hoặc bị xoá khỏi lớp trong lúc đang xem → backend từ chối, thông báo không có quyền, tải lại danh sách. |
| `EX05` | Ngoại lệ | Hoá đơn có `Tổng KPI HĐ = 0` → không tham gia `Doanh Thu`, `KPI Nhận Được`; không chia 0. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở Trang chủ với bộ lọc mặc định | High |  | Flow 1 / REQ01 / REQ02 | — | `A01.01`, `A01.13` |
| `TC02` | Case 2: Bộ lọc Trạng thái và Trung tâm | High |  | Flow 2 / REQ02 | — | `A01.01`, `A01.18` |
| `TC03` | Case 3: Thời gian + Chế độ lọc "đang dạy" | High |  | Flow 2 / REQ02 | — | `A01.06` |
| `TC04` | Case 4: Doanh Thu, Số KPI, KPI Nhận Được | High |  | REQ03 / EX05 | — | `A01.02`, `A01.03`, `A01.09`, `A01.10`, `A01.11` |
| `TC13` | Case 13: KPI âm trên hoá đơn | High |  | REQ03 | — | `A01.09`, `A01.10`, `A01.11` |
| `TC05` | Case 5: KPI Lớp theo lớp | High |  | REQ03 | — | `A01.12` |
| `TC06` | Case 6: Đi Học, BTVN | High |  | REQ04 | — | `A01.14`, `A01.15` |
| `TC12` | Case 12: Lên Kỳ và vòng % lớp | High |  | REQ04 / REQ08 | — | `A01.16`, `A01.18` |
| `TC07` | Case 7: Xem nhanh lớp | High |  | Flow 3 / REQ05 | — |  |
| `TC08` | Case 8: Vào Chi tiết lớp | High |  | Flow 3 / REQ06 | — |  |
| `TC09` | Case 9: Không có lớp | Medium |  | EX01 | — | `A01.12`, `A01.13`, `A01.14`, `A01.15`, `A01.16` |
| `TC10` | Case 10: Lỗi tải và response cũ | Medium |  | EX02 / EX03 | — |  |
| `TC11` | Case 11: Chặn quyền và phạm vi | High |  | EX04 / Ràng buộc quyền | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (11): `A01.01`, `A01.02`, `A01.05`, `A01.06`, `A01.07`, `A01.08`, `A01.09`, `A01.11`, `A01.12`, `A01.17`, `A01.18`
- Frame Figma chưa có requirement (1): `CH-TC-010001`
- Phân loại cần design duyệt (1): `CH-TC-010001`
- REQ/EX chưa có testcase (1): `REQ07`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
