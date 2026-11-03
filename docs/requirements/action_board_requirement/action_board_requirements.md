# Action Board

## 1. UI

### Trang 1: Action Board tổng quát

![Trang 1](./images/action-board-training-process.png)

**Mô tả:**
- Action Board là thành phần dùng chung để định nghĩa nội dung theo từng nghiệp vụ và ghi nhận kết quả thực hiện theo từng người sở hữu dữ liệu.
- Người có quyền định nghĩa nội dung tạo, sửa, sắp xếp, bật/tắt hoặc xóa các cấp Package, Category và Action.
- Người có quyền cập nhật kết quả dùng cùng cấu trúc đó để đánh dấu hoàn thành, đánh giá, nhập ghi chú, cập nhật task hoặc đính kèm nội dung theo từng Action.
- Ảnh minh họa: Action Board kiểu Pack - Sub - Role tại màn hình Đào tạo → Quy trình.

**Điểm cần lưu ý:**
- Khi mở màn hình, UI hiển thị loading cho đến khi tải xong cây Package và nội dung của Package được chọn.
- Layout có Package chia hai khu vực: bên trái là tiêu đề, mô tả, Category và Action của Package đang chọn; bên phải là cây Package và các cấp con.
- Package đầu tiên được chọn mặc định sau khi tải dữ liệu. Khi tải từ một Package cha tùy chỉnh, UI chọn Package con đầu tiên.
- Category hiển thị dạng accordion; Action nằm trong Category và mở rộng để xem nội dung chi tiết.
- Nút kéo thả, thêm mới, chỉnh sửa, bật/tắt, lịch sử và xóa chỉ hiển thị khi quyền hiện tại cho phép định nghĩa nội dung.
- Không có search, filter hay phân trang cho cây Package, Category và Action.
- Không có dữ liệu và người dùng không có quyền định nghĩa: hiển thị trạng thái rỗng; layout Package hiển thị `Không có dữ liệu`.
- Xóa Package, Category, Action là xóa mềm bằng `status = 2`. Toggle Package: `status = 1` đang hoạt động, `status = 0` tạm ngưng.
- Chế độ `COMMENT_ONLY` chỉ thao tác nội dung của Action `Task nhập liệu` và `Task tiến trình` theo control của từng loại Task; không áp dụng cho Action `Nhận xét` hoặc ghi chú kết quả chung.
- Chế độ `READ_ONLY` chỉ xem dữ liệu FE cho phép hiển thị; theo FE hiện tại, phần nội dung riêng của `Task nhập liệu` và `Task tiến trình` không được render.
- 8 kiểu bố cục (Action Board type):
  - `PACK`: Package → Category → Action (đã có màn hình).
  - `CATE`: Category → Action; backend vẫn dùng một `MAIN_PACK` kỹ thuật (đã có màn hình).
  - `ACT`: Action trực tiếp, các cấp cha là lớp kỹ thuật (mới hiển thị placeholder `ACT`).
  - `PACK_SUBS`: Package → Sub-package → Category → Action (đã có màn hình).
  - `PACK_2SUBS`: Package → Sub cấp 1 → Sub cấp 2 → Category → Action (đã có màn hình).
  - `PACK_3SUBS`: Package → Sub cấp 1 → Sub cấp 2 → Sub cấp 3 → Category → Action (mới hiển thị placeholder `PACK_3SUBS`).
  - `PACK_ROLES`: Package → Role → Category → Action (đã có màn hình).
  - `PACK_SUBS_ROLES`: Package → Sub-package → Role → Category → Action (đã có màn hình).
- Mapping vị trí nghiệp vụ → type:
  - `PACK`: Mô tả công việc, Bàn giao tài khoản, Bàn giao tài liệu, Bàn giao nghiệp vụ, Nhật ký công việc, Review.
  - `CATE`: Câu hỏi thông tin phỏng vấn, Tiêu chuẩn ứng viên, Đầu ra đào tạo, Đánh giá sau đào tạo, Thử việc sau đào tạo.
  - `PACK_ROLES`: Các vòng phỏng vấn.
  - `PACK_SUBS_ROLES`: Quy trình đào tạo, Onboarding.
  - `PACK_SUBS`: Tài liệu đào tạo.

### Trang 2: Khu vực cây Package

**Mô tả:**
- Cây Package ở bên phải để người có quyền định nghĩa thêm, sửa, sắp xếp, bật/tắt, xóa Package và các cấp con; người khác chỉ chọn để xem.

**Điểm cần lưu ý:**
- Tên Package: bắt buộc khi tạo, FE trim khoảng trắng đầu/cuối để kiểm tra rỗng; code hiện tại chưa giới hạn độ dài hay kiểm tra trùng tên.
- Mô tả Package: không bắt buộc, hỗ trợ nội dung định dạng, chỉ người có quyền định nghĩa được sửa.
- Loại node do layout quyết định: `MAIN_PACK`, `SUB_PACK`, `TWO_SUB_PACK`, `THREE_SUB_PACK`, `ROLE_PACK`, `ROLE_SUB_PACK` hoặc `ROLE`. Parent bắt buộc và phải đúng quan hệ cha-con backend cho phép.
- Trạng thái: `1` hoạt động, `0` tạm ngưng, `2` đã xóa.
- Thứ tự cập nhật bằng kéo thả giữa các node cùng cấp; backend lưu thứ tự từ `1` theo danh sách ID FE gửi lên.
- Role node do hệ thống sinh khi tạo cây `PACK_ROLES` hoặc `PACK_SUBS_ROLES`: Quy trình đào tạo/Onboarding gồm `Người đào tạo`, `Người được đào tạo`; vòng phỏng vấn gồm `Câu hỏi phỏng vấn`, `Đánh giá`. UI không cho xóa trực tiếp node type `ROLE`.
- Package bị tắt: màn hình định nghĩa vẫn tải node chưa xóa; màn hình theo người sở hữu chỉ tải Package đang hoạt động.
- Xóa Package cha chỉ đổi trạng thái node được chọn; chưa có cascade xuống node con.

### Trang 3: Khu vực Category và Action

**Mô tả:**
- Vùng bên trái hiển thị Category (accordion) và Action của Package đang chọn; người có quyền định nghĩa tạo/sửa/xóa/sắp xếp.

