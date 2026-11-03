# Fidelity: CD-KH-050210 — Kỹ năng (S6) / Đọc / Chi tiết bài đọc (drawer)

- URL: `http://localhost:3000/ky-nang-s6/doc/chi-tiet-bai-doc-drawer`
- Verdict: **FAIL**
- Pixels outside text: **0.003%** differ (limit 0.5%); all pixels: 0.083%; inside text boxes: 0.266% (glyph rendering)
- Boxes: 492/493 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 485, ≤1px: 489, ≤2px: 492, ≤4px: 492, >4px: 1

## Failures

- 1 elements are off by more than their limit (1px, 2.5px for text-driven; worst 14.5px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I6935:379369;6579:362135`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I6935:379369;6579:362141;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I6935:379369;6579:362155;2245:87904`, icon) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`I6935:379369;6579:362192`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I6935:379173;1725:17090`) | 7.9% |
| Label (`I6935:379369;6579:362143;2245:87908`) | 7.8% |
| Button (`I6935:379040;1048:1240`) | 6.2% |
| · chọn từ trong Từ vựng (S1) của khoá (`6935:379507`) | 4% |
| Đọc (`6935:379030`) | 2.2% |
| 09. Mua sắm (`6935:379255`) | 2.1% |
| Đắc Nhân (`I6935:379419;4019:24214`) | 1.6% |
| Label (`I6935:379369;6579:362150;2245:87908`) | 1.4% |
| 1 (`6935:379183`) | 1.2% |
| Label (`I6935:379369;6579:362156;2245:87908`) | 1.2% |
| Từ vựng liên quan (`6935:379505`) | 1% |
| CD (`I6935:379418;2008:31885`) | 0.8% |
| Label (`I6935:379369;6579:362142;2245:87908`) | 0.7% |
| Button (`I6935:379608;1048:1232`) | 0.7% |
| Label (`I6935:379031;2015:30513`) | 0.6% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Label (`I6935:379173;1725:17090`) | text | 14.5 ✗ | 2.5 (text) | 14.5 | 0 | 0 | 0 |
| Label (`6935:379504`) | container | 1.5 | 2.5 (text) | 0 | 0 | 1.5 | 0 |
| Từ vựng liên quan (`6935:379505`) | text | 1.08 | 2.5 (text) | 0 | 0 | 1.08 | 0 |
| · chọn từ trong Từ vựng (S1) của khoá (`6935:379507`) | text | 1.08 | 2.5 (text) | 1.08 | 0 | 0.42 | 0 |
| spacer (`6935:379264`) | container | 1 | 2.5 (text) | 0 | 0 | 0 | -1 |
| Molecule/Add New Bar (`6935:379265`) | instance | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Placeholder (`I6935:379265;5056:365853`) | text | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Action Button (`I6935:379265;5056:365854`) | icon | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Atom/Input (`6935:379037`) | instance | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Input (`I6935:379037;2808:42276`) | container | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Container (`I6935:379037;2808:42277`) | container | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Tìm nội dung... (`I6935:379037;2808:42278`) | text | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| DD/Molecule/Trigger (`6935:379038`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Content (`I6935:379038;2015:31179`) | container | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Value (`I6935:379038;2015:31180`) | text | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Chevron (`I6935:379038;2015:31183`) | icon | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| DD/Molecule/Trigger (`6935:379039`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Content (`I6935:379039;2015:31179`) | container | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Value (`I6935:379039;2015:31180`) | text | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Chevron (`I6935:379039;2015:31183`) | icon | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Atom/Button (`6935:379040`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0.41 | 0 |
| Button (`I6935:379040;1048:1240`) | text | 0.41 | 2.5 (text) | -0.41 | 0 | 0.41 | 0 |
| Lưu = sửa bản ghi thư viện; mọi khoá dùng bài này thấy nội d (`6935:379607`) | text | 0.27 | 2.5 (text) | 0 | 0 | -0.27 | 0 |
| Atom/Button (`6935:379608`) | instance | 0.27 | 2.5 (text) | -0.27 | 0 | 0 | 0 |
| Button (`I6935:379608;1048:1232`) | text | 0.27 | 2.5 (text) | -0.27 | 0 | 0 | 0 |
