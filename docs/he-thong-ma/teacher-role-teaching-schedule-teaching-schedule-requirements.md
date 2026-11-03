# [Giáo viên] Lịch dạy

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LD-020000` | Lịch dạy / Quản lý đăng ký lịch | `/lich-day/quan-ly-dang-ky-lich` | `GV-LD-020000-DK` | QC |

Requirement: `teacher_role/teaching_schedule/teaching_schedule_requirements.md` — [Giáo viên] Lịch dạy (tiền tố `TR-TS`).

## 2. Luồng

- `FLOW01` Xem lịch dạy theo tuần — `REQ01`, `REQ02`
- `FLOW02` Chuyển cách nhóm lịch — `REQ03`
- `FLOW03` Chỉnh nháp lịch đăng ký — `REQ06`, `REQ07`
- `FLOW04` Chọn Fulltime — `REQ08`
- `FLOW05` Lưu lịch đăng ký — `REQ09`, `REQ10`, `REQ11`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-LD-010000` | Xem theo lớp | Trạng thái | GV-LD-020000 | GV-LD-020000 | — | `/lich-day/quan-ly-dang-ky-lich?state=GV-LD-010000` | QC | trung bình |
| `GV-LD-020010` | Popup đăng ký khung giờ | Popup | GV-LD-020000 | GV-LD-020000 | — | `/lich-day/quan-ly-dang-ky-lich?popup=GV-LD-020010` | QC | cao |

## 4. Khu vực và item

### `A01` Tab Lịch dạy

Frame: `GV-LD-010000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tieu-de-tab | `MENU - TEACHER`  | `5425:257921` Sidebar · MENU - TEACHER | — |  |  | Khớp | QC |
| `A01.02` | tuan-dang-xem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.03` | mui-ten-trai-phai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.04` | cot-ngay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.05` | theo-lop |  | `5413:53455` Value | — |  |  | Khớp | QC |
| `A01.06` | thanh-nhom-lop |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.07` | the-lich |  |  | — |  | `TC03`, `TC8a` | Chưa khớp tự động | QC |
| `A01.08` | sap-xep-the |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.09` | o-khong-co-lich |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.10` | nhieu-lich-trong-ngay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.11` | vien-the-tai-menu-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.12` | lich-huy-bo |  |  | — |  | `TC7a` | Chưa khớp tự động | QC |
| `A01.13` | trang-thai-lich |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.14` | luong | `ICON MENU`  | `I5425:257921;4901:212752;2245:87764` Icon | — |  | `TC07`, `TC7a`, `TC08`, `TC8a` | Khớp | QC |
| `A01.15` | khac-man-quan-ly-lich-lop |  |  | — |  |  | Chưa khớp tự động | QC |

### `A02` Tab Quản lý đăng ký lịch

