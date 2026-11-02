# Fidelity: ADM-LOP-030400-DK — Lớp học / Bài học / Tài nguyên

- URL: `http://localhost:3108/lop-hoc/bai-hoc/tai-nguyen-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.051%** differ (limit 0.5%); all pixels: 0.361%; inside text boxes: 1.574% (glyph rendering)
- Boxes: 365/377 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 359, ≤1px: 359, ≤2px: 359, ≤4px: 365, >4px: 12

## Failures

- 12 elements are off by more than their limit (1px, 2.5px for text-driven; worst 82px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 752, 832, 24×16 | 107 | Frame 427321972 (`4560:31838`, container) |
| 920, 832, 24×16 | 106 | Frame 427321972 (`4560:31838`, container) |
| 664, 832, 32×16 | 103 | Frame 427321972 (`4560:31838`, container) |
| 920, 856, 24×16 | 101 | Container (`4560:31823`, container) |
| 664, 856, 24×16 | 97 | Frame 427321972 (`4560:31838`, container) |
| 752, 856, 24×16 | 92 | Container (`4560:31833`, container) |
| 840, 832, 24×16 | 87 | Frame 427321972 (`4560:31838`, container) |
| 840, 856, 24×16 | 84 | Container (`4560:31828`, container) |
| 928, 888, 16×16 | 40 | Container (`4560:31820`, icon) |
| 760, 888, 16×16 | 36 | Container (`4560:31830`, icon) |
| 672, 888, 16×16 | 32 | Container (`4560:31835`, icon) |
| 840, 888, 16×16 | 30 | Container (`4560:31825`, icon) |
| 480, 88, 8×24 | 11 | ÔN TẬP: Giữa Kỳ 1 (`4056:111700`, text) |
| 568, 1120, 8×16 | 7 | Link 1: Từ điển Hán Việt (`4560:31857`, container) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`4056:111945`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| 100% (`I4056:111748;1308:6749`) | 19.9% |
| 100% (`I4056:111749;1308:6749`) | 19.9% |
| 100% (`I4056:111760;1308:6749`) | 19.9% |
| 100% (`I4056:111761;1308:6749`) | 19.9% |
| ÔN TẬP: Giữa Kỳ 1 (`4056:111700`) | 14.9% |
| Từ điển Hán Việt trực tuyến (`4560:31864`) | 14.6% |
| Label (`I4056:111913;2245:87908`) | 13.7% |
| Label (`I4056:111912;2245:87914`) | 12.7% |
| Label (`I4056:111911;2245:87908`) | 8.6% |
| Đường dẫn tài liệu, website, video tham khảo, ... (`I4560:31855;2808:43098`) | 4.7% |
| Label (`I4056:111914;2245:87908`) | 4.3% |
| Video luyện nghe tiếng Trung (YouTube) (`4560:31876`) | 3.9% |
| Danh sách bài học (`4056:111733`) | 3.9% |
| ÔN TẬP: Giữa Kỳ 1 (`4056:111747`) | 3.9% |
| Giáo trình, file PDF, Word, PPT, ... (`I4560:31741;2808:43057`) | 3.8% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Container (`4560:31820`) | icon | 82 ✗ | 2.5 (text) | 0 | -82 | 0 | 0 |
| Container (`4560:31825`) | icon | 82 ✗ | 2.5 (text) | 0 | -82 | 0 | 0 |
| Container (`4560:31830`) | icon | 82 ✗ | 2.5 (text) | 0 | -82 | 0 | 0 |
| Container (`4560:31835`) | icon | 82 ✗ | 2.5 (text) | 0 | -82 | 0 | 0 |
| Container (`4560:31818`) | container | 76.63 ✗ | 2.5 (text) | -76.62 | -51 | 0 | 0 |
| Container (`4560:31823`) | container | 76.63 ✗ | 2.5 (text) | -76.63 | -51 | 0 | 0 |
| Container (`4560:31828`) | container | 76.63 ✗ | 2.5 (text) | -76.62 | -51 | 0 | 0 |
| Container (`4560:31833`) | container | 76.63 ✗ | 2.5 (text) | -76.63 | -51 | 0 | 0 |
| mā (`4560:31819`) | text | 27 ✗ | 2.5 (text) | -19 | -27 | 0 | 0 |
| má (`4560:31824`) | text | 27 ✗ | 2.5 (text) | -19 | -27 | 0 | 0 |
| mǎ (`4560:31829`) | text | 27 ✗ | 2.5 (text) | -19 | -27 | 0 | 0 |
| mà (`4560:31834`) | text | 27 ✗ | 2.5 (text) | -19 | -27 | 0 | 0 |
| ÔN TẬP: Giữa Kỳ 1 (`4056:111700`) | text | 2.38 | 2.5 (text) | 0 | 0 | 2.38 | 0 |
| Container (`4560:31858`) | container | 2.34 | 2.5 (text) | 0 | 0 | 2.34 | 0 |
| Container (`4560:31862`) | container | 2.34 | 2.5 (text) | 0 | 0 | 2.34 | 0 |
| Heading 4 (`4560:31863`) | container | 2.34 | 2.5 (text) | 0 | 0 | 2.34 | 0 |
| Từ điển Hán Việt trực tuyến (`4560:31864`) | text | 2.34 | 2.5 (text) | 0 | 0 | 2.34 | 0 |
| Link (`4560:31865`) | container | 2.34 | 2.5 (text) | 0 | 0 | 2.34 | 0 |
| Video luyện nghe tiếng Trung (YouTube) (`4560:31876`) | text | 0.27 | 2.5 (text) | 0 | 0 | 0.27 | 0 |
| Tài liệu học tập (3) (`I4560:31741;2808:43055`) | text | 0.08 | 2.5 (text) | 0 | 0 | 0.08 | 0 |
| Container (`I4560:31743;1062:1357`) | container | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Cập nhật (`I4560:31743;1062:1358`) | text | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Container (`I4560:31744;1062:1357`) | container | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Cập nhật (`I4560:31744;1062:1358`) | text | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Container (`I4560:31745;1062:1357`) | container | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
