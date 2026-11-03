# Fidelity: GV-KS-010001 — Khảo sát / Popup thông báo khảo sát mới

- URL: `http://localhost:3000/frames/gv-ks-010001`
- Verdict: **FAIL**
- Pixels outside text: **0.299%** differ (limit 0.5%); all pixels: 0.299%; inside text boxes: 0% (glyph rendering)
- Boxes: 8/8 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 8, ≤1px: 8, ≤2px: 8, ≤4px: 8, >4px: 0

## Failures

- Rendered size differs from the reference render.

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 0, 328, 480×6 | 480 | Popup/Footer (`4686:44209`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Bạn có khảo sát mới (`4686:44207`) | 0% |
| Admin đã giao cho bạn “KHẢO SÁT THÔNG TI (`4686:44208`) | 0% |
| Button (`I4686:44209;2514:153361;1048:1232`) | 0% |
| Button (`I4686:44209;2514:153363;1048:1230`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Minh hoạ (`4686:44206`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Bạn có khảo sát mới (`4686:44207`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Admin đã giao cho bạn “KHẢO SÁT THÔNG TI (`4686:44208`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Popup/Footer (`4686:44209`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Atom/Button (`I4686:44209;2514:153361`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Button (`I4686:44209;2514:153361;1048:1232`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Atom/Button (`I4686:44209;2514:153363`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Button (`I4686:44209;2514:153363;1048:1230`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
