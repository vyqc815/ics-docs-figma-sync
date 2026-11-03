# Chi tiết lớp học — Tab OT của Phụ trách lớp

Tab OT dùng cùng logic phân quyền, người nhận, trạng thái và ghi chú của [Tab KPI](./class_detail_kpi_requirements.md), theo xác nhận “OT cũng vậy” của người dùng. Khác biệt: OT quản lý riêng, không hiển thị hoặc cộng vào Chi phí PTL/Tổng chi PTL tại [Danh sách lớp](./class_management_requirements.md). Ba ảnh dưới đây là UI tham chiếu cho OT. Tên người nhận và thông tin OT hiển thị theo dữ liệu thực tế; nội dung mẫu nhắc Giáo viên/KPI không thay đổi quyền hoặc tự sinh khoản KPI.

## 1. UI

### Trang 1: Tab OT — Danh sách và tìm kiếm
![Trang 1](./images/34-class-detail-ot.png)

*Danh sách OT — nhấn để xem ảnh gốc*

**Mô tả:** Admin và Class Handler được xem, thêm, sửa, xóa và xác nhận OT trong phạm vi lớp. Handler được xác nhận khoản của chính mình.

**Giải thích field/thành phần:**

- `A01.01` **Cài đặt OT và +**: Mở popup `Gắn OT`.
- `A01.02` **Tìm kiếm**: Theo tên Handler nhận OT; tìm toàn bộ dữ liệu lớp, không chỉ dòng đã tải.
- `A01.03` **Tên**: Người nhận của khoản OT; mỗi khoản đúng một Handler.
- `A01.04` **Ngày ghi nhận**: Ngày của Thời gian thực hiện nhập trong popup; lưu cả giờ.
- `A01.05` **Trạng thái**: Mới, Đã xác nhận, Đã hủy; Đã xóa không hiển thị trong bảng.
- `A01.06` **Số tiền**: Tiền thực tế đã lưu, định dạng VND và dấu phân cách hàng nghìn.
- `A01.07` **Ghi chú**: Mở ghi chú/lịch sử của đúng khoản OT.
- `A01.08` **Ngày cập nhật**: Lần cập nhật gần nhất do máy chủ ghi.
- `A01.09` **X**: Popup xác nhận xóa khoản chưa xác nhận.

**Điểm cần lưu ý:**

- Chỉ Admin/Class Handler được truy cập. Support, Teacher và role khác không xem hoặc CRUD, kể cả gọi API trực tiếp.
- Một Handler có thể có nhiều khoản OT trong cùng lớp; không gộp khoản chỉ vì trùng tên.
- Đã hủy vẫn hiển thị và được tìm kiếm; Đã xóa ẩn khỏi danh sách, giữ audit.
- Bấm tên/vùng thông tin mở popup sửa hoặc xem; thao tác trạng thái, ghi chú và X không đồng thời mở form sửa.

### Trang 2: Popup thêm và chỉnh sửa OT
![Trang 2](./images/35-class-ot-edit-popup.png)

*Form thêm dùng cùng field với form chỉnh sửa — nhấn để xem ảnh gốc*

**Mô tả:** Nút + mở `Gắn OT`; mở khoản Mới để `Chỉnh sửa OT`. Khoản xác nhận chỉ đọc; khả năng sửa/phục hồi khoản Đã hủy cần chốt riêng. Hai chế độ dùng cùng field; ảnh dropdown mở có tiêu đề Gắn OT dù tên file là Chỉnh sửa OT.

**Giải thích field/thành phần:**

- `A02.01` **Người nhận**: Bắt buộc một Class Handler, không multi-select và không chọn role khác.
- `A02.02` **Số tiền**: Nhập tùy ý, không ép bằng giá trị gốc, không áp trần mẫu hoặc kiểm tra tự động điều kiện trong mô tả. Phải là giá trị số có thể đọc/lưu được.
- `A02.03` **Thời gian thực hiện**: Ngày và giờ ghi nhận người dùng nhập.
- `A02.04` **Trạng thái**: Mặc định Mới khi thêm; chọn theo rule trạng thái bên dưới.
- `A02.05` **Thông tin OT**: Khối chỉ đọc gồm Tên, Mô tả và Giá trị gốc của cấu hình OT. Giá trị gốc chỉ để tham chiếu, không ép số tiền nhập.
- `A02.06` **Hủy bỏ**: Đóng form và bỏ draft; không chuyển trạng thái Đã hủy.
- `A02.07` **Cập nhật**: Nút lưu theo ảnh; validate rồi lưu khoản được gắn/chỉnh và cập nhật danh sách OT sau thành công.

