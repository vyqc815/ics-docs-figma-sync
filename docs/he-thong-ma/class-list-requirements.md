# [Giáo viên] Lớp — Thống kê tổng quan

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-010000` | Lớp / Thống kê tổng quan | `/lop/thong-ke-tong-quan` | `GV-LOP-010000-DK` | QC |

Requirement: `teacher_role/class_list/class_list_requirements.md` — [Giáo viên] Lớp — Thống kê tổng quan (tiền tố `TR-CL`).

## 2. Luồng

- `FLOW01` Mở Thống kê tổng quan — `REQ01`, `REQ03`
- `FLOW02` Tìm kiếm và lọc — `REQ01`, `REQ02`
- `FLOW03` Vào Chi tiết lớp — `REQ04`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Trang 1: Thống kê tổng quan

Frame: `GV-LOP-010000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | trung-tam |  |  | — |  | `TC01`, `TC05` | Chưa khớp tự động | QC |
| `A01.02` | tim-kiem | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `3868:96252` Tìm kiếm | — |  |  | Khớp | QC |
| `A01.03` | loai-lop | `DD/Molecule/Trigger` Size=XS, State=Default | `6247:155103` Filter · Loại lớp | — |  |  | Khớp | QC |
| `A01.04` | trang-thai | `DD/Molecule/Trigger` Size=XS, State=Default | `3868:95575` Filter · Trạng thái | — |  | `TC01`, `TC02` | Khớp | QC |
| `A01.05` | trinh-do | `DD/Molecule/Trigger` Size=XS, State=Default | `3868:95576` Filter · Trình độ | — |  |  | Khớp | QC |
| `A01.06` | tap-lop-thoa-bo-loc |  |  | — |  |  | Chưa khớp tự động | QC |

### `A02` Hàng thẻ chỉ số

