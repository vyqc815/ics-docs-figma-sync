# Docs requirement của các dự án

Mỗi dự án thêm từ Hub có **một thư mục** ở đây, chọn theo tên khi thêm dự án (Hub › Dự án › Dự án mới › Thư mục).
Mọi dự án dùng **cùng hệ thống mã như ICS**: chuyển template, gắn mã trang / khu vực / item, cụm, registry,
REQ, testcase, màn → trang requirement, đồng bộ, tag, tiến độ dev, báo Figma đổi.

```
projects/
├── README.md              ← file này
├── ics/README.md          ← ICS: bảng so sánh, ICS giữ thư mục cũ (lý do ở trong)
├── _mau-du-an/            ← mẫu: Hub copy phần requirements/ khi tạo thư mục mới
└── <tên-thư-mục>/         ← một dự án, vd. thu-hoa-don
    ├── requirements/      ← QC VIẾT Ở ĐÂY (bản gốc, như qc/requirements của ICS)
    │   ├── tong-quan.md
    │   └── <module>/<chuc-nang>.md (+ images/)
    └── _hub/              ← SINH TỰ ĐỘNG, không sửa tay (như docs/requirements + docs/he-thong-ma của ICS)
        ├── docs/requirements/      bản đã chuyển template, gắn mã — Hub hiển thị bản này
        ├── docs/he-thong-ma/       figma-frames, cụm, *.registry.json, khoá mã, mục lục
        └── scripts/figma/screen-requirements.json
```

## Luồng

1. QC sửa `projects/<tên>/requirements/**` (push lên `main`, hoặc bút chì trên Hub).
2. GitHub Actions `requirements-du-an.yml` chạy `scripts/he-thong-ma/du_an.py`: dựng danh sách màn từ lần quét
   Figma + mã đề xuất (`docs/du-an/<slug>/`), rồi chạy đúng các script của ICS với thư mục làm việc `_hub`.
   Thiếu nội dung / testcase thì dừng, `_hub` giữ bản cũ, Chat báo lỗi (luồng `requirement-<MÃ>`).
3. Workflow commit `_hub`; Hub đọc `main` trực tiếp nên bản mới hiện sau vài phút, **không cần deploy**.
   Quét lại Figma, lưu mã đề xuất, đổi thư mục trên Hub cũng chạy lại bước 2.

## Thêm dự án mới

1. Hub › **Dự án › Dự án mới**: tên, link file Figma → Đọc file → chọn trang/Section → Quét.
2. **Thư mục**: chọn thư mục có sẵn trong `projects/`, hoặc “+ Thư mục mới…” và gõ tên (Hub tạo
   `projects/<tên>/requirements` từ mẫu `_mau-du-an`).
3. **Lưu dự án** → hệ thống mã chạy lần đầu (1–2 phút).

## Viết docs trên máy cá nhân

```bash
git pull origin main                       # luôn pull trước: Hub và Actions cũng commit lên main
# sửa / thêm projects/<tên>/requirements/<module>/<chuc-nang>.md
git add projects/<tên>/requirements
git commit -m "Docs <tên>: <chức năng>"
git push origin main                       # 1–2 phút sau Hub có bản mới, Chat báo kết quả
```

Không sửa và không commit tay `projects/*/_hub/` (Actions ghi lại mỗi lần chạy); không sửa tay `docs/du-an/**`.
Chạy thử trên máy (cần Python 3): `python3 scripts/he-thong-ma/du_an.py <slug>`.

## Quy ước viết (giống ICS: `qc/requirements/requirement_template.md`)

- Mỗi file `.md` là một tài liệu; dòng `# ...` đầu tiên là tên.
- Phần `## 1. UI`: mỗi mục `### Trang N: <tên>` là một trang. **Ghi mã màn trong mục** (vd. `*Màn ABC-KH-010100*`):
  hệ thống gắn mã vào tiêu đề và chèn ảnh Figma mới nhất. Không tự viết mã khu vực / item (A03.07).
- Testcase: bảng có cột Given / When / Then ngay dưới mỗi UI. Yêu cầu `REQNN`, cần xác nhận ở cuối.
- Mã màn phải có trên Figma (tên frame `<MÃ> — <tên>`) hoặc trong mã đề xuất đã lưu ở Hub.
- Ảnh tự chụp: `images/` cạnh file `.md`, link tương đối.

## Có ảnh hưởng người khác không

- `projects/` và `docs/du-an/` không bị `.gitignore`; mỗi dự án một thư mục, không đụng code.
- Người khác pull về chỉ nhận thêm file `.md` và `_hub` sinh tự động. Pull trước khi làm để tránh conflict
  với commit của Hub / Actions.
