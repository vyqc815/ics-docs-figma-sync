# Học Kỳ - Tab Bài học

## 1. UI

### Trang 1: Danh sách bài học (Tab Bài học)
![alt text](image.png)

- CD **chỉ xem** danh sách bài học của học kỳ đang chọn; nhấn card để mở popup "Chi tiết bài học".
- Card gồm: mã bài học, tên, mô tả, tag Kỹ năng/Kiến thức (nếu có, = các **loại** đã gắn ở tab Kiến thức / Kỹ năng), **3 icon góc trên phải** (Nội dung / Tài nguyên / Kiến thức): **sáng** khi phần đó có dữ liệu, **tối** khi chưa có (icon Kiến thức sáng khi có ít nhất 1 kiến thức **hoặc** 1 bài kỹ năng). Icon cập nhật sau khi lưu ở popup.
- **Bỏ trên Figma:** icon kéo-thả, nhãn cam cạnh mã (`HSK4 复习`...), mũi tên mở rộng/thu gọn.
- Không có nút thêm/xoá bài học, không kéo-thả. Bài học tạo/xoá tự động theo "Số buổi" ở Tổng quan (S2) (Flow 4).
- Tên bài học trên Figma chỉ là dữ liệu mẫu.
- Chỉ sửa được khi học kỳ `Nháp` **và** khoá học `Nháp`; học kỳ hoặc khoá học `Công khai`/`Vô hiệu` → popup chỉ đọc (ẩn nút "Lưu thay đổi", ẩn thêm/xoá tài nguyên), kể cả Tên/Mô tả bài học (quy tắc chung: dữ liệu đã công khai chỉ sửa Tên, Mô tả của chính học kỳ / khoá học, chi tiết bên trong không sửa — xem `course_management.md` REQ10). Muốn sửa thì nhân bản học kỳ / khoá học.

---

### Trang 2: Popup: Chi tiết bài học - Tab Thông tin
![alt text](image-1.png)

- Đầu popup: mã bài học, tên, học kỳ, thời lượng, ngày tạo, ngày cập nhật, **5 tab** (Thông tin, Nội dung, Tài nguyên, Kiến thức, **Kỹ năng**) kèm badge số lượng.
- **"Kỹ năng" / "Kiến thức" ở tab Thông tin: read-only, tự hiển thị** theo các **loại** đang có trong tab Kiến thức / Kỹ năng (bỏ nút "+" trên Figma, không chọn tay):
  - Kiến thức: tag các loại kiến thức có ≥ 1 mục đã gắn (vd. `Từ vựng`, `Ngữ pháp`), không lặp, thứ tự theo thứ tự tab loại ở S1.
  - Kỹ năng: tag các loại kỹ năng có ≥ 1 bài đã gắn (`Nghe`, `Đọc`, `Viết`, `Nói`), thứ tự theo tab ở S6.
  - Cập nhật ngay khi thêm/gỡ ở tab Kiến thức / Kỹ năng (kể cả trước khi "Lưu thay đổi"); gỡ hết mục của 1 loại thì tag loại đó biến mất. Chưa có mục nào: hiển thị `—` (**UI cần bổ sung**: trạng thái trống).
- **Mã bài học** (read-only): 12 số `CCAALLBBBEEE` = **`CCAALL` của ID khoá học** (mã trung tâm + ID danh mục + ID cấp độ) + **`BBB` của ID học kỳ** + **`EEE` số thứ tự bài học** (ví dụ khoá `100302001`, học kỳ `100302001002`, bài 5 → `100302002005`). Tự sinh (xem REQ05).
- Footer chỉ có **"Hủy"** và **"Lưu thay đổi"** (bỏ nút "Xóa bài học" trên Figma).
- **Cơ chế lưu:**
  - Thông tin, Nội dung, Kiến thức, Kỹ năng: giữ tạm trên FE, chuyển tab không mất; **"Lưu thay đổi" lưu tất cả các tab một lần**.
  - **Tab Tài nguyên: lưu/xoá ngay khi thao tác**, không qua "Lưu thay đổi", không bị "Hủy" hoàn tác.
  - **"Hủy"/nút X/click ra ngoài** khi còn thay đổi chưa lưu → popup xác nhận (bảng dưới); không có thay đổi thì đóng luôn.

- `A02.01` **Tiêu đề**: `Bỏ thay đổi`
- `A02.02` **Nội dung**: `Các thay đổi chưa lưu sẽ bị mất. Bạn có chắc chắn muốn đóng?`
- `A02.03` **Nút**: `Ở lại`, `Bỏ thay đổi`

---

