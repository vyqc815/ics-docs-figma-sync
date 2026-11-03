# Quản lý tài khoản (Master)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `MST-TK-010000` | Tài khoản / Danh sách tài khoản | `/tai-khoan/danh-sach-tai-khoan` | `MST-TK-010000-DK` | QC |
| `MST-TK-020000` | Tài khoản / Chi tiết tài khoản | `/tai-khoan/chi-tiet-tai-khoan` | — | QC |

Requirement: `account_management/account_management.md` — Quản lý tài khoản (Master) (tiền tố `AM-AM`).

## 2. Luồng

- `FLOW01` Tạo tài khoản — 
- `FLOW02` Thêm role cho tài khoản — 
- `FLOW03` Bật/Tắt kích hoạt tài khoản — 
- `FLOW04` Đặt lại mật khẩu — 
- `FLOW05` Xóa tài khoản (soft-delete) — 
- `FLOW06` Tắt kích hoạt tài khoản đang có phiên đăng nhập — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `MST-TK-010010` | Popup thêm tài khoản | Popup | MST-TK-010000 | MST-TK-010000 | — | `/tai-khoan/danh-sach-tai-khoan?popup=MST-TK-010010` | Figma | cao |
| `MST-TK-010020` | Popup xác nhận xoá | Popup | MST-TK-010000 | MST-TK-010000 | — | `/tai-khoan/danh-sach-tai-khoan?popup=MST-TK-010020` | Figma | cao |
| `MST-TK-010030` | Popup đặt lại mật khẩu | Popup | MST-TK-010000 | MST-TK-010000 | — | `/tai-khoan/danh-sach-tai-khoan?popup=MST-TK-010030` | Figma | cao |
| `PRO-GD-010010` | Popup chọn màu giao diện | Popup | MST-TK-020000 | MST-TK-020000 | — | `/tai-khoan/chi-tiet-tai-khoan?popup=PRO-GD-010010` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Danh sách tài khoản

Frame: chưa có (tool đoán:MST-TK-010010, MST-TK-010030) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A02` Trang 2: Popup tạo / chỉnh sửa tài khoản

Frame: chưa có (tool đoán:MST-TK-010000, MST-TK-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A03` Toast phản hồi CRUD

