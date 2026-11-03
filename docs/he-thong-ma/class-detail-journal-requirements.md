# Chi tiết lớp học — Menu Nhật ký

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-050100` | Lớp học / Nhật ký / Nhật ký | `/lop-hoc/nhat-ky/nhat-ky` | `ADM-LOP-050100-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_journal_requirements.md` — Chi tiết lớp học — Menu Nhật ký (tiền tố `M-CDJ`).

## 2. Luồng

- `FLOW01` Xem nhật ký — `REQ01`, `REQ02`
- `FLOW02` Search/filter — `REQ03`, `REQ04`
- `FLOW03` Tạo nhật ký viết tay — `REQ05`, `REQ06`
- `FLOW04` Sửa nhật ký — `REQ05`
- `FLOW05` Xóa nhật ký — `REQ05`
- `FLOW06` Tự ghi log thêm học viên vào lớp — `REQ07`, `REQ09`
- `FLOW07` Tự ghi log đóng tiền — `REQ08`, `REQ09`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Menu Nhật ký — Danh sách nhật ký

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tieu-de |  | `2533:20883` TIÊU ĐỀ; `2533:20883` TIÊU ĐỀ | — |  | `TC01` | Khớp | QC |
| `A01.02` | mo-ta |  | `2533:20885` MÔ TẢ; `2533:21014` Trống | — |  | `TC02` | Khớp | QC |
| `A01.03` | gio-log |  | `2533:20887` GIỜ LOG | — |  |  | Khớp | QC |
| `A01.04` | ngay-log |  | `2533:20889` NGÀY LOG | — |  |  | Khớp | QC |
| `A01.05` | doi-tuong | `Atom/Object Chip` Type=System; `DD/Molecule/Trigger` Size=XS, State=Active | `2533:20876` Dropdown; `2533:20905` Atom/Object Chip | — |  | `TC02` | Khớp | QC |
| `A01.06` | mo-rong-thu-gon |  | `2533:20927` Thu gọn | — |  |  | Khớp | QC |
| `A01.07` | thao-tac-sua |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.08` | icon-thung-rac |  |  | — | opens `A04` |  | Chưa khớp tự động | QC |
| `A01.09` | khu-vuc-them-nhat-ky |  | `2533:20883` TIÊU ĐỀ | — | opens `A01` |  | Khớp | QC |

### `A02` Tìm kiếm và filter Đối tượng / Thời gian

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tim-kiem | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `I2533:21147;1739:32351` Tìm nội dung...; `2533:21147` Atom/Input | — |  |  | Khớp | QC |
| `A02.02` | filter-doi-tuong |  |  | — |  | `TC08`, `TC17` | Chưa khớp tự động | QC |
| `A02.03` | filter-thoi-gian |  |  | — |  | `TC13` | Chưa khớp tự động | QC |
| `A02.04` | ket-hop-dieu-kien |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.05` | bo-dieu-kien |  |  | — |  | `TC11` | Chưa khớp tự động | QC |
| `A02.06` | toi-han |  |  | — |  | `TC13` | Chưa khớp tự động | QC |
| `A02.07` | hom-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.08` | hom-qua |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.09` | hom-nay-va-hom-qua |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.10` | tuan-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.11` | tuan-truoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.12` | thang-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.13` | thang-truoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.14` | 3-thang-truoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.15` | nam-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.16` | nam-truoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.17` | tuy-chon |  |  | — |  | `TC14` | Chưa khớp tự động | QC |

### `A03` Tạo, sửa và xóa nhật ký viết tay

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | them-nhat-ky |  |  | — |  | `TC18` | Chưa khớp tự động | QC |
| `A03.02` | tieu-de |  | `2533:20883` TIÊU ĐỀ | — |  | `TC18`, `TC19`, `TC20`, `TC21`, `TC23`, `TC25` | Khớp | QC |
| `A03.03` | noi-dung | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `I2533:21147;1739:32351` Tìm nội dung...; `2533:21014` Trống | — |  | `TC18`, `TC19`, `TC20`, `TC21`, `TC23`, `TC25`, `TC27` | Khớp | QC |
| `A03.04` | nguoi-tao-doi-tuong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.05` | ngay-gio-log |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.06` | sua |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.07` | xoa |  |  | — | opens `A04` |  | Chưa khớp tự động | QC |
| `A03.08` | chua-luu-huy |  |  | — |  |  | Chưa khớp tự động | QC |

