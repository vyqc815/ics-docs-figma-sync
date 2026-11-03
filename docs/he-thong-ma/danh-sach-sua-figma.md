# Danh sách sửa Figma theo requirement

> Requirement của QC là chuẩn. Mỗi dòng là một việc design làm trên Figma. Sinh từ registry (`scripts/he-thong-ma/figma_fixes.py`), không ghi gì lên Figma.

Trước khi sửa, design xem requirement còn đúng không: nhiều ghi chú "Khác Figma" và "UI cần bổ sung" viết từ bản Figma cũ. Ghi chú đã cũ thì báo QC xoá, không sửa Figma. Dòng *Chưa có thiết kế* là chỗ tool chưa thấy trên màn đã sync; nếu nó nằm trong popup chưa sync thì có thể đã có.

| Loại | Số việc |
|---|---:|
| Figma khác requirement | 17 |
| Chưa có thiết kế | 55 |
| Khu vực cần bổ sung | 17 |

## Bài tập về nhà và Kiểm tra (CD-KH-06xx)

Cụm `bai-tap-ve-nha` · MD: `docs/he-thong-ma/bai-tap-ve-nha.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-001 | [CD-KH-060100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-346399), [CD-KH-060200](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-347564) | `A01` Khung màn, cây kỳ và bài | Figma khác requirement | Khác Figma CD-KH-060200: tab Kiểm tra trên Figma là danh sách phẳng; requirement là cây theo kỳ giống BTVN. | ☐ |
| FIX-002 | [CD-KH-030340](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-357438), [CD-KH-060100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-346399), [CD-KH-060200](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-347564) | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan | Figma khác requirement | Khác Figma CD-KH-030340: còn thẻ `Tổng điểm` (đã bỏ theo thang 10, CD-KH-060100 / 060200 đã sửa); nút tạo bằng AI ghi `Generate`. | ☐ |
| FIX-003 | [CD-KH-030340](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-357438), [CD-KH-060100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-346399), [CD-KH-060200](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-347564) | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-004 | [CD-KH-030340](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-357438), [CD-KH-060100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-346399), [CD-KH-060200](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-347564) | `A03` Bảng câu hỏi | Figma khác requirement | Khác Figma CD-KH-060100 / 060200: bảng chưa có cột `Kiến thức / Kỹ năng`, lọc `Kiến thức / Kỹ năng` (đã có ở CD-KH-030340) và còn lọc `Trạng thái`. | ☐ |
| FIX-005 | [CD-KH-060120](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-348805), [CD-KH-060121](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-74620), [CD-KH-060122](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-74752), [CD-KH-060123](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-74887), [CD-KH-060124](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-75018), [CD-KH-060125](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-75135) | `A06` Popup Soạn câu hỏi | Figma khác requirement | Khác Figma CD-KH-060120: popup chưa có field `Số câu` và `Kiến thức / Kỹ năng`; Figma mới có phần đáp án của Trắc nghiệm. | ☐ |
| FIX-006 | [CD-KH-060120](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-348805), [CD-KH-060121](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-74620), [CD-KH-060122](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-74752), [CD-KH-060123](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-74887), [CD-KH-060124](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-75018), [CD-KH-060125](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-75135) | `A06` Popup Soạn câu hỏi | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-007 | [CD-KH-030340](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-357438), [CD-KH-060140](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-75273), [CD-KH-060141](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-75298) | `A07` Import / Export Excel | Figma khác requirement | Khác Figma: nút Import / Export mới có ở CD-KH-030340; chưa có popup kết quả import. | ☐ |
| FIX-008 | [CD-KH-030340](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-357438), [CD-KH-060140](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-75273), [CD-KH-060141](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-75298) | `A07` Import / Export Excel | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-009 | [CD-KH-060150](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5672-75315) | `A08` Soát lỗi bằng AI | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-010 | [CD-KH-030341](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-358429), [CD-KH-030342](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-358483) | `A09` Generate bài tập bằng AI — Popup nhập yêu cầu | Figma khác requirement | Khác Figma CD-KH-030341 / 030342: dòng phụ dưới `Số câu` ghi `Tối đa 50 câu mỗi lần`; requirement không giới hạn. | ☐ |
| FIX-011 | [CD-KH-030347](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5609-33933) | `A12` Generate — Sau khi tạo | Figma khác requirement | Khác Figma CD-KH-030347: tag câu mới ghi `Mới`; requirement dùng tag `AI`. | ☐ |

## Chi tiết lớp học — Tab Hóa đơn

Cụm `class-detail-invoices-requirements` · MD: `docs/he-thong-ma/class-detail-invoices-requirements.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-012 | [ADM-LOP-040600](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=2384-52460) | `A01` Tab Hóa đơn — Bảng Hóa đơn đã dùng | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Chi tiết lớp học — Menu Tổng quan