**Điểm cần lưu ý:**
- Category: tên bắt buộc khi tạo (FE trim, chưa giới hạn độ dài/trùng tên); mô tả không bắt buộc, hỗ trợ định dạng; phải thuộc Package đang chọn; trạng thái `1` hoạt động, `2` đã xóa (repository vẫn trả Category `status = 0`); kéo thả trong cùng Package.
- Tag của Category: không bắt buộc, lưu theo Category và `owner_id`; phải thuộc tập Tag hiện hành của group Action Board thì Category mới tiếp tục hiển thị cho chính owner.
- Action: tên bắt buộc khi tạo (FE trim, chưa giới hạn độ dài/trùng tên); mô tả không bắt buộc, hỗ trợ định dạng; phải thuộc Category đang mở; kéo thả trong cùng Category; repository vẫn trả Action `status = 0`.
- Loại Action: `Kiểm tra`, `Hướng dẫn`, `Task tiến trình`, `Task nhập liệu`, `Đánh giá`, `Media`, `Nhận xét`, `Deadline`, `Xác thực`, `Log`.
- Quy tắc loại Action theo vị trí: mặc định cho chọn tất cả loại; tại `Các vòng phỏng vấn`, Role `Câu hỏi phỏng vấn` chỉ `Kiểm tra`, Role `Đánh giá` chỉ `Đánh giá`; tại `Review`, Action mới mặc định `Đánh giá` và không có dropdown đổi loại; ngoài `Review`, Action mới mặc định là loại đầu tiên trong danh sách hợp lệ (hiện là `Kiểm tra`).
- File dùng cho nội dung hướng dẫn, nhận xét hoặc task nhập liệu tùy loại; vùng file tổng quát chấp nhận `PNG`, `JPG`, `JPEG`, `GIF`, `WEBP`, `MP4`, `MOV`, `PPTX`, `DOCX`, `PDF`, `XLSX`, `XLS`, `TXT`, `SVG`.
- URL/Media dùng cho Action loại Media; cho nhập URL hoặc upload `PNG`, `JPG`, `JPEG`, `GIF`, `WEBP`, `MP4`, `MOV`; UI preview ảnh/video/YouTube và ghi log thời lượng xem video.

### Trang 4: Popup chọn loại Action

![Trang 4](./images/action-board-action-type-menu.png)

**Mô tả:**
- Người có quyền định nghĩa bấm nút loại Action ở bên phải tiêu đề Action để mở dropdown đổi loại.
- Ảnh minh họa: dropdown chọn loại Action trên màn hình Quy trình đào tạo.

**Điểm cần lưu ý:**
- Dropdown hiển thị icon và tên loại; loại đang chọn có nền màu chính, icon và chữ màu trắng.
- Bảy loại hiện có giữ nguyên thứ tự UI; ba loại mới `Deadline`, `Xác thực`, `Log` phải xuất hiện trong dropdown.
- Chọn loại khác cập nhật ngay type của Action; nội dung mở rộng đổi sang control của type mới.
- Chỉ tương tác được khi quyền là `Định nghĩa nội dung` và vị trí cho phép từ hai loại trở lên. Nếu vị trí/Role chỉ cho một loại, UI chỉ hiển thị icon loại đó, không mở danh sách.
- Màn hình `Review` và người không có quyền định nghĩa không thấy dropdown đổi loại.

### Trang 5: Danh sách Action trong Category

![Trang 5](./images/action-board-action-types-overview.png)

**Mô tả:**
- Category hiển thị các Action `Kiểm tra`, `Hướng dẫn`, `Task tiến trình`, `Task nhập liệu`, `Đánh giá`, `Media`, `Nhận xét`; mỗi Action có drag handle, control kết quả nếu có, tên, icon loại và nút mở/đóng chi tiết.

**Điểm cần lưu ý:**
- Action `Kiểm tra`, `Đánh giá` và `Xác thực` có control kết quả nằm trước tên Action.
- Action mở rộng hiển thị vùng `Nhập mô tả` và nội dung chuyên biệt theo loại; Action thu gọn chỉ hiển thị hàng tiêu đề.
- Ô `Nhập nội dung mới` ở cuối Category dùng để tạo Action; ô `Nhập danh mục mới` ở cuối danh sách dùng để tạo Category.
- Chỉ người có quyền định nghĩa thấy drag handle hoạt động, ô tạo Category/Action và nút xóa khi hover.
- Chevron phản ánh đúng trạng thái mở/đóng của từng Action và không làm đổi Action đang chọn trong cây Package.
- Thứ tự Action sau kéo thả được giữ nguyên khi tải lại trang.

### Trang 6: Nội dung Action loại Deadline, Xác thực và Log

![Trang 6](./images/action-board-deadline-verification-log.png)

**Mô tả:**
- Ba loại Action mới với các control tương ứng khi mở rộng; ảnh chỉ xác nhận thành phần và trạng thái rỗng.

**Điểm cần lưu ý:**
- `Deadline`: control chọn deadline (rỗng hiển thị `Chưa đặt deadline`), control thời gian hoàn thành (rỗng hiển thị `Chưa chọn thời gian hoàn thành`), mô tả không bắt buộc (placeholder `Nhập mô tả`).
- `Xác thực`: checkbox trước tên Action phản ánh đúng giá trị đã lưu; control thời gian (rỗng `Chưa chọn thời gian`), người gán (rỗng `Chưa chọn người gán`), mô tả không bắt buộc (placeholder `Nhập mô tả`).
- `Log`: control thời gian (rỗng `Chưa chọn thời gian`), mô tả không bắt buộc (placeholder `Nhập mô tả`).
- Cả ba giữ cấu trúc chung gồm drag handle, tên, chip loại Action, nút xóa và chevron theo quyền hiện tại.
- Đổi sang một trong ba loại: vùng mở rộng đổi đúng control, không giữ control không thuộc loại đã chọn.
- Giá trị đã lưu được khôi phục đúng khi tải lại; mở/đóng Action không tự đổi dữ liệu.
- Kiểu dữ liệu, quy tắc bắt buộc, quyền cập nhật, validation và ảnh hưởng tới tiến độ cần chốt trước khi làm backend (xem mục 4).

### Trang 7: Nội dung Action loại Hướng dẫn

![Trang 7](./images/action-board-instruction-upload.png)

**Mô tả:**
- Action `Hướng dẫn` mở rộng có mô tả và vùng kéo thả/chọn file.

**Điểm cần lưu ý:**
- Mô tả không bắt buộc, hỗ trợ định dạng, placeholder `Nhập mô tả`; chỉ người có quyền định nghĩa được sửa.
- File hướng dẫn không bắt buộc; kéo thả hoặc bấm `chọn file`, upload ngay sau khi chọn file hợp lệ.
- Chỉ chấp nhận `PNG`, `JPG`, `JPEG`, `GIF`, `WEBP`, `MP4`, `MOV`, `PPTX`, `DOCX`, `PDF`, `XLSX`, `XLS`, `TXT`, `SVG`.
- Danh sách hiển thị các file upload thành công; người có quyền định nghĩa được xóa file khỏi Action.
- File sai extension bị từ chối và hiển thị `"{tên file}" không hợp lệ. Chỉ chấp nhận: {danh sách extension}`.
- File trùng tên với file đã có trong upload box hiện tại không được thêm lần nữa.
- Upload thất bại: file ở trạng thái lỗi và không được thêm vào danh sách `files` đã lưu của Action.
- Code hiện tại không truyền giới hạn số file, dung lượng mỗi file hay tổng dung lượng.

