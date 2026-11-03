# Chi tiết lớp học — Menu Bài học

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-030100` | Lớp học / Bài học / Buổi học | `/lop-hoc/bai-hoc/buoi-hoc` | `ADM-LOP-030100-DK` | QC |
| `ADM-LOP-030200` | Lớp học / Bài học / Thông tin | `/lop-hoc/bai-hoc/thong-tin` | `ADM-LOP-030200-DK` | QC |
| `ADM-LOP-030300` | Lớp học / Bài học / Nội dung | `/lop-hoc/bai-hoc/noi-dung` | `ADM-LOP-030300-DK` | QC |
| `ADM-LOP-030400` | Lớp học / Bài học / Tài nguyên | `/lop-hoc/bai-hoc/tai-nguyen` | `ADM-LOP-030400-DK` | QC |
| `ADM-LOP-030500` | Lớp học / Bài học / Kiến thức | `/lop-hoc/bai-hoc/kien-thuc` | `ADM-LOP-030500-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_lessons_requirements.md` — Chi tiết lớp học — Menu Bài học (tiền tố `M-CDL`).

## 2. Luồng

- `FLOW01` Mở menu và chọn bài — `REQ01`, `REQ08`
- `FLOW02` Xem Buổi học — `REQ02`, `REQ07`
- `FLOW03` Xem định nghĩa — `REQ03`, `REQ04`, `REQ09`
- `FLOW04` Click tài nguyên tải ngay — `REQ05`, `REQ08`
- `FLOW05` Tính tỷ lệ theo số học viên — `REQ06`, `REQ08`
- `FLOW06` Xem ghi chú học viên — `REQ10`, `REQ08`
- `FLOW07` Sửa điểm danh sai — `REQ11`, `REQ13`
- `FLOW08` Thêm bài nguồn vào lớp — `REQ12`, `REQ13`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-030401` | Từng mục trống | Trạng thái | ADM-LOP-030400 | ADM-LOP-030400 | — | `/lop-hoc/bai-hoc/tai-nguyen?state=ADM-LOP-030401` | Figma | trung bình |

## 4. Khu vực và item

### `A01` Khung menu và Danh sách bài học

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | card-bai-hoc |  |  | — |  |  | Chưa sync | QC |
| `A01.02` | chon-bai-tab |  |  | — |  |  | Chưa sync | QC |
| `A01.03` | thu-tu-danh-sach |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | giao-vien-va-moc-mo |  |  | — |  | `TC04` | Chưa sync | QC |
| `A01.05` | them-bai-hoc-moi |  |  | — | opens `A01` |  | Chưa sync | QC |
| `A01.06` | tai-du-lieu |  |  | — |  |  | Chưa sync | QC |

