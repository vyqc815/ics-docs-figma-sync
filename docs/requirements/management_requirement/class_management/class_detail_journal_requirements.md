# Chi tiết lớp học — Menu Nhật ký

## 1. UI

### Trang 1: ADM-LOP-050100 — Lớp học / Nhật ký / Nhật ký

![Trang 1](./images/adm-lop-050100.png)

**Mô tả:**
- Chọn menu `Nhật Ký` trong Chi tiết lớp để xem nhật ký của chính lớp đang mở. Tab `Nhật Ký` được làm nổi bật (các tab còn lại `Ghi Chú`, `Lịch Hẹn`, `Tin Nhắn` được đặc tả riêng); tiêu đề bảng là `Danh sách nhật ký`.
- Chỉ `Admin`, `Class Handler` và `Support` có quyền trên lớp được xem menu; các role khác không được xem, kể cả gọi request trực tiếp.
- Danh sách gồm nhật ký được hệ thống tự ghi và nhật ký do người dùng tạo. `Class Handler` và `Support` được tạo nhật ký trong phạm vi lớp được phân quyền; chỉ người tạo được sửa/xóa nhật ký của mình.

**Điểm cần lưu ý:**
- `A01.01` Tiêu đề: tiêu đề của từng nhật ký, hiển thị ở cột `TIÊU ĐỀ`.
- `A01.02` Mô tả: nội dung nhật ký không bắt buộc; khi rỗng hiển thị chữ `Trống`. Không giới hạn ký tự; nội dung dài hỗ trợ xuống dòng. Tên người thực hiện, học viên và mã lớp trong log hệ thống phải đúng dữ liệu của action đã lưu.
- `A01.03` Giờ log: giờ tạo nếu chưa sửa; sau khi sửa thành công hiển thị giờ sửa gần nhất. Trình bày giờ/phút và AM/PM theo UI.
- `A01.04` Ngày log: ngày tạo nếu chưa sửa; sau khi sửa thành công hiển thị ngày sửa gần nhất, định dạng `dd.MM.yyyy`. Ngày và giờ cùng lấy từ thời điểm log đang hiển thị và cùng múi giờ nghiệp vụ.
- `A01.05` Đối tượng: với nhật ký viết tay là avatar và tên người tạo; với log tự động là icon hệ thống và nhãn `Hệ thống`, kể cả khi action do một user thực hiện.
- `A01.06` Mở rộng / Thu gọn: khi mô tả có phần chi tiết dài, cho mở rộng để đọc và `Thu gọn` để thu lại tại cùng dòng; chỉ thay đổi cách hiển thị, không thay đổi dữ liệu.
- `A01.07` Thao tác sửa: bấm dòng nhật ký viết tay của chính mình để sửa trực tiếp ngay tại dòng, nhấn Enter hoặc đưa chuột ra ngoài vùng chỉnh sửa của dòng để lưu; tài khoản phải có role `Class Handler` hoặc `Support` và quyền trên lớp. Không cho sửa dòng của người khác hoặc Hệ thống.
- `A01.08` Icon thùng rác: chỉ hiển thị/cho thao tác trên nhật ký viết tay do chính mình tạo và còn quyền `Class Handler` hoặc `Support`. Bấm mở popup xác nhận xóa, chưa xóa ngay.
- `A01.09` Khu vực Thêm nhật ký: nhập `Tiêu đề` trước, sau đó nhập `Nội dung` trực tiếp tại khu vực cuối bảng rồi xác nhận lưu bằng `+`; không mở popup tạo nhật ký. Không cho chọn tài khoản khác hoặc `Hệ thống` làm người tạo.
- Không đưa nhật ký của lớp khác vào danh sách; chuyển lớp phải đổi dữ liệu theo đúng lớp mới. Xác định người tạo bằng tài khoản nội bộ, không so sánh tên hiển thị (hai tài khoản trùng tên vẫn là hai người khác nhau).
- Các dòng mẫu `Bạn Làm Bài Đầy Đủ`, `Flow Hằng Ngày`, `Chăm Sóc Lớp`, `Đổi Trạng Thái`, `Thêm Tag Thẻ` không xác lập thêm action tự ghi log. Nội dung dạng checklist trong dòng `Flow Hằng Ngày` chưa được xác định là thành phần tương tác; không tự thêm nghiệp vụ tick/hoàn thành.
- Loading, lỗi tải và danh sách rỗng phải phân biệt rõ; có thể thử lại khi tải lỗi. Không hiển thị dữ liệu lớp cũ như dữ liệu lớp mới.
- `A02.01` Tìm kiếm: tìm trong nhật ký của lớp hiện tại; dùng placeholder `Tìm kiếm nhật ký` (không dùng `Tìm kiếm lớp học`). Chỉ search theo **Tiêu đề**, không search Mô tả, tên user hay tên hóa đơn. Nhấn **Enter** để search ngay hoặc tự search sau **2 giây kể từ lần nhập cuối**; mỗi lần nhập tiếp tính lại 2 giây; Enter hủy lần đang chờ và không gửi lặp cùng truy vấn. Xóa từ khóa chỉ bỏ điều kiện search, giữ các filter còn lại.
- `A02.02` Filter Đối tượng: các lựa chọn là **tên user** và **Hệ thống**, không phải tên role hay tên học viên được nhắc trong mô tả. Danh sách user chỉ lấy những người đã viết nhật ký của **lớp hiện tại**, mỗi user một lựa chọn theo ID. Ví dụ log `A đã thêm học viên B vào lớp C` do hệ thống ghi: filter `Hệ thống` trả dòng này, filter user A không trả; nhật ký A viết tay vẫn thuộc A dù mô tả nhắc B.
- `A02.03` Filter Thời gian: mặc định `Hôm nay`, dùng cùng danh sách khoảng thời gian và quy tắc ngày như filter tab Ghi chú. Lọc theo thời điểm log đang hiển thị (thời điểm tạo nếu chưa sửa, thời điểm sửa gần nhất nếu đã sửa thành công). Mỗi lần chọn một khoảng.
- `A02.04` Kết hợp điều kiện: kết quả đồng thời thỏa search, Đối tượng và Thời gian; luôn giới hạn trong lớp hiện tại. Không có kết quả thì hiển thị rỗng theo điều kiện đang chọn. Đổi điều kiện chỉ cho response của tổ hợp mới nhất cập nhật danh sách.
- `A02.05` Bỏ điều kiện: bỏ filter nào chỉ bỏ điều kiện đó, không xóa search hoặc filter khác.
- `A02.06` `Tới hạn`: từ thời điểm bắt đầu lưu dữ liệu của hệ thống đến hết ngày hôm nay (không phải hạn học phí).
- `A02.07` `Hôm nay`: từ đầu ngày đến hết ngày hôm nay; mặc định.
- `A02.08` `Hôm qua`: toàn bộ ngày liền trước hôm nay.
- `A02.09` `Hôm nay và hôm qua`: hợp của toàn bộ ngày hôm qua và hôm nay.
- `A02.10` `Tuần này`: từ đầu Thứ 2 đến hết Chủ Nhật của tuần hiện tại.
- `A02.11` `Tuần trước`: từ đầu Thứ 2 đến hết Chủ Nhật của tuần liền trước.
- `A02.12` `Tháng này`: từ ngày đầu đến ngày cuối của tháng hiện tại.
- `A02.13` `Tháng trước`: từ ngày đầu đến ngày cuối của tháng liền trước.
- `A02.14` `3 tháng trước`: từ đầu ngày cách ngày hiện tại ba tháng đến thời điểm hiện tại.
- `A02.15` `Năm nay`: từ 01/01 đến 31/12 của năm hiện tại.
- `A02.16` `Năm trước`: từ 01/01 đến 31/12 của năm liền trước.
- `A02.17` `Tùy chọn`: chọn `Từ ngày` và `Đến ngày`; bao gồm toàn bộ hai ngày biên. Không áp dụng nếu thiếu ngày hoặc Từ ngày sau Đến ngày.
- `A03.01` Thêm nhật ký / `+`: nhập Tiêu đề trước, sau đó nhập Nội dung trực tiếp tại cuối bảng rồi xác nhận lưu bằng `+`; không mở popup. Chưa lưu nhật ký chỉ vì hoàn tất bước nhập Tiêu đề. Trong lúc lưu chặn gửi lặp; thành công thì reset khu vực nhập về bước Tiêu đề, thất bại giữ cả Tiêu đề/Nội dung để thử lại.
- `A03.02` Tiêu đề: nhập trước, bắt buộc, không giới hạn ký tự. Không chấp nhận rỗng/chỉ chứa khoảng trắng; báo lỗi tại ô nhập, không tạo dòng rỗng.
- `A03.03` Nội dung: nhập sau Tiêu đề, **không bắt buộc**, không giới hạn ký tự; được bỏ trống khi tạo hoặc xóa hết khi sửa; rỗng/chỉ có khoảng trắng hiển thị `Trống`. Nội dung hiển thị an toàn, không thực thi HTML/script.
- `A03.04` Người tạo / Đối tượng: tự lấy tài khoản đang đăng nhập khi tạo; không có field để giả lập người khác hay nguồn Hệ thống. Không tin thông tin người tạo do client gửi.
- `A03.05` Ngày / Giờ log: khi tạo lấy thời điểm tạo thành công; mỗi lần sửa thành công cập nhật theo thời điểm sửa gần nhất. Do hệ thống ghi, không nhập tùy ý; lưu lỗi không thay đổi ngày/giờ đã lưu. Filter Thời gian và Follow dùng cùng thời điểm này.
- `A03.06` Sửa: bấm dòng của mình để sửa Tiêu đề/Nội dung **trực tiếp tại dòng**, không mở editor/popup riêng. **Enter** hoặc **đưa chuột ra ngoài vùng chỉnh sửa của dòng** sẽ lưu (chỉ một lần nếu hai sự kiện xảy ra liên tiếp). Di chuyển chuột giữa ô Tiêu đề và Nội dung trong vùng sửa chưa lưu. Chưa thay đổi dữ liệu thì chỉ thoát chế độ sửa, không cập nhật, không đổi thời điểm log, không Toast. Tiêu đề không hợp lệ hoặc lưu lỗi giữ phần đã nhập tại dòng. Không được thay người tạo hoặc chuyển nhật ký sang lớp khác; mất role/quyền sau khi mở form thì backend từ chối lúc lưu.
- `A03.07` Xóa: bấm icon thùng rác mở popup xác nhận; chỉ gửi yêu cầu khi chọn Xác Nhận. Xóa nhật ký không hoàn tác thêm học viên hay giao dịch tiền. Follow của Danh sách lớp phản ánh dữ liệu còn hợp lệ sau khi sửa/xóa.
- `A03.08` Chưa lưu / Hủy: Tiêu đề/Nội dung chưa xác nhận lưu không tạo nhật ký, kể cả khi đã chuyển từ bước Tiêu đề sang Nội dung. Hủy/Đóng popup xóa không lưu thay đổi và không có Toast thành công. Sửa trực tiếp không có nút Lưu/Hủy riêng.
- `A04.01` Popup xác nhận xóa: nội dung `Bạn có chắc muốn xóa nhật ký này?`; có thể hiển thị Tiêu đề nhật ký đang chọn. Không mở popup cho log Hệ thống hoặc nhật ký người khác.
- `A04.02` Hủy / Đóng: đóng popup, giữ nguyên nhật ký, không gửi request xóa.
- `A04.03` Xác Nhận: gửi yêu cầu xóa đúng nhật ký sau khi backend kiểm tra lại quyền; chặn bấm lặp trong lúc xử lý. Xóa thất bại giữ nguyên dòng và báo lỗi; không xóa trước khi backend thành công.
- `A05.01` Log thêm học viên vào lớp: ghi sau khi thêm học viên thành công (không áp dụng cho thêm Giáo viên, Support, Class Handler). Tiêu đề `Thêm Học Viên`; mô tả nêu người thực hiện, học viên được thêm và lớp; Đối tượng luôn là `Hệ thống`. Ví dụ `Thuy SP đã thêm học viên Thanh Thảo vào lớp NS0001`. Thêm theo nhiều lựa chọn: mỗi học viên thực sự được thêm là một sự kiện; không log cho học viên đã có trong lớp hoặc thêm thất bại.
- `A05.02` Log đóng tiền: ghi sau khi ghi nhận một lần đóng học phí thành công cho học viên trong lớp; không ghi chỉ vì mở popup, nhập tiền hoặc tạo hóa đơn chưa dùng cho lớp. Tiêu đề `Thêm Học Phí`; mô tả nêu người thực hiện, học viên, lớp, **tên hóa đơn** và **số tiền của lần đóng này**; Đối tượng luôn là `Hệ thống` (dù mẫu trong ảnh hiển thị tên user). Ví dụ `Thuy SP đã ghi nhận 100.000 đ cho học viên Hoài Nam trong lớp NS0001 từ hóa đơn Học phí tháng 9`; số tiền là giá trị của lần đóng đã lưu, không phải tổng hóa đơn hay số dư; định dạng VND dấu chấm ngăn hàng nghìn và ký hiệu `đ`. Hai hóa đơn trùng tên liên kết bằng ID.
- `A05.03` Người thực hiện: tài khoản thực sự thực hiện action nghiệp vụ, nêu trong mô tả; không đồng nhất với cột Đối tượng (nguồn log vẫn là Hệ thống).
- `A05.04` Ngày / Giờ log: tự ghi thời điểm action được lưu thành công, không dùng thời điểm mở popup, hạn học phí hay ngày bắt đầu lớp. Mỗi action thành công tạo đúng một log; retry/callback lặp không tạo thêm; hai lần đóng tiền riêng biệt có hai log. Log Hệ thống chỉ đọc; chỉ ghi hai action đã chốt, không tự ghi thêm Follow, đổi trạng thái, thêm tag...; không tạo thêm Toast độc lập.
- `A06.01` Toast `Thành Công`: backend xác nhận tạo/sửa/xóa thành công.
- `A06.02` Toast `Thông Báo`: chỉ dùng nếu flow có trạng thái tiếp nhận nhưng chưa đồng bộ xong.
- `A06.03` Toast `Cảnh Báo`: nếu flow có Toast validation; vẫn đánh dấu lỗi tại field tương ứng.
- `A06.04` Toast `Có Lỗi Xảy Ra`: thao tác không hoàn tất hoặc bị từ chối; không hiển thị thành công.
- `A06.05` Tạo thành công: `Đã thêm nhật ký.`
- `A06.06` Sửa thành công: `Đã cập nhật nhật ký.`
- `A06.07` Xóa thành công: `Đã xóa nhật ký.`
- `A06.08` Tạo thất bại: `Không thể thêm nhật ký. Vui lòng thử lại.`
- `A06.09` Sửa thất bại: `Không thể cập nhật nhật ký. Vui lòng thử lại.`
- `A06.10` Xóa thất bại: `Không thể xóa nhật ký. Vui lòng thử lại.`
- `A06.11` Thiếu quyền: `Bạn không có quyền thực hiện thao tác này.`
- `A06.12` Tiêu đề thiếu/không hợp lệ: `Vui lòng nhập tiêu đề nhật ký.`; đánh dấu lỗi tại ô Tiêu đề, không gửi/lưu dữ liệu sai.
- `A06.13` Đang đồng bộ nếu flow có trạng thái này: `Nhật ký đang được đồng bộ. Vui lòng chờ.` Mỗi thao tác chỉ một Toast kết quả, nút `×` đóng Toast; đọc danh sách, search/filter, mở rộng/thu gọn không có Toast CRUD; không đưa token, stack trace vào nội dung.

