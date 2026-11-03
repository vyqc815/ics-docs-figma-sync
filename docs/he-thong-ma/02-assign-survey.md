# Giao khảo sát & Kết quả (Admin)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-GKS-010000` | Khảo sát / Giao khảo sát / Danh sách người được giao | `/khao-sat/giao-khao-sat/danh-sach-nguoi-duoc-giao` | `ADM-GKS-010000-DK` | QC |
| `ADM-GKS-020000` | Khảo sát / Giao khảo sát lớp / Danh sách lớp được giao | `/khao-sat/giao-khao-sat-lop/danh-sach-lop-duoc-giao` | `ADM-GKS-020000-DK` | QC |
| `ADM-GKS-030000` | Khảo sát / Giao khảo sát học viên / Danh sách học viên được giao | `/khao-sat/giao-khao-sat-hoc-vien/danh-sach-hoc-vien-duoc-giao` | `ADM-GKS-030000-DK` | QC |

Requirement: `survey_bug/survey/02-assign-survey/02-assign-survey.md` — Giao khảo sát & Kết quả (Admin) (tiền tố `SB-0AS`).

## 2. Luồng

- `FLOW01` Thêm khảo sát cần giao — 
- `FLOW02` Giao khảo sát — 
- `FLOW03` Người vào giữa chừng — 
- `FLOW04` Thao tác từng dòng (menu 3 chấm) — 
- `FLOW05` Xem kết quả — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-GKS-010005` | Popup chọn trung tâm | Popup | ADM-GKS-010000 | ADM-GKS-010000 | — | `/khao-sat/giao-khao-sat/danh-sach-nguoi-duoc-giao?popup=ADM-GKS-010005` | Figma | cao |
| `ADM-GKS-010010` | Popup chọn giáo viên | Popup | ADM-GKS-010000 | ADM-GKS-010000 | — | `/khao-sat/giao-khao-sat/danh-sach-nguoi-duoc-giao?popup=ADM-GKS-010010` | Figma | cao |
| `ADM-GKS-020005` | Popup chọn trung tâm | Popup | ADM-GKS-020000 | ADM-GKS-020000 | — | `/khao-sat/giao-khao-sat-lop/danh-sach-lop-duoc-giao?popup=ADM-GKS-020005` | Figma | cao |
| `ADM-GKS-020010` | Popup chọn lớp | Popup | ADM-GKS-020000 | ADM-GKS-020000 | — | `/khao-sat/giao-khao-sat-lop/danh-sach-lop-duoc-giao?popup=ADM-GKS-020010` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Giao khảo sát — tab Giáo viên

Frame: chưa có (tool đoán:ADM-GKS-010000, ADM-GKS-020000, ADM-GKS-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 2: Giao khảo sát — tab Lớp / Học viên

Frame: chưa có (tool đoán:ADM-GKS-010000, ADM-GKS-020000, ADM-GKS-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Popup 1: Chọn giáo viên (tab Giáo viên)

Frame: chưa có (tool đoán:ADM-GKS-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A04` Popup 2: Chọn lớp (tab Lớp)

