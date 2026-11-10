# Đăng nhập ICS

## 1. UI

### Trang 1: Đăng nhập

**Mô tả:**

- Người dùng nhập tài khoản (email)/mật khẩu để đăng nhập; màn hình đăng nhập không có bước chọn trung tâm.
- Sau khi đăng nhập, hệ thống lấy trung tâm mặc định của tài khoản; người dùng chọn trung tâm khác ở cuối thanh menu trái (Trang 7).
- Thiết bị đã có tài khoản trong danh sách thì hiển thị `Chọn tài khoản` (Trang 5) thay cho form này.

**Giải thích field/thành phần:**

- Form gồm `Tài khoản` (placeholder `Nhập tài khoản`), `Mật khẩu` (placeholder `Nhập mật khẩu`), icon mắt, nút `ĐĂNG NHẬP` và `Bạn quên mật khẩu?`.
- Ô `Tài khoản` chỉ nhận email.

**Điểm cần lưu ý:**

- Người chưa đăng nhập không xem và không tải danh sách trung tâm.
- Sau khi đăng nhập, phiên làm việc dùng trung tâm mặc định của tài khoản; tại một thời điểm chỉ có 1 trung tâm được chọn.
- Mỗi role có access token riêng. Đăng nhập thành công mặc định dùng role đầu tiên của tài khoản; muốn dùng role khác thì đổi role, không cần đăng nhập lại.
- Password mặc định được che. Icon mắt chỉ đổi trạng thái hiển thị, không đổi giá trị.

#### Testcase — Trang 1: Đăng nhập

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 1: Vào hệ thống với trung tâm mặc định sau đăng nhập | High | Smoke | Flow 1 / REQ01 | User | Tài khoản hoạt động và có trung tâm mặc định | **Given** Người dùng nhập đúng email/password<br>**When** Đăng nhập thành công<br>**Then** Hệ thống lấy trung tâm mặc định của tài khoản | - Phiên làm việc dùng đúng trung tâm mặc định của tài khoản<br>- Người dùng xem được danh sách trung tâm để chọn<br>- Người chưa đăng nhập không tải được danh sách trung tâm<br>- Không hiển thị notification |
| Case 2: Chọn trung tâm khác sau đăng nhập | Medium |  | Flow 1 / REQ01 / REQ26 | User | Đã đăng nhập; danh sách có ít nhất 2 trung tâm | **Given** Trung tâm A đang được chọn<br>**When** Người dùng chọn trung tâm B<br>**Then** Hệ thống chuyển lựa chọn sang B | - Chỉ B được chọn<br>- Phiên làm việc dùng trung tâm B<br>- Hồ sơ, quyền và mật khẩu không đổi |
| Case 3: Ẩn/hiện password | Low |  | UI | Guest | Đã nhập password | **Given** Password đang được che<br>**When** Người dùng bấm icon mắt<br>**Then** Hệ thống hiện password; bấm lại sẽ che | - Giá trị password không đổi<br>- Không hiển thị notification |
| Case 4: Validate dữ liệu đăng nhập | High |  | EX01 / REQ02 | Guest | Form đăng nhập đang rảnh | **Given** Thiếu email/password hoặc email sai định dạng<br>**When** Bấm `ĐĂNG NHẬP` hoặc Enter<br>**Then** Hệ thống báo lỗi tại dữ liệu không hợp lệ | - Hiển thị tương ứng: `Vui lòng nhập email.`, `Vui lòng nhập mật khẩu.` hoặc `Email không đúng định dạng.`<br>- Không gọi API login<br>- Email hợp lệ được trim và chuyển chữ thường<br>- Password không bị trim |
| Case 5: Đăng nhập thành công với role được phép | High | Smoke | Flow 2 / REQ10 / REQ11 | Curriculum Development Handler<br>Curriculum Development Tasker<br>Sale<br>Sale Handler<br>Support<br>Class Handler<br>Teaching Assistant<br>Teacher<br>Teacher Handler<br>Parent<br>Class Monitor<br>Center Administrator<br>Master<br>Center Manager<br>Quality Control<br>Financial Management<br>App Handler<br>Resale<br>Manager<br>Administrator<br>Trainee<br>Trainer | Tài khoản hoạt động, có trung tâm mặc định và có role đang kiểm tra | **Given** Thực hiện lần lượt với từng role trong cột Role và nhập đúng email/password<br>**When** Bấm `ĐĂNG NHẬP` hoặc Enter<br>**Then** Hệ thống xác thực và tạo phiên | - Từng role nêu trên đều đăng nhập được<br>- Phiên đúng user và trung tâm mặc định của tài khoản<br>- Không đổi hồ sơ, quyền hoặc password<br>- Không hiển thị notification |
| Case 6: Sai email hoặc password | High | Smoke | EX02 / REQ04 | Guest | Form đăng nhập đang rảnh | **Given** Email không tồn tại hoặc password sai<br>**When** Gửi yêu cầu đăng nhập<br>**Then** Hệ thống từ chối xác thực | - Báo `Email hoặc mật khẩu không đúng.`<br>- Không tạo phiên<br>- Giữ email, xóa password |
| Case 7: Không được phép đăng nhập | High |  | EX03 / REQ11 | Role không thuộc danh sách được phép đăng nhập | Thông tin xác thực đúng nhưng tài khoản bị khóa hoặc không có role được phép | **Given** Người dùng không có bất kỳ role nào thuộc các nhóm Curriculum Development Handler, Curriculum Development Tasker, Sale, Sale Handler, Support, Class Handler, Teaching Assistant, Teacher, Teacher Handler, Parent, Class Monitor, Center Administrator, Master, Center Manager, Quality Control, Financial Management, App Handler, Resale, Manager, Administrator, Trainee hoặc Trainer; nhập đúng email/password<br>**When** Gửi yêu cầu đăng nhập<br>**Then** Hệ thống từ chối quyền truy cập | - Hiển thị `Tài khoản không được phép đăng nhập vào trung tâm này.`<br>- User không đăng nhập được<br>- Không tạo phiên<br>- Giữ email, xóa password |
| Case 8: Khóa form trong lúc đăng nhập | High |  | REQ03 | Guest | Request login đang xử lý | **Given** Người dùng đã gửi dữ liệu hợp lệ<br>**When** Tiếp tục bấm gửi hoặc chuyển form<br>**Then** Hệ thống không nhận thao tác mới | - Input, nút gửi và chuyển form bị khóa<br>- Chỉ có 1 request<br>- Không hiển thị thêm notification khi chặn thao tác lặp |
| Case 9: Login lỗi mạng/hệ thống hoặc bị giới hạn | High |  | EX04 / EX05 | Guest | API login lỗi hoặc trả 429 | **Given** Người dùng gửi dữ liệu đăng nhập hợp lệ<br>**When** Request thất bại<br>**Then** Hệ thống báo lỗi và mở khóa form | - Lỗi mạng: `Không thể kết nối đến hệ thống. Vui lòng thử lại.`<br>- Lỗi hệ thống: `Hệ thống đang gặp sự cố. Vui lòng thử lại sau.`<br>- Lỗi 429: `Bạn đã thử quá nhiều lần. Vui lòng thử lại sau {thời gian}.`<br>- Giữ email, xóa password<br>- Không tự gửi lại |
| Case 24: Chuẩn hóa email và giữ nguyên khoảng trắng trong password | High |  | Flow 2 / REQ02 | User | Email tài khoản là `user@example.com`; password hợp lệ là ` Abc 123 `, có khoảng trắng đầu và cuối | **Given** Người dùng nhập email ` USER@EXAMPLE.COM ` và password chính xác ` Abc 123 `<br>**When** Bấm `ĐĂNG NHẬP` hoặc Enter<br>**Then** FE chuẩn hóa email nhưng giữ nguyên password trước khi gửi | - Email gửi đi là `user@example.com`<br>- Password gửi đi vẫn là ` Abc 123 `<br>- Đăng nhập thành công và không hiển thị notification<br>- Nếu nhập `Abc 123` không có khoảng trắng đầu/cuối thì hiển thị `Email hoặc mật khẩu không đúng.` và không tạo phiên |
| Case 30: Đăng nhập với tài khoản nhiều role | High |  | Flow 2 / REQ18 / REQ20 | User | Tài khoản hoạt động, được gán từ 2 role trở lên | **Given** Người dùng nhập đúng email/password<br>**When** Đăng nhập thành công<br>**Then** Hệ thống tạo access token theo role đầu tiên của tài khoản | - Response trả access token kèm role, role là role đầu tiên của tài khoản<br>- Refresh token có trong JSON response<br>- Refresh token đồng thời được set cookie<br>- Hồ sơ, danh sách role và mật khẩu không đổi |
| Case 31: Đổi role bằng refresh token | High |  | Flow 6 / REQ19 / REQ20 | User | Đã đăng nhập; tài khoản có role A (đang dùng) và role B | **Given** Người dùng đang dùng access token của role A<br>**When** Gửi refresh token kèm role B<br>**Then** Hệ thống trả access token mới của role B | - Response trả access token kèm role B<br>- Access token mới khác access token của role A<br>- Refresh token có trong JSON response và được set cookie<br>- Không phải đăng nhập lại<br>- Hồ sơ, danh sách role và mật khẩu không đổi |