![Toast CRUD](../../images/01-toast-crud.png)

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1: Xem nhật ký**

```
Người dùng có quyền xem lớp mở Chi tiết lớp → Nhật Ký
      → Kiểm tra quyền xem menu Nhật ký
      → Tải nhật ký của lớp hiện tại
      → Hiển thị tiêu đề, mô tả, giờ log, ngày log và đối tượng
      → Nhật ký viết tay hiển thị người tạo; log tự động hiển thị Hệ thống
      → Chỉ chủ sở hữu có Class Handler/Support và quyền trên lớp được sửa/xóa nhật ký viết tay
```

**Flow 2: Search/filter**

```
Người dùng nhập search, chọn tên user/Hệ thống và điều kiện Thời gian
      → Search chỉ theo Tiêu đề: Enter thực hiện ngay hoặc tự chạy sau 2 giây từ lần nhập cuối
      → Áp dụng đồng thời các điều kiện trên nhật ký lớp hiện tại
      → Lọc Đối tượng theo người tạo hoặc nguồn Hệ thống, không theo user nhắc trong mô tả
      → Hiển thị kết quả hoặc trạng thái không có kết quả
```

**Flow 3: Tạo nhật ký viết tay**

```
Class Handler hoặc Support có quyền trên lớp chọn Thêm nhật ký / +
      → Nhập Tiêu đề trước, sau đó nhập Nội dung trực tiếp; không mở popup
      → Xác nhận lưu cuối bằng +; kiểm tra Tiêu đề và backend kiểm tra quyền trên lớp
      → Lưu nhật ký do tài khoản đang đăng nhập tạo; tự ghi thời điểm
      → Thành công: cập nhật danh sách, một Toast Thành Công: Đã thêm nhật ký.
      → Hủy/lỗi: không tạo nhật ký; lỗi có phản hồi phù hợp
```

