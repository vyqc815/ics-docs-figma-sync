# ADM-LGV-02xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LGV-020000` | Lương / Đề xuất tăng lương | `/luong/de-xuat-tang-luong` | `ADM-LGV-020000-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-LGV-020000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `4899:117499` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:249533` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | tim-kiem | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `4899:117596` Tìm kiếm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | filter-trung-tam | `DD/Molecule/Trigger` Size=XS, State=Default | `4899:117597` Filter · Trung tâm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | filter-trang-thai | `DD/Molecule/Trigger` Size=XS, State=Default | `4899:117598` Filter · Trạng thái | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | filter-thang-nay | `DD/Molecule/Trigger` Size=XS, State=Active | `4899:117599` Filter · Tháng này | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | the-chi-so-so-lop | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4899:117603` Thẻ chỉ số · Số lớp | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | the-chi-so-so-buoi-da-day | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4899:117604` Thẻ chỉ số · Số buổi đã dạy | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | the-chi-so-luong-buoi-day | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4899:117605` Thẻ chỉ số · Lương buổi dạy | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | the-chi-so-luong-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4899:117606` Thẻ chỉ số · Lương KPI | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | the-chi-so-luong-ot | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4899:117607` Thẻ chỉ số · Lương OT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | the-chi-so-tong-luong | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4899:117608` Thẻ chỉ số · Tổng lương | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | avatar | `Avatar` Size=32 | `4899:117905` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | atom-chip | `Atom/Chip` Type=TỔNG DOANH THU | `4899:117914` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | atom-badge | `Atom/Badge`  | `4899:117921` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (1): `ADM-LGV-020000`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
