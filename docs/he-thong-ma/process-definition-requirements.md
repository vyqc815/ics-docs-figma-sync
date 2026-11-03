# Define quy trình

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-QT-010000` | Quy trình / Danh sách loại quy trình | `/quy-trinh/danh-sach-loai-quy-trinh` | `ADM-QT-010000-DK` | QC |
| `ADM-QT-020000` | Quy trình / Chi tiết loại quy trình | `/quy-trinh/chi-tiet-loai-quy-trinh` | `ADM-QT-020000-DK` | QC |

Requirement: `process_definition_requirement/process_definition_requirements.md` — Define quy trình (tiền tố `PD-PD`).

## 2. Luồng

- `FLOW01` Xem quy trình — `REQ01`
- `FLOW02` Đổi trạng thái — `REQ02`, `REQ06`
- `FLOW03` Quản lý cấu trúc nguồn — `REQ03`, `REQ06`
- `FLOW04` Cấu hình Action Item — `REQ04`, `REQ06`
- `FLOW05` Tạo quy trình — `REQ07`, `REQ08`, `REQ06`
- `FLOW06` Nhân bản quy trình — `REQ09`, `REQ06`
- `FLOW07` Xóa quy trình — `REQ11`, `REQ06`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-QT-010001` | Dropdown chọn loại quy trình | Dropdown | ADM-QT-010000 | ADM-QT-010000 | — | `/quy-trinh/danh-sach-loai-quy-trinh?popup=ADM-QT-010001` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Danh sách loại quy trình

Frame: chưa có (tool đoán:ADM-QT-010001) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | danh-sach |  |  | — |  | `TC01`, `TC22`, `TC23` | Chưa sync | QC |
| `A01.02` | tim-kiem |  |  | — |  |  | Chưa sync | QC |
| `A01.03` | bo-loc |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.04` | sap-xep |  |  | — |  |  | Chưa sync | QC |
| `A01.05` | loai-quy-trinh |  |  | — |  | `TC17` | Chưa sync | QC |
| `A01.06` | trang-thai-quy-trinh |  |  | — |  |  | Chưa sync | QC |
| `A01.07` | nhap-quy-trinh-moi |  |  | — |  | `TC02`, `TC23` | Chưa sync | QC |
| `A01.08` | thong-tin-quy-trinh |  |  | — |  |  | Chưa sync | QC |
| `A01.09` | nut-xoa-cuoi-dong |  |  | — |  |  | Chưa sync | QC |
| `A01.10` | nut-nhan-ban-cuoi-dong |  |  | — |  |  | Chưa sync | QC |
| `A01.11` | mui-ten-cuoi-dong |  |  | — |  |  | Chưa sync | QC |
| `A01.12` | phan-trang |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.13` | nhap |  |  | — |  | `TC02`, `TC03`, `TC04`, `TC22`, `TC23`, `TC12` | Chưa sync | QC |
| `A01.14` | cong-khai |  |  | — |  | `TC03`, `TC04`, `TC22`, `TC12` | Chưa sync | QC |
| `A01.15` | vo-hieu |  |  | — |  | `TC03`, `TC04`, `TC24` | Chưa sync | QC |

### `A02` Trang 1a: Nhân bản quy trình