Cụm `class-detail-overview-requirements` · MD: `docs/he-thong-ma/class-detail-overview-requirements.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-013 | [ADM-LOP-020100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=769-30963) | `A08` Đánh giá tổng và bài học gần đây | Figma khác requirement | Khác Figma ADM-LOP-020100: khối Bài học gần đây ở vùng trái đang vẽ 4 icon, requirement là 6 bài. | ☐ |
| FIX-014 | [ADM-LOP-020100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=769-30963) | `A09` Bảng bài học của học viên và điểm danh | Figma khác requirement | Khác Figma ADM-LOP-020100: bảng bài chưa có tag thời điểm mở bài phía trên tên bài. | ☐ |

## [Giáo viên] Chi tiết lớp — Thông tin

Cụm `class-information-requirements` · MD: `docs/he-thong-ma/class-information-requirements.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-015 | [GV-LOP-110100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4333-17990) | `A01` Tab Thông tin | Figma khác requirement | Mọi field hiển thị cùng một kiểu ô xám chỉ đọc như `Mã lớp`, `Ghi chú`, `Mô tả`. Khác Figma GV-LOP-110100: Figma còn vẽ mũi tên dropdown ở Khóa học, Loại lớp, Trạng thái và icon lịch ở Ngày bắt đầu/kết thúc; cần sửa Figma bỏ các control này. | ☐ |

## [Giáo viên] Chi tiết lớp — Tổng quan

Cụm `class-overview-requirements` · MD: `docs/he-thong-ma/class-overview-requirements.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-016 | [GV-LOP-020000](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4324-4861) | `A01` Tổng quan — Khung màn và phân quyền | Figma khác requirement | Khác Figma GV-LOP-020000: khối `Bài Học Gần Đây` ở vùng trái đang vẽ 4 icon, requirement là 6 bài; bảng bài học chưa có tag thời điểm mở bài phía trên tên bài. | ☐ |

## [Giáo viên] Chi tiết lớp — Giảng dạy

Cụm `class-teaching-requirements` · MD: `docs/he-thong-ma/class-teaching-requirements.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-017 | [GV-LOP-040100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4324-85925), [GV-LOP-040201](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5425-277432), [GV-LOP-040204](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7074-397332), [GV-LOP-040205](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7074-398519), [GV-LOP-040210](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5425-276208) | `A12` Bài tập và Kiểm tra — Khung menu | Figma khác requirement | Khác Figma GV-LOP-040100: Figma chưa có nút điều hướng chấm bài trên card; requirement bổ sung nút này cho `Giáo viên phụ trách chính`. | ☐ |
| FIX-018 | [GV-LOP-040200](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4324-86231) | `A14` Tab, badge và card bài | Figma khác requirement | Khác Figma GV-LOP-040200: Figma chưa có frame card `Chưa giao` đang chọn (xem trước đề) và nút `Giao bài`; hai thành phần này đặc tả theo ICS cũ. | ☐ |
| FIX-019 | [GV-LOP-050100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4333-7910) | `A26` Tự học — Danh sách bài và bảng thời gian | Figma khác requirement | Khác Figma GV-LOP-050100: Figma chỉ có trạng thái chưa có khóa tự học; trạng thái có dữ liệu theo UI của requirement Admin, bỏ các nút thêm. | ☐ |

## Quản lý khoá học

Cụm `course-management` · MD: `docs/he-thong-ma/course-management.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-020 | [CD-KH-010000](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5035-375316) | `A04` Trang 4: Popup Nhân bản khoá học | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Học Kỳ

Cụm `information` · MD: `docs/he-thong-ma/information.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-021 | [CD-KH-030100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-17005) | `A05` Popup Nhân bản học kỳ | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Kiến thức (S1)

