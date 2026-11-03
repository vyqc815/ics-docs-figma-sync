# [Phụ trách lớp] Quy trình — Task Hôm Nay, Task Tuần Này, Task Tháng Này, Ca Trực, Task Khác

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `SP-TASK-010000` | Quy trình / Task hôm nay | `/quy-trinh/task-hom-nay` | `SP-TASK-010000-DK` | QC |
| `SP-TASK-020000` | Quy trình / Task tuần này | `/quy-trinh/task-tuan-nay` | `SP-TASK-020000-DK` | QC |
| `SP-TASK-030000` | Quy trình / Ca trực | `/quy-trinh/ca-truc` | `SP-TASK-030000-DK` | QC |

Requirement: `class_handler_support/process/process.md` — [Phụ trách lớp] Quy trình — Task Hôm Nay, Task Tuần Này, Task Tháng Này, Ca Trực, Task Khác (tiền tố `CHS-PR`).

## 2. Luồng

- `FLOW01` Task Hôm Nay / Tuần Này / Tháng Này / Ca Trực — `REQ01`, `REQ03`, `REQ04`, `REQ07`
- `FLOW02` Xem / cập nhật bù kỳ khác — `REQ02`, `REQ06`
- `FLOW03` Task Khác — `REQ08`
- `FLOW04` Theo dõi người khác — `REQ05`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `SP-TASK-030002` | Dropdown thời gian (đang mở) | Dropdown | SP-TASK-030000 | SP-TASK-030000 | — | `/quy-trinh/ca-truc?popup=SP-TASK-030002` | Figma | cao |
| `SP-TASK-030003` | Lịch chọn ngày (đang mở) | Dropdown | SP-TASK-030000 | SP-TASK-030000 | — | `/quy-trinh/ca-truc?popup=SP-TASK-030003` | Figma | cao |
| `SP-TASK-030004` | Dropdown ca (đang mở) | Dropdown | SP-TASK-030000 | SP-TASK-030000 | — | `/quy-trinh/ca-truc?popup=SP-TASK-030004` | Figma | cao |
| `SP-TASK-030010` | Dialog người phụ trách | Popup | SP-TASK-030000 | SP-TASK-030000 | — | `/quy-trinh/ca-truc?popup=SP-TASK-030010` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Task Hôm Nay / Task Tuần Này / Task Tháng Này / Ca Trực

