# Lịch hẹn — Danh sách, thêm lịch hẹn và Review

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LHN-010100` | Lịch hẹn / Hẹn lớp | `/lich-hen/hen-lop` | `ADM-LHN-010100-DK` | QC |
| `ADM-LHN-010200` | Lịch hẹn / Học viên | `/lich-hen/hoc-vien` | `ADM-LHN-010200-DK` | QC |
| `ADM-LHN-010300` | Lịch hẹn / Hoá đơn | `/lich-hen/hoa-don` | `ADM-LHN-010300-DK` | QC |
| `ADM-LHN-010400` | Lịch hẹn / Giáo viên | `/lich-hen/giao-vien` | `ADM-LHN-010400-DK` | QC |
| `ADM-LHN-020000` | Bảng chia lịch hẹn | `/bang-chia-lich-hen` | `ADM-LHN-020000-DK` | QC |

Requirement: `appointment_requirement/appointment_requirements.md` — Lịch hẹn — Danh sách, thêm lịch hẹn và Review (tiền tố `A-AP`).

## 2. Luồng

- `FLOW01` Xem lịch hẹn — `REQ01`, `REQ02`, `REQ03`, `REQ04`
- `FLOW02` Lọc danh sách — `REQ05`
- `FLOW03` Thêm lịch hẹn — `REQ06`, `REQ07`, `REQ09`
- `FLOW04` Cập nhật ưu tiên hoặc trạng thái — `REQ08`, `REQ09`
- `FLOW05` Xem Review — `REQ10`, `REQ12`
- `FLOW06` Sắp xếp Bảng chia lịch hẹn — `REQ11`, `REQ12`
- `FLOW07` Xóa lịch hẹn — `REQ13`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LHN-010110` | Popup thêm lịch hẹn | Popup | ADM-LHN-010100 | ADM-LHN-010100 | — | `/lich-hen/hen-lop?popup=ADM-LHN-010110` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Danh Sách Lịch Hẹn

Frame: `ADM-LHN-010100`, `ADM-LHN-010200`, `ADM-LHN-010300`, `ADM-LHN-010400`, `ADM-LHN-020000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | bon-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `I2245:88770;2177:28936` Nhiệm vụ con | — |  | `TC01` | Khớp | QC |
| `A01.02` | bang | `DD/Molecule/Trigger` Size=XS, State=Default | `2367:18831` Section - Bảng dữ liệu chi tiết các lớp học; `2367:19716` Dropdown | — |  | `TC01` | Khớp | QC |
| `A01.03` | thoi-gian-ghi-chu | `Thời gian lịch hẹn` Size=28H | `2367:20150` Thời gian lịch hẹn | — |  |  | Khớp | QC |
| `A01.04` | nguoi-phu-trach | `DD/Molecule/Trigger` Size=XS, State=Default | `2367:19707` Dropdown | — |  |  | Khớp | QC |
| `A01.05` | doi-tuong |  | `2367:18844` Đối tượng | — |  | `TC03` | Khớp | QC |
| `A01.06` | badge-phan-trang | `Status Độ ưu tiên` Size=24, Kiểu=Default | `2371:36533` Status Độ ưu tiên | — |  |  | Khớp một phần | QC |
| `A01.07` | xoa | `Status lịch hẹn` Size=24, Kiểu=Default | `2371:36532` Status lịch hẹn | — | opens `A06` |  | Khớp một phần | QC |

### `A02` Bộ lọc và lựa chọn Ưu tiên / Trạng thái

Frame: `ADM-LHN-010100`, `ADM-LHN-010110`, `ADM-LHN-010200`, `ADM-LHN-010300`, `ADM-LHN-010400`, `ADM-LHN-020000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `4713:129180` Dropdown · Trung tâm | — |  |  | Khớp | QC |
| `A02.02` | nguoi-theo-doi-nguoi-phu-trach | `ACCOUNT` Size=Default | `4273:161903` ACCOUNT | — |  |  | Khớp một phần | QC |
| `A02.03` | thoi-gian | `DD/Molecule/Trigger` Size=XS, State=Default | `2367:19716` Dropdown | — |  |  | Khớp | QC |
| `A02.04` | do-uu-tien | `DD/Molecule/Trigger` Size=XS, State=Default | `2367:19682` Dropdown | — |  |  | Khớp | QC |
| `A02.05` | trang-thai | `DD/Molecule/Trigger` Size=XS, State=Default | `2367:19725` Dropdown; `2367:19757` [Buổi 10] CSKH gọi điện thông báo KG HK2 cho các bạn mới vào từ kì 2 | — |  | `TC05`, `TC06` | Khớp | QC |

