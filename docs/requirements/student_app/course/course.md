# [Học viên] Lớp học

## 1. UI

### Trang 1: Tab Tổng quan

![Trang 1](./images/01-tong-quan.png)

**Mô tả:**
- Tab mặc định khi vào chi tiết lớp (mở từ thẻ khoá học ở màn chính): tình hình học của chính học viên trong lớp và lối tắt gửi góp ý. Chi tiết lớp có 4 tab `Tổng quan`, `Bài học`, `Kiểm tra`, `Tự học`; tab Bài học xem [Bài học](../lesson/lesson.md), tab Kiểm tra xem [Kiểm tra](../test/test.md).

**Điểm cần lưu ý:**
- Header: Back về màn chính, `MÃ LỚP: <mã>`, tên khoá học, icon tài khoản mở Hồ sơ (xem [Tài khoản](../account/account.md)). Thanh tab giữ tab đang chọn khi quay lại từ màn con.
- Vòng `x/y Buổi`: x = số buổi lớp đã `Hoàn thành`; y = tổng số buổi của khoá học; vòng tô theo tỉ lệ.
- `Tỉ lệ đi học`: % = số buổi học viên được điểm danh đi học (Có mặt, Vào trễ, Ra sớm, Vào trễ & Ra sớm) / số buổi đã hoàn thành.
- `Tỉ lệ làm bài tập về nhà`: % = số BTVN học viên đã nộp / số BTVN đã giao (bài đã mở, học viên thuộc diện).
- `Điểm bài tập về nhà` và `Điểm kiểm tra`: trung bình điểm đã chấm (thang 10) của học viên, hiện dạng thanh % (điểm × 10), kèm số điểm `x.x` ở cuối thanh.
- Số liệu lấy từ ICS theo công thức của [Admin — Tổng quan lớp](../../management_requirement/class_management/class_detail_overview_requirements.md), tính riêng cho học viên đang đăng nhập.
- Khối góp ý: dòng `Góp ý của bạn mang ý nghĩa rất quan trọng để trung tâm có thể cải tiến ngày càng tốt hơn` + nút `Gửi góp ý đến trung tâm` mở popup Góp ý (xem [Tài khoản](../account/account.md)).
- Chưa có dữ liệu (chưa buổi nào, chưa bài nào) thì chỉ số `0` và thanh rỗng, không lỗi.
- Lớp `Hoàn thành` / `Huỷ bỏ` vẫn xem được tổng quan.

### Trang 2: Tab Tự học

![Trang 2](./images/02-tu-hoc.png)

**Mô tả:**
- Danh sách bài tự học của lớp (bài do Support thêm từ khoá học khác hoặc bài bổ sung); học viên học bất kỳ lúc nào; cấu trúc màn bài giống Chi tiết bài học nhưng không có Bài tập củng cố và không phụ thuộc giáo viên mở bài. Cấu trúc số liệu theo [Admin — Tự học](../../management_requirement/class_management/class_detail_self_study_requirements.md).

**Điểm cần lưu ý:**
- Thẻ bài tự học: số thứ tự (ô cam), tag trạng thái học của học viên (`Chưa bắt đầu` / `Đang học` / `Hoàn thành`), tên bài gốc (cam) + tên dịch, thanh tiến độ %, mô tả. Tiến độ là trung bình 3 bước ôn tập + Kiến thức + Kỹ năng, làm tròn số nguyên %.
- Bài tự học không có điểm danh, thẻ không hiện tag điểm danh.
- Bấm thẻ mở Chi tiết bài tự học: `PHẦN BẮT BUỘC` 3 bước (Duyệt kiến thức, Flashcard, Luyện nhớ chuyên sâu), `KIẾN THỨC`, `KỸ NĂNG` như [Bài học](../lesson/lesson.md); không có bước Bài tập củng cố.
- App ghi thời gian học viên ở trong từng phần (Flashcard, Luyện nhớ, Từ vựng, Ngữ pháp, Chữ, Nghe, Đọc…) để ICS hiển thị cho giáo viên / Support.
- Trống: `Chưa có bài tự học nào`.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Xem tổng quan lớp**

```
Màn chính → thẻ khoá học → chi tiết lớp, tab Tổng quan
      → Hệ thống tính x/y buổi, 4 chỉ số của học viên từ dữ liệu ICS
      → Gửi góp ý đến trung tâm → popup Góp ý
```

**Flow 2: Tự học**

```
Tab Tự học → danh sách bài tự học của lớp → bấm bài → 3 bước ôn tập + Kiến thức + Kỹ năng
      → App ghi thời gian từng phần → đồng bộ ICS
```

### 2.2. Ngoại lệ

