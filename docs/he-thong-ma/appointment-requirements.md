# Lịch hẹn — Danh sách, thêm lịch hẹn và Review

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

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

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | bon-tab |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.02` | bang |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.03` | thoi-gian-ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | nguoi-phu-trach |  |  | — |  |  | Chưa sync | QC |
| `A01.05` | doi-tuong |  |  | — |  | `TC03` | Chưa sync | QC |
| `A01.06` | badge-phan-trang |  |  | — |  |  | Chưa sync | QC |
| `A01.07` | xoa |  |  | — | opens `A06` |  | Chưa sync | QC |

### `A02` Bộ lọc và lựa chọn Ưu tiên / Trạng thái

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | trung-tam |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | nguoi-theo-doi-nguoi-phu-trach |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | thoi-gian |  |  | — |  |  | Chưa sync | QC |
| `A02.04` | do-uu-tien |  |  | — |  |  | Chưa sync | QC |
| `A02.05` | trang-thai |  |  | — |  | `TC05`, `TC06` | Chưa sync | QC |

### `A03` Popup Thêm lịch hẹn mới

Frame: `ADM-LHN-010110` (tool đoán:ADM-LHN-010110) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | noi-dung |  |  | — |  |  | Chưa sync | QC |
| `A03.02` | ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A03.03` | thoi-gian |  |  | — |  |  | Chưa sync | QC |
| `A03.04` | trung-tam |  |  | — |  | `TC21` | Chưa sync | QC |
| `A03.05` | doi-tuong |  |  | — |  | `TC07` | Chưa sync | QC |
| `A03.06` | do-uu-tien |  |  | — |  |  | Chưa sync | QC |
| `A03.07` | trang-thai |  |  | — |  |  | Chưa sync | QC |
| `A03.08` | nguoi-phu-trach |  |  | — | opens `A03` | `TC08`, `TC09` | Chưa sync | QC |
| `A03.09` | theo-doi |  |  | — |  | `TC09` | Chưa sync | QC |
| `A03.10` | huy-them-lich-hen |  |  | — |  |  | Chưa sync | QC |

### `A04` Chỉnh Độ ưu tiên và Trạng thái trên dòng

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | do-uu-tien |  |  | — |  |  | Chưa sync | QC |
| `A04.02` | trang-thai |  |  | — |  | `TC11` | Chưa sync | QC |
| `A04.03` | nguoi-sua |  |  | — |  |  | Chưa sync | QC |

### `A05` Popup Review — Bảng chia lịch hẹn

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | tab-bo-loc |  |  | — |  |  | Chưa sync | QC |
| `A05.02` | cot-cum-the |  |  | — |  |  | Chưa sync | QC |
| `A05.03` | the-lich-hen |  |  | — |  |  | Chưa sync | QC |
| `A05.04` | keo-tha-the |  |  | — |  | `TC17` | Chưa sync | QC |
| `A05.05` | keo-tha-cum |  |  | — |  |  | Chưa sync | QC |

### `A06` Nút xóa và popup xác nhận lịch hẹn

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | bieu-tuong-xoa |  |  | — |  |  | Chưa sync | QC |
| `A06.02` | popup-xac-nhan |  |  | — |  | `TC19` | Chưa sync | QC |
| `A06.03` | ket-qua |  |  | — |  |  | Chưa sync | QC |

### `A07` Toast phản hồi CRUD

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC04` | Chưa sync | QC |
| `A07.02` | thong-tin |  |  | — |  |  | Chưa sync | QC |
| `A07.03` | canh-bao |  |  | — |  | `TTC03` | Chưa sync | QC |
| `A07.04` | loi |  |  | — |  |  | Chưa sync | QC |

### `F01` (ngoài Body)

Frame: `ADM-LHN-010100`, `ADM-LHN-010200`, `ADM-LHN-010300`, `ADM-LHN-010400`, `ADM-LHN-020000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-icon-button | `Atom/Icon Button`  | `2367:19676` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | dropdown-trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `4713:129180` Dropdown · Trung tâm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `2367:19681` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-button | `Atom/Button` Type=Warning, Size=Small | `2367:19703` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `2245:88770` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | thoi-gian-lich-hen | `Thời gian lịch hẹn` Size=28H | `2367:19740` Thời gian lịch hẹn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | atom-tag-solid | `Atom/Tag Solid` Size=16H | `2409:142557` Atom/Tag Solid | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | avatar | `Avatar` Size=28 | `2367:19797` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | atom-id-badge | `Atom/ID Badge` Type=Mã lớp, Size=26H | `2370:26005` Atom/ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | mouse-click |  | `2370:26396` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | phan-trang |  | `2367:19116` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | account | `ACCOUNT` Size=Default | `4273:161903` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:223227` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | molecule-tooltip | `Molecule/Tooltip`  | `2860:45510` Molecule/Tooltip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | atom-chip | `Atom/Chip` Type=TỔNG DOANH THU | `2860:45955` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | color | `COLOR`  | `2425:104406` COLOR | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | status-lich-hen | `Status lịch hẹn` Size=24, Kiểu=Default | `2371:36496` Status lịch hẹn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.18` | status-do-uu-tien | `Status Độ ưu tiên` Size=24, Kiểu=Default | `2371:36497` Status Độ ưu tiên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.19` | add-new-bar-nhap-tieu-de-muc-moi | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `2702:48118` Add New Bar · Nhập tiêu đề mục mới | — |  |  | Chỉ có trên Figma | Figma |

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

- Chưa sync (37): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A03.08`, `A03.09`, `A03.10`, `A04.01`, `A04.02`, `A04.03`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A06.01`, `A06.02`, `A06.03`, `A07.01`, `A07.02`, `A07.03`, `A07.04`
- Frame Figma chưa có requirement (1): `ADM-LHN-010110`
- Thiếu prototype link đi vào (1): `ADM-LHN-010110`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
