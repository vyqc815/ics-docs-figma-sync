# Chi tiết học viên

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-HV-020100` | Chi tiết học viên / Thông tin cá nhân | `/chi-tiet-hoc-vien/thong-tin-ca-nhan` | `ADM-HV-020100-DK` | QC |
| `ADM-HV-020200` | Chi tiết học viên / Danh sách lớp | `/chi-tiet-hoc-vien/danh-sach-lop` | `ADM-HV-020200-DK` | QC |
| `ADM-HV-020300` | Chi tiết học viên / Học phí | `/chi-tiet-hoc-vien/hoc-phi` | `ADM-HV-020300-DK` | QC |
| `ADM-HV-020400` | Chi tiết học viên / Log | `/chi-tiet-hoc-vien/log` | `ADM-HV-020400-DK` | QC |
| `ADM-HV-020500` | Chi tiết học viên / Quy trình học viên | `/chi-tiet-hoc-vien/quy-trinh-hoc-vien` | `ADM-HV-020500-DK` | QC |
| `ADM-HV-020600` | Chi tiết học viên / Ghi chú | `/chi-tiet-hoc-vien/ghi-chu` | `ADM-HV-020600-DK` | QC |

Requirement: `management_requirement/student_management/student_detail_requirements.md` — Chi tiết học viên (tiền tố `M-SD`).

## 2. Luồng

- `FLOW01` Xem và cập nhật chi tiết học viên — 
- `FLOW02` Lấy lại mật khẩu học viên — 
- `FLOW03` Xem các tab dùng chung với lịch sử — 
- `FLOW04` Log học viên — 
- `FLOW05` Thêm quy trình và cập nhật Result học viên — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-HV-020610` | Popup thêm ghi chú | Popup | ADM-HV-020600 | ADM-HV-020600 | — | `/chi-tiet-hoc-vien/ghi-chu?popup=ADM-HV-020610` | Figma | cao |

## 4. Khu vực và item

### `A01` Khung Chi tiết học viên và điều hướng

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 1: Chi tiết học viên — Thông tin cá nhân

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | anh-dai-dien |  |  | — |  | `TC01`, `TC05`, `TC10` | Chưa sync | QC |
| `A02.02` | ho-va-ten |  |  | — |  | `TC02` | Chưa sync | QC |
| `A02.03` | ngay-sinh |  |  | — |  | `TC01`, `TC02` | Chưa sync | QC |
| `A02.04` | gioi-tinh |  |  | — |  | `TC01`, `TC02` | Chưa sync | QC |
| `A02.05` | ma-nguoi-dung |  |  | — |  | `TC01`, `TC02`, `TC03` | Chưa sync | QC |
| `A02.06` | so-dien-thoai |  |  | — |  | `TC01`, `TC02` | Chưa sync | QC |
| `A02.07` | email |  |  | — |  | `TC01`, `TC02`, `TC03` | Chưa sync | QC |
| `A02.08` | ghi-chu |  |  | — |  | `TC01`, `TC02`, `TC04` | Chưa sync | QC |

### `A03` Popup xác nhận lấy lại mật khẩu — UI cần bổ sung

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A04` Trang 2: Chi tiết học viên — Danh sách lớp

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Trang 3: Chi tiết học viên — Học phí

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A06` Trang 4: Chi tiết học viên — Log

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A07` Trang 5: Chi tiết học viên — Quy trình học viên

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A08` Trang 6: Chi tiết học viên — Ghi chú