### `A03` Popup Thêm lịch hẹn mới

Frame: `ADM-LHN-010110` (tool đoán:ADM-LHN-010110) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | noi-dung | `Atom/Label`  | `2370:27447` Atom/Label | — |  |  | Khớp | QC |
| `A03.02` | ghi-chu | `Atom/Label`  | `2370:27405` Atom/Label | — |  |  | Khớp | QC |
| `A03.03` | thoi-gian | `Atom/Label`  | `2370:27409` Atom/Label | — |  |  | Khớp | QC |
| `A03.04` | trung-tam | `Atom/Label`  | `4835:162294` Atom/Label | — |  | `TC21` | Khớp | QC |
| `A03.05` | doi-tuong | `Atom/Label`  | `2370:27455` Atom/Label | — |  | `TC07` | Khớp | QC |
| `A03.06` | do-uu-tien | `Atom/Label`  | `2370:27412` Atom/Label | — |  |  | Khớp | QC |
| `A03.07` | trang-thai | `Atom/Label` ; `Popup/Header`  | `2370:27869` Atom/Label; `I2527:167628;2514:153358` Title | — |  |  | Khớp | QC |
| `A03.08` | nguoi-phu-trach | `Atom/Label`  | `2370:28055` Atom/Label; `2370:28072` Trợ giảng | — | opens `A03` | `TC08`, `TC09` | Khớp | QC |
| `A03.09` | theo-doi | `Atom/Label`  | `2370:28132` Atom/Label | — |  | `TC09` | Khớp | QC |
| `A03.10` | huy-them-lich-hen |  |  | — |  |  | Chưa khớp tự động | QC |

### `A04` Chỉnh Độ ưu tiên và Trạng thái trên dòng

Frame: `ADM-LHN-010100`, `ADM-LHN-010110`, `ADM-LHN-010200`, `ADM-LHN-010300`, `ADM-LHN-010400`, `ADM-LHN-020000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | do-uu-tien | `DD/Molecule/Trigger` Size=XS, State=Default | `2367:19682` Dropdown | — |  |  | Khớp | QC |
| `A04.02` | trang-thai | `DD/Molecule/Trigger` Size=XS, State=Default | `2367:19725` Dropdown; `2367:19757` [Buổi 10] CSKH gọi điện thông báo KG HK2 cho các bạn mới vào từ kì 2 | — |  | `TC11` | Khớp | QC |
| `A04.03` | nguoi-sua | `DD/Molecule/Trigger` Size=XS, State=Default | `2367:19707` Dropdown | — |  |  | Khớp | QC |

### `A05` Popup Review — Bảng chia lịch hẹn

Frame: `ADM-LHN-020000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | tab-bo-loc | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `I2371:36461;2177:28936` Nhiệm vụ con | — |  |  | Khớp | QC |
| `A05.02` | cot-cum-the | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `2702:48118` Add New Bar · Nhập tiêu đề mục mới | — |  |  | Khớp | QC |
| `A05.03` | the-lich-hen |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.04` | keo-tha-the |  | `2371:36762` Kéo thả thẻ | — |  | `TC17` | Khớp | QC |
| `A05.05` | keo-tha-cum |  |  | — |  |  | Chưa khớp tự động | QC |

### `A06` Nút xóa và popup xác nhận lịch hẹn

Frame: `ADM-LHN-010110`, `ADM-LHN-020000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | bieu-tuong-xoa | `Atom/Label`  | `2370:28055` Atom/Label | — |  |  | Khớp | QC |
| `A06.02` | popup-xac-nhan | `Atom/Button` Type=Secondary, Size=Medium | `I2527:167634;2514:153361` Atom/Button | — |  | `TC19` | Khớp | QC |
| `A06.03` | ket-qua | `Status lịch hẹn` Size=24, Kiểu=Default | `2371:36532` Status lịch hẹn | — |  |  | Khớp một phần | QC |

