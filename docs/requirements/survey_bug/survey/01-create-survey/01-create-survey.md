# Tạo khảo sát (Admin)

## 1. UI

### Trang 1: ADM-KS-010000 — Khảo sát / Tạo khảo sát / Tạo cuộc khảo sát

![Trang 1](./images/adm-ks-010000.png)

**Mô tả:**
- Admin tạo khảo sát và soạn câu hỏi, tab `Giáo viên`. Panel phải: danh sách khảo sát theo tab đối tượng (Giáo viên / Lớp / Học viên). Panel giữa: soạn câu hỏi cho khảo sát đang chọn.

**Điểm cần lưu ý:**
- Tab **Giáo viên** và **Lớp** giống hệt nhau, chỉ khác danh sách. Khảo sát tạo ở tab nào chỉ giao được cho đối tượng của tab đó.
- Ô **"Thêm cuộc khảo sát"**: nhập tên → `Enter` hoặc bấm (+) → tạo khảo sát ngay (gọi API), trạng thái **Nháp** → card mới thêm cuối danh sách và được chọn luôn. Ô trống → không làm gì.
- Card:
  - Tag dropdown trạng thái **Nháp / Công khai / Vô hiệu**; dropdown chỉ hiện các trạng thái được phép chuyển tới (mục 2.4).
  - Icon **nhân bản khảo sát** cạnh thùng rác.
  - Card đang chọn: viền cam, icon kéo thả để đổi thứ tự. Khảo sát Nháp: sửa tên và mô tả trực tiếp trên card (placeholder "Nhập mô tả"), lưu khi blur.
  - Thời gian = thời điểm tạo. Mô tả hiển thị tối đa 2 dòng (…).
- Khảo sát **Công khai / Vô hiệu**: panel giữa và card chỉ xem — ẩn nút "Lưu", ô "Thêm câu hỏi mới", icon nhân bản / xoá câu, kéo thả; hiện thông báo "Khảo sát không thể sửa. Nhân bản để tạo bản mới." "Xem trước" vẫn dùng được.
- Câu hỏi đang focus: viền cam + icon kéo thả để đổi thứ tự. "Câu N" tự đánh lại số sau khi kéo thả / xoá / nhân bản.
- Dropdown loại câu hỏi: **Trắc nghiệm** (chọn 1), **Hộp kiểm** (chọn nhiều), **Đoạn ngắn**, **Đánh giá**.
  - Trắc nghiệm / Hộp kiểm: dòng cuối "Nhập câu trả lời" là dòng thêm mới — gõ vào thì thành đáp án và sinh dòng trống mới bên dưới. (X) xoá đáp án. `Enter` ở một đáp án → focus dòng kế tiếp.
  - Đoạn ngắn: chỉ hiển thị ô "Câu trả lời ngắn" disable (minh hoạ).
  - Đánh giá: cố định 5 sao, không click được (minh hoạ).
  - Đổi Trắc nghiệm ↔ Hộp kiểm: giữ đáp án. Đổi sang Đoạn ngắn / Đánh giá: bỏ đáp án.
- Icon nhân bản ở câu hỏi: chèn bản sao ngay dưới câu hiện tại. Icon thùng rác: xoá câu (chỉ mất hẳn khi bấm Lưu).
- Ô **"Thêm câu hỏi mới"**: `Enter` hoặc (+) → thêm câu cuối danh sách, loại mặc định Trắc nghiệm, nội dung = text đã nhập (ô trống thì thêm câu rỗng), focus vào câu mới.
- Nút **"Lưu"**: lưu toàn bộ câu hỏi của khảo sát đang chọn trong một lần gọi API.
- Popup **Xem trước khảo sát** (nút "Xem trước"): xem khảo sát đúng như người làm nhìn thấy; dùng dữ liệu đang soạn trên màn hình (kể cả chưa lưu); chỉ xem, không chọn / nhập được; không hiển thị dòng đáp án trống. "Quay lại chỉnh sửa" → đóng popup. "Lưu khảo sát" → giống nút Lưu (có validate), lưu thành công thì đóng popup; khảo sát không phải Nháp → ẩn "Lưu khảo sát".

### Trang 2: ADM-KS-020000 — Khảo sát / Tạo khảo sát cho lớp / Tạo cuộc khảo sát

![Trang 2](./images/adm-ks-020000.png)

**Mô tả:**
- Tab `Lớp`: giống hệt tab Giáo viên (Trang 1), chỉ khác danh sách khảo sát ở panel phải (khảo sát dành cho lớp); khảo sát tạo ở tab này chỉ giao được cho đối tượng Lớp.

