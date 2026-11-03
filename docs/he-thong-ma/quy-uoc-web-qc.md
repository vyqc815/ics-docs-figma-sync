# Quy ước cho web QC: đọc requirement và nối dữ liệu 1:1

Tài liệu này dành cho team dựng web QC. Làm đúng các quy tắc dưới đây thì mọi màn, item, yêu cầu và testcase trên web khớp 1:1 với Figma, demo và hệ thống mã, không sai lệch khi cập nhật.

## 1. Nguồn dữ liệu

| Dữ liệu | Lấy ở đâu | Ghi chú |
|---|---|---|
| Requirement theo template, có mã | `docs/requirements/**.md` trên GitHub nhánh `main`, hoặc zip được gửi | Chỉ đọc. **Không sửa file này**: lần chuyển sau sẽ ghi đè |
| Requirement gốc | File gốc của QC | **QC chỉ sửa ở file gốc**, gửi bản mới để chuyển lại |
| Mã màn → loại, màn cha, frame | `docs/he-thong-ma/figma-frames.json` | `loai`: `man-chinh`, `popup`, `trang-thai`, `dropdown`, `ban-toi` |
| Mã màn → route trên demo | `figma.pages.json` (`name` = mã viết thường, `route`) | Popup/trạng thái mở trên màn cha bằng `?popup=MÃ` / `?state=MÃ` |
| Mã dự kiến (màn chưa vẽ) | `docs/he-thong-ma/ma-du-kien.json` | Hiển thị "chưa có thiết kế", không báo lỗi |
| Tiền tố mã theo file, item, REQ, testcase đã chuẩn hoá | `docs/he-thong-ma/<cụm>.registry.json` (`requirementFiles[].prefix`) | Dùng để ghép khoá toàn cục |

## 2. Cấu trúc file và cách đọc

Mỗi file đúng template `template_req_docs.md`. Đọc theo dòng, không đoán theo vị trí.

| Phần | Dạng trong file | Cách đọc |
|---|---|---|
| Tên feature | `# <tên>` (dòng đầu) | Tên hiển thị |
| Trang có mã | `### Trang N: CD-KH-060100 — <tên>` hoặc nhiều mã `### Trang N: CD-KH-060100, CD-KH-060200 — <tên>` | **Khoá là mã màn**, không phải số N. Mã: `[A-Z]{2,4}(-[A-Z]{1,4})+-\d{6}(-DK)?` |
| Trang chưa có mã | `### Trang N: <tên>` | Màn chưa có frame, hoặc phần không phải màn (Toast…) |
| Ảnh Figma mới nhất | `![Figma mới nhất · <MÃ>](https://ics-figma-demo.vercel.app/api/figma-frame/<MÃ>.png)` | **Hiển thị trực tiếp từ link**, không tải về lưu lại; ảnh tự đổi khi design sửa (trễ tối đa ~5 phút). Màn chưa vẽ hiện thẻ "Chưa có thiết kế", vẽ xong tự thành ảnh thật |
| Ảnh gốc QC | `![Trang N](./images/…)` | Đường dẫn tương đối trong thư mục của file |
| Item | `` - `A03.07` **<tên>**: <mô tả> `` trong "Điểm cần lưu ý" | Mã item `A03.07` có phạm vi **trong file**; khoá toàn cục ở mục 3. Mã đã khoá: không đổi khi QC chèn/xoá dòng |
| Flow | `**Flow N: <tên>**` + khối ```` ``` ```` | Khoá `Flow N` trong file |
| Ngoại lệ | `- **EX01:** <nội dung>` | Khoá `EX01` trong file |
| Yêu cầu | bảng `\| Mã \| Tên yêu cầu \| Mô tả \|`, dòng `\| REQ01 \| … \|` | Khoá `REQ01` trong file |
| Quyền | `#### Quyền` + bảng role × action (✅/❌) | Một số file gốc không có bảng này |
| Testcase | bảng 7 cột `Tên testcase \| Priority \| Scenario \| Role \| Pre-condition \| Given/When/Then \| Expected Result` | Priority có thể kèm `· Smoke`. Given/When/Then dùng `<br>` |
| Câu hỏi | `- **Q01:** …` dưới `## 4. Câu hỏi cần xác nhận` | Không có mục 4 nghĩa là không còn câu hỏi |
| Mục ngoài template | `## 5. …`, `## 6. …` | Giữ nguyên, hiển thị như phụ lục |

