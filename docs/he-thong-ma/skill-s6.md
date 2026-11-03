# Kỹ năng (S6) — Nghe / Đọc

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-050100` | Kỹ năng (S6) / Nghe | `/ky-nang-s6/nghe` | `CD-KH-050100-DK` | QC |
| `CD-KH-050180` | Kỹ năng (S6) / Nghe / Transcript bằng AI (inline) | `/ky-nang-s6/nghe/transcript-bang-ai-inline` | `CD-KH-050180-DK` | QC |
| `CD-KH-050200` | Kỹ năng (S6) / Đọc | `/ky-nang-s6/doc` | `CD-KH-050200-DK` | QC |
| `CD-KH-050300` | Kỹ năng (S6) / Viết | `/ky-nang-s6/viet` | `CD-KH-050300-DK` | QC |
| `CD-KH-050400` | Kỹ năng (S6) / Nói | `/ky-nang-s6/noi` | `CD-KH-050400-DK` | QC |

Requirement: `course_management/skill-s6/skill-s6.md` — Kỹ năng (S6) — Nghe / Đọc (tiền tố `CM-SS`).

## 2. Luồng

- `FLOW01` Mở Kỹ năng (S6) và xem danh sách — `REQ01`, `REQ02`, `REQ06`
- `FLOW02` Thêm bài từ thư viện — `REQ04`, `REQ05`
- `FLOW03` Tạo bài mới — `REQ04`, `REQ11`
- `FLOW04` Nhập nhanh — `REQ04`
- `FLOW05` Xem và sửa chi tiết — `REQ04`, `REQ07`, `REQ08`
- `FLOW06` Thêm vào cụm / Gỡ khỏi cụm — `REQ05`
- `FLOW07` Gỡ khỏi khoá — `REQ09`
- `FLOW08` Cụm sinh từ S2, đổi tên, liên kết bài học, chia cụm AI — `REQ05`, `REQ11`
- `FLOW09` Import / Export Excel — `REQ12`
- `FLOW10` Transcript AI (Nghe) / Tạo câu hỏi AI (Đọc) — `REQ11`
- `FLOW11` Soát lỗi AI — `REQ11`
- `FLOW12` Preview mobile — `REQ13`
- `FLOW13` Xem bài kỹ năng của bài học theo cụm liên kết — `REQ14`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-KH-050110` | Chi tiết bài nghe (drawer) | Popup | CD-KH-050100 | CD-KH-050100 | — | `/ky-nang-s6/nghe?popup=CD-KH-050110` | QC | cao |
| `CD-KH-050120` | Chọn nhiều · Thao tác hàng loạt | Trạng thái | CD-KH-050100 | CD-KH-050100 | — | `/ky-nang-s6/nghe?state=CD-KH-050120` | QC | trung bình |
| `CD-KH-050130` | Khoá chưa có bài nghe | Trạng thái | CD-KH-050100 | CD-KH-050100 | — | `/ky-nang-s6/nghe?state=CD-KH-050130` | QC | trung bình |
| `CD-KH-050140` | Preview mobile theo bài đang chọn | Trạng thái | CD-KH-050100 | CD-KH-050100 | — | `/ky-nang-s6/nghe?state=CD-KH-050140` | QC | trung bình |
| `CD-KH-050150` | Popup thêm bài từ thư viện | Popup | CD-KH-050100 | CD-KH-050100 | — | `/ky-nang-s6/nghe?popup=CD-KH-050150` | QC | cao |
| `CD-KH-050155` | Popup gỡ bài khỏi khoá | Popup | CD-KH-050100 | CD-KH-050100 | — | `/ky-nang-s6/nghe?popup=CD-KH-050155` | QC | cao |
| `CD-KH-050160` | Popup tạo bài nghe mới | Popup | CD-KH-050100 | CD-KH-050100 | — | `/ky-nang-s6/nghe?popup=CD-KH-050160` | QC | cao |
| `CD-KH-050190` | Soát lỗi bằng AI | Popup | CD-KH-050100 | CD-KH-050100 | — | `/ky-nang-s6/nghe?popup=CD-KH-050190` | QC | trung bình |
| `CD-KH-050210` | Chi tiết bài đọc (drawer) | Popup | CD-KH-050200 | CD-KH-050200 | — | `/ky-nang-s6/doc?popup=CD-KH-050210` | Figma | cao |
| `CD-KH-070301` | Chi tiết câu hỏi · Listening | Trạng thái | CD-KH-070300 | CD-KH-070300 | CD-KH-070300, CD-KH-070306, CD-KH-070307 | `/thu-vien/bai-tap?state=CD-KH-070301` | QC | trung bình |
| `CD-KH-070302` | Chi tiết câu hỏi · Reading | Trạng thái | CD-KH-070300 | CD-KH-070300 | CD-KH-070300, CD-KH-070304, CD-KH-070305, CD-KH-070309 | `/thu-vien/bai-tap?state=CD-KH-070302` | QC | trung bình |
| `CD-KH-070305` | Thêm · Sửa từ khoá | Trạng thái | CD-KH-070302 | CD-KH-070300 | CD-KH-070302, CD-KH-070306, CD-KH-070313 | `/thu-vien/bai-tap?state=CD-KH-070305` | Figma | trung bình |
| `CD-KH-070306` | Sửa · Xoá | Trạng thái | CD-KH-070301 | CD-KH-070300 | CD-KH-050110, CD-KH-050210, CD-KH-070301, CD-KH-070307, CD-KH-070308 | `/thu-vien/bai-tap?state=CD-KH-070306` | Figma | trung bình |
| `CD-KH-070307` | Xác nhận xoá đối tượng | Popup | CD-KH-070306 | CD-KH-070300 | CD-KH-070306 | `/thu-vien/bai-tap?popup=CD-KH-070307` | Figma | thấp |
| `CD-KH-070309` | Thêm · Sửa câu hỏi | Trạng thái | CD-KH-070302 | CD-KH-070300 | CD-KH-070302 | `/thu-vien/bai-tap?state=CD-KH-070309` | Figma | trung bình |
| `CD-KH-070313` | Xem trước phía học viên | Trạng thái | CD-KH-070302 | CD-KH-070300 | — | `/thu-vien/bai-tap?state=CD-KH-070313` | Figma | thấp |

