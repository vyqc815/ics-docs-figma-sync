# Template Tin Nhắn

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-TN-010000` | Tin nhắn / Danh sách mẫu tin nhắn | `/tin-nhan/danh-sach-mau-tin-nhan` | `ADM-TN-010000-DK` | QC |

Requirement: `ship_books/message_template/message_template.md` — Template Tin Nhắn (tiền tố `SB-MT`).

## 2. Luồng

- `FLOW01` Thêm nhanh template — 
- `FLOW02` Sửa tên / nội dung template — 
- `FLOW03` Chèn biến / định dạng — 
- `FLOW04` Bật / tắt template — 
- `FLOW05` Copy nội dung template — 
- `FLOW06` Xoá template — 
- `FLOW07` Sắp xếp vị trí template — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-TN-010004` | Tin nhắn mới (nội dung trống) | Trạng thái | ADM-TN-010000 | ADM-TN-010000 | — | `/tin-nhan/danh-sach-mau-tin-nhan?state=ADM-TN-010004` | Figma | trung bình |

## 4. Khu vực và item

### `A01` Trang 1: Danh Sách Tin Nhắn

Frame: chưa có (tool đoán:ADM-TN-010004) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Chèn biến / định dạng cố định | Danh sách nút Chèn biến và Định dạng là cố định (cấu hình trong code), người dùng không thêm / sửa / xoá được. Chỉ được sửa **tên** và **nội dung** template. |
| `REQ02` | Xem trước dùng dữ liệu cố định | Xem trước thay biến bằng bộ dữ liệu ví dụ cố định trong code. Biến không thuộc danh sách (người dùng gõ tay sai tên) giữ nguyên text, không thay. |
| `REQ03` | Chèn tại vị trí con trỏ | Biến và dấu đầu dòng chèn tại vị trí con trỏ hiện tại, sau khi chèn con trỏ nằm ngay sau nội dung vừa chèn. |
| `REQ04` | Thêm nhanh | Nhập tên + Enter hoặc bấm "+" để tạo. Template mới có trạng thái mặc định **Tắt**, nội dung trống, nằm ở **cuối danh sách**. Sau khi tạo, ô nhập được xoá trống. |
| `REQ05` | Copy nội dung | Icon copy chỉ copy nội dung tin nhắn vào clipboard, không tạo template mới. |
| `REQ06` | Xoá mềm có xác nhận | Xoá template phải qua popup xác nhận và là xoá mềm. Tin đã gửi từ template đó vẫn hiển thị bình thường (thời gian + nội dung đã gửi). Sau khi xoá, template không còn để chọn khi gửi tin mới. |
| `REQ07` | Liên kết Ship Sách | Chỉ template **đang bật** mới xuất hiện trong dropdown "Chọn mẫu tin nhắn" ở popup Xác nhận gửi tin nhắn (Ship Sách). Thứ tự trong dropdown không phụ thuộc vị trí template ở màn này. |
| `REQ08` | Thông tin cập nhật | Mỗi lần lưu ghi lại thời điểm và Admin lưu, hiển thị ở dòng "Cập nhật ..." cuối khu vực chỉnh sửa. |
| `REQ09` | Nút Lưu và nội dung nháp | Nút Lưu chỉ sáng khi nội dung khác bản đã lưu. Nội dung đang sửa chưa lưu được giữ lại khi thu gọn / mở card khác, mất khi reload trang. Cho phép nhiều card mở rộng cùng lúc. |
| `REQ10` | Điều kiện bật | Template chỉ bật được khi đã có nội dung. Template mới mặc định Tắt. |
| `REQ11` | Sắp xếp vị trí | Kéo thả card bằng icon 6 chấm để đổi vị trí. Vị trí được lưu lại (reload vẫn giữ), dùng chung cho mọi Admin. Kéo thả được cả khi đang tìm kiếm / lọc. Không làm thay đổi nội dung, trạng thái bật / tắt của template và không áp dụng cho thứ tự trong dropdown ở Ship Sách. |
| `REQ12` | Trung tâm | Danh sách có bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số và phân trang chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header. Khi tạo mới bắt buộc chọn `Trung tâm`; bản ghi được lưu thuộc trung tâm đã chọn. Backend kiểm tra lại trung tâm khi lưu, không chỉ dựa vào UI. |
| `EX01` | Ngoại lệ | Nhập tên rỗng (hoặc chỉ có khoảng trắng) rồi Enter / bấm "+" → Không tạo template. |
| `EX02` | Ngoại lệ | Bấm "Lưu" khi tên hoặc nội dung rỗng → Báo lỗi bắt buộc nhập, không lưu. |
| `EX03` | Ngoại lệ | Bấm "Chèn biến" / "Dấu đầu dòng" khi con trỏ chưa đặt trong ô nội dung → Chèn vào cuối nội dung. |
| `EX04` | Ngoại lệ | Thêm / sửa / xoá / bật tắt / sắp xếp thất bại (lỗi hệ thống) → Báo lỗi, giữ nguyên trạng thái trước đó (toggle trả về vị trí cũ, card giữ nguyên, card kéo thả trả về vị trí cũ). |
| `EX05` | Ngoại lệ | Bấm toggle bật khi template chưa có nội dung → Không bật, báo cần nhập nội dung trước. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Thêm nhanh bằng Enter / nút + | High | Có | Flow 1, REQ04 | — |  |
| `TC02` | Case 2: Template mới mặc định Tắt, chỉ bật khi có nội dung | High |  | REQ10, EX05 | — |  |
| `TC03` | Case 3: Thêm nhanh với tên rỗng | Medium |  | EX01 | — |  |
| `TC04` | Case 4: Sửa tên / nội dung và lưu | High | Có | Flow 2, REQ08 | — |  |
| `TC05` | Case 5: Nút Lưu sáng và giữ nội dung nháp | High |  | Flow 2, REQ09 | — |  |
| `TC06` | Case 6: Lưu khi thiếu tên / nội dung | High |  | EX02 | — |  |
| `TC07` | Case 7: Chèn biến, dấu đầu dòng và xem trước | High |  | Flow 3, REQ01-03 | — |  |
| `TC08` | Case 8: Bật / tắt template và liên kết Ship Sách | High |  | Flow 4, REQ07 | — |  |
| `TC09` | Case 9: Copy nội dung template | Medium |  | Flow 5, REQ05 | — |  |
| `TC10` | Case 10: Xoá mềm template đã dùng gửi tin | High | Có | Flow 6, REQ06 | — |  |
| `TC11` | Case 11: Sắp xếp vị trí template | High |  | Flow 7, REQ11, EX04 | — |  |
| `TC12` | Case 12: Lọc danh sách theo trung tâm | High |  | REQ12 | — |  |
| `TC13` | Case 13: Bắt buộc chọn trung tâm khi tạo | High |  | REQ12 | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Frame Figma chưa có requirement (1): `ADM-TN-010004`
- Phân loại cần design duyệt (1): `ADM-TN-010004`
- Thiếu prototype link đi vào (1): `ADM-TN-010004`
- REQ/EX chưa có testcase (3): `REQ02`, `REQ03`, `EX03`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
