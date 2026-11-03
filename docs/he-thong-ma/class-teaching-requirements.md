# [Giáo viên] Chi tiết lớp — Giảng dạy

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-030100` | Chi tiết lớp / Bài học / Buổi học | `/chi-tiet-lop/bai-hoc/buoi-hoc` | `GV-LOP-030100-DK` | QC |
| `GV-LOP-030110` | Chi tiết lớp / Bài học / Buổi học / Dặn dò trước buổi học | `/chi-tiet-lop/bai-hoc/buoi-hoc/dan-do-truoc-buoi-hoc` | — | QC |
| `GV-LOP-030170` | Chi tiết lớp / Bài học / Buổi học / Bài chờ hoàn thành | `/chi-tiet-lop/bai-hoc/buoi-hoc/bai-cho-hoan-thanh` | — | QC |
| `GV-LOP-030200` | Chi tiết lớp / Bài học / Thông tin | `/chi-tiet-lop/bai-hoc/thong-tin` | `GV-LOP-030200-DK` | QC |
| `GV-LOP-030300` | Chi tiết lớp / Bài học / Nội dung | `/chi-tiet-lop/bai-hoc/noi-dung` | `GV-LOP-030300-DK` | QC |
| `GV-LOP-030400` | Chi tiết lớp / Bài học / Tài nguyên | `/chi-tiet-lop/bai-hoc/tai-nguyen` | `GV-LOP-030400-DK` | QC |
| `GV-LOP-030500` | Chi tiết lớp / Bài học / Kiến thức | `/chi-tiet-lop/bai-hoc/kien-thuc` | `GV-LOP-030500-DK` | QC |
| `GV-LOP-040100` | Chi tiết lớp / Bài tập và Kiểm tra / BTVN | `/chi-tiet-lop/bai-tap-va-kiem-tra/btvn` | `GV-LOP-040100-DK` | QC |
| `GV-LOP-040200` | Chi tiết lớp / Bài tập và Kiểm tra / Kiểm tra | `/chi-tiet-lop/bai-tap-va-kiem-tra/kiem-tra` | `GV-LOP-040200-DK` | QC |

Requirement: `teacher_role/class/class_teaching_requirements.md` — [Giáo viên] Chi tiết lớp — Giảng dạy (tiền tố `TR-CT`).

## 2. Luồng

- `FLOW01` Xem bài học — `REQ19`
- `FLOW02` Bắt đầu buổi học — `REQ20`, `REQ21`
- `FLOW03` Điểm danh và Kết thúc buổi học — `REQ22`
- `FLOW04` Ghi chú và Hoàn thành buổi học — `REQ23`
- `FLOW05` Mở màn chấm bài — `REQ01`
- `FLOW06` Chấm điểm một câu cho một học viên — `REQ06`
- `FLOW07` Tính điểm bài của học viên — `REQ07`
- `FLOW08` Nhận xét học viên — `REQ08`
- `FLOW09` Nhận xét chung — `REQ09`
- `FLOW10` Chấm câu hỏi con — `REQ10`
- `FLOW11` Ghi nhận Đã chấm và sửa bài trên lớp — `REQ11`
- `FLOW12` Xem kết quả Bài tập và Kiểm tra — `REQ13`
- `FLOW13` Giao bài kiểm tra — `REQ17`
- `FLOW14` Thu hồi bài kiểm tra — `REQ18`
- `FLOW15` Xem Tự học — `REQ29`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-LOP-030120` | Popup chọn lịch dạy | Popup | GV-LOP-030100 | GV-LOP-030100 | — | `/chi-tiet-lop/bai-hoc/buoi-hoc?popup=GV-LOP-030120` | Figma | cao |
| `GV-LOP-030121` | Popup bắt đầu buổi học | Popup | GV-LOP-030100 | GV-LOP-030100 | — | `/chi-tiet-lop/bai-hoc/buoi-hoc?popup=GV-LOP-030121` | Figma | cao |
| `GV-LOP-030401` | Tài nguyên · Bị khoá | Trạng thái | GV-LOP-030400 | GV-LOP-030400 | — | `/chi-tiet-lop/bai-hoc/tai-nguyen?state=GV-LOP-030401` | Figma | trung bình |
| `GV-LOP-040110` | BTVN · Bài học chưa mở | Trạng thái | GV-LOP-040100 | GV-LOP-040100 | — | `/chi-tiet-lop/bai-tap-va-kiem-tra/btvn?state=GV-LOP-040110` | Figma | trung bình |
| `GV-LOP-040201` | Kiểm tra · Giáo viên không phụ trách chính (chỉ xem) | Trạng thái | GV-LOP-040211 | GV-LOP-040200 | GV-LOP-040211 | `/chi-tiet-lop/bai-tap-va-kiem-tra/kiem-tra?state=GV-LOP-040201` | Figma | thấp |
| `GV-LOP-040204` | Kiểm tra · Chưa giao · Giáo viên không phụ trách chính (xem trước đề) | Trạng thái | GV-LOP-040201 | GV-LOP-040200 | — | `/chi-tiet-lop/bai-tap-va-kiem-tra/kiem-tra?state=GV-LOP-040204` | Figma | thấp |
| `GV-LOP-040205` | Kiểm tra · Vừa giao | Trạng thái | GV-LOP-040204 | GV-LOP-040200 | — | `/chi-tiet-lop/bai-tap-va-kiem-tra/kiem-tra?state=GV-LOP-040205` | Figma | thấp |
| `GV-LOP-040210` | Kiểm tra · Chưa giao (xem trước đề) | Trạng thái | GV-LOP-040200 | GV-LOP-040200 | GV-LOP-040200 | `/chi-tiet-lop/bai-tap-va-kiem-tra/kiem-tra?state=GV-LOP-040210` | Figma | trung bình |
| `GV-LOP-040211` | Popup Giao bài | Popup | GV-LOP-040210 | GV-LOP-040200 | GV-LOP-040210 | `/chi-tiet-lop/bai-tap-va-kiem-tra/kiem-tra?popup=GV-LOP-040211` | Figma | cao |
| `GV-LOP-040221` | Popup Thu hồi | Popup | GV-LOP-040201 | GV-LOP-040200 | GV-LOP-040201 | `/chi-tiet-lop/bai-tap-va-kiem-tra/kiem-tra?popup=GV-LOP-040221` | Figma | cao |
| `GV-LOP-040320` | Màn chấm bài · Tổng quan chấm bài | Trạng thái | GV-LOP-040100 | GV-LOP-040100 | GV-LOP-040100, GV-LOP-040200 | `/chi-tiet-lop/bai-tap-va-kiem-tra/btvn?state=GV-LOP-040320` | Figma | thấp |
| `GV-LOP-050100` | Trống | Trạng thái | GV-LOP-050110 | GV-LOP-050110 | — | `/chi-tiet-lop/tu-hoc/co-du-lieu?state=GV-LOP-050100` | QC | trung bình |

## 4. Khu vực và item

### `A01` Bài học — Khung menu và Danh sách bài học

Frame: `GV-LOP-030100`, `GV-LOP-030110`, `GV-LOP-030170` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tieu-de-bai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.02` | card-bai-da-mo |  | `5292:226699` Card · Bài đã mở | — |  | `TC01` | Khớp một phần | QC |
| `A01.03` | card-bai-chua-mo |  |  | — |  | `TC01` | Chưa khớp tự động | QC |
| `A01.04` | chon-bai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.05` | thu-tu |  |  | — |  |  | Chưa khớp tự động | QC |

### `A02` Tab Buổi học — Dặn dò trước buổi học

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | dan-do-truoc-buoi-hoc |  |  | — |  | `TC04` | Chưa sync | QC |
| `A02.02` | checkbox-toi-da-doc-ghi-chu |  |  | — |  | `TC04` | Chưa sync | QC |
| `A02.03` | nut-bat-dau-buoi-hoc |  |  | — |  | `TC03` | Chưa sync | QC |

### `A03` Popup Chọn lịch dạy và Bắt đầu buổi học

