# Chi tiết lớp học — Tiêu chuẩn lớp - giáo viên, CSKH và Quy trình lớp

Ba tab dùng cùng Action Board, chỉ khác tên và loại quy trình. Package, Category, Action Item được định nghĩa tại [menu Define quy trình](../../process_definition_requirement/process_definition_requirements.md), ngoài lớp. Nguồn dùng chung bảng ComGao, quản lý theo center. Trong lớp chỉ chọn nội dung từ quy trình **Công khai** và cập nhật Result theo [Requirement Action Board](../../action_board_requirement/action_board_requirements.md).

## 1. UI

### Trang 1: Ba tab quy trình trong lớp
![Trang 1](./images/69-class-teacher-standard-board.png)

*Ảnh tab Tiêu chuẩn lớp - giáo viên; CSKH và Quy trình lớp dùng cùng bố cục.*

**Mô tả:**

- Người đã được add vào lớp mở Chi tiết lớp để xem nội dung và Result ở tab `Tiêu chuẩn lớp - giáo viên`, `CSKH` hoặc `Quy trình lớp` theo quyền của mình.

**Giải thích field/thành phần:**

- `A01.01` **Tên tab**: Mỗi tab lấy đúng loại quy trình tương ứng đã định nghĩa ngoài lớp.
- `A01.02` **Tiến độ**: Hiển thị tiến độ tổng, Package, Category và số item hoàn thành như `2/7`.
- `A01.03` **Action Item**: Mở/thu gọn để xem nội dung và control Result theo loại Action.
- `A01.04` **Nút Thêm**: `Thêm tiêu chuẩn` ở tab Tiêu chuẩn lớp - giáo viên; `Thêm quy trình` ở tab CSKH và Quy trình lớp.

**Điểm cần lưu ý:**

- Chỉ **Class Handler hoặc Support đã được add vào chính lớp với role đó** được Thêm nội dung và cập nhật Result khi quy trình nguồn Công khai. Họ được cập nhật item do người khác thêm. Ngoại lệ: **Giáo viên của lớp** được tick checkbox xác thực của Action loại `Xác thực` (`verify`) ở tab Tiêu chuẩn lớp - giáo viên khi mình nằm trong Người gán của Result; tick một lần, không bỏ tick (xem [requirement Giáo viên — Quy trình](../../teacher_role/class/class_process_requirements.md)).
- Người chưa được add vào lớp không vào được Chi tiết lớp hoặc ba tab này, kể cả khi biết URL hay ID lớp.
- Result không lẫn giữa các lớp, ba loại quy trình hoặc với định nghĩa nguồn. Định nghĩa đã Công khai bị khóa thêm/sửa/xóa; khi Công khai, cập nhật Result theo quyền. Quy trình chuyển Vô hiệu vẫn hiện nội dung/Result đã ghi nhưng chỉ xem; không xóa kết quả cũ.

### Trang 2: ADM-LOP-020610 — Popup Thêm nội dung

![Figma mới nhất · ADM-LOP-020610](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-LOP-020610.png)

![Trang 2](./images/70-class-process-picker.png)

*Ảnh popup Thêm quy trình của tab Quy trình lớp; chỉ hiển thị Package được định nghĩa cho loại này.*

**Mô tả:**

- Class Handler/Support của lớp chọn **Package → Category → Action Item** có sẵn. Popup chỉ tải nguồn **Công khai** của **tab đã bấm Thêm**.

**Giải thích field/thành phần:**

- `A02.01` **Tiêu chuẩn lớp - giáo viên → `Thêm tiêu chuẩn`**: Chỉ hiển thị Package từ loại `Lớp - Giáo viên`.
- `A02.02` **CSKH → `Thêm quy trình`**: Chỉ hiển thị Package từ loại `CSKH` (Support).
- `A02.03` **Quy trình lớp → `Thêm quy trình`**: Chỉ hiển thị Package từ loại `Lớp học`; ảnh có Package `Khai giảng`.
- `A02.04` **Cây lựa chọn**: Mở/thu gọn, chọn nhiều cấp bằng checkbox; chọn cha chọn các mục con, có thể bỏ chọn mục con.
- `A02.05` **Category / Action Item**: Hiển thị badge tiến độ Category như `10/10` và nhãn loại Action như `Task tiến trình`, `Hướng dẫn`, `Kiểm tra` theo nguồn.
- `A02.06` **`Thêm (1)`**: Xác nhận lựa chọn; ảnh thể hiện một Package được chọn.
- `A02.07` **Hủy**: Đóng popup, không lưu lựa chọn mới.

**Điểm cần lưu ý:**

- Nguồn và lớp phải cùng center; không tải/chọn quy trình center khác.
- Chỉ quy trình Công khai được chọn và thêm vào lớp; Nháp/Vô hiệu không được thêm mới. Kiểm tra lại trạng thái nguồn lúc lưu.
- Không trộn Package giữa ba loại, kể cả khi trùng tên. Không thêm trùng Action Item; Thêm nội dung không tự ghi Result hoặc sửa định nghĩa nguồn.

