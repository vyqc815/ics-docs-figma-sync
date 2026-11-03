# Chi tiết lớp học — Menu Bài tập và kiểm tra

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LOP-020300` | Chi tiết lớp học / Bài tập về nhà | `/chi-tiet-lop-hoc/bai-tap-ve-nha` | `ADM-LOP-020300-DK` | QC |

Requirement: `management_requirement/class_management/class_detail_homework_tests_requirements.md` — Chi tiết lớp học — Menu Bài tập và kiểm tra (tiền tố `M-CDH`).

## 2. Luồng

- `FLOW01` Mở menu và chọn loại bài — `REQ01`, `REQ03`
- `FLOW02` Xem kết quả học viên — `REQ06`, `REQ07`
- `FLOW03` Tính tỷ lệ chấm của card — `REQ05`
- `FLOW04` Reset một học viên — `REQ08`, `REQ09`, `REQ10`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Khung menu Bài tập và kiểm tra

Frame: `ADM-LOP-020300` (tool đoán:ADM-LOP-020300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | chon-tab |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.02` | chon-card |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.03` | search | `Atom/Input` State=Search Compact, Kiểu=Chuẩn | `3497:68735` Atom/Input | — |  | `TC04` | Khớp | QC |
| `A01.04` | them-bai-kiem-tra |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.05` | loading-rong-loi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.06` | the-chi-so | `Thẻ chỉ số` Kiểu=Chuẩn | `3502:69730` Thẻ chỉ số | — |  |  | Chỉ có trên Figma | Figma |
| `A01.07` | trang-thai-nop-bai-va-diem | `Trạng thái nộp bài và điểm`  | `3497:67536` Trạng thái nộp bài và điểm | — |  |  | Chỉ có trên Figma | Figma |
| `A01.08` | molecule-o-dinh-danh |  | `3502:69119` Molecule/Ô định danh | — |  |  | Chỉ có trên Figma | Figma |
| `A01.09` | atom-number-badge | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Active | `3502:69506` Atom/Number Badge | — |  |  | Chỉ có trên Figma | Figma |
| `A01.10` | atom-side-tab | `Atom/Side Tab` State=Active, Kiểu=Gạch trái | `3497:68719` Atom/Side Tab | — |  |  | Chỉ có trên Figma | Figma |
| `A01.11` | atom-badge | `Atom/Badge`  | `3497:68608` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `A01.12` | percent | `PERCENT %`  | `3497:68616` PERCENT % | — |  |  | Chỉ có trên Figma | Figma |

### `A02` Khối Tổng Quan

Frame: `ADM-LOP-020300` (tool đoán:ADM-LOP-020300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | da-cham-kiem-tra |  |  | — |  |  | Chưa khớp tự động | QC |
| `A02.02` | kiem-tra-da-giao | `Atom/Ô biểu tượng`  | `I3502:69731;3108:127769` Ô biểu tượng | — |  |  | Khớp | QC |
| `A02.03` | diem-kt |  |  | — |  | `TC07` | Chưa khớp tự động | QC |
| `A02.04` | da-cham-btvn | `Thẻ chỉ số` Kiểu=Chuẩn | `3502:69733` Thẻ chỉ số | — |  |  | Khớp | QC |
| `A02.05` | ti-le-lam-btvn | `Thẻ chỉ số` Kiểu=Chuẩn | `3502:69734` Thẻ chỉ số | — |  | `TC08` | Khớp | QC |
| `A02.06` | diem-btvn | `Thẻ chỉ số` Kiểu=Chuẩn | `3502:69735` Thẻ chỉ số | — |  |  | Khớp | QC |
| `A02.07` | chevron |  |  | — |  | `TC06` | Chưa khớp tự động | QC |

### `A03` Tab BTVN/Kiểm tra, badge và card bài

Frame: `ADM-LOP-020300` (tool đoán:ADM-LOP-020300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | badge-tab |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.02` | trang-thai-card |  |  | — |  | `TC10` | Chưa khớp tự động | QC |
| `A03.03` | so-nop-bai |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.04` | vong |  |  | — |  | `TC11`, `TC12` | Chưa khớp tự động | QC |
| `A03.05` | card-chua-giao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.06` | mo-ta |  | `3497:69048` Mô tả | — |  |  | Khớp | QC |