## 4. Khu vực và item

### `A01` Khung màn hình và tab kỹ năng

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tab-ky-nang |  |  | — |  |  | Chưa sync | QC |
| `A01.02` | khoa-hoc |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.03` | toolbar-tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | hang-tim-kiem |  |  | — |  |  | Chưa sync | QC |
| `A01.05` | nhap-nhanh |  |  | — | see `A09` | `TC03` | Chưa sync | QC |
| `A01.06` | footer |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.07` | them-bai-nghe |  |  | — | see `A15` |  | Chưa có thiết kế | QC |

### `A02` Bảng bài nghe

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | checkbox |  |  | — |  |  | Chưa có thiết kế | QC |
| `A02.02` | stt-tay-nam-keo-tha |  |  | — |  |  | Chưa có thiết kế | QC |
| `A02.03` | bai-nghe |  |  | — |  |  | Chưa có thiết kế | QC |
| `A02.04` | am-thanh |  |  | — |  | `TC04`, `TC05` | Chưa có thiết kế | QC |
| `A02.05` | cum |  |  | — | opens `A08` |  | Chưa có thiết kế | QC |
| `A02.06` | nang-cao |  |  | — |  |  | Chưa có thiết kế | QC |
| `A02.07` | menu |  |  | — |  |  | Chưa có thiết kế | QC |
| `A02.08` | nhan-ai-duoi-ten |  |  | — |  |  | Chưa có thiết kế | QC |

### `A03` Bảng bài đọc

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | stt-checkbox-cum-menu |  |  | — |  |  | Chưa sync | QC |
| `A03.02` | bai-doc |  |  | — |  |  | Chưa sync | QC |
| `A03.03` | doan-van |  |  | — |  | `TC08` | Chưa sync | QC |
| `A03.04` | cot-khac |  |  | — |  |  | Chưa sync | QC |

### `A04` Panel Cụm và Số cụm

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | tat-ca-cum-badge-n-cum |  |  | — |  |  | Chưa có thiết kế | QC |
| `A04.02` | so-cum |  |  | — |  | `TC12` | Chưa có thiết kế | QC |
| `A04.03` | chia-cum-bang-ai |  |  | — |  | `TC12b` | Chưa có thiết kế | QC |
| `A04.04` | dong-cum |  |  | — |  |  | Chưa có thiết kế | QC |
| `A04.05` | popup-lien-ket-bai-hoc |  |  | — |  |  | Chưa có thiết kế | QC |
| `A04.06` | chua-phan-cum |  |  | — |  | `TC11` | Chưa có thiết kế | QC |
| `A04.07` | them-cum-moi |  |  | — |  |  | Chưa có thiết kế | QC |

### `A05` Tìm kiếm, lọc và sắp xếp

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | o-tim |  |  | — |  |  | Chưa có thiết kế | QC |
| `A05.02` | cum |  |  | — |  |  | Chưa có thiết kế | QC |
| `A05.03` | sap-xep |  |  | — |  |  | Chưa có thiết kế | QC |
| `A05.04` | trang-thai |  |  | — |  | `TC15`, `TC15a` | Chưa có thiết kế | QC |
| `A05.05` | nang-cao |  |  | — |  | `TC15a` | Chưa có thiết kế | QC |