Frame: `GV-LOP-030120`, `GV-LOP-030121` (tool đoán:GV-LOP-030120, GV-LOP-030121) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | lop-khong-co-lich-tuan-nay |  |  | — |  |  | Chưa sync | QC |
| `A03.02` | popup-chon-lich-day |  |  | — |  | `TC09`, `TC10` | Chưa sync | QC |
| `A03.03` | lua-chon-khong-chon-lich |  |  | — |  |  | Chưa sync | QC |
| `A03.04` | nut-huy-bat-dau |  |  | — |  |  | Chưa sync | QC |
| `A03.05` | popup-bat-dau-buoi-hoc |  |  | — |  |  | Chưa sync | QC |
| `A03.06` | bat-dau-voi-lich |  |  | — |  |  | Chưa sync | QC |
| `A03.07` | bat-dau-khong-chon-lich |  |  | — |  |  | Chưa sync | QC |

### `A04` Bước 1 — Điểm danh và Ghi chú cho lớp học

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A04.02` | danh-sach-hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A04.03` | trang-thai |  |  | — |  |  | Chưa sync | QC |
| `A04.04` | ghi-chu-cho-lop-hoc |  |  | — |  |  | Chưa sync | QC |
| `A04.05` | checkbox-khong-co-dan-do-cho-hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A04.06` | nut-ket-thuc-buoi-hoc |  |  | — |  |  | Chưa sync | QC |
| `A04.07` | popup-ket-thuc-buoi-hoc |  |  | — |  |  | Chưa sync | QC |
| `A04.08` | xac-nhan |  |  | — |  | `TC12` | Chưa sync | QC |

### `A05` Bước 2 — Ghi chú buổi học và Hoàn thành

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | bang-hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A05.02` | ghi-chu-cua-giao-vien-gui-cho-support |  |  | — |  |  | Chưa sync | QC |
| `A05.03` | ghi-chu-cua-giao-vien-gui-cho-giao-vien- |  |  | — |  |  | Chưa sync | QC |
| `A05.04` | nut-hoan-thanh-buoi-hoc |  |  | — |  |  | Chưa sync | QC |
| `A05.05` | popup-hoan-thanh-buoi-hoc |  |  | — |  |  | Chưa sync | QC |
| `A05.06` | xac-nhan |  |  | — |  | `TC17` | Chưa sync | QC |

### `A06` Tab Buổi học — Bài đang dạy và chờ hoàn thành

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | bai-dang-day |  |  | — | opens `A06` |  | Chưa sync | QC |
| `A06.02` | bai-cho-hoan-thanh |  |  | — |  |  | Chưa sync | QC |
| `A06.03` | nguoi-tiep-tuc |  |  | — |  |  | Chưa sync | QC |

### `A07` Tab Buổi học — Bài đã hoàn thành

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | giao-vien-nhan-xet-lop |  |  | — |  |  | Chưa sync | QC |
| `A07.02` | ghi-chu-cua-giao-vien-gui-cho-support |  |  | — |  |  | Chưa sync | QC |
| `A07.03` | ghi-chu-cua-giao-vien-gui-cho-giao-vien- |  |  | — |  |  | Chưa sync | QC |
| `A07.04` | bang-hoc-vien |  |  | — |  | `TC22` | Chưa sync | QC |
| `A07.05` | icon-ghi-chu |  |  | — | opens `A04` |  | Chưa sync | QC |

### `A08` Icon trạng thái điểm danh

Frame: `GV-LOP-030100` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | co-mat |  |  | — |  |  | Chưa khớp tự động | QC |
| `A08.02` | vao-tre |  |  | — |  | `TC24` | Chưa khớp tự động | QC |
| `A08.03` | ra-som |  |  | — |  | `TC24` | Chưa khớp tự động | QC |
| `A08.04` | vao-tre-ra-som |  |  | — |  | `TC24` | Chưa khớp tự động | QC |
| `A08.05` | nghi-cp-nghi-co-phep |  |  | — |  |  | Chưa khớp tự động | QC |
| `A08.06` | nghi-kp-nghi-khong-phep |  |  | — |  |  | Chưa khớp tự động | QC |
| `A08.07` | chua-diem-danh |  |  | — |  | `TC24` | Chưa khớp tự động | QC |

### `A09` Tab Thông tin, Nội dung và Kiến thức

Frame: `GV-LOP-030200`, `GV-LOP-030300`, `GV-LOP-030500` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | thong-tin | `Card Menu v2 (Test)` Type=Menu phụ, State=Default | `I4915:259928;4901:213564` Card Menu v2 (Test) | — |  | `TC26` | Khớp | QC |
| `A09.02` | noi-dung | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I4324:16976;2177:28928` Chi tiết NV | — |  | `TC27` | Khớp | QC |
| `A09.03` | kien-thuc | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I4324:16978;2177:28928` Chi tiết NV | — |  |  | Khớp | QC |

### `A10` Tab Tài nguyên — Khoá tải theo bài

Frame: `GV-LOP-030400`, `GV-LOP-030401` (tool đoán:GV-LOP-030401) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | nhom-bai-giang-tai-nguyen-khac |  | `4324:17526` Bài giảng; `4324:27550` Tài nguyên khác | — |  |  | Khớp | QC |
| `A10.02` | bai-duoc-tai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A10.03` | bai-bi-khoa | `Atom/Toast` Type=Info | `I5425:282992;2167:28354` Title | — |  |  | Khớp một phần | QC |

### `A11` Chỉ số % BTVN và Đi học theo bài

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A11.01` | tap-tinh |  |  | — |  |  | Chưa sync | QC |
| `A11.02` | btvn |  |  | — |  | `TC31` | Chưa sync | QC |
| `A11.03` | di-hoc |  |  | — |  | `TC32` | Chưa sync | QC |
| `A11.04` | lam-tron |  |  | — |  |  | Chưa sync | QC |
| `A11.05` | mau-so-bang-0 |  |  | — |  |  | Chưa sync | QC |

### `A12` Bài tập và Kiểm tra — Khung menu

Frame: `GV-LOP-040100`, `GV-LOP-040201`, `GV-LOP-040204`, `GV-LOP-040205`, `GV-LOP-040210` (tool đoán:GV-LOP-040201, GV-LOP-040204, GV-LOP-040205, GV-LOP-040210) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A12.01` | tab-btvn-kiem-tra | `Atom/Side Tab` State=Active, Kiểu=Gạch trái; `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I4324:86046;2177:28936` Nhiệm vụ con; `I4324:86047;2177:28928` Chi tiết NV | — |  |  | Khớp | QC |
| `A12.02` | o-tim-kiem | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `4324:86048` Atom/Input | — |  |  | Khớp | QC |
| `A12.03` | card-bai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A12.04` | nut-dieu-huong-cham-bai |  |  | — | see `A18` |  | Chưa khớp tự động | QC |
| `A12.05` | danh-sach-btvn | `Atom/Toast` Type=Success | `I7074:399738;2167:28344` Description | — |  |  | Khớp một phần | QC |
| `A12.06` | danh-sach-kiem-tra |  |  | — |  |  | Chưa khớp tự động | QC |
| `A12.07` | tai-du-lieu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A12.08` | the-chi-so | `Thẻ chỉ số` Kiểu=Chuẩn | `4324:85934` Thẻ chỉ số | — |  |  | Chỉ có trên Figma | Figma |
| `A12.09` | trang-thai-nop-bai-va-diem | `Trạng thái nộp bài và điểm`  | `4324:98883` Trạng thái nộp bài và điểm | — |  |  | Chỉ có trên Figma | Figma |
| `A12.10` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Inactive | `4324:98890` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `A12.11` | molecule-o-dinh-danh |  | `4324:98917` Molecule/Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `A12.12` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4324:86046` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `A12.13` | atom-badge | `Atom/Badge`  | `4324:99243` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `A12.14` | percent | `PERCENT %`  | `4324:99249` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `A12.15` | nut-cham-bai | `Atom/Button` Type=Outlined, Size=XSmall | `5425:274636` Nút · Chấm bài | — |  |  | Chỉ có trên Figma | Figma |
| `A12.16` | button-thu-hoi | `Atom/Button` Type=Danger, Size=Small | `4324:99732` Button · Thu hồi | — |  |  | Chỉ có trên Figma | Figma |
| `A12.17` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `4324:86355` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |

### `A13` Khối Tổng Quan

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A13.01` | da-cham-k-tra |  |  | — |  | `TC40` | Chưa sync | QC |
| `A13.02` | k-tra-da-giao |  |  | — |  | `TC40` | Chưa sync | QC |
| `A13.03` | diem-k-tra |  |  | — |  | `TC39` | Chưa sync | QC |
| `A13.04` | da-cham-btvn |  |  | — |  |  | Chưa sync | QC |
| `A13.05` | ti-le-lam-btvn |  |  | — |  |  | Chưa sync | QC |
| `A13.06` | diem-btvn |  |  | — |  |  | Chưa sync | QC |
| `A13.07` | icon |  |  | — |  |  | Chưa sync | QC |

### `A14` Tab, badge và card bài

Frame: `GV-LOP-040200` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A14.01` | badge-tab |  |  | — |  |  | Chưa khớp tự động | QC |
| `A14.02` | nhan-trang-thai-btvn | `Trạng thái nộp bài và điểm`  | `4324:99813` Trạng thái nộp bài và điểm | — |  |  | Khớp | QC |
| `A14.03` | nhan-trang-thai-kiem-tra | `Trạng thái nộp bài và điểm`  | `4324:99813` Trạng thái nộp bài và điểm | — |  |  | Khớp | QC |
| `A14.04` | vong-so-da-nop |  | `4324:86350` Tabs Navigation | — | governed-by `REQ02` | `TC43` | Khớp | QC |
| `A14.05` | vong-ty-le-cham |  |  | — |  |  | Chưa khớp tự động | QC |
| `A14.06` | mo-ta |  | `4324:99744` Mô tả | — |  |  | Khớp | QC |

### `A15` Bảng kết quả học viên

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A15.01` | diem-so |  |  | — | governed-by `REQ07` |  | Chưa sync | QC |
| `A15.02` | ten-hoc-vien |  |  | — | governed-by `REQ02` |  | Chưa sync | QC |
| `A15.03` | thoi-gian-lam-bai |  |  | — |  |  | Chưa sync | QC |
| `A15.04` | nop-bai |  |  | — |  | `TC47a` | Chưa sync | QC |
| `A15.05` | so-cau-bo-qua |  |  | — |  |  | Chưa sync | QC |
| `A15.06` | bam-dong |  |  | — |  | `TC47a` | Chưa sync | QC |
| `A15.07` | thiet-lap-lai-nop-bai |  |  | — |  |  | Chưa sync | QC |

### `A16` Kiểm tra chưa giao — Xem trước đề và Giao bài

Frame: `GV-LOP-040211` (tool đoán:GV-LOP-040211) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A16.01` | xem-truoc-de |  |  | — |  |  | Chưa sync | QC |
| `A16.02` | nut-giao-bai |  |  | — | opens `A16` |  | Chưa sync | QC |
| `A16.03` | dieu-kien-giao |  |  | — |  |  | Chưa sync | QC |
| `A16.04` | giao-thanh-cong |  |  | — |  |  | Chưa sync | QC |

### `A17` Thu hồi bài kiểm tra

Frame: `GV-LOP-040221` (tool đoán:GV-LOP-040221) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A17.01` | nut-thu-hoi |  |  | — | opens `A17` |  | Chưa sync | QC |
| `A17.02` | thu-hoi-thanh-cong |  |  | — |  |  | Chưa sync | QC |

### `A18` Màn chấm bài — Khung màn và điều hướng

Frame: `GV-LOP-040100`, `GV-LOP-040200`, `GV-LOP-040320` (tool đoán:GV-LOP-040320) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A18.01` | diem-vao-tu-card-bai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A18.02` | diem-vao-tu-dong-hoc-vien |  | `4324:98884` Molecule/Ô định danh | — |  |  | Khớp | QC |
| `A18.03` | bai-bo-sung-nhieu-bai-nguon |  |  | — |  |  | Chưa khớp tự động | QC |
| `A18.04` | tieu-de | `Thẻ chỉ số` Kiểu=Chuẩn | `I4324:85934;3004:47242` Tiêu đề | — |  | `TC55` | Khớp | QC |
| `A18.05` | da-cham-va-sua-bai-tren-lop |  |  | — |  |  | Chưa khớp tự động | QC |
| `A18.06` | vung-trai |  | `5750:77089` Vùng trái · Chi tiết câu | — |  |  | Khớp một phần | QC |
| `A18.07` | vung-phai |  | `4324:99321` Mô tả | — |  |  | Khớp một phần | QC |

### `A19` Danh sách Câu hỏi và trạng thái chấm

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A19.01` | icon-trang-thai |  |  | — |  |  | Chưa sync | QC |
| `A19.02` | nhan-loai-cau |  |  | — | governed-by `REQ05` |  | Chưa sync | QC |
| `A19.03` | de-bai |  |  | — |  |  | Chưa sync | QC |
| `A19.04` | vong-ty-le-diem |  |  | — |  |  | Chưa sync | QC |
| `A19.05` | bo-loc-trang-thai |  |  | — |  |  | Chưa sync | QC |

### `A20` Chi tiết câu hỏi và bộ lọc học viên

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A20.01` | cau-n |  |  | — |  |  | Chưa sync | QC |
| `A20.02` | noi-dung-cau |  |  | — |  |  | Chưa sync | QC |
| `A20.03` | chua-cham |  |  | — |  | `TC67` | Chưa sync | QC |
| `A20.04` | hien-ten |  |  | — |  | `TC68` | Chưa sync | QC |
| `A20.05` | hoc-vien |  |  | — |  | `TC69` | Chưa sync | QC |
| `A20.06` | the-hoc-vien |  |  | — |  |  | Chưa sync | QC |

### `A21` Thẻ học viên — điểm và đáp án

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A21.01` | so-thu-tu |  |  | — |  |  | Chưa sync | QC |
| `A21.02` | ten-hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A21.03` | nhan-chi-xem |  |  | — |  | `TC75` | Chưa sync | QC |
| `A21.04` | day-diem-0-10 |  |  | — |  |  | Chưa sync | QC |
| `A21.05` | thu-gon-mo-rong |  |  | — |  |  | Chưa sync | QC |
| `A21.06` | dap-an-cua-hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A21.07` | trac-nghiem-tu-vung-1-trac-nghiem-cau-5- |  |  | — |  |  | Chưa sync | QC |
| `A21.08` | sap-xep-7 |  |  | — |  |  | Chưa sync | QC |
| `A21.09` | noi-cot-8 |  |  | — |  |  | Chưa sync | QC |
| `A21.10` | noi-22-viet-dang-chu-44 |  |  | — |  |  | Chưa sync | QC |
| `A21.11` | ve-4-chon-anh-2-trac-nghiem-hinh-anh-11 |  |  | — |  |  | Chưa sync | QC |
| `A21.12` | ghi-am-3-nhap-vai-10 |  |  | — |  |  | Chưa sync | QC |
| `A21.13` | hoc-vien-bo-qua-cau |  |  | — |  |  | Chưa sync | QC |

### `A22` Nhận xét của giáo viên

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A22.01` | o-nhan-xet-cua-giao-vien |  |  | — |  |  | Chưa sync | QC |
| `A22.02` | icon-micro |  |  | — | opens `A21` | `TC79` | Chưa sync | QC |
| `A22.03` | icon-tai-lieu |  |  | — | opens `A22` | `TC80` | Chưa sync | QC |
| `A22.04` | chip-file-ghi-am-n-file-anh-n |  |  | — |  |  | Chưa sync | QC |
| `A22.05` | icon-sao-chep |  |  | — |  |  | Chưa sync | QC |
| `A22.06` | icon-dan |  |  | — |  | `TC82` | Chưa sync | QC |

### `A23` Nhận xét chung của câu

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A23.01` | o-nhan-xet-chung |  |  | — |  | `TC87` | Chưa sync | QC |
| `A23.02` | xac-nhan-nhap |  |  | — | opens `A23` |  | Chưa sync | QC |
| `A23.03` | popup-xac-nhan |  |  | — |  |  | Chưa sync | QC |
| `A23.04` | xac-nhan |  |  | — |  | `TC85` | Chưa sync | QC |