### Trang 8: Nội dung Action loại Media

![Trang 8](./images/action-board-media-input.png)

**Mô tả:**
- Action `Media` mở rộng với ô `Nhập URL` và vùng upload ảnh/video.

**Điểm cần lưu ý:**
- URL không bắt buộc, input một dòng, submit khi Enter. Submit URL khác rỗng thì FE lưu URL rồi tải preview; URL rỗng đưa vùng Media về trạng thái nhập liệu.
- File Media không bắt buộc; kéo thả hoặc chọn file, upload ngay. Upload thành công thì FE lưu File ID vào trường URL của Action, lưu Action và tải preview.
- Chỉ chấp nhận `PNG`, `JPG`, `JPEG`, `GIF`, `WEBP`, `MP4`, `MOV`.
- URL/File ID hợp lệ được nhận diện và preview dạng ảnh, video hoặc YouTube.
- Người có quyền định nghĩa được xóa Media; thao tác xóa đưa URL về chuỗi rỗng.
- Không tải được Media: UI hiển thị khung lỗi với nút thử tải lại.
- Chỉ ghi log thời lượng xem khi video được xem lớn hơn `0` giây.
- Code hiện tại không truyền giới hạn dung lượng/số file và chưa validate định dạng URL tại input.

### Trang 9: Khu vực kết quả theo người sở hữu

**Mô tả:**
- Người có quyền cập nhật kết quả ghi nhận kết quả của từng Action theo người sở hữu (thường là ứng viên/người được đào tạo) trên cùng cấu trúc board.

**Điểm cần lưu ý:**
- Người sở hữu (`owner_id`) bắt buộc để tạo kết quả; thường là ID ứng viên/người được đào tạo.
- `Kiểm tra`: giá trị đúng/sai. `Đánh giá`: một trong `Tốt`, `Ổn`, `Trung bình`, `Chưa Tốt`, `Tệ`.
- Ghi chú theo từng Action và người sở hữu; không chấp nhận chuỗi rỗng khi submit trên UI.
- File/URL là nội dung người dùng nộp hoặc đính kèm tùy loại Action. Task có thể gồm yêu cầu, mô tả/ghi chú, file, danh sách checklist và tiến độ.
- Tag Category theo người sở hữu được lưu dưới Item type `ACTION_BOARD_RESULT` gắn với Category.
- Khi tải board với `owner_id`, backend ghép Item kết quả vào từng Action theo cặp `action_id + owner_id`. FE tự tạo Item kết quả rỗng cho Action chưa có Item khi Action được khởi tạo trên màn hình có `owner_id`.
- Kết quả của hai người sở hữu trên cùng một cấu trúc board độc lập nhau.
- Nếu người đăng nhập cũng là người sở hữu, FE chỉ hiển thị Category không có tag hoặc có ít nhất một tag thuộc tập Tag hiện hành của group Action Board.
- Tiến độ Package tính từ các Action `Kiểm tra`, `Đánh giá`, `Task tiến trình`. Trọng số đánh giá: `Tốt = 100%`, `Ổn = 75%`, `Trung bình = 50%`, `Chưa Tốt = 25%`, `Tệ = 0%`.

### Trang 10: Toast phản hồi CRUD

**Mô tả:**
- Toast phản hồi kết quả các thao tác thay đổi dữ liệu của Action Board.

**Điểm cần lưu ý:**
- 4 loại Toast: Thành công (tiêu đề `Thành Công`, khi backend xác nhận thành công); Thông tin (`Thông Báo`, thao tác đã tiếp nhận nhưng dữ liệu cần thời gian đồng bộ); Cảnh báo (`Cảnh Báo`, dữ liệu/điều kiện cần người dùng kiểm tra); Lỗi (`Có Lỗi Xảy Ra`, backend/network không hoàn tất thao tác).
- Nội dung dòng hai lấy từ flow CRUD tương ứng; mỗi thao tác chỉ có một Toast.
- Hủy/chỉ đọc không có Toast CRUD; nút `×` đóng thủ công; không hiển thị dữ liệu nhạy cảm.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Mở hoặc khởi tạo Action Board**

```
Mở màn hình có Action Board
      → FE xác định role, vị trí, quyền thao tác, Action Board type
      → FE gửi ab_type + board_position + object_id (thêm owner_id khi xem kết quả của một người)
      → BE kiểm tra type hợp lệ và khớp vị trí
      → Board đã có: trả cây Package hiện tại
      → Board chưa có: tạo board + cây Package mặc định theo type + Role theo vị trí
      → FE chọn Package đầu tiên, tải Category + Action, ghép Item theo owner_id nếu có
      → Thành công: hiển thị cấu trúc và nội dung, không có notification
      → Thất bại: toast lỗi từ service, không cho thao tác trên dữ liệu chưa tải xong
```

**Flow 2: Định nghĩa cây Package**

```
Người có quyền định nghĩa nhập tên Package/Sub-package tại đúng cấp → Bấm thêm hoặc submit
      → FE trim, kiểm tra tên không rỗng
      → BE kiểm tra type node và quan hệ parent
      → Layout có Role: BE tự sinh đủ Role theo vị trí
      → Thành công: thêm cây mới vào UI, hiển thị "Tạo thành công"
      → Thất bại: không thêm node, hiển thị "Lỗi khi tạo" hoặc lỗi từ service
```

**Flow 3: Chỉnh sửa Package**

```
Người có quyền định nghĩa chọn Package → Sửa tên/mô tả và submit
      → FE gửi phần dữ liệu thay đổi
      → Thành công: cập nhật node đang chọn, hiển thị "Cập nhật thành công"
      → Thất bại: hiển thị lỗi, dữ liệu server không đổi
```

**Flow 4: Tạo và quản lý Category/Action**

```
Người có quyền định nghĩa chọn Package → Nhập tên Category và tạo (gắn với Package đang chọn)
      → Mở Category → Nhập tên Action và tạo (FE chọn loại mặc định theo vị trí/Role)
      → Sửa tên, mô tả, loại, file, URL, deadline, thời gian, người gán theo loại Action
      → Thành công Category: "Tạo Category mới thành công"
      → Thành công Action: UI cập nhật danh sách, "Cập nhật thành công"
      → Thất bại: không lưu, hiển thị lỗi tương ứng
```

**Flow 5: Cập nhật kết quả Action**

```
Người có quyền cập nhật kết quả mở board của một người sở hữu
      → FE tải hoặc tự tạo Item theo action_id + owner_id
      → UPDATE_RESULT: cập nhật Kiểm tra, Đánh giá, tag Category, ghi chú kết quả chung, file kết quả Nhận xét, dữ liệu Task FE cho phép
      → COMMENT_ONLY: chỉ Task nhập liệu/Task tiến trình (ghi chú, nộp file, checklist); không cập nhật Kiểm tra/Đánh giá, không thêm file/ghi chú cho Nhận xét
      → FE cập nhật Item kết quả
      → Đổi check/evaluate: BE tính lại tiến độ Package
      → Thành công: UI cập nhật kết quả, thời gian/người cập nhật, tiến độ; "Cập nhật thành công"
      → Thất bại: hiển thị lỗi, kết quả trên server không đổi
```

