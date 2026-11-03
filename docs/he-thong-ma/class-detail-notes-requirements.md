# Chi tiết lớp học — Menu Nhật ký — Tab Ghi chú

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-050100` | Lớp học / Nhật ký / Nhật ký | `/lop-hoc/nhat-ky/nhat-ky` | `ADM-LOP-050100-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_notes_requirements.md` — Chi tiết lớp học — Menu Nhật ký — Tab Ghi chú (tiền tố `M-CDN`).

## 2. Luồng

- `FLOW01` Xem và lọc ghi chú lớp — `REQ01`, `REQ04`
- `FLOW02` Bình luận ghi chú lớp — `REQ02`, `REQ03`, `REQ04`
- `FLOW03` Tạo và quản lý ghi chú lớp — `REQ01`, `REQ03`, `REQ04`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Tab Ghi Chú — Danh sách và bộ lọc

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tieu-de |  | `2533:20883` TIÊU ĐỀ | — |  | `TC01` | Khớp | QC |
| `A01.02` | noi-dung | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `I2533:21147;1739:32351` Tìm nội dung... | — |  | `TC01` | Khớp | QC |
| `A01.03` | loai |  |  | — |  | `TC01`, `TC03` | Chưa khớp tự động | QC |
| `A01.04` | do-uu-tien |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.05` | trang-thai |  | `2533:20995` Đổi Trạng Thái | — |  | `TC01`, `TC03`, `TC13` | Khớp | QC |
| `A01.06` | owner |  |  | — |  | `TC01`, `TC02`, `TC03`, `TC04`, `TC05`, `TC14`, `TC15` | Chưa khớp tự động | QC |
| `A01.07` | binh-luan |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.08` | hoat-dong-binh-luan-cuoi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.09` | thoi-gian-cap-nhat |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.10` | control-tren-card |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.11` | ghi-chu-cong-khai-moi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.12` | ghi-chu-rieng-tu-moi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.13` | ghi-chu-cong-khai-dong | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `2533:20901` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  |  | Khớp | QC |
| `A01.14` | ghi-chu-rieng-tu-dong | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `2533:20901` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  | `TC07`, `TC12` | Khớp | QC |
| `A01.15` | loai |  |  | — |  | `TC01`, `TC03` | Chưa khớp tự động | QC |
| `A01.16` | do-uu-tien |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.17` | trang-thai-ghi-chu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.18` | thoi-gian | `DD/Molecule/Trigger` Size=XS, State=Default | `2533:20877` Dropdown | — |  | `TC01`, `TC08`, `TC09`, `TC13`, `TC15` | Khớp | QC |
| `A01.19` | toi-han |  |  | — |  | `TC09` | Chưa khớp tự động | QC |
| `A01.20` | hom-nay |  |  | — |  | `TC08`, `TC09`, `TC15` | Chưa khớp tự động | QC |
| `A01.21` | hom-qua |  |  | — |  | `TC09` | Chưa khớp tự động | QC |
| `A01.22` | hom-nay-va-hom-qua |  |  | — |  | `TC09` | Chưa khớp tự động | QC |
| `A01.23` | tuan-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.24` | tuan-truoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.25` | thang-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.26` | thang-truoc |  |  | — |  | `TC09` | Chưa khớp tự động | QC |
| `A01.27` | 3-thang-truoc |  |  | — |  | `TC09` | Chưa khớp tự động | QC |
| `A01.28` | nam-nay |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.29` | nam-truoc |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.30` | tuy-chon |  |  | — |  | `TC10` | Chưa khớp tự động | QC |

### `A02` Popup tạo và cập nhật ghi chú lớp

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | tieu-de |  | `2533:20883` TIÊU ĐỀ | — |  | `TC16`, `TC17`, `TC18`, `TC19` | Khớp | QC |
| `A02.02` | noi-dung | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `I2533:21147;1739:32351` Tìm nội dung... | — |  | `TC16`, `TC17`, `TC18`, `TC19` | Khớp | QC |
| `A02.03` | loai |  |  | — |  | `TC16`, `TC18` | Chưa khớp tự động | QC |
| `A02.04` | do-uu-tien |  |  | — |  | `TC16`, `TC18` | Chưa khớp tự động | QC |
| `A02.05` | trang-thai |  | `2533:20995` Đổi Trạng Thái | — |  | `TC16`, `TC18` | Khớp | QC |
| `A02.06` | owner-va-lop |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.07` | them-xac-nhan-cap-nhat |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.08` | huy-dong-chua-luu |  |  | — |  |  | Chưa khớp tự động | QC |

### `A03` Xóa, đóng và mở lại ghi chú lớp

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | xoa |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.02` | dong | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `2533:20901` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  | `TC23`, `TC24`, `TC25` | Khớp | QC |
| `A03.03` | mo-lai |  |  | — |  | `TC25` | Chưa khớp tự động | QC |
| `A03.04` | binh-luan-khi-dong |  |  | — |  |  | Chưa khớp tự động | QC |

