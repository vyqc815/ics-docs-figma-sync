# [Tên chức năng]

<!--
Quy ước khi sử dụng template:
- Giữ đúng ba phần cấp cao theo thứ tự: UI, Yêu cầu, Cần xác nhận.
- Mỗi UI, popup, tab hoặc khu vực phải có đủ bốn khối: Mô tả, Giải thích thành phần/field, Điểm cần lưu ý và Testcase chi tiết.
- Bảng testcase đầy đủ của UI phải đặt ngay dưới chính UI đó; không gom testcase của nhiều UI vào một mục chung ở cuối tài liệu.
- Viết ngắn gọn, rõ hành vi và kết quả mong đợi.
- Dùng tên role đầy đủ, không dùng mã role hệ thống.
- Notification đặt ngay trong flow/testcase tương ứng; nếu UI không hiển thị notification thì không viết.
- Requirement có thao tác Create/Update/Delete/đổi trạng thái bắt buộc thêm khu vực `Toast phản hồi CRUD` cùng testcase ngay dưới UI này. Dùng bốn biến thể chuẩn: Thành Công, Thông Báo, Cảnh Báo, Có Lỗi Xảy Ra.
- Given / When / Then luôn nằm chung một cột trong bảng testcase.
- Bảng quyền dùng ✅ (được phép) và ❌ (không được phép).
- Mỗi flow phải tham chiếu ít nhất một REQ theo định dạng `Flow N / REQNN`.
- Mỗi testcase phải tham chiếu Flow, REQ, EX hoặc Ràng buộc tương ứng trong cột Scenario.
- Mỗi testcase bắt buộc được phân loại ở cột `Loại test`, đặt ngay sau cột `Priority`: ghi `Smoke` nếu là smoke test, để trống nếu không phải.
- `Smoke` là luồng chính (happy path) của thao tác cốt lõi: mở/xem danh sách, xem chi tiết, tạo, cập nhật, xóa, đổi trạng thái chính, đăng nhập. Validation, ngoại lệ, gửi lặp, phân quyền từ chối, Toast, hủy/hover, công thức tính và chi tiết bộ lọc không phải `Smoke`.
- Cột `Priority` không thay thế cột `Loại test`; một testcase `High` chưa chắc là `Smoke`.
- Không thêm mục API/model riêng vào requirement; chi tiết kỹ thuật được quản lý trong tài liệu chuyên biệt khi dự án có quy định.
- Không tự suy đoán thông tin chưa có; đưa vào mục Cần xác nhận.
- Xóa các mục hoặc dòng hướng dẫn không áp dụng trước khi hoàn tất tài liệu.
-->

## 1. UI

### Trang 1: [Tên màn hình]

<!-- Xóa khối ảnh nếu không có ảnh tham chiếu. -->
<p align="center">
  <a href="./images/[ten-anh].png"><img src="./images/[ten-anh].png" alt="[Mô tả ảnh]" width="760" title="Nhấn để xem ảnh gốc"></a><br>
  <em>[Chú thích ảnh] — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- [Role nào sử dụng màn hình và mục đích chính].

**Giải thích thành phần:**

- [Ý nghĩa và hành vi của từng thành phần chính].
- [Dữ liệu được hiển thị hoặc thao tác].

**Điểm cần lưu ý:**

- [Thành phần hiển thị: bảng, cột, nút, badge...].
- [Cách search, filter, phân trang...].
- [Giá trị mặc định hoặc hành vi đặc biệt].

#### Testcase — [Tên UI/khu vực]

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 1: [Luồng hiển thị/thao tác] | High | Smoke | Flow 1 / REQ01 | [Role] | [Điều kiện trước] | **Given** [Trạng thái ban đầu]<br>**When** [Hành động]<br>**Then** [Phản hồi] | - [Kết quả chính]<br>- [Dữ liệu đúng UI/đối tượng] |

### [Popup/Tab/Khu vực 2]

<!-- Có thể dùng ảnh với width 260–400 cho ảnh hẹp, 600–760 cho popup/màn hình lớn. -->
<p align="center">
  <a href="./images/[ten-anh-2].png"><img src="./images/[ten-anh-2].png" alt="[Mô tả ảnh]" width="650" title="Nhấn để xem ảnh gốc"></a><br>
  <em>[Chú thích ảnh] — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- [Mục đích của popup/tab/khu vực và role sử dụng].