**Flow 6: Bật/tắt, xóa và sắp xếp**

```
Người có quyền định nghĩa thao tác trên Package/Category/Action
      → Bật/tắt Package: cập nhật status 1/0
      → Xóa: popup xác nhận → status = 2
      → Kéo thả: FE gửi toàn bộ ID các node cùng cấp theo thứ tự mới
      → Thành công: cập nhật UI; "Xóa thành công"/"Xóa Category thành công"; reorder "Đổi vị trí thành công"
      → Thất bại: hiển thị lỗi, toggle hoàn nguyên, server giữ trạng thái trước request
```

**Flow 7: Quản lý Tag và lịch sử**

```
Người có quyền định nghĩa mở quản lý Tag hoặc lịch sử Action Board
      → Tag tổ chức theo group có title bằng board_id
      → Người có quyền cập nhật kết quả gắn Tag được phép vào Category của owner_id
      → Hệ thống dùng Tag để lọc Category khi chính người sở hữu mở board
      → Thao tác tạo/sửa/xóa/chọn Package, cập nhật Action/Item, xem video được gửi sang hệ thống log
```

### 2.2. Ngoại lệ

- **EX01:** `ab_type` không thuộc danh sách hỗ trợ → BE từ chối với `INVALID_BOARD_TYPE`; không tạo Action Board hoặc Package.
- **EX02:** `ab_type` không khớp `board_position` → BE từ chối với `POSITION_NOT_MATCH_BOARD_TYPE`; dữ liệu không đổi.
- **EX03:** Vị trí chưa được mapping sang Action Board type → BE từ chối với `NOT_DEFINE_POSITION_TO_AB_TYPE`.
- **EX04:** Tạo node với Package type không hợp lệ → BE từ chối với `INVALID_PACKAGE_TYPE`; không tạo node.
- **EX05:** Quan hệ cha-con không đúng → BE từ chối với `{package_type} cannot have parent type {parent_type}`; không tạo cây.
- **EX06:** Layout cần Role nhưng thiếu số lượng Role, tên Role hoặc số lượng không khớp → BE từ chối với `INVALID_ROLE`.
- **EX07:** Tên Package rỗng → FE hiển thị `Vui lòng nhập tên package`; không gửi request.
- **EX08:** Tên Category rỗng → FE không gửi request, giữ màn hình hiện tại, không hiển thị notification.
- **EX09:** Tên Action rỗng → FE hiển thị `Vui lòng nhập tên action`; không gửi request.
- **EX10:** Ghi chú rỗng → FE hiển thị `Vui lòng nhập ghi chú`; không gửi request.
- **EX11:** Người dùng không có quyền thay đổi nhưng tương tác vào control kết quả → UI không cập nhật dữ liệu, hiển thị `Bạn không có quyền thay đổi` tại các control đã triển khai thông báo này.
- **EX12:** ID Package/Category/Action không tồn tại hoặc sai định dạng → BE trả not found; không tạo hoặc cập nhật thay thế.
- **EX13:** Request tải dữ liệu lỗi mạng → FE hiển thị toast bắt đầu bằng `Lỗi mạng:`; giữ màn hình ở trạng thái không có dữ liệu hợp lệ để thao tác.
- **EX14:** Request tạo/cập nhật/reorder thất bại → FE hiển thị lỗi tương ứng; thao tác optimistic hoàn nguyên về dữ liệu server gần nhất.
- **EX15:** Board không có Package hoặc Package không có Category/Action → hiển thị trạng thái rỗng phù hợp; không tự chọn phần tử không tồn tại.
- **EX16:** Upload file có extension ngoài danh sách của control → FE từ chối, không upload, hiển thị `"{tên file}" không hợp lệ. Chỉ chấp nhận: {danh sách extension}`.
- **EX17:** Upload file thất bại → hiển thị `Upload thất bại`; không thêm File ID vào Action/Item.
- **EX18:** URL/File ID Media không tải được → hiển thị khung lỗi và cho thử tải lại; không tự xóa giá trị đã lưu nếu người dùng chưa xóa.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Định danh board | Một Action Board xác định theo bộ `ab_type + board_position + object_id` và chỉ lấy board chưa bị xóa. |
| REQ02 | Type hợp lệ | `ab_type` thuộc 8 giá trị hỗ trợ và khớp mapping của `board_position`. |
| REQ03 | Cấu trúc chuẩn | `Action Board → Package tree → Category → Action`; `CATE` và `ACT` vẫn có node cha kỹ thuật để đáp ứng quan hệ dữ liệu. |
| REQ04 | Cây mặc định | Board chưa tồn tại hoặc chưa có Package thì tạo cây mặc định đúng Action Board type. |
| REQ05 | Node mới | Tất cả node mới có `status = 1`; thời gian tạo/cập nhật và thứ tự mặc định do hệ thống sinh. |
| REQ06 | Sắp xếp | Chỉ sắp xếp các node cùng parent trong một request; thứ tự lưu bắt đầu từ `1` theo đúng danh sách ID gửi lên. |
| REQ07 | Xóa mềm | Xóa Package, Category, Action là xóa mềm `status = 2`; dữ liệu đã xóa không xuất hiện trong cây thông thường. |
| REQ08 | Tắt Package | Tắt Package (`status = 0`) không xóa cấu trúc hay kết quả đã có; có thể bật lại. |
| REQ09 | Toàn vẹn tham chiếu | Category tham chiếu một Package tồn tại; Action tham chiếu một Category tồn tại; Item kết quả tham chiếu đúng đối tượng theo Item type. |
| REQ10 | Phạm vi dữ liệu | Định nghĩa board dùng chung theo `object_id`; Item kết quả độc lập theo `owner_id`. |
| REQ11 | Một Item cho mỗi Action/owner | Mỗi Action và owner chỉ có tối đa một Item kết quả đang hoạt động cho cùng Item type. |
| REQ12 | Ghép Item theo owner | Khi có `owner_id`, API Category tree ghép đúng Item của owner vào Action và không lộ Item của owner khác. |
| REQ13 | Control theo loại Action | `Kiểm tra` chỉ cập nhật đúng/sai; `Đánh giá` chỉ chọn một mức hợp lệ; `Deadline`, `Xác thực`, `Log` hiển thị đúng field quy định; loại còn lại hiển thị đúng control nội dung tương ứng. |
| REQ14 | Tiến độ | Tiến độ chỉ tính từ Action `Kiểm tra`, `Đánh giá`, `Task tiến trình`; Action không có kết quả đóng góp `0`. |
| REQ15 | Quy đổi đánh giá | `Tốt = 1`, `Ổn = 0.75`, `Trung bình = 0.5`, `Chưa Tốt = 0.25`, `Tệ = 0`. |
| REQ16 | Tính lại tiến độ | Khi cập nhật `check` hoặc `evaluate`, backend tính lại và lưu `progress` của Package chứa Action. |
| REQ17 | Thứ tự tải cây | Package, Category, Action sắp xếp tăng dần theo `order`, sau đó theo `created_at`. |
| REQ18 | Chế độ DEFINE_ITEM | Chỉ chế độ này thấy và dùng control tạo/sửa/xóa/reorder/toggle nội dung định nghĩa, sửa tên/mô tả, đổi loại Action, quản lý file `Hướng dẫn`, URL/Media, xem lịch sử; không được cập nhật Item kết quả của người sở hữu. |
| REQ19 | Chế độ UPDATE_RESULT | Chỉ thay đổi Item của đúng `owner_id` trong phạm vi được phân công; cập nhật `Kiểm tra`, `Đánh giá`, tag Category, ghi chú kết quả chung, file kết quả `Nhận xét`, dữ liệu Task FE hỗ trợ; không sửa cấu trúc board. |
| REQ20 | Xác thực và phân quyền API | Tất cả API Action Board, Package, Category, Action, Item yêu cầu phiên đăng nhập hợp lệ; backend kiểm tra quyền và phạm vi dữ liệu, không chỉ dựa vào việc FE ẩn control. |
| REQ21 | Tạo board đồng thời | Không tạo nhiều board hoạt động cho cùng `ab_type + board_position + object_id` khi có request đồng thời. |
| REQ22 | Tạo Item đồng thời | Không tạo nhiều Item hoạt động cho cùng `object_id + owner_id + type` khi có request đồng thời. |
| REQ23 | Trim title | Title được trim để kiểm tra rỗng; việc lưu title đã trim hay giữ chuỗi gốc phải thống nhất giữa FE và BE. |
| REQ24 | Không giữ dữ liệu optimistic sai | Cập nhật thất bại thì UI không tiếp tục hiển thị dữ liệu optimistic khác với dữ liệu đã lưu. |
| REQ25 | Log | Ghi log tối thiểu cho chọn Package; tạo/sửa/xóa Package, Category, Action; cập nhật Item; thời lượng xem video lớn hơn 0 giây. |
| REQ26 | Hiệu năng cây | Main tree không phân trang; phải tải được toàn bộ cây trong giới hạn hiệu năng được xác nhận. |
| REQ27 | Dropdown loại Action | Hiển thị đúng danh sách loại được phép theo vị trí/Role, gồm `Deadline`, `Xác thực`, `Log` khi không bị giới hạn; đánh dấu loại hiện tại; cập nhật nội dung chuyên biệt sau khi đổi loại thành công. |
| REQ28 | Mở/đóng | Trạng thái mở/đóng của Category và Action chỉ điều khiển phần chi tiết; không làm đổi dữ liệu hay thứ tự node. |
| REQ29 | Upload file Action | Upload ngay; chỉ thêm kết quả có File ID sau khi upload thành công; không thêm trùng tên trong cùng upload box. |
| REQ30 | Extension Hướng dẫn | Action `Hướng dẫn` chấp nhận đúng `png`, `jpg`, `jpeg`, `gif`, `webp`, `mp4`, `mov`, `pptx`, `docx`, `pdf`, `xlsx`, `xls`, `txt`, `svg`. |
| REQ31 | Extension Media | Action `Media` cho nhập URL hoặc upload đúng `png`, `jpg`, `jpeg`, `gif`, `webp`, `mp4`, `mov`; kết quả hợp lệ hiển thị preview ảnh, video hoặc YouTube. |
| REQ32 | Quyền sửa định nghĩa Action | Chỉ người có quyền định nghĩa được sửa mô tả, upload/xóa file định nghĩa và đổi URL/Media của Action. |
| REQ33 | Lưu ba loại mới | Hỗ trợ lưu, tải, hiển thị `Deadline`, `Xác thực`, `Log`; loại đã chọn không đổi sau khi tải lại trang. |
| REQ34 | Hiển thị Deadline | Khi mở rộng hiển thị control deadline, thời gian hoàn thành, mô tả; giá trị rỗng lần lượt hiển thị `Chưa đặt deadline`, `Chưa chọn thời gian hoàn thành`, `Nhập mô tả`. |
| REQ35 | Hiển thị Xác thực | Checkbox trước tên Action; khi mở rộng hiển thị thời gian, người gán, mô tả; giá trị rỗng lần lượt `Chưa chọn thời gian`, `Chưa chọn người gán`, `Nhập mô tả`. |
| REQ36 | Hiển thị Log | Khi mở rộng hiển thị thời gian và mô tả; giá trị rỗng lần lượt `Chưa chọn thời gian`, `Nhập mô tả`. |
| REQ37 | Đổi loại Action | FE loại bỏ control không thuộc loại mới khỏi UI nhưng không tự ghi đè dữ liệu đã lưu ngoài payload cập nhật được xác nhận. |
| REQ38 | Chế độ COMMENT_ONLY | Chỉ nhập nội dung trên `Task nhập liệu` và `Task tiến trình` (ghi chú, nộp file, checklist theo control của từng Task); không cập nhật `Kiểm tra`/`Đánh giá`, ghi chú kết quả chung hay file kết quả `Nhận xét`. |
| REQ39 | Chế độ READ_ONLY | Không được thay đổi bất kỳ dữ liệu nào; theo FE hiện tại, nội dung riêng của `Task nhập liệu` và `Task tiến trình` không được render. |
| REQ40 | Toast CRUD | Mỗi thao tác thay đổi dữ liệu chỉ có một Toast đúng loại (`Thành Công`, `Thông Báo`, `Cảnh Báo`, `Có Lỗi Xảy Ra`); chỉ hiện sau khi backend xác nhận; không báo thành công sớm; không nhân đôi Toast; không lộ lỗi kỹ thuật; đóng Toast không hoàn tác dữ liệu. |

