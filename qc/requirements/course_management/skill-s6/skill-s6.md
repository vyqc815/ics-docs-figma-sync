# Kỹ năng (S6) — Nghe / Đọc

> Màn **Kỹ năng (S6)** nằm trong từng **khoá học** của role **CD**, dùng để định nghĩa bài luyện kỹ năng của khoá theo
> 4 tab `Nghe`, `Đọc`, `Viết`, `Nói`. Tài liệu này viết cho **Nghe** và **Đọc**; `Viết`, `Nói` viết sau.
> Dữ liệu theo trung tâm CD đang chọn ở header.
> Mỗi bài kỹ năng là **bản ghi của Thư viện kỹ năng**: S6 tham chiếu bản ghi thư viện; thêm mới hoặc sửa tại S6 ghi
> thẳng vào thư viện, mọi khoá đang dùng bản ghi đó thấy nội dung mới.
>
> **Tổ chức theo cụm, cụm liên kết bài học:** giống Kiến thức (S1), mỗi tab chia bài kỹ năng theo **cụm** (panel Cụm bên
> phải); số cụm mỗi tab sinh từ Số buổi của loại đó ở Tổng quan (S2). Mỗi cụm liên kết **đúng 1 bài học**, mỗi bài học
> nhận **tối đa 1 cụm mỗi loại** (BE bắt trùng). Chi tiết bài học chỉ **hiển thị** bài của cụm đã liên kết, không chọn
> từng bài (xem khu vực Cụm liên kết với Chi tiết bài học).
>
> **Quyền sửa theo trạng thái khoá học:** chỉ sửa được khi khoá học đang `Nháp`. Khoá học `Công Khai` / `Vô hiệu`: màn
> này chỉ đọc (ẩn / disable mọi thao tác thêm, sửa, gỡ, AI); backend từ chối mọi request ghi.
>
> Ảnh là Figma `CD-KH-050100` → `CD-KH-050190` (section `Quy trình › 5 · Kỹ năng (S6)`). Tab Đọc mới có màn danh sách
> `CD-KH-050200`; các màn chi tiết của Đọc viết theo Nghe và ghi **UI cần bổ sung** tại chỗ. Ảnh Figma hiện còn vẽ
> panel `Học kỳ & bài học`, cột / ô `Bài học`: **UI cần cập nhật theo cụm** như requirement này. Đối chiếu ICS cũ xem mục 4.

## 1. UI

### Khung màn hình và tab kỹ năng

<p align="center">
  <a href="./images/01-nghe.png"><img src="./images/01-nghe.png" alt="Kỹ năng (S6) — tab Nghe" width="900" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Kỹ năng (S6), tab Nghe: bảng bài nghe bên trái; panel phải trên Figma còn là Học kỳ & bài học, cần đổi thành panel Cụm (Figma CD-KH-050100) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- CD vào khoá học → menu `Kỹ Năng (S6)`. Màn gồm thanh tab `Nghe` / `Đọc` / `Viết` / `Nói`, dòng `Khoá học: <tên khoá>`,
  panel trái **Danh sách bài** và panel phải **Cụm** của tab đang mở.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Tab kỹ năng | 4 tab cố định `Nghe`, `Đọc`, `Viết`, `Nói`, mọi trung tâm giống nhau; mặc định mở `Nghe`. Mỗi tab có bộ cụm riêng; đổi tab thì panel Cụm đổi theo tab và về `Tất cả cụm`. |
| `Khoá học:` | Tên khoá học (vd `Nhập Môn Tiếng Trung (HSK1)`); không gắn học kỳ / bài học. |
| Toolbar tiêu đề | Tên tab (hoặc tên cụm đang chọn) + badge `N bài nghe` / `N bài đọc` + badge cam `N thiếu thông tin` (ẩn khi 0); đang chọn cụm thì hai badge tính trong cụm. Nút tab Nghe: `Transcript AI`, `Soát lỗi AI`, `Preview mobile`, `+ Thêm bài nghe`. Nút tab Đọc: `Preview mobile`, `+ Thêm bài đọc`; `Tạo câu hỏi bằng AI`, `Soát lỗi bằng AI` nằm ở hàng tìm kiếm. |
| Hàng tìm kiếm | Ô `Tìm bài nghe, nội dung…` / `Tìm bài đọc, nội dung…`; `Sắp xếp`, `Trạng thái`. Lọc theo cụm bằng panel Cụm (không có lọc `Bài học`). |
| Nhập nhanh | Dòng cuối bảng `Nhập nhanh bài nghe — nhấn Enter để thêm` (xem khu vực Nhập nhanh). |
| Footer | `Hiển thị a–b trong N bài nghe`, phân trang 50 dòng / trang, số trang, `…`, Trước / Sau. |
| `+ Thêm bài nghe` | Menu 3 lựa chọn: `Thêm từ thư viện`, `Tạo bài nghe mới`, `Import Excel`. Kèm `Export Excel` (xem khu vực Import / Export Excel, **UI menu cần bổ sung**). |

**Điểm cần lưu ý:**

- Danh sách luôn là bài của **khoá đang mở**; chọn cụm ở panel Cụm là lọc, không đổi tập dữ liệu.
- Khoá học không `Nháp`: mọi nút thêm, menu dòng, nhập nhanh, AI, kéo thả, thao tác cụm bị ẩn / mờ; vẫn tìm, lọc, xem
  chi tiết, Preview.
- Tab `Viết`, `Nói` bấm được, dùng cùng mô hình panel Cụm; bảng và field theo requirement riêng (chưa viết).

#### Testcase — Khung màn hình và tab kỹ năng

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 1: Mở S6 lần đầu | High | Smoke | Flow 1 / REQ01 / REQ02 | CD | Khoá `Nháp` có 48 bài nghe, 36 bài đọc | **Given** vào khoá học, bấm `Kỹ Năng (S6)`<br>**When** màn tải<br>**Then** tab `Nghe` mở, badge `48 bài nghe`, panel Cụm chọn `Tất cả cụm` | - Dòng `Khoá học:` đúng tên khoá<br>- Footer `Hiển thị 1–48 trong 48 bài nghe`<br>- Không có panel / cột / lọc Bài học |
| Case 2: Đổi tab đổi bộ cụm | Medium |  | Flow 1 / REQ02 / REQ05 | CD | Tab Nghe đang chọn cụm `Chào hỏi`; tab Đọc có cụm riêng | **Given** bấm tab `Đọc`<br>**When** bảng tải<br>**Then** panel Cụm hiện cụm của Đọc, chọn `Tất cả cụm`, badge `36 bài đọc` | - Quay lại tab Nghe vẫn đúng bộ cụm Nghe |
| Case 3: Khoá không Nháp chỉ đọc | High |  | EX01 / REQ10 | CD | Khoá `Công Khai` | **Given** mở S6<br>**When** xem màn<br>**Then** không có nút Thêm, menu dòng, nhập nhanh, AI; tìm / lọc / Preview vẫn dùng | - Request ghi bị từ chối |
| Case 3a: Role khác / trung tâm khác truy cập S6 | High |  | EX08 | Role khác CD; CD đang chọn trung tâm khác | - | **Given** mở URL S6 của khoá<br>**When** gửi request thêm / gỡ bài<br>**Then** bị từ chối | - Không thay đổi dữ liệu |

---

### Bảng bài nghe

**Mô tả:**

- Danh sách bài nghe của khoá, mỗi dòng một bản ghi thư viện kỹ năng loại Nghe.

**Giải thích thành phần:**

| Cột | Yêu cầu |
|---|---|
| Checkbox | Chọn dòng cho thao tác hàng loạt; checkbox đầu bảng chọn cả trang. |
| `STT` + tay nắm kéo thả | Số thứ tự theo sắp xếp hiện tại, 2 chữ số; tay nắm chỉ hiện khi đang xem 1 cụm và Sắp xếp = `Thứ tự trong cụm`. |
| `Bài nghe` | Dòng 1 **Tên bài** (ngôn ngữ đích, vd `对话：初次见面`), dòng 2 **Mô tả** tiếng Việt, cắt `…` khi dài; hover hiện đủ. Bấm tên mở drawer Chi tiết. |
| `Âm thanh` | Nút phát, thanh tiến độ, thời lượng `mm:ss` (≥ 1 giờ hiện `h:mm:ss`). Chưa có file hiện `— chưa có file —` màu cam. Chỉ phát một bài tại một thời điểm, phát bài khác thì bài đang phát dừng. |
| `Cụm` | Nhãn cụm duy nhất của bài; bấm nhãn mở popup Thêm vào cụm / Gỡ khỏi cụm của bài đó. Không thuộc cụm nào hiện `Chưa phân cụm`. Không có nhãn `+N`. |
| `Nâng cao` | `Có` / `Không` (mặc định `Không`); `Có` = bài nâng cao, app không đẩy lên bước học chính, vẫn hiện trong danh sách luyện (**UI cần bổ sung**). |
| Menu `⋮` | `Mở chi tiết`, `Thêm vào cụm / Gỡ khỏi cụm`, `Transcript AI`, `Gỡ khỏi khoá`. |
| Nhãn AI dưới tên | `AI · đang tạo transcript`, `AI · đã tạo, chờ duyệt`, `? <lý do nghi sai>` (xem khu vực AI). |

**Điểm cần lưu ý:**

- Bài **thiếu thông tin** khi thiếu bất kỳ: file âm thanh, mô tả, hoặc chưa có câu hỏi nào; tên dòng có chấm cam và
  được đếm vào badge `N thiếu thông tin`.
- Thời lượng đọc từ file lúc tải lên, không giới hạn độ dài.
- Bảng không có cột `Bài học` (Figma còn vẽ cột này, **UI cần cập nhật** thành cột `Cụm`).
- Bảng hiện **đủ mọi field** của bài (Tên, Mô tả, Âm thanh, Số lượt kịch bản, Số câu hỏi, Nâng cao, Trạng thái, Cụm), **cuộn ngang**; ghim checkbox, STT, `Bài nghe` bên trái, `Cụm` và ⋮ bên phải (**UI cần cập nhật**).

#### Testcase — Bảng bài nghe

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 4: Phát âm thanh trong bảng | High | Smoke | Flow 1 / REQ03 | CD | Bài 01 có file 01:24 | **Given** bấm nút phát bài 01<br>**When** âm thanh chạy<br>**Then** thanh tiến độ chạy, thời lượng `01:24` | - Bấm phát bài 02 thì bài 01 dừng |
| Case 5: Bài chưa có file | High |  | REQ03 / REQ04 | CD | Bài 05 chưa tải file | **Given** xem dòng 05<br>**When** render<br>**Then** cột Âm thanh `— chưa có file —`, dòng tính thiếu thông tin | - Badge thiếu thông tin tăng 1 |
| Case 6: Thời lượng trên 1 giờ | Low |  | REQ03 | CD | File dài 1:02:45 | **Given** xem dòng<br>**When** render<br>**Then** hiện `1:02:45` | - Không cắt về 59:59 |
| Case 7: Nhãn cụm của bài | Medium |  | REQ05 / REQ06 | CD | Bài 03 thuộc cụm `Chào hỏi` | **Given** cột Cụm hiện `Chào hỏi`<br>**When** bấm nhãn<br>**Then** mở popup `Cụm của 1 bài` | - Popup chọn sẵn `Chào hỏi`<br>- Không có `+N` |

---

### Bảng bài đọc

<p align="center">
  <a href="./images/02-doc.png"><img src="./images/02-doc.png" alt="Kỹ năng (S6) — tab Đọc" width="900" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Kỹ năng (S6), tab Đọc (Figma CD-KH-050200) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- Danh sách bài đọc của khoá, mỗi dòng một bản ghi thư viện kỹ năng loại Đọc.

**Giải thích thành phần:**

