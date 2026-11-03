# [Học viên] Thư viện học tập

## 1. UI

### Trang 1: Màn Thư viện và tab Kiến thức

**Mô tả:**
- Thư viện học tập là kho cá nhân của học viên: các mục kiến thức, bài kỹ năng, chữ bảng chữ đã lưu bằng ⭐ ở các màn khác. Mở từ banner `THƯ VIỆN HỌC TẬP` ở màn chính (hiện % tiến độ tổng); gồm 3 tab `Kiến thức`, `Kỹ năng`, `Tiến trình`.
- Màn gồm header `Thư viện học tập`, vòng % tổng, 3 tab. Tab `Kiến thức` liệt kê các mục theo loại: Từ vựng, Ngữ pháp, Chữ (Hanzi / Kanji), Mẫu câu, Bảng chữ (theo trung tâm); mỗi mục có % riêng, dòng tag xem nhanh và nút `Chi tiết`; dưới cùng nút `Duyệt` và `Luyện tập` chung cho tab.
- Mọi màn học / duyệt / luyện tập trong Thư viện dùng lại các màn của [Kiến thức](../knowledge/knowledge.md), [Kỹ năng](../skill/skill.md), [Bảng chữ](../alphabet/alphabet.md) với phạm vi là mục đã lưu.

**Điểm cần lưu ý:**
- % tổng: trung bình cộng % của các mục có trong thư viện (Từ vựng, Ngữ pháp, Chữ, Mẫu câu, Bảng chữ, Nghe, Đọc, Nói); mục chưa lưu gì không tính. % mục = số mục Đã thuộc / số mục đã lưu.
- Khối loại: dòng tag tối đa 5 mục đã lưu (Đã thuộc highlight cam; bấm tag mở popup xem nhanh: nội dung, loa, nút `Đã thuộc / Chưa thuộc`, ⭐ gỡ). Nút `Chi tiết` mở danh sách thẻ của loại (màn Danh sách thẻ ở Kiến thức với phạm vi đã lưu; ⭐ gỡ khỏi thư viện).
- `Duyệt`: popup chọn loại `Tất cả` / từng loại, vào màn Duyệt (thẻ theo loại, `Đã thuộc` / `Cần học lại`, tổng kết theo từng loại).
- `Luyện tập`: popup `Hình thức` (`Học` / `Flashcard`) → popup `Kiến thức` (Từ vựng / Ngữ pháp / Cả hai) → popup `Nội dung` (`Chọn tất cả` / `Chưa thuộc` / tick từng mục). **Tối thiểu 5 mục mỗi loại**, thiếu thì cảnh báo và không cho tiếp. Sau đó chạy chế độ như Kiến thức (Học: card nội dung, trắc nghiệm, sắp xếp xen kẽ; Flashcard: 3 loại + Tuỳ chỉnh).
- Trống: loại chưa lưu gì hiện `Bạn chưa lưu <loại> nào`; thư viện trống hiện `Thư viện của bạn đang trống, hãy ⭐ nội dung muốn ôn lại`.
- Mục bị CD chuyển Vô hiệu vẫn xem được trong thư viện; mục bị xoá mềm thì tự gỡ.
- Trạng thái Đã thuộc dùng chung với mọi màn (xem REQ của Kiến thức).

### Trang 2: Tab Kỹ năng

**Mô tả:**
- Liệt kê bài Nghe, Đọc, Nói đã lưu theo khối với % riêng và nút `Chi tiết`; `Duyệt` và `Luyện tập` chung.

**Điểm cần lưu ý:**
- Khối Nghe / Đọc / Nói: tên, thanh %, danh sách bài (tiêu đề + nghĩa, icon kỹ năng). `Chi tiết` mở danh sách bài kỹ năng (phạm vi đã lưu), bấm bài mở Chi tiết bài như [Kỹ năng](../skill/skill.md).
- `Duyệt`: popup `Duyệt tất cả` / `Đọc` / `Nghe` → flashcard từng câu của bài. Đọc hiện câu + nghĩa; Nghe tự phát audio, câu, nút Pause / Play; `Đã thuộc` / `Cần học lại` (không đổi % kỹ năng); `Quay lại`; tổng kết + `Duyệt lại`.
- `Luyện tập`: popup kỹ năng `Nghe` / `Đọc` → popup nội dung `Chọn tất cả` / `Chưa thuộc` / từng bài → `Bắt đầu` → mỗi bài 3 bước: Flashcard → Ghi nhớ nội dung → Sắp xếp thành câu (đúng mới sang bài kế).
- Bài Nói lưu được nhưng Duyệt / Luyện tập chỉ áp dụng Nghe, Đọc; Nói luyện ở màn bài.
- Trống: `Bạn chưa lưu bài <kỹ năng> nào`.