Frame: `GV-LOP-010000` (tool đoán:GV-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | so-lop |  | `3868:95625` Chỉ số lớp | — |  | `TC06` | Khớp | QC |
| `A02.02` | len-ky |  |  | — |  | `TC07` | Chưa khớp tự động | QC |
| `A02.03` | di-hoc | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `6725:364226` Thẻ chỉ số · Đi học | — |  | `TC09` | Khớp | QC |
| `A02.04` | btvn | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `3868:95629` Thẻ chỉ số · BTVN | — |  | `TC09` | Khớp | QC |
| `A02.05` | dat-kpi |  |  | — |  | `TC08` | Chưa khớp tự động | QC |
| `A02.06` | badge-hang |  |  | — |  |  | Chưa khớp tự động | QC |

### `A03` Khối lớp đang chọn

Frame: `GV-LOP-010000` (tool đoán:GV-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | ket-qua | `Kết quả · Điểm đánh giá`  | `6725:364190` Kết quả · Điểm đánh giá | — |  |  | Khớp | QC |
| `A03.02` | ngay-bat-dau-ngay-ket-thuc |  | `3868:95608` Ngày bắt đầu; `3868:95612` Ngày kết thúc | — |  |  | Khớp | QC |
| `A03.03` | khung-gio-hoc |  | `3868:95617` Khung giờ học | — |  |  | Khớp | QC |
| `A03.04` | si-so |  | `6725:364268` Tiêu đề | — |  | `TC11` | Khớp | QC |
| `A03.05` | di-hoc-btvn | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `6725:364226` Thẻ chỉ số · Đi học; `3868:95629` Thẻ chỉ số · BTVN | — |  |  | Khớp | QC |
| `A03.06` | diem-kt-diem-btvn | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `3868:95631` Thẻ chỉ số · Điểm KT; `3868:95632` Thẻ chỉ số · Điểm BTVN | — |  |  | Khớp | QC |
| `A03.07` | thoi-gian-hoc | `Thẻ chỉ số` Kiểu=Biểu đồ nhấn | `3868:95633` Thẻ chỉ số · Thời gian học | — |  |  | Khớp | QC |
| `A03.08` | bieu-do-nho |  |  | — |  |  | Chưa khớp tự động | QC |

### `A04` Danh sách lớp

Frame: `GV-LOP-010000` (tool đoán:GV-LOP-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | icon-trang-thai-lop |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.02` | ma-lop |  | `3868:95641` Cell · Mã lớp | — |  |  | Khớp | QC |
| `A04.03` | ten-khoa-hoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.04` | thanh-tien-do-x-y-buoi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.05` | badge-hang |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.06` | vong |  |  | — |  | `TC15` | Chưa khớp tự động | QC |
| `A04.07` |  |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.08` | card-dang-chon |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.09` | sap-xep |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` Header

Frame: `GV-LOP-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `3868:95485` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | component-2 | `Switch Center`  | `4273:161193` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | header-vai-tro |  | `4899:187387` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |

### `F02` Sidebar · MENU - TEACHER

Frame: `GV-LOP-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | sidebar-menu-teacher | `MENU - TEACHER`  | `4915:258752` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |

### `F03` (ngoài Body)

Frame: `GV-LOP-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F03.01` | filter-loai-lop | `DD/Molecule/Trigger` Size=XS, State=Default | `3868:95574` Filter · Loại lớp | — |  |  | Chỉ có trên Figma | Figma |
| `F03.02` | the-chi-so-buoi-da-day | `Thẻ chỉ số` Kiểu=Biểu đồ cột tháng | `6757:364993` Thẻ chỉ số · Buổi đã dạy | — |  |  | Chỉ có trên Figma | Figma |
| `F03.03` | the-chi-so-luong-cung | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6725:362403` Thẻ chỉ số · Lương cứng | — |  |  | Chỉ có trên Figma | Figma |
| `F03.04` | the-chi-so-luong-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `6725:362415` Thẻ chỉ số · Lương KPI | — |  |  | Chỉ có trên Figma | Figma |
| `F03.05` | class-status | `CLass Status`  | `3868:95642` CLass Status | — |  |  | Chỉ có trên Figma | Figma |
| `F03.06` | global-progress-bar | `Global Progress Bar`  | `3868:95651` Global Progress Bar | — |  |  | Chỉ có trên Figma | Figma |
| `F03.07` | progress-diem-danh-gia-a-f | `Progress/Điểm Đánh Giá (A-F)` Size=28x24 | `3868:95653` Progress/Điểm Đánh Giá (A-F) | — |  |  | Chỉ có trên Figma | Figma |
| `F03.08` | percent | `PERCENT %`  | `3868:95655` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Phạm vi và bộ lọc | Lớp giáo viên được thêm vào tại trung tâm đang chọn. Tìm theo mã lớp/tên khoá; Loại lớp (`Lớp 1-1`, `Lớp chung`, `Lớp demo`), Trạng thái (7 trạng thái, mặc định `Đang học` + `Khai giảng`), Trình độ; chọn nhiều, trong cùng bộ lọc là OR. Hàng thẻ và Danh sách lớp dùng cùng tập lớp thỏa bộ lọc. Không có kỳ thống kê. |
| `REQ02` | Hàng thẻ | `Số lớp` = lớp Đang học / tổng lớp tập; `Đi học`, `BTVN` = trung bình tỷ lệ của mọi học viên trong tập; `Lên kỳ` = trung bình `(Đi học + BTVN)/2` của mọi học viên; `Đạt KPI` = trung bình KPI lớp (KPI lớp = trung bình Lên kỳ của học viên trong lớp), mỗi lớp trọng số bằng nhau; badge hạng theo nguồn. Làm tròn kết quả cuối 1 chữ số thập phân; học viên/lớp thiếu mẫu số không tham gia; tập rỗng `0%`. |
| `REQ03` | Khối lớp đang chọn | Mặc định lớp đầu tiên; `Kết quả`, ngày bắt đầu/kết thúc, khung giờ học, 6 chỉ số theo công thức Tổng quan lớp; ẩn khi không có lớp. |
| `REQ04` | Danh sách lớp | Card có icon trạng thái, mã lớp, tên khoá, tiến độ `x/y Buổi` (buổi Hoàn thành / tổng buổi khoá), badge hạng, vòng KPI lớp, `>` vào Chi tiết lớp; sắp theo mã lớp; không phân trang. |
| `REQ05` | Đồng bộ | Số liệu lấy từ cùng nguồn với Tổng quan lớp và Danh sách giáo viên của Admin; đổi trung tâm thì bộ lọc về mặc định và tải lại. |
| `EX01` | Ngoại lệ | Không có lớp thỏa bộ lọc → thẻ `0/0`, `0%`, badge trống; ẩn khối lớp; danh sách `Bảng dữ liệu này đang trống`; không lỗi. |
| `EX02` | Ngoại lệ | Tải dữ liệu thất bại → vùng lỗi có `Thử lại`; không hiển thị số 0 giả. |
| `EX03` | Ngoại lệ | Giáo viên không được thêm vào lớp nào tại trung tâm → như EX01. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở menu Lớp | High | Có | Flow 1 / REQ01 | `A01` | `A01.01`, `A01.04` |
| `TC02` | Case 2: Đổi bộ lọc tính lại thẻ | High |  | Flow 2 / REQ01 / REQ02 | `A01` | `A01.04` |
| `TC03` | Case 3: Tìm theo mã lớp và tên khoá | Medium |  | REQ01 | `A01` |  |
| `TC04` | Case 4: Không có lớp | Medium |  | EX01 | `A01` |  |
| `TC05` | Case 5: Đổi trung tâm ở header | Medium |  | REQ01 | `A01` | `A01.01` |
| `TC06` | Case 6: Số lớp | High |  | REQ02 | `A02` | `A02.01` |
| `TC07` | Case 7: Lên kỳ theo học viên | High |  | REQ02 | `A02` | `A02.02` |
| `TC08` | Case 8: Đạt KPI theo lớp | High |  | REQ02 | `A02` | `A02.05` |
| `TC09` | Case 9: Học viên thiếu mẫu số | Medium |  | REQ02 | `A02` | `A02.03`, `A02.04` |
| `TC10` | Case 10: Mặc định lớp đầu tiên | High | Có | Flow 1 / REQ03 | `A03` |  |
| `TC11` | Case 11: Sĩ số đủ 7 trạng thái | High |  | REQ03 | `A03` | `A03.04` |
| `TC12` | Case 12: Điểm trung bình giữ lịch sử | Medium |  | REQ03 | `A03` |  |
| `TC13` | Case 13: Vào Chi tiết lớp | High | Có | Flow 3 / REQ04 | `A04` |  |
| `TC14` | Case 14: Tiến độ buổi | Medium |  | REQ04 | `A04` |  |
| `TC15` | Case 15: Vòng KPI lớp | Medium |  | REQ04 | `A04` | `A04.06` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (14): `A01.01`, `A01.06`, `A02.02`, `A02.05`, `A02.06`, `A03.08`, `A04.01`, `A04.03`, `A04.04`, `A04.05`, `A04.06`, `A04.07`, `A04.08`, `A04.09`
- REQ/EX chưa có testcase (3): `REQ05`, `EX02`, `EX03`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
