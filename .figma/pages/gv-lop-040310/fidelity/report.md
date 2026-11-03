# Fidelity: GV-LOP-040310 — Chi tiết lớp / Bài tập và Kiểm tra / Popup chọn bài nguồn

- URL: `http://localhost:3000/frames/gv-lop-040310`
- Verdict: **FAIL**
- Pixels outside text: **1.49%** differ (limit 0.5%); all pixels: 2.571%; inside text boxes: 2.982% (glyph rendering)
- Boxes: 24/24 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 4, ≤1px: 4, ≤2px: 24, ≤4px: 24, >4px: 0

## Failures

- 1.490% of non-text pixels differ (limit 0.5%).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 24, 152, 432×40 | 946 | Bài 3 · MONOPHTHONG (`5425:281242`, text) |
| 24, 200, 432×8 | 842 | Body (`5425:281225`, container) |
| 320, 280, 144×8 | 278 | Atom/Button (`I5425:281227;2514:153363`, instance) |
| 320, 304, 144×16 | 272 | Atom/Button (`I5425:281227;2514:153363`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I5425:281227;2514:153363;1048:1230`) | 13% |
| Button (`I5425:281227;2514:153361;1048:1232`) | 11.5% |
| Bài 1 · EINFÜHRUNG UND DAS ALPHABET (`5425:281237`) | 8.1% |
| 12/14 đã nộp (`5425:281238`) | 6.8% |
| 11/12 đã nộp (`5425:281247`) | 6.7% |
| 11/14 đã nộp (`5425:281243`) | 5.8% |
| Bài 3 · MONOPHTHONG (`5425:281242`) | 4.9% |
| Bài 4 · DIPHTHONG (`5425:281246`) | 4% |
| Title (`I5425:281224;2514:153348`) | 0% |
| Bài học bổ sung "Ôn tập 1" gồm nhiều bài nguồn. Chọn một bài (`5425:281226`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Body (`5425:281225`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Bài học bổ sung "Ôn tập 1" gồm nhiều bài nguồn. Chọn một bài (`5425:281226`) | text | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Bài nguồn (`5425:281235`) | container | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Radio Button (`5425:281236`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Bài 1 · EINFÜHRUNG UND DAS ALPHABET (`5425:281237`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| 12/14 đã nộp (`5425:281238`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Bài nguồn (`5425:281239`) | container | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Radio Button (`5425:281240`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Dot (`I5425:281240;2015:30488`) | shape | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Bài 3 · MONOPHTHONG (`5425:281242`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| 11/14 đã nộp (`5425:281243`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Bài nguồn (`5425:281244`) | container | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Radio Button (`5425:281245`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Bài 4 · DIPHTHONG (`5425:281246`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| 11/12 đã nộp (`5425:281247`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Popup/Footer (`5425:281227`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Atom/Button (`I5425:281227;2514:153361`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Button (`I5425:281227;2514:153361;1048:1232`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Atom/Button (`I5425:281227;2514:153363`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Button (`I5425:281227;2514:153363;1048:1230`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Popup/Header (`5425:281224`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I5425:281224;2514:153347`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I5425:281224;2711:67901`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I5425:281224;2514:153348`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
