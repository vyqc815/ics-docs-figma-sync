# Fidelity: CD-KH-050300 — Kỹ năng (S6) / Viết

- URL: `http://localhost:3000/ky-nang-s6/viet`
- Verdict: **PASS**
- Pixels outside text: **0.005%** differ (limit 0.5%); all pixels: 0.096%; inside text boxes: 0.424% (glyph rendering)
- Boxes: 414/414 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 410, ≤1px: 414, ≤2px: 414, ≤4px: 414, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I6646:82860;6579:362135`, icon) |
| 1376, 856, 24×24 | 16 | Action Button (`I6935:376988;5056:365854`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I6646:82860;6579:362141;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I6646:82860;6579:362155;2245:87904`, icon) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`I6646:82860;6579:362192`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Tất cả cụm (`6935:376919`) | 8.1% |
| Label (`I6646:82860;6579:362143;2245:87908`) | 7.8% |
| Button (`I6646:82545;1048:1240`) | 6.2% |
| Button (`I6646:82546;1048:1240`) | 4.8% |
| Nǐ ne? (`6646:82616`) | 2.7% |
| Label (`I6646:82536;2015:30513`) | 2.1% |
| Đọc (`6646:82535`) | 1.7% |
| Đắc Nhân (`I6646:82910;4019:24214`) | 1.6% |
| Label (`I6646:82860;6579:362150;2245:87908`) | 1.4% |
| Tìm nội dung... (`I6935:376923;2808:42328`) | 1.3% |
| 1 (`6646:82688`) | 1.2% |
| Label (`I6646:82860;6579:362156;2245:87908`) | 1.2% |
| Button (`I6935:376924;1048:1240`) | 1.1% |
| CD (`I6646:82909;2008:31885`) | 0.8% |
| Nhập Môn Tiếng Trung (HSK1) (`6646:82531`) | 0.7% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| spacer (`6935:376987`) | container | 1 | 2.5 (text) | 0 | 0 | 0 | -1 |
| Molecule/Add New Bar (`6935:376988`) | instance | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Placeholder (`I6935:376988;5056:365853`) | text | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Action Button (`I6935:376988;5056:365854`) | icon | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Atom/Input (`6646:82542`) | instance | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Input (`I6646:82542;2808:42276`) | container | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Container (`I6646:82542;2808:42277`) | container | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Tìm nội dung... (`I6646:82542;2808:42278`) | text | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| DD/Molecule/Trigger (`6646:82543`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Content (`I6646:82543;2015:31179`) | container | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Value (`I6646:82543;2015:31180`) | text | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Chevron (`I6646:82543;2015:31183`) | icon | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| DD/Molecule/Trigger (`6646:82544`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Content (`I6646:82544;2015:31179`) | container | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Value (`I6646:82544;2015:31180`) | text | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Chevron (`I6646:82544;2015:31183`) | icon | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Atom/Button (`6646:82545`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0.41 | 0 |
| Button (`I6646:82545;1048:1240`) | text | 0.41 | 2.5 (text) | -0.41 | 0 | 0.41 | 0 |
| Đọc (`6646:82535`) | text | 0.2 | 2.5 (text) | 0 | 0 | 0.2 | 0 |
| Atom/Tag (`6646:82536`) | instance | 0.2 | 2.5 (text) | 0.2 | 0 | 0 | 0 |
| Label (`I6646:82536;2015:30513`) | text | 0.2 | 2.5 (text) | 0.2 | 0 | 0 | 0 |
| Atom/Tag (`6646:82537`) | instance | 0.2 | 2.5 (text) | 0.2 | 0 | 0 | 0 |
| Container (`I6646:82537;1725:17143`) | container | 0.2 | 2.5 (text) | 0.2 | 0 | 0 | 0 |
| Label (`I6646:82537;1725:17144`) | text | 0.2 | 2.5 (text) | 0.2 | 0 | 0 | 0 |
| spacer (`6646:82538`) | container | 0.2 | 2.5 (text) | 0.2 | 0 | -0.2 | 0 |