Frame: `ADM-HV-020610` (tool đoán:ADM-HV-020610) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A09` Toast phản hồi CRUD

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa sync | QC |
| `A09.02` | thong-tin |  |  | — |  |  | Chưa sync | QC |
| `A09.03` | canh-bao |  |  | — |  | `TTC02` | Chưa sync | QC |
| `A09.04` | loi |  |  | — |  |  | Chưa sync | QC |

### `F01` (ngoài Body)

Frame: `ADM-HV-020100`, `ADM-HV-020200`, `ADM-HV-020300`, `ADM-HV-020400`, `ADM-HV-020500`, `ADM-HV-020600` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `1648:11873` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-button | `Atom/Button` Type=Secondary, Size=Small | `1657:10231` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | account | `ACCOUNT` Size=Default | `2223:83783` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:233159` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | the-chi-so-so-lop | `Thẻ chỉ số` Kiểu=Gọn in hoa 13 | `3108:125417` Thẻ chỉ số · Số lớp | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | the-chi-so-len-ky | `Thẻ chỉ số` Kiểu=Gọn in hoa 13 | `3108:125431` Thẻ chỉ số · Lên kỳ | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | the-chi-so-di-hoc | `Thẻ chỉ số` Kiểu=Gọn in hoa 13 | `3108:125447` Thẻ chỉ số · Đi học | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | the-chi-so-btvn | `Thẻ chỉ số` Kiểu=Gọn in hoa 13 | `3108:125458` Thẻ chỉ số · BTVN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | the-chi-so-dat-kpi | `Thẻ chỉ số` Kiểu=Gọn in hoa 13 | `3108:125469` Thẻ chỉ số · Đạt kpi | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | the-chi-so-danh-gia | `Thẻ chỉ số` Kiểu=Gọn in hoa 13 | `3108:125485` Thẻ chỉ số · Đánh giá | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | class-status | `CLass Status`  | `1648:12590` CLass Status | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | global-progress-bar | `Global Progress Bar`  | `1648:12597` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | progress-diem-danh-gia-a-f | `Progress/Điểm Đánh Giá (A-F)` Size=36x32 | `1648:12599` Progress/Điểm Đánh Giá (A-F) | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | percent | `PERCENT %`  | `1648:12601` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | mouse-click |  | `1648:12626` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | the-chi-so-so-hoa-don | `Thẻ chỉ số` Kiểu=Gọn in hoa 14 | `3108:125497` Thẻ chỉ số · Số hoá đơn | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | the-chi-so-tong-hoc-phi | `Thẻ chỉ số` Kiểu=Gọn in hoa 14 | `3108:125510` Thẻ chỉ số · Tổng học phí | — |  |  | Chỉ có trên Figma | Figma |
| `F01.18` | phan-trang |  | `1805:17859` Phân Trang | — |  |  | Chỉ có trên Figma | Figma |
| `F01.19` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `2200:30441` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.20` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Active | `1930:23232` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.21` | lich-giao-vien-dang-ky | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `1930:22862` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  |  | Chỉ có trên Figma | Figma |
| `F01.22` | atom-object-chip | `Atom/Object Chip` Type=System | `2409:143889` Atom/Object Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.23` | atom-icon-button | `Atom/Icon Button`  | `1474:14540` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.24` | avatar | `Avatar` Size=24 | `3641:79031` Avatar | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Row · HD000123

Frame: `ADM-HV-020300` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | atom-badge | `Atom/Badge`  | `3269:63090` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `3269:63093` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | avatar-count | `Avatar` Size=24 | `3269:63352` Avatar + Count | — |  |  | Chỉ có trên Figma | Figma |

### `F03` Chi tiết học phí

Frame: `ADM-HV-020300` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | atom-tag-solid | `Atom/Tag Solid` Size=20H | `3269:62894` Atom/Tag Solid | — |  |  | Chỉ có trên Figma | Figma |
| `F03.02` | atom-badge | `Atom/Badge`  | `3269:62901` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |

### `F04` Row · HD000124