Frame: chưa có (tool đoán:MST-TK-010000, MST-TK-020000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC02`, `TTC04`, `TC16`, `TC17`, `TC18` | Chưa sync | QC |
| `A03.02` | thong-tin |  |  | — |  | `TC06`, `TC11`, `TC12` | Chưa sync | QC |
| `A03.03` | canh-bao |  |  | — |  | `TTC02`, `TC16` | Chưa sync | QC |
| `A03.04` | loi |  |  | — |  |  | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` |  | Email là bắt buộc và phải duy nhất trong hệ thống. |
| `REQ02` |  | Mật khẩu chỉ hiển thị được (qua icon con mắt) khi tài khoản **còn giữ mật khẩu mặc định** (chưa từng đổi). Nếu tài khoản đã tự đổi mật khẩu, hệ thống **không hiển thị** mật khẩu dưới bất kỳ hình thức nào (bấm vào con mắt không có gì để xem). |
| `REQ03` |  | Mật khẩu mặc định khi tạo mới được hệ thống tự điền sẵn, Master có thể chỉnh sửa trước khi tạo. |
| `REQ04` |  | Đặt lại mật khẩu = đưa mật khẩu tài khoản đó về đúng giá trị mật khẩu mặc định của hệ thống. |
| `REQ05` |  | Một tài khoản phải có tối thiểu 1 role tại mọi thời điểm. Lúc tạo bắt buộc chọn >= 1 role. Lúc xóa không cho xóa role cuối cùng còn lại. |
| `REQ06` |  | Trạng thái "Kích hoạt" mặc định của tài khoản mới tạo luôn là **bật**. |
| `REQ07` |  | Xóa tài khoản là **soft-delete** |
| `REQ08` |  | Master được **gán tự do mọi role** cho tài khoản, không giới hạn/loại trừ kết hợp role nào. |
| `REQ09` |  | Bất kể Master có **sửa lại giá trị** mật khẩu mặc định lúc tạo hay không, mật khẩu đó vẫn được xem là **mật khẩu khởi tạo** → tài khoản **bắt buộc phải đổi mật khẩu** ở lần đăng nhập đầu tiên. Tương tự, sau khi bị **Đặt lại mật khẩu** (Flow 4), tài khoản cũng **bắt buộc phải đổi mật khẩu** ở lần đăng nhập tiếp theo. |
| `REQ10` |  | "Đặt lại mật khẩu" và "Tắt kích hoạt" đều hủy session ở **tất cả thiết bị** mà tài khoản đó đang đăng nhập, không chỉ 1 phiên gần nhất. |
| `EX01` | Ngoại lệ | Tạo tài khoản không chọn role nào → chặn submit, báo lỗi "Vui lòng chọn ít nhất 1 role". |
| `EX02` | Ngoại lệ | Tạo tài khoản với email đã tồn tại → báo lỗi "Email đã được sử dụng". |
| `EX03` | Ngoại lệ | Đặt lại mật khẩu cho tài khoản đang có phiên đăng nhập → hủy session ở **tất cả thiết bị**, tài khoản phải đăng nhập lại. |
| `EX04` | Ngoại lệ | Vô hiệu hóa (tắt kích hoạt) tài khoản đang có phiên đăng nhập → **buộc đăng xuất ngay lập tức trên tất cả thiết bị** (hủy toàn bộ session, giống hành vi đặt lại mật khẩu), đồng thời chặn đăng nhập ở các lần sau. |
| `EX05` | Ngoại lệ | Master cố **xóa hoặc tắt kích hoạt chính tài khoản Master đang đăng nhập** → hệ thống **chặn hành động**, báo lỗi (tránh tự khóa mình khỏi hệ thống). |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TTC01` | Toast Case 1: Thành công | High |  | Ràng buộc Toast CRUD | `A03` | `A03.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | Ràng buộc Toast CRUD | `A03` | `A03.01`, `A03.03` |
| `TTC03` | Toast Case 3: Lỗi | High |  | Ràng buộc Toast CRUD | `A03` |  |
| `TTC04` | Toast Case 4: Thông tin, đóng và chống lặp | Medium |  | Ràng buộc Toast CRUD | `A03` | `A03.01` |
| `TC01` | Case 1: Tạo tài khoản thành công | High | Có | Flow 1 | — |  |
| `TC02` | Case 2: Tạo tài khoản thiếu role | High |  | EX01 | — |  |
| `TC03` | Case 3: Tạo tài khoản email trùng | High |  | EX02 | — |  |
| `TC04` | Case 4: Thêm role cho tài khoản | Medium | Có | Flow 2 | — |  |
| `TC05` | Case 5: Badge "+N" khi nhiều hơn 2 role | Low |  | UI (Badge "+2") | — |  |
| `TC06` | Case 6: Bấm vào hàng tài khoản mở popup chỉnh sửa | Medium |  | UI (Row click) | — | `A03.02` |
| `TC07` | Case 7: Bật kích hoạt tài khoản | Medium | Có | Flow 3 | — |  |
| `TC08` | Case 8: Tắt kích hoạt tài khoản không có phiên đăng nhập | High |  | Flow 3 | — |  |
| `TC09` | Case 9: Tắt kích hoạt tài khoản đang có phiên đăng nhập | High |  | Flow 6 / EX04 | — |  |
| `TC10` | Case 10: Đặt lại mật khẩu cho tài khoản đang có phiên đăng nhập | High | Có | Flow 4 / EX03 | — |  |
| `TC11` | Case 11: Xem mật khẩu mặc định | Medium |  | REQ02 | — | `A03.02` |
| `TC12` | Case 12: Không xem được mật khẩu đã đổi | High |  | REQ02 | — | `A03.02` |
| `TC13` | Case 13: Xóa tài khoản (soft-delete) | Medium | Có | Flow 5 / REQ07 | — |  |
| `TC14` | Case 14: Chặn Master tự xóa/tắt kích hoạt chính mình | High |  | EX05 | — |  |
| `TC15` | Case 15: Không cho xóa role cuối cùng của tài khoản | High |  | REQ05 | — |  |
| `TC16` | Case 16: Master gán role tự do, không giới hạn kết hợp | Low |  | REQ08 | — | `A03.01`, `A03.03` |
| `TC17` | Case 17: Bắt buộc đổi mật khẩu lần đầu mới tạo (dù Master đã sửa mật khẩu khởi tạo) | High |  | REQ09 | — | `A03.01` |
| `TC18` | Case 18: Bắt buộc đổi mật khẩu sau khi bị đặt lại | High |  | REQ09 / Flow 4 | — | `A03.01` |
| `TC19` | Case 19: Tìm kiếm kết hợp bộ lọc | Medium | Có | UI (Tìm kiếm & bộ lọc) | — |  |
| `TC20` | Case 20: Role khác không truy cập được màn hình | High |  | Ràng buộc quyền | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (4): `A03.01`, `A03.02`, `A03.03`, `A03.04`
- Frame Figma chưa có requirement (4): `MST-TK-010010`, `MST-TK-010020`, `MST-TK-010030`, `PRO-GD-010010`
- Thiếu prototype link đi vào (4): `MST-TK-010010`, `MST-TK-010020`, `MST-TK-010030`, `PRO-GD-010010`
- Testcase không trỏ REQ (8): `TTC01`, `TTC02`, `TTC03`, `TTC04`, `TC05`, `TC06`, `TC19`, `TC20`
- REQ/EX chưa có testcase (5): `REQ01`, `REQ03`, `REQ04`, `REQ06`, `REQ10`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