**Flow 4: Sửa nhật ký**

```
Người tạo có Class Handler/Support và quyền trên lớp bấm dòng nhật ký của mình để sửa
      → Chỉnh Tiêu đề/Nội dung trực tiếp tại dòng
      → Nhấn Enter hoặc đưa chuột ra ngoài vùng sửa để tự lưu một lần
      → Backend kiểm tra lại chủ sở hữu, role, lớp và nguồn viết tay
      → Thành công: cập nhật cùng nhật ký, giữ người tạo, ngày/giờ log = thời điểm sửa mới nhất
      → Hiển thị một Toast Thành Công: Đã cập nhật nhật ký.
      → Không đủ quyền/lỗi: không thay đổi dữ liệu đã lưu
```

**Flow 5: Xóa nhật ký**

```
Người tạo có Class Handler/Support và quyền trên lớp bấm xóa nhật ký của mình
      → Mở popup xác nhận; Hủy/Đóng giữ nguyên nhật ký; Xác Nhận mới gửi yêu cầu xóa
      → Backend kiểm tra lại chủ sở hữu, role, lớp và nguồn viết tay
      → Thành công: bỏ nhật ký khỏi danh sách, một Toast Thành Công: Đã xóa nhật ký.
      → Không đủ quyền/lỗi: giữ nguyên nhật ký
```

