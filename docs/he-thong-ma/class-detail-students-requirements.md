# Chi tiết lớp học — Tab Học viên

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-040200` | Lớp học / Cài đặt / Học viên | `/lop-hoc/cai-dat/hoc-vien` | `ADM-LOP-040200-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_students_requirements.md` — Chi tiết lớp học — Tab Học viên (tiền tố `M-CDS3`).

## 2. Luồng

- `FLOW01` Xem danh sách và tải thêm — `REQ01`, `REQ02`, `REQ03`, `REQ04`
- `FLOW02` Thêm học viên đã có — `REQ05`, `REQ06`
- `FLOW03` Tạo học viên mới từ lớp — `REQ07`
- `FLOW04` Sửa và xem lịch sử ghi chú — `REQ08`
- `FLOW05` Đổi và xem lịch sử trạng thái — `REQ09`, `REQ10`
- `FLOW06` Thêm học phí — `REQ11`, `REQ12`
- `FLOW07` Menu thao tác theo tên học viên — `REQ13`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-040210` | Popup lịch sử ghi chú | Popup | ADM-LOP-040200 | ADM-LOP-040200 | — | `/lop-hoc/cai-dat/hoc-vien?popup=ADM-LOP-040210` | Figma | trung bình |
| `ADM-LOP-040220` | Popup lịch sử trạng thái | Popup | ADM-LOP-040200 | ADM-LOP-040200 | — | `/lop-hoc/cai-dat/hoc-vien?popup=ADM-LOP-040220` | Figma | cao |
| `ADM-LOP-040230` | Popup thêm học phí | Popup | ADM-LOP-040200 | ADM-LOP-040200 | — | `/lop-hoc/cai-dat/hoc-vien?popup=ADM-LOP-040230` | Figma | cao |

## 4. Khu vực và item

### `A01` Tab Học viên — Danh sách học viên

