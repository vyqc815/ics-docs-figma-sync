# [Học viên] Thư viện học tập

**Thư viện học tập** là kho cá nhân của học viên: các mục kiến thức, bài kỹ năng, chữ bảng chữ đã lưu bằng ⭐ ở các màn khác. Gồm 3 tab **Kiến thức**, **Kỹ năng**, **Tiến trình**. Mở từ banner `THƯ VIỆN HỌC TẬP` ở màn chính (hiện % tiến độ tổng). Mọi màn học / duyệt / luyện tập trong Thư viện dùng lại các màn của [Kiến thức](../knowledge/knowledge.md), [Kỹ năng](../skill/skill.md), [Bảng chữ](../alphabet/alphabet.md) với phạm vi là mục đã lưu.

Chưa có ảnh màn Thư viện; đặc tả theo spec.

## 1. UI

### Trang 1: Màn Thư viện và tab Kiến thức
**Mô tả:**

- Màn gồm header `Thư viện học tập`, vòng % tổng, 3 tab. Tab `Kiến thức` liệt kê các mục theo loại: Từ vựng, Ngữ pháp, Chữ (Hanzi / Kanji), Mẫu câu, Bảng chữ (theo trung tâm); mỗi mục có % riêng, dòng tag xem nhanh và nút `Chi tiết`; dưới cùng nút `Duyệt` và `Luyện tập` chung cho tab.

**Điểm cần lưu ý:**

- `A01.01` **% tổng**: Trung bình cộng % của các mục có trong thư viện (Từ vựng, Ngữ pháp, Chữ, Mẫu câu, Bảng chữ, Nghe, Đọc, Nói); mục chưa lưu gì không tính. % mục = số mục Đã thuộc / số mục đã lưu.
- `A01.02` **Khối loại**: Tên loại, thanh %, dòng tag tối đa 5 mục đã lưu (Đã thuộc highlight cam; bấm tag mở popup xem nhanh: nội dung, loa, nút `Đã thuộc / Chưa thuộc`, ⭐ gỡ), nút `Chi tiết` mở danh sách thẻ của loại (màn Danh sách thẻ ở Kiến thức với phạm vi đã lưu; ⭐ gỡ khỏi thư viện).
- `A01.03` **`Duyệt`**: Popup chọn loại: `Tất cả` / từng loại → màn Duyệt (thẻ theo loại, `Đã thuộc` / `Cần học lại`, tổng kết theo từng loại).
- `A01.04` **`Luyện tập`**: Popup `Hình thức`: `Học` / `Flashcard` → popup `Kiến thức`: Từ vựng / Ngữ pháp / Cả hai → popup `Nội dung`: `Chọn tất cả` / `Chưa thuộc` / tick từng mục; **tối thiểu 5 mục mỗi loại**, thiếu thì cảnh báo và không cho tiếp → chạy chế độ như Kiến thức (Học: card nội dung, trắc nghiệm, sắp xếp xen kẽ; Flashcard: 3 loại + Tuỳ chỉnh).
- `A01.05` **Trống**: Loại chưa lưu gì: `Bạn chưa lưu <loại> nào`; thư viện trống: `Thư viện của bạn đang trống, hãy ⭐ nội dung muốn ôn lại`.

- Mục bị CD chuyển Vô hiệu vẫn xem được trong thư viện; mục bị xoá mềm thì tự gỡ.
- Trạng thái Đã thuộc dùng chung với mọi màn (REQ của Kiến thức).

### Trang 2: Tab Kỹ năng
**Mô tả:**

- Liệt kê bài Nghe, Đọc, Nói đã lưu theo khối với % riêng và nút `Chi tiết`; `Duyệt` và `Luyện tập` chung.

**Điểm cần lưu ý:**

- `A02.01` **Khối Nghe / Đọc / Nói**: Tên, thanh %, danh sách bài (tiêu đề + nghĩa, icon kỹ năng), `Chi tiết` mở danh sách bài kỹ năng (phạm vi đã lưu), bấm bài mở Chi tiết bài như [Kỹ năng](../skill/skill.md).
- `A02.02` **`Duyệt`**: Popup `Duyệt tất cả` / `Đọc` / `Nghe` → flashcard từng câu của bài: Đọc hiện câu + nghĩa; Nghe tự phát audio, câu, nút Pause / Play; `Đã thuộc` / `Cần học lại` (không đổi % kỹ năng); `Quay lại`; tổng kết + `Duyệt lại`.
- `A02.03` **`Luyện tập`**: Popup kỹ năng `Nghe` / `Đọc` → popup nội dung `Chọn tất cả` / `Chưa thuộc` / từng bài → `Bắt đầu` → mỗi bài 3 bước: Flashcard → Ghi nhớ nội dung → Sắp xếp thành câu (đúng mới sang bài kế).
- `A02.04` **Trống**: `Bạn chưa lưu bài <kỹ năng> nào`.

