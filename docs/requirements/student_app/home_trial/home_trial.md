# [Học viên] Màn chính và trải nghiệm

App học viên có hai chế độ: **Học viên** (đã đăng nhập, có lớp) và **Trải nghiệm** (chưa đăng nhập, học theo cấp độ, dùng thử 30 ngày; tương đương "247" của Sakumi). Màn chính đổi theo chế độ. File này đặc tả màn chính học viên, màn chính trải nghiệm, chọn trình độ, popup trải nghiệm, VIP / mã quà tặng / khôi phục / quảng cáo và ưu đãi. Dữ liệu học của chế độ trải nghiệm là khoá học cấp độ do CD công khai; của học viên là lớp đang tham gia.

Ảnh màn chính, 247, popup trải nghiệm, chọn trình độ có; các màn VIP, mã quà tặng, cài đặt chưa có ảnh (theo spec Sakumi 247).

## 1. UI

### Trang 1: HV-TC-010000 — Màn chính học viên

![Figma mới nhất · HV-TC-010000](https://ics-figma-demo.vercel.app/api/figma-frame/HV-TC-010000.png)

![Trang 1](./images/01-man-chinh-hoc-vien.png)

*Màn chính: banner Thư viện học tập, Khoá học của bạn, Ưu đãi; thẻ khoá Chưa bắt đầu mờ — nhấn để xem ảnh gốc*

**Mô tả:**

- Màn đầu sau đăng nhập: thư viện cá nhân, danh sách lớp đang tham gia, ưu đãi của trung tâm.

**Điểm cần lưu ý:**

- `A01.01` **Header**: Logo trung tâm; dropdown chế độ `Học viên <Trung tâm>` (đổi sang chế độ trải nghiệm theo cấp độ); icon ⚙ Cài đặt.
- `A01.02` **Banner `THƯ VIỆN HỌC TẬP`**: Mô tả + thanh % tổng thư viện; bấm mở [Thư viện học tập](../library/library.md).
- `A01.03` **`KHOÁ HỌC CỦA BẠN`**: Thẻ mỗi lớp: mã lớp, tag trạng thái (`Chưa bắt đầu` xám, `Chưa hoàn thành` cam, `Hoàn thành` xanh lá), tên khoá, thanh % (bài đã hoàn thành / tổng bài), mô tả khoá; thẻ `Chưa bắt đầu` mờ; mặc định hiện 4 thẻ, `Xem thêm (N)` mở rộng. Bấm thẻ vào [Lớp học](../course/course.md).
- `A01.04` **Trạng thái lớp**: `Chưa bắt đầu` = lớp `Mới tạo` / `Trải nghiệm` / `Khai giảng` chưa mở bài; `Chưa hoàn thành` = `Đang học` / `Tạm ngưng`; `Hoàn thành` = `Hoàn thành`; lớp `Huỷ bỏ` không hiện.
- `A01.05` **`ƯU ĐÃI CỦA BẠN`**: Banner ưu đãi do trung tâm cấu hình (ảnh, link); bấm mở trang / popup chi tiết; không có thì ẩn khối.
- `A01.06` **Trống**: Chưa được phân lớp: `Bạn chưa được phân công khoá học nào` + nút `Liên hệ Support`.

- Thứ tự thẻ: `Chưa hoàn thành` → `Chưa bắt đầu` → `Hoàn thành`, trong nhóm mới nhất trước.
- Học viên thuộc nhiều trung tâm: dropdown chọn trung tâm; dữ liệu theo trung tâm đang chọn.

### Trang 2: HV-TC-020000 — Màn chính trải nghiệm theo cấp độ

![Figma mới nhất · HV-TC-020000](https://ics-figma-demo.vercel.app/api/figma-frame/HV-TC-020000.png)

![Trang 2](./images/02-man-chinh-247.png)

*Màn chính trải nghiệm: banner quảng cáo, Thư viện, Bảng phát âm, Kiến thức nền, Kỹ năng; màn Chọn trình độ với mục Dành cho học viên — nhấn để xem ảnh gốc*

**Mô tả:**

- Chế độ không cần tài khoản: học nội dung công khai của một cấp độ (HSK1…, N5…), có quảng cáo và giới hạn, thanh tab dưới `Kiến thức`, `Thư viện`.

**Điểm cần lưu ý:**

- `A02.01` **Header**: Logo; dropdown cấp độ `HSK1 - Sơ Cấp 1` (mở Chọn trình độ); ⚙ Cài đặt.
- `A02.02` **Banner quảng cáo**: Banner khuyến mãi của trung tâm + `Xem Chi Tiết`; người dùng VIP không thấy.
- `A02.03` **Banner `THƯ VIỆN HỌC TẬP`**: Như màn học viên; dữ liệu lưu trên máy.
- `A02.04` **`BẢNG PHÁT ÂM` / `BẢNG CHỮ`**: Khối theo trung tâm (Pinyin / Kana / Hangul) với %; trung tâm không có hệ chữ thì ẩn (xem [Bảng chữ](../alphabet/alphabet.md)).
- `A02.05` **`KIẾN THỨC NỀN`**: Thẻ `TỪ VỰNG`, `NGỮ PHÁP`, `HANZI` / `KANJI` (theo trung tâm) với %, mô tả; icon 👑 = nội dung VIP (mở popup VIP nếu chưa VIP).
- `A02.06` **`KỸ NĂNG`**: Thẻ `NGHE`, `NÓI`, `ĐỌC` với %, icon 👑 tương tự.
- `A02.07` **Thanh tab dưới**: `Kiến thức` (màn này), `Thư viện`. Khác ảnh: ảnh còn tab `Kiểm tra` (JLPT / HSK) và `Lộ trình`; requirement bỏ hai tab này ở mọi trung tâm.
- `A02.08` **Chọn trình độ**: Khối `DÀNH CHO HỌC VIÊN`: thẻ `Học Viên <Trung tâm>` → màn Đăng nhập; khối `LUYỆN KIẾN THỨC & KỸ NĂNG`: danh sách cấp độ của trung tâm (từ [Quản lý cấp độ](../../curriculum_management_requirement/level_management/level_management_requirements.md)) với tên, mô tả; chọn thì lưu và lọc toàn bộ nội dung theo cấp độ.

- Nội dung trải nghiệm = khoá học `Công khai` gắn cấp độ đó của trung tâm; cấp độ chưa có nội dung: `Hiện chưa có nội dung cho cấp độ này`.
- Học viên đã đăng nhập cũng vào được chế độ này qua dropdown header; dữ liệu Đã thuộc / thư viện khi đó lưu theo tài khoản.

### Trang 3: HV-TC-020010 — Popup Trải nghiệm miễn phí 30 ngày

![Figma mới nhất · HV-TC-020010](https://ics-figma-demo.vercel.app/api/figma-frame/HV-TC-020010.png)

![Trang 3](./images/03-popup-trai-nghiem.png)

*Popup Trải nghiệm miễn phí khoá học 30 ngày, Đồng Ý, Còn lại 29 ngày — nhấn để xem ảnh gốc*

**Mô tả:**

- Người dùng chưa VIP được dùng thử toàn bộ nội dung một khoá học cấp độ trong 30 ngày kể từ lần đồng ý đầu tiên; hết hạn thì nội dung VIP khoá lại.

**Giải thích field/thành phần:**

- `A03.01` **Nội dung**: Tiêu đề `Trải nghiệm MIỄN PHÍ khoá học 30 ngày`; 2 gạch đầu dòng: bấm Bài Học để xem lộ trình từng buổi (nội dung theo sát 100% trên lớp); app chỉ là công cụ ôn luyện và làm bài tập, nội dung chính là trực tiếp với giáo viên tại lớp.
- `A03.02` **`Đồng Ý`**: Lần đầu: bắt đầu đếm 30 ngày theo thiết bị + tài khoản (nếu có); các lần sau: đóng popup.
- `A03.03` **`Còn lại N ngày`**: Số ngày còn lại; `0` khi hết hạn.
- `A03.04` **Khi hiện**: Mở app ở chế độ trải nghiệm khi chưa VIP: lần đầu bắt buộc; các lần sau hiện mỗi ngày một lần tới khi hết hạn; hết hạn hiện popup `Hết hạn trải nghiệm` với `Nâng cấp VIP` / `Tiếp tục dùng bản miễn phí`.

**Điểm cần lưu ý:**

- Trong thời gian trải nghiệm: không quảng cáo, mở mọi nội dung 👑 của cấp độ đã chọn.
- Học viên đã đăng nhập (có lớp) không thấy popup và không bị giới hạn.

### Trang 4: HV-TC-030000 — VIP, mã quà tặng, khôi phục, quảng cáo

![Figma mới nhất · HV-TC-030000](https://ics-figma-demo.vercel.app/api/figma-frame/HV-TC-030000.png)

**Mô tả:**

- Theo spec Sakumi 247, áp dụng cho chế độ trải nghiệm của mọi trung tâm.

**Giải thích field/thành phần:**

- `A04.01` **Popup giới hạn (free)**: Bấm nội dung 👑 khi chưa VIP / hết trải nghiệm: popup `Bài học này dành riêng cho thành viên VIP…`, `Nâng cấp VIP` → màn thanh toán; `Đóng`.
- `A04.02` **Popup bản miễn phí**: Khi mở app hoặc sau một số thao tác: `Cảm ơn bạn đã sử dụng ứng dụng…` + `Bản miễn phí có thể xuất hiện quảng cáo và giới hạn một số tính năng…`; `Nâng cấp VIP` / `Tiếp tục dùng bản miễn phí`.
- `A04.03` **Quảng cáo**: Free: banner cố định (chân màn, giữa bài), toàn màn hình trước nội dung 👑 (nút tắt sau vài giây), video ngắn ngẫu nhiên; VIP và đang trải nghiệm: không quảng cáo.
- `A04.04` **Thanh toán VIP**: Màn chọn gói: `Tháng`, `3 tháng`, `6 tháng`, `12 tháng`, `Vĩnh viễn` với giá; `Thanh toán` gọi Apple Pay (iOS) / Google Play (Android); thành công: tài khoản / thiết bị VIP, badge VIP, mở nội dung, tắt quảng cáo, popup cảm ơn; thất bại: lỗi và thử lại. Chân màn link `Điều Khoản`, `Chính sách riêng tư` (trang văn bản cuộn; lỗi tải: `Không thể tải … Vui lòng thử lại sau.`). Không có gói: `Hiện chưa thể hiển thị danh sách gói VIP. Vui lòng thử lại sau.`
- `A04.05` **Mã quà tặng**: Cài đặt → `Nâng cấp VIP` → `Dùng mã quà tặng`: Họ tên, SĐT, Mã (2 chữ + 4 số, vd `AA1234`); icon QR mở camera (trước / sau, chọn ảnh) tự điền mã; `Kích hoạt mã` bật khi đủ 3 field đúng định dạng; sai: `Mã không hợp lệ`, tối đa 3 lần / ngày, hết: nút khoá + `Vui lòng thử lại vào ngày mai`; đúng: VIP + popup chúc mừng. Mã quà tặng do Admin tạo ở [Gift code](../../tools/move_video/move_video.md).
- `A04.06` **Khôi phục thanh toán**: Cài đặt → `Khôi phục thanh toán` (chỉ hiện khi free): kiểm tra giao dịch theo Apple ID / Google; có: `Khôi phục thành công, chúc mừng bạn!`; không: `Không tìm thấy gói VIP nào đã mua với tài khoản hiện tại`.

**Điểm cần lưu ý:**

- VIP gắn với tài khoản cửa hàng (Apple / Google) và, nếu đăng nhập, với tài khoản app.
- Học viên có lớp đang `Đang học` được coi như VIP ở chế độ trải nghiệm của trung tâm mình.

### Trang 5: Toast phản hồi CRUD
![Trang 5](../../images/01-toast-crud.png)

*Toast Thành Công, Thông Báo, Cảnh Báo và Có Lỗi Xảy Ra — nhấn để xem ảnh gốc*

**Mô tả:**

- Phản hồi khi đổi cấp độ, bắt đầu trải nghiệm, kích hoạt mã.

**Điểm cần lưu ý:**

- `A05.01` **Thành công**: Tiêu đề cố định: `Thành Công`; Khi sử dụng: `Đã chuyển sang <cấp độ>`; `Kích hoạt VIP thành công`
- `A05.02` **Cảnh báo**: Tiêu đề cố định: `Cảnh Báo`; Khi sử dụng: `Mã không hợp lệ`; `Vui lòng thử lại vào ngày mai`
- `A05.03` **Lỗi**: Tiêu đề cố định: `Có Lỗi Xảy Ra`; Khi sử dụng: `Thanh toán không hoàn tất, vui lòng thử lại`

- Popup chúc mừng VIP thay cho Toast khi thanh toán thành công.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1 / REQ01: Màn chính học viên**

```text
Đăng nhập → màn chính: Thư viện (% tổng), Khoá học của bạn (lớp của học viên theo trung tâm), Ưu đãi
      → thẻ lớp → chi tiết lớp
```

**Flow 2 / REQ02: Chế độ trải nghiệm**

```text
Mở app chưa đăng nhập → Chọn trình độ → màn chính trải nghiệm theo cấp độ
      → Bảng chữ / Kiến thức nền / Kỹ năng / Thư viện (dữ liệu trên máy)
      → Dành cho học viên → Đăng nhập → màn chính học viên
```

**Flow 3 / REQ03: Trải nghiệm 30 ngày và giới hạn free**

```text
Lần đầu chế độ trải nghiệm → popup 30 ngày → Đồng Ý → mở toàn bộ, không quảng cáo, đếm ngày
      → Hết hạn → popup hết hạn → free: nội dung 👑 khoá + quảng cáo, hoặc Nâng cấp VIP
```

**Flow 4 / REQ04: VIP**

```text
Nâng cấp VIP → chọn gói → thanh toán cửa hàng → VIP (hoặc Dùng mã quà tặng → Kích hoạt mã → VIP)
      → Cài lại app → Khôi phục thanh toán → VIP
```

### 2.2. Ngoại lệ

- **EX01:** Học viên chưa được phân lớp → thông báo + `Liên hệ Support`; vẫn dùng Thư viện và chế độ trải nghiệm.
- **EX02:** Free bấm nội dung 👑 → popup giới hạn, không vào.
- **EX03:** Hết hạn trải nghiệm → popup hết hạn, khoá nội dung 👑, bật quảng cáo.
- **EX04:** Mã quà tặng sai 3 lần / ngày → khoá nút tới ngày mai.
- **EX05:** Thanh toán huỷ / lỗi → không đổi trạng thái, thông báo lỗi, thử lại.
- **EX06:** Cấp độ chưa có khoá học công khai → `Hiện chưa có nội dung cho cấp độ này`.
- **EX07:** Đăng nhập sau khi đã có dữ liệu trải nghiệm trên máy → hỏi `Gộp thư viện trải nghiệm vào tài khoản?`; đồng ý thì gộp (Đã thuộc và thư viện), từ chối thì giữ riêng trên máy.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Màn chính học viên | Lớp của học viên theo trung tâm đang chọn, trạng thái theo bảng, thứ tự Chưa hoàn thành → Chưa bắt đầu → Hoàn thành; lớp Huỷ bỏ ẩn; 4 thẻ + Xem thêm; Ưu đãi theo cấu hình trung tâm. |
| REQ02 | Chế độ trải nghiệm | Không cần đăng nhập; cấp độ từ Quản lý cấp độ của trung tâm; nội dung = khoá học Công khai của cấp độ; dữ liệu học lưu thiết bị (lưu tài khoản nếu đã đăng nhập); thanh tab Kiến thức / Thư viện (không có Kiểm tra tổng hợp, Lộ trình). |
| REQ03 | Trải nghiệm và free | 30 ngày từ lần Đồng Ý đầu; trong hạn mở toàn bộ, không quảng cáo; ngoài hạn: nội dung 👑 cần VIP, quảng cáo banner / toàn màn / video; học viên có lớp Đang học không bị giới hạn. |
| REQ04 | VIP | 5 gói qua Apple Pay / Google Play; mã quà tặng `AA1234`, 3 lần / ngày, QR; khôi phục theo tài khoản cửa hàng; Điều khoản và Chính sách riêng tư; VIP tắt quảng cáo và mở nội dung. |

### 2.4. Ràng buộc

#### Quyền

| Role | Màn chính học viên | Chế độ trải nghiệm | Nội dung 👑 | Mua VIP / mã |
|---|:---:|:---:|:---:|:---:|
| Học viên có lớp Đang học | ✅ | ✅ | ✅ | ✅ |
| Học viên không có lớp Đang học | ✅ | ✅ | theo VIP / trải nghiệm | ✅ |
| Người dùng chưa đăng nhập | ❌ | ✅ | theo VIP / trải nghiệm | ✅ |

#### Ràng buộc khác

**Phạm vi dữ liệu**

- Trải nghiệm chỉ thấy khoá học Công khai của cấp độ; học viên chỉ thấy lớp của mình; trạng thái VIP kiểm tra ở backend khi trả nội dung 👑.

---

---

## 3. Testcase

### Feature: [Học viên] Màn chính và trải nghiệm

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Đăng nhập vào màn chính | High · Smoke | Flow 1 / REQ01 | Học viên | 7 lớp: 2 Đang học, 1 Khai giảng, 3 Hoàn thành, 1 Huỷ | **Given** đăng nhập<br>**When** màn chính<br>**Then** 4 thẻ + `Xem thêm (2)`, lớp Huỷ không hiện | - Thứ tự đúng REQ01 |
| Case 2: Chưa có lớp | Medium | EX01 | Học viên mới | Chưa phân lớp | **Given** màn chính<br>**When** render<br>**Then** `Bạn chưa được phân công khoá học nào` | - Banner Thư viện vẫn có |
| Case 3: Ẩn ưu đãi | Low | REQ01 | Học viên | Trung tâm không cấu hình | **Given** màn chính<br>**When** render<br>**Then** không có khối Ưu đãi | - |
| Case 4: Chọn trình độ | High · Smoke | Flow 2 / REQ02 | Người dùng trải nghiệm | Trung tâm có 4 cấp độ | **Given** mở app lần đầu<br>**When** chọn `HSK2`<br>**Then** màn chính theo HSK2, header `HSK2 - ...` | - Mở lại app giữ HSK2 |
| Case 5: Nội dung VIP | High | EX02 / REQ03 | Người dùng free | Thẻ NGỮ PHÁP có 👑 | **Given** bấm thẻ<br>**When** chưa VIP<br>**Then** popup `Bài học này dành riêng cho thành viên VIP…` với `Nâng cấp VIP` / `Đóng` | - Không vào nội dung |
| Case 6: Học viên vào chế độ trải nghiệm | Medium | REQ02 | Học viên | Đã đăng nhập | **Given** dropdown header → cấp độ `HSK1`<br>**When** đổi<br>**Then** màn chính trải nghiệm; Đã thuộc lưu theo tài khoản | - Dropdown → `Học viên` để về |
| Case 7: Bắt đầu trải nghiệm | High · Smoke | Flow 3 / REQ03 | Người dùng free | Lần đầu mở | **Given** popup<br>**When** `Đồng Ý`<br>**Then** `Còn lại 30 ngày`, nội dung 👑 mở, không quảng cáo | - Hôm sau mở app: popup `Còn lại 29 ngày` |
| Case 8: Hết hạn | High | EX03 / REQ03 | Người dùng free | Ngày 31 | **Given** mở app<br>**When** popup hết hạn<br>**Then** `Nâng cấp VIP` / `Tiếp tục dùng bản miễn phí`; nội dung 👑 khoá, quảng cáo bật | - |
| Case 9: Mua VIP | High · Smoke | Flow 4 / REQ04 | Người dùng free | Hết trải nghiệm | **Given** `Nâng cấp VIP` → gói `3 tháng`<br>**When** thanh toán cửa hàng thành công<br>**Then** badge VIP, nội dung 👑 mở, quảng cáo tắt, popup cảm ơn | - Thất bại: lỗi, thử lại |
| Case 10: Mã quà tặng sai 3 lần | High | EX04 / REQ04 | Người dùng free | Đã sai 2 lần hôm nay | **Given** nhập `AB1234` sai<br>**When** `Kích hoạt mã`<br>**Then** `Mã không hợp lệ`, nút khoá, `Vui lòng thử lại vào ngày mai` | - Hôm sau mở lại |
| Case 11: Quét QR | Medium | REQ04 | Người dùng free | Mã QR hợp lệ | **Given** icon QR → quét<br>**When** nhận mã<br>**Then** ô Mã tự điền, vẫn cần `Kích hoạt mã` | - |
| Case 12: Khôi phục | Medium | REQ04 | Người dùng free đã từng mua | Cài lại app | **Given** Cài đặt → `Khôi phục thanh toán`<br>**When** tìm thấy giao dịch<br>**Then** VIP, popup `Khôi phục thành công, chúc mừng bạn!` | - Không có: thông báo lỗi |
| Case 13: Quảng cáo | Medium | REQ03 | Người dùng free | Hết trải nghiệm | **Given** chuyển tab<br>**When** render<br>**Then** banner chân màn; mở nội dung 👑: quảng cáo toàn màn có nút tắt sau vài giây | - VIP không thấy |
| Toast Case 1: Đổi cấp độ | Low | Ràng buộc Toast CRUD | Người dùng | Đang HSK1 | **Given** chọn HSK2<br>**When** lưu<br>**Then** Toast `Đã chuyển sang HSK2` | - |

---

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Giá gói VIP, nội dung nào gắn 👑.
- **Q02:** Nội dung banner quảng cáo / ưu đãi do ai cấu hình trên ICS (chưa có requirement).
- **Q03:** Màn thanh toán, mã quà tặng, khôi phục, Cài đặt chưa có ảnh.
