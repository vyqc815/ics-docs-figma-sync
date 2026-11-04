# tools/figma-console-mcp

Công cụ `figma-page` (Figma → code Next.js + MD, kiểm pixel, báo thay đổi, export qua REST) nằm ngay trong repo này,
để một repo một nhánh `main` là đủ mọi thứ. Nguồn: nhánh `feat/screen-registry` của figma-console-mcp-pls (911f9b1).

```bash
cd tools/figma-console-mcp && npm ci && npm run build:local     # một lần
node tools/figma-console-mcp/dist/figma-page.js help             # chạy từ thư mục gốc repo
```

- Sửa công cụ thì sửa ở đây, chạy test: `cd tools/figma-console-mcp && npx jest tests`.
- App ICS không build/lint thư mục này (tsconfig, eslint bỏ qua `tools/`).
- Workflow `.github/workflows/figma-codegen.yml` build và dùng bản ở đây.
