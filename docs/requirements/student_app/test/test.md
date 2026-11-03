# [Học viên] Kiểm tra

## 1. UI

### Trang 1: Danh sách bài kiểm tra

![Trang 1](./images/01-danh-sach-kiem-tra.png)

**Mô tả:**
- Tab `Kiểm tra` trong chi tiết lớp: danh sách bài kiểm tra của lớp mà giáo viên đã giao; bấm thẻ để làm bài hoặc xem kết quả. Bài do CD soạn ([Bài tập về nhà và Kiểm tra](../../course_management/homework-test/homework-test.md), [Học kỳ — Kiểm tra](../../course_management/semester/test/test.md)); giáo viên giao / thu hồi / chấm theo [Giáo viên — Giảng dạy](../../teacher_role/class/class_teaching_requirements.md).

**Điểm cần lưu ý:**
- Thẻ bài: số thứ tự (ô cam); tag ngày giao `dd.MM.yyyy` (xanh lá); tag điểm danh của buổi gắn bài (nếu bài gắn buổi); tên bài (cam, in hoa); mô tả bài.
- Badge: `Chưa làm` (xám), `Đang làm` (cam), `Chờ chấm` (xanh dương), điểm số `x.x` (đỏ nếu < Điểm đạt, xanh lá nếu ≥ Điểm đạt). Các trạng thái `Chưa làm` / `Đang làm` / `Chờ chấm` hiện trước khi có điểm.
- Thanh tiến độ: số câu đã trả lời / tổng khi đang làm; 100% khi đã nộp.
- Thứ tự theo ngày giao mới nhất lên đầu.
- Chỉ hiện bài trạng thái `Đang đợi nộp bài` trở đi của lớp; bài `Chưa giao` hoặc bị giáo viên `Thu hồi` không hiện (thu hồi xoá bài làm và điểm).
- Trống: `Chưa có bài kiểm tra nào được giao`.

### Trang 2: Làm bài kiểm tra

**Mô tả:**
- Màn làm bài: thời gian tính từ lúc vào, tạm dừng khi thoát, câu hỏi thứ tự cố định, nộp bài ở câu cuối.

**Điểm cần lưu ý:**
- Header: Back (tạm dừng, giữ bài), tên bài, đồng hồ thời gian đã làm (đếm lên; nếu bài có giới hạn `Thời gian` thì đếm ngược và tự nộp khi hết).
- Thân: `n/N`, nút `Xem hướng dẫn` (nếu câu có hướng dẫn), câu hỏi theo loại: `Trắc nghiệm` (4 đáp án, chọn 1), `Sắp xếp` (kéo thả thẻ từ), `Nối từ` (nối 2 cột), `Nói` (nhấn giữ mic, nghe lại, ghi lại), `Đọc` (đoạn văn + trả lời), `Viết` (ô nhập), `Hình ảnh` (hình + trả lời / ghi âm), `Câu hỏi con` (câu cha có các câu con, mỗi con một loại, cuộn dọc).
- Điều hướng: `<` `>` chuyển câu; menu số câu (1, 2, 3…) nhảy nhanh, câu đã trả lời tô màu; `Nộp bài` ở câu cuối.
- Nộp: popup `Nộp bài?` nêu số câu chưa làm; `Nộp` gửi bài; chỉ nộp một lần.
- Đáp án lưu nháp trên server ngay khi trả lời; thoát rồi vào lại tiếp tục từ câu đang làm, thời gian tiếp tục đếm.
- Mỗi bài một lần làm; làm lại chỉ khi giáo viên thu hồi và giao lại (bài về `Chưa làm`).
- 11 loại câu của spec cũ ánh xạ về 8 loại của CD (bảng ánh xạ ở [Bài học](../lesson/lesson.md), khu vực Bài tập củng cố); không thêm loại mới.

### Trang 3: Kết quả kiểm tra

**Mô tả:**
- Sau khi nộp: câu app tự chấm hiện ngay, câu giáo viên chấm `Chờ chấm`; giáo viên chấm xong thì hiện điểm tổng, thời gian làm, từng câu đúng / sai, đáp án đúng, nhận xét giáo viên.

