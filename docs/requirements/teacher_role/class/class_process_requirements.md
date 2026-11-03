# [Giáo viên] Chi tiết lớp — Quy trình

Tài liệu đặc tả nhóm menu **Quy trình** trong Chi tiết lớp của role Giáo viên: Cuộc họp và Tiêu chuẩn lớp. Figma role Giáo viên chưa có UI hai menu này (GV-LOP-060100 và GV-LOP-070100 chỉ là màn trống), nên bố cục và hành vi đặc tả theo UI ICS cũ (`roles/teacher/class/standard_class`, `roles/teacher/class/meeting.dart`, module `features/zaction`); không có ảnh tham chiếu. Nghiệp vụ dùng chung với requirement Admin [Tiêu chuẩn lớp - giáo viên, CSKH và Quy trình lớp](../../management_requirement/class_management/class_detail_processes_requirements.md) và [Tab Cuộc họp](../../management_requirement/class_management/class_detail_meetings_requirements.md).

## 1. UI

### Trang 1: GV-LOP-060100 — Tiêu chuẩn lớp — Cây tiêu chuẩn và tiến độ
**Mô tả:**

- Giáo viên của lớp vào Chi tiết lớp → Quy trình → **Tiêu chuẩn lớp** để xem toàn bộ tiêu chuẩn (quy trình loại `Lớp - Giáo viên`) đã được Class Handler/Support thêm vào lớp, cùng Result và tiến độ. Thao tác ghi duy nhất là **tick xác nhận** Action loại Xác thực (`verify`) mà giáo viên được gán.

**Điểm cần lưu ý:**

- `A01.01` **Tiến độ tổng**: Thanh tiến độ của lớp theo quy tắc Action Board (từ Action `Kiểm tra`, `Đánh giá`, `Task tiến trình`); chỉ hiển thị. Cùng giá trị với thẻ `Tiêu chuẩn` ở Tổng quan lớp.
- `A01.02` **Cây Package → Category → Action Item**: Toàn bộ nội dung đã thêm vào lớp, theo thứ tự đã lưu; mỗi Category có badge `x/y` số item hoàn thành. Không lọc theo người được gán.
- `A01.03` **Mở rộng item**: Icon `⌃`/`⌄` xem mô tả, ghi chú, file hướng dẫn (bấm tải), Result. Chỉ đọc với mọi loại trừ `verify` được gán.
- `A01.04` **Action Xác thực (`verify`) được gán**: Assignee chứa giáo viên đang đăng nhập: ô tick cam bấm được; bấm thì lưu Result `đã xác nhận` (người, thời điểm), không bỏ tick; tiến độ Category/tổng tính lại.
- `A01.05` **Action Xác thực (`verify`) không gán, loại khác**: Chỉ xem; control Result (ô check, đánh giá, tiến độ, deadline, log, ghi chú) hiển thị mờ hoặc chỉ đọc.
- `A01.06` **Nút `Thêm tiêu chuẩn`**: Không hiển thị với giáo viên.
- `A01.07` **Không có nội dung**: Hiển thị `Bảng dữ liệu này đang trống` (Figma GV-LOP-060100).

- Khác requirement Admin ở một điểm: Admin ghi thành viên role khác chỉ xem; role Giáo viên được tick Xác thực (`verify`) khi được gán (theo ICS cũ).
- Nguồn quy trình `Vô hiệu`: vẫn hiển thị nội dung và Result cũ, tick Xác thực (`verify`) bị chặn.
- Backend kiểm tra: giáo viên thuộc lớp, item thuộc tab Tiêu chuẩn lớp của lớp, loại `verify`, giáo viên trong assignee, nguồn còn Công khai.
- Tick không Toast thành công; lỗi lưu hiển thị Toast `Có Lỗi Xảy Ra`.

### Trang 2: GV-LOP-070100 — Cuộc họp — Khung màn và Danh sách buổi họp
**Mô tả:**

