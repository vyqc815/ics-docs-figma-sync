# Fidelity: CH-BL-010020 — Báo lỗi / Popup chi tiết báo lỗi · Đang xử lý

- URL: `http://localhost:3000/frames/ch-bl-010020`
- Verdict: **PASS**
- Pixels outside text: **0.129%** differ (limit 0.5%); all pixels: 0.344%; inside text boxes: 0.805% (glyph rendering)
- Boxes: 105/105 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 99, ≤1px: 102, ≤2px: 105, ≤4px: 105, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 264, 664, 72×8 | 80 | Atom/Dropzone (`5300:28112`, instance) |
| 72, 760, 72×16 | 73 | Atom/Dropzone (`5300:28112`, instance) |
| 368, 664, 72×8 | 64 | Atom/Dropzone (`5300:28112`, instance) |
| 464, 664, 72×8 | 64 | Atom/Dropzone (`5300:28112`, instance) |
| 264, 760, 72×16 | 64 | Atom/Dropzone (`5300:28112`, instance) |
| 456, 760, 72×16 | 60 | Atom/Dropzone (`5300:28112`, instance) |
| 72, 664, 72×8 | 58 | Atom/Dropzone (`5300:28112`, instance) |
| 16, 688, 8×56 | 55 | Atom/Dropzone (`5300:28112`, instance) |
| 168, 664, 72×8 | 50 | Atom/Dropzone (`5300:28112`, instance) |
| 360, 760, 72×16 | 48 | Atom/Dropzone (`5300:28112`, instance) |
| 168, 760, 64×16 | 46 | Atom/Dropzone (`5300:28112`, instance) |
| 576, 688, 8×56 | 40 | Atom/Dropzone (`5300:28112`, instance) |
| 40, 624, 32×24 | 27 | Định dạng · PNG (`5274:364144`, icon) |
| 24, 760, 24×16 | 16 | Atom/Dropzone (`5300:28112`, instance) |
| 552, 760, 24×16 | 13 | Atom/Dropzone (`5300:28112`, instance) |
| 24, 664, 24×8 | 12 | Atom/Dropzone (`5300:28112`, instance) |
| 560, 664, 16×8 | 6 | Atom/Dropzone (`5300:28112`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I5300:28111;2015:30530`) | 10.9% |
| Kéo thả file vào đây hoặc chọn file (`I5300:28112;1061:1316`) | 2.6% |
| Label (`I5300:28092;2015:30530`) | 2.2% |
| Tìm nội dung... (`I5300:28109;2808:42359`) | 1.7% |
| Label (`I5300:28088;2015:30530`) | 1.3% |
| Label (`I5300:28085;2015:30530`) | 1.2% |
| Label (`I5300:28114;2015:30530`) | 1.2% |
| Description (`I5274:364128;2514:153342`) | 1.1% |
| Label (`I5300:28095;2015:30530`) | 1.1% |
| Label (`I5300:28099;2015:30530`) | 1.1% |
| Label (`I5300:28108;2015:30530`) | 1% |
| Label (`I5300:28102;2015:30530`) | 0.9% |
| Label (`I5371:40063;2015:30530`) | 0.7% |
| Label (`I5300:28105;2015:30530`) | 0.7% |
| Đã nhập xong (`I5300:28106;1048:1266`) | 0.4% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX (Tối đa 20MB) (`I5300:28112;1061:1317`) | text | 1.64 | 2.5 (text) | -0.83 | 0 | 1.64 | 0 |
| Atom/Label (`5300:28111`) | instance | 1.14 | 2.5 (text) | 0 | 0 | 1.14 | 0 |
| Label (`I5300:28111;2015:30530`) | text | 1.14 | 2.5 (text) | 0 | 0 | 1.14 | 0 |
| Atom/Label (`5300:28092`) | instance | 0.53 | 2.5 (text) | 0 | 0 | 0.53 | 0 |
| Label (`I5300:28092;2015:30530`) | text | 0.53 | 2.5 (text) | 0 | 0 | 0.53 | 0 |
| Required (`I5300:28092;2015:30531`) | text | 0.53 | 2.5 (text) | 0.53 | 0 | 0 | 0 |
| Atom/Label (`5300:28114`) | instance | 0.38 | 2.5 (text) | 0 | 0 | 0.38 | 0 |
| Label (`I5300:28114;2015:30530`) | text | 0.38 | 2.5 (text) | 0 | 0 | 0.38 | 0 |
| Field · Loại (`5300:28084`) | container | 0.01 | 2.5 (text) | 0 | 0 | -0.01 | 0 |
| Loại (`5300:28086`) | instance | 0.01 | 2.5 (text) | 0 | 0 | -0.01 | 0 |
| Content (`I5300:28086;2015:30999`) | container | 0.01 | 2.5 (text) | 0 | 0 | -0.01 | 0 |
| Value (`I5300:28086;2015:31000`) | text | 0.01 | 2.5 (text) | 0 | 0 | -0.01 | 0 |
| Chevron (`I5300:28086;2015:31003`) | icon | 0.01 | 2.5 (text) | -0.01 | 0 | 0 | 0 |
| Field · Độ nghiêm trọng (`5300:28087`) | container | 0.01 | 2.5 (text) | -0.01 | 0 | 0 | 0 |
| Atom/Label (`5300:28088`) | instance | 0.01 | 2.5 (text) | -0.01 | 0 | 0 | 0 |
| Label (`I5300:28088;2015:30530`) | text | 0.01 | 2.5 (text) | -0.01 | 0 | 0 | 0 |
| Độ nghiêm trọng (`5300:28089`) | instance | 0.01 | 2.5 (text) | -0.01 | 0 | 0 | 0 |
| Content (`I5300:28089;2015:30999`) | container | 0.01 | 2.5 (text) | -0.01 | 0 | 0 | 0 |
| Value (`I5300:28089;2015:31000`) | text | 0.01 | 2.5 (text) | -0.01 | 0 | 0 | 0 |
| Popup/Header (`5274:364128`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I5274:364128;2514:153340`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I5274:364128;2711:67900`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I5274:364128;2514:153341`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Description (`I5274:364128;2514:153342`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`5274:364129`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