### 2.4. Ràng buộc

#### Quyền

| Chế độ quyền | Xem board | Tạo/sửa/xóa/sắp xếp/bật tắt cấu trúc | Đổi loại Action, file Hướng dẫn, Media | Cập nhật Kiểm tra / Đánh giá / Nhận xét | Nhập Task nhập liệu / Task tiến trình |
|---|:---:|:---:|:---:|:---:|:---:|
| Định nghĩa nội dung (`DEFINE_ITEM`) | ✅ | ✅ | ✅ | ❌ | ❌ |
| Cập nhật kết quả (`UPDATE_RESULT`) | ✅ | ❌ | ❌ | ✅ | ✅ |
| Chỉ bình luận (`COMMENT_ONLY`) | ✅ | ❌ | ❌ | ❌ | ✅ |
| Chỉ xem (`READ_ONLY`) | ✅ | ❌ | ❌ | ❌ | ❌ |
| Không có quyền | ❌ | ❌ | ❌ | ❌ | ❌ |

#### Ràng buộc khác

- `DEFINE_ITEM` còn được sửa tên/mô tả, xem lịch sử thay đổi; không được cập nhật tag kết quả, ghi chú kết quả hay dữ liệu Task của người sở hữu.
- `UPDATE_RESULT` còn được cập nhật tag kết quả của Category và ghi chú kết quả chung; chỉ một số dữ liệu Task.
- `READ_ONLY` xem cấu trúc, mô tả, tài liệu, Media và kết quả đã có; không thấy phần nội dung riêng của hai loại Task.
- `COMMENT_ONLY` là tên chế độ quyền trong FE, không phải quyền dành cho Action `Nhận xét` và cũng không phải quyền ghi chú chung trên mọi Action.
- Mapping role và vị trí → chế độ quyền theo FE hiện tại:
  - Người được đào tạo: Bàn giao nghiệp vụ, Bàn giao tài khoản, Bàn giao tài liệu, Nhật ký công việc → `DEFINE_ITEM`; Onboarding của ứng viên, Tài liệu đào tạo của ứng viên → `READ_ONLY`; các vị trí còn lại → `COMMENT_ONLY`.
  - Người phỏng vấn, Người đào tạo: Nhật ký công việc của người đào tạo, Tài liệu đào tạo của ứng viên → `READ_ONLY`; các vị trí còn lại → `UPDATE_RESULT`.
  - Ứng viên, Người phụ trách, Master, Quản lý, Quản lý văn phòng: Nhật ký công việc, các màn hình bàn giao, tài liệu/quy trình/đầu ra đào tạo của ứng viên → `READ_ONLY`; Gmail Inbox → `COMMENT_ONLY`; đánh giá/thử việc sau đào tạo của ứng viên, ghi chú ứng viên, ghi chú phỏng vấn, tiêu chuẩn ứng viên, onboarding ứng viên → `UPDATE_RESULT`; các vị trí còn lại → `DEFINE_ITEM`.
  - Người dùng không có role: mọi vị trí → không có quyền.