**Điểm cần lưu ý:**

- Không tự tính tiền theo số học viên lên kỳ hoặc chặn vì chưa đạt mô tả mẫu. Người dùng quyết định giá trị thực tế.
- Popup OT không có nút `Dùng giá trị gốc` như KPI; không tự thêm nút này. Không tự sinh KPI từ mô tả mẫu trong khối Thông tin OT.
- Rule tiền âm/0/phần lẻ chưa chốt; không tự đặt giới hạn nghiệp vụ ngoài khả năng parse/lưu số tiền.
- Một người được thêm nhiều khoản độc lập; bấm lặp cùng request tạo chỉ một khoản.
- Ngày cập nhật lấy máy chủ khi tạo/sửa/trạng thái/ghi chú thành công; xem/search/Hủy draft không đổi mốc này.
- Khoản xác nhận khóa người nhận, tiền, thời gian, ghi chú và trạng thái. Không có flow mở lại/đảo OT.

### Trang 3: Dropdown trạng thái và xác nhận
![Trang 3](./images/36-class-ot-status-popup.png)

*Bốn trạng thái OT — nhấn để xem ảnh gốc*

**Mô tả:** Trạng thái quyết định khả năng sửa và hiển thị khoản OT; mọi trạng thái OT đều không tính vào chi PTL trên danh sách lớp.

**Giải thích field/thành phần:**

- `A03.01` **Mới**: Hiển thị: Có; Tính chi PTL ở danh sách lớp: Không; Quy tắc: Sửa, xác nhận, hủy hoặc xóa.
- `A03.02` **Đã xác nhận**: Hiển thị: Có; Tính chi PTL ở danh sách lớp: Không; Quy tắc: Khóa mọi thay đổi; Handler được tự xác nhận khoản của mình.
- `A03.03` **Đã hủy**: Hiển thị: Có; Tính chi PTL ở danh sách lớp: Không; Quy tắc: Giữ để xem; có thể xóa nếu chưa xác nhận. Phục hồi chưa chốt.
- `A03.04` **Đã xóa**: Hiển thị: Không; Tính chi PTL ở danh sách lớp: Không; Quy tắc: Xóa mềm; giữ audit.

**Điểm cần lưu ý:**

- Dropdown tại dòng lưu sau khi chọn và backend thành công; trong popup chỉ là draft đến Cập nhật.
- Đã xác nhận không được sửa tiền/người, về Mới, hủy hoặc xóa. Không tự tạo điều chỉnh bảng lương.
- Chọn Đã xóa trong dropdown phải dùng cùng popup xác nhận như X.
- Xác nhận khoản OT không đồng nghĩa đã thanh toán cho Handler, không cộng vào chỉ số chi PTL hoặc tự tạo KPI.

### Trang 4: Xóa khoản OT
**Mô tả:** X hoặc Đã xóa mở popup xác nhận cho khoản chưa xác nhận.

**Giải thích field/thành phần:**

- `A04.01` **Popup**: `Xóa khoản OT?` — `Khoản OT của {Handler} với số tiền {tiền} sẽ được ẩn khỏi danh sách. Lịch sử vẫn được lưu.`
- `A04.02` **Hủy bỏ**: Đóng, giữ dữ liệu.
- `A04.03` **Xác nhận xóa**: Kiểm tra quyền/trạng thái mới nhất, chuyển Đã xóa rồi ẩn dòng.

**Điểm cần lưu ý:**

- Không xóa tài khoản, cấu hình mẫu hoặc audit.
- Không có X hoạt động trên khoản xác nhận; API cũng chặn.
- Xóa lặp không tạo nhiều thao tác logic.

