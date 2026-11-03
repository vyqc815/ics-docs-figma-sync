# Fidelity: CH-BL-010070 — Báo lỗi / Popup nhắc báo lỗi chưa xử lý (mỗi ngày)

- URL: `http://localhost:3000/frames/ch-bl-010070`
- Verdict: **PASS**
- Pixels outside text: **0%** differ (limit 0.5%); all pixels: 0.229%; inside text boxes: 0.766% (glyph rendering)
- Boxes: 62/62 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 61, ≤1px: 62, ≤2px: 62, ≤4px: 62, >4px: 0

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I5371:40448;2015:30513`) | 4% |
| Badge (`I5371:40426;1048:1255`) | 3.4% |
| Badge (`I5371:40456;1048:1255`) | 3.4% |
| Description (`I5371:40304;2514:153342`) | 1.5% |
| Label (`I5371:40410;1725:17126`) | 0.9% |
| Tồn đọng 3 ngày (`5371:40428`) | 0.8% |
| Sai pinyin từ 再见 (`5371:40437`) | 0.8% |
| Button (`I5371:40336;2514:153361;1048:1232`) | 0.8% |
| Label (`I5371:40407;1725:17144`) | 0.7% |
| Label (`I5371:40420;1725:17126`) | 0.7% |
| Tồn đọng 11 ngày (`5371:40458`) | 0.7% |
| Không lưu được điểm bài tập (`5371:40423`) | 0.6% |
| Title (`I5371:40304;2514:153341`) | 0.3% |
| Badge (`I5371:40440;1048:1251`) | 0.3% |
| Tồn đọng 9 ngày (`5371:40442`) | 0.3% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Không lưu được điểm bài tập (`5371:40423`) | text | 0.86 | 2.5 (text) | 0 | 0 | 0.86 | 0 |
| Nội dung (`5371:40417`) | container | 0.5 | 2.5 (text) | 0 | 0 | -0.5 | 0 |
| Trạng thái (`5371:40425`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0.5 | 0 |
| Tồn đọng 3 ngày (`5371:40428`) | text | 0.5 | 2.5 (text) | -0.5 | 0 | 0.5 | 0 |
| Nội dung (`5371:40431`) | container | 0.5 | 2.5 (text) | 0 | 0 | -0.5 | 0 |
| Trạng thái (`5371:40439`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0.5 | 0 |
| Tồn đọng 9 ngày (`5371:40442`) | text | 0.5 | 2.5 (text) | -0.5 | 0 | 0.5 | 0 |
| Nội dung (`5371:40445`) | container | 0.27 | 2.5 (text) | 0 | 0 | -0.27 | 0 |
| Trạng thái (`5371:40455`) | container | 0.27 | 2.5 (text) | -0.27 | 0 | 0.27 | 0 |
| Tồn đọng 11 ngày (`5371:40458`) | text | 0.27 | 2.5 (text) | -0.27 | 0 | 0.27 | 0 |
| Atom/Badge (`5371:40426`) | instance | 0.25 | 2.5 (text) | -0.25 | 0 | 0.25 | 0 |
| Badge (`I5371:40426;1048:1255`) | text | 0.25 | 2.5 (text) | -0.25 | 0 | 0.25 | 0 |
| Atom/Badge (`5371:40456`) | instance | 0.25 | 2.5 (text) | -0.25 | 0 | 0.25 | 0 |
| Badge (`I5371:40456;1048:1255`) | text | 0.25 | 2.5 (text) | -0.25 | 0 | 0.25 | 0 |
| Atom/Tag (`5371:40407`) | instance | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Container (`I5371:40407;1725:17143`) | container | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Label (`I5371:40407;1725:17144`) | text | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Atom/Tag (`5371:40410`) | instance | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Container (`I5371:40410;1725:17125`) | container | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Label (`I5371:40410;1725:17126`) | text | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| sp (`5371:40413`) | container | 0.06 | 2.5 (text) | 0.06 | 0 | -0.06 | 0 |
| Popup/Header (`5371:40304`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I5371:40304;2514:153340`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I5371:40304;2711:67900`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I5371:40304;2514:153341`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
