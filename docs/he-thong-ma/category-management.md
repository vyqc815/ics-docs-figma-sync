# Quản lý danh sách danh mục

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-DM-010000` | Quản lý danh mục | `/quan-ly-danh-muc` | `CD-DM-010000-DK` | QC |

Requirement: `curriculum_management_requirement/category_management/category_management.md` — Quản lý danh sách danh mục (tiền tố `CM-CM2`).

## 2. Luồng

- `FLOW01` Thêm nhanh danh mục — 
- `FLOW02` Sửa danh mục — 
- `FLOW03` Kích hoạt công khai danh mục — 
- `FLOW04` Đổi trạng thái Công Khai ↔ Vô hiệu — 
- `FLOW05` Xóa danh mục — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-DM-010010` | Popup danh mục & cấp độ | Popup | CD-DM-010000 | CD-DM-010000 | — | `/quan-ly-danh-muc?popup=CD-DM-010010` | Figma | cao |
| `CD-DM-010020` | Mindset | Trạng thái | CD-DM-010010 | CD-DM-010000 | — | `/quan-ly-danh-muc?state=CD-DM-010020` | Figma | trung bình |
| `CD-DM-010030` | Tiêu chuẩn giáo trình | Trạng thái | CD-DM-010010 | CD-DM-010000 | — | `/quan-ly-danh-muc?state=CD-DM-010030` | Figma | trung bình |
| `CD-DM-010040` | Hướng dẫn giảng dạy | Trạng thái | CD-DM-010010 | CD-DM-010000 | — | `/quan-ly-danh-muc?state=CD-DM-010040` | Figma | trung bình |
| `CD-DM-010057` | Thành công | Trạng thái | CD-DM-010010 | CD-DM-010000 | — | `/quan-ly-danh-muc?state=CD-DM-010057` | Figma | trung bình |
| `CD-DM-010060` | Popup kích hoạt công khai | Popup | CD-DM-010000 | CD-DM-010000 | — | `/quan-ly-danh-muc?popup=CD-DM-010060` | Figma | cao |
| `CD-DM-010062` | Điền sai | Trạng thái | CD-DM-010060 | CD-DM-010000 | — | `/quan-ly-danh-muc?state=CD-DM-010062` | Figma | trung bình |

## 4. Khu vực và item

### `A01` Trang danh sách danh mục

Frame: `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040` (tool đoán:CD-DM-010020, CD-DM-010030, CD-DM-010040) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | id |  | `1758:4996` 01 | — | governed-by `REQ01` |  | Khớp | QC |
| `A01.02` | ten-danh-muc |  |  | — |  | `TC06` | Chưa khớp tự động | QC |
| `A01.03` | mo-ta-danh-muc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.04` | cau-hinh-mindset-tieu-chuan-giao-trinh-h |  |  | — |  | `TC21` | Chưa khớp tự động | QC |
| `A01.05` | so-khoa-hoc |  |  | — |  | `TC01` | Chưa khớp tự động | QC |
| `A01.06` | trang-thai |  |  | — | governed-by `REQ02` | `TC01`, `TC06`, `TC07`, `TC08`, `TC09`, `TC11`, `TC13`, `TC14`, `TC17`, `TC18`, `TC25`, `TC27` | Chưa khớp tự động | QC |

### `A02` Xóa danh mục

Frame: `CD-DM-010000` (tool đoán:CD-DM-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | popup-xac-nhan-xoa |  |  | — |  | `TC20` | Chưa khớp tự động | QC |
| `A02.02` | toast-loi-khong-duoc-xoa |  |  | — |  |  | Chưa khớp tự động | QC |

### `A03` Popup Kích hoạt công khai danh mục

Frame: `CD-DM-010057`, `CD-DM-010060` (tool đoán:CD-DM-010057, CD-DM-010060) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | danh-muc |  |  | — |  | `TC01`, `TC02`, `TC03`, `TC04`, `TC06`, `TC07`, `TC08`, `TC09`, `TC10`, `TC11`, `TC12`, `TC15`, `TC16`, `TC17`, `TC18`, `TC19`, `TC20`, `TC21`, `TC22`, `TC23`, `TC27` | Chưa sync | QC |
| `A03.02` | trang-thai-hien-tai |  |  | — |  |  | Chưa sync | QC |
| `A03.03` | id-danh-muc |  |  | — |  |  | Chưa sync | QC |
| `A03.04` | o-nhap-id |  |  | — |  | `TC06` | Chưa sync | QC |
| `A03.05` | nut-lam-moi-bieu-tuong-xoay |  |  | — |  |  | Chưa sync | QC |
| `A03.06` | bieu-tuong-ket-qua-kiem-tra |  |  | — |  |  | Chưa sync | QC |
| `A03.07` | thong-bao-trang-thai |  |  | — |  |  | Chưa sync | QC |
| `A03.08` | ghi-chu-canh-bao |  |  | — |  |  | Chưa sync | QC |
| `A03.09` | nut-cong-khai-danh-muc |  |  | — |  | `TC06`, `TC10` | Chưa sync | QC |
| `A03.10` | nut-huy-bieu-tuong-x |  |  | — |  |  | Chưa sync | QC |

### `F01` (ngoài Body)

Frame: `CD-DM-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-cd | `MENU - CD`  | `4915:257163` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | account | `ACCOUNT` Size=Default | `2223:86161` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | component-2 | `Switch Center`  | `4273:160833` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `3065:53784` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | dd-molecule-trigger | `DD/Molecule/Trigger` Size=XS, State=Default | `3065:53785` DD/Molecule/Trigger | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | add-new-bar-them-noi-dung-khoa-hoc-moi | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `3065:53528` Add New Bar · Thêm nội dung khoá học mới | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Row

