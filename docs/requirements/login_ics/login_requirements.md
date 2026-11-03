# Đăng nhập ICS

## 1. UI

### Trang 1: Đăng nhập

**Mô tả:**
- Người dùng nhập tài khoản (email)/mật khẩu để đăng nhập; màn hình đăng nhập không có bước chọn trung tâm.
- Thiết bị đã có tài khoản trong danh sách thì hiển thị `Chọn tài khoản` (Trang 5) thay cho form này.

**Điểm cần lưu ý:**
- Form gồm `Tài khoản` (placeholder `Nhập tài khoản`, chỉ nhận email), `Mật khẩu` (placeholder `Nhập mật khẩu`), icon mắt, nút `ĐĂNG NHẬP` và `Bạn quên mật khẩu?`.
- Password mặc định được che; icon mắt chỉ đổi trạng thái hiển thị, không đổi giá trị.
- Sau khi đăng nhập, phiên làm việc dùng trung tâm mặc định của tài khoản; người dùng chọn trung tâm khác ở cuối thanh menu trái (Trang 7). Tại một thời điểm chỉ có 1 trung tâm được chọn.
- Người chưa đăng nhập không xem và không tải danh sách trung tâm.
- Mỗi role có access token riêng. Đăng nhập thành công mặc định dùng role đầu tiên của tài khoản; muốn dùng role khác thì đổi role, không cần đăng nhập lại.

### Trang 2: Quên mật khẩu

**Mô tả:**
- Người dùng nhập email để yêu cầu nhận liên kết đặt lại mật khẩu.

**Điểm cần lưu ý:**
- Giữ khu vực nhận diện thương hiệu của màn hình đăng nhập; form gồm hướng dẫn, ô `Email`, nút `Xác nhận` và `Quay lại`.
- Khi chuyển từ Đăng nhập sang Quên mật khẩu, giữ email và xóa password.
- Kết quả tiếp nhận yêu cầu không được tiết lộ email có tồn tại hoặc có đủ điều kiện hay không.
- Backend chưa có API cho luồng quên mật khẩu.

### Trang 3: Đặt lại mật khẩu từ email

**Mô tả:**
- Người dùng mở liên kết trong email và đặt mật khẩu mới trên trang do Firebase cung cấp.

**Điểm cần lưu ý:**
- Trang hiển thị `Reset your password`, email tài khoản, ô `New password`, icon mắt và nút `SAVE`; không có ô nhập lại mật khẩu. Lưu thành công hiển thị `Password changed` và `You can now sign in with your new password`.
- Đây là bước xác nhận bằng liên kết email, không có bước nhập OTP hoặc xác minh email riêng.
- Chỉ đổi mật khẩu sau khi liên kết và mật khẩu mới đều hợp lệ; mở liên kết chưa làm đổi mật khẩu.
- Backend chưa có API cho luồng quên mật khẩu.

### Trang 4: Đổi mật khẩu trong hồ sơ cá nhân

**Mô tả:**
- Người dùng đã đăng nhập vào hồ sơ cá nhân để đổi mật khẩu của chính mình.

**Điểm cần lưu ý:**
- Chưa có thiết kế UI cho form đổi mật khẩu (xem mục 4).
- Đã có API `POST /users/{user_id}/change-password`, gửi mật khẩu mới trong field `password`.
- API nhận `password` trống sẽ đưa mật khẩu về mặc định, nên FE không được gửi request khi mật khẩu mới để trống.
- Khác với Quên mật khẩu: không gửi email, không dùng liên kết.

### Trang 5: Chọn tài khoản

**Mô tả:**
- Liệt kê các tài khoản đã từng đăng nhập trên thiết bị để chọn lại hoặc thêm tài khoản mới mà không cần đăng xuất.
- Thiết bị đã có tài khoản trong danh sách và chưa có phiên đăng nhập thì mở hệ thống vào màn hình này thay cho form Đăng nhập.

**Điểm cần lưu ý:**
- Mỗi tài khoản là 1 thẻ gồm avatar, tên, email; tài khoản không còn phiên hợp lệ có nhãn đỏ `Đã đăng xuất`. Rê chuột vào thẻ hiện nút `x` để xóa khỏi danh sách. Thẻ `Thêm tài khoản` nằm cuối danh sách, mở Trang 6.
- Bấm thẻ tài khoản mở form `Chuyển tài khoản`: ô `Tài khoản` chỉ đọc (điền sẵn email), nút `TIẾP TỤC` và `Quay lại`.
- Tài khoản còn phiên: form hiển thị `Tài khoản đã sẵn sàng để tiếp tục`, không có ô mật khẩu; bấm `TIẾP TỤC` vào thẳng hệ thống.
- Tài khoản `Đã đăng xuất`: form hiển thị `Phiên đăng nhập đã hết hạn, vui lòng nhập lại mật khẩu`, có thêm ô `Mật khẩu` và `Bạn quên mật khẩu?`.
- Không giới hạn số tài khoản trong danh sách.
- Xóa tài khoản phải xác nhận qua hộp thoại `Xóa tài khoản khỏi lịch sử?`; chỉ xóa khỏi danh sách trên thiết bị, không xóa tài khoản trong hệ thống.
- `Đăng xuất` chỉ kết thúc phiên của tài khoản đang dùng; tài khoản vẫn nằm trong danh sách với nhãn `Đã đăng xuất`.
- Sau khi đăng nhập, chuyển tài khoản, thêm tài khoản, đổi role (`Chuyển vị trí`) và đăng xuất thực hiện từ menu tài khoản trên header.