**Flow 6: Tự ghi log thêm học viên vào lớp**

```
Người dùng thực hiện thêm học viên vào lớp theo nghiệp vụ tại Tab Học viên
      → Thêm thành công: Hệ thống ghi một log cho mỗi sự kiện thực sự được lưu
      → Log nêu người thực hiện, học viên được thêm, lớp và thời điểm; Đối tượng = Hệ thống
      → Hủy/thất bại/trùng: không ghi log thêm thành công
```

**Flow 7: Tự ghi log đóng tiền**

```
Người dùng ghi nhận học phí của học viên trong lớp
      → Giao dịch thành công: Hệ thống ghi một log cho lần đóng tiền
      → Log nêu người thực hiện, học viên, lớp, tên hóa đơn, số tiền của lần đóng và thời điểm; Đối tượng = Hệ thống
      → Hủy/thất bại/chỉ tạo hóa đơn: không ghi log đã đóng tiền trong lớp
```

### 2.2. Ngoại lệ

- **EX01:** Tải danh sách lỗi hoặc response lớp cũ về muộn → báo lỗi đọc/cho thử lại, không hiển thị dữ liệu sai lớp.
- **EX02:** Sửa/xóa nhật ký người khác hoặc log Hệ thống, kể cả gửi request trực tiếp → từ chối, giữ nguyên dữ liệu.
- **EX03:** Thiếu role/phạm vi hoặc giả mạo người tạo/nguồn/lớp → backend từ chối thao tác không hợp lệ; không chỉ dựa vào ẩn control UI.
- **EX04:** Validation/lưu nhật ký thất bại → không tạo hoặc thay đổi dữ liệu sai; giữ nội dung đã nhập để sửa/thử lại khi phù hợp.
- **EX05:** Thêm học viên vào lớp/đóng tiền bị hủy, thất bại hoặc bị từ chối → không tạo log thành công.
- **EX06:** Search/filter không có kết quả → hiển thị rỗng theo điều kiện đã chọn; không reset âm thầm hay trả dữ liệu lớp khác.
- **EX07:** Khoảng Tùy chọn thiếu ngày hoặc Từ ngày sau Đến ngày → không áp dụng, giữ điều kiện cũ và báo lỗi để người dùng chỉnh lại.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Danh sách | Chỉ Admin, Class Handler và Support có quyền trên lớp được xem. Nhật ký gắn đúng lớp, hiển thị năm cột và trạng thái tải/rỗng/lỗi. Mở rộng/thu gọn chỉ ảnh hưởng trình bày. |
| REQ02 | Đối tượng | Nhật ký viết tay lấy người tạo; log tự động có nguồn Hệ thống. Người thực hiện action được nêu trong mô tả, không thay thế nguồn của log. |
| REQ03 | Search và Đối tượng | Chỉ search theo Tiêu đề trong lớp hiện tại, chạy ngay khi Enter hoặc tự chạy sau 2 giây từ lần nhập cuối; không search Mô tả. Dropdown Đối tượng chỉ lấy người đã viết nhật ký của lớp và Hệ thống, lọc user theo ID người tạo hoặc Hệ thống theo nguồn. Không lọc theo tên role hoặc người chỉ được nhắc trong mô tả. |
| REQ04 | Thời gian | Lọc theo thời điểm log đang hiển thị: thời điểm tạo nếu chưa sửa, thời điểm sửa gần nhất nếu đã sửa thành công. Mặc định Hôm nay, dùng đủ 12 khoảng thời gian như filter tab Ghi chú; Tùy chọn bao gồm toàn bộ hai ngày biên và chặn khoảng không hợp lệ. Các điều kiện filter/search kết hợp đồng thời trong cùng múi giờ nghiệp vụ. |
| REQ05 | Quyền sở hữu | Chỉ Class Handler/Support có quyền trên lớp mới được tạo nhật ký và sửa/xóa nhật ký viết tay do chính mình tạo. Không có ngoại lệ sửa/xóa nhật ký người khác cho Admin; log Hệ thống chỉ đọc. Backend kiểm tra lại quyền tại lúc lưu. |
| REQ06 | Tạo/sửa | Tự lấy người tạo từ tài khoản đăng nhập và thời điểm từ hệ thống; không đổi chủ sở hữu, nguồn hoặc lớp bằng thao tác sửa. Nhập Tiêu đề trước rồi Nội dung trực tiếp, xác nhận cuối bằng + để lưu; không mở popup tạo. Từ chối Tiêu đề rỗng/chỉ chứa khoảng trắng; không tạo bản ghi khi chỉ chuyển bước nhập. Tiêu đề và Nội dung không giới hạn ký tự; Nội dung được để trống và hiển thị Trống. Bấm dòng của mình để sửa ngay tại dòng, Enter hoặc đưa chuột ra ngoài vùng sửa để lưu; sửa thành công cập nhật ngày/giờ log theo thời điểm sửa. Xóa cần popup xác nhận. |
| REQ07 | Log thêm học viên vào lớp | Tự ghi đúng một log cho mỗi sự kiện thêm học viên vào lớp thành công; không ghi cho thao tác hủy/thất bại/trùng. Chỉ áp dụng thêm học viên, không áp dụng thêm Giáo viên, Support hoặc Class Handler. |
| REQ08 | Log đóng tiền | Tự ghi đúng một log cho mỗi lần đóng học phí được lưu thành công trong lớp, có tên hóa đơn và số tiền của lần đóng đó; không ghi cho thao tác chưa lưu hoặc chỉ tạo hóa đơn. |
| REQ09 | Không mất/trùng log | Action thành công phải có log tương ứng; xử lý lặp cùng action không thêm log. Những action độc lập tạo các log riêng. |
| REQ10 | Follow | Nhật ký viết tay của Class Handler/Support cung cấp thông tin Follow theo thời điểm log đang hiển thị (tạo mới hoặc sửa thành công). Log tự động không thay thế Follow của người viết. |
| REQ11 | Notification | CRUD nhật ký viết tay có một phản hồi sau kết quả backend. Tự ghi log dùng phản hồi của nghiệp vụ nguồn, không thêm Toast nhật ký độc lập. |

