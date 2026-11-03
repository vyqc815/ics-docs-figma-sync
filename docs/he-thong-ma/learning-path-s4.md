# Lộ Trình (S4)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `CD-KH-020200` | Chi tiết khoá học / Lộ trình | `/chi-tiet-khoa-hoc/lo-trinh` | `CD-KH-020200-DK` | QC |

Requirement: `course_management/learning-path-s4/learning-path-s4.md` — Lộ Trình (S4) (tiền tố `CM-LPS`).

## 2. Luồng

- `FLOW01` Vào màn — 
- `FLOW02` Tick / bỏ tick — 
- `FLOW03` Ví dụ — 
- `FLOW04` Đổi Kỳ — 
- `FLOW05` Kéo thả — 
- `FLOW06` Sửa tên/mô tả bài học — 

## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|

## 4. Khu vực và item

### `A01` Trang 1: Nội dung buổi học (Lộ Trình S4)

Frame: `CD-KH-020200` (tool đoán:CD-KH-020200) · Nguồn nội dung: QC

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `A01.01` | tick-tong-buoi | `Atom/Status` Size=S | `2808:53251` Trạng thái số buổi | — |  |  | Khớp | QC |
| `A01.02` | tick-tong-buoi | `Atom/Status` Size=S | `2808:53235` Trạng thái số buổi | — |  |  | Khớp | QC |
| `A01.03` | tick-tong-buoi |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.04` | 90-100 | `Atom/Chip` Type=Thời gian · 90–100% | `2808:53136` Atom/Chip · Thời gian | — |  |  | Khớp | QC |
| `A01.05` | 80-90 |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.06` | 0-va-80 |  |  | — |  |  | Chưa khớp tự động | QC |
| `A01.07` | 00-00-00 | `Atom/Chip` Type=Thời gian · Chưa có | `2808:53166` Atom/Chip · Thời gian | — |  |  | Khớp | QC |
| `A01.08` | 100 | `Atom/Chip` Type=Thời gian · 90–100% | `2808:53136` Atom/Chip · Thời gian | — |  |  | Khớp | QC |

### `F01` (ngoài Body)

Frame: `CD-KH-020200` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | trang-thai-so-buoi | `Atom/Status` Size=S | `2808:53258` Trạng thái số buổi | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | dropdown | `DD/Molecule/Trigger` Size=XS, State=Default | `2015:39141` Dropdown | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | atom-chip-thoi-gian | `Atom/Chip` Type=Thời gian · 90–100% | `2808:53139` Atom/Chip · Thời gian | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | input-ten-bai-hoc | `Atom/Input` State=Sửa trực tiếp, Kiểu=S | `2857:58679` Input · Tên bài học | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | input-mo-ta | `Atom/Input` State=Text, Kiểu=S | `2857:58683` Input · Mô tả | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | molecule-add-new-bar-them-bai-hoc | `Molecule/Add New Bar` Type=Box, Size=M, State=Default | `6518:337110` Molecule/Add New Bar · Thêm bài học | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | sidebar-menu-cd | `MENU - CD`  | `4915:256398` Sidebar · MENU - CD | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | account | `ACCOUNT` Size=Default | `2812:34997` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | component-2 | `Switch Center`  | `4273:160593` Component 2 | — |  |  | Chỉ có trên Figma | Figma |

## 5. Nghiệp vụ

