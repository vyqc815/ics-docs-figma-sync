# Chi tiết lớp học — Tab Hóa đơn

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-040600` | Lớp học / Cài đặt / Hoá đơn | `/lop-hoc/cai-dat/hoa-don` | `ADM-LOP-040600-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_invoices_requirements.md` — Chi tiết lớp học — Tab Hóa đơn (tiền tố `M-CDI2`).

## 2. Luồng

- `FLOW01` Xem hóa đơn đã dùng — `REQ01`, `REQ02`, `REQ03`, `REQ04`
- `FLOW02` Đồng bộ khi học phí thay đổi — `REQ05`
- `FLOW03` Tải thêm khi cuộn — `REQ07`
- `FLOW04` Lọc hóa đơn theo học viên — `REQ08`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Tab Hóa đơn — Bảng Hóa đơn đã dùng

Frame: `ADM-LOP-040600` (tool đoán:ADM-LOP-040600) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái; `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2389:60695` Atom/Side Tab; `I2389:60700;2177:28936` Nhiệm vụ con | — |  |  | Khớp | QC |
| `A01.02` | tieu-de |  | `2389:60801` Hoá đơn đã dùng | — |  | `TC01` | Khớp | QC |
| `A01.03` | ten-hoa-don |  | `2389:60724` Tên Hoá Đơn | — |  | `TC01` | Khớp | QC |
| `A01.04` | ten-hoc-vien |  |  | — |  | `TC01` | Chưa thấy trên Figma | QC |
| `A01.05` | ngay-tao-hoa-don |  |  | — |  | `TC01` | Chưa thấy trên Figma | QC |
| `A01.06` | gia-tri |  | `2389:60726` Giá Trị | — |  | `TC01`, `TC02` | Khớp | QC |
| `A01.07` | gia-tri-dung-trong-lop |  | `2389:60728` Giá Trị Dùng Trong Lớp | — |  | `TC01` | Khớp | QC |
| `A01.08` | moi-dong |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A02` Filter Học viên và cột Ngày tạo hóa đơn

Frame: `ADM-LOP-040600` (tool đoán:ADM-LOP-040600) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | filter-hoc-vien | `DD/Molecule/Trigger` Size=XS, State=Default | `2527:185007` Filter Học viên | — |  |  | Khớp | QC |
| `A02.02` | chon-nhieu-hoc-vien |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A02.03` | khong-chon-hoc-vien |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A02.04` | cot-ngay-tao-hoa-don |  |  | — |  | `TC23` | Chưa thấy trên Figma | QC |
| `A02.05` | ket-qua-rong |  |  | — |  | `TC26` | Chưa thấy trên Figma | QC |

### `A03` Cột Giá trị và Giá trị dùng trong lớp

