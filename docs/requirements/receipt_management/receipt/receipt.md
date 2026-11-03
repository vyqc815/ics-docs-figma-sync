# Hoá Đơn

## 1. UI

### Trang 1: ADM-HD-010000 — Hoá đơn / Danh sách hoá đơn

![Trang 1](./images/adm-hd-010000.png)

**Mô tả:**
- Quản lý hoá đơn của học viên (cọc, đóng tiền, hẹn chuyển khoản...): thêm / sửa / copy / xoá hoá đơn, xem học phí của từng hoá đơn, thêm học phí, lọc và tìm kiếm. Dữ liệu đồng bộ với CG.

**Điểm cần lưu ý:**
- Nút **+** cạnh tiêu đề "Danh Sách Hoá Đơn" mở popup Thêm hoá đơn. **Tìm kiếm** theo hoá đơn, học viên.
- Bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số và phân trang chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header.
- **Bộ lọc** (giá trị đang chọn hiển thị màu cam, bộ lọc chọn nhiều hiển thị số lượng đã chọn): Trung tâm (chọn nhiều); Nhận tiền (chọn 1: Đã nhận tiền, Chưa nhận tiền); Hoá đơn đỏ (chọn 1: Đã tạo = đã tick "Xuất hoá đơn công ty", Chưa có = chưa tick); Người phụ trách (chọn nhiều); Thời gian (chọn 1: Tới hạn, Hôm nay, Hôm qua, Hôm nay và hôm qua, Tuần này, Tuần trước, Tháng này, Tháng trước, 3 tháng trước, Năm nay, Năm trước, Tuỳ chọn); Loại hoá đơn (chọn nhiều, 14 loại); Trạng thái (chọn nhiều: Mới, Xác nhận, Đợi lớp, Học trước, Dời lịch, Hoàn tiền, Huỷ đơn, Hỗ trợ sau chốt); Tag (chọn nhiều, lấy từ danh sách tag, không cố định).
- **14 loại hoá đơn** (đúng thứ tự trong dropdown): [SALE] Mới, [SALE] Cọc, [SALE] BS Đủ Kỳ, [SALE] BS Trọn Khoá, [SALE] Cọc Giữ Chỗ, [SALE] Resale, [SP] Upsale, [SP] Renew, [SP] Resale, [SP] BS Trọn Khoá, [SP] BS Đủ Kỳ, Bán Ứng Dụng, Hoàn tiền, [SP] Cọc Học Tiếp. Mỗi loại có **1 màu cố định** (cột Loại hoá đơn và bộ lọc), xem màu ở Figma.
- Bộ lọc Thời gian áp dụng cho **Ngày ghi nhận**, mặc định **Hôm nay**. **Tới hạn** = Ngày ghi nhận từ hôm nay trở về trước. "Tuỳ chọn" cho chọn khoảng ngày.
- **Bộ lọc lưu riêng theo từng user:** mỗi user chọn bộ lọc của mình và chỉ thấy bộ lọc của mình.
- **Thẻ thống kê** phía trên bảng: Số ngày, Tổng KPI, Số hoá đơn, Giá trị (kèm biểu đồ đường nhỏ). Giá trị các thẻ **thay đổi theo bộ lọc**. **Số ngày** = số ngày của khoảng thời gian đang lọc (vd Hôm nay = 1).
- **Cột Tên hoá đơn:** tên tự động tạo theo rule (REQ01), kèm dropdown Trạng thái dạng icon (mỗi trạng thái 1 icon, hover hiển thị tên trạng thái, vd "Đợi lớp") và checkbox **"Đã nhận tiền"** bên dưới. **Bấm vào item hoá đơn → xổ xuống danh sách học phí của hoá đơn đó.** Popup Chỉnh sửa **chỉ mở từ menu ba chấm**, không mở khi bấm vào item.
- **Phần học phí xổ xuống:** bảng gồm #, Học viên (kèm email), Mã học viên, Lớp, Số tiền, Ghi chú học phí, Ghi chú trong lớp. Hover **Học viên**: tooltip Tên, SĐT, Email, mỗi dòng có icon copy. Hover **Lớp**: tooltip "Thông tin lớp" (Sĩ số, Buổi học, Khai giảng, Lịch học, SP, CSKH, Giáo viên).
- **Cột Học phí** hiển thị **số lượng học phí** của hoá đơn, phải khớp số dòng trong phần học phí xổ xuống (hiện lỗi hiển thị 0 trong khi hoá đơn đã có 1 học phí, cần sửa thành 1).
- **Cột KPI:** **tổng KPI** của các người phụ trách trong hoá đơn (REQ08). **Cột Hình:** tệp đính kèm của hoá đơn.
- **Cột Ngày hẹn:** nhãn tương đối (Hôm nay, Ngày mai, Hôm qua, Thứ ...) hoặc ngày cụ thể; quá hạn hiển thị màu đỏ; không có ngày hẹn hiển thị "(Không có)".
- **Cột Số tiền đã đóng:** hiển thị số tiền đã đóng và "Còn lại: ...". Số tiền đã đóng = số tiền khi làm hoá đơn bên CG; Còn lại = Số tiền đã đóng − tổng Giá trị các học phí đã thêm.
- **Cột Ghi chú, Hiểu khách:** icon, hover xem nội dung (icon màu cam khi có nội dung, xám khi không có).
- **Cột Phụ trách:** avatar người phụ trách kèm số lượng (khi có nhiều người), hover hiển thị danh sách tên. **Cột Liên kết:** học viên đã liên kết hoá đơn, kèm số lượng, hover hiển thị danh sách học viên (Tên, Email, SĐT có icon copy).
- Nút **ba chấm** mở menu: Thêm học phí, Chỉnh sửa, Copy, Lịch sử hành động, Xuất hoá đơn, Xoá hoá đơn. **Hiện chỉ làm 4 mục:** Thêm học phí, Chỉnh sửa, Copy, Xoá hoá đơn; **Lịch sử hành động** và **Xuất hoá đơn** hiển thị nhưng **disable**.

