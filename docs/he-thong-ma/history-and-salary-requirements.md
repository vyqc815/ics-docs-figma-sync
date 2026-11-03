# [Giáo viên] Lịch sử & lương

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LS-010000` | Lịch sử & lương / Buổi dạy | `/lich-su-luong/buoi-day` | `GV-LS-010000-DK` | QC |
| `GV-LS-010003` | Lịch sử & lương / KPI | `/lich-su-luong/kpi` | `GV-LS-010003-DK` | QC |
| `GV-LS-010004` | Lịch sử & lương / OT | `/lich-su-luong/ot` | `GV-LS-010004-DK` | QC |
| `GV-LS-010011` | Lịch sử & lương / Đề xuất đang xử lý (không huỷ được) | `/lich-su-luong/de-xuat-dang-xu-ly-khong-huy-duoc` | `GV-LS-010011-DK` | QC |
| `GV-LS-010014` | Lịch sử & lương / Đề xuất mới (có thể huỷ) | `/lich-su-luong/de-xuat-moi-co-the-huy` | `GV-LS-010014-DK` | QC |

Requirement: `teacher_role/history_and_salary/history_and_salary_requirements.md` — [Giáo viên] Lịch sử & lương (tiền tố `TR-HAS`).

## 2. Luồng

- `FLOW01` Xem lịch sử và tổng lương — `REQ01`, `REQ02`, `REQ03`
- `FLOW02` Xem KPI và OT — `REQ04`, `REQ05`
- `FLOW03` Nhập và gửi đề xuất — `REQ06`, `REQ07`
- `FLOW04` Hủy đề xuất Mới — `REQ08`
- `FLOW05` Xem lịch sử đề xuất — `REQ09`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LGV-020010` | Popup duyệt đề xuất | Popup | ADM-LGV-020000 | ADM-LGV-020000 | — | `/luong/de-xuat-tang-luong?popup=ADM-LGV-020010` | QC | cao |
| `GV-LS-010010` | Popup đề xuất tăng lương | Popup | GV-LS-010000 | GV-LS-010000 | GV-LS-010000, GV-LS-010003, GV-LS-010004 | `/lich-su-luong/buoi-day?popup=GV-LS-010010` | QC | cao |
| `GV-LS-010012` | Chọn lý do | Trạng thái | GV-LS-010010 | GV-LS-010000 | — | `/lich-su-luong/buoi-day?state=GV-LS-010012` | QC | trung bình |
| `GV-LS-010013` | Popup lịch sử đề xuất | Popup | GV-LS-010011 | GV-LS-010011 | GV-LS-010000, GV-LS-010003, GV-LS-010004, GV-LS-010011, GV-LS-010014 | `/lich-su-luong/de-xuat-dang-xu-ly-khong-huy-duoc?popup=GV-LS-010013` | QC | cao |
| `GV-LS-010015` | Popup xác nhận gửi đề xuất | Popup | GV-LS-010010 | GV-LS-010000 | GV-LS-010010 | `/lich-su-luong/buoi-day?popup=GV-LS-010015` | QC | cao |
| `GV-LS-010016` | Popup xác nhận huỷ đề xuất | Popup | GV-LS-010014 | GV-LS-010014 | GV-LS-010014 | `/lich-su-luong/de-xuat-moi-co-the-huy?popup=GV-LS-010016` | QC | cao |

## 4. Khu vực và item

### `A01` Tổng quan và tab Buổi dạy