### `A24` Câu hỏi con

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A24.01` | tab-cau-hoi-n |  |  | — |  |  | Chưa sync | QC |
| `A24.02` | noi-dung-cau-con |  |  | — |  |  | Chưa sync | QC |
| `A24.03` | dap-an-cua-hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A24.04` | day-diem-0-10 |  |  | — |  |  | Chưa sync | QC |

### `A25` Nút Đã Chấm và Sửa Bài Trên Lớp

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A25.01` | nut-da-cham-va-sua-bai-tren-lop |  |  | — |  |  | Chưa sync | QC |
| `A25.02` | chua-cham-het |  |  | — |  |  | Chưa sync | QC |
| `A25.03` | ghi-nhan |  |  | — |  | `TC92`, `TC94` | Chưa sync | QC |
| `A25.04` | chip-nguoi-bam |  |  | — |  |  | Chưa sync | QC |

### `A26` Tự học — Danh sách bài và bảng thời gian

Frame: `GV-LOP-050100` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A26.01` | chua-co-khoa-tu-hoc |  | `4333:7924` Bảng dữ liệu này đang trống | — |  |  | Khớp | QC |
| `A26.02` | card-bai |  |  | — |  | `TC96`, `TC100` | Chưa khớp tự động | QC |
| `A26.03` | tai-du-lieu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A26.04` | bang-thoi-gian |  |  | — |  | `TC97` | Chưa khớp tự động | QC |
| `A26.05` | hoc-vien-trong-bang |  |  | — |  |  | Chưa khớp tự động | QC |
| `A26.06` | vuot-24-gio |  |  | — |  |  | Chưa khớp tự động | QC |
| `A26.07` | 00-00-00 |  |  | — |  | `TC98`, `TC100` | Chưa khớp tự động | QC |

### `A27` Toast phản hồi CRUD

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A27.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC04` | Chưa sync | QC |
| `A27.02` | thong-tin |  |  | — |  | `TTC03` | Chưa sync | QC |
| `A27.03` | canh-bao |  |  | — |  |  | Chưa sync | QC |
| `A27.04` | loi |  |  | — |  |  | Chưa sync | QC |

### `F01` (ngoài Body)

