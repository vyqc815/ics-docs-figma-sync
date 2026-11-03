# Move Video

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-MV-010000` | Move video / Xác minh Gmail | `/move-video/xac-minh-gmail` | `ADM-MV-010000-DK` | QC |
| `ADM-MV-020000` | Move video / Danh sách video | `/move-video/danh-sach-video` | `ADM-MV-020000-DK` | QC |

Requirement: `tools/move_video/move_video.md` — Move Video (tiền tố `T-MV`).

## 2. Luồng

- `FLOW01` Đăng nhập, xác minh Gmail và vào danh sách — 
- `FLOW02` Xác định lớp, buổi học và tên đề xuất cho từng file — 
- `FLOW03` Move 1 file (nút Move) — 
- `FLOW04` Đổi tên file ở folder tổng (icon bút) — 
- `FLOW05` Đổi tên và di chuyển hàng loạt — 
- `FLOW06` Xoá nhiều file (xoá mềm) — 
- `FLOW07` Xác minh lại — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-MV-020010` | Popup đổi tên video | Popup | ADM-MV-020000 | ADM-MV-020000 | — | `/move-video/danh-sach-video?popup=ADM-MV-020010` | Figma | cao |
| `ADM-MV-020020` | Popup xác nhận xoá | Popup | ADM-MV-020000 | ADM-MV-020000 | — | `/move-video/danh-sach-video?popup=ADM-MV-020020` | Figma | cao |
| `ADM-MV-020030` | Popup đổi tên & move video | Popup | ADM-MV-020000 | ADM-MV-020000 | — | `/move-video/danh-sach-video?popup=ADM-MV-020030` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Xác minh Gmail

