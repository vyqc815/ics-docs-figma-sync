# ADM-LSP-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LSP-010000` | Lương / Lương SP | `/luong/luong-sp` | `ADM-LSP-010000-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-LSP-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:249224` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | tim-kiem | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `4101:142557` Tìm kiếm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | filter-thang-truoc | `DD/Molecule/Trigger` Size=XS, State=Active | `4101:142559` Filter · Tháng trước | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | the-chi-so-so-lop | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4101:142563` Thẻ chỉ số · Số lớp | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | the-chi-so-so-lop-dat-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4101:142564` Thẻ chỉ số · Số lớp đạt KPI | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | the-chi-so-luong-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4101:142566` Thẻ chỉ số · Lương KPI | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | class-status | `CLass Status`  | `4101:142604` CLass Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | badge-trang-thai | `Atom/Badge`  | `4101:143167` Badge · Trạng thái | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | atom-chip | `Atom/Chip` Type=Money Outline | `4101:142624` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | avatar | `Avatar` Size=32 | `4101:142713` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | so-lop-0 | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Inactive | `4193:144202` Số lớp · 0 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | so-lop-11 | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `4193:144205` Số lớp · 11 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | avatar-initials | `Atom/Avatar Initials`  | `4101:143312` Avatar Initials | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | so-lop-5 | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `4193:144213` Số lớp · 5 | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (1): `ADM-LSP-010000`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