### Trang 3: ADM-KS-030000 — Khảo sát / Tạo khảo sát học viên / Tạo cuộc khảo sát

![Trang 3](./images/adm-ks-030000.png)

**Mô tả:**
- Tab `Học viên`: giống tab Giáo viên, thêm **loại khảo sát** cho từng khảo sát.

**Điểm cần lưu ý:**
- Mỗi card có dropdown loại: **Bắt buộc** (tag đỏ) / **Tuỳ chọn** (tag xanh). Tạo nhanh mặc định là Tuỳ chọn. Đổi loại → lưu ngay; chỉ đổi được khi khảo sát Nháp.
- Loại khảo sát quyết định popup chọn người nhận khi giao (xem [02-assign-survey.md](./02-assign-survey.md)).

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Tạo nhanh khảo sát**

```
Chọn tab (GV / Lớp / HV) → nhập tên ở "Thêm cuộc khảo sát" → Enter / (+)
  → API tạo khảo sát (đối tượng = tab, trạng thái = Nháp; tab HV: loại = Tuỳ chọn)
  → thêm card cuối danh sách → tự chọn card → panel giữa trống, focus "Thêm câu hỏi mới"
```

**Flow 2: Soạn câu hỏi và lưu** *(chỉ khảo sát Nháp)*

```
Chọn card → API lấy câu hỏi → thêm / sửa / xoá / nhân bản / kéo thả câu hỏi
  → bấm "Lưu" (hoặc "Lưu khảo sát" trong Xem trước) → FE validate
      ├─ (lỗi) → báo lỗi dưới từng câu lỗi → scroll tới câu lỗi đầu tiên
      └─ (hợp lệ) → API lưu toàn bộ câu hỏi (thứ tự, loại, nội dung, bắt buộc, đáp án) → toast "Lưu thành công"
```

**Flow 3: Đổi trạng thái khảo sát**

```
Chọn trạng thái ở tag dropdown trên card
   ├─ Nháp → Công khai    : kiểm tra (đã lưu, ≥ 1 câu hỏi) → popup xác nhận "Sau khi công khai sẽ không sửa được"
   │                        → API → khoá chỉnh sửa → khảo sát xuất hiện ở "Chọn cuộc khảo sát đã tạo" (trang Giao)
   ├─ Nháp → Vô hiệu      : API → khoá chỉnh sửa
   └─ Công khai ⇄ Vô hiệu : API → Vô hiệu thì ẩn khỏi "Chọn cuộc khảo sát đã tạo"
```

**Flow 4: Nhân bản khảo sát**

```
Bấm icon nhân bản trên card → API tạo khảo sát mới cùng tab:
  tên "{tên cũ} (bản sao)", copy mô tả, loại (HV), toàn bộ câu hỏi; trạng thái = Nháp
  → card mới ở cuối danh sách, được chọn → sửa như khảo sát Nháp
```

**Flow 5: Sắp xếp / xoá khảo sát**

```
Kéo thả card → API cập nhật thứ tự

Bấm thùng rác trên card → popup xác nhận → API xoá mềm → bỏ card khỏi danh sách
                                                 ↓ (card đang chọn bị xoá)
                                          chọn card đầu tiên / empty state
```

### 2.2. Ngoại lệ

- **EX01:** Đổi khảo sát / đổi tab / rời trang khi còn thay đổi chưa lưu → popup "Bạn có thay đổi chưa lưu" (Lưu / Bỏ thay đổi / Huỷ).
- **EX02:** Lưu khi có câu hỏi trống nội dung, hoặc câu Trắc nghiệm / Hộp kiểm không có đáp án nào → không lưu, báo lỗi ngay dưới câu đó.
- **EX03:** Chuyển Nháp → Công khai khi chưa có câu hỏi → chặn, toast "Khảo sát chưa có câu hỏi". Khi còn thay đổi chưa lưu → yêu cầu lưu trước.
- **EX04:** Xoá hết tên khảo sát trên card rồi blur → khôi phục tên cũ.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Trim dữ liệu | Trim tên, mô tả, nội dung câu hỏi, đáp án. Chỉ có khoảng trắng = trống. |
| REQ02 | Dòng đáp án trống | Không lưu, không hiển thị ở Xem trước. |
| REQ03 | Ký hiệu đáp án | Admin nhập text thuần. A, B, C… do hệ thống tự gắn theo thứ tự khi hiển thị cho người làm và ở kết quả. |
| REQ04 | Empty state | Tab chưa có khảo sát / chưa chọn khảo sát → panel giữa hiển thị hướng dẫn tạo khảo sát ở danh sách bên phải. |
| REQ05 | Thang đánh giá | Cố định 1–5 sao. |
| REQ06 | Khảo sát đã giao | Khảo sát đã thêm vào trang Giao vẫn giữ nguyên (người nhận làm và xem kết quả bình thường) khi khảo sát chuyển Vô hiệu hoặc bị xoá ở trang Tạo. |
| REQ07 | Dùng chung component | Phần hiển thị câu hỏi ở Xem trước dùng chung với màn Làm khảo sát ([03-take-survey.md](./03-take-survey.md)) và popup Kết quả từng giáo viên ([02-assign-survey.md](./02-assign-survey.md)). |

