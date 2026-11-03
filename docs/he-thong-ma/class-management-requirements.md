# Quản lý danh sách lớp học

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-010000` | Danh sách lớp học | `/danh-sach-lop-hoc` | `ADM-LOP-010000-DK` | QC |

Requirement: `management_requirement/class_management/class_management_requirements.md` — Quản lý danh sách lớp học (tiền tố `M-CM`).

## 2. Luồng

- `FLOW01` Xem Danh sách lớp — `REQ01`, `REQ02`, `REQ03`, `REQ04`, `REQ05`
- `FLOW02` Lọc danh sách và thống kê — `REQ02`, `REQ03`, `REQ04`
- `FLOW03` Lọc Tag học viên — `REQ04`
- `FLOW04` Cuộn ngang và phân trang — `REQ06`
- `FLOW05` Thêm tag cho lớp — `REQ07`, `REQ08`
- `FLOW06` Thêm lịch hẹn cho lớp — `REQ07`, `REQ08`, `REQ09`, `REQ10`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-010002` | Dropdown chọn nhân sự (đang mở) | Dropdown | ADM-LOP-010000 | ADM-LOP-010000 | — | `/danh-sach-lop-hoc?popup=ADM-LOP-010002` | Figma | cao |
| `ADM-LOP-010004` | Ẩn hiện cột | Dropdown | ADM-LOP-010000 | ADM-LOP-010000 | — | `/danh-sach-lop-hoc?popup=ADM-LOP-010004` | Figma | cao |
| `ADM-LOP-010010` | Popup thêm lớp học | Popup | ADM-LOP-010000 | ADM-LOP-010000 | — | `/danh-sach-lop-hoc?popup=ADM-LOP-010010` | Figma | cao |
| `ADM-LOP-010020` | Popup thêm lịch dạy cố định | Popup | ADM-LOP-010000 | ADM-LOP-010000 | — | `/danh-sach-lop-hoc?popup=ADM-LOP-010020` | Figma | cao |
| `ADM-LOP-010040` | Popup thêm tag | Popup | ADM-LOP-010000 | ADM-LOP-010000 | — | `/danh-sach-lop-hoc?popup=ADM-LOP-010040` | Figma | cao |
| `ADM-LOP-010050` | Popup thêm lịch hẹn | Popup | ADM-LOP-010000 | ADM-LOP-010000 | — | `/danh-sach-lop-hoc?popup=ADM-LOP-010050` | Figma | cao |

## 4. Khu vực và item

### `A01` Màn hình Danh sách lớp

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Thẻ thống kê tổng quan

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | doanh-thu | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75289` Thẻ chỉ số | — |  | `TC10` | Khớp | QC |
| `A02.02` | tong-luong-gv | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75300` Thẻ chỉ số | — |  | `TC11` | Khớp | QC |
| `A02.03` | tong-chi-ptl |  |  | — |  | `TC12` | Chưa khớp tự động | QC |
| `A02.04` | so-lop | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75322` Thẻ chỉ số | — |  | `TC16` | Khớp | QC |
| `A02.05` | tong-si-so | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75333` Thẻ chỉ số | — |  | `TC13`, `TC16` | Khớp | QC |
| `A02.06` | ty-le-btvn | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75344` Thẻ chỉ số | — |  | `TC14` | Khớp | QC |
| `A02.07` | di-hoc | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75355` Thẻ chỉ số | — |  | `TC15` | Khớp | QC |
| `A02.08` | si-so-tb | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75356` Thẻ chỉ số | — |  | `TC16` | Khớp | QC |
| `A02.09` | doanh-thu | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75289` Thẻ chỉ số | — |  | `TC10` | Khớp | QC |
| `A02.10` | tong-luong-gv | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75300` Thẻ chỉ số | — |  | `TC11` | Khớp | QC |
| `A02.11` | tong-chi-ptl |  |  | — |  | `TC12` | Chưa khớp tự động | QC |
| `A02.12` | so-lop | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75322` Thẻ chỉ số | — |  | `TC16` | Khớp | QC |
| `A02.13` | tong-si-so | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75333` Thẻ chỉ số | — |  | `TC13`, `TC16` | Khớp | QC |
| `A02.14` | ty-le-btvn | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75344` Thẻ chỉ số | — |  | `TC14` | Khớp | QC |
| `A02.15` | di-hoc | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75355` Thẻ chỉ số | — |  | `TC15` | Khớp | QC |
| `A02.16` | si-so-tb | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75356` Thẻ chỉ số | — |  | `TC16` | Khớp | QC |
| `A02.17` | dang-hoc | `CLass Status`  | `2623:12721` CLass Status | — |  |  | Khớp | QC |
| `A02.18` | hoan-thanh | `CLass Status`  | `2623:12773` CLass Status | — |  | `TC11`, `TC13` | Khớp | QC |
| `A02.19` | du-thinh |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.20` | roi-lop |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.21` | nghi-hoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.22` | chi-xem |  |  | — |  | `TC13` | Chưa khớp tự động | QC |
| `A02.23` | xoa |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.24` | hoc-phi-da-dong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.25` | luong-gv-cua-buoi-da-hoan-thanh |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.26` | kpi-handler-da-xac-nhan |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.27` | si-so | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `I3065:75333;3108:125046` Tiêu đề | — |  | `TC13`, `TC16` | Khớp | QC |
| `A02.28` | ty-le-btvn-cua-lop |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.29` | ty-le-di-hoc-cua-lop |  |  | — |  |  | Chưa khớp tự động | QC |

