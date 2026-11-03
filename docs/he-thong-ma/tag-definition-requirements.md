# Define Tag — Quản lý nhóm và tag

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-TAG-010000` | Tag / Quản lý tag | `/tag/quan-ly-tag` | `ADM-TAG-010000-DK` | QC |

Requirement: `tag_definition_requirement/tag_definition_requirements.md` — Define Tag — Quản lý nhóm và tag (tiền tố `TD-TD`).

## 2. Luồng

- `FLOW01` Xem nhóm và tag — `REQ01`
- `FLOW02` Tạo nhóm — `REQ02`
- `FLOW03` Tạo tag — `REQ03`
- `FLOW04` Sửa và xóa — `REQ06`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `ADM-TAG-010010` | Popup thêm tag | Popup | ADM-TAG-010000 | ADM-TAG-010000 | — | `/tag/quan-ly-tag?popup=ADM-TAG-010010` | Figma | cao |
| `ADM-TAG-010020` | Popup thêm nhóm tag | Popup | ADM-TAG-010000 | ADM-TAG-010000 | — | `/tag/quan-ly-tag?popup=ADM-TAG-010020` | Figma | cao |

## 4. Khu vực và item

### `A01` Trang 1: Tag quản lý và Nhóm

Frame: `ADM-TAG-010000` (tool đoán:ADM-TAG-010020) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tag-quan-ly | `Role Component`  | `3065:64802` Tag quản lý; `I3065:68021;139:67075` Thêm chức vụ | — | opens `A01` |  | Khớp | QC |
| `A01.02` | nhom |  | `3065:67847` Nhóm | — |  | `TC01` | Khớp | QC |
| `A01.03` | them-nhom-moi | `Molecule/Add New Bar` Type=Box, Size=S, State=Default | `3065:67890` Add New Bar · Thêm mới | — | opens `A02` |  | Khớp | QC |
| `A01.04` | chinh-sua-xoa |  |  | — |  |  | Chưa khớp tự động | QC |

### `A02` Popup Thêm nhóm mới

Frame: `ADM-TAG-010020` (tool đoán:ADM-TAG-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | ten-nhom | `Atom/Label`  | `I3065:69670;3004:58620` Atom/Label | — |  |  | Khớp | QC |
| `A02.02` | mo-ta | `Atom/Label`  | `I3065:69671;3004:58620` Atom/Label | — |  |  | Khớp | QC |
| `A02.03` | loai | `Atom/Label`  | `I3065:69673;3004:58620` Atom/Label | — |  | `TC02`, `TC03` | Khớp | QC |
| `A02.04` | them-huy |  |  | — |  |  | Chưa khớp tự động | QC |

### `A03` Popup Thêm tag

Frame: `ADM-TAG-010010` (tool đoán:ADM-TAG-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | ten-tag-mo-ta |  |  | — |  |  | Chưa khớp tự động | QC |
| `A03.02` | nhom |  |  | — |  | `TC04`, `TC05`, `TC06`, `TC09`, `TC10`, `TC11` | Chưa khớp tự động | QC |
| `A03.03` | loai |  |  | — |  | `TC04`, `TC05`, `TC06` | Chưa khớp tự động | QC |
| `A03.04` | mau-sac | `Atom/Label`  | `3065:69601` Atom/Label | — |  | `TC07` | Khớp | QC |
| `A03.05` | them-huy-bo |  |  | — |  |  | Chưa khớp tự động | QC |

### `A04` Toast phản hồi CRUD

Frame: `ADM-TAG-010000` (tool đoán:ADM-TAG-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | thanh-cong |  |  | — |  | `TTC01`, `TTC03` | Chưa khớp tự động | QC |
| `A04.02` | canh-bao |  |  | — |  | `TTC02` | Chưa khớp tự động | QC |
| `A04.03` | co-loi-xay-ra |  |  | — |  | `TTC03` | Chưa khớp tự động | QC |
| `A04.04` | thong-bao |  |  | — |  | `TTC04` | Chưa khớp tự động | QC |

### `F01` (ngoài Body)

Frame: `ADM-TAG-010000` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | sidebar-menu-admin | `MENU - ADMIN`  | `4915:248607` Sidebar · MENU - ADMIN | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-tag-solid | `Atom/Tag Solid` Size=26H | `3065:68045` Atom/Tag Solid | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | mouse-click |  | `3065:68897` Mouse click | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | role-component | `Role Component`  | `3065:68021` Role Component | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | loai-tag | `Loại tag`  | `3065:67854` Loại tag | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Hiển thị | Define Tag hiển thị nhóm và tag cùng tên, mô tả, Loại đã lưu; chọn nhóm chỉ xem tag thuộc nhóm đó. |
| `REQ02` | Loại nhóm | Popup Thêm nhóm có Tên nhóm, Mô tả, Loại; Loại chỉ gồm Học viên/Giáo viên/Lớp/Hoá đơn/Ghi chú và được lưu ở cấp nhóm. |
| `REQ03` | Nhóm và Loại của tag | Tag bắt buộc thuộc một nhóm; phải có nhóm rồi mới thêm được tag. Form thêm tag không có trường Loại và tag kế thừa Loại của nhóm; không cho lưu tag khác loại với nhóm. |
| `REQ04` | Phản hồi | Thêm/sửa/xóa chỉ báo thành công sau khi xử lý xong; Hủy hoặc lỗi xử lý không làm thay đổi dữ liệu. |
| `REQ05` | Nhập liệu | Khi thêm tag, Tên tag và Màu sắc là bắt buộc; Mô tả không bắt buộc. Không kiểm tra trùng tên và không có giới hạn nghiệp vụ khác cho Tên nhóm, Tên tag, Mô tả, Màu sắc. Tag không có field Ngày thống kê và Riêng tư. Không áp đặt mặc định từ dữ liệu mẫu UI. |
| `REQ06` | CRUD | Admin, Class Handler và Support được xem, thêm, sửa, xóa nhóm và tag. Sửa tag được đổi nhóm của tag. Xóa nhóm không xóa các tag thuộc nhóm. |
| `REQ07` | ComGao | Tag ICS dùng chung bảng và bản ghi với ComGao; thao tác không tạo bản sao riêng. Nhóm/tag dùng chung cho toàn hệ thống, không phân theo center. |
| `EX01` | Ngoại lệ | Tag tạo trong nhóm có Loại khác Loại nhóm → không tạo tag sai loại, không thay đổi nhóm. |
| `EX02` | Ngoại lệ | Hủy hoặc lưu lỗi → không tạo nhóm/tag dở dang. |
| `EX03` | Ngoại lệ | Không có quyền CRUD → từ chối thao tác. |
| `EX04` | Ngoại lệ | Tạo tag không có nhóm hoặc nhóm không tồn tại → không tạo tag. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Xem nhóm và tag | High | Có | Flow 1 / REQ01 | `A01` | `A01.02` |
| `TC02` | Case 2: Danh sách Loại nhóm | High |  | Flow 2 / REQ02 | `A02` | `A02.03` |
| `TC03` | Case 3: Tạo nhóm | High | Có | Flow 2 / REQ02 | `A02` | `A02.03` |
| `TC04` | Case 4: Không thêm được tag khi không có nhóm | High |  | Flow 3 / EX04 / REQ03 | `A03` | `A03.02`, `A03.03` |
| `TC05` | Case 5: Thêm tag trong nhóm | High | Có | Flow 3 / REQ03 | `A03` | `A03.02`, `A03.03` |
| `TC06` | Case 6: Không ghi đè Loại nhóm | High |  | EX01 / REQ03 | `A03` | `A03.02`, `A03.03` |
| `TC07` | Case 7: Field bắt buộc và trùng tên | High |  | REQ05 | `A03` | `A03.04` |
| `TC08` | Case 8: Quyền CRUD | High |  | Flow 4 / REQ06 | `A03` |  |
| `TC09` | Case 9: Dùng chung bản ghi với ComGao, không theo center | High |  | REQ07 | `A03` | `A03.02` |
| `TC10` | Case 10: Xóa nhóm không xóa tag con | High |  | Flow 4 / REQ06 | `A03` | `A03.02` |
| `TC11` | Case 11: Đổi nhóm của tag | High |  | Flow 4 / REQ06 | `A03` | `A03.02` |
| `TTC01` | Toast Case 1: Thành công | High |  | REQ04 | `A04` | `A04.01` |
| `TTC02` | Toast Case 2: Cảnh báo | High |  | REQ04 | `A04` | `A04.02` |
| `TTC03` | Toast Case 3: Lỗi xử lý | High |  | REQ04 | `A04` | `A04.01`, `A04.03` |
| `TTC04` | Toast Case 4: Hủy và chờ đồng bộ | Medium |  | REQ04 | `A04` | `A04.04` |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (10): `A01.04`, `A02.04`, `A03.01`, `A03.02`, `A03.03`, `A03.05`, `A04.01`, `A04.02`, `A04.03`, `A04.04`
- Frame Figma chưa có requirement (2): `ADM-TAG-010010`, `ADM-TAG-010020`
- Thiếu prototype link đi vào (2): `ADM-TAG-010010`, `ADM-TAG-010020`
- REQ/EX chưa có testcase (2): `EX02`, `EX03`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
