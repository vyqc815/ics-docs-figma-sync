# Fidelity: CD-KH-070320 — Thư viện / Bài tập / Kiểm tra mẫu

- URL: `http://localhost:3000/thu-vien/bai-tap/kiem-tra-mau`
- Verdict: **PASS**
- Pixels outside text: **0.003%** differ (limit 0.5%); all pixels: 0.049%; inside text boxes: 0.196% (glyph rendering)
- Boxes: 263/263 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 263, ≤1px: 263, ≤2px: 263, ≤4px: 263, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I5672:73741;5491:352399`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I5672:73741;5491:352405;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I5672:73741;5491:352419;2245:87904`, icon) |
| 120, 1064, 16×8 | 9 | Icon (`I5672:73741;5491:352423;2245:87904`, icon) |
| 24, 1120, 8×8 | 4 | LOGO CENTER (`I5672:73741;5491:352455`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I5672:73741;5491:352407;2245:87908`) | 7.8% |
| Label (`I5672:73402;2015:30513`) | 3.5% |
| Button (`I5672:73403;1430:10764`) | 3% |
| Label (`I5672:73741;5491:352409;2245:87908`) | 2.3% |
| Đắc Nhân (`I5672:73791;4019:24214`) | 1.6% |
| Label (`I5672:73741;5491:352424;2245:87908`) | 1.5% |
| Label (`I5672:73741;5491:352414;2245:87908`) | 1.4% |
| Value (`I5672:73400;2015:31180`) | 1.2% |
| Tiêu đề trang (`5672:73391`) | 0.9% |
| CD (`I5672:73790;2008:31885`) | 0.8% |
| Label (`I5672:73741;5491:352406;2245:87908`) | 0.7% |
| Label (`I5672:73741;5491:352425;2245:87914`) | 0.7% |
| 1 (`5672:73629`) | 0.6% |
| Label (`I5672:73741;5491:352418;2245:87908`) | 0.6% |
| Label (`I5672:73741;5491:352405;2245:87908`) | 0.5% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiêu đề (`5672:73390`) | container | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Ngân hàng câu hỏi dùng chung cho BTVN và Kiểm tra (`5672:73392`) | text | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| spacer (`5672:73393`) | container | 0.06 | 2.5 (text) | 0.06 | 0 | -0.06 | 0 |
| Subtract (`I5672:73741;5491:352350`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | 0 |
| Intersect (`I5672:73741;5491:352357`) | icon | 0.01 | 1 | 0 | -0.01 | -0.01 | 0 |
| Vector (`I5672:73741;5491:352370`) | icon | 0.01 | 1 | 0 | -0.01 | 0 | -0.01 |
| Vector (`I5672:73741;5491:352371`) | icon | 0.01 | 1 | 0.01 | 0 | 0 | -0.01 |
| Union (`I5672:73741;5491:352372`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | -0.01 |
| Group 240002 (`I5672:73741;5491:352375`) | icon | 0.01 | 1 | 0 | 0 | 0 | -0.01 |
| Content (`5672:73388`) | container | 0 | 1 | 0 | 0 | 0 | 0 |
| Tiêu đề & hành động (`5672:73389`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề trang (`5672:73391`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nav · Loại nội dung (`5672:73394`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · Ngân hàng câu hỏi (`5672:73395`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I5672:73395;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I5672:73395;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · BTVN mẫu (`5672:73396`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I5672:73396;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I5672:73396;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · Kiểm tra mẫu (`5672:73397`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I5672:73397;2177:28935`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhiệm vụ con (`I5672:73397;2177:28936`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Left accent vertical pill bar (`I5672:73397;2177:28937`) | shape | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Toolbar · Tìm kiếm & bộ lọc (`5672:73398`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tìm kiếm (`5672:73399`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
