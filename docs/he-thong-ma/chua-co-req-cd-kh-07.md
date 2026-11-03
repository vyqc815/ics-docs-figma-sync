# CD-KH-07xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

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

### `F01` (ngoài Body)

Frame: `CD-KH-070110`, `CD-KH-070120`, `CD-KH-070130`, `CD-KH-070140`, `CD-KH-070150`, `CD-KH-070200`, `CD-KH-070210`, `CD-KH-070220`, `CD-KH-070230`, `CD-KH-070300`, `CD-KH-070310`, `CD-KH-070320` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | tab-tu-vung | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5672:64390` Tab · Từ vựng | có |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | tab-ngu-phap | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `5672:64391` Tab · Ngữ pháp | có |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | tab-mau-cau | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5672:64392` Tab · Mẫu câu | có |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | tab-hanzi | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5672:64393` Tab · Hanzi | có |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | tab-bang-chu | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5729:91585` Tab · Bảng chữ | có |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | tab-phat-am | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5672:64394` Tab · Phát âm | có |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | tim-kiem | `Atom/Input` State=Search, Kiểu=S | `5672:64396` Tìm kiếm | có |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | bo-loc-cap-do | `DD/Molecule/Trigger` Size=S, State=Default | `5672:64397` Bộ lọc · Cấp độ | có |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | xoa-bo-loc | `Atom/Button` Type=Outlined, Size=Small | `5672:64400` Xoá bộ lọc | có |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | atom-badge | `Atom/Badge`  | `5672:65467` Atom/Badge | có |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | liner-icon | `Liner Icon`  | `5672:69688` Liner Icon | có |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | tab-kanji | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `5672:76681` Tab · Kanji | có |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | tab-nghe | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `5505:24311` Tab · Nghe | có |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | tab-doc | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5505:24317` Tab · Đọc | có |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | tab-viet | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5505:24322` Tab · Viết | có |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | tab-noi | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5505:24327` Tab · Nói | có |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | global-progress-bar | `Global Progress Bar`  | `5505:24400` Global Progress Bar | có |  |  | Chỉ có trên Figma | Figma |
| `F01.18` | tab-ngan-hang-cau-hoi | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `5505:23203` Tab · Ngân hàng câu hỏi | có |  |  | Chỉ có trên Figma | Figma |
| `F01.19` | tab-btvn-mau | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5505:23209` Tab · BTVN mẫu | có |  |  | Chỉ có trên Figma | Figma |
| `F01.20` | tab-kiem-tra-mau | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5505:23214` Tab · Kiểm tra mẫu | có |  |  | Chỉ có trên Figma | Figma |
| `F01.21` | tag-ai | `Atom/Badge`  | `5672:61894` Tag · AI | có |  |  | Chỉ có trên Figma | Figma |

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