Frame: chưa có (tool đoán:ADM-QT-010000, ADM-QT-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | ten-quy-trinh-moi |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | loai-quy-trinh |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | huy-xac-nhan |  |  | — |  |  | Chưa sync | QC |

### `A03` Trang 1b: Xóa quy trình

Frame: chưa có (tool đoán:ADM-QT-010000, ADM-QT-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A03.02` | noi-dung |  |  | — |  |  | Chưa sync | QC |
| `A03.03` | huy-xoa |  |  | — |  |  | Chưa sync | QC |

### `A04` Trang 2: Chi tiết loại quy trình

Frame: chưa có (tool đoán:ADM-QT-010000, ADM-QT-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | quay-lai |  |  | — |  |  | Chưa sync | QC |
| `A04.02` | danh-sach-package |  |  | — |  |  | Chưa sync | QC |
| `A04.03` | them-moi-package |  |  | — |  |  | Chưa sync | QC |
| `A04.04` | category |  |  | — |  | `TC05`, `TC06` | Chưa sync | QC |
| `A04.05` | action-item |  |  | — |  | `TC05` | Chưa sync | QC |
| `A04.06` | keo-tha |  |  | — |  | `TC07` | Chưa sync | QC |
| `A04.07` | toggle-package |  |  | — |  | `TC07` | Chưa sync | QC |

### `A05` Dropdown Loại task và field cấu hình

Frame: chưa có (tool đoán:ADM-QT-010000, ADM-QT-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | huong-dan |  |  | — |  | `TC09` | Chưa sync | QC |
| `A05.02` | task-tien-trinh |  |  | — |  |  | Chưa sync | QC |
| `A05.03` | task-nhap-lieu |  |  | — |  |  | Chưa sync | QC |
| `A05.04` | kiem-tra |  |  | — |  |  | Chưa sync | QC |
| `A05.05` | danh-gia |  |  | — |  |  | Chưa sync | QC |
| `A05.06` | media |  |  | — |  | `TC09` | Chưa sync | QC |
| `A05.07` | deadline |  |  | — |  |  | Chưa sync | QC |
| `A05.08` | xac-thuc |  |  | — |  |  | Chưa sync | QC |
| `A05.09` | log |  |  | — |  |  | Chưa sync | QC |

### `A06` Sử dụng nguồn trong lớp

Frame: chưa có (tool đoán:ADM-QT-010000, ADM-QT-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | noi-dung-da-them |  |  | — |  |  | Chưa sync | QC |
| `A06.02` | result |  |  | — |  | `TC10` | Chưa sync | QC |
| `A06.03` | tab-trong-lop |  |  | — |  |  | Chưa sync | QC |
| `A06.04` | quy-trinh-cua-phu-trach-lop |  |  | — |  |  | Chưa sync | QC |

### `A07` Toast phản hồi CRUD

Frame: chưa có (tool đoán:ADM-QT-010000, ADM-QT-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | thanh-cong |  |  | — |  | `TC11` | Chưa sync | QC |
| `A07.02` | thong-bao |  |  | — |  | `TC11` | Chưa sync | QC |
| `A07.03` | canh-bao |  |  | — |  | `TC11` | Chưa sync | QC |
| `A07.04` | co-loi-xay-ra |  |  | — |  |  | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Danh sách | Hiển thị đúng cột; mặc định sắp `Ngày cập nhật` giảm dần; 50 dòng/trang; tìm theo tên không phân biệt hoa thường, hỗ trợ không dấu; bộ lọc chọn nhiều (OR trong bộ lọc, AND giữa bộ lọc); mở đúng quy trình đã chọn. |
| `REQ02` | Trạng thái quy trình (giống Khóa học) | Nháp → Công khai; Công khai ↔ Vô hiệu; không cho Nháp → Vô hiệu; không quay về Nháp. Dropdown chỉ hiện lựa chọn hợp lệ: Nháp → `Công khai`, Công khai → `Vô hiệu`, Vô hiệu → `Công khai`. Chuyển ngay, không popup. |
| `REQ03` | Cấu trúc và khóa định nghĩa | Package → Category → Action Item. Admin quản lý nội dung khi còn Nháp. Đã Công khai thì khóa mọi thêm/sửa/xóa, kéo thả, cấu hình task/file và toggle Package; chuyển Vô hiệu không mở khóa. Toggle Enable/Disable là cấu hình Package riêng với trạng thái quy trình. |
| `REQ04` | Loại task | Đúng 9 loại và field cấu hình trong bảng UI; mọi field của loại đang chọn bắt buộc, kiểm tra định dạng/dung lượng file tương ứng và tối đa 500 ký tự ở field có `/500`. |
| `REQ05` | Sử dụng nguồn | Chỉ quy trình Công khai mới được thêm vào lớp, đúng loại của tab Tiêu chuẩn lớp - giáo viên/CSKH/Quy trình lớp. Kiểm tra cả lúc tải popup và lưu lựa chọn. Định nghĩa đã Công khai không sửa/xóa được. Quy trình chuyển Vô hiệu vẫn hiện nội dung/Result đã thêm nhưng chỉ xem; Công khai lại thì áp dụng quyền cập nhật theo [requirement Chi tiết lớp](../management_requirement/class_management/class_detail_processes_requirements.md). |
| `REQ06` | Phản hồi | Thay đổi có Toast theo kết quả xử lý; không báo thành công trước khi lưu. |
| `REQ07` | ComGao, không chia trung tâm | ICS dùng chung bảng quy trình với ComGao; không sao chép thành bảng/bản ghi riêng cho ICS. Quy trình không gắn trung tâm: tạo mới không chọn Trung tâm, danh sách không có bộ lọc Trung tâm, lớp và Phụ trách lớp ở mọi trung tâm đều dùng được quy trình Công khai. |
| `REQ08` | Tạo mới | Admin thêm quy trình Nháp bằng dòng Nhập quy trình mới và `+`; Tên, Mô tả, Loại quy trình bắt buộc. Loại gồm Lớp - Giáo viên/Lớp học/Học viên/Giáo viên/CSKH (Support)/Ngày/Tuần/Tháng/Ca trực/Khác. Tên/Mô tả không giới hạn ký tự, cho phép trùng tên. Class Handler không được tạo. |
| `REQ09` | Nhân bản | Admin nhân bản quy trình ở mọi trạng thái thành quy trình Nháp mới; Tên mặc định `<Tên gốc> (copy)`, Loại mặc định theo gốc, đều sửa được. Sao chép Mô tả, Package (gồm Enable/Disable), Category, Action Item, Loại task, cấu hình, file/URL; không sao chép trạng thái, Người tạo, Result và nơi đã sử dụng. Bản sao độc lập với bản gốc; tạo toàn vẹn. Hậu tố luôn là ` (copy)`, không cắt tên, cho phép trùng tên (nhân bản nhiều lần tạo nhiều bản cùng tên). |
| `REQ10` | Quyền sửa theo trạng thái | `Nháp` sửa toàn bộ. `Công khai` / `Vô hiệu` chỉ sửa Tên loại quy trình và Mô tả; Loại quy trình và toàn bộ nội dung bên trong chỉ đọc. Muốn đổi nội dung thì nhân bản. |
| `REQ11` | Xóa quy trình | Chỉ quy trình `Nháp` được xóa, có popup xác nhận; xóa mềm quy trình và toàn bộ nội dung bên trong; quy trình đã xóa không hiển thị/tìm/lọc/mở được. `Công khai` / `Vô hiệu` không được xóa (nút mờ + tooltip, backend từ chối). |
| `REQ12` | Quyền Admin | Admin được toàn quyền chỉnh sửa, đổi trạng thái, xóa và nhân bản mọi quy trình, kể cả quy trình do Admin khác tạo; giới hạn duy nhất là rule trạng thái (REQ02, REQ10, REQ11). Người tạo không đổi khi Admin khác chỉnh sửa. |
| `EX01` | Ngoại lệ | Nháp → Vô hiệu, Công khai/Vô hiệu → Nháp hoặc vượt quyền → từ chối, giữ trạng thái cũ; kiểm tra cả request trực tiếp. |
| `EX02` | Ngoại lệ | File sai định dạng hoặc vượt giới hạn theo loại → không nhận file, nêu rõ lý do. |
| `EX03` | Ngoại lệ | Lưu lỗi → không giữ thay đổi chưa lưu như kết quả thành công; phản hồi lỗi để thử lại. |
| `EX04` | Ngoại lệ | Sửa bất kỳ field nào ngoài Tên/Mô tả hoặc nội dung bên trong của quy trình `Công khai` / `Vô hiệu` (kể cả gửi từ form Nháp cũ hoặc request trực tiếp) → từ chối, giữ nguyên dữ liệu. |
| `EX05` | Ngoại lệ | Thêm nguồn Nháp/Vô hiệu vào lớp hoặc cập nhật Result của quy trình Vô hiệu → từ chối; nội dung/Result cũ vẫn hiển thị. |
| `EX06` | Ngoại lệ | Thiếu field bắt buộc hoặc field có `/500` vượt 500 ký tự → không lưu, chỉ rõ field lỗi. |
| `EX07` | Ngoại lệ | Support/Assistant Teacher hoặc người không có quyền gửi thao tác define/nhân bản → từ chối, không thay dữ liệu. |
| `EX09` | Ngoại lệ | Xóa quy trình `Công khai` / `Vô hiệu` (gọi API trực tiếp, hoặc vừa được chuyển trạng thái trước lúc xóa), quy trình không tồn tại hoặc người không có quyền → backend từ chối, Toast lỗi với nội dung backend trả về (VD `Chỉ xóa được quy trình ở trạng thái Nháp.`), dữ liệu giữ nguyên. |
| `EX08` | Ngoại lệ | Nhân bản lỗi giữa chừng hoặc quy trình gốc không còn tồn tại → không tạo quy trình nào, Toast `Có Lỗi Xảy Ra`. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Xem danh sách theo role | High | Có | Flow 1 / REQ01 / REQ07 / EX07 | `A01` | `A01.01`, `A01.03`, `A01.12` |
| `TC02` | Case 2: Tạo quy trình và field bắt buộc | High | Có | Flow 5 / REQ07 / REQ08 / EX06 | `A01` | `A01.07`, `A01.13` |
| `TC03` | Case 3: Chuyển trạng thái và menu trạng thái | High | Có | Flow 2 / REQ02 | `A01` | `A01.13`, `A01.14`, `A01.15` |
| `TC04` | Case 4: Chặn Nháp → Vô hiệu và quay về Nháp | High |  | EX01 / REQ02 | `A01` | `A01.13`, `A01.14`, `A01.15` |
| `TC17` | Case 17: Chỉ sửa Tên và Mô tả khi Công khai / Vô hiệu | High |  | REQ03 / REQ10 / EX04 | `A01` | `A01.05` |
| `TC22` | Case 22: Tìm kiếm không dấu, lọc nhiều giá trị, sắp xếp, phân trang | Medium |  | Flow 1 / REQ01 | `A01` | `A01.01`, `A01.13`, `A01.14` |
| `TC23` | Case 23: Class Handler không được tạo quy trình | High |  | REQ08 / EX07 | `A01` | `A01.01`, `A01.07`, `A01.13` |
| `TC24` | Case 24: Admin chỉnh sửa quy trình của Admin khác | High |  | REQ12 / Ràng buộc | `A01` | `A01.15` |
| `TC12` | Case 12: Tạo quy trình loại Phụ trách lớp | High |  | Flow 5 / REQ08 | `A01` | `A01.13`, `A01.14` |
| `TC13` | Case 13: Nhân bản quy trình Công khai | High | Có | Flow 6 / REQ09 | `A02` |  |
| `TC14` | Case 14: Chỉnh bản sao không ảnh hưởng bản gốc | High |  | REQ09 / REQ03 | `A02` |  |
| `TC15` | Case 15: Validate và lỗi khi nhân bản | Medium |  | REQ09 / EX06 / EX08 | `A02` |  |
| `TC21` | Case 21: Nhân bản nhiều lần, tên dài, trùng tên | Medium |  | REQ09 / REQ08 | `A02` |  |
| `TC16` | Case 16: Chặn nhân bản vượt quyền | High |  | EX07 / Ràng buộc | `A02` |  |
| `TC18` | Case 18: Xóa quy trình Nháp | High | Có | Flow 7 / REQ11 | `A03` |  |
| `TC19` | Case 19: Không xóa được Công khai / Vô hiệu | High |  | REQ11 / EX09 | `A03` |  |
| `TC20` | Case 20: Hủy, lỗi và vượt quyền | Medium |  | REQ11 / EX03 / EX07 / EX09 | `A03` |  |
| `TC05` | Case 5: Chọn đúng Package và Category | High |  | Flow 3 / REQ03 | `A04` | `A04.04`, `A04.05` |
| `TC06` | Case 6: Quản lý cấu trúc khi Nháp | High | Có | Flow 3 / REQ03 | `A04` | `A04.04` |
| `TC07` | Case 7: Khóa định nghĩa sau Công khai | High |  | REQ03 / EX04 | `A04` | `A04.06`, `A04.07` |
| `TC08` | Case 8: Chọn Loại task | High |  | Flow 4 / REQ04 | `A05` |  |
| `TC09` | Case 9: Tài liệu và Media | High |  | Flow 4 / REQ04 / EX02 | `A05` | `A05.01`, `A05.06` |
| `TC10` | Case 10: Chỉ thêm quy trình Công khai | High |  | REQ05 / EX05 | `A06` | `A06.02` |
| `TC11` | Case 11: Phản hồi thao tác | High |  | REQ06 / EX03 | `A07` | `A07.01`, `A07.02`, `A07.03` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (45): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A01.08`, `A01.09`, `A01.10`, `A01.11`, `A01.12`, `A01.13`, `A01.14`, `A01.15`, `A02.01`, `A02.02`, `A02.03`, `A03.01`, `A03.02`, `A03.03`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`, `A04.06`, `A04.07`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A05.07`, `A05.08`, `A05.09`, `A06.01`, `A06.02`, `A06.03`, `A06.04`, `A07.01`, `A07.02`, `A07.03`, `A07.04`
- Frame Figma chưa có requirement (1): `ADM-QT-010001`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
