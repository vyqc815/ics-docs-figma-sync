# Chi tiết lớp học — Tab OT của Phụ trách lớp

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-040800` | Lớp học / Cài đặt / OT | `/lop-hoc/cai-dat/ot` | `ADM-LOP-040800-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_ot_requirements.md` — Chi tiết lớp học — Tab OT của Phụ trách lớp (tiền tố `M-CDO`).

## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-LOP-040810` | Popup chỉnh sửa OT | Popup | ADM-LOP-040800 | ADM-LOP-040800 | — | `/lop-hoc/cai-dat/ot?popup=ADM-LOP-040810` | Figma | cao |
| `ADM-LOP-040812` | Đang mở | Dropdown | ADM-LOP-040810 | ADM-LOP-040800 | — | `/lop-hoc/cai-dat/ot?popup=ADM-LOP-040812` | Figma | cao |

## 4. Khu vực và item

### `A01` Tab OT — Danh sách và tìm kiếm

Frame: `ADM-LOP-040800` (tool đoán:ADM-LOP-040800) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | cai-dat-ot-va |  |  | — | opens `A01` |  | Chưa khớp tự động | QC |
| `A01.02` | tim-kiem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.03` | ten |  | `2401:12876` Tên | — |  |  | Khớp | QC |
| `A01.04` | ngay-ghi-nhan |  | `2401:12878` Ngày Ghi Nhận | — |  |  | Khớp | QC |
| `A01.05` | trang-thai |  | `2401:12880` Trạng Thái | — |  | `TC04` | Khớp | QC |
| `A01.06` | so-tien |  | `2401:12882` Số Tiền | — |  |  | Khớp | QC |
| `A01.07` | ghi-chu |  | `2401:12884` Ghi Chú | — |  |  | Khớp | QC |
| `A01.08` | ngay-cap-nhat |  | `2401:12886` Ngày Cập Nhật | — |  |  | Khớp | QC |
| `A01.09` | x |  |  | — |  |  | Chưa khớp tự động | QC |

### `A02` Popup thêm và chỉnh sửa OT

Frame: `ADM-LOP-040810` (tool đoán:ADM-LOP-040810) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | nguoi-nhan |  |  | — |  | `TC05` | Chưa khớp tự động | QC |
| `A02.02` | so-tien |  |  | — |  | `TC08` | Chưa khớp tự động | QC |
| `A02.03` | thoi-gian-thuc-hien | `Atom/Label`  | `2925:24983` Atom/Label | — |  |  | Khớp | QC |
| `A02.04` | trang-thai | `Atom/Label`  | `2925:24988` Atom/Label | — |  | `TC05` | Khớp | QC |
| `A02.05` | thong-tin-ot |  | `2402:67801` Thông tin OT: | — |  | `TC08` | Khớp | QC |
| `A02.06` | huy-bo |  |  | — |  | `TC08` | Chưa khớp tự động | QC |
| `A02.07` | cap-nhat | `Atom/Button` Type=Primary, Size=Medium | `I2527:167480;2514:153363` Atom/Button | — |  | `TC05`, `TC09` | Khớp | QC |

### `A03` Dropdown trạng thái và xác nhận

Frame: `ADM-LOP-040800` (tool đoán:ADM-LOP-040800) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | moi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.02` | da-xac-nhan |  |  | — |  | `TC11` | Chưa khớp tự động | QC |
| `A03.03` | da-huy |  |  | — |  | `TC12` | Chưa khớp tự động | QC |
| `A03.04` | da-xoa |  |  | — |  |  | Chưa khớp tự động | QC |

### `A04` Xóa khoản OT

Frame: `ADM-LOP-040800` (tool đoán:ADM-LOP-040800) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | popup |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.02` | huy-bo |  |  | — |  | `TC15` | Chưa khớp tự động | QC |
| `A04.03` | xac-nhan-xoa |  |  | — |  |  | Chưa khớp tự động | QC |

### `A05` Ghi chú, lịch sử và Copy

Frame: `ADM-LOP-040800` (tool đoán:ADM-LOP-040800) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | popup-ghi-chu |  |  | — |  | `TC18` | Chưa khớp tự động | QC |
| `A05.02` | o-nhap-noi-dung-textarea |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.03` | luu-noi-dung |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.04` | icon-lich-su |  |  | — | opens `A05` | `TC18`, `TC25` | Chưa khớp tự động | QC |
| `A05.05` | moi-phien-ban |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.06` | copy |  |  | — |  | `TC18` | Chưa khớp tự động | QC |

### `A06` Tách OT khỏi Chi phí PTL trên danh sách lớp