**Giải thích field/thành phần:**

| Field | Yêu cầu |
|---|---|
| [Tên field 1] | [Bắt buộc/Không bắt buộc; giá trị mặc định; định dạng; giới hạn] |
| [Tên field 2] | [Danh sách giá trị hoặc quy tắc nhập] |
| [Tên field 3] | [Quy tắc kiểm tra trùng hoặc liên kết dữ liệu] |

**Điểm cần lưu ý:**

- [Hành vi khi mở/đóng/chọn dữ liệu].
- [Quan hệ giữa các field].
- [Dữ liệu được phép hiển thị].

#### Testcase — [Tên popup/tab/khu vực]

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case N: [Mở/đóng hoặc luồng thành công] | High | Smoke | Flow N / REQNN | [Role] | [Điều kiện trước] | **Given** [Trạng thái ban đầu]<br>**When** [Hành động]<br>**Then** [Phản hồi] | - [Kết quả chính]<br>- [Dữ liệu hiển thị/cập nhật đúng] |
| Case N+1: [Validation/quyền] | High |  | EXNN / Ràng buộc quyền | [Role] | [Form/màn hình đang mở] | **Given** [Dữ liệu hoặc quyền không hợp lệ]<br>**When** [Xác nhận/gửi request]<br>**Then** [Hệ thống từ chối] | - [Không tạo/cập nhật dữ liệu sai]<br>- [Hiển thị lỗi phù hợp] |

### Toast phản hồi CRUD

<!-- Giữ khu vực này nếu requirement có Create, Update, Delete hoặc đổi trạng thái. Điều chỉnh đường dẫn ảnh theo vị trí file. -->
<p align="center">
  <a href="[duong-dan-tuong-doi]/images/01-toast-crud.png"><img src="[duong-dan-tuong-doi]/images/01-toast-crud.png" alt="Bốn trạng thái Toast CRUD" width="520" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Toast Thành Công, Thông Báo, Cảnh Báo và Có Lỗi Xảy Ra — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- Phản hồi trực quan sau thao tác Create/Update/Delete/đổi trạng thái của requirement.

**Giải thích thành phần:**

| Loại Toast | Tiêu đề cố định | Khi sử dụng |
|---|---|---|
| Thành công | `Thành Công` | Backend đã xác nhận thao tác thay đổi dữ liệu thành công. |
| Thông tin | `Thông Báo` | Thao tác đã được tiếp nhận nhưng dữ liệu/danh sách cần thêm thời gian để đồng bộ. |
| Cảnh báo | `Cảnh Báo` | Dữ liệu nhập chưa hợp lệ hoặc có điều kiện người dùng cần kiểm tra trước khi tiếp tục. |
| Lỗi | `Có Lỗi Xảy Ra` | Backend/network không hoàn tất thao tác CRUD. |

**Điểm cần lưu ý:**

- Nội dung dòng hai lấy từ notification đã đặc tả tại flow/testcase nghiệp vụ; không tạo thêm thông báo trùng.
- Mỗi thao tác logic chỉ hiển thị một Toast kết quả; thao tác Hủy và chỉ đọc không hiển thị Toast CRUD.
- Icon, màu viền/nền/tiêu đề theo ảnh; nút `×` đóng Toast thủ công.
- Toast không thay thế lỗi validation tại field và không chứa mật khẩu, token, stack trace hoặc thông tin kỹ thuật nhạy cảm.

