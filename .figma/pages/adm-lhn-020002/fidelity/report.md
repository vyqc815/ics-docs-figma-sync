# Fidelity: ADM-LHN-020002 — Bảng chia lịch hẹn / Đang kéo thẻ

- URL: `http://localhost:3000/bang-chia-lich-hen/dang-keo-the`
- Verdict: **FAIL**
- Pixels outside text: **0.062%** differ (limit 0.5%); all pixels: 0.347%; inside text boxes: 0.827% (glyph rendering)
- Boxes: 715/730 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 697, ≤1px: 707, ≤2px: 715, ≤4px: 717, >4px: 13

## Failures

- 15 elements are off by more than their limit (1px, 2.5px for text-driven; worst 452px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 512, 184, 288×72 | 253 | Frame 427325249 (`2371:38398`, container) |
| 912, 184, 288×8 | 174 | Cell (`2371:37177`, container) |
| 992, 208, 216×112 | 142 | Frame 1171274957 (`2371:37199`, container) |
| 880, 216, 8×96 | 86 | Frame 1171274956 (`2371:37192`, container) |
| 664, 304, 24×16 | 30 | Status Độ ưu tiên (`2371:38411`, icon) |
| 288, 432, 24×24 | 25 | Status Độ ưu tiên (`2371:38221`, icon) |
| 608, 648, 8×8 | 4 | Ellipse 76 (`I2371:38346;1991:15992`, image) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Hôm qua (`I2371:38325;1877:9117`) | 5.6% |
| ID (`I2371:38319;2200:30227`) | 5.1% |
| ID (`I2371:38337;2200:30227`) | 5.1% |
| ID (`I2371:38355;2200:30227`) | 5.1% |
| Count (`I2371:38312;2245:90745`) | 4.2% |
| Count (`I2371:38330;2245:90745`) | 4.2% |
| Count (`I2371:38348;2245:90745`) | 4.2% |
| Ngày mai (`I2371:37232;2200:30042`) | 3.5% |
| Hôm nay (`I2371:38343;1877:9113`) | 3.4% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`2371:38317`) | 3.3% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`2371:38335`) | 3.3% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`2371:38353`) | 3.3% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`2371:37235`) | 3% |
| ID (`I2371:38201;2200:30227`) | 3% |
| ID (`I2371:38219;2200:30227`) | 3% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frame 427325252 (`2371:38303`) | container | 452 ✗ | 2.5 (text) | 0 | 0 | 452 | -0.01 |
| Frame 427325251 (`2371:38395`) | container | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 6.47 | 17.79 |
| Frame 427325250 (`2371:38396`) | container | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 0.79 | 17.97 |
| Frame 1171274963 (`2371:38404`) | container | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 2.99 | 17.9 |
| Frame 1171274962 (`2371:38405`) | container | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`2371:38406`) | text | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 0.67 | 17.97 |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`2371:38407`) | text | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 1.77 | 17.94 |
| Frame 427325248 (`2371:38408`) | container | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 1.1 | 17.96 |
| Frame 427325249 (`2371:38398`) | container | 12.8 ✗ | 2.5 (text) | 0 | -12.8 | 1.3 | 12.75 |
| Huỳnh Thơ và 3 người khác (`2371:38403`) | text | 9.87 ✗ | 2.5 (text) | 0 | -9.87 | 1.33 | 9.82 |
| Atom/ID Badge (`2371:38409`) | instance | 5.56 ✗ | 2.5 (text) | 0 | -5.56 | 1.48 | 5.51 |
| Thời gian lịch hẹn (`2371:38397`) | instance | 4.17 ✗ | 2.5 (text) | 0 | -4.17 | 1.22 | 4.11 |
| ID (`I2371:38409;2200:30227`) | text | 4.1 ✗ | 2.5 (text) | 0 | -4.1 | 1.03 | 4.05 |
| Hôm nay (`I2371:38397;1877:9113`) | text | 3.18 ✗ | 2.5 (text) | 0 | -3.18 | 1 | 3.14 |
| Frame 1171274956 (`2371:38399`) | container | 2.7 ✗ | 2.5 (text) | 0 | -2.7 | 1.14 | 2.65 |
| Status lịch hẹn (`2371:38410`) | icon | 1.49 | 2.5 (text) | -0.04 | -0.8 | 1.49 | 1.49 |
| Status Độ ưu tiên (`2371:38411`) | icon | 1.49 | 2.5 (text) | 1.36 | -0.88 | 1.49 | 1.49 |
| Mouse click (`2371:38412`) | icon | 1.37 | 2.5 (text) | -0.02 | -1.37 | 1.29 | 1.29 |
| Avatar (`2371:38402`) | instance | 1.24 | 2.5 (text) | 0 | -1.24 | 1.18 | 1.18 |
| Avatar (`2371:38400`) | instance | 1.23 | 2.5 (text) | 0 | -1.23 | 1.18 | 1.18 |
| Ellipse 76 (`I2371:38400;1991:15992`) | image | 1.23 | 2.5 (text) | 0 | -1.23 | 1.18 | 1.18 |
| Avatar (`2371:38401`) | instance | 1.23 | 2.5 (text) | 0 | -1.23 | 1.18 | 1.18 |
| Ellipse 76 (`I2371:38401;1991:15990`) | image | 1.23 | 2.5 (text) | 0 | -1.23 | 1.18 | 1.18 |
| Count (`I2371:38402;2245:90745`) | text | 0.83 | 2.5 (text) | 0 | -0.75 | 0.83 | 0.71 |
| Frame 427321947 (`2371:37146`) | container | 0.73 | 2.5 (text) | 0 | 0 | -0.73 | 0 |
