# Quản lý khoá học

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-010000` | Quản lý khoá học | `/quan-ly-khoa-hoc` | `CD-KH-010000-DK` | QC |

Requirement: `course_management/course_management.md` — Quản lý khoá học (tiền tố `CM-CM`).

## 2. Luồng

- `FLOW01` Thêm khoá học mới — 
- `FLOW02` Lọc / tìm kiếm khoá học — 
- `FLOW03` Chuyển sang Vô hiệu / Xoá khoá học — 
- `FLOW04` Xem chi tiết khoá học — 
- `FLOW05` Chuyển trạng thái Nháp → Công Khai — 
- `FLOW06` Nhân bản khoá học — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-KH-010010` | Popup kích hoạt công khai | Popup | CD-KH-010000 | CD-KH-010000 | CD-KH-010000, CD-KH-020230, CD-KH-030100, CD-KH-030104, CD-KH-030200, CD-KH-030300, CD-KH-030342, CD-KH-030350 | `/quan-ly-khoa-hoc?popup=CD-KH-010010` | Figma | cao |
| `CD-KH-010013` | ID hợp lệ | Trạng thái | CD-KH-010010 | CD-KH-010000 | CD-KH-010010 | `/quan-ly-khoa-hoc?state=CD-KH-010013` | Figma | trung bình |

## 4. Khu vực và item

### `A01` Trang 1: Danh sách khoá học

