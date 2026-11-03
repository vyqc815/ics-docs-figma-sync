# [Giáo viên] Chi tiết lớp — Tổng quan

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-010000` | Lớp / Thống kê tổng quan | `/lop/thong-ke-tong-quan` | `GV-LOP-010000-DK` | QC |
| `GV-LOP-020000` | Chi tiết lớp / Tổng quan | `/chi-tiet-lop/tong-quan` | `GV-LOP-020000-DK` | QC |

Requirement: `teacher_role/class/class_overview_requirements.md` — [Giáo viên] Chi tiết lớp — Tổng quan (tiền tố `TR-CO`).

## 2. Luồng

- `FLOW01` Mở Tổng quan — `REQ01`, `REQ02`, `REQ05`
- `FLOW02` Tìm và chọn học viên — `REQ05`, `REQ08`
- `FLOW03` Thu gọn thống kê — `REQ11`
- `FLOW04` Xem ghi chú theo bài — `REQ09`
- `FLOW05` Xem thời gian từng phần — `REQ10`
- `FLOW06` Nút Back và tooltip — `REQ12`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-LOP-020020` | Popup Ghi chú theo bài | Popup | GV-LOP-020000 | GV-LOP-020000 | — | `/chi-tiet-lop/tong-quan?popup=GV-LOP-020020` | Figma | cao |
| `GV-LOP-020030` | Popup Thời gian từng phần | Popup | GV-LOP-020000 | GV-LOP-020000 | — | `/chi-tiet-lop/tong-quan?popup=GV-LOP-020030` | Figma | cao |

## 4. Khu vực và item

### `A01` Tổng quan — Khung màn và phân quyền

Frame: `GV-LOP-020000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tieu-de-tong-quan-lop |  | `4324:4865` Tổng Quan Lớp | — |  |  | Khớp | QC |
| `A01.02` | nut-back-ma-lop |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A01.03` | thong-ke-phia-tren |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A01.04` | vung-ben-trai |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A01.05` | danh-sach-hoc-vien-ben-phai |  | `4324:5081` Danh sách học viên | — |  |  | Khớp | QC |
| `A01.06` | o-tim-kiem | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `4324:4867` Atom/Input | — |  | `TC04` | Khớp | QC |
| `A01.07` | icon-canh-o-tim-kiem |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A02` Nút Back và tooltip thông tin lớp

Frame: `GV-LOP-010000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | nut-back-ma-lop | `MENU - TEACHER`  | `4915:258752` Sidebar · MENU - TEACHER | — |  |  | Khớp | QC |
| `A02.02` | tooltip |  |  | — |  | `TC05`, `TC06`, `TC08` | Chưa thấy trên Figma | QC |
| `A02.03` | buoi-hoc |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A02.04` | lich-hoc |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A02.05` | sp | `Card Menu v2 (Test)` Type=Chính, State=Default | `I4915:258752;6244:32838` Card Menu | — |  |  | Khớp | QC |
| `A02.06` | cskh |  |  | — |  | `TC07` | Chưa thấy trên Figma | QC |
| `A02.07` | giao-vien | `ACCOUNT` Size=Default | `3868:95485` ACCOUNT | — |  |  | Khớp | QC |
| `A02.08` | khai-giang |  |  | — |  | `TC07` | Chưa thấy trên Figma | QC |
| `A02.09` | component-2 | `Switch Center`  | `4273:161193` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `A02.10` | header-vai-tro |  | `4899:187387` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |

### `A03` Thống kê học tập trung bình của lớp

