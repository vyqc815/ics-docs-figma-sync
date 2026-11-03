# ADM-LOP-02xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-020303` | Chi tiết lớp học / Kiểm tra | `/chi-tiet-lop-hoc/kiem-tra` | `ADM-LOP-020303-DK` | Figma |
| `ADM-LOP-020709` | Chi tiết lớp học / Quy trình lớp / Có cập nhật & quá hạn | `/chi-tiet-lop-hoc/quy-trinh-lop/co-cap-nhat-qua-han` | `ADM-LOP-020709-DK` | Figma |
| `ADM-LOP-020809` | Chi tiết lớp học / CSKH / Có cập nhật & quá hạn | `/chi-tiet-lop-hoc/cskh/co-cap-nhat-qua-han` | `ADM-LOP-020809-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-020404` | Trống | Trạng thái | ADM-LOP-020303 | ADM-LOP-020303 | — | `/chi-tiet-lop-hoc/kiem-tra?state=ADM-LOP-020404` | Figma | trung bình |
| `ADM-LOP-020504` | Trống | Trạng thái | ADM-LOP-020303 | ADM-LOP-020303 | — | `/chi-tiet-lop-hoc/kiem-tra?state=ADM-LOP-020504` | Figma | trung bình |

## 4. Khu vực và item

### `F01` MainContent

Frame: `ADM-LOP-020303` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | the-chi-so | `Thẻ chỉ số` Kiểu=Chuẩn | `3502:69812` Thẻ chỉ số | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | trang-thai-nop-bai-va-diem | `Trạng thái nộp bài và điểm`  | `3502:70652` Trạng thái nộp bài và điểm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | molecule-o-dinh-danh |  | `3502:70653` Molecule/Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `3502:70658` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `3502:69923` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-icon-button | `Atom/Icon Button`  | `3561:66443` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `3502:69924` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | atom-badge | `Atom/Badge`  | `3502:69928` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | percent | `PERCENT %`  | `3502:69934` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |

### `F02` (ngoài Body)

Frame: `ADM-LOP-020303`, `ADM-LOP-020709`, `ADM-LOP-020809` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | account | `ACCOUNT` Size=Default | `3502:70012` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:225655` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | atom-button | `Atom/Button` Type=Primary, Size=Medium | `3857:68581` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | global-progress-bar | `Global Progress Bar`  | `3502:75921` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F02.05` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `3502:75923` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.06` | atom-chip | `Atom/Chip` Type=Date | `3772:86901` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F02.07` | atom-badge | `Atom/Badge`  | `3772:86940` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.08` | atom-badge-type | `Atom/Badge Type` Size=M | `3772:87014` Atom/Badge Type | — |  |  | Chỉ có trên Figma | Figma |

### `F03` File

Frame: `ADM-LOP-020709`, `ADM-LOP-020809` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | atom-uploaded-file-card | `Atom/Uploaded File Card` Type=Menu | `3772:86888` Atom/Uploaded File Card | — |  |  | Chỉ có trên Figma | Figma |

### `F04` Field · Ghi chú

Frame: `ADM-LOP-020709`, `ADM-LOP-020809` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F04.01` | atom-label | `Atom/Label`  | `3857:71895` Atom/Label | — |  |  | Chỉ có trên Figma | Figma |
| `F04.02` | atom-input | `Atom/Input` State=Default, Kiểu=Chuẩn | `3772:86906` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |

### `F05` Row

Frame: `ADM-LOP-020709`, `ADM-LOP-020809` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F05.01` | atom-label | `Atom/Label`  | `3857:71923` Atom/Label | — |  |  | Chỉ có trên Figma | Figma |
| `F05.02` | atom-input | `Atom/Input` State=CChọn, Kiểu=Chuẩn | `3772:86977` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |

### `F06` Verify

Frame: `ADM-LOP-020709`, `ADM-LOP-020809` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F06.01` | atom-label | `Atom/Label`  | `3857:71952` Atom/Label | — |  |  | Chỉ có trên Figma | Figma |
| `F06.02` | avatar-name | `AVATAR + Name`  | `3772:87003` AVATAR + Name | — |  |  | Chỉ có trên Figma | Figma |

### `F07` Log Entry

Frame: `ADM-LOP-020709`, `ADM-LOP-020809` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F07.01` | atom-chip | `Atom/Chip` Type=Date | `3772:87018` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |

### `F08` Molecule/Add New Bar

Frame: `ADM-LOP-020709`, `ADM-LOP-020809` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F08.01` | molecule-add-new-bar | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `3772:87023` Molecule/Add New Bar | — |  |  | Chỉ có trên Figma | Figma |

### `F09` Header

Frame: `ADM-LOP-020809` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F09.01` | account | `ACCOUNT` Size=Default | `2711:65615` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (5): `ADM-LOP-020303`, `ADM-LOP-020404`, `ADM-LOP-020504`, `ADM-LOP-020709`, `ADM-LOP-020809`
- Phân loại cần design duyệt (2): `ADM-LOP-020404`, `ADM-LOP-020504`
- Thiếu prototype link đi vào (2): `ADM-LOP-020404`, `ADM-LOP-020504`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
