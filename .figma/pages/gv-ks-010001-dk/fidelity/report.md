# Fidelity: GV-KS-010001-DK — Khảo sát / Popup thông báo khảo sát mới

- URL: `http://localhost:3000/frames/gv-ks-010001-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.339%** differ (limit 0.5%); all pixels: 0.339%; inside text boxes: 0% (glyph rendering)
- Boxes: 8/8 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 8, ≤1px: 8, ≤2px: 8, ≤4px: 8, >4px: 0

## Failures

- Rendered size differs from the reference render.

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 0, 328, 480×6 | 480 | Popup/Footer (`4885:60384`, instance) |
| 184, 136, 48×16 | 31 | Minh hoạ (`4885:60381`, icon) |
| 248, 136, 40×16 | 29 | Minh hoạ (`4885:60381`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Bạn có khảo sát mới (`4885:60382`) | 0% |
| Admin đã giao cho bạn “KHẢO SÁT THÔNG TI (`4885:60383`) | 0% |
| Button (`I4885:60384;2514:153361;1048:1232`) | 0% |
| Button (`I4885:60384;2514:153363;1048:1230`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Minh hoạ (`4885:60381`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Bạn có khảo sát mới (`4885:60382`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Admin đã giao cho bạn “KHẢO SÁT THÔNG TI (`4885:60383`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Popup/Footer (`4885:60384`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Atom/Button (`I4885:60384;2514:153361`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Button (`I4885:60384;2514:153361;1048:1232`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Atom/Button (`I4885:60384;2514:153363`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Button (`I4885:60384;2514:153363;1048:1230`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
