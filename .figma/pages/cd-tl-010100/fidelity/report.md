# Fidelity: CD-TL-010100 — Tools / Giọng đọc / Hội thoại

- URL: `http://localhost:3000/tools/giong-doc/hoi-thoai`
- Verdict: **FAIL**
- Pixels outside text: **0%** differ (limit 0.5%); all pixels: 0.06%; inside text boxes: 0.445% (glyph rendering)
- Boxes: 170/178 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 161, ≤1px: 168, ≤2px: 170, ≤4px: 178, >4px: 0

## Failures

- 8 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.58px).

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Button (`I6133:124907;1048:1232`) | 4.8% |
| Button (`I6133:124906;1048:1232`) | 4% |
| Label (`I6133:124762;6133:108633;2245:87820`) | 3.4% |
| Label (`I6133:124762;6133:108639;2245:87820`) | 3.2% |
| Button (`I6133:124851;1048:1232`) | 2.5% |
| Label (`I6133:124762;6133:108626;2245:87820`) | 2% |
| Button (`I6133:124852;1048:1230`) | 1.6% |
| Label (`I6133:124762;6133:108625;2245:87768`) | 1.5% |
| Sakumi (`I6133:124812;4019:24078`) | 1.3% |
| Label (`I6133:124762;6133:108624;2245:87768`) | 1.1% |
| Người 2 · Nam 3 (`6133:125181`) | 1% |
| Người 2 · Nam 3 (`6133:125197`) | 1% |
| Label (`I6133:124762;6133:108622;2245:87768`) | 0.9% |
| Người 1 · Nữ 2 (`6133:125173`) | 0.9% |
| Người 1 · Nữ 2 (`6133:125189`) | 0.9% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Guten Morgen! Wie geht es dir? (`6133:125175`) | text | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6133:125176`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| Danke, gut. Und dir? (`6133:125183`) | text | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6133:125184`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| Auch gut, danke. Was machst du heute? (`6133:125191`) | text | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6133:125192`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| Ich gehe ins Kino. Kommst du mit? (`6133:125199`) | text | 2.58 ✗ | 2.5 (text) | 0 | 0 | -2.58 | 0 |
| ⋮ (`6133:125200`) | text | 2.58 ✗ | 2.5 (text) | -2.58 | 0 | 2.58 | 0 |
| Button (`I6133:124907;1048:1232`) | text | 1.38 | 2.5 (text) | -0.69 | 0 | 1.38 | 0 |
| Button (`I6133:124906;1048:1232`) | text | 1.19 | 2.5 (text) | -0.59 | 0 | 1.19 | 0 |
| 4 lượt · 2 người nói · ~ 12 giây âm thanh (`6133:124850`) | text | 0.92 | 2.5 (text) | 0 | 0 | -0.92 | 0 |
| Atom/Button (`6133:124851`) | instance | 0.92 | 2.5 (text) | -0.92 | 0 | 0 | 0 |
| Button (`I6133:124851;1048:1232`) | text | 0.92 | 2.5 (text) | -0.92 | 0 | 0 | 0 |
| Atom/Button (`6133:124852`) | instance | 0.92 | 2.5 (text) | -0.92 | 0 | 0.92 | 0 |
| Button (`I6133:124852;1048:1230`) | text | 0.92 | 2.5 (text) | -0.92 | 0 | 0.92 | 0 |
| Kết quả (`6133:124902`) | text | 0.92 | 2.5 (text) | 0 | 0 | -0.92 | 0 |
| Tiếng Đức · 2 người nói · 12 giây (`6133:124903`) | text | 0.92 | 2.5 (text) | -0.92 | 0 | 0.92 | 0 |
| ⌄ (`6133:125174`) | text | 0.44 | 2.5 (text) | 0.2 | 0 | 0.44 | 0 |
| ⌄ (`6133:125182`) | text | 0.44 | 2.5 (text) | 0.03 | 0 | 0.44 | 0 |
| ⌄ (`6133:125190`) | text | 0.44 | 2.5 (text) | 0.2 | 0 | 0.44 | 0 |
| ⌄ (`6133:125198`) | text | 0.44 | 2.5 (text) | 0.03 | 0 | 0.44 | 0 |
| Người 1 (`6133:125217`) | text | 0.44 | 2.5 (text) | 0 | 0 | -0.44 | 0 |
| Giọng (`6133:125218`) | container | 0.44 | 2.5 (text) | -0.44 | 0 | 0.44 | 0 |
| Giọng: Nữ 2 (`6133:125219`) | text | 0.44 | 2.5 (text) | -0.44 | 0 | 0 | 0 |
| ⌄ (`6133:125220`) | text | 0.44 | 2.5 (text) | -0.44 | 0 | 0.44 | 0 |
