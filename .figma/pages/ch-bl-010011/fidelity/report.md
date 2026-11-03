# Fidelity: CH-BL-010011 — Báo lỗi / Popup gửi báo lỗi · Đối tượng Khác

- URL: `http://localhost:3000/frames/ch-bl-010011`
- Verdict: **PASS**
- Pixels outside text: **0.151%** differ (limit 0.5%); all pixels: 0.346%; inside text boxes: 0.717% (glyph rendering)
- Boxes: 81/81 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 75, ≤1px: 78, ≤2px: 81, ≤4px: 81, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 256, 528, 72×8 | 70 | Field · Tệp đính kèm (`5300:51139`, container) |
| 344, 528, 72×8 | 63 | Field · Tệp đính kèm (`5300:51139`, container) |
| 64, 632, 72×8 | 56 | Atom/Dropzone (`5300:51141`, instance) |
| 72, 528, 72×8 | 54 | Field · Tệp đính kèm (`5300:51139`, container) |
| 16, 552, 8×64 | 53 | Atom/Dropzone (`5300:51141`, instance) |
| 168, 528, 64×8 | 50 | Field · Tệp đính kèm (`5300:51139`, container) |
| 344, 632, 64×8 | 50 | Atom/Dropzone (`5300:51141`, instance) |
| 248, 632, 72×8 | 48 | Atom/Dropzone (`5300:51141`, instance) |
| 160, 632, 64×8 | 46 | Atom/Dropzone (`5300:51141`, instance) |
| 456, 560, 8×56 | 40 | Atom/Dropzone (`5300:51141`, instance) |
| 24, 632, 24×8 | 16 | Atom/Dropzone (`5300:51141`, instance) |
| 432, 632, 24×8 | 13 | Atom/Dropzone (`5300:51141`, instance) |
| 24, 528, 24×8 | 10 | Field · Tệp đính kèm (`5300:51139`, container) |
| 440, 528, 16×8 | 6 | Field · Tệp đính kèm (`5300:51139`, container) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I5300:51140;2015:30530`) | 10.9% |
| Kéo thả file vào đây hoặc chọn file (`I5300:51141;1061:1316`) | 2.6% |
| Label (`I5300:51121;2015:30530`) | 2.2% |
| Description (`I5300:51110;2514:153342`) | 1.3% |
| Label (`I5371:40047;2015:30530`) | 1.3% |
| Label (`I5300:51114;2015:30530`) | 1.2% |
| Label (`I5300:51128;2015:30530`) | 1.1% |
| Label (`I5300:51117;2015:30530`) | 1.1% |
| Label (`I5300:51137;2015:30530`) | 1% |
| Label (`I5300:51131;2015:30530`) | 0.9% |
| Label (`I5300:51134;2015:30530`) | 0.7% |
| Button (`I5300:51142;2514:153361;1048:1232`) | 0.1% |
| Button (`I5300:51142;2514:153363;1048:1230`) | 0.1% |
| Title (`I5300:51110;2514:153341`) | 0% |
| Required (`I5300:51114;2015:30531`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX (Tối đa 20MB) (`I5300:51141;1061:1317`) | text | 1.64 | 2.5 (text) | -0.83 | 0 | 1.64 | 0 |
| Atom/Label (`5300:51140`) | instance | 1.14 | 2.5 (text) | 0 | 0 | 1.14 | 0 |
| Label (`I5300:51140;2015:30530`) | text | 1.14 | 2.5 (text) | 0 | 0 | 1.14 | 0 |
| Atom/Label (`5300:51121`) | instance | 0.53 | 2.5 (text) | 0 | 0 | 0.53 | 0 |
| Label (`I5300:51121;2015:30530`) | text | 0.53 | 2.5 (text) | 0 | 0 | 0.53 | 0 |
| Required (`I5300:51121;2015:30531`) | text | 0.53 | 2.5 (text) | 0.53 | 0 | 0 | 0 |
| Popup/Header (`5300:51110`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I5300:51110;2514:153340`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I5300:51110;2711:67900`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I5300:51110;2514:153341`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Description (`I5300:51110;2514:153342`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`5300:51111`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Hàng · Loại & đối tượng (`5300:51112`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Field · Loại (`5300:51113`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`5300:51114`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Label (`I5300:51114;2015:30530`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Required (`I5300:51114;2015:30531`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Loại (`5300:51115`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Content (`I5300:51115;2015:30999`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Value (`I5300:51115;2015:31000`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chevron (`I5300:51115;2015:31003`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Field · Đối tượng (`5300:51120`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Đối tượng (`5300:51122`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Content (`I5300:51122;2015:30999`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Value (`I5300:51122;2015:31000`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