### 2.4. Ràng buộc

#### Quyền

| Role | Xem | Tạo / nhân bản | Sửa | Đổi trạng thái | Xoá |
|---|:---:|:---:|:---:|:---:|:---:|
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ |
| Giáo viên | ❌ | ❌ | ❌ | ❌ | ❌ |
| Học viên | ❌ | ❌ | ❌ | ❌ | ❌ |

#### Ràng buộc khác

- Mặc định khi tạo / nhân bản: **Nháp**.
- Chuyển trạng thái chỉ theo: `Nháp → Công khai`, `Nháp → Vô hiệu`, `Công khai ⇄ Vô hiệu`. Không quay lại Nháp.
- Chỉ khảo sát **Nháp** được sửa (tên, mô tả, loại HV, câu hỏi). Công khai / Vô hiệu không sửa được; muốn sửa → nhân bản.
- Chỉ khảo sát **Công khai** hiển thị ở "Chọn cuộc khảo sát đã tạo" (trang Giao).
- Đối tượng khảo sát (GV / Lớp / HV) cố định khi tạo; loại Bắt buộc / Tuỳ chọn chỉ có ở tab Học viên.
- Chưa giới hạn độ dài tên / mô tả / câu hỏi / đáp án và số đáp án.
- Xoá khảo sát là **xoá mềm**.

---

## 3. Testcase

