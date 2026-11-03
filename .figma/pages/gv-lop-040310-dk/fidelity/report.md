# Fidelity: GV-LOP-040310-DK — Chi tiết lớp / Bài tập và Kiểm tra / Popup chọn bài nguồn

- URL: `http://localhost:3000/frames/gv-lop-040310-dk`
- Verdict: **FAIL**
- Pixels outside text: **1.455%** differ (limit 0.5%); all pixels: 2.653%; inside text boxes: 3.302% (glyph rendering)
- Boxes: 24/24 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 4, ≤1px: 4, ≤2px: 24, ≤4px: 24, >4px: 0

## Failures

- 1.455% of non-text pixels differ (limit 0.5%).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 24, 152, 432×40 | 905 | Bài 3 · MONOPHTHONG (`5425:285641`, text) |
| 24, 200, 432×8 | 842 | Body (`5425:285633`, container) |
| 320, 280, 144×8 | 273 | Atom/Button (`I5425:285647;2514:153363`, instance) |
| 320, 312, 144×8 | 264 | Popup/Footer (`5425:285647`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I5425:285647;2514:153361;1048:1232`) | 14% |
| Button (`I5425:285647;2514:153363;1048:1230`) | 12.1% |
| Bài 1 · EINFÜHRUNG UND DAS ALPHABET (`5425:285637`) | 8.8% |
| 12/14 đã nộp (`5425:285638`) | 8.6% |
| 11/12 đã nộp (`5425:285646`) | 8% |
| 11/14 đã nộp (`5425:285642`) | 7.5% |
| Bài 3 · MONOPHTHONG (`5425:285641`) | 5.6% |
| Bài 4 · DIPHTHONG (`5425:285645`) | 4.5% |
| Title (`I5425:285632;2514:153348`) | 0% |
| Bài học bổ sung "Ôn tập 1" gồm nhiều bài nguồn. Chọn một bài (`5425:285634`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Body (`5425:285633`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Bài học bổ sung "Ôn tập 1" gồm nhiều bài nguồn. Chọn một bài (`5425:285634`) | text | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Bài nguồn (`5425:285635`) | container | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Radio Button (`5425:285636`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Bài 1 · EINFÜHRUNG UND DAS ALPHABET (`5425:285637`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| 12/14 đã nộp (`5425:285638`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Bài nguồn (`5425:285639`) | container | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Radio Button (`5425:285640`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Dot (`I5425:285640;2015:30488`) | shape | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Bài 3 · MONOPHTHONG (`5425:285641`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| 11/14 đã nộp (`5425:285642`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Bài nguồn (`5425:285643`) | container | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Radio Button (`5425:285644`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Bài 4 · DIPHTHONG (`5425:285645`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| 11/12 đã nộp (`5425:285646`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Popup/Footer (`5425:285647`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Atom/Button (`I5425:285647;2514:153361`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Button (`I5425:285647;2514:153361;1048:1232`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Atom/Button (`I5425:285647;2514:153363`) | instance | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Button (`I5425:285647;2514:153363;1048:1230`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Popup/Header (`5425:285632`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I5425:285632;2514:153347`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I5425:285632;2711:67901`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I5425:285632;2514:153348`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
