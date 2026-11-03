# [Admin] Chi tiết giáo viên

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-GV-020100` | Chi tiết giáo viên / Thông tin cá nhân | `/chi-tiet-giao-vien/thong-tin-ca-nhan` | `ADM-GV-020100-DK` | QC |
| `ADM-GV-020200` | Chi tiết giáo viên / Danh sách lớp | `/chi-tiet-giao-vien/danh-sach-lop` | `ADM-GV-020200-DK` | QC |
| `ADM-GV-020300` | Chi tiết giáo viên / Lịch dạy | `/chi-tiet-giao-vien/lich-day` | `ADM-GV-020300-DK` | QC |
| `ADM-GV-020400` | Chi tiết giáo viên / Log | `/chi-tiet-giao-vien/log` | `ADM-GV-020400-DK` | QC |
| `ADM-GV-020500` | Chi tiết giáo viên / Quản lý đăng ký lịch | `/chi-tiet-giao-vien/quan-ly-dang-ky-lich` | — | QC |
| `ADM-GV-020600` | Chi tiết giáo viên / Ghi chú | `/chi-tiet-giao-vien/ghi-chu` | `ADM-GV-020600-DK` | QC |

Requirement: `management_requirement/teacher_management/teacher_detail_requirements.md` — [Admin] Chi tiết giáo viên (tiền tố `M-TD`).

## 2. Luồng

- `FLOW01` Xem chi tiết giáo viên — `REQ01`
- `FLOW02` Cập nhật Thông tin cá nhân — `REQ02`
- `FLOW03` Lấy lại mật khẩu giáo viên — `REQ03`
- `FLOW04` Chuyển giáo viên sang Nghỉ việc — `REQ04`
- `FLOW05` Xem lịch dạy theo tuần — `REQ05`
- `FLOW06` Xem log hệ thống của giáo viên — `REQ07`
- `FLOW07` Xem, lọc và quản lý ghi chú — `REQ08`
- `FLOW08` Bình luận ghi chú — `REQ09`
- `FLOW09` Cập nhật lịch đăng ký của giáo viên — `REQ10`
- `FLOW10` Xem lớp và cập nhật lương giáo viên theo lớp — `REQ11`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-GV-020210` | Popup chỉnh sửa lương | Popup | ADM-GV-020200 | ADM-GV-020200 | — | `/chi-tiet-giao-vien/danh-sach-lop?popup=ADM-GV-020210` | Figma | cao |
| `ADM-GV-020309` | Xem theo lớp | Trạng thái | ADM-GV-020300 | ADM-GV-020300 | — | `/chi-tiet-giao-vien/lich-day?state=ADM-GV-020309` | Figma | trung bình |
| `ADM-GV-020520` | Popup đăng ký khung giờ | Popup | ADM-GV-020500 | ADM-GV-020500 | — | `/chi-tiet-giao-vien/quan-ly-dang-ky-lich?popup=ADM-GV-020520` | Figma | cao |

## 4. Khu vực và item

### `A01` Màn hình Chi tiết giáo viên

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Tab Thông tin cá nhân

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | anh-dai-dien |  |  | — |  | `TC08` | Chưa sync | QC |
| `A02.02` | ma-giao-vien |  |  | — |  | `TC03`, `TC04` | Chưa sync | QC |
| `A02.03` | gmail |  |  | — |  | `TC03` | Chưa sync | QC |
| `A02.04` | ho-va-ten |  |  | — |  | `TC06` | Chưa sync | QC |
| `A02.05` | gioi-tinh |  |  | — |  | `TC03` | Chưa sync | QC |
| `A02.06` | ngay-sinh |  |  | — |  | `TC03` | Chưa sync | QC |
| `A02.07` | so-dien-thoai |  |  | — |  | `TC05` | Chưa sync | QC |
| `A02.08` | trang-thai |  |  | — |  | `TC03`, `TC10`, `TC11` | Chưa sync | QC |
| `A02.09` | ghi-chu |  |  | — |  | `TC03`, `TC07` | Chưa sync | QC |
| `A02.10` | ngan-hang |  |  | — |  | `TC03`, `TC06` | Chưa sync | QC |
| `A02.11` | so-tai-khoan |  |  | — |  |  | Chưa sync | QC |
| `A02.12` | ten-chu-tai-khoan |  |  | — |  | `TC06` | Chưa sync | QC |
| `A02.13` | lay-lai-mat-khau |  |  | — |  | `TC09` | Chưa sync | QC |
| `A02.14` | cap-nhat-tai-khoan |  |  | — |  | `TC04`, `TC05` | Chưa sync | QC |

### `A03` Tab Danh sách lớp

Frame: `ADM-GV-020210` (tool đoán:ADM-GV-020210) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | tim-kiem-lop-hoc |  |  | — |  | `TC22` | Chưa sync | QC |
| `A03.02` | trang-thai-lop |  |  | — |  |  | Chưa sync | QC |
| `A03.03` | ma-lop |  |  | — |  | `TC13`, `TC18`, `TC22` | Chưa sync | QC |
| `A03.04` | khoa-hoc |  |  | — |  | `TC13`, `TC22`, `TC23` | Chưa sync | QC |
| `A03.05` | danh-gia |  |  | — |  | `TC13`, `TC14` | Chưa sync | QC |
| `A03.06` | kpi-lop |  |  | — |  | `TC15` | Chưa sync | QC |
| `A03.07` | luong-giao-vien-theo-gio |  |  | — | opens `A03` |  | Chưa sync | QC |
| `A03.08` | mo-chi-tiet |  |  | — |  |  | Chưa sync | QC |
| `A03.09` | loai-lop |  |  | — |  | `TC23` | Chưa sync | QC |
| `A03.10` | khoa-hoc |  |  | — |  | `TC13`, `TC22`, `TC23` | Chưa sync | QC |
| `A03.11` | trang-thai-lop |  |  | — |  |  | Chưa sync | QC |
| `A03.12` | thoi-gian |  |  | — |  | `TC24`, `TC25` | Chưa sync | QC |

