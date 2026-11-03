# Fidelity: ADM-LOP-050404-DK — Lớp học / Nhật ký / Tin nhắn

- URL: `http://localhost:3000/lop-hoc/nhat-ky/tin-nhan-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.01%** differ (limit 0.5%); all pixels: 0.131%; inside text boxes: 0.409% (glyph rendering)
- Boxes: 418/421 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 418, ≤1px: 418, ≤2px: 418, ≤4px: 418, >4px: 3

## Failures

- 3 elements are off by more than their limit (1px, 2.5px for text-driven; worst 110px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 1072, 424, 16×16 | 25 | Leading (`I4056:119233;2015:36006`, icon) |
| 1072, 520, 16×16 | 25 | Leading (`I4056:119259;2015:36006`, icon) |
| 1072, 568, 16×16 | 25 | Leading (`I4056:119272;2015:36006`, icon) |
| 1072, 664, 16×16 | 25 | Leading (`I4056:119298;2015:36006`, icon) |
| 1072, 752, 16×16 | 24 | Icon/Nền tảng tin nhắn (`I4056:119364;2015:31432;4056:119539;2015:30572`, icon) |
| 1072, 824, 8×16 | 10 | Icon/Nền tảng tin nhắn (`I4056:119364;2015:31432;4056:119541;2015:30561`, icon) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`4056:119458`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I4056:119426;2245:87908`) | 13.7% |
| Label (`I4056:119424;2245:87908`) | 8.6% |
| Value (`I4056:119246;2015:36008`) | 4.5% |
| Value (`I4056:119285;2015:36008`) | 4.5% |
| Label (`I4056:119427;2245:87908`) | 4.3% |
| Label (`I4056:119429;2245:87908`) | 3% |
| Label (`I4056:119430;2245:87908`) | 2.5% |
| Badge (`I4056:119261;1048:1255`) | 2.4% |
| Badge (`I4056:119287;1048:1255`) | 2.4% |
| Value (`I4056:119233;2015:36008`) | 2% |
| Value (`I4056:119259;2015:36008`) | 2% |
| Value (`I4056:119272;2015:36008`) | 2% |
| Value (`I4056:119298;2015:36008`) | 2% |
| Label (`I4056:119428;2245:87908`) | 1.4% |
| Label (`I4056:119431;2245:87908`) | 1.4% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Text (`4056:119181`) | text | 110 ✗ | 2.5 (text) | -55 | 0 | 110 | 0 |
| Text (`4056:119224`) | text | 70 ✗ | 2.5 (text) | -35 | 0 | 70 | 0 |
| Text (`4056:119214`) | text | 24 ✗ | 2.5 (text) | -12 | 0 | 24 | 0 |
| Atom/Badge (`4056:119261`) | instance | 0.31 | 2.5 (text) | 0 | 0 | 0.31 | 0 |
| Badge (`I4056:119261;1048:1255`) | text | 0.31 | 2.5 (text) | 0 | 0 | 0.31 | 0 |
| Atom/Badge (`4056:119287`) | instance | 0.31 | 2.5 (text) | 0 | 0 | 0.31 | 0 |
| Badge (`I4056:119287;1048:1255`) | text | 0.31 | 2.5 (text) | 0 | 0 | 0.31 | 0 |
| Subtract (`4056:119369`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | 0 |
| Intersect (`4056:119376`) | icon | 0.01 | 1 | 0 | -0.01 | -0.01 | 0 |
| Vector (`4056:119390`) | icon | 0.01 | 1 | 0.01 | 0 | 0 | -0.01 |
| Union (`4056:119391`) | icon | 0.01 | 1 | -0.01 | 0 | -0.01 | -0.01 |
| Group 240002 (`4056:119394`) | icon | 0.01 | 1 | 0 | 0 | 0 | -0.01 |
| MainContentArea (`4056:119152`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Frame 427321958 (`4056:119153`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`4056:119154`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Side Tab (`4056:119155`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I4056:119155;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I4056:119155;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Side Tab (`4056:119156`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I4056:119156;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I4056:119156;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Side Tab (`4056:119157`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I4056:119157;2177:28927`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chi tiết NV (`I4056:119157;2177:28928`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Side Tab (`4056:119158`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