Frame: `GV-LS-010000` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | bo-loc-thoi-gian |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.02` | tuy-chon |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.03` | so-lop | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:97125` Thẻ chỉ số · Số lớp | — |  | `TC7b` | Khớp | QC |
| `A01.04` | so-buoi-da-day | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:97126` Thẻ chỉ số · Số buổi đã dạy | — |  |  | Khớp | QC |
| `A01.05` | luong-buoi-day | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:97127` Thẻ chỉ số · Lương buổi dạy | — |  | `TC7a` | Khớp | QC |
| `A01.06` | luong-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:97128` Thẻ chỉ số · Lương KPI | — |  |  | Khớp | QC |
| `A01.07` | luong-ot | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:97129` Thẻ chỉ số · Lương OT | — |  |  | Khớp | QC |
| `A01.08` | tong-luong | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:99317` Thẻ chỉ số · Tổng lương | — |  | `TC7a` | Khớp | QC |
| `A01.09` | ba-tab |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.10` | dinh-dang-tien |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.11` | lop | `Card Menu v2 (Test)` Type=Chính, State=Default | `I4915:263183;4901:212425` Card Menu | — |  |  | Khớp | QC |
| `A01.12` | ten-buoi-hoc |  | `3868:99377` Tên buổi học | — |  |  | Khớp | QC |
| `A01.13` | si-so |  | `3868:99379` Sĩ số | — |  | `TC05` | Khớp | QC |
| `A01.14` | thoi-gian |  | `3868:99381` Thời gian | — |  | `TC7b` | Khớp | QC |
| `A01.15` | luong-buoi-day | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:97127` Thẻ chỉ số · Lương buổi dạy | — |  | `TC7a` | Khớp | QC |
| `A01.16` | sap-xep |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.17` | khong-co-buoi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.18` | lop | `Card Menu v2 (Test)` Type=Chính, State=Default | `I4915:263183;4901:212425` Card Menu | — |  |  | Khớp | QC |
| `A01.19` | so-buoi |  | `3868:99703` Số buổi | — |  | `TC03`, `TC7b` | Khớp | QC |
| `A01.20` | tong-luong | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:99317` Thẻ chỉ số · Tổng lương | — |  | `TC7a` | Khớp | QC |
| `A01.21` | tuong-tac-dong-lop |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.22` | phan-trang |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.23` | sidebar-menu-teacher | `MENU - TEACHER`  | `4915:263183` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |

### `A02` Tab KPI

Frame: `GV-LS-010003` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | lop | `Card Menu v2 (Test)` Type=Chính, State=Default | `I4915:263042;4901:212425` Card Menu | — |  |  | Khớp | QC |
| `A02.02` | loai-kpi |  | `3868:102236` Loại KPI | — |  |  | Khớp | QC |
| `A02.03` | ngay-ghi-nhan |  | `3868:102238` Ngày ghi nhận | — |  |  | Khớp | QC |
| `A02.04` | trang-thai |  | `3868:102240` Trạng thái | — |  |  | Khớp | QC |
| `A02.05` | tien-thuong |  | `3868:102242` Tiền thưởng | — |  |  | Khớp | QC |
| `A02.06` | sap-xep |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.07` | trang-thai-rong |  |  | — |  |  | Chưa khớp tự động | QC |

### `A03` Tab OT

Frame: `GV-LS-010004` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | lop | `Card Menu v2 (Test)` Type=Chính, State=Default | `I4915:262901;4901:212425` Card Menu | — |  |  | Khớp | QC |
| `A03.02` | loai-ot |  | `3868:102728` Loại KPI | — |  |  | Khớp | QC |
| `A03.03` | ngay-ghi-nhan |  | `3868:102730` Ngày ghi nhận | — |  | `TC13`, `TC14a` | Khớp | QC |
| `A03.04` | trang-thai |  | `3868:102732` Trạng thái | — |  | `TC14` | Khớp | QC |
| `A03.05` | tien-thuong |  | `3868:102734` Tiền thưởng | — |  |  | Khớp | QC |
| `A03.06` | quyen |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.07` | rong-loi |  |  | — |  |  | Chưa khớp tự động | QC |

### `A04` Popup Đề xuất tăng lương

