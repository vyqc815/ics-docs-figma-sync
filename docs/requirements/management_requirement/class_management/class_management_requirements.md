# Quản lý danh sách lớp học

## 1. UI

### Trang 1: ADM-LOP-010000 — Danh sách lớp học

![Trang 1](./images/adm-lop-010000.png)

**Mô tả:**
- `Admin`, `Class Handler`, `Support`, `Sale` được xem màn hình Danh sách lớp, sử dụng bộ lọc, cuộn ngang và phân trang. Requirement này chỉ đặc tả màn danh sách; Tạo lớp học, Chi tiết lớp (các menu/tab) được đặc tả riêng.
- Màn hình tổng hợp dữ liệu vận hành, học tập, tài chính, nhân sự phụ trách, lịch học, ghi chú và hoạt động chăm sóc của từng lớp.
- Khu vực đầu trang gồm tiêu đề, nút `+` tạo lớp (đặc tả riêng tại Tạo lớp học) và tám thẻ thống kê tổng quan; khu vực điều kiện gồm các bộ lọc lớp, thời gian, người phụ trách, trạng thái và Tag học viên; bảng hiển thị mỗi lớp một hàng, cuộn ngang, cuối danh sách có phân trang tối đa 50 lớp mỗi trang. Các cột tiếp theo khi cuộn ngang thuộc cùng một bảng, không phải bảng hoặc màn hình khác.

**Điểm cần lưu ý:**

*Khung màn hình và cuộn ngang*
- Khi cuộn ngang, mỗi hàng vẫn phải giữ đúng dữ liệu của cùng một lớp; không lệch hàng, nhân đôi hàng hoặc tải lại danh sách chỉ vì thay đổi vị trí cuộn. Header cột và nội dung phải thẳng hàng trong mọi vị trí cuộn.
- Chỉ `Mã lớp` là vùng tương tác mở menu `Thêm tag` và `Thêm lịch hẹn`. Click các ô còn lại, gồm Doanh thu, trạng thái, đánh giá, tỷ lệ, avatar, lịch và ghi chú, không mở menu này hoặc điều hướng ngoài ý muốn.
- Mặc định danh sách sắp xếp theo lớp mới tạo trước, tương ứng `created_at` giảm dần. Mỗi trang hiển thị tối đa 50 lớp.
- Bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số, phân trang và thẻ thống kê chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header.

*Thẻ thống kê tổng quan*
- Tám thẻ phản ánh toàn bộ tập lớp thuộc phạm vi người dùng và đang thỏa các bộ lọc hiện tại; tính lại trên toàn bộ tập kết quả sau khi áp dụng bộ lọc, kể cả khi có nhiều trang, không chỉ tính từ 50 lớp của trang hiện tại.
- `A02.01` Doanh thu: tổng học phí học viên đã đóng trong từng lớp, cộng toàn bộ các lớp đang thỏa bộ lọc. Không tính học phí chưa thu.
- `A02.02` Tổng lương GV: tổng lương giáo viên phát sinh từ các bài học/buổi học đã hoàn thành theo lịch dạy của từng lớp, cộng toàn bộ các lớp đang thỏa bộ lọc.
- `A02.03` Tổng chi PTL: tổng tiền thực tế của các khoản KPI Handler trạng thái `Đã xác nhận`, cộng toàn bộ các lớp đang thỏa bộ lọc. Khoản Mới/Đã hủy/Đã xóa không tính.
- `A02.04` Số lớp: tổng số lớp thỏa toàn bộ điều kiện hiện tại, không chỉ số lớp ở trang đang xem.
- `A02.05` Tổng sĩ số: hiển thị dạng `Tổng số thứ nhất / Tổng số thứ hai`; khi tổng hợp nhiều lớp, cộng riêng số thứ nhất và số thứ hai (xem bảng trạng thái học viên bên dưới).
- `A02.06` Tỷ lệ BTVN: với từng lớp, lấy trung bình tỷ lệ làm BTVN của các học viên có dữ liệu trong lớp; lớp không có học viên hoặc không có dữ liệu BTVN thì để trống. Thẻ tổng quan là trung bình cộng của các lớp có giá trị.
- `A02.07` Đi học: với từng lớp, lấy trung bình tỷ lệ đi học của các học viên có dữ liệu trong lớp; lớp không có học viên hoặc không có dữ liệu đi học thì để trống. Thẻ tổng quan là trung bình cộng của các lớp có giá trị.
- `A02.08` Sĩ số TB: hiển thị dạng `Trung bình số thứ nhất / Trung bình số thứ hai`; lấy Tổng sĩ số chia riêng từng số cho Số lớp. Dấu `/` chỉ dùng để ngăn cách hai giá trị hiển thị, không phải phép chia hai giá trị cho nhau.
- `A02.09` Doanh thu (cách tính): cộng học phí **đã đóng** của tất cả lớp thỏa bộ lọc.
- `A02.10` Tổng lương GV (cách tính): cộng lương giáo viên của các bài học/buổi học **đã hoàn thành** thuộc tất cả lớp thỏa bộ lọc.
- `A02.11` Tổng chi PTL (cách tính): cộng Chi phí PTL của tất cả lớp thỏa bộ lọc; mỗi khoản KPI `Đã xác nhận` tính một lần theo tiền thực tế lưu, không theo giá trị gốc mẫu. Không cộng OT ở bất kỳ trạng thái nào.
- `A02.12` Số lớp (cách tính): đếm tất cả lớp thỏa bộ lọc.
- `A02.13` Tổng sĩ số (cách tính): tính hai số sĩ số của từng lớp theo bảng trạng thái bên dưới, sau đó cộng riêng từng số. Ví dụ lớp A `4/8`, lớp B `6/10` thì Tổng sĩ số là `10/18`.
- `A02.14` Tỷ lệ BTVN (cách tính): bước 1 tính tỷ lệ BTVN trung bình của từng lớp từ các học viên có dữ liệu; bước 2 cộng tỷ lệ của các lớp có giá trị và chia cho số lớp có giá trị (mỗi lớp trọng số như nhau).
- `A02.15` Đi học (cách tính): tương tự Tỷ lệ BTVN, tính tỷ lệ đi học trung bình từng lớp rồi lấy trung bình các lớp có giá trị.
- `A02.16` Sĩ số TB (cách tính): lấy từng số của Tổng sĩ số chia cho Số lớp. Ví dụ Tổng sĩ số `10/18` của 2 lớp thì Sĩ số TB là `5/9`.
- Không gộp toàn bộ học viên của tất cả lớp để tính trực tiếp Tỷ lệ BTVN hoặc Đi học; phải tính tỷ lệ từng lớp trước, rồi mới lấy trung bình các lớp. Lớp có ô trống không tham gia tử số và mẫu số của thẻ; nếu toàn bộ lớp thỏa bộ lọc đều không có giá trị thì thẻ tương ứng cũng để trống. Ô BTVN/Đi học của lớp không có dữ liệu phải để trống, không hiển thị `0`, `0%`, `-` hoặc giá trị thay thế.
- Toàn bộ tên trạng thái trong UI hiển thị bằng tiếng Việt. Trạng thái `Xóa` của học viên trong công thức sĩ số là dữ liệu khác với trạng thái `Xóa` của lớp.
- Khi đổi filter liên tục, thống kê và bảng phải cùng thuộc một tổ hợp điều kiện mới nhất. Trạng thái loading, rỗng và lỗi của thống kê phải được phân biệt; lỗi không được hiển thị thành số `0`.
- Sĩ số của một lớp: số thứ nhất đếm học viên `Đang học` + `Dự thính`; số thứ hai đếm tất cả học viên thuộc lớp trong đủ 7 trạng thái, kể cả `Xóa`. Công thức đồng bộ với Tổng quan lớp. Không tính hoặc chấp nhận các giá trị cũ `Đặt cọc`, `Chuyển lớp`, `Bảo lưu`, `Học thử` trong enum trạng thái quan hệ học viên–lớp. Ví dụ mỗi trạng thái có đúng một học viên thì sĩ số là `2/7`. Đây là sĩ số thường, không thay công thức `Sĩ số KPI` có điều kiện học phí.
- `A02.17` Học viên `Đang học`: tính vào số thứ nhất và số thứ hai.
- `A02.18` Học viên `Hoàn thành`: chỉ tính vào số thứ hai.
- `A02.19` Học viên `Dự thính`: tính vào số thứ nhất và số thứ hai.
- `A02.20` Học viên `Rời lớp`: chỉ tính vào số thứ hai.
- `A02.21` Học viên `Nghỉ học`: chỉ tính vào số thứ hai.
- `A02.22` Học viên `Chỉ xem`: chỉ tính vào số thứ hai.
- `A02.23` Học viên `Xóa`: chỉ tính vào số thứ hai.
- Dữ liệu mẫu dùng chung cho testcase tính toán (bộ lọc trả về đúng 2 lớp A và B; lớp ngoài bộ lọc và các khoản chưa đủ điều kiện bị bỏ qua):
- `A02.24` Học phí đã đóng: lớp A 10.000.000đ, lớp B 15.000.000đ.
- `A02.25` Lương GV của buổi đã hoàn thành: lớp A 300.000đ, lớp B 500.000đ.
- `A02.26` KPI Handler Đã xác nhận: lớp A 100.000đ, lớp B 200.000đ.
- `A02.27` Sĩ số: lớp A `4/8`, lớp B `6/10`.
- `A02.28` Tỷ lệ BTVN của lớp: lớp A 90%, lớp B 60%.
- `A02.29` Tỷ lệ đi học của lớp: lớp A 80%, lớp B 50%.

