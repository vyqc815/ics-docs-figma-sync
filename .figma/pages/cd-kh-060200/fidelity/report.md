# Fidelity: CD-KH-060200 — Bài tập về nhà / Kiểm tra

- URL: `http://localhost:3000/bai-tap-ve-nha/kiem-tra`
- Verdict: **PASS**
- Pixels outside text: **0.004%** differ (limit 0.5%); all pixels: 0.221%; inside text boxes: 1.029% (glyph rendering)
- Boxes: 429/429 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 415, ≤1px: 424, ≤2px: 429, ≤4px: 429, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I5491:347921;6579:362446`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I5491:347921;6579:362452;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I5491:347921;6579:362466;2245:87904`, icon) |
| 872, 224, 16×16 | 5 | Ellipse (`5672:62033`, shape) |
| 928, 224, 16×16 | 5 | Ellipse (`5672:62037`, shape) |
| 24, 808, 8×8 | 4 | LOGO CENTER (`I5491:347921;6579:362503`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I5491:347921;6579:362454;2245:87908`) | 7.8% |
| 你好！ (`5491:347613`) | 6.8% |
| 你爸爸好吗？ (`5491:347715`) | 6.8% |
| 妈妈好吗？ (`5491:347681`) | 6.4% |
| 我很好。 (`5491:347647`) | 6.3% |
| Button (`I5491:347588;1048:1240`) | 6.2% |
| Button (`I5491:347589;1048:1240`) | 4.8% |
| 2 (`5491:347751`) | 3.5% |
| Label (`I5672:62047;2015:30513`) | 3.3% |
| Label (`I5672:62059;2015:30513`) | 3.3% |
| 1 (`5491:347749`) | 2.9% |
| Kỳ & bài kiểm tra (`6518:373081`) | 2.9% |
| 你好吗？ (`5491:347630`) | 2.6% |
| Label (`I5491:347921;6579:362456;2245:87908`) | 2.3% |
| 10 (`5491:348650`) | 2.1% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atom/Tag (`5672:62047`) | instance | 1.22 | 2.5 (text) | 0 | 0 | 1.22 | 0 |
| Label (`I5672:62047;2015:30513`) | text | 1.22 | 2.5 (text) | 0 | 0 | 1.22 | 0 |
| Atom/Tag (`5672:62059`) | instance | 1.22 | 2.5 (text) | 0 | 0 | 1.22 | 0 |
| Label (`I5672:62059;2015:30513`) | text | 1.22 | 2.5 (text) | 0 | 0 | 1.22 | 0 |
| Kiến thức / Kỹ năng (`5672:62045`) | text | 1.03 | 2.5 (text) | 0 | 0 | 1.03 | 0 |
| spacer (`5491:347743`) | container | 1 | 2.5 (text) | 0 | 0 | 0 | -1 |
| Footer · Phân trang (`5491:347744`) | container | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Hiển thị 1–8 trong 10 câu hỏi (`5491:347745`) | text | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Trang ‹ (`5491:347746`) | icon | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Trang 1 (`5491:347748`) | container | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| 1 (`5491:347749`) | text | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Trang 2 (`5491:347750`) | container | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| 2 (`5491:347751`) | text | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Trang › (`5491:347758`) | icon | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Atom/Input (`5491:347585`) | instance | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Input (`I5491:347585;2808:42276`) | container | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Container (`I5491:347585;2808:42277`) | container | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Tìm nội dung... (`I5491:347585;2808:42278`) | text | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| DD/Molecule/Trigger (`5491:347586`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Content (`I5491:347586;2015:31179`) | container | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Value (`I5491:347586;2015:31180`) | text | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Chevron (`I5491:347586;2015:31183`) | icon | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| DD/Molecule/Trigger (`5491:347587`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Content (`I5491:347587;2015:31179`) | container | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Value (`I5491:347587;2015:31180`) | text | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