### Trang 3: Toast phản hồi CRUD
![Trang 3](../../images/01-toast-crud.png)

*Toast chung cho thao tác Thêm nội dung và cập nhật Result.*

**Mô tả:**

- Dùng Toast chung sau khi lưu Thêm nội dung hoặc Result.

**Điểm cần lưu ý:**

- `A03.01` **`Thành Công`**: Khi sử dụng: Lưu thành công.
- `A03.02` **`Thông Báo`**: Khi sử dụng: Chỉ khi thao tác đã tiếp nhận nhưng còn chờ đồng bộ.
- `A03.03` **`Cảnh Báo`**: Khi sử dụng: Lựa chọn hoặc Result không hợp lệ.
- `A03.04` **`Có Lỗi Xảy Ra`**: Khi sử dụng: Lưu thất bại.

- Mỗi lần lưu có tối đa một Toast; Hủy, chỉ xem và mở/thu gọn không có Toast CRUD.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1 / REQ01: Xem tab quy trình**

```text
Người đã được add vào lớp mở một trong ba tab theo quyền
      → Kiểm tra quan hệ user–lớp trước khi tải dữ liệu
      → Tải nội dung đã gắn và Result của đúng lớp, đúng loại quy trình
      → Hiển thị cây Action Board và tiến độ
```

**Flow 2 / REQ02 / REQ04 / REQ05: Thêm nội dung**

```text
Class Handler/Support của lớp bấm Thêm
      → Popup chỉ tải quy trình Công khai cùng center: Lớp - Giáo viên/CSKH/Lớp học theo tab đã bấm
      → Chọn Package → Category → Action Item từ nguồn đó
      → Hủy: không lưu; Thêm: kiểm tra quyền, liên kết nguồn và trạng thái vẫn Công khai
      → Thành công: gắn item vào lớp, cập nhật màn hình và một Toast
```

**Flow 3 / REQ02 / REQ03 / REQ05: Cập nhật Result**

```text
Class Handler/Support của lớp mở Action Item đã gắn
      → Kiểm tra nguồn còn Công khai; Vô hiệu thì chỉ xem nội dung/Result cũ
      → Nhập/chọn Result theo control của loại Action rồi lưu
      → Thành công: cập nhật Result, tiến độ và một Toast
      → Thất bại: giữ Result cũ, hiển thị phản hồi lỗi
```

### 2.2. Ngoại lệ

- **EX01:** Khi Thêm nội dung, Package/Category/Action Item không thuộc loại quy trình của tab, khác center với lớp, không còn hợp lệ, quy trình nguồn không còn Công khai hoặc đã gắn trùng → từ chối, không lưu một phần.
- **EX02:** Chưa được add vào lớp → không vào Chi tiết lớp/tab hoặc đọc dữ liệu qua request; đã thuộc lớp nhưng không có role Class Handler/Support → từ chối Thêm/cập nhật Result.
- **EX03:** Lưu lỗi → giữ lựa chọn hoặc Result cũ để thử lại; không báo thành công.
- **EX04:** Cập nhật Result khi nguồn Vô hiệu → từ chối qua UI/request; nội dung và Result đã ghi vẫn hiển thị.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Nguồn | Ba loại quy trình được định nghĩa riêng ngoài lớp. Nguồn ICS dùng chung bảng ComGao và theo center. Popup chỉ hiển thị Package từ quy trình Công khai cùng center: tab Tiêu chuẩn lớp - giáo viên lấy Lớp - Giáo viên, CSKH lấy CSKH (Support), Quy trình lớp lấy Lớp học. |
| REQ02 | Quyền | Phải được add vào lớp mới được vào Chi tiết lớp và xem tab theo quyền. Chỉ Class Handler/Support của lớp được Thêm và cập nhật Result; không phụ thuộc người đã thêm item. Ngoại lệ: Giáo viên của lớp tick Action `Xác thực` có mình trong Người gán (tab Tiêu chuẩn lớp - giáo viên). |
| REQ03 | Result | Lưu riêng theo lớp, loại quy trình và Action Item; tiến độ theo Action Board. Định nghĩa đã Công khai bị khóa thêm/sửa/xóa nên không có tình huống đổi Loại task hoặc xóa item nguồn sau khi gắn vào lớp. Khi nguồn Công khai, cập nhật Result theo quyền lớp. Khi nguồn Vô hiệu, vẫn hiện nội dung/Result cũ nhưng chỉ xem; Công khai lại thì áp dụng quyền cập nhật theo role lớp. |
| REQ04 | Chọn nội dung | Chọn nhiều cấp; Hủy không lưu; không thêm trùng hoặc tự ghi Result; chỉ lưu nguồn còn Công khai. |
| REQ05 | Phản hồi | Lưu thành công/lỗi có một Toast đúng kết quả; Hủy và chỉ xem không có Toast CRUD. |

