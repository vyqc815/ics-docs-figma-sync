# Bài tập về nhà và Kiểm tra (CD-KH-06xx)

> Bản làm thử, sinh tự động từ registry. Phần khớp item cần design và QC duyệt.

## 1. Định danh

| Mã | Tên | Loại | Route | Bản tối |
|---|---|---|---|---|
| `CD-KH-060100` | BTVN | Màn chính | `/bai-tap-ve-nha/btvn` | `CD-KH-060100-DK` |
| `CD-KH-060200` | Kiểm tra | Màn chính | `/bai-tap-ve-nha/kiem-tra` | `CD-KH-060200-DK` |

Requirement: `homework-test.md` (tiền tố `CM-HW`).

## 2. Luồng

- `FLOW01` Chọn kỳ, bài và xem bộ câu hỏi — `REQ01`, `REQ02`, `REQ03`
- `FLOW02` Thêm câu hỏi soạn tay — `REQ04`, `REQ05`
- `FLOW03` Sửa câu hỏi — `REQ05`
- `FLOW04` Xoá câu hỏi — `REQ03`
- `FLOW05` Export và Import Excel — `REQ06`
- `FLOW06` Tạo câu hỏi bằng AI — `REQ08`
- `FLOW07` Soát lỗi bằng AI — `REQ07`

## 3. Popup và trạng thái

| Mã | Tên | Loại | Mở từ (prototype) | Link |
|---|---|---|---|---|
| `CD-KH-060110` | Chọn loại câu | popup | 060100, 060200 | `/bai-tap-ve-nha/btvn?popup=CD-KH-060110` |
| `CD-KH-060120` | Soạn câu · Trắc nghiệm | popup | 060110 | `/bai-tap-ve-nha/btvn?popup=CD-KH-060120` |
| `CD-KH-060121` | Soạn câu · Sắp xếp | popup | - | `/bai-tap-ve-nha/btvn?popup=CD-KH-060121` |
| `CD-KH-060122` | Soạn câu · Nối từ | popup | - | `/bai-tap-ve-nha/btvn?popup=CD-KH-060122` |
| `CD-KH-060123` | Soạn câu · Nói | popup | - | `/bai-tap-ve-nha/btvn?popup=CD-KH-060123` |
| `CD-KH-060124` | Soạn câu · Viết | popup | - | `/bai-tap-ve-nha/btvn?popup=CD-KH-060124` |
| `CD-KH-060125` | Soạn câu · Câu hỏi con | popup | - | `/bai-tap-ve-nha/btvn?popup=CD-KH-060125` |
| `CD-KH-060130` | Bài chưa có câu hỏi | trạng thái | - | `/bai-tap-ve-nha/btvn?state=CD-KH-060130` |
| `CD-KH-060140` | Kết quả Import (có lỗi) | popup | - | `/bai-tap-ve-nha/btvn?popup=CD-KH-060140` |
| `CD-KH-060141` | Kết quả Import | popup | 060100, 060200 | `/bai-tap-ve-nha/btvn?popup=CD-KH-060141` |
| `CD-KH-060150` | Soát lỗi bằng AI | popup | 060100, 060200, 060141 | `/bai-tap-ve-nha/btvn?popup=CD-KH-060150` |
| `CD-KH-060160` | Preview mobile | trạng thái | 060100, 060200 | `/bai-tap-ve-nha/kiem-tra?state=CD-KH-060160` |

## 4. Khu vực và item

### `A01` Khung màn, cây kỳ và bài

Frame: `CD-KH-060100`, `CD-KH-060200`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A01.01` | tab-btvn | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `I5491:347473;2177:28936` Nhiệm vụ con | có |  | `TC01` | Khớp |
| `A01.02` | tab-kiem-tra | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I5491:347475;2177:28928` Chi tiết NV | có |  | `TC03` | Khớp |
| `A01.03` | o-tim-bai-hoc-tim-bai-kiem-tra | `Atom/Input` State=Search, Kiểu=S | `5491:346599` Atom/Input | có |  |  | Khớp |
| `A01.04` | chon-bai |  |  | — |  | `TC01` | Chưa thấy trên Figma |
| `A01.05` | ky-cong-khai-vo-hieu |  |  | — | governed-by `REQ09` |  | Chưa thấy trên Figma |

### `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan

Frame: `CD-KH-030340`, `CD-KH-060100`, `CD-KH-060200`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A02.01` | tieu-de |  | `5491:346413` Tiêu đề | có |  | `TC07` | Khớp |
| `A02.02` | import-excel-export-excel | `Atom/Button` Type=Outlined, Size=Small | `5672:61901` Nút Import Excel; `5672:61903` Nút Export Excel | có | see `A07` |  | Khớp |
| `A02.03` | preview-mobile | `Atom/Button` Type=Outlined, Size=Small | `5491:346417` Atom/Button | có |  |  | Requirement ghi thiếu, Figma đã có |
| `A02.04` | them-cau-hoi | `Atom/Button` Type=Outlined Icon, Size=Small | `5491:346418` Nút Thêm từ (dropdown) | có | opens `A05` |  | Khớp |
| `A02.05` | tao-cau-hoi-bang-ai | `Atom/Button` Type=Secondary, Size=Small | `5491:346423` Atom/Button | có | opens `A09` |  | Khớp |
| `A02.06` | soat-loi-bang-ai | `Atom/Button` Type=Secondary, Size=Small | `5491:346424` Atom/Button | có | see `A08` |  | Khớp |
| `A02.07` | the-tong-so-cau |  | `5672:61907` Tổng số câu | có |  |  | Khớp |
| `A02.08` | the-thoi-gian-lam-bai |  | `5672:62013` Thời gian làm bài | có |  | `TC08` | Khớp một phần |
| `A02.09` | the-co-cau-theo-dang-cau |  | `5672:61917` Cơ cấu theo dạng câu | có |  |  | Khớp |

### `A03` Bảng câu hỏi

Frame: `CD-KH-030340`, `CD-KH-060100`, `CD-KH-060200`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A03.01` | cot |  | `5491:346430` STT; `5491:346432` Câu | có |  |  | Khớp |
| `A03.02` | dap-an-dung |  | `5491:346434` Phiên âm | có |  |  | Khớp |
| `A03.03` | cau-hoi-con | `Atom/Tag` Size=Small | `5491:346574` Atom/Tag | có |  | `TC09` | Khớp |
| `A03.04` | tag-ai |  |  | — |  |  | Chưa thấy trên Figma |
| `A03.05` | o-tim-cau-hoi | `Atom/Input` State=Search, Kiểu=S | `5491:346420` Atom/Input | có |  |  | Khớp |
| `A03.06` | loc-loai-cau | `DD/Molecule/Trigger` Size=S, State=Default | `5491:346421` DD/Molecule/Trigger | có |  | `TC10` | Khớp |
| `A03.07` | loc-kien-thuc-ky-nang | `DD/Molecule/Trigger` Size=S, State=Default | `5491:346422` DD/Molecule/Trigger | có |  |  | Khớp |
| `A03.08` | checkbox | `Checkbox` Size=16 | `5491:346428` Checkbox | có |  |  | Khớp |
| `A03.09` | menu |  |  | — | opens `A06` |  | Chưa thấy trên Figma |
| `A03.10` | nhap-nhanh-cuoi-bang | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `5491:346577` Molecule/Add New Bar | có | opens `A05` |  | Khớp |
| `A03.11` | phan-trang |  | `5491:346579` Footer · Phân trang | có |  |  | Khớp |

### `A04` Bài chưa có câu hỏi

Frame: `CD-KH-060130`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A04.01` | tieu-de |  | `5491:348903` Tiêu đề | có |  |  | Khớp |
| `A04.02` | them-cau-hoi | `Atom/Button` Type=Outlined Icon, Size=Small | `5491:348908` Nút Thêm từ (dropdown) | có | opens `A05` |  | Khớp |
| `A04.03` | tao-cau-hoi-bang-ai | `Atom/Button` Type=Secondary, Size=Medium | `5491:349773` Atom/Button | có | opens `A09` |  | Khớp |
| `A04.04` | import-excel | `Atom/Button` Type=Outlined, Size=Small | `5672:62094` Nút Import Excel | có |  |  | Khớp |

### `A05` Popup Chọn loại câu

Frame: `CD-KH-060110`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A05.01` | trac-nghiem |  | `5491:348733` Trắc nghiệm | — |  |  | Khớp |
| `A05.02` | sap-xep |  | `5491:348746` Sắp xếp | — |  | `TC15` | Khớp |
| `A05.03` | noi-tu |  | `5491:348754` Nối từ | — |  |  | Khớp |
| `A05.04` | noi |  | `5491:348763` Nói | — |  |  | Khớp |
| `A05.05` | doc |  | `5491:348772` Đọc | — |  |  | Khớp |
| `A05.06` | viet |  | `5491:348780` Viết | — |  |  | Khớp |
| `A05.07` | hinh-anh |  | `5491:348788` Hình ảnh | — |  |  | Khớp |
| `A05.08` | cau-hoi-con |  | `5491:348798` Câu hỏi con | — |  |  | Khớp |

### `A06` Popup Soạn câu hỏi