### `A06` Drawer Chi tiết bài nghe

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | tieu-de |  |  | — |  |  | Chưa có thiết kế | QC |
| `A06.02` | ten-bai |  |  | — |  | `TC17` | Chưa có thiết kế | QC |
| `A06.03` | mo-ta |  |  | — |  | `TC16`, `TC20a` | Chưa có thiết kế | QC |
| `A06.04` | cum |  |  | — | opens `A08` |  | Chưa có thiết kế | QC |
| `A06.05` | nang-cao |  |  | — |  |  | Chưa có thiết kế | QC |
| `A06.06` | am-thanh |  |  | — |  |  | Chưa có thiết kế | QC |
| `A06.07` | kich-ban-n-luot |  |  | — |  |  | Chưa có thiết kế | QC |
| `A06.08` | cau-hoi |  |  | — |  | `TC20` | Chưa có thiết kế | QC |
| `A06.09` | footer |  |  | — |  |  | Chưa có thiết kế | QC |

### `A07` Drawer Chi tiết bài đọc

Frame: chưa có (tool đoán:CD-KH-050210) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | ten-bai-mo-ta-cum-nang-cao-cau-hoi-foote |  |  | — |  |  | Chưa có thiết kế | QC |
| `A07.02` | doan-van |  |  | — |  | `TC21` | Chưa có thiết kế | QC |
| `A07.03` | audio-doc-mau |  |  | — |  |  | Chưa có thiết kế | QC |
| `A07.04` | tu-vung-lien-quan |  |  | — |  | `TC22` | Chưa có thiết kế | QC |

### `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi cụm

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | mo-chi-tiet |  |  | — |  |  | Chưa có thiết kế | QC |
| `A08.02` | them-vao-cum-go-khoi-cum |  |  | — | opens `A08` | `TC24` | Chưa có thiết kế | QC |
| `A08.03` | transcript-ai-nghe-tao-cau-hoi-bang-ai-d |  |  | — |  |  | Chưa có thiết kế | QC |
| `A08.04` | go-khoi-khoa |  |  | — | opens `A13` |  | Chưa có thiết kế | QC |
| `A08.05` | popup-tim-cum |  |  | — |  |  | Chưa có thiết kế | QC |
| `A08.06` | popup-danh-sach-cum |  |  | — |  |  | Chưa có thiết kế | QC |
| `A08.07` | popup-huy-luu |  |  | — |  |  | Chưa có thiết kế | QC |

### `A09` Nhập nhanh

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | o-nhap |  |  | — |  | `TC26` | Chưa sync | QC |
| `A09.02` | ket-qua |  |  | — |  |  | Chưa sync | QC |

### `A10` Chọn nhiều và thao tác hàng loạt

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | da-chon-n-bai-nghe |  |  | — |  |  | Chưa sync | QC |
| `A10.02` | chon-tat-ca-n-bai-nghe |  |  | — |  |  | Chưa sync | QC |
| `A10.03` | transcript-ai-k-nghe-tao-cau-hoi-bang-ai |  |  | — |  |  | Chưa sync | QC |
| `A10.04` | soat-loi-ai |  |  | — |  |  | Chưa sync | QC |
| `A10.05` | them-vao-cum-go-khoi-cum |  |  | — | opens `A10` | `TC28` | Chưa sync | QC |
| `A10.06` | go-khoi-khoa-n |  |  | — | opens `A13` |  | Chưa sync | QC |
| `A10.07` | bo-chon |  |  | — |  |  | Chưa sync | QC |

### `A11` Popup Thêm bài từ thư viện

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A11.01` | tieu-de |  |  | — |  |  | Chưa có thiết kế | QC |
| `A11.02` | o-tim |  |  | — |  |  | Chưa có thiết kế | QC |
| `A11.03` | kho |  |  | — |  |  | Chưa có thiết kế | QC |
| `A11.04` | cap-do |  |  | — |  | `TC33` | Chưa có thiết kế | QC |
| `A11.05` | dang-cau |  |  | — |  |  | Chưa có thiết kế | QC |
| `A11.06` | bang |  |  | — |  | `TC31` | Chưa có thiết kế | QC |
| `A11.07` | them-vao-cum |  |  | — |  | `TC31` | Chưa có thiết kế | QC |
| `A11.08` | footer |  |  | — |  | `TC32` | Chưa có thiết kế | QC |

### `A12` Popup Tạo bài mới

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A12.01` | tieu-de |  |  | — |  |  | Chưa có thiết kế | QC |
| `A12.02` | ten-bai |  |  | — |  |  | Chưa có thiết kế | QC |
| `A12.03` | them-vao-cum |  |  | — |  |  | Chưa có thiết kế | QC |
| `A12.04` | mo-ta |  |  | — |  |  | Chưa có thiết kế | QC |
| `A12.05` | am-thanh-nghe |  |  | — |  |  | Chưa có thiết kế | QC |
| `A12.06` | doan-van-doc |  |  | — |  |  | Chưa có thiết kế | QC |
| `A12.07` | tao-transcript-bang-ai-sau-khi-tai-len-n |  |  | — |  |  | Chưa có thiết kế | QC |
| `A12.08` | footer |  |  | — |  |  | Chưa có thiết kế | QC |

