# Hoá Đơn

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-HD-010000` | Hoá đơn / Danh sách hoá đơn | `/hoa-don/danh-sach-hoa-don` | `ADM-HD-010000-DK` | QC |

Requirement: `receipt_management/receipt/receipt.md` — Hoá Đơn (tiền tố `RM-RE`).

## 2. Luồng

- `FLOW01` Thêm hoá đơn — 
- `FLOW02` Đồng bộ với CG — 
- `FLOW03` Chọn học viên có sẵn khi tạo hoá đơn — 
- `FLOW04` Chỉnh sửa hoá đơn — 
- `FLOW05` Xem học phí của hoá đơn — 
- `FLOW06` Thêm học phí — 
- `FLOW07` Copy tên hoá đơn — 
- `FLOW08` Xoá hoá đơn — 
- `FLOW09` Lọc và tìm kiếm — 
- `FLOW10` Thêm người phụ trách và KPI — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-HD-010006` | Sau khi thêm tag | Trạng thái | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010006` | Figma | trung bình |
| `ADM-HD-010007` | Sau khi thêm lịch hẹn | Trạng thái | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010007` | Figma | trung bình |
| `ADM-HD-010010` | Popup thêm hoá đơn | Popup | ADM-HD-010000 | ADM-HD-010000 | ADM-HD-010000 | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010010` | Figma | cao |
| `ADM-HD-010011` | Chọn đơn vị tiền | Trạng thái | ADM-HD-010010 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010011` | Figma | cao |
| `ADM-HD-010012` | Chọn học viên có sẵn | Trạng thái | ADM-HD-010010 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010012` | Figma | cao |
| `ADM-HD-010013` | Mở danh sách | Trạng thái | ADM-HD-010012 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010013` | Figma | cao |
| `ADM-HD-010020` | Lịch sử hoá đơn | Trạng thái | ADM-HD-010000 | ADM-HD-010000 | ADM-HD-010000 | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010020` | Figma | trung bình |
| `ADM-HD-010021` | Cuộn ngang tới cuối | Trạng thái | ADM-HD-010020 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010021` | Figma | trung bình |
| `ADM-HD-010022` | Mở chi tiết học phí + hover | Trạng thái | ADM-HD-010020 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010022` | Figma | trung bình |
| `ADM-HD-010030` | Popup chỉnh sửa hoá đơn | Popup | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010030` | Figma | cao |
| `ADM-HD-010040` | Popup xem ảnh hoá đơn | Popup | ADM-HD-010000 | ADM-HD-010000 | ADM-HD-010000, ADM-HD-010102, ADM-HD-010202, ADM-HD-010302 | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010040` | Figma | cao |
| `ADM-HD-010050` | Popup chọn học viên đã liên kết | Popup | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010050` | Figma | cao |
| `ADM-HD-010060` | Popup thêm học phí | Popup | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010060` | Figma | cao |
| `ADM-HD-010061` | Học viên mới | Trạng thái | ADM-HD-010060 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010061` | Figma | cao |
| `ADM-HD-010070` | Popup thêm người phụ trách | Popup | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010070` | Figma | cao |
| `ADM-HD-010071` | Chọn người phụ trách | Trạng thái | ADM-HD-010070 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010071` | Figma | cao |
| `ADM-HD-010072` | Chọn trạng thái | Trạng thái | ADM-HD-010070 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010072` | Figma | cao |
| `ADM-HD-010073` | Chọn số KPI | Trạng thái | ADM-HD-010070 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010073` | Figma | cao |
| `ADM-HD-010080` | Popup thêm (thao tác học viên) | Popup | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010080` | Figma | cao |
| `ADM-HD-010081` | Chọn Xem lịch sử | Trạng thái | ADM-HD-010080 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010081` | Figma | cao |
| `ADM-HD-010082` | Chọn Thêm Lịch Hẹn | Trạng thái | ADM-HD-010080 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010082` | Figma | cao |
| `ADM-HD-010090` | Popup thêm tag | Popup | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010090` | Figma | cao |
| `ADM-HD-010102` | Dropdown · Nhận tiền, Thời gian, Tag, Menu hành động | Dropdown | ADM-HD-010000 | ADM-HD-010000 | ADM-HD-010000 | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010102` | Figma | cao |
| `ADM-HD-010103` | Menu ⋮ · Thêm học phí | Trạng thái | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010103` | Figma | trung bình |
| `ADM-HD-010104` | Menu ⋮ · Chỉnh sửa | Trạng thái | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010104` | Figma | trung bình |
| `ADM-HD-010110` | Popup thêm lịch hẹn | Popup | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010110` | Figma | cao |
| `ADM-HD-010111` | Popup cập nhật lịch hẹn | Popup | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010111` | Figma | cao |
| `ADM-HD-010120` | Lịch sử lớp | Trạng thái | ADM-HD-010020 | ADM-HD-010000 | ADM-HD-010020 | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010120` | Figma | cao |
| `ADM-HD-010130` | Popup danh sách lịch hẹn | Popup | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010130` | Figma | cao |
| `ADM-HD-010202` | Dropdown · Hoá đơn đỏ, Loại hoá đơn, Đổi trạng thái | Dropdown | ADM-HD-010000 | ADM-HD-010000 | ADM-HD-010000, ADM-HD-010102 | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010202` | Figma | cao |
| `ADM-HD-010224` | Trống | Trạng thái | ADM-HD-010020 | ADM-HD-010000 | ADM-HD-010020, ADM-HD-010120 | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010224` | Figma | trung bình |
| `ADM-HD-010225` | Có ghi chú & bình luận | Trạng thái | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010225` | Figma | trung bình |
| `ADM-HD-010230` | Popup thêm ghi chú | Popup | ADM-HD-010000 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010230` | Figma | cao |
| `ADM-HD-010231` | Mở Loại | Trạng thái | ADM-HD-010230 | ADM-HD-010000 | — | `/hoa-don/danh-sach-hoa-don?state=ADM-HD-010231` | Figma | cao |
| `ADM-HD-010302` | Dropdown · Người phụ trách, Trạng thái | Dropdown | ADM-HD-010000 | ADM-HD-010000 | ADM-HD-010000, ADM-HD-010102, ADM-HD-010202 | `/hoa-don/danh-sach-hoa-don?popup=ADM-HD-010302` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Danh Sách Hoá Đơn

Frame: chưa có (tool đoán:ADM-HD-010020, ADM-HD-010040, ADM-HD-010102, ADM-HD-010202, ADM-HD-010302) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 2: Popup Thêm hoá đơn / Chỉnh sửa hoá đơn

Frame: chưa có (tool đoán:ADM-HD-010010, ADM-HD-010011, ADM-HD-010030, ADM-HD-010070, ADM-HD-010072) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Trang 3: Popup Chọn học viên liên kết hoá đơn

Frame: chưa có (tool đoán:ADM-HD-010012, ADM-HD-010050, ADM-HD-010061, ADM-HD-010080) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A04` Trang 4: Popup Thêm học phí