### Trang 2: ADM-HD-010102 — Hoá đơn / Danh sách hoá đơn / Dropdown · Nhận tiền, Thời gian, Tag, Menu hành động

![Trang 2](./images/adm-hd-010102.png)

**Mô tả:**
- Trạng thái danh sách khi mở các dropdown bộ lọc Nhận tiền, Thời gian, Tag và menu hành động (ba chấm).

### Trang 3: ADM-HD-010202 — Hoá đơn / Danh sách hoá đơn / Dropdown · Hoá đơn đỏ, Loại hoá đơn, Đổi trạng thái

![Trang 3](./images/adm-hd-010202.png)

**Mô tả:**
- Trạng thái danh sách khi mở các dropdown bộ lọc Hoá đơn đỏ, Loại hoá đơn và dropdown đổi trạng thái của hoá đơn.

### Trang 4: ADM-HD-010302 — Hoá đơn / Danh sách hoá đơn / Dropdown · Người phụ trách, Trạng thái

![Trang 4](./images/adm-hd-010302.png)

**Mô tả:**
- Trạng thái danh sách khi mở các dropdown bộ lọc Người phụ trách và Trạng thái.

### Trang 5: ADM-HD-010103 — Hoá đơn / Danh sách hoá đơn / Menu ⋮ · Thêm học phí

![Trang 5](./images/adm-hd-010103.png)

**Mô tả:**
- Menu ba chấm của hoá đơn, đang chọn mục `Thêm học phí` (mở popup chọn học viên liên kết, Trang 18).

### Trang 6: ADM-HD-010104 — Hoá đơn / Danh sách hoá đơn / Menu ⋮ · Chỉnh sửa

![Trang 6](./images/adm-hd-010104.png)

**Mô tả:**
- Menu ba chấm của hoá đơn, đang chọn mục `Chỉnh sửa` (mở popup Chỉnh sửa hoá đơn, Trang 14).

### Trang 7: ADM-HD-010006 — Hoá đơn / Danh sách hoá đơn / Sau khi thêm tag

![Trang 7](./images/adm-hd-010006.png)

**Mô tả:**
- Danh sách hoá đơn sau khi thêm tag cho hoá đơn / học viên (thao tác từ popup thêm tag, Trang 25).

### Trang 8: ADM-HD-010007 — Hoá đơn / Danh sách hoá đơn / Sau khi thêm lịch hẹn

![Trang 8](./images/adm-hd-010007.png)

**Mô tả:**
- Danh sách hoá đơn sau khi thêm lịch hẹn (thao tác từ popup thêm lịch hẹn, Trang 26).

### Trang 9: ADM-HD-010010 — Hoá đơn / Popup thêm hoá đơn

![Trang 9](./images/adm-hd-010010.png)

**Mô tả:**
- Nhập mới 1 hoá đơn. Popup Chỉnh sửa (Trang 14) dùng lại form của popup Thêm, tiêu đề đổi thành "Chỉnh sửa hoá đơn", nút "Thêm" đổi thành "Cập nhật", điền sẵn dữ liệu của hoá đơn.

**Điểm cần lưu ý:**
- **Tên hoá đơn:** chỉ đọc, tự động tạo theo rule (REQ01), cập nhật ngay khi các thành phần thay đổi.
- Trường bắt buộc (dấu *): Trung tâm, Trạng thái, Ngày ghi nhận, Tên học viên, Mã học viên, Loại hoá đơn, Số tiền, Tài khoản nhận, và Quy đổi (VND) khi đơn vị khác VND. **Giờ ghi nhận** (HH:MM) không bắt buộc.
- **Giá trị mặc định:** Trạng thái = Mới, Ngày ghi nhận = ngày hôm nay, Quy đổi (VND) = 0.
- Checkbox **"Chọn học viên có sẵn"** (rule giống Ship Sách): chưa tick thì Tên học viên và Mã học viên nhập tay; tick thì chuyển thành dropdown, chọn Tên thì Mã tự điền, chọn Mã thì Tên tự điền (đồng bộ 2 chiều).
- Checkbox **"Đã nhận tiền"**: cùng dữ liệu với checkbox "Đã nhận tiền" ở danh sách.
- **Số tiền:** nhập số + chọn đơn vị tiền tệ (VND, USD, EUR, JPY, CNY, KRW, GBP; mặc định VND). **Quy đổi (VND):** đơn vị VND thì tự điền bằng Số tiền nhưng **vẫn cho sửa**; khác VND thì **không tự quy đổi**, người dùng **bắt buộc tự nhập**.
- **Tài khoản nhận:** Tài khoản cá nhân, Tài khoản công ty, Tiền mặt, Khác.
- Checkbox **"Xuất hoá đơn công ty"**: cơ sở cho bộ lọc Hoá đơn đỏ (tick = Đã tạo, không tick = Chưa có).
- **Người phụ trách:** popup Thêm hoá đơn hiển thị avatar những người đã chọn, nút **+** mở popup Thêm người phụ trách (Trang 20).
- **Tệp đính kèm:** kéo thả hoặc chọn file, hỗ trợ PDF, DOC, DOCX, PPT, PPTX, tối đa 20MB; hiển thị ở cột Hình của danh sách.
- Nhóm "Thông tin thêm" (không bắt buộc): Ghi chú, Email, Số điện thoại, Lớp dự kiến (nhập mã lớp), Thông tin, Hiểu khách, Ngày hẹn.

### Trang 10: ADM-HD-010011 — Hoá đơn / Popup thêm hoá đơn / Chọn đơn vị tiền

![Trang 10](./images/adm-hd-010011.png)

