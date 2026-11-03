# Báo lỗi & Góp ý

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-GY-010000` | Góp ý / Học viên | `/gop-y/hoc-vien` | `ADM-GY-010000-DK` | QC |
| `CD-BL-010000` | Báo lỗi / Danh sách báo lỗi | `/bao-loi/danh-sach-bao-loi` | — | QC |
| `CH-BL-010000` | Báo lỗi / Danh sách báo lỗi | `/bao-loi/danh-sach-bao-loi-ch-bl-010000` | — | QC |
| `GV-BL-010000` | Báo lỗi / Danh sách báo lỗi | `/bao-loi/danh-sach-bao-loi-gv-bl-010000` | — | QC |

Requirement: `survey_bug/bug/bug.md` — Báo lỗi & Góp ý (tiền tố `SB-BU`).

## 2. Luồng

- `FLOW01` Thêm bug tại tab Bug của bài học (GV, CD) — 
- `FLOW02` Gửi báo lỗi từ danh sách — 
- `FLOW03` Xem / sửa chi tiết — 
- `FLOW04` Đổi trạng thái nhanh trên danh sách — 
- `FLOW05` Xem kết quả — 
- `FLOW06` Xoá báo lỗi — 
- `FLOW07` Popup nhắc PTL hằng ngày — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-BL-010010` | Popup gửi báo lỗi · Đối tượng PPT, PDF, BTVN | Popup | CD-BL-010000 | CD-BL-010000 | — | `/bao-loi/danh-sach-bao-loi?popup=CD-BL-010010` | Figma | cao |
| `CD-BL-010011` | Popup gửi báo lỗi · Đối tượng Khác | Popup | CD-BL-010000 | CD-BL-010000 | — | `/bao-loi/danh-sach-bao-loi?popup=CD-BL-010011` | Figma | cao |
| `CD-BL-010020` | Popup chi tiết báo lỗi · Đang xử lý | Popup | CD-BL-010000 | CD-BL-010000 | — | `/bao-loi/danh-sach-bao-loi?popup=CD-BL-010020` | Figma | cao |
| `CD-BL-010030` | Popup chi tiết báo lỗi · Hoàn thành | Popup | CD-BL-010000 | CD-BL-010000 | — | `/bao-loi/danh-sach-bao-loi?popup=CD-BL-010030` | Figma | cao |
| `CD-BL-010040` | Chưa có báo lỗi | Trạng thái | CD-BL-010000 | CD-BL-010000 | — | `/bao-loi/danh-sach-bao-loi?state=CD-BL-010040` | Figma | trung bình |
| `CD-BL-010050` | Popup chi tiết báo lỗi · Hoàn thành · Nhập kết quả xử lý | Popup | CD-BL-010040 | CD-BL-010000 | — | `/bao-loi/danh-sach-bao-loi?popup=CD-BL-010050` | Figma | cao |
| `CH-BL-010010` | Popup gửi báo lỗi · Đối tượng PPT, PDF, BTVN | Popup | CH-BL-010000 | CH-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-ch-bl-010000?popup=CH-BL-010010` | Figma | cao |
| `CH-BL-010011` | Popup gửi báo lỗi · Đối tượng Khác | Popup | CH-BL-010000 | CH-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-ch-bl-010000?popup=CH-BL-010011` | Figma | cao |
| `CH-BL-010020` | Popup chi tiết báo lỗi · Đang xử lý | Popup | CH-BL-010000 | CH-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-ch-bl-010000?popup=CH-BL-010020` | Figma | cao |
| `CH-BL-010030` | Popup chi tiết báo lỗi · Hoàn thành | Popup | CH-BL-010000 | CH-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-ch-bl-010000?popup=CH-BL-010030` | Figma | cao |
| `CH-BL-010040` | Chưa có báo lỗi | Trạng thái | CH-BL-010000 | CH-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-ch-bl-010000?state=CH-BL-010040` | Figma | trung bình |
| `CH-BL-010050` | Popup chi tiết báo lỗi · Hoàn thành · Nhập kết quả xử lý | Popup | CH-BL-010040 | CH-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-ch-bl-010000?popup=CH-BL-010050` | Figma | cao |
| `CH-BL-010070` | Popup nhắc báo lỗi chưa xử lý (mỗi ngày) | Popup | CH-BL-010040 | CH-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-ch-bl-010000?popup=CH-BL-010070` | Figma | cao |
| `GV-BL-010010` | Popup gửi báo lỗi · Giáo trình | Popup | GV-BL-010000 | GV-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-gv-bl-010000?popup=GV-BL-010010` | Figma | cao |
| `GV-BL-010020` | Popup chi tiết báo lỗi · Đang mở | Popup | GV-BL-010000 | GV-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-gv-bl-010000?popup=GV-BL-010020` | Figma | cao |
| `GV-BL-010030` | Popup chi tiết báo lỗi · Đã giải quyết | Popup | GV-BL-010000 | GV-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-gv-bl-010000?popup=GV-BL-010030` | Figma | cao |
| `GV-BL-010040` | Chưa có báo lỗi | Trạng thái | GV-BL-010000 | GV-BL-010000 | — | `/bao-loi/danh-sach-bao-loi-gv-bl-010000?state=GV-BL-010040` | Figma | trung bình |