### `A04` Tỷ lệ chấm bài trên từng card

Frame: `ADM-LOP-020300` (tool đoán:ADM-LOP-020300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | so-da-nop-s |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.02` | so-da-cham-c |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.03` | vi-du-3-3 |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.04` | vi-du-0-3 |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.05` | s-0 |  |  | — |  |  | Chưa khớp tự động | QC |
| `A04.06` | sau-khi-du-lieu-thay-doi |  |  | — |  |  | Chưa khớp tự động | QC |

### `A05` Bảng trạng thái/kết quả của từng học viên

Frame: `ADM-LOP-020300` (tool đoán:ADM-LOP-020300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | ten-hoc-vien |  | `3497:67513` Tên học viên | — |  |  | Khớp | QC |
| `A05.02` | chua-nop | `Trạng thái nộp bài và điểm`  | `3497:67596` Trạng thái nộp bài và điểm | — |  | `TC18` | Khớp | QC |
| `A05.03` | da-nop-chua-cham |  |  | — |  |  | Chưa khớp tự động | QC |
| `A05.04` | da-cham | `Trạng thái nộp bài và điểm`  | `3497:69045` Trạng thái nộp bài và điểm | — |  |  | Khớp | QC |
| `A05.05` | thoi-gian-lam-bai |  | `3497:67521` Thời gian làm bài | — |  | `TC23` | Khớp | QC |
| `A05.06` | so-cau-bo-qua |  | `3497:67517` số câu bỏ qua | — |  |  | Khớp | QC |
| `A05.07` | reset-tung-dong |  |  | — |  |  | Chưa khớp tự động | QC |

### `A06` Reset BTVN/Kiểm tra cho học viên

Frame: `ADM-LOP-020300` (tool đoán:ADM-LOP-020300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A06.01` | pham-vi |  |  | — |  | `TC25` | Chưa khớp tự động | QC |
| `A06.02` | xac-nhan |  |  | — | opens `A06` |  | Chưa khớp tự động | QC |
| `A06.03` | ket-qua-reset |  |  | — |  |  | Chưa khớp tự động | QC |
| `A06.04` | thanh-cong |  |  | — |  | `TC24`, `TC27`, `TC28` | Chưa khớp tự động | QC |
| `A06.05` | loi-chong-lap |  |  | — |  |  | Chưa khớp tự động | QC |

### `A07` Toast phản hồi reset

Frame: `ADM-LOP-020300` (tool đoán:ADM-LOP-020300) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A07.01` | thanh-cong |  |  | — |  | `TC29` | Chưa khớp tự động | QC |
| `A07.02` | co-loi-xay-ra |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.03` | canh-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.04` | thong-bao |  |  | — |  |  | Chưa khớp tự động | QC |
| `A07.05` | component |  |  | — |  |  | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-LOP-020300` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | account | `ACCOUNT` Size=Default | `3497:45916` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:225881` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Khung | Tab/card/bảng đồng bộ theo lớp–loại bài–bài. Click chỉ chọn bảng, không vào chi tiết chấm. Tải full không phân trang; search theo tên bài học/bài danh sách. Mặc định tab/bài, thứ tự và thời điểm search cần chốt. |
| `REQ02` | Tổng Quan | Sáu thẻ đúng UI, phạm vi toàn lớp, **cùng nguồn/công thức Tổng quan lớp**; điểm BTVN/KT trung bình theo bài học viên đã chấm, làm tròn 1 chữ số thập phân, điểm 0 vẫn tính. Không trộn tỷ lệ làm với tỷ lệ chấm card. |
| `REQ03` | Badge/count | Badge là số bài Chưa chấm của từng tab, mỗi bài đếm một lần; card là S/U (đã nộp/chưa nộp) của học viên Đang học/Dự thính, 3/15 = tổng 18 người. Không lấy U làm mẫu số % chấm. |
| `REQ04` | Trạng thái bài | Kiểm tra có Đã chấm / Chưa chấm / Đang đợi nộp bài / Chưa giao; chỉ đọc. Chưa giao là chưa được giáo viên giao; đã giao/S=0 là Đang đợi nộp bài; có bài nộp chưa chấm là Chưa chấm; chấm xong mọi bài đã nộp là Đã chấm, không đợi người chưa nộp. |
| `REQ05` | Tỷ lệ chấm | C/S × 100 trên từng card, S chỉ bài học viên đã nộp, C bài đã chấm trong S; 3/3 là 100% dù còn người chưa nộp. Điểm 0 tính đã chấm, không cộng trùng lịch sử nộp; S=0 không chia 0. |
| `REQ06` | Học viên | Chưa nộp, Đã nộp hoặc điểm khi đã chấm; bảng/count chỉ học viên Đang học/Dự thính, giữ kết quả khi Rời lớp/Xóa. Thời gian HH:mm:ss, vượt 24 giờ max 23:59:59, số câu bỏ qua đúng phiên; chưa có điểm khác điểm 0. |
| `REQ07` | Quyền | Admin và Class Handler/Support được add vào lớp được xem/reset BTVN/KT từng học viên; không thêm/giao/chấm/sửa nội dung hoặc mở chi tiết chấm của giáo viên ở menu quản trị này. |
| `REQ08` | Reset | Đúng một học viên–loại–bài–phiên; kiểm tra quyền, chống lặp. Click icon từng học viên mở popup xác nhận; Hủy không lưu; xác nhận reset toàn bộ bài làm/kết quả hiện hành về Chưa nộp/không điểm để học viên làm lại. Không reset đề hoặc người/bài khác. |
| `REQ09` | Đồng bộ | Kết quả reset/thay đổi nộp/chấm phản ánh dòng, count, % chấm, badge và thống kê liên quan từ cùng dữ liệu; không ảnh hưởng người/bài/lớp khác. |
| `REQ10` | Toast | Reset có một Toast kết quả sau backend; chỉ xem/search/chọn tab/card không Toast CRUD. |
| `REQ11` | Liên kết bài | Bao nhiêu bài học lớp thì bấy nhiêu BTVN, liên kết 1–1; Kiểm tra lấy từ khoá học và bài bổ sung, giáo viên không thêm; giáo viên chỉ giao/thu hồi bài kiểm tra, BTVN tự giao khi bài học mở và không thu hồi. Tự học không liên quan tập bài này. |
| `EX01` | Ngoại lệ | Admin/Class Handler/Support thử thêm/giao bài, sửa đề/điểm/chấm hoặc mở chức năng Teacher → không được phép; reset không cấp quyền chấm. |
| `EX02` | Ngoại lệ | Tải lỗi → báo lỗi/Thử lại, không dựng số 0, Chưa nộp hoặc danh sách rỗng giả. |
| `EX03` | Ngoại lệ | Response lớp/tab/bài cũ → không ghi đè ngữ cảnh hiện tại. |
| `EX04` | Ngoại lệ | Số đã nộp S = 0 → không chia 0 hoặc dựng 100%; cách hiển thị cần chốt. |
| `EX05` | Ngoại lệ | Sai quyền/liên kết lớp–học viên–loại–bài–phiên → không đọc/reset ngoài phạm vi. |
| `EX06` | Ngoại lệ | Reset lỗi/lặp hoặc dữ liệu đã đổi → không thay dữ liệu một phần, giữ/tải lại kết quả phù hợp và một Toast kết quả. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Chọn tab/card chỉ xem bảng | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Ba role quản trị không thêm/giao/chấm | High |  | EX01 / REQ07 | `A01` |  |
| `TC03` | Case 3: Lỗi/rỗng/response cũ | High |  | EX02 / EX03 / REQ01 | `A01` |  |
| `TC04` | Case 4: Full danh sách và search bài | High |  | REQ01 | `A01` | `A01.03` |
| `TC05` | Case 5: BTVN theo bài học, Kiểm tra thêm riêng | High |  | REQ01 / REQ11 | `A01` |  |
| `TC06` | Case 6: Đủ sáu thẻ, phạm vi toàn lớp | High | Có | REQ02 | `A02` | `A02.07` |
| `TC07` | Case 7: Điểm trung bình không bỏ điểm 0 | High |  | REQ02 | `A02` | `A02.03` |
| `TC08` | Case 8: Không lấy tỷ lệ chấm thay tỷ lệ làm | High |  | REQ02 / REQ05 | `A02` | `A02.05` |
| `TC09` | Case 9: Badge đếm bài, không đếm bài nộp | High |  | REQ03 | `A03` |  |
| `TC10` | Case 10: Đủ bốn nhãn Kiểm tra và chỉ đọc | High |  | REQ04 | `A03` | `A03.02` |
| `TC11` | Case 11: Card không mở chức năng chấm | High |  | REQ01 / REQ07 | `A03` | `A03.04` |
| `TC12` | Case 12: Card 3/15 là 3 đã nộp và 15 chưa nộp | High |  | REQ03 / REQ05 / REQ06 | `A03` | `A03.04` |
| `TC13` | Case 13: Nhãn trạng thái theo giao/nộp/chấm | High |  | REQ04 | `A03` |  |
| `TC14` | Case 14: Ba bài nộp đều chấm là 100% | High |  | Flow 3 / REQ05 | `A04` |  |
| `TC15` | Case 15: Chưa chấm 3 bài nộp là 0% | High |  | REQ05 | `A04` |  |
| `TC16` | Case 16: Điểm 0 và nộp lại không cộng người | High |  | REQ05 | `A04` |  |
| `TC17` | Case 17: Không có bài nộp | High |  | EX04 / REQ05 | `A04` |  |
| `TC18` | Case 18: Ba trạng thái học viên không bị gộp | High | Có | Flow 2 / REQ06 | `A05` | `A05.02` |
| `TC19` | Case 19: Thời gian và bỏ qua đúng phiên | High |  | REQ06 / REQ09 | `A05` |  |
| `TC20` | Case 20: Không vào bài làm chi tiết để chấm | High |  | EX01 / REQ07 | `A05` |  |
| `TC21` | Case 21: Reset gắn đúng dòng | High |  | Flow 4 / REQ08 / REQ09 | `A05` |  |
| `TC22` | Case 22: Tập trạng thái học viên và giữ kết quả lịch sử | High |  | REQ02 / REQ06 / REQ09 | `A05` |  |
| `TC23` | Case 23: Thời gian vượt 24 giờ giống Tự học | High |  | REQ06 | `A05` | `A05.05` |
| `TC24` | Case 24: Reset đúng một bài/học viên và cập nhật UI | High | Có | Flow 4 / REQ08 / REQ09 | `A06` | `A06.04` |
| `TC25` | Case 25: Reset lỗi/thiếu quyền/chống lặp | High |  | EX05 / EX06 / REQ08 | `A06` | `A06.01` |
| `TC26` | Case 26: Popup reset và Hủy không thay dữ liệu | High |  | Flow 4 / REQ08 | `A06` |  |
| `TC27` | Case 27: Reset toàn bộ và học viên làm lại | High |  | Flow 4 / REQ08 / REQ09 | `A06` | `A06.04` |
| `TC28` | Case 28: Reset đổi count và tỷ lệ trên tập đã nộp | High |  | REQ03 / REQ04 / REQ05 / REQ09 | `A06` | `A06.04` |
| `TC29` | Case 29: Toast đúng loại reset | High |  | REQ10 | `A07` | `A07.01` |
| `TC30` | Case 30: Lỗi/chỉ xem/đóng Toast | Medium |  | EX06 / REQ10 | `A07` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (30): `A01.01`, `A01.02`, `A01.04`, `A01.05`, `A02.01`, `A02.03`, `A02.07`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`, `A04.06`, `A05.03`, `A05.07`, `A06.01`, `A06.02`, `A06.03`, `A06.04`, `A06.05`, `A07.01`, `A07.02`, `A07.03`, `A07.04`, `A07.05`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
