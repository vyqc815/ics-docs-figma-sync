# Bài tập về nhà và Kiểm tra (CD-KH-06xx)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-030340` | Học kỳ / Kiểm tra / Danh sách bài tập | `/hoc-ky/kiem-tra/danh-sach-bai-tap` | `CD-KH-030340-DK` | QC |
| `CD-KH-060100` | Bài tập về nhà / BTVN | `/bai-tap-ve-nha/btvn` | `CD-KH-060100-DK` | QC |
| `CD-KH-060200` | Bài tập về nhà / Kiểm tra | `/bai-tap-ve-nha/kiem-tra` | `CD-KH-060200-DK` | QC |

Requirement: `course_management/homework-test/homework-test.md` — [CD] Bài tập về nhà và Kiểm tra (tiền tố `CM-HW`).

## 2. Luồng

- `FLOW01` Chọn kỳ, bài và xem bộ câu hỏi — `REQ01`, `REQ02`, `REQ03`
- `FLOW02` Thêm câu hỏi soạn tay — `REQ04`, `REQ05`
- `FLOW03` Sửa câu hỏi — `REQ05`
- `FLOW04` Xoá câu hỏi — `REQ03`
- `FLOW05` Export và Import Excel — `REQ06`
- `FLOW06` Tạo câu hỏi bằng AI — `REQ08`
- `FLOW07` Soát lỗi bằng AI — `REQ07`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-KH-030341` | Popup Generate · Nhập prompt | Popup | CD-KH-030340 | CD-KH-030340 | CD-KH-030340, CD-KH-030342, CD-KH-030350 | `/hoc-ky/kiem-tra/danh-sach-bai-tap?popup=CD-KH-030341` | QC | cao |
| `CD-KH-030342` | Popup Generate · Chọn kiến thức & kỹ năng | Popup | CD-KH-030341 | CD-KH-030340 | CD-KH-030341 | `/hoc-ky/kiem-tra/danh-sach-bai-tap?popup=CD-KH-030342` | QC | cao |
| `CD-KH-030343` | Danh sách bài tập · Sau Generate (30 dòng) | Trạng thái | CD-KH-030344 | CD-KH-030340 | CD-KH-030344, CD-KH-030345 | `/hoc-ky/kiem-tra/danh-sach-bai-tap?state=CD-KH-030343` | QC | trung bình |
| `CD-KH-030344` | Generate · Đang tạo bảng | Trạng thái | CD-KH-030341 | CD-KH-030340 | CD-KH-030341, CD-KH-030342, CD-KH-030346, CD-KH-030350 | `/hoc-ky/kiem-tra/danh-sach-bai-tap?state=CD-KH-030344` | QC | cao |
| `CD-KH-030345` | Generate · Xác nhận bỏ bảng | Trạng thái | CD-KH-030343 | CD-KH-030340 | CD-KH-030343 | `/hoc-ky/kiem-tra/danh-sach-bai-tap?state=CD-KH-030345` | QC | cao |
| `CD-KH-030346` | Generate · Lỗi | Trạng thái | CD-KH-030340 | CD-KH-030340 | — | `/hoc-ky/kiem-tra/danh-sach-bai-tap?state=CD-KH-030346` | QC | cao |
| `CD-KH-030347` | Danh sách bài tập · Sau khi tạo | Trạng thái | CD-KH-030343 | CD-KH-030340 | CD-KH-030343 | `/hoc-ky/kiem-tra/danh-sach-bai-tap?state=CD-KH-030347` | QC | trung bình |
| `CD-KH-030348` | Popup chọn loại câu | Popup | CD-KH-030340 | CD-KH-030340 | CD-KH-030340 | `/hoc-ky/kiem-tra/danh-sach-bai-tap?popup=CD-KH-030348` | Figma | cao |
| `CD-KH-030349` | Popup soạn câu hỏi · Trắc nghiệm | Popup | CD-KH-030348 | CD-KH-030340 | CD-KH-030348 | `/hoc-ky/kiem-tra/danh-sach-bai-tap?popup=CD-KH-030349` | QC | cao |
| `CD-KH-060110` | Popup chọn loại câu | Popup | CD-KH-060100 | CD-KH-060100 | CD-KH-060100, CD-KH-060200 | `/bai-tap-ve-nha/btvn?popup=CD-KH-060110` | QC | cao |
| `CD-KH-060120` | Popup soạn câu hỏi · Trắc nghiệm | Popup | CD-KH-060110 | CD-KH-060100 | CD-KH-060110 | `/bai-tap-ve-nha/btvn?popup=CD-KH-060120` | QC | cao |
| `CD-KH-060121` | Popup soạn câu hỏi · Sắp xếp | Popup | CD-KH-060110 | CD-KH-060100 | — | `/bai-tap-ve-nha/btvn?popup=CD-KH-060121` | Figma | cao |
| `CD-KH-060122` | Popup soạn câu hỏi · Nối từ | Popup | CD-KH-060110 | CD-KH-060100 | — | `/bai-tap-ve-nha/btvn?popup=CD-KH-060122` | Figma | cao |
| `CD-KH-060123` | Popup soạn câu hỏi · Nói | Popup | CD-KH-060110 | CD-KH-060100 | — | `/bai-tap-ve-nha/btvn?popup=CD-KH-060123` | Figma | cao |
| `CD-KH-060124` | Popup soạn câu hỏi · Viết | Popup | CD-KH-060110 | CD-KH-060100 | — | `/bai-tap-ve-nha/btvn?popup=CD-KH-060124` | Figma | cao |
| `CD-KH-060125` | Popup soạn câu hỏi · Câu hỏi con | Popup | CD-KH-060110 | CD-KH-060100 | — | `/bai-tap-ve-nha/btvn?popup=CD-KH-060125` | Figma | cao |
| `CD-KH-060130` | BTVN · Bài chưa có câu hỏi | Trạng thái | CD-KH-060100 | CD-KH-060100 | — | `/bai-tap-ve-nha/btvn?state=CD-KH-060130` | QC | trung bình |
| `CD-KH-060140` | Kết quả Import | Popup | CD-KH-060130 | CD-KH-060100 | — | `/bai-tap-ve-nha/btvn?popup=CD-KH-060140` | Figma | cao |
| `CD-KH-060141` | Kết quả Import | Popup | CD-KH-060100 | CD-KH-060100 | CD-KH-060100, CD-KH-060200 | `/bai-tap-ve-nha/btvn?popup=CD-KH-060141` | Figma | cao |
| `CD-KH-060150` | Soát lỗi bằng AI | Popup | CD-KH-060100 | CD-KH-060100 | CD-KH-060100, CD-KH-060141, CD-KH-060200 | `/bai-tap-ve-nha/btvn?popup=CD-KH-060150` | Figma | cao |
| `CD-KH-060160` | Preview mobile (trên trang Kiểm tra) | Trạng thái | CD-KH-060100 | CD-KH-060100 | CD-KH-060100, CD-KH-060200 | `/bai-tap-ve-nha/btvn?state=CD-KH-060160` | Figma | trung bình |

## 4. Khu vực và item

### `A01` Khung màn, cây kỳ và bài

Frame: `CD-KH-060100`, `CD-KH-060200` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tab-btvn | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `I5491:347473;2177:28936` Nhiệm vụ con | có |  | `TC01` | Khớp | QC |
| `A01.02` | tab-kiem-tra | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I5491:347475;2177:28928` Chi tiết NV | có |  | `TC03` | Khớp | QC |
| `A01.03` | o-tim-bai-hoc-tim-bai-kiem-tra | `Atom/Input` State=Search, Kiểu=S | `5491:346599` Atom/Input | có |  |  | Khớp | QC |
| `A01.04` | chon-bai |  |  | — |  | `TC01` | Chưa khớp tự động | QC |
| `A01.05` | ky-cong-khai-vo-hieu |  |  | — | governed-by `REQ09` |  | Chưa khớp tự động | QC |
| `A01.06` | tab-btvn | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `5491:347473` Tab · BTVN | có |  |  | Chỉ có trên Figma | Figma |
| `A01.07` | tab-kiem-tra | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5491:347475` Tab · Kiểm tra | có |  |  | Chỉ có trên Figma | Figma |
| `A01.08` | tab-btvn | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5491:348636` Tab · BTVN | có |  |  | Chỉ có trên Figma | Figma |
| `A01.09` | tab-kiem-tra | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `5491:348638` Tab · Kiểm tra | có |  |  | Chỉ có trên Figma | Figma |

