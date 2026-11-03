# Đồng bộ tên và mã trên Figma

> Soát tự động (chỉ đọc) từ file Figma lúc 2026-11-03 11:25. Chỉ đổi **tên frame**, không đổi nội dung màn. Chưa đổi gì; cần design duyệt từng nhóm.

## 1. Bản tối thiếu hậu tố `-DK`

Hai frame cùng mã, cùng tên; một frame nền tối. Đề xuất thêm `-DK` vào mã của frame nền tối.

**Đã làm 2026-11-03:** đổi tên cả 19 frame dưới đây (chỉ tên, không đổi nội dung); REST xác nhận 19/19. Phiên bản Figma trước khi đổi: *"Trước khi đổi tên 19 bản tối thiếu -DK"*.

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

**Đã làm 2026-11-03:** 9 màn + 9 bản tối (18 frame, chỉ đổi mã trong tên); REST xác nhận 18/18. Phiên bản Figma trước khi đổi: *"Trước khi cấp mã mới cho 9 màn trùng mã"*. Khác bảng dưới một chỗ: popup *Tổng quan / Lịch sử ghi chú* nhận `ADM-LOP-020110` (họ `0201xx` của Tổng quan) thay vì `ADM-LOP-040211`; popup ở Cài đặt giữ `ADM-LOP-040210`. **Gift code (làm sau, cùng ngày):** cả module đổi họ mã `ADM-GC` → `ADM-GFT`, giữ nguyên số: `ADM-GFT-010000`, `010001`, `010010`, `010020` và bản tối (7 frame); `ADM-GC` giờ chỉ còn Ghi chú. REST xác nhận. Phiên bản Figma trước khi đổi: *"Trước khi đổi họ mã Gift code sang ADM-GFT"*.

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

## Kế hoạch nhóm 3 và 4 (2026-11-03)

Nguyên tắc: chỉ đổi **tên** frame, không đổi nội dung màn; mỗi đợt đổi trên Figma đều lưu phiên bản trước và kiểm lại qua REST; design duyệt danh sách trước khi đổi.

### Nhóm 3 — 2 bản tối khác tên bản sáng

| Mã | Bản sáng | Bản tối |
|---|---|---|
| `ADM-GKS-020030` | Popup kết quả cả lớp | Popup kết quả từng học viên |
| `ADM-GKS-030030` | Popup kết quả cả trung tâm | Popup kết quả cá nhân |

1. Tool so chữ và bố cục của hai frame (chỉ đọc).
2. Nếu cùng một popup, chỉ khác tên → đổi tên bản tối cho giống bản sáng.
3. Nếu là popup khác → bản tối cần mã riêng (popup "kết quả từng học viên / cá nhân") và có thể còn thiếu bản sáng; design quyết.

### Nhóm 4 — 88 frame cỡ màn hình chưa có mã

Phân loại sơ bộ theo tên:

| Loại | Số frame | Đề xuất |
|---|---:|---|
| Thành phần, không phải màn (`BG`, `Flash Screen`, `Body`, `Frame 4273…`) | ~30 | Không cấp mã; tool bỏ qua khi soát |
| Nháp / bản cũ / bản sao (`· bản cũ`, `Phương án 1`, `_Bản sao / …`) | ~23 | Không cấp mã; đề xuất chuyển sang trang lưu trữ (design quyết) |
| Màn Đăng nhập thật (trang LOG IN) | ~14 | Cấp đúng mã dự kiến `SYS-DN-…` đã ghi trong requirement Đăng nhập → khớp 1:1 ngay |
| "Dùng lại UI trang … (Admin)" ở các trang Phụ trách lớp | ~10 | Không phải màn riêng; ghi vào registry là dùng chung màn `ADM-…` tương ứng |
| Màn Phụ trách lớp: KPI, Thống kê, Trang chủ | ~11 | Cấp mã họ `CH-…` (vd `CH-KPI-010000`, `CH-TK-010000`) sau khi design xác nhận là màn thật |

Các bước:
1. **Tool lập bảng đề xuất** (chỉ đọc): từng frame, loại, mã đề xuất, ảnh nhỏ để design xem nhanh.
2. **Design duyệt** bảng, giống lần duyệt 70 mã.
3. **Đổi tên trên Figma** cho các frame được cấp mã (lưu phiên bản trước, REST kiểm 100%).
4. **Đồng bộ**: thêm vào danh sách màn, xuất, sinh code, check; cập nhật registry và tiêu đề Trang của requirement.
5. **Giữ sạch về sau**: báo trong luồng Google Chat `figma-ICS` khi có frame cỡ màn hình mới chưa có mã hoặc trùng mã.

## Kết quả nhóm 3 và 4 (2026-11-03)

**Nhóm 3 — xong.** Hai frame `-DK` không phải bản tối của popup cùng mã mà là popup khác (kết quả của một học viên):
- `ADM-GKS-020030-DK` "Popup kết quả từng học viên" → `ADM-GKS-020031-DK`
- `ADM-GKS-030030-DK` "Popup kết quả cá nhân" → `ADM-GKS-030031-DK`

Design cần bổ sung: bản sáng của 2 popup này, và bản tối của `ADM-GKS-020030` (kết quả cả lớp), `ADM-GKS-030030` (kết quả cả trung tâm).

**Nhóm 4 — trên Figma hiện còn 53 frame cỡ màn hình chưa có mã** (88 lúc soát gồm cả frame con trong màn):

| Loại | Số | Xử lý |
|---|---:|---|
| KPI, Thống kê (Phụ trách lớp), sáng + tối | 4 | **Đã cấp mã** `CH-KPI-010000(-DK)`, `CH-TK-010000(-DK)`; requirement Thống kê nối vào `CH-TK-010000` |
| "Dùng lại UI trang … (Admin / Phụ trách lớp)" | 25 | Trang giữ chỗ, không phải màn riêng; không cấp mã |
| "_Bản sao / Tài khoản / Danh sách tài khoản" | 4 | Bản sao; không cấp mã |
| Đăng nhập: Phương án 1–6, các Option, Màn chờ bản cũ | 16 | Đang là phương án thiết kế; cấp mã `SYS-DN-010000` cho phương án được chốt |
| Đăng nhập: Đổi tài khoản (3 bản), Lần đầu đăng nhập · Chọn màu giao diện | 4 | Cấp mã `SYS-DN-…` cùng lúc chốt phương án |

Mỗi đợt đổi trên Figma đều lưu phiên bản trước ("Trước khi đổi mã 2 popup kết quả cá nhân", "Trước khi cấp mã KPI và Thống kê (Phụ trách lớp)") và đã kiểm lại qua REST.