- Giáo viên của lớp vào Chi tiết lớp → Quy trình → **Cuộc họp** để xem các buổi họp của lớp mà mình **được mời tham gia**. Vùng trái là `Nội dung buổi họp` của buổi đang chọn; vùng phải là `Danh sách buổi họp`.
- Giáo viên không tạo, sửa, xoá buổi họp; thao tác duy nhất ghi dữ liệu là **tick xác nhận** Action loại Xác thực (`verify`) mà giáo viên được gán (xem khu vực Nội dung buổi họp).

**Điểm cần lưu ý:**

- `A02.01` **Danh sách buổi họp**: Chỉ các buổi họp của lớp hiện tại có giáo viên trong danh sách người tham gia và **không ở trạng thái `Mới tạo`**. Buổi không mời giáo viên không hiển thị, không đếm, không mở được bằng URL.
- `A02.02` **Card buổi họp**: Số thứ tự; `N người tham gia` (bấm mở popup Danh sách người tham gia); tiêu đề; ngày `dd/MM/yyyy` và giờ `HH:mm` (chưa có lịch hiển thị `Chưa có lịch`); trạng thái. Mọi thành phần chỉ đọc.
- `A02.03` **Chọn buổi**: Bấm card để chọn: viền cam, vùng trái đổi theo buổi. Mặc định chọn buổi đầu tiên của danh sách. Chọn buổi không đổi trạng thái buổi.
- `A02.04` **Số người tham gia**: Số user duy nhất trong danh sách người tham gia đã lưu của buổi; không phải sĩ số lớp.
- `A02.05` **Badge cùng thời gian**: Các buổi giáo viên được xem có cùng ngày và giờ:phút bắt đầu gom thành nhóm; từ hai buổi hiển thị số lượng, bấm mở popup liệt kê từng buổi (số người tham gia, ngày giờ, trạng thái, tiêu đề). Chỉ đếm buổi giáo viên được xem.
- `A02.06` **Không có buổi**: Hiển thị `Chưa có dữ liệu`.
- `A02.07` **Loading/lỗi**: Loading riêng vùng danh sách; lỗi có `Thử lại`, không dựng danh sách rỗng giả.

- Khác ICS cũ: ICS cũ cho giáo viên thấy mọi buổi họp của lớp (trừ `Mới tạo`) và hiện nút xoá `×` khi hover với mọi role; requirement mới chỉ hiển thị buổi được mời và **không có nút xoá**.
- Không có ô `Thêm buổi họp mới` ở cuối danh sách, không có nút `+` thêm người tham gia, không có dropdown đổi trạng thái, không sửa được tiêu đề.
- Trạng thái hiển thị là một trong `Đang tham gia`, `Hoàn thành`, `Đang chờ` (buổi `Mới tạo` không hiển thị với giáo viên).
- Figma GV-LOP-070100 chỉ có màn trống; bố cục card, popup và nội dung theo mô tả trên cho đến khi có thiết kế.

### Trang 3: Nội dung buổi họp và Action Item
**Mô tả:**

- Vùng trái hiển thị mô tả buổi họp và nội dung quy trình đã gắn (Package → Category → Action Item) với Result riêng của buổi. Giáo viên xem toàn bộ; riêng Action Xác thực (`verify`) được gán cho giáo viên thì giáo viên được tick xác nhận.

**Điểm cần lưu ý:**

