# Fidelity: CD-KH-060130 — Bài tập về nhà / BTVN · Bài chưa có câu hỏi

- URL: `http://localhost:3000/bai-tap-ve-nha/btvn-bai-chua-co-cau-hoi`
- Verdict: **PASS**
- Pixels outside text: **0.003%** differ (limit 0.5%); all pixels: 0.069%; inside text boxes: 0.736% (glyph rendering)
- Boxes: 199/199 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 195, ≤1px: 197, ≤2px: 199, ≤4px: 199, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I5491:349263;6579:362446`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I5491:349263;6579:362452;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I5491:349263;6579:362466;2245:87904`, icon) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`I5491:349263;6579:362503`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I5491:349263;6579:362454;2245:87908`) | 7.8% |
| Button (`I5491:349771;1048:1230`) | 3.4% |
| Button (`I5491:349773;1048:1232`) | 2.9% |
| Học kỳ & bài học (`6518:373086`) | 2.7% |
| Label (`I5491:349263;6579:362456;2245:87908`) | 2.3% |
| Tiêu đề (`5491:348903`) | 2.1% |
| Đắc Nhân (`I5491:349313;4019:24214`) | 1.6% |
| Label (`I5491:349263;6579:362461;2245:87908`) | 1.4% |
| Label (`I5491:349263;6579:362467;2245:87908`) | 1.2% |
| Label (`I6518:373087;1725:17108`) | 1% |
| Button (`I5672:62096;1430:10764`) | 0.9% |
| CD (`I5491:349312;2008:31885`) | 0.8% |
| Label (`I5491:349263;6579:362453;2245:87908`) | 0.7% |
| Label (`I5491:348904;2015:30513`) | 0.6% |
| Button (`I5491:348908;1071:20023`) | 0.6% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atom/Button (`5491:349773`) | instance | 1.06 | 2.5 (text) | -0.53 | 0 | 1.06 | 0 |
| Button (`I5491:349773;1048:1232`) | text | 1.06 | 2.5 (text) | -0.53 | 0 | 1.06 | 0 |
| Atom/Button (`5491:349771`) | instance | 0.53 | 2.5 (text) | -0.53 | 0 | 0 | 0 |
| Button (`I5491:349771;1048:1230`) | text | 0.53 | 2.5 (text) | -0.53 | 0 | 0 | 0 |
| Học kỳ & bài học (`6518:373086`) | text | 0.05 | 2.5 (text) | 0 | 0 | -0.05 | 0 |
| Atom/Tag (`6518:373087`) | instance | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Container (`I6518:373087;1725:17107`) | container | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Label (`I6518:373087;1725:17108`) | text | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Subtract (`I5491:349263;6579:362397`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | 0 |
| Intersect (`I5491:349263;6579:362404`) | icon | 0.01 | 1 | 0 | -0.01 | -0.01 | 0 |
| Vector (`I5491:349263;6579:362417`) | icon | 0.01 | 1 | 0 | -0.01 | 0 | -0.01 |
| Vector (`I5491:349263;6579:362418`) | icon | 0.01 | 1 | 0.01 | 0 | 0 | -0.01 |
| Union (`I5491:349263;6579:362419`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | -0.01 |
| Group 240002 (`I5491:349263;6579:362422`) | icon | 0.01 | 1 | 0 | 0 | 0 | -0.01 |
| Content (`5491:348894`) | container | 0 | 1 | 0 | 0 | 0 | 0 |
| Nav · Khoá học đang mở (`5491:348895`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nút Import Excel (`5672:62094`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Button (`I5672:62094;1430:10764`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nút Export Excel (`5672:62096`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Button (`I5672:62096;1430:10764`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| spacer (`5491:348896`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Khoá học đang mở (`5491:348897`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Khoá học: (`5491:348898`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhập Môn Tiếng Trung (HSK1) · HK I · HSK1 (`5491:348899`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`5491:348900`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
