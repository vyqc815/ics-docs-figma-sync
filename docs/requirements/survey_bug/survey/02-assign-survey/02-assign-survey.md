# Giao khảo sát & Kết quả (Admin)

## 1. UI

### Trang 1: ADM-GKS-010000 — Giao khảo sát — tab Giáo viên

![Figma mới nhất · ADM-GKS-010000](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-010000.png)

![alt text](image-5.png)

**Mô tả:**
- Admin thêm khảo sát cần giao, chọn người nhận, giao / thu hồi / xoá từng người.

**Điểm cần lưu ý:**
- Mỗi khảo sát chỉ có **1 mục** trong danh sách bên phải (2 card trùng tên trên figma chỉ là dữ liệu mẫu).
- **"Chọn cuộc khảo sát đã tạo"** (+) → dropdown có tìm kiếm, chỉ liệt kê khảo sát **Công khai** cùng tab và **chưa có** trong danh sách → chọn → thêm card cuối danh sách, tự chọn.
- Khảo sát chuyển Vô hiệu / bị xoá ở trang Tạo → vẫn giữ nguyên ở trang Giao.
- Card:
  - Dropdown **Đang chờ / Đã giao / Thu hồi**: nhãn admin tự chọn để theo dõi, đổi là lưu ngay, **không** ảnh hưởng người được giao. Mặc định khi thêm: Đang chờ.
  - Số được giao: tab GV "N người được giao" (= số dòng), tab Lớp "N lớp được giao", tab HV "N học viên được giao". Không đổi theo bộ lọc trung tâm.
  - Thời gian = thời điểm thêm vào trang Giao. Thùng rác = xoá khảo sát khỏi trang Giao.
  - Tab Học viên: thêm tag loại **Bắt buộc / Tuỳ chọn** (chỉ đọc, lấy từ khảo sát).
- Bộ lọc **Trung tâm** phía trên bảng (tab GV và Lớp), mặc định "Tất cả trung tâm" *(figma chưa có)*.
- Bảng: mỗi dòng = 1 GV tại 1 trung tâm (UI giữ như figma, BE tự lọc theo trung tâm). GV được giao ở 2 trung tâm → 2 dòng, mỗi trung tâm 1 bài.
  - "Ngày khảo sát" = thời điểm gửi bài; chưa gửi → "—".
  - Trạng thái: **Chưa làm** (chưa lưu nháp) · **Đang làm** (đã lưu nháp) · **Đã hoàn thành** (đã gửi) · **Đã thu hồi**. Figma ghi "Đang chờ" là sai text → đúng là "Đang làm".
  - "Xem kết quả" chỉ enable khi Đã hoàn thành → Popup 6.
  - Menu 3 chấm: **Giao** (enable khi Đã thu hồi) · **Thu hồi** (enable khi Chưa làm / Đang làm) · **Xoá** (có xác nhận).

### Trang 2: ADM-GKS-020000, ADM-GKS-030000 — Giao khảo sát — tab Lớp / Học viên

![Figma mới nhất · ADM-GKS-020000](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-020000.png)

![Figma mới nhất · ADM-GKS-030000](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-030000.png)

![alt text](image-10.png)
![alt text](image.png)

**Mô tả:**
- Bảng gộp theo **lớp** (tab Lớp) hoặc **trung tâm** (tab Học viên), xem tỉ lệ học viên đã làm.

**Điểm cần lưu ý:**
- Mỗi dòng: tab Lớp = 1 lớp (mã lớp; dòng phụ: khoá học · N học viên); tab HV = 1 trung tâm (tên trung tâm; dòng phụ: N học viên). N = số HV được giao của dòng.
- Không có cột "Ngày khảo sát".
- **Tỉ lệ làm** (vòng tròn %) = số HV Đã hoàn thành / N, làm tròn số nguyên.
- Trạng thái dòng, tự tính từ HV: **Chưa làm** (chưa HV nào gửi) · **Đang làm** (đã có HV gửi, chưa đủ 100%) · **Đã hoàn thành** (100%) · **Đã thu hồi** (admin thu hồi dòng).
- "Xem kết quả" enable khi dòng có ≥ 1 bài Đã hoàn thành → Popup 5.
- Menu 3 chấm áp dụng cho cả dòng: **Giao** (dòng Đã thu hồi → giao lại các HV đã thu hồi) · **Thu hồi** (HV chưa hoàn thành của dòng → Đã thu hồi) · **Xoá** (có xác nhận).

