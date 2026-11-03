# Chi tiết lớp học — Tab Giáo viên

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-040300` | Lớp học / Cài đặt / Giáo viên | `/lop-hoc/cai-dat/giao-vien` | `ADM-LOP-040300-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_teachers_requirements.md` — Chi tiết lớp học — Tab Giáo viên (tiền tố `M-CDT`).

## 2. Luồng

- `FLOW01` Xem danh sách và mở Chi tiết — `REQ01`, `REQ08`
- `FLOW02` Thêm giáo viên hiện có — `REQ02`, `REQ03`
- `FLOW03` Tạo giáo viên mới và thêm vào lớp — `REQ04`
- `FLOW04` Đổi Giáo viên phụ trách chính — `REQ05`, `REQ06`
- `FLOW05` Xóa giáo viên khỏi lớp — `REQ07`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Tab Giáo viên — Danh sách giáo viên trong lớp

Frame: `ADM-LOP-040300` (tool đoán:ADM-LOP-040300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | ten |  | `I3138:130161;3138:130001` Tên | — |  |  | Khớp | QC |
| `A01.02` | email |  |  | — |  | `TC01` | Chưa khớp tự động | QC |
| `A01.03` | phu-trach-chinh |  | `2384:50902` PHỤ TRÁCH CHÍNH | — |  | `TC01`, `TC02` | Khớp | QC |
| `A01.04` | xoa |  |  | — | opens `A06` |  | Chưa khớp tự động | QC |
| `A01.05` | them-giao-vien-vao-lop | `Atom/Button` Type=Warning, Size=Medium | `2384:54527` Atom/Button | — | opens `A01` |  | Khớp | QC |

### `A02` Popup chọn cách thêm giáo viên

Frame: `ADM-LOP-040300` (tool đoán:ADM-LOP-040300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | chon-giao-vien |  |  | — | opens `A02` | `TC06` | Chưa khớp tự động | QC |
| `A02.02` | tao-giao-vien-moi |  |  | — | opens `A04` | `TC06` | Chưa khớp tự động | QC |
| `A02.03` | dong-popup |  |  | — |  |  | Chưa khớp tự động | QC |

### `A03` Popup Chọn giáo viên hiện có

Frame: `ADM-LOP-040300` (tool đoán:ADM-LOP-040300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | tim-kiem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.02` | danh-sach |  | `2384:54526` Danh sách giáo viên | — |  | `TC07`, `TC10`, `TC11`, `TC28` | Khớp | QC |
| `A03.03` | huy |  | `I3138:130161;3138:130001` Tên | — |  |  | Khớp | QC |
| `A03.04` | them-moi |  |  | — |  | `TC08` | Chưa khớp tự động | QC |

### `A04` Popup Tạo giáo viên mới dùng chung

