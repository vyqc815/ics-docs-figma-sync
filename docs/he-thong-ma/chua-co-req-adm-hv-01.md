# ADM-HV-01xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-HV-010020` | Danh sách học viên / Popup lịch sử / Hoá đơn | `/danh-sach-hoc-vien/popup-lich-su/hoa-don` | `ADM-HV-010020-DK` | Figma |
| `ADM-HV-010040` | Danh sách học viên / Popup lịch sử / Ghi chú | `/danh-sach-hoc-vien/popup-lich-su/ghi-chu` | `ADM-HV-010040-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-HV-010004` | Danh sách học viên · Trống | Trạng thái | — | — | — | — | Figma | thấp |
| `ADM-HV-010030` | Lớp | Trạng thái | ADM-HV-010020 | ADM-HV-010020 | — | `/danh-sach-hoc-vien/popup-lich-su/hoa-don?state=ADM-HV-010030` | Figma | thấp |

## 4. Khu vực và item

### `F01` (ngoài Body)

Frame: `ADM-HV-010020`, `ADM-HV-010040` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | popup-header | `Popup/Header`  | `2527:167835` Popup/Header | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | dropdown-the-ghi-chu-menu-hanh-dong | `DD/Organism/Menu Panel` Type=Action | `3634:77708` Dropdown · Thẻ ghi chú · Menu hành động | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Frame 1171274950

Frame: `ADM-HV-010020`, `ADM-HV-010040` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `2263:48473` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |

### `F03` Frame 1171274951

Frame: `ADM-HV-010020` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | the-chi-so-so-hoa-don | `Thẻ chỉ số` Kiểu=Gọn in hoa 15 | `3108:125524` Thẻ chỉ số · Số hoá đơn | — |  |  | Chỉ có trên Figma | Figma |
| `F03.02` | the-chi-so-tong-hoc-phi | `Thẻ chỉ số` Kiểu=Gọn in hoa 15 | `3108:125537` Thẻ chỉ số · Tổng học phí | — |  |  | Chỉ có trên Figma | Figma |

### `F04` Vùng cuộn ngang

Frame: `ADM-HV-010020` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F04.01` | atom-badge | `Atom/Badge`  | `3269:63416` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F04.02` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `3269:63419` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F04.03` | avatar-count | `Avatar` Size=24 | `3269:63425` Avatar + Count | — |  |  | Chỉ có trên Figma | Figma |
| `F04.04` | atom-tag-solid | `Atom/Tag Solid` Size=20H | `3269:63455` Atom/Tag Solid | — |  |  | Chỉ có trên Figma | Figma |

### `F05` Section Title & Filter Action Bar

Frame: `ADM-HV-010040` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F05.01` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `2263:51387` Dropdown | — |  |  | Chỉ có trên Figma | Figma |

### `F06` Danh sách ghi chú

Frame: `ADM-HV-010040` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F06.01` | avatar | `Avatar` Size=24 | `3641:79290` Avatar | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (4): `ADM-HV-010004`, `ADM-HV-010020`, `ADM-HV-010030`, `ADM-HV-010040`
- Popup chưa có màn cha (1): `ADM-HV-010004`
- Phân loại cần design duyệt (2): `ADM-HV-010004`, `ADM-HV-010030`
- Thiếu prototype link đi vào (2): `ADM-HV-010004`, `ADM-HV-010030`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
