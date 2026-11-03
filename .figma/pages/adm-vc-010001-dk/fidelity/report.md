# Fidelity: ADM-VC-010001-DK — Voucher / Danh sách voucher / Xem trước voucher

- URL: `http://localhost:3000/voucher/danh-sach-voucher/xem-truoc-voucher-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.003%** differ (limit 0.5%); all pixels: 0.251%; inside text boxes: 1.444% (glyph rendering)
- Boxes: 332/334 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 329, ≤1px: 332, ≤2px: 332, ≤4px: 334, >4px: 0

## Failures

- 2 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.91px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 56, 16, 16×32 | 8 | Navigation / Sidebar Menu / Light (`4056:129726`, icon) |
| 1056, 536, 8×8 | 8 | Khoá học áp dụng (`I4056:129988;3976:73771`, text) |
| 16, 16, 16×8 | 6 | Navigation / Sidebar Menu / Light (`4056:129726`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Khoá học áp dụng (`I4056:129988;3976:73771`) | 19.2% |
| Mã người nhận (`4056:129885`) | 6.4% |
| Sau (`I4056:129986;1391:17487`) | 5.5% |
| 2 (`I4056:129986;1391:17479`) | 5% |
| Mã voucher (`4056:129883`) | 3.8% |
| Mã voucher (`4056:129928`) | 3.6% |
| Mã voucher (`4056:129853`) | 3.5% |
| Mã voucher (`4056:129898`) | 3.5% |
| Mã voucher (`4056:129913`) | 3.4% |
| Label (`I4056:129749;2245:87820`) | 3.3% |
| Mã voucher (`4056:129838`) | 3.3% |
| Mã voucher (`4056:129958`) | 3.1% |
| Mã voucher (`4056:129973`) | 3% |
| Ngày hết hạn (`4056:129828`) | 2.9% |
| 14.09.2026 (`I4056:129844;3567:39161`) | 2.9% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Áp dụng (`I4056:129988;3976:73769`) | container | 2.91 ✗ | 2.5 (text) | 0 | 0 | 2.91 | 0 |
| Khoá học áp dụng (`I4056:129988;3976:73771`) | text | 2.91 ✗ | 2.5 (text) | 0 | 0 | 2.91 | 0 |
| Tên trung tâm (`I4056:129988;3976:73759`) | text | 0.91 | 2.5 (text) | 0 | 0 | 0.91 | 0 |
| Điều kiện (`I4056:129988;3976:73773`) | container | 0.75 | 2.5 (text) | 0 | 0 | 0.75 | 0 |
| Tối đa 1 voucher cho 1 khoá học (`I4056:129988;3976:73775`) | text | 0.75 | 2.5 (text) | 0 | 0 | 0.75 | 0 |
| Badge (`I4056:129846;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I4056:129861;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I4056:129876;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I4056:129906;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I4056:129921;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I4056:129936;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I4056:129951;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I4056:129966;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I4056:129981;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Container (`I4056:129986;1391:17471`) | container | 0.34 | 2.5 (text) | 0 | 0 | 0.34 | 0 |
| Hiển thị 1 - 10 trong tổng số 80 lớp học (`I4056:129986;1391:17472`) | text | 0.34 | 2.5 (text) | 0 | 0 | 0.34 | 0 |
| Container (`I4056:129986;1391:17473`) | container | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Button (`I4056:129986;1391:17474`) | container | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Trước (`I4056:129986;1391:17475`) | text | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Button (`I4056:129986;1391:17476`) | container | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| 1 (`I4056:129986;1391:17477`) | text | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Button (`I4056:129986;1391:17478`) | container | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| 2 (`I4056:129986;1391:17479`) | text | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Button (`I4056:129986;1391:17486`) | container | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Sau (`I4056:129986;1391:17487`) | text | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
