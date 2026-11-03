# Quản lý cấp độ

## 1. UI

### Trang 1: Trang 1: Danh sách cấp độ
![Trang 1](./images/01-level-list.png)

*Danh sách cấp độ — nhấn để xem ảnh gốc*

**Mô tả:**

- `Curriculum Development Handler` xem và quản lý toàn bộ dữ liệu cấp độ.
- Cấp độ là dữ liệu định nghĩa dùng lại tại feature `Quản lý danh mục`, cụ thể khi chọn cấp độ cho khóa học thuộc danh mục.

**Điểm cần lưu ý:**

- Danh sách hiển thị: `ID`, `Tên cấp độ`, `Mô tả cấp độ`, `Mã cấp độ` và `Trạng thái`.
- Ảnh UI chưa hiển thị cột `Trạng thái`; sản phẩm hoàn chỉnh phải bổ sung trạng thái và thao tác chuyển trạng thái cho từng cấp độ.
- Nút cuối danh sách phải hiển thị `Thêm cấp độ mới`. Nội dung `Thêm danh mục mới` trong ảnh là label chưa đúng ngữ cảnh và không được sử dụng khi triển khai.
- Cấp độ có ba trạng thái: `Nháp`, `Công khai`, `Vô hiệu hóa`.
- Khi tạo mới, trạng thái mặc định là `Nháp`.
- Cho phép chuyển hai chiều giữa mọi trạng thái: `Nháp` ↔ `Công khai`, `Nháp` ↔ `Vô hiệu hóa` và `Công khai` ↔ `Vô hiệu hóa`.
- Chỉ cấp độ ở trạng thái `Công khai` được hiển thị để chọn mới tại feature sử dụng cấp độ.

### Trang 2: Form thêm/cập nhật cấp độ
- `A02.01` **ID**: Hiển thị trên danh sách. Quy tắc sinh, định dạng, độ dài, tính bắt buộc và khả năng chỉnh sửa chưa được định nghĩa; xem mục `Cần xác nhận`.
- `A02.02` **Tên cấp độ**: Bắt buộc, không được chỉ chứa khoảng trắng.
- `A02.03` **Mô tả cấp độ**: Bắt buộc, không được chỉ chứa khoảng trắng.
- `A02.04` **Mã cấp độ**: Bắt buộc và không được trùng. Đây là mã tham chiếu mà feature `Quản lý danh mục` sử dụng khi người dùng chọn cấp độ cho khóa học thuộc danh mục, ví dụ `HSK1`, `HSK2`.
- `A02.05` **Trạng thái**: Gồm `Nháp`, `Công khai`, `Vô hiệu hóa`; mặc định là `Nháp`. Cho phép chuyển từ trạng thái hiện tại sang một trong hai trạng thái còn lại.

**Điểm cần lưu ý:**

- Khi hiển thị danh sách lựa chọn cấp độ tại feature sử dụng, hệ thống lấy dữ liệu từ feature `Quản lý cấp độ`, không hard-code các giá trị minh họa.
- Khi một cấp độ chuyển sang `Nháp` hoặc `Vô hiệu hóa`, hệ thống không cho chọn mới cấp độ đó nhưng không tự động xóa liên kết đã lưu ở danh mục/khóa học.
- Khi một cấp độ được chuyển lại sang `Công khai`, cấp độ được hiển thị lại trong danh sách lựa chọn.
- Thay đổi `Tên cấp độ` hoặc `Mô tả cấp độ` được phản ánh tại nơi đang tham chiếu cấp độ. `Mã cấp độ` không được tự động thay đổi chỉ vì trạng thái thay đổi.

---

### Trang 3: Toast phản hồi CRUD
![Trang 3](../../images/01-toast-crud.png)

*Toast phản hồi Create, Update, Delete và đổi trạng thái — nhấn để xem ảnh gốc*

**Mô tả:** Toast phản hồi kết quả các thao tác thay đổi dữ liệu trong requirement này.

**Điểm cần lưu ý:**

- `A03.01` **Thành công**: Tiêu đề: `Thành Công`; Khi sử dụng: Backend xác nhận thao tác thành công.
- `A03.02` **Thông tin**: Tiêu đề: `Thông Báo`; Khi sử dụng: Thao tác đã tiếp nhận nhưng dữ liệu cần thời gian đồng bộ.
- `A03.03` **Cảnh báo**: Tiêu đề: `Cảnh Báo`; Khi sử dụng: Dữ liệu/điều kiện cần người dùng kiểm tra.
- `A03.04` **Lỗi**: Tiêu đề: `Có Lỗi Xảy Ra`; Khi sử dụng: Backend/network không hoàn tất thao tác.

