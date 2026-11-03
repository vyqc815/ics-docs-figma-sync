# GV-LOP-03xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-030111` | Chi tiết lớp / Bài học / Buổi học / Dặn dò đã đọc | `/chi-tiet-lop/bai-hoc/buoi-hoc/dan-do-da-doc` | — | Figma |
| `GV-LOP-030130` | Chi tiết lớp / Bài học / Bước 1 Điểm danh | `/chi-tiet-lop/bai-hoc/buoc-1-diem-danh` | — | Figma |
| `GV-LOP-030140` | Chi tiết lớp / Bài học / Bước 2 Ghi chú buổi học | `/chi-tiet-lop/bai-hoc/buoc-2-ghi-chu-buoi-hoc` | — | Figma |
| `GV-LOP-030150` | Chi tiết lớp / Bài học / Buổi học đã kết thúc | `/chi-tiet-lop/bai-hoc/buoi-hoc-da-ket-thuc` | — | Figma |
| `GV-LOP-030160` | Chi tiết lớp / Bài học / Buổi học / Bài đang dạy | `/chi-tiet-lop/bai-hoc/buoi-hoc/bai-dang-day` | — | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-LOP-030131` | Popup kết thúc buổi học | Popup | GV-LOP-030130 | GV-LOP-030130 | — | `/chi-tiet-lop/bai-hoc/buoc-1-diem-danh?popup=GV-LOP-030131` | Figma | cao |
| `GV-LOP-030141` | Popup hoàn thành buổi học | Popup | GV-LOP-030140 | GV-LOP-030140 | — | `/chi-tiet-lop/bai-hoc/buoc-2-ghi-chu-buoi-hoc?popup=GV-LOP-030141` | Figma | cao |
| `GV-LOP-030161` | Popup tiếp tục buổi học | Popup | GV-LOP-030150 | GV-LOP-030150 | — | `/chi-tiet-lop/bai-hoc/buoi-hoc-da-ket-thuc?popup=GV-LOP-030161` | Figma | cao |

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

- Frame Figma chưa có requirement (8): `GV-LOP-030111`, `GV-LOP-030130`, `GV-LOP-030131`, `GV-LOP-030140`, `GV-LOP-030141`, `GV-LOP-030150`, `GV-LOP-030160`, `GV-LOP-030161`
- Thiếu prototype link đi vào (3): `GV-LOP-030131`, `GV-LOP-030141`, `GV-LOP-030161`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
