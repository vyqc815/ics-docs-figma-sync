# Fidelity: ADM-TT-010000 — Tương tác / Danh sách log

- URL: `http://localhost:3000/tuong-tac/danh-sach-log`
- Verdict: **PASS**
- Pixels outside text: **0.005%** differ (limit 0.5%); all pixels: 0.375%; inside text boxes: 1.994% (glyph rendering)
- Boxes: 273/273 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 272, ≤1px: 273, ≤2px: 273, ≤4px: 273, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 1120, 624, 24×32 | 18 | Ellipse 76 (`I4273:155801;2409:141177`, image) |
| 1120, 576, 24×8 | 14 | Ellipse 76 (`I4273:155790;2409:141177`, image) |
| 1128, 592, 16×8 | 4 | Ellipse 76 (`I4273:155790;2409:141177`, image) |
| 904, 632, 8×16 | 4 | Frame 427321966 (`I4273:155797;1910:16476`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Thêm Tráo Thẻ (`4273:155804`) | 6.2% |
| Hệ thống (`I4273:155790;2409:141178`) | 5.7% |
| Đổi Trạng Thái (`4273:155793`) | 5.7% |
| Hệ thống (`I4273:155801;2409:141178`) | 5.7% |
| Thu gọn (`4273:155749`) | 5% |
| Chăm Sóc Lớp (`4273:155782`) | 5% |
| Giúp học viên thực hành theo dõi lớp học, nắm được tình trạn (`4273:155746`) | 4.5% |
| Thuy SP đã đổi trạng thái lớp NS003 (`4273:155795`) | 4.4% |
| Thuy SP đã Follow lớp NS0002 (`4273:155784`) | 4.2% |
| MÔ TẢ (`4273:155715`) | 4% |
| NGÀY LOG (`4273:155719`) | 3.9% |
| Hệ thống (`I4273:155812;2409:141178`) | 3.9% |
| 7 ngày (40 ca) (`I4273:155788;1350:12808`) | 3.2% |
| 7 ngày (40 ca) (`I4273:155799;1350:12808`) | 3.2% |
| 7 ngày (40 ca) (`I4273:155810;1350:12808`) | 3.2% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MÔ TẢ (`4273:155715`) | text | 0.94 | 2.5 (text) | 0 | 0 | 0.94 | 0 |
| Chăm Sóc Lớp (`4273:155782`) | text | 0.17 | 2.5 (text) | 0 | 0 | 0.17 | 0 |
| Atom/Object Chip (`4273:155779`) | instance | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Tittle (`I4273:155779;2409:141174`) | container | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Frame 427323652 (`I4273:155779;2409:141175`) | container | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Hệ thống (`I4273:155779;2409:141178`) | text | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Atom/Object Chip (`4273:155790`) | instance | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Tittle (`I4273:155790;2409:141174`) | container | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Frame 427323652 (`I4273:155790;2409:141175`) | container | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Hệ thống (`I4273:155790;2409:141178`) | text | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Atom/Object Chip (`4273:155801`) | instance | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Tittle (`I4273:155801;2409:141174`) | container | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Frame 427323652 (`I4273:155801;2409:141175`) | container | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Hệ thống (`I4273:155801;2409:141178`) | text | 0.11 | 2.5 (text) | 0 | 0 | 0.11 | 0 |
| Đổi Trạng Thái (`4273:155793`) | text | 0.05 | 2.5 (text) | 0 | 0 | 0.05 | 0 |
| Frame 1171274926 (`I4915:252614;4915:219245`) | icon | 0.02 | 2.5 (text) | 0 | -0.02 | 0 | 0 |
| Left: ICS Logo & Toggle (`I4915:252614;4915:219230`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Container (`I4915:252614;4915:219231`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Navigation / Sidebar Menu / Light (`I4915:252614;4915:219232`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| v20.07.2026_17:30 (`I4915:252614;4915:219244`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| MainWorkspace (`4273:155699`) | container | 0 | 1 | 0 | 0 | 0 | 0 |
| Content (`4273:155700`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Frame 427321958 (`4273:155701`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Danh sách log (`4273:155702`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Filter Pills Toolbar (`4273:155703`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