- Bài Nói lưu được nhưng Duyệt / Luyện tập chỉ áp dụng Nghe, Đọc; Nói luyện ở màn bài.

### Trang 3: Tab Tiến trình
**Mô tả:**

- Thống kê việc học trong Thư viện: vòng `% Tiến trình tổng`, bộ lọc loại nội dung và thời gian, biểu đồ đường số nội dung hoàn thành theo ngày, các khối tổng theo mốc thời gian.

**Điểm cần lưu ý:**

- `A03.01` **Vòng %**: Số mục Đã thuộc / tổng mục đã lưu trong thư viện.
- `A03.02` **Lọc `Loại nội dung`**: `Toàn bộ`, `Kiến thức`, `Kỹ năng`, `Từ vựng`, `Ngữ pháp`, `Chữ`, `Bảng chữ`, `Đọc`, `Nghe`, `Nói`; một lựa chọn.
- `A03.03` **Lọc `Thời gian`**: `Tuần này` / `Tháng này` / `Toàn bộ`.
- `A03.04` **Biểu đồ đường**: Trục ngang ngày, trục dọc số nội dung chuyển sang Đã thuộc trong ngày (theo lọc); không có dữ liệu: `Năm nay bạn chưa học được nội dung gì!!!`.
- `A03.05` **Khối tổng**: `Hôm nay`, `Tuần này`, `Tháng này`, `Năm nay`: tổng nội dung hoàn thành; mở rộng để xem theo từng loại.

- "Hoàn thành" tính tại thời điểm mục chuyển sang Đã thuộc (ở bất kỳ màn nào), chỉ tính mục đang trong thư viện.
- Mục chuyển về Chưa thuộc rồi Đã thuộc lại tính là lần mới.

### Trang 4: Toast phản hồi CRUD
![Trang 4](../../images/01-toast-crud.png)

*Toast Thành Công, Thông Báo, Cảnh Báo và Có Lỗi Xảy Ra — nhấn để xem ảnh gốc*

**Mô tả:**

- Phản hồi khi gỡ mục khỏi thư viện và cảnh báo luyện tập.

**Điểm cần lưu ý:**

- `A04.01` **Thành công**: Tiêu đề cố định: `Thành Công`; Khi sử dụng: `Đã cập nhật thư viện!`
- `A04.02` **Cảnh báo**: Tiêu đề cố định: `Cảnh Báo`; Khi sử dụng: `Cần ít nhất 5 nội dung để luyện tập`
- `A04.03` **Lỗi**: Tiêu đề cố định: `Có Lỗi Xảy Ra`; Khi sử dụng: `Cập nhật thư viện thất bại`

- Đổi Đã thuộc không Toast.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1 / REQ01 / REQ02: Xem thư viện**

```text
Banner Thư viện (% tổng) → tab Kiến thức / Kỹ năng: khối theo loại, % riêng, tag xem nhanh, Chi tiết
      → Chi tiết → danh sách (phạm vi đã lưu) → ⭐ gỡ, 💡 Đã thuộc
```

**Flow 2 / REQ03: Duyệt và luyện tập trong thư viện**

```text
Duyệt → chọn loại / kỹ năng → thẻ → Đã thuộc / Cần học lại → tổng kết
Luyện tập → hình thức → loại → nội dung (≥ 5 mỗi loại) → chạy chế độ
```

**Flow 3 / REQ04: Tiến trình**

```text
Tab Tiến trình → vòng % → lọc loại, thời gian → biểu đồ ngày → khối Hôm nay / Tuần / Tháng / Năm (mở rộng theo loại)
```

### 2.2. Ngoại lệ

- **EX01:** Thư viện / loại trống → thông báo trống, không có Duyệt / Luyện tập.
- **EX02:** Luyện tập chọn dưới 5 mục một loại → cảnh báo, không tiếp.
- **EX03:** Tiến trình không có dữ liệu → `Năm nay bạn chưa học được nội dung gì!!!`.
- **EX04:** Mục nguồn bị xoá mềm ở CD → tự gỡ khỏi thư viện; Vô hiệu vẫn giữ.
- **EX05:** Người dùng trải nghiệm: thư viện lưu trên máy; đăng nhập thành học viên thì hỏi `Gộp thư viện trải nghiệm vào tài khoản?` (xem [Màn chính và trải nghiệm](../home_trial/home_trial.md)).

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Tiến độ | % mục = Đã thuộc / đã lưu; % tổng = trung bình các mục có dữ liệu; cập nhật ngay khi đổi Đã thuộc hoặc lưu / gỡ. |
| REQ02 | Nội dung | Thư viện chứa tham chiếu mục S1 / S6; hiển thị dữ liệu mới nhất; gỡ bằng ⭐ hoặc bỏ tick ở chọn nhiều. |
| REQ03 | Duyệt / Luyện tập | Dùng lại màn của Kiến thức / Kỹ năng / Bảng chữ với phạm vi đã lưu; luyện tập tối thiểu 5 mục mỗi loại; Duyệt kỹ năng không đổi % kỹ năng. |
| REQ04 | Tiến trình | Đếm lần chuyển sang Đã thuộc của mục trong thư viện theo ngày; lọc loại và mốc thời gian; khối tổng 4 mốc. |

