# GV-TC-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-TC-010000` | Trang chủ / Thống kê theo tháng | `/trang-chu/thong-ke-theo-thang-gv-tc-010000` | `GV-TC-010000-DK` | Figma |
| `GV-TC-010002` | Trang chủ / Thống kê theo tháng / Hiện thu nhập | `/trang-chu/thong-ke-theo-thang/hien-thu-nhap-gv-tc-010002` | `GV-TC-010002-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-TC-010001` | Chọn T9/2026 | Trạng thái | GV-TC-010000 | GV-TC-010000 | GV-TC-010000, GV-TC-010002 | `/trang-chu/thong-ke-theo-thang-gv-tc-010000?state=GV-TC-010001` | Figma | trung bình |

## 4. Khu vực và item

### `F01` Header

Frame: `GV-TC-010000`, `GV-TC-010002` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `6244:31669` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | component-2 | `Switch Center`  | `6244:31671` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | header-vai-tro |  | `6244:31672` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Sidebar · MENU - TEACHER

Frame: `GV-TC-010000`, `GV-TC-010002` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | sidebar-menu-teacher | `MENU - TEACHER`  | `6244:31753` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |

### `F03` (ngoài Body)

Frame: `GV-TC-010000`, `GV-TC-010002` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | the-chi-so-so-lop | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6244:56451` Thẻ chỉ số · Số lớp | — |  |  | Chỉ có trên Figma | Figma |
| `F03.02` | the-chi-so-len-ky | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6244:56452` Thẻ chỉ số · Lên kỳ | — |  |  | Chỉ có trên Figma | Figma |
| `F03.03` | the-chi-so-di-hoc | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6244:56453` Thẻ chỉ số · Đi học | — |  |  | Chỉ có trên Figma | Figma |
| `F03.04` | the-chi-so-btvn | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6244:56454` Thẻ chỉ số · BTVN | — |  |  | Chỉ có trên Figma | Figma |
| `F03.05` | the-chi-so-dat-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6244:56455` Thẻ chỉ số · Đạt KPI | — |  |  | Chỉ có trên Figma | Figma |
| `F03.06` | the-chi-so-luong-cung | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6326:3882` Thẻ chỉ số · Lương cứng | — |  |  | Chỉ có trên Figma | Figma |
| `F03.07` | the-chi-so-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6326:3895` Thẻ chỉ số · KPI | — |  |  | Chỉ có trên Figma | Figma |
| `F03.08` | progress-diem-danh-gia-a-f | `Progress/Điểm Đánh Giá (A-F)` Size=36x32 | `6244:56457` Progress/Điểm Đánh Giá (A-F) | — |  |  | Chỉ có trên Figma | Figma |
| `F03.09` | class-status | `CLass Status`  | `6247:61063` CLass Status | — |  |  | Chỉ có trên Figma | Figma |
| `F03.10` | global-progress-bar | `Global Progress Bar`  | `6247:61074` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F03.11` | percent-di-hoc | `PERCENT %`  | `6247:62999` PERCENT % · Đi học | — |  |  | Chỉ có trên Figma | Figma |
| `F03.12` | percent-btvn | `PERCENT %`  | `6247:63006` PERCENT % · BTVN | — |  |  | Chỉ có trên Figma | Figma |
| `F03.13` | percent | `PERCENT %`  | `6247:61078` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F03.14` | filter-nam | `DD/Molecule/Trigger` Size=XS, State=Default | `6244:56703` Filter · Năm | — |  |  | Chỉ có trên Figma | Figma |
| `F03.15` | thang-t10-2026 | `Item tháng`  | `6247:61538` Tháng · T10/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.16` | thang-t9-2026 | `Item tháng`  | `6247:61736` Tháng · T9/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.17` | thang-t8-2026 | `Item tháng`  | `6247:61714` Tháng · T8/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.18` | thang-t7-2026 | `Item tháng`  | `6247:61692` Tháng · T7/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.19` | thang-t6-2026 | `Item tháng`  | `6247:61670` Tháng · T6/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.20` | thang-t5-2026 | `Item tháng`  | `6247:61648` Tháng · T5/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.21` | thang-t4-2026 | `Item tháng`  | `6247:61626` Tháng · T4/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.22` | thang-t3-2026 | `Item tháng`  | `6247:61604` Tháng · T3/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.23` | thang-t2-2026 | `Item tháng`  | `6247:61582` Tháng · T2/2026 | — |  |  | Chỉ có trên Figma | Figma |
| `F03.24` | thang-t1-2026 | `Item tháng`  | `6247:61560` Tháng · T1/2026 | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (3): `GV-TC-010000`, `GV-TC-010001`, `GV-TC-010002`
- Phân loại cần design duyệt (1): `GV-TC-010001`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