### 2.4. Ràng buộc

#### Quyền

| Role/phạm vi | Xem tab | Thêm nội dung | Cập nhật Result | Sửa định nghĩa nguồn trong lớp |
|---|:---:|:---:|:---:|:---:|
| Class Handler đã được add vào lớp | ✅ | ✅ | ✅ | ❌ |
| Support đã được add vào lớp | ✅ | ✅ | ✅ | ❌ |
| Giáo viên của lớp, nằm trong Người gán của Action `Xác thực` (tab Tiêu chuẩn lớp - giáo viên) | ✅ | ❌ | ✅ chỉ tick item `Xác thực` đó | ❌ |
| Thành viên lớp có role khác và có quyền mở tab | ✅ | ❌ | ❌ | ❌ |
| Người chưa được add vào lớp, kể cả có role hệ thống khác | ❌ | ❌ | ❌ | ❌ |

#### Ràng buộc khác

**Phạm vi dữ liệu**

- Quy trình nguồn và lớp thuộc cùng center; kiểm tra center khi tải popup, thêm nội dung và cập nhật Result.
- Kiểm tra quan hệ user–lớp trước khi đọc; khi lưu kiểm tra role **trong lớp hiện tại**, trạng thái nguồn còn Công khai và liên kết Package → Category → Action Item, kể cả request trực tiếp.
- Bảng quyền Thêm/cập nhật Result chỉ áp dụng khi nguồn Công khai. Với nguồn Vô hiệu đã thêm, mọi role chỉ xem nội dung và Result.
- Result của lớp và tab này không thay Result lớp/tab khác hoặc nội dung định nghĩa nguồn.

---

## 3. Testcase

### Feature: Chi tiết lớp học — Tiêu chuẩn lớp - giáo viên, CSKH và Quy trình lớp

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Hiển thị đúng phạm vi lớp và tab | High · Smoke | Flow 1 / REQ01 / EX02 | Thành viên lớp / người ngoài lớp | Hai lớp có dữ liệu ở ba tab; user được add vào lớp A nhưng không thuộc lớp B | **Given** user mở các tab lớp A rồi truy cập trực tiếp lớp B<br>**When** hệ thống kiểm tra quan hệ với lớp<br>**Then** chỉ hiển thị nội dung, Result và tiến độ lớp A | Không trộn loại quy trình; không vào được Chi tiết lớp B hoặc đọc dữ liệu qua URL/request. |
| Case 2: Result theo quyền và trạng thái nguồn | High | Flow 3 / REQ02 / REQ03 / EX04 | Class Handler / Support / người chỉ xem | Item đã được gắn vào lớp | **Given** nguồn đang Công khai<br>**When** Support lưu Result, sau đó nguồn chuyển Vô hiệu rồi Công khai lại<br>**Then** Công khai cập nhật theo quyền; Vô hiệu chỉ xem | Vô hiệu vẫn hiện nội dung/Result cũ và chặn cập nhật qua UI/request; Công khai lại khôi phục thao tác theo quyền, không mất kết quả. Người chỉ xem luôn bị chặn. |
| Case 3: Mỗi tab chỉ thấy nguồn của mình | High | Flow 2 / REQ01 / REQ04 | Class Handler / Support của lớp | Ba loại có Package riêng và nguồn ở ba trạng thái | **Given** mở popup Thêm ở từng tab<br>**When** chọn Package, Category, Action Item rồi Thêm<br>**Then** popup và nội dung lưu chỉ thuộc loại của tab đó, từ quy trình Công khai | CSKH không thấy Package Tiêu chuẩn/Quy trình lớp; không trùng hoặc tự hoàn thành item. |
| Case 4: Hủy hoặc lựa chọn không hợp lệ | High | Flow 2 / EX01 / EX02 | Người đang chọn / người ngoài quyền | Popup có lựa chọn nháp | **Given** Hủy hoặc gửi item sai nguồn/khác center/không có quyền/nguồn Nháp hoặc Vô hiệu<br>**When** hệ thống xử lý<br>**Then** không thay dữ liệu | Không thêm item sai loại, vượt quyền hoặc chưa Công khai; nguồn vừa chuyển Vô hiệu trước lúc lưu cũng bị từ chối. |
| Case 5: Phản hồi đúng kết quả | High | REQ05 / EX03 | Class Handler / Support của lớp | Có thao tác Thêm hoặc lưu Result | **Given** xác nhận lưu<br>**When** backend trả thành công, validation hoặc lỗi<br>**Then** hiển thị một Toast đúng loại | Không báo thành công trước khi lưu; Hủy không Toast. |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Quyền xem tab của các role **đã được add vào lớp** ngoài Class Handler/Support chưa được nêu; người ngoài lớp không có quyền xem.
