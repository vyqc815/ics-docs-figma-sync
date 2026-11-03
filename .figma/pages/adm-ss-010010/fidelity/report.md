# Fidelity: ADM-SS-010010 — Ship sách / Popup thêm đơn sách

- URL: `http://localhost:3000/frames/adm-ss-010010`
- Verdict: **PASS**
- Pixels outside text: **0.001%** differ (limit 0.5%); all pixels: 0.095%; inside text boxes: 0.298% (glyph rendering)
- Boxes: 96/96 within their limit (1px, 2.5px for text-driven) — ≤0.5px: 96, ≤1px: 96, ≤2px: 96, ≤4px: 96, >4px: 0

## Text boxes with most differing pixels (limit 35%)

| Text | Differing |
| --- | --- |
| Required (`I2619:200685;3004:58609;2911:43272`) | 4.2% |
| Required (`I2619:200691;3004:58609;2911:43272`) | 4.2% |
| Required (`I2911:1671;3004:58609;2911:43272`) | 4.2% |
| Required (`I2911:1681;3004:58609;2911:43272`) | 4.2% |
| Required (`I2911:43838;3004:58609;2911:43272`) | 4.2% |
| Required (`I2619:200726;3004:58609;2911:43272`) | 4.2% |
| Required (`I2619:200732;3004:58609;2911:43272`) | 4.2% |
| Required (`I2619:200737;3004:58631;2911:43272`) | 4.2% |
| Nhãn trường (`I4835:162461;2808:48145`) | 3.2% |
| Nhãn trường (`I2619:200737;3004:58631;2808:48145`) | 3% |
| Nhãn trường (`I2619:200691;3004:58609;2808:48145`) | 2.9% |
| Nhãn trường (`I2911:44445;3004:58609;2808:48145`) | 2.8% |
| Nhãn trường (`I2911:1681;3004:58609;2808:48145`) | 2.6% |
| Nhãn trường (`I2619:200732;3004:58609;2808:48145`) | 2.4% |
| Nhãn trường (`I2911:43838;3004:58609;2808:48145`) | 2.3% |

## Largest box differences

| Node | Role | Δ | Limit | dx | dy | dw | dh |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atom/Label (`I2911:1671;3004:58609`) | instance | 0.19 | 2.5 (text) | 0 | 0 | 0.19 | 0 |
| Nhãn trường (`I2911:1671;3004:58609;2808:48145`) | text | 0.19 | 2.5 (text) | 0 | 0 | 0.19 | 0 |
| Required (`I2911:1671;3004:58609;2911:43272`) | text | 0.19 | 2.5 (text) | 0.19 | 0 | 0 | 0 |
| Atom/Label (`I2911:1681;3004:58609`) | instance | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Nhãn trường (`I2911:1681;3004:58609;2808:48145`) | text | 0.06 | 2.5 (text) | 0 | 0 | 0.06 | 0 |
| Required (`I2911:1681;3004:58609;2911:43272`) | text | 0.06 | 2.5 (text) | 0.06 | 0 | 0 | 0 |
| Atom/Label (`I2911:43838;3004:58609`) | instance | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Nhãn trường (`I2911:43838;3004:58609;2808:48145`) | text | 0.03 | 2.5 (text) | 0 | 0 | 0.03 | 0 |
| Required (`I2911:43838;3004:58609;2911:43272`) | text | 0.03 | 2.5 (text) | 0.03 | 0 | 0 | 0 |
| Popup/Header (`2619:200674`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Tiêu đề (`I2619:200674;2514:153357`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Title (`I2619:200674;2514:153358`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Body (`2619:200680`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chọn học viên (`2619:200681`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Checkbox (`2619:200682`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chọn học viên có sẵn (`2619:200683`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Field · Trung Tâm (`4835:162460`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Label (`4835:162461`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Liner Icon (`I4835:162461;2808:48144`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Nhãn trường (`I4835:162461;2808:48145`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Atom/Input (`4835:162462`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chọn (`I4835:162462;2148:20906`) | text | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Chevron (`I4835:162462;2148:21002`) | icon | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Hàng (`2619:200684`) | container | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
| Molecule/Field (`2619:200685`) | instance | 0 | 2.5 (text) | 0 | 0 | 0 | 0 |
