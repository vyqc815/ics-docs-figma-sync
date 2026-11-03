# Đề xuất gắn mã — PLS-ICS T8/2026

76 frame · 1 màn gốc · 10 cần design xem. Mã đã gắn sẵn trong hệ thống (theo id frame), nên Hub/requirement/ảnh chạy ngay; đổi tên trên Figma theo bảng lúc nào cũng được.

## 1. Quy ước mã

`ICS-<MODULE>-SSMMKK`: MODULE = trang Figma (HD), SS = Section trong trang, MM = màn gốc, KK = `00` màn gốc · `01–09` trạng thái · `10, 20…` popup/dropdown (trạng thái của popup: số cuối 1–9). Bản tối: mã bản sáng + `-DK`.
Tên frame: `MÃ — Tên màn / chi tiết`.

## 2. Bố trí trong Figma

- Mỗi MODULE một Page; mỗi màn gốc cùng popup/trạng thái của nó một Section, đặt tên `MÃ màn gốc — tên`.
- Trong Section: màn gốc bên trái, popup/dropdown/trạng thái xếp ngay bên phải theo thứ tự mã; bản tối hàng dưới, đúng cột với bản sáng.
- Frame nháp, trùng, không dùng: dồn vào Page/Section “Lưu trữ” (không quét).

## 3. Cần design xem

| Frame | Đề xuất | Màn gốc đề xuất | Gợi ý khác |
|---|---|---|---|
| [ADM-HD-010021-DK — Hoá đơn / Popup hồ sơ học viên / Lịch sử ](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4056-134135) | `ICS-HD-010121-DK` Bản tối | `ICS-HD-010121` | ICS-HD-010120, ICS-HD-010140 |
| [ADM-HD-010230 — Hoá đơn / Popup hồ sơ học viên / Popup thêm ](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=2731-75906) | `ICS-HD-010150` Popup | `ICS-HD-010100` |  |
| [ADM-HD-010050 — Hoá đơn / Popup chọn học viên đã liên kết](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=2997-13731) | `` Dropdown | `ICS-HD-010100` |  |
| [ADM-HD-010060 — Hoá đơn / Popup thêm học phí](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=2997-13559) | `` Popup | `ICS-HD-010100` |  |
| [ADM-HD-010080 — Hoá đơn / Popup thêm (thao tác học viên)](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3058-99388) | `` Popup | `ICS-HD-010100` |  |
| [ADM-HD-010081 — Hoá đơn / Popup thêm / Chọn Xem lịch sử](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3058-96236) | `` Dropdown | `ICS-HD-010100` |  |
| [ADM-HD-010082 — Hoá đơn / Popup thêm / Chọn Thêm Lịch Hẹn](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3058-108224) | `` Dropdown | `ICS-HD-010100` |  |
| [ADM-HD-010110 — Hoá đơn / Popup thêm lịch hẹn](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3058-96427) | `` Popup | `ICS-HD-010100` |  |
| [ADM-HD-010111 — Hoá đơn / Popup cập nhật lịch hẹn](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3058-96531) | `` Popup | `ICS-HD-010100` |  |
| [ADM-HD-010130 — Hoá đơn / Popup danh sách lịch hẹn](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3058-96637) | `` Popup | `ICS-HD-010100` |  |

## 4. Cụm màn

- **`ICS-HD-010100`** ADM-HD-010000 — Hoá đơn / Danh sách hoá đơn
  - `ICS-HD-010101` Trạng thái · ADM-HD-010006 — Hoá đơn / Danh sách hoá đơn / Sau khi thêm tag
  - `ICS-HD-010102` Trạng thái · ADM-HD-010007 — Hoá đơn / Danh sách hoá đơn / Sau khi thêm lịch hẹn
  - `ICS-HD-010110` Popup · ADM-HD-010010 — Hoá đơn / Popup thêm hoá đơn
  - `ICS-HD-010111` Trạng thái · ADM-HD-010011 — Hoá đơn / Popup thêm hoá đơn / Chọn đơn vị tiền
  - `ICS-HD-010112` Trạng thái · ADM-HD-010012 — Hoá đơn / Popup thêm hoá đơn / Chọn học viên có sẵn
  - `ICS-HD-010113` Trạng thái · ADM-HD-010013 — Hoá đơn / Popup thêm hoá đơn / Chọn học viên có sẵn / Mở danh sách
  - `ICS-HD-010120` Popup · ADM-HD-010020 — Hoá đơn / Popup hồ sơ học viên / Lịch sử hoá đơn
  - `ICS-HD-010121` Trạng thái · ADM-HD-010021 — Hoá đơn / Popup hồ sơ học viên / Lịch sử hoá đơn / Cuộn ngang tới cuối
  - `ICS-HD-010122` Trạng thái · ADM-HD-010022 — Hoá đơn / Popup hồ sơ học viên / Lịch sử hoá đơn / Mở chi tiết học phí + hover
  - `ICS-HD-010130` Popup · ADM-HD-010120 — Hoá đơn / Popup hồ sơ học viên / Lịch sử lớp
  - `ICS-HD-010140` Popup · ADM-HD-010224 — Hoá đơn / Popup hồ sơ học viên / Ghi chú / Trống
  - `ICS-HD-010150` Popup · ADM-HD-010230 — Hoá đơn / Popup hồ sơ học viên / Popup thêm ghi chú
  - `ICS-HD-010151` Trạng thái · ADM-HD-010231 — Hoá đơn / Popup hồ sơ học viên / Popup thêm ghi chú / Mở Loại
  - `ICS-HD-010160` Dropdown · ADM-HD-010102 — Hoá đơn / Danh sách hoá đơn / Dropdown · Nhận tiền, Thời gian, Tag, Menu hành động
  - `ICS-HD-010170` Dropdown · ADM-HD-010202 — Hoá đơn / Danh sách hoá đơn / Dropdown · Hoá đơn đỏ, Loại hoá đơn, Đổi trạng thái
  - `ICS-HD-010180` Dropdown · ADM-HD-010302 — Hoá đơn / Danh sách hoá đơn / Dropdown · Người phụ trách, Trạng thái
  - `ICS-HD-010190` Popup · ADM-HD-010040 — Hoá đơn / Popup xem ảnh hoá đơn

Bảng đầy đủ từng frame: `de-xuat-ma.csv` (mở bằng Excel, cột “Đã đổi” để tick).
