# Đề xuất sửa requirement

> Áp dụng cho các chỗ requirement tự mâu thuẫn hoặc ghi chú đã cũ, nên không thể lấy requirement làm chuẩn. Mỗi dòng là đề xuất; QC duyệt rồi mới sửa file requirement gốc. Tool không tự sửa requirement.
>
> Hiện mới rà tay cụm **Bài tập về nhà và Kiểm tra** (`course_management/homework-test/homework-test.md`, tiền tố `CM-HW`). Các cụm khác chưa rà mâu thuẫn.

## 1. `Điểm` của từng câu hỏi (tự mâu thuẫn)

| Chỗ | Requirement đang ghi |
|---|---|
| `REQ02` | Không có Tổng điểm và điểm riêng từng câu: mọi câu thang 10, điểm bài là trung bình các câu |
| `REQ06` | Import / Export không có cột `Điểm` |
| Bảng Import — dòng bắt buộc | Không có cột `Điểm` |
| `REQ05` | Bắt buộc nhập `Điểm` khi soạn câu |
| `EX01` | Thiếu `Điểm` thì báo lỗi, không lưu |
| Bảng cột | Có cột `Điểm` |

Figma: `CD-KH-060100` và `CD-KH-060200` đã bỏ thẻ Tổng điểm, bảng không có cột `Điểm`.

**Đã chốt (design, 2026-11-03): giữ `Điểm` riêng từng câu, theo `REQ05`.** `REQ05`, `EX01` và bảng cột giữ nguyên. Cần sửa cho khớp:
- `REQ02`: bỏ câu "Không có Tổng điểm và điểm riêng từng câu".
- `REQ06` và bảng Import — dòng bắt buộc: thêm cột `Điểm` vào file Import / Export.
- Testcase nào kiểm "không có Điểm" hoặc Import không có cột `Điểm`: sửa theo.
- Figma: `CD-KH-060100`, `CD-KH-060200` thêm cột `Điểm` vào bảng câu hỏi; popup soạn câu hỏi (`CD-KH-060120` → `060125`) thêm field `Điểm`. Đây là việc của design; tool không tự sửa màn.

**QC cần chốt thêm:** `REQ02` đang ghi "mọi câu thang 10, điểm bài là trung bình các câu" và thẻ tổng quan có tag `Thang 10`. Khi mỗi câu có `Điểm` riêng, điểm bài tính thế nào (tổng điểm các câu, hay vẫn quy về thang 10), và có hiện lại `Tổng điểm` trên thẻ tổng quan không.

## 2. Bảng câu hỏi (ghi chú "Khác Figma" đã cũ)

`REQ03` ghi bảng có cột `Kiến thức / Kỹ năng`, lọc `Loại câu`, `Kiến thức / Kỹ năng` và **không có lọc `Trạng thái`**. Ghi chú "Khác Figma" ở khu vực `A03` lại ghi Figma chưa có cột `Kiến thức / Kỹ năng` và còn lọc `Trạng thái`. Figma hiện đã có cột và lọc `Kiến thức / Kỹ năng`, không có lọc `Trạng thái`, tức là đã khớp `REQ03`.

**Đề xuất:** QC xoá ghi chú "Khác Figma" ở `A03`. `FIX-004` trong danh sách sửa Figma không cần làm; design chỉ cần kiểm `CD-KH-030340` cũng đã có cột và lọc `Kiến thức / Kỹ năng`.

## 3. Tab Kiểm tra (ghi chú đã cũ)

Requirement ghi "Figma là danh sách phẳng"; Figma `CD-KH-060200` đã chia theo HK I, II, III giống requirement.

**Đề xuất:** QC xoá ghi chú "Khác Figma" ở khu vực `A01`. Sau đó `FIX-001` không cần làm.

## 4. Màn chưa được requirement nhắc mã

Figma đã có `CD-KH-060121` → `060125`, `060140`, `060141`, `060150`, `060160`, nhưng requirement chưa ghi các mã này và phần lớn vẫn ghi "UI cần bổ sung".

**Đề xuất:** QC thêm mã màn vào đúng mục, bỏ chữ "UI cần bổ sung" ở mục nào Figma đã vẽ. Mục nào chưa vẽ thì giữ, design làm theo danh sách sửa Figma.

## 5. Testcase còn thiếu

- `EX04` chưa có testcase nào. **Đề xuất:** thêm một testcase cho `EX04`.
- `TC5a`, `TTC01`, `TTC02` không ghi REQ/EX/Flow. **Đề xuất:** ghi mã REQ tương ứng vào cột Scenario.