### Trang 3: Tab Tiến trình

**Mô tả:**
- Thống kê việc học trong Thư viện: vòng `% Tiến trình tổng`, bộ lọc loại nội dung và thời gian, biểu đồ đường số nội dung hoàn thành theo ngày, các khối tổng theo mốc thời gian.

**Điểm cần lưu ý:**
- Vòng %: số mục Đã thuộc / tổng mục đã lưu trong thư viện.
- Lọc `Loại nội dung`: `Toàn bộ`, `Kiến thức`, `Kỹ năng`, `Từ vựng`, `Ngữ pháp`, `Chữ`, `Bảng chữ`, `Đọc`, `Nghe`, `Nói`; chọn một. Lọc `Thời gian`: `Tuần này` / `Tháng này` / `Toàn bộ`.
- Biểu đồ đường: trục ngang ngày, trục dọc số nội dung chuyển sang Đã thuộc trong ngày (theo lọc); không có dữ liệu hiện `Năm nay bạn chưa học được nội dung gì!!!`.
- Khối tổng `Hôm nay`, `Tuần này`, `Tháng này`, `Năm nay`: tổng nội dung hoàn thành; mở rộng để xem theo từng loại.
- "Hoàn thành" tính tại thời điểm mục chuyển sang Đã thuộc (ở bất kỳ màn nào), chỉ tính mục đang trong thư viện.
- Mục chuyển về Chưa thuộc rồi Đã thuộc lại tính là lần mới.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Xem thư viện**

```
Banner Thư viện (% tổng) → tab Kiến thức / Kỹ năng: khối theo loại, % riêng, tag xem nhanh, Chi tiết
      → Chi tiết → danh sách (phạm vi đã lưu) → ⭐ gỡ, 💡 Đã thuộc
```

**Flow 2: Duyệt và luyện tập trong thư viện**

```
Duyệt → chọn loại / kỹ năng → thẻ → Đã thuộc / Cần học lại → tổng kết
Luyện tập → hình thức → loại → nội dung (≥ 5 mỗi loại) → chạy chế độ
```

**Flow 3: Tiến trình**

