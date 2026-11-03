# Lương giáo viên — Admin

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `ADM-LGV-010000` | Lương / Lương giáo viên | `/luong/luong-giao-vien` | `ADM-LGV-010000-DK` | QC |

Requirement: `management_requirement/salary_management/teacher_salary_requirements.md` — Lương giáo viên — Admin (tiền tố `M-TS`).

## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Tổng quan

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tim-kiem |  |  | — |  |  | Chưa sync | QC |
| `A01.02` | pham-vi-thong-ke |  |  | — |  |  | Chưa sync | QC |
| `A01.03` | thoi-gian |  |  | — |  |  | Chưa sync | QC |
| `A01.04` | sau-the-toan-trang |  |  | — |  |  | Chưa sync | QC |
| `A01.05` | bon-the-giao-vien-dang-chon |  |  | — |  |  | Chưa sync | QC |
| `A01.06` | danh-sach-giao-vien |  |  | — |  |  | Chưa sync | QC |
| `A01.07` | lop-con-cua-giao-vien |  |  | — |  |  | Chưa sync | QC |
| `A01.08` | checkbox-va-export |  |  | — |  |  | Chưa sync | QC |
| `A01.09` | tooltip-tong-luong-giao-vien |  |  | — |  |  | Chưa sync | QC |
| `A01.10` | tooltip-tong-luong-lop |  |  | — |  |  | Chưa sync | QC |

### `A02` Tab Lớp học

