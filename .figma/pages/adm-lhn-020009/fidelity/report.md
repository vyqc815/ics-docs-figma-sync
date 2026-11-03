# Fidelity: ADM-LHN-020009 — Bảng chia lịch hẹn / Đang kéo cụm thẻ

- URL: `http://localhost:3000/bang-chia-lich-hen/dang-keo-cum-the`
- Verdict: **FAIL**
- Pixels outside text: **0.126%** differ (limit 0.5%); all pixels: 0.328%; inside text boxes: 0.575% (glyph rendering)
- Boxes: 627/708 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 576, ≤1px: 590, ≤2px: 627, ≤4px: 638, >4px: 70

## Failures

- 81 elements are off by more than their limit (1px, 2.5px for text-driven; worst 35.98px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 624, 128, 272×64 | 770 | Mouse click (`2371:40002`, icon) |
| 704, 296, 32×24 | 140 | Status Độ ưu tiên (`2371:39929`, icon) |
| 496, 352, 8×152 | 88 | Frame 427321972 (`2371:38862`, container) |
| 496, 152, 8×104 | 87 | Cell (`2371:38819`, container) |
| 496, 536, 8×136 | 78 | Frame 427321972 (`2371:38862`, container) |
| 728, 736, 32×24 | 44 | Status Độ ưu tiên (`2371:39983`, icon) |
| 504, 128, 80×8 | 39 | Tabs (`2371:38806`, container) |
| 496, 720, 8×40 | 33 | Frame 427321974 (`2371:38891`, container) |
| 672, 296, 24×32 | 25 | Status lịch hẹn (`2371:39928`, icon) |
| 288, 432, 24×24 | 25 | Status Độ ưu tiên (`2371:39811`, icon) |
| 544, 184, 24×16 | 24 | Frame 427325261 (`2371:39904`, container) |
| 592, 800, 40×8 | 22 | Thời gian lịch hẹn (`2371:39987`, instance) |
| 496, 312, 8×24 | 16 | Frame 427321971 (`2371:38851`, container) |
| 680, 648, 48×24 | 12 | Avatar (`2371:39974`, instance) |
| 696, 736, 24×24 | 10 | Status lịch hẹn (`2371:39982`, icon) |
| 664, 368, 32×16 | 9 | Ellipse 76 (`I2371:39937;1991:15990`, image) |
| 648, 224, 24×8 | 7 | Ellipse 76 (`I2371:39918;1991:15992`, image) |
| 680, 224, 8×8 | 7 | Avatar (`2371:39920`, instance) |
| 680, 208, 16×8 | 6 | Avatar (`2371:39920`, instance) |
| 720, 232, 8×8 | 4 | Frame 427325250 (`2371:39914`, container) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Ngày mai (`I2371:38880;2200:30042`) | 3.5% |
| ID (`I2371:39791;2200:30227`) | 3% |
| ID (`I2371:39809;2200:30227`) | 3% |
| ID (`I2371:39827;2200:30227`) | 3% |
| ID (`I2371:39845;2200:30227`) | 3% |
| Nhiệm vụ con (`I2371:38812;2177:28936`) | 2.4% |
| Bảng chia lịch hẹn (`2371:39750`) | 2.4% |
| Ghi chú (`2371:38822`) | 2% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`2371:39825`) | 1.9% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`2371:39843`) | 1.9% |
| Count (`I2371:39956;2245:90745`) | 1.6% |
| 20% (`I4915:221361;4901:207510;1971:7433;1959:25431`) | 1.5% |
| Hẹn lớp chuẩn bị khai giảng (`2371:39942`) | 1.5% |
| Hôm qua (`I2371:39815;1877:9117`) | 1.4% |
| Hẹn lớp chuẩn bị khai giảng (`2371:39960`) | 1.4% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frame 427325260 (`2371:39911`) | container | 35.98 ✗ | 2.5 (text) | 0.09 | -19.97 | 35.98 | 20.25 |
| Frame 427325261 (`2371:39904`) | container | 22.7 ✗ | 2.5 (text) | 0 | -21.38 | 1.88 | 22.7 |
| Frame 427325238 (`2371:39905`) | container | 21.26 ✗ | 2.5 (text) | 0 | -19.91 | 0.94 | 21.26 |
| Frame 427325259 (`2371:39912`) | container | 19.65 ✗ | 2.5 (text) | 0.09 | -18.51 | 7.63 | 19.65 |
| Frame 427325260 (`2371:39930`) | container | 19.65 ✗ | 2.5 (text) | 0.08 | -18.5 | 7.63 | 19.65 |
| Frame 427325261 (`2371:39948`) | container | 19.65 ✗ | 2.5 (text) | 0.09 | -18.51 | 7.63 | 19.65 |
| Frame 427325262 (`2371:39966`) | container | 19.65 ✗ | 2.5 (text) | 0.09 | -18.5 | 7.63 | 19.65 |
| Frame 427325263 (`2371:39984`) | container | 19.65 ✗ | 2.5 (text) | 0.08 | -18.51 | 7.63 | 19.65 |
| Frame 427325250 (`2371:39914`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.79 | 17.97 |
| Frame 1171274962 (`2371:39923`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`2371:39924`) | text | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Frame 427325250 (`2371:39932`) | container | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.79 | 17.97 |
| Frame 1171274962 (`2371:39941`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`2371:39942`) | text | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Frame 427325250 (`2371:39950`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.79 | 17.97 |
| Frame 1171274962 (`2371:39959`) | container | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`2371:39960`) | text | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.67 | 17.97 |
| Frame 427325250 (`2371:39968`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.79 | 17.97 |
| Frame 1171274962 (`2371:39977`) | container | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`2371:39978`) | text | 17.97 ✗ | 2.5 (text) | 0.09 | -16.61 | 0.67 | 17.97 |
| Frame 427325250 (`2371:39986`) | container | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.79 | 17.97 |
| Frame 1171274962 (`2371:39995`) | container | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`2371:39996`) | text | 17.97 ✗ | 2.5 (text) | 0.08 | -16.62 | 0.67 | 17.97 |
| Frame 427325248 (`2371:39926`) | container | 17.96 ✗ | 2.5 (text) | 0.09 | -16.61 | 1.1 | 17.96 |
| Frame 427325248 (`2371:39944`) | container | 17.96 ✗ | 2.5 (text) | 0.08 | -16.61 | 1.1 | 17.96 |
