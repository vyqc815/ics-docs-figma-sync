# Fidelity: ADM-VC-010001 — Voucher / Danh sách voucher / Xem trước voucher

- URL: `http://localhost:3000/voucher/danh-sach-voucher/xem-truoc-voucher`
- Verdict: **FAIL**
- Pixels outside text: **0.003%** differ (limit 0.5%); all pixels: 0.185%; inside text boxes: 1.059% (glyph rendering)
- Boxes: 331/333 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 328, ≤1px: 331, ≤2px: 331, ≤4px: 333, >4px: 0

## Failures

- 2 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.91px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 952, 392, 32×16 | 24 | Logo (`I3977:76189;3976:73698`, icon) |
| 1056, 528, 8×16 | 8 | Khoá học áp dụng (`I3977:76189;3976:73771`, text) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Khoá học áp dụng (`I3977:76189;3976:73771`) | 16.8% |
| Tên trung tâm (`I3977:76189;3976:73759`) | 5.1% |
| Mã người nhận (`3977:74988`) | 4.8% |
| 2 (`I3977:75089;1391:17479`) | 4.5% |
| Sau (`I3977:75089;1391:17487`) | 4% |
| 1 (`I3977:75089;1391:17477`) | 3.6% |
| Mã voucher (`3977:75016`) | 3% |
| Mã voucher (`3977:75001`) | 2.9% |
| Mã voucher (`3977:75031`) | 2.9% |
| Trạng thái (`3977:74933`) | 2.8% |
| Mã voucher (`3977:74956`) | 2.8% |
| Ngày hết hạn (`3977:74931`) | 2.6% |
| Mã voucher (`3977:74941`) | 2.6% |
| Mã voucher (`3977:75046`) | 2.4% |
| Mã voucher (`3977:74986`) | 2.3% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Áp dụng (`I3977:76189;3976:73769`) | container | 2.91 ✗ | 2.5 (text) | 0 | 0 | 2.91 | 0 |
| Khoá học áp dụng (`I3977:76189;3976:73771`) | text | 2.91 ✗ | 2.5 (text) | 0 | 0 | 2.91 | 0 |
| Tên trung tâm (`I3977:76189;3976:73759`) | text | 0.91 | 2.5 (text) | 0 | 0 | 0.91 | 0 |
| Điều kiện (`I3977:76189;3976:73773`) | container | 0.75 | 2.5 (text) | 0 | 0 | 0.75 | 0 |
| Tối đa 1 voucher cho 1 khoá học (`I3977:76189;3976:73775`) | text | 0.75 | 2.5 (text) | 0 | 0 | 0.75 | 0 |
| Badge (`I3977:74949;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I3977:74964;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I3977:74979;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I3977:75009;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I3977:75024;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I3977:75039;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I3977:75054;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I3977:75069;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Badge (`I3977:75084;1048:1253`) | text | 0.42 | 2.5 (text) | -0.2 | 0 | 0.42 | 0 |
| Container (`I3977:75089;1391:17471`) | container | 0.34 | 2.5 (text) | 0 | 0 | 0.34 | 0 |
| Hiển thị 1 - 10 trong tổng số 80 lớp học (`I3977:75089;1391:17472`) | text | 0.34 | 2.5 (text) | 0 | 0 | 0.34 | 0 |
| Container (`I3977:75089;1391:17473`) | container | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Button (`I3977:75089;1391:17474`) | container | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Trước (`I3977:75089;1391:17475`) | text | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Button (`I3977:75089;1391:17476`) | container | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| 1 (`I3977:75089;1391:17477`) | text | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Button (`I3977:75089;1391:17478`) | container | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| 2 (`I3977:75089;1391:17479`) | text | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Button (`I3977:75089;1391:17486`) | container | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
| Sau (`I3977:75089;1391:17487`) | text | 0.34 | 2.5 (text) | 0.34 | 0 | 0 | 0 |