- **EX01:** Chưa có buổi / bài → chỉ số `0`, thanh rỗng.
- **EX02:** Lớp chưa có bài tự học → `Chưa có bài tự học nào`.
- **EX03:** Mất mạng → hiện số liệu lần tải gần nhất kèm nhãn `Dữ liệu cũ`, thời gian học lưu máy và đồng bộ sau.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Chỉ số tổng quan | x/y buổi, Tỉ lệ đi học, Tỉ lệ làm BTVN, Điểm BTVN, Điểm kiểm tra tính cho học viên đang đăng nhập theo công thức Admin Tổng quan lớp; điểm thang 10. |
| REQ02 | Tự học | Bài tự học của lớp (Support thêm); cấu trúc như bài học trừ Bài tập củng cố; không điểm danh; học mọi lúc. |
| REQ03 | Thời gian học | Ghi thời gian ở từng phần của bài tự học theo học viên, đồng bộ ICS (giáo viên xem ở Chi tiết lớp → Tự học). |

### 2.4. Ràng buộc

#### Quyền

| Role | Xem Tổng quan | Tự học | Gửi góp ý |
|---|:---:|:---:|:---:|
| Học viên của lớp | ✅ | ✅ | ✅ |
| Người dùng trải nghiệm | ❌ | ❌ | ❌ |

#### Ràng buộc khác

- Chỉ lớp học viên đang tham gia; số liệu của riêng học viên; backend kiểm tra thành viên lớp.

---

## 3. Testcase

### Feature: [Học viên] Lớp học

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Mở lớp xem tổng quan | High | Flow 1 / REQ01 | Học viên của lớp | Lớp 32 buổi, 24 hoàn thành; học viên đi 20 buổi; nộp 18/22 BTVN, TB 7.2; KT TB 6.5 | **Given:** ở màn chính<br>**When:** bấm thẻ khoá, vào tab Tổng quan<br>**Then:** hiện `24/32`, đi học 83%, BTVN 82%, điểm BTVN 7.2, KT 6.5 | - Công thức đúng cho học viên đang đăng nhập |
| Case 2: Chưa có dữ liệu | Low | EX01 | Học viên của lớp | Lớp mới, chưa có buổi nào | **Given:** mở lớp<br>**When:** tab Tổng quan render<br>**Then:** hiện `0/32`, 4 chỉ số bằng 0 | - Thanh rỗng, không lỗi |
| Case 3: Gửi góp ý | Medium | Flow 1 | Học viên của lớp | Đang ở Tổng quan | **Given:** ở tab Tổng quan<br>**When:** bấm `Gửi góp ý đến trung tâm`<br>**Then:** popup Góp ý mở | - Theo requirement Tài khoản |
| Case 4: Mở bài tự học | High | Flow 2 / REQ02 | Học viên của lớp | Lớp có 5 bài tự học | **Given:** tab `Tự học`<br>**When:** bấm bài 1<br>**Then:** màn tải với 3 bước bắt buộc, Kiến thức, Kỹ năng | - Không có Bài tập củng cố<br>- Không có tag điểm danh |
| Case 5: Ghi thời gian học | Medium | Flow 2 / REQ03 | Học viên của lớp | Đang ở Flashcard bài tự học 2 phút | **Given:** học Flashcard 2 phút<br>**When:** thoát và đồng bộ<br>**Then:** ICS ghi `00:02:00` cho phần Flashcard của học viên | - Giáo viên xem được ở Chi tiết lớp → Tự học |
| Case 6: Lớp chưa có bài tự học | Low | EX02 | Học viên của lớp | Lớp chưa thêm bài tự học | **Given:** vào tab `Tự học`<br>**When:** tải xong<br>**Then:** hiện `Chưa có bài tự học nào` | - |
| Case 7: Mất mạng | Medium | EX03 | Học viên của lớp | Đã tải tổng quan, sau đó mất mạng | **Given:** mất mạng khi đang xem lớp<br>**When:** mở lại tab Tổng quan, học một phần tự học<br>**Then:** hiện số liệu cũ kèm nhãn `Dữ liệu cũ` | - Thời gian học lưu máy, đồng bộ sau khi có mạng |
| Case 8: Lớp Hoàn thành / Huỷ bỏ | Low | REQ01 | Học viên của lớp | Lớp ở trạng thái `Hoàn thành` hoặc `Huỷ bỏ` | **Given:** mở lớp<br>**When:** vào tab Tổng quan<br>**Then:** số liệu hiển thị bình thường | - Vẫn xem được tổng quan |
| Case 9: Quyền | High | Ràng buộc quyền | Người dùng trải nghiệm | Tài khoản trải nghiệm hoặc không thuộc lớp | **Given:** mở chi tiết lớp / gọi API tổng quan, tự học, góp ý<br>**When:** hệ thống xử lý<br>**Then:** bị từ chối | - Dữ liệu không thay đổi<br>- Backend kiểm tra thành viên lớp |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Các trang chưa có mã màn Figma, cần design cấp mã (theo quy ước `<HỌ>-<MODULE>-NNNNNN`) hoặc cho biết frame nằm ở file Figma nào.
- **Q02:** Màn Chi tiết bài tự học chưa có ảnh thiết kế (đang dùng chung bố cục Chi tiết bài học); cần design bổ sung hoặc xác nhận dùng chung hoàn toàn.