**Mô tả:**
- Trạng thái popup Thêm hoá đơn khi mở dropdown đơn vị tiền (VND, USD, EUR, JPY, CNY, KRW, GBP).

### Trang 11: ADM-HD-010012 — Hoá đơn / Popup thêm hoá đơn / Chọn học viên có sẵn

![Trang 11](./images/adm-hd-010012.png)

**Mô tả:**
- Trạng thái popup Thêm hoá đơn khi tick "Chọn học viên có sẵn": Tên học viên và Mã học viên chuyển thành dropdown đồng bộ 2 chiều.

### Trang 12: ADM-HD-010013 — Hoá đơn / Popup thêm hoá đơn / Chọn học viên có sẵn / Mở danh sách

![Trang 12](./images/adm-hd-010013.png)

**Mô tả:**
- Trạng thái popup Thêm hoá đơn khi mở danh sách học viên của dropdown Tên / Mã học viên.

### Trang 13: ADM-HD-010070 — Hoá đơn / Popup thêm người phụ trách

![Trang 13](./images/adm-hd-010070.png)

**Mô tả:**
- Popup **Thêm người phụ trách** mở từ nút **+** trong popup hoá đơn.

**Điểm cần lưu ý:**
- Gồm **Người phụ trách** (chọn), **Trạng thái** (Mới, Đã xác nhận, Đã huỷ, Đã xoá; chỉ để ghi nhận, không ảnh hưởng hiển thị / KPI), **Số KPI** (chọn từ **-10 đến 10**, mỗi bước **0.05**: 0, 0.05, 0.1, ...).

### Trang 14: ADM-HD-010071 — Hoá đơn / Popup thêm người phụ trách / Chọn người phụ trách

![Trang 14](./images/adm-hd-010071.png)

**Mô tả:**
- Trạng thái popup khi mở dropdown Người phụ trách (ô tìm kiếm và danh sách người phụ trách kèm mã).

### Trang 15: ADM-HD-010072 — Hoá đơn / Popup thêm người phụ trách / Chọn trạng thái

![Trang 15](./images/adm-hd-010072.png)

**Mô tả:**
- Trạng thái popup khi mở dropdown Trạng thái (Mới, Đã xác nhận, Đã huỷ, Đã xoá).

### Trang 16: ADM-HD-010073 — Hoá đơn / Popup thêm người phụ trách / Chọn số KPI

![Trang 16](./images/adm-hd-010073.png)

**Mô tả:**
- Trạng thái popup khi mở dropdown Số KPI (bước 0.05, vd -0.2 ... 0.2).

### Trang 17: ADM-HD-010030 — Hoá đơn / Popup chỉnh sửa hoá đơn

![Trang 17](./images/adm-hd-010030.png)

**Mô tả:**
- Chỉnh sửa hoá đơn, mở từ menu ba chấm; dùng chung form với popup Thêm (Trang 9), điền sẵn dữ liệu, nút "Cập nhật".

**Điểm cần lưu ý:**
- **Người phụ trách:** hiển thị từng người phụ trách, **KPI nằm cạnh tên và chỉnh sửa được**. Tên hoá đơn tạo lại theo rule khi cập nhật.

### Trang 18: ADM-HD-010050 — Hoá đơn / Popup chọn học viên đã liên kết

![Trang 18](./images/adm-hd-010050.png)

**Mô tả:**
- Bước đầu khi bấm "Thêm học phí": chọn học viên đã liên kết với hoá đơn để thêm học phí cho học viên đó.

**Điểm cần lưu ý:**
- Hiển thị danh sách học viên **đã liên kết** hoá đơn (cột Liên kết); chọn 1 học viên → mở popup Thêm học phí (Trang 19) với học viên đó.
- Nút **Thêm học viên** mở **popup Thêm học phí ở chế độ không tick "Chọn học viên có sẵn"** (nhập Tên, Email và chọn Level, xem Trang 20). Học viên mới được tạo và liên kết vào hoá đơn.

### Trang 19: ADM-HD-010060 — Hoá đơn / Popup thêm học phí

![Trang 19](./images/adm-hd-010060.png)

**Mô tả:**
- Tạo 1 khoản học phí thuộc hoá đơn đang chọn, cho 1 học viên và 1 lớp.

**Điểm cần lưu ý:**
- Trường bắt buộc: Tên học viên, Mã học viên (khi tick), Level (khi không tick), Lớp học, Giá trị.
- Checkbox **"Chọn học viên có sẵn"** tick: Tên học viên và Mã học viên là dropdown (đồng bộ 2 chiều như Ship Sách), **Email chỉ đọc** tự điền theo học viên.
- **Lớp học:** dropdown chọn lớp. **Giá trị:** số tiền học phí, mặc định 0 đ, **không được lớn hơn "Còn lại"** của hoá đơn.
- **Ghi chú học phí**, **Ghi chú trong lớp:** không bắt buộc, hiển thị lại ở phần học phí xổ xuống của hoá đơn.

### Trang 20: ADM-HD-010061 — Hoá đơn / Popup thêm học phí / Học viên mới

![Trang 20](./images/adm-hd-010061.png)

**Mô tả:**
- Popup Thêm học phí khi bỏ tick "Chọn học viên có sẵn" (cũng là popup dùng khi bấm "Thêm học viên" ở Trang 18).

**Điểm cần lưu ý:**
- Nhập tay **Tên học viên** và **Email** của học viên mới, **không còn trường Mã học viên**, **thêm trường Level** (dropdown số tự nhiên từ 1 đến 9) để hệ thống tự tạo mã học viên.
- **Mã học viên tự tạo:** Level + 5 chữ số, vd Level 3 → `300001`. Mã không được trùng, nếu trùng thì tự tăng lên (300002, 300003...).

### Trang 21: ADM-HD-010040 — Hoá đơn / Popup xem ảnh hoá đơn

![Trang 21](./images/adm-hd-010040.png)

