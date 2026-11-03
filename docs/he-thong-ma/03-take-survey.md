# Giáo viên làm khảo sát (Web)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-KS-010000` | Khảo sát / Danh sách khảo sát | `/khao-sat/danh-sach-khao-sat` | `GV-KS-010000-DK` | QC |

Requirement: `survey_bug/survey/03-take-survey/03-take-survey.md` — Giáo viên làm khảo sát (Web) (tiền tố `SB-0TS`).

## 2. Luồng

- `FLOW01` Nhận thông báo — 
- `FLOW02` Làm & lưu nháp — 
- `FLOW03` Gửi khảo sát — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-KS-010001` | Popup thông báo khảo sát mới | Popup | GV-KS-010000 | GV-KS-010000 | — | `/khao-sat/danh-sach-khao-sat?popup=GV-KS-010001` | Figma | cao |

## 4. Khu vực và item

### `A01` Popup: Thông báo khảo sát mới

Frame: chưa có (tool đoán:GV-KS-010001) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 1: Khảo sát của tôi — tab Cần làm

Frame: chưa có (tool đoán:GV-KS-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Trang 2: Khảo sát của tôi — tab Đã hoàn thành

Frame: chưa có (tool đoán:GV-KS-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A04` Trang 3: Làm khảo sát

Frame: chưa có (tool đoán:GV-KS-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Đoạn ngắn | Trim; chỉ có khoảng trắng = chưa trả lời. |
| `REQ02` | Ký hiệu đáp án | Hệ thống tự gắn A, B, C… theo thứ tự đáp án. |
| `REQ03` | Nháp lưu trên server | Mở lại trên máy / trình duyệt khác vẫn còn câu trả lời nháp. |
| `REQ04` | Badge | Badge sidebar và số trên tab cập nhật sau khi gửi, không cần F5. |
| `REQ05` | Dùng chung component | Phần hiển thị câu hỏi dùng chung với Xem trước ([01-create-survey.md](./01-create-survey.md)) và popup Kết quả từng giáo viên ([02-assign-survey.md](./02-assign-survey.md)). |
| `EX01` | Ngoại lệ | Khảo sát bị thu hồi / xoá khi GV đang làm → Lưu nháp / Gửi trả lỗi → popup "Khảo sát đã bị thu hồi" → về Khảo sát của tôi. |
| `EX02` | Ngoại lệ | Rời trang (back, đổi menu) khi còn thay đổi chưa lưu → popup xác nhận (Lưu nháp & rời / Rời không lưu / Ở lại). Đóng tab / F5 → cảnh báo mặc định của trình duyệt. |
| `EX03` | Ngoại lệ | Truy cập URL khảo sát không được giao / đã thu hồi → báo "Không tìm thấy khảo sát" → về danh sách. Đã hoàn thành → chuyển sang chế độ xem lại. |
| `EX04` | Ngoại lệ | Gửi / Lưu nháp lỗi mạng → giữ nguyên câu trả lời trên màn hình, toast lỗi, cho thao tác lại. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Popup khảo sát mới | High |  | Flow 1 | — |  |
| `TC02` | Case 2: Để sau & nhiều khảo sát | Medium |  | Flow 1 | — |  |
| `TC03` | Case 3: Danh sách & lọc trung tâm | Medium |  | UI | — |  |
| `TC04` | Case 4: Lưu nháp & tiếp tục | High |  | Flow 2 | — |  |
| `TC05` | Case 5: Gửi thiếu câu bắt buộc | High |  | Flow 3 | — |  |
| `TC06` | Case 6: Gửi thành công | High |  | Flow 3 | — |  |
| `TC07` | Case 7: Rời trang chưa lưu | Medium |  | EX02 | — |  |
| `TC08` | Case 8: Bị thu hồi khi đang làm | High |  | EX01 | — |  |
| `TC09` | Case 9: Truy cập URL không hợp lệ | Medium |  | EX03 | — |  |
| `TC10` | Case 10: Kiểu trả lời | Medium |  | UI, REQ01 | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Frame Figma chưa có requirement (1): `GV-KS-010001`
- Thiếu prototype link đi vào (1): `GV-KS-010001`
- Testcase không trỏ REQ (1): `TC03`
- REQ/EX chưa có testcase (5): `REQ02`, `REQ03`, `REQ04`, `REQ05`, `EX04`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
