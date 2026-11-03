# Lịch dạy tổng

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LD-010000` | Lịch / Lịch dạy tổng | `/lich/lich-day-tong` | `ADM-LD-010000-DK` | QC |
| `ADM-LD-010010` | Lịch / Lịch dạy tổng / Theo lớp | `/lich/lich-day-tong/theo-lop` | `ADM-LD-010010-DK` | QC |

Requirement: `management_requirement/schedule_management/teaching_schedule_requirements.md` — Lịch dạy tổng (tiền tố `M-TS2`).

## 2. Luồng

- `FLOW01` Xem lịch tuần — `REQ01`, `REQ02`
- `FLOW02` Tìm kiếm và lọc — `REQ03`
- `FLOW03` Nhóm theo lớp — `REQ04`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Trang 1: Lịch dạy tổng theo tuần

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | khoang-tuan |  |  | — | see `A03` | `TC02` | Chưa sync | QC |
| `A01.02` | cot-ngay |  |  | — |  | `TC02` | Chưa sync | QC |
| `A01.03` | tim-lop-giao-vien |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | theo-lop |  |  | — |  | `TC01`, `TC02`, `TC06` | Chưa sync | QC |
| `A01.05` | trung-tam |  |  | — |  | `TC04` | Chưa sync | QC |
| `A01.06` | giao-vien |  |  | — |  | `TC04`, `TC05`, `TC08`, `TC11`, `TC12` | Chưa sync | QC |
| `A01.07` | loai-lop |  |  | — |  | `TC04` | Chưa sync | QC |
| `A01.08` | trinh-do |  |  | — |  | `TC04` | Chưa sync | QC |
| `A01.09` | hoc-ky |  |  | — |  |  | Chưa sync | QC |
| `A01.10` | ap-dung-bo-loc |  |  | — |  |  | Chưa sync | QC |
| `A01.11` | the-lich |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.12` | nhieu-lich-trong-ngay |  |  | — |  |  | Chưa sync | QC |
| `A01.13` | ngay-khong-co-lich |  |  | — |  |  | Chưa sync | QC |
| `A01.14` | loading-rong-loi |  |  | — |  |  | Chưa sync | QC |
| `A01.15` | lich-co-dinh |  |  | — |  |  | Chưa sync | QC |
| `A01.16` | lich-linh-hoat |  |  | — |  |  | Chưa sync | QC |
| `A01.17` | lich-hoan-thanh |  |  | — |  |  | Chưa sync | QC |
| `A01.18` | lich-huy-bo |  |  | — |  |  | Chưa sync | QC |

### `A02` Chế độ Theo lớp

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | nhom-lop |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | luoi-trong-nhom |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | cuon |  |  | — |  |  | Chưa sync | QC |

### `A03` Dropdown Tuần