Cụm `knowledge-s1` · MD: `docs/he-thong-ma/knowledge-s1.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-022 | [CD-KH-040100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4846-157807), [CD-KH-040200](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4846-168501) | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-023 | [CD-KH-040100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4846-157807), [CD-KH-040200](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4846-168501) | `A11` Panel Cụm và Số cụm · `A11.08` | Chưa có thiết kế | Thêm `Popup Liên kết bài học`: Tiêu đề `Liên kết cụm <tên cụm> với bài học`; cây `<kỳ> › Bài N: <tên>` của khoá, radio chọn **đúng 1 bài**; bài đã có cụm **cùng loại** mờ kèm nhãn `Đã liên kết: <tên cụm kia>`; lựa chọn `Bỏ liên kết`; `Huỷ` / `Lưu`. (**UI cần bổ sung**) | ☐ |
| FIX-024 | [CD-KH-040140](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4846-170817) | `A14` Preview mobile | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Học Kỳ - Tab Bài học

Cụm `lesson` · MD: `docs/he-thong-ma/lesson.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-025 | [CD-KH-030210](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1076-4963), [CD-KH-030230](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1073-4361), [CD-KH-030240](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1076-6297), [CD-KH-030250](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=2808-52020) | `A02` Popup: Chi tiết bài học - Tab Thông tin | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-026 | [CD-KH-030211](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7193-402861), [CD-KH-030244](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7193-403630), [CD-KH-030247](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7193-404533) | `A05` Popup: Chi tiết bài học - Tab Kiến thức | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Quản lý danh sách cấp độ

Cụm `level-management` · MD: `docs/he-thong-ma/level-management.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-027 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## [CD] Thư viện

Cụm `library` · MD: `docs/he-thong-ma/library.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-028 | [CD-KH-070160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-91615), [CD-KH-070170](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-92036), [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037) | `A01` Khung chung của Thư viện · `A01.04` | Chưa có thiết kế | Thêm `Lọc Nâng cao`: Chỉ Thư viện kiến thức và kỹ năng: `Tất cả` (mặc định), `Có`, `Không` theo field Nâng cao của mục (**UI cần bổ sung**). | ☐ |
| FIX-029 | [CD-KH-070160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-91615), [CD-KH-070170](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-92036), [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037) | `A01` Khung chung của Thư viện · `A01.10` | Chưa có thiết kế | Thêm `Cột Nâng cao`: `Có` / `Không`; chỉ có ở Thư viện kiến thức và kỹ năng, đứng trước cột `Trạng thái` (**UI cần bổ sung**). | ☐ |
| FIX-030 | [CD-KH-070160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-91615), [CD-KH-070161](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-94334), [CD-KH-070170](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-92036), [CD-KH-070171](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-95447) | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.10` | Chưa có thiết kế | Thêm `Menu ⋮`: Như các tab khác (Đổi trạng thái, Xoá). Ở dạng lưới thao tác qua panel Chi tiết chữ (**UI cần bổ sung**: nút `⋮` trong panel). | ☐ |
| FIX-031 | [CD-KH-070160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-91615), [CD-KH-070170](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-92036), [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037) | `A06` Thư viện bài tập · `A06.11` | Chưa có thiết kế | Thêm `Bấm dòng tab mẫu`: Mở bộ câu hỏi chỉ đọc (**UI cần bổ sung**). | ☐ |
| FIX-032 | [CD-KH-070301](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-81278), [CD-KH-070302](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82177), [CD-KH-070303](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82881), [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037), [CD-KH-070305](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332868) | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.08` | Chưa có thiết kế | Thêm `Audio theo kịch bản`: Thêm / sửa / xoá lượt thoại hoặc đổi giọng đối tượng làm audio cũ lệch kịch bản: thanh audio hiện nhãn `Audio cần tạo lại`; CD bấm `Tạo lại audio` (hệ thống đọc từng lượt bằng TTS theo giọng của đối tượng, ghép theo thứ tự lượt) hoặc tải file mới. Lưu câu khi audio chưa tạo lại thì hỏi xác nhận. **UI cần bổ sung.** | ☐ |
| FIX-033 | [CD-KH-070301](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-81278), [CD-KH-070302](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82177), [CD-KH-070303](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82881), [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037), [CD-KH-070305](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332868) | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.09` | Chưa có thiết kế | Thêm `Lựa chọn / đáp án`: Phần câu hỏi của bài nghe (lựa chọn, đáp án đúng) theo form soạn câu của BTVN; Figma chưa vẽ (**UI cần bổ sung**). | ☐ |
| FIX-034 | [CD-KH-070301](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-81278), [CD-KH-070302](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82177), [CD-KH-070303](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82881), [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037), [CD-KH-070305](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332868) | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.23` | Chưa có thiết kế | Thêm `Chọn từ có sẵn`: Trên popup `Thêm từ khoá` có ô tìm từ trong Kiến thức (S1) của khoá học (Từ vựng, Hanzi / Kanji); chọn từ thì tự điền Phiên âm, Từ loại, Nghĩa, Chi tiết từ, Hán Việt, Ví dụ, CD sửa lại được. Không tìm thấy thì nhập mới như Figma. **UI cần bổ sung.** | ☐ |