### Trang 6: Thêm tài khoản

**Mô tả:**
- Người dùng đăng nhập thêm 1 tài khoản khác vào danh sách tài khoản trên thiết bị.

**Điểm cần lưu ý:**
- Tiêu đề `Thêm tài khoản`, mô tả `Đăng nhập tài khoản cần thêm`; form gồm `Tài khoản`, `Mật khẩu`, icon mắt, nút `THÊM TÀI KHOẢN`, `Quay lại` và `Bạn quên mật khẩu?` (mở Trang 2 như form Đăng nhập).
- Mở từ thẻ `Thêm tài khoản` ở Trang 5 hoặc nút `Thêm tài khoản` trong menu tài khoản trên header.
- Thêm thành công thì phiên chuyển sang tài khoản vừa thêm, tài khoản trước đó vẫn nằm trong danh sách; thất bại khi đang đăng nhập thì giữ nguyên phiên hiện tại.
- Quy tắc kiểm tra dữ liệu và thông báo lỗi giống Trang 1.

### Trang 7: Chọn trung tâm sau đăng nhập

**Mô tả:**
- Sau khi đăng nhập, người dùng chọn trung tâm làm việc bằng nút chọn trung tâm ở cuối thanh menu bên trái.

**Điểm cần lưu ý:**
- Nút hiển thị tên trung tâm đang chọn (ví dụ `ĐẮC NHÂN`); chưa chọn hiển thị `Chọn trung tâm`. Bấm nút mở danh sách gồm ô tìm kiếm `Tìm trung tâm...` và các dòng trung tâm (tên viết tắt, tên đầy đủ, mã dạng `#10`; trung tâm đang chọn được đánh dấu).
- Chỉ có đúng 1 trung tâm được chọn; chọn trung tâm khác thì trung tâm cũ tự bỏ chọn. Không có trạng thái không chọn trung tâm nào; bấm lại trung tâm đang chọn không bỏ chọn.
- Danh sách không dùng checkbox chọn nhiều; nút chỉ hiển thị tên 1 trung tâm.
- Lựa chọn được lưu theo từng tài khoản trên thiết bị và giữ lại cho lần đăng nhập sau.
- Chọn trung tâm không làm thay đổi hồ sơ, quyền hoặc mật khẩu.
- Danh sách hiển thị toàn bộ trung tâm, không giới hạn theo role hoặc tài khoản.
- Bộ chọn trung tâm này không áp dụng cho role `Admin`: Admin lọc theo trung tâm bằng bộ lọc `Trung tâm` trên từng danh sách và chọn `Trung tâm` trong popup tạo mới.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Trung tâm mặc định và chọn trung tâm sau đăng nhập (REQ01)**

```
Đăng nhập thành công → Hệ thống lấy trung tâm mặc định của tài khoản → Phiên làm việc dùng trung tâm mặc định
      → Người dùng chọn trung tâm khác ở nút chọn trung tâm (Flow 9)
      → Phiên làm việc chuyển sang trung tâm được chọn
```

**Flow 2: Đăng nhập (REQ02–REQ04 / REQ10–REQ11 / REQ18 / REQ20)**

```
Nhập email + password → Bấm "ĐĂNG NHẬP" hoặc Enter
      → Thiếu email: "Vui lòng nhập email."
      → Email sai định dạng: "Email không đúng định dạng."
      → Thiếu password: "Vui lòng nhập mật khẩu."
      → FE trim và chuyển email thành chữ thường; giữ nguyên toàn bộ ký tự password, kể cả khoảng trắng
      → Dữ liệu hợp lệ: FE khóa form, gửi request
      → BE xác thực tài khoản, trạng thái, role được phép đăng nhập
      → Thành công: tạo phiên đúng user theo trung tâm mặc định, chuyển đến trang đích, không notification
            → BE lấy role đầu tiên của tài khoản tạo access token (trả kèm role)
            → BE trả refresh token trong JSON response và set cookie
      → Sai email/password: "Email hoặc mật khẩu không đúng."
      → Không đủ điều kiện: "Tài khoản không được phép đăng nhập vào trung tâm này."
      → Lỗi mạng: "Không thể kết nối đến hệ thống. Vui lòng thử lại."
      → Lỗi hệ thống: "Hệ thống đang gặp sự cố. Vui lòng thử lại sau."
      → Vượt giới hạn: "Bạn đã thử quá nhiều lần. Vui lòng thử lại sau {thời gian}."
```

