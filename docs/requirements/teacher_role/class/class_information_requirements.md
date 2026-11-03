# [Giáo viên] Chi tiết lớp — Thông tin

## 1. UI

### Trang 1: GV-LOP-110100 — Chi tiết lớp / Thông tin / Thông tin

![Trang 1](./images/gv-lop-110100.png)

**Mô tả:**
- Menu **Thông tin** trong Chi tiết lớp của role Giáo viên gồm 3 tab: `Thông tin`, `KPI`, `Lịch sử & lương`. Nghiệp vụ dùng chung với requirement Admin [Tab Thông tin](../../management_requirement/class_management/class_detail_information_requirements.md), [Tab KPI](../../management_requirement/class_management/class_detail_kpi_requirements.md) và [Tab Lịch dạy](../../management_requirement/class_management/class_detail_schedule_requirements.md).
- Tab `Thông tin`: giáo viên của lớp xem thông tin chung của lớp. Mọi field chỉ đọc; không có nút Lưu, Xóa lớp hay checkbox Lớp không chính thức.

**Điểm cần lưu ý:**
- Mọi field hiển thị cùng một kiểu ô xám chỉ đọc: không có mũi tên dropdown, không có icon lịch, không mở picker. Dữ liệu tải mới từ backend khi mở tab, cùng nguồn với Admin Tab Thông tin. Backend từ chối mọi request cập nhật thông tin lớp từ role Giáo viên.
- `A01.01` `Mã lớp`: mã lớp hiện tại, chỉ đọc.
- `A01.02` `Link google meet`: hiển thị dạng liên kết; bấm mở tab mới. Trống thì để trống.
- `A01.03` `Khóa học`: tên khóa học gắn với lớp, ô xám chỉ đọc giống `Mã lớp`.
- `A01.04` `Ghi chú`: ghi chú của lớp, chỉ đọc; trống thì để trống.
- `A01.05` `Mô tả`: mô tả lớp, chỉ đọc.
- `A01.06` `Ngày bắt đầu` / `Ngày kết thúc`: định dạng `d/M/yyyy`, ô xám chỉ đọc.
- `A01.07` `Loại lớp`: `Lớp chung` / `Lớp 1-1` / `Lớp demo`, ô xám chỉ đọc.
- `A01.08` `Trạng thái`: tên trạng thái lớp hiện tại, ô xám chỉ đọc.

### Trang 2: GV-LOP-110200 — Chi tiết lớp / Thông tin / KPI

![Trang 2](./images/gv-lop-110200.png)

**Mô tả:**
- Tab `KPI` (`KPI của tôi`): giáo viên xem các khoản KPI của **chính mình tại lớp đang mở**, chỉ đọc. Khoản KPI do Admin / Class Handler tạo ở function KPI; giáo viên không thêm, sửa, xác nhận hay xoá. Ảnh là trạng thái trống.

**Điểm cần lưu ý:**
- Khác ICS cũ: ICS cũ liệt kê mọi KPI của giáo viên ở tất cả lớp; requirement mới chỉ KPI tại lớp đang mở. Chỉ loại `KPI` của giáo viên (không gồm khoản OT, không gồm KPI của Class Handler).
- Không có nút `+`, `Cài đặt KPI`, `X`, ghi chú / lịch sử; backend từ chối request ghi từ role Giáo viên.
- `A02.01` Tiêu đề `KPI của tôi`.
- `A02.02` `Tìm kiếm`: tìm theo giá trị cột `TÊN` (tên người nhận), giống Admin Tab KPI; tìm trên toàn bộ khoản của giáo viên tại lớp, không tìm theo số tiền.
- `A02.03` `TÊN`: tên hiển thị của **người nhận khoản KPI** (chính giáo viên đang đăng nhập), giống cột `Tên` của Admin Tab KPI. ICS cũ (`teacher_kpi_view.dart`, ô `owner.nameDisplay`) chỉ hiện tên ở dòng đầu; requirement hiển thị ở mọi dòng. Không hiển thị tên cấu hình KPI ở cột này.
- `A02.04` `NGÀY GHI NHẬN`: `dd.MM.yyyy` theo thời gian thực hiện của khoản.
- `A02.05` `TRẠNG THÁI`: `Mới`, `Đã xác nhận`, `Đã hủy`; khoản `Đã xóa` không hiển thị. Chip màu theo trạng thái, hover hiện tên.
- `A02.06` `SỐ TIỀN`: tiền thực tế đã lưu, định dạng `1.000.000 đ`.
- `A02.07` `NGÀY CẬP NHẬT`: lần cập nhật gần nhất do máy chủ ghi, `dd.MM.yyyy`.
- `A02.08` Sắp xếp theo Ngày ghi nhận giảm dần (mới nhất trước).
- `A02.09` Không có khoản: hiển thị `Bảng dữ liệu này đang trống`.
- Nguồn đối chiếu từ package ICS cũ `pls_repository_api`: `KpiResultModel.typeKpi` tham chiếu `ClassKpiModel.id`; tên và mô tả cấu hình nằm ở `ClassKpiModel.title` / `description` trong collection `class_kpi` (chỉ dùng ở cột `Loại KPI` của menu Lịch sử & lương). Trường `type` (`kpi` / `ot`) chỉ phân loại khoản; `sp_note` là ghi chú của khoản, không thay cho tên cấu hình KPI.

