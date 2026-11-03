# [Giáo viên] Lịch dạy

Tài liệu đặc tả menu **Lịch dạy** của role Giáo viên, gồm hai tab: `Lịch dạy` và `Quản lý đăng ký lịch`. UI tham chiếu từ MCP Figma: `GV-LD-010000`, `GV-LD-020000`, `GV-LD-020010`. Tên người, mã lớp, ngày giờ và ghi chú trong ảnh là dữ liệu mẫu. Nghiệp vụ dùng chung với [Chi tiết giáo viên — Lịch dạy và Quản lý đăng ký lịch](../../management_requirement/teacher_management/teacher_detail_requirements.md), [Chi tiết lớp — Lịch dạy](../../management_requirement/class_management/class_detail_schedule_requirements.md) và [Giáo viên — Bài học](../class/class_teaching_requirements.md).

## 1. UI

### Trang 1: GV-LD-010000 — Tab Lịch dạy

![Figma mới nhất · GV-LD-010000](https://ics-figma-demo.vercel.app/api/figma-frame/GV-LD-010000.png)

![Trang 1](./images/teaching-schedule-by-class.png)

*Lịch tuần ở chế độ Theo lớp (Figma GV-LD-010000) — nhấn để xem ảnh gốc*

**Mô tả:**

- Giáo viên xem **chỉ các lịch được phân công cho chính mình**, ở các lớp và trong tuần đang chọn. Đây là phạm vi đã được người dùng xác nhận; không liệt kê lịch của giáo viên khác dù cùng lớp.
- Tab này chỉ hiển thị; thẻ lịch không có hành động khi bấm, không mở popup hoặc điều hướng. Không thêm, sửa, kéo thả đổi giờ, xóa, hủy, hoàn thành hoặc mở lại lịch tại đây. Lịch dạy do người có quyền quản lý xếp; đăng ký khung giờ rảnh được thực hiện ở tab riêng.

**Giải thích field/thành phần:**

- `A01.01` **Tiêu đề / tab**: Tiêu đề `Lịch Dạy`; tab `Lịch dạy` và `Quản lý đăng ký lịch`. Mặc định mở tab Lịch dạy.
- `A01.02` **Tuần đang xem**: Mặc định tuần chứa ngày hiện tại, Thứ 2 đến Chủ Nhật, theo quy tắc chung của tab Lịch dạy trong Chi tiết giáo viên. Khoảng ngày dạng `dd.MM.yyyy - dd.MM.yyyy`, ngày đầu không sau ngày cuối.
- `A01.03` **Mũi tên trái / phải**: Lùi / tiến đúng một tuần; tải lịch tương ứng và cập nhật cả khoảng ngày, cột ngày và thẻ lịch.
- `A01.04` **Cột ngày**: Thứ 2 … Thứ 7, Chủ Nhật; mỗi cột có ngày `dd.MM`. Làm nổi bật ngày hiện tại nếu nằm trong tuần đang xem.
- `A01.05` **`Theo lớp`**: Bật: nhóm lịch theo lớp, mỗi nhóm có thanh tiêu đề mã lớp. Tắt: gom theo ngày, không chia nhóm lớp. Mặc định bật theo frame tham chiếu; quy tắc ghi nhớ lựa chọn giữa các lần mở cần xác nhận.
- `A01.06` **Thanh nhóm lớp**: Mã lớp của đúng nhóm. Chỉ nhóm các lịch trong phạm vi của giáo viên đang đăng nhập; không vì cùng lớp mà tải thêm lịch của giáo viên khác.
- `A01.07` **Thẻ lịch**: Avatar và tên giáo viên được phân công, mã lớp, giờ bắt đầu–kết thúc. Với phạm vi đã chốt, giáo viên trên thẻ là chính giáo viên đang đăng nhập. Giờ theo timezone nghiệp vụ; cách trình bày theo UI `hh:mm am/pm`. Chỉ hiển thị; bấm thẻ không mở popup, không điều hướng và không thực hiện thao tác dữ liệu.
- `A01.08` **Sắp xếp thẻ**: Trong cùng ngày và cùng nhóm, giờ bắt đầu tăng dần. Chế độ không nhóm lớp vẫn giữ thứ tự thời gian.
- `A01.09` **Ô không có lịch**: Ô trống viền nét đứt, không có nút `+`. Cả tuần không có lịch thì giữ lưới tuần trống; vẫn chuyển tuần/đổi chế độ được.
- `A01.10` **Nhiều lịch trong ngày**: Mở rộng hoặc cuộn để xem đủ; số hàng trong ảnh không phải giới hạn số buổi. Không chồng thẻ che nội dung.

**Điểm cần lưu ý:**

- Backend kiểm tra danh tính giáo viên và phân công trên lịch, không chỉ kiểm tra giáo viên có trong lớp. Không tin `teacher_id` do client tự thay để xem lịch người khác.
- Cùng một lịch chỉ hiển thị một lần. Khi lịch cố định đã có bản ghi lịch thực tế/điều chỉnh tương ứng, không render cả bản cố định và bản ghi thay thế thành hai buổi.
- Chuyển tuần/chuyển chế độ không tạo lịch, không đổi trạng thái buổi, không phát sinh lương. Tập lịch trước và sau khi bật/tắt `Theo lớp` phải giống nhau.
- Chỉ response của request mới nhất được hiển thị; không trộn thẻ tuần cũ vào header tuần mới.
- Lịch bị xóa không hiển thị. Lịch Hủy bỏ vẫn hiển thị trong đúng tuần và phạm vi phân công của giáo viên, màu xám; thẻ không có hành động. Lịch dời/thay giáo viên được ghi ở Cần xác nhận.
- Khoảng ngày `31.01.2026 - 06.01.2026` trên Figma là dữ liệu mẫu không hợp lệ; ứng dụng tính tuần thật, không sao chép chuỗi này.
- Figma có thẻ mang tên người khác trong một nhóm. Phạm vi đã chốt ưu tiên hơn dữ liệu mẫu: chỉ lịch phân công cho người đang đăng nhập.

**Màu thẻ và trạng thái nghiệp vụ:**

- `A01.11` **Viền thẻ tại menu này**: Quy tắc: Dùng quy ước thời gian của tab Lịch dạy trong Chi tiết giáo viên: với lịch không hủy: ngày đã qua xanh lá, ngày hiện tại cam, ngày tương lai xanh dương. Lịch Hủy bỏ luôn màu xám, ưu tiên hơn màu theo ngày. Có thông tin ngày giờ và tên trạng thái để không chỉ dựa vào màu.
- `A01.12` **Lịch Hủy bỏ**: Quy tắc: Vẫn hiển thị thẻ màu xám, kể cả lịch đã qua, hôm nay hoặc tương lai. Nhãn/tooltip trạng thái là `Hủy bỏ`; không tạo hành động trên thẻ.
- `A01.13` **Trạng thái lịch**: Quy tắc: Là dữ liệu nghiệp vụ riêng: Đang đợi / Hoàn thành / Hủy bỏ. Không đổi trạng thái chỉ vì đã qua ngày/giờ.
- `A01.14` **Lương**: Quy tắc: Viền xanh lá không chứng minh đã Hoàn thành hay đã được tính lương. Hoàn thành qua luồng Bài học và lịch được gắn mới làm phát sinh lương theo requirement đã chốt.
- `A01.15` **Khác màn quản lý lịch lớp**: Quy tắc: Tab Lịch dạy ở Chi tiết lớp dùng màu loại/trạng thái lịch (Cố định, Linh hoạt, Hoàn thành, Hủy bỏ); không lấy màu theo thời gian tại menu này để thay đổi dữ liệu của tab đó.

### Trang 2: GV-LD-020000 — Tab Quản lý đăng ký lịch

![Figma mới nhất · GV-LD-020000](https://ics-figma-demo.vercel.app/api/figma-frame/GV-LD-020000.png)

![Trang 2](./images/schedule-registration.png)

*Lưới đăng ký 3 buổi × 7 thứ, Fulltime và ghi chú chung (Figma GV-LD-020000) — nhấn để xem ảnh gốc*

**Mô tả:**

- Giáo viên xem và cập nhật lịch đăng ký khung giờ rảnh **của chính mình**, dùng để người quản lý tham khảo khi xếp lịch dạy.
- Đây là cấu hình theo thứ và buổi, không phải danh sách buổi học thực tế trong tuần đang xem. Tick ô rảnh không tạo lịch dạy, không hoàn thành buổi và không phát sinh lương.
- Cùng dữ liệu với tab Quản lý đăng ký lịch ở Chi tiết giáo viên; không tạo hai lịch riêng cho màn quản lý và màn giáo viên.

**Giải thích field/thành phần:**

- `A02.01` **Cột thứ**: Thứ 2 … Thứ 7, Chủ nhật; tổng 7 cột.
- `A02.02` **Hàng buổi**: Sáng `07h30 - 12h00`, Chiều `14h00 - 18h00`, Tối `18h00 - 23h00`. Mỗi cặp thứ–buổi là một ô, tối đa 21 ô.
- `A02.03` **Ô chưa đăng ký**: Checkbox trống. Tick mở popup `Đăng ký khung giờ` cho đúng thứ/buổi; chưa chọn hợp lệ và xác nhận thì chưa thêm ô vào nháp.
- `A02.04` **Ô đã đăng ký**: Checkbox tick, nền cam, ghi chú ngắn nếu có và icon bút. Hover hiện ghi chú đầy đủ; không dùng câu hướng dẫn tooltip trên ảnh làm nội dung ghi chú.
- `A02.05` **Icon bút**: Mở popup với giờ/ghi chú hiện hành của đúng ô để chỉnh sửa nháp.
- `A02.06` **Bỏ tick một ô**: Gỡ ô khỏi nháp; backend chưa thay đổi trước khi bấm Cập nhật.
- `A02.07` **Bật `Fulltime`**: **Đã chốt:** chọn các ô còn trống với khung giờ trọn buổi; giữ nguyên giờ và ghi chú của ô đã đăng ký, không ghi đè bằng trọn buổi.
- `A02.08` **Bỏ tick `Fulltime`**: **Đã chốt:** bỏ chọn tất cả ô đang được chọn trong nháp. Chỉ lưu chính thức khi bấm `Cập nhật`; không tự sửa lịch dạy đã xếp.
- `A02.09` **Trạng thái `Fulltime`**: Tick khi đủ 21 ô được chọn, kể cả có ô được chỉnh giờ riêng; bỏ chọn một ô thì tự bỏ tick. Fulltime tại đây là chọn đủ ô, không dùng để thay thế dữ liệu giờ cụ thể từng ô. Chủ động bỏ tick Fulltime sẽ bỏ chọn toàn bộ ô đang được chọn trong nháp; chưa cập nhật backend.
- `A02.10` **Ghi chú chung**: Trường văn bản dưới lưới, không bắt buộc, độc lập với ghi chú từng ô. Placeholder `gửi tới người phỏng vấn` trên Figma là nội dung mẫu chưa phù hợp ngữ cảnh, cần thống nhất lại nhãn gợi ý.
- `A02.11` **`Cập nhật`**: Lưu toàn bộ nháp gồm tập ô, giờ, ghi chú từng ô và ghi chú chung. Chỉ sau lưu thành công dữ liệu mới thành lịch đăng ký chính thức.

**Điểm cần lưu ý:**

- Một ô đã đăng ký được tính là 1 ca, dù chỉ chọn một phần buổi. Số ngày = số thứ có ít nhất một ca; số ca = số ô đã chọn, tối đa 21. Mỗi ô có một khung liên tục theo popup hiện tại.
- Ví dụ ô T2–Chiều đã có `14:30–17:00` và ghi chú riêng: bật Fulltime giữ nguyên ô đó, thêm những ô trống bằng khung trọn buổi tương ứng. Không reset ghi chú hoặc giờ của ô T2–Chiều.
- Xác nhận popup, tick/gỡ ô, Fulltime và nhập ghi chú chỉ sửa nháp. Không tự lưu từng ô lên backend.
- Rời tab/menu khi có thay đổi chưa lưu phải cảnh báo để người dùng giữ lại hoặc bỏ thay đổi. Không tự làm mất nháp nếu request cập nhật thất bại.
- Trong khi lưu, chặn gửi lặp và chỉnh sửa gây không nhất quán; một request lưu toàn bộ lịch, không lưu thành công một phần số ô.
- Thành công: phản ánh lịch chính thức mới, trạng thái nháp sạch; màn Chi tiết giáo viên và Danh sách giáo viên đọc cùng dữ liệu khi tải lại. Hiển thị một thông báo kết quả; nội dung thông báo cụ thể cần xác nhận.
- Thất bại: dữ liệu chính thức giữ nguyên, giữ nháp để thử lại, báo lỗi; không cho màn khác thấy nháp như dữ liệu đã lưu.
- Nếu người quản lý/giáo viên đã cập nhật phiên bản mới trong lúc đang chỉnh, không âm thầm ghi đè. Giữ nháp, thông báo xung đột và cho tải dữ liệu mới theo cơ chế dùng chung.
- Backend tự xác định owner/actor từ phiên đăng nhập khi giáo viên tự cập nhật; không cho sửa lịch đăng ký của người khác bằng request trực tiếp.
- Không tự xóa, dời hoặc đổi giáo viên của lịch dạy đã được xếp chỉ vì đổi lịch rảnh. Ví dụ giáo viên đã đăng ký rảnh T3–Chiều và được xếp buổi 15:00–16:00 vào T3: bỏ tick ô T3–Chiều chỉ là đổi đăng ký rảnh. **Đã chốt:** vẫn cho lưu lịch đăng ký bình thường khi bấm Cập nhật; không cảnh báo/chặn chỉ vì còn lịch đã phân công. Buổi 15:00–16:00 giữ nguyên, không phải thao tác hủy buổi dạy.

### Trang 3: GV-LD-020010 — Popup Đăng ký khung giờ

![Figma mới nhất · GV-LD-020010](https://ics-figma-demo.vercel.app/api/figma-frame/GV-LD-020010.png)

![Trang 3](./images/schedule-registration-slot.png)

*Popup Đăng ký khung giờ (Figma GV-LD-020010) — nhấn để xem ảnh gốc*

**Giải thích field/thành phần:**

- `A03.01` **Tiêu đề**: `Đăng ký khung giờ`.
- `A03.02` **Dòng phụ**: Đúng thứ, buổi và khung tương ứng ô đã bấm, ví dụ `Thứ 3 · Buổi chiều (14h00 – 18h00)`.
- `A03.03` **`Giờ bắt đầu` / `Giờ kết thúc`**: Bắt buộc. Chọn các mốc cách nhau 30 phút, nằm trong khung của buổi. Buổi sáng gồm các mốc 07:30–12:00, chiều 14:00–18:00, tối 18:00–23:00. Giờ kết thúc phải lớn hơn giờ bắt đầu.
- `A03.04` **Ghi chú**: Không bắt buộc, chỉ thuộc ô đang sửa; không ghi đè ghi chú chung. Giới hạn ký tự cần xác nhận.
- `A03.05` **`Huỷ`**: Đóng popup, không thay đổi nháp của ô; ô mới vẫn trống, ô đang sửa giữ giờ/ghi chú trước khi mở.
- `A03.06` **`Xác nhận`**: Validate và lưu vào nháp lưới; chưa ghi backend. Nếu thiếu giờ hoặc khoảng không hợp lệ, báo lỗi tại field và giữ popup để sửa.

**Điểm cần lưu ý:**

- Không dùng ghi chú tự do thay cho khoảng giờ chính thức. Ví dụ ghi chú `Trước 9h tối` trong ô Buổi sáng là dữ liệu mẫu; các giờ đã chọn vẫn là nguồn xác định lịch rảnh.
- Các mốc trong layer dropdown mẫu của Figma có giá trị ngoài buổi/nhãn giờ chưa nhất quán; danh sách thực tế phải sinh từ đúng khung buổi, không sao chép toàn bộ layer mẫu.
- Một ô hiện chỉ có một cặp bắt đầu–kết thúc. Popup chưa hỗ trợ nhiều đoạn rời nhau trong cùng ca; chưa coi câu `Toàn buổi trừ lúc 18h30` là cấu hình chặn riêng một khoảng phút.

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1 / REQ01–REQ02: Xem lịch dạy theo tuần**

```text
Giáo viên → Lịch dạy → tab Lịch dạy
  → Tải tuần hiện tại và lịch được phân công cho chính mình
  → Hiển thị lịch theo lớp, đủ 7 cột ngày
  → Bấm tuần trước/sau → tải đúng tuần mới, chỉ giữ response mới nhất
```

**Flow 2 / REQ03: Chuyển cách nhóm lịch**

```text
Bật Theo lớp → mỗi lớp một nhóm
Tắt Theo lớp → toàn bộ lịch cùng ngày xếp theo giờ
  → Giữ tuần và tập lịch của giáo viên; không cập nhật dữ liệu lịch
```

**Flow 3 / REQ06–REQ07: Chỉnh nháp lịch đăng ký**

```text
Quản lý đăng ký lịch → tải lịch đăng ký cá nhân mới nhất
  → Tick ô trống / bấm bút ô đã có → popup đúng thứ–buổi
  → Chọn giờ hợp lệ, nhập ghi chú nếu có
  → Xác nhận: cập nhật nháp ô / Huỷ: không đổi ô
  → Có thể bỏ tick để gỡ ô khỏi nháp
```

**Flow 4 / REQ08: Chọn Fulltime**

```text
Lưới có thể đã có ô với giờ/ghi chú riêng → tick Fulltime
  → Giữ nguyên ô đã đăng ký, thêm các ô trống bằng giờ trọn buổi
  → Đủ 21 ô trong nháp; backend chưa đổi
  → Chủ động bỏ tick Fulltime → bỏ chọn toàn bộ ô đang chọn trong nháp
  → Hoặc bỏ chọn một ô riêng → Fulltime tự bỏ tick, chỉ gỡ ô đó và giữ các ô còn lại
  → Bấm Cập nhật mới ghi thay đổi chính thức
```

**Flow 5 / REQ09–REQ11: Lưu lịch đăng ký**

```text
Giáo viên bấm Cập nhật → validate toàn bộ nháp và quyền
  → Kiểm tra phiên bản dữ liệu hiện hành
  → Hợp lệ: lưu toàn bộ, ghi đúng owner/actor → thông báo thành công
  → Lỗi: dữ liệu chính thức không đổi, giữ nháp, báo lỗi
  → Xung đột: không âm thầm ghi đè, giữ nháp để xử lý với dữ liệu mới
```

### 2.2. Ngoại lệ

- **EX01:** Truy cập lịch người khác, thay owner/actor hoặc cập nhật lịch dạy trái quyền → backend từ chối; không tiết lộ/cập nhật dữ liệu ngoài phạm vi.
- **EX02:** Tuần không có lịch dạy → lưới trống; chưa đăng ký ca nào → lưới đăng ký trống. Không coi trạng thái chưa có dữ liệu là lỗi; khả năng lưu một lịch đăng ký rỗng cần xác nhận.
- **EX03:** Tải lịch hoặc đăng ký thất bại → lỗi có Thử lại, không dùng dữ liệu mẫu hoặc dữ liệu người/tuần khác thay thế.
- **EX04:** Thiếu giờ, ngoài khung buổi, sai mốc 30 phút hoặc kết thúc không lớn hơn bắt đầu → không nhận nháp ô/lưu backend, chỉ rõ lỗi để sửa.
- **EX05:** Lưu thất bại hoặc bấm lặp → không lưu một phần, giữ nháp; chặn gửi lặp trong khi đang xử lý.
- **EX06:** Phiên bản lịch đăng ký đã thay đổi → báo xung đột, không âm thầm ghi đè.
- **EX07:** Rời màn khi có nháp chưa lưu → cảnh báo; ở lại giữ nháp, bỏ thay đổi thì không tự lưu.

### 2.3. Yêu cầu khác

| Mã | Tên yêu cầu | Mô tả |
|---|---|---|
| REQ01 | Phạm vi lịch dạy | Chỉ lịch có giáo viên được phân công là người đang đăng nhập; không lấy toàn bộ lịch của lớp chỉ vì người đó tham gia lớp. Backend kiểm tra phạm vi. |
| REQ02 | Tuần | Mặc định tuần hiện tại, Thứ 2–Chủ Nhật, mũi tên dịch một tuần; header và thẻ cùng khoảng theo timezone nghiệp vụ. |
| REQ03 | Cách trình bày | Theo lớp hoặc theo ngày, cùng tập lịch; mỗi lịch một thẻ, sắp tăng theo giờ trong ngày; đủ chỗ xem mọi lịch. |
| REQ04 | Màu và nghiệp vụ | Lịch Hủy bỏ vẫn hiển thị màu xám, ưu tiên hơn màu thời gian và không phát sinh lương. Lịch không hủy dùng màu theo ngày. Màu thời gian không tự thay trạng thái hoặc ghi nhận lương; không đánh đồng lịch đã qua với buổi đã hoàn thành. |
| REQ05 | Lịch dạy chỉ đọc | Thẻ chỉ hiển thị, không có hành động khi bấm, không mở popup và không điều hướng. Không CRUD/hủy/hoàn thành/mở lại trực tiếp tại tab này. Giáo viên hoàn thành qua luồng Bài học được cấp quyền theo requirement riêng. |
| REQ06 | Lịch đăng ký | Lưới 3 buổi × 7 thứ của chính giáo viên; một ô một khung giờ và ghi chú riêng; một ô là một ca, tối đa 21. Ghi chú chung độc lập. Không tạo buổi dạy/lương từ lịch đăng ký. |
| REQ07 | Popup | Giờ bắt đầu/kết thúc bắt buộc, đúng khung buổi và mốc 30 phút, kết thúc sau bắt đầu; xác nhận chỉ cập nhật nháp, hủy không đổi ô. Backend validate lại khi lưu. |
| REQ08 | Fulltime | Bật chọn thêm ô trống với giờ trọn buổi, không đổi giờ/ghi chú ô cũ. Tick khi đủ 21 ô; gỡ một ô tự bỏ tick. Chủ động bỏ Fulltime sẽ bỏ chọn toàn bộ ô đang chọn trong nháp; chỉ bấm Cập nhật mới ghi backend. Fulltime tự bỏ tick do gỡ một ô riêng không kích hoạt gỡ toàn bộ. |
| REQ09 | Nháp và lưu | Chỉ Cập nhật mới ghi toàn bộ lịch đăng ký chính thức; không lưu từng ô. Chặn gửi lặp, lưu toàn bộ hoặc không lưu; lỗi giữ nháp, rời màn cảnh báo khi chưa lưu. |
| REQ10 | Đồng bộ và xung đột | Dùng cùng nguồn với màn quản lý; chỉ response mới nhất cập nhật UI; phát hiện sửa đồng thời thay vì âm thầm ghi đè. Bỏ khung giờ rảnh vẫn cho lưu bình thường dù có lịch dạy đã phân công trong khung đó; không cảnh báo/chặn vì lý do này và không tự sửa/hủy/xóa lịch dạy đã xếp. |
| REQ11 | Quyền và audit | Giáo viên chỉ xem/cập nhật đăng ký của mình; server kiểm tra phiên đăng nhập, trạng thái tài khoản và phạm vi. Cập nhật bởi giáo viên ghi đúng owner/actor; quản lý cập nhật thay theo requirement Chi tiết giáo viên. |

### 2.4. Ràng buộc

#### Quyền

| Role / ngữ cảnh | Xem lịch được phân công cho mình | Xem/sửa đăng ký của mình | CRUD lịch dạy trực tiếp tại menu này | Sửa đăng ký giáo viên khác từ menu này |
|---|:---:|:---:|:---:|:---:|
| Giáo viên đang được phép truy cập hệ thống | ✅ | ✅ | ❌ | ❌ |
| Admin / Class Handler / Support | Theo màn quản lý được cấp quyền | Cập nhật thay tại Chi tiết giáo viên theo requirement riêng | Theo màn quản lý được cấp quyền, không dùng quyền Giáo viên để bypass | Theo phạm vi quản lý, không qua menu cá nhân này |

#### Ràng buộc khác

**Phạm vi dữ liệu**

- Khóa nhận diện lịch là ID lịch/buổi và giáo viên; không dùng tên, mã lớp hiển thị hoặc vị trí ô làm khóa cập nhật.
- Khóa ô đăng ký là giáo viên + thứ + buổi. Dữ liệu từng ô và ghi chú chung phải thuộc cùng một phiên bản lịch đăng ký.
- Không cho phép thực hiện hành động đánh dấu `❌`, kể cả qua URL hoặc request trực tiếp.
- Lịch đăng ký không ghi đè cấu hình lịch cố định/linh hoạt của lớp, không đảo lương và không hồi tố lương buổi đã hoàn thành.

---

---

## 3. Testcase

### Feature: [Giáo viên] Lịch dạy

| Tên testcase | Priority | Scenario | Role | Pre-condition | Given/When/Then | Expected Result |
|---|---|---|---|---|---|---|
| Case 1: Mở lịch tuần hiện tại | High · Smoke | Flow 1 / REQ01 | Giáo viên | Có lịch của G ở tuần hiện tại và tuần khác | **Given** G mở menu Lịch dạy<br>**When** tải thành công<br>**Then** hiển thị tuần hiện tại, đúng 7 ngày và lịch được phân công cho G | - Không trộn tuần khác<br>- Ngày hiện tại được đánh dấu đúng |
| Case 2: Chặn lịch giáo viên khác cùng lớp | High | REQ01 / EX01 | Giáo viên | Lớp A có lịch của G và H; G tham gia A | **Given** G mở lịch<br>**When** xem nhóm A và thử thay teacher_id trong request<br>**Then** chỉ được xem lịch phân công cho G | - Không trả lịch H<br>- Không chỉ lọc theo quan hệ giáo viên–lớp |
| Case 3: Chuyển tuần qua tháng/năm | High | Flow 1 / REQ02 | Giáo viên | Tuần đang xem đi qua cuối tháng hoặc cuối năm | **Given** bấm trái/phải<br>**When** tải xong<br>**Then** dịch đúng 7 ngày và header khớp thẻ lịch | - Ngày đầu không sau ngày cuối<br>- Không dùng khoảng ngày mẫu sai trên Figma |
| Case 4: Bật và tắt Theo lớp | High | Flow 2 / REQ03 | Giáo viên | G có lịch ở hai lớp cùng tuần | **Given** chuyển giữa hai chế độ<br>**When** render lại<br>**Then** tập lịch không thay đổi, chỉ khác cách nhóm | - Giữ tuần đang chọn<br>- Không mất/nhân đôi lịch<br>- Cùng ngày sắp theo giờ tăng dần |
| Case 5: Tuần không có lịch | Medium | EX02 / REQ02 | Giáo viên | Tuần chọn không có lịch của G | **Given** chuyển tới tuần đó<br>**When** tải thành công<br>**Then** lưới trống đúng tuần | - Không giữ thẻ tuần trước<br>- Không coi là lỗi<br>- Không có nút thêm lịch |
| Case 6: Nhiều lịch và bản ghi thay thế | High | REQ03 | Giáo viên | Một ngày có trên 3 lịch; một lịch cố định đã có bản ghi thực tế | **Given** xem ngày đó<br>**When** tổng hợp lịch<br>**Then** truy cập được mọi lịch, mỗi lịch một thẻ | - Không cắt lịch thứ tư trở đi<br>- Không nhân đôi lịch cố định và bản ghi tương ứng |
| Case 7: Màu thời gian không tự hoàn thành lịch | High | REQ04 | Giáo viên | Lịch Đang đợi đã qua ngày; có lịch hôm nay và tương lai | **Given** xem thẻ<br>**When** tính màu<br>**Then** màu theo ngày nhưng trạng thái/lương không thay đổi | - Lịch đã qua vẫn Đang đợi<br>- Không tự tạo khoản lương |
| Case 7a: Lịch hủy vẫn hiển thị màu xám | High | REQ01 / REQ04–REQ05 | Giáo viên | G có lịch Hủy bỏ ở ngày đã qua, hôm nay và tương lai; H có lịch hủy cùng lớp | **Given** G xem từng tuần và hai chế độ nhóm<br>**When** tải lịch<br>**Then** lịch Hủy bỏ phân công cho G vẫn hiện màu xám và tên trạng thái đúng | - Màu xám ưu tiên hơn xanh lá/cam/xanh dương<br>- Không hiện lịch H, không có action trên thẻ<br>- Không phát sinh lương từ lịch hủy |
| Case 8: Lịch dạy chỉ đọc | High | REQ05 / EX01 | Giáo viên | Có lịch đã phân công | **Given** kiểm tra UI và gọi request sửa/xóa/hủy/hoàn thành/mở lại lịch trực tiếp<br>**When** backend kiểm tra quyền<br>**Then** từ chối thao tác ngoài luồng dạy được cấp quyền | - Không có nút CRUD hay kéo thả chỉnh giờ<br>- Lịch và lương không đổi |
| Case 8a: Thẻ lịch không có hành động | High | REQ05 | Giáo viên | Lịch tuần đã tải, ở chế độ Theo lớp hoặc theo ngày | **Given** giáo viên bấm thẻ lịch hoặc mã lớp/tên giáo viên trên thẻ<br>**When** tương tác<br>**Then** không mở popup, không điều hướng và không gửi request thay đổi | - Giữ nguyên tuần/chế độ đang xem<br>- Không có menu thao tác, không cập nhật lịch/lương |
| Case 9: Tải lỗi và response cũ | High | EX03 / REQ10 | Giáo viên | Request tuần trước trả sau tuần mới, hoặc API tải lỗi | **Given** đổi tuần nhanh hoặc gặp lỗi<br>**When** nhận response<br>**Then** chỉ hiển thị dữ liệu đúng lựa chọn mới nhất hoặc lỗi có Thử lại | - Không gán lịch cũ vào header mới<br>- Không hiển thị lỗi như tuần không có lịch |
| Case 10: Tải đúng lịch đăng ký cá nhân | High · Smoke | Flow 3 / REQ06 | Giáo viên | G đã đăng ký 3 ô T2 với giờ và ghi chú riêng | **Given** G mở tab Quản lý đăng ký lịch<br>**When** tải xong<br>**Then** đúng 3 ô được tick và hiển thị ghi chú tương ứng | - Không trộn lịch H<br>- Ghi chú chung độc lập với ghi chú từng ô |
| Case 11: Thêm ô mới vào nháp | High | Flow 3 / REQ06–REQ07 | Giáo viên | Ô T3–Chiều trống | **Given** tick ô và chọn 14:30–17:00 trong popup<br>**When** Xác nhận<br>**Then** ô được thêm vào nháp | - Backend chưa lưu<br>- Hover hiện ghi chú của chính ô đó |
| Case 12: Sửa và gỡ ô | High | Flow 3 / REQ06–REQ07 | Giáo viên | Ô đã có giờ và ghi chú | **Given** mở bằng icon bút rồi sửa/Xác nhận; sau đó bỏ tick một ô<br>**When** xem nháp<br>**Then** sửa đúng ô và gỡ đúng ô | - Chưa đổi dữ liệu chính thức<br>- Ô khác giữ nguyên |
| Case 13: Fulltime giữ dữ liệu ô đã đăng ký | High | Flow 4 / REQ08 | Giáo viên | T2–Chiều có 14:30–17:00 và ghi chú, còn ô trống | **Given** bật Fulltime<br>**When** xem nháp<br>**Then** đủ 21 ô, ô T2–Chiều giữ nguyên giờ/ghi chú, ô mới nhận trọn buổi | - Không reset nội dung cũ<br>- Chưa ghi backend |
| Case 14: Trạng thái Fulltime khi chỉnh một ô | Medium | REQ08 | Giáo viên | Đủ 21 ô, có ô dùng giờ riêng | **Given** tải lại dữ liệu rồi bỏ chọn một ô trong nháp<br>**When** cập nhật checkbox Fulltime<br>**Then** ban đầu được tick; còn 20 ô thì tự bỏ tick | - Giờ riêng không tự đổi<br>- Không đồng nghĩa xóa cả lưới |
| Case 14a: Chủ động bỏ tick Fulltime | High | Flow 4 / REQ08–REQ09 | Giáo viên | Fulltime đang tick, đủ 21 ô trong nháp | **Given** người dùng trực tiếp bỏ tick Fulltime<br>**When** lưới cập nhật<br>**Then** toàn bộ ô đang chọn bị bỏ tick | - Không chỉ đổi checkbox Fulltime<br>- Chưa cập nhật backend trước khi bấm Cập nhật<br>- Không xóa/dời lịch dạy đã xếp |
| Case 15: Cập nhật và đồng bộ dữ liệu | High · Smoke | Flow 5 / REQ09 | Giáo viên | Nháp hợp lệ có 2 ô cùng ngày và ghi chú chung | **Given** bấm Cập nhật<br>**When** lưu thành công rồi tải lại<br>**Then** giữ đúng 2 ô, giờ và ghi chú | - Danh sách giáo viên là 1 ngày (2 ca)<br>- Màn quản lý đọc cùng dữ liệu<br>- Ghi owner/actor là G |
| Case 16: Không tạo lịch dạy hoặc lương từ lịch rảnh | High | REQ06 / REQ09 | Giáo viên | Chưa có lịch dạy thực tế ở ca chọn | **Given** cập nhật lịch đăng ký thành công<br>**When** xem lịch dạy và lương<br>**Then** không tự xuất hiện buổi dạy hoặc khoản lương | - Lịch đăng ký không thay thế lịch đã xếp |
| Case 17: Lưu lỗi hoặc bấm lặp | High | EX05 / REQ09 | Giáo viên | Có nháp, request lưu chậm/lỗi | **Given** bấm Cập nhật nhiều lần<br>**When** đang xử lý hoặc trả lỗi<br>**Then** không gửi lặp, không lưu một phần | - Giữ dữ liệu chính thức khi thất bại<br>- Nháp không mất, thử lại được |
| Case 18: Cập nhật đồng thời | High | EX06 / REQ10 | Giáo viên | G và người quản lý cùng mở phiên bản cũ; người quản lý đã lưu trước | **Given** G gửi nháp cũ<br>**When** backend kiểm tra phiên bản<br>**Then** phát hiện xung đột, không âm thầm ghi đè | - Giữ nháp để đối chiếu/tải lại<br>- Không báo thành công giả |
| Case 19: Rời màn khi còn nháp | Medium | EX07 / REQ09 | Giáo viên | Có thay đổi chưa Cập nhật | **Given** rời tab/menu<br>**When** hệ thống cảnh báo<br>**Then** người dùng chọn ở lại hoặc bỏ thay đổi | - Ở lại giữ nháp<br>- Bỏ thay đổi không gửi request lưu |
| Case 20: Không sửa đăng ký của giáo viên khác | High | EX01 / REQ11 | Giáo viên | Có ID của H | **Given** G thay owner/teacher_id trong request<br>**When** backend xử lý<br>**Then** không cập nhật lịch H | - Không giả mạo actor<br>- Dữ liệu H giữ nguyên |
| Case 20a: Bỏ ca rảnh đang có lịch dạy vẫn lưu được | High | Flow 5 / REQ09–REQ10 | Giáo viên | G đăng ký T3–Chiều, đã được phân công buổi T3 15:00–16:00 | **Given** G bỏ tick T3–Chiều trong lịch đăng ký<br>**When** bấm Cập nhật với dữ liệu còn lại hợp lệ<br>**Then** lưu đăng ký bình thường, không cảnh báo/chặn do buổi đã xếp | - Ô T3–Chiều không còn trong đăng ký chính thức<br>- Buổi T3 15:00–16:00 giữ nguyên ID, giờ, giáo viên, trạng thái<br>- Không hủy/xóa/dời buổi và không đổi lương đã ghi nhận |
| Case 21: Mở đúng thứ và buổi | High | Flow 3 / REQ07 | Giáo viên | Bấm ô T3–Chiều | **Given** popup mở<br>**When** xem dòng phụ và dropdown<br>**Then** đúng T3, 14:00–18:00 và các mốc 30 phút | - Không có 07:00 hoặc 19:00 trong lựa chọn |
| Case 22: Bắt buộc giờ và đúng thứ tự | High | EX04 / REQ07 | Giáo viên | Popup đang mở | **Given** thiếu giờ, hai giờ bằng nhau hoặc kết thúc trước bắt đầu<br>**When** Xác nhận<br>**Then** không nhận vào nháp | - Lỗi đúng field<br>- Giữ popup và dữ liệu để sửa |
| Case 23: Kiểm tra biên và mốc giờ | High | EX04 / REQ07 | Giáo viên | Popup Sáng | **Given** chọn 07:30–12:00 hợp lệ rồi thử truyền 07:00–12:30 hoặc 07:45–09:00 bằng request<br>**When** validate<br>**Then** chỉ nhận khoảng trong buổi, đúng mốc 30 phút | - Backend kiểm tra lại dữ liệu khi Cập nhật<br>- Không chỉ giới hạn dropdown ở FE |
| Case 24: Huỷ thêm mới hoặc chỉnh sửa | Medium | Flow 3 / REQ07 | Giáo viên | Popup mở từ ô mới hoặc ô đã có dữ liệu | **Given** nhập giờ và ghi chú khác<br>**When** Huỷ<br>**Then** nháp ô trước khi mở không đổi | - Không tick ô mới<br>- Không ghi đè giờ/ghi chú ô cũ |
| Case 25: Một ca và ghi chú độc lập | Medium | REQ06–REQ07 | Giáo viên | Có ghi chú chung và nhiều ô | **Given** xác nhận một ô với khung 14:30–17:00 và ghi chú riêng<br>**When** xem nháp<br>**Then** ô tính là 1 ca và ghi chú chung không đổi | - Không tách thành nhiều ca theo số giờ |

---

---

## 4. Câu hỏi cần xác nhận

- **Q01:** Có cho lưu lịch đăng ký rỗng không. Việc bỏ khung giờ rảnh khi còn lịch dạy đã phân công đã chốt là vẫn lưu bình thường, không thay đổi buổi dạy đã xếp.
- **Q02:** Cách biểu diễn lịch dời/thay giáo viên. Lịch Hủy bỏ đã chốt vẫn hiển thị màu xám; thẻ chỉ hiển thị, không có hành động khi bấm, phạm vi chỉ lịch của mình.
- **Q03:** Có hỗ trợ chọn tuần bằng danh sách khi bấm khoảng ngày như màn quản lý không; giới hạn xem quá khứ/tương lai, ghi nhớ tuần và lựa chọn Theo lớp khi mở lại.
- **Q04:** Timezone nghiệp vụ và khung ba buổi là cố định toàn hệ thống hay theo trung tâm; lịch đăng ký có ngày hiệu lực hay chỉ mẫu lặp theo thứ.
- **Q05:** Giới hạn ký tự ghi chú riêng/chung; nội dung placeholder thay cho `gửi tới người phỏng vấn`; nội dung thông báo kết quả và cách xử lý xung đột cụ thể. Mỗi ô hiện chỉ hỗ trợ một khoảng liên tục theo popup Figma.

---

## 5. Nguồn đối chiếu và quyết định đã chốt

- Figma file `PLS-ICS T8/2026`, key `rRVs5HX0kIHffbS0V40djG`, page `5413:45647`; ba ảnh xuất từ node [GV-LD-010000](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/PLS-ICS-T8-2026?node-id=5413-46957), [GV-LD-020000](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/PLS-ICS-T8-2026?node-id=5413-49118), [GV-LD-020010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/PLS-ICS-T8-2026?node-id=5413-49911).
- Người dùng chốt tab Lịch dạy chỉ hiển thị, bấm thẻ không mở popup/điều hướng/thực hiện hành động; chỉ lịch được phân công cho giáo viên đang đăng nhập; bật Fulltime chọn các ô còn trống và giữ giờ/ghi chú ô đã đăng ký; chủ động bỏ Fulltime bỏ chọn toàn bộ ô đang chọn trong nháp, chưa lưu backend. Gỡ một ô riêng chỉ gỡ ô đó, dù làm Fulltime tự bỏ tick.
- Người dùng chốt bỏ khung giờ rảnh vẫn lưu bình thường dù có lịch dạy đã phân công; lịch dạy giữ nguyên. Lịch Hủy bỏ vẫn hiển thị màu xám, ưu tiên hơn màu theo ngày.
- Quy tắc tuần, nhóm theo lớp, màu theo thời gian và quyền chỉ đọc lấy từ requirement Chi tiết giáo viên. Quy tắc popup/lưu nháp dùng chung với tab Quản lý đăng ký lịch; phần Fulltime đã được thống nhất lại theo xác nhận trên.
- Đối chiếu tầng dữ liệu package ICS cũ `pls_repository_api`: `ScheduleFixedModel` có `teacher_id`, `class_id`, `week_day`, `time`, `duration`; `ScheduleEntryModel` có `teacher_id`, `class_id`, `datetime`, `status`, `schedule_id`, `lesson_result_id`. Các model này chứng minh lịch có phân công/thời gian/trạng thái riêng, không chứng minh một lịch đăng ký rảnh tự tạo lịch dạy.
- Chưa tìm thấy widget menu Lịch dạy/đăng ký của giao diện ICS cũ trong các source đang có; không coi nội dung Figma hoặc requirement mới là hành vi đã kiểm chứng từ widget cũ. Các điểm chưa đủ nguồn được giữ ở Cần xác nhận.
