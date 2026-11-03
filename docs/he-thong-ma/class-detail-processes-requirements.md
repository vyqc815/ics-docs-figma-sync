# Chi tiết lớp học — Tiêu chuẩn lớp - giáo viên, CSKH và Quy trình lớp

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-020600` | Chi tiết lớp học / Tiêu chuẩn lớp - giáo viên | `/chi-tiet-lop-hoc/tieu-chuan-lop/giao-vien` | `ADM-LOP-020600-DK` | QC |
| `ADM-LOP-020700` | Chi tiết lớp học / Quy trình lớp | `/chi-tiet-lop-hoc/quy-trinh-lop` | `ADM-LOP-020700-DK` | QC |
| `ADM-LOP-020800` | Chi tiết lớp học / CSKH | `/chi-tiet-lop-hoc/cskh` | `ADM-LOP-020800-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_processes_requirements.md` — Chi tiết lớp học — Tiêu chuẩn lớp - giáo viên, CSKH và Quy trình lớp (tiền tố `M-CDP`).

## 2. Luồng

- `FLOW01` Xem tab quy trình — `REQ01`
- `FLOW02` Thêm nội dung — `REQ02`, `REQ04`, `REQ05`
- `FLOW03` Cập nhật Result — `REQ02`, `REQ03`, `REQ05`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-020604` | Trống | Trạng thái | ADM-LOP-020600 | ADM-LOP-020600 | — | `/chi-tiet-lop-hoc/tieu-chuan-lop/giao-vien?state=ADM-LOP-020604` | Figma | trung bình |
| `ADM-LOP-020610` | Popup thêm tiêu chuẩn | Popup | ADM-LOP-020600 | ADM-LOP-020600 | — | `/chi-tiet-lop-hoc/tieu-chuan-lop/giao-vien?popup=ADM-LOP-020610` | Figma | cao |
| `ADM-LOP-020611` | Xem trước | Trạng thái | ADM-LOP-020610 | ADM-LOP-020600 | ADM-LOP-020610 | `/chi-tiet-lop-hoc/tieu-chuan-lop/giao-vien?state=ADM-LOP-020611` | Figma | trung bình |
| `ADM-LOP-020612` | Xem tiêu chí | Trạng thái | ADM-LOP-020611 | ADM-LOP-020600 | ADM-LOP-020611 | `/chi-tiet-lop-hoc/tieu-chuan-lop/giao-vien?state=ADM-LOP-020612` | Figma | trung bình |
| `ADM-LOP-020704` | Trống | Trạng thái | ADM-LOP-020700 | ADM-LOP-020700 | — | `/chi-tiet-lop-hoc/quy-trinh-lop?state=ADM-LOP-020704` | Figma | trung bình |
| `ADM-LOP-020710` | Popup thêm quy trình | Popup | ADM-LOP-020700 | ADM-LOP-020700 | — | `/chi-tiet-lop-hoc/quy-trinh-lop?popup=ADM-LOP-020710` | Figma | cao |
| `ADM-LOP-020711` | Xem trước | Trạng thái | ADM-LOP-020710 | ADM-LOP-020700 | ADM-LOP-020710 | `/chi-tiet-lop-hoc/quy-trinh-lop?state=ADM-LOP-020711` | Figma | trung bình |
| `ADM-LOP-020712` | Xem tiêu chí | Trạng thái | ADM-LOP-020711 | ADM-LOP-020700 | ADM-LOP-020711 | `/chi-tiet-lop-hoc/quy-trinh-lop?state=ADM-LOP-020712` | Figma | thấp |
| `ADM-LOP-020804` | Trống | Trạng thái | ADM-LOP-020800 | ADM-LOP-020800 | — | `/chi-tiet-lop-hoc/cskh?state=ADM-LOP-020804` | Figma | trung bình |
| `ADM-LOP-020810` | Popup thêm quy trình CSKH | Popup | ADM-LOP-020800 | ADM-LOP-020800 | — | `/chi-tiet-lop-hoc/cskh?popup=ADM-LOP-020810` | Figma | cao |
| `ADM-LOP-020811` | Xem trước | Trạng thái | ADM-LOP-020810 | ADM-LOP-020800 | ADM-LOP-020810 | `/chi-tiet-lop-hoc/cskh?state=ADM-LOP-020811` | Figma | trung bình |
| `ADM-LOP-020812` | Xem tiêu chí | Trạng thái | ADM-LOP-020811 | ADM-LOP-020800 | ADM-LOP-020811 | `/chi-tiet-lop-hoc/cskh?state=ADM-LOP-020812` | Figma | thấp |
| `ADM-LOP-020904` | Trống | Trạng thái | ADM-LOP-020800 | ADM-LOP-020800 | — | `/chi-tiet-lop-hoc/cskh?state=ADM-LOP-020904` | Figma | trung bình |