### `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan

Frame: `CD-KH-030340`, `CD-KH-060100`, `CD-KH-060200` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tieu-de |  | `5491:357669` Tiêu đề | — |  | `TC07` | Khớp | QC |
| `A02.02` | import-excel-export-excel | `Atom/Button` Type=Outlined, Size=Small | `5491:357673` Atom/Button; `5491:357675` Atom/Button | — | see `A07` |  | Khớp | QC |
| `A02.03` | preview-mobile | `Atom/Button` Type=Outlined, Size=Small | `5491:346417` Atom/Button | có |  |  | Requirement ghi thiếu, Figma đã có | QC |
| `A02.04` | them-cau-hoi | `Atom/Button` Type=Outlined, Size=Small | `5614:35293` Nút Thêm câu hỏi | — | opens `A05` |  | Khớp | QC |
| `A02.05` | tao-cau-hoi-bang-ai | `Atom/Button` Type=Primary, Size=Small | `5491:357677` Nút Generate | — | opens `A09` |  | Khớp | QC |
| `A02.06` | soat-loi-bang-ai | `Atom/Button` Type=Secondary, Size=Small | `5491:346424` Atom/Button | có | see `A08` |  | Khớp một phần | QC |
| `A02.07` | the-tong-so-cau |  | `5614:35314` Tổng số câu | — |  |  | Khớp | QC |
| `A02.08` | the-thoi-gian-lam-bai |  | `5614:35324` Thời gian làm bài | — |  | `TC08` | Khớp một phần | QC |
| `A02.09` | the-co-cau-theo-dang-cau |  | `5614:35329` Cơ cấu theo dạng câu | — |  |  | Khớp | QC |

