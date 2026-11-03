# Chi tiết lớp học — Menu Nhật ký — Tab Tin nhắn

Requirement **Chi tiết lớp học → Nhật ký → Tin Nhắn** theo ba ảnh người dùng cung cấp: thêm tin nhắn vào danh sách, chọn mẫu được định nghĩa sẵn, lấy các biến từ **CơmGao**, gửi toàn bộ học viên hoặc gửi từng học viên theo nền tảng đã chọn. Chức năng định nghĩa/quản lý mẫu tin nhắn được đặc tả riêng. Các tab [Nhật Ký](./class_detail_journal_requirements.md), [Ghi Chú](./class_detail_notes_requirements.md), [Lịch Hẹn](./class_detail_appointments_requirements.md) có requirement riêng.

## 1. UI

### Trang 1: ADM-LOP-050100 — Tab Tin Nhắn — Danh sách tin nhắn

![Figma mới nhất · ADM-LOP-050100](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-LOP-050100.png)

![Trang 1](./images/44-class-detail-messages-list.png)

*UI do người dùng cung cấp — nhấn để xem ảnh gốc*

**Mô tả:**

- Admin được thao tác theo quyền quản trị chung, không yêu cầu được add vào lớp. Class Handler và Support chỉ được xem/tạo/gửi/đổi mẫu/xóa khi đã được add vào chính lớp đang mở.
- Tiêu đề màn hình là `Danh sách tin nhắn`; mỗi item là một tin nhắn bán tự động của chính lớp, có thể mở/thu gọn danh sách học viên. Quyền thao tác không giới hạn theo người tạo item; mọi tài khoản đáp ứng role và điều kiện lớp nêu trên đều được thao tác.

**Giải thích field/thành phần:**

- `A01.01` **Nút +**: Mở popup `Tạo tin nhắn bán tự động mới`; không gửi tin nhắn khi chỉ mở popup.
- `A01.02` **Tiêu đề**: Hiển thị Tiêu đề và Mô tả ở đầu item như ảnh; các field là metadata của tin nhắn lớp, không tự thêm vào nội dung gửi.
- `A01.03` **Tin nhắn**: Dropdown hiển thị tên mẫu đang dùng, không hiển thị placeholder mẫu như một tin nhắn đã gửi. Cho chọn mẫu theo quyền; đổi mẫu không reset count hoặc mở lại quyền gửi học viên đã thành công.
- `A01.04` **Ngày tạo**: Ngày tạo item, định dạng `dd/MM/yyyy` như `28/09/2026` trong ảnh; không thay bằng ngày gửi của học viên.
- `A01.05` **Số người đã gửi**: Hiển thị `S/T`: S là số học viên đã được xác nhận gửi thành công cho item này, T là tổng người nhận trong danh sách. Với 8 học viên chưa gửi hiển thị `0/8`. Gửi thất bại/đang chờ không tăng S; Không cho gửi lại học viên đã thành công trong cùng item.
- `A01.06` **Gửi chung**: Nút cam `Gửi` ở đầu item dùng gửi cho toàn bộ danh sách người nhận đủ điều kiện của item, không áp dụng cho mọi item tin nhắn.
- `A01.07` **Mở/Thu gọn**: Chevron bên phải cho mở/thu gọn các dòng học viên; không tạo/gửi/cập nhật dữ liệu nghiệp vụ.
- `A01.08` **Nút × đỏ**: Hiện khi hover item; bấm × mở popup xác nhận xóa, chỉ thực hiện sau confirm. Khác với chevron thu gọn; Hủy không thay đổi danh sách.
- `A01.09` **Tìm kiếm**: Ô `Tìm kiếm...` theo ảnh, **chỉ search theo Tiêu đề tin nhắn** trong lớp hiện tại. Không search Mô tả, tên mẫu, nội dung mẫu hoặc thông tin học viên. Thời điểm kích hoạt còn cần xác nhận. Không tự kế thừa debounce của Nhật Ký sang Tin Nhắn.
- `A01.10` **Tải dữ liệu**: Có loading/rỗng/lỗi và Thử lại. Không trộn item hay số người đã gửi của lớp khác.

**Điểm cần lưu ý:**

- Tên mẫu, ngày, nội dung ví dụ và 0/8 trong ảnh là dữ liệu mẫu; hiển thị từ bản ghi thực tế.
- Chỉ tạo item vào danh sách khi thao tác Tạo mới thành công. Nhãn bán tự động không có nghĩa tự gửi ngay, chạy theo lịch hoặc gửi khi thay đổi dữ liệu CơmGao.
- Mở/thu gọn hay tải lại giữ đúng item và kết quả gửi đã lưu; không tự phát sinh lần gửi mới. Search theo Tiêu đề đã chốt; thời điểm kích hoạt, thứ tự và phân trang còn ghi tại mục 3.

### Trang 2: ADM-LOP-050100 — Popup Tạo tin nhắn bán tự động mới

![Figma mới nhất · ADM-LOP-050100](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-LOP-050100.png)

![Trang 2](./images/43-class-detail-message-create.png)

*UI do người dùng cung cấp — nhấn để xem ảnh gốc*

**Mô tả:**

- Bấm + để nhập metadata và chọn mẫu đã có. Tạo mới chỉ thêm một item vào danh sách của lớp; thao tác gửi là bước riêng.

**Giải thích field/thành phần:**

- `A02.01` **Tiêu đề**: **Bắt buộc**, không giới hạn ký tự; không chấp nhận rỗng/chỉ khoảng trắng. Hiển thị xuống dòng khi dài trên item, giữ toàn bộ giá trị đã lưu.
- `A02.02` **Mô tả**: **Bắt buộc**, không giới hạn ký tự; không chấp nhận rỗng/chỉ khoảng trắng. Là metadata bổ sung trên item, không tự thêm vào nội dung gửi.
- `A02.03` **Chọn mẫu tin nhắn**: Bắt buộc (dấu * trong UI), chọn một mẫu đã định nghĩa ở chức năng riêng. Lấy danh sách mẫu được phép dùng; lưu đúng định danh mẫu, không dùng tên hiển thị làm khóa.
- `A02.04` **Nội dung tin nhắn**: Hiển thị nội dung của mẫu đang chọn và các placeholder theo định nghĩa, giữ xuống dòng như ảnh. Nội dung **chỉ đọc** tại popup/tab, không tạo bản nội dung chỉnh riêng. Muốn sửa phải vào chức năng define mẫu; không sửa mẫu gốc qua tab này.
- `A02.05` **Hủy**: Đóng popup, không thêm item và không gửi tới học viên; không Toast CRUD.
- `A02.06` **Tạo mới**: Kiểm tra dữ liệu/quyền/mẫu rồi lưu item vào đúng lớp; chống gửi lặp. Thành công đóng popup, cập nhật danh sách và một Toast tạo thành công.