## 3. Khoá và tính duy nhất

| Đối tượng | Khoá toàn cục | Ví dụ |
|---|---|---|
| Màn | Mã màn (duy nhất trên toàn hệ thống) | `CD-KH-060100` |
| Bản tối | Mã màn + `-DK`; là theme của màn, không phải màn khác | `CD-KH-060100-DK` |
| Item | `<tiền tố file>.<mã item>` | `CM-HW.A03.07` |
| REQ / EX / Flow | `<tiền tố file>.<mã>` | `CM-HW.REQ02`, `CM-HW.EX01`, `CM-HW.FLOW01` |
| Testcase | `<tiền tố file>.TC<số>` | `CM-HW.TC05` |

`REQ01`, `EX01`, `Case 1` lặp lại ở mọi file, nên **không bao giờ dùng riêng** làm khoá; luôn ghép tiền tố file lấy từ registry (`requirementFiles[].prefix`).

## 4. Quy tắc nối

1. **Màn ↔ Figma ↔ demo:** mã trong tiêu đề Trang = mã ở đầu tên frame Figma = `name` (viết thường) trong `figma.pages.json`. Link demo: `https://ics-figma-demo.vercel.app<route>`; popup/trạng thái: route màn cha + `?popup=MÃ` / `?state=MÃ`.
2. **Testcase ↔ yêu cầu:** đọc cột Scenario, tách các mã `Flow \d+`, `REQ\d+`, `EX\d+`, ghép tiền tố file.
3. **Item ↔ màn:** item thuộc Trang chứa nó; registry cho biết thêm layer Figma khớp (`items[].matches`).
4. **Mã dự kiến:** mã có trong `ma-du-kien.json` nhưng chưa có trong `figma-frames.json` là màn chưa vẽ; ảnh "Figma mới nhất" hiện thẻ "Chưa có thiết kế" cho tới khi design vẽ.

## 5. Web nên tự kiểm và báo

- Mã màn trong tiêu đề Trang không có trong `figma-frames.json` và không phải mã dự kiến.
- Scenario của testcase trỏ tới REQ/EX/Flow không có trong file.
- REQ hoặc EX chưa có testcase nào; testcase không ghi REQ/EX/Flow.
- Trùng khoá toàn cục (item, REQ, testcase) trong cùng một lần nhập.
- File thiếu mục bắt buộc của template (`## 1. UI`, `## 2. Yêu cầu`, `## 3. Testcase`, `#### Quyền`).

## 6. Cập nhật

- Mỗi lần có bản mới: **nhập lại cả bộ**, thay theo khoá toàn cục; bản ghi nào không còn trong bộ mới thì đánh dấu đã bỏ, không giữ dữ liệu cũ lẫn vào.
- Đối chiếu bằng mã, **không bằng số Trang hay thứ tự dòng**.
- Ảnh "Figma mới nhất" không cần nhập lại: link luôn trả ảnh hiện tại.
- Mã khu vực (`A03`) và mã item (`A03.07`) đã khoá (`docs/he-thong-ma/khoa-ma.json`): QC chèn/xoá dòng hay mục thì mã cũ giữ nguyên, dòng mới lấy số kế tiếp, số của dòng bị xoá không cấp lại. QC **sửa chữ trong nhãn** dòng thì dòng đó nhận mã mới (mã cũ coi như bỏ).

## 7. Không làm

- Không sửa file đã chuyển; không xoá hay viết lại mã trong tiêu đề Trang.
- Không dùng `REQ01`, `Case 1` không kèm tiền tố làm khoá.
- Không tải ảnh "Figma mới nhất" về lưu lâu dài (sẽ cũ); hiển thị thẳng từ link, cache tối đa vài phút.
- Không tự đặt mã màn mới; mã do design đặt trên Figma hoặc lấy từ `ma-du-kien.json`.
