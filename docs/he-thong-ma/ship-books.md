# Ship Sách

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-SS-010000` | Ship sách / Danh sách đơn sách | `/ship-sach/danh-sach-don-sach` | `ADM-SS-010000-DK` | QC |

Requirement: `ship_books/ship_books/ship_books.md` — Ship Sách (tiền tố `SB-SB`).

## 2. Luồng

- `FLOW01` Thêm đơn sách — 
- `FLOW02` Thêm đơn cho học viên có sẵn — 
- `FLOW03` Cập nhật đơn sách — 
- `FLOW04` Xoá đơn sách — 
- `FLOW05` Xác nhận thông tin / Xác nhận gửi sách qua tin nhắn — 
- `FLOW06` Chọn đơn và xuất Excel — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-SS-010001` | Chọn 1 đơn · Xuất Excel | Trạng thái | ADM-SS-010000 | ADM-SS-010000 | — | `/ship-sach/danh-sach-don-sach?state=ADM-SS-010001` | Figma | trung bình |
| `ADM-SS-010002` | Chọn tất cả · Xuất Excel | Trạng thái | ADM-SS-010000 | ADM-SS-010000 | — | `/ship-sach/danh-sach-don-sach?state=ADM-SS-010002` | Figma | trung bình |
| `ADM-SS-010010` | Popup thêm đơn sách | Popup | ADM-SS-010000 | ADM-SS-010000 | — | `/ship-sach/danh-sach-don-sach?popup=ADM-SS-010010` | Figma | cao |
| `ADM-SS-010012` | Đã chọn học viên có sẵn | Trạng thái | ADM-SS-010010 | ADM-SS-010000 | — | `/ship-sach/danh-sach-don-sach?state=ADM-SS-010012` | Figma | trung bình |
| `ADM-SS-010020` | Popup xác nhận xoá đơn sách | Popup | ADM-SS-010000 | ADM-SS-010000 | — | `/ship-sach/danh-sach-don-sach?popup=ADM-SS-010020` | Figma | cao |
| `ADM-SS-010032` | Đang mở | Dropdown | ADM-SS-010000 | ADM-SS-010000 | — | `/ship-sach/danh-sach-don-sach?popup=ADM-SS-010032` | Figma | cao |
| `ADM-SS-010034` | Đã chọn mẫu | Trạng thái | ADM-SS-010000 | ADM-SS-010000 | — | `/ship-sach/danh-sach-don-sach?state=ADM-SS-010034` | Figma | trung bình |
| `ADM-SS-010040` | Popup cập nhật đơn sách | Popup | ADM-SS-010000 | ADM-SS-010000 | — | `/ship-sach/danh-sach-don-sach?popup=ADM-SS-010040` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Danh Sách Đơn Sách

Frame: `ADM-SS-010001`, `ADM-SS-010002` (tool đoán:ADM-SS-010001, ADM-SS-010002) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 2: Popup Thêm đơn sách / Cập nhật đơn sách

Frame: `ADM-SS-010010`, `ADM-SS-010040` (tool đoán:ADM-SS-010010, ADM-SS-010040) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Trang 3: Popup Xác nhận gửi tin nhắn

Frame: `ADM-SS-010020` (tool đoán:ADM-SS-010020) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `F01` (ngoài Body)

