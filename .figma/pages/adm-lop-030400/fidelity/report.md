# Fidelity: ADM-LOP-030400 — Lớp học / Bài học / Tài nguyên

- URL: `http://localhost:3108/lop-hoc/bai-hoc/tai-nguyen`
- Verdict: **FAIL**
- Pixels outside text: **0.051%** differ (limit 0.5%); all pixels: 0.282%; inside text boxes: 1.173% (glyph rendering)
- Boxes: 367/379 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 358, ≤1px: 358, ≤2px: 358, ≤4px: 367, >4px: 12

## Failures

- 12 elements are off by more than their limit (1px, 2.5px for text-driven; worst 82px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 752, 840, 24×16 | 106 | Frame 427321972 (`4554:25797`, container) |
| 920, 840, 24×16 | 106 | Frame 427321972 (`4554:25797`, container) |
| 664, 840, 32×16 | 102 | Frame 427321972 (`4554:25797`, container) |
| 920, 864, 24×16 | 101 | Container (`4554:25782`, container) |
| 664, 864, 24×16 | 97 | Frame 427321972 (`4554:25797`, container) |
| 752, 864, 24×16 | 92 | Container (`4554:25792`, container) |
| 840, 840, 24×16 | 87 | Frame 427321972 (`4554:25797`, container) |
| 840, 864, 24×16 | 84 | Container (`4554:25787`, container) |
| 928, 896, 16×8 | 40 | Container (`4554:25779`, icon) |
| 760, 896, 16×8 | 36 | Container (`4554:25789`, icon) |
| 672, 896, 16×8 | 32 | Container (`4554:25794`, icon) |
| 840, 896, 16×8 | 30 | Container (`4554:25784`, icon) |
| 480, 96, 8×16 | 11 | ÔN TẬP: Giữa Kỳ 1 (`4558:30372`, text) |
| 568, 1128, 8×8 | 7 | Link 1: Từ điển Hán Việt (`4554:25816`, container) |
| 376, 320, 8×16 | 4 | Container (`I4554:25702;1062:1346`, container) |
| 696, 320, 8×16 | 4 | Background (`I4554:25703;1062:1347`, container) |
| 376, 416, 8×8 | 4 | Container (`I4554:25704;1062:1346`, container) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`I4915:224525;4901:206632`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| 100% (`I4554:24602;1308:6749`) | 24.7% |
| 100% (`I4554:24603;1308:6749`) | 24.7% |
| 100% (`I4554:24614;1308:6749`) | 24.7% |
| 100% (`I4554:24615;1308:6749`) | 24.7% |
| ID (`I4558:30370;2053:24633`) | 16.5% |
| ÔN TẬP: Giữa Kỳ 1 (`4558:30372`) | 13.1% |
| Từ điển Hán Việt trực tuyến (`4554:25823`) | 12.5% |
| Label (`I4915:224525;4901:206599;2245:87908`) | 8.4% |
| Label (`I4915:224525;4901:206597;2245:87908`) | 5.9% |
| Huong-dan-hoc-vien.mp4 (`I4554:25702;1062:1351`) | 5.1% |
| Huong-dan-hoc-vien.mp4 (`I4554:25703;1062:1351`) | 5.1% |
| Huong-dan-hoc-vien.mp4 (`I4554:25704;1062:1351`) | 5.1% |
| nǐ (`4554:25758`) | 3.6% |
| 07:40 (`4554:25755`) | 3.3% |
| 18:25 (`4554:25730`) | 3.1% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Container (`4554:25779`) | icon | 82 ✗ | 2.5 (text) | 0 | -82 | 0 | 0 |
| Container (`4554:25784`) | icon | 82 ✗ | 2.5 (text) | 0 | -82 | 0 | 0 |
| Container (`4554:25789`) | icon | 82 ✗ | 2.5 (text) | 0 | -82 | 0 | 0 |
| Container (`4554:25794`) | icon | 82 ✗ | 2.5 (text) | 0 | -82 | 0 | 0 |
| Container (`4554:25777`) | container | 76.63 ✗ | 2.5 (text) | -76.62 | -51 | 0 | 0 |
| Container (`4554:25782`) | container | 76.63 ✗ | 2.5 (text) | -76.63 | -51 | 0 | 0 |
| Container (`4554:25787`) | container | 76.63 ✗ | 2.5 (text) | -76.62 | -51 | 0 | 0 |
| Container (`4554:25792`) | container | 76.63 ✗ | 2.5 (text) | -76.63 | -51 | 0 | 0 |
| mā (`4554:25778`) | text | 27 ✗ | 2.5 (text) | -19 | -27 | 0 | 0 |
| má (`4554:25783`) | text | 27 ✗ | 2.5 (text) | -19 | -27 | 0 | 0 |
| mǎ (`4554:25788`) | text | 27 ✗ | 2.5 (text) | -19 | -27 | 0 | 0 |
| mà (`4554:25793`) | text | 27 ✗ | 2.5 (text) | -19 | -27 | 0 | 0 |
| Frame 1171274946 (`4558:30373`) | container | 2.38 | 2.5 (text) | 0 | 0 | 2.38 | 0 |
| ÔN TẬP: Giữa Kỳ 1 (`4558:30372`) | text | 2.38 | 2.5 (text) | 0 | 0 | 2.38 | 0 |
| Atom/ID Badge (`4558:30370`) | instance | 2.38 | 2.5 (text) | 2.38 | 0 | 0 | 0 |
| ID (`I4558:30370;2053:24633`) | text | 2.38 | 2.5 (text) | 2.38 | 0 | 0 | 0 |
| Container (`4554:25817`) | container | 2.34 | 2.5 (text) | 0 | 0 | 2.34 | 0 |
| Container (`4554:25821`) | container | 2.34 | 2.5 (text) | 0 | 0 | 2.34 | 0 |
| Heading 4 (`4554:25822`) | container | 2.34 | 2.5 (text) | 0 | 0 | 2.34 | 0 |
| Từ điển Hán Việt trực tuyến (`4554:25823`) | text | 2.34 | 2.5 (text) | 0 | 0 | 2.34 | 0 |
| Link (`4554:25824`) | container | 2.34 | 2.5 (text) | 0 | 0 | 2.34 | 0 |
| Video luyện nghe tiếng Trung (YouTube) (`4554:25835`) | text | 0.27 | 2.5 (text) | 0 | 0 | 0.27 | 0 |
| Tài liệu học tập (3) (`I4554:25700;2808:43055`) | text | 0.08 | 2.5 (text) | 0 | 0 | 0.08 | 0 |
| Container (`I4554:25702;1062:1357`) | container | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Cập nhật (`I4554:25702;1062:1358`) | text | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
