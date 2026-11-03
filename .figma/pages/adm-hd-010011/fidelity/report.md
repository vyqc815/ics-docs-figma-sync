# Fidelity: ADM-HD-010011 — Hoá đơn / Popup thêm hoá đơn / Chọn đơn vị tiền

- URL: `http://localhost:3000/frames/adm-hd-010011`
- Verdict: **PASS**
- Pixels outside text: **0.065%** differ (limit 0.5%); all pixels: 0.289%; inside text boxes: 0.756% (glyph rendering)
- Boxes: 215/215 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 198, ≤1px: 212, ≤2px: 215, ≤4px: 215, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 456, 656, 64×8 | 70 | Atom/Dropzone (`3004:60654`, instance) |
| 72, 760, 72×8 | 65 | Atom/Dropzone (`3004:60654`, instance) |
| 448, 760, 64×8 | 60 | Atom/Dropzone (`3004:60654`, instance) |
| 16, 680, 8×64 | 55 | Atom/Dropzone (`3004:60654`, instance) |
| 552, 656, 64×8 | 52 | Atom/Dropzone (`3004:60654`, instance) |
| 536, 760, 72×8 | 52 | Atom/Dropzone (`3004:60654`, instance) |
| 72, 656, 72×8 | 48 | Atom/Dropzone (`3004:60654`, instance) |
| 656, 688, 8×56 | 40 | Atom/Dropzone (`3004:60654`, instance) |
| 24, 760, 24×8 | 15 | Atom/Dropzone (`3004:60654`, instance) |
| 632, 760, 24×8 | 13 | Atom/Dropzone (`3004:60654`, instance) |
| 24, 656, 24×8 | 12 | Atom/Dropzone (`3004:60654`, instance) |
| 240, 888, 16×24 | 12 | Liner Icon (`I3004:60659;3004:58620;2808:48144`, icon) |
| 640, 656, 16×8 | 6 | Atom/Dropzone (`3004:60654`, instance) |
| 448, 440, 24×16 | 5 | Liner Icon (`I3004:60643;3004:58620;2808:48144`, icon) |
| 456, 144, 16×8 | 4 | Atom/Label (`I3004:60624;3004:58650`, instance) |
| 232, 376, 16×16 | 4 | Liner Icon (`I3004:60638;3004:58620;2808:48144`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Tệp đính kèm (`3004:60653`) | 12.3% |
| Helper (`I3004:70576;3004:58623`) | 9.7% |
| Người phụ trách (`3269:76404`) | 4.8% |
| Required (`I3004:60638;3004:58620;2911:43272`) | 4.3% |
| Required (`I3004:60642;3004:58650;2911:43272`) | 4.3% |
| Required (`I3004:60624;3004:58650;2911:43272`) | 4.2% |
| Required (`I3210:51423;3004:58609;2911:43272`) | 4.2% |
| Required (`I3004:60637;3004:58620;2911:43272`) | 4.2% |
| Required (`I3004:60641;3004:58620;2911:43272`) | 4.2% |
| Required (`I3004:60639;3004:58650;2911:43272`) | 3.3% |
| Nhãn trường (`I4835:162410;2808:48145`) | 3.2% |
| Nhãn trường (`I3004:60624;3004:58650;2808:48145`) | 3% |
| Nhãn trường (`I3004:60658;3004:58620;2808:48145`) | 2.9% |
| Tên người phụ trách (`3269:76583`) | 2.8% |
| Nhãn trường (`I3210:51423;3004:58609;2808:48145`) | 2.4% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Helper (`I3004:70576;3004:58623`) | text | 1.81 | 2.5 (text) | 0 | 0 | 1.81 | 0 |
| Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX (Tối đa 20MB) (`I3004:60654;1061:1317`) | text | 1.2 | 2.5 (text) | -0.61 | 0 | 1.2 | 0 |
| Tệp đính kèm (`3004:60653`) | text | 1.06 | 2.5 (text) | 0 | 0 | 1.06 | 0 |
| Người phụ trách · 1 (`3269:76581`) | container | 0.72 | 2.5 (text) | 0 | 0 | 0.72 | 0 |
| Tên người phụ trách (`3269:76583`) | text | 0.72 | 2.5 (text) | 0 | 0 | 0.72 | 0 |
| Số KPI (`3269:76410`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Content (`I3269:76410;2015:36007`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Value (`I3269:76410;2015:36008`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Chevron (`I3269:76410;2015:36012`) | icon | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Người phụ trách · 2 (`3269:76584`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Avatar (`3269:76585`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Ellipse 76 (`I3269:76585;2130:25376`) | image | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Tên người phụ trách (`3269:76588`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Số KPI (`3269:76589`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Content (`I3269:76589;2015:36007`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Value (`I3269:76589;2015:36008`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Chevron (`I3269:76589;2015:36012`) | icon | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Tiêu đề (`3269:76579`) | container | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Người phụ trách (`3269:76404`) | text | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Nút thêm người phụ trách (`3269:76405`) | icon | 0.16 | 2.5 (text) | 0.16 | 0 | 0 | 0 |
| Molecule/Field (`3004:60638`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Ô nhập (`I3004:60638;3004:58628`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Tìm nội dung... (`I3004:60638;3004:58628;1048:1264`) | text | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Molecule/Field (`3004:60642`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Ô chọn (`I3004:60642;3004:58651`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
