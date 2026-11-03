# Chi tiết danh mục (Popup)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-DM-010000` | Quản lý danh mục | `/quan-ly-danh-muc` | `CD-DM-010000-DK` | QC |

Requirement: `curriculum_management_requirement/category_management/detail_category.md` — Chi tiết danh mục (Popup) (tiền tố `CM-DC`).

## 2. Luồng

- `FLOW01` Thêm nhanh khóa học — 
- `FLOW02` Sửa khóa học khi còn Nháp — 
- `FLOW03` Đổi trạng thái khóa học — 
- `FLOW04` Cấu hình nội dung cho danh mục — 

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

### `A01` Popup Chi tiết danh mục

Frame: `CD-DM-010000` (tool đoán:CD-DM-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Tab Tổng quan

Frame: `CD-DM-010060` (tool đoán:CD-DM-010060) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | id |  |  | — | governed-by `REQ06` |  | Chưa sync | QC |
| `A02.02` | ten-khoa-hoc |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | mo-ta-khoa-hoc |  |  | — |  |  | Chưa sync | QC |
| `A02.04` | cap-do |  |  | — |  | `TC01`, `TC03`, `TC12` | Chưa sync | QC |
| `A02.05` | so-ky |  |  | — |  |  | Chưa sync | QC |
| `A02.06` | trang-thai |  |  | — | governed-by `REQ05` | `TC01`, `TC05`, `TC07` | Chưa sync | QC |
| `A02.07` | tim-kiem |  |  | — |  |  | Chưa sync | QC |

### `A03` Tab Mindset, Tiêu chuẩn giáo trình và Hướng dẫn giảng dạy

Frame: `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040`, `CD-DM-010057` (tool đoán:CD-DM-010020, CD-DM-010030, CD-DM-010040, CD-DM-010057) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | tim-kiem | `Atom/Input` State=Search, Kiểu=Chuẩn | `I2702:46381;1739:32505` Tìm nội dung... | — |  |  | Khớp một phần | QC |
| `A03.02` | package-category |  |  | — |  | `TC08` | Chưa thấy trên Figma | QC |
| `A03.03` | action-item |  |  | — |  | `TC08` | Chưa thấy trên Figma | QC |
| `A03.04` | luu-ap-dung |  |  | — |  | `TC08`, `TC11` | Chưa thấy trên Figma | QC |

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
| `REQ01` | ID khóa học | 9 chữ số `CCAALLMMM`, quy tắc sinh, đồng bộ và khoá theo `course_management.md` REQ06. Khi ID danh mục (đang `Nháp`) đổi, `AA` trong ID mọi khóa học `Nháp` thuộc danh mục đổi theo và hệ thống cấp lại `MMM` nếu trùng trong `CCAALL` mới (khóa học `Công Khai` / `Vô hiệu` không thể thuộc danh mục `Nháp`). |
| `REQ02` | Rule chuyển trạng thái khóa học | theo `course_management.md` REQ05: `Nháp → Công Khai` (một chiều, qua popup); `Công Khai ↔ Vô hiệu` (hai chiều); không cho `Nháp → Vô hiệu` và không cho chuyển về `Nháp`. UI chỉ hiển thị lựa chọn hợp lệ; request trực tiếp với transition không hợp lệ bị backend từ chối. |
| `REQ03` | Thông tin cơ bản khóa học | Tên bắt buộc, không giới hạn độ dài. Mô tả và Cấp độ không bắt buộc (mặc định `Không` nếu chưa chọn Cấp độ); được phép giữ Cấp độ `Không` kể cả khi khóa học đã `Công Khai`, không bắt buộc phải chọn cấp độ cụ thể. Số kỳ tự tính, không nhập tay. Mỗi khóa học thuộc đúng 1 danh mục (`1:n`); được thêm mới bất kể danh mục đang ở trạng thái nào. |
| `REQ04` | Cấu hình nội dung danh mục | Chỉ sửa được khi danh mục `Nháp`; `Công Khai` / `Vô hiệu` chỉ đọc (EX12). Tại mỗi tab Mindset/Tiêu chuẩn giáo trình/Hướng dẫn giảng dạy, chọn nhiều package/category rồi nhiều action item trực thuộc, không giới hạn số lượng. Dữ liệu nguồn chỉ được tham chiếu, không sao chép hay chỉnh sửa; thay đổi tại feature định nghĩa được phản ánh vào nội dung áp dụng. |
| `EX01` | Ngoại lệ | Tên khóa học mới bị bỏ trống hoặc chỉ chứa khoảng trắng → chặn tạo mới, disable nút "+", khi Enter hiện lỗi "Tên khoá học không được bỏ trống". |
| `EX02` | Ngoại lệ | Trong popup Kích hoạt công khai khoá học, `MMM` sai định dạng hoặc ID 9 số trùng → từ chối, hiển thị lỗi, giữ nguyên ID cũ (course_management.md EX05). |
| `EX03` | Ngoại lệ | Cấp độ đã chọn chuyển sang `Vô hiệu hóa`/không còn khả dụng trước khi lưu → không lưu cấp độ không hợp lệ; dữ liệu đã lưu trước đó không đổi. (Cấp độ đang được khóa học sử dụng không thể bị xóa, chỉ có thể bị Vô hiệu hóa — xem `level_management.md` REQ07.) |
| `EX04` | Ngoại lệ | Gọi API/thao tác trực tiếp chuyển trạng thái từ `Công Khai`/`Vô hiệu` về `Nháp` → hệ thống từ chối, báo lỗi, giữ nguyên trạng thái; UI không hiển thị lựa chọn `Nháp`. |
| `EX05` | Ngoại lệ | Cố sửa ID khi khóa học đã rời khỏi `Nháp` → từ chối, field ID chỉ đọc/disable. |
| `EX06` | Ngoại lệ | ID hợp lệ tại thời điểm nhập nhưng bị đối tượng khác dùng ngay trước lúc backend lưu (race condition) → backend từ chối, giữ nguyên trạng thái, báo lỗi. |
| `EX07` | Ngoại lệ | Tìm kiếm khóa học không có kết quả → hiển thị "Không có dữ liệu", không đổi dữ liệu. |
| `EX08` | Ngoại lệ | Package/category hoặc action item bị xóa/không còn khả dụng tại feature định nghĩa → nội dung tham chiếu tại danh mục phản ánh trạng thái mới, không hiển thị như còn hiệu lực. |
| `EX09` | Ngoại lệ | Lưu/áp dụng cấu hình thất bại → không hiển thị "Áp dụng thành công!", không lưu một phần. |
| `EX10` | Ngoại lệ | Người dùng không có quyền, truy cập/gửi request trực tiếp → từ chối, không đổi dữ liệu. |
| `EX11` | Ngoại lệ | Quyền `Chỉ xem` gửi request tick chọn/lưu trực tiếp → hệ thống từ chối, giữ nguyên cấu hình danh mục. |
| `EX12` | Ngoại lệ | Tick chọn / lưu cấu hình khi danh mục `Công Khai` / `Vô hiệu` (UI hoặc request trực tiếp) → UI chỉ đọc; backend từ chối, trả lỗi `Danh mục không ở trạng thái Nháp, chỉ được sửa Tên và Mô tả.`, cấu hình không đổi. |
| `EX13` | Ngoại lệ | Sửa field ngoài Tên, Mô tả của khóa học `Công Khai` / `Vô hiệu`, hoặc xóa khóa học không ở `Nháp` tại tab Tổng quan → backend từ chối theo `course_management.md` EX09, EX11. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Thêm nhanh khóa học | High | Có | Flow 1 | — | `A02.04`, `A02.06` |
| `TC02` | Case 2: Chặn thêm khi tên trống | Medium |  | EX01 | — |  |
| `TC03` | Case 3: Sửa khóa học khi đang Nháp | High |  | Flow 2 / REQ01, REQ03 | — | `A02.04` |
| `TC04` | Case 4: Chặn sửa khi ID không hợp lệ | Medium |  | EX02 | — |  |
| `TC05` | Case 5: Chuyển Nháp → Công Khai | High | Có | Flow 3 / REQ02 | — | `A02.06` |
| `TC06` | Case 6: Khóa ID và chặn quay về Nháp | High |  | EX04, EX05 / REQ01, REQ02 | — |  |
| `TC07` | Case 7: Chuyển đổi Công Khai ↔ Vô hiệu | Medium |  | Flow 3 / REQ02 | — | `A02.06` |
| `TC08` | Case 8: Áp dụng cấu hình nội dung thành công | High |  | Flow 4 / REQ04 | — | `A03.02`, `A03.03`, `A03.04` |
| `TC09` | Case 9: Quyền Chỉ xem không được thay đổi cấu hình | High |  | EX11 | — |  |
| `TC10` | Case 10: Kiểm tra quyền truy cập trực tiếp | High |  | EX10 | — |  |
| `TC11` | Case 11: Cấu hình chỉ đọc khi danh mục Công Khai / Vô hiệu | High |  | REQ04 / EX12 | — | `A03.04` |
| `TC12` | Case 12: Khóa học Công Khai trong tab Tổng quan chỉ sửa Tên, Mô tả | High |  | Flow 2 / EX13 | — | `A02.04` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa thấy trên Figma (3): `A03.02`, `A03.03`, `A03.04`
- Chưa sync (7): `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`
- Frame Figma chưa có requirement (7): `CD-DM-010010`, `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040`, `CD-DM-010057`, `CD-DM-010060`, `CD-DM-010062`
- Thiếu prototype link đi vào (7): `CD-DM-010010`, `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040`, `CD-DM-010057`, `CD-DM-010060`, `CD-DM-010062`
- Phân loại cần design duyệt (5): `CD-DM-010020`, `CD-DM-010030`, `CD-DM-010040`, `CD-DM-010057`, `CD-DM-010062`
- REQ/EX chưa có testcase (5): `EX03`, `EX06`, `EX07`, `EX08`, `EX09`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
