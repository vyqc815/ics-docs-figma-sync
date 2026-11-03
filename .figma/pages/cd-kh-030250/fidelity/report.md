# Fidelity: CD-KH-030250 — Học kỳ / Bài học / Popup chi tiết bài học (bản đầy đủ)

- URL: `http://localhost:3000/hoc-ky/bai-hoc/popup-chi-tiet-bai-hoc-ban-day-du`
- Verdict: **FAIL**
- Pixels outside text: **0.101%** differ (limit 0.5%); all pixels: 2.179%; inside text boxes: 7.243% (glyph rendering)
- Boxes: 170/179 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 127, ≤1px: 128, ≤2px: 170, ≤4px: 179, >4px: 0

## Failures

- 9 elements are off by more than their limit (1px, 2.5px for text-driven; worst 4px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 872, 896, 96×16 | 352 | Atom/Button (`I2808:52098;2514:153371`, instance) |
| 872, 872, 96×16 | 345 | Button (`I2808:52098;2514:153371;1048:1230`, text) |
| 32, 592, 16×24 | 58 | Icon · Lịch (`5138:164633`, icon) |
| 96, 592, 24×24 | 58 | Icon · Thời gian (`5138:164638`, icon) |
| 80, 800, 16×16 | 45 | Chevron (`6006:129014`, icon) |
| 96, 528, 16×8 | 21 | Chevron (`6006:129011`, icon) |
| 56, 816, 16×8 | 8 | Ví dụ bài học 3 · Xem · mở rộng (`5138:164587`, container) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I2808:52098;2514:153371;1048:1230`) | 23.1% |
| Thu gọn (`6006:129013`) | 19.2% |
| ÔN TẬP HK I – HK II (BUỔI 1) (`2808:52027`) | 12.2% |
| Mô tả (`5138:165001`) | 11% |
| Ví dụ bài học 3 (`5138:164593`) | 9.2% |
| Thời gian (`I5138:164597;3667:80653`) | 8.2% |
| 90 phút (`5138:164640`) | 7.2% |
| 2 buổi (`5138:164636`) | 6.6% |
| Xem thêm (`6006:129010`) | 6.5% |
| Nội dung (`I4098:92624;868:21315`) | 5% |
| Mô tả (`5138:164920`) | 4.3% |
| Badge (`I2808:52029;2808:42802`) | 2.9% |
| Nội dung (`I2808:52040;868:21315`) | 1.3% |
| Mô tả (`2808:52059`) | 1.2% |
| Nội dung (`I2808:52037;497:25617`) | 1.1% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Body (`2808:52022`) | container | 4 ✗ | 2.5 (text) | 0 | 0 | 0 | 4 |
| Nội dung chính (`3004:75757`) | container | 4 ✗ | 2.5 (text) | 0 | 0 | 0 | 4 |
| Frame 427321967 (`2808:52041`) | container | 4 ✗ | 2.5 (text) | 0 | 0 | 0 | 4 |
| Xem thêm / Thu gọn (`6006:129012`) | container | 4 ✗ | 2.5 (text) | 0 | 4 | 0 | 0 |
| Thu gọn (`6006:129013`) | text | 4 ✗ | 2.5 (text) | 0 | 4 | 0 | 0 |
| Chevron (`6006:129014`) | icon | 4 ✗ | 2.5 (text) | 0 | 4 | 0 | 0 |
| Popup/Footer (`2808:52098`) | instance | 4 ✗ | 2.5 (text) | 0 | 4 | 0 | 0 |
| Atom/Button (`I2808:52098;2514:153371`) | instance | 4 ✗ | 2.5 (text) | 0 | 4 | 0 | 0 |
| Button (`I2808:52098;2514:153371;1048:1230`) | text | 4 ✗ | 2.5 (text) | 0 | 4 | 0 | 0 |
| Ví dụ bài học 2 · Xem · thu gọn (`5138:164553`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Action Cards Accordion List (`5138:164849`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Mô tả (`5138:164850`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| HorizontalBorder (`5138:164851`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Container (`5138:164852`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Container (`5138:164854`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Frame 1171274945 (`5138:164855`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| HorizontalBorder (`5138:164916`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Container (`5138:164917`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Container (`5138:164919`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Mô tả (`5138:164920`) | text | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Xem thêm / Thu gọn (`6006:129009`) | container | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Xem thêm (`6006:129010`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Chevron (`6006:129011`) | icon | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Ví dụ bài học 3 · Xem · mở rộng (`5138:164587`) | container | 2 | 2.5 (text) | 0 | 2 | 0 | 2 |
| Section Title: Về Training tại PLS (`5138:164588`) | container | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