### Trang 2: Quên mật khẩu

**Mô tả:**

- Người dùng nhập email để yêu cầu nhận liên kết đặt lại mật khẩu.

**Giải thích field/thành phần:**

- Giữ khu vực nhận diện thương hiệu của màn hình đăng nhập.
- Form gồm hướng dẫn, ô `Email`, nút `Xác nhận` và `Quay lại`.

**Điểm cần lưu ý:**

- Khi chuyển từ Đăng nhập sang Quên mật khẩu, giữ email và xóa password.
- Kết quả tiếp nhận yêu cầu không được tiết lộ email có tồn tại hoặc có đủ điều kiện hay không.
- Backend chưa có API cho luồng quên mật khẩu; testcase của trang này chưa kiểm tra được ở tầng API.

#### Testcase — Trang 2: Quên mật khẩu

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 10: Mở Quên mật khẩu và quay lại | Medium |  | Flow 3 / REQ05 | Guest | Form đăng nhập có email và password | **Given** Form đăng nhập đang rảnh<br>**When** Bấm `Bạn quên mật khẩu?`, sau đó bấm `Quay lại`<br>**Then** Hệ thống lần lượt mở form khôi phục và trở về login | - Giữ email<br>- Password bị xóa và được che<br>- Không hiển thị notification |
| Case 11: Validate dữ liệu khôi phục | High |  | EX01 / REQ02 | Guest | Form Quên mật khẩu đang rảnh | **Given** Thiếu email hoặc email sai định dạng<br>**When** Bấm `Xác nhận`<br>**Then** Hệ thống báo lỗi tại dữ liệu không hợp lệ | - Hiển thị tương ứng: `Vui lòng nhập email.` hoặc `Email không đúng định dạng.`<br>- Không gọi API khôi phục<br>- Email hợp lệ được trim và chuyển chữ thường |
| Case 12: Tiếp nhận yêu cầu khôi phục | High | Smoke | Flow 3 / REQ06 / REQ07 | Guest | Request hợp lệ | **Given** Đã nhập email<br>**When** Bấm `Xác nhận`<br>**Then** Hệ thống tiếp nhận yêu cầu | - Hiển thị `Nếu tài khoản đủ điều kiện, bạn sẽ nhận được email hướng dẫn đặt lại mật khẩu.`<br>- Chưa đổi password, chưa tạo phiên<br>- Nếu tài khoản đủ điều kiện, email chứa liên kết được xếp hàng gửi |
| Case 13: Khôi phục với tài khoản không tồn tại/không đủ điều kiện | High |  | REQ06 | Guest | Email không tồn tại hoặc tài khoản không đủ điều kiện | **Given** Người dùng nhập một request đúng định dạng<br>**When** Bấm `Xác nhận`<br>**Then** Hệ thống trả cùng kết quả tiếp nhận | - Vẫn hiển thị `Nếu tài khoản đủ điều kiện, bạn sẽ nhận được email hướng dẫn đặt lại mật khẩu.`<br>- Không tiết lộ trạng thái tài khoản<br>- Không gửi email<br>- Chưa đổi password, chưa tạo phiên |
| Case 14: Khóa form hoặc lỗi khi gửi yêu cầu khôi phục | Medium |  | REQ03 / EX04 / EX05 | Guest | Form Quên mật khẩu đang gửi request | **Given** Người dùng đã gửi request hợp lệ<br>**When** Gửi lặp hoặc request thất bại<br>**Then** Hệ thống chặn gửi lặp; nếu lỗi thì báo lỗi và mở khóa | - Không hiển thị thêm notification khi chặn thao tác lặp<br>- Lỗi mạng: `Không thể kết nối đến hệ thống. Vui lòng thử lại.`<br>- Lỗi hệ thống: `Hệ thống đang gặp sự cố. Vui lòng thử lại sau.`<br>- Lỗi 429: `Bạn đã thử quá nhiều lần. Vui lòng thử lại sau {thời gian}.`<br>- Giữ email và không tự gửi lại |

### Trang 3: Đặt lại mật khẩu từ email

**Mô tả:**

- Người dùng mở liên kết trong email và đặt mật khẩu mới trên trang do Firebase cung cấp.

**Giải thích field/thành phần:**

- Trang hiển thị `Reset your password`, email tài khoản, ô `New password`, icon mắt và nút `SAVE`; không có ô nhập lại mật khẩu.
- Sau khi lưu thành công, trang hiển thị `Password changed` và `You can now sign in with your new password`.

**Điểm cần lưu ý:**

- Đây là bước xác nhận bằng liên kết email, không có bước nhập OTP hoặc xác minh email riêng.
- Chỉ thay đổi mật khẩu sau khi liên kết và mật khẩu mới đều hợp lệ; mở liên kết chưa làm đổi mật khẩu.
- Backend chưa có API cho luồng quên mật khẩu; testcase của trang này chưa kiểm tra được ở tầng API.

