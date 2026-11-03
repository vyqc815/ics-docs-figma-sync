# [Giáo viên] Chi tiết lớp — Đánh giá

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-100100` | Chi tiết lớp / Đánh giá / Không có quyền truy cập | `/chi-tiet-lop/danh-gia/khong-co-quyen-truy-cap` | `GV-LOP-100100-DK` | QC |

Requirement: `teacher_role/class/class_evaluation_requirements.md` — [Giáo viên] Chi tiết lớp — Đánh giá (tiền tố `TR-CE`).

## 2. Luồng

- `FLOW01` Bấm menu Đánh giá — `REQ01`

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Màn Không có quyền truy cập

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | menu-danh-gia |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.02` | hinh-minh-hoa |  |  | — |  |  | Chưa sync | QC |
| `A01.03` | tieu-de |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | mo-ta |  |  | — |  | `TC01` | Chưa sync | QC |
| `A01.05` | nut-quay-ve-trang-chu |  |  | — |  |  | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Không có quyền | Role Giáo viên luôn thấy màn `Không có quyền truy cập` ở menu Đánh giá; menu vẫn hiển thị; nút `Quay về trang chủ` về menu Lớp. Backend chặn mọi request đánh giá của role này. |
| `EX01` | Ngoại lệ | Mở URL menu Đánh giá hoặc gọi API đánh giá bằng role Giáo viên → màn `Không có quyền truy cập`; API trả lỗi quyền, không trả dữ liệu. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Bấm menu Đánh giá | High | Có | Flow 1 / REQ01 | `A01` | `A01.01`, `A01.04` |
| `TC02` | Case 2: Quay về trang chủ | Medium |  | Flow 1 / REQ01 | `A01` |  |
| `TC03` | Case 3: Truy cập bằng URL / request | High |  | EX01 / REQ01 | `A01` |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (5): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
