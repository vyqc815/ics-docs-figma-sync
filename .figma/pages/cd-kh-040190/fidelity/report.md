# Fidelity: CD-KH-040190 — Kiến thức (S1) / Từ vựng / Soát lỗi bằng AI

- URL: `http://localhost:3000/kien-thuc-s1/tu-vung/soat-loi-bang-ai`
- Verdict: **PASS**
- Pixels outside text: **0.004%** differ (limit 0.5%); all pixels: 0.149%; inside text boxes: 0.908% (glyph rendering)
- Boxes: 350/350 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 322, ≤1px: 334, ≤2px: 350, ≤4px: 350, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I5003:17146;4901:216158`, icon) |
| 1376, 856, 24×24 | 16 | Action Button (`I5003:17042;5056:365854`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I5003:17146;4901:216176;2245:87904`, icon) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`I5003:17146;4901:216208`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Từ vựng (`5003:16777`) | 12.8% |
| Chi tiết NV (`I5003:16767;2177:28928`) | 9.1% |
| Chi tiết NV (`I5003:16765;2177:28928`) | 8.3% |
| Tất cả cụm (`5003:16971`) | 8.1% |
| Label (`I5003:17146;4901:216166;2245:87908`) | 7.8% |
| Nhiệm vụ con (`I5003:16764;2177:28936`) | 7% |
| Chi tiết NV (`I5003:16769;2177:28928`) | 7% |
| Chi tiết NV (`I5003:16766;2177:28928`) | 6.4% |
| Button (`I5003:16788;1048:1240`) | 4.8% |
| ? (`6012:44623`) | 4.4% |
| ? (`6012:44627`) | 4.4% |
| Label (`I5003:16778;2015:30513`) | 4.1% |
| Tính từ (`5003:17881`) | 3.6% |
| Button (`I5003:16787;1048:1240`) | 3.4% |
| Button (`I5003:17903;2159:26218`) | 2.5% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tab · Từ vựng (`5003:16764`) | instance | 1.45 | 2.5 (text) | 0 | 0 | 1.45 | 0 |
| Container (`I5003:16764;2177:28935`) | container | 1.45 | 2.5 (text) | 0 | 0 | 1.45 | 0 |
| Nhiệm vụ con (`I5003:16764;2177:28936`) | text | 1.45 | 2.5 (text) | 0 | 0 | 1.45 | 0 |
| Tab · Ngữ pháp (`5003:16765`) | instance | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Container (`I5003:16765;2177:28927`) | container | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Chi tiết NV (`I5003:16765;2177:28928`) | text | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Tab · Mẫu câu (`5003:16766`) | instance | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Container (`I5003:16766;2177:28927`) | container | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Chi tiết NV (`I5003:16766;2177:28928`) | text | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Tab · Hanzi (`5003:16767`) | instance | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Container (`I5003:16767;2177:28927`) | container | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Chi tiết NV (`I5003:16767;2177:28928`) | text | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Tab · Phát âm (`5003:16769`) | instance | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Container (`I5003:16769;2177:28927`) | container | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| Chi tiết NV (`I5003:16769;2177:28928`) | text | 1.45 | 2.5 (text) | 1.45 | 0 | 0 | 0 |
| spacer (`5003:16770`) | container | 1.45 | 2.5 (text) | 1.45 | 0 | -1.45 | 0 |
| spacer (`5003:17041`) | container | 1 | 2.5 (text) | 0 | 0 | 0 | -1 |
| Molecule/Add New Bar (`5003:17042`) | instance | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Placeholder (`I5003:17042;5056:365853`) | text | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Action Button (`I5003:17042;5056:365854`) | icon | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Nghi sai · Từ loại (`5003:17878`) | text | 0.86 | 2.5 (text) | 0 | 0 | 0.86 | 0 |
| Từ vựng (`5003:16777`) | text | 0.7 | 2.5 (text) | 0 | 0 | 0.7 | 0 |
| Atom/Tag (`5003:16778`) | instance | 0.7 | 2.5 (text) | 0.7 | 0 | 0 | 0 |
| Label (`I5003:16778;2015:30513`) | text | 0.7 | 2.5 (text) | 0.7 | 0 | 0 | 0 |
| Atom/Tag (`5003:16779`) | instance | 0.7 | 2.5 (text) | 0.7 | 0 | 0 | 0 |