Frame: chưa có (tool đoán:ADM-HD-010022, ADM-HD-010060) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Tên hoá đơn tự động | Tên tạo theo rule: `[Loại hoá đơn] - [Lớp dự kiến] - [Mã học viên] - [Tên học viên] - [Quy đổi (VND)] - [Tài khoản nhận]` (vd: `[SALE] Mới - DN1_ - 103303 - Tai Nguyen - 680.000 đ - ...`). Không nhập trực tiếp. Tự cập nhật khi một trong các thành phần đổi. **Thành phần nào trống thì bỏ thành phần đó** (kèm dấu phân cách của nó). |
| `REQ02` | Đồng bộ Tên - Mã học viên | Khi tick "Chọn học viên có sẵn" (popup hoá đơn và popup học phí), chọn Tên hoặc Mã thì trường còn lại tự điền theo, giống Ship Sách. |
| `REQ03` | Đồng bộ với CG | Hoá đơn thêm bên CG hiển thị bên ICS và ngược lại. Bên CG không được sửa / xoá hoá đơn, chỉ được sửa KPI. Bên ICS chỉnh sửa đầy đủ. Học phí chỉ thêm được bên ICS. Khi 2 bên cùng sửa thì bên lưu trước được ưu tiên, bên lưu sau nhận thông báo "đã có dữ liệu mới, vui lòng reload trang". |
| `REQ04` | Cột Học phí | Cột Học phí = số lượng học phí của hoá đơn, phải khớp số dòng ở phần học phí xổ xuống (sửa lỗi đang hiển thị 0 khi thực tế là 1). |
| `REQ05` | Menu ba chấm | Giai đoạn này chỉ làm: Thêm học phí, Chỉnh sửa, Copy, Xoá hoá đơn. Lịch sử hành động, Xuất hoá đơn hiển thị nhưng disable. |
| `REQ06` | Copy | Copy chỉ copy **tên hoá đơn** vào clipboard, không tạo hoá đơn mới. |
| `REQ07` | Xoá mềm có xác nhận và đồng bộ học phí | Xoá hoá đơn phải xác nhận và là xoá mềm. Đồng bộ các khoản học phí, số dư của tất cả học viên liên kết và học phí theo lớp liên quan; học phí thuộc hoá đơn đã xoá không còn hiệu lực. Tính lại số liệu từ hoá đơn/học phí còn hiệu lực và tải lại các màn liên quan. Chỉ báo thành công khi đồng bộ hoàn tất; Huỷ/lỗi giữ nguyên toàn bộ, không cập nhật dở dang hoặc tự tạo giao dịch hoàn tiền. |
| `REQ08` | KPI người phụ trách | Mỗi người phụ trách có Trạng thái (Mới, Đã xác nhận, Đã huỷ, Đã xoá; chỉ ghi nhận, không ảnh hưởng hiển thị / KPI) và Số KPI (từ -10 đến 10, bước 0.05). Thêm qua popup Thêm người phụ trách; trong popup Chỉnh sửa, KPI cạnh tên người phụ trách sửa trực tiếp được. Cột KPI = tổng KPI các người phụ trách; thẻ Tổng KPI lấy từ dữ liệu này. |
| `REQ09` | Thêm học phí 2 bước | Bấm Thêm học phí → popup chọn học viên đã liên kết hoá đơn (có nút Thêm học viên) → popup Thêm học phí. |
| `REQ10` | Học viên mới và mã tự tạo | Khi không tick "Chọn học viên có sẵn" (kể cả khi vào từ nút Thêm học viên ở popup chọn học viên liên kết): nhập Tên, Email, chọn Level (số tự nhiên 1-9), ẩn trường Mã học viên. Mã = Level + 5 chữ số (vd Level 3 → 300001), không trùng, trùng thì tự tăng. Học viên mới được liên kết vào hoá đơn. |
| `REQ11` | Màu loại hoá đơn | 14 loại hoá đơn, mỗi loại 1 màu cố định lấy theo Figma. |
| `REQ12` | Bộ lọc theo user | Bộ lọc (Nhận tiền, Hoá đơn đỏ, Người phụ trách, Thời gian, Loại hoá đơn, Trạng thái, Tag) lưu riêng theo từng user. Mặc định Thời gian = Hôm nay áp dụng cho Ngày ghi nhận; Tới hạn = từ hôm nay trở về trước. Các thẻ thống kê đổi theo bộ lọc (Số ngày = số ngày của khoảng lọc). |
| `REQ13` | Tiền tệ, quy đổi | Đơn vị: VND, USD, EUR, JPY, CNY, KRW, GBP. VND thì Quy đổi tự điền bằng Số tiền nhưng vẫn sửa được; khác VND thì không tự quy đổi, bắt buộc nhập tay Quy đổi. |
| `REQ14` | Tài khoản nhận | Gồm: Tài khoản cá nhân, Tài khoản công ty, Tiền mặt, Khác. |
| `REQ15` | Số tiền đã đóng / Còn lại | Số tiền đã đóng = số tiền làm hoá đơn bên CG. Còn lại = Số tiền đã đóng − tổng học phí đã thêm. **Còn lại không được âm:** Giá trị học phí không được vượt Còn lại (vd Còn lại 500.000 đ thì học phí tối đa 500.000 đ; phần còn thiếu user tự tạo ở hoá đơn khác). |
| `REQ16` | Hoá đơn đỏ | Bộ lọc Hoá đơn đỏ dựa vào checkbox "Xuất hoá đơn công ty": tick = Đã tạo, không tick = Chưa có. |
| `REQ17` | Tệp đính kèm | Hỗ trợ PDF, DOC, DOCX, PPT, PPTX, tối đa 20MB mỗi file; hiển thị ở cột Hình. |
| `REQ18` | Trung tâm | Danh sách có bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số và phân trang chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header. Khi tạo mới bắt buộc chọn `Trung tâm`; bản ghi được lưu thuộc trung tâm đã chọn. Backend kiểm tra lại trung tâm khi lưu, không chỉ dựa vào UI. |
| `EX01` | Ngoại lệ | Bấm "Thêm" / "Cập nhật" khi thiếu trường bắt buộc → Báo lỗi tại trường thiếu, không lưu, popup không đóng. |
| `EX02` | Ngoại lệ | Bấm "Thêm" ở popup Thêm học phí khi chưa chọn Lớp học, chưa nhập Giá trị (hoặc chưa chọn Level khi không tick) → Báo lỗi, không tạo học phí. |
| `EX03` | Ngoại lệ | Hoá đơn chưa có học viên liên kết khi bấm "Thêm học phí" → Popup chọn học viên hiển thị danh sách rỗng, người dùng bấm "Thêm học viên" để tiếp tục. |
| `EX04` | Ngoại lệ | Bỏ tick "Chọn học viên có sẵn" ở Thêm học phí, nhập Email sai định dạng → Báo lỗi định dạng email, không lưu. |
| `EX05` | Ngoại lệ | Tệp đính kèm sai định dạng (ngoài PDF, DOC, DOCX, PPT, PPTX) hoặc vượt 20MB → Từ chối file, báo lỗi, không đính kèm. |
| `EX06` | Ngoại lệ | Thêm / sửa / xoá / thêm học phí thất bại (lỗi hệ thống hoặc đồng bộ CG) → Báo lỗi, giữ nguyên dữ liệu trước đó. |
| `EX07` | Ngoại lệ | Mã học viên tự tạo bị trùng → Hệ thống tự tăng số lên đến khi không trùng. |
| `EX08` | Ngoại lệ | Hoá đơn (vd KPI) bị sửa đồng thời ở ICS và CG → Giữ dữ liệu của bên lưu trước, bên lưu sau không ghi đè và nhận thông báo "đã có dữ liệu mới, vui lòng reload trang". |
| `EX09` | Ngoại lệ | Giá trị học phí lớn hơn "Còn lại" của hoá đơn → Báo lỗi, không tạo học phí (Còn lại không được âm). |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Thêm hoá đơn thành công | High | Có | Flow 1, REQ01, REQ13 | — |  |
| `TC02` | Case 2: Thêm hoá đơn thiếu trường bắt buộc | High |  | EX01 | — |  |
| `TC03` | Case 3: Chọn học viên có sẵn, đồng bộ Tên - Mã | High |  | Flow 3, REQ02 | — |  |
| `TC04` | Case 4: Chỉnh sửa hoá đơn và KPI | High | Có | Flow 4, Flow 10, REQ08 | — |  |
| `TC05` | Case 5: Xổ học phí và cột Học phí | High |  | Flow 5, REQ04 | — |  |
| `TC06` | Case 6: Thêm học phí cho học viên đã liên kết | High |  | Flow 6, REQ09, REQ15, EX09 | — |  |
| `TC07` | Case 7: Thêm học viên mới, mã tự tạo theo Level | High |  | Flow 6, REQ10, EX03, EX04, EX07 | — |  |
| `TC08` | Case 8: Đồng bộ với CG | High |  | Flow 2, REQ03, EX08 | — |  |
| `TC09` | Case 9: Bộ lọc lưu theo user | High |  | Flow 9, REQ12, REQ16 | — |  |
| `TC10` | Case 10: Copy tên, xoá mềm hoá đơn và menu disable | High |  | Flow 7, Flow 8, REQ05, REQ06, REQ07 | — |  |
| `TC11` | Case 11: Lọc danh sách theo trung tâm | High |  | REQ18 | — |  |
| `TC12` | Case 12: Bắt buộc chọn trung tâm khi tạo | High |  | REQ18 | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Frame Figma chưa có requirement (35): `ADM-HD-010006`, `ADM-HD-010007`, `ADM-HD-010010`, `ADM-HD-010011`, `ADM-HD-010012`, `ADM-HD-010013`, `ADM-HD-010020`, `ADM-HD-010021`, `ADM-HD-010022`, `ADM-HD-010030`, `ADM-HD-010040`, `ADM-HD-010050`, `ADM-HD-010060`, `ADM-HD-010061`, `ADM-HD-010070`, `ADM-HD-010071`, `ADM-HD-010072`, `ADM-HD-010073`, `ADM-HD-010080`, `ADM-HD-010081`, `ADM-HD-010082`, `ADM-HD-010090`, `ADM-HD-010102`, `ADM-HD-010103`, `ADM-HD-010104`, `ADM-HD-010110`, `ADM-HD-010111`, `ADM-HD-010120`, `ADM-HD-010130`, `ADM-HD-010202`, `ADM-HD-010224`, `ADM-HD-010225`, `ADM-HD-010230`, `ADM-HD-010231`, `ADM-HD-010302`
- Phân loại cần design duyệt (9): `ADM-HD-010006`, `ADM-HD-010007`, `ADM-HD-010020`, `ADM-HD-010021`, `ADM-HD-010022`, `ADM-HD-010103`, `ADM-HD-010104`, `ADM-HD-010224`, `ADM-HD-010225`
- Thiếu prototype link đi vào (27): `ADM-HD-010006`, `ADM-HD-010007`, `ADM-HD-010011`, `ADM-HD-010012`, `ADM-HD-010013`, `ADM-HD-010021`, `ADM-HD-010022`, `ADM-HD-010030`, `ADM-HD-010050`, `ADM-HD-010060`, `ADM-HD-010061`, `ADM-HD-010070`, `ADM-HD-010071`, `ADM-HD-010072`, `ADM-HD-010073`, `ADM-HD-010080`, `ADM-HD-010081`, `ADM-HD-010082`, `ADM-HD-010090`, `ADM-HD-010103`, `ADM-HD-010104`, `ADM-HD-010110`, `ADM-HD-010111`, `ADM-HD-010130`, `ADM-HD-010225`, `ADM-HD-010230`, `ADM-HD-010231`
- REQ/EX chưa có testcase (6): `REQ11`, `REQ14`, `REQ17`, `EX02`, `EX05`, `EX06`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