### `A03` Trạng thái lớp

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | dang-hoc | `CLass Status`  | `2623:12721` CLass Status | — |  | `TC17` | Khớp | QC |
| `A03.02` | hoan-thanh | `CLass Status`  | `2623:12773` CLass Status | — |  | `TC17` | Khớp | QC |
| `A03.03` | huy | `Atom/Chip` Type=Last Update | `I2623:12767;1590:873` Trần Minh Khoa | — |  |  | Khớp | QC |
| `A03.04` | khai-giang | `CLass Status`  | `2623:12987` CLass Status | — |  | `TC17` | Khớp | QC |
| `A03.05` | moi-tao | `CLass Status`  | `2623:12828` CLass Status | — |  | `TC17` | Khớp | QC |
| `A03.06` | tam-dung |  |  | — |  | `TC17` | Chưa khớp tự động | QC |
| `A03.07` | xoa |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.08` | trai-nghiem | `CLass Status`  | `2623:13038` CLass Status | — |  | `TC17` | Khớp | QC |

### `A04` Thông tin hiển thị trên mỗi lớp

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | ma-lop-hoc | `Atom/Tag Solid` Size=16H; `DD/Molecule/Menu Item` Type=Checkbox, State=Disabled, Size=M | `I3634:78208;2015:31501;3634:78294` Mã lớp học; `2623:12725` Atom/Tag Solid | — |  | `TC21` | Khớp | QC |
| `A04.02` | danh-gia | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M; `Progress/Điểm Đánh Giá (A-F)` Size=36x32 | `I3634:78208;2015:31501;3634:78311` Đánh giá; `2623:12729` Progress/Điểm Đánh Giá (A-F) | — |  |  | Khớp | QC |
| `A04.03` | di-hoc | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75355` Thẻ chỉ số | — |  |  | Khớp | QC |
| `A04.04` | btvn | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78345` BTVN | — |  | `TC24` | Khớp | QC |
| `A04.05` | si-so-kpi | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78362` Sĩ số KPI | — |  |  | Khớp | QC |
| `A04.06` | khoa-hoc-tien-do | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78379` Khoá học & tiến độ | — |  |  | Khớp | QC |
| `A04.07` | gv | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78396` GV | — |  |  | Khớp | QC |
| `A04.08` | ptl | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78413` PTL | — |  |  | Khớp | QC |
| `A04.09` | diem-so-bai-kt |  |  | — |  | `TC24` | Chưa khớp tự động | QC |
| `A04.10` | diem-btvn | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78464` Điểm BTVN | — |  |  | Khớp | QC |
| `A04.11` | lich-day | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78481` Lịch dạy | — |  | `TC27` | Khớp | QC |
| `A04.12` | ghi-chu-sp | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78498` Ghi chú SP | — |  | `TC29` | Khớp | QC |
| `A04.13` | ghi-chu-sale | `DD/Molecule/Menu Item` Type=Checkbox, State=Default, Size=M | `I3634:78208;2015:31501;3634:78514` Ghi chú Sale | — |  |  | Khớp | QC |
| `A04.14` | ngay-bat-dau | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M; `DD/Molecule/Trigger` Size=XS, State=Default | `I3634:78208;2015:31501;3634:78531` Ngày bắt đầu; `2623:12587` Dropdown | — |  | `TC30` | Khớp | QC |
| `A04.15` | buoi-gan-nhat | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78548` Buổi gần nhất; `2623:12864` Chưa học | — |  | `TC31` | Khớp | QC |
| `A04.16` | doanh-thu | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75289` Thẻ chỉ số | — |  | `TC26` | Khớp | QC |
| `A04.17` | chi-phi-gv-so-buoi-day |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.18` | chi-phi-ptl | `DD/Molecule/Menu Item` Type=Checkbox, State=Default, Size=M | `I3634:78208;2015:31501;3634:78615` Chi phí PTL | — |  |  | Khớp | QC |
| `A04.19` | sua-btvn | `DD/Molecule/Menu Item` Type=Checkbox, State=Default, Size=M | `I3634:78208;2015:31501;3634:78631` Sửa BTVN | — |  | `TC24` | Khớp | QC |
| `A04.20` | tieu-chuan | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78648` Tiêu chuẩn | — |  |  | Khớp | QC |
| `A04.21` | quy-trinh | `Card Menu v2 (Test)` Type=Chính, State=Default | `I4915:223538;4915:205578` Card Menu v2 (Test) | — |  | `TC25` | Khớp | QC |
| `A04.22` | follow | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78682` Follow | — |  | `TC28` | Khớp | QC |
| `A04.23` | ket-qua | `DD/Molecule/Menu Item` Type=Checkbox, State=Selected, Size=M | `I3634:78208;2015:31501;3634:78699` Kết quả | — |  | `TC23`, `TC24` | Khớp | QC |
| `A04.24` | tag-hv |  |  | — |  |  | Chưa khớp tự động | QC |

### `A05` Bộ lọc và Tag học viên

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `4713:129348` Dropdown · Trung tâm | — |  |  | Khớp | QC |
| `A05.02` | loai-lop | `DD/Molecule/Trigger` Size=XS, State=Default | `2623:12580` Dropdown | — |  | `TC32` | Khớp | QC |
| `A05.03` | trang-thai | `DD/Molecule/Trigger` Size=XS, State=Default | `2623:12581` Dropdown | — |  | `TC34`, `TC42` | Khớp | QC |
| `A05.04` | trinh-do | `DD/Molecule/Trigger` Size=XS, State=Default | `2623:12582` Dropdown | — |  |  | Khớp | QC |
| `A05.05` | hoc-ky | `DD/Molecule/Trigger` Size=XS, State=Default | `2623:12583` Dropdown | — |  |  | Khớp | QC |
| `A05.06` | tag | `DD/Molecule/Trigger` Size=XS, State=Default | `2623:12584` Dropdown | — |  |  | Khớp | QC |
| `A05.07` | phu-trach | `DD/Molecule/Trigger` Size=XS, State=Default | `2623:12585` Dropdown | — |  |  | Khớp | QC |
| `A05.08` | cskh | `DD/Molecule/Trigger` Size=XS, State=Default | `2623:12586` Dropdown | — |  |  | Khớp | QC |
| `A05.09` | bat-dau | `DD/Molecule/Trigger` Size=XS, State=Default | `2623:12587` Dropdown | — |  | `TC35`, `TC36` | Khớp | QC |
| `A05.10` | ket-thuc | `DD/Molecule/Trigger` Size=XS, State=Default | `2623:12588` Dropdown | — |  | `TC35`, `TC36` | Khớp | QC |
| `A05.11` | tag-hv | `Action Icon` Size=18 | `I3634:78208;2015:31501;3634:78293` Kéo sắp xếp | — |  | `TC37`, `TC38`, `TC39`, `TC40` | Khớp | QC |
| `A05.12` | toi-han |  |  | — |  | `TC36` | Chưa khớp tự động | QC |
| `A05.13` | hom-nay | `ICON MENU`  | `I4915:223538;4915:205575;1988:19329` Icon | — |  | `TC36` | Khớp | QC |
| `A05.14` | hom-qua | `Atom/Chip` Type=Last Update | `2623:12755` Atom/Chip | — |  |  | Khớp | QC |
| `A05.15` | hom-nay-va-hom-qua |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.16` | tuan-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.17` | tuan-truoc | `Atom/Chip` Type=Last Update | `I2623:12980;1590:872` 4 ngày trước | — |  |  | Khớp | QC |
| `A05.18` | thang-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.19` | thang-truoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.20` | 3-thang-truoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.21` | nam-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.22` | nam-truoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.23` | tuy-chon |  |  | — |  | `TC36` | Chưa khớp tự động | QC |