### 2.4. Ràng buộc

#### Quyền

| Role/quan hệ với nhật ký | Xem trong phạm vi lớp | Tạo viết tay | Sửa viết tay | Xóa viết tay | Sửa/xóa log Hệ thống |
|---|:---:|:---:|:---:|:---:|:---:|
| Class Handler có quyền trên lớp, là người tạo | ✅ | ✅ | ✅ | ✅ | ❌ |
| Support có quyền trên lớp, là người tạo | ✅ | ✅ | ✅ | ✅ | ❌ |
| Class Handler/Support, nhật ký của người khác | ✅ | ✅ | ❌ | ❌ | ❌ |
| Admin có quyền trên lớp, không có thêm Class Handler/Support | ✅ | ❌ | ❌ | ❌ | ❌ |
| Role khác hoặc ngoài phạm vi lớp | ❌ | ❌ | ❌ | ❌ | ❌ |

#### Ràng buộc khác

- Tài khoản có nhiều role vẫn phải đáp ứng đồng thời role phù hợp, quyền trên lớp và đúng người tạo khi sửa/xóa. Cùng role, cùng lớp hoặc role `Admin` không tự cấp quyền sửa/xóa nhật ký của người khác.
- Nhật ký, người tạo, lớp và sự kiện nguồn liên kết bằng định danh nội bộ; tên hiển thị không dùng để xác định quyền sở hữu.
- Chỉ lấy dữ liệu thuộc phạm vi lớp được phép xem/thao tác. Filter không được làm lộ user hoặc nhật ký ngoài phạm vi.
- Nội dung nhật ký hiển thị an toàn; không thực thi HTML/script do người dùng nhập.
- Xóa nhật ký viết tay không xóa tài khoản, không xóa học viên khỏi lớp và không đảo giao dịch tiền.
- Request thất bại không làm UI báo thành công hoặc ghi nhật ký sai sự kiện.
- Quyền sửa/xóa kiểm tra cả trên UI và backend.

