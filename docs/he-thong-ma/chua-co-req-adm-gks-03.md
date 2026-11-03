# ADM-GKS-03xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-GKS-030020` | Khảo sát / Giao khảo sát học viên / Kết quả khảo sát | `/khao-sat/giao-khao-sat-hoc-vien/ket-qua-khao-sat` | `ADM-GKS-030020-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-GKS-030030` | Popup kết quả cả trung tâm | Popup | ADM-GKS-030020 | ADM-GKS-030020 | — | `/khao-sat/giao-khao-sat-hoc-vien/ket-qua-khao-sat?popup=ADM-GKS-030030` | Figma | thấp |
| `ADM-GKS-030040` | Popup chọn cuộc khảo sát | Popup | ADM-GKS-030020 | ADM-GKS-030020 | — | `/khao-sat/giao-khao-sat-hoc-vien/ket-qua-khao-sat?popup=ADM-GKS-030040` | Figma | thấp |
| `ADM-GKS-030045` | Dropdown chọn loại giao khảo sát | Dropdown | ADM-GKS-030020 | ADM-GKS-030020 | — | `/khao-sat/giao-khao-sat-hoc-vien/ket-qua-khao-sat?popup=ADM-GKS-030045` | Figma | thấp |
| `ADM-GKS-030050` | Popup giao khảo sát · Bắt buộc | Popup | ADM-GKS-030045 | ADM-GKS-030020 | — | `/khao-sat/giao-khao-sat-hoc-vien/ket-qua-khao-sat?popup=ADM-GKS-030050` | Figma | thấp |
| `ADM-GKS-030060` | Popup giao khảo sát · Tuỳ chọn | Popup | ADM-GKS-030045 | ADM-GKS-030020 | — | `/khao-sat/giao-khao-sat-hoc-vien/ket-qua-khao-sat?popup=ADM-GKS-030060` | Figma | thấp |

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-GKS-030020` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:243972` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | account | `ACCOUNT` Size=Default | `4885:41436` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | giao-khao-sat | `Atom/Button` Type=Primary, Size=Small | `4885:41444` Giao khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | tab-giao-khao-sat | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4885:41446` Tab · Giao khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | tab-ket-qua-khao-sat | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4885:41447` Tab · Kết quả khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | cau-30 | `Atom/Badge`  | `4885:41450` Câu 30 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | trac-nghiem | `Atom/Badge`  | `4885:41453` Trắc nghiệm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | bat-buoc | `Atom/Badge`  | `4885:41454` Bắt buộc | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | avatar | `Avatar` Size=32 | `4885:41461` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | cau-31 | `Atom/Badge`  | `4885:41490` Câu 31 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | cau-32 | `Atom/Badge`  | `4885:41530` Câu 32 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | doan-ngan | `Atom/Badge`  | `4885:41533` Đoạn ngắn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | khong-bat-buoc | `Atom/Badge`  | `4885:41534` Không bắt buộc | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | tab-giao-vien | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4885:41548` Tab · Giáo viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | tab-lop | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4885:41549` Tab · Lớp | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | tab-hoc-vien | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4885:41550` Tab · Học viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | stt | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `4885:41553` STT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.18` | loai-khao-sat | `Atom/Status` Size=S | `4885:42254` Loại khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F01.19` | trang-thai-giao | `Atom/Status` Size=S | `4885:59186` Trạng thái giao | — |  |  | Chỉ có trên Figma | Figma |
| `F01.20` | so-luong | `Atom/Badge`  | `4885:41560` Số lượng | — |  |  | Chỉ có trên Figma | Figma |
| `F01.21` | chon-cuoc-khao-sat | `DD/Molecule/Trigger` Size=S, State=Default | `4885:69124` Chọn cuộc khảo sát | — |  |  | Chỉ có trên Figma | Figma |
| `F01.22` | panel | `DD/Organism/Menu Panel` Type=Single | `5070:43515` Panel | — |  |  | Chỉ có trên Figma | Figma |
| `F01.23` | tooltip-danh-sach-nguoi-chon | `Molecule/Tooltip`  | `5138:163971` Tooltip · Danh sách người chọn | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (6): `ADM-GKS-030020`, `ADM-GKS-030030`, `ADM-GKS-030040`, `ADM-GKS-030045`, `ADM-GKS-030050`, `ADM-GKS-030060`
- Phân loại cần design duyệt (5): `ADM-GKS-030030`, `ADM-GKS-030040`, `ADM-GKS-030045`, `ADM-GKS-030050`, `ADM-GKS-030060`
- Thiếu prototype link đi vào (4): `ADM-GKS-030030`, `ADM-GKS-030040`, `ADM-GKS-030050`, `ADM-GKS-030060`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
