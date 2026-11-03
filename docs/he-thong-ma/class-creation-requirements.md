# Tạo lớp học

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-010000` | Danh sách lớp học | `/danh-sach-lop-hoc` | `ADM-LOP-010000-DK` | QC |

Requirement: `management_requirement/class_management/class_creation_requirements.md` — Tạo lớp học (tiền tố `M-CC`).

## 2. Luồng

- `FLOW01` Tạo lớp học — `REQ01`, `REQ02`, `REQ03`, `REQ04`

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

### `A01` Popup Thêm lớp học

Frame: `ADM-LOP-010010` (tool đoán:ADM-LOP-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | lop-khong-chinh-thuc |  |  | — |  |  | Chưa sync | QC |
| `A01.02` | trung-tam |  |  | — |  | `TC25` | Chưa sync | QC |
| `A01.03` | khoa-hoc |  |  | — |  | `TC20` | Chưa sync | QC |
| `A01.04` | so-buoi |  |  | — |  |  | Chưa sync | QC |
| `A01.05` | loai-lop |  |  | — |  |  | Chưa sync | QC |
| `A01.06` | ma-lop |  |  | — |  | `TC24` | Chưa sync | QC |
| `A01.07` | ngay-bat-dau-ngay-ket-thuc |  |  | — |  |  | Chưa sync | QC |
| `A01.08` | mo-ta |  |  | — |  | `TC24` | Chưa sync | QC |
| `A01.09` | ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A01.10` | link-google-meet |  |  | — |  |  | Chưa sync | QC |
| `A01.11` | phu-trach-chinh |  |  | — |  |  | Chưa sync | QC |
| `A01.12` | cskh-chinh |  |  | — |  |  | Chưa sync | QC |
| `A01.13` | them-lich-day |  |  | — | opens `A05` |  | Chưa sync | QC |
| `A01.14` | huy |  |  | — |  |  | Chưa sync | QC |
| `A01.15` | xac-nhan |  |  | — |  | `TC24`, `TC25` | Chưa sync | QC |

### `A02` Lớp không chính thức

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Khóa học, Số buổi và lịch được sinh

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A04` Loại lớp

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Popup Thêm Lịch Dạy Cố Định

Frame: `ADM-LOP-010020`, `ADM-LOP-010050` (tool đoán:ADM-LOP-010020, ADM-LOP-010050) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A06` Bộ chọn Phụ trách chính / CSKH chính

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A07` Phân quyền tạo lớp và dữ liệu bắt buộc

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A08` Trạng thái sau khi tạo lớp

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A09` Ràng buộc liên quan đến trạng thái Đang học

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A10` Toast phản hồi CRUD

