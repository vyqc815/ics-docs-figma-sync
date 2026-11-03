# Fidelity: ADM-HD-010081 — Hoá đơn / Popup thêm / Chọn Xem lịch sử

- URL: `http://localhost:3000/frames/adm-hd-010081`
- Verdict: **FAIL**
- Pixels outside text: **1.066%** differ (limit 0.5%); all pixels: 1.08%; inside text boxes: 0.084% (glyph rendering)
- Boxes: 11/11 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 11, ≤1px: 11, ≤2px: 11, ≤4px: 11, >4px: 0

## Failures

- 1.066% of non-text pixels differ (limit 0.5%).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 16, 48, 448×56 | 619 | Thêm Tag (`3058:96270`, text) |
| 16, 112, 448×56 | 619 | Thêm Lịch Hẹn (`3058:96272`, text) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Thêm Tag (`3058:96270`) | 0.3% |
| Thêm Lịch Hẹn (`3058:96272`) | 0.2% |
| Xem lịch sử (`3058:96274`) | 0.2% |
| Title (`I3058:96237;2514:153358`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Popup/Header (`3058:96237`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I3058:96237;2514:153357`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I3058:96237;2514:153358`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`3058:96238`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Thêm Tag (`3058:96269`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Thêm Tag (`3058:96270`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Thêm Lịch Hẹn (`3058:96271`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Thêm Lịch Hẹn (`3058:96272`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Xem lịch sử · Hover (`3058:96273`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Xem lịch sử (`3058:96274`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Mouse click (`3058:96275`) | icon | 0 | 1 | 0 | 0 | 0 | 0 |
