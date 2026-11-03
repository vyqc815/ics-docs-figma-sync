# Kiến thức (S1)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-040100` | Kiến thức (S1) / Từ vựng | `/kien-thuc-s1/tu-vung` | `CD-KH-040100-DK` | QC |
| `CD-KH-040200` | Kiến thức (S1) / Ngữ pháp | `/kien-thuc-s1/ngu-phap` | `CD-KH-040200-DK` | QC |

Requirement: `course_management/knowledge-s1/knowledge-s1.md` — Kiến thức (S1) (tiền tố `CM-KS`).

## 2. Luồng

- `FLOW01` Mở Kiến thức (S1) và xem danh sách — `REQ01`, `REQ02`, `REQ11`
- `FLOW02` Thêm từ thư viện dữ liệu — `REQ04`, `REQ05`
- `FLOW03` Thêm theo list — `REQ05`, `REQ10`
- `FLOW04` Nhập nhanh — `REQ05`
- `FLOW05` Sửa và nhân bản mục — `REQ06`
- `FLOW06` Điền thiếu bằng AI — `REQ10`
- `FLOW07` Soát lỗi bằng AI — `REQ10`
- `FLOW08` Số cụm, thêm và xoá cụm — `REQ08`
- `FLOW09` Thêm vào cụm / Gỡ khỏi cụm — `REQ08`
- `FLOW10` Chia cụm bằng AI — `REQ09`
- `FLOW11` Gỡ mục khỏi khoá — `REQ07`
- `FLOW12` Thêm / gỡ kiến thức trong Chi tiết bài học — `REQ13`
- `FLOW13` Preview mobile — `REQ12`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-KH-030270` | — | Chưa có frame | — | — | — | — | QC | — |
| `CD-KH-030400` | — | Chưa có frame | — | — | — | — | QC | — |
| `CD-KH-030540` | — | Chưa có frame | — | — | — | — | QC | — |
| `CD-KH-040110` | Chọn cụm · Chọn 1 từ | Trạng thái | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?state=CD-KH-040110` | Figma | trung bình |
| `CD-KH-040120` | Chọn nhiều · Thao tác hàng loạt | Trạng thái | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?state=CD-KH-040120` | Figma | trung bình |
| `CD-KH-040125` | Thêm vào cụm · Gỡ khỏi cụm | Trạng thái | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?state=CD-KH-040125` | Figma | thấp |
| `CD-KH-040140` | Preview mobile theo từ đang chọn | Trạng thái | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?state=CD-KH-040140` | Figma | trung bình |
| `CD-KH-040150` | Popup thêm từ thư viện | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040150` | Figma | cao |
| `CD-KH-040155` | Popup gỡ mục khỏi khoá | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040155` | Figma | thấp |
| `CD-KH-040160` | Popup thêm theo list | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040160` | Figma | cao |
| `CD-KH-040170` | Popup chia cụm bằng AI | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040170` | Figma | cao |
| `CD-KH-040190` | Soát lỗi bằng AI | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040190` | Figma | trung bình |
| `CD-KH-040195` | Chi tiết mục (drawer) | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040195` | Figma | thấp |

## 4. Khu vực và item

### `A01` Khung màn hình và tab loại kiến thức

Frame: `CD-KH-040100`, `CD-KH-040200` (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | switch-center-header |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.02` | tab-loai-kien-thuc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.03` | tieu-de-bang | `Atom/Tag` Size=Small | `4846:158414` Atom/Tag | có |  |  | Khớp một phần | QC |
| `A01.04` | preview-mobile | `Atom/Button` Type=Outlined, Size=Small | `4846:158423` Atom/Button | có | see `A14` |  | Khớp | QC |
| `A01.05` | them | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `I4846:158697;5056:365849` Placeholder | có |  | `TC02`, `TC4a`, `TC4b` | Khớp | QC |
| `A01.06` | them-bang-ai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.07` | thanh-cong-cu | `Atom/Button` Type=Secondary, Size=Small | `5003:16563` Atom/Button | có |  |  | Khớp | QC |
| `A01.08` | panel-cum |  | `4846:158306` Panel · Cụm từ vựng; `5003:16498` Số cụm | có | see `A11` | `TC04` | Khớp | QC |
| `A01.09` | sakumi |  |  | — |  | `TC02` | Chưa khớp tự động | QC |
| `A01.10` | saechang |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.11` | dac-nhan-creative-english-betreux-creati |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.12` | nut-them-tu-dropdown | `Atom/Button` Type=Outlined Icon, Size=Small | `4846:158427` Nút Thêm từ (dropdown) | có |  |  | Chỉ có trên Figma | Figma |
| `A01.13` | atom-input | `Atom/Input` State=Search, Kiểu=S | `4846:158432` Atom/Input | có |  |  | Chỉ có trên Figma | Figma |
| `A01.14` | dd-molecule-trigger | `DD/Molecule/Trigger` Size=S, State=Default | `4846:158439` DD/Molecule/Trigger | có |  |  | Chỉ có trên Figma | Figma |
| `A01.15` | molecule-add-new-bar | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `4846:158697` Molecule/Add New Bar | có |  |  | Chỉ có trên Figma | Figma |
| `A01.16` | atom-input | `Atom/Input` State=Text Center, Kiểu=S | `5003:16499` Atom/Input | có |  |  | Chỉ có trên Figma | Figma |
| `A01.17` | liner-icon | `Liner Icon`  | `4846:169801` Liner Icon | có |  |  | Chỉ có trên Figma | Figma |
| `A01.18` | nut-them-tu-dropdown | `Atom/Button` Type=Outlined Icon, Size=Small | `4846:168515` Nút Thêm từ (dropdown) | có |  |  | Chỉ có trên Figma | Figma |
| `A01.19` | atom-input | `Atom/Input` State=Search, Kiểu=S | `4846:168517` Atom/Input | có |  |  | Chỉ có trên Figma | Figma |
| `A01.20` | dd-molecule-trigger | `DD/Molecule/Trigger` Size=S, State=Default | `4846:168518` DD/Molecule/Trigger | có |  |  | Chỉ có trên Figma | Figma |
| `A01.21` | molecule-add-new-bar | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `4846:168701` Molecule/Add New Bar | có |  |  | Chỉ có trên Figma | Figma |

