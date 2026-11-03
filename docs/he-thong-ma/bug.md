# Báo lỗi & Góp ý

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

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

Frame: chưa có (tool đoán:CD-BL-010000, CH-BL-010000, GV-BL-010000, ADM-GY-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 2: Danh sách Báo lỗi & góp ý

Frame: chưa có (tool đoán:CD-BL-010040, CH-BL-010040, GV-BL-010040) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Trang 3: Popup Gửi báo lỗi

Frame: chưa có (tool đoán:CD-BL-010010, CD-BL-010011, CH-BL-010010, CH-BL-010011, GV-BL-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A04` Trang 4: Popup Chi tiết báo lỗi

Frame: chưa có (tool đoán:CD-BL-010020, CD-BL-010030, CD-BL-010050, CH-BL-010020, CH-BL-010030, CH-BL-010050, GV-BL-010020, GV-BL-010030) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Trang 5: Popup Xác nhận hoàn thành

Frame: chưa có (tool đoán:CD-BL-010000, CH-BL-010000, GV-BL-010000, ADM-GY-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A06` Trang 6: Popup Xem kết quả

Frame: chưa có (tool đoán:CD-BL-010000, CH-BL-010000, GV-BL-010000, ADM-GY-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A07` Trang 7: Popup nhắc bug chưa xử lý (PTL)

Frame: chưa có (tool đoán:CH-BL-010070) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

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