Frame: `GV-LD-020000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | cot-thu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.02` | hang-buoi |  | `5413:49209` 07h30 - 12h00 | — |  |  | Khớp | QC |
| `A02.03` | o-chua-dang-ky |  |  | — | opens `A03` |  | Chưa khớp tự động | QC |
| `A02.04` | o-da-dang-ky |  | `5413:49274` Rê chuột vào ô đã đăng ký để xem ghi chú của buổi này | — |  |  | Khớp | QC |
| `A02.05` | icon-but |  |  | — | opens `A02` | `TC12` | Chưa khớp tự động | QC |
| `A02.06` | bo-tick-mot-o |  |  | — |  | `TC12` | Chưa khớp tự động | QC |
| `A02.07` | bat-fulltime |  | `5413:49187` Fulltime | — |  | `TC13` | Khớp | QC |
| `A02.08` | bo-tick-fulltime |  | `5413:49187` Fulltime | — |  | `TC14a` | Khớp | QC |
| `A02.09` | trang-thai-fulltime |  | `5413:49187` Fulltime | — |  |  | Khớp | QC |
| `A02.10` | ghi-chu-chung | `Atom/Input` State=Textarea, Kiểu=M | `I5413:49270;2808:42324` Tìm nội dung... | — |  | `TC10` | Khớp | QC |
| `A02.11` | cap-nhat | `Atom/Button` Type=Warning, Size=Medium | `5413:49272` Atom/Button | — |  | `TC14`, `TC14a`, `TC15`, `TC16`, `TC17`, `TC20`, `TC20a` | Khớp | QC |
| `A02.12` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5413:49180` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `A02.13` | liner-icon | `Liner Icon`  | `5413:49268` Liner Icon | — |  |  | Chỉ có trên Figma | Figma |
| `A02.14` | textarea-ghi-chu | `Atom/Input` State=Textarea, Kiểu=M | `5413:49270` Textarea · Ghi chú | — |  |  | Chỉ có trên Figma | Figma |

### `A03` Popup Đăng ký khung giờ

Frame: `GV-LD-020010` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | tieu-de | `Popup/Header`  | `I5413:49912;2514:153340` Tiêu đề; `I5413:49912;2514:153341` Title | — |  |  | Khớp | QC |
| `A03.02` | dong-phu | `Popup/Header`  | `I5413:49912;2514:153342` Description | — |  | `TC21` | Khớp | QC |
| `A03.03` | gio-bat-dau-gio-ket-thuc | `Atom/Label`  | `5413:49917` Atom/Label; `5413:49920` Atom/Label | — |  |  | Khớp | QC |
| `A03.04` | ghi-chu | `Atom/Label`  | `5413:49924` Atom/Label | — |  | `TC24`, `TC25` | Khớp | QC |
| `A03.05` | huy | `Atom/Button` Type=Secondary, Size=Medium | `I5413:49926;2514:153361` Atom/Button | — |  |  | Khớp | QC |
| `A03.06` | xac-nhan | `Atom/Button` Type=Primary, Size=Medium | `I5413:49926;2514:153363` Atom/Button | — |  | `TC22`, `TC25` | Khớp | QC |

### `F01` Header

Frame: `GV-LD-020000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `5425:258303` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | component-2 | `Switch Center`  | `5425:258305` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | header-vai-tro |  | `5425:258306` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |

### `F02` (ngoài Body)