### Trang 3: ADM-GKS-010010 — Popup 1: Chọn giáo viên (tab Giáo viên)

![Figma mới nhất · ADM-GKS-010010](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-010010.png)

![alt text](image-6.png)
![alt text](image-7.png)

**Điểm cần lưu ý:**
- Bước 1: chọn **1 Trung tâm** (bắt buộc). Figma đang để "Trung tâm" như bộ lọc → đổi thành bước chọn bắt buộc, chỉ chọn 1. Chưa chọn → danh sách trống, hiện "Chọn trung tâm để hiển thị giáo viên".
- Bước 2: danh sách GV thuộc trung tâm đã chọn, chọn nhiều; tìm theo tên / mã / email. Đổi trung tâm → bỏ các GV đang chọn.
- "Chọn tất cả" = chọn tất cả GV trong kết quả đang tìm.
- GV đã được giao khảo sát này ở trung tâm đó: disable + tag "Đã giao" (giao lại dùng menu 3 chấm).
- Khảo sát giao thuộc trung tâm đã chọn → GV thấy khi chọn trung tâm đó ở header.
- "Đã chọn N giáo viên" và nút "Giao khảo sát (N)" cập nhật theo lựa chọn; N = 0 → disable nút.

### Trang 4: ADM-GKS-020010 — Popup 2: Chọn lớp (tab Lớp)

![Figma mới nhất · ADM-GKS-020010](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-020010.png)

![alt text](image-11.png)
![alt text](image-12.png)

**Điểm cần lưu ý:**
- Bước 1: chọn **1 Trung tâm** (bắt buộc), giống Popup 1. Bước 2: danh sách lớp thuộc trung tâm đã chọn, chọn nhiều; tìm theo mã lớp / khoá học / tên GV. Đổi trung tâm → bỏ các lớp đang chọn.
- Mỗi dòng: "{Mã lớp} - {N} học viên" (N = số HV đang học), dòng phụ: khoá học · GV phụ trách.
- "Chọn tất cả" = chọn tất cả lớp trong kết quả đang tìm. "Đã chọn N lớp", nút "Giao khảo sát (N)"; N = 0 → disable nút.
- Lớp đã có trong bảng **vẫn chọn lại được** để giao cho HV mới vào lớp (HV đã có thì bỏ qua).
- Lớp 0 học viên → disable.

### Trang 5: ADM-GKS-010005, ADM-GKS-020005 — Popup 3: Chọn trung tâm (tab Học viên — khảo sát Tuỳ chọn)

![Figma mới nhất · ADM-GKS-010005](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-010005.png)

![Figma mới nhất · ADM-GKS-020005](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-020005.png)

![alt text](image-1.png)

**Điểm cần lưu ý:**
- Chọn 1 hoặc nhiều trung tâm → giao cho HV của các trung tâm đã chọn.

### Trang 6: ADM-GKS-030050 — Popup 4: Chọn buổi học (tab Học viên — khảo sát Bắt buộc)

![Figma mới nhất · ADM-GKS-030050](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-030050.png)

![alt text](image-2.png)

**Điểm cần lưu ý:**
- Chọn Trung tâm → Khoá học (thuộc trung tâm đã chọn) → Buổi học (thuộc khoá đã chọn), mỗi bước chọn nhiều.
- Lớp nào thuộc khoá đã chọn học tới buổi đã chọn thì HV lớp đó nhận khảo sát (lớp mở trước hay sau lúc giao đều như nhau).

### Trang 7: ADM-GKS-010020, ADM-GKS-020020, ADM-GKS-030020 — Giao khảo sát — tab "Kết quả khảo sát"

![Figma mới nhất · ADM-GKS-010020](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-010020.png)

![Figma mới nhất · ADM-GKS-020020](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-020020.png)

![Figma mới nhất · ADM-GKS-030020](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-030020.png)

![alt text](image-3.png)

**Mô tả:**
- Thống kê câu trả lời của khảo sát đang chọn, theo từng câu hỏi.