## [Phụ trách lớp, Admin] Lịch Họp

Cụm `meeting-schedule` · MD: `docs/he-thong-ma/meeting-schedule.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-035 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.10` | Chưa có thiết kế | Thêm `Xoá`: Chỉ người tạo, ở Chi tiết cuộc họp (UI cần bổ sung nút). Mở popup xác nhận `Xoá cuộc họp?` hiển thị chủ đề + ngày giờ; xác nhận mới xoá. | ☐ |

## Tổng quan (S2)

Cụm `overview-s2` · MD: `docs/he-thong-ma/overview-s2.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-036 | [CD-KH-020100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=470-2142) | `A02` Khu vực: Bảng "Nội dung buổi học" | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Kỹ năng (S6) — Nghe / Đọc

Cụm `skill-s6` · MD: `docs/he-thong-ma/skill-s6.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-037 | chưa gắn màn | `A02` Bảng bài nghe · `A02.01` | Chưa có thiết kế | Thêm `Checkbox`: Chọn dòng cho thao tác hàng loạt; checkbox đầu bảng chọn cả trang. | ☐ |
| FIX-038 | chưa gắn màn | `A02` Bảng bài nghe · `A02.02` | Chưa có thiết kế | Thêm `STT + tay nắm kéo thả`: Số thứ tự theo sắp xếp hiện tại, 2 chữ số; tay nắm chỉ hiện khi đang xem 1 cụm và Sắp xếp = `Thứ tự trong cụm`. | ☐ |
| FIX-039 | chưa gắn màn | `A02` Bảng bài nghe · `A02.03` | Chưa có thiết kế | Thêm `Bài nghe`: Dòng 1 **Tên bài** (ngôn ngữ đích, vd `对话：初次见面`), dòng 2 **Mô tả** tiếng Việt, cắt `…` khi dài; hover hiện đủ. Bấm tên mở drawer Chi tiết. | ☐ |
| FIX-040 | chưa gắn màn | `A02` Bảng bài nghe · `A02.04` | Chưa có thiết kế | Thêm `Âm thanh`: Nút phát, thanh tiến độ, thời lượng `mm:ss` (≥ 1 giờ hiện `h:mm:ss`). Chưa có file hiện `— chưa có file —` màu cam. Chỉ phát một bài tại một thời điểm, phát bài khác thì bài đang phát dừng. | ☐ |
| FIX-041 | chưa gắn màn | `A02` Bảng bài nghe · `A02.05` | Chưa có thiết kế | Thêm `Cụm`: Nhãn cụm duy nhất của bài; bấm nhãn mở popup Thêm vào cụm / Gỡ khỏi cụm của bài đó. Không thuộc cụm nào hiện `Chưa phân cụm`. Không có nhãn `+N`. | ☐ |
| FIX-042 | chưa gắn màn | `A02` Bảng bài nghe · `A02.06` | Chưa có thiết kế | Thêm `Nâng cao`: `Có` / `Không` (mặc định `Không`); `Có` = bài nâng cao, app không đẩy lên bước học chính, vẫn hiện trong danh sách luyện (**UI cần bổ sung**). | ☐ |
| FIX-043 | chưa gắn màn | `A02` Bảng bài nghe · `A02.07` | Chưa có thiết kế | Thêm `Menu ⋮`: `Mở chi tiết`, `Thêm vào cụm / Gỡ khỏi cụm`, `Transcript AI`, `Gỡ khỏi khoá`. | ☐ |
| FIX-044 | chưa gắn màn | `A02` Bảng bài nghe · `A02.08` | Chưa có thiết kế | Thêm `Nhãn AI dưới tên`: `AI · đang tạo transcript`, `AI · đã tạo, chờ duyệt`, `? <lý do nghi sai>` (xem khu vực AI). | ☐ |
| FIX-045 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.01` | Chưa có thiết kế | Thêm `Tất cả cụm + badge N cụm`: Tiêu đề panel và số cụm hiện có; chọn để xem mọi bài của tab (mặc định). | ☐ |
| FIX-046 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.02` | Chưa có thiết kế | Thêm `Số cụm`: **Chỉ đọc**, = tổng `Số buổi` của các dòng Nội dung buổi học có Loại = kỹ năng của tab ở Tổng quan (S2); ghi chú `Theo Tổng quan (S2) · N buổi`. Hệ thống tự tạo đủ cụm rỗng `Chủ đề 1` … `Chủ đề N`; CD đổi tên, chia bài, liên kết bài học. Chưa có buổi thì panel hiện `Chưa có cụm. Nhập Số buổi cho loại <Nghe> ở Tổng quan (S2) để tạo cụm.` | ☐ |
| FIX-047 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.03` | Chưa có thiết kế | Thêm `Chia cụm bằng AI`: AI đề xuất chia các bài của tab vào cụm theo chủ đề nội dung; kết quả chờ duyệt, CD áp dụng hoặc bỏ, theo cùng quy tắc popup Chia cụm bằng AI của S1. | ☐ |
| FIX-048 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.04` | Chưa có thiết kế | Thêm `Dòng cụm`: `NN. <tên cụm>` + badge số bài của cụm (0 hiện xám) + chip bài học đã liên kết (`HK I · Bài 3`) hoặc nhãn cam `Chưa liên kết`; chọn để lọc bảng trái, tiêu đề bảng đổi thành tên cụm. Menu ⋮: `Đổi tên`, `Liên kết bài học`. Không có `Xoá cụm`. | ☐ |
| FIX-049 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.05` | Chưa có thiết kế | Thêm `Popup Liên kết bài học`: Như S1: cây `<kỳ> › Bài N`, radio chọn đúng 1 bài; bài đã có cụm **cùng loại kỹ năng** mờ kèm `Đã liên kết: <cụm>`; `Bỏ liên kết`; `Huỷ` / `Lưu`. | ☐ |
| FIX-050 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.06` | Chưa có thiết kế | Thêm `Chưa phân cụm`: Badge cam = số bài chưa thuộc cụm nào; chọn để lọc. | ☐ |
| FIX-051 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.07` | Chưa có thiết kế | Thêm `Thêm cụm mới`: **Bỏ**: số cụm chỉ do S2 quyết định. | ☐ |
| FIX-052 | chưa gắn màn | `A05` Tìm kiếm, lọc và sắp xếp · `A05.01` | Chưa có thiết kế | Thêm `Ô tìm`: Khớp một phần, không phân biệt hoa thường, theo tên bài, mô tả, nội dung (kịch bản với Nghe, đoạn văn với Đọc). Tìm sau khi ngừng gõ 2 giây hoặc Enter. | ☐ |
| FIX-053 | chưa gắn màn | `A05` Tìm kiếm, lọc và sắp xếp · `A05.02` | Chưa có thiết kế | Thêm `Cụm`: Chọn ở panel Cụm (`Tất cả cụm`, một cụm, hoặc `Chưa phân cụm`); không có dropdown lọc riêng trên toolbar. | ☐ |
| FIX-054 | chưa gắn màn | `A05` Tìm kiếm, lọc và sắp xếp · `A05.03` | Chưa có thiết kế | Thêm `Sắp xếp`: `Thứ tự thêm` (mặc định), `Tên A–Z`, `Mới cập nhật`, `Thứ tự trong cụm` (chỉ khi đang xem 1 cụm). | ☐ |
| FIX-055 | chưa gắn màn | `A05` Tìm kiếm, lọc và sắp xếp · `A05.04` | Chưa có thiết kế | Thêm `Trạng thái`: `Tất cả` (mặc định), `Nháp`, `Công khai`, `Vô hiệu` của bản ghi thư viện. | ☐ |
| FIX-056 | chưa gắn màn | `A05` Tìm kiếm, lọc và sắp xếp · `A05.05` | Chưa có thiết kế | Thêm `Nâng cao`: `Tất cả` (mặc định), `Có`, `Không` (**UI cần bổ sung**). | ☐ |
| FIX-057 | [CD-KH-050110](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-84755), [CD-KH-070301](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-81278) | `A06` Drawer Chi tiết bài nghe · `A06.05` | Chưa có thiết kế | Thêm `Nâng cao`: Toggle `Không` (mặc định) / `Có`; cùng ý nghĩa field Nâng cao của Kiến thức (S1): `Có` = bài nâng cao, không đẩy lên bước học chính. (**UI cần bổ sung**) | ☐ |
| FIX-058 | [CD-KH-050110](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-84755), [CD-KH-070301](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-81278) | `A06` Drawer Chi tiết bài nghe · `A06.07` | Chưa có thiết kế | Thêm `Kịch bản · N lượt`: Danh sách lượt thoại theo thứ tự: nhãn người nói (`A`, `B`…), câu gốc, `Phiên âm ·`, `Dịch ·`, mốc `start – end` theo audio (`mm:ss.s`, **UI cần bổ sung**). Thêm / sửa / xoá / kéo thả lượt; lượt có giá trị AI chờ duyệt viền nét đứt cam với `✓ Duyệt` / `↺ Hoàn tác`. | ☐ |
| FIX-059 | [CD-KH-070302](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82177), [CD-KH-050210](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6935-379016) | `A07` Drawer Chi tiết bài đọc | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-060 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.01` | Chưa có thiết kế | Thêm `Mở chi tiết`: Mở drawer. | ☐ |
| FIX-061 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.02` | Chưa có thiết kế | Thêm `Thêm vào cụm / Gỡ khỏi cụm`: Mở popup `Cụm của N bài` (N bài đang chọn: 1 khi mở từ dòng). | ☐ |
| FIX-062 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.03` | Chưa có thiết kế | Thêm `Transcript AI (Nghe) / Tạo câu hỏi bằng AI (Đọc)`: Chạy AI cho riêng bài đó (xem khu vực AI). | ☐ |
| FIX-063 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.04` | Chưa có thiết kế | Thêm `Gỡ khỏi khoá`: Mở popup Gỡ khỏi khoá. | ☐ |
| FIX-064 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.05` | Chưa có thiết kế | Thêm `Popup — Tìm cụm`: Tìm theo tên cụm của tab. | ☐ |
| FIX-065 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.06` | Chưa có thiết kế | Thêm `Popup — Danh sách cụm`: **Radio** từng cụm + số bài của cụm, thêm `Chưa phân cụm` (= gỡ khỏi cụm). Mọi bài đang chọn cùng cụm thì chọn sẵn cụm đó. | ☐ |
| FIX-066 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.07` | Chưa có thiết kế | Thêm `Popup — Huỷ / Lưu`: Lưu: các bài chuyển vào cụm đã chọn (rời cụm cũ); chọn `Chưa phân cụm` thì gỡ khỏi cụm. Bài học liên kết cụm cũ / mới phản ánh ngay, không cảnh báo. | ☐ |
| FIX-067 | [CD-KH-050150](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122539) | `A11` Popup Thêm bài từ thư viện | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-068 | [CD-KH-050160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122949) | `A12` Popup Tạo bài mới | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-069 | chưa gắn màn | `A15` Import / Export Excel · `A15.01` | Chưa có thiết kế | Thêm `listening_lesson (bắt buộc)`: Mỗi dòng = 1 bài nghe \| `id` → mã dòng trong file (chỉ để nối sheet, không lưu làm mã bài); `title` → `Tên bài`; `mean` → `Mô tả`. Bỏ qua `lesson_id`. | ☐ |
| FIX-070 | chưa gắn màn | `A15` Import / Export Excel · `A15.02` | Chưa có thiết kế | Thêm `listening`: Kịch bản, mỗi dòng = 1 lượt thoại, theo thứ tự dòng \| `listening_lesson_id` → bài nghe; `character` → người nói (`A`, `B`…); `sentence` → câu gốc; `phonetic` → `Phiên âm`; `furigana` → phiên âm có chú thích (tiếng Nhật); `mean` → `Dịch`; `start` / `end` → mốc thời gian. Bỏ qua `id`, `_start`, `_end`. | ☐ |
| FIX-071 | chưa gắn màn | `A15` Import / Export Excel · `A15.03` | Chưa có thiết kế | Thêm `listening_question`: Câu hỏi của bài nghe \| `listening_lesson_id` → bài nghe; `question`, `a`–`d`, `answer` (số thứ tự đáp án đúng 1–4), `explain` → câu hỏi trắc nghiệm của bài (lưu vào bộ câu hỏi Listening của Thư viện bài tập). | ☐ |
| FIX-072 | chưa gắn màn | `A15` Import / Export Excel · `A15.04` | Chưa có thiết kế | Thêm `reading_lesson (bắt buộc)`: Mỗi dòng = 1 bài đọc \| `id` → mã dòng trong file; `title` → `Tên bài`; `mean` → `Mô tả`; `source` → nguồn (ghi chú). Bỏ qua `lesson_id`. | ☐ |
| FIX-073 | chưa gắn màn | `A15` Import / Export Excel · `A15.05` | Chưa có thiết kế | Thêm `reading`: Đoạn văn, mỗi dòng = 1 câu, theo thứ tự dòng \| `reading_lesson_id` → bài đọc; `sentence` → câu của đoạn văn; `phonetic` → `Phiên âm`; `furigana` → phiên âm có chú thích; `mean` → `Dịch`. Bỏ qua `id`, `note`. | ☐ |
| FIX-074 | chưa gắn màn | `A15` Import / Export Excel · `A15.06` | Chưa có thiết kế | Thêm `reading_question`: Câu hỏi của bài đọc \| `reading_lesson_id` → bài đọc; `question`, `image`, `question_type`, `a`–`d`, `answer`, `explain` → câu hỏi (bộ câu hỏi Reading của Thư viện bài tập). | ☐ |
| FIX-075 | chưa gắn màn | `A15` Import / Export Excel · `A15.07` | Chưa có thiết kế | Thêm `reading_vocabulary`: Từ vựng liên quan của bài đọc \| **Bắt buộc có cột `reading_lesson_id`** → bài đọc; `word`, `phonetic`, `type`, `furigana`, `mean`, `example`, `example_phonetic`, `example_mean` → từ vựng. Từ trùng với Từ vựng S1 của khoá thì nối vào từ đó; chưa có thì tạo từ mới trong S1 của khoá rồi nối. | ☐ |
| FIX-076 | chưa gắn màn | `A15` Import / Export Excel · `A15.08` | Chưa có thiết kế | Thêm `Import — sheet`: Thiếu sheet bắt buộc (`listening_lesson` / `reading_lesson`) → báo `Không tìm thấy sheet listening_lesson`, không import. Sheet phụ trống / không có thì bài thiếu phần đó (tính thiếu thông tin), vẫn import. | ☐ |
| FIX-077 | chưa gắn màn | `A15` Import / Export Excel · `A15.09` | Chưa có thiết kế | Thêm `Import — dòng bắt buộc`: Sheet bài gốc: `title`. Sheet phụ: cột nối `listening_lesson_id` / `reading_lesson_id` phải trùng một `id` của sheet bài gốc trong cùng file. Nghe cho phép trống file âm thanh (bài tính thiếu thông tin). | ☐ |
| FIX-078 | chưa gắn màn | `A15` Import / Export Excel · `A15.10` | Chưa có thiết kế | Thêm `Import — lỗi dữ liệu`: Có dòng lỗi → **chặn cả file**, không thêm bài nào; danh sách lỗi theo **sheet + số dòng** (vd `reading_vocabulary dòng 12: thiếu reading_lesson_id`, `listening dòng 40: listening_lesson_id 999 không có trong listening_lesson`). | ☐ |
| FIX-079 | chưa gắn màn | `A15` Import / Export Excel · `A15.11` | Chưa có thiết kế | Thêm `Import — thành công`: Mỗi dòng sheet bài gốc tạo 1 bản ghi thư viện mới `Nháp` (kèm kịch bản / đoạn văn, câu hỏi, từ vựng liên quan), gắn vào khoá theo thứ tự dòng, vào cụm đang chọn; Toast `Thành Công` `Đã import N bài nghe.`; gợi ý Soát lỗi AI. Không tự dò trùng bài. | ☐ |
| FIX-080 | chưa gắn màn | `A15` Import / Export Excel · `A15.12` | Chưa có thiết kế | Thêm `Export`: Toàn bộ bài của tab trong khoá (không theo bộ lọc); tên file `<Khoá học>_<Kỹ năng>.xlsx`; cùng các sheet và cột như bảng trên (Nghe 3 sheet, Đọc 4 sheet, `reading_vocabulary` có `reading_lesson_id`), `id` đánh lại theo thứ tự trong file; thêm cột `cluster` (tên các cụm, cách nhau `;`) ở sheet bài gốc để tham khảo. Không có cột bài học. | ☐ |
| FIX-081 | chưa gắn màn | `A20` Cụm liên kết với Chi tiết bài học · `A20.01` | Chưa có thiết kế | Thêm `Nguồn dữ liệu`: Với mỗi loại kỹ năng, bài học có tối đa 1 cụm liên kết; tab hiện bài của cụm đó theo `Thứ tự trong cụm`. | ☐ |
| FIX-082 | chưa gắn màn | `A20` Cụm liên kết với Chi tiết bài học · `A20.02` | Chưa có thiết kế | Thêm `Bộ lọc loại`: `Nghe` (mặc định), `Đọc`, `Viết`, `Nói`; loại chưa liên kết hiện `Chưa có cụm <loại> liên kết với bài này` + hướng dẫn `Liên kết tại Kỹ năng (S6) › panel Cụm`. | ☐ |
| FIX-083 | chưa gắn màn | `A20` Cụm liên kết với Chi tiết bài học · `A20.03` | Chưa có thiết kế | Thêm `Tiêu đề khung`: Tên cụm đã liên kết (vd `Cụm nghe: Chào hỏi · 3 bài`). | ☐ |
| FIX-084 | chưa gắn màn | `A20` Cụm liên kết với Chi tiết bài học · `A20.04` | Chưa có thiết kế | Thêm `Đồng bộ`: Thêm / gỡ / chuyển bài trong cụm, đổi tên cụm, đổi liên kết ở S6 → bài học cập nhật ngay. | ☐ |

