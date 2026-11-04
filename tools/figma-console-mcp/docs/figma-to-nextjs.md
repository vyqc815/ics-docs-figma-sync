---
title: "Figma → Next.js 1:1"
description: "Biến một frame Figma thành trang Next.js khớp thiết kế (đo được), kèm file MD cho từng trang và vòng kiểm tra tự động."
---

# Figma → Next.js 1:1

Pipeline biến **một frame trang trong Figma** thành **trang Next.js (App Router) khớp thiết kế**. Mỗi trang kèm một **file MD mô tả đầy đủ** để người hoặc AI dựng lại bằng bất kỳ ngôn ngữ nào, và một **bước kiểm tra tự động** để biết trang đã khớp hay chưa.

```
Figma frame ──export──▶ page-spec.json + asset + ảnh tham chiếu
                         │
                         ├─build──▶ app/<route>/page.tsx, components/figma/<trang>/*, public/figma/<trang>/*
                         │          docs/pages/<route>.md
                         │
trang đang chạy ──check──▶ PASS/FAIL + report.md + diff.png
```

## Cài đặt (một lần mỗi máy)

1. **Figma Desktop + plugin Desktop Bridge** (như khi dùng figma-console-mcp): Plugins → Development → Figma Desktop Bridge.
2. **CLI `figma-page`**, cài từ repo private (cần đã đăng nhập GitHub bằng `gh auth login`):

   ```bash
   npm install -g github:khanhtruongds-del/figma-console-mcp-pls
   ```

3. **Chrome** cho bước `check`. Nếu máy không có Chrome:

   ```bash
   npx @puppeteer/browsers install chrome-headless-shell@stable --path ~/.cache/puppeteer
   ```

   Hoặc chỉ đường dẫn bằng biến `CHROME_PATH`.

## Dùng trong một project

```bash
cd <project Next.js>
figma-page init                                   # tạo figma.pages.json + skill cho Claude Code
figma-page add trang-chu "<link Figma tới frame>" /   # khai báo trang
figma-page sync trang-chu                         # export từ Figma + sinh code + MD
npm run dev                                       # chạy app
figma-page check trang-chu                        # so với Figma; exit 1 nếu FAIL
figma-page note                                   # chỉ cập nhật dải ghi chú (link, kết quả check gần nhất)
```

Màn nào xuất quá 5 phút (Figma đang mở file khác, mất kết nối…) thì được bỏ qua để chạy tiếp các màn khác; cuối lượt in lệnh `figma-page export <các màn>` để chạy lại. Đổi giới hạn bằng `--page-timeout <giây>` (`0` = không giới hạn).

Lấy link frame trong Figma: chuột phải vào frame → **Copy/Paste as → Copy link to selection**.

### Thêm hàng loạt màn và chế độ "chỉ MD"

Với file Figma nhiều màn (như ICS), không cần `add` từng màn:

```bash
figma-page discover --main --doc-only      # mọi màn chính của trang Figma đang mở
figma-page sync                            # MD + dải ghi chú cho tất cả
```

- `discover` quét trang Figma đang mở (hoặc `--figma-page "<tên trang>"`, hoặc **cả file** với `--all-pages`) và đăng ký mọi frame cỡ màn hình. Hai màn trùng mã trên hai trang Figma khác nhau (màn được chép sang trang của vai trò khác) được giữ cả hai, tên thứ hai thêm `-2`. `--main` chỉ lấy **màn chính** theo quy ước tên (mã kết thúc bằng `00`, ví dụ `CD-KH-070100`); `--match <regex>` để tự lọc.
- Tên trang lấy từ mã màn (`cd-kh-070100`), route lấy từ tiêu đề sau dấu "—" (`/thu-vien/kien-thuc`). Bản biến thể như `-DK` có hậu tố `-dk`. `--route-prefix /cd` để thêm tiền tố.
- `--doc-only` (dùng được cả với `add`): màn chỉ có **file MD + dải ghi chú**, không sinh code, không xuất ảnh, không kiểm tra. Mỗi màn chỉ mất vài giây. Dải ghi chú ghi "🧩 Chưa có code".
- Chạy lại `discover` sẽ cập nhật, không tạo trùng. Màn đã đăng ký dưới tên khác (ví dụ đã có code) được giữ nguyên.