### Trang 5: Ghi chú, lịch sử và Copy
![Trang 5](./images/16-class-detail-student-note.png)

*Dùng lại UI popup ghi chú của tab Học viên; tiêu đề khi dùng cho OT là Ghi chú OT.*

![Trang 5](./images/19-class-detail-student-note-history.png)

*Dùng lại UI Lịch sử ghi chú: nội dung, người chỉnh sửa, thời điểm và Copy từng phiên bản.*

**Mô tả:** Click icon ghi chú tại dòng OT mở popup/popover giống [Tab Học viên](./class_detail_students_requirements.md): có ô nhập văn bản để gõ/chỉnh nội dung và icon xem lịch sử chỉnh sửa ngay cạnh tiêu đề. Nội dung và lịch sử thuộc đúng khoản OT, không phải ghi chú học viên.

**Giải thích field/thành phần:**

- `A05.01` **Popup ghi chú**: Dùng bố cục của tab Học viên; tiêu đề `Ghi chú OT` và icon lịch sử cạnh tiêu đề. Click không mở đồng thời form chỉnh sửa OT.
- `A05.02` **Ô nhập nội dung (textarea)**: Hiển thị nội dung hiện tại; cho gõ/chỉnh văn bản nhiều dòng ở khoản Mới. Nếu chưa có ghi chú, ô nhập trống. Không thêm dropdown loại ghi chú.
- `A05.03` **Lưu nội dung**: Theo cơ chế lưu ghi chú của tab Học viên; lưu phiên bản và cập nhật Ngày cập nhật sau backend thành công. Quyền sửa khoản Đã hủy cần chốt riêng.
- `A05.04` **Icon lịch sử**: Click mở popup `Lịch sử ghi chú` của đúng khoản OT trong lớp, giống UI lịch sử của tab Học viên.
- `A05.05` **Mỗi phiên bản**: Nội dung đầy đủ, avatar/tên người tạo hoặc chỉnh sửa, thời điểm máy chủ; mới nhất trước. Không ghi đè phiên bản cũ.
- `A05.06` **Copy**: Icon ở từng bản ghi; copy đúng nội dung của phiên bản được bấm, không kèm metadata.

**Điểm cần lưu ý:**

- Đã xác nhận chỉ xem/Copy; không sửa ghi chú.
- Chỉ Admin/Class Handler dùng phần ghi chú OT; tái sử dụng UI không kế thừa quyền Support của tab Học viên.
- Ghi chú và lịch sử lưu theo `class_id + ot_id`; không dùng `student_id` hoặc chỉ tên Handler để xác định bản ghi.
- Gõ/chỉnh chỉ thay đổi draft; mỗi lần lưu nội dung mới thành công mới tạo phiên bản. Không tạo lịch sử sau từng phím gõ hoặc khi chỉ mở popup.
- Không sửa/xóa lịch sử; không thực thi HTML/script.
- Copy không tạo phiên bản hoặc đổi ngày cập nhật.
- Không âm thầm ghi đè khi hai người sửa cùng phiên bản; cảnh báo xung đột và cho tải lại. Lưu lỗi giữ draft, không tạo lịch sử thành công giả.
- Sửa ghi chú không thay đổi tiền, trạng thái OT hoặc Tổng chi PTL.

### Trang 6: Tách OT khỏi Chi phí PTL trên danh sách lớp
**Mô tả:** Tab OT chỉ hiển thị/quản lý khoản OT của lớp. Không đưa OT vào Chi phí PTL hoặc Tổng chi PTL trên danh sách lớp như KPI.

**Giải thích field/thành phần:**

- `A06.01` **Chi phí PTL của lớp**: Cách tính: Giữ công thức chỉ cộng KPI Đã xác nhận; không cộng bất kỳ khoản OT nào.
- `A06.02` **Tổng chi PTL**: Cách tính: Giữ tổng từ KPI của tập lớp thỏa filter; OT không tác động số tiền.
- `A06.03` **Chỉ số OT tại danh sách lớp**: Cách tính: Không thêm cột/thẻ tổng chi OT vào danh sách lớp trong phạm vi requirement này.

