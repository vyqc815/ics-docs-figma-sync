# Tạo khảo sát (Admin)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-KS-010000` | Khảo sát / Tạo khảo sát / Tạo cuộc khảo sát | `/khao-sat/tao-khao-sat/tao-cuoc-khao-sat` | `ADM-KS-010000-DK` | QC |
| `ADM-KS-020000` | Khảo sát / Tạo khảo sát cho lớp / Tạo cuộc khảo sát | `/khao-sat/tao-khao-sat-cho-lop/tao-cuoc-khao-sat` | `ADM-KS-020000-DK` | QC |
| `ADM-KS-030000` | Khảo sát / Tạo khảo sát học viên / Tạo cuộc khảo sát | `/khao-sat/tao-khao-sat-hoc-vien/tao-cuoc-khao-sat` | `ADM-KS-030000-DK` | QC |

Requirement: `survey_bug/survey/01-create-survey/01-create-survey.md` — Tạo khảo sát (Admin) (tiền tố `SB-0CS`).

## 2. Luồng

- `FLOW01` Tạo nhanh khảo sát — 
- `FLOW02` Soạn câu hỏi & lưu — 
- `FLOW03` Đổi trạng thái khảo sát — 
- `FLOW04` Nhân bản khảo sát — 
- `FLOW05` Sắp xếp / xoá khảo sát — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Trang 1: Tạo khảo sát — tab Giáo viên / Lớp

Frame: chưa có (tool đoán:ADM-KS-010000, ADM-KS-020000, ADM-KS-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 2: Tạo khảo sát — tab Học viên

Frame: chưa có (tool đoán:ADM-KS-010000, ADM-KS-020000, ADM-KS-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Popup: Xem trước khảo sát

Frame: chưa có (tool đoán:ADM-KS-010000, ADM-KS-020000, ADM-KS-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Trim dữ liệu | Trim tên, mô tả, nội dung câu hỏi, đáp án. Chỉ có khoảng trắng = trống. |
| `REQ02` | Dòng đáp án trống | Không lưu, không hiển thị ở Xem trước. |
| `REQ03` | Ký hiệu đáp án | Admin nhập text thuần. A, B, C… do hệ thống tự gắn theo thứ tự khi hiển thị cho người làm và ở kết quả. |
| `REQ04` | Empty state | Tab chưa có khảo sát / chưa chọn khảo sát → panel giữa hiển thị hướng dẫn tạo khảo sát ở danh sách bên phải. |
| `REQ05` | Thang đánh giá | Cố định 1–5 sao. |
| `REQ06` | Khảo sát đã giao | Khảo sát đã thêm vào trang Giao vẫn giữ nguyên (người nhận làm và xem kết quả bình thường) khi khảo sát chuyển Vô hiệu hoặc bị xoá ở trang Tạo. |
| `REQ07` | Dùng chung component | Phần hiển thị câu hỏi ở Xem trước dùng chung với màn Làm khảo sát ([03-take-survey.md](./03-take-survey.md)) và popup Kết quả từng giáo viên ([02-assign-survey.md](./02-assign-survey.md)). |
| `EX01` | Ngoại lệ | Đổi khảo sát / đổi tab / rời trang khi còn thay đổi chưa lưu → popup "Bạn có thay đổi chưa lưu" (Lưu / Bỏ thay đổi / Huỷ). |
| `EX02` | Ngoại lệ | Lưu khi có câu hỏi trống nội dung, hoặc câu Trắc nghiệm / Hộp kiểm không có đáp án nào → không lưu, báo lỗi ngay dưới câu đó. |
| `EX03` | Ngoại lệ | Chuyển Nháp → Công khai khi chưa có câu hỏi → chặn, toast "Khảo sát chưa có câu hỏi". Khi còn thay đổi chưa lưu → yêu cầu lưu trước. |
| `EX04` | Ngoại lệ | Xoá hết tên khảo sát trên card rồi blur → khôi phục tên cũ. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Tạo nhanh khảo sát | High |  | Flow 1 | — |  |
| `TC02` | Case 2: Soạn & lưu đủ 4 loại câu hỏi | High |  | Flow 2 | — |  |
| `TC03` | Case 3: Nhập đáp án & đổi loại câu | Medium |  | UI | — |  |
| `TC04` | Case 4: Nhân bản, kéo thả, xoá câu | Medium |  | UI | — |  |
| `TC05` | Case 5: Validate khi lưu | High |  | EX02 | — |  |
| `TC06` | Case 6: Rời khi chưa lưu | High |  | EX01 | — |  |
| `TC07` | Case 7: Xem trước | Medium |  | UI | — |  |
| `TC08` | Case 8: Đổi trạng thái khảo sát | High |  | Flow 3, EX03 | — |  |
| `TC09` | Case 9: Nhân bản & xoá khảo sát | High |  | Flow 4, Flow 5, REQ06 | — |  |
| `TC10` | Case 10: Quyền truy cập | High |  | Ràng buộc quyền | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Testcase không trỏ REQ (4): `TC03`, `TC04`, `TC07`, `TC10`
- REQ/EX chưa có testcase (7): `REQ01`, `REQ02`, `REQ03`, `REQ04`, `REQ05`, `REQ07`, `EX04`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