#### Testcase — Trang 3: Đặt lại mật khẩu từ email

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 15: Mở liên kết đặt lại mật khẩu hợp lệ | High |  | Flow 4 / REQ08 | Guest | Có email khôi phục với liên kết còn hiệu lực | **Given** Password chưa bị thay đổi ở bước gửi email<br>**When** Người dùng mở liên kết<br>**Then** Firebase hiển thị trang đặt lại mật khẩu | - Đúng email tài khoản<br>- Có `New password`, icon mắt và `SAVE`<br>- Chưa đổi password khi chỉ mở trang<br>- Không hiển thị notification |
| Case 16: Lưu mật khẩu mới thành công | High | Smoke | Flow 4 / REQ09 / REQ12 | User | Liên kết hợp lệ; mật khẩu mới đạt chính sách | **Given** Trang đặt lại mật khẩu đang mở<br>**When** Nhập mật khẩu mới và bấm `SAVE`<br>**Then** Firebase lưu mật khẩu mới và hệ thống hủy các session cũ | - Hiển thị `Password changed`<br>- Hiển thị `You can now sign in with your new password`<br>- Hủy toàn bộ session của tài khoản trên tất cả thiết bị<br>- User đang dùng cùng tài khoản được đưa về login và thấy `Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.`<br>- Hồ sơ và quyền giữ nguyên<br>- Mật khẩu cũ hết hiệu lực |
| Case 17: Liên kết không hợp lệ/hết hạn/đã dùng | High |  | EX06 | Guest | Liên kết không còn hiệu lực | **Given** Người dùng có một liên kết lỗi<br>**When** Mở liên kết hoặc bấm `SAVE`<br>**Then** Hệ thống từ chối đặt lại mật khẩu | - Hiển thị `Your password reset link is invalid or has expired.`<br>- Password không đổi<br>- Hướng dẫn yêu cầu email mới |
| Case 18: Mật khẩu mới không đạt chính sách | High |  | EX07 | Guest | Liên kết hợp lệ | **Given** Trang đặt lại mật khẩu đang mở<br>**When** Nhập mật khẩu không đạt chính sách và bấm `SAVE`<br>**Then** Hệ thống báo lỗi để sửa | - Hiển thị `Password does not meet the requirements.`<br>- Password chưa đổi<br>- Người dùng vẫn có thể nhập lại |
| Case 19: Đăng nhập sau khi đổi mật khẩu | High |  | Flow 4 / REQ09 | User | Đã đặt lại mật khẩu thành công; tài khoản còn quyền đăng nhập | **Given** Người dùng quay lại màn hình đăng nhập ICS<br>**When** Đăng nhập lần lượt bằng mật khẩu mới và mật khẩu cũ<br>**Then** Mật khẩu mới được chấp nhận, mật khẩu cũ bị từ chối | - Mật khẩu mới: tạo phiên và không hiển thị notification<br>- Mật khẩu cũ: hiển thị `Email hoặc mật khẩu không đúng.` và không tạo phiên |
| Case 20: Tài khoản được reset khi user đang ở màn hình login | High |  | Flow 4 / REQ13 | User | User A đang ở màn hình login và đã nhập mật khẩu cũ của tài khoản A; User B đặt lại mật khẩu tài khoản A thành công trên thiết bị khác | **Given** User A chưa gửi login và tài khoản A vừa được đổi sang mật khẩu mới<br>**When** User A đăng nhập bằng mật khẩu cũ, sau đó thử lại bằng mật khẩu mới<br>**Then** Hệ thống từ chối mật khẩu cũ và chấp nhận mật khẩu mới | - User A vẫn ở màn hình login sau khi reset<br>- Mật khẩu cũ: hiển thị `Email hoặc mật khẩu không đúng.`, không tạo phiên và xóa ô password<br>- Mật khẩu mới: tạo phiên thành công, không hiển thị notification |
| Case 21: Reset mật khẩu hủy session của tất cả user dùng cùng tài khoản | High |  | Flow 4 / REQ12 | User | Tài khoản A đang đăng nhập trên nhiều thiết bị; User B có liên kết hợp lệ để đặt lại mật khẩu tài khoản A | **Given** Các thiết bị đang có session hoạt động của tài khoản A<br>**When** User B đặt lại mật khẩu tài khoản A thành công<br>**Then** Hệ thống hủy toàn bộ session của tài khoản A trên tất cả thiết bị | - Tất cả user đang dùng tài khoản A bị đưa về màn hình login<br>- Hiển thị `Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.`<br>- Không ảnh hưởng session của tài khoản khác<br>- Mật khẩu cũ bị từ chối; mật khẩu mới đăng nhập được |
| Case 22: Không cho đặt mật khẩu mới trùng mật khẩu hiện tại | High |  | Flow 4 / EX08 / REQ14 | User | Tài khoản đang dùng mật khẩu P1; liên kết đặt lại mật khẩu hợp lệ | **Given** Trang đặt lại mật khẩu đang mở<br>**When** Người dùng nhập lại P1 làm mật khẩu mới và bấm `SAVE`<br>**Then** Hệ thống từ chối đổi mật khẩu | - Hiển thị `New password must be different from your current password.`<br>- Mật khẩu vẫn là P1<br>- Không hủy session hiện tại<br>- Người dùng có thể nhập mật khẩu khác |
| Case 23: Cho phép dùng lại mật khẩu cũ không phải mật khẩu hiện tại | High |  | Flow 4 / REQ14 | User | Tài khoản đã đổi từ P1 sang P2; hiện đang dùng P2 và có liên kết đặt lại mật khẩu hợp lệ | **Given** P1 là mật khẩu cũ trước đó, P2 là mật khẩu hiện tại<br>**When** Người dùng nhập P1 làm mật khẩu mới và bấm `SAVE`<br>**Then** Hệ thống đổi mật khẩu từ P2 về P1 thành công | - Hiển thị `Password changed` và `You can now sign in with your new password`<br>- P1 đăng nhập được, P2 bị từ chối<br>- Hủy toàn bộ session cũ theo REQ12 |

### Trang 4: Đổi mật khẩu trong hồ sơ cá nhân

**Mô tả:**

- Người dùng đã đăng nhập vào hồ sơ cá nhân để đổi mật khẩu của chính mình.

**Giải thích field/thành phần:**

- Chưa có thiết kế UI cho form đổi mật khẩu; xem mục Cần xác nhận.

**Điểm cần lưu ý:**

- Đã có API: `POST /users/{user_id}/change-password`, gửi mật khẩu mới trong field `password`.
- API nhận `password` trống sẽ đưa mật khẩu về mặc định, nên FE không được gửi request khi mật khẩu mới để trống.
- Đổi mật khẩu trong hồ sơ cá nhân khác với Quên mật khẩu: không gửi email, không dùng liên kết.