| Cột | Yêu cầu |
|---|---|
| `STT`, checkbox, `Cụm`, menu `⋮` | Như bảng Nghe; menu `⋮` thay `Transcript AI` bằng `Tạo câu hỏi bằng AI`. |
| `Bài đọc` | Tên bài (ngôn ngữ đích) + mô tả tiếng Việt, như cột `Bài nghe`. |
| `Đoạn văn` | Tối đa 2 dòng, dài thì cắt `…`; chưa có hiện `— chưa có đoạn văn —` màu cam. |
| Cột khác | `Audio đọc mẫu`, `Số câu hỏi`, `Từ vựng liên quan` (số từ), `Nâng cao`, `Trạng thái`, `Cụm`; bảng cuộn ngang, ghim như bảng Nghe. |

**Điểm cần lưu ý:**

- Bài đọc **thiếu thông tin** khi thiếu bất kỳ: đoạn văn, mô tả, hoặc chưa có câu hỏi. Audio đọc mẫu không bắt buộc,
  không tính thiếu.
- Tab Đọc lọc theo cụm bằng panel Cụm như tab Nghe.

#### Testcase — Bảng bài đọc

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 8: Hiển thị bảng Đọc | High | Smoke | Flow 1 / REQ03 | CD | Bài 05 chưa có đoạn văn | **Given** mở tab Đọc<br>**When** render<br>**Then** cột Đoạn văn cắt `…` khi dài; bài 05 hiện `— chưa có đoạn văn —` | - Bài 05 tính thiếu thông tin |
| Case 9: Tìm theo nội dung đoạn văn | Medium |  | REQ06 | CD | Bài 06 đoạn văn chứa `多少钱` | **Given** gõ `多少钱`<br>**When** tìm<br>**Then** chỉ còn bài 06 | - Tìm không phân biệt hoa thường |

---

### Panel Cụm và Số cụm

**Mô tả:**

- Panel bên phải của mỗi tab quản lý cụm của **kỹ năng đó** (Nghe, Đọc, Viết, Nói mỗi tab một bộ cụm riêng), giống
  Panel Cụm của Kiến thức (S1): xem số bài mỗi cụm, chọn cụm để lọc bảng, đổi tên cụm, liên kết cụm với bài học,
  Chia cụm bằng AI; số cụm sinh từ Số buổi của loại ở Tổng quan (S2). **UI cần bổ sung** (Figma đang vẽ panel `Học kỳ & bài học`).
  Chia cụm bằng AI. **UI cần bổ sung** (Figma đang vẽ panel `Học kỳ & bài học`).

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| `Tất cả cụm` + badge `N cụm` | Tiêu đề panel và số cụm hiện có; chọn để xem mọi bài của tab (mặc định). |
| `Số cụm` | **Chỉ đọc**, = tổng `Số buổi` của các dòng Nội dung buổi học có Loại = kỹ năng của tab ở Tổng quan (S2); ghi chú `Theo Tổng quan (S2) · N buổi`. Hệ thống tự tạo đủ cụm rỗng `Chủ đề 1` … `Chủ đề N`; CD đổi tên, chia bài, liên kết bài học. Chưa có buổi thì panel hiện `Chưa có cụm. Nhập Số buổi cho loại <Nghe> ở Tổng quan (S2) để tạo cụm.` |
| `Chia cụm bằng AI` | AI đề xuất chia các bài của tab vào cụm theo chủ đề nội dung; kết quả chờ duyệt, CD áp dụng hoặc bỏ, theo cùng quy tắc popup Chia cụm bằng AI của S1. |
| Dòng cụm | `NN. <tên cụm>` + badge số bài của cụm (0 hiện xám) + chip bài học đã liên kết (`HK I · Bài 3`) hoặc nhãn cam `Chưa liên kết`; chọn để lọc bảng trái, tiêu đề bảng đổi thành tên cụm. Menu ⋮: `Đổi tên`, `Liên kết bài học`. Không có `Xoá cụm`. |
| Popup `Liên kết bài học` | Như S1: cây `<kỳ> › Bài N`, radio chọn đúng 1 bài; bài đã có cụm **cùng loại kỹ năng** mờ kèm `Đã liên kết: <cụm>`; `Bỏ liên kết`; `Huỷ` / `Lưu`. |
| `Chưa phân cụm` | Badge cam = số bài chưa thuộc cụm nào; chọn để lọc. |
| `Thêm cụm mới` | **Bỏ**: số cụm chỉ do S2 quyết định. |

**Điểm cần lưu ý:**

- Một bài kỹ năng thuộc **tối đa 1 cụm** của tab đó (hoặc `Chưa phân cụm`); số đếm cập nhật ngay sau thêm / gỡ bài, thêm / gỡ cụm.
- Không xoá cụm tại S6; bớt cụm bằng cách giảm Số buổi của loại ở S2 (chỉ được khi cụm cuối rỗng và chưa liên kết).
- **Liên kết bài học:** một cụm ↔ đúng 1 bài học; một bài học nhận tối đa 1 cụm Nghe, 1 cụm Đọc, 1 cụm Viết, 1 cụm Nói.
  BE kiểm tra trùng khi lưu (EX13); đổi bài = gỡ liên kết cũ. Thêm / gỡ / chuyển bài giữa cụm không cần cảnh báo, bài học
  phản ánh cụm ngay.
- Cụm đang chọn là giá trị mặc định cho `Thêm vào cụm` ở popup thêm / tạo, Nhập nhanh và Import; đang ở `Tất cả cụm` /
  `Chưa phân cụm` thì bài mới vào `Chưa phân cụm`.
- Cụm là mắt xích duy nhất giữa bài kỹ năng và bài học; màn S6 hiện liên kết qua chip bài học trên dòng cụm.

#### Testcase — Panel Cụm và Số cụm

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 10: Lọc theo cụm | High | Smoke | Flow 1 / REQ06 | CD | Cụm `Chào hỏi` có 3 bài nghe | **Given** bấm `Chào hỏi` ở panel Cụm<br>**When** bảng lọc<br>**Then** 3 bài, tiêu đề bảng `Chào hỏi` + `3 bài nghe` | - Footer `1–3 trong 3` |
| Case 11: Lọc Chưa phân cụm | High |  | REQ06 | CD | 40 bài chưa thuộc cụm | **Given** bấm `Chưa phân cụm`<br>**When** bảng lọc<br>**Then** 40 bài, cột Cụm hiện `Chưa phân cụm` | - Badge `40` cam |
| Case 12: Cụm sinh từ S2 | High | Smoke | Flow 8 / REQ05 | CD | S2 có dòng Loại `Nghe` tổng 5 buổi | **Given** mở tab Nghe<br>**When** xem panel Cụm<br>**Then** `Chủ đề 1` … `Chủ đề 5`, Số cụm chỉ đọc `5` | - Tab Đọc không bị tạo cụm |
| Case 12a: Liên kết cụm với bài học | High | Smoke | Flow 8 / REQ05 | CD | Cụm `Chào hỏi`, Bài 1 chưa có cụm Nghe | **Given** ⋮ cụm › `Liên kết bài học`, chọn `HK I · Bài 1`, Lưu<br>**When** lưu xong<br>**Then** chip `HK I · Bài 1` trên cụm; Chi tiết Bài 1 tab Kỹ năng hiện 3 bài nghe | - Bài 1 vẫn liên kết thêm được cụm Đọc |
| Case 12c: Bài đã có cụm cùng loại | High |  | EX13 / REQ05 | CD | Bài 1 đã liên kết cụm Nghe `Chào hỏi` | **Given** cụm `Gia đình` › `Liên kết bài học`<br>**When** xem Bài 1; gửi request trực tiếp<br>**Then** Bài 1 mờ `Đã liên kết: Chào hỏi`; API từ chối | - Không có `Xoá cụm` trong menu |
| Case 12b: Chia cụm bằng AI | Medium |  | Flow 8 / REQ05 / REQ11 | CD | 20 bài chưa phân cụm | **Given** bấm `Chia cụm bằng AI`<br>**When** AI đề xuất, CD áp dụng<br>**Then** bài vào cụm theo đề xuất | - Bỏ đề xuất thì cụm không đổi |

---

### Tìm kiếm, lọc và sắp xếp

**Mô tả:**

- Thu hẹp bảng trái; các điều kiện kết hợp với nhau và với cụm đang chọn ở panel Cụm.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Ô tìm | Khớp một phần, không phân biệt hoa thường, theo tên bài, mô tả, nội dung (kịch bản với Nghe, đoạn văn với Đọc). Tìm sau khi ngừng gõ 2 giây hoặc Enter. |
| Cụm | Chọn ở panel Cụm (`Tất cả cụm`, một cụm, hoặc `Chưa phân cụm`); không có dropdown lọc riêng trên toolbar. |
| `Sắp xếp` | `Thứ tự thêm` (mặc định), `Tên A–Z`, `Mới cập nhật`, `Thứ tự trong cụm` (chỉ khi đang xem 1 cụm). |
| `Trạng thái` | `Tất cả` (mặc định), `Nháp`, `Công khai`, `Vô hiệu` của bản ghi thư viện. |
| `Nâng cao` | `Tất cả` (mặc định), `Có`, `Không` (**UI cần bổ sung**). |

**Điểm cần lưu ý:**

- Đổi điều kiện đưa về trang 1; badge trên tiêu đề tính theo cụm đang chọn, không đổi theo tìm / Trạng thái.
- Kéo thả chỉ đổi **thứ tự bài trong cụm** (là thứ tự hiển thị ở bài học liên kết); các kiểu sắp xếp khác chỉ để xem.
- Không có kết quả hiện `Không tìm thấy bài nghe phù hợp` kèm nút `Xoá bộ lọc`.

#### Testcase — Tìm kiếm, lọc và sắp xếp

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 13: Kết hợp tìm và lọc cụm | High |  | Flow 1 / REQ06 | CD | Cụm `Gia đình` có 3 bài, 1 bài tên chứa `家` | **Given** chọn cụm `Gia đình`, gõ `家`<br>**When** tìm<br>**Then** 1 bài | - Về trang 1 |
| Case 13a: Kéo thả thứ tự trong cụm | Medium |  | REQ06 | CD | Đang xem cụm `Gia đình`, Sắp xếp = `Thứ tự trong cụm` | **Given** bảng của cụm<br>**When** kéo dòng 3 lên vị trí 1<br>**Then** thứ tự trong cụm được lưu | - Tải lại vẫn giữ<br>- Thứ tự ở cụm khác không đổi |
| Case 14: Sắp xếp Tên A–Z | Medium |  | REQ06 | CD | Có bài tiếng Trung và tiếng Anh | **Given** chọn `Tên A–Z`<br>**When** bảng sắp lại<br>**Then** theo bảng chữ của ngôn ngữ, STT đánh lại | - Thứ tự thêm giữ nguyên khi đổi về |
| Case 15: Lọc trạng thái Vô hiệu | Medium |  | REQ06 / REQ09 | CD | 2 bài `Vô hiệu` | **Given** chọn `Trạng thái: Vô hiệu`<br>**When** lọc<br>**Then** 2 bài | - Bài Vô hiệu vẫn gỡ được |
| Case 15a: Lọc Nâng cao và cuộn ngang | Medium |  | REQ06 | CD | 4 bài Nâng cao = Có | **Given** chọn `Nâng cao: Có`, cuộn ngang<br>**When** render<br>**Then** 4 bài; thấy đủ cột Số câu hỏi, Nâng cao, Trạng thái; cột ghim không trôi | - Kết hợp được với cụm, Trạng thái |

---

### Drawer Chi tiết bài nghe

<p align="center">
  <a href="./images/03-chi-tiet-bai-nghe.png"><img src="./images/03-chi-tiet-bai-nghe.png" alt="Drawer Chi tiết bài nghe" width="900" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Drawer Chi tiết bài nghe: tên, mô tả, âm thanh, kịch bản 3 lượt, câu hỏi; ô Bài học trên Figma đổi thành Cụm (Figma CD-KH-050110) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- Mở từ tên bài hoặc menu `⋮ › Mở chi tiết`. Drawer trượt từ phải phủ panel Cụm; dòng đang mở tô sáng.
- Lưu = sửa **bản ghi thư viện**; mọi khoá dùng bài này thấy nội dung mới.

