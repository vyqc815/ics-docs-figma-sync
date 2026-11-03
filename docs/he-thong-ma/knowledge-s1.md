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
- `FLOW08` Cụm sinh từ S2, đổi tên và liên kết bài học — `REQ08`
- `FLOW09` Thêm vào cụm / Gỡ khỏi cụm — `REQ08`
- `FLOW10` Chia cụm bằng AI — `REQ09`
- `FLOW11` Gỡ mục khỏi khoá — `REQ07`
- `FLOW12` Xem kiến thức của bài học theo cụm liên kết — `REQ13`
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
| `CD-KH-040155` | Popup gỡ mục khỏi khoá | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040155` | Figma | cao |
| `CD-KH-040160` | Popup thêm theo list | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040160` | Figma | cao |
| `CD-KH-040170` | Popup chia cụm bằng AI | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040170` | Figma | cao |
| `CD-KH-040190` | Soát lỗi bằng AI | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040190` | Figma | trung bình |
| `CD-KH-040195` | Chi tiết mục (drawer) | Popup | CD-KH-040100 | CD-KH-040100 | — | `/kien-thuc-s1/tu-vung?popup=CD-KH-040195` | Figma | thấp |

## 4. Khu vực và item

### `A01` Khung màn hình và tab loại kiến thức

