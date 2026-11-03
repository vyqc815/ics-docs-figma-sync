# Fidelity: CD-DM-010040-DK — Quản lý danh mục / Popup danh mục & cấp độ / Hướng dẫn giảng dạy

- URL: `http://localhost:3000/quan-ly-danh-muc/popup-danh-muc-cap-do/huong-dan-giang-day-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.001%** differ (limit 0.5%); all pixels: 0.403%; inside text boxes: 2.223% (glyph rendering)
- Boxes: 138/141 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 127, ≤1px: 137, ≤2px: 137, ≤4px: 141, >4px: 0

## Failures

- 3 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.84px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 200, 480, 8×16 | 6 | hướng dẫn giảng dạy b2 (`4056:145708`, text) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Tổng kết (`4056:145775`) | 13.7% |
| hướng dẫn giảng dạy b2 (`4056:145708`) | 12.7% |
| hướng dẫn giảng dạy c2 (`4056:145713`) | 12.7% |
| Luyện tập (`4056:145757`) | 7.4% |
| Kiến thức mới (`4056:145739`) | 6.7% |
| hướng dẫn giảng dạy b1 (`4056:145685`) | 5.4% |
| Ví dụ minh họa (`4056:145748`) | 5.2% |
| Khởi động (`4056:145729`) | 5.1% |
| Vận dụng (`4056:145766`) | 4.8% |
| 03 (`4056:145746`) | 4.5% |
| 05 (`4056:145764`) | 4.5% |
| 04 (`4056:145755`) | 4% |
| 02 (`4056:145737`) | 3.7% |
| 06 (`4056:145773`) | 3.7% |
| 01 (`4056:145727`) | 3.2% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Container (`4056:145684`) | container | 2.84 ✗ | 2.5 (text) | 0 | 0 | 2.84 | 0 |
| hướng dẫn giảng dạy b1 (`4056:145685`) | text | 2.84 ✗ | 2.5 (text) | 0 | 0 | 2.84 | 0 |
| hướng dẫn giảng dạy b2 (`4056:145708`) | text | 2.84 ✗ | 2.5 (text) | 0 | 0.01 | 2.84 | 0 |
| hướng dẫn giảng dạy c2 (`4056:145713`) | text | 2.09 | 2.5 (text) | 0 | 0.01 | 2.09 | 0 |
| Container (`4056:145768`) | container | 0.98 | 2.5 (text) | 0 | 0 | 0.98 | 0 |
| Container (`4056:145770`) | container | 0.98 | 2.5 (text) | 0 | 0 | 0.98 | 0 |
| Container (`4056:145771`) | container | 0.98 | 2.5 (text) | 0 | 0 | 0.98 | 0 |
| Container (`4056:145774`) | container | 0.98 | 2.5 (text) | 0 | 0 | 0.98 | 0 |
| Tổng kết (`4056:145775`) | text | 0.98 | 2.5 (text) | 0 | 0 | 0.98 | 0 |
| Container (`4056:145759`) | container | 0.67 | 2.5 (text) | 0 | 0 | 0.67 | 0 |
| Container (`4056:145761`) | container | 0.67 | 2.5 (text) | 0 | 0 | 0.67 | 0 |
| Container (`4056:145762`) | container | 0.67 | 2.5 (text) | 0 | 0 | 0.67 | 0 |
| Container (`4056:145765`) | container | 0.67 | 2.5 (text) | 0 | 0 | 0.67 | 0 |
| Vận dụng (`4056:145766`) | text | 0.67 | 2.5 (text) | 0 | 0 | 0.67 | 0 |
| Atom/Side Tab (`4056:145676`) | instance | 0.48 | 2.5 (text) | 0.41 | 0 | 0.48 | 0 |
| Container (`I4056:145676;2177:28899`) | container | 0.48 | 2.5 (text) | 0.41 | 0 | 0.48 | 0 |
| Nhiệm vụ con (`I4056:145676;2177:28900`) | text | 0.48 | 2.5 (text) | 0.41 | 0 | 0.48 | 0 |
| Container (`4056:145750`) | container | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Container (`4056:145752`) | container | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Container (`4056:145753`) | container | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Container (`4056:145756`) | container | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Luyện tập (`4056:145757`) | text | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Atom/Side Tab (`4056:145673`) | instance | 0.41 | 2.5 (text) | 0 | 0 | 0.41 | 0 |
| Container (`I4056:145673;2177:28891`) | container | 0.41 | 2.5 (text) | 0 | 0 | 0.41 | 0 |
| Chi tiết NV (`I4056:145673;2177:28892`) | text | 0.41 | 2.5 (text) | 0 | 0 | 0.41 | 0 |
