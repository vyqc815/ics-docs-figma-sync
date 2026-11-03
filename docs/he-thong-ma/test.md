# Học Kỳ - Tab Kiểm tra

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-030300` | Học kỳ / Kiểm tra | `/hoc-ky/kiem-tra` | `CD-KH-030300-DK` | QC |

Requirement: `course_management/semester/test/test.md` — Học Kỳ - Tab Kiểm tra (tiền tố `CM-TE`).

## 2. Luồng

- `FLOW01` Xem danh sách bài kiểm tra — `REQ01`
- `FLOW02` Thêm bài kiểm tra — `REQ02`
- `FLOW03` Sắp xếp bài kiểm tra — `REQ03`
- `FLOW04` Xoá bài kiểm tra — `REQ05`
- `FLOW05` Sửa thông tin bài kiểm tra — `REQ06`
- `FLOW06` Soạn bộ câu hỏi — `REQ07`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-KH-030310` | Popup cấu hình bài kiểm tra | Popup | CD-KH-030300 | CD-KH-030300 | CD-KH-030300 | `/hoc-ky/kiem-tra?popup=CD-KH-030310` | QC | cao |
| `CD-KH-030346` | Generate · Lỗi | Trạng thái | CD-KH-030300 | CD-KH-030300 | — | `/hoc-ky/kiem-tra?state=CD-KH-030346` | Figma | thấp |
| `CD-KH-030350` | Generate · Lỗi (tab Chọn kiến thức & kỹ năng) | Trạng thái | CD-KH-030300 | CD-KH-030300 | — | `/hoc-ky/kiem-tra?state=CD-KH-030350` | Figma | trung bình |

## 4. Khu vực và item

### `A01` Danh sách bài kiểm tra

Frame: `CD-KH-030300` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | card-bai-kiem-tra |  |  | — | opens `A01` |  | Chưa khớp tự động | QC |
| `A01.02` | chip-thoi-gian | `Atom/Info Badge` Type=Duration | `I2860:37178;1207:1810` 30m | — |  | `TC01` | Khớp | QC |
| `A01.03` | chip-so-cau |  |  | — |  | `TC01` | Chưa khớp tự động | QC |
| `A01.04` | them-bai-kiem-tra-moi | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `2702:48181` Add New Bar · Thêm bài kiểm tra mới | — | opens `A01` |  | Khớp | QC |
| `A01.05` | keo-tha |  |  | — |  | `TC05` | Chưa khớp tự động | QC |
| `A01.06` | xoa-bai |  |  | — |  | `TC05` | Chưa có thiết kế | QC |
| `A01.07` | thu-tu-mac-dinh |  |  | — |  |  | Chưa khớp tự động | QC |

### `A02` Popup bài kiểm tra — Tab Thông tin

Frame: `CD-KH-030310` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tieu-de | `Atom/Label`  | `2911:43712` Atom/Label | — |  |  | Khớp | QC |
| `A02.02` | do-kho | `Atom/Label`  | `2911:43717` Atom/Label | — |  | `TC07` | Khớp | QC |
| `A02.03` | mo-ta | `Atom/Label`  | `2911:43722` Atom/Label | — |  | `TC08` | Khớp | QC |
| `A02.04` | thoi-gian-lam-bai |  | `1496:16365` Thời gian làm bài * | — |  |  | Khớp | QC |
| `A02.05` | so-cau-hoi | `Atom/Label`  | `2911:43727` Atom/Label | — |  | `TC08` | Khớp | QC |
| `A02.06` | diem-dat | `Atom/Label`  | `2911:43737` Atom/Label | — |  | `TC09` | Khớp | QC |
| `A02.07` | hop-luu-y | `Atom/Alert` Type=Lưu ý | `2808:43043` Atom/Alert | — |  |  | Khớp | QC |
| `A02.08` | dong | `Atom/Button` Type=Primary, Size=Medium | `I2527:167935;2514:153371` Atom/Button | — |  | `TC07` | Khớp | QC |

### `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi

Frame: `CD-KH-030346`, `CD-KH-030350` (tool đoán:CD-KH-030346, CD-KH-030350) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | nut-thao-tac |  |  | — |  |  | Chưa có thiết kế | QC |
| `A03.02` | the-tong-quan |  |  | — |  |  | Chưa có thiết kế | QC |
| `A03.03` | bang-cau-hoi |  |  | — |  |  | Chưa có thiết kế | QC |
| `A03.04` | them-sua-cau-import-export-generate-soat |  |  | — |  |  | Chưa có thiết kế | QC |

### `A04` Toast phản hồi CRUD

Frame: `CD-KH-030300` (tool đoán:CD-KH-030300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | thanh-cong |  |  | — |  | `TTC01` | Chưa khớp tự động | QC |
| `A04.02` | canh-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.03` | loi | `Card Menu v2 (Test)` Type=Menu phụ, State=Default | `I4915:255361;4901:220694;2245:87908` Label | — |  |  | Khớp | QC |

### `F01` (ngoài Body)

Frame: `CD-KH-030300` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | component-2 | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `497:18281` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | component-3 | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `497:18282` Component 3 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `497:18283` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-id-badge | `Atom/ID Badge` Type=10-digit, Size=20H | `2003:26053` Atom/ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-info-badge | `Atom/Info Badge` Type=Duration | `2860:37178` Atom/Info Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-icon-button | `Atom/Icon Button`  | `2860:37202` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | mouse-click |  | `2860:37209` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | bo-loc-hoc-ky-cap-do | `DD/Molecule/Trigger` Size=XS, State=Default | `5614:59006` Bộ lọc · Học kỳ (cấp độ) | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | atom-status | `Atom/Status` Size=S | `2860:37016` Atom/Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | dd-organism-menu-panel | `DD/Organism/Menu Panel` Type=Action | `6006:130496` DD/Organism/Menu Panel | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | add-new-bar-them-moi | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `2860:37040` Add New Bar · Thêm mới | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | account | `ACCOUNT` Size=Default | `2860:13738` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | component-2 | `Switch Center`  | `4273:160653` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | sidebar-menu-cd | `MENU - CD`  | `4915:255361` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Danh sách | Bài kiểm tra của học kỳ đang chọn theo thứ tự đã sắp; card có ID 10 số, tên, chip thời gian, chip số câu, nút `>`. |
| `REQ02` | Thêm bài | Chỉ khi học kỳ `Nháp`; nhập tên ở ô cuối danh sách; ID 10 số hệ thống tự sinh, duy nhất; bài mới ở cuối. |
| `REQ03` | Sắp xếp | Kéo thả khi học kỳ `Nháp`; thứ tự dùng ở menu Bài Tập Về Nhà và lớp học. |
| `REQ04` | Quyền sửa theo trạng thái học kỳ / khoá học | Danh sách bài (thêm, sắp xếp, xoá), tab Thông tin và bộ câu hỏi chỉ sửa khi học kỳ `Nháp` **và** khoá học `Nháp`; học kỳ hoặc khoá học `Công khai` / `Vô hiệu` chỉ đọc toàn bộ (xem `course_management.md` REQ10). Nhân bản học kỳ / khoá học sao chép toàn bộ bài kiểm tra và bộ câu hỏi. |
| `REQ05` | Xoá bài | Xoá mềm bài và bộ câu hỏi, qua popup xác nhận, chỉ khi học kỳ `Nháp` và khoá học `Nháp`. |
| `REQ06` | Thông tin bài | Tiêu đề, Độ khó (1 - Dễ / Bình thường / Khó), Thời gian làm bài (giờ : phút : giây, > 0) bắt buộc; Mô tả, Điểm đạt (0 ≤ Điểm đạt ≤ 10, thang 10) không bắt buộc; Số câu hỏi tự tính, chỉ đọc; không có Tổng điểm; lưu tự động từng field. |
| `REQ07` | Bộ câu hỏi | Soạn trong tab Bộ Câu Hỏi của popup, cùng quy tắc `homework-test.md`; dùng chung dữ liệu với menu Bài Tập Về Nhà → tab Kiểm tra. |
| `EX01` | Ngoại lệ | Tên bài kiểm tra mới trống hoặc chỉ có khoảng trắng → không tạo bài. |
| `EX02` | Ngoại lệ | Thêm, sắp xếp, xoá bài, sửa tab Thông tin hoặc thêm / sửa / xoá / import câu hỏi khi học kỳ hoặc khoá học không ở `Nháp` (kể cả gọi API trực tiếp) → backend từ chối; dữ liệu không đổi. |
| `EX03` | Ngoại lệ | Field tab Thông tin sai (Tiêu đề trống, Thời gian = 0, phút / giây > 59, Điểm đạt < 0 hoặc > 10) → báo lỗi dưới field, không lưu field đó. |
| `EX04` | Ngoại lệ | Lưu tự động, thêm, xoá, sắp xếp thất bại do backend / network → Toast `Có Lỗi Xảy Ra`; dữ liệu trên server giữ giá trị cũ. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Xem danh sách bài kiểm tra | High | Có | Flow 1 / REQ01 | `A01` | `A01.02`, `A01.03` |
| `TC02` | Case 2: Thêm bài kiểm tra | High | Có | Flow 2 / REQ02 | `A01` |  |
| `TC03` | Case 3: Tên trống | Medium |  | EX01 / REQ02 | `A01` |  |
| `TC04` | Case 4: Kéo thả đổi thứ tự | Medium |  | Flow 3 / REQ03 | `A01` |  |
| `TC05` | Case 5: Học kỳ Công khai chỉ đọc danh sách | High |  | EX02 / REQ04 | `A01` | `A01.05`, `A01.06` |
| `TC06` | Case 6: Xoá bài kiểm tra | Medium |  | Flow 4 / REQ05 | `A01` |  |
| `TC07` | Case 7: Mở và sửa thông tin | High | Có | Flow 5 / REQ06 | `A02` | `A02.02`, `A02.08` |
| `TC08` | Case 8: Số câu hỏi tự tính | High |  | REQ06 | `A02` | `A02.03`, `A02.05` |
| `TC09` | Case 9: Điểm đạt vượt thang 10 | Medium |  | EX03 / REQ06 | `A02` | `A02.06` |
| `TC10` | Case 10: Thời gian bằng 0 | Medium |  | EX03 / REQ06 | `A02` |  |
| `TC11` | Case 11: Thông tin chỉ đọc khi học kỳ Công khai | High |  | EX02 / REQ04 | `A02` |  |
| `TC12` | Case 12: Soạn câu trong popup | High | Có | Flow 6 / REQ07 | `A03` |  |
| `TC13` | Case 13: Không sửa câu khi học kỳ Công khai | High |  | REQ04 / REQ07 | `A03` |  |
| `TC14` | Case 14: Đồng bộ với menu Bài Tập Về Nhà | Medium |  | REQ07 | `A03` |  |
| `TTC01` | Toast Case 1: Thành công | Medium |  | Ràng buộc Toast CRUD | `A04` | `A04.01` |
| `TTC02` | Toast Case 2: Lỗi lưu tự động | High |  | EX04 / Ràng buộc Toast CRUD | `A04` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- `A01` Khác Figma CD-KH-030300: card chưa có menu `⋮` để xoá bài.
- `A02` Khác Figma CD-KH-030310: ô `Số câu hỏi` đang vẽ như ô nhập, requirement là chỉ đọc; ô `Tổng điểm` trên Figma cần bỏ. Dòng Lưu ý ghi `Số câu hỏi và tổng điểm có thể được cập nhật`.
- `A03` Khác Figma: bộ câu hỏi đang vẽ thành màn riêng `CD-KH-030340` (mở từ `>`); requirement đặt trong tab `Bộ Câu Hỏi` của popup (**UI cần bổ sung**).
- Chưa khớp tự động (6): `A01.01`, `A01.03`, `A01.05`, `A01.07`, `A04.01`, `A04.02`
- Frame Figma chưa có requirement (2): `CD-KH-030346`, `CD-KH-030350`
- Phân loại cần design duyệt (2): `CD-KH-030346`, `CD-KH-030350`
- Thiếu prototype link đi vào (2): `CD-KH-030346`, `CD-KH-030350`
- Testcase không trỏ REQ (1): `TTC01`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
