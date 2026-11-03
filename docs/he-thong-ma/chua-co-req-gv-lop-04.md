# GV-LOP-04xx (chưa có requirement)

> Sinh tự động từ registry (`scripts/he-thong-ma/registry.py`). Cột Nguồn: QC = requirement, Figma = mã/tên design đặt, Tự điền = tool cấp theo quy ước nền, cần người duyệt. *Chưa khớp tự động*: tool không tìm thấy chữ này trên màn đã sync; thường do item nằm trong popup chưa sync hoặc nhãn là câu mô tả, không hẳn là Figma thiếu.

## 1. Định danh

| Mã | Tên | Route | Bản tối | Nguồn |
|---|---|---|---|---|
| `GV-LOP-040300` | Chi tiết lớp / Bài tập và Kiểm tra / Màn chấm bài | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai` | `GV-LOP-040300-DK` | Figma |


## 2. Luồng


## 3. Popup, trạng thái, dropdown

| Mã | Tên | Loại | Màn cha | Hiển thị theo | Mở từ (prototype) | Link | Nguồn | Tin cậy |
|---|---|---|---|---|---|---|---|---|
| `GV-LOP-040301` | Màn chấm bài · Câu hỏi con | Trạng thái | GV-LOP-040300 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040302, GV-LOP-040320, GV-LOP-040330, GV-LOP-040331, GV-LOP-040332, GV-LOP-040333, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040301` | Figma | trung bình |
| `GV-LOP-040302` | Màn chấm bài · Câu không cần chấm | Trạng thái | GV-LOP-040301 | GV-LOP-040300 | — | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040302` | Figma | thấp |
| `GV-LOP-040310` | Popup chọn bài nguồn | Popup | GV-LOP-040302 | GV-LOP-040300 | — | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?popup=GV-LOP-040310` | Figma | thấp |
| `GV-LOP-040311` | Popup áp dụng nhận xét chung | Popup | GV-LOP-040302 | GV-LOP-040300 | — | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?popup=GV-LOP-040311` | Figma | thấp |
| `GV-LOP-040330` | Màn chấm bài · Trắc nghiệm · App chấm | Trạng thái | GV-LOP-040300 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040320, GV-LOP-040331, GV-LOP-040332, GV-LOP-040333, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040330` | Figma | trung bình |
| `GV-LOP-040331` | Màn chấm bài · Sắp xếp · App chấm | Trạng thái | GV-LOP-040330 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040320, GV-LOP-040330, GV-LOP-040332, GV-LOP-040333, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040331` | Figma | trung bình |
| `GV-LOP-040332` | Màn chấm bài · Nối từ · App chấm | Trạng thái | GV-LOP-040330 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040320, GV-LOP-040330, GV-LOP-040331, GV-LOP-040333, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040332` | Figma | trung bình |
| `GV-LOP-040333` | Màn chấm bài · Nói · App chấm | Trạng thái | GV-LOP-040330 | GV-LOP-040300 | GV-LOP-040320, GV-LOP-040330, GV-LOP-040331, GV-LOP-040332, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040333` | Figma | trung bình |
| `GV-LOP-040334` | Màn chấm bài · Viết · GV chấm + AI gợi ý | Trạng thái | GV-LOP-040330 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040320, GV-LOP-040330, GV-LOP-040331, GV-LOP-040332, GV-LOP-040333, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040334` | Figma | trung bình |
| `GV-LOP-040335` | Màn chấm bài · Hình ảnh · GV chấm | Trạng thái | GV-LOP-040330 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040320, GV-LOP-040330, GV-LOP-040331, GV-LOP-040332, GV-LOP-040333, GV-LOP-040334 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?state=GV-LOP-040335` | Figma | trung bình |
| `GV-LOP-040336` | Popup xem ảnh bài viết tay | Popup | GV-LOP-040335 | GV-LOP-040300 | GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?popup=GV-LOP-040336` | Figma | cao |
| `GV-LOP-040340` | Popup Hoàn thành chấm | Popup | GV-LOP-040300 | GV-LOP-040300 | GV-LOP-040300, GV-LOP-040301, GV-LOP-040302, GV-LOP-040330, GV-LOP-040331, GV-LOP-040332, GV-LOP-040333, GV-LOP-040334, GV-LOP-040335 | `/chi-tiet-lop/bai-tap-va-kiem-tra/man-cham-bai?popup=GV-LOP-040340` | Figma | cao |

## 4. Khu vực và item

### `F01` MainContent

