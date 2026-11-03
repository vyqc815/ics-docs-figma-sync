# Học Kỳ - Tab Bài học

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-030200` | Học kỳ / Bài học | `/hoc-ky/bai-hoc` | `CD-KH-030200-DK` | QC |

Requirement: `course_management/semester/lesson/lesson.md` — Học Kỳ - Tab Bài học (tiền tố `CM-LE`).

## 2. Luồng

- `FLOW01` Mở chi tiết — 
- `FLOW02` Chỉnh sửa & lưu gộp — 
- `FLOW03` Tài nguyên — 
- `FLOW05` Thêm kiến thức / kỹ năng vào bài — 
- `FLOW04` Tự tạo/xoá bài học theo "Số buổi" ở Tổng quan (S2) — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-KH-030210` | Popup chi tiết bài học (1) | Popup | CD-KH-030200 | CD-KH-030200 | CD-KH-030200, CD-KH-030230, CD-KH-030231, CD-KH-030240, CD-KH-030250 | `/hoc-ky/bai-hoc?popup=CD-KH-030210` | Figma | cao |
| `CD-KH-030211` | Chưa gắn kiến thức, kỹ năng | Trạng thái | CD-KH-030210 | CD-KH-030200 | — | `/hoc-ky/bai-hoc?state=CD-KH-030211` | Figma | trung bình |
| `CD-KH-030230` | Popup chi tiết bài học (3) | Popup | CD-KH-030210 | CD-KH-030200 | CD-KH-030210, CD-KH-030231, CD-KH-030240, CD-KH-030250 | `/hoc-ky/bai-hoc?popup=CD-KH-030230` | Figma | thấp |
| `CD-KH-030231` | Từng mục trống | Trạng thái | CD-KH-030230 | CD-KH-030200 | — | `/hoc-ky/bai-hoc?state=CD-KH-030231` | Figma | trung bình |
| `CD-KH-030240` | Popup chi tiết bài học (4) | Popup | CD-KH-030210 | CD-KH-030200 | CD-KH-030210, CD-KH-030230, CD-KH-030231, CD-KH-030250 | `/hoc-ky/bai-hoc?popup=CD-KH-030240` | Figma | thấp |
| `CD-KH-030241` | Trống | Trạng thái | CD-KH-030200 | CD-KH-030200 | — | `/hoc-ky/bai-hoc?state=CD-KH-030241` | Figma | thấp |
| `CD-KH-030242` | Tab Kỹ năng | Trạng thái | CD-KH-030200 | CD-KH-030200 | — | `/hoc-ky/bai-hoc?state=CD-KH-030242` | Figma | thấp |
| `CD-KH-030243` | Trống | Trạng thái | CD-KH-030242 | CD-KH-030200 | — | `/hoc-ky/bai-hoc?state=CD-KH-030243` | Figma | thấp |
| `CD-KH-030244` | Popup Thêm kiến thức | Popup | CD-KH-030200 | CD-KH-030200 | — | `/hoc-ky/bai-hoc?popup=CD-KH-030244` | Figma | thấp |
| `CD-KH-030245` | Popup Thêm kỹ năng | Popup | CD-KH-030242 | CD-KH-030200 | — | `/hoc-ky/bai-hoc?popup=CD-KH-030245` | Figma | thấp |
| `CD-KH-030246` | Loại chưa có dữ liệu | Trạng thái | CD-KH-030245 | CD-KH-030200 | — | `/hoc-ky/bai-hoc?state=CD-KH-030246` | Figma | thấp |
| `CD-KH-030247` | Cụm chưa có kiến thức | Trạng thái | CD-KH-030244 | CD-KH-030200 | — | `/hoc-ky/bai-hoc?state=CD-KH-030247` | Figma | thấp |
| `CD-KH-030250` | Popup chi tiết bài học (bản đầy đủ) | Popup | CD-KH-030210 | CD-KH-030200 | CD-KH-030210, CD-KH-030230, CD-KH-030231, CD-KH-030240 | `/hoc-ky/bai-hoc?popup=CD-KH-030250` | Figma | thấp |

## 4. Khu vực và item

### `A01` Trang 1: Danh sách bài học (Tab Bài học)

