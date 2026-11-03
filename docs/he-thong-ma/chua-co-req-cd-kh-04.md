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

### `F01` (ngoài Body)

Frame: `CD-KH-040130`, `CD-KH-040180`, `CD-KH-040210`, `CD-KH-040220`, `CD-KH-040230`, `CD-KH-040240` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | tab-tu-vung | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4846:161832` Tab · Từ vựng | có |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | tab-ngu-phap | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4846:161833` Tab · Ngữ pháp | có |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | tab-mau-cau | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5003:14968` Tab · Mẫu câu | có |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | tab-hanzi | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5003:14973` Tab · Hanzi | có |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | tab-phat-am | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5003:14983` Tab · Phát âm | có |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | tab-kanji | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `5004:32109` Tab · Kanji | có |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | tab-bang-chu | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5004:32110` Tab · Bảng chữ | có |  |  | Chỉ có trên Figma | Figma |

### `F02` Panel · Danh sách từ vựng

Frame: `CD-KH-040130`, `CD-KH-040180` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | atom-button | `Atom/Button` Type=Outlined, Size=Small | `4846:161841` Atom/Button | có |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | nut-them-tu-dropdown | `Atom/Button` Type=Outlined Icon, Size=Small | `4846:161843` Nút Thêm từ (dropdown) | có |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | atom-input | `Atom/Input` State=Search, Kiểu=S | `4846:161845` Atom/Input | có |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | dd-molecule-trigger | `DD/Molecule/Trigger` Size=S, State=Default | `4846:161846` DD/Molecule/Trigger | có |  |  | Chỉ có trên Figma | Figma |
| `F02.05` | molecule-add-new-bar | `Molecule/Add New Bar` Type=Box, Size=M, State=Focused | `4846:177374` Molecule/Add New Bar | có |  |  | Chỉ có trên Figma | Figma |
| `F02.06` | duyet-tat-ca | `Atom/Button` Type=Primary, Size=XSmall | `5003:16621` Duyệt tất cả | có |  |  | Chỉ có trên Figma | Figma |

### `F03` Panel · Cụm từ vựng

Frame: `CD-KH-040130`, `CD-KH-040180`, `CD-KH-040210`, `CD-KH-040220`, `CD-KH-040230`, `CD-KH-040240` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | atom-input | `Atom/Input` State=Text Center, Kiểu=S | `5003:16526` Atom/Input | có |  |  | Chỉ có trên Figma | Figma |
| `F03.02` | atom-button | `Atom/Button` Type=Secondary, Size=Small | `4911:11701` Atom/Button | có |  |  | Chỉ có trên Figma | Figma |
| `F03.03` | liner-icon | `Liner Icon`  | `4911:11705` Liner Icon | có |  |  | Chỉ có trên Figma | Figma |
| `F03.04` | molecule-add-new-bar | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `4911:11767` Molecule/Add New Bar | có |  |  | Chỉ có trên Figma | Figma |

### `F04` Panel · Danh sách kiến thức

Frame: `CD-KH-040210`, `CD-KH-040220`, `CD-KH-040230`, `CD-KH-040240` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F04.01` | atom-button | `Atom/Button` Type=Outlined, Size=Small | `5004:29036` Atom/Button | có |  |  | Chỉ có trên Figma | Figma |
| `F04.02` | nut-them-tu-dropdown | `Atom/Button` Type=Outlined Icon, Size=Small | `5004:29037` Nút Thêm từ (dropdown) | có |  |  | Chỉ có trên Figma | Figma |
| `F04.03` | atom-input | `Atom/Input` State=Search, Kiểu=S | `5004:29039` Atom/Input | có |  |  | Chỉ có trên Figma | Figma |
| `F04.04` | dd-molecule-trigger | `DD/Molecule/Trigger` Size=S, State=Default | `5004:29040` DD/Molecule/Trigger | có |  |  | Chỉ có trên Figma | Figma |
| `F04.05` | molecule-add-new-bar | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `5004:29190` Molecule/Add New Bar | có |  |  | Chỉ có trên Figma | Figma |

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