#### Testcase — Trang 4: Đổi mật khẩu trong hồ sơ cá nhân

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 25: Đổi mật khẩu trong hồ sơ cá nhân thành công | High | Smoke | Flow 5 / REQ15 / REQ16 | User | Đã đăng nhập; đang ở hồ sơ cá nhân | **Given** Form đổi mật khẩu đang mở<br>**When** Nhập mật khẩu mới hợp lệ và xác nhận<br>**Then** Hệ thống lưu mật khẩu mới | - Thông báo đổi mật khẩu thành công<br>- Đăng nhập bằng mật khẩu mới thành công<br>- Mật khẩu cũ bị từ chối<br>- Hồ sơ và quyền giữ nguyên |
| Case 26: Bỏ trống mật khẩu mới | High |  | EX09 / REQ17 | User | Đã đăng nhập; form đổi mật khẩu đang mở | **Given** Ô mật khẩu mới để trống<br>**When** Người dùng xác nhận<br>**Then** Hệ thống chặn thao tác | - Báo lỗi tại ô mật khẩu mới<br>- Không gửi request<br>- Mật khẩu không đổi, không bị đưa về mật khẩu mặc định |
| Case 27: Mật khẩu mới không đạt chính sách | High |  | EX10 | User | Đã đăng nhập; form đổi mật khẩu đang mở | **Given** Người dùng nhập mật khẩu không đạt chính sách<br>**When** Xác nhận<br>**Then** Hệ thống từ chối | - Báo lỗi, cho sửa lại<br>- Mật khẩu không đổi |
| Case 28: Người chưa đăng nhập không đổi được mật khẩu | High |  | REQ15 | Guest | Không có phiên đăng nhập | **Given** Người dùng chưa đăng nhập<br>**When** Gửi yêu cầu đổi mật khẩu<br>**Then** Hệ thống từ chối | - Không đổi mật khẩu<br>- Yêu cầu đăng nhập |
| Case 29: Không đổi được mật khẩu của tài khoản khác | High |  | REQ15 | User | Đã đăng nhập bằng tài khoản A; tài khoản B tồn tại | **Given** Người dùng A không có quyền quản lý tài khoản<br>**When** Gửi yêu cầu đổi mật khẩu cho tài khoản B<br>**Then** Hệ thống từ chối | - Mật khẩu tài khoản B không đổi<br>- Báo không có quyền |

### Trang 5: Chọn tài khoản

**Mô tả:**

- Màn hình liệt kê các tài khoản đã từng đăng nhập trên thiết bị để người dùng chọn lại hoặc thêm tài khoản mới mà không cần đăng xuất.
- Khi thiết bị đã có tài khoản trong danh sách và chưa có phiên đăng nhập, mở hệ thống sẽ vào màn hình này thay cho form Đăng nhập.

**Giải thích field/thành phần:**

- Logo `ICS – Insight Connect System`, tiêu đề `Chọn tài khoản` và đoạn hướng dẫn chuyển đổi tài khoản.
- Mỗi tài khoản là 1 thẻ gồm avatar, tên và email. Tài khoản không còn phiên hợp lệ có nhãn đỏ `Đã đăng xuất`.
- Rê chuột vào thẻ hiện nút `x` để xóa tài khoản khỏi danh sách.
- Thẻ `Thêm tài khoản` nằm cuối danh sách, mở Trang 6.
- Bấm vào thẻ tài khoản mở form `Chuyển tài khoản`: ô `Tài khoản` chỉ đọc (điền sẵn email), nút `TIẾP TỤC` và `Quay lại`.

**Điểm cần lưu ý:**

- Tài khoản còn phiên: form `Chuyển tài khoản` hiển thị `Tài khoản đã sẵn sàng để tiếp tục`, không có ô mật khẩu; bấm `TIẾP TỤC` vào thẳng hệ thống.
- Tài khoản `Đã đăng xuất`: form hiển thị `Phiên đăng nhập đã hết hạn, vui lòng nhập lại mật khẩu`, có thêm ô `Mật khẩu` và `Bạn quên mật khẩu?`.
- Không giới hạn số tài khoản trong danh sách.
- Xóa tài khoản phải xác nhận qua hộp thoại `Xóa tài khoản khỏi lịch sử?`; chỉ xóa khỏi danh sách trên thiết bị, không xóa tài khoản trong hệ thống.
- Bấm `Đăng xuất` chỉ kết thúc phiên của tài khoản đang dùng; tài khoản vẫn nằm trong danh sách với nhãn `Đã đăng xuất`.
- Sau khi đăng nhập, người dùng chuyển tài khoản, thêm tài khoản, đổi role (`Chuyển vị trí`) và đăng xuất từ menu tài khoản trên header.

#### Testcase — Trang 5: Chọn tài khoản

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 32: Hiển thị Chọn tài khoản khi thiết bị đã có tài khoản | High |  | Flow 7 / REQ21 | Guest | Thiết bị đã từng đăng nhập ít nhất 1 tài khoản; chưa có phiên đăng nhập | **Given** Danh sách tài khoản trên thiết bị không rỗng<br>**When** Người dùng mở hệ thống<br>**Then** Hệ thống hiển thị `Chọn tài khoản` | - Mỗi tài khoản hiển thị avatar, tên, email<br>- Tài khoản hết phiên có nhãn `Đã đăng xuất`<br>- Có thẻ `Thêm tài khoản`<br>- Thiết bị chưa có tài khoản nào thì hiển thị form Đăng nhập |
| Case 33: Chọn tài khoản còn phiên | High |  | Flow 7 / REQ22 | User | Tài khoản A trong danh sách còn phiên hợp lệ | **Given** Đang ở `Chọn tài khoản`<br>**When** Bấm thẻ tài khoản A, sau đó bấm `TIẾP TỤC`<br>**Then** Hệ thống vào thẳng tài khoản A | - Form hiển thị `Tài khoản đã sẵn sàng để tiếp tục`, không có ô `Mật khẩu`<br>- Ô `Tài khoản` chỉ đọc, đúng email A<br>- Phiên thuộc đúng tài khoản A<br>- Dữ liệu và quyền hiển thị theo tài khoản A |
| Case 34: Chọn tài khoản đã đăng xuất | High |  | Flow 7 / EX11 / REQ22 | User | Tài khoản A trong danh sách có nhãn `Đã đăng xuất` | **Given** Đang ở `Chọn tài khoản`<br>**When** Bấm thẻ tài khoản A<br>**Then** Hệ thống yêu cầu nhập lại mật khẩu | - Hiển thị `Phiên đăng nhập đã hết hạn, vui lòng nhập lại mật khẩu`<br>- Có ô `Mật khẩu`<br>- Nhập đúng mật khẩu và bấm `TIẾP TỤC`: vào hệ thống bằng tài khoản A<br>- Nhập sai: báo `Email hoặc mật khẩu không đúng.`, không tạo phiên |
| Case 35: Xóa tài khoản khỏi danh sách | Medium |  | REQ23 | Guest | Danh sách có tài khoản A | **Given** Rê chuột vào thẻ tài khoản A<br>**When** Bấm `x` và xác nhận<br>**Then** Hệ thống xóa A khỏi danh sách trên thiết bị | - Hộp thoại `Xóa tài khoản khỏi lịch sử?` kèm email A<br>- Hủy: danh sách không đổi<br>- Xác nhận: thẻ A biến mất<br>- Tài khoản A trong hệ thống không bị xóa, vẫn đăng nhập lại được<br>- Xóa hết tài khoản: chuyển về form Đăng nhập |
| Case 36: Đăng xuất giữ tài khoản trong danh sách | High |  | REQ24 | User | Đang đăng nhập tài khoản A | **Given** Người dùng mở menu tài khoản trên header<br>**When** Bấm `Đăng xuất`<br>**Then** Hệ thống kết thúc phiên của A và về `Chọn tài khoản` | - Thẻ A có nhãn `Đã đăng xuất`<br>- Chọn lại A phải nhập mật khẩu<br>- Phiên của các tài khoản khác trong danh sách không bị ảnh hưởng |

