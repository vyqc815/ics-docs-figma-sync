# ADM-HV-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-HV-010020` | Danh sách học viên / Popup lịch sử / Hoá đơn | `/danh-sach-hoc-vien/popup-lich-su/hoa-don` | `ADM-HV-010020-DK` | Figma |
| `ADM-HV-010040` | Danh sách học viên / Popup lịch sử / Ghi chú | `/danh-sach-hoc-vien/popup-lich-su/ghi-chu` | `ADM-HV-010040-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-HV-010004` | Danh sách học viên · Trống | Trạng thái | — | — | — | — | Figma | thấp |
| `ADM-HV-010030` | Lớp | Trạng thái | ADM-HV-010020 | ADM-HV-010020 | — | `/danh-sach-hoc-vien/popup-lich-su/hoa-don?state=ADM-HV-010030` | Figma | thấp |

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

- Frame Figma chưa có requirement (4): `ADM-HV-010004`, `ADM-HV-010020`, `ADM-HV-010030`, `ADM-HV-010040`
- Popup chưa có màn cha (1): `ADM-HV-010004`
- Phân loại cần design duyệt (2): `ADM-HV-010004`, `ADM-HV-010030`
- Thiếu prototype link đi vào (2): `ADM-HV-010004`, `ADM-HV-010030`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