**Điểm cần lưu ý:**

- Chọn mẫu khác phải hiển thị nội dung của đúng mẫu mới; không giữ nội dung của mẫu trước dưới tên mới.
- Popup chung chưa chỉ định một học viên nên preview có thể còn các biến dạng {name}, {phone}... như ảnh. Nội dung thực tế cần thay biến riêng cho từng người nhận trước khi gửi.
- Danh sách mẫu và quy tắc biến thuộc chức năng nguồn; trường hợp không có mẫu hoặc mẫu không còn khả dụng phải báo rõ, không tạo item với mẫu không hợp lệ.
- Giữ dữ liệu nhập khi lưu lỗi để thử lại; không tạo nhiều item nếu bấm/callback lặp. Không tự thêm UI tạo mẫu ở đây.

### Trang 3: ADM-LOP-050100 — Danh sách học viên và chọn nền tảng

![Figma mới nhất · ADM-LOP-050100](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-LOP-050100.png)

![Trang 3](./images/45-class-detail-message-platforms.png)

*UI do người dùng cung cấp — nhấn để xem ảnh gốc*

**Mô tả:**

- Mở một item để xem các học viên nhận tin nhắn của lớp và chọn riêng nền tảng cho từng học viên. Danh sách nhận tin phải xuất phát từ học viên thuộc lớp, liên kết với dữ liệu CơmGao của chính học viên đó.

**Giải thích field/thành phần:**

- `A03.01` **Học viên**: Mỗi dòng có icon/avatar, tên học viên và email như UI. Thông tin PH nếu có hiển thị từ dữ liệu nguồn; không mặc nhiên chuyển người nhận sang phụ huynh chỉ vì tên có PH.
- `A03.02` **Nguồn người nhận**: Dựa trên [Học viên của lớp](./class_detail_students_requirements.md) và liên kết sang đúng hồ sơ/cuộc hội thoại CơmGao. Cần chốt tập trạng thái học viên được nhận và danh sách có cố định lúc tạo hay cập nhật theo lớp.
- `A03.03` **Dropdown nền tảng**: Có Facebook, Instagram, Zalo, TikTok, Website theo ảnh; chọn một nền tảng trên từng dòng, icon/nhãn đúng platform. Facebook trong ảnh không xác lập mặc định cho mọi học viên.
- `A03.04` **Đích gửi**: Lấy tài khoản/cuộc hội thoại của đúng học viên trên nền tảng đã chọn từ CơmGao. Email trên UI là thông tin hiển thị, không phải đích gửi cho mọi nền tảng.
- `A03.05` **Gửi từng học viên**: Nút Gửi riêng chỉ gửi nội dung của item này cho học viên cùng dòng bằng platform của dòng đó. Nút màu **xám/disabled khi chưa liên kết nền tảng đang chọn**; không suy ra đã gửi chỉ từ màu xám. Nút cam cho gửi khi có liên kết hợp lệ và đủ quyền/dữ liệu. Trong lúc gửi khóa thao tác để chống lặp.
- `A03.06` **Thiếu liên kết nền tảng**: Không tự chuyển sang nền tảng khác hoặc user khác. Hiển thị lý do không gửi được; nút Gửi xám/disabled khi chưa liên kết platform đó. Học viên đã gửi thành công được đánh dấu đã gửi và chặn thao tác, không dùng màu xám trong ảnh để suy ra kết quả.

**Điểm cần lưu ý:**

- Lựa chọn platform của A không thay platform của B hoặc tự thay cho toàn lớp. Quy tắc lưu lựa chọn giữa các lần tải và sau đổi mẫu cần chốt.
- Chỉ hiển thị/cho dùng đích gửi được phép của học viên đúng lớp; không ghép hồ sơ dựa trên tên/email trùng. Nếu liên kết không xác định duy nhất, báo thiếu thông tin để xử lý, không đoán.
- Danh sách 5 nền tảng là thiết kế mục tiêu; không suy ra trạng thái tích hợp gửi từ chức năng mở link nền tảng trong CơmGao. Nền tảng chưa khả dụng phải có lý do rõ, không báo gửi thành công giả.

### Trang 4: ADM-LOP-050100 — Lấy biến CơmGao và gửi tin nhắn

![Figma mới nhất · ADM-LOP-050100](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-LOP-050100.png)

**Mô tả:**

- Gửi từng học viên hoặc toàn bộ danh sách nhận của một item. Nội dung được cá nhân hóa theo từng học viên, không dùng một nội dung đã thay biến của học viên A để gửi cho B.

**Giải thích field/thành phần:**

- `A04.01` **Biến mẫu**: Danh sách biến/ý nghĩa do chức năng mẫu và CơmGao cung cấp. Ảnh có {khach}, {ad}, {name}, {address}, {phone}, {info} là ví dụ, không tự định nghĩa mapping trường nghiệp vụ tại tab này.
- `A04.02` **Thay biến**: Trước khi gửi, lấy dữ liệu CơmGao của đúng người nhận theo mapping nguồn, tạo nội dung riêng và giữ văn bản/xuống dòng. Không tự điền giá trị giả hoặc gửi các biến chưa thay hợp lệ.
- `A04.03` **Gửi một người**: Nút Gửi ở dòng chỉ xử lý một học viên của item; dùng template/nội dung và platform tương ứng.
- `A04.04` **Gửi toàn bộ**: Nút Gửi ở đầu item xử lý các học viên đủ điều kiện trong danh sách nhận của item, dùng platform riêng của từng người. Không tự đổi mọi người sang platform của dòng đầu.
- `A04.05` **Đang gửi**: Khóa/chống gửi lặp cùng item/người nhận khi thao tác đang xử lý; gửi chung và riêng đồng thời không tạo hai lần gửi ngoài ý muốn.
- `A04.06` **Kết quả từng người**: Ghi nhận người nhận, platform, nội dung thực tế sau thay biến, thời điểm và kết quả đủ để hiển thị/reconcile đúng item; lỗi của một người không khiến những người đã gửi thành công bị ghi nhận thất bại.
- `A04.07` **Số người đã gửi**: Chỉ tăng S sau xác nhận gửi thành công cho học viên chưa được tính; cập nhật đúng item và giữ qua tải lại. Không khẳng định học viên đã đọc/đã nhận chỉ dựa trên thao tác được tiếp nhận.
- `A04.08` **Gửi lại**: **Không cho gửi lại** người đã thành công trong cùng item, cả nút riêng và Gửi chung. Gửi chung bỏ qua người đã thành công; đổi platform/mẫu, refresh hoặc thao tác từ user khác không xóa trạng thái đã gửi hay mở lại quyền gửi. Người chưa gửi thành công còn được gửi sau xử lý lỗi/thiếu liên kết; timeout phải kiểm tra kết quả trước thử lại.

