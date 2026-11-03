# Chi tiết lớp học — Menu Tổng quan

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-020100` | Chi tiết lớp học / Tổng quan | `/chi-tiet-lop-hoc/tong-quan` | `ADM-LOP-020100-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_overview_requirements.md` — Chi tiết lớp học — Menu Tổng quan (tiền tố `M-CDO2`).

## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-020110` | Popup lịch sử ghi chú | Popup | ADM-LOP-020100 | ADM-LOP-020100 | — | `/chi-tiet-lop-hoc/tong-quan?popup=ADM-LOP-020110` | Figma | cao |

## 4. Khu vực và item

### `A01` Màn Tổng quan và phân quyền

Frame: chưa có (tool đoán:ADM-LOP-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tong-quan-lop |  |  | — |  | `TC03` | Chưa sync | QC |
| `A01.02` | nut-back-ma-lop |  |  | — |  |  | Chưa sync | QC |
| `A01.03` | thong-ke-phia-tren |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | vung-ben-trai |  |  | — |  |  | Chưa sync | QC |
| `A01.05` | danh-sach-ben-phai |  |  | — |  |  | Chưa sync | QC |
| `A01.06` | search |  |  | — |  | `TC45` | Chưa sync | QC |
| `A01.07` | cong-tac-on-off |  |  | — |  |  | Chưa sync | QC |
| `A01.08` | dau-canh-search |  |  | — |  |  | Chưa sync | QC |

### `A02` Nút Back và tooltip thông tin lớp

Frame: chưa có (tool đoán:ADM-LOP-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | nut-back-ma-lop |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | tooltip |  |  | — |  | `TC55`, `TC56`, `TC58` | Chưa sync | QC |
| `A02.03` | buoi-hoc |  |  | — |  |  | Chưa sync | QC |
| `A02.04` | lich-hoc |  |  | — |  |  | Chưa sync | QC |
| `A02.05` | sp |  |  | — |  |  | Chưa sync | QC |
| `A02.06` | cskh |  |  | — |  | `TC57` | Chưa sync | QC |
| `A02.07` | giao-vien |  |  | — |  |  | Chưa sync | QC |
| `A02.08` | khai-giang |  |  | — |  | `TC57` | Chưa sync | QC |

### `A03` Thống kê học tập trung bình của lớp

Frame: chưa có (tool đoán:ADM-LOP-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | si-so |  |  | — |  | `TC04`, `TC41` | Chưa sync | QC |
| `A03.02` | di-hoc |  |  | — |  | `TC09` | Chưa sync | QC |
| `A03.03` | btvn |  |  | — |  | `TC09`, `TC42` | Chưa sync | QC |
| `A03.04` | diem-kt |  |  | — |  |  | Chưa sync | QC |
| `A03.05` | diem-btvn |  |  | — |  |  | Chưa sync | QC |
| `A03.06` | thoi-gian-hoc |  |  | — |  |  | Chưa sync | QC |
| `A03.07` | tieu-chuan |  |  | — |  | `TC09` | Chưa sync | QC |
| `A03.08` | da-cham-va-sua-bai |  |  | — |  | `TC51` | Chưa sync | QC |
| `A03.09` | danh-gia-lop |  |  | — |  |  | Chưa sync | QC |

### `A04` Biểu đồ theo bài học

Frame: chưa có (tool đoán:ADM-LOP-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | truc-bai-hoc |  |  | — |  |  | Chưa sync | QC |
| `A04.02` | gia-tri |  |  | — |  | `TC48` | Chưa sync | QC |
| `A04.03` | gioi-han-chart-hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A04.04` | duong-vung-cam |  |  | — |  |  | Chưa sync | QC |
| `A04.05` | tooltip |  |  | — |  |  | Chưa sync | QC |

### `A05` Danh sách, tìm kiếm và chọn học viên

Frame: chưa có (tool đoán:ADM-LOP-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | the-hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A05.02` | cham-do-lich-hen |  |  | — |  |  | Chưa sync | QC |
| `A05.03` | hover-cham-do |  |  | — | opens `A05` |  | Chưa sync | QC |
| `A05.04` | the-dang-chon |  |  | — |  |  | Chưa sync | QC |
| `A05.05` | click-the |  |  | — |  | `TC13`, `TC14`, `TC49` | Chưa sync | QC |
| `A05.06` | dau |  |  | — |  |  | Chưa sync | QC |
| `A05.07` | search-ten |  |  | — |  | `TC49` | Chưa sync | QC |
| `A05.08` | toan-bo-danh-sach |  |  | — |  |  | Chưa sync | QC |
| `A05.09` | vung-trai |  |  | — |  | `TC12` | Chưa sync | QC |

### `A06` Công tắc ON/OFF: học phí và ghi chú cài đặt

Frame: chưa có (tool đoán:ADM-LOP-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | on-off |  |  | — |  |  | Chưa sync | QC |
| `A06.02` | hoc-phi |  |  | — |  | `TC17`, `TC18`, `TC20` | Chưa sync | QC |
| `A06.03` | ghi-chu-cua-lop |  |  | — |  |  | Chưa sync | QC |
| `A06.04` | ghi-chu-duoi-tung-the |  |  | — |  |  | Chưa sync | QC |
| `A06.05` | icon-lich-su-canh-ghi-chu |  |  | — |  |  | Chưa sync | QC |

### `A07` Ghi chú cài đặt và lịch sử

Frame: chưa có (tool đoán:ADM-LOP-020110) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | icon-canh-ten-hoc-vien-dang-chon |  |  | — |  |  | Chưa sync | QC |
| `A07.02` | popup-lich-su-ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A07.03` | copy |  |  | — |  | `TC22`, `TC46` | Chưa sync | QC |
| `A07.04` | ghi-chu-bat-thuong |  |  | — |  |  | Chưa sync | QC |

### `A08` Đánh giá tổng và bài học gần đây

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | badge-danh-gia |  |  | — |  |  | Chưa sync | QC |
| `A08.02` | gia-tri-danh-gia |  |  | — |  |  | Chưa sync | QC |
| `A08.03` | so-bai-hien-thi |  |  | — |  |  | Chưa sync | QC |
| `A08.04` | di-hoc-vang |  |  | — |  |  | Chưa sync | QC |
| `A08.05` | da-nop-btvn |  |  | — |  |  | Chưa sync | QC |
| `A08.06` | icon-bai-gan-day |  |  | — |  |  | Chưa sync | QC |
| `A08.07` | di-hoc-da-nop-btvn |  |  | — |  |  | Chưa sync | QC |
| `A08.08` | di-hoc-chua-nop-btvn |  |  | — |  |  | Chưa sync | QC |
| `A08.09` | vang-da-nop-btvn |  |  | — |  |  | Chưa sync | QC |
| `A08.10` | vang-chua-nop-btvn |  |  | — |  |  | Chưa sync | QC |
| `A08.11` | hover-icon-bai-gan-day |  |  | — |  |  | Chưa sync | QC |

### `A09` Bảng bài học của học viên và điểm danh

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | ten-bai-hoc |  |  | — |  | `TC62` | Chưa sync | QC |
| `A09.02` | ghi-chu |  |  | — |  | `TC27`, `TC30` | Chưa sync | QC |
| `A09.03` | trang-thai |  |  | — |  | `TC28`, `TC29` | Chưa sync | QC |
| `A09.04` | diem-so |  |  | — |  | `TC29` | Chưa sync | QC |
| `A09.05` | thoi-gian |  |  | — |  | `TC27`, `TC53` | Chưa sync | QC |
| `A09.06` | co-mat |  |  | — |  |  | Chưa sync | QC |
| `A09.07` | vao-tre |  |  | — |  |  | Chưa sync | QC |
| `A09.08` | ra-som |  |  | — |  |  | Chưa sync | QC |
| `A09.09` | vao-tre-ra-som |  |  | — |  |  | Chưa sync | QC |
| `A09.10` | nghi-co-phep |  |  | — |  |  | Chưa sync | QC |
| `A09.11` | nghi-khong-phep |  |  | — |  |  | Chưa sync | QC |
| `A09.12` | chua-diem-danh |  |  | — |  | `TC28` | Chưa sync | QC |

### `A10` Popup ghi chú giáo viên theo bài học

Frame: chưa có (tool đoán:ADM-LOP-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | cho-hoc-vien |  |  | — |  | `TC32` | Chưa sync | QC |
| `A10.02` | cho-team-support |  |  | — |  | `TC32` | Chưa sync | QC |
| `A10.03` | huy |  |  | — |  |  | Chưa sync | QC |

### `A11` Popup Thời gian từng phần trên app

Frame: chưa có (tool đoán:ADM-LOP-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A11.01` | chin-phan |  |  | — |  |  | Chưa sync | QC |
| `A11.02` | moi-o |  |  | — |  |  | Chưa sync | QC |
| `A11.03` | 00-00-00 |  |  | — |  | `TC35` | Chưa sync | QC |
| `A11.04` | huy |  |  | — |  |  | Chưa sync | QC |

### `A12` Loading, rỗng, lỗi và an toàn dữ liệu

Frame: chưa có (tool đoán:ADM-LOP-020100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A12.01` | loading |  |  | — |  |  | Chưa sync | QC |
| `A12.02` | empty |  |  | — |  |  | Chưa sync | QC |
| `A12.03` | error |  |  | — |  |  | Chưa sync | QC |
| `A12.04` | toast |  |  | — |  | `TC40`, `TC54` | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` |  | Admin/Class Handler/Support/Teacher/Sale được xem theo phạm vi; Teacher không có ON/OFF hoặc payload học phí/ghi chú cài đặt qua Tổng quan. |
| `REQ02` |  | Sĩ số = (Đang học + Dự thính) / tất cả 7 trạng thái kể cả Xóa; Đi học/BTVN dùng công thức đã chốt; thời gian trung bình của tổng thời gian từng học viên–bài; Tiêu chuẩn lớp–giáo viên; Đã chấm và sửa bài = số bài BTVN + Kiểm tra đã bấm nút Đã Chấm và Sửa Bài Trên Lớp, mỗi bài một lần; không điều hướng các thẻ. |
| `REQ03` |  | Trung bình trực tiếp bài đã chấm, tính KT và BTVN riêng, giữ bài người rời/xóa, loại Chưa nộp/Chưa chấm khỏi cả tử/mẫu, giữ điểm 0 đã chấm, làm tròn kết quả cuối 1 chữ số thập phân. |
| `REQ04` |  | Mỗi điểm chart theo bài, không lũy kế; chart học viên chỉ tới bài người đó đã học, không hiển thị bài phía sau; đúng phạm vi lớp/học viên. |
| `REQ05` |  | Mặc định OFF; ON hiển thị học phí và ghi chú cài đặt, OFF ẩn; Teacher không có control; không mở rộng tab Hóa đơn/quyền sửa. |
| `REQ06` |  | Toàn bộ danh sách đủ mọi trạng thái kể cả Xóa, không load-more/phân trang; chọn người đầu tiên; click thẻ cập nhật vùng trái; > vào detail; search tên không lọc thống kê lớp. Chấm đỏ số lịch hẹn chưa hoàn tất (Mới, Chưa xử lý, Đang xử lý) của học viên theo phạm vi xem lịch hẹn, chỉ Admin/Class Handler/Support; hover mở popup Danh sách lịch hẹn chỉ đọc; Teacher và Sale không thấy. |
| `REQ07` |  | Ghi chú cài đặt cùng nguồn ở Cài đặt, chỉ xem bất thường/lịch sử/Copy với mọi role ở Tổng quan, không tự sinh cảnh báo. |
| `REQ08` |  | Đánh giá nguồn chưa có công thức, không điều hướng; F đỏ/D nâu/E cam; bài gần nhất đã được điểm danh (bỏ bài Chưa điểm danh): thẻ học viên tối đa 3 bài, vùng trái tối đa 6 bài; bốn icon `Class Session Status` theo đi học (Có mặt, Vào trễ, Ra sớm, Vào trễ & Ra sớm) / vắng (Nghỉ CP, Nghỉ KP) và đã nộp / chưa nộp BTVN; hover xem tên tổ hợp. |
| `REQ09` |  | Toàn bộ bảng bài theo số thứ tự tăng dần, không load-more/phân trang; bảy enum điểm danh hiển thị bằng bộ icon `Trạng thái đi học` kèm tooltip; điểm từng dòng là BTVN; tag thời điểm giáo viên mở bài `HH:mm - dd/MM/yyyy` phía trên tên bài, giống nhau cho mọi học viên, bài chưa mở không có tag; icon ghi chú xám không click; chỉ đọc. |
| `REQ10` |  | Popup hai vùng ghi chú giáo viên theo bài; Admin/Class Handler/Sale/Support và Teacher của lớp xem cả hai (Teacher gồm ghi chú của giáo viên khác trong lớp); không sửa ở Tổng quan, Teacher nhập ghi chú tại function role Giáo viên. |
| `REQ11` |  | i mở chín phần thời gian trên app, HH:mm:ss, không gộp flashcard, không thay 0 cho lỗi. |
| `REQ12` |  | Loading/empty/error rõ ràng, chống stale response, text an toàn, không Toast CRUD cho thao tác đọc; ⌃ chỉ thu gọn/mở vùng thống kê Tổng quan. |
| `REQ13` | Tooltip nút Back | Hover mũi tên/mã lớp hiển thị Thông tin gồm Buổi học, toàn bộ Lịch học, SP và nhãn chính, CSKH, Giáo viên, Khai giảng DD/MM/YYYY của đúng lớp. Chưa phân công hiển thị (Chưa có); rời hover thì ẩn; click vẫn quay về Danh sách lớp. Chỉ đọc, không phụ thuộc ON/OFF hoặc học viên được chọn; cùng quyền xem Tổng quan. |
| `EX01` | Ngoại lệ | Sai role/ngoài lớp/sai quyền ghi chú nội bộ → chặn backend và không trả nội dung không được phép. |
| `EX02` | Ngoại lệ | Thiếu điểm hoặc enum khác giá trị đã chốt → không tự đổi thành 0/đánh giá/điểm danh khác. |
| `EX03` | Ngoại lệ | Response ngữ cảnh cũ → bỏ qua; không ghi đè học viên/search/lớp hiện tại. |
| `EX04` | Ngoại lệ | Danh sách/search/bảng bài rỗng → empty state đúng vùng, không dữ liệu giả. |
| `EX05` | Ngoại lệ | Lỗi tải → giữ phần hợp lệ, báo lỗi/thử lại; không coi là kết quả 0 hoặc không có ghi chú. |
| `EX06` | Ngoại lệ | Học viên rời/xóa → bảo toàn bài đã làm/điểm BTVN và KT trong tập tính thống kê lịch sử; không xóa dữ liệu theo quan hệ hiện tại. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở Tổng quan đúng lớp | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Teacher không có ON/OFF | High |  | REQ01 / REQ05 | `A01` |  |
| `TC03` | Case 3: Chặn ngoài quyền/phạm vi | High |  | EX01 / REQ01 | `A01` | `A01.01` |
| `TC45` | Case 45: Thu gọn và mở thống kê | Medium |  | REQ01 / REQ12 | `A01` | `A01.06` |
| `TC55` | Case 55: Hover nút Back hiển thị đúng lớp | High |  | Flow 7 / REQ13 | `A02` | `A02.02` |
| `TC56` | Case 56: Nhiều lịch và nhân sự | High |  | REQ13 | `A02` | `A02.02` |
| `TC57` | Case 57: Chưa phân công và đúng ngày khai giảng | Medium |  | REQ13 / EX05 | `A02` | `A02.06`, `A02.08` |
| `TC58` | Case 58: Rời hover, click Back và đổi lớp | High |  | Flow 7 / REQ13 / EX03 | `A02` | `A02.02` |
| `TC04` | Case 4: Tử số sĩ số đúng rule mới | High |  | REQ02 | `A03` | `A03.01` |
| `TC05` | Case 5: Đi học/BTVN trung bình | High |  | REQ02 | `A03` |  |
| `TC06` | Case 6: Giữ bài của học viên rời/xóa | High |  | REQ03 | `A03` |  |
| `TC07` | Case 7: Chỉ tính bài đã chấm | High |  | REQ03 / EX02 | `A03` |  |
| `TC08` | Case 8: Thời gian học là trung bình | High |  | REQ02 | `A03` |  |
| `TC09` | Case 9: Tiêu chuẩn đúng nguồn | High |  | REQ02 | `A03` | `A03.02`, `A03.03`, `A03.07` |
| `TC41` | Case 41: Sĩ số đủ mọi trạng thái kể cả Xóa | High |  | REQ02 | `A03` | `A03.01` |
| `TC42` | Case 42: Trung bình theo bài và làm tròn | High |  | REQ03 | `A03` | `A03.03` |
| `TC43` | Case 43: Trung bình tổng thời gian học viên–bài | High |  | REQ02 / REQ11 | `A03` |  |
| `TC51` | Case 51: Đã chấm và sửa bài đếm số bài BTVN + KT | High |  | REQ02 | `A03` | `A03.08` |
| `TC10` | Case 10: Theo thứ tự bài | High |  | REQ04 | `A04` |  |
| `TC11` | Case 11: Đổi học viên không lẫn biểu đồ | High |  | Flow 2 / EX03 | `A04` |  |
| `TC48` | Case 48: Chart theo bài và dừng đúng tiến độ | High |  | REQ04 | `A04` | `A04.02` |
| `TC12` | Case 12: Chọn học viên đầu tiên | High |  | Flow 1 / REQ06 | `A05` | `A05.09` |
| `TC13` | Case 13: Click thẻ cập nhật vùng trái | High |  | Flow 2 / REQ06 | `A05` | `A05.05` |
| `TC14` | Case 14: Dấu > mở detail | High |  | Flow 2 / REQ06 | `A05` | `A05.05` |
| `TC15` | Case 15: Search theo tên | High |  | REQ06 | `A05` |  |
| `TC16` | Case 16: Không có học viên/kết quả | Medium |  | EX04 / REQ06 | `A05` |  |
| `TC44` | Case 44: Hiển thị toàn bộ danh sách và bài | High |  | REQ06 / REQ09 | `A05` |  |
| `TC59` | Case 59: Chấm đỏ đếm lịch hẹn chưa hoàn tất theo phạm vi | High |  | REQ06 | `A05` |  |
| `TC60` | Case 60: Teacher và Sale không thấy chấm đỏ | High |  | REQ06 / EX01 | `A05` |  |
| `TC49` | Case 49: Hiện và tìm đủ mọi trạng thái | High |  | REQ06 | `A05` | `A05.05`, `A05.07` |
| `TC17` | Case 17: Mặc định OFF rồi bật ON | High |  | Flow 3 / REQ05 | `A06` | `A06.02` |
| `TC18` | Case 18: OFF ẩn dữ liệu bổ sung | High |  | REQ05 | `A06` | `A06.02` |
| `TC19` | Case 19: Sale xem ON không mở rộng quyền | High |  | REQ01 / REQ05 | `A06` |  |
| `TC20` | Case 20: Không trộn học phí giữa lớp | High |  | REQ05 | `A06` | `A06.02` |
| `TC21` | Case 21: Lịch sử đúng học viên/lớp | High |  | Flow 4 / REQ07 | `A07` |  |
| `TC22` | Case 22: Copy đúng phiên bản | Medium |  | REQ07 | `A07` | `A07.03` |
| `TC23` | Case 23: Ghi chú bất thường theo dữ liệu | High |  | REQ07 | `A07` |  |
| `TC46` | Case 46: Mọi ghi chú tại Tổng quan chỉ xem | High |  | REQ07 / REQ10 | `A07` | `A07.03` |
| `TC24` | Case 24: Badge F/D/E đúng màu | High |  | REQ08 | `A08` |  |
| `TC25` | Case 25: Thẻ học viên chỉ 3 bài gần nhất đã điểm danh | High |  | REQ08 | `A08` |  |
| `TC61` | Case 61: Vùng trái hiển thị 6 bài gần nhất | High |  | REQ08 | `A08` |  |
| `TC26` | Case 26: Phân biệt bốn tổ hợp | High |  | REQ08 | `A08` |  |
| `TC47` | Case 47: Không điều hướng hoặc tự chốt icon | Medium |  | REQ02 / REQ08 / REQ09 | `A08` |  |
| `TC50` | Case 50: Hover xem trạng thái bài gần đây | High |  | REQ08 | `A08` |  |
| `TC27` | Case 27: Bảng đúng học viên được chọn | High |  | Flow 2 / REQ09 | `A09` | `A09.02`, `A09.05` |
| `TC28` | Case 28: Đủ bảy trạng thái điểm danh | High |  | REQ09 | `A09` | `A09.03`, `A09.12` |
| `TC29` | Case 29: Điểm BTVN và trạng thái chưa có điểm | High |  | REQ09 | `A09` | `A09.03`, `A09.04` |
| `TC30` | Case 30: Icon ghi chú đỏ/xám | High |  | REQ09 / REQ10 | `A09` | `A09.02` |
| `TC53` | Case 53: Mốc mở bài giống nhau ở mọi học viên | High |  | REQ09 | `A09` | `A09.05` |
| `TC62` | Case 62: Tag thời gian phía trên tên bài | Medium |  | REQ09 | `A09` | `A09.01` |
| `TC31` | Case 31: Mở ghi chú đúng bài/học viên | High |  | Flow 5 / REQ10 | `A10` |  |
| `TC32` | Case 32: Năm role xem cả hai vùng ghi chú | High |  | REQ10 / EX01 | `A10` | `A10.01`, `A10.02` |
| `TC52` | Case 52: Icon ghi chú xám không click | High |  | REQ09 / REQ10 | `A10` |  |
| `TC33` | Case 33: i mở đúng thời gian theo bài | High |  | Flow 6 / REQ11 | `A11` |  |
| `TC34` | Case 34: Đủ chín phần riêng biệt | High |  | REQ11 | `A11` |  |
| `TC35` | Case 35: Giá trị 0 khác lỗi tải | High |  | EX05 / REQ11 | `A11` | `A11.03` |
| `TC36` | Case 36: Đóng Thời gian | Medium |  | REQ11 | `A11` |  |
| `TC37` | Case 37: Đổi học viên/search liên tục | High |  | EX03 / REQ12 | `A12` |  |
| `TC38` | Case 38: Lỗi tải từng vùng | High |  | EX05 / REQ12 | `A12` |  |
| `TC39` | Case 39: Text ghi chú an toàn | High |  | REQ12 | `A12` |  |
| `TC40` | Case 40: Chỉ đọc không tạo CRUD | Medium |  | REQ12 | `A12` | `A12.04` |
| `TC54` | Case 54: Thao tác đọc của Teacher không tạo CRUD | Medium |  | REQ01 / REQ12 | `A12` | `A12.04` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- `A08` Khác Figma ADM-LOP-020100: khối Bài học gần đây ở vùng trái đang vẽ 4 icon, requirement là 6 bài.
- `A09` Khác Figma ADM-LOP-020100: bảng bài chưa có tag thời điểm mở bài phía trên tên bài.
- Chưa sync (82): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A01.08`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A02.08`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A03.08`, `A03.09`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A05.07`, `A05.08`, `A05.09`, `A06.01`, `A06.02`, `A06.03`, `A06.04`, `A06.05`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.06`, `A08.07`, `A08.08`, `A08.09`, `A08.10`, `A08.11`, `A09.01`, `A09.02`, `A09.03`, `A09.04`, `A09.05`, `A09.06`, `A09.07`, `A09.08`, `A09.09`, `A09.10`, `A09.11`, `A09.12`, `A10.01`, `A10.02`, `A10.03`, `A11.01`, `A11.02`, `A11.03`, `A11.04`, `A12.01`, `A12.02`, `A12.03`, `A12.04`
- Frame Figma chưa có requirement (1): `ADM-LOP-020110`
- Thiếu prototype link đi vào (1): `ADM-LOP-020110`
- REQ/EX chưa có testcase (1): `EX06`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
