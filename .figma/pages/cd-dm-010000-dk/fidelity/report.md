# Fidelity: CD-DM-010000-DK — Quản lý danh mục

- URL: `http://localhost:3108/quan-ly-danh-muc-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.775%** differ (limit 0.5%); all pixels: 1.905%; inside text boxes: 4.769% (glyph rendering)
- Boxes: 173/243 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 172, ≤1px: 172, ≤2px: 173, ≤4px: 173, >4px: 70

## Failures

- 0.775% of non-text pixels differ (limit 0.5%).
- 4 text boxes differ in more than 35% of their pixels (check font, weight, color).
- 70 elements are off by more than their limit (1px, 2.5px for text-driven; worst 19px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 1120, 472, 32×96 | 1490 | Row (`4056:145416`, container) |
| 1336, 576, 64×88 | 1282 | Pages (`5035:378672`, container) |
| 352, 544, 144×24 | 743 | Row (`4056:145416`, container) |
| 352, 496, 144×24 | 733 | Row (`4056:145404`, container) |
| 264, 640, 152×24 | 445 | Card Footer · Thêm mới & Phân trang (`5035:378653`, container) |
| 1168, 472, 24×88 | 403 | Row (`4056:145416`, container) |
| 696, 544, 136×16 | 399 | Row (`4056:145416`, container) |
| 1120, 344, 32×40 | 393 | Value (`I4056:145397;2706:40462`, text) |
| 696, 496, 136×16 | 388 | Row (`4056:145404`, container) |
| 280, 600, 176×16 | 375 | Card Footer · Thêm mới & Phân trang (`5035:378653`, container) |
| 352, 368, 144×16 | 290 | Row (`4056:145391`, container) |
| 272, 544, 64×16 | 282 | Row (`4056:145416`, container) |
| 272, 496, 64×16 | 278 | Row (`4056:145404`, container) |
| 1208, 544, 48×16 | 240 | Row (`4056:145416`, container) |
| 1208, 496, 48×24 | 232 | Row (`4056:145404`, container) |
| 696, 456, 32×16 | 136 | Row (`4056:145404`, container) |
| 1160, 376, 136×16 | 130 | Row (`4056:145391`, container) |
| 1352, 480, 16×32 | 112 | Button (`4056:145412`, icon) |
| 1352, 520, 16×40 | 105 | Button (`4056:145424`, icon) |
| 1352, 352, 16×24 | 94 | Button (`4056:145400`, icon) |
| 280, 368, 56×8 | 90 | ID Badge (`4056:145392`, instance) |
| 1272, 480, 16×32 | 60 | Atom/Status (`4056:145411`, instance) |
| 1384, 624, 8×32 | 56 | Trang › (`5035:378668`, icon) |
| 1312, 352, 16×24 | 48 | ARROW DETAIL (`4056:145403`, icon) |
| 1312, 480, 16×32 | 48 | ARROW DETAIL (`4056:145415`, icon) |
| 1312, 528, 16×32 | 48 | ARROW DETAIL (`4056:145427`, icon) |
| 1304, 624, 16×32 | 42 | Trang ‹ (`5035:378656`, icon) |
| 1272, 528, 16×8 | 36 | SVG (`I4056:145423;1474:15130`, icon) |
| 1272, 544, 16×16 | 28 | Row (`4056:145416`, container) |
| 56, 16, 16×32 | 8 | Navigation / Sidebar Menu / Light (`4056:145254`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| 1 (`5035:378659`) | 90% |
| Value (`I4056:145409;2706:40462`) | 85.7% |
| Value (`I4056:145421;2706:40462`) | 81.8% |
| Value (`I4056:145397;2706:40462`) | 58.2% |
| ID (`I4056:145392;1994:25850`) | 26.8% |
| ID (`I4056:145405;1994:25852`) | 23.5% |
| ID (`I4056:145417;1994:25852`) | 23% |
| Label (`I4056:145274;2245:87774`) | 16.6% |
| Vô hiệu (`I4056:145411;1474:15129`) | 15.3% |
| Vô hiệu (`I4056:145423;1474:15129`) | 15% |
| Khoá Học Tổng Hợp A2 (`4056:145393`) | 13.8% |
| Khóa Học Tổng Hợp B1 (`4056:145406`) | 11.2% |
| Khóa Học Tổng Hợp B1 (`4056:145418`) | 10.6% |
| Label (`I4056:145284;2245:87829`) | 8.6% |
| Mô tả danh mục (`4056:145359`) | 7.2% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Section - CourseTableCard (`4056:145350`) | container | 19 ✗ | 2.5 (text) | 0 | 0 | 0 | 19 |
| Container (`4056:145351`) | container | 19 ✗ | 2.5 (text) | 0 | 0 | 0 | 19 |
| Table (`4056:145352`) | container | 19 ✗ | 2.5 (text) | 0 | 0 | 0 | 19 |
| Body (`4056:145365`) | container | 19 ✗ | 2.5 (text) | 0 | 0 | 0 | 19 |
| Row (`4056:145391`) | container | 19 ✗ | 2.5 (text) | 0 | 0 | 0 | 19 |
| Item (`4056:145394`) | container | 19 ✗ | 2.5 (text) | 0 | 0 | 0 | 19 |
| - Mở Rộng Ngữ Pháp A2 Cốt Lõi: Weil, Perfekt, Wenn, Dass, Ko (`4056:145395`) | text | 19 ✗ | 2.5 (text) | 0 | 0 | 0 | 19 |
| Row (`4056:145404`) | container | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| ID Badge (`4056:145405`) | instance | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| ID (`I4056:145405;1994:25852`) | text | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Khóa Học Tổng Hợp B1 (`4056:145406`) | text | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Nhập mô tả khoá học (`4056:145407`) | text | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Data (`4056:145408`) | container | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Atom/Number Badge (`4056:145409`) | instance | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Value (`I4056:145409;2706:40462`) | text | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Data (`4056:145410`) | container | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Atom/Status (`4056:145411`) | instance | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Container (`I4056:145411;1474:15124`) | container | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| icon (`I4056:145411;1474:15125`) | icon | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Margin (`I4056:145411;1474:15127`) | container | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Container (`I4056:145411;1474:15128`) | container | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Vô hiệu (`I4056:145411;1474:15129`) | text | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| SVG (`I4056:145411;1474:15130`) | icon | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| ARROW DETAIL (`4056:145415`) | icon | 19 ✗ | 2.5 (text) | 0 | 19 | 0 | 0 |
| Button (`4056:145412`) | icon | 19 ✗ | 2.5 (text) | 0 | 19 | -0.01 | 0 |
