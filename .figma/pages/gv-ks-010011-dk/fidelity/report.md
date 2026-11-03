# Fidelity: GV-KS-010011-DK — Khảo sát / Popup xác nhận gửi

- URL: `http://localhost:3000/frames/gv-ks-010011-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.335%** differ (limit 0.5%); all pixels: 0.335%; inside text boxes: 0.006% (glyph rendering)
- Boxes: 8/8 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 8, ≤1px: 8, ≤2px: 8, ≤4px: 8, >4px: 0

## Failures

- Rendered size differs from the reference render.

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 0, 312, 480×3 | 480 | Popup/Footer (`4885:60389`, instance) |
| 280, 112, 24×40 | 14 | Minh hoạ (`4885:60386`, icon) |
| 232, 144, 8×16 | 7 | Minh hoạ (`4885:60386`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I4885:60389;2514:153361;1048:1232`) | 0.1% |
| Gửi khảo sát? (`4885:60387`) | 0% |
| Bạn đã trả lời 31/32 câu. Sau khi gửi, c (`4885:60388`) | 0% |
| Button (`I4885:60389;2514:153363;1048:1230`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Minh hoạ (`4885:60386`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Gửi khảo sát? (`4885:60387`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Bạn đã trả lời 31/32 câu. Sau khi gửi, c (`4885:60388`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Popup/Footer (`4885:60389`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Atom/Button (`I4885:60389;2514:153361`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Button (`I4885:60389;2514:153361;1048:1232`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Atom/Button (`I4885:60389;2514:153363`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Button (`I4885:60389;2514:153363;1048:1230`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