### Trang 3: Popup: Chi tiết bài học - Tab Nội dung
![alt text](image-2.png)

**Cột trái - Nội dung** (2 cấp: Nhóm nội dung → Nội dung, chỉ có 1 loại nội dung nhập text; bỏ popup 9 loại action cũ):

- `A03.01` **Thêm nhóm**: Quy tắc: Nhập **tên** ở ô "Nhập nhóm nội dung mới" → "+". Mô tả nhóm sửa sau trực tiếp trên nhóm.
- `A03.02` **Thêm nội dung**: Quy tắc: Nhập tên ở ô "Nhập nội dung mới" trong nhóm → "+", rồi nhập Mô tả.
- `A03.03` **Giới hạn**: Quy tắc: Tên nhóm/nội dung: bắt buộc, chưa giới hạn độ dài. Mô tả nhóm: không giới hạn. Mô tả nội dung: tối đa 500 ký tự (bộ đếm `58/500`).
- `A03.04` **Xoá**: Quy tắc: Nội dung: thùng rác. Nhóm: thùng rác → popup xác nhận → xoá kèm toàn bộ nội dung bên trong.
- `A03.05` **Kéo-thả**: Quy tắc: Chỉ trong cùng cấp (nhóm với nhóm, nội dung trong cùng nhóm). **Không** kéo nội dung sang nhóm khác.
- `A03.06` **Badge tab**: Quy tắc: = tổng số **nội dung** (không tính nhóm).

Popup xóa nhóm: tiêu đề `Xoá nhóm nội dung`; nội dung `Nhóm "{tên nhóm}" và {k} nội dung bên trong sẽ bị xoá. Bạn có chắc chắn muốn tiếp tục?`; nút `Huỷ`, `Xoá nhóm`. Xoá chỉ có hiệu lực khi "Lưu thay đổi".

**Cột phải - Danh sách buổi học (N):**
- Lấy từ các buổi học được **tick ở Lộ trình (S4)**, **chỉ xem**, bấm vào chỉ mở rộng/thu gọn, không chuyển màn. Cập nhật khi đổi tick ở S4.
- Mỗi mục: số thứ tự, tên, mô tả ngắn, tổng thời lượng (`01:30:00`); mở rộng hiện thành phần + thời lượng, thu gọn hiện `n thành phần`.
- Chưa tick buổi nào: hiển thị `Chưa có buổi học nào được chọn ở Lộ trình`, (0).
- **Màu tổng thời lượng** theo % so với thời lượng chuẩn 1 buổi ở Tổng quan (S2):

- `A03.07` **90% – 100%**: Màu: Xanh
- `A03.08` **80% – <90%**: Màu: Vàng
- `A03.09` **>0 và <80%**: Màu: Cam
- `A03.10` **`00:00:00`**: Màu: Xám
- `A03.11` **>100%**: Màu: Đỏ

---

### Trang 4: Popup: Chi tiết bài học - Tab Tài nguyên
![alt text](image-3.png)
![alt text](image-5.png)

- "+ Thêm tài nguyên" mở popup 2 phần: **Thêm file** (chọn từ máy, tự phân loại theo định dạng) và **Thêm link** (nhập URL → nhóm Link tham khảo).
- 4 nhóm: Tài liệu học tập, Video bài giảng, Hình ảnh, Link tham khảo (icon, tiêu đề, mô tả, số lượng).
- File: icon loại, tên, định dạng, dung lượng, ngày cập nhật; video có thumbnail + thời lượng. Menu 3 chấm: **Xem trước, Tải xuống, Xoá**. Link: tên + URL; menu 3 chấm: Xem trước/mở link, Copy link, Xoá.
- Badge tab = tổng tài nguyên các nhóm.
- **Upload/xoá có hiệu lực ngay** (không qua "Lưu thay đổi"); badge và icon Tài nguyên ở card cập nhật ngay.

---

### Trang 5: Popup: Chi tiết bài học - Tab Kiến thức
![alt text](image-4.png)

> Figma hiện vẽ tab Kiến thức gộp 2 tab nhỏ Kiến thức / Kỹ năng và panel chi tiết bên phải. Requirement mới **tách Kỹ năng thành tab riêng** và đổi tab Kiến thức thành **danh sách** → **UI cần cập nhật Figma**.

