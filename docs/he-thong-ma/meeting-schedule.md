# [Phụ trách lớp, Admin] Lịch Họp

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `SP-LHP-010000` | Lịch họp / Dạng danh sách | `/lich-hop/dang-danh-sach` | `SP-LHP-010000-DK` | QC |
| `SP-LHP-020000` | Lịch họp / Dạng bảng | `/lich-hop/dang-bang` | `SP-LHP-020000-DK` | QC |

Requirement: `meeting_schedule/meeting_schedule.md` — [Phụ trách lớp, Admin] Lịch Họp (tiền tố `MS-MS`).

## 2. Luồng

- `FLOW01` Xem danh sách / lịch — 
- `FLOW02` Tạo cuộc họp — 
- `FLOW03` Sửa / đổi trạng thái / xoá — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `SP-LHP-010010` | Popup chi tiết cuộc họp | Popup | SP-LHP-010000 | SP-LHP-010000 | — | `/lich-hop/dang-danh-sach?popup=SP-LHP-010010` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Danh sách cuộc họp — dạng danh sách

Frame: `SP-LHP-010000`, `SP-LHP-020000` (tool đoán:SP-LHP-010000, SP-LHP-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | nguoi-tham-gia | `DD/Molecule/Trigger` Size=XS, State=Active | `3857:78844` Filter · Người tham gia | — |  | `TC01`, `TC1b`, `TC03`, `TC07`, `TC08` | Khớp | QC |
| `A01.02` | trang-thai | `DD/Molecule/Trigger` Size=XS, State=Default | `3857:78845` Filter · Trạng thái | — |  | `TC1b`, `TC03`, `TC05`, `TC06`, `TC08` | Khớp | QC |
| `A01.03` | thoi-gian | `DD/Molecule/Trigger` Size=XS, State=Default | `3857:78846` Filter · Thời gian | — |  | `TC08`, `TC10` | Khớp | QC |
| `A01.04` | ngay-hop |  | `3857:78862` Ngày họp | — |  |  | Khớp một phần | QC |
| `A01.05` | gio-hop |  | `3857:81003` Giờ họp | — |  |  | Khớp một phần | QC |
| `A01.06` | chu-de |  | `3857:78864` Chủ đề | — |  | `TC03`, `TC04` | Khớp một phần | QC |
| `A01.07` | ghi-chu | `Card Menu v2 (Test)` Type=Chính thông báo, State=Default | `I4915:258525;4901:225813` Card Menu | — |  | `TC04`, `TC09` | Khớp | QC |
| `A01.08` | nguoi-tham-gia | `DD/Molecule/Trigger` Size=XS, State=Active | `3857:78844` Filter · Người tham gia | — |  | `TC01`, `TC1b`, `TC03`, `TC07`, `TC08` | Khớp | QC |
| `A01.09` | trang-thai | `DD/Molecule/Trigger` Size=XS, State=Default | `3857:78845` Filter · Trạng thái | — |  | `TC1b`, `TC03`, `TC05`, `TC06`, `TC08` | Khớp | QC |
| `A01.10` | icon-but | `Atom/Icon Button`  | `3857:78842` Atom/Icon Button | — | opens `A03` | `TC05` | Khớp | QC |
| `A01.11` | sidebar-menu-class-handler | `MENU - CLASS HANDLER`  | `4915:258525` Sidebar · MENU - CLASS HANDLER | — |  |  | Chỉ có trên Figma | Figma |

### `A02` Trang 2: Danh sách cuộc họp — dạng lịch tuần

Frame: `SP-LHP-010000`, `SP-LHP-020000` (tool đoán:SP-LHP-010000, SP-LHP-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp

Frame: `SP-LHP-010010` (tool đoán:SP-LHP-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | dong-phu-duoi-tieu-de |  |  | — |  |  | Chưa có thiết kế | QC |
| `A03.02` | chu-de |  |  | — |  | `TC03`, `TC04` | Chưa có thiết kế | QC |
| `A03.03` | thoi-gian |  |  | — |  | `TC08`, `TC10` | Chưa có thiết kế | QC |
| `A03.04` | trang-thai |  |  | — |  | `TC1b`, `TC03`, `TC05`, `TC06`, `TC08` | Chưa có thiết kế | QC |
| `A03.05` | nguoi-tham-gia |  |  | — |  | `TC01`, `TC1b`, `TC03`, `TC07`, `TC08` | Chưa có thiết kế | QC |
| `A03.06` | ghi-chu |  |  | — |  | `TC04`, `TC09` | Chưa có thiết kế | QC |
| `A03.07` | link-cuoc-hop |  |  | — |  | `TC06` | Chưa có thiết kế | QC |
| `A03.08` | huy |  |  | — |  |  | Chưa có thiết kế | QC |
| `A03.09` | luu |  |  | — |  |  | Chưa có thiết kế | QC |
| `A03.10` | xoa |  |  | — | opens `A03` |  | Chưa có thiết kế | QC |

### `A04` Trang 4: Dropdown bộ lọc

Frame: `SP-LHP-010000`, `SP-LHP-020000` (tool đoán:SP-LHP-010000, SP-LHP-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `F01` Header

Frame: `SP-LHP-010000`, `SP-LHP-020000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `3857:78210` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

### `F02` (ngoài Body)

Frame: `SP-LHP-010000`, `SP-LHP-020000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | xem-bang | `Atom/Tab` State=Inactive, Kiểu=Switch icon | `3857:79228` Xem · Bảng | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | xem-danh-sach | `Atom/Tab` State=Active, Kiểu=Switch icon | `3857:79230` Xem · Danh sách | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | atom-chip | `Atom/Chip` Type=Date | `3857:80912` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | avatar | `Avatar` Size=28 | `3857:80710` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F02.05` | mouse-click |  | `3857:80714` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F02.06` | molecule-tooltip | `Molecule/Tooltip`  | `3857:80715` Molecule/Tooltip | — |  |  | Chỉ có trên Figma | Figma |
| `F02.07` | phan-trang |  | `3857:79012` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F02.08` | time | `Time`  | `3857:84381` Time | — |  |  | Chỉ có trên Figma | Figma |
| `F02.09` | atom-button | `Atom/Button` Type=Outlined, Size=Small | `3857:80046` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F02.10` | cuoc-hop-truoc-buoi-10-huong-dan-luye | `STATUS CALENDAR`  | `3857:80116` Cuộc họp · [Trước Buổi 10] Hướng dẫn luyệ | — |  |  | Chỉ có trên Figma | Figma |
| `F02.11` | cuoc-hop-sau-buoi-7-hop-giao-vien-ren | `STATUS CALENDAR`  | `3857:80125` Cuộc họp · [Sau Buổi 7] Họp Giáo Viên REN | — |  |  | Chỉ có trên Figma | Figma |
| `F02.12` | them-2-cuoc-hop | `Atom/Badge`  | `3857:80152` Thêm · +2 cuộc họp | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Badge sidebar | Đếm cuộc họp user là người tạo hoặc người tham gia, trạng thái Mới tạo + Đang chờ + Đang tham gia; không theo bộ lọc; ẩn khi 0, `99+` khi > 99. |
| `REQ02` | Phạm vi & quyền | Admin xem tất cả cuộc họp; Phụ trách lớp chỉ thấy cuộc họp mình tạo hoặc tham gia. Người tạo: sửa, đổi trạng thái, xoá. Người khác: chỉ xem. Quyền sửa/xoá kiểm tra theo `created_by`, không theo role. |
| `REQ03` | Bộ lọc | Người tham gia (mặc định chính mình, danh sách mọi role ICS), Trạng thái (4 giá trị), Thời gian (14 giá trị, chọn 1); OR trong bộ lọc, AND giữa bộ lọc. |
| `REQ04` | Dạng danh sách | Cột Ngày họp, Giờ họp, Chủ đề, Ghi chú, Người tham gia (4 avatar + `+N`, tooltip tên), Trạng thái (dropdown cho người tạo), icon bút; sắp xếp mới nhất trước; 10 dòng/trang. |
| `REQ05` | Dạng lịch tuần | Điều hướng tuần, nút Hôm nay, highlight hôm nay, card theo giờ bắt đầu, `+N cuộc họp` khi trùng ô; không áp bộ lọc Thời gian. Ghi nhớ dạng hiển thị theo user. |
| `REQ06` | Popup | Dùng chung Thêm/Chi tiết; field Chủ đề, Thời gian, Trạng thái, Người tham gia, Ghi chú, Link cuộc họp; nhãn Đã trôi qua/Sắp diễn ra; Xoá có xác nhận, xoá mềm. |
| `REQ07` | Toast | `Thành Công`: `Đã thêm cuộc họp.`, `Đã cập nhật cuộc họp.`, `Đã cập nhật trạng thái.`, `Đã xoá cuộc họp.`; `Cảnh Báo` khi validate lỗi; `Có Lỗi Xảy Ra` khi lỗi. Một thao tác một Toast. |
| `REQ08` | Log | Lưu người/thời điểm tạo, sửa, đổi trạng thái, xoá. |
| `REQ09` | Người tham gia | Chọn được tài khoản mọi role của ICS (Admin, Phụ trách lớp, Support, Sale, Giáo viên, Trợ giảng, Học viên), chỉ tài khoản đang hoạt động. |
| `EX01` | Ngoại lệ | Thiếu Chủ đề / ngày / giờ, Chủ đề > 255 ký tự, Ghi chú > 500 ký tự, Link không phải URL `http(s)` → không lưu, báo lỗi tại field, Toast `Cảnh Báo`. |
| `EX02` | Ngoại lệ | Người không phải người tạo gửi request sửa / đổi trạng thái / xoá → backend từ chối, dữ liệu giữ nguyên. |
| `EX03` | Ngoại lệ | Mở cuộc họp đã bị xoá hoặc user đã bị bỏ khỏi danh sách tham gia → thông báo không còn quyền xem, tải lại danh sách. |
| `EX04` | Ngoại lệ | Lưu / xoá thất bại → giữ dữ liệu trong popup, Toast `Có Lỗi Xảy Ra`, không cập nhật danh sách giả. |
| `EX05` | Ngoại lệ | Tải danh sách lỗi → vùng lỗi có `Thử lại`; không hiển thị bảng rỗng giả. |
| `EX06` | Ngoại lệ | Hai người cùng sửa (người tạo mở 2 tab) → bản lưu sau bị từ chối nếu dữ liệu đã đổi, thông báo tải lại. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở danh sách mặc định | High |  | Flow 1 / REQ02 / REQ03 | — | `A01.01`, `A01.08`, `A03.05` |
| `TC1b` | Case 1b: Admin xem tất cả | High |  | Flow 1 / REQ02 | — | `A01.01`, `A01.02`, `A01.08`, `A01.09`, `A03.04`, `A03.05` |
| `TC02` | Case 2: Badge sidebar | High |  | REQ01 | — |  |
| `TC03` | Case 3: Tạo cuộc họp | High |  | Flow 2 / REQ06 | — | `A01.01`, `A01.02`, `A01.06`, `A01.08`, `A01.09`, `A03.02`, `A03.04`, `A03.05` |
| `TC04` | Case 4: Validate form | High |  | EX01 | — | `A01.06`, `A01.07`, `A03.02`, `A03.06` |
| `TC05` | Case 5: Người tạo sửa và đổi trạng thái | High |  | Flow 3 / REQ02 / REQ04 | — | `A01.02`, `A01.09`, `A01.10`, `A03.04` |
| `TC06` | Case 6: Người tham gia chỉ xem | High |  | REQ02 / EX02 | — | `A01.02`, `A01.09`, `A03.04`, `A03.07` |
| `TC07` | Case 7: Xoá cuộc họp | High |  | Flow 3 / REQ06 | — | `A01.01`, `A01.08`, `A03.05` |
| `TC08` | Case 8: Bộ lọc kết hợp | High |  | REQ03 | — | `A01.01`, `A01.02`, `A01.03`, `A01.08`, `A01.09`, `A03.03`, `A03.04`, `A03.05` |
| `TC09` | Case 9: Cột Người tham gia và Ghi chú | Medium |  | REQ04 | — | `A01.07`, `A03.06` |
| `TC10` | Case 10: Dạng lịch tuần | High |  | REQ05 | — | `A01.03`, `A03.03` |
| `TC11` | Case 11: Nhãn thời điểm trong popup | Low |  | REQ06 | — |  |
| `TC12` | Case 12: Lỗi lưu, lỗi tải, cuộc họp đã xoá | Medium |  | EX03 / EX04 / EX05 | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Frame Figma chưa có requirement (1): `SP-LHP-010010`
- Thiếu prototype link đi vào (1): `SP-LHP-010010`
- REQ/EX chưa có testcase (4): `REQ07`, `REQ08`, `REQ09`, `EX06`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
