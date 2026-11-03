# Fidelity: CD-KH-070220 — Thư viện / Kỹ năng / Viết

- URL: `http://localhost:3000/thu-vien/ky-nang/viet`
- Verdict: **PASS**
- Pixels outside text: **0.003%** differ (limit 0.5%); all pixels: 0.058%; inside text boxes: 0.341% (glyph rendering)
- Boxes: 323/323 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 322, ≤1px: 323, ≤2px: 323, ≤4px: 323, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I5672:70044;5491:352093`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I5672:70044;5491:352099;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I5672:70044;5491:352113;2245:87904`, icon) |
| 120, 1064, 16×8 | 9 | Icon (`I5672:70044;5491:352117;2245:87904`, icon) |
| 24, 1096, 8×8 | 4 | LOGO CENTER (`I5672:70044;5491:352149`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I5672:70044;5491:352101;2245:87908`) | 7.8% |
| Label (`I5672:69732;2015:30513`) | 3.3% |
| Button (`I5672:69733;1430:10764`) | 3% |
| Label (`I5672:70044;5491:352103;2245:87908`) | 2.3% |
| Đắc Nhân (`I5672:70094;4019:24214`) | 1.6% |
| Label (`I5672:70044;5491:352108;2245:87908`) | 1.4% |
| Label (`I5672:70044;5491:352119;2245:87908`) | 1.4% |
| Value (`I5672:69730;2015:31180`) | 1.2% |
| 天气日记 (`5672:70844`) | 1.2% |
| 我的一天 (`5672:70787`) | 0.9% |
| CD (`I5672:70093;2008:31885`) | 0.8% |
| Tiêu đề trang (`5672:69720`) | 0.7% |
| 给朋友的信 (`5672:70806`) | 0.7% |
| Label (`I5672:70044;5491:352100;2245:87908`) | 0.7% |
| 自我介绍 (`5672:70749`) | 0.6% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiêu đề trang (`5672:69720`) | text | 0.53 | 2.5 (text) | 0 | 0 | 0.53 | 0 |
| — chưa có đề bài — (`5672:70809`) | text | 0.25 | 2.5 (text) | 0 | 0 | 0.25 | 0 |
| Subtract (`I5672:70044;5491:352044`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | 0 |
| Intersect (`I5672:70044;5491:352051`) | icon | 0.01 | 1 | 0 | -0.01 | -0.01 | 0 |
| Vector (`I5672:70044;5491:352064`) | icon | 0.01 | 1 | 0 | -0.01 | 0 | -0.01 |
| Vector (`I5672:70044;5491:352065`) | icon | 0.01 | 1 | 0.01 | 0 | 0 | -0.01 |
| Union (`I5672:70044;5491:352066`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | -0.01 |
| Group 240002 (`I5672:70044;5491:352069`) | icon | 0.01 | 1 | 0 | 0 | 0 | -0.01 |
| Content (`5672:69717`) | container | 0 | 1 | 0 | 0 | 0 | 0 |
| Tiêu đề & hành động (`5672:69718`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`5672:69719`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Kho bài nghe, đọc, viết, nói dùng chung (`5672:69721`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| spacer (`5672:69722`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nav · Kỹ năng (`5672:69723`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · Nghe (`5672:69724`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I5672:69724;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I5672:69724;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · Đọc (`5672:69725`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I5672:69725;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I5672:69725;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · Viết (`5672:69726`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I5672:69726;2177:28935`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhiệm vụ con (`I5672:69726;2177:28936`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Left accent vertical pill bar (`I5672:69726;2177:28937`) | shape | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · Nói (`5672:69727`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
