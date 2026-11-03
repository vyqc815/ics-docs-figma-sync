# ADM-GKS-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-GKS-010020` | Khảo sát / Giao khảo sát / Kết quả khảo sát | `/khao-sat/giao-khao-sat/ket-qua-khao-sat` | `ADM-GKS-010020-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-GKS-010030` | Popup kết quả cá nhân | Popup | ADM-GKS-010020 | ADM-GKS-010020 | — | `/khao-sat/giao-khao-sat/ket-qua-khao-sat?popup=ADM-GKS-010030` | Figma | thấp |
| `ADM-GKS-010040` | Popup chọn cuộc khảo sát | Popup | ADM-GKS-010020 | ADM-GKS-010020 | — | `/khao-sat/giao-khao-sat/ket-qua-khao-sat?popup=ADM-GKS-010040` | Figma | thấp |

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-GKS-010020` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:245208` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | account | `ACCOUNT` Size=Default | `4273:153383` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | giao-khao-sat | `Atom/Button` Type=Primary, Size=Small | `4273:153390` Giao khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | tab-giao-khao-sat | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4273:153392` Tab · Giao khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | tab-ket-qua-khao-sat | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4273:153393` Tab · Kết quả khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | cau-30 | `Atom/Badge`  | `4273:153687` Câu 30 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | trac-nghiem | `Atom/Badge`  | `4273:153691` Trắc nghiệm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | bat-buoc | `Atom/Badge`  | `4273:153693` Bắt buộc | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | avatar | `Avatar` Size=32 | `4273:153703` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | cau-31 | `Atom/Badge`  | `4273:153738` Câu 31 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | cau-32 | `Atom/Badge`  | `4273:153790` Câu 32 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | doan-ngan | `Atom/Badge`  | `4273:153794` Đoạn ngắn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | khong-bat-buoc | `Atom/Badge`  | `4273:153796` Không bắt buộc | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | tab-giao-vien | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4273:153522` Tab · Giáo viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | tab-lop | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4273:153523` Tab · Lớp | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | tab-hoc-vien | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4273:153524` Tab · Học viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | stt | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `4273:153527` STT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.18` | trang-thai-giao | `Atom/Status` Size=S | `4885:59002` Trạng thái giao | — |  |  | Chỉ có trên Figma | Figma |
| `F01.19` | so-luong | `Atom/Badge`  | `4273:153534` Số lượng | — |  |  | Chỉ có trên Figma | Figma |
| `F01.20` | chon-cuoc-khao-sat | `DD/Molecule/Trigger` Size=S, State=Default | `4885:69052` Chọn cuộc khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F01.21` | panel | `DD/Organism/Menu Panel` Type=Single | `5070:43465` Panel | — |  |  | Chỉ có trên Figma | Figma |
| `F01.22` | tooltip-danh-sach-nguoi-chon | `Molecule/Tooltip`  | `5138:163889` Tooltip · Danh sách người chọn | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (3): `ADM-GKS-010020`, `ADM-GKS-010030`, `ADM-GKS-010040`
- Phân loại cần design duyệt (2): `ADM-GKS-010030`, `ADM-GKS-010040`
- Thiếu prototype link đi vào (2): `ADM-GKS-010030`, `ADM-GKS-010040`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