Frame: chưa có (tool đoán:ADM-LD-010000, ADM-LD-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | mo |  |  | — |  |  | Chưa sync | QC |
| `A03.02` | danh-sach |  |  | — |  |  | Chưa sync | QC |
| `A03.03` | chon |  |  | — |  |  | Chưa sync | QC |
| `A03.04` | dong |  |  | — |  |  | Chưa sync | QC |

### `A04` Dropdown Giáo viên

Frame: chưa có (tool đoán:ADM-LD-010000, ADM-LD-010010) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A04.01` | nut-giao-vien |  |  | — |  |  | Chưa sync | QC |
| `A04.02` | tim-kiem |  |  | — |  |  | Chưa sync | QC |
| `A04.03` | danh-sach |  |  | — |  | `TC14` | Chưa sync | QC |
| `A04.04` | chon |  |  | — |  | `TC14` | Chưa sync | QC |
| `A04.05` | dong-panel |  |  | — |  | `TC14` | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Nguồn lịch | Bản ghi lịch đã sinh của mọi lớp (cố định, linh hoạt, hoàn thành, hủy; loại đã xóa) trong tuần; mỗi lịch một thẻ, bản ghi dời/thay thế hiển thị thay bản gốc. Giáo viên trên thẻ = giáo viên gán cho lịch → phụ trách chính → `Chưa có giáo viên`. |
| `REQ02` | Tuần | Thứ 2–Chủ Nhật, mặc định tuần hiện tại; `<` `>` dịch 1 tuần; dropdown chọn nhanh tuần (bấm khoảng tuần, tối thiểu ±1 năm, tuần đang chọn tô cam); ngày hiện tại tô nổi; timezone nghiệp vụ. |
| `REQ03` | Tìm kiếm và bộ lọc | Tìm theo mã lớp/tên giáo viên; Trung tâm, Giáo viên (có tìm kiếm), Loại lớp, Trình độ, Học kỳ đều chọn nhiều, mặc định Tất cả; OR trong bộ lọc, AND giữa bộ lọc; áp dụng ngay, giữ tuần/chế độ. |
| `REQ04` | Theo lớp | Mặc định tắt; bật nhóm theo mã lớp A–Z, mỗi nhóm lưới 7 ngày; tắt gom theo ngày; cùng tập lịch. |
| `REQ05` | Thẻ lịch | Avatar + tên giáo viên, mã lớp, `HH:mm - HH:mm`; không có số thứ tự buổi; màu viền theo 4 trạng thái của Tab Lịch dạy; hover hiện trạng thái. |
| `REQ06` | Chỉ xem | Không có hành động trên thẻ; không nút thêm/sửa/hoàn thành/hủy/mở lại; backend từ chối request ghi từ màn này. |
| `EX01` | Ngoại lệ | Tuần hoặc bộ lọc không có lịch → 7 ô `Không có lịch`; không lỗi. |
| `EX02` | Ngoại lệ | Role ngoài Admin, Class Handler, Support mở menu hoặc gọi API → từ chối; Giáo viên dùng menu Lịch dạy của riêng mình. |
| `EX03` | Ngoại lệ | Tải dữ liệu thất bại → vùng lỗi có `Thử lại`; đổi tuần nhanh chỉ hiển thị response mới nhất. |
| `EX04` | Ngoại lệ | Request ghi (tạo/sửa/hoàn thành/hủy lịch) gửi từ màn này → backend từ chối; CRUD chỉ tại Tab Lịch dạy của lớp. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Mở lịch tuần hiện tại | High | Có | Flow 1 / REQ01 / REQ02 | `A01` | `A01.04`, `A01.11` |
| `TC02` | Case 2: Chuyển tuần và chọn nhanh tuần | High |  | Flow 1 / REQ02 | `A01` | `A01.01`, `A01.02`, `A01.04` |
| `TC03` | Case 3: Tìm theo mã lớp / tên giáo viên | High |  | Flow 2 / REQ03 | `A01` |  |
| `TC04` | Case 4: Lọc nhiều giá trị | High |  | Flow 2 / REQ03 | `A01` | `A01.05`, `A01.06`, `A01.07`, `A01.08` |
| `TC05` | Case 5: Lọc Giáo viên nhiều người | Medium |  | REQ03 | `A01` | `A01.06` |
| `TC06` | Case 6: Bật Theo lớp | High |  | Flow 3 / REQ04 | `A01` | `A01.04` |
| `TC07` | Case 7: Màu thẻ theo trạng thái | High |  | REQ05 | `A01` |  |
| `TC08` | Case 8: Bấm thẻ không hành động | High |  | REQ06 | `A01` | `A01.06` |
| `TC09` | Case 9: Tuần không có lịch | Medium |  | EX01 | `A01` |  |
| `TC10` | Case 10: Lịch dời không trùng thẻ | Medium |  | REQ01 | `A01` |  |
| `TC11` | Case 11: Giáo viên chưa gán | Low |  | REQ05 | `A01` | `A01.06` |
| `TC12` | Case 12: Role khác không vào được | High |  | EX02 / Ràng buộc quyền | `A01` | `A01.06` |
| `TC13` | Case 13: Lỗi tải | Medium |  | EX03 | `A01` |  |
| `TC14` | Case 14: Tìm và chọn trong dropdown | Medium |  | REQ03 | `A04` | `A04.03`, `A04.04`, `A04.05` |
| `TC15` | Case 15: Danh sách theo trung tâm | Medium |  | REQ03 | `A04` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (30): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A01.08`, `A01.09`, `A01.10`, `A01.11`, `A01.12`, `A01.13`, `A01.14`, `A01.15`, `A01.16`, `A01.17`, `A01.18`, `A02.01`, `A02.02`, `A02.03`, `A03.01`, `A03.02`, `A03.03`, `A03.04`, `A04.01`, `A04.02`, `A04.03`, `A04.04`, `A04.05`
- REQ/EX chưa có testcase (1): `EX04`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