### Trang 6: Thêm tài khoản

**Mô tả:**

- Người dùng đăng nhập thêm 1 tài khoản khác vào danh sách tài khoản trên thiết bị.

**Giải thích field/thành phần:**

- Tiêu đề `Thêm tài khoản`, mô tả `Đăng nhập tài khoản cần thêm`.
- Form gồm `Tài khoản` (placeholder `Nhập tài khoản`), `Mật khẩu` (placeholder `Nhập mật khẩu`), icon mắt, nút `THÊM TÀI KHOẢN` và `Quay lại`.
- Có `Bạn quên mật khẩu?`, mở Trang 2 như ở form Đăng nhập.

**Điểm cần lưu ý:**

- Mở từ thẻ `Thêm tài khoản` ở Trang 5 hoặc nút `Thêm tài khoản` trong menu tài khoản trên header.
- Thêm thành công thì phiên làm việc chuyển sang tài khoản vừa thêm; tài khoản trước đó vẫn nằm trong danh sách.
- Thêm thất bại khi đang đăng nhập thì giữ nguyên phiên của tài khoản hiện tại.
- Quy tắc kiểm tra dữ liệu và thông báo lỗi giống Trang 1.

#### Testcase — Trang 6: Thêm tài khoản

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 37: Thêm tài khoản thành công | High |  | Flow 8 / REQ25 | User | Đang đăng nhập tài khoản A; tài khoản B hoạt động | **Given** Form `Thêm tài khoản` đang mở<br>**When** Nhập đúng tài khoản/mật khẩu của B và bấm `THÊM TÀI KHOẢN`<br>**Then** Hệ thống đăng nhập B và thêm B vào danh sách | - Phiên làm việc chuyển sang B<br>- Dữ liệu và quyền hiển thị theo B<br>- A vẫn nằm trong danh sách, chuyển lại A không cần nhập mật khẩu khi A còn phiên<br>- Không hiển thị notification |
| Case 38: Thêm tài khoản thất bại | High |  | EX12 / REQ25 | User | Đang đăng nhập tài khoản A | **Given** Form `Thêm tài khoản` đang mở<br>**When** Nhập sai tài khoản hoặc mật khẩu và bấm `THÊM TÀI KHOẢN`<br>**Then** Hệ thống từ chối | - Báo `Email hoặc mật khẩu không đúng.`<br>- Không thêm tài khoản vào danh sách<br>- Phiên của A giữ nguyên, bấm `Quay lại` vẫn dùng được A |
| Case 39: Validate và quay lại ở Thêm tài khoản | Medium |  | EX01 / REQ02 | Guest<br>User | Form `Thêm tài khoản` đang mở | **Given** Bỏ trống `Tài khoản` hoặc `Mật khẩu`<br>**When** Bấm `THÊM TÀI KHOẢN`, sau đó bấm `Quay lại`<br>**Then** Hệ thống báo lỗi tại ô thiếu; `Quay lại` trở về màn hình trước | - Không gọi API login<br>- `Quay lại` về màn hình trước đó (`Chọn tài khoản` hoặc trang đang dùng)<br>- Phiên hiện tại không đổi |

### Trang 7: Chọn trung tâm sau đăng nhập

**Mô tả:**

- Sau khi đăng nhập, người dùng chọn trung tâm làm việc bằng nút chọn trung tâm ở cuối thanh menu bên trái.

**Giải thích field/thành phần:**

- Nút chọn trung tâm hiển thị tên trung tâm đang chọn (ví dụ `ĐẮC NHÂN`); chưa chọn thì hiển thị `Chọn trung tâm`.
- Bấm nút mở danh sách gồm ô tìm kiếm `Tìm trung tâm...` và các dòng trung tâm.
- Mỗi dòng gồm tên viết tắt, tên đầy đủ, mã trung tâm dạng `#10`; trung tâm đang chọn được đánh dấu.

**Điểm cần lưu ý:**

- Tại một thời điểm chỉ có đúng 1 trung tâm được chọn; chọn trung tâm khác thì trung tâm cũ tự bỏ chọn.
- Không có trạng thái không chọn trung tâm nào; bấm lại trung tâm đang chọn không làm bỏ chọn.
- Danh sách không dùng checkbox chọn nhiều; nút chỉ hiển thị tên 1 trung tâm đang chọn.
- Lựa chọn được lưu theo từng tài khoản trên thiết bị và giữ lại cho lần đăng nhập sau.
- Chọn trung tâm không làm thay đổi hồ sơ, quyền hoặc mật khẩu.
- Người chưa đăng nhập không xem và không tải danh sách trung tâm.
- Bộ chọn trung tâm này không áp dụng cho role `Admin`: Admin lọc theo trung tâm bằng bộ lọc `Trung tâm` trên từng danh sách và chọn `Trung tâm` trong popup tạo mới.
- Danh sách hiển thị toàn bộ trung tâm, không giới hạn theo role hoặc tài khoản.

