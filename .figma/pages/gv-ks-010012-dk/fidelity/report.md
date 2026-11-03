# Fidelity: GV-KS-010012-DK — Khảo sát / Popup gửi thành công

- URL: `http://localhost:3000/frames/gv-ks-010012-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.341%** differ (limit 0.5%); all pixels: 0.47%; inside text boxes: 0.944% (glyph rendering)
- Boxes: 8/8 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 4, ≤1px: 8, ≤2px: 8, ≤4px: 8, >4px: 0

## Failures

- Rendered size differs from the reference render.

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 0, 312, 480×3 | 480 | Popup/Footer (`4885:60394`, instance) |
| 224, 104, 32×24 | 29 | Minh hoạ (`4885:60391`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I4885:60394;2514:153361;1048:1232`) | 6.3% |
| Button (`I4885:60394;2514:153363;1048:1230`) | 0.4% |
| Gửi khảo sát thành công (`4885:60392`) | 0% |
| Cảm ơn bạn đã tham gia khảo sát. Câu trả (`4885:60393`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atom/Button (`I4885:60394;2514:153361`) | instance | 0.69 | 2.5 (text) | -0.69 | -0.01 | 0.02 | 0 |
| Button (`I4885:60394;2514:153361;1048:1232`) | text | 0.69 | 2.5 (text) | -0.69 | -0.01 | 0.02 | 0 |
| Atom/Button (`I4885:60394;2514:153363`) | instance | 0.67 | 2.5 (text) | -0.67 | -0.01 | 0.67 | 0 |
| Button (`I4885:60394;2514:153363;1048:1230`) | text | 0.67 | 2.5 (text) | -0.67 | -0.01 | 0.67 | 0 |
| Minh hoạ (`4885:60391`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Gửi khảo sát thành công (`4885:60392`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Cảm ơn bạn đã tham gia khảo sát. Câu trả (`4885:60393`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Popup/Footer (`4885:60394`) | instance | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
