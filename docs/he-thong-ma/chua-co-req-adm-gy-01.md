# ADM-GY-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-GY-010010` | Góp ý / Giáo viên | `/gop-y/giao-vien` | `ADM-GY-010010-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-GY-010010` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:250150` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | tab-hoc-vien | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4193:148098` Tab · Học viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | tab-giao-vien | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4193:148103` Tab · Giáo viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | filter-trang-thai | `DD/Molecule/Trigger` Size=XS, State=Default | `4193:147074` Filter · Trạng thái | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | filter-thang-nay | `DD/Molecule/Trigger` Size=XS, State=Active | `4193:147076` Filter · Tháng này | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | avatar | `Avatar` Size=32 | `4193:147349` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | thoi-gian-gui | `Atom/Chip` Type=Date không có thứ | `4193:147081` Thời gian gửi | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | trang-thai | `Atom/Badge`  | `4193:147082` Trạng thái | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | ghi-chu | `Atom/Input` State=Default, Kiểu=Chuẩn | `4193:147088` Ghi chú | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | avatar | `Atom/Avatar Initials`  | `4193:147351` Avatar | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (1): `ADM-GY-010010`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