## Học Kỳ - Tab Kiểm tra

Cụm `test` · MD: `docs/he-thong-ma/test.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-085 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A01` Danh sách bài kiểm tra | Figma khác requirement | Khác Figma CD-KH-030300: card chưa có menu `⋮` để xoá bài. | ☐ |
| FIX-086 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A01` Danh sách bài kiểm tra · `A01.06` | Chưa có thiết kế | Thêm `Xoá bài`: Menu `⋮` trên card có `Xoá` (popup xác nhận `Xoá bài kiểm tra "<tên>"? Bộ câu hỏi của bài cũng sẽ bị xoá.`, nút `Huỷ` / `Xoá`); xoá mềm (**UI cần bổ sung**). | ☐ |
| FIX-087 | [CD-KH-030310](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1496-16304) | `A02` Popup bài kiểm tra — Tab Thông tin | Figma khác requirement | Khác Figma CD-KH-030310: ô `Số câu hỏi` đang vẽ như ô nhập, requirement là chỉ đọc; ô `Tổng điểm` trên Figma cần bỏ. Dòng Lưu ý ghi `Số câu hỏi và tổng điểm có thể được cập nhật`. | ☐ |
| FIX-088 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi | Figma khác requirement | Khác Figma: bộ câu hỏi đang vẽ thành màn riêng `CD-KH-030340` (mở từ `>`); requirement đặt trong tab `Bộ Câu Hỏi` của popup (**UI cần bổ sung**). | ☐ |
| FIX-089 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
