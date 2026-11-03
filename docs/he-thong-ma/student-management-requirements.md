# Quản lý học viên

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-HV-010000` | Danh sách học viên | `/danh-sach-hoc-vien` | `ADM-HV-010000-DK` | QC |

Requirement: `management_requirement/student_management/student_management_requirements.md` — Quản lý học viên (tiền tố `M-SM`).

## 2. Luồng

- `FLOW01` Xem danh sách và phân trang — 
- `FLOW02` Tìm kiếm học viên — 
- `FLOW03` Lọc học viên — 
- `FLOW04` Xuất Excel — 
- `FLOW05` Tạo tài khoản học viên — 
- `FLOW06` Xem mã lớp và ghi chú, mở Chi tiết học viên — 
- `FLOW07` Thêm lịch hẹn — 
- `FLOW08` Xem lịch sử học viên — 
- `FLOW09` Học phí trên hóa đơn hiện có trong lịch sử học viên — 
- `FLOW10` Thêm và lọc ghi chú — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-HV-010001` | Hover menu thao tác | Dropdown | ADM-HV-010000 | ADM-HV-010000 | — | `/danh-sach-hoc-vien?popup=ADM-HV-010001` | Figma | cao |
| `ADM-HV-010010` | Popup thêm học viên | Popup | ADM-HV-010000 | ADM-HV-010000 | — | `/danh-sach-hoc-vien?popup=ADM-HV-010010` | Figma | cao |
| `ADM-HV-010012` | Dropdown cấp độ | Dropdown | ADM-HV-010010 | ADM-HV-010000 | — | `/danh-sach-hoc-vien?popup=ADM-HV-010012` | Figma | cao |
| `ADM-HV-010060` | Popup thêm lịch hẹn | Popup | ADM-HV-010000 | ADM-HV-010000 | — | `/danh-sach-hoc-vien?popup=ADM-HV-010060` | Figma | cao |
| `ADM-HV-010062` | Đang mở | Dropdown | ADM-HV-010060 | ADM-HV-010000 | — | `/danh-sach-hoc-vien?popup=ADM-HV-010062` | Figma | cao |
| `ADM-HV-010070` | Popup danh sách lịch hẹn | Popup | ADM-HV-010000 | ADM-HV-010000 | — | `/danh-sach-hoc-vien?popup=ADM-HV-010070` | Figma | cao |
| `ADM-HV-010102` | Dropdown · Trạng thái | Dropdown | ADM-HV-010000 | ADM-HV-010000 | — | `/danh-sach-hoc-vien?popup=ADM-HV-010102` | Figma | cao |
| `ADM-HV-010202` | Dropdown · Tag | Dropdown | ADM-HV-010000 | ADM-HV-010000 | — | `/danh-sach-hoc-vien?popup=ADM-HV-010202` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Danh sách học viên

Frame: chưa có (tool đoán:ADM-HV-010102, ADM-HV-010202) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | ten-hoc-vien |  |  | — |  | `TC20`, `TC14`, `TC04` | Chưa sync | QC |
| `A01.02` | mui-ten-cuoi-dong |  |  | — |  | `TC54` | Chưa sync | QC |
| `A01.03` | gmail |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.04` | ngay-chot-don |  |  | — |  | `TC01`, `TC50` | Chưa sync | QC |
| `A01.05` | so-lop |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.06` | so-bill |  |  | — |  | `TC01`, `TC52`, `TC55` | Chưa sync | QC |
| `A01.07` | lop-hien-tai |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.08` | ghi-chu |  |  | — |  | `TC01`, `TC31`, `TC53` | Chưa sync | QC |
| `A01.09` | tong-doanh-thu |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.10` | hoan-tien |  |  | — |  | `TC01`, `TC55` | Chưa sync | QC |

### `A02` Popup Thêm học viên