| Mã | Tên | Nội dung |
|---|---|---|
| `REQ01` | Nguồn dữ liệu | Cột buổi học, số buổi, phút/buổi từng cột, phút chuẩn 1 buổi lấy từ S2; thứ tự cột theo S2. |
| `REQ02` | Tính toán realtime | Header cột, badge và cột Thời gian (giá trị + màu) tính lại ngay sau mỗi thao tác, không reload. |
| `REQ03` | Công thức | Thời gian hàng = Σ phút/buổi của các cột đã tick trong hàng (`HH:mm:ss`). % màu = Thời gian hàng / phút chuẩn 1 buổi (S2). |
| `REQ04` | Badge cột | Theo số tick so với tổng buổi: `Chưa đủ buổi` (cam) / `Đủ buổi` (xanh) / `Quá buổi` (đỏ). `00/00` hiển thị `Đủ buổi`. |
| `REQ05` | Màu cột Thời gian | 90–100% xanh, 80–<90% vàng, >0 và <80% cam, 0 xám, >100% đỏ (giống tab Bài học của Học kỳ). Chỉ cảnh báo bằng màu, không chặn. |
| `REQ06` | Freeze | Cố định 4 cột đầu và hàng header; cột buổi học không đè lên cột cố định khi cuộn ngang. |
| `REQ07` | Header cột buổi học | Dòng 1 `SỐ BUỔI {đã tick}/{tổng số buổi}`; dòng 2 `[ {tổng phút đã xếp} PHÚT ]` = số tick × phút/buổi của cột, bắt đầu từ `0` và cộng/trừ theo từng lần tick/bỏ tick. |
| `REQ08` | Kéo thả | Thứ tự bài học được lưu, STT cập nhật theo; chỉ dùng cho màn này. |
| `REQ09` | Dropdown Kỳ | Danh sách kỳ của khoá học hiện tại; mặc định kỳ của bài học; hiển thị mã kỳ + tên kỳ. Đổi Kỳ sẽ chuyển bài học sang học kỳ mới (đồng bộ tab Bài học của Học kỳ). |
| `REQ10` | Sửa inline | Tên (bắt buộc) và mô tả (không bắt buộc) bài học sửa trực tiếp tại ô; dữ liệu dùng chung với tab Bài học của Học kỳ. |
| `EX01` | Ngoại lệ | Số tick của cột > tổng buổi → vẫn cho tick, badge `Quá buổi` (đỏ), không popup chặn. |
| `EX02` | Ngoại lệ | Bỏ tick/đổi S2 làm số tick về = tổng buổi → badge `Đủ buổi`; < tổng buổi → `Chưa đủ buổi`. Trường hợp tổng buổi = 0 và chưa tick (`00/00`) → `Đủ buổi`. |
| `EX03` | Ngoại lệ | Hàng chưa tick ô nào → Thời gian `00:00:00`, màu xám. |
| `EX04` | Ngoại lệ | S2 đổi số buổi / phút mỗi buổi / phút chuẩn 1 buổi → giữ nguyên tick; tính lại header cột (tổng phút đã xếp = số tick × phút/buổi mới), badge, Thời gian và màu từng hàng theo giá trị mới. |
| `EX05` | Ngoại lệ | S2 xoá buổi học → xoá toàn bộ tick của cột đó, tính lại Thời gian các hàng liên quan. |
| `EX06` | Ngoại lệ | S2 thêm buổi học → hiển thị thêm cột mới chưa tick (`00/{tổng}`, `[ 0 PHÚT ]`, badge `Chưa đủ buổi`). |
| `EX07` | Ngoại lệ | API lưu lỗi (tick, đổi Kỳ, kéo thả, sửa tên/mô tả) → hoàn tác thao tác vừa làm, tính lại hiển thị, hiện thông báo lỗi. |
| `EX08` | Ngoại lệ | Tên bài học để trống/chỉ khoảng trắng → không lưu, trả về tên cũ. |
| `EX09` | Ngoại lệ | Phút chuẩn 1 buổi luôn có giá trị (S2 mặc định 90 phút, chỉ nhận số nguyên dương) nên cột Thời gian luôn tính được % màu; hàng chưa tick hiển thị màu xám theo EX03. |

## 6. Testcase

| Mã | Tên | Priority | Smoke | Scenario | Khu vực | Item |
|---|---|---|---|---|---|---|
| `TC01` | Case 1: Hiển thị ban đầu & freeze | High | Có | CD; có dữ liệu S2, chưa tick, bảng vượt màn hình | — |  |
| `TC02` | Case 2: Tick/bỏ tick, header & badge | High | Có | CD; cột Phát âm 4 buổi 45' chưa tick | — |  |
| `TC03` | Case 3: Cột Thời gian: công thức & màu | High |  | CD; các hàng chưa tick | — |  |
| `TC04` | Case 4: S2 đổi số buổi/phút | Medium |  | CD; Phát âm 4 buổi 45', đã tick 4 ô | — |  |
| `TC05` | Case 5: S2 xoá/thêm buổi học | High |  | CD; cột Phát âm đã có tick | — |  |
| `TC06` | Case 6: Đổi Kỳ | Medium |  | CD; khoá học có nhiều kỳ | — |  |
| `TC07` | Case 7: Kéo thả | Medium |  | CD; ≥ 2 bài học | — |  |
| `TC08` | Case 8: Sửa tên/mô tả inline | Medium |  | CD | — |  |
| `TC09` | Case 9: API lưu lỗi | High |  | CD; cột Chủ đề giao tiếp 04/05 | — |  |
| `TC10` | Case 10: Phân quyền | High |  | Role khác CD | — |  |
| `TC11` | Case 11: Cột có tổng buổi = 0 | Low |  | CD; S2 có buổi học Số buổi = 0 | — |  |

## 7. Code

- Màn: `components/figma/<mã>/`; popup và trạng thái mở trên route màn cha qua `?popup=`, `?state=`.
- Liên kết layer với code hiện dùng `data-figma-id`; `data-ui` mới có ở cấp frame.

## 8. Độ lệch cần xử lý

**Tool báo, cần người xem**

- Chưa khớp tự động (3): `A01.03`, `A01.05`, `A01.06`
- Testcase không trỏ REQ (11): `TC01`, `TC02`, `TC03`, `TC04`, `TC05`, `TC06`, `TC07`, `TC08`, `TC09`, `TC10`, `TC11`
- REQ/EX chưa có testcase (19): `REQ01`, `REQ02`, `REQ03`, `REQ04`, `REQ05`, `REQ06`, `REQ07`, `REQ08`, `REQ09`, `REQ10`, `EX01`, `EX02`, `EX03`, `EX04`, `EX05`, `EX06`, `EX07`, `EX08`, `EX09`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
