# Fidelity: ADM-VC-010010 — Voucher / Popup tạo voucher

- URL: `http://localhost:3000/voucher/popup-tao-voucher`
- Verdict: **PASS**
- Pixels outside text: **0.006%** differ (limit 0.5%); all pixels: 0.356%; inside text boxes: 1.423% (glyph rendering)
- Boxes: 106/106 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 99, ≤1px: 102, ≤2px: 106, ≤4px: 106, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 496, 136, 32×24 | 24 | Logo (`I3977:75769;3976:73698`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I3977:75865;2514:153361;1048:1232`) | 13.8% |
| Tên trung tâm (`I3977:75769;3976:73759`) | 5.9% |
| Toàn bộ khoá học (`3977:75735`) | 4.9% |
| Required (`I3977:75673;2911:43272`) | 4.2% |
| Required (`I3977:75699;2911:43272`) | 4.2% |
| Required (`I3977:75712;2911:43272`) | 4.2% |
| Required (`I3977:75726;2911:43272`) | 4.2% |
| Title (`I3977:75751;2514:153341`) | 3.1% |
| Nhãn trường (`I3977:75684;2808:48145`) | 2.6% |
| Nhãn trường (`I3977:75673;2808:48145`) | 2.3% |
| Nhãn trường (`I3977:75726;2808:48145`) | 2.3% |
| Nhãn trường (`I3977:75743;2808:48145`) | 2.3% |
| Nhãn trường (`I3977:75699;2808:48145`) | 2.1% |
| Button (`I3977:75865;2514:153363;1048:1230`) | 2% |
| Nhãn trường (`I3977:75712;2808:48145`) | 1.8% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atom/Button (`I3977:75865;2514:153361`) | instance | 1.41 | 2.5 (text) | -1.41 | 0 | 0 | 0 |
| Button (`I3977:75865;2514:153361;1048:1232`) | text | 1.41 | 2.5 (text) | -1.41 | 0 | 0 | 0 |
| Atom/Button (`I3977:75865;2514:153363`) | instance | 1.41 | 2.5 (text) | -1.41 | 0 | 1.41 | 0 |
| Button (`I3977:75865;2514:153363;1048:1230`) | text | 1.41 | 2.5 (text) | -1.41 | 0 | 1.41 | 0 |
| Tên trung tâm (`I3977:75769;3976:73759`) | text | 0.94 | 2.5 (text) | 0 | 0 | 0.94 | 0 |
| Điều kiện (`I3977:75769;3976:73773`) | container | 0.75 | 2.5 (text) | 0 | 0 | 0.75 | 0 |
| Tối đa 1 voucher cho 1 khoá học (`I3977:75769;3976:73775`) | text | 0.75 | 2.5 (text) | 0 | 0 | 0.75 | 0 |
| Giá trị (`I3977:75769;3976:73765`) | container | 0.25 | 2.5 (text) | 0 | 0 | 0.25 | 0 |
| Nhãn giá trị (`I3977:75769;3976:73766`) | text | 0.25 | 2.5 (text) | 0 | 0 | 0.25 | 0 |
| Xem trước voucher (`3977:75767`) | text | 0.19 | 2.5 (text) | 0 | 0 | 0.19 | 0 |
| Atom/Label (`3977:75684`) | instance | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Nhãn trường (`I3977:75684;2808:48145`) | text | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Áp dụng voucher cho tất cả khoá học (`3977:75736`) | text | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Popup/Header (`3977:75751`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I3977:75751;2514:153340`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I3977:75751;2711:67900`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I3977:75751;2514:153341`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Description (`I3977:75751;2514:153342`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`3977:75756`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Form (`3977:75757`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Field · Mã voucher (`3977:75672`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`3977:75673`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Liner Icon (`I3977:75673;2808:48144`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhãn trường (`I3977:75673;2808:48145`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Required (`I3977:75673;2911:43272`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