Frame: chưa có (tool đoán:ADM-HV-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | trung-tam |  |  | — |  | `TC32`, `TC33`, `TC41`, `TC56`, `TC95` | Chưa sync | QC |
| `A02.02` | ho-va-ten |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | gioi-tinh |  |  | — |  |  | Chưa sync | QC |
| `A02.04` | ngay-sinh |  |  | — |  |  | Chưa sync | QC |
| `A02.05` | so-dien-thoai |  |  | — |  | `TC41` | Chưa sync | QC |
| `A02.06` | vai-tro |  |  | — |  | `TC06` | Chưa sync | QC |
| `A02.07` | gmail-email |  |  | — |  |  | Chưa sync | QC |
| `A02.08` | mat-khau |  |  | — |  | `TC89` | Chưa sync | QC |
| `A02.09` | ngay-chot-don |  |  | — |  | `TC06`, `TC88` | Chưa sync | QC |
| `A02.10` | chon-cap-do-level |  |  | — |  |  | Chưa sync | QC |
| `A02.11` | code |  |  | — |  | `TC06`, `TC10`, `TC09`, `TC90`, `TC91` | Chưa sync | QC |

### `A03` Bộ lọc Tag

Frame: chưa có (tool đoán:ADM-HV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A04` Số lớp và Lớp hiện tại

Frame: chưa có (tool đoán:ADM-HV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` Thêm lịch hẹn

Frame: chưa có (tool đoán:ADM-HV-010060, ADM-HV-010070) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | noi-dung |  |  | — |  | `TC21` | Chưa sync | QC |
| `A05.02` | thoi-gian |  |  | — |  | `TC35` | Chưa sync | QC |
| `A05.03` | do-uu-tien |  |  | — |  | `TC21`, `TC22` | Chưa sync | QC |
| `A05.04` | nguoi-phu-trach |  |  | — |  | `TC21`, `TC35`, `TC23`, `TC34`, `TC68` | Chưa sync | QC |
| `A05.05` | theo-doi |  |  | — |  | `TC21`, `TC22`, `TC23`, `TC34`, `TC68` | Chưa sync | QC |
| `A05.06` | ghi-chu |  |  | — |  | `TC21` | Chưa sync | QC |
| `A05.07` | huy |  |  | — |  |  | Chưa sync | QC |
| `A05.08` | xac-nhan |  |  | — |  | `TC21`, `TC22`, `TC24` | Chưa sync | QC |

### `A06` Lịch sử học viên

Frame: chưa có (tool đoán:ADM-HV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A07` Học phí — danh sách hóa đơn

Frame: chưa có (tool đoán:ADM-HV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | the-so-hoa-don |  |  | — |  |  | Chưa sync | QC |
| `A07.02` | the-tong-hoc-phi |  |  | — |  |  | Chưa sync | QC |
| `A07.03` | bang-hoa-don |  |  | — |  |  | Chưa sync | QC |
| `A07.04` | ten-hoa-don |  |  | — | governed-by `REQ01` | `TC44` | Chưa sync | QC |
| `A07.05` | trang-thai-loai |  |  | — |  |  | Chưa sync | QC |
| `A07.06` | hieu-khach-ghi-chu |  |  | — |  | `TC72` | Chưa sync | QC |
| `A07.07` | ghi-nhan-ngay-hen |  |  | — |  |  | Chưa sync | QC |
| `A07.08` | lop-du-kien |  |  | — |  |  | Chưa sync | QC |
| `A07.09` | so-tien-da-dong |  |  | — |  |  | Chưa sync | QC |
| `A07.10` | kpi-hoc-phi |  |  | — |  |  | Chưa sync | QC |
| `A07.11` | hinh |  |  | — |  | `TC70`, `TC44`, `TC73` | Chưa sync | QC |
| `A07.12` | phu-trach-lien-ket |  |  | — |  | `TC72` | Chưa sync | QC |
| `A07.13` | cuon-ngang |  |  | — |  | `TC27`, `TC63` | Chưa sync | QC |

### `A08` Lịch sử lớp

Frame: chưa có (tool đoán:ADM-HV-010062) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | so-lop |  |  | — |  | `TC64`, `TC77`, `TC79`, `TC83` | Chưa sync | QC |
| `A08.02` | len-ky |  |  | — |  | `TC28`, `TC64`, `TC79`, `TC83` | Chưa sync | QC |
| `A08.03` | di-hoc |  |  | — |  | `TC64`, `TC74`, `TC75`, `TC83` | Chưa sync | QC |
| `A08.04` | btvn |  |  | — |  | `TC64`, `TC74`, `TC75`, `TC83` | Chưa sync | QC |
| `A08.05` | dat-kpi |  |  | — |  | `TC28`, `TC64`, `TC79`, `TC83` | Chưa sync | QC |
| `A08.06` | danh-gia |  |  | — |  | `TC28`, `TC64`, `TC81`, `TC83` | Chưa sync | QC |
| `A08.07` | ma-lop |  |  | — |  | `TC28` | Chưa sync | QC |
| `A08.08` | khoa-hoc |  |  | — |  | `TC28` | Chưa sync | QC |
| `A08.09` | danh-gia |  |  | — |  | `TC28`, `TC64`, `TC81`, `TC83` | Chưa sync | QC |
| `A08.10` | kpi |  |  | — |  |  | Chưa sync | QC |
| `A08.11` | mui-ten-cuoi-dong |  |  | — |  |  | Chưa sync | QC |
| `A08.12` | hoan-thanh |  |  | — |  | `TC28`, `TC77`, `TC78`, `TC79`, `TC83` | Chưa sync | QC |
| `A08.13` | chua-hoan-thanh |  |  | — |  | `TC78`, `TC83` | Chưa sync | QC |
| `A08.14` | 8-5 |  |  | — |  |  | Chưa sync | QC |
| `A08.15` | 7-va-8-5 |  |  | — |  |  | Chưa sync | QC |
| `A08.16` | 5-5-va-7 |  |  | — |  |  | Chưa sync | QC |
| `A08.17` | 4-va-5-5 |  |  | — |  |  | Chưa sync | QC |
| `A08.18` | 2-va-4 |  |  | — |  |  | Chưa sync | QC |
| `A08.19` | 2 |  |  | — |  |  | Chưa sync | QC |

### `A09` Ghi chú — danh sách, bình luận và popup thêm

Frame: chưa có (tool đoán:ADM-HV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | editor |  |  | — |  |  | Chưa sync | QC |
| `A09.02` | gui |  |  | — |  |  | Chưa sync | QC |
| `A09.03` | so-binh-luan |  |  | — |  | `TC67` | Chưa sync | QC |
| `A09.04` | card-binh-luan |  |  | — |  |  | Chưa sync | QC |
| `A09.05` | binh-luan-ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A09.06` | lam-moi-binh-luan |  |  | — |  |  | Chưa sync | QC |

### `A10` Toast phản hồi CRUD

Frame: chưa có (tool đoán:ADM-HV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa sync | QC |
| `A10.02` | thong-tin |  |  | — |  |  | Chưa sync | QC |
| `A10.03` | canh-bao |  |  | — |  | `TTC02` | Chưa sync | QC |
| `A10.04` | loi |  |  | — |  |  | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` |  | Chức năng Quản lý học viên đầy đủ thuộc các role `Administrator`, `Sale`, `Support`, `Class Handler`. |
| `REQ02` |  | Mỗi trang hiển thị tối đa 50 học viên. Phân trang hiển thị Trang trước, các số trang, dấu `...`, các trang cuối và Trang sau như UI; chỉ một trang được đánh dấu đang chọn. Trang trước bị vô hiệu hóa tại trang đầu, Trang sau bị vô hiệu hóa tại trang cuối; chuyển trang giữ nguyên search/filter. |
| `REQ03` |  | Search chỉ áp dụng trên `Tên học viên` theo kiểu khớp chứa từ khóa, không yêu cầu khớp chính xác toàn bộ tên; tự chạy sau 2 giây kể từ lần nhập cuối hoặc chạy ngay khi nhấn Enter. |
| `REQ04` |  | Search, Trạng thái và Tag được kết hợp đồng thời; thay đổi điều kiện đưa danh sách về trang 1. |
| `REQ05` |  | Dropdown Trạng thái dùng checkbox chọn nhiều với mapping nhãn UI `Mới → [0]`, `Đang học → [1]`, `Đợi lớp → [2]`. Trạng thái hồ sơ là giá trị BE **tính** theo thứ tự ưu tiên: `Đang học` = có ≥ 1 lớp với status trong lớp `Đang học` / `Dự thính` và lớp đó `Đang học`; `Đợi lớp` = không thoả trên nhưng đã từng vào lớp (bản ghi chưa `Xóa`); `Mới` = chưa từng vào lớp. Không nhập tay, không lưu field riêng, tính lại ngay khi status trong lớp hoặc trạng thái lớp đổi; hồ sơ không dùng `Bảo lưu` / `Drop dời` / `Drop`. Nhiều trạng thái dùng OR, không trùng dòng học viên; không chọn trạng thái thì bỏ điều kiện này. FE gửi tập giá trị đã chọn theo hợp đồng API để BE lọc, không tự ánh xạ từ 7 status trong lớp. Kết hợp keyword tên/Tag bằng AND và dùng tổng kết quả BE trả để phân trang. |
| `REQ06` |  | Filter Tag có search ở đầu popup, nhóm thu gọn/mở rộng bằng chevron và checkbox tag chọn nhiều. Nhóm/tag lấy động từ dữ liệu user định nghĩa; tìm theo mã/tên tag, giữ checkbox đang chọn khi tìm kiếm, thu gọn hoặc mở lại. Nhiều tag dùng OR kể cả khác nhóm; không chọn tag thì bỏ điều kiện Tag. Kết hợp bằng AND với Trạng thái/keyword tên, đổi lựa chọn đưa danh sách về trang 1. |
| `REQ07` |  | Nút Excel nằm ở góc dưới bên phải bảng, cùng hàng với phần phân trang theo UI chuẩn. File Excel có đúng thứ tự cột: `Tên học viên`, `Số điện thoại`, `Email`, `Ngày tạo`. Không có search/filter thì xuất toàn bộ danh sách thuộc phạm vi dữ liệu của user; có search/filter thì xuất toàn bộ kết quả thỏa điều kiện. Luôn xuất tất cả trang, không chỉ trang đang xem. |
| `REQ08` |  | Dropdown `Chọn cấp độ` có đúng 9 lựa chọn từ `Cấp độ 1` đến `Cấp độ 9`, chọn một giá trị; placeholder `Chọn` không được tính là lựa chọn hợp lệ. |
| `REQ09` |  | Code do backend tự sinh, đúng 6 chữ số và chỉ đọc. Với cấp độ L từ 1 đến 9, mã bắt đầu ở `L × 100000`, tăng dần trong dải `L00000..L99999` và phải duy nhất trong cùng center kể cả khi tạo đồng thời; các center khác nhau được trùng Code. Mã hiển thị sau khi chọn cấp độ; backend tìm mã chưa dùng và kiểm tra lại khi lưu. Ví dụ cấp độ 1: 100000, 100001, …; cấp độ 2: 200000, 200001, …. Không cấp mã vượt dải cấp độ. |
| `REQ10` |  | Mọi field trong popup `Thêm học viên` đều bắt buộc, kể cả field hệ thống điền. Vai trò là `Student` (nhãn Học viên); Ngày chốt đơn mặc định ngày hiện tại và cho chọn ngày quá khứ/hiện tại/tương lai; Email/SĐT phải đúng định dạng, mật khẩu tối thiểu 8 ký tự; Gmail nhận email ở các domain khác; cấp độ bắt buộc chọn 1..9; Code tuân REQ09. Nút Hủy không tạo tài khoản; mật khẩu có nút hiện/ẩn. |
| `REQ11` |  | Badge cạnh tên học viên bằng số lịch hẹn hiện có của học viên đó; xóa thành công cập nhật lại số này. |
| `REQ12` |  | Số lớp tính tất cả lớp đã được thêm cho học viên và hover/bấm chỉ hiển thị mã các lớp. Lớp hiện tại gồm những lớp đồng thời có status học viên trong lớp `Đang học` và trạng thái lớp `Đang học`; badge bằng số lớp thỏa cả hai điều kiện, hover chỉ hiển thị mã lớp. Không có lớp hiện tại thì hiển thị text `Chưa có`, không mở danh sách rỗng. Số bill là số hóa đơn được thêm/liên kết với học viên, chỉ hiển thị số và không mở nội dung khi hover/bấm. |
| `REQ13` |  | Popup lịch hẹn học viên có Nội dung, Thời gian chỉ ngày (không giờ), Độ ưu tiên, Người phụ trách, Theo dõi, Ghi chú và Hủy/Xác nhận. Đối tượng tự gắn học viên đang chọn, Trạng thái tự mặc định Mới; không render control Đối tượng/Trạng thái. Nội dung/Ghi chú/ngày hẹn/Độ ưu tiên và ít nhất một Người phụ trách bắt buộc; Theo dõi được để trống. Bộ bốn mức ưu tiên và trạng thái nghiệp vụ theo requirement Lịch Hẹn; Độ ưu tiên mặc định `Chọn`, bắt buộc user tự chọn, không tự điền Bình thường. |
| `REQ14` |  | Cả Người phụ trách và Theo dõi chỉ chọn Trợ giảng (Teaching Assistant), Support, Nhân viên kinh doanh (Sale) theo UI chuẩn. Chọn nhiều qua +, search/nhóm/checkbox và chip avatar+tên; cùng user được ở cả hai field, không trùng trong cùng field. Người tạo chỉ được chọn sẵn làm Người phụ trách nếu có role hợp lệ; trước lưu cần ít nhất một người. Không gán role ngoài ba nhóm, kể cả request trực tiếp. |
| `REQ15` |  | Danh sách học viên của Sale, Support và Class Handler chỉ hiển thị học viên mà user đó được gán làm Người phụ trách hoặc Người theo dõi. |
| `REQ16` |  | Một học viên được gán cho cùng user ở cả hai vai trò chỉ xuất hiện một lần trong danh sách của user đó. |
| `REQ17` |  | Popup Lịch sử học viên tải đúng học viên, có ba tab Học phí / Lịch sử lớp / Ghi chú; mặc định Học phí. Tab active theo màu/chỉ báo cam của ảnh chuẩn. Giữ ngữ cảnh khi đổi tab, không trộn hóa đơn, lớp, ghi chú hoặc bình luận của học viên khác. |
| `REQ18` |  | Lịch sử lớp gồm tất cả lớp học viên đã từng được thêm, không chỉ lớp hiện tại. Mỗi lớp hiển thị status riêng của học viên trong lớp đó; không đổi status học viên ở popup lịch sử. |
| `REQ19` |  | Ghi chú có Loại `Công khai`/`Riêng tư`, Độ ưu tiên `Bình thường`/`Quan trọng`/`Rất quan trọng`, Trạng thái `Mới`/`Đóng`. Owner là người tạo ghi chú; chỉ owner đổi Loại/Độ ưu tiên. Ghi chú Riêng tư hoặc đã Đóng chỉ owner xem được, gồm cả bình luận. Tiêu đề/Nội dung bắt buộc và không giới hạn độ dài; Nội dung trong form thêm là văn bản thuần. |
| `REQ20` |  | Filter ghi chú kết hợp đồng thời Loại, Độ ưu tiên, Trạng thái và Thời gian. Mở tab mặc định Mới + Tuần này; Loại/Độ ưu tiên chưa chọn và không giới hạn kết quả theo hai bộ lọc đó. `Tùy chọn` cho phép chọn `Từ ngày`/`Đến ngày`, Từ ngày không được sau Đến ngày. Mọi kết quả phải tuân quyền xem ghi chú. |
| `REQ21` |  | Email học viên phải duy nhất trong từng trung tâm. Trùng email trong cùng trung tâm bị từ chối; trùng email giữa các trung tâm khác nhau được phép. |
| `REQ22` |  | Xóa hóa đơn hiện có bắt buộc xác nhận và là xóa mềm theo Hóa đơn. Đồng bộ các khoản học phí, số dư của tất cả học viên liên kết hóa đơn; khoản học phí thuộc hóa đơn đã xóa không còn hiệu lực trong thống kê học viên/lớp liên kết. Tính lại từ hóa đơn/học phí còn hiệu lực và tải lại các màn liên quan; chỉ báo thành công khi đồng bộ hoàn tất. Hủy/lỗi giữ nguyên toàn bộ, không cập nhật dở dang hoặc tự tạo hoàn tiền. |
| `REQ23` |  | Thêm học phí, cập nhật hoặc xóa hóa đơn thất bại không lưu thay đổi dở dang; lỗi validation/đồng bộ dùng rule Hóa đơn và Toast chung. Copy chỉ thao tác clipboard và thông báo kết quả, không ghi dữ liệu tài chính. |
| `REQ24` |  | Không kiểm tra trùng số điện thoại học viên; một học viên được liên kết nhiều hóa đơn. Form chỉnh sửa hóa đơn theo Hóa đơn Trang 2; Tên hóa đơn chỉ đọc, các field còn lại theo validation nguồn, KPI sửa được. Không tạo hóa đơn mới tại tab Học phí. |
| `REQ25` |  | Copy sao chép chính xác tên hóa đơn hiện có vào clipboard theo Hóa đơn REQ06, không tạo bản sao hóa đơn và không tăng Số Hoá Đơn/Số bill hoặc số tiền. |
| `REQ26` |  | Chỉ owner ghi chú được đóng/mở lại ghi chú trong phạm vi học viên được truy cập. Đã Đóng chỉ owner thấy ghi chú/bình luận; user khác không được xem cả qua request trực tiếp. Quyền role không thay quyền owner. |
| `REQ27` |  | Loại hóa đơn gồm đúng 22 lựa chọn theo Hóa đơn; Trạng thái/Tài khoản nhận/Tiền tệ và rule Quy đổi VND theo form nguồn. Không lấy danh sách loại cũ từ ảnh học viên thay cho Hóa đơn. |
| `REQ28` |  | Thêm học phí dùng hai bước theo Hóa đơn: chọn học viên liên kết rồi mở form. Tick Chọn học viên có sẵn đồng bộ Tên/Mã hai chiều, Email chỉ đọc; bỏ tick/Thêm học viên nhập Tên/Email/Level 1..9, ẩn Mã và sinh Code không trùng. Lớp học/Giá trị bắt buộc; Giá trị mặc định 0, không vượt Còn lại; hai ghi chú không bắt buộc. Không tạo hóa đơn mới trong flow này. |
| `REQ29` |  | Status học viên gắn với từng quan hệ học viên–lớp và độc lập với status lớp; học viên có 3 lớp có 3 status riêng. Dùng đúng 7 PNG chuẩn trong bảng UI. Chỉ chỉnh tại `Cài đặt lớp → Học viên → Chọn trạng thái` bằng dropdown 7 status, không chỉnh tại Danh sách học viên. Lịch sử lớp dùng icon/tên trạng thái lớp theo requirement lớp; không dùng bộ 7 icon học viên làm status dòng lớp. Status tài khoản Chính thức vẫn chỉ đọc theo requirement chi tiết. |
| `REQ30` |  | Danh sách, kết quả search/filter và mọi trang sắp theo ngày tạo học viên giảm dần, mới nhất trước. Ngày chốt đơn chỉ là dữ liệu hiển thị/nhập, không dùng để sắp xếp; trùng Ngày chốt đơn vẫn theo ngày tạo học viên. |
| `REQ31` |  | Tổng doanh thu bằng tổng số tiền hóa đơn học viên trừ số tiền bill có trạng thái Hoàn tiền. Hoàn tiền bằng tổng số tiền bill có trạng thái Hoàn tiền; không yêu cầu thêm trạng thái xử lý hoàn thành riêng. Ví dụ bill 1/2/3 triệu, bill 3 triệu Hoàn tiền: doanh thu 3 triệu, hoàn tiền 3 triệu, Số bill 3. |
| `REQ32` |  | Tên học viên mở menu Thêm lịch hẹn/Xem lịch sử; mũi tên cuối dòng mở Chi tiết học viên. Ghi chú mở nội dung đúng học viên, màu cam nghĩa là có ghi chú, xám là chưa có; không trộn với status ghi chú Mới/Đóng. |
| `REQ33` |  | Tab Học phí có hai thẻ Số Hoá Đơn/Tổng Học Phí và bảng 16 cột, cuộn ngang theo ảnh chuẩn. Số Hoá Đơn đếm hóa đơn tạo cho học viên mỗi hóa đơn một lần; Tổng Học Phí cộng tiền đã dùng của đúng học viên. Bảng con hiển thị các khoản học phí thuộc invoice_id đang mở, gồm Học viên/Mã/Lớp-kỳ/Số tiền/hai ghi chú; không gộp các khoản chỉ vì cùng học viên. Nhãn Mới cạnh tên học viên trong bảng con là tag của item học phí. Hành vi các cột/menu theo Hóa đơn. |
| `REQ34` |  | Lịch sử lớp có 6 thẻ và bảng theo UI chuẩn. Số Lớp = lớp chính thức/tổng lớp lịch sử, mỗi class_id một lần. Đi Học/BTVN giữ công thức từng học viên/lớp đủ dữ liệu và làm tròn kết quả cuối 1 chữ số thập phân. getUpTerm tính trên cả lớp theo hai nhánh Hoàn thành/chưa Hoàn thành; vòng % dòng lớp dùng giá trị này. Lên Kỳ trung bình lớp chính thức đã Hoàn thành; Đạt Kpi trung bình tất cả lớp chính thức, không đếm lớp đạt ≥ 80%. Hai thẻ/vòng % định dạng 2 chữ số có nghĩa theo source. Đánh Giá lấy trung bình Q=scoreEvaluateClass của lớp chính thức rồi đổi A–F theo ngưỡng nguồn, không trung bình chữ. Tập tính rỗng: Lên Kỳ/Đạt Kpi 0%, Đánh Giá trống nếu không có lớp chính thức; Đi Học/BTVN chưa có dữ liệu hợp lệ thì trống. Mẫu số HV bằng 0 trả r_lớp 0%. Mũ xanh = trạng thái lớp Hoàn thành; x/N Buổi là tiến độ cả lớp; mũi tên mở Chi tiết lớp phía dưới popup. |
| `REQ35` |  | Tab Ghi chú có card, bốn bộ lọc, nút +, popup Thêm ghi chú văn bản thuần và ô bình luận văn bản thuần theo ảnh mới. Metadata góc phải gồm avatar/tên/ngày giờ tạo bình luận gần nhất và icon đồng hồ cam; chưa có bình luận thì ẩn cụm này. Avatar/tên/ngày tạo ghi chú nằm dưới tiêu đề, tên Bạn nếu tài khoản hiện tại là người tạo; Đã chỉnh sửa khi note đã sửa. Badge ưu tiên và icon loại theo ảnh; menu owner Chỉnh sửa/Đóng/Xóa. Nhập/gửi bình luận ở cuối danh sách, không có toolbar/nút Trả lời riêng; không tạo thread. Làm mới chỉ tải lại bình luận và metadata của note hiện tại. Người tạo bình luận được sửa/xóa bình luận của mình; user có quyền xem ghi chú được gửi bình luận không rỗng. Tiêu đề/nội dung/bình luận không giới hạn độ dài nghiệp vụ; dữ liệu gắn đúng học viên và note. |
| `REQ36` |  | Lịch sử hóa đơn (tab Học phí) cho đầy đủ thao tác học phí và hóa đơn hiện có theo Hóa đơn/Chi tiết học phí; không có nút/form/request tạo hóa đơn mới. Menu hoạt động: Thêm học phí, Chỉnh sửa, Copy tên, Xóa mềm; Lịch sử hành động/Xuất hóa đơn hiển thị disable theo giai đoạn của nguồn. |
| `REQ37` |  | Giá trị khoản học phí không vượt Còn lại của toàn hóa đơn; Còn lại bằng Số tiền đã đóng trừ tổng học phí đã thêm, không âm. Thêm thành công cập nhật phần xổ xuống/số lượng học phí/Còn lại và số liệu học viên từ dữ liệu đã lưu. |
| `REQ38` |  | Chỉnh sửa dùng cùng hóa đơn với ICS/CG và màn Hóa đơn, không tạo bản dữ liệu riêng; giữ bản lưu trước và yêu cầu reload khi xung đột. Role/phạm vi thao tác tại màn học viên theo REQ01/REQ15, không kế thừa giới hạn chỉ Admin của menu Hóa đơn. |
| `REQ39` |  | Danh sách có bộ lọc `Trung tâm` nằm cùng hàng với các bộ lọc khác, cho chọn một hoặc nhiều trung tâm; khi chọn thì danh sách, tổng số và phân trang chỉ tính dữ liệu của các trung tâm đã chọn, kết hợp `AND` với các bộ lọc khác. Không chọn thì hiển thị dữ liệu của mọi trung tâm. Role Admin không dùng ô chọn trung tâm trên header. Khi tạo mới bắt buộc chọn `Trung tâm`; bản ghi được lưu thuộc trung tâm đã chọn. Backend kiểm tra lại trung tâm khi lưu, không chỉ dựa vào UI. |
| `EX01` | Ngoại lệ | Tạo tài khoản thiếu bất kỳ field bắt buộc nào → hiển thị `Vui lòng nhập đầy đủ thông tin bắt buộc.`, không tạo tài khoản. |
| `EX02` | Ngoại lệ | Code vừa sinh bị trùng do nhiều request đồng thời → hệ thống phải sinh lại Code trước khi lưu; không được tạo hai học viên cùng Code trong cùng center; center khác được trùng Code. |
| `EX03` | Ngoại lệ | Không thể tạo Code duy nhất trong center hiện tại → hiển thị `Không thể tạo mã học viên. Vui lòng thử lại.`, không tạo tài khoản. |
| `EX04` | Ngoại lệ | Thêm lịch hẹn thiếu bất kỳ field bắt buộc nào → hiển thị `Vui lòng nhập đầy đủ thông tin bắt buộc.`, không tạo lịch hẹn. |
| `EX05` | Ngoại lệ | Export lỗi → hiển thị `Không thể xuất danh sách học viên. Vui lòng thử lại.`, không tải file lỗi/rỗng xuống thiết bị. |
| `EX06` | Ngoại lệ | Search nhận thêm ký tự trước khi đủ 2 giây → hủy thời gian chờ cũ và tính lại 2 giây từ ký tự mới nhất. |
| `EX07` | Ngoại lệ | Search đang chờ nhưng user nhấn Enter → tìm kiếm ngay một lần và hủy lượt tự tìm kiếm đang chờ. |
| `EX08` | Ngoại lệ | User không thuộc role được phép xuất hiện trong Người phụ trách/Người theo dõi → không hiển thị trong danh sách chọn và không thể gán bằng request trực tiếp. |
| `EX09` | Ngoại lệ | Học viên không có lớp hiện tại → hiển thị `Chưa có`, không hiển thị popup lớp khi hover. |
| `EX10` | Ngoại lệ | Email đã tồn tại trong cùng trung tâm → hiển thị `Email đã được sử dụng.`, không tạo tài khoản; email giống nhau ở hai trung tâm khác nhau vẫn được phép. |
| `EX11` | Ngoại lệ | Người phụ trách rỗng sau khi người tạo tự gỡ mình → chặn tạo và yêu cầu chọn ít nhất một người phụ trách; Theo dõi được để trống. |
| `EX12` | Ngoại lệ | User hủy popup xác nhận xóa hóa đơn → đóng popup, không xóa và không thay đổi dữ liệu. |
| `EX13` | Ngoại lệ | Xóa hóa đơn thất bại → giữ nguyên hóa đơn, học phí và số dư liên kết, không cập nhật dở dang; hiển thị `Không thể xóa hóa đơn. Vui lòng thử lại.` |
| `EX14` | Ngoại lệ | User không phải người tạo cố xem ghi chú Riêng tư → không trả về và không hiển thị nội dung ghi chú. |
| `EX15` | Ngoại lệ | Khoảng thời gian Tùy chọn có Từ ngày sau Đến ngày → chặn áp dụng bộ lọc. |
| `EX16` | Ngoại lệ | Thêm học phí, copy tên hoặc chỉnh sửa hóa đơn thất bại → không báo thành công, không lưu dữ liệu dở dang; copy tên không gọi tạo hóa đơn. Lỗi lưu/đồng bộ theo Hóa đơn và Toast chung. |
| `EX17` | Ngoại lệ | Không còn Code hợp lệ trong dải cấp độ đã chọn → không cấp mã vượt dải/khác 6 chữ số, không tạo tài khoản, giữ popup và hiển thị `Không thể tạo mã học viên. Vui lòng thử lại.` |
| `EX18` | Ngoại lệ | Email/SĐT sai định dạng hoặc mật khẩu dưới 8 ký tự → chặn tạo tài khoản, hiển thị lỗi ở field tương ứng và giữ dữ liệu trên form để chỉnh sửa; không lưu tài khoản dở dang. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Hiển thị danh sách học viên | High | Có | Flow 1 / REQ30 | `A01` | `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A01.08`, `A01.09`, `A01.10` |
| `TC20` | Case 20: Mở menu thao tác học viên | High |  | REQ11 | `A01` | `A01.01` |
| `TC25` | Case 25: Phạm vi học viên theo người được gán | High |  | REQ15 / REQ16 | `A01` |  |
| `TC31` | Case 31: Sale, Support và Class Handler có đầy đủ quyền thao tác | High |  | REQ01 / Ràng buộc quyền | `A01` | `A01.08` |
| `TC50` | Case 50: Sắp xếp ngày tạo học viên mới nhất trước | High |  | REQ30 | `A01` | `A01.04` |
| `TC52` | Case 52: Số bill chỉ hiển thị | Medium |  | REQ12 | `A01` | `A01.06` |
| `TC53` | Case 53: Màu và nội dung Ghi chú | High |  | REQ32 | `A01` | `A01.08` |
| `TC54` | Case 54: Menu tên và mũi tên chi tiết | High |  | REQ32 | `A01` | `A01.02` |
| `TC55` | Case 55: Doanh thu trừ bill Hoàn tiền | High |  | REQ31 | `A01` | `A01.06`, `A01.10` |
| `TC94` | Case 94: Lọc danh sách theo trung tâm | High |  | REQ39 | `A01` |  |
| `TC03` | Case 3: Thay đổi điều kiện khi đang ở trang sau | Medium |  | REQ04 | `A01` |  |
| `TC14` | Case 14: Search tương đối theo tên sau 2 giây | High | Có | Flow 2 / REQ03 | `A01` | `A01.01` |
| `TC15` | Case 15: Nhập tiếp trước thời gian auto search | Medium |  | EX06 | `A01` |  |
| `TC16` | Case 16: Search ngay bằng Enter | High |  | Flow 2 / EX07 | `A01` |  |
| `TC17` | Case 17: Xóa từ khóa tìm kiếm | Medium |  | Flow 2 | `A01` |  |
| `TC11a` | Case 11a: Công thức ưu tiên Đang học | High |  | Flow 3 / REQ05 | `A01` |  |
| `TC11b` | Case 11b: Nhóm đổi theo status trong lớp | High |  | Flow 3 / REQ05 / REQ29 | `A01` |  |
| `TC11` | Case 11: Nhãn UI và mapping filter logic 0/1/2 | High |  | Flow 3 / REQ05 | `A01` |  |
| `TC59` | Case 59: Filter logic độc lập với status học viên trong lớp | High |  | REQ05 | `A01` |  |
| `TC60` | Case 60: Chọn nhiều trạng thái theo OR | High |  | REQ05 | `A01` |  |
| `TC02` | Case 2: Phân trang bằng số | High |  | Flow 1 / REQ02 | `A01` |  |
| `TC04` | Case 4: Xuất Excel thành công | High | Có | Flow 4 / REQ07 | `A01` | `A01.01` |
| `TC05` | Case 5: Xuất Excel thất bại | Medium |  | Flow 4 / EX05 | `A01` |  |
| `TC06` | Case 6: Mở popup tạo tài khoản | High |  | Flow 5 / REQ10 | `A02` | `A02.06`, `A02.09`, `A02.11` |
| `TC07` | Case 7: Chặn tạo tài khoản khi thiếu field | High |  | EX01 / REQ10 | `A02` |  |
| `TC10` | Case 10: Tạo tài khoản học viên thành công | High | Có | Flow 5 | `A02` | `A02.11` |
| `TC32` | Case 32: Chặn email trùng trong cùng trung tâm | High |  | Flow 5 / EX10 / REQ21 | `A02` | `A02.01` |
| `TC33` | Case 33: Cho phép email trùng ở trung tâm khác | High |  | REQ21 | `A02` | `A02.01` |
| `TC41` | Case 41: Cho phép trùng số điện thoại | High |  | REQ24 | `A02` | `A02.01`, `A02.05` |
| `TC56` | Case 56: Gmail nhận email ngoài Gmail | High |  | REQ10 / REQ21 | `A02` | `A02.01` |
| `TC88` | Case 88: Ngày chốt đơn quá khứ và tương lai | High |  | REQ10 | `A02` | `A02.09` |
| `TC89` | Case 89: Email/SĐT đúng định dạng và mật khẩu tối thiểu 8 ký tự | High |  | REQ10 | `A02` | `A02.08` |
| `TC95` | Case 95: Bắt buộc chọn trung tâm khi tạo | High |  | REQ39 | `A02` | `A02.01` |
| `TC08` | Case 8: Danh sách Level | High |  | REQ08 | `A02` |  |
| `TC09` | Case 9: Code 6 chữ số theo cấp độ và duy nhất khi tạo đồng thời | High |  | EX02 / REQ09 | `A02` | `A02.11` |
| `TC57` | Case 57: Dải mã từng cấp độ | High |  | REQ08 / REQ09 | `A02` |  |
| `TC90` | Case 90: Code hiển thị ngay sau chọn cấp độ | High |  | REQ09 | `A02` | `A02.11` |
| `TC91` | Case 91: Cho phép Code trùng giữa center | High |  | REQ09 | `A02` | `A02.11` |
| `TC12` | Case 12: Tìm tag theo mã/tên trong popup nhóm | High |  | REQ06 | `A03` |  |
| `TC13` | Case 13: Chọn nhiều Tag và kết hợp điều kiện | High |  | Flow 3 / REQ04 / REQ06 | `A03` |  |
| `TC61` | Case 61: Bỏ chọn toàn bộ checkbox filter | Medium |  | REQ05 / REQ06 | `A03` |  |
| `TC62` | Case 62: Giữ checkbox Tag khi tìm kiếm và thu gọn nhóm | High |  | REQ06 | `A03` |  |
| `TC18` | Case 18: Hover mã lớp hiện tại | High |  | Flow 6 / REQ12 | `A04` |  |
| `TC19` | Case 19: Học viên chưa có lớp hiện tại | Medium |  | EX09 | `A04` |  |
| `TC51` | Case 51: Số lớp và Lớp hiện tại hiển thị mã lớp | High |  | REQ12 | `A04` |  |
| `TC58` | Case 58: Cả status học viên và status lớp phải Đang học | High |  | REQ12 | `A04` |  |
| `TC21` | Case 21: UI chuẩn popup lịch hẹn từ học viên | High |  | Flow 7 / REQ13 / REQ14 | `A05` | `A05.01`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A05.08` |
| `TC22` | Case 22: Chặn lịch hẹn thiếu field | High |  | EX04 / REQ13 | `A05` | `A05.03`, `A05.05`, `A05.08` |
| `TC24` | Case 24: Thêm lịch hẹn thành công | High | Có | Flow 7 / REQ11 | `A05` | `A05.08` |
| `TC35` | Case 35: Cho phép thời gian lịch hẹn trong quá khứ | High |  | Flow 7 / REQ13 | `A05` | `A05.02`, `A05.04` |
| `TC23` | Case 23: Role picker lịch hẹn học viên theo UI chuẩn | High |  | EX08 / REQ14 | `A05` | `A05.04`, `A05.05` |
| `TC34` | Case 34: Chọn nhiều user và trùng giữa hai field lịch hẹn | High |  | REQ14 | `A05` | `A05.04`, `A05.05` |
| `TC68` | Case 68: Bộ chọn người bằng user ID và chip | High |  | REQ14 | `A05` | `A05.04`, `A05.05` |
| `TC26` | Case 26: Mở lịch sử đúng học viên | High |  | Flow 8 / REQ17 | `A06` |  |
| `TC27` | Case 27: Xem và thao tác tab Học phí | High | Có | Flow 9 / REQ17 / REQ33 | `A07` | `A07.13` |
| `TC63` | Case 63: Phân bổ hóa đơn mở rộng và cuộn ngang | High |  | REQ33 | `A07` | `A07.13` |
| `TC69` | Case 69: Số hóa đơn và tổng tiền đã dùng của học viên | High |  | REQ33 | `A07` |  |
| `TC70` | Case 70: Lịch sử không tạo hóa đơn và menu đúng giai đoạn | High |  | REQ36 / REQ25 | `A07` | `A07.11` |
| `TC72` | Case 72: Hành vi cột và item học phí dùng chung | Medium |  | REQ33 / REQ36 | `A07` | `A07.06`, `A07.12` |
| `TC43` | Case 43: Học phí trên nhiều hóa đơn hiện có | High |  | REQ24 / REQ28 / REQ37 | `A07` |  |
| `TC46` | Case 46: Thêm học phí cho học viên có sẵn | High |  | Flow 9 / REQ28 | `A07` |  |
| `TC47` | Case 47: Tạo học viên qua học phí của hóa đơn hiện có | High |  | Flow 9 / REQ28 | `A07` |  |
| `TC71` | Case 71: Giới hạn Còn lại và cập nhật số học phí | High |  | REQ28 / REQ37 | `A07` |  |
| `TC42` | Case 42: Dropdown chỉnh sửa theo Hóa đơn | High |  | REQ27 | `A07` |  |
| `TC44` | Case 44: Chỉnh sửa và Copy tên hóa đơn | High |  | Flow 9 / REQ24 / REQ25 | `A07` | `A07.04`, `A07.11` |
| `TC73` | Case 73: Xung đột chỉnh sửa ICS/CG | High |  | REQ38 | `A07` | `A07.11` |
| `TC36` | Case 36: Xác nhận xóa mềm hóa đơn | High |  | Flow 9 / EX12 / REQ22 | `A07` |  |
| `TC37` | Case 37: Xóa hóa đơn thất bại | High |  | Flow 9 / EX13 / REQ22 | `A07` |  |
| `TC40` | Case 40: Lỗi thao tác học phí và hóa đơn hiện có | High |  | Flow 9 / EX16 / REQ23 | `A07` |  |
| `TC76` | Case 76: Xóa hóa đơn đồng bộ mọi học viên liên kết | High |  | Flow 9 / REQ22 / REQ33 | `A07` |  |
| `TC28` | Case 28: UI chuẩn Lịch sử lớp | High |  | REQ18 / REQ34 | `A08` | `A08.02`, `A08.05`, `A08.06`, `A08.07`, `A08.08`, `A08.09`, `A08.12` |
| `TC64` | Case 64: Công thức thẻ tổng hợp Lịch sử lớp | High |  | REQ34 | `A08` | `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.06`, `A08.09` |
| `TC74` | Case 74: Chỉ tính buổi đủ điều kiện và làm tròn trung bình | High |  | REQ34 | `A08` | `A08.03`, `A08.04` |
| `TC75` | Case 75: Tiến độ buổi là của cả lớp | High |  | REQ34 | `A08` | `A08.03`, `A08.04` |
| `TC77` | Case 77: getUpTerm của lớp Hoàn thành | High |  | REQ34 | `A08` | `A08.01`, `A08.12` |
| `TC78` | Case 78: getUpTerm của lớp chưa Hoàn thành | High |  | REQ34 | `A08` | `A08.12`, `A08.13` |
| `TC79` | Case 79: Phạm vi và trung bình Lên kỳ/Đạt KPI | High |  | REQ34 | `A08` | `A08.01`, `A08.02`, `A08.05`, `A08.12` |
| `TC80` | Case 80: Tính điểm lớp trước khi đổi Đánh giá | High |  | REQ34 | `A08` |  |
| `TC81` | Case 81: Trung bình điểm Đánh giá rồi đổi chữ | High |  | REQ34 | `A08` | `A08.06`, `A08.09` |
| `TC82` | Case 82: Ngưỡng Đánh giá A–F | High |  | REQ34 | `A08` |  |
| `TC83` | Case 83: Tập lớp rỗng và mẫu số HV bằng 0 | High |  | REQ34 | `A08` | `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.06`, `A08.09`, `A08.12`, `A08.13` |
| `TC48` | Case 48: Hiển thị UI chuẩn trạng thái học viên trong lớp | High |  | REQ29 | `A08` |  |
| `TC49` | Case 49: Phân biệt status học viên và status lớp | High |  | REQ29 / REQ34 | `A08` |  |
| `TC30` | Case 30: Lọc ghi chú kết hợp | High |  | Flow 10 / REQ20 | `A09` |  |
| `TC38` | Case 38: Chỉ người tạo xem được ghi chú Riêng tư | High |  | EX14 / REQ19 | `A09` |  |
| `TC39` | Case 39: Chặn khoảng ngày Tùy chọn không hợp lệ | Medium |  | EX15 / REQ20 | `A09` |  |
| `TC45` | Case 45: Chỉ owner đóng ghi chú và xem ghi chú đã đóng | High |  | REQ26 / REQ19 | `A09` |  |
| `TC66` | Case 66: Mở và ẩn bình luận đúng ghi chú | High |  | REQ35 | `A09` |  |
| `TC67` | Case 67: Bình luận văn bản thuần và quyền owner | High |  | REQ35 | `A09` | `A09.03` |
| `TC84` | Case 84: Bộ lọc mặc định khi mở tab Ghi chú | High |  | REQ20 | `A09` |  |
| `TC85` | Case 85: Thông tin bình luận gần nhất trên card | High |  | REQ35 | `A09` |  |
| `TC86` | Case 86: Chỉ owner đổi Loại và Độ ưu tiên | High |  | REQ19 / REQ35 | `A09` |  |
| `TC92` | Case 92: Bố cục card và menu Ghi chú mới | High |  | REQ35 | `A09` |  |
| `TC93` | Case 93: Mở 0 bình luận và làm mới đúng note | High |  | REQ35 | `A09` |  |
| `TC29` | Case 29: Thêm ghi chú | High | Có | Flow 10 / REQ19 | `A09` |  |
| `TC65` | Case 65: Popup Thêm ghi chú chuẩn và Hủy | Medium |  | REQ35 | `A09` |  |
| `TC87` | Case 87: Nội dung thêm ghi chú là văn bản thuần và không giới hạn độ dài | Medium |  | REQ19 / REQ35 | `A09` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A10` | `A10.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A10` | `A10.01`, `A10.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A10` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A10` | `A10.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (71): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A01.08`, `A01.09`, `A01.10`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A02.08`, `A02.09`, `A02.10`, `A02.11`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A05.07`, `A05.08`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A07.06`, `A07.07`, `A07.08`, `A07.09`, `A07.10`, `A07.11`, `A07.12`, `A07.13`, `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.06`, `A08.07`, `A08.08`, `A08.09`, `A08.10`, `A08.11`, `A08.12`, `A08.13`, `A08.14`, `A08.15`, `A08.16`, `A08.17`, `A08.18`, `A08.19`, `A09.01`, `A09.02`, `A09.03`, `A09.04`, `A09.05`, `A09.06`, `A10.01`, `A10.02`, `A10.03`, `A10.04`
- Frame Figma chưa có requirement (8): `ADM-HV-010001`, `ADM-HV-010010`, `ADM-HV-010012`, `ADM-HV-010060`, `ADM-HV-010062`, `ADM-HV-010070`, `ADM-HV-010102`, `ADM-HV-010202`
- Thiếu prototype link đi vào (3): `ADM-HV-010010`, `ADM-HV-010060`, `ADM-HV-010070`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (4): `EX03`, `EX11`, `EX17`, `EX18`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