Frame: `ADM-LOP-040200` (tool đoán:ADM-LOP-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | ten |  | `I3372:39340;3138:130001` Tên | — |  |  | Khớp | QC |
| `A01.02` | tag-hoc-vien |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.03` | email |  |  | — |  | `TC01`, `TC04` | Chưa khớp tự động | QC |
| `A01.04` | ghi-chu-trong-lop |  | `2224:24093` Ghi chú trong lớp | — | opens `A01` |  | Khớp | QC |
| `A01.05` | trang-thai | `Student Status`  | `2390:60882` LOG Trạng thái; `3372:39353` Student Status | — |  | `TC01`, `TC03`, `TC05` | Khớp | QC |
| `A01.06` | buoi-hoc |  | `2224:24097` Buổi học | — |  | `TC01`, `TC03` | Khớp | QC |
| `A01.07` | hoc-phi |  | `2384:54349` Học phí | — | opens `A08` | `TC01`, `TC03` | Khớp | QC |
| `A01.08` | so-tien |  | `2384:54352` Số tiền | — |  | `TC01` | Khớp | QC |
| `A01.09` | tao-hoc-vien-moi |  |  | — | opens `A01` |  | Chưa khớp tự động | QC |

### `A02` Cột Buổi học chỉ xem và cảnh báo vượt buổi

Frame: `ADM-LOP-040200` (tool đoán:ADM-LOP-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | gia-tri-hien-tai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.02` | chon-so-buoi |  |  | — |  | `TC47` | Chưa khớp tự động | QC |
| `A02.03` | so-buoi-thuc-te |  |  | — |  | `TC46` | Chưa khớp tự động | QC |
| `A02.04` | canh-bao-vuot-buoi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.05` | cap-nhat-hien-thi |  |  | — |  |  | Chưa khớp tự động | QC |

### `A03` Popup chọn cách thêm học viên

Frame: `ADM-LOP-040200` (tool đoán:ADM-LOP-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | chon-hoc-vien |  |  | — | opens `A01` | `TC11` | Chưa khớp tự động | QC |
| `A03.02` | tao-hoc-vien-moi |  |  | — |  | `TC10` | Chưa khớp tự động | QC |
| `A03.03` | dong-popup |  |  | — |  | `TC10` | Chưa khớp tự động | QC |

### `A04` Popup Chọn học viên có sẵn

Frame: `ADM-LOP-040200` (tool đoán:ADM-LOP-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | tim-kiem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.02` | chon-lop-hoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.03` | danh-sach |  | `2384:54608` Danh sách học viên | — |  | `TC13`, `TC14`, `TC16` | Khớp | QC |
| `A04.04` | huy |  | `2384:54471` Đang sinh sống và làm việc tại Thâm Quyến, Trung Quốc. Đã tốt nghiệp cử nhân chuyên ngành Trung Quốc học, khoa Đông phương học, trường Đại học Khoa học Xã hội và Nhân văn TP.HCM, chứng chỉ HSK6. | — |  |  | Khớp | QC |
| `A04.05` | them-moi |  |  | — |  | `TC14` | Chưa khớp tự động | QC |

### `A05` Form Tạo học viên mới

Frame: `ADM-LOP-040200` (tool đoán:ADM-LOP-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | ho-va-ten-gioi-tinh-ngay-sinh-so-dien-th |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.02` | vai-tro | `Student Status`  | `3372:39339` Student Status | — |  |  | Khớp | QC |
| `A05.03` | gmail-mat-khau |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.04` | ngay-chot-don-level-code |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.05` | them-tai-khoan |  |  | — |  | `TC18`, `TC20` | Chưa khớp tự động | QC |

### `A06` Ghi chú trong lớp và Lịch sử ghi chú

Frame: `ADM-LOP-040210` (tool đoán:ADM-LOP-040210) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | noi-dung-ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A06.02` | icon-lich-su |  |  | — |  | `TC24` | Chưa sync | QC |
| `A06.03` | moi-ban-ghi-lich-su |  |  | — |  |  | Chưa sync | QC |
| `A06.04` | copy |  |  | — |  | `TC25` | Chưa sync | QC |

### `A07` Trạng thái học viên và Lịch sử thay đổi trạng thái

Frame: `ADM-LOP-040220` (tool đoán:ADM-LOP-040220) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | trang-thai-hien-tai |  |  | — |  |  | Chưa sync | QC |
| `A07.02` | trang-thai-hop-le |  |  | — |  |  | Chưa sync | QC |
| `A07.03` | doi-trang-thai |  |  | — |  |  | Chưa sync | QC |
| `A07.04` | lich-su |  |  | — |  | `TC27`, `TC28`, `TC29`, `TC30`, `TC31`, `TC32`, `TC48` | Chưa sync | QC |
| `A07.05` | chi-xem |  |  | — |  | `TC48` | Chưa sync | QC |
| `A07.06` | du-thinh |  |  | — |  | `TC48` | Chưa sync | QC |
| `A07.07` | dang-hoc |  |  | — |  | `TC28`, `TC29`, `TC30`, `TC48` | Chưa sync | QC |
| `A07.08` | hoan-thanh |  |  | — |  | `TC48` | Chưa sync | QC |
| `A07.09` | nghi-hoc |  |  | — |  | `TC48` | Chưa sync | QC |
| `A07.10` | roi-lop |  |  | — |  | `TC48` | Chưa sync | QC |
| `A07.11` | xoa |  |  | — |  |  | Chưa sync | QC |

### `A08` Popup Thêm học phí

Frame: `ADM-LOP-040230` (tool đoán:ADM-LOP-040230) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | toi-han |  |  | — |  | `TC34` | Chưa sync | QC |
| `A08.02` | trang-thai |  |  | — |  | `TC34` | Chưa sync | QC |
| `A08.03` | chon-hoa-don |  |  | — |  | `TC34`, `TC35` | Chưa sync | QC |
| `A08.04` | gia-tri |  |  | — |  | `TC34`, `TC39` | Chưa sync | QC |
| `A08.05` | so-buoi-hoc |  |  | — |  | `TC34`, `TC50` | Chưa sync | QC |
| `A08.06` | ghi-chu-hoc-phi |  |  | — |  |  | Chưa sync | QC |
| `A08.07` | them |  |  | — |  | `TC34`, `TC35`, `TC37`, `TC49`, `TC50` | Chưa sync | QC |

### `A09` Menu thao tác từ tên học viên

Frame: `ADM-LOP-040200` (tool đoán:ADM-LOP-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | them-tag |  |  | — |  | `TC41` | Chưa khớp tự động | QC |
| `A09.02` | them-lich-hen | `DD/Molecule/Menu Item` Type=Default, State=Default, Size=M | `I2384:54075;2015:31836;2384:54069` Chỉnh sửa | — |  | `TC42` | Khớp | QC |
| `A09.03` | xem-lich-su | `DD/Molecule/Menu Item` Type=Default, State=Hover, Size=M | `I2384:54075;2015:31836;2384:54070` Xem chi tiết | — |  | `TC43` | Khớp | QC |

### `A10` Toast phản hồi CRUD

Frame: `ADM-LOP-040200` (tool đoán:ADM-LOP-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa khớp tự động | QC |
| `A10.02` | thong-tin | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I2224:21185;2177:28928` Chi tiết NV | — |  |  | Khớp | QC |
| `A10.03` | canh-bao |  |  | — |  | `TTC02` | Chưa khớp tự động | QC |
| `A10.04` | loi |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-040200` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2224:21185` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-button | `Atom/Button` Type=Warning, Size=Medium | `2384:54609` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | o-dinh-danh |  | `3372:39340` Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | ghi-chu | `GHI CHÚ`  | `2384:54384` GHI CHÚ | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `2553:185441` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-chip | `Atom/Chip` Type=0 đ | `2384:54033` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | arrow-detail | `ARROW DETAIL`  | `2384:54036` ARROW DETAIL | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | student-status | `Student Status`  | `3372:39372` Student Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | mouse-click |  | `2391:61278` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | menu-panel | `DD/Organism/Menu Panel` Type=Action | `2391:61286` Menu Panel | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:229949` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | account | `ACCOUNT` Size=Default | `3497:50752` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Quyền xem và CRUD | `Admin`, `Class Handler`, `Support` được xem và CRUD tab trong phạm vi. Không có role Assistant Teacher riêng; Trợ giảng dùng role Support. Backend là nguồn quyết định cuối cùng. |
| `REQ02` | Điều hướng theo vùng bấm | Vùng trắng cột Tên mở Chi tiết học viên; tên học viên mở menu thao tác nhanh; không nhập nhằng hai hành vi. |
| `REQ03` | Danh sách và load-more | Không có search/pagination trên main list; dùng load-more khi cuộn với cursor ổn định, trạng thái loading, chống trùng và giữ vị trí cuộn. |
| `REQ04` | Buổi học và cảnh báo vượt buổi | Cột Buổi học chỉ xem, không dropdown/control sửa. Admin/Class Handler/Support chọn số buổi bắt buộc trong popup Thêm học phí, lưu cùng giao dịch. Vẫn đếm buổi thực tế từ điểm danh hợp lệ; hover cảnh báo Quá buổi học khi thực tế lớn hơn số được phép, bằng nhau chưa quá. Không tự chặn học/đổi trạng thái; tính lại sau thay đổi điểm danh hoặc giao dịch học phí/số buổi hiệu lực. |
| `REQ05` | Điểm vào thêm học viên | Popup lựa chọn đúng hai flow Chọn học viên hoặc Tạo học viên mới. Cả `Lớp chung` và `Lớp 1-1` đều được thêm nhiều học viên, không phụ thuộc sĩ số hiện tại. |
| `REQ06` | Chọn học viên có sẵn | Hỗ trợ tìm tên/mã, lọc theo lớp và multi-select; chặn trùng; Lớp 1-1 áp dụng multi-select giống Lớp chung; thêm nguyên tử. |
| `REQ07` | Tạo học viên | Tạo role Student và gắn vào lớp; validation/bảo mật dùng requirement Tài khoản/Học viên/Đăng nhập. |
| `REQ08` | Ghi chú | Lưu theo học viên–lớp; có lịch sử bất biến gồm nội dung, người, thời điểm và Copy từng bản ghi. |
| `REQ09` | Trạng thái | Bộ 7 trạng thái quan hệ học viên trong lớp gồm `Đang học`, `Dự thính`, `Hoàn thành`, `Nghỉ học`, `Rời lớp`, `Chỉ xem`, `Xóa`, dùng đúng icon chính thức đã gắn trong bảng UI. Không có Đặt cọc/Chuyển lớp/Bảo lưu/Học thử trong enum này. Học viên lớp chính thức phải có học phí mới chuyển sang Đang học; lớp test bỏ qua điều kiện này. |
| `REQ10` | Lịch sử trạng thái | Lưu cũ → mới, người và thời điểm máy chủ; không trộn giữa các lớp. |
| `REQ11` | Thêm học phí | Admin/Class Handler/Support chọn hóa đơn đúng học viên, nhập tiền dương, bắt buộc chọn số buổi nguyên 1..N; bỏ filter Trạng Thái; ghi học phí kèm số buổi, trừ số dư, cập nhật badge/tiền/cột chỉ xem nguyên tử. Thiếu số buổi không được lưu. |
| `REQ12` | Badge và tổng tiền | Badge là số lần đóng học phí; Số tiền là tổng học phí đã đóng của học viên trong lớp hiện tại. |
| `REQ13` | Menu tên học viên | Có Thêm Tag, Thêm Lịch Hẹn, Xem lịch sử; lịch sử gồm ba tab được đặc tả riêng. |
| `REQ14` | Audit và hiển thị an toàn | Thao tác CRUD lưu người/thời điểm; text không thực thi HTML/script; lỗi không lộ stack trace, token hay dữ liệu nhạy cảm. |
| `EX01` | Ngoại lệ | Role ngoài `Admin`, `Class Handler`, `Support` hoặc người dùng ngoài phạm vi gửi request CRUD → backend từ chối, không thay đổi dữ liệu. |
| `EX02` | Ngoại lệ | Danh sách rỗng hoặc load-more lỗi → giữ dữ liệu đã tải, hiển thị empty/error state và cho thử lại. |
| `EX03` | Ngoại lệ | Dữ liệu một dòng thay đổi trong lúc load-more → hợp nhất theo ID/phiên bản mới nhất, không để snapshot cũ ghi đè. |
| `EX04` | Ngoại lệ | Thêm học phí thiếu số buổi hoặc số buổi không nguyên/sai kiểu/ngoài 1..N → từ chối toàn giao dịch. Request chỉnh số buổi độc lập như thao tác cột cũ cũng không được phép. |
| `EX06` | Ngoại lệ | Học viên đã thuộc lớp, bị vô hiệu hóa, ngoài phạm vi hoặc thay đổi trong lúc popup đang mở → từ chối thêm; không tạo dữ liệu trùng/một phần. |
| `EX07` | Ngoại lệ | Client đổi Vai trò khỏi `Student` trong flow tạo từ lớp → backend từ chối. |
| `EX08` | Ngoại lệ | Dữ liệu tài khoản thiếu/sai/trùng → áp dụng validation module Tài khoản/Học viên; không tạo tài khoản hoặc quan hệ lớp. |
| `EX09` | Ngoại lệ | Gửi lặp hoặc cùng học viên được thêm đồng thời → xử lý idempotent, không tạo tài khoản/quan hệ trùng; không dùng sĩ số lớp 1-1 làm lý do từ chối. |
| `EX10` | Ngoại lệ | Hai người cùng chỉnh ghi chú → không âm thầm ghi đè phiên bản mới hơn; giữ audit và yêu cầu xử lý xung đột. |
| `EX11` | Ngoại lệ | Lớp chính thức chuyển học viên chưa có học phí sang `Đang học` → từ chối và trả điều kiện còn thiếu. |
| `EX12` | Ngoại lệ | Trạng thái đích không thuộc danh sách hợp lệ → backend từ chối và không tạo lịch sử thành công giả. |
| `EX13` | Ngoại lệ | Hóa đơn không thuộc học viên, giá trị không phải số dương hoặc vượt số dư → không ghi nhận học phí và không đổi badge/tổng tiền. |
| `EX14` | Ngoại lệ | Hai request cùng phân bổ một hóa đơn → kiểm tra/khóa số dư tại commit, không để số dư âm. |
| `EX15` | Ngoại lệ | Điểm danh hoặc giới hạn Buổi học đã thay đổi nhưng client còn dữ liệu cũ → backend/tầng đồng bộ phải tính lại từ dữ liệu mới nhất; không giữ cảnh báo sai hoặc bỏ sót cảnh báo vượt buổi. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở tab và hiển thị đúng danh sách | High | Có | Flow 1 / REQ01 | `A01` | `A01.03`, `A01.05`, `A01.06`, `A01.07`, `A01.08` |
| `TC02` | Case 2: Kiểm tra quyền xem tab | High |  | Ràng buộc quyền / REQ01 | `A01` |  |
| `TC03` | Case 3: Support thực hiện CRUD theo quyền | High |  | Ràng buộc quyền / REQ01 | `A01` | `A01.05`, `A01.06`, `A01.07` |
| `TC04` | Case 4: Mở Chi tiết học viên từ vùng trắng cột Tên | Medium |  | Flow 1 / REQ02 | `A01` | `A01.03` |
| `TC05` | Case 5: Load-more khi kéo xuống | High |  | Flow 1 / REQ03 | `A01` | `A01.05` |
| `TC06` | Case 6: Danh sách rỗng hoặc tải thêm thất bại | Medium |  | EX02 / REQ03 | `A01` |  |
| `TC07` | Case 7: Dữ liệu cập nhật trong lúc đang load-more | Medium |  | EX03 / REQ03 | `A01` |  |
| `TC08` | Case 8: Không chỉnh ở cột Buổi học | High |  | Flow 1 / REQ04 | `A02` |  |
| `TC09` | Case 9: Từ chối sửa buổi độc lập từ cột | High |  | EX04 / REQ04 | `A02` |  |
| `TC44` | Case 44: Chưa cảnh báo khi số buổi thực tế bằng giới hạn | High |  | REQ04 | `A02` |  |
| `TC45` | Case 45: Cảnh báo khi học viên học vượt giới hạn | High |  | Flow 1 / REQ04 | `A02` |  |
| `TC46` | Case 46: Tính lại cảnh báo sau khi thay đổi điểm danh hoặc giới hạn | High |  | REQ04 / EX15 | `A02` | `A02.03` |
| `TC47` | Case 47: Support nhận cảnh báo quản lý quá buổi | Medium |  | Ràng buộc quyền / REQ04 | `A02` | `A02.02` |
| `TC10` | Case 10: Mở và đóng popup lựa chọn | Medium |  | Flow 2 / REQ05 | `A03` | `A03.02`, `A03.03` |
| `TC11` | Case 11: Điều hướng đúng theo lựa chọn | High |  | Flow 2 / REQ05 | `A03` | `A03.01` |
| `TC12` | Case 12: Thêm nhiều học viên vào lớp 1-1 | High |  | Flow 2 / REQ05 | `A03` |  |
| `TC13` | Case 13: Tìm kiếm theo tên hoặc mã | Medium |  | Flow 2 / REQ06 | `A04` | `A04.03` |
| `TC14` | Case 14: Chọn và thêm nhiều học viên vào lớp chung | High | Có | Flow 2 / REQ06 | `A04` | `A04.03`, `A04.05` |
| `TC15` | Case 15: Hủy lựa chọn nhiều học viên | Medium |  | Flow 2 / REQ06 | `A04` |  |
| `TC16` | Case 16: Chặn học viên trùng hoặc không còn hợp lệ | High |  | EX06 / REQ06 | `A04` | `A04.03` |
| `TC17` | Case 17: Lớp 1-1 chọn và thêm nhiều học viên | High |  | Flow 2 / REQ06 | `A04` |  |
| `TC18` | Case 18: Tạo học viên mới và thêm vào lớp | High | Có | Flow 3 / REQ07 | `A05` | `A05.05` |
| `TC19` | Case 19: Chặn tạo role khác Student | High |  | EX07 / REQ07 | `A05` |  |
| `TC20` | Case 20: Validation tài khoản và dữ liệu trùng | High |  | EX08 / REQ07 | `A05` | `A05.05` |
| `TC21` | Case 21: Gửi lặp hoặc có thao tác thêm đồng thời | High |  | EX09 / REQ07 | `A05` |  |
| `TC22` | Case 22: Mở đúng ghi chú của học viên | High |  | Flow 4 / REQ08 | `A06` |  |
| `TC23` | Case 23: Chỉnh sửa và lưu ghi chú | High |  | Flow 4 / REQ08 | `A06` |  |
| `TC24` | Case 24: Xem lịch sử ghi chú | High |  | Flow 4 / REQ08 | `A06` | `A06.02` |
| `TC25` | Case 25: Sao chép một bản ghi ghi chú | Medium |  | REQ08 | `A06` | `A06.04` |
| `TC26` | Case 26: Xung đột khi hai người cùng sửa ghi chú | High |  | EX10 / REQ08 | `A06` |  |
| `TC27` | Case 27: Mở menu và đổi trạng thái hợp lệ | High | Có | Flow 5 / REQ09 | `A07` | `A07.04` |
| `TC28` | Case 28: Chuyển sang Đang học khi đã có học phí | High |  | Flow 5 / REQ09 | `A07` | `A07.04`, `A07.07` |
| `TC29` | Case 29: Chặn chuyển sang Đang học khi chưa có học phí | High |  | EX11 / REQ09 | `A07` | `A07.04`, `A07.07` |
| `TC30` | Case 30: Lớp không chính thức bỏ qua điều kiện học phí | High |  | REQ09 / Ràng buộc lớp test | `A07` | `A07.04`, `A07.07` |
| `TC31` | Case 31: Chuyển học viên sang Xóa | High |  | Flow 5 / REQ09 | `A07` | `A07.04` |
| `TC32` | Case 32: Xem lịch sử trạng thái | High |  | Flow 5 / REQ10 | `A07` | `A07.04` |
| `TC33` | Case 33: Từ chối trạng thái ngoài danh sách | High |  | EX12 / REQ09 | `A07` |  |
| `TC48` | Case 48: Hiển thị đúng bộ icon trạng thái chính thức | High |  | REQ09 | `A07` | `A07.04`, `A07.05`, `A07.06`, `A07.07`, `A07.08`, `A07.09`, `A07.10` |
| `TC34` | Case 34: Popup có số buổi bắt buộc | High |  | Flow 6 / REQ11 | `A08` | `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.07` |
| `TC35` | Case 35: Thêm học phí kèm số buổi | High | Có | Flow 6 / REQ11 | `A08` | `A08.03`, `A08.07` |
| `TC36` | Case 36: Hủy popup không thay học phí hoặc số buổi | Medium |  | Flow 6 / REQ11 | `A08` |  |
| `TC37` | Case 37: Từ chối hóa đơn sai học viên hoặc giá trị không hợp lệ | High |  | EX13 / REQ11 | `A08` | `A08.07` |
| `TC38` | Case 38: Xử lý đồng thời trên cùng hóa đơn | High |  | EX14 / REQ11 | `A08` |  |
| `TC39` | Case 39: Tính badge và tổng tiền theo đúng lớp | High |  | REQ12 | `A08` | `A08.04` |
| `TC49` | Case 49: Thiếu hoặc sai Số buổi học | High |  | EX04 / REQ11 | `A08` | `A08.07` |
| `TC50` | Case 50: Lỗi lưu số buổi rollback học phí | High |  | EX13 / REQ11 | `A08` | `A08.05`, `A08.07` |
| `TC51` | Case 51: Thêm học phí lặp không nhân dữ liệu | High |  | REQ11 / Ràng buộc idempotency | `A08` |  |
| `TC40` | Case 40: Mở menu bằng tên học viên | Medium |  | Flow 7 / REQ13 | `A09` |  |
| `TC41` | Case 41: Thêm Tag và cập nhật badge | Medium |  | Flow 7 / REQ13 | `A09` | `A09.01` |
| `TC42` | Case 42: Mở flow Thêm Lịch Hẹn | Medium |  | Flow 7 / REQ13 | `A09` | `A09.02` |
| `TC43` | Case 43: Mở Xem lịch sử với ba tab | High |  | Flow 7 / REQ13 | `A09` | `A09.03` |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A10` | `A10.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A10` | `A10.01`, `A10.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A10` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A10` | `A10.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (22): `A01.02`, `A01.03`, `A01.09`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A03.01`, `A03.02`, `A03.03`, `A04.01`, `A04.02`, `A04.05`, `A05.01`, `A05.03`, `A05.04`, `A05.05`, `A09.01`, `A10.01`, `A10.03`, `A10.04`
- Chưa sync (22): `A06.01`, `A06.02`, `A06.03`, `A06.04`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A07.06`, `A07.07`, `A07.08`, `A07.09`, `A07.10`, `A07.11`, `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.06`, `A08.07`
- Frame Figma chưa có requirement (3): `ADM-LOP-040210`, `ADM-LOP-040220`, `ADM-LOP-040230`
- Phân loại cần design duyệt (1): `ADM-LOP-040210`
- Thiếu prototype link đi vào (3): `ADM-LOP-040210`, `ADM-LOP-040220`, `ADM-LOP-040230`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (2): `REQ14`, `EX01`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