### Feature: Tạo khảo sát

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Tạo nhanh khảo sát và empty state | High | Flow 1 / REQ04 | Admin | Ở trang Tạo khảo sát; tab chưa có khảo sát | **Given:** tab Giáo viên, sau đó tab Học viên<br>**When:** nhập tên rồi `Enter` (lần 2 bấm +); bấm `Enter` khi ô trống<br>**Then:** kiểm tra danh sách | - Card mới ở cuối list, trạng thái "Nháp", được chọn, ô nhập xoá trắng<br>- Tab HV: card có tag "Tuỳ chọn"<br>- Ô trống: không tạo<br>- Tab chưa có khảo sát / chưa chọn: panel giữa hiện hướng dẫn |
| Case 2: Soạn và lưu đủ 4 loại câu hỏi | High | Flow 2 / REQ03 / REQ05 | Admin | Khảo sát Nháp, chưa có câu hỏi | **Given:** khảo sát trống<br>**When:** thêm Trắc nghiệm (2 đáp án, bắt buộc), Hộp kiểm (2 đáp án), Đoạn ngắn, Đánh giá → Lưu<br>**Then:** F5 trang | - Toast lưu thành công<br>- Sau F5 đúng thứ tự, loại, đáp án, cờ bắt buộc<br>- Đánh giá cố định 5 sao; đáp án gắn A, B, C… theo thứ tự khi hiển thị |
| Case 3: Nhập đáp án, đổi loại, nhân bản, kéo thả, xoá câu | Medium | Flow 2 / REQ01 / REQ02 | Admin | Khảo sát Nháp có 3 câu, có câu Trắc nghiệm 1 đáp án | **Given:** câu Trắc nghiệm và câu 1, 2, 3<br>**When:** gõ vào dòng "Nhập câu trả lời"; bấm (X) một đáp án; đổi sang Hộp kiểm rồi Đoạn ngắn; nhân bản câu 1; kéo câu cuối lên đầu; xoá một câu; Lưu<br>**Then:** F5 trang | - Gõ → thành đáp án mới, sinh dòng trống mới; (X) xoá đáp án; dòng trống không lưu<br>- Hộp kiểm giữ đáp án; Đoạn ngắn bỏ đáp án, hiện ô "Câu trả lời ngắn" disable<br>- Bản sao nằm ngay dưới câu gốc; "Câu N" đánh số liên tục từ 1<br>- Sau F5 đúng thứ tự; dữ liệu được trim |
| Case 4: Validate khi lưu | High | EX02 / REQ01 | Admin | Khảo sát Nháp | **Given:** một câu trống nội dung (hoặc chỉ khoảng trắng), một câu Hộp kiểm không có đáp án<br>**When:** bấm Lưu<br>**Then:** kiểm tra màn hình | - Không gọi API lưu<br>- 2 câu báo lỗi ngay dưới câu, scroll tới câu lỗi đầu tiên |
| Case 5: Rời khi chưa lưu | High | EX01 | Admin | Có thay đổi chưa lưu | **Given:** đã sửa câu hỏi, chưa Lưu<br>**When:** chọn khảo sát khác / đổi tab / đổi menu; chọn "Bỏ thay đổi"<br>**Then:** kiểm tra dữ liệu | - Hiện popup "Bạn có thay đổi chưa lưu" (Lưu / Bỏ thay đổi / Huỷ)<br>- Bỏ thay đổi → dữ liệu về bản đã lưu |
| Case 6: Xem trước | Medium | Flow 2 / REQ02 / REQ07 | Admin | Có câu chưa lưu; khảo sát Công khai | **Given:** có câu mới chưa lưu, có dòng đáp án trống<br>**When:** bấm "Xem trước" → "Lưu khảo sát"; mở Xem trước ở khảo sát Công khai<br>**Then:** kiểm tra popup | - Hiển thị cả câu chưa lưu, không hiện dòng trống, không chọn được<br>- "Lưu khảo sát" lưu như nút Lưu và đóng popup; khảo sát không phải Nháp thì ẩn "Lưu khảo sát"<br>- Hiển thị câu hỏi giống màn Làm khảo sát |
| Case 7: Đổi trạng thái khảo sát | High | Flow 3 / EX03 | Admin | KS A Nháp có câu hỏi, KS B Nháp chưa có câu hỏi; KS C đang có thay đổi chưa lưu | **Given:** 3 khảo sát trên<br>**When:** chuyển B → Công khai; chuyển C → Công khai; chuyển A → Công khai → Vô hiệu → Công khai<br>**Then:** kiểm tra trang Tạo và dropdown ở trang Giao | - B: bị chặn, toast "Khảo sát chưa có câu hỏi"; C: yêu cầu lưu trước<br>- A Công khai: có popup xác nhận, panel chỉ xem với thông báo "Khảo sát không thể sửa. Nhân bản để tạo bản mới.", dropdown không còn "Nháp"<br>- A Vô hiệu: vẫn chỉ xem, ẩn khỏi dropdown trang Giao; Công khai lại thì hiện |
| Case 8: Nhân bản, xoá và khảo sát đã giao | High | Flow 4 / Flow 5 / REQ06 | Admin | KS A Công khai đã thêm vào trang Giao | **Given:** đang chọn KS A<br>**When:** nhân bản A; sửa bản sao → Lưu; kéo thả đổi thứ tự card; xoá A<br>**Then:** kiểm tra trang Tạo và trang Giao | - Bản sao "A (bản sao)" Nháp, đủ câu hỏi, sửa được, không ảnh hưởng A<br>- Kéo thả lưu thứ tự mới<br>- Xoá A có popup xác nhận, A biến mất ở trang Tạo (xoá mềm), card đầu tiên / empty state được chọn<br>- Trang Giao: A vẫn còn, làm và xem kết quả bình thường |
| Case 9: Tab Học viên và đổi tên khảo sát | Medium | Flow 1 / EX04 | Admin | Tab Học viên có KS Nháp và KS Công khai | **Given:** KS Nháp trên tab Học viên<br>**When:** đổi loại Bắt buộc ↔ Tuỳ chọn; xoá hết tên trên card rồi blur; thử đổi loại ở KS Công khai<br>**Then:** kiểm tra card | - Loại đổi lưu ngay (Bắt buộc tag đỏ, Tuỳ chọn tag xanh), chỉ đổi được khi Nháp<br>- Tên trống khi blur: khôi phục tên cũ<br>- Tab Giáo viên / Lớp không có loại khảo sát |
| Case 10: Quyền truy cập | High | Ràng buộc quyền | Giáo viên, Học viên | Đăng nhập GV hoặc HV | **Given:** tài khoản GV hoặc HV<br>**When:** truy cập URL trang Tạo khảo sát<br>**Then:** kiểm tra | - Không thấy menu<br>- Truy cập URL bị chặn / chuyển trang |