**Điểm cần lưu ý:**

- Mới/Đã xác nhận/Đã hủy/Đã xóa của OT đều không tham gia các chỉ số chi PTL.
- Tạo/sửa/xác nhận/hủy/xóa/ghi chú/search OT không thay đổi KPI hay các tổng KPI đã chốt.
- Ví dụ lớp có KPI Đã xác nhận 500.000đ và OT Đã xác nhận 200.000đ → Chi phí PTL trên list vẫn 500.000đ, không phải 700.000đ.
- OT có định danh và loại khoản riêng; không dùng chung bản ghi KPI rồi thay nhãn hiển thị.
- Nghiệp vụ tổng hợp/chi trả OT ở màn khác nằm ngoài phạm vi; không suy diễn OT không được thanh toán.

### Trang 7: Toast và trạng thái tải
![Trang 7](../../images/01-toast-crud.png)

**Mô tả:** CRUD có Toast sau backend; loading/rỗng/lỗi tại bảng.

**Giải thích field/thành phần:**

- `A07.01` **Loading/rỗng/lỗi**: Loading khi tải; `Chưa có khoản OT.` nếu rỗng; lỗi có Thử lại.
- `A07.02` **Thành Công**: `Đã thêm OT.`, `Đã cập nhật OT.`, `Đã xác nhận OT.`, `Đã xóa OT.`
- `A07.03` **Cảnh Báo**: `OT đã được xác nhận và không thể chỉnh sửa.` hoặc lỗi field.
- `A07.04` **Có Lỗi Xảy Ra**: `Không thể cập nhật OT. Vui lòng thử lại.`
- `A07.05` **Thông Báo**: Chỉ khi chờ đồng bộ thực tế.

**Điểm cần lưu ý:**

- Một thao tác một kết quả; không báo thành công sớm.
- Mở form/Hủy draft/search/Copy không có Toast CRUD thành công.
- Lỗi lưu giữ draft và tiền/trạng thái cũ; lỗi tải không biến thành 0 khoản.

---

## 2. Yêu cầu

### 2.1. Flow chính

- **Flow 1 / REQ01–REQ02:** Mở lớp → kiểm tra Admin/Class Handler và phạm vi → tải OT chưa xóa → tìm theo tên Handler.
- **Flow 2 / REQ03:** + mở Gắn OT hoặc khoản Mới mở Chỉnh sửa OT → một Handler, tiền/ngày/giờ/trạng thái → Cập nhật → lưu và Toast.
- **Flow 3 / REQ04, REQ07:** Đã xác nhận → kiểm tra phiên bản/quyền → audit → khóa khoản OT → cập nhật danh sách OT, không thay đổi chi PTL.
- **Flow 4 / REQ05:** X/Đã xóa → xác nhận → kiểm tra chưa xác nhận → xóa mềm → ẩn → Toast.
- **Flow 5 / REQ06:** Click icon ghi chú → popup giống tab Học viên → gõ/chỉnh trong ô văn bản nếu khoản Mới → lưu nội dung và phiên bản → icon lịch sử cạnh tiêu đề → xem/Copy từng bản; Đã xác nhận chỉ đọc, quyền sửa Đã hủy cần chốt riêng.

### 2.2. Ngoại lệ

