# CD-TL-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-TL-010000` | Tools / Giọng đọc / Đọc văn bản | `/tools/giong-doc/doc-van-ban` | `CD-TL-010000-DK` | Figma |
| `CD-TL-010100` | Tools / Giọng đọc / Hội thoại | `/tools/giong-doc/hoi-thoai` | `CD-TL-010100-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-TL-010010` | Đang tạo | Trạng thái | CD-TL-010000 | CD-TL-010000 | — | `/tools/giong-doc/doc-van-ban?state=CD-TL-010010` | Figma | trung bình |
| `CD-TL-010210` | Lỗi kết nối máy chủ | Trạng thái | CD-TL-010100 | CD-TL-010100 | — | `/tools/giong-doc/hoi-thoai?state=CD-TL-010210` | Figma | thấp |
| `CD-TL-010300` | Âm tiết pinyin · Đang tạo | Trạng thái | CD-TL-010210 | CD-TL-010100 | — | `/tools/giong-doc/hoi-thoai?state=CD-TL-010300` | Figma | thấp |

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

- Frame Figma chưa có requirement (5): `CD-TL-010000`, `CD-TL-010010`, `CD-TL-010100`, `CD-TL-010210`, `CD-TL-010300`
- Phân loại cần design duyệt (3): `CD-TL-010010`, `CD-TL-010210`, `CD-TL-010300`
- Thiếu prototype link đi vào (3): `CD-TL-010010`, `CD-TL-010210`, `CD-TL-010300`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
