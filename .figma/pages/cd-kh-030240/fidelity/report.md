# Fidelity: CD-KH-030240 — Học kỳ / Bài học / Popup chi tiết bài học (4)

- URL: `http://localhost:3000/hoc-ky/bai-hoc/popup-chi-tiet-bai-hoc-4`
- Verdict: **FAIL**
- Pixels outside text: **0.102%** differ (limit 0.5%); all pixels: 0.651%; inside text boxes: 2.314% (glyph rendering)
- Boxes: 195/263 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 141, ≤1px: 157, ≤2px: 184, ≤4px: 240, >4px: 23

## Failures

- 68 elements are off by more than their limit (1px, 2.5px for text-driven; worst 7px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 88, 776, 24×24 | 91 | Background+Border (`7037:390084`, icon) |
| 88, 648, 24×16 | 90 | Background+Border (`7037:390054`, icon) |
| 88, 712, 24×24 | 80 | Background+Border (`7037:390069`, icon) |
| 56, 776, 16×24 | 61 | Gỡ (x) (`7037:390095`, icon) |
| 88, 512, 24×24 | 59 | Background+Border (`7037:390024`, icon) |
| 88, 576, 24×24 | 59 | Background+Border (`7037:390039`, icon) |
| 88, 448, 24×24 | 49 | Overlay+Border (`7037:390010`, icon) |
| 56, 648, 16×16 | 49 | Gỡ (x) (`7037:390065`, icon) |
| 200, 784, 64×8 | 48 | Container (`7037:390091`, container) |
| 56, 520, 16×16 | 47 | Gỡ (x) (`7037:390035`, icon) |
| 56, 584, 16×16 | 47 | Gỡ (x) (`7037:390050`, icon) |
| 56, 712, 16×24 | 47 | Gỡ (x) (`7037:390080`, icon) |
| 128, 504, 16×24 | 40 | Icon (`7037:390029`, icon) |
| 56, 456, 16×16 | 33 | Gỡ (x) (`7037:390020`, icon) |
| 128, 568, 16×24 | 28 | Icon (`7037:390044`, icon) |
| 336, 792, 48×8 | 27 | Item 8 (`7037:390082`, container) |
| 88, 384, 24×24 | 19 | Overlay+Border (`7037:389996`, icon) |
| 56, 392, 16×16 | 17 | Gỡ (x) (`7037:390006`, icon) |
| 208, 720, 8×8 | 5 | Container (`7037:390076`, container) |
| 256, 720, 8×8 | 4 | Container (`7037:390076`, container) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I7037:390094;1067:2464`) | 24.9% |
| Label (`I7037:390079;1067:2464`) | 22.9% |
| 你叫什么名字？ (`7037:390074`) | 21.8% |
| 我姓…… (`7037:390089`) | 20% |
| 再见 (`7037:390014`) | 18% |
| 早上好 (`7037:390185`) | 17.3% |
| 谢谢 (`7037:390180`) | 17% |
| 你好！ (`7037:390059`) | 15.9% |
| Label (`I7037:390049;1067:2462`) | 15% |
| Label (`I7037:390064;1067:2464`) | 14.3% |
| Label (`I7037:390034;1067:2462`) | 13.6% |
| nǐ jiào shén me... (`7037:390075`) | 12.8% |
| ÔN TẬP HK I – HK II (BUỔI 1) (`1076:6307`) | 12.2% |
| zǎo shang hǎo (`7037:390187`) | 9.9% |
| wǒ xìng ...... (`7037:390090`) | 9.6% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Section - Left Column: Knowledge Item List (Span 5 of 12) (`7037:389972`) | container | 7 ✗ | 2.5 (text) | 0 | 0 | -0.01 | 7 |
| Knowledge Items List (`7037:389979`) | container | 7 ✗ | 2.5 (text) | 0 | 0 | -0.01 | 7 |
| wǒ xìng ...... (`7037:390090`) | text | 7 ✗ | 2.5 (text) | 0 | 7 | -0.01 | 0 |
| Container (`7037:390091`) | container | 7 ✗ | 2.5 (text) | 0 | 7 | -0.01 | 0 |
| Tôi họ ...... (`7037:390092`) | text | 7 ✗ | 2.5 (text) | 0 | 7 | 0 | 0 |
| Gỡ (x) (`7037:390095`) | icon | 6 ✗ | 2.5 (text) | 0 | 6 | 0 | 0 |
| Background+Border (`7037:390084`) | icon | 6 ✗ | 2.5 (text) | 0 | 6 | 0 | 0 |
| Container (`7037:390093`) | container | 6 ✗ | 2.5 (text) | -0.01 | 6 | 0 | 0 |
| Background+Border (`7037:390094`) | instance | 6 ✗ | 2.5 (text) | -0.01 | 6 | 0 | 0 |
| Label (`I7037:390094;1067:2464`) | text | 6 ✗ | 2.5 (text) | -0.01 | 6 | 0 | 0 |
| nǐ jiào shén me... (`7037:390075`) | text | 5 ✗ | 2.5 (text) | 0 | 5 | -0.01 | 0 |
| Container (`7037:390076`) | container | 5 ✗ | 2.5 (text) | 0 | 5 | -0.01 | 0 |
| Bạn tên là gì? (`7037:390077`) | text | 5 ✗ | 2.5 (text) | 0 | 5 | 0 | 0 |
| Item 8 (`7037:390082`) | container | 5 ✗ | 2.5 (text) | 0 | 5 | -0.01 | 2 |
| Container (`7037:390083`) | container | 5 ✗ | 2.5 (text) | 0 | 5 | -0.01 | 2 |
| Container (`7037:390087`) | container | 5 ✗ | 2.5 (text) | 0 | 5 | -0.01 | 2 |
| Paragraph (`7037:390088`) | container | 5 ✗ | 2.5 (text) | 0 | 5 | -0.01 | 2 |
| 我姓…… (`7037:390089`) | text | 5 ✗ | 2.5 (text) | 0 | 5 | 0 | 0 |
| Gỡ (x) (`7037:390080`) | icon | 4.5 ✗ | 2.5 (text) | 0 | 4.5 | 0 | 0 |
| Background+Border (`7037:390069`) | icon | 4.5 ✗ | 2.5 (text) | 0 | 4.5 | 0 | 0 |
| Container (`7037:390078`) | container | 4.5 ✗ | 2.5 (text) | -0.01 | 4.5 | 0 | 0 |
| Background+Border (`7037:390079`) | instance | 4.5 ✗ | 2.5 (text) | -0.01 | 4.5 | 0 | 0 |
| Label (`I7037:390079;1067:2464`) | text | 4.5 ✗ | 2.5 (text) | -0.01 | 4.5 | 0 | 0 |
| nǐ hǎo ! (`7037:390060`) | text | 4 ✗ | 2.5 (text) | 0 | 4 | -0.01 | 0 |
| Container (`7037:390061`) | container | 4 ✗ | 2.5 (text) | 0 | 4 | -0.01 | 0 |
