# Chi tiết lớp học — Menu Nhật ký — Tab Tin nhắn

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-050100` | Lớp học / Nhật ký / Nhật ký | `/lop-hoc/nhat-ky/nhat-ky` | `ADM-LOP-050100-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_messages_requirements.md` — Chi tiết lớp học — Menu Nhật ký — Tab Tin nhắn (tiền tố `M-CDM2`).

## 2. Luồng

- `FLOW01` Xem tab Tin Nhắn — `REQ01`, `REQ08`
- `FLOW02` Thêm tin nhắn từ mẫu sẵn có — `REQ02`, `REQ07`
- `FLOW03` Gửi cho một học viên — `REQ03`, `REQ04`, `REQ05`, `REQ06`, `REQ07`
- `FLOW04` Gửi toàn bộ danh sách — `REQ03`, `REQ04`, `REQ05`, `REQ06`, `REQ07`
- `FLOW05` Xác nhận xóa item — `REQ01`, `REQ07`, `REQ08`, `REQ09`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Tab Tin Nhắn — Danh sách tin nhắn

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | nut |  |  | — | opens `A02` |  | Chưa thấy trên Figma | QC |
| `A01.02` | tieu-de |  | `2533:20883` TIÊU ĐỀ | — |  | `TC01` | Khớp | QC |
| `A01.03` | tin-nhan | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I1299:21;2177:28928` Chi tiết NV | — |  | `TC01`, `TC02`, `TC06` | Khớp | QC |
| `A01.04` | ngay-tao |  |  | — |  | `TC01`, `TC02` | Chưa thấy trên Figma | QC |
| `A01.05` | so-nguoi-da-gui |  | `2533:20875` Filter Pills Toolbar | — |  | `TC01` | Khớp | QC |
| `A01.06` | gui-chung |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A01.07` | mo-thu-gon |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A01.08` | nut-do |  |  | — | opens `A01` |  | Chưa thấy trên Figma | QC |
| `A01.09` | tim-kiem | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `I2533:21147;1739:32351` Tìm nội dung...; `I2533:21147;1739:32351` Tìm nội dung... | — |  |  | Khớp | QC |
| `A01.10` | tai-du-lieu |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A02` Popup Tạo tin nhắn bán tự động mới

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tieu-de |  | `2533:20883` TIÊU ĐỀ | — |  | `TC07`, `TC13`, `TC14` | Khớp | QC |
| `A02.02` | mo-ta |  | `2533:20885` MÔ TẢ | — |  | `TC07`, `TC13`, `TC14` | Khớp | QC |
| `A02.03` | chon-mau-tin-nhan |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A02.04` | noi-dung-tin-nhan |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A02.05` | huy |  | `2533:20899` Thuy SP đã follow học viên | — |  |  | Khớp | QC |
| `A02.06` | tao-moi |  |  | — |  | `TC07`, `TC09`, `TC10`, `TC11`, `TC13` | Chưa thấy trên Figma | QC |

### `A03` Danh sách học viên và chọn nền tảng

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | hoc-vien |  | `2533:20899` Thuy SP đã follow học viên | — |  | `TC15`, `TC19` | Khớp | QC |
| `A03.02` | nguon-nguoi-nhan |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.03` | dropdown-nen-tang |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.04` | dich-gui |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.05` | gui-tung-hoc-vien |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.06` | thieu-lien-ket-nen-tang |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A04` Lấy biến CơmGao và gửi tin nhắn

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | bien-mau |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.02` | thay-bien |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.03` | gui-mot-nguoi |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.04` | gui-toan-bo |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.05` | dang-gui |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.06` | ket-qua-tung-nguoi |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.07` | so-nguoi-da-gui |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.08` | gui-lai |  |  | — |  | `TC27`, `TC29` | Chưa thấy trên Figma | QC |

### `A05` Quản lý item tin nhắn đã tạo

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | dropdown-mau-tren-item |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A05.02` | sua-tieu-de-mo-ta |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A05.03` | nut |  |  | — | opens `A05` |  | Chưa thấy trên Figma | QC |
| `A05.04` | tin-nhan-da-gui |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A05.05` | xac-nhan-xoa |  |  | — |  | `TC35` | Chưa thấy trên Figma | QC |
| `A05.06` | du-lieu-ket-qua-gui |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A06` Toast phản hồi CRUD và gửi tin nhắn

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC03`, `TTC04` | Chưa thấy trên Figma | QC |
| `A06.02` | thong-bao |  |  | — |  | `TTC04` | Chưa thấy trên Figma | QC |
| `A06.03` | canh-bao |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.04` | co-loi-xay-ra |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.05` | dong-va-thoi-luong |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-050100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `1299:15` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `2533:21147` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Active | `2533:20876` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | lich-giao-vien-dang-ky | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `2533:20901` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-object-chip | `Atom/Object Chip` Type=System | `2533:20905` Atom/Object Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-icon-button | `Atom/Icon Button`  | `2533:21031` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:231079` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | account | `ACCOUNT` Size=Default | `3497:53466` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Danh sách | Item thuộc lớp hiện tại, đủ Tiêu đề/Mô tả/Mẫu/Ngày tạo/Số người đã gửi, + tạo, Gửi chung, mở/thu gọn và **search chỉ theo Tiêu đề tin nhắn** trong lớp hiện tại. Không tự gửi khi tạo/xem/chọn dữ liệu. |
| `REQ02` | Mẫu tin nhắn | Tiêu đề/Mô tả đều bắt buộc, không giới hạn ký tự, không chấp nhận chỉ khoảng trắng. Chọn một mẫu có sẵn bắt buộc; template/nội dung/biến từ chức năng nguồn. Tab này không định nghĩa hay sửa mẫu gốc. Metadata và preview theo popup; **nội dung chỉ đọc**, muốn sửa vào chức năng define mẫu. Đổi mẫu không reset count hoặc cho gửi lại người đã thành công; version mẫu khi sửa define còn cần chốt. |
| `REQ03` | Biến CơmGao | Lấy các biến của đúng học viên theo mapping nguồn trước gửi; mỗi người có nội dung riêng. Không định nghĩa mapping từ ví dụ ảnh hoặc dùng dữ liệu giả. Lưu được kết quả/nội dung đã gửi mà thay mẫu sau này không viết lại lịch sử. |
| `REQ04` | Người nhận và nền tảng | Học viên thuộc lớp, liên kết đúng CơmGao; mỗi dòng chọn Facebook/Instagram/Zalo/TikTok/Website theo UI. Đích gửi phụ thuộc platform đã chọn, không lấy email hiển thị làm địa chỉ chung hoặc tự fallback. |
| `REQ05` | Gửi | Gửi một người bằng nút dòng hoặc toàn bộ người đủ điều kiện chưa thành công bằng nút đầu item. Không cho gửi lại học viên đã thành công trong cùng item, kể cả đổi mẫu/platform hoặc user thao tác. Cá nhân hóa theo người, dùng platform riêng, chống lặp chung/riêng. Kết quả hỗn hợp giữ từng kết quả; timeout cần xác định kết quả trước thử lại. |
| `REQ06` | Kết quả và count | S/T đếm học viên duy nhất đã được xác nhận gửi thành công / tổng danh sách nhận của item. Không tăng khi đang chờ/lỗi hoặc đếm thêm vì cùng người gửi nhiều lần. Ghi nhận đúng item/người/platform/nội dung thực tế/thời điểm/kết quả; không suy ra đã đọc. |
| `REQ07` | Notification | Tạo/quản lý/gửi có một Toast kết quả logic theo UI chung; gửi chung có tổng kết, không spam từng dòng. Chỉ báo thành công khi được xác nhận; Hủy/chỉ xem/chọn platform không Toast CRUD. |
| `REQ08` | Quyền và phạm vi | Admin theo quyền quản trị chung không cần add vào lớp; Class Handler/Support phải được add vào lớp mới được xem/tạo/gửi/đổi mẫu/xóa. Không giới hạn theo người tạo item và không kế thừa owner từ tab khác; Sale/role khác không vào tab. Kiểm tra lại quyền/người nhận/đích trước thay đổi và gửi, kể cả request trực tiếp. |
| `REQ09` | Xóa có xác nhận | Hover item hiện ×; click mở popup, chưa xóa ngay. Hủy không đổi dữ liệu, confirm mới xóa sau kiểm tra quyền. Xóa thành công bỏ item và một Toast; lỗi giữ item. Không thu hồi tin đã gửi; cơ chế mềm/cứng và lưu kết quả còn cần xác nhận. |
| `EX01` | Ngoại lệ | Tải danh sách/người nhận/mẫu lỗi → trạng thái lỗi và Thử lại, không coi là rỗng hay dữ liệu hợp lệ để gửi. |
| `EX02` | Ngoại lệ | Response thuộc lớp/item/tab cũ → không ghi đè giao diện hiện tại; kết quả đã gửi vẫn liên kết đúng item/người nhận gốc. |
| `EX03` | Ngoại lệ | Thiếu quyền tab/lớp/thao tác → từ chối UI/request trực tiếp; không trả dữ liệu ngoài quyền và không gửi. |
| `EX04` | Ngoại lệ | Mẫu trống/không tồn tại/không được dùng hoặc metadata vi phạm validation đã chốt → không tạo/cập nhật/gửi, báo field/lý do và Toast phù hợp. |
| `EX05` | Ngoại lệ | Tạo/cập nhật item lỗi hoặc gửi lặp → không nhân bản item, không lưu một phần; giữ input để thử lại. |
| `EX06` | Ngoại lệ | Thiếu liên kết CơmGao/đích platform hoặc platform chưa khả dụng → không tự chuyển đích/nền tảng, báo lý do của người nhận, không tăng S. |
| `EX07` | Ngoại lệ | Thiếu mapping/biến hợp lệ hoặc nguồn CơmGao lỗi → không gửi nội dung sai/chưa thay biến; giữ kết quả riêng từng người. |
| `EX08` | Ngoại lệ | Gửi chung/riêng hoặc callback trùng → chống gửi lặp cùng item/người nhận đang xử lý, không tính S hai lần. Học viên đã thành công không được gửi lại dù đổi mẫu/platform hay user thao tác. |
| `EX09` | Ngoại lệ | Timeout chưa biết kết quả gửi → không tự gửi lại/đánh dấu chắc chắn thất bại, kiểm tra/reconcile kết quả trước thử lại. |
| `EX10` | Ngoại lệ | Học viên đã gửi thành công → chặn gửi lại qua UI/request, kể cả đổi mẫu/platform, không gửi lần mới hoặc tăng count. |
| `EX11` | Ngoại lệ | Xóa lỗi/gửi lặp hoặc item không còn hợp lệ → không xóa nhầm/nhân đôi thao tác; giữ dữ liệu hiển thị phù hợp, một Toast kết quả. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Xem danh sách đúng lớp | High | Có | Flow 1 / REQ01 | `A01` | `A01.02`, `A01.03`, `A01.04`, `A01.05` |
| `TC02` | Case 2: Mở và thu gọn học viên | Medium |  | REQ01 | `A01` | `A01.03`, `A01.04` |
| `TC03` | Case 3: Count người gửi thành công | High |  | REQ06 | `A01` |  |
| `TC04` | Case 4: Tải rỗng/lỗi và response cũ | High |  | EX01 / EX02 / REQ08 | `A01` |  |
| `TC05` | Case 5: Quyền xem tab | High |  | EX03 / REQ08 | `A01` |  |
| `TC06` | Case 6: Search chỉ theo Tiêu đề tin nhắn | High |  | Flow 1 / REQ01 / REQ08 | `A01` | `A01.03` |
| `TC07` | Case 7: Mở popup từ + | Medium |  | Flow 2 / REQ02 | `A02` | `A02.01`, `A02.02`, `A02.06` |
| `TC08` | Case 8: Đổi mẫu và preview | High |  | REQ02 / REQ03 | `A02` |  |
| `TC09` | Case 9: Tạo item thành công | High | Có | Flow 2 / REQ02 / REQ07 | `A02` | `A02.06` |
| `TC10` | Case 10: Chưa chọn hoặc mẫu hết hiệu lực | High |  | EX04 / REQ02 | `A02` | `A02.06` |
| `TC11` | Case 11: Hủy và tạo lỗi/chống lặp | High |  | EX05 / REQ02 / REQ07 | `A02` | `A02.06` |
| `TC12` | Case 12: Nội dung mẫu chỉ đọc | High |  | REQ02 / EX04 | `A02` |  |
| `TC13` | Case 13: Validation tiêu đề và mô tả bắt buộc | High |  | EX04 / REQ02 | `A02` | `A02.01`, `A02.02`, `A02.06` |
| `TC14` | Case 14: Tiêu đề và mô tả dài không giới hạn | Medium |  | REQ01 / REQ02 | `A02` | `A02.01`, `A02.02` |
| `TC15` | Case 15: Đúng học viên và dữ liệu hiển thị | High |  | REQ04 / REQ08 | `A03` | `A03.01` |
| `TC16` | Case 16: Chọn nền tảng từng dòng | High |  | REQ04 | `A03` |  |
| `TC17` | Case 17: Đích gửi đúng CơmGao | High |  | REQ03 / REQ04 | `A03` |  |
| `TC18` | Case 18: Thiếu liên kết hoặc platform chưa khả dụng | High |  | EX06 / REQ04 | `A03` |  |
| `TC19` | Case 19: Không gửi cho phụ huynh ngoài cấu hình | High |  | REQ04 / REQ08 | `A03` | `A03.01` |
| `TC20` | Case 20: Gửi xám do thiếu liên kết platform | High |  | REQ04 / EX06 | `A03` |  |
| `TC21` | Case 21: Thay biến riêng mỗi học viên | High |  | Flow 3 / REQ03 | `A04` |  |
| `TC22` | Case 22: Thiếu biến hoặc CơmGao lỗi | High |  | EX07 / REQ03 | `A04` |  |
| `TC23` | Case 23: Gửi riêng đúng một người | High | Có | Flow 3 / REQ05 | `A04` |  |
| `TC24` | Case 24: Gửi full theo platform mỗi người | High |  | Flow 4 / REQ05 | `A04` |  |
| `TC25` | Case 25: Gửi chung có thành công và lỗi | High |  | REQ05 / REQ06 / REQ07 | `A04` |  |
| `TC26` | Case 26: Chống lặp gửi chung và riêng | High |  | EX08 / REQ05 | `A04` |  |
| `TC27` | Case 27: Timeout chưa rõ kết quả | High |  | EX09 / REQ05 | `A04` | `A04.08` |
| `TC28` | Case 28: Lưu kết quả và đếm người duy nhất | High |  | REQ06 | `A04` |  |
| `TC29` | Case 29: Không gửi lại qua nút riêng và chung | High |  | EX10 / REQ05 | `A04` | `A04.08` |
| `TC30` | Case 30: Không còn người gửi được | Medium |  | REQ05 / REQ06 | `A04` |  |
| `TC31` | Case 31: Kiểm tra quyền role và thành viên lớp | High |  | EX03 / REQ08 | `A05` |  |
| `TC32` | Case 32: Đổi mẫu không sửa mẫu gốc/lịch sử gửi | High |  | REQ02 / REQ06 | `A05` |  |
| `TC33` | Case 33: Hover ×, Hủy và xác nhận xóa | High |  | REQ01 / REQ08 | `A05` |  |
| `TC34` | Case 34: Quản lý item người khác tạo | High |  | REQ08 | `A05` |  |
| `TC35` | Case 35: Xóa lỗi và chống lặp confirm | High |  | Flow 5 / EX11 / REQ09 | `A05` | `A05.05` |
| `TTC01` | Toast Case 1: Toast tạo item khác Toast gửi | High |  | REQ07 | `A06` | `A06.01` |
| `TTC02` | Toast Case 2: Toast kết quả gửi riêng | High |  | REQ07 | `A06` | `A06.01` |
| `TTC03` | Toast Case 3: Toast kết quả gửi chung hỗn hợp | High |  | REQ07 | `A06` | `A06.01` |
| `TTC04` | Toast Case 4: Đang gửi và đóng/chống trùng | Medium |  | REQ07 | `A06` | `A06.01`, `A06.02` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa thấy trên Figma (33): `A01.01`, `A01.04`, `A01.06`, `A01.07`, `A01.08`, `A01.10`, `A02.03`, `A02.04`, `A02.06`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`, `A04.06`, `A04.07`, `A04.08`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A06.01`, `A06.02`, `A06.03`, `A06.04`, `A06.05`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