**Mô tả:**
- Popup `Ảnh hoá đơn` xem ảnh chuyển khoản / hoá đơn đính kèm của hoá đơn (có phân trang ảnh, vd 1 / 3).

### Trang 22: ADM-HD-010020 — Hoá đơn / Popup hồ sơ học viên / Lịch sử hoá đơn

![Trang 22](./images/adm-hd-010020.png)

**Mô tả:**
- Popup hồ sơ học viên (tab `Lịch Sử Hoá Đơn`): số hoá đơn, tổng học phí và bảng các hoá đơn của học viên (Tên hoá đơn, Trạng thái, Loại hoá đơn, Học viên, Mã học viên, Hiểu khách, Ghi chú, Ghi nhận, Ngày hẹn, Lớp dự kiến, Số tiền đã đóng, KPI, Học phí, Hình, Phụ trách, Liên kết).

### Trang 23: ADM-HD-010021 — Hoá đơn / Popup hồ sơ học viên / Lịch sử hoá đơn / Cuộn ngang tới cuối

![Trang 23](./images/adm-hd-010021.png)

**Mô tả:**
- Tab `Lịch Sử Hoá Đơn` khi cuộn ngang bảng tới các cột cuối.

### Trang 24: ADM-HD-010022 — Hoá đơn / Popup hồ sơ học viên / Lịch sử hoá đơn / Mở chi tiết học phí + hover

![Trang 24](./images/adm-hd-010022.png)

**Mô tả:**
- Tab `Lịch Sử Hoá Đơn` khi mở chi tiết học phí của một hoá đơn và hover tooltip.

### Trang 25: ADM-HD-010120 — Hoá đơn / Popup hồ sơ học viên / Lịch sử lớp

![Trang 25](./images/adm-hd-010120.png)

**Mô tả:**
- Tab `Lịch Sử Lớp` của hồ sơ học viên: số lớp, tỷ lệ Lên kỳ, Đi học, BTVN, Đạt KPI, Đánh giá và danh sách lớp học viên đã/đang học.

### Trang 26: ADM-HD-010224 — Hoá đơn / Popup hồ sơ học viên / Ghi chú / Trống

![Trang 26](./images/adm-hd-010224.png)

**Mô tả:**
- Tab `Ghi Chú` của hồ sơ học viên khi chưa có ghi chú (`Chưa có ghi chú`, gõ nhanh nội dung và nhấn Enter để tạo).

### Trang 27: ADM-HD-010225 — Hoá đơn / Popup hồ sơ học viên / Ghi chú / Có ghi chú & bình luận

![Trang 27](./images/adm-hd-010225.png)

**Mô tả:**
- Tab `Ghi Chú` khi đã có ghi chú và bình luận (lọc Loại, Độ ưu tiên, thời gian; mỗi ghi chú có tiêu đề, người tạo, thời gian, nội dung, số bình luận).

### Trang 28: ADM-HD-010230 — Hoá đơn / Popup hồ sơ học viên / Popup thêm ghi chú

![Trang 28](./images/adm-hd-010230.png)

**Mô tả:**
- Popup `Thêm ghi chú` gồm Tiêu đề *, Nội dung, Loại (mặc định Công khai), Độ ưu tiên (mặc định Bình thường); nút `Huỷ`, `Thêm`.

### Trang 29: ADM-HD-010231 — Hoá đơn / Popup hồ sơ học viên / Popup thêm ghi chú / Mở Loại

![Trang 29](./images/adm-hd-010231.png)

**Mô tả:**
- Popup `Thêm ghi chú` khi mở dropdown Loại (Công khai, Riêng tư, Quan trọng, Rất quan trọng).

### Trang 30: ADM-HD-010080 — Hoá đơn / Popup thêm (thao tác học viên)

![Trang 30](./images/adm-hd-010080.png)

**Mô tả:**
- Popup `Thêm` gồm các thao tác trên học viên: `Thêm Tag`, `Thêm Lịch Hẹn`, `Xem lịch sử`.

### Trang 31: ADM-HD-010081 — Hoá đơn / Popup thêm / Chọn Xem lịch sử

![Trang 31](./images/adm-hd-010081.png)

**Mô tả:**
- Popup `Thêm` khi chọn `Xem lịch sử` (mở hồ sơ học viên, Trang 22).

### Trang 32: ADM-HD-010082 — Hoá đơn / Popup thêm / Chọn Thêm Lịch Hẹn

![Trang 32](./images/adm-hd-010082.png)

**Mô tả:**
- Popup `Thêm` khi chọn `Thêm Lịch Hẹn` (mở popup thêm lịch hẹn, Trang 34).

### Trang 33: ADM-HD-010090 — Hoá đơn / Popup thêm tag

![Trang 33](./images/adm-hd-010090.png)

**Mô tả:**
- Popup `Thêm tag`: ô tìm kiếm và danh sách tag (vd Học phí, Cọc 12 buổi, Bắt buộc lên kỳ, Bỏ cọc, Bổ sung cọc); nút `Huỷ`, `Xác nhận`.

### Trang 34: ADM-HD-010110 — Hoá đơn / Popup thêm lịch hẹn

![Trang 34](./images/adm-hd-010110.png)

**Mô tả:**
- Popup `Thêm lịch hẹn`: Trung Tâm, Nội dung, Thời gian, Độ ưu tiên, Người phụ trách, Theo dõi, Ghi chú; nút `Huỷ`, `Xác nhận`.

### Trang 35: ADM-HD-010111 — Hoá đơn / Popup cập nhật lịch hẹn

![Trang 35](./images/adm-hd-010111.png)

**Mô tả:**
- Popup `Cập nhật lịch hẹn` điền sẵn dữ liệu lịch hẹn; nút `Huỷ`, `Cập nhật`.

### Trang 36: ADM-HD-010130 — Hoá đơn / Popup danh sách lịch hẹn