**Flow 3: Yêu cầu khôi phục mật khẩu (REQ05–REQ07)**

```
Bấm "Bạn quên mật khẩu?" → FE giữ email, xóa password, mở form khôi phục
      → Nhập email, bấm "Xác nhận"
      → Thiếu email: "Vui lòng nhập email." / sai định dạng: "Email không đúng định dạng."
      → Dữ liệu hợp lệ: FE khóa form, gọi API
      → BE tiếp nhận, gửi email nếu tài khoản đủ điều kiện
      → FE hiển thị "Nếu tài khoản đủ điều kiện, bạn sẽ nhận được email hướng dẫn đặt lại mật khẩu."
      → Lỗi mạng / hệ thống / vượt giới hạn: hiển thị thông báo như Flow 2
```

**Flow 4: Đặt lại mật khẩu từ email (REQ08–REQ09 / REQ12–REQ14)**

```
Mở liên kết trong email → Firebase kiểm tra liên kết
      → Không hợp lệ/hết hạn/đã dùng: "Your password reset link is invalid or has expired."
      → Nhập mật khẩu mới, bấm "SAVE"
            → Không đạt chính sách: "Password does not meet the requirements."
            → Trùng mật khẩu hiện tại: "New password must be different from your current password."
            → Thành công: "Password changed" + "You can now sign in with your new password"
                  → Mật khẩu cũ hết hiệu lực
                  → BE hủy toàn bộ session của tài khoản trên tất cả thiết bị
                  → User đang đăng nhập cùng tài khoản về login: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại."
                  → User đang ở màn hình login không bị chuyển trang; dùng mật khẩu cũ: "Email hoặc mật khẩu không đúng."
                  → Quay lại ICS, đăng nhập bằng mật khẩu mới
```

**Flow 5: Đổi mật khẩu trong hồ sơ cá nhân (REQ15–REQ17)**

```
Đã đăng nhập, mở hồ sơ cá nhân → Mở form đổi mật khẩu → Nhập mật khẩu mới, xác nhận
      → Để trống: báo lỗi, không gửi request
      → Không đạt chính sách: báo lỗi, không đổi
      → Hợp lệ: FE gọi API đổi mật khẩu của chính mình → BE lưu → FE thông báo thành công → Mật khẩu cũ hết hiệu lực
```

**Flow 6: Đổi role (REQ19–REQ20)**

```
Đang dùng access token role A → Chọn role B → FE gửi refresh token kèm role B
      → BE trả access token mới của role B (kèm role) + refresh token (JSON và cookie)
      → Phiên dùng role B, không cần đăng nhập lại
```

**Flow 7: Chọn tài khoản (REQ21–REQ24)**

```
Mở hệ thống khi chưa có phiên
      → Thiết bị chưa có tài khoản: form Đăng nhập
      → Thiết bị đã có tài khoản: "Chọn tài khoản" → bấm thẻ tài khoản
            → Còn phiên: "Tài khoản đã sẵn sàng để tiếp tục" → "TIẾP TỤC" → vào hệ thống
            → "Đã đăng xuất": "Phiên đăng nhập đã hết hạn, vui lòng nhập lại mật khẩu" → nhập mật khẩu → "TIẾP TỤC"
            → Thành công: phiên, dữ liệu, quyền theo tài khoản đã chọn
            → Bấm "x" trên thẻ và xác nhận: xóa tài khoản khỏi danh sách trên thiết bị
```

**Flow 8: Thêm tài khoản (REQ25)**

```
Bấm "Thêm tài khoản" (Chọn tài khoản hoặc menu header) → Nhập tài khoản + mật khẩu, "THÊM TÀI KHOẢN" hoặc Enter
      → Kiểm tra dữ liệu và xác thực như Flow 2
      → Thành công: thêm vào danh sách, phiên chuyển sang tài khoản vừa thêm
      → Thất bại: báo lỗi, giữ phiên tài khoản đang dùng (nếu có)
      → "Quay lại": về màn hình trước, không đổi phiên
```

**Flow 9: Chọn trung tâm sau đăng nhập (REQ26–REQ27)**

