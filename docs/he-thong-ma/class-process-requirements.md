# [Giáo viên] Chi tiết lớp — Quy trình

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|

Requirement: `teacher_role/class/class_process_requirements.md` — [Giáo viên] Chi tiết lớp — Quy trình (tiền tố `TR-CP`).

## 2. Luồng

- `FLOW01` Xem Tiêu chuẩn lớp — `REQ01`, `REQ02`
- `FLOW02` Tick xác nhận Action Xác thực ở Tiêu chuẩn lớp — `REQ03`
- `FLOW03` Xem buổi họp được mời — `REQ04`, `REQ07`
- `FLOW04` Tick xác nhận Action Xác thực trong buổi họp — `REQ08`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-LOP-060100` | Trống | Trạng thái | — | — | — | — | QC | thấp |
| `GV-LOP-070100` | Trống | Trạng thái | — | — | — | — | QC | thấp |

## 4. Khu vực và item

### `A01` Tiêu chuẩn lớp — Cây tiêu chuẩn và tiến độ

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tien-do-tong |  |  | — |  | `TC02`, `TC05` | Chưa sync | QC |
| `A01.02` | cay-package-category-action-item |  |  | — |  |  | Chưa sync | QC |
| `A01.03` | mo-rong-item |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | action-xac-thuc-verify-duoc-gan |  |  | — |  |  | Chưa sync | QC |
| `A01.05` | action-xac-thuc-verify-khong-gan-loai-kh |  |  | — |  |  | Chưa sync | QC |
| `A01.06` | nut-them-tieu-chuan |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.07` | khong-co-noi-dung |  |  | — |  |  | Chưa sync | QC |

### `A02` Cuộc họp — Khung màn và Danh sách buổi họp

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | danh-sach-buoi-hop |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | card-buoi-hop |  |  | — | opens `A02` |  | Chưa sync | QC |
| `A02.03` | chon-buoi |  |  | — |  |  | Chưa sync | QC |
| `A02.04` | so-nguoi-tham-gia |  |  | — |  |  | Chưa sync | QC |
| `A02.05` | badge-cung-thoi-gian |  |  | — | opens `A02` |  | Chưa sync | QC |
| `A02.06` | khong-co-buoi |  |  | — |  |  | Chưa sync | QC |
| `A02.07` | loading-loi |  |  | — |  |  | Chưa sync | QC |

### `A03` Nội dung buổi họp và Action Item

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | tieu-de-vung |  |  | — |  |  | Chưa sync | QC |
| `A03.02` | mo-ta |  |  | — |  | `TC11` | Chưa sync | QC |
| `A03.03` | package-category-action-item |  |  | — |  |  | Chưa sync | QC |
| `A03.04` | mo-rong-item |  |  | — |  |  | Chưa sync | QC |
| `A03.05` | action-xac-thuc-verify-duoc-gan |  |  | — |  |  | Chưa sync | QC |
| `A03.06` | action-xac-thuc-verify-khong-gan-giao-vi |  |  | — |  |  | Chưa sync | QC |
| `A03.07` | action-item-loai-khac-check-progress-eva |  |  | — |  |  | Chưa sync | QC |
| `A03.08` | bien-ban-cuoc-hop |  |  | — |  | `TC16` | Chưa sync | QC |

