# Fidelity: CD-KH-050100 — Kỹ năng (S6) / Nghe

- URL: `http://localhost:3108/ky-nang-s6/nghe`
- Verdict: **FAIL**
- Pixels outside text: **0.005%** differ (limit 0.5%); all pixels: 0.084%; inside text boxes: 0.365% (glyph rendering)
- Boxes: 427/428 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 423, ≤1px: 427, ≤2px: 427, ≤4px: 428, >4px: 0

## Failures

- 1 elements are off by more than their limit (1px, 2.5px for text-driven; worst 4px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I5491:340727;6579:362135`, icon) |
| 1376, 856, 24×24 | 16 | Action Button (`I6935:376199;5056:365854`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I5491:340727;6579:362141;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I5491:340727;6579:362155;2245:87904`, icon) |
| 904, 440, 8×8 | 4 | Label (`I5491:340466;1725:17090`, text) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`I5491:340727;6579:362192`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I5491:340466;1725:17090`) | 9.7% |
| Tất cả cụm (`6935:376128`) | 8.1% |
| Label (`I5491:340727;6579:362143;2245:87908`) | 7.8% |
| Value (`I5491:340386;2015:31180`) | 1.6% |
| Đắc Nhân (`I5491:340777;4019:24214`) | 1.6% |
| Nghe (`5491:340377`) | 1.4% |
| Button (`I5491:340388;1048:1240`) | 1.4% |
| Label (`I5491:340727;6579:362150;2245:87908`) | 1.4% |
| Tìm nội dung... (`I6935:376132;2808:42328`) | 1.3% |
| 1 (`5491:340540`) | 1.2% |
| Label (`I5491:340727;6579:362156;2245:87908`) | 1.2% |
| Button (`I6935:376133;1048:1240`) | 1.1% |
| Button (`I5491:340387;1048:1240`) | 0.8% |
| CD (`I5491:340776;2008:31885`) | 0.8% |
| Nhập Môn Tiếng Trung (HSK1) (`5491:340373`) | 0.7% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Label (`I5491:340466;1725:17090`) | text | 4 ✗ | 2.5 (text) | -2 | 0 | 4 | 0 |
| spacer (`6935:376198`) | container | 1 | 2.5 (text) | 0 | 0 | 0 | -1 |
| Molecule/Add New Bar (`6935:376199`) | instance | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Placeholder (`I6935:376199;5056:365853`) | text | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Action Button (`I6935:376199;5056:365854`) | icon | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Subtract (`I5491:340727;6579:362086`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | 0 |
| Intersect (`I5491:340727;6579:362093`) | icon | 0.01 | 1 | 0 | -0.01 | -0.01 | 0 |
| Vector (`I5491:340727;6579:362106`) | icon | 0.01 | 1 | 0 | -0.01 | 0 | -0.01 |
| Vector (`I5491:340727;6579:362107`) | icon | 0.01 | 1 | 0.01 | 0 | 0 | -0.01 |
| Union (`I5491:340727;6579:362108`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | -0.01 |
| Group 240002 (`I5491:340727;6579:362111`) | icon | 0.01 | 1 | 0 | 0 | 0 | -0.01 |
| Content (`5491:340362`) | container | 0 | 1 | 0 | 0 | 0 | 0 |
| Nav - Tabs loại kiến thức (`5491:340363`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · Nghe (`5491:340364`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I5491:340364;2177:28935`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhiệm vụ con (`I5491:340364;2177:28936`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Left accent vertical pill bar (`I5491:340364;2177:28937`) | shape | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · Đọc (`5491:340365`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I5491:340365;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I5491:340365;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · Viết (`5491:340366`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I5491:340366;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I5491:340366;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tab · Nói (`5491:340367`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I5491:340367;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