### `A06` Menu thao tác tại Mã lớp

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A07` Popup Thêm tag cho lớp

Frame: `ADM-LOP-010010`, `ADM-LOP-010040` (tool đoán:ADM-LOP-010010, ADM-LOP-010040) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A08` Popup Thêm lịch hẹn cho lớp

Frame: `ADM-LOP-010020`, `ADM-LOP-010050` (tool đoán:ADM-LOP-010020, ADM-LOP-010050) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | noi-dung |  |  | — |  | `TC51`, `TC54` | Chưa khớp tự động | QC |
| `A08.02` | thoi-gian |  |  | — |  | `TC51`, `TC54` | Chưa khớp tự động | QC |
| `A08.03` | do-uu-tien |  |  | — |  | `TC51` | Chưa khớp tự động | QC |
| `A08.04` | nguoi-phu-trach |  |  | — |  | `TC51`, `TC55` | Chưa khớp tự động | QC |
| `A08.05` | theo-doi |  |  | — |  | `TC51`, `TC53`, `TC54`, `TC55` | Chưa khớp tự động | QC |
| `A08.06` | ghi-chu |  |  | — |  | `TC51`, `TC54` | Chưa khớp tự động | QC |
| `A08.07` | huy | `Atom/Button` Type=Secondary, Size=Medium | `I2527:167755;2514:153361` Atom/Button | — |  |  | Khớp | QC |
| `A08.08` | xac-nhan | `Atom/Button` Type=Primary, Size=Medium | `I2527:167755;2514:153363` Atom/Button | — |  | `TC53`, `TC55` | Khớp | QC |