### `A07` Toast phản hồi CRUD

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC04` | Chưa khớp tự động | QC |
| `A07.02` | thong-tin |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.03` | canh-bao |  |  | — |  | `TTC03` | Chưa khớp tự động | QC |
| `A07.04` | loi |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LHN-010100`, `ADM-LHN-010200`, `ADM-LHN-010300`, `ADM-LHN-010400`, `ADM-LHN-020000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-icon-button | `Atom/Icon Button`  | `2367:19676` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `2367:19681` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-button | `Atom/Button` Type=Warning, Size=Small | `2367:19703` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `2245:88770` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | thoi-gian-lich-hen | `Thời gian lịch hẹn` Size=28H | `2367:19740` Thời gian lịch hẹn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-tag-solid | `Atom/Tag Solid` Size=16H | `2409:142557` Atom/Tag Solid | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | avatar | `Avatar` Size=28 | `2367:19797` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | atom-id-badge | `Atom/ID Badge` Type=Mã lớp, Size=26H | `2370:26005` Atom/ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | mouse-click |  | `2370:26396` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | phan-trang |  | `2367:19116` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:223227` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | molecule-tooltip | `Molecule/Tooltip`  | `2860:45510` Molecule/Tooltip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | atom-chip | `Atom/Chip` Type=TỔNG DOANH THU | `2860:45955` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | color | `COLOR`  | `2425:104406` COLOR | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | status-lich-hen | `Status lịch hẹn` Size=24, Kiểu=Default | `2371:36496` Status lịch hẹn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | status-do-uu-tien | `Status Độ ưu tiên` Size=24, Kiểu=Default | `2371:36497` Status Độ ưu tiên | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Bốn loại | Hẹn lớp chọn lớp, Học viên chọn học viên, Hoá đơn chọn hoá đơn và hiển thị số tiền cùng học viên gắn với hoá đơn, Giáo viên chọn giáo viên; mỗi lịch hẹn thuộc đúng một loại. |
| `REQ02` | Dữ liệu chung | ICS dùng chung bảng lịch hẹn ComGao; menu và màn hình nguồn đọc/ghi cùng bản ghi, không đồng bộ bằng bản sao. Đặc biệt Hẹn lớp dùng cùng bản ghi trong Manage Class. |
| `REQ03` | Quyền xem | Admin xem toàn bộ; Người phụ trách và Người theo dõi xem được lịch hẹn được gán. Người theo dõi chỉ đọc. |
| `REQ04` | Danh sách | Hiển thị bảy cột dữ liệu và ô thao tác xóa cuối hàng, đúng đối tượng và phân công; 50 dòng/trang. Badge tab đếm lịch hẹn đến hạn của từng loại, badge menu đếm lịch hẹn đến hạn ở cả bốn loại theo phạm vi được xem; tổng dưới bảng là tổng lịch hẹn của tab, không phải badge. |
| `REQ05` | Bộ lọc | Lọc theo năm field trên cùng tab; riêng hai bộ lọc Người theo dõi và Người phụ trách chỉ có tác dụng với Admin, role khác luôn chỉ thấy lịch hẹn của chính mình; Ưu tiên có bốn mức, Trạng thái có `Mới`/`Chưa xử lý`/`Đang xử lý`/`Đã xử lý`, hỗ trợ chọn nhiều và `Tất cả`. Danh sách và Review mở mặc định với `Tới hạn` và ba trạng thái `Mới`/`Chưa xử lý`/`Đang xử lý`; `Đã xử lý` bỏ chọn. Thời gian có các preset và `Tuỳ Chọn`; ngày thuộc `Tới Hạn` hiển thị đỏ. |
| `REQ06` | Form tạo | Form chung tại menu Lịch Hẹn gồm Trung tâm, Nội dung, Ghi chú, Thời gian, Đối tượng, Độ ưu tiên, Trạng thái, Người phụ trách, Theo dõi. Mọi field đều bắt buộc trừ Ghi chú, Người phụ trách và Theo dõi. Nội dung nhập tự do, Ghi chú không giới hạn độ dài, Thời gian không giới hạn mốc. Người tạo được chọn sẵn ở Người phụ trách nếu thuộc nhóm role được gán, và có thể gỡ/thêm người; khi tạo và khi sửa đều được bỏ hết Người phụ trách. Form chung chỉ gán user thuộc bốn nhóm Trợ giảng/Support/Nhân viên kinh doanh/Phụ trách lớp vào Người phụ trách hoặc Theo dõi; riêng flow tạo từ Danh sách học viên chỉ gán Trợ giảng/Support/Nhân viên kinh doanh, chỉ ngày không giờ, Đối tượng tự lấy học viên và Trạng thái tự Mới theo UI chuẩn riêng. Không dùng dữ liệu mẫu trên ảnh làm mặc định. |
| `REQ07` | Liên kết | Lưu đúng một đối tượng và các user được gán; tạo thành công xuất hiện ở đúng tab và màn nguồn. |
| `REQ08` | Quyền sửa | Chỉ user thuộc Người phụ trách được đổi ưu tiên/trạng thái trên lịch hẹn đó; không cấp quyền sửa chỉ vì là Admin hoặc Theo dõi. |
| `REQ09` | Phản hồi | Tạo/cập nhật/xóa chỉ hoàn tất sau khi lưu; Toast theo component chung, mỗi thao tác một kết quả. |
| `REQ10` | Review | Nút `Review` mở Bảng chia lịch hẹn với bốn tab và bộ lọc Trạng thái/Thời gian mặc định như danh sách; thẻ lấy từ đúng bản ghi ComGao trong phạm vi được xem. |
| `REQ11` | Cấu trúc và sắp xếp bảng | Bảng có cột tùy chỉnh với tiêu đề/màu user tự chọn, là cấu hình chung theo từng tab cho mọi người xem; không giới hạn số cột/độ dài tiêu đề. Hỗ trợ thêm, đổi màu, chỉ xóa cột trống, kéo một thẻ giữa các vị trí/cột và kéo cả cột/cụm thẻ để sắp xếp. Kéo thả chỉ đổi nhóm/vị trí trên Review, không đổi field lịch hẹn; không nhân bản/mất thẻ. |
| `REQ12` | Quyền Review | Chỉ Admin và Class Handler được thay đổi bảng bằng các thao tác trên; các role còn lại chỉ xem và lọc, dù là Người phụ trách lịch hẹn. |
| `REQ13` | Xóa lịch hẹn | Người phụ trách thấy biểu tượng thùng rác cố định ở cuối hàng của cả bốn tab, không cần hover; bấm để mở popup xác nhận rồi xóa. Hủy/không có quyền/lỗi không xóa; thành công bỏ khỏi danh sách/Review. Không có trạng thái `Đã xoá`. `SOS` là badge FE hiển thị theo Độ ưu tiên `Quan trọng`, không là field riêng và không là mức ưu tiên thứ năm. |
| `REQ14` | Trung tâm | Danh sách có bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số và phân trang chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header. Khi tạo mới bắt buộc chọn `Trung tâm`; bản ghi được lưu thuộc trung tâm đã chọn. Backend kiểm tra lại trung tâm khi lưu, không chỉ dựa vào UI. |
| `EX01` | Ngoại lệ | Thiếu field bắt buộc, ngày/đối tượng không hợp lệ hoặc gán người ngoài phạm vi → không tạo lịch hẹn, chỉ rõ field lỗi. |
| `EX02` | Ngoại lệ | Người không thuộc `Người phụ trách` cố sửa, kể cả Admin chỉ có quyền xem hoặc Người trong `Theo dõi` → từ chối, không thay đổi bản ghi. |
| `EX03` | Ngoại lệ | Lỗi tải/lưu hoặc request lặp → không sinh bản ghi/trạng thái trùng; giữ dữ liệu đã lưu, cho thử lại phù hợp. |
| `EX04` | Ngoại lệ | Role ngoài Admin/Class Handler cố thêm/xóa/đổi màu cột hoặc kéo thả Review, hoặc Admin/Class Handler cố xóa cột còn lịch hẹn → từ chối, bảng không đổi. |
| `EX05` | Ngoại lệ | User không thuộc Người phụ trách cố xóa, hoặc hủy xác nhận/xóa thất bại → giữ lịch hẹn; không chuyển thành trạng thái `Đã xoá`. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Chuyển bốn tab | High | Có | Flow 1 / REQ01 | `A01` | `A01.01`, `A01.02` |
| `TC02` | Case 2: Cùng bản ghi với màn nguồn | High |  | Flow 1 / REQ02 | `A01` |  |
| `TC03` | Case 3: Người Theo dõi chỉ đọc | High |  | Flow 1 / REQ03 | `A01` | `A01.05` |
| `TC04` | Case 4: Dòng, badge và phân trang | Medium |  | Flow 1 / REQ04 | `A01` |  |
| `TC20` | Case 20: Lọc danh sách theo trung tâm | High |  | REQ14 | `A01` |  |
| `TC05` | Case 5: Lọc kết hợp | High |  | Flow 2 / REQ05 | `A02` | `A02.05` |
| `TC06` | Case 6: Tất cả và Tuỳ Chọn | Medium |  | Flow 2 / REQ05 | `A02` | `A02.05` |
| `TC07` | Case 7: Mở popup đúng tab | High |  | Flow 3 / REQ06 | `A03` | `A03.05` |
| `TC08` | Case 8: Mặc định và thay Người phụ trách | High |  | Flow 3 / REQ06 | `A03` | `A03.08` |
| `TC09` | Case 9: Tạo lịch hẹn | High | Có | Flow 3 / REQ06 / REQ07 | `A03` | `A03.08`, `A03.09` |
| `TC10` | Case 10: Hủy hoặc thiếu field | High |  | EX01 / REQ06 | `A03` |  |
| `TC21` | Case 21: Bắt buộc chọn trung tâm khi tạo | High |  | REQ14 | `A03` | `A03.04` |
| `TC11` | Case 11: Người phụ trách cập nhật | High | Có | Flow 4 / REQ08 | `A04` | `A04.02` |
| `TC12` | Case 12: Từ chối người không phụ trách | High |  | EX02 / REQ03 / REQ08 | `A04` |  |
| `TC13` | Case 13: Mở Review và lọc | High | Có | Flow 5 / REQ10 | `A05` |  |
| `TC14` | Case 14: Sắp xếp thẻ và cụm | High |  | Flow 6 / REQ11 | `A05` |  |
| `TC15` | Case 15: Thêm cột và đổi màu | High | Có | Flow 6 / REQ11 | `A05` |  |
| `TC16` | Case 16: Chỉ xóa cột trống | High |  | Flow 6 / REQ11 | `A05` |  |
| `TC17` | Case 17: Role khác chỉ xem | High |  | EX04 / REQ12 | `A05` | `A05.04` |
| `TC18` | Case 18: Xác nhận xóa | High | Có | Flow 7 / REQ13 | `A06` |  |
| `TC19` | Case 19: Hủy hoặc không có quyền | High |  | EX05 / REQ13 | `A06` | `A06.02` |
| `TTC01` | Toast Case 1: Thành công | High |  | Flow 3 / Flow 4 / Flow 6 / Flow 7 / REQ09 | `A07` | `A07.01` |
| `TTC02` | Toast Case 2: Thông tin | Medium |  | REQ09 | `A07` |  |
| `TTC03` | Toast Case 3: Cảnh báo | High |  | EX01 / EX02 / REQ09 | `A07` | `A07.03` |
| `TTC04` | Toast Case 4: Lỗi | High |  | EX03 / REQ09 | `A07` | `A07.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (7): `A03.10`, `A05.03`, `A05.05`, `A07.01`, `A07.02`, `A07.03`, `A07.04`
- Frame Figma chưa có requirement (1): `ADM-LHN-010110`
- Thiếu prototype link đi vào (1): `ADM-LHN-010110`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