- Dữ liệu lấy từ **Kiến thức (S1)** của khoá học đang mở (bản ghi Thư viện dữ liệu); **không tạo/sửa nội dung kiến thức tại đây**, chỉ thêm / gỡ.
- **Bố cục 2 khung (chỉ xem)** (**UI cần bổ sung**):
  - **Khung trái – danh sách kiến thức đã gắn:** mỗi dòng có nút **x** ở bên trái (gỡ khỏi bài), bên trái dòng là nội dung chính (từ / mẫu ngữ pháp / chữ...) và **nghĩa ở dòng dưới**, bên phải dòng là tag loại (`Từ vựng`, `Ngữ pháp`...). Nhóm theo loại, thứ tự loại theo S1, trong loại theo thứ tự thêm. Không kéo-thả. Trống: `Chưa có kiến thức nào`.
  - **Khung phải – chi tiết:** bấm 1 dòng ở khung trái thì hiện đầy đủ thông tin của mục đó (field theo loại như ở S1), chỉ xem, không có nút sửa / menu 3 chấm. Mặc định chọn dòng đầu tiên.
- Nút **"+"** mở popup **Thêm kiến thức** (**UI cần bổ sung**), **1 màn 3 cột**:
  1. **Cột Loại kiến thức**: các loại có ở S1 của trung tâm (Từ vựng, Ngữ pháp, Mẫu câu, Hanzi, Kanji, Phát âm; Bảng chữ nếu trung tâm có).
  2. **Cột Cụm**: các cụm của loại đang chọn (kèm số mục). Không gắn cụm vào bài. Không có mục `Chưa phân cụm`.
  3. **Cột Kiến thức**: mục thuộc loại + cụm đang chọn, chọn nhiều (checkbox), có **ô tìm kiếm** theo nội dung mục. Checkbox **"Chọn tất cả"** đầu cột = chọn mọi mục hợp lệ của cụm (thêm cả cụm).
  - **Giữ lựa chọn khi đổi cụm / loại**: được chọn mục ở nhiều cụm, nhiều loại trong 1 lần mở popup; nút `Thêm ({n})` đếm tổng.
  - Mục đã gắn vào bài: tick sẵn + disable (EX02). Mục **thiếu thông tin / chưa hoàn chỉnh** ở S1: hiển thị nhưng disable, có tooltip lý do (EX08).
  - Nút `Huỷ`, `Thêm ({n})`. Thêm xong đóng popup, mục mới hiện vào danh sách; tag loại ở tab Thông tin cập nhật.
- **Thêm cả cụm = "Chọn tất cả" trong cụm:** chỉ là chọn nhanh, thêm **một lần** các mục đang có; **không** liên kết cụm với bài. Mục thêm vào cụm sau này **không tự vào bài**, CD phải mở popup chọn thêm thủ công.
- **1 mục chỉ thuộc 1 cụm.** Mục ở `Chưa phân cụm` **không** hiển thị trong popup, không thêm được vào bài; CD phải gán cụm ở S1 / S6 trước.
- Gỡ: nhấn **x** bên trái dòng (chỉ gỡ liên kết, không xoá dữ liệu S1).
- Badge tab = số kiến thức đã gắn.

### Trang 6: Popup: Chi tiết bài học - Tab Kỹ năng (mới — **UI cần bổ sung Figma**)
- Tương tự tab Kiến thức; dữ liệu lấy từ **Kỹ năng (S6)** của khoá học đang mở (bản ghi Thư viện kỹ năng); không tạo/sửa bài kỹ năng tại đây.
- Bố cục 2 khung giống tab Kiến thức: **khung trái** danh sách bài đã gắn (nút **x** bên trái, tên bài + mô tả ngắn bên dưới, tag loại `Nghe`/`Đọc`/`Viết`/`Nói` bên phải); **khung phải** chi tiết bài đang chọn, chỉ xem. Trống: `Chưa có kỹ năng nào`.
- Nút **"+"** mở popup **Thêm kỹ năng** 1 màn 3 cột: Loại kỹ năng | Cụm (có "Thêm cả cụm") | Bài kỹ năng (chọn nhiều, "Chọn tất cả", tìm kiếm). Quy tắc giữ lựa chọn, mục đã gắn, mục thiếu thông tin, thêm cả cụm giống tab Kiến thức.
- Luôn hiện đủ 4 loại `Nghe`, `Đọc`, `Viết`, `Nói`; loại chưa có dữ liệu (hiện `Viết`, `Nói`) hiển thị trạng thái trống.
- Badge tab = số bài kỹ năng đã gắn.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Mở chi tiết** — CD nhấn card → FE mở popup, mặc định tab Thông tin.

**Flow 2: Chỉnh sửa & lưu gộp**

```
CD sửa ở các tab Thông tin / Nội dung / Kiến thức / Kỹ năng (giữ tạm ở FE)
→ CD nhấn "Lưu thay đổi"
→ FE gửi gộp thay đổi các tab → BE validate & cập nhật
→ FE đóng popup, cập nhật card (kể cả 3 icon) và badge
```

