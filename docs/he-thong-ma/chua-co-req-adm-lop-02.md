# ADM-LOP-02xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-020101` | Chi tiết lớp học / Tổng quan > chi tiết | `/chi-tiet-lop-hoc/tong-quan-chi-tiet` | `ADM-LOP-020101-DK` | Figma |
| `ADM-LOP-020303` | Chi tiết lớp học / Kiểm tra | `/chi-tiet-lop-hoc/kiem-tra` | `ADM-LOP-020303-DK` | Figma |
| `ADM-LOP-020709` | Chi tiết lớp học / Quy trình lớp / Có cập nhật & quá hạn | `/chi-tiet-lop-hoc/quy-trinh-lop/co-cap-nhat-qua-han` | `ADM-LOP-020709-DK` | Figma |
| `ADM-LOP-020809` | Chi tiết lớp học / CSKH / Có cập nhật & quá hạn | `/chi-tiet-lop-hoc/cskh/co-cap-nhat-qua-han` | `ADM-LOP-020809-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-020404` | Trống | Trạng thái | ADM-LOP-020303 | ADM-LOP-020303 | — | `/chi-tiet-lop-hoc/kiem-tra?state=ADM-LOP-020404` | Figma | trung bình |
| `ADM-LOP-020504` | Trống | Trạng thái | ADM-LOP-020303 | ADM-LOP-020303 | — | `/chi-tiet-lop-hoc/kiem-tra?state=ADM-LOP-020504` | Figma | trung bình |

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

- Frame Figma chưa có requirement (6): `ADM-LOP-020101`, `ADM-LOP-020303`, `ADM-LOP-020404`, `ADM-LOP-020504`, `ADM-LOP-020709`, `ADM-LOP-020809`
- Phân loại cần design duyệt (2): `ADM-LOP-020404`, `ADM-LOP-020504`
- Thiếu prototype link đi vào (2): `ADM-LOP-020404`, `ADM-LOP-020504`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
