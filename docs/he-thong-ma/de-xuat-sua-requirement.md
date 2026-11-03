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

**Đề xuất: bỏ `Điểm` riêng từng câu, theo `REQ02`.** `REQ02`, `REQ06`, phần Import và Figma đều thống nhất không có điểm riêng, chỉ `REQ05`, `EX01` và bảng cột còn sót. Sửa:
- `REQ05`: bỏ `Điểm` khỏi danh sách field bắt buộc.
- `EX01`: bỏ `Điểm` khỏi danh sách field thiếu thì báo lỗi.
- Bảng cột: bỏ cột `Điểm`.
- Testcase nào kiểm `Điểm` khi soạn câu: bỏ hoặc đổi thành kiểm "không có field Điểm".

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
