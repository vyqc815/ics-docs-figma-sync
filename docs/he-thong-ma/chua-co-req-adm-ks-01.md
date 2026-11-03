# ADM-KS-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-KS-010010` | Khảo sát / Tạo khảo sát / Câu hỏi lựa chọn | `/khao-sat/tao-khao-sat/cau-hoi-lua-chon` | `ADM-KS-010010-DK` | Figma |
| `ADM-KS-010020` | Khảo sát / Tạo khảo sát / Câu hỏi tự luận & đánh giá | `/khao-sat/tao-khao-sat/cau-hoi-tu-luan-danh-gia` | `ADM-KS-010020-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-KS-010030` | Popup xem trước | Popup | ADM-KS-010020 | ADM-KS-010020 | — | `/khao-sat/tao-khao-sat/cau-hoi-tu-luan-danh-gia?popup=ADM-KS-010030` | Figma | cao |

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-KS-010010`, `ADM-KS-010020` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:243354` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | account | `ACCOUNT` Size=Default | `4262:148708` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | xem-truoc | `Atom/Button` Type=Outlined, Size=Small | `4262:148715` Xem trước | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | luu | `Atom/Button` Type=Primary, Size=Small | `4262:148716` Lưu | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | so-cau | `Atom/Badge`  | `4262:148880` Số câu | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | loai-cau-hoi | `DD/Molecule/Trigger` Size=S, State=Default | `4262:148882` Loại câu hỏi | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | noi-dung-cau-hoi | `Atom/Input` State=Filled, Kiểu=Chuẩn | `4262:148899` Nội dung câu hỏi | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | radio | `Radio Button` Size=16 | `4262:148903` Radio | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | lua-chon | `Atom/Input` State=Filled, Kiểu=Chuẩn | `4262:148904` Lựa chọn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | keo-tha | `Atom/Icon Button`  | `4273:149879` Kéo thả | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | add-new-bar-them-cau-hoi-moi | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `4262:148718` Add New Bar · Thêm câu hỏi mới | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | tab-giao-vien | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4262:148724` Tab · Giáo viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | tab-lop | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4262:148725` Tab · Lớp | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | tab-hoc-vien | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4262:148726` Tab · Học viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | stt | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `4262:148729` STT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | trang-thai | `Atom/Badge`  | `5019:18380` Trạng thái | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | add-new-bar-them-cuoc-khao-sat | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `4262:148749` Add New Bar · Thêm cuộc khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F01.18` | panel | `DD/Organism/Menu Panel` Type=Single | `5070:43520` Panel | — |  |  | Chỉ có trên Figma | Figma |
| `F01.19` | xem-truoc-cau-tra-loi | `Atom/Input` State=Disabled, Kiểu=Chuẩn | `4262:149400` Xem trước câu trả lời | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (3): `ADM-KS-010010`, `ADM-KS-010020`, `ADM-KS-010030`
- Thiếu prototype link đi vào (1): `ADM-KS-010030`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
