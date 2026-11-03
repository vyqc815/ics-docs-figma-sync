# Học Kỳ - Tab Bài học

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-030200` | Học kỳ / Bài học | `/hoc-ky/bai-hoc` | `CD-KH-030200-DK` | QC |

Requirement: `course_management/semester/lesson/lesson.md` — Học Kỳ - Tab Bài học (tiền tố `CM-LE`).

## 2. Luồng

- `FLOW01` Mở chi tiết — 
- `FLOW02` Chỉnh sửa & lưu gộp — 
- `FLOW03` Tài nguyên — 
- `FLOW05` Xem kiến thức / kỹ năng của bài theo cụm liên kết — 
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

Frame: chưa có (tool đoán:CD-KH-030200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Popup: Chi tiết bài học - Tab Thông tin

Frame: chưa có (tool đoán:CD-KH-030210, CD-KH-030230, CD-KH-030240, CD-KH-030250) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tieu-de |  |  | — |  |  | Chưa có thiết kế | QC |
| `A02.02` | noi-dung |  |  | — |  |  | Chưa có thiết kế | QC |
| `A02.03` | nut |  |  | — |  |  | Chưa có thiết kế | QC |

### `A03` Popup: Chi tiết bài học - Tab Nội dung

Frame: chưa có (tool đoán:CD-KH-030200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | them-nhom |  |  | — |  |  | Chưa sync | QC |
| `A03.02` | them-noi-dung |  |  | — |  |  | Chưa sync | QC |
| `A03.03` | gioi-han |  |  | — |  |  | Chưa sync | QC |
| `A03.04` | xoa |  |  | — |  |  | Chưa sync | QC |
| `A03.05` | keo-tha |  |  | — |  |  | Chưa sync | QC |
| `A03.06` | badge-tab |  |  | — |  |  | Chưa sync | QC |
| `A03.07` | 90-100 |  |  | — |  |  | Chưa sync | QC |
| `A03.08` | 80-90 |  |  | — |  |  | Chưa sync | QC |
| `A03.09` | 0-va-80 |  |  | — |  |  | Chưa sync | QC |
| `A03.10` | 00-00-00 |  |  | — |  |  | Chưa sync | QC |
| `A03.11` | 100 |  |  | — |  |  | Chưa sync | QC |

### `A04` Popup: Chi tiết bài học - Tab Tài nguyên

Frame: chưa có (tool đoán:CD-KH-030200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Popup: Chi tiết bài học - Tab Kiến thức

Frame: chưa có (tool đoán:CD-KH-030211, CD-KH-030244, CD-KH-030247) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A06` Popup: Chi tiết bài học - Tab Kỹ năng (mới — **UI cần bổ sung Figma**)

