# ADM-GV-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-GV-010003` | Danh sách giáo viên / Kết quả tìm kiếm nâng cao | `/danh-sach-giao-vien/ket-qua-tim-kiem-nang-cao` | `ADM-GV-010003-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` Header

Frame: `ADM-GV-010003` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `2223:84247` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Main - Scrollable Workspace

Frame: `ADM-GV-010003` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | atom-icon-button | `Atom/Icon Button`  | `1739:33295` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | atom-input | `Atom/Input` State=Search Advanced, Kiểu=Chuẩn | `1739:33298` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | dropdown-trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `4713:129443` Dropdown · Trung tâm | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `1739:33300` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F02.05` | teaching-status | `Teaching status`  | `3210:30304` Teaching status | — |  |  | Chỉ có trên Figma | Figma |
| `F02.06` | o-dinh-danh |  | `3210:30305` Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `F02.07` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Inactive | `3210:30309` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.08` | percent | `PERCENT %`  | `3210:30313` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F02.09` | progress-diem-danh-gia-a-f | `Progress/Điểm Đánh Giá (A-F)` Size=36x32 | `3210:30319` Progress/Điểm Đánh Giá (A-F) | — |  |  | Chỉ có trên Figma | Figma |
| `F02.10` | lich-giao-vien-dang-ky | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `3210:30321` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  |  | Chỉ có trên Figma | Figma |
| `F02.11` | ghi-chu | `GHI CHÚ`  | `3210:30324` GHI CHÚ | — |  |  | Chỉ có trên Figma | Figma |
| `F02.12` | arrow-detail | `ARROW DETAIL`  | `3210:30325` ARROW DETAIL | — |  |  | Chỉ có trên Figma | Figma |
| `F02.13` | mouse-click |  | `3210:30349` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F02.14` | lop-hoc | `Lớp học`  | `3210:30370` Lớp học | — |  |  | Chỉ có trên Figma | Figma |
| `F02.15` | phan-trang |  | `3210:30597` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |

### `F03` (ngoài Body)

Frame: `ADM-GV-010003` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:236558` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (1): `ADM-GV-010003`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