### `A02` Tab Buổi học — Bài đã bắt đầu

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | giao-vien-nhan-xet-lop |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | ghi-chu-cua-giao-vien-gui-cho-support |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | ghi-chu-cua-giao-vien-gui-cho-giao-vien- |  |  | — |  |  | Chưa sync | QC |
| `A02.04` | hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A02.05` | di-hoc |  |  | — |  |  | Chưa sync | QC |
| `A02.06` | btvn |  |  | — |  | `TC08`, `TC10` | Chưa sync | QC |
| `A02.07` | ghi-chu-tung-hoc-vien |  |  | — | opens `A03` |  | Chưa sync | QC |

### `A03` Popup Ghi chú từng học viên

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | ghi-chu-tu-giao-vien-cho-hoc-vien |  |  | — |  |  | Chưa sync | QC |
| `A03.02` | ghi-chu-tu-giao-vien-cho-team-support |  |  | — |  |  | Chưa sync | QC |
| `A03.03` | huy |  |  | — |  |  | Chưa sync | QC |
| `A03.04` | du-lieu-trong-loi |  |  | — |  |  | Chưa sync | QC |

### `A04` Sửa điểm danh cho học viên

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | menu-diem-danh |  |  | — |  |  | Chưa sync | QC |
| `A04.02` | lua-chon |  |  | — |  | `TC15` | Chưa sync | QC |
| `A04.03` | chua-diem-danh |  |  | — |  | `TC15` | Chưa sync | QC |
| `A04.04` | search-trang-thai |  |  | — |  |  | Chưa sync | QC |
| `A04.05` | luu |  |  | — |  |  | Chưa sync | QC |
| `A04.06` | ket-qua |  |  | — |  | `TC17` | Chưa sync | QC |
| `A04.07` | dau-vet-sua |  |  | — |  | `TC19` | Chưa sync | QC |

### `A05` Tab Buổi học — Bài học chưa bắt đầu

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | thong-bao |  |  | — |  |  | Chưa sync | QC |
| `A05.02` | du-lieu-buoi |  |  | — |  |  | Chưa sync | QC |
| `A05.03` | cac-tab-khac |  |  | — |  |  | Chưa sync | QC |
| `A05.04` | quyen-thao-tac |  |  | — |  |  | Chưa sync | QC |

### `A06` Tab Thông tin

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | tieu-de |  |  | — |  | `TC23` | Chưa sync | QC |
| `A06.02` | mo-ta |  |  | — |  | `TC23` | Chưa sync | QC |
| `A06.03` | ky-nang |  |  | — |  | `TC23`, `TC24` | Chưa sync | QC |
| `A06.04` | quyen-thao-tac |  |  | — |  |  | Chưa sync | QC |

### `A07` Tab Nội dung

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | khoi-noi-dung |  |  | — |  |  | Chưa sync | QC |
| `A07.02` | thu-tu-khoi |  |  | — |  |  | Chưa sync | QC |
| `A07.03` | du-lieu-chi-tiet |  |  | — |  |  | Chưa sync | QC |
| `A07.04` | thoi-luong |  |  | — |  | `TC26` | Chưa sync | QC |

### `A08` Tab Tài nguyên — Click tải xuống ngay

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | bai-giang-tai-nguyen-khac |  |  | — |  |  | Chưa sync | QC |
| `A08.02` | header-chevron |  |  | — |  |  | Chưa sync | QC |
| `A08.03` | card-tai-nguyen |  |  | — |  |  | Chưa sync | QC |
| `A08.04` | tai-loi-thieu-quyen |  |  | — |  |  | Chưa sync | QC |
| `A08.05` | nguon-tai-nguyen |  |  | — |  |  | Chưa sync | QC |

### `A09` Chỉ số % BTVN và Đi học theo bài

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A09.01` | tap-tinh-va-2-mau-so |  |  | — |  |  | Chưa sync | QC |
| `A09.02` | btvn |  |  | — |  | `TC33`, `TC34`, `TC36`, `TC38`, `TC40`, `TC41`, `TC42` | Chưa sync | QC |
| `A09.03` | di-hoc |  |  | — |  | `TC36`, `TC37`, `TC40`, `TC41`, `TC42` | Chưa sync | QC |
| `A09.04` | lam-tron |  |  | — |  | `TC39` | Chưa sync | QC |
| `A09.05` | khong-co-mau-so |  |  | — |  |  | Chưa sync | QC |
| `A09.06` | bai-chua-bat-dau |  |  | — |  |  | Chưa sync | QC |
| `A09.07` | cap-nhat-sau-sua |  |  | — |  |  | Chưa sync | QC |

### `A10` Popup Thêm bài học mới vào lớp

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | tieu-de |  |  | — |  | `TC49` | Chưa sync | QC |
| `A10.02` | noi-dung |  |  | — |  | `TC49` | Chưa sync | QC |
| `A10.03` | khoa-hoc |  |  | — |  |  | Chưa sync | QC |
| `A10.04` | bai-hoc |  |  | — |  | `TC43` | Chưa sync | QC |
| `A10.05` | mo-ta |  |  | — |  | `TC49`, `TC50` | Chưa sync | QC |
| `A10.06` | huy |  |  | — |  |  | Chưa sync | QC |
| `A10.07` | them |  |  | — |  | `TC43`, `TC45`, `TC46`, `TC47`, `TC48`, `TC50` | Chưa sync | QC |