Không ghi tên trang thì lệnh chạy cho **mọi trang** trong `figma.pages.json`. `figma-page list` cho xem các trang và lần export gần nhất.

### `figma.pages.json`

```json
{
  "fileKey": "njkD5CTk7hOwoPtZt3kXey",
  "specDir": ".figma/pages",
  "docsDir": "docs/pages",
  "docLanguage": "vi",
  "fontSource": "google",
  "styling": "tailwind",
  "debugIds": true,
  "baseUrl": "http://localhost:3000",
  "thresholds": {},
  "pages": [
    { "name": "dd-05", "nodeId": "3496:84092", "route": "/luyen-de/lam-bai" }
  ]
}
```

| Khoá | Ý nghĩa |
|---|---|
| `fileKey` | File Figma của project. `export` từ chối đọc từ file khác. `add` tự điền từ link. |
| `specDir` | Nơi lưu spec, asset, ảnh tham chiếu và báo cáo, mỗi trang một thư mục. Nên commit để `check` chạy được trên máy khác và trong CI. |
| `appDir`, `componentsDir`, `publicDir` | Mặc định tự nhận `src/app` hoặc `app`, `components/figma`, `public`. |
| `docsDir`, `docLanguage` | Nơi ghi MD từng trang và ngôn ngữ (`vi` / `en`). |
| `fontSource` | `google` (mặc định), `local` (file font bạn tự thêm), `none` (app tự nạp font). |
| `styling` | `css-modules` (mặc định: mỗi vùng một file `.module.css`) hoặc `tailwind` (class Tailwind v4 viết thẳng trong JSX, giá trị Figma giữ nguyên dạng `w-[1440px]`, `[box-shadow:…]`; project phải dùng Tailwind). Đổi kiểu xong chạy `build`: file `.module.css` cũ do tool sinh sẽ tự bị xoá. |
| `share` | Chỉ dùng với `"styling": "tailwind"`. Vùng (section) nào sinh ra **giống hệt nhau trên từ 2 màn trở lên** — sidebar, header… — chỉ được sinh **một lần** vào `components/figma/shared/`, các màn import vào; quyết định trên toàn bộ màn có code nên không phụ thuộc thứ tự build. Icon/ảnh vào `public/figma/assets/`, đặt tên theo nội dung (SVG được bỏ phần đuôi id node Figma gắn vào) nên icon giống nhau chỉ có một file. `check` vẫn đo đủ từng hộp nhờ bảng đổi id trong `build.json`. |
| `debugIds` | Gắn `data-figma-id` cho mọi phần tử; `check` cần thuộc tính này để đo hộp. |
| `figmaNote` | Đặt dải ghi chú code ngay dưới mỗi frame trong Figma (mặc định bật). |
| `repoUrl`, `branch` | Repo và nhánh cho link trong dải ghi chú (mặc định: remote `origin` và nhánh hiện tại). |
| `demoUrl` | Địa chỉ bản deploy (vd. `https://web.vercel.app`). Dải ghi chú của màn có code thêm link **▶ Xem demo** tới `demoUrl` + route. |
| `sourceViewer` | `true`: link **📄 Spec MD** và **🧩 Code** trong dải ghi chú mở trang xem trên bản deploy (`demoUrl` + `/figma/<page>/spec` và `/code`) thay vì repo — người chỉ có quyền View trên Figma đọc được mà không cần tài khoản repo. App phải có các trang đó. |
| `codeStyle` | Theo quy ước code của project: `{ "kebabFiles": true, "arrowComponents": true, "importAlias": "@/", "prettier": true }` → tên file kebab-case, component dạng `export const X = (): React.JSX.Element => …`, import qua alias, và chạy Prettier (cấu hình của project) trên file sinh ra. |
| `baseUrl` | Địa chỉ app cho `check`; ghi đè bằng `--base-url`. |
| `thresholds` | `maxPixelDiffPercent` (0.5), `maxBoxDelta` (1), `maxTextBoxDelta` (2.5), `colorThreshold` (0.1). |