#### Testcase — Trang 7: Chọn trung tâm sau đăng nhập

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 40: Hiển thị danh sách trung tâm | High |  | Flow 9 / REQ26 | User | Đã đăng nhập; hệ thống có nhiều trung tâm | **Given** Người dùng đang ở trang bất kỳ sau đăng nhập<br>**When** Bấm nút chọn trung tâm ở cuối thanh menu trái<br>**Then** Hệ thống mở danh sách trung tâm | - Có ô tìm kiếm `Tìm trung tâm...`<br>- Mỗi dòng có tên viết tắt, tên đầy đủ, mã `#{mã}`<br>- Trung tâm đang chọn được đánh dấu<br>- Không có checkbox chọn nhiều<br>- Danh sách đủ toàn bộ trung tâm, giống nhau với mọi role và tài khoản |
| Case 41: Chỉ chọn được 1 trung tâm | High |  | Flow 9 / REQ26 | User | Đã đăng nhập; trung tâm A đang được chọn | **Given** Danh sách trung tâm đang mở<br>**When** Người dùng chọn trung tâm B<br>**Then** Hệ thống chọn B và tự bỏ chọn A | - Chỉ B được đánh dấu<br>- Nút hiển thị tên B, không có `+{số}`<br>- Không thể để A và B cùng được chọn<br>- Không hiển thị notification |
| Case 42: Không bỏ chọn được trung tâm đang chọn | High |  | EX13 / REQ26 | User | Đã đăng nhập; trung tâm A đang được chọn | **Given** Danh sách trung tâm đang mở<br>**When** Bấm lại trung tâm A<br>**Then** Hệ thống giữ nguyên lựa chọn | - A vẫn được chọn<br>- Nút vẫn hiển thị tên A<br>- Không có trạng thái không chọn trung tâm nào |
| Case 43: Tìm trung tâm | Medium |  | Flow 9 | User | Đã đăng nhập; danh sách trung tâm đang mở | **Given** Ô `Tìm trung tâm...` đang trống<br>**When** Nhập từ khóa<br>**Then** Hệ thống lọc danh sách theo từ khóa | - Chỉ hiển thị trung tâm khớp từ khóa<br>- Không có kết quả: hiển thị `Không tìm thấy trung tâm`<br>- Trung tâm đã chọn không bị bỏ chọn khi tìm |
| Case 44: Giữ lựa chọn trung tâm theo tài khoản | High |  | REQ27 | User | Tài khoản A đã chọn trung tâm X; tài khoản B đã chọn trung tâm Y trên cùng thiết bị | **Given** Đang dùng tài khoản A với trung tâm X<br>**When** Chuyển sang tài khoản B, sau đó chuyển lại A hoặc đăng nhập lại A<br>**Then** Hệ thống khôi phục lựa chọn của từng tài khoản | - Tài khoản B hiển thị trung tâm Y<br>- Tài khoản A hiển thị lại trung tâm X<br>- Lựa chọn của tài khoản này không ghi đè tài khoản khác |

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1 / REQ01: Trung tâm mặc định và chọn trung tâm sau đăng nhập**

```text
Người dùng đăng nhập thành công
      → Hệ thống lấy trung tâm mặc định của tài khoản
      → Phiên làm việc dùng trung tâm mặc định
      → Người dùng chọn trung tâm khác ở nút chọn trung tâm (Flow 9)
      → Hệ thống chuyển phiên làm việc sang trung tâm được chọn
```

**Flow 2 / REQ02–REQ04 / REQ10–REQ11 / REQ18 / REQ20: Đăng nhập**

```text
Người dùng nhập email + password
      → Bấm "ĐĂNG NHẬP" hoặc Enter
      → Thiếu email: hiển thị "Vui lòng nhập email."
      → Email sai định dạng: hiển thị "Email không đúng định dạng."
      → Thiếu password: hiển thị "Vui lòng nhập mật khẩu."
      → FE loại khoảng trắng đầu/cuối và chuyển email thành chữ thường; giữ nguyên toàn bộ ký tự password, bao gồm khoảng trắng
      → Dữ liệu hợp lệ: FE khóa form và gửi request
      → BE xác thực tài khoản, trạng thái và role được phép đăng nhập
      → Thành công: tạo phiên đúng user theo trung tâm mặc định của tài khoản và chuyển đến trang đích, không hiển thị notification
      → BE lấy role đầu tiên của tài khoản để tạo access token; trả access token kèm role
      → BE trả refresh token trong JSON response và set cookie
      → Sai email/password: hiển thị "Email hoặc mật khẩu không đúng."
      → Không đủ điều kiện đăng nhập: hiển thị "Tài khoản không được phép đăng nhập vào trung tâm này."
      → Lỗi mạng: hiển thị "Không thể kết nối đến hệ thống. Vui lòng thử lại."
      → Lỗi hệ thống: hiển thị "Hệ thống đang gặp sự cố. Vui lòng thử lại sau."
      → Vượt giới hạn: hiển thị "Bạn đã thử quá nhiều lần. Vui lòng thử lại sau {thời gian}."
```

**Flow 3 / REQ05–REQ07: Yêu cầu khôi phục mật khẩu**

```text
Người dùng bấm "Bạn quên mật khẩu?"
      → FE giữ email, xóa password và mở form khôi phục
      → Người dùng nhập email, bấm "Xác nhận"
      → Thiếu email: hiển thị "Vui lòng nhập email."
      → Email sai định dạng: hiển thị "Email không đúng định dạng."
      → Dữ liệu hợp lệ: FE khóa form và gọi API
      → BE tiếp nhận yêu cầu, gửi email nếu tài khoản đủ điều kiện
      → FE hiển thị "Nếu tài khoản đủ điều kiện, bạn sẽ nhận được email hướng dẫn đặt lại mật khẩu."
      → Lỗi mạng: hiển thị "Không thể kết nối đến hệ thống. Vui lòng thử lại."
      → Lỗi hệ thống: hiển thị "Hệ thống đang gặp sự cố. Vui lòng thử lại sau."
      → Vượt giới hạn: hiển thị "Bạn đã thử quá nhiều lần. Vui lòng thử lại sau {thời gian}."
```

**Flow 4 / REQ08–REQ09 / REQ12–REQ14: Đặt lại mật khẩu từ email**

```text
Người dùng mở liên kết trong email
      → Firebase kiểm tra liên kết
      → Liên kết không hợp lệ/hết hạn/đã dùng: hiển thị "Your password reset link is invalid or has expired."
      → Người dùng nhập mật khẩu mới và bấm "SAVE"
      → Mật khẩu không đạt chính sách: hiển thị "Password does not meet the requirements."
      → Mật khẩu mới trùng mật khẩu hiện tại: hiển thị "New password must be different from your current password."
      → Lưu thành công: hiển thị "Password changed" và "You can now sign in with your new password"
      → Mật khẩu cũ hết hiệu lực
      → BE hủy toàn bộ session hiện tại của tài khoản trên tất cả thiết bị
      → User đang đăng nhập bằng cùng tài khoản bị đưa về màn hình login và hiển thị "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại."
      → User đang ở màn hình login không bị chuyển trang; nếu dùng mật khẩu cũ thì hiển thị "Email hoặc mật khẩu không đúng."
      → Người dùng quay lại ICS và đăng nhập bằng mật khẩu mới
```

**Flow 5 / REQ15–REQ17: Đổi mật khẩu trong hồ sơ cá nhân**

```text
Người dùng đã đăng nhập mở hồ sơ cá nhân
      → Mở form đổi mật khẩu
      → Nhập mật khẩu mới và xác nhận
      → Mật khẩu mới để trống: báo lỗi, không gửi request
      → Mật khẩu không đạt chính sách: báo lỗi, không đổi mật khẩu
      → Dữ liệu hợp lệ: FE gọi API đổi mật khẩu của chính người dùng
      → BE lưu mật khẩu mới
      → FE thông báo đổi mật khẩu thành công
      → Mật khẩu cũ hết hiệu lực
```

**Flow 6 / REQ19–REQ20: Đổi role**

