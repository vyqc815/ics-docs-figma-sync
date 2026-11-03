# ADM-LOP-05xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-050204` | Lớp học / Nhật ký / Ghi chú | `/lop-hoc/nhat-ky/ghi-chu` | `ADM-LOP-050204-DK` | Figma |
| `ADM-LOP-050304` | Lớp học / Nhật ký / Lịch hẹn | `/lop-hoc/nhat-ky/lich-hen` | `ADM-LOP-050304-DK` | Figma |
| `ADM-LOP-050404` | Lớp học / Nhật ký / Tin nhắn | `/lop-hoc/nhat-ky/tin-nhan` | `ADM-LOP-050404-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-050406` | Popup xác nhận xoá | Popup | ADM-LOP-050404 | ADM-LOP-050404 | — | `/lop-hoc/nhat-ky/tin-nhan?popup=ADM-LOP-050406` | Figma | cao |
| `ADM-LOP-050407` | Popup xác nhận gửi | Popup | ADM-LOP-050404 | ADM-LOP-050404 | — | `/lop-hoc/nhat-ky/tin-nhan?popup=ADM-LOP-050407` | Figma | cao |
| `ADM-LOP-050408` | Popup tạo tin nhắn | Popup | ADM-LOP-050404 | ADM-LOP-050404 | — | `/lop-hoc/nhat-ky/tin-nhan?popup=ADM-LOP-050408` | Figma | cao |
| `ADM-LOP-050410` | Popup tạo tin nhắn bán tự động | Popup | ADM-LOP-050404 | ADM-LOP-050404 | — | `/lop-hoc/nhat-ky/tin-nhan?popup=ADM-LOP-050410` | Figma | cao |

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

- Frame Figma chưa có requirement (7): `ADM-LOP-050204`, `ADM-LOP-050304`, `ADM-LOP-050404`, `ADM-LOP-050406`, `ADM-LOP-050407`, `ADM-LOP-050408`, `ADM-LOP-050410`
- Thiếu prototype link đi vào (4): `ADM-LOP-050406`, `ADM-LOP-050407`, `ADM-LOP-050408`, `ADM-LOP-050410`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
