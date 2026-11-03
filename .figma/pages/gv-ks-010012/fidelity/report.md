# Fidelity: GV-KS-010012 — Khảo sát / Popup gửi thành công

- URL: `http://localhost:3000/frames/gv-ks-010012`
- Verdict: **FAIL**
- Pixels outside text: **0.317%** differ (limit 0.5%); all pixels: 0.415%; inside text boxes: 0.721% (glyph rendering)
- Boxes: 8/8 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 4, ≤1px: 8, ≤2px: 8, ≤4px: 8, >4px: 0

## Failures

- Rendered size differs from the reference render.

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 0, 312, 480×3 | 480 | Popup/Footer (`4686:44219`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I4686:44219;2514:153361;1048:1232`) | 4.5% |
| Button (`I4686:44219;2514:153363;1048:1230`) | 0.7% |
| Gửi khảo sát thành công (`4686:44217`) | 0% |
| Cảm ơn bạn đã tham gia khảo sát. Câu trả (`4686:44218`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atom/Button (`I4686:44219;2514:153361`) | instance | 0.69 | 2.5 (text) | -0.69 | -0.01 | 0.02 | 0 |
| Button (`I4686:44219;2514:153361;1048:1232`) | text | 0.69 | 2.5 (text) | -0.69 | -0.01 | 0.02 | 0 |
| Atom/Button (`I4686:44219;2514:153363`) | instance | 0.67 | 2.5 (text) | -0.67 | -0.01 | 0.67 | 0 |
| Button (`I4686:44219;2514:153363;1048:1230`) | text | 0.67 | 2.5 (text) | -0.67 | -0.01 | 0.67 | 0 |
| Minh hoạ (`4686:44216`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Gửi khảo sát thành công (`4686:44217`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Cảm ơn bạn đã tham gia khảo sát. Câu trả (`4686:44218`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Popup/Footer (`4686:44219`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
