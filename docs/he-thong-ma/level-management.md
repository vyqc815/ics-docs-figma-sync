# Quản lý danh sách cấp độ

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-CDO-010000` | Quản lý cấp độ | `/quan-ly-cap-do` | `CD-CDO-010000-DK` | QC |

Requirement: `curriculum_management_requirement/level_management/level_management.md` — Quản lý danh sách cấp độ (tiền tố `CM-LM`).

## 2. Luồng

- `FLOW01` Thêm nhanh cấp độ — 
- `FLOW02` Sửa cấp độ — 
- `FLOW03` Kích hoạt công khai cấp độ — 
- `FLOW04` Đổi trạng thái Công Khai ↔ Vô hiệu hóa — 
- `FLOW05` Xóa cấp độ — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-CDO-010010` | Popup kích hoạt công khai | Popup | CD-CDO-010000 | CD-CDO-010000 | — | `/quan-ly-cap-do?popup=CD-CDO-010010` | Figma | cao |
| `CD-CDO-010012` | Điền sai | Trạng thái | CD-CDO-010010 | CD-CDO-010000 | — | `/quan-ly-cap-do?state=CD-CDO-010012` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang danh sách cấp độ

Frame: `CD-CDO-010000` (tool đoán:CD-CDO-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | id | `Atom/ID Badge` Type=6-digit, Size=26H | `1910:19801` ID; `1994:25893` ID Badge | — | governed-by `REQ01` |  | Khớp | QC |
| `A01.02` | ten-cap-do |  | `1910:19803` Tên cấp độ | — |  | `TC03` | Khớp | QC |
| `A01.03` | mo-ta-cap-do |  | `1910:19805` Mô tả cấp độ | — |  |  | Khớp | QC |
| `A01.04` | ma-cap-do | `Atom/Status` Size=M | `1910:19807` Mã cấp độ; `1901:1951` Atom/Status | — |  | `TC01`, `TC03`, `TC04`, `TC07`, `TC08`, `TC09`, `TC13`, `TC19`, `TC23` | Khớp | QC |
| `A01.05` | trang-thai | `Atom/Status` Size=M | `1910:19810` Trạng thái; `1901:2093` Atom/Status | — | governed-by `REQ02` | `TC01`, `TC08`, `TC09`, `TC10`, `TC15`, `TC16`, `TC19` | Khớp | QC |

### `A02` Thanh "Thêm cấp độ mới"

Frame: `CD-CDO-010000` (tool đoán:CD-CDO-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Xóa cấp độ

Frame: `CD-CDO-010000` (tool đoán:CD-CDO-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | popup-xac-nhan-xoa |  |  | — |  | `TC18` | Chưa khớp tự động | QC |
| `A03.02` | toast-loi-khong-duoc-xoa |  |  | — |  |  | Chưa khớp tự động | QC |

### `A04` Popup Kích hoạt công khai cấp độ

Frame: `CD-CDO-010010` (tool đoán:CD-CDO-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | cap-do |  | `4687:5175` Cấp độ: | — |  | `TC01`, `TC02`, `TC03`, `TC04`, `TC06`, `TC07`, `TC08`, `TC09`, `TC11`, `TC12`, `TC13`, `TC14`, `TC15`, `TC17`, `TC18`, `TC19`, `TC21`, `TC22`, `TC23` | Khớp | QC |
| `A04.02` | trang-thai-hien-tai |  | `4687:5192` Trạng thái hiện tại; `4687:5195` Nháp | — |  |  | Khớp | QC |
| `A04.03` | id-cap-do |  | `4687:5180` ID cấp độ *: | — |  |  | Khớp | QC |
| `A04.04` | o-nhap-id |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.05` | nut-lam-moi-id-bieu-tuong-xoay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.06` | ma-cap-do |  |  | — |  | `TC01`, `TC03`, `TC04`, `TC07`, `TC08`, `TC09`, `TC13`, `TC19`, `TC23` | Chưa khớp tự động | QC |
| `A04.07` | bieu-tuong-ket-qua-kiem-tra |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.08` | thong-bao-trang-thai |  | `4687:5189` ID có thể sử dụng. | — |  |  | Khớp | QC |
| `A04.09` | ghi-chu-canh-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.10` | nut-cong-khai-cap-do | `Atom/Button` Type=Primary, Size=Medium | `I2527:168067;2514:153363` Atom/Button | — |  | `TC07` | Khớp | QC |
| `A04.11` | nut-huy-bieu-tuong-x | `Atom/Button` Type=Secondary, Size=Medium | `I2527:168067;2514:153361` Atom/Button | — |  |  | Khớp | QC |

### `F01` (ngoài Body)

Frame: `CD-CDO-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `2223:86219` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | component-2 | `Switch Center`  | `4273:160803` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-badge | `Atom/Badge`  | `2409:144867` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | id-badge | `Atom/ID Badge` Type=6-digit, Size=26H | `1994:25895` ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-status | `Atom/Status` Size=M | `1901:2115` Atom/Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | add-new-bar-them-danh-muc-moi | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `2702:48237` Add New Bar · Thêm danh mục mới | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | sidebar-menu-cd | `MENU - CD`  | `4915:256939` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | ID cấp độ | Tự động sinh khi tạo mới: đúng 2 chữ số trong dải `01`–`99` (giữ số 0 đứng đầu, ví dụ `05`; không cấp `00` vì `00` trong ID khoá học nghĩa là chưa chọn), duy nhất toàn hệ thống, tính cả cấp độ đã xóa mềm; hệ thống lấy mã nhỏ nhất chưa dùng. Hết mã trong dải thì từ chối tạo mới và báo lỗi `Đã hết ID cấp độ khả dụng (01–99).`. ID cấp độ là đoạn `LL` trong ID khoá học `CCAALLMMM` (xem `course_management.md` REQ06); vì chỉ cấp độ `Công Khai` mới được gán cho khoá học nên đoạn `LL` luôn là ID đã khoá, người dùng không nhập tay lúc thêm nhanh. Có thể chỉnh sửa thủ công trong lúc `Nháp`, kể cả ngay trong popup Kích hoạt công khai cấp độ trước khi xác nhận; bị khóa vĩnh viễn (không sửa được) kể từ khi rời khỏi `Nháp`. |
| `REQ02` | Rule chuyển trạng thái | `Nháp → Công Khai` (một chiều, bắt buộc qua popup Kích hoạt công khai); `Công Khai ↔ Vô hiệu hóa` (hai chiều); không cho chuyển `Nháp → Vô hiệu hóa` trực tiếp và không cho chuyển về `Nháp` từ hai trạng thái còn lại. UI chỉ hiển thị lựa chọn hợp lệ: đang `Nháp` chỉ hiện `Công Khai`, đang `Công Khai` chỉ hiện `Vô hiệu hóa`, đang `Vô hiệu hóa` chỉ hiện `Công Khai`; nếu có request gọi trực tiếp với transition không hợp lệ, backend từ chối và trả thông báo lỗi (xem EX04). Chỉ cấp độ `Công Khai` được dùng cho lựa chọn mới; thay đổi trạng thái không tự động xóa liên kết đã tồn tại. |
| `REQ03` | Thông tin cơ bản | Tên cấp độ bắt buộc, không giới hạn độ dài, được phép trùng với cấp độ khác; hệ thống tự cắt khoảng trắng đầu/cuối trước khi lưu. Tên và Mô tả sửa được ở mọi trạng thái. Mô tả không bắt buộc, có thể để trống lúc tạo và bổ sung sau. |
| `REQ04` | Mã cấp độ | Không bắt buộc lúc tạo (mặc định rỗng), nhưng bắt buộc phải có giá trị trước khi cấp độ được chuyển sang `Công Khai`; việc bổ sung có thể thực hiện ở màn chi tiết hoặc ngay trong popup Kích hoạt công khai. Được phép trùng với cấp độ khác (không kiểm tra trùng), không ràng buộc định dạng, phân biệt chữ hoa/thường, tự cắt khoảng trắng đầu/cuối trước khi lưu. Chỉ sửa được khi cấp độ đang `Nháp`; bị khóa, không được sửa kể từ khi cấp độ được `Công Khai`. |
| `REQ05` | Popup Kích hoạt công khai cấp độ | Chỉ khi chuyển từ `Nháp` sang `Công Khai`, hệ thống bắt buộc mở popup xác nhận, cho phép CD giữ nguyên/chỉnh sửa lần cuối ID và bổ sung Mã cấp độ nếu còn trống, trước khi khóa. Nút xác nhận chỉ bật khi ID hợp lệ, chưa trùng và Mã cấp độ không để trống; backend luôn kiểm tra lại ngay trước khi lưu và chuyển trạng thái trong cùng một giao dịch. Chiều `Vô hiệu hóa → Công Khai` chuyển ngay, không mở popup. |
| `REQ06` | Cung cấp dữ liệu cho feature khác | Feature `Quản lý danh mục` phải lưu tham chiếu ổn định đến bản ghi cấp độ (qua ID), không chỉ lưu tên hoặc mã hiển thị. Danh sách lựa chọn cấp độ chỉ gồm các bản ghi `Công Khai` và chưa bị xóa, lấy từ dữ liệu cấp độ đã định nghĩa, không hard-code. |
| `REQ07` | Xóa cấp độ | **Chỉ cấp độ `Nháp` được xóa** (xóa mềm), và chỉ khi **chưa được** bất kỳ khóa học nào (chưa bị xóa mềm) tham chiếu. Cấp độ `Công Khai` / `Vô hiệu hóa` không được xóa, chỉ được chuyển / giữ `Vô hiệu hóa` để ngừng chọn mới; liên kết đã lưu ở khóa học giữ nguyên. Nút `Xóa` mờ + tooltip khi không ở `Nháp`; backend luôn kiểm tra lại trạng thái và tham chiếu ngay tại thời điểm xóa, FE hiển thị Toast lỗi do backend trả về (EX11). Quy tắc chung với Khoá học, Học kỳ, Danh mục: chỉ `Nháp` được xóa. Sau khi xóa, cấp độ không còn hiển thị trong danh sách quản lý và không thể chọn mới ở bất kỳ đâu. Chỉ cấp độ `Công Khai` mới được gắn vào khóa học nên cấp độ `Nháp` thông thường không ở trạng thái đang được sử dụng (backend vẫn kiểm tra). |
| `REQ08` | Quyền sửa theo trạng thái | `Nháp`: sửa Tên, Mô tả, Mã cấp độ, ID. `Công Khai` / `Vô hiệu hóa`: **chỉ sửa Tên và Mô tả**; ID, Mã cấp độ chỉ đọc, backend từ chối request sửa (EX02, EX05). Cấp độ không thể quay về `Nháp`. Quy tắc chung với Khoá học, Học kỳ, Danh mục (xem `course_management.md` REQ10). |
| `EX01` | Ngoại lệ | Tên cấp độ mới bị bỏ trống hoặc chỉ chứa khoảng trắng → chặn tạo mới, dữ liệu không thay đổi, disable nút "+". Nếu Enter thì hiện thông báo "Tên cấp độ không được bỏ trống". |
| `EX02` | Ngoại lệ | Cố sửa Mã cấp độ khi cấp độ đã rời `Nháp` (`Công Khai` / `Vô hiệu hóa`, qua UI hoặc gọi API trực tiếp) → hệ thống từ chối, field Mã cấp độ chỉ đọc, giữ nguyên giá trị. Mã cấp độ trùng với cấp độ khác **không** phải lỗi. |
| `EX03` | Ngoại lệ | Khi sửa lúc `Nháp`, ID sai định dạng (không đúng 2 chữ số) hoặc trùng (kể cả trùng ID của cấp độ đã xóa mềm) → hệ thống từ chối lưu, hiển thị lỗi tương ứng, giữ nguyên ID cũ. |
| `EX04` | Ngoại lệ | Gọi API hoặc thao tác trực tiếp đổi trạng thái không hợp lệ (từ `Công Khai`/`Vô hiệu hóa` về `Nháp`, hoặc từ `Nháp` sang thẳng `Vô hiệu hóa`) → hệ thống từ chối, hiển thị thông báo lỗi (ví dụ: `"Không thể chuyển sang trạng thái này."`), giữ nguyên trạng thái hiện tại. UI chỉ hiển thị lựa chọn hợp lệ: `Nháp` chỉ có `Công Khai`; `Công Khai` chỉ có `Vô hiệu hóa`; `Vô hiệu hóa` chỉ có `Công Khai`. |
| `EX05` | Ngoại lệ | Cố sửa ID khi cấp độ có trạng thái khác `Nháp` → hệ thống từ chối, field ID ở trạng thái chỉ đọc/disable. |
| `EX06` | Ngoại lệ | ID hợp lệ tại thời điểm nhập nhưng bị đối tượng khác dùng ngay trước lúc backend lưu (race condition) → backend từ chối tại bước kiểm tra cuối, không lưu, giữ nguyên trạng thái và hiển thị lỗi. |
| `EX07` | Ngoại lệ | Trong popup Kích hoạt công khai cấp độ, ID sai định dạng/trùng, hoặc Mã cấp độ (khi đang trống) để trống → hiển thị lỗi tương ứng ngay trong popup, vô hiệu hóa nút `Công khai cấp độ`, giữ cấp độ ở trạng thái hiện tại. |
| `EX08` | Ngoại lệ | CD bấm `Hủy` hoặc đóng popup Kích hoạt công khai cấp độ sau khi đã sửa ID hoặc nhập Mã cấp độ → không lưu các thay đổi đó, ID và Mã cấp độ giữ nguyên như trước khi mở popup, trạng thái vẫn là `Nháp`. |
| `EX09` | Ngoại lệ | Cấp độ không còn ở trạng thái `Công Khai` (bao gồm cả trường hợp đã bị xóa) tại thời điểm feature `Quản lý danh mục` lưu lựa chọn mới → từ chối liên kết mới và yêu cầu tải lại danh sách cấp độ. |
| `EX10` | Ngoại lệ | Người dùng không có quyền nhưng mở URL hoặc gửi request trực tiếp (kể cả thao tác xóa) → từ chối thao tác và không thay đổi dữ liệu. |
| `EX11` | Ngoại lệ | Xóa cấp độ `Công Khai` / `Vô hiệu hóa` (gọi API trực tiếp) → backend từ chối, trả lỗi `Chỉ xóa được cấp độ ở trạng thái Nháp.`. Xóa cấp độ `Nháp` đang được khóa học tham chiếu (tham chiếu phát sinh ngay trước lúc backend xóa) → backend từ chối, trả lỗi `Cấp độ đang được sử dụng, không thể xóa.`. FE hiển thị Toast lỗi với nội dung backend trả về, dữ liệu không đổi. |
| `EX12` | Ngoại lệ | Sửa Tên cấp độ thành trống hoặc chỉ chứa khoảng trắng (ở bất kỳ trạng thái nào) → từ chối lưu, báo lỗi tại field Tên, giữ nguyên Tên cũ. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Thêm nhanh cấp độ hợp lệ | High | Có | Flow 1 | — | `A01.04`, `A01.05`, `A04.01`, `A04.06` |
| `TC02` | Case 2: Chặn thêm khi Tên trống | High |  | EX01 | — | `A04.01` |
| `TC03` | Case 3: Sửa Tên/Mô tả ở mọi trạng thái | High | Có | Flow 2 / REQ03 | — | `A01.02`, `A01.04`, `A04.01`, `A04.06` |
| `TC04` | Case 4: Mã cấp độ được trùng, bị khóa sau khi Công Khai | High |  | Flow 2 / EX02 / REQ04 | — | `A01.04`, `A04.01`, `A04.06` |
| `TC05` | Case 5: Sửa ID khi đang Nháp | High |  | Flow 2 / EX03 / REQ01 | — |  |
| `TC06` | Case 6: Khóa ID sau khi rời Nháp | High |  | EX05 / REQ01 | — | `A04.01` |
| `TC07` | Case 7: Popup yêu cầu Mã cấp độ khi đang trống | High |  | Flow 3 / EX07 / REQ05 | — | `A01.04`, `A04.01`, `A04.06`, `A04.10` |
| `TC08` | Case 8: Công khai cấp độ khi ID và Mã cấp độ đã sẵn hợp lệ | High | Có | Flow 3 / REQ05 | — | `A01.04`, `A01.05`, `A04.01`, `A04.06` |
| `TC09` | Case 9: Hủy popup Kích hoạt công khai cấp độ | High |  | EX08 | — | `A01.04`, `A01.05`, `A04.01`, `A04.06` |
| `TC10` | Case 10: Rule chuyển trạng thái | High |  | Flow 4 / EX04 / REQ02 | — | `A01.05` |
| `TC11` | Case 11: Không cho chọn mới cấp độ Vô hiệu hóa | High |  | EX09 / REQ06 | — | `A04.01` |
| `TC12` | Case 12: Xóa cấp độ chưa được sử dụng | High | Có | Flow 5 / REQ07 | — | `A04.01` |
| `TC13` | Case 13: Tìm kiếm theo Mã cấp độ và Mô tả | Medium |  | UI | — | `A01.04`, `A04.01`, `A04.06` |
| `TC14` | Case 14: Kiểm tra quyền truy cập trực tiếp | High |  | EX10 / Ràng buộc quyền | — | `A04.01` |
| `TC15` | Case 15: Chặn xóa cấp độ Công Khai / Vô hiệu hóa | High | Có | Flow 5 / REQ07 / EX11 | — | `A01.05`, `A04.01` |
| `TC16` | Case 16: Chặn chuyển Nháp → Vô hiệu hóa | High |  | EX04 / REQ02 | — | `A01.05` |
| `TC17` | Case 17: Backend chặn xóa khi đang được sử dụng | High |  | EX11 / REQ07 | — | `A04.01` |
| `TC18` | Case 18: Khóa học đã xóa mềm không tính là đang sử dụng | Medium |  | REQ07 | — | `A03.01`, `A04.01` |
| `TC19` | Case 19: Vô hiệu hóa → Công Khai không mở popup | High |  | Flow 4 / REQ05 | — | `A01.04`, `A01.05`, `A04.01`, `A04.06` |
| `TC20` | Case 20: ID trùng ID cấp độ đã xóa mềm | Medium |  | EX03 / REQ01 | — |  |
| `TC21` | Case 21: Sửa Tên thành trống | Medium |  | EX12 | — | `A04.01` |
| `TC22` | Case 22: Tìm kiếm không phân biệt hoa thường | Medium |  | UI | — | `A04.01` |
| `TC23` | Case 23: Mã cấp độ tự cắt khoảng trắng đầu/cuối | Low |  | REQ04 | — | `A01.04`, `A04.01`, `A04.06` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (7): `A03.01`, `A03.02`, `A04.04`, `A04.05`, `A04.06`, `A04.07`, `A04.09`
- Frame Figma chưa có requirement (2): `CD-CDO-010010`, `CD-CDO-010012`
- Thiếu prototype link đi vào (2): `CD-CDO-010010`, `CD-CDO-010012`
- Testcase không trỏ REQ (2): `TC13`, `TC22`
- REQ/EX chưa có testcase (2): `REQ08`, `EX06`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