### Trang 3: GV-LOP-110300 — Chi tiết lớp / Thông tin / Lịch sử & lương

![Trang 3](./images/gv-lop-110300.png)

**Mô tả:**
- Tab `Lịch sử & lương`: giáo viên xem số buổi đã dạy và lương của mình **tại lớp đang mở** trong khoảng thời gian đã chọn. Cùng quy tắc với menu Lịch sử & lương (toàn bộ lớp), chỉ khác lọc theo lớp này.

**Điểm cần lưu ý:**
- Khoảng lọc tính theo **ngày tính lương** (ngày của lịch), không phải ngày bấm Hoàn thành: chọn lịch ngày 15, hoàn thành ngày 20 thì buổi thuộc tháng của ngày 15.
- Khác ICS cũ: ICS cũ tính lương mọi buổi Hoàn thành (buổi không lịch chỉ có icon cảnh báo) và thẻ Lương KPI lấy số tiền của khoản KPI đầu tiên; requirement mới theo các điểm dưới.
- Buổi do giáo viên khác của lớp dạy không hiển thị, không tính. Lớp Đang học không ảnh hưởng: thẻ `Trạng Thái Lớp` chỉ hiển thị.
- Buổi đã hoàn thành giữ nguyên lương đã ghi nhận; thay lương/buổi không cập nhật ngược dòng buổi cũ hoặc tổng lương lịch sử, các buổi hoàn thành sau thời điểm thay đổi dùng mức mới.
- Tab này không có OT: không hiển thị tab / thẻ / dòng OT và không cộng OT vào Tổng Lương. OT chỉ có ở menu Lịch sử & lương riêng của Giáo viên.
- `A03.01` Dropdown thời gian: 10 lựa chọn `Tuần này`, `Tuần trước`, `Tháng này`, `Tháng trước`, `Tháng trước nữa`, `3 tháng gần đây`, `6 tháng gần đây`, `Năm nay`, `Năm trước`, `Tùy chọn` (chọn từ ngày – đến ngày). Mặc định `Tháng này`. Áp dụng cho cả 5 thẻ và bảng.
- `A03.02` `Trạng Thái Lớp`: tên trạng thái lớp hiện tại; không phụ thuộc bộ lọc.
- `A03.03` `Số Buổi Đã Dạy`: số buổi học của lớp có trạng thái `Hoàn thành` do giáo viên đang đăng nhập dạy, có **ngày tính lương** nằm trong khoảng lọc. Buổi không gắn lịch dùng ngày hoàn thành để lọc và vẫn được đếm.
- `A03.04` `Lương Buổi Dạy`: tổng lương các buổi `Hoàn thành` **có lịch gắn** của giáo viên tại lớp trong khoảng lọc; mỗi buổi = lương/buổi của giáo viên tại lớp (cột `LƯƠNG/GIỜ` ở Chi tiết giáo viên) tại thời điểm hoàn thành và được lưu cho buổi đó. Buổi không gắn lịch = 0. Định dạng `1.000.000 VNĐ`.
- `A03.05` `Lương KPI`: tổng `SỐ TIỀN` các khoản KPI `Đã xác nhận` của giáo viên tại lớp có `Ngày ghi nhận` trong khoảng lọc. Mới, Đã hủy, Đã xóa không tính.
- `A03.06` `Tổng Lương` = `Lương Buổi Dạy + Lương KPI`.
- `A03.07` Bảng `Buổi dạy`: mỗi dòng một buổi `Hoàn thành` của giáo viên tại lớp trong khoảng lọc; sắp theo thời gian giảm dần.
- `A03.08` Cột `LỚP`: icon trạng thái lớp (hover hiện tên) và mã lớp.
- `A03.09` Cột `TÊN BUỔI HỌC`: tên bài học của buổi, tối đa 2 dòng.
- `A03.10` Cột `SĨ SỐ` `x/y`: x = học viên được điểm danh đi học ở buổi (Có mặt, Vào trễ, Ra sớm, Vào trễ & Ra sớm); y = tổng học viên hợp lệ của lớp (loại Nghỉ học, Rời lớp, Chỉ xem, Xóa).
- `A03.11` Cột `THỜI GIAN`: ngày tính lương của buổi (ngày của lịch đã gắn; không gắn lịch dùng thời điểm hoàn thành). Dạng `d/M/yyyy` và `HH:mm` hai dòng.
- `A03.12` Cột `LƯƠNG BUỔI DẠY`: lương của buổi, định dạng `240.000 VNĐ`. Buổi không gắn lịch: `0 VNĐ` kèm icon `i`, hover `Buổi dạy hoàn thành nhưng chưa có lịch thanh toán`.
- `A03.13` Không có buổi: hiển thị `Không có buổi dạy nào`.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Xem Thông tin lớp**

