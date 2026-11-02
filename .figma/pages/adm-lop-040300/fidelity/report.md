# Fidelity: ADM-LOP-040300 — Lớp học / Cài đặt / Giáo viên

- URL: `http://localhost:3108/lop-hoc/cai-dat/giao-vien`
- Verdict: **FAIL**
- Pixels outside text: **0.002%** differ (limit 0.5%); all pixels: 0.103%; inside text boxes: 1.316% (glyph rendering)
- Boxes: 147/148 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 147, ≤1px: 147, ≤2px: 147, ≤4px: 148, >4px: 0

## Failures

- 1 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.63px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 1216, 232, 24×24 | 26 | Frame 1171274935 (`2384:54598`, icon) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`I4915:229723;4901:211176`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Buổi đã dạy / Tổng (`2527:185358`) | 8.5% |
| Label (`I4915:229723;4901:211143;2245:87908`) | 8.4% |
| Label (`I4915:229723;4901:211141;2245:87908`) | 5.9% |
| Button (`I2384:54527;1910:18518`) | 4.8% |
| PHỤ TRÁCH CHÍNH (`2384:50902`) | 3.6% |
| 200.000 đ (`2527:185364`) | 2.9% |
| Lương / Buổi (`2527:185360`) | 2.8% |
| Mã giáo viên (`2384:50900`) | 2.7% |
| Giáo viên (`2384:50898`) | 2.2% |
| 200.000 đ (`2527:185368`) | 2.2% |
| 12 / 20 (`2527:185362`) | 2.1% |
| Label (`I4915:229723;4901:211144;2245:87908`) | 2% |
| 8 / 20 (`2527:185366`) | 1.5% |
| Mã giáo viên (`2384:54585`) | 1.1% |
| Mã giáo viên (`2384:54573`) | 1% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Buổi đã dạy / Tổng (`2527:185358`) | text | 2.63 ✗ | 2.5 (text) | -1.31 | 0 | 2.63 | 0 |
| Horizontal Tab Bar Navigation (`2384:53548`) | container | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Atom/Side Tab (`2384:53552`) | instance | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Container (`I2384:53552;2177:28927`) | container | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Chi tiết NV (`I2384:53552;2177:28928`) | text | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Atom/Side Tab (`2384:53553`) | instance | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Container (`I2384:53553;2177:28927`) | container | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Chi tiết NV (`I2384:53553;2177:28928`) | text | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Atom/Side Tab (`2384:53554`) | instance | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Container (`I2384:53554;2177:28927`) | container | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Chi tiết NV (`I2384:53554;2177:28928`) | text | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Atom/Side Tab (`2384:53555`) | instance | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Container (`I2384:53555;2177:28927`) | container | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Chi tiết NV (`I2384:53555;2177:28928`) | text | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Atom/Side Tab (`2384:53556`) | instance | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Container (`I2384:53556;2177:28927`) | container | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Chi tiết NV (`I2384:53556;2177:28928`) | text | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Subtract (`I4915:229723;4901:211086`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | 0 |
| Intersect (`I4915:229723;4901:211093`) | icon | 0.01 | 1 | 0 | -0.01 | -0.01 | 0 |
| Vector (`I4915:229723;4901:211107`) | icon | 0.01 | 1 | 0.01 | 0 | 0 | -0.01 |
| Union (`I4915:229723;4901:211108`) | icon | 0.01 | 1 | -0.01 | 0 | -0.01 | -0.01 |
| Group 240002 (`I4915:229723;4901:211111`) | icon | 0.01 | 1 | 0 | 0 | 0 | -0.01 |
| MainContent (`2384:50873`) | container | 0 | 1 | 0 | 0 | 0 | 0 |
| Atom/Side Tab (`2384:53549`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I2384:53549;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