Frame: `SP-TASK-010000`, `SP-TASK-020000`, `SP-TASK-030000` (tool đoán:SP-TASK-010000, SP-TASK-020000, SP-TASK-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | sidebar | `Card Menu v2 (Test)` Type=Chính dropdown, State=Default; `MENU - CLASS HANDLER`  | `4915:257614` Sidebar · MENU - CLASS HANDLER; `I4915:257614;4901:224371` Card Menu | — |  | `TC02`, `TC06`, `TC09`, `TC10a` | Khớp | QC |
| `A01.02` | dropdown-quy-trinh | `Card Menu v2 (Test)` Type=Chính dropdown, State=Default | `I4915:257614;4901:224371` Card Menu | — |  | `TC01` | Khớp | QC |
| `A01.03` | danh-sach-task |  | `3845:49699` Danh sách task | — |  | `TC02` | Khớp | QC |
| `A01.04` | cot-thoi-gian |  | `3845:49781` Thời gian | — |  | `TC04` | Khớp | QC |
| `A01.05` | task-hom-nay | `Card Menu v2 (Test)` Type=Con progress, State=Select | `I4915:257614;4901:224373` Card Menu | — |  | `TC01`, `TC02`, `TC04`, `TC05`, `TC06`, `TC07`, `TC09` | Khớp | QC |
| `A01.06` | task-tuan-nay | `Card Menu v2 (Test)` Type=Con progress, State=Default | `I4915:257614;4901:224374` Card Menu | — |  | `TC04`, `TC05`, `TC06` | Khớp | QC |
| `A01.07` | task-thang-nay |  |  | — |  | `TC04`, `TC05`, `TC06`, `TC07`, `TC09` | Chưa khớp tự động | QC |
| `A01.08` | ca-truc | `Card Menu v2 (Test)` Type=Con progress, State=Default | `I4915:257614;4901:224375` Card Menu | — |  | `TC06`, `TC10a` | Khớp | QC |
| `A01.09` | task-khac |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.10` | kiem-tra | `Atom/Badge`  | `I3857:72467;1048:1255` Badge | — |  | `TC03` | Khớp | QC |
| `A01.11` | danh-gia |  | `3857:72475` Task · Đánh giá · Thường xuyên nhắc nhở học  | — |  |  | Khớp | QC |
| `A01.12` | task-tien-trinh |  | `3857:72440` Task · Task tiến trình · Nhắc nhở học viên trước bu | — |  |  | Khớp | QC |
| `A01.13` | task-nhap-lieu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.14` | huong-dan-media |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.15` | deadline-xac-thuc-log | `LOGO CENTER`  | `I4915:257614;4901:224383` LOGO CENTER | — |  |  | Khớp | QC |

### `A02` Trang 2: Task Khác và Popup chọn quy trình

Frame: `SP-TASK-010000`, `SP-TASK-020000`, `SP-TASK-030000` (tool đoán:SP-TASK-010000, SP-TASK-020000, SP-TASK-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | nut-chon-quy-trinh |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.02` | danh-sach-task |  | `3845:49699` Danh sách task | — |  | `TC11`, `TC13` | Khớp | QC |
| `A02.03` | popup-o-tim-kiem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.04` | popup-danh-sach |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.05` | popup-huy-xac-nhan | `Atom/Input` State=Counter, Kiểu=Chuẩn | `I3857:72491;1056:1242` Đã nhập xong | — |  |  | Khớp | QC |
| `A02.06` | atom-input | `Atom/Input` State=Default, Kiểu=Chuẩn | `3857:72454` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `A02.07` | atom-label | `Atom/Label`  | `3857:72487` Atom/Label | — |  |  | Chỉ có trên Figma | Figma |

### `A03` Trang 3: Ca Trực

Frame: `SP-TASK-010000`, `SP-TASK-020000`, `SP-TASK-030000` (tool đoán:SP-TASK-010000, SP-TASK-020000, SP-TASK-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | dropdown-quy-trinh | `Card Menu v2 (Test)` Type=Chính dropdown, State=Default | `I4915:257614;4901:224371` Card Menu | — |  |  | Khớp | QC |
| `A03.02` | dropdown-khoang-thoi-gian | `DD/Molecule/Trigger` Size=XS, State=Active | `3845:49782` Filter · Tuần này | — |  |  | Khớp | QC |
| `A03.03` | dropdown-ca | `DD/Molecule/Trigger` Size=XS, State=Default | `3857:76690` Filter · Ca | — |  |  | Khớp một phần | QC |
| `A03.04` | sang |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.05` | chieu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.06` | toi | `AVATAR + Name`  | `I6935:389044;1904:8731` Trần Nguyễn Hoài Phương | — |  |  | Khớp | QC |

### `A04` Trang 4: Popup thêm người vào Danh sách Support

Frame: `SP-TASK-010000`, `SP-TASK-020000`, `SP-TASK-030000` (tool đoán:SP-TASK-010000, SP-TASK-020000, SP-TASK-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | o-tim-kiem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.02` | nhom-nguoi-dung |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.03` | checkbox | `Checkbox` Size=20 | `3857:72444` Checkbox | — |  |  | Khớp | QC |

### `F01` Header

Frame: `SP-TASK-010000`, `SP-TASK-020000`, `SP-TASK-030000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `3821:45908` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

### `F02` (ngoài Body)

Frame: `SP-TASK-010000`, `SP-TASK-020000`, `SP-TASK-030000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | them-nguoi-phu-trach | `Atom/Icon Button`  | `3845:49696` Thêm người phụ trách | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | avatar-name | `AVATAR + Name`  | `6935:389044` AVATAR + Name | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | global-progress-bar | `Global Progress Bar`  | `3857:72427` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `3857:72429` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.05` | atom-chip | `Atom/Chip` Type=Date | `3857:72447` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F02.06` | atom-label | `Atom/Label`  | `3857:72450` Atom/Label | — |  |  | Chỉ có trên Figma | Figma |
| `F02.07` | atom-badge | `Atom/Badge`  | `3857:72467` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.08` | percent | `PERCENT %`  | `3845:49796` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Nguồn task | Task Hôm Nay = loại `Ngày`, Task Tuần Này = `Tuần`, Task Tháng Này = `Tháng`, Ca Trực = `Ca trực`, Task Khác = `Khác`; chỉ quy trình `Công khai`, Package Enable. Không chia theo trung tâm. |
| `REQ02` | Kết quả theo kỳ | Kết quả lưu theo `Action Item + người làm + kỳ` (ngày; tuần bắt đầu Thứ 2; tháng dương lịch; Ca Trực = ngày + ca); mỗi kỳ độc lập, không kế thừa. Task Khác một lượt duy nhất theo `Action Item + người làm`. Kỳ hiện tại và đã qua được cập nhật; kỳ tương lai chỉ xem. |
| `REQ03` | Control theo Loại task | Kiểm tra: checkbox; Đánh giá: dropdown Kết quả; Task tiến trình: thanh kéo %; Task nhập liệu: ô nhập; các loại khác hiển thị theo Action Board. Ghi chú tối đa 500 ký tự. Nhãn thời gian = thời điểm cập nhật gần nhất. |
| `REQ04` | Tiến độ | Chỉ tính Kiểm tra, Đánh giá, Task tiến trình; Category `x/y` và `%`; vòng `%` mỗi kỳ theo quy trình đang chọn. `%` sidebar theo quy trình đang chọn: hôm nay (Ngày), tuần này (Tuần), tháng này (Tháng), hôm nay ca hiện tại (Ca trực); tiến độ chung các quy trình đã chọn (Khác). Tính lại sau mỗi lần lưu. |
| `REQ05` | Danh sách Support | Mặc định chọn chính mình; lưu theo Phụ trách lớp, dùng chung 5 menu con; thêm/gỡ bằng popup checkbox chọn nhiều (tìm theo tên/email) hoặc nút `x` khi hover chip; bấm chip xem tiến độ người đó ở chế độ chỉ xem. |
| `REQ06` | Cột Thời gian | Dropdown Tuần Này / Tuần Trước / Tháng Này / Tháng Trước / 3 Tháng Trước / Tùy Chọn. Mặc định: Task Hôm Nay và Ca Trực `Tuần Này` (7 ngày), Task Tuần Này `Tuần Này` (1 tuần), Task Tháng Này `Tháng Này` (1 tháng). Ca Trực thêm dropdown Ca (Sáng 00:00–11:59 / Chiều 12:00–17:59 / Tối 18:00–23:59, mặc định ca hiện tại). Danh sách kỳ kèm vòng `%`, mặc định chọn kỳ hiện tại. Task Khác không có cột Thời gian. |
| `REQ07` | Dropdown Quy trình | Task Hôm Nay / Tuần Này / Tháng Này / Ca Trực: chọn 1 trong các quy trình Công khai đúng loại, theo thứ tự danh sách Define của loại đó; mặc định quy trình đứng đầu; lựa chọn lưu theo user + menu con, quy trình không còn Công khai thì về mặc định. |
| `REQ08` | Chọn quy trình ở Task Khác | Popup chỉ liệt kê quy trình Công khai loại Khác; chọn nhiều, tìm theo tên, Hủy / Xác nhận; lưu theo Phụ trách lớp. Bỏ chọn không xóa kết quả. Không tạo/sửa quy trình tại đây. |
| `REQ09` | Phản hồi | Lưu thành công không cần Toast (cập nhật tại chỗ); lỗi có Toast `Có Lỗi Xảy Ra`. |
| `EX01` | Ngoại lệ | Không có quy trình Công khai đúng loại → `Chưa có quy trình được define`; Task Khác chưa chọn quy trình → `Chưa chọn quy trình`; vòng `%` và `%` sidebar là `0%`. |
| `EX02` | Ngoại lệ | Cập nhật kết quả kỳ tương lai, kết quả của người khác, hoặc quy trình đã `Vô hiệu` (kể cả gửi request trực tiếp) → backend từ chối, giữ kết quả cũ. |
| `EX03` | Ngoại lệ | Ghi chú vượt 500 ký tự → không lưu, báo lỗi tại ô. |
| `EX04` | Ngoại lệ | Lưu kết quả lỗi / mất mạng → khôi phục giá trị đã lưu, Toast `Có Lỗi Xảy Ra`, không hiển thị dữ liệu optimistic. |
| `EX05` | Ngoại lệ | Ở Task Khác chọn quy trình Nháp/Vô hiệu, sai loại, hoặc vừa bị Vô hiệu sau khi mở popup; ở 3 menu còn lại gửi kết quả cho quy trình sai loại → backend từ chối, giữ dữ liệu cũ. |
| `EX06` | Ngoại lệ | Người trong Danh sách Support bị khóa tài khoản → ẩn khỏi danh sách; dữ liệu theo dõi không bị xóa. |
| `EX07` | Ngoại lệ | Đổi quy trình / kỳ / chip / menu con liên tục, response cũ về sau → bỏ qua response cũ. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Dropdown quy trình đúng loại, mặc định quy trình đầu tiên | High | Có | Flow 1 / REQ01 / REQ07 | `A01` | `A01.02`, `A01.05` |
| `TC02` | Case 2: Đổi quy trình | High | Có | Flow 1 / REQ07 | `A01` | `A01.01`, `A01.03`, `A01.05` |
| `TC03` | Case 3: Làm task theo Loại task | High | Có | Flow 1 / REQ03 | `A01` | `A01.10` |
| `TC04` | Case 4: Mặc định bộ lọc Thời gian theo menu | High |  | REQ06 | `A01` | `A01.04`, `A01.05`, `A01.06`, `A01.07` |
| `TC05` | Case 5: Đổi khoảng thời gian | Medium |  | Flow 2 / REQ06 | `A01` | `A01.05`, `A01.06`, `A01.07` |
| `TC06` | Case 6: % sidebar theo quy trình đang chọn | High |  | REQ04 | `A01` | `A01.01`, `A01.05`, `A01.06`, `A01.07`, `A01.08` |
| `TC07` | Case 7: Kỳ mới không kế thừa, cập nhật bù | High |  | REQ02 | `A01` | `A01.05`, `A01.07` |
| `TC08` | Case 8: Chặn cập nhật kỳ tương lai | High |  | EX02 / REQ02 | `A01` |  |
| `TC09` | Case 9: Quy trình chuyển Vô hiệu, không có quy trình | Medium |  | REQ01 / EX01 / EX02 | `A01` | `A01.01`, `A01.05`, `A01.07` |
| `TC10` | Case 10: Lỗi lưu, ghi chú quá dài | Medium |  | EX03 / EX04 | `A01` |  |
| `TC10a` | Case 10a: Ca Trực theo ngày và ca | High | Có | Flow 1 / REQ02 / REQ06 / REQ07 | `A01` | `A01.01`, `A01.08` |
| `TC11` | Case 11: Chọn quy trình ở Task Khác | High | Có | Flow 3 / REQ08 | `A02` | `A02.02` |
| `TC12` | Case 12: Không chia kỳ | High |  | REQ02 / REQ08 | `A02` |  |
| `TC13` | Case 13: Bỏ chọn giữ kết quả, Hủy, rỗng | Medium |  | REQ08 / EX01 | `A02` | `A02.02` |
| `TC14` | Case 14: Chặn chọn quy trình không hợp lệ | High |  | EX05 / Ràng buộc | `A02` |  |
| `TC15` | Case 15: Thêm/gỡ người theo dõi | High | Có | Flow 4 / REQ05 | `A04` |  |
| `TC16` | Case 16: Xem tiến độ người khác | High |  | Flow 4 / REQ05 | `A04` |  |
| `TC17` | Case 17: Chặn xem/sửa ngoài quyền | High |  | EX02 / Ràng buộc | `A04` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (11): `A01.07`, `A01.09`, `A01.13`, `A01.14`, `A02.01`, `A02.03`, `A02.04`, `A03.04`, `A03.05`, `A04.01`, `A04.02`
- Frame Figma chưa có requirement (4): `SP-TASK-030002`, `SP-TASK-030003`, `SP-TASK-030004`, `SP-TASK-030010`
- Thiếu prototype link đi vào (1): `SP-TASK-030010`
- REQ/EX chưa có testcase (3): `REQ09`, `EX06`, `EX07`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
