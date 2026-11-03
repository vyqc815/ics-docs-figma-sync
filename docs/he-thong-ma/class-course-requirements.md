# [Giáo viên] Chi tiết lớp — Khoá học

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-080100` | Chi tiết lớp / Mindset khoá học / Học viên | `/chi-tiet-lop/mindset-khoa-hoc/hoc-vien` | `GV-LOP-080100-DK` | QC |

Requirement: `teacher_role/class/class_course_requirements.md` — [Giáo viên] Chi tiết lớp — Khoá học (tiền tố `TR-CC`).

## 2. Luồng

- `FLOW01` Xem Mindset khoá học, Hướng dẫn giảng dạy — `REQ01`, `REQ02`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-LOP-090100` | Trống | Trạng thái | — | — | — | — | QC | thấp |

## 4. Khu vực và item

### `A01` Mindset khoá học

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | danh-sach-ben-phai |  |  | — |  |  | Chưa sync | QC |
| `A01.02` | tieu-de-ben-trai |  |  | — |  |  | Chưa sync | QC |
| `A01.03` | khoi-noi-dung |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | nguon |  |  | — |  |  | Chưa sync | QC |
| `A01.05` | khong-co-du-lieu |  |  | — |  |  | Chưa sync | QC |

### `A02` Hướng dẫn giảng dạy

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | danh-sach |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | vung-trai |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | khi-co-du-lieu |  |  | — |  |  | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Mindset khoá học | Hiển thị theo khoá học gắn với lớp, các mục và nhóm theo thứ tự CD lưu; chỉ đọc; mục đầu chọn sẵn; nhóm thu gọn/mở. |
| `REQ02` | Hướng dẫn giảng dạy | Cùng nguồn và cách hiển thị với Mindset khi CD có dữ liệu; hiện là trạng thái trống. |
| `EX01` | Ngoại lệ | Khoá học chưa có Mindset / Hướng dẫn giảng dạy → `Chưa có dữ liệu`; không lỗi. |
| `EX02` | Ngoại lệ | Request sửa nội dung từ role Giáo viên → backend từ chối. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Xem Mindset | High | Có | Flow 1 / REQ01 | `A01` |  |
| `TC02` | Case 2: Thu gọn nhóm | Low |  | REQ01 | `A01` |  |
| `TC03` | Case 3: Khoá chưa có Mindset | Medium |  | EX01 | `A01` |  |
| `TC04` | Case 4: Đúng khoá của lớp | High |  | REQ01 | `A01` |  |
| `TC05` | Case 5: Trạng thái trống | Medium |  | Flow 1 / EX01 | `A02` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (8): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A02.01`, `A02.02`, `A02.03`
- Popup chưa có màn cha (1): `GV-LOP-090100`
- Phân loại cần design duyệt (1): `GV-LOP-090100`
- Thiếu prototype link đi vào (1): `GV-LOP-090100`
- REQ/EX chưa có testcase (2): `REQ02`, `EX02`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
