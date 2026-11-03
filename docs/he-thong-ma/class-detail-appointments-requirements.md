# Chi tiết lớp học — Menu Nhật ký — Tab Lịch hẹn

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-050100` | Lớp học / Nhật ký / Nhật ký | `/lop-hoc/nhat-ky/nhat-ky` | `ADM-LOP-050100-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_appointments_requirements.md` — Chi tiết lớp học — Menu Nhật ký — Tab Lịch hẹn (tiền tố `M-CDA`).

## 2. Luồng

- `FLOW01` Xem lịch hẹn đã thêm cho lớp — `REQ01`, `REQ02`, `REQ04`
- `FLOW02` Chuyển trang — `REQ03`, `REQ04`
- `FLOW03` Owner chỉnh lịch hẹn — `REQ05`, `REQ06`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Tab Lịch Hẹn — Danh sách lịch hẹn của lớp

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tab-lich-hen |  |  | — |  | `TC03` | Chưa khớp tự động | QC |
| `A01.02` | thoi-gian | `DD/Molecule/Trigger` Size=XS, State=Default | `2533:20877` Dropdown | — |  | `TC05` | Khớp | QC |
| `A01.03` | noi-dung | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `I2533:21147;1739:32351` Tìm nội dung... | — |  | `TC06`, `TC07` | Khớp | QC |
| `A01.04` | ghi-chu | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I1299:17;2177:28928` Chi tiết NV; `2533:20927` Thu gọn | — |  |  | Khớp | QC |
| `A01.05` | nguoi-phu-trach |  |  | — |  | `TC04` | Chưa khớp tự động | QC |
| `A01.06` | doi-tuong | `DD/Molecule/Trigger` Size=XS, State=Active | `2533:20876` Dropdown | — |  | `TC12` | Khớp | QC |
| `A01.07` | do-uu-tien |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.08` | trang-thai |  | `2533:20995` Đổi Trạng Thái | — |  | `TC09` | Khớp | QC |
| `A01.09` | nguoi-theo-doi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.10` | trang-thai-tai |  |  | — |  |  | Chưa khớp tự động | QC |

### `A02` Phân trang danh sách lịch hẹn

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | so-dong-moi-trang |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.02` | tong-so | `Atom/Side Tab` State=Inactive, Kiểu=Gạch trái | `I1299:19;2177:28928` Chi tiết NV | — |  |  | Khớp | QC |
| `A02.03` | khoang-dang-xem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.04` | dieu-huong |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.05` | thu-tu |  |  | — |  | `TC16` | Chưa khớp tự động | QC |

### `A03` Chỉnh sửa lịch hẹn — Chỉ owner

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | dropdown-do-uu-tien |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.02` | dropdown-trang-thai |  |  | — |  | `TC24` | Chưa khớp tự động | QC |
| `A03.03` | quyen-chinh |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.04` | dang-luu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.05` | ket-qua |  |  | — |  |  | Chưa khớp tự động | QC |