```
Đã đăng nhập, bấm nút chọn trung tâm ở cuối menu trái → Hiển thị danh sách, trung tâm đang chọn được đánh dấu
      → Tìm bằng ô "Tìm trung tâm..."
      → Chọn 1 trung tâm: trung tâm cũ tự bỏ chọn, phiên dùng trung tâm mới
      → Bấm lại trung tâm đang chọn: giữ nguyên
      → Nút hiển thị tên trung tâm đang chọn; lựa chọn lưu theo tài khoản trên thiết bị
```

### 2.2. Ngoại lệ

- **EX01:** Bỏ trống email/password hoặc email sai định dạng → lần lượt hiển thị `Vui lòng nhập email.`, `Vui lòng nhập mật khẩu.` hoặc `Email không đúng định dạng.`; không gửi request.
- **EX02:** Email không tồn tại hoặc password sai → báo `Email hoặc mật khẩu không đúng.`, không tạo phiên.
- **EX03:** Tài khoản bị khóa hoặc không có role được phép đăng nhập → hiển thị `Tài khoản không được phép đăng nhập vào trung tâm này.`, không tạo phiên.
- **EX04:** Lỗi mạng → `Không thể kết nối đến hệ thống. Vui lòng thử lại.`; lỗi hệ thống → `Hệ thống đang gặp sự cố. Vui lòng thử lại sau.`. Sau lỗi mở khóa form, giữ email; riêng login phải xóa password và không tự gửi lại.
- **EX05:** Vượt giới hạn tần suất → `Bạn đã thử quá nhiều lần. Vui lòng thử lại sau {thời gian}.` theo `Retry-After`, không tự gửi lại.
- **EX06:** Liên kết đặt lại mật khẩu hết hạn, không hợp lệ hoặc đã dùng → `Your password reset link is invalid or has expired.`, không đổi mật khẩu và hướng dẫn yêu cầu email mới.
- **EX07:** Mật khẩu mới không đạt chính sách → `Password does not meet the requirements.`, cho sửa, không đổi mật khẩu.
- **EX08:** Mật khẩu mới trùng mật khẩu hiện tại → `New password must be different from your current password.`, cho nhập lại, không đổi mật khẩu.
- **EX09:** Bỏ trống mật khẩu mới ở form đổi mật khẩu trong hồ sơ cá nhân → báo lỗi tại ô mật khẩu mới, không gửi request, không đổi mật khẩu.
- **EX10:** Mật khẩu mới ở form đổi mật khẩu trong hồ sơ cá nhân không đạt chính sách → báo lỗi, cho sửa, không đổi mật khẩu.
- **EX11:** Chọn tài khoản `Đã đăng xuất` hoặc phiên không còn hợp lệ → `Phiên đăng nhập đã hết hạn, vui lòng nhập lại mật khẩu`, yêu cầu nhập mật khẩu; không vào hệ thống khi chưa xác thực lại.
- **EX12:** Thêm tài khoản thất bại (sai thông tin, tài khoản không được phép, lỗi mạng/hệ thống) → báo lỗi như đăng nhập, không thêm vào danh sách, giữ nguyên phiên tài khoản đang dùng.
- **EX13:** Bấm lại trung tâm đang chọn → giữ nguyên lựa chọn; không có trạng thái không chọn trung tâm nào.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Trung tâm khi đăng nhập | Màn hình đăng nhập và khôi phục mật khẩu không có bước chọn trung tâm; người chưa đăng nhập không tải được danh sách trung tâm. Sau đăng nhập dùng trung tâm mặc định của tài khoản và cho chọn trung tâm khác (REQ26). |
| REQ02 | Chuẩn hóa email | Email loại khoảng trắng đầu/cuối và chuyển chữ thường; password giữ nguyên ký tự. |
| REQ03 | Khóa form khi gửi | Trong lúc gửi request, khóa input, nút gửi và chuyển form; không cho gửi lặp. |
| REQ04 | Login thất bại | Giữ email, xóa password và mở khóa form. |
| REQ05 | Quay lại từ Quên mật khẩu | Giữ email; password rỗng và được che. |
| REQ06 | Thông báo khôi phục | Luôn là `Nếu tài khoản đủ điều kiện, bạn sẽ nhận được email hướng dẫn đặt lại mật khẩu.` để không tiết lộ tài khoản có tồn tại hay không. |
| REQ07 | Tiếp nhận yêu cầu khôi phục | Chưa đổi mật khẩu, chưa tạo phiên, không đồng nghĩa email đã được giao. |
| REQ08 | Chỉ đổi khi lưu thành công | Mở email hoặc trang Firebase chưa đổi mật khẩu; chỉ đổi khi liên kết hợp lệ và lưu mật khẩu mới thành công. |
| REQ09 | Sau khi đổi mật khẩu | Mật khẩu mới dùng được, mật khẩu cũ bị từ chối; hồ sơ và quyền không đổi. |
| REQ10 | Phiên đăng nhập | Phiên thuộc đúng user và dùng trung tâm mặc định của tài khoản; đăng nhập và chọn trung tâm không đổi hồ sơ, quyền hay mật khẩu. |
| REQ11 | Role được phép | User có ít nhất 1 role trong danh sách cho phép (mục 2.4) thì được đăng nhập; không có role nào trong danh sách thì bị từ chối. |
| REQ12 | Hủy session khi reset | Đặt lại mật khẩu thành công hủy toàn bộ session của tài khoản trên tất cả thiết bị; các user đang dùng cùng tài khoản về login và thấy `Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.` |
| REQ13 | User đang ở màn hình login | Chưa có session nên không bị đăng xuất khi tài khoản được reset; từ lúc reset thành công, mật khẩu cũ bị từ chối, chỉ mật khẩu mới đăng nhập được. |
| REQ14 | Mật khẩu mới | Không được trùng mật khẩu hiện tại; không chặn theo lịch sử (sau khi đổi P1 sang P2, lần sau được dùng lại P1). |
| REQ15 | Đổi mật khẩu hồ sơ cá nhân | Chỉ người đã đăng nhập đổi được, và chỉ đổi mật khẩu của chính mình. |
| REQ16 | Sau khi đổi trong hồ sơ | Mật khẩu mới đăng nhập được, mật khẩu cũ bị từ chối; hồ sơ và quyền không đổi. |
| REQ17 | Không gửi mật khẩu trống | Không gửi yêu cầu đổi mật khẩu khi mật khẩu mới để trống, vì API sẽ đưa mật khẩu về mặc định nếu `password` trống. |
| REQ18 | Access token theo role | Mỗi role có access token riêng; khi đăng nhập mặc định lấy role đầu tiên của tài khoản, access token trả về kèm role. |
| REQ19 | Đổi role | Dùng refresh token kèm role cần đổi để lấy access token mới của role đó; không cần đăng nhập lại. |
| REQ20 | Refresh token | Trả đồng thời trong JSON response và set cookie. |
| REQ21 | Màn hình khi chưa có phiên | Thiết bị đã có tài khoản trong danh sách thì hiển thị `Chọn tài khoản`; chưa có thì hiển thị form Đăng nhập. |
| REQ22 | Chọn tài khoản | Tài khoản còn phiên vào hệ thống không cần mật khẩu; tài khoản `Đã đăng xuất` phải nhập lại mật khẩu; sau khi chuyển, dữ liệu và quyền theo tài khoản được chọn. |
| REQ23 | Xóa khỏi danh sách | Có bước xác nhận; chỉ xóa khỏi danh sách trên thiết bị, không xóa hoặc khóa tài khoản trong hệ thống. |
| REQ24 | Đăng xuất | Chỉ kết thúc phiên của tài khoản đang dùng; tài khoản vẫn trong danh sách với nhãn `Đã đăng xuất`; phiên tài khoản khác không bị ảnh hưởng. |
| REQ25 | Thêm tài khoản | Dùng cùng quy tắc kiểm tra và xác thực với đăng nhập; ô `Tài khoản` chỉ nhận email; không giới hạn số tài khoản; thành công chuyển phiên sang tài khoản vừa thêm và giữ tài khoản trước trong danh sách; thất bại giữ nguyên phiên hiện tại. |
| REQ26 | Chọn trung tâm | Chọn bằng nút ở cuối thanh menu trái; tại một thời điểm chỉ đúng 1 trung tâm; danh sách hiển thị toàn bộ trung tâm, không giới hạn theo role hoặc tài khoản. |
| REQ27 | Lưu lựa chọn trung tâm | Lưu theo từng tài khoản trên thiết bị, khôi phục khi đăng nhập lại hoặc chuyển lại tài khoản đó. |

