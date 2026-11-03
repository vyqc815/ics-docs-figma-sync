# Lộ Trình (S2)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-020200` | Chi tiết khoá học / Lộ trình | `/chi-tiet-khoa-hoc/lo-trinh` | `CD-KH-020200-DK` | QC |

Requirement: `course_management/learning-path-s2/learning-path-s2.md` — Lộ Trình (S2) (tiền tố `CM-LPS`).

## 2. Luồng

- `FLOW01` Vào màn Lộ Trình (S2) — 
- `FLOW02` Tick / bỏ tick 1 ô — 
- `FLOW03` Ví dụ tính toán — 
- `FLOW04` Đổi Kỳ của bài học — 
- `FLOW05` Kéo thả sắp xếp bài học — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Trang 1: Nội dung buổi học (Lộ Trình S2)

Frame: chưa có (tool đoán:CD-KH-020200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Nguồn dữ liệu cột | Danh sách cột buổi học, số buổi, thời gian mỗi buổi lấy từ S1. Thứ tự cột theo thứ tự ở S1. |
| `REQ02` | Tính toán realtime | Header cột và cột Thời gian của hàng được tính lại ngay sau mỗi lần tick/bỏ tick, không cần reload. |
| `REQ03` | Công thức | Tổng phút cột = số ô đã tick × phút/buổi. Thời gian hàng = tổng phút/buổi của các ô đã tick trong hàng đó, hiển thị `HH:mm:ss`. |
| `REQ04` | Freeze | Cố định 3 cột đầu và hàng đầu khi cuộn ngang/dọc. Khi cuộn ngang, cột buổi học không đè lên 3 cột cố định. |
| `REQ05` | Màu đỏ | Chỉ áp dụng cho header khi lố buổi (cả số buổi và số phút). Cột Thời gian không có trạng thái đỏ. |
| `REQ06` | Tự động lưu | Mỗi thao tác tick/bỏ tick, đổi Kỳ, kéo thả gọi API cập nhật ngay, không có nút Lưu. Nếu API lỗi thì hoàn tác thao tác vừa làm và báo lỗi (EX07). |
| `REQ07` | Kéo thả bài học | Thứ tự bài học được lưu; thứ tự này chỉ dùng cho màn này, không ảnh hưởng chỗ khác. |
| `REQ08` | Dropdown Kỳ | Danh sách kỳ lấy từ khoá học hiện tại; mặc định chọn sẵn kỳ của bài học đó. |
| `EX01` | Ngoại lệ | Số ô đã tick của 1 cột > tổng số buổi ở S1 → vẫn cho tick, số buổi và số phút ở header hiển thị đỏ (ví dụ 05/04). Không hiện popup chặn. |
| `EX02` | Ngoại lệ | Bỏ tick làm số buổi về ≤ tổng số buổi → header trở lại màu cam thường. |
| `EX03` | Ngoại lệ | Hàng bài học chưa tick ô nào → cột Thời gian hiển thị `00:00:00`. |
| `EX04` | Ngoại lệ | S1 đổi số buổi hoặc thời gian mỗi buổi → các ô đã tick giữ nguyên, header tính lại theo giá trị mới của S1; lố thì đỏ, không lố thì màu thường. |
| `EX05` | Ngoại lệ | S1 xoá buổi học → xoá toàn bộ tick của cột đó; cột Thời gian của các hàng liên quan tính lại. |
| `EX06` | Ngoại lệ | S1 thêm buổi học → S2 hiển thị thêm cột mới, chưa có tick (`00/{tổng} [0 PHÚT]`). |
| `EX07` | Ngoại lệ | API tự động lưu bị lỗi (mất mạng, server lỗi) → hoàn tác thao tác vừa thực hiện (ô vừa tick/bỏ tick trở về trạng thái cũ, header và cột Thời gian tính lại theo trạng thái cũ) và hiện thông báo lỗi. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Hiển thị ban đầu và freeze | High | Có | Flow 1, REQ01, REQ04, EX03 | — |  |
| `TC02` | Case 2: Tick, bỏ tick và tự động lưu | High | Có | Flow 2, Flow 3, REQ02, REQ03, REQ06 | — |  |
| `TC03` | Case 3: Tick nhiều cột trong 1 hàng | High |  | REQ03, EX03 | — |  |
| `TC04` | Case 4: Lố buổi và về lại bình thường | High |  | EX01, EX02, REQ05 | — |  |
| `TC05` | Case 5: S1 đổi số buổi hoặc thời gian mỗi buổi | Medium |  | EX04 | — |  |
| `TC06` | Case 6: S1 xoá hoặc thêm buổi học | High |  | EX05, EX06 | — |  |
| `TC07` | Case 7: Đổi Kỳ của bài học | Medium |  | Flow 4, REQ08 | — |  |
| `TC08` | Case 8: Kéo thả sắp xếp bài học | Medium |  | Flow 5, REQ07 | — |  |
| `TC09` | Case 9: API lưu lỗi | High |  | EX07 | — |  |
| `TC10` | Case 10: Phân quyền | High |  | Ràng buộc quyền | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Testcase không trỏ REQ (1): `TC10`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
