# ICS — ví dụ dự án

ICS dùng cùng hệ thống mã (`scripts/he-thong-ma`) với mọi dự án, chỉ khác chỗ để file. ICS **giữ thư mục cũ** vì
docs BA (repo docs, nhánh `stable`) được server chép vào `qc/requirements/` mỗi 5 phút, code demo / spec màn
(`docs/pages`, `components/figma`, `figma.pages.json`) và các workflow Figma của ICS đều trỏ vào các thư mục đó;
dời đi thì phải đổi đồng loạt cả server lẫn workflow.

| | ICS | Dự án trong `projects/<tên>/` |
|---|---|---|
| Bản gốc QC | `qc/requirements/` (BA đồng bộ vào) | `projects/<tên>/requirements/` |
| Bản đã chuyển template, gắn mã (Hub hiển thị) | `docs/requirements/` | `projects/<tên>/_hub/docs/requirements/` |
| Cụm, registry, item, testcase, khoá mã, mục lục | `docs/he-thong-ma/` | `projects/<tên>/_hub/docs/he-thong-ma/` |
| Màn → trang requirement | `scripts/figma/screen-requirements.json` | `projects/<tên>/_hub/scripts/figma/screen-requirements.json` |
| Danh sách màn Figma | `figma.pages.json` + NAVIGATION | Lần quét Figma trên Hub (+ mã đề xuất) |
| Workflow | `requirements.yml` | `requirements-du-an.yml` (gọi `du_an.py`) |
| Lên Hub | Sau lượt deploy (9h, 13h, 17h) | Vài phút, không cần deploy |
| Dữ liệu Hub (mốc đồng bộ, tag, Figma đổi) | `docs/dong-bo/`, `docs/hub/` | `docs/du-an/<slug>/` |
| Code demo, Spec MD từng màn | Có | Chưa có (chỉ ICS) |

Ví dụ: `qc/requirements/login_ics/login_requirements.md` → `docs/requirements/login_ics/login_requirements.md`.
Dự án khác: `projects/<tên>/requirements/<module>/<chuc-nang>.md` → `projects/<tên>/_hub/docs/requirements/<module>/<chuc-nang>.md`.
