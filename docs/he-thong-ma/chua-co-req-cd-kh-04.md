# CD-KH-04xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-040130` | Kiến thức (S1) / Từ vựng / Nhập nhanh cuối bảng | `/kien-thuc-s1/tu-vung/nhap-nhanh-cuoi-bang` | `CD-KH-040130-DK` | Figma |
| `CD-KH-040180` | Kiến thức (S1) / Từ vựng / Điền thiếu bằng AI (inline) | `/kien-thuc-s1/tu-vung/dien-thieu-bang-ai-inline` | `CD-KH-040180-DK` | Figma |
| `CD-KH-040210` | Kiến thức (S1) / Mẫu câu | `/kien-thuc-s1/mau-cau` | `CD-KH-040210-DK` | Figma |
| `CD-KH-040220` | Kiến thức (S1) / Hanzi | `/kien-thuc-s1/hanzi` | `CD-KH-040220-DK` | Figma |
| `CD-KH-040230` | Kiến thức (S1) / Phát âm | `/kien-thuc-s1/phat-am` | `CD-KH-040230-DK` | Figma |
| `CD-KH-040240` | Kiến thức (S1) / Kanji (khoá tiếng Nhật) | `/kien-thuc-s1/kanji-khoa-tieng-nhat` | `CD-KH-040240-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

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

- Frame Figma chưa có requirement (6): `CD-KH-040130`, `CD-KH-040180`, `CD-KH-040210`, `CD-KH-040220`, `CD-KH-040230`, `CD-KH-040240`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
