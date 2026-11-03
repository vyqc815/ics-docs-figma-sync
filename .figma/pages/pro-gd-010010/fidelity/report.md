# Fidelity: PRO-GD-010010 — Hồ sơ / Popup chọn màu giao diện

- URL: `http://localhost:3000/frames/pro-gd-010010`
- Verdict: **FAIL**
- Pixels outside text: **0.326%** differ (limit 0.5%); all pixels: 0.408%; inside text boxes: 0.469% (glyph rendering)
- Boxes: 60/60 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 60, ≤1px: 60, ≤2px: 60, ≤4px: 60, >4px: 0

## Failures

- Rendered size differs from the reference render.

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 0, 512, 525×3 | 525 | Popup/Footer (`4273:166273`, instance) |
| 32, 88, 128×72 | 290 | COLOR THEME (`4273:166226`, icon) |
| 48, 88, 32×56 | 66 | COLOR THEME (`4273:166226`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Description (`I4273:166222;2514:153342`) | 1.6% |
| DARK MODE (`4273:166272`) | 0.9% |
| Cam · Mặc định (`4273:166229`) | 0.4% |
| Tím (`4273:166240`) | 0.2% |
| Xanh lá (`4273:166246`) | 0.2% |
| Xám đậm (`4273:166267`) | 0.2% |
| Xanh ngọc (`4273:166251`) | 0.1% |
| Hồng (`4273:166256`) | 0.1% |
| Đỏ (`4273:166262`) | 0.1% |
| Title (`I4273:166222;2514:153341`) | 0% |
| Xanh dương (`4273:166235`) | 0% |
| Button (`I4273:166273;2514:153361;1048:1232`) | 0% |
| Button (`I4273:166273;2514:153363;1048:1230`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Body (`4273:166223`) | container | 0.04 | 2.5 (text) | 0 | 0 | 0 | -0.04 |
| Nhãn (`4273:166260`) | container | 0.04 | 2.5 (text) | 0 | -0.04 | -0.01 | 0 |
| Màu (`4273:166261`) | shape | 0.04 | 2.5 (text) | 0 | -0.04 | 0 | 0 |
| Đỏ (`4273:166262`) | text | 0.04 | 2.5 (text) | 0 | -0.04 | -0.01 | 0 |
| Nhãn (`4273:166265`) | container | 0.04 | 2.5 (text) | -0.01 | -0.04 | 0 | 0 |
| Màu (`4273:166266`) | shape | 0.04 | 2.5 (text) | -0.01 | -0.04 | 0 | 0 |
| Xám đậm (`4273:166267`) | text | 0.04 | 2.5 (text) | -0.01 | -0.04 | 0 | 0 |
| Nhãn (`4273:166270`) | container | 0.04 | 2.5 (text) | 0 | -0.04 | 0 | 0 |
| Màu (`4273:166271`) | shape | 0.04 | 2.5 (text) | 0 | -0.04 | 0 | 0 |
| DARK MODE (`4273:166272`) | text | 0.04 | 2.5 (text) | 0 | -0.04 | 0 | 0 |
| Popup/Footer (`4273:166273`) | instance | 0.04 | 2.5 (text) | 0 | -0.04 | 0 | 0 |
| Atom/Button (`I4273:166273;2514:153361`) | instance | 0.04 | 2.5 (text) | 0 | -0.04 | 0 | 0 |
| Button (`I4273:166273;2514:153361;1048:1232`) | text | 0.04 | 2.5 (text) | 0 | -0.04 | 0 | 0 |
| Atom/Button (`I4273:166273;2514:153363`) | instance | 0.04 | 2.5 (text) | 0 | -0.04 | 0 | 0 |
| Button (`I4273:166273;2514:153363;1048:1230`) | text | 0.04 | 2.5 (text) | 0 | -0.04 | 0 | 0 |
| Nhãn (`4273:166244`) | container | 0.03 | 2.5 (text) | 0 | -0.03 | -0.01 | 0 |
| Màu (`4273:166245`) | shape | 0.03 | 2.5 (text) | 0 | -0.03 | 0 | 0 |
| Xanh lá (`4273:166246`) | text | 0.03 | 2.5 (text) | 0 | -0.03 | -0.01 | 0 |
| Nhãn (`4273:166249`) | container | 0.03 | 2.5 (text) | -0.01 | -0.03 | 0 | 0 |
| Màu (`4273:166250`) | shape | 0.03 | 2.5 (text) | -0.01 | -0.03 | 0 | 0 |
| Xanh ngọc (`4273:166251`) | text | 0.03 | 2.5 (text) | -0.01 | -0.03 | 0 | 0 |
| Nhãn (`4273:166254`) | container | 0.03 | 2.5 (text) | 0 | -0.03 | 0 | 0 |
| Màu (`4273:166255`) | shape | 0.03 | 2.5 (text) | 0 | -0.03 | 0 | 0 |
| Hồng (`4273:166256`) | text | 0.03 | 2.5 (text) | 0 | -0.03 | 0 | 0 |
| Hàng (`4273:166257`) | container | 0.03 | 2.5 (text) | 0 | -0.03 | 0 | -0.01 |
