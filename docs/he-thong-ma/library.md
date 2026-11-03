# [CD] Thư viện

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-070160` | Thư viện / Kiến thức / Bảng chữ (tiếng Nhật) | `/thu-vien/kien-thuc/bang-chu-tieng-nhat` | `CD-KH-070160-DK` | QC |
| `CD-KH-070170` | Thư viện / Kiến thức / Bảng chữ (tiếng Hàn) | `/thu-vien/kien-thuc/bang-chu-tieng-han` | `CD-KH-070170-DK` | QC |
| `CD-KH-070304` | Thư viện / Bài tập / Chi tiết câu hỏi · Reading / Sửa câu | `/thu-vien/bai-tap/chi-tiet-cau-hoi-reading/sua-cau` | `CD-KH-070304-DK` | QC |

Requirement: `course_management/library/library.md` — [CD] Thư viện (tiền tố `CM-LI`).

## 2. Luồng

- `FLOW01` Xem, tìm kiếm và lọc Thư viện — `REQ01`, `REQ02`
- `FLOW02` Đổi trạng thái mục kiến thức, kỹ năng — `REQ04`
- `FLOW03` Xoá mục kiến thức, kỹ năng — `REQ05`
- `FLOW04` Xem Bảng chữ dạng lưới — `REQ07`
- `FLOW05` Xem và sửa câu hỏi ở Thư viện bài tập — `REQ10`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `CD-KH-070161` | Bảng chữ (tiếng Nhật) · Xem dạng bảng chữ | Trạng thái | CD-KH-070100 | CD-KH-070100 | — | — | QC | thấp |
| `CD-KH-070171` | Bảng chữ (tiếng Hàn) · Xem dạng bảng chữ | Trạng thái | CD-KH-070100 | CD-KH-070100 | — | — | QC | thấp |
| `CD-KH-070301` | Chi tiết câu hỏi · Listening | Trạng thái | CD-KH-070300 | CD-KH-070300 | CD-KH-070300, CD-KH-070306, CD-KH-070307 | `/thu-vien/bai-tap?state=CD-KH-070301` | QC | trung bình |
| `CD-KH-070302` | Chi tiết câu hỏi · Reading | Trạng thái | CD-KH-070300 | CD-KH-070300 | CD-KH-070300, CD-KH-070304, CD-KH-070305, CD-KH-070309 | `/thu-vien/bai-tap?state=CD-KH-070302` | QC | trung bình |
| `CD-KH-070303` | Chi tiết câu hỏi · Reading (Tiếng Nhật) | Trạng thái | CD-KH-070300 | CD-KH-070300 | — | `/thu-vien/bai-tap?state=CD-KH-070303` | QC | trung bình |
| `CD-KH-070305` | Thêm · Sửa từ khoá | Trạng thái | CD-KH-070302 | CD-KH-070300 | CD-KH-070302, CD-KH-070306, CD-KH-070313 | `/thu-vien/bai-tap?state=CD-KH-070305` | QC | trung bình |
| `CD-KH-070306` | Sửa · Xoá | Trạng thái | CD-KH-070301 | CD-KH-070300 | CD-KH-050110, CD-KH-050210, CD-KH-070301, CD-KH-070307, CD-KH-070308 | `/thu-vien/bai-tap?state=CD-KH-070306` | Figma | trung bình |
| `CD-KH-070307` | Xác nhận xoá đối tượng | Popup | CD-KH-070306 | CD-KH-070300 | CD-KH-070306 | `/thu-vien/bai-tap?popup=CD-KH-070307` | Figma | thấp |
| `CD-KH-070309` | Thêm · Sửa câu hỏi | Trạng thái | CD-KH-070302 | CD-KH-070300 | CD-KH-070302 | `/thu-vien/bai-tap?state=CD-KH-070309` | Figma | trung bình |
| `CD-KH-070313` | Xem trước phía học viên | Trạng thái | CD-KH-070302 | CD-KH-070300 | — | `/thu-vien/bai-tap?state=CD-KH-070313` | Figma | thấp |

## 4. Khu vực và item

### `A01` Khung chung của Thư viện

Frame: `CD-KH-070160`, `CD-KH-070170`, `CD-KH-070304` (tool đoán:CD-KH-070160, CD-KH-070170, CD-KH-070304) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tieu-de-mo-ta |  | `5729:91619` Tiêu đề trang | có |  |  | Khớp một phần | QC |
| `A01.02` | thanh-tab |  |  | — |  | `TC04` | Chưa thấy trên Figma | QC |
| `A01.03` | o-tim-kiem |  |  | — |  | `TC03` | Chưa thấy trên Figma | QC |
| `A01.04` | loc-cap-do | `DD/Molecule/Trigger` Size=S, State=Default | `5729:91632` Bộ lọc · Cấp độ | có |  | `TC01` | Khớp một phần | QC |
| `A01.05` | badge-tong-so |  |  | — |  | `TC01`, `TC02` | Chưa thấy trên Figma | QC |
| `A01.06` | xoa-bo-loc | `Atom/Button` Type=Outlined, Size=Small | `5729:91635` Xoá bộ lọc | có |  | `TC03` | Khớp một phần | QC |
| `A01.07` | cot-cum |  | `5729:92951` Cụm | có |  |  | Khớp một phần | QC |
| `A01.08` | cot-dang-dung-o |  | `5729:93307` Đang dùng ở | có |  | `TC05` | Khớp một phần | QC |
| `A01.09` | cot-trang-thai |  | `5729:93309` Trạng thái | có |  |  | Khớp | QC |
| `A01.10` | menu-cuoi-dong |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A01.11` | o-trong |  | `5729:91870` Hiển thị 1–50 trong 104 chữ | có |  |  | Khớp | QC |
| `A01.12` | phan-trang |  | `5729:91869` Footer · Phân trang | có |  |  | Khớp một phần | QC |