![Trang 36](./images/adm-hd-010130.png)

**Mô tả:**
- Popup `Danh sách lịch hẹn` gồm Thời gian, Nội dung, Ghi chú, Người phụ trách, Đối tượng, Trạng thái.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Thêm hoá đơn**

```
Bấm "+" → Popup Thêm hoá đơn (Trạng thái = Mới, Ngày ghi nhận = hôm nay)
        → Nhập thông tin (thêm người phụ trách qua popup nếu cần)
        → Tên hoá đơn tự động tạo
        → Bấm "Thêm" → FE validate → BE tạo hoá đơn → Đóng popup → Danh sách cập nhật
```

**Flow 2: Đồng bộ với CG**

```
Tạo hoá đơn bên CG → Đồng bộ sang ICS → Hoá đơn hiển thị trong danh sách ICS
Tạo hoá đơn bên ICS → Đồng bộ sang CG
Bên CG: không sửa / xoá hoá đơn, chỉ sửa KPI
Bên ICS: chỉnh sửa đầy đủ (kể cả hoá đơn có nguồn từ CG)
Học phí: chỉ thêm được bên ICS
Cùng sửa 1 hoá đơn ở 2 bên → bên lưu trước được ưu tiên
        → Bên lưu sau nhận thông báo "đã có dữ liệu mới, vui lòng reload trang"
```

**Flow 3: Chọn học viên có sẵn khi tạo hoá đơn**

```
Tick "Chọn học viên có sẵn" → Tên (dropdown) + Mã học viên (dropdown)
        ├─ Chọn Tên → Mã học viên tự điền
        └─ Chọn Mã học viên → Tên tự điền
```

**Flow 4: Chỉnh sửa hoá đơn**

```
Ba chấm > Chỉnh sửa → Popup Chỉnh sửa (điền sẵn dữ liệu, KPI người phụ trách sửa được)
        → Sửa thông tin → Bấm "Cập nhật" → FE validate → BE lưu
        → Đóng popup → Danh sách cập nhật, tên hoá đơn tạo lại theo rule
```

**Flow 5: Xem học phí của hoá đơn**

```
Bấm vào item hoá đơn → Xổ xuống phần học phí của hoá đơn đó
        → Hover Học viên / Lớp xem tooltip thông tin
        → Bấm lại → Thu gọn
```

**Flow 6: Thêm học phí**

```
Ba chấm > Thêm học phí → Popup chọn học viên đã liên kết hoá đơn
        ├─ Bấm "Thêm học viên" → Popup Thêm học phí (không tick "Chọn học viên có sẵn")
        │       → Nhập Tên, Email, chọn Level → Hệ thống tự tạo mã học viên
        │       → Học viên mới được liên kết vào hoá đơn
        └─ Chọn học viên đã liên kết → Popup Thêm học phí (tick "Chọn học viên có sẵn")
                ├─ Tick → Tên / Mã (dropdown), Email tự điền
                └─ Bỏ tick → Nhập Tên + Email + Level (không có Mã học viên)
        → Chọn Lớp học, nhập Giá trị (không vượt "Còn lại"), ghi chú → Bấm "Thêm" → FE validate → BE tạo học phí
        → Đóng popup → Phần học phí, cột Học phí, "Còn lại" cập nhật
```

**Flow 7: Copy tên hoá đơn**

```
Ba chấm > Copy → FE copy tên hoá đơn vào clipboard → Thông báo đã copy
```

**Flow 8: Xoá hoá đơn**

```
Ba chấm > Xoá hoá đơn → Popup xác nhận xoá
        ├─ Xác nhận → BE xoá mềm và đồng bộ học phí/số dư mọi học viên liên kết
        │       → Khoản học phí của hoá đơn đã xoá không còn hiệu lực; tính lại từ dữ liệu còn hiệu lực
        │       → Hoá đơn biến mất, tải lại số liệu học viên và học phí theo lớp liên quan
        └─ Huỷ → Đóng popup, không thay đổi
```

**Flow 9: Lọc và tìm kiếm**

```
Vào màn hình → Áp dụng bộ lọc đã lưu của user (chưa có thì Thời gian = Hôm nay)
Chọn bộ lọc / nhập từ khoá → FE gọi API với điều kiện lọc → BE lưu bộ lọc theo user
        → Danh sách, phân trang và các thẻ thống kê cập nhật theo kết quả lọc
```

**Flow 10: Thêm người phụ trách và KPI**

```
Popup Thêm hoá đơn → Bấm "+" cạnh Người phụ trách → Popup Thêm người phụ trách
        → Chọn Người phụ trách, Trạng thái, Số KPI (-10 đến 10, bước 0.05) → Xác nhận
        → Avatar người phụ trách hiển thị trong popup hoá đơn
Popup Chỉnh sửa → Sửa KPI cạnh tên người phụ trách → "Cập nhật" → Cột KPI, thẻ Tổng KPI cập nhật
```

### 2.2. Ngoại lệ

