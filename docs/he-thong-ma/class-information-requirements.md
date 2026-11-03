# [Giáo viên] Chi tiết lớp — Thông tin

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-110100` | Chi tiết lớp / Thông tin / Thông tin | `/chi-tiet-lop/thong-tin/thong-tin` | `GV-LOP-110100-DK` | QC |
| `GV-LOP-110200` | Chi tiết lớp / Thông tin / KPI | `/chi-tiet-lop/thong-tin/kpi` | `GV-LOP-110200-DK` | QC |
| `GV-LOP-110300` | Chi tiết lớp / Thông tin / Lịch sử & lương | `/chi-tiet-lop/thong-tin/lich-su-luong` | `GV-LOP-110300-DK` | QC |

Requirement: `teacher_role/class/class_information_requirements.md` — [Giáo viên] Chi tiết lớp — Thông tin (tiền tố `TR-CI`).

## 2. Luồng

- `FLOW01` Xem Thông tin lớp — `REQ01`
- `FLOW02` Xem KPI của tôi — `REQ02`
- `FLOW03` Xem Lịch sử & lương của lớp — `REQ03`, `REQ04`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Tab Thông tin

Frame: `GV-LOP-110100` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | ma-lop | `Atom/Label`  | `I4333:20115;3004:58620` Atom/Label | — |  |  | Khớp | QC |
| `A01.02` | link-google-meet | `Atom/Label`  | `I4333:20118;3004:58620` Atom/Label | — |  |  | Khớp | QC |
| `A01.03` | khoa-hoc | `Card Menu v2 (Test)` Type=Con dropdown, State=Default | `I4915:262412;4901:215293` Card Menu v2 (Test) | — |  |  | Khớp | QC |
| `A01.04` | ghi-chu | `Atom/Label`  | `I4333:20244;3004:58620` Atom/Label | — |  |  | Khớp | QC |
| `A01.05` | mo-ta | `Atom/Label`  | `I4333:20245;3004:58620` Atom/Label | — |  | `TC02` | Khớp | QC |
| `A01.06` | ngay-bat-dau-ngay-ket-thuc | `Atom/Label`  | `I4333:20120;3004:58620` Atom/Label; `I4333:20121;3004:58620` Atom/Label | — |  |  | Khớp | QC |
| `A01.07` | loai-lop | `Atom/Label`  | `I4333:20122;3004:58620` Atom/Label | — |  |  | Khớp | QC |
| `A01.08` | trang-thai | `Atom/Label`  | `I4333:20123;3004:58620` Atom/Label | — |  |  | Khớp | QC |

### `A02` Tab KPI — KPI của tôi

Frame: `GV-LOP-110200` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tieu-de |  | `4333:20595` Tiêu đề · KPI của tôi; `4333:20598` Lịch sử & lương | — |  |  | Khớp | QC |
| `A02.02` | tim-kiem | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `4333:20612` Atom/Input | — |  |  | Khớp | QC |
| `A02.03` | ten |  | `4333:20620` Lớp | — |  |  | Khớp | QC |
| `A02.04` | ngay-ghi-nhan |  | `4333:20622` Loại KPI | — |  |  | Khớp | QC |
| `A02.05` | trang-thai |  | `4333:20624` Ngày ghi nhận | — |  |  | Khớp | QC |
| `A02.06` | so-tien |  | `4333:20626` Trạng thái | — |  | `TC05` | Khớp | QC |
| `A02.07` | ngay-cap-nhat |  | `4333:20628` Tiền thưởng | — |  |  | Khớp | QC |
| `A02.08` | sap-xep |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.09` | khong-co-khoan |  | `4333:20719` Bảng dữ liệu này đang trống | — |  |  | Khớp | QC |

### `A03` Tab Lịch sử & lương

