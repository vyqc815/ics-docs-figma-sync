# Danh sách sửa Figma theo requirement

> Requirement của QC là chuẩn. Mỗi dòng là một việc design làm trên Figma. Sinh từ registry (`scripts/he-thong-ma/figma_fixes.py`), không ghi gì lên Figma.

Trước khi sửa, design xem requirement còn đúng không: nhiều ghi chú "Khác Figma" và "UI cần bổ sung" viết từ bản Figma cũ. Ghi chú đã cũ thì báo QC xoá, không sửa Figma. Dòng *Chưa có thiết kế* là chỗ tool chưa thấy trên màn đã sync; nếu nó nằm trong popup chưa sync thì có thể đã có.

| Loại | Số việc |
|---|---:|
| Figma khác requirement | 17 |
| Chưa có thiết kế | 60 |
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
| FIX-023 | [CD-KH-040125](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4846-176086) | `A10` Popup Thêm vào cụm / Gỡ khỏi cụm | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-024 | [CD-KH-040100](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4846-157807), [CD-KH-040200](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4846-168501) | `A11` Panel Cụm và Số cụm | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-025 | [CD-KH-040140](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=4846-170817) | `A14` Preview mobile | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Học Kỳ - Tab Bài học

Cụm `lesson` · MD: `docs/he-thong-ma/lesson.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-026 | [CD-KH-030210](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1076-4963), [CD-KH-030230](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1073-4361), [CD-KH-030240](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1076-6297), [CD-KH-030250](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=2808-52020) | `A02` Popup: Chi tiết bài học - Tab Thông tin | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-027 | [CD-KH-030211](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7193-402861), [CD-KH-030244](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7193-403630), [CD-KH-030247](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=7193-404533) | `A05` Popup: Chi tiết bài học - Tab Kiến thức | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Quản lý danh sách cấp độ

Cụm `level-management` · MD: `docs/he-thong-ma/level-management.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-028 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.01` | Chưa có thiết kế | Thêm `Cấp độ`: Hiển thị (chỉ đọc) đúng Tên cấp độ đang thao tác. | ☐ |
| FIX-029 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.02` | Chưa có thiết kế | Thêm `Trạng thái hiện tại`: Hiển thị badge trạng thái hiện tại (`Nháp`) trước khi chuyển. | ☐ |
| FIX-030 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.03` | Chưa có thiết kế | Thêm `ID cấp độ`: Hiển thị ID hiện tại (2 chữ số) mà cấp độ đã có sẵn từ lúc tạo. | ☐ |
| FIX-031 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.04` | Chưa có thiết kế | Thêm `Ô nhập ID`: Hiển thị sẵn ID hiện tại và cho phép chỉnh sửa trực tiếp lần cuối trước khi khóa. Gõ vào ô sẽ kích hoạt kiểm tra lại (định dạng 2 chữ số + duy nhất toàn hệ thống). | ☐ |
| FIX-032 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.05` | Chưa có thiết kế | Thêm `Nút làm mới ID (biểu tượng xoay)`: Sinh một ID 2 chữ số mới, chưa được sử dụng, điền vào ô nhập; hệ thống phải kiểm tra lại ID mới này. | ☐ |
| FIX-033 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.06` | Chưa có thiết kế | Thêm `Mã cấp độ`: Nếu đã có giá trị: hiển thị chỉ đọc, không cho sửa trong popup. Nếu đang rỗng: hiển thị ô nhập **bắt buộc**, gõ vào sẽ kiểm tra không để trống sau khi cắt khoảng trắng đầu/cuối (không kiểm tra trùng). Sau khi công khai, Mã cấp độ bị khóa. | ☐ |
| FIX-034 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.07` | Chưa có thiết kế | Thêm `Biểu tượng kết quả kiểm tra`: ID (khi đang ở dạng nhập): tick xanh khi đúng định dạng và chưa trùng; x đỏ khi sai định dạng hoặc bị trùng. Mã cấp độ (khi đang ở dạng nhập): tick xanh khi có giá trị; x đỏ khi để trống. | ☐ |
| FIX-035 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.08` | Chưa có thiết kế | Thêm `Thông báo trạng thái`: ID: `ID có thể sử dụng` / `ID đang bị trùng` / `ID sai định dạng`. Mã cấp độ (khi đang trống): `Mã cấp độ có thể sử dụng` / `Mã cấp độ không được để trống`. | ☐ |
| FIX-036 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.09` | Chưa có thiết kế | Thêm `Ghi chú cảnh báo`: Hiển thị cố định: `Sau khi xác nhận, cấp độ sẽ chuyển sang trạng thái Công khai, chỉ còn sửa được Tên và Mô tả. ID và Mã cấp độ sẽ bị khóa`. | ☐ |
| FIX-037 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.10` | Chưa có thiết kế | Thêm `Nút Công khai cấp độ`: Chỉ bật khi ID hợp lệ, chưa trùng **và** Mã cấp độ có giá trị. Khi bấm, backend kiểm tra lại lần cuối rồi lưu ID, lưu Mã cấp độ (nếu vừa nhập) và chuyển trạng thái sang `Công Khai` trong cùng một giao dịch. | ☐ |
| FIX-038 | [CD-CDO-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1901-3763) | `A04` Popup Kích hoạt công khai cấp độ · `A04.11` | Chưa có thiết kế | Thêm `Nút Hủy / biểu tượng X`: Đóng popup, không lưu thay đổi ID/Mã cấp độ vừa nhập, không đổi trạng thái cấp độ. | ☐ |