```text
Người dùng đã đăng nhập, đang dùng access token của role A
      → Chọn role B
      → FE gửi refresh token kèm role B
      → BE trả access token mới của role B kèm role
      → BE trả refresh token trong JSON response và set cookie
      → Phiên làm việc dùng role B, không cần đăng nhập lại
```

**Flow 7 / REQ21–REQ24: Chọn tài khoản**

```text
Người dùng mở hệ thống khi chưa có phiên đăng nhập
      → Thiết bị chưa có tài khoản nào: hiển thị form Đăng nhập
      → Thiết bị đã có tài khoản: hiển thị "Chọn tài khoản"
      → Người dùng bấm thẻ tài khoản
      → Tài khoản còn phiên: hiển thị "Tài khoản đã sẵn sàng để tiếp tục", bấm "TIẾP TỤC" để vào hệ thống
      → Tài khoản "Đã đăng xuất": hiển thị "Phiên đăng nhập đã hết hạn, vui lòng nhập lại mật khẩu", nhập mật khẩu rồi bấm "TIẾP TỤC"
      → Thành công: phiên làm việc, dữ liệu và quyền theo tài khoản đã chọn
      → Bấm "x" trên thẻ và xác nhận: xóa tài khoản khỏi danh sách trên thiết bị
```

**Flow 8 / REQ25: Thêm tài khoản**

```text
Người dùng bấm "Thêm tài khoản" ở "Chọn tài khoản" hoặc menu tài khoản trên header
      → Nhập tài khoản + mật khẩu, bấm "THÊM TÀI KHOẢN" hoặc Enter
      → Kiểm tra dữ liệu và xác thực như Flow 2
      → Thành công: thêm tài khoản vào danh sách, phiên làm việc chuyển sang tài khoản vừa thêm
      → Thất bại: báo lỗi, giữ nguyên phiên của tài khoản đang dùng (nếu có)
      → Bấm "Quay lại": trở về màn hình trước, không thay đổi phiên
```

**Flow 9 / REQ26–REQ27: Chọn trung tâm sau đăng nhập**

```text
Người dùng đã đăng nhập bấm nút chọn trung tâm ở cuối thanh menu trái
      → Hệ thống hiển thị danh sách trung tâm, trung tâm đang chọn được đánh dấu
      → Người dùng tìm bằng ô "Tìm trung tâm..."
      → Chọn 1 trung tâm: trung tâm cũ tự bỏ chọn, phiên làm việc dùng trung tâm mới
      → Bấm lại trung tâm đang chọn: giữ nguyên lựa chọn
      → Nút hiển thị tên trung tâm đang chọn
      → Lựa chọn được lưu theo tài khoản trên thiết bị
```

### 2.2. Ngoại lệ

- **EX01:** Bỏ trống email/password hoặc email sai định dạng → lần lượt hiển thị `Vui lòng nhập email.`, `Vui lòng nhập mật khẩu.` hoặc `Email không đúng định dạng.`; không gửi request.
- **EX02:** Email không tồn tại hoặc password sai → báo `Email hoặc mật khẩu không đúng.`, không tạo phiên.
- **EX03:** Tài khoản bị khóa hoặc không có role được phép đăng nhập → hiển thị `Tài khoản không được phép đăng nhập vào trung tâm này.`, không tạo phiên.
- **EX04:** Lỗi mạng → hiển thị `Không thể kết nối đến hệ thống. Vui lòng thử lại.`. Lỗi hệ thống → hiển thị `Hệ thống đang gặp sự cố. Vui lòng thử lại sau.`. Sau lỗi, mở khóa form, giữ email; riêng login phải xóa password và không tự gửi lại.
- **EX05:** Vượt giới hạn tần suất → hiển thị `Bạn đã thử quá nhiều lần. Vui lòng thử lại sau {thời gian}.` theo `Retry-After`, không tự gửi lại.
- **EX06:** Liên kết đặt lại mật khẩu hết hạn, không hợp lệ hoặc đã dùng → hiển thị `Your password reset link is invalid or has expired.`, không đổi mật khẩu và hướng dẫn yêu cầu email mới.
- **EX07:** Mật khẩu mới không đạt chính sách → hiển thị `Password does not meet the requirements.`, cho sửa và không đổi mật khẩu.
- **EX08:** Mật khẩu mới trùng mật khẩu hiện tại → hiển thị `New password must be different from your current password.`, cho nhập lại và không đổi mật khẩu.
- **EX09:** Bỏ trống mật khẩu mới ở form đổi mật khẩu trong hồ sơ cá nhân → báo lỗi tại ô mật khẩu mới, không gửi request, không đổi mật khẩu.
- **EX10:** Mật khẩu mới ở form đổi mật khẩu trong hồ sơ cá nhân không đạt chính sách → báo lỗi, cho sửa và không đổi mật khẩu.
- **EX11:** Chọn tài khoản `Đã đăng xuất` hoặc phiên của tài khoản không còn hợp lệ → hiển thị `Phiên đăng nhập đã hết hạn, vui lòng nhập lại mật khẩu`, yêu cầu nhập mật khẩu; không vào hệ thống khi chưa xác thực lại.
- **EX12:** Thêm tài khoản thất bại (sai thông tin, tài khoản không được phép, lỗi mạng/hệ thống) → báo lỗi như đăng nhập, không thêm vào danh sách, giữ nguyên phiên của tài khoản đang dùng.
- **EX13:** Bấm lại trung tâm đang chọn → giữ nguyên lựa chọn hiện tại; không có trạng thái không chọn trung tâm nào.

### 2.3. Yêu cầu khác