Frame: `CD-KH-030200` (tool đoán:CD-KH-030200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Popup: Chi tiết bài học - Tab Thông tin

Frame: `CD-KH-030210`, `CD-KH-030230`, `CD-KH-030240`, `CD-KH-030250` (tool đoán:CD-KH-030210, CD-KH-030230, CD-KH-030240, CD-KH-030250) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tieu-de | `Liner Icon`  | `I2911:43802;2808:48144` Liner Icon | — |  |  | Khớp một phần | QC |
| `A02.02` | noi-dung | `Liner Icon`  | `I1076:4995;868:21213` Liner Icon | — |  |  | Khớp | QC |
| `A02.03` | nut | `Popup/Footer` Type=Hai nút | `2527:167888` Popup/Footer | — |  |  | Khớp | QC |

### `A03` Popup: Chi tiết bài học - Tab Nội dung

Frame: `CD-KH-030200` (tool đoán:CD-KH-030200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | them-nhom |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.02` | them-noi-dung |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.03` | gioi-han |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.04` | xoa |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.05` | keo-tha |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.06` | badge-tab |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.07` | 90-100 |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.08` | 80-90 |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.09` | 0-va-80 |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.10` | 00-00-00 |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A03.11` | 100 |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A04` Popup: Chi tiết bài học - Tab Tài nguyên

Frame: `CD-KH-030200` (tool đoán:CD-KH-030200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Popup: Chi tiết bài học - Tab Kiến thức

Frame: `CD-KH-030211`, `CD-KH-030244`, `CD-KH-030247` (tool đoán:CD-KH-030211, CD-KH-030244, CD-KH-030247) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A06` Popup: Chi tiết bài học - Tab Kỹ năng (mới — **UI cần bổ sung Figma**)

Frame: `CD-KH-030242`, `CD-KH-030245`, `CD-KH-030246` (tool đoán:CD-KH-030242, CD-KH-030245, CD-KH-030246) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `F01` (ngoài Body)

Frame: `CD-KH-030200` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `497:20715` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | component-2 | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `497:20716` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | component-3 | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `497:20717` Component 3 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-id-badge | `Atom/ID Badge` Type=10-digit, Size=20H | `2003:26066` Atom/ID Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | background-border | `Background+Border`  | `1076:6692` Background+Border | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-icon-button | `Atom/Icon Button`  | `2860:13064` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | mouse-click |  | `2860:13068` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | bo-loc-hoc-ky-cap-do | `DD/Molecule/Trigger` Size=XS, State=Default | `5614:58994` Bộ lọc · Học kỳ (cấp độ) | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | atom-status | `Atom/Status` Size=S | `2860:36843` Atom/Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | add-new-bar-them-moi | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `2860:36867` Add New Bar · Thêm mới | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | sidebar-menu-cd | `MENU - CD`  | `4915:255090` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | account | `ACCOUNT` Size=Default | `2860:13787` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | component-2 | `Switch Center`  | `4273:160668` Component 2 | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Danh sách chỉ xem | Không kéo-thả, không thêm/xoá thủ công. Thứ tự cố định theo 3 số cuối Mã bài học. Card không có nhãn cam, mũi tên. |
| `REQ02` | Icon 3 phần | Sáng khi số lượng phần đó > 0 (icon Kiến thức = số kiến thức + số bài kỹ năng), tối khi = 0. |
| `REQ03` | Nội dung dạng text | 1 loại nội dung text, nhóm → nội dung; tên bắt buộc; mô tả nội dung ≤ 500 ký tự; kéo-thả/xoá/badge theo mục 1. |
| `REQ04` | Không sửa kiến thức/kỹ năng từ bài học | Chỉ tạo/sửa ở S1 / S6; bài học chỉ thêm/gỡ; không gắn trùng 1 mục vào cùng bài học. |
| `REQ10` | Tab Kiến thức / Kỹ năng | 2 tab riêng, mỗi tab là danh sách mục đã gắn + nút "+" mở popup 3 bước: loại → cụm → mục (chọn nhiều). Kiến thức lấy từ S1, Kỹ năng lấy từ S6 của khoá đang mở. |
| `REQ12` | Thêm cả cụm & đồng bộ khi đổi cụm | "Chọn tất cả" trong cụm thêm một lần mọi mục hợp lệ, không tự gắn mục mới. Gỡ mục khỏi cụm / xoá cụm ở S1 / S6 thì gỡ mục tương ứng khỏi bài học (có cảnh báo). |
| `REQ11` | Kỹ năng/Kiến thức ở tab Thông tin | Read-only, tự sinh = tập **loại** có ≥ 1 mục ở tab Kiến thức / Kỹ năng; không lưu riêng, không chọn tay. |
| `REQ05` | Mã bài học | 12 số `CCAALLBBBEEE`: `CC` = mã trung tâm, `AA` = ID danh mục, `LL` = ID cấp độ (lấy từ ID khoá học `CCAALLMMM`), `BBB` = 3 số cuối ID học kỳ (`CCAALLMMMBBB`), `EEE` = số thứ tự bài học (`001`–`999`). Mã không chứa `MMM` của khoá học. Tự sinh, không sửa thủ công; đồng bộ khi ID học kỳ / ID khoá học đổi (EX03). |
| `REQ06` | Tự tạo/xoá bài học | Số bài học = "Số buổi" ở S2. Tên mặc định `Bài học {số thứ tự}`. Xoá = xoá mềm bài + dữ liệu con (nội dung, tài nguyên, liên kết kiến thức/kỹ năng). |
| `REQ07` | Cột buổi học | Lấy từ tick ở Lộ trình (S4), chỉ xem; màu thời lượng và trạng thái trống theo mục 1. |
| `REQ08` | Lưu & Hủy | Thông tin/Nội dung/Kiến thức/Kỹ năng lưu gộp khi "Lưu thay đổi"; Tài nguyên lưu/xoá ngay; Hủy/X/click ngoài có popup xác nhận khi còn thay đổi chưa lưu. |
| `REQ09` | Quyền theo trạng thái | Chỉ sửa bài học (thông tin, nội dung, tài nguyên, kiến thức/kỹ năng) và đổi "Số buổi" khi học kỳ `Nháp` **và** khoá học `Nháp`. Bài học không có trạng thái riêng, đi theo trạng thái học kỳ / khoá học. Nhân bản học kỳ / khoá học sao chép toàn bộ bài học (xem `information.md` REQ06, `course_management.md` REQ11). |
| `EX01` | Ngoại lệ | Tên nhóm/nội dung trống hoặc chỉ khoảng trắng → chặn thêm/lưu. |
| `EX02` | Ngoại lệ | Kiến thức/kỹ năng đã gắn → không gắn trùng (trong popup mục đã gắn tick sẵn + disable; BE bỏ qua bản ghi trùng). |
| `EX06` | Ngoại lệ | Loại chưa có cụm / cụm chưa có mục ở S1 hoặc S6 → popup hiển thị trạng thái trống (`Chưa có cụm` / `Cụm chưa có kiến thức`), nút `Thêm` disable. |
| `EX07` | Ngoại lệ | Xoá (gỡ khỏi khoá) mục kiến thức / bài kỹ năng ở S1 / S6 khi đang gắn vào bài học → **popup cảnh báo** liệt kê bài học đang dùng; xác nhận → BE tự gỡ khỏi mọi bài học liên quan. (**UI cần bổ sung** popup cảnh báo ở S1 / S6.) |
| `EX10` | Ngoại lệ | Mục `Chưa phân cụm` → không thêm được vào bài (popup không hiển thị; BE từ chối). |
| `EX08` | Ngoại lệ | Mục thiếu thông tin / chưa hoàn chỉnh ở S1 / S6 → không được gắn vào bài (popup disable, "Chọn tất cả" bỏ qua; BE từ chối). |
| `EX09` | Ngoại lệ | Ở S1 / S6, mục bị **gỡ khỏi cụm** hoặc cụm bị **xoá** → mục đó (mọi mục của cụm khi xoá cụm) **tự gỡ khỏi các bài học** đã thêm nó từ cụm đó, có cảnh báo liệt kê bài học. Thêm mục mới vào cụm **không** tự gắn vào bài. Gỡ ở bài học (nút x) chỉ xoá liên kết, mục vẫn ở S1 / S6 và cụm. |
| `EX03` | Ngoại lệ | `BBB` của ID học kỳ đổi (chỉ khi học kỳ `Nháp`) hoặc `CCAALL` của ID khoá học đổi (chỉ khi khoá học `Nháp`, xem `course_management.md` REQ06) → đồng bộ 9 số đầu Mã bài học của **tất cả** bài học bị ảnh hưởng, `EEE` giữ nguyên. |
| `EX04` | Ngoại lệ | Học kỳ hoặc khoá học `Công khai`/`Vô hiệu` → popup chỉ đọc (gồm cả tab Tài nguyên), không cho đổi "Số buổi" ở S2; gọi API ghi trực tiếp → BE từ chối, dữ liệu không đổi. |
| `EX05` | Ngoại lệ | "Lưu thay đổi" thất bại → không ghi một phần, popup giữ nguyên thay đổi chưa lưu để thử lại. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Danh sách bài học & icon | High | Có | CD; học kỳ có bài đủ 3 phần, thiếu 1 phần, trống | — |  |
| `TC02` | Case 2: Mở & sửa thông tin, Mã bài học | High | Có | CD; học kỳ `Nháp` | — |  |
| `TC03` | Case 3: Thêm nhóm/nội dung & validation | High | Có | CD; `Nháp`; tab Nội dung | — |  |
| `TC04` | Case 4: Xoá & kéo-thả nội dung | High |  | CD; `Nháp`; ≥ 2 nhóm, mỗi nhóm có nội dung | — |  |
| `TC05` | Case 5: Cột buổi học theo S4 | High |  | CD; có bài đã tick và bài chưa tick ở S4; thời lượng chuẩn 01:30:00 | — |  |
| `TC06` | Case 6: Tài nguyên (file, link, menu 3 chấm) | High |  | CD; `Nháp`; tab Tài nguyên | — |  |
| `TC07` | Case 7: Thêm/gỡ kiến thức | High |  | CD; `Nháp`; bài đã gắn sẵn 1 từ vựng cụm 1; S1 có Ngữ pháp cụm 2 | — |  |
| `TC7b` | Case 7b: Thêm/gỡ kỹ năng | High |  | CD; `Nháp`; S6 có bài Nghe, Đọc | — |  |
| `TC7c` | Case 7c: Tag tự động ở tab Thông tin | High |  | CD; `Nháp` | — |  |
| `TC7e` | Case 7e: Thêm cả cụm | High |  | CD; `Nháp`; cụm 1 Từ vựng có 5 mục (1 mục thiếu thông tin) | — |  |
| `TC7h` | Case 7h: Gỡ khỏi cụm / xoá cụm ở S1 | High |  | Bài 1 đã thêm 4 mục từ cụm 1 | — |  |
| `TC7f` | Case 7f: Xoá ở S1/S6 khi đang gắn | High |  | Mục đang gắn vào 2 bài học | — |  |
| `TC7g` | Case 7g: Xem chi tiết 2 khung | Medium |  | Bài có kiến thức | — |  |
| `TC7d` | Case 7d: Popup trống | Medium |  | CD; loại chưa có cụm / cụm rỗng; loại `Viết`/`Nói` | — |  |
| `TC08` | Case 8: Lưu gộp, Hủy & lỗi | High |  | CD; `Nháp`; sửa ở nhiều tab | — |  |
| `TC09` | Case 9: Tăng/giảm số buổi | High |  | CD; học kỳ `Nháp` có 20 bài; bài cuối có nội dung/tài nguyên/kiến thức | — |  |
| `TC10` | Case 10: Chỉ đọc & phân quyền | High |  | CD với học kỳ `Công khai`/`Vô hiệu`, hoặc học kỳ `Nháp` thuộc khoá học `Công khai`/`Vô hiệu`; role không phải CD | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa thấy trên Figma (11): `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A03.08`, `A03.09`, `A03.10`, `A03.11`
- Frame Figma chưa có requirement (13): `CD-KH-030210`, `CD-KH-030211`, `CD-KH-030230`, `CD-KH-030231`, `CD-KH-030240`, `CD-KH-030241`, `CD-KH-030242`, `CD-KH-030243`, `CD-KH-030244`, `CD-KH-030245`, `CD-KH-030246`, `CD-KH-030247`, `CD-KH-030250`
- Phân loại cần design duyệt (12): `CD-KH-030211`, `CD-KH-030230`, `CD-KH-030231`, `CD-KH-030240`, `CD-KH-030241`, `CD-KH-030242`, `CD-KH-030243`, `CD-KH-030244`, `CD-KH-030245`, `CD-KH-030246`, `CD-KH-030247`, `CD-KH-030250`
- Thiếu prototype link đi vào (9): `CD-KH-030211`, `CD-KH-030231`, `CD-KH-030241`, `CD-KH-030242`, `CD-KH-030243`, `CD-KH-030244`, `CD-KH-030245`, `CD-KH-030246`, `CD-KH-030247`
- Testcase không trỏ REQ (17): `TC01`, `TC02`, `TC03`, `TC04`, `TC05`, `TC06`, `TC07`, `TC7b`, `TC7c`, `TC7e`, `TC7h`, `TC7f`, `TC7g`, `TC7d`, `TC08`, `TC09`, `TC10`
- REQ/EX chưa có testcase (22): `REQ01`, `REQ02`, `REQ03`, `REQ04`, `REQ10`, `REQ12`, `REQ11`, `REQ05`, `REQ06`, `REQ07`, `REQ08`, `REQ09`, `EX01`, `EX02`, `EX06`, `EX07`, `EX10`, `EX08`, `EX09`, `EX03`, `EX04`, `EX05`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
