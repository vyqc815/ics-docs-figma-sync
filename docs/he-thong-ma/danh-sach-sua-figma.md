# Danh sách sửa Figma theo requirement

> Requirement của QC là chuẩn. Mỗi dòng là một việc design làm trên Figma. Sinh từ registry (`scripts/he-thong-ma/figma_fixes.py`), không ghi gì lên Figma.

Trước khi sửa, design xem requirement còn đúng không: nhiều ghi chú "Khác Figma" và "UI cần bổ sung" viết từ bản Figma cũ. Ghi chú đã cũ thì báo QC xoá, không sửa Figma. Dòng *Chưa có thiết kế* là chỗ tool chưa thấy trên màn đã sync; nếu nó nằm trong popup chưa sync thì có thể đã có.

| Loại | Số việc |
|---|---:|
| Figma khác requirement | 17 |
| Chưa có thiết kế | 13 |
| Khu vực cần bổ sung | 20 |

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
| FIX-007 | [CD-KH-030340](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-357438) | `A07` Import / Export Excel | Figma khác requirement | Khác Figma: nút Import / Export mới có ở CD-KH-030340; chưa có popup kết quả import. | ☐ |
| FIX-008 | [CD-KH-030340](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-357438) | `A07` Import / Export Excel | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
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
| FIX-020 | [CD-KH-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=2011-26470), [CD-KH-010013](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=2706-43836) | `A04` Trang 4: Popup Nhân bản khoá học | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Học Kỳ

Cụm `information` · MD: `docs/he-thong-ma/information.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-021 | [CD-KH-030104](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6006-129022), [CD-KH-030110](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1496-16189), [CD-KH-030120](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1496-16214) | `A05` Popup Nhân bản học kỳ | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

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
| FIX-025 | [CD-KH-030211](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7193-402861), [CD-KH-030244](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7193-403630), [CD-KH-030247](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7193-404533) | `A05` Popup: Chi tiết bài học - Tab Kiến thức | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Quản lý danh sách cấp độ

Cụm `level-management` · MD: `docs/he-thong-ma/level-management.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-026 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## [CD] Thư viện

Cụm `library` · MD: `docs/he-thong-ma/library.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-027 | [CD-KH-070160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-91615), [CD-KH-070170](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-92036) | `A01` Khung chung của Thư viện · `A01.04` | Chưa có thiết kế | Thêm `Lọc Nâng cao`: Chỉ Thư viện kiến thức và kỹ năng: `Tất cả` (mặc định), `Có`, `Không` theo field Nâng cao của mục (**UI cần bổ sung**). | ☐ |
| FIX-028 | [CD-KH-070160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-91615), [CD-KH-070170](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-92036) | `A01` Khung chung của Thư viện · `A01.10` | Chưa có thiết kế | Thêm `Cột Nâng cao`: `Có` / `Không`; chỉ có ở Thư viện kiến thức và kỹ năng, đứng trước cột `Trạng thái` (**UI cần bổ sung**). | ☐ |
| FIX-029 | [CD-KH-070160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-91615), [CD-KH-070161](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-94334), [CD-KH-070170](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-92036) | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.10` | Chưa có thiết kế | Thêm `Menu ⋮`: Như các tab khác (Đổi trạng thái, Xoá). Ở dạng lưới thao tác qua panel Chi tiết chữ (**UI cần bổ sung**: nút `⋮` trong panel). | ☐ |
| FIX-030 | [CD-KH-070160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-91615), [CD-KH-070170](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-92036) | `A06` Thư viện bài tập · `A06.11` | Chưa có thiết kế | Thêm `Bấm dòng tab mẫu`: Mở bộ câu hỏi chỉ đọc (**UI cần bổ sung**). | ☐ |
| FIX-031 | [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037), [CD-KH-070305](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332868) | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.08` | Chưa có thiết kế | Thêm `Audio theo kịch bản`: Thêm / sửa / xoá lượt thoại hoặc đổi giọng đối tượng làm audio cũ lệch kịch bản: thanh audio hiện nhãn `Audio cần tạo lại`; CD bấm `Tạo lại audio` (hệ thống đọc từng lượt bằng TTS theo giọng của đối tượng, ghép theo thứ tự lượt) hoặc tải file mới. Lưu câu khi audio chưa tạo lại thì hỏi xác nhận. **UI cần bổ sung.** | ☐ |
| FIX-032 | [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037), [CD-KH-070305](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332868) | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.09` | Chưa có thiết kế | Thêm `Lựa chọn / đáp án`: Phần câu hỏi của bài nghe (lựa chọn, đáp án đúng) theo form soạn câu của BTVN; Figma chưa vẽ (**UI cần bổ sung**). | ☐ |
| FIX-033 | [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037), [CD-KH-070305](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332868) | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.23` | Chưa có thiết kế | Thêm `Chọn từ có sẵn`: Trên popup `Thêm từ khoá` có ô tìm từ trong Kiến thức (S1) của khoá học (Từ vựng, Hanzi / Kanji); chọn từ thì tự điền Phiên âm, Từ loại, Nghĩa, Chi tiết từ, Hán Việt, Ví dụ, CD sửa lại được. Không tìm thấy thì nhập mới như Figma. **UI cần bổ sung.** | ☐ |

## [Phụ trách lớp, Admin] Lịch Họp

Cụm `meeting-schedule` · MD: `docs/he-thong-ma/meeting-schedule.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-034 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Kỹ năng (S6) — Nghe / Đọc

