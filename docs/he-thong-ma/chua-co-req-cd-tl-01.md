# CD-TL-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

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

### `F01` (ngoài Body)

Frame: `CD-TL-010000`, `CD-TL-010100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-cd | `MENU - CD`  | `6133:123478` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | account | `ACCOUNT` Size=Default | `6133:123527` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | component-2 | `Switch Center`  | `6133:123528` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-badge | `Atom/Badge`  | `6133:126656` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-tab | `Atom/Tab` State=Active, Kiểu=Gạch chân | `6133:124176` Atom/Tab | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Card · Văn bản

Frame: `CD-TL-010000`, `CD-TL-010100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | atom-button | `Atom/Button` Type=Secondary, Size=Medium | `6133:124210` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |

### `F03` Card · Giọng & kết quả

Frame: `CD-TL-010000`, `CD-TL-010100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | atom-tab | `Atom/Tab` State=Active, Kiểu=Switch | `6133:124218` Atom/Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F03.02` | atom-audio-player | `Atom/Audio Player` State=Chưa phát | `6133:124275` Atom/Audio Player | — |  |  | Chỉ có trên Figma | Figma |
| `F03.03` | atom-button | `Atom/Button` Type=Secondary, Size=Medium | `6133:124285` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |

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