### `A04` Tab Lịch dạy

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | bat |  |  | — |  |  | Chưa sync | QC |
| `A04.02` | tat |  |  | — |  |  | Chưa sync | QC |

### `A05` Tab Log

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | tim-kiem |  |  | — |  |  | Chưa sync | QC |
| `A05.02` | tieu-de |  |  | — |  | `TC37` | Chưa sync | QC |
| `A05.03` | mo-ta |  |  | — |  | `TC37`, `TC38`, `TC43`, `TC44` | Chưa sync | QC |
| `A05.04` | gio-log-ngay-log |  |  | — |  | `TC37` | Chưa sync | QC |
| `A05.05` | doi-tuong |  |  | — |  | `TC37`, `TC38`, `TC39`, `TC42` | Chưa sync | QC |
| `A05.06` | thao-tac |  |  | — |  | `TC37`, `TC38`, `TC40`, `TC41` | Chưa sync | QC |
| `A05.07` | bo-loc-doi-tuong |  |  | — |  |  | Chưa sync | QC |
| `A05.08` | bo-loc-thoi-gian |  |  | — |  |  | Chưa sync | QC |

### `A06` Tab Quản lý đăng ký lịch

Frame: `ADM-GV-020520` (tool đoán:ADM-GV-020520) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | fulltime |  |  | — |  | `TC46`, `TC49`, `TC49a` | Chưa sync | QC |
| `A06.02` | cot-ngay |  |  | — |  |  | Chưa sync | QC |
| `A06.03` | hang-buoi |  |  | — |  |  | Chưa sync | QC |
| `A06.04` | o-buoi-chua-dang-ky |  |  | — | opens `A06` |  | Chưa sync | QC |
| `A06.05` | o-buoi-da-dang-ky |  |  | — |  |  | Chưa sync | QC |
| `A06.06` | popup-dang-ky-khung-gio |  |  | — |  | `TC47` | Chưa sync | QC |
| `A06.07` | ghi-chu-chung |  |  | — |  |  | Chưa sync | QC |
| `A06.08` | cap-nhat |  |  | — |  | `TC47`, `TC49`, `TC49a`, `TC50`, `TC51`, `TC52` | Chưa sync | QC |

