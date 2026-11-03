# Fidelity: ADM-HD-010012 — Hoá đơn / Popup thêm hoá đơn / Chọn học viên có sẵn

- URL: `http://localhost:3000/frames/adm-hd-010012`
- Verdict: **PASS**
- Pixels outside text: **0.109%** differ (limit 0.5%); all pixels: 0.359%; inside text boxes: 0.985% (glyph rendering)
- Boxes: 189/189 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 172, ≤1px: 186, ≤2px: 189, ≤4px: 189, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 352, 656, 72×8 | 72 | Atom/Dropzone (`3004:65486`, instance) |
| 456, 656, 64×8 | 70 | Atom/Dropzone (`3004:65486`, instance) |
| 72, 760, 72×8 | 65 | Atom/Dropzone (`3004:65486`, instance) |
| 256, 656, 72×8 | 64 | Atom/Dropzone (`3004:65486`, instance) |
| 448, 760, 64×8 | 60 | Atom/Dropzone (`3004:65486`, instance) |
| 168, 656, 64×8 | 58 | Atom/Dropzone (`3004:65486`, instance) |
| 168, 760, 64×8 | 58 | Atom/Dropzone (`3004:65486`, instance) |
| 16, 680, 8×64 | 55 | Atom/Dropzone (`3004:65486`, instance) |
| 552, 656, 64×8 | 52 | Atom/Dropzone (`3004:65486`, instance) |
| 352, 760, 72×8 | 52 | Atom/Dropzone (`3004:65486`, instance) |
| 536, 760, 72×8 | 52 | Atom/Dropzone (`3004:65486`, instance) |
| 72, 656, 72×8 | 48 | Atom/Dropzone (`3004:65486`, instance) |
| 256, 760, 72×8 | 47 | Atom/Dropzone (`3004:65486`, instance) |
| 656, 688, 8×56 | 40 | Atom/Dropzone (`3004:65486`, instance) |
| 24, 760, 24×8 | 15 | Atom/Dropzone (`3004:65486`, instance) |
| 632, 760, 24×8 | 13 | Atom/Dropzone (`3004:65486`, instance) |
| 24, 656, 24×8 | 12 | Atom/Dropzone (`3004:65486`, instance) |
| 240, 888, 16×24 | 12 | Liner Icon (`I3004:65491;3004:58620;2808:48144`, icon) |
| 640, 656, 16×8 | 6 | Atom/Dropzone (`3004:65486`, instance) |
| 448, 440, 24×16 | 5 | Liner Icon (`I3004:65475;3004:58620;2808:48144`, icon) |
| 456, 144, 16×8 | 4 | Atom/Label (`I3004:65456;3004:58650`, instance) |
| 232, 376, 16×16 | 4 | Liner Icon (`I3004:65470;3004:58650;2808:48144`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Tệp đính kèm (`3004:65485`) | 12.3% |
| Helper (`I3004:70585;3004:58623`) | 9.7% |
| Value (`I3269:76419;2015:36008`) | 5.3% |
| Người phụ trách (`3269:76413`) | 4.8% |
| Value (`I3269:76612;2015:36008`) | 4.4% |
| Required (`I3004:65470;3004:58650;2911:43272`) | 4.3% |
| Required (`I3004:65474;3004:58650;2911:43272`) | 4.3% |
| Required (`I3004:65456;3004:58650;2911:43272`) | 4.2% |
| Required (`I3210:51446;3004:58609;2911:43272`) | 4.2% |
| Required (`I3004:65469;3004:58650;2911:43272`) | 4.2% |
| Required (`I3004:65473;3004:58620;2911:43272`) | 4.2% |
| Required (`I3004:65471;3004:58650;2911:43272`) | 3.3% |
| Nhãn trường (`I4835:162413;2808:48145`) | 3.2% |
| Nhãn trường (`I3004:65456;3004:58650;2808:48145`) | 3% |
| Nhãn trường (`I3004:65490;3004:58620;2808:48145`) | 2.9% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Helper (`I3004:70585;3004:58623`) | text | 1.81 | 2.5 (text) | 0 | 0 | 1.81 | 0 |
| Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX (Tối đa 20MB) (`I3004:65486;1061:1317`) | text | 1.2 | 2.5 (text) | -0.61 | 0 | 1.2 | 0 |
| Tệp đính kèm (`3004:65485`) | text | 1.06 | 2.5 (text) | 0 | 0 | 1.06 | 0 |
| Người phụ trách · 1 (`3269:76604`) | container | 0.72 | 2.5 (text) | 0 | 0 | 0.72 | 0 |
| Tên người phụ trách (`3269:76606`) | text | 0.72 | 2.5 (text) | 0 | 0 | 0.72 | 0 |
| Số KPI (`3269:76419`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Content (`I3269:76419;2015:36007`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Value (`I3269:76419;2015:36008`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Chevron (`I3269:76419;2015:36012`) | icon | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Người phụ trách · 2 (`3269:76607`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Avatar (`3269:76608`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Ellipse 76 (`I3269:76608;2130:25376`) | image | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Tên người phụ trách (`3269:76611`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Số KPI (`3269:76612`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Content (`I3269:76612;2015:36007`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Value (`I3269:76612;2015:36008`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Chevron (`I3269:76612;2015:36012`) | icon | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Tiêu đề (`3269:76602`) | container | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Người phụ trách (`3269:76413`) | text | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Nút thêm người phụ trách (`3269:76414`) | icon | 0.16 | 2.5 (text) | 0.16 | 0 | 0 | 0 |
| Molecule/Field (`3004:65470`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Ô chọn (`I3004:65470;3004:58651`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Content (`I3004:65470;3004:58651;2015:30954`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Placeholder (`I3004:65470;3004:58651;2015:30955`) | text | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Molecule/Field (`3004:65474`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
