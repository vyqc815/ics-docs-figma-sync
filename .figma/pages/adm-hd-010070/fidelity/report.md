# Fidelity: ADM-HD-010070 — Hoá đơn / Popup thêm người phụ trách

- URL: `http://localhost:3000/frames/adm-hd-010070`
- Verdict: **PASS**
- Pixels outside text: **0.006%** differ (limit 0.5%); all pixels: 0.132%; inside text boxes: 0.482% (glyph rendering)
- Boxes: 35/35 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 35, ≤1px: 35, ≤2px: 35, ≤4px: 35, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 24, 144, 8×8 | 4 | Atom/Label (`I3004:61808;3004:58650`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Required (`I3004:61878;3004:58650;2911:43272`) | 4.2% |
| Nhãn trường (`I3004:61878;3004:58650;2808:48145`) | 3.1% |
| Nhãn trường (`I3004:61808;3004:58650;2808:48145`) | 3% |
| Nhãn trường (`I3004:61809;3004:58650;2808:48145`) | 2.6% |
| Title (`I3004:61803;2514:153358`) | 0.2% |
| Button (`I3004:61810;2514:153361;1048:1232`) | 0.1% |
| Placeholder (`I3004:61878;3004:58651;2015:30955`) | 0% |
| Value (`I3004:61808;3004:58651;2015:31000`) | 0% |
| Value (`I3004:61809;3004:58651;2015:31000`) | 0% |
| Button (`I3004:61810;2514:153363;1048:1230`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atom/Label (`I3004:61878;3004:58650`) | instance | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Nhãn trường (`I3004:61878;3004:58650;2808:48145`) | text | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Required (`I3004:61878;3004:58650;2911:43272`) | text | 0.44 | 2.5 (text) | 0.44 | 0 | 0 | 0 |
| Popup/Header (`3004:61803`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I3004:61803;2514:153357`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I3004:61803;2514:153358`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`3004:61804`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Molecule/Field (`3004:61878`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Liner Icon (`I3004:61878;3004:58650;2808:48144`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Ô chọn (`I3004:61878;3004:58651`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Content (`I3004:61878;3004:58651;2015:30954`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Placeholder (`I3004:61878;3004:58651;2015:30955`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chevron (`I3004:61878;3004:58651;2015:30958`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Row (`3004:61807`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Molecule/Field (`3004:61808`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`I3004:61808;3004:58650`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Liner Icon (`I3004:61808;3004:58650;2808:48144`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhãn trường (`I3004:61808;3004:58650;2808:48145`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Ô chọn (`I3004:61808;3004:58651`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Content (`I3004:61808;3004:58651;2015:30999`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Value (`I3004:61808;3004:58651;2015:31000`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chevron (`I3004:61808;3004:58651;2015:31003`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Molecule/Field (`3004:61809`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`I3004:61809;3004:58650`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Liner Icon (`I3004:61809;3004:58650;2808:48144`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