```
Giáo viên vào Chi tiết lớp → Thông tin → tab Thông tin
      → Hệ thống tải thông tin lớp mới nhất, hiển thị 9 field chỉ đọc
```

**Flow 2: Xem KPI của tôi**

```
Giáo viên chọn tab KPI
      → Hệ thống tải khoản KPI của giáo viên tại lớp (trừ Đã xóa), sắp Ngày ghi nhận giảm dần
      → Giáo viên tìm theo cột Tên; không có khoản: "Bảng dữ liệu này đang trống"
```

**Flow 3: Xem Lịch sử & lương của lớp**

```
Giáo viên chọn tab Lịch sử & lương (mặc định Tháng này)
      → Hệ thống lấy buổi Hoàn thành của giáo viên tại lớp có ngày tính lương trong khoảng, KPI Đã xác nhận trong khoảng
      → Tính 5 thẻ; hiển thị bảng Buổi dạy sắp giảm dần
      → Giáo viên đổi khoảng thời gian → tính lại thẻ và bảng
```

### 2.2. Ngoại lệ

- **EX01:** Giáo viên gửi request cập nhật thông tin lớp, thêm/sửa/xác nhận/xoá KPI → backend từ chối; dữ liệu giữ nguyên.
- **EX02:** Không có KPI / không có buổi dạy trong khoảng → trạng thái trống tương ứng, thẻ hiển thị 0; không lỗi.
- **EX03:** Tải dữ liệu thất bại → vùng lỗi có `Thử lại`; không hiển thị số 0 giả.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Thông tin chỉ đọc | 9 field theo nguồn Admin Tab Thông tin; không có control ghi; link Meet mở tab mới. |
| REQ02 | KPI của tôi | Chỉ khoản loại KPI của giáo viên đang đăng nhập tại lớp đang mở; trạng thái Mới / Đã xác nhận / Đã hủy, ẩn Đã xóa; cột Tên, Ngày ghi nhận, Trạng thái, Số tiền, Ngày cập nhật; tên lấy từ `title` của cấu hình KPI được khoản tham chiếu, mô tả từ `description` nếu có; tìm theo tên; sắp Ngày ghi nhận giảm dần; chỉ đọc. |
| REQ03 | Phạm vi và bộ lọc lương | Dữ liệu của giáo viên đang đăng nhập tại lớp đang mở. 10 lựa chọn thời gian, mặc định Tháng này; buổi lọc theo ngày tính lương (ngày của lịch gắn; không lịch thì thời điểm hoàn thành), KPI lọc theo Ngày ghi nhận. |
| REQ04 | Công thức | Số buổi đã dạy = buổi Hoàn thành của giáo viên trong khoảng (kể cả không lịch). Lương buổi dạy = tổng lương các buổi Hoàn thành có lịch gắn (lương/buổi của giáo viên tại lớp); buổi không lịch = 0 kèm cảnh báo. Lương KPI = tổng KPI Đã xác nhận trong khoảng. Tổng lương = Lương buổi dạy + Lương KPI. Sĩ số buổi = đi học / học viên hợp lệ. |
| REQ05 | Đồng bộ | Cùng nguồn với menu Lịch sử & lương của Giáo viên và Tab KPI/Lịch dạy của Admin; hoàn thành buổi, xác nhận KPI, Mở lại lịch (đảo lương) phải phản ánh khi tải lại. |
| REQ06 | Giữ lương buổi đã hoàn thành | Lưu mức lương của buổi khi hoàn thành. Thay đổi lương/buổi chỉ áp dụng cho các buổi hoàn thành sau thời điểm thay đổi; không tính lại dòng cũ hoặc tổng lương lịch sử theo mức mới. Bộ lọc vẫn dùng ngày tính lương đã chốt, độc lập với thời điểm ghi nhận mức lương. |
| REQ07 | Phạm vi OT | Không có OT ở tab Lịch sử & lương trong Thông tin lớp; Tổng Lương tại đây chỉ gồm lương buổi dạy và KPI. OT được xem ở menu Lịch sử & lương riêng của Giáo viên. |

