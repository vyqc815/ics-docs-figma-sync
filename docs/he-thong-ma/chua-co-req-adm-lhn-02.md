# ADM-LHN-02xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LHN-020002` | Bảng chia lịch hẹn / Đang kéo thẻ | `/bang-chia-lich-hen/dang-keo-the` | `ADM-LHN-020002-DK` | Figma |
| `ADM-LHN-020009` | Bảng chia lịch hẹn / Đang kéo cụm thẻ | `/bang-chia-lich-hen/dang-keo-cum-the` | `ADM-LHN-020009-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-LHN-020002`, `ADM-LHN-020009` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:221672` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | account | `ACCOUNT` Size=Default | `4273:161953` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-icon-button | `Atom/Icon Button`  | `2371:37148` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | dropdown-trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `4713:129240` Dropdown · Trung tâm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `2371:37150` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-button | `Atom/Button` Type=Warning, Size=Small | `2371:37155` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2371:37159` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | thoi-gian-lich-hen | `Thời gian lịch hẹn` Size=28H | `2371:37186` Thời gian lịch hẹn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | atom-tag-solid | `Atom/Tag Solid` Size=16H | `2409:142587` Atom/Tag Solid | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | avatar | `Avatar` Size=28 | `2371:37193` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | mouse-click |  | `2371:37197` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | molecule-tooltip | `Molecule/Tooltip`  | `2371:37198` Molecule/Tooltip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | atom-id-badge | `Atom/ID Badge` Type=Mã lớp, Size=26H | `2371:37200` Atom/ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | phan-trang |  | `2371:37274` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | color | `COLOR`  | `2425:104420` COLOR | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | status-lich-hen | `Status lịch hẹn` Size=24, Kiểu=Default | `2371:38202` Status lịch hẹn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | status-do-uu-tien | `Status Độ ưu tiên` Size=24, Kiểu=Default | `2371:38203` Status Độ ưu tiên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.18` | add-new-bar-nhap-tieu-de-muc-moi | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `2702:48125` Add New Bar · Nhập tiêu đề mục mới | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (2): `ADM-LHN-020002`, `ADM-LHN-020009`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