Frame: `ADM-HV-020300` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F04.01` | atom-badge | `Atom/Badge`  | `3269:63207` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F04.02` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `3269:63210` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F04.03` | avatar-count | `Avatar` Size=24 | `3269:63354` Avatar + Count | — |  |  | Chỉ có trên Figma | Figma |

### `F05` Row · HD000125

Frame: `ADM-HV-020300` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F05.01` | atom-badge | `Atom/Badge`  | `3269:62816` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F05.02` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Inactive | `3269:62819` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F05.03` | avatar-count | `Avatar` Size=24 | `3269:62827` Avatar + Count | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` |  | Chi tiết học viên phải tải và hiển thị đúng học viên được chọn, gồm `Ảnh đại diện`, `Họ và tên`, `Ngày sinh`, `Giới tính`, `Mã người dùng`, `Số điện thoại`, `Email`, `Ghi chú`; trạng thái Chính thức được giữ trong dữ liệu, không có control ở UI mới. |
| `REQ02` |  | Chỉ `Ảnh đại diện`, `Họ và tên`, `Ngày sinh`, `Giới tính`, `Số điện thoại`, `Ghi chú` được phép cập nhật. Họ và tên, Ngày sinh, Giới tính và Số điện thoại là các field bắt buộc. |
| `REQ03` |  | `Mã người dùng` chính là Code được sinh theo Level tại case tạo học viên. `Mã người dùng`, `Email` và `Trạng thái` phải chỉ đọc trên UI và được bảo vệ ở backend; không được thay đổi bằng request trực tiếp. |
| `REQ04` |  | Trạng thái tài khoản chỉ có giá trị `Chính thức` và không có thao tác thay đổi; UI mới không render control Trạng thái. |
| `REQ05` |  | Ghi chú là field không bắt buộc; cho phép thêm, sửa, xóa trắng và không áp dụng giới hạn nội dung hoặc độ dài ở tầng nghiệp vụ. |
| `REQ06` |  | Ảnh đại diện có dung lượng tối đa `25 MB`; ảnh đúng `25 MB` được chấp nhận, ảnh lớn hơn `25 MB` bị từ chối. Khi chọn ảnh hợp lệ, hệ thống hiển thị bản xem trước. Ảnh mới chỉ được lưu cùng thao tác `Cập nhật tài khoản`; không chọn ảnh mới thì giữ ảnh hiện tại, chưa có ảnh thì hiển thị avatar mặc định. |
| `REQ07` |  | Cập nhật chi tiết phải có tính nguyên tử. Thành công lưu toàn bộ field hợp lệ và hiển thị notification thành công; thất bại không lưu thay đổi dở dang, giữ dữ liệu trên form và hiển thị notification lỗi trong Flow 1. |
| `REQ08` |  | `Lấy lại tài khoản` bắt buộc mở popup xác nhận trước khi gửi yêu cầu. Chỉ khi user bấm `Xác nhận`, hệ thống mới đặt mật khẩu của đúng học viên thành chính xác `abc12345`; thao tác không làm thay đổi field thông tin cá nhân và phải trả về notification thành công hoặc thất bại theo Flow 2. |
| `REQ09` |  | Quyền xem, cập nhật chi tiết và lấy lại mật khẩu phải tuân theo cùng phạm vi dữ liệu học viên của role hiện tại; không được truy cập hoặc thao tác trực tiếp với học viên ngoài phạm vi. |
| `REQ10` |  | Khung gồm sáu tab đúng thứ tự UI, mặc định Thông tin cá nhân; tab dùng chung student_id, dữ liệu tải/rỗng/lỗi tách biệt. Quay lại danh sách giữ điều kiện trước đó. |
| `REQ11` |  | Danh sách lớp giống Lịch sử lớp: cùng sáu thẻ/công thức, trạng thái lớp, tiến độ cả lớp và vòng getUpTerm. Thống kê toàn học viên; bảng phân trang từng trang; mũi tên mở Chi tiết lớp theo quyền. |
| `REQ12` |  | Học phí giống tab Học phí của lịch sử, cùng hai thẻ/toàn bộ nghiệp vụ Hóa đơn hiện có, không tạo hóa đơn mới. Phân trang theo hóa đơn, không theo phân bổ; footer đơn vị hóa đơn. Thẻ lấy toàn dữ liệu, xóa đồng bộ mọi học viên liên kết. |
| `REQ13` |  | Log giống Menu Nhật ký → Tab Nhật ký lớp, đổi phạm vi sang học viên. Search Tiêu đề Enter/2 giây; Đối tượng theo tác giả/nguồn, Thời gian mặc định Hôm nay. Admin/Class Handler/Support xem trong phạm vi; chỉ Class Handler/Support tạo và sửa/xóa log mình tạo; Hệ thống chỉ đọc. Load more; các phần chưa chốt tại nguồn vẫn cần xác nhận. |
| `REQ14` |  | Quy trình học viên dùng Action Board và popup chọn như lớp, chỉ loại Học viên, nguồn Công khai cùng center. Admin/user được gán được Thêm/cập nhật Result; Vô hiệu chỉ xem Result cũ. Không gắn trùng, không tự hoàn thành hoặc sửa nguồn. Result theo student_id, không lẫn lớp/học viên khác. Danh sách dùng load more. |
| `REQ15` |  | Ghi chú giống lịch sử, cùng note_id/student_id, mặc định Mới + Tuần này; Loại/Độ ưu tiên chưa chọn, metadata từ bình luận gần nhất. Quyền owner, văn bản thuần form thêm và bình luận văn bản thuần theo lịch sử. Load more card, đổi filter tải lại từ đầu. |
| `REQ16` |  | Phân trang lớp/hóa đơn thay tập dòng; load more note/quy trình/log nối dữ liệu không trùng ID, giữ dữ liệu cũ khi lỗi và dừng khi hết. Đổi học viên/điều kiện reset page/cursor, bỏ response cũ. Thống kê/tổng tiến độ không chỉ tính phần đã tải. |
| `EX01` | Ngoại lệ | Không tìm thấy học viên hoặc user không có quyền trên học viên được yêu cầu → không hiển thị dữ liệu chi tiết và không cho phép cập nhật hoặc lấy lại mật khẩu. |
| `EX02` | Ngoại lệ | Họ và tên, Ngày sinh, Giới tính hoặc Số điện thoại bị để trống; Họ và tên chỉ chứa khoảng trắng → chặn cập nhật, giữ dữ liệu trên form và hiển thị lỗi tại field tương ứng. |
| `EX03` | Ngoại lệ | Request cập nhật có thay đổi `Mã người dùng`, `Email` hoặc `Trạng thái` → backend từ chối toàn bộ request; giữ nguyên mọi dữ liệu của học viên. |
| `EX04` | Ngoại lệ | Ảnh đại diện vượt quá `25 MB` hoặc không đáp ứng định dạng upload của hệ thống → chặn toàn bộ thao tác cập nhật, không tải ảnh lên, giữ ảnh hiện tại và hiển thị lỗi upload. Riêng trường hợp vượt dung lượng, hiển thị `Ảnh đại diện không được vượt quá 25 MB.` |
| `EX05` | Ngoại lệ | Cập nhật chi tiết thất bại → không lưu bất kỳ field nào, giữ dữ liệu user đã nhập trên form và hiển thị `Không thể cập nhật thông tin học viên. Vui lòng thử lại.` |
| `EX06` | Ngoại lệ | Lấy lại mật khẩu thất bại → không thay đổi mật khẩu hiện tại và hiển thị `Không thể đặt lại mật khẩu học viên. Vui lòng thử lại.` |
| `EX07` | Ngoại lệ | User bấm `Hủy` hoặc đóng popup xác nhận lấy lại mật khẩu → không gửi yêu cầu đặt lại và giữ nguyên mật khẩu hiện tại. |
| `EX08` | Ngoại lệ | Tải trang/lượt tiếp lỗi hoặc response cũ về muộn → không mất dữ liệu đang có hoặc trộn học viên/điều kiện; cho thử lại. |
| `EX09` | Ngoại lệ | Quy trình sai loại/center, nguồn không Công khai, item trùng hoặc user không được phép → chặn thêm/cập nhật, không lưu một phần. |
| `EX10` | Ngoại lệ | Học phí/ghi chú/Log kế thừa ngoại lệ và bảo vệ quyền của requirement nguồn; truy cập tab không mở rộng quyền CRUD. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC12` | Case 12: Bộ sáu tab và tab mặc định | High |  | REQ10 | `A01` |  |
| `TC13` | Case 13: Chuyển học viên không lẫn dữ liệu | High |  | REQ10 / REQ16 | `A01` |  |
| `TC01` | Case 1: Hiển thị đúng chi tiết học viên | High | Có | Flow 1 / REQ01 | `A02` | `A02.01`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A02.08` |
| `TC02` | Case 2: Cập nhật các field được phép sửa | High | Có | Flow 1 / REQ02 / REQ07 | `A02` | `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A02.08` |
| `TC03` | Case 3: Khóa Mã người dùng, Email và Trạng thái | High |  | EX03 / REQ03 / REQ04 | `A02` | `A02.05`, `A02.07` |
| `TC04` | Case 4: Cập nhật và xóa trắng Ghi chú | High |  | Flow 1 / REQ05 | `A02` | `A02.08` |
| `TC05` | Case 5: Upload ảnh đại diện | High |  | Flow 1 / REQ06 | `A02` | `A02.01` |
| `TC06` | Case 6: Cập nhật chi tiết thất bại không lưu dở dang | High |  | EX02 / EX05 / REQ07 | `A02` |  |
| `TC09` | Case 9: Chặn truy cập chi tiết học viên ngoài phạm vi | High |  | EX01 / REQ09 | `A02` |  |
| `TC10` | Case 10: Kiểm tra dung lượng ảnh đại diện tối đa | High |  | EX04 / REQ06 | `A02` | `A02.01` |
| `TC07` | Case 7: Lấy lại mật khẩu thành công | High | Có | Flow 2 / REQ08 | `A03` |  |
| `TC08` | Case 8: Lấy lại mật khẩu thất bại | High |  | Flow 2 / EX06 / REQ08 | `A03` |  |
| `TC11` | Case 11: Hủy popup lấy lại mật khẩu | High |  | Flow 2 / EX07 / REQ08 | `A03` |  |
| `TC14` | Case 14: Đồng nhất Danh sách lớp và Lịch sử lớp | High |  | REQ11 | `A04` |  |
| `TC15` | Case 15: Phân trang lớp theo student_id | High |  | REQ11 / REQ16 | `A04` |  |
| `TC16` | Case 16: Mở Chi tiết lớp từ học viên | High |  | REQ11 | `A04` |  |
| `TC17` | Case 17: Đồng nhất Học phí với popup lịch sử | High |  | REQ12 | `A05` |  |
| `TC18` | Case 18: Phân trang hóa đơn không làm đổi thẻ tổng | High |  | REQ12 / REQ16 | `A05` |  |
| `TC19` | Case 19: Thao tác học phí của hóa đơn hiện có | High |  | REQ12 | `A05` |  |
| `TC20` | Case 20: Xóa hóa đơn đồng bộ học phí | High |  | REQ12 | `A05` |  |
| `TC21` | Case 21: Log giới hạn đúng học viên | High |  | REQ13 | `A06` |  |
| `TC22` | Case 22: Search/filter Log kế thừa Nhật ký lớp | High |  | REQ13 | `A06` |  |
| `TC23` | Case 23: Quyền CRUD nhật ký viết tay | High |  | REQ13 | `A06` |  |
| `TC24` | Case 24: Log Hệ thống chỉ đọc và không trùng sự kiện | High |  | REQ13 | `A06` |  |
| `TC25` | Case 25: Nội dung Log và phản hồi lỗi | Medium |  | REQ13 | `A06` |  |
| `TC35` | Case 35: Load more Log và đổi điều kiện | High |  | REQ13 / REQ16 | `A06` |  |
| `TC26` | Case 26: Quy trình và Result riêng cho học viên | High |  | REQ14 | `A07` |  |
| `TC27` | Case 27: Load more quy trình | High |  | REQ14 / REQ16 | `A07` |  |
| `TC28` | Case 28: Nguồn Vô hiệu chỉ xem | High |  | REQ14 | `A07` |  |
| `TC29` | Case 29: Chọn quy trình đúng loại và center | High |  | REQ14 | `A07` |  |
| `TC30` | Case 30: Hủy, đổi trạng thái nguồn và request sai quyền | High |  | REQ14 | `A07` |  |
| `TC31` | Case 31: Ghi chú đồng nhất hai vị trí | High |  | REQ15 | `A08` |  |
| `TC32` | Case 32: Load more và đổi filter Ghi chú | High |  | REQ15 / REQ16 | `A08` |  |
| `TC33` | Case 33: Quyền owner trên mọi lượt ghi chú | High |  | REQ15 | `A08` |  |
| `TC34` | Case 34: Thêm ghi chú và bình luận từ chi tiết | High |  | REQ15 | `A08` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A09` | `A09.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A09` | `A09.01`, `A09.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A09` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A09` | `A09.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (12): `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A02.08`, `A09.01`, `A09.02`, `A09.03`, `A09.04`
- Frame Figma chưa có requirement (1): `ADM-HV-020610`
- Thiếu prototype link đi vào (1): `ADM-HV-020610`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (3): `EX08`, `EX09`, `EX10`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