Frame: `CD-KH-060120`, `CD-KH-060121`, `CD-KH-060122`, `CD-KH-060123`, `CD-KH-060124`, `CD-KH-060125`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A06.01` | tieu-de | `Popup/Header`  | `I5491:348806;2514:153353` Tiêu đề | — |  |  | Khớp |
| `A06.02` | so-cau | `Atom/Label`  | `5672:62120` Atom/Label | — |  | `TC18`, `TC19` | Khớp |
| `A06.03` | loai-cau | `Atom/Label`  | `5491:348822` Atom/Label | — |  |  | Khớp |
| `A06.04` | kien-thuc-ky-nang | `Atom/Label`  | `5672:62126` Atom/Label | — |  | `TC18` | Khớp |
| `A06.05` | huong-dan | `Atom/Label`  | `5491:348840` Atom/Label | — |  | `TC20` | Khớp |
| `A06.06` | noi-dung-cau-hoi | `Atom/Label`  | `5491:348847` Atom/Label | — |  |  | Khớp |
| `A06.07` | hinh-anh-am-thanh | `Atom/Label`  | `5491:348851` Atom/Label | — |  |  | Khớp |
| `A06.08` | dap-an |  | `5491:348855` Field · Đáp án | — |  |  | Khớp |
| `A06.09` | giai-thich-dap-an | `Atom/Label`  | `5491:348884` Atom/Label | — |  |  | Khớp |
| `A06.10` | huy-luu-cau-hoi | `Atom/Button` Type=Primary, Size=Medium; `Atom/Button` Type=Secondary, Size=Medium | `I5491:348809;2514:153361` Atom/Button; `I5491:348809;2514:153363` Atom/Button | — |  |  | Khớp |
| `A06.11` | trac-nghiem | `Atom/Input` State=Disabled, Kiểu=S | `5491:348825` Atom/Input | — |  | `TC17` | Khớp một phần |
| `A06.12` | sap-xep | `Atom/Input` State=Disabled, Kiểu=S | `5672:74629` Atom/Input | — |  |  | Requirement ghi thiếu, Figma đã có |
| `A06.13` | noi-tu | `Atom/Input` State=Disabled, Kiểu=S | `5672:74761` Atom/Input | — |  |  | Requirement ghi thiếu, Figma đã có |
| `A06.14` | noi | `Atom/Label`  | `I5491:348847;2015:30530` Label | — |  |  | Requirement ghi thiếu, Figma đã có |
| `A06.15` | doc-viet-hinh-anh | `Atom/Dropzone` Kiểu=Mặc định; `Atom/Label`  | `I5491:348852;1061:1317` Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX (Tối đa 20MB); `I5491:348851;2015:30530` Label | — |  |  | Requirement ghi thiếu, Figma đã có |
| `A06.16` | cau-hoi-con | `Atom/Input` State=Disabled, Kiểu=S | `5672:75144` Atom/Input | — |  |  | Requirement ghi thiếu, Figma đã có |

### `A07` Import / Export Excel

Frame: `CD-KH-030340`, `CD-KH-060140`, `CD-KH-060141`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A07.01` | cot-file |  |  | — |  |  | Chưa thấy trên Figma |
| `A07.02` | export |  |  | — |  | `TC22`, `TC26` | Chưa thấy trên Figma |
| `A07.03` | import-dong-bat-buoc |  |  | — |  |  | Chưa thấy trên Figma |
| `A07.04` | import-loi-du-lieu |  | `5672:75289` Dòng 5: thiếu Loại câu | — |  |  | Khớp một phần |
| `A07.05` | import-cau-trung |  |  | — |  |  | Chưa thấy trên Figma |
| `A07.06` | import-thanh-cong |  |  | — |  |  | Chưa thấy trên Figma |

### `A08` Soát lỗi bằng AI

Frame: `CD-KH-060150`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A08.01` | pham-vi |  |  | — |  |  | Chưa thấy trên Figma |
| `A08.02` | van-de-phat-hien |  |  | — |  |  | Chưa thấy trên Figma |
| `A08.03` | ket-qua |  |  | — |  | `TC27`, `TC28` | Chưa thấy trên Figma |
| `A08.04` | xu-ly |  |  | — |  |  | Chưa thấy trên Figma |

### `A09` Generate bài tập bằng AI — Popup nhập yêu cầu

Frame: `CD-KH-030341`, `CD-KH-030342`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A09.01` | tab-nhap-prompt |  |  | — |  |  | Chưa sync |
| `A09.02` | tab-chon-kien-thuc-ky-nang |  |  | — |  |  | Chưa sync |
| `A09.03` | so-cau |  |  | — |  | `TC29`, `TC31` | Chưa sync |
| `A09.04` | dang-cau-hoi |  |  | — |  |  | Chưa sync |
| `A09.05` | ghi-chu |  |  | — |  |  | Chưa sync |
| `A09.06` | huy-generate |  |  | — |  |  | Chưa sync |

### `A10` Generate — Đang tạo bảng và lỗi