- **EX01:** Bấm "Thêm" / "Cập nhật" khi thiếu trường bắt buộc → Báo lỗi tại trường thiếu, không lưu, popup không đóng.
- **EX02:** Bấm "Thêm" ở popup Thêm học phí khi chưa chọn Lớp học, chưa nhập Giá trị (hoặc chưa chọn Level khi không tick) → Báo lỗi, không tạo học phí.
- **EX03:** Hoá đơn chưa có học viên liên kết khi bấm "Thêm học phí" → Popup chọn học viên hiển thị danh sách rỗng, người dùng bấm "Thêm học viên" để tiếp tục.
- **EX04:** Bỏ tick "Chọn học viên có sẵn" ở Thêm học phí, nhập Email sai định dạng → Báo lỗi định dạng email, không lưu.
- **EX05:** Tệp đính kèm sai định dạng (ngoài PDF, DOC, DOCX, PPT, PPTX) hoặc vượt 20MB → Từ chối file, báo lỗi, không đính kèm.
- **EX06:** Thêm / sửa / xoá / thêm học phí thất bại (lỗi hệ thống hoặc đồng bộ CG) → Báo lỗi, giữ nguyên dữ liệu trước đó.
- **EX07:** Mã học viên tự tạo bị trùng → Hệ thống tự tăng số lên đến khi không trùng.
- **EX08:** Hoá đơn (vd KPI) bị sửa đồng thời ở ICS và CG → Giữ dữ liệu của bên lưu trước, bên lưu sau không ghi đè và nhận thông báo "đã có dữ liệu mới, vui lòng reload trang".
- **EX09:** Giá trị học phí lớn hơn "Còn lại" của hoá đơn → Báo lỗi, không tạo học phí (Còn lại không được âm).

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Tên hoá đơn tự động | Tên tạo theo rule: `[Loại hoá đơn] - [Lớp dự kiến] - [Mã học viên] - [Tên học viên] - [Quy đổi (VND)] - [Tài khoản nhận]` (vd: `[SALE] Mới - DN1_ - 103303 - Tai Nguyen - 680.000 đ - ...`). Không nhập trực tiếp. Tự cập nhật khi một trong các thành phần đổi. **Thành phần nào trống thì bỏ thành phần đó** (kèm dấu phân cách của nó). |
| REQ02 | Đồng bộ Tên - Mã học viên | Khi tick "Chọn học viên có sẵn" (popup hoá đơn và popup học phí), chọn Tên hoặc Mã thì trường còn lại tự điền theo, giống Ship Sách. |
| REQ03 | Đồng bộ với CG | Hoá đơn thêm bên CG hiển thị bên ICS và ngược lại. Bên CG không được sửa / xoá hoá đơn, chỉ được sửa KPI. Bên ICS chỉnh sửa đầy đủ. Học phí chỉ thêm được bên ICS. Khi 2 bên cùng sửa thì bên lưu trước được ưu tiên, bên lưu sau nhận thông báo "đã có dữ liệu mới, vui lòng reload trang". |
| REQ04 | Cột Học phí | Cột Học phí = số lượng học phí của hoá đơn, phải khớp số dòng ở phần học phí xổ xuống (sửa lỗi đang hiển thị 0 khi thực tế là 1). |
| REQ05 | Menu ba chấm | Giai đoạn này chỉ làm: Thêm học phí, Chỉnh sửa, Copy, Xoá hoá đơn. Lịch sử hành động, Xuất hoá đơn hiển thị nhưng disable. |
| REQ06 | Copy | Copy chỉ copy **tên hoá đơn** vào clipboard, không tạo hoá đơn mới. |
| REQ07 | Xoá mềm có xác nhận và đồng bộ học phí | Xoá hoá đơn phải xác nhận và là xoá mềm. Đồng bộ các khoản học phí, số dư của tất cả học viên liên kết và học phí theo lớp liên quan; học phí thuộc hoá đơn đã xoá không còn hiệu lực. Tính lại số liệu từ hoá đơn/học phí còn hiệu lực và tải lại các màn liên quan. Chỉ báo thành công khi đồng bộ hoàn tất; Huỷ/lỗi giữ nguyên toàn bộ, không cập nhật dở dang hoặc tự tạo giao dịch hoàn tiền. |
| REQ08 | KPI người phụ trách | Mỗi người phụ trách có Trạng thái (Mới, Đã xác nhận, Đã huỷ, Đã xoá; chỉ ghi nhận, không ảnh hưởng hiển thị / KPI) và Số KPI (từ -10 đến 10, bước 0.05). Thêm qua popup Thêm người phụ trách; trong popup Chỉnh sửa, KPI cạnh tên người phụ trách sửa trực tiếp được. Cột KPI = tổng KPI các người phụ trách; thẻ Tổng KPI lấy từ dữ liệu này. |
| REQ09 | Thêm học phí 2 bước | Bấm Thêm học phí → popup chọn học viên đã liên kết hoá đơn (có nút Thêm học viên) → popup Thêm học phí. |
| REQ10 | Học viên mới và mã tự tạo | Khi không tick "Chọn học viên có sẵn" (kể cả khi vào từ nút Thêm học viên ở popup chọn học viên liên kết): nhập Tên, Email, chọn Level (số tự nhiên 1-9), ẩn trường Mã học viên. Mã = Level + 5 chữ số (vd Level 3 → 300001), không trùng, trùng thì tự tăng. Học viên mới được liên kết vào hoá đơn. |
| REQ11 | Màu loại hoá đơn | 14 loại hoá đơn, mỗi loại 1 màu cố định lấy theo Figma. |
| REQ12 | Bộ lọc theo user | Bộ lọc (Nhận tiền, Hoá đơn đỏ, Người phụ trách, Thời gian, Loại hoá đơn, Trạng thái, Tag) lưu riêng theo từng user. Mặc định Thời gian = Hôm nay áp dụng cho Ngày ghi nhận; Tới hạn = từ hôm nay trở về trước. Các thẻ thống kê đổi theo bộ lọc (Số ngày = số ngày của khoảng lọc). |
| REQ13 | Tiền tệ, quy đổi | Đơn vị: VND, USD, EUR, JPY, CNY, KRW, GBP. VND thì Quy đổi tự điền bằng Số tiền nhưng vẫn sửa được; khác VND thì không tự quy đổi, bắt buộc nhập tay Quy đổi. |
| REQ14 | Tài khoản nhận | Gồm: Tài khoản cá nhân, Tài khoản công ty, Tiền mặt, Khác. |
| REQ15 | Số tiền đã đóng / Còn lại | Số tiền đã đóng = số tiền làm hoá đơn bên CG. Còn lại = Số tiền đã đóng − tổng học phí đã thêm. **Còn lại không được âm:** Giá trị học phí không được vượt Còn lại (vd Còn lại 500.000 đ thì học phí tối đa 500.000 đ; phần còn thiếu user tự tạo ở hoá đơn khác). |
| REQ16 | Hoá đơn đỏ | Bộ lọc Hoá đơn đỏ dựa vào checkbox "Xuất hoá đơn công ty": tick = Đã tạo, không tick = Chưa có. |
| REQ17 | Tệp đính kèm | Hỗ trợ PDF, DOC, DOCX, PPT, PPTX, tối đa 20MB mỗi file; hiển thị ở cột Hình. |
| REQ18 | Trung tâm | Danh sách có bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số và phân trang chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header. Khi tạo mới bắt buộc chọn `Trung tâm`; bản ghi được lưu thuộc trung tâm đã chọn. Backend kiểm tra lại trung tâm khi lưu, không chỉ dựa vào UI. |