## Code được sinh ra

- Mỗi section cấp cao nhất của frame thành một component kèm CSS Module, chứa đúng giá trị Figma.
- Màu gắn biến Figma thành CSS variable trong phạm vi trang, ví dụ `var(--mau-chinh, #721ae6)`.
- Font qua `next/font`. Icon và ảnh được copy vào `public/figma/<trang>/`.
- Mọi file sinh ra mang dấu `@generated by figma-console-mcp` và **bị ghi đè ở lần build sau**. Muốn sửa tay một component: chép ra file mới (bỏ dấu) và import file đó. Tool **không bao giờ ghi đè file viết tay** (trừ khi có `--overwrite`).
- Hiện chỉ dựng ở **chiều rộng thiết kế**: trang rộng cố định, căn giữa. Nội dung chữ viết thẳng trong JSX.

## File MD từng trang

`docs/pages/<route>.md` có 10 phần:
1. Tổng quan và các vùng chính
2. Theme / token
3. Typography
4. **Cây layout đầy đủ**: kích thước, vị trí, bố cục, style, nội dung, node ID
5. Component
6. Nội dung nguyên văn
7. Ảnh / icon
8. Annotation, liên kết, ghi chú ẩn
9. Lưu ý độ chính xác
10. Quy tắc dựng lại

Đã thử cho AI chỉ đọc file này rồi dựng lại bằng HTML/CSS thuần (không xem spec hay code): mọi node lệch ≤ 4px.

## Kiểm tra độ khớp (`check`)

- Mở trang bằng Chrome headless ở đúng kích thước frame, ẩn lớp phủ của dev server.
- **So pixel** với ảnh tham chiếu Figma, bỏ qua khác biệt khử răng cưa và nét lệch dưới 1 pixel. Pixel trong vùng chữ được tính riêng, vì engine vẽ chữ khác nhau.
- **Đo hộp** mọi phần tử có `data-figma-id`. Ngưỡng 1px; riêng **phần tử lệch do chữ** dùng 2.5px. Phần tử lệch do chữ gồm: chữ, khung co theo chữ, phần tử bị chữ đẩy đi trong auto layout, và con của chúng.
- Báo cáo `report.md` nêu từng vùng lệch kèm **node Figma gây lệch**; `diff.png` tô đỏ chỗ lệch.

Kết quả đo trên trang DD-05 (1920×1554, 290 node) trong project Next.js 16: **PASS**, 0.03% pixel lệch ngoài vùng chữ, 289/289 hộp trong ngưỡng.

## Dải ghi chú code ngay dưới frame

Mặc định, `sync` và `check` đặt một **dải ghi chú cao khoảng 70px ngay dưới mỗi frame** trong Figma. Ai mở file cũng thấy, ở mọi chế độ, không cần Dev Mode, và không đụng tới comment hay annotation:

```
</>  /khoa-hoc  ·  📄 Spec MD ↗  ·  🧩 Code ↗  ·  📊 Báo cáo kiểm tra ↗
Kiểm tra 01/11 22:11: FAIL · hộp 426/427 · pixel ngoài chữ 0.034% · Lệch: “VẬT LÝ 12” rộng hơn 2.78px
```

