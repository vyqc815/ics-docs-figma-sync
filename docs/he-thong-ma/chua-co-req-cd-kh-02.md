# CD-KH-02xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-020201` | Lộ trình / Cuộn ngang tới cột cuối | `/lo-trinh/cuon-ngang-toi-cot-cuoi` | `CD-KH-020201-DK` | Figma |
| `CD-KH-020240` | Lộ trình / Kéo thả đổi thứ tự | `/lo-trinh/keo-tha-doi-thu-tu` | `CD-KH-020240-DK` | Figma |
| `CD-KH-020260` | Lộ trình / Thêm nhanh bài học | `/lo-trinh/them-nhanh-bai-hoc` | `CD-KH-020260-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-KH-020210` | Ô đã khoá · Tooltip đủ buổi | Trạng thái | CD-KH-020201 | CD-KH-020201 | — | `/lo-trinh/cuon-ngang-toi-cot-cuoi?state=CD-KH-020210` | Figma | trung bình |
| `CD-KH-020220` | Tick vượt thời lượng · Cảnh báo | Trạng thái | CD-KH-020210 | CD-KH-020201 | — | `/lo-trinh/cuon-ngang-toi-cot-cuoi?state=CD-KH-020220` | Figma | trung bình |
| `CD-KH-020230` | Dropdown chọn kỳ | Dropdown | CD-KH-020220 | CD-KH-020201 | — | `/lo-trinh/cuon-ngang-toi-cot-cuoi?popup=CD-KH-020230` | Figma | trung bình |
| `CD-KH-020250` | Sửa tên bài · Lỗi để trống & phím tắt | Trạng thái | CD-KH-020240 | CD-KH-020240 | — | `/lo-trinh/keo-tha-doi-thu-tu?state=CD-KH-020250` | Figma | trung bình |
| `CD-KH-020261` | Popup xoá bài học | Popup | CD-KH-020260 | CD-KH-020260 | — | `/lo-trinh/them-nhanh-bai-hoc?popup=CD-KH-020261` | Figma | cao |
| `CD-KH-020270` | Chưa có bài học | Trạng thái | CD-KH-020260 | CD-KH-020260 | — | `/lo-trinh/them-nhanh-bai-hoc?state=CD-KH-020270` | Figma | trung bình |

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `CD-KH-020201`, `CD-KH-020240`, `CD-KH-020260` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | trang-thai-so-buoi | `Atom/Status` Size=S | `6518:337192` Trạng thái số buổi | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `6518:337271` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-chip-thoi-gian | `Atom/Chip` Type=Thời gian · 90–100% | `6518:337273` Atom/Chip · Thời gian | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | input-ten-bai-hoc | `Atom/Input` State=Sửa trực tiếp, Kiểu=S | `6518:337362` Input · Tên bài học | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | input-mo-ta | `Atom/Input` State=Text, Kiểu=S | `6518:337363` Input · Mô tả | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | molecule-add-new-bar-them-bai-hoc | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `6518:338077` Molecule/Add New Bar · Thêm bài học | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | sidebar-menu-cd | `MENU - CD`  | `6518:338197` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | account | `ACCOUNT` Size=Default | `6518:338246` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | component-2 | `Switch Center`  | `6518:338247` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | toast-da-them-bai-hoc | `Atom/Toast` Type=Success | `6518:356213` Toast · Đã thêm bài học | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (9): `CD-KH-020201`, `CD-KH-020210`, `CD-KH-020220`, `CD-KH-020230`, `CD-KH-020240`, `CD-KH-020250`, `CD-KH-020260`, `CD-KH-020261`, `CD-KH-020270`
- Phân loại cần design duyệt (5): `CD-KH-020210`, `CD-KH-020220`, `CD-KH-020230`, `CD-KH-020250`, `CD-KH-020270`
- Thiếu prototype link đi vào (5): `CD-KH-020210`, `CD-KH-020220`, `CD-KH-020250`, `CD-KH-020261`, `CD-KH-020270`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