**Điểm cần lưu ý:**
- Chờ chấm: icon đồng hồ, `Kết quả đang được chấm. Bạn đợi một tí nhé!`; danh sách câu: tự chấm đúng / sai, còn lại `Chờ chấm`.
- Đã chấm: vòng điểm tổng `x.x` (thang 10 = trung bình điểm câu; xanh lá nếu ≥ Điểm đạt, đỏ nếu < Điểm đạt, kèm dòng `Đạt` / `Chưa đạt`), `Thời gian làm bài mm:ss`.
- Danh sách câu: đúng viền xanh + tick, sai viền đỏ + ×, bỏ qua `Bạn đã bỏ qua câu này!`; `Đáp án của bạn` / `Đáp án đúng` cho Sắp xếp, Nối; phát lại ghi âm cho Nói / Hình ảnh; nhận xét giáo viên (chữ, ảnh, ghi âm) dưới câu.
- Bấm từng câu để mở chi tiết, chỉ đọc.
- `Điểm đạt` lấy từ cấu hình bài kiểm tra của CD (0–10).
- Điểm kiểm tra tính vào `Điểm kiểm tra` ở tab Tổng quan lớp (xem [Lớp học](../course/course.md)).

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Danh sách bài kiểm tra**

```
Giáo viên giao bài → bài hiện ở tab Kiểm tra (Chưa làm) → học viên bấm thẻ
```

**Flow 2: Làm, nộp, xem kết quả**

```
Vào bài → đồng hồ chạy → trả lời (nháp server) → thoát: tạm dừng; vào lại: tiếp tục
      → Nộp bài → popup → Nộp → app chấm câu tự động; câu khác Chờ chấm
      → Giáo viên chấm → điểm tổng thang 10, Đạt / Chưa đạt, chi tiết câu, nhận xét
```

### 2.2. Ngoại lệ

- **EX01:** Giáo viên thu hồi → bài biến mất khỏi danh sách, bài làm và điểm xoá; giao lại thì về `Chưa làm`.
- **EX02:** Lớp chưa có bài → `Chưa có bài kiểm tra nào được giao`.
- **EX03:** Hết giới hạn thời gian → tự nộp, câu trống tính bỏ qua, Toast `Thông Báo`.
- **EX04:** Nộp lặp → backend từ chối; app chỉ hiện kết quả.
- **EX05:** Mất mạng khi lưu nháp → giữ trên máy, đồng bộ khi có mạng; nộp thất bại Toast `Có Lỗi Xảy Ra`.
- **EX06:** Học viên không thuộc diện làm bài tại thời điểm giao → không thấy bài.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Danh sách | Bài đã giao của lớp, mới nhất trước; badge trạng thái `Chưa làm` / `Đang làm` / `Chờ chấm` / điểm; tag ngày giao và điểm danh buổi gắn bài. |
| REQ02 | Làm bài | 8 loại câu của CD; thứ tự câu cố định, chuyển câu tự do; thời gian đếm từ lúc vào, tạm dừng khi thoát; giới hạn thời gian theo cấu hình bài; nháp server; nộp một lần. |
| REQ03 | Kết quả | App tự chấm Trắc nghiệm, Sắp xếp, Nối từ; giáo viên chấm phần còn lại; điểm bài thang 10 = trung bình điểm câu; Đạt khi ≥ Điểm đạt; hiện thời gian làm, chi tiết câu, nhận xét. |

### 2.4. Ràng buộc

#### Quyền

| Role | Xem danh sách | Làm / nộp | Xem kết quả |
|---|:---:|:---:|:---:|
| Học viên của lớp | ✅ | ✅ (bài đã giao, chưa nộp) | ✅ |
| Người dùng trải nghiệm | ❌ | ❌ | ❌ |

#### Ràng buộc khác

- Chỉ bài giao cho học viên trong lớp của họ; backend kiểm tra trạng thái bài và học viên trước khi nhận nộp.
- Mỗi thao tác một Toast: `Thành Công` (`Nộp bài thành công`), `Thông Báo` (`Hết giờ, bài đã được nộp`), `Cảnh Báo` (`Cần quyền micro để ghi âm`; `Không có kết nối, vui lòng thử lại`), `Có Lỗi Xảy Ra` (`Nộp bài thất bại, vui lòng thử lại`). Lưu nháp từng câu không có Toast.

![Toast CRUD](../../images/01-toast-crud.png)

---

## 3. Testcase