---

## 3. Testcase

### Feature: Chi tiết lớp học — Menu Nhật ký

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Xem đúng nhật ký của lớp, phân biệt user và Hệ thống | High | Flow 1 / REQ01 / REQ02 | Class Handler hoặc Support | Có nhật ký ở lớp A và B (gồm viết tay và log tự động); user có quyền xem A; một nhật ký có chi tiết dài | **Given:** đang mở lớp A<br>**When:** chọn menu Nhật Ký, đọc cột Đối tượng, mở rộng rồi Thu gọn dòng dài<br>**Then:** chỉ tải nhật ký lớp A | - Đúng tiêu đề và 5 cột<br>- Viết tay hiển thị người tạo, tự động hiển thị Hệ thống<br>- Mở rộng/Thu gọn không gửi request, không đổi dữ liệu<br>- Không trộn nhật ký lớp B |
| Case 2: Tải rỗng, lỗi và chuyển lớp | High | Flow 1 / EX01 / REQ01 | Role có quyền xem nhật ký | Có lớp chưa có nhật ký hoặc API tải lỗi | **Given:** mở Nhật Ký<br>**When:** tải rỗng/lỗi hoặc chuyển lớp khi đang tải<br>**Then:** hiển thị đúng trạng thái | - Rỗng không bị nhầm với lỗi<br>- Có Thử lại khi lỗi<br>- Response lớp cũ không ghi đè lớp mới |
| Case 3: Kiểm tra quyền xem menu | High | REQ01 / Ràng buộc quyền | Admin, Class Handler, Support và role khác | Có ID lớp hợp lệ | **Given:** kiểm tra từng role và tài khoản ngoài phạm vi<br>**When:** mở menu hoặc gọi request xem trực tiếp<br>**Then:** chỉ Admin/Class Handler/Support có quyền trên lớp được xem | - Role khác và ngoài phạm vi bị từ chối<br>- Không trả dữ liệu nhật ký khi thiếu quyền |
| Case 4: Lọc theo Đối tượng | High | Flow 2 / REQ03 | Role có quyền xem nhật ký | A và B đã viết nhật ký lớp C, mô tả của B nhắc A; D chỉ viết ở lớp khác; có log Hệ thống do action của A | **Given:** mở filter Đối tượng tại C, chọn A rồi chọn Hệ thống<br>**When:** tải kết quả<br>**Then:** A chỉ trả nhật ký viết tay do A tạo; Hệ thống chỉ trả log tự động | - Danh sách lựa chọn có A, B, Hệ thống, không có D; user không lặp<br>- Không lấy dòng của B vì mô tả nhắc A<br>- Không gộp user trùng tên |
| Case 5: Search theo Tiêu đề và kết hợp điều kiện | High | Flow 2 / REQ03 / REQ04 / EX06 | Role có quyền xem nhật ký | Từ khóa nằm ở Tiêu đề dòng A và chỉ trong Mô tả dòng B; dữ liệu khác nhau về nguồn và thời điểm | **Given:** nhập từ khóa tiếp trước 2 giây, Enter, hoặc dừng nhập; áp dụng thêm Đối tượng và Thời gian; xóa từ khóa; response cũ về muộn<br>**When:** tải danh sách<br>**Then:** chỉ trả dòng thỏa tất cả điều kiện | - Chỉ khớp Tiêu đề; tính 2 giây từ lần nhập cuối, Enter chạy ngay và không gửi lặp<br>- Rỗng theo điều kiện khi không có dòng phù hợp<br>- Bỏ từng filter giữ điều kiện còn lại<br>- Chỉ kết quả điều kiện mới nhất hiển thị |
| Case 6: Filter Thời gian và khoảng Tùy chọn | High | REQ04 / EX07 | Role có quyền xem nhật ký | Có log ở đầu/cuối ngày, tuần, tháng, năm; nhật ký tạo hôm qua, sửa hôm nay | **Given:** mở filter Thời gian (mặc định Hôm nay), chọn các khoảng định sẵn và Tùy chọn (hợp lệ, thiếu ngày, Từ ngày sau Đến ngày)<br>**When:** áp dụng<br>**Then:** lọc theo thời điểm log đang hiển thị | - Đủ 12 lựa chọn, tuần bắt đầu Thứ 2, Tới hạn không phải hạn học phí<br>- Tùy chọn bao gồm hai ngày biên; khoảng không hợp lệ không áp dụng, giữ điều kiện cũ<br>- Nhật ký đã sửa lọc theo ngày sửa, không theo ngày tạo cũ |
| Case 7: Tạo nhật ký và chặn tiêu đề rỗng | High | Flow 3 / REQ05 / REQ06 / EX04 / REQ11 | Class Handler hoặc Support | User A có quyền trên lớp | **Given:** nhập Tiêu đề rồi Nội dung tại Thêm nhật ký (cũng thử Tiêu đề rỗng/chỉ khoảng trắng, Nội dung trống, dữ liệu dài, chưa xác nhận `+`, lưu lỗi, bấm lặp)<br>**When:** xác nhận lưu cuối bằng `+`<br>**Then:** thêm một nhật ký do A tạo | - Không mở popup; chuyển bước Tiêu đề → Nội dung không tạo bản ghi<br>- Tiêu đề sai báo lỗi tại ô nhập (`Vui lòng nhập tiêu đề nhật ký.`); Nội dung trống hợp lệ hiển thị `Trống`<br>- Không giới hạn ký tự<br>- Thành công: đúng người tạo/lớp/thời điểm, reset về bước Tiêu đề, một Toast `Đã thêm nhật ký.`; lỗi giữ dữ liệu nhập, không tạo trùng |
| Case 8: Sửa trực tiếp tại dòng | High | Flow 4 / REQ05 / REQ06 / REQ04 / REQ10 | Class Handler hoặc Support | A có nhật ký viết tay tạo hôm qua | **Given:** A bấm dòng của mình, sửa Tiêu đề/Nội dung<br>**When:** Enter hoặc đưa chuột ra ngoài vùng sửa (cũng thử không đổi dữ liệu, Tiêu đề sai, API lỗi)<br>**Then:** cập nhật đúng nhật ký một lần | - Không mở editor/popup, không nút Lưu/Hủy; chuột chỉ di chuyển giữa các ô không lưu<br>- Enter rồi rời vùng không gửi lặp, một Toast `Đã cập nhật nhật ký.`<br>- Giờ/Ngày log = thời điểm sửa, filter Hôm nay và Follow dùng thời điểm mới; không đổi người tạo/lớp<br>- Không đổi dữ liệu: không cập nhật, không Toast; lỗi giữ phần nhập |
| Case 9: Xóa nhật ký với popup xác nhận | High | Flow 5 / REQ05 | Class Handler hoặc Support | A có nhật ký viết tay trong lớp | **Given:** A bấm thùng rác<br>**When:** Hủy/Đóng, rồi Xác Nhận (cũng thử backend lỗi hoặc mất quyền)<br>**Then:** Xác Nhận thành công thì nhật ký không còn trong danh sách | - Popup `Bạn có chắc muốn xóa nhật ký này?`, chưa xóa khi mở popup<br>- Hủy không gửi request, không Toast<br>- Thành công: một Toast `Đã xóa nhật ký.`, học viên/học phí không đổi<br>- Lỗi/mất quyền: giữ nguyên dòng, báo lỗi, không báo thành công |
| Case 10: Chỉ chủ sở hữu được sửa/xóa | High | EX02 / EX03 / REQ05 / Ràng buộc quyền | Class Handler, Support, Admin | Nhật ký thuộc B trong cùng lớp; có log Hệ thống; hai tài khoản trùng tên | **Given:** A khác B (cùng role hoặc Admin) kiểm tra thao tác từng dòng, gửi request sửa/xóa trực tiếp, giả mạo creator hoặc mất quyền sau khi mở form<br>**When:** backend kiểm tra<br>**Then:** từ chối | - A chỉ có sửa/xóa ở dòng do A tạo; dòng của B và Hệ thống không có thao tác<br>- Không có ngoại lệ Admin; xác định theo ID tài khoản, không theo tên<br>- Nội dung B và log Hệ thống giữ nguyên, không chuyển người tạo sang A |
| Case 11: Tự ghi log thêm học viên | High | Flow 6 / REQ07 / REQ09 / EX05 | Role được thêm học viên | Học viên B chưa thuộc lớp C; thao tác thêm nhiều học viên có người đã thuộc lớp; thêm Giáo viên/Support/Class Handler | **Given:** A thêm B (và nhiều học viên) vào C<br>**When:** thao tác thành công, hủy, thất bại hoặc xử lý lặp<br>**Then:** Hệ thống tạo đúng một log cho mỗi học viên thực sự được thêm | - Tiêu đề `Thêm Học Viên`, nội dung đúng A/B/C, Đối tượng Hệ thống<br>- Hủy/thất bại/trùng không tạo log; xử lý lặp không trùng log<br>- Thêm nhân sự không ghi log Thêm Học Viên<br>- Không phát sinh Toast nhật ký độc lập |
| Case 12: Tự ghi log đóng tiền | High | Flow 7 / REQ08 / REQ09 / REQ11 | Role được ghi nhận học phí | Hóa đơn Học phí tháng 9 trị giá 1.000.000 đ, lần này ghi nhận 100.000 đ; có hóa đơn chưa dùng trong lớp | **Given:** A ghi nhận học phí 100.000 đ cho B trong lớp C<br>**When:** giao dịch lưu thành công (cũng thử chỉ tạo hóa đơn, thất bại, hai lần đóng, callback lặp)<br>**Then:** có đúng một log đóng tiền tại C | - Mô tả có người thực hiện, học viên, lớp, tên hóa đơn và `100.000 đ`, không phải 1.000.000 đ hay số dư<br>- Đối tượng Hệ thống; chỉ tạo hóa đơn không có log<br>- Hai lần đóng độc lập có hai log, xử lý lặp không thêm<br>- Hóa đơn trùng tên vẫn theo ID sự kiện |
| Case 13: Log Hệ thống chỉ đọc và Follow | High | EX02 / REQ10 | Class Handler, Support hoặc Admin | A có nhật ký viết tay, sau đó có log Hệ thống mới hơn | **Given:** gọi request sửa/xóa log tự động; mở Danh sách lớp tính Follow<br>**When:** backend kiểm tra; xóa nhật ký gần nhất<br>**Then:** log Hệ thống bị từ chối; Follow lấy nhật ký viết tay hợp lệ gần nhất | - Log giữ nguyên<br>- Follow không lấy Hệ thống hay actor trong mô tả làm người Follow<br>- Xóa nhật ký gần nhất thì tính lại từ dữ liệu còn hợp lệ |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Nhật ký viết tay có hỗ trợ định dạng/checklist tương tác hay chỉ nhập text? (Nội dung được để trống và Tiêu đề/Nội dung không giới hạn ký tự đã chốt.)
- **Q02:** Filter Đối tượng cho chọn một hay nhiều giá trị? (Nguồn user đã chốt là những người đã viết nhật ký của lớp, kèm Hệ thống.)
- **Q03:** Thứ tự mặc định, phân trang/load-more và số dòng mỗi lần tải chưa được chốt. (Search đã chốt chỉ theo Tiêu đề, Enter hoặc sau 2 giây từ lần nhập cuối.)
- **Q04:** Múi giờ nghiệp vụ cụ thể dùng chung với các requirement khác là gì? (Thời gian mặc định Hôm nay và dùng cùng 12 khoảng thời gian đã chốt.)