**Flow 3: Tài nguyên** (lưu ngay, độc lập với "Lưu thay đổi")

```
CD nhấn "+ Thêm tài nguyên" → chọn file (BE lưu, tự phân loại) hoặc nhập URL (BE lưu vào Link tham khảo)
→ FE thêm vào đúng nhóm, cập nhật badge/icon
Xoá tài nguyên: menu 3 chấm → Xoá → BE xoá ngay
```

**Flow 5: Thêm kiến thức / kỹ năng vào bài**

```
CD mở tab Kiến thức (hoặc Kỹ năng) → nhấn "+"
→ FE mở popup 3 cột: chọn loại → FE tải cụm của loại (S1 / S6)
→ chọn cụm → FE tải mục thuộc loại + cụm (đánh dấu mục đã gắn / thiếu thông tin)
→ tick mục lẻ hoặc "Chọn tất cả" của cụm; đổi cụm/loại vẫn giữ lựa chọn
→ "Thêm"
→ FE thêm vào danh sách của bài (giữ tạm), cập nhật badge + tag loại ở tab Thông tin
→ Gỡ: nhấn x → FE bỏ khỏi danh sách, cập nhật badge + tag
→ Lưu khi nhấn "Lưu thay đổi" (Flow 2)
```

**Flow 4: Tự tạo/xoá bài học theo "Số buổi" ở Tổng quan (S2)** (chỉ khi học kỳ `Nháp` và khoá học `Nháp`; số buổi cũ = N, mới = M)

```
M > N: BE tự tạo (M − N) bài học ở cuối, tên mặc định `Bài học {số thứ tự}`, dữ liệu con rỗng, Mã bài học theo REQ05

M < N: FE hiển thị popup xác nhận
   → Xác nhận: BE xoá mềm (N − M) bài cuối (số thứ tự lớn nhất) + xoá mềm toàn bộ nội dung/tài nguyên/liên kết kiến thức bên trong
   → Huỷ: giữ nguyên số buổi cũ và toàn bộ bài học
```

Ví dụ: 30 → 20 thì xoá bài 21 đến 30.

| Popup giảm số buổi (màn S2) | Nội dung |
|---|---|
| Tiêu đề | `Xoá bài học` |
| Nội dung | `Số buổi giảm từ {N} xuống {M}. {N − M} bài học cuối (bài {M + 1} đến bài {N}) sẽ bị xoá cùng toàn bộ nội dung, tài nguyên và kiến thức bên trong. Bạn có chắc chắn muốn tiếp tục?` |
| Nút | `Huỷ`, `Xoá bài học` |

### 2.2. Ngoại lệ

- **EX01:** Tên nhóm/nội dung trống hoặc chỉ khoảng trắng → chặn thêm/lưu.
- **EX02:** Kiến thức/kỹ năng đã gắn → không gắn trùng (trong popup mục đã gắn tick sẵn + disable; BE bỏ qua bản ghi trùng).
- **EX06:** Loại chưa có cụm / cụm chưa có mục ở S1 hoặc S6 → popup hiển thị trạng thái trống (`Chưa có cụm` / `Cụm chưa có kiến thức`), nút `Thêm` disable.
- **EX07:** Xoá (gỡ khỏi khoá) mục kiến thức / bài kỹ năng ở S1 / S6 khi đang gắn vào bài học → **popup cảnh báo** liệt kê bài học đang dùng; xác nhận → BE tự gỡ khỏi mọi bài học liên quan. (**UI cần bổ sung** popup cảnh báo ở S1 / S6.)
- **EX10:** Mục `Chưa phân cụm` → không thêm được vào bài (popup không hiển thị; BE từ chối).
- **EX08:** Mục thiếu thông tin / chưa hoàn chỉnh ở S1 / S6 → không được gắn vào bài (popup disable, "Chọn tất cả" bỏ qua; BE từ chối).
- **EX09:** Ở S1 / S6, mục bị **gỡ khỏi cụm** hoặc cụm bị **xoá** → mục đó (mọi mục của cụm khi xoá cụm) **tự gỡ khỏi các bài học** đã thêm nó từ cụm đó, có cảnh báo liệt kê bài học. Thêm mục mới vào cụm **không** tự gắn vào bài. Gỡ ở bài học (nút x) chỉ xoá liên kết, mục vẫn ở S1 / S6 và cụm.
- **EX03:** `BBB` của ID học kỳ đổi (chỉ khi học kỳ `Nháp`) hoặc `CCAALL` của ID khoá học đổi (chỉ khi khoá học `Nháp`, xem `course_management.md` REQ06) → đồng bộ 9 số đầu Mã bài học của **tất cả** bài học bị ảnh hưởng, `EEE` giữ nguyên.
- **EX04:** Học kỳ hoặc khoá học `Công khai`/`Vô hiệu` → popup chỉ đọc (gồm cả tab Tài nguyên), không cho đổi "Số buổi" ở S2; gọi API ghi trực tiếp → BE từ chối, dữ liệu không đổi.
- **EX05:** "Lưu thay đổi" thất bại → không ghi một phần, popup giữ nguyên thay đổi chưa lưu để thử lại.