**Điểm cần lưu ý:**

- Biến và đích gửi phải thuộc cùng học viên/ngữ cảnh. Không dùng dữ liệu của người đang thao tác để thay mọi biến nếu mapping nguồn không quy định như vậy.
- Mẫu/biến/đích gửi không hợp lệ hoặc CơmGao lỗi: không gửi cho người đó, nêu lý do, count không tăng. Với gửi chung, ghi rõ kết quả từng người và số thành công/thất bại/bỏ qua/đang chờ; không báo toàn bộ thành công nếu có lỗi.
- Khi timeout chưa biết tin nhắn đã gửi hay chưa, giữ trạng thái chưa xác định để kiểm tra kết quả trước thử lại; không tự phát lại và gây trùng. Kết quả gửi ra nền tảng không được hoàn tác bằng cách xóa item trong ICS.
- Chỉ ghi nhận/lưu và gửi khi người dùng bấm thao tác được cấp quyền. Tạo item, chọn mẫu/platform hoặc mở tab không kích hoạt gửi.

### Trang 5: ADM-LOP-050100 — Quản lý item tin nhắn đã tạo

![Figma mới nhất · ADM-LOP-050100](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-LOP-050100.png)

**Mô tả:**

- Admin hoặc Class Handler/Support đã được add vào lớp được quản lý item, kể cả do người khác tạo. Nội dung mẫu chỉ đọc; muốn sửa phải vào define ở chức năng riêng. Hover hiện ×, click mở popup xác nhận và confirm mới xóa item khỏi danh sách; không thu hồi tin đã gửi.

**Giải thích field/thành phần:**

- `A05.01` **Dropdown mẫu trên item**: Cho Admin hoặc Class Handler/Support đã được add vào lớp chọn mẫu có sẵn. Khi đổi, nội dung chưa gửi phải khớp mẫu mới; không sửa định nghĩa mẫu gốc.
- `A05.02` **Sửa Tiêu đề/Mô tả**: Ảnh chưa có editor hoặc cách mở sửa metadata; không tự thêm thao tác bấm dòng để sửa như Nhật Ký.
- `A05.03` **Nút ×**: Admin hoặc Class Handler/Support đã được add vào lớp hover thấy ×; click mở popup có thông báo `Bạn có chắc muốn xóa tin nhắn này?`, nút `Hủy` / `Xóa`. Chỉ xác nhận Xóa mới xử lý. Xóa mềm/cứng và khả năng xóa sau gửi còn cần chốt. Không đồng nhất với thu gọn item.
- `A05.04` **Tin nhắn đã gửi**: Thay mẫu/xóa item không thay nội dung thực tế đã gửi ra platform hoặc tự thu hồi tin nhắn.
- `A05.05` **Xác nhận xóa**: Chọn Hủy đóng popup, không request/Toast CRUD. Chọn Xóa kiểm tra lại role/thành viên lớp/item, khóa chống lặp; chỉ bỏ item sau lưu thành công, một Toast `Xóa tin nhắn thành công.`. Lỗi giữ item và Toast `Không thể xóa tin nhắn. Vui lòng thử lại.`.
- `A05.06` **Dữ liệu kết quả gửi**: Không làm mất/đổi kết quả gửi đã xác nhận của học viên khi đổi dữ liệu hiển thị. Đổi mẫu không mở đợt gửi mới cho học viên đã thành công trong item; người chưa gửi dùng mẫu đang chọn khi gửi. Thay đổi mẫu gốc ở define không viết lại nội dung đã gửi.

**Điểm cần lưu ý:**

- Kiểm tra quyền thao tác cả trên UI và backend, giữ đúng lớp và item. Chỉ người có quyền được thao tác, không dựa vào tên hiển thị.
- Không đặt count về 0 hoặc tự gửi lại khi đổi mẫu. Hủy popup xóa không thay đổi item/Toast CRUD; lưu xóa lỗi giữ item và cho thử lại.

### Trang 6: ADM-LOP-050100 — Toast phản hồi CRUD và gửi tin nhắn