**Điểm cần lưu ý:** Nội dung dòng hai lấy từ flow CRUD tương ứng; mỗi thao tác chỉ có một Toast; Hủy/chỉ đọc không có Toast CRUD; nút `×` đóng thủ công; không hiển thị dữ liệu nhạy cảm.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1 / REQ01: Xem danh sách và thêm cấp độ**

```text
Curriculum Development Handler mở màn hình Quản lý cấp độ
      → Hệ thống hiển thị ID, Tên cấp độ, Mô tả cấp độ, Mã cấp độ và Trạng thái
      → Người dùng chọn Thêm cấp độ mới
      → Hệ thống mở form với trạng thái mặc định là Nháp
      → Người dùng nhập Tên cấp độ, Mô tả cấp độ và Mã cấp độ
      → Hệ thống kiểm tra các field bắt buộc và Mã cấp độ không trùng
      → Thành công: tạo cấp độ ở trạng thái Nháp và hiển thị trong danh sách
      → Thất bại: không tạo dữ liệu; giữ lại nội dung người dùng đã nhập và hiển thị lỗi tại field tương ứng
```

**Flow 2 / REQ02: Chuyển trạng thái cấp độ**

```text
Curriculum Development Handler chọn trạng thái mới cho một cấp độ
      → Hệ thống cho phép chọn một trong hai trạng thái còn lại
      → Nếu chuyển sang Công khai: kiểm tra Tên, Mô tả và Mã cấp độ còn hợp lệ; Mã cấp độ không trùng
      → Thành công: cập nhật trạng thái cấp độ
      → Cấp độ Công khai: được hiển thị trong danh sách lựa chọn cấp độ tại feature sử dụng
      → Cấp độ Nháp hoặc Vô hiệu hóa: không được hiển thị để chọn mới
      → Các liên kết cấp độ đã lưu trước đó vẫn được giữ nguyên
      → Thất bại: giữ nguyên trạng thái trước khi thao tác và không cập nhật một phần
```

**Flow 3 / REQ03: Sử dụng Mã cấp độ tại feature khác**

```text
Người dùng mở field chọn cấp độ cho khóa học tại feature Quản lý danh mục
      → Hệ thống tải các cấp độ đang ở trạng thái Công khai
      → Người dùng chọn một cấp độ
      → Hệ thống lưu tham chiếu đến cấp độ và Mã cấp độ tương ứng
      → Khi Tên hoặc Mô tả cấp độ được cập nhật, nơi tham chiếu hiển thị dữ liệu mới
      → Khi cấp độ chuyển sang Nháp hoặc Vô hiệu hóa, liên kết đã lưu không bị tự động xóa nhưng cấp độ không còn xuất hiện để chọn mới
```

### 2.2. Ngoại lệ

- **EX01:** Tên cấp độ, Mô tả cấp độ hoặc Mã cấp độ để trống/chỉ chứa khoảng trắng → không tạo hoặc cập nhật cấp độ; hiển thị lỗi tại field tương ứng.
- **EX02:** Mã cấp độ đã tồn tại → không lưu dữ liệu trùng; giữ lại nội dung người dùng đã nhập để chỉnh sửa.
- **EX03:** Cấp độ không còn ở trạng thái `Công khai` tại thời điểm feature khác lưu lựa chọn mới → từ chối liên kết mới và yêu cầu tải lại danh sách cấp độ.
- **EX04:** Chuyển sang `Công khai` khi dữ liệu bắt buộc không hợp lệ hoặc Mã cấp độ bị trùng → giữ nguyên trạng thái trước khi thao tác.
- **EX05:** Người dùng không có quyền nhưng mở URL hoặc gửi request trực tiếp → từ chối thao tác và không thay đổi dữ liệu.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Quản lý danh sách cấp độ | Cho phép `Curriculum Development Handler` xem toàn bộ danh sách và thêm cấp độ mới. Tên, Mô tả và Mã cấp độ là bắt buộc; cấp độ mới mặc định ở trạng thái `Nháp`. |
| REQ02 | Quản lý trạng thái | Cấp độ có ba trạng thái `Nháp`, `Công khai`, `Vô hiệu hóa` và được chuyển tự do giữa mọi trạng thái. Chỉ cấp độ `Công khai` được dùng cho lựa chọn mới; thay đổi trạng thái không tự động xóa liên kết đã tồn tại. |
| REQ03 | Cung cấp dữ liệu cấp độ | `Mã cấp độ` là mã tham chiếu dùng khi chọn cấp độ cho khóa học tại feature `Quản lý danh mục`. Danh sách lựa chọn phải lấy từ dữ liệu cấp độ đã định nghĩa và chỉ gồm các bản ghi `Công khai`. |