Frame: chưa có (tool đoán:ADM-GKS-020010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Popup 3: Chọn trung tâm (tab Học viên — khảo sát Tuỳ chọn)

Frame: chưa có (tool đoán:ADM-GKS-010005, ADM-GKS-020005) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A06` Popup 4: Chọn buổi học (tab Học viên — khảo sát Bắt buộc)

Frame: chưa có (tool đoán:ADM-GKS-010000, ADM-GKS-020000, ADM-GKS-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A07` Trang 3: Giao khảo sát — tab "Kết quả khảo sát"

Frame: chưa có (tool đoán:ADM-GKS-010000, ADM-GKS-020000, ADM-GKS-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A08` Popup 5: Kết quả của 1 lớp / trung tâm

Frame: chưa có (tool đoán:ADM-GKS-010000, ADM-GKS-020000, ADM-GKS-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A09` Popup 6: Kết quả từng giáo viên

Frame: chưa có (tool đoán:ADM-GKS-010000, ADM-GKS-020000, ADM-GKS-030000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Thông báo | Mỗi lần người nhận chuyển sang Chưa làm (giao lần đầu / giao lại) → gửi thông báo: GV = popup trên web, HV = thông báo app. |
| `REQ02` | Nhãn trạng thái | Đang chờ / Đã giao / Thu hồi chỉ để admin theo dõi, không tự giao / thu hồi ai. |
| `REQ03` | Giữ kết quả | Bài Đã hoàn thành luôn được tính vào kết quả, kể cả khi nhãn khảo sát là Thu hồi hoặc dòng bị thu hồi. |
| `REQ04` | Cập nhật số liệu | Số được giao, N học viên, tỉ lệ làm cập nhật ngay sau mọi thao tác giao / thu hồi / xoá. |
| `REQ05` | Disable menu | Item trong menu 3 chấm không hợp lệ với trạng thái hiện tại → disable. |
| `REQ06` | Dữ liệu kết quả mới | Gọi lại API mỗi lần mở tab / popup kết quả, không dùng cache cũ. |
| `REQ07` | Ký hiệu đáp án | A, B, C… theo thứ tự đáp án, đồng nhất với màn làm khảo sát. |
| `EX01` | Ngoại lệ | Xoá dòng đã có bài Đã hoàn thành, hoặc xoá khảo sát khỏi trang Giao khi đã có kết quả → popup cảnh báo "Kết quả khảo sát sẽ bị xoá" → xoá mềm, kết quả không còn tính vào thống kê. |
| `EX02` | Ngoại lệ | Chọn lại lớp đã có trong bảng → chỉ giao cho HV mới; không có HV mới → toast "Không có học viên mới trong lớp". |
| `EX03` | Ngoại lệ | Không có khảo sát Công khai nào để thêm → dropdown hiển thị "Không có khảo sát". |
| `EX04` | Ngoại lệ | Khảo sát đang chọn bị xoá khỏi trang Giao → chọn card đầu tiên; không còn card → empty state. |
| `EX05` | Ngoại lệ | Người trả lời không có avatar → avatar mặc định. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Thêm khảo sát cần giao | High |  | Flow 1, EX03 | — |  |
| `TC02` | Case 2: Popup chọn giáo viên | Medium |  | Popup 1 | — |  |
| `TC03` | Case 3: Giao giáo viên & lọc trung tâm | High |  | Flow 2, Trang 1 | — |  |
| `TC04` | Case 4: Giao lớp & HV vào giữa chừng | High |  | Popup 2, Flow 3, EX02 | — |  |
| `TC05` | Case 5: Tỉ lệ & trạng thái dòng lớp | High |  | Trang 2 | — |  |
| `TC06` | Case 6: Giao HV Bắt buộc | High |  | Popup 4, Flow 2 | — |  |
| `TC07` | Case 7: Thu hồi, giao lại & đổi nhãn | High |  | Flow 4, REQ02, REQ03, REQ05 | — |  |
| `TC08` | Case 8: Xoá mềm | Medium |  | Flow 4, EX01, EX04 | — |  |
| `TC09` | Case 9: Thống kê theo loại câu hỏi | High |  | Flow 5, Trang 3 | — |  |
| `TC10` | Case 10: Kết quả lớp & từng giáo viên | High |  | Flow 5, Popup 5, Popup 6 | — |  |
| `TC11` | Case 11: Quyền truy cập | High |  | Ràng buộc quyền | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Frame Figma chưa có requirement (4): `ADM-GKS-010005`, `ADM-GKS-010010`, `ADM-GKS-020005`, `ADM-GKS-020010`
- Thiếu prototype link đi vào (4): `ADM-GKS-010005`, `ADM-GKS-010010`, `ADM-GKS-020005`, `ADM-GKS-020010`
- Testcase không trỏ REQ (3): `TC02`, `TC05`, `TC11`
- REQ/EX chưa có testcase (5): `REQ01`, `REQ04`, `REQ06`, `REQ07`, `EX05`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