### 2.4. Ràng buộc

#### Quyền

| Role | Xem | Lưu / gỡ | Duyệt / Luyện tập | Tiến trình |
|---|:---:|:---:|:---:|:---:|
| Học viên | ✅ | ✅ | ✅ | ✅ |
| Người dùng trải nghiệm | ✅ (trên máy) | ✅ | ✅ | ✅ (trên máy) |

#### Ràng buộc khác

**Phạm vi dữ liệu**

- Thư viện của học viên lưu server theo tài khoản; của người dùng trải nghiệm lưu thiết bị.

---

---

## 3. Testcase

### Feature: [Học viên] Thư viện học tập

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Mở thư viện | High · Smoke | Flow 1 / REQ01 | Học viên | Đã lưu 10 từ (6 thuộc), 4 ngữ pháp (2 thuộc), 2 bài nghe (1 thuộc) | **Given** bấm banner<br>**When** tải<br>**Then** % tổng = (60+50+50)/3 = 53%, tab Kiến thức 2 khối | - Tag 5 từ đầu, 6 từ thuộc highlight |
| Case 2: Gỡ khỏi thư viện | High | REQ02 | Học viên | Từ `你` đã lưu | **Given** `Chi tiết` → bấm ⭐ trên thẻ<br>**When** gỡ<br>**Then** thẻ biến mất, Toast `Đã cập nhật thư viện!` | - % tổng tính lại |
| Case 3: Luyện tập thiếu mục | High | EX02 / REQ03 | Học viên | Lưu 3 ngữ pháp | **Given** `Luyện tập` → Học → Ngữ pháp<br>**When** popup Nội dung<br>**Then** cảnh báo `Cần ít nhất 5 nội dung để luyện tập`, không tiếp | - |
| Case 4: Duyệt tất cả | Medium | Flow 2 / REQ03 | Học viên | 10 từ, 4 ngữ pháp | **Given** `Duyệt` → `Tất cả`<br>**When** duyệt hết<br>**Then** tổng kết riêng Từ vựng / Ngữ pháp | - |
| Case 5: Duyệt Nghe | High · Smoke | Flow 2 / REQ03 | Học viên | Lưu 2 bài nghe, 12 câu | **Given** `Duyệt` → `Nghe`<br>**When** thẻ hiện<br>**Then** audio tự phát, `Pause / Play`, `1/12` | - Tổng kết không đổi % Nghe |
| Case 6: Luyện tập Đọc | Medium | REQ03 | Học viên | Lưu 3 bài đọc | **Given** `Luyện tập` → Đọc → `Chưa thuộc` → `Bắt đầu`<br>**When** làm 3 bước bài 1<br>**Then** sắp xếp đúng mới sang bài 2 | - |
| Case 7: Biểu đồ tuần | Medium · Smoke | Flow 3 / REQ04 | Học viên | Tuần này: thứ 2 thuộc 3 từ, thứ 4 thuộc 2 ngữ pháp | **Given** lọc `Toàn bộ`, `Tuần này`<br>**When** render<br>**Then** điểm thứ 2 = 3, thứ 4 = 2 | - Khối Tuần này = 5, mở rộng: Từ vựng 3, Ngữ pháp 2 |
| Case 8: Lọc Từ vựng | Low | REQ04 | Học viên | Như trên | **Given** lọc `Từ vựng`<br>**When** render<br>**Then** chỉ điểm thứ 2 = 3 | - |
| Case 9: Không có dữ liệu | Low | EX03 | Học viên | Chưa thuộc gì năm nay | **Given** lọc `Toàn bộ`<br>**When** render<br>**Then** `Năm nay bạn chưa học được nội dung gì!!!` | - |
| Toast Case 1: Cảnh báo | Medium | Ràng buộc Toast CRUD | Học viên | 3 mục | **Given** popup Nội dung<br>**When** bấm tiếp<br>**Then** Toast `Cảnh Báo` | - Không chạy luyện tập |

---

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Toàn bộ màn Thư viện chưa có ảnh thiết kế.
- **Q02:** Có cho Duyệt / Luyện tập bài Nói và Bảng chữ trong thư viện không (spec chỉ nêu Nghe / Đọc và Kiến thức).
