# Fidelity: CD-KH-070302 — Thư viện / Bài tập / Chi tiết câu hỏi · Reading

- URL: `http://localhost:3000/thu-vien/bai-tap/chi-tiet-cau-hoi-reading`
- Verdict: **FAIL**
- Pixels outside text: **0.003%** differ (limit 0.5%); all pixels: 0.117%; inside text boxes: 0.5% (glyph rendering)
- Boxes: 231/232 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 230, ≤1px: 231, ≤2px: 231, ≤4px: 232, >4px: 0

## Failures

- 1 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.58px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 104, 80, 16×24 | 16 | Frame 1171274940 (`I6163:82366;5491:352399`, icon) |
| 120, 192, 16×8 | 9 | Icon (`I6163:82366;5491:352405;2245:87904`, icon) |
| 120, 872, 16×8 | 9 | Icon (`I6163:82366;5491:352419;2245:87904`, icon) |
| 24, 760, 8×8 | 4 | LOGO CENTER (`I6163:82366;5491:352455`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| 老师 (`6163:82431`) | 17.3% |
| Label (`I6163:82366;5491:352407;2245:87908`) | 7.8% |
| Button (`I6163:82195;1430:10764`) | 3% |
| Label (`I6163:82366;5491:352409;2245:87908`) | 2.3% |
| 我 / 家 / 有 / 四口人 (`6518:383907`) | 1.9% |
| Chúng tôi đều rất thích học tiếng Trung. (`6163:332014`) | 1.7% |
| Đắc Nhân (`I6163:82416;4019:24214`) | 1.6% |
| Label (`I6163:82366;5491:352414;2245:87908`) | 1.4% |
| Từ khoá · 4 (`6163:82460`) | 1.3% |
| Label (`I6163:82366;5491:352420;2245:87908`) | 1.2% |
| Label (`I6518:383903;1725:17090`) | 1.1% |
| Label (`I6518:383899;2015:30530`) | 1% |
| Label (`I6518:383908;1725:17090`) | 0.9% |
| 老师 (`6163:82469`) | 0.9% |
| 老 (lǎo) già, kính trọng · 师 (shī) thầy (`6163:82440`) | 0.9% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ⋮ (`6163:334565`) | text | 2.58 ✗ | 2.5 (text) | -1.3 | 0 | 2.58 | 0 |
| spacer (`6163:82187`) | container | 0.97 | 2.5 (text) | 0.48 | 0 | -0.97 | 0 |
| Tiêu đề (`6163:82184`) | container | 0.48 | 2.5 (text) | 0 | 0 | 0.48 | 0 |
| Đọc đoạn văn và trả lời 3 câu · Kỹ năng: Đọc (`6163:82186`) | text | 0.48 | 2.5 (text) | 0 | 0 | 0.48 | 0 |
| Atom/Button (`6163:82195`) | instance | 0.48 | 2.5 (text) | -0.48 | 0 | 0.48 | 0 |
| Button (`I6163:82195;1430:10764`) | text | 0.48 | 2.5 (text) | -0.48 | 0 | 0.48 | 0 |
| 我 / 家 / 有 / 四口人 (`6518:383907`) | text | 0.05 | 2.5 (text) | 0 | 0 | -0.05 | 0 |
| Atom/Tag (`6518:383908`) | instance | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Container (`I6518:383908;1725:17089`) | container | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Label (`I6518:383908;1725:17090`) | text | 0.05 | 2.5 (text) | -0.05 | 0 | 0.05 | 0 |
| Subtract (`I6163:82366;5491:352350`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | 0 |
| Intersect (`I6163:82366;5491:352357`) | icon | 0.01 | 1 | 0 | -0.01 | -0.01 | 0 |
| Vector (`I6163:82366;5491:352370`) | icon | 0.01 | 1 | 0 | -0.01 | 0 | -0.01 |
| Vector (`I6163:82366;5491:352371`) | icon | 0.01 | 1 | 0.01 | 0 | 0 | -0.01 |
| Union (`I6163:82366;5491:352372`) | icon | 0.01 | 1 | -0.01 | -0.01 | -0.01 | -0.01 |
| Group 240002 (`I6163:82366;5491:352375`) | icon | 0.01 | 1 | 0 | 0 | 0 | -0.01 |
| Content (`6163:82178`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề & hành động (`6163:82183`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Hàng tiêu đề (`6518:373327`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Action Icon (`6579:358720`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề trang (`6163:82185`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Trạng thái câu (`6518:373328`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Container (`I6518:373328;2808:44047`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Leading (`I6518:373328;2808:44048`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Margin (`I6518:373328;2808:44049`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
