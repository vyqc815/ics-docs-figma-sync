# Fidelity: CD-KH-070303 — Thư viện / Bài tập / Chi tiết câu hỏi · Reading (Tiếng Nhật)

- URL: `http://localhost:3000/thu-vien/bai-tap/chi-tiet-cau-hoi-reading-tieng-nhat`
- Verdict: **FAIL**
- Pixels outside text: **0.003%** differ (limit 0.5%); all pixels: 0.206%; inside text boxes: 0.859% (glyph rendering)
- Boxes: 235/236 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 228, ≤1px: 229, ≤2px: 235, ≤4px: 236, >4px: 0

## Failures

- 1 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.58px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I6163:83065;5491:352399`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I6163:83065;5491:352405;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I6163:83065;5491:352419;2245:87904`, icon) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`I6163:83065;5491:352455`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| 先生 (`6163:83688`) | 21.8% |
| 先生 (`6163:83713`) | 18% |
| 勉強 (`6163:83717`) | 16% |
| 医者 (`6163:83715`) | 15.8% |
| 家族 (`6163:83711`) | 14.8% |
| 父は先生です。— Bố tôi là giáo viên. (`6163:83707`) | 12.5% |
| Label (`I6163:83065;5491:352407;2245:87908`) | 7.8% |
| Ví dụ (`6163:83706`) | 3.4% |
| Button (`I6163:82896;1430:10764`) | 3% |
| Label (`I6163:83065;5491:352409;2245:87908`) | 2.3% |
| Viết 1 câu giới thiệu thành viên (`6518:383944`) | 2.2% |
| Chúng tôi thích học tiếng Nhật. (`6163:332034`) | 1.7% |
| Đắc Nhân (`I6163:83115;4019:24214`) | 1.6% |
| Label (`I6163:83065;5491:352414;2245:87908`) | 1.4% |
| Từ khoá · 4 (`6163:82918`) | 1.3% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ⋮ (`6163:334574`) | text | 2.58 ✗ | 2.5 (text) | -1.3 | 0 | 2.58 | 0 |
| Popover · Chi tiết từ khoá (`6163:83116`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Chi tiết từ (`6163:83702`) | container | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| 先 (sen) trước · 生 (sei) sinh — Hán Việt: Tiên sinh (`6163:83704`) | text | 2 | 2.5 (text) | 0 | 0 | 0 | 2 |
| Ví dụ (`6163:83705`) | container | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| Ví dụ (`6163:83706`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| 父は先生です。— Bố tôi là giáo viên. (`6163:83707`) | text | 2 | 2.5 (text) | 0 | 2 | 0 | 0 |
| spacer (`6163:82891`) | container | 0.97 | 2.5 (text) | 0.48 | 0 | -0.97 | 0 |
| Tiêu đề (`6163:82888`) | container | 0.48 | 2.5 (text) | 0 | 0 | 0.48 | 0 |
| Đọc đoạn văn và trả lời 3 câu · Kỹ năng: Đọc (`6163:82890`) | text | 0.48 | 2.5 (text) | 0 | 0 | 0.48 | 0 |
| Atom/Button (`6163:82896`) | instance | 0.48 | 2.5 (text) | -0.48 | 0 | 0.48 | 0 |
| Button (`I6163:82896;1430:10764`) | text | 0.48 | 2.5 (text) | -0.48 | 0 | 0.48 | 0 |
| わたし / の / 家族 / は / 四人です (`6518:383939`) | text | 0.05 | 2.5 (text) | 0 | 0 | -0.05 | 0 |
| Atom/Tag (`6518:383940`) | instance | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Container (`I6518:383940;1725:17089`) | container | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Label (`I6518:383940;1725:17090`) | text | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Subtract (`I6163:83065;5491:352350`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | 0 |
| Intersect (`I6163:83065;5491:352357`) | icon | 0.01 | 1 | 0 | -0.01 | -0.01 | 0 |
| Vector (`I6163:83065;5491:352370`) | icon | 0.01 | 1 | 0 | -0.01 | 0 | -0.01 |
| Vector (`I6163:83065;5491:352371`) | icon | 0.01 | 1 | 0.01 | 0 | 0 | -0.01 |
| Union (`I6163:83065;5491:352372`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | -0.01 |
| Group 240002 (`I6163:83065;5491:352375`) | icon | 0.01 | 1 | 0 | 0 | 0 | -0.01 |
| Content (`6163:82882`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề & hành động (`6163:82887`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Hàng tiêu đề (`6518:373414`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