### `A13` Popup Gỡ khỏi khoá

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A13.01` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A13.02` | noi-dung |  |  | — |  |  | Chưa sync | QC |
| `A13.03` | ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A13.04` | nut |  |  | — |  |  | Chưa sync | QC |

### `A14` Màn trống

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A14.01` | toolbar |  |  | — |  |  | Chưa sync | QC |
| `A14.02` | panel-cum |  |  | — |  |  | Chưa sync | QC |

### `A15` Import / Export Excel

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A15.01` | listening-lesson-bat-buoc |  |  | — |  |  | Chưa có thiết kế | QC |
| `A15.02` | listening |  |  | — |  | `TC40`, `TC42`, `TC42a`, `TC42d` | Chưa có thiết kế | QC |
| `A15.03` | listening-question |  |  | — |  | `TC40` | Chưa có thiết kế | QC |
| `A15.04` | reading-lesson-bat-buoc |  |  | — |  |  | Chưa có thiết kế | QC |
| `A15.05` | reading |  |  | — |  | `TC42c` | Chưa có thiết kế | QC |
| `A15.06` | reading-question |  |  | — |  |  | Chưa có thiết kế | QC |
| `A15.07` | reading-vocabulary |  |  | — |  |  | Chưa có thiết kế | QC |
| `A15.08` | import-sheet |  |  | — |  |  | Chưa có thiết kế | QC |
| `A15.09` | import-dong-bat-buoc |  |  | — |  |  | Chưa có thiết kế | QC |
| `A15.10` | import-loi-du-lieu |  |  | — |  |  | Chưa có thiết kế | QC |
| `A15.11` | import-thanh-cong |  |  | — |  |  | Chưa có thiết kế | QC |
| `A15.12` | export |  |  | — |  | `TC40`, `TC42b` | Chưa có thiết kế | QC |

### `A16` Transcript bằng AI

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A16.01` | thanh-ai |  |  | — |  |  | Chưa sync | QC |
| `A16.02` | bang |  |  | — |  |  | Chưa sync | QC |
| `A16.03` | duyet |  |  | — |  | `TC43`, `TC44`, `TC45`, `TC46` | Chưa sync | QC |

### `A17` Tạo câu hỏi bằng AI (tab Đọc)

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A17.01` | nut-toolbar-menu-dong-hang-loat |  |  | — |  |  | Chưa sync | QC |
| `A17.02` | thanh-ai |  |  | — |  |  | Chưa sync | QC |

### `A18` Soát lỗi bằng AI

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A18.01` | thanh-ai |  |  | — |  |  | Chưa sync | QC |
| `A18.02` | bang |  |  | — |  | `TC48`, `TC50` | Chưa sync | QC |
| `A18.03` | duyet |  |  | — |  | `TC49`, `TC50` | Chưa sync | QC |

### `A19` Preview mobile

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A19.01` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A19.02` | tab |  |  | — |  |  | Chưa sync | QC |
| `A19.03` | hien-thi |  |  | — |  |  | Chưa sync | QC |
| `A19.04` | mo-chi-tiet-bai-nghe |  |  | — |  |  | Chưa sync | QC |
| `A19.05` | bai-truoc-bai-sau |  |  | — |  |  | Chưa sync | QC |

