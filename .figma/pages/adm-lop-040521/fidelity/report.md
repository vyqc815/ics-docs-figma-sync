# Fidelity: ADM-LOP-040521 — Lớp học / Cài đặt / Lịch dạy / Popup thêm lịch dạy linh hoạt / Trùng lịch cố định

- URL: `http://localhost:3000/frames/adm-lop-040521`
- Verdict: **PASS**
- Pixels outside text: **0.01%** differ (limit 0.5%); all pixels: 0.376%; inside text boxes: 1.437% (glyph rendering)
- Boxes: 80/80 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 80, ≤1px: 80, ≤2px: 80, ≤4px: 80, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 440, 136, 16×24 | 6 | Dot (`I2911:43150;2911:43098`, shape) |
| 40, 136, 16×16 | 5 | Subtract (`I2911:43119;1739:32801`, icon) |
| 160, 136, 16×16 | 5 | Subtract (`I2911:43126;1739:32359`, icon) |
| 112, 144, 8×8 | 5 | Action Icon (`I2911:43119;1739:32804`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| 18:30 (`I2911:43126;1739:32361`) | 7% |
| 18:30 (`I2911:43119;1739:32803`) | 5.3% |
| 31.01.2026 - 06.01.2026 (`I2911:43109;2008:48177`) | 5% |
| Nhiệm vụ con (`I2911:43108;2177:28936`) | 4% |
| Helper (`2911:43159`) | 3.4% |
| Giờ kết thúc (`2911:43125`) | 2.9% |
| Giờ bắt đầu (`2911:43118`) | 1.7% |
| Thứ 4 (`2911:43135`) | 0.3% |
| Thứ 2 (`2911:43131`) | 0.2% |
| Thứ 3 (`2911:43133`) | 0.1% |
| Thứ 5 (`2911:43137`) | 0.1% |
| Thứ 7 (`2911:43141`) | 0.1% |
| Button (`I2911:43160;2514:153361;1048:1232`) | 0.1% |
| Button (`I2911:43160;2514:153363;1048:1230`) | 0.1% |
| Title (`I2911:43103;2514:153358`) | 0% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frame 427326015 (`2911:43115`) | container | 0.5 | 2.5 (text) | 0 | 0 | -0.5 | 0 |
| Dash Separator:margin:align-flex-end (`2911:43120`) | container | 0.5 | 2.5 (text) | 0 | 0 | -0.5 | 0 |
| Dash Separator:margin (`2911:43121`) | container | 0.5 | 2.5 (text) | 0 | 0 | -0.5 | 0 |
| – (`2911:43122`) | text | 0.5 | 2.5 (text) | 0 | 0 | -0.5 | 0 |
| Frame 427326014 (`2911:43123`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0 | 0 |
| Label (`2911:43124`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0 | 0 |
| Giờ kết thúc (`2911:43125`) | text | 0.5 | 2.5 (text) | -0.5 | 0 | 0.09 | 0 |
| Time (`2911:43126`) | instance | 0.5 | 2.5 (text) | -0.5 | 0 | 0 | 0 |
| Container (`I2911:43126;1739:32358`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0 | 0 |
| Subtract (`I2911:43126;1739:32359`) | icon | 0.5 | 2.5 (text) | -0.5 | 0 | 0 | 0 |
| Container (`I2911:43126;1739:32360`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0 | 0 |
| 18:30 (`I2911:43126;1739:32361`) | text | 0.5 | 2.5 (text) | -0.5 | 0 | 0 | 0 |
| Action Icon (`I2911:43126;1739:32362`) | icon | 0.5 | 2.5 (text) | -0.5 | 0 | 0 | 0 |
| Vector 2 (`2911:43127`) | icon | 0.5 | 2.5 (text) | -0.5 | 0 | 0 | 0 |
| Frame 1171274922 (`2911:43128`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0.5 | 0 |
| Frame 427323673 (`2911:43129`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0.5 | 0 |
| Frame 427323677 (`2911:43130`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0.05 | 0 |
| Thứ 2 (`2911:43131`) | text | 0.5 | 2.5 (text) | -0.5 | 0 | 0.05 | 0 |
| Frame 427325137 (`2911:43144`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0.5 | 0 |
| Component 153 (`2911:43145`) | container | 0.5 | 2.5 (text) | -0.5 | 0 | 0.05 | 0 |
| Radio (`2911:43146`) | instance | 0.47 | 2.5 (text) | -0.47 | 0 | 0 | 0 |
| Frame 427323684 (`2911:43132`) | container | 0.45 | 2.5 (text) | -0.45 | 0 | 0.07 | 0 |
| Thứ 3 (`2911:43133`) | text | 0.45 | 2.5 (text) | -0.45 | 0 | 0.07 | 0 |
| Component 160 (`2911:43147`) | container | 0.45 | 2.5 (text) | -0.45 | 0 | 0.07 | 0 |
| Radio (`2911:43148`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