**Điểm cần lưu ý:**
- Chỉ tính bài **Đã hoàn thành** (không tính bài nháp, người bị thu hồi khi chưa gửi, dòng đã bị xoá). Bài đã hoàn thành luôn được tính, kể cả khi nhãn khảo sát hoặc dòng là Thu hồi.
- Đầu tab hiển thị "Đã hoàn thành X/Y" (người / học viên).
- Mỗi câu hỏi là 1 khối thu gọn / mở rộng (chevron), mặc định mở.
- **Trắc nghiệm / Hộp kiểm / Đánh giá:** mỗi đáp án (Đánh giá: mỗi mức 1 sao … 5 sao) có thanh %, số % và avatar người chọn.
  - % = số người chọn / số bài đã hoàn thành, làm tròn số nguyên. Hộp kiểm: tổng % có thể > 100%.
  - Avatar: tối đa 3 người + "và N người khác". Hover avatar → tên; hover "và N người khác" → danh sách tên những người còn lại.
- **Đoạn ngắn:** danh sách câu trả lời kèm avatar người trả lời; bỏ qua bài để trống; hiển thị 10 câu trả lời, "Xem thêm" để tải tiếp.

### Trang 8: ADM-GKS-020030, ADM-GKS-030030 — Popup 5: Kết quả của 1 lớp / trung tâm

![Figma mới nhất · ADM-GKS-020030](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-020030.png)

![Figma mới nhất · ADM-GKS-030030](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-030030.png)

![alt text](image-13.png)
![alt text](image-14.png)

**Điểm cần lưu ý:**
- Mở từ "Xem kết quả" của 1 dòng ở tab Lớp / Học viên.
- Tiêu đề: "Kết quả khảo sát - {Mã lớp / Tên trung tâm}".
- Nội dung và cách hiển thị giống tab "Kết quả khảo sát", nhưng chỉ tính bài của HV thuộc lớp / trung tâm đó.

### Trang 9: ADM-GKS-010030 — Popup 6: Kết quả từng giáo viên

![Figma mới nhất · ADM-GKS-010030](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-GKS-010030.png)

![alt text](image-4.png)

**Điểm cần lưu ý:**
- Chỉ có ở tab Giáo viên, mở từ "Xem kết quả" của dòng GV Đã hoàn thành.
- Tiêu đề: "Kết quả khảo sát - {Tên GV} ({Mã GV})" (figma đang dùng dữ liệu mẫu HV).
- "x/y câu trả lời" = số câu có trả lời / tổng số câu.
- Hiển thị tất cả câu theo thứ tự; câu không trả lời → "Chưa trả lời" (chữ xám nghiêng).
- Trắc nghiệm: 1 dòng đáp án đã chọn (kèm A, B, C…). Hộp kiểm: mỗi đáp án đã chọn 1 dòng. Đánh giá: số sao đã chọn. Đoạn ngắn: nội dung trả lời. Chỉ xem.

---

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Thêm khảo sát cần giao**

```
Chọn tab → (+) "Chọn cuộc khảo sát đã tạo" → chọn khảo sát (Công khai, chưa có trong danh sách)
→ API thêm (nhãn "Đang chờ") → card mới ở cuối, được chọn, bảng trống
```

**Flow 2: Giao khảo sát**

```
Bấm "Giao khảo sát" → mở popup theo tab
   ├─ Giáo viên → Popup 1: chọn 1 trung tâm → chọn GV
   ├─ Lớp       → Popup 2: chọn 1 trung tâm → chọn lớp
   └─ Học viên ─┬─ Tuỳ chọn → Popup 3: chọn trung tâm
                └─ Bắt buộc → Popup 4: trung tâm → khoá học → buổi học
→ xác nhận → API giao (bỏ qua người đã có)
      ├─ GV / Lớp / HV Tuỳ chọn → người nhận: Chưa làm + gửi thông báo ngay
      └─ HV Bắt buộc            → lưu điều kiện giao → lớp thuộc khoá học tới buổi đã chọn
                                  → HV lớp đó: Chưa làm + gửi thông báo
→ reload bảng (thêm dòng GV / lớp / trung tâm) → cập nhật số được giao → toast "Đã giao thành công"
```