### `A04` Toast phản hồi CRUD

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | thanh-cong |  |  | — |  | `TTC01` | Chưa khớp tự động | QC |
| `A04.02` | loi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.03` | canh-bao |  |  | — |  | `TTC03` | Chưa khớp tự động | QC |
| `A04.04` | thong-tin |  | `2533:20924` Giúp học viên thực hành theo dõi lớp học, nắm được tình trạng học tập của học viên và rèn kỹ năng tổng hợp – báo cáo thông tin lớp. | — |  |  | Khớp | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-050100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `1299:15` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `2533:21147` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | lich-giao-vien-dang-ky | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `2533:20901` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | atom-object-chip | `Atom/Object Chip` Type=System | `2533:20905` Atom/Object Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-icon-button | `Atom/Icon Button`  | `2533:21031` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:231079` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | account | `ACCOUNT` Size=Default | `3497:53466` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Cùng dữ liệu lịch hẹn lớp | Tab hiển thị các lịch hẹn đã lưu từ popup tại Danh sách lớp, liên kết đúng lớp và định danh bản ghi. Tạo thành công được nhìn thấy khi tải lại; hủy/thất bại không thêm dòng. Không phát sinh lịch hẹn mới khi xem hoặc chuyển tab. |
| `REQ02` | Hiển thị theo UI | Đủ 7 cột; Nội dung/Ghi chú giữ text và xuống dòng; Người phụ trách đúng danh sách đã gán; ngày lấy thời gian hẹn, hiển thị Hôm nay/Ngày mai hoặc dd.MM.yyyy và chuyển đỏ khi tới hạn. Ưu tiên có bốn mức mới, trạng thái có Mới/Chưa xử lý/Đang xử lý/Đã xử lý. Đối tượng là lớp liên kết; SOS hiển thị khi lịch hẹn được đánh dấu Rất quan trọng. |
| `REQ03` | Phân trang | 50 lịch hẹn/trang, footer dùng đơn vị lịch hẹn, tổng số và trang trong phạm vi dữ liệu được phép xem. Giữ thứ tự ổn định, không vượt biên, response cũ không ghi đè. |
| `REQ04` | Quyền và liên kết | Kiểm tra quyền tab, lớp và bản ghi trên UI/backend; giữ người tạo thực tế, Người phụ trách và Người theo dõi như nguồn. Thay đổi màn hiển thị không tự thay đổi quyền, lớp liên kết hoặc owner. |
| `REQ05` | Chỉ owner chỉnh | Owner là các user ở Người phụ trách; Người theo dõi chỉ xem, người tạo không mặc nhiên được sửa nếu tự gỡ khỏi Người phụ trách. Dropdown Ưu tiên/Trạng thái cập nhật cùng bản ghi và kiểm tra quyền ở UI/backend; không có trạng thái `Đã xoá`. Xóa bằng biểu tượng thùng rác cố định ở cuối hàng, không cần hover, và xác nhận ở menu Lịch Hẹn. |
| `REQ06` | Notification | Cập nhật có đúng một Toast kết quả theo khu vực Toast; chỉ thành công sau lưu. Chỉ đọc/chọn lại giá trị không có Toast CRUD; lỗi giữ dữ liệu đã lưu để thử lại. |
| `EX01` | Ngoại lệ | Không có quyền tab hoặc lớp → từ chối xem kể cả URL/request trực tiếp, không trả dữ liệu hoặc tổng số ngoài quyền. |
| `EX02` | Ngoại lệ | Tải danh sách/trang lỗi → hiển thị lỗi và Thử lại, không coi dữ liệu là rỗng hoặc tạo dòng thay thế. |
| `EX03` | Ngoại lệ | Response thuộc lớp/tab/trang cũ → không cập nhật vào màn hiện tại. |
| `EX05` | Ngoại lệ | Không phải owner hoặc mất quyền sửa lúc lưu → từ chối request, dữ liệu không đổi, Toast Cảnh Báo; làm mới quyền control. |
| `EX06` | Ngoại lệ | Cập nhật thất bại/lặp → không lưu một phần; giữ giá trị đã lưu và một Toast lỗi, cho thử lại. |
| `EX07` | Ngoại lệ | Request đặt trạng thái `Đã xoá` → từ chối; xóa lịch hẹn thực hiện bằng thao tác riêng có xác nhận ở menu Lịch Hẹn. |
| `EX04` | Ngoại lệ | Dữ liệu enum ưu tiên/trạng thái chưa thống nhất giữa nguồn và tab → không tự ánh xạ hoặc cập nhật bản ghi sang giá trị khác; thống nhất bộ dữ liệu trước triển khai. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Hiển thị lịch hẹn đã thêm ở Danh sách lớp | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Không trộn lịch hẹn lớp khác | High |  | REQ01 / REQ04 | `A01` |  |
| `TC03` | Case 3: Tạo thất bại hoặc hủy không thêm dòng | High |  | REQ01 | `A01` | `A01.01` |
| `TC04` | Case 4: Nhiều người phụ trách | High |  | REQ02 | `A01` | `A01.05` |
| `TC05` | Case 5: Ngày tương đối và ngày cụ thể | Medium |  | REQ02 | `A01` | `A01.02` |
| `TC06` | Case 6: Ghi chú dài và Thu gọn | Medium |  | REQ02 | `A01` | `A01.03` |
| `TC07` | Case 7: Nhãn SOS dùng cờ riêng | Medium |  | REQ02 | `A01` | `A01.03` |
| `TC08` | Case 8: Hiển thị trạng thái và độ ưu tiên đã lưu | High |  | REQ02 | `A01` |  |
| `TC09` | Case 9: Loading, rỗng và lỗi tải | High |  | EX02 / REQ01 | `A01` | `A01.08` |
| `TC10` | Case 10: Response lớp cũ không ghi đè | High |  | EX03 / REQ04 | `A01` |  |
| `TC11` | Case 11: Kiểm tra quyền xem tab | High |  | EX01 / Ràng buộc quyền | `A01` |  |
| `TC12` | Case 12: Đối tượng là lớp | High |  | REQ02 / REQ04 | `A01` | `A01.06` |
| `TC13` | Case 13: Trang 50 dòng và trang cuối | High |  | Flow 2 / REQ03 | `A02` |  |
| `TC14` | Case 14: Trước/Sau và biên trang | Medium |  | Flow 2 / REQ03 | `A02` |  |
| `TC15` | Case 15: Tổng số và danh sách rỗng theo quyền | High |  | REQ03 / REQ04 | `A02` |  |
| `TC16` | Case 16: Response trang cũ và giảm số trang | High |  | EX03 / REQ03 | `A02` | `A02.05` |
| `TC17` | Case 17: Owner cập nhật độ ưu tiên | High | Có | Flow 3 / REQ05 | `A03` |  |
| `TC18` | Case 18: Owner cập nhật trạng thái | High |  | Flow 3 / REQ05 | `A03` |  |
| `TC19` | Case 19: Người theo dõi không được chỉnh | High |  | EX05 / REQ05 | `A03` |  |
| `TC20` | Case 20: Người khác không được chỉnh | High |  | EX05 / REQ05 | `A03` |  |
| `TC21` | Case 21: Cập nhật lỗi và chống lặp | High |  | EX06 / REQ05 / REQ06 | `A03` |  |
| `TC22` | Case 22: Chọn lại giá trị và chuyển lớp | Medium |  | EX03 / REQ04 / REQ05 | `A03` |  |
| `TC23` | Case 23: Mỗi người phụ trách đều là owner | High |  | REQ05 | `A03` |  |
| `TC24` | Case 24: Không có trạng thái Đã xoá | High |  | EX07 / REQ05 | `A03` | `A03.02` |
| `TTC01` | Toast Case 1: Thành công sau lưu | High |  | REQ06 | `A04` | `A04.01` |
| `TTC02` | Toast Case 2: Lỗi lưu | High |  | EX06 / REQ06 | `A04` |  |
| `TTC03` | Toast Case 3: Mất quyền owner | High |  | EX05 / REQ06 | `A04` | `A04.03` |
| `TTC04` | Toast Case 4: Đóng và chống trùng | Medium |  | REQ06 | `A04` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (17): `A01.01`, `A01.05`, `A01.07`, `A01.09`, `A01.10`, `A02.01`, `A02.03`, `A02.04`, `A02.05`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A04.01`, `A04.02`, `A04.03`
- REQ/EX chưa có testcase (1): `EX04`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
