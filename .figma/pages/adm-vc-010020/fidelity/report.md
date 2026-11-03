# Fidelity: ADM-VC-010020 — Voucher / Popup chỉnh sửa voucher

- URL: `http://localhost:3000/voucher/popup-chinh-sua-voucher`
- Verdict: **FAIL**
- Pixels outside text: **0.014%** differ (limit 0.5%); all pixels: 0.275%; inside text boxes: 1.116% (glyph rendering)
- Boxes: 109/111 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 105, ≤1px: 109, ≤2px: 109, ≤4px: 111, >4px: 0

## Failures

- 2 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.94px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 400, 408, 24×8 | 26 | Switch (`3977:75895`, instance) |
| 496, 136, 32×24 | 24 | Logo (`I3977:75904;3976:73698`, icon) |
| 408, 384, 16×16 | 13 | Switch (`3977:75895`, instance) |
| 600, 280, 8×16 | 9 | Khoá học áp dụng (`I3977:75904;3976:73771`, text) |
| 384, 384, 8×16 | 4 | Switch (`3977:75895`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Khoá học áp dụng (`I3977:75904;3976:73771`) | 16.6% |
| 0000000009 (`I3977:75982;1739:32457`) | 8.9% |
| Tên trung tâm (`I3977:75904;3976:73759`) | 5.9% |
| Toàn bộ khoá học (`3977:75893`) | 5% |
| Required (`I3977:75875;2911:43272`) | 4.2% |
| Required (`I3977:75886;2911:43272`) | 4.2% |
| Required (`I3977:75882;2911:43272`) | 4.2% |
| Required (`I3977:75889;2911:43272`) | 4.2% |
| Nhãn trường (`I3977:75952;2808:48145`) | 2.8% |
| Nhãn trường (`I3977:75879;2808:48145`) | 2.6% |
| Nhãn trường (`I3977:75875;2808:48145`) | 2.3% |
| Nhãn trường (`I3977:75889;2808:48145`) | 2.3% |
| Nhãn trường (`I3977:75897;2808:48145`) | 2.3% |
| Nhãn trường (`I3977:75882;2808:48145`) | 2.1% |
| Nhãn trường (`I3977:75886;2808:48145`) | 1.8% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Áp dụng (`I3977:75904;3976:73769`) | container | 2.94 ✗ | 2.5 (text) | 0 | 0 | 2.94 | 0 |
| Khoá học áp dụng (`I3977:75904;3976:73771`) | text | 2.94 ✗ | 2.5 (text) | 0 | 0 | 2.94 | 0 |
| 0000000009 (`I3977:75982;1739:32457`) | text | 0.97 | 2.5 (text) | 0 | 0 | 0.97 | 0 |
| Tên trung tâm (`I3977:75904;3976:73759`) | text | 0.94 | 2.5 (text) | 0 | 0 | 0.94 | 0 |
| Điều kiện (`I3977:75904;3976:73773`) | container | 0.75 | 2.5 (text) | 0 | 0 | 0.75 | 0 |
| Tối đa 1 voucher cho 1 khoá học (`I3977:75904;3976:73775`) | text | 0.75 | 2.5 (text) | 0 | 0 | 0.75 | 0 |
| Nhãn giá trị (`I3977:75904;3976:73766`) | text | 0.25 | 2.5 (text) | 0 | 0 | 0.25 | 0 |
| Xem trước voucher (`3977:75902`) | text | 0.19 | 2.5 (text) | 0 | 0 | 0.19 | 0 |
| Atom/Label (`3977:75879`) | instance | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Nhãn trường (`I3977:75879;2808:48145`) | text | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Áp dụng voucher cho tất cả khoá học (`3977:75894`) | text | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Popup/Header (`3977:75871`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I3977:75871;2514:153340`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I3977:75871;2711:67900`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I3977:75871;2514:153341`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Description (`I3977:75871;2514:153342`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`3977:75872`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Form (`3977:75873`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Field · Mã voucher (`3977:75874`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`3977:75875`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Liner Icon (`I3977:75875;2808:48144`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhãn trường (`I3977:75875;2808:48145`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Required (`I3977:75875;2911:43272`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Input (`3977:75921`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| 0000000009 (`I3977:75921;1739:32457`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