#### Testcase — Toast phản hồi CRUD

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | Role có quyền CRUD | Dữ liệu hợp lệ | **Given** người dùng xác nhận thao tác thay đổi<br>**When** backend xử lý thành công<br>**Then** hiển thị Toast `Thành Công` | - Đúng nội dung nghiệp vụ<br>- Chỉ hiển thị sau khi backend xác nhận<br>- Đúng một Toast |
| Toast Case 2: Cảnh báo validation | High |  | Ràng buộc Toast CRUD | Role có quyền CRUD | Dữ liệu chưa hợp lệ | **Given** form có lỗi cần người dùng sửa<br>**When** xác nhận thao tác<br>**Then** hiển thị Toast `Cảnh Báo` nếu flow có Toast validation | - Đồng thời đánh dấu đúng field lỗi<br>- Không gửi/lưu dữ liệu sai<br>- Không hiển thị Toast thành công |
| Toast Case 3: Lỗi xử lý | High |  | Ràng buộc Toast CRUD | Role có quyền CRUD | Backend/network lỗi | **Given** dữ liệu hợp lệ đã được gửi<br>**When** thao tác không hoàn tất<br>**Then** hiển thị Toast `Có Lỗi Xảy Ra` | - Dữ liệu không cập nhật một phần<br>- Có thể thử lại khi phù hợp<br>- Không lộ thông tin kỹ thuật |
| Toast Case 4: Thông tin đồng bộ | Medium |  | Ràng buộc Toast CRUD | Role có quyền CRUD | Thao tác xử lý bất đồng bộ | **Given** backend đã tiếp nhận nhưng danh sách chưa đồng bộ xong<br>**When** UI nhận trạng thái đang đồng bộ<br>**Then** hiển thị Toast `Thông Báo` | - Nêu rõ dữ liệu sẽ cập nhật sau<br>- Không hiển thị thành công sớm |
| Toast Case 5: Đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | Role có quyền CRUD | Toast đang hiển thị | **Given** một thao tác logic có nhiều callback hoặc người dùng bấm lặp<br>**When** kết quả được xử lý hoặc bấm `×`<br>**Then** chỉ có một Toast và cho phép đóng thủ công | - Không nhân đôi Toast<br>- Đóng Toast không hoàn tác dữ liệu |

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1 / REQ01: [Tên flow]**

```text
[Role/User] thực hiện [hành động bắt đầu]
      → Hệ thống [phản hồi]
      → User [nhập/chọn/xác nhận]
      → Hệ thống validate dữ liệu
      → Thành công: [kết quả]; nếu có notification thì ghi chính xác "[Nội dung notification]"
      → Thất bại: [giữ/không lưu dữ liệu]; nếu có notification thì ghi chính xác "[Nội dung notification]"
```

**Flow 2 / REQ02: [Tên flow]**

```text
[Điểm bắt đầu]
      → [Bước xử lý 1]
      → [Bước xử lý 2]
      → [Kết quả cuối]
```

### 2.2. Ngoại lệ

- **EX01:** [Điều kiện ngoại lệ] → [Hành vi hệ thống, dữ liệu có/không thay đổi, notification nếu thực sự hiển thị].
- **EX02:** [Truy cập hoặc request không hợp lệ] → [Chặn hành động và kết quả].
- **EX03:** [Xử lý thất bại] → [Cách khôi phục/giữ dữ liệu].

### 2.3. Yêu cầu khác

- **REQ01 – [Tên nhóm requirement]:** [Quy tắc nghiệp vụ hoặc hành vi bắt buộc].
- **REQ02 – [Tên nhóm requirement]:** [Quy tắc search/filter/phân trang].
- **REQ03 – [Tên nhóm requirement]:** [Quy tắc validation/duy nhất/định dạng].
- **REQ04 – [Tên nhóm requirement]:** [Quy tắc liên kết và phạm vi dữ liệu].
- **REQ05 – [Tên nhóm requirement]:** [Quy tắc bảo mật hoặc xử lý đồng thời].

### 2.4. Ràng buộc

#### Quyền

| Role | Xem | Tạo | Chỉnh sửa | Xóa | [Hành động riêng] |
|---|:---:|:---:|:---:|:---:|:---:|
| [Role được phép 1] | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Role được phép 2] | ✅ | ❌ | ❌ | ❌ | [✅/❌] |
| Các role khác | ❌ | ❌ | ❌ | ❌ | ❌ |

#### Phạm vi dữ liệu

- [Role 1] được xem/thao tác trên [toàn bộ dữ liệu/phạm vi cụ thể].
- [Role 2] chỉ được xem/thao tác trên [dữ liệu được gán/dữ liệu do mình tạo...].
- Không cho phép truy cập hoặc thực hiện hành động bị đánh dấu `❌`, kể cả khi gọi trực tiếp bằng URL hoặc request.

---

## 3. Cần xác nhận

- [Quy tắc nghiệp vụ chưa được cung cấp].
- [Nội dung notification chưa có thiết kế/xác nhận].
- [Giá trị mặc định hoặc field bắt buộc chưa rõ].
- [Phạm vi dữ liệu/quyền chưa được xác nhận].