### `A04` Toast phản hồi CRUD

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | thanh-cong |  |  | — |  | `TTC02` | Chưa sync | QC |
| `A04.02` | thong-tin |  |  | — |  | `TTC01` | Chưa sync | QC |
| `A04.03` | canh-bao |  |  | — |  |  | Chưa sync | QC |
| `A04.04` | loi |  |  | — |  |  | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Phạm vi xem Tiêu chuẩn lớp | Mọi giáo viên của lớp xem toàn bộ nội dung Tiêu chuẩn lớp (loại `Lớp - Giáo viên`) đã thêm vào lớp, không lọc theo người được gán; tiến độ tổng và badge Category theo quy tắc Action Board, cùng nguồn thẻ `Tiêu chuẩn` ở Tổng quan lớp. |
| `REQ02` | Chỉ đọc | Không có nút `Thêm tiêu chuẩn`; không kéo thả, không sửa định nghĩa, ghi chú, file; control Result các loại khác `verify` được gán chỉ đọc. |
| `REQ03` | Tick xác nhận Xác thực ở Tiêu chuẩn lớp | Action Xác thực (`verify`) có giáo viên trong assignee: tick một lần, không bỏ tick, chỉ khi nguồn còn Công khai; Result lưu theo lớp–item; tiến độ tính lại ngay. |
| `REQ04` | Phạm vi xem buổi họp | Giáo viên chỉ thấy buổi họp của lớp mà mình nằm trong danh sách người tham gia và trạng thái khác `Mới tạo`. Lọc quyền ở backend trước khi trả danh sách, gom nhóm và đếm; không tải toàn bộ rồi ẩn ở client. |
| `REQ05` | Card chỉ đọc | Card hiển thị số thứ tự, `N người tham gia` (popup danh sách người tham gia), tiêu đề, ngày giờ (`Chưa có lịch` nếu trống), trạng thái. Không có nút thêm buổi, thêm người, đổi trạng thái, sửa tiêu đề, xoá. |
| `REQ06` | Nhóm cùng thời gian | Gom buổi cùng ngày và giờ:phút bắt đầu trong tập buổi giáo viên được xem; từ hai buổi hiển thị số lượng và popup liệt kê (số người tham gia, ngày giờ, trạng thái, tiêu đề). Cách gom giống requirement Admin Tab Cuộc họp REQ09. |
| `REQ07` | Nội dung buổi họp | Hiển thị mô tả, Package → Category → Action Item theo thứ tự đã lưu, badge tiến độ theo quy tắc Action Board của buổi, chi tiết item (mô tả, ghi chú, file, Result), Biên bản cuộc họp (thu gọn, chỉ khi có nội dung). Tất cả chỉ đọc, trừ REQ08. |
| `REQ08` | Tick xác nhận Xác thực trong buổi họp | Action loại Xác thực (`verify`) có giáo viên trong assignee: giáo viên bấm tick một lần để lưu Result đã xác nhận của buổi (kèm người, thời điểm); không bỏ tick. Item verify không gán giáo viên và mọi loại item khác: chỉ xem. Backend kiểm tra đủ bốn điều kiện ở Flow 4 mỗi lần lưu. |
| `REQ09` | Đồng bộ | Sau khi tick, badge tiến độ Category và tiến độ buổi cập nhật ngay; Result của buổi khác và Action Board lớp không đổi. Đổi buổi không dùng dữ liệu buổi cũ. |
| `EX01` | Ngoại lệ | Giáo viên gửi request thêm tiêu chuẩn, sửa Result item không phải `verify` được gán, sửa ghi chú hoặc định nghĩa → backend từ chối. |
| `EX02` | Ngoại lệ | Nguồn quy trình của item chuyển `Vô hiệu` → tick Xác thực (`verify`) bị chặn; nội dung và Result cũ vẫn hiển thị. |
| `EX03` | Ngoại lệ | Lớp chưa được thêm tiêu chuẩn → hiển thị `Bảng dữ liệu này đang trống`. |
| `EX04` | Ngoại lệ | Giáo viên không có trong danh sách người tham gia của buổi, hoặc buổi ở trạng thái `Mới tạo` → không hiển thị trong danh sách, không đếm vào nhóm cùng thời gian; mở bằng URL hoặc request trực tiếp bị từ chối. |
| `EX05` | Ngoại lệ | Giáo viên không được mời buổi nào của lớp → danh sách hiển thị `Chưa có dữ liệu`, vùng trái trống. |
| `EX06` | Ngoại lệ | Giáo viên gửi request tạo/sửa/xoá buổi họp, đổi trạng thái, sửa người tham gia, sửa nội dung Action Board, sửa biên bản, hoặc cập nhật Result của item không phải `verify` được gán → backend từ chối, dữ liệu giữ nguyên. |
| `EX07` | Ngoại lệ | Lưu tick xác nhận thất bại do backend/network → Toast `Có Lỗi Xảy Ra`; ô về trạng thái chưa tick. |
| `EX08` | Ngoại lệ | Giáo viên bị gỡ khỏi danh sách người tham gia sau khi đang mở buổi → request tiếp theo bị từ chối; tải lại thì buổi biến mất khỏi danh sách. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Xem tiêu chuẩn và tiến độ | High | Có | Flow 1 / REQ01 / REQ02 | `A01` | `A01.06` |
| `TC02` | Case 2: Tick Xác thực được gán | High | Có | Flow 2 / REQ03 | `A01` | `A01.01` |
| `TC03` | Case 3: Item khác chỉ xem | High |  | EX01 / REQ02 | `A01` |  |
| `TC04` | Case 4: Nguồn Vô hiệu | Medium |  | EX02 / REQ03 | `A01` |  |
| `TC05` | Case 5: Lớp chưa có tiêu chuẩn | Medium |  | EX03 | `A01` | `A01.01` |
| `TC06` | Case 6: Chỉ thấy buổi được mời | High | Có | Flow 3 / REQ04 / EX04 | `A02` |  |
| `TC07` | Case 7: Card chỉ đọc | High |  | REQ04 / REQ05 | `A02` |  |
| `TC08` | Case 8: Popup người tham gia | Medium |  | REQ05 | `A02` |  |
| `TC09` | Case 9: Nhóm cùng thời gian theo quyền | High |  | REQ06 | `A02` |  |
| `TC10` | Case 10: Không có buổi | Medium |  | EX05 | `A02` |  |
| `TC11` | Case 11: Xem nội dung buổi | High | Có | Flow 3 / REQ07 | `A03` | `A03.02` |
| `TC12` | Case 12: Tick Xác thực được gán | High | Có | Flow 4 / REQ08 | `A03` |  |
| `TC13` | Case 13: Xác thực không gán | High |  | EX06 / REQ08 | `A03` |  |
| `TC14` | Case 14: Không bỏ tick | Medium |  | REQ08 | `A03` |  |
| `TC15` | Case 15: Item loại khác chỉ xem | High |  | EX06 / REQ07 | `A03` |  |
| `TC16` | Case 16: Biên bản chỉ đọc | Medium |  | REQ07 | `A03` | `A03.08` |
| `TC17` | Case 17: Tick lỗi | Medium |  | EX07 | `A03` |  |
| `TTC01` | Toast Case 1: Lỗi xử lý | High |  | Ràng buộc Toast CRUD | `A04` | `A04.02` |
| `TTC02` | Toast Case 2: Không Toast khi chỉ đọc | Low |  | Ràng buộc Toast CRUD | `A04` | `A04.01` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (26): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A03.05`, `A03.06`, `A03.07`, `A03.08`, `A04.01`, `A04.02`, `A04.03`, `A04.04`
- Popup chưa có màn cha (2): `GV-LOP-060100`, `GV-LOP-070100`
- Phân loại cần design duyệt (2): `GV-LOP-060100`, `GV-LOP-070100`
- Thiếu prototype link đi vào (2): `GV-LOP-060100`, `GV-LOP-070100`
- Testcase không trỏ REQ (2): `TTC01`, `TTC02`
- REQ/EX chưa có testcase (2): `REQ09`, `EX08`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
