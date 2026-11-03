# Quản lý cấp độ

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-CDO-010000` | Quản lý cấp độ | `/quan-ly-cap-do` | `CD-CDO-010000-DK` | QC |

Requirement: `curriculum_management_requirement/level_management/level_management_requirements.md` — Quản lý cấp độ (tiền tố `CM-LM2`).

## 2. Luồng

- `FLOW01` Xem danh sách và thêm cấp độ — `REQ01`
- `FLOW02` Chuyển trạng thái cấp độ — `REQ02`
- `FLOW03` Sử dụng Mã cấp độ tại feature khác — `REQ03`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-CDO-010010` | Popup kích hoạt công khai | Popup | CD-CDO-010000 | CD-CDO-010000 | — | `/quan-ly-cap-do?popup=CD-CDO-010010` | Figma | cao |
| `CD-CDO-010012` | Điền sai | Trạng thái | CD-CDO-010010 | CD-CDO-010000 | — | `/quan-ly-cap-do?state=CD-CDO-010012` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Danh sách cấp độ

Frame: chưa có (tool đoán:CD-CDO-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Form thêm/cập nhật cấp độ

Frame: chưa có (tool đoán:CD-CDO-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | id |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | ten-cap-do |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | mo-ta-cap-do |  |  | — |  | `TC09` | Chưa sync | QC |
| `A02.04` | ma-cap-do |  |  | — |  | `TC01`, `TC02`, `TC03`, `TC04`, `TC05` | Chưa sync | QC |
| `A02.05` | trang-thai |  |  | — |  | `TC01`, `TC02`, `TC05`, `TC06` | Chưa sync | QC |

### `A03` Toast phản hồi CRUD

Frame: chưa có (tool đoán:CD-CDO-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa sync | QC |
| `A03.02` | thong-tin |  |  | — |  | `TC09` | Chưa sync | QC |
| `A03.03` | canh-bao |  |  | — |  | `TTC02` | Chưa sync | QC |
| `A03.04` | loi |  |  | — |  |  | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Quản lý danh sách cấp độ | Cho phép `Curriculum Development Handler` xem toàn bộ danh sách và thêm cấp độ mới. Tên, Mô tả và Mã cấp độ là bắt buộc; cấp độ mới mặc định ở trạng thái `Nháp`. |
| `REQ02` | Quản lý trạng thái | Cấp độ có ba trạng thái `Nháp`, `Công khai`, `Vô hiệu hóa` và được chuyển tự do giữa mọi trạng thái. Chỉ cấp độ `Công khai` được dùng cho lựa chọn mới; thay đổi trạng thái không tự động xóa liên kết đã tồn tại. |
| `REQ03` | Cung cấp dữ liệu cấp độ | `Mã cấp độ` là mã tham chiếu dùng khi chọn cấp độ cho khóa học tại feature `Quản lý danh mục`. Danh sách lựa chọn phải lấy từ dữ liệu cấp độ đã định nghĩa và chỉ gồm các bản ghi `Công khai`. |
| `EX01` | Ngoại lệ | Tên cấp độ, Mô tả cấp độ hoặc Mã cấp độ để trống/chỉ chứa khoảng trắng → không tạo hoặc cập nhật cấp độ; hiển thị lỗi tại field tương ứng. |
| `EX02` | Ngoại lệ | Mã cấp độ đã tồn tại → không lưu dữ liệu trùng; giữ lại nội dung người dùng đã nhập để chỉnh sửa. |
| `EX03` | Ngoại lệ | Cấp độ không còn ở trạng thái `Công khai` tại thời điểm feature khác lưu lựa chọn mới → từ chối liên kết mới và yêu cầu tải lại danh sách cấp độ. |
| `EX04` | Ngoại lệ | Chuyển sang `Công khai` khi dữ liệu bắt buộc không hợp lệ hoặc Mã cấp độ bị trùng → giữ nguyên trạng thái trước khi thao tác. |
| `EX05` | Ngoại lệ | Người dùng không có quyền nhưng mở URL hoặc gửi request trực tiếp → từ chối thao tác và không thay đổi dữ liệu. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A03` | `A03.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A03` | `A03.01`, `A03.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A03` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A03` | `A03.01` |
| `TC01` | Case 1: Hiển thị danh sách cấp độ | High | Có | REQ01 | — | `A02.04`, `A02.05` |
| `TC02` | Case 2: Tạo cấp độ Nháp | High | Có | Flow 1 / REQ01 | — | `A02.04`, `A02.05` |
| `TC03` | Case 3: Chặn lưu khi thiếu field bắt buộc | High |  | EX01 / REQ01 | — | `A02.04` |
| `TC04` | Case 4: Chặn Mã cấp độ trùng | High |  | EX02 / REQ01 | — | `A02.04` |
| `TC05` | Case 5: Chuyển đổi giữa mọi trạng thái | High |  | Flow 2 / REQ02 | — | `A02.04`, `A02.05` |
| `TC06` | Case 6: Công khai cấp độ | High | Có | Flow 2 / REQ02 | — | `A02.05` |
| `TC07` | Case 7: Không cho chọn mới cấp độ Nháp/Vô hiệu hóa | High |  | Flow 3 / REQ03 | — |  |
| `TC08` | Case 8: Giữ liên kết khi cấp độ bị vô hiệu hóa | High |  | REQ02 / REQ03 | — |  |
| `TC09` | Case 9: Phản ánh thay đổi dữ liệu cấp độ | Medium |  | Flow 3 / REQ03 | — | `A02.03`, `A03.02` |
| `TC10` | Case 10: Kiểm tra quyền truy cập trực tiếp | High |  | EX05 / Ràng buộc quyền | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (9): `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A03.01`, `A03.02`, `A03.03`, `A03.04`
- Frame Figma chưa có requirement (2): `CD-CDO-010010`, `CD-CDO-010012`
- Thiếu prototype link đi vào (2): `CD-CDO-010010`, `CD-CDO-010012`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (2): `EX03`, `EX04`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