Frame: `CD-KH-010000` (tool đoán:CD-KH-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 2: Menu chi tiết khoá học

Frame: `CD-KH-010000` (tool đoán:CD-KH-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Trang 3: Popup xác nhận Công khai khoá học

Frame: `CD-KH-010010` (tool đoán:CD-KH-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A04` Trang 4: Popup Nhân bản khoá học

Frame: `CD-KH-010000` (tool đoán:CD-KH-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | tieu-de |  |  | — |  | `TC26` | Chưa khớp tự động | QC |
| `A04.02` | noi-dung | `Card Menu v2 (Test)` Type=Chính, State=Default | `I4915:256174;4901:216084` Card Menu | — |  | `TC14`, `TC15`, `TC17`, `TC26`, `TC27`, `TC28` | Khớp | QC |
| `A04.03` | nut |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.04` | toast-thanh-cong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.05` | toast-loi |  |  | — |  | `TC14`, `TC15`, `TC16`, `TC17` | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `CD-KH-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-cd | `MENU - CD`  | `4915:256174` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | account | `ACCOUNT` Size=Default | `2223:85233` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | component-2 | `Switch Center`  | `4273:160608` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `2706:20428` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | dd-molecule-trigger | `DD/Molecule/Trigger` Size=XS, State=Default | `2706:19433` DD/Molecule/Trigger | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | add-new-bar-them-noi-dung-khoa-hoc-moi | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `2702:48160` Add New Bar · Thêm nội dung khoá học mới | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | dd-organism-menu-panel | `DD/Organism/Menu Panel` Type=Single | `2032:5244` DD/Organism/Menu Panel | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Row

Frame: `CD-KH-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | id-badge | `Atom/ID Badge` Type=7-digit, Size=26H | `1994:25857` ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | atom-badge | `Atom/Badge`  | `2014:3933` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | atom-number-badge | `Atom/Number Badge` Type=Kỳ, Size=Medium, State=Active | `2065:22378` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | atom-status | `Atom/Status` Size=M | `1474:15136` Atom/Status | — |  |  | Chỉ có trên Figma | Figma |
| `F02.05` | arrow-detail | `ARROW DETAIL`  | `1391:14535` ARROW DETAIL | — |  |  | Chỉ có trên Figma | Figma |
| `F02.06` | dd-organism-menu-panel | `DD/Organism/Menu Panel` Type=Action | `2706:42930` DD/Organism/Menu Panel | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` |  | Xoá khoá học là xoá mềm, không xoá dữ liệu vật lý; các kỳ học con cũng được xoá mềm, cần có popup xác nhận trước khi xoá. **Chỉ khoá học `Nháp` được xoá**; khoá học `Công Khai` / `Vô hiệu` không được xoá (muốn ngừng dùng thì để/chuyển `Vô hiệu`). Khoá học `Nháp` đang được sử dụng cũng không được xoá (REQ08). Nút Xoá mờ + tooltip với khoá `Công Khai` / `Vô hiệu`; BE luôn kiểm tra lại trạng thái và tham chiếu tại thời điểm xoá, FE hiển thị Toast lỗi với nội dung BE trả về (EX09). Quy tắc **"chỉ `Nháp` được xoá; `Công Khai`, `Vô hiệu` không được xoá"** áp dụng chung cho mọi dữ liệu có trạng thái Nháp / Công Khai / Vô hiệu trong Khoá học, Học kỳ, Danh mục, Cấp độ. |
| `REQ02` |  | Danh mục và Cấp độ chỉ nhận giá trị từ danh sách đã define sẵn ở màn hình cấu hình riêng, không cho nhập tự do (áp dụng cả ở màn hình danh sách lẫn trong popup Công khai); Số kỳ tự động tính từ số lượng kỳ học con, không cho nhập/sửa tay. |
| `REQ03` |  | Danh sách khoá học không phân trang, hiển thị toàn bộ khoá học chưa bị xoá mềm. |
| `REQ04` |  | Khoá học đã Xoá (xoá mềm) không hiển thị trong danh sách và không lọc/tìm kiếm ra được. |
| `REQ05` |  | Ràng buộc chuyển trạng thái khoá học (3 trạng thái: **Nháp**, **Công Khai**, **Vô hiệu**): |
| `REQ06` | ID khoá học | đúng **9 chữ số** `CCAALLMMM`, chỉ gồm chữ số (giữ số 0 đứng đầu): |
| `REQ07` |  | Khi chuyển trạng thái khoá học từ Nháp sang Công Khai, hệ thống **bắt buộc** hiển thị popup "Kích hoạt công khai khoá học" yêu cầu điền/xác nhận đầy đủ 4 trường: ID (9 số `CCAALLMMM`, CD chỉ sửa `MMM`), Danh mục, Cấp độ, Mô tả. Popup này luôn hiển thị và yêu cầu xác nhận lại toàn bộ 4 trường **ngay cả khi** các trường đó đã được điền sẵn từ trước ở màn hình danh sách (inline) — không được bỏ qua popup hay tự động công khai chỉ vì dữ liệu inline đã đầy đủ. Trạng thái chỉ đổi thành Công Khai sau khi CD xác nhận thành công trong popup. Chiều Vô hiệu → Công Khai chuyển ngay, không mở popup. |
| `REQ08` |  | Ràng buộc xoá khoá học: ngoài điều kiện phải đang `Nháp` (REQ01), khoá học **đang được sử dụng** (có lớp học gắn với khoá học, hoặc có học kỳ của khoá nằm trong Tổng ôn của học kỳ thuộc khoá khác — chỉ tính bản ghi chưa xoá mềm) thì **không được xoá**. BE kiểm tra trạng thái, tham chiếu và xoá mềm trong cùng một giao dịch, từ chối nếu không hợp lệ; FE hiển thị Toast lỗi với nội dung BE trả về (EX09). Khoá học `Vô hiệu` không hiển thị để chọn mới ở nơi khác (vd. tạo lớp), dữ liệu đang dùng giữ nguyên. |
| `REQ09` |  | Tìm kiếm khoá học khớp một phần theo ID hoặc Tên khoá học, kích hoạt sau khi nhấn Enter. Tên khoá học chưa giới hạn độ dài. |
| `REQ11` | Nhân bản khoá học (deep clone) | Nhân bản được ở mọi trạng thái khoá gốc; bản sao luôn `Nháp`, khoá gốc giữ nguyên. Toàn bộ thao tác thực hiện trong **một giao dịch** (thành công hết hoặc không tạo gì, EX10). Phạm vi: |
| `EX01` | Ngoại lệ | Tên khoá học mới bị bỏ trống hoặc chỉ chứa khoảng trắng → Chặn tạo mới, dữ liệu không thay đổi, disable nút "+"/Enter, không có notification hiển thị. |
| `EX02` | Ngoại lệ | Lọc/tìm kiếm với điều kiện không khớp khoá học nào → Trả về danh sách rỗng, hiển thị "Không có dữ liệu". |
| `EX03` | Ngoại lệ | Gọi API cập nhật trạng thái hoặc xoá mềm thất bại (lỗi mạng/server) → Giữ nguyên trạng thái/dữ liệu hiện tại trên UI, hiển thị thông báo lỗi, không cập nhật is_deleted/status. |
| `EX04` | Ngoại lệ | Gọi API đổi trạng thái với transition không hợp lệ (Nháp → Vô hiệu, Công Khai → Nháp, Vô hiệu → Nháp) → BE từ chối, trả lỗi, FE giữ nguyên trạng thái hiện tại, hiển thị thông báo lỗi. |
| `EX05` | Ngoại lệ | Trong popup Công khai, `MMM` không đúng định dạng 3 chữ số `001`–`999` (thiếu số, thừa số, chứa ký tự không phải số, `000`) hoặc ID 9 số trùng với ID khoá học khác (kể cả khoá học đã xoá mềm) → hiển thị lỗi "ID không hợp lệ. Vui lòng kiểm tra." dưới ô ID, chặn nút "Công khai khoá học", trạng thái giữ nguyên. |
| `EX06` | Ngoại lệ | Trong popup Công khai, bỏ trống Danh mục và/hoặc Cấp độ và/hoặc Mô tả → hiển thị lỗi bắt buộc dưới từng trường tương ứng, chặn nút "Công khai khoá học", trạng thái giữ nguyên. |
| `EX07` | Ngoại lệ | CD nhấn "Hủy" hoặc đóng popup (icon "X") ở bất kỳ bước nào trước khi xác nhận thành công → đóng popup, không lưu thay đổi, trạng thái khoá học giữ nguyên như trước khi mở popup. |
| `EX08` | Ngoại lệ | Gọi API xác nhận Công khai thất bại (lỗi mạng/server) → giữ nguyên trạng thái Nháp, popup vẫn mở (hoặc hiển thị lại), hiển thị thông báo lỗi, dữ liệu ID/Danh mục/Cấp độ/Mô tả chưa lưu. |
| `EX09` | Ngoại lệ | Xoá khoá học không ở `Nháp` (`Công Khai` / `Vô hiệu`, gọi API trực tiếp) hoặc khoá học `Nháp` đang được sử dụng (gán cho lớp, có học kỳ nằm trong Tổng ôn của khoá khác), kể cả khi tham chiếu vừa phát sinh ngay trước lúc BE xoá → BE từ chối, trả lỗi (ví dụ `Chỉ xoá được khoá học ở trạng thái Nháp.` hoặc `Khoá học đang được sử dụng, không thể xoá.`); FE đóng popup xác nhận, hiển thị Toast lỗi với đúng nội dung BE trả về, dữ liệu giữ nguyên. |
| `EX10` | Ngoại lệ | Nhân bản khoá học thất bại (lỗi mạng/server, lỗi ở bất kỳ bước sao chép nào) → BE rollback toàn bộ, không tạo khoá học/học kỳ/bài học bản sao dở dang; FE hiển thị Toast lỗi `Có Lỗi Xảy Ra` với nội dung BE trả về, khoá gốc không đổi. |
| `EX11` | Ngoại lệ | Sửa field ngoài `Tên khoá học` / `Mô tả`, hoặc thêm / sửa / xoá / sắp xếp bất kỳ dữ liệu chi tiết bên trong (học kỳ, bài học, bài kiểm tra, BTVN, bộ câu hỏi, S1, S2, S4, Quản lý, Tài liệu) khi khoá học đang `Công Khai` / `Vô hiệu` (qua UI hoặc gọi API trực tiếp) → UI ở dạng chỉ đọc (ẩn/disable thao tác); BE từ chối, trả lỗi `Khoá học không ở trạng thái Nháp, chỉ được sửa Tên và Mô tả.`, dữ liệu không đổi. |
| `EX12` | Ngoại lệ | Chọn Danh mục / Cấp độ (ở danh sách, popup Công khai hoặc khi nhân bản) mà `CCAALL` tương ứng đã dùng hết `MMM` `001`–`999` → BE từ chối, trả lỗi `Đã hết ID khoá học khả dụng cho Danh mục và Cấp độ này.`; FE hiển thị Toast lỗi (ở popup: lỗi dưới ô ID, tắt nút `Công khai khoá học`), Danh mục / Cấp độ / ID giữ như trước; nhân bản thì không tạo bản sao (giống EX10). |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Thêm khoá học mới (nút "+" / Enter) | High | Có | Flow 1 | — |  |
| `TC02` | Case 2: Thêm khoá học với tên trống | High |  | EX01 | — |  |
| `TC03` | Case 3: Lọc theo Danh mục, Cấp độ, tìm kiếm | High | Có | Flow 2 | — |  |
| `TC04` | Case 4: Lọc không có kết quả | Medium |  | EX02 | — |  |
| `TC05` | Case 5: Công Khai → Vô hiệu và menu đổi trạng thái | High | Có | Flow 3, REQ05 | — |  |
| `TC06` | Case 6: Chặn chuyển Nháp → Vô hiệu và chuyển về Nháp | High |  | EX04, REQ05 | — |  |
| `TC07` | Case 7: Xoá mềm khoá học | Medium | Có | Flow 3, REQ01 | — |  |
| `TC23` | Case 23: Không xoá khoá học Công khai / Vô hiệu | High |  | Flow 3, REQ01, EX09 | — |  |
| `TC08` | Case 8: Xem chi tiết khoá học - mặc định vào Học kỳ | High | Có | Flow 4 | — |  |
| `TC09` | Case 9: Dữ liệu Danh mục/Cấp độ/ID được lưu và hiển thị chính xác | High |  | REQ02, REQ06 | — |  |
| `TC10` | Case 10: Chuyển sang Công Khai luôn mở popup xác nhận đủ trường | High |  | Flow 5, REQ07 | — |  |
| `TC11` | Case 11: Validate dữ liệu trong popup Công khai | High |  | EX05, EX06 | — |  |
| `TC12` | Case 12: Hủy popup Công khai | Medium |  | EX07 | — |  |
| `TC13` | Case 13: Xác nhận Công khai thành công | High | Có | Flow 5, REQ07 | — |  |
| `TC14` | Case 14: Chặn xoá khoá học đang có lớp học | High | Có | Flow 3, REQ08 | — | `A04.02`, `A04.05` |
| `TC15` | Case 15: Chặn xoá khi học kỳ nằm trong Tổng ôn của khoá khác | High |  | Flow 3, REQ08 | — | `A04.02`, `A04.05` |
| `TC16` | Case 16: Xoá khoá học đang Nháp chưa được sử dụng | High |  | Flow 3, REQ01 | — | `A04.05` |
| `TC17` | Case 17: BE chặn xoá khoá học đang được sử dụng | High |  | EX09, REQ08 | — | `A04.02`, `A04.05` |
| `TC18` | Case 18: Dropdown chỉ hiện Danh mục/Cấp độ Công Khai | Medium |  | REQ02, EX10 | — |  |
| `TC19` | Case 19: Tìm kiếm theo ID / Tên | High |  | Flow 2 / REQ09 | — |  |
| `TC20` | Case 20: Bộ lọc hiển thị Danh mục / Cấp độ Vô hiệu | Medium |  | REQ02 | — |  |
| `TC21` | Case 21: Vô hiệu → Công Khai chuyển ngay, không mở popup | High |  | Flow 3 / REQ05, REQ06 | — |  |
| `TC22` | Case 22: ID trùng khoá học đã xoá mềm | Medium |  | EX05, REQ06 | — |  |
| `TC24` | Case 24: Khoá học Công khai / Vô hiệu chỉ sửa được Tên, Mô tả | High | Có | REQ10, EX11 | — |  |
| `TC25` | Case 25: Khoá học Nháp sửa được toàn bộ | High |  | REQ10 | — |  |
| `TC26` | Case 26: Mở popup Nhân bản khoá học | Medium |  | Trang 4, Flow 6 | — | `A04.01`, `A04.02` |
| `TC27` | Case 27: Nhân bản khoá học Công khai đầy đủ dữ liệu | High | Có | Flow 6, REQ11 | — | `A04.02` |
| `TC28` | Case 28: Sửa bản sao không ảnh hưởng khoá gốc | High |  | REQ11 | — | `A04.02` |
| `TC29` | Case 29: Không sao chép lớp học, dữ liệu học viên | Medium |  | REQ11 | — |  |
| `TC30` | Case 30: Nhân bản thất bại | Medium |  | EX10 | — |  |
| `TC31` | Case 31: Nhân bản khi Danh mục / Cấp độ gốc đã Vô hiệu | Low |  | REQ11 | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (4): `A04.01`, `A04.03`, `A04.04`, `A04.05`
- Frame Figma chưa có requirement (2): `CD-KH-010010`, `CD-KH-010013`
- Phân loại cần design duyệt (1): `CD-KH-010013`
- Testcase trỏ mã không tồn tại (2): `TC24`, `TC25`
- REQ/EX chưa có testcase (5): `REQ03`, `REQ04`, `EX03`, `EX08`, `EX12`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