Frame: `ADM-LOP-040300` (tool đoán:ADM-LOP-040300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | ho-va-ten |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.02` | ma-giao-vien-code |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.03` | email-so-dien-thoai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.04` | trang-thai |  |  | — |  | `TC12`, `TC14`, `TC16` | Chưa khớp tự động | QC |
| `A04.05` | ghi-chu |  |  | — |  | `TC12` | Chưa khớp tự động | QC |
| `A04.06` | cac-field-khac |  | `2384:50908` Teachers Row List | — |  |  | Khớp | QC |
| `A04.07` | xac-nhan |  |  | — |  | `TC13`, `TC14`, `TC15` | Chưa khớp tự động | QC |

### `A05` Checkbox Giáo viên phụ trách chính và quyền chấm điểm

Frame: `ADM-LOP-040300` (tool đoán:ADM-LOP-040300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | checkbox-chua-chon |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.02` | checkbox-da-chon |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.03` | chuyen-tu-a-sang-b |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.04` | kiem-tra-quyen-cham-diem |  |  | — |  |  | Chưa khớp tự động | QC |

### `A06` Popup xác nhận xóa giáo viên khỏi lớp

Frame: `ADM-LOP-040300` (tool đoán:ADM-LOP-040300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | tieu-de |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.02` | noi-dung-thuong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.03` | canh-bao-giao-vien-chinh |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.04` | huy |  | `I3138:130161;3138:130001` Tên | — |  |  | Khớp | QC |
| `A06.05` | xoa |  |  | — |  |  | Chưa khớp tự động | QC |

### `A07` Điều hướng đến Chi tiết giáo viên

Frame: `ADM-LOP-040300` (tool đoán:ADM-LOP-040300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | vung-bam |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.02` | dich-den |  |  | — |  |  | Chưa khớp tự động | QC |

### `A08` Toast phản hồi CRUD

Frame: `ADM-LOP-040300` (tool đoán:ADM-LOP-040300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa khớp tự động | QC |
| `A08.02` | thong-tin | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I2384:53549;2177:28928` Chi tiết NV | — |  |  | Khớp | QC |
| `A08.03` | canh-bao |  |  | — |  | `TTC02` | Chưa khớp tự động | QC |
| `A08.04` | loi |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-040300` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2384:53549` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | o-dinh-danh |  | `3138:130161` Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | mouse-click |  | `2384:50947` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:229723` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | account | `ACCOUNT` Size=Default | `3497:50893` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Danh sách giáo viên lớp | Hiển thị Tên, Mã, Email, Phụ trách chính và Xóa từ quan hệ giáo viên–lớp; cho phép 0, 1 hoặc nhiều giáo viên nhưng không trùng. |
| `REQ02` | Điểm vào thêm | `Thêm giáo viên vào lớp` mở đúng hai flow `Chọn giáo viên` và `Tạo giáo viên mới`; chỉ Admin/Class Handler/Support được thao tác. |
| `REQ03` | Chọn giáo viên hiện có | Tìm theo tên/mã và hỗ trợ multi-select. Danh sách chỉ trả giáo viên `Training`, `Chính thức`, `Thử việc` còn hiệu lực và chưa thuộc lớp. Không có trạng thái Testing. Giáo viên `Nghỉ việc` không xuất hiện ngay cả khi tìm đúng tên/mã; backend từ chối teacher_id Nghỉ việc gửi trực tiếp. |
| `REQ04` | Tạo giáo viên | Dùng chung popup/rule module Giáo viên, bổ sung Trạng thái và Ghi chú; Code do backend sinh; role cố định Teacher; tạo xong tự gắn lớp, không tự làm Phụ trách chính. |
| `REQ05` | Duy nhất Phụ trách chính | Mỗi lớp có tối đa một Giáo viên phụ trách chính. Giáo viên đầu tiên không tự thành người chính; phải được tick thủ công. Chuyển người chính phải bỏ người cũ và gán người mới trong một giao dịch. Cho phép lớp tạm thời không có người chính. |
| `REQ06` | Quyền chấm điểm | Chỉ tài khoản Teacher đang là Phụ trách chính hiện tại của lớp được nhập/cập nhật điểm BTVN và bài kiểm tra. Role quản lý không được chấm thay. Giáo viên không được xem tab quản lý này. Điểm và audit cũ không đổi khi chuyển người chính. |
| `REQ07` | Xóa khỏi lớp | Xóa mềm quan hệ, không xóa tài khoản, điểm, lương, lịch sử hoặc dữ liệu buổi đã hoàn thành. Cho phép xóa người chính không cần người thay thế; lớp không có quyền chấm BTVN/bài kiểm tra cho đến khi gán mới. |
| `REQ08` | Điều hướng | Bấm giáo viên mở đúng Chi tiết theo teacher_id và quyền module Giáo viên; checkbox/Xóa không kích hoạt điều hướng. |
| `REQ09` | Audit và an toàn | Lưu người/thời điểm cho thêm, tạo, đổi phụ trách, xóa; không tin role/trạng thái/ID do client tự khai; không lộ mật khẩu hoặc lỗi kỹ thuật. |
| `EX01` | Ngoại lệ | Role ngoài `Admin`, `Class Handler`, `Support` hoặc người dùng ngoài phạm vi gửi request CRUD → backend từ chối và không thay đổi dữ liệu. |
| `EX02` | Ngoại lệ | Cùng giáo viên được thêm lặp/đồng thời → chỉ tồn tại một quan hệ hoạt động trong lớp. |
| `EX03` | Ngoại lệ | Giáo viên đã thuộc lớp, `Nghỉ việc`, tài khoản/hồ sơ không còn hiệu lực hoặc ngoài phạm vi → không hiển thị như lựa chọn hợp lệ và không được thêm. Nếu trạng thái thay đổi sau khi popup tải, backend từ chối toàn bộ multi-select để không tạo dữ liệu một phần. |
| `EX04` | Ngoại lệ | Dữ liệu tạo giáo viên sai/trùng, trạng thái không thuộc `Training`/`Chính thức`/`Thử việc` hoặc client gửi `Nghỉ việc`/`Testing` → từ chối tạo. |
| `EX05` | Ngoại lệ | Tạo hồ sơ thành công nhưng liên kết lớp thất bại → không hiển thị quan hệ giả, không tạo lại tài khoản trùng và trả hướng xử lý rõ ràng. |
| `EX06` | Ngoại lệ | Hai request cùng gán Phụ trách chính → backend/database bảo đảm tối đa một người chính và trả dữ liệu mới nhất cho request xung đột. |
| `EX07` | Ngoại lệ | Giáo viên bị xóa/chuyển quan hệ trong lúc popup đang mở → không xóa nhầm tài khoản/giáo viên khác hoặc làm mất người chính mới. |
| `EX08` | Ngoại lệ | Giáo viên không phải Phụ trách chính hoặc role quản lý gửi request nhập/cập nhật điểm BTVN hay bài kiểm tra → backend từ chối và không ghi dữ liệu điểm. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở tab và hiển thị danh sách giáo viên | High | Có | Flow 1 / REQ01 | `A01` | `A01.02`, `A01.03` |
| `TC02` | Case 2: Danh sách rỗng | Medium |  | REQ01 | `A01` | `A01.03` |
| `TC03` | Case 3: Chỉ ba role quản lý được CRUD | High |  | Ràng buộc quyền / EX01 | `A01` |  |
| `TC04` | Case 4: Không hiển thị trùng giáo viên | High |  | EX02 / REQ01 | `A01` |  |
| `TC05` | Case 5: Mở và đóng popup lựa chọn | Medium |  | Flow 2 / REQ02 | `A02` |  |
| `TC06` | Case 6: Điều hướng đúng hai flow | High |  | Flow 2 / REQ02 | `A02` | `A02.01`, `A02.02` |
| `TC07` | Case 7: Tìm theo tên hoặc mã giáo viên | Medium |  | Flow 2 / REQ03 | `A03` | `A03.02` |
| `TC08` | Case 8: Chọn và thêm nhiều giáo viên | High | Có | Flow 2 / REQ03 | `A03` | `A03.04` |
| `TC09` | Case 9: Hủy lựa chọn | Medium |  | Flow 2 / REQ03 | `A03` |  |
| `TC10` | Case 10: Không hiển thị và chặn giáo viên Nghỉ việc | High |  | EX03 / REQ03 | `A03` | `A03.02` |
| `TC11` | Case 11: Chỉ hiển thị ba trạng thái giáo viên có thể thêm | High |  | REQ03 | `A03` | `A03.02` |
| `TC28` | Case 28: Giáo viên chuyển Nghỉ việc khi popup đang mở | High |  | EX03 / REQ03 | `A03` | `A03.02` |
| `TC12` | Case 12: Mở đúng popup tạo giáo viên dùng chung | High |  | Flow 3 / REQ04 | `A04` | `A04.04`, `A04.05` |
| `TC13` | Case 13: Tạo giáo viên và tự thêm vào lớp | High |  | Flow 3 / REQ04 | `A04` | `A04.07` |
| `TC14` | Case 14: Tạo giáo viên theo ba trạng thái được phân công | High |  | Flow 3 / REQ04 | `A04` | `A04.04`, `A04.07` |
| `TC15` | Case 15: Chặn trạng thái hoặc dữ liệu tạo không hợp lệ | High |  | EX04 / REQ04 | `A04` | `A04.07` |
| `TC16` | Case 16: Xử lý lỗi ở bước thêm vào lớp | High |  | EX05 / REQ04 | `A04` | `A04.04` |
| `TC17` | Case 17: Giáo viên đầu tiên không tự thành Phụ trách chính | High |  | REQ04 / REQ05 | `A05` |  |
| `TC18` | Case 18: Chuyển Phụ trách chính từ A sang B | High | Có | Flow 4 / REQ05 | `A05` |  |
| `TC19` | Case 19: Chặn hai Phụ trách chính do request đồng thời | High |  | EX06 / REQ05 | `A05` |  |
| `TC20` | Case 20: Chỉ Phụ trách chính được chấm điểm BTVN và bài kiểm tra | High |  | Flow 4 / REQ06 | `A05` |  |
| `TC21` | Case 21: Đổi người chính không làm mất điểm cũ | High |  | REQ05 / REQ06 | `A05` |  |
| `TC22` | Case 22: Hủy xóa giáo viên | Medium |  | Flow 5 / REQ07 | `A06` |  |
| `TC23` | Case 23: Xóa giáo viên thường khỏi lớp | High | Có | Flow 5 / REQ07 | `A06` |  |
| `TC24` | Case 24: Xóa giáo viên phụ trách chính không cần người thay thế | High |  | Flow 5 / REQ07 | `A06` |  |
| `TC25` | Case 25: Từ chối xóa khi quan hệ đã đổi | High |  | EX07 / REQ07 | `A06` |  |
| `TC26` | Case 26: Mở đúng Chi tiết giáo viên | High |  | Flow 1 / REQ08 | `A07` |  |
| `TC27` | Case 27: Checkbox và Xóa không kích hoạt điều hướng | Medium |  | REQ08 | `A07` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A08` | `A08.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A08` | `A08.01`, `A08.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A08` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A08` | `A08.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (26): `A01.02`, `A01.04`, `A02.01`, `A02.02`, `A02.03`, `A03.01`, `A03.04`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`, `A04.07`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A06.01`, `A06.02`, `A06.03`, `A06.05`, `A07.01`, `A07.02`, `A08.01`, `A08.03`, `A08.04`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (2): `REQ09`, `EX08`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
