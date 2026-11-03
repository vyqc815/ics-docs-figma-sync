# Chi tiết lớp học — Tab KPI của Phụ trách lớp

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-040700` | Lớp học / Cài đặt / KPI | `/lop-hoc/cai-dat/kpi` | `ADM-LOP-040700-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_kpi_requirements.md` — Chi tiết lớp học — Tab KPI của Phụ trách lớp (tiền tố `M-CDK`).

## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-040710` | Popup chỉnh sửa KPI | Popup | ADM-LOP-040700 | ADM-LOP-040700 | — | `/lop-hoc/cai-dat/kpi?popup=ADM-LOP-040710` | Figma | cao |
| `ADM-LOP-040712` | Đang mở | Dropdown | ADM-LOP-040710 | ADM-LOP-040700 | — | `/lop-hoc/cai-dat/kpi?popup=ADM-LOP-040712` | Figma | cao |

## 4. Khu vực và item

### `A01` Tab KPI — Danh sách và tìm kiếm

Frame: `ADM-LOP-040700` (tool đoán:ADM-LOP-040700) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | cai-dat-kpi-va |  |  | — | opens `A01` |  | Chưa khớp tự động | QC |
| `A01.02` | tim-kiem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.03` | ten |  | `2389:60832` Tên | — |  |  | Khớp | QC |
| `A01.04` | ngay-ghi-nhan |  | `2389:60834` Ngày Ghi Nhận | — |  |  | Khớp | QC |
| `A01.05` | trang-thai |  | `2389:60836` Trạng Thái | — |  | `TC04` | Khớp | QC |
| `A01.06` | so-tien |  | `2389:60838` Số Tiền | — |  |  | Khớp | QC |
| `A01.07` | ghi-chu |  | `2389:60840` Ghi Chú | — |  |  | Khớp | QC |
| `A01.08` | ngay-cap-nhat |  | `2389:60842` Ngày Cập Nhật | — |  |  | Khớp | QC |
| `A01.09` | x |  |  | — |  |  | Chưa khớp tự động | QC |

### `A02` Popup thêm và chỉnh sửa KPI

Frame: `ADM-LOP-040710` (tool đoán:ADM-LOP-040710) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | nguoi-nhan |  |  | — |  | `TC05` | Chưa khớp tự động | QC |
| `A02.02` | so-tien |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.03` | dung-gia-tri-goc |  |  | — |  | `TC08` | Chưa khớp tự động | QC |
| `A02.04` | thoi-gian-thuc-hien | `Atom/Label`  | `2925:24906` Atom/Label | — |  |  | Khớp | QC |
| `A02.05` | trang-thai | `Atom/Label`  | `2911:43672` Atom/Label | — |  |  | Khớp | QC |
| `A02.06` | ten-mo-ta-gia-tri-goc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.07` | huy-bo |  |  | — |  | `TC08` | Chưa khớp tự động | QC |
| `A02.08` | them-cap-nhat |  |  | — |  |  | Chưa khớp tự động | QC |

### `A03` Dropdown trạng thái và xác nhận

Frame: `ADM-LOP-040712` (tool đoán:ADM-LOP-040700) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | moi | `DD/Molecule/Trigger` Size=M, State=Open | `2245:107779` DD/Molecule/Trigger | — |  |  | Khớp | QC |
| `A03.02` | da-xac-nhan | `DD/Molecule/Menu Item` Type=Default, State=Default, Size=M | `I2245:107799;2015:31432;2245:107802` DD/Molecule/Menu Item | — |  | `TC11` | Khớp | QC |
| `A03.03` | da-huy | `DD/Molecule/Menu Item` Type=Default, State=Default, Size=M | `I2245:107799;2015:31432;2245:107803` DD/Molecule/Menu Item | — |  | `TC12` | Khớp | QC |
| `A03.04` | da-xoa | `DD/Molecule/Menu Item` Type=Default, State=Default, Size=M | `I2245:107799;2015:31432;2245:107804` DD/Molecule/Menu Item | — |  |  | Khớp | QC |

### `A04` Xóa khoản KPI

Frame: `ADM-LOP-040700` (tool đoán:ADM-LOP-040700) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | popup |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.02` | huy-bo |  |  | — |  | `TC15` | Chưa khớp tự động | QC |
| `A04.03` | xac-nhan-xoa |  |  | — |  |  | Chưa khớp tự động | QC |

### `A05` Ghi chú, lịch sử và Copy

Frame: `ADM-LOP-040700` (tool đoán:ADM-LOP-040700) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | popup-ghi-chu |  |  | — |  | `TC18` | Chưa khớp tự động | QC |
| `A05.02` | o-nhap-noi-dung-textarea |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.03` | luu-noi-dung |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.04` | icon-lich-su |  |  | — | opens `A05` | `TC18`, `TC25` | Chưa khớp tự động | QC |
| `A05.05` | moi-phien-ban |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.06` | copy |  |  | — |  | `TC18` | Chưa khớp tự động | QC |

### `A06` Tổng chi PTL

Frame: `ADM-LOP-040700` (tool đoán:ADM-LOP-040700) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | chi-phi-ptl-cua-lop |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.02` | tong-chi-ptl |  |  | — |  |  | Chưa khớp tự động | QC |

### `A07` Toast và trạng thái tải