![Figma mới nhất · ADM-LOP-050100](https://ics-figma-demo.vercel.app/api/figma-frame/ADM-LOP-050100.png)

![Trang 6](../../images/01-toast-crud.png)

*Toast Thành Công, Thông Báo, Cảnh Báo và Có Lỗi Xảy Ra — nhấn để xem ảnh gốc*

**Mô tả:**

- Tạo/quản lý item và gửi có một Toast kết quả theo component dùng chung, tách rõ đã tạo item, đang gửi và gửi thành công.

**Giải thích field/thành phần:**

- `A06.01` **Thành Công**: Tạo: `Tạo tin nhắn thành công.`; cập nhật: `Cập nhật tin nhắn thành công.`; xóa: `Xóa tin nhắn thành công.`. Gửi riêng khi xác nhận thành công: `Gửi tin nhắn thành công cho {Tên học viên}.`; gửi chung toàn bộ đủ điều kiện thành công: `Đã gửi tin nhắn thành công cho {Số người} học viên.`.
- `A06.02` **Thông Báo**: Khi thực tế đang xử lý: `Đang gửi tin nhắn. Vui lòng chờ cập nhật kết quả.`; không coi là thành công hoặc tăng count.
- `A06.03` **Cảnh Báo**: Thiếu Tiêu đề/Mô tả: `Vui lòng nhập đầy đủ tiêu đề và mô tả.`; chưa chọn mẫu: `Vui lòng chọn mẫu tin nhắn.`; thiếu biến/đích gửi nêu lý do của người nhận. Kết quả hỗn hợp: `Kết quả gửi: {S} thành công, {F} thất bại, {K} bỏ qua, {P} đang chờ.`.
- `A06.04` **Có Lỗi Xảy Ra**: Tạo: `Không thể tạo tin nhắn. Vui lòng thử lại.`; xóa: `Không thể xóa tin nhắn. Vui lòng thử lại.`; gửi lỗi đã xác định: `Không thể gửi tin nhắn cho {Tên học viên}. Vui lòng kiểm tra và thử lại.`; tải/timeout chưa rõ kết quả không dùng thông báo khẳng định đã thất bại.
- `A06.05` **Đóng và thời lượng**: Icon/màu/vị trí/thời gian tự đóng và nút × theo Toast dùng chung. Đóng Toast không hủy gửi hay hoàn tác dữ liệu.

**Điểm cần lưu ý:**

- Thông báo dùng đúng kết quả/người/item; một kết quả thao tác logic chỉ hiện một Toast, gửi chung không spam một Toast cho từng dòng. Cập nhật tiến trình/kết quả trên item vẫn được giữ.
- Nếu có bước đang gửi rồi kết quả cuối, đó là hai trạng thái của cùng thao tác, không phải báo thành công trước xác nhận. Không có Toast CRUD khi chỉ xem/chọn platform/mở hoặc hủy popup.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1 / REQ01 / REQ08: Xem tab Tin Nhắn**

```text
Admin/Class Handler/Support mở lớp → Nhật ký → Tin Nhắn
      → Kiểm tra role và phạm vi lớp
      → Tải item và kết quả gửi của đúng lớp
      → Mở/thu gọn danh sách người nhận; hiển thị S/T và nền tảng từng người
      → Tìm kiếm chỉ đối chiếu Tiêu đề tin nhắn trong lớp đang xem
      → Không tự gửi khi xem/chuyển tab/tải lại
```

**Flow 2 / REQ02 / REQ07: Thêm tin nhắn từ mẫu sẵn có**

```text
Người có quyền tạo bấm +
      → Nhập Tiêu đề/Mô tả bắt buộc, không giới hạn ký tự
      → Chọn mẫu có sẵn, xem nội dung/biến nguồn
      → Hủy: đóng, không lưu/không gửi
      → Tạo mới: kiểm tra dữ liệu, quyền, mẫu và lớp; chống tạo lặp
      → Thành công: thêm item, Toast Tạo tin nhắn thành công., chưa gửi học viên
      → Lỗi: giữ input, không thêm item, một Toast lỗi/cảnh báo
```

**Flow 3 / REQ03 / REQ04 / REQ05 / REQ06 / REQ07: Gửi cho một học viên**

```text
Mở item → Chọn nền tảng tại dòng học viên
      → Bấm Gửi ở cùng dòng
      → Kiểm tra quyền, điều kiện gửi/gửi lại, mẫu, học viên và đích CơmGao
      → Lấy biến từ CơmGao theo mapping, cá nhân hóa nội dung của người nhận
      → Gửi qua platform đã chọn, chống request trùng
      → Xác nhận thành công: lưu kết quả, tăng S nếu học viên chưa được tính, một Toast kết quả
      → Thiếu dữ liệu/lỗi: không tăng S, nêu lý do; chưa rõ kết quả thì kiểm tra trước thử lại
```

**Flow 4 / REQ03 / REQ04 / REQ05 / REQ06 / REQ07: Gửi toàn bộ danh sách**

```text
Người có quyền bấm Gửi ở đầu một item
      → Xác định các học viên đủ điều kiện trong danh sách nhận của item
      → Kiểm tra mẫu/biến/đích và dùng platform đã chọn riêng của từng người
      → Cá nhân hóa và gửi từng người; chống trùng với thao tác riêng đang chạy
      → Ghi nhận thành công/thất bại/bỏ qua/đang chờ riêng từng người
      → Cập nhật S/T đúng số người thành công, hiển thị một tổng kết kết quả
      → Không gửi lại học viên đã thành công; bỏ qua trong gửi chung và chặn nút riêng
```

**Flow 5 / REQ01 / REQ07 / REQ08 / REQ09: Xác nhận xóa item**

```text
Admin hoặc Class Handler/Support đã add vào lớp hover item → Hiện ×
      → Click ×: mở popup xác nhận, chưa xóa ngay
      → Hủy: đóng popup, giữ item, không request/Toast CRUD
      → Xóa: backend kiểm tra quyền và item, chống gửi lặp
      → Thành công: bỏ item khỏi danh sách, một Toast Xóa tin nhắn thành công.
      → Thất bại: giữ item, một Toast Không thể xóa tin nhắn. Vui lòng thử lại.
      → Không thu hồi tin đã gửi trên nền tảng
```

### 2.2. Ngoại lệ

- **EX01:** Tải danh sách/người nhận/mẫu lỗi → trạng thái lỗi và Thử lại, không coi là rỗng hay dữ liệu hợp lệ để gửi.
- **EX02:** Response thuộc lớp/item/tab cũ → không ghi đè giao diện hiện tại; kết quả đã gửi vẫn liên kết đúng item/người nhận gốc.
- **EX03:** Thiếu quyền tab/lớp/thao tác → từ chối UI/request trực tiếp; không trả dữ liệu ngoài quyền và không gửi.
- **EX04:** Mẫu trống/không tồn tại/không được dùng hoặc metadata vi phạm validation đã chốt → không tạo/cập nhật/gửi, báo field/lý do và Toast phù hợp.
- **EX05:** Tạo/cập nhật item lỗi hoặc gửi lặp → không nhân bản item, không lưu một phần; giữ input để thử lại.
- **EX06:** Thiếu liên kết CơmGao/đích platform hoặc platform chưa khả dụng → không tự chuyển đích/nền tảng, báo lý do của người nhận, không tăng S.
- **EX07:** Thiếu mapping/biến hợp lệ hoặc nguồn CơmGao lỗi → không gửi nội dung sai/chưa thay biến; giữ kết quả riêng từng người.
- **EX08:** Gửi chung/riêng hoặc callback trùng → chống gửi lặp cùng item/người nhận đang xử lý, không tính S hai lần. Học viên đã thành công không được gửi lại dù đổi mẫu/platform hay user thao tác.
- **EX09:** Timeout chưa biết kết quả gửi → không tự gửi lại/đánh dấu chắc chắn thất bại, kiểm tra/reconcile kết quả trước thử lại.
- **EX10:** Học viên đã gửi thành công → chặn gửi lại qua UI/request, kể cả đổi mẫu/platform, không gửi lần mới hoặc tăng count.
- **EX11:** Xóa lỗi/gửi lặp hoặc item không còn hợp lệ → không xóa nhầm/nhân đôi thao tác; giữ dữ liệu hiển thị phù hợp, một Toast kết quả.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Danh sách | Item thuộc lớp hiện tại, đủ Tiêu đề/Mô tả/Mẫu/Ngày tạo/Số người đã gửi, + tạo, Gửi chung, mở/thu gọn và **search chỉ theo Tiêu đề tin nhắn** trong lớp hiện tại. Không tự gửi khi tạo/xem/chọn dữ liệu. |
| REQ02 | Mẫu tin nhắn | Tiêu đề/Mô tả đều bắt buộc, không giới hạn ký tự, không chấp nhận chỉ khoảng trắng. Chọn một mẫu có sẵn bắt buộc; template/nội dung/biến từ chức năng nguồn. Tab này không định nghĩa hay sửa mẫu gốc. Metadata và preview theo popup; **nội dung chỉ đọc**, muốn sửa vào chức năng define mẫu. Đổi mẫu không reset count hoặc cho gửi lại người đã thành công; version mẫu khi sửa define còn cần chốt. |
| REQ03 | Biến CơmGao | Lấy các biến của đúng học viên theo mapping nguồn trước gửi; mỗi người có nội dung riêng. Không định nghĩa mapping từ ví dụ ảnh hoặc dùng dữ liệu giả. Lưu được kết quả/nội dung đã gửi mà thay mẫu sau này không viết lại lịch sử. |
| REQ04 | Người nhận và nền tảng | Học viên thuộc lớp, liên kết đúng CơmGao; mỗi dòng chọn Facebook/Instagram/Zalo/TikTok/Website theo UI. Đích gửi phụ thuộc platform đã chọn, không lấy email hiển thị làm địa chỉ chung hoặc tự fallback. |
| REQ05 | Gửi | Gửi một người bằng nút dòng hoặc toàn bộ người đủ điều kiện chưa thành công bằng nút đầu item. Không cho gửi lại học viên đã thành công trong cùng item, kể cả đổi mẫu/platform hoặc user thao tác. Cá nhân hóa theo người, dùng platform riêng, chống lặp chung/riêng. Kết quả hỗn hợp giữ từng kết quả; timeout cần xác định kết quả trước thử lại. |
| REQ06 | Kết quả và count | S/T đếm học viên duy nhất đã được xác nhận gửi thành công / tổng danh sách nhận của item. Không tăng khi đang chờ/lỗi hoặc đếm thêm vì cùng người gửi nhiều lần. Ghi nhận đúng item/người/platform/nội dung thực tế/thời điểm/kết quả; không suy ra đã đọc. |
| REQ07 | Notification | Tạo/quản lý/gửi có một Toast kết quả logic theo UI chung; gửi chung có tổng kết, không spam từng dòng. Chỉ báo thành công khi được xác nhận; Hủy/chỉ xem/chọn platform không Toast CRUD. |
| REQ08 | Quyền và phạm vi | Admin theo quyền quản trị chung không cần add vào lớp; Class Handler/Support phải được add vào lớp mới được xem/tạo/gửi/đổi mẫu/xóa. Không giới hạn theo người tạo item và không kế thừa owner từ tab khác; Sale/role khác không vào tab. Kiểm tra lại quyền/người nhận/đích trước thay đổi và gửi, kể cả request trực tiếp. |

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ09 | Xóa có xác nhận | Hover item hiện ×; click mở popup, chưa xóa ngay. Hủy không đổi dữ liệu, confirm mới xóa sau kiểm tra quyền. Xóa thành công bỏ item và một Toast; lỗi giữ item. Không thu hồi tin đã gửi; cơ chế mềm/cứng và lưu kết quả còn cần xác nhận. |

### 2.4. Ràng buộc

#### Quyền

| Role/Điều kiện | Xem item/người nhận/kết quả | Tạo item | Gửi chung/riêng | Chọn/Đổi mẫu | Thao tác × | Sửa nội dung mẫu ở tab |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Admin trong phạm vi quản trị | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Class Handler đã được add vào lớp | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Support đã được add vào lớp | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Class Handler/Support chưa được add vào lớp | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Sale và các role khác | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

- Admin theo quyền quản trị chung; Class Handler/Support phải được add vào chính lớp. Được quản lý item của người khác trong phạm vi này, không kiểm tra owner như Ghi Chú/Lịch Hẹn. Gỡ khỏi lớp phải mất quyền ngay khi kiểm tra request.
- Chức năng quản lý mẫu là feature khác; quyền vào tab này không tự cấp quyền tạo/sửa định nghĩa mẫu.

#### Ràng buộc khác

**Phạm vi dữ liệu**

- Dùng định danh lớp/item/mẫu/học viên/liên kết CơmGao/cuộc hội thoại và platform, không ghép theo tên/email hiển thị. Kết quả gửi vẫn thuộc đúng item/người nhận khi giao diện đã chuyển lớp/tab.
- Nguồn mẫu/biến và đích CơmGao phải được đối chiếu đúng người. Tab này chỉ sử dụng dữ liệu nguồn, không tự sửa hồ sơ CơmGao hay tạo tài khoản platform mới.
- Không tự gửi tới học viên lớp khác, mọi người trong CơmGao hoặc phụ huynh không được cấu hình làm đích nhận. Gửi full chỉ áp dụng danh sách của một item.
- Không thêm lịch gửi tự động, tạo mẫu mới, thu hồi tin đã gửi hay nhật ký Hệ thống tự ghi action gửi tin nhắn khi chưa có yêu cầu riêng.

---

## 3. Testcase

### Feature: Chi tiết lớp học — Menu Nhật ký — Tab Tin nhắn

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Xem danh sách đúng lớp | High · Smoke | Flow 1 / REQ01 | Admin / Class Handler / Support có quyền tương ứng | Lớp A/B có item khác nhau | **Given** mở Chi tiết lớp A<br>**When** chọn Tin Nhắn<br>**Then** chỉ tải item A | - Đúng Tiêu đề/Tin nhắn/Ngày tạo/Số người đã gửi<br>- Không trộn B |
| Case 2: Mở và thu gọn học viên | Medium | REQ01 | Admin / Class Handler / Support có quyền tương ứng | Item có người nhận | **Given** item đang thu gọn<br>**When** bấm mở rồi thu gọn<br>**Then** chỉ thay đổi hiển thị | - Không gửi tin nhắn<br>- Không đổi count/ngày tạo |
| Case 3: Count người gửi thành công | High | REQ06 | Admin / Class Handler / Support có quyền tương ứng | Item có 8 học viên; 3 thành công, 2 đang chờ, 3 lỗi/chưa gửi | **Given** tải hoặc tải lại item<br>**When** xem count<br>**Then** hiển thị 3/8 | - Không tính đang chờ/lỗi<br>- Không đếm số lần gửi hoặc số nền tảng |
| Case 4: Tải rỗng/lỗi và response cũ | High | EX01 / EX02 / REQ08 | Admin / Class Handler / Support có quyền tương ứng | Request chậm/lỗi hoặc chuyển lớp | **Given** mở tab A rồi chuyển B<br>**When** response A về muộn hoặc tải B lỗi<br>**Then** chỉ cập nhật đúng lớp và trạng thái | - Không coi lỗi là rỗng<br>- Có Thử lại<br>- Không tự gửi lại |
| Case 5: Quyền xem tab | High | EX03 / REQ08 | Admin / Class Handler / Support / Sale và role khác | Có tài khoản trong/ngoài phạm vi | **Given** mở tab hoặc request trực tiếp<br>**When** kiểm tra quyền<br>**Then** chỉ role và phạm vi được cấp quyền được xem | - Sale/role khác không được xem tab<br>- Không trả người nhận/nội dung/count ngoài quyền |
| Case 6: Search chỉ theo Tiêu đề tin nhắn | High | Flow 1 / REQ01 / REQ08 | Admin / Class Handler / Support có quyền tương ứng | Lớp A có item X chứa từ khóa trong Tiêu đề; item Y chỉ có từ khóa ở Mô tả/mẫu/thông tin học viên; lớp B có Tiêu đề trùng | **Given** đang mở Tin Nhắn lớp A<br>**When** search từ khóa theo cơ chế kích hoạt được chốt<br>**Then** chỉ trả item X của lớp A | - Không trả Y do khớp field khác<br>- Không trả item lớp B<br>- Xóa từ khóa khôi phục danh sách trong phạm vi lớp/quyền<br>- Không tạo hoặc gửi tin nhắn khi search |
| Case 7: Mở popup từ + | Medium | Flow 2 / REQ02 | Admin / Class Handler / Support có quyền tương ứng | Có quyền tạo theo quy tắc chốt | **Given** đang xem danh sách lớp A<br>**When** bấm +<br>**Then** mở đúng popup | - Có Tiêu đề/Mô tả/Mẫu/Nội dung/Hủy/Tạo mới<br>- Chưa gửi học viên |
| Case 8: Đổi mẫu và preview | High | REQ02 / REQ03 | Admin / Class Handler / Support có quyền tương ứng | Có 2 mẫu khác nội dung | **Given** popup đang mở<br>**When** chọn mẫu A rồi B<br>**Then** preview thuộc B | - Tên/định danh/nội dung khớp<br>- Giữ xuống dòng/placeholder từ nguồn |
| Case 9: Tạo item thành công | High · Smoke | Flow 2 / REQ02 / REQ07 | Admin / Class Handler / Support có quyền tương ứng | Mẫu và metadata hợp lệ theo rule chốt | **Given** nhập dữ liệu và chọn mẫu<br>**When** bấm Tạo mới<br>**Then** tạo một item cho đúng lớp | - Count ban đầu 0/T<br>- Không gửi tự động<br>- Một Toast Tạo tin nhắn thành công. |
| Case 10: Chưa chọn hoặc mẫu hết hiệu lực | High | EX04 / REQ02 | Admin / Class Handler / Support có quyền tương ứng | Popup đang mở; mẫu trống hoặc không còn khả dụng | **Given** không chọn mẫu hợp lệ<br>**When** bấm Tạo mới<br>**Then** không tạo item | - Lỗi field và Cảnh Báo<br>- Không tự chọn mẫu khác<br>- Không gửi học viên |
| Case 11: Hủy và tạo lỗi/chống lặp | High | EX05 / REQ02 / REQ07 | Admin / Class Handler / Support có quyền tương ứng | Có dữ liệu chưa lưu hoặc backend lỗi | **Given** Hủy hoặc bấm Tạo mới lặp<br>**When** xử lý đóng/lưu<br>**Then** Hủy không lưu; lưu lỗi không thêm item | - Hủy không Toast<br>- Lỗi giữ dữ liệu để thử lại<br>- Một thao tác logic chỉ tạo tối đa một item |
| Case 12: Nội dung mẫu chỉ đọc | High | REQ02 / EX04 | Admin / Class Handler / Support | Có quyền tạo và mẫu hợp lệ | **Given** mẫu đang hiển thị trong popup<br>**When** thử sửa nội dung tại tab hoặc gửi request nội dung tùy ý<br>**Then** không cho sửa nội dung riêng, chỉ dùng nội dung mẫu nguồn | - UI chỉ đọc<br>- Không ghi đè mẫu/bản nội dung riêng<br>- Muốn sửa vào define theo quyền chức năng riêng |
| Case 13: Validation tiêu đề và mô tả bắt buộc | High | EX04 / REQ02 | Admin / Class Handler / Support | Có quyền tạo; mẫu hợp lệ | **Given** Tiêu đề hoặc Mô tả rỗng/chỉ khoảng trắng<br>**When** bấm Tạo mới<br>**Then** không tạo item, báo đúng field thiếu và Cảnh Báo | - Hai field đều bắt buộc<br>- Không tạo/gửi bản ghi thiếu dữ liệu<br>- Giữ dữ liệu đã nhập để sửa |
| Case 14: Tiêu đề và mô tả dài không giới hạn | Medium | REQ01 / REQ02 | Admin / Class Handler / Support | Có quyền tạo; mẫu hợp lệ | **Given** nhập Tiêu đề/Mô tả dài<br>**When** tạo thành công và tải lại<br>**Then** giữ toàn bộ giá trị, hiển thị phù hợp khi dài | - Không cắt hoặc từ chối vì giới hạn ký tự<br>- Metadata không tự thêm vào nội dung gửi |
| Case 15: Đúng học viên và dữ liệu hiển thị | High | REQ04 / REQ08 | Admin / Class Handler / Support có quyền tương ứng | Item có danh sách học viên của A | **Given** mở item<br>**When** xem tên/email/avatar<br>**Then** dữ liệu đúng người nhận | - Không trộn học viên lớp B<br>- Không lấy tên/email làm định danh |
| Case 16: Chọn nền tảng từng dòng | High | REQ04 | Admin / Class Handler / Support có quyền tương ứng | Học viên A/B có đích gửi phù hợp | **Given** A và B đang cùng platform<br>**When** đổi A sang Zalo<br>**Then** chỉ platform A đổi | - Đủ 5 lựa chọn đúng icon/nhãn<br>- B không đổi<br>- Không gửi khi chỉ chọn |
| Case 17: Đích gửi đúng CơmGao | High | REQ03 / REQ04 | Admin / Class Handler / Support có quyền tương ứng | A có nhiều platform; B trùng tên/email | **Given** chọn platform A<br>**When** gửi hoặc chuẩn bị gửi<br>**Then** dùng đúng hồ sơ và đích A trên platform đã chọn | - Không dùng email như địa chỉ chung cho các kênh<br>- Không gửi cho B |
| Case 18: Thiếu liên kết hoặc platform chưa khả dụng | High | EX06 / REQ04 | Admin / Class Handler / Support có quyền tương ứng | A thiếu tài khoản/cuộc hội thoại ở platform chọn | **Given** chọn platform đó<br>**When** kiểm tra hoặc thử gửi<br>**Then** không gửi sai đích và hiển thị lý do | - Không fallback sang kênh khác<br>- Count không tăng<br>- Không báo thành công giả |
| Case 19: Không gửi cho phụ huynh ngoài cấu hình | High | REQ04 / REQ08 | Admin / Class Handler / Support có quyền tương ứng | Tên học viên có thông tin PH | **Given** xem người nhận<br>**When** chuẩn bị gửi<br>**Then** dùng đích nhận được cấu hình cho học viên | - Không suy ra đích PH từ chuỗi tên<br>- Không ghép hồ sơ bằng tên |
| Case 20: Gửi xám do thiếu liên kết platform | High | REQ04 / EX06 | Admin / Class Handler / Support | A chưa liên kết Facebook nhưng có liên kết Zalo hợp lệ | **Given** A đang chọn Facebook<br>**When** xem nút Gửi rồi đổi sang Zalo<br>**Then** Facebook có nút xám/disabled và lý do; Zalo cho gửi khi đủ dữ liệu/quyền | - Chọn kênh không tự gửi<br>- Không suy ra đã gửi từ màu xám<br>- Không tự fallback khi chọn Facebook |
| Case 21: Thay biến riêng mỗi học viên | High | Flow 3 / REQ03 | Admin / Class Handler / Support có quyền tương ứng | A/B có name/address/phone khác nhau trong CơmGao | **Given** dùng cùng mẫu<br>**When** chuẩn bị/gửi A và B<br>**Then** nội dung từng người dùng dữ liệu của người đó | - Không lẫn thông tin A/B<br>- Giữ xuống dòng theo mẫu<br>- Không gửi placeholder chưa thay |
| Case 22: Thiếu biến hoặc CơmGao lỗi | High | EX07 / REQ03 | Admin / Class Handler / Support có quyền tương ứng | Biến cần dùng thiếu/không map hoặc nguồn lỗi | **Given** bấm gửi cho A<br>**When** không thể hoàn tất nội dung<br>**Then** không gửi A và báo lý do | - Count A không tăng<br>- Không dùng dữ liệu giả/user khác |
| Case 23: Gửi riêng đúng một người | High · Smoke | Flow 3 / REQ05 | Admin / Class Handler / Support có quyền tương ứng | A đủ điều kiện theo cấu hình | **Given** chọn platform A<br>**When** bấm Gửi tại A<br>**Then** chỉ gửi item này cho A | - Không gửi B hoặc item khác<br>- Kết quả/count chỉ cập nhật đúng item |
| Case 24: Gửi full theo platform mỗi người | High | Flow 4 / REQ05 | Admin / Class Handler / Support có quyền tương ứng | A chọn Facebook; B chọn Zalo; cả hai đủ điều kiện | **Given** item có A/B<br>**When** bấm Gửi chung<br>**Then** gửi A qua Facebook và B qua Zalo | - Không đồng loạt dùng platform đầu<br>- Nội dung cá nhân hóa riêng |
| Case 25: Gửi chung có thành công và lỗi | High | REQ05 / REQ06 / REQ07 | Admin / Class Handler / Support có quyền tương ứng | Có người hợp lệ và người gửi lỗi | **Given** gửi chung<br>**When** nhận kết quả hỗn hợp<br>**Then** giữ từng kết quả đúng người | - Người thành công được tính S<br>- Người lỗi/đang chờ chưa tính<br>- Thông báo kết quả hỗn hợp, không báo tất cả thành công |
| Case 26: Chống lặp gửi chung và riêng | High | EX08 / REQ05 | Admin / Class Handler / Support có quyền tương ứng | Cùng item/học viên đang gửi | **Given** bấm gửi lặp hoặc chung/riêng cùng lúc<br>**When** xử lý thao tác<br>**Then** chỉ một lần gửi logic cho cùng đích đang xử lý | - Không tạo request gửi trùng ngoài ý muốn<br>- Count không tăng hai lần<br>- Một Toast kết quả logic |
| Case 27: Timeout chưa rõ kết quả | High | EX09 / REQ05 | Admin / Class Handler / Support có quyền tương ứng | CơmGao/platform timeout sau tiếp nhận | **Given** request đã gửi<br>**When** chưa xác định kết quả<br>**Then** kiểm tra kết quả trước thử lại | - Không tự gửi lại<br>- Không báo thất bại hoặc thành công chắc chắn khi chưa biết<br>- Count không tăng sớm |
| Case 28: Lưu kết quả và đếm người duy nhất | High | REQ06 | Admin / Class Handler / Support có quyền tương ứng | A được xác nhận gửi thành công; có kết quả lưu | **Given** tải lại hoặc nhận callback trùng<br>**When** tính S/T<br>**Then** A chỉ được tính một người | - Kết quả đúng item/người/platform<br>- Không biến số lượt gửi thành số người<br>- Không mất lịch sử nội dung đã gửi |
| Case 29: Không gửi lại qua nút riêng và chung | High | EX10 / REQ05 | Admin / Class Handler / Support | A đã thành công, B chưa gửi; cả hai có liên kết | **Given** mở item với A/B<br>**When** bấm Gửi chung hoặc thử Gửi riêng A/request trực tiếp<br>**Then** chỉ B được gửi, A bị bỏ qua/chặn | - Không tăng S do A<br>- Đổi platform/mẫu không mở lại quyền gửi A<br>- User khác thao tác vẫn không được gửi lại A |
| Case 30: Không còn người gửi được | Medium | REQ05 / REQ06 | Admin / Class Handler / Support | Tất cả đã gửi hoặc chưa có liên kết nền tảng | **Given** mở item<br>**When** kiểm tra Gửi chung/riêng<br>**Then** không gửi request tới người đã gửi/không có liên kết | - Không báo thành công cho 0 người giả<br>- Nêu đúng lý do không có người đủ điều kiện<br>- Count giữ nguyên |
| Case 31: Kiểm tra quyền role và thành viên lớp | High | EX03 / REQ08 | Admin / Class Handler / Support | Admin chưa add vào lớp; Class Handler/Support có và không có trong lớp | **Given** kiểm tra UI hoặc request đổi mẫu/xóa<br>**When** xác thực quyền<br>**Then** Admin theo quyền quản trị được thao tác, Class Handler/Support chỉ được thao tác nếu đã add vào lớp | - Backend kiểm tra lại khi lưu/gửi<br>- Gỡ khỏi lớp mất quyền<br>- Không giới hạn theo người tạo item |
| Case 32: Đổi mẫu không sửa mẫu gốc/lịch sử gửi | High | REQ02 / REQ06 | Admin / Class Handler / Support có quyền tương ứng | Có quyền đổi mẫu theo rule chốt | **Given** item dùng mẫu A<br>**When** đổi sang B nếu được phép<br>**Then** item đổi mẫu, mẫu gốc và nội dung đã gửi giữ nguyên | - Không tự thu hồi/gửi lại<br>- Không tự reset S/T |
| Case 33: Hover ×, Hủy và xác nhận xóa | High | REQ01 / REQ08 | Admin / Class Handler / Support có quyền tương ứng | Item đủ điều kiện xóa theo nghiệp vụ | **Given** hover item và click ×<br>**When** Hủy hoặc confirm Xóa<br>**Then** Hủy giữ item; confirm thành công mới bỏ item | - Không nhầm với thu gọn<br>- Không gửi thao tác ra platform để thu hồi<br>- Hủy không Toast CRUD |
| Case 34: Quản lý item người khác tạo | High | REQ08 | Admin / Class Handler / Support | Item do A tạo; B là Class Handler/Support đã add vào lớp, C là Admin | **Given** B hoặc C mở item của A<br>**When** tạo/gửi/chọn mẫu/thao tác × theo nghiệp vụ được phép<br>**Then** không từ chối chỉ vì không phải người tạo | - Admin không cần add vào lớp<br>- Class Handler/Support ngoài lớp bị chặn<br>- Nội dung mẫu vẫn chỉ đọc |
| Case 35: Xóa lỗi và chống lặp confirm | High | Flow 5 / EX11 / REQ09 | Admin / Class Handler / Support | Popup xóa đang mở; backend lỗi hoặc confirm lặp | **Given** xác nhận Xóa<br>**When** xử lý lỗi/lặp<br>**Then** không xóa nhầm/nhân đôi thao tác | - Lỗi giữ item và một Toast lỗi<br>- Thành công bỏ đúng item, một Toast thành công<br>- Không thu hồi tin nhắn trên platform |
| Toast Case 1: Toast tạo item khác Toast gửi | High | REQ07 | Admin / Class Handler / Support có quyền tương ứng | Dữ liệu tạo hợp lệ | **Given** bấm Tạo mới<br>**When** backend lưu item<br>**Then** chỉ Toast Tạo tin nhắn thành công. | - Không báo đã gửi học viên<br>- Count vẫn 0/T |
| Toast Case 2: Toast kết quả gửi riêng | High | REQ07 | Admin / Class Handler / Support có quyền tương ứng | Một lần gửi có kết quả xác định | **Given** gửi cho A<br>**When** thành công hoặc lỗi<br>**Then** Toast đúng trạng thái và tên A | - Không dùng tên B<br>- Không tăng count khi lỗi |
| Toast Case 3: Toast kết quả gửi chung hỗn hợp | High | REQ07 | Admin / Class Handler / Support có quyền tương ứng | Đợt chung có thành công/lỗi/bỏ qua/chờ | **Given** gửi chung<br>**When** cập nhật kết quả<br>**Then** hiển thị tổng kết số thực tế | - Không báo tất cả thành công<br>- Không spam Toast mỗi học viên |
| Toast Case 4: Đang gửi và đóng/chống trùng | Medium | REQ07 | Admin / Class Handler / Support có quyền tương ứng | Đang chờ kết quả hoặc callback trùng | **Given** Toast đang hiển thị<br>**When** bấm × hoặc callback lặp<br>**Then** đóng được và không nhân đôi thông báo | - Đóng không hủy gửi<br>- Đang gửi không phải thành công<br>- Không lộ lỗi kỹ thuật |

---

## 4. Câu hỏi cần xác nhận

- **Q01:** × hiện khi hover, click mở popup và confirm mới xóa đã chốt. Cần xác nhận xóa mềm/cứng, quyền xóa item đã gửi và yêu cầu lưu kết quả gửi sau xóa.
- **Q02:** Thiết kế hiển thị Đã gửi và lý do không gửi được trên từng dòng chưa có ảnh chi tiết; không gửi lại đã chốt.
- **Q03:** Đổi mẫu chỉ ảnh hưởng lần gửi của người chưa gửi; không reset count/cho gửi lại. Khi sửa mẫu gốc tại define, item dùng bản mới nhất hay bản chụp lúc tạo cần chốt.
- **Q04:** Tập người nhận gồm những trạng thái học viên nào; cố định lúc tạo hay theo danh sách lớp hiện tại; học viên rời/thêm lớp có thay T không? Platform mặc định và việc lưu lựa chọn theo item/học viên.
- **Q05:** Danh sách mẫu/mapping biến và ý nghĩa các placeholder cụ thể do chức năng mẫu/CơmGao cung cấp; thời điểm lấy dữ liệu, field bắt buộc và xử lý biến tùy chọn trống. Chưa có requirement nguồn mẫu tương ứng trong repo để dẫn chiếu.
- **Q06:** Đích gửi và cấu hình khả dụng của từng nền tảng, đặc biệt Website; cách xác định thành công/tình trạng gửi từ nguồn. Dropdown trong ảnh không thay đặc tả tích hợp gửi của CơmGao.
- **Q07:** Thời điểm kích hoạt search (Enter/debounce); sắp xếp mặc định, phân trang/số item mỗi trang; UI kết quả/lỗi từng người và lịch sử lần gửi chưa thể hiện rõ trong ảnh.