### `A03` Bảng câu hỏi

Frame: `CD-KH-030340`, `CD-KH-060100`, `CD-KH-060200` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | cot |  | `5491:357722` STT; `5491:357670` Bộ câu hỏi | — |  |  | Khớp | QC |
| `A03.02` | dap-an-dung |  | `5609:33851` Đáp án đúng | — |  |  | Khớp | QC |
| `A03.03` | cau-hoi-con | `Atom/Tag` Size=Small | `5491:357885` Atom/Tag; `5609:33883` 7.1 | — |  | `TC09` | Khớp | QC |
| `A03.04` | tag-ai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.05` | o-tim-cau-hoi | `Atom/Input` State=Search, Kiểu=S | `5491:346420` Atom/Input | có |  |  | Khớp một phần | QC |
| `A03.06` | loc-loai-cau | `DD/Molecule/Trigger` Size=S, State=Default | `5491:357687` DD/Molecule/Trigger | — |  | `TC10` | Khớp | QC |
| `A03.07` | loc-kien-thuc-ky-nang | `DD/Molecule/Trigger` Size=S, State=Default | `5491:357699` DD/Molecule/Trigger | — |  |  | Khớp | QC |
| `A03.08` | checkbox | `Checkbox` Size=16 | `5491:357720` Checkbox | — |  |  | Khớp | QC |
| `A03.09` | menu |  |  | — | opens `A06` |  | Chưa khớp tự động | QC |
| `A03.10` | nhap-nhanh-cuoi-bang | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `5491:346577` Molecule/Add New Bar | có | opens `A05` |  | Khớp một phần | QC |
| `A03.11` | phan-trang |  | `5491:346579` Footer · Phân trang | có |  |  | Khớp một phần | QC |

### `A04` Bài chưa có câu hỏi

Frame: `CD-KH-060130` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | tieu-de |  | `5491:348903` Tiêu đề | có |  |  | Khớp | QC |
| `A04.02` | them-cau-hoi | `Atom/Button` Type=Outlined Icon, Size=Small | `5491:348908` Nút Thêm từ (dropdown) | có | opens `A05` |  | Khớp | QC |
| `A04.03` | tao-cau-hoi-bang-ai | `Atom/Button` Type=Secondary, Size=Medium | `5491:349773` Atom/Button | có | opens `A09` |  | Khớp | QC |
| `A04.04` | import-excel | `Atom/Button` Type=Outlined, Size=Small | `5672:62094` Nút Import Excel | có |  |  | Khớp | QC |

### `A05` Popup Chọn loại câu

Frame: `CD-KH-060110`, `CD-KH-030348` (tool đoán:CD-KH-030348) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | trac-nghiem |  | `5491:348733` Trắc nghiệm | — |  |  | Khớp | QC |
| `A05.02` | sap-xep |  | `5491:348746` Sắp xếp | — |  | `TC15` | Khớp | QC |
| `A05.03` | noi-tu |  | `5491:348754` Nối từ | — |  |  | Khớp | QC |
| `A05.04` | noi |  | `5491:348763` Nói | — |  |  | Khớp | QC |
| `A05.05` | doc |  | `5491:348772` Đọc | — |  |  | Khớp | QC |
| `A05.06` | viet |  | `5491:348780` Viết | — |  |  | Khớp | QC |
| `A05.07` | hinh-anh |  | `5491:348788` Hình ảnh | — |  |  | Khớp | QC |
| `A05.08` | cau-hoi-con |  | `5491:348798` Câu hỏi con | — |  |  | Khớp | QC |

### `A06` Popup Soạn câu hỏi

Frame: `CD-KH-060120`, `CD-KH-060121`, `CD-KH-060122`, `CD-KH-060123`, `CD-KH-060124`, `CD-KH-060125` (tool đoán:CD-KH-060121, CD-KH-060122, CD-KH-060123, CD-KH-060124, CD-KH-060125) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | tieu-de | `Popup/Header`  | `I5491:348806;2514:153353` Tiêu đề | — |  |  | Khớp | QC |
| `A06.02` | so-cau | `Atom/Label`  | `5672:62120` Atom/Label | — |  | `TC18`, `TC19` | Khớp | QC |
| `A06.03` | loai-cau | `Atom/Label`  | `5491:348822` Atom/Label | — |  |  | Khớp | QC |
| `A06.04` | kien-thuc-ky-nang | `Atom/Label`  | `5672:62126` Atom/Label | — |  | `TC18` | Khớp | QC |
| `A06.05` | huong-dan | `Atom/Label`  | `5491:348840` Atom/Label | — |  | `TC20` | Khớp | QC |
| `A06.06` | noi-dung-cau-hoi | `Atom/Label`  | `5491:348847` Atom/Label | — |  |  | Khớp | QC |
| `A06.07` | hinh-anh-am-thanh | `Atom/Label`  | `5491:348851` Atom/Label | — |  |  | Khớp | QC |
| `A06.08` | dap-an |  | `5491:348855` Field · Đáp án | — |  |  | Khớp | QC |
| `A06.09` | giai-thich-dap-an | `Atom/Label`  | `5491:348884` Atom/Label | — |  |  | Khớp | QC |
| `A06.10` | huy-luu-cau-hoi | `Atom/Button` Type=Primary, Size=Medium; `Atom/Button` Type=Secondary, Size=Medium | `I5491:348809;2514:153361` Atom/Button; `I5491:348809;2514:153363` Atom/Button | — |  |  | Khớp | QC |
| `A06.11` | trac-nghiem | `Atom/Input` State=Disabled, Kiểu=S | `5491:348825` Atom/Input | — |  | `TC17` | Khớp một phần | QC |
| `A06.12` | sap-xep | `Atom/Input` State=Disabled, Kiểu=S | `5672:74629` Atom/Input | — |  |  | Requirement ghi thiếu, Figma đã có | QC |
| `A06.13` | noi-tu | `Atom/Input` State=Disabled, Kiểu=S | `5672:74761` Atom/Input | — |  |  | Requirement ghi thiếu, Figma đã có | QC |
| `A06.14` | noi | `Atom/Label`  | `I5491:348847;2015:30530` Label | — |  |  | Requirement ghi thiếu, Figma đã có | QC |
| `A06.15` | doc-viet-hinh-anh | `Atom/Dropzone` Kiểu=Mặc định; `Atom/Label`  | `I5491:348852;1061:1317` Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX (Tối đa 20MB); `I5491:348851;2015:30530` Label | — |  |  | Requirement ghi thiếu, Figma đã có | QC |
| `A06.16` | cau-hoi-con | `Atom/Input` State=Disabled, Kiểu=S | `5672:75144` Atom/Input | — |  |  | Requirement ghi thiếu, Figma đã có | QC |

### `A07` Import / Export Excel

Frame: `CD-KH-030340` (tool đoán:CD-KH-060140, CD-KH-060141) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | cot-file |  | `5491:357722` STT | — |  |  | Khớp | QC |
| `A07.02` | export | `Atom/Button` Type=Outlined, Size=Small | `I5491:357675;1430:10764` Button | — |  | `TC22`, `TC26` | Khớp | QC |
| `A07.03` | import-dong-bat-buoc |  | `5491:357722` STT | — |  |  | Khớp | QC |
| `A07.04` | import-loi-du-lieu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.05` | import-cau-trung |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.06` | import-thanh-cong |  | `5491:357722` STT | — |  |  | Khớp | QC |

### `A08` Soát lỗi bằng AI

Frame: `CD-KH-060150` (tool đoán:CD-KH-060150) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | pham-vi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A08.02` | van-de-phat-hien |  |  | — |  |  | Chưa khớp tự động | QC |
| `A08.03` | ket-qua |  |  | — |  | `TC27`, `TC28` | Chưa khớp tự động | QC |
| `A08.04` | xu-ly |  |  | — |  |  | Chưa khớp tự động | QC |