### `A07` Tab Ghi chú

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | o-go-nhanh |  |  | — |  | `TC56`, `TC57` | Chưa sync | QC |
| `A07.02` | tieu-de |  |  | — |  | `TC53`, `TC56`, `TC58` | Chưa sync | QC |
| `A07.03` | noi-dung |  |  | — |  | `TC53`, `TC56`, `TC57`, `TC58` | Chưa sync | QC |
| `A07.04` | loai |  |  | — |  | `TC53`, `TC55`, `TC56`, `TC58` | Chưa sync | QC |
| `A07.05` | do-uu-tien |  |  | — |  | `TC56`, `TC58` | Chưa sync | QC |
| `A07.06` | trang-thai |  |  | — |  | `TC53`, `TC55`, `TC56`, `TC58` | Chưa sync | QC |
| `A07.07` | menu |  |  | — |  |  | Chưa sync | QC |
| `A07.08` | nhan-da-chinh-sua |  |  | — |  |  | Chưa sync | QC |
| `A07.09` | owner |  |  | — |  | `TC53`, `TC54`, `TC55`, `TC56`, `TC58`, `TC59`, `TC60`, `TC63`, `TC64`, `TC65` | Chưa sync | QC |
| `A07.10` | binh-luan |  |  | — |  |  | Chưa sync | QC |
| `A07.11` | hoat-dong-binh-luan-cuoi |  |  | — |  |  | Chưa sync | QC |
| `A07.12` | ghi-chu-cong-khai-moi |  |  | — |  |  | Chưa sync | QC |
| `A07.13` | ghi-chu-rieng-tu-moi |  |  | — |  |  | Chưa sync | QC |
| `A07.14` | ghi-chu-cong-khai-dong |  |  | — |  |  | Chưa sync | QC |
| `A07.15` | ghi-chu-rieng-tu-dong |  |  | — |  | `TC71` | Chưa sync | QC |
| `A07.16` | loai |  |  | — |  | `TC53`, `TC55`, `TC56`, `TC58` | Chưa sync | QC |
| `A07.17` | do-uu-tien |  |  | — |  | `TC56`, `TC58` | Chưa sync | QC |
| `A07.18` | trang-thai-ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A07.19` | thoi-gian |  |  | — |  | `TC53`, `TC58`, `TC61`, `TC67`, `TC68` | Chưa sync | QC |
| `A07.20` | toi-han |  |  | — |  | `TC68` | Chưa sync | QC |
| `A07.21` | hom-nay |  |  | — |  | `TC67`, `TC68` | Chưa sync | QC |
| `A07.22` | hom-qua |  |  | — |  | `TC68` | Chưa sync | QC |
| `A07.23` | hom-nay-va-hom-qua |  |  | — |  | `TC68` | Chưa sync | QC |
| `A07.24` | tuan-nay |  |  | — |  |  | Chưa sync | QC |
| `A07.25` | tuan-truoc |  |  | — |  |  | Chưa sync | QC |
| `A07.26` | thang-nay |  |  | — |  |  | Chưa sync | QC |
| `A07.27` | thang-truoc |  |  | — |  | `TC68` | Chưa sync | QC |
| `A07.28` | 3-thang-truoc |  |  | — |  | `TC68` | Chưa sync | QC |
| `A07.29` | nam-nay |  |  | — |  |  | Chưa sync | QC |
| `A07.30` | nam-truoc |  |  | — |  |  | Chưa sync | QC |
| `A07.31` | tuy-chon |  |  | — |  | `TC69` | Chưa sync | QC |

### `A08` Toast phản hồi CRUD

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa sync | QC |
| `A08.02` | thong-tin |  |  | — |  |  | Chưa sync | QC |
| `A08.03` | canh-bao |  |  | — |  | `TTC02` | Chưa sync | QC |
| `A08.04` | loi |  |  | — |  |  | Chưa sync | QC |

### `F01` Header

Frame: `ADM-GV-020100`, `ADM-GV-020200`, `ADM-GV-020300`, `ADM-GV-020400`, `ADM-GV-020500`, `ADM-GV-020600` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `2223:84653` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Main - Scrollable Workspace

Frame: `ADM-GV-020100`, `ADM-GV-020200` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `1739:35487` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | atom-button | `Atom/Button` Type=Warning, Size=Small | `2056:24605` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | atom-input | `Atom/Input` State=CChọn, Kiểu=Chuẩn | `3994:23674` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Active | `1505:22911` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F02.05` | class-status | `CLass Status`  | `1505:22755` CLass Status | — |  |  | Chỉ có trên Figma | Figma |
| `F02.06` | global-progress-bar | `Global Progress Bar`  | `1505:22662` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F02.07` | progress-diem-danh-gia-a-f | `Progress/Điểm Đánh Giá (A-F)` Size=36x32 | `1333:11674` Progress/Điểm Đánh Giá (A-F) | — |  |  | Chỉ có trên Figma | Figma |
| `F02.08` | percent | `PERCENT %`  | `1505:22696` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F02.09` | mouse-click |  | `1333:11732` Mouse click | — |  |  | Chỉ có trên Figma | Figma |

### `F03` (ngoài Body)

Frame: `ADM-GV-020100`, `ADM-GV-020200`, `ADM-GV-020300`, `ADM-GV-020400`, `ADM-GV-020500`, `ADM-GV-020600` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:235940` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F03.02` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2008:50023` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F03.03` | time | `Time`  | `2008:48827` Time | — |  |  | Chỉ có trên Figma | Figma |
| `F03.04` | status-calendar | `STATUS CALENDAR`  | `2008:49668` STATUS CALENDAR | — |  |  | Chỉ có trên Figma | Figma |
| `F03.05` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `2200:30451` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F03.06` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Active | `1930:23305` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F03.07` | lich-giao-vien-dang-ky | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `1930:23330` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  |  | Chỉ có trên Figma | Figma |
| `F03.08` | atom-object-chip | `Atom/Object Chip` Type=System | `2409:143933` Atom/Object Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F03.09` | atom-icon-button | `Atom/Icon Button`  | `1930:23497` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F03.10` | avatar | `Avatar` Size=24 | `3641:79114` Avatar | — |  |  | Chỉ có trên Figma | Figma |

### `F04` Frame 1171274925

