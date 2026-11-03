# Fidelity: ADM-LHN-020009-DK — Bảng chia lịch hẹn / Đang kéo cụm thẻ

- URL: `http://localhost:3000/bang-chia-lich-hen/dang-keo-cum-the-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.176%** differ (limit 0.5%); all pixels: 0.439%; inside text boxes: 0.776% (glyph rendering)
- Boxes: 519/617 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 468, ≤1px: 482, ≤2px: 519, ≤4px: 530, >4px: 87

## Failures

- 98 elements are off by more than their limit (1px, 2.5px for text-driven; worst 428px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 888, 128, 392×64 | 1171 | Frame 427325238 (`4056:108086`, container) |
| 624, 128, 256×40 | 282 | Mouse click (`4056:108198`, icon) |
| 1048, 208, 232×576 | 160 | Frame 427321972 (`4056:107880`, container) |
| 704, 296, 32×24 | 136 | Status Độ ưu tiên (`4056:108125`, icon) |
| 496, 360, 8×136 | 61 | Frame 427321972 (`4056:107880`, container) |
| 736, 736, 16×24 | 49 | Status Độ ưu tiên (`4056:108179`, icon) |
| 904, 200, 16×16 | 28 | Union (`4056:108095`, icon) |
| 504, 128, 80×8 | 27 | Tabs (`4056:107823`, container) |
| 496, 200, 8×56 | 23 | Frame 427321961 (`4056:107848`, container) |
| 496, 312, 8×24 | 13 | Frame 427321971 (`4056:107867`, container) |
| 920, 776, 56×8 | 11 | Frame 1171274957 (`4056:107923`, container) |
| 1272, 152, 16×40 | 10 | Frame 427321948 (`4056:107831`, container) |
| 496, 536, 8×40 | 9 | Frame 427321972 (`4056:107880`, container) |
| 688, 648, 16×24 | 9 | Ellipse 76 (`I4056:108169;1991:15990`, image) |
| 288, 440, 16×16 | 8 | Status Độ ưu tiên (`4056:108010`, icon) |
| 704, 744, 16×16 | 8 | Status lịch hẹn (`4056:108178`, icon) |
| 672, 296, 16×24 | 7 | Status lịch hẹn (`4056:108124`, icon) |
| 720, 232, 8×8 | 5 | Frame 427325250 (`4056:108110`, container) |
| 736, 232, 24×8 | 4 | Frame 427325250 (`4056:108110`, container) |
| 672, 368, 8×16 | 4 | Ellipse 76 (`I4056:108133;1991:15990`, image) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Kéo thả thẻ (`4056:108096`) | 21.2% |
| Ví Dụ: Thứ 3 (`4056:108087`) | 15.3% |
| Đối tượng (`4056:107841`) | 6.4% |
| Bảng chia lịch hẹn (`4056:107951`) | 3.5% |
| Ngày mai (`I4056:107900;2200:30042`) | 3.1% |
| Người phụ trách (`4056:107839`) | 2.2% |
| Hẹn lớp chuẩn bị khai giảng (`4056:108138`) | 2.1% |
| Hẹn lớp chuẩn bị khai giảng (`4056:108174`) | 2.1% |
| Hẹn lớp chuẩn bị khai giảng (`4056:108156`) | 2% |
| Placeholder (`I4056:108098;5056:365853`) | 1.9% |
| Value (`I4056:107953;2015:36008`) | 1.8% |
| Hẹn lớp chuẩn bị khai giảng (`4056:108120`) | 1.8% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:108024`) | 1.7% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:108042`) | 1.7% |
| Nhiệm vụ con (`I4056:107827;2177:28936`) | 1.5% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frame 427325252 (`4056:108083`) | container | 428 ✗ | 2.5 (text) | 0 | 0 | 428 | 0 |
| Frame 427325266 (`4056:108084`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325261 (`4056:108085`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325238 (`4056:108086`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Ví Dụ: Thứ 3 (`4056:108087`) | text | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325260 (`4056:108088`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| COLOR (`4056:108089`) | icon | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325258 (`4056:108090`) | icon | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325260 (`4056:108092`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325252 (`4056:108093`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325272 (`4056:108094`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Union (`4056:108095`) | icon | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Kéo thả thẻ (`4056:108096`) | text | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Hiểu thị lúc kéo (`4056:108097`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Add New Bar · Nhập tiêu đề mục mới (`4056:108098`) | instance | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Placeholder (`I4056:108098;5056:365853`) | text | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Action Button (`I4056:108098;5056:365854`) | icon | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325260 (`4056:108107`) | container | 35.98 ✗ | 2.5 (text) | 0.09 | -19.97 | 35.98 | 20.25 |
| Frame 427325261 (`4056:108100`) | container | 22.7 ✗ | 2.5 (text) | 0 | -21.38 | 1.88 | 22.7 |
| Frame 427325238 (`4056:108101`) | container | 21.26 ✗ | 2.5 (text) | 0 | -19.91 | 0.94 | 21.26 |
| Frame 427325259 (`4056:108108`) | container | 19.65 ✗ | 2.5 (text) | 0.09 | -18.51 | 7.63 | 19.65 |
| Frame 427325260 (`4056:108126`) | container | 19.65 ✗ | 2.5 (text) | 0.08 | -18.5 | 7.63 | 19.65 |
| Frame 427325261 (`4056:108144`) | container | 19.65 ✗ | 2.5 (text) | 0.09 | -18.51 | 7.63 | 19.65 |
| Frame 427325262 (`4056:108162`) | container | 19.65 ✗ | 2.5 (text) | 0.08 | -18.5 | 7.63 | 19.65 |
| Frame 427325263 (`4056:108180`) | container | 19.65 ✗ | 2.5 (text) | 0.08 | -18.51 | 7.63 | 19.65 |