**Giải thích field:**

| Field | Yêu cầu |
|---|---|
| Tiêu đề | `Chi tiết bài nghe` + dòng phụ `Bài nghe NN`; `×` đóng, hỏi xác nhận nếu có thay đổi chưa lưu. |
| `Tên bài` * | Bắt buộc, ngôn ngữ đích, tối đa 200 ký tự. |
| `Mô tả` * | Bắt buộc để đủ thông tin, tiếng Việt, tối đa 500 ký tự. Trống vẫn lưu được nhưng bài tính thiếu thông tin. |
| `Cụm` | Chỉ đọc: chip cụm bài đang thuộc (hoặc `Chưa phân cụm`) kèm bài học mà cụm liên kết; `Sửa cụm` mở popup Thêm vào cụm / Gỡ khỏi cụm. Drawer không có field `Bài học`. |
| `Nâng cao` | Toggle `Không` (mặc định) / `Có`; cùng ý nghĩa field Nâng cao của Kiến thức (S1): `Có` = bài nâng cao, không đẩy lên bước học chính. (**UI cần bổ sung**) |
| `Âm thanh` | Trình phát `00:00 / mm:ss`; `Tải lên` / `Thay` / `Xoá`; chỉ `.mp3`, tối đa 50MB (theo `file_limits.json`, **khác Figma** ghi `MP3 / WAV · 25 MB`). |
| `Kịch bản · N lượt` | Danh sách lượt thoại theo thứ tự: nhãn người nói (`A`, `B`…), câu gốc, `Phiên âm ·`, `Dịch ·`, mốc `start – end` theo audio (`mm:ss.s`, **UI cần bổ sung**). Thêm / sửa / xoá / kéo thả lượt; lượt có giá trị AI chờ duyệt viền nét đứt cam với `✓ Duyệt` / `↺ Hoàn tác`. |
| `Câu hỏi` | Tóm tắt `N câu hỏi · <loại> k · …` và `Mở chi tiết ›` dẫn sang màn Chi tiết câu hỏi của Thư viện bài tập (`CD-KH-070301` Listening); chưa có câu hiện `0 câu hỏi` màu cam. |
| Footer | Ghi chú `Lưu = sửa bản ghi thư viện; mọi khoá dùng bài này thấy nội dung mới`; `Huỷ`, `Lưu`. |

**Điểm cần lưu ý:**

- Mốc thời gian lượt dùng để app học viên tô sáng câu đang phát; AI transcript điền sẵn, CD sửa tay được; lượt không
  có mốc vẫn lưu được.
- Phiên âm theo ngôn ngữ trung tâm (pinyin, furigana / romaji, romanization…); trung tâm tiếng Anh / Đức / Pháp để trống.
- Lưu thất bại giữ dữ liệu cũ, Toast `Có Lỗi Xảy Ra`.

#### Testcase — Drawer Chi tiết bài nghe

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 16: Sửa và lưu bài nghe | High | Smoke | Flow 5 / REQ04 / REQ07 | CD | Bài 01 đang dùng ở 2 khoá | **Given** mở chi tiết, sửa Mô tả, thêm lượt B<br>**When** bấm `Lưu`<br>**Then** bảng cập nhật; mở khoá kia thấy nội dung mới | - Toast `Thành Công` `Đã lưu bài nghe.` |
| Case 17: Tên trống không lưu | High |  | EX02 / REQ04 | CD | Drawer đang mở | **Given** xoá Tên bài<br>**When** bấm `Lưu`<br>**Then** viền đỏ Tên bài, không lưu | - Không có Toast thành công |
| Case 18: Tải file sai loại / quá dung lượng | High |  | EX03 / REQ03 | CD | File `.wav` 10MB và `.mp3` 60MB | **Given** tải từng file<br>**When** kiểm tra<br>**Then** cả hai bị từ chối, Toast `Cảnh Báo` nêu lý do | - Không thay file cũ |
| Case 19: Đóng khi có thay đổi | Medium |  | REQ07 | CD | Đã sửa chưa lưu | **Given** bấm `×`<br>**When** popup xác nhận<br>**Then** `Huỷ` giữ drawer, `Bỏ thay đổi` đóng | - Dữ liệu không đổi |
| Case 20: Mở chi tiết câu hỏi | Medium |  | Flow 5 / REQ08 | CD | Bài có 5 câu | **Given** bấm `Mở chi tiết ›`<br>**When** điều hướng<br>**Then** mở màn Chi tiết câu hỏi Listening của bài | - Quay lại giữ drawer |
| Case 20a: Lưu drawer thất bại | Medium |  | EX09 | CD | Drawer bài nghe đang mở, giả lập mất mạng | **Given** sửa Mô tả<br>**When** bấm `Lưu`<br>**Then** Toast `Có Lỗi Xảy Ra` | - Dữ liệu giữ giá trị cũ |

---

### Drawer Chi tiết bài đọc

**Mô tả:**

- Giống drawer bài nghe, thay khối Âm thanh + Kịch bản bằng khối Đoạn văn (**UI cần bổ sung**, Figma chưa vẽ).

**Giải thích field:**

| Field | Yêu cầu |
|---|---|
| `Tên bài` *, `Mô tả` *, `Cụm`, `Nâng cao`, `Câu hỏi`, Footer | Như drawer bài nghe; `Mở chi tiết ›` dẫn sang `CD-KH-070302` Reading. |
| `Đoạn văn` * | Nhiều dòng, ngôn ngữ đích; trống thì bài tính thiếu thông tin. Có thể tách câu: mỗi câu có `Phiên âm ·`, `Dịch ·` (tuỳ chọn, AI điền được). |
| `Audio đọc mẫu` | Không bắt buộc; `.mp3` ≤ 50MB; có file thì app học viên phát kèm đoạn văn. |
| `Từ vựng liên quan` | Chọn nhiều từ trong Kiến thức (S1) Từ vựng của chính khoá; chip có `×`; dùng để app tô sáng và tra nhanh trong đoạn văn. |

**Điểm cần lưu ý:**

- Từ vựng liên quan chỉ là tham chiếu, sửa từ ở S1 thì đoạn văn thấy nội dung mới; gỡ từ khỏi khoá ở S1 thì tự mất
  khỏi danh sách này.

#### Testcase — Drawer Chi tiết bài đọc

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 21: Sửa đoạn văn và lưu | High | Smoke | Flow 5 / REQ04 | CD | Bài đọc 05 chưa có đoạn văn | **Given** nhập đoạn văn, bấm `Lưu`<br>**When** lưu xong<br>**Then** bảng hiện đoạn văn, bài hết thiếu thông tin | - Badge thiếu giảm 1 |
| Case 22: Gắn từ vựng liên quan | Medium |  | REQ04 | CD | S1 có từ `爸爸` | **Given** chọn `爸爸` ở Từ vựng liên quan<br>**When** lưu<br>**Then** chip `爸爸` hiện trong drawer | - Gỡ `爸爸` ở S1 thì chip biến mất |
| Case 23: Audio đọc mẫu không bắt buộc | Low |  | REQ04 | CD | Bài đọc có đoạn văn, không audio | **Given** xem bảng<br>**When** render<br>**Then** bài không tính thiếu thông tin | - Preview phát được khi có audio |

---

### Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi cụm

**Mô tả:**

- Menu `⋮` cuối dòng; popup gán bài vào **một** cụm (chuyển cụm nếu đã có), hoặc gỡ khỏi cụm (giống popup cụm của S1, **UI cần bổ sung**).

**Giải thích thành phần:**

| Mục | Yêu cầu |
|---|---|
| `Mở chi tiết` | Mở drawer. |
| `Thêm vào cụm / Gỡ khỏi cụm` | Mở popup `Cụm của N bài` (N bài đang chọn: 1 khi mở từ dòng). |
| `Transcript AI` (Nghe) / `Tạo câu hỏi bằng AI` (Đọc) | Chạy AI cho riêng bài đó (xem khu vực AI). |
| `Gỡ khỏi khoá` | Mở popup Gỡ khỏi khoá. |
| Popup — Tìm cụm | Tìm theo tên cụm của tab. |
| Popup — Danh sách cụm | **Radio** từng cụm + số bài của cụm, thêm `Chưa phân cụm` (= gỡ khỏi cụm). Mọi bài đang chọn cùng cụm thì chọn sẵn cụm đó. |
| Popup — `Huỷ` / `Lưu` | Lưu: các bài chuyển vào cụm đã chọn (rời cụm cũ); chọn `Chưa phân cụm` thì gỡ khỏi cụm. Bài học liên kết cụm cũ / mới phản ánh ngay, không cảnh báo. |

**Điểm cần lưu ý:**

- Popup không tạo cụm mới (cụm sinh theo Số buổi ở Tổng quan (S2)).
- Bài bị gỡ khỏi cụm thì về `Chưa phân cụm`, vẫn còn trong khoá, không xuất hiện ở bài học nào.
- Sau khi lưu, bài có thể biến mất khỏi bảng nếu đang lọc theo cụm vừa gỡ; Toast nêu rõ kết quả.

#### Testcase — Menu thao tác dòng và Popup cụm

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 24: Thêm bài vào cụm từ menu dòng | High | Smoke | Flow 6 / REQ05 | CD | Bài 05 chưa phân cụm | **Given** `⋮ › Thêm vào cụm / Gỡ khỏi cụm`, chọn `Chào hỏi`<br>**When** lưu<br>**Then** cột Cụm `Chào hỏi`, badge `Chào hỏi` +1, Chưa phân cụm −1 | - Chỉ chọn được 1 cụm<br>- Toast `Thành Công` |
| Case 24a: Chuyển cụm bài đang hiển thị ở bài học | High |  | Flow 6 / REQ05 | CD | Bài 01 thuộc `Chào hỏi` (liên kết Bài 2); `Gia đình` liên kết Bài 3 | **Given** popup cụm, chọn `Gia đình`<br>**When** lưu<br>**Then** bài chuyển cụm, không cảnh báo | - Bài 2 hết bài 01, Bài 3 có bài 01 |
| Case 25: Gỡ khỏi cụm cuối cùng | Medium |  | Flow 6 / REQ05 | CD | Bài 01 chỉ thuộc cụm `Chào hỏi` | **Given** chọn `Chưa phân cụm`<br>**When** lưu<br>**Then** cột Cụm `Chưa phân cụm`, Chưa phân cụm +1 | - Bài vẫn trong khoá |
| Case 25a: Gọi API thêm bài vào cụm của tab / khoá khác | Medium |  | EX10 | CD | Cụm X thuộc tab Đọc hoặc khoá khác | **Given** gửi request thêm bài nghe vào cụm X<br>**When** backend xử lý<br>**Then** bị từ chối | - Bài nghe giữ nguyên |

---

### Nhập nhanh

**Mô tả:**

- Dòng cuối bảng tạo nhanh bài chỉ với tên, các field khác bổ sung sau ở drawer.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Ô nhập | Placeholder `Nhập nhanh bài nghe — nhấn Enter để thêm` / `… bài đọc …`; Enter hoặc nút `+` tạo bài. |
| Kết quả | Tạo bản ghi thư viện mới (trạng thái `Nháp`), gắn vào khoá, thuộc cụm đang chọn ở panel Cụm (đang ở `Tất cả cụm` / `Chưa phân cụm` thì vào `Chưa phân cụm`), thêm vào cuối danh sách, ô nhập trống và giữ focus; Toast `Đã thêm 1 bài nghe vào <tên cụm>.`. |

**Điểm cần lưu ý:**

- Bài vừa tạo tính thiếu thông tin (chưa có file / đoạn văn, mô tả, câu hỏi).
- Cho phép trùng tên; không tạo khi rỗng hoặc chỉ khoảng trắng.