### `A09` Toast phản hồi CRUD

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa khớp tự động | QC |
| `A09.02` | thong-tin |  |  | — |  |  | Chưa khớp tự động | QC |
| `A09.03` | canh-bao |  |  | — |  | `TTC02` | Chưa khớp tự động | QC |
| `A09.04` | loi |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-icon-button | `Atom/Icon Button`  | `2623:12578` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | the-chi-so | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75311` Thẻ chỉ số | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | dropdown-an-hien-cot | `DD/Organism/Menu Panel` Type=Multi | `3634:78208` Dropdown · Ẩn hiện cột | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-tag-solid | `Atom/Tag Solid` Size=16H | `2623:12726` Atom/Tag Solid | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | percent | `PERCENT %`  | `2623:12731` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | global-progress-bar | `Global Progress Bar`  | `2623:12738` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | atom-avatar-initials | `Atom/Avatar Initials`  | `2623:12740` Atom/Avatar Initials | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | atom-chip | `Atom/Chip` Type=Date | `2623:12754` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `2623:19289` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | progress-diem-danh-gia-a-f | `Progress/Điểm Đánh Giá (A-F)` Size=36x32 | `2623:12783` Progress/Điểm Đánh Giá (A-F) | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | class-status | `CLass Status`  | `2623:12883` CLass Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | phan-trang |  | `2623:13246` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | account | `ACCOUNT` Size=Default | `2623:13295` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:223538` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Truy cập Danh sách lớp | `Admin`, `Class Handler`, `Support`, `Sale` được xem danh sách, thống kê, filter và phân trang. Mặc định lớp mới tạo hiển thị trước; mỗi trang tối đa 50 lớp. |
| `REQ02` | Thống kê theo filter | Tám thẻ thống kê phải tính theo toàn bộ tập lớp thỏa filter hiện tại, không chỉ trang đang xem. Doanh thu và lương GV là tổng theo từng lớp; Tổng chi PTL chỉ cộng tiền thực tế của KPI Handler Đã xác nhận, loại Mới/Đã hủy/Đã xóa; Tổng sĩ số cộng riêng hai vế của từng lớp với tử số Đang học + Dự thính và mẫu số đủ 7 trạng thái kể cả Xóa; BTVN và Đi học là trung bình hai cấp học viên → lớp → tập lớp, bỏ qua lớp không có giá trị; Sĩ số TB lấy trung bình riêng hai vế sĩ số của các lớp. |
| `REQ03` | Trạng thái lớp | Hỗ trợ đủ `Đang học`, `Hoàn thành`, `Hủy`, `Khai giảng`, `Mới tạo`, `Tạm dừng`, `Xóa`, `Trải nghiệm` với icon tương ứng. `Hủy` và `Xóa` là hai trạng thái riêng. |
| `REQ04` | Filter | Các filter giá trị cho chọn nhiều; trong cùng filter dùng OR, giữa các filter dùng AND. Bắt đầu/Kết thúc lọc theo ngày dự kiến bằng các khoảng thời gian giống tab Ghi chú. Tag HV hỗ trợ AND/OR và cột Tag HV chỉ hiển thị count học viên khớp khi filter có hiệu lực. |
| `REQ05` | Dữ liệu lớp | Các cột phải thuộc đúng lớp và tuân thủ công thức/ý nghĩa đã mô tả, gồm tỷ lệ Đi học/BTVN trung bình từ học viên có dữ liệu, để trống khi không có dữ liệu, Sĩ số KPI, Kết quả, Doanh thu, lương GV của bài học/buổi học đã hoàn thành, điểm, quy trình, Follow và các mốc ngày. |
| `REQ06` | Bảng cuộn ngang và phân trang | Cuộn ngang chỉ thay đổi vùng cột, không thay đổi tập hàng. Phân trang tối đa 50 lớp, giữ filter và chống response cũ ghi đè. |
| `REQ07` | Menu Mã lớp | Chỉ click Mã lớp mở menu `Thêm tag`, `Thêm lịch hẹn`; badge cạnh mã là số lịch hẹn của lớp. Các ô khác không mở menu. |
| `REQ08` | Tag lớp | `Admin`, `Class Handler`, `Support` được tìm kiếm và chọn nhiều tag đã define để thêm cho lớp; không tạo trùng và mọi cập nhật có notification kết quả. `Sale` không được thêm tag. |
| `REQ09` | Lịch hẹn lớp | `Admin`, `Class Handler`, `Support`, `Sale` được tạo/cập nhật và xem lịch hẹn lớp. Người phụ trách/Theo dõi chỉ chọn từ `Admin`, `Class Handler`, `Support`, hỗ trợ nhiều user; tạo thành công cập nhật badge. |
| `REQ10` | Notification | Mọi thao tác CUD trong phạm vi feature phải hiển thị đúng một notification thành công hoặc thất bại sau kết quả validation/backend. Hủy popup và thao tác chỉ đọc không hiển thị notification CUD. |
| `REQ11` | Trung tâm | Danh sách có bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số và phân trang chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header. Thẻ thống kê cũng tính theo bộ lọc Trung tâm. |
| `EX01` | Ngoại lệ | Role không được cấp quyền mở danh sách, xem hoặc thay đổi lịch hẹn → backend từ chối, không trả dữ liệu và không thay đổi trạng thái. |
| `EX02` | Ngoại lệ | Tải danh sách/thống kê thất bại hoặc hết thời gian chờ → hiển thị lỗi và cho phép thử lại; không coi lỗi là dữ liệu rỗng hoặc giá trị `0` hợp lệ. |
| `EX03` | Ngoại lệ | Người dùng đổi filter/trang khi request cũ chưa hoàn tất → chỉ response của điều kiện và trang mới nhất được phép cập nhật bảng/thống kê. |
| `EX04` | Ngoại lệ | `Sale` hoặc role khác gửi request thêm tag lớp → backend từ chối, không thay đổi tag. |
| `EX05` | Ngoại lệ | Thêm tag thất bại, tag không còn tồn tại hoặc quan hệ đã có → không tạo dữ liệu trùng/không cập nhật một phần; hiển thị notification thất bại phù hợp. |
| `EX06` | Ngoại lệ | Lịch hẹn thiếu field bắt buộc theo cấu hình, thời gian không hợp lệ hoặc gán user ngoài ba role cho phép → từ chối tạo/cập nhật và hiển thị lỗi. |
| `EX07` | Ngoại lệ | Tạo/cập nhật lịch hẹn thất bại hoặc request lặp → chỉ xử lý một thao tác logic, không tăng badge sai và hiển thị đúng một notification thất bại. |
| `EX08` | Ngoại lệ | Tùy chọn ngày có Từ ngày sau Đến ngày → từ chối áp dụng, giữ điều kiện cũ và hiển thị lỗi tại filter. |
| `EX09` | Ngoại lệ | Dữ liệu lớp thay đổi làm trang hiện tại không còn hợp lệ → chuyển đến trang hợp lệ gần nhất, giữ filter và không hiển thị trang rỗng giả. |
| `EX10` | Ngoại lệ | Ghi chú dài hoặc chứa xuống dòng → popover hover hiển thị đầy đủ an toàn, không phá vỡ layout hoặc thực thi nội dung như mã. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở Danh sách lớp bằng role hợp lệ | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Từ chối role không có quyền | High |  | EX01 / Ràng buộc quyền | `A01` |  |
| `TC03` | Case 3: Cuộn ngang bảng lớp | High |  | Flow 4 / REQ06 | `A01` |  |
| `TC04` | Case 4: Sắp xếp mặc định lớp mới tạo trước | High |  | Flow 1 / REQ01 | `A01` |  |
| `TC05` | Case 5: Chỉ Mã lớp mở menu thao tác | High |  | REQ07 | `A01` |  |
| `TC59` | Case 59: Backend kiểm tra phạm vi dữ liệu | High |  | Ràng buộc phạm vi | `A01` |  |
| `TC60` | Case 60: Notification CUD thành công | High |  | REQ10 | `A01` |  |
| `TC61` | Case 61: Notification CUD thất bại | High |  | REQ10 | `A01` |  |
| `TC62` | Case 62: Thao tác chỉ đọc không tạo notification CUD | Medium |  | REQ10 | `A01` |  |
| `TC63` | Case 63: Lọc danh sách theo trung tâm | High |  | REQ11 | `A01` |  |
| `TC06` | Case 6: Hiển thị đủ thẻ thống kê | High | Có | Flow 1 / REQ02 | `A02` |  |
| `TC07` | Case 7: Thống kê thay đổi theo filter | High |  | Flow 2 / REQ02 / REQ04 | `A02` |  |
| `TC08` | Case 8: Tải thống kê thất bại | High |  | EX02 / REQ02 | `A02` |  |
| `TC09` | Case 9: Chỉ nhận thống kê của điều kiện mới nhất | High |  | EX03 / REQ02 | `A02` |  |
| `TC10` | Case 10: Cộng Doanh thu của các lớp đã lọc | High |  | REQ02 / REQ05 | `A02` | `A02.01`, `A02.09` |
| `TC11` | Case 11: Cộng lương GV của các buổi đã hoàn thành | High |  | REQ02 / REQ05 | `A02` | `A02.02`, `A02.10`, `A02.18` |
| `TC12` | Case 12: Cộng Tổng chi PTL của các lớp đã lọc | High |  | REQ02 | `A02` | `A02.03`, `A02.11` |
| `TC13` | Case 13: Cộng riêng hai số của Tổng sĩ số | High |  | REQ02 | `A02` | `A02.05`, `A02.13`, `A02.18`, `A02.22`, `A02.27` |
| `TC14` | Case 14: Lấy trung bình Tỷ lệ BTVN của các lớp | High |  | REQ02 / REQ05 | `A02` | `A02.06`, `A02.14` |
| `TC15` | Case 15: Lấy trung bình Tỷ lệ đi học của các lớp | High |  | REQ02 / REQ05 | `A02` | `A02.07`, `A02.15` |
| `TC16` | Case 16: Chia riêng hai số để tính Sĩ số TB | High |  | REQ02 | `A02` | `A02.04`, `A02.05`, `A02.08`, `A02.12`, `A02.13`, `A02.16`, `A02.27` |
| `TC17` | Case 17: Hiển thị đúng tám trạng thái | High |  | REQ03 | `A03` | `A03.01`, `A03.02`, `A03.04`, `A03.05`, `A03.06`, `A03.08` |
| `TC18` | Case 18: Phân biệt Hủy và Xóa | High |  | REQ03 | `A03` |  |
| `TC19` | Case 19: Nhận biết trạng thái không phụ thuộc màu | Medium |  | REQ03 | `A03` |  |
| `TC20` | Case 20: Hiển thị đúng dữ liệu cùng một lớp | High |  | Flow 1 / REQ05 / REQ06 | `A04` |  |
| `TC21` | Case 21: Hiển thị Mã lớp, tag lớp và badge lịch hẹn | High |  | REQ05 / REQ07 | `A04` | `A04.01` |
| `TC22` | Case 22: Hiển thị Sĩ số KPI | High |  | REQ05 | `A04` |  |
| `TC23` | Case 23: Hiển thị Kết quả lớp | High |  | REQ05 | `A04` | `A04.23` |
| `TC24` | Case 24: Hiển thị điểm kiểm tra và BTVN | High |  | REQ05 | `A04` | `A04.04`, `A04.09`, `A04.19`, `A04.23` |
| `TC25` | Case 25: Hiển thị Quy trình theo mục đã tick | High |  | REQ05 | `A04` | `A04.21` |
| `TC26` | Case 26: Hiển thị Doanh thu chỉ đọc | High |  | REQ05 | `A04` | `A04.16` |
| `TC27` | Case 27: Hiển thị Chi phí GV/Số buổi dạy | High |  | REQ05 | `A04` | `A04.11` |
| `TC28` | Case 28: Hiển thị Follow gần nhất | High |  | REQ05 | `A04` | `A04.22` |
| `TC29` | Case 29: Hover ghi chú đúng lớp và đúng loại | High |  | Flow 1 / REQ05 | `A04` | `A04.12` |
| `TC30` | Case 30: Phân biệt ngày dự kiến và thực tế | High |  | REQ05 | `A04` | `A04.14` |
| `TC31` | Case 31: Lớp chưa có buổi học | Medium |  | REQ05 | `A04` | `A04.15` |
| `TC32` | Case 32: Chọn một hoặc nhiều giá trị trong filter | High | Có | Flow 2 / REQ04 | `A05` | `A05.02` |
| `TC33` | Case 33: Kết hợp nhiều filter | High |  | Flow 2 / REQ04 | `A05` |  |
| `TC34` | Case 34: Lọc đủ tám trạng thái | High |  | Flow 2 / REQ03 / REQ04 | `A05` | `A05.03` |
| `TC35` | Case 35: Lọc ngày bắt đầu/kết thúc dự kiến | High |  | Flow 2 / REQ04 | `A05` | `A05.09`, `A05.10` |
| `TC36` | Case 36: Lọc khoảng thời gian định sẵn và Tùy chọn | High |  | Flow 2 / REQ04 | `A05` | `A05.09`, `A05.10`, `A05.12`, `A05.13`, `A05.23` |
| `TC37` | Case 37: Filter Tag HV theo OR | High |  | Flow 3 / REQ04 | `A05` | `A05.11` |
| `TC38` | Case 38: Filter Tag HV theo AND | High |  | Flow 3 / REQ04 | `A05` | `A05.11` |
| `TC39` | Case 39: Chỉ hiển thị count Tag HV khi đang lọc | High |  | REQ04 | `A05` | `A05.11` |
| `TC40` | Case 40: Phân trang 50 lớp | High | Có | Flow 4 / REQ06 | `A05` | `A05.11` |
| `TC41` | Case 41: Chỉ nhận response filter/trang mới nhất | High |  | EX03 / REQ04 / REQ06 | `A05` |  |
| `TC42` | Case 42: Trạng thái không có dữ liệu và lỗi | High |  | EX02 / REQ01 | `A05` | `A05.03` |
| `TC43` | Case 43: Mở menu đúng lớp | High |  | Flow 5 / REQ07 | `A06` |  |
| `TC44` | Case 44: Đóng menu thao tác | Medium |  | REQ07 | `A06` |  |
| `TC45` | Case 45: Mở popup Thêm tag đúng lớp | High |  | Flow 5 / REQ08 | `A07` |  |
| `TC46` | Case 46: Tìm kiếm và chọn nhiều tag | High |  | Flow 5 / REQ08 | `A07` |  |
| `TC47` | Case 47: Xác nhận thêm tag thành công | High | Có | Flow 5 / REQ08 / REQ10 | `A07` |  |
| `TC48` | Case 48: Hủy thêm tag | Medium |  | REQ08 | `A07` |  |
| `TC49` | Case 49: Sale không được thêm tag | High |  | EX04 / Ràng buộc quyền | `A07` |  |
| `TC50` | Case 50: Thêm tag thất bại | High |  | EX05 / REQ08 / REQ10 | `A07` |  |
| `TC51` | Case 51: Mở popup Thêm lịch hẹn đúng lớp | High |  | Flow 6 / REQ09 | `A08` | `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.06` |
| `TC52` | Case 52: Danh sách Người phụ trách và Theo dõi | High |  | Flow 6 / REQ09 | `A08` |  |
| `TC53` | Case 53: Tạo lịch hẹn thành công | High | Có | Flow 6 / REQ09 / REQ10 | `A08` | `A08.05`, `A08.08` |
| `TC54` | Case 54: Người có role hợp lệ xem lịch hẹn lớp | High |  | REQ09 / Ràng buộc quyền | `A08` | `A08.01`, `A08.02`, `A08.05`, `A08.06` |
| `TC55` | Case 55: Validation lịch hẹn | High |  | EX06 / REQ09 / REQ10 | `A08` | `A08.04`, `A08.05`, `A08.08` |
| `TC56` | Case 56: Hủy thêm lịch hẹn | Medium |  | REQ09 | `A08` |  |
| `TC57` | Case 57: Tạo/cập nhật lịch hẹn thất bại | High |  | EX07 / REQ09 / REQ10 | `A08` |  |
| `TC58` | Case 58: Từ chối role khác thao tác lịch hẹn | High |  | EX01 / Ràng buộc quyền | `A08` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A09` | `A09.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A09` | `A09.01`, `A09.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A09` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A09` | `A09.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (36): `A02.03`, `A02.11`, `A02.19`, `A02.20`, `A02.21`, `A02.22`, `A02.23`, `A02.24`, `A02.25`, `A02.26`, `A02.28`, `A02.29`, `A03.06`, `A03.07`, `A04.09`, `A04.17`, `A04.24`, `A05.12`, `A05.15`, `A05.16`, `A05.18`, `A05.19`, `A05.20`, `A05.21`, `A05.22`, `A05.23`, `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.06`, `A09.01`, `A09.02`, `A09.03`, `A09.04`
- Frame Figma chưa có requirement (6): `ADM-LOP-010002`, `ADM-LOP-010004`, `ADM-LOP-010010`, `ADM-LOP-010020`, `ADM-LOP-010040`, `ADM-LOP-010050`
- Thiếu prototype link đi vào (4): `ADM-LOP-010010`, `ADM-LOP-010020`, `ADM-LOP-010040`, `ADM-LOP-010050`
- Testcase không trỏ REQ (5): `TC59`, `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (3): `EX08`, `EX09`, `EX10`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
