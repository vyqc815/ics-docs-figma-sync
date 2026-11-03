# Chi tiết lớp học — Tab Lịch dạy

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-040500` | Lớp học / Cài đặt / Lịch dạy | `/lop-hoc/cai-dat/lich-day` | `ADM-LOP-040500-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_schedule_requirements.md` — Chi tiết lớp học — Tab Lịch dạy (tiền tố `M-CDS`).

## 2. Luồng

- `FLOW01` Xem lịch theo tuần — `REQ01`, `REQ02`
- `FLOW02` Thêm hoặc cập nhật lịch cố định — `REQ03`
- `FLOW03` Thêm lịch linh hoạt — `REQ04`
- `FLOW04` Mở thẻ, chỉnh sửa hoặc hoàn thành lịch — `REQ10`, `REQ06`
- `FLOW05` Hủy lịch và sinh buổi bù — `REQ07`
- `FLOW06` Mở lại lịch hoàn thành và đảo lương — `REQ11`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-040510` | Popup thêm lịch dạy cố định | Popup | ADM-LOP-040500 | ADM-LOP-040500 | ADM-LOP-040500 | `/lop-hoc/cai-dat/lich-day?popup=ADM-LOP-040510` | Figma | cao |
| `ADM-LOP-040520` | Popup thêm lịch dạy linh hoạt | Popup | ADM-LOP-040500 | ADM-LOP-040500 | ADM-LOP-040500 | `/lop-hoc/cai-dat/lich-day?popup=ADM-LOP-040520` | Figma | cao |
| `ADM-LOP-040521` | Trùng lịch cố định | Trạng thái | ADM-LOP-040520 | ADM-LOP-040500 | — | `/lop-hoc/cai-dat/lich-day?state=ADM-LOP-040521` | Figma | cao |

## 4. Khu vực và item

### `A01` Tab Lịch dạy — Lịch theo tuần

Frame: `ADM-LOP-040500` (tool đoán:ADM-LOP-040500) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | khoang-tuan |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.02` | cot-ngay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.03` | tag-lich-co-dinh |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.04` | nut-them-lich-day-co-dinh |  |  | — | opens `A03` |  | Chưa khớp tự động | QC |
| `A01.05` | o-dau-cua-ngay |  |  | — | opens `A03` |  | Chưa khớp tự động | QC |
| `A01.06` | the-lich |  |  | — |  | `TC02` | Chưa khớp tự động | QC |
| `A01.07` | vung-lich |  |  | — |  |  | Chưa khớp tự động | QC |

### `A02` Thẻ lịch và bốn trạng thái chính thức

Frame: `ADM-LOP-040500` (tool đoán:ADM-LOP-040500) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | lich-co-dinh | `STATUS CALENDAR`  | `2384:57689` STATUS CALENDAR | — |  | `TC08` | Khớp | QC |
| `A02.02` | lich-linh-hoat | `STATUS CALENDAR`  | `2384:57707` STATUS CALENDAR | — |  | `TC08` | Khớp | QC |
| `A02.03` | lich-hoan-thanh | `STATUS CALENDAR`  | `2384:57687` STATUS CALENDAR | — |  |  | Khớp | QC |
| `A02.04` | lich-huy-bo | `STATUS CALENDAR`  | `3650:48210` STATUS CALENDAR | — |  |  | Khớp | QC |

### `A03` Popup Thêm Lịch Dạy Cố Định

Frame: `ADM-LOP-040510`, `ADM-LOP-040521` (tool đoán:ADM-LOP-040510, ADM-LOP-040521) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | tab-co-dinh-linh-hoat |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.02` | chon-ngay-bat-dau | `Time`  | `I2384:59020;1739:32355` Thứ Ba, 22.09.2026 | — |  |  | Khớp một phần | QC |
| `A03.03` | gio-bat-dau-ket-thuc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.04` | thu-2-chu-nhat |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.05` | them-lich-day |  | `2384:59178` Thêm lịch dạy | — |  |  | Khớp | QC |
| `A03.06` | icon-thung-rac |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.07` | huy | `Atom/Button` Type=Secondary, Size=Medium | `I2527:167767;2514:153361` Atom/Button | — |  |  | Khớp | QC |
| `A03.08` | xac-nhan | `Atom/Button` Type=Primary, Size=Medium | `I2527:167767;2514:153363` Atom/Button | — |  | `TC10`, `TC11`, `TC12`, `TC13`, `TC14`, `TC15` | Khớp | QC |

### `A04` Popup Thêm Lịch Dạy Linh Hoạt

Frame: `ADM-LOP-040520` (tool đoán:ADM-LOP-040520) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | khoang-tuan |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.02` | gio-bat-dau-ket-thuc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.03` | thu-trong-tuan |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.04` | them-lich-day | `Popup/Header`  | `I2527:167773;2514:153358` Title | — |  |  | Khớp | QC |
| `A04.05` | xac-nhan | `Atom/Button` Type=Primary, Size=Medium | `I2527:167779;2514:153363` Atom/Button | — |  | `TC16`, `TC17`, `TC19` | Khớp | QC |