### `A02` Trạng thái và xoá mục

Frame: `CD-KH-070160`, `CD-KH-070170`, `CD-KH-070304` (tool đoán:CD-KH-070160, CD-KH-070170, CD-KH-070304) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | doi-trang-thai |  |  | — |  | `TC06`, `TC07` | Chưa thấy trên Figma | QC |
| `A02.02` | xoa | `Atom/Button` Type=Outlined, Size=Small | `I5729:91635;1430:10764` Button | có | opens `A02` |  | Khớp một phần | QC |
| `A02.03` | muc-cong-khai | `Atom/Badge`  | `5729:93334` Atom/Badge | có |  |  | Khớp một phần | QC |
| `A02.04` | muc-dang-dung | `Atom/Badge`  | `5729:93466` Atom/Badge | có |  |  | Khớp | QC |

### `A03` Thư viện kiến thức

Frame: `CD-KH-070160`, `CD-KH-070170`, `CD-KH-070304` (tool đoán:CD-KH-070160, CD-KH-070170, CD-KH-070304) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | thanh-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I5729:91623;2177:28928` Chi tiết NV | có | see `A04` | `TC12` | Khớp | QC |
| `A03.02` | cot-tab-tu-vung |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A03.03` | cot-tab-ngu-phap |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A03.04` | cot-tab-mau-cau |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A03.05` | cot-tab-hanzi |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A03.06` | cot-tab-kanji |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A03.07` | cot-tab-phat-am |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A03.08` | badge-tong-so |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A04` Thư viện kiến thức — tab Bảng chữ