### 2.4. Ràng buộc

#### Quyền

| Role | Xem | Tạo | Cập nhật | Chuyển trạng thái |
|---|:---:|:---:|:---:|:---:|
| Curriculum Development Handler | ✅ | ✅ | ✅ | ✅ |
| Các role khác | ❌ | ❌ | ❌ | ❌ |

#### Ràng buộc khác

**Phạm vi dữ liệu**

- `Curriculum Development Handler` có toàn quyền trên toàn bộ dữ liệu cấp độ.
- Mỗi `Mã cấp độ` chỉ thuộc một cấp độ và không được trùng trong hệ thống.
- Feature sử dụng cấp độ phải lưu tham chiếu ổn định đến bản ghi cấp độ; không chỉ lưu tên hiển thị.
- Không cho phép truy cập hoặc thực hiện hành động bị đánh dấu `❌`, kể cả khi gọi trực tiếp bằng URL hoặc request.

---

---

## 3. Testcase

### Feature: Quản lý cấp độ

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Toast Case 1: Thành công | High | Ràng buộc Toast CRUD | Role có quyền CRUD | Dữ liệu hợp lệ | **Given** người dùng xác nhận thay đổi<br>**When** backend thành công<br>**Then** hiển thị Toast `Thành Công` | - Đúng nội dung nghiệp vụ<br>- Đúng một Toast<br>- Chỉ hiện sau khi backend xác nhận |
| Toast Case 2: Cảnh báo | High | Ràng buộc Toast CRUD | Role có quyền CRUD | Dữ liệu/điều kiện chưa hợp lệ | **Given** thao tác chưa đủ điều kiện<br>**When** người dùng xác nhận<br>**Then** hiển thị Toast `Cảnh Báo` nếu flow có Toast validation | - Không lưu dữ liệu sai<br>- Vẫn đánh dấu field lỗi<br>- Không hiện thành công |
| Toast Case 3: Lỗi | High | Ràng buộc Toast CRUD | Role có quyền CRUD | Backend/network lỗi | **Given** request hợp lệ đã gửi<br>**When** xử lý thất bại<br>**Then** hiển thị Toast `Có Lỗi Xảy Ra` | - Không cập nhật một phần<br>- Cho phép thử lại<br>- Không lộ lỗi kỹ thuật |
| Toast Case 4: Thông tin, đóng và chống lặp | Medium | Ràng buộc Toast CRUD | Role có quyền CRUD | Đang đồng bộ hoặc Toast đang hiển thị | **Given** thao tác xử lý bất đồng bộ hoặc callback lặp<br>**When** UI nhận trạng thái hoặc người dùng bấm `×`<br>**Then** hiển thị tối đa một Toast `Thông Báo` và cho đóng thủ công | - Không báo thành công sớm<br>- Không nhân đôi Toast<br>- Đóng không hoàn tác dữ liệu |
| Case 1: Hiển thị danh sách cấp độ | High · Smoke | REQ01 | Curriculum Development Handler | Người dùng đã đăng nhập và có quyền | **Given** hệ thống có dữ liệu cấp độ<br>**When** người dùng mở màn hình Quản lý cấp độ<br>**Then** hệ thống hiển thị danh sách | - Có ID, Tên, Mô tả, Mã cấp độ và Trạng thái<br>- Hiển thị toàn bộ dữ liệu cấp độ |
| Case 2: Tạo cấp độ Nháp | High · Smoke | Flow 1 / REQ01 | Curriculum Development Handler | Màn hình danh sách đang mở | **Given** Mã cấp độ chưa tồn tại<br>**When** người dùng nhập đủ Tên, Mô tả, Mã cấp độ rồi lưu<br>**Then** hệ thống tạo cấp độ | - Trạng thái mặc định là `Nháp`<br>- Dữ liệu xuất hiện trong danh sách |
| Case 3: Chặn lưu khi thiếu field bắt buộc | High | EX01 / REQ01 | Curriculum Development Handler | Form thêm/cập nhật đang mở | **Given** Tên, Mô tả hoặc Mã cấp độ để trống/chỉ có khoảng trắng<br>**When** người dùng lưu<br>**Then** hệ thống từ chối | - Không tạo/cập nhật dữ liệu<br>- Hiển thị lỗi tại field tương ứng<br>- Giữ lại dữ liệu hợp lệ đã nhập |
| Case 4: Chặn Mã cấp độ trùng | High | EX02 / REQ01 | Curriculum Development Handler | Đã tồn tại một cấp độ có cùng mã | **Given** người dùng nhập Mã cấp độ đã tồn tại<br>**When** lưu form<br>**Then** hệ thống từ chối | - Không tạo dữ liệu trùng<br>- Mã cấp độ cũ không bị thay đổi |
| Case 5: Chuyển đổi giữa mọi trạng thái | High | Flow 2 / REQ02 | Curriculum Development Handler | Cấp độ đã tồn tại | **Given** cấp độ đang ở một trong ba trạng thái<br>**When** người dùng chọn một trong hai trạng thái còn lại<br>**Then** hệ thống cập nhật trạng thái | - Cho phép đủ sáu hướng chuyển<br>- Không tự động thay đổi Mã cấp độ<br>- Không xóa liên kết đã tồn tại |
| Case 6: Công khai cấp độ | High · Smoke | Flow 2 / REQ02 | Curriculum Development Handler | Cấp độ có đủ dữ liệu hợp lệ | **Given** cấp độ đang là `Nháp` hoặc `Vô hiệu hóa`<br>**When** chuyển sang `Công khai`<br>**Then** hệ thống kiểm tra và cập nhật trạng thái | - Cấp độ xuất hiện trong danh sách lựa chọn mới tại feature sử dụng |
| Case 7: Không cho chọn mới cấp độ Nháp/Vô hiệu hóa | High | Flow 3 / REQ03 | Curriculum Development Handler | Có cấp độ `Nháp` hoặc `Vô hiệu hóa` | **Given** người dùng mở field chọn cấp độ tại feature sử dụng<br>**When** hệ thống tải lựa chọn<br>**Then** chỉ trả về cấp độ `Công khai` | - Không hiển thị cấp độ `Nháp` hoặc `Vô hiệu hóa` để chọn mới |
| Case 8: Giữ liên kết khi cấp độ bị vô hiệu hóa | High | REQ02 / REQ03 | Curriculum Development Handler | Danh mục/khóa học đã tham chiếu cấp độ | **Given** cấp độ đang được sử dụng<br>**When** chuyển cấp độ sang `Vô hiệu hóa` hoặc `Nháp`<br>**Then** hệ thống giữ liên kết cũ | - Không tự động xóa cấp độ khỏi dữ liệu đã lưu<br>- Không cho chọn cấp độ đó cho liên kết mới |
| Case 9: Phản ánh thay đổi dữ liệu cấp độ | Medium | Flow 3 / REQ03 | Curriculum Development Handler | Danh mục/khóa học đang tham chiếu cấp độ | **Given** Tên hoặc Mô tả cấp độ được cập nhật<br>**When** nơi tham chiếu tải lại dữ liệu<br>**Then** hiển thị thông tin mới | - Không duy trì bản sao tên/mô tả độc lập đã lỗi thời |
| Case 10: Kiểm tra quyền truy cập trực tiếp | High | EX05 / Ràng buộc quyền | Các role khác | Người dùng đã đăng nhập nhưng không có quyền | **Given** người dùng không có quyền quản lý cấp độ<br>**When** mở URL hoặc gửi request trực tiếp<br>**Then** hệ thống từ chối | - Không xem hoặc thay đổi được dữ liệu<br>- Dữ liệu không thay đổi |

### Feature: Quản lý cấp độ

---

---

## 4. Câu hỏi cần xác nhận

- **Q01:** `ID` chưa có định nghĩa rõ ràng: cần chốt ID do hệ thống tự sinh hay người dùng nhập, thời điểm sinh, định dạng, độ dài, phạm vi duy nhất, khả năng chỉnh sửa và ID có bắt buộc trước khi chuyển sang `Công khai` hay không.
- **Q02:** Cần chốt định dạng của `Mã cấp độ`: có bắt buộc viết hoa, cho phép ký tự nào và có tự động chuẩn hóa khoảng trắng/chữ thường hay không. Requirement hiện chỉ chốt Mã cấp độ là bắt buộc và không được trùng.
- **Q03:** UI chưa có form thêm/cập nhật và notification kết quả; cần bổ sung thiết kế hoặc nội dung chính thức trước khi chốt copy hiển thị.
- **Q04:** Cần xác nhận có cho phép xóa cấp độ hay không và cách xử lý khi cấp độ đang được khóa học thuộc danh mục tham chiếu. Requirement hiện chưa bao gồm chức năng xóa.