- **EX01:** Sai role/ngoài phạm vi → chặn API/dữ liệu.
- **EX02:** Thiếu/sai người nhận, nhiều người, tiền hoặc ngày/giờ không đọc/lưu được → lỗi đúng field, không lưu một phần.
- **EX03:** Đã xác nhận bị sửa/hủy/xóa → từ chối; không đảo OT/bảng lương.
- **EX04:** Request lặp hoặc xung đột version → một kết quả; không sửa khoản vừa khóa hoặc tạo trùng OT/audit.
- **EX05:** Lỗi lưu → giữ dữ liệu cũ/draft, cho thử lại.
- **EX06:** Response search/lớp cũ → bỏ qua.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 |  | Chỉ Admin/Class Handler xem và CRUD/xác nhận; tự xác nhận OT được phép. |
| REQ02 |  | Mỗi khoản một dòng; search tên Handler; giữ Hủy, ẩn Xóa. |
| REQ03 |  | Một người mỗi khoản; nhiều khoản/người; tiền tùy ý, khối Thông tin OT chỉ đọc với giá trị gốc, không có nút Dùng giá trị gốc; ngày thực hiện và ngày cập nhật riêng. |
| REQ04 |  | Bốn trạng thái; xác nhận khóa khoản, không mở lại/đảo. |
| REQ05 |  | Xóa có xác nhận, xóa mềm khoản chưa xác nhận. |
| REQ06 |  | UI ghi chú giống tab Học viên: click icon mở popup có ô gõ/chỉnh nhiều dòng và icon lịch sử; dữ liệu theo class_id + ot_id, lịch sử người/thời điểm và Copy từng bản; chỉ Admin/Class Handler, khoản xác nhận chỉ đọc. |
| REQ07 |  | Tách OT khỏi KPI; không hiển thị/cộng OT vào Chi phí PTL/Tổng chi PTL ở danh sách lớp, bất kể trạng thái. |
| REQ08 |  | Toast CRUD, tải/rỗng/lỗi rõ ràng. |

### 2.4. Ràng buộc

- Dùng ot_id, class_id, handler_id; không cập nhật theo tên/vị trí dòng.
- Backend kiểm tra quyền/phạm vi, trạng thái/version tại thời điểm lưu.
- Audit người tạo/sửa/xác nhận/xóa và thời điểm máy chủ; lịch sử bất biến.
- Một request tạo lặp chỉ một khoản; hai thao tác tạo độc lập cho cùng Handler được phép.
- Không bỏ khóa khoản xác nhận qua request trực tiếp hoặc lớp test.
- Đã xác nhận không đồng nghĩa đã thanh toán; trả lương thuộc function khác.

---

## 3. Testcase

