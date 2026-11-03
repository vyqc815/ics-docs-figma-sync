# Fidelity: ADM-VC-010020-DK — Voucher / Popup chỉnh sửa voucher

- URL: `http://localhost:3000/voucher/popup-chinh-sua-voucher-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.002%** differ (limit 0.5%); all pixels: 0.251%; inside text boxes: 1.069% (glyph rendering)
- Boxes: 109/111 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 105, ≤1px: 109, ≤2px: 109, ≤4px: 111, >4px: 0

## Failures

- 2 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.94px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 600, 288, 8×8 | 9 | Khoá học áp dụng (`I4056:130062;3976:73771`, text) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Khoá học áp dụng (`I4056:130062;3976:73771`) | 19% |
| 0000000009 (`I4056:130048;1739:32457`) | 9.9% |
| Toàn bộ khoá học (`4056:130051`) | 6.9% |
| Nhãn trường (`I4056:130037;2808:48145`) | 2.3% |
| Nhãn trường (`I4056:130034;2808:48145`) | 2.1% |
| Mã voucher (`I4056:130062;3976:73788`) | 2.1% |
| Đơn vị (`I4056:130042;3004:60386;3004:60353`) | 2% |
| Nhãn trường (`I4056:130044;2808:48145`) | 1.9% |
| Nhãn trường (`I4056:130030;2808:48145`) | 1.8% |
| Tên trung tâm (`I4056:130062;3976:73759`) | 1.8% |
| Nhãn trường (`I4056:130041;2808:48145`) | 1.7% |
| Nhãn trường (`I4056:130047;2808:48145`) | 1.7% |
| Nhãn trường (`I4056:130055;2808:48145`) | 1.7% |
| Required (`I4056:130030;2911:43272`) | 1.1% |
| Required (`I4056:130041;2911:43272`) | 1.1% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Áp dụng (`I4056:130062;3976:73769`) | container | 2.94 ✗ | 2.5 (text) | 0 | 0 | 2.94 | 0 |
| Khoá học áp dụng (`I4056:130062;3976:73771`) | text | 2.94 ✗ | 2.5 (text) | 0 | 0 | 2.94 | 0 |
| 0000000009 (`I4056:130048;1739:32457`) | text | 0.97 | 2.5 (text) | 0 | 0 | 0.97 | 0 |
| Tên trung tâm (`I4056:130062;3976:73759`) | text | 0.94 | 2.5 (text) | 0 | 0 | 0.94 | 0 |
| Điều kiện (`I4056:130062;3976:73773`) | container | 0.75 | 2.5 (text) | 0 | 0 | 0.75 | 0 |
| Tối đa 1 voucher cho 1 khoá học (`I4056:130062;3976:73775`) | text | 0.75 | 2.5 (text) | 0 | 0 | 0.75 | 0 |
| Nhãn giá trị (`I4056:130062;3976:73766`) | text | 0.25 | 2.5 (text) | 0 | 0 | 0.25 | 0 |
| Xem trước voucher (`4056:130060`) | text | 0.19 | 2.5 (text) | 0 | 0 | 0.19 | 0 |
| Atom/Label (`4056:130034`) | instance | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Nhãn trường (`I4056:130034;2808:48145`) | text | 0.16 | 2.5 (text) | 0 | 0 | 0.16 | 0 |
| Áp dụng voucher cho tất cả khoá học (`4056:130052`) | text | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Popup/Header (`4056:130026`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I4056:130026;2514:153340`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title Row (`I4056:130026;2711:67900`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I4056:130026;2514:153341`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Description (`I4056:130026;2514:153342`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`4056:130027`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Form (`4056:130028`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Field · Mã voucher (`4056:130029`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`4056:130030`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Liner Icon (`I4056:130030;2808:48144`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhãn trường (`I4056:130030;2808:48145`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Required (`I4056:130030;2911:43272`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Input (`4056:130031`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| 0000000009 (`I4056:130031;1739:32457`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
