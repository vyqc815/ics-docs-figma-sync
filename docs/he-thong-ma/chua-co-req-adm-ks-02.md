# ADM-KS-02xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-KS-020010` | Khảo sát / Tạo khảo sát cho lớp / Câu hỏi lựa chọn | `/khao-sat/tao-khao-sat-cho-lop/cau-hoi-lua-chon` | `ADM-KS-020010-DK` | Figma |
| `ADM-KS-020020` | Khảo sát / Tạo khảo sát cho lớp / Câu hỏi tự luận & đánh giá | `/khao-sat/tao-khao-sat-cho-lop/cau-hoi-tu-luan-danh-gia` | `ADM-KS-020020-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-KS-020030` | Popup xem trước | Popup | ADM-KS-020020 | ADM-KS-020020 | — | `/khao-sat/tao-khao-sat-cho-lop/cau-hoi-tu-luan-danh-gia?popup=ADM-KS-020030` | Figma | cao |

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

- Frame Figma chưa có requirement (3): `ADM-KS-020010`, `ADM-KS-020020`, `ADM-KS-020030`
- Thiếu prototype link đi vào (1): `ADM-KS-020030`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
