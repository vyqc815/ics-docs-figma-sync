# CD-MS-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-MS-010000` | Mindset thiết kế khoá học | `/mindset-thiet-ke-khoa-hoc` | `CD-MS-010000-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `CD-MS-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | mouse-click |  | `2706:43133` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-icon-button | `Atom/Icon Button`  | `2706:43129` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | molecule-add-new-bar | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `2706:26008` Molecule/Add New Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | add-new-bar-them-moi | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `2702:48216` Add New Bar · Thêm mới | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | sidebar-menu-cd | `MENU - CD`  | `4915:256669` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | account | `ACCOUNT` Size=Default | `2860:4697` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | component-2 | `Switch Center`  | `4273:160773` Component 2 | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (1): `CD-MS-010000`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