Frame: `GV-LOP-110300` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | dropdown-thoi-gian |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.02` | trang-thai-lop | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4333:21048` Thẻ chỉ số · Trạng thái lớp | — |  | `TC14` | Khớp | QC |
| `A03.03` | so-buoi-da-day | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4333:21049` Thẻ chỉ số · Số buổi đã dạy | — |  |  | Khớp | QC |
| `A03.04` | luong-buoi-day | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4333:21050` Thẻ chỉ số · Lương buổi dạy | — |  |  | Khớp | QC |
| `A03.05` | luong-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4333:21051` Thẻ chỉ số · Lương KPI | — |  | `TC08` | Khớp | QC |
| `A03.06` | tong-luong | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4333:21053` Thẻ chỉ số · Tổng lương | — |  | `TC15`, `TC16` | Khớp | QC |
| `A03.07` | bang-buoi-day |  | `4333:21118` Danh sách lớp | — |  |  | Khớp | QC |
| `A03.08` | cot-lop |  | `4333:21122` Lớp | — |  |  | Khớp | QC |
| `A03.09` | cot-ten-buoi-hoc |  | `4333:21124` Tên buổi học | — |  |  | Khớp | QC |
| `A03.10` | cot-si-so |  | `4333:21126` Sĩ số | — |  | `TC12` | Khớp | QC |
| `A03.11` | cot-thoi-gian |  | `4333:21128` Thời gian | — |  |  | Khớp | QC |
| `A03.12` | cot-luong-buoi-day | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `4333:21050` Thẻ chỉ số · Lương buổi dạy | — |  |  | Khớp | QC |
| `A03.13` | khong-co-buoi |  | `4333:21393` Bảng dữ liệu này đang trống; `4333:21393` Bảng dữ liệu này đang trống | — |  | `TC10`, `TC11`, `TC14` | Khớp | QC |

### `F01` (ngoài Body)