### `A09` Generate bài tập bằng AI — Popup nhập yêu cầu

Frame: `CD-KH-030341`, `CD-KH-030342` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | tab-nhap-prompt | `Atom/Tab` State=Active, Kiểu=Khung | `5491:358445` Chế độ · Nhập prompt | — |  |  | Khớp | QC |
| `A09.02` | tab-chon-kien-thuc-ky-nang | `Atom/Tab` State=Inactive, Kiểu=Khung | `5491:358447` Chế độ · Chọn kiến thức & kỹ năng | — |  |  | Khớp | QC |
| `A09.03` | so-cau | `Atom/Label`  | `5491:358458` Atom/Label | — |  | `TC29`, `TC31` | Khớp | QC |
| `A09.04` | dang-cau-hoi | `Atom/Label`  | `5491:358465` Atom/Label | — |  |  | Khớp | QC |
| `A09.05` | ghi-chu |  | `5491:358481` Ghi chú | — |  |  | Khớp | QC |
| `A09.06` | huy-generate | `Atom/Button` Type=Primary, Size=Medium; `Atom/Button` Type=Secondary, Size=Medium | `I5491:358433;2514:153361` Atom/Button; `I5491:358433;2514:153363` Atom/Button | — |  |  | Khớp | QC |

### `A10` Generate — Đang tạo bảng và lỗi