- **Link bấm được** từ Figma mở thẳng file MD, thư mục code và báo cáo kiểm tra trên GitHub (hoặc GitLab). Link được dựng từ remote `origin` và nhánh git hiện tại của project; đặt `repoUrl` / `branch` trong `figma.pages.json` nếu muốn trỏ chỗ khác. Project chưa có remote thì dải ghi đường dẫn file thay cho link. Có `demoUrl` thì link đầu tiên là **▶ Xem demo**, mở đúng màn đó trên bản deploy.
- Link chỉ mở được khi code và MD **đã được push**, và người bấm phải có quyền xem repo (với repo private).

- Màu theo kết quả: **xanh** = PASS, **đỏ** = FAIL, **xám** = chưa kiểm tra bản build này.
- Dải rộng bằng frame, gồm 2 dòng chữ. Nhiều chỗ lệch thì chỉ ghi vài chỗ đầu, kèm "+N chỗ khác, xem report.md".
- Dải là một **group** (hình nền + 2 dòng chữ), không phải frame, nên Figma không in tên của nó lên canvas. Dải dạng frame từ phiên bản trước được tự đổi thành group, giữ nguyên vị trí.
- Dải **không bị khoá**: kéo thả tự do trong Figma. Pipeline nhận ra dải của mình qua dấu ẩn (`sharedPluginData`), nên mỗi lần chạy chỉ **sửa nội dung đúng dải đó, tại chỗ bạn đã đặt**, không tạo thêm và không kéo nó về chỗ cũ. Dải mới tạo thì nằm ngay dưới frame.
- Dải luôn nằm ngay dưới frame. Nếu chồng lên layer khác (ví dụ mũi tên nối luồng, nhãn màn kế tiếp), lệnh sẽ báo tên layer để team giãn bố cục sau.
- Dải nằm ngoài frame thiết kế nên không bị export vào code hay MD.
- `check` vẫn chạy khi Figma đóng (ví dụ trong CI): khi đó chỉ báo bỏ qua phần ghi chú.
- Tắt: `"figmaNote": false` trong `figma.pages.json`, hoặc thêm `--no-figma-note` vào lệnh.

Đặt dải ghi chú là sửa file Figma, nên cần quyền chỉnh sửa file.

## Ghi chú ẩn trên layer

Không cần tạo frame hay chữ để ghi chú. Pipeline đọc JSON trong `sharedPluginData` (namespace `figma_console`, key `spec`) của từng layer; **người xem file không thấy dữ liệu này**.

| Khoá | Tác dụng |
|---|---|
| `export` | `"png"` / `"svg"`: xuất cả layer thành một ảnh. `"none"`: không gộp thành icon. |
| `scale` | Tỉ lệ khi xuất PNG (mặc định 2). |
| `tag` | Thẻ HTML, ví dụ `"h1"`, `"header"`, `"button"`. |
| `href` | Biến layer thành liên kết. |
| `alt` | Alt text cho ảnh. |

Ghi bằng tool `figma_execute`, ví dụ `node.setSharedPluginData("figma_console", "spec", JSON.stringify({ tag: "h1" }))`.

Annotation do designer viết vẫn được đọc vào MD (phần 8), nhưng annotation **hiện cho người xem**: dùng nó cho ghi chú muốn dev đọc, không dùng cho dữ liệu cần ẩn.

## Dùng với AI

- `figma-page init` cài skill `.claude/skills/figma-to-nextjs/SKILL.md`, để Claude Code trong project tự theo đúng vòng export → build → check → sửa.
- Các bước cũng có sẵn dạng tool MCP: `figma_export_page_spec`, `figma_generate_nextjs_page`, `figma_generate_page_doc`, `figma_check_page_fidelity`.

## Những điều đã đo được về font

- Google Fonts và font cài trên máy cho **cùng** độ rộng chữ, nên nguồn font không phải nguyên nhân lệch.
- Figma **làm tròn lên** độ rộng chữ tự co và **không tính dấu cách cuối dòng**. Code sinh ra đã xử lý cả hai (`min-width` + bỏ dấu cách cuối).
- Phần lệch còn lại (≤ ~2px) đến từ khác biệt phiên bản font; nên thống nhất phiên bản font trong team.