**Flow 3: Người vào giữa chừng**

```
GV mới        → "Giao khảo sát" → chọn trung tâm → chọn GV đó → thêm dòng GV
HV mới vào lớp → "Giao khảo sát" → chọn trung tâm → chọn lại lớp đó → chỉ HV mới được giao → cập nhật N và tỉ lệ làm của dòng lớp
```

**Flow 4: Thao tác từng dòng (menu 3 chấm)**

```
Giao    → (Đã thu hồi)      → Chưa làm + gửi thông báo (dòng lớp / trung tâm: cho các HV đã thu hồi)
Thu hồi → (chưa hoàn thành) → Đã thu hồi → khảo sát biến mất phía người nhận; bài đã hoàn thành giữ nguyên
Xoá     → popup xác nhận → xoá mềm dòng (kèm kết quả) → cập nhật số được giao
```

**Flow 5: Xem kết quả**

```
Tab "Kết quả khảo sát" → API thống kê cả khảo sát → render theo loại câu hỏi
                                    ↓ (chưa có bài hoàn thành)
                           Empty state "Chưa có kết quả khảo sát"

Tab Lớp / HV : "Xem kết quả" của dòng → API thống kê lọc theo lớp / trung tâm → Popup 5
Tab GV       : "Xem kết quả" của dòng → API bài làm của GV → Popup 6
```

### 2.2. Ngoại lệ

- **EX01:** Xoá dòng đã có bài Đã hoàn thành, hoặc xoá khảo sát khỏi trang Giao khi đã có kết quả → popup cảnh báo "Kết quả khảo sát sẽ bị xoá" → xoá mềm, kết quả không còn tính vào thống kê.
- **EX02:** Chọn lại lớp đã có trong bảng → chỉ giao cho HV mới; không có HV mới → toast "Không có học viên mới trong lớp".
- **EX03:** Không có khảo sát Công khai nào để thêm → dropdown hiển thị "Không có khảo sát".
- **EX04:** Khảo sát đang chọn bị xoá khỏi trang Giao → chọn card đầu tiên; không còn card → empty state.
- **EX05:** Người trả lời không có avatar → avatar mặc định.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Thông báo | Mỗi lần người nhận chuyển sang Chưa làm (giao lần đầu / giao lại) → gửi thông báo: GV = popup trên web, HV = thông báo app. |
| REQ02 | Nhãn trạng thái | Đang chờ / Đã giao / Thu hồi chỉ để admin theo dõi, không tự giao / thu hồi ai. |
| REQ03 | Giữ kết quả | Bài Đã hoàn thành luôn được tính vào kết quả, kể cả khi nhãn khảo sát là Thu hồi hoặc dòng bị thu hồi. |
| REQ04 | Cập nhật số liệu | Số được giao, N học viên, tỉ lệ làm cập nhật ngay sau mọi thao tác giao / thu hồi / xoá. |
| REQ05 | Disable menu | Item trong menu 3 chấm không hợp lệ với trạng thái hiện tại → disable. |
| REQ06 | Dữ liệu kết quả mới | Gọi lại API mỗi lần mở tab / popup kết quả, không dùng cache cũ. |
| REQ07 | Ký hiệu đáp án | A, B, C… theo thứ tự đáp án, đồng nhất với màn làm khảo sát. |

### 2.4. Ràng buộc

#### Quyền

| Role | Thêm / xoá khảo sát giao | Giao người nhận | Đổi nhãn | Giao / thu hồi / xoá dòng | Xem kết quả |
|---|:---:|:---:|:---:|:---:|:---:|
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ |
| Giáo viên | ❌ | ❌ | ❌ | ❌ | ❌ |
| Học viên | ❌ | ❌ | ❌ | ❌ | ❌ |

#### Ràng buộc khác

