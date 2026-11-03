# GV-LOP-03xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-030111` | Chi tiết lớp / Bài học / Buổi học / Dặn dò đã đọc | `/chi-tiet-lop/bai-hoc/buoi-hoc/dan-do-da-doc` | — | Figma |
| `GV-LOP-030130` | Chi tiết lớp / Bài học / Bước 1 Điểm danh | `/chi-tiet-lop/bai-hoc/buoc-1-diem-danh` | — | Figma |
| `GV-LOP-030140` | Chi tiết lớp / Bài học / Bước 2 Ghi chú buổi học | `/chi-tiet-lop/bai-hoc/buoc-2-ghi-chu-buoi-hoc` | — | Figma |
| `GV-LOP-030150` | Chi tiết lớp / Bài học / Buổi học đã kết thúc | `/chi-tiet-lop/bai-hoc/buoi-hoc-da-ket-thuc` | — | Figma |
| `GV-LOP-030160` | Chi tiết lớp / Bài học / Buổi học / Bài đang dạy | `/chi-tiet-lop/bai-hoc/buoi-hoc/bai-dang-day` | — | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-LOP-030131` | Popup kết thúc buổi học | Popup | GV-LOP-030130 | GV-LOP-030130 | — | `/chi-tiet-lop/bai-hoc/buoc-1-diem-danh?popup=GV-LOP-030131` | Figma | cao |
| `GV-LOP-030141` | Popup hoàn thành buổi học | Popup | GV-LOP-030140 | GV-LOP-030140 | — | `/chi-tiet-lop/bai-hoc/buoc-2-ghi-chu-buoi-hoc?popup=GV-LOP-030141` | Figma | cao |
| `GV-LOP-030161` | Popup tiếp tục buổi học | Popup | GV-LOP-030150 | GV-LOP-030150 | — | `/chi-tiet-lop/bai-hoc/buoi-hoc-da-ket-thuc?popup=GV-LOP-030161` | Figma | thấp |

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `GV-LOP-030111`, `GV-LOP-030130`, `GV-LOP-030140`, `GV-LOP-030150`, `GV-LOP-030160` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `5292:222207` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-badge | `Atom/Badge`  | `5292:222216` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-button | `Atom/Button` Type=Primary, Size=Medium | `5292:222589` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | avatar-name | `AVATAR + Name`  | `5292:222296` AVATAR + Name | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | tag-thoi-gian | `Atom/Tag thời gian`  | `5292:222297` Tag thời gian | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | percent | `PERCENT %`  | `5292:222301` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | component-2 | `Switch Center`  | `5292:222447` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | account | `ACCOUNT` Size=Default | `5292:222449` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | header-vai-tro |  | `5292:222450` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | sidebar-menu-teacher | `MENU - TEACHER`  | `5292:222541` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | molecule-o-dinh-danh |  | `5292:223568` Molecule/Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | atom-input | `Atom/Input` State=Textarea, Kiểu=M | `5292:223651` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | minh-hoa | `Empty State / Illustration` Type=Gửi | `5292:225662` Minh hoạ | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (8): `GV-LOP-030111`, `GV-LOP-030130`, `GV-LOP-030131`, `GV-LOP-030140`, `GV-LOP-030141`, `GV-LOP-030150`, `GV-LOP-030160`, `GV-LOP-030161`
- Thiếu prototype link đi vào (3): `GV-LOP-030131`, `GV-LOP-030141`, `GV-LOP-030161`
- Phân loại cần design duyệt (1): `GV-LOP-030161`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