Frame: chưa có (tool đoán:CD-KH-030242, CD-KH-030245) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Danh sách chỉ xem | Không kéo-thả, không thêm/xoá thủ công. Thứ tự cố định theo 3 số cuối Mã bài học. Card không có nhãn cam, mũi tên. |
| `REQ02` | Icon 3 phần | Sáng khi số lượng phần đó > 0 (icon Kiến thức = số loại kiến thức + số loại kỹ năng có cụm liên kết), tối khi = 0. |
| `REQ03` | Nội dung dạng text | 1 loại nội dung text, nhóm → nội dung; tên bắt buộc; mô tả nội dung ≤ 500 ký tự; kéo-thả/xoá/badge theo mục 1. |
| `REQ04` | Không sửa kiến thức/kỹ năng từ bài học | Chỉ tạo / sửa / chia cụm / liên kết ở S1 / S6; bài học chỉ xem. |
| `REQ10` | Tab Kiến thức / Kỹ năng | 2 tab riêng, chỉ xem: bộ lọc Loại (mặc định Từ vựng / Nghe), tiêu đề = tên cụm đã liên kết với bài cho loại đó, danh sách mục của cụm theo thứ tự trong cụm, khung phải chi tiết. Kiến thức lấy từ S1, Kỹ năng lấy từ S6 của khoá đang mở. Badge tab = số loại có cụm liên kết. |
| `REQ12` | Liên kết cụm ↔ bài học | Một cụm liên kết đúng 1 bài học; một bài học tối đa 1 cụm mỗi loại; BE bắt trùng (EX02). Liên kết lập / đổi / bỏ tại S1 / S6; mọi thay đổi trong cụm phản ánh ngay ở bài học. Nhân bản khoá sao chép liên kết. |
| `REQ11` | Kỹ năng/Kiến thức ở tab Thông tin | Read-only, tự sinh = tập **loại** có cụm liên kết với bài; không lưu riêng, không chọn tay. |
| `REQ05` | Mã bài học | 12 số `CCAALLBBBEEE`: `CC` = mã trung tâm, `AA` = ID danh mục, `LL` = ID cấp độ (lấy từ ID khoá học `CCAALLMMM`), `BBB` = 3 số cuối ID học kỳ (`CCAALLMMMBBB`), `EEE` = số thứ tự bài học (`001`–`999`). Mã không chứa `MMM` của khoá học. Tự sinh, không sửa thủ công; đồng bộ khi ID học kỳ / ID khoá học đổi (EX03). |
| `REQ06` | Tự tạo/xoá bài học | Số bài học = "Số buổi" ở S2. Tên mặc định `Bài học {số thứ tự}`. Xoá = xoá mềm bài + dữ liệu con (nội dung, tài nguyên, liên kết kiến thức/kỹ năng). |
| `REQ07` | Cột buổi học | Lấy từ tick ở Lộ trình (S4), chỉ xem; màu thời lượng và trạng thái trống theo mục 1. |
| `REQ08` | Lưu & Hủy | Thông tin / Nội dung lưu gộp khi "Lưu thay đổi" (Kiến thức / Kỹ năng chỉ xem); Tài nguyên lưu/xoá ngay; Hủy/X/click ngoài có popup xác nhận khi còn thay đổi chưa lưu. |
| `REQ09` | Quyền theo trạng thái | Chỉ sửa bài học (thông tin, nội dung, tài nguyên, kiến thức/kỹ năng) và đổi "Số buổi" khi học kỳ `Nháp` **và** khoá học `Nháp`. Bài học không có trạng thái riêng, đi theo trạng thái học kỳ / khoá học. Nhân bản học kỳ / khoá học sao chép toàn bộ bài học (xem `information.md` REQ06, `course_management.md` REQ11). |
| `EX01` | Ngoại lệ | Tên nhóm/nội dung trống hoặc chỉ khoảng trắng → chặn thêm/lưu. |
| `EX02` | Ngoại lệ | Liên kết cụm thứ hai cùng loại vào một bài học (từ S1 / S6 hoặc API) → BE từ chối, bài giữ cụm cũ; popup liên kết mờ bài đã có cụm cùng loại. |
| `EX06` | Ngoại lệ | Loại chưa có cụm liên kết, hoặc cụm liên kết chưa có mục → tab hiển thị trạng thái trống (`Chưa có cụm <loại> liên kết với bài này` / `Cụm <tên> chưa có mục`), badge không đếm loại đó. |
| `EX07` | Ngoại lệ | Gỡ mục / bài khỏi khoá ở S1 / S6 khi thuộc cụm đã liên kết bài học → popup gỡ nêu cụm và bài học; xác nhận → mục mất khỏi cụm và khỏi bài học. |
| `EX10` | Ngoại lệ | Mục `Chưa phân cụm` → không xuất hiện ở bài học nào; gửi API gắn mục trực tiếp vào bài học → BE từ chối (không còn liên kết mục ↔ bài). |
| `EX08` | Ngoại lệ | Mục thiếu thông tin trong cụm liên kết → vẫn hiện ở tab với chấm cam (bài học phản ánh cụm); app học viên chỉ dùng mục đủ thông tin. |
| `EX09` | Ngoại lệ | Ở S1 / S6, mục được thêm vào / gỡ khỏi / chuyển cụm → bài học liên kết cụm phản ánh ngay, không cảnh báo. Giảm Số buổi ở S2 làm mất cụm đang liên kết → BE chặn (xem Tổng quan (S2) EX05). |
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
| `TC07` | Case 7: Tab Kiến thức hiện mục của cụm liên kết | High | Có | CD; cụm Từ vựng `Gia đình` (16 mục) liên kết Bài 1; cụm Ngữ pháp `Chủ đề 2` liên kết Bài 1 | — |  |
| `TC7b` | Case 7b: Tab Kỹ năng hiện bài của cụm liên kết | High | Có | CD; cụm Nghe `Chào hỏi` (3 bài) liên kết Bài 1 | — |  |
| `TC7c` | Case 7c: Tag tự động và badge theo số loại | High |  | CD; Bài 1 có cụm Từ vựng, Ngữ pháp, Mẫu câu và cụm Nghe liên kết | — |  |
| `TC7e` | Case 7e: Cụm thay đổi, bài học phản ánh ngay | High |  | CD; cụm `Gia đình` liên kết Bài 1 | — |  |
| `TC7h` | Case 7h: BE bắt trùng cụm cùng loại | High |  | CD; Bài 1 đã có cụm Từ vựng `Gia đình` | — |  |
| `TC7f` | Case 7f: Gỡ mục khỏi khoá ở S1 khi thuộc cụm liên kết | High |  | Mục `爸爸` thuộc cụm `Gia đình` liên kết Bài 1 | — |  |
| `TC7g` | Case 7g: Xem chi tiết 2 khung | Medium |  | Bài có cụm liên kết | — |  |
| `TC7d` | Case 7d: Mục Chưa phân cụm và API gắn trực tiếp | Medium |  | CD; mục `你好` ở `Chưa phân cụm` | — |  |
| `TC08` | Case 8: Lưu gộp, Hủy & lỗi | High |  | CD; `Nháp`; sửa ở nhiều tab | — |  |
| `TC09` | Case 9: Tăng/giảm số buổi | High |  | CD; học kỳ `Nháp` có 20 bài; bài cuối có nội dung/tài nguyên/cụm liên kết | — |  |
| `TC10` | Case 10: Chỉ đọc & phân quyền | High |  | CD với học kỳ `Công khai`/`Vô hiệu`, hoặc học kỳ `Nháp` thuộc khoá học `Công khai`/`Vô hiệu`; role không phải CD | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (11): `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A03.08`, `A03.09`, `A03.10`, `A03.11`
- Frame Figma chưa có requirement (13): `CD-KH-030210`, `CD-KH-030211`, `CD-KH-030230`, `CD-KH-030231`, `CD-KH-030240`, `CD-KH-030241`, `CD-KH-030242`, `CD-KH-030243`, `CD-KH-030244`, `CD-KH-030245`, `CD-KH-030246`, `CD-KH-030247`, `CD-KH-030250`
- Phân loại cần design duyệt (12): `CD-KH-030211`, `CD-KH-030230`, `CD-KH-030231`, `CD-KH-030240`, `CD-KH-030241`, `CD-KH-030242`, `CD-KH-030243`, `CD-KH-030244`, `CD-KH-030245`, `CD-KH-030246`, `CD-KH-030247`, `CD-KH-030250`
- Thiếu prototype link đi vào (9): `CD-KH-030211`, `CD-KH-030231`, `CD-KH-030241`, `CD-KH-030242`, `CD-KH-030243`, `CD-KH-030244`, `CD-KH-030245`, `CD-KH-030246`, `CD-KH-030247`
- Testcase không trỏ REQ (17): `TC01`, `TC02`, `TC03`, `TC04`, `TC05`, `TC06`, `TC07`, `TC7b`, `TC7c`, `TC7e`, `TC7h`, `TC7f`, `TC7g`, `TC7d`, `TC08`, `TC09`, `TC10`
- REQ/EX chưa có testcase (22): `REQ01`, `REQ02`, `REQ03`, `REQ04`, `REQ10`, `REQ12`, `REQ11`, `REQ05`, `REQ06`, `REQ07`, `REQ08`, `REQ09`, `EX01`, `EX02`, `EX06`, `EX07`, `EX10`, `EX08`, `EX09`, `EX03`, `EX04`, `EX05`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
