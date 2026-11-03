# Đồng bộ tên và mã trên Figma

> Soát tự động (chỉ đọc) từ file Figma lúc 2026-11-03 11:25. Chỉ đổi **tên frame**, không đổi nội dung màn. Chưa đổi gì; cần design duyệt từng nhóm.

## 1. Bản tối thiếu hậu tố `-DK`

Hai frame cùng mã, cùng tên; một frame nền tối. Đề xuất thêm `-DK` vào mã của frame nền tối.

| Mã hiện tại | Tên frame | Frame nền tối | Đổi thành | Ghi chú |
|---|---|---|---|---|
| `ADM-GV-010050` | Danh sách giáo viên / Popup danh sách lịch hẹn | `4056:124472` | `ADM-GV-010050-DK` |  |
| `ADM-GV-020500` | Chi tiết giáo viên / Quản lý đăng ký lịch | `4056:126142` | `ADM-GV-020500-DK` |  |
| `ADM-GV-020520` | Chi tiết giáo viên / Quản lý đăng ký lịch / Popup đăng ký kh | `4056:126935` | `ADM-GV-020520-DK` |  |
| `ADM-HV-010012` | Danh sách học viên / Popup thêm học viên / Dropdown cấp độ | `4056:119964` | `ADM-HV-010012-DK` |  |
| `ADM-HV-010102` | Danh sách học viên / Dropdown · Trạng thái | `4056:119958` | `ADM-HV-010102-DK` |  |
| `ADM-HV-010202` | Danh sách học viên / Dropdown · Tag | `4056:119961` | `ADM-HV-010202-DK` |  |
| `ADM-LOP-010002` | Danh sách lớp học / Dropdown chọn nhân sự (đang mở) | `4056:108239` | `ADM-LOP-010002-DK` |  |
| `ADM-LOP-050406` | Lớp học / Nhật ký / Tin nhắn / Popup xác nhận xoá | `4056:119524` | `ADM-LOP-050406-DK` |  |
| `ADM-LOP-050407` | Lớp học / Nhật ký / Tin nhắn / Popup xác nhận gửi | `4056:119527` | `ADM-LOP-050407-DK` |  |
| `ADM-MV-020020` | Move video / Danh sách video / Popup xác nhận xoá | `4056:130783` | `ADM-MV-020020-DK` |  |
| `ADM-SS-010020` | Ship sách / Popup xác nhận xoá đơn sách | `4056:139330` | `ADM-SS-010020-DK` |  |
| `CD-DM-010057` | Quản lý danh mục / Popup danh mục & cấp độ / Quản lý danh mụ | `4056:145782` | `CD-DM-010057-DK` |  |
| `MST-TK-010010` | Tài khoản / Popup thêm tài khoản | `4056:138798` | `MST-TK-010010-DK` |  |
| `MST-TK-010020` | Tài khoản / Danh sách tài khoản / Popup xác nhận xoá | `4056:137793` | `MST-TK-010020-DK` |  |
| `MST-TK-010030` | Tài khoản / Danh sách tài khoản / Popup đặt lại mật khẩu | `4056:137797` | `MST-TK-010030-DK` |  |
| `SP-TASK-030002` | Quy trình / Ca trực / Dropdown thời gian (đang mở) | `4056:147490` | `SP-TASK-030002-DK` |  |
| `SP-TASK-030003` | Quy trình / Ca trực / Lịch chọn ngày (đang mở) | `4056:147493` | `SP-TASK-030003-DK` |  |
| `SP-TASK-030004` | Quy trình / Ca trực / Dropdown ca (đang mở) | `4056:147495` | `SP-TASK-030004-DK` |  |
| `SP-TASK-030010` | Quy trình / Ca trực / Dialog người phụ trách | `4056:147422` | `SP-TASK-030010-DK` |  |

## 2. Màn khác nhau dùng chung một mã

Frame thứ hai là màn hoặc trạng thái khác nhưng trùng mã với màn chính. Đề xuất cấp mã con còn trống cùng nhóm (4 số đầu giống màn cha); bản tối đổi theo.