### 2.3. Yêu cầu khác

| Mã | Tên | Mô tả |
|---|---|---|
| REQ01 | Danh sách chỉ xem | Không kéo-thả, không thêm/xoá thủ công. Thứ tự cố định theo 3 số cuối Mã bài học. Card không có nhãn cam, mũi tên. |
| REQ02 | Icon 3 phần | Sáng khi số lượng phần đó > 0 (icon Kiến thức = số kiến thức + số bài kỹ năng), tối khi = 0. |
| REQ03 | Nội dung dạng text | 1 loại nội dung text, nhóm → nội dung; tên bắt buộc; mô tả nội dung ≤ 500 ký tự; kéo-thả/xoá/badge theo mục 1. |
| REQ04 | Không sửa kiến thức/kỹ năng từ bài học | Chỉ tạo/sửa ở S1 / S6; bài học chỉ thêm/gỡ; không gắn trùng 1 mục vào cùng bài học. |
| REQ10 | Tab Kiến thức / Kỹ năng | 2 tab riêng, mỗi tab là danh sách mục đã gắn + nút "+" mở popup 3 bước: loại → cụm → mục (chọn nhiều). Kiến thức lấy từ S1, Kỹ năng lấy từ S6 của khoá đang mở. |
| REQ12 | Thêm cả cụm & đồng bộ khi đổi cụm | "Chọn tất cả" trong cụm thêm một lần mọi mục hợp lệ, không tự gắn mục mới. Gỡ mục khỏi cụm / xoá cụm ở S1 / S6 thì gỡ mục tương ứng khỏi bài học (có cảnh báo). |
| REQ11 | Kỹ năng/Kiến thức ở tab Thông tin | Read-only, tự sinh = tập **loại** có ≥ 1 mục ở tab Kiến thức / Kỹ năng; không lưu riêng, không chọn tay. |
| REQ05 | Mã bài học | 12 số `CCAALLBBBEEE`: `CC` = mã trung tâm, `AA` = ID danh mục, `LL` = ID cấp độ (lấy từ ID khoá học `CCAALLMMM`), `BBB` = 3 số cuối ID học kỳ (`CCAALLMMMBBB`), `EEE` = số thứ tự bài học (`001`–`999`). Mã không chứa `MMM` của khoá học. Tự sinh, không sửa thủ công; đồng bộ khi ID học kỳ / ID khoá học đổi (EX03). |
| REQ06 | Tự tạo/xoá bài học | Số bài học = "Số buổi" ở S2. Tên mặc định `Bài học {số thứ tự}`. Xoá = xoá mềm bài + dữ liệu con (nội dung, tài nguyên, liên kết kiến thức/kỹ năng). |
| REQ07 | Cột buổi học | Lấy từ tick ở Lộ trình (S4), chỉ xem; màu thời lượng và trạng thái trống theo mục 1. |
| REQ08 | Lưu & Hủy | Thông tin/Nội dung/Kiến thức/Kỹ năng lưu gộp khi "Lưu thay đổi"; Tài nguyên lưu/xoá ngay; Hủy/X/click ngoài có popup xác nhận khi còn thay đổi chưa lưu. |
| REQ09 | Quyền theo trạng thái | Chỉ sửa bài học (thông tin, nội dung, tài nguyên, kiến thức/kỹ năng) và đổi "Số buổi" khi học kỳ `Nháp` **và** khoá học `Nháp`. Bài học không có trạng thái riêng, đi theo trạng thái học kỳ / khoá học. Nhân bản học kỳ / khoá học sao chép toàn bộ bài học (xem `information.md` REQ06, `course_management.md` REQ11). |

### 2.4. Ràng buộc quyền

#### Quyền

| Role | Xem | Sửa thông tin | Sửa nội dung/tài nguyên | Gắn kiến thức/kỹ năng |
|---|:---:|:---:|:---:|:---:|
| CD | ✅ | ✅ | ✅ | ✅ |
| Role khác | ❌ | ❌ | ❌ | ❌ |

