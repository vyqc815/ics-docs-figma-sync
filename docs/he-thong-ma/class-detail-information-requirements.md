# Chi tiết lớp học — Tab Thông tin

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-040100` | Lớp học / Cài đặt / Thông tin | `/lop-hoc/cai-dat/thong-tin` | `ADM-LOP-040100-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_information_requirements.md` — Chi tiết lớp học — Tab Thông tin (tiền tố `M-CDI`).

## 2. Luồng

- `FLOW01` Xem và chỉnh sửa thông tin chung — `REQ01`, `REQ05`, `REQ06`
- `FLOW02` Đổi Khóa học — `REQ02`, `REQ03`
- `FLOW03` Class Handler đổi Trạng thái — `REQ04`
- `FLOW04` Xóa lớp với hai lần xác nhận — `REQ07`
- `FLOW05` Đổi ngày bắt đầu và cân bằng lịch — `REQ12`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Tab Thông tin lớp học

Frame: `ADM-LOP-040100` (tool đoán:ADM-LOP-040100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | lop-khong-chinh-thuc | `ACCOUNT` Size=Default | `2481:114920` Lớp không chính thức; `3497:50611` ACCOUNT | — |  | `TC39` | Khớp | QC |
| `A01.02` | ma-lop | `Atom/Label`  | `I3004:49982;3004:58620` Atom/Label | — |  | `TC01`, `TC02`, `TC03` | Khớp | QC |
| `A01.03` | link-google-meet | `Atom/Label`  | `I3004:49756;3004:58620` Atom/Label | — |  |  | Khớp | QC |
| `A01.04` | khoa-hoc | `Atom/Label`  | `I3004:50108;3004:58620` Atom/Label | — |  | `TC01` | Khớp | QC |
| `A01.05` | ghi-chu | `Atom/Label`  | `2210:14361` Atom/Label | — |  | `TC01`, `TC02`, `TC03` | Khớp | QC |
| `A01.06` | mo-ta | `Atom/Label`  | `2210:14373` Atom/Label | — |  | `TC01`, `TC02`, `TC03` | Khớp | QC |
| `A01.07` | ngay-bat-dau | `Atom/Label`  | `I3004:50122;3004:58620` Atom/Label | — |  |  | Khớp | QC |
| `A01.08` | ngay-ket-thuc | `Atom/Label`  | `I3004:50041;3004:58620` Atom/Label | — |  |  | Khớp | QC |
| `A01.09` | loai-lop | `Atom/Label`  | `I3004:49798;3004:58620` Atom/Label | — |  | `TC01`, `TC02`, `TC06`, `TC07` | Khớp | QC |
| `A01.10` | trang-thai | `Atom/Label`  | `I3004:50093;3004:58620` Atom/Label | — |  | `TC01` | Khớp | QC |
| `A01.11` | luu-cap-nhat |  |  | — |  | `TC02`, `TC03`, `TC04` | Chưa khớp tự động | QC |
| `A01.12` | xoa-lop | `ACCOUNT` Size=Default; `Atom/Button` Type=Outlined, Size=Small | `3650:46245` Atom/Button; `3497:50611` ACCOUNT | — |  |  | Khớp | QC |

### `A02` Dropdown chọn Khóa học

Frame: `ADM-LOP-040100` (tool đoán:ADM-LOP-040100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | gia-tri-hien-tai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.02` | o-tim-kiem |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.03` | danh-sach-khoa-hoc |  |  | — |  | `TC09` | Chưa khớp tự động | QC |
| `A02.04` | chon-khoa-hoc-moi |  |  | — |  |  | Chưa khớp tự động | QC |

### `A03` Nhóm Ngày bắt đầu, Ngày kết thúc và lịch được sinh

Frame: `ADM-LOP-040100` (tool đoán:ADM-LOP-040100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | ngay-bat-dau | `Atom/Label`  | `I3004:50122;3004:58620` Atom/Label | — |  | `TC29`, `TC30`, `TC36` | Khớp | QC |
| `A03.02` | ngay-ket-thuc | `Atom/Label`  | `I3004:50041;3004:58620` Atom/Label | — |  | `TC29`, `TC31`, `TC32`, `TC33`, `TC34`, `TC35`, `TC36` | Khớp | QC |
| `A03.03` | lich-co-dinh |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.04` | lich-buoi-duoc-chen |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.05` | xoa-huy-mot-buoi-co-tinh-vao-chuong-trin |  |  | — |  | `TC33` | Chưa khớp tự động | QC |
| `A03.06` | doi-lich-mot-buoi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.07` | khung-gio-bi-trung |  |  | — |  | `TC35` | Chưa khớp tự động | QC |