- `A03.01` **Tiêu đề vùng**: `Nội dung buổi họp`. Không có nút `Thêm nội dung buổi họp`.
- `A03.02` **Mô tả**: Mô tả của buổi đang chọn, định dạng văn bản, chỉ đọc; không có mô tả thì ẩn khối.
- `A03.03` **Package / Category / Action Item**: Hiển thị theo thứ tự đã lưu của buổi; mỗi Category có badge tiến độ `x/y` theo quy tắc Action Board của buổi. Giáo viên không kéo thả, không thêm/xoá/nhân bản item.
- `A03.04` **Mở rộng item**: Icon `⌃`/`⌄` mở/thu gọn chi tiết item (mô tả, ghi chú, file hướng dẫn, Result). Chỉ đọc với mọi loại trừ `verify` được gán.
- `A03.05` **Action Xác thực (`verify`) được gán**: Item có danh sách người xác nhận (assignee) chứa giáo viên đang đăng nhập: hiển thị ô tick cam có thể bấm. Bấm thì lưu Result `đã xác nhận` của **buổi này** cho giáo viên, ghi thời điểm; sau khi tick ô chuyển trạng thái đã tick và **không bỏ tick được**. Tiến độ Category/buổi tính lại.
- `A03.06` **Action Xác thực (`verify`) không gán giáo viên**: Ô tick hiển thị mờ, không bấm được.
- `A03.07` **Action Item loại khác (`check`, `progress`, `evaluate`, `task`, `deadline`, `log`, `instruct`)**: Chỉ xem Result, ghi chú, file; không có control sửa.
- `A03.08` **Biên bản cuộc họp**: Khối `Biên bản cuộc họp` phía dưới, có `⌃` mở/thu gọn (mặc định thu gọn); chỉ hiển thị khi có nội dung; chỉ đọc.

- Result của cùng một Action Item ở hai buổi họp là hai Result độc lập; giáo viên tick ở buổi nào thì chỉ Result buổi đó đổi.
- Khác requirement Admin ở một điểm: Admin ghi Giáo viên không cập nhật Result; role Giáo viên được **tick Xác thực (`verify`) khi được gán** (theo ICS cũ). Mọi loại Result khác vẫn chỉ người tạo cuộc họp cập nhật.
- Backend kiểm tra: giáo viên trong danh sách tham gia của buổi, item thuộc buổi, item loại `verify`, giáo viên trong assignee; thiếu một điều kiện thì từ chối.
- Tick không hiển thị Toast thành công; ô đổi trạng thái ngay. Lưu thất bại: Toast `Có Lỗi Xảy Ra`, ô giữ trạng thái chưa tick.

### Trang 4: Toast phản hồi CRUD
![Trang 4](../../images/01-toast-crud.png)

*Toast Thành Công, Thông Báo, Cảnh Báo và Có Lỗi Xảy Ra — nhấn để xem ảnh gốc*

**Mô tả:**

- Thao tác ghi dữ liệu duy nhất của giáo viên ở hai menu này là tick xác nhận Action Xác thực (`verify`) được gán.

**Điểm cần lưu ý:**

- `A04.01` **Thành công**: Tiêu đề cố định: `Thành Công`; Khi sử dụng: Không dùng: tick thành công thể hiện bằng ô đổi trạng thái.
- `A04.02` **Thông tin**: Tiêu đề cố định: `Thông Báo`; Khi sử dụng: Không dùng.
- `A04.03` **Cảnh báo**: Tiêu đề cố định: `Cảnh Báo`; Khi sử dụng: Không dùng.
- `A04.04` **Lỗi**: Tiêu đề cố định: `Có Lỗi Xảy Ra`; Khi sử dụng: Lưu tick xác nhận thất bại.

- Chọn buổi, mở popup, mở rộng item, mở biên bản là thao tác chỉ đọc, không Toast.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1 / REQ01 / REQ02: Xem Tiêu chuẩn lớp**

```text
Giáo viên vào Chi tiết lớp → Quy trình → Tiêu chuẩn lớp
      → Hệ thống tải toàn bộ Package → Category → Action Item đã thêm vào lớp, Result và tiến độ
      → Không có: hiển thị "Bảng dữ liệu này đang trống"
      → Giáo viên mở rộng item để xem mô tả, ghi chú, file, Result
```

**Flow 2 / REQ03: Tick xác nhận Action Xác thực ở Tiêu chuẩn lớp**

