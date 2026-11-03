# Fidelity: CD-DM-010040 — Quản lý danh mục / Popup danh mục & cấp độ / Hướng dẫn giảng dạy

- URL: `http://localhost:3000/quan-ly-danh-muc/popup-danh-muc-cap-do/huong-dan-giang-day`
- Verdict: **FAIL**
- Pixels outside text: **0.002%** differ (limit 0.5%); all pixels: 0.373%; inside text boxes: 2.054% (glyph rendering)
- Boxes: 138/141 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 127, ≤1px: 137, ≤2px: 137, ≤4px: 141, >4px: 0

## Failures

- 3 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.84px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 200, 480, 8×16 | 6 | hướng dẫn giảng dạy b2 (`1758:5406`, text) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Tổng kết (`1781:15612`) | 10.8% |
| hướng dẫn giảng dạy c2 (`1758:5412`) | 10.4% |
| hướng dẫn giảng dạy b1 (`1758:5370`) | 10% |
| hướng dẫn giảng dạy b2 (`1758:5406`) | 10% |
| Luyện tập (`1781:15594`) | 5.9% |
| Kiến thức mới (`1781:15576`) | 5% |
| 03 (`1781:15583`) | 4.2% |
| Ví dụ minh họa (`1781:15585`) | 4.1% |
| Khởi động (`1781:15567`) | 4% |
| 04 (`1781:15592`) | 4% |
| Vận dụng (`1781:15603`) | 4% |
| 02 (`1781:15574`) | 3.7% |
| 05 (`1781:15601`) | 3.7% |
| 06 (`1781:15610`) | 3.4% |
| 01 (`1781:15565`) | 3.2% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Container (`1758:5369`) | container | 2.84 ✗ | 2.5 (text) | 0 | 0 | 2.84 | 0 |
| hướng dẫn giảng dạy b1 (`1758:5370`) | text | 2.84 ✗ | 2.5 (text) | 0 | 0 | 2.84 | 0 |
| hướng dẫn giảng dạy b2 (`1758:5406`) | text | 2.84 ✗ | 2.5 (text) | 0 | 0.01 | 2.84 | 0 |
| hướng dẫn giảng dạy c2 (`1758:5412`) | text | 2.09 | 2.5 (text) | 0 | 0.01 | 2.09 | 0 |
| Container (`1781:15605`) | container | 0.98 | 2.5 (text) | 0 | 0 | 0.98 | 0 |
| Container (`1781:15607`) | container | 0.98 | 2.5 (text) | 0 | 0 | 0.98 | 0 |
| Container (`1781:15608`) | container | 0.98 | 2.5 (text) | 0 | 0 | 0.98 | 0 |
| Container (`1781:15611`) | container | 0.98 | 2.5 (text) | 0 | 0 | 0.98 | 0 |
| Tổng kết (`1781:15612`) | text | 0.98 | 2.5 (text) | 0 | 0 | 0.98 | 0 |
| Container (`1781:15596`) | container | 0.67 | 2.5 (text) | 0 | 0 | 0.67 | 0 |
| Container (`1781:15598`) | container | 0.67 | 2.5 (text) | 0 | 0 | 0.67 | 0 |
| Container (`1781:15599`) | container | 0.67 | 2.5 (text) | 0 | 0 | 0.67 | 0 |
| Container (`1781:15602`) | container | 0.67 | 2.5 (text) | 0 | 0 | 0.67 | 0 |
| Vận dụng (`1781:15603`) | text | 0.67 | 2.5 (text) | 0 | 0 | 0.67 | 0 |
| Atom/Side Tab (`1758:5361`) | instance | 0.48 | 2.5 (text) | 0.41 | 0 | 0.48 | 0 |
| Container (`I1758:5361;2177:28899`) | container | 0.48 | 2.5 (text) | 0.41 | 0 | 0.48 | 0 |
| Nhiệm vụ con (`I1758:5361;2177:28900`) | text | 0.48 | 2.5 (text) | 0.41 | 0 | 0.48 | 0 |
| Container (`1781:15587`) | container | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Container (`1781:15589`) | container | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Container (`1781:15590`) | container | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Container (`1781:15593`) | container | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Luyện tập (`1781:15594`) | text | 0.44 | 2.5 (text) | 0 | 0 | 0.44 | 0 |
| Atom/Side Tab (`1758:5358`) | instance | 0.41 | 2.5 (text) | 0 | 0 | 0.41 | 0 |
| Container (`I1758:5358;2177:28891`) | container | 0.41 | 2.5 (text) | 0 | 0 | 0.41 | 0 |
| Chi tiết NV (`I1758:5358;2177:28892`) | text | 0.41 | 2.5 (text) | 0 | 0 | 0.41 | 0 |