#### Testcase — Nhập nhanh

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 26: Nhập nhanh tạo bài | High | Smoke | Flow 4 / REQ04 | CD | Đang chọn cụm `Chào hỏi` | **Given** gõ `我的一天`, Enter<br>**When** tạo xong<br>**Then** bài mới cuối bảng, thuộc cụm `Chào hỏi`, badge +1, thiếu thông tin +1 | - Ô nhập trống, giữ focus |
| Case 26a: Nhập nhanh ở Tất cả cụm | Medium |  | Flow 4 / REQ04 | CD | Đang ở `Tất cả cụm` | **Given** gõ `我的家`, Enter<br>**When** tạo xong<br>**Then** bài thuộc `Chưa phân cụm` | - Toast `Đã thêm 1 bài nghe vào Chưa phân cụm.` |
| Case 27: Nhập rỗng | Low |  | EX02 | CD | Ô nhập chỉ có khoảng trắng | **Given** Enter<br>**When** kiểm tra<br>**Then** không tạo, không Toast | - |

---

### Chọn nhiều và thao tác hàng loạt

<p align="center">
  <a href="./images/04-chon-nhieu.png"><img src="./images/04-chon-nhieu.png" alt="Chọn nhiều — thao tác hàng loạt" width="900" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Thanh thao tác khi chọn 3 bài nghe (Figma CD-KH-050120) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- Tick ít nhất 1 dòng thì hàng tìm kiếm đổi thành thanh thao tác hàng loạt.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| `Đã chọn N bài nghe` | Số bài đang chọn, kể cả ở trang khác. |
| `Chọn tất cả N bài nghe` | Chọn toàn bộ bài thoả bộ lọc hiện tại (mọi trang). |
| `Transcript AI (k)` (Nghe) / `Tạo câu hỏi bằng AI (k)` (Đọc) | k = số bài đang chọn đủ điều kiện (Nghe: có file âm thanh; Đọc: có đoạn văn); k = 0 thì mờ. |
| `Soát lỗi AI` | AI soát các bài đang chọn. |
| `Thêm vào cụm / Gỡ khỏi cụm` | Mở popup `Cụm của N bài` cho mọi bài đang chọn. |
| `Gỡ khỏi khoá (N)` | Mở popup Gỡ khỏi khoá cho N bài. |
| `Bỏ chọn` | Bỏ hết lựa chọn, trở về hàng tìm kiếm. |

**Điểm cần lưu ý:**

- Đổi tab hoặc đổi bộ lọc thì bỏ chọn.

#### Testcase — Chọn nhiều và thao tác hàng loạt

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 28: Thêm vào cụm hàng loạt | High | Smoke | Flow 6 / REQ05 | CD | Chọn 3 bài chưa phân cụm | **Given** `Thêm vào cụm / Gỡ khỏi cụm`, tick `Gia đình`<br>**When** lưu<br>**Then** 3 bài có cụm `Gia đình`, badge `Gia đình` +3 | - Toast `Đã thêm 3 bài nghe vào cụm Gia đình.` |
| Case 29: Chọn tất cả qua nhiều trang | Medium |  | REQ05 | CD | 48 bài, lọc còn 60 > 50 | **Given** `Chọn tất cả`<br>**When** đếm<br>**Then** `Đã chọn 60 bài nghe` | - Gỡ (60) đúng số |
| Case 30: Transcript AI (k) đếm đúng | Medium |  | REQ11 | CD | Chọn 3 bài, 1 bài chưa có file | **Given** xem nút<br>**When** render<br>**Then** `Transcript AI (2)` | - Chọn toàn bài chưa file thì nút mờ |

---

### Popup Thêm bài từ thư viện

<p align="center">
  <a href="./images/07-popup-them-tu-thu-vien.png"><img src="./images/07-popup-them-tu-thu-vien.png" alt="Popup Thêm bài nghe từ thư viện" width="700" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Popup Thêm bài nghe từ thư viện: lọc Kho / Cấp độ / Dạng câu, bài đã có bị khoá; ô Gán vào bài học trên Figma đổi thành Thêm vào cụm (Figma CD-KH-050150) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- `+ Thêm bài nghe › Thêm từ thư viện` (hoặc nút ở màn trống): chọn bài có sẵn trong Thư viện kỹ năng của trung tâm để
  gắn vào khoá. Tab Đọc tương tự với bài đọc (**UI cần bổ sung**).

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Tiêu đề | `Thêm bài nghe từ thư viện` + mô tả `Chọn bài nghe có sẵn trong thư viện để thêm vào Kỹ năng (S6) · <cấp độ khoá>. Bài đã có sẽ bị khoá.` |
| Ô tìm | `Tìm tên bài nghe, nội dung…`. |
| `Kho` | `Thư viện kỹ năng` (mặc định, mọi bài của trung tâm), `Khoá học` (bài tạo từ S6 của các khoá). |
| `Cấp độ` | Mặc định = cấp độ của khoá đang mở; chọn cấp độ khác hoặc `Tất cả`. |
| `Dạng câu` | `Tất cả` (mặc định) hoặc một loại câu hỏi mà bài có. |
| Bảng | Checkbox, `STT`, `Bài nghe`, `Âm thanh` (phát được). Bài đã có trong khoá mờ, tick sẵn, không bỏ tick được. Không có cột `Bài học`. |
| `Thêm vào cụm` | Dropdown cụm của tab, mặc định cụm đang chọn ở panel Cụm; chọn được `Chưa phân cụm`. |
| Footer | `Đã chọn N bài nghe · M bài đã có trong khoá`; `Huỷ`; `Thêm N bài` (N không tính bài đã có; N = 0 thì mờ). |

**Điểm cần lưu ý:**

- Thêm là gắn **tham chiếu** bản ghi thư viện, không sao chép; một bản ghi gắn vào một khoá tối đa 1 lần.
- Bài `Vô hiệu` trong thư viện không hiện trong popup.

#### Testcase — Popup Thêm bài từ thư viện

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 31: Thêm 3 bài từ thư viện | High | Smoke | Flow 2 / REQ04 / REQ05 | CD | Thư viện có bài chưa dùng trong khoá | **Given** tick 3 bài, `Thêm vào cụm` = `Chào hỏi`<br>**When** bấm `Thêm 3 bài`<br>**Then** 3 bài vào bảng thuộc cụm `Chào hỏi`, badge tổng +3 | - Toast `Thành Công` `Đã thêm 3 bài nghe.` |
| Case 32: Bài đã có bị khoá | High |  | EX04 / REQ04 | CD | Bài 02 đã trong khoá | **Given** mở popup<br>**When** xem dòng 02<br>**Then** mờ, tick sẵn, không bỏ được; footer `1 bài đã có trong khoá` | - Không gắn trùng |
| Case 33: Lọc Cấp độ mặc định | Medium |  | REQ04 | CD | Khoá cấp độ HSK1 | **Given** mở popup<br>**When** xem bộ lọc<br>**Then** `Cấp độ: HSK1`, đổi sang `Tất cả` thấy bài cấp khác | - Kho mặc định Thư viện kỹ năng |

---

### Popup Tạo bài mới

<p align="center">
  <a href="./images/08-popup-tao-bai-nghe.png"><img src="./images/08-popup-tao-bai-nghe.png" alt="Popup Tạo bài nghe mới" width="700" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Popup Tạo bài nghe mới (Figma CD-KH-050160) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- `+ Thêm bài nghe › Tạo bài nghe mới`: tạo bản ghi thư viện mới rồi gắn vào khoá. Tab Đọc: `Tạo bài đọc mới` với
  `Đoạn văn *` thay cho `Âm thanh` (**UI cần bổ sung**).

**Giải thích field:**

| Field | Yêu cầu |
|---|---|
| Tiêu đề | `Tạo bài nghe mới` + `Bài mới được lưu vào Thư viện kỹ năng và thêm vào Kỹ năng (S6) của khoá này.` |
| `Tên bài` * | Bắt buộc, placeholder `Nhập tên bài (vd 对话：初次见面)`. |
| `Thêm vào cụm` | Mặc định cụm đang chọn ở panel Cụm; có `Chưa phân cụm`. |
| `Mô tả` | Không bắt buộc lúc tạo. |
| `Âm thanh` * (Nghe) | Kéo thả hoặc chọn file `.mp3` ≤ 50MB (**khác Figma** `MP3 / WAV · 25 MB`); bắt buộc khi tạo bằng popup này. |
| `Đoạn văn` * (Đọc) | Nhiều dòng, bắt buộc. |
| `Tạo transcript bằng AI sau khi tải lên` (Nghe) | Checkbox, mặc định tick; tick thì sau khi tạo chạy Transcript AI cho bài. Đọc: `Tạo câu hỏi bằng AI sau khi tạo`, mặc định không tick. |
| Footer | Ghi chú `Câu hỏi soạn ở trang chi tiết sau khi tạo`; `Huỷ`; `Tạo & mở chi tiết` (tạo xong mở drawer). |

**Điểm cần lưu ý:**

- Bản ghi mới ở trạng thái `Nháp` trong thư viện; cấp độ lấy theo khoá.
- Tải file thất bại thì không tạo bài, Toast `Có Lỗi Xảy Ra`.

#### Testcase — Popup Tạo bài mới

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 34: Tạo bài nghe mới có AI | High | Smoke | Flow 3 / REQ04 / REQ11 | CD | File mp3 5MB | **Given** nhập tên, chọn file, tick AI<br>**When** `Tạo & mở chi tiết`<br>**Then** bài vào bảng với nhãn `AI · đang tạo transcript`, drawer mở | - Thư viện kỹ năng có bản ghi mới `Nháp` |
| Case 35: Thiếu file không tạo | High |  | EX02 / REQ04 | CD | Chỉ nhập tên | **Given** bấm tạo<br>**When** kiểm tra<br>**Then** viền đỏ Âm thanh, không tạo | - |
| Case 36: Tạo bài đọc mới | High | Smoke | Flow 3 / REQ04 | CD | Tab Đọc | **Given** nhập tên, đoạn văn<br>**When** tạo<br>**Then** bài đọc vào bảng, drawer mở | - Không tạo câu hỏi AI khi không tick |

---

### Popup Gỡ khỏi khoá

<p align="center">
  <a href="./images/09-popup-go-khoi-khoa.png"><img src="./images/09-popup-go-khoi-khoa.png" alt="Popup gỡ bài khỏi khoá" width="600" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Popup Gỡ 1 bài nghe khỏi khoá học (Figma CD-KH-050155) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- Xoá ở S6 là **gỡ** bài khỏi khoá; bản ghi thư viện vẫn còn.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Tiêu đề | `Gỡ N bài nghe khỏi khoá học?` |
| Nội dung | `Bài nghe <tên> sẽ bị gỡ khỏi Kỹ năng (S6) của khoá, khỏi cụm và khỏi bài học mà cụm liên kết:` + dòng `Cụm <tên> · <kỳ> · <bài>` (nếu bài thuộc cụm đã liên kết); nhiều bài thì liệt kê từng bài. |
| Ghi chú | `Bản ghi trong Thư viện dữ liệu vẫn còn; khoá khác đang dùng không bị ảnh hưởng.` |
| Nút | `Huỷ`; `Xác nhận gỡ` (đỏ). |

**Điểm cần lưu ý:**

- Gỡ cũng gỡ bài khỏi cụm của tab; bài học liên kết cụm không còn bài này; kết quả học viên đã làm vẫn giữ.

#### Testcase — Popup Gỡ khỏi khoá

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 37: Gỡ 1 bài | High | Smoke | Flow 7 / REQ09 | CD | Bài 01 thuộc cụm `Chào hỏi`, dùng ở khoá khác | **Given** `⋮ › Gỡ khỏi khoá`, xác nhận<br>**When** gỡ xong<br>**Then** bài biến mất, badge tổng −1, cụm `Chào hỏi` −1 | - Thư viện và khoá khác không đổi |
| Case 38: Gỡ hàng loạt | Medium |  | Flow 7 / REQ09 | CD | Chọn 3 bài | **Given** `Gỡ khỏi khoá (3)`, xác nhận<br>**When** gỡ xong<br>**Then** 3 bài biến mất | - Toast `Đã gỡ 3 bài nghe khỏi khoá.` |

---

### Màn trống