Frame: `ADM-MV-010000`, `ADM-MV-020000` (tool đoán:ADM-MV-010000, ADM-MV-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 2: Danh sách video

Frame: `ADM-MV-010000`, `ADM-MV-020000` (tool đoán:ADM-MV-010000, ADM-MV-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Trang 3: Popup Đổi tên video và xác nhận xoá

Frame: `ADM-MV-020010`, `ADM-MV-020020`, `ADM-MV-020030` (tool đoán:ADM-MV-020010, ADM-MV-020020, ADM-MV-020030) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `F01` (ngoài Body)

Frame: `ADM-MV-010000`, `ADM-MV-020000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | empty-state-gmail | `Empty State / Gmail`  | `2619:203719` Empty State / Gmail | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-button | `Atom/Button` Type=Primary, Size=Medium | `2409:148203` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:240882` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | account | `ACCOUNT` Size=Default | `2706:23582` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | filter-thoi-gian | `DD/Molecule/Trigger` Size=XS, State=Active | `3772:93338` Filter · Thời gian | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | mv-row-video | `MV/Row · Video` State=Hover | `2409:150819` MV/Row · Video | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Nguồn danh sách | Danh sách = các file record trong folder tổng `MEET RECORDINGS SS` trên Drive của tài khoản Gmail đã xác minh, chưa bị xoá mềm. |
| `REQ02` | Quy tắc xác định buổi học | Link cuộc họp → DB → class → id → course_id → các lesson cùng course_id mới nhất được mở → tên buổi học. |
| `REQ03` | Điều kiện lớp | Chỉ class có status **In progress** mới được sử dụng. |
| `REQ04` | Folder và tên file đích | Class code = tên folder trong drive `SCREEN RECORDING`. Tên file đích mặc định `ngày_tên lesson` do hệ thống đặt khi move; user có thể sửa ở popup. |
| `REQ05` | Phân loại trạng thái | Mỗi dòng được gán trạng thái theo bảng bên dưới; quyết định màu badge, icon và thông báo. Chỉ dùng các thông báo trong bảng này. |
| `REQ06` | Hiển thị lỗi | Mọi lỗi hiển thị ngay trong danh sách (cột Bài học), không dùng popup lỗi. |
| `REQ07` | Filter | Lọc theo **ngày tạo file trên Drive**, cho chọn 1 ngày hoặc khoảng ngày, đặt cạnh nút Xác minh lại, mặc định là tất cả. |
| `REQ08` | Popup Đổi tên video | Dùng cho cả dòng xanh và không xanh; tên rỗng không cho Xác nhận. |
| `REQ09` | Đổi tên hai nơi | Cả icon bút và nút Move đều mở popup Đổi tên video. Icon bút: đổi tên file ở folder tổng. Move: đổi tên file ở folder của lớp rồi move. |
| `REQ10` | Copy tên video | Icon copy bên trái tên video copy tên video. |
| `REQ11` | Đổi tên và di chuyển hàng loạt | Chỉ áp dụng cho các dòng xanh; không xử lý dòng cam/đỏ. Bấm là move luôn, không popup. |
| `REQ12` | Xoá mềm | Bấm Xoá hiện popup xác nhận. Dòng đã xoá không hiển thị trong danh sách nữa. Trên Drive, tên file được thêm hậu tố `_deleted_{account người xoá}` (ví dụ `..._deleted_dacnham`). |
| `REQ13` | Sau khi move thành công | File không còn trong folder tổng nên dòng biến mất khỏi danh sách. |
| `REQ14` | Xác minh lại | Nút `Xác minh lại` lấy lại danh sách file mới nhất từ Drive. |
| `REQ15` | Màu badge khi nhiều lỗi | Mặc định cam; nếu có lỗi loại đỏ thì badge đỏ. Các lỗi đều hiển thị trong cột Bài học. |
| `EX01` | Ngoại lệ | Chưa xác thực tài khoản Google khi thao tác (chưa liên kết hoặc hết phiên) → hiển thị "Bạn chưa xác thực tài khoản google" (`txtNotLoggedIn`), yêu cầu xác minh lại. |
| `EX02` | Ngoại lệ | Reload trang → mất liên kết Google, quay lại bước đăng nhập Google. |
| `EX03` | Ngoại lệ | Move dòng không xanh mà BE kiểm tra vẫn không hợp lệ → hiển thị đúng lỗi tương ứng (bảng 2.3) trong danh sách, file không bị đổi tên/move, dòng giữ nguyên. |
| `EX04` | Ngoại lệ | File không còn trong `MEET RECORDINGS SS` khi move → hiển thị lỗi "Không tìm thấy file video trong drive MEET RECORDINGS SS" (`txtErrorInvalidFile`) trong danh sách. |
| `EX05` | Ngoại lệ | Trùng tên file video trong `MEET RECORDINGS SS` → "Trùng tên file video trong drive MEET RECORDINGS SS" (`txtErrorDuplicateVideo`). |
| `EX06` | Ngoại lệ | Trùng link meet hoặc trùng video khi move → "Trùng link meet hoặc trùng video, vui lòng kiểm tra lại" (`txtDuplicateLinkOrVideo`) trong danh sách. |
| `EX07` | Ngoại lệ | Đổi tên và di chuyển hàng loạt mà có dòng xanh move thất bại → "Vẫn còn một số link video bị lỗi, vui lòng kiểm tra lại" (`txtStillSomeErrorVideo`). |
| `EX08` | Ngoại lệ | User bấm Huỷ ở popup → đóng popup, không gọi API, không thay đổi gì. |
| `EX09` | Ngoại lệ | Tên rỗng ở popup → nút Xác nhận không cho bấm. |
| `EX10` | Ngoại lệ | Huỷ ở popup xác nhận xoá → không xoá, các dòng vẫn giữ trạng thái tick. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Đăng nhập Google và xác minh | High | Có | Flow 1, EX02 | — |  |
| `TC02` | Case 2: Hiển thị và phân loại danh sách | High | Có | Flow 2, REQ02, REQ03, REQ05 | — |  |
| `TC03` | Case 3: Filter theo ngày tạo | Medium |  | REQ07 | — |  |
| `TC04` | Case 4: Move dòng xanh, huỷ popup, tên rỗng | High |  | Flow 3, EX08, EX09, REQ08 | — |  |
| `TC05` | Case 5: Move dòng không xanh thành công | High | Có | Flow 3 | — |  |
| `TC06` | Case 6: Move bị lỗi | High |  | EX03, EX04, EX05, EX06, REQ06 | — |  |
| `TC07` | Case 7: Icon bút và icon copy | Medium |  | Flow 4, REQ09, REQ10 | — |  |
| `TC08` | Case 8: Đổi tên và di chuyển hàng loạt | High |  | Flow 5, EX07, REQ11 | — |  |
| `TC09` | Case 9: Xoá mềm nhiều file | High |  | Flow 6, REQ12 | — |  |
| `TC10` | Case 10: Xác minh lại và hết phiên Google | High |  | Flow 7, EX01, REQ14 | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Frame Figma chưa có requirement (3): `ADM-MV-020010`, `ADM-MV-020020`, `ADM-MV-020030`
- Thiếu prototype link đi vào (3): `ADM-MV-020010`, `ADM-MV-020020`, `ADM-MV-020030`
- REQ/EX chưa có testcase (5): `REQ01`, `REQ04`, `REQ13`, `REQ15`, `EX10`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
