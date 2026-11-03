# GV-KS-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-KS-010010` | Khảo sát / Làm khảo sát | `/khao-sat/lam-khao-sat` | `GV-KS-010010-DK` | Figma |
| `GV-KS-010020` | Khảo sát / Đã hoàn thành | `/khao-sat/da-hoan-thanh` | `GV-KS-010020-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-KS-010011` | Popup xác nhận gửi | Popup | GV-KS-010010 | GV-KS-010010 | — | `/khao-sat/lam-khao-sat?popup=GV-KS-010011` | Figma | cao |
| `GV-KS-010012` | Popup gửi thành công | Popup | GV-KS-010010 | GV-KS-010010 | — | `/khao-sat/lam-khao-sat?popup=GV-KS-010012` | Figma | cao |
| `GV-KS-010021` | Popup câu trả lời của bạn | Popup | GV-KS-010020 | GV-KS-010020 | — | `/khao-sat/da-hoan-thanh?popup=GV-KS-010021` | Figma | cao |

## 4. Khu vực và item

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Frame Figma chưa có requirement (5): `GV-KS-010010`, `GV-KS-010011`, `GV-KS-010012`, `GV-KS-010020`, `GV-KS-010021`
- Thiếu prototype link đi vào (3): `GV-KS-010011`, `GV-KS-010012`, `GV-KS-010021`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
