# Fidelity: ADM-HD-010010 — Hoá đơn / Popup thêm hoá đơn

- URL: `http://localhost:3000/frames/adm-hd-010010`
- Verdict: **PASS**
- Pixels outside text: **0.109%** differ (limit 0.5%); all pixels: 0.359%; inside text boxes: 0.973% (glyph rendering)
- Boxes: 185/185 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 168, ≤1px: 182, ≤2px: 185, ≤4px: 185, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 352, 656, 72×8 | 72 | Atom/Dropzone (`2731:75500`, instance) |
| 456, 656, 64×8 | 70 | Atom/Dropzone (`2731:75500`, instance) |
| 72, 760, 72×8 | 65 | Atom/Dropzone (`2731:75500`, instance) |
| 256, 656, 72×8 | 64 | Atom/Dropzone (`2731:75500`, instance) |
| 448, 760, 64×8 | 60 | Atom/Dropzone (`2731:75500`, instance) |
| 168, 656, 64×8 | 58 | Atom/Dropzone (`2731:75500`, instance) |
| 168, 760, 64×8 | 58 | Atom/Dropzone (`2731:75500`, instance) |
| 16, 680, 8×64 | 55 | Atom/Dropzone (`2731:75500`, instance) |
| 552, 656, 64×8 | 52 | Atom/Dropzone (`2731:75500`, instance) |
| 352, 760, 72×8 | 52 | Atom/Dropzone (`2731:75500`, instance) |
| 536, 760, 72×8 | 52 | Atom/Dropzone (`2731:75500`, instance) |
| 72, 656, 72×8 | 48 | Atom/Dropzone (`2731:75500`, instance) |
| 256, 760, 72×8 | 47 | Atom/Dropzone (`2731:75500`, instance) |
| 656, 688, 8×56 | 40 | Atom/Dropzone (`2731:75500`, instance) |
| 24, 760, 24×8 | 15 | Atom/Dropzone (`2731:75500`, instance) |
| 632, 760, 24×8 | 13 | Atom/Dropzone (`2731:75500`, instance) |
| 24, 656, 24×8 | 12 | Atom/Dropzone (`2731:75500`, instance) |
| 240, 888, 16×24 | 12 | Liner Icon (`I2731:75522;3004:58620;2808:48144`, icon) |
| 640, 656, 16×8 | 6 | Atom/Dropzone (`2731:75500`, instance) |
| 448, 440, 24×16 | 5 | Liner Icon (`I2731:75477;3004:58620;2808:48144`, icon) |
| 456, 144, 16×8 | 4 | Atom/Label (`I2731:75377;3004:58650`, instance) |
| 232, 376, 16×16 | 4 | Liner Icon (`I2731:75430;3004:58620;2808:48144`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Tệp đính kèm (`2731:75499`) | 12.3% |
| Helper (`I3004:70567;3004:58623`) | 9.7% |
| Value (`I3269:76223;2015:36008`) | 5.3% |
| Người phụ trách (`2731:75491`) | 4.8% |
| Value (`I3269:76566;2015:36008`) | 4.4% |
| Required (`I2731:75430;3004:58620;2911:43272`) | 4.3% |
| Required (`I2731:75461;3004:58650;2911:43272`) | 4.3% |
| Required (`I2731:75377;3004:58650;2911:43272`) | 4.2% |
| Required (`I2731:75402;3004:58609;2911:43272`) | 4.2% |
| Required (`I2731:75423;3004:58620;2911:43272`) | 4.2% |
| Required (`I2731:75454;3004:58620;2911:43272`) | 4.2% |
| Required (`I2731:75437;3004:58650;2911:43272`) | 3.3% |
| Nhãn trường (`I4835:162335;2808:48145`) | 3.2% |
| Nhãn trường (`I2731:75377;3004:58650;2808:48145`) | 3% |
| Nhãn trường (`I2731:75515;3004:58620;2808:48145`) | 2.9% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Helper (`I3004:70567;3004:58623`) | text | 1.81 | 2.5 (text) | 0 | 0 | 1.81 | 0 |
| Hỗ trợ: PDF, DOC, DOCX, PPT, PPTX (Tối đa 20MB) (`I2731:75500;1061:1317`) | text | 1.2 | 2.5 (text) | -0.61 | 0 | 1.2 | 0 |
| Tệp đính kèm (`2731:75499`) | text | 1.06 | 2.5 (text) | 0 | 0 | 1.06 | 0 |
| Người phụ trách · 1 (`3269:76558`) | container | 0.72 | 2.5 (text) | 0 | 0 | 0.72 | 0 |
| Tên người phụ trách (`3269:76560`) | text | 0.72 | 2.5 (text) | 0 | 0 | 0.72 | 0 |
| Số KPI (`3269:76223`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Content (`I3269:76223;2015:36007`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Value (`I3269:76223;2015:36008`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Chevron (`I3269:76223;2015:36012`) | icon | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Người phụ trách · 2 (`3269:76561`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Avatar (`3269:76562`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Ellipse 76 (`I3269:76562;2130:25376`) | image | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Tên người phụ trách (`3269:76565`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Số KPI (`3269:76566`) | instance | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Content (`I3269:76566;2015:36007`) | container | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Value (`I3269:76566;2015:36008`) | text | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Chevron (`I3269:76566;2015:36012`) | icon | 0.72 | 2.5 (text) | 0.72 | 0 | 0 | 0 |
| Tiêu đề (`3269:76556`) | container | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Người phụ trách (`2731:75491`) | text | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Nút thêm người phụ trách (`2997:4006`) | icon | 0.16 | 2.5 (text) | 0.16 | 0 | 0 | 0 |
| Molecule/Field (`2731:75430`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Ô nhập (`I2731:75430;3004:58628`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Tìm nội dung... (`I2731:75430;3004:58628;1048:1264`) | text | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Molecule/Field (`2731:75461`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
| Ô chọn (`I2731:75461;3004:58651`) | instance | 0.01 | 2.5 (text) | 0 | 0 | 0.01 | 0 |