### 2.4. Ràng buộc

#### Quyền

| Role | Xem Thông tin, KPI của tôi, Lịch sử & lương của mình tại lớp | Sửa thông tin lớp, KPI, lương |
|---|:---:|:---:|
| Giáo viên của lớp | ✅ | ❌ |
| Các role khác | Theo requirement Admin Chi tiết lớp | — |

#### Ràng buộc khác

- Chỉ dữ liệu của giáo viên đang đăng nhập tại lớp mà mình được thêm vào; backend kiểm tra, không trả KPI/buổi của giáo viên khác hoặc lớp khác.
- Không cho phép truy cập hoặc thực hiện hành động bị đánh dấu `❌`, kể cả khi gọi trực tiếp bằng URL hoặc request.

---

## 3. Testcase

### Feature: [Giáo viên] Chi tiết lớp — Thông tin

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Xem thông tin lớp và mở link Meet | High | Flow 1 / REQ01 | Giáo viên | Lớp có đủ dữ liệu và link Meet | **Given:** mở Thông tin → tab Thông tin<br>**When:** tải xong, bấm link Meet<br>**Then:** hiển thị đủ 9 field đúng dữ liệu lớp; link mở tab mới đúng URL | - Không có nút Lưu, Xóa lớp<br>- Không có mũi tên dropdown, icon lịch; mọi ô cùng kiểu xám chỉ đọc<br>- Bấm link không đổi dữ liệu |
| Case 2: Chặn sửa bằng request | High | EX01 / REQ01 / REQ02 / Ràng buộc quyền | Giáo viên | Có class_id; có khoản KPI Mới | **Given:** gửi request cập nhật thông tin lớp, sửa/xác nhận/xoá KPI, hoặc sửa lương<br>**When:** backend kiểm tra<br>**Then:** từ chối | - Dữ liệu giữ nguyên<br>- Không có control ghi trên UI |
| Case 3: Xem KPI tại lớp | High | Flow 2 / REQ02 | Giáo viên | G có 2 KPI ở lớp A (1 Mới, 1 Đã xác nhận), 1 KPI ở lớp B, 1 KPI Đã xóa ở A | **Given:** mở tab KPI của lớp A<br>**When:** tải xong<br>**Then:** bảng có đúng 2 dòng | - Không hiện KPI lớp B, không hiện Đã xóa<br>- Mới nhất trước<br>- Cột Tên là tên người nhận ở mọi dòng |
| Case 4: Tìm theo cột Tên và KPI trống | Medium | Flow 2 / REQ02 / EX02 | Giáo viên | Có nhiều khoản; hoặc G chưa có KPI ở lớp | **Given:** nhập một phần tên giáo viên rồi nhập tên khác; mở tab khi chưa có KPI<br>**When:** tìm / tải xong<br>**Then:** khoản khớp hiển thị, tên khác thì rỗng; chưa có KPI hiện `Bảng dữ liệu này đang trống` | - Không tìm theo số tiền<br>- Không lỗi |
| Case 5: Xem lương tháng này | High | Flow 3 / REQ03 / REQ04 | Giáo viên | Tháng này G có 3 buổi Hoàn thành có lịch (lương 240.000/buổi), 1 KPI Đã xác nhận 500.000, 1 KPI Mới 300.000 | **Given:** mở tab Lịch sử & lương<br>**When:** tải xong (Tháng này)<br>**Then:** Số buổi 3, Lương buổi 720.000, Lương KPI 500.000, Tổng 1.220.000 | - Bảng 3 dòng, mới nhất trước<br>- KPI Mới không tính |
| Case 6: Buổi không gắn lịch | High | REQ03 / REQ04 | Giáo viên | 1 buổi Hoàn thành không chọn lịch | **Given:** xem tab<br>**When:** tính<br>**Then:** Số buổi +1, Lương buổi +0; dòng hiện `0 VNĐ` và icon `i` | - Hover icon hiện `Buổi dạy hoàn thành nhưng chưa có lịch thanh toán` |
| Case 7: Lọc theo ngày tính lương và khoảng tùy chọn | High | Flow 3 / REQ03 | Giáo viên | Buổi chọn lịch 30/9, hoàn thành 2/10; có buổi nhiều tháng | **Given:** chọn `Tháng trước` (tháng 9), sau đó `Tháng này`, sau đó `Tùy chọn` 1/8 – 31/8<br>**When:** lọc / áp dụng<br>**Then:** buổi nằm trong tháng 9; thẻ và bảng tính lại theo từng khoảng | - Chọn Tháng này (10) thì không có buổi này<br>- Tùy chọn: thẻ và bảng theo khoảng đó |
| Case 8: Chỉ buổi của mình tại lớp, sĩ số | High | REQ03 / REQ04 | Giáo viên | Lớp có buổi do G và H dạy; G còn dạy lớp khác; buổi có 8 đi học, 2 Nghỉ CP, lớp có 12 học viên hợp lệ | **Given:** G mở tab của lớp A, xem cột Sĩ số<br>**When:** tải<br>**Then:** chỉ buổi của G tại A, sĩ số `8/12` | - Không có buổi của H, không có lớp khác<br>- Học viên Rời lớp không vào mẫu |
| Case 9: Không có buổi và tải lỗi | Medium | EX02 / EX03 | Giáo viên | Khoảng lọc không có buổi; hoặc API lỗi | **Given:** lọc khoảng rỗng; giả lập tải lỗi<br>**When:** hiển thị<br>**Then:** thẻ 0 và bảng `Không có buổi dạy nào`; lỗi hiện vùng lỗi có `Thử lại` | - Trạng Thái Lớp vẫn hiển thị<br>- Không hiển thị số 0 giả khi lỗi |
| Case 10: Giữ lương buổi cũ khi đổi mức lương | High | REQ06 | Giáo viên | Buổi A đã hoàn thành và có lịch, ghi nhận 240.000 VNĐ; sau đó đổi lương/buổi thành 280.000 VNĐ; buổi B có lịch hoàn thành sau thay đổi | **Given:** tải lại lịch sử có cả A và B<br>**When:** tính lương<br>**Then:** A giữ 240.000, B là 280.000 | - Tổng lương buổi là 520.000 VNĐ<br>- Xem lại khoảng chỉ có A vẫn là 240.000 VNĐ |
| Case 11: OT không thuộc Thông tin lớp | High | REQ07 | Giáo viên | Trong khoảng có 1 buổi có lịch 240.000 VNĐ, KPI Đã xác nhận 500.000 VNĐ và OT Đã xác nhận 180.000 VNĐ | **Given:** mở tab Lịch sử & lương trong Thông tin lớp<br>**When:** tải xong<br>**Then:** Tổng Lương là 740.000 VNĐ | - Không có thẻ/tab/dòng OT<br>- Không cộng 180.000 VNĐ OT vào tổng |
| Case 12: Đồng bộ khi hoàn thành buổi, xác nhận KPI, mở lại lịch | Medium | REQ05 | Giáo viên | Có buổi vừa hoàn thành, KPI vừa xác nhận, một lịch vừa được Mở lại | **Given:** thao tác ở màn Admin / Bài học<br>**When:** giáo viên tải lại tab Lịch sử & lương và KPI<br>**Then:** số liệu phản ánh đúng | - Buổi mới hoàn thành và KPI xác nhận được tính<br>- Lịch được Mở lại thì lương bị đảo |
