# [Admin] Quản lý danh sách giáo viên

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-GV-010000` | Danh sách giáo viên | `/danh-sach-giao-vien` | `ADM-GV-010000-DK` | QC |

Requirement: `management_requirement/teacher_management/teacher_management_requirements.md` — [Admin] Quản lý danh sách giáo viên (tiền tố `M-TM`).

## 2. Luồng

- `FLOW01` Xem danh sách giáo viên — `REQ01`
- `FLOW02` Tìm kiếm, lọc và phân trang — `REQ02`
- `FLOW03` Tổng hợp lớp và tỷ lệ học tập — `REQ03`
- `FLOW04` Xem thông tin hover và sao chép ghi chú — `REQ04`
- `FLOW05` Mở chi tiết giáo viên — `REQ05`
- `FLOW06` Thêm mới giáo viên — `REQ06`
- `FLOW07` Thêm lịch hẹn, thêm tag và xem lịch hẹn từ danh sách — `REQ09`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-GV-010001` | Hover menu thao tác | Dropdown | ADM-GV-010000 | ADM-GV-010000 | — | `/danh-sach-giao-vien?popup=ADM-GV-010001` | Figma | cao |
| `ADM-GV-010010` | Popup tìm kiếm nâng cao | Popup | ADM-GV-010000 | ADM-GV-010000 | — | `/danh-sach-giao-vien?popup=ADM-GV-010010` | Figma | cao |
| `ADM-GV-010020` | Popup thêm giáo viên | Popup | ADM-GV-010000 | ADM-GV-010000 | — | `/danh-sach-giao-vien?popup=ADM-GV-010020` | Figma | cao |
| `ADM-GV-010030` | Popup thêm tag | Popup | ADM-GV-010000 | ADM-GV-010000 | — | `/danh-sach-giao-vien?popup=ADM-GV-010030` | Figma | cao |
| `ADM-GV-010040` | Popup thêm lịch hẹn | Popup | ADM-GV-010000 | ADM-GV-010000 | — | `/danh-sach-giao-vien?popup=ADM-GV-010040` | Figma | cao |
| `ADM-GV-010042` | Đang mở | Dropdown | ADM-GV-010040 | ADM-GV-010000 | — | `/danh-sach-giao-vien?popup=ADM-GV-010042` | Figma | cao |
| `ADM-GV-010050` | Popup danh sách lịch hẹn | Popup | ADM-GV-010000 | ADM-GV-010000 | — | `/danh-sach-giao-vien?popup=ADM-GV-010050` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Danh sách giáo viên

