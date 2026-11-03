# GV-LOP-04xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-040300` | Chi tiết lớp / Bài tập và Kiểm tra / Màn chấm bài | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai` | `GV-LOP-040300-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-LOP-040301` | Màn chấm bài · Câu hỏi con | Trạng thái | GV-LOP-040300 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040302, GV-LOP-040320, GV-LOP-040330, GV-LOP-040331, GV-LOP-040332, GV-LOP-040333, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040301` | Figma | trung bình |
| `GV-LOP-040302` | Màn chấm bài · Câu không cần chấm | Trạng thái | GV-LOP-040301 | GV-LOP-040300 | — | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040302` | Figma | thấp |
| `GV-LOP-040310` | Popup chọn bài nguồn | Popup | GV-LOP-040302 | GV-LOP-040300 | — | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?popup=GV-LOP-040310` | Figma | cao |
| `GV-LOP-040311` | Popup áp dụng nhận xét chung | Popup | GV-LOP-040302 | GV-LOP-040300 | — | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?popup=GV-LOP-040311` | Figma | cao |
| `GV-LOP-040330` | Màn chấm bài · Trắc nghiệm · App chấm | Trạng thái | GV-LOP-040300 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040320, GV-LOP-040331, GV-LOP-040332, GV-LOP-040333, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040330` | Figma | trung bình |
| `GV-LOP-040331` | Màn chấm bài · Sắp xếp · App chấm | Trạng thái | GV-LOP-040330 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040320, GV-LOP-040330, GV-LOP-040332, GV-LOP-040333, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040331` | Figma | trung bình |
| `GV-LOP-040332` | Màn chấm bài · Nối từ · App chấm | Trạng thái | GV-LOP-040330 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040320, GV-LOP-040330, GV-LOP-040331, GV-LOP-040333, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040332` | Figma | trung bình |
| `GV-LOP-040333` | Màn chấm bài · Nói · App chấm | Trạng thái | GV-LOP-040330 | GV-LOP-040300 | GV-LOP-040320, GV-LOP-040330, GV-LOP-040331, GV-LOP-040332, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040333` | Figma | trung bình |
| `GV-LOP-040334` | Màn chấm bài · Viết · GV chấm + AI gợi ý | Trạng thái | GV-LOP-040330 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040320, GV-LOP-040330, GV-LOP-040331, GV-LOP-040332, GV-LOP-040333, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040334` | Figma | trung bình |
| `GV-LOP-040335` | Màn chấm bài · Hình ảnh · GV chấm | Trạng thái | GV-LOP-040330 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040320, GV-LOP-040330, GV-LOP-040331, GV-LOP-040332, GV-LOP-040333, GV-LOP-040334 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040335` | Figma | trung bình |
| `GV-LOP-040336` | Popup xem ảnh bài viết tay | Popup | GV-LOP-040335 | GV-LOP-040300 | GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?popup=GV-LOP-040336` | Figma | cao |
| `GV-LOP-040340` | Popup Hoàn thành chấm | Popup | GV-LOP-040300 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040330, GV-LOP-040331, GV-LOP-040332, GV-LOP-040333, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?popup=GV-LOP-040340` | Figma | cao |

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

- Frame Figma chưa có requirement (13): `GV-LOP-040300`, `GV-LOP-040301`, `GV-LOP-040302`, `GV-LOP-040310`, `GV-LOP-040311`, `GV-LOP-040330`, `GV-LOP-040331`, `GV-LOP-040332`, `GV-LOP-040333`, `GV-LOP-040334`, `GV-LOP-040335`, `GV-LOP-040336`, `GV-LOP-040340`
- Phân loại cần design duyệt (8): `GV-LOP-040301`, `GV-LOP-040302`, `GV-LOP-040330`, `GV-LOP-040331`, `GV-LOP-040332`, `GV-LOP-040333`, `GV-LOP-040334`, `GV-LOP-040335`
- Thiếu prototype link đi vào (3): `GV-LOP-040302`, `GV-LOP-040310`, `GV-LOP-040311`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