Frame: `ADM-LOP-040800` (tool đoán:ADM-LOP-040800) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | chi-phi-ptl-cua-lop |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.02` | tong-chi-ptl |  |  | — |  | `TC20` | Chưa khớp tự động | QC |
| `A06.03` | chi-so-ot-tai-danh-sach-lop |  |  | — |  |  | Chưa khớp tự động | QC |

### `A07` Toast và trạng thái tải

Frame: `ADM-LOP-040800` (tool đoán:ADM-LOP-040800) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | loading-rong-loi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.02` | thanh-cong |  |  | — |  | `TC22` | Chưa khớp tự động | QC |
| `A07.03` | canh-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.04` | co-loi-xay-ra |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.05` | thong-bao |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-040800` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `2401:12860` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-icon-button | `Atom/Icon Button`  | `2401:12871` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `2401:12872` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-chip | `Atom/Chip` Type=TỔNG DOANH THU | `3778:3545` Atom/Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:228593` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | account | `ACCOUNT` Size=Default | `3497:51598` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` |  | Chỉ Admin/Class Handler xem và CRUD/xác nhận; tự xác nhận OT được phép. |
| `REQ02` |  | Mỗi khoản một dòng; search tên Handler; giữ Hủy, ẩn Xóa. |
| `REQ03` |  | Một người mỗi khoản; nhiều khoản/người; tiền tùy ý, khối Thông tin OT chỉ đọc với giá trị gốc, không có nút Dùng giá trị gốc; ngày thực hiện và ngày cập nhật riêng. |
| `REQ04` |  | Bốn trạng thái; xác nhận khóa khoản, không mở lại/đảo. |
| `REQ05` |  | Xóa có xác nhận, xóa mềm khoản chưa xác nhận. |
| `REQ06` |  | UI ghi chú giống tab Học viên: click icon mở popup có ô gõ/chỉnh nhiều dòng và icon lịch sử; dữ liệu theo class_id + ot_id, lịch sử người/thời điểm và Copy từng bản; chỉ Admin/Class Handler, khoản xác nhận chỉ đọc. |
| `REQ07` |  | Tách OT khỏi KPI; không hiển thị/cộng OT vào Chi phí PTL/Tổng chi PTL ở danh sách lớp, bất kể trạng thái. |
| `REQ08` |  | Toast CRUD, tải/rỗng/lỗi rõ ràng. |
| `EX01` | Ngoại lệ | Sai role/ngoài phạm vi → chặn API/dữ liệu. |
| `EX02` | Ngoại lệ | Thiếu/sai người nhận, nhiều người, tiền hoặc ngày/giờ không đọc/lưu được → lỗi đúng field, không lưu một phần. |
| `EX03` | Ngoại lệ | Đã xác nhận bị sửa/hủy/xóa → từ chối; không đảo OT/bảng lương. |
| `EX04` | Ngoại lệ | Request lặp hoặc xung đột version → một kết quả; không sửa khoản vừa khóa hoặc tạo trùng OT/audit. |
| `EX05` | Ngoại lệ | Lỗi lưu → giữ dữ liệu cũ/draft, cho thử lại. |
| `EX06` | Ngoại lệ | Response search/lớp cũ → bỏ qua. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở đúng lớp và quyền | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Chặn role khác | High |  | EX01 / REQ01 | `A01` |  |
| `TC03` | Case 3: Search tên Handler | High |  | REQ02 | `A01` |  |
| `TC04` | Case 4: Nhiều khoản cho một người | High |  | REQ02 | `A01` | `A01.05` |
| `TC05` | Case 5: Gắn OT với một Handler | High | Có | Flow 2 / REQ03 | `A02` | `A02.01`, `A02.04`, `A02.07` |
| `TC06` | Case 6: Chặn nhiều người hoặc role sai | High |  | EX02 / REQ03 | `A02` |  |
| `TC07` | Case 7: Tiền khác giá trị gốc | High |  | REQ03 | `A02` |  |
| `TC08` | Case 8: Đúng UI OT và Hủy bỏ draft | Medium |  | REQ03 | `A02` | `A02.02`, `A02.05`, `A02.06` |
| `TC09` | Case 9: Hai mốc ngày độc lập | High |  | REQ03 | `A02` | `A02.07` |
| `TC10` | Case 10: Khóa khoản xác nhận | High |  | EX03 / REQ04 | `A02` |  |
| `TC11` | Case 11: Tự xác nhận OT | High |  | Flow 3 / REQ04 | `A03` | `A03.02` |
| `TC12` | Case 12: Đã hủy vẫn hiển thị | High |  | REQ04 | `A03` | `A03.03` |
| `TC13` | Case 13: Không mở lại khoản xác nhận | High |  | EX03 / REQ04 | `A03` |  |
| `TC14` | Case 14: Sửa đồng thời với xác nhận | High |  | EX04 / REQ04 | `A03` |  |
| `TC15` | Case 15: Hủy popup xóa | Medium |  | Flow 4 / REQ05 | `A04` | `A04.02` |
| `TC16` | Case 16: Xóa mềm và ẩn | High |  | Flow 4 / REQ05 | `A04` |  |
| `TC17` | Case 17: Sửa ghi chú đúng khoản | High |  | Flow 5 / REQ06 | `A05` |  |
| `TC18` | Case 18: Lịch sử và Copy | Medium |  | REQ06 | `A05` | `A05.01`, `A05.04`, `A05.06` |
| `TC25` | Case 25: Popup và ô gõ giống tab Học viên | High |  | Flow 5 / REQ06 | `A05` | `A05.04` |
| `TC26` | Case 26: Xung đột hoặc lỗi lưu ghi chú | High |  | EX04–EX05 / REQ06 | `A05` |  |
| `TC19` | Case 19: OT xác nhận không cộng chi PTL | High |  | REQ07 | `A06` |  |
| `TC20` | Case 20: CRUD OT không đổi tổng theo filter | High |  | REQ07 | `A06` | `A06.02` |
| `TC21` | Case 21: Xác nhận OT lặp | High |  | EX04 / REQ07 | `A06` |  |
| `TC22` | Case 22: Toast thành công | Medium |  | REQ08 | `A07` | `A07.02` |
| `TC23` | Case 23: Lưu lỗi | High |  | EX05 / REQ08 | `A07` |  |
| `TC24` | Case 24: Search response cũ | High |  | EX06 / REQ02 | `A07` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (27): `A01.01`, `A01.02`, `A01.09`, `A02.01`, `A02.02`, `A02.06`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A04.01`, `A04.02`, `A04.03`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A06.01`, `A06.02`, `A06.03`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`
- Frame Figma chưa có requirement (2): `ADM-LOP-040810`, `ADM-LOP-040812`
- Thiếu prototype link đi vào (1): `ADM-LOP-040810`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