#### Ràng buộc khác

---

---

## 3. Testcase

### Feature: Học Kỳ - Tab Bài học

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Danh sách bài học & icon | High · Smoke |  | CD; học kỳ có bài đủ 3 phần, thiếu 1 phần, trống |  | **Given** CD ở tab Bài học<br>**When** trang tải xong<br>**Then** hiển thị danh sách | - Đúng bài theo học kỳ, card đúng mã/tên/mô tả<br>- Icon sáng/tối đúng dữ liệu (bài trống: 3 icon tối)<br>- Không có kéo-thả, nhãn cam, mũi tên, nút thêm/xoá bài |
| Case 2: Mở & sửa thông tin, Mã bài học | High · Smoke |  | CD; học kỳ `Nháp` |  | **Given** nhấn card<br>**When** sửa Tên/Mô tả, "Lưu thay đổi"<br>**Then** cập nhật | - Mở đúng bài, mặc định tab Thông tin, footer chỉ có "Hủy"/"Lưu thay đổi"<br>- Card cập nhật theo<br>- Mã bài học read-only, 12 số `CCAALLBBBEEE`; đổi `BBB` học kỳ hoặc Danh mục / Cấp độ khoá học thì 9 số đầu của mọi bài cập nhật, `EEE` giữ nguyên |
| Case 3: Thêm nhóm/nội dung & validation | High · Smoke |  | CD; `Nháp`; tab Nội dung |  | **Given** nhập tên vào ô thêm nhóm / thêm nội dung rồi "+"<br>**When** nhập mô tả, thử tên trống và mô tả nội dung >500 ký tự, rồi lưu<br>**Then** hệ thống lưu | - Nhóm/nội dung hiển thị đúng vị trí, bộ đếm đúng<br>- Tên trống: không thêm<br>- Không nhập quá 500 ký tự (mô tả nội dung)<br>- Sửa mô tả nhóm trực tiếp, không giới hạn<br>- Badge "Nội dung" = số nội dung |
| Case 4: Xoá & kéo-thả nội dung | High |  | CD; `Nháp`; ≥ 2 nhóm, mỗi nhóm có nội dung |  | **Given** tab Nội dung<br>**When** xoá nội dung; xoá nhóm (popup xác nhận); kéo-thả nhóm/nội dung; thử kéo nội dung sang nhóm khác; lưu<br>**Then** hệ thống cập nhật | - Xoá nhóm: popup nêu đúng tên + số nội dung, xoá kèm nội dung; `Huỷ` giữ nguyên<br>- Kéo-thả cùng cấp lưu đúng thứ tự; kéo sang nhóm khác bị chặn<br>- Badge cập nhật |
| Case 5: Cột buổi học theo S4 | High |  | CD; có bài đã tick và bài chưa tick ở S4; thời lượng chuẩn 01:30:00 |  | **Given** mở tab Nội dung<br>**When** xem cột phải, mở rộng 1 mục, bấm vào mục<br>**Then** hiển thị | - Chỉ các mục đã tick, số (N) đúng; mở rộng đúng thành phần/thời lượng; không chuyển màn, không sửa được<br>- Chưa tick: `Chưa có buổi học nào được chọn ở Lộ trình`<br>- Màu: 100% xanh, 83% vàng, 50% cam, 00:00:00 xám, 117% đỏ<br>- Đổi tick ở S4 thì cập nhật |
| Case 6: Tài nguyên (file, link, menu 3 chấm) | High |  | CD; `Nháp`; tab Tài nguyên |  | **Given** nhấn "+ Thêm tài nguyên"<br>**When** thêm file hợp lệ / thêm URL / dùng menu 3 chấm (Xem trước, Tải xuống, Xoá) / nhấn "Hủy" popup<br>**Then** hệ thống xử lý | - File vào đúng nhóm theo định dạng, link vào "Link tham khảo"<br>- Lưu/xoá có hiệu lực ngay, badge và icon card cập nhật ngay<br>- "Hủy" không hoàn tác tài nguyên đã upload/xoá<br>- Xem trước/Tải xuống/Xoá đúng |
| Case 7: Thêm/gỡ kiến thức | High |  | CD; `Nháp`; bài đã gắn sẵn 1 từ vựng cụm 1; S1 có Ngữ pháp cụm 2 |  | **Given** tab Kiến thức<br>**When** "+" → chọn `Ngữ pháp` → `Cụm 2` → tick 2 mục → `Thêm`; mở lại popup `Từ vựng` → `Cụm 1`; nhấn x 1 mục; lưu<br>**Then** hệ thống cập nhật | - Popup đi đúng 3 bước, chỉ hiện cụm/mục của loại đã chọn<br>- 2 mục ngữ pháp hiện trong danh sách, badge đúng<br>- Mục đã gắn tick sẵn + disable, không tạo trùng<br>- Gỡ không xoá dữ liệu S1<br>- Không có nút sửa nội dung kiến thức |
| Case 7b: Thêm/gỡ kỹ năng | High |  | CD; `Nháp`; S6 có bài Nghe, Đọc |  | **Given** tab Kỹ năng<br>**When** "+" → `Nghe` → chọn cụm → tick bài → `Thêm`; nhấn x; lưu<br>**Then** hệ thống cập nhật | - Bài kỹ năng hiện trong danh sách, badge đúng<br>- Không gắn trùng; gỡ không xoá dữ liệu S6 |
| Case 7c: Tag tự động ở tab Thông tin | High |  | CD; `Nháp` |  | **Given** bài chưa gắn gì<br>**When** thêm Từ vựng + Ngữ pháp, thêm Nghe; rồi gỡ hết Ngữ pháp<br>**Then** tab Thông tin cập nhật | - Kiến thức: `Từ vựng`, `Ngữ pháp` → còn `Từ vựng`; Kỹ năng: `Nghe`<br>- Không có nút "+" ở tab Thông tin<br>- Card và icon Kiến thức cập nhật sau khi lưu |
| Case 7e: Thêm cả cụm | High |  | CD; `Nháp`; cụm 1 Từ vựng có 5 mục (1 mục thiếu thông tin) |  | **Given** popup Thêm kiến thức<br>**When** chọn cụm 1 → "Chọn tất cả", chọn thêm 2 mục Ngữ pháp cụm 2, `Thêm`, lưu; sau đó thêm mục mới vào cụm 1 ở S1<br>**Then** hệ thống cập nhật | - Gắn 4 mục hợp lệ + 2 mục ngữ pháp (lựa chọn giữ khi đổi loại)<br>- Mục thiếu thông tin disable, không gắn<br>- Mục mới của cụm 1 **không** tự vào bài |
| Case 7h: Gỡ khỏi cụm / xoá cụm ở S1 | High |  | Bài 1 đã thêm 4 mục từ cụm 1 |  | **Given** ở S1 gỡ 1 mục khỏi cụm 1; sau đó xoá cụm 1<br>**When** xác nhận cảnh báo<br>**Then** bài học cập nhật | - Cảnh báo liệt kê Bài 1<br>- Gỡ mục: Bài 1 mất mục đó<br>- Xoá cụm: Bài 1 mất toàn bộ mục còn lại của cụm 1 |
| Case 7f: Xoá ở S1/S6 khi đang gắn | High |  | Mục đang gắn vào 2 bài học |  | **Given** CD xoá mục ở S1<br>**When** xác nhận cảnh báo<br>**Then** tự gỡ | - Popup cảnh báo nêu 2 bài học<br>- Mục biến mất khỏi 2 bài, badge/tag cập nhật |
| Case 7g: Xem chi tiết 2 khung | Medium |  | Bài có kiến thức |  | **Given** tab Kiến thức<br>**When** bấm 1 dòng<br>**Then** khung phải hiện chi tiết | - Dòng: x bên trái, từ + nghĩa dưới, tag loại bên phải<br>- Chi tiết đầy đủ, chỉ xem |
| Case 7d: Popup trống | Medium |  | CD; loại chưa có cụm / cụm rỗng; loại `Viết`/`Nói` |  | **Given** popup Thêm<br>**When** chọn loại/cụm rỗng<br>**Then** trạng thái trống | - Hiện thông báo trống, `Thêm` disable |
| Case 8: Lưu gộp, Hủy & lỗi | High |  | CD; `Nháp`; sửa ở nhiều tab |  | **Given** đã sửa Thông tin, Nội dung, Kiến thức, chuyển tab qua lại<br>**When** (a) "Lưu thay đổi"; (b) "Hủy"/X/click ngoài rồi `Bỏ thay đổi` hoặc `Ở lại`; (c) lưu khi backend lỗi<br>**Then** hệ thống xử lý | - Chuyển tab không mất thay đổi<br>- (a) Lưu tất cả tab một lần, 1 Toast `Thành Công`<br>- (b) Hiện popup `Bỏ thay đổi`; `Bỏ thay đổi` bỏ toàn bộ thay đổi mọi tab; `Ở lại` giữ nguyên; không có thay đổi thì đóng luôn<br>- (c) Toast `Có Lỗi Xảy Ra`, không ghi một phần, giữ thay đổi để thử lại |
| Case 9: Tăng/giảm số buổi | High |  | CD; học kỳ `Nháp` có 20 bài; bài cuối có nội dung/tài nguyên/kiến thức |  | **Given** đổi "Số buổi" ở S2<br>**When** tăng 20→30; giảm 30→20 rồi `Xoá bài học`; giảm rồi `Huỷ`<br>**Then** hệ thống xử lý | - Tăng: thêm bài 21–30, tên `Bài học 21`...`Bài học 30`, dữ liệu rỗng (3 icon tối), Mã 3 số cuối 021–030<br>- Giảm: popup nêu đúng bài 21–30; xác nhận → xoá mềm 10 bài cuối cùng dữ liệu con, bài 1–20 giữ nguyên<br>- Huỷ: số buổi và bài học không đổi |
| Case 10: Chỉ đọc & phân quyền | High |  | CD với học kỳ `Công khai`/`Vô hiệu`, hoặc học kỳ `Nháp` thuộc khoá học `Công khai`/`Vô hiệu`; role không phải CD |  | **Given** CD mở popup bài học / S2; hoặc user khác CD mở URL tab Bài học<br>**When** thử sửa thông tin/nội dung/tài nguyên/kiến thức, đổi "Số buổi" (kể cả gọi API trực tiếp)<br>**Then** hệ thống từ chối | - Popup chỉ đọc, ẩn "Lưu thay đổi"; không đổi được "Số buổi"<br>- Backend từ chối, dữ liệu không đổi<br>- Role khác CD không xem/thao tác được |