### `A20` Cụm liên kết với Chi tiết bài học

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A20.01` | nguon-du-lieu |  |  | — |  |  | Chưa có thiết kế | QC |
| `A20.02` | bo-loc-loai |  |  | — |  |  | Chưa có thiết kế | QC |
| `A20.03` | tieu-de-khung |  |  | — |  |  | Chưa có thiết kế | QC |
| `A20.04` | dong-bo |  |  | — |  |  | Chưa có thiết kế | QC |

### `A21` Toast phản hồi CRUD

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A21.01` | thanh-cong |  |  | — |  | `TTC01` | Chưa sync | QC |
| `A21.02` | thong-tin |  |  | — |  |  | Chưa sync | QC |
| `A21.03` | canh-bao |  |  | — |  | `TTC02` | Chưa sync | QC |
| `A21.04` | loi |  |  | — |  |  | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Phạm vi | Mỗi khoá học có danh sách Kỹ năng (S6) riêng; dữ liệu theo trung tâm CD đang chọn ở header. |
| `REQ02` | Tab kỹ năng | 4 tab `Nghe`, `Đọc`, `Viết`, `Nói` ở mọi trung tâm, mỗi tab có panel Cụm riêng; bảng và field |
| `REQ03` | Cột và nội dung | Nghe: tên, mô tả, âm thanh (mp3 ≤ 50MB, thời lượng không giới hạn, `h:mm:ss` khi ≥ 1 giờ, chỉ phát một bài tại một thời điểm), cụm. Đọc: tên, mô tả, đoạn văn, cụm; audio đọc mẫu không bắt buộc. Không có cột bài học. |
| `REQ04` | Thư viện kỹ năng | Bài của S6 là tham chiếu bản ghi Thư viện kỹ năng; không có rule bắt trùng bản ghi trong khoá (thống nhất với S1 REQ04), popup thêm chỉ khoá bài đã có để tránh thêm nhầm. Thêm mới (popup tạo, nhập nhanh, import) tạo bản ghi `Nháp`; sửa tại S6 sửa bản ghi thư viện. Field: Tên *, Mô tả, Nâng cao (Có / Không, mặc định Không), Âm thanh + Kịch bản (lượt, người nói, phiên âm, dịch, mốc start / end) với Nghe; Đoạn văn + audio đọc mẫu + Từ vựng liên quan (từ S1 của khoá) với Đọc. **Thiếu thông tin** khi thiếu file / đoạn văn, mô tả, hoặc 0 câu hỏi đã duyệt. |
| `REQ05` | Cụm | Mỗi tab có bộ cụm riêng của khoá; một bài thuộc **tối đa 1 cụm** của tab. **Số cụm = tổng Số buổi của loại ở Tổng quan (S2)**, tự tạo `Chủ đề k`, không nhập / thêm / xoá cụm tại S6; CD đổi tên, Chia cụm bằng AI. **Mỗi cụm liên kết đúng 1 bài học, mỗi bài học tối đa 1 cụm mỗi loại kỹ năng**, BE kiểm tra trùng (EX13), liên kết tại ⋮ cụm; nhân bản khoá sao chép cụm và liên kết. Thêm vào / gỡ khỏi cụm qua popup thêm / tạo, nhập nhanh, import (cụm đang chọn), menu dòng, hàng loạt, nhãn cột Cụm, drawer (chọn 1 cụm). Xoá cụm không gỡ bài khỏi khoá. Số đếm panel Cụm cập nhật ngay. Thứ tự bài trong cụm kéo thả được. |
| `REQ06` | Bảng, tìm kiếm, lọc, sắp xếp | Bảng hiện đủ mọi field, cuộn ngang, ghim cột đầu / cuối. Tìm theo tên, mô tả, nội dung; lọc theo cụm (panel Cụm), Trạng thái `Tất cả / Nháp / Công khai / Vô hiệu`, Nâng cao `Tất cả / Có / Không`; sắp xếp `Thứ tự thêm / Tên A–Z / Mới cập nhật / Thứ tự trong cụm`; phân trang 50 dòng; đổi điều kiện về trang 1. |
| `REQ07` | Drawer chi tiết | Đủ field theo REQ04, cụm chỉ đọc + `Sửa cụm`, duyệt / hoàn tác giá trị AI, hỏi xác nhận khi đóng có thay đổi; lưu ảnh hưởng mọi khoá dùng bản ghi. |
| `REQ08` | Câu hỏi | Soạn và duyệt ở màn Chi tiết câu hỏi của Thư viện bài tập (Listening / Reading), đủ loại câu của BTVN & Kiểm tra; drawer chỉ tóm tắt số câu theo loại và dẫn link. |
| `REQ09` | Gỡ khỏi khoá | Xoá ở S6 là gỡ khỏi khoá và khỏi cụm (bài học liên kết cụm không còn bài), có xác nhận nêu cụm và bài học; bản ghi thư viện còn; kết quả học viên giữ. |
| `REQ10` | Trạng thái khoá học | Chỉ thao tác ghi khi khoá `Nháp`; khoá khác chỉ xem, tìm, lọc, Preview, Export. |
| `REQ11` | AI | Transcript AI (Nghe, từ file âm thanh, có phiên âm, dịch, mốc thời gian), Tạo câu hỏi AI (Đọc, từ đoạn văn), Soát lỗi AI (cả hai), Chia cụm bằng AI. Kết quả lưu nháp chờ duyệt, không ghi đè; `Duyệt tất cả` của Soát lỗi áp dụng sửa của AI, có Hoàn tác; `Dừng` được; bài đang xử lý bị khoá sửa / gỡ. |
| `REQ12` | Import / Export Excel | Chỉ `.xlsx`. Tab Nghe chỉ đọc 3 sheet `listening_lesson`, `listening`, `listening_question`; tab Đọc chỉ đọc 4 sheet `reading_lesson`, `reading`, `reading_question`, `reading_vocabulary` (bắt buộc cột `reading_lesson_id`); bỏ qua sheet khác. **Không có cột bài học**: bỏ qua `lesson_id`, bài vào cụm đang chọn. Export toàn bộ bài của tab cùng cấu trúc sheet; import tạo bản ghi `Nháp` thêm vào cuối, có dòng lỗi thì chặn cả file, không tự dò trùng. |
| `REQ13` | Preview mobile | Tái hiện màn học của app học viên cho bài đang chọn (Làm bài / Kịch bản hoặc Đoạn văn / Kết quả); toggle `Kịch bản ẩn khi làm bài` lưu theo bài; không ghi dữ liệu học. |
| `REQ14` | Bài kỹ năng trong bài học | Chi tiết bài học không chọn bài; tab Kỹ năng chỉ hiển thị bài của cụm đã liên kết, theo loại đang lọc (mặc định Nghe), tiêu đề là tên cụm; thay đổi ở cụm phản ánh ngay; không thêm / gỡ / sửa tại bài; badge tab = số loại kỹ năng có cụm liên kết. |
| `REQ15` | Phản hồi | Mỗi thao tác thay đổi dữ liệu đúng một Toast theo kết quả; không báo thành công trước khi lưu xong. |
| `EX01` | Ngoại lệ | Khoá học không `Nháp` → ẩn / mờ mọi thao tác ghi (gồm thao tác cụm); API thêm / sửa / gỡ / cụm / AI bị từ chối. |
| `EX02` | Ngoại lệ | Tên bài trống, Nhập nhanh rỗng, Tạo bài mới thiếu file (Nghe) hoặc đoạn văn (Đọc) → báo lỗi tại field, không tạo / lưu. |
| `EX03` | Ngoại lệ | File âm thanh không phải `.mp3` hoặc lớn hơn 50MB → từ chối, Toast `Cảnh Báo`, giữ file cũ. |
| `EX04` | Ngoại lệ | Gắn bản ghi thư viện đã có trong khoá → popup khoá lựa chọn, không gắn thêm từ popup; API vẫn nhận (như S1 REQ04: không bắt trùng bản ghi trong khoá). |
| `EX05` | Ngoại lệ | Import không phải `.xlsx`, thiếu sheet bài gốc, `reading_vocabulary` thiếu cột `reading_lesson_id`, dòng thiếu |
| `EX06` | Ngoại lệ | AI lỗi hoặc CD bấm `Dừng` → bài chưa xử lý giữ nguyên; bài đã xử lý giữ trạng thái chờ duyệt; AI lỗi thì Toast `Có Lỗi Xảy Ra`. |
| `EX07` | Ngoại lệ | Sửa / gỡ bài đang được AI xử lý → UI mờ; API từ chối. |
| `EX08` | Ngoại lệ | Role khác CD hoặc trung tâm khác trung tâm đang chọn truy cập S6 / gọi API → từ chối. |
| `EX09` | Ngoại lệ | Lưu drawer, thêm / gỡ cụm, liên kết bài học, gỡ bài, duyệt AI thất bại → giữ dữ liệu cũ, Toast `Có Lỗi Xảy Ra`. |
| `EX10` | Ngoại lệ | Thêm bài vào cụm của tab khác / khoá khác, hoặc liên kết cụm với bài học không thuộc khoá đang mở (qua API) → từ chối. |
| `EX11` | Ngoại lệ | Đổi `Số cụm`, thêm hoặc xoá cụm trực tiếp ở S6 (UI / API) → ô chỉ đọc, không có nút; API từ chối. Số cụm chỉ đổi qua Số buổi ở S2. |
| `EX13` | Ngoại lệ | Liên kết cụm với bài học đã có cụm cùng loại kỹ năng → BE từ chối (409), Toast `Cảnh Báo` nêu cụm đang chiếm; dữ liệu không đổi. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở S6 lần đầu | High | Có | Flow 1 / REQ01 / REQ02 | `A01` | `A01.02`, `A01.06` |
| `TC02` | Case 2: Đổi tab đổi bộ cụm | Medium |  | Flow 1 / REQ02 / REQ05 | `A01` |  |
| `TC03` | Case 3: Khoá không Nháp chỉ đọc | High |  | EX01 / REQ10 | `A01` | `A01.05` |
| `TC3a` | Case 3a: Role khác / trung tâm khác truy cập S6 | High |  | EX08 | `A01` |  |
| `TC04` | Case 4: Phát âm thanh trong bảng | High | Có | Flow 1 / REQ03 | `A02` | `A02.04` |
| `TC05` | Case 5: Bài chưa có file | High |  | REQ03 / REQ04 | `A02` | `A02.04` |
| `TC06` | Case 6: Thời lượng trên 1 giờ | Low |  | REQ03 | `A02` |  |
| `TC07` | Case 7: Nhãn cụm của bài | Medium |  | REQ05 / REQ06 | `A02` |  |
| `TC08` | Case 8: Hiển thị bảng Đọc | High | Có | Flow 1 / REQ03 | `A03` | `A03.03` |
| `TC09` | Case 9: Tìm theo nội dung đoạn văn | Medium |  | REQ06 | `A03` |  |
| `TC10` | Case 10: Lọc theo cụm | High | Có | Flow 1 / REQ06 | `A04` |  |
| `TC11` | Case 11: Lọc Chưa phân cụm | High |  | REQ06 | `A04` | `A04.06` |
| `TC12` | Case 12: Cụm sinh từ S2 | High | Có | Flow 8 / REQ05 | `A04` | `A04.02` |
| `TC12a` | Case 12a: Liên kết cụm với bài học | High | Có | Flow 8 / REQ05 | `A04` |  |
| `TC12c` | Case 12c: Bài đã có cụm cùng loại | High |  | EX13 / REQ05 | `A04` |  |
| `TC12b` | Case 12b: Chia cụm bằng AI | Medium |  | Flow 8 / REQ05 / REQ11 | `A04` | `A04.03` |
| `TC13` | Case 13: Kết hợp tìm và lọc cụm | High |  | Flow 1 / REQ06 | `A05` |  |
| `TC13a` | Case 13a: Kéo thả thứ tự trong cụm | Medium |  | REQ06 | `A05` |  |
| `TC14` | Case 14: Sắp xếp Tên A–Z | Medium |  | REQ06 | `A05` |  |
| `TC15` | Case 15: Lọc trạng thái Vô hiệu | Medium |  | REQ06 / REQ09 | `A05` | `A05.04` |
| `TC15a` | Case 15a: Lọc Nâng cao và cuộn ngang | Medium |  | REQ06 | `A05` | `A05.04`, `A05.05` |
| `TC16` | Case 16: Sửa và lưu bài nghe | High | Có | Flow 5 / REQ04 / REQ07 | `A06` | `A06.03` |
| `TC17` | Case 17: Tên trống không lưu | High |  | EX02 / REQ04 | `A06` | `A06.02` |
| `TC18` | Case 18: Tải file sai loại / quá dung lượng | High |  | EX03 / REQ03 | `A06` |  |
| `TC19` | Case 19: Đóng khi có thay đổi | Medium |  | REQ07 | `A06` |  |
| `TC20` | Case 20: Mở chi tiết câu hỏi | Medium |  | Flow 5 / REQ08 | `A06` | `A06.08` |
| `TC20a` | Case 20a: Lưu drawer thất bại | Medium |  | EX09 | `A06` | `A06.03` |
| `TC21` | Case 21: Sửa đoạn văn và lưu | High | Có | Flow 5 / REQ04 | `A07` | `A07.02` |
| `TC22` | Case 22: Gắn từ vựng liên quan | Medium |  | REQ04 | `A07` | `A07.04` |
| `TC23` | Case 23: Audio đọc mẫu không bắt buộc | Low |  | REQ04 | `A07` |  |
| `TC24` | Case 24: Thêm bài vào cụm từ menu dòng | High | Có | Flow 6 / REQ05 | `A08` | `A08.02` |
| `TC24a` | Case 24a: Chuyển cụm bài đang hiển thị ở bài học | High |  | Flow 6 / REQ05 | `A08` |  |
| `TC25` | Case 25: Gỡ khỏi cụm cuối cùng | Medium |  | Flow 6 / REQ05 | `A08` |  |
| `TC25a` | Case 25a: Gọi API thêm bài vào cụm của tab / khoá khác | Medium |  | EX10 | `A08` |  |
| `TC26` | Case 26: Nhập nhanh tạo bài | High | Có | Flow 4 / REQ04 | `A09` | `A09.01` |
| `TC26a` | Case 26a: Nhập nhanh ở Tất cả cụm | Medium |  | Flow 4 / REQ04 | `A09` |  |
| `TC27` | Case 27: Nhập rỗng | Low |  | EX02 | `A09` |  |
| `TC28` | Case 28: Thêm vào cụm hàng loạt | High | Có | Flow 6 / REQ05 | `A10` | `A10.05` |
| `TC29` | Case 29: Chọn tất cả qua nhiều trang | Medium |  | REQ05 | `A10` |  |
| `TC30` | Case 30: Transcript AI (k) đếm đúng | Medium |  | REQ11 | `A10` |  |
| `TC31` | Case 31: Thêm 3 bài từ thư viện | High | Có | Flow 2 / REQ04 / REQ05 | `A11` | `A11.06`, `A11.07` |
| `TC32` | Case 32: Bài đã có bị khoá | High |  | EX04 / REQ04 | `A11` | `A11.08` |
| `TC33` | Case 33: Lọc Cấp độ mặc định | Medium |  | REQ04 | `A11` | `A11.04` |
| `TC34` | Case 34: Tạo bài nghe mới có AI | High | Có | Flow 3 / REQ04 / REQ11 | `A12` |  |
| `TC35` | Case 35: Thiếu file không tạo | High |  | EX02 / REQ04 | `A12` |  |
| `TC36` | Case 36: Tạo bài đọc mới | High | Có | Flow 3 / REQ04 | `A12` |  |
| `TC37` | Case 37: Gỡ 1 bài | High | Có | Flow 7 / REQ09 | `A13` |  |
| `TC38` | Case 38: Gỡ hàng loạt | Medium |  | Flow 7 / REQ09 | `A13` |  |
| `TC39` | Case 39: Khoá mới chưa có bài | Medium |  | Flow 1 / REQ02 | `A14` |  |
| `TC40` | Case 40: Export đúng sheet | High | Có | Flow 9 / REQ12 | `A15` | `A15.02`, `A15.03`, `A15.12` |
| `TC41` | Case 41: Import tab Nghe chỉ đọc 3 sheet | High | Có | Flow 9 / REQ12 | `A15` |  |
| `TC41a` | Case 41a: Import tab Đọc đọc 4 sheet | High | Có | Flow 9 / REQ12 | `A15` |  |
| `TC42` | Case 42: Import có dòng lỗi | High |  | EX05 / REQ12 | `A15` | `A15.02` |
| `TC42a` | Case 42a: Import file sai định dạng / thiếu sheet | Medium |  | EX05 / REQ12 | `A15` | `A15.02` |
| `TC42c` | Case 42c: reading_vocabulary thiếu cột nối | High |  | EX05 / REQ12 | `A15` | `A15.05` |
| `TC42d` | Case 42d: Dòng phụ trỏ tới bài không có | Medium |  | EX05 / REQ12 | `A15` | `A15.02` |
| `TC42b` | Case 42b: Khoá không Nháp vẫn Export Excel | Medium |  | Ràng buộc quyền | `A15` | `A15.12` |
| `TC43` | Case 43: Tạo transcript 2 bài | High | Có | Flow 10 / REQ11 | `A16` | `A16.03` |
| `TC44` | Case 44: Duyệt tất cả | High |  | Flow 10 / REQ11 | `A16` | `A16.03` |
| `TC45` | Case 45: Hoàn tác một lượt | Medium |  | REQ11 | `A16` | `A16.03` |
| `TC46` | Case 46: Dừng giữa chừng | Medium |  | EX06 / REQ11 | `A16` | `A16.03` |
| `TC46a` | Case 46a: Không sửa / gỡ bài đang được AI xử lý | High |  | EX07 | `A16` |  |
| `TC47` | Case 47: Tạo 5 câu cho 1 bài đọc | High | Có | Flow 10 / REQ11 | `A17` |  |
| `TC48` | Case 48: Soát lỗi toàn tab | High | Có | Flow 11 / REQ11 | `A18` | `A18.02` |
| `TC49` | Case 49: Duyệt tất cả áp dụng sửa | High |  | Flow 11 / REQ11 | `A18` | `A18.03` |
| `TC50` | Case 50: Không lỗi | Low |  | REQ11 | `A18` | `A18.02`, `A18.03` |
| `TC51` | Case 51: Preview bài nghe | High | Có | Flow 12 / REQ13 | `A19` |  |
| `TC52` | Case 52: Toggle kịch bản lưu theo bài | Medium |  | REQ13 | `A19` |  |
| `TC53` | Case 53: Bài 0 câu hỏi | Low |  | REQ13 | `A19` |  |
| `TC54` | Case 54: Bài học hiện bài của cụm liên kết | High | Có | Flow 13 / REQ14 | `A20` |  |
| `TC55` | Case 55: Thêm bài vào cụm, bài học cập nhật | High | Có | Flow 13 / REQ14 | `A20` |  |
| `TC55a` | Case 55a: Loại chưa liên kết | Medium |  | REQ14 | `A20` |  |
| `TC55b` | Case 55b: Gỡ bài khỏi khoá đang ở cụm liên kết | High |  | REQ09 / REQ14 | `A20` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | REQ15 | `A21` | `A21.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | REQ15 | `A21` | `A21.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | REQ15 | `A21` |  |
| `TTC04` | Toast Case 4: Thông tin | Medium |  | REQ15 | `A21` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (42): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A09.01`, `A09.02`, `A10.01`, `A10.02`, `A10.03`, `A10.04`, `A10.05`, `A10.06`, `A10.07`, `A13.01`, `A13.02`, `A13.03`, `A13.04`, `A14.01`, `A14.02`, `A16.01`, `A16.02`, `A16.03`, `A17.01`, `A17.02`, `A18.01`, `A18.02`, `A18.03`, `A19.01`, `A19.02`, `A19.03`, `A19.04`, `A19.05`, `A21.01`, `A21.02`, `A21.03`, `A21.04`
- Thiếu prototype link đi vào (10): `CD-KH-050110`, `CD-KH-050120`, `CD-KH-050130`, `CD-KH-050140`, `CD-KH-050150`, `CD-KH-050155`, `CD-KH-050160`, `CD-KH-050190`, `CD-KH-050210`, `CD-KH-070313`
- Phân loại cần design duyệt (11): `CD-KH-050120`, `CD-KH-050130`, `CD-KH-050140`, `CD-KH-050190`, `CD-KH-070301`, `CD-KH-070302`, `CD-KH-070305`, `CD-KH-070306`, `CD-KH-070307`, `CD-KH-070309`, `CD-KH-070313`
- Frame Figma chưa có requirement (6): `CD-KH-050210`, `CD-KH-070305`, `CD-KH-070306`, `CD-KH-070307`, `CD-KH-070309`, `CD-KH-070313`
- Testcase không trỏ REQ (1): `TC42b`
- REQ/EX chưa có testcase (1): `EX11`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