Frame: `GV-LOP-030100`, `GV-LOP-030110`, `GV-LOP-030170`, `GV-LOP-030200`, `GV-LOP-030300`, `GV-LOP-030400`, `GV-LOP-030500`, `GV-LOP-040100`, `GV-LOP-040200` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4324:16658` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-badge | `Atom/Badge`  | `4324:16676` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | molecule-o-dinh-danh |  | `4324:16677` Molecule/Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | trang-thai-nop-bai-va-diem | `Trạng thái nộp bài và điểm`  | `4324:16681` Trạng thái nộp bài và điểm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | avatar-name | `AVATAR + Name`  | `4324:16775` AVATAR + Name | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | tag-thoi-gian | `Atom/Tag thời gian`  | `4324:16776` Tag thời gian | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | percent | `PERCENT %`  | `4324:16780` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | component-2 | `Switch Center`  | `4324:19386` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | account | `ACCOUNT` Size=Default | `4324:19388` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | header-vai-tro |  | `4899:187415` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | sidebar-menu-teacher | `MENU - TEACHER`  | `4915:260135` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | atom-button | `Atom/Button` Type=Neutral, Size=Medium | `5292:221839` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | atom-label | `Atom/Label`  | `4324:16981` Atom/Label | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | background-border | `Background+Border`  | `4324:16992` Background+Border | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | empty-state-illustration | `Empty State / Illustration` Type=Nền trống | `4324:27520` Empty State / Illustration | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | mini-audio-badge | `Liner Icon`  | `4324:27566` Mini Audio Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | main-large-audio-icon | `Liner Icon`  | `4324:27564` Main Large Audio Icon | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Quyền và điểm vào | Chỉ `Giáo viên phụ trách chính` của lớp được mở màn chấm và chấm điểm/nhận xét BTVN, Kiểm tra. Điểm vào là nút điều hướng trên card bài và dòng học viên đã nộp (lọc sẵn học viên). Bài bổ sung nhiều bài nguồn chọn bài nguồn qua popup trước khi vào. |
| `REQ02` | Tập học viên hợp lệ | Chỉ tài khoản role học viên của lớp. BTVN: học viên đã được điểm danh (khác `Chưa điểm danh`) ở buổi của bài đã mở, và **thời điểm mở bài không nằm trong khoảng học viên ở trạng thái `Nghỉ học`, `Rời lớp` hoặc `Xóa`**. Khoảng tính từ lúc học viên chuyển sang một trong ba trạng thái này đến lúc chuyển sang trạng thái khác (chưa chuyển thì đến hiện tại). Bài mở trước hoặc sau khoảng đó vẫn được chấm; `Chỉ xem`, `Dự thính`, `Đang học`, `Hoàn thành` không bị loại. Kiểm tra: học viên hợp lệ theo lượt giao bài kiểm tra. Trong tập này, học viên **đã nộp** được chấm; học viên có câu trả lời nhưng chưa nộp hiển thị `Chỉ xem`. |
| `REQ03` | Danh sách câu và trạng thái | Liệt kê mọi câu của bài theo thứ tự đề. Câu `Đã chấm` khi mọi câu trả lời của học viên đã nộp có điểm, hoặc câu không có câu trả lời nhưng bài có học viên đã nộp (`Bạn không cần chấm câu hỏi này!`, tỷ lệ 100%). Câu đang chọn là `Đang chấm`. Tỷ lệ điểm = tổng điểm câu trả lời đã chấm / (số câu trả lời đã chấm × 10), làm tròn số nguyên phần trăm. Bộ lọc `Trạng Thái` gồm `Chưa chấm`, `Đã chấm`. |
| `REQ04` | Bộ lọc học viên | `Chưa Chấm` (mặc định tắt) giữ lại học viên chưa có điểm ở câu và học viên vừa chấm trong lúc lọc cho đến khi đổi câu; `Hiện Tên` (mặc định bật) ẩn/hiện tên; `Học Viên` chọn nhiều học viên có câu trả lời. Bộ lọc chỉ áp dụng cho câu đang chọn. |
| `REQ05` | Loại câu và người chấm | \| Nhãn \| Mã loại câu \| Người chấm \| |
| `REQ06` | Lưu điểm câu | Điểm câu là số nguyên 0–10, lưu ngay khi bấm cho đúng học viên–câu–bài–lớp; được đổi điểm và nhận xét bất kỳ lúc nào, **không có mốc khoá** (kể cả sau khi đã ghi nhận `Đã Chấm và Sửa Bài Trên Lớp` hoặc lớp đã Hoàn thành). |
| `REQ07` | Điểm bài | Điểm BTVN/Kiểm tra của học viên = trung bình cộng điểm các câu học viên có câu trả lời trong bài, chỉ tính khi mọi câu đó đã có điểm; lưu giá trị gốc, hiển thị làm tròn 1 chữ số thập phân theo menu Bài tập và Kiểm tra. BTVN của bài bổ sung lưu điểm theo từng bài nguồn; điểm BTVN của bài = trung bình các bài nguồn, chỉ khi mọi bài nguồn đã chấm. |
| `REQ08` | Nhận xét học viên | Gồm chữ, danh sách file ghi âm, danh sách file ảnh (mỗi file tối đa 25MB), gắn đúng học viên–câu–bài–lớp; thêm/xoá file lưu ngay. Sao chép/dán chuyển cả ba phần; dán thay nội dung hiện có của thẻ đích. |
| `REQ09` | Nhận xét chung | Xác nhận qua popup; ghi đè phần chữ nhận xét của mọi học viên có câu trả lời ở câu, không phụ thuộc bộ lọc, giữ nguyên file ghi âm/ảnh. |
| `REQ10` | Câu hỏi con | Chấm từng câu con; điểm câu cha = trung bình câu con khi mọi câu con có điểm. Đáp án câu con ghép theo mã câu con, thiếu mã thì theo thứ tự. |
| `REQ11` | Đã chấm và sửa bài trên lớp | Chỉ ghi nhận khi mọi câu trả lời của học viên đã nộp có điểm. Bấm không giới hạn số lần; mỗi lần ghi đè người bấm và thời điểm máy chủ, chỉ lưu lần bấm gần nhất. Chip hiển thị avatar, tên và thời điểm của người bấm gần nhất. Bản ghi tách BTVN/Kiểm tra theo bài và lớp. Thẻ `Đã chấm và sửa bài` ở Tổng quan lớp = số bài BTVN + Kiểm tra đã có bản ghi, mỗi bài tính một lần dù bấm nhiều lần. |
| `REQ12` | Đồng bộ dữ liệu | Thay đổi điểm/nhận xét được phản ánh ở bảng học viên, card bài, khối Tổng Quan của menu Bài tập và Kiểm tra và các chỉ số Điểm BTVN, Điểm KT, Đã chấm và sửa bài ở Tổng quan lớp sau khi quay lại hoặc tải lại. |
| `REQ13` | Danh sách bài | Tab `BTVN` gồm một BTVN cho mỗi bài học của lớp (kể cả bài bổ sung, không gồm Tự học); tab `Kiểm Tra` gồm bài kiểm tra của khoá học và bài kiểm tra bổ sung do Admin thêm, sắp theo ngày giao tăng dần, bài chưa giao xếp sau. Giáo viên không thêm bài kiểm tra. BTVN tự giao khi bài học mở, giáo viên không giao/thu hồi BTVN; chỉ bài kiểm tra có Giao bài/Thu hồi. Tìm theo tên bài; tải toàn bộ, không phân trang; mặc định tab BTVN và card đầu tiên. |
| `REQ14` | Khối Tổng Quan | `Đã Chấm K.Tra` = bài kiểm tra Đã chấm / tổng bài kiểm tra; `K.Tra Đã Giao` = bài đã giao / tổng bài kiểm tra; `Đã Chấm BTVN` = BTVN Đã chấm / tổng BTVN; `Điểm K.Tra`, `Điểm BTVN` = trung bình điểm các bài đã chấm (điểm 0 vẫn tính), làm tròn 1 chữ số thập phân, không có thì trống; `Tỉ Lệ Làm BTVN` = trung bình tỷ lệ nộp BTVN của học viên hợp lệ trên các bài đã mở. Tính toàn lớp, không đổi theo card hoặc tìm kiếm. |
| `REQ15` | Badge và card | Badge = số bài Chưa chấm của tab. Bốn nhãn `Chưa giao`, `Đang đợi nộp bài`, `Chưa chấm`, `Đã chấm` theo dữ liệu giao/nộp/chấm (BTVN Chưa giao = bài học chưa mở). Vòng số đã nộp `S/N` = học viên hợp lệ đã nộp / tổng học viên hợp lệ. Vòng tỷ lệ chấm = C/S × 100, S = 0 là 0%. |
| `REQ16` | Bảng kết quả học viên | Gồm tập học viên hợp lệ (REQ02) với Điểm số (trống khi chưa chấm, 0 hợp lệ), tên, thời gian làm bài (tối đa hiển thị 23:59:59), trạng thái nộp và số câu bỏ qua. Bấm dòng Đã nộp mở màn chấm (chỉ Giáo viên phụ trách chính); bấm dòng Chưa nộp hiện Toast `Học viên chưa nộp bài này!`. Vòng trên card có tooltip `Số bài đã nộp` và `Đã chấm`. Giáo viên không có Thiết lập lại nộp bài. |
| `REQ17` | Giao bài kiểm tra | Chỉ `Giáo viên phụ trách chính`, qua popup xác nhận; lớp phải `Đang học` hoặc là lớp không chính thức. Thành công lưu lượt giao với ngày giao; bài chưa giao hiển thị xem trước đề. |
| `REQ18` | Thu hồi bài kiểm tra | Chỉ `Giáo viên phụ trách chính`, qua popup có cảnh báo xoá dữ liệu. Thành công xoá lượt giao và toàn bộ bài làm, điểm, nhận xét chấm của bài; bài về Chưa giao; giao lại là lượt mới. |
| `REQ19` | Danh sách bài học | Toàn bộ bài của lớp theo thứ tự (gồm bài bổ sung), mặc định chọn bài đầu. Card bài đã mở có giáo viên của buổi (người bắt đầu), mốc mở `HH:mm - dd/MM/yyyy`, vòng BTVN/Đi học; card chưa mở chỉ có số thứ tự xám, tên, mô tả. Giáo viên không thêm/sửa/xoá bài. |
| `REQ20` | Dặn dò trước buổi học | Bài Chưa mở hiển thị 5 dòng dặn dò cố định và checkbox `Tôi đã đọc ghi chú`; phải tick mới bắt đầu được. Không hiển thị ghi chú hay nhận xét của bài trước (chỉ xem ở bài đã hoàn thành). Mọi giáo viên của lớp được bắt đầu bất kỳ bài chưa mở; lớp phải `Đang học` hoặc là lớp không chính thức. |
| `REQ21` | Chọn lịch và lương buổi | Lớp có lịch tuần này thì hiện popup `Chọn lịch dạy` gồm lịch tuần này của chính giáo viên (lịch Hoàn thành không chọn được, lịch huỷ ẩn) và `Không chọn lịch`. Chọn lịch: gắn lịch với buổi và giáo viên, lịch giữ `Đang đợi` (lịch cố định chưa có bản ghi thì tạo bản ghi Đang đợi); lịch đã gắn không chọn được cho buổi khác. Lịch chỉ chuyển `Hoàn thành` và phát sinh lương buổi dạy (một lần) khi bấm `Hoàn thành buổi học`; ngày tính lương là ngày của lịch, không phải ngày hoàn thành. Không chọn lịch hoặc lớp không có lịch tuần này: không phát sinh lương, có Toast `Thông Báo` tương ứng. Mỗi bài một buổi. |
| `REQ22` | Điểm danh | Danh sách gồm học viên `Đang học`, `Dự thính`, `Hoàn thành`. Mỗi học viên một trạng thái trong `Có mặt`, `Vào trễ`, `Ra sớm`, `Vào trễ & Ra sớm`, `Nghỉ CP`, `Nghỉ KP` (mặc định `Chưa điểm danh`). Kết thúc buổi học khi điểm danh đủ và có ghi chú lớp hoặc tick `Không có dặn dò cho học viên`; lưu điểm danh và `Giáo viên nhận xét lớp`, buổi chuyển `Chờ hoàn thành`. |
| `REQ23` | Hoàn thành buổi học | Ghi chú từng học viên (gửi Support, gửi học viên) không bắt buộc. Ghi chú gửi Support và gửi giáo viên tiếp theo phải có nội dung hoặc tick checkbox `Không có dặn dò` tương ứng. Hoàn thành lưu ghi chú, buổi chuyển `Hoàn thành`, lịch đã gắn chuyển `Hoàn thành` và phát sinh lương, xoá nháp. |
| `REQ24` | Nháp và tiếp tục | Dữ liệu Bước 1/Bước 2 lưu nháp trên server sau mỗi thay đổi, theo lớp–bài. Mọi giáo viên của lớp tiếp tục được buổi `Đang dạy` (`Vào điểm danh`) hoặc `Chờ hoàn thành` (`Hoàn thành buổi học`) và thấy đúng nháp; giáo viên của buổi giữ nguyên là người bắt đầu. |
| `REQ25` | Bài đã hoàn thành | Hiển thị `Giáo viên nhận xét lớp`, ghi chú gửi Support, ghi chú gửi giáo viên tiếp theo và bảng học viên (Đi học, BTVN, Ghi chú) chỉ đọc. Giáo viên không sửa sau khi hoàn thành. |
| `REQ26` | Thông tin, Nội dung, Kiến thức | Dữ liệu định nghĩa bài học chỉ đọc giống Admin; Kiến thức để trống. |
| `REQ27` | Tài nguyên | Bấm file tải ngay. Chỉ tải được tài nguyên của 3 bài đã mở có số thứ tự lớn nhất; bài khác (đã mở trước đó hoặc chưa mở) hiển thị file kèm icon khoá, bấm không tải; áp dụng cả Bài giảng và Tài nguyên khác; backend kiểm tra khi tải. |
| `REQ28` | % BTVN và Đi học theo bài | Tính theo số học viên `Đang học`/`Dự thính` của đúng bài: % BTVN = đã nộp / tập; % Đi học = đi học (Có mặt, Vào trễ, Ra sớm, Vào trễ & Ra sớm) / số đã điểm danh trong tập (Nghỉ CP/KP trong mẫu, Chưa điểm danh loại khỏi tử và mẫu). Mẫu số 0 để trống. |
| `REQ29` | Tự học | Mọi giáo viên của lớp xem danh sách bài tự học (giữ thứ tự đã lưu, tải toàn bộ, mặc định bài 1) và bảng thời gian app của toàn bộ học viên đủ 7 trạng thái theo 8 phần `Học Flashcard`, `Bài tập`, `Từ vựng`, `Ngữ pháp`, `Đọc`, `Kanji`, `Nghe`, `Bảng chữ`; `HH:mm:ss`, ô vượt 24 giờ hiển thị `23:59:59`. Chỉ đọc: không thêm khóa/bài, không sửa thời gian; xem bảng không tạo thời gian học; Tự học không ảnh hưởng điểm danh, BTVN của bài học chính. |
| `REQ30` | Icon trạng thái điểm danh | Bảng hiển thị điểm danh (cột Đi học ở tab Buổi học, cột Trạng thái ở Tổng quan) dùng bộ icon `Trạng thái đi học` theo bảng ghép 7 trạng thái; hover hiện tên trạng thái. Dropdown điểm danh ở Bước 1 chỉ hiển thị chữ. |
| `EX01` | Ngoại lệ | Giáo viên không phải `Giáo viên phụ trách chính` của lớp → không có nút điều hướng chấm, `Giao bài`, `Thu hồi`; mở URL hoặc gửi request chấm/giao/thu hồi bị backend từ chối, không lưu dữ liệu. Giáo viên không thuộc lớp không xem được menu. |
| `EX02` | Ngoại lệ | Bấm `Đã Chấm và Sửa Bài Trên Lớp` khi còn câu trả lời chưa chấm → Toast `Thông Báo` `Vui lòng chấm hết bài cho học viên!`; không ghi nhận, chip giữ nguyên. |
| `EX03` | Ngoại lệ | Dán nhận xét với dữ liệu bộ nhớ tạm sai định dạng → Toast `Thông Báo` `Dữ liệu không hợp lệ`; nhận xét giữ nguyên. |
| `EX04` | Ngoại lệ | Lưu điểm, nhận xét hoặc nhận xét chung thất bại → Toast `Có Lỗi Xảy Ra`; không tính lại điểm bài từ dữ liệu chưa lưu. |
| `EX05` | Ngoại lệ | Tải file ghi âm hoặc ảnh thất bại → bỏ chip `Đang tải...`, không thêm file; Toast `Có Lỗi Xảy Ra`. |
| `EX06` | Ngoại lệ | Bài Kiểm tra bị `Thu hồi` trong lúc đang chấm → request chấm tiếp theo bị từ chối vì bài làm đã bị xoá; giáo viên quay lại menu Bài tập và Kiểm tra để tải dữ liệu mới. |
| `EX07` | Ngoại lệ | Học viên có câu trả lời nhưng chưa nộp bài → thẻ `Chỉ xem`; backend từ chối request chấm/nhận xét cho học viên đó. |
| `EX08` | Ngoại lệ | Bài chưa có học viên nộp → vùng thẻ hiển thị `Chưa có học sinh nộp bài`; không có thẻ để chấm. |
| `EX09` | Ngoại lệ | File ghi âm hoặc ảnh nhận xét lớn hơn 25MB → không tải lên, không thêm chip; Toast `Cảnh Báo` `File vượt quá dung lượng cho phép (25MB).` |
| `EX10` | Ngoại lệ | Giao bài kiểm tra khi lớp chính thức chưa ở trạng thái `Đang học` → Toast `Cảnh Báo` `Lớp chưa bắt đầu!`; bài vẫn `Chưa giao`. |
| `EX11` | Ngoại lệ | Giao hoặc thu hồi thất bại do backend/network → Toast `Có Lỗi Xảy Ra`; trạng thái bài và dữ liệu bài làm giữ nguyên. |
| `EX12` | Ngoại lệ | Bắt đầu buổi học khi lớp chính thức chưa ở trạng thái `Đang học` → Toast `Cảnh Báo` `Lớp chưa bắt đầu!`; không tạo buổi, không đổi lịch. |
| `EX13` | Ngoại lệ | Sửa điểm danh hoặc ghi chú sau khi buổi đã `Hoàn thành`, hoặc sửa điểm danh khi buổi đã `Chờ hoàn thành` → backend từ chối; dữ liệu giữ nguyên. |
| `EX14` | Ngoại lệ | Tải tài nguyên của bài bị khoá → không tải; Toast `Thông Báo` `Chỉ tải được tài nguyên của 3 bài đã mở gần nhất`; request trực tiếp bị từ chối. |
| `EX15` | Ngoại lệ | Hai giáo viên cùng bắt đầu một bài → chỉ tạo một buổi; người sau vào tiếp tục buổi đã có, không chọn lịch lần hai; mỗi buổi phát sinh lương tối đa một lần khi Hoàn thành. |
| `EX16` | Ngoại lệ | Bắt đầu, Kết thúc hoặc Hoàn thành buổi thất bại do backend/network → Toast `Có Lỗi Xảy Ra`; trạng thái buổi giữ nguyên, nháp không mất. |
| `EX17` | Ngoại lệ | Giáo viên gửi request thêm khóa tự học hoặc thêm bài tự học → backend từ chối; danh sách Tự học giữ nguyên. |
| `EX18` | Ngoại lệ | Tải danh sách bài hoặc bảng thời gian Tự học lỗi → vùng lỗi có `Thử lại`; không hiển thị rỗng hoặc `00:00:00` giả. |
| `EX19` | Ngoại lệ | Bấm dòng học viên `Chưa nộp` ở bảng kết quả → Toast `Thông Báo` `Học viên chưa nộp bài này!`; không mở màn chấm. |
| `EX20` | Ngoại lệ | Giáo viên gửi request thiết lập lại bài nộp của học viên → backend từ chối; bài nộp giữ nguyên. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở menu Bài học | High | Có | Flow 1 / REQ19 | `A01` | `A01.02`, `A01.03` |
| `TC02` | Case 2: Chọn bài không bắt đầu buổi | Medium |  | REQ19 | `A01` |  |
| `TC03` | Case 3: Khoá nút khi chưa đọc | High |  | Flow 2 / REQ20 | `A02` | `A02.03` |
| `TC04` | Case 4: Không hiển thị ghi chú bài trước | Medium |  | REQ20 | `A02` | `A02.01`, `A02.02` |
| `TC05` | Case 5: Lớp chưa bắt đầu | High |  | EX12 / REQ20 | `A02` |  |
| `TC06` | Case 6: Bắt đầu bài không theo thứ tự | Medium |  | REQ20 | `A02` |  |
| `TC07` | Case 7: Bắt đầu với lịch | High | Có | Flow 2 / REQ21 | `A03` |  |
| `TC08` | Case 8: Không chọn lịch | High |  | Flow 2 / REQ21 | `A03` |  |
| `TC09` | Case 9: Lớp không có lịch tuần này | Medium |  | REQ21 | `A03` | `A03.02` |
| `TC10` | Case 10: Lịch đã hoàn thành không chọn được | Medium |  | REQ21 | `A03` | `A03.02` |
| `TC11` | Case 11: Huỷ không bắt đầu | Medium |  | Flow 2 | `A03` |  |
| `TC12` | Case 12: Kết thúc buổi học | High | Có | Flow 3 / REQ22 | `A04` | `A04.08` |
| `TC13` | Case 13: Khoá nút khi còn chưa điểm danh | High |  | REQ22 | `A04` |  |
| `TC14` | Case 14: Không có dặn dò | Medium |  | REQ22 | `A04` |  |
| `TC15` | Case 15: Danh sách học viên điểm danh | High |  | REQ22 | `A04` |  |
| `TC16` | Case 16: Nháp lưu trên server | High |  | REQ24 | `A04` |  |
| `TC17` | Case 17: Hoàn thành buổi học | High | Có | Flow 4 / REQ23 | `A05` | `A05.06` |
| `TC18` | Case 18: Khoá nút khi thiếu ghi chú | High |  | REQ23 | `A05` |  |
| `TC19` | Case 19: Ghi chú hiển thị ở bài đã hoàn thành | High |  | REQ20 / REQ23 / REQ25 | `A05` |  |
| `TC20` | Case 20: Tiếp tục buổi Đang dạy | High |  | Flow 3 / REQ24 | `A06` |  |
| `TC21` | Case 21: Tiếp tục buổi Chờ hoàn thành | Medium |  | Flow 4 / REQ24 | `A06` |  |
| `TC22` | Case 22: Xem kết quả buổi | High |  | REQ25 | `A07` | `A07.04` |
| `TC23` | Case 23: Không sửa sau hoàn thành | High |  | EX13 / REQ25 | `A07` |  |
| `TC24` | Case 24: Icon đúng trạng thái | High |  | REQ30 | `A08` | `A08.02`, `A08.03`, `A08.04`, `A08.07` |
| `TC25` | Case 25: Dropdown Bước 1 chỉ chữ | Medium |  | REQ22 / REQ30 | `A08` |  |
| `TC26` | Case 26: Thông tin đúng nguồn | Medium |  | REQ26 | `A09` | `A09.01` |
| `TC27` | Case 27: Nội dung theo thứ tự | Medium |  | REQ26 | `A09` | `A09.02` |
| `TC28` | Case 28: Tải tài nguyên bài được phép | High |  | REQ27 | `A10` |  |
| `TC29` | Case 29: Bài bị khoá | High |  | EX14 / REQ27 | `A10` |  |
| `TC30` | Case 30: Khoá dịch theo bài mới mở | Medium |  | REQ27 | `A10` |  |
| `TC31` | Case 31: 7/10 nộp | High |  | REQ28 | `A11` | `A11.02` |
| `TC32` | Case 32: Nghỉ CP/KP trong mẫu | High |  | REQ28 | `A11` | `A11.03` |
| `TC33` | Case 33: Mở menu và chọn bài | High | Có | Flow 12 / REQ13 | `A12` |  |
| `TC34` | Case 34: Danh sách BTVN và Kiểm tra đúng nguồn | High |  | REQ13 | `A12` |  |
| `TC35` | Case 35: Tìm theo tên bài | Medium |  | REQ13 | `A12` |  |
| `TC36` | Case 36: Giáo viên không phải phụ trách chính chỉ xem | High |  | EX01 / Ràng buộc quyền | `A12` |  |
| `TC37` | Case 37: Lỗi tải dữ liệu | Medium |  | REQ13 | `A12` |  |
| `TC38` | Case 38: Đủ sáu thẻ phạm vi toàn lớp | High |  | REQ14 | `A13` |  |
| `TC39` | Case 39: Điểm trung bình tính cả điểm 0 | High |  | REQ14 | `A13` | `A13.03` |
| `TC40` | Case 40: K.Tra Đã Giao theo thao tác giao | Medium |  | REQ14 / REQ17 | `A13` | `A13.01`, `A13.02` |
| `TC41` | Case 41: Badge đếm bài chưa chấm | High |  | REQ15 | `A14` |  |
| `TC42` | Case 42: Đủ bốn nhãn trạng thái | High |  | REQ15 | `A14` |  |
| `TC43` | Case 43: Vòng đã nộp trên tổng | High |  | REQ15 | `A14` | `A14.04` |
| `TC44` | Case 44: Tỷ lệ chấm trên bài đã nộp | High |  | REQ15 | `A14` |  |
| `TC45` | Case 45: Ba trạng thái dòng | High | Có | Flow 12 / REQ16 | `A15` |  |
| `TC46` | Case 46: Thời gian vượt 24 giờ | Medium |  | REQ16 | `A15` |  |
| `TC47` | Case 47: BTVN bài chưa mở | Medium |  | REQ16 | `A15` |  |
| `TC47a` | Case 47a: Bấm dòng Chưa nộp | Medium |  | EX19 / REQ16 | `A15` | `A15.04`, `A15.06` |
| `TC47b` | Case 47b: Không có Thiết lập lại nộp bài | High |  | EX20 / REQ16 | `A15` |  |
| `TC48` | Case 48: Xem trước đề chưa giao | High |  | REQ17 | `A16` |  |
| `TC49` | Case 49: Giao bài thành công | High | Có | Flow 13 / REQ17 | `A16` |  |
| `TC50` | Case 50: Lớp chưa bắt đầu | High |  | EX10 / REQ17 | `A16` |  |
| `TC51` | Case 51: Huỷ giao bài | Medium |  | Flow 13 / REQ17 | `A16` |  |
| `TC52` | Case 52: Thu hồi xoá bài làm và điểm | High |  | Flow 14 / REQ18 | `A17` |  |
| `TC53` | Case 53: Huỷ thu hồi | Medium |  | Flow 14 / REQ18 | `A17` |  |
| `TC54` | Case 54: Giao lại sau thu hồi | Medium |  | REQ17 / REQ18 | `A17` |  |
| `TC55` | Case 55: Mở màn chấm từ card bài | High | Có | Flow 5 / REQ01 | `A18` | `A18.04` |
| `TC56` | Case 56: Mở màn chấm từ dòng học viên đã nộp | High |  | Flow 5 / REQ01 / REQ04 | `A18` |  |
| `TC57` | Case 57: Dòng học viên chưa nộp không điều hướng | Medium |  | REQ01 | `A18` |  |
| `TC58` | Case 58: Bài bổ sung chọn bài nguồn | High |  | Flow 5 / REQ01 | `A18` |  |
| `TC59` | Case 59: Giáo viên không phải phụ trách chính | High |  | EX01 / Ràng buộc quyền | `A18` |  |
| `TC60` | Case 60: Quay về sau khi chấm | Medium |  | Flow 6 / REQ12 | `A18` |  |
| `TC61` | Case 61: Hiển thị đủ câu và nhãn loại | High |  | REQ03 / REQ05 | `A19` |  |
| `TC62` | Case 62: Trạng thái Đã chấm và tỷ lệ điểm | High |  | REQ03 | `A19` |  |
| `TC63` | Case 63: Câu còn câu trả lời chưa chấm | High |  | REQ03 | `A19` |  |
| `TC64` | Case 64: Câu không cần chấm | Medium |  | REQ03 | `A19` |  |
| `TC65` | Case 65: Lọc theo Trạng Thái | Medium |  | REQ03 | `A19` |  |
| `TC66` | Case 66: Hiển thị nội dung câu | High |  | REQ03 | `A20` |  |
| `TC67` | Case 67: Lọc Chưa Chấm | High |  | REQ04 | `A20` | `A20.03` |
| `TC68` | Case 68: Ẩn tên học viên | Medium |  | REQ04 | `A20` | `A20.04` |
| `TC69` | Case 69: Lọc Học Viên | Medium |  | REQ04 | `A20` | `A20.05` |
| `TC70` | Case 70: Không có học viên nộp | Medium |  | EX08 | `A20` |  |
| `TC71` | Case 71: Chấm điểm câu giáo viên chấm | High | Có | Flow 6 / REQ06 | `A21` |  |
| `TC72` | Case 72: Sửa đè điểm app chấm | High |  | Flow 6 / REQ05 / REQ06 | `A21` |  |
| `TC73` | Case 73: Đáp án đúng theo loại câu | High |  | REQ05 | `A21` |  |
| `TC74` | Case 74: Học viên bỏ qua câu | Medium |  | REQ05 | `A21` |  |
| `TC75` | Case 75: Học viên chưa nộp chỉ xem | High |  | EX07 / REQ02 | `A21` | `A21.03` |
| `TC76` | Case 76: Lưu điểm lỗi | High |  | EX04 | `A21` |  |
| `TC77` | Case 77: Loại học viên theo khoảng trạng thái | High |  | REQ02 | `A21` |  |
| `TC78` | Case 78: Nhập nhận xét chữ | High | Có | Flow 8 / REQ08 | `A22` |  |
| `TC79` | Case 79: Ghi âm nhận xét | High |  | Flow 8 / REQ08 | `A22` | `A22.02` |
| `TC80` | Case 80: Tải ảnh nhận xét | Medium |  | Flow 8 / REQ08 | `A22` | `A22.03` |
| `TC81` | Case 81: Sao chép và dán nhận xét | Medium |  | Flow 8 / REQ08 | `A22` |  |
| `TC82` | Case 82: Dán dữ liệu không hợp lệ | Low |  | EX03 | `A22` | `A22.06` |
| `TC83` | Case 83: Tải file lỗi | Medium |  | EX05 | `A22` |  |
| `TC84` | Case 84: File vượt 25MB | Medium |  | EX09 / REQ08 | `A22` |  |
| `TC85` | Case 85: Áp dụng nhận xét chung | High |  | Flow 9 / REQ09 | `A23` | `A23.04` |
| `TC86` | Case 86: Huỷ áp dụng | Medium |  | Flow 9 / REQ09 | `A23` |  |
| `TC87` | Case 87: Áp dụng khi đang lọc | Medium |  | REQ09 | `A23` | `A23.01` |
| `TC88` | Case 88: Lỗi giữa chừng | Medium |  | EX04 / REQ09 | `A23` |  |
| `TC89` | Case 89: Chấm đủ câu con | High |  | Flow 10 / REQ10 | `A24` |  |
| `TC90` | Case 90: Chưa đủ câu con | High |  | REQ10 | `A24` |  |
| `TC91` | Case 91: Ghi nhận khi đã chấm hết | High | Có | Flow 11 / REQ11 | `A25` |  |
| `TC92` | Case 92: Chưa chấm hết | High |  | EX02 / REQ11 | `A25` | `A25.03` |
| `TC93` | Case 93: Giáo viên khác bấm lại | Medium |  | REQ11 | `A25` |  |
| `TC94` | Case 94: Học viên chỉ xem không chặn ghi nhận | Medium |  | REQ02 / REQ11 | `A25` | `A25.03` |
| `TC95` | Case 95: Lớp chưa có khóa tự học | Medium |  | Flow 15 / REQ29 | `A26` |  |
| `TC96` | Case 96: Xem bảng thời gian bài tự học | High | Có | Flow 15 / REQ29 | `A26` | `A26.02` |
| `TC97` | Case 97: Đủ học viên mọi trạng thái | High |  | REQ29 | `A26` | `A26.04` |
| `TC98` | Case 98: Vượt 24 giờ và zero thật | Medium |  | REQ29 | `A26` | `A26.07` |
| `TC99` | Case 99: Không thêm khóa/bài | High |  | EX17 / REQ29 | `A26` |  |
| `TC100` | Case 100: Lỗi tải bảng thời gian | Medium |  | EX18 / REQ29 | `A26` | `A26.02`, `A26.07` |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A27` | `A27.01` |
| `TTC02` | Toast Case 2: Thông báo | Medium |  | Ràng buộc Toast CRUD | `A27` |  |
| `TTC03` | Toast Case 3: Lỗi xử lý | High |  | Ràng buộc Toast CRUD | `A27` | `A27.02` |
| `TTC04` | Toast Case 4: Không lặp Toast khi chấm | Medium |  | Ràng buộc Toast CRUD | `A27` | `A27.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- `A12` Khác Figma GV-LOP-040100: Figma chưa có nút điều hướng chấm bài trên card; requirement bổ sung nút này cho `Giáo viên phụ trách chính`.
- `A14` Khác Figma GV-LOP-040200: Figma chưa có frame card `Chưa giao` đang chọn (xem trước đề) và nút `Giao bài`; hai thành phần này đặc tả theo ICS cũ.
- `A26` Khác Figma GV-LOP-050100: Figma chỉ có trạng thái chưa có khóa tự học; trạng thái có dữ liệu theo UI của requirement Admin, bỏ các nút thêm.
- Chưa khớp tự động (27): `A01.01`, `A01.03`, `A01.04`, `A01.05`, `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.06`, `A08.07`, `A10.02`, `A12.03`, `A12.04`, `A12.06`, `A12.07`, `A14.01`, `A14.05`, `A18.01`, `A18.03`, `A18.05`, `A26.02`, `A26.03`, `A26.04`, `A26.05`, `A26.06`, `A26.07`
- Chưa sync (103): `A02.01`, `A02.02`, `A02.03`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`, `A04.06`, `A04.07`, `A04.08`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A06.01`, `A06.02`, `A06.03`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A11.01`, `A11.02`, `A11.03`, `A11.04`, `A11.05`, `A13.01`, `A13.02`, `A13.03`, `A13.04`, `A13.05`, `A13.06`, `A13.07`, `A15.01`, `A15.02`, `A15.03`, `A15.04`, `A15.05`, `A15.06`, `A15.07`, `A16.01`, `A16.02`, `A16.03`, `A16.04`, `A17.01`, `A17.02`, `A19.01`, `A19.02`, `A19.03`, `A19.04`, `A19.05`, `A20.01`, `A20.02`, `A20.03`, `A20.04`, `A20.05`, `A20.06`, `A21.01`, `A21.02`, `A21.03`, `A21.04`, `A21.05`, `A21.06`, `A21.07`, `A21.08`, `A21.09`, `A21.10`, `A21.11`, `A21.12`, `A21.13`, `A22.01`, `A22.02`, `A22.03`, `A22.04`, `A22.05`, `A22.06`, `A23.01`, `A23.02`, `A23.03`, `A23.04`, `A24.01`, `A24.02`, `A24.03`, `A24.04`, `A25.01`, `A25.02`, `A25.03`, `A25.04`, `A27.01`, `A27.02`, `A27.03`, `A27.04`
- Frame Figma chưa có requirement (11): `GV-LOP-030120`, `GV-LOP-030121`, `GV-LOP-030401`, `GV-LOP-040110`, `GV-LOP-040201`, `GV-LOP-040204`, `GV-LOP-040205`, `GV-LOP-040210`, `GV-LOP-040211`, `GV-LOP-040221`, `GV-LOP-040320`
- Thiếu prototype link đi vào (7): `GV-LOP-030120`, `GV-LOP-030121`, `GV-LOP-030401`, `GV-LOP-040110`, `GV-LOP-040204`, `GV-LOP-040205`, `GV-LOP-050100`
- Phân loại cần design duyệt (8): `GV-LOP-030401`, `GV-LOP-040110`, `GV-LOP-040201`, `GV-LOP-040204`, `GV-LOP-040205`, `GV-LOP-040210`, `GV-LOP-040320`, `GV-LOP-050100`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (5): `REQ07`, `EX06`, `EX11`, `EX15`, `EX16`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
