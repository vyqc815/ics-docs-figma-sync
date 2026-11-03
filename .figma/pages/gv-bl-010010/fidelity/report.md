# Fidelity: GV-BL-010010 — Báo lỗi / Popup gửi báo lỗi · Giáo trình

- URL: `http://localhost:3000/frames/gv-bl-010010`
- Verdict: **PASS**
- Pixels outside text: **0.151%** differ (limit 0.5%); all pixels: 0.49%; inside text boxes: 1.229% (glyph rendering)
- Boxes: 76/76 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 73, ≤1px: 73, ≤2px: 76, ≤4px: 76, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 256, 616, 72×8 | 70 | Atom/Dropzone (`5300:51071`, instance) |
| 344, 616, 72×8 | 63 | Atom/Dropzone (`5300:51071`, instance) |
| 64, 712, 72×16 | 56 | Atom/Dropzone (`5300:51071`, instance) |
| 72, 616, 72×8 | 54 | Atom/Dropzone (`5300:51071`, instance) |
| 16, 640, 8×56 | 53 | Atom/Dropzone (`5300:51071`, instance) |
| 168, 616, 64×8 | 50 | Atom/Dropzone (`5300:51071`, instance) |
| 344, 712, 64×16 | 50 | Atom/Dropzone (`5300:51071`, instance) |
| 248, 712, 72×16 | 48 | Atom/Dropzone (`5300:51071`, instance) |
| 160, 712, 64×16 | 46 | Atom/Dropzone (`5300:51071`, instance) |
| 456, 640, 8×56 | 40 | Atom/Dropzone (`5300:51071`, instance) |
| 24, 712, 24×16 | 16 | Atom/Dropzone (`5300:51071`, instance) |
| 432, 712, 24×16 | 13 | Atom/Dropzone (`5300:51071`, instance) |
| 24, 616, 24×8 | 10 | Atom/Dropzone (`5300:51071`, instance) |
| 440, 616, 16×8 | 6 | Atom/Dropzone (`5300:51071`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I5300:51070;2015:30530`) | 10.9% |
| Description (`I5300:51047;2514:153342`) | 4.3% |
| Kéo thả file vào đây hoặc chọn file (`I5300:51071;1061:1316`) | 2.6% |
| Label (`I5364:369439;2015:30530`) | 1.3% |
| Label (`I5300:51054;2015:30530`) | 1.1% |
| Label (`I5300:51058;2015:30530`) | 1.1% |
| Label (`I5300:51067;2015:30530`) | 1% |
| Label (`I5300:51061;2015:30530`) | 0.9% |
| Label (`I5300:51051;2015:30530`) | 0.8% |
| Label (`I5300:51064;2015:30530`) | 0.7% |
| Value (`I5300:51062;2015:31000`) | 0.1% |
| Button (`I5300:51072;2514:153361;1048:1232`) | 0.1% |
| Button (`I5300:51072;2514:153363;1048:1230`) | 0.1% |
| Title (`I5300:51047;2514:153341`) | 0% |
| Required (`I5300:51054;2015:30531`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX (Tối đa 20MB) (`I5300:51071;1061:1317`) | text | 1.64 | 2.5 (text) | -0.83 | 0 | 1.64 | 0 |
| Atom/Label (`5300:51070`) | instance | 1.14 | 2.5 (text) | 0 | 0 | 1.14 | 0 |
| Label (`I5300:51070;2015:30530`) | text | 1.14 | 2.5 (text) | 0 | 0 | 1.14 | 0 |
| Popup/Header (`5300:51047`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I5300:51047;2514:153340`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I5300:51047;2711:67900`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I5300:51047;2514:153341`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Description (`I5300:51047;2514:153342`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`5300:51048`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Hàng · Độ nghiêm trọng & Trung tâm (`5364:369437`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Field · Độ nghiêm trọng (`5300:51053`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`5300:51054`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Label (`I5300:51054;2015:30530`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Required (`I5300:51054;2015:30531`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Độ nghiêm trọng (`5300:51055`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Content (`I5300:51055;2015:30954`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Placeholder (`I5300:51055;2015:30955`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chevron (`I5300:51055;2015:30958`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Field · Trung tâm (`5364:369438`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`5364:369439`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Label (`I5364:369439;2015:30530`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Required (`I5364:369439;2015:30531`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Trung tâm (`5364:369440`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Content (`I5364:369440;2015:30954`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Placeholder (`I5364:369440;2015:30955`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