```text
Giáo viên mở rộng Action loại Xác thực có mình trong assignee
      → Bấm ô tick
      → Backend kiểm tra: giáo viên thuộc lớp, item thuộc Tiêu chuẩn lớp của lớp, loại Xác thực, giáo viên trong assignee, nguồn Công khai
      → Hợp lệ: lưu Result đã xác nhận (người, thời điểm); ô chuyển đã tick; tiến độ Category và tổng tính lại
      → Không hợp lệ hoặc lỗi: từ chối; ô giữ chưa tick; lỗi hệ thống hiển thị Toast "Có Lỗi Xảy Ra"
```

**Flow 3 / REQ04 / REQ07: Xem buổi họp được mời**

```text
Giáo viên vào Chi tiết lớp → Quy trình → Cuộc họp
      → Hệ thống tải các buổi họp của lớp có giáo viên trong người tham gia và trạng thái khác Mới tạo
      → Không có: hiển thị "Chưa có dữ liệu"
      → Có: chọn buổi đầu tiên; vùng trái hiển thị mô tả, Package → Category → Action Item, Result của buổi, Biên bản (thu gọn)
      → Giáo viên bấm card khác / bấm "N người tham gia" / bấm badge cùng thời gian để xem
```

**Flow 4 / REQ08: Tick xác nhận Action Xác thực trong buổi họp**

```text
Giáo viên mở rộng Action loại Xác thực có mình trong danh sách người xác nhận
      → Bấm ô tick
      → Backend kiểm tra: giáo viên được mời buổi này, item thuộc buổi, loại Xác thực, giáo viên trong assignee
      → Hợp lệ: lưu Result đã xác nhận (người, thời điểm) cho buổi này; ô chuyển đã tick; tiến độ Category tính lại
      → Không hợp lệ hoặc lỗi: từ chối; ô giữ chưa tick; lỗi hệ thống hiển thị Toast "Có Lỗi Xảy Ra"
```

### 2.2. Ngoại lệ