### Feature: [Học viên] Kiểm tra

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Mở tab Kiểm tra | High | Flow 1 / REQ01 | Học viên của lớp | Giáo viên đã giao 3 bài, 1 đã chấm 7.0 | **Given:** ở chi tiết lớp<br>**When:** bấm `Kiểm tra`<br>**Then:** hiện 3 thẻ, badge `7.0`, `Chờ chấm`, `Chưa làm` | - Ngày giao đúng<br>- Mới nhất lên đầu |
| Case 2: Bài bị thu hồi | High | EX01 | Học viên của lớp | Giáo viên thu hồi bài đã nộp | **Given:** mở tab Kiểm tra<br>**When:** tải lại<br>**Then:** bài biến mất | - Điểm cũ không còn<br>- Giao lại thì về `Chưa làm` |
| Case 3: Lớp chưa giao bài | Low | EX02 | Học viên của lớp | Lớp chưa giao bài nào | **Given:** mở tab Kiểm tra<br>**When:** tải xong<br>**Then:** hiện `Chưa có bài kiểm tra nào được giao` | - |
| Case 4: Làm và nộp bài | High | Flow 2 / REQ02 | Học viên của lớp | Bài 20 câu `Chưa làm` | **Given:** bấm thẻ bài<br>**When:** trả lời 20 câu, `Nộp bài` rồi `Nộp`<br>**Then:** vào màn kết quả chờ chấm | - Toast `Nộp bài thành công`<br>- Thẻ badge `Chờ chấm`, tiến độ 100% |
| Case 5: Tạm dừng và tiếp tục | High | REQ02 | Học viên của lớp | Đang ở câu 7, đồng hồ 05:12 | **Given:** bấm back<br>**When:** mở lại sau 10 phút<br>**Then:** ở câu 7, đồng hồ 05:12 tiếp tục | - Đáp án câu 1–6 còn |
| Case 6: Hết giờ tự nộp | Medium | EX03 / REQ02 | Học viên của lớp | Bài giới hạn 30 phút | **Given:** đồng hồ đếm ngược về 0<br>**When:** hết giờ<br>**Then:** bài tự nộp | - Toast `Thông Báo` `Hết giờ, bài đã được nộp`<br>- Câu trống tính bỏ qua |
| Case 7: Menu số câu | Low | REQ02 | Học viên của lớp | Đã trả lời câu 1, 3 | **Given:** mở menu số câu<br>**When:** xem và bấm số 15<br>**Then:** câu 1 và 3 tô màu; nhảy tới câu 15 | - |
| Case 8: Nộp lặp | High | EX04 | Học viên của lớp | Bài đã nộp | **Given:** mở lại bài<br>**When:** vào bài hoặc gửi request nộp lần nữa<br>**Then:** chỉ hiện màn kết quả | - Request nộp bị từ chối |
| Case 9: Kết quả chờ chấm | High | Flow 2 / REQ03 | Học viên của lớp | Vừa nộp, 12 câu trắc nghiệm + 3 câu Viết | **Given:** ở màn kết quả<br>**When:** xem<br>**Then:** 12 câu hiện đúng / sai ngay, 3 câu `Chờ chấm`, chưa có điểm tổng | - Hiện `Kết quả đang được chấm. Bạn đợi một tí nhé!` |
| Case 10: Kết quả Đạt / Chưa đạt | High | Flow 2 / REQ03 | Học viên của lớp | Bài A giáo viên chấm 8.5; bài B điểm 4.0; Điểm đạt 5 | **Given:** mở từng bài đã chấm<br>**When:** màn kết quả render<br>**Then:** bài A `8.5` xanh lá, `Đạt`; bài B `4.0` đỏ, `Chưa đạt` | - Hiện thời gian làm, nhận xét giáo viên<br>- Thẻ badge khớp điểm |
| Case 11: Mất mạng | High | EX05 | Học viên của lớp | Đang làm bài | **Given:** mất mạng khi trả lời rồi bấm `Nộp`<br>**When:** thất bại<br>**Then:** đáp án giữ trên máy, cho nộp lại | - Toast `Có Lỗi Xảy Ra`<br>- Đồng bộ nháp khi có mạng |
| Case 12: Học viên không thuộc diện | Medium | EX06 | Học viên của lớp | Học viên không thuộc diện làm bài tại thời điểm giao | **Given:** mở tab Kiểm tra<br>**When:** tải xong<br>**Then:** không thấy bài đó | - |
| Case 13: Người dùng trải nghiệm bị chặn | High | Ràng buộc quyền | Người dùng trải nghiệm | Tài khoản trải nghiệm hoặc không thuộc lớp | **Given:** mở tab Kiểm tra hoặc gửi request làm / nộp bài<br>**When:** hệ thống xử lý<br>**Then:** bị từ chối | - Dữ liệu không đổi |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Các trang chưa có mã màn Figma, cần design cấp mã (theo quy ước `<HỌ>-<MODULE>-NNNNNN`) hoặc cho biết frame nằm ở file Figma nào.
- **Q02:** Màn làm bài (Trang 2), popup `Nộp bài?` và màn kết quả (Trang 3) chưa có ảnh thiết kế.
- **Q03:** Giới hạn thời gian làm bài: field `Thời gian` của bài kiểm tra CD dùng làm đếm ngược hay chỉ để tham khảo.