Frame: `CD-KH-030344`, `CD-KH-030346`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A10.01` | dang-tao-bang-generate |  |  | — |  |  | Chưa sync |
| `A10.02` | loi |  |  | — |  |  | Chưa sync |

### `A11` Generate — Bảng N dòng

Frame: `CD-KH-030343`, `CD-KH-030345`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A11.01` | dong-tom-tat |  |  | — |  |  | Chưa sync |
| `A11.02` | cot |  |  | — |  |  | Chưa sync |
| `A11.03` | thanh-chon |  |  | — |  |  | Chưa sync |
| `A11.04` | them-n-cau-da-chon |  |  | — |  | `TC37` | Chưa sync |
| `A11.05` | huy-nut |  |  | — | opens `A11` |  | Chưa sync |

### `A12` Generate — Sau khi tạo

Frame: `CD-KH-030347`

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A12.01` | cau-moi |  |  | — |  |  | Chưa sync |
| `A12.02` | badge-tong |  |  | — |  |  | Chưa sync |
| `A12.03` | the-tong-quan |  |  | — |  |  | Chưa sync |

### `A13` Toast phản hồi CRUD

Frame: chưa có

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái |
|---|---|---|---|---|---|---|---|
| `A13.01` | thanh-cong |  |  | — |  | `TTC01` | Chưa sync |
| `A13.02` | canh-bao |  |  | — |  |  | Chưa sync |
| `A13.03` | loi |  |  | — |  |  | Chưa sync |

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

- Màn: `components/figma/cd-kh-060100/`, `components/figma/cd-kh-060200/`.
- Popup, trạng thái: `components/figma/<mã>/`, mở qua `components/frames/bai-tap-ve-nha.tsx`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Đã đối chiếu trực tiếp**

- `Điểm`: REQ02 nói không có điểm riêng từng câu, Figma không có cột; bảng cột, EX01, REQ05 vẫn có `Điểm`. Phần Import vừa liệt kê vừa nói không có cột này.
- Bảng câu hỏi: requirement ghi chưa có cột, lọc `Kiến thức / Kỹ năng` và còn lọc `Trạng thái`; Figma đã có hai mục đầu, không còn lọc `Trạng thái`.
- Tab Kiểm tra: requirement ghi Figma là danh sách phẳng; layer `CD-KH-060200` đã có HK I, II, III.
- `CD-KH-060121` → `060125`, `060140`, `060141`, `060150`, `060160`: requirement chưa nhắc mã và phần lớn còn ghi cần bổ sung.
- `CD-KH-060121` → `060125`, `060130`, `060140`: chưa có prototype link đi vào.
- `EX04`: chưa có testcase ghi mã này.

**Tool báo, cần người xem**

- `A01` Khác Figma CD-KH-060200: tab Kiểm tra trên Figma là danh sách phẳng; requirement là cây theo kỳ giống BTVN.
- `A02` Khác Figma CD-KH-030340: còn thẻ `Tổng điểm` (đã bỏ theo thang 10, CD-KH-060100 / 060200 đã sửa); nút tạo bằng AI ghi `Generate`.
- `A03` Khác Figma CD-KH-060100 / 060200: bảng chưa có cột `Kiến thức / Kỹ năng`, lọc `Kiến thức / Kỹ năng` (đã có ở CD-KH-030340) và còn lọc `Trạng thái`.
- `A06` Khác Figma CD-KH-060120: popup chưa có field `Số câu` và `Kiến thức / Kỹ năng`; Figma mới có phần đáp án của Trắc nghiệm.
- `A07` Khác Figma: nút Import / Export mới có ở CD-KH-030340; chưa có popup kết quả import.
- `A09` Khác Figma CD-KH-030341 / 030342: dòng phụ dưới `Số câu` ghi `Tối đa 50 câu mỗi lần`; requirement không giới hạn.
- `A12` Khác Figma CD-KH-030347: tag câu mới ghi `Mới`; requirement dùng tag `AI`.
- Chưa thấy trên Figma (13): `A01.04`, `A01.05`, `A03.04`, `A03.09`, `A07.01`, `A07.02`, `A07.03`, `A07.05`, `A07.06`, `A08.01`, `A08.02`, `A08.03`, `A08.04`
- Requirement ghi thiếu, Figma đã có (6): `A02.03`, `A06.12`, `A06.13`, `A06.14`, `A06.15`, `A06.16`
- Chưa sync (19): `A09.01`, `A09.02`, `A09.03`, `A09.04`, `A09.05`, `A09.06`, `A10.01`, `A10.02`, `A11.01`, `A11.02`, `A11.03`, `A11.04`, `A11.05`, `A12.01`, `A12.02`, `A12.03`, `A13.01`, `A13.02`, `A13.03`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn: `docs/pages/bai-tap-ve-nha/btvn.md`, `docs/pages/bai-tap-ve-nha/kiem-tra.md`.