Frame: `GV-LOP-010000`, `GV-LOP-020000` (tool đoán:GV-LOP-010000, GV-LOP-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | si-so | `CLass Status`  | `6725:364268` Tiêu đề; `3868:95642` CLass Status | — |  | `TC09` | Khớp | QC |
| `A03.02` | di-hoc | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `6725:364226` Thẻ chỉ số · Đi học | — |  | `TC14` | Khớp | QC |
| `A03.03` | btvn | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `3868:95629` Thẻ chỉ số · BTVN | — |  | `TC11`, `TC14` | Khớp | QC |
| `A03.04` | diem-kt | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `3868:95631` Thẻ chỉ số · Điểm KT | — |  | `TC11` | Khớp | QC |
| `A03.05` | diem-btvn | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `3868:95632` Thẻ chỉ số · Điểm BTVN | — |  | `TC11` | Khớp | QC |
| `A03.06` | thoi-gian-hoc | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `3868:95633` Thẻ chỉ số · Thời gian học | — |  | `TC13` | Khớp | QC |
| `A03.07` | tieu-chuan | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4324:4879` Thẻ chỉ số | — |  | `TC14` | Khớp một phần | QC |
| `A03.08` | da-cham-va-sua-bai | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4324:4880` Thẻ chỉ số | — |  | `TC15` | Khớp một phần | QC |
| `A03.09` | danh-gia-lop |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A04` Biểu đồ theo bài học

Frame: `GV-LOP-010000`, `GV-LOP-020000` (tool đoán:GV-LOP-010000, GV-LOP-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | truc-bai-hoc |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.02` | gia-tri |  | `4324:4927` Giá trị | — |  |  | Khớp một phần | QC |
| `A04.03` | gioi-han-chart-hoc-vien |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.04` | duong-vung-cam |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.05` | tooltip | `Molecule/Tooltip`  | `5413:254526` Tooltip · Hover nút Back (Thông tin lớp) | — |  |  | Khớp một phần | QC |

### `A05` Danh sách, tìm kiếm và chọn học viên

Frame: `GV-LOP-010000`, `GV-LOP-020000` (tool đoán:GV-LOP-010000, GV-LOP-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | the-hoc-vien |  |  | — |  | `TC20` | Chưa thấy trên Figma | QC |
| `A05.02` | the-dang-chon |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A05.03` | bam-the |  |  | — |  | `TC19` | Chưa thấy trên Figma | QC |
| `A05.04` | tim-kiem | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `3868:96252` Tìm kiếm | — |  |  | Khớp | QC |
| `A05.05` | pham-vi-danh-sach | `CLass Status`  | `3868:95642` CLass Status | — |  |  | Khớp | QC |
| `A05.06` | vung-trai |  |  | — |  | `TC18` | Chưa thấy trên Figma | QC |

### `A06` Đánh giá tổng và bài học gần đây

Frame: `GV-LOP-010000`, `GV-LOP-020000` (tool đoán:GV-LOP-010000, GV-LOP-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | badge-danh-gia |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.02` | so-bai-hien-thi |  | `4324:5081` Danh sách học viên | — |  |  | Khớp một phần | QC |
| `A06.03` | di-hoc-vang |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.04` | da-nop-btvn |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.05` | icon-bai |  |  | — |  | `TC26` | Chưa thấy trên Figma | QC |
| `A06.06` | hover-icon-bai |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A07` Bảng bài học của học viên và điểm danh

Frame: `GV-LOP-010000`, `GV-LOP-020000` (tool đoán:GV-LOP-010000, GV-LOP-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | ten-bai-hoc |  | `4324:4904` Tên bài học | — |  | `TC32` | Khớp một phần | QC |
| `A07.02` | ghi-chu |  | `4324:4906` Ghi chú | — | opens `A08` | `TC29` | Khớp một phần | QC |
| `A07.03` | trang-thai | `DD/Molecule/Trigger` Size=XS, State=Default | `3868:95575` Filter · Trạng thái | — |  | `TC30` | Khớp | QC |
| `A07.04` | diem-nop-bai |  | `4324:4910` ĐIỂM / NỘP BÀI; `4324:4930` Chưa nộp | — |  |  | Khớp một phần | QC |
| `A07.05` | thoi-gian | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `I3868:95633;3065:71108` Tiêu đề | — | opens `A09` | `TC29` | Khớp | QC |
| `A07.06` | co-mat |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.07` | vao-tre |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.08` | ra-som |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.09` | vao-tre-ra-som |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.10` | nghi-co-phep |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.11` | nghi-khong-phep |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.12` | chua-diem-danh |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A08` Popup ghi chú giáo viên theo bài học

Frame: `GV-LOP-020020` (tool đoán:GV-LOP-020020) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | ghi-chu-tu-giao-vien-cho-hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A08.02` | ghi-chu-tu-giao-vien-cho-team-support |  |  | — |  |  | Chưa sync | QC |
| `A08.03` | pham-vi-xem |  |  | — |  |  | Chưa sync | QC |
| `A08.04` | huy |  |  | — |  |  | Chưa sync | QC |

### `A09` Popup Thời gian từng phần trên app

Frame: `GV-LOP-020030` (tool đoán:GV-LOP-020030) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | chin-phan |  |  | — |  | `TC37` | Chưa sync | QC |
| `A09.02` | moi-o |  |  | — |  |  | Chưa sync | QC |
| `A09.03` | 00-00-00 |  |  | — |  | `TC38` | Chưa sync | QC |
| `A09.04` | huy |  |  | — |  |  | Chưa sync | QC |

### `A10` Loading, rỗng, lỗi và an toàn dữ liệu

Frame: `GV-LOP-010000`, `GV-LOP-020000` (tool đoán:GV-LOP-010000, GV-LOP-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | loading |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A10.02` | rong |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A10.03` | loi | `Card Menu v2 (Test)` Type=Chính, State=Default | `I4915:258752;4901:212605;2245:87768` Label | — |  |  | Khớp một phần | QC |
| `A10.04` | toast |  |  | — |  | `TC41` | Chưa thấy trên Figma | QC |

### `F01` (ngoài Body)

Frame: `GV-LOP-010000`, `GV-LOP-020000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | filter-loai-lop | `DD/Molecule/Trigger` Size=XS, State=Default | `3868:95574` Filter · Loại lớp | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | filter-trinh-do | `DD/Molecule/Trigger` Size=XS, State=Default | `3868:95576` Filter · Trình độ | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | ket-qua-diem-danh-gia | `Kết quả · Điểm đánh giá`  | `6725:364190` Kết quả · Điểm đánh giá | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | the-chi-so-buoi-da-day | `Thẻ chỉ số` Kiểu=Biểu đồ cột tháng | `6757:364993` Thẻ chỉ số · Buổi đã dạy | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | the-chi-so-luong-cung | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6725:362403` Thẻ chỉ số · Lương cứng | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | the-chi-so-luong-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6725:362415` Thẻ chỉ số · Lương KPI | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | global-progress-bar | `Global Progress Bar`  | `3868:95651` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | progress-diem-danh-gia-a-f | `Progress/Điểm Đánh Giá (A-F)` Size=28x24 | `3868:95653` Progress/Điểm Đánh Giá (A-F) | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | percent | `PERCENT %`  | `3868:95655` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | class-status | `CLass Status`  | `3868:96266` CLass Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | avatar | `Avatar` Size=20 | `4324:4888` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | the-chi-so | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4324:4894` Thẻ chỉ số | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | atom-badge | `Atom/Badge`  | `4324:4916` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | tag-thoi-gian | `Atom/Tag thời gian`  | `5413:75131` Tag thời gian | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | o-dinh-danh |  | `4324:5087` Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | class-session-status | `Class Session Status`  | `4324:5089` Class Session Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | student-status | `Student Status`  | `4324:5097` Student Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.18` | mouse-click |  | `4324:5128` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.19` | component-2 | `Switch Center`  | `4324:5211` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.20` | account | `ACCOUNT` Size=Default | `4324:6278` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.21` | header-vai-tro |  | `4899:187401` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |
| `F01.22` | sidebar-menu-teacher | `MENU - TEACHER`  | `4915:259100` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Quyền và phạm vi | Trong Chi tiết lớp chỉ có một menu `Tổng Quan` (màn `Tổng Quan Lớp`). Mọi giáo viên của lớp được xem; chỉ đọc. Không có công tắc ON/OFF, nút `Hiện ghi chú`, dấu `>`, icon ghi chú cạnh tên học viên, chấm đỏ lịch hẹn; API không trả học phí, ghi chú cài đặt lớp/học viên cho Giáo viên. |
| `REQ02` | Thẻ thống kê lớp | Sĩ số = (`Đang học` + `Dự thính`) / tất cả 7 trạng thái kể cả `Xóa`; Đi học, BTVN = trung bình tỷ lệ của học viên có dữ liệu; Thời gian học = trung bình tổng thời gian học viên–bài; Tiêu chuẩn = số chung của lớp từ function Tiêu chuẩn; Đã chấm và sửa bài = số bài BTVN + Kiểm tra đã có ít nhất một lần bấm nút, mỗi bài tính một lần. Các thẻ không điều hướng. |
| `REQ03` | Điểm trung bình | Điểm KT, Điểm BTVN tính riêng, trung bình trực tiếp trên bài đã chấm (điểm 0 vẫn tính, Chưa nộp/Chưa chấm loại khỏi tử và mẫu), giữ bài của học viên rời lớp/xóa, làm tròn kết quả cuối 1 chữ số thập phân; không có bài đã chấm thì để trống. |
| `REQ04` | Biểu đồ | Mỗi điểm là dữ liệu của một bài theo thứ tự bài, không lũy kế; chart học viên chỉ tới bài học viên đã học. |
| `REQ05` | Danh sách học viên | Toàn bộ học viên đủ 7 trạng thái, không phân trang; mặc định chọn học viên đầu tiên; bấm thẻ chỉ đổi học viên ở vùng trái; không có chấm đỏ số lịch hẹn; tìm theo tên trên toàn bộ học viên của lớp, không lọc thống kê lớp. |
| `REQ06` | Không có ghi chú cài đặt | Giáo viên không xem ghi chú cài đặt lớp, ghi chú cài đặt học viên và lịch sử của chúng tại Tổng quan. |
| `REQ07` | Đánh giá và bài gần đây | Badge đánh giá theo giá trị nguồn (F đỏ, D nâu, E cam), không tự tính, không điều hướng; bài gần nhất đã được điểm danh (bỏ bài `Chưa điểm danh`): thẻ học viên tối đa 3 bài, khối Bài Học Gần Đây vùng trái tối đa 6 bài; bốn icon `Class Session Status` theo đi học (Có mặt, Vào trễ, Ra sớm, Vào trễ & Ra sớm) / vắng (Nghỉ CP, Nghỉ KP) và đã nộp / chưa nộp BTVN; hover hiện tên tổ hợp. |
| `REQ08` | Bảng bài học | Toàn bộ bài theo số thứ tự tăng dần; tag thời điểm mở bài `HH:mm - dd/MM/yyyy` phía trên tên bài, giống nhau ở mọi học viên, bài chưa mở không có tag; 7 trạng thái điểm danh hiển thị bằng bộ icon `Trạng thái đi học`; cột điểm là điểm BTVN; icon ghi chú đỏ mở popup, xám không bấm; thời gian `HH:mm:ss` có icon `i`; chỉ đọc. |
| `REQ09` | Ghi chú theo bài | Popup hai vùng `Cho Học viên` và `Cho Team Support`; mọi giáo viên của lớp xem cả hai vùng, kể cả ghi chú của giáo viên khác; chỉ đọc, không sửa tại Tổng quan. |
| `REQ10` | Thời gian từng phần | Icon `i` mở chín phần thời gian của học viên–bài, `HH:mm:ss`, không gộp hai flashcard, không dùng 0 thay lỗi. |
| `REQ11` | Trạng thái và an toàn | Loading/rỗng/lỗi rõ từng vùng; bỏ qua response cũ; text ghi chú an toàn; không Toast CRUD cho thao tác đọc; icon `⌃` chỉ thu gọn/mở vùng thống kê lớp. |
| `REQ12` | Nút Back và tooltip | Hover hiển thị Buổi học, Lịch học, SP (nhãn chính), CSKH, Giáo viên, Khai giảng `DD/MM/YYYY` của đúng lớp; chưa phân công hiển thị `(Chưa có)`; click về menu Lớp của Giáo viên. |
| `EX01` | Ngoại lệ | Giáo viên không thuộc lớp mở URL hoặc gọi API Tổng quan / popup → backend từ chối, không trả dữ liệu. |
| `EX02` | Ngoại lệ | Thiếu điểm hoặc enum khác giá trị đã chốt → không tự đổi thành 0, đánh giá hoặc điểm danh khác. |
| `EX03` | Ngoại lệ | Response của học viên, từ khoá tìm kiếm hoặc lớp cũ về muộn → bỏ qua, không ghi đè ngữ cảnh hiện tại. |
| `EX04` | Ngoại lệ | Danh sách, kết quả tìm kiếm hoặc bảng bài rỗng → trạng thái rỗng đúng vùng, không dữ liệu giả. |
| `EX05` | Ngoại lệ | Lỗi tải → giữ phần đã tải thành công, vùng lỗi có `Thử lại`; không coi là 0 hoặc `(Chưa có)`. |
| `EX06` | Ngoại lệ | Học viên `Rời lớp`/`Xóa` → giữ bài đã làm, điểm BTVN/KT trong thống kê lịch sử. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở Tổng quan | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Không có ON/OFF, học phí, ghi chú cài đặt | High |  | REQ01 / REQ06 | `A01` |  |
| `TC03` | Case 3: Chặn giáo viên ngoài lớp | High |  | EX01 / REQ01 | `A01` |  |
| `TC04` | Case 4: Thu gọn và mở thống kê | Medium |  | Flow 3 / REQ11 | `A01` | `A01.06` |
| `TC05` | Case 5: Hover hiển thị đúng lớp | High |  | Flow 6 / REQ12 | `A02` | `A02.02` |
| `TC06` | Case 6: Nhiều lịch và nhân sự | High |  | REQ12 | `A02` | `A02.02` |
| `TC07` | Case 7: Chưa phân công và ngày khai giảng | Medium |  | REQ12 / EX05 | `A02` | `A02.06`, `A02.08` |
| `TC08` | Case 8: Click Back về menu Lớp | High |  | Flow 6 / REQ12 | `A02` | `A02.02` |
| `TC09` | Case 9: Sĩ số đủ mọi trạng thái kể cả Xóa | High |  | REQ02 | `A03` | `A03.01` |
| `TC10` | Case 10: Đi học/BTVN trung bình | High |  | REQ02 | `A03` |  |
| `TC11` | Case 11: Điểm chỉ tính bài đã chấm | High |  | REQ03 / EX02 | `A03` | `A03.03`, `A03.04`, `A03.05` |
| `TC12` | Case 12: Trung bình theo bài và giữ bài người rời lớp | High |  | REQ03 / EX06 | `A03` |  |
| `TC13` | Case 13: Thời gian học là trung bình học viên–bài | High |  | REQ02 | `A03` | `A03.06` |
| `TC14` | Case 14: Tiêu chuẩn đúng nguồn | High |  | REQ02 | `A03` | `A03.02`, `A03.03`, `A03.07` |
| `TC15` | Case 15: Đã chấm và sửa bài đếm theo bài BTVN + KT | High |  | REQ02 | `A03` | `A03.08` |
| `TC16` | Case 16: Theo thứ tự bài | High |  | REQ04 | `A04` |  |
| `TC17` | Case 17: Chart dừng đúng tiến độ học viên | High |  | REQ04 | `A04` |  |
| `TC18` | Case 18: Chọn học viên đầu tiên | High |  | Flow 1 / REQ05 | `A05` | `A05.06` |
| `TC19` | Case 19: Bấm thẻ cập nhật vùng trái | High | Có | Flow 2 / REQ05 | `A05` | `A05.03` |
| `TC20` | Case 20: Không có dấu `>` | Medium |  | REQ05 | `A05` | `A05.01` |
| `TC21` | Case 21: Không hiển thị chấm đỏ lịch hẹn | High |  | REQ05 | `A05` |  |
| `TC22` | Case 22: Tìm theo tên đủ mọi trạng thái | High |  | REQ05 | `A05` |  |
| `TC23` | Case 23: Không có kết quả | Medium |  | EX04 / REQ05 | `A05` |  |
| `TC24` | Case 24: Badge đúng màu theo nguồn | High |  | REQ07 | `A06` |  |
| `TC25` | Case 25: Thẻ học viên tối đa 3 bài | High |  | REQ07 | `A06` |  |
| `TC26` | Case 26: Vùng trái tối đa 6 bài | High |  | REQ07 | `A06` | `A06.05` |
| `TC27` | Case 27: Đủ bốn tổ hợp bài gần đây | High |  | REQ07 | `A06` |  |
| `TC28` | Case 28: Bỏ qua bài chưa điểm danh | Medium |  | REQ07 | `A06` |  |
| `TC29` | Case 29: Bảng đúng học viên đang chọn | High |  | Flow 2 / REQ08 | `A07` | `A07.02`, `A07.05` |
| `TC30` | Case 30: Đủ bảy trạng thái điểm danh | High |  | REQ08 | `A07` | `A07.03` |
| `TC31` | Case 31: Điểm BTVN và trạng thái chưa có điểm | High |  | REQ08 | `A07` |  |
| `TC32` | Case 32: Tag thời gian phía trên tên bài | Medium |  | REQ08 | `A07` | `A07.01` |
| `TC33` | Case 33: Mốc mở bài giống nhau | Medium |  | REQ08 | `A07` |  |
| `TC34` | Case 34: Xem đủ hai vùng ghi chú | High |  | Flow 4 / REQ09 | `A08` |  |
| `TC35` | Case 35: Xem ghi chú của giáo viên khác | High |  | REQ09 | `A08` |  |
| `TC36` | Case 36: Icon xám không bấm được | Medium |  | REQ08 / REQ09 | `A08` |  |
| `TC37` | Case 37: `i` mở đúng học viên–bài | High |  | Flow 5 / REQ10 | `A09` | `A09.01` |
| `TC38` | Case 38: Giá trị 0 khác lỗi tải | Medium |  | EX05 / REQ10 | `A09` | `A09.03` |
| `TC39` | Case 39: Đổi học viên liên tục | High |  | EX03 / REQ11 | `A10` |  |
| `TC40` | Case 40: Lỗi tải từng vùng | High |  | EX05 / REQ11 | `A10` |  |
| `TC41` | Case 41: Thao tác đọc không tạo thay đổi | Medium |  | REQ11 | `A10` | `A10.04` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- `A01` Khác Figma GV-LOP-020000: khối `Bài Học Gần Đây` ở vùng trái đang vẽ 4 icon, requirement là 6 bài; bảng bài học chưa có tag thời điểm mở bài phía trên tên bài.
- Chưa thấy trên Figma (32): `A01.02`, `A01.03`, `A01.04`, `A01.07`, `A02.02`, `A02.03`, `A02.04`, `A02.06`, `A02.08`, `A03.09`, `A04.01`, `A04.03`, `A04.04`, `A05.01`, `A05.02`, `A05.03`, `A05.06`, `A06.01`, `A06.03`, `A06.04`, `A06.05`, `A06.06`, `A07.06`, `A07.07`, `A07.08`, `A07.09`, `A07.10`, `A07.11`, `A07.12`, `A10.01`, `A10.02`, `A10.04`
- Chưa sync (8): `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A09.01`, `A09.02`, `A09.03`, `A09.04`
- Frame Figma chưa có requirement (2): `GV-LOP-020020`, `GV-LOP-020030`
- Thiếu prototype link đi vào (2): `GV-LOP-020020`, `GV-LOP-020030`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
