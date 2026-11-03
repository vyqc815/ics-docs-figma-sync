# Fidelity: GV-KS-010011 — Khảo sát / Popup xác nhận gửi

- URL: `http://localhost:3000/frames/gv-ks-010011`
- Verdict: **FAIL**
- Pixels outside text: **0.321%** differ (limit 0.5%); all pixels: 0.321%; inside text boxes: 0% (glyph rendering)
- Boxes: 8/8 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 8, ≤1px: 8, ≤2px: 8, ≤4px: 8, >4px: 0

## Failures

- Rendered size differs from the reference render.

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 0, 312, 480×3 | 480 | Popup/Footer (`4686:44214`, instance) |
| 280, 128, 8×8 | 5 | Minh hoạ (`4686:44211`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Gửi khảo sát? (`4686:44212`) | 0% |
| Bạn đã trả lời 31/32 câu. Sau khi gửi, c (`4686:44213`) | 0% |
| Button (`I4686:44214;2514:153361;1048:1232`) | 0% |
| Button (`I4686:44214;2514:153363;1048:1230`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Minh hoạ (`4686:44211`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Gửi khảo sát? (`4686:44212`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Bạn đã trả lời 31/32 câu. Sau khi gửi, c (`4686:44213`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Popup/Footer (`4686:44214`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Atom/Button (`I4686:44214;2514:153361`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Button (`I4686:44214;2514:153361;1048:1232`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Atom/Button (`I4686:44214;2514:153363`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Button (`I4686:44214;2514:153363;1048:1230`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