- **EX01:** Giáo viên gửi request thêm tiêu chuẩn, sửa Result item không phải `verify` được gán, sửa ghi chú hoặc định nghĩa → backend từ chối.
- **EX02:** Nguồn quy trình của item chuyển `Vô hiệu` → tick Xác thực (`verify`) bị chặn; nội dung và Result cũ vẫn hiển thị.
- **EX03:** Lớp chưa được thêm tiêu chuẩn → hiển thị `Bảng dữ liệu này đang trống`.
- **EX04:** Giáo viên không có trong danh sách người tham gia của buổi, hoặc buổi ở trạng thái `Mới tạo` → không hiển thị trong danh sách, không đếm vào nhóm cùng thời gian; mở bằng URL hoặc request trực tiếp bị từ chối.
- **EX05:** Giáo viên không được mời buổi nào của lớp → danh sách hiển thị `Chưa có dữ liệu`, vùng trái trống.
- **EX06:** Giáo viên gửi request tạo/sửa/xoá buổi họp, đổi trạng thái, sửa người tham gia, sửa nội dung Action Board, sửa biên bản, hoặc cập nhật Result của item không phải `verify` được gán → backend từ chối, dữ liệu giữ nguyên.
- **EX07:** Lưu tick xác nhận thất bại do backend/network → Toast `Có Lỗi Xảy Ra`; ô về trạng thái chưa tick.
- **EX08:** Giáo viên bị gỡ khỏi danh sách người tham gia sau khi đang mở buổi → request tiếp theo bị từ chối; tải lại thì buổi biến mất khỏi danh sách.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Phạm vi xem Tiêu chuẩn lớp | Mọi giáo viên của lớp xem toàn bộ nội dung Tiêu chuẩn lớp (loại `Lớp - Giáo viên`) đã thêm vào lớp, không lọc theo người được gán; tiến độ tổng và badge Category theo quy tắc Action Board, cùng nguồn thẻ `Tiêu chuẩn` ở Tổng quan lớp. |
| REQ02 | Chỉ đọc | Không có nút `Thêm tiêu chuẩn`; không kéo thả, không sửa định nghĩa, ghi chú, file; control Result các loại khác `verify` được gán chỉ đọc. |
| REQ03 | Tick xác nhận Xác thực ở Tiêu chuẩn lớp | Action Xác thực (`verify`) có giáo viên trong assignee: tick một lần, không bỏ tick, chỉ khi nguồn còn Công khai; Result lưu theo lớp–item; tiến độ tính lại ngay. |
| REQ04 | Phạm vi xem buổi họp | Giáo viên chỉ thấy buổi họp của lớp mà mình nằm trong danh sách người tham gia và trạng thái khác `Mới tạo`. Lọc quyền ở backend trước khi trả danh sách, gom nhóm và đếm; không tải toàn bộ rồi ẩn ở client. |
| REQ05 | Card chỉ đọc | Card hiển thị số thứ tự, `N người tham gia` (popup danh sách người tham gia), tiêu đề, ngày giờ (`Chưa có lịch` nếu trống), trạng thái. Không có nút thêm buổi, thêm người, đổi trạng thái, sửa tiêu đề, xoá. |
| REQ06 | Nhóm cùng thời gian | Gom buổi cùng ngày và giờ:phút bắt đầu trong tập buổi giáo viên được xem; từ hai buổi hiển thị số lượng và popup liệt kê (số người tham gia, ngày giờ, trạng thái, tiêu đề). Cách gom giống requirement Admin Tab Cuộc họp REQ09. |
| REQ07 | Nội dung buổi họp | Hiển thị mô tả, Package → Category → Action Item theo thứ tự đã lưu, badge tiến độ theo quy tắc Action Board của buổi, chi tiết item (mô tả, ghi chú, file, Result), Biên bản cuộc họp (thu gọn, chỉ khi có nội dung). Tất cả chỉ đọc, trừ REQ08. |
| REQ08 | Tick xác nhận Xác thực trong buổi họp | Action loại Xác thực (`verify`) có giáo viên trong assignee: giáo viên bấm tick một lần để lưu Result đã xác nhận của buổi (kèm người, thời điểm); không bỏ tick. Item verify không gán giáo viên và mọi loại item khác: chỉ xem. Backend kiểm tra đủ bốn điều kiện ở Flow 4 mỗi lần lưu. |
| REQ09 | Đồng bộ | Sau khi tick, badge tiến độ Category và tiến độ buổi cập nhật ngay; Result của buổi khác và Action Board lớp không đổi. Đổi buổi không dùng dữ liệu buổi cũ. |

### 2.4. Ràng buộc

#### Quyền

**Tiêu chuẩn lớp**

| Role | Xem cây tiêu chuẩn, Result, tiến độ | Tick Xác thực được gán | Thêm tiêu chuẩn, sửa Result khác, ghi chú, định nghĩa |
|---|:---:|:---:|:---:|
| Giáo viên của lớp | ✅ | ✅ | ❌ |
| Các role khác | Theo requirement Admin Tiêu chuẩn lớp - giáo viên | — | — |

**Cuộc họp**

| Role | Xem buổi được mời, người tham gia, nội dung, biên bản | Tick Xác thực được gán | Tạo / sửa / xoá buổi, người tham gia, ngày giờ, trạng thái | Sửa nội dung Action Board, Result khác, biên bản |
|---|:---:|:---:|:---:|:---:|
| Giáo viên của lớp được mời vào buổi | ✅ | ✅ | ❌ | ❌ |
| Giáo viên của lớp không được mời | ❌ | ❌ | ❌ | ❌ |
| Các role khác | Theo requirement Admin Tab Cuộc họp | — | — | — |

- Quyền CRUD buổi họp, đổi trạng thái và cập nhật các Result khác thuộc Admin, Class Handler, Support theo requirement Admin; tài liệu này không mở thêm quyền cho giáo viên ngoài tick Xác thực (`verify`) được gán.

#### Ràng buộc khác

**Phạm vi dữ liệu**

