# Fidelity: MST-TK-020000 — Tài khoản / Chi tiết tài khoản

- URL: `http://localhost:3000/tai-khoan/chi-tiet-tai-khoan`
- Verdict: **FAIL**
- Pixels outside text: **0.054%** differ (limit 0.5%); all pixels: 0.293%; inside text boxes: 1.012% (glyph rendering)
- Boxes: 176/178 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 175, ≤1px: 175, ≤2px: 175, ≤4px: 178, >4px: 0

## Failures

- 2 elements are off by more than their limit (1px, 2.5px for text-driven; worst 2.66px).

## Pixel regions (largest first)

| Region (x, y, w×h) | Pixels | Likely node |
| --- | --- | --- |
| 64, 560, 128×72 | 311 | COLOR THEME (`4030:88770`, icon) |
| 168, 152, 104×80 | 121 | + (`3005:41706`, text) |
| 176, 384, 144×32 | 107 | Thêm chức vụ (`I3005:43133;139:67075`, text) |
| 192, 256, 48×8 | 26 | Overlay+Border (`3005:41703`, container) |
| 288, 384, 48×32 | 24 | Thêm chức vụ (`I3005:43133;139:67075`, text) |
| 168, 328, 16×16 | 13 | Icon Role (`I3005:42864;3004:49478`, icon) |
| 288, 320, 24×24 | 9 | Icon Role (`I3005:42873;3004:49430`, icon) |
| 256, 408, 16×8 | 4 | Role Component (`3005:43133`, instance) |

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Tạo tài khoản (`3005:41011`) | 24.6% |
| Nguyễn Văn A (`3005:41022`) | 9.8% |
| Nhãn trường (`I3005:43093;3004:58620;2808:48145`) | 2.5% |
| Nhãn trường (`I3004:50135;3004:58620;2808:48145`) | 2.4% |
| Nhãn trường (`I3004:49972;3004:58620;2808:48145`) | 2.3% |
| Nhãn trường (`I3004:50083;3004:58620;2808:48145`) | 2.1% |
| Sale (`I3005:42873;3004:49431`) | 1.9% |
| Nhãn trường (`I3004:49956;3004:58620;2808:48145`) | 1.8% |
| Nhãn trường (`I4030:81898;3004:58620;2808:48145`) | 1.7% |
| Nhãn trường (`I4030:81897;3004:58620;2808:48145`) | 1.6% |
| Thêm chức vụ (`I3005:43133;139:67075`) | 1.4% |
| Thông Tin Cá Nhân (`3005:41047`) | 0.8% |
| Hãy chọn một màu để có được Một buổi làm việc hiệu quả nhất  (`3005:41136`) | 0.8% |
| Cam · Mặc định (`4030:88773`) | 0.7% |
| Teacher-handler (`I3005:42934;3004:49515`) | 0.6% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frame 1171274928 (`3005:43569`) | container | 2.66 ✗ | 2.5 (text) | -1.33 | 0 | 2.66 | 0 |
| Nguyễn Văn A (`3005:41022`) | text | 2.66 ✗ | 2.5 (text) | -1.33 | 0 | 2.66 | 0 |
| Tạo tài khoản (`3005:41011`) | text | 2.17 | 2.5 (text) | 0 | 0 | 2.17 | 0 |
| Role Component (`3005:43133`) | instance | 0.19 | 2.5 (text) | -0.09 | 0 | 0.19 | 0 |
| Thêm chức vụ (`I3005:43133;139:67075`) | text | 0.19 | 2.5 (text) | -0.09 | 0 | 0.19 | 0 |
| Role Component (`3005:42968`) | instance | 0.09 | 2.5 (text) | -0.09 | 0 | 0 | 0 |
| Frame 1171274972 (`I3005:42968;3004:49555`) | container | 0.09 | 2.5 (text) | -0.09 | 0 | 0 | 0 |
| Icon Role (`I3005:42968;3004:49556`) | icon | 0.09 | 2.5 (text) | -0.09 | 0 | 0 | 0 |
| Role 12 (`I3005:42968;3004:49557`) | text | 0.09 | 2.5 (text) | -0.09 | 0 | 0 | 0 |
| Role Component (`3005:43137`) | icon | 0.09 | 2.5 (text) | -0.09 | 0 | 0 | 0 |
| Vector (`I3005:43133;2623:27461`) | icon | 0.09 | 2.5 (text) | -0.09 | 0 | 0 | 0 |
| Mouse click (`I3005:43133;3065:68070`) | icon | 0.09 | 2.5 (text) | -0.09 | -0.01 | 0 | 0 |
| Thông Tin Cá Nhân (`3005:41047`) | text | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Frame 427322608 (`3005:41010`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Frame 1171274927 (`3005:43566`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Frame 427322607 (`3005:41131`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Frame 427322606 (`3005:41132`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Frame 427322605 (`3005:41133`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Frame 427322605 (`3005:43104`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Frame 1171274944 (`4030:88769`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| COLOR THEME (`4030:88770`) | icon | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
| Frame 1171274935 (`4030:88771`) | container | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Màu (`4030:88772`) | shape | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Cam · Mặc định (`4030:88773`) | text | 0.01 | 2.5 (text) | 0 | -0.01 | 0 | 0 |
| Frame 1171274945 (`4030:88894`) | container | 0.01 | 2.5 (text) | 0 | 0 | 0 | -0.01 |