Frame: chưa có (tool đoán:ADM-LGV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A02.01` | lop |  |  | — |  |  | Chưa sync | QC |
| `A02.02` | tien-do |  |  | — |  |  | Chưa sync | QC |
| `A02.03` | si-so |  |  | — |  |  | Chưa sync | QC |
| `A02.04` | so-buoi |  |  | — |  |  | Chưa sync | QC |
| `A02.05` | luong-buoi |  |  | — |  |  | Chưa sync | QC |
| `A02.06` | kpi-ot |  |  | — |  |  | Chưa sync | QC |
| `A02.07` | tong-luong |  |  | — |  |  | Chưa sync | QC |

### `A03` Các tab Buổi dạy / KPI / OT

Frame: chưa có (tool đoán:ADM-LGV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A03.01` | buoi-day |  |  | — |  |  | Chưa sync | QC |
| `A03.02` | kpi |  |  | — |  |  | Chưa sync | QC |
| `A03.03` | ot |  |  | — |  |  | Chưa sync | QC |

### `A04` Chọn giáo viên để Export

Frame: chưa có (tool đoán:ADM-LGV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A05` File Excel tổng hợp lương giáo viên

Frame: chưa có (tool đoán:ADM-LGV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A05.01` | 1 |  |  | — |  |  | Chưa sync | QC |
| `A05.02` | 2 |  |  | — |  |  | Chưa sync | QC |
| `A05.03` | 3 |  |  | — |  |  | Chưa sync | QC |
| `A05.04` | 4 |  |  | — |  |  | Chưa sync | QC |
| `A05.05` | 5 |  |  | — |  |  | Chưa sync | QC |
| `A05.06` | 6 |  |  | — |  |  | Chưa sync | QC |
| `A05.07` | 7 |  |  | — |  |  | Chưa sync | QC |
| `A05.08` | 8 |  |  | — |  |  | Chưa sync | QC |
| `A05.09` | 9 |  |  | — |  |  | Chưa sync | QC |
| `A05.10` | 10 |  |  | — |  |  | Chưa sync | QC |
| `A05.11` | 11 |  |  | — |  |  | Chưa sync | QC |
| `A05.12` | 12 |  |  | — |  |  | Chưa sync | QC |

### `A06` Quy tắc đã có từ các requirement liên quan

Frame: chưa có (tool đoán:ADM-LGV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A07` Luồng xem dữ liệu

Frame: chưa có (tool đoán:ADM-LGV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A08` Sai lệch dữ liệu mẫu Figma

Frame: chưa có (tool đoán:ADM-LGV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A08.01` | case-1-dung-giao-vien |  |  | — | governed-by `REQ01` |  | Chưa sync | QC |
| `A08.02` | case-2-ngay-lich-khac-hoan-thanh |  |  | — | governed-by `REQ02` |  | Chưa sync | QC |
| `A08.03` | case-3-buoi-khong-lich |  |  | — | governed-by `REQ03` |  | Chưa sync | QC |
| `A08.04` | case-4-khong-hoi-to |  |  | — | governed-by `REQ03`; governed-by `REQ06` |  | Chưa sync | QC |
| `A08.05` | case-5-kpi-ot-xac-nhan |  |  | — | governed-by `REQ04` |  | Chưa sync | QC |
| `A08.06` | case-6-tong-theo-cong-thuc |  |  | — | governed-by `REQ05` |  | Chưa sync | QC |
| `A08.07` | case-7-khoan-khong-co-buoi |  |  | — | governed-by `REQ04`; governed-by `REQ05` |  | Chưa sync | QC |
| `A08.08` | case-8-request-tra-sai-thu-tu |  |  | — | governed-by `REQ07` |  | Chưa sync | QC |
| `A08.09` | case-9-loi-du-lieu |  |  | — | governed-by `REQ07` |  | Chưa sync | QC |
| `A08.10` | case-10-duyet-khac-ap-dung-luong |  |  | — | governed-by `REQ06` |  | Chưa sync | QC |
| `A08.11` | case-11-chi-thong-ke-va-export |  |  | — | governed-by `REQ08` |  | Chưa sync | QC |
| `A08.12` | case-12-tap-phat-sinh-trong-ky |  |  | — | governed-by `REQ01` |  | Chưa sync | QC |
| `A08.13` | case-13-chon-xem-doc-lap-export |  |  | — | governed-by `REQ08`; governed-by `REQ09` |  | Chưa sync | QC |
| `A08.14` | case-14-loc-lop-dung-giao-vien |  |  | — | governed-by `REQ09` |  | Chưa sync | QC |
| `A08.15` | case-15-dung-mau-excel |  |  | — | governed-by `REQ08` |  | Chưa sync | QC |
| `A08.16` | case-16-bao-toan-thong-tin-tai-khoan |  |  | — | governed-by `REQ08` |  | Chưa sync | QC |
| `A08.17` | case-17-tong-excel-dung-pham-vi |  |  | — | governed-by `REQ05`; governed-by `REQ08` |  | Chưa sync | QC |
| `A08.18` | case-18-checkbox-qua-nhieu-trang |  |  | — | governed-by `REQ08` |  | Chưa sync | QC |
| `A08.19` | case-19-doi-loc-xoa-tap-chon |  |  | — | governed-by `REQ08` |  | Chưa sync | QC |
| `A08.20` | case-20-so-lop-toan-trang-khong-trung |  |  | — | governed-by `REQ01`; governed-by `REQ05` |  | Chưa sync | QC |
| `A08.21` | case-21-tim-dung-truong |  |  | — | governed-by `REQ10` |  | Chưa sync | QC |
| `A08.22` | case-22-mac-dinh-va-doi-giao-vien |  |  | — | governed-by `REQ09` |  | Chưa sync | QC |
| `A08.23` | case-23-loc-lop-khong-doi-tong-ca-nhan |  |  | — | governed-by `REQ05`; governed-by `REQ09` |  | Chưa sync | QC |
| `A08.24` | case-24-tab-dung-cau-truc-chung-va-phan- |  |  | — | governed-by `REQ10` |  | Chưa sync | QC |

### `A09` Đã chốt

Frame: chưa có (tool đoán:ADM-LGV-010000) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|

### `A10` Cần xác nhận

Frame: chưa có · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A10.01` | anh-mau-excel-nguoi-dung-cung-cap-ngay-1 |  |  | — |  |  | Chưa sync | QC |
| `A10.02` | pls-repository-api-lib-model-user-user-m |  |  | — |  |  | Chưa sync | QC |
| `A10.03` | figma-page-4101-128323-frame-4101-138376 |  |  | — |  |  | Chưa sync | QC |
| `A10.04` | figma-dropdown-4101-140492 |  |  | — |  |  | Chưa sync | QC |
| `A10.05` | pls-repository-api-lib-services-admin-ad |  |  | — |  |  | Chưa sync | QC |
| `A10.06` | pls-repository-api-lib-repositories-fire |  |  | — |  |  | Chưa sync | QC |
| `A10.07` | pls-repository-api-lib-repositories-fire |  |  | — |  |  | Chưa sync | QC |
| `A10.08` | pls-repository-api-lib-model-course-less |  |  | — |  |  | Chưa sync | QC |
| `A10.09` | pls-repository-api-lib-model-user-user-c |  |  | — |  |  | Chưa sync | QC |
| `A10.10` | teacher-detail-teacher-history-salary-re |  |  | — |  |  | Chưa sync | QC |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa sync (66): `A01.01`, `A01.02`, `A01.03`, `A01.04`, `A01.05`, `A01.06`, `A01.07`, `A01.08`, `A01.09`, `A01.10`, `A02.01`, `A02.02`, `A02.03`, `A02.04`, `A02.05`, `A02.06`, `A02.07`, `A03.01`, `A03.02`, `A03.03`, `A05.01`, `A05.02`, `A05.03`, `A05.04`, `A05.05`, `A05.06`, `A05.07`, `A05.08`, `A05.09`, `A05.10`, `A05.11`, `A05.12`, `A08.01`, `A08.02`, `A08.03`, `A08.04`, `A08.05`, `A08.06`, `A08.07`, `A08.08`, `A08.09`, `A08.10`, `A08.11`, `A08.12`, `A08.13`, `A08.14`, `A08.15`, `A08.16`, `A08.17`, `A08.18`, `A08.19`, `A08.20`, `A08.21`, `A08.22`, `A08.23`, `A08.24`, `A10.01`, `A10.02`, `A10.03`, `A10.04`, `A10.05`, `A10.06`, `A10.07`, `A10.08`, `A10.09`, `A10.10`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