*Trạng thái lớp*
- Trạng thái phải có nội dung nhận biết được ngoài màu sắc (tooltip/accessibility). `Hủy` và `Xóa` là hai trạng thái khác nhau, không dùng chung giá trị nghiệp vụ chỉ vì đều có icon dấu X.
- `A03.01` `Đang học`: icon bút màu cam.
- `A03.02` `Hoàn thành`: icon mũ tốt nghiệp màu xanh.
- `A03.03` `Hủy`: icon dấu X đỏ dạng lớn.
- `A03.04` `Khai giảng`: icon tòa nhà màu hồng.
- `A03.05` `Mới tạo`: icon dấu cộng màu xanh.
- `A03.06` `Tạm dừng`: icon tạm dừng màu xám.
- `A03.07` `Xóa`: icon dấu X đỏ dạng nhỏ.
- `A03.08` `Trải nghiệm`: icon người dùng màu xanh.

*Thông tin hiển thị trên mỗi lớp*
- `A04.01` Mã lớp học: hiển thị icon trạng thái, các tag lớp như `H4`, `H5`, badge số lịch hẹn và Mã lớp. Click Mã lớp mở menu thao tác; icon/badge/tag không tự mở menu nếu không click đúng Mã lớp. Tag `H4`, `H5` là tag của lớp; badge bằng số lịch hẹn gắn với lớp, không dùng số tag làm badge.
- `A04.02` Đánh giá: đánh giá hiện hành dạng `A–F`; chưa có công thức nên không tự tính từ các tỷ lệ khác.
- `A04.03` Đi học: trung bình cộng tỷ lệ đi học của các học viên có dữ liệu trong lớp. Không có học viên hoặc không có dữ liệu thì để trống.
- `A04.04` BTVN: trung bình cộng tỷ lệ làm BTVN của các học viên có dữ liệu trong lớp. Không có học viên hoặc không có dữ liệu thì để trống.
- `A04.05` Sĩ số KPI: dạng `A/B (C)`; `A` là số học viên `Đang học` đã đóng học phí; `B` là tổng học viên đã đóng học phí thuộc `Đang học`, `Dự thính`, `Chỉ xem`; `C` là tổng học viên trạng thái `Dự thính`, không phụ thuộc đã đóng học phí. Ba giá trị tính độc lập; `C` không phải số cộng thêm vào `A` hoặc `B`.
- `A04.06` Khóa học & tiến độ: tên khóa học, thanh tiến độ và số buổi dạng `đã thực hiện/tổng số buổi`.
- `A04.07` GV: avatar/chữ viết tắt của giáo viên được phân công.
- `A04.08` PTL: avatar/chữ viết tắt của PTL được phân công.
- `A04.09` Điểm/Số bài KT: `Điểm trung bình bài kiểm tra / Tổng số bài kiểm tra`. Điểm trung bình = tổng điểm bài KT đã chấm / số bài KT đã chấm; làm tròn kết quả cuối 1 chữ số thập phân, loại Chưa nộp/Chưa chấm và giữ điểm 0 đã chấm. Vẫn tính bài đã làm và chấm của người Rời lớp/Xóa. Không đổi ý nghĩa tổng số bài KT sang số bài đã chấm chỉ vì mẫu số trung bình là số bài đã chấm. Chi tiết tại Tổng quan lớp.
- `A04.10` Điểm BTVN: trung bình trực tiếp các bài BTVN đã chấm, làm tròn kết quả cuối 1 chữ số thập phân; loại Chưa nộp/Chưa chấm, giữ điểm 0 đã chấm và đóng góp của học viên Rời lớp/Xóa. Không trung bình hai cấp theo từng học viên.
- `A04.11` Lịch dạy: các thứ học và khung giờ của lớp.
- `A04.12` Ghi chú SP: hiển thị rút gọn ghi chú Support; hover hiển thị toàn bộ ghi chú của chính lớp và đúng loại ghi chú. Chỉ đọc tại danh sách; rời chuột/focus đóng popover; nội dung dài/xuống dòng hiển thị an toàn.
- `A04.13` Ghi chú Sale: tương tự Ghi chú SP nhưng là ghi chú Sale; không hiển thị lẫn loại.
- `A04.14` Ngày bắt đầu: ngày bắt đầu dự kiến của lớp. Ngày bắt đầu thực tế là ngày mở bài đầu tiên và không thay thế ngày dự kiến trong filter `Bắt đầu`.
- `A04.15` Buổi gần nhất: thời gian tương đối/ngày của buổi học gần nhất và tên giáo viên của buổi đó; chưa có buổi hiển thị `Chưa học`.
- `A04.16` Doanh thu: tổng số tiền học viên của lớp đã đóng học phí. Chỉ hiển thị, không click để mở chi tiết.
- `A04.17` Chi phí GV/Số buổi dạy: `Tổng lương giáo viên của các bài học/buổi học đã hoàn thành theo lịch dạy / Số bài học/buổi học đã hoàn thành`; ví dụ hoàn thành 3 buổi, mỗi buổi 100.000đ thì hiển thị `300.000đ / 3`.
- `A04.18` Chi phí PTL: cộng số tiền thực tế lưu của mỗi khoản KPI Handler `Đã xác nhận` thuộc lớp một lần. Không tính Mới/Đã hủy/Đã xóa hoặc dùng giá trị gốc mẫu. Không cộng OT và không thêm cột/thẻ chi OT tại danh sách lớp. Chi tiết tại Tab KPI và Tab OT.
- `A04.19` Sửa BTVN: số BTVN giáo viên đã chấm điểm.
- `A04.20` Tiêu chuẩn: tỷ lệ hoàn thành tiêu chuẩn theo dữ liệu có sẵn; không tự tính trung bình từ chỉ số khác.
- `A04.21` Quy trình: tỷ lệ phần trăm các mục quy trình của lớp đã được tick hoàn thành; không liên quan tới phép trung bình của học viên hoặc chỉ số khác.
- `A04.22` Follow: thời gian và tên `Class Handler` hoặc `Support` của nhật ký viết tay có thời điểm log gần nhất (tạo mới hoặc sửa thành công). Chỉ lấy nhật ký viết tay, không lấy log Hệ thống. Chi tiết tại Menu Nhật ký.
- `A04.23` Kết quả: `Số học viên trạng thái Hoàn thành / Tổng học viên đã đóng học phí thuộc Đang học, Dự thính, Chỉ xem`.
- `A04.24` Tag HV: chỉ hiển thị số học viên khớp khi đang áp dụng filter Tag học viên; không có filter thì không hiển thị số kết quả giả.
- Quy tắc ngày: `Ngày bắt đầu dự kiến` là ngày bắt đầu của lịch; `Ngày kết thúc dự kiến` tự lấy ngày của buổi cuối cùng được sinh; hai giá trị này được dùng bởi filter `Bắt đầu` và `Kết thúc`. `Ngày bắt đầu thực tế` là ngày mở bài đầu tiên của lớp; `Ngày kết thúc thực tế` là ngày hoàn thành bài cuối cùng của lớp. Ngày thực tế không tự ghi đè ngày dự kiến và không dùng thay cho filter dự kiến.