### `A05` Popup xem/chỉnh sửa khi bấm thẻ lịch

Frame: `ADM-LOP-040500` (tool đoán:ADM-LOP-040500) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | tieu-de |  |  | — |  | `TC21` | Chưa khớp tự động | QC |
| `A05.02` | thoi-gian-ngay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.03` | gio-bat-dau |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.04` | giao-vien | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I2384:57888;2177:28928` Chi tiết NV | — |  | `TC21`, `TC24`, `TC25`, `TC27b`, `TC27c` | Khớp | QC |
| `A05.05` | thoi-gian-hoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.06` | luong-gio |  |  | — |  | `TC27a`, `TC27b`, `TC27c`, `TC27e` | Chưa khớp tự động | QC |
| `A05.07` | trang-thai |  |  | — |  | `TC21`, `TC22`, `TC26`, `TC27` | Chưa khớp tự động | QC |
| `A05.08` | huy | `STATUS CALENDAR`  | `3650:48210` STATUS CALENDAR; `3650:48210` STATUS CALENDAR | — |  |  | Khớp | QC |
| `A05.09` | xac-nhan |  |  | — |  | `TC22`, `TC23`, `TC24`, `TC25`, `TC27b`, `TC27c`, `TC27d`, `TC27` | Chưa khớp tự động | QC |

### `A06` Hoàn thành và hủy lịch

Frame: `ADM-LOP-040500` (tool đoán:ADM-LOP-040500) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | hoan-thanh | `STATUS CALENDAR`  | `2384:57687` STATUS CALENDAR | — |  | `TC28`, `TC29`, `TC30`, `TC35` | Khớp | QC |
| `A06.02` | hoan-thanh-qua-luong-day |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.03` | huy-bo | `STATUS CALENDAR`  | `3650:48210` STATUS CALENDAR | — |  |  | Khớp | QC |
| `A06.04` | sua-lich-chua-hoan-thanh |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.05` | xoa |  |  | — |  |  | Chưa khớp tự động | QC |

### `A07` Mở lại lịch đã hoàn thành và đảo lương

