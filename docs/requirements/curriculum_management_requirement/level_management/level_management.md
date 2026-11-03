# Quản lý danh sách cấp độ

## 1. UI

### Trang 1: CD-CDO-010000 — Trang danh sách cấp độ

![Figma mới nhất · CD-CDO-010000](https://ics-figma-demo.vercel.app/api/figma-frame/CD-CDO-010000.png)

![Trang 1](./images/01-level-list.png)

*Danh sách cấp độ — nhấn để xem ảnh gốc*

**Mô tả:**

- `Curriculum Development Handler` có toàn quyền xem và quản lý cấp độ.
- Cấp độ là dữ liệu định nghĩa dùng lại tại feature `Quản lý danh mục`, cụ thể khi chọn cấp độ cho khóa học thuộc danh mục; một cấp độ có thể được nhiều khóa học tham chiếu.
- **Chỉ cấp độ `Nháp` được xóa**; cấp độ `Công Khai` / `Vô hiệu hóa` không được xóa, muốn ngừng dùng thì chuyển / giữ `Vô hiệu hóa` (xem REQ07, Flow 5).
- **Quyền sửa theo trạng thái** (xem REQ08): `Nháp` sửa được Tên, Mô tả, Mã cấp độ, ID. `Công Khai` / `Vô hiệu hóa` **chỉ sửa được Tên và Mô tả**; ID, Mã cấp độ chỉ đọc.

**Điểm cần lưu ý:**

- Tìm kiếm kích hoạt sau khi nhấn Enter, khớp một phần theo `ID`, `Tên cấp độ`, `Mã cấp độ` hoặc `Mô tả cấp độ`. Không phân biệt chữ hoa/thường.
- Chỉ cấp độ ở trạng thái `Công Khai` được hiển thị để chọn mới tại feature `Quản lý danh mục`.

- `A01.01` **ID**: Bắt buộc ngay khi tạo mới. 2 chữ số (`01`–`99`, xem REQ01), duy nhất toàn hệ thống (tính cả cấp độ đã xóa mềm), tự động sinh. Sửa tự do khi còn `Nháp`; khóa vĩnh viễn kể từ khi rời `Nháp`.
- `A01.02` **Tên cấp độ**: Bắt buộc, không giới hạn độ dài. Được phép trùng với cấp độ khác. Hệ thống tự cắt khoảng trắng đầu/cuối trước khi lưu. Sửa được ở mọi trạng thái.
- `A01.03` **Mô tả cấp độ**: Không bắt buộc, không giới hạn độ dài. Sửa được ở mọi trạng thái.
- `A01.04` **Mã cấp độ**: Không bắt buộc lúc tạo mới, mặc định rỗng. Bắt buộc phải có giá trị trước khi cấp độ được chuyển sang `Công Khai`. Được phép trùng với cấp độ khác (Mã cấp độ không phải định danh như ID, hệ thống không kiểm tra trùng). Hệ thống tự cắt khoảng trắng đầu/cuối trước khi lưu. Không ràng buộc định dạng; lưu và hiển thị đúng chữ hoa/thường như CD nhập (phân biệt hoa thường). Chỉ sửa được khi cấp độ đang `Nháp`; bị khóa, không được sửa kể từ khi cấp độ được `Công Khai`. Là mã tham chiếu hiển thị mà feature `Quản lý danh mục` dùng khi chọn cấp độ cho khóa học, ví dụ `HSK1`, `HSK2`.
- `A01.05` **Trạng thái**: 3 trạng thái `Nháp` (mặc định) / `Công Khai` / `Vô hiệu hóa`, theo rule chuyển trạng thái ở REQ02. Menu đổi trạng thái: đang `Nháp` chỉ hiện `Công Khai`; đang `Công Khai` chỉ hiện `Vô hiệu hóa`; đang `Vô hiệu hóa` chỉ hiện `Công Khai`.

### Trang 2: CD-CDO-010000 — Thanh "Thêm cấp độ mới"

![Figma mới nhất · CD-CDO-010000](https://ics-figma-demo.vercel.app/api/figma-frame/CD-CDO-010000.png)

**Điểm cần lưu ý:**

- Chỉ có **1 input**: `Tên cấp độ`, giống danh mục. Nhấn nút `+` / phím `Enter` để tạo.
- `Mô tả cấp độ` và `Mã cấp độ` để trống lúc tạo nhanh, có placeholder, bổ sung sau inline hoặc ngay tại popup Kích hoạt công khai (đối với Mã cấp độ).
- `ID` tự sinh 2 chữ số, duy nhất; `Trạng thái` mặc định `Nháp`.

### Trang 3: CD-CDO-010000 — Xóa cấp độ

![Figma mới nhất · CD-CDO-010000](https://ics-figma-demo.vercel.app/api/figma-frame/CD-CDO-010000.png)

**Mô tả:**

- Mỗi dòng cấp độ có thao tác `Xóa`. **Chỉ bấm được khi cấp độ đang `Nháp`**; cấp độ `Công Khai` / `Vô hiệu hóa`: `Xóa` hiện mờ, hover hiện tooltip `Chỉ xóa được cấp độ ở trạng thái Nháp. Chuyển Vô hiệu hóa nếu muốn ngừng dùng.`
- Khi CD chọn `Xóa` ở cấp độ `Nháp`, hệ thống hiển thị popup xác nhận; sau khi CD xác nhận, backend kiểm tra lại trạng thái và cấp độ có **đang được sử dụng** hay không rồi mới xóa.
- **Đang được sử dụng:** có ít nhất 1 khóa học chưa bị xóa mềm (ở bất kỳ trạng thái nào) đang tham chiếu cấp độ này. Khóa học đã bị xóa mềm không tính.

- `A03.01` **Popup xác nhận xóa**: Tiêu đề `Xóa cấp độ`; nội dung `Bạn có chắc chắn muốn xóa cấp độ "<Tên cấp độ>"?`; nút `Hủy`, `Xóa`.
- `A03.02` **Toast lỗi không được xóa**: Khi backend từ chối xóa: đóng popup xác nhận, hiển thị Toast lỗi `Có Lỗi Xảy Ra` với nội dung do backend trả về: `Chỉ xóa được cấp độ ở trạng thái Nháp.` (gọi API trực tiếp với cấp độ `Công Khai` / `Vô hiệu hóa`) hoặc `Cấp độ đang được sử dụng, không thể xóa.`; cấp độ giữ nguyên.

**Điểm cần lưu ý:**

- Không có lựa chọn "xóa bắt buộc"; cấp độ đã rời `Nháp` chỉ ngừng dùng được bằng cách chuyển `Vô hiệu hóa` qua menu đổi trạng thái (Flow 4).
- FE chỉ disable `Xóa` theo trạng thái (không phải `Nháp`); backend luôn kiểm tra lại trạng thái và tham chiếu tại thời điểm xóa, FE chỉ hiển thị Toast theo kết quả backend trả về.
- Cấp độ `Nháp` không thể đang được sử dụng vì chỉ cấp độ `Công Khai` mới được gắn vào khóa học (cùng rule với danh mục).

### Trang 4: CD-CDO-010010 — Popup Kích hoạt công khai cấp độ

![Figma mới nhất · CD-CDO-010010](https://ics-figma-demo.vercel.app/api/figma-frame/CD-CDO-010010.png)

![Trang 4](../category_management/images/07-category-publish.png)

*Popup Kích hoạt công khai cấp độ — giống Kích hoạt công khai danh mục - file `category_management.md`*

**Mô tả:**

- Popup chỉ mở khi CD chọn chuyển một cấp độ đang `Nháp` sang `Công Khai`. Chiều `Vô hiệu hóa → Công Khai` chuyển ngay, không mở popup, vì ID và Mã cấp độ đã được set và khóa ở lần công khai đầu tiên (Flow 4).
- Popup hiển thị đúng cấp độ đang thao tác, cho phép xác nhận/chỉnh sửa lần cuối `ID` trước khi khóa vĩnh viễn, **và** bắt buộc phải có `Mã cấp độ` (không để trống) trước khi xác nhận, vì đây là điều kiện để hiển thị chọn tại feature `Quản lý danh mục`.

- `A04.01` **Cấp độ**: Hiển thị (chỉ đọc) đúng Tên cấp độ đang thao tác.
- `A04.02` **Trạng thái hiện tại**: Hiển thị badge trạng thái hiện tại (`Nháp`) trước khi chuyển.
- `A04.03` **ID cấp độ**: Hiển thị ID hiện tại (2 chữ số) mà cấp độ đã có sẵn từ lúc tạo.
- `A04.04` **Ô nhập ID**: Hiển thị sẵn ID hiện tại và cho phép chỉnh sửa trực tiếp lần cuối trước khi khóa. Gõ vào ô sẽ kích hoạt kiểm tra lại (định dạng 2 chữ số + duy nhất toàn hệ thống).
- `A04.05` **Nút làm mới ID (biểu tượng xoay)**: Sinh một ID 2 chữ số mới, chưa được sử dụng, điền vào ô nhập; hệ thống phải kiểm tra lại ID mới này.
- `A04.06` **Mã cấp độ**: Nếu đã có giá trị: hiển thị chỉ đọc, không cho sửa trong popup. Nếu đang rỗng: hiển thị ô nhập **bắt buộc**, gõ vào sẽ kiểm tra không để trống sau khi cắt khoảng trắng đầu/cuối (không kiểm tra trùng). Sau khi công khai, Mã cấp độ bị khóa.
- `A04.07` **Biểu tượng kết quả kiểm tra**: ID (khi đang ở dạng nhập): tick xanh khi đúng định dạng và chưa trùng; x đỏ khi sai định dạng hoặc bị trùng. Mã cấp độ (khi đang ở dạng nhập): tick xanh khi có giá trị; x đỏ khi để trống.
- `A04.08` **Thông báo trạng thái**: ID: `ID có thể sử dụng` / `ID đang bị trùng` / `ID sai định dạng`. Mã cấp độ (khi đang trống): `Mã cấp độ có thể sử dụng` / `Mã cấp độ không được để trống`.
- `A04.09` **Ghi chú cảnh báo**: Hiển thị cố định: `Sau khi xác nhận, cấp độ sẽ chuyển sang trạng thái Công khai, chỉ còn sửa được Tên và Mô tả. ID và Mã cấp độ sẽ bị khóa`.
- `A04.10` **Nút `Công khai cấp độ`**: Chỉ bật khi ID hợp lệ, chưa trùng **và** Mã cấp độ có giá trị. Khi bấm, backend kiểm tra lại lần cuối rồi lưu ID, lưu Mã cấp độ (nếu vừa nhập) và chuyển trạng thái sang `Công Khai` trong cùng một giao dịch.
- `A04.11` **Nút `Hủy` / biểu tượng `X`**: Đóng popup, không lưu thay đổi ID/Mã cấp độ vừa nhập, không đổi trạng thái cấp độ.

**Điểm cần lưu ý:**

- CD có thể giữ nguyên ID có sẵn (không sửa gì) và chỉ cần bổ sung Mã cấp độ (nếu đang trống) rồi bấm `Công khai cấp độ`.
- Mỗi lần ô nhập ID hoặc ô nhập Mã cấp độ thay đổi giá trị, kết quả kiểm tra cũ của ô đó bị hủy hiệu lực; chỉ giá trị mới nhất được dùng để bật nút `Công khai cấp độ`.
- Trong lúc đang kiểm tra hoặc đang xử lý xác nhận, nút `Công khai cấp độ` phải bị vô hiệu hóa để tránh gửi lặp.
- Nếu backend từ chối ở bước kiểm tra cuối (ID vừa bị dùng, Mã cấp độ trống, hoặc dữ liệu không còn hợp lệ), cấp độ giữ nguyên trạng thái `Nháp`, popup giữ mở và hiển thị lỗi tương ứng để CD sửa lại.
- Sau khi xác nhận thành công: ID trở thành ID chính thức, vĩnh viễn không sửa được; Mã cấp độ cũng bị khóa, không được sửa nữa.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Thêm nhanh cấp độ**

```text
CD nhập Tên cấp độ vào ô "Thêm cấp độ mới" → Nhấn nút "+" / Nhấn Enter
  → Hệ thống cắt khoảng trắng đầu/cuối của Tên (Tên được phép trùng với cấp độ khác)
  → FE gọi API tạo cấp độ (ID tự sinh 2 chữ số duy nhất, Mô tả = trống, Mã cấp độ = trống, Trạng thái = Nháp) → BE tạo record
  → FE thêm dòng mới vào bảng
```

**Flow 2: Sửa cấp độ**

```text
CD mở một cấp độ
  → Sửa Tên cấp độ, Mô tả cấp độ (sửa được ở mọi trạng thái)
  → Sửa Mã cấp độ: chỉ khi cấp độ đang Nháp; từ khi Công Khai thì Mã cấp độ chỉ đọc
  → Nếu cấp độ đang Nháp: có thể sửa thêm ID (nhập tay 1 mã 2 chữ số khác)
  → Hệ thống cắt khoảng trắng đầu/cuối của Tên, kiểm tra Tên không để trống (Tên được phép trùng); Mã cấp độ được cắt khoảng trắng đầu/cuối, được phép trùng, không ràng buộc định dạng; nếu có sửa ID thì kiểm tra đúng 2 chữ số và chưa trùng (kể cả với cấp độ đã xóa mềm)
    → Hợp lệ: lưu thay đổi; nơi đang tham chiếu cấp độ hiển thị dữ liệu mới
    → Không hợp lệ: từ chối lưu, báo lỗi tại field tương ứng, giữ nguyên dữ liệu cũ
```

**Flow 3: Kích hoạt công khai cấp độ**

```text
CD đang ở Nháp, chọn chuyển sang Công Khai (menu khi Nháp chỉ có lựa chọn này)
  → Hệ thống mở popup Kích hoạt công khai cấp độ
  → Popup hiển thị Tên cấp độ, ID hiện tại (2 chữ số), trạng thái hiện tại (Nháp)
  → Mã cấp độ:
      → Đã có giá trị: hiển thị chỉ đọc
      → Đang trống: hiển thị ô nhập bắt buộc, kiểm tra không trống mỗi khi giá trị thay đổi (không kiểm tra trùng)
  → ID: CD giữ nguyên ID có sẵn, sửa tay, hoặc bấm làm mới để sinh ID mới — mỗi thay đổi đều được kiểm tra lại định dạng + trùng
  → Cả ID và Mã cấp độ hợp lệ: bật nút Công khai cấp độ
  → ID sai định dạng/trùng hoặc Mã cấp độ trống: hiển thị lỗi tương ứng, giữ nút Công khai cấp độ tắt
  → CD bấm Công khai cấp độ
  → Backend kiểm tra lại lần cuối: ID hợp lệ và chưa trùng, Mã cấp độ có giá trị, Tên còn hợp lệ
      → Hợp lệ: lưu ID, lưu Mã cấp độ (nếu vừa nhập) và chuyển cấp độ sang Công Khai trong cùng một giao dịch; ID và Mã cấp độ bị khóa từ đây
      → Không hợp lệ: không lưu, giữ nguyên trạng thái Nháp, giữ popup mở và hiển thị lỗi
  → CD bấm Hủy hoặc đóng popup: không lưu thay đổi ID/Mã cấp độ vừa nhập, không đổi trạng thái cấp độ
```

**Flow 4: Đổi trạng thái Công Khai ↔ Vô hiệu hóa**

```text
Công Khai → Vô hiệu hóa: CD chọn Vô hiệu hóa → không cần popup
Vô hiệu hóa → Công Khai: CD chọn Công Khai → chuyển ngay, không cần popup (ID và Mã cấp độ đã được set và khóa từ lần Nháp → Công Khai)
  → BE kiểm tra transition hợp lệ rồi chuyển trạng thái
  → Hệ thống chuyển trạng thái, giữ nguyên ID và Mã cấp độ đã có
  → Cấp độ Công Khai: được hiển thị trong danh sách lựa chọn cấp độ tại feature Quản lý danh mục
  → Cấp độ Vô hiệu hóa: không được hiển thị để chọn mới; liên kết đã lưu trước đó vẫn được giữ nguyên
  → CD không được chọn Nháp; UI không hiển thị lựa chọn này trong menu đổi trạng thái (Công Khai chỉ hiện Vô hiệu hóa, Vô hiệu hóa chỉ hiện Công Khai)
```

**Flow 5: Xóa cấp độ**

```text
CD chọn Xóa cấp độ (chỉ bấm được khi cấp độ Nháp; Công Khai / Vô hiệu hóa: nút mờ + tooltip) → Hệ thống hiển thị popup xác nhận xóa
  → CD bấm Hủy: đóng popup, không xóa, giữ nguyên dữ liệu
  → CD bấm Xóa → FE gọi API xóa → Backend kiểm tra cấp độ đang Nháp và có đang được khóa học nào (chưa bị xóa mềm) tham chiếu không
      → Đang Nháp và chưa được sử dụng: xóa mềm cấp độ; FE đóng popup, loại dòng khỏi bảng, hiển thị Toast Thành Công; cấp độ không còn trong danh sách lựa chọn ở feature khác
      → Không ở Nháp (gọi API trực tiếp) hoặc đang được sử dụng: backend từ chối, trả lỗi (EX11); FE đóng popup, hiển thị Toast lỗi với nội dung backend trả về; dữ liệu và liên kết không đổi
```

### 2.2. Ngoại lệ

- **EX01:** Tên cấp độ mới bị bỏ trống hoặc chỉ chứa khoảng trắng → chặn tạo mới, dữ liệu không thay đổi, disable nút "+". Nếu Enter thì hiện thông báo "Tên cấp độ không được bỏ trống".
- **EX02:** Cố sửa Mã cấp độ khi cấp độ đã rời `Nháp` (`Công Khai` / `Vô hiệu hóa`, qua UI hoặc gọi API trực tiếp) → hệ thống từ chối, field Mã cấp độ chỉ đọc, giữ nguyên giá trị. Mã cấp độ trùng với cấp độ khác **không** phải lỗi.
- **EX03:** Khi sửa lúc `Nháp`, ID sai định dạng (không đúng 2 chữ số) hoặc trùng (kể cả trùng ID của cấp độ đã xóa mềm) → hệ thống từ chối lưu, hiển thị lỗi tương ứng, giữ nguyên ID cũ.
- **EX04:** Gọi API hoặc thao tác trực tiếp đổi trạng thái không hợp lệ (từ `Công Khai`/`Vô hiệu hóa` về `Nháp`, hoặc từ `Nháp` sang thẳng `Vô hiệu hóa`) → hệ thống từ chối, hiển thị thông báo lỗi (ví dụ: `"Không thể chuyển sang trạng thái này."`), giữ nguyên trạng thái hiện tại. UI chỉ hiển thị lựa chọn hợp lệ: `Nháp` chỉ có `Công Khai`; `Công Khai` chỉ có `Vô hiệu hóa`; `Vô hiệu hóa` chỉ có `Công Khai`.
- **EX05:** Cố sửa ID khi cấp độ có trạng thái khác `Nháp` → hệ thống từ chối, field ID ở trạng thái chỉ đọc/disable.
- **EX06:** ID hợp lệ tại thời điểm nhập nhưng bị đối tượng khác dùng ngay trước lúc backend lưu (race condition) → backend từ chối tại bước kiểm tra cuối, không lưu, giữ nguyên trạng thái và hiển thị lỗi.
- **EX07:** Trong popup Kích hoạt công khai cấp độ, ID sai định dạng/trùng, hoặc Mã cấp độ (khi đang trống) để trống → hiển thị lỗi tương ứng ngay trong popup, vô hiệu hóa nút `Công khai cấp độ`, giữ cấp độ ở trạng thái hiện tại.
- **EX08:** CD bấm `Hủy` hoặc đóng popup Kích hoạt công khai cấp độ sau khi đã sửa ID hoặc nhập Mã cấp độ → không lưu các thay đổi đó, ID và Mã cấp độ giữ nguyên như trước khi mở popup, trạng thái vẫn là `Nháp`.
- **EX09:** Cấp độ không còn ở trạng thái `Công Khai` (bao gồm cả trường hợp đã bị xóa) tại thời điểm feature `Quản lý danh mục` lưu lựa chọn mới → từ chối liên kết mới và yêu cầu tải lại danh sách cấp độ.
- **EX10:** Người dùng không có quyền nhưng mở URL hoặc gửi request trực tiếp (kể cả thao tác xóa) → từ chối thao tác và không thay đổi dữ liệu.
- **EX11:** Xóa cấp độ `Công Khai` / `Vô hiệu hóa` (gọi API trực tiếp) → backend từ chối, trả lỗi `Chỉ xóa được cấp độ ở trạng thái Nháp.`. Xóa cấp độ `Nháp` đang được khóa học tham chiếu (tham chiếu phát sinh ngay trước lúc backend xóa) → backend từ chối, trả lỗi `Cấp độ đang được sử dụng, không thể xóa.`. FE hiển thị Toast lỗi với nội dung backend trả về, dữ liệu không đổi.
- **EX12:** Sửa Tên cấp độ thành trống hoặc chỉ chứa khoảng trắng (ở bất kỳ trạng thái nào) → từ chối lưu, báo lỗi tại field Tên, giữ nguyên Tên cũ.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | ID cấp độ | Tự động sinh khi tạo mới: đúng 2 chữ số trong dải `01`–`99` (giữ số 0 đứng đầu, ví dụ `05`; không cấp `00` vì `00` trong ID khoá học nghĩa là chưa chọn), duy nhất toàn hệ thống, tính cả cấp độ đã xóa mềm; hệ thống lấy mã nhỏ nhất chưa dùng. Hết mã trong dải thì từ chối tạo mới và báo lỗi `Đã hết ID cấp độ khả dụng (01–99).`. ID cấp độ là đoạn `LL` trong ID khoá học `CCAALLMMM` (xem `course_management.md` REQ06); vì chỉ cấp độ `Công Khai` mới được gán cho khoá học nên đoạn `LL` luôn là ID đã khoá, người dùng không nhập tay lúc thêm nhanh. Có thể chỉnh sửa thủ công trong lúc `Nháp`, kể cả ngay trong popup Kích hoạt công khai cấp độ trước khi xác nhận; bị khóa vĩnh viễn (không sửa được) kể từ khi rời khỏi `Nháp`. |
| REQ02 | Rule chuyển trạng thái | `Nháp → Công Khai` (một chiều, bắt buộc qua popup Kích hoạt công khai); `Công Khai ↔ Vô hiệu hóa` (hai chiều); không cho chuyển `Nháp → Vô hiệu hóa` trực tiếp và không cho chuyển về `Nháp` từ hai trạng thái còn lại. UI chỉ hiển thị lựa chọn hợp lệ: đang `Nháp` chỉ hiện `Công Khai`, đang `Công Khai` chỉ hiện `Vô hiệu hóa`, đang `Vô hiệu hóa` chỉ hiện `Công Khai`; nếu có request gọi trực tiếp với transition không hợp lệ, backend từ chối và trả thông báo lỗi (xem EX04). Chỉ cấp độ `Công Khai` được dùng cho lựa chọn mới; thay đổi trạng thái không tự động xóa liên kết đã tồn tại. |
| REQ03 | Thông tin cơ bản | Tên cấp độ bắt buộc, không giới hạn độ dài, được phép trùng với cấp độ khác; hệ thống tự cắt khoảng trắng đầu/cuối trước khi lưu. Tên và Mô tả sửa được ở mọi trạng thái. Mô tả không bắt buộc, có thể để trống lúc tạo và bổ sung sau. |
| REQ04 | Mã cấp độ | Không bắt buộc lúc tạo (mặc định rỗng), nhưng bắt buộc phải có giá trị trước khi cấp độ được chuyển sang `Công Khai`; việc bổ sung có thể thực hiện ở màn chi tiết hoặc ngay trong popup Kích hoạt công khai. Được phép trùng với cấp độ khác (không kiểm tra trùng), không ràng buộc định dạng, phân biệt chữ hoa/thường, tự cắt khoảng trắng đầu/cuối trước khi lưu. Chỉ sửa được khi cấp độ đang `Nháp`; bị khóa, không được sửa kể từ khi cấp độ được `Công Khai`. |
| REQ05 | Popup Kích hoạt công khai cấp độ | Chỉ khi chuyển từ `Nháp` sang `Công Khai`, hệ thống bắt buộc mở popup xác nhận, cho phép CD giữ nguyên/chỉnh sửa lần cuối ID và bổ sung Mã cấp độ nếu còn trống, trước khi khóa. Nút xác nhận chỉ bật khi ID hợp lệ, chưa trùng và Mã cấp độ không để trống; backend luôn kiểm tra lại ngay trước khi lưu và chuyển trạng thái trong cùng một giao dịch. Chiều `Vô hiệu hóa → Công Khai` chuyển ngay, không mở popup. |
| REQ06 | Cung cấp dữ liệu cho feature khác | Feature `Quản lý danh mục` phải lưu tham chiếu ổn định đến bản ghi cấp độ (qua ID), không chỉ lưu tên hoặc mã hiển thị. Danh sách lựa chọn cấp độ chỉ gồm các bản ghi `Công Khai` và chưa bị xóa, lấy từ dữ liệu cấp độ đã định nghĩa, không hard-code. |
| REQ07 | Xóa cấp độ | **Chỉ cấp độ `Nháp` được xóa** (xóa mềm), và chỉ khi **chưa được** bất kỳ khóa học nào (chưa bị xóa mềm) tham chiếu. Cấp độ `Công Khai` / `Vô hiệu hóa` không được xóa, chỉ được chuyển / giữ `Vô hiệu hóa` để ngừng chọn mới; liên kết đã lưu ở khóa học giữ nguyên. Nút `Xóa` mờ + tooltip khi không ở `Nháp`; backend luôn kiểm tra lại trạng thái và tham chiếu ngay tại thời điểm xóa, FE hiển thị Toast lỗi do backend trả về (EX11). Quy tắc chung với Khoá học, Học kỳ, Danh mục: chỉ `Nháp` được xóa. Sau khi xóa, cấp độ không còn hiển thị trong danh sách quản lý và không thể chọn mới ở bất kỳ đâu. Chỉ cấp độ `Công Khai` mới được gắn vào khóa học nên cấp độ `Nháp` thông thường không ở trạng thái đang được sử dụng (backend vẫn kiểm tra). |
| REQ08 | Quyền sửa theo trạng thái | `Nháp`: sửa Tên, Mô tả, Mã cấp độ, ID. `Công Khai` / `Vô hiệu hóa`: **chỉ sửa Tên và Mô tả**; ID, Mã cấp độ chỉ đọc, backend từ chối request sửa (EX02, EX05). Cấp độ không thể quay về `Nháp`. Quy tắc chung với Khoá học, Học kỳ, Danh mục (xem `course_management.md` REQ10). |

### 2.4. Ràng buộc

#### Quyền

| Role | Xem | Thêm | Sửa (theo REQ08) / đổi trạng thái | Xóa (chỉ `Nháp`, chưa được sử dụng) |
|---|:---:|:---:|:---:|:---:|
| Curriculum Development Handler | ✅ | ✅ | ✅ | ✅ |
| Các role khác | ❌ | ❌ | ❌ | ❌ |

#### Ràng buộc khác

**Phạm vi dữ liệu**

- Kiểm tra trùng ID phải thực hiện lại tại backend ngay thời điểm lưu, không chỉ dựa vào kết quả kiểm tra trước đó trên UI.
- `Curriculum Development Handler` có toàn quyền trên toàn bộ dữ liệu cấp độ.
- Không cho phép truy cập hoặc thực hiện hành động bị đánh dấu `❌`, kể cả khi gọi trực tiếp bằng URL hoặc request.
- Việc lưu ID/Mã cấp độ (khi giữ nguyên hoặc chỉnh sửa trong popup) và chuyển trạng thái sang `Công Khai` phải nguyên tử; không được có trường hợp trạng thái đã đổi nhưng ID/Mã cấp độ chưa được lưu hợp lệ hoặc ngược lại.
- Không được xóa cấp độ không ở `Nháp` hoặc đang được khóa học tham chiếu; việc kiểm tra tham chiếu và xóa mềm phải thực hiện tại backend trong cùng một giao dịch, không dựa vào kết quả kiểm tra trên UI.

---

---

## 3. Testcase

### Feature: Quản lý danh sách cấp độ

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Thêm nhanh cấp độ hợp lệ | High · Smoke | Flow 1 | Curriculum Development Handler | - | **Given** CD ở trang danh sách<br>**When** nhập Tên hợp lệ rồi nhấn nút "+" hoặc phím Enter<br>**Then** cấp độ mới được tạo | - Xuất hiện trong bảng<br>- ID tự sinh 2 chữ số, duy nhất<br>- Mô tả và Mã cấp độ trống, Trạng thái = `Nháp` |
| Case 2: Chặn thêm khi Tên trống | High | EX01 | Curriculum Development Handler | - | **Given** CD để trống ô nhập<br>**When** nhấn "+" hoặc Enter<br>**Then** hệ thống không cho tạo | - Không có cấp độ mới<br>- Nút "+" bị disable |
| Case 3: Sửa Tên/Mô tả ở mọi trạng thái | High · Smoke | Flow 2 / REQ03 | Curriculum Development Handler | Cấp độ đã tồn tại, bất kỳ trạng thái nào | **Given** CD mở cấp độ<br>**When** sửa Tên (kể cả trùng tên cấp độ khác, có khoảng trắng đầu/cuối) và/hoặc Mô tả<br>**Then** hệ thống lưu thay đổi | - Dữ liệu cập nhật đúng, Tên đã cắt khoảng trắng đầu/cuối<br>- `Công Khai` / `Vô hiệu hóa`: ngoài Tên, Mô tả thì ID, Mã cấp độ chỉ đọc<br>- Nơi đang tham chiếu cấp độ hiển thị dữ liệu mới |
| Case 4: Mã cấp độ được trùng, bị khóa sau khi Công Khai | High | Flow 2 / EX02 / REQ04 | Curriculum Development Handler | Đã có cấp độ khác Mã `HSK1`; cấp độ đang `Nháp` | **Given** CD mở cấp độ<br>**When** nhập Mã `HSK1` rồi lưu; công khai cấp độ; thử sửa Mã<br>**Then** hệ thống xử lý tương ứng | - Lưu Mã `HSK1` thành công, không báo trùng, giữ đúng chữ hoa/thường<br>- Sau khi `Công Khai`: field Mã cấp độ chỉ đọc; gọi API sửa Mã bị từ chối |
| Case 5: Sửa ID khi đang Nháp | High | Flow 2 / EX03 / REQ01 | Curriculum Development Handler | Cấp độ đang `Nháp` | **Given** CD sửa ID<br>**When** ID hợp lệ (2 chữ số, chưa trùng) hoặc không hợp lệ (sai định dạng/trùng)<br>**Then** hệ thống lưu hoặc từ chối tương ứng | - Hợp lệ: ID cập nhật đúng, có thể sửa lại nhiều lần khi còn `Nháp`<br>- Không hợp lệ: hiển thị lỗi, giữ nguyên ID cũ |
| Case 6: Khóa ID sau khi rời Nháp | High | EX05 / REQ01 | Curriculum Development Handler | Cấp độ đang `Công Khai` hoặc `Vô hiệu hóa` | **Given** cấp độ đã rời khỏi `Nháp`<br>**When** CD thử sửa ID<br>**Then** hệ thống từ chối | - Field ID chỉ đọc/disable<br>- ID không đổi |
| Case 7: Popup yêu cầu Mã cấp độ khi đang trống | High | Flow 3 / EX07 / REQ05 | Curriculum Development Handler | Cấp độ đang `Nháp`, Mã cấp độ trống | **Given** CD mở popup Kích hoạt công khai và nhập Mã cấp độ<br>**When** Mã có giá trị (kể cả trùng cấp độ khác) hoặc để trống<br>**Then** hệ thống bật/tắt nút `Công khai cấp độ` tương ứng | - Có giá trị: bấm `Công khai cấp độ` → lưu Mã cấp độ + ID, chuyển `Công Khai`, ID và Mã cấp độ bị khóa<br>- Để trống: hiển thị `Mã cấp độ không được để trống`, nút vẫn tắt, cấp độ giữ `Nháp` |
| Case 8: Công khai cấp độ khi ID và Mã cấp độ đã sẵn hợp lệ | High · Smoke | Flow 3 / REQ05 | Curriculum Development Handler | Popup đang mở, ID và Mã cấp độ đều đã hợp lệ | **Given** CD không sửa gì<br>**When** bấm `Công khai cấp độ`<br>**Then** hệ thống chuyển trạng thái | - Backend kiểm tra lại ID và Mã cấp độ hợp lệ<br>- Trạng thái chuyển thành `Công Khai`<br>- ID giữ nguyên và bị khóa vĩnh viễn |
| Case 9: Hủy popup Kích hoạt công khai cấp độ | High | EX08 | Curriculum Development Handler | Popup đang mở, CD đã sửa ID và/hoặc nhập Mã cấp độ | **Given** CD đã thay đổi ID và/hoặc nhập Mã cấp độ trong popup<br>**When** bấm `Hủy` hoặc đóng popup<br>**Then** hệ thống không lưu thay đổi | - ID và Mã cấp độ giữ nguyên như trước khi mở popup<br>- Trạng thái vẫn là `Nháp` |
| Case 10: Rule chuyển trạng thái | High | Flow 4 / EX04 / REQ02 | Curriculum Development Handler | Có cấp độ ở cả 3 trạng thái | **Given** CD mở menu đổi trạng thái hoặc gọi API với transition không hợp lệ<br>**When** thao tác được gửi<br>**Then** hệ thống xử lý tương ứng | - Menu: `Nháp` chỉ có `Công Khai`; `Công Khai` chỉ có `Vô hiệu hóa`; `Vô hiệu hóa` chỉ có `Công Khai`<br>- `Công Khai → Vô hiệu hóa`: chuyển ngay, không mở popup<br>- `Vô hiệu hóa → Công Khai`: chuyển ngay, không mở popup, ID và Mã giữ nguyên<br>- Gọi API `Nháp → Vô hiệu hóa` hoặc về `Nháp`: bị từ chối, trạng thái không đổi |
| Case 11: Không cho chọn mới cấp độ Vô hiệu hóa | High | EX09 / REQ06 | Curriculum Development Handler | Có cấp độ `Vô hiệu hóa` | **Given** người dùng mở field chọn cấp độ tại feature `Quản lý danh mục`<br>**When** hệ thống tải lựa chọn<br>**Then** chỉ trả về cấp độ `Công Khai` | - Không hiển thị cấp độ `Nháp` hoặc `Vô hiệu hóa` để chọn mới<br>- Liên kết đã lưu trước đó vẫn được giữ nguyên |
| Case 12: Xóa cấp độ chưa được sử dụng | High · Smoke | Flow 5 / REQ07 | Curriculum Development Handler | Cấp độ `Nháp`, không có khóa học nào tham chiếu | **Given** CD chọn `Xóa` cấp độ<br>**When** hệ thống hiện popup xác nhận, CD bấm `Xóa` hoặc `Hủy`<br>**Then** hệ thống xử lý tương ứng | - Xóa: cấp độ bị xóa mềm, không còn trong danh sách quản lý và danh sách lựa chọn<br>- Hủy: không xóa, giữ nguyên dữ liệu |
| Case 13: Tìm kiếm theo Mã cấp độ và Mô tả | Medium | UI | Curriculum Development Handler | Danh sách có nhiều cấp độ | **Given** CD gõ từ khoá vào ô tìm kiếm và nhấn Enter<br>**When** từ khoá là một phần Mã cấp độ; sau đó là 1 từ chỉ có trong Mô tả<br>**Then** trả về kết quả tương ứng | - Khớp một phần theo ID, Tên, Mã cấp độ hoặc Mô tả<br>- Từ khoá chỉ có trong Mô tả: trả về cấp độ đó<br>- Cấp độ có Mô tả trống không khớp theo Mô tả |
| Case 14: Kiểm tra quyền truy cập trực tiếp | High | EX10 / Ràng buộc quyền | Các role khác | Người dùng không có quyền | **Given** không có quyền quản lý cấp độ<br>**When** mở URL hoặc gửi request trực tiếp (bao gồm cả xóa)<br>**Then** hệ thống từ chối | - Không xem, sửa hoặc xóa được dữ liệu |
| Case 15: Chặn xóa cấp độ Công Khai / Vô hiệu hóa | High · Smoke | Flow 5 / REQ07 / EX11 | Curriculum Development Handler | Cấp độ A `Công Khai` đang được 3 khóa học tham chiếu; cấp độ B `Vô hiệu hóa` không có khóa học | **Given** CD mở thao tác `Xóa` của A và B<br>**When** quan sát nút; gọi API xóa trực tiếp<br>**Then** không xóa được | - Nút `Xóa` mờ, tooltip `Chỉ xóa được cấp độ ở trạng thái Nháp. Chuyển Vô hiệu hóa nếu muốn ngừng dùng.`<br>- API trực tiếp: trả lỗi `Chỉ xóa được cấp độ ở trạng thái Nháp.`<br>- A, B vẫn còn trong danh sách |
| Case 16: Chặn chuyển Nháp → Vô hiệu hóa | High | EX04 / REQ02 | Curriculum Development Handler | Cấp độ đang `Nháp` | **Given** CD mở menu đổi trạng thái hoặc gọi API chuyển sang `Vô hiệu hóa`<br>**When** thao tác được gửi<br>**Then** hệ thống từ chối | - UI không có lựa chọn `Vô hiệu hóa`<br>- Gọi API trực tiếp: trả lỗi, trạng thái giữ `Nháp` |
| Case 17: Backend chặn xóa khi đang được sử dụng | High | EX11 / REQ07 | Curriculum Development Handler | Cấp độ `Nháp` vừa được gắn vào khóa học ngay trước lúc xóa | **Given** gửi request xóa trực tiếp hoặc xác nhận xóa khi tham chiếu vừa phát sinh<br>**When** backend xử lý<br>**Then** backend từ chối | - Trả lỗi `Cấp độ đang được sử dụng, không thể xóa.`<br>- Qua UI: hiển thị Toast lỗi với nội dung trên<br>- Dữ liệu cấp độ và liên kết không đổi |
| Case 18: Khóa học đã xóa mềm không tính là đang sử dụng | Medium | REQ07 | Curriculum Development Handler | Cấp độ `Nháp`, chỉ được tham chiếu bởi khóa học đã bị xóa mềm | **Given** CD chọn `Xóa` cấp độ<br>**When** hệ thống kiểm tra tham chiếu<br>**Then** cho xóa như cấp độ chưa được sử dụng | - Hiển thị popup xác nhận xóa, xác nhận thì xóa mềm thành công |
| Case 19: Vô hiệu hóa → Công Khai không mở popup | High | Flow 4 / REQ05 | Curriculum Development Handler | Cấp độ đi `Nháp → Công Khai → Vô hiệu hóa` | **Given** CD mở menu đổi trạng thái<br>**When** chọn `Công Khai`<br>**Then** cấp độ chuyển `Công Khai` | - Không mở popup Kích hoạt công khai<br>- Trạng thái đổi ngay, ID và Mã cấp độ giữ nguyên<br>- Cấp độ hiển thị lại trong danh sách lựa chọn ở khoá học |
| Case 20: ID trùng ID cấp độ đã xóa mềm | Medium | EX03 / REQ01 | Curriculum Development Handler | Cấp độ đang `Nháp`; có cấp độ đã xóa mềm ID `22` | **Given** CD sửa ID thành `22`<br>**When** lưu (hoặc nhập trong popup)<br>**Then** hệ thống từ chối | - Báo `ID đang bị trùng`, ID giữ nguyên |
| Case 21: Sửa Tên thành trống | Medium | EX12 | Curriculum Development Handler | Cấp độ ở bất kỳ trạng thái nào | **Given** CD mở cấp độ<br>**When** xóa hết Tên rồi lưu<br>**Then** hệ thống từ chối | - Báo lỗi tại field Tên, giữ Tên cũ |
| Case 22: Tìm kiếm không phân biệt hoa thường | Medium | UI | Curriculum Development Handler | Có cấp độ Mã `HSK1` | **Given** CD ở trang danh sách<br>**When** tìm `hsk1`, `HSK1`, `Hsk1`<br>**Then** hệ thống trả kết quả | - Cả 3 lần đều tìm ra cấp độ Mã `HSK1` |
| Case 23: Mã cấp độ tự cắt khoảng trắng đầu/cuối | Low | REQ04 | Curriculum Development Handler | Cấp độ đang `Nháp` | **Given** CD nhập Mã `  HSK1  `<br>**When** lưu (hoặc nhập trong popup Kích hoạt công khai)<br>**Then** hệ thống lưu Mã | - Mã lưu là `HSK1`<br>- Mã chỉ có khoảng trắng: báo `Mã cấp độ không được để trống` |

### Feature: Quản lý danh sách cấp độ
