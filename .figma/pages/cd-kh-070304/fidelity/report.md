# Fidelity: CD-KH-070304 — Thư viện / Bài tập / Chi tiết câu hỏi · Reading / Sửa câu

- URL: `http://localhost:3000/thu-vien/bai-tap/chi-tiet-cau-hoi-reading/sua-cau`
- Verdict: **FAIL**
- Pixels outside text: **0.003%** differ (limit 0.5%); all pixels: 0.082%; inside text boxes: 0.372% (glyph rendering)
- Boxes: 238/246 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 237, ≤1px: 237, ≤2px: 238, ≤4px: 246, >4px: 0

## Failures

- 8 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.58px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I6163:332225;5491:352399`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I6163:332225;5491:352405;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I6163:332225;5491:352419;2245:87904`, icon) |
| 24, 888, 8×16 | 4 | LOGO CENTER (`I6163:332225;5491:352455`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I6163:332225;5491:352407;2245:87908`) | 7.8% |
| Button (`I6163:332864;1048:1238`) | 2.6% |
| Label (`I6163:332225;5491:352409;2245:87908`) | 2.3% |
| Button (`I6163:332049;1048:1238`) | 2.1% |
| Đắc Nhân (`I6163:332275;4019:24214`) | 1.6% |
| Label (`I6163:332225;5491:352414;2245:87908`) | 1.4% |
| Button (`I6163:332861;1048:1240`) | 1.3% |
| Từ khoá · 4 (`6163:332078`) | 1.3% |
| Sửa văn bản → phiên âm & dịch câu có thể bấm "Tự tạo" lại. T (`6163:332867`) | 1.2% |
| Label (`I6518:383963;2015:30530`) | 1% |
| Đang sửa câu 2 · lưu hoặc huỷ câu đang sửa trước khi sửa câu (`6579:360680`) | 1% |
| 老师 (`6163:332087`) | 0.9% |
| CD (`I6163:332274;2008:31885`) | 0.8% |
| 我 / 家 / 有 / 四口人 (`6518:383971`) | 0.7% |
| Label (`I6163:332225;5491:352406;2245:87908`) | 0.7% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| c (`6163:332082`) | container | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6163:332085`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| c (`6163:332088`) | container | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6163:332091`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| c (`6163:332094`) | container | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6163:332097`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| c (`6163:332100`) | container | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6163:332103`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| Đang sửa câu 2 · lưu hoặc huỷ câu đang sửa trước khi sửa câu (`6579:360680`) | text | 1.42 | 2.5 (text) | 0 | 0 | 1.42 | 0 |
| Tiêu đề (`6163:332042`) | container | 0.48 | 2.5 (text) | 0 | 0 | 0.48 | 0 |
| Đọc đoạn văn và trả lời 3 câu · Kỹ năng: Đọc (`6163:332044`) | text | 0.48 | 2.5 (text) | 0 | 0 | 0.48 | 0 |
| spacer (`6163:332045`) | container | 0.48 | 2.5 (text) | 0.48 | 0 | -0.48 | 0 |
| Văn bản (`6163:332845`) | text | 0.42 | 2.5 (text) | 0 | 0 | 0.42 | 0 |
| 我 / 家 / 有 / 四口人 (`6518:383971`) | text | 0.05 | 2.5 (text) | 0 | 0 | -0.05 | 0 |
| Atom/Tag (`6518:383972`) | instance | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Container (`I6518:383972;1725:17089`) | container | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Label (`I6518:383972;1725:17090`) | text | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Subtract (`I6163:332225;5491:352350`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | 0 |
| Intersect (`I6163:332225;5491:352357`) | icon | 0.01 | 1 | 0 | -0.01 | -0.01 | 0 |
| Vector (`I6163:332225;5491:352370`) | icon | 0.01 | 1 | 0 | -0.01 | 0 | -0.01 |
| Vector (`I6163:332225;5491:352371`) | icon | 0.01 | 1 | 0.01 | 0 | 0 | -0.01 |
| Union (`I6163:332225;5491:352372`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | -0.01 |
| Group 240002 (`I6163:332225;5491:352375`) | icon | 0.01 | 1 | 0 | 0 | 0 | -0.01 |
| Content (`6163:332038`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề & hành động (`6163:332039`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
