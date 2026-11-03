# Quản lý danh mục

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-DM-010000` | Quản lý danh mục | `/quan-ly-danh-muc` | `CD-DM-010000-DK` | QC |

Requirement: `curriculum_management_requirement/category_management/category_management_requirements.md` — Quản lý danh mục (tiền tố `CM-CM3`).

## 2. Luồng

- `FLOW01` Quản lý danh sách và thêm danh mục — `REQ01`
- `FLOW02` Xem chi tiết và quản lý khóa học thuộc danh mục — `REQ02`
- `FLOW03` Cấu hình nội dung cho danh mục — `REQ03`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-DM-010010` | Popup danh mục & cấp độ | Popup | CD-DM-010000 | CD-DM-010000 | — | `/quan-ly-danh-muc?popup=CD-DM-010010` | Figma | cao |
| `CD-DM-010020` | Mindset | Trạng thái | CD-DM-010010 | CD-DM-010000 | — | `/quan-ly-danh-muc?state=CD-DM-010020` | Figma | trung bình |
| `CD-DM-010030` | Tiêu chuẩn giáo trình | Trạng thái | CD-DM-010010 | CD-DM-010000 | — | `/quan-ly-danh-muc?state=CD-DM-010030` | Figma | trung bình |
| `CD-DM-010040` | Hướng dẫn giảng dạy | Trạng thái | CD-DM-010010 | CD-DM-010000 | — | `/quan-ly-danh-muc?state=CD-DM-010040` | Figma | trung bình |
| `CD-DM-010057` | Thành công | Trạng thái | CD-DM-010010 | CD-DM-010000 | — | `/quan-ly-danh-muc?state=CD-DM-010057` | Figma | cao |
| `CD-DM-010060` | Popup kích hoạt công khai | Popup | CD-DM-010000 | CD-DM-010000 | — | `/quan-ly-danh-muc?popup=CD-DM-010060` | Figma | cao |
| `CD-DM-010062` | Điền sai | Trạng thái | CD-DM-010060 | CD-DM-010000 | — | `/quan-ly-danh-muc?state=CD-DM-010062` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Danh sách danh mục

