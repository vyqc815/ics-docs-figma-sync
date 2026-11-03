# Fidelity: CD-KH-020201 — Lộ trình / Cuộn ngang tới cột cuối

- URL: `http://localhost:3000/lo-trinh/cuon-ngang-toi-cot-cuoi`
- Verdict: **PASS**
- Pixels outside text: **0.005%** differ (limit 0.5%); all pixels: 0.199%; inside text boxes: 1.679% (glyph rendering)
- Boxes: 1133/1133 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 1130, ≤1px: 1130, ≤2px: 1133, ≤4px: 1133, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 712, 728, 16×24 | 19 | Data (`6518:337581`, icon) |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I6518:338197;4901:221031`, icon) |
| 1136, 1104, 16×32 | 15 | Data (`6518:337872`, icon) |
| 712, 1168, 16×16 | 15 | Data (`6518:337910`, icon) |
| 856, 688, 16×8 | 9 | Data (`6518:337537`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I6518:338197;4901:221049;2245:87904`, icon) |
| 120, 1064, 16×8 | 9 | Icon (`I6518:338197;5491:349906;2245:87904`, icon) |
| 24, 1384, 8×8 | 4 | LOGO CENTER (`I6518:338197;4901:221081`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Tìm nội dung... (`I6518:337362;3004:75121`) | 10.6% |
| Label (`I6518:338197;4901:221039;2245:87908`) | 7.8% |
| Số buổi 06/12 (`6518:337244`) | 7.2% |
| Số buổi 05/10 (`6518:337237`) | 6.8% |
| Chào hỏi (`6518:337313`) | 6.6% |
| Số buổi 04/08 (`6518:337251`) | 6.5% |
| [ 45 phút ] (`6518:337238`) | 6.3% |
| [ 50 phút ] (`6518:337245`) | 6.3% |
| [ 40 phút ] (`6518:337252`) | 6% |
| Thanh mẫu cơ bản (`6518:337554`) | 5.9% |
| Nghe: đường đến trường (`6518:337977`) | 5.9% |
| Thanh mẫu nâng cao (`6518:337648`) | 5.7% |
| Quốc gia, ngôn ngữ (`6518:337930`) | 5.7% |
| NGHE HIỂU (`6518:337240`) | 5.6% |
| VIẾT (`6518:337254`) | 5.6% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TỔNG ÔN TẬP (`6518:337219`) | text | 1.72 | 2.5 (text) | -0.86 | 0 | 1.72 | 0 |
| Tìm nội dung... (`I6518:337362;3004:75121`) | text | 1.5 | 2.5 (text) | 0 | 1.5 | 0 | 0 |
| Tìm nội dung... (`I6518:337413;3004:75121`) | text | 1.5 | 2.5 (text) | 0 | 1.5 | 0 | 0 |
| Container (`6518:337456`) | container | 0.5 | 2.5 (text) | 0 | 0 | 0.5 | 0 |
| Container (`6518:337457`) | container | 0.5 | 2.5 (text) | 0 | 0 | 0.5 | 0 |
| Container (`6518:337459`) | container | 0.5 | 2.5 (text) | 0 | 0 | 0.5 | 0 |
| Vận mẫu kép (`6518:337460`) | text | 0.5 | 2.5 (text) | 0 | 0 | 0.5 | 0 |
| Container (`6518:337973`) | container | 0.42 | 2.5 (text) | 0 | 0 | 0.42 | 0 |
| Container (`6518:337974`) | container | 0.42 | 2.5 (text) | 0 | 0 | 0.42 | 0 |
| Container (`6518:337976`) | container | 0.42 | 2.5 (text) | 0 | 0 | 0.42 | 0 |
| Nghe: đường đến trường (`6518:337977`) | text | 0.42 | 2.5 (text) | 0 | 0 | 0.42 | 0 |
| Trạng thái số buổi (`6518:337199`) | instance | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Container (`I6518:337199;2808:53211`) | container | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Container (`I6518:337199;2808:53213`) | container | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Chưa đủ buổi (`I6518:337199;2808:53214`) | text | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Trạng thái số buổi (`6518:337206`) | instance | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Container (`I6518:337206;2808:53211`) | container | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Container (`I6518:337206;2808:53213`) | container | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Chưa đủ buổi (`I6518:337206;2808:53214`) | text | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Trạng thái số buổi (`6518:337220`) | instance | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Container (`I6518:337220;2808:53211`) | container | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Container (`I6518:337220;2808:53213`) | container | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Chưa đủ buổi (`I6518:337220;2808:53214`) | text | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Trạng thái số buổi (`6518:337227`) | instance | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
| Container (`I6518:337227;2808:53211`) | container | 0.16 | 2.5 (text) | -0.08 | 0 | 0.16 | 0 |
