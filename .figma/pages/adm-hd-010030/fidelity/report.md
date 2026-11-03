# Fidelity: ADM-HD-010030 — Hoá đơn / Popup chỉnh sửa hoá đơn

- URL: `http://localhost:3000/frames/adm-hd-010030`
- Verdict: **PASS**
- Pixels outside text: **0.117%** differ (limit 0.5%); all pixels: 0.383%; inside text boxes: 1.048% (glyph rendering)
- Boxes: 186/186 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 169, ≤1px: 183, ≤2px: 186, ≤4px: 186, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 352, 584, 72×8 | 72 | Atom/Dropzone (`3004:15056`, instance) |
| 456, 584, 64×8 | 70 | Atom/Dropzone (`3004:15056`, instance) |
| 72, 688, 72×8 | 65 | Body (`3004:15023`, container) |
| 256, 584, 72×8 | 64 | Atom/Dropzone (`3004:15056`, instance) |
| 448, 688, 64×8 | 60 | Body (`3004:15023`, container) |
| 168, 584, 64×8 | 58 | Atom/Dropzone (`3004:15056`, instance) |
| 168, 688, 64×8 | 58 | Body (`3004:15023`, container) |
| 16, 608, 8×56 | 55 | Atom/Dropzone (`3004:15056`, instance) |
| 552, 584, 64×8 | 52 | Atom/Dropzone (`3004:15056`, instance) |
| 352, 688, 72×8 | 52 | Body (`3004:15023`, container) |
| 536, 688, 72×8 | 52 | Body (`3004:15023`, container) |
| 72, 584, 72×8 | 48 | Atom/Dropzone (`3004:15056`, instance) |
| 256, 688, 72×8 | 47 | Body (`3004:15023`, container) |
| 656, 608, 8×56 | 40 | Atom/Dropzone (`3004:15056`, instance) |
| 24, 680, 24×16 | 14 | Atom/Dropzone (`3004:15056`, instance) |
| 632, 680, 24×16 | 13 | Atom/Dropzone (`3004:15056`, instance) |
| 24, 584, 24×8 | 12 | Atom/Dropzone (`3004:15056`, instance) |
| 240, 816, 16×16 | 12 | Liner Icon (`I3004:15061;3004:58620;2808:48144`, icon) |
| 640, 584, 16×8 | 6 | Atom/Dropzone (`3004:15056`, instance) |
| 448, 368, 24×16 | 5 | Liner Icon (`I3004:15045;3004:58620;2808:48144`, icon) |
| 456, 64, 16×8 | 4 | Liner Icon (`I3004:15026;3004:58650;2808:48144`, icon) |
| 232, 304, 16×8 | 4 | Liner Icon (`I3004:15040;3004:58620;2808:48144`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Tệp đính kèm (`3004:15055`) | 12.3% |
| Helper (`I3004:15292;3004:58623`) | 9.7% |
| Value (`I3269:76437;2015:36008`) | 5.3% |
| Người phụ trách (`3269:76431`) | 4.8% |
| Value (`I3269:76658;2015:36008`) | 4.4% |
| Required (`I3004:15040;3004:58620;2911:43272`) | 4.3% |
| Required (`I3004:15044;3004:58650;2911:43272`) | 4.3% |
| Required (`I3004:15026;3004:58650;2911:43272`) | 4.2% |
| Required (`I3004:15036;3004:58609;2911:43272`) | 4.2% |
| Required (`I3004:15037;3004:58609;2911:43272`) | 4.2% |
| Required (`I3004:15025;3004:58650;2911:43272`) | 4.2% |
| Required (`I3004:15039;3004:58620;2911:43272`) | 4.2% |
| Required (`I3004:15043;3004:58620;2911:43272`) | 4.2% |
| Required (`I3004:15041;3004:58650;2911:43272`) | 3.3% |
| Nhãn trường (`I3004:15026;3004:58650;2808:48145`) | 3% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Helper (`I3004:15292;3004:58623`) | text | 1.81 | 2.5 (text) | 0 | 0 | 1.81 | 0 |
| Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX (Tối đa 20MB) (`I3004:15056;1061:1317`) | text | 1.2 | 2.5 (text) | -0.61 | 0 | 1.2 | 0 |
| Tệp đính kèm (`3004:15055`) | text | 1.06 | 2.5 (text) | 0 | 0 | 1.06 | 0 |
| Người phụ trách · 1 (`3269:76650`) | container | 0.72 | 2.5 (text) | 0 | 0 | 0.72 | 0 |
| Tên người phụ trách (`3269:76652`) | text | 0.72 | 2.5 (text) | 0 | 0 | 0.72 | 0 |
| Số KPI (`3269:76437`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Content (`I3269:76437;2015:36007`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Value (`I3269:76437;2015:36008`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Chevron (`I3269:76437;2015:36012`) | icon | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Người phụ trách · 2 (`3269:76653`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Avatar (`3269:76654`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Ellipse 76 (`I3269:76654;2130:25376`) | image | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Tên người phụ trách (`3269:76657`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Số KPI (`3269:76658`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Content (`I3269:76658;2015:36007`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Value (`I3269:76658;2015:36008`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Chevron (`I3269:76658;2015:36012`) | icon | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Tiêu đề (`3269:76648`) | container | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Người phụ trách (`3269:76431`) | text | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Nút thêm người phụ trách (`3269:76432`) | icon | 0.16 | 2.5 (text) | 0.16 | 0 | 0 | 0 |
| Molecule/Field (`3004:15040`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Ô nhập (`I3004:15040;3004:58628`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Đã nhập xong (`I3004:15040;3004:58628;1048:1266`) | text | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Molecule/Field (`3004:15044`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Ô chọn (`I3004:15044;3004:58651`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
