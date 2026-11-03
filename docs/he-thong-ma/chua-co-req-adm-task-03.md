# ADM-TASK-03xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-TASK-030000` | Task trực | `/task-truc` | — | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `F01` Header

Frame: `ADM-TASK-030000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `4343:81504` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Sidebar · MENU - ADMIN

Frame: `ADM-TASK-030000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:238412` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |

### `F03` (ngoài Body)

Frame: `ADM-TASK-030000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | them-nguoi-phu-trach | `Atom/Icon Button`  | `4343:81015` Thêm người phụ trách | — |  |  | Chỉ có trên Figma | Figma |
| `F03.02` | avatar-name | `AVATAR + Name`  | `4343:81017` AVATAR + Name | — |  |  | Chỉ có trên Figma | Figma |
| `F03.03` | global-progress-bar | `Global Progress Bar`  | `4343:83559` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F03.04` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Inactive | `4343:83561` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F03.05` | filter-tuan-nay | `DD/Molecule/Trigger` Size=XS, State=Active | `4343:81137` Filter · Tuần này | — |  |  | Chỉ có trên Figma | Figma |
| `F03.06` | filter-ca | `DD/Molecule/Trigger` Size=XS, State=Default | `4343:81138` Filter · Ca | — |  |  | Chỉ có trên Figma | Figma |
| `F03.07` | percent | `PERCENT %`  | `4343:84050` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (1): `ADM-TASK-030000`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