### `A04` Dropdown Trạng thái

Frame: `ADM-LOP-040100` (tool đoán:ADM-LOP-040100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | trang-thai-hien-tai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.02` | danh-sach-trang-thai |  |  | — |  | `TC37` | Chưa khớp tự động | QC |
| `A04.03` | trang-thai-dang-hoc |  |  | — |  | `TC18` | Chưa khớp tự động | QC |
| `A04.04` | moi-tao-khai-giang-trai-nghiem-dang-hoc- |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.05` | xoa | `Atom/Button` Type=Outlined, Size=Small | `I3650:46245;1430:10764` Button | — |  |  | Khớp | QC |

### `A05` Popup xác nhận xóa lớp — Lần 1

Frame: `ADM-LOP-040100` (tool đoán:ADM-LOP-040100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | tieu-de |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.02` | noi-dung | `Atom/Input` State=Default, Kiểu=Chuẩn | `I3004:49982;3004:58628;1048:1264` Tìm nội dung... | — |  | `TC22` | Khớp | QC |
| `A05.03` | huy |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.04` | tiep-tuc |  |  | — | opens `A05` | `TC22`, `TC24` | Chưa khớp tự động | QC |

### `A06` Popup xác nhận xóa lớp — Lần 2

Frame: `ADM-LOP-040100` (tool đoán:ADM-LOP-040100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | tieu-de |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.02` | noi-dung | `Atom/Input` State=Default, Kiểu=Chuẩn | `I3004:49982;3004:58628;1048:1264` Tìm nội dung... | — |  |  | Khớp | QC |
| `A06.03` | quay-lai |  |  | — |  | `TC25` | Chưa khớp tự động | QC |
| `A06.04` | xoa-lop | `ACCOUNT` Size=Default; `Atom/Button` Type=Outlined, Size=Small | `3650:46245` Atom/Button; `3497:50611` ACCOUNT | — |  | `TC26` | Khớp | QC |

### `A07` Toast phản hồi CRUD

Frame: `ADM-LOP-040100` (tool đoán:ADM-LOP-040100) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04` | Chưa khớp tự động | QC |
| `A07.02` | thong-tin | `Atom/Side Tab` State=Active, Kiểu=Gạch trái; `Molecule/Field`  | `I2199:19568;2177:28936` Nhiệm vụ con; `3004:49982` Molecule/Field | — |  |  | Khớp | QC |
| `A07.03` | canh-bao |  |  | — |  | `TTC02` | Chưa khớp tự động | QC |
| `A07.04` | loi | `Molecule/Field`  | `3004:49982` Molecule/Field | — |  |  | Khớp | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-040100` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `2199:19568` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | molecule-field | `Molecule/Field`  | `3004:50108` Molecule/Field | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-button | `Atom/Button` Type=Warning, Size=Medium | `3650:46239` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:230175` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Thông tin được chỉnh sửa và cơ chế lưu | Cho phép chỉnh `Mã lớp`, `Link Google Meet`, `Ghi chú`, `Mô tả`, `Loại lớp`; `Ngày bắt đầu` tuân theo REQ12. Không tự lưu; chỉ gửi cập nhật khi bấm `Lưu/Cập nhật`. `Ngày kết thúc` chỉ đọc. |
| `REQ02` | Mốc khóa Khóa học | Chỉ được đổi Khóa học trước khi bài học số 1 được mở lần đầu. Mốc đã mở là vĩnh viễn và phải được kiểm tra ở backend. |
| `REQ03` | Đồng bộ khi đổi Khóa học | Khóa mới quyết định toàn bộ Bài học, BTVN theo bài, Bài kiểm tra và tổng số buổi. Hệ thống tạo lại lịch đến đủ số buổi mới; cập nhật nguyên tử cùng Khóa học. |
| `REQ04` | Quyền và điều kiện đổi Trạng thái | Chỉ `Class Handler` được đổi trạng thái. Bảy trạng thái vận hành được chuyển qua lại, kể cả mở lại từ `Hoàn thành`/`Hủy`; `Xóa` không nằm trong dropdown. Chuyển sang `Khai giảng` cần lịch hợp lệ. Chuyển sang `Đang học` cần Meet, Tiêu chuẩn GV, Quy trình lớp, ít nhất 1 học viên `Đang học` và toàn bộ nhóm này đáp ứng học phí. Có lịch ngay khi tạo hoặc thêm lịch cho lớp `Mới tạo` thì tự chuyển `Khai giảng`. |
| `REQ05` | Loại lớp | Chỉ có `Lớp chung` và `Lớp 1-1`. Loại lớp là field độc lập với sĩ số; lớp 1-1 có thể có 0, 1 hoặc nhiều học viên. Đổi Loại lớp không tự thêm/xóa học viên. |
| `REQ06` | Validation và toàn vẹn cập nhật | Backend kiểm tra lại dữ liệu, quyền và phạm vi; không tin field chỉ đọc/cờ điều kiện từ client; một lần cập nhật thất bại không được lưu một phần. |
| `REQ07` | Xóa lớp | `Admin` và `Class Handler` đang phụ trách chính được xóa lớp. Phải xác nhận qua hai popup độc lập. Chỉ nút `Xóa lớp` ở popup lần 2 mới gửi request; backend kiểm tra lại quan hệ phụ trách tại thời điểm xóa; xóa mềm bằng trạng thái `Xóa`. |
| `REQ08` | Theo dõi thay đổi | Ghi nhận tối thiểu lớp, field/trạng thái cũ và mới, người thực hiện và thời điểm cho thao tác chỉnh sửa, đổi khóa, đổi trạng thái và xóa. |
| `REQ09` | Hiển thị an toàn | Mã lớp, Mô tả và Ghi chú phải được hiển thị như text; không thực thi HTML/script. Lỗi trả về không chứa stack trace, token hoặc định danh kỹ thuật nhạy cảm. |
| `REQ10` | Dữ liệu text và URL | Không giới hạn số ký tự theo nghiệp vụ đối với Mã lớp, Mô tả và Ghi chú. Mã lớp bắt buộc lưu in hoa và duy nhất toàn hệ thống sau chuẩn hóa, không phân biệt hoa/thường khi kiểm tra trùng. Link Google Meet, nếu có, chỉ chấp nhận URL HTTP(S) hợp lệ. |
| `REQ11` | Lớp không chính thức | Chỉ `Admin` được chuyển lớp chính thức thành lớp không chính thức. Chuyển đổi là một chiều; sau khi lưu lớp test thì không được bỏ tick để về lớp chính thức. Class Handler chỉ được đổi trạng thái của lớp test, không được tự gán cờ lớp test. |
| `REQ12` | Ngày và cân bằng lịch | Ngày bắt đầu chỉ đổi trước khi mở bài 1. Lịch luôn đúng N buổi của khóa học; mọi buổi chèn được tính vào tổng và làm các buổi phía sau tự dời/sinh lại, đánh số lại. Ngày kết thúc luôn bằng ngày buổi N và không cho người dùng sửa. |
| `EX01` | Ngoại lệ | Mã lớp hoặc Mô tả rỗng/chỉ chứa khoảng trắng, Mã lớp trùng sau khi chuẩn hóa in hoa, hoặc Link Google Meet không phải URL HTTP(S) hợp lệ → từ chối lưu, báo đúng field và giữ dữ liệu cũ. |
| `EX02` | Ngoại lệ | Client gửi giá trị `Ngày kết thúc` → bỏ qua/từ chối field này và tính lại từ buổi cuối; không dùng giá trị client để ghi đè. |
| `EX04` | Ngoại lệ | Role không có quyền hoặc lớp ngoài phạm vi gửi request cập nhật → backend từ chối và không thay đổi dữ liệu. |
| `EX05` | Ngoại lệ | Bài học số 1 đã từng được mở → từ chối mọi request đổi khóa học, kể cả request trực tiếp hoặc UI đang giữ dữ liệu cũ. |
| `EX06` | Ngoại lệ | Khóa mới thiếu cấu hình số buổi, lịch cố định không còn hợp lệ hoặc không thể sinh/lưu đủ lịch → không đổi khóa; giữ nguyên toàn bộ khóa, số buổi và lịch cũ. |
| `EX07` | Ngoại lệ | Bài học số 1 được mở trong lúc một người khác đang đổi khóa → tại thời điểm lưu, ưu tiên mốc mở bài và từ chối đổi khóa. |
| `EX08` | Ngoại lệ | Người không có role `Class Handler` gửi request đổi trạng thái → backend từ chối, kể cả `Admin`. |
| `EX09` | Ngoại lệ | Lớp chính thức thiếu Meet, Tiêu chuẩn giáo viên, Quy trình lớp, không có học viên ở trạng thái `Đang học`, hoặc có ít nhất một học viên `Đang học` chưa đáp ứng học phí → không chuyển lớp sang `Đang học`; trả đúng toàn bộ điều kiện còn thiếu. |
| `EX10` | Ngoại lệ | Một điều kiện chuyển trạng thái thay đổi sau khi UI tải nhưng trước khi lưu → backend dùng dữ liệu mới nhất và từ chối nếu không còn đủ điều kiện. |
| `EX11` | Ngoại lệ | Xóa lớp thất bại hoặc request bị gửi lặp → không thay đổi một phần; chỉ cho phép một kết quả xóa mềm. |
| `EX12` | Ngoại lệ | Người dùng không phải `Admin` và không phải `Class Handler` đang phụ trách chính gửi request xóa → backend từ chối; không đổi trạng thái hoặc xóa dữ liệu liên quan. |
| `EX13` | Ngoại lệ | Người không có role `Admin` gửi request tick/bỏ tick `Lớp không chính thức` → backend từ chối và giữ nguyên giá trị. |
| `EX14` | Ngoại lệ | Bài học số 1 đã mở → không cho đổi Ngày bắt đầu, kể cả request trực tiếp hoặc UI cũ. |
| `EX15` | Ngoại lệ | Gặp khung giờ trùng khi sinh lịch → bỏ qua khung trùng và tiếp tục theo lịch cố định đến khi đủ N buổi. |
| `EX16` | Ngoại lệ | Không thể sinh/cân bằng đủ N buổi mà không tác động buổi đã mở/hoàn thành → rollback toàn bộ thay đổi lịch. |
| `EX17` | Ngoại lệ | Request gửi giá trị ngoài bảy trạng thái vận hành hoặc cố chọn `Xóa` qua dropdown → backend từ chối và giữ nguyên trạng thái nguồn. |
| `EX18` | Ngoại lệ | Lớp đã là lớp không chính thức nhưng client gửi request bỏ tick → backend từ chối; lớp test không được chuyển lại thành lớp chính thức. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở tab và hiển thị dữ liệu lớp | High | Có | Flow 1 / REQ01 | `A01` | `A01.02`, `A01.04`, `A01.05`, `A01.06`, `A01.09`, `A01.10` |
| `TC02` | Case 2: Chỉnh sửa và lưu các field thông tin chung | High | Có | Flow 1 / REQ01 | `A01` | `A01.02`, `A01.05`, `A01.06`, `A01.09`, `A01.11` |
| `TC03` | Case 3: Validation Mã lớp, Mô tả và URL Meet | High |  | EX01 / REQ06 / REQ10 | `A01` | `A01.02`, `A01.05`, `A01.06`, `A01.11` |
| `TC04` | Case 4: Admin chuyển lớp chính thức thành lớp không chính thức | High |  | Flow 1 / REQ11 | `A01` | `A01.11` |
| `TC05` | Case 5: Chặn role khác thay đổi Lớp không chính thức | High |  | EX13 / REQ11 / Ràng buộc quyền | `A01` |  |
| `TC39` | Case 39: Không cho chuyển lớp không chính thức về lớp chính thức | High |  | EX18 / REQ11 | `A01` | `A01.01` |
| `TC06` | Case 6: Đổi Loại lớp thành Lớp 1-1 hợp lệ | High |  | Flow 1 / REQ05 | `A01` | `A01.09` |
| `TC07` | Case 7: Đổi thành Lớp 1-1 khi lớp có nhiều học viên | High |  | REQ05 | `A01` | `A01.09` |
| `TC08` | Case 8: Role không có quyền gửi request chỉnh sửa trực tiếp | High |  | EX04 / Ràng buộc quyền | `A01` |  |
| `TC09` | Case 9: Mở dropdown và tìm khóa học | Medium |  | Flow 2 / REQ02 | `A02` | `A02.03` |
| `TC10` | Case 10: Đổi khóa học trước khi mở bài đầu tiên | High |  | Flow 2 / REQ02 / REQ03 | `A02` |  |
| `TC11` | Case 11: Đổi khóa từ 24 buổi sang 30 buổi | High |  | Flow 2 / REQ03 | `A02` |  |
| `TC12` | Case 12: Khóa đổi khóa học ngay khi mở bài đầu tiên | High |  | Flow 2 / REQ02 | `A02` |  |
| `TC13` | Case 13: Từ chối request đổi khóa sau khi bài 1 đã mở | High |  | EX05 / REQ02 / Ràng buộc quyền | `A02` |  |
| `TC14` | Case 14: Lỗi khi sinh lịch mới | High |  | EX06 / REQ03 | `A02` |  |
| `TC15` | Case 15: Bài 1 được mở trong lúc người khác đang đổi khóa | High |  | EX07 / REQ02 | `A02` |  |
| `TC29` | Case 29: Đổi Ngày bắt đầu trước khi mở bài 1 | High |  | Flow 5 / REQ12 | `A03` | `A03.01`, `A03.02` |
| `TC30` | Case 30: Khóa Ngày bắt đầu sau khi mở bài 1 | High |  | EX14 / REQ12 | `A03` | `A03.01` |
| `TC31` | Case 31: Ngày kết thúc luôn bằng ngày buổi cuối | High |  | REQ12 | `A03` | `A03.02` |
| `TC32` | Case 32: Chèn một buổi và tự điều chỉnh các lịch phía sau | High |  | Flow 5 / REQ12 | `A03` | `A03.02` |
| `TC33` | Case 33: Xóa hoặc hủy một buổi có tính vào chương trình | High |  | Flow 5 / REQ12 | `A03` | `A03.02`, `A03.05` |
| `TC34` | Case 34: Dời một buổi không làm đổi tổng số | High |  | REQ12 | `A03` | `A03.02` |
| `TC35` | Case 35: Bỏ qua khung giờ bị trùng khi sinh lịch | High |  | EX15 / REQ12 | `A03` | `A03.02`, `A03.07` |
| `TC36` | Case 36: Không thể cân bằng lịch | High |  | EX16 / REQ12 | `A03` | `A03.01`, `A03.02` |
| `TC16` | Case 16: Class Handler đổi trạng thái hợp lệ | High | Có | Flow 3 / REQ04 | `A04` |  |
| `TC17` | Case 17: Chỉ Class Handler được đổi trạng thái | High |  | EX08 / REQ04 / Ràng buộc quyền | `A04` |  |
| `TC18` | Case 18: Chuyển lớp chính thức sang Đang học khi đủ điều kiện | High |  | Flow 3 / REQ04 | `A04` | `A04.03` |
| `TC19` | Case 19: Chặn Đang học khi thiếu một hoặc nhiều điều kiện | High |  | EX09 / REQ04 | `A04` |  |
| `TC20` | Case 20: Lớp không chính thức đổi tự do trạng thái nhưng không bỏ qua quyền | High |  | REQ04 / REQ11 / Ràng buộc quyền | `A04` |  |
| `TC21` | Case 21: Điều kiện thay đổi trong lúc xác nhận trạng thái | High |  | EX10 / REQ04 | `A04` |  |
| `TC37` | Case 37: Hiển thị trạng thái đích và mở lại trạng thái kết thúc | High |  | REQ04 | `A04` | `A04.02` |
| `TC38` | Case 38: Chặn trạng thái không thuộc danh sách vận hành | High |  | EX17 / REQ04 | `A04` |  |
| `TC40` | Case 40: Tự chuyển Mới tạo sang Khai giảng khi thêm lịch | High |  | REQ04 | `A04` |  |
| `TC22` | Case 22: Mở popup xóa lần 1 | High |  | Flow 4 / REQ07 | `A05` | `A05.02`, `A05.04` |
| `TC23` | Case 23: Hủy tại lần xác nhận thứ nhất | High |  | Flow 4 / REQ07 | `A05` |  |
| `TC24` | Case 24: Tiếp tục sang lần xác nhận thứ hai | High |  | Flow 4 / REQ07 | `A05` | `A05.04` |
| `TC25` | Case 25: Quay lại tại lần xác nhận thứ hai | High |  | Flow 4 / REQ07 | `A06` | `A06.03` |
| `TC26` | Case 26: Xóa lớp sau hai lần xác nhận | High | Có | Flow 4 / REQ07 | `A06` | `A06.04` |
| `TC27` | Case 27: Request xóa thất bại hoặc được gửi lặp | High |  | EX11 / REQ07 | `A06` |  |
| `TC28` | Case 28: Backend từ chối Class Handler không phụ trách xóa lớp | High |  | EX12 / Ràng buộc quyền | `A06` |  |
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A07` | `A07.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A07` | `A07.01`, `A07.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A07` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A07` | `A07.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (21): `A01.11`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A05.01`, `A05.03`, `A05.04`, `A06.01`, `A06.03`, `A07.01`, `A07.03`
- Testcase không trỏ REQ (4): `TTC01`, `TTC02`, `TTC03`, `TTC04`
- REQ/EX chưa có testcase (3): `REQ08`, `REQ09`, `EX02`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