Frame: `CD-KH-070160`, `CD-KH-070161`, `CD-KH-070170`, `CD-KH-070171` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | danh-sach-tieng-nhat |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A04.02` | loai-nhat |  | `5729:92525` Loại | có |  |  | Khớp | QC |
| `A04.03` | hang-nhat |  | `5729:92527` Hàng | có |  |  | Khớp một phần | QC |
| `A04.04` | luoi-tieng-nhat |  | `5729:92519` Hiragana | có |  |  | Khớp một phần | QC |
| `A04.05` | danh-sach-tieng-han |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A04.06` | loai-han |  | `5729:92525` Loại | có |  | `TC16` | Khớp | QC |
| `A04.07` | luoi-tieng-han |  | `5729:96796` Phụ âm × Nguyên âm | có |  |  | Khớp một phần | QC |
| `A04.08` | panel-chi-tiet-chu |  | `5729:95411` Chi tiết chữ | có |  | `TC17` | Khớp một phần | QC |
| `A04.09` | tim-kiem-cap-do-o-dang-luoi |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.10` | menu |  |  | — |  |  | Chưa có thiết kế | QC |

### `A05` Thư viện kỹ năng

Frame: `CD-KH-070160`, `CD-KH-070170`, `CD-KH-070304` (tool đoán:CD-KH-070160, CD-KH-070170, CD-KH-070304) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | cot-tab-nghe |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A05.02` | cot-tab-doc |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A05.03` | cot-tab-viet |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A05.04` | cot-tab-noi |  | `5729:92517` STT | có |  |  | Khớp một phần | QC |
| `A05.05` | so-cau-hoi |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A05.06` | phat-am-thanh |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A05.07` | badge-tong-so |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A05.08` | tim-kiem | `Atom/Input` State=Search, Kiểu=S | `5729:91631` Tìm kiếm | có |  |  | Khớp một phần | QC |

### `A06` Thư viện bài tập

Frame: `CD-KH-070160`, `CD-KH-070170`, `CD-KH-070304` (tool đoán:CD-KH-070160, CD-KH-070170, CD-KH-070304) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | tab-ngan-hang-cau-hoi |  |  | — |  | `TC26` | Chưa thấy trên Figma | QC |
| `A06.02` | loai-cau |  |  | — |  | `TC27` | Chưa thấy trên Figma | QC |
| `A06.03` | dap-an-dung |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.04` | kien-thuc-ky-nang |  |  | — |  | `TC26` | Chưa thấy trên Figma | QC |
| `A06.05` | cau-hoi-con |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.06` | trang-thai |  | `5729:93309` Trạng thái | có |  | `TC26`, `TC28`, `TC29`, `TC31` | Khớp | QC |
| `A06.07` | tag-ai |  |  | — |  | `TC30` | Chưa thấy trên Figma | QC |
| `A06.08` | bam-dong-cau-hoi |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.09` | tab-btvn-mau |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.10` | tab-kiem-tra-mau |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A06.11` | bam-dong-tab-mau |  |  | — |  |  | Chưa có thiết kế | QC |
| `A06.12` | tim-kiem | `Atom/Input` State=Search, Kiểu=S | `5729:91631` Tìm kiếm | có |  |  | Khớp một phần | QC |

### `A07` Thư viện bài tập — Chi tiết câu hỏi

Frame: `CD-KH-070301`, `CD-KH-070302`, `CD-KH-070303`, `CD-KH-070304`, `CD-KH-070305` · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | nut |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.02` | tieu-de |  | `6163:81281` Tiêu đề; `6163:81282` Tiêu đề trang | có |  |  | Khớp | QC |
| `A07.03` | chip-ngon-ngu |  | `6163:332014` Chúng tôi đều rất thích học tiếng Trung. | có |  |  | Khớp một phần | QC |
| `A07.04` | huy | `Atom/Button` Type=Outlined, Size=Small | `6163:332048` Atom/Button | có |  |  | Khớp một phần | QC |
| `A07.05` | luu-cau-hoi | `Atom/Button` Type=Primary, Size=Small | `6163:332049` Atom/Button | có |  | `TC33`, `TC39`, `TC41` | Khớp một phần | QC |
| `A07.06` | che-do-chi-xem | `Atom/Button` Type=Primary, Size=Small | `6163:332049` Atom/Button | có |  |  | Requirement ghi thiếu, Figma đã có | QC |
| `A07.07` | kich-ban |  | `6163:82102` Kịch bản | có |  | `TC33` | Khớp một phần | QC |
| `A07.08` | audio-theo-kich-ban |  |  | — |  |  | Chưa có thiết kế | QC |
| `A07.09` | lua-chon-dap-an |  |  | — |  |  | Chưa có thiết kế | QC |
| `A07.10` | luot-thoai |  |  | — |  | `TC34` | Chưa thấy trên Figma | QC |
| `A07.11` | them-luot |  |  | — |  | `TC34` | Chưa thấy trên Figma | QC |
| `A07.12` | o-chon-doi-tuong |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.13` | panel-doi-tuong |  | `6163:82144` Đối tượng | có |  | `TC33` | Khớp một phần | QC |
| `A07.14` | hien-thi-cho-hoc-vien |  | `6163:82164` Hiển thị cho học viên | có |  |  | Khớp | QC |
| `A07.15` | van-ban |  | `6163:82425` Văn bản | có |  | `TC35`, `TC36`, `TC37` | Khớp một phần | QC |
| `A07.16` | sua-cau |  | `6163:82425` Văn bản | có |  | `TC42a` | Khớp một phần | QC |
| `A07.17` | tu-khoa-n |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.18` | popup-chi-tiet-tu-khoa |  | `6163:82169` Toggle · Dịch nghĩa | có |  |  | Khớp một phần | QC |
| `A07.19` | dat-lam-tu-khoa |  |  | — |  | `TC36` | Chưa thấy trên Figma | QC |
| `A07.20` | popup-them-tu-khoa |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A07.21` | sua-tu-khoa |  |  | — |  | `TC37` | Chưa thấy trên Figma | QC |
| `A07.22` | bo-tu-khoa |  |  | — |  | `TC37` | Chưa thấy trên Figma | QC |
| `A07.23` | chon-tu-co-san |  |  | — |  |  | Chưa có thiết kế | QC |
| `A07.24` | cau-con-dap-an |  | `6163:82186` Đọc đoạn văn và trả lời 3 câu · Kỹ năng: Đọc | có |  |  | Requirement ghi thiếu, Figma đã có | QC |
| `A07.25` | hien-thi-cho-hoc-vien |  | `6163:82164` Hiển thị cho học viên | có |  |  | Khớp | QC |