### `A11` Tab Kiến thức — Để trống

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A11.01` | nhan-tab |  |  | — |  |  | Chưa sync | QC |
| `A11.02` | vung-noi-dung |  |  | — |  | `TC51` | Chưa sync | QC |
| `A11.03` | nguon-kien-thuc |  |  | — |  |  | Chưa sync | QC |

### `A12` Toast phản hồi CRUD

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A12.01` | thanh-cong |  |  | — |  | `TTC01` | Chưa sync | QC |
| `A12.02` | co-loi-xay-ra |  |  | — |  |  | Chưa sync | QC |
| `A12.03` | canh-bao |  |  | — |  | `TTC03` | Chưa sync | QC |
| `A12.04` | thong-bao |  |  | — |  |  | Chưa sync | QC |
| `A12.05` | component |  |  | — |  |  | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Danh sách | Mặc định bài đầu, tải full không phân trang/load-more; card/tiêu đề/tab đúng lớp–bài. Metadata giáo viên/mốc mở từ buổi thực tế. |
| `REQ02` | Buổi học | Nhận xét, ghi chú cho Support, bàn giao giáo viên tiếp theo và học viên đúng nguồn; chưa bắt đầu có thông báo. Điểm BTVN/ghi chú/nhận xét vẫn chỉ đọc; click BTVN/điểm không mở chi tiết. Trạng thái điểm danh được sửa theo REQ11. |
| `REQ03` | Thông tin | Tiêu đề/Kỹ năng từ bài nguồn và Mô tả đang áp dụng cho bài lớp chỉ đọc tại tab; Mô tả nhập lúc thêm không thay Mô tả Curriculum. Số trong ngoặc tag do Curriculum Development Handler thiết lập, hiển thị nguyên giá trị nguồn. |
| `REQ04` | Nội dung | Khối/thứ tự nguồn chỉ đọc; không thực thi/sửa action. Thời lượng kế hoạch không phải thời gian app/buổi thực tế. |
| `REQ05` | Tài nguyên | Video/PPT/Docs/Excel thuộc Bài giảng/Tài nguyên khác; click tải trực tiếp file gốc; không viewer/player/xem trước hoặc click download thêm. Header thu gọn không tải cả nhóm, không upload/xóa nguồn. |
| `REQ06` | Tỷ lệ | Chỉ Đang học/Dự thính của chính bài/buổi. Rời lớp từ bài 6 không loại học viên khỏi 5 bài trước đã học; không lọc ngược lịch sử theo trạng thái lớp hiện tại. N_BTVN gồm tất cả người trong tập này; BTVN = số người nộp duy nhất/N_BTVN × 100, 7/10 = 70.0%, không đợi chấm/đạt điểm. N_Đi_học chỉ gồm người đã điểm danh; loại Chưa điểm danh khỏi tử/mẫu. Đi học = số Có mặt/Trễ/Sớm/Trễ & Sớm/N_Đi_học × 100; Nghỉ CP/KP còn trong mẫu nhưng không trong tử. Làm tròn cuối 1 chữ số thập phân. Mẫu số = 0 để chỉ số đó trống, > 0/tử = 0 là 0.0%. |
| `REQ07` | Ranh giới quyền | Định nghĩa bài/kỹ năng/nội dung/tài nguyên do Curriculum Development Handler quản lý ở chức năng riêng. Menu lớp chỉ đọc nguồn, bổ sung chọn bài nguồn vào lớp và sửa điểm danh; không chấm BTVN hay sửa ghi chú/nhận xét. |
| `REQ08` | Phạm vi | Kiểm tra role/phân công lớp và liên kết nội bộ lớp–bài–buổi–học viên–file/cặp khóa–bài; không ghép theo tên/thứ tự. Không trộn dữ liệu khi đổi ngữ cảnh, tải file trực tiếp cũng kiểm tra quyền. |
| `REQ09` | Kiến thức | Giữ tab nhưng vùng nội dung trống; không đưa UI quản trị kiến thức/kỹ năng nguồn vào phạm vi hiện tại. |
| `REQ10` | Ghi chú học viên | Click icon mở popup có hai vùng Cho Học viên/Cho Team Support, Admin/Class Handler/Support trong lớp được xem, không sửa; Hủy chỉ đóng. |
| `REQ11` | Sửa điểm danh | Cột Đi học hiển thị bộ icon `Trạng thái đi học` kèm tooltip tên trạng thái. Admin/Class Handler/Support có quyền lớp chọn một trong 6 trạng thái UI để sửa điểm danh sai; lưu đúng dòng, có trước/sau/người sửa/thời điểm, cập nhật Đi học sau thành công. Không đổi bài nộp/điểm/nhận xét/giáo viên buổi, không tự thêm reset Chưa điểm danh. |
| `REQ12` | Thêm bài lớp | Admin/Class Handler/Support trong lớp thêm một hoặc nhiều bài bằng popup. Mỗi dòng chọn một khóa rồi một bài thuộc khóa đó; tiêu đề tự lấy đúng bài nguồn và không sửa, chỉ Mô tả được chỉnh. Mỗi dòng thêm một bài lớp, không tạo định nghĩa Curriculum. Validate tất cả dòng, lưu chống lặp và cập nhật danh sách, chưa bắt đầu buổi. |
| `REQ13` | Toast | Thêm bài/sửa điểm danh có một Toast kết quả sau validation/backend; lỗi giữ input/trạng thái cũ. Chỉ xem/chọn bài/tab/xem ghi chú/Hủy/tải file không Toast CRUD. |
| `EX01` | Ngoại lệ | Thử chỉnh định nghĩa Curriculum/nhận xét/ghi chú/điểm BTVN, upload/xóa file → từ chối; quyền thêm bài lớp/sửa điểm danh không cấp các quyền này. |
| `EX02` | Ngoại lệ | Tải lỗi → lỗi/Thử lại, không coi là trống/chưa bắt đầu/0%. |
| `EX03` | Ngoại lệ | Response thuộc lớp/bài/buổi/tab cũ → không ghi đè giao diện hiện tại hoặc lưu dữ liệu sang ngữ cảnh mới. |
| `EX04` | Ngoại lệ | File mất/tải lỗi → báo đúng lý do, không trả file khác hoặc thumbnail; không chuyển sang viewer để thay yêu cầu tải trực tiếp. |
| `EX05` | Ngoại lệ | Thiếu role/phạm vi lớp/bài/buổi/học viên/file → từ chối cả UI/request trực tiếp, không lộ dữ liệu hoặc lưu ngoài quyền. |
| `EX06` | Ngoại lệ | Mẫu số của từng chỉ số = 0 → để chỉ số đó trống, không chia 0; > 0/tử = 0 là 0.0% hợp lệ. Tất cả Chưa điểm danh không bị biến thành vắng/0% Đi học. |
| `EX07` | Ngoại lệ | Sửa điểm danh lỗi/lặp/giá trị sai → không đổi một phần; giữ trạng thái cũ, một Toast lỗi, chỉ lưu trạng thái hợp lệ. |
| `EX08` | Ngoại lệ | Cặp khóa học–bài không hợp lệ hoặc field chưa đúng validation đã chốt → từ chối thêm, báo field/Toast Cảnh Báo; không tạo bài nguồn mới. |
| `EX09` | Ngoại lệ | Thêm bài lỗi/lặp → không nhân bản hoặc thêm một phần, giữ input phù hợp và một Toast kết quả. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mặc định bài đầu và tải full | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Chọn bài và dữ liệu đúng lớp | High | Có | Flow 1 / REQ01 / REQ08 | `A01` |  |
| `TC03` | Case 3: Dữ liệu nguồn vẫn chỉ đọc | High |  | EX01 / REQ07 | `A01` |  |
| `TC04` | Case 4: Metadata giáo viên và thời gian | High |  | REQ01 / REQ08 | `A01` | `A01.04` |
| `TC05` | Case 5: Tải lỗi/rỗng/response cũ | High |  | EX02 / EX03 / REQ08 | `A01` |  |
| `TC06` | Case 6: Chuyển tab trong bài đang chọn | Medium |  | Flow 3 / REQ01 | `A01` |  |
| `TC07` | Case 7: Ba vùng ghi chú lớp theo UI mới | High | Có | Flow 2 / REQ02 | `A02` |  |
| `TC08` | Case 8: Chưa nộp/Chưa chấm/điểm 0 | High |  | REQ02 / REQ06 | `A02` | `A02.06` |
| `TC09` | Case 9: Không sửa điểm BTVN/nhận xét | High |  | EX01 / REQ07 | `A02` |  |
| `TC10` | Case 10: Click BTVN không mở chi tiết | Medium |  | REQ02 | `A02` | `A02.06` |
| `TC11` | Case 11: Mở đúng học viên/bài và hai vùng | High |  | Flow 6 / REQ10 / REQ08 | `A03` |  |
| `TC12` | Case 12: Chỉ đọc và Hủy | High |  | REQ10 / REQ07 | `A03` |  |
| `TC13` | Case 13: Ghi chú trống/lỗi/outside scope | High |  | EX02 / EX05 / REQ10 | `A03` |  |
| `TC14` | Case 14: Ba role được sửa điểm danh đúng phạm vi | High | Có | Flow 7 / REQ11 / REQ08 | `A04` |  |
| `TC15` | Case 15: Menu 6 trạng thái chọn một và search | High |  | REQ11 | `A04` | `A04.02`, `A04.03` |
| `TC53` | Case 53: Icon Đi học đúng trạng thái | High |  | REQ11 | `A04` |  |
| `TC16` | Case 16: Sửa điểm danh ảnh hưởng tỷ lệ | High |  | REQ06 / REQ11 | `A04` |  |
| `TC17` | Case 17: Lỗi/chọn lặp/callback cũ | High |  | EX03 / EX07 / REQ11 | `A04` | `A04.06` |
| `TC18` | Case 18: Chặn role/ngoài lớp/sai học viên | High |  | EX05 / REQ08 / REQ11 | `A04` |  |
| `TC19` | Case 19: Không đổi nhận xét/giáo viên/điểm | High |  | REQ07 / REQ11 | `A04` | `A04.07` |
| `TC20` | Case 20: Chưa bắt đầu đúng thông báo | High |  | Flow 2 / REQ02 | `A05` |  |
| `TC21` | Case 21: Xem nguồn/tải file không mở buổi | Medium |  | REQ02 / REQ05 | `A05` |  |
| `TC22` | Case 22: Phân biệt chưa bắt đầu/lỗi/0% | High |  | EX02 / REQ02 / REQ06 | `A05` |  |
| `TC23` | Case 23: Thông tin khớp nguồn Curriculum | High |  | Flow 3 / REQ03 | `A06` | `A06.01`, `A06.02`, `A06.03` |
| `TC24` | Case 24: Trường chỉ đọc và kỹ năng không tạo mới | High |  | EX01 / REQ03 / REQ07 | `A06` | `A06.03` |
| `TC25` | Case 25: Kỹ năng trống hoặc ngoài ví dụ | Medium |  | REQ03 | `A06` |  |
| `TC26` | Case 26: Đúng khối và thứ tự bài | High |  | Flow 3 / REQ04 | `A07` | `A07.04` |
| `TC27` | Case 27: Nội dung chỉ đọc | High |  | EX01 / REQ04 / REQ07 | `A07` |  |
| `TC28` | Case 28: Nội dung trống và bài khác | Medium |  | REQ04 / REQ08 | `A07` |  |
| `TC29` | Case 29: Click bài giảng tải ngay | High |  | Flow 4 / REQ05 | `A08` |  |
| `TC30` | Case 30: Click video/tài nguyên khác tải ngay | High |  | Flow 4 / REQ05 | `A08` |  |
| `TC31` | Case 31: Đúng file/quyền/trạng thái lỗi | High |  | EX04 / EX05 / REQ05 / REQ08 | `A08` |  |
| `TC32` | Case 32: Thu gọn và nguồn chỉ đọc | Medium |  | REQ05 / REQ07 | `A08` |  |
| `TC33` | Case 33: 7/10 nộp là 70.0% | High |  | Flow 5 / REQ06 | `A09` | `A09.02` |
| `TC34` | Case 34: Chưa chấm/0/nộp lặp | High |  | REQ06 | `A09` | `A09.02` |
| `TC35` | Case 35: Chỉ Đang học/Dự thính | High |  | REQ06 | `A09` |  |
| `TC36` | Case 36: CP/KP giảm % và giữ trong mẫu | High |  | REQ06 | `A09` | `A09.02`, `A09.03` |
| `TC37` | Case 37: Trễ/sớm vẫn tính đi học | High |  | REQ06 | `A09` | `A09.03` |
| `TC38` | Case 38: N = 0 và 0% hợp lệ | High |  | EX06 / REQ06 | `A09` | `A09.02` |
| `TC39` | Case 39: Đúng bài/lớp và làm tròn cuối | High |  | REQ06 / REQ08 | `A09` | `A09.04` |
| `TC40` | Case 40: Loại Chưa điểm danh riêng Đi học | High |  | REQ06 | `A09` | `A09.02`, `A09.03` |
| `TC41` | Case 41: Tất cả chưa điểm danh và sửa lần đầu | High |  | REQ06 / REQ11 | `A09` | `A09.02`, `A09.03` |
| `TC42` | Case 42: Rời lớp bài 6 giữ tỷ lệ 5 bài trước | High |  | Flow 5 / REQ06 | `A09` | `A09.02`, `A09.03` |
| `TC43` | Case 43: Mở popup và chọn khóa/bài | High |  | Flow 8 / REQ12 | `A10` | `A10.04`, `A10.07` |
| `TC44` | Case 44: Bài phụ thuộc khóa học | High |  | EX08 / REQ12 | `A10` |  |
| `TC45` | Case 45: Thêm hợp lệ và chống lặp | High |  | Flow 8 / REQ12 / REQ13 | `A10` | `A10.07` |
| `TC46` | Case 46: Hủy/thiếu cặp nguồn/metadata | High | Có | EX08 / REQ12 | `A10` | `A10.07` |
| `TC47` | Case 47: Thêm lỗi và quyền ngoài lớp | High |  | EX05 / EX09 / REQ12 | `A10` | `A10.07` |
| `TC48` | Case 48: Thêm một hoặc nhiều bài, mỗi dòng chọn nguồn | High |  | Flow 8 / REQ12 | `A10` | `A10.07` |
| `TC49` | Case 49: Tiêu đề tự điền và khóa sửa; Mô tả được sửa | High |  | REQ12 / REQ07 | `A10` | `A10.01`, `A10.02`, `A10.05` |
| `TC50` | Case 50: Nhiều dòng có một dòng thiếu lựa chọn | High |  | EX08 / REQ12 | `A10` | `A10.05`, `A10.07` |
| `TC51` | Case 51: Kiến thức trống theo yêu cầu | High |  | Flow 3 / REQ09 | `A11` | `A11.02` |
| `TC52` | Case 52: Kiến thức không đổi bài hoặc dữ liệu | Medium |  | REQ01 / REQ09 | `A11` |  |
| `TTC01` | Toast Case 1: Thành công đúng thao tác | High |  | REQ13 | `A12` | `A12.01` |
| `TTC02` | Toast Case 2: Lỗi giữ dữ liệu và chống trùng | High |  | EX07 / EX09 / REQ13 | `A12` |  |
| `TTC03` | Toast Case 3: Validation và Hủy/chỉ đọc | Medium |  | REQ13 | `A12` | `A12.03` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (63): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`, `A04.06`, `A04.07`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A06.01`, `A06.02`, `A06.03`, `A06.04`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A09.01`, `A09.02`, `A09.03`, `A09.04`, `A09.05`, `A09.06`, `A09.07`, `A10.01`, `A10.02`, `A10.03`, `A10.04`, `A10.05`, `A10.06`, `A10.07`, `A11.01`, `A11.02`, `A11.03`, `A12.01`, `A12.02`, `A12.03`, `A12.04`, `A12.05`
- Frame Figma chưa có requirement (1): `ADM-LOP-030401`
- Phân loại cần design duyệt (1): `ADM-LOP-030401`
- Thiếu prototype link đi vào (1): `ADM-LOP-030401`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
