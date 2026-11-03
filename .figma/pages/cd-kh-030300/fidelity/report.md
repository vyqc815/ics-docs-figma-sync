# Fidelity: CD-KH-030300 — Học kỳ / Kiểm tra

- URL: `http://localhost:3000/hoc-ky/kiem-tra`
- Verdict: **PASS**
- Pixels outside text: **0.003%** differ (limit 0.5%); all pixels: 0.077%; inside text boxes: 0.733% (glyph rendering)
- Boxes: 222/222 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 222, ≤1px: 222, ≤2px: 222, ≤4px: 222, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I4915:255361;4901:220681`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I4915:255361;4901:220687;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I4915:255361;4901:220699;2245:87904`, icon) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`I4915:255361;4901:220731`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I4915:255361;4901:220689;2245:87908`) | 7.8% |
| Kiểm tra giữa kỳ 3 HSK1 (`497:18296`) | 4.2% |
| Kiểm tra cuối kỳ 3 HSK1 (`497:18319`) | 3.2% |
| Label (`I6006:130496;2015:31836;6006:130498;2015:30575`) | 2.6% |
| Label (`I4915:255361;5491:336922;2245:87908`) | 2.3% |
| Đắc Nhân (`I4273:160653;4019:24214`) | 1.6% |
| Label (`I6006:130496;2015:31836;6006:130499;2015:30564`) | 1.5% |
| Label (`I4915:255361;4901:220694;2245:87908`) | 1.4% |
| Label (`I4915:255361;4901:220700;2245:87908`) | 1.2% |
| Value (`I5614:59006;2015:36008`) | 1.1% |
| Label (`I6006:130496;2015:31836;6006:130500;2015:30564`) | 1.1% |
| CD (`I2860:13738;2008:31885`) | 0.8% |
| 30m (`I2860:37178;1207:1810`) | 0.7% |
| 30m (`I2860:37190;1207:1810`) | 0.7% |
| [2024.11] Nhập Môn Tiếng Trung (HSK1) · HK III (`2860:37019`) | 0.6% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Container (`497:18295`) | container | 0.34 | 2.5 (text) | 0 | 0 | 0.34 | 0 |
| Kiểm tra giữa kỳ 3 HSK1 (`497:18296`) | text | 0.34 | 2.5 (text) | 0 | 0 | 0.34 | 0 |
| Container (`497:18318`) | container | 0.22 | 2.5 (text) | 0 | 0 | 0.22 | 0 |
| Kiểm tra cuối kỳ 3 HSK1 (`497:18319`) | text | 0.22 | 2.5 (text) | 0 | 0 | 0.22 | 0 |
| Chevron (`I2860:37016;2808:44784`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Chevron (`I2860:37029;2808:44784`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Subtract (`I4915:255361;4901:220632`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | 0 |
| Intersect (`I4915:255361;4901:220639`) | icon | 0.01 | 1 | 0 | -0.01 | -0.01 | 0 |
| Vector (`I4915:255361;4901:220652`) | icon | 0.01 | 1 | 0 | -0.01 | 0 | -0.01 |
| Vector (`I4915:255361;4901:220653`) | icon | 0.01 | 1 | 0.01 | 0 | 0 | -0.01 |
| Union (`I4915:255361;4901:220654`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | -0.01 |
| Group 240002 (`I4915:255361;4901:220657`) | icon | 0.01 | 1 | 0 | 0 | 0 | -0.01 |
| Content Body (Split Layout: Form & Term List) (`497:18278`) | container | 0 | 1 | 0 | 0 | 0 | 0 |
| Main - Left Column: Form & Details (`497:18279`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Navigation Subtabs (`497:18280`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Component 2 (`497:18281`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I497:18281;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I497:18281;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Component 3 (`497:18282`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I497:18282;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I497:18282;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Side Tab (`497:18283`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I497:18283;2177:28935`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhiệm vụ con (`I497:18283;2177:28936`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Left accent vertical pill bar (`I497:18283;2177:28937`) | shape | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