---

---

## 4. Câu hỏi cần xác nhận

| # | Câu hỏi | Trả lời |
|---|---|---|
| Q1 | **UI Figma cần bổ sung:** (a) tab Kiến thức 2 khung (danh sách trái + chi tiết phải); (b) tab Kỹ năng; (c) popup Thêm kiến thức / kỹ năng 1 màn 3 cột + "Chọn tất cả" + ô tìm kiếm; (d) field Kỹ năng/Kiến thức read-only ở tab Thông tin (bỏ "+"); (e) trạng thái trống; (f) popup cảnh báo ở S1 / S6 khi gỡ mục khỏi khoá, gỡ mục khỏi cụm, xoá cụm mà mục đang gắn bài học. | Chờ Figma |
| Q2 | Popup wizard hay 1 màn 3 cột? Chọn nhiều cụm/loại 1 lần? | 1 màn 3 cột, giữ lựa chọn khi đổi cụm/loại |
| Q3 | Có "Thêm cả cụm"? Mục thêm vào cụm sau có tự gắn? | "Thêm cả cụm" = chọn cụm rồi "Chọn tất cả", thêm một lần; không liên kết cụm với bài; mục mới phải thêm thủ công |
| Q4 | Xoá mục ở S1/S6 khi đang gắn bài học? | Cảnh báo khi xoá; xoá thì tự gỡ ở bài học liên quan (EX07) |
| Q5 | Field hiển thị trong danh sách? Xem chi tiết? | Trái: x + từ/ngữ pháp, nghĩa bên dưới, tag loại bên phải; bấm thì khung phải hiện chi tiết, chỉ xem |
| Q6 | Kéo-thả, tìm kiếm trong popup? | Không kéo-thả; popup có tìm kiếm; nút x bên trái từng dòng để gỡ |
| Q7 | Popup hiện `Viết`, `Nói`? | Hiện, không có dữ liệu |
| Q8 | Mục thiếu thông tin có được gắn? | Không (EX08) |
| Q9 | Gỡ 1 mục lẻ ở bài học? | Chỉ xoá liên kết mục ↔ bài, mục vẫn ở S1 / S6 và cụm |
| Q10 | ~~Tự gắn mục mới vào cụm~~ | Bỏ — không tự gắn |
| Q11 | Gỡ mục khỏi cụm / xoá cụm ở S1 / S6 thì bài học? | Gỡ theo: gỡ mục khỏi cụm → mục mất khỏi bài; xoá cụm → gỡ hết mục của cụm khỏi bài (EX09) |
| Q12 | Mục thuộc nhiều cụm thì xử lý thế nào khi gỡ/xoá cụm? | 1 mục chỉ thuộc 1 cụm |
| Q13 | Mục `Chưa phân cụm` có được thêm vào bài? | Không (EX10) |
| Q10 | Tự gắn mục mới vào cụm (EX09) có áp dụng cho bài thuộc học kỳ / khoá `Công khai` không? | Tạm: chỉ bài thuộc học kỳ + khoá `Nháp` |