Frame: `ADM-GV-010000` (tool đoán:ADM-GV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | trang-thai | `DD/Molecule/Trigger` Size=XS, State=Active | `3210:28297` Dropdown | — |  | `TC02`, `TC04`, `TC05`, `TC06`, `TC07`, `TC34`, `TC29`, `TC30`, `TC35`, `TC08`, `TC12`, `TC13`, `TC14`, `TC15` | Khớp | QC |
| `A01.02` | giao-vien | `Card Menu v2 (Test)` Type=Con, State=Select | `I4915:236867;4899:195680` Card Menu v2 (Test) | — |  | `TC01`, `TC45`, `TC02`, `TC04`, `TC05`, `TC07`, `TC31`, `TC33`, `TC25`, `TC27`, `TC28`, `TC29`, `TC30`, `TC35`, `TC03`, `TC11`, `TC13`, `TC14`, `TC15`, `TC16` | Khớp | QC |
| `A01.03` | ma-giao-vien |  | `3210:28306` Mã giáo viên | — |  |  | Khớp | QC |
| `A01.04` | so-lop |  | `3210:28308` Số lớp | — |  | `TC11`, `TC12` | Khớp | QC |
| `A01.05` | dang-day |  | `3210:28310` Đang dạy | — |  | `TC11`, `TC12` | Khớp | QC |
| `A01.06` | len-ky |  | `3210:28312` Lên kỳ | — | governed-by `REQ03` | `TC15` | Khớp | QC |
| `A01.07` | di-hoc |  | `3210:28314` Đi học | — | governed-by `REQ03` | `TC13` | Khớp | QC |
| `A01.08` | btvn |  | `3210:28316` BTVN | — | governed-by `REQ03` | `TC14` | Khớp | QC |
| `A01.09` | danh-gia |  | `3210:28318` Đánh giá | — |  |  | Khớp | QC |
| `A01.10` | lich-dang-ky |  | `3210:28320` Lịch Đăng ký | — |  | `TC28`, `TC30` | Khớp | QC |
| `A01.11` | lich-day |  | `3210:28322` Lịch dạy | — |  | `TC28`, `TC29`, `TC11`, `TC12` | Khớp | QC |
| `A01.12` | ghi-chu | `Card Menu v2 (Test)` Type=Con, State=Default | `I4915:236867;4899:195676` Card Menu v2 (Test) | — |  |  | Khớp | QC |
| `A01.13` | chi-tiet |  | `3210:28400` Ghi chú chi tiết | — |  | `TC03` | Khớp | QC |

### `A02` Chi tiết lịch đăng ký khi hover

Frame: `ADM-GV-010000` (tool đoán:ADM-GV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tong-quan |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.02` | so-ngay |  |  | — |  | `TC18` | Chưa khớp tự động | QC |
| `A02.03` | so-ca |  |  | — |  | `TC18` | Chưa khớp tự động | QC |
| `A02.04` | popover |  | `3210:28472` Chi tiết lịch đăng ký | — |  | `TC19` | Khớp | QC |
| `A02.05` | thu-tu |  |  | — |  | `TC18` | Chưa khớp tự động | QC |
| `A02.06` | chua-dang-ky |  | `3210:28368` Chưa đăng ký lịch; `3210:28368` Chưa đăng ký lịch | — |  | `TC19` | Khớp | QC |

### `A03` Chi tiết lớp đang dạy khi hover

Frame: `ADM-GV-010000` (tool đoán:ADM-GV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | badge-so-lop |  | `3210:28310` Đang dạy | — |  |  | Khớp | QC |
| `A03.02` | khoi-lop-trong-popover |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.03` | so-buoi | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Inactive | `3210:28333` Atom/Number Badge | — |  |  | Khớp | QC |
| `A03.04` | lich-co-dinh |  | `3210:28475` T2: | — |  |  | Khớp | QC |

### `A04` Ghi chú giáo viên

Frame: `ADM-GV-010000` (tool đoán:ADM-GV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Menu thao tác trên dòng: Thêm lịch hẹn, Thêm tag và Danh sách lịch hẹn

Frame: `ADM-GV-010001`, `ADM-GV-010030`, `ADM-GV-010040`, `ADM-GV-010050` (tool đoán:ADM-GV-010001, ADM-GV-010030, ADM-GV-010040, ADM-GV-010050) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | menu-thao-tac | `DD/Molecule/Menu Item` Type=Default, State=Default, Size=M | `1657:12040` ADM-GV-010001 — Danh sách giáo viên / Hover menu thao tác; `I3210:31964;2015:31836;3210:31958` Chỉnh sửa | — |  |  | Khớp | QC |
| `A05.02` | popup-them-lich-hen | `DD/Molecule/Trigger` Size=XS, State=Default | `4713:129455` Dropdown · Trung tâm | — |  |  | Khớp | QC |
| `A05.03` | popup-them-tag | `Atom/Input` State=Search Advanced, Kiểu=Chuẩn | `I1739:33369;1739:32346` Tìm Kiếm Nâng Cao | — |  |  | Khớp | QC |
| `A05.04` | popup-danh-sach-lich-hen |  |  | — |  | `TC50` | Chưa khớp tự động | QC |

### `A06` Điều hướng đến chi tiết giáo viên

Frame: `ADM-GV-010000` (tool đoán:ADM-GV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A07` Thêm mới giáo viên

Frame: `ADM-GV-010020` (tool đoán:ADM-GV-010020) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | ho-va-ten |  |  | — |  | `TC36` | Chưa sync | QC |
| `A07.02` | gioi-tinh |  |  | — |  | `TC36`, `TC37`, `TC38`, `TC39` | Chưa sync | QC |
| `A07.03` | ngay-sinh |  |  | — |  | `TC36`, `TC37`, `TC38`, `TC39` | Chưa sync | QC |
| `A07.04` | so-dien-thoai |  |  | — |  | `TC36`, `TC37`, `TC38`, `TC39`, `TC43` | Chưa sync | QC |
| `A07.05` | vai-tro |  |  | — |  | `TC36`, `TC37` | Chưa sync | QC |
| `A07.06` | gmail |  |  | — |  | `TC36` | Chưa sync | QC |
| `A07.07` | mat-khau |  |  | — |  | `TC36`, `TC42` | Chưa sync | QC |
| `A07.08` | trung-tam |  |  | — |  | `TC36`, `TC46` | Chưa sync | QC |
| `A07.09` | code |  |  | — |  | `TC36`, `TC37`, `TC41` | Chưa sync | QC |
| `A07.10` | huy |  |  | — |  |  | Chưa sync | QC |
| `A07.11` | them |  |  | — |  | `TC36`, `TC37` | Chưa sync | QC |

### `A08` Toast phản hồi CRUD

Frame: `ADM-GV-010000` (tool đoán:ADM-GV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa khớp tự động | QC |
| `A08.02` | thong-tin |  |  | — |  |  | Chưa khớp tự động | QC |
| `A08.03` | canh-bao |  |  | — |  | `TTC02` | Chưa khớp tự động | QC |
| `A08.04` | loi |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` Header

Frame: `ADM-GV-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `2223:84131` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

### `F02` (ngoài Body)

Frame: `ADM-GV-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:236867` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | atom-icon-button | `Atom/Icon Button`  | `3210:28292` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | menu-panel | `DD/Organism/Menu Panel` Type=Multi | `3210:28294` Menu Panel | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | atom-input | `Atom/Input` State=Search Advanced, Kiểu=Chuẩn | `3210:28295` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F02.05` | dropdown-trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `4713:129420` Dropdown · Trung tâm | — |  |  | Chỉ có trên Figma | Figma |
| `F02.06` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `3210:28298` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F02.07` | teaching-status | `Teaching status`  | `3210:28328` Teaching status | — |  |  | Chỉ có trên Figma | Figma |
| `F02.08` | o-dinh-danh |  | `3210:28329` Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `F02.09` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Inactive | `3210:28335` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.10` | percent | `PERCENT %`  | `3210:28337` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F02.11` | progress-diem-danh-gia-a-f | `Progress/Điểm Đánh Giá (A-F)` Size=36x32 | `3210:28343` Progress/Điểm Đánh Giá (A-F) | — |  |  | Chỉ có trên Figma | Figma |
| `F02.12` | lich-giao-vien-dang-ky | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `3210:28345` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  |  | Chỉ có trên Figma | Figma |
| `F02.13` | ghi-chu | `GHI CHÚ`  | `3210:28348` GHI CHÚ | — |  |  | Chỉ có trên Figma | Figma |
| `F02.14` | arrow-detail | `ARROW DETAIL`  | `3210:28349` ARROW DETAIL | — |  |  | Chỉ có trên Figma | Figma |
| `F02.15` | mouse-click |  | `3210:28373` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F02.16` | lop-hoc | `Lớp học`  | `3210:28394` Lớp học | — |  |  | Chỉ có trên Figma | Figma |
| `F02.17` | phan-trang |  | `3210:28659` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Hiển thị danh sách giáo viên | `Admin` xem danh sách theo phạm vi dữ liệu được cấp. Mỗi dòng hiển thị Trạng thái, Giáo viên (avatar, tag, tên, email, badge lịch hẹn chưa hoàn tất), Mã giáo viên, Số lớp, Đang dạy, Lên kỳ, Đi học, BTVN, Đánh giá, Lịch đăng ký, Lịch dạy (icon + số lớp Đang học), Ghi chú và điều hướng chi tiết. Cột đầu dòng hiển thị đúng một trong bốn trạng thái `Training`, `Thử việc`, `Chính thức`, `Nghỉ việc`; không có trạng thái Testing. |
| `REQ02` | Tìm kiếm, lọc và phân trang | Từ khóa chỉ tìm theo tên giáo viên; tự tìm kiếm sau 2 giây kể từ lần nhập cuối hoặc tìm ngay khi nhấn `Enter`. `Enter` phải hủy lần debounce đang chờ để không gửi trùng request. Bộ lọc `Trạng Thái` và `Tag` đều hiển thị dạng checkbox, có `Tất cả` và cho tick một hoặc nhiều giá trị. Trong cùng bộ lọc áp dụng OR; giữa tên, Trạng thái và Tag áp dụng AND. Thay đổi điều kiện đưa danh sách về trang đầu; mỗi trang tối đa 10 giáo viên và giữ nguyên điều kiện khi chuyển trang. |
| `REQ03` | Tổng hợp lớp và chỉ số | `Số lớp` đếm lớp duy nhất mà giáo viên được thêm; `Đang dạy` và `Lịch dạy` chỉ dùng lớp `Đang học`. `Đi học`, `BTVN`, `Lên kỳ` được tổng hợp từ toàn bộ lớp của giáo viên có trạng thái `Đang học` hoặc `Hoàn thành`, sau đó tính theo công thức tại mục 2.4. Lớp ở trạng thái khác không tham gia tính ba chỉ số. Không tự tính `Đánh giá` từ ba tỷ lệ khi chưa có công thức được duyệt. |
| `REQ04` | Lịch, lớp và ghi chú | Lịch đăng ký hiển thị `N ngày (M ca)` (1 ô buổi = 1 ca, tối đa 21) và chi tiết buổi kèm khung giờ theo thứ; icon Lịch dạy kèm badge số lớp Đang học mở popover `Chi tiết Lớp` gộp mọi lớp Đang học với `[đã học/tổng buổi]` và lịch theo thứ; ghi chú chỉ đọc tại danh sách, được xem đầy đủ khi hover và sao chép nguyên văn khi click. |
| `REQ05` | Điều hướng và tính nhất quán | Nút cuối dòng mở đúng chi tiết giáo viên. Dữ liệu hover, kết quả request và nội dung clipboard phải gắn với đúng định danh giáo viên/lớp, không tái sử dụng dữ liệu cũ cho đối tượng khác. |
| `REQ06` | Thêm mới giáo viên | Nút dấu `+` mở popup `Thêm Giáo Viên`. Họ và tên, Vai trò, Gmail, Mật khẩu, Trung tâm và Code là bắt buộc; Giới tính, Ngày sinh, Số điện thoại không bắt buộc. Popup không có Trạng thái và Ghi chú; giáo viên mới nhận trạng thái `Training`, chỉnh sửa tại Chi tiết giáo viên. Nếu có nhập, Số điện thoại phải là chuỗi đúng 10 chữ số và bắt đầu bằng `0`. Vai trò cố định là `Teacher`. Code chỉ đọc, do backend tự sinh duy nhất theo số thứ tự tăng dần và không nhận giá trị ghi đè từ client. Class Handler/Support chỉ được gọi popup dùng chung từ ngữ cảnh Chi tiết lớp theo requirement Tab Giáo viên; không mặc nhiên có quyền màn quản lý giáo viên toàn cục. Tạo thành công tải lại ngữ cảnh gọi và hiển thị notification; tạo thất bại không sinh bản ghi một phần hoặc làm lộ mật khẩu. |
| `REQ07` | Notification khi thêm mới | Thao tác tạo giáo viên phải hiển thị notification kết quả. Thành công chỉ hiển thị notification sau khi backend xác nhận đã tạo; validation hoặc xử lý thất bại hiển thị notification thất bại. Mỗi request chỉ hiển thị một notification kết quả và không đưa mật khẩu, stack trace hoặc thông tin kỹ thuật nhạy cảm vào nội dung. |
| `REQ08` | Trung tâm | Danh sách có bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số và phân trang chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header. Khi tạo mới bắt buộc chọn `Trung tâm`; bản ghi được lưu thuộc trung tâm đã chọn. Backend kiểm tra lại trung tâm khi lưu, không chỉ dựa vào UI. Bộ lọc liệt kê tên trung tâm. |
| `REQ09` | Lịch hẹn và tag từ danh sách | Click tên giáo viên mở menu `Thêm lịch hẹn`, `Thêm tag`. Thêm lịch hẹn dùng popup và quy tắc của requirement Lịch hẹn với Đối tượng là giáo viên đang chọn, Trung Tâm điền sẵn. Thêm tag chọn nhiều tag theo nhóm của Define Tag và lưu toàn bộ tập tag mới theo định danh giáo viên. Badge lịch hẹn đếm lịch hẹn chưa hoàn tất; hover mở popup `Danh sách lịch hẹn` chỉ đọc. Chỉ `Admin` có các thao tác này; backend kiểm tra quyền và phạm vi. |
| `EX01` | Ngoại lệ | Người dùng không có quyền mở menu, URL hoặc gửi request trực tiếp → hệ thống từ chối truy cập, không trả dữ liệu giáo viên và không thay đổi dữ liệu. |
| `EX02` | Ngoại lệ | Tải danh sách thất bại hoặc hết thời gian chờ → hiển thị lỗi và khả năng thử lại; không hiển thị lỗi như danh sách rỗng. |
| `EX03` | Ngoại lệ | Không có giáo viên phù hợp với điều kiện hiện tại → hiển thị trạng thái không có dữ liệu, giữ từ khóa và bộ lọc để người dùng chỉnh sửa. |
| `EX04` | Ngoại lệ | Một học viên không có mẫu số điểm danh hoặc bài tập → hệ thống không chia cho 0, không hiển thị `NaN`/vô cực và xử lý theo quy tắc được xác nhận tại mục 3. |
| `EX05` | Ngoại lệ | Không tải được chi tiết lịch đăng ký hoặc chi tiết lớp → không hiển thị dữ liệu đã tải của giáo viên/lớp khác thay thế. |
| `EX06` | Ngoại lệ | Sao chép clipboard thất bại → ghi chú đã lưu không thay đổi và không sao chép nội dung của dòng khác. |
| `EX07` | Ngoại lệ | Người dùng thay đổi điều kiện khi request cũ chưa hoàn tất → chỉ kết quả của điều kiện mới nhất được phép cập nhật danh sách. |
| `EX08` | Ngoại lệ | Giáo viên bị xóa hoặc không còn thuộc phạm vi trước khi mở chi tiết → không mở dữ liệu của giáo viên khác và hiển thị lỗi phù hợp. |
| `EX09` | Ngoại lệ | Không có khung giờ hoặc có ít nhất một dòng thiếu ngày, thiếu giờ bắt đầu, thiếu giờ kết thúc hay giờ kết thúc không lớn hơn giờ bắt đầu → không gửi tìm kiếm nâng cao, giữ dữ liệu đã nhập và hiển thị lỗi validation tại dòng/trường liên quan. |
| `EX10` | Ngoại lệ | Không có giáo viên có lịch đăng ký phù hợp với toàn bộ khung giờ hoặc tất cả giáo viên phù hợp đều bị loại do có lịch dạy khi tick `Kiểm tra ca làm việc của giáo viên` → hiển thị trạng thái không có dữ liệu và giữ nguyên điều kiện nâng cao để chỉnh sửa. |
| `EX11` | Ngoại lệ | Thiếu trường bắt buộc; Họ tên, Gmail, Mật khẩu không hợp lệ; Giới tính, Ngày sinh có nhập nhưng không hợp lệ; hoặc Số điện thoại có nhập nhưng không gồm đúng 10 chữ số/bắt đầu bằng `0` → không tạo giáo viên, hiển thị lỗi tại trường liên quan và giữ dữ liệu đã nhập. Trạng thái không nhận từ client khi tạo mới; giáo viên mới luôn là `Training`. |
| `EX12` | Ngoại lệ | Có nhiều request tạo giáo viên đồng thời → backend phải sinh code atomically, không cho phép hai giáo viên có cùng code và không tin cậy code do client cung cấp. |
| `EX13` | Ngoại lệ | Request tạo giáo viên thất bại hoặc bị gửi lặp → không tạo bản ghi một phần/trùng lặp, giữ popup cùng dữ liệu đã nhập, hiển thị đúng một notification thất bại và cho phép thử lại an toàn. |
| `EX14` | Ngoại lệ | Gán tag hoặc tạo lịch hẹn từ danh sách thất bại → tập tag / lịch hẹn của giáo viên không đổi, popup giữ dữ liệu để thử lại, Toast `Có Lỗi Xảy Ra`. |
| `EX15` | Ngoại lệ | Giáo viên không còn thuộc phạm vi hoặc không tồn tại khi xác nhận gán tag / tạo lịch hẹn → backend từ chối, không gán cho giáo viên khác. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Hiển thị danh sách giáo viên | High | Có | Flow 1 / REQ01 | `A01` | `A01.02` |
| `TC45` | Case 45: Lọc danh sách theo trung tâm | High |  | REQ08 | `A01` | `A01.02` |
| `TC02` | Case 2: Hiển thị đúng trạng thái giáo viên | High |  | REQ01 | `A01` | `A01.01`, `A01.02` |
| `TC04` | Case 4: Lọc theo một trạng thái | High |  | Flow 2 / REQ02 | `A01` | `A01.01`, `A01.02` |
| `TC05` | Case 5: Lọc theo nhiều trạng thái | High |  | Flow 2 / REQ02 | `A01` | `A01.01`, `A01.02` |
| `TC06` | Case 6: Chọn Tất cả trạng thái | Medium |  | Flow 2 / REQ02 | `A01` | `A01.01` |
| `TC07` | Case 7: Kết hợp điều kiện và giữ khi chuyển trang | High |  | Flow 2 / REQ02 | `A01` | `A01.01`, `A01.02` |
| `TC31` | Case 31: Tự động tìm theo tên sau 2 giây | High |  | Flow 2 / REQ02 | `A01` | `A01.02` |
| `TC32` | Case 32: Nhấn Enter để tìm ngay | High |  | Flow 2 / REQ02 | `A01` |  |
| `TC33` | Case 33: Lọc theo một hoặc nhiều tag | High |  | Flow 2 / REQ02 | `A01` | `A01.02` |
| `TC34` | Case 34: Chọn Tất cả tag | Medium |  | Flow 2 / REQ02 | `A01` | `A01.01` |
| `TC25` | Case 25: Hiển thị đúng UI tìm kiếm nâng cao mới | High |  | Flow 2A / REQ02A | `A01` | `A01.02` |
| `TC26` | Case 26: Thêm, chỉnh sửa và xóa nhiều khung giờ | High |  | Flow 2A / REQ02A | `A01` |  |
| `TC27` | Case 27: Validation danh sách khung giờ | High |  | EX09 / REQ02A | `A01` | `A01.02` |
| `TC28` | Case 28: Tìm tất cả giáo viên đã đăng ký khi không kiểm tra ca làm việc | High |  | Flow 2A / REQ02A | `A01` | `A01.02`, `A01.10`, `A01.11` |
| `TC29` | Case 29: Chỉ tìm giáo viên chưa có lịch dạy khi kiểm tra ca làm việc | High |  | Flow 2A / REQ02A / EX10 | `A01` | `A01.01`, `A01.02`, `A01.11` |
| `TC30` | Case 30: Kết hợp và giữ điều kiện tìm kiếm nâng cao | High |  | Flow 2A / REQ02A | `A01` | `A01.01`, `A01.02`, `A01.10` |
| `TC35` | Case 35: Banner kết quả và xoá điều kiện nâng cao | High |  | Flow 2A / REQ02A | `A01` | `A01.01`, `A01.02` |
| `TC08` | Case 8: Không có kết quả phù hợp | Medium |  | EX03 / REQ02 | `A01` | `A01.01` |
| `TC09` | Case 9: Tải danh sách thất bại | High |  | EX02 | `A01` |  |
| `TC10` | Case 10: Chỉ nhận kết quả của điều kiện mới nhất | High |  | EX07 / REQ02 | `A01` |  |
| `TC03` | Case 3: Từ chối role không có quyền tại màn Quản lý giáo viên | High |  | EX01 / Ràng buộc quyền | `A01` | `A01.02`, `A01.13` |
| `TC11` | Case 11: Không đếm trùng lớp | High |  | Flow 3 / REQ03 | `A01` | `A01.02`, `A01.04`, `A01.05`, `A01.11` |
| `TC12` | Case 12: Tính lớp đang dạy | High |  | Flow 3 / REQ03 | `A01` | `A01.01`, `A01.04`, `A01.05`, `A01.11` |
| `TC13` | Case 13: Tính tỷ lệ Đi học | High |  | Flow 3 / REQ03 | `A01` | `A01.01`, `A01.02`, `A01.07` |
| `TC14` | Case 14: Tính tỷ lệ BTVN | High |  | Flow 3 / REQ03 | `A01` | `A01.01`, `A01.02`, `A01.08` |
| `TC15` | Case 15: Tính tỷ lệ Lên kỳ | High |  | Flow 3 / REQ03 | `A01` | `A01.01`, `A01.02`, `A01.06` |
| `TC16` | Case 16: Không tự tính Đánh giá | High |  | REQ03 | `A01` | `A01.02` |
| `TC17` | Case 17: Không chia cho 0 | High |  | EX04 / REQ03 | `A01` |  |
| `TC18` | Case 18: Xem chi tiết lịch đăng ký | High |  | Flow 4 / REQ04 | `A02` | `A02.02`, `A02.03`, `A02.05` |
| `TC19` | Case 19: Giáo viên chưa đăng ký lịch | Medium |  | REQ04 | `A02` | `A02.04`, `A02.06` |
| `TC20` | Case 20: Xem chi tiết các lớp đang dạy | High |  | Flow 4 / REQ04 | `A03` |  |
| `TC20a` | Case 20a: Không có lớp đang dạy | Medium |  | REQ04 | `A03` |  |
| `TC21` | Case 21: Xem và sao chép ghi chú | High |  | Flow 4 / REQ04 | `A04` |  |
| `TC22` | Case 22: Giáo viên không có ghi chú | Medium |  | REQ04 | `A04` |  |
| `TC47` | Case 47: Mở menu thao tác | High |  | Flow 7 / REQ09 | `A05` |  |
| `TC48` | Case 48: Thêm lịch hẹn cho giáo viên | High | Có | Flow 7 / REQ09 | `A05` |  |
| `TC49` | Case 49: Gán và bỏ tag | High | Có | Flow 7 / REQ09 | `A05` |  |
| `TC50` | Case 50: Xem danh sách lịch hẹn | Medium |  | Flow 7 / REQ09 | `A05` | `A05.04` |
| `TC51` | Case 51: Huỷ popup tag / lịch hẹn | Low |  | REQ09 | `A05` |  |
| `TC23` | Case 23: Mở đúng chi tiết giáo viên | High | Có | Flow 5 / REQ05 | `A06` |  |
| `TC24` | Case 24: Giáo viên không còn tồn tại khi mở chi tiết | High |  | EX08 / REQ05 | `A06` |  |
| `TC36` | Case 36: Mở popup thêm giáo viên | High |  | Flow 6 / REQ06 | `A07` | `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A07.06`, `A07.07`, `A07.08`, `A07.09`, `A07.11` |
| `TC37` | Case 37: Tạo giáo viên thành công và tự sinh code tăng dần | High | Có | Flow 6 / REQ06 / REQ07 | `A07` | `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A07.09`, `A07.11` |
| `TC38` | Case 38: Cho phép bỏ trống giới tính, ngày sinh, số điện thoại | High |  | Flow 6 / REQ06 | `A07` | `A07.02`, `A07.03`, `A07.04` |
| `TC39` | Case 39: Validation các trường bắt buộc | High |  | EX11 / REQ06 | `A07` | `A07.02`, `A07.03`, `A07.04` |
| `TC40` | Case 40: Hủy thêm giáo viên | Medium |  | Flow 6 / REQ06 | `A07` |  |
| `TC41` | Case 41: Sinh code duy nhất khi tạo đồng thời | High |  | EX12 / REQ06 | `A07` | `A07.09` |
| `TC42` | Case 42: Tạo giáo viên thất bại hoặc xác nhận lặp | High |  | EX13 / REQ06 / REQ07 | `A07` | `A07.07` |
| `TC43` | Case 43: Validation số điện thoại Việt Nam | High |  | EX11 / REQ06 | `A07` | `A07.04` |
| `TC44` | Case 44: Không nhận trạng thái từ client khi tạo | High |  | EX11 / REQ06 | `A07` |  |
| `TC46` | Case 46: Bắt buộc chọn trung tâm khi tạo | High |  | REQ08 | `A07` | `A07.08` |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A08` | `A08.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A08` | `A08.01`, `A08.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A08` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A08` | `A08.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (10): `A02.01`, `A02.02`, `A02.03`, `A02.05`, `A03.02`, `A05.04`, `A08.01`, `A08.02`, `A08.03`, `A08.04`
- Chưa sync (11): `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A07.06`, `A07.07`, `A07.08`, `A07.09`, `A07.10`, `A07.11`
- Frame Figma chưa có requirement (7): `ADM-GV-010001`, `ADM-GV-010010`, `ADM-GV-010020`, `ADM-GV-010030`, `ADM-GV-010040`, `ADM-GV-010042`, `ADM-GV-010050`
- Thiếu prototype link đi vào (5): `ADM-GV-010010`, `ADM-GV-010020`, `ADM-GV-010030`, `ADM-GV-010040`, `ADM-GV-010050`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (4): `EX05`, `EX06`, `EX14`, `EX15`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