- Bảng trên là logic phân quyền FE hiện tại. Backend mới kiểm tra token ở phần lớn endpoint và chưa áp ma trận role/phạm vi; REQ20 yêu cầu backend là lớp thực thi quyền cuối cùng.
- Board định nghĩa thuộc phạm vi `object_id` và vị trí nghiệp vụ; với luồng tuyển dụng/đào tạo, `object_id` thường là Job ID. Kết quả thuộc `owner_id`; với màn hình ứng viên/người được đào tạo, `owner_id` là Candidate ID.
- Người xem board của một owner chỉ nhận Item kết quả của owner đó; chỉ cập nhật Item của owner trong phạm vi được phân công; không được đổi `owner_id` bằng request trực tiếp.
- Không cho phép truy cập hoặc thực hiện hành động bị đánh dấu `❌`, kể cả khi gọi trực tiếp bằng URL hoặc request.
- API:
  - `POST /action-board/get-or-create-action-board` (lấy hoặc tạo board); `PATCH /action-board/update-action-board` (cập nhật board).
  - `GET /packages/get-package-tree/{parent_id}`; `POST /packages/create-package-tree`; `PATCH /packages/update-package/{package_id}` (cập nhật/xóa mềm/bật tắt); `PATCH /packages/reorder-packages`.
  - `GET /categories/get-category-tree` (Category tree và Action); `POST /categories/create-category`; `PATCH /categories/update-category/{category_id}`; `PATCH /categories/reorder-categories`.
  - `POST /actions/create-action`; `PATCH /actions/update-action/{action_id}`; `PATCH /actions/reorder-actions`.
  - `GET /items/get-or-create-item`; `POST /items/create-item`; `PATCH /items/update-item/{item_id}`; `POST /items/create-task`, `POST /items/update-task`; `POST /items/add-check`, `POST /items/update-check`.

---

## 3. Testcase

