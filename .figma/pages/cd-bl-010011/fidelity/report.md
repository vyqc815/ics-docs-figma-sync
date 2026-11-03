# Fidelity: CD-BL-010011 — Báo lỗi / Popup gửi báo lỗi · Đối tượng Khác

- URL: `http://localhost:3000/frames/cd-bl-010011`
- Verdict: **PASS**
- Pixels outside text: **0.151%** differ (limit 0.5%); all pixels: 0.346%; inside text boxes: 0.717% (glyph rendering)
- Boxes: 81/81 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 75, ≤1px: 78, ≤2px: 81, ≤4px: 81, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 256, 616, 72×8 | 70 | Atom/Dropzone (`5300:51200`, instance) |
| 344, 616, 72×8 | 63 | Atom/Dropzone (`5300:51200`, instance) |
| 64, 712, 72×16 | 56 | Atom/Dropzone (`5300:51200`, instance) |
| 72, 616, 72×8 | 54 | Atom/Dropzone (`5300:51200`, instance) |
| 16, 640, 8×56 | 53 | Atom/Dropzone (`5300:51200`, instance) |
| 168, 616, 64×8 | 50 | Atom/Dropzone (`5300:51200`, instance) |
| 344, 712, 64×16 | 50 | Atom/Dropzone (`5300:51200`, instance) |
| 248, 712, 72×16 | 48 | Atom/Dropzone (`5300:51200`, instance) |
| 160, 712, 64×16 | 46 | Atom/Dropzone (`5300:51200`, instance) |
| 456, 640, 8×56 | 40 | Atom/Dropzone (`5300:51200`, instance) |
| 24, 712, 24×16 | 16 | Atom/Dropzone (`5300:51200`, instance) |
| 432, 712, 24×16 | 13 | Atom/Dropzone (`5300:51200`, instance) |
| 24, 616, 24×8 | 10 | Atom/Dropzone (`5300:51200`, instance) |
| 440, 616, 16×8 | 6 | Atom/Dropzone (`5300:51200`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I5300:51199;2015:30530`) | 10.9% |
| Kéo thả file vào đây hoặc chọn file (`I5300:51200;1061:1316`) | 2.6% |
| Label (`I5300:51183;2015:30530`) | 2.2% |
| Description (`I5300:51176;2514:153342`) | 1.3% |
| Label (`I5364:369388;2015:30530`) | 1.3% |
| Label (`I5300:51180;2015:30530`) | 1.2% |
| Label (`I5300:51202;2015:30530`) | 1.1% |
| Label (`I5300:51187;2015:30530`) | 1.1% |
| Label (`I5300:51196;2015:30530`) | 1% |
| Label (`I5300:51190;2015:30530`) | 0.9% |
| Label (`I5300:51193;2015:30530`) | 0.7% |
| Button (`I5300:51204;2514:153361;1048:1232`) | 0.1% |
| Button (`I5300:51204;2514:153363;1048:1230`) | 0.1% |
| Title (`I5300:51176;2514:153341`) | 0% |
| Placeholder (`I5300:51203;2015:30955`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX (Tối đa 20MB) (`I5300:51200;1061:1317`) | text | 1.64 | 2.5 (text) | -0.83 | 0 | 1.64 | 0 |
| Atom/Label (`5300:51199`) | instance | 1.14 | 2.5 (text) | 0 | 0 | 1.14 | 0 |
| Label (`I5300:51199;2015:30530`) | text | 1.14 | 2.5 (text) | 0 | 0 | 1.14 | 0 |
| Atom/Label (`5300:51183`) | instance | 0.53 | 2.5 (text) | 0 | 0 | 0.53 | 0 |
| Label (`I5300:51183;2015:30530`) | text | 0.53 | 2.5 (text) | 0 | 0 | 0.53 | 0 |
| Required (`I5300:51183;2015:30531`) | text | 0.53 | 2.5 (text) | 0.53 | 0 | 0 | 0 |
| Popup/Header (`5300:51176`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I5300:51176;2514:153340`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I5300:51176;2711:67900`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I5300:51176;2514:153341`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Description (`I5300:51176;2514:153342`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`5300:51177`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Hàng · Độ nghiêm trọng & Trung tâm (`5364:369386`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Field · Độ nghiêm trọng (`5300:51201`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`5300:51202`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Label (`I5300:51202;2015:30530`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Độ nghiêm trọng (`5300:51203`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Content (`I5300:51203;2015:30954`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Placeholder (`I5300:51203;2015:30955`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chevron (`I5300:51203;2015:30958`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Field · Trung tâm (`5364:369387`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`5364:369388`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Label (`I5364:369388;2015:30530`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Required (`I5364:369388;2015:30531`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Trung tâm (`5364:369389`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