Frame: `ADM-LGV-020010`, `GV-LS-010010`, `GV-LS-010012` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | giao-vien-flow-giao-vien-de-xuat-tang-lu |  |  | — |  |  | Chưa sync | QC |
| `A04.02` | admin-flow-admin-duyet-de-xuat-tang-luon |  |  | — |  |  | Chưa sync | QC |
| `A04.03` | ket-qua-tra-ve-giao-vien |  |  | — |  |  | Chưa sync | QC |
| `A04.04` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A04.05` | thong-bao-chu-ky |  |  | — |  |  | Chưa sync | QC |
| `A04.06` | pham-vi-de-xuat |  |  | — |  |  | Chưa sync | QC |
| `A04.07` | luong-buoi-day-hien-tai |  |  | — |  |  | Chưa sync | QC |
| `A04.08` | muc-luong-de-xuat |  |  | — |  |  | Chưa sync | QC |
| `A04.09` | ly-do-de-xuat |  |  | — |  |  | Chưa sync | QC |
| `A04.10` | cac-ly-do |  |  | — |  |  | Chưa sync | QC |
| `A04.11` | ly-do-khac-chi-tiet |  |  | — |  |  | Chưa sync | QC |
| `A04.12` | dropdown-tien-te |  |  | — |  |  | Chưa sync | QC |
| `A04.13` | khoi-trung-dropdown-khong-nhan |  |  | — |  |  | Chưa sync | QC |
| `A04.14` | huy |  |  | — |  |  | Chưa sync | QC |
| `A04.15` | gui-de-xuat |  |  | — | opens `A05` | `TC15a` | Chưa sync | QC |

### `A05` Popup Xác nhận gửi đề xuất

Frame: `GV-LS-010015` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | noi-dung |  |  | — |  |  | Chưa sync | QC |
| `A05.02` | ty-le-tang |  |  | — |  |  | Chưa sync | QC |
| `A05.03` | thong-bao |  |  | — |  |  | Chưa sync | QC |
| `A05.04` | quay-lai-chinh-sua |  |  | — |  | `TC18` | Chưa sync | QC |
| `A05.05` | xac-nhan-gui |  |  | — |  | `TC19` | Chưa sync | QC |

### `A06` Trạng thái đề xuất và hủy đề xuất

Frame: `GV-LS-010011`, `GV-LS-010014`, `GV-LS-010016` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | chua-co-de-xuat-dang-cho |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.02` | moi | `CLass Status`  | `4760:16947` CLass Status | — |  |  | Khớp | QC |
| `A06.03` | dang-xu-ly | `Molecule/Trạng thái đề xuất tăng lương`  | `4899:105946` Trạng thái đề xuất | — |  | `TC25`, `TC26a` | Khớp một phần | QC |
| `A06.04` | da-duyet-tu-choi |  |  | — |  | `TC26` | Chưa khớp tự động | QC |
| `A06.05` | da-huy |  |  | — |  | `TC23`, `TC25` | Chưa khớp tự động | QC |
| `A06.06` | de-xuat-dang-cho |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.07` | du-lieu-xac-nhan |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.08` | giu-de-xuat |  |  | — |  | `TC22` | Chưa khớp tự động | QC |
| `A06.09` | huy-de-xuat | `Molecule/Trạng thái đề xuất tăng lương`  | `I4899:106093;4899:105924` Huỷ đề xuất | — |  | `TC21` | Khớp một phần | QC |
| `A06.10` | huy-va-gui-lai |  |  | — |  |  | Chưa khớp tự động | QC |

### `A07` Popup Lịch sử đề xuất tăng lương