- Dùng định danh lớp, buổi, Action Item, user để kiểm tra quyền; tên, mã, số thứ tự chỉ để hiển thị.
- Quyền xem buổi được mời không mở quyền đọc buổi khác hoặc phần khác của lớp.
- Không cho phép truy cập hoặc thực hiện hành động bị đánh dấu `❌`, kể cả khi gọi trực tiếp bằng URL hoặc request.

---

---

## 3. Testcase

### Feature: [Giáo viên] Chi tiết lớp — Quy trình

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Xem tiêu chuẩn và tiến độ | High · Smoke | Flow 1 / REQ01 / REQ02 | Giáo viên | Lớp đã thêm 2 Package, tiến độ 40% | **Given** mở Tiêu chuẩn lớp<br>**When** tải xong<br>**Then** hiện tiến độ 40%, cây đủ 2 Package với badge Category | - Không có nút Thêm tiêu chuẩn<br>- Không kéo thả |
| Case 2: Tick Xác thực được gán | High · Smoke | Flow 2 / REQ03 | Giáo viên | Item V loại Xác thực, assignee có G | **Given** mở rộng V<br>**When** bấm ô tick<br>**Then** Result V của lớp thành đã xác nhận | - Ô đổi trạng thái ngay<br>- Badge Category và tiến độ tổng tính lại<br>- Bấm lại không bỏ tick |
| Case 3: Item khác chỉ xem | High | EX01 / REQ02 | Giáo viên | Có item check, evaluate, task, Xác thực không gán G | **Given** mở rộng từng item<br>**When** thử đổi Result hoặc ghi chú<br>**Then** không có control sửa | - Request trực tiếp bị từ chối |
| Case 4: Nguồn Vô hiệu | Medium | EX02 / REQ03 | Giáo viên | Package nguồn chuyển Vô hiệu, có Xác thực gán G | **Given** mở item<br>**When** bấm tick<br>**Then** bị chặn | - Nội dung và Result cũ vẫn hiển thị |
| Case 5: Lớp chưa có tiêu chuẩn | Medium | EX03 | Giáo viên | Chưa thêm nội dung | **Given** mở menu<br>**When** tải xong<br>**Then** `Bảng dữ liệu này đang trống` | - Tiến độ tổng trống hoặc 0% |
| Case 6: Chỉ thấy buổi được mời | High · Smoke | Flow 3 / REQ04 / EX04 | Giáo viên | Lớp có M1 (mời G, Đang chờ), M2 (không mời G), M3 (mời G, Mới tạo) | **Given** G mở menu Cuộc họp<br>**When** danh sách tải xong<br>**Then** chỉ có M1 | - M2, M3 không hiển thị<br>- Mở URL M2 bị từ chối<br>- Mặc định chọn M1 |
| Case 7: Card chỉ đọc | High | REQ04 / REQ05 | Giáo viên | Có buổi được mời | **Given** xem card<br>**When** thử sửa tiêu đề, ngày giờ, trạng thái, người tham gia<br>**Then** không có control sửa | - Không có nút `+`, dropdown trạng thái, ô Thêm buổi họp mới, nút `×` |
| Case 8: Popup người tham gia | Medium | REQ05 | Giáo viên | M1 có 3 người tham gia | **Given** bấm `3 người tham gia`<br>**When** popup mở<br>**Then** liệt kê đúng 3 người của M1 | - Chỉ xem, đóng popup không đổi dữ liệu |
| Case 9: Nhóm cùng thời gian theo quyền | High | REQ06 | Giáo viên | M1, M2 cùng ngày giờ; G chỉ được mời M1 | **Given** G xem danh sách<br>**When** gom nhóm<br>**Then** badge của M1 là `1`, không hiện `2` | - Admin quản lý lớp thấy `2`<br>- Không lộ M2 cho G |
| Case 10: Không có buổi | Medium | EX05 | Giáo viên | G không được mời buổi nào | **Given** mở menu<br>**When** danh sách rỗng<br>**Then** hiện `Chưa có dữ liệu` | - Vùng trái trống, không lỗi |
| Case 11: Xem nội dung buổi | High · Smoke | Flow 3 / REQ07 | Giáo viên | M1 có mô tả, 1 Package, 2 Category, 5 Action Item | **Given** chọn M1<br>**When** vùng trái tải<br>**Then** hiện mô tả, cây Package/Category/Item và badge tiến độ | - Không có nút Thêm nội dung buổi họp<br>- Không kéo thả |
| Case 12: Tick Xác thực được gán | High · Smoke | Flow 4 / REQ08 | Giáo viên | Item V loại Xác thực, assignee có G, chưa tick | **Given** G mở rộng V<br>**When** bấm ô tick<br>**Then** Result V của M1 thành đã xác nhận | - Ô đổi trạng thái ngay<br>- Badge tiến độ Category tăng<br>- Result V ở buổi M2 không đổi |
| Case 13: Xác thực không gán | High | EX06 / REQ08 | Giáo viên | Item V2 loại Xác thực, assignee không có G | **Given** xem V2<br>**When** bấm ô tick<br>**Then** không thao tác được | - Ô mờ<br>- Request trực tiếp bị từ chối |
| Case 14: Không bỏ tick | Medium | REQ08 | Giáo viên | V đã tick bởi G | **Given** bấm lại ô tick<br>**When** xử lý<br>**Then** giữ đã xác nhận | - Không gửi request |
| Case 15: Item loại khác chỉ xem | High | EX06 / REQ07 | Giáo viên | M1 có item check, evaluate, task, progress | **Given** mở rộng từng item<br>**When** thử đổi Result<br>**Then** không có control sửa | - Request sửa bị từ chối<br>- Xem được Result, ghi chú, file |
| Case 16: Biên bản chỉ đọc | Medium | REQ07 | Giáo viên | M1 có biên bản | **Given** bấm `⌃` Biên bản cuộc họp<br>**When** khối mở<br>**Then** hiển thị nội dung định dạng | - Không có trình soạn thảo<br>- Buổi không có biên bản thì ẩn khối |
| Case 17: Tick lỗi | Medium | EX07 | Giáo viên | Mất kết nối khi tick | **Given** bấm ô tick<br>**When** lưu thất bại<br>**Then** Toast `Có Lỗi Xảy Ra` | - Ô về chưa tick<br>- Tải lại không có Result mới |
| Toast Case 1: Lỗi xử lý | High | Ràng buộc Toast CRUD | Giáo viên | Backend/network lỗi | **Given** bấm tick Xác thực<br>**When** lưu thất bại<br>**Then** một Toast `Có Lỗi Xảy Ra` | - Không lộ thông tin kỹ thuật<br>- Dữ liệu không đổi |
| Toast Case 2: Không Toast khi chỉ đọc | Low | Ràng buộc Toast CRUD | Giáo viên | Có buổi được mời | **Given** chọn buổi, mở popup, mở rộng item<br>**When** thao tác<br>**Then** không hiển thị Toast | - Tick thành công cũng không Toast |

---

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Figma role Giáo viên chưa có UI Tiêu chuẩn lớp (GV-LOP-060100 đang copy màn trống của Tự học) và Cuộc họp (GV-LOP-070100 màn trống); cần thiết kế cây tiêu chuẩn với tiến độ, card buổi họp, popup người tham gia, popup cùng thời gian, cây Action Item và khối biên bản theo mô tả trên.
- **Q02:** Requirement Admin Tiêu chuẩn lớp - giáo viên ghi thành viên role khác chỉ xem; cần bổ sung ngoại lệ tick Xác thực (`verify`) được gán cho Giáo viên (Admin Tab Cuộc họp đã bổ sung).
- **Q03:** Quyền Giáo viên xem Log cuộc họp (requirement Admin còn chờ chốt); bản này không có nút Log cho giáo viên.
- **Q04:** Thông báo quá hạn và thông báo mời họp cho giáo viên (mốc, kênh) chờ chốt chung với Admin.