### 2.4. Ràng buộc

#### Quyền

| Role | Xem | Thêm / Sửa | Xoá | Thêm học phí | Copy |
|---|:---:|:---:|:---:|:---:|:---:|
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ |

#### Ràng buộc khác

- Màn Hoá đơn thuộc role Admin.
- Popup Chỉnh sửa dùng chung form với popup Thêm và chỉ mở từ menu ba chấm.
- Tên hoá đơn không cho nhập tay.
- Xoá là xoá mềm.
- Tên và mã học viên khi chọn học viên có sẵn luôn khớp nhau.
- Bộ lọc Người phụ trách, Loại hoá đơn, Trạng thái, Tag cho chọn nhiều; Nhận tiền, Hoá đơn đỏ và Thời gian chọn 1 giá trị.
- Số KPI chỉ nhận giá trị từ -10 đến 10, bước 0.05.
- Mã học viên tự tạo phải duy nhất.
- Bên CG không được sửa / xoá hoá đơn, chỉ sửa KPI; bên ICS chỉnh sửa đầy đủ; học phí chỉ thêm bên ICS.
- Còn lại của hoá đơn không được âm.

---

## 3. Testcase

### Feature: Hoá Đơn

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Thêm hoá đơn thành công | High | Flow 1 / REQ01 / REQ13 | Admin | Đang ở màn Danh Sách Hoá Đơn | **Given:** Bấm "+"<br>**When:** Nhập đủ trường bắt buộc, bấm "Thêm"<br>**Then:** Hệ thống tạo hoá đơn | - Popup mặc định Trạng thái = Mới, Ngày ghi nhận = hôm nay<br>- Hoá đơn mới xuất hiện trong danh sách<br>- Tên hoá đơn tạo đúng rule, thành phần trống thì bị bỏ<br>- Đơn vị VND: Quy đổi tự điền = Số tiền và vẫn sửa được<br>- Đơn vị khác VND: bắt buộc nhập tay Quy đổi, thiếu thì báo lỗi |
| Case 2: Thêm hoá đơn thiếu trường bắt buộc | High | EX01 | Admin | Popup Thêm đang mở | **Given:** Bỏ trống 1 trường bắt buộc<br>**When:** Bấm "Thêm"<br>**Then:** Hệ thống kiểm tra | - Báo lỗi tại trường thiếu<br>- Không lưu, popup không đóng |
| Case 3: Chọn học viên có sẵn, đồng bộ Tên - Mã | High | Flow 3 / REQ02 | Admin | Có danh sách học viên | **Given:** Tick "Chọn học viên có sẵn"<br>**When:** Chọn Tên rồi đổi sang chọn Mã học viên khác<br>**Then:** Hệ thống đồng bộ 2 dropdown | - Chọn Tên → Mã tự điền<br>- Chọn Mã → Tên tự điền |
| Case 4: Chỉnh sửa hoá đơn và KPI | High | Flow 4 / Flow 10 / REQ08 | Admin | Có hoá đơn có người phụ trách | **Given:** Ba chấm > Chỉnh sửa, popup điền sẵn dữ liệu<br>**When:** Đổi Loại hoá đơn, sửa KPI cạnh tên người phụ trách, bấm "Cập nhật"<br>**Then:** Hệ thống lưu | - Danh sách hiển thị dữ liệu mới, tên hoá đơn tạo lại theo rule<br>- Cột KPI và thẻ Tổng KPI cập nhật<br>- Bấm vào item hoá đơn không mở popup Chỉnh sửa |
| Case 5: Xổ học phí và cột Học phí | High | Flow 5 / REQ04 | Admin | Hoá đơn có 1 học phí | **Given:** Danh sách hoá đơn<br>**When:** Bấm vào item hoá đơn, hover Học viên / Lớp<br>**Then:** Quan sát phần xổ xuống và cột Học phí | - Xổ xuống bảng học phí đúng dữ liệu<br>- Cột Học phí = 1 (khớp số dòng)<br>- Tooltip học viên (Tên, SĐT, Email, icon copy), tooltip lớp hiển thị đúng |
| Case 6: Thêm học phí cho học viên đã liên kết | High | Flow 6 / REQ09 / REQ15 / EX09 | Admin | Hoá đơn có ít nhất 1 học viên liên kết, Số tiền đã đóng 1.000.000 đ | **Given:** Ba chấm > Thêm học phí<br>**When:** Chọn học viên ở popup, chọn Lớp, nhập Giá trị, bấm "Thêm" (thử Giá trị hợp lệ, thiếu Lớp, và Giá trị lớn hơn Còn lại)<br>**Then:** Hệ thống kiểm tra và tạo học phí | - Hiện popup chọn học viên liên kết trước, sau đó mới hiện popup Thêm học phí<br>- Hợp lệ: học phí xuất hiện ở phần xổ xuống, cột Học phí tăng 1, Còn lại = Số tiền đã đóng − tổng học phí<br>- Thiếu Lớp / Giá trị: báo lỗi<br>- Giá trị > Còn lại: báo lỗi, không tạo (Còn lại không âm) |
| Case 7: Thêm học viên mới, mã tự tạo theo Level | High | Flow 6 / REQ10 / EX02 / EX03 / EX04 / EX07 | Admin | Hoá đơn chưa có học viên liên kết hoặc muốn thêm mới | **Given:** Popup chọn học viên liên kết (danh sách rỗng hoặc có sẵn)<br>**When:** Bấm "Thêm học viên", nhập Tên, Email (thử sai rồi đúng), chọn Level (1-9, vd 3), Lớp, Giá trị, bấm "Thêm"<br>**Then:** Hệ thống tạo học viên và học phí | - Popup không có trường Mã học viên, có trường Level<br>- Email sai: báo lỗi, không lưu<br>- Mã = Level + 5 chữ số (vd 300001), trùng thì tự tăng (300002...)<br>- Học viên mới được liên kết vào hoá đơn |
| Case 8: Đồng bộ với CG | High | Flow 2 / REQ03 / EX06 / EX08 | Admin | Có hoá đơn tạo bên CG | **Given:** Hoá đơn tạo bên CG<br>**When:** Kiểm tra bên ICS; sửa / xoá hoá đơn và sửa KPI ở bên CG; sửa cùng 1 hoá đơn đồng thời ở 2 bên; giả lập lỗi đồng bộ<br>**Then:** Hệ thống đồng bộ | - Hoá đơn CG hiển thị bên ICS (và ngược lại)<br>- Bên CG không sửa / xoá được hoá đơn, chỉ sửa được KPI<br>- Bên ICS chỉnh sửa đầy đủ, học phí chỉ thêm được bên ICS<br>- Sửa đồng thời: giữ bản lưu trước, bên lưu sau nhận thông báo "đã có dữ liệu mới, vui lòng reload trang"<br>- Lỗi: báo lỗi, giữ nguyên dữ liệu trước đó |
| Case 9: Bộ lọc lưu theo user và tệp đính kèm | High | Flow 9 / REQ11 / REQ12 / REQ16 / REQ17 / EX05 | Admin (2 user) | Có nhiều hoá đơn nhiều loại, trạng thái, người phụ trách | **Given:** User 1 và user 2 cùng vào màn hình lần đầu<br>**When:** User 1 chọn Hôm qua + loại [SALE] Mới, user 2 giữ Hôm nay; reload; thử các bộ lọc Nhận tiền, Hoá đơn đỏ, Tag; đính kèm file sai định dạng hoặc trên 20MB<br>**Then:** Quan sát danh sách, thẻ thống kê và tệp đính kèm | - Mặc định Thời gian = Hôm nay (theo Ngày ghi nhận)<br>- Mỗi user thấy đúng bộ lọc của mình, giữ nguyên sau reload<br>- Hoá đơn đỏ: Đã tạo = đã tick Xuất hoá đơn công ty<br>- Thẻ thống kê đổi theo bộ lọc; mỗi loại hoá đơn đúng màu cố định<br>- File sai định dạng / quá 20MB bị từ chối, báo lỗi |
| Case 10: Copy tên, xoá mềm hoá đơn và menu disable | High | Flow 7 / Flow 8 / REQ05 / REQ06 / REQ07 | Admin | Có ít nhất 1 hoá đơn | **Given:** Mở menu ba chấm<br>**When:** Bấm Copy, dán nội dung; bấm Xoá hoá đơn, ở popup bấm Huỷ rồi thử lại và bấm Xác nhận; bấm Lịch sử hành động / Xuất hoá đơn<br>**Then:** Hệ thống xử lý | - Clipboard là tên hoá đơn, không tạo hoá đơn mới<br>- Huỷ/lỗi: hoá đơn, học phí và số dư giữ nguyên; Xác nhận thành công: hoá đơn biến mất (xoá mềm), đồng bộ học phí và số dư mọi học viên liên kết<br>- Khoản học phí của hoá đơn đã xoá không còn hiệu lực; số liệu học viên/lớp liên quan tính lại từ dữ liệu còn hiệu lực<br>- Lịch sử hành động, Xuất hoá đơn hiển thị nhưng disable, không bấm được |
| Case 11: Lọc danh sách theo trung tâm | High | REQ18 | Admin | Có hoá đơn ở trung tâm A và trung tâm B | **Given:** bộ lọc `Trung tâm` chưa chọn giá trị nào<br>**When:** chọn trung tâm B ở bộ lọc `Trung tâm`, sau đó bỏ chọn<br>**Then:** danh sách chỉ hiển thị hoá đơn của trung tâm B | - Không lẫn dữ liệu của trung tâm A<br>- Tổng số và phân trang cập nhật theo trung tâm B<br>- Bỏ chọn thì hiển thị lại dữ liệu của mọi trung tâm |
| Case 12: Bắt buộc chọn trung tâm khi tạo | High | REQ18 | Admin | Popup tạo hoá đơn đang mở | **Given:** các field bắt buộc khác hợp lệ<br>**When:** bỏ trống `Trung tâm` rồi xác nhận; sau đó chọn trung tâm A và xác nhận<br>**Then:** thiếu Trung tâm thì không tạo; chọn A thì tạo thành công | - Báo lỗi tại field Trung tâm khi bỏ trống<br>- Hoá đơn mới thuộc trung tâm A; lọc trung tâm A thì thấy, lọc trung tâm B thì không thấy |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Các popup hồ sơ học viên (Lịch Sử Hoá Đơn, Lịch Sử Lớp, Ghi Chú), thêm tag, thêm / cập nhật / danh sách lịch hẹn, thêm ghi chú (Trang 22–36) đã có thiết kế Figma nhưng requirement Hoá đơn chưa đặc tả hành vi. Cần bổ sung hay tham chiếu requirement riêng (hồ sơ học viên, tag, lịch hẹn, ghi chú)?
