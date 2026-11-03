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

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | ma-lop |  |  | — |  |  | Chưa sync | QC |
| `A01.02` | link-google-meet |  |  | — |  |  | Chưa sync | QC |
| `A01.03` | khoa-hoc |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A01.05` | mo-ta |  |  | — |  | `TC02` | Chưa sync | QC |
| `A01.06` | ngay-bat-dau-ngay-ket-thuc |  |  | — |  |  | Chưa sync | QC |
| `A01.07` | loai-lop |  |  | — |  |  | Chưa sync | QC |
| `A01.08` | trang-thai |  |  | — |  |  | Chưa sync | QC |

### `A02` Tab KPI — KPI của tôi

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | tim-kiem |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | ten |  |  | — |  |  | Chưa sync | QC |
| `A02.04` | ngay-ghi-nhan |  |  | — |  |  | Chưa sync | QC |
| `A02.05` | trang-thai |  |  | — |  |  | Chưa sync | QC |
| `A02.06` | so-tien |  |  | — |  | `TC05` | Chưa sync | QC |
| `A02.07` | ngay-cap-nhat |  |  | — |  |  | Chưa sync | QC |
| `A02.08` | sap-xep |  |  | — |  |  | Chưa sync | QC |
| `A02.09` | khong-co-khoan |  |  | — |  |  | Chưa sync | QC |

### `A03` Tab Lịch sử & lương

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | dropdown-thoi-gian |  |  | — |  |  | Chưa sync | QC |
| `A03.02` | trang-thai-lop |  |  | — |  | `TC14` | Chưa sync | QC |
| `A03.03` | so-buoi-da-day |  |  | — |  |  | Chưa sync | QC |
| `A03.04` | luong-buoi-day |  |  | — |  |  | Chưa sync | QC |
| `A03.05` | luong-kpi |  |  | — |  | `TC08` | Chưa sync | QC |
| `A03.06` | tong-luong |  |  | — |  | `TC15`, `TC16` | Chưa sync | QC |
| `A03.07` | bang-buoi-day |  |  | — |  |  | Chưa sync | QC |
| `A03.08` | cot-lop |  |  | — |  |  | Chưa sync | QC |
| `A03.09` | cot-ten-buoi-hoc |  |  | — |  |  | Chưa sync | QC |
| `A03.10` | cot-si-so |  |  | — |  | `TC12` | Chưa sync | QC |
| `A03.11` | cot-thoi-gian |  |  | — |  |  | Chưa sync | QC |
| `A03.12` | cot-luong-buoi-day |  |  | — |  |  | Chưa sync | QC |
| `A03.13` | khong-co-buoi |  |  | — |  | `TC10`, `TC11`, `TC14` | Chưa sync | QC |

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
- Chưa sync (30): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A01.08`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A02.08`, `A02.09`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A03.08`, `A03.09`, `A03.10`, `A03.11`, `A03.12`, `A03.13`
- REQ/EX chưa có testcase (2): `REQ05`, `EX03`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