```
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

- Thư viện của học viên lưu server theo tài khoản; của người dùng trải nghiệm lưu thiết bị.
- Mỗi thao tác một Toast: `Thành Công` (`Đã cập nhật thư viện!`), `Cảnh Báo` (`Cần ít nhất 5 nội dung để luyện tập`), `Có Lỗi Xảy Ra` (`Cập nhật thư viện thất bại`). Đổi Đã thuộc không có Toast.

![Toast CRUD](../../images/01-toast-crud.png)

---

## 3. Testcase

### Feature: [Học viên] Thư viện học tập

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Mở thư viện | High | Flow 1 / REQ01 | Học viên | Đã lưu 10 từ (6 thuộc), 4 ngữ pháp (2 thuộc), 2 bài nghe (1 thuộc) | **Given:** ở màn chính<br>**When:** bấm banner Thư viện<br>**Then:** % tổng = (60+50+50)/3 = 53%, tab Kiến thức có 2 khối | - Tag 5 từ đầu, 6 từ thuộc highlight |
| Case 2: Gỡ khỏi thư viện | High | Flow 1 / REQ02 | Học viên | Từ `你` đã lưu | **Given:** `Chi tiết` → bấm ⭐ trên thẻ<br>**When:** gỡ<br>**Then:** thẻ biến mất | - Toast `Đã cập nhật thư viện!`<br>- % tổng tính lại |
| Case 3: Luyện tập thiếu mục | High | EX02 / REQ03 | Học viên | Lưu 3 ngữ pháp | **Given:** `Luyện tập` → Học → Ngữ pháp<br>**When:** ở popup Nội dung bấm tiếp<br>**Then:** cảnh báo, không tiếp | - Toast `Cảnh Báo` `Cần ít nhất 5 nội dung để luyện tập`<br>- Không chạy luyện tập |
| Case 4: Duyệt tất cả | Medium | Flow 2 / REQ03 | Học viên | 10 từ, 4 ngữ pháp | **Given:** `Duyệt` → `Tất cả`<br>**When:** duyệt hết<br>**Then:** hiện tổng kết riêng Từ vựng / Ngữ pháp | - |
| Case 5: Duyệt Nghe | High | Flow 2 / REQ03 | Học viên | Lưu 2 bài nghe, 12 câu | **Given:** tab Kỹ năng → `Duyệt` → `Nghe`<br>**When:** thẻ hiện<br>**Then:** audio tự phát, có `Pause / Play`, hiện `1/12` | - Tổng kết không đổi % Nghe |
| Case 6: Luyện tập Đọc | Medium | Flow 2 / REQ03 | Học viên | Lưu 3 bài đọc | **Given:** `Luyện tập` → Đọc → `Chưa thuộc` → `Bắt đầu`<br>**When:** làm 3 bước bài 1<br>**Then:** sắp xếp đúng mới sang bài 2 | - |
| Case 7: Biểu đồ tuần | Medium | Flow 3 / REQ04 | Học viên | Tuần này: thứ 2 thuộc 3 từ, thứ 4 thuộc 2 ngữ pháp | **Given:** lọc `Toàn bộ`, `Tuần này`<br>**When:** render<br>**Then:** điểm thứ 2 = 3, thứ 4 = 2 | - Khối Tuần này = 5, mở rộng: Từ vựng 3, Ngữ pháp 2 |
| Case 8: Lọc theo loại | Low | REQ04 | Học viên | Như Case 7 | **Given:** lọc `Từ vựng`<br>**When:** render<br>**Then:** chỉ có điểm thứ 2 = 3 | - |
| Case 9: Không có dữ liệu tiến trình | Low | EX03 | Học viên | Chưa thuộc gì năm nay | **Given:** lọc `Toàn bộ`<br>**When:** render<br>**Then:** hiện `Năm nay bạn chưa học được nội dung gì!!!` | - |
| Case 10: Thư viện trống | Low | EX01 | Học viên | Chưa lưu mục nào | **Given:** mở thư viện<br>**When:** render<br>**Then:** hiện `Thư viện của bạn đang trống, hãy ⭐ nội dung muốn ôn lại` | - Không có Duyệt / Luyện tập |
| Case 11: Mục nguồn bị CD xoá / vô hiệu | Medium | EX04 | Học viên | Một mục đã lưu bị CD xoá mềm, một mục bị Vô hiệu | **Given:** mở thư viện<br>**When:** tải xong<br>**Then:** mục xoá mềm tự gỡ; mục Vô hiệu vẫn xem được | - % tổng tính lại |
| Case 12: Người dùng trải nghiệm | Medium | EX05 / Ràng buộc quyền | Người dùng trải nghiệm | Đã lưu mục trong thư viện trên máy | **Given:** dùng thư viện khi chưa đăng nhập, sau đó đăng nhập học viên<br>**When:** đăng nhập xong<br>**Then:** hỏi gộp thư viện | - Popup `Gộp thư viện trải nghiệm vào tài khoản?`<br>- Dữ liệu trước đó lưu trên máy |
| Case 13: Lỗi cập nhật | Medium | Ràng buộc Toast | Học viên | Mất mạng hoặc backend lỗi | **Given:** bấm ⭐ gỡ mục<br>**When:** thất bại<br>**Then:** báo lỗi | - Toast `Có Lỗi Xảy Ra` `Cập nhật thư viện thất bại` |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Các trang chưa có mã màn Figma, cần design cấp mã (theo quy ước `<HỌ>-<MODULE>-NNNNNN`) hoặc cho biết frame nằm ở file Figma nào.
- **Q02:** Toàn bộ màn Thư viện (Trang 1–3) chưa có ảnh thiết kế.
- **Q03:** Có cho Duyệt / Luyện tập bài Nói và Bảng chữ trong thư viện không (spec chỉ nêu Nghe / Đọc và Kiến thức).