Frame: `CD-DM-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | id-badge | `Atom/ID Badge` Type=7-digit, Size=26H | `3065:53304` ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | atom-number-badge | `Atom/Number Badge` Type=Kỳ, Size=Medium, State=Active | `3065:53310` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | atom-status | `Atom/Status` Size=M | `3065:53314` Atom/Status | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | arrow-detail | `ARROW DETAIL`  | `3065:53318` ARROW DETAIL | — |  |  | Chỉ có trên Figma | Figma |
| `F02.05` | dd-organism-menu-panel | `DD/Organism/Menu Panel` Type=Action | `3065:53331` DD/Organism/Menu Panel | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | ID danh mục | Tự động sinh khi tạo mới: đúng 2 chữ số trong dải `01`–`99` (giữ số 0 đứng đầu, ví dụ `05`; không cấp `00` vì `00` trong ID khoá học nghĩa là chưa chọn), duy nhất toàn hệ thống, tính cả danh mục đã xóa mềm; hệ thống lấy mã nhỏ nhất chưa dùng. Hết mã trong dải thì từ chối tạo mới và báo lỗi `Đã hết ID danh mục khả dụng (01–99).`. ID danh mục là đoạn `AA` trong ID khoá học `CCAALLMMM` (xem `course_management.md` REQ06); vì chỉ danh mục `Công Khai` mới được gán cho khoá học nên đoạn `AA` luôn là ID đã khoá, người dùng không nhập tay lúc thêm nhanh. Có thể chỉnh sửa thủ công trong lúc `Nháp`, kể cả ngay trong popup Kích hoạt công khai danh mục trước khi xác nhận; bị khóa vĩnh viễn (không sửa được) kể từ khi rời khỏi `Nháp`. |
| `REQ02` | Rule chuyển trạng thái | `Nháp → Công Khai` (một chiều, bắt buộc qua popup Kích hoạt công khai); `Công Khai ↔ Vô hiệu` (hai chiều); không cho chuyển `Nháp → Vô hiệu` trực tiếp và không cho chuyển về `Nháp` từ hai trạng thái còn lại. UI chỉ hiển thị lựa chọn hợp lệ: đang `Nháp` chỉ hiện `Công Khai`, đang `Công Khai` chỉ hiện `Vô hiệu`, đang `Vô hiệu` chỉ hiện `Công Khai`; nếu có request gọi trực tiếp với transition không hợp lệ, backend từ chối và trả thông báo lỗi (xem EX03). |
| `REQ03` | Thông tin cơ bản | Tên danh mục bắt buộc, không giới hạn độ dài, được phép trùng với danh mục khác; hệ thống tự cắt khoảng trắng đầu/cuối trước khi lưu. Tên và Mô tả sửa được ở mọi trạng thái (`Nháp`, `Công Khai`, `Vô hiệu`). Mô tả không bắt buộc, có thể để trống lúc tạo và bổ sung sau. Số khóa học do hệ thống tự tính, không nhập tay. |
| `REQ04` | Popup Kích hoạt công khai danh mục | Khi chuyển từ `Nháp` sang `Công Khai`, hệ thống bắt buộc mở popup xác nhận, cho phép CD giữ nguyên hoặc chỉnh sửa lần cuối ID (nhập tay hoặc làm mới tự động) trước khi khóa. Nút xác nhận chỉ bật khi ID trong ô đang hợp lệ và chưa trùng; backend luôn kiểm tra lại ngay trước khi lưu và chuyển trạng thái trong cùng một giao dịch. |
| `REQ05` | Xóa danh mục | **Chỉ danh mục `Nháp` được xóa** (xóa mềm), và chỉ khi **chưa có** khóa học nào (chưa bị xóa mềm). Danh mục `Công Khai` / `Vô hiệu` không được xóa (muốn ngừng dùng thì để / chuyển `Vô hiệu`); khóa học đã thuộc danh mục giữ nguyên. Nút `Xóa` mờ + tooltip khi không ở `Nháp`; backend luôn kiểm tra lại trạng thái và tham chiếu ngay tại thời điểm xóa, FE hiển thị Toast lỗi do backend trả về (EX08). Quy tắc chung với Khoá học, Học kỳ, Cấp độ: chỉ `Nháp` được xóa. |
| `REQ06` | Ý nghĩa trạng thái Vô hiệu | Danh mục `Vô hiệu` không hiển thị để chọn mới ở field Danh mục (màn Quản lý khoá học, popup Công khai khoá học); khóa học đã gắn danh mục này vẫn hiển thị đúng thông tin, không bị gỡ hay báo lỗi. |
| `REQ07` | Danh mục được gắn vào khóa học | Chỉ danh mục `Công Khai` mới được chọn gắn vào khóa học từ field Danh mục của feature Quản lý khoá học. Rule này áp dụng giống với Cấp độ. (Khóa học tạo nhanh trong tab Tổng quan của popup Chi tiết danh mục thì thuộc danh mục đó ở mọi trạng thái, xem `detail_category.md`.) |
| `REQ08` | Quyền sửa theo trạng thái | `Nháp`: sửa được Tên, Mô tả, ID, cấu hình 3 tab nội dung. `Công Khai` / `Vô hiệu`: **chỉ sửa Tên và Mô tả**; ID và toàn bộ dữ liệu chi tiết bên trong (cấu hình Mindset, Tiêu chuẩn giáo trình, Hướng dẫn giảng dạy) chỉ đọc; backend từ chối request sửa (EX04, EX11). Danh mục không thể quay về `Nháp`. Quy tắc chung với Khoá học, Học kỳ, Cấp độ (xem `course_management.md` REQ10). |
| `EX01` | Ngoại lệ | Tên danh mục mới bị bỏ trống hoặc chỉ chứa khoảng trắng → chặn tạo mới, dữ liệu không thay đổi, disable nút "+". Nếu Enter thì hiện thông báo "Tên danh mục không được bỏ trống". |
| `EX02` | Ngoại lệ | Khi sửa lúc `Nháp`, ID sai định dạng (không đúng 2 chữ số) hoặc trùng (kể cả trùng ID của danh mục đã xóa mềm) → hệ thống từ chối lưu, hiển thị lỗi tương ứng, giữ nguyên ID cũ. |
| `EX03` | Ngoại lệ | Gọi API hoặc thao tác trực tiếp đổi trạng thái không hợp lệ (từ `Công Khai`/`Vô hiệu` về `Nháp`, hoặc từ `Nháp` sang thẳng `Vô hiệu`) → hệ thống từ chối, hiển thị thông báo lỗi (ví dụ: `"Không thể chuyển sang trạng thái này."`), giữ nguyên trạng thái hiện tại. UI chỉ hiển thị lựa chọn hợp lệ: `Nháp` chỉ có `Công Khai`; `Công Khai` chỉ có `Vô hiệu`; `Vô hiệu` chỉ có `Công Khai`. |
| `EX04` | Ngoại lệ | Cố sửa ID khi danh mục có trạng thái khác `Nháp` → hệ thống từ chối, field ID ở trạng thái chỉ đọc/disable. |
| `EX05` | Ngoại lệ | ID hợp lệ tại thời điểm nhập nhưng bị đối tượng khác dùng ngay trước lúc backend lưu (race condition) → backend từ chối tại bước kiểm tra cuối, không lưu, giữ nguyên trạng thái và hiển thị lỗi. |
| `EX06` | Ngoại lệ | Trong popup Kích hoạt công khai danh mục, ID nhập tay hoặc ID vừa được làm mới sai định dạng (không đúng 2 chữ số) hoặc đã bị trùng → hiển thị lỗi tương ứng ngay trong popup, vô hiệu hóa nút `Công khai danh mục`, giữ danh mục ở `Nháp`. |
| `EX07` | Ngoại lệ | CD bấm `Hủy` hoặc đóng popup Kích hoạt công khai danh mục sau khi đã sửa ID trong ô nhập → không lưu ID vừa sửa, ID của danh mục giữ nguyên như trước khi mở popup, trạng thái vẫn là `Nháp`. |
| `EX08` | Ngoại lệ | Xóa danh mục `Công Khai` / `Vô hiệu` (gọi API trực tiếp) → backend từ chối, trả lỗi `Chỉ xóa được danh mục ở trạng thái Nháp.`. Xóa danh mục `Nháp` đang có khóa học (qua UI, gọi API trực tiếp, hoặc khóa học được tạo ngay trước lúc backend xóa) → backend từ chối, trả lỗi `Danh mục đang được sử dụng, không thể xóa.`. FE hiển thị Toast lỗi với nội dung backend trả về, dữ liệu không đổi. |
| `EX09` | Ngoại lệ | Người dùng không có quyền gửi request xóa trực tiếp → từ chối, không thay đổi dữ liệu. |
| `EX10` | Ngoại lệ | Sửa Tên danh mục thành trống hoặc chỉ chứa khoảng trắng (ở bất kỳ trạng thái nào) → từ chối lưu, báo lỗi tại field Tên, giữ nguyên Tên cũ. |
| `EX11` | Ngoại lệ | Sửa cấu hình Mindset / Tiêu chuẩn giáo trình / Hướng dẫn giảng dạy (hoặc bất kỳ field nào ngoài Tên, Mô tả) khi danh mục `Công Khai` / `Vô hiệu` (qua UI hoặc gọi API trực tiếp) → UI chỉ đọc; backend từ chối, trả lỗi `Danh mục không ở trạng thái Nháp, chỉ được sửa Tên và Mô tả.`, dữ liệu không đổi. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Thêm nhanh danh mục bằng nút "+" | High | Có | Flow 1 | — | `A01.05`, `A01.06`, `A03.01` |
| `TC02` | Case 2: Thêm nhanh danh mục bằng phím Enter | High |  | Flow 1 | — | `A03.01` |
| `TC03` | Case 3: Chặn thêm khi tên trống | High |  | EX01 | — | `A03.01` |
| `TC04` | Case 4: Sửa danh mục khi đang Nháp | High | Có | Flow 2 / REQ01, REQ03 | — | `A03.01` |
| `TC05` | Case 5: Chặn sửa khi ID không hợp lệ | Medium |  | EX02 | — |  |
| `TC06` | Case 6: Mở popup Kích hoạt công khai danh mục | High |  | Flow 3 / REQ04 | — | `A01.02`, `A01.06`, `A03.01`, `A03.04`, `A03.09` |
| `TC07` | Case 7: Công khai danh mục giữ nguyên ID có sẵn | High | Có | Flow 3 / REQ04 | — | `A01.06`, `A03.01` |
| `TC08` | Case 8: Công khai danh mục bằng ID làm mới | High |  | Flow 3 / REQ04 | — | `A01.06`, `A03.01` |
| `TC09` | Case 9: Công khai danh mục bằng ID nhập tay trong popup | High |  | Flow 3 / REQ04 | — | `A01.06`, `A03.01` |
| `TC10` | Case 10: Chặn công khai khi ID trong popup không hợp lệ | High |  | EX06 | — | `A03.01`, `A03.09` |
| `TC11` | Case 11: Hủy popup Kích hoạt công khai danh mục | High |  | EX07 | — | `A01.06`, `A03.01` |
| `TC12` | Case 12: Khóa ID sau khi rời Nháp | High |  | EX04 / REQ01 | — | `A03.01` |
| `TC13` | Case 13: Chuyển đổi Công Khai ↔ Vô hiệu | High |  | Flow 4 / REQ02 | — | `A01.06` |
| `TC14` | Case 14: Chặn chuyển về Nháp | High |  | EX03 / REQ02 | — | `A01.06` |
| `TC15` | Case 15: Kiểm tra quyền truy cập trực tiếp | High |  | Ràng buộc quyền | — | `A03.01` |
| `TC16` | Case 16: Xóa danh mục chưa được sử dụng | High | Có | Flow 5 / REQ05 | — | `A03.01` |
| `TC17` | Case 17: Chặn xóa danh mục Công Khai / Vô hiệu | High | Có | Flow 5 / REQ05 / EX08 | — | `A01.06`, `A03.01` |
| `TC18` | Case 18: Menu đổi trạng thái theo từng trạng thái | High |  | REQ02 | — | `A01.06`, `A03.01` |
| `TC19` | Case 19: Chặn xóa danh mục Nháp đang có khóa học | High |  | EX08 / REQ05 | — | `A03.01` |
| `TC20` | Case 20: Khóa học đã xóa mềm không tính là đang sử dụng | Medium |  | REQ05 | — | `A02.01`, `A03.01` |
| `TC21` | Case 21: Sửa Tên, Mô tả khi Công Khai / Vô hiệu | High |  | Flow 2 / REQ03 | — | `A01.04`, `A03.01` |
| `TC22` | Case 22: Tên trùng và có khoảng trắng đầu/cuối | Medium |  | Flow 1, Flow 2 / REQ03 | — | `A03.01` |
| `TC23` | Case 23: Sửa Tên thành trống ở trạng thái Công Khai | Medium |  | EX10 | — | `A03.01` |
| `TC24` | Case 24: ID trùng ID danh mục đã xóa mềm | Medium |  | EX02 / REQ01 | — |  |
| `TC25` | Case 25: Chặn chuyển Nháp → Vô hiệu | High |  | EX03 / REQ02 | — | `A01.06` |
| `TC26` | Case 26: Tìm kiếm không phân biệt hoa thường | Medium |  | UI | — |  |
| `TC27` | Case 27: Cấu hình nội dung chỉ đọc khi Công Khai / Vô hiệu | High |  | REQ08 / EX11 | — | `A01.06`, `A03.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (7): `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A02.01`, `A02.02`
- Chưa sync (10): `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A03.08`, `A03.09`, `A03.10`
- Frame Figma chưa có requirement (7): `CD-DM-010010`, `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040`, `CD-DM-010057`, `CD-DM-010060`, `CD-DM-010062`
- Thiếu prototype link đi vào (7): `CD-DM-010010`, `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040`, `CD-DM-010057`, `CD-DM-010060`, `CD-DM-010062`
- Phân loại cần design duyệt (5): `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040`, `CD-DM-010057`, `CD-DM-010062`
- Testcase không trỏ REQ (2): `TC15`, `TC26`
- REQ/EX chưa có testcase (4): `REQ06`, `REQ07`, `EX05`, `EX09`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