<p align="center">
  <a href="./images/05-khoa-chua-co-bai.png"><img src="./images/05-khoa-chua-co-bai.png" alt="Khoá học chưa có bài nghe" width="900" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Khoá chưa có bài nghe (Figma CD-KH-050130) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- Khoá chưa có bài kỹ năng của tab: thay bảng bằng hình minh hoạ, tiêu đề `Khoá học chưa có bài nghe`, mô tả `Thêm bài
  nghe có sẵn từ Thư viện hoặc tạo bài mới để học viên luyện kỹ năng Nghe.`, nút `Thêm từ thư viện`, `Tạo bài nghe mới`.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Toolbar | Badge `0 bài nghe`; nút AI, `Preview mobile`, ô tìm, bộ lọc mờ; `+ Thêm bài nghe` vẫn bật. |
| Panel Cụm | Mọi badge 0; vẫn tạo cụm được bằng `Số cụm`. |

**Điểm cần lưu ý:**

- Có bài nhưng bộ lọc không ra kết quả thì dùng màn `Không tìm thấy…`, không dùng màn trống này.

#### Testcase — Màn trống

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 39: Khoá mới chưa có bài | Medium |  | Flow 1 / REQ02 | CD | Khoá `Nháp` mới tạo | **Given** mở S6<br>**When** render<br>**Then** màn trống với 2 nút | - Bấm `Tạo bài nghe mới` mở popup tạo |

---

### Import / Export Excel

**Mô tả:**

- `Export Excel` tải bài của tab ra `.xlsx`; `Import Excel` thêm bài từ `.xlsx` vào khoá (**UI cần bổ sung**: menu, popup
  kết quả). File theo cấu trúc file dữ liệu khoá học (vd `HSK1_DATA_v261028.xlsx`): một file chứa nhiều sheet, **mỗi tab
  kỹ năng chỉ đọc đúng các sheet của kỹ năng đó**, bỏ qua mọi sheet khác (`vocabulary`, `grammar`, `btvn`, `lesson`…).
- **Không có cột bài học:** cột `lesson_id` (nếu có trong file) bị bỏ qua, không gắn bài kỹ năng vào bài học. Bài import
  vào cụm đang chọn ở panel Cụm; đang ở `Tất cả cụm` / `Chưa phân cụm` thì vào `Chưa phân cụm`.

**Sheet đọc khi Import tab Nghe (3 sheet):**

| Sheet | Vai trò | Cột → field |
|---|---|---|
| `listening_lesson` (bắt buộc) | Mỗi dòng = 1 bài nghe | `id` → mã dòng trong file (chỉ để nối sheet, không lưu làm mã bài); `title` → `Tên bài`; `mean` → `Mô tả`. Bỏ qua `lesson_id`. |
| `listening` | Kịch bản, mỗi dòng = 1 lượt thoại, theo thứ tự dòng | `listening_lesson_id` → bài nghe; `character` → người nói (`A`, `B`…); `sentence` → câu gốc; `phonetic` → `Phiên âm`; `furigana` → phiên âm có chú thích (tiếng Nhật); `mean` → `Dịch`; `start` / `end` → mốc thời gian. Bỏ qua `id`, `_start`, `_end`. |
| `listening_question` | Câu hỏi của bài nghe | `listening_lesson_id` → bài nghe; `question`, `a`–`d`, `answer` (số thứ tự đáp án đúng 1–4), `explain` → câu hỏi trắc nghiệm của bài (lưu vào bộ câu hỏi Listening của Thư viện bài tập). |

**Sheet đọc khi Import tab Đọc (4 sheet):**

| Sheet | Vai trò | Cột → field |
|---|---|---|
| `reading_lesson` (bắt buộc) | Mỗi dòng = 1 bài đọc | `id` → mã dòng trong file; `title` → `Tên bài`; `mean` → `Mô tả`; `source` → nguồn (ghi chú). Bỏ qua `lesson_id`. |
| `reading` | Đoạn văn, mỗi dòng = 1 câu, theo thứ tự dòng | `reading_lesson_id` → bài đọc; `sentence` → câu của đoạn văn; `phonetic` → `Phiên âm`; `furigana` → phiên âm có chú thích; `mean` → `Dịch`. Bỏ qua `id`, `note`. |
| `reading_question` | Câu hỏi của bài đọc | `reading_lesson_id` → bài đọc; `question`, `image`, `question_type`, `a`–`d`, `answer`, `explain` → câu hỏi (bộ câu hỏi Reading của Thư viện bài tập). |
| `reading_vocabulary` | Từ vựng liên quan của bài đọc | **Bắt buộc có cột `reading_lesson_id`** → bài đọc; `word`, `phonetic`, `type`, `furigana`, `mean`, `example`, `example_phonetic`, `example_mean` → từ vựng. Từ trùng với Từ vựng S1 của khoá thì nối vào từ đó; chưa có thì tạo từ mới trong S1 của khoá rồi nối. |

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Import — sheet | Thiếu sheet bắt buộc (`listening_lesson` / `reading_lesson`) → báo `Không tìm thấy sheet listening_lesson`, không import. Sheet phụ trống / không có thì bài thiếu phần đó (tính thiếu thông tin), vẫn import. |
| Import — dòng bắt buộc | Sheet bài gốc: `title`. Sheet phụ: cột nối `listening_lesson_id` / `reading_lesson_id` phải trùng một `id` của sheet bài gốc trong cùng file. Nghe cho phép trống file âm thanh (bài tính thiếu thông tin). |
| Import — lỗi dữ liệu | Có dòng lỗi → **chặn cả file**, không thêm bài nào; danh sách lỗi theo **sheet + số dòng** (vd `reading_vocabulary dòng 12: thiếu reading_lesson_id`, `listening dòng 40: listening_lesson_id 999 không có trong listening_lesson`). |
| Import — thành công | Mỗi dòng sheet bài gốc tạo 1 bản ghi thư viện mới `Nháp` (kèm kịch bản / đoạn văn, câu hỏi, từ vựng liên quan), gắn vào khoá theo thứ tự dòng, vào cụm đang chọn; Toast `Thành Công` `Đã import N bài nghe.`; gợi ý Soát lỗi AI. Không tự dò trùng bài. |
| Export | Toàn bộ bài của tab trong khoá (không theo bộ lọc); tên file `<Khoá học>_<Kỹ năng>.xlsx`; cùng các sheet và cột như bảng trên (Nghe 3 sheet, Đọc 4 sheet, `reading_vocabulary` có `reading_lesson_id`), `id` đánh lại theo thứ tự trong file; thêm cột `cluster` (tên các cụm, cách nhau `;`) ở sheet bài gốc để tham khảo. Không có cột bài học. |

**Điểm cần lưu ý:**

- Chỉ nhận `.xlsx`; File export dùng lại được để import (cột `cluster` khi import được bỏ qua, bài vào cụm đang chọn).
- `id` / `*_lesson_id` chỉ dùng để nối các sheet trong cùng một file, không lưu và không đối chiếu với dữ liệu hệ thống.
- Một file có thể chứa cả sheet Nghe và Đọc: import ở tab Nghe chỉ lấy 3 sheet Nghe, import ở tab Đọc chỉ lấy 4 sheet Đọc.

#### Testcase — Import / Export Excel

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 40: Export đúng sheet | High | Smoke | Flow 9 / REQ12 | CD | 48 bài nghe, đang lọc cụm `Chào hỏi` | **Given** bấm `Export Excel` ở tab Nghe<br>**When** tải file<br>**Then** file có 3 sheet `listening_lesson` (48 dòng), `listening`, `listening_question` | - Không theo bộ lọc<br>- Không có cột bài học |
| Case 41: Import tab Nghe chỉ đọc 3 sheet | High | Smoke | Flow 9 / REQ12 | CD | File `HSK1_DATA` có đủ sheet Nghe, Đọc, Kiến thức; `listening_lesson` 113 dòng | **Given** tab Nghe, `Import Excel`, chọn file<br>**When** xử lý<br>**Then** tạo 113 bài nghe kèm kịch bản và câu hỏi | - Không tạo bài đọc / kiến thức<br>- Cột `lesson_id` bị bỏ qua, bài vào cụm đang chọn<br>- Toast `Đã import 113 bài nghe.` |
| Case 41a: Import tab Đọc đọc 4 sheet | High | Smoke | Flow 9 / REQ12 | CD | Cùng file; `reading_lesson` 107 dòng; `reading_vocabulary` có `reading_lesson_id` | **Given** tab Đọc, `Import Excel`<br>**When** xử lý<br>**Then** tạo 107 bài đọc kèm đoạn văn, câu hỏi, từ vựng liên quan | - Không tạo bài nghe |
| Case 42: Import có dòng lỗi | High |  | EX05 / REQ12 | CD | `listening_lesson` dòng 4 trống `title` | **Given** import<br>**When** kiểm tra<br>**Then** chặn cả file, báo `listening_lesson dòng 4: thiếu title` | - Không thêm bài nào |
| Case 42a: Import file sai định dạng / thiếu sheet | Medium |  | EX05 / REQ12 | CD | Khoá `Nháp` | **Given** import file `.csv`; import `.xlsx` không có sheet `listening_lesson`<br>**When** xử lý<br>**Then** chặn cả file, báo lỗi | - Không thêm bài nào |
| Case 42c: reading_vocabulary thiếu cột nối | High |  | EX05 / REQ12 | CD | Sheet `reading_vocabulary` không có cột `reading_lesson_id` | **Given** import ở tab Đọc<br>**When** kiểm tra<br>**Then** chặn cả file, báo thiếu `reading_lesson_id` | - Không thêm bài nào |
| Case 42d: Dòng phụ trỏ tới bài không có | Medium |  | EX05 / REQ12 | CD | `listening` có dòng `listening_lesson_id` = 999 | **Given** import<br>**When** kiểm tra<br>**Then** chặn cả file, báo `listening dòng N: listening_lesson_id 999 không có trong listening_lesson` | - |
| Case 42b: Khoá không Nháp vẫn Export Excel | Medium |  | Ràng buộc quyền | CD | Khoá `Công Khai` có 48 bài nghe | **Given** mở S6<br>**When** bấm `Export Excel`<br>**Then** tải file đủ 48 bài | - Không có `Import Excel` |

---

### Transcript bằng AI

<p align="center">
  <a href="./images/10-transcript-ai.png"><img src="./images/10-transcript-ai.png" alt="Transcript bằng AI" width="900" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Transcript AI inline: thanh tiến độ, bài đang tạo và bài chờ duyệt (Figma CD-KH-050180) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- Chỉ tab Nghe. AI tạo kịch bản (lượt thoại, phiên âm, dịch, mốc thời gian) từ file âm thanh. Chạy từ nút toolbar
  (mọi bài có file nhưng chưa có kịch bản), menu dòng, thanh hàng loạt, hoặc tick khi tạo bài.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Thanh AI | `AI · Đang tạo transcript cho N bài nghe · Tạo từ file âm thanh · có phiên âm & dịch câu`, tiến độ `k/N bài`, nút `Duyệt tất cả (m)` (m = bài đã tạo chờ duyệt), nút `Dừng` khi đang chạy. |
| Bảng | Tự lọc còn các bài trong đợt, footer `Hiển thị … trong N bài đang tạo transcript`; nhãn dưới tên `AI · đang tạo transcript` → `AI · đã tạo, chờ duyệt`. |
| Duyệt | Mở drawer thấy từng lượt viền cam `✓ Duyệt` / `↺ Hoàn tác`; `Duyệt tất cả` áp dụng cho mọi bài chờ duyệt. |

**Điểm cần lưu ý:**

- Kịch bản AI lưu nháp chờ duyệt, **không ghi đè** kịch bản cũ cho tới khi duyệt; chưa duyệt thì app học viên dùng
  kịch bản cũ (hoặc không có).
- Bài đang được AI xử lý bị khoá sửa / gỡ tới khi xong hoặc `Dừng`; AI lỗi thì bài giữ nguyên, Toast `Có Lỗi Xảy Ra`.