### `A04` Popup xác nhận xóa nhật ký

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | noi-dung-xac-nhan |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.02` | huy-dong |  |  | — |  | `TC31` | Chưa khớp tự động | QC |
| `A04.03` | xac-nhan |  |  | — |  | `TC32` | Chưa khớp tự động | QC |

### `A05` Log Hệ thống — Thêm học viên vào lớp và đóng tiền

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | them-hoc-vien-vao-lop |  | `2533:20944` Thêm Học Viên | — |  |  | Khớp | QC |
| `A05.02` | dong-tien |  | `2533:20961` Thêm Học Phí | — |  | `TC34` | Khớp | QC |
| `A05.03` | nguoi-thuc-hien |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.04` | ngay-gio-log |  |  | — |  |  | Chưa khớp tự động | QC |

### `A06` Toast phản hồi CRUD

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC03` | Chưa khớp tự động | QC |
| `A06.02` | thong-tin |  | `2533:20924` Giúp học viên thực hành theo dõi lớp học, nắm được tình trạng học tập của học viên và rèn kỹ năng tổng hợp – báo cáo thông tin lớp. | — |  |  | Khớp | QC |
| `A06.03` | canh-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.04` | loi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.05` | tao-thanh-cong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.06` | sua-thanh-cong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.07` | xoa-thanh-cong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.08` | tao-that-bai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.09` | sua-that-bai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.10` | xoa-that-bai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.11` | thieu-quyen |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.12` | tieu-de-thieu-khong-hop-le |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.13` | dang-dong-bo-neu-flow-co-trang-thai-nay |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-050100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `1299:15` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `2533:20877` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | lich-giao-vien-dang-ky | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `2533:20901` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-object-chip | `Atom/Object Chip` Type=System | `2533:20935` Atom/Object Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-icon-button | `Atom/Icon Button`  | `2533:21031` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:231079` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | account | `ACCOUNT` Size=Default | `3497:53466` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Danh sách | Chỉ Admin, Class Handler và Support có quyền trên lớp được xem. Nhật ký gắn đúng lớp, hiển thị năm cột và trạng thái tải/rỗng/lỗi. Mở rộng/thu gọn chỉ ảnh hưởng trình bày. |
| `REQ02` | Đối tượng | Nhật ký viết tay lấy người tạo; log tự động có nguồn Hệ thống. Người thực hiện action được nêu trong mô tả, không thay thế nguồn của log. |
| `REQ03` | Search và Đối tượng | Chỉ search theo Tiêu đề trong lớp hiện tại, chạy ngay khi Enter hoặc tự chạy sau 2 giây từ lần nhập cuối; không search Mô tả. Dropdown Đối tượng chỉ lấy người đã viết nhật ký của lớp và Hệ thống, lọc user theo ID người tạo hoặc Hệ thống theo nguồn. Không lọc theo tên role hoặc người chỉ được nhắc trong mô tả. |
| `REQ04` | Thời gian | Lọc theo thời điểm log đang hiển thị: thời điểm tạo nếu chưa sửa, thời điểm sửa gần nhất nếu đã sửa thành công. Mặc định Hôm nay, dùng đủ 12 khoảng thời gian như filter tab Ghi chú; Tùy chọn bao gồm toàn bộ hai ngày biên và chặn khoảng không hợp lệ. Các điều kiện filter/search kết hợp đồng thời trong cùng múi giờ nghiệp vụ. |
| `REQ05` | Quyền sở hữu | Chỉ Class Handler/Support có quyền trên lớp mới được tạo nhật ký và sửa/xóa nhật ký viết tay do chính mình tạo. Không có ngoại lệ sửa/xóa nhật ký người khác cho Admin; log Hệ thống chỉ đọc. Backend kiểm tra lại quyền tại lúc lưu. |
| `REQ06` | Tạo/sửa | Tự lấy người tạo từ tài khoản đăng nhập và thời điểm từ hệ thống; không đổi chủ sở hữu, nguồn hoặc lớp bằng thao tác sửa. Nhập Tiêu đề trước rồi Nội dung trực tiếp, xác nhận cuối bằng + để lưu; không mở popup tạo. Từ chối Tiêu đề rỗng/chỉ chứa khoảng trắng; không tạo bản ghi khi chỉ chuyển bước nhập. Tiêu đề và Nội dung không giới hạn ký tự; Nội dung được để trống và hiển thị Trống. Bấm dòng của mình để sửa ngay tại dòng, Enter hoặc đưa chuột ra ngoài vùng sửa để lưu; sửa thành công cập nhật ngày/giờ log theo thời điểm sửa. Xóa cần popup xác nhận. |
| `REQ07` | Log thêm học viên vào lớp | Tự ghi đúng một log cho mỗi sự kiện thêm học viên vào lớp thành công; không ghi cho thao tác hủy/thất bại/trùng. Chỉ áp dụng thêm học viên, không áp dụng thêm Giáo viên, Support hoặc Class Handler. |
| `REQ08` | Log đóng tiền | Tự ghi đúng một log cho mỗi lần đóng học phí được lưu thành công trong lớp, có tên hóa đơn và số tiền của lần đóng đó; không ghi cho thao tác chưa lưu hoặc chỉ tạo hóa đơn. |
| `REQ09` | Không mất/trùng log | Action thành công phải có log tương ứng; xử lý lặp cùng action không thêm log. Những action độc lập tạo các log riêng. |
| `REQ10` | Follow | Nhật ký viết tay của Class Handler/Support cung cấp thông tin Follow theo thời điểm log đang hiển thị (tạo mới hoặc sửa thành công). Log tự động không thay thế Follow của người viết. |
| `REQ11` | Notification | CRUD nhật ký viết tay có một phản hồi sau kết quả backend. Tự ghi log dùng phản hồi của nghiệp vụ nguồn, không thêm Toast nhật ký độc lập. |
| `EX01` | Ngoại lệ | Tải danh sách lỗi hoặc response lớp cũ về muộn → báo lỗi đọc/cho thử lại, không hiển thị dữ liệu sai lớp. |
| `EX02` | Ngoại lệ | Sửa/xóa nhật ký người khác hoặc log Hệ thống, kể cả gửi request trực tiếp → từ chối, giữ nguyên dữ liệu. |
| `EX03` | Ngoại lệ | Thiếu role/phạm vi hoặc giả mạo người tạo/nguồn/lớp → backend từ chối thao tác không hợp lệ; không chỉ dựa vào ẩn control UI. |
| `EX04` | Ngoại lệ | Validation/lưu nhật ký thất bại → không tạo hoặc thay đổi dữ liệu sai; giữ nội dung đã nhập để sửa/thử lại khi phù hợp. |
| `EX05` | Ngoại lệ | Thêm học viên vào lớp/đóng tiền bị hủy, thất bại hoặc bị từ chối → không tạo log thành công. |
| `EX06` | Ngoại lệ | Search/filter không có kết quả → hiển thị rỗng theo điều kiện đã chọn; không reset âm thầm hay trả dữ liệu lớp khác. |
| `EX07` | Ngoại lệ | Khoảng Tùy chọn thiếu ngày hoặc Từ ngày sau Đến ngày → không áp dụng, giữ điều kiện cũ và báo lỗi để người dùng chỉnh lại. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Xem đúng nhật ký của lớp | High | Có | Flow 1 / REQ01 | `A01` | `A01.01` |
| `TC02` | Case 2: Phân biệt user và Hệ thống | High |  | REQ02 | `A01` | `A01.02`, `A01.05` |
| `TC03` | Case 3: Chỉ chủ sở hữu thấy sửa/xóa | High |  | REQ05 / Ràng buộc quyền | `A01` |  |
| `TC04` | Case 4: Mở rộng và thu gọn mô tả | Medium |  | REQ01 | `A01` |  |
| `TC05` | Case 5: Tải rỗng, lỗi và chuyển lớp | High |  | EX01 / REQ01 | `A01` |  |
| `TC06` | Case 6: Kiểm tra quyền xem | High |  | EX03 / REQ01 / Ràng buộc quyền | `A01` |  |
| `TC07` | Case 7: Lọc theo người tạo | High |  | Flow 2 / REQ03 | `A02` |  |
| `TC08` | Case 8: Danh sách Đối tượng chỉ có người đã viết nhật ký | High |  | REQ03 | `A02` | `A02.02` |
| `TC09` | Case 9: Lọc Hệ thống | High |  | Flow 2 / REQ03 | `A02` |  |
| `TC10` | Case 10: Kết hợp search và filter | High |  | REQ03–REQ04 | `A02` |  |
| `TC11` | Case 11: Bỏ từng filter | Medium |  | REQ03–REQ04 | `A02` | `A02.05` |
| `TC12` | Case 12: Lọc theo thời điểm log | High |  | REQ04 | `A02` |  |
| `TC13` | Case 13: Đủ khoảng thời gian và mốc biên | High |  | REQ04 | `A02` | `A02.03`, `A02.06` |
| `TC14` | Case 14: Khoảng Tùy chọn | High |  | EX07 / REQ04 | `A02` | `A02.17` |
| `TC15` | Case 15: Search chỉ theo Tiêu đề | High |  | Flow 2 / REQ03 | `A02` |  |
| `TC16` | Case 16: Search bằng Enter hoặc sau 2 giây | High |  | REQ03 / REQ09 | `A02` |  |
| `TC17` | Case 17: Xóa từ khóa và kết quả search về muộn | High |  | REQ03 | `A02` | `A02.02` |
| `TC18` | Case 18: Tạo nhật ký của chính mình | High | Có | Flow 3 / REQ05–REQ06 | `A03` | `A03.01`, `A03.02`, `A03.03` |
| `TC19` | Case 19: Tạo và sửa với Nội dung trống | High |  | REQ06 | `A03` | `A03.02`, `A03.03` |
| `TC20` | Case 20: Tiêu đề và Nội dung không giới hạn ký tự | High |  | REQ06 | `A03` | `A03.02`, `A03.03` |
| `TC21` | Case 21: Chặn tiêu đề rỗng và không lưu khi mới nhập tiêu đề | High |  | EX04 / REQ06 | `A03` | `A03.02`, `A03.03` |
| `TC22` | Case 22: Sửa nhật ký của chính mình | High | Có | Flow 4 / REQ05 | `A03` |  |
| `TC23` | Case 23: Sửa trực tiếp và tự lưu một lần | High |  | Flow 4 / REQ06 / REQ09 | `A03` | `A03.02`, `A03.03` |
| `TC24` | Case 24: Sửa cập nhật thời điểm log và filter | High |  | REQ04 / REQ06 / REQ10 | `A03` |  |
| `TC25` | Case 25: Sửa lỗi hoặc không thay đổi dữ liệu | High |  | EX04 / REQ06 | `A03` | `A03.02`, `A03.03` |
| `TC26` | Case 26: Xóa nhật ký của chính mình | High | Có | Flow 5 / REQ05 | `A03` |  |
| `TC27` | Case 27: Chặn sửa/xóa nhật ký của người khác | High |  | EX02 / REQ05 | `A03` | `A03.03` |
| `TC28` | Case 28: Chặn giả mạo người tạo và mất quyền | High |  | EX02–EX03 / REQ05–REQ06 | `A03` |  |
| `TC29` | Case 29: Chưa tạo, hủy xóa, lỗi lưu và gửi lặp | High |  | EX04 / REQ06 / REQ09 | `A03` |  |
| `TC30` | Case 30: Follow không bị thay bởi log Hệ thống | High |  | REQ10 | `A03` |  |
| `TC31` | Case 31: Mở rồi hủy xóa | High |  | Flow 5 / REQ05 | `A04` | `A04.02` |
| `TC32` | Case 32: Xác nhận xóa bị lỗi hoặc mất quyền | High |  | EX02–EX04 / REQ05 | `A04` | `A04.03` |
| `TC33` | Case 33: Tự ghi log thêm học viên | High |  | Flow 6 / REQ07 | `A05` |  |
| `TC34` | Case 34: Tự ghi log đóng tiền | High |  | Flow 7 / REQ08 | `A05` | `A05.02` |
| `TC35` | Case 35: Log tiền dùng tên hóa đơn và giá trị của lần đóng | High |  | Flow 7 / REQ08 | `A05` |  |
| `TC36` | Case 36: Action bị hủy hoặc thất bại | High |  | EX05 / REQ07–REQ08 | `A05` |  |
| `TC37` | Case 37: Không trùng log khi xử lý lặp | High |  | REQ09 | `A05` |  |
| `TC38` | Case 38: Thêm nhiều học viên | High |  | REQ07 / REQ09 | `A05` |  |
| `TC39` | Case 39: Chặn sửa/xóa log Hệ thống | High |  | EX02 / REQ05 | `A05` |  |
| `TC40` | Case 40: Thêm nhân sự không ghi log Thêm Học Viên | High |  | REQ07 | `A05` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | REQ11 | `A06` | `A06.01` |
| `TTC02` | Toast Case 2: Validation và lỗi lưu | High |  | EX03–EX04 / REQ11 | `A06` | `A06.01` |
| `TTC03` | Toast Case 3: Hủy, đóng và chống lặp | Medium |  | REQ09 / REQ11 | `A06` | `A06.01` |
| `TTC04` | Toast Case 4: Action có log tự động | High |  | REQ07–REQ08 / REQ11 | `A06` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (41): `A01.07`, `A01.08`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A02.08`, `A02.09`, `A02.10`, `A02.11`, `A02.12`, `A02.13`, `A02.14`, `A02.15`, `A02.16`, `A02.17`, `A03.01`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A03.08`, `A04.01`, `A04.02`, `A04.03`, `A05.03`, `A05.04`, `A06.01`, `A06.03`, `A06.04`, `A06.05`, `A06.06`, `A06.07`, `A06.08`, `A06.09`, `A06.10`, `A06.11`, `A06.12`, `A06.13`
- REQ/EX chưa có testcase (1): `EX06`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