Frame: `GV-LS-010013` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A07.02` | moi-muc-lich-su |  |  | — |  |  | Chưa sync | QC |
| `A07.03` | sap-xep |  |  | — |  |  | Chưa sync | QC |
| `A07.04` | phan-hoi |  |  | — |  | `TC28` | Chưa sync | QC |
| `A07.05` | dong |  |  | — |  | `TC29` | Chưa sync | QC |
| `A07.06` | rong-loi |  |  | — |  | `TC29` | Chưa sync | QC |

### `F01` Header

Frame: `GV-LS-010000`, `GV-LS-010003`, `GV-LS-010004`, `GV-LS-010011`, `GV-LS-010014` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `3868:97032` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | component-2 | `Switch Center`  | `4273:161223` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | header-vai-tro |  | `4899:187639` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |

### `F02` (ngoài Body)

Frame: `GV-LS-010000`, `GV-LS-010003`, `GV-LS-010004`, `GV-LS-010011`, `GV-LS-010014` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | filter-thoi-gian | `DD/Molecule/Trigger` Size=XS, State=Active | `3868:97121` Filter · Thời gian | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | nut-lich-su-de-xuat | `Atom/Button` Type=Ghost, Size=Small | `4899:105926` Nút · Lịch sử đề xuất | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | nut-de-xuat-tang-luong | `Atom/Button` Type=Primary, Size=Small | `4760:16610` Nút · Đề xuất tăng lương | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `3868:99338` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F02.05` | class-status | `CLass Status`  | `3868:99385` CLass Status | — |  |  | Chỉ có trên Figma | Figma |
| `F02.06` | atom-chip | `Atom/Chip` Type=Money Outline | `3857:86345` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F02.07` | the-chi-so-so-lop | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:102219` Thẻ chỉ số · Số lớp | — |  |  | Chỉ có trên Figma | Figma |
| `F02.08` | the-chi-so-so-buoi-da-day | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:102220` Thẻ chỉ số · Số buổi đã dạy | — |  |  | Chỉ có trên Figma | Figma |
| `F02.09` | the-chi-so-luong-buoi-day | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:102221` Thẻ chỉ số · Lương buổi dạy | — |  |  | Chỉ có trên Figma | Figma |
| `F02.10` | the-chi-so-luong-kpi | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:102222` Thẻ chỉ số · Lương KPI | — |  |  | Chỉ có trên Figma | Figma |
| `F02.11` | the-chi-so-luong-ot | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:102223` Thẻ chỉ số · Lương OT | — |  |  | Chỉ có trên Figma | Figma |
| `F02.12` | the-chi-so-tong-luong | `Thẻ chỉ số` Kiểu=Biểu đồ icon | `3868:102224` Thẻ chỉ số · Tổng lương | — |  |  | Chỉ có trên Figma | Figma |
| `F02.13` | atom-badge | `Atom/Badge`  | `3868:102469` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Phạm vi | Chỉ dữ liệu của giáo viên đang đăng nhập; không dùng owner client tự truyền để bypass quyền. Thẻ Số lớp và Danh sách lớp dùng chung tập class_id không trùng theo truy vấn cũ: user_class đúng user_id/role, status khác Remove; lớp tương ứng khác Deleted. Không giới hạn InProgress/Completed hoặc bắt buộc có buổi trong kỳ; khoảng lọc áp cho số buổi và tiền của mỗi dòng. |
| `REQ02` | Thời gian | Bộ lọc dùng chung; buổi theo ngày tính lương của lịch, không lịch theo hoàn thành; khoản theo Ngày ghi nhận. Mặc định `Tháng này`; `Tùy chọn` lấy cả hai ngày biên theo timezone nghiệp vụ. |
| `REQ03` | Buổi và lương | Tổng lương từng lớp chỉ gồm lương buổi dạy của chính giáo viên trong khoảng, không gồm KPI/OT.  Buổi Hoàn thành của chính giáo viên; không lịch vẫn đếm nhưng tiền 0; buổi có lịch giữ tiền đã ghi nhận. Không hồi tố khi đổi mức lương. Chỉ đọc và không tự coi phát sinh lương là đã thanh toán. |
| `REQ04` | KPI | Khoản của giáo viên, type KPI, tên từ cấu hình được tham chiếu, tiền từ khoản thực tế; Mới/Đã xác nhận/Đã hủy được xem, Đã xóa ẩn; chỉ Đã xác nhận tham gia tổng KPI. |
| `REQ05` | OT | OT của chính giáo viên, tách khỏi KPI/OT của Handler; chỉ đọc. Bảng giữ Mới/Đã xác nhận/Đã hủy và loại Đã xóa; tổng chỉ cộng value thực tế của OT Đã xác nhận có Ngày ghi nhận trong khoảng. Không nhân thời lượng trong tên, không thay bằng tiền gốc cấu hình. |
| `REQ06` | Form đề xuất | Giáo viên gửi đề xuất tăng lương chung của mình, không chọn lớp và không bắt buộc class_id. Admin quyết định gắn mức lương vào lớp nào trong chức năng quản lý riêng. Không thêm chọn lớp/mã lớp vào form, xác nhận, banner, hủy hoặc lịch sử theo suy diễn từ mức lương theo lớp. Draft/gửi đề xuất không tự đổi lương; lý do theo danh sách, nội dung tối đa 500 ký tự. Mức hiện tại do giáo viên tự nhập và mức đề xuất đều là số nguyên VNĐ/giờ, lưu đúng như nhập (không làm tròn, không trần); đề xuất phải lớn hơn mức hiện tại; hiện tại bằng 0 thì tỷ lệ `—`. Chi tiết chỉ bắt buộc khi chọn Lý do khác, tối đa 500 ký tự. Hệ thống không tự lấy mức hiện tại từ lương lớp (đơn giá khác nhau giữa lớp 1–1 và lớp chung). |
| `REQ07` | Xác nhận gửi | Hai bước nhập và xác nhận; quay lại giữ draft; backend kiểm tra lại owner/điều kiện/trạng thái, chống lặp, thành công tạo Mới; gửi đề xuất không trực tiếp tăng lương. |
| `REQ08` | Trạng thái và hủy | Theo flow Figma, Mới được hủy có xác nhận; Đang xử lý không hủy; Đã duyệt/Từ chối do quản lý. Chu kỳ 6 tháng tính từ thời điểm duyệt hoặc từ chối gần nhất, không từ ngày gửi/ngày chỉnh lương; lần hủy Mới không tạo mốc chờ mới. Backend kiểm tra mốc này cùng trạng thái đề xuất đang chờ khi gửi. |
| `REQ09` | Lịch sử | Chỉ request của chính mình; lưu riêng mức hiện tại tham chiếu, mức đề xuất và mức được duyệt, kèm ngày gửi/kết quả, lý do và phản hồi/ghi chú. Mức duyệt có thể khác mức xin. Duyệt không tự đổi lương thực tế; quản lý chỉnh thủ công riêng. Không lấy lương hiện tại mới thay dữ liệu của lần đề xuất cũ. |
| `REQ10` | Đồng bộ và phân trang | Thẻ/bảng cùng owner và khoảng lọc, chỉ response mới nhất hiển thị; loading/rỗng/lỗi phân biệt; không báo thành công trước backend, không tạo trùng khi retry. Bộ lọc thời gian và phân trang dùng quy ước chung: tối đa 50 dòng/trang, đổi lọc về trang đầu, chuyển trang giữ bộ lọc; tổng không phụ thuộc trang hiện tại. Bấm dòng Danh sách lớp điều hướng tới Chi tiết lớp đúng class_id theo quyền Giáo viên. |
| `REQ11` | Audit và quyền | Backend xác định actor, thời điểm gửi/hủy/kết quả và kiểm tra trạng thái mới nhất; giáo viên không tự duyệt, không sửa khoản lương/KPI/OT hoặc request người khác. |
| `EX01` | Ngoại lệ | Sai owner/role, sửa số tiền KPI/OT, tự duyệt/từ chối hoặc hủy đề xuất người khác → backend từ chối; không tiết lộ hoặc thay đổi dữ liệu ngoài phạm vi. |
| `EX02` | Ngoại lệ | Chưa có buổi/khoản/request → trạng thái rỗng tương ứng; không làm mất tổng của loại dữ liệu khác còn tồn tại. |
| `EX03` | Ngoại lệ | Tải/gửi/hủy lỗi → không báo thành công giả, không đổi dữ liệu chính thức; giữ draft khi gửi lỗi và có Thử lại. |
| `EX04` | Ngoại lệ | Request lặp/xung đột/mức lương nền thay đổi → không tạo trùng, không âm thầm dùng dữ liệu cũ hoặc ghi đè trạng thái mới. |
| `EX05` | Ngoại lệ | Request đã Đang xử lý/có kết quả → không hủy bằng request trực tiếp; đồng bộ trạng thái thực tế. |
| `EX06` | Ngoại lệ | Form thiếu/sai dữ liệu bắt buộc theo quy tắc được chốt → báo đúng field, giữ draft; không tạo request một phần. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Chỉ xem lương của chính mình | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Ngày tính lương khác ngày hoàn thành | High |  | REQ02–REQ03 | `A01` |  |
| `TC03` | Case 3: Buổi không gắn lịch | High |  | REQ03 | `A01` | `A01.19` |
| `TC04` | Case 4: Không hồi tố đơn giá | High |  | REQ03 | `A01` |  |
| `TC05` | Case 5: Sĩ số và dữ liệu đúng buổi | Medium |  | REQ03 | `A01` | `A01.13` |
| `TC06` | Case 6: Đổi tab và khoảng thời gian | High |  | Flow 1 / REQ02 / REQ10 | `A01` |  |
| `TC07` | Case 7: Không có buổi nhưng có KPI | High |  | EX02 / REQ03–REQ04 | `A01` |  |
| `TC7a` | Case 7a: Tổng lương lớp không cộng KPI/OT | High |  | REQ03–REQ05 | `A01` | `A01.05`, `A01.08`, `A01.15`, `A01.20` |
| `TC7b` | Case 7b: Tập lớp theo truy vấn cũ | High |  | REQ01–REQ03 | `A01` | `A01.03`, `A01.14`, `A01.19` |
| `TC7c` | Case 7c: Bấm dòng lớp mở chi tiết | High | Có | REQ10 | `A01` |  |
| `TC7d` | Case 7d: Bộ lọc và phân trang dùng chung | High |  | REQ02 / REQ10 | `A01` |  |
| `TC08` | Case 8: Đúng phạm vi và tên KPI | High | Có | Flow 2 / REQ04 | `A02` |  |
| `TC09` | Case 9: Tổng các khoản Đã xác nhận | High |  | REQ04 | `A02` |  |
| `TC10` | Case 10: Lọc theo Ngày ghi nhận | High |  | REQ02 / REQ04 | `A02` |  |
| `TC11` | Case 11: Không có quyền ghi KPI | High |  | EX01 / REQ04 | `A02` |  |
| `TC12` | Case 12: Chỉ OT của đúng giáo viên | High | Có | Flow 2 / REQ05 | `A03` |  |
| `TC13` | Case 13: Ngày và tên OT đúng dữ liệu | Medium |  | REQ02 / REQ05 | `A03` | `A03.03` |
| `TC14` | Case 14: Chặn thao tác ghi OT | High |  | EX01 / REQ05 | `A03` | `A03.04` |
| `TC14a` | Case 14a: Chỉ cộng OT Đã xác nhận theo ngày ghi nhận | High |  | REQ02 / REQ05 | `A03` | `A03.03` |
| `TC15` | Case 15: Mở form không đổi lương | High | Có | Flow 3 / REQ06 | `A04` |  |
| `TC15a` | Case 15a: Đề xuất chung không chọn lớp | High |  | Flow 3 / REQ06–REQ07 | `A04` | `A04.15` |
| `TC15b` | Case 15b: Admin quyết định lớp áp dụng | High |  | REQ06 / REQ09 / REQ11 | `A04` |  |
| `TC16` | Case 16: Lý do và giới hạn chi tiết | Medium |  | REQ06 | `A04` |  |
| `TC16a` | Case 16a: Validation mức hiện tại và mức đề xuất | High |  | REQ06–REQ07 | `A04` |  |
| `TC17` | Case 17: Hủy form nhập | Medium |  | Flow 3 / REQ06 | `A04` |  |
| `TC18` | Case 18: Quay lại chỉnh sửa | High |  | Flow 3 / REQ07 | `A05` | `A05.04` |
| `TC19` | Case 19: Gửi thành công đúng một lần | High | Có | Flow 3 / REQ07 | `A05` | `A05.05` |
| `TC20` | Case 20: Gửi lỗi hoặc dữ liệu nền đã đổi | High |  | EX03–EX04 / REQ07 | `A05` |  |
| `TC21` | Case 21: Banner đề xuất Mới | High |  | REQ08 | `A06` | `A06.09` |
| `TC22` | Case 22: Giữ đề xuất khi đóng xác nhận hủy | Medium |  | Flow 4 / REQ08 | `A06` | `A06.08` |
| `TC23` | Case 23: Hủy đề xuất Mới | High | Có | Flow 4 / REQ08 | `A06` | `A06.05` |
| `TC24` | Case 24: Không hủy Đang xử lý | High |  | EX05 / REQ08 | `A06` |  |
| `TC25` | Case 25: Xung đột hủy và tiếp nhận | High |  | EX04–EX05 / REQ08 | `A06` | `A06.03`, `A06.05` |
| `TC26` | Case 26: Chặn hủy/duyệt thay người khác | High |  | EX01 / REQ08 / REQ11 | `A06` | `A06.04` |
| `TC26a` | Case 26a: Chu kỳ từ lúc duyệt hoặc từ chối | High |  | REQ08 | `A06` | `A06.03` |
| `TC27` | Case 27: Đúng lịch sử của giáo viên | High | Có | Flow 5 / REQ09 | `A07` |  |
| `TC28` | Case 28: Giữ dữ liệu lịch sử sau đổi lương | High |  | REQ09 | `A07` | `A07.04` |
| `TC28a` | Case 28a: Mức duyệt khác mức đề xuất, cập nhật lương thủ công | High |  | REQ08–REQ09 | `A07` |  |
| `TC29` | Case 29: Đóng, rỗng và lỗi lịch sử | Medium |  | EX02–EX03 / REQ09–REQ10 | `A07` | `A07.05`, `A07.06` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (19): `A01.01`, `A01.02`, `A01.09`, `A01.10`, `A01.16`, `A01.17`, `A01.21`, `A01.22`, `A02.06`, `A02.07`, `A03.06`, `A03.07`, `A06.01`, `A06.04`, `A06.05`, `A06.06`, `A06.07`, `A06.08`, `A06.10`
- Chưa sync (26): `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`, `A04.06`, `A04.07`, `A04.08`, `A04.09`, `A04.10`, `A04.11`, `A04.12`, `A04.13`, `A04.14`, `A04.15`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A07.06`
- Thiếu prototype link đi vào (2): `ADM-LGV-020010`, `GV-LS-010012`
- Phân loại cần design duyệt (1): `GV-LS-010012`
- REQ/EX chưa có testcase (1): `EX06`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