#### Testcase — Transcript bằng AI

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 43: Tạo transcript 2 bài | High | Smoke | Flow 10 / REQ11 | CD | Chọn 2 bài có file | **Given** `Transcript AI (2)`<br>**When** AI chạy xong<br>**Then** 2 bài `AI · đã tạo, chờ duyệt`, `Duyệt tất cả (2)` | - Toast `Thông Báo` lúc bắt đầu |
| Case 44: Duyệt tất cả | High |  | Flow 10 / REQ11 | CD | 2 bài chờ duyệt | **Given** bấm `Duyệt tất cả (2)`<br>**When** lưu<br>**Then** kịch bản thành chính thức, nhãn AI mất | - Mọi khoá dùng bài thấy kịch bản |
| Case 45: Hoàn tác một lượt | Medium |  | REQ11 | CD | Bài chờ duyệt, drawer mở | **Given** `↺ Hoàn tác` lượt 2<br>**When** lưu<br>**Then** lượt 2 về giá trị cũ, lượt khác vẫn chờ duyệt | - |
| Case 46: Dừng giữa chừng | Medium |  | EX06 / REQ11 | CD | Đang tạo 5 bài, xong 2 | **Given** bấm `Dừng`<br>**When** dừng<br>**Then** 2 bài chờ duyệt, 3 bài giữ nguyên | - Không Toast lỗi |
| Case 46a: Không sửa / gỡ bài đang được AI xử lý | High |  | EX07 | CD | Đang chạy Transcript AI cho bài 01 | **Given** thử sửa / gỡ bài 01; gửi request gỡ bài 01<br>**When** hệ thống kiểm tra<br>**Then** thao tác của bài 01 mờ | - API từ chối, dữ liệu không đổi |

---

### Tạo câu hỏi bằng AI (tab Đọc)

**Mô tả:**

- AI sinh câu hỏi cho bài đọc từ đoạn văn, theo loại câu của Thư viện bài tập; kết quả vào bộ câu hỏi của bài ở trạng
  thái chờ duyệt, duyệt tại màn Chi tiết câu hỏi Reading. Quy tắc duyệt, dừng, khoá bài như Transcript AI.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Nút toolbar / menu dòng / hàng loạt | Chỉ bài có đoạn văn; popup nhập số câu (mặc định 5) và loại câu cho phép. |
| Thanh AI | `AI · Đang tạo câu hỏi cho N bài đọc`, tiến độ, `Duyệt tất cả (m)`, `Dừng`. |

**Điểm cần lưu ý:**

- Câu hỏi AI chưa duyệt không tính vào `Số câu hỏi` và không xuất hiện cho học viên.

#### Testcase — Tạo câu hỏi bằng AI

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 47: Tạo 5 câu cho 1 bài đọc | High | Smoke | Flow 10 / REQ11 | CD | Bài đọc có đoạn văn, 0 câu | **Given** `⋮ › Tạo câu hỏi bằng AI`, số câu 5<br>**When** xong<br>**Then** drawer hiện `5 câu hỏi · chờ duyệt`, bài vẫn thiếu thông tin tới khi duyệt | - Duyệt xong `Số câu hỏi` = 5 |

---

### Soát lỗi bằng AI

<p align="center">
  <a href="./images/11-soat-loi-ai.png"><img src="./images/11-soat-loi-ai.png" alt="Soát lỗi bằng AI" width="900" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Soát lỗi AI: 2 bài nghi sai kèm lý do (Figma CD-KH-050190) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- AI kiểm tra kịch bản / đoạn văn và câu hỏi của bài (lệch audio, đáp án không có trong bài, lỗi chính tả, dịch sai).
  Chạy từ nút toolbar (toàn bộ bài của tab) hoặc thanh hàng loạt.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Thanh AI | `AI · Soát lỗi xong · N bài nghi sai · Transcript & đáp án cũ giữ nguyên tới khi duyệt`, `Duyệt tất cả (N)`. Không có bài nghi sai: `Soát lỗi xong · không phát hiện lỗi`. |
| Bảng | Lọc còn bài nghi sai, footer `Hiển thị … trong N bài AI nghi sai`; nhãn `? <lý do>` dưới tên (vd `Transcript lệch audio ở 00:32`, `Đáp án câu 2 không có trong bài`). |
| Duyệt | `Duyệt tất cả` **áp dụng sửa của AI** cho mọi bài nghi sai; từng bài duyệt / hoàn tác trong drawer hoặc Chi tiết câu hỏi. Có `↺ Hoàn tác` sau khi áp dụng (giữ bản cũ tới lần soát kế tiếp). |

**Điểm cần lưu ý:**

- Đề xuất của AI lưu nháp, dữ liệu cũ giữ nguyên tới khi duyệt; nhãn nghi sai mất khi duyệt, hoàn tác hoặc CD sửa tay.

#### Testcase — Soát lỗi bằng AI

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 48: Soát lỗi toàn tab | High | Smoke | Flow 11 / REQ11 | CD | 48 bài, 2 bài lỗi | **Given** bấm `Soát lỗi AI`<br>**When** xong<br>**Then** bảng còn 2 bài với nhãn `?` và lý do | - Toast `Thông Báo` lúc bắt đầu |
| Case 49: Duyệt tất cả áp dụng sửa | High |  | Flow 11 / REQ11 | CD | 2 bài nghi sai | **Given** `Duyệt tất cả (2)`<br>**When** lưu<br>**Then** kịch bản / đáp án đổi theo AI, nhãn mất, có `Hoàn tác` | - Hoàn tác trả về bản cũ |
| Case 50: Không lỗi | Low |  | REQ11 | CD | Dữ liệu sạch | **Given** soát<br>**When** xong<br>**Then** thanh `không phát hiện lỗi`, bảng đầy đủ | - Không nút Duyệt |

---

### Preview mobile

<p align="center">
  <a href="./images/06-preview-mobile.png"><img src="./images/06-preview-mobile.png" alt="Preview mobile" width="900" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Preview mobile bài nghe đang chọn: tab Làm bài, câu 1/5 (Figma CD-KH-050140) — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- Bấm `Preview mobile` mở panel phải thay panel Cụm, tái hiện màn học của app học viên cho bài đang chọn.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Tiêu đề | `Preview mobile`, dropdown thiết bị (`iPhone 15`…), `×` đóng về panel Cụm. |
| Tab | `Làm bài` (phát audio / hiện đoạn văn, câu hỏi từng câu `Nghe · Câu 1/5`, chọn đáp án, `Kiểm tra`), `Kịch bản` (lượt thoại, tô sáng theo mốc thời gian khi phát), `Kết quả` (điểm và đáp án đúng sau khi làm hết). |
| `Hiển thị` | Toggle `Kịch bản ẩn khi làm bài` / `Kịch bản hiện khi làm bài`, **lưu theo bài** (cấu hình của bản ghi thư viện). |
| `Mở chi tiết bài nghe` | Mở drawer. |
| `Bài trước` / `Bài sau` | Chuyển bài theo thứ tự bảng; phím `↑ ↓`. |

**Điểm cần lưu ý:**

- Preview không ghi dữ liệu học; bài thiếu file / đoạn văn hoặc 0 câu hỏi hiện thông báo trong khung điện thoại.
- Bài đọc: tab `Kịch bản` thay bằng `Đoạn văn` (tô sáng Từ vựng liên quan, phát audio đọc mẫu nếu có).

#### Testcase — Preview mobile

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 51: Preview bài nghe | High | Smoke | Flow 12 / REQ13 | CD | Bài 01 có 5 câu | **Given** chọn bài 01, bấm `Preview mobile`<br>**When** panel mở<br>**Then** tab Làm bài, `Nghe · Câu 1/5`, phát được audio | - Đóng `×` về panel Cụm |
| Case 52: Toggle kịch bản lưu theo bài | Medium |  | REQ13 | CD | Bài 01 đang `ẩn` | **Given** đổi sang `hiện`<br>**When** mở lại preview bài 01 sau khi tải lại trang<br>**Then** vẫn `hiện` | - Bài 02 không đổi |
| Case 53: Bài 0 câu hỏi | Low |  | REQ13 | CD | Bài chưa có câu | **Given** preview<br>**When** render<br>**Then** khung báo `Bài chưa có câu hỏi` | - Không ghi dữ liệu |

---

### Cụm liên kết với Chi tiết bài học

**Mô tả:**

- Bài học **không** chọn bài kỹ năng; liên kết duy nhất là **cụm ↔ bài học** lập tại panel Cụm của S6 (⋮ cụm › `Liên kết
  bài học`). Tab `Kỹ năng` của Chi tiết bài học chỉ **hiển thị** bài của cụm đã liên kết, lọc theo loại (mặc định `Nghe`);
  không có nút thêm, gỡ, sửa (**UI cần bổ sung**).
- Đặc tả UI (bộ lọc loại, tiêu đề theo tên cụm, 2 khung) xem [Học kỳ — Bài học](../semester/lesson/lesson.md) tab Kỹ năng.

**Giải thích thành phần:**

| Thành phần | Yêu cầu |
|---|---|
| Nguồn dữ liệu | Với mỗi loại kỹ năng, bài học có tối đa 1 cụm liên kết; tab hiện bài của cụm đó theo `Thứ tự trong cụm`. |
| Bộ lọc loại | `Nghe` (mặc định), `Đọc`, `Viết`, `Nói`; loại chưa liên kết hiện `Chưa có cụm <loại> liên kết với bài này` + hướng dẫn `Liên kết tại Kỹ năng (S6) › panel Cụm`. |
| Tiêu đề khung | Tên cụm đã liên kết (vd `Cụm nghe: Chào hỏi · 3 bài`). |
| Đồng bộ | Thêm / gỡ / chuyển bài trong cụm, đổi tên cụm, đổi liên kết ở S6 → bài học cập nhật ngay. |

**Điểm cần lưu ý:**

- Bài thiếu thông tin vẫn hiện ở bài học nếu thuộc cụm liên kết (có chấm cam); app học viên chỉ hiển thị bài đủ thông tin.
- Gỡ bài khỏi khoá (Flow 7) thì bài mất khỏi cụm và khỏi bài học liên kết, popup gỡ nêu cụm và bài học.

#### Testcase — Cụm liên kết với Chi tiết bài học

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Case 54: Bài học hiện bài của cụm liên kết | High | Smoke | Flow 13 / REQ14 | CD | Cụm Nghe `Chào hỏi` (3 bài) liên kết Bài 2 | **Given** Chi tiết Bài 2, tab Kỹ năng<br>**When** lọc `Nghe`<br>**Then** tiêu đề `Cụm nghe: Chào hỏi · 3 bài`, 3 bài đúng thứ tự trong cụm | - Không có nút +, × |
| Case 55: Thêm bài vào cụm, bài học cập nhật | High | Smoke | Flow 13 / REQ14 | CD | Như Case 54 | **Given** ở S6 thêm bài nghe 04 vào cụm `Chào hỏi`<br>**When** mở lại Bài 2<br>**Then** 4 bài | - Gỡ khỏi cụm thì còn 3 |
| Case 55a: Loại chưa liên kết | Medium |  | REQ14 | CD | Bài 2 chưa có cụm Đọc | **Given** lọc `Đọc`<br>**When** render<br>**Then** `Chưa có cụm Đọc liên kết với bài này` + hướng dẫn | - Badge tab không đếm Đọc |
| Case 55b: Gỡ bài khỏi khoá đang ở cụm liên kết | High |  | REQ09 / REQ14 | CD | Bài nghe 01 thuộc cụm `Chào hỏi` liên kết Bài 2 | **Given** ⋮ › `Gỡ khỏi khoá`<br>**When** popup nêu `Cụm Chào hỏi · HK I · Bài 2`, xác nhận<br>**Then** bài mất khỏi S6, cụm và Bài 2 | - Thư viện còn bản ghi |

### Toast phản hồi CRUD