Frame: `CD-DM-010000` (tool đoán:CD-DM-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Form thêm danh mục

Frame: `CD-DM-010000` (tool đoán:CD-DM-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | id-danh-muc-tam-thoi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.02` | subject-id | `Atom/Status` Size=M | `3065:53348` Atom/Status | — |  | `TC03`, `TC04`, `TC05`, `TC18`, `TC19`, `TC24` | Khớp | QC |
| `A02.03` | ten-danh-muc |  | `3065:53290` tên danh mục | — |  | `TC01`, `TC02`, `TC03` | Khớp | QC |
| `A02.04` | mo-ta-danh-muc |  | `3065:53292` Mô tả danh mục | — |  | `TC01`, `TC02` | Khớp | QC |
| `A02.05` | so-khoa-hoc |  | `3065:53296` Số khoá học | — |  | `TC01`, `TC02`, `TC08` | Khớp | QC |
| `A02.06` | trang-thai | `Atom/Status` Size=M; `DD/Molecule/Trigger` Size=XS, State=Default | `3065:53785` DD/Molecule/Trigger; `3065:53348` Atom/Status | — |  | `TC02`, `TC03`, `TC04`, `TC05`, `TC08`, `TC10`, `TC11`, `TC14`, `TC18`, `TC21`, `TC22`, `TC23`, `TC24`, `TC26` | Khớp | QC |
| `A02.07` | id-badge | `Atom/ID Badge` Type=7-digit, Size=26H | `3065:53304` ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `A02.08` | atom-number-badge | `Atom/Number Badge` Type=Kỳ, Size=Medium, State=Active | `3065:53310` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `A02.09` | atom-status | `Atom/Status` Size=M | `3065:53314` Atom/Status | — |  |  | Chỉ có trên Figma | Figma |
| `A02.10` | arrow-detail | `ARROW DETAIL`  | `3065:53318` ARROW DETAIL | — |  |  | Chỉ có trên Figma | Figma |
| `A02.11` | dd-organism-menu-panel | `DD/Organism/Menu Panel` Type=Action | `3065:53331` DD/Organism/Menu Panel | — |  |  | Chỉ có trên Figma | Figma |

### `A03` Popup Kích hoạt công khai danh mục

Frame: `CD-DM-010060` (tool đoán:CD-DM-010060) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | thong-tin-danh-muc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.02` | chon-cach-lay-subject-id |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.03` | tu-dong-tao |  | `6025:210789` Sau khi xác nhận, danh mục sẽ chuyển sang trạng thái Công khai và không được chỉnh sửa ID này | — |  | `TC04`, `TC10`, `TC24` | Khớp | QC |
| `A03.04` | loi-tu-dong-tao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.05` | nhap-thu-cong |  |  | — |  | `TC05`, `TC10` | Chưa khớp tự động | QC |
| `A03.06` | subject-id-hop-le |  |  | — |  | `TC05` | Chưa khớp tự động | QC |
| `A03.07` | subject-id-bi-trung |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.08` | subject-id-sai-dinh-dang |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.09` | huong-dan-nhap |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.10` | xac-nhan |  | `6025:210789` Sau khi xác nhận, danh mục sẽ chuyển sang trạng thái Công khai và không được chỉnh sửa ID này; `1854:20955` CD-DM-010060 — Quản lý danh mục / Popup kích hoạt công khai | — |  | `TC03`, `TC04`, `TC05`, `TC10`, `TC11`, `TC18`, `TC19`, `TC20`, `TC22`, `TC23`, `TC24` | Khớp | QC |
| `A03.11` | huy-dong | `Atom/Button` Type=Secondary, Size=Medium | `I6025:210790;2514:153361` Atom/Button | — |  |  | Khớp | QC |

### `A04` Popup Chi tiết danh mục

Frame: `CD-DM-010000` (tool đoán:CD-DM-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Tab Tổng quan

Frame: `CD-DM-010000` (tool đoán:CD-DM-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | danh-sach-khoa-hoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.02` | tim-kiem-khoa-hoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.03` | them-khoa-hoc |  |  | — |  | `TC08` | Chưa khớp tự động | QC |
| `A05.04` | id-khoa-hoc-tam-thoi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.05` | id-cong-khai-cua-khoa-hoc | `Atom/Status` Size=M | `3065:53348` Atom/Status | — |  |  | Khớp | QC |
| `A05.06` | ten-khoa-hoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.07` | mo-ta-khoa-hoc |  | `3065:53306` Nhập mô tả khoá học | — |  | `TC08` | Khớp | QC |
| `A05.08` | so-ky |  |  | — |  | `TC09` | Chưa khớp tự động | QC |
| `A05.09` | cap-do | `Card Menu v2 (Test)` Type=Chính, State=Select | `I4915:257163;4901:217035;2245:87774` Label | — |  | `TC08` | Khớp | QC |
| `A05.10` | trang-thai | `Atom/Status` Size=M; `DD/Molecule/Trigger` Size=XS, State=Default | `3065:53785` DD/Molecule/Trigger; `3065:53348` Atom/Status | — |  | `TC02`, `TC03`, `TC04`, `TC05`, `TC08`, `TC10`, `TC11`, `TC14`, `TC18`, `TC21`, `TC22`, `TC23`, `TC24`, `TC26` | Khớp | QC |

### `A06` Popup Kích hoạt công khai khóa học

Frame: `CD-DM-010000` (tool đoán:CD-DM-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A07` Tab Mindset, Tiêu chuẩn giáo trình và Hướng dẫn giảng dạy

Frame: `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040` (tool đoán:CD-DM-010020, CD-DM-010030, CD-DM-010040) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | tim-kiem | `Atom/Input` State=Search, Kiểu=Chuẩn | `I2702:46381;1739:32505` Tìm nội dung... | — |  | `TC25` | Khớp một phần | QC |
| `A07.02` | package-category |  |  | — |  | `TC12`, `TC17` | Chưa khớp tự động | QC |
| `A07.03` | action-item |  |  | — |  | `TC12`, `TC13`, `TC17` | Chưa khớp tự động | QC |
| `A07.04` | xem-truoc-noi-dung |  | `1758:5155` Section - Cột phải: Xem trước nội dung chi tiết | — |  |  | Khớp một phần | QC |
| `A07.05` | luu-ap-dung |  |  | — |  | `TC13`, `TC17` | Chưa khớp tự động | QC |

### `A08` Popup Áp dụng thành công

Frame: `CD-DM-010057` (tool đoán:CD-DM-010057) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `F01` (ngoài Body)

Frame: `CD-DM-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-cd | `MENU - CD`  | `4915:257163` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | account | `ACCOUNT` Size=Default | `2223:86161` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | component-2 | `Switch Center`  | `4273:160833` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `3065:53784` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | add-new-bar-them-noi-dung-khoa-hoc-moi | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `3065:53528` Add New Bar · Thêm nội dung khoá học mới | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Quản lý danh sách danh mục | Cho phép xem, tìm kiếm và thêm danh mục; Tên danh mục và Mô tả danh mục là bắt buộc, không giới hạn độ dài nghiệp vụ. Danh mục mới mặc định ở trạng thái `Nháp` và chưa bắt buộc có Subject ID công khai. Cho phép chuyển tự do giữa `Nháp`, `Công khai` và `Vô hiệu hóa`. Khi trạng thái đích là `Công khai`, người dùng lấy Subject ID bằng chế độ tự động tạo ID mới hoặc nhập thủ công nếu chưa có ID; hệ thống kiểm tra định dạng và tính duy nhất toàn hệ thống tại backend trước khi chuyển. Danh mục và khóa học có quan hệ `1:n`. |
| `REQ02` | Quản lý khóa học thuộc danh mục | Popup chi tiết có bốn tab và mặc định mở `Tổng quan`; cho phép tìm kiếm, tạo khóa học trong danh mục, chọn cấp độ từ dữ liệu đã định nghĩa và chuyển tự do giữa ba trạng thái của khóa học. Tên và Mô tả khóa học là bắt buộc, không giới hạn độ dài nghiệp vụ. Khóa học mới mặc định là `Nháp`, chưa bắt buộc có ID công khai. Khi trạng thái đích là `Công khai`, khóa học áp dụng cùng cơ chế tự động tạo/nhập thủ công và kiểm tra ID như danh mục; chuyển sang trạng thái khác không xóa ID đã có. Khóa học và kỳ có quan hệ `1:n`; Số kỳ là số quan hệ kỳ đang liên kết với khóa học. |
| `REQ03` | Cấu hình nội dung danh mục | Tại từng tab `Mindset`, `Tiêu chuẩn giáo trình`, `Hướng dẫn giảng dạy`, người dùng được chọn nhiều package/category rồi chọn nhiều action item trực thuộc để áp dụng cho danh mục; không giới hạn số lượng lựa chọn. Dữ liệu nguồn chỉ được tham chiếu, không bị chỉnh sửa hoặc sao chép; thay đổi tại feature định nghĩa được phản ánh vào nội dung áp dụng. Quyền `Chỉ xem` chỉ được xem trước; quyền `Cập nhật kết quả` được tick chọn và lưu/áp dụng. Lưu/áp dụng và thông báo kết quả là bước kết thúc của requirement này. |
| `EX01` | Ngoại lệ | Subject ID danh mục để trống, sai định dạng hoặc đã tồn tại khi chuyển sang `Công khai` → hiển thị lỗi tương ứng, vô hiệu hóa `Xác nhận` và giữ nguyên trạng thái trước khi thao tác. |
| `EX02` | Ngoại lệ | ID công khai của khóa học để trống, sai định dạng hoặc đã tồn tại khi chuyển sang `Công khai` → hiển thị lỗi tương ứng, vô hiệu hóa `Xác nhận` và giữ nguyên trạng thái trước khi thao tác. |
| `EX03` | Ngoại lệ | Cấp độ được chọn đã bị xóa hoặc không còn khả dụng trước khi lưu khóa học → không lưu cấp độ không hợp lệ; dữ liệu khóa học đã lưu trước đó không thay đổi. |
| `EX04` | Ngoại lệ | Package/category hoặc action item đã bị xóa hay không còn khả dụng tại feature định nghĩa → nội dung tham chiếu tại danh mục phải phản ánh trạng thái mới và không được tiếp tục hiển thị như dữ liệu còn hiệu lực. |
| `EX05` | Ngoại lệ | Tìm kiếm khóa học không có kết quả → hiển thị trạng thái không có dữ liệu; không làm thay đổi dữ liệu. |
| `EX06` | Ngoại lệ | Lưu/áp dụng cấu hình thất bại → không hiển thị `Áp dụng thành công!` và không hiển thị dữ liệu chưa lưu như dữ liệu đã áp dụng. |
| `EX07` | Ngoại lệ | Người dùng không có quyền truy cập hoặc gửi request trực tiếp → từ chối thao tác và không thay đổi dữ liệu. |
| `EX08` | Ngoại lệ | Người dùng chỉ có quyền `Chỉ xem` gửi request tick chọn hoặc lưu/áp dụng package/category/action item → hệ thống từ chối và giữ nguyên cấu hình danh mục. |
| `EX09` | Ngoại lệ | Tự động tạo ID thất bại hoặc hết thời gian chờ → dừng trạng thái đang xử lý, hiển thị notification `Không thể tự động tạo Subject ID. Vui lòng thử lại.` kèm hành động `Thử lại`, không bật `Xác nhận` và giữ nguyên trạng thái đối tượng. |
| `EX10` | Ngoại lệ | ID đã hợp lệ trên UI nhưng bị đối tượng khác sử dụng trước lúc người dùng xác nhận → backend từ chối tại bước kiểm tra cuối, không lưu ID và giữ nguyên trạng thái đối tượng. |
| `EX11` | Ngoại lệ | Người dùng đổi giữa chế độ tự động và nhập thủ công → hủy kết quả kiểm tra của chế độ trước; chỉ kết quả hợp lệ của chế độ đang chọn mới được dùng để bật `Xác nhận`. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Hiển thị danh sách danh mục | High | Có | REQ01 | — | `A02.03`, `A02.04`, `A02.05` |
| `TC02` | Case 2: Thêm danh mục Nháp không có ID | High | Có | Flow 1 / REQ01 | — | `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A05.10` |
| `TC03` | Case 3: Mở popup kích hoạt công khai danh mục | High |  | Flow 1B / REQ01 | — | `A02.02`, `A02.03`, `A02.06`, `A03.10`, `A05.10` |
| `TC04` | Case 4: Công khai danh mục bằng Subject ID tự động tạo | High | Có | Flow 1B / REQ01 | — | `A02.02`, `A02.06`, `A03.03`, `A03.10`, `A05.10` |
| `TC05` | Case 5: Công khai danh mục bằng Subject ID nhập thủ công | High |  | Flow 1B / REQ01 | — | `A02.02`, `A02.06`, `A03.05`, `A03.06`, `A03.10`, `A05.10` |
| `TC06` | Case 6: Mở chi tiết danh mục | High | Có | Flow 2 / REQ02 | — |  |
| `TC07` | Case 7: Tìm kiếm khóa học trong danh mục | Medium |  | Flow 2 / REQ02 | — |  |
| `TC08` | Case 8: Thêm khóa học Nháp không có ID | High | Có | Flow 2 / REQ02 | — | `A02.05`, `A02.06`, `A05.03`, `A05.07`, `A05.09`, `A05.10` |
| `TC09` | Case 9: Tự tính Số kỳ của khóa học | High |  | REQ02 | — | `A05.08` |
| `TC10` | Case 10: Công khai khóa học với ID hợp lệ | High |  | Flow 2 / REQ02 | — | `A02.06`, `A03.03`, `A03.05`, `A03.10`, `A05.10` |
| `TC11` | Case 11: Chặn công khai khóa học khi ID không hợp lệ | High |  | EX02 / REQ02 | — | `A02.06`, `A03.10`, `A05.10` |
| `TC12` | Case 12: Chọn nhiều package/category và action item | High |  | Flow 3 / REQ03 | — | `A07.02`, `A07.03` |
| `TC13` | Case 13: Áp dụng cấu hình thành công | High |  | Flow 3 / REQ03 | — | `A07.03`, `A07.05` |
| `TC14` | Case 14: Đồng bộ thay đổi từ dữ liệu define | High |  | EX04 / REQ03 | — | `A02.06`, `A05.10` |
| `TC15` | Case 15: Kiểm tra quyền truy cập trực tiếp | High |  | EX07 / Ràng buộc quyền | — |  |
| `TC16` | Case 16: Chặn lưu khi thiếu tên hoặc mô tả | High |  | REQ01 / REQ02 | — |  |
| `TC17` | Case 17: Quyền Chỉ xem không được thay đổi cấu hình | High |  | EX08 / REQ03 | — | `A07.02`, `A07.03`, `A07.05` |
| `TC18` | Case 18: Báo lỗi Subject ID danh mục bị trùng | High |  | EX01 / REQ01 | — | `A02.02`, `A02.06`, `A03.10`, `A05.10` |
| `TC19` | Case 19: Báo lỗi Subject ID danh mục sai định dạng | High |  | EX01 / REQ01 | — | `A02.02`, `A03.10` |
| `TC20` | Case 20: Làm mới Subject ID tự động | Medium |  | Flow 1B / REQ01 | — | `A03.10` |
| `TC21` | Case 21: Hủy kích hoạt công khai | High |  | Flow 1B / REQ01, Flow 2 / REQ02 | — | `A02.06`, `A05.10` |
| `TC22` | Case 22: ID bị chiếm trước thời điểm xác nhận | High |  | EX10 / REQ01, REQ02 | — | `A02.06`, `A03.10`, `A05.10` |
| `TC23` | Case 23: Đổi chế độ lấy ID | Medium |  | EX11 / REQ01, REQ02 | — | `A02.06`, `A03.10`, `A05.10` |
| `TC24` | Case 24: Tự động tạo Subject ID thất bại và thử lại | High |  | EX09 / REQ01, REQ02 | — | `A02.02`, `A02.06`, `A03.03`, `A03.10`, `A05.10` |
| `TC25` | Case 25: Tìm kiếm danh mục theo keyword | Medium |  | REQ01 | — | `A07.01` |
| `TC26` | Case 26: Chuyển đổi giữa mọi trạng thái | High |  | REQ01, REQ02 | — | `A02.06`, `A05.10` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (18): `A02.01`, `A03.01`, `A03.02`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A03.08`, `A03.09`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.06`, `A05.08`, `A07.02`, `A07.03`, `A07.05`
- Frame Figma chưa có requirement (7): `CD-DM-010010`, `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040`, `CD-DM-010057`, `CD-DM-010060`, `CD-DM-010062`
- Thiếu prototype link đi vào (7): `CD-DM-010010`, `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040`, `CD-DM-010057`, `CD-DM-010060`, `CD-DM-010062`
- Phân loại cần design duyệt (3): `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040`
- REQ/EX chưa có testcase (3): `EX03`, `EX05`, `EX06`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