Frame: `CD-KH-030344`, `CD-KH-030346` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | dang-tao-bang-generate | `Popup/Header`  | `I5609:31773;2514:153354` Title | — |  |  | Khớp một phần | QC |
| `A10.02` | loi |  | `5609:31815` CD-KH-030346 — Học kỳ / Kiểm tra / Generate · Lỗi; `5609:31846` Không tạo được bảng Generate. Dữ liệu bạn đã nhập vẫn được giữ, hãy thử lại. | — |  |  | Khớp một phần | QC |

### `A11` Generate — Bảng N dòng

Frame: `CD-KH-030343` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A11.01` | dong-tom-tat |  |  | — |  |  | Chưa khớp tự động | QC |
| `A11.02` | cot | `DD/Molecule/Trigger` Size=S, State=Default | `5491:358961` STT; `5491:358963` Prompt | — |  |  | Khớp | QC |
| `A11.03` | thanh-chon |  |  | — |  |  | Chưa khớp tự động | QC |
| `A11.04` | them-n-cau-da-chon |  |  | — |  | `TC37` | Chưa khớp tự động | QC |
| `A11.05` | huy-nut | `Atom/Button` Type=Outlined, Size=Small | `5491:358909` Atom/Button | — | opens `A11` |  | Khớp | QC |

### `A12` Generate — Sau khi tạo

Frame: `CD-KH-030347` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A12.01` | cau-moi | `Atom/Badge`  | `5609:34491` Atom/Badge | — |  |  | Khớp | QC |
| `A12.02` | badge-tong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A12.03` | the-tong-quan |  |  | — |  |  | Chưa khớp tự động | QC |

### `A13` Toast phản hồi CRUD

Frame: `CD-KH-030347` (tool đoán:CD-KH-030340, CD-KH-060100, CD-KH-060200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A13.01` | thanh-cong | `Atom/Toast` Type=Success | `I5609:34554;2167:28343` Title; `I5609:34554;2167:28343` Title | — |  | `TTC01` | Khớp | QC |
| `A13.02` | canh-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A13.03` | loi |  | `5609:34083` Đọc đoạn văn và trả lời 3 câu | — |  |  | Khớp | QC |

### `F01` (ngoài Body)

Frame: `CD-KH-030340` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | tim-kiem | `Atom/Input` State=Search, Kiểu=S | `5491:357680` Tìm kiếm | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | account | `ACCOUNT` Size=Default | `5491:357551` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | component-2 | `Switch Center`  | `5491:357552` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | sidebar-menu-cd | `MENU - CD`  | `5491:357656` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Chọn bài theo kỳ | Tab BTVN: kỳ → lesson của kỳ; tab Kiểm tra: kỳ → bài kiểm tra của kỳ; badge số câu từng bài; tìm theo tên bài; mặc định kỳ đầu, bài đầu. |
| `REQ02` | Thẻ tổng quan | Tổng số câu (câu cha), Thời gian làm bài (chỉ Kiểm tra), Cơ cấu theo dạng câu; tag `N câu hỏi`, `N thiếu đáp án`, `Thang 10` (chỉ Kiểm tra); cập nhật ngay sau mọi thay đổi. Không có Tổng điểm và điểm riêng từng câu: mọi câu thang 10, điểm bài là trung bình các câu. |
| `REQ03` | Bảng câu hỏi | Cột STT, Câu hỏi, Loại câu, Đáp án đúng, Kiến thức / Kỹ năng; lọc Loại câu, Kiến thức / Kỹ năng và tìm kiếm (không có lọc Trạng thái); câu hỏi con mở / thu; 50 câu/trang; xoá mềm; chỉ thêm / sửa / xoá khi học kỳ và khoá học `Nháp`. |
| `REQ04` | Loại câu | 8 loại Trắc nghiệm, Sắp xếp, Nối từ, Nói (App chấm); Đọc, Viết, Hình ảnh (GV chấm); Câu hỏi con (theo từng câu con). |
| `REQ05` | Soạn câu hỏi | Bắt buộc Số câu, Loại câu (khoá sau khi chọn), Kiến thức hoặc Kỹ năng, Điểm, Nội dung câu hỏi; đáp án theo loại câu; file tối đa 25MB; Số câu trùng thì chèn và dồn các câu sau. |
| `REQ06` | Import / Export Excel | Cột file giống bảng UI, không có cột Điểm; export toàn bộ câu của bài; import thêm vào cuối, kiểm tra từng dòng, có dòng lỗi thì chặn cả file; không tự dò câu trùng. |
| `REQ07` | Soát lỗi bằng AI | Rà toàn bộ câu của bài, phát hiện câu trùng và các lỗi khác, chỉ báo, không tự sửa. |
| `REQ08` | Generate bằng AI | Hai chế độ Nhập prompt / Chọn kiến thức & kỹ năng; Số câu không giới hạn; sinh bảng N dòng để sửa và chọn; chỉ dòng được tick mới tạo câu, thêm vào cuối bộ với tag `AI`; huỷ / lỗi không thêm câu. |
| `REQ09` | Không trạng thái và kỳ Vô hiệu | BTVN, bộ câu hỏi và câu hỏi không có trạng thái riêng (trạng thái hiển thị ở Thư viện theo khoá học); chỉ sửa được khi học kỳ `Nháp` và khoá học `Nháp`, ngược lại chỉ đọc. Nhân bản học kỳ / khoá học sao chép toàn bộ BTVN và bộ câu hỏi thành câu hỏi mới. Kỳ `Vô hiệu`: BTVN đã tạo trong lớp từ kỳ đó trước khi vô hiệu vẫn dùng bình thường. |
| `EX01` | Ngoại lệ | Lưu câu thiếu field bắt buộc (Số câu, Loại câu, Kiến thức / Kỹ năng, Điểm, Nội dung câu hỏi) → báo lỗi dưới field, không lưu. |
| `EX02` | Ngoại lệ | File hình ảnh / âm thanh lớn hơn 25MB → không tải lên; Toast `Cảnh Báo` `File vượt quá dung lượng cho phép (25MB).` |
| `EX03` | Ngoại lệ | File import có dòng thiếu field bắt buộc, sai Loại câu, sai Kiến thức / Kỹ năng, không phải `.xlsx` hoặc sai cột tiêu đề → chặn cả file, báo lỗi theo dòng; không thêm câu nào. |
| `EX04` | Ngoại lệ | Lưu, import, export thất bại do backend / network → Toast `Có Lỗi Xảy Ra`; dữ liệu không thay đổi một phần. |
| `EX05` | Ngoại lệ | Thêm, sửa, xoá, import, generate câu thuộc học kỳ hoặc khoá học không ở `Nháp` (giao diện hoặc request trực tiếp) → backend từ chối; Toast `Cảnh Báo`; dữ liệu không đổi. |
| `EX06` | Ngoại lệ | Generate thiếu field bắt buộc (prompt, cụm kiến thức, số câu, dạng câu hỏi) hoặc dòng bảng thiếu Prompt / Kiến thức / Kỹ năng → khoá nút hoặc báo lỗi dòng, không tạo. |
| `EX07` | Ngoại lệ | AI không tạo được bảng hoặc câu hỏi → báo lỗi, giữ dữ liệu đã nhập, cho `Thử lại`; không thêm câu nào. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở menu Bài tập về nhà | High | Có | Flow 1 / REQ01 | `A01` | `A01.01`, `A01.04` |
| `TC02` | Case 2: Chọn bài khác | High |  | Flow 1 / REQ01 | `A01` |  |
| `TC03` | Case 3: Tab Kiểm tra theo kỳ | High |  | REQ01 | `A01` | `A01.02` |
| `TC04` | Case 4: Tìm bài | Medium |  | REQ01 | `A01` |  |
| `TC05` | Case 5: Kỳ Vô hiệu vẫn dùng ở lớp | High |  | REQ09 | `A01` |  |
| `TC5a` | Case 5a: Role khác truy cập Bài Tập Về Nhà / gọi API | High |  | Ràng buộc quyền | `A01` |  |
| `TC06` | Case 6: Thẻ tổng quan đúng bộ câu | High |  | REQ02 | `A02` |  |
| `TC07` | Case 7: Tag thiếu đáp án | Medium |  | REQ02 | `A02` | `A02.01` |
| `TC08` | Case 8: BTVN không có thời gian làm bài | Low |  | REQ02 | `A02` | `A02.08` |
| `TC09` | Case 9: Bảng đủ cột | High | Có | Flow 1 / REQ03 | `A03` | `A03.03` |
| `TC10` | Case 10: Lọc kết hợp | Medium |  | REQ03 | `A03` | `A03.06` |
| `TC11` | Case 11: Xoá câu | High |  | Flow 4 / REQ03 | `A03` |  |
| `TC12` | Case 12: Không thêm / sửa / xoá câu khi không ở Nháp | High |  | EX05 / REQ03 / REQ09 | `A03` |  |
| `TC13` | Case 13: Nhập nhanh | Medium |  | Flow 2 / REQ03 | `A03` |  |
| `TC13a` | Case 13a: Phân trang 50 câu / trang | Low |  | REQ03 | `A03` |  |
| `TC14` | Case 14: Trạng thái rỗng | Medium |  | REQ03 | `A04` |  |
| `TC15` | Case 15: Chọn loại và tiếp tục | High | Có | Flow 2 / REQ04 | `A05` | `A05.02` |
| `TC16` | Case 16: Đủ 8 loại và người chấm | Medium |  | REQ04 | `A05` |  |
| `TC17` | Case 17: Thêm câu Trắc nghiệm | High | Có | Flow 2 / REQ05 | `A06` | `A06.11` |
| `TC18` | Case 18: Thiếu Kiến thức / Kỹ năng | High |  | EX01 / REQ05 | `A06` | `A06.02`, `A06.04` |
| `TC19` | Case 19: Chèn theo Số câu | Medium |  | REQ05 | `A06` | `A06.02` |
| `TC20` | Case 20: Sửa câu AI | Medium |  | REQ05 / REQ08 | `A06` | `A06.05` |
| `TC21` | Case 21: File quá 25MB | Medium |  | EX02 / REQ05 | `A06` |  |
| `TC22` | Case 22: Export đúng cột | High | Có | Flow 5 / REQ06 | `A07` | `A07.02` |
| `TC23` | Case 23: Import thành công | High | Có | Flow 5 / REQ06 | `A07` |  |
| `TC24` | Case 24: Chặn cả file khi có dòng lỗi | High |  | EX03 / REQ06 | `A07` |  |
| `TC25` | Case 25: Không tự bỏ câu trùng | Medium |  | REQ06 / REQ07 | `A07` |  |
| `TC26` | Case 26: Export rồi import lại | Medium |  | REQ06 | `A07` | `A07.02` |
| `TC26a` | Case 26a: Import file không phải .xlsx / sai cột tiêu đề | Medium |  | EX03 / REQ06 | `A07` |  |
| `TC27` | Case 27: Phát hiện câu trùng | High |  | Flow 7 / REQ07 | `A08` | `A08.03` |
| `TC28` | Case 28: Không có lỗi | Low |  | REQ07 | `A08` | `A08.03` |
| `TC29` | Case 29: Generate theo prompt | High | Có | Flow 6 / REQ08 | `A09` | `A09.03` |
| `TC30` | Case 30: Chọn cụm bắt buộc | High |  | EX06 / REQ08 | `A09` |  |
| `TC31` | Case 31: Không giới hạn số câu | Medium |  | REQ08 | `A09` | `A09.03` |
| `TC32` | Case 32: Huỷ khi đang tạo | Medium |  | Flow 6 / REQ08 | `A10` |  |
| `TC33` | Case 33: Lỗi tạo bảng | High |  | EX07 / REQ08 | `A10` |  |
| `TC34` | Case 34: Thêm các dòng đã chọn | High | Có | Flow 6 / REQ08 | `A11` |  |
| `TC35` | Case 35: Sửa loại chung | Medium |  | REQ08 | `A11` |  |
| `TC36` | Case 36: Bỏ bảng | Medium |  | Flow 6 / REQ08 | `A11` |  |
| `TC37` | Case 37: Dòng thiếu Kiến thức / Kỹ năng | Medium |  | EX06 / REQ08 | `A11` | `A11.04` |
| `TC38` | Case 38: Cuộn tới câu mới | Medium |  | REQ08 | `A12` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A13` | `A13.01` |
| `TTC02` | Toast Case 2: Lỗi | High |  | Ràng buộc Toast CRUD | `A13` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Đã đối chiếu trực tiếp**

