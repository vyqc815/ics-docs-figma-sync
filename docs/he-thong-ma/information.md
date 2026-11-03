# Học Kỳ

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-030100` | Học kỳ / Thông tin | `/hoc-ky/thong-tin` | `CD-KH-030100-DK` | QC |

Requirement: `course_management/semester/information/information.md` — Học Kỳ (tiền tố `CM-IN`).

## 2. Luồng

- `FLOW01` Thêm mới / Nhân bản — 
- `FLOW02` Nháp → Công khai (có popup) — 
- `FLOW03` Đổi trạng thái còn lại — 
- `FLOW04` Xoá học kỳ — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-KH-030104` | Chưa có học kỳ | Trạng thái | CD-KH-030100 | CD-KH-030100 | — | `/hoc-ky/thong-tin?state=CD-KH-030104` | Figma | trung bình |
| `CD-KH-030110` | Popup thêm kỳ vào Tổng ôn | Popup | CD-KH-030100 | CD-KH-030100 | CD-KH-030100, CD-KH-030104 | `/hoc-ky/thong-tin?popup=CD-KH-030110` | Figma | cao |
| `CD-KH-030120` | Popup bỏ kỳ khỏi Tổng ôn | Popup | CD-KH-030100 | CD-KH-030100 | CD-KH-030100, CD-KH-030104 | `/hoc-ky/thong-tin?popup=CD-KH-030120` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1.1: Danh sách kỳ (bên phải)