## 4. Khu vực và item

### `A01` Ba tab quy trình trong lớp

Frame: `ADM-LOP-020710`, `ADM-LOP-020810` (tool đoán:ADM-LOP-020710, ADM-LOP-020810) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | ten-tab |  |  | — |  |  | Chưa sync | QC |
| `A01.02` | tien-do |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.03` | action-item |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | nut-them |  |  | — |  |  | Chưa sync | QC |

### `A02` Popup Thêm nội dung

Frame: `ADM-LOP-020610` (tool đoán:ADM-LOP-020610) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tieu-chuan-lop-giao-vien-them-tieu-chuan |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | cskh-them-quy-trinh |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | quy-trinh-lop-them-quy-trinh |  |  | — |  |  | Chưa sync | QC |
| `A02.04` | cay-lua-chon |  |  | — |  |  | Chưa sync | QC |
| `A02.05` | category-action-item |  |  | — |  | `TC03` | Chưa sync | QC |
| `A02.06` | them-1 |  |  | — |  |  | Chưa sync | QC |
| `A02.07` | huy |  |  | — |  |  | Chưa sync | QC |

### `A03` Toast phản hồi CRUD

Frame: `ADM-LOP-020600`, `ADM-LOP-020700`, `ADM-LOP-020800` (tool đoán:ADM-LOP-020600, ADM-LOP-020700, ADM-LOP-020800) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | thanh-cong |  |  | — |  | `TC05` | Chưa khớp tự động | QC |
| `A03.02` | thong-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.03` | canh-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.04` | co-loi-xay-ra |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-020600`, `ADM-LOP-020700`, `ADM-LOP-020800` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-button | `Atom/Button` Type=Primary, Size=Medium | `3502:77182` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | global-progress-bar | `Global Progress Bar`  | `3502:77193` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `3502:77195` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-chip | `Atom/Chip` Type=Date | `2711:51750` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-label | `Atom/Label`  | `3857:71648` Atom/Label | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-badge | `Atom/Badge`  | `2711:51794` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | account | `ACCOUNT` Size=Default | `3497:47434` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:226785` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | atom-badge-type | `Atom/Badge Type` Size=M | `2711:61497` Atom/Badge Type | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Row

Frame: `ADM-LOP-020600`, `ADM-LOP-020700`, `ADM-LOP-020800` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | atom-input | `Atom/Input` State=Default, Kiểu=Chuẩn | `3857:71646` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | atom-label | `Atom/Label`  | `3857:71662` Atom/Label | — |  |  | Chỉ có trên Figma | Figma |

### `F03` File

Frame: `ADM-LOP-020700`, `ADM-LOP-020800` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | atom-uploaded-file-card | `Atom/Uploaded File Card` Type=Menu | `2711:61388` Atom/Uploaded File Card | — |  |  | Chỉ có trên Figma | Figma |

### `F04` Field · Ghi chú

Frame: `ADM-LOP-020700`, `ADM-LOP-020800` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F04.01` | atom-label | `Atom/Label`  | `3857:71832` Atom/Label | — |  |  | Chỉ có trên Figma | Figma |
| `F04.02` | atom-input | `Atom/Input` State=Default, Kiểu=Chuẩn | `3772:86479` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |

### `F05` Verify

Frame: `ADM-LOP-020700`, `ADM-LOP-020800` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F05.01` | atom-label | `Atom/Label`  | `3857:71889` Atom/Label | — |  |  | Chỉ có trên Figma | Figma |
| `F05.02` | avatar-name | `AVATAR + Name`  | `2711:61488` AVATAR + Name | — |  |  | Chỉ có trên Figma | Figma |
| `F05.03` | atom-button | `Atom/Button` Type=Secondary, Size=Small | `2711:61489` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |

### `F06` Log Entry

Frame: `ADM-LOP-020700`, `ADM-LOP-020800` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F06.01` | atom-chip | `Atom/Chip` Type=Date | `2711:61501` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |

### `F07` Molecule/Add New Bar