- `Điểm`: REQ02 nói không có điểm riêng từng câu, Figma không có cột; bảng cột, EX01, REQ05 vẫn có `Điểm`. Phần Import vừa liệt kê vừa nói không có cột này.
- Bảng câu hỏi: requirement ghi chưa có cột, lọc `Kiến thức / Kỹ năng` và còn lọc `Trạng thái`; Figma đã có hai mục đầu, không còn lọc `Trạng thái`.
- Tab Kiểm tra: requirement ghi Figma là danh sách phẳng; layer `CD-KH-060200` đã có HK I, II, III.
- `CD-KH-060121` → `060125`, `060140`, `060141`, `060150`, `060160`: requirement chưa nhắc mã và phần lớn còn ghi cần bổ sung.
- `EX04`: chưa có testcase ghi mã này.

**Tool báo, cần người xem**

- `A01` Khác Figma CD-KH-060200: tab Kiểm tra trên Figma là danh sách phẳng; requirement là cây theo kỳ giống BTVN.
- `A02` Khác Figma CD-KH-030340: còn thẻ `Tổng điểm` (đã bỏ theo thang 10, CD-KH-060100 / 060200 đã sửa); nút tạo bằng AI ghi `Generate`.
- `A03` Khác Figma CD-KH-060100 / 060200: bảng chưa có cột `Kiến thức / Kỹ năng`, lọc `Kiến thức / Kỹ năng` (đã có ở CD-KH-030340) và còn lọc `Trạng thái`.
- `A06` Khác Figma CD-KH-060120: popup chưa có field `Số câu` và `Kiến thức / Kỹ năng`; Figma mới có phần đáp án của Trắc nghiệm.
- `A07` Khác Figma: nút Import / Export mới có ở CD-KH-030340; chưa có popup kết quả import.
- `A09` Khác Figma CD-KH-030341 / 030342: dòng phụ dưới `Số câu` ghi `Tối đa 50 câu mỗi lần`; requirement không giới hạn.
- `A12` Khác Figma CD-KH-030347: tag câu mới ghi `Mới`; requirement dùng tag `AI`.
- Chưa khớp tự động (16): `A01.04`, `A01.05`, `A03.04`, `A03.09`, `A07.04`, `A07.05`, `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A11.01`, `A11.03`, `A11.04`, `A12.02`, `A12.03`, `A13.02`
- Requirement ghi thiếu, Figma đã có (6): `A02.03`, `A06.12`, `A06.13`, `A06.14`, `A06.15`, `A06.16`
- Phân loại cần design duyệt (4): `CD-KH-030343`, `CD-KH-030347`, `CD-KH-060130`, `CD-KH-060160`
- Thiếu prototype link đi vào (8): `CD-KH-030346`, `CD-KH-060121`, `CD-KH-060122`, `CD-KH-060123`, `CD-KH-060124`, `CD-KH-060125`, `CD-KH-060130`, `CD-KH-060140`
- Frame Figma chưa có requirement (10): `CD-KH-030348`, `CD-KH-060121`, `CD-KH-060122`, `CD-KH-060123`, `CD-KH-060124`, `CD-KH-060125`, `CD-KH-060140`, `CD-KH-060141`, `CD-KH-060150`, `CD-KH-060160`
- Testcase không trỏ REQ (3): `TC5a`, `TTC01`, `TTC02`
- REQ/EX chưa có testcase (1): `EX04`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