Frame: `ADM-LOP-010000` (tool đoán:ADM-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa thấy trên Figma | QC |
| `A10.02` | thong-tin |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A10.03` | canh-bao |  |  | — |  | `TTC02` | Chưa thấy trên Figma | QC |
| `A10.04` | loi |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-icon-button | `Atom/Icon Button`  | `2623:12578` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | dropdown-trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `4713:129348` Dropdown · Trung tâm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `2623:12580` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | the-chi-so | `Thẻ chỉ số` Kiểu=Gọn chữ thường | `3065:75289` Thẻ chỉ số | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | dropdown-an-hien-cot | `DD/Organism/Menu Panel` Type=Multi | `3634:78208` Dropdown · Ẩn hiện cột | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | class-status | `CLass Status`  | `2623:12721` CLass Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | atom-tag-solid | `Atom/Tag Solid` Size=16H | `2623:12725` Atom/Tag Solid | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | progress-diem-danh-gia-a-f | `Progress/Điểm Đánh Giá (A-F)` Size=36x32 | `2623:12729` Progress/Điểm Đánh Giá (A-F) | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | percent | `PERCENT %`  | `2623:12731` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | global-progress-bar | `Global Progress Bar`  | `2623:12738` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | atom-avatar-initials | `Atom/Avatar Initials`  | `2623:12740` Atom/Avatar Initials | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | atom-chip | `Atom/Chip` Type=Date | `2623:12754` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `2623:19289` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | phan-trang |  | `2623:13246` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | account | `ACCOUNT` Size=Default | `2623:13295` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:223538` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Dữ liệu tạo lớp | Popup hiển thị các field và popup con đã mô tả. `Trung tâm`, `Khóa học`, `Loại lớp`, `Phụ trách chính`, `CSKH chính` và `Mô tả` là bắt buộc. Mã lớp do hệ thống tự động sinh, duy nhất toàn hệ thống; người dùng không nhập và backend không nhận Mã lớp từ client. Backend kiểm tra lại dữ liệu, không tin cậy trạng thái, Số buổi hoặc người phụ trách do client tự gán. |
| `REQ02` | Khóa học và Số buổi | Khóa học chỉ lấy từ dữ liệu define. Số buổi của khóa học bằng tổng số buổi học của các học kỳ đang `Công khai` thuộc khóa học đó; học kỳ `Nháp` không được tính. Số buổi của lớp bằng Số buổi của khóa học; người dùng không tự nhập giá trị khác. |
| `REQ03` | Lịch dạy cố định | Ngày bắt đầu là buổi 1. Hệ thống sinh các buổi tiếp theo theo lịch cố định, đủ đúng Số buổi của khóa học rồi dừng. |
| `REQ04` | Trạng thái ban đầu | Không có lịch dạy tạo trạng thái `Mới tạo`; có lịch dạy hợp lệ tạo trạng thái `Khai giảng`. Thêm lịch hợp lệ cho lớp `Mới tạo` tự chuyển lớp sang `Khai giảng`. |
| `REQ05` | Điều kiện Đang học | Chỉ `Class Handler` được đổi trạng thái lớp. Chuyển sang `Đang học` cần Meet, Tiêu chuẩn GV, Quy trình lớp, ít nhất 1 học viên ở trạng thái `Đang học` và toàn bộ nhóm học viên đó đáp ứng điều kiện học phí. Học viên chỉ được chuyển sang `Đang học` khi hồ sơ đáp ứng requirement học phí riêng. |
| `REQ06` | Notification | Tạo lớp, thêm lịch và chuyển trạng thái thành công/thất bại phải hiển thị đúng một notification sau kết quả backend. Hủy popup không hiển thị notification CUD. |
| `REQ07` | Lớp không chính thức | Lớp không chính thức là lớp có Loại lớp `Lớp demo`; `Admin` và `Class Handler` đều được chọn loại này để tạo lớp test. Lớp test mở toàn bộ bài học/bài kiểm tra và bỏ qua điều kiện nghiệp vụ khi đổi trạng thái. Role khác không được tạo lớp demo. Lớp demo không được đổi sang loại lớp chính thức. |
| `REQ08` | Phân quyền tạo lớp | Chỉ `Admin` và `Class Handler` được tạo lớp. Backend phải từ chối request tạo lớp của mọi role khác. |
| `REQ09` | Role phụ trách | `Phụ trách chính` bắt buộc là người dùng có role `Class Handler`; `CSKH chính` bắt buộc là người dùng có role `Support`. |
| `REQ10` | Ngày kết thúc | Field chỉ đọc, tự lấy ngày của buổi cuối sau khi sinh đủ số buổi. Không có lịch thì để trống; không nhận giá trị do client tự gửi. |
| `REQ11` | Loại lớp | Chỉ chấp nhận `Lớp chung`, `Lớp 1-1` và `Lớp demo` (lớp không chính thức). Đây là giá trị phân loại được lưu độc lập với sĩ số; `Lớp 1-1` có thể có nhiều học viên. |
| `REQ12` | Trung tâm | Khi tạo mới bắt buộc chọn `Trung tâm`; bản ghi được lưu thuộc trung tâm đã chọn. Backend kiểm tra lại trung tâm khi lưu, không chỉ dựa vào UI. Danh sách Khóa học trong popup lấy theo trung tâm đã chọn. |
| `EX01` | Ngoại lệ | Người dùng không có role `Admin` hoặc `Class Handler` gửi request tạo lớp trực tiếp → backend từ chối và không tạo dữ liệu. |
| `EX02` | Ngoại lệ | Danh sách Khóa học tải lỗi hoặc khóa học thiếu cấu hình Số buổi → không cho tạo lớp; hiển thị lỗi và cho phép thử lại. |
| `EX03` | Ngoại lệ | Lịch dạy có giờ không hợp lệ, không bao gồm Ngày bắt đầu hoặc bị trùng → không đưa lịch lỗi về popup chính và không tạo lớp. |
| `EX04` | Ngoại lệ | Request tạo lớp thất bại hoặc bị gửi lặp → không tạo lớp một phần hoặc nhiều lớp trùng nhau; hiển thị đúng một notification kết quả. |
| `EX05` | Ngoại lệ | Request chuyển trạng thái lớp/học viên không thỏa điều kiện → backend từ chối, giữ nguyên trạng thái và trả đúng điều kiện còn thiếu. |
| `EX06` | Ngoại lệ | Người không có role `Admin` hoặc `Class Handler` gửi request tạo lớp với Loại lớp `Lớp demo`, hoặc client cố giả lập lớp test → backend từ chối; không tạo lớp test hoặc dữ liệu một phần. |
| `EX07` | Ngoại lệ | Thiếu `Trung tâm`, `Khóa học`, `Loại lớp`, `Phụ trách chính`, `CSKH chính` hoặc `Mô tả` → không tạo lớp và trả lỗi đúng field thiếu. |
| `EX08` | Ngoại lệ | Request gán `Phụ trách chính` không có role `Class Handler`, hoặc `CSKH chính` không có role `Support` → backend từ chối và không tạo lớp. |
| `EX09` | Ngoại lệ | Request gửi loại lớp ngoài `Lớp chung`/`Lớp 1-1`/`Lớp demo`, gửi Link Google Meet không phải URL HTTP(S), hoặc cố ghi đè Ngày kết thúc → backend từ chối dữ liệu không hợp lệ và không tạo lớp. |
| `EX10` | Ngoại lệ | Khóa học hoặc người dùng được chọn đã ngừng hoạt động, không còn tồn tại hoặc nằm ngoài phạm vi của người tạo tại thời điểm xác nhận → backend từ chối toàn bộ request, không tạo lớp một phần và yêu cầu chọn lại dữ liệu hợp lệ. |
| `EX11` | Ngoại lệ | Mã lớp tự sinh trùng với một lớp đã tồn tại (kể cả lớp đã xóa) → backend sinh mã khác, không tạo lớp trùng mã và không báo lỗi cho người dùng vì mã trùng. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở và hủy popup Thêm lớp học | High |  | REQ01 / REQ08 | `A01` |  |
| `TC20` | Case 20: Tự tính Ngày kết thúc theo buổi cuối | High |  | REQ03 / REQ10 | `A01` | `A01.03` |
| `TC23` | Case 23: Tạo lớp thất bại hoặc gửi request lặp | High |  | EX04 / REQ06 / Ràng buộc tính toàn vẹn | `A01` |  |
| `TC24` | Case 24: Validation dữ liệu text, Mã lớp tự sinh và URL Meet | High |  | EX07 / EX09 / EX11 / REQ01 | `A01` | `A01.06`, `A01.08`, `A01.15` |
| `TC25` | Case 25: Bắt buộc chọn trung tâm khi tạo | High |  | REQ12 | `A01` | `A01.02`, `A01.15` |
| `TC15` | Case 15: Admin hoặc Class Handler tạo lớp không chính thức | High |  | REQ07 | `A02` |  |
| `TC16` | Case 16: Chặn role khác tạo lớp không chính thức | High |  | EX06 / REQ07 / Ràng buộc quyền | `A02` |  |
| `TC02` | Case 2: Khóa học define quyết định Số buổi | High |  | REQ02 | `A03` |  |
| `TC03` | Case 3: Không tạo lớp khi cấu hình khóa học lỗi | High |  | EX02 / REQ02 | `A03` |  |
| `TC05` | Case 5: Sinh đủ lịch cố định theo Số buổi | High |  | REQ03 | `A03` |  |
| `TC21` | Case 21: Chỉ chấp nhận ba loại lớp | High |  | EX09 / REQ11 | `A04` |  |
| `TC04` | Case 4: Kiểm tra khung giờ lịch cố định | High |  | EX03 / REQ03 | `A05` |  |
| `TC06` | Case 6: Từ chối lịch không chứa Ngày bắt đầu | High |  | EX03 / REQ03 | `A05` |  |
| `TC14` | Case 14: Chọn đúng Phụ trách chính và CSKH chính | High |  | REQ01 / REQ09 | `A06` |  |
| `TC19` | Case 19: Backend từ chối người phụ trách sai role | High |  | EX08 / REQ09 | `A06` |  |
| `TC22` | Case 22: Từ chối dữ liệu ngoài phạm vi hoặc không còn hoạt động | High |  | EX10 / Ràng buộc phạm vi dữ liệu | `A06` |  |
| `TC17` | Case 17: Chỉ Admin và Class Handler được tạo lớp | High |  | EX01 / REQ08 / Ràng buộc quyền | `A07` |  |
| `TC18` | Case 18: Kiểm tra sáu field bắt buộc | High |  | EX07 / REQ01 | `A07` |  |
| `TC07` | Case 7: Tạo lớp không có lịch dạy | High | Có | REQ04 | `A08` |  |
| `TC08` | Case 8: Tạo lớp có lịch dạy | High | Có | REQ03 / REQ04 | `A08` |  |
| `TC09` | Case 9: Thêm lịch cho lớp Mới tạo | High |  | REQ04 | `A08` |  |
| `TC10` | Case 10: Không cho Khai giảng khi chưa có lịch | High |  | REQ04 | `A08` |  |
| `TC11` | Case 11: Chuyển lớp sang Đang học | High | Có | REQ05 | `A09` |  |
| `TC12` | Case 12: Chặn Đang học khi thiếu điều kiện | High |  | EX05 / REQ05 | `A09` |  |
| `TC13` | Case 13: Chặn học viên Đang học khi chưa có hóa đơn | High |  | EX05 / REQ05 | `A09` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A10` | `A10.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A10` | `A10.01`, `A10.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A10` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A10` | `A10.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa thấy trên Figma (4): `A10.01`, `A10.02`, `A10.03`, `A10.04`
- Chưa sync (15): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A01.08`, `A01.09`, `A01.10`, `A01.11`, `A01.12`, `A01.13`, `A01.14`, `A01.15`
- Frame Figma chưa có requirement (6): `ADM-LOP-010002`, `ADM-LOP-010004`, `ADM-LOP-010010`, `ADM-LOP-010020`, `ADM-LOP-010040`, `ADM-LOP-010050`
- Thiếu prototype link đi vào (4): `ADM-LOP-010010`, `ADM-LOP-010020`, `ADM-LOP-010040`, `ADM-LOP-010050`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