### 2.4. Ràng buộc

#### Quyền

| Đối tượng | Xem form | Chọn trung tâm | Đăng nhập | Yêu cầu khôi phục | Đổi mật khẩu trong hồ sơ cá nhân |
|---|:---:|:---:|:---:|:---:|:---:|
| Người chưa đăng nhập | ✅ | ❌ | ✅ | ✅ | ❌ |
| Người đã đăng nhập | ❌ | ✅ | ❌ | ❌ | ✅ |

#### Ràng buộc khác

- Chỉ cho vào hệ thống khi tài khoản đang hoạt động, thông tin xác thực đúng và có ít nhất 1 role được phép đăng nhập: Curriculum Development Handler, Curriculum Development Tasker, Sale, Sale Handler, Support, Class Handler, Teaching Assistant, Teacher, Teacher Handler, Parent, Class Monitor, Center Administrator, Master, Center Manager, Quality Control, Financial Management, App Handler, Resale, Manager, Administrator, Trainee, Trainer.
- Đổi mật khẩu trong hồ sơ cá nhân dùng `POST /users/{user_id}/change-password`; chỉ đổi mật khẩu của chính mình.
- Backend chưa có API quên mật khẩu (gửi email khôi phục, đặt lại từ liên kết); phần Firebase cần thống nhất tích hợp.