Frame: `ADM-LOP-040500` (tool đoán:ADM-LOP-040500) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | nut-mo-lai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.02` | ly-do-dieu-chinh |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.03` | canh-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.04` | huy | `STATUS CALENDAR`  | `3650:48210` STATUS CALENDAR | — |  |  | Khớp | QC |
| `A07.05` | xac-nhan-mo-lai |  |  | — |  | `TC39` | Chưa khớp tự động | QC |

### `A08` Toast phản hồi CRUD lịch

Frame: `ADM-LOP-040500` (tool đoán:ADM-LOP-040500) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | thanh-cong |  |  | — |  | `TC44`, `TC45` | Chưa khớp tự động | QC |
| `A08.02` | thong-tin | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I2384:57886;2177:28928` Chi tiết NV | — |  |  | Khớp | QC |
| `A08.03` | canh-bao |  |  | — |  | `TC45` | Chưa khớp tự động | QC |
| `A08.04` | loi |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-040500` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2384:57886` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | time | `Time`  | `2384:57636` Time | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-icon-button | `Atom/Icon Button`  | `3772:85435` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | status-calendar | `STATUS CALENDAR`  | `2384:57688` STATUS CALENDAR | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | mouse-click |  | `2384:57712` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:229271` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | account | `ACCOUNT` Size=Default | `3497:51175` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Lịch tuần | Hiển thị đúng lịch của lớp theo tuần, ngày/giờ, giáo viên, mã lớp và trạng thái; số thẻ trong một ngày không bị giới hạn ở ba. |
| `REQ02` | Phân quyền | Admin/Class Handler/Support được CRUD lịch trong phạm vi; Teacher chỉ xem lịch lớp được phân công tại tab. Lịch giáo viên đã chọn khi bắt đầu buổi học được hoàn thành gián tiếp qua `Hoàn thành buổi học` (requirement Giáo viên — Bài học). |
| `REQ03` | Lịch cố định | Hỗ trợ nhiều khung giờ/ngày lặp; chặn trùng lịch lớp và trùng lịch giáo viên trên tất cả lớp; sinh/tái sinh lịch tương lai đến đủ đúng N buổi của khóa học. |
| `REQ04` | Lịch linh hoạt | Dấu cộng tạo lịch linh hoạt; hỗ trợ một hoặc nhiều ngày/giờ trong tuần; chặn trùng lịch lớp/giáo viên; lịch chèn tính vào N và làm timeline tương lai tự cân bằng. |
| `REQ05` | Trạng thái | Cố định màu cam, Linh hoạt xanh dương, Hoàn thành xanh lá, Hủy bỏ xám. Hoàn thành/Hủy bỏ là trạng thái ghi đè màu nhưng không làm mất loại nguồn. |
| `REQ06` | Hoàn thành và lương | Mỗi lần chuyển hợp lệ từ Đang đợi sang Hoàn thành (tại tab hoặc qua luồng dạy) tạo một khoản lương giáo viên, **ngày tính lương là ngày của lịch**, không phải ngày hoàn thành. Chống lặp theo schedule_id và completion version; tại một thời điểm chỉ một khoản lương hiệu lực, không có trạng thái hoàn thành giả hoặc lương trùng. |
| `REQ07` | Hủy và bù | Lịch hủy bị trừ khỏi N, không tính lương và tạo đúng một lịch bù ở cuối theo khung cố định; tự tăng ngày kết thúc dự kiến. |
| `REQ08` | Audit/an toàn | Lưu người, thời điểm máy chủ, giá trị trước/sau, nguồn lịch, trạng thái và liên kết lịch bù; không tin role, class_id, teacher_id hoặc trạng thái do client tự khai. |
| `REQ09` | Toast | Mọi CRUD có phản hồi đúng loại; chỉ thành công sau khi toàn bộ giao dịch liên quan đã hoàn tất. |
| `REQ10` | Popup thẻ lịch | Bấm thẻ mở đúng schedule_id với Ngày, Giờ bắt đầu, Giáo viên, Thời gian học, Lương/giờ và Trạng thái. Role CRUD được sửa lịch Đang đợi; Teacher chỉ xem. Nút Hủy chỉ đóng form; trạng thái Hủy bỏ mới kích hoạt sinh bù. |
| `REQ11` | Mở lại lịch hoàn thành | Admin/Class Handler/Support được mở lại lịch Hoàn thành khi nhập lý do. Hệ thống không xóa lương gốc mà tạo bút toán đảo/điều chỉnh, đưa lịch về Đang đợi rồi mới cho sửa/hủy. Hoàn thành lại tạo lần lương mới và chỉ một khoản lương có hiệu lực. |
| `REQ12` | Lương/giờ của buổi | Mỗi lịch có `Lương/giờ`, mặc định theo hồ sơ giáo viên của buổi; Role CRUD chỉnh riêng được cho từng buổi chưa hoàn thành/hủy, Teacher chỉ xem. Đổi giáo viên reset theo hồ sơ giáo viên mới. Tiền buổi = Lương/giờ × thời lượng (giờ), chốt khi Hoàn thành; đổi hồ sơ không hồi tố buổi đã hoàn thành và không ghi đè buổi đã chỉnh riêng. Không còn lương theo lớp. |
| `EX01` | Ngoại lệ | Không có quyền hoặc ngoài phạm vi lớp → không trả control CRUD và backend từ chối request thay đổi. |
| `EX02` | Ngoại lệ | Giờ kết thúc không sau giờ bắt đầu, dòng không chọn thứ, trùng lịch của lớp hoặc trùng lịch giáo viên tại bất kỳ lớp nào → cảnh báo, không cho tạo/lưu và đánh dấu đúng dòng/ngày. |
| `EX03` | Ngoại lệ | Cấu hình cố định không thể sinh đủ N lịch hợp lệ → rollback toàn bộ cấu hình/lịch mới. |
| `EX04` | Ngoại lệ | Một phần tử trong nhóm lịch linh hoạt không hợp lệ hoặc trùng lịch lớp/giáo viên → cảnh báo và không thêm một phần; trả danh sách cần sửa. |
| `EX05` | Ngoại lệ | Request của cùng một lần hoàn thành gửi lặp/đồng thời → một trạng thái hoàn thành, một khoản lương hiệu lực cho completion version đó và một kết quả logic. |
| `EX06` | Ngoại lệ | Không tìm được khung bù hoặc các khung tiếp theo bị trùng → tiếp tục tìm; nếu không thể xếp thì không commit hủy một phần. |
| `EX07` | Ngoại lệ | Request hủy lặp → dùng quan hệ lịch hủy–lịch bù đã lưu, không tạo bù/lịch sử/ngày kết thúc lặp. |
| `EX08` | Ngoại lệ | Lịch đã hoàn thành/hủy bị thao tác từ snapshot cũ → từ chối theo version/trạng thái mới nhất và yêu cầu tải lại. |
| `EX09` | Ngoại lệ | Tạo/cập nhật lịch thành công nhưng bước liên quan lương, lịch bù hoặc ngày kết thúc lỗi → rollback giao dịch hoặc trả trạng thái phục hồi rõ ràng; không hiển thị thành công giả. |
| `EX10` | Ngoại lệ | Khoản lương thuộc bảng lương đã khóa → không sửa/xóa kỳ cũ; tạo bút toán điều chỉnh ở kỳ cho phép hoặc từ chối toàn bộ thao tác Mở lại. |
| `EX11` | Ngoại lệ | Request Mở lại gửi lặp/đồng thời → một bút toán đảo, một lần chuyển Đang đợi và một audit logic. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở đúng lịch tuần của lớp | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Chuyển tuần trước và sau | High |  | Flow 1 / REQ01 | `A01` | `A01.06` |
| `TC03` | Case 3: Dấu cộng mở lịch linh hoạt đúng ngày | High |  | Flow 3 / REQ04 | `A01` |  |
| `TC04` | Case 4: Nút thêm cố định mở đúng tab | High |  | Flow 2 / REQ03 | `A01` |  |
| `TC05` | Case 5: Teacher chỉ xem lịch | High |  | REQ02 / Ràng buộc quyền | `A01` |  |
| `TC06` | Case 6: Hiển thị nhiều hơn ba lịch trong ngày | Medium |  | REQ01 | `A01` |  |
| `TC07` | Case 7: Hiển thị đúng bốn trạng thái | High |  | REQ05 | `A02` |  |
| `TC08` | Case 8: Trạng thái ghi đè màu nhưng giữ loại nguồn | High |  | REQ05 | `A02` | `A02.01`, `A02.02` |
| `TC09` | Case 9: Không nhận biết chỉ bằng màu | Medium |  | REQ05 | `A02` |  |
| `TC10` | Case 10: Thêm nhiều khung cố định hợp lệ | High | Có | Flow 2 / REQ03 | `A03` | `A03.08` |
| `TC11` | Case 11: Chặn giờ kết thúc không hợp lệ | High |  | EX02 / REQ03 | `A03` | `A03.08` |
| `TC12` | Case 12: Chặn trùng lịch lớp hoặc lịch giáo viên ở lớp khác | High |  | EX02 / REQ03 | `A03` | `A03.08` |
| `TC13` | Case 13: Thêm và xóa dòng trước khi xác nhận | Medium |  | REQ03 | `A03` | `A03.08` |
| `TC14` | Case 14: Bỏ khung cố định và tái sinh lịch tương lai | High |  | Flow 2 / REQ03 | `A03` | `A03.08` |
| `TC15` | Case 15: Không thể sinh đủ lịch | High |  | EX03 / REQ03 | `A03` | `A03.08` |
| `TC16` | Case 16: Tạo lịch linh hoạt từ dấu cộng | High | Có | Flow 3 / REQ04 | `A04` | `A04.05` |
| `TC17` | Case 17: Thêm nhiều lịch linh hoạt nguyên tử | High |  | Flow 3 / REQ04 | `A04` | `A04.05` |
| `TC18` | Case 18: Chèn lịch và cân bằng về đúng N buổi | High |  | Flow 3 / REQ04 | `A04` |  |
| `TC19` | Case 19: Một lịch trong nhóm bị trùng lịch lớp hoặc lịch giáo viên | High |  | EX04 / REQ04 | `A04` | `A04.05` |
| `TC20` | Case 20: Hủy popup linh hoạt | Medium |  | REQ04 | `A04` |  |
| `TC21` | Case 21: Mở đúng popup của thẻ được bấm | High |  | Flow 4 / REQ10 | `A05` | `A05.01`, `A05.04`, `A05.07` |
| `TC22` | Case 22: Teacher xem popup ở chế độ chỉ đọc | High |  | REQ02 / Ràng buộc quyền | `A05` | `A05.07`, `A05.09` |
| `TC23` | Case 23: Chỉnh ngày, giờ hoặc thời lượng hợp lệ | High |  | REQ10 | `A05` | `A05.09` |
| `TC24` | Case 24: Đổi giáo viên không bị trùng lịch | High |  | REQ10 | `A05` | `A05.04`, `A05.09` |
| `TC25` | Case 25: Chặn chỉnh sửa gây trùng lịch | High |  | EX02 / REQ10 | `A05` | `A05.04`, `A05.09` |
| `TC26` | Case 26: Nút Hủy chỉ đóng popup | Medium |  | REQ10 | `A05` | `A05.07` |
| `TC27a` | Case 27a: Lương/giờ mặc định từ hồ sơ | High |  | REQ10 / REQ12 | `A05` | `A05.06` |
| `TC27b` | Case 27b: Chỉnh Lương/giờ riêng một buổi | High | Có | REQ10 / REQ12 | `A05` | `A05.04`, `A05.06`, `A05.09` |
| `TC27c` | Case 27c: Đổi giáo viên thì reset Lương/giờ | High |  | REQ10 / REQ12 | `A05` | `A05.04`, `A05.06`, `A05.09` |
| `TC27d` | Case 27d: Validation Lương/giờ buổi | High |  | REQ12 | `A05` | `A05.09` |
| `TC27e` | Case 27e: Khóa Lương/giờ khi đã hoàn thành và Teacher chỉ xem | High |  | REQ02 / REQ12 | `A05` | `A05.06` |
| `TC27f` | Case 27f: Tính tiền buổi khi hoàn thành | High | Có | REQ06 / REQ12 | `A05` |  |
| `TC27` | Case 27: Đổi trạng thái từ popup | High |  | Flow 4–5 / REQ06–REQ07 / REQ10 | `A05` | `A05.07`, `A05.09` |
| `TC28` | Case 28: Hoàn thành lịch cố định | High | Có | Flow 4 / REQ06 | `A06` | `A06.01` |
| `TC29` | Case 29: Hoàn thành lịch linh hoạt | High |  | Flow 4 / REQ06 | `A06` | `A06.01` |
| `TC30` | Case 30: Gửi lặp hoàn thành | High |  | EX05 / REQ06 | `A06` | `A06.01` |
| `TC31` | Case 31: Hủy lịch cố định và sinh buổi bù | High | Có | Flow 5 / REQ07 | `A06` |  |
| `TC32` | Case 32: Hủy lịch linh hoạt và sinh buổi bù cố định | High |  | Flow 5 / REQ07 | `A06` |  |
| `TC33` | Case 33: Khung bù đầu tiên bị trùng | High |  | EX06 / REQ07 | `A06` |  |
| `TC34` | Case 34: Hủy lặp không sinh nhiều buổi bù | High |  | EX07 / REQ07 | `A06` |  |
| `TC35` | Case 35: Chặn hoàn thành lịch hủy hoặc sửa trực tiếp lịch hoàn thành | High |  | EX08 / REQ06 / REQ11 | `A06` | `A06.01` |
| `TC36` | Case 36: Không thể sinh lịch bù | High |  | EX06 / REQ07 | `A06` |  |
| `TC37` | Case 37: Hiển thị hành động Mở lại đúng quyền | High |  | Flow 6 / REQ11 | `A07` |  |
| `TC38` | Case 38: Bắt buộc lý do khi mở lại | High |  | REQ11 | `A07` |  |
| `TC39` | Case 39: Mở lại và đảo lương thành công | High |  | Flow 6 / REQ11 | `A07` | `A07.05` |
| `TC40` | Case 40: Mở lại rồi hủy lịch | High |  | Flow 6 → Flow 5 / REQ07 / REQ11 | `A07` |  |
| `TC41` | Case 41: Hoàn thành lại sau khi mở | High |  | Flow 6 → Flow 4 / REQ06 / REQ11 | `A07` |  |
| `TC42` | Case 42: Bảng lương đã khóa | High |  | EX10 / REQ11 | `A07` |  |
| `TC43` | Case 43: Gửi lặp yêu cầu Mở lại | High |  | EX11 / REQ11 | `A07` |  |
| `TC44` | Case 44: Toast thành công đúng thao tác | High |  | Ràng buộc Toast | `A08` | `A08.01` |
| `TC45` | Case 45: Toast cảnh báo trùng lịch | High |  | Ràng buộc Toast | `A08` | `A08.01`, `A08.03` |
| `TC46` | Case 46: Toast lỗi khi giao dịch thất bại | High |  | Ràng buộc Toast | `A08` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (31): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A03.01`, `A03.03`, `A03.04`, `A03.06`, `A04.01`, `A04.02`, `A04.03`, `A05.01`, `A05.02`, `A05.03`, `A05.05`, `A05.06`, `A05.07`, `A05.09`, `A06.02`, `A06.04`, `A06.05`, `A07.01`, `A07.02`, `A07.03`, `A07.05`, `A08.01`, `A08.03`, `A08.04`
- Frame Figma chưa có requirement (3): `ADM-LOP-040510`, `ADM-LOP-040520`, `ADM-LOP-040521`
- Thiếu prototype link đi vào (1): `ADM-LOP-040521`
- Testcase không trỏ REQ (3): `TC44`, `TC45`, `TC46`
- REQ/EX chưa có testcase (4): `REQ08`, `REQ09`, `EX01`, `EX09`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