### `A04` Bình luận ghi chú lớp

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | o-binh-luan |  |  | — |  | `TC34` | Chưa khớp tự động | QC |
| `A04.02` | danh-sach-binh-luan |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.03` | tra-loi |  |  | — |  | `TC34` | Chưa khớp tự động | QC |
| `A04.04` | sua-xoa |  |  | — |  | `TC28`, `TC29` | Chưa khớp tự động | QC |
| `A04.05` | mo-an-binh-luan |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.06` | comment-cuoi-tren-card |  |  | — |  |  | Chưa khớp tự động | QC |

### `A05` Toast phản hồi CRUD

Frame: `ADM-LOP-050100` (tool đoán:ADM-LOP-050100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | thanh-cong |  |  | — |  | `TTC01` | Chưa khớp tự động | QC |
| `A05.02` | thong-tin |  | `2533:20924` Giúp học viên thực hành theo dõi lớp học, nắm được tình trạng học tập của học viên và rèn kỹ năng tổng hợp – báo cáo thông tin lớp. | — |  |  | Khớp | QC |
| `A05.03` | canh-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.04` | loi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.05` | tao-ghi-chu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.06` | cap-nhat-ghi-chu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.07` | xoa-ghi-chu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.08` | dong-ghi-chu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.09` | mo-lai-ghi-chu |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.10` | tao-comment |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.11` | cap-nhat-comment |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.12` | xoa-comment |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-050100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `1299:15` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-input | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `2533:21147` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Active | `2533:20876` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | lich-giao-vien-dang-ky | `LỊCH GIÁO VIÊN ĐĂNG KÝ` State=Default | `2533:20903` LỊCH GIÁO VIÊN ĐĂNG KÝ | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-object-chip | `Atom/Object Chip` Type=System | `2533:20905` Atom/Object Chip | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | atom-icon-button | `Atom/Icon Button`  | `2533:21031` Atom/Icon Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:231079` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | account | `ACCOUNT` Size=Default | `3497:53466` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Ghi chú lớp | Kế thừa đầy đủ chức năng Ghi chú giáo viên, áp dụng cho lớp hiện tại: Admin/Class Handler/Support được tạo và xem Công khai + Mới; Riêng tư hoặc Đóng chỉ owner xem. Owner quản lý ghi chú của mình. Tiêu đề/Nội dung bắt buộc; mặc định Công khai, Bình thường, Mới. Filter thời gian tạo mặc định Hôm nay, đủ 12 khoảng như nguồn; sắp xếp mới tạo trước và phân trang tối đa 50 ghi chú được phép xem/trang. |
| `REQ02` | Bình luận | Nút Trả lời dùng ô bình luận hiện tại, gửi bình luận thông thường cùng danh sách, không tạo luồng con. Người được xem ghi chú Mới được comment; Đóng chặn mọi thao tác comment. Chỉ người viết comment sửa/xóa comment của mình. Metadata cuối xác định bằng comment mới nhất chưa xóa mềm theo thời gian tạo; không nhầm với owner ghi chú. |
| `REQ03` | Notification | Mọi CUD ghi chú/comment và đóng/mở ghi chú có đúng một notification kết quả theo chức năng nguồn; chỉ hiển thị thành công khi backend đã lưu. |
| `REQ04` | Đối tượng lớp | Ghi chú liên kết lớp, comment liên kết đúng ghi chú của lớp. Thay đối tượng từ giáo viên sang lớp không thay owner, quyền riêng tư, validation, bộ lọc, phân trang hoặc chức năng bình luận. Không trộn/sao chép tự động ghi chú giáo viên vào lớp hoặc giữa các lớp. |
| `REQ05` | Kế thừa nguồn và xác nhận | Chức năng kế thừa [Tab Ghi chú — Chi tiết giáo viên](../teacher_management/teacher_detail_requirements.md#tab-ghi-chu); UI Ghi Chú lớp và các xác nhận trong tài liệu này là nguồn cụ thể để triển khai lớp. Không dùng danh sách điểm chưa chốt cũ để phủ nhận các điểm đã xác nhận ở đây. |
| `REQ06` | Nội dung và định dạng | Tiêu đề/Nội dung ghi chú và comment không giới hạn ký tự; cho xuống dòng, Nội dung ghi chú hỗ trợ rich text theo toolbar UI. Validation bắt buộc kiểm tra nội dung thực, không coi định dạng trống là nội dung hợp lệ. |
| `REQ07` | Xóa mềm | Xóa ghi chú/comment chỉ đánh dấu xóa, vẫn lưu dữ liệu trong DB. Loại bản ghi đã xóa khỏi chức năng đọc thông thường, danh sách/filter/count/phân trang và metadata comment cuối; không xóa vật lý hay tự tạo chức năng khôi phục. |
| `REQ08` | Timestamp và chỉnh sửa | Ghi chú/comment hiển thị `hh:mm AM/PM, dd.MM.yyyy` như UI. Sửa giữ thời gian tạo, có thời gian cập nhật/Đã chỉnh sửa; filter dùng thời gian tạo. Metadata comment cuối lấy theo thời gian tạo của comment chưa xóa mềm. |
| `REQ09` | Filter nhiều giá trị | Loại/Độ ưu tiên/Trạng thái cho chọn một hoặc nhiều; OR trong cùng filter, AND giữa các filter. Phân trang tối đa 50 ghi chú chưa xóa và có quyền xem/trang, không làm lộ dữ liệu ngoài quyền. |
| `EX01` | Ngoại lệ | Người không phải owner truy cập ghi chú Riêng tư hoặc Đóng qua danh sách/filter/ID → không trả nội dung, metadata hoặc số lượng ngoài quyền. |
| `EX02` | Ngoại lệ | Tiêu đề/Nội dung ghi chú hoặc Nội dung comment rỗng/chỉ có khoảng trắng → từ chối lưu, lỗi field và notification thất bại. |
| `EX03` | Ngoại lệ | Người không phải owner gửi request sửa/xóa/đóng/mở ghi chú → từ chối, giữ nguyên dữ liệu. |
| `EX04` | Ngoại lệ | User sửa/xóa comment người khác, kể cả owner ghi chú → từ chối, giữ nguyên comment. |
| `EX05` | Ngoại lệ | Tạo/sửa/xóa comment khi ghi chú Đóng → từ chối cho đến khi owner mở lại. |
| `EX06` | Ngoại lệ | Tải danh sách/trang lỗi → hiển thị lỗi, cho thử lại, không coi lỗi là danh sách rỗng. |
| `EX07` | Ngoại lệ | Chuyển lớp/trang/filter khi request cũ chưa xong → chỉ response đúng lớp và điều kiện mới nhất được cập nhật. |
| `EX08` | Ngoại lệ | Truy cập/thao tác ghi chú/comment sai lớp hoặc ngoài phạm vi → từ chối kể cả biết ID; không đổi lớp/owner theo request giả mạo. |
| `EX09` | Ngoại lệ | Khoảng ngày Tùy chọn có ngày bắt đầu sau ngày kết thúc → không áp dụng, giữ điều kiện hợp lệ trước đó và cho chỉnh lại. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Xem ghi chú Công khai đang Mới | High | Có | Flow 1 / REQ01 | `A01` | `A01.01`, `A01.02`, `A01.03`, `A01.05`, `A01.06`, `A01.15`, `A01.18` |
| `TC02` | Case 2: Bảo vệ ghi chú Riêng tư | High |  | EX01 / REQ01 | `A01` | `A01.06` |
| `TC03` | Case 3: Ghi chú Đóng chỉ owner được xem và mở lại | High |  | Flow 1 / REQ01 | `A01` | `A01.03`, `A01.05`, `A01.06`, `A01.15` |
| `TC04` | Case 4: Người khác không được quản lý ghi chú | High |  | EX03 / REQ01 | `A01` | `A01.06` |
| `TC05` | Case 5: Hiển thị người và thời gian đầy đủ | High |  | REQ01 / REQ02 | `A01` | `A01.06` |
| `TC06` | Case 6: Lọc theo Loại, Độ ưu tiên và Trạng thái | High |  | Flow 1 / REQ01 | `A01` |  |
| `TC07` | Case 7: Chọn nhiều giá trị trong cùng filter | High |  | REQ09 | `A01` | `A01.14` |
| `TC08` | Case 8: Filter thời gian mặc định Hôm nay | High |  | Flow 1 / REQ01 | `A01` | `A01.18`, `A01.20` |
| `TC09` | Case 9: Filter Tới hạn và các khoảng thời gian định sẵn | High |  | Flow 1 / REQ01 | `A01` | `A01.18`, `A01.19`, `A01.20`, `A01.21`, `A01.22`, `A01.26`, `A01.27` |
| `TC10` | Case 10: Filter thời gian Tùy chọn | High |  | Flow 1 / REQ01 | `A01` | `A01.30` |
| `TC11` | Case 11: Tải hoặc thay đổi bộ lọc thất bại | High |  | EX06 / EX07 / REQ01 | `A01` |  |
| `TC12` | Case 12: Phân trang danh sách ghi chú | High |  | Flow 1 / REQ01 | `A01` | `A01.14` |
| `TC13` | Case 13: Mới tạo trước và trạng thái Mới theo UI | High |  | REQ01 / REQ09 | `A01` | `A01.05`, `A01.18` |
| `TC14` | Case 14: Cách ly dữ liệu ghi chú theo lớp | High |  | Flow 1 / REQ04 | `A01` | `A01.06` |
| `TC15` | Case 15: Giữ thời gian tạo khi sửa ghi chú | High |  | REQ01 / REQ04 | `A01` | `A01.06`, `A01.18`, `A01.20` |
| `TC16` | Case 16: Tạo ghi chú mới | High | Có | Flow 3 / REQ01 / REQ03 | `A02` | `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05` |
| `TC17` | Case 17: Validation nội dung ghi chú | High |  | EX02 / REQ01 | `A02` | `A02.01`, `A02.02` |
| `TC18` | Case 18: Owner cập nhật ghi chú | High |  | Flow 3 / REQ01 / REQ03 | `A02` | `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05` |
| `TC19` | Case 19: Lưu nội dung dài, xuống dòng và rich text | High |  | REQ06 | `A02` | `A02.01`, `A02.02` |
| `TC20` | Case 20: Hiển thị Đã chỉnh sửa và timestamp theo UI | High |  | REQ08 | `A02` |  |
| `TC21` | Case 21: Hủy tạo/cập nhật và chặn gửi lặp | High |  | Flow 3 / REQ01 / REQ03 | `A02` |  |
| `TC22` | Case 22: Owner xóa ghi chú | High | Có | Flow 3 / REQ01 / REQ03 | `A03` |  |
| `TC23` | Case 23: Xóa mềm ghi chú vẫn giữ DB | High |  | REQ07 | `A03` | `A03.02` |
| `TC24` | Case 24: Hủy xác nhận xóa | Medium |  | Flow 3 / REQ01 / REQ03 | `A03` | `A03.02` |
| `TC25` | Case 25: Đóng/mở lại theo đúng owner và Loại | High |  | Flow 3 / REQ01 | `A03` | `A03.02`, `A03.03` |
| `TC26` | Case 26: Thêm comment vào ghi chú đang Mới | High |  | Flow 2 / REQ02 / REQ03 | `A04` |  |
| `TC27` | Case 27: Người comment sửa/xóa comment của mình | High |  | Flow 2 / REQ02 / REQ03 | `A04` |  |
| `TC28` | Case 28: Owner ghi chú không được xóa comment người khác | High |  | EX04 / REQ02 | `A04` | `A04.04` |
| `TC29` | Case 29: Ghi chú Đóng chặn mọi thao tác comment | High |  | EX05 / REQ02 | `A04` | `A04.04` |
| `TC30` | Case 30: Validation comment rỗng | High |  | EX02 / REQ02 | `A04` |  |
| `TC31` | Case 31: Xóa comment cuối và tính lại metadata | High |  | Flow 2 / REQ02 | `A04` |  |
| `TC32` | Case 32: Comment dài/xuống dòng và xóa mềm | High |  | REQ06 / REQ07 | `A04` |  |
| `TC33` | Case 33: Sửa comment giữ metadata theo thời gian tạo | High |  | REQ08 | `A04` |  |
| `TC34` | Case 34: Trả lời bằng ô bình luận hiện tại | High |  | Flow 2 / REQ02 | `A04` | `A04.01`, `A04.03` |
| `TTC01` | Toast Case 1: Kết quả lưu ghi chú/comment | High |  | REQ03 | `A05` | `A05.01` |
| `TTC02` | Toast Case 2: Validation và thao tác chỉ đọc | High |  | EX02 / REQ03 | `A05` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (49): `A01.03`, `A01.04`, `A01.06`, `A01.07`, `A01.08`, `A01.09`, `A01.10`, `A01.11`, `A01.12`, `A01.15`, `A01.16`, `A01.17`, `A01.19`, `A01.20`, `A01.21`, `A01.22`, `A01.23`, `A01.24`, `A01.25`, `A01.26`, `A01.27`, `A01.28`, `A01.29`, `A01.30`, `A02.03`, `A02.04`, `A02.06`, `A02.07`, `A02.08`, `A03.01`, `A03.03`, `A03.04`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`, `A04.06`, `A05.01`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A05.07`, `A05.08`, `A05.09`, `A05.10`, `A05.11`, `A05.12`
- REQ/EX chưa có testcase (3): `REQ05`, `EX08`, `EX09`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
