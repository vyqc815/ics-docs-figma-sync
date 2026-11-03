# Học Kỳ

## 1. UI

### Trang 1: CD-KH-030100 — Trang 1.1: Danh sách kỳ (bên phải)

![Figma mới nhất · CD-KH-030100](https://ics-figma-demo.vercel.app/api/figma-frame/CD-KH-030100.png)

![alt text](image.png)

**Mô tả:**
- CD dùng khu vực này để xem các học kỳ của khoá học, chọn **một** học kỳ để xem/chỉnh sửa, thêm mới, nhân bản, đổi trạng thái, kéo thả sắp xếp hoặc xoá.

**Điểm cần lưu ý:**
- Tên hiển thị trên card: `[Code] Tên đầu tab - Tên học kỳ` (ví dụ: `[2024.11] Tiếng Trung Trung Cấp (HSK5) (new) - HKI`). "Tên đầu tab" là tên của chính học kỳ (phần tiêu đề phía trên mô tả).
- **Chỉ chọn 1 học kỳ tại một thời điểm** (card highlight viền cam). Mở màn hình: chọn học kỳ đầu tiên; thêm mới/nhân bản: chọn học kỳ vừa tạo; đổi trạng thái: giữ nguyên học kỳ đang chọn.
- Thứ tự mặc định theo ngày tạo, học kỳ mới/bản nhân bản nằm **cuối danh sách**. CD kéo thả icon bên trái card để sắp xếp (học kỳ ở mọi trạng thái), thứ tự lưu lên BE.
- **Theo trạng thái khoá học** (xem `course_management.md` REQ10): Thêm mới, Nhân bản, Xoá, kéo thả học kỳ **chỉ làm được khi khoá học đang `Nháp`**. Khoá học `Công khai` / `Vô hiệu`: ẩn ô "Thêm mới", icon kéo thả, `Nhân bản` / `Xoá` trong menu "⋮"; toàn bộ học kỳ chỉ đọc (kể cả Tên, Mô tả học kỳ); **vẫn đổi được trạng thái học kỳ**.
- **Trạng thái** (bấm badge để đổi): `Nháp` (mặc định khi tạo/nhân bản), `Công khai`, `Vô hiệu`. **Chỉ học kỳ `Công khai` mới được dùng ở các màn hình/chức năng khác.**
- **Rule đổi trạng thái** (như Danh mục): `Nháp → Công khai/Vô hiệu` (một chiều); `Công khai ↔ Vô hiệu` (hai chiều); **không về `Nháp`**. Figma dropdown đang hiện cả 3 lựa chọn, **hành vi đúng**: học kỳ `Công khai`/`Vô hiệu` ẩn `Nháp`; học kỳ `Nháp` hiện đủ 3 (`Nháp` là mục đang chọn). Không cần vẽ lại Figma.
- Menu "⋮": **Nhân bản**, **Xoá** (xoá mềm, có popup xác nhận). **Chỉ học kỳ `Nháp` có `Xoá`**; học kỳ `Công khai` / `Vô hiệu` không có `Xoá` (muốn ngừng dùng thì để/chuyển `Vô hiệu`). Học kỳ `Nháp` **chỉ xoá được khi chưa được sử dụng**; đang được sử dụng thì chỉ được chuyển sang `Vô hiệu` (xem REQ01, Flow 4). `Nhân bản` có ở mọi trạng thái học kỳ (khi khoá học `Nháp`). Ô "Thêm mới" ở cuối danh sách là điểm thêm học kỳ duy nhất.

### Trang 2: CD-KH-030100 — Trang 1.2: Tab Thông tin (bên trái)

![Figma mới nhất · CD-KH-030100](https://ics-figma-demo.vercel.app/api/figma-frame/CD-KH-030100.png)

**Quyền sửa theo trạng thái (quan trọng, xem REQ05):**
- Điều kiện chung: khoá học phải đang `Nháp`. Khoá học `Công khai` / `Vô hiệu` → toàn bộ học kỳ chỉ đọc, kể cả Tên / Mô tả học kỳ (`course_management.md` REQ10).
- **Học kỳ `Nháp`:** sửa được toàn bộ tab Thông tin (gồm Tổng ôn, ID học kỳ), tab Bài Học, tab Kiểm Tra (kể cả bộ câu hỏi).
- **Học kỳ `Công khai` / `Vô hiệu`:** **chỉ sửa được Tên, Mô tả (đầu tab) và Tên học kỳ**; mọi field còn lại của tab Thông tin (Mã học kỳ, Code, Data token, Type, Data version, Tổng ôn), tab Bài Học, tab Kiểm Tra (kể cả bộ câu hỏi) và BTVN đều chỉ đọc. Muốn đổi nội dung thì **Nhân bản** học kỳ (hoặc nhân bản khoá học) rồi sửa trên bản sao `Nháp`.
- ID học kỳ: chỉ sửa được phần `BBB` khi `Nháp`, `BBB` khoá vĩnh viễn khi rời `Nháp`; phần đầu `CCAALLMMM` luôn theo ID khoá học (REQ02).
- Tất cả field tab Thông tin tự động lưu theo từng field.

- `A02.01` **Tên, Mô tả (đầu tab)**: Học kỳ `Nháp`: ✅; Học kỳ `Công khai` / `Vô hiệu`: ✅; Ghi chú: Double click để sửa, lưu khi rời ô
- `A02.02` **Tên học kỳ**: Học kỳ `Nháp`: ✅; Học kỳ `Công khai` / `Vô hiệu`: ✅; Ghi chú: Bắt buộc
- `A02.03` **Mã học kỳ**: Học kỳ `Nháp`: ✅; Học kỳ `Công khai` / `Vô hiệu`: ❌; Ghi chú: Mã hiển thị, cho phép trùng
- `A02.04` **ID học kỳ**: Học kỳ `Nháp`: ✅ (chỉ `BBB`); Học kỳ `Công khai` / `Vô hiệu`: ❌; Ghi chú: 12 chữ số `CCAALLMMMBBB` = ID khoá học + `BBB`; chỉ sửa 3 số cuối `BBB` (rule xem REQ02)
- `A02.05` **Code**: Học kỳ `Nháp`: ✅; Học kỳ `Công khai` / `Vô hiệu`: ❌; Ghi chú: Không bắt buộc, cho phép trùng, dùng làm `[Code]` ở tên hiển thị
- `A02.06` **Số buổi học**: Học kỳ `Nháp`: ❌; Học kỳ `Công khai` / `Vô hiệu`: ❌; Ghi chú: Tự tính = số bài học ở tab Bài Học (buổi học = bài học)
- `A02.07` **Trình độ, Danh mục**: Học kỳ `Nháp`: ❌; Học kỳ `Công khai` / `Vô hiệu`: ❌; Ghi chú: Lấy từ khoá học
- `A02.08` **Data token, Type (text), Data version (số)**: Học kỳ `Nháp`: ✅; Học kỳ `Công khai` / `Vô hiệu`: ❌; Ghi chú: CD nhập tay
- `A02.09` **Tổng ôn**: Học kỳ `Nháp`: ✅; Học kỳ `Công khai` / `Vô hiệu`: ❌; Ghi chú: Thêm / gỡ học kỳ

(Các cột ✅ chỉ áp dụng khi khoá học đang `Nháp`; khoá học không ở `Nháp` thì tất cả là ❌.)

**Tổng ôn:** nút "+ Thêm kỳ" chọn học kỳ từ **cùng khoá và khoá khác**; không chọn chính học kỳ đang xem, không chọn trùng, không giới hạn số lượng/trạng thái. Card hiển thị tên, `Code • Trình độ`, số bài học, nút `×` để gỡ. Chỉ thêm / gỡ được khi học kỳ đang xem `Nháp` và khoá học `Nháp`; ngược lại ẩn "+ Thêm kỳ" và nút `×`.

### Trang 3: CD-KH-030110, CD-KH-030120 — Trang 1.3: Popup Kích hoạt công khai học kỳ

![Figma mới nhất · CD-KH-030110](https://ics-figma-demo.vercel.app/api/figma-frame/CD-KH-030110.png)

![Figma mới nhất · CD-KH-030120](https://ics-figma-demo.vercel.app/api/figma-frame/CD-KH-030120.png)

Bắt buộc hiển thị khi chuyển `Nháp → Công khai`.

- `A03.01` **Tiêu đề**: `Kích hoạt công khai học kỳ`
- `A03.02` **Hiển thị**: Tên học kỳ (dạng `[Code] Tên - Tên học kỳ`), trạng thái hiện tại `Nháp`
- `A03.03` **Ô ID học kỳ**: Phần `CCAALLMMM` chỉ đọc (theo ID khoá học). Ô `BBB` mặc định giá trị hiện tại, sửa tay được; icon làm mới sinh `BBB` nhỏ nhất chưa dùng trong khoá
- `A03.04` **Thông báo dưới ô ID**: `ID có thể sử dụng` / `ID học kỳ không đúng định dạng` / `ID học kỳ đã được sử dụng`
- `A03.05` **Lưu ý**: `Sau khi công khai, học kỳ chỉ còn sửa được Tên và Mô tả. ID, thông tin khác, Tổng ôn, bài học, bài kiểm tra sẽ bị khoá và học kỳ không thể chuyển về Nháp.`
- `A03.06` **Nút**: `Huỷ` — `Công khai học kỳ` (chỉ bật khi ID hợp lệ, chưa trùng)

### Trang 4: Popup xoá học kỳ
- **Đang được sử dụng** khi có ít nhất 1 trong các tham chiếu sau (chỉ tính bản ghi chưa xoá mềm):
  - Học kỳ đang nằm trong **Tổng ôn** của học kỳ khác (cùng khoá hoặc khoá khác).
  - Học kỳ đang được **lớp học** sử dụng (lớp học gắn với khoá học và đã dùng học kỳ này để sinh bài học/lịch học).
- Bài học, bài kiểm tra, danh sách Tổng ôn **của chính** học kỳ là dữ liệu con, không tính là "đang được sử dụng".
- **Chưa được sử dụng** → popup xác nhận: tiêu đề `Xoá học kỳ`; nội dung: `Bạn có chắc chắn muốn xoá học kỳ "[Code] Tên - Tên học kỳ"? Toàn bộ dữ liệu của học kỳ (bài học, bài kiểm tra, Tổng ôn) cũng sẽ bị xoá.`; nút `Huỷ`, `Xoá`.
- **Đang được sử dụng** → popup không thể xoá: tiêu đề `Không thể xoá học kỳ`; nội dung `Học kỳ "[Code] Tên - Tên học kỳ" đang được sử dụng nên không thể xoá. Bạn có thể chuyển học kỳ sang Vô hiệu để ngừng sử dụng.`; liệt kê nơi đang dùng theo nhóm `Tổng ôn của học kỳ (N)` (`[Code] Tên - Tên học kỳ`, kèm tên khoá nếu khác khoá) và `Lớp học (N)`; nút `Đóng` và `Vô hiệu` (chỉ hiển thị khi học kỳ đang `Nháp` hoặc `Công khai`; đang `Vô hiệu` thì chỉ còn `Đóng`).
- Không có lựa chọn "xoá bắt buộc". Muốn xoá học kỳ đang nằm trong Tổng ôn thì CD phải tự gỡ học kỳ khỏi Tổng ôn của học kỳ kia trước (nếu học kỳ kia còn sửa được).
- Popup xoá chỉ mở với học kỳ `Nháp` (học kỳ `Công khai` / `Vô hiệu` không có `Xoá`, xem REQ01).

### Trang 5: CD-KH-030104, CD-KH-030110, CD-KH-030120 — Popup Nhân bản học kỳ

![Figma mới nhất · CD-KH-030104](https://ics-figma-demo.vercel.app/api/figma-frame/CD-KH-030104.png)

![Figma mới nhất · CD-KH-030110](https://ics-figma-demo.vercel.app/api/figma-frame/CD-KH-030110.png)

![Figma mới nhất · CD-KH-030120](https://ics-figma-demo.vercel.app/api/figma-frame/CD-KH-030120.png)

Mở khi CD chọn "⋮" → `Nhân bản` (chỉ khi khoá học `Nháp`; học kỳ nguồn ở trạng thái nào cũng được). **UI cần bổ sung** trên Figma.

- `A05.01` **Tiêu đề**: `Nhân bản học kỳ`
- `A05.02` **Nội dung**: `Tạo bản sao của học kỳ "[Code] Tên - Tên học kỳ"? Bản sao ở trạng thái Nháp, sao chép toàn bộ Thông tin, Tổng ôn, Bài học, Bài tập về nhà, Bài kiểm tra và bộ câu hỏi.`
- `A05.03` **Nút**: `Huỷ` — `Nhân bản` (disable + loading trong lúc BE xử lý)
- `A05.04` **Toast**: Thành công: `Đã nhân bản học kỳ.`; lỗi: `Có Lỗi Xảy Ra` với nội dung BE trả về (EX10).

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Thêm mới / Nhân bản**

```
Thêm mới: CD nhập tên vào ô "Thêm mới" → Enter hoặc "+" → BE tạo học kỳ (ID sinh theo REQ02, trạng thái Nháp)
Nhân bản (chỉ khi khoá học Nháp): CD chọn "⋮" → "Nhân bản" → popup Nhân bản học kỳ → CD bấm "Nhân bản"
          → BE sao chép toàn bộ dữ liệu liên quan trong cùng một giao dịch (REQ06): Thông tin, Tổng ôn,
            Bài Học (thông tin, nội dung, tài nguyên, liên kết kiến thức/kỹ năng), BTVN + bộ câu hỏi, Kiểm Tra + bộ câu hỏi
          → Tên học kỳ thêm hậu tố " (Bản sao)", ID sinh mới, trạng thái Nháp; học kỳ nguồn giữ nguyên
          → Lỗi ở bất kỳ bước nào: rollback toàn bộ, không có bản sao dở dang (EX10)
→ FE thêm học kỳ vào cuối danh sách, chọn học kỳ đó, hiển thị tab Thông tin
```

**Flow 2: Nháp → Công khai (có popup)**

```
CD chọn "Công khai" tại học kỳ Nháp → mở popup Kích hoạt công khai học kỳ
→ CD giữ nguyên / sửa tay / bấm làm mới ID → hệ thống kiểm tra lại định dạng + tính duy nhất mỗi khi ID thay đổi
→ ID hợp lệ: bật nút "Công khai học kỳ"; ID sai/trùng: báo lỗi, tắt nút
→ CD bấm "Công khai học kỳ" → BE kiểm tra lại ID lần cuối
    → Hợp lệ: lưu ID + chuyển sang Công khai trong cùng một giao dịch, ID khoá vĩnh viễn
    → Không hợp lệ: không lưu, giữ Nháp, giữ popup mở, hiển thị lỗi
→ CD bấm "Huỷ"/đóng popup: không lưu ID, không đổi trạng thái
```

**Flow 3: Đổi trạng thái còn lại**

```
Nháp → Vô hiệu: đổi trực tiếp, không popup, ID giữ nguyên và bị khoá
Công khai ↔ Vô hiệu: đổi trực tiếp, giữ nguyên ID
Về Nháp: UI ẩn lựa chọn; nếu gọi API trực tiếp, BE từ chối
```

**Flow 4: Xoá học kỳ**

```
CD chọn "Xoá" (chỉ hiển thị với học kỳ Nháp khi khoá học Nháp; học kỳ Công khai / Vô hiệu không có Xoá, BE từ chối — EX08)
→ FE gọi API kiểm tra học kỳ có đang được sử dụng không (Tổng ôn của học kỳ khác, lớp học)
→ Đang được sử dụng: KHÔNG cho xoá, mở popup "Không thể xoá học kỳ" kèm danh sách nơi đang dùng
   → CD bấm "Vô hiệu": chuyển học kỳ sang Vô hiệu (Flow 3); Tổng ôn / lớp học đang dùng giữ nguyên
   → CD bấm "Đóng": không thay đổi dữ liệu
→ Chưa được sử dụng: mở popup xác nhận xoá → CD bấm "Xoá"
   → BE kiểm tra lại tham chiếu lần cuối
      → Vẫn chưa được sử dụng: xoá mềm học kỳ (và dữ liệu con)
        → FE loại khỏi danh sách; nếu học kỳ đang chọn bị xoá thì chọn học kỳ đầu tiên còn lại
      → Vừa phát sinh tham chiếu: từ chối xoá, giữ nguyên dữ liệu, hiển thị popup "Không thể xoá học kỳ" (EX07)
   → CD bấm "Huỷ": không xoá
```

### 2.2. Ngoại lệ

- **EX01:** Xoá học kỳ cuối cùng → khu vực nội dung (3 tab) hiển thị trạng thái không có dữ liệu, ô "Thêm mới" vẫn hiển thị.
- **EX02:** Lưu tự động thất bại (lỗi mạng/server) → hiển thị Toast lỗi, giá trị field giữ nguyên theo input CD đã nhập (không rollback), reload lại vẫn là giá trị cũ.
- **EX03:** Sửa ID học kỳ khi không phải `Nháp` hoặc sửa field chỉ đọc (kể cả gọi API trực tiếp) → backend từ chối, dữ liệu không đổi.
- **EX04:** `BBB` sai định dạng (không đúng 3 chữ số `001`–`999`) hoặc trùng `BBB` của học kỳ khác trong cùng khoá học (kể cả đã xoá mềm), khi sửa ở tab Thông tin hoặc trong popup → từ chối lưu, báo lỗi tại field/popup, giữ nguyên ID cũ; riêng popup tắt nút `Công khai học kỳ`.
- **EX05:** ID hợp lệ lúc nhập nhưng bị dùng ngay trước lúc BE lưu (race condition) → BE từ chối ở bước kiểm tra cuối, giữ `Nháp`, giữ popup mở.
- **EX06:** Tên học kỳ trống hoặc chỉ có khoảng trắng → chặn tạo/lưu.
- **EX07:** Xoá học kỳ đang được sử dụng (gọi API trực tiếp, hoặc học kỳ vừa được thêm vào Tổng ôn/lớp học ngay trước lúc BE xoá) → BE từ chối, trả lỗi `Học kỳ đang được sử dụng, không thể xoá. Vui lòng chuyển sang Vô hiệu.`, dữ liệu không đổi.
- **EX08:** Xoá học kỳ `Công khai` / `Vô hiệu` (kể cả gọi API trực tiếp) → BE từ chối, trả lỗi `Chỉ xoá được học kỳ ở trạng thái Nháp.`, dữ liệu không đổi.
- **EX09:** Sửa field ngoài Tên / Mô tả / Tên học kỳ khi học kỳ `Công khai` / `Vô hiệu`; hoặc thêm, xoá, nhân bản, kéo thả, sửa bất kỳ dữ liệu học kỳ nào khi khoá học không ở `Nháp` (kể cả gọi API trực tiếp) → UI chỉ đọc; BE từ chối, trả lỗi `Học kỳ / khoá học không ở trạng thái Nháp, không thể chỉnh sửa.`, dữ liệu không đổi.
- **EX10:** Nhân bản học kỳ thất bại (lỗi mạng/server ở bất kỳ bước sao chép nào) → BE rollback toàn bộ, không tạo học kỳ/bài học/bài kiểm tra bản sao dở dang; Toast `Có Lỗi Xảy Ra`, học kỳ nguồn không đổi.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Xoá mềm & ràng buộc đang sử dụng | Không xoá vật lý; dữ liệu con cũng xoá mềm. **Chỉ học kỳ `Nháp` được xoá**; học kỳ `Công khai` / `Vô hiệu` không được xoá (quy tắc chung: chỉ `Nháp` được xoá; EX08). Chỉ xoá được khi khoá học đang `Nháp`. Học kỳ `Nháp` chỉ được xoá khi **chưa được sử dụng** (không nằm trong Tổng ôn của học kỳ khác, không được lớp học sử dụng). Học kỳ **đang được sử dụng thì không được xoá, chỉ được chuyển sang `Vô hiệu`**; nơi đang dùng giữ nguyên. BE kiểm tra tham chiếu và xoá mềm trong cùng một giao dịch (EX07). Khi xoá cả khoá học, ràng buộc tương tự áp dụng ở cấp khoá học (xem `course_management.md` REQ08). |
| REQ02 | ID học kỳ | 12 chữ số `CCAALLMMMBBB`: 9 số đầu = ID khoá học (`course_management.md` REQ06), `BBB` = số thứ tự học kỳ trong khoá (`001`–`999`), duy nhất trong khoá học (tính cả học kỳ đã xoá mềm) nên ID 12 số duy nhất toàn hệ thống. **Rule mặc định khi hệ thống tạo (Thêm mới/Nhân bản):** `BBB` = `BBB` lớn nhất đã dùng trong khoá + 1 (ví dụ khoá `100302001` → kỳ đầu `100302001001`, tiếp theo `100302001002`...). Nút làm mới trong popup lấy `BBB` nhỏ nhất chưa dùng. **CD nhập tay:** chỉ sửa `BBB`, đúng 3 chữ số và chưa dùng trong khoá. `BBB` sửa được khi `Nháp`, khoá vĩnh viễn khi rời `Nháp`. **Phần đầu `CCAALLMMM` luôn theo ID khoá học hiện tại:** khi khoá học còn `Nháp` và ID khoá đổi (đổi Danh mục / Cấp độ / `MMM`), ID mọi học kỳ của khoá (kể cả học kỳ đã `Công khai` / `Vô hiệu`) tự đồng bộ phần đầu, `BBB` giữ nguyên; Tổng ôn và lớp học tham chiếu theo bản ghi nên không bị ảnh hưởng. Hết `BBB` (đã dùng tới `999`) thì từ chối tạo / nhân bản, Toast `Đã hết ID học kỳ khả dụng trong khoá học.`. BE luôn kiểm tra lại tính duy nhất ngay lúc lưu. |
| REQ03 | Nguyên tử khi công khai | Lưu ID và chuyển sang `Công khai` phải nằm trong cùng một giao dịch. |
| REQ04 | Phạm vi dùng theo trạng thái | Chỉ học kỳ `Công khai` được dùng ở nơi khác; `Nháp`/`Vô hiệu` không hiển thị để chọn mới ở nơi khác. Học kỳ chuyển sang `Vô hiệu` khi đang được dùng (Tổng ôn đã gắn, lớp học đã sinh dữ liệu) thì các liên kết đã có vẫn giữ nguyên. |
| REQ05 | Quyền sửa theo trạng thái | Chỉ sửa được khi khoá học `Nháp`. Học kỳ `Nháp`: sửa toàn bộ (Thông tin, Tổng ôn, Bài học, Kiểm tra, BTVN, bộ câu hỏi). Học kỳ `Công khai` / `Vô hiệu`: **chỉ sửa Tên, Mô tả (đầu tab), Tên học kỳ**; còn lại chỉ đọc, kể cả chi tiết bên trong (bài học, bài kiểm tra, bộ câu hỏi, BTVN). Đổi trạng thái học kỳ vẫn được ở mọi trạng thái khoá học. BE kiểm tra trạng thái học kỳ và khoá học với mọi request ghi (EX09). |
| REQ06 | Nhân bản học kỳ (deep clone) | Chỉ khi khoá học `Nháp`; học kỳ nguồn ở mọi trạng thái. Bản sao: Tên học kỳ + ` (Bản sao)`, `BBB` mới theo REQ02, trạng thái `Nháp`, nằm cuối danh sách, được chọn. Sao chép **toàn bộ**: mọi field tab Thông tin; Tổng ôn (giữ nguyên các học kỳ được tham chiếu); bài học (thông tin, nhóm + nội dung, tài nguyên — file sao chép thành file mới, link giữ URL —, liên kết kiến thức / kỹ năng, Mã bài học sinh lại theo `BBB` học kỳ mới (`semester/lesson/lesson.md` REQ05), 3 số cuối giữ nguyên); BTVN và bộ câu hỏi của từng bài học (tạo bản ghi câu hỏi mới); bài kiểm tra (thông tin, thứ tự, ID 10 số mới) và bộ câu hỏi; tick Lộ trình (S4) của các bài học. Không sao chép: lớp học / lịch / kết quả làm bài, tham chiếu từ học kỳ khác vào học kỳ nguồn (Tổng ôn nơi khác vẫn trỏ học kỳ nguồn). Một giao dịch, lỗi thì rollback (EX10). Nhân bản cả khoá học xem `course_management.md` REQ11. |

### 2.4. Ràng buộc

#### Quyền

| Role | Xem / Tạo / Sửa / Nhân bản / Đổi trạng thái / Sắp xếp / Xoá |
|---|:---:|
| CD | ✅ (Tạo / Nhân bản / Sắp xếp / Xoá / Sửa chỉ khi khoá học `Nháp`; Sửa theo REQ05; Xoá chỉ khi học kỳ `Nháp` và chưa được sử dụng) |
| Các role khác | ❌ (kể cả gọi trực tiếp bằng URL hoặc request) |

#### Ràng buộc khác

---

---

## 3. Testcase

### Feature: Học Kỳ

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Chọn học kỳ và hiển thị | High · Smoke | Trang 1.1 | CD | Khoá có ≥ 2 học kỳ | **Given:** CD mở màn hình Học Kỳ<br>**When:** màn hình tải xong, rồi CD click học kỳ khác<br>**Then:** hệ thống hiển thị thông tin học kỳ được chọn | - Mặc định chọn học kỳ đầu tiên<br>- Chỉ 1 card highlight tại một thời điểm<br>- Tên card đúng `[Code] Tên - Tên học kỳ` |
| Case 2: Thêm mới | High · Smoke | Flow 1 | CD | Khoá đã có học kỳ | **Given:** CD nhập tên vào ô "Thêm mới"<br>**When:** nhấn Enter hoặc "+" (thử cả tên trống)<br>**Then:** hệ thống tạo học kỳ | - Học kỳ mới trạng thái `Nháp`, nằm cuối danh sách, được chọn<br>- ID = ID khoá học + `BBB` (`BBB` lớn nhất trong khoá + 1), ví dụ `100302001002`<br>- Tên trống/chỉ khoảng trắng: không tạo, báo `Tên học kỳ không được bỏ trống.` |
| Case 3: Nhân bản | High · Smoke | Flow 1 / REQ06 | CD | Khoá học `Nháp`; có học kỳ `Công khai` (có bài học đủ nội dung / tài nguyên / kiến thức, BTVN, bài kiểm tra có câu hỏi, Tổng ôn) | **Given:** CD chọn "⋮" → "Nhân bản" → bấm `Nhân bản` ở popup<br>**When:** hệ thống xử lý<br>**Then:** tạo bản sao | - Bản sao trạng thái `Nháp`, ID mới, Tên học kỳ có hậu tố " (Bản sao)", nằm cuối danh sách, được chọn<br>- Sao chép đủ Thông tin, Tổng ôn, Bài Học (nội dung, tài nguyên, kiến thức/kỹ năng), BTVN + câu hỏi, Kiểm Tra + câu hỏi; Mã bài học theo `BBB` học kỳ mới<br>- Sửa / xoá dữ liệu ở bản sao không ảnh hưởng học kỳ nguồn<br>- Học kỳ nguồn giữ nguyên dữ liệu và trạng thái<br>- Nguồn `Nháp`/`Vô hiệu` cũng cho bản sao `Nháp` |
| Case 4: Quyền sửa theo trạng thái | High | Trang 1.2 / REQ05 | CD | Khoá học `Nháp`; có học kỳ `Nháp`, `Công khai`, `Vô hiệu` | **Given:** CD mở từng học kỳ<br>**When:** CD sửa field tab Thông tin, Tổng ôn, nội dung tab Bài Học/Kiểm Tra, bộ câu hỏi<br>**Then:** hệ thống chỉ cho sửa phần được phép | - `Nháp`: sửa được toàn bộ (tự lưu, Toast `Đã lưu thay đổi.`)<br>- `Công khai` / `Vô hiệu`: chỉ sửa Tên, Mô tả, Tên học kỳ; Mã học kỳ, ID, Code, Data token, Type, Data version, Tổng ôn, Bài Học, Kiểm Tra, bộ câu hỏi chỉ đọc; API trực tiếp bị từ chối (EX09)<br>- Số buổi học, Trình độ, Danh mục luôn chỉ đọc; Số buổi học = số bài học tab Bài Học<br>- Lưu thất bại: Toast lỗi, giữ nguyên input, không rollback |
| Case 5: Sửa ID học kỳ khi Nháp | High | REQ02 / EX04 | CD | Học kỳ `Nháp` | **Given:** CD sửa `BBB` của ID học kỳ<br>**When:** nhập `BBB` hợp lệ, rồi `BBB` sai định dạng hoặc trùng<br>**Then:** hệ thống lưu hoặc từ chối | - Phần `CCAALLMMM` chỉ đọc, không sửa được<br>- `BBB` đúng 3 chữ số, chưa dùng trong khoá (kể cả không liền mạch): lưu thành công, Mã bài học đồng bộ theo<br>- `BBB` sai/trùng: báo lỗi, giữ ID cũ |
| Case 5b: ID học kỳ đồng bộ theo ID khoá học | High | REQ02 | CD | Khoá học `Nháp` ID `100302001`; HK I `Công khai` ID `100302001001`, HK II `Nháp` ID `100302001002` | **Given:** CD đổi Cấp độ của khoá học sang cấp độ có ID `05`<br>**When:** hệ thống cấp lại ID khoá (ví dụ `100305001`)<br>**Then:** ID học kỳ đồng bộ | - HK I = `100305001001`, HK II = `100305001002` (`BBB` giữ nguyên, kể cả HK I đã công khai)<br>- Mã bài học đồng bộ theo<br>- Tổng ôn ở khoá khác đang chứa HK I vẫn trỏ đúng HK I |
| Case 6: Nháp → Công khai (popup) | High · Smoke | Flow 2 | CD | Học kỳ `Nháp` | **Given:** CD chọn "Công khai"<br>**When:** thao tác trong popup (giữ nguyên ID / sửa tay / làm mới / nhập ID sai-trùng / ID bị dùng ngay lúc lưu / Huỷ)<br>**Then:** hệ thống xử lý theo từng nhánh | - Giữ nguyên, sửa tay hợp lệ, làm mới: bật nút, công khai thành công, ID khoá, Toast `Đã công khai học kỳ. ID học kỳ đã được khoá.`<br>- ID sai/trùng: báo lỗi trong popup, tắt nút, vẫn `Nháp`<br>- Race condition: BE từ chối, giữ `Nháp`, giữ popup<br>- Huỷ: không lưu ID, không đổi trạng thái |
| Case 7: Rule đổi trạng thái | High | Flow 3 | CD | Có học kỳ ở 3 trạng thái | **Given:** CD bấm badge trạng thái<br>**When:** Nháp → Vô hiệu; Công khai ↔ Vô hiệu; thử về Nháp (UI và API)<br>**Then:** hệ thống áp dụng rule | - Nháp → Vô hiệu: không popup, ID khoá<br>- Công khai ↔ Vô hiệu: đổi 2 chiều, giữ ID, giữ học kỳ đang chọn<br>- Học kỳ `Công khai`/`Vô hiệu` không có lựa chọn `Nháp`; API về Nháp bị từ chối với `Không thể chuyển trạng thái này về Nháp.` |
| Case 8: Xoá học kỳ chưa được sử dụng | High · Smoke | Flow 4 / EX01 / REQ01 | CD | Học kỳ B không nằm trong Tổng ôn của học kỳ nào và không được lớp học sử dụng | **Given:** CD chọn "Xoá" học kỳ B (`Nháp`, khoá học `Nháp`)<br>**When:** xác nhận (hoặc Huỷ popup)<br>**Then:** hệ thống xoá mềm hoặc giữ nguyên | - Xác nhận: B bị xoá mềm; nếu B đang chọn thì chọn học kỳ đầu tiên còn lại<br>- Huỷ: dữ liệu không đổi<br>- Xoá học kỳ cuối: khu vực nội dung hiển thị không có dữ liệu, ô "Thêm mới" vẫn hiển thị |
| Case 9: Tổng ôn và kéo thả | Medium | Trang 1.1 / 1.2 | CD | Khoá học `Nháp`; có ≥ 2 học kỳ, kỳ khác khoá | **Given:** CD thêm/gỡ Tổng ôn và kéo thả sắp xếp<br>**When:** thao tác ở học kỳ `Nháp`, rồi ở học kỳ `Công khai`<br>**Then:** hệ thống lưu hoặc chặn | - Tổng ôn chọn được từ cùng khoá và khoá khác; không chọn chính nó, không chọn trùng; gỡ không xoá học kỳ khỏi danh sách<br>- Học kỳ `Công khai`: ẩn "+ Thêm kỳ" và nút `×`<br>- Kéo thả dùng được với học kỳ ở mọi trạng thái khi khoá `Nháp`, thứ tự giữ nguyên sau khi tải lại |
| Case 10: Quyền và phạm vi dùng | High | REQ04 / Ràng buộc | CD và role khác | User đã đăng nhập; có học kỳ Nháp/Công khai/Vô hiệu | **Given:** user mở màn hình/URL Học Kỳ hoặc màn hình khác dùng học kỳ<br>**When:** thực hiện thao tác hoặc chọn học kỳ<br>**Then:** hệ thống kiểm tra quyền và trạng thái | - Role khác CD bị từ chối xem/thao tác (kể cả gọi trực tiếp)<br>- Ở nơi khác chỉ học kỳ `Công khai` được dùng; `Nháp`/`Vô hiệu` không hiển thị |
| Case 11: Chặn xoá học kỳ nằm trong Tổng ôn | High · Smoke | Flow 4 / REQ01 | CD | Học kỳ B nằm trong Tổng ôn của học kỳ A | **Given:** CD chọn "Xoá" học kỳ B<br>**When:** hệ thống kiểm tra tham chiếu<br>**Then:** không cho xoá | - Hiển thị popup `Không thể xoá học kỳ`, liệt kê học kỳ A<br>- Không có popup xác nhận xoá; B và Tổng ôn của A giữ nguyên<br>- Gỡ B khỏi Tổng ôn của A rồi xoá lại thì xoá được |
| Case 12: Không xoá học kỳ Vô hiệu | High | Flow 4 / REQ01 / EX08 | CD | Học kỳ `Vô hiệu`, chưa được sử dụng | **Given:** CD mở menu "⋮"<br>**When:** xem lựa chọn hoặc gọi API xoá trực tiếp<br>**Then:** không có `Xoá`; BE từ chối | - Menu chỉ có `Nhân bản`<br>- API trả lỗi `Chỉ xoá được học kỳ ở trạng thái Nháp.`, dữ liệu không đổi |
| Case 13: BE chặn xoá học kỳ đang được sử dụng | High | EX07 / REQ01 | CD | Học kỳ có tham chiếu (hoặc vừa phát sinh ngay trước lúc xoá) | **Given:** gửi API xoá trực tiếp hoặc xác nhận khi vừa phát sinh tham chiếu<br>**When:** BE xử lý<br>**Then:** BE từ chối | - Trả lỗi `Học kỳ đang được sử dụng, không thể xoá. Vui lòng chuyển sang Vô hiệu.`<br>- Dữ liệu không đổi |
| Case 14: Không xoá học kỳ Công khai | High | Flow 4 / EX08 / REQ01 | CD | Học kỳ A đang `Công khai`, chưa được sử dụng | **Given:** CD mở menu "⋮" của A<br>**When:** xem lựa chọn hoặc gọi API xoá trực tiếp<br>**Then:** không có `Xoá`; BE từ chối | - Trả lỗi `Chỉ xoá được học kỳ ở trạng thái Nháp.`<br>- Vẫn chuyển A sang `Vô hiệu` được |
| Case 15: Khoá học Công khai khoá toàn bộ học kỳ | High | REQ05 / EX09 | CD | Khoá học `Công khai` có học kỳ `Nháp` và `Công khai` | **Given:** CD mở màn Học kỳ<br>**When:** thử thêm, nhân bản, xoá, kéo thả học kỳ; sửa Tên / Mô tả học kỳ; sửa bài học / bài kiểm tra; đổi trạng thái học kỳ<br>**Then:** chỉ đổi trạng thái được | - Ẩn ô Thêm mới, icon kéo thả, `Nhân bản` / `Xoá`; mọi field chỉ đọc<br>- API ghi trực tiếp bị từ chối (EX09)<br>- Đổi trạng thái học kỳ vẫn thành công |
| Case 16: Nhân bản học kỳ thất bại | Medium | EX10 / REQ06 | CD | Giả lập lỗi BE khi sao chép bộ câu hỏi | **Given:** CD bấm `Nhân bản`<br>**When:** BE lỗi giữa chừng<br>**Then:** không tạo bản sao | - Toast `Có Lỗi Xảy Ra`<br>- Danh sách học kỳ không đổi, không có dữ liệu bản sao dở dang |
