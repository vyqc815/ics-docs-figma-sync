# Fidelity: ADM-LHN-020009 — Bảng chia lịch hẹn / Đang kéo cụm thẻ

- URL: `http://localhost:3000/bang-chia-lich-hen/dang-keo-cum-the`
- Verdict: **FAIL**
- Pixels outside text: **0.975%** differ (limit 0.5%); all pixels: 1.415%; inside text boxes: 1.254% (glyph rendering)
- Boxes: 610/708 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 559, ≤1px: 573, ≤2px: 610, ≤4px: 621, >4px: 87

## Failures

- 0.975% of non-text pixels differ (limit 0.5%).
- 1 text boxes differ in more than 35% of their pixels (check font, weight, color).
- 98 elements are off by more than their limit (1px, 2.5px for text-driven; worst 428px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 1312, 152, 128×96 | 7795 | Trạng thái (`2371:38830`, text) |
| 880, 128, 400×64 | 1270 | Frame 427325238 (`2371:39887`, container) |
| 624, 128, 272×64 | 808 | Mouse click (`2371:40002`, icon) |
| 1040, 208, 240×576 | 407 | Frame 427321972 (`2371:38862`, container) |
| 904, 240, 304×8 | 269 | Frame 427325266 (`2371:39885`, container) |
| 704, 296, 32×24 | 140 | Status Độ ưu tiên (`2371:39929`, icon) |
| 496, 536, 8×136 | 121 | Frame 427321972 (`2371:38862`, container) |
| 496, 352, 8×152 | 88 | Frame 427321972 (`2371:38862`, container) |
| 496, 152, 8×104 | 75 | Cell (`2371:38819`, container) |
| 728, 736, 32×24 | 44 | Status Độ ưu tiên (`2371:39983`, icon) |
| 504, 128, 80×8 | 39 | Tabs (`2371:38806`, container) |
| 496, 720, 8×40 | 34 | Frame 427321974 (`2371:38891`, container) |
| 920, 776, 56×8 | 33 | Frame 1171274957 (`2371:38902`, container) |
| 672, 296, 24×32 | 25 | Status lịch hẹn (`2371:39928`, icon) |
| 288, 432, 24×24 | 25 | Status Độ ưu tiên (`2371:39811`, icon) |
| 544, 184, 24×16 | 24 | Frame 427325261 (`2371:39904`, container) |
| 1216, 208, 8×24 | 22 | Frame 427321948 (`2371:38816`, container) |
| 592, 800, 40×8 | 22 | Thời gian lịch hẹn (`2371:39987`, instance) |
| 1272, 152, 16×40 | 20 | Frame 427321948 (`2371:38816`, container) |
| 496, 312, 8×24 | 16 | Frame 427321971 (`2371:38851`, container) |
| 904, 200, 16×16 | 15 | Union (`2371:39896`, icon) |
| 680, 648, 48×24 | 12 | Avatar (`2371:39974`, instance) |
| 696, 736, 24×24 | 10 | Status lịch hẹn (`2371:39982`, icon) |
| 664, 368, 32×16 | 9 | Ellipse 76 (`I2371:39937;1991:15990`, image) |
| 648, 224, 24×8 | 7 | Ellipse 76 (`I2371:39918;1991:15992`, image) |
| 680, 224, 8×8 | 7 | Avatar (`2371:39920`, instance) |
| 680, 208, 16×8 | 6 | Avatar (`2371:39920`, instance) |
| 552, 776, 8×8 | 6 | Frame 427321974 (`2371:38891`, container) |
| 720, 232, 8×8 | 4 | Frame 427325250 (`2371:39914`, container) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Trạng thái (`2371:38830`) | 57.3% |
| Ví Dụ: Thứ 3 (`2371:39888`) | 15.3% |
| Kéo thả thẻ (`2371:39897`) | 10.8% |
| Placeholder (`I2702:48132;5056:365853`) | 6.4% |
| Ngày mai (`I2371:38880;2200:30042`) | 3.5% |
| Đối tượng (`2371:38826`) | 3.4% |
| ID (`I2371:39791;2200:30227`) | 3% |
| ID (`I2371:39809;2200:30227`) | 3% |
| ID (`I2371:39827;2200:30227`) | 3% |
| ID (`I2371:39845;2200:30227`) | 3% |
| ID (`I2371:38903;2200:30227`) | 2.8% |
| Nhiệm vụ con (`I2371:38812;2177:28936`) | 2.5% |
| Bảng chia lịch hẹn (`2371:39750`) | 2.4% |
| Ghi chú (`2371:38822`) | 2% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`2371:39825`) | 1.9% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frame 427325252 (`2371:39884`) | container | 428 ✗ | 2.5 (text) | 0 | 0 | 428 | 0 |
| Frame 427325266 (`2371:39885`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325261 (`2371:39886`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325238 (`2371:39887`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Ví Dụ: Thứ 3 (`2371:39888`) | text | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325260 (`2425:104458`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| COLOR (`2425:104459`) | icon | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325258 (`2425:104460`) | icon | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325260 (`2371:39893`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325252 (`2371:39894`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325272 (`2371:39895`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Union (`2371:39896`) | icon | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Kéo thả thẻ (`2371:39897`) | text | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Hiểu thị lúc kéo (`2371:39898`) | container | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Add New Bar · Nhập tiêu đề mục mới (`2702:48132`) | instance | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Placeholder (`I2702:48132;5056:365853`) | text | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Action Button (`I2702:48132;5056:365854`) | icon | 428 ✗ | 2.5 (text) | 428 | 0 | 0 | 0 |
| Frame 427325260 (`2371:39911`) | container | 35.98 ✗ | 2.5 (text) | 0.09 | -19.97 | 35.98 | 20.25 |
| Frame 427325261 (`2371:39904`) | container | 22.7 ✗ | 2.5 (text) | 0 | -21.38 | 1.88 | 22.7 |
| Frame 427325238 (`2371:39905`) | container | 21.26 ✗ | 2.5 (text) | 0 | -19.91 | 0.94 | 21.26 |
| Frame 427325259 (`2371:39912`) | container | 19.65 ✗ | 2.5 (text) | 0.09 | -18.51 | 7.63 | 19.65 |
| Frame 427325260 (`2371:39930`) | container | 19.65 ✗ | 2.5 (text) | 0.08 | -18.5 | 7.63 | 19.65 |
| Frame 427325261 (`2371:39948`) | container | 19.65 ✗ | 2.5 (text) | 0.09 | -18.51 | 7.63 | 19.65 |
| Frame 427325262 (`2371:39966`) | container | 19.65 ✗ | 2.5 (text) | 0.09 | -18.5 | 7.63 | 19.65 |
| Frame 427325263 (`2371:39984`) | container | 19.65 ✗ | 2.5 (text) | 0.08 | -18.51 | 7.63 | 19.65 |
