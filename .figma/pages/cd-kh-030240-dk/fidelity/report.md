# Fidelity: CD-KH-030240-DK — Học kỳ / Bài học / Popup chi tiết bài học (4)

- URL: `http://localhost:3000/hoc-ky/bai-hoc/popup-chi-tiet-bai-hoc-4-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.449%** differ (limit 0.5%); all pixels: 1.279%; inside text boxes: 3.825% (glyph rendering)
- Boxes: 190/258 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 134, ≤1px: 152, ≤2px: 179, ≤4px: 235, >4px: 23

## Failures

- 68 elements are off by more than their limit (1px, 2.5px for text-driven; worst 7px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 288, 576, 80×32 | 487 | Label (`I6015:64788;1067:2462`, text) |
| 288, 512, 80×32 | 409 | Label (`I6015:64773;1067:2462`, text) |
| 296, 640, 72×32 | 334 | Label (`I6015:64803;1067:2464`, text) |
| 48, 504, 64×48 | 316 | Background+Border (`6015:64763`, icon) |
| 48, 568, 64×48 | 316 | Background+Border (`6015:64778`, icon) |
| 48, 632, 48×48 | 312 | Background+Border (`6015:64793`, icon) |
| 48, 696, 48×48 | 309 | Background+Border (`6015:64808`, icon) |
| 296, 448, 72×32 | 308 | Label (`I6015:64758;1067:2460`, text) |
| 48, 760, 48×48 | 286 | Background+Border (`6015:64823`, icon) |
| 296, 768, 72×16 | 162 | Background+Border (`6015:64833`, instance) |
| 296, 792, 72×16 | 149 | Item 8 (`6015:64821`, container) |
| 296, 728, 72×8 | 139 | Item 7 (`6015:64806`, container) |
| 304, 400, 64×16 | 115 | Item 2 (`6015:64733`, container) |
| 296, 384, 72×8 | 83 | Background+Border (`6015:64744`, instance) |
| 312, 704, 56×16 | 67 | Label (`I6015:64818;1067:2464`, text) |
| 168, 784, 72×8 | 46 | Container (`6015:64830`, container) |
| 104, 800, 56×8 | 31 | Item 8 (`6015:64821`, container) |
| 480, 488, 8×32 | 22 | Background+Border (`6015:64865`, icon) |
| 480, 568, 8×32 | 22 | Background+Border (`6015:64878`, icon) |
| 480, 656, 8×24 | 22 | Background+Border (`6015:64891`, icon) |
| 672, 296, 16×32 | 17 | Background+Border (`6015:64854`, instance) |
| 264, 224, 8×16 | 14 | Atom/Icon Button (`7037:390228`, icon) |
| 376, 712, 8×24 | 13 | Button (`6015:64819`, icon) |
| 456, 496, 8×16 | 12 | Background+Border (`6015:64865`, icon) |
| 456, 576, 8×16 | 12 | Background+Border (`6015:64878`, icon) |
| 376, 648, 8×16 | 12 | Button (`6015:64804`, icon) |
| 456, 656, 8×24 | 12 | Background+Border (`6015:64891`, icon) |
| 376, 520, 8×16 | 11 | Button (`6015:64774`, icon) |
| 376, 584, 8×16 | 11 | Button (`6015:64789`, icon) |
| 160, 736, 16×8 | 10 | Item 7 (`6015:64806`, container) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I6015:64833;1067:2464`) | 28.7% |
| Tôi họ ...... (`6015:64831`) | 25.5% |
| Label (`I6015:64788;1067:2462`) | 24.9% |
| Label (`I6015:64818;1067:2464`) | 24.8% |
| 你叫什么名字？ (`6015:64813`) | 24.3% |
| 我姓…… (`6015:64828`) | 21.1% |
| 谢谢 (`6015:64919`) | 21.1% |
| Bạn tên là gì? (`6015:64816`) | 20.1% |
| 早上好 (`6015:64924`) | 20.1% |
| 再见 (`6015:64753`) | 19.2% |
| Label (`I6015:64773;1067:2462`) | 19.2% |
| 你好！ (`6015:64798`) | 17.6% |
| wǒ xìng ...... (`6015:64829`) | 16.5% |
| Câu chào hỏi (`6015:64801`) | 15.7% |
| Label (`I6015:64803;1067:2464`) | 15.2% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Section - Left Column: Knowledge Item List (Span 5 of 12) (`6015:64708`) | container | 7 ✗ | 2.5 (text) | 0 | 0 | -0.01 | 7 |
| Knowledge Items List (`6015:64717`) | container | 7 ✗ | 2.5 (text) | 0 | 0 | -0.01 | 7 |
| wǒ xìng ...... (`6015:64829`) | text | 7 ✗ | 2.5 (text) | 0 | 7 | 0 | 0 |
| Container (`6015:64830`) | container | 7 ✗ | 2.5 (text) | 0 | 7 | 0 | 0 |
| Tôi họ ...... (`6015:64831`) | text | 7 ✗ | 2.5 (text) | 0 | 7 | 0 | 0 |
| Background+Border (`6015:64823`) | icon | 6 ✗ | 2.5 (text) | 0 | 6 | 0 | 0 |
| Container (`6015:64832`) | container | 6 ✗ | 2.5 (text) | -0.01 | 6 | 0 | 0 |
| Background+Border (`6015:64833`) | instance | 6 ✗ | 2.5 (text) | -0.01 | 6 | 0 | 0 |
| Label (`I6015:64833;1067:2464`) | text | 6 ✗ | 2.5 (text) | -0.01 | 6 | 0 | 0 |
| Button (`6015:64834`) | icon | 6 ✗ | 2.5 (text) | -0.01 | 6 | 0 | 0 |
| nǐ jiào shén me... (`6015:64814`) | text | 5 ✗ | 2.5 (text) | 0 | 5 | 0 | 0 |
| Container (`6015:64815`) | container | 5 ✗ | 2.5 (text) | 0 | 5 | 0 | 0 |
| Bạn tên là gì? (`6015:64816`) | text | 5 ✗ | 2.5 (text) | 0 | 5 | 0 | 0 |
| Item 8 (`6015:64821`) | container | 5 ✗ | 2.5 (text) | 0 | 5 | -0.01 | 2 |
| Container (`6015:64822`) | container | 5 ✗ | 2.5 (text) | 0 | 5 | 0 | 2 |
| Container (`6015:64826`) | container | 5 ✗ | 2.5 (text) | 0 | 5 | 0 | 2 |
| Paragraph (`6015:64827`) | container | 5 ✗ | 2.5 (text) | 0 | 5 | 0 | 2 |
| 我姓…… (`6015:64828`) | text | 5 ✗ | 2.5 (text) | 0 | 5 | 0 | 0 |
| Background+Border (`6015:64808`) | icon | 4.5 ✗ | 2.5 (text) | 0 | 4.5 | 0 | 0 |
| Container (`6015:64817`) | container | 4.5 ✗ | 2.5 (text) | -0.01 | 4.5 | 0 | 0 |
| Background+Border (`6015:64818`) | instance | 4.5 ✗ | 2.5 (text) | -0.01 | 4.5 | 0 | 0 |
| Label (`I6015:64818;1067:2464`) | text | 4.5 ✗ | 2.5 (text) | -0.01 | 4.5 | 0 | 0 |
| Button (`6015:64819`) | icon | 4.5 ✗ | 2.5 (text) | -0.01 | 4.5 | 0 | 0 |
| nǐ hǎo ! (`6015:64799`) | text | 4 ✗ | 2.5 (text) | 0 | 4 | 0 | 0 |
| Container (`6015:64800`) | container | 4 ✗ | 2.5 (text) | 0 | 4 | 0 | 0 |