*Bộ lọc và Tag học viên*
- Khu vực bộ lọc thu hẹp đồng thời danh sách lớp và toàn bộ thẻ thống kê tổng quan. Trong cùng một filter thông thường nhiều giá trị kết hợp `OR`; giữa các filter khác nhau áp dụng `AND`. Filter ngày chọn một khoảng cho mỗi field tại một thời điểm; mặc định không giới hạn ngày nếu chưa chọn.
- `A05.01` Trung tâm: chọn một hoặc nhiều trung tâm từ danh sách trung tâm; không chọn thì hiển thị lớp của mọi trung tâm.
- `A05.02` Loại lớp: chọn một hoặc nhiều `Lớp 1-1`, `Lớp chung`, `Lớp demo` (lớp không chính thức). Xác định theo giá trị đã lưu, không suy ra từ số lượng học viên; `Lớp 1-1` vẫn có thể có nhiều học viên, và chọn `Lớp 1-1` trả về mọi lớp có field này bất kể 0, 1 hay nhiều học viên.
- `A05.03` Trạng thái: chọn một hoặc nhiều trong tám trạng thái lớp đã định nghĩa.
- `A05.04` Trình độ: chọn một hoặc nhiều trình độ từ dữ liệu được define.
- `A05.05` Học kỳ: chọn một hoặc nhiều học kỳ từ dữ liệu được define.
- `A05.06` Tag: tag của lớp; lấy động theo nhóm/tag đã define và cho chọn nhiều.
- `A05.07` Phụ trách: chọn một hoặc nhiều người phụ trách từ dữ liệu người dùng hợp lệ.
- `A05.08` CSKH: chọn một hoặc nhiều nhân sự CSKH từ dữ liệu người dùng hợp lệ.
- `A05.09` Bắt đầu: lọc theo `Ngày bắt đầu dự kiến`; dùng các khoảng thời gian như tab Ghi chú.
- `A05.10` Kết thúc: lọc theo `Ngày kết thúc dự kiến`; dùng các khoảng thời gian như tab Ghi chú.
- `A05.11` Tag HV: chọn nhiều tag học viên và toán tử `AND` hoặc `OR`; chỉ lớp có ít nhất một học viên khớp mới xuất hiện. `OR`: học viên khớp nếu có ít nhất một tag đã chọn; `AND`: học viên khớp khi có đầy đủ tất cả tag đã chọn. Cột `Tag HV` hiển thị số học viên khớp điều kiện của từng lớp (ví dụ lớp có 5 học viên, 3 có Tag A, 2 có Tag B: lọc Tag A hiển thị `3`); khi không áp dụng Tag HV thì cột không hiển thị count.
- `A05.12` `Tới hạn`: từ thời điểm bắt đầu có dữ liệu đến hết hôm nay.
- `A05.13` `Hôm nay`: toàn bộ ngày hôm nay.
- `A05.14` `Hôm qua`: toàn bộ ngày hôm qua.
- `A05.15` `Hôm nay và hôm qua`: hợp của hai ngày.
- `A05.16` `Tuần này`: từ đầu Thứ 2 đến hết Chủ Nhật của tuần hiện tại.
- `A05.17` `Tuần trước`: toàn bộ tuần liền trước.
- `A05.18` `Tháng này`: từ ngày đầu đến ngày cuối tháng hiện tại.
- `A05.19` `Tháng trước`: toàn bộ tháng liền trước.
- `A05.20` `3 tháng trước`: từ đầu ngày cách hiện tại ba tháng đến thời điểm hiện tại.
- `A05.21` `Năm nay`: từ 01/01 đến 31/12 năm hiện tại.
- `A05.22` `Năm trước`: từ 01/01 đến 31/12 năm liền trước.
- `A05.23` `Tùy chọn`: chọn ngày bắt đầu và kết thúc, bao gồm toàn bộ hai ngày biên.
- Thay đổi bất kỳ filter hoặc toán tử AND/OR đưa danh sách về trang đầu và tính lại toàn bộ thẻ thống kê. Chuyển trang giữ nguyên filter, toán tử Tag HV và vị trí lựa chọn.

*Toast phản hồi CRUD*
- Nội dung dòng hai của Toast lấy từ flow CRUD tương ứng; mỗi thao tác chỉ có một Toast; Hủy/chỉ đọc không có Toast CRUD; nút `×` đóng thủ công; không hiển thị dữ liệu nhạy cảm.
- `A09.01` Thành công: tiêu đề `Thành Công`, khi backend xác nhận thao tác thành công.
- `A09.02` Thông tin: tiêu đề `Thông Báo`, khi thao tác đã tiếp nhận nhưng dữ liệu cần thời gian đồng bộ.
- `A09.03` Cảnh báo: tiêu đề `Cảnh Báo`, khi dữ liệu/điều kiện cần người dùng kiểm tra.
- `A09.04` Lỗi: tiêu đề `Có Lỗi Xảy Ra`, khi backend/network không hoàn tất thao tác.