### `A02` Field của từng loại kiến thức

Frame: `CD-KH-040100`, `CD-KH-040200` (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tu-vung | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `I4846:158294;2177:28936` Nhiệm vụ con | có |  | `TC05`, `TC06` | Khớp | QC |
| `A02.02` | ngu-phap | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I4846:158300;2177:28928` Chi tiết NV | có |  | `TC7a` | Khớp | QC |
| `A02.03` | mau-cau | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I5003:14880;2177:28928` Chi tiết NV | có |  |  | Khớp | QC |
| `A02.04` | hanzi | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I5003:14885;2177:28928` Chi tiết NV | có |  |  | Khớp | QC |
| `A02.05` | kanji |  |  | — |  | `TC08` | Chưa khớp tự động | QC |
| `A02.06` | phat-am-tieng-trung-pinyin |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.07` | bang-chu-tieng-nhat-kana |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.08` | bang-chu-tieng-han-hangul |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.09` | tu-vung-tieng-trung |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.10` | kanji |  |  | — |  | `TC08` | Chưa khớp tự động | QC |
| `A02.11` | hanzi | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I5003:14885;2177:28928` Chi tiết NV | có |  |  | Khớp | QC |
| `A02.12` | tu-loai |  | `4846:158478` Từ loại | có |  | `TC05`, `TC07` | Khớp một phần | QC |
| `A02.13` | phien-am-tung-chu-furigana |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.14` | vi-du |  | `4846:168532` Ví dụ | có |  | `TC7a` | Khớp một phần | QC |
| `A02.15` | cach-dung-luu-y-ngu-phap |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.16` | mo-rong |  | `4846:158655` Không, đừng | có |  |  | Khớp một phần | QC |
| `A02.17` | nghia-han-tu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.18` | bo-thu-kanji-han-tu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.19` | chuoi-tim-kiem-kanji |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.20` | audio |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.21` | phien-am |  | `4846:158474` Phiên âm; `4846:158494` nǐ | có |  | `TC7a` | Khớp một phần | QC |
| `A02.22` | video-ngu-phap |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.23` | hiragana-katakana-bang-chu-nhat |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.24` | loai-bang-chu-nhat |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.25` | hang-bang-chu-nhat |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.26` | loai-bang-chu-han |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.27` | phien-am-bang-chu-han |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.28` | loai-am-nhom-thanh-dieu-phat-am |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.29` | audio-phat-am |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.30` | cum | `Atom/Tag` Size=Small | `4846:158480` Cụm; `4846:158500` Atom/Tag | có |  |  | Khớp | QC |

### `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc

Frame: `CD-KH-040100`, `CD-KH-040200` (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | checkbox | `Checkbox` Size=16 | `4846:158468` Checkbox | có |  |  | Khớp | QC |
| `A03.02` | stt-tay-nam-keo-tha |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.03` | cot-field |  |  | — |  | `TC12b` | Chưa khớp tự động | QC |
| `A03.04` | cum | `Atom/Tag` Size=Small | `4846:158480` Cụm; `4846:158608` Atom/Tag | có | opens `A10` |  | Khớp | QC |
| `A03.05` |  |  |  | — | see `A07` |  | Chưa khớp tự động | QC |
| `A03.06` | tim-kiem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.07` | sap-xep | `DD/Molecule/Trigger` Size=S, State=Default | `I4846:158439;2015:31180` Value; `I4846:158439;2015:31180` Value | có |  | `TC12` | Khớp | QC |
| `A03.08` | trang-thai | `DD/Molecule/Trigger` Size=S, State=Default | `I4846:158451;2015:31180` Value; `4846:158324` Tất cả | có |  |  | Khớp | QC |
| `A03.09` | phan-trang |  | `4846:158705` Footer · Phân trang | có |  |  | Khớp | QC |
| `A03.10` | nhap-nhanh | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `I4846:158697;5056:365849` Placeholder | có | see `A06` |  | Khớp | QC |

### `A04` Menu thêm, Popup Thêm từ thư viện dữ liệu

Frame: `CD-KH-040150` (tool đoán:CD-KH-040150) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | tieu-de-mo-ta | `Popup/Header`  | `I4846:171725;2514:153341` Title | — |  |  | Khớp | QC |
| `A04.02` | tim-kiem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.03` | kho | `DD/Molecule/Trigger` Size=S, State=Default; `Popup/Header`  | `I4846:171725;2514:153342` Description; `I4846:171730;2015:31180` Value | — |  |  | Khớp | QC |
| `A04.04` | cap-do-tu-loai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.05` | danh-sach |  | `4846:171830` Đã có | — |  |  | Khớp | QC |
| `A04.06` | them-vao-cum | `DD/Molecule/Trigger` Size=S, State=Default | `4846:171844` Thêm vào cụm:; `4846:171845` DD/Molecule/Trigger | — |  | `TC15` | Khớp | QC |
| `A04.07` | chan-popup |  |  | — |  |  | Chưa khớp tự động | QC |

### `A05` Popup Thêm theo list

Frame: `CD-KH-040160` (tool đoán:CD-KH-040160) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | tieu-de-mo-ta | `Popup/Header`  | `I4846:171903;2514:153341` Title | — |  |  | Khớp | QC |
| `A05.02` | o-van-ban |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.03` | tach-cot-bang |  | `4846:171918` Tách cột bằng: dấu phẩy; `4846:171918` Tách cột bằng: dấu phẩy | — |  |  | Khớp | QC |
| `A05.04` | ai-tu-dien-con-thieu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.05` | tu-chia-cum-bang-ai-sau-khi-import |  | `4846:171925` Tự chia cụm bằng AI sau khi import | — |  |  | Khớp | QC |
| `A05.06` | xem-truoc | `Atom/Badge`  | `4846:171927` Bảng xem trước; `4846:171938` Atom/Badge | — |  | `TC17`, `TC18`, `TC19`, `TC19a` | Khớp | QC |
| `A05.07` | them-vao-cum |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.08` | chan-popup |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.09` | tu-vung | `Popup/Header`  | `I4846:171903;2514:153341` Title; `I4846:171903;2514:153342` Description | — |  |  | Khớp | QC |
| `A05.10` | ngu-phap |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.11` | mau-cau |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.12` | han-tu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.13` | kanji |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.14` | phat-am-tieng-trung |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.15` | bang-chu-tieng-nhat |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.16` | bang-chu-tieng-han |  |  | — |  |  | Chưa khớp tự động | QC |

### `A06` Nhập nhanh cuối bảng

Frame: `CD-KH-040100`, `CD-KH-040200` (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | o-nhap |  |  | — |  | `TC20` | Chưa khớp tự động | QC |
| `A06.02` | enter |  |  | — |  | `TC20`, `TC21`, `TC22` | Chưa khớp tự động | QC |

### `A07` Menu thao tác dòng và sửa mục

Frame: `CD-KH-040100`, `CD-KH-040200` (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | sua-nhanh-inline |  |  | — |  | `TC23` | Chưa khớp tự động | QC |
| `A07.02` | mo-chi-tiet |  |  | — | see `A08` |  | Chưa khớp tự động | QC |
| `A07.03` | dien-thieu-bang-ai | `Atom/Button` Type=Secondary, Size=Small | `4846:158463` Atom/Button | có |  |  | Khớp | QC |
| `A07.04` | them-vao-cum-go-khoi-cum |  |  | — | opens `A05` |  | Chưa khớp tự động | QC |
| `A07.05` | nhan-ban |  |  | — |  | `TC25` | Chưa khớp tự động | QC |
| `A07.06` | xoa-khoi-danh-sach |  |  | — |  |  | Chưa khớp tự động | QC |

### `A08` Chi tiết mục (drawer)

Frame: `CD-KH-040195` (tool đoán:CD-KH-040195) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | tieu-de |  | `5004:36544` Toolbar · Tiêu đề & hành động | có |  |  | Khớp | QC |
| `A08.02` | field-bat-buoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A08.03` | tu-loai |  | `5004:36570` Từ loại | có |  | `TC25e` | Khớp | QC |
| `A08.04` | han-viet |  |  | — |  |  | Chưa khớp tự động | QC |
| `A08.05` | tao-lai |  |  | — |  | `TC25c` | Chưa khớp tự động | QC |
| `A08.06` | mo-rong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A08.07` | audio |  |  | — |  |  | Chưa khớp tự động | QC |
| `A08.08` | vi-du |  |  | — |  | `TC25a`, `TC25b`, `TC25e` | Chưa khớp tự động | QC |
| `A08.09` | cum | `Atom/Tag` Size=Small | `5004:36572` Cụm; `5004:36590` Atom/Tag | có | opens `A10` |  | Khớp | QC |
| `A08.10` | chan-drawer |  |  | — |  |  | Chưa khớp tự động | QC |

### `A09` Chọn nhiều và thao tác hàng loạt

Frame: `CD-KH-040110`, `CD-KH-040120` (tool đoán:CD-KH-040110, CD-KH-040120) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | da-chon-n-tu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A09.02` | chon-tat-ca-n-tu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A09.03` | dien-thieu-bang-ai-k |  |  | — |  |  | Chưa khớp tự động | QC |
| `A09.04` | them-vao-cum-go-khoi-cum | `Atom/Button` Type=Outlined, Size=XSmall | `4846:161820` Atom/Button | — | opens `A09` |  | Khớp một phần | QC |
| `A09.05` | xoa-n |  |  | — |  |  | Chưa khớp tự động | QC |
| `A09.06` | bo-chon | `Atom/Button` Type=Neutral, Size=XSmall | `4846:161827` Atom/Button | — |  | `TC26a` | Khớp một phần | QC |

### `A10` Popup Thêm vào cụm / Gỡ khỏi cụm

Frame: `CD-KH-040125` (tool đoán:CD-KH-040125) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | tieu-de |  | `4846:176093` Toolbar · Tiêu đề & hành động | — |  |  | Khớp | QC |
| `A10.02` | tim-cum | `Atom/Input` State=Search, Kiểu=S | `4911:11844` Atom/Input | — |  |  | Khớp | QC |
| `A10.03` | danh-sach-cum | `Atom/Tag` Size=Small | `4911:11845` Danh sách cụm; `4846:176143` Atom/Tag | — |  |  | Khớp | QC |
| `A10.04` | huy-luu |  |  | — |  |  | Chưa khớp tự động | QC |

### `A11` Panel Cụm và Số cụm

Frame: `CD-KH-040100`, `CD-KH-040200` (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A11.01` | tat-ca-cum-badge-n-cum |  | `4846:158308` Tất cả cụm; `4846:158329` Chưa phân cụm | có |  |  | Khớp | QC |
| `A11.02` | so-cum |  | `5003:16498` Số cụm | có |  | `TC30`, `TC30a` | Khớp | QC |
| `A11.03` | chia-cum-bang-ai | `Atom/Button` Type=Secondary, Size=Small | `4846:158312` Atom/Button | có | opens `A12` |  | Khớp | QC |
| `A11.04` | tim-cum | `Atom/Input` State=Search, Kiểu=S | `4846:158314` Atom/Input | có |  |  | Khớp | QC |
| `A11.05` | tat-ca |  | `4846:158324` Tất cả | có |  |  | Khớp | QC |
| `A11.06` | chua-phan-cum | `Atom/Tag` Size=Small | `4846:158500` Atom/Tag | có |  | `TC32` | Khớp | QC |
| `A11.07` | dong-cum |  |  | — |  |  | Chưa khớp tự động | QC |
| `A11.08` | them-cum-moi | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `4846:158404` Molecule/Add New Bar | có |  | `TC31` | Khớp | QC |

### `A12` Popup Chia cụm bằng AI

Frame: `CD-KH-040170` (tool đoán:CD-KH-040170) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A12.01` | tieu-de-mo-ta | `Popup/Header`  | `I4846:172004;2514:153341` Title | — |  |  | Khớp | QC |
| `A12.02` | pham-vi-chia-cum |  | `4846:172007` Phạm vi chia cụm | — |  |  | Khớp | QC |
| `A12.03` | so-tu-cum |  | `4846:172024` Số từ / cụm; `4846:172026` 10 – 25 | — |  |  | Khớp | QC |
| `A12.04` | goi-y-nhanh | `Atom/Tab` State=Active, Kiểu=Khung | `4846:172030` Gợi ý nhanh; `4846:172379` Atom/Tab | — |  |  | Khớp | QC |
| `A12.05` | yeu-cau-them-cho-ai-prompt |  | `4846:172042` Yêu cầu thêm cho AI (prompt) | — |  |  | Khớp | QC |
| `A12.06` | tao-de-xuat | `Atom/Button` Type=Secondary, Size=Medium | `4846:172046` Atom/Button | — |  | `TC34` | Khớp | QC |
| `A12.07` | de-xuat-cua-ai |  | `4846:172049` Đề xuất của AI | — |  |  | Khớp | QC |
| `A12.08` | ghi-chu-pham-vi |  | `4846:172105` Chỉ thêm từ vào cụm, không đổi cụm của 16 từ đã phân cụm. Có thể hoàn tác trong Log cập nhật. | — |  |  | Khớp | QC |
| `A12.09` | huy-tao-lai-ap-dung-m-cum | `Atom/Button` Type=Outlined, Size=Medium; `Atom/Button` Type=Secondary, Size=Medium | `4846:172108` Atom/Button; `4846:172109` Atom/Button | — |  |  | Khớp | QC |

### `A13` AI: Thêm bằng AI, Điền thiếu, Soát lỗi, Tạo lại

Frame: `CD-KH-040190` (tool đoán:CD-KH-040190) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A13.01` | popup-them-bang-ai |  |  | — |  | `TC38a` | Chưa khớp tự động | QC |
| `A13.02` | diem-goi-dien-thieu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A13.03` | field-chinh-bat-buoc-truoc-khi-dien-thie |  |  | — |  |  | Chưa khớp tự động | QC |
| `A13.04` | thanh-tien-do-dien-thieu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A13.05` | ket-qua-dien-thieu |  | `5003:17898` Giá trị cũ giữ nguyên tới khi duyệt | có |  |  | Khớp | QC |
| `A13.06` | diem-goi-soat-loi | `Atom/Button` Type=Secondary, Size=Small | `5003:16788` Atom/Button | có |  |  | Khớp | QC |
| `A13.07` | thanh-ket-qua-soat-loi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A13.08` | o-ai-nghi-sai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A13.09` | tao-lai-chi-tiet-muc |  |  | — |  |  | Chưa khớp tự động | QC |

### `A14` Preview mobile

Frame: `CD-KH-040140` (tool đoán:CD-KH-040140) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A14.01` | nut | `Atom/Button` Type=Outlined Icon, Size=Small | `4846:170831` Nút Thêm từ (dropdown); `4846:171636` Preview mobile | có |  |  | Khớp | QC |
| `A14.02` | thiet-bi | `DD/Molecule/Trigger` Size=XS, State=Default | `4911:12381` Chọn thiết bị; `4911:12381` Chọn thiết bị | có |  |  | Khớp | QC |
| `A14.03` | tab-dang-the | `Atom/Tab` State=Active, Kiểu=Khung | `4846:171644` Atom/Tab | có |  |  | Khớp | QC |
| `A14.04` | the | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `I4846:171017;5056:365849` Placeholder; `4846:171655` Tất cả · 3/398 | có |  |  | Khớp | QC |
| `A14.05` | thong-tin-thieu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A14.06` | dieu-huong |  |  | — |  |  | Chưa khớp tự động | QC |

### `A15` Popup xác nhận gỡ mục khỏi khoá

Frame: `CD-KH-040155` (tool đoán:CD-KH-040155) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A15.01` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A15.02` | noi-dung |  |  | — |  |  | Chưa sync | QC |
| `A15.03` | ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A15.04` | huy |  |  | — |  |  | Chưa sync | QC |
| `A15.05` | xac-nhan-go |  |  | — |  | `TC46` | Chưa sync | QC |
| `A15.06` | muc-khong-dung-o-bai-hoc-nao |  |  | — |  |  | Chưa sync | QC |

### `A16` Thêm / gỡ kiến thức trong Chi tiết bài học

Frame: `CD-KH-030270` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A16.01` | popup-them |  |  | — |  | `TC48`, `TC50b` | Chưa sync | QC |
| `A16.02` | them-ca-cum |  |  | — |  |  | Chưa sync | QC |
| `A16.03` | tick-muc |  |  | — |  |  | Chưa sync | QC |
| `A16.04` | danh-sach-trong-bai |  |  | — |  |  | Chưa sync | QC |

### `A17` Toast phản hồi CRUD

Frame: `CD-KH-040100`, `CD-KH-040200` (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A17.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC04` | Chưa khớp tự động | QC |
| `A17.02` | thong-tin | `Atom/Tag` Size=Small | `I4846:158419;1725:17144` Label | có |  |  | Khớp | QC |
| `A17.03` | canh-bao |  |  | — |  | `TTC02` | Chưa khớp tự động | QC |
| `A17.04` | loi | `Atom/Button` Type=Secondary, Size=Small | `I5003:16563;1048:1240` Button | có |  |  | Khớp | QC |

### `F01` (ngoài Body)

Frame: `CD-KH-040100`, `CD-KH-040200` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | tab-tu-vung | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `4846:158294` Tab · Từ vựng | có |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | tab-ngu-phap | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `4846:158300` Tab · Ngữ pháp | có |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | tab-mau-cau | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5003:14880` Tab · Mẫu câu | có |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | tab-hanzi | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5003:14885` Tab · Hanzi | có |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | tab-phat-am | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5003:14895` Tab · Phát âm | có |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Phạm vi | Mỗi khoá học có danh sách Kiến thức (S1) riêng; dữ liệu theo trung tâm CD đang chọn ở header. |
| `REQ02` | Tab theo loại | Mỗi loại kiến thức 1 tab; mọi trung tâm có đủ Từ vựng, Ngữ pháp, Mẫu câu, Hanzi, Kanji, |
| `REQ03` | Field và thiếu thông tin | Mỗi loại có bộ field theo bảng Field và Phụ lục A; mục thiếu thông tin khi trống |
| `REQ04` | Thư viện dữ liệu | Mục của S1 là tham chiếu bản ghi thư viện; không có rule bắt trùng — một bản ghi gắn được nhiều lần vào cùng khoá. Thêm |
| `REQ05` | Thêm mục | Thêm từ thư viện, Thêm theo list (mỗi dòng 1 mục theo thứ tự cột của loại, tách dấu phẩy, chỉ cột |
| `REQ06` | Sửa và nhân bản | Sửa nhanh inline và drawer Chi tiết mục (đủ field, danh sách ví dụ, audio, `↻ Tạo lại` |
| `REQ07` | Gỡ khỏi khoá | Xoá ở S1 là gỡ mục khỏi khoá (bản ghi thư viện còn); có xác nhận, liệt kê bài đang dùng; xác |
| `REQ08` | Cụm | Mỗi loại có bộ cụm riêng; Số cụm mặc định 0, chỉ nhập khi chưa có cụm, nhập N tạo `Chủ đề 1…N` rỗng; |
| `REQ09` | Chia cụm bằng AI | AI chia mục vào các cụm đang có theo chủ đề và prompt, đặt tên cụm theo chủ đề; không tạo |
| `REQ10` | AI | 4 nút riêng. (1) `Thêm bằng AI`: tạo mục mới theo prompt, số lượng 1–50 / lần. (2) `Điền thiếu bằng AI`: |
| `REQ11` | Tìm kiếm, lọc, sắp xếp, kéo thả | Tìm theo field chính; Trạng thái `Tất cả / Đủ thông tin / Thiếu thông tin / |
| `REQ12` | Preview và âm thanh | Mọi loại có Preview mobile tái hiện màn học của app học viên cho loại đó; Audio không |
| `REQ13` | Kiến thức trong bài học | Chi tiết bài học chỉ thêm / gỡ kiến thức từ S1 của chính khoá qua popup `Thêm kiến |
| `REQ14` | Quyền | Chỉ CD được truy cập và thao tác S1 trong trung tâm đang chọn; kiểm tra cả UI và API. |
| `REQ15` | Phản hồi | Thao tác thay đổi dữ liệu có đúng một Toast theo kết quả; không báo thành công trước khi lưu xong. |
| `EX01` | Ngoại lệ | Dòng Thêm theo list thiếu cột đầu → dòng báo lỗi, không tạo; các dòng hợp lệ khác vẫn thêm được. |
| `EX02` | Ngoại lệ | Nhập nhanh rỗng hoặc chỉ khoảng trắng → không tạo mục. |
| `EX03` | Ngoại lệ | Điền thiếu bằng AI quá 50 mục / lần hoặc Thêm bằng AI số lượng > 50 → UI chặn (nút mờ / báo `Tối đa 50 mục mỗi lần`); API từ chối, không chạy AI. |
| `EX04` | Ngoại lệ | AI lỗi hoặc CD bấm `Dừng` → mục chưa xử lý giữ nguyên; mục đã điền giữ giá trị AI đã lưu; báo lỗi nếu AI |
| `EX05` | Ngoại lệ | Chia cụm bằng AI khi loại chưa có cụm (Số cụm = 0) → không gửi yêu cầu, nhắc nhập Số cụm. |
| `EX06` | Ngoại lệ | Role khác CD truy cập S1 hoặc gọi API thay đổi kiến thức → từ chối, không thay đổi dữ liệu. |
| `EX07` | Ngoại lệ | Truy cập tab Bảng chữ ở trung tâm không có hệ chữ riêng (qua URL / API) → từ chối. |
| `EX08` | Ngoại lệ | Truy cập khoá học / kiến thức của trung tâm khác trung tâm đang chọn → từ chối. |
| `EX09` | Ngoại lệ | Lưu thất bại (sửa, cụm, áp dụng AI, thêm / gỡ ở bài học) → giữ dữ liệu cũ, Toast `Có Lỗi Xảy Ra`. |
| `EX10` | Ngoại lệ | Sửa / xoá / đổi cụm mục đang được AI xử lý → UI mờ thao tác; API từ chối, dữ liệu không đổi. |
| `EX11` | Ngoại lệ | Đổi `Số cụm` khi loại đã có cụm → ô chỉ đọc; API từ chối. |
| `EX12` | Ngoại lệ | Lưu Chi tiết mục với Ví dụ rỗng (0 ví dụ) hoặc Từ loại ngoài danh sách → báo lỗi tại field, không lưu. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở Kiến thức (S1) của khoá học | High | Có | Flow 1 / REQ01 / REQ02 | `A01` |  |
| `TC02` | Case 2: Đủ tab ở mọi trung tâm | High |  | REQ02 | `A01` | `A01.05`, `A01.09` |
| `TC03` | Case 3: Đổi trung tâm | High |  | REQ01 | `A01` |  |
| `TC04` | Case 4: Đổi tab | Medium |  | Flow 1 / REQ02 | `A01` | `A01.08` |
| `TC4a` | Case 4a: Khoá Công Khai / Vô hiệu: S1 chỉ đọc | High |  | Quyền theo trạng thái khoá (REQ10 khoá học) | `A01` | `A01.05` |
| `TC4b` | Case 4b: Role khác truy cập S1 / gọi API | High |  | EX06 / REQ14 | `A01` | `A01.05` |
| `TC4c` | Case 4c: Truy cập khoá học của trung tâm khác | High |  | EX08 | `A01` |  |
| `TC4d` | Case 4d: Truy cập tab Bảng chữ ở trung tâm không có hệ chữ | Medium |  | EX07 | `A01` |  |
| `TC05` | Case 5: Tính thiếu thông tin | High |  | REQ03 | `A02` | `A02.01`, `A02.12` |
| `TC06` | Case 6: Field không bắt buộc trống | Medium |  | REQ03 | `A02` | `A02.01` |
| `TC07` | Case 7: Từ loại chọn từ danh sách | Medium |  | REQ03 | `A02` | `A02.12` |
| `TC7a` | Case 7a: Ví dụ nhiều mục | Medium |  | REQ03 | `A02` | `A02.02`, `A02.14`, `A02.21` |
| `TC08` | Case 8: Kanji cần ít nhất 1 âm | Medium |  | REQ03 | `A02` | `A02.05`, `A02.10` |
| `TC09` | Case 9: Xem danh sách theo cụm | High | Có | Flow 1 / REQ11 | `A03` |  |
| `TC10` | Case 10: Tìm kiếm và lọc kết hợp | High |  | REQ11 | `A03` |  |
| `TC11` | Case 11: Kéo thả thứ tự trong cụm | Medium |  | REQ11 | `A03` |  |
| `TC12` | Case 12: Không kéo thả khi sắp xếp khác | Low |  | REQ11 | `A03` | `A03.07` |
| `TC12a` | Case 12a: Nhãn cụm của mục | Medium |  | REQ08 / REQ11 | `A03` |  |
| `TC12b` | Case 12b: Cột bảng theo tab | Medium |  | REQ02 / REQ03 | `A03` | `A03.03` |
| `TC13` | Case 13: Thêm nhiều mục từ thư viện | High | Có | Flow 2 / REQ04 / REQ05 | `A04` |  |
| `TC14` | Case 14: Thêm lại bản ghi đã có trong khoá | High |  | REQ04 | `A04` |  |
| `TC15` | Case 15: Thêm vào cụm đang chọn | Medium |  | REQ04 / REQ08 | `A04` | `A04.06` |
| `TC15a` | Case 15a: Lọc theo kho | Medium |  | REQ04 | `A04` |  |
| `TC16` | Case 16: Thêm theo list | High | Có | Flow 3 / REQ05 | `A05` |  |
| `TC17` | Case 17: Cột trống và AI điền | High |  | Flow 3 / REQ10 | `A05` | `A05.06` |
| `TC18` | Case 18: Không kiểm tra trùng | Medium |  | REQ05 | `A05` | `A05.06` |
| `TC19` | Case 19: Thiếu cột đầu | Medium |  | EX01 | `A05` | `A05.06` |
| `TC19a` | Case 19a: Thứ tự cột của Hán tự | Medium |  | REQ05 | `A05` | `A05.06` |
| `TC20` | Case 20: Nhập nhanh một từ | High | Có | Flow 4 / REQ05 | `A06` | `A06.01`, `A06.02` |
| `TC21` | Case 21: Nhập nhanh trong cụm | Medium |  | REQ05 / REQ08 | `A06` | `A06.02` |
| `TC22` | Case 22: Ô trống | Low |  | EX02 | `A06` | `A06.02` |
| `TC23` | Case 23: Sửa nhanh inline | High | Có | Flow 5 / REQ06 | `A07` | `A07.01` |
| `TC24` | Case 24: Huỷ sửa inline | Medium |  | REQ06 | `A07` |  |
| `TC25` | Case 25: Nhân bản | Medium |  | REQ06 | `A07` | `A07.05` |
| `TC25a` | Case 25a: Sửa đủ field ở Chi tiết mục | High | Có | Flow 5 / REQ06 | `A08` | `A08.08` |
| `TC25b` | Case 25b: Thêm và xoá ví dụ | Medium |  | REQ03 / REQ06 | `A08` | `A08.08` |
| `TC25c` | Case 25c: Tạo lại một field | Medium |  | REQ10 | `A08` | `A08.05` |
| `TC25d` | Case 25d: Đóng khi chưa lưu | Low |  | REQ06 | `A08` |  |
| `TC25e` | Case 25e: Lưu với Ví dụ rỗng / Từ loại ngoài danh sách | Medium |  | EX12 | `A08` | `A08.03`, `A08.08` |
| `TC25f` | Case 25f: Lưu thất bại | Medium |  | EX09 | `A08` |  |
| `TC26` | Case 26: Đếm mục thiếu khi chọn nhiều | High |  | REQ10 | `A09` |  |
| `TC26a` | Case 26a: Điền thiếu tối đa 50 mục | High |  | REQ10 | `A09` | `A09.06` |
| `TC27` | Case 27: Chọn tất cả theo bộ lọc | Medium |  | REQ11 | `A09` |  |
| `TC28` | Case 28: Thêm mục vào cụm | High | Có | Flow 9 / REQ08 | `A10` |  |
| `TC28a` | Case 28a: Chuyển cụm mục đang dùng ở bài học | High |  | Flow 9 / REQ08 | `A10` |  |
| `TC29` | Case 29: Gỡ khỏi cụm | Medium |  | REQ08 | `A10` |  |
| `TC30` | Case 30: Tạo cụm theo Số cụm | High | Có | Flow 8 / REQ08 | `A11` | `A11.02` |
| `TC31` | Case 31: Thêm cụm mới | Medium |  | REQ08 | `A11` | `A11.08` |
| `TC32` | Case 32: Xoá cụm có dữ liệu | High | Có | Flow 8 / REQ08 | `A11` | `A11.06` |
| `TC30a` | Case 30a: Số cụm chỉ đọc khi đã có cụm | Medium |  | REQ08 / EX11 | `A11` | `A11.02` |
| `TC33` | Case 33: Cụm riêng theo loại | Medium |  | REQ08 | `A11` |  |
| `TC34` | Case 34: Chia cụm bằng AI | High | Có | Flow 10 / REQ09 | `A12` | `A12.06` |
| `TC35` | Case 35: Giữ cụm cũ | High |  | REQ09 | `A12` |  |
| `TC36` | Case 36: Chỉnh đề xuất trước khi áp dụng | Medium |  | REQ09 | `A12` |  |
| `TC37` | Case 37: Chưa có cụm | Medium |  | EX05 | `A12` |  |
| `TC38` | Case 38: Huỷ | Low |  | REQ09 | `A12` |  |
| `TC38a` | Case 38a: Thêm bằng AI theo số lượng | High | Có | Flow 6a / REQ10 | `A13` | `A13.01` |
| `TC38b` | Case 38b: Thêm bằng AI quá 50 | Medium |  | REQ10 | `A13` |  |
| `TC39` | Case 39: Điền thiếu lưu luôn | High | Có | Flow 6 / REQ10 | `A13` |  |
| `TC40` | Case 40: Chỉ điền ô trống | High |  | REQ10 | `A13` |  |
| `TC41` | Case 41: Thiếu field chính thì không điền | High |  | REQ10 | `A13` |  |
| `TC42` | Case 42: Dừng giữa chừng | Medium |  | REQ10 / EX04 | `A13` |  |
| `TC43a` | Case 43a: Khoá mục đang AI xử lý | High |  | REQ10 / EX10 | `A13` |  |
| `TC43` | Case 43: Soát lỗi toàn bộ tab | High |  | Flow 7 / REQ10 | `A13` |  |
| `TC44` | Case 44: Xem trước từ đang chọn | Medium |  | Flow 13 / REQ12 | `A14` |  |
| `TC45` | Case 45: Chuyển mục bằng phím | Low |  | REQ12 | `A14` |  |
| `TC46` | Case 46: Gỡ mục đang dùng ở bài học | High | Có | Flow 11 / REQ07 | `A15` | `A15.05` |
| `TC47` | Case 47: Huỷ gỡ | Medium |  | REQ07 | `A15` |  |
| `TC48` | Case 48: Thêm cụm vào bài | High | Có | Flow 12 / REQ13 | `A16` | `A16.01` |
| `TC49` | Case 49: Gỡ một mục khỏi bài | High | Có | Flow 12 / REQ13 | `A16` |  |
| `TC50` | Case 50: Cụm đổi sau khi thêm | Medium |  | REQ13 | `A16` |  |
| `TC50a` | Case 50a: Gỡ khỏi cụm / xoá cụm đang dùng ở bài học | High |  | REQ08 / REQ13 | `A16` |  |
| `TC50b` | Case 50b: Không gắn mục thiếu thông tin | Medium |  | REQ13 | `A16` | `A16.01` |
| `TC51` | Case 51: Không sửa tại bài học | Medium |  | REQ13 | `A16` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | REQ15 | `A17` | `A17.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | REQ15 | `A17` | `A17.03` |
| `TTC03` | Toast Case 3: Lỗi xử lý | High |  | REQ15 | `A17` |  |
| `TTC04` | Toast Case 4: Đang xử lý | Medium |  | REQ15 | `A17` | `A17.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (75): `A01.01`, `A01.02`, `A01.06`, `A01.09`, `A01.10`, `A01.11`, `A02.05`, `A02.06`, `A02.07`, `A02.08`, `A02.09`, `A02.10`, `A02.13`, `A02.15`, `A02.17`, `A02.18`, `A02.19`, `A02.20`, `A02.22`, `A02.23`, `A02.24`, `A02.25`, `A02.26`, `A02.27`, `A02.28`, `A02.29`, `A03.02`, `A03.03`, `A03.05`, `A03.06`, `A04.02`, `A04.04`, `A04.07`, `A05.02`, `A05.04`, `A05.07`, `A05.08`, `A05.10`, `A05.11`, `A05.12`, `A05.13`, `A05.14`, `A05.15`, `A05.16`, `A06.01`, `A06.02`, `A07.01`, `A07.02`, `A07.04`, `A07.05`, `A07.06`, `A08.02`, `A08.04`, `A08.05`, `A08.06`, `A08.07`, `A08.08`, `A08.10`, `A09.01`, `A09.02`, `A09.03`, `A09.05`, `A10.04`, `A11.07`, `A13.01`, `A13.02`, `A13.03`, `A13.04`, `A13.07`, `A13.08`, `A13.09`, `A14.05`, `A14.06`, `A17.01`, `A17.03`
- Chưa sync (10): `A15.01`, `A15.02`, `A15.03`, `A15.04`, `A15.05`, `A15.06`, `A16.01`, `A16.02`, `A16.03`, `A16.04`
- Requirement nhắc mã Figma không có (3): `CD-KH-030270`, `CD-KH-030400`, `CD-KH-030540`
- Frame Figma chưa có requirement (10): `CD-KH-040110`, `CD-KH-040120`, `CD-KH-040125`, `CD-KH-040140`, `CD-KH-040150`, `CD-KH-040155`, `CD-KH-040160`, `CD-KH-040170`, `CD-KH-040190`, `CD-KH-040195`
- Phân loại cần design duyệt (7): `CD-KH-040110`, `CD-KH-040120`, `CD-KH-040125`, `CD-KH-040140`, `CD-KH-040155`, `CD-KH-040190`, `CD-KH-040195`
- Thiếu prototype link đi vào (10): `CD-KH-040110`, `CD-KH-040120`, `CD-KH-040125`, `CD-KH-040140`, `CD-KH-040150`, `CD-KH-040155`, `CD-KH-040160`, `CD-KH-040170`, `CD-KH-040190`, `CD-KH-040195`
- REQ/EX chưa có testcase (1): `EX03`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
