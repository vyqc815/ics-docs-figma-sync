# Chi tiết lớp học — Tab Trợ giảng & Phụ trách lớp

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-040400` | Lớp học / Cài đặt / Trợ giảng & support | `/lop-hoc/cai-dat/tro-giang-support` | `ADM-LOP-040400-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_support_handlers_requirements.md` — Chi tiết lớp học — Tab Trợ giảng & Phụ trách lớp (tiền tố `M-CDS4`).

## 2. Luồng

- `FLOW01` Xem hai danh sách đúng role — `REQ01`
- `FLOW02` Chọn Phụ trách lớp có sẵn — `REQ02`
- `FLOW03` Chọn Trợ giảng có sẵn — `REQ03`
- `FLOW04` Tạo nhân sự mới và tự thêm vào lớp — `REQ04`
- `FLOW05` Xóa không cần xác nhận — `REQ05`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Tab Trợ giảng & Phụ trách lớp

Frame: `ADM-LOP-040400` (tool đoán:ADM-LOP-040400) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | ten-tab |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A01.02` | khu-vuc-tro-giang |  | `2384:54801` Support | — |  | `TC01` | Khớp | QC |
| `A01.03` | khu-vuc-phu-trach-lop |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A01.04` | ten |  | `2384:54739` Tên | — |  |  | Khớp | QC |
| `A01.05` | email |  |  | — |  | `TC03` | Chưa thấy trên Figma | QC |
| `A01.06` | icon-x |  |  | — | opens `A06` | `TC03` | Chưa thấy trên Figma | QC |
| `A01.07` | nut-them |  |  | — | opens `A01` | `TC04` | Chưa thấy trên Figma | QC |

### `A02` Popup chọn cách thêm nhân sự

Frame: `ADM-LOP-040400` (tool đoán:ADM-LOP-040400) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | khu-vuc-phu-trach-lop |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A02.02` | khu-vuc-tro-giang |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A02.03` | dong-huy |  |  | — |  | `TC08` | Chưa thấy trên Figma | QC |

### `A03` Popup chọn Phụ trách lớp có sẵn

Frame: `ADM-LOP-040400` (tool đoán:ADM-LOP-040400) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | tim-kiem |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.02` | danh-sach-ket-qua |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.03` | checkbox | `Checkbox` Size=24 | `2384:54775` Checkbox | — |  |  | Khớp | QC |
| `A03.04` | huy |  | `2384:54753` Thanh huy - CSKH | — |  |  | Khớp | QC |
| `A03.05` | them |  |  | — |  | `TC09`, `TC11`, `TC13` | Chưa thấy trên Figma | QC |

### `A04` Popup chọn Trợ giảng có sẵn

Frame: `ADM-LOP-040400` (tool đoán:ADM-LOP-040400) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | tim-kiem |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.02` | danh-sach-ket-qua |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.03` | checkbox | `Checkbox` Size=24 | `2384:54775` Checkbox | — |  |  | Khớp | QC |
| `A04.04` | huy-them |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A05` Popup Tạo Phụ trách lớp/Trợ giảng mới dùng chung