![Toast CRUD](../../images/01-toast-crud.png)

### Trang 2: ADM-LOP-010002 — Danh sách lớp học / Dropdown chọn nhân sự (đang mở)

![Trang 2](./images/adm-lop-010002.png)

**Mô tả:**
- Dropdown chọn nhân sự có ô tìm kiếm, danh sách nhân sự nhóm theo role (ví dụ Support, Nhân viên kinh doanh), dùng cho các bộ lọc Phụ trách/CSKH và chọn Người phụ trách/Theo dõi.

**Điểm cần lưu ý:**
- Cho chọn nhiều nhân sự; danh sách chỉ lấy từ dữ liệu người dùng hợp lệ của từng ngữ cảnh sử dụng.

### Trang 3: ADM-LOP-010004 — Danh sách lớp học / Ẩn hiện cột dropdown

![Trang 3](./images/adm-lop-010004.png)

**Mô tả:**
- Dropdown ẩn/hiện cột của bảng, có ô `Tìm cột...` và danh sách cột: Mã lớp học, Đánh giá, Đi học, BTVN, Sĩ số KPI, Khoá học & tiến độ, GV, PTL, Điểm, Số bài kiểm tra, Điểm BTVN, Lịch dạy, Ghi chú SP, Ghi chú Sale, Ngày bắt đầu, Buổi gần nhất, Doanh thu, Chi phí giáo viên, Số buổi đã dạy, Chi phí PTL, Sửa BTVN, Tiêu chuẩn, Quy trình.

### Trang 4: ADM-LOP-010040 — Danh sách lớp học / Popup thêm tag

![Trang 4](./images/adm-lop-010040.png)

**Mô tả:**
- Popup `Thêm tag` mở từ menu Mã lớp: ô tìm kiếm, các nhóm tag đóng/mở, danh sách tag chọn nhiều (ví dụ `HK1`, `HK2`, `Lớp tổng hợp`, `Luyện thi`), nút `Huỷ` và `Xác nhận`.

**Điểm cần lưu ý:**
- `Admin`, `Class Handler`, `Support` được thêm nhiều tag cho lớp; `Sale` chỉ xem danh sách và tag hiện có, không được thêm tag, kể cả bằng request trực tiếp.
- Tag và nhóm tag lấy động từ dữ liệu đã define; không hard-code các giá trị minh họa. Thao tác chỉ thêm tag cho lớp đang chọn, không thêm cho giáo viên hoặc học viên.
- Tag đã có không được tạo quan hệ trùng. Việc gỡ tag hiện có không thuộc phạm vi popup `Thêm tag`.
- `Hủy` đóng popup, không gửi request và không có notification CUD. `Xác Nhận` gửi đúng một request; thành công cập nhật tag tại hàng lớp và hiển thị notification thành công, thất bại giữ lựa chọn để thử lại và hiển thị notification thất bại.
- Menu Mã lớp: click `Mã lớp` mở menu gồm đúng hai lựa chọn `Thêm tag` và `Thêm lịch hẹn`; click ra ngoài hoặc chọn một hành động đóng menu. Menu giữ đúng định danh lớp đã click, không dùng mã hiển thị làm khóa cập nhật. Badge đỏ cạnh Mã lớp là tổng số lịch hẹn gắn với lớp.

### Trang 5: ADM-LOP-010050 — Danh sách lớp học / Popup thêm lịch hẹn

![Trang 5](./images/adm-lop-010050.png)

**Mô tả:**
- Popup `Thêm lịch hẹn` tạo lịch hẹn chăm sóc hoặc xử lý công việc gắn với đúng lớp được chọn, gồm Nội dung, Thời gian, Độ ưu tiên, Người phụ trách, Theo dõi, Ghi chú, nút `Huỷ` và `Xác nhận`.

**Điểm cần lưu ý:**
- `A08.01` Nội dung: bắt buộc; nhập tự do.
- `A08.02` Thời gian: bắt buộc; chọn ngày/giờ hẹn, không giới hạn mốc thời gian.
- `A08.03` Độ ưu tiên: bắt buộc; chọn một trong `Ưu tiên thấp`, `Bình thường`, `Quan trọng`, `Ưu tiên cao` theo Requirement Lịch Hẹn.
- `A08.04` Người phụ trách: bắt buộc; mặc định chọn người tạo nếu người đó có role `Admin`, `Class Handler` hoặc `Support`; có thể gỡ/thêm người khác và khi lưu phải có ít nhất một người. Sale tạo từ màn này phải tự chọn người phụ trách hợp lệ.
- `A08.05` Theo dõi: không bắt buộc; có thể chọn nhiều user thuộc `Admin`, `Class Handler`, `Support`. Người chỉ Theo dõi được xem lịch hẹn và không sửa/xóa.
- `A08.06` Ghi chú: bắt buộc; nhập tự do, không giới hạn độ dài.
- `A08.07` Hủy: đóng popup, không tạo lịch hẹn và không có notification CUD.
- `A08.08` Xác Nhận: validation và tạo lịch hẹn gắn với đúng lớp; chống gửi lặp.
- `Admin`, `Class Handler`, `Support`, `Sale` được thêm, cập nhật và xem lịch hẹn của lớp. Tab Lịch Hẹn trong Chi tiết lớp và menu Lịch Hẹn dùng cùng bản ghi; tab Chi tiết lớp chỉ Admin/Class Handler/Support có quyền lớp được xem, người trong Người phụ trách là owner, người chỉ Theo dõi chỉ xem. Không có trạng thái `Đã xoá`; xóa bằng biểu tượng thùng rác cố định ở cuối hàng, không cần hover, kèm xác nhận tại menu Lịch Hẹn.
- Lịch hẹn gắn với đúng `class_id`, lưu người tạo thực tế, Người phụ trách và Người theo dõi. Danh sách chọn Người phụ trách/Theo dõi chỉ trả user thuộc `Admin`, `Class Handler`, `Support` (có tìm kiếm, nhóm theo role, chọn nhiều); role khác không được hiển thị hoặc gán bằng request trực tiếp.
- Một user có thể đồng thời được chọn trong cả Người phụ trách và Theo dõi; quyền sửa đến từ Người phụ trách.
- Tạo lịch hẹn thành công làm badge lịch hẹn cạnh Mã lớp tăng theo dữ liệu mới. Mọi thao tác tạo/cập nhật lịch hẹn thành công hoặc thất bại có đúng một notification kết quả.

### Trang 6: ADM-LOP-010010 — Danh sách lớp học / Popup thêm lớp học

![Trang 6](./images/adm-lop-010010.png)

**Mô tả:**
- Popup `Thêm lớp học` mở từ nút `+` cạnh tiêu đề (có công tắc `Lớp không chính thức`): Trung Tâm, Khoá học, Loại lớp, Mã lớp, Thêm lịch dạy (các khung `T2 - 19:00AM` … `CN - 19:00AM`), Ngày bắt đầu, Ngày kết thúc, Mô tả.