Frame: `ADM-LOP-020700`, `ADM-LOP-020800` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F07.01` | molecule-add-new-bar | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `2711:61506` Molecule/Add New Bar | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Nguồn | Ba loại quy trình được định nghĩa riêng ngoài lớp. Nguồn ICS dùng chung bảng ComGao và theo center. Popup chỉ hiển thị Package từ quy trình Công khai cùng center: tab Tiêu chuẩn lớp - giáo viên lấy Lớp - Giáo viên, CSKH lấy CSKH (Support), Quy trình lớp lấy Lớp học. |
| `REQ02` | Quyền | Phải được add vào lớp mới được vào Chi tiết lớp và xem tab theo quyền. Chỉ Class Handler/Support của lớp được Thêm và cập nhật Result; không phụ thuộc người đã thêm item. Ngoại lệ: Giáo viên của lớp tick Action `Xác thực` có mình trong Người gán (tab Tiêu chuẩn lớp - giáo viên). |
| `REQ03` | Result | Lưu riêng theo lớp, loại quy trình và Action Item; tiến độ theo Action Board. Định nghĩa đã Công khai bị khóa thêm/sửa/xóa nên không có tình huống đổi Loại task hoặc xóa item nguồn sau khi gắn vào lớp. Khi nguồn Công khai, cập nhật Result theo quyền lớp. Khi nguồn Vô hiệu, vẫn hiện nội dung/Result cũ nhưng chỉ xem; Công khai lại thì áp dụng quyền cập nhật theo role lớp. |
| `REQ04` | Chọn nội dung | Chọn nhiều cấp; Hủy không lưu; không thêm trùng hoặc tự ghi Result; chỉ lưu nguồn còn Công khai. |
| `REQ05` | Phản hồi | Lưu thành công/lỗi có một Toast đúng kết quả; Hủy và chỉ xem không có Toast CRUD. |
| `EX01` | Ngoại lệ | Khi Thêm nội dung, Package/Category/Action Item không thuộc loại quy trình của tab, khác center với lớp, không còn hợp lệ, quy trình nguồn không còn Công khai hoặc đã gắn trùng → từ chối, không lưu một phần. |
| `EX02` | Ngoại lệ | Chưa được add vào lớp → không vào Chi tiết lớp/tab hoặc đọc dữ liệu qua request; đã thuộc lớp nhưng không có role Class Handler/Support → từ chối Thêm/cập nhật Result. |
| `EX03` | Ngoại lệ | Lưu lỗi → giữ lựa chọn hoặc Result cũ để thử lại; không báo thành công. |
| `EX04` | Ngoại lệ | Cập nhật Result khi nguồn Vô hiệu → từ chối qua UI/request; nội dung và Result đã ghi vẫn hiển thị. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Hiển thị đúng phạm vi lớp và tab | High | Có | Flow 1 / REQ01 / EX02 | `A01` | `A01.02` |
| `TC02` | Case 2: Result theo quyền và trạng thái nguồn | High |  | Flow 3 / REQ02 / REQ03 / EX04 | `A01` |  |
| `TC03` | Case 3: Mỗi tab chỉ thấy nguồn của mình | High |  | Flow 2 / REQ01 / REQ04 | `A02` | `A02.05` |
| `TC04` | Case 4: Hủy hoặc lựa chọn không hợp lệ | High |  | Flow 2 / EX01 / EX02 | `A02` |  |
| `TC05` | Case 5: Phản hồi đúng kết quả | High |  | REQ05 / EX03 | `A03` | `A03.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (4): `A03.01`, `A03.02`, `A03.03`, `A03.04`
- Chưa sync (11): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`
- Frame Figma chưa có requirement (13): `ADM-LOP-020604`, `ADM-LOP-020610`, `ADM-LOP-020611`, `ADM-LOP-020612`, `ADM-LOP-020704`, `ADM-LOP-020710`, `ADM-LOP-020711`, `ADM-LOP-020712`, `ADM-LOP-020804`, `ADM-LOP-020810`, `ADM-LOP-020811`, `ADM-LOP-020812`, `ADM-LOP-020904`
- Phân loại cần design duyệt (10): `ADM-LOP-020604`, `ADM-LOP-020611`, `ADM-LOP-020612`, `ADM-LOP-020704`, `ADM-LOP-020711`, `ADM-LOP-020712`, `ADM-LOP-020804`, `ADM-LOP-020811`, `ADM-LOP-020812`, `ADM-LOP-020904`
- Thiếu prototype link đi vào (7): `ADM-LOP-020604`, `ADM-LOP-020610`, `ADM-LOP-020704`, `ADM-LOP-020710`, `ADM-LOP-020804`, `ADM-LOP-020810`, `ADM-LOP-020904`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