## 4. Khu vực và item

### `A01` Trang 1: Chi tiết bài học – Tab Bug (Thêm Bug)

Frame: `CD-BL-010000`, `CH-BL-010000`, `GV-BL-010000`, `ADM-GY-010000` (tool đoán:CD-BL-010000, CH-BL-010000, GV-BL-010000, ADM-GY-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 2: Danh sách Báo lỗi & góp ý

Frame: `CD-BL-010040`, `CH-BL-010040`, `GV-BL-010040` (tool đoán:CD-BL-010040, CH-BL-010040, GV-BL-010040) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Trang 3: Popup Gửi báo lỗi

Frame: `CD-BL-010010`, `CD-BL-010011`, `CH-BL-010010`, `CH-BL-010011`, `GV-BL-010010` (tool đoán:CD-BL-010010, CD-BL-010011, CH-BL-010010, CH-BL-010011, GV-BL-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A04` Trang 4: Popup Chi tiết báo lỗi

Frame: `CD-BL-010020`, `CD-BL-010030`, `CD-BL-010050`, `CH-BL-010020`, `CH-BL-010030`, `CH-BL-010050`, `GV-BL-010020`, `GV-BL-010030` (tool đoán:CD-BL-010020, CD-BL-010030, CD-BL-010050, CH-BL-010020, CH-BL-010030, CH-BL-010050, GV-BL-010020, GV-BL-010030) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Trang 5: Popup Xác nhận hoàn thành

Frame: `CD-BL-010000`, `CH-BL-010000`, `GV-BL-010000`, `ADM-GY-010000` (tool đoán:CD-BL-010000, CH-BL-010000, GV-BL-010000, ADM-GY-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A06` Trang 6: Popup Xem kết quả

Frame: `CD-BL-010000`, `CH-BL-010000`, `GV-BL-010000`, `ADM-GY-010000` (tool đoán:CD-BL-010000, CH-BL-010000, GV-BL-010000, ADM-GY-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A07` Trang 7: Popup nhắc bug chưa xử lý (PTL)

Frame: `CH-BL-010070` (tool đoán:CH-BL-010070) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `F01` (ngoài Body)

Frame: `ADM-GY-010000`, `CD-BL-010000`, `CH-BL-010000`, `GV-BL-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:250458` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | tab-hoc-vien | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4193:148087` Tab · Học viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | tab-giao-vien | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4193:148093` Tab · Giáo viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | filter-trang-thai | `DD/Molecule/Trigger` Size=XS, State=Default | `4193:146792` Filter · Trạng thái | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | filter-thang-nay | `DD/Molecule/Trigger` Size=XS, State=Active | `4193:146793` Filter · Tháng này | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | avatar | `Avatar` Size=32 | `4193:146846` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | thoi-gian-gui | `Atom/Chip` Type=Date không có thứ | `4193:146837` Thời gian gửi | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | trang-thai | `Atom/Badge`  | `4193:146841` Trạng thái | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | ghi-chu | `Atom/Input` State=Filled, Kiểu=Chuẩn | `4193:146851` Ghi chú | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | avatar | `Atom/Avatar Initials`  | `4193:146864` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | filter-trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `5364:369535` Filter · Trung tâm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | filter-loai | `DD/Molecule/Trigger` Size=XS, State=Default | `5274:365132` Filter · Loại | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | filter-doi-tuong | `DD/Molecule/Trigger` Size=XS, State=Default | `5274:367753` Filter · Đối tượng | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | filter-muc-do-nghiem-trong | `DD/Molecule/Trigger` Size=XS, State=Default | `5274:365133` Filter · Mức độ nghiêm trọng | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | nut-gui-bao-loi | `Atom/Button` Type=Primary, Size=Small | `5274:365136` Nút · Gửi báo lỗi | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | the-chi-so-tong-bao-loi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `5274:365140` Thẻ chỉ số · Tổng báo lỗi | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | the-chi-so-loi-nghiem-trong | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `5274:365141` Thẻ chỉ số · Lỗi nghiêm trọng | — |  |  | Chỉ có trên Figma | Figma |
| `F01.18` | the-chi-so-gop-y | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `5274:365142` Thẻ chỉ số · Góp ý | — |  |  | Chỉ có trên Figma | Figma |
| `F01.19` | atom-badge | `Atom/Badge`  | `5274:365176` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.20` | menu-5-trung-tam-con-lai | `DD/Organism/Menu Panel` Type=Single | `5371:41173` ③ Menu · 5 trung tâm còn lại | — |  |  | Chỉ có trên Figma | Figma |
| `F01.21` | menu-doi-tuong | `DD/Organism/Menu Panel` Type=Single | `5371:41240` Menu · Đối tượng | — |  |  | Chỉ có trên Figma | Figma |
| `F01.22` | menu-4-muc-do | `DD/Organism/Menu Panel` Type=Single | `5371:41297` ② Menu · 4 mức độ | — |  |  | Chỉ có trên Figma | Figma |
| `F01.23` | menu-loai | `DD/Organism/Menu Panel` Type=Single | `5371:41355` Menu · Loại | — |  |  | Chỉ có trên Figma | Figma |
| `F01.24` | menu-trang-thai | `DD/Organism/Menu Panel` Type=Single | `5371:41392` Menu · Trạng thái | — |  |  | Chỉ có trên Figma | Figma |
| `F01.25` | o-sua-truc-tiep-tieu-de | `Atom/Input` State=Sửa trực tiếp, Kiểu=Chuẩn | `5371:41436` Ô sửa trực tiếp · Tiêu đề | — |  |  | Chỉ có trên Figma | Figma |
| `F01.26` | menu-thao-tac-dong-chinh-sua-xoa-bug | `DD/Organism/Menu Panel` Type=Action | `5371:41442` Menu · Thao tác dòng (Chỉnh sửa / Xoá bug) | — |  |  | Chỉ có trên Figma | Figma |
| `F01.27` | filter-bug-cua-toi | `DD/Molecule/Trigger` Size=XS, State=Active | `5371:43296` Filter · Bug của tôi | — |  |  | Chỉ có trên Figma | Figma |
| `F01.28` | menu-bug-cua-toi | `DD/Organism/Menu Panel` Type=Single | `5371:43435` Menu · Bug của tôi | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Header

Frame: `CD-BL-010000`, `CH-BL-010000`, `GV-BL-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | account | `ACCOUNT` Size=Default | `5274:365039` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | component-2 | `Switch Center`  | `5274:365041` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | header-vai-tro |  | `5019:365020` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |

### `F03` Sidebar · MENU - CD

Frame: `CD-BL-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | sidebar-menu-cd | `MENU - CD`  | `5274:365124` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |

### `F04` Sidebar · MENU - CLASS HANDLER

Frame: `CH-BL-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F04.01` | sidebar-menu-class-handler | `MENU - CLASS HANDLER`  | `5364:370118` Sidebar · MENU - CLASS HANDLER | — |  |  | Chỉ có trên Figma | Figma |

### `F05` Sidebar · MENU - TEACHER

Frame: `GV-BL-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F05.01` | sidebar-menu-teacher | `MENU - TEACHER`  | `5019:365102` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Gắn ngữ cảnh ở tab Bug | User không cần chọn khoá học, bài học; bug tự lưu khoá học, bài học hiện tại và trung tâm đang chọn, kể cả khi Đối tượng = Khác. |
| `REQ02` | Sau khi gửi ở tab Bug | Toast "Gửi báo lỗi thành công", reset form về mặc định (Loại = Bug, các trường khác trống). |
| `REQ03` | Nút Bug đã báo | Mở tab trình duyệt mới (`target="_blank"`) tới trang Báo lỗi & góp ý, lọc sẵn trung tâm CD / GV đang chọn. |
| `REQ04` | Thẻ thống kê | `X/Y` = Hoàn thành / tổng, theo bộ lọc hiện tại. Tổng báo lỗi = Loại Bug (không gồm Góp ý); Lỗi nghiêm trọng = Loại Bug và mức Nghiêm trọng; Góp ý = Loại Góp ý. Cập nhật sau mỗi lần tạo, sửa, đổi trạng thái, xoá. |
| `REQ05` | Xem kết quả | Link chỉ hiển thị với bug Hoàn thành; mở popup tóm tắt chỉ đọc. |
| `REQ06` | Mở lại bug đã Hoàn thành | Chuyển từ Hoàn thành sang trạng thái khác: Kết quả xử lý giữ nguyên, không còn bắt buộc; chuyển lại Hoàn thành thì bắt buộc trở lại. |
| `REQ07` | Menu 3 chấm | Cuối mỗi dòng; gồm Chỉnh sửa, Xoá; chỉ hiển thị mục user có quyền, không có quyền nào thì ẩn nút. |
| `REQ08` | Xoá mềm | Có popup xác nhận; chỉ đánh dấu xoá. Bug đã xoá không hiển thị và không được tính ở danh sách, thống kê, popup nhắc PTL. |
| `REQ09` | Popup nhắc PTL | Hiện khi mở / reload trang lần đầu trong ngày; nội dung gồm số lượng bug chưa xử lý (Chưa đọc + Đang xử lý) và danh sách các bug đó. Ghi nhận đã nhắc theo user + ngày ở BE ngay khi hiển thị (reload hoặc đổi thiết bị trong cùng ngày không hiện lại). |
| `REQ10` | Trung tâm khi gửi từ danh sách | PTL bắt buộc chọn Trung tâm. GV, CD tự fill trung tâm đang chọn; danh sách trung tâm của GV chỉ gồm trung tâm được cấp quyền. Bug thuộc trung tâm đã chọn trên popup. |
| `REQ11` | Đổi trung tâm | GV, CD đổi trung tâm ở header → tải lại danh sách và thống kê theo trung tâm mới. |
| `REQ12` | Chống gửi trùng | Disable nút Gửi / Lưu / Xác nhận trong lúc chờ API phản hồi. |
| `EX01` | Ngoại lệ | Thiếu trường bắt buộc (Loại, Đối tượng, Tên bug, Mô tả bug, Trung tâm, Khoá học / Bài học khi Đối tượng = PPT / PDF / BTVN) → FE báo lỗi tại field, không gọi API. |
| `EX02` | Ngoại lệ | Loại = Bug nhưng không có tệp đính kèm (khi tạo, hoặc khi sửa mà xoá hết file) → chặn gửi/lưu, báo "Vui lòng đính kèm ít nhất 1 tệp". Loại = Góp ý → cho gửi không cần tệp. |
| `EX03` | Ngoại lệ | Chọn nhiều file, trong đó có file > 25MB → chỉ loại bỏ file vượt dung lượng kèm thông báo; các file hợp lệ vẫn được nhận. |
| `EX04` | Ngoại lệ | Mô tả bug / Kết quả xử lý vượt 500 ký tự → chặn nhập thêm. |
| `EX05` | Ngoại lệ | Chuyển Trạng thái = Hoàn thành khi Kết quả xử lý trống → không cho Xác nhận / Lưu, báo lỗi tại field. |
| `EX06` | Ngoại lệ | Đổi Đối tượng sang Khác → Khoá học, Bài học chuyển sang không bắt buộc, giữ giá trị đã chọn; đổi lại PPT / PDF / BTVN → bắt buộc lại. Đổi Khoá học → reset Bài học. |
| `EX07` | Ngoại lệ | User không có quyền gọi API → BE trả 403, FE báo "Bạn không có quyền thực hiện thao tác này". Gồm các trường hợp: |
| `EX08` | Ngoại lệ | Bug đã bị người khác xoá trong lúc đang mở / đổi trạng thái → báo "Báo lỗi không còn tồn tại", đóng popup, tải lại danh sách. |
| `EX09` | Ngoại lệ | Gửi / lưu thất bại (mất mạng, lỗi BE) → giữ nguyên dữ liệu đã nhập, hiển thị thông báo lỗi; với dropdown trạng thái thì trả về trạng thái cũ. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Thêm bug từ tab Bug của bài học | High |  | Flow 1, REQ01–REQ03 | — |  |
| `TC02` | Case 2: Gửi báo lỗi từ danh sách theo Trung tâm và Đối tượng | High |  | Flow 2, EX01, EX06, REQ04, REQ10 | — |  |
| `TC03` | Case 3: Validate tệp đính kèm và giới hạn ký tự | High |  | EX02–EX04 | — |  |
| `TC04` | Case 4: Chuyển Hoàn thành bắt buộc Kết quả xử lý | High |  | Flow 3, Flow 4, EX05, REQ04, REQ06 | — |  |
| `TC05` | Case 5: Xem kết quả chỉ với bug Hoàn thành | Medium |  | Flow 5, REQ05 | — |  |
| `TC06` | Case 6: Phân quyền GV | High |  | Ràng buộc quyền, EX07, REQ07 | — |  |
| `TC07` | Case 7: Phân quyền CD | High |  | Ràng buộc quyền, REQ11 | — |  |
| `TC08` | Case 8: Phân quyền PTL | High |  | Ràng buộc quyền, REQ10 | — |  |
| `TC09` | Case 9: Xoá mềm báo lỗi | High |  | Flow 6, REQ08 | — |  |
| `TC10` | Case 10: Popup nhắc PTL hằng ngày | High |  | Flow 7, REQ09 | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Frame Figma chưa có requirement (17): `CD-BL-010010`, `CD-BL-010011`, `CD-BL-010020`, `CD-BL-010030`, `CD-BL-010040`, `CD-BL-010050`, `CH-BL-010010`, `CH-BL-010011`, `CH-BL-010020`, `CH-BL-010030`, `CH-BL-010040`, `CH-BL-010050`, `CH-BL-010070`, `GV-BL-010010`, `GV-BL-010020`, `GV-BL-010030`, `GV-BL-010040`
- Thiếu prototype link đi vào (17): `CD-BL-010010`, `CD-BL-010011`, `CD-BL-010020`, `CD-BL-010030`, `CD-BL-010040`, `CD-BL-010050`, `CH-BL-010010`, `CH-BL-010011`, `CH-BL-010020`, `CH-BL-010030`, `CH-BL-010040`, `CH-BL-010050`, `CH-BL-010070`, `GV-BL-010010`, `GV-BL-010020`, `GV-BL-010030`, `GV-BL-010040`
- Phân loại cần design duyệt (3): `CD-BL-010040`, `CH-BL-010040`, `GV-BL-010040`
- REQ/EX chưa có testcase (4): `REQ12`, `EX03`, `EX08`, `EX09`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