Frame: chưa có (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | switch-center-header |  |  | — |  |  | Chưa sync | QC |
| `A01.02` | tab-loai-kien-thuc |  |  | — |  |  | Chưa sync | QC |
| `A01.03` | tieu-de-bang |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | preview-mobile |  |  | — | see `A14` |  | Chưa sync | QC |
| `A01.05` | them |  |  | — |  | `TC02`, `TC4a`, `TC4b` | Chưa sync | QC |
| `A01.06` | them-bang-ai |  |  | — |  |  | Chưa sync | QC |
| `A01.07` | thanh-cong-cu |  |  | — |  |  | Chưa sync | QC |
| `A01.08` | panel-cum |  |  | — | see `A11` | `TC04` | Chưa sync | QC |
| `A01.09` | sakumi |  |  | — |  | `TC02` | Chưa sync | QC |
| `A01.10` | saechang |  |  | — |  |  | Chưa sync | QC |
| `A01.11` | dac-nhan-creative-english-betreux-creati |  |  | — |  |  | Chưa sync | QC |

### `A02` Field của từng loại kiến thức

Frame: chưa có (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tu-vung |  |  | — |  | `TC05`, `TC06` | Chưa sync | QC |
| `A02.02` | ngu-phap |  |  | — |  | `TC7a` | Chưa sync | QC |
| `A02.03` | mau-cau |  |  | — |  |  | Chưa sync | QC |
| `A02.04` | hanzi |  |  | — |  |  | Chưa sync | QC |
| `A02.05` | kanji |  |  | — |  | `TC08` | Chưa sync | QC |
| `A02.06` | phat-am-tieng-trung-pinyin |  |  | — |  |  | Chưa sync | QC |
| `A02.07` | bang-chu-tieng-nhat-kana |  |  | — |  |  | Chưa sync | QC |
| `A02.08` | bang-chu-tieng-han-hangul |  |  | — |  |  | Chưa sync | QC |
| `A02.09` | tu-vung-tieng-trung |  |  | — |  |  | Chưa sync | QC |
| `A02.10` | kanji |  |  | — |  | `TC08` | Chưa sync | QC |
| `A02.11` | hanzi |  |  | — |  |  | Chưa sync | QC |
| `A02.12` | tu-loai |  |  | — |  | `TC05`, `TC07` | Chưa sync | QC |
| `A02.13` | phien-am-tung-chu-furigana |  |  | — |  |  | Chưa sync | QC |
| `A02.14` | vi-du |  |  | — |  | `TC7a` | Chưa sync | QC |
| `A02.15` | cach-dung-luu-y-ngu-phap |  |  | — |  |  | Chưa sync | QC |
| `A02.16` | nang-cao |  |  | — |  |  | Chưa sync | QC |
| `A02.17` | nghia-han-tu |  |  | — |  |  | Chưa sync | QC |
| `A02.18` | bo-thu-kanji-han-tu |  |  | — |  |  | Chưa sync | QC |
| `A02.19` | chuoi-tim-kiem-kanji |  |  | — |  |  | Chưa sync | QC |
| `A02.20` | audio |  |  | — |  |  | Chưa sync | QC |
| `A02.21` | phien-am |  |  | — |  | `TC7a` | Chưa sync | QC |
| `A02.22` | video-ngu-phap |  |  | — |  |  | Chưa sync | QC |
| `A02.23` | hiragana-katakana-bang-chu-nhat |  |  | — |  |  | Chưa sync | QC |
| `A02.24` | loai-bang-chu-nhat |  |  | — |  |  | Chưa sync | QC |
| `A02.25` | hang-bang-chu-nhat |  |  | — |  |  | Chưa sync | QC |
| `A02.26` | loai-bang-chu-han |  |  | — |  |  | Chưa sync | QC |
| `A02.27` | phien-am-bang-chu-han |  |  | — |  |  | Chưa sync | QC |
| `A02.28` | loai-am-nhom-thanh-dieu-phat-am |  |  | — |  |  | Chưa sync | QC |
| `A02.29` | audio-phat-am |  |  | — |  |  | Chưa sync | QC |
| `A02.30` | cum |  |  | — |  |  | Chưa sync | QC |

### `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc

Frame: chưa có (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | checkbox |  |  | — |  | `TC12c` | Chưa có thiết kế | QC |
| `A03.02` | stt-tay-nam-keo-tha |  |  | — |  |  | Chưa có thiết kế | QC |
| `A03.03` | cot-field |  |  | — |  | `TC12b` | Chưa có thiết kế | QC |
| `A03.04` | cum |  |  | — | opens `A10` |  | Chưa có thiết kế | QC |
| `A03.05` |  |  |  | — | see `A07` |  | Chưa có thiết kế | QC |
| `A03.06` | tim-kiem |  |  | — |  |  | Chưa có thiết kế | QC |
| `A03.07` | sap-xep |  |  | — |  | `TC12` | Chưa có thiết kế | QC |
| `A03.08` | trang-thai |  |  | — |  | `TC12d` | Chưa có thiết kế | QC |
| `A03.09` | nang-cao |  |  | — |  | `TC12c`, `TC12d` | Chưa có thiết kế | QC |
| `A03.10` | phan-trang |  |  | — |  |  | Chưa có thiết kế | QC |
| `A03.11` | nhap-nhanh |  |  | — | see `A06` |  | Chưa có thiết kế | QC |

### `A04` Menu thêm, Popup Thêm từ thư viện dữ liệu

Frame: chưa có (tool đoán:CD-KH-040150) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | tieu-de-mo-ta |  |  | — |  |  | Chưa sync | QC |
| `A04.02` | tim-kiem |  |  | — |  |  | Chưa sync | QC |
| `A04.03` | kho |  |  | — |  |  | Chưa sync | QC |
| `A04.04` | cap-do-tu-loai |  |  | — |  |  | Chưa sync | QC |
| `A04.05` | danh-sach |  |  | — |  |  | Chưa sync | QC |
| `A04.06` | them-vao-cum |  |  | — |  | `TC15` | Chưa sync | QC |
| `A04.07` | chan-popup |  |  | — |  |  | Chưa sync | QC |

### `A05` Popup Thêm theo list

Frame: chưa có (tool đoán:CD-KH-040160) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | tieu-de-mo-ta |  |  | — |  |  | Chưa sync | QC |
| `A05.02` | o-van-ban |  |  | — |  |  | Chưa sync | QC |
| `A05.03` | tach-cot-bang |  |  | — |  |  | Chưa sync | QC |
| `A05.04` | ai-tu-dien-con-thieu |  |  | — |  |  | Chưa sync | QC |
| `A05.05` | tu-chia-cum-bang-ai-sau-khi-import |  |  | — |  |  | Chưa sync | QC |
| `A05.06` | xem-truoc |  |  | — |  | `TC17`, `TC18`, `TC19`, `TC19a` | Chưa sync | QC |
| `A05.07` | them-vao-cum |  |  | — |  |  | Chưa sync | QC |
| `A05.08` | chan-popup |  |  | — |  |  | Chưa sync | QC |
| `A05.09` | tu-vung |  |  | — |  |  | Chưa sync | QC |
| `A05.10` | ngu-phap |  |  | — |  |  | Chưa sync | QC |
| `A05.11` | mau-cau |  |  | — |  |  | Chưa sync | QC |
| `A05.12` | han-tu |  |  | — |  |  | Chưa sync | QC |
| `A05.13` | kanji |  |  | — |  |  | Chưa sync | QC |
| `A05.14` | phat-am-tieng-trung |  |  | — |  |  | Chưa sync | QC |
| `A05.15` | bang-chu-tieng-nhat |  |  | — |  |  | Chưa sync | QC |
| `A05.16` | bang-chu-tieng-han |  |  | — |  |  | Chưa sync | QC |

### `A06` Nhập nhanh cuối bảng

Frame: chưa có (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | o-nhap |  |  | — |  | `TC20` | Chưa sync | QC |
| `A06.02` | enter |  |  | — |  | `TC20`, `TC21`, `TC22` | Chưa sync | QC |

### `A07` Menu thao tác dòng và sửa mục

Frame: chưa có (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | sua-nhanh-inline |  |  | — |  | `TC23` | Chưa sync | QC |
| `A07.02` | mo-chi-tiet |  |  | — | see `A08` |  | Chưa sync | QC |
| `A07.03` | dien-thieu-bang-ai |  |  | — |  |  | Chưa sync | QC |
| `A07.04` | them-vao-cum-go-khoi-cum |  |  | — | opens `A05` |  | Chưa sync | QC |
| `A07.05` | nhan-ban |  |  | — |  | `TC25` | Chưa sync | QC |
| `A07.06` | xoa-khoi-danh-sach |  |  | — |  |  | Chưa sync | QC |

### `A08` Chi tiết mục (drawer)

Frame: chưa có (tool đoán:CD-KH-040195) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A08.02` | field-bat-buoc |  |  | — |  |  | Chưa sync | QC |
| `A08.03` | tu-loai |  |  | — |  | `TC25e` | Chưa sync | QC |
| `A08.04` | han-viet |  |  | — |  |  | Chưa sync | QC |
| `A08.05` | tao-lai |  |  | — |  | `TC25c` | Chưa sync | QC |
| `A08.06` | nang-cao |  |  | — |  |  | Chưa sync | QC |
| `A08.07` | audio |  |  | — |  |  | Chưa sync | QC |
| `A08.08` | vi-du |  |  | — |  | `TC25a`, `TC25b`, `TC25e` | Chưa sync | QC |
| `A08.09` | cum |  |  | — | opens `A10` |  | Chưa sync | QC |
| `A08.10` | chan-drawer |  |  | — |  |  | Chưa sync | QC |

### `A09` Chọn nhiều và thao tác hàng loạt

Frame: chưa có (tool đoán:CD-KH-040110, CD-KH-040120) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | da-chon-n-tu |  |  | — |  |  | Chưa sync | QC |
| `A09.02` | chon-tat-ca-n-tu |  |  | — |  |  | Chưa sync | QC |
| `A09.03` | dien-thieu-bang-ai-k |  |  | — |  |  | Chưa sync | QC |
| `A09.04` | them-vao-cum-go-khoi-cum |  |  | — | opens `A09` |  | Chưa sync | QC |
| `A09.05` | xoa-n |  |  | — |  |  | Chưa sync | QC |
| `A09.06` | bo-chon |  |  | — |  | `TC26a` | Chưa sync | QC |

### `A10` Popup Thêm vào cụm / Gỡ khỏi cụm

Frame: chưa có (tool đoán:CD-KH-040125) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A10.02` | tim-cum |  |  | — |  |  | Chưa sync | QC |
| `A10.03` | danh-sach-cum |  |  | — |  |  | Chưa sync | QC |
| `A10.04` | huy-luu |  |  | — |  |  | Chưa sync | QC |

### `A11` Panel Cụm và Số cụm

Frame: chưa có (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A11.01` | tat-ca-cum-badge-n-cum |  |  | — |  |  | Chưa có thiết kế | QC |
| `A11.02` | so-cum |  |  | — |  | `TC30`, `TC30a` | Chưa có thiết kế | QC |
| `A11.03` | chia-cum-bang-ai |  |  | — | opens `A12` |  | Chưa có thiết kế | QC |
| `A11.04` | tim-cum |  |  | — |  |  | Chưa có thiết kế | QC |
| `A11.05` | tat-ca |  |  | — |  |  | Chưa có thiết kế | QC |
| `A11.06` | chua-phan-cum |  |  | — |  |  | Chưa có thiết kế | QC |
| `A11.07` | dong-cum |  |  | — |  | `TC31` | Chưa có thiết kế | QC |
| `A11.08` | popup-lien-ket-bai-hoc |  |  | — |  |  | Chưa có thiết kế | QC |
| `A11.09` | them-cum-moi |  |  | — |  |  | Chưa có thiết kế | QC |

### `A12` Popup Chia cụm bằng AI

Frame: chưa có (tool đoán:CD-KH-040170) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A12.01` | tieu-de-mo-ta |  |  | — |  |  | Chưa sync | QC |
| `A12.02` | pham-vi-chia-cum |  |  | — |  |  | Chưa sync | QC |
| `A12.03` | so-tu-cum |  |  | — |  |  | Chưa sync | QC |
| `A12.04` | goi-y-nhanh |  |  | — |  |  | Chưa sync | QC |
| `A12.05` | yeu-cau-them-cho-ai-prompt |  |  | — |  |  | Chưa sync | QC |
| `A12.06` | tao-de-xuat |  |  | — |  | `TC34` | Chưa sync | QC |
| `A12.07` | de-xuat-cua-ai |  |  | — |  |  | Chưa sync | QC |
| `A12.08` | ghi-chu-pham-vi |  |  | — |  |  | Chưa sync | QC |
| `A12.09` | huy-tao-lai-ap-dung-m-cum |  |  | — |  |  | Chưa sync | QC |

### `A13` AI: Thêm bằng AI, Điền thiếu, Soát lỗi, Tạo lại

Frame: chưa có (tool đoán:CD-KH-040190) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A13.01` | popup-them-bang-ai |  |  | — |  | `TC38a` | Chưa sync | QC |
| `A13.02` | diem-goi-dien-thieu |  |  | — |  |  | Chưa sync | QC |
| `A13.03` | field-chinh-bat-buoc-truoc-khi-dien-thie |  |  | — |  |  | Chưa sync | QC |
| `A13.04` | thanh-tien-do-dien-thieu |  |  | — |  |  | Chưa sync | QC |
| `A13.05` | ket-qua-dien-thieu |  |  | — |  |  | Chưa sync | QC |
| `A13.06` | diem-goi-soat-loi |  |  | — |  |  | Chưa sync | QC |
| `A13.07` | thanh-ket-qua-soat-loi |  |  | — |  |  | Chưa sync | QC |
| `A13.08` | o-ai-nghi-sai |  |  | — |  |  | Chưa sync | QC |
| `A13.09` | tao-lai-chi-tiet-muc |  |  | — |  |  | Chưa sync | QC |

### `A14` Preview mobile

Frame: chưa có (tool đoán:CD-KH-040140) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A14.01` | nut |  |  | — |  |  | Chưa có thiết kế | QC |
| `A14.02` | thiet-bi |  |  | — |  |  | Chưa có thiết kế | QC |
| `A14.03` | tab-dang-the |  |  | — |  |  | Chưa có thiết kế | QC |
| `A14.04` | the |  |  | — |  |  | Chưa có thiết kế | QC |
| `A14.05` | thong-tin-thieu |  |  | — |  |  | Chưa có thiết kế | QC |
| `A14.06` | dieu-huong |  |  | — |  |  | Chưa có thiết kế | QC |

### `A15` Popup xác nhận gỡ mục khỏi khoá

Frame: chưa có (tool đoán:CD-KH-040155) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A15.01` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A15.02` | noi-dung |  |  | — |  |  | Chưa sync | QC |
| `A15.03` | ghi-chu |  |  | — |  |  | Chưa sync | QC |
| `A15.04` | huy |  |  | — |  |  | Chưa sync | QC |
| `A15.05` | xac-nhan-go |  |  | — |  |  | Chưa sync | QC |
| `A15.06` | muc-chua-phan-cum-hoac-cum-chua-lien-ket |  |  | — |  |  | Chưa sync | QC |

### `A16` Cụm liên kết với Chi tiết bài học

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A16.01` | nguon-du-lieu |  |  | — |  |  | Chưa sync | QC |
| `A16.02` | bo-loc-loai |  |  | — |  |  | Chưa sync | QC |
| `A16.03` | tieu-de-khung |  |  | — |  |  | Chưa sync | QC |
| `A16.04` | dong-bo |  |  | — |  |  | Chưa sync | QC |

### `A17` Toast phản hồi CRUD

Frame: chưa có (tool đoán:CD-KH-040100, CD-KH-040200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A17.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC04` | Chưa sync | QC |
| `A17.02` | thong-tin |  |  | — |  |  | Chưa sync | QC |
| `A17.03` | canh-bao |  |  | — |  | `TTC02` | Chưa sync | QC |
| `A17.04` | loi |  |  | — |  |  | Chưa sync | QC |

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
| `REQ08` | Cụm | Mỗi loại có bộ cụm riêng; **số cụm = tổng Số buổi của loại ở Tổng quan (S2)**, hệ thống tự tạo cụm rỗng |
| `REQ09` | Chia cụm bằng AI | AI chia mục vào các cụm đang có theo chủ đề và prompt, đặt tên cụm theo chủ đề; không tạo |
| `REQ10` | AI | 4 nút riêng. (1) `Thêm bằng AI`: tạo mục mới theo prompt, số lượng 1–50 / lần. (2) `Điền thiếu bằng AI`: |
| `REQ11` | Bảng, tìm kiếm, lọc, sắp xếp, kéo thả | Bảng hiện đủ mọi field của loại, cuộn ngang, ghim checkbox / STT / field |
| `REQ12` | Preview và âm thanh | Mọi loại có Preview mobile tái hiện màn học của app học viên cho loại đó; Audio không |
| `REQ13` | Kiến thức trong bài học | Chi tiết bài học không chọn mục; tab Kiến thức chỉ hiển thị mục hiện có của cụm đã |
| `REQ14` | Quyền | Chỉ CD được truy cập và thao tác S1 trong trung tâm đang chọn; kiểm tra cả UI và API. |
| `REQ15` | Phản hồi | Thao tác thay đổi dữ liệu có đúng một Toast theo kết quả; không báo thành công trước khi lưu xong. |
| `EX01` | Ngoại lệ | Dòng Thêm theo list thiếu cột đầu → dòng báo lỗi, không tạo; các dòng hợp lệ khác vẫn thêm được. |
| `EX02` | Ngoại lệ | Nhập nhanh rỗng hoặc chỉ khoảng trắng → không tạo mục. |
| `EX03` | Ngoại lệ | Điền thiếu bằng AI quá 50 mục / lần hoặc Thêm bằng AI số lượng > 50 → UI chặn (nút mờ / báo `Tối đa 50 mục mỗi lần`); API từ chối, không chạy AI. |
| `EX04` | Ngoại lệ | AI lỗi hoặc CD bấm `Dừng` → mục chưa xử lý giữ nguyên; mục đã điền giữ giá trị AI đã lưu; báo lỗi nếu AI |
| `EX05` | Ngoại lệ | Chia cụm bằng AI khi loại chưa có cụm (S2 chưa có buổi cho loại) → không gửi yêu cầu, nhắc nhập Số buổi ở Tổng quan (S2). |
| `EX06` | Ngoại lệ | Role khác CD truy cập S1 hoặc gọi API thay đổi kiến thức → từ chối, không thay đổi dữ liệu. |
| `EX07` | Ngoại lệ | Truy cập tab Bảng chữ ở trung tâm không có hệ chữ riêng (qua URL / API) → từ chối. |
| `EX08` | Ngoại lệ | Truy cập khoá học / kiến thức của trung tâm khác trung tâm đang chọn → từ chối. |
| `EX09` | Ngoại lệ | Lưu thất bại (sửa, cụm, liên kết bài học, áp dụng AI) → giữ dữ liệu cũ, Toast `Có Lỗi Xảy Ra`. |
| `EX10` | Ngoại lệ | Sửa / xoá / đổi cụm mục đang được AI xử lý → UI mờ thao tác; API từ chối, dữ liệu không đổi. |
| `EX11` | Ngoại lệ | Đổi `Số cụm`, thêm hoặc xoá cụm trực tiếp ở S1 (qua UI / API) → ô chỉ đọc, không có nút; API từ chối. Số cụm chỉ đổi qua Số buổi ở S2. |
| `EX13` | Ngoại lệ | Liên kết cụm với bài học đã có cụm cùng loại, hoặc với bài học không thuộc khoá → BE từ chối (409), Toast `Cảnh Báo` nêu cụm đang chiếm; dữ liệu không đổi. |
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
| `TC12c` | Case 12c: Bảng đủ cột, cuộn ngang | Medium |  | REQ11 | `A03` | `A03.01`, `A03.09` |
| `TC12d` | Case 12d: Lọc Nâng cao | Medium |  | REQ11 | `A03` | `A03.08`, `A03.09` |
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
| `TC28a` | Case 28a: Chuyển cụm mục đang hiển thị ở bài học | High |  | Flow 9 / REQ08 | `A10` |  |
| `TC29` | Case 29: Gỡ khỏi cụm | Medium |  | REQ08 | `A10` |  |
| `TC30` | Case 30: Cụm sinh từ S2 | High | Có | Flow 8 / REQ08 | `A11` | `A11.02` |
| `TC31` | Case 31: Liên kết cụm với bài học | High | Có | Flow 8 / REQ08 | `A11` | `A11.07` |
| `TC31a` | Case 31a: Bài đã có cụm cùng loại | High |  | EX13 / REQ08 | `A11` |  |
| `TC31b` | Case 31b: Đổi bài học của cụm | Medium |  | Flow 8 / REQ08 | `A11` |  |
| `TC32` | Case 32: Không xoá cụm tại S1 | Medium |  | REQ08 | `A11` |  |
| `TC30a` | Case 30a: Số cụm luôn chỉ đọc | Medium |  | REQ08 / EX11 | `A11` | `A11.02` |
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
| `TC46` | Case 46: Gỡ mục thuộc cụm đã liên kết bài học | High | Có | Flow 11 / REQ07 | `A15` |  |
| `TC47` | Case 47: Huỷ gỡ | Medium |  | REQ07 | `A15` |  |
| `TC48` | Case 48: Bài học hiện mục của cụm liên kết | High | Có | Flow 12 / REQ13 | `A16` |  |
| `TC49` | Case 49: Thêm mục vào cụm, bài học cập nhật | High | Có | Flow 12 / REQ13 | `A16` |  |
| `TC50` | Case 50: Loại chưa liên kết | Medium |  | REQ13 | `A16` |  |
| `TC51` | Case 51: Không thao tác tại bài học | Medium |  | REQ13 | `A16` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | REQ15 | `A17` | `A17.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | REQ15 | `A17` | `A17.03` |
| `TTC03` | Toast Case 3: Lỗi xử lý | High |  | REQ15 | `A17` |  |
| `TTC04` | Toast Case 4: Đang xử lý | Medium |  | REQ15 | `A17` | `A17.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (124): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A01.08`, `A01.09`, `A01.10`, `A01.11`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A02.08`, `A02.09`, `A02.10`, `A02.11`, `A02.12`, `A02.13`, `A02.14`, `A02.15`, `A02.16`, `A02.17`, `A02.18`, `A02.19`, `A02.20`, `A02.21`, `A02.22`, `A02.23`, `A02.24`, `A02.25`, `A02.26`, `A02.27`, `A02.28`, `A02.29`, `A02.30`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`, `A04.06`, `A04.07`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A05.07`, `A05.08`, `A05.09`, `A05.10`, `A05.11`, `A05.12`, `A05.13`, `A05.14`, `A05.15`, `A05.16`, `A06.01`, `A06.02`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`, `A07.06`, `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.06`, `A08.07`, `A08.08`, `A08.09`, `A08.10`, `A09.01`, `A09.02`, `A09.03`, `A09.04`, `A09.05`, `A09.06`, `A10.01`, `A10.02`, `A10.03`, `A10.04`, `A12.01`, `A12.02`, `A12.03`, `A12.04`, `A12.05`, `A12.06`, `A12.07`, `A12.08`, `A12.09`, `A13.01`, `A13.02`, `A13.03`, `A13.04`, `A13.05`, `A13.06`, `A13.07`, `A13.08`, `A13.09`, `A15.01`, `A15.02`, `A15.03`, `A15.04`, `A15.05`, `A15.06`, `A16.01`, `A16.02`, `A16.03`, `A16.04`, `A17.01`, `A17.02`, `A17.03`, `A17.04`
- Requirement nhắc mã Figma không có (3): `CD-KH-030270`, `CD-KH-030400`, `CD-KH-030540`
- Frame Figma chưa có requirement (10): `CD-KH-040110`, `CD-KH-040120`, `CD-KH-040125`, `CD-KH-040140`, `CD-KH-040150`, `CD-KH-040155`, `CD-KH-040160`, `CD-KH-040170`, `CD-KH-040190`, `CD-KH-040195`
- Phân loại cần design duyệt (6): `CD-KH-040110`, `CD-KH-040120`, `CD-KH-040125`, `CD-KH-040140`, `CD-KH-040190`, `CD-KH-040195`
- Thiếu prototype link đi vào (10): `CD-KH-040110`, `CD-KH-040120`, `CD-KH-040125`, `CD-KH-040140`, `CD-KH-040150`, `CD-KH-040155`, `CD-KH-040160`, `CD-KH-040170`, `CD-KH-040190`, `CD-KH-040195`
- REQ/EX chưa có testcase (1): `EX03`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