### `A08` Toast phản hồi CRUD

Frame: `CD-KH-070160`, `CD-KH-070170`, `CD-KH-070304` (tool đoán:CD-KH-070160, CD-KH-070170, CD-KH-070304) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | thanh-cong |  |  | — |  | `TTC01` | Chưa thấy trên Figma | QC |
| `A08.02` | canh-bao |  |  | — |  | `TTC02` | Chưa thấy trên Figma | QC |
| `A08.03` | loi |  | `6163:332044` Đọc đoạn văn và trả lời 3 câu · Kỹ năng: Đọc | có |  |  | Khớp một phần | QC |

### `F01` (ngoài Body)

Frame: `CD-KH-070160`, `CD-KH-070170`, `CD-KH-070304` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | tab-tu-vung | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5729:91623` Tab · Từ vựng | có |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | tab-ngu-phap | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5729:91624` Tab · Ngữ pháp | có |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | tab-mau-cau | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5729:91625` Tab · Mẫu câu | có |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | tab-kanji | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5729:91627` Tab · Kanji | có |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | tab-bang-chu | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `5729:91628` Tab · Bảng chữ | có |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | tab-phat-am | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `5729:91629` Tab · Phát âm | có |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | nut-xem-dang-bang-chu | `Atom/Button` Type=Outlined, Size=Small | `5729:93806` Nút · Xem dạng bảng chữ | có |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | atom-badge | `Atom/Badge`  | `5729:93363` Atom/Badge | có |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | atom-button | `Atom/Button` Type=Secondary, Size=Small | `6163:332861` Atom/Button | có |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | molecule-add-new-bar-them-cau | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `6518:384161` Molecule/Add New Bar · Thêm câu | có |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | atom-label | `Atom/Label`  | `6518:383963` Atom/Label | có |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Phạm vi dữ liệu | Thư viện chỉ hiển thị dữ liệu của trung tâm CD đang chọn ở header; đổi trung tâm thì tải lại theo trung tâm mới. |
| `REQ02` | Tìm kiếm và lọc | Chỉ có ô tìm kiếm (theo cột chính của tab) và lọc `Cấp độ` (một lựa chọn, mặc định `Tất cả`), kết hợp với nhau; `Xoá bộ lọc` đưa về mặc định; phân trang 50 dòng/trang; badge tổng số theo kết quả; ô trống hiện `— trống —` / `— chưa có … —` màu cam. |
| `REQ03` | Đang dùng ở | Hiển thị kỳ và bài đang dùng mục: một bài hiện tên bài, nhiều bài hiện số bài; chưa gắn bài nào hiển thị `Chưa dùng`. |
| `REQ04` | Trạng thái mục kiến thức, kỹ năng | `Nháp` → `Công khai` / `Vô hiệu`; `Công khai` → `Vô hiệu`; `Vô hiệu` → `Công khai`; không về `Nháp`; menu con chỉ hiện trạng thái được phép. Mục `Vô hiệu` không được thêm mới vào bài; bài đã gắn trước đó vẫn dùng. |
| `REQ05` | Xoá | Chỉ xoá mềm mục `Nháp` / `Vô hiệu` chưa dùng ở bài nào, qua popup xác nhận; mục `Công khai` hoặc đang dùng thì `Xoá` mờ kèm tooltip, backend từ chối request. |
| `REQ06` | Thư viện kiến thức | Mọi trung tâm có đủ 6 tab Từ vựng, Ngữ pháp, Mẫu câu, Hanzi, Kanji, Phát âm (cộng Bảng chữ theo REQ07); cột theo bảng Giải thích thành phần kèm `Cụm`, `Đang dùng ở`, `Trạng thái`; Loại của Phát âm theo S1; thêm / sửa tại S1. |
| `REQ07` | Bảng chữ | Tab chỉ ở trung tâm có hệ chữ riêng (Sakumi: Hiragana / Katakana, 104 mục, 1 dòng = cặp chữ; Saechang: Hangul, 40 jamo); hai dạng xem danh sách và lưới; lưới có panel Chi tiết chữ và `Nghe phát âm`; tìm kiếm / Cấp độ áp dụng cả hai dạng; dạng lưới chỉ có ở Thư viện. |
| `REQ08` | Thư viện kỹ năng | Tab Nghe, Đọc, Viết, Nói; cột nội dung (âm thanh, đoạn văn, đề bài), số câu hỏi, đang dùng ở, trạng thái; phát âm thanh trong bảng, một bài tại một thời điểm; thêm / sửa tại S6. |
| `REQ09` | Thư viện bài tập | 3 tab Ngân hàng câu hỏi, BTVN Mẫu, Kiểm Tra Mẫu; không đổi trạng thái, không xoá câu; Ngân hàng câu hỏi không có cột `Đang dùng ở`, cột `Kiến thức / Kỹ năng` chỉ ghi `Kiến thức` hoặc `Kỹ năng`; trạng thái câu hỏi lấy theo khoá học chứa câu (`Chưa dùng` khi chưa thuộc bài nào); tag `AI` cho câu AI chưa được sửa; hai tab mẫu không có cột Tổng điểm. |
| `REQ10` | Chi tiết câu hỏi | Bấm câu ở Ngân hàng câu hỏi mở Chi tiết câu hỏi; sửa được khi câu `Chưa dùng` hoặc mọi khoá học chứa câu đều đang `Nháp`, khác thì chỉ xem (học viên có thể đã làm câu) (banner, ẩn nút sửa, `Đóng`); sửa là sửa câu gốc, mọi bộ BTVN / bài kiểm tra dùng câu thấy nội dung mới; câu Nghe có kịch bản theo lượt và đối tượng, câu Đọc có văn bản theo câu và từ khoá (chọn được từ có sẵn ở S1); sửa kịch bản / giọng câu Nghe thì tạo lại audio; backend kiểm tra lại điều kiện sửa. |
| `EX01` | Ngoại lệ | Request chuyển trạng thái không hợp lệ (`Công khai` → `Nháp`, `Vô hiệu` → `Nháp`) → backend từ chối; trạng thái giữ nguyên. |
| `EX02` | Ngoại lệ | Request xoá mục `Công khai` → backend từ chối; Toast `Cảnh Báo` `Mục đang Công khai không thể xoá.` |
| `EX03` | Ngoại lệ | Request xoá mục đang dùng ở bài học → backend từ chối; Toast `Cảnh Báo` `Mục đang được dùng ở bài học, gỡ khỏi bài trước khi xoá.` |
| `EX04` | Ngoại lệ | Request xoá / đổi trạng thái câu hỏi từ Thư viện bài tập → backend từ chối. |
| `EX05` | Ngoại lệ | Lỗi tải dữ liệu → vùng bảng báo lỗi và `Thử lại`; không hiển thị bảng rỗng giả. |
| `EX06` | Ngoại lệ | Truy cập tab `Bảng chữ` ở trung tâm không có hệ chữ riêng (qua URL / API) → từ chối, về tab đầu tiên. |
| `EX07` | Ngoại lệ | Chữ chưa có audio → nút `Nghe phát âm` mờ, không phát; không Toast. |
| `EX08` | Ngoại lệ | Request lưu câu hỏi thuộc khoá `Công khai` / `Vô hiệu` → backend từ chối; Toast `Cảnh Báo` `Câu thuộc khoá Công khai / Vô hiệu, không sửa được.`; câu giữ nguyên. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở Thư viện | High | Có | Flow 1 / REQ01 | `A01` | `A01.04`, `A01.05` |
| `TC02` | Case 2: Tìm kiếm kết hợp Cấp độ | High |  | Flow 1 / REQ02 | `A01` | `A01.05` |
| `TC03` | Case 3: Xoá bộ lọc | Medium |  | REQ02 | `A01` | `A01.03`, `A01.06` |
| `TC04` | Case 4: Đổi trung tâm | High |  | REQ01 | `A01` | `A01.02` |
| `TC05` | Case 5: Cột Đang dùng ở | Medium |  | REQ03 | `A01` | `A01.08` |
| `TC5a` | Case 5a: Ô trống | Medium |  | REQ02 | `A01` |  |
| `TC06` | Case 6: Đổi Nháp sang Công khai | High | Có | Flow 2 / REQ04 | `A02` | `A02.01` |
| `TC07` | Case 7: Menu con theo trạng thái | High |  | EX01 / REQ04 | `A02` | `A02.01` |
| `TC08` | Case 8: Không xoá mục Công khai | High |  | EX02 / REQ05 | `A02` |  |
| `TC09` | Case 9: Xoá mục Nháp chưa dùng | High | Có | Flow 3 / REQ05 | `A02` |  |
| `TC10` | Case 10: Không xoá mục đang dùng | Medium |  | EX03 / REQ05 | `A02` |  |
| `TC11` | Case 11: Huỷ xoá | Medium |  | Flow 3 | `A02` |  |
| `TC12` | Case 12: Đủ tab ở mọi trung tâm | High |  | REQ06 | `A03` | `A03.01` |
| `TC13` | Case 13: Cột theo tab | Medium |  | REQ06 | `A03` |  |
| `TC14` | Case 14: Sửa ở S1 hiển thị ở Thư viện | High |  | REQ06 | `A03` |  |
| `TC14a` | Case 14a: Tab rỗng | Low |  | REQ06 | `A03` |  |
| `TC15` | Case 15: Tab Bảng chữ theo trung tâm | High |  | REQ07 | `A04` |  |
| `TC16` | Case 16: Danh sách Bảng chữ Nhật | High | Có | Flow 1 / REQ07 | `A04` | `A04.06` |
| `TC17` | Case 17: Chuyển dạng bảng chữ (Nhật) | High |  | Flow 4 / REQ07 | `A04` | `A04.08` |
| `TC18` | Case 18: Chọn ô và nghe phát âm | Medium |  | Flow 4 / REQ07 | `A04` |  |
| `TC19` | Case 19: Ô trống trong lưới | Low |  | REQ07 | `A04` |  |
| `TC20` | Case 20: Danh sách và lưới Bảng chữ Hàn | High |  | Flow 4 / REQ07 | `A04` |  |
| `TC21` | Case 21: Tìm kiếm ở dạng lưới | Medium |  | REQ07 | `A04` |  |
| `TC22` | Case 22: Bảng tab Nghe | High |  | REQ08 | `A05` |  |
| `TC23` | Case 23: Phát một bài tại một thời điểm | Medium |  | REQ08 | `A05` |  |
| `TC24` | Case 24: Bảng tab Đọc | Medium |  | REQ08 | `A05` |  |
| `TC25` | Case 25: Bảng tab Viết, Nói | Medium |  | REQ08 | `A05` |  |
| `TC26` | Case 26: Ngân hàng câu hỏi đủ cột | High | Có | Flow 1 / REQ09 | `A06` | `A06.01`, `A06.04`, `A06.06` |
| `TC27` | Case 27: Mở câu hỏi con | Medium |  | REQ09 | `A06` | `A06.02` |
| `TC28` | Case 28: Trạng thái theo khoá học | High |  | REQ09 | `A06` | `A06.06` |
| `TC29` | Case 29: Không đổi trạng thái, không xoá câu | High |  | EX04 / REQ09 | `A06` | `A06.06` |
| `TC30` | Case 30: Tag AI | Medium |  | REQ09 | `A06` | `A06.07` |
| `TC31` | Case 31: Tab mẫu | Medium |  | REQ09 | `A06` | `A06.06` |
| `TC32` | Case 32: Tìm ở Ngân hàng câu hỏi | Medium |  | REQ02 / REQ09 | `A06` |  |
| `TC33` | Case 33: Mở chi tiết câu Nghe | High | Có | Flow 5 / REQ10 | `A07` | `A07.05`, `A07.07`, `A07.13` |
| `TC34` | Case 34: Thêm lượt thoại | High |  | Flow 5 / REQ10 | `A07` | `A07.10`, `A07.11` |
| `TC35` | Case 35: Sửa câu trong văn bản Đọc | High |  | Flow 5 / REQ10 | `A07` | `A07.15` |
| `TC36` | Case 36: Đặt làm từ khoá | High |  | Flow 5 / REQ10 | `A07` | `A07.15`, `A07.19` |
| `TC37` | Case 37: Sửa / bỏ từ khoá | Medium |  | Flow 5 / REQ10 | `A07` | `A07.15`, `A07.21`, `A07.22` |
| `TC38` | Case 38: Câu Đọc tiếng Nhật | Medium |  | REQ10 | `A07` |  |
| `TC39` | Case 39: Chế độ chỉ xem | High |  | EX08 / REQ10 | `A07` | `A07.05` |
| `TC40` | Case 40: Backend từ chối sửa câu đang dùng | High |  | EX08 / REQ10 | `A07` |  |
| `TC41` | Case 41: Lưu câu AI | Medium |  | REQ09 / REQ10 | `A07` | `A07.05` |
| `TC42a` | Case 42a: Audio cần tạo lại | High |  | REQ10 | `A07` | `A07.16` |
| `TC42b` | Case 42b: Chọn từ khoá từ S1 | Medium |  | REQ10 | `A07` |  |
| `TC42` | Case 42: Huỷ khi có thay đổi | Medium |  | Flow 5 | `A07` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A08` | `A08.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A08` | `A08.02` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A08` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa thấy trên Figma (30): `A01.02`, `A01.03`, `A01.05`, `A01.10`, `A02.01`, `A03.08`, `A04.09`, `A05.05`, `A05.06`, `A05.07`, `A06.01`, `A06.02`, `A06.03`, `A06.04`, `A06.05`, `A06.07`, `A06.08`, `A06.09`, `A06.10`, `A07.01`, `A07.10`, `A07.11`, `A07.12`, `A07.17`, `A07.19`, `A07.20`, `A07.21`, `A07.22`, `A08.01`, `A08.02`
- Requirement ghi thiếu, Figma đã có (2): `A07.06`, `A07.24`
- Phân loại cần design duyệt (10): `CD-KH-070161`, `CD-KH-070171`, `CD-KH-070301`, `CD-KH-070302`, `CD-KH-070303`, `CD-KH-070305`, `CD-KH-070306`, `CD-KH-070307`, `CD-KH-070309`, `CD-KH-070313`
- Thiếu prototype link đi vào (4): `CD-KH-070161`, `CD-KH-070171`, `CD-KH-070303`, `CD-KH-070313`
- Frame Figma chưa có requirement (4): `CD-KH-070306`, `CD-KH-070307`, `CD-KH-070309`, `CD-KH-070313`
- Testcase không trỏ REQ (3): `TTC01`, `TTC02`, `TTC03`
- REQ/EX chưa có testcase (3): `EX05`, `EX06`, `EX07`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