Frame: `ADM-LOP-040400` (tool đoán:ADM-LOP-040400) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | form-tao-tai-khoan |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A05.02` | role |  |  | — |  | `TC17`, `TC18`, `TC19`, `TC20` | Chưa thấy trên Figma | QC |
| `A05.03` | huy |  | `2384:54753` Thanh huy - CSKH | — |  |  | Khớp | QC |
| `A05.04` | xac-nhan-tao |  |  | — |  | `TC18`, `TC20` | Chưa thấy trên Figma | QC |

### `A06` Icon Xóa khỏi lớp không cần xác nhận

Frame: `ADM-LOP-040400` (tool đoán:ADM-LOP-040400) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | icon-x |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.02` | khi-bam |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.03` | thanh-cong |  |  | — |  | `TC23`, `TC24`, `TC25` | Chưa thấy trên Figma | QC |
| `A06.04` | that-bai |  |  | — |  | `TC25` | Chưa thấy trên Figma | QC |

### `A07` Phân quyền hỗ trợ lớp và giới hạn chấm điểm

Frame: `ADM-LOP-040400` (tool đoán:ADM-LOP-040400) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | xem-lop |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.02` | ho-tro-quan-ly |  |  | — |  | `TC27` | Chưa thấy trên Figma | QC |
| `A07.03` | them-xoa-nhan-su-tai-tab-nay |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.04` | cham-diem-btvn |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.05` | cham-diem-bai-kiem-tra |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A08` Toast phản hồi CRUD

Frame: `ADM-LOP-040400` (tool đoán:ADM-LOP-040400) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa thấy trên Figma | QC |
| `A08.02` | thong-tin | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I2384:54702;2177:28928` Chi tiết NV | — |  |  | Khớp | QC |
| `A08.03` | canh-bao |  |  | — |  | `TTC02` | Chưa thấy trên Figma | QC |
| `A08.04` | loi |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-040400` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2384:54702` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-icon-button | `Atom/Icon Button`  | `2384:54729` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | mouse-click |  | `2384:54762` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:229497` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | account | `ACCOUNT` Size=Default | `3497:51034` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Thuật ngữ và hiển thị | Tab là `Trợ giảng & Phụ trách lớp`; Trợ giảng ánh xạ role Support, Phụ trách lớp ánh xạ role Class Handler. Mỗi danh sách chỉ có Tên, Email, Xóa; không có Phụ trách chính. |
| `REQ02` | Chọn Phụ trách lớp có sẵn | Bấm `+` mở lựa chọn `Chọn phụ trách lớp` hoặc `Tạo phụ trách lớp mới`. Với flow chọn có sẵn, Admin/Class Handler tìm theo tên/email, multi-select các Class Handler đang hoạt động và chưa thuộc lớp; thêm nguyên tử. |
| `REQ03` | Chọn Trợ giảng có sẵn | Bấm `+` mở lựa chọn `Chọn trợ giảng` hoặc `Tạo trợ giảng mới`. Với flow chọn có sẵn, Admin/Class Handler tìm theo tên/email, multi-select các Support đang hoạt động và chưa thuộc lớp; không có role Assistant Teacher riêng. |
| `REQ04` | Tạo mới và tự thêm | Dùng form tạo tài khoản dùng chung. Flow Phụ trách lớp khóa role `Class Handler`; flow Trợ giảng khóa role `Support`. Tạo xong tự thêm vào đúng lớp/khu vực; không cấp quyền chấm điểm; chống tạo trùng khi retry lỗi liên kết. |
| `REQ05` | Xóa quan hệ | Bấm X gửi request ngay, không popup xác nhận; chỉ xóa quan hệ với lớp, không xóa tài khoản/lịch sử; idempotent. |
| `REQ06` | Quyền hỗ trợ, không chấm điểm | Class Handler và Support được xem/hỗ trợ quản lý theo permission từng function nhưng không được nhập/cập nhật điểm BTVN hoặc bài kiểm tra. Chỉ Giáo viên phụ trách chính có quyền chấm. |
| `REQ07` | Audit và an toàn | Lưu người/thời điểm cho thao tác chọn có sẵn, tạo mới, tự thêm và xóa; không tin role/phạm vi do client gửi; text hiển thị an toàn và lỗi không lộ thông tin kỹ thuật/dữ liệu nhạy cảm. |
| `EX01` | Ngoại lệ | Popup Phụ trách lớp nhận user không phải Class Handler, đã thuộc lớp, bị khóa hoặc ngoài phạm vi → từ chối toàn bộ multi-select. |
| `EX02` | Ngoại lệ | Popup Trợ giảng nhận user không phải Support, đã thuộc lớp, bị khóa hoặc ngoài phạm vi → từ chối toàn bộ multi-select. |
| `EX03` | Ngoại lệ | Flow tạo mới nhận dữ liệu trùng/sai validation, role bị sửa hoặc người dùng mất quyền → không tạo tài khoản và quan hệ một phần; trả lỗi đúng field/nguyên nhân. |
| `EX04` | Ngoại lệ | Tạo tài khoản thành công nhưng gắn lớp thất bại → không hiển thị quan hệ giả; retry bằng ID/idempotency key cũ, không tạo tài khoản trùng. |
| `EX05` | Ngoại lệ | Xóa thất bại, request lặp hoặc quan hệ đã đổi → xử lý idempotent, không xóa nhầm tài khoản/người khác và đồng bộ lại UI. |
| `EX06` | Ngoại lệ | Class Handler hoặc Support gửi request chấm điểm BTVN/bài kiểm tra → backend từ chối, kể cả người đó đang được phân công vào lớp. |
| `EX07` | Ngoại lệ | Role không phải Admin/Class Handler gửi request chọn có sẵn, tạo mới hoặc xóa nhân sự tại tab → backend từ chối; Support chỉ xem. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Hiển thị đúng tên tab và khu vực | High |  | Flow 1 / REQ01 | `A01` | `A01.02` |
| `TC02` | Case 2: Mapping đúng role vào hai danh sách | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC03` | Case 3: Hiển thị đúng ba cột | High |  | REQ01 | `A01` | `A01.05`, `A01.06` |
| `TC04` | Case 4: Danh sách rỗng độc lập | Medium |  | REQ01 | `A01` | `A01.07` |
| `TC05` | Case 5: Mở lựa chọn thêm Phụ trách lớp | High |  | Flow 2 / REQ02 | `A02` |  |
| `TC06` | Case 6: Mở lựa chọn thêm Trợ giảng | High |  | Flow 3 / REQ03 | `A02` |  |
| `TC07` | Case 7: Điều hướng đúng flow con | High |  | Flow 2–4 / REQ02–REQ04 | `A02` |  |
| `TC08` | Case 8: Đóng popup lựa chọn | Medium |  | REQ02 | `A02` | `A02.03` |
| `TC09` | Case 9: Mở popup và tìm theo tên | High |  | Flow 2 / REQ02 | `A03` | `A03.05` |
| `TC10` | Case 10: Tìm Phụ trách lớp theo email | High |  | Flow 2 / REQ02 | `A03` |  |
| `TC11` | Case 11: Thêm nhiều Phụ trách lớp | High | Có | Flow 2 / REQ02 | `A03` | `A03.05` |
| `TC12` | Case 12: Hủy popup chọn Phụ trách lớp | Medium |  | Flow 2 / REQ02 | `A03` |  |
| `TC13` | Case 13: Từ chối user sai role, trùng hoặc không còn hợp lệ | High |  | EX01 / REQ02 | `A03` | `A03.05` |
| `TC14` | Case 14: Tìm Trợ giảng theo tên hoặc email | High |  | Flow 3 / REQ03 | `A04` |  |
| `TC15` | Case 15: Thêm nhiều Trợ giảng | High | Có | Flow 3 / REQ03 | `A04` |  |
| `TC16` | Case 16: Chặn role sai hoặc Support trùng | High |  | EX02 / REQ03 | `A04` |  |
| `TC17` | Case 17: Mở form tạo Phụ trách lớp đúng role | High |  | Flow 4 / REQ04 | `A05` | `A05.02` |
| `TC18` | Case 18: Tạo Phụ trách lớp và tự thêm vào lớp | High |  | Flow 4 / REQ04 | `A05` | `A05.02`, `A05.04` |
| `TC19` | Case 19: Mở form tạo Trợ giảng đúng role | High |  | Flow 4 / REQ04 | `A05` | `A05.02` |
| `TC20` | Case 20: Tạo Trợ giảng và tự thêm vào lớp | High |  | Flow 4 / REQ04 | `A05` | `A05.02`, `A05.04` |
| `TC21` | Case 21: Chặn dữ liệu trùng, sai validation hoặc sửa role | High |  | EX03 / REQ04 | `A05` |  |
| `TC22` | Case 22: Tạo tài khoản thành công nhưng gắn lớp thất bại | High |  | EX04 / REQ04 | `A05` |  |
| `TC23` | Case 23: Xóa Phụ trách lớp ngay khi bấm X | High | Có | Flow 5 / REQ05 | `A06` | `A06.03` |
| `TC24` | Case 24: Xóa Trợ giảng ngay khi bấm X | High |  | Flow 5 / REQ05 | `A06` | `A06.03` |
| `TC25` | Case 25: Xóa thất bại | High |  | EX05 / REQ05 | `A06` | `A06.03`, `A06.04` |
| `TC26` | Case 26: Bấm X lặp hoặc quan hệ đã bị xóa | Medium |  | EX05 / REQ05 | `A06` |  |
| `TC27` | Case 27: Class Handler xem và hỗ trợ quản lý lớp | High |  | REQ06 / Ràng buộc quyền | `A07` | `A07.02` |
| `TC28` | Case 28: Support xem và hỗ trợ quản lý lớp | High |  | REQ06 / Ràng buộc quyền | `A07` |  |
| `TC29` | Case 29: Backend từ chối Phụ trách lớp chấm điểm | High |  | EX06 / REQ06 | `A07` |  |
| `TC30` | Case 30: Backend từ chối Trợ giảng chấm điểm | High |  | EX06 / REQ06 | `A07` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A08` | `A08.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A08` | `A08.01`, `A08.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A08` |  |
| `TTC04` | Toast Case 4: Thông tin và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A08` | `A08.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa thấy trên Figma (29): `A01.01`, `A01.03`, `A01.05`, `A01.06`, `A01.07`, `A02.01`, `A02.02`, `A02.03`, `A03.01`, `A03.02`, `A03.05`, `A04.01`, `A04.02`, `A04.04`, `A05.01`, `A05.02`, `A05.04`, `A06.01`, `A06.02`, `A06.03`, `A06.04`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A08.01`, `A08.03`, `A08.04`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (2): `REQ07`, `EX07`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
