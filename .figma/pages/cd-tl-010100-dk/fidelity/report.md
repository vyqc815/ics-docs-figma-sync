# Fidelity: CD-TL-010100-DK — Tools / Giọng đọc / Hội thoại

- URL: `http://localhost:3000/tools/giong-doc/hoi-thoai-dk`
- Verdict: **FAIL**
- Pixels outside text: **0.041%** differ (limit 0.5%); all pixels: 0.212%; inside text boxes: 1.182% (glyph rendering)
- Boxes: 174/182 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 164, ≤1px: 172, ≤2px: 174, ≤4px: 182, >4px: 0

## Failures

- 8 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.58px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 376, 600, 528×8 | 165 | + Thêm lượt thoại (`6133:127668`, container) |
| 344, 640, 528×8 | 165 | + Thêm lượt thoại (`6133:127668`, container) |
| 1032, 328, 24×8 | 20 | Avatar (`6133:127686`, container) |
| 288, 416, 32×16 | 20 | Avatar (`6133:127645`, container) |
| 288, 544, 32×16 | 20 | Avatar (`6133:127661`, container) |
| 1032, 352, 24×8 | 19 | Avatar (`6133:127686`, container) |
| 288, 440, 32×16 | 19 | Avatar (`6133:127645`, container) |
| 288, 568, 32×16 | 19 | Avatar (`6133:127661`, container) |
| 920, 600, 40×48 | 19 | + Thêm lượt thoại (`6133:127668`, container) |
| 272, 600, 16×40 | 15 | + Thêm lượt thoại (`6133:127668`, container) |
| 56, 16, 16×32 | 7 | Navigation / Sidebar Menu / Light (`I6133:127553;6133:108604`, icon) |
| 296, 600, 32×8 | 6 | + Thêm lượt thoại (`6133:127668`, container) |
| 336, 600, 32×8 | 6 | + Thêm lượt thoại (`6133:127668`, container) |
| 912, 600, 32×8 | 6 | + Thêm lượt thoại (`6133:127668`, container) |
| 304, 640, 32×8 | 6 | + Thêm lượt thoại (`6133:127668`, container) |
| 880, 640, 32×8 | 6 | + Thêm lượt thoại (`6133:127668`, container) |
| 16, 16, 16×8 | 4 | Navigation / Sidebar Menu / Light (`I6133:127553;6133:108604`, icon) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Label (`I6133:127553;6133:108639;2245:87820`) | 8.6% |
| Label (`I6133:127553;6133:108633;2245:87820`) | 8% |
| Label (`I6133:127553;6133:108625;2245:87768`) | 5.9% |
| Button (`I6133:127701;1048:1232`) | 5.8% |
| Label (`I6133:127553;6133:108626;2245:87820`) | 5.7% |
| Button (`I6133:127700;1048:1232`) | 4.8% |
| Label (`I6133:127553;6133:108624;2245:87768`) | 4.6% |
| Tạo audio từ văn bản bằng Qwen3-TTS · xử lý trên máy chủ, mở (`6133:127608`) | 3.6% |
| Label (`I6133:127553;6133:108622;2245:87768`) | 3.3% |
| Button (`I6133:127672;1048:1232`) | 3.2% |
| Label (`I6133:127553;6133:108640;2245:87820`) | 2.8% |
| Label (`I6133:127553;6133:108623;2245:87768`) | 2.4% |
| Label (`I6133:127553;6133:108642;2245:87768`) | 2.2% |
| ⋮ (`6133:127643`) | 2.2% |
| ⋮ (`6133:127651`) | 2.2% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Guten Morgen! Wie geht es dir? (`6133:127642`) | text | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6133:127643`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| Danke, gut. Und dir? (`6133:127650`) | text | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6133:127651`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| Auch gut, danke. Was machst du heute? (`6133:127658`) | text | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6133:127659`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| Ich gehe ins Kino. Kommst du mit? (`6133:127666`) | text | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6133:127667`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| Button (`I6133:127701;1048:1232`) | text | 1.38 | 2.5 (text) | -0.69 | 0 | 1.38 | 0 |
| Button (`I6133:127700;1048:1232`) | text | 1.19 | 2.5 (text) | -0.59 | 0 | 1.19 | 0 |
| 4 lượt · 2 người nói · ~ 12 giây âm thanh (`6133:127671`) | text | 0.92 | 2.5 (text) | 0 | 0 | -0.92 | 0 |
| Atom/Button (`6133:127672`) | instance | 0.92 | 2.5 (text) | -0.92 | 0 | 0 | 0 |
| Button (`I6133:127672;1048:1232`) | text | 0.92 | 2.5 (text) | -0.92 | 0 | 0 | 0 |
| Atom/Button (`6133:127673`) | instance | 0.92 | 2.5 (text) | -0.92 | 0 | 0.92 | 0 |
| Button (`I6133:127673;1048:1230`) | text | 0.92 | 2.5 (text) | -0.92 | 0 | 0.92 | 0 |
| Kết quả (`6133:127696`) | text | 0.92 | 2.5 (text) | 0 | 0 | -0.92 | 0 |
| Tiếng Đức · 2 người nói · 12 giây (`6133:127697`) | text | 0.92 | 2.5 (text) | -0.92 | 0 | 0.92 | 0 |
| Tạo audio từ văn bản bằng Qwen3-TTS · xử lý trên máy chủ, mở (`6133:127608`) | text | 0.84 | 2.5 (text) | 0 | 0 | 0.84 | 0 |
| ⌄ (`6133:127641`) | text | 0.44 | 2.5 (text) | 0.2 | 0 | 0.44 | 0 |
| ⌄ (`6133:127649`) | text | 0.44 | 2.5 (text) | 0.03 | 0 | 0.44 | 0 |
| ⌄ (`6133:127657`) | text | 0.44 | 2.5 (text) | 0.2 | 0 | 0.44 | 0 |
| ⌄ (`6133:127665`) | text | 0.44 | 2.5 (text) | 0.03 | 0 | 0.44 | 0 |
| Người 1 (`6133:127681`) | text | 0.44 | 2.5 (text) | 0 | 0 | -0.44 | 0 |
| Giọng (`6133:127682`) | container | 0.44 | 2.5 (text) | -0.44 | 0 | 0.44 | 0 |
| Giọng: Nữ 2 (`6133:127683`) | text | 0.44 | 2.5 (text) | -0.44 | 0 | 0 | 0 |