| Mã hiện tại | Màn giữ mã | Frame cần mã mới | Đề xuất mã mới | Bản tối đi kèm |
|---|---|---|---|---|
| `ADM-GC-010000` | Ghi chú / Danh sách ghi chú | Gift code / Danh sách gift code (`3857:85663`) | `ADM-GC-010002` | `4056:130074` → `ADM-GC-010002-DK` |
| `ADM-LOP-020100` | Chi tiết lớp học / Tổng quan | Chi tiết lớp học / Tổng quan > chi tiết (`3304:60340`) | `ADM-LOP-020101` | `4056:110282` → `ADM-LOP-020101-DK` |
| `ADM-LOP-040210` | Lớp học / Tổng quan / Popup lịch sử ghi chú | Lớp học / Cài đặt / Học viên / Popup lịch sử ghi c (`2409:147699`) | `ADM-LOP-040211` | `4056:116535` → `ADM-LOP-040211-DK` |
| `CH-TC-010000` | Trang chủ / Thống kê tổng quan | Trang chủ / Thống kê theo tháng (`7015:11855`) | `CH-TC-010003` | `7015:15905` → `CH-TC-010003-DK` |
| `SP-LHP-010000` | Lịch họp / Dạng danh sách | Lịch họp / Dropdown lọc · Người tham gia (`6935:383654`) | `SP-LHP-010001` | `6935:385966` → `SP-LHP-010001-DK` |
| `SP-LHP-010000` | Lịch họp / Dạng danh sách | Lịch họp / Dropdown lọc · Trạng thái (`6935:384441`) | `SP-LHP-010002` | `6935:386526` → `SP-LHP-010002-DK` |
| `SP-LHP-010000` | Lịch họp / Dạng danh sách | Lịch họp / Dropdown lọc · Thời gian (`6935:385207`) | `SP-LHP-010003` | `6935:387065` → `SP-LHP-010003-DK` |
| `SP-TASK-010000` | Quy trình / Task hôm nay | Quy trình / Task hôm nay · Đã chọn thêm người (`6935:389124`) | `SP-TASK-010001` | `6935:389954` → `SP-TASK-010001-DK` |
| `SP-TASK-020000` | Quy trình / Task tuần này | Quy trình / Task tuần này · Đã chọn thêm người (`6935:390606`) | `SP-TASK-020001` | `6935:391338` → `SP-TASK-020001-DK` |
| `SP-TASK-030000` | Quy trình / Ca trực | Quy trình / Ca trực · Đã chọn thêm người (`6935:391842`) | `SP-TASK-030001` | `6935:392683` → `SP-TASK-030001-DK` |

**Riêng `ADM-GC`:** *Ghi chú* và *Gift code* là hai module khác nhau nhưng dùng chung họ mã `ADM-GC` (trùng cả `ADM-GC-010000`). Bảng trên đề xuất cấp mã con cho Gift code; cách sạch hơn là đổi cả họ mã Gift code sang tiền tố riêng (ví dụ `ADM-GFT`), cần design chọn.

## 3. Bản tối khác tên bản sáng

| Mã | Tên bản sáng | Tên bản tối |
|---|---|---|
| `ADM-GKS-020030-DK` | Khảo sát / Giao khảo sát lớp / Popup kết quả cả lớp | Khảo sát / Giao khảo sát lớp / Popup kết quả từng học viên |
| `ADM-GKS-030030-DK` | Khảo sát / Giao khảo sát học viên / Popup kết quả cả trung tâm | Khảo sát / Giao khảo sát học viên / Popup kết quả cá nhân |

Có thể frame tối đang mang nhầm mã của một popup khác; design xem lại.

## 4. Frame cỡ màn hình chưa có mã

88 frame (ngoài trang Navigation, Component System, Note). Phần lớn ở trang đăng nhập (bản cũ, phương án thử). Design cho biết frame nào là màn thật để cấp mã.

| Trang | Số frame |
|---|---:|
| 🚪  LOG IN · COLOR THEME · | 56 |
| ├─ KPI | 6 |
| ├─ THỐNG KÊ | 6 |
| ✹  MASTER | 4 |
| ├─ QUẢN LÝ TÀI KH | 4 |
| ├─ TRANG CHỦ | 2 |
| ├─ GHI CHÚ | 2 |
| ├─ LỊCH HẸN | 2 |
| ├─ Lớp học | 2 |
| ├─ Học viên | 2 |
| ├─ Giáo viên | 2 |

## 5. Khác

- `[CŨ] GV-TC-010000 (bản sao lạ)` ở trang Trang chủ: bản sao cũ, nên xoá hoặc chuyển ra trang lưu trữ.
- Trang Component System còn bản sao màn có mã (`Bản sao · ADM-LOP-010000`, …). Tool đã bỏ qua trang này, không cần đổi.