Frame: `ADM-LOP-040700` (tool đoán:ADM-LOP-040700) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | loading-rong-loi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.02` | thanh-cong |  |  | — |  | `TC22` | Chưa khớp tự động | QC |
| `A07.03` | canh-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.04` | co-loi-xay-ra |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.05` | thong-bao |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-040700` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2389:60804` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-icon-button | `Atom/Icon Button`  | `2389:60875` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `2384:53068` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-chip | `Atom/Chip` Type=TỔNG DOANH THU | `3778:3543` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:228819` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | account | `ACCOUNT` Size=Default | `3497:51457` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` |  | Chỉ Admin/Class Handler xem và CRUD/xác nhận; tự xác nhận KPI được phép. |
| `REQ02` |  | Mỗi khoản một dòng; search tên Handler; giữ Hủy, ẩn Xóa. |
| `REQ03` |  | Một người mỗi khoản; nhiều khoản/người; tiền tùy ý, giá trị gốc, ngày thực hiện và ngày cập nhật riêng. |
| `REQ04` |  | Bốn trạng thái; xác nhận khóa khoản, không mở lại/đảo. |
| `REQ05` |  | Xóa có xác nhận, xóa mềm khoản chưa xác nhận. |
| `REQ06` |  | UI ghi chú giống tab Học viên: click icon mở popup có ô gõ/chỉnh nhiều dòng và icon lịch sử; dữ liệu theo class_id + kpi_id, lịch sử người/thời điểm và Copy từng bản; chỉ Admin/Class Handler, khoản xác nhận chỉ đọc. |
| `REQ07` |  | Cộng tiền thực tế của KPI xác nhận vào chi PTL; tổng toàn bộ lớp thỏa filter. |
| `REQ08` |  | Toast CRUD, tải/rỗng/lỗi rõ ràng. |
| `EX01` | Ngoại lệ | Sai role/ngoài phạm vi → chặn API/dữ liệu. |
| `EX02` | Ngoại lệ | Thiếu/sai người nhận, nhiều người, tiền hoặc ngày/giờ không đọc/lưu được → lỗi đúng field, không lưu một phần. |
| `EX03` | Ngoại lệ | Đã xác nhận bị sửa/hủy/xóa → từ chối; không đảo KPI/bảng lương. |
| `EX04` | Ngoại lệ | Request lặp hoặc xung đột version → một kết quả; không sửa khoản vừa khóa hoặc cộng chi phí lặp. |
| `EX05` | Ngoại lệ | Lỗi lưu → giữ dữ liệu cũ/draft, cho thử lại. |
| `EX06` | Ngoại lệ | Response search/lớp cũ → bỏ qua. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở đúng lớp và quyền | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Chặn role khác | High |  | EX01 / REQ01 | `A01` |  |
| `TC03` | Case 3: Search tên Handler | High |  | REQ02 | `A01` |  |
| `TC04` | Case 4: Nhiều khoản cho một người | High |  | REQ02 | `A01` | `A01.05` |
| `TC05` | Case 5: Thêm với một Handler | High | Có | Flow 2 / REQ03 | `A02` | `A02.01` |
| `TC06` | Case 6: Chặn nhiều người hoặc role sai | High |  | EX02 / REQ03 | `A02` |  |
| `TC07` | Case 7: Tiền khác giá trị gốc | High |  | REQ03 | `A02` |  |
| `TC08` | Case 8: Dùng giá trị gốc rồi Hủy bỏ | Medium |  | REQ03 | `A02` | `A02.03`, `A02.07` |
| `TC09` | Case 9: Hai mốc ngày độc lập | High |  | REQ03 | `A02` |  |
| `TC10` | Case 10: Khóa khoản xác nhận | High |  | EX03 / REQ04 | `A02` |  |
| `TC11` | Case 11: Tự xác nhận KPI | High |  | Flow 3 / REQ04 | `A03` | `A03.02` |
| `TC12` | Case 12: Đã hủy vẫn hiển thị | High |  | REQ04 | `A03` | `A03.03` |
| `TC13` | Case 13: Không mở lại khoản xác nhận | High |  | EX03 / REQ04 | `A03` |  |
| `TC14` | Case 14: Sửa đồng thời với xác nhận | High |  | EX04 / REQ04 | `A03` |  |
| `TC15` | Case 15: Hủy popup xóa | Medium |  | Flow 4 / REQ05 | `A04` | `A04.02` |
| `TC16` | Case 16: Xóa mềm và ẩn | High |  | Flow 4 / REQ05 | `A04` |  |
| `TC17` | Case 17: Sửa ghi chú đúng khoản | High |  | Flow 5 / REQ06 | `A05` |  |
| `TC18` | Case 18: Lịch sử và Copy | Medium |  | REQ06 | `A05` | `A05.01`, `A05.04`, `A05.06` |
| `TC25` | Case 25: Popup và ô gõ giống tab Học viên | High |  | Flow 5 / REQ06 | `A05` | `A05.04` |
| `TC26` | Case 26: Xung đột hoặc lỗi lưu ghi chú | High |  | EX04–EX05 / REQ06 | `A05` |  |
| `TC19` | Case 19: Chỉ cộng xác nhận | High |  | REQ07 | `A06` |  |
| `TC20` | Case 20: Tổng theo filter lớp | High |  | REQ07 | `A06` |  |
| `TC21` | Case 21: Xác nhận lặp | High |  | EX04 / REQ07 | `A06` |  |
| `TC22` | Case 22: Toast thành công | Medium |  | REQ08 | `A07` | `A07.02` |
| `TC23` | Case 23: Lưu lỗi | High |  | EX05 / REQ08 | `A07` |  |
| `TC24` | Case 24: Search response cũ | High |  | EX06 / REQ02 | `A07` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (25): `A01.01`, `A01.02`, `A01.09`, `A02.01`, `A02.02`, `A02.03`, `A02.06`, `A02.07`, `A02.08`, `A04.01`, `A04.02`, `A04.03`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A06.01`, `A06.02`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`
- Frame Figma chưa có requirement (2): `ADM-LOP-040710`, `ADM-LOP-040712`
- Thiếu prototype link đi vào (1): `ADM-LOP-040710`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