Frame: `GV-LD-020000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | sidebar-menu-teacher | `MENU - TEACHER`  | `5425:258114` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Phạm vi lịch dạy | Chỉ lịch có giáo viên được phân công là người đang đăng nhập; không lấy toàn bộ lịch của lớp chỉ vì người đó tham gia lớp. Backend kiểm tra phạm vi. |
| `REQ02` | Tuần | Mặc định tuần hiện tại, Thứ 2–Chủ Nhật, mũi tên dịch một tuần; header và thẻ cùng khoảng theo timezone nghiệp vụ. |
| `REQ03` | Cách trình bày | Theo lớp hoặc theo ngày, cùng tập lịch; mỗi lịch một thẻ, sắp tăng theo giờ trong ngày; đủ chỗ xem mọi lịch. |
| `REQ04` | Màu và nghiệp vụ | Lịch Hủy bỏ vẫn hiển thị màu xám, ưu tiên hơn màu thời gian và không phát sinh lương. Lịch không hủy dùng màu theo ngày. Màu thời gian không tự thay trạng thái hoặc ghi nhận lương; không đánh đồng lịch đã qua với buổi đã hoàn thành. |
| `REQ05` | Lịch dạy chỉ đọc | Thẻ chỉ hiển thị, không có hành động khi bấm, không mở popup và không điều hướng. Không CRUD/hủy/hoàn thành/mở lại trực tiếp tại tab này. Giáo viên hoàn thành qua luồng Bài học được cấp quyền theo requirement riêng. |
| `REQ06` | Lịch đăng ký | Lưới 3 buổi × 7 thứ của chính giáo viên; một ô một khung giờ và ghi chú riêng; một ô là một ca, tối đa 21. Ghi chú chung độc lập. Không tạo buổi dạy/lương từ lịch đăng ký. |
| `REQ07` | Popup | Giờ bắt đầu/kết thúc bắt buộc, đúng khung buổi và mốc 30 phút, kết thúc sau bắt đầu; xác nhận chỉ cập nhật nháp, hủy không đổi ô. Backend validate lại khi lưu. |
| `REQ08` | Fulltime | Bật chọn thêm ô trống với giờ trọn buổi, không đổi giờ/ghi chú ô cũ. Tick khi đủ 21 ô; gỡ một ô tự bỏ tick. Chủ động bỏ Fulltime sẽ bỏ chọn toàn bộ ô đang chọn trong nháp; chỉ bấm Cập nhật mới ghi backend. Fulltime tự bỏ tick do gỡ một ô riêng không kích hoạt gỡ toàn bộ. |
| `REQ09` | Nháp và lưu | Chỉ Cập nhật mới ghi toàn bộ lịch đăng ký chính thức; không lưu từng ô. Chặn gửi lặp, lưu toàn bộ hoặc không lưu; lỗi giữ nháp, rời màn cảnh báo khi chưa lưu. |
| `REQ10` | Đồng bộ và xung đột | Dùng cùng nguồn với màn quản lý; chỉ response mới nhất cập nhật UI; phát hiện sửa đồng thời thay vì âm thầm ghi đè. Bỏ khung giờ rảnh vẫn cho lưu bình thường dù có lịch dạy đã phân công trong khung đó; không cảnh báo/chặn vì lý do này và không tự sửa/hủy/xóa lịch dạy đã xếp. |
| `REQ11` | Quyền và audit | Giáo viên chỉ xem/cập nhật đăng ký của mình; server kiểm tra phiên đăng nhập, trạng thái tài khoản và phạm vi. Cập nhật bởi giáo viên ghi đúng owner/actor; quản lý cập nhật thay theo requirement Chi tiết giáo viên. |
| `EX01` | Ngoại lệ | Truy cập lịch người khác, thay owner/actor hoặc cập nhật lịch dạy trái quyền → backend từ chối; không tiết lộ/cập nhật dữ liệu ngoài phạm vi. |
| `EX02` | Ngoại lệ | Tuần không có lịch dạy → lưới trống; chưa đăng ký ca nào → lưới đăng ký trống. Không coi trạng thái chưa có dữ liệu là lỗi; khả năng lưu một lịch đăng ký rỗng cần xác nhận. |
| `EX03` | Ngoại lệ | Tải lịch hoặc đăng ký thất bại → lỗi có Thử lại, không dùng dữ liệu mẫu hoặc dữ liệu người/tuần khác thay thế. |
| `EX04` | Ngoại lệ | Thiếu giờ, ngoài khung buổi, sai mốc 30 phút hoặc kết thúc không lớn hơn bắt đầu → không nhận nháp ô/lưu backend, chỉ rõ lỗi để sửa. |
| `EX05` | Ngoại lệ | Lưu thất bại hoặc bấm lặp → không lưu một phần, giữ nháp; chặn gửi lặp trong khi đang xử lý. |
| `EX06` | Ngoại lệ | Phiên bản lịch đăng ký đã thay đổi → báo xung đột, không âm thầm ghi đè. |
| `EX07` | Ngoại lệ | Rời màn khi có nháp chưa lưu → cảnh báo; ở lại giữ nháp, bỏ thay đổi thì không tự lưu. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở lịch tuần hiện tại | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Chặn lịch giáo viên khác cùng lớp | High |  | REQ01 / EX01 | `A01` |  |
| `TC03` | Case 3: Chuyển tuần qua tháng/năm | High |  | Flow 1 / REQ02 | `A01` | `A01.07` |
| `TC04` | Case 4: Bật và tắt Theo lớp | High |  | Flow 2 / REQ03 | `A01` |  |
| `TC05` | Case 5: Tuần không có lịch | Medium |  | EX02 / REQ02 | `A01` |  |
| `TC06` | Case 6: Nhiều lịch và bản ghi thay thế | High |  | REQ03 | `A01` |  |
| `TC07` | Case 7: Màu thời gian không tự hoàn thành lịch | High |  | REQ04 | `A01` | `A01.14` |
| `TC7a` | Case 7a: Lịch hủy vẫn hiển thị màu xám | High |  | REQ01 / REQ04–REQ05 | `A01` | `A01.12`, `A01.14` |
| `TC08` | Case 8: Lịch dạy chỉ đọc | High |  | REQ05 / EX01 | `A01` | `A01.14` |
| `TC8a` | Case 8a: Thẻ lịch không có hành động | High |  | REQ05 | `A01` | `A01.07`, `A01.14` |
| `TC09` | Case 9: Tải lỗi và response cũ | High |  | EX03 / REQ10 | `A01` |  |
| `TC10` | Case 10: Tải đúng lịch đăng ký cá nhân | High | Có | Flow 3 / REQ06 | `A02` | `A02.10` |
| `TC11` | Case 11: Thêm ô mới vào nháp | High |  | Flow 3 / REQ06–REQ07 | `A02` |  |
| `TC12` | Case 12: Sửa và gỡ ô | High |  | Flow 3 / REQ06–REQ07 | `A02` | `A02.05`, `A02.06` |
| `TC13` | Case 13: Fulltime giữ dữ liệu ô đã đăng ký | High |  | Flow 4 / REQ08 | `A02` | `A02.07` |
| `TC14` | Case 14: Trạng thái Fulltime khi chỉnh một ô | Medium |  | REQ08 | `A02` | `A02.11` |
| `TC14a` | Case 14a: Chủ động bỏ tick Fulltime | High |  | Flow 4 / REQ08–REQ09 | `A02` | `A02.08`, `A02.11` |
| `TC15` | Case 15: Cập nhật và đồng bộ dữ liệu | High | Có | Flow 5 / REQ09 | `A02` | `A02.11` |
| `TC16` | Case 16: Không tạo lịch dạy hoặc lương từ lịch rảnh | High |  | REQ06 / REQ09 | `A02` | `A02.11` |
| `TC17` | Case 17: Lưu lỗi hoặc bấm lặp | High |  | EX05 / REQ09 | `A02` | `A02.11` |
| `TC18` | Case 18: Cập nhật đồng thời | High |  | EX06 / REQ10 | `A02` |  |
| `TC19` | Case 19: Rời màn khi còn nháp | Medium |  | EX07 / REQ09 | `A02` |  |
| `TC20` | Case 20: Không sửa đăng ký của giáo viên khác | High |  | EX01 / REQ11 | `A02` | `A02.11` |
| `TC20a` | Case 20a: Bỏ ca rảnh đang có lịch dạy vẫn lưu được | High |  | Flow 5 / REQ09–REQ10 | `A02` | `A02.11` |
| `TC21` | Case 21: Mở đúng thứ và buổi | High |  | Flow 3 / REQ07 | `A03` | `A03.02` |
| `TC22` | Case 22: Bắt buộc giờ và đúng thứ tự | High |  | EX04 / REQ07 | `A03` | `A03.06` |
| `TC23` | Case 23: Kiểm tra biên và mốc giờ | High |  | EX04 / REQ07 | `A03` |  |
| `TC24` | Case 24: Huỷ thêm mới hoặc chỉnh sửa | Medium |  | Flow 3 / REQ07 | `A03` | `A03.04` |
| `TC25` | Case 25: Một ca và ghi chú độc lập | Medium |  | REQ06–REQ07 | `A03` | `A03.04`, `A03.06` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (16): `A01.02`, `A01.03`, `A01.04`, `A01.06`, `A01.07`, `A01.08`, `A01.09`, `A01.10`, `A01.11`, `A01.12`, `A01.13`, `A01.15`, `A02.01`, `A02.03`, `A02.05`, `A02.06`
- Phân loại cần design duyệt (1): `GV-LD-010000`
- Thiếu prototype link đi vào (2): `GV-LD-010000`, `GV-LD-020010`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