- Mỗi khảo sát chỉ có 1 mục ở trang Giao; chỉ thêm được khảo sát **Công khai** cùng đối tượng với tab.
- Khảo sát Lớp tính theo từng lớp: HV học nhiều lớp cùng được giao thì làm 1 bài cho mỗi lớp (thống kê chung tính đủ các bài).
- GV / Lớp / HV Tuỳ chọn: danh sách người nhận chốt khi bấm giao; người vào sau phải giao thêm thủ công (Flow 3). HV Bắt buộc: nhận tự động theo buổi học.
- Mọi thao tác xoá là **xoá mềm**.
- Giao GV / Lớp: mỗi lần giao chỉ chọn 1 trung tâm; khảo sát giao thuộc trung tâm đó.
- Bảng chỉ có lọc trung tâm (tab GV, Lớp), không có tìm kiếm / lọc trạng thái; không xuất Excel; không có hạn chót làm khảo sát.

---

---

## 3. Testcase

### Feature: Giao khảo sát & Kết quả (Admin)

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Thêm khảo sát cần giao | High | Flow 1, EX03 | Admin | Tab GV có KS A Công khai, KS B Nháp, KS C Vô hiệu, KS D Công khai đã có trong trang Giao | **Given:** Trang Giao khảo sát, tab GV<br>**When:** (+) "Chọn cuộc khảo sát đã tạo" → chọn KS A<br>**Then:** Kiểm tra danh sách | - Dropdown chỉ có KS A<br>- Card mới: nhãn "Đang chờ", "0 người được giao", được chọn<br>- Mở lại dropdown: "Không có khảo sát" |
| Case 2: Popup chọn giáo viên | Medium | Popup 1 | Admin | GV X (dạy trung tâm A, B) đã được giao ở trung tâm A | **Given:** Mở popup chọn GV<br>**When:** Chưa chọn trung tâm; chọn trung tâm A, tìm theo tên, "Chọn tất cả"; đổi sang trung tâm B<br>**Then:** Kiểm tra popup | - Chưa chọn trung tâm: danh sách trống, nút disable<br>- Chỉ chọn được 1 trung tâm; chỉ hiện GV của trung tâm đó<br>- Trung tâm A: GV X disable "Đã giao"; "Chọn tất cả" chỉ chọn trong kết quả tìm<br>- Đổi sang B: bỏ chọn cũ, GV X chọn được<br>- Số N đúng, N = 0 thì disable nút |
| Case 3: Giao giáo viên & lọc trung tâm | High | Flow 2, Trang 1 | Admin | GV X dạy trung tâm A, B; GV Y ở B | **Given:** KS tab GV, bảng trống<br>**When:** Giao X ở trung tâm A; giao X, Y ở trung tâm B; X lưu nháp bài ở A; lọc bảng theo A, B, Tất cả<br>**Then:** Kiểm tra bảng & phía GV X | - 3 dòng: X–A "Đang làm", X–B "Chưa làm", Y–B "Chưa làm"; "3 người được giao"<br>- Lọc A: 1 dòng; B: 2 dòng; Tất cả: 3 dòng; số trên card không đổi<br>- GV nhận popup; X thấy khảo sát khi header chọn A và khi chọn B |
| Case 4: Giao lớp & HV vào giữa chừng | High | Popup 2, Flow 3, EX02 | Admin | Lớp A 4 HV; có lớp 0 HV | **Given:** KS tab Lớp<br>**When:** Mở popup chọn lớp, chọn trung tâm T, giao lớp A; thêm 1 HV mới vào lớp A; giao lại lớp A 2 lần<br>**Then:** Kiểm tra popup & bảng | - Popup: chỉ hiện lớp của trung tâm T; lớp 0 HV disable; "Đã chọn N lớp" đúng<br>- Lần 1: dòng A "4 học viên", 0%, "Chưa làm"; "1 lớp được giao"<br>- Lần 2: A "5 học viên", chỉ HV mới nhận thông báo<br>- Lần 3: toast không có HV mới |
| Case 5: Tỉ lệ & trạng thái dòng lớp | High | Trang 2 | Admin | Lớp A 4 HV đã được giao | **Given:** Dòng lớp A<br>**When:** Lần lượt 0, 1, 4 HV gửi bài<br>**Then:** Kiểm tra dòng | - 0 bài: 0%, "Chưa làm", "Xem kết quả" disable<br>- 1 bài: 25%, "Đang làm", "Xem kết quả" enable<br>- 4 bài: 100%, "Đã hoàn thành" |
| Case 6: Giao HV Bắt buộc | High | Popup 4, Flow 2 | Admin | KS Bắt buộc tab HV; lớp L thuộc khoá K đang ở buổi 2 | **Given:** Popup chọn buổi học<br>**When:** Chọn Trung tâm T → khoá K → buổi 3; lớp L học tới buổi 3; mở lớp M thuộc khoá K, học tới buổi 3<br>**Then:** Kiểm tra bảng | - Đổi trung tâm / khoá thì reset bước sau<br>- Có dòng trung tâm T<br>- Lớp L, M tới buổi 3: HV nhận thông báo, N học viên và tỉ lệ của dòng T tăng tương ứng |
| Case 7: Thu hồi, giao lại & đổi nhãn | High | Flow 4, REQ02, REQ03, REQ05 | Admin | Tab GV: A Đang làm, B Đã hoàn thành. Tab Lớp: lớp L có 1 HV đã gửi, 2 HV chưa gửi | **Given:** Mở menu 3 chấm<br>**When:** Thu hồi A rồi Giao lại A; thu hồi lớp L rồi Giao lại L; đổi nhãn card sang "Thu hồi"<br>**Then:** Kiểm tra bảng & phía người nhận | - B: "Thu hồi", "Giao" disable<br>- A: "Đã thu hồi" → GV A không thấy khảo sát; giao lại → "Chưa làm" + thông báo<br>- Lớp L: 2 HV chưa gửi bị thu hồi, bài đã gửi vẫn tính; giao lại → 2 HV nhận lại<br>- Đổi nhãn card: trạng thái các dòng không đổi, người nhận vẫn làm được |
| Case 8: Xoá mềm | Medium | Flow 4, EX01, EX04 | Admin | Có GV / lớp đã có bài hoàn thành | **Given:** Khảo sát đang chọn<br>**When:** Xoá 1 GV Đã hoàn thành; xoá 1 lớp; xoá khảo sát (thùng rác trên card)<br>**Then:** Kiểm tra bảng & tab kết quả | - Có popup cảnh báo mất kết quả<br>- Dòng biến mất, số được giao giảm, kết quả không còn tính<br>- Xoá card → tự chọn card đầu |
| Case 9: Thống kê theo loại câu hỏi | High | Flow 5, Trang 3 | Admin | 4 bài hoàn thành + 1 người Đang làm. Trắc nghiệm: 2 A, 1 B, 1 C. Hộp kiểm: bài 1 chọn A+B, còn lại A. Đánh giá: 2 × 5 sao, 1 × 4 sao, 1 × 1 sao. Đoạn ngắn: dùng khảo sát khác có 12 câu trả lời | **Given:** Tab "Kết quả khảo sát"<br>**When:** Xem từng câu, hover avatar và "và N người khác", bấm "Xem thêm"<br>**Then:** Kiểm tra | - Trắc nghiệm A 50%, B 25%, C 25%; bài nháp không tính<br>- Hộp kiểm A 100%, B 25%<br>- Đánh giá 5 sao 50%, 4 sao 25%, 1 sao 25%, 2–3 sao 0%<br>- Hover hiện tên / danh sách tên<br>- Đoạn ngắn: 10 câu, "Xem thêm" tải tiếp |
| Case 10: Kết quả lớp & từng giáo viên | High | Flow 5, Popup 5, Popup 6 | Admin | Lớp A 2 bài, lớp B 3 bài (1 HV học cả A và B); GV X đã gửi, bỏ trống 1 câu không bắt buộc | **Given:** Trang Giao khảo sát<br>**When:** "Xem kết quả" lớp A; mở tab Kết quả của KS lớp; "Xem kết quả" GV X<br>**Then:** Kiểm tra | - Popup lớp A chỉ tính 2 bài; tab Kết quả tính đủ 5 bài<br>- Popup GV X: đúng tên + mã, "x/y câu trả lời", câu bỏ trống hiện "Chưa trả lời" |
| Case 11: Quyền truy cập | High | Ràng buộc quyền | Giáo viên | Đăng nhập GV | **Given:** Tài khoản GV<br>**When:** Truy cập URL / API trang Giao khảo sát, kết quả<br>**Then:** Kiểm tra | - Không thấy menu<br>- Bị chặn / chuyển trang |

### Feature: Giao khảo sát & Kết quả