Frame: `GV-LOP-040300` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F01.01` | atom-button | `Atom/Button` Type=Primary, Size=Medium | `5425:278895` Atom/Button | — |  |  | Chỉ có trên Figma | Figma |
| `F01.02` | atom-badge | `Atom/Badge`  | `5425:279197` Atom/Badge | — |  |  | Chỉ có trên Figma | Figma |
| `F01.03` | trinh-phat-am-thanh | `Atom/Audio Player` State=Chưa phát | `5741:417307` Trình phát âm thanh | — |  |  | Chỉ có trên Figma | Figma |
| `F01.04` | dd-molecule-trigger | `DD/Molecule/Trigger` Size=XS, State=Default | `5425:279217` DD/Molecule/Trigger | — |  |  | Chỉ có trên Figma | Figma |
| `F01.05` | atom-input | `Atom/Input` State=Textarea, Kiểu=S | `5425:279232` Atom/Input | — |  |  | Chỉ có trên Figma | Figma |
| `F01.06` | so-thu-tu | `Atom/Number Badge` Type=Số buổi, Size=Medium, State=Inactive | `5425:293927` Số thứ tự | — |  |  | Chỉ có trên Figma | Figma |
| `F01.07` | hoc-vien | `AVATAR + Name`  | `5425:293731` Học viên | — |  |  | Chỉ có trên Figma | Figma |
| `F01.08` | diem-0 | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `5425:293861` Điểm 0 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.09` | diem-1 | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `5425:293863` Điểm 1 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.10` | diem-2 | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `5425:293865` Điểm 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.11` | diem-3 | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `5425:293867` Điểm 3 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.12` | diem-4 | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `5425:293869` Điểm 4 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.13` | diem-5 | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `5425:293871` Điểm 5 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.14` | diem-6 | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `5425:293873` Điểm 6 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.15` | diem-7 | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `5425:293875` Điểm 7 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.16` | diem-8 | `Atom/Number Badge` Type=Square, Size=Medium, State=Active | `5425:293877` Điểm 8 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.17` | diem-9 | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `5425:293879` Điểm 9 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.18` | diem-10 | `Atom/Number Badge` Type=Square, Size=Medium, State=Inactive | `5425:293881` Điểm 10 | — |  |  | Chỉ có trên Figma | Figma |
| `F01.19` | ghi-am-1-m4a | `Atom/Uploaded File Card` Type=Menu | `5425:293948` ghi-am-1.m4a | — |  |  | Chỉ có trên Figma | Figma |
| `F01.20` | ghi-am-2-m4a | `Atom/Uploaded File Card` Type=Menu | `5425:293963` ghi-am-2.m4a | — |  |  | Chỉ có trên Figma | Figma |
| `F01.21` | o-nhan-xet | `Atom/Input` State=Textarea, Kiểu=S | `5425:294005` Ô nhận xét | — |  |  | Chỉ có trên Figma | Figma |
| `F01.22` | nhan-xet-giao-vien-m4a | `Atom/Uploaded File Card` Type=Close | `5425:293978` nhan-xet-giao-vien.m4a | — |  |  | Chỉ có trên Figma | Figma |
| `F01.23` | o-dap-an | `Atom/Input` State=Disabled, Kiểu=Chuẩn | `5425:294014` Ô đáp án | — |  |  | Chỉ có trên Figma | Figma |
| `F01.24` | ty-le-diem | `PERCENT %`  | `5425:293760` Tỷ lệ điểm | — |  |  | Chỉ có trên Figma | Figma |

### `F02` (ngoài Body)

Frame: `GV-LOP-040300` · Nguồn nội dung: Figma

| Mã | Tên | Component (variant) | Layer | Trong code | Quan hệ | Testcase | Trạng thái | Nguồn |
|---|---|---|---|---|---|---|---|---|
| `F02.01` | component-2 | `Switch Center`  | `5425:278789` Component 2 | — |  |  | Chỉ có trên Figma | Figma |
| `F02.02` | account | `ACCOUNT` Size=Default | `5425:278791` ACCOUNT | — |  |  | Chỉ có trên Figma | Figma |
| `F02.03` | header-vai-tro |  | `5425:278792` Header/Vai trò | — |  |  | Chỉ có trên Figma | Figma |
| `F02.04` | sidebar-menu-teacher | `MENU - TEACHER`  | `5425:278883` Sidebar · MENU - TEACHER | — |  |  | Chỉ có trên Figma | Figma |

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

- Frame Figma chưa có requirement (13): `GV-LOP-040300`, `GV-LOP-040301`, `GV-LOP-040302`, `GV-LOP-040310`, `GV-LOP-040311`, `GV-LOP-040330`, `GV-LOP-040331`, `GV-LOP-040332`, `GV-LOP-040333`, `GV-LOP-040334`, `GV-LOP-040335`, `GV-LOP-040336`, `GV-LOP-040340`
- Phân loại cần design duyệt (10): `GV-LOP-040301`, `GV-LOP-040302`, `GV-LOP-040310`, `GV-LOP-040311`, `GV-LOP-040330`, `GV-LOP-040331`, `GV-LOP-040332`, `GV-LOP-040333`, `GV-LOP-040334`, `GV-LOP-040335`
- Thiếu prototype link đi vào (3): `GV-LOP-040302`, `GV-LOP-040310`, `GV-LOP-040311`

## 9. Chi tiết dựng

Cây layout, typography và asset giữ ở MD từng màn trong `docs/pages/`.