---

## 3. Testcase

### Feature: Đăng nhập ICS

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Đăng nhập thành công và vào trung tâm mặc định | High | Flow 1 / Flow 2 / REQ01 / REQ10 / REQ18 / REQ20 | User (thử với từng role trong danh sách được phép) | Tài khoản hoạt động, có trung tâm mặc định | **Given:** Nhập đúng email/password<br>**When:** Bấm `ĐĂNG NHẬP` hoặc Enter<br>**Then:** Hệ thống xác thực, tạo phiên | - Phiên đúng user và trung tâm mặc định<br>- Access token theo role đầu tiên kèm role; refresh token có trong JSON và cookie<br>- Không đổi hồ sơ, quyền, password; không notification<br>- Người chưa đăng nhập không tải được danh sách trung tâm |
| Case 2: Validate và chuẩn hóa dữ liệu đăng nhập | High | EX01 / REQ02 / Flow 2 | Guest | Form đăng nhập đang rảnh | **Given:** Thiếu email/password, email sai định dạng; hoặc email ` USER@EXAMPLE.COM ` và password ` Abc 123 `<br>**When:** Bấm `ĐĂNG NHẬP` hoặc Enter<br>**Then:** FE báo lỗi hoặc chuẩn hóa trước khi gửi | - Hiển thị `Vui lòng nhập email.`, `Vui lòng nhập mật khẩu.` hoặc `Email không đúng định dạng.`, không gọi API<br>- Email gửi đi `user@example.com`, password giữ nguyên khoảng trắng<br>- Nhập `Abc 123` (thiếu khoảng trắng) báo `Email hoặc mật khẩu không đúng.` |
| Case 3: Sai thông tin hoặc không được phép đăng nhập | High | EX02 / EX03 / REQ04 / REQ11 | Guest; role không thuộc danh sách | Email/password sai, hoặc đúng nhưng tài khoản bị khóa/không có role được phép | **Given:** Người dùng gửi yêu cầu đăng nhập<br>**When:** Hệ thống xác thực<br>**Then:** Từ chối | - Sai: `Email hoặc mật khẩu không đúng.`<br>- Không được phép: `Tài khoản không được phép đăng nhập vào trung tâm này.`<br>- Không tạo phiên; giữ email, xóa password |
| Case 4: Khóa form, lỗi mạng/hệ thống/giới hạn | High | REQ03 / EX04 / EX05 | Guest | Request đang xử lý hoặc API lỗi/429 | **Given:** Đã gửi dữ liệu hợp lệ<br>**When:** Bấm gửi lặp, hoặc request thất bại<br>**Then:** Chặn gửi lặp; lỗi thì báo và mở khóa | - Input, nút gửi, chuyển form bị khóa; chỉ 1 request; không notification khi chặn lặp<br>- Đúng 3 thông báo lỗi mạng / hệ thống / `Bạn đã thử quá nhiều lần. Vui lòng thử lại sau {thời gian}.`<br>- Giữ email, xóa password, không tự gửi lại |
| Case 5: Ẩn/hiện password | Low | Trang 1 | Guest | Đã nhập password | **Given:** Password đang được che<br>**When:** Bấm icon mắt, bấm lại<br>**Then:** Hiện rồi che | - Giá trị password không đổi<br>- Không notification |
| Case 6: Quên mật khẩu: mở, quay lại, validate, tiếp nhận | High | Flow 3 / EX01 / EX04 / EX05 / REQ03 / REQ05–REQ07 | Guest | Form đăng nhập có email và password | **Given:** Bấm `Bạn quên mật khẩu?`, nhập email (hợp lệ, trống, sai định dạng, không tồn tại) rồi `Xác nhận`; thử `Quay lại`<br>**When:** Gửi yêu cầu<br>**Then:** Hệ thống tiếp nhận hoặc báo lỗi | - Mở form giữ email, xóa password; `Quay lại` giữ email, password rỗng và được che<br>- Hợp lệ hoặc tài khoản không tồn tại/không đủ điều kiện: cùng thông báo `Nếu tài khoản đủ điều kiện, ...`, không tiết lộ trạng thái, chưa đổi password/chưa tạo phiên<br>- Thiếu/sai định dạng: báo lỗi, không gọi API; lỗi mạng/hệ thống/429 như Case 4 |
| Case 7: Đặt lại mật khẩu thành công và hủy session | High | Flow 4 / REQ08 / REQ09 / REQ12 / REQ13 | User | Liên kết hợp lệ; mật khẩu mới đạt chính sách; tài khoản A đang đăng nhập nhiều thiết bị và một user khác đang ở màn hình login | **Given:** Mở liên kết (chưa đổi password), nhập mật khẩu mới<br>**When:** Bấm `SAVE`<br>**Then:** Firebase lưu mật khẩu, hệ thống hủy session | - Hiển thị `Password changed` và `You can now sign in with your new password`<br>- Mọi user dùng tài khoản A về login với `Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.`; session tài khoản khác không ảnh hưởng<br>- User đang ở login không bị chuyển trang; mật khẩu cũ báo `Email hoặc mật khẩu không đúng.`, mật khẩu mới vào được |
| Case 8: Liên kết lỗi và mật khẩu mới không hợp lệ | High | EX06 / EX07 / EX08 / REQ14 | Guest; User | Liên kết hết hạn/đã dùng; hoặc liên kết hợp lệ | **Given:** Mở liên kết lỗi; hoặc nhập mật khẩu không đạt chính sách; hoặc nhập lại mật khẩu hiện tại<br>**When:** Mở liên kết hoặc bấm `SAVE`<br>**Then:** Từ chối đổi | - `Your password reset link is invalid or has expired.` kèm hướng dẫn yêu cầu email mới<br>- `Password does not meet the requirements.` / `New password must be different from your current password.`<br>- Password không đổi, không hủy session, cho nhập lại |
| Case 9: Dùng lại mật khẩu cũ không phải hiện tại | Medium | Flow 4 / REQ14 | User | Tài khoản đã đổi P1 sang P2; liên kết hợp lệ | **Given:** P1 là mật khẩu cũ, P2 là hiện tại<br>**When:** Nhập P1 làm mật khẩu mới, `SAVE`<br>**Then:** Đổi từ P2 về P1 | - Hiển thị `Password changed`<br>- P1 đăng nhập được, P2 bị từ chối<br>- Hủy toàn bộ session cũ theo REQ12 |
| Case 10: Đổi mật khẩu trong hồ sơ cá nhân | High | Flow 5 / EX09 / EX10 / REQ15–REQ17 | User | Đã đăng nhập; form đổi mật khẩu đang mở | **Given:** Nhập mật khẩu mới hợp lệ, để trống, hoặc không đạt chính sách<br>**When:** Xác nhận<br>**Then:** Lưu hoặc chặn | - Hợp lệ: thông báo thành công, mật khẩu mới đăng nhập được, mật khẩu cũ bị từ chối, hồ sơ/quyền giữ nguyên<br>- Trống: báo lỗi tại ô, không gửi request, không bị đưa về mật khẩu mặc định<br>- Không đạt chính sách: báo lỗi, mật khẩu không đổi |
| Case 11: Ràng buộc quyền đổi mật khẩu | High | REQ15 / Ràng buộc quyền | Guest; User | Người chưa đăng nhập; hoặc đã đăng nhập tài khoản A, tài khoản B tồn tại | **Given:** Gửi yêu cầu đổi mật khẩu khi chưa đăng nhập, hoặc cho tài khoản B<br>**When:** Gửi yêu cầu<br>**Then:** Từ chối | - Không đổi mật khẩu; chưa đăng nhập thì yêu cầu đăng nhập<br>- Tài khoản B không đổi, báo không có quyền |
| Case 12: Đổi role bằng refresh token | High | Flow 6 / REQ19 / REQ20 | User | Đã đăng nhập; tài khoản có role A (đang dùng) và role B | **Given:** Đang dùng access token role A<br>**When:** Gửi refresh token kèm role B<br>**Then:** Trả access token mới của role B | - Response có access token kèm role B, khác token role A; refresh token trong JSON và cookie<br>- Không phải đăng nhập lại; hồ sơ, danh sách role, mật khẩu không đổi |
| Case 13: Hiển thị và chọn tài khoản | High | Flow 7 / EX11 / REQ21 / REQ22 | Guest; User | Thiết bị có tài khoản A còn phiên và tài khoản B `Đã đăng xuất` | **Given:** Mở hệ thống khi chưa có phiên; bấm thẻ A rồi thẻ B<br>**When:** Bấm `TIẾP TỤC` (B nhập đúng hoặc sai mật khẩu)<br>**Then:** A vào thẳng, B yêu cầu mật khẩu | - Thẻ có avatar, tên, email, nhãn `Đã đăng xuất`, thẻ `Thêm tài khoản`; thiết bị chưa có tài khoản thì hiện form Đăng nhập<br>- A: `Tài khoản đã sẵn sàng để tiếp tục`, không ô mật khẩu, ô `Tài khoản` chỉ đọc<br>- B: `Phiên đăng nhập đã hết hạn, vui lòng nhập lại mật khẩu`; đúng thì vào B, sai thì `Email hoặc mật khẩu không đúng.`, không tạo phiên |
| Case 14: Xóa tài khoản khỏi danh sách và đăng xuất | Medium | REQ23 / REQ24 | User | Danh sách có tài khoản A; đang đăng nhập A | **Given:** Rê chuột, bấm `x` rồi xác nhận/hủy; sau đó đăng xuất A ở menu header<br>**When:** Hoàn tất thao tác<br>**Then:** Danh sách cập nhật đúng | - Hộp thoại `Xóa tài khoản khỏi lịch sử?` kèm email; hủy thì không đổi; xác nhận thì thẻ biến mất, tài khoản trong hệ thống không xóa; xóa hết thì về form Đăng nhập<br>- Đăng xuất: về `Chọn tài khoản`, thẻ A `Đã đăng xuất` và phải nhập lại mật khẩu; tài khoản khác không bị ảnh hưởng |
| Case 15: Thêm tài khoản | High | Flow 8 / EX01 / EX12 / REQ25 | Guest; User | Đang đăng nhập A; B hoạt động | **Given:** Mở `Thêm tài khoản`, nhập đúng/sai/trống thông tin B, hoặc bấm `Quay lại`<br>**When:** Bấm `THÊM TÀI KHOẢN`<br>**Then:** Thêm hoặc báo lỗi | - Đúng: phiên chuyển sang B, A vẫn trong danh sách và chuyển lại không cần mật khẩu khi còn phiên<br>- Sai: `Email hoặc mật khẩu không đúng.`, không thêm, phiên A giữ nguyên<br>- Trống: báo lỗi, không gọi API; `Quay lại` về màn hình trước, phiên không đổi |
| Case 16: Chọn trung tâm | High | Flow 9 / EX13 / REQ26 | User | Đã đăng nhập; hệ thống có nhiều trung tâm | **Given:** Mở danh sách trung tâm ở cuối menu trái<br>**When:** Tìm từ khóa, chọn trung tâm B, bấm lại trung tâm đang chọn<br>**Then:** Chỉ 1 trung tâm được chọn | - Có ô `Tìm trung tâm...`, mỗi dòng tên viết tắt/tên đầy đủ/mã `#{mã}`, không checkbox, đủ toàn bộ trung tâm cho mọi role<br>- Không khớp: `Không tìm thấy trung tâm`; tìm không bỏ chọn<br>- Chọn B tự bỏ chọn A, nút hiển thị tên B; bấm lại trung tâm đang chọn vẫn giữ nguyên; không đổi hồ sơ/quyền/mật khẩu |
| Case 17: Giữ lựa chọn trung tâm theo tài khoản | High | REQ27 | User | Tài khoản A chọn trung tâm X, tài khoản B chọn Y trên cùng thiết bị | **Given:** Đang dùng A với X<br>**When:** Chuyển sang B rồi chuyển lại A hoặc đăng nhập lại A<br>**Then:** Khôi phục lựa chọn từng tài khoản | - B hiển thị Y, A hiển thị lại X<br>- Lựa chọn tài khoản này không ghi đè tài khoản khác |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Các trang trong requirement này chưa có mã màn Figma; cần design cấp mã (theo quy ước `<HỌ>-<MODULE>-NNNNNN`) hoặc cho biết frame nằm ở file Figma nào.
- **Q02:** Chính sách mật khẩu mới.
- **Q03:** Thời hạn liên kết và cách xử lý liên kết đã dùng hoặc nhiều email khôi phục.
- **Q04:** Thời hạn phiên và trang đích thực tế.
- **Q05:** Backend chưa có API quên mật khẩu (gửi email khôi phục, đặt lại mật khẩu từ liên kết); cần thống nhất tích hợp Firebase trước khi triển khai.
- **Q06:** Form đổi mật khẩu trong hồ sơ cá nhân: vị trí, các field (có nhập mật khẩu hiện tại, có nhập lại mật khẩu mới hay không) và nội dung thông báo; Trang 4 chưa có thiết kế UI.
- **Q07:** Đổi mật khẩu trong hồ sơ cá nhân có hủy session trên các thiết bị khác hay không; có chặn mật khẩu mới trùng mật khẩu hiện tại hay không.
- **Q08:** Trung tâm mặc định của tài khoản được cấu hình ở đâu; xử lý khi tài khoản chưa có trung tâm mặc định hoặc trung tâm mặc định bị khóa.
- **Q09:** Lựa chọn trung tâm hiện chỉ lưu trên thiết bị; có cần lưu về hệ thống để dùng trên thiết bị khác hay không.
- **Q10:** Bố cục khu vực nhận diện thương hiệu (logo, khẩu hiệu) trên màn hình đăng nhập mới.
- **Q11:** Notification `Tài khoản không được phép đăng nhập vào trung tâm này.` còn nhắc trung tâm trong khi màn hình đăng nhập không còn chọn trung tâm.