Frame: `ADM-SS-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-icon-button | `Atom/Icon Button`  | `2619:196841` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `2619:196843` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | dropdown-trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `4713:129538` Dropdown · Trung tâm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `2619:196844` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-id-badge | `Atom/ID Badge` Type=6-digit, Size=26H | `2619:197715` Atom/ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-button | `Atom/Button` Type=Primary, Size=XSmall | `2619:197718` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | atom-badge | `Atom/Badge`  | `2619:197739` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | mouse-click |  | `2929:44775` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | phan-trang |  | `2619:197086` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | account | `ACCOUNT` Size=Default | `2619:197135` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:251382` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | dd-molecule-menu-item | `DD/Molecule/Menu Item` Type=Default, State=Default, Size=S | `2911:1151` DD/Molecule/Menu Item | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Giá trị mặc định | Popup Thêm: Ngày ghi nhận = ngày hôm nay, Trạng thái = Mới. |
| `REQ02` | Đồng bộ Tên - Mã học viên | Khi tick "Chọn học viên có sẵn", chọn 1 trong 2 dropdown thì dropdown còn lại tự điền theo (2 chiều). |
| `REQ03` | Popup xác nhận xoá | Mọi thao tác xoá đơn đều phải qua popup xác nhận trước khi xoá. |
| `REQ04` | Lưu thông tin gửi tin | Lưu thời gian gửi + nội dung tin đã gửi theo từng cột (Xác nhận thông tin / Xác nhận gửi sách) của từng đơn. Hover nút hiển thị lại 2 thông tin này. Mỗi cột chỉ gửi 1 lần, không gửi lại. |
| `REQ05` | Chọn nhiều + Xuất Excel | Nút "Xuất Excel (n)" chỉ hiện khi có ít nhất 1 đơn được chọn, n = số đơn đã chọn, vị trí bên phải filter Trạng thái. Checkbox header chọn / bỏ chọn tất cả các đơn đang hiển thị theo bộ lọc hiện tại. File Excel gồm các cột: STT, Tên học viên, Số điện thoại, Địa chỉ, Mã học viên, Loại giáo trình, Ghi chú, Lớp, Trung tâm, Trạng thái, Ngày cập nhật. |
| `REQ06` | Đổi trạng thái tại danh sách | Dropdown Trạng thái ở từng dòng đổi trực tiếp, lưu ngay và cập nhật cột "Cập nhật". Hiện chưa có ràng buộc thứ tự giữa các trạng thái, và không liên kết với việc đã gửi tin. |
| `REQ07` | Xoá mềm | Xoá đơn là xoá mềm (đánh dấu xoá, không hiển thị trên danh sách). Chỉ xoá từng đơn, không có xoá hàng loạt. |
| `REQ08` | Trung tâm | Danh sách có bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số và phân trang chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header. Khi tạo mới bắt buộc chọn `Trung tâm`; bản ghi được lưu thuộc trung tâm đã chọn. Backend kiểm tra lại trung tâm khi lưu, không chỉ dựa vào UI. |
| `EX01` | Ngoại lệ | Bấm "Thêm mới" / "Cập nhật" khi thiếu trường bắt buộc → Hiển thị lỗi tại trường thiếu, không lưu, không đóng popup. |
| `EX02` | Ngoại lệ | Chưa chọn mẫu tin nhắn → Không cho bấm "Gửi tin nhắn" (disable) hoặc báo lỗi bắt buộc chọn. |
| `EX03` | Ngoại lệ | Không có template nào đang bật → Dropdown rỗng, không cho gửi tin nhắn. |
| `EX04` | Ngoại lệ | Gửi tin nhắn thất bại → Báo lỗi, giữ popup, nút xác nhận giữ nguyên trạng thái chưa gửi. |
| `EX06` | Ngoại lệ | Đơn đã gửi tin ở cột nào → Nút ở cột đó không cho bấm gửi lại. |
| `EX05` | Ngoại lệ | Học viên có sẵn bị đổi lại (đổi Tên hoặc Mã học viên sang người khác) → Cặp Tên / Mã học viên luôn khớp nhau, không để lệch dữ liệu. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Thêm đơn sách thành công | High | Có | Flow 1 | — |  |
| `TC02` | Case 2: Thêm đơn thiếu trường bắt buộc | High |  | EX01 | — |  |
| `TC03` | Case 3: Chọn học viên có sẵn, đồng bộ Tên - Mã | High |  | Flow 2, REQ02 | — |  |
| `TC04` | Case 4: Cập nhật đơn sách | High | Có | Flow 3 | — |  |
| `TC05` | Case 5: Xoá đơn có popup xác nhận | High | Có | Flow 4, REQ03, REQ07 | — |  |
| `TC06` | Case 6: Gửi tin xác nhận thông tin | High |  | Flow 5, REQ04, EX06 | — |  |
| `TC07` | Case 7: Popup chỉ liệt kê template đang bật | Medium |  | Flow 5, Ràng buộc | — |  |
| `TC08` | Case 8: Gửi tin nhắn thất bại / chưa chọn template | Medium |  | EX02, EX03, EX04 | — |  |
| `TC09` | Case 9: Chọn đơn và xuất Excel | Medium | Có | Flow 6, REQ05 | — |  |
| `TC10` | Case 10: Đổi trạng thái tại danh sách | Medium |  | REQ06 | — |  |
| `TC11` | Case 11: Lọc danh sách theo trung tâm | High |  | REQ08 | — |  |
| `TC12` | Case 12: Bắt buộc chọn trung tâm khi tạo | High |  | REQ08 | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Frame Figma chưa có requirement (8): `ADM-SS-010001`, `ADM-SS-010002`, `ADM-SS-010010`, `ADM-SS-010012`, `ADM-SS-010020`, `ADM-SS-010032`, `ADM-SS-010034`, `ADM-SS-010040`
- Phân loại cần design duyệt (4): `ADM-SS-010001`, `ADM-SS-010002`, `ADM-SS-010012`, `ADM-SS-010034`
- Thiếu prototype link đi vào (7): `ADM-SS-010001`, `ADM-SS-010002`, `ADM-SS-010010`, `ADM-SS-010012`, `ADM-SS-010020`, `ADM-SS-010034`, `ADM-SS-010040`
- REQ/EX chưa có testcase (2): `REQ01`, `EX05`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