**Điểm cần lưu ý:**
- Nội dung, quyền và quy tắc nghiệp vụ của tạo lớp được đặc tả riêng tại Tạo lớp học, không thuộc requirement Danh sách lớp.

### Trang 7: ADM-LOP-010020 — Danh sách lớp học / Popup thêm lịch dạy cố định

![Trang 7](./images/adm-lop-010020.png)

**Mô tả:**
- Popup `Thêm lịch dạy` (`Thêm Lịch Dạy Cố Định`) mở từ popup Thêm lớp học: chọn ngày bắt đầu, Giờ bắt đầu – Giờ kết thúc, chọn các thứ trong tuần (Thứ 2 … CN); hiển thị cảnh báo `Đã trùng lịch dạy` khi khung giờ trùng với lịch đã có; nút `Huỷ` và `Xác nhận`.

**Điểm cần lưu ý:**
- Quy tắc lịch dạy cố định thuộc requirement Tạo lớp học.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Xem Danh sách lớp**

```
Admin, Class Handler, Support hoặc Sale mở Quản lý → Lớp học
      → Hệ thống kiểm tra role và phạm vi dữ liệu
      → Tải thống kê, filter và trang đầu gồm tối đa 50 lớp
      → Sắp xếp lớp mới tạo trước
      → Mỗi hàng hiển thị toàn bộ dữ liệu qua bảng cuộn ngang
      → Thành công: bảng và thống kê cùng thuộc điều kiện hiện tại
      → Thất bại: hiển thị lỗi, không coi lỗi là dữ liệu rỗng và cho phép thử lại
```

**Flow 2: Lọc danh sách và thống kê**

```
Người dùng chọn một hoặc nhiều giá trị trong các filter
      → Trong cùng filter: OR; giữa các filter: AND
      → Bắt đầu/Kết thúc dùng ngày dự kiến và khoảng thời gian giống filter Ghi chú
      → Danh sách trở về trang đầu
      → Hệ thống tải lại toàn bộ tập kết quả và thẻ thống kê
      → Chỉ response của tổ hợp mới nhất được hiển thị
```

**Flow 3: Lọc Tag học viên**

```
Người dùng chọn một hoặc nhiều Tag HV
      → Chọn toán tử OR hoặc AND
      → Hệ thống xác định học viên khớp trong từng lớp
      → Loại lớp không có học viên khớp
      → Hiển thị count học viên khớp tại cột Tag HV
      → Tính lại thẻ thống kê và trở về trang đầu
```

**Flow 4: Cuộn ngang và phân trang**

```
Người dùng cuộn ngang để xem các cột của cùng bảng
      → Không tải lại dữ liệu và không làm lệch hàng
      → Người dùng chọn số trang, Trước hoặc Sau
      → Hệ thống giữ nguyên filter và tải tối đa 50 lớp đúng trang
      → Chỉ response của trang mới nhất được hiển thị
```

**Flow 5: Thêm tag cho lớp**

```
Admin, Class Handler hoặc Support click Mã lớp
      → Chọn Thêm tag
      → Popup tải tag theo nhóm từ dữ liệu define
      → Người dùng tìm kiếm và chọn nhiều tag
      → Hủy: đóng popup, không thay đổi dữ liệu
      → Xác Nhận: backend kiểm tra role, lớp và tag; chống gửi lặp
      → Thành công: cập nhật tag lớp và hiển thị notification thành công
      → Thất bại: không cập nhật một phần, giữ lựa chọn và hiển thị notification thất bại
```

**Flow 6: Thêm lịch hẹn cho lớp**

```
Admin, Class Handler, Support hoặc Sale click Mã lớp
      → Chọn Thêm lịch hẹn
      → Nhập/chọn Nội dung, Thời gian, Độ ưu tiên, Người phụ trách, Theo dõi, Ghi chú
      → Người phụ trách/Theo dõi chỉ gồm Admin, Class Handler, Support và cho chọn nhiều
      → Hủy: đóng popup, không thay đổi dữ liệu
      → Xác Nhận: backend kiểm tra role, lớp, field và user được chọn; chống gửi lặp
      → Thành công: tạo lịch hẹn, cập nhật badge và hiển thị notification thành công
      → Thất bại: không tạo một phần, giữ dữ liệu phù hợp và hiển thị notification thất bại
```

### 2.2. Ngoại lệ

- **EX01:** Role không được cấp quyền mở danh sách, xem hoặc thay đổi lịch hẹn → backend từ chối, không trả dữ liệu và không thay đổi trạng thái.
- **EX02:** Tải danh sách/thống kê thất bại hoặc hết thời gian chờ → hiển thị lỗi và cho phép thử lại; không coi lỗi là dữ liệu rỗng hoặc giá trị `0` hợp lệ.
- **EX03:** Người dùng đổi filter/trang khi request cũ chưa hoàn tất → chỉ response của điều kiện và trang mới nhất được phép cập nhật bảng/thống kê.
- **EX04:** `Sale` hoặc role khác gửi request thêm tag lớp → backend từ chối, không thay đổi tag.
- **EX05:** Thêm tag thất bại, tag không còn tồn tại hoặc quan hệ đã có → không tạo dữ liệu trùng/không cập nhật một phần; hiển thị notification thất bại phù hợp.
- **EX06:** Lịch hẹn thiếu field bắt buộc theo cấu hình, thời gian không hợp lệ hoặc gán user ngoài ba role cho phép → từ chối tạo/cập nhật và hiển thị lỗi.
- **EX07:** Tạo/cập nhật lịch hẹn thất bại hoặc request lặp → chỉ xử lý một thao tác logic, không tăng badge sai và hiển thị đúng một notification thất bại.
- **EX08:** Tùy chọn ngày có Từ ngày sau Đến ngày → từ chối áp dụng, giữ điều kiện cũ và hiển thị lỗi tại filter.
- **EX09:** Dữ liệu lớp thay đổi làm trang hiện tại không còn hợp lệ → chuyển đến trang hợp lệ gần nhất, giữ filter và không hiển thị trang rỗng giả.
- **EX10:** Ghi chú dài hoặc chứa xuống dòng → popover hover hiển thị đầy đủ an toàn, không phá vỡ layout hoặc thực thi nội dung như mã.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Truy cập Danh sách lớp | `Admin`, `Class Handler`, `Support`, `Sale` được xem danh sách, thống kê, filter và phân trang. Mặc định lớp mới tạo hiển thị trước; mỗi trang tối đa 50 lớp. |
| REQ02 | Thống kê theo filter | Tám thẻ thống kê tính theo toàn bộ tập lớp thỏa filter hiện tại, không chỉ trang đang xem. Doanh thu và lương GV là tổng theo từng lớp; Tổng chi PTL chỉ cộng tiền thực tế của KPI Handler Đã xác nhận, loại Mới/Đã hủy/Đã xóa; Tổng sĩ số cộng riêng hai vế của từng lớp với tử số Đang học + Dự thính và mẫu số đủ 7 trạng thái kể cả Xóa; BTVN và Đi học là trung bình hai cấp học viên → lớp → tập lớp, bỏ qua lớp không có giá trị; Sĩ số TB lấy trung bình riêng hai vế sĩ số của các lớp. |
| REQ03 | Trạng thái lớp | Hỗ trợ đủ `Đang học`, `Hoàn thành`, `Hủy`, `Khai giảng`, `Mới tạo`, `Tạm dừng`, `Xóa`, `Trải nghiệm` với icon tương ứng. `Hủy` và `Xóa` là hai trạng thái riêng. |
| REQ04 | Filter | Các filter giá trị cho chọn nhiều; trong cùng filter dùng OR, giữa các filter dùng AND. Bắt đầu/Kết thúc lọc theo ngày dự kiến bằng các khoảng thời gian giống tab Ghi chú. Tag HV hỗ trợ AND/OR và cột Tag HV chỉ hiển thị count học viên khớp khi filter có hiệu lực. |
| REQ05 | Dữ liệu lớp | Các cột phải thuộc đúng lớp và tuân thủ công thức/ý nghĩa đã mô tả, gồm tỷ lệ Đi học/BTVN trung bình từ học viên có dữ liệu, để trống khi không có dữ liệu, Sĩ số KPI, Kết quả, Doanh thu, lương GV của bài học/buổi học đã hoàn thành, điểm, quy trình, Follow và các mốc ngày. |
| REQ06 | Bảng cuộn ngang và phân trang | Cuộn ngang chỉ thay đổi vùng cột, không thay đổi tập hàng. Phân trang tối đa 50 lớp, giữ filter và chống response cũ ghi đè. |
| REQ07 | Menu Mã lớp | Chỉ click Mã lớp mở menu `Thêm tag`, `Thêm lịch hẹn`; badge cạnh mã là số lịch hẹn của lớp. Các ô khác không mở menu. |
| REQ08 | Tag lớp | `Admin`, `Class Handler`, `Support` được tìm kiếm và chọn nhiều tag đã define để thêm cho lớp; không tạo trùng và mọi cập nhật có notification kết quả. `Sale` không được thêm tag. |
| REQ09 | Lịch hẹn lớp | `Admin`, `Class Handler`, `Support`, `Sale` được tạo/cập nhật và xem lịch hẹn lớp. Người phụ trách/Theo dõi chỉ chọn từ `Admin`, `Class Handler`, `Support`, hỗ trợ nhiều user; tạo thành công cập nhật badge. |
| REQ10 | Notification | Mọi thao tác CUD trong phạm vi feature phải hiển thị đúng một notification thành công hoặc thất bại sau kết quả validation/backend. Hủy popup và thao tác chỉ đọc không hiển thị notification CUD. |
| REQ11 | Trung tâm | Danh sách có bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số và phân trang chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header. Thẻ thống kê cũng tính theo bộ lọc Trung tâm. |

