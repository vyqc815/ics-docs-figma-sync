# Fidelity: ADM-LHN-020009-DK — Bảng chia lịch hẹn / Đang kéo cụm thẻ

- URL: `http://localhost:3000/bang-chia-lich-hen/dang-keo-cum-the-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.061%** differ (limit 0.5%); all pixels: 0.238%; inside text boxes: 0.522% (glyph rendering)
- Boxes: 536/617 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 485, ≤1px: 499, ≤2px: 536, ≤4px: 547, >4px: 70

## Failures

- 81 elements are off by more than their limit (1px, 2.5px for text-driven; worst 35.98px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 624, 128, 256×40 | 290 | Mouse click (`4056:108198`, icon) |
| 704, 296, 32×24 | 136 | Status Độ ưu tiên (`4056:108125`, icon) |
| 496, 360, 8×136 | 61 | Frame 427321972 (`4056:107880`, container) |
| 496, 536, 8×136 | 55 | Frame 427321972 (`4056:107880`, container) |
| 736, 736, 16×24 | 49 | Status Độ ưu tiên (`4056:108179`, icon) |
| 504, 128, 80×8 | 27 | Tabs (`4056:107823`, container) |
| 496, 312, 8×24 | 13 | Frame 427321971 (`4056:107867`, container) |
| 496, 224, 8×32 | 12 | Frame 1171274927 (`4056:107850`, container) |
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
| Bảng chia lịch hẹn (`4056:107951`) | 3.5% |
| Ngày mai (`I4056:107900;2200:30042`) | 3.1% |
| Hẹn lớp chuẩn bị khai giảng (`4056:108138`) | 2.1% |
| Hẹn lớp chuẩn bị khai giảng (`4056:108174`) | 2.1% |
| Hẹn lớp chuẩn bị khai giảng (`4056:108156`) | 2% |
| Value (`I4056:107953;2015:36008`) | 1.8% |
| Hẹn lớp chuẩn bị khai giảng (`4056:108120`) | 1.8% |
| Nhiệm vụ con (`I4056:107827;2177:28936`) | 1.7% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:108024`) | 1.7% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:108042`) | 1.7% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:107903`) | 1.5% |
| Value (`I4056:107754;1981:25760;1971:8814`) | 1.3% |
| - Gửi giới thiệu bạn với học viên (lưu ý các học viên đang c (`4056:107885`) | 1.1% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:107988`) | 0.9% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:108006`) | 0.9% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frame 427325260 (`4056:108107`) | container | 35.98 ✗ | 2.5 (text) | 0.09 | -19.97 | 35.98 | 20.25 |
| Frame 427325261 (`4056:108100`) | container | 22.7 ✗ | 2.5 (text) | 0 | -21.38 | 1.88 | 22.7 |
| Frame 427325238 (`4056:108101`) | container | 21.26 ✗ | 2.5 (text) | 0 | -19.91 | 0.94 | 21.26 |
| Frame 427325259 (`4056:108108`) | container | 19.65 ✗ | 2.5 (text) | 0.09 | -18.51 | 7.63 | 19.65 |
| Frame 427325260 (`4056:108126`) | container | 19.65 ✗ | 2.5 (text) | 0.08 | -18.5 | 7.63 | 19.65 |
| Frame 427325261 (`4056:108144`) | container | 19.65 ✗ | 2.5 (text) | 0.09 | -18.51 | 7.63 | 19.65 |
| Frame 427325262 (`4056:108162`) | container | 19.65 ✗ | 2.5 (text) | 0.08 | -18.5 | 7.63 | 19.65 |
| Frame 427325263 (`4056:108180`) | container | 19.65 ✗ | 2.5 (text) | 0.08 | -18.51 | 7.63 | 19.65 |
| Frame 427325250 (`4056:108110`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.79 | 17.97 |
| Frame 1171274962 (`4056:108119`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`4056:108120`) | text | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Frame 427325250 (`4056:108128`) | container | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.79 | 17.97 |
| Frame 1171274962 (`4056:108137`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`4056:108138`) | text | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Frame 427325250 (`4056:108146`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.79 | 17.97 |
| Frame 1171274962 (`4056:108155`) | container | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`4056:108156`) | text | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.67 | 17.97 |
| Frame 427325250 (`4056:108164`) | container | 17.97 ✗ | 2.5 (text) | 0.08 | -16.61 | 0.79 | 17.97 |
| Frame 1171274962 (`4056:108173`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`4056:108174`) | text | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Frame 427325250 (`4056:108182`) | container | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.79 | 17.97 |
| Frame 1171274962 (`4056:108191`) | container | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`4056:108192`) | text | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.67 | 17.97 |
| Frame 427325248 (`4056:108122`) | container | 17.96 ✗ | 2.5 (text) | 0.09 | -16.61 | 1.1 | 17.96 |
| Frame 427325248 (`4056:108140`) | container | 17.96 ✗ | 2.5 (text) | 0.08 | -16.61 | 1.1 | 17.96 |