Frame: `CD-KH-030100` (tool đoán:CD-KH-030100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 1.2: Tab Thông tin (bên trái)

Frame: `CD-KH-030100` (tool đoán:CD-KH-030100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | ten-mo-ta-dau-tab |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.02` | ten-hoc-ky | `Atom/Label`  | `I3004:49766;3004:58620` Atom/Label | — |  | `TC01`, `TC02`, `TC03`, `TC04` | Khớp | QC |
| `A02.03` | ma-hoc-ky | `Atom/Label`  | `I3004:49712;3004:58620` Atom/Label | — |  | `TC04` | Khớp | QC |
| `A02.04` | id-hoc-ky | `Atom/Label`  | `I3004:49872;3004:58620` Atom/Label | — | governed-by `REQ02` | `TC05`, `TC5b`, `TC06` | Khớp | QC |
| `A02.05` | code | `Atom/Label`  | `I3004:49928;3004:58620` Atom/Label; `I3004:49928;3004:58620` Atom/Label | — |  | `TC01`, `TC04` | Khớp | QC |
| `A02.06` | so-buoi-hoc | `Atom/Label`  | `I3004:50030;3004:58620` Atom/Label | — |  | `TC04` | Khớp | QC |
| `A02.07` | trinh-do-danh-muc |  |  | — |  | `TC04` | Chưa khớp tự động | QC |
| `A02.08` | data-token-type-text-data-version-so |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.09` | tong-on |  | `1185:2854` Tổng ôn | — |  | `TC03`, `TC04`, `TC5b`, `TC09`, `TC11` | Khớp | QC |

### `A03` Trang 1.3: Popup Kích hoạt công khai học kỳ

Frame: `CD-KH-030110`, `CD-KH-030120` (tool đoán:CD-KH-030104) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | tieu-de | `Popup/Header`  | `I2527:167869;2514:153353` Tiêu đề | — |  |  | Khớp | QC |
| `A03.02` | hien-thi |  |  | — |  | `TC01`, `TC08`, `TC10`, `TC11` | Chưa khớp tự động | QC |
| `A03.03` | o-id-hoc-ky |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.04` | thong-bao-duoi-o-id |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.05` | luu-y |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.06` | nut | `Atom/Button` Type=Secondary, Size=Medium; `Popup/Footer` Type=Hai nút | `2527:167876` Popup/Footer; `I2527:167876;2514:153361` Atom/Button | — |  |  | Khớp | QC |

### `A04` Popup xoá học kỳ

Frame: `CD-KH-030100` (tool đoán:CD-KH-030100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Popup Nhân bản học kỳ

Frame: `CD-KH-030104`, `CD-KH-030110`, `CD-KH-030120` (tool đoán:CD-KH-030100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | tieu-de | `Popup/Header`  | `I2527:167869;2514:153353` Tiêu đề | — |  |  | Khớp một phần | QC |
| `A05.02` | noi-dung | `ICON MENU`  | `I6006:129240;4901:220701;2245:87904` Icon | — |  | `TC03`, `TC04`, `TC08` | Khớp | QC |
| `A05.03` | nut |  | `6006:129340` Nút | — |  |  | Khớp | QC |
| `A05.04` | toast |  |  | — |  | `TC04`, `TC06`, `TC16` | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `CD-KH-030100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `2177:28953` Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | molecule-field | `Molecule/Field`  | `3004:49766` Molecule/Field | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-button | `Atom/Button` Type=Outlined Icon, Size=Small | `1185:2855` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | bo-loc-hoc-ky-cap-do | `DD/Molecule/Trigger` Size=XS, State=Default | `5614:58982` Bộ lọc · Học kỳ (cấp độ) | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-icon-button | `Atom/Icon Button`  | `2860:16133` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | mouse-click |  | `2860:16134` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | atom-status | `Atom/Status` Size=S | `2860:27377` Atom/Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | dd-organism-menu-panel | `DD/Organism/Menu Panel` Type=Action | `6006:130414` DD/Organism/Menu Panel | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | add-new-bar-them-moi | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `2860:16151` Add New Bar · Thêm mới | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | sidebar-menu-cd | `MENU - CD`  | `4915:255632` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | account | `ACCOUNT` Size=Default | `2860:13689` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | component-2 | `Switch Center`  | `4273:160638` Component 2 | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Xoá mềm & ràng buộc đang sử dụng | Không xoá vật lý; dữ liệu con cũng xoá mềm. **Chỉ học kỳ `Nháp` được xoá**; học kỳ `Công khai` / `Vô hiệu` không được xoá (quy tắc chung: chỉ `Nháp` được xoá; EX08). Chỉ xoá được khi khoá học đang `Nháp`. Học kỳ `Nháp` chỉ được xoá khi **chưa được sử dụng** (không nằm trong Tổng ôn của học kỳ khác, không được lớp học sử dụng). Học kỳ **đang được sử dụng thì không được xoá, chỉ được chuyển sang `Vô hiệu`**; nơi đang dùng giữ nguyên. BE kiểm tra tham chiếu và xoá mềm trong cùng một giao dịch (EX07). Khi xoá cả khoá học, ràng buộc tương tự áp dụng ở cấp khoá học (xem `course_management.md` REQ08). |
| `REQ02` | ID học kỳ | 12 chữ số `CCAALLMMMBBB`: 9 số đầu = ID khoá học (`course_management.md` REQ06), `BBB` = số thứ tự học kỳ trong khoá (`001`–`999`), duy nhất trong khoá học (tính cả học kỳ đã xoá mềm) nên ID 12 số duy nhất toàn hệ thống. **Rule mặc định khi hệ thống tạo (Thêm mới/Nhân bản):** `BBB` = `BBB` lớn nhất đã dùng trong khoá + 1 (ví dụ khoá `100302001` → kỳ đầu `100302001001`, tiếp theo `100302001002`...). Nút làm mới trong popup lấy `BBB` nhỏ nhất chưa dùng. **CD nhập tay:** chỉ sửa `BBB`, đúng 3 chữ số và chưa dùng trong khoá. `BBB` sửa được khi `Nháp`, khoá vĩnh viễn khi rời `Nháp`. **Phần đầu `CCAALLMMM` luôn theo ID khoá học hiện tại:** khi khoá học còn `Nháp` và ID khoá đổi (đổi Danh mục / Cấp độ / `MMM`), ID mọi học kỳ của khoá (kể cả học kỳ đã `Công khai` / `Vô hiệu`) tự đồng bộ phần đầu, `BBB` giữ nguyên; Tổng ôn và lớp học tham chiếu theo bản ghi nên không bị ảnh hưởng. Hết `BBB` (đã dùng tới `999`) thì từ chối tạo / nhân bản, Toast `Đã hết ID học kỳ khả dụng trong khoá học.`. BE luôn kiểm tra lại tính duy nhất ngay lúc lưu. |
| `REQ03` | Nguyên tử khi công khai | Lưu ID và chuyển sang `Công khai` phải nằm trong cùng một giao dịch. |
| `REQ04` | Phạm vi dùng theo trạng thái | Chỉ học kỳ `Công khai` được dùng ở nơi khác; `Nháp`/`Vô hiệu` không hiển thị để chọn mới ở nơi khác. Học kỳ chuyển sang `Vô hiệu` khi đang được dùng (Tổng ôn đã gắn, lớp học đã sinh dữ liệu) thì các liên kết đã có vẫn giữ nguyên. |
| `REQ05` | Quyền sửa theo trạng thái | Chỉ sửa được khi khoá học `Nháp`. Học kỳ `Nháp`: sửa toàn bộ (Thông tin, Tổng ôn, Bài học, Kiểm tra, BTVN, bộ câu hỏi). Học kỳ `Công khai` / `Vô hiệu`: **chỉ sửa Tên, Mô tả (đầu tab), Tên học kỳ**; còn lại chỉ đọc, kể cả chi tiết bên trong (bài học, bài kiểm tra, bộ câu hỏi, BTVN). Đổi trạng thái học kỳ vẫn được ở mọi trạng thái khoá học. BE kiểm tra trạng thái học kỳ và khoá học với mọi request ghi (EX09). |
| `REQ06` | Nhân bản học kỳ (deep clone) | Chỉ khi khoá học `Nháp`; học kỳ nguồn ở mọi trạng thái. Bản sao: Tên học kỳ + ` (Bản sao)`, `BBB` mới theo REQ02, trạng thái `Nháp`, nằm cuối danh sách, được chọn. Sao chép **toàn bộ**: mọi field tab Thông tin; Tổng ôn (giữ nguyên các học kỳ được tham chiếu); bài học (thông tin, nhóm + nội dung, tài nguyên — file sao chép thành file mới, link giữ URL —, liên kết kiến thức / kỹ năng, Mã bài học sinh lại theo `BBB` học kỳ mới (`semester/lesson/lesson.md` REQ05), 3 số cuối giữ nguyên); BTVN và bộ câu hỏi của từng bài học (tạo bản ghi câu hỏi mới); bài kiểm tra (thông tin, thứ tự, ID 10 số mới) và bộ câu hỏi; tick Lộ trình (S4) của các bài học. Không sao chép: lớp học / lịch / kết quả làm bài, tham chiếu từ học kỳ khác vào học kỳ nguồn (Tổng ôn nơi khác vẫn trỏ học kỳ nguồn). Một giao dịch, lỗi thì rollback (EX10). Nhân bản cả khoá học xem `course_management.md` REQ11. |
| `EX01` | Ngoại lệ | Xoá học kỳ cuối cùng → khu vực nội dung (3 tab) hiển thị trạng thái không có dữ liệu, ô "Thêm mới" vẫn hiển thị. |
| `EX02` | Ngoại lệ | Lưu tự động thất bại (lỗi mạng/server) → hiển thị Toast lỗi, giá trị field giữ nguyên theo input CD đã nhập (không rollback), reload lại vẫn là giá trị cũ. |
| `EX03` | Ngoại lệ | Sửa ID học kỳ khi không phải `Nháp` hoặc sửa field chỉ đọc (kể cả gọi API trực tiếp) → backend từ chối, dữ liệu không đổi. |
| `EX04` | Ngoại lệ | `BBB` sai định dạng (không đúng 3 chữ số `001`–`999`) hoặc trùng `BBB` của học kỳ khác trong cùng khoá học (kể cả đã xoá mềm), khi sửa ở tab Thông tin hoặc trong popup → từ chối lưu, báo lỗi tại field/popup, giữ nguyên ID cũ; riêng popup tắt nút `Công khai học kỳ`. |
| `EX05` | Ngoại lệ | ID hợp lệ lúc nhập nhưng bị dùng ngay trước lúc BE lưu (race condition) → BE từ chối ở bước kiểm tra cuối, giữ `Nháp`, giữ popup mở. |
| `EX06` | Ngoại lệ | Tên học kỳ trống hoặc chỉ có khoảng trắng → chặn tạo/lưu. |
| `EX07` | Ngoại lệ | Xoá học kỳ đang được sử dụng (gọi API trực tiếp, hoặc học kỳ vừa được thêm vào Tổng ôn/lớp học ngay trước lúc BE xoá) → BE từ chối, trả lỗi `Học kỳ đang được sử dụng, không thể xoá. Vui lòng chuyển sang Vô hiệu.`, dữ liệu không đổi. |
| `EX08` | Ngoại lệ | Xoá học kỳ `Công khai` / `Vô hiệu` (kể cả gọi API trực tiếp) → BE từ chối, trả lỗi `Chỉ xoá được học kỳ ở trạng thái Nháp.`, dữ liệu không đổi. |
| `EX09` | Ngoại lệ | Sửa field ngoài Tên / Mô tả / Tên học kỳ khi học kỳ `Công khai` / `Vô hiệu`; hoặc thêm, xoá, nhân bản, kéo thả, sửa bất kỳ dữ liệu học kỳ nào khi khoá học không ở `Nháp` (kể cả gọi API trực tiếp) → UI chỉ đọc; BE từ chối, trả lỗi `Học kỳ / khoá học không ở trạng thái Nháp, không thể chỉnh sửa.`, dữ liệu không đổi. |
| `EX10` | Ngoại lệ | Nhân bản học kỳ thất bại (lỗi mạng/server ở bất kỳ bước sao chép nào) → BE rollback toàn bộ, không tạo học kỳ/bài học/bài kiểm tra bản sao dở dang; Toast `Có Lỗi Xảy Ra`, học kỳ nguồn không đổi. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Chọn học kỳ và hiển thị | High | Có | Trang 1.1 | — | `A02.02`, `A02.05`, `A03.02` |
| `TC02` | Case 2: Thêm mới | High | Có | Flow 1 | — | `A02.02` |
| `TC03` | Case 3: Nhân bản | High | Có | Flow 1 / REQ06 | — | `A02.02`, `A02.09`, `A05.02` |
| `TC04` | Case 4: Quyền sửa theo trạng thái | High |  | Trang 1.2 / REQ05 | — | `A02.02`, `A02.03`, `A02.05`, `A02.06`, `A02.07`, `A02.09`, `A05.02`, `A05.04` |
| `TC05` | Case 5: Sửa ID học kỳ khi Nháp | High |  | REQ02 / EX04 | — | `A02.04` |
| `TC5b` | Case 5b: ID học kỳ đồng bộ theo ID khoá học | High |  | REQ02 | — | `A02.04`, `A02.09` |
| `TC06` | Case 6: Nháp → Công khai (popup) | High | Có | Flow 2 | — | `A02.04`, `A05.04` |
| `TC07` | Case 7: Rule đổi trạng thái | High |  | Flow 3 | — |  |
| `TC08` | Case 8: Xoá học kỳ chưa được sử dụng | High | Có | Flow 4 / EX01 / REQ01 | — | `A03.02`, `A05.02` |
| `TC09` | Case 9: Tổng ôn và kéo thả | Medium |  | Trang 1.1 / 1.2 | — | `A02.09` |
| `TC10` | Case 10: Quyền và phạm vi dùng | High |  | REQ04 / Ràng buộc | — | `A03.02` |
| `TC11` | Case 11: Chặn xoá học kỳ nằm trong Tổng ôn | High | Có | Flow 4 / REQ01 | — | `A02.09`, `A03.02` |
| `TC12` | Case 12: Không xoá học kỳ Vô hiệu | High |  | Flow 4 / REQ01 / EX08 | — |  |
| `TC13` | Case 13: BE chặn xoá học kỳ đang được sử dụng | High |  | EX07 / REQ01 | — |  |
| `TC14` | Case 14: Không xoá học kỳ Công khai | High |  | Flow 4 / EX08 / REQ01 | — |  |
| `TC15` | Case 15: Khoá học Công khai khoá toàn bộ học kỳ | High |  | REQ05 / EX09 | — |  |
| `TC16` | Case 16: Nhân bản học kỳ thất bại | Medium |  | EX10 / REQ06 | — | `A05.04` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (8): `A02.01`, `A02.07`, `A02.08`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A05.04`
- Frame Figma chưa có requirement (3): `CD-KH-030104`, `CD-KH-030110`, `CD-KH-030120`
- Phân loại cần design duyệt (1): `CD-KH-030104`
- Thiếu prototype link đi vào (1): `CD-KH-030104`
- Testcase không trỏ REQ (2): `TC01`, `TC09`
- REQ/EX chưa có testcase (5): `REQ03`, `EX02`, `EX03`, `EX05`, `EX06`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