### Feature: Action Board

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Mở Action Board đã có và lần đầu | High | Flow 1 / REQ01 / REQ04 | Người có quyền xem | Có một vị trí đã có board và một vị trí chưa có board | **Given:** Người dùng mở lần lượt hai vị trí<br>**When:** Màn hình tải xong<br>**Then:** Hiển thị cấu trúc board | - Board đã có: đúng Package, Category, Action theo thứ tự đã lưu, Package đầu tiên được chọn, không tạo thêm nội dung trùng<br>- Board chưa có: cấu trúc mặc định theo vị trí, đủ Role cần thiết<br>- Thành công không có notification |
| Case 2: Không khởi tạo được board | High | EX01–EX03 / EX06 / EX13 / REQ02 | Người có quyền truy cập | Cấu hình type/vị trí không hợp lệ hoặc mạng lỗi | **Given:** Type không hỗ trợ, không khớp vị trí, chưa mapping hoặc lỗi mạng<br>**When:** Người dùng mở board<br>**Then:** Hệ thống từ chối tải | - Hiển thị thông báo lỗi (lỗi mạng bắt đầu bằng `Lỗi mạng:`)<br>- Không tạo board/Package<br>- Không hiển thị cấu trúc dở dang để thao tác |
| Case 3: Hiển thị đúng bố cục theo type | High | UI / REQ03 / EX15 | Người có quyền xem | Có board của các type đã triển khai, `ACT`, `PACK_3SUBS` và board rỗng | **Given:** Người dùng mở lần lượt các bố cục<br>**When:** Chọn một mục trong cây bên phải<br>**Then:** Nội dung tương ứng hiển thị bên trái | - Đúng số cấp theo type<br>- `ACT` và `PACK_3SUBS` hiển thị placeholder<br>- Board rỗng hiển thị `Không có dữ liệu`, không tự chọn phần tử không tồn tại |
| Case 4: Tạo và sửa Package | High | Flow 2 / Flow 3 / EX04 / EX05 / EX07 / REQ05 | Định nghĩa nội dung | Layout cho phép thêm Package | **Given:** Người dùng nhập tên hợp lệ, rồi tên trống<br>**When:** Submit; sau đó sửa tên và mô tả<br>**Then:** Hệ thống tạo/sửa hoặc chặn | - Tên hợp lệ: Package xuất hiện đúng cấp, `status = 1`, `Tạo thành công`<br>- Sửa: `Cập nhật thành công`, giữ sau khi tải lại<br>- Tên trống: `Vui lòng nhập tên package`, không gửi request |
| Case 5: Bật/tắt, xóa và sắp xếp | High | Flow 6 / REQ06 / REQ07 / REQ08 / REQ17 | Định nghĩa nội dung | Có nhiều Package/Category/Action cùng cấp | **Given:** Người dùng tắt rồi bật Package, kéo thả node cùng cấp, xác nhận xóa<br>**When:** Hoàn tất từng thao tác và tải lại<br>**Then:** Trạng thái và thứ tự được lưu | - Tắt/bật không mất nội dung hay kết quả<br>- Thứ tự mới giữ sau khi tải lại, đánh số từ `1`<br>- Đã xóa (`status = 2`) không còn hiện<br>- Toast `Xóa thành công` / `Đổi vị trí thành công` |
| Case 6: Tạo, sửa, xóa Category và Action | High | Flow 4 / EX08 / EX09 / REQ09 | Định nghĩa nội dung | Đã chọn một Package | **Given:** Người dùng tạo Category, tạo Action, nhập tên trống, sửa rồi xóa<br>**When:** Thực hiện từng thao tác<br>**Then:** Dữ liệu thay đổi đúng nơi | - Category/Action xuất hiện trong đúng cha, Action có loại mặc định phù hợp<br>- Tên Category trống: không tạo, không notification; tên Action trống: `Vui lòng nhập tên action`<br>- Sửa giữ sau tải lại; xóa không ảnh hưởng mục khác |
| Case 7: Loại Action theo vị trí và đổi loại | High | Trang 4 / REQ27 / REQ37 | Định nghĩa nội dung | Có board `Các vòng phỏng vấn`, `Review` và vị trí không giới hạn | **Given:** Người dùng mở dropdown loại Action ở từng vị trí<br>**When:** Chọn loại khác rồi tải lại<br>**Then:** Loại và nội dung đổi theo | - Câu hỏi phỏng vấn chỉ `Kiểm tra`, Đánh giá chỉ `Đánh giá`; `Review` mặc định `Đánh giá`, không dropdown<br>- Vị trí khác có đủ 10 loại, loại hiện tại được đánh dấu<br>- Control loại cũ biến mất, loại đã chọn giữ sau tải lại |
| Case 8: Nội dung Deadline, Xác thực, Log | High | REQ13 / REQ28 / REQ33–REQ36 | Có quyền xem | Có Action ba loại mới, giá trị rỗng và đã lưu | **Given:** Người dùng mở rộng từng Action<br>**When:** Mở/đóng và tải lại<br>**Then:** Hiển thị đúng control | - Giá trị rỗng hiển thị đúng chữ `Chưa đặt deadline`, `Chưa chọn thời gian hoàn thành`, `Chưa chọn thời gian`, `Chưa chọn người gán`, `Nhập mô tả`<br>- Checkbox Xác thực phản ánh giá trị đã lưu<br>- Mở/đóng không đổi dữ liệu hay thứ tự |
| Case 9: File Hướng dẫn | High | EX16 / EX17 / REQ29 / REQ30 / REQ32 | Định nghĩa nội dung | Action `Hướng dẫn` đang mở | **Given:** Upload file hợp lệ, file sai extension, file trùng tên, file upload lỗi, rồi xóa file<br>**When:** Thực hiện từng lần<br>**Then:** Danh sách file thay đổi đúng | - File hợp lệ xuất hiện<br>- Sai extension: `"{tên file}" không hợp lệ. Chỉ chấp nhận: {danh sách extension}`<br>- Trùng tên không thêm; upload lỗi hiển thị `Upload thất bại`, không vào `files`<br>- File đã xóa không còn hiện |
| Case 10: Media | High | EX18 / REQ31 / REQ32 | Định nghĩa nội dung | Action `Media` đang mở | **Given:** Nhập URL ảnh/video/YouTube, upload file, nhập nguồn không tải được, rồi xóa Media<br>**When:** Enter hoặc chọn file<br>**Then:** Hệ thống lưu và preview | - Nguồn hợp lệ preview đúng ảnh/video/YouTube, upload lưu File ID vào URL<br>- Không tải được: khung lỗi + thử lại, giá trị đã lưu không bị xóa<br>- Xóa đưa Action về chưa có Media |
| Case 11: Cập nhật Kiểm tra, Đánh giá và tiến độ | High | Flow 5 / REQ13–REQ16 | Cập nhật kết quả | Mở board của học viên A | **Given:** Người dùng tick `Kiểm tra` và chọn từng mức `Đánh giá`<br>**When:** Lưu<br>**Then:** Kết quả lưu và tiến độ tính lại | - Kết quả hiển thị lại đúng khi mở lại<br>- Tiến độ Package theo trọng số `Tốt = 100%` … `Tệ = 0%`, chỉ tính `Kiểm tra`, `Đánh giá`, `Task tiến trình`<br>- `Cập nhật thành công`; học viên khác không đổi |
| Case 12: Ghi chú, Task và độc lập giữa học viên | High | Flow 5 / EX10 / REQ10–REQ12 / REQ19 | Cập nhật kết quả | Có học viên A và B trên cùng board | **Given:** Người dùng nhập ghi chú (hợp lệ và trống), file `Nhận xét`, Task cho A rồi mở B<br>**When:** Lưu và chuyển học viên<br>**Then:** Mỗi học viên có kết quả riêng | - Ghi chú trống: `Vui lòng nhập ghi chú`, không gửi request<br>- B không thấy kết quả của A; cấu trúc board chung không đổi<br>- Mỗi Action/owner chỉ một Item hoạt động |
| Case 13: Category theo Tag của học viên | High | Flow 7 / REQ12 | Học viên (người sở hữu) | Có Category không tag, tag còn áp dụng, tag không còn áp dụng | **Given:** Học viên mở board của mình<br>**When:** Màn hình tải xong<br>**Then:** FE lọc Category theo Tag | - Hiển thị Category không tag và Category có tag thuộc tập Tag hiện hành<br>- Không hiển thị Category chỉ có tag không còn áp dụng |
| Case 14: Lưu thất bại không giữ thay đổi | High | EX14 / REQ24 / REQ40 | Có quyền thao tác | Request cập nhật/reorder/toggle sẽ lỗi | **Given:** Người dùng đổi trạng thái, kết quả hoặc thứ tự<br>**When:** Backend/network thất bại<br>**Then:** UI hoàn nguyên | - Toast `Có Lỗi Xảy Ra`/lỗi tương ứng, đúng một Toast<br>- Toggle/thứ tự/kết quả trở về dữ liệu server<br>- Tải lại không thấy thay đổi thất bại |
| Case 15: Toast CRUD | Medium | REQ40 | Có quyền CRUD | Thao tác thành công, cảnh báo, lỗi, đang đồng bộ | **Given:** Người dùng xác nhận thay đổi<br>**When:** Backend trả từng kết quả; bấm `×`<br>**Then:** Hiển thị Toast tương ứng | - `Thành Công`/`Cảnh Báo`/`Có Lỗi Xảy Ra`/`Thông Báo` đúng ngữ cảnh, tối đa một Toast<br>- Chỉ hiện sau khi backend xác nhận<br>- Hủy/chỉ đọc không có Toast; đóng Toast không hoàn tác dữ liệu |
| Case 16: Quyền DEFINE_ITEM và UPDATE_RESULT | High | REQ18 / REQ19 / EX11 | Định nghĩa nội dung; Cập nhật kết quả | Board có Action Kiểm tra, Đánh giá, Nhận xét, Task | **Given:** Mỗi chế độ thử cả thao tác định nghĩa và cập nhật kết quả<br>**When:** Tương tác với control<br>**Then:** Chỉ thao tác được phép thành công | - `DEFINE_ITEM`: quản lý cấu trúc, mô tả, loại, tài liệu, Media; không cập nhật Kiểm tra/Đánh giá/Nhận xét/Task<br>- `UPDATE_RESULT`: cập nhật kết quả đúng học viên; không tạo/sửa/xóa/sắp xếp cấu trúc<br>- Thao tác không có quyền: không đổi dữ liệu, `Bạn không có quyền thay đổi` ở control đã triển khai |
| Case 17: Quyền COMMENT_ONLY, READ_ONLY và không có quyền | Critical | REQ20 / REQ38 / REQ39 | Chỉ bình luận; Chỉ xem; Không có quyền; chưa đăng nhập | Board có đủ các loại Action | **Given:** Người dùng mở board và thử thay đổi dữ liệu<br>**When:** Thao tác Task, Kiểm tra, Đánh giá, Nhận xét<br>**Then:** Chỉ thao tác được phép thành công | - `COMMENT_ONLY`: chỉ ghi chú/nộp file/checklist trên hai loại Task; không sửa cấu trúc, Kiểm tra, Đánh giá, Nhận xét<br>- `READ_ONLY`: chỉ xem, không thấy nội dung riêng của hai loại Task<br>- Không có quyền hoặc chưa đăng nhập: không truy cập được; không trường hợp nào đổi được dữ liệu |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Các trang trong requirement này chưa có mã màn Figma; cần design cấp mã (theo quy ước `<HỌ>-<MODULE>-NNNNNN`) hoặc cho biết frame nằm ở file Figma nào.
- **Q02:** UI và hành vi đầy đủ của `ACT` và `PACK_3SUBS` (FE hiện chỉ hiển thị placeholder).
- **Q03:** Có tiếp tục hỗ trợ đủ cả 8 Action Board type hay loại bỏ các type chưa có vị trí nghiệp vụ sử dụng.
- **Q04:** Giới hạn độ dài, ký tự cho phép và quy tắc trùng tên của Package, Category, Action; khi tạo, lưu title đã trim hay giữ nguyên khoảng trắng đầu/cuối.
- **Q05:** Category/Action có hỗ trợ trạng thái tạm ngưng `0` hay chỉ hoạt động `1` và đã xóa `2` (repository hiện trả cả `status = 0`).
- **Q06:** Khi xóa Package/Category cha, có cần cascade xóa mềm hoặc ẩn toàn bộ node con và Item liên quan hay không.
- **Q07:** Ma trận role/vị trí ở FE có phải quyền nghiệp vụ cuối cùng hay không; đặc biệt nhóm `Ứng viên, Người phụ trách, Master, Quản lý, Quản lý văn phòng` đang dùng chung nhánh mặc định.
- **Q08:** Quy tắc xác định người được thao tác `owner_id` nào và mã lỗi chuẩn khi vượt phạm vi.
- **Q09:** Backend chưa áp RoleChecker cho phần lớn API Action Board và `POST /items/update-check` chưa yêu cầu token; cần xác nhận kế hoạch bắt buộc phân quyền tại backend.
- **Q10:** Có bổ sung unique constraint/transaction cho khóa board và Item hay chấp nhận khả năng tạo trùng khi request đồng thời.
- **Q11:** Quy tắc cascade tiến độ từ leaf Package lên các Package cha cho từng layout.
- **Q12:** Công thức tiến độ khi Action bị tắt, checklist task bị xóa, hoặc một Item có đồng thời nhiều trường `check`, `evaluate`, `task` (FE và BE hiện lọc khác nhau).
- **Q13:** Tag Category được gắn bởi role nào, tag của người sở hữu lấy từ nguồn nào, có cần backend lọc trước khi trả về thay vì chỉ lọc ở FE.
- **Q14:** SLA/số node tối đa của board vì API hiện tải toàn bộ cây, không phân trang.
- **Q15:** Chuẩn notification lỗi mạng/lỗi hệ thống; FE hiện có nhiều message tổng quát khác nhau.
- **Q16:** API lấy Action theo Package lệch contract: FE khai báo query `GET /actions/get-actions-by-package?package_id=...`, BE khai báo path `GET /actions/get-actions-by-package/{package_id}`.
- **Q17:** `ActionBoardType.fromID` ở FE fallback mọi type không khớp về `PACK_ROLES`; có đổi sang lỗi rõ ràng để tránh render sai layout không.
- **Q18:** Tạo Item kết quả hiện xảy ra ngay khi render Action có `owner_id`; chấp nhận tạo dữ liệu dù người dùng chưa thao tác hay chuyển sang tạo khi cập nhật lần đầu.
- **Q19:** Package tag trên `PackageItem` có cần hỗ trợ thật sự không; model/update API Package hiện không định nghĩa trường `tags`.
- **Q20:** Giới hạn số file, dung lượng mỗi file và tổng dung lượng cho Action `Hướng dẫn`, `Nhận xét`, `Task nhập liệu`, `Media` (UI hiện không truyền).
- **Q21:** Định dạng URL Media được chấp nhận ngoài ảnh/video/YouTube, quy tắc URL an toàn và notification khi URL không hợp lệ.
- **Q22:** Thứ tự chính thức và icon của `Deadline`, `Xác thực`, `Log` trong dropdown loại Action.
- **Q23:** Tên enum/API và cấu trúc dữ liệu lưu `deadline`, `thời gian hoàn thành`, `thời gian`, `người gán`, trạng thái `xác thực`.
- **Q24:** Các field thời gian của ba loại mới lưu ngày, giờ hay cả ngày giờ; timezone, format hiển thị và quy tắc so sánh deadline với thời gian hoàn thành.
- **Q25:** Field của `Deadline`, `Xác thực`, `Log` có bắt buộc không; validation, thông báo lỗi và role nào được tạo/sửa/xóa từng giá trị.
- **Q26:** `Người gán` của Action `Xác thực` chọn từ tập người dùng nào, có chọn nhiều người không, xử lý thế nào khi tài khoản ngừng hoạt động.
- **Q27:** Checkbox `Xác thực` và các giá trị thời gian/người gán lưu ở định nghĩa Action dùng chung hay Item kết quả độc lập theo `owner_id`.
- **Q28:** Ba loại mới có tham gia tính tiến độ Package không; nếu có, công thức và thời điểm tính lại.
- **Q29:** Khi đổi từ một loại Action mới sang loại khác, dữ liệu chuyên biệt của loại cũ được giữ lại để khôi phục hay xóa khỏi backend.
