# Fidelity: ADM-LHN-020002-DK — Bảng chia lịch hẹn / Đang kéo thẻ

- URL: `http://localhost:3000/bang-chia-lich-hen/dang-keo-the-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.005%** differ (limit 0.5%); all pixels: 0.225%; inside text boxes: 0.661% (glyph rendering)
- Boxes: 624/639 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 606, ≤1px: 616, ≤2px: 624, ≤4px: 626, >4px: 13

## Failures

- 15 elements are off by more than their limit (1px, 2.5px for text-driven; worst 452px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 664, 296, 24×24 | 42 | Status Độ ưu tiên (`4056:107663`, icon) |
| 288, 440, 16×16 | 8 | Status Độ ưu tiên (`4056:107473`, icon) |
| 680, 232, 16×8 | 4 | Frame 427325250 (`4056:107648`, container) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Bảng chia lịch hẹn (`4056:107414`) | 3.5% |
| Ngày mai (`I4056:107363;2200:30042`) | 3.1% |
| Count (`I4056:107564;2245:90745`) | 2.9% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:107569`) | 2.9% |
| Count (`I4056:107582;2245:90745`) | 2.9% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:107587`) | 2.9% |
| Count (`I4056:107600;2245:90745`) | 2.9% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:107605`) | 2.9% |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:107366`) | 2.7% |
| Hôm qua (`I4056:107577;1877:9117`) | 2% |
| Value (`I4056:107416;2015:36008`) | 1.8% |
| Ngày mai (`I4056:107559;1877:9115`) | 1.8% |
| Huỳnh Thơ và 3 người khác (`4056:107565`) | 1.8% |
| Huỳnh Thơ và 3 người khác (`4056:107583`) | 1.8% |
| Huỳnh Thơ và 3 người khác (`4056:107601`) | 1.8% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frame 427325252 (`4056:107555`) | container | 452 ✗ | 2.5 (text) | 0 | 0 | 452 | -0.01 |
| Frame 427325251 (`4056:107647`) | container | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 6.47 | 17.79 |
| Frame 427325250 (`4056:107648`) | container | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 0.79 | 17.97 |
| Frame 1171274963 (`4056:107656`) | container | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 2.99 | 17.9 |
| Frame 1171274962 (`4056:107657`) | container | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 0.67 | 17.97 |
| Hẹn lớp chuẩn bị khai giảng (`4056:107658`) | text | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 0.67 | 17.97 |
| Giới thiệu về lớp học, bài học, và cách làm bài tập về nhà (`4056:107659`) | text | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 1.77 | 17.94 |
| Frame 427325248 (`4056:107660`) | container | 18.02 ✗ | 2.5 (text) | 0 | -18.02 | 1.1 | 17.96 |
| Frame 427325249 (`4056:107650`) | container | 12.8 ✗ | 2.5 (text) | 0 | -12.8 | 1.3 | 12.75 |
| Huỳnh Thơ và 3 người khác (`4056:107655`) | text | 9.87 ✗ | 2.5 (text) | 0 | -9.87 | 1.33 | 9.82 |
| Atom/ID Badge (`4056:107661`) | instance | 5.56 ✗ | 2.5 (text) | 0 | -5.56 | 1.48 | 5.51 |
| Thời gian lịch hẹn (`4056:107649`) | instance | 4.17 ✗ | 2.5 (text) | 0 | -4.17 | 1.22 | 4.11 |
| ID (`I4056:107661;2200:30227`) | text | 4.1 ✗ | 2.5 (text) | 0 | -4.1 | 1.03 | 4.05 |
| Hôm nay (`I4056:107649;1877:9113`) | text | 3.18 ✗ | 2.5 (text) | 0 | -3.18 | 1 | 3.14 |
| Frame 1171274956 (`4056:107651`) | container | 2.7 ✗ | 2.5 (text) | 0 | -2.7 | 1.14 | 2.65 |
| Status lịch hẹn (`4056:107662`) | icon | 1.49 | 2.5 (text) | -0.04 | -0.8 | 1.49 | 1.49 |
| Status Độ ưu tiên (`4056:107663`) | icon | 1.49 | 2.5 (text) | 1.36 | -0.88 | 1.49 | 1.49 |
| Mouse click (`4056:107664`) | icon | 1.37 | 2.5 (text) | -0.02 | -1.37 | 1.29 | 1.29 |
| Avatar (`4056:107654`) | instance | 1.24 | 2.5 (text) | 0 | -1.24 | 1.18 | 1.18 |
| Avatar (`4056:107652`) | instance | 1.23 | 2.5 (text) | 0 | -1.23 | 1.18 | 1.18 |
| Ellipse 76 (`I4056:107652;1991:15992`) | image | 1.23 | 2.5 (text) | 0 | -1.23 | 1.18 | 1.18 |
| Avatar (`4056:107653`) | instance | 1.23 | 2.5 (text) | 0 | -1.23 | 1.18 | 1.18 |
| Ellipse 76 (`I4056:107653;1991:15990`) | image | 1.23 | 2.5 (text) | 0 | -1.23 | 1.18 | 1.18 |
| Count (`I4056:107654;2245:90745`) | text | 0.83 | 2.5 (text) | 0 | -0.75 | 0.83 | 0.71 |
| Frame 427321947 (`4056:107274`) | container | 0.73 | 2.5 (text) | 0 | 0 | -0.73 | 0 |