<p align="center">
  <a href="../../images/01-toast-crud.png"><img src="../../images/01-toast-crud.png" alt="Bốn trạng thái Toast CRUD" width="520" title="Nhấn để xem ảnh gốc"></a><br>
  <em>Toast Thành Công, Thông Báo, Cảnh Báo và Có Lỗi Xảy Ra — nhấn để xem ảnh gốc</em>
</p>

**Mô tả:**

- Phản hồi sau thêm / tạo / sửa / gỡ bài, thao tác cụm, liên kết bài học, import và áp dụng AI.

**Giải thích thành phần:**

| Loại Toast | Tiêu đề cố định | Khi sử dụng |
|---|---|---|
| Thành công | `Thành Công` | Backend xác nhận (vd `Đã thêm 3 bài nghe.`, `Đã gỡ 1 bài nghe khỏi khoá.`). |
| Thông tin | `Thông Báo` | AI đang chạy (vd `AI đang tạo transcript cho 2 bài nghe.`). |
| Cảnh báo | `Cảnh Báo` | File sai loại / quá dung lượng, import sai cột, khoá học không Nháp. |
| Lỗi | `Có Lỗi Xảy Ra` | Backend / network / AI không hoàn tất. |

**Điểm cần lưu ý:**

- Mỗi thao tác logic một Toast; Huỷ, tìm, lọc, đổi tab, Preview không có Toast.

#### Testcase — Toast phản hồi CRUD

| Tên testcase | Priority | Loại test | Scenario | Role | Pre-condition | Given / When / Then | Expected Result |
|---|---| --- |---|---|---|---|---|
| Toast Case 1: Thành công | High |  | REQ15 | CD | Dữ liệu hợp lệ | **Given** gỡ 1 bài<br>**When** backend xong<br>**Then** `Thành Công` `Đã gỡ 1 bài nghe khỏi khoá.` | - Một Toast |
| Toast Case 2: Cảnh báo | High |  | REQ15 | CD | File 60MB | **Given** tải file<br>**When** kiểm tra<br>**Then** `Cảnh Báo` `File vượt quá dung lượng cho phép (50MB).` | - Không lưu |
| Toast Case 3: Lỗi | High |  | REQ15 | CD | AI lỗi | **Given** transcript đang chạy<br>**When** AI thất bại<br>**Then** `Có Lỗi Xảy Ra` | - Bài giữ nguyên |
| Toast Case 4: Thông tin | Medium |  | REQ15 | CD | Bấm AI cho 5 bài | **Given** bắt đầu<br>**When** đang chạy<br>**Then** `Thông Báo` `AI đang tạo transcript cho 5 bài nghe.` | - Không lặp Toast |

---

## 2. Yêu cầu

### 2.1. Flow chính

**Flow 1 / REQ01 / REQ02 / REQ06: Mở Kỹ năng (S6) và xem danh sách**

```text
CD chọn trung tâm ở header → vào khoá học → Kỹ Năng (S6)
      → 4 tab Nghe / Đọc / Viết / Nói, mặc định Nghe; panel Cụm của tab chọn Tất cả cụm
      → CD tìm / lọc Trạng thái / sắp xếp / chọn cụm ở panel → bảng, footer, STT cập nhật
      → Khoá có 0 bài → màn trống
```

**Flow 2 / REQ04 / REQ05: Thêm bài từ thư viện**

```text
CD bấm + Thêm bài nghe → Thêm từ thư viện → popup
      → Lọc Kho / Cấp độ (mặc định cấp độ khoá) / Dạng câu, tìm → tick bài (bài đã có bị khoá)
      → Chọn Thêm vào cụm (mặc định cụm đang chọn) → Thêm N bài
      → Thành công: gắn tham chiếu vào khoá, vào cụm đã chọn, Toast Thành Công; thất bại: không gắn bài nào
```

**Flow 3 / REQ04 / REQ11: Tạo bài mới**

```text
CD bấm + Thêm bài nghe → Tạo bài nghe mới → nhập Tên, Mô tả, chọn file mp3 ≤ 50MB, Thêm vào cụm
      → (tick) Tạo transcript bằng AI → Tạo & mở chi tiết
      → Tạo bản ghi thư viện Nháp, gắn khoá, vào cụm, mở drawer; AI chạy nền nếu tick
Tab Đọc: nhập Đoạn văn thay file; (tick) Tạo câu hỏi bằng AI
```

**Flow 4 / REQ04: Nhập nhanh**

```text
CD gõ tên ở dòng cuối bảng → Enter
      → Tạo bản ghi thư viện Nháp chỉ có tên, gắn khoá, vào cụm đang chọn (Tất cả cụm → Chưa phân cụm)
      → bài tính thiếu thông tin
```

**Flow 5 / REQ04 / REQ07 / REQ08: Xem và sửa chi tiết**

```text
CD bấm tên bài hoặc ⋮ › Mở chi tiết → drawer
      → Sửa Tên / Mô tả / file / kịch bản (lượt, phiên âm, dịch, mốc thời gian) hoặc đoạn văn / audio mẫu / từ vựng liên quan
      → Sửa cụm → popup Thêm vào cụm / Gỡ khỏi cụm
      → Lưu → sửa bản ghi thư viện, mọi khoá dùng bài thấy nội dung mới
      → Câu hỏi: Mở chi tiết › → màn Chi tiết câu hỏi của Thư viện bài tập
```

**Flow 6 / REQ05: Thêm vào cụm / Gỡ khỏi cụm**

```text
CD ⋮ › Thêm vào cụm / Gỡ khỏi cụm (1 bài) hoặc thanh hàng loạt (N bài), hoặc bấm nhãn ở cột Cụm
      → popup Cụm của N bài: chọn 1 cụm hoặc Chưa phân cụm → Lưu
      → bài chuyển cụm / về Chưa phân cụm; bài học liên kết cụm cũ / mới phản ánh ngay; số đếm panel Cụm cập nhật
```

**Flow 7 / REQ09: Gỡ khỏi khoá**

```text
CD ⋮ › Gỡ khỏi khoá hoặc Gỡ khỏi khoá (N) → popup xác nhận → Xác nhận gỡ
      → Gỡ bài khỏi khoá, khỏi mọi cụm và khỏi các bài học của khoá; bản ghi thư viện và khoá khác không đổi
```

**Flow 8 / REQ05 / REQ11: Cụm sinh từ S2, đổi tên, liên kết bài học, chia cụm AI**

```text
CD nhập Loại (Nghe / Đọc / Viết / Nói) + Số buổi ở Tổng quan (S2) → hệ thống tạo đủ cụm rỗng Chủ đề 1 … N cho tab (Số cụm chỉ đọc)
CD ⋮ cụm › Đổi tên → lưu tên mới
CD ⋮ cụm › Liên kết bài học → chọn 1 bài (bài đã có cụm cùng loại bị mờ) → Lưu
      → BE kiểm tra trùng → lưu liên kết (gỡ liên kết cũ của cụm nếu có) hoặc từ chối (EX13) → Chi tiết bài học hiện bài của cụm
Chia cụm bằng AI → AI đề xuất bài vào cụm → CD áp dụng hoặc bỏ
```

**Flow 9 / REQ12: Import / Export Excel**

```text
Export: tải toàn bộ bài của tab ra .xlsx (Nghe 3 sheet, Đọc 4 sheet, không cột bài học)
Import tab Nghe: chọn .xlsx → chỉ đọc listening_lesson, listening, listening_question
Import tab Đọc: chọn .xlsx → chỉ đọc reading_lesson, reading, reading_question, reading_vocabulary
      → bỏ qua sheet khác và cột lesson_id → kiểm tra từng dòng, nối sheet phụ qua *_lesson_id
      → có lỗi: chặn cả file, liệt kê lỗi theo sheet + dòng
      → hợp lệ: tạo bản ghi thư viện Nháp, gắn khoá theo thứ tự dòng, vào cụm đang chọn, Toast Thành Công, gợi ý Soát lỗi AI
```

**Flow 10 / REQ11: Transcript AI (Nghe) / Tạo câu hỏi AI (Đọc)**

```text
CD bấm nút toolbar / ⋮ / hàng loạt / tick khi tạo → AI chạy nền, thanh AI hiện tiến độ, bài bị khoá sửa
      → Xong: nhãn AI · đã tạo, chờ duyệt → CD Duyệt từng lượt / câu hoặc Duyệt tất cả → thành chính thức
      → Hoàn tác trả giá trị cũ; Dừng giữ bài chưa xử lý nguyên
```

**Flow 11 / REQ11: Soát lỗi AI**

```text
CD bấm Soát lỗi AI → AI kiểm tra kịch bản / đoạn văn / câu hỏi → bảng lọc còn bài nghi sai kèm lý do
      → Duyệt tất cả: áp dụng sửa của AI (có Hoàn tác); hoặc sửa tay → nhãn mất
```

**Flow 12 / REQ13: Preview mobile**

```text
CD chọn bài → Preview mobile → panel phải hiện khung điện thoại: Làm bài / Kịch bản (Đoạn văn) / Kết quả
      → Đổi toggle Kịch bản ẩn / hiện → lưu theo bài → Bài trước / sau → × đóng về panel Cụm
```

**Flow 13 / REQ14: Xem bài kỹ năng của bài học theo cụm liên kết**

```text
CD mở Chi tiết bài học → tab Kỹ năng (mặc định lọc Nghe)
      → Hệ thống tìm cụm của loại đó đã liên kết với bài → hiện tên cụm + bài của cụm theo thứ tự trong cụm
      → Đổi loại → cụm liên kết của loại mới; chưa liên kết → thông báo và hướng dẫn liên kết tại S6
CD sửa cụm ở S6 (thêm / gỡ / chuyển bài, đổi tên, đổi liên kết) → bài học cập nhật ngay, không thao tác tại bài
```

### 2.2. Ngoại lệ

- **EX01:** Khoá học không `Nháp` → ẩn / mờ mọi thao tác ghi (gồm thao tác cụm); API thêm / sửa / gỡ / cụm / AI bị từ chối.
- **EX02:** Tên bài trống, Nhập nhanh rỗng, Tạo bài mới thiếu file (Nghe) hoặc đoạn văn (Đọc) → báo lỗi tại field, không tạo / lưu.
- **EX03:** File âm thanh không phải `.mp3` hoặc lớn hơn 50MB → từ chối, Toast `Cảnh Báo`, giữ file cũ.
- **EX04:** Gắn bản ghi thư viện đã có trong khoá → popup khoá lựa chọn, không gắn thêm từ popup; API vẫn nhận (như S1 REQ04: không bắt trùng bản ghi trong khoá).
- **EX05:** Import không phải `.xlsx`, thiếu sheet bài gốc, `reading_vocabulary` thiếu cột `reading_lesson_id`, dòng thiếu
  field bắt buộc hoặc `*_lesson_id` không có trong sheet bài gốc → chặn cả file, báo theo sheet + dòng, không thêm bài nào.
- **EX06:** AI lỗi hoặc CD bấm `Dừng` → bài chưa xử lý giữ nguyên; bài đã xử lý giữ trạng thái chờ duyệt; AI lỗi thì Toast `Có Lỗi Xảy Ra`.
- **EX07:** Sửa / gỡ bài đang được AI xử lý → UI mờ; API từ chối.
- **EX08:** Role khác CD hoặc trung tâm khác trung tâm đang chọn truy cập S6 / gọi API → từ chối.
- **EX09:** Lưu drawer, thêm / gỡ cụm, liên kết bài học, gỡ bài, duyệt AI thất bại → giữ dữ liệu cũ, Toast `Có Lỗi Xảy Ra`.
- **EX10:** Thêm bài vào cụm của tab khác / khoá khác, hoặc liên kết cụm với bài học không thuộc khoá đang mở (qua API) → từ chối.
- **EX11:** Đổi `Số cụm`, thêm hoặc xoá cụm trực tiếp ở S6 (UI / API) → ô chỉ đọc, không có nút; API từ chối. Số cụm chỉ đổi qua Số buổi ở S2.
- **EX13:** Liên kết cụm với bài học đã có cụm cùng loại kỹ năng → BE từ chối (409), Toast `Cảnh Báo` nêu cụm đang chiếm; dữ liệu không đổi.