Cụm `skill-s6` · MD: `docs/he-thong-ma/skill-s6.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-035 | [CD-KH-050100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-340361), [CD-KH-050110](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-84755), [CD-KH-050120](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-119253), [CD-KH-050140](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-116941), [CD-KH-050150](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122539), [CD-KH-050180](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-120248), [CD-KH-050190](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-121390), [CD-KH-050400](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-83606) | `A02` Bảng bài nghe · `A02.06` | Chưa có thiết kế | Thêm `Nâng cao`: `Có` / `Không` (mặc định `Không`); `Có` = bài nâng cao, app không đẩy lên bước học chính, vẫn hiện trong danh sách luyện (**UI cần bổ sung**). | ☐ |
| FIX-036 | [CD-KH-050100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-340361), [CD-KH-050110](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-84755), [CD-KH-050120](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-119253), [CD-KH-050130](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-118162), [CD-KH-050180](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-120248), [CD-KH-050190](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-121390), [CD-KH-050200](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-342722), [CD-KH-050210](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6935-379016), [CD-KH-050300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-82521), [CD-KH-050400](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-83606) | `A04` Panel Cụm và Số cụm | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-037 | [CD-KH-050100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-340361) | `A05` Tìm kiếm, lọc và sắp xếp · `A05.05` | Chưa có thiết kế | Thêm `Nâng cao`: `Tất cả` (mặc định), `Có`, `Không` (**UI cần bổ sung**). | ☐ |
| FIX-038 | [CD-KH-050150](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122539), [CD-KH-050160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122949) | `A06` Drawer Chi tiết bài nghe · `A06.05` | Chưa có thiết kế | Thêm `Nâng cao`: Toggle `Không` (mặc định) / `Có`; cùng ý nghĩa field Nâng cao của Kiến thức (S1): `Có` = bài nâng cao, không đẩy lên bước học chính. (**UI cần bổ sung**) | ☐ |
| FIX-039 | [CD-KH-050150](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122539), [CD-KH-050160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122949) | `A06` Drawer Chi tiết bài nghe · `A06.07` | Chưa có thiết kế | Thêm `Kịch bản · N lượt`: Danh sách lượt thoại theo thứ tự: nhãn người nói (`A`, `B`…), câu gốc, `Phiên âm ·`, `Dịch ·`, mốc `start – end` theo audio (`mm:ss.s`, **UI cần bổ sung**). Thêm / sửa / xoá / kéo thả lượt; lượt có giá trị AI chờ duyệt viền nét đứt cam với `✓ Duyệt` / `↺ Hoàn tác`. | ☐ |
| FIX-040 | [CD-KH-050210](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6935-379016) | `A07` Drawer Chi tiết bài đọc | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-041 | [CD-KH-050100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-340361), [CD-KH-050110](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-84755), [CD-KH-050120](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-119253), [CD-KH-050130](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-118162), [CD-KH-050155](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-120233), [CD-KH-050180](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-120248), [CD-KH-050190](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-121390), [CD-KH-050200](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-342722), [CD-KH-050210](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6935-379016), [CD-KH-050300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-82521) | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-042 | [CD-KH-050150](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122539) | `A11` Popup Thêm bài từ thư viện | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-043 | [CD-KH-050160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122949) | `A12` Popup Tạo bài mới | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-044 | [CD-KH-070302](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82177), [CD-KH-070305](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332868), [CD-KH-070309](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6579-360783), [CD-KH-070313](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6518-376391) | `A15` Import / Export Excel | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-045 | [CD-KH-050100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5491-340361) | `A20` Cụm liên kết với Chi tiết bài học | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Học Kỳ - Tab Kiểm tra

Cụm `test` · MD: `docs/he-thong-ma/test.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-046 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A01` Danh sách bài kiểm tra | Figma khác requirement | Khác Figma CD-KH-030300: card chưa có menu `⋮` để xoá bài. | ☐ |
| FIX-047 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A01` Danh sách bài kiểm tra · `A01.06` | Chưa có thiết kế | Thêm `Xoá bài`: Menu `⋮` trên card có `Xoá` (popup xác nhận `Xoá bài kiểm tra "<tên>"? Bộ câu hỏi của bài cũng sẽ bị xoá.`, nút `Huỷ` / `Xoá`); xoá mềm (**UI cần bổ sung**). | ☐ |
| FIX-048 | [CD-KH-030310](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1496-16304) | `A02` Popup bài kiểm tra — Tab Thông tin | Figma khác requirement | Khác Figma CD-KH-030310: ô `Số câu hỏi` đang vẽ như ô nhập, requirement là chỉ đọc; ô `Tổng điểm` trên Figma cần bỏ. Dòng Lưu ý ghi `Số câu hỏi và tổng điểm có thể được cập nhật`. | ☐ |
| FIX-049 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi | Figma khác requirement | Khác Figma: bộ câu hỏi đang vẽ thành màn riêng `CD-KH-030340` (mở từ `>`); requirement đặt trong tab `Bộ Câu Hỏi` của popup (**UI cần bổ sung**). | ☐ |
| FIX-050 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
