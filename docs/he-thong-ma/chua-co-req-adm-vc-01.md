# ADM-VC-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-VC-010000` | Voucher / Danh sách voucher | `/voucher/danh-sach-voucher` | `ADM-VC-010000-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-VC-010001` | Xem trước voucher | Trạng thái | ADM-VC-010000 | ADM-VC-010000 | — | `/voucher/danh-sach-voucher?state=ADM-VC-010001` | Figma | trung bình |
| `ADM-VC-010010` | Popup tạo voucher | Popup | ADM-VC-010000 | ADM-VC-010000 | — | `/voucher/danh-sach-voucher?popup=ADM-VC-010010` | Figma | cao |
| `ADM-VC-010020` | Popup chỉnh sửa voucher | Popup | ADM-VC-010000 | ADM-VC-010000 | — | `/voucher/danh-sach-voucher?popup=ADM-VC-010020` | Figma | cao |

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

- Frame Figma chưa có requirement (4): `ADM-VC-010000`, `ADM-VC-010001`, `ADM-VC-010010`, `ADM-VC-010020`
- Phân loại cần design duyệt (1): `ADM-VC-010001`
- Thiếu prototype link đi vào (3): `ADM-VC-010001`, `ADM-VC-010010`, `ADM-VC-010020`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