Frame: `ADM-LOP-040600` (tool đoán:ADM-LOP-040600) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | gia-tri |  | `2389:60726` Giá Trị | — |  | `TC05`, `TC06`, `TC07`, `TC09` | Khớp | QC |
| `A03.02` | gia-tri-dung-trong-lop |  | `2389:60728` Giá Trị Dùng Trong Lớp | — |  | `TC05` | Khớp | QC |
| `A03.03` | dinh-dang |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A04` Trạng thái tải, rỗng, lỗi và đồng bộ

Frame: `ADM-LOP-040600` (tool đoán:ADM-LOP-040600) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | loading |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.02` | rong |  | `2389:60728` Giá Trị Dùng Trong Lớp | — |  | `TC10`, `TC12` | Khớp | QC |
| `A04.03` | loi |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A04.04` | dong-bo |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `A05` Load-more danh sách hóa đơn

Frame: `ADM-LOP-040600` (tool đoán:ADM-LOP-040600) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | vung-cuon |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A05.02` | loading-cuoi-bang |  |  | — |  |  | Chưa thấy trên Figma | QC |
| `A05.03` | loi-tai-them |  |  | — |  | `TC17` | Chưa thấy trên Figma | QC |
| `A05.04` | het-du-lieu |  |  | — |  |  | Chưa thấy trên Figma | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-040600` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2389:60696` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | avatar | `Avatar` Size=28 | `2527:184986` Avatar | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-chip | `Atom/Chip` Type=TỔNG DOANH THU | `3561:76398` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:229045` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | account | `ACCOUNT` Size=Default | `3497:51316` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Chỉ xem | Tab hiển thị thông tin hóa đơn và học phí; không CRUD và không mở popup chỉnh sửa từ dòng. |
| `REQ02` | Danh sách | Chỉ hóa đơn đã dùng cho lớp hiện tại; một dòng mỗi invoice_id, không gộp theo tên. |
| `REQ03` | Giá trị tiền | Giá trị là tổng giá trị hóa đơn. Giá trị dùng trong lớp là tổng học phí ghi nhận từ hóa đơn cho lớp hiện tại; không phải số dư hoặc tổng dùng ở mọi lớp. |
| `REQ04` | Hiển thị | Tên dài xuống dòng, tiền VND căn phải với dấu phân cách hàng nghìn; layout đọc được trên các kích thước màn hình. |
| `REQ05` | Đồng bộ | Mở/tải lại tab hiển thị dữ liệu mới nhất đã lưu; không nhân đôi giao dịch hoặc dùng dữ liệu ngoài class_id. |
| `REQ06` | Quyền và bảo mật | Chỉ Admin/Class Handler/Support được xem trong phạm vi lớp; Teacher và mọi role khác bị chặn tại UI và API. Nội dung tên hóa đơn hiển thị an toàn, không thực thi HTML/script. |
| `REQ07` | Load-more | Cuộn gần cuối tự tải nhóm hóa đơn tiếp theo; không phân trang số. Giữ vị trí cuộn, chống request/dòng trùng, hỗ trợ thử lại và dừng khi hết dữ liệu. |
| `REQ08` | Học viên | Bổ sung cột Tên học viên và filter Học viên chọn một hoặc nhiều người theo quan hệ student_id với hóa đơn đã dùng trong lớp. Nhiều người áp dụng OR giữa các student_id; không chọn thì không giới hạn theo học viên. Lọc toàn bộ dữ liệu trước load-more; đổi/bỏ lựa chọn phải reset kết quả và cursor, tải thêm/retry theo đúng tập đã chọn. Không suy ra học viên từ tên hóa đơn và không bỏ dữ liệu lịch sử do trạng thái Rời lớp / Nghỉ học / Xóa mềm. |
| `REQ09` | Ngày tạo hóa đơn | Bổ sung cột chỉ xem ngày tạo gốc Cơm Gạo đồng bộ sang ICS, không dùng ngày đồng bộ, ngày học phí hoặc ngày sửa. **Không có filter ngày tạo hóa đơn**, không gửi điều kiện ngày trong request lọc. Thiếu ngày tạo thì đánh dấu cột không khả dụng, không tự thay ngày hoặc loại hóa đơn khỏi bảng. |
| `EX01` | Ngoại lệ | Chưa có hóa đơn dùng trong lớp → hiển thị empty state. |
| `EX02` | Ngoại lệ | API lỗi/hết thời gian chờ → hiển thị lỗi và Thử lại; không biến lỗi thành số 0. |
| `EX03` | Ngoại lệ | Response lớp cũ về muộn → bỏ response không còn phù hợp class_id hiện tại. |
| `EX04` | Ngoại lệ | Người dùng không có quyền xem tài chính hoặc ngoài phạm vi lớp → từ chối truy cập; không trả tên hóa đơn và tiền. |
| `EX05` | Ngoại lệ | Dữ liệu hóa đơn thiếu hoặc không nhất quán → báo trạng thái dữ liệu không khả dụng; không tự suy ra giá trị hóa đơn từ tổng học phí. |
| `EX06` | Ngoại lệ | Tải thêm thất bại → giữ các dòng hiện có và cursor chưa thành công; hiển thị Thử lại ở cuối bảng. |
| `EX07` | Ngoại lệ | Response bộ lọc cũ trả về sau khi đổi điều kiện → bỏ response, không nối hoặc ghi đè kết quả bộ lọc hiện tại. |
| `EX08` | Ngoại lệ | Lớp có hóa đơn nhưng không khớp bộ lọc → hiển thị empty state theo bộ lọc; không báo lớp chưa có hóa đơn. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở đúng bảng hóa đơn của lớp | High | Có | Flow 1 / REQ01 / REQ08–REQ09 | `A01` | `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07` |
| `TC02` | Case 2: Một hóa đơn chỉ hiển thị một dòng | High |  | REQ02 | `A01` | `A01.06` |
| `TC03` | Case 3: Tab chỉ xem | High |  | REQ01 | `A01` |  |
| `TC04` | Case 4: Giữ dữ liệu khi học viên không còn học | High |  | REQ02 | `A01` |  |
| `TC20` | Case 20: Hiển thị cột Tên học viên từ quan hệ dữ liệu | High |  | REQ08 | `A02` |  |
| `TC21` | Case 21: Lọc một học viên trên toàn bộ dữ liệu | High |  | Flow 4 / REQ08 | `A02` |  |
| `TC22` | Case 22: Phân biệt học viên trùng tên | High |  | REQ08 | `A02` |  |
| `TC23` | Case 23: Hiển thị ngày tạo gốc Cơm Gạo | High |  | REQ09 | `A02` | `A02.04` |
| `TC24` | Case 24: Lọc nhiều học viên | High |  | Flow 4 / REQ08 | `A02` |  |
| `TC25` | Case 25: Reset load-more khi đổi bộ lọc | High |  | REQ07–REQ08 / EX07 | `A02` |  |
| `TC26` | Case 26: Không có kết quả và bỏ điều kiện lọc | Medium |  | REQ08 / EX08 | `A02` | `A02.05` |
| `TC27` | Case 27: Lọc được học viên đã rời/nghỉ/xóa mềm | High |  | REQ02 / REQ08 | `A02` |  |
| `TC28` | Case 28: Thiếu ngày tạo gốc không dùng ngày đồng bộ thay thế | High |  | REQ09 / EX05 | `A02` |  |
| `TC29` | Case 29: Ngày tạo chỉ là cột hiển thị, không có filter | High |  | REQ09 | `A02` |  |
| `TC05` | Case 5: Phân biệt giá trị hóa đơn và học phí | High |  | REQ03 | `A03` | `A03.01`, `A03.02` |
| `TC06` | Case 6: Cộng nhiều lần học phí từ cùng hóa đơn | High |  | Flow 2 / REQ03 | `A03` | `A03.01` |
| `TC07` | Case 7: Một hóa đơn dùng ở nhiều lớp | High |  | REQ03 | `A03` | `A03.01` |
| `TC08` | Case 8: Hai hóa đơn trùng tên | High |  | REQ02–REQ03 | `A03` |  |
| `TC09` | Case 9: Định dạng tiền và tên dài | Medium |  | REQ04 | `A03` | `A03.01` |
| `TC10` | Case 10: Chưa có hóa đơn dùng trong lớp | Medium |  | EX01 | `A04` | `A04.02` |
| `TC11` | Case 11: Tải thất bại và thử lại | High |  | EX02 | `A04` |  |
| `TC12` | Case 12: Cập nhật sau khi thêm học phí | High |  | Flow 2 / REQ05 | `A04` | `A04.02` |
| `TC13` | Case 13: Response lớp cũ trả về muộn | High |  | EX03 | `A04` |  |
| `TC14` | Case 14: Chặn xem dữ liệu tài chính ngoài quyền | High |  | EX04 / REQ06 | `A04` |  |
| `TC15` | Case 15: Cuộn tải thêm hóa đơn | High |  | Flow 3 / REQ07 | `A05` |  |
| `TC16` | Case 16: Chống request và dòng trùng | High |  | REQ07 | `A05` |  |
| `TC17` | Case 17: Tải thêm lỗi và thử lại | High |  | EX06 / REQ07 | `A05` | `A05.03` |
| `TC18` | Case 18: Dừng khi hết hóa đơn | Medium |  | REQ07 | `A05` |  |
| `TC19` | Case 19: Teacher và role khác không được xem tab | High |  | REQ06 / EX04 | `A05` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa thấy trên Figma (15): `A01.04`, `A01.05`, `A01.08`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A03.03`, `A04.01`, `A04.03`, `A04.04`, `A05.01`, `A05.02`, `A05.03`, `A05.04`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
