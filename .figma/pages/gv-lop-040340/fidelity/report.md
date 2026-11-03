# Fidelity: GV-LOP-040340 — Chi tiết lớp / Bài tập và Kiểm tra / Popup Hoàn thành chấm

- URL: `http://localhost:3000/frames/gv-lop-040340`
- Verdict: **FAIL**
- Pixels outside text: **0.505%** differ (limit 0.5%); all pixels: 0.859%; inside text boxes: 0.967% (glyph rendering)
- Boxes: 25/25 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 17, ≤1px: 18, ≤2px: 25, ≤4px: 25, >4px: 0

## Failures

- 0.505% of non-text pixels differ (limit 0.5%).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 256, 280, 208×8 | 402 | Atom/Button (`I5751:83823;2514:153363`, instance) |
| 256, 312, 208×8 | 396 | Atom/Button (`I5751:83823;2514:153363`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I5751:83823;2514:153363;1048:1230`) | 12.5% |
| Button (`I5751:83823;2514:153361;1048:1232`) | 11.5% |
| Sau khi hoàn thành, điểm và nhận xét gửi tới học viên. Bạn v (`5751:83848`) | 0.1% |
| Title (`I5751:83820;2514:153348`) | 0% |
| MINITEST 5 – PERSÖNLICHE DATEN · 3/5 học viên đã nộp (`5751:83822`) | 0% |
| App chấm (4 câu) (`5751:83833`) | 0% |
| Đã khoá (`5751:83835`) | 0% |
| GV chấm (3 câu + 3 câu con) (`5751:83837`) | 0% |
| Đã chấm đủ (`5751:83839`) | 0% |
| Điểm GV sửa so với AI gợi ý (`5751:83841`) | 0% |
| 2 / 9 lượt (`5751:83843`) | 0% |
| Điểm trung bình lớp (`5751:83845`) | 0% |
| 7,8 / 10 (`5751:83847`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Body (`5751:83821`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Sau khi hoàn thành, điểm và nhận xét gửi tới học viên. Bạn v (`5751:83848`) | text | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Popup/Footer (`5751:83823`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Atom/Button (`I5751:83823;2514:153361`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Button (`I5751:83823;2514:153361;1048:1232`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Atom/Button (`I5751:83823;2514:153363`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Button (`I5751:83823;2514:153363;1048:1230`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Điểm GV sửa so với AI gợi ý (`5751:83841`) | text | 0.77 | 2.5 (text) | 0 | 0 | 0.77 | 0 |
| 2 / 9 lượt (`5751:83843`) | text | 0.31 | 2.5 (text) | -0.31 | 0 | 0.31 | 0 |
| Điểm trung bình lớp (`5751:83845`) | text | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Popup/Header (`5751:83820`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I5751:83820;2514:153347`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I5751:83820;2711:67901`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I5751:83820;2514:153348`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| MINITEST 5 – PERSÖNLICHE DATEN · 3/5 học viên đã nộp (`5751:83822`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tóm tắt (`5751:83831`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Dòng (`5751:83832`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| App chấm (4 câu) (`5751:83833`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Đã khoá (`5751:83835`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Dòng (`5751:83836`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| GV chấm (3 câu + 3 câu con) (`5751:83837`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Đã chấm đủ (`5751:83839`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Dòng (`5751:83840`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Dòng (`5751:83844`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| 7,8 / 10 (`5751:83847`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
