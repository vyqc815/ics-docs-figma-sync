# Fidelity: ADM-MV-010000 — Move video / Xác minh Gmail

- URL: `http://localhost:3108/move-video/xac-minh-gmail`
- Verdict: **PASS**
- Pixels outside text: **0.073%** differ (limit 0.5%); all pixels: 0.084%; inside text boxes: 0.198% (glyph rendering)
- Boxes: 98/98 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 98, ≤1px: 98, ≤2px: 98, ≤4px: 98, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 272, 96, 48×48 | 652 | image (`2391:66022`, icon) |
| 760, 368, 64×88 | 168 | Empty State / Gmail (`2619:203719`, icon) |
| 848, 432, 40×24 | 15 | Empty State / Gmail (`2619:203719`, icon) |
| 728, 344, 16×8 | 4 | Empty State / Gmail (`2619:203719`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I2409:148203;1048:1230`) | 0.7% |
| Label (`I4915:240882;4899:199748;2245:87768`) | 0.6% |
| Xác minh Gmail (`2391:66060`) | 0.5% |
| Label (`I4915:240882;4899:199759;2245:87858`) | 0.5% |
| Admin (`2391:66025`) | 0.4% |
| Label (`I4915:240882;4899:199761;2245:87820`) | 0.4% |
| Label (`I4915:240882;4899:199764;2245:87820`) | 0.4% |
| Label (`I4915:240882;4899:199737;2245:87820`) | 0.3% |
| Label (`I4915:240882;4899:199754;2245:87820`) | 0.2% |
| Label (`I4915:240882;4899:199757;2245:87829`) | 0.2% |
| Label (`I4915:240882;4899:199760;2245:87864`) | 0.1% |
| Label (`I4915:240882;4899:199767;2245:87820`) | 0.1% |
| Jone Aly (`2391:66024`) | 0% |
| Nhấn nút xác minh để lấy file trên GG Drive (`2391:66061`) | 0% |
| v20.07.2026_17:30 (`I4915:240882;4915:215366`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frame 1171274926 (`I4915:240882;4915:215367`) | icon | 0.02 | 2.5 (text) | 0 | -0.02 | 0 | 0 |
| Left: ICS Logo & Toggle (`I4915:240882;4915:215352`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Container (`I4915:240882;4915:215353`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Navigation / Sidebar Menu / Light (`I4915:240882;4915:215354`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| v20.07.2026_17:30 (`I4915:240882;4915:215366`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| BG (`2391:66019`) | container | 0 | 1 | 0 | 0 | 0 | 0 |
| Frame 427323976 (`2391:66020`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Frame 427321837 (`2391:66021`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| image (`2391:66022`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Frame 427320146 (`2391:66023`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Jone Aly (`2391:66024`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Admin (`2391:66025`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Frame 427323942 (`2391:66026`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Empty State / Gmail (`2619:203719`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Frame 427323938 (`2391:66058`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Frame 427323977 (`2391:66059`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Xác minh Gmail (`2391:66060`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhấn nút xác minh để lấy file trên GG Drive (`2391:66061`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Button (`2409:148203`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Button (`I2409:148203;1048:1230`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Sidebar · MENU - ADMIN (`4915:240882`) | instance | 0 | 1 | 0 | 0 | 0 | 0 |
| Frame 427322079 (`I4915:240882;4915:215302`) | icon | 0 | 1 | 0 | 0 | 0 | 0 |
| Nav Items (`I4915:240882;4915:215369`) | container | 0 | 1 | 0 | 0 | 0 | 0 |
| MENU - ADMIN (Tổng) (`I4915:240882;4915:215370`) | container | 0 | 1 | 0 | 0 | 0 | 0 |
| Card Menu v2 (Test) (`I4915:240882;4899:199737`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