- **REQ01:** Màn hình đăng nhập và khôi phục mật khẩu không có bước chọn trung tâm; người chưa đăng nhập không tải được danh sách trung tâm. Sau khi đăng nhập, hệ thống dùng trung tâm mặc định của tài khoản và cho phép người dùng chọn trung tâm khác (REQ26).
- **REQ02:** Email được loại khoảng trắng đầu/cuối và chuyển thành chữ thường; password giữ nguyên ký tự.
- **REQ03:** Trong lúc gửi request, khóa input, nút gửi và chuyển form; không cho gửi lặp.
- **REQ04:** Login thất bại giữ email, xóa password và mở khóa form.
- **REQ05:** Bấm `Quay lại` từ Quên mật khẩu giữ email; password rỗng và được che.
- **REQ06:** Thông báo khôi phục luôn là `Nếu tài khoản đủ điều kiện, bạn sẽ nhận được email hướng dẫn đặt lại mật khẩu.` để không tiết lộ tài khoản có tồn tại hay không.
- **REQ07:** Tiếp nhận yêu cầu khôi phục chưa làm đổi mật khẩu, chưa tạo phiên và không đồng nghĩa email đã được giao.
- **REQ08:** Mở email hoặc trang Firebase chưa làm đổi mật khẩu. Chỉ đổi khi liên kết hợp lệ và lưu mật khẩu mới thành công.
- **REQ09:** Sau khi đổi thành công, mật khẩu mới dùng được, mật khẩu cũ bị từ chối; hồ sơ và quyền không thay đổi.
- **REQ10:** Phiên đăng nhập phải thuộc đúng user và dùng trung tâm mặc định của tài khoản; đăng nhập và chọn trung tâm không thay đổi hồ sơ, quyền hoặc mật khẩu.
- **REQ11:** User có ít nhất 1 role trong danh sách cho phép bên dưới thì được đăng nhập. User không có role nào trong danh sách thì bị từ chối.
- **REQ12:** Đặt lại mật khẩu thành công phải hủy toàn bộ session hiện tại của tài khoản trên tất cả thiết bị. Các user đang dùng cùng tài khoản bị đưa về màn hình login và hiển thị `Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.`
- **REQ13:** User đang ở màn hình login chưa có session nên không bị đăng xuất khi tài khoản được đặt lại mật khẩu. Từ thời điểm reset thành công, mật khẩu cũ bị từ chối và chỉ mật khẩu mới đăng nhập được.
- **REQ14:** Mật khẩu mới không được trùng mật khẩu hiện tại. Hệ thống không chặn theo lịch sử mật khẩu: sau khi đổi từ P1 sang P2, lần đổi tiếp theo được phép dùng lại P1 vì P1 không còn là mật khẩu hiện tại.
- **REQ15:** Chỉ người dùng đã đăng nhập mới đổi được mật khẩu trong hồ sơ cá nhân và chỉ đổi được mật khẩu của chính mình.
- **REQ16:** Sau khi đổi mật khẩu trong hồ sơ cá nhân thành công, mật khẩu mới đăng nhập được, mật khẩu cũ bị từ chối; hồ sơ và quyền không thay đổi.
- **REQ17:** Không gửi yêu cầu đổi mật khẩu khi mật khẩu mới để trống, vì API đổi mật khẩu sẽ đưa mật khẩu về mặc định nếu `password` trống.
- **REQ18:** Mỗi role có access token riêng. Khi đăng nhập, hệ thống mặc định lấy role đầu tiên của tài khoản để tạo access token; access token được trả về kèm role.
- **REQ19:** Khi đổi role, dùng refresh token kèm role cần đổi để lấy access token mới của role đó; không cần đăng nhập lại.
- **REQ20:** Refresh token được trả đồng thời trong JSON response và set cookie.
- **REQ21:** Khi chưa có phiên đăng nhập, nếu thiết bị đã có tài khoản trong danh sách thì hiển thị `Chọn tài khoản`; nếu chưa có tài khoản nào thì hiển thị form Đăng nhập.
- **REQ22:** Chọn tài khoản còn phiên thì vào hệ thống không cần nhập mật khẩu; chọn tài khoản `Đã đăng xuất` thì phải nhập lại mật khẩu. Sau khi chuyển, dữ liệu và quyền theo tài khoản được chọn.
- **REQ23:** Xóa tài khoản khỏi danh sách phải có bước xác nhận; chỉ xóa khỏi danh sách trên thiết bị, không xóa hoặc khóa tài khoản trong hệ thống.
- **REQ24:** Đăng xuất chỉ kết thúc phiên của tài khoản đang dùng; tài khoản vẫn nằm trong danh sách với nhãn `Đã đăng xuất`, phiên của các tài khoản khác không bị ảnh hưởng.
- **REQ25:** Thêm tài khoản dùng cùng quy tắc kiểm tra dữ liệu và xác thực với đăng nhập; ô `Tài khoản` chỉ nhận email. Không giới hạn số tài khoản trong danh sách. Thành công thì chuyển phiên sang tài khoản vừa thêm và giữ tài khoản trước đó trong danh sách; thất bại thì giữ nguyên phiên hiện tại.
- **REQ26:** Sau khi đăng nhập, người dùng chọn trung tâm bằng nút chọn trung tâm ở cuối thanh menu trái; tại một thời điểm chỉ có đúng 1 trung tâm được chọn. Danh sách hiển thị toàn bộ trung tâm, không giới hạn theo role hoặc tài khoản.
- **REQ27:** Lựa chọn trung tâm được lưu theo từng tài khoản trên thiết bị và được khôi phục khi đăng nhập lại hoặc chuyển lại tài khoản đó.

### 2.4. Ràng buộc

#### Quyền

| Đối tượng | Xem form | Chọn trung tâm | Đăng nhập | Yêu cầu khôi phục | Đổi mật khẩu trong hồ sơ cá nhân |
|---|:---:|:---:|:---:|:---:|:---:|
| Người chưa đăng nhập | ✅ | ❌ | ✅ | ✅ | ❌ |
| Người đã đăng nhập | ❌ | ✅ | ❌ | ❌ | ✅ |

**Role được phép đăng nhập:**

| Role | Đăng nhập |
|---|:---:|
| Curriculum Development Handler | ✅ |
| Curriculum Development Tasker | ✅ |
| Sale | ✅ |
| Sale Handler | ✅ |
| Support | ✅ |
| Class Handler | ✅ |
| Teaching Assistant | ✅ |
| Teacher | ✅ |
| Teacher Handler | ✅ |
| Parent | ✅ |
| Class Monitor | ✅ |
| Center Administrator | ✅ |
| Master | ✅ |
| Center Manager | ✅ |
| Quality Control | ✅ |
| Financial Management | ✅ |
| App Handler | ✅ |
| Resale | ✅ |
| Manager | ✅ |
| Administrator | ✅ |
| Trainee | ✅ |
| Trainer | ✅ |

> Chỉ cho vào hệ thống khi tài khoản đang hoạt động, thông tin xác thực đúng và có ít nhất 1 role trong danh sách trên.

---

## 3. Cần xác nhận

- Chính sách mật khẩu mới.
- Thời hạn liên kết và cách xử lý liên kết đã dùng hoặc nhiều email khôi phục.
- Thời hạn phiên và trang đích thực tế.
- Backend chưa có API quên mật khẩu (gửi email khôi phục, đặt lại mật khẩu từ liên kết); cần thống nhất tích hợp Firebase trước khi triển khai.
- Form đổi mật khẩu trong hồ sơ cá nhân: vị trí, các field (có nhập mật khẩu hiện tại, có nhập lại mật khẩu mới hay không) và nội dung thông báo.
- Đổi mật khẩu trong hồ sơ cá nhân có hủy session trên các thiết bị khác hay không; có chặn mật khẩu mới trùng mật khẩu hiện tại hay không.
- Trung tâm mặc định của tài khoản được cấu hình ở đâu; xử lý khi tài khoản chưa có trung tâm mặc định hoặc trung tâm mặc định bị khóa.
- Lựa chọn trung tâm hiện chỉ lưu trên thiết bị; có cần lưu về hệ thống để dùng trên thiết bị khác hay không.
- Bố cục khu vực nhận diện thương hiệu (logo, khẩu hiệu) trên màn hình đăng nhập mới.
- Nội dung notification `Tài khoản không được phép đăng nhập vào trung tâm này.` còn nhắc trung tâm trong khi màn hình đăng nhập không còn chọn trung tâm.
