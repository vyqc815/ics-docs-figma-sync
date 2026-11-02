# Fidelity: ADM-LHN-010100 — Lịch hẹn / Hẹn lớp

- URL: `http://localhost:3108/lich-hen/hen-lop`
- Verdict: **PASS**
- Pixels outside text: **0.012%** differ (limit 0.5%); all pixels: 0.605%; inside text boxes: 2.838% (glyph rendering)
- Boxes: 381/381 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 372, ≤1px: 381, ≤2px: 381, ≤4px: 381, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 1232, 232, 8×32 | 52 | Cell · Độ ưu tiên (`2698:35163`, icon) |
| 1232, 304, 8×32 | 48 | Cell · Độ ưu tiên (`2698:35115`, icon) |
| 1208, 240, 8×24 | 14 | Cell · Độ ưu tiên (`2698:35163`, icon) |
| 1024, 616, 16×8 | 10 | Avatar (`2367:20230`, instance) |
| 1016, 328, 16×8 | 6 | Ellipse 76 (`I2367:20157;1672:16226`, image) |
| 1000, 616, 16×8 | 5 | Ellipse 76 (`I2367:20228;1672:16230`, image) |
| 1008, 424, 16×8 | 4 | Ellipse 76 (`I2367:20194;1672:16230`, image) |
| 1008, 544, 16×16 | 4 | Ellipse 76 (`I2370:26370;1672:16230`, image) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| - Gửi giới thiệu bạn với học viên (lưu ý các học viên đang c (`2370:26363`) | 24.9% |
| Thu gọn (`2370:26035`) | 5% |
| Value (`I4713:129180;2015:36008`) | 4.8% |
| Xem thêm (`2370:26366`) | 3.9% |
| Value (`I2367:19681;2015:36008`) | 3.7% |
| Ngày mai (`I2367:20187;2200:30042`) | 3.7% |
| Ngày mai (`I2370:26359;2200:30042`) | 3.7% |
| Ngày mai (`I2367:20221;2200:30042`) | 3.7% |
| [Buổi 10] CSKH gọi điện thông báo KG HK2 cho các bạn mới vào (`2367:19757`) | 3.5% |
| [Buổi 10] CSKH gọi điện thông báo KG HK2 cho các bạn mới vào (`2367:20225`) | 3.5% |
| [Buổi 10] CSKH gọi điện thông báo KG HK2 cho các bạn mới vào (`2367:20256`) | 3.5% |
| [Buổi 10] CSKH gọi điện thông báo KG HK2 cho các bạn mới vào (`2367:20287`) | 3.5% |
| ID (`I2370:26040;2200:30227`) | 3.4% |
| ID (`I2370:26043;2200:30227`) | 3.4% |
| ID (`I2370:26372;2200:30227`) | 3.4% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frame 427321947 (`2367:19674`) | container | 0.73 | 2.5 (text) | 0 | 0 | -0.73 | 0 |
| Frame 427323979 (`1693:21964`) | container | 0.73 | 2.5 (text) | -0.73 | 0 | 0.73 | 0 |
| Dropdown · Trung tâm (`4713:129180`) | instance | 0.73 | 2.5 (text) | -0.73 | 0 | 0 | 0 |
| Content (`I4713:129180;2015:36007`) | container | 0.73 | 2.5 (text) | -0.73 | 0 | 0 | 0 |
| Value (`I4713:129180;2015:36008`) | text | 0.73 | 2.5 (text) | -0.73 | 0 | 0 | 0 |
| Chevron (`I4713:129180;2015:36012`) | icon | 0.73 | 2.5 (text) | -0.73 | 0 | 0 | 0 |
| Dropdown (`2367:19681`) | instance | 0.73 | 2.5 (text) | -0.73 | 0 | 0.44 | 0 |
| Content (`I2367:19681;2015:36007`) | container | 0.73 | 2.5 (text) | -0.73 | 0 | 0.44 | 0 |
| Value (`I2367:19681;2015:36008`) | text | 0.73 | 2.5 (text) | -0.73 | 0 | 0.44 | 0 |
| Chevron (`I2367:19681;2015:36012`) | icon | 0.3 | 2.5 (text) | -0.3 | 0 | 0 | 0 |
| Dropdown (`2367:19707`) | instance | 0.3 | 2.5 (text) | -0.3 | 0 | 0.3 | 0 |
| Content (`I2367:19707;2015:36007`) | container | 0.3 | 2.5 (text) | -0.3 | 0 | 0.3 | 0 |
| Value (`I2367:19707;2015:36008`) | text | 0.3 | 2.5 (text) | -0.3 | 0 | 0.3 | 0 |
| Tabs (`2245:88769`) | container | 0.13 | 2.5 (text) | 0 | 0 | 0.13 | 0 |
| Atom/Side Tab (`2245:88770`) | instance | 0.13 | 2.5 (text) | 0 | 0 | 0.13 | 0 |
| Container (`I2245:88770;2177:28935`) | container | 0.13 | 2.5 (text) | 0 | 0 | 0.13 | 0 |
| Nhiệm vụ con (`I2245:88770;2177:28936`) | text | 0.13 | 2.5 (text) | 0 | 0 | 0.13 | 0 |
| Atom/Side Tab (`2245:88774`) | instance | 0.13 | 2.5 (text) | 0.13 | 0 | 0 | 0 |
| Container (`I2245:88774;2177:28927`) | container | 0.13 | 2.5 (text) | 0.13 | 0 | 0 | 0 |
| Chi tiết NV (`I2245:88774;2177:28928`) | text | 0.13 | 2.5 (text) | 0.13 | 0 | 0 | 0 |
| Atom/Side Tab (`2245:88777`) | instance | 0.13 | 2.5 (text) | 0.13 | 0 | 0 | 0 |
| Container (`I2245:88777;2177:28927`) | container | 0.13 | 2.5 (text) | 0.13 | 0 | 0 | 0 |
| Chi tiết NV (`I2245:88777;2177:28928`) | text | 0.13 | 2.5 (text) | 0.13 | 0 | 0 | 0 |
| Số đếm (`I2245:88777;3554:65718`) | instance | 0.13 | 2.5 (text) | 0.13 | 0 | 0 | 0 |
| Value (`I2245:88777;3554:65718;1971:8814`) | text | 0.13 | 2.5 (text) | 0.13 | 0 | 0 | 0 |