### 2.4. Ràng buộc

#### Quyền

| Role | Xem danh sách/thống kê | Filter/Tag HV/Phân trang | Hover ghi chú | Mở menu Mã lớp | Thêm tag lớp | Thêm/Cập nhật lịch hẹn | Xem lịch hẹn |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Class Handler | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Support | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Sale | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| Các role khác | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

#### Ràng buộc khác

- Lớp, tag, lịch hẹn, học viên, giáo viên, PTL và người dùng liên kết bằng định danh nội bộ; không dùng mã/tên hiển thị làm khóa phân quyền hoặc cập nhật.
- Mọi truy vấn bảng, thống kê, filter và phân trang áp dụng cùng phạm vi dữ liệu của người dùng hiện tại. Tổng thống kê, tổng kết quả phân trang và count Tag HV không được làm lộ dữ liệu ngoài phạm vi.
- Backend kiểm tra lại role và phạm vi cho mọi request thêm tag hoặc tạo/cập nhật lịch hẹn; không tin cậy `class_id`, người tạo, Người phụ trách hoặc Người theo dõi do client tự gán ngoài phạm vi.
- Nội dung ghi chú/popover hiển thị an toàn, không thực thi HTML/script do dữ liệu người dùng cung cấp.
- Request bất đồng bộ gắn với filter, trang và phạm vi hiện tại để response cũ không ghi đè UI mới.
- Notification áp dụng cho thêm tag lớp và tạo/cập nhật lịch hẹn lớp; các CUD khác khi bổ sung vào feature cũng áp dụng cùng nguyên tắc. Thành công chỉ hiển thị sau khi backend xác nhận; validation từ chối hiển thị đúng một notification thất bại, không hiển thị thành công giả; mỗi request thay đổi chỉ tạo một notification kể cả khi click lặp; không đưa stack trace, token, ID nội bộ hoặc thông tin kỹ thuật nhạy cảm vào notification.

---

## 3. Testcase