Frame: `ADM-GV-020500` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F04.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `1910:17262` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F04.02` | liner-icon | `Liner Icon`  | `2868:59830` Liner Icon | — |  |  | Chỉ có trên Figma | Figma |
| `F04.03` | textarea-ghi-chu | `Atom/Input` State=Textarea, Kiểu=M | `2868:59834` Textarea · Ghi chú | — |  |  | Chỉ có trên Figma | Figma |
| `F04.04` | atom-button | `Atom/Button` Type=Warning, Size=Medium | `2868:59838` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Xem chi tiết giáo viên | `Admin` được xem hồ sơ giáo viên thuộc phạm vi dữ liệu; tab mặc định là `Thông tin cá nhân` với Giới tính, Ngày sinh, Trạng thái, Ghi chú và thông tin ngân hàng; Mã giáo viên và Gmail bị khóa; không có field lương theo giờ. `Class Handler` và `Support` chỉ được truy cập tab `Danh sách lớp` theo REQ11, tab `Log` theo REQ07, tab `Quản lý đăng ký lịch` theo REQ10 và tab `Ghi chú` theo REQ08–REQ09, không được kế thừa quyền xem/cập nhật các tab khác. |
| `REQ02` | Cập nhật Thông tin cá nhân | Cho phép cập nhật ảnh, Họ tên, Giới tính, Ngày sinh, Số điện thoại, Trạng thái, Ghi chú tổng quan và thông tin ngân hàng. Không có trường cập nhật bắt buộc; dữ liệu có nhập phải đúng định dạng/ràng buộc. Ghi chú tổng quan là dữ liệu riêng, hiển thị tại danh sách giáo viên và không dùng chung với tab `Ghi chú`. |
| `REQ03` | Lấy lại mật khẩu | Nút `Lấy lại mật khẩu` reset mật khẩu đúng tài khoản giáo viên về `abc12345`, lưu theo cơ chế bảo mật, không ghi plain text vào log và hiển thị notification thành công/thất bại. |
| `REQ04` | Nghỉ việc và không xóa cứng | Khi cập nhật trạng thái `Nghỉ việc`, hệ thống khóa đăng nhập, loại giáo viên khỏi lịch đăng ký và lớp đang dạy nhưng giữ nguyên hồ sơ, dữ liệu lịch sử và log. Không cung cấp chức năng xóa cứng giáo viên. |
| `REQ05` | Lịch dạy chỉ đọc | Tab chỉ hiển thị các buổi dạy của đúng giáo viên trong tuần được chọn, không hiển thị lịch đăng ký làm việc và không cho CUD lịch. Hỗ trợ chuyển/chọn tuần (`dd.MM.yyyy`), bật `Theo lớp` để nhóm theo lớp hoặc tắt để gom theo ngày; cả hai chế độ biểu diễn cùng một tập buổi dạy. Hàng chip cạnh thanh tuần tóm tắt lịch đăng ký của giáo viên (chỉ đọc, chip của ngày hiện tại tô sáng); màu viền card theo mốc thời gian: xanh lá đã dạy, cam hôm nay, xanh dương sắp dạy. |
| `REQ06` | Notification cho thao tác thay đổi | Mọi thao tác cập nhật tài khoản, reset mật khẩu, đổi trạng thái, cập nhật lương giáo viên theo lớp, cập nhật lịch đăng ký, CUD ghi chú, đóng/mở ghi chú hoặc CUD comment phải hiển thị đúng một notification thành công/thất bại. Chỉ hiển thị thành công sau khi backend xác nhận và không đưa mật khẩu, stack trace, token hoặc thông tin kỹ thuật nhạy cảm vào nội dung. |
| `REQ07` | Log hệ thống của giáo viên | Tab Log chỉ đọc, hiển thị log do hệ thống tự ghi cho giáo viên thuộc phạm vi; mỗi log có Tiêu đề, Mô tả (có thể mở rộng / xem chi tiết), Giờ log, Ngày log, Đối tượng (`Hệ thống` hoặc người thao tác). Hỗ trợ tìm theo lớp, lọc Đối tượng và Thời gian; sắp xếp mới nhất trước, tối đa 50 log/trang. Không có API tạo, sửa, xóa log từ client. Mọi thao tác thay đổi dữ liệu thành công liên quan giáo viên phải sinh đúng một dòng log với Đối tượng là người thao tác thực tế. |
| `REQ08` | Ghi chú giáo viên | `Admin`, `Class Handler`, `Support` được tạo ghi chú và xem ghi chú `Công khai` đang `Mới` trong phạm vi. Ghi chú `Riêng tư` và mọi ghi chú `Đóng` chỉ owner được xem. Owner được sửa, xóa, đóng/mở ghi chú của mình. Hỗ trợ các bộ lọc Loại, Độ ưu tiên, Trạng thái và Thời gian tạo; Thời gian mặc định là `Hôm nay`, `Tới hạn` lấy từ đầu hệ thống đến hết hôm nay. Danh sách phân trang tối đa 50 ghi chú người dùng được phép xem/trang và không được làm lộ số lượng dữ liệu ngoài quyền. |
| `REQ09` | Bình luận ghi chú | Người có quyền xem ghi chú đang `Mới` được comment. Ghi chú `Đóng` không cho bất kỳ thao tác comment nào. Chỉ người tạo comment được sửa/xóa comment của mình; owner ghi chú không được sửa/xóa comment của người khác. Ghi chú, comment và metadata comment cuối phải hiển thị đúng người cùng ngày, tháng, năm, thời gian. |
| `REQ10` | Quản lý đăng ký lịch | `Admin`, `Class Handler`, `Support` được xem và cập nhật lịch đăng ký của giáo viên thuộc phạm vi. Lưới gồm 3 buổi (`Sáng 07h30 - 12h00`, `Chiều 14h00 - 18h00`, `Tối 18h00 - 23h00`) × Thứ 2–Chủ Nhật; tick ô mở popup `Đăng ký khung giờ` (mốc 30 phút trong khung buổi, ghi chú ô); `Fulltime` chọn thêm ô trống bằng giờ trọn buổi, giữ giờ/ghi chú ô đã đăng ký; chủ động bỏ Fulltime bỏ chọn toàn bộ ô trong nháp, chỉ Cập nhật mới lưu; Fulltime tự bỏ tick do gỡ một ô riêng không gỡ các ô còn lại; có ghi chú chung. Bỏ ca đăng ký đang có lịch dạy vẫn cho lưu bình thường, không cảnh báo/chặn và không thay đổi lịch dạy đã xếp. 1 ô buổi đã tick = 1 ca ở danh sách giáo viên. Cập nhật lưu atomically toàn bộ lưới, áp dụng cùng validation/quy tắc với phía giáo viên, cập nhật dữ liệu danh sách và chip ở tab Lịch dạy, ghi nhận đúng actor thực tế và sinh log. |
| `REQ11` | Danh sách lớp và lương giáo viên theo lớp | Tab chỉ hiển thị các lớp đã thêm giáo viên đang xem, gồm Trạng thái lớp, Mã lớp, Khóa học, Đánh giá lớp, KPI là tỷ lệ lên kỳ của lớp và cột `LƯƠNG/GIỜ`. Lương là dữ liệu riêng của quan hệ giáo viên–lớp, đơn vị VNĐ/giờ, là số nguyên không âm và cho phép `0`; hiển thị bằng nút màu cam dạng `200.000 đ` kèm icon bút. `Admin`, `Class Handler`, `Support` click nút để mở popup `Chỉnh Sửa Lương`, trong đó có đúng Mã lớp, giá trị hiện tại, tiền tệ VNĐ, đơn vị Giờ, `Hủy` và `Xác Nhận`. Hỗ trợ tìm theo Mã lớp/Tên khóa học, filter Loại lớp, Khóa học cấu hình, đủ tám Trạng thái lớp và Thời gian tạo lớp với cùng danh sách khoảng thời gian của tab Ghi chú; danh sách phân trang tối đa 50 lớp/trang. |
| `EX01` | Ngoại lệ | Giáo viên không tồn tại hoặc không còn thuộc phạm vi của người dùng hiện tại → từ chối hiển thị, không dùng dữ liệu của giáo viên khác thay thế. |
| `EX02` | Ngoại lệ | Tải chi tiết thất bại hoặc hết thời gian chờ → hiển thị lỗi và cho phép thử lại; không hiển thị form với dữ liệu cũ như dữ liệu hiện tại. |
| `EX03` | Ngoại lệ | Số điện thoại sai định dạng hoặc ảnh đại diện lớn hơn 25 MB → không gửi/lưu dữ liệu không hợp lệ, hiển thị lỗi tại trường và notification thất bại. |
| `EX04` | Ngoại lệ | Cập nhật Thông tin cá nhân hoặc reset mật khẩu thất bại → không hiển thị thành công giả; dữ liệu đã lưu trước đó và mật khẩu cũ không bị thay đổi. |
| `EX05` | Ngoại lệ | Client gửi yêu cầu sửa Mã giáo viên hoặc Email → backend bỏ qua hoặc từ chối thay đổi và giữ nguyên hai giá trị đã khóa. |
| `EX06` | Ngoại lệ | Admin chuyển tab hoặc quay lại khi có thay đổi chưa lưu → hiển thị cảnh báo; chỉ rời màn hình sau khi Admin xác nhận bỏ thay đổi. |
| `EX07` | Ngoại lệ | Giáo viên không có buổi dạy trong tuần được chọn → hiển thị lưới trống (ô nét đứt) đúng theo chế độ; không tái sử dụng dữ liệu tuần hoặc giáo viên khác. |
| `EX08` | Ngoại lệ | Tải lịch dạy thất bại hoặc hết thời gian chờ → hiển thị lỗi và cho phép thử lại; không dùng lịch đăng ký hoặc dữ liệu cũ thay thế. |
| `EX09` | Ngoại lệ | Admin đổi tuần/chế độ khi request cũ chưa hoàn tất → chỉ response của điều kiện mới nhất được phép cập nhật lịch. |
| `EX10` | Ngoại lệ | Client gửi request tạo, sửa hoặc xóa log → backend từ chối; log là dữ liệu bất biến và không thay đổi. |
| `EX11` | Ngoại lệ | Không có log phù hợp với từ khóa, Đối tượng hoặc Thời gian đang chọn → hiển thị trạng thái không có dữ liệu và giữ điều kiện để chỉnh sửa. |
| `EX12` | Ngoại lệ | Ghi log thất bại sau một thao tác thành công → không làm thất bại thao tác chính; hệ thống ghi nhận lỗi để đồng bộ log sau, không hiển thị thành công giả cho log. |
| `EX13` | Ngoại lệ | Tải danh sách/trang log thất bại hoặc response của trang cũ trả về sau → hiển thị lỗi và cho phép thử lại, chỉ nhận response của trang mới nhất; không coi lỗi là danh sách rỗng và không hiển thị dữ liệu của giáo viên khác. |
| `EX14` | Ngoại lệ | Người dùng không phải owner truy cập ghi chú `Riêng tư` hoặc ghi chú `Đóng` bằng danh sách, filter hay ID trực tiếp → không trả nội dung hoặc metadata của ghi chú. |
| `EX15` | Ngoại lệ | Nội dung ghi chú hoặc Nội dung comment rỗng/chỉ có khoảng trắng → từ chối tạo/cập nhật, hiển thị lỗi validation và notification thất bại; Tiêu đề được phép trống. |
| `EX16` | Ngoại lệ | Người không phải owner gửi request cập nhật, xóa, đóng hoặc mở ghi chú → backend từ chối và giữ nguyên dữ liệu. |
| `EX17` | Ngoại lệ | Người dùng gửi request sửa/xóa comment do người khác tạo, kể cả khi là owner ghi chú → backend từ chối và giữ nguyên comment. |
| `EX18` | Ngoại lệ | Có request tạo/sửa/xóa comment khi ghi chú đang `Đóng` → backend từ chối; owner phải mở lại ghi chú trước. |
| `EX19` | Ngoại lệ | Tải danh sách/trang ghi chú thất bại → hiển thị lỗi và cho phép thử lại; không coi lỗi là danh sách rỗng và không dùng dữ liệu cũ/ngoài quyền thay thế. |
| `EX20` | Ngoại lệ | Người dùng thay đổi trang hoặc filter khi request cũ chưa hoàn tất → chỉ response của trang và tổ hợp filter mới nhất được phép cập nhật danh sách. |
| `EX21` | Ngoại lệ | Khung giờ trong popup trống, ngoài khung buổi hoặc giờ kết thúc không lớn hơn giờ bắt đầu → không lưu ô; tải/cập nhật lịch đăng ký thất bại, hết thời gian chờ hoặc người dùng xác nhận lặp → không lưu lịch một phần/trùng request, giữ dữ liệu chính thức cũ và hiển thị đúng một notification thất bại. |
| `EX22` | Ngoại lệ | Lịch đăng ký đã được giáo viên hoặc người quản lý khác cập nhật sau khi màn hình tải → không âm thầm ghi đè; xử lý xung đột theo cùng cơ chế của chức năng phía giáo viên. |
| `EX23` | Ngoại lệ | Lương giáo viên theo lớp là số âm, số thập phân hoặc không phải số → từ chối cập nhật, giữ giá trị đã lưu và hiển thị lỗi tại trường cùng notification thất bại; số nguyên `0` là hợp lệ. |
| `EX24` | Ngoại lệ | Role không thuộc `Admin`, `Class Handler`, `Support`, người dùng ngoài phạm vi hoặc quan hệ giáo viên–lớp không tồn tại gửi request cập nhật lương → backend từ chối và không thay đổi dữ liệu. |
| `EX25` | Ngoại lệ | Tải/tìm/lọc/chuyển trang Danh sách lớp thất bại, hết thời gian chờ hoặc request cũ trả về sau → hiển thị lỗi có thể thử lại và chỉ nhận response của trang, từ khóa và tổ hợp filter mới nhất; không coi lỗi là danh sách rỗng. |
| `EX26` | Ngoại lệ | Cập nhật lương thất bại hoặc người dùng xác nhận lặp khi request đang xử lý → không tạo nhiều lần cập nhật, giữ lương chính thức cũ và hiển thị đúng một notification thất bại. |
| `EX27` | Ngoại lệ | Lương của quan hệ giáo viên–lớp đã được người khác cập nhật sau khi dòng dữ liệu được tải → không âm thầm ghi đè; thông báo xung đột và yêu cầu tải lại theo cơ chế kiểm soát phiên bản. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở đúng chi tiết giáo viên | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Từ chối giáo viên không còn hợp lệ | High |  | EX01 / REQ01 | `A01` |  |
| `TC72` | Case 72: Từ chối role không có quyền | High |  | EX01 / Ràng buộc quyền | `A01` |  |
| `TC74` | Case 74: Notification khi thao tác thành công | High |  | REQ06 | `A01` |  |
| `TC75` | Case 75: Notification khi thao tác thất bại | High |  | REQ06 | `A01` |  |
| `TC03` | Case 3: Hiển thị Thông tin cá nhân | High |  | Flow 1 / REQ01 | `A02` | `A02.02`, `A02.03`, `A02.05`, `A02.06`, `A02.08`, `A02.09`, `A02.10` |
| `TC04` | Case 4: Cập nhật khi không có trường bắt buộc | High | Có | Flow 2 / REQ02 / REQ06 | `A02` | `A02.02`, `A02.14` |
| `TC05` | Case 5: Validation số điện thoại khi cập nhật | High |  | EX03 / REQ02 | `A02` | `A02.07`, `A02.14` |
| `TC06` | Case 6: Cập nhật thông tin ngân hàng và viết hoa tên chủ tài khoản | Medium |  | Flow 2 / REQ02 | `A02` | `A02.04`, `A02.10`, `A02.12` |
| `TC07` | Case 7: Cập nhật ghi chú tổng quan | High |  | Flow 2 / REQ02 | `A02` | `A02.09` |
| `TC08` | Case 8: Validation ảnh đại diện tối đa 25 MB | High |  | EX03 / REQ02 | `A02` | `A02.01` |
| `TC09` | Case 9: Lấy lại mật khẩu mặc định | High |  | Flow 3 / REQ03 / REQ06 | `A02` | `A02.13` |
| `TC10` | Case 10: Chuyển giáo viên sang Nghỉ việc | High | Có | Flow 4 / REQ04 / REQ06 | `A02` | `A02.08` |
| `TC11` | Case 11: Cảnh báo khi rời màn hình có thay đổi chưa lưu | High |  | EX06 / REQ02 | `A02` | `A02.08` |
| `TC12` | Case 12: Chỉ hiển thị lớp đã thêm giáo viên | High | Có | Flow 10 / REQ11 | `A03` |  |
| `TC13` | Case 13: Hiển thị đủ thông tin của từng lớp | High |  | Flow 10 / REQ11 | `A03` | `A03.03`, `A03.04`, `A03.05`, `A03.10` |
| `TC14` | Case 14: Đánh giá lớp độc lập với KPI | Medium |  | REQ11 | `A03` | `A03.05` |
| `TC15` | Case 15: Tính KPI lớp theo tỷ lệ lên kỳ | High |  | REQ11 | `A03` | `A03.06` |
| `TC16` | Case 16: KPI lớp không có mẫu số hợp lệ | High |  | REQ11 | `A03` |  |
| `TC17` | Case 17: Lương được lưu và hiển thị riêng theo quan hệ giáo viên–lớp | High |  | Flow 10 / REQ11 | `A03` |  |
| `TC18` | Case 18: Mở popup và cập nhật lương đúng lớp | High |  | Flow 10 / REQ11 / REQ06 | `A03` | `A03.03` |
| `TC19` | Case 19: Hủy chỉnh sửa lương | High |  | REQ11 | `A03` |  |
| `TC20` | Case 20: Validation lương VNĐ không âm | High |  | EX23 / REQ11 / REQ06 | `A03` |  |
| `TC21` | Case 21: Kiểm tra quyền cập nhật lương | High |  | EX24 / REQ11 | `A03` |  |
| `TC22` | Case 22: Tìm kiếm lớp học | High |  | Flow 10 / REQ11 | `A03` | `A03.01`, `A03.03`, `A03.04`, `A03.10` |
| `TC23` | Case 23: Lọc theo Loại lớp, Khóa học và Trạng thái | High |  | Flow 10 / REQ11 | `A03` | `A03.04`, `A03.09`, `A03.10` |
| `TC24` | Case 24: Filter thời gian mặc định Hôm nay | High |  | Flow 10 / REQ11 | `A03` | `A03.12` |
| `TC25` | Case 25: Filter Tới hạn và các khoảng định sẵn | High |  | Flow 10 / REQ11 | `A03` | `A03.12` |
| `TC26` | Case 26: Filter thời gian Tùy chọn và kết hợp filter | High |  | Flow 10 / REQ11 | `A03` |  |
| `TC27` | Case 27: Phân trang Danh sách lớp | High |  | Flow 10 / REQ11 | `A03` |  |
| `TC28` | Case 28: Tải danh sách hoặc cập nhật lương thất bại/xung đột | High |  | EX25 / EX26 / EX27 / REQ11 / REQ06 | `A03` |  |
| `TC29` | Case 29: Mở tab Lịch dạy | High | Có | Flow 5 / REQ05 | `A04` |  |
| `TC30` | Case 30: Chuyển và chọn tuần | High |  | Flow 5 / REQ05 | `A04` |  |
| `TC31` | Case 31: Hiển thị lịch Theo Lớp | High |  | Flow 5 / REQ05 | `A04` |  |
| `TC32` | Case 32: Hiển thị lịch theo ngày | High |  | Flow 5 / REQ05 | `A04` |  |
| `TC33` | Case 33: Đổi chế độ không làm thay đổi dữ liệu | High |  | Flow 5 / REQ05 | `A04` |  |
| `TC34` | Case 34: Giáo viên không có lịch dạy trong tuần | Medium |  | EX07 / REQ05 | `A04` |  |
| `TC35` | Case 35: Tải lịch dạy thất bại | High |  | EX08 / REQ05 | `A04` |  |
| `TC36a` | Case 36a: Chip tóm tắt lịch đăng ký | Medium |  | Flow 5 / REQ05 | `A04` |  |
| `TC36b` | Case 36b: Màu card theo mốc thời gian | Medium |  | REQ05 | `A04` |  |
| `TC36` | Case 36: Chỉ nhận dữ liệu lịch của request mới nhất | High |  | EX09 / REQ05 | `A04` |  |
| `TC73` | Case 73: Không cho CUD tại tab Lịch dạy | High |  | REQ05 / Ràng buộc quyền | `A04` |  |
| `TC37` | Case 37: Hiển thị log đúng giáo viên | High | Có | Flow 6 / REQ07 | `A05` | `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06` |
| `TC38` | Case 38: Tự ghi log khi thao tác thành công | High |  | Flow 6 / REQ07 | `A05` | `A05.03`, `A05.05`, `A05.06` |
| `TC39` | Case 39: Log của Hệ thống | Medium |  | Flow 6 / REQ07 | `A05` | `A05.05` |
| `TC40` | Case 40: Mở rộng mô tả dài và Xem chi tiết | Medium |  | REQ07 | `A05` | `A05.06` |
| `TC41` | Case 41: Không cho tạo, sửa, xóa log | High |  | EX10 / REQ07 | `A05` | `A05.06` |
| `TC42` | Case 42: Lọc theo Đối tượng | High |  | Flow 6 / REQ07 | `A05` | `A05.05` |
| `TC43` | Case 43: Lọc theo Thời gian và tìm theo lớp | High |  | Flow 6 / REQ07 | `A05` | `A05.03` |
| `TC44` | Case 44: Tải danh sách log thất bại | High |  | EX13 / REQ07 | `A05` | `A05.03` |
| `TC45` | Case 45: Phân trang danh sách log | High |  | Flow 6 / REQ07 | `A05` |  |
| `TC46` | Case 46: Hiển thị đúng lịch giáo viên đã đăng ký | High | Có | Flow 9 / REQ10 | `A06` | `A06.01` |
| `TC47` | Case 47: Đăng ký buổi mới qua popup | High |  | Flow 9 / REQ10 / REQ06 | `A06` | `A06.06`, `A06.08` |
| `TC48` | Case 48: Validation khung giờ trong popup | High |  | EX21 / REQ10 | `A06` |  |
| `TC49` | Case 49: Fulltime | High |  | Flow 9 / REQ10 | `A06` | `A06.01`, `A06.08` |
| `TC49a` | Case 49a: Chủ động bỏ tick Fulltime | High |  | Flow 9 / REQ10 | `A06` | `A06.01`, `A06.08` |
| `TC50` | Case 50: Gỡ đăng ký và cập nhật | High |  | Flow 9 / REQ10 / REQ06 | `A06` | `A06.08` |
| `TC51` | Case 51: Ghi nhận đúng người thao tác thay | High |  | REQ10 | `A06` | `A06.08` |
| `TC52` | Case 52: Cập nhật thất bại hoặc xác nhận lặp | High |  | EX21 / REQ10 / REQ06 | `A06` | `A06.08` |
| `TC52a` | Case 52a: Xử lý cập nhật đồng thời | High |  | EX22 / REQ10 | `A06` |  |
| `TC53` | Case 53: Xem ghi chú Công khai đang Mới | High | Có | Flow 7 / REQ08 | `A07` | `A07.02`, `A07.03`, `A07.04`, `A07.06`, `A07.09`, `A07.16`, `A07.19` |
| `TC54` | Case 54: Bảo vệ ghi chú Riêng tư | High |  | EX14 / REQ08 | `A07` | `A07.09` |
| `TC55` | Case 55: Ghi chú Đóng chỉ owner được xem và mở lại | High |  | Flow 7 / REQ08 | `A07` | `A07.04`, `A07.06`, `A07.09`, `A07.16` |
| `TC56` | Case 56: Tạo ghi chú bằng ô gõ nhanh | High |  | Flow 7 / REQ08 / REQ06 | `A07` | `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A07.06`, `A07.09`, `A07.16`, `A07.17` |
| `TC57` | Case 57: Validation nội dung ghi chú và comment | High |  | EX15 / REQ08 / REQ09 | `A07` | `A07.01`, `A07.03` |
| `TC58` | Case 58: Owner cập nhật ghi chú | High |  | Flow 7 / REQ08 / REQ06 | `A07` | `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A07.06`, `A07.09`, `A07.16`, `A07.17`, `A07.19` |
| `TC59` | Case 59: Owner xóa ghi chú | High |  | Flow 7 / REQ08 / REQ06 | `A07` | `A07.09` |
| `TC60` | Case 60: Người khác không được quản lý ghi chú | High |  | EX16 / REQ08 | `A07` | `A07.09` |
| `TC61` | Case 61: Thêm comment vào ghi chú đang Mới | High |  | Flow 8 / REQ09 / REQ06 | `A07` | `A07.19` |
| `TC62` | Case 62: Người comment sửa/xóa comment của mình | High |  | Flow 8 / REQ09 / REQ06 | `A07` |  |
| `TC63` | Case 63: Owner ghi chú không được xóa comment người khác | High |  | EX17 / REQ09 | `A07` | `A07.09` |
| `TC64` | Case 64: Ghi chú Đóng chặn mọi thao tác comment | High |  | EX18 / REQ09 | `A07` | `A07.09` |
| `TC65` | Case 65: Hiển thị người và thời gian đầy đủ | High |  | REQ08 / REQ09 | `A07` | `A07.09` |
| `TC66` | Case 66: Lọc theo Loại, Độ ưu tiên và Trạng thái | High |  | Flow 7 / REQ08 | `A07` |  |
| `TC67` | Case 67: Filter thời gian mặc định Hôm nay | High |  | Flow 7 / REQ08 | `A07` | `A07.19`, `A07.21` |
| `TC68` | Case 68: Filter Tới hạn và các khoảng thời gian định sẵn | High |  | Flow 7 / REQ08 | `A07` | `A07.19`, `A07.20`, `A07.21`, `A07.22`, `A07.23`, `A07.27`, `A07.28` |
| `TC69` | Case 69: Filter thời gian Tùy chọn | High |  | Flow 7 / REQ08 | `A07` | `A07.31` |
| `TC70` | Case 70: Tải hoặc thay đổi bộ lọc thất bại | High |  | EX19 / EX20 / REQ08 | `A07` |  |
| `TC71` | Case 71: Phân trang danh sách ghi chú | High |  | Flow 7 / REQ08 | `A07` | `A07.15` |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A08` | `A08.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A08` | `A08.01`, `A08.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A08` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A08` | `A08.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (79): `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A02.08`, `A02.09`, `A02.10`, `A02.11`, `A02.12`, `A02.13`, `A02.14`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A03.08`, `A03.09`, `A03.10`, `A03.11`, `A03.12`, `A04.01`, `A04.02`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A05.07`, `A05.08`, `A06.01`, `A06.02`, `A06.03`, `A06.04`, `A06.05`, `A06.06`, `A06.07`, `A06.08`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A07.06`, `A07.07`, `A07.08`, `A07.09`, `A07.10`, `A07.11`, `A07.12`, `A07.13`, `A07.14`, `A07.15`, `A07.16`, `A07.17`, `A07.18`, `A07.19`, `A07.20`, `A07.21`, `A07.22`, `A07.23`, `A07.24`, `A07.25`, `A07.26`, `A07.27`, `A07.28`, `A07.29`, `A07.30`, `A07.31`, `A08.01`, `A08.02`, `A08.03`, `A08.04`
- Frame Figma chưa có requirement (3): `ADM-GV-020210`, `ADM-GV-020309`, `ADM-GV-020520`
- Thiếu prototype link đi vào (3): `ADM-GV-020210`, `ADM-GV-020309`, `ADM-GV-020520`
- Phân loại cần design duyệt (1): `ADM-GV-020309`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (5): `EX02`, `EX04`, `EX05`, `EX11`, `EX12`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
