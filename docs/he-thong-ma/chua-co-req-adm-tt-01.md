# ADM-TT-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-TT-010000` | Tương tác / Danh sách log | `/tuong-tac/danh-sach-log` | — | Figma |
| `ADM-TT-010001` | Tương tác / Không có dữ liệu | `/tuong-tac/khong-co-du-lieu` | — | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-TT-010000`, `ADM-TT-010001` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | dropdown-trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `4713:129610` Dropdown · Trung tâm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Active | `4273:155705` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | lich-giao-vien-dang-ky | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `4273:155729` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-object-chip | `Atom/Object Chip` Type=System | `4273:155733` Atom/Object Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | account | `ACCOUNT` Size=Default | `4273:155326` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:252614` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | minh-hoa | `Empty State / Illustration` Type=Không tìm thấy | `4273:156244` Minh hoạ | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (2): `ADM-TT-010000`, `ADM-TT-010001`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