### Feature: Quản lý danh sách lớp học

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Mở Danh sách lớp, sắp xếp mặc định | High | Flow 1 / REQ01 | Admin / Class Handler / Support / Sale | Người dùng đã đăng nhập; có lớp được tạo tại nhiều thời điểm | **Given:** người dùng có một trong bốn role được cấp quyền<br>**When:** mở `Quản lý` → `Lớp học`<br>**Then:** hệ thống tải Danh sách lớp, lớp có `created_at` mới hơn đứng trước | - Hiển thị các thẻ thống kê, bộ lọc, bảng và phân trang; tối đa 50 lớp/trang<br>- Thứ tự giảm dần theo thời gian tạo, ổn định khi chuyển trang; không dùng ngày khai giảng<br>- Không thay đổi dữ liệu |
| Case 2: Từ chối role không có quyền và ngoài phạm vi | High | EX01 / Ràng buộc quyền | Các role khác; Admin / Class Handler / Support / Sale | Người dùng đã đăng nhập; client gửi `class_id` ngoài phạm vi | **Given:** người dùng không thuộc role được cấp, hoặc gửi `class_id` ngoài phạm vi<br>**When:** mở URL hoặc gửi request danh sách/đọc/thay đổi trực tiếp<br>**Then:** hệ thống từ chối | - Không trả dữ liệu lớp, tag, lịch hẹn hoặc thống kê/count ngoài phạm vi<br>- Không thực hiện được thao tác thay đổi, dữ liệu không đổi |
| Case 3: Cuộn ngang và chỉ Mã lớp mở menu | High | Flow 4 / REQ06 / REQ07 | Admin / Class Handler / Support / Sale | Bảng có nhiều cột hơn chiều rộng; danh sách có nhiều lớp | **Given:** danh sách đã tải<br>**When:** cuộn ngang từ nhóm cột đầu sang cuối và quay lại; click Mã lớp A, rồi các ô còn lại, rồi click ra ngoài khi menu mở<br>**Then:** chỉ thay đổi vùng cột đang nhìn thấy; chỉ click Mã lớp mở menu gắn với lớp A | - Cùng một hàng luôn thuộc cùng lớp, header và dữ liệu thẳng hàng, không mất filter/trang, không gửi request chỉ vì cuộn<br>- Menu chỉ có `Thêm tag` và `Thêm lịch hẹn`; Doanh thu không click được; ô khác không mở menu<br>- Click ra ngoài đóng menu, không mở popup, không đổi dữ liệu |
| Case 4: Doanh thu, Tổng lương GV, Tổng chi PTL, Số lớp | High | REQ02 | Admin / Class Handler / Support / Sale | Dữ liệu mẫu A và B; có thêm học phí chưa thu, buổi chưa hoàn thành, KPI Mới/Đã hủy/Đã xóa và lớp ngoài bộ lọc | **Given:** bộ lọc trả về A và B<br>**When:** hệ thống tính các thẻ<br>**Then:** Doanh thu `25.000.000đ`; Tổng lương GV `800.000đ`; Tổng chi PTL `300.000đ`; Số lớp 2 | - Bỏ qua học phí chưa thu, buổi chưa hoàn thành, KPI không phải Đã xác nhận, lớp ngoài bộ lọc<br>- Tổng chi PTL theo tiền thực tế lưu, không nhân theo số học viên/buổi, không cộng OT<br>- Không giới hạn ở trang đang xem |
| Case 5: Tổng sĩ số, Tỷ lệ BTVN, Đi học, Sĩ số TB | High | REQ02 / REQ05 | Admin / Class Handler / Support / Sale | Dữ liệu mẫu A (`4/8`, BTVN 90%, đi học 80%), B (`6/10`, 60%, 50%); lớp C không có học viên hoặc không có dữ liệu | **Given:** bộ lọc trả về A, B và C<br>**When:** hệ thống tính thẻ<br>**Then:** Tổng sĩ số `10/18`; Tỷ lệ BTVN `75%`; Đi học `65%`; Sĩ số TB `5/9` | - Cộng riêng hai số; dấu `/` không phải phép chia; lớp mỗi trạng thái một học viên là `2/7`<br>- Ô BTVN/Đi học của C để trống, không tính `0%` và không vào mẫu số; nếu tất cả lớp không có dữ liệu thì thẻ để trống<br>- Sĩ số TB chia riêng từng số cho Số lớp |
| Case 6: Thẻ đổi theo filter, lỗi và response cũ | High | Flow 2 / EX02 / EX03 / REQ02 / REQ04 | Admin / Class Handler / Support / Sale | Các lớp thuộc nhiều điều kiện; API thống kê lỗi hoặc hai request filter phản hồi sai thứ tự | **Given:** thống kê ban đầu đã hiển thị<br>**When:** đổi filter, thống kê tải thất bại hoặc response cũ về sau<br>**Then:** bảng và thống kê tải lại theo cùng điều kiện; lỗi hiển thị trạng thái lỗi; chỉ giữ filter mới nhất | - Số liệu tính trên toàn bộ kết quả đã lọc<br>- Không hiển thị `0` giả, không dùng số liệu điều kiện cũ, cho phép thử lại<br>- Response cũ không ghi đè; thống kê và danh sách dùng cùng điều kiện |
| Case 7: Hiển thị đúng tám trạng thái lớp | High | REQ03 | Admin / Class Handler / Support / Sale | Có lớp thuộc đủ tám trạng thái (kể cả một lớp Hủy và một lớp Xóa) | **Given:** danh sách tải thành công<br>**When:** xem cột trạng thái, focus/hover icon<br>**Then:** mỗi lớp hiển thị đúng icon và tên trạng thái | - Đủ Đang học, Hoàn thành, Hủy, Khai giảng, Mới tạo, Tạm dừng, Xóa, Trải nghiệm; không tráo icon<br>- Hủy và Xóa không bị gộp, filter từng trạng thái trả đúng dữ liệu<br>- Có tên trạng thái, không chỉ dựa vào màu |
| Case 8: Dữ liệu từng lớp (Mã lớp, Sĩ số KPI, Kết quả, điểm, quy trình, chi phí, Follow) | High | REQ05 | Admin / Class Handler / Support / Sale | Lớp có nhiều tag và lịch hẹn; học viên đủ trạng thái và tình trạng học phí; bài đã chấm/chưa chấm và của người rời/xóa; quy trình có mục đã tick; 3 buổi hoàn thành mỗi buổi 100.000đ; nhật ký của nhiều role | **Given:** danh sách đã tải<br>**When:** xem và cuộn ngang một hàng, click giá trị Doanh thu<br>**Then:** toàn bộ giá trị thuộc đúng lớp; Chi phí GV/Số buổi `300.000đ / 3`; Follow lấy nhật ký viết tay gần nhất của Class Handler/Support | - Tag `H4`, `H5` là tag lớp, badge = số lịch hẹn<br>- Sĩ số KPI: A chỉ Đang học đã đóng phí; B gồm Đang học/Dự thính/Chỉ xem đã đóng phí; C = toàn bộ Dự thính; Kết quả = Hoàn thành / học viên đã đóng phí (Đang học/Dự thính/Chỉ xem)<br>- Điểm làm tròn 1 chữ số, loại Chưa nộp/Chưa chấm, giữ điểm 0 và bài người rời/xóa; Quy trình theo mục đã tick<br>- Doanh thu chỉ đọc, không popup/điều hướng |
| Case 9: Ghi chú hover, ngày dự kiến/thực tế, lớp chưa học | High | Flow 1 / REQ05 / EX10 | Admin / Class Handler / Support / Sale | Lớp có Ghi chú SP và Ghi chú Sale khác nhau (dài, xuống dòng); ngày dự kiến khác ngày thực tế; lớp chưa mở/hoàn thành buổi nào | **Given:** nội dung đang rút gọn<br>**When:** hover từng ô ghi chú; hiển thị/lọc theo ngày; xem cột Buổi gần nhất<br>**Then:** popover hiển thị toàn bộ nội dung đúng lớp và đúng loại; dùng đúng loại ngày; `Chưa học` | - Ghi chú SP không hiển thị thành Sale và ngược lại, không cho chỉnh sửa, không thực thi mã<br>- Filter dùng ngày dự kiến; ngày thực tế lấy ngày mở bài đầu/hoàn thành bài cuối, không ghi đè nhau<br>- Không coi `Chưa học` là lỗi |
| Case 10: Chọn nhiều giá trị, kết hợp filter, Trung tâm, Trạng thái | High | Flow 2 / REQ04 / REQ11 / REQ03 | Admin / Class Handler / Support / Sale | Có lớp 1-1 với 0, 1 và nhiều học viên; lớp ở trung tâm A và B; lớp chỉ thỏa một phần điều kiện; dữ liệu đủ tám trạng thái | **Given:** chọn `Loại lớp = Lớp 1-1`, một/nhiều giá trị ở filter khác, `Trung tâm = B`, nhiều trạng thái; sau đó bỏ chọn Trung tâm<br>**When:** hệ thống tải lại<br>**Then:** trong cùng filter OR, giữa các filter AND; chỉ lớp trung tâm B; bỏ chọn thì hiển thị mọi trung tâm | - Trả về mọi lớp `Lớp 1-1` không phụ thuộc sĩ số; Hủy và Xóa không bị gộp<br>- Không lẫn dữ liệu trung tâm A; tổng số, phân trang và thống kê cập nhật theo filter<br>- Danh sách về trang đầu, giá trị chọn hiển thị đúng |
| Case 11: Filter ngày dự kiến và khoảng thời gian | High | Flow 2 / REQ04 / EX08 | Admin / Class Handler / Support / Sale | Ngày dự kiến và thực tế khác nhau; có lớp tại các mốc biên | **Given:** chọn khoảng ở Bắt đầu/Kết thúc, lần lượt các khoảng định sẵn và Tùy chọn (kể cả Từ ngày sau Đến ngày)<br>**When:** áp dụng filter<br>**Then:** dùng đúng trường ngày dự kiến theo múi giờ nghiệp vụ; từ chối Tùy chọn sai thứ tự | - Không dùng ngày thực tế; bao gồm đúng hai mốc biên<br>- Đủ các lựa chọn giống filter Ghi chú; `Tới hạn` từ đầu hệ thống đến hết hôm nay<br>- Từ chối giữ điều kiện cũ, hiển thị lỗi tại filter |
| Case 12: Filter Tag HV theo OR và AND | High | Flow 3 / REQ04 | Admin / Class Handler / Support / Sale | Có học viên mang Tag A, Tag B, cả hai hoặc không có | **Given:** chọn A, B với OR rồi AND; sau đó bỏ filter<br>**When:** áp dụng<br>**Then:** OR: lớp có học viên mang ít nhất một tag; AND: chỉ học viên mang đủ A và B; bỏ filter thì không hiển thị count | - Count Tag HV bằng số học viên khớp, mỗi học viên đếm một lần<br>- Lớp count 0 không xuất hiện; không dùng OR thay AND<br>- Bỏ filter không giữ count cũ |
| Case 13: Phân trang, response mới nhất, rỗng và lỗi | High | Flow 4 / EX02 / EX03 / EX09 / REQ06 | Admin / Class Handler / Support / Sale | Có hơn 50 lớp thỏa điều kiện; request phản hồi sai thứ tự; filter không có kết quả hoặc API lỗi; dữ liệu thay đổi làm trang không còn hợp lệ | **Given:** danh sách có nhiều trang<br>**When:** chọn số trang, `Trước`, `Sau`, đổi filter/trang liên tục, hoặc filter trả rỗng/lỗi<br>**Then:** tải đúng tối đa 50 lớp của trang; chỉ response mới nhất cập nhật; rỗng và lỗi hiển thị riêng | - Hiển thị khoảng dữ liệu, tổng kết quả, trang hiện tại; `Trước`/`Sau` khóa ở trang biên<br>- Giữ filter và Tag HV AND/OR; không lặp hoặc bỏ sót lớp; bảng và thống kê nhất quán<br>- Rỗng không là lỗi, lỗi không là rỗng, có thử lại; trang không hợp lệ chuyển đến trang gần nhất |
| Case 14: Thêm tag cho lớp | High | Flow 5 / REQ08 / EX04 / EX05 / REQ10 | Admin / Class Handler / Support; Sale | Menu Mã lớp đang mở; tag đã có hoặc không còn tồn tại; request lỗi/hết thời gian chờ | **Given:** chọn `Thêm tag`, tìm kiếm, mở nhóm, chọn nhiều tag rồi `Xác Nhận` (hoặc `Hủy`); Sale gọi request thêm tag<br>**When:** hệ thống xử lý<br>**Then:** thêm tag hợp lệ vào đúng lớp; Hủy không lưu; Sale bị từ chối | - Tag hiển thị tại hàng lớp, tag cũ giữ nguyên, không tạo quan hệ trùng, chỉ một request<br>- Hủy không gửi request, không notification; thất bại giữ lựa chọn, không cập nhật một phần<br>- Đúng một notification thành công/thất bại; UI không cho Sale dùng Thêm tag, backend từ chối |
| Case 15: Thêm lịch hẹn cho lớp | High | Flow 6 / REQ09 / EX06 / EX07 / REQ10 | Admin / Class Handler / Support / Sale | Menu Mã lớp đang mở; user thuộc nhiều role; request lỗi/hết thời gian chờ hoặc bị gửi lặp | **Given:** chọn `Thêm lịch hẹn`, nhập đủ field (hoặc thiếu field/Người phụ trách rỗng/user sai role), `Xác Nhận` hoặc `Hủy`<br>**When:** hệ thống xử lý<br>**Then:** tạo lịch hẹn cho đúng lớp khi hợp lệ; thiếu dữ liệu bị từ chối; Hủy đóng popup | - Người tạo có role hợp lệ được chọn sẵn ở Người phụ trách; danh sách chỉ gồm Admin, Class Handler, Support, chọn nhiều, có tìm kiếm; Theo dõi trống không lỗi<br>- Ghi nhận đúng người tạo/phụ trách/theo dõi, badge cập nhật, chỉ một request; thất bại không tạo một phần, không tăng badge sai<br>- Đúng một notification; Hủy không notification; role khác bị từ chối khi gọi trực tiếp |
| Case 16: Toast phản hồi CRUD | Medium | REQ10 | Role có quyền CRUD | Dữ liệu hợp lệ / chưa hợp lệ / backend lỗi / đang đồng bộ | **Given:** người dùng xác nhận thay đổi; có callback lặp hoặc bấm `×`<br>**When:** backend thành công, từ chối hoặc lỗi<br>**Then:** hiển thị lần lượt Toast `Thành Công`, `Cảnh Báo`, `Có Lỗi Xảy Ra`, `Thông Báo`; thao tác chỉ đọc/Hủy không có Toast | - Đúng nội dung nghiệp vụ, đúng một Toast, chỉ hiện sau khi backend xác nhận<br>- Cảnh báo vẫn đánh dấu field lỗi, không lưu dữ liệu sai; lỗi không lộ chi tiết kỹ thuật<br>- Đóng Toast không hoàn tác dữ liệu |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Cách định dạng và làm tròn hai vế của Sĩ số TB khi kết quả trung bình không phải số nguyên.
- **Q02:** Công thức chính xác của Đánh giá lớp; hiện chưa tự tính từ các tỷ lệ khác.
- **Q03:** Những trạng thái buổi học được tính vào tử số `đã thực hiện` của Khóa học & tiến độ.
- **Q04:** Công thức Tiêu chuẩn; hiện chỉ hiển thị dữ liệu có sẵn. (Công thức Chi phí PTL đã chốt tại Tab KPI.)
- **Q05:** Định dạng hiển thị ngày/giờ, múi giờ nghiệp vụ và quy tắc làm tròn điểm/tỷ lệ/tiền.
- **Q06:** Nguồn và phạm vi user của filter `Phụ trách`, `CSKH`.
- **Q07:** Số lịch hẹn trên badge gồm toàn bộ lịch hẹn hay chỉ lịch hẹn đang mở/chưa hoàn thành.
- **Q08:** Popup `Thêm tag` có cho phép bỏ tag hiện có hay chỉ thêm; requirement hiện giới hạn ở thao tác thêm và chống trùng.
- **Q09:** Giá trị mặc định Độ ưu tiên/Trạng thái của lịch hẹn; cờ SOS dùng cho lịch hẹn được đánh dấu Rất quan trọng.
- **Q10:** UI sửa Nội dung/Thời gian/Phân công ngoài tab chưa được chốt; thao tác xóa tại menu Lịch Hẹn có biểu tượng thùng rác cố định ở cuối hàng và popup xác nhận, badge phải theo dữ liệu sau xóa.
- **Q11:** Nội dung chữ chính xác, vị trí và thời gian tự đóng của notification thành công/thất bại.