Frame: `GV-LOP-110100`, `GV-LOP-110200`, `GV-LOP-110300` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4333:19823` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | molecule-field | `Molecule/Field`  | `4333:20115` Molecule/Field | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | component-2 | `Switch Center`  | `4333:18054` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | account | `ACCOUNT` Size=Default | `4333:18056` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | header-vai-tro |  | `4899:187597` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | sidebar-menu-teacher | `MENU - TEACHER`  | `4915:262412` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | empty-state-illustration | `Empty State / Illustration` Type=Nền trống | `4333:20718` Empty State / Illustration | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | filter-thoi-gian | `DD/Molecule/Trigger` Size=XS, State=Active | `4333:21033` Filter · Thời gian | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Thông tin chỉ đọc | 9 field theo nguồn Admin Tab Thông tin; không có control ghi; link Meet mở tab mới. |
| `REQ02` | KPI của tôi | Chỉ khoản loại KPI của giáo viên đang đăng nhập tại lớp đang mở; trạng thái Mới / Đã xác nhận / Đã hủy, ẩn Đã xóa; cột Tên, Ngày ghi nhận, Trạng thái, Số tiền, Ngày cập nhật; tên lấy từ `title` của cấu hình KPI được khoản tham chiếu, mô tả từ `description` nếu có; tìm theo tên; sắp Ngày ghi nhận giảm dần; chỉ đọc. |
| `REQ03` | Phạm vi và bộ lọc lương | Dữ liệu của giáo viên đang đăng nhập tại lớp đang mở. 10 lựa chọn thời gian, mặc định Tháng này; buổi lọc theo ngày tính lương (ngày của lịch gắn; không lịch thì thời điểm hoàn thành), KPI lọc theo Ngày ghi nhận. |
| `REQ04` | Công thức | Số buổi đã dạy = buổi Hoàn thành của giáo viên trong khoảng (kể cả không lịch). Lương buổi dạy = tổng lương các buổi Hoàn thành có lịch gắn (lương/buổi của giáo viên tại lớp); buổi không lịch = 0 kèm cảnh báo. Lương KPI = tổng KPI Đã xác nhận trong khoảng. Tổng lương = Lương buổi dạy + Lương KPI. Sĩ số buổi = đi học / học viên hợp lệ. |
| `REQ05` | Đồng bộ | Cùng nguồn với menu Lịch sử & lương của Giáo viên và Tab KPI/Lịch dạy của Admin; hoàn thành buổi, xác nhận KPI, Mở lại lịch (đảo lương) phải phản ánh khi tải lại. |
| `REQ06` | Giữ lương buổi đã hoàn thành | Lưu mức lương của buổi khi hoàn thành. Thay đổi lương/buổi chỉ áp dụng cho các buổi hoàn thành sau thời điểm thay đổi; không tính lại dòng cũ hoặc tổng lương lịch sử theo mức mới. Bộ lọc vẫn dùng ngày tính lương đã chốt, độc lập với thời điểm ghi nhận mức lương. |
| `REQ07` | Phạm vi OT | Không có OT ở tab Lịch sử & lương trong Thông tin lớp; Tổng Lương tại đây chỉ gồm lương buổi dạy và KPI. OT được xem ở menu Lịch sử & lương riêng của Giáo viên. |
| `EX01` | Ngoại lệ | Giáo viên gửi request cập nhật thông tin lớp, thêm/sửa/xác nhận/xoá KPI → backend từ chối; dữ liệu giữ nguyên. |
| `EX02` | Ngoại lệ | Không có KPI / không có buổi dạy trong khoảng → trạng thái trống tương ứng, thẻ hiển thị 0; không lỗi. |
| `EX03` | Ngoại lệ | Tải dữ liệu thất bại → vùng lỗi có `Thử lại`; không hiển thị số 0 giả. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Xem thông tin lớp | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Mở link Meet | Medium |  | REQ01 | `A01` | `A01.05` |
| `TC03` | Case 3: Chặn sửa bằng request | High |  | EX01 | `A01` |  |
| `TC04` | Case 4: Xem KPI tại lớp | High | Có | Flow 2 / REQ02 | `A02` |  |
| `TC05` | Case 5: Tìm theo cột Tên | Medium |  | REQ02 | `A02` | `A02.06` |
| `TC06` | Case 6: Không có KPI | Medium |  | EX02 | `A02` |  |
| `TC07` | Case 7: Chỉ đọc | High |  | EX01 / REQ02 | `A02` |  |
| `TC08` | Case 8: Xem lương tháng này | High | Có | Flow 3 / REQ03 / REQ04 | `A03` | `A03.05` |
| `TC09` | Case 9: Buổi không gắn lịch | High |  | REQ03 / REQ04 | `A03` |  |
| `TC10` | Case 10: Lọc theo ngày tính lương | High |  | REQ03 | `A03` | `A03.13` |
| `TC11` | Case 11: Chỉ buổi của mình tại lớp | High |  | REQ03 | `A03` | `A03.13` |
| `TC12` | Case 12: Sĩ số buổi | Medium |  | REQ04 | `A03` | `A03.10` |
| `TC13` | Case 13: Tùy chọn khoảng ngày | Medium |  | REQ03 | `A03` |  |
| `TC14` | Case 14: Không có buổi | Medium |  | EX02 | `A03` | `A03.02`, `A03.13` |
| `TC15` | Case 15: Giữ lương buổi cũ khi đổi mức lương | High |  | REQ06 | `A03` | `A03.06` |
| `TC16` | Case 16: OT không thuộc Thông tin lớp | High |  | REQ07 | `A03` | `A03.06` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- `A01` Mọi field hiển thị cùng một kiểu ô xám chỉ đọc như `Mã lớp`, `Ghi chú`, `Mô tả`. Khác Figma GV-LOP-110100: Figma còn vẽ mũi tên dropdown ở Khóa học, Loại lớp, Trạng thái và icon lịch ở Ngày bắt đầu/kết thúc; cần sửa Figma bỏ các control này.
- Chưa khớp tự động (2): `A02.08`, `A03.01`
- REQ/EX chưa có testcase (2): `REQ05`, `EX03`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