### Feature: Chi tiết lớp học — Tab OT của Phụ trách lớp

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Mở đúng lớp và quyền | High · Smoke | Flow 1 / REQ01 | Admin/Class Handler | Có OT ở nhiều lớp | **Given** mở lớp A<br>**When** chọn OT<br>**Then** tải đúng class_id | - Đúng các cột<br>- Không trộn lớp B<br>- Không trả Đã xóa |
| Case 2: Chặn role khác | High | EX01 / REQ01 | Support/Teacher/role khác | Có ID lớp | **Given** truy cập tab/API<br>**When** kiểm tra quyền<br>**Then** từ chối | - Không trả tiền hoặc người nhận<br>- Không ghi dữ liệu |
| Case 3: Search tên Handler | High | REQ02 | Role có quyền | Nhiều Handler có OT | **Given** nhập tên<br>**When** tìm<br>**Then** lọc theo người nhận | - Tìm toàn bộ dữ liệu<br>- Giữ Đã hủy, loại Đã xóa<br>- Không search tên mẫu thay cho tên Handler |
| Case 4: Nhiều khoản cho một người | High | REQ02 | Role có quyền | Một người có hai khoản | **Given** tải bảng<br>**When** render<br>**Then** có hai dòng độc lập | - Không gộp theo tên<br>- Tiền/trạng thái đúng từng ID |
| Case 5: Gắn OT với một Handler | High · Smoke | Flow 2 / REQ03 | Role có quyền | Dữ liệu hợp lệ | **Given** + mở Gắn OT và chọn một người<br>**When** Cập nhật với trạng thái Mới<br>**Then** tạo khoản OT | - Một người nhận<br>- Cho tạo khoản khác cho cùng người<br>- Không thay đổi chi PTL |
| Case 6: Chặn nhiều người hoặc role sai | High | EX02 / REQ03 | Role có quyền | Request bị sửa | **Given** gửi nhiều người/Support/Teacher<br>**When** lưu<br>**Then** từ chối | - Không lưu một phần<br>- Không tin role client |
| Case 7: Tiền khác giá trị gốc | High | REQ03 | Role có quyền | Giá trị gốc 1.200.000đ | **Given** nhập 800.000đ hoặc 1.500.000đ<br>**When** lưu<br>**Then** giữ đúng tiền nhập | - Không ép tiền gốc<br>- Không áp trần mẫu<br>- Không kiểm tra điều kiện mô tả |
| Case 8: Đúng UI OT và Hủy bỏ draft | Medium | REQ03 | Role có quyền | Popup Gắn/Chỉnh sửa OT mở | **Given** khối Thông tin OT và số tiền nhập khác giá trị gốc<br>**When** Hủy bỏ<br>**Then** bỏ draft | - Không có nút Dùng giá trị gốc<br>- Không lưu backend<br>- Không chuyển Đã hủy<br>- Không tự sinh khoản KPI |
| Case 9: Hai mốc ngày độc lập | High | REQ03 | Role có quyền | Thời gian thực hiện khác ngày hiện tại | **Given** nhập ngày/giờ<br>**When** lưu<br>**Then** giữ riêng hai mốc | - Ghi nhận theo input<br>- Cập nhật theo máy chủ<br>- Xem không đổi thời gian |
| Case 10: Khóa khoản xác nhận | High | EX03 / REQ04 | Role có quyền | OT Đã xác nhận | **Given** mở form hoặc gửi request sửa tiền/người/ngày/ghi chú<br>**When** xử lý<br>**Then** từ chối | - Form chỉ đọc<br>- Tiền và chi PTL giữ nguyên |
| Case 11: Tự xác nhận OT | High | Flow 3 / REQ04 | Class Handler | Khoản Mới của chính mình | **Given** chọn Đã xác nhận<br>**When** lưu thành công<br>**Then** xác nhận được | - Audit người/thời điểm<br>- Khóa khoản<br>- Chi phí PTL/Tổng chi PTL giữ nguyên |
| Case 12: Đã hủy vẫn hiển thị | High | REQ04 | Role có quyền | OT Mới | **Given** chuyển Đã hủy<br>**When** lưu<br>**Then** dòng vẫn hiện | - Không tính chi PTL<br>- Không xóa dòng |
| Case 13: Không mở lại khoản xác nhận | High | EX03 / REQ04 | Admin/Class Handler | Đã xác nhận | **Given** gửi chuyển Mới/Hủy/Xóa<br>**When** xử lý<br>**Then** từ chối | - Tiền/trạng thái giữ nguyên<br>- Không đảo OT |
| Case 14: Sửa đồng thời với xác nhận | High | EX04 / REQ04 | Hai role có quyền | Cùng bản dữ liệu | **Given** A xác nhận trước<br>**When** B sửa từ bản cũ<br>**Then** từ chối và tải lại | - Không sửa khoản khóa<br>- Không tạo trùng OT/audit xác nhận<br>- Không đổi chi PTL |
| Case 15: Hủy popup xóa | Medium | Flow 4 / REQ05 | Role có quyền | Khoản chưa xác nhận | **Given** bấm X<br>**When** Hủy bỏ<br>**Then** giữ khoản | - Không đổi trạng thái<br>- Không Toast thành công |
| Case 16: Xóa mềm và ẩn | High | Flow 4 / REQ05 | Role có quyền | Mới hoặc Đã hủy | **Given** X hoặc Đã xóa<br>**When** xác nhận<br>**Then** ẩn dòng | - Không hiện khi search/tải lại<br>- Audit/tài khoản còn<br>- Không tính chi PTL |
| Case 17: Sửa ghi chú đúng khoản | High | Flow 5 / REQ06 | Role có quyền | OT Mới | **Given** mở icon<br>**When** sửa/lưu<br>**Then** ghi đúng OT | - Có lịch sử người/thời điểm<br>- Cập nhật mốc sửa |
| Case 18: Lịch sử và Copy | Medium | REQ06 | Admin/Class Handler | Nhiều phiên bản | **Given** popup ghi chú đang mở<br>**When** click icon lịch sử cạnh tiêu đề và Copy bản chọn<br>**Then** mở lịch sử đúng OT và sao chép đúng nội dung | - Nội dung, avatar/tên người và thời điểm đầy đủ<br>- Mới nhất trước<br>- Không trộn khoản hoặc kèm metadata khi Copy<br>- Không thêm phiên bản<br>- Khoản xác nhận vẫn xem/Copy |
| Case 25: Popup và ô gõ giống tab Học viên | High | Flow 5 / REQ06 | Admin/Class Handler | Có OT Mới, có hoặc chưa có ghi chú | **Given** danh sách OT<br>**When** click icon ghi chú rồi gõ nhiều dòng<br>**Then** popup đúng UI tham chiếu, có ô nhập và icon lịch sử | - Tiêu đề Ghi chú OT<br>- Hiển thị nội dung hiện tại hoặc ô trống<br>- Không mở form sửa OT đồng thời<br>- Chưa lưu thì không tạo phiên bản hoặc đổi Ngày cập nhật<br>- Không thêm dropdown loại ghi chú |
| Case 26: Xung đột hoặc lỗi lưu ghi chú | High | EX04–EX05 / REQ06 | Admin/Class Handler | Hai người mở cùng phiên bản hoặc backend lỗi | **Given** A lưu trước B hoặc lưu thất bại<br>**When** B gửi nội dung draft<br>**Then** cảnh báo xung đột/lỗi, không âm thầm ghi đè | - Giữ draft để xử lý/thử lại<br>- Giữ các phiên bản thành công trước đó<br>- Không tạo lịch sử thành công giả<br>- Tiền/trạng thái/Tổng chi PTL không đổi |
| Case 19: OT xác nhận không cộng chi PTL | High | REQ07 | Role xem thống kê | KPI xác nhận 500.000đ, OT xác nhận 200.000đ cùng lớp | **Given** mở danh sách lớp<br>**When** tải Chi phí PTL<br>**Then** chỉ lấy KPI 500.000đ | - Không thành 700.000đ<br>- Không thêm cột/thẻ chi OT |
| Case 20: CRUD OT không đổi tổng theo filter | High | REQ07 | Admin/Class Handler | Chi PTL từ KPI của A/B là 1.200.000đ | **Given** tạo/sửa/hủy/xóa OT và tìm kiếm OT<br>**When** tải lại danh sách lớp với filter A/B<br>**Then** Tổng chi PTL vẫn 1.200.000đ | - Không trộn OT vào tổng<br>- Bản ghi KPI không đổi |
| Case 21: Xác nhận OT lặp | High | EX04 / REQ07 | Role có quyền | Khoản OT 200.000đ | **Given** request xác nhận lặp<br>**When** xử lý<br>**Then** một xác nhận OT | - Không nhân khoản/audit xác nhận<br>- Không cộng chi PTL<br>- Không tự sinh KPI |
| Case 22: Toast thành công | Medium | REQ08 | Role có quyền | CRUD hợp lệ | **Given** lưu<br>**When** backend thành công<br>**Then** một Toast đúng thao tác | - Danh sách OT đồng bộ<br>- Không đổi tổng chi PTL<br>- Không nhân Toast |
| Case 23: Lưu lỗi | High | EX05 / REQ08 | Role có quyền | Backend lỗi | **Given** lưu<br>**When** thất bại<br>**Then** lỗi và giữ draft | - Không đổi tiền/trạng thái/tổng<br>- Thử lại được |
| Case 24: Search response cũ | High | EX06 / REQ02 | Role có quyền | Search liên tục | **Given** response cũ về sau<br>**When** render<br>**Then** giữ search mới | - Không trộn kết quả |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Nguồn cấu hình Tên/Mô tả/Giá trị gốc và cách chọn mẫu OT chưa rõ trong ảnh; người nhận đã chốt là một Handler.
- **Q02:** Picker giới hạn ở Handler đã thêm vào lớp hay từ danh sách hệ thống?
- **Q03:** Tiền âm/0/phần lẻ: hiện chỉ chốt nhập tùy ý, không kiểm tra điều kiện mẫu.
- **Q04:** Đã hủy được sửa/phục hồi về Mới hoặc xác nhận không? Hiện chỉ chốt giữ hiển thị và xóa khi chưa xác nhận.
- **Q05:** Danh sách OT dùng load-more hay phân trang? Search theo tên Handler đã chốt, cơ chế tải thêm chưa có câu trả lời.