### 2.3. Yêu cầu khác

- **REQ01 – Phạm vi:** Mỗi khoá học có danh sách Kỹ năng (S6) riêng; dữ liệu theo trung tâm CD đang chọn ở header.
- **REQ02 – Tab kỹ năng:** 4 tab `Nghe`, `Đọc`, `Viết`, `Nói` ở mọi trung tâm, mỗi tab có panel Cụm riêng; bảng và field
  của tài liệu này áp dụng Nghe và Đọc, Viết / Nói viết sau.
- **REQ03 – Cột và nội dung:** Nghe: tên, mô tả, âm thanh (mp3 ≤ 50MB, thời lượng không giới hạn, `h:mm:ss` khi ≥ 1 giờ, chỉ phát một bài tại một thời điểm), cụm. Đọc: tên, mô tả, đoạn văn, cụm; audio đọc mẫu không bắt buộc. Không có cột bài học.
- **REQ04 – Thư viện kỹ năng:** Bài của S6 là tham chiếu bản ghi Thư viện kỹ năng; không có rule bắt trùng bản ghi trong khoá (thống nhất với S1 REQ04), popup thêm chỉ khoá bài đã có để tránh thêm nhầm. Thêm mới (popup tạo, nhập nhanh, import) tạo bản ghi `Nháp`; sửa tại S6 sửa bản ghi thư viện. Field: Tên *, Mô tả, Nâng cao (Có / Không, mặc định Không), Âm thanh + Kịch bản (lượt, người nói, phiên âm, dịch, mốc start / end) với Nghe; Đoạn văn + audio đọc mẫu + Từ vựng liên quan (từ S1 của khoá) với Đọc. **Thiếu thông tin** khi thiếu file / đoạn văn, mô tả, hoặc 0 câu hỏi đã duyệt.
- **REQ05 – Cụm:** Mỗi tab có bộ cụm riêng của khoá; một bài thuộc **tối đa 1 cụm** của tab. **Số cụm = tổng Số buổi của loại ở Tổng quan (S2)**, tự tạo `Chủ đề k`, không nhập / thêm / xoá cụm tại S6; CD đổi tên, Chia cụm bằng AI. **Mỗi cụm liên kết đúng 1 bài học, mỗi bài học tối đa 1 cụm mỗi loại kỹ năng**, BE kiểm tra trùng (EX13), liên kết tại ⋮ cụm; nhân bản khoá sao chép cụm và liên kết. Thêm vào / gỡ khỏi cụm qua popup thêm / tạo, nhập nhanh, import (cụm đang chọn), menu dòng, hàng loạt, nhãn cột Cụm, drawer (chọn 1 cụm). Xoá cụm không gỡ bài khỏi khoá. Số đếm panel Cụm cập nhật ngay. Thứ tự bài trong cụm kéo thả được.
- **REQ06 – Bảng, tìm kiếm, lọc, sắp xếp:** Bảng hiện đủ mọi field, cuộn ngang, ghim cột đầu / cuối. Tìm theo tên, mô tả, nội dung; lọc theo cụm (panel Cụm), Trạng thái `Tất cả / Nháp / Công khai / Vô hiệu`, Nâng cao `Tất cả / Có / Không`; sắp xếp `Thứ tự thêm / Tên A–Z / Mới cập nhật / Thứ tự trong cụm`; phân trang 50 dòng; đổi điều kiện về trang 1.
- **REQ07 – Drawer chi tiết:** Đủ field theo REQ04, cụm chỉ đọc + `Sửa cụm`, duyệt / hoàn tác giá trị AI, hỏi xác nhận khi đóng có thay đổi; lưu ảnh hưởng mọi khoá dùng bản ghi.
- **REQ08 – Câu hỏi:** Soạn và duyệt ở màn Chi tiết câu hỏi của Thư viện bài tập (Listening / Reading), đủ loại câu của BTVN & Kiểm tra; drawer chỉ tóm tắt số câu theo loại và dẫn link.
- **REQ09 – Gỡ khỏi khoá:** Xoá ở S6 là gỡ khỏi khoá và khỏi cụm (bài học liên kết cụm không còn bài), có xác nhận nêu cụm và bài học; bản ghi thư viện còn; kết quả học viên giữ.
- **REQ10 – Trạng thái khoá học:** Chỉ thao tác ghi khi khoá `Nháp`; khoá khác chỉ xem, tìm, lọc, Preview, Export.
- **REQ11 – AI:** Transcript AI (Nghe, từ file âm thanh, có phiên âm, dịch, mốc thời gian), Tạo câu hỏi AI (Đọc, từ đoạn văn), Soát lỗi AI (cả hai), Chia cụm bằng AI. Kết quả lưu nháp chờ duyệt, không ghi đè; `Duyệt tất cả` của Soát lỗi áp dụng sửa của AI, có Hoàn tác; `Dừng` được; bài đang xử lý bị khoá sửa / gỡ.
- **REQ12 – Import / Export Excel:** Chỉ `.xlsx`. Tab Nghe chỉ đọc 3 sheet `listening_lesson`, `listening`, `listening_question`; tab Đọc chỉ đọc 4 sheet `reading_lesson`, `reading`, `reading_question`, `reading_vocabulary` (bắt buộc cột `reading_lesson_id`); bỏ qua sheet khác. **Không có cột bài học**: bỏ qua `lesson_id`, bài vào cụm đang chọn. Export toàn bộ bài của tab cùng cấu trúc sheet; import tạo bản ghi `Nháp` thêm vào cuối, có dòng lỗi thì chặn cả file, không tự dò trùng.
- **REQ13 – Preview mobile:** Tái hiện màn học của app học viên cho bài đang chọn (Làm bài / Kịch bản hoặc Đoạn văn / Kết quả); toggle `Kịch bản ẩn khi làm bài` lưu theo bài; không ghi dữ liệu học.
- **REQ14 – Bài kỹ năng trong bài học:** Chi tiết bài học không chọn bài; tab Kỹ năng chỉ hiển thị bài của cụm đã liên kết, theo loại đang lọc (mặc định Nghe), tiêu đề là tên cụm; thay đổi ở cụm phản ánh ngay; không thêm / gỡ / sửa tại bài; badge tab = số loại kỹ năng có cụm liên kết.
- **REQ15 – Phản hồi:** Mỗi thao tác thay đổi dữ liệu đúng một Toast theo kết quả; không báo thành công trước khi lưu xong.

### 2.4. Ràng buộc

#### Quyền

| Role | Xem S6 | Thêm / Tạo / Sửa | Thêm / gỡ / quản lý cụm | Gỡ khỏi khoá | Import / Export | Dùng AI | Thêm / gỡ trong bài học |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| CD (khoá `Nháp`) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| CD (khoá `Công Khai` / `Vô hiệu`) | ✅ | ❌ | ❌ | ❌ | ✅ chỉ Export | ❌ | ❌ |
| Các role khác | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

#### Phạm vi dữ liệu

- CD chỉ thao tác trên khoá học thuộc trung tâm đang chọn ở header; đổi trung tâm thì dữ liệu tải lại.
- Bài S6 tham chiếu bản ghi thư viện bằng định danh, không dùng tên làm khoá liên kết; sửa ở S6 ảnh hưởng mọi khoá dùng
  bản ghi.
- Cụm thuộc khoá + tab kỹ năng; bài chỉ vào được cụm cùng khoá, cùng tab. Bài học chỉ thêm được bài kỹ năng trong S6 của
  chính khoá; Từ vựng liên quan của bài đọc chỉ chọn trong S1 của chính khoá.
- Không cho phép truy cập hoặc thực hiện hành động `❌`, kể cả gọi trực tiếp bằng URL hoặc request.

---

## 3. Cần xác nhận

- **Figma tab Đọc:** chưa có drawer Chi tiết bài đọc, popup thêm / tạo / gỡ, chọn nhiều, màn trống, Preview; viết theo
  Nghe, cần vẽ bổ sung (gồm khối Đoạn văn, Audio đọc mẫu, Từ vựng liên quan).
- **Figma Nghe:** kịch bản chưa vẽ mốc thời gian `start / end` từng lượt; popup Tạo bài ghi `MP3 / WAV · 25 MB`, requirement
  chốt `.mp3` ≤ 50MB theo `file_limits.json` (`KNOWLEDGE_MEDIA`), cần sửa chữ trên Figma hoặc đổi config.
- **Figma panel Cụm:** mọi màn S6 đang vẽ panel `Học kỳ & bài học`, cột / ô `Bài học`; cần vẽ lại theo panel Cụm, cột
  `Cụm`, popup `Cụm của N bài`, ô `Thêm vào cụm` (tham khảo Figma Kiến thức S1).
- **UI cần vẽ theo mô hình cụm ↔ bài học (03/11):** ô Số cụm chỉ đọc theo S2, bỏ `Thêm cụm mới` / `Xoá cụm`, menu ⋮ cụm có `Liên kết bài học` + popup chọn bài, chip bài học trên dòng cụm, field và bộ lọc `Nâng cao`, bảng đủ cột cuộn ngang có cột ghim, tab Kỹ năng ở Chi tiết bài học chỉ xem theo cụm.
- **Import / Export Excel:** chưa có UI menu và popup kết quả; cấu trúc sheet theo file dữ liệu khoá học (vd
  `HSK1_DATA_v261028.xlsx`); file hiện tại chưa có cột `reading_lesson_id` ở sheet `reading_vocabulary`, cần bổ sung trước
  khi import tab Đọc.
- **Phiên âm theo ngôn ngữ:** tiếng Trung pinyin, tiếng Nhật furigana / romaji, tiếng Hàn romanization; tiếng Anh / Đức /
  Pháp để trống hay dùng IPA, chưa chốt.
- **Preview app học viên:** màn Làm bài / Kết quả tái hiện theo app; cần ảnh app để khớp chi tiết (cách tô sáng câu theo
  mốc thời gian, hiển thị Từ vựng liên quan).

---

## 4. Đối chiếu ICS cũ (Thư viện kỹ năng Nghe / Đọc)

| Nội dung | ICS cũ (`roles/curriculum/skill_library`, `pls_repository_api/model/cd/skill_library`) | Requirement này |
|---|---|---|
| Nơi quản lý | Thư viện kỹ năng theo cấp độ, gắn bài học qua `lessonId`; mỗi bài thuộc đúng 1 bài học | Bản ghi thư viện dùng chung, gắn vào khoá qua S6, chia theo cụm (mỗi bài tối đa 1 cụm); S6 không gắn bài học, bài học thêm bài kỹ năng tại Chi tiết bài học |
| Field bài nghe | `title`, `mean` (mô tả), `level`, `course`, `audio`; câu nghe `sentence`, `furigana`, `phonetic`, `mean`, `start`, `end`, `enable` | Giữ: tên, mô tả, audio, kịch bản có phiên âm, dịch, mốc start / end; thêm người nói A / B |
| Field bài đọc | `title`, `mean`, `item` (đoạn văn), `audio`, `vocabularies`; câu đọc có furigana, phonetic, mean | Giữ đoạn văn, audio đọc mẫu, từ vựng liên quan (từ S1), câu có phiên âm / dịch |
| Câu hỏi | `MiniQuestionModel`: trắc nghiệm A–D, đáp án, giải thích, bật / tắt | Dùng đủ loại câu của Thư viện bài tập, soạn ở Chi tiết câu hỏi |
| Thêm dữ liệu | `Thêm mới`, `Thêm từ JSON`, `Thêm từ thư viện`, `Export JSON` | `Thêm từ thư viện`, `Tạo bài mới`, Nhập nhanh, `Import / Export Excel`; bỏ JSON |
| Xoá | Xoá bài (có xác nhận) | Gỡ khỏi khoá, bản ghi thư viện còn |
| AI | Không có | Transcript AI, Tạo câu hỏi AI, Soát lỗi AI, chờ duyệt |
| Preview | Không có | Preview mobile theo bài |
