# CD-KH-07xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-070100` | Thư viện / Kiến thức | `—` | `CD-KH-070100-DK` | Figma |
| `CD-KH-070110` | Thư viện / Kiến thức / Ngữ pháp | `/thu-vien/kien-thuc/ngu-phap` | `CD-KH-070110-DK` | Figma |
| `CD-KH-070120` | Thư viện / Kiến thức / Mẫu câu | `/thu-vien/kien-thuc/mau-cau` | `CD-KH-070120-DK` | Figma |
| `CD-KH-070130` | Thư viện / Kiến thức / Hanzi | `/thu-vien/kien-thuc/hanzi` | `CD-KH-070130-DK` | Figma |
| `CD-KH-070140` | Thư viện / Kiến thức / Phát âm | `/thu-vien/kien-thuc/phat-am` | `CD-KH-070140-DK` | Figma |
| `CD-KH-070150` | Thư viện / Kiến thức / Kanji | `/thu-vien/kien-thuc/kanji` | `CD-KH-070150-DK` | Figma |
| `CD-KH-070200` | Thư viện / Kỹ năng / Nghe | `/thu-vien/ky-nang/nghe` | `CD-KH-070200-DK` | Figma |
| `CD-KH-070210` | Thư viện / Kỹ năng / Đọc | `/thu-vien/ky-nang/doc` | `CD-KH-070210-DK` | Figma |
| `CD-KH-070220` | Thư viện / Kỹ năng / Viết | `/thu-vien/ky-nang/viet` | `CD-KH-070220-DK` | Figma |
| `CD-KH-070230` | Thư viện / Kỹ năng / Nói | `/thu-vien/ky-nang/noi` | `CD-KH-070230-DK` | Figma |
| `CD-KH-070300` | Thư viện / Bài tập | `/thu-vien/bai-tap` | `CD-KH-070300-DK` | Figma |
| `CD-KH-070310` | Thư viện / Bài tập / BTVN mẫu | `/thu-vien/bai-tap/btvn-mau` | `CD-KH-070310-DK` | Figma |
| `CD-KH-070320` | Thư viện / Bài tập / Kiểm tra mẫu | `/thu-vien/bai-tap/kiem-tra-mau` | `CD-KH-070320-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-KH-070101` | Kiến thức · Menu ⋮ (Nháp, chưa dùng) | Trạng thái | CD-KH-070100 | CD-KH-070100 | CD-KH-070100 | — | Figma | trung bình |
| `CD-KH-070102` | Kiến thức · Menu ⋮ (Công khai, đang dùng) | Trạng thái | CD-KH-070100 | CD-KH-070100 | CD-KH-070100 | — | Figma | trung bình |
| `CD-KH-070103` | Popup xoá mục | Popup | CD-KH-070102 | CD-KH-070100 | CD-KH-070101, CD-KH-070102 | — | Figma | cao |
| `CD-KH-070308` | Chi tiết câu hỏi · Listening (Tiếng Nhật) | Trạng thái | CD-KH-070300 | CD-KH-070300 | — | `/thu-vien/bai-tap?state=CD-KH-070308` | Figma | trung bình |

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

- Frame Figma chưa có requirement (17): `CD-KH-070100`, `CD-KH-070101`, `CD-KH-070102`, `CD-KH-070103`, `CD-KH-070110`, `CD-KH-070120`, `CD-KH-070130`, `CD-KH-070140`, `CD-KH-070150`, `CD-KH-070200`, `CD-KH-070210`, `CD-KH-070220`, `CD-KH-070230`, `CD-KH-070300`, `CD-KH-070308`, `CD-KH-070310`, `CD-KH-070320`
- Phân loại cần design duyệt (3): `CD-KH-070101`, `CD-KH-070102`, `CD-KH-070308`
- Thiếu prototype link đi vào (1): `CD-KH-070308`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
