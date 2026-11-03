# Fidelity: CD-KH-030310 — Học kỳ / Kiểm tra / Popup cấu hình bài kiểm tra

- URL: `http://localhost:3000/hoc-ky/kiem-tra/popup-cau-hinh-bai-kiem-tra`
- Verdict: **FAIL**
- Pixels outside text: **0%** differ (limit 0.5%); all pixels: 0.437%; inside text boxes: 2.672% (glyph rendering)
- Boxes: 133/134 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 129, ≤1px: 131, ≤2px: 133, ≤4px: 133, >4px: 1

## Failures

- 1 elements are off by more than their limit (1px, 2.5px for text-driven; worst 39px).

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Số câu hỏi và tổng điểm có thể được cập nhật tự động dựa trê (`I2808:43043;2808:43032`) | 7% |
| Tìm nội dung... (`I2808:42592;2808:42324`) | 6.7% |
| Nhãn trường (`I2911:43732;2808:48145`) | 5.5% |
| Required (`I2911:43712;2911:43272`) | 4.2% |
| Lưu ý (`I2808:43043;2808:43031`) | 4.1% |
| Required (`I2911:43717;2911:43272`) | 3.3% |
| Thời gian làm bài * (`1496:16365`) | 2% |
| Title (`I2808:42217;2808:42172`) | 1.9% |
| Description (`I2808:42217;2808:42174`) | 1.9% |
| Nhãn trường (`I2911:43712;2808:48145`) | 1.8% |
| Tìm nội dung... (`I2808:42595;2808:42328`) | 1.8% |
| Tìm nội dung... (`I2808:42601;2808:42328`) | 1.8% |
| Tìm nội dung... (`I2808:42598;2808:42328`) | 1.4% |
| Nhãn trường (`I2911:43722;2808:48145`) | 1.3% |
| Nhãn trường (`I2911:43737;2808:48145`) | 1.3% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| image clip (`I2808:42583;2808:42364`) | container | 39 ✗ | 2.5 (text) | 0 | 0 | 39 | 0 |
| Paragraph (`I2808:43043;2808:43030`) | container | 1.16 | 2.5 (text) | 0 | 0 | 1.16 | 0 |
| Số câu hỏi và tổng điểm có thể được cập nhật tự động dựa trê (`I2808:43043;2808:43032`) | text | 1.16 | 2.5 (text) | 0 | 0 | 1.16 | 0 |
| Atom/Label (`2911:43732`) | instance | 0.55 | 2.5 (text) | -0.01 | 0 | 0.55 | 0 |
| Nhãn trường (`I2911:43732;2808:48145`) | text | 0.55 | 2.5 (text) | -0.01 | 0 | 0.55 | 0 |
| Title (`I2808:42217;2808:42167`) | container | 0.05 | 2.5 (text) | 0 | 0 | 0.05 | 0 |
| Heading 2 (`I2808:42217;2808:42171`) | container | 0.05 | 2.5 (text) | 0 | 0 | 0.05 | 0 |
| Title (`I2808:42217;2808:42172`) | text | 0.05 | 2.5 (text) | 0 | 0 | 0.05 | 0 |
| Giây (`1496:16388`) | text | 0.03 | 2.5 (text) | -0.03 | 0 | 0 | 0 |
| Container (`I2808:42604;2808:42336`) | container | 0.03 | 2.5 (text) | -0.03 | -0.01 | 0 | -0.01 |
| câu (`I2808:42604;2808:42337`) | text | 0.03 | 2.5 (text) | -0.03 | 0 | 0 | 0 |
| Container (`I2808:42620;2808:42336`) | container | 0.03 | 2.5 (text) | -0.03 | -0.01 | 0 | -0.01 |
| câu (`I2808:42620;2808:42337`) | text | 0.03 | 2.5 (text) | -0.03 | 0 | 0 | 0 |
| Phút (`1496:16380`) | text | 0.02 | 2.5 (text) | -0.02 | 0 | 0 | 0 |
| Margin (`1496:16381`) | container | 0.02 | 2.5 (text) | -0.02 | 0 | -0.01 | 0 |
| : (`1496:16382`) | text | 0.02 | 2.5 (text) | -0.02 | 0 | 0 | 0 |
| Container (`1496:16383`) | container | 0.02 | 2.5 (text) | -0.02 | 0 | -0.01 | 0 |
| Atom/Input (`2808:42601`) | instance | 0.02 | 2.5 (text) | -0.02 | 0 | -0.01 | 0 |
| Container (`I2808:42601;2808:42327`) | container | 0.02 | 2.5 (text) | -0.02 | 0 | -0.01 | 0 |
| Tìm nội dung... (`I2808:42601;2808:42328`) | text | 0.02 | 2.5 (text) | -0.02 | 0 | -0.01 | 0 |
| Container (`1496:16387`) | container | 0.02 | 2.5 (text) | -0.02 | 0 | -0.01 | 0 |
| Container (`I2808:42612;2808:42336`) | container | 0.02 | 2.5 (text) | -0.02 | -0.01 | 0 | -0.01 |
| câu (`I2808:42612;2808:42337`) | text | 0.02 | 2.5 (text) | -0.02 | 0 | 0 | 0 |
| Margin (`1496:16373`) | container | 0.01 | 2.5 (text) | 0 | 0 | -0.01 | 0 |
| Container (`1496:16375`) | container | 0.01 | 2.5 (text) | -0.01 | 0 | -0.01 | 0 |
