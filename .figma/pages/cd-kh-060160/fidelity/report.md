# Fidelity: CD-KH-060160 — Bài tập về nhà / Preview mobile (trên trang Kiểm tra)

- URL: `http://localhost:3000/bai-tap-ve-nha/preview-mobile-tren-trang-kiem-tra`
- Verdict: **PASS**
- Pixels outside text: **0.043%** differ (limit 0.5%); all pixels: 0.076%; inside text boxes: 0.143% (glyph rendering)
- Boxes: 486/486 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 471, ≤1px: 480, ≤2px: 486, ≤4px: 486, >4px: 0

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 752, 296, 16×480 | 471 | Cell · Loại câu (`5672:75629`, container) |
| 736, 152, 32×80 | 68 | Thẻ · Cơ cấu theo dạng câu (`5672:75512`, container) |
| 760, 240, 8×48 | 39 | Điện thoại (`5672:75383`, container) |
| 720, 744, 24×16 | 7 | Câu tiếp (`5672:75419`, container) |
| 448, 168, 16×16 | 5 | Toolbar · Tiêu đề & hành động (`5672:75489`, container) |
| 456, 760, 16×16 | 4 | Cell · Câu hỏi (`5672:75702`, container) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I5672:75363;1430:10764`) | 7.5% |
| D (`5672:75413`) | 7.1% |
| Button (`I5672:75361;1430:10764`) | 6.6% |
| Chọn nghĩa đúng của từ (`5672:75397`) | 4.3% |
| B (`5672:75405`) | 3.9% |
| Hiện đáp án & giải thích (`5672:75379`) | 3.6% |
| Tạm biệt (`5672:75406`) | 2.6% |
| Sắp xếp (`5672:75521`) | 2.5% |
| Đọc (`5672:75529`) | 1.3% |
| Label (`I5672:75888;6579:362454;2245:87908`) | 1.3% |
| 1 (`5672:75530`) | 1.2% |
| 2 (`5672:75724`) | 1.2% |
| A (`5672:75401`) | 1.2% |
| C (`5672:75409`) | 1.2% |
| Nối từ (`5672:75525`) | 1% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atom/Tag (`5672:75577`) | instance | 1.22 | 2.5 (text) | 0 | 0 | 1.22 | 0 |
| Label (`I5672:75577;2015:30513`) | text | 1.22 | 2.5 (text) | 0 | 0 | 1.22 | 0 |
| Atom/Tag (`5672:75615`) | instance | 1.22 | 2.5 (text) | 0 | 0 | 1.22 | 0 |
| Label (`I5672:75615;2015:30513`) | text | 1.22 | 2.5 (text) | 0 | 0 | 1.22 | 0 |
| Tạm biệt (`5672:75406`) | text | 1.06 | 2.5 (text) | -0.06 | -0.22 | 1.06 | 0 |
| Kiến thức / Kỹ năng (`5672:75558`) | text | 1.03 | 2.5 (text) | 0 | 0 | 1.03 | 0 |
| spacer (`5672:75716`) | container | 1 | 2.5 (text) | 0 | 0 | 0 | -1 |
| Footer · Phân trang (`5672:75717`) | container | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Hiển thị 1–8 trong 10 câu hỏi (`5672:75718`) | text | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Trang ‹ (`5672:75719`) | icon | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Trang 1 (`5672:75721`) | container | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| 1 (`5672:75722`) | text | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Trang 2 (`5672:75723`) | container | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| 2 (`5672:75724`) | text | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Trang › (`5672:75731`) | icon | 1 | 2.5 (text) | 0 | -1 | 0 | 0 |
| Atom/Input (`5672:75540`) | instance | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Input (`I5672:75540;2808:42276`) | container | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Container (`I5672:75540;2808:42277`) | container | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| Tìm nội dung... (`I5672:75540;2808:42278`) | text | 0.41 | 2.5 (text) | 0 | 0 | -0.41 | 0 |
| DD/Molecule/Trigger (`5672:75541`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Content (`I5672:75541;2015:31179`) | container | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Value (`I5672:75541;2015:31180`) | text | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Chevron (`I5672:75541;2015:31183`) | icon | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| DD/Molecule/Trigger (`5672:75542`) | instance | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
| Content (`I5672:75542;2015:31179`) | container | 0.41 | 2.5 (text) | -0.41 | 0 | 0 | 0 |