## [CD] Thư viện

Cụm `library` · MD: `docs/he-thong-ma/library.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-039 | [CD-KH-070160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-91615), [CD-KH-070161](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-94334), [CD-KH-070170](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-92036), [CD-KH-070171](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-95447) | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.10` | Chưa có thiết kế | Thêm `Menu ⋮`: Như các tab khác (Đổi trạng thái, Xoá). Ở dạng lưới thao tác qua panel Chi tiết chữ (**UI cần bổ sung**: nút `⋮` trong panel). | ☐ |
| FIX-040 | [CD-KH-070160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-91615), [CD-KH-070170](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=5729-92036), [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037) | `A06` Thư viện bài tập · `A06.11` | Chưa có thiết kế | Thêm `Bấm dòng tab mẫu`: Mở bộ câu hỏi chỉ đọc (**UI cần bổ sung**). | ☐ |
| FIX-041 | [CD-KH-070301](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-81278), [CD-KH-070302](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82177), [CD-KH-070303](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82881), [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037), [CD-KH-070305](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332868) | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.08` | Chưa có thiết kế | Thêm `Audio theo kịch bản`: Thêm / sửa / xoá lượt thoại hoặc đổi giọng đối tượng làm audio cũ lệch kịch bản: thanh audio hiện nhãn `Audio cần tạo lại`; CD bấm `Tạo lại audio` (hệ thống đọc từng lượt bằng TTS theo giọng của đối tượng, ghép theo thứ tự lượt) hoặc tải file mới. Lưu câu khi audio chưa tạo lại thì hỏi xác nhận. **UI cần bổ sung.** | ☐ |
| FIX-042 | [CD-KH-070301](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-81278), [CD-KH-070302](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82177), [CD-KH-070303](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82881), [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037), [CD-KH-070305](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332868) | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.09` | Chưa có thiết kế | Thêm `Lựa chọn / đáp án`: Phần câu hỏi của bài nghe (lựa chọn, đáp án đúng) theo form soạn câu của BTVN; Figma chưa vẽ (**UI cần bổ sung**). | ☐ |
| FIX-043 | [CD-KH-070301](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-81278), [CD-KH-070302](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82177), [CD-KH-070303](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82881), [CD-KH-070304](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332037), [CD-KH-070305](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-332868) | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.23` | Chưa có thiết kế | Thêm `Chọn từ có sẵn`: Trên popup `Thêm từ khoá` có ô tìm từ trong Kiến thức (S1) của khoá học (Từ vựng, Hanzi / Kanji); chọn từ thì tự điền Phiên âm, Từ loại, Nghĩa, Chi tiết từ, Hán Việt, Ví dụ, CD sửa lại được. Không tìm thấy thì nhập mới như Figma. **UI cần bổ sung.** | ☐ |

## [Phụ trách lớp, Admin] Lịch Họp

Cụm `meeting-schedule` · MD: `docs/he-thong-ma/meeting-schedule.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-044 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.01` | Chưa có thiết kế | Thêm `Dòng phụ dưới tiêu đề`: `Thứ, dd.MM.yyyy · HH:mm · <nhãn>`; nhãn `Đã trôi qua` nếu thời điểm họp đã qua, `Sắp diễn ra` nếu chưa tới. Chỉ có ở Chi tiết cuộc họp. | ☐ |
| FIX-045 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.02` | Chưa có thiết kế | Thêm `Chủ đề`: Bắt buộc, tối đa 255 ký tự. | ☐ |
| FIX-046 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.03` | Chưa có thiết kế | Thêm `Thời gian`: Ngày (`dd.MM.yyyy`, date picker) và giờ (`HH:mm`, time picker), đều bắt buộc. Tạo mới mặc định ngày hôm nay, giờ trống. Cho phép chọn thời điểm quá khứ và trùng giờ với cuộc họp khác. | ☐ |
| FIX-047 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.04` | Chưa có thiết kế | Thêm `Trạng thái`: Dropdown `Mới tạo`, `Đang chờ`, `Đang tham gia`, `Hoàn thành`. Tạo mới mặc định `Mới tạo`. Không tự đổi theo thời gian. | ☐ |
| FIX-048 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.05` | Chưa có thiết kế | Thêm `Người tham gia`: Chip avatar + tên; nút `+` mở danh sách chọn nhiều người (tìm kiếm, mỗi dòng `Tên (Role)`, chỉ tài khoản đang hoạt động). Chọn được tài khoản **mọi role của ICS**, gồm cả Giáo viên, Học viên, Trợ giảng. Hover chip hiện `x` để bỏ. Không bắt buộc; người tạo không tự được thêm vào danh sách. | ☐ |
| FIX-049 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.06` | Chưa có thiết kế | Thêm `Ghi chú`: Không bắt buộc, tối đa 500 ký tự. | ☐ |
| FIX-050 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.07` | Chưa có thiết kế | Thêm `Link cuộc họp`: Không bắt buộc; phải là URL bắt đầu bằng `http://` hoặc `https://`. Ở chế độ chỉ xem hiển thị dạng link, bấm mở tab mới. | ☐ |
| FIX-051 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.08` | Chưa có thiết kế | Thêm `Huỷ`: Đóng popup, bỏ thay đổi chưa lưu. | ☐ |
| FIX-052 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.09` | Chưa có thiết kế | Thêm `Lưu`: Validate → lưu → đóng popup → cập nhật danh sách/lịch và badge sidebar → Toast. Chống bấm lặp. | ☐ |
| FIX-053 | [SP-LHP-010010](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=3857-80154) | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.10` | Chưa có thiết kế | Thêm `Xoá`: Chỉ người tạo, ở Chi tiết cuộc họp (UI cần bổ sung nút). Mở popup xác nhận `Xoá cuộc họp?` hiển thị chủ đề + ngày giờ; xác nhận mới xoá. | ☐ |

## Kỹ năng (S6) — Nghe / Đọc

Cụm `skill-s6` · MD: `docs/he-thong-ma/skill-s6.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-054 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.01` | Chưa có thiết kế | Thêm `Tất cả cụm + badge N cụm`: Tiêu đề panel và số cụm hiện có; chọn để xem mọi bài của tab (mặc định). | ☐ |
| FIX-055 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.02` | Chưa có thiết kế | Thêm `Số cụm`: Mặc định `0`. **Chỉ nhập được khi chưa có cụm**: CD nhập N thì hệ thống tạo N cụm rỗng tên `Chủ đề 1` … `Chủ đề N`. Chưa có cụm thì panel hiện `Chưa có cụm. Nhập Số cụm để tạo các cụm rỗng "Chủ đề 1 … N".`. Đã có cụm thì ô chỉ đọc, hiện số cụm hiện tại; thêm / bớt cụm bằng `Thêm cụm mới` và menu ⋮ của cụm. | ☐ |
| FIX-056 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.03` | Chưa có thiết kế | Thêm `Chia cụm bằng AI`: AI đề xuất chia các bài của tab vào cụm theo chủ đề nội dung; kết quả chờ duyệt, CD áp dụng hoặc bỏ, theo cùng quy tắc popup Chia cụm bằng AI của S1. | ☐ |
| FIX-057 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.04` | Chưa có thiết kế | Thêm `Dòng cụm`: `NN. <tên cụm>` + badge số bài của cụm (0 hiện xám); chọn để lọc bảng trái, tiêu đề bảng đổi thành tên cụm. Menu ⋮: `Đổi tên`, `Xoá cụm`. | ☐ |
| FIX-058 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.05` | Chưa có thiết kế | Thêm `Chưa phân cụm`: Badge cam = số bài chưa thuộc cụm nào; chọn để lọc. | ☐ |
| FIX-059 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.06` | Chưa có thiết kế | Thêm `Thêm cụm mới`: Thêm 1 cụm rỗng ở cuối, đặt tên ngay tại dòng. | ☐ |
| FIX-060 | [CD-KH-050110](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-84755), [CD-KH-070301](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-81278) | `A06` Drawer Chi tiết bài nghe · `A06.06` | Chưa có thiết kế | Thêm `Kịch bản · N lượt`: Danh sách lượt thoại theo thứ tự: nhãn người nói (`A`, `B`…), câu gốc, `Phiên âm ·`, `Dịch ·`, mốc `start – end` theo audio (`mm:ss.s`, **UI cần bổ sung**). Thêm / sửa / xoá / kéo thả lượt; lượt có giá trị AI chờ duyệt viền nét đứt cam với `✓ Duyệt` / `↺ Hoàn tác`. | ☐ |
| FIX-061 | [CD-KH-070302](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6163-82177), [CD-KH-050210](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6935-379016) | `A07` Drawer Chi tiết bài đọc | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-062 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.01` | Chưa có thiết kế | Thêm `Mở chi tiết`: Mở drawer. | ☐ |
| FIX-063 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.02` | Chưa có thiết kế | Thêm `Thêm vào cụm / Gỡ khỏi cụm`: Mở popup `Cụm của N bài` (N bài đang chọn: 1 khi mở từ dòng). | ☐ |
| FIX-064 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.03` | Chưa có thiết kế | Thêm `Transcript AI (Nghe) / Tạo câu hỏi bằng AI (Đọc)`: Chạy AI cho riêng bài đó (xem khu vực AI). | ☐ |
| FIX-065 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.04` | Chưa có thiết kế | Thêm `Gỡ khỏi khoá`: Mở popup Gỡ khỏi khoá. | ☐ |
| FIX-066 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.05` | Chưa có thiết kế | Thêm `Popup — Tìm cụm`: Tìm theo tên cụm của tab. | ☐ |
| FIX-067 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.06` | Chưa có thiết kế | Thêm `Popup — Danh sách cụm`: **Radio** từng cụm + số bài của cụm, thêm `Chưa phân cụm` (= gỡ khỏi cụm). Mọi bài đang chọn cùng cụm thì chọn sẵn cụm đó. | ☐ |
| FIX-068 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.07` | Chưa có thiết kế | Thêm `Popup — Huỷ / Lưu`: Lưu: các bài chuyển vào cụm đã chọn (rời cụm cũ); chọn `Chưa phân cụm` thì gỡ khỏi cụm. Bài đang dùng ở bài học mà rời cụm → cảnh báo liệt kê bài học, xác nhận thì tự gỡ khỏi bài học. | ☐ |
| FIX-069 | [CD-KH-050150](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122539) | `A11` Popup Thêm bài từ thư viện | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-070 | [CD-KH-050160](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-122949) | `A12` Popup Tạo bài mới | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
| FIX-071 | [CD-KH-050155](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-120233) | `A13` Popup Gỡ khỏi khoá · `A13.01` | Chưa có thiết kế | Thêm `Tiêu đề`: `Gỡ N bài nghe khỏi khoá học?` | ☐ |
| FIX-072 | [CD-KH-050155](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-120233) | `A13` Popup Gỡ khỏi khoá · `A13.02` | Chưa có thiết kế | Thêm `Nội dung`: `Bài nghe <tên> sẽ bị gỡ khỏi Kỹ năng (S6) của khoá, khỏi các cụm và khỏi các bài học đang dùng:` + **danh sách bài học đang dùng** (cảnh báo, **UI cần bổ sung** trên Figma `CD-KH-050155`); nhiều bài thì liệt kê tên từng bài. Không dùng ở bài học nào thì bỏ phần danh sách. | ☐ |
| FIX-073 | [CD-KH-050155](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-120233) | `A13` Popup Gỡ khỏi khoá · `A13.03` | Chưa có thiết kế | Thêm `Ghi chú`: `Bản ghi trong Thư viện dữ liệu vẫn còn; khoá khác đang dùng không bị ảnh hưởng.` | ☐ |
| FIX-074 | [CD-KH-050155](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=6646-120233) | `A13` Popup Gỡ khỏi khoá · `A13.04` | Chưa có thiết kế | Thêm `Nút`: `Huỷ`; `Xác nhận gỡ` (đỏ). | ☐ |
| FIX-075 | chưa gắn màn | `A15` Import / Export Excel · `A15.01` | Chưa có thiết kế | Thêm `listening_lesson (bắt buộc)`: Mỗi dòng = 1 bài nghe \| `id` → mã dòng trong file (chỉ để nối sheet, không lưu làm mã bài); `title` → `Tên bài`; `mean` → `Mô tả`. Bỏ qua `lesson_id`. | ☐ |
| FIX-076 | chưa gắn màn | `A15` Import / Export Excel · `A15.02` | Chưa có thiết kế | Thêm `listening`: Kịch bản, mỗi dòng = 1 lượt thoại, theo thứ tự dòng \| `listening_lesson_id` → bài nghe; `character` → người nói (`A`, `B`…); `sentence` → câu gốc; `phonetic` → `Phiên âm`; `furigana` → phiên âm có chú thích (tiếng Nhật); `mean` → `Dịch`; `start` / `end` → mốc thời gian. Bỏ qua `id`, `_start`, `_end`. | ☐ |
| FIX-077 | chưa gắn màn | `A15` Import / Export Excel · `A15.03` | Chưa có thiết kế | Thêm `listening_question`: Câu hỏi của bài nghe \| `listening_lesson_id` → bài nghe; `question`, `a`–`d`, `answer` (số thứ tự đáp án đúng 1–4), `explain` → câu hỏi trắc nghiệm của bài (lưu vào bộ câu hỏi Listening của Thư viện bài tập). | ☐ |
| FIX-078 | chưa gắn màn | `A15` Import / Export Excel · `A15.04` | Chưa có thiết kế | Thêm `reading_lesson (bắt buộc)`: Mỗi dòng = 1 bài đọc \| `id` → mã dòng trong file; `title` → `Tên bài`; `mean` → `Mô tả`; `source` → nguồn (ghi chú). Bỏ qua `lesson_id`. | ☐ |
| FIX-079 | chưa gắn màn | `A15` Import / Export Excel · `A15.05` | Chưa có thiết kế | Thêm `reading`: Đoạn văn, mỗi dòng = 1 câu, theo thứ tự dòng \| `reading_lesson_id` → bài đọc; `sentence` → câu của đoạn văn; `phonetic` → `Phiên âm`; `furigana` → phiên âm có chú thích; `mean` → `Dịch`. Bỏ qua `id`, `note`. | ☐ |
| FIX-080 | chưa gắn màn | `A15` Import / Export Excel · `A15.06` | Chưa có thiết kế | Thêm `reading_question`: Câu hỏi của bài đọc \| `reading_lesson_id` → bài đọc; `question`, `image`, `question_type`, `a`–`d`, `answer`, `explain` → câu hỏi (bộ câu hỏi Reading của Thư viện bài tập). | ☐ |
| FIX-081 | chưa gắn màn | `A15` Import / Export Excel · `A15.07` | Chưa có thiết kế | Thêm `reading_vocabulary`: Từ vựng liên quan của bài đọc \| **Bắt buộc có cột `reading_lesson_id`** → bài đọc; `word`, `phonetic`, `type`, `furigana`, `mean`, `example`, `example_phonetic`, `example_mean` → từ vựng. Từ trùng với Từ vựng S1 của khoá thì nối vào từ đó; chưa có thì tạo từ mới trong S1 của khoá rồi nối. | ☐ |
| FIX-082 | chưa gắn màn | `A15` Import / Export Excel · `A15.08` | Chưa có thiết kế | Thêm `Import — sheet`: Thiếu sheet bắt buộc (`listening_lesson` / `reading_lesson`) → báo `Không tìm thấy sheet listening_lesson`, không import. Sheet phụ trống / không có thì bài thiếu phần đó (tính thiếu thông tin), vẫn import. | ☐ |
| FIX-083 | chưa gắn màn | `A15` Import / Export Excel · `A15.09` | Chưa có thiết kế | Thêm `Import — dòng bắt buộc`: Sheet bài gốc: `title`. Sheet phụ: cột nối `listening_lesson_id` / `reading_lesson_id` phải trùng một `id` của sheet bài gốc trong cùng file. Nghe cho phép trống file âm thanh (bài tính thiếu thông tin). | ☐ |
| FIX-084 | chưa gắn màn | `A15` Import / Export Excel · `A15.10` | Chưa có thiết kế | Thêm `Import — lỗi dữ liệu`: Có dòng lỗi → **chặn cả file**, không thêm bài nào; danh sách lỗi theo **sheet + số dòng** (vd `reading_vocabulary dòng 12: thiếu reading_lesson_id`, `listening dòng 40: listening_lesson_id 999 không có trong listening_lesson`). | ☐ |
| FIX-085 | chưa gắn màn | `A15` Import / Export Excel · `A15.11` | Chưa có thiết kế | Thêm `Import — thành công`: Mỗi dòng sheet bài gốc tạo 1 bản ghi thư viện mới `Nháp` (kèm kịch bản / đoạn văn, câu hỏi, từ vựng liên quan), gắn vào khoá theo thứ tự dòng, vào cụm đang chọn; Toast `Thành Công` `Đã import N bài nghe.`; gợi ý Soát lỗi AI. Không tự dò trùng bài. | ☐ |
| FIX-086 | chưa gắn màn | `A15` Import / Export Excel · `A15.12` | Chưa có thiết kế | Thêm `Export`: Toàn bộ bài của tab trong khoá (không theo bộ lọc); tên file `<Khoá học>_<Kỹ năng>.xlsx`; cùng các sheet và cột như bảng trên (Nghe 3 sheet, Đọc 4 sheet, `reading_vocabulary` có `reading_lesson_id`), `id` đánh lại theo thứ tự trong file; thêm cột `cluster` (tên các cụm, cách nhau `;`) ở sheet bài gốc để tham khảo. Không có cột bài học. | ☐ |
| FIX-087 | chưa gắn màn | `A20` Thêm / gỡ bài kỹ năng trong Chi tiết bài học · `A20.01` | Chưa có thiết kế | Thêm `Popup + Thêm`: Tiêu đề `Thêm kỹ năng vào bài học` + tên bài; 1 màn 3 cột: Loại (`Nghe` / `Đọc` / `Viết` / `Nói`, luôn hiện đủ 4, loại chưa có dữ liệu hiện trống) / Cụm / Bài (checkbox, `Chọn tất cả`, ô tìm). Giữ lựa chọn khi đổi cụm / loại. Bài đã có trong bài mờ, tick sẵn; bài **thiếu thông tin** mờ, không chọn được. `Huỷ`, `Thêm ({n})`. | ☐ |
| FIX-088 | chưa gắn màn | `A20` Thêm / gỡ bài kỹ năng trong Chi tiết bài học · `A20.02` | Chưa có thiết kế | Thêm `Thêm cả cụm`: Chọn cụm → `Chọn tất cả`: thêm **một lần** mọi bài đủ thông tin hiện có của cụm theo `Thứ tự trong cụm`; bài thêm sau vào cụm **không** tự vào bài học. | ☐ |
| FIX-089 | chưa gắn màn | `A20` Thêm / gỡ bài kỹ năng trong Chi tiết bài học · `A20.03` | Chưa có thiết kế | Thêm `Danh sách trong bài`: Mỗi bài có `×` gỡ khỏi bài học này (bài vẫn ở S6 và ở cụm), không có nút sửa. | ☐ |

## Học Kỳ - Tab Kiểm tra

Cụm `test` · MD: `docs/he-thong-ma/test.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-090 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A01` Danh sách bài kiểm tra | Figma khác requirement | Khác Figma CD-KH-030300: card chưa có menu `⋮` để xoá bài. | ☐ |
| FIX-091 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A01` Danh sách bài kiểm tra · `A01.06` | Chưa có thiết kế | Thêm `Xoá bài`: Menu `⋮` trên card có `Xoá` (popup xác nhận `Xoá bài kiểm tra "<tên>"? Bộ câu hỏi của bài cũng sẽ bị xoá.`, nút `Huỷ` / `Xoá`); xoá mềm (**UI cần bổ sung**). | ☐ |
| FIX-092 | [CD-KH-030310](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=1496-16304) | `A02` Popup bài kiểm tra — Tab Thông tin | Figma khác requirement | Khác Figma CD-KH-030310: ô `Số câu hỏi` đang vẽ như ô nhập, requirement là chỉ đọc; ô `Tổng điểm` trên Figma cần bỏ. Dòng Lưu ý ghi `Số câu hỏi và tổng điểm có thể được cập nhật`. | ☐ |
| FIX-093 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi | Figma khác requirement | Khác Figma: bộ câu hỏi đang vẽ thành màn riêng `CD-KH-030340` (mở từ `>`); requirement đặt trong tab `Bộ Câu Hỏi` của popup (**UI cần bổ sung**). | ☐ |
| FIX-094 | [CD-KH-030300](https://www.figma.com/design/rRVs5HX0kIHffbS0V40djG/?node-id=497-18242) | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |
