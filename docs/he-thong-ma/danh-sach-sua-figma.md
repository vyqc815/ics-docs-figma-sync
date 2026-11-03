# Danh sách sửa Figma theo requirement

> Requirement của QC là chuẩn. Mỗi dòng là một việc design làm trên Figma. Sinh từ registry (`scripts/he-thong-ma/figma_fixes.py`), không ghi gì lên Figma.

Trước khi sửa, design xem requirement còn đúng không: nhiều ghi chú "Khác Figma" và "UI cần bổ sung" viết từ bản Figma cũ. Ghi chú đã cũ thì báo QC xoá, không sửa Figma. Dòng *Chưa có thiết kế* là chỗ tool chưa thấy trên màn đã sync; nếu nó nằm trong popup chưa sync thì có thể đã có.

| Loại | Số việc |
|---|---:|
| Figma khác requirement | 17 |
| Chưa có thiết kế | 247 |
| Khu vực cần bổ sung | 1 |

## Bài tập về nhà và Kiểm tra (CD-KH-06xx)

Cụm `bai-tap-ve-nha` · MD: `docs/he-thong-ma/bai-tap-ve-nha.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-001 | chưa gắn màn | `A01` Khung màn, cây kỳ và bài | Figma khác requirement | Khác Figma CD-KH-060200: tab Kiểm tra trên Figma là danh sách phẳng; requirement là cây theo kỳ giống BTVN. | ☐ |
| FIX-002 | chưa gắn màn | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan | Figma khác requirement | Khác Figma CD-KH-030340: còn thẻ `Tổng điểm` (đã bỏ theo thang 10, CD-KH-060100 / 060200 đã sửa); nút tạo bằng AI ghi `Generate`. | ☐ |
| FIX-003 | chưa gắn màn | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan · `A02.01` | Chưa có thiết kế | Thêm `Tiêu đề`: `BTVN · <tên bài>` hoặc `<tên bài kiểm tra>`; tag `N câu hỏi`; tag cảnh báo `N thiếu đáp án` khi có câu chưa có đáp án (không áp dụng câu Giáo viên chấm). | ☐ |
| FIX-004 | chưa gắn màn | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan · `A02.02` | Chưa có thiết kế | Thêm `Import Excel / Export Excel`: Xem khu vực Import / Export Excel. | ☐ |
| FIX-005 | chưa gắn màn | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan · `A02.03` | Chưa có thiết kế | Thêm `Preview mobile`: Xem bộ câu hỏi như học viên thấy trên app (**UI cần bổ sung**). | ☐ |
| FIX-006 | chưa gắn màn | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan · `A02.04` | Chưa có thiết kế | Thêm `+ Thêm câu hỏi`: Mở popup Chọn loại câu. | ☐ |
| FIX-007 | chưa gắn màn | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan · `A02.05` | Chưa có thiết kế | Thêm `Tạo câu hỏi bằng AI`: Mở popup Generate bài tập bằng AI. | ☐ |
| FIX-008 | chưa gắn màn | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan · `A02.06` | Chưa có thiết kế | Thêm `Soát lỗi bằng AI`: Xem khu vực Soát lỗi bằng AI. | ☐ |
| FIX-009 | chưa gắn màn | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan · `A02.07` | Chưa có thiết kế | Thêm `Thẻ Tổng số câu`: Số câu cha của bộ (câu hỏi con tính trong câu cha). | ☐ |
| FIX-010 | chưa gắn màn | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan · `A02.08` | Chưa có thiết kế | Thêm `Thẻ Thời gian làm bài`: Chỉ bài kiểm tra: thời gian làm bài (phút) lấy từ cấu hình bài kiểm tra ở Học kỳ. | ☐ |
| FIX-011 | chưa gắn màn | `A02` Bộ câu hỏi: thanh công cụ và thẻ tổng quan · `A02.09` | Chưa có thiết kế | Thêm `Thẻ Cơ cấu theo dạng câu`: Số câu theo từng loại câu có trong bộ (vd `Trắc nghiệm 3 · Sắp xếp 1 · Câu hỏi con 1`). | ☐ |
| FIX-012 | chưa gắn màn | `A03` Bảng câu hỏi | Figma khác requirement | Khác Figma CD-KH-060100 / 060200: bảng chưa có cột `Kiến thức / Kỹ năng`, lọc `Kiến thức / Kỹ năng` (đã có ở CD-KH-030340) và còn lọc `Trạng thái`. | ☐ |
| FIX-013 | chưa gắn màn | `A06` Popup Soạn câu hỏi | Figma khác requirement | Khác Figma CD-KH-060120: popup chưa có field `Số câu` và `Kiến thức / Kỹ năng`; Figma mới có phần đáp án của Trắc nghiệm. | ☐ |
| FIX-014 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.01` | Chưa có thiết kế | Thêm `Tiêu đề`: `Soạn câu hỏi · <loại câu>`; dòng phụ `BTVN · <tên bài> · Câu <số câu>` hoặc `<tên bài kiểm tra> · Câu <số câu>`. | ☐ |
| FIX-015 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.02` | Chưa có thiết kế | Thêm `Số câu `: Bắt buộc; số thứ tự câu trong bộ, số nguyên ≥ 1. Thêm mới mặc định là câu tiếp theo cuối bộ; nhập số đã có thì chèn vào vị trí đó, các câu sau dồn xuống. | ☐ |
| FIX-016 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.03` | Chưa có thiết kế | Thêm `Loại câu `: Bắt buộc; lấy từ popup Chọn loại câu, khoá không sửa (icon khoá). Muốn đổi loại thì tạo câu mới. | ☐ |
| FIX-017 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.04` | Chưa có thiết kế | Thêm `Kiến thức / Kỹ năng `: Bắt buộc; chọn **một** cụm kiến thức của khoá học (vd `Cụm 01. Chào hỏi`) **hoặc** một kỹ năng `Nghe`, `Đọc`, `Viết`, `Nói`. | ☐ |
| FIX-018 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.05` | Chưa có thiết kế | Thêm `Hướng dẫn`: Không bắt buộc; lời dặn hiển thị trên câu (vd `Chọn nghĩa đúng của từ`). | ☐ |
| FIX-019 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.06` | Chưa có thiết kế | Thêm `Nội dung câu hỏi `: Bắt buộc; nhiều dòng. | ☐ |
| FIX-020 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.07` | Chưa có thiết kế | Thêm `Hình ảnh / âm thanh`: Không bắt buộc; kéo thả hoặc chọn file, mỗi file tối đa 25MB. | ☐ |
| FIX-021 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.08` | Chưa có thiết kế | Thêm `Đáp án `: Theo loại câu (bảng dưới). | ☐ |
| FIX-022 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.09` | Chưa có thiết kế | Thêm `Giải thích đáp án`: Không bắt buộc; hiển thị cho học viên sau khi nộp bài. | ☐ |
| FIX-023 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.10` | Chưa có thiết kế | Thêm `Huỷ / Lưu câu hỏi`: `Huỷ` đóng, không lưu. `Lưu câu hỏi` kiểm tra field bắt buộc, lưu và đóng popup. | ☐ |
| FIX-024 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.11` | Chưa có thiết kế | Thêm `Trắc nghiệm`: 4 lựa chọn `A`–`D`, chọn đúng một đáp án đúng. | ☐ |
| FIX-025 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.12` | Chưa có thiết kế | Thêm `Sắp xếp`: Các mảnh theo thứ tự đúng; app xáo trộn khi hiển thị (**UI cần bổ sung**). | ☐ |
| FIX-026 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.13` | Chưa có thiết kế | Thêm `Nối từ`: Danh sách cặp cột trái – cột phải (**UI cần bổ sung**). | ☐ |
| FIX-027 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.14` | Chưa có thiết kế | Thêm `Nói`: Câu mẫu để app nhận diện giọng nói (**UI cần bổ sung**). | ☐ |
| FIX-028 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.15` | Chưa có thiết kế | Thêm `Đọc, Viết, Hình ảnh`: Không có đáp án; giáo viên chấm. Có thể nhập bài mẫu tham khảo (**UI cần bổ sung**). | ☐ |
| FIX-029 | chưa gắn màn | `A06` Popup Soạn câu hỏi · `A06.16` | Chưa có thiết kế | Thêm `Câu hỏi con`: Danh sách câu con; mỗi câu con chọn loại câu riêng và soạn như câu thường, không có Số câu riêng (đánh `N.1`, `N.2`…) (**UI cần bổ sung**). | ☐ |
| FIX-030 | chưa gắn màn | `A07` Import / Export Excel | Figma khác requirement | Khác Figma: nút Import / Export mới có ở CD-KH-030340; chưa có popup kết quả import. | ☐ |
| FIX-031 | chưa gắn màn | `A07` Import / Export Excel · `A07.01` | Chưa có thiết kế | Thêm `Cột file`: **Giống cột bảng câu hỏi trên UI**: `STT`, `Câu hỏi`, `Hướng dẫn`, `Loại câu`, `Đáp án đúng`, `Kiến thức / Kỹ năng`, `Điểm`. Câu hỏi con nằm ở các dòng ngay dưới câu cha, `STT` dạng `7.1`, `7.2`. | ☐ |
| FIX-032 | chưa gắn màn | `A07` Import / Export Excel · `A07.02` | Chưa có thiết kế | Thêm `Export`: Xuất toàn bộ câu của bài (không theo bộ lọc đang chọn); tên file `<Khoá học>_<Bài>.xlsx`. | ☐ |
| FIX-033 | chưa gắn màn | `A07` Import / Export Excel · `A07.03` | Chưa có thiết kế | Thêm `Import — dòng bắt buộc`: Mỗi dòng phải có `STT`, `Câu hỏi`, `Loại câu` (một trong 8 loại), `Kiến thức / Kỹ năng` (cụm của khoá hoặc Nghe, Đọc, Viết, Nói). Không có cột `Điểm`. | ☐ |
| FIX-034 | chưa gắn màn | `A07` Import / Export Excel · `A07.04` | Chưa có thiết kế | Thêm `Import — lỗi dữ liệu`: Có dòng thiếu field bắt buộc hoặc sai giá trị → **chặn cả file**, không thêm câu nào, hiển thị danh sách lỗi theo số dòng (vd `Dòng 5: thiếu Loại câu`). | ☐ |
| FIX-035 | chưa gắn màn | `A07` Import / Export Excel · `A07.05` | Chưa có thiết kế | Thêm `Import — câu trùng`: Không tự dò hay bỏ câu trùng; mọi dòng hợp lệ đều được thêm. Câu trùng do **Soát lỗi bằng AI** phát hiện. | ☐ |
| FIX-036 | chưa gắn màn | `A07` Import / Export Excel · `A07.06` | Chưa có thiết kế | Thêm `Import — thành công`: Thêm vào cuối bộ theo thứ tự `STT` trong file; Toast `Thành Công` `Đã import N câu hỏi.`; gợi ý chạy Soát lỗi bằng AI. | ☐ |
| FIX-037 | chưa gắn màn | `A08` Soát lỗi bằng AI · `A08.01` | Chưa có thiết kế | Thêm `Phạm vi`: Toàn bộ câu của bài đang chọn, kể cả câu hỏi con. | ☐ |
| FIX-038 | chưa gắn màn | `A08` Soát lỗi bằng AI · `A08.02` | Chưa có thiết kế | Thêm `Vấn đề phát hiện`: Câu **trùng** (cùng loại câu, nội dung giống hoặc gần giống), thiếu đáp án, đáp án không khớp nội dung, lỗi chính tả / phiên âm, câu không khớp Kiến thức / Kỹ năng đã gắn. | ☐ |
| FIX-039 | chưa gắn màn | `A08` Soát lỗi bằng AI · `A08.03` | Chưa có thiết kế | Thêm `Kết quả`: Danh sách vấn đề theo số câu, bấm một vấn đề cuộn tới câu tương ứng. Không có vấn đề thì báo `Không tìm thấy lỗi.` | ☐ |
| FIX-040 | chưa gắn màn | `A08` Soát lỗi bằng AI · `A08.04` | Chưa có thiết kế | Thêm `Xử lý`: AI **không tự sửa hay xoá**; CD sửa hoặc xoá câu bằng menu `⋮`. | ☐ |
| FIX-041 | chưa gắn màn | `A09` Generate bài tập bằng AI — Popup nhập yêu cầu | Figma khác requirement | Khác Figma CD-KH-030341 / 030342: dòng phụ dưới `Số câu` ghi `Tối đa 50 câu mỗi lần`; requirement không giới hạn. | ☐ |
| FIX-042 | chưa gắn màn | `A12` Generate — Sau khi tạo | Figma khác requirement | Khác Figma CD-KH-030347: tag câu mới ghi `Mới`; requirement dùng tag `AI`. | ☐ |

## Chi tiết lớp học — Tab Hóa đơn

Cụm `class-detail-invoices-requirements` · MD: `docs/he-thong-ma/class-detail-invoices-requirements.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-043 | chưa gắn màn | `A01` Tab Hóa đơn — Bảng Hóa đơn đã dùng · `A01.01` | Chưa có thiết kế | Thêm `Tab`: Nhãn `Hóa đơn`; làm nổi bật khi đang chọn. | ☐ |
| FIX-044 | chưa gắn màn | `A01` Tab Hóa đơn — Bảng Hóa đơn đã dùng · `A01.02` | Chưa có thiết kế | Thêm `Tiêu đề`: `Hóa đơn đã dùng`. | ☐ |
| FIX-045 | chưa gắn màn | `A01` Tab Hóa đơn — Bảng Hóa đơn đã dùng · `A01.03` | Chưa có thiết kế | Thêm `Tên hóa đơn`: Hiển thị tên/mô tả hóa đơn lấy từ dữ liệu hóa đơn; cho xuống dòng để đọc đầy đủ như ảnh. | ☐ |
| FIX-046 | chưa gắn màn | `A01` Tab Hóa đơn — Bảng Hóa đơn đã dùng · `A01.04` | Chưa có thiết kế | Thêm `Tên học viên`: Cột riêng hiển thị tên học viên liên kết với hóa đơn đã dùng trong lớp; lấy theo quan hệ dữ liệu và student_id, không tách tên từ chuỗi Tên hóa đơn. | ☐ |
| FIX-047 | chưa gắn màn | `A01` Tab Hóa đơn — Bảng Hóa đơn đã dùng · `A01.05` | Chưa có thiết kế | Thêm `Ngày tạo hóa đơn`: Cột chỉ xem, hiển thị ngày tạo gốc từ Cơm Gạo được đồng bộ sang ICS; không phải ngày đồng bộ hay ngày ghi nhận học phí. Không có control lọc ngày. | ☐ |
| FIX-048 | chưa gắn màn | `A01` Tab Hóa đơn — Bảng Hóa đơn đã dùng · `A01.06` | Chưa có thiết kế | Thêm `Giá trị`: Tổng giá trị của hóa đơn, không phải số dư còn lại hoặc học phí của riêng lớp này. | ☐ |
| FIX-049 | chưa gắn màn | `A01` Tab Hóa đơn — Bảng Hóa đơn đã dùng · `A01.07` | Chưa có thiết kế | Thêm `Giá trị dùng trong lớp`: Tổng học phí được ghi nhận từ hóa đơn đó vào **lớp đang xem**. | ☐ |
| FIX-050 | chưa gắn màn | `A01` Tab Hóa đơn — Bảng Hóa đơn đã dùng · `A01.08` | Chưa có thiết kế | Thêm `Mỗi dòng`: Đại diện cho một hóa đơn, nhận diện bằng invoice_id. Một hóa đơn dùng nhiều lần trong cùng lớp vẫn chỉ có một dòng. | ☐ |

## Chi tiết lớp học — Menu Tổng quan

Cụm `class-detail-overview-requirements` · MD: `docs/he-thong-ma/class-detail-overview-requirements.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-051 | chưa gắn màn | `A08` Đánh giá tổng và bài học gần đây | Figma khác requirement | Khác Figma ADM-LOP-020100: khối Bài học gần đây ở vùng trái đang vẽ 4 icon, requirement là 6 bài. | ☐ |
| FIX-052 | chưa gắn màn | `A09` Bảng bài học của học viên và điểm danh | Figma khác requirement | Khác Figma ADM-LOP-020100: bảng bài chưa có tag thời điểm mở bài phía trên tên bài. | ☐ |

## [Giáo viên] Chi tiết lớp — Thông tin

Cụm `class-information-requirements` · MD: `docs/he-thong-ma/class-information-requirements.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-053 | chưa gắn màn | `A01` Tab Thông tin | Figma khác requirement | Mọi field hiển thị cùng một kiểu ô xám chỉ đọc như `Mã lớp`, `Ghi chú`, `Mô tả`. Khác Figma GV-LOP-110100: Figma còn vẽ mũi tên dropdown ở Khóa học, Loại lớp, Trạng thái và icon lịch ở Ngày bắt đầu/kết thúc; cần sửa Figma bỏ các control này. | ☐ |

## [Giáo viên] Chi tiết lớp — Tổng quan

Cụm `class-overview-requirements` · MD: `docs/he-thong-ma/class-overview-requirements.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-054 | chưa gắn màn | `A01` Tổng quan — Khung màn và phân quyền | Figma khác requirement | Khác Figma GV-LOP-020000: khối `Bài Học Gần Đây` ở vùng trái đang vẽ 4 icon, requirement là 6 bài; bảng bài học chưa có tag thời điểm mở bài phía trên tên bài. | ☐ |

## [Giáo viên] Chi tiết lớp — Giảng dạy

Cụm `class-teaching-requirements` · MD: `docs/he-thong-ma/class-teaching-requirements.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-055 | chưa gắn màn | `A12` Bài tập và Kiểm tra — Khung menu | Figma khác requirement | Khác Figma GV-LOP-040100: Figma chưa có nút điều hướng chấm bài trên card; requirement bổ sung nút này cho `Giáo viên phụ trách chính`. | ☐ |
| FIX-056 | chưa gắn màn | `A14` Tab, badge và card bài | Figma khác requirement | Khác Figma GV-LOP-040200: Figma chưa có frame card `Chưa giao` đang chọn (xem trước đề) và nút `Giao bài`; hai thành phần này đặc tả theo ICS cũ. | ☐ |
| FIX-057 | chưa gắn màn | `A26` Tự học — Danh sách bài và bảng thời gian | Figma khác requirement | Khác Figma GV-LOP-050100: Figma chỉ có trạng thái chưa có khóa tự học; trạng thái có dữ liệu theo UI của requirement Admin, bỏ các nút thêm. | ☐ |

## Quản lý khoá học

Cụm `course-management` · MD: `docs/he-thong-ma/course-management.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-058 | chưa gắn màn | `A04` Trang 4: Popup Nhân bản khoá học · `A04.01` | Chưa có thiết kế | Thêm `Tiêu đề`: `Nhân bản khoá học` | ☐ |
| FIX-059 | chưa gắn màn | `A04` Trang 4: Popup Nhân bản khoá học · `A04.02` | Chưa có thiết kế | Thêm `Nội dung`: `Tạo bản sao của khoá học "<Tên khoá học>"? Bản sao ở trạng thái Nháp, sao chép toàn bộ Tổng quan, Lộ trình, Kiến thức, Học kỳ, Bài học, Bài kiểm tra, Bài tập về nhà, Quản lý, Tài liệu. Lớp học và dữ liệu học viên không được sao chép.` | ☐ |
| FIX-060 | chưa gắn màn | `A04` Trang 4: Popup Nhân bản khoá học · `A04.03` | Chưa có thiết kế | Thêm `Nút`: `Huỷ` — `Nhân bản` (disable + loading trong lúc BE xử lý để tránh gửi lặp) | ☐ |
| FIX-061 | chưa gắn màn | `A04` Trang 4: Popup Nhân bản khoá học · `A04.04` | Chưa có thiết kế | Thêm `Toast thành công`: `Thành Công` — `Đã nhân bản khoá học "<Tên khoá học> (Bản sao)".` | ☐ |
| FIX-062 | chưa gắn màn | `A04` Trang 4: Popup Nhân bản khoá học · `A04.05` | Chưa có thiết kế | Thêm `Toast lỗi`: `Có Lỗi Xảy Ra` — nội dung BE trả về; không tạo bản sao dở dang (EX10). | ☐ |

## Học Kỳ

Cụm `information` · MD: `docs/he-thong-ma/information.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-063 | chưa gắn màn | `A05` Popup Nhân bản học kỳ · `A05.01` | Chưa có thiết kế | Thêm `Tiêu đề`: `Nhân bản học kỳ` | ☐ |
| FIX-064 | chưa gắn màn | `A05` Popup Nhân bản học kỳ · `A05.02` | Chưa có thiết kế | Thêm `Nội dung`: `Tạo bản sao của học kỳ "[Code] Tên - Tên học kỳ"? Bản sao ở trạng thái Nháp, sao chép toàn bộ Thông tin, Tổng ôn, Bài học, Bài tập về nhà, Bài kiểm tra và bộ câu hỏi.` | ☐ |
| FIX-065 | chưa gắn màn | `A05` Popup Nhân bản học kỳ · `A05.03` | Chưa có thiết kế | Thêm `Nút`: `Huỷ` — `Nhân bản` (disable + loading trong lúc BE xử lý) | ☐ |
| FIX-066 | chưa gắn màn | `A05` Popup Nhân bản học kỳ · `A05.04` | Chưa có thiết kế | Thêm `Toast`: Thành công: `Đã nhân bản học kỳ.`; lỗi: `Có Lỗi Xảy Ra` với nội dung BE trả về (EX10). | ☐ |

## Kiến thức (S1)

Cụm `knowledge-s1` · MD: `docs/he-thong-ma/knowledge-s1.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-067 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.01` | Chưa có thiết kế | Thêm `Checkbox`: Chọn dòng để thao tác hàng loạt; checkbox ở header chọn / bỏ chọn các dòng của trang. | ☐ |
| FIX-068 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.02` | Chưa có thiết kế | Thêm `STT + tay nắm kéo thả`: STT theo thứ tự hiển thị; tay nắm chỉ hiện khi đang xem 1 cụm và Sắp xếp = `Thứ tự trong cụm`. | ☐ |
| FIX-069 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.03` | Chưa có thiết kế | Thêm `Cột field`: **Đủ mọi field** của loại theo bảng Field (Phụ lục A), kể cả Nâng cao, Audio, Ví dụ (hiện ví dụ đầu + `+N`), field dài cắt `…` có tooltip; bảng **cuộn ngang**, ghim cố định checkbox, STT và cột field chính bên trái, cột Cụm và ⋮ bên phải (**UI cần cập nhật**, Figma chỉ vẽ field chính). Cột field chính: Từ vựng: Từ vựng · Ngữ pháp: Tên điểm ngữ pháp · Mẫu câu: Câu · Hán tự / Kanji | ☐ |
| FIX-070 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.04` | Chưa có thiết kế | Thêm `Cụm`: Nhãn cụm duy nhất của mục (vd `01. Gia đình`); không thuộc cụm nào hiện `Chưa phân cụm`. Bỏ nhãn `+N` trên Figma (`01-tu-vung.png`, **UI cần cập nhật**). Bấm nhãn mở popup Thêm vào cụm / Gỡ khỏi cụm của mục đó. | ☐ |
| FIX-071 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.05` | Chưa có thiết kế | Thêm `⋮`: Menu thao tác dòng (xem khu vực Menu thao tác dòng). | ☐ |
| FIX-072 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.06` | Chưa có thiết kế | Thêm `Tìm kiếm`: Tìm theo các field chính của loại (Từ vựng: chữ, phiên âm, nghĩa; Ngữ pháp: tên, ý nghĩa; Hán tự: chữ, phiên âm, Hán Việt; Kanji: chữ, âm On / Kun, nghĩa; Phát âm: âm, thanh mẫu, vận mẫu; Bảng chữ Nhật: hiragana, katakana, romaji; Bảng chữ Hàn: chữ, tên gọi, phiên âm). | ☐ |
| FIX-073 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.07` | Chưa có thiết kế | Thêm `Sắp xếp`: `Thứ tự thêm` (mặc định), `A–Z`, `Mới cập nhật`, `Thứ tự trong cụm` (chỉ khi đang xem 1 cụm). | ☐ |
| FIX-074 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.08` | Chưa có thiết kế | Thêm `Trạng thái`: Chọn 1: `Tất cả`, `Đủ thông tin`, `Thiếu thông tin`, `AI nghi sai`. | ☐ |
| FIX-075 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.09` | Chưa có thiết kế | Thêm `Nâng cao`: Chọn 1: `Tất cả` (mặc định), `Có`, `Không` theo field Nâng cao của mục (**UI cần bổ sung**). | ☐ |
| FIX-076 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.10` | Chưa có thiết kế | Thêm `Phân trang`: `Hiển thị a–b trong N …` và Trước / số trang / Sau; theo UI mỗi trang 8 dòng. | ☐ |
| FIX-077 | chưa gắn màn | `A03` Bảng danh sách, tìm kiếm, sắp xếp và lọc · `A03.11` | Chưa có thiết kế | Thêm `Nhập nhanh`: Dòng cuối bảng (xem khu vực Nhập nhanh). | ☐ |
| FIX-078 | chưa gắn màn | `A11` Panel Cụm và Số cụm · `A11.01` | Chưa có thiết kế | Thêm `Tất cả cụm + badge N cụm`: Tiêu đề panel và số cụm hiện có. | ☐ |
| FIX-079 | chưa gắn màn | `A11` Panel Cụm và Số cụm · `A11.02` | Chưa có thiết kế | Thêm `Số cụm`: **Chỉ đọc**, = tổng `Số buổi` của các dòng Nội dung buổi học có Loại này ở Tổng quan (S2); kèm ghi chú `Theo Tổng quan (S2) · N buổi`. Hệ thống tự tạo đủ cụm rỗng tên `Chủ đề 1` … `Chủ đề N` theo S2; CD đổi tên, chia mục và liên kết bài học tại đây. Loại chưa có buổi ở S2 thì panel hiện `Chưa có cụm. Nhập Số buổi cho loại <X> ở Tổng quan (S2) để tạo cụm.` (**UI cần cập nhật**, Figma | ☐ |
| FIX-080 | chưa gắn màn | `A11` Panel Cụm và Số cụm · `A11.03` | Chưa có thiết kế | Thêm `Chia cụm bằng AI`: Mở popup Chia cụm bằng AI. | ☐ |
| FIX-081 | chưa gắn màn | `A11` Panel Cụm và Số cụm · `A11.04` | Chưa có thiết kế | Thêm `Tìm cụm`: Tìm theo tên cụm. | ☐ |
| FIX-082 | chưa gắn màn | `A11` Panel Cụm và Số cụm · `A11.05` | Chưa có thiết kế | Thêm `Tất cả`: Hiện mọi mục của loại; badge tổng số mục. | ☐ |
| FIX-083 | chưa gắn màn | `A11` Panel Cụm và Số cụm · `A11.06` | Chưa có thiết kế | Thêm `Chưa phân cụm`: Mục không thuộc cụm nào; icon cảnh báo + số mục. | ☐ |
| FIX-084 | chưa gắn màn | `A11` Panel Cụm và Số cụm · `A11.07` | Chưa có thiết kế | Thêm `Dòng cụm`: Số thứ tự + tên + số mục + chip bài học đã liên kết (`HK I · Bài 3`) hoặc nhãn cam `Chưa liên kết`; menu ⋮: `Đổi tên`, `Liên kết bài học`. Không có `Xoá cụm`. | ☐ |
| FIX-085 | chưa gắn màn | `A11` Panel Cụm và Số cụm · `A11.08` | Chưa có thiết kế | Thêm `Popup Liên kết bài học`: Tiêu đề `Liên kết cụm <tên cụm> với bài học`; cây `<kỳ> › Bài N: <tên>` của khoá, radio chọn **đúng 1 bài**; bài đã có cụm **cùng loại** mờ kèm nhãn `Đã liên kết: <tên cụm kia>`; lựa chọn `Bỏ liên kết`; `Huỷ` / `Lưu`. (**UI cần bổ sung**) | ☐ |
| FIX-086 | chưa gắn màn | `A11` Panel Cụm và Số cụm · `A11.09` | Chưa có thiết kế | Thêm `Thêm cụm mới`: **Bỏ**: số cụm chỉ do S2 quyết định. | ☐ |
| FIX-087 | chưa gắn màn | `A14` Preview mobile · `A14.01` | Chưa có thiết kế | Thêm `Nút`: `Preview mobile` đổi thành `Đang preview` khi panel mở; `×` đóng panel. | ☐ |
| FIX-088 | chưa gắn màn | `A14` Preview mobile · `A14.02` | Chưa có thiết kế | Thêm `Thiết bị`: Chọn kích thước máy (vd `iPhone 15`). | ☐ |
| FIX-089 | chưa gắn màn | `A14` Preview mobile · `A14.03` | Chưa có thiết kế | Thêm `Tab dạng thẻ`: Từ vựng: `Thẻ từ`, `Flashcard`, `Luyện tập`. Loại khác: tái hiện đúng **màn học thật của app học viên** cho loại đó (danh sách thẻ từng loại — mục 3, chờ ảnh màn app). | ☐ |
| FIX-090 | chưa gắn màn | `A14` Preview mobile · `A14.04` | Chưa có thiết kế | Thêm `Thẻ`: Vị trí `Tất cả · 3/398`; nội dung theo field của mục; icon loa phát Audio (không có file thì TTS). | ☐ |
| FIX-091 | chưa gắn màn | `A14` Preview mobile · `A14.05` | Chưa có thiết kế | Thêm `Thông tin thiếu`: `N trường trống` + tên field + `Điền thiếu từ này`. | ☐ |
| FIX-092 | chưa gắn màn | `A14` Preview mobile · `A14.06` | Chưa có thiết kế | Thêm `Điều hướng`: Nút mục trước / sau, phím ↑ ↓ để chuyển. | ☐ |

## Học Kỳ - Tab Bài học

Cụm `lesson` · MD: `docs/he-thong-ma/lesson.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-093 | chưa gắn màn | `A02` Popup: Chi tiết bài học - Tab Thông tin · `A02.01` | Chưa có thiết kế | Thêm `Tiêu đề`: `Bỏ thay đổi` | ☐ |
| FIX-094 | chưa gắn màn | `A02` Popup: Chi tiết bài học - Tab Thông tin · `A02.02` | Chưa có thiết kế | Thêm `Nội dung`: `Các thay đổi chưa lưu sẽ bị mất. Bạn có chắc chắn muốn đóng?` | ☐ |
| FIX-095 | chưa gắn màn | `A02` Popup: Chi tiết bài học - Tab Thông tin · `A02.03` | Chưa có thiết kế | Thêm `Nút`: `Ở lại`, `Bỏ thay đổi` | ☐ |
| FIX-096 | chưa gắn màn | `A05` Popup: Chi tiết bài học - Tab Kiến thức | Khu vực cần bổ sung | Requirement ghi khu vực này "UI cần bổ sung"; vẽ theo bảng item của khu vực. | ☐ |

## Quản lý danh sách cấp độ

Cụm `level-management` · MD: `docs/he-thong-ma/level-management.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-097 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.01` | Chưa có thiết kế | Thêm `Cấp độ`: Hiển thị (chỉ đọc) đúng Tên cấp độ đang thao tác. | ☐ |
| FIX-098 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.02` | Chưa có thiết kế | Thêm `Trạng thái hiện tại`: Hiển thị badge trạng thái hiện tại (`Nháp`) trước khi chuyển. | ☐ |
| FIX-099 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.03` | Chưa có thiết kế | Thêm `ID cấp độ`: Hiển thị ID hiện tại (2 chữ số) mà cấp độ đã có sẵn từ lúc tạo. | ☐ |
| FIX-100 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.04` | Chưa có thiết kế | Thêm `Ô nhập ID`: Hiển thị sẵn ID hiện tại và cho phép chỉnh sửa trực tiếp lần cuối trước khi khóa. Gõ vào ô sẽ kích hoạt kiểm tra lại (định dạng 2 chữ số + duy nhất toàn hệ thống). | ☐ |
| FIX-101 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.05` | Chưa có thiết kế | Thêm `Nút làm mới ID (biểu tượng xoay)`: Sinh một ID 2 chữ số mới, chưa được sử dụng, điền vào ô nhập; hệ thống phải kiểm tra lại ID mới này. | ☐ |
| FIX-102 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.06` | Chưa có thiết kế | Thêm `Mã cấp độ`: Nếu đã có giá trị: hiển thị chỉ đọc, không cho sửa trong popup. Nếu đang rỗng: hiển thị ô nhập **bắt buộc**, gõ vào sẽ kiểm tra không để trống sau khi cắt khoảng trắng đầu/cuối (không kiểm tra trùng). Sau khi công khai, Mã cấp độ bị khóa. | ☐ |
| FIX-103 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.07` | Chưa có thiết kế | Thêm `Biểu tượng kết quả kiểm tra`: ID (khi đang ở dạng nhập): tick xanh khi đúng định dạng và chưa trùng; x đỏ khi sai định dạng hoặc bị trùng. Mã cấp độ (khi đang ở dạng nhập): tick xanh khi có giá trị; x đỏ khi để trống. | ☐ |
| FIX-104 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.08` | Chưa có thiết kế | Thêm `Thông báo trạng thái`: ID: `ID có thể sử dụng` / `ID đang bị trùng` / `ID sai định dạng`. Mã cấp độ (khi đang trống): `Mã cấp độ có thể sử dụng` / `Mã cấp độ không được để trống`. | ☐ |
| FIX-105 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.09` | Chưa có thiết kế | Thêm `Ghi chú cảnh báo`: Hiển thị cố định: `Sau khi xác nhận, cấp độ sẽ chuyển sang trạng thái Công khai, chỉ còn sửa được Tên và Mô tả. ID và Mã cấp độ sẽ bị khóa`. | ☐ |
| FIX-106 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.10` | Chưa có thiết kế | Thêm `Nút Công khai cấp độ`: Chỉ bật khi ID hợp lệ, chưa trùng **và** Mã cấp độ có giá trị. Khi bấm, backend kiểm tra lại lần cuối rồi lưu ID, lưu Mã cấp độ (nếu vừa nhập) và chuyển trạng thái sang `Công Khai` trong cùng một giao dịch. | ☐ |
| FIX-107 | chưa gắn màn | `A04` Popup Kích hoạt công khai cấp độ · `A04.11` | Chưa có thiết kế | Thêm `Nút Hủy / biểu tượng X`: Đóng popup, không lưu thay đổi ID/Mã cấp độ vừa nhập, không đổi trạng thái cấp độ. | ☐ |

## [CD] Thư viện

Cụm `library` · MD: `docs/he-thong-ma/library.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-108 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.01` | Chưa có thiết kế | Thêm `Tiêu đề / mô tả`: `Thư viện kiến thức`, `Thư viện kỹ năng`, `Thư viện bài tập` kèm một dòng mô tả như ảnh. | ☐ |
| FIX-109 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.02` | Chưa có thiết kế | Thêm `Thanh tab`: Loại dữ liệu của từng thư viện (chi tiết ở khu vực tương ứng). Mặc định tab đầu tiên. | ☐ |
| FIX-110 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.03` | Chưa có thiết kế | Thêm `Ô tìm kiếm`: Tìm theo các cột chính của tab (placeholder nêu rõ, vd `Tìm từ, phiên âm, nghĩa…`), không phân biệt hoa thường, bỏ khoảng trắng thừa. | ☐ |
| FIX-111 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.04` | Chưa có thiết kế | Thêm `Lọc Nâng cao`: Chỉ Thư viện kiến thức và kỹ năng: `Tất cả` (mặc định), `Có`, `Không` theo field Nâng cao của mục (**UI cần bổ sung**). | ☐ |
| FIX-112 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.05` | Chưa có thiết kế | Thêm `Lọc Cấp độ`: Một lựa chọn: `Tất cả` hoặc một cấp độ trong danh sách [Quản lý cấp độ](../../curriculum_management_requirement/level_management/level_management_requirements.md) của trung tâm. Mặc định `Tất cả`. | ☐ |
| FIX-113 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.06` | Chưa có thiết kế | Thêm `Badge tổng số`: Tổng số mục khớp tìm kiếm và lọc của tab đang mở (vd `1.240 từ vựng`, `96 bài nghe`, `248 câu hỏi`). | ☐ |
| FIX-114 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.07` | Chưa có thiết kế | Thêm `Xoá bộ lọc`: Đưa ô tìm kiếm về trống, Cấp độ và Nâng cao về `Tất cả`. | ☐ |
| FIX-115 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.08` | Chưa có thiết kế | Thêm `Cột Cụm`: Chip cụm kiến thức chứa mục (vd `01. Chào hỏi`); nhiều cụm thì hiện cụm đầu kèm `+N`. Chỉ có ở Thư viện kiến thức. | ☐ |
| FIX-116 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.09` | Chưa có thiết kế | Thêm `Cột Đang dùng ở`: Kỳ và bài đang dùng mục: một bài hiện tên bài (`HK I · Bài 1`), nhiều bài hiện số bài (`HK I · 3 bài`); chưa gắn bài nào hiện `Chưa dùng` màu cam. Chỉ có ở Thư viện kiến thức, kỹ năng; Ngân hàng câu hỏi không có cột này. | ☐ |
| FIX-117 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.10` | Chưa có thiết kế | Thêm `Cột Nâng cao`: `Có` / `Không`; chỉ có ở Thư viện kiến thức và kỹ năng, đứng trước cột `Trạng thái` (**UI cần bổ sung**). | ☐ |
| FIX-118 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.11` | Chưa có thiết kế | Thêm `Cột Trạng thái`: Badge `Nháp` (cam), `Công khai` (xanh lá), `Vô hiệu` (xám). Quy tắc ở khu vực Trạng thái và xoá mục. | ☐ |
| FIX-119 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.12` | Chưa có thiết kế | Thêm `Menu ⋮ cuối dòng`: Kiến thức, Kỹ năng: `Đổi trạng thái`, `Xoá`. Bài tập: không có. | ☐ |
| FIX-120 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.13` | Chưa có thiết kế | Thêm `Ô trống`: Field bắt buộc đang trống hiện `— trống —` màu cam (vd Nghĩa, Phiên âm); nội dung đặc thù hiện `— chưa có file âm thanh —`, `— chưa có đoạn văn —`, `— chưa có đề bài —`, `— chưa có file —`. `0 câu` màu cam. | ☐ |
| FIX-121 | chưa gắn màn | `A01` Khung chung của Thư viện · `A01.14` | Chưa có thiết kế | Thêm `Phân trang`: 50 dòng/trang; dòng chú thích `Hiển thị 1–50 trong N …`; nút số trang, `…`, trang cuối. | ☐ |
| FIX-122 | chưa gắn màn | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.01` | Chưa có thiết kế | Thêm `Danh sách tiếng Nhật`: Một dòng là một cặp chữ: `STT`, `Hiragana`, `Katakana`, `Romaji`, `Loại`, `Hàng`, `Ví dụ` (từ · nghĩa), `Cụm`, `Đang dùng ở`, `Trạng thái`, `⋮`. Tổng 104 mục; badge `N chữ`. Tìm theo Hiragana, Katakana, Romaji, Ví dụ. | ☐ |
| FIX-123 | chưa gắn màn | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.02` | Chưa có thiết kế | Thêm `Loại (Nhật)`: `Âm cơ bản` (46), `Âm đục` (20), `Âm bán đục` (5), `Âm ghép` (33). Ánh xạ Bảng con của S1: Bảng Chữ Chính → Âm cơ bản, Tenten → Âm đục, Maru → Âm bán đục, Ảo âm / Ảo âm - hiếm gặp → Âm ghép. Âm ngắt `っ` và trường âm ghi trong Ví dụ / ghi chú, không là mục riêng. | ☐ |
| FIX-124 | chưa gắn màn | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.03` | Chưa có thiết kế | Thêm `Hàng (Nhật)`: Hàng trong bảng 50 âm: `あ行`, `か行`, `さ行`, `た行`, `な行`, `は行`, `ま行`, `や行`, `ら行`, `わ行`, `ん`. | ☐ |
| FIX-125 | chưa gắn màn | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.04` | Chưa có thiết kế | Thêm `Lưới tiếng Nhật`: Nút chuyển `Hiragana` / `Katakana`; nhóm `Âm cơ bản` / `Âm đục · bán đục` / `Âm ghép`; lưới 5 cột `a · i · u · e · o` × 11 hàng; mỗi ô gồm chữ + romaji. Ô xám là vị trí không có chữ. | ☐ |
| FIX-126 | chưa gắn màn | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.05` | Chưa có thiết kế | Thêm `Danh sách tiếng Hàn`: Một dòng là một jamo: `STT`, `Chữ`, `Tên gọi` (vd `기역`), `Phiên âm` (Romaja đầu / cuối, vd `g / k`), `Loại`, `Ví dụ` (từ · nghĩa), `Cụm`, `Đang dùng ở`, `Trạng thái`, `⋮`. Tổng 40 mục; badge `N chữ`. Tìm theo Chữ, Tên gọi, Phiên âm, Ví dụ. | ☐ |
| FIX-127 | chưa gắn màn | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.06` | Chưa có thiết kế | Thêm `Loại (Hàn)`: `Phụ âm thường` (9), `Phụ âm bật hơi` (5), `Phụ âm căng` (5), `Nguyên âm đơn` (10), `Nguyên âm ghép` (11). | ☐ |
| FIX-128 | chưa gắn màn | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.07` | Chưa có thiết kế | Thêm `Lưới tiếng Hàn`: Nhãn `Phụ âm × Nguyên âm`; nhóm `Bảng ghép cơ bản` / `Phụ âm căng` / `Nguyên âm ghép` / `Patchim`; lưới 14 phụ âm (hàng) × 10 nguyên âm (cột) = 140 âm tiết, mỗi ô gồm âm tiết + romaja. | ☐ |
| FIX-129 | chưa gắn màn | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.08` | Chưa có thiết kế | Thêm `Panel Chi tiết chữ`: Bên phải lưới, hiện chữ đang chọn (ô viền cam). Nhật: chữ Hiragana lớn + Katakana nhỏ, Romaji, Loại, Hàng, Ví dụ, Cụm, Đang dùng ở, Trạng thái. Hàn: âm tiết lớn + phân tích `ㄱ + ㅏ`, Phiên âm, Phụ âm (chữ · tên gọi · romaja), Nguyên âm, Ví dụ, Cụm, Đang dùng ở, Trạng thái. Nút `Nghe phát âm` phát audio của chữ (chưa có file thì nút mờ). Mặc định chọn ô đầu tiên. | ☐ |
| FIX-130 | chưa gắn màn | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.09` | Chưa có thiết kế | Thêm `Tìm kiếm, Cấp độ ở dạng lưới`: Vẫn áp dụng: ô không khớp bị mờ, ô khớp giữ nguyên; badge tổng số theo số ô khớp. | ☐ |
| FIX-131 | chưa gắn màn | `A04` Thư viện kiến thức — tab Bảng chữ · `A04.10` | Chưa có thiết kế | Thêm `Menu ⋮`: Như các tab khác (Đổi trạng thái, Xoá). Ở dạng lưới thao tác qua panel Chi tiết chữ (**UI cần bổ sung**: nút `⋮` trong panel). | ☐ |
| FIX-132 | chưa gắn màn | `A06` Thư viện bài tập · `A06.01` | Chưa có thiết kế | Thêm `Tab Ngân Hàng Câu Hỏi`: Mọi câu hỏi của các bộ câu hỏi BTVN và Kiểm tra thuộc trung tâm. Cột `STT`, `Câu hỏi` (nội dung + hướng dẫn), `Loại câu`, `Đáp án đúng`, `Kiến thức / Kỹ năng`, `Trạng thái`. Badge `N câu hỏi`. Không có cột `Đang dùng ở`. | ☐ |
| FIX-133 | chưa gắn màn | `A06` Thư viện bài tập · `A06.02` | Chưa có thiết kế | Thêm `Loại câu`: Badge một trong 8 loại: `Trắc nghiệm`, `Sắp xếp`, `Nối từ`, `Nói`, `Đọc`, `Viết`, `Hình ảnh`, `Câu hỏi con`. | ☐ |
| FIX-134 | chưa gắn màn | `A06` Thư viện bài tập · `A06.03` | Chưa có thiết kế | Thêm `Đáp án đúng`: Theo loại câu; `Đọc`, `Viết`, `Hình ảnh`, `Nói` hiển thị `Giáo viên chấm`; câu chưa có đáp án hiển thị `— chưa có đáp án —` màu cam; `Câu hỏi con` hiển thị `N câu con`. | ☐ |
| FIX-135 | chưa gắn màn | `A06` Thư viện bài tập · `A06.04` | Chưa có thiết kế | Thêm `Kiến thức / Kỹ năng`: Chỉ ghi nhóm câu thuộc về: `Kiến thức` hoặc `Kỹ năng` (đã chọn khi soạn câu); không ghi loại, cụm hay tên kỹ năng. | ☐ |
| FIX-136 | chưa gắn màn | `A06` Thư viện bài tập · `A06.05` | Chưa có thiết kế | Thêm `Câu hỏi con`: Dòng cha có mũi tên mở / thu các câu con đánh số `7.1`, `7.2`…; câu con có loại câu và đáp án riêng, không có cột Kiến thức / Kỹ năng, Trạng thái; chú thích dưới bảng như ảnh. | ☐ |
| FIX-137 | chưa gắn màn | `A06` Thư viện bài tập · `A06.06` | Chưa có thiết kế | Thêm `Trạng thái`: Câu hỏi không có trạng thái riêng: hiển thị trạng thái **khoá học** chứa câu (`Nháp`, `Công khai`, `Vô hiệu`); câu chưa thuộc bài nào hiển thị badge `Chưa dùng`. | ☐ |
| FIX-138 | chưa gắn màn | `A06` Thư viện bài tập · `A06.07` | Chưa có thiết kế | Thêm `Tag AI`: Câu do Generate bằng AI tạo có tag `AI` cạnh nội dung; mất khi CD sửa và lưu câu. | ☐ |
| FIX-139 | chưa gắn màn | `A06` Thư viện bài tập · `A06.08` | Chưa có thiết kế | Thêm `Bấm dòng câu hỏi`: Mở Chi tiết câu hỏi của câu đó (khu vực bên dưới). | ☐ |
| FIX-140 | chưa gắn màn | `A06` Thư viện bài tập · `A06.09` | Chưa có thiết kế | Thêm `Tab BTVN Mẫu`: Danh sách bộ câu hỏi BTVN: `STT`, `Bài` (`BTVN · Bài n: tên bài`, dòng phụ `Khoá học · Cấp độ · Kỳ`), `Số câu`, `Trạng thái` (theo khoá học). Badge `N bộ BTVN`. | ☐ |
| FIX-141 | chưa gắn màn | `A06` Thư viện bài tập · `A06.10` | Chưa có thiết kế | Thêm `Tab Kiểm Tra Mẫu`: Danh sách bài kiểm tra: `STT`, `Bài kiểm tra` (tên bài, dòng phụ `Khoá học · Cấp độ · Kỳ`), `Số câu`, `Trạng thái` (theo khoá học). Badge `N bài kiểm tra`. | ☐ |
| FIX-142 | chưa gắn màn | `A06` Thư viện bài tập · `A06.11` | Chưa có thiết kế | Thêm `Bấm dòng tab mẫu`: Mở bộ câu hỏi chỉ đọc (**UI cần bổ sung**). | ☐ |
| FIX-143 | chưa gắn màn | `A06` Thư viện bài tập · `A06.12` | Chưa có thiết kế | Thêm `Tìm kiếm`: Ngân hàng câu hỏi: theo nội dung và hướng dẫn câu hỏi; hai tab mẫu: theo tên bài, tên khoá học. | ☐ |
| FIX-144 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.01` | Chưa có thiết kế | Thêm `Nút ‹`: Về Thư viện bài tập, giữ tab, tìm kiếm, Cấp độ và trang đang xem. | ☐ |
| FIX-145 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.02` | Chưa có thiết kế | Thêm `Tiêu đề`: `Chi tiết câu hỏi`, dòng phụ `<hướng dẫn câu> · Kỹ năng: <tên kỹ năng>` (vd `Nghe và chọn câu trả lời đúng · Kỹ năng: Nghe`). | ☐ |
| FIX-146 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.03` | Chưa có thiết kế | Thêm `Chip ngôn ngữ`: Ngôn ngữ theo trung tâm (`Tiếng Trung`, `Tiếng Nhật`…), chỉ hiển thị; quyết định cột phiên âm (pinyin / romaji). | ☐ |
| FIX-147 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.04` | Chưa có thiết kế | Thêm `Huỷ`: Bỏ mọi thay đổi chưa lưu, về Thư viện bài tập. Có thay đổi chưa lưu thì hỏi xác nhận trước khi rời. | ☐ |
| FIX-148 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.05` | Chưa có thiết kế | Thêm `Lưu câu hỏi`: Lưu toàn bộ câu; thành công Toast `Thành Công` `Đã lưu câu hỏi.`, câu AI mất tag `AI`. | ☐ |
| FIX-149 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.06` | Chưa có thiết kế | Thêm `Chế độ chỉ xem`: Ẩn `Lưu câu hỏi`, `+ Thêm câu`, `+ Thêm lượt thoại`, `+ Thêm đối tượng mới`, menu `⋮` của câu / lượt / từ khoá / đối tượng, bôi đen đặt từ khoá; khoá các nút bật/tắt; `Huỷ` đổi thành `Đóng`. Đầu màn có banner `Câu thuộc khoá Công khai / Vô hiệu, chỉ xem.`. **UI cần bổ sung.** | ☐ |
| FIX-150 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.07` | Chưa có thiết kế | Thêm `Kịch bản`: Thanh audio (nút phát, tiến độ, `mm:ss / mm:ss`) và danh sách **lượt thoại**; chú thích `Mỗi lượt gắn với một đối tượng`. | ☐ |
| FIX-151 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.08` | Chưa có thiết kế | Thêm `Audio theo kịch bản`: Thêm / sửa / xoá lượt thoại hoặc đổi giọng đối tượng làm audio cũ lệch kịch bản: thanh audio hiện nhãn `Audio cần tạo lại`; CD bấm `Tạo lại audio` (hệ thống đọc từng lượt bằng TTS theo giọng của đối tượng, ghép theo thứ tự lượt) hoặc tải file mới. Lưu câu khi audio chưa tạo lại thì hỏi xác nhận. **UI cần bổ sung.** | ☐ |
| FIX-152 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.09` | Chưa có thiết kế | Thêm `Lựa chọn / đáp án`: Phần câu hỏi của bài nghe (lựa chọn, đáp án đúng) theo form soạn câu của BTVN; Figma chưa vẽ (**UI cần bổ sung**). | ☐ |
| FIX-153 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.10` | Chưa có thiết kế | Thêm `Lượt thoại`: Avatar chữ cái đối tượng (`A`, `B`), câu, `Phiên âm · …`, `Dịch · …`, menu `⋮` (Sửa, Xoá lượt). | ☐ |
| FIX-154 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.11` | Chưa có thiết kế | Thêm `Thêm lượt`: `+ Thêm lượt thoại` mở khung nhập: ô chọn đối tượng, câu, phiên âm và dịch (mỗi ô có `✦ Tự tạo`), `Huỷ` / `Thêm lượt`. Mặc định chọn đối tượng khác lượt trước (A ↔ B); đổi bằng ô chọn bên trái. | ☐ |
| FIX-155 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.12` | Chưa có thiết kế | Thêm `Ô chọn đối tượng`: Danh sách đối tượng (tên · giọng), dấu `✓` ở đối tượng đang chọn, `+ Thêm đối tượng mới`. | ☐ |
| FIX-156 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.13` | Chưa có thiết kế | Thêm `Panel Đối tượng`: Mỗi đối tượng: `Object A · Lý Hoa`, `Giọng Nữ 2 · 2 lượt`, menu `⋮`. | ☐ |
| FIX-157 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.14` | Chưa có thiết kế | Thêm `Hiển thị cho học viên`: Bật/tắt `Phiên âm`, `Dịch nghĩa`, `Kịch bản (sau khi nộp bài)`. | ☐ |
| FIX-158 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.15` | Chưa có thiết kế | Thêm `Văn bản`: Danh sách câu đánh số; mỗi câu gồm văn bản, phiên âm (tiếng Nhật: romaji), dịch câu. Từ khoá trong câu được gạch chân màu cam. `+ Thêm câu` ở cuối. | ☐ |
| FIX-159 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.16` | Chưa có thiết kế | Thêm `Sửa câu`: Bấm vào câu mở khung sửa: `Văn bản`, `Phiên âm`, `Dịch câu` (hai ô sau có `✦ Tự tạo`), `Huỷ` / `Lưu câu`. Sửa văn bản thì bấm `Tự tạo` để sinh lại phiên âm, dịch; từ khoá trong câu được giữ nếu từ đó vẫn còn. | ☐ |
| FIX-160 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.17` | Chưa có thiết kế | Thêm `Từ khoá · N`: Danh sách từ khoá: chữ, phiên âm (tiếng Nhật: `Hiragana · Katakana`), nghĩa, menu `⋮`. Từ khoá đang chọn viền cam. | ☐ |
| FIX-161 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.18` | Chưa có thiết kế | Thêm `Popup chi tiết từ khoá`: Bấm từ khoá (trong văn bản hoặc danh sách): chữ, phiên âm, từ loại, `Nghĩa`, `Chi tiết từ`, `Ví dụ`; tiếng Nhật thêm ô `Hiragana`, `Katakana`. Menu `⋮`: `Sửa từ khoá`, `Bỏ từ khoá`. | ☐ |
| FIX-162 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.19` | Chưa có thiết kế | Thêm `Đặt làm từ khoá`: Bôi đen một từ trong văn bản → thanh nổi `<từ> ＋ Đặt làm từ khoá \| Sao chép` → popup `Thêm từ khoá`. | ☐ |
| FIX-163 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.20` | Chưa có thiết kế | Thêm `Popup Thêm từ khoá`: `Từ` (điền sẵn từ đã bôi đen), `Phiên âm` (`✦ Tự tạo`), `Từ loại` (danh sách Từ loại của S1), `Nghĩa` (nhiều nghĩa, `+ Thêm nghĩa`, `✕` xoá), `Chi tiết từ · tách theo chữ` (mỗi chữ: phiên âm + nghĩa, `✦ Tự tách`), `Hán Việt`, `Ví dụ` (câu, phiên âm, dịch; `+ Thêm ví dụ`), `Huỷ` / `Thêm từ khoá`. | ☐ |
| FIX-164 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.21` | Chưa có thiết kế | Thêm `Sửa từ khoá`: Dùng chung popup trên: các ô điền sẵn dữ liệu của từ, thêm `Xoá từ khoá` bên trái, nút chính đổi thành `Lưu`. | ☐ |
| FIX-165 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.22` | Chưa có thiết kế | Thêm `Bỏ từ khoá`: Bỏ đánh dấu từ khoá khỏi câu hỏi, văn bản giữ nguyên. | ☐ |
| FIX-166 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.23` | Chưa có thiết kế | Thêm `Chọn từ có sẵn`: Trên popup `Thêm từ khoá` có ô tìm từ trong Kiến thức (S1) của khoá học (Từ vựng, Hanzi / Kanji); chọn từ thì tự điền Phiên âm, Từ loại, Nghĩa, Chi tiết từ, Hán Việt, Ví dụ, CD sửa lại được. Không tìm thấy thì nhập mới như Figma. **UI cần bổ sung.** | ☐ |
| FIX-167 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.24` | Chưa có thiết kế | Thêm `Câu con / đáp án`: Các câu hỏi của bài đọc (vd `trả lời 3 câu`: câu con, loại câu, đáp án) theo form soạn câu của BTVN; Figma chưa vẽ (**UI cần bổ sung**). | ☐ |
| FIX-168 | chưa gắn màn | `A07` Thư viện bài tập — Chi tiết câu hỏi · `A07.25` | Chưa có thiết kế | Thêm `Hiển thị cho học viên`: Bật/tắt `Highlight từ khoá`, `Phiên âm khi bấm từ` (tiếng Nhật: `Hiragana / Katakana khi bấm từ`), `Dịch câu`, `Dịch từ vựng`. | ☐ |

## [Phụ trách lớp, Admin] Lịch Họp

Cụm `meeting-schedule` · MD: `docs/he-thong-ma/meeting-schedule.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-169 | chưa gắn màn | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.01` | Chưa có thiết kế | Thêm `Dòng phụ dưới tiêu đề`: `Thứ, dd.MM.yyyy · HH:mm · <nhãn>`; nhãn `Đã trôi qua` nếu thời điểm họp đã qua, `Sắp diễn ra` nếu chưa tới. Chỉ có ở Chi tiết cuộc họp. | ☐ |
| FIX-170 | chưa gắn màn | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.02` | Chưa có thiết kế | Thêm `Chủ đề`: Bắt buộc, tối đa 255 ký tự. | ☐ |
| FIX-171 | chưa gắn màn | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.03` | Chưa có thiết kế | Thêm `Thời gian`: Ngày (`dd.MM.yyyy`, date picker) và giờ (`HH:mm`, time picker), đều bắt buộc. Tạo mới mặc định ngày hôm nay, giờ trống. Cho phép chọn thời điểm quá khứ và trùng giờ với cuộc họp khác. | ☐ |
| FIX-172 | chưa gắn màn | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.04` | Chưa có thiết kế | Thêm `Trạng thái`: Dropdown `Mới tạo`, `Đang chờ`, `Đang tham gia`, `Hoàn thành`. Tạo mới mặc định `Mới tạo`. Không tự đổi theo thời gian. | ☐ |
| FIX-173 | chưa gắn màn | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.05` | Chưa có thiết kế | Thêm `Người tham gia`: Chip avatar + tên; nút `+` mở danh sách chọn nhiều người (tìm kiếm, mỗi dòng `Tên (Role)`, chỉ tài khoản đang hoạt động). Chọn được tài khoản **mọi role của ICS**, gồm cả Giáo viên, Học viên, Trợ giảng. Hover chip hiện `x` để bỏ. Không bắt buộc; người tạo không tự được thêm vào danh sách. | ☐ |
| FIX-174 | chưa gắn màn | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.06` | Chưa có thiết kế | Thêm `Ghi chú`: Không bắt buộc, tối đa 500 ký tự. | ☐ |
| FIX-175 | chưa gắn màn | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.07` | Chưa có thiết kế | Thêm `Link cuộc họp`: Không bắt buộc; phải là URL bắt đầu bằng `http://` hoặc `https://`. Ở chế độ chỉ xem hiển thị dạng link, bấm mở tab mới. | ☐ |
| FIX-176 | chưa gắn màn | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.08` | Chưa có thiết kế | Thêm `Huỷ`: Đóng popup, bỏ thay đổi chưa lưu. | ☐ |
| FIX-177 | chưa gắn màn | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.09` | Chưa có thiết kế | Thêm `Lưu`: Validate → lưu → đóng popup → cập nhật danh sách/lịch và badge sidebar → Toast. Chống bấm lặp. | ☐ |
| FIX-178 | chưa gắn màn | `A03` Trang 3: Popup Chi tiết cuộc họp / Thêm cuộc họp · `A03.10` | Chưa có thiết kế | Thêm `Xoá`: Chỉ người tạo, ở Chi tiết cuộc họp (UI cần bổ sung nút). Mở popup xác nhận `Xoá cuộc họp?` hiển thị chủ đề + ngày giờ; xác nhận mới xoá. | ☐ |

## Kỹ năng (S6) — Nghe / Đọc

Cụm `skill-s6` · MD: `docs/he-thong-ma/skill-s6.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-179 | chưa gắn màn | `A01` Khung màn hình và tab kỹ năng · `A01.07` | Chưa có thiết kế | Thêm `+ Thêm bài nghe`: Menu 3 lựa chọn: `Thêm từ thư viện`, `Tạo bài nghe mới`, `Import Excel`. Kèm `Export Excel` (xem khu vực Import / Export Excel, **UI menu cần bổ sung**). | ☐ |
| FIX-180 | chưa gắn màn | `A02` Bảng bài nghe · `A02.01` | Chưa có thiết kế | Thêm `Checkbox`: Chọn dòng cho thao tác hàng loạt; checkbox đầu bảng chọn cả trang. | ☐ |
| FIX-181 | chưa gắn màn | `A02` Bảng bài nghe · `A02.02` | Chưa có thiết kế | Thêm `STT + tay nắm kéo thả`: Số thứ tự theo sắp xếp hiện tại, 2 chữ số; tay nắm chỉ hiện khi đang xem 1 cụm và Sắp xếp = `Thứ tự trong cụm`. | ☐ |
| FIX-182 | chưa gắn màn | `A02` Bảng bài nghe · `A02.03` | Chưa có thiết kế | Thêm `Bài nghe`: Dòng 1 **Tên bài** (ngôn ngữ đích, vd `对话：初次见面`), dòng 2 **Mô tả** tiếng Việt, cắt `…` khi dài; hover hiện đủ. Bấm tên mở drawer Chi tiết. | ☐ |
| FIX-183 | chưa gắn màn | `A02` Bảng bài nghe · `A02.04` | Chưa có thiết kế | Thêm `Âm thanh`: Nút phát, thanh tiến độ, thời lượng `mm:ss` (≥ 1 giờ hiện `h:mm:ss`). Chưa có file hiện `— chưa có file —` màu cam. Chỉ phát một bài tại một thời điểm, phát bài khác thì bài đang phát dừng. | ☐ |
| FIX-184 | chưa gắn màn | `A02` Bảng bài nghe · `A02.05` | Chưa có thiết kế | Thêm `Cụm`: Nhãn cụm duy nhất của bài; bấm nhãn mở popup Thêm vào cụm / Gỡ khỏi cụm của bài đó. Không thuộc cụm nào hiện `Chưa phân cụm`. Không có nhãn `+N`. | ☐ |
| FIX-185 | chưa gắn màn | `A02` Bảng bài nghe · `A02.06` | Chưa có thiết kế | Thêm `Nâng cao`: `Có` / `Không` (mặc định `Không`); `Có` = bài nâng cao, app không đẩy lên bước học chính, vẫn hiện trong danh sách luyện (**UI cần bổ sung**). | ☐ |
| FIX-186 | chưa gắn màn | `A02` Bảng bài nghe · `A02.07` | Chưa có thiết kế | Thêm `Menu ⋮`: `Mở chi tiết`, `Thêm vào cụm / Gỡ khỏi cụm`, `Transcript AI`, `Gỡ khỏi khoá`. | ☐ |
| FIX-187 | chưa gắn màn | `A02` Bảng bài nghe · `A02.08` | Chưa có thiết kế | Thêm `Nhãn AI dưới tên`: `AI · đang tạo transcript`, `AI · đã tạo, chờ duyệt`, `? <lý do nghi sai>` (xem khu vực AI). | ☐ |
| FIX-188 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.01` | Chưa có thiết kế | Thêm `Tất cả cụm + badge N cụm`: Tiêu đề panel và số cụm hiện có; chọn để xem mọi bài của tab (mặc định). | ☐ |
| FIX-189 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.02` | Chưa có thiết kế | Thêm `Số cụm`: **Chỉ đọc**, = tổng `Số buổi` của các dòng Nội dung buổi học có Loại = kỹ năng của tab ở Tổng quan (S2); ghi chú `Theo Tổng quan (S2) · N buổi`. Hệ thống tự tạo đủ cụm rỗng `Chủ đề 1` … `Chủ đề N`; CD đổi tên, chia bài, liên kết bài học. Chưa có buổi thì panel hiện `Chưa có cụm. Nhập Số buổi cho loại <Nghe> ở Tổng quan (S2) để tạo cụm.` | ☐ |
| FIX-190 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.03` | Chưa có thiết kế | Thêm `Chia cụm bằng AI`: AI đề xuất chia các bài của tab vào cụm theo chủ đề nội dung; kết quả chờ duyệt, CD áp dụng hoặc bỏ, theo cùng quy tắc popup Chia cụm bằng AI của S1. | ☐ |
| FIX-191 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.04` | Chưa có thiết kế | Thêm `Dòng cụm`: `NN. <tên cụm>` + badge số bài của cụm (0 hiện xám) + chip bài học đã liên kết (`HK I · Bài 3`) hoặc nhãn cam `Chưa liên kết`; chọn để lọc bảng trái, tiêu đề bảng đổi thành tên cụm. Menu ⋮: `Đổi tên`, `Liên kết bài học`. Không có `Xoá cụm`. | ☐ |
| FIX-192 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.05` | Chưa có thiết kế | Thêm `Popup Liên kết bài học`: Như S1: cây `<kỳ> › Bài N`, radio chọn đúng 1 bài; bài đã có cụm **cùng loại kỹ năng** mờ kèm `Đã liên kết: <cụm>`; `Bỏ liên kết`; `Huỷ` / `Lưu`. | ☐ |
| FIX-193 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.06` | Chưa có thiết kế | Thêm `Chưa phân cụm`: Badge cam = số bài chưa thuộc cụm nào; chọn để lọc. | ☐ |
| FIX-194 | chưa gắn màn | `A04` Panel Cụm và Số cụm · `A04.07` | Chưa có thiết kế | Thêm `Thêm cụm mới`: **Bỏ**: số cụm chỉ do S2 quyết định. | ☐ |
| FIX-195 | chưa gắn màn | `A05` Tìm kiếm, lọc và sắp xếp · `A05.01` | Chưa có thiết kế | Thêm `Ô tìm`: Khớp một phần, không phân biệt hoa thường, theo tên bài, mô tả, nội dung (kịch bản với Nghe, đoạn văn với Đọc). Tìm sau khi ngừng gõ 2 giây hoặc Enter. | ☐ |
| FIX-196 | chưa gắn màn | `A05` Tìm kiếm, lọc và sắp xếp · `A05.02` | Chưa có thiết kế | Thêm `Cụm`: Chọn ở panel Cụm (`Tất cả cụm`, một cụm, hoặc `Chưa phân cụm`); không có dropdown lọc riêng trên toolbar. | ☐ |
| FIX-197 | chưa gắn màn | `A05` Tìm kiếm, lọc và sắp xếp · `A05.03` | Chưa có thiết kế | Thêm `Sắp xếp`: `Thứ tự thêm` (mặc định), `Tên A–Z`, `Mới cập nhật`, `Thứ tự trong cụm` (chỉ khi đang xem 1 cụm). | ☐ |
| FIX-198 | chưa gắn màn | `A05` Tìm kiếm, lọc và sắp xếp · `A05.04` | Chưa có thiết kế | Thêm `Trạng thái`: `Tất cả` (mặc định), `Nháp`, `Công khai`, `Vô hiệu` của bản ghi thư viện. | ☐ |
| FIX-199 | chưa gắn màn | `A05` Tìm kiếm, lọc và sắp xếp · `A05.05` | Chưa có thiết kế | Thêm `Nâng cao`: `Tất cả` (mặc định), `Có`, `Không` (**UI cần bổ sung**). | ☐ |
| FIX-200 | chưa gắn màn | `A06` Drawer Chi tiết bài nghe · `A06.01` | Chưa có thiết kế | Thêm `Tiêu đề`: `Chi tiết bài nghe` + dòng phụ `Bài nghe NN`; `×` đóng, hỏi xác nhận nếu có thay đổi chưa lưu. | ☐ |
| FIX-201 | chưa gắn màn | `A06` Drawer Chi tiết bài nghe · `A06.02` | Chưa có thiết kế | Thêm `Tên bài `: Bắt buộc, ngôn ngữ đích, tối đa 200 ký tự. | ☐ |
| FIX-202 | chưa gắn màn | `A06` Drawer Chi tiết bài nghe · `A06.03` | Chưa có thiết kế | Thêm `Mô tả `: Bắt buộc để đủ thông tin, tiếng Việt, tối đa 500 ký tự. Trống vẫn lưu được nhưng bài tính thiếu thông tin. | ☐ |
| FIX-203 | chưa gắn màn | `A06` Drawer Chi tiết bài nghe · `A06.04` | Chưa có thiết kế | Thêm `Cụm`: Chỉ đọc: chip cụm bài đang thuộc (hoặc `Chưa phân cụm`) kèm bài học mà cụm liên kết; `Sửa cụm` mở popup Thêm vào cụm / Gỡ khỏi cụm. Drawer không có field `Bài học`. | ☐ |
| FIX-204 | chưa gắn màn | `A06` Drawer Chi tiết bài nghe · `A06.05` | Chưa có thiết kế | Thêm `Nâng cao`: Toggle `Không` (mặc định) / `Có`; cùng ý nghĩa field Nâng cao của Kiến thức (S1): `Có` = bài nâng cao, không đẩy lên bước học chính. (**UI cần bổ sung**) | ☐ |
| FIX-205 | chưa gắn màn | `A06` Drawer Chi tiết bài nghe · `A06.06` | Chưa có thiết kế | Thêm `Âm thanh`: Trình phát `00:00 / mm:ss`; `Tải lên` / `Thay` / `Xoá`; chỉ `.mp3`, tối đa 50MB (theo `file_limits.json`, **khác Figma** ghi `MP3 / WAV · 25 MB`). | ☐ |
| FIX-206 | chưa gắn màn | `A06` Drawer Chi tiết bài nghe · `A06.07` | Chưa có thiết kế | Thêm `Kịch bản · N lượt`: Danh sách lượt thoại theo thứ tự: nhãn người nói (`A`, `B`…), câu gốc, `Phiên âm ·`, `Dịch ·`, mốc `start – end` theo audio (`mm:ss.s`, **UI cần bổ sung**). Thêm / sửa / xoá / kéo thả lượt; lượt có giá trị AI chờ duyệt viền nét đứt cam với `✓ Duyệt` / `↺ Hoàn tác`. | ☐ |
| FIX-207 | chưa gắn màn | `A06` Drawer Chi tiết bài nghe · `A06.08` | Chưa có thiết kế | Thêm `Câu hỏi`: Tóm tắt `N câu hỏi · <loại> k · …` và `Mở chi tiết ›` dẫn sang màn Chi tiết câu hỏi của Thư viện bài tập (`CD-KH-070301` Listening); chưa có câu hiện `0 câu hỏi` màu cam. | ☐ |
| FIX-208 | chưa gắn màn | `A06` Drawer Chi tiết bài nghe · `A06.09` | Chưa có thiết kế | Thêm `Footer`: Ghi chú `Lưu = sửa bản ghi thư viện; mọi khoá dùng bài này thấy nội dung mới`; `Huỷ`, `Lưu`. | ☐ |
| FIX-209 | chưa gắn màn | `A07` Drawer Chi tiết bài đọc · `A07.01` | Chưa có thiết kế | Thêm `Tên bài , Mô tả , Cụm, Nâng cao, Câu hỏi, Footer`: Như drawer bài nghe; `Mở chi tiết ›` dẫn sang `CD-KH-070302` Reading. | ☐ |
| FIX-210 | chưa gắn màn | `A07` Drawer Chi tiết bài đọc · `A07.02` | Chưa có thiết kế | Thêm `Đoạn văn `: Nhiều dòng, ngôn ngữ đích; trống thì bài tính thiếu thông tin. Có thể tách câu: mỗi câu có `Phiên âm ·`, `Dịch ·` (tuỳ chọn, AI điền được). | ☐ |
| FIX-211 | chưa gắn màn | `A07` Drawer Chi tiết bài đọc · `A07.03` | Chưa có thiết kế | Thêm `Audio đọc mẫu`: Không bắt buộc; `.mp3` ≤ 50MB; có file thì app học viên phát kèm đoạn văn. | ☐ |
| FIX-212 | chưa gắn màn | `A07` Drawer Chi tiết bài đọc · `A07.04` | Chưa có thiết kế | Thêm `Từ vựng liên quan`: Chọn nhiều từ trong Kiến thức (S1) Từ vựng của chính khoá; chip có `×`; dùng để app tô sáng và tra nhanh trong đoạn văn. | ☐ |
| FIX-213 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.01` | Chưa có thiết kế | Thêm `Mở chi tiết`: Mở drawer. | ☐ |
| FIX-214 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.02` | Chưa có thiết kế | Thêm `Thêm vào cụm / Gỡ khỏi cụm`: Mở popup `Cụm của N bài` (N bài đang chọn: 1 khi mở từ dòng). | ☐ |
| FIX-215 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.03` | Chưa có thiết kế | Thêm `Transcript AI (Nghe) / Tạo câu hỏi bằng AI (Đọc)`: Chạy AI cho riêng bài đó (xem khu vực AI). | ☐ |
| FIX-216 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.04` | Chưa có thiết kế | Thêm `Gỡ khỏi khoá`: Mở popup Gỡ khỏi khoá. | ☐ |
| FIX-217 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.05` | Chưa có thiết kế | Thêm `Popup — Tìm cụm`: Tìm theo tên cụm của tab. | ☐ |
| FIX-218 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.06` | Chưa có thiết kế | Thêm `Popup — Danh sách cụm`: **Radio** từng cụm + số bài của cụm, thêm `Chưa phân cụm` (= gỡ khỏi cụm). Mọi bài đang chọn cùng cụm thì chọn sẵn cụm đó. | ☐ |
| FIX-219 | chưa gắn màn | `A08` Menu thao tác dòng và Popup Thêm vào cụm / Gỡ khỏi · `A08.07` | Chưa có thiết kế | Thêm `Popup — Huỷ / Lưu`: Lưu: các bài chuyển vào cụm đã chọn (rời cụm cũ); chọn `Chưa phân cụm` thì gỡ khỏi cụm. Bài học liên kết cụm cũ / mới phản ánh ngay, không cảnh báo. | ☐ |
| FIX-220 | chưa gắn màn | `A11` Popup Thêm bài từ thư viện · `A11.01` | Chưa có thiết kế | Thêm `Tiêu đề`: `Thêm bài nghe từ thư viện` + mô tả `Chọn bài nghe có sẵn trong thư viện để thêm vào Kỹ năng (S6) · <cấp độ khoá>. Bài đã có sẽ bị khoá.` | ☐ |
| FIX-221 | chưa gắn màn | `A11` Popup Thêm bài từ thư viện · `A11.02` | Chưa có thiết kế | Thêm `Ô tìm`: `Tìm tên bài nghe, nội dung…`. | ☐ |
| FIX-222 | chưa gắn màn | `A11` Popup Thêm bài từ thư viện · `A11.03` | Chưa có thiết kế | Thêm `Kho`: `Thư viện kỹ năng` (mặc định, mọi bài của trung tâm), `Khoá học` (bài tạo từ S6 của các khoá). | ☐ |
| FIX-223 | chưa gắn màn | `A11` Popup Thêm bài từ thư viện · `A11.04` | Chưa có thiết kế | Thêm `Cấp độ`: Mặc định = cấp độ của khoá đang mở; chọn cấp độ khác hoặc `Tất cả`. | ☐ |
| FIX-224 | chưa gắn màn | `A11` Popup Thêm bài từ thư viện · `A11.05` | Chưa có thiết kế | Thêm `Dạng câu`: `Tất cả` (mặc định) hoặc một loại câu hỏi mà bài có. | ☐ |
| FIX-225 | chưa gắn màn | `A11` Popup Thêm bài từ thư viện · `A11.06` | Chưa có thiết kế | Thêm `Bảng`: Checkbox, `STT`, `Bài nghe`, `Âm thanh` (phát được). Bài đã có trong khoá mờ, tick sẵn, không bỏ tick được. Không có cột `Bài học`. | ☐ |
| FIX-226 | chưa gắn màn | `A11` Popup Thêm bài từ thư viện · `A11.07` | Chưa có thiết kế | Thêm `Thêm vào cụm`: Dropdown cụm của tab, mặc định cụm đang chọn ở panel Cụm; chọn được `Chưa phân cụm`. | ☐ |
| FIX-227 | chưa gắn màn | `A11` Popup Thêm bài từ thư viện · `A11.08` | Chưa có thiết kế | Thêm `Footer`: `Đã chọn N bài nghe · M bài đã có trong khoá`; `Huỷ`; `Thêm N bài` (N không tính bài đã có; N = 0 thì mờ). | ☐ |
| FIX-228 | chưa gắn màn | `A12` Popup Tạo bài mới · `A12.01` | Chưa có thiết kế | Thêm `Tiêu đề`: `Tạo bài nghe mới` + `Bài mới được lưu vào Thư viện kỹ năng và thêm vào Kỹ năng (S6) của khoá này.` | ☐ |
| FIX-229 | chưa gắn màn | `A12` Popup Tạo bài mới · `A12.02` | Chưa có thiết kế | Thêm `Tên bài `: Bắt buộc, placeholder `Nhập tên bài (vd 对话：初次见面)`. | ☐ |
| FIX-230 | chưa gắn màn | `A12` Popup Tạo bài mới · `A12.03` | Chưa có thiết kế | Thêm `Thêm vào cụm`: Mặc định cụm đang chọn ở panel Cụm; có `Chưa phân cụm`. | ☐ |
| FIX-231 | chưa gắn màn | `A12` Popup Tạo bài mới · `A12.04` | Chưa có thiết kế | Thêm `Mô tả`: Không bắt buộc lúc tạo. | ☐ |
| FIX-232 | chưa gắn màn | `A12` Popup Tạo bài mới · `A12.05` | Chưa có thiết kế | Thêm `Âm thanh  (Nghe)`: Kéo thả hoặc chọn file `.mp3` ≤ 50MB (**khác Figma** `MP3 / WAV · 25 MB`); bắt buộc khi tạo bằng popup này. | ☐ |
| FIX-233 | chưa gắn màn | `A12` Popup Tạo bài mới · `A12.06` | Chưa có thiết kế | Thêm `Đoạn văn  (Đọc)`: Nhiều dòng, bắt buộc. | ☐ |
| FIX-234 | chưa gắn màn | `A12` Popup Tạo bài mới · `A12.07` | Chưa có thiết kế | Thêm `Tạo transcript bằng AI sau khi tải lên (Nghe)`: Checkbox, mặc định tick; tick thì sau khi tạo chạy Transcript AI cho bài. Đọc: `Tạo câu hỏi bằng AI sau khi tạo`, mặc định không tick. | ☐ |
| FIX-235 | chưa gắn màn | `A12` Popup Tạo bài mới · `A12.08` | Chưa có thiết kế | Thêm `Footer`: Ghi chú `Câu hỏi soạn ở trang chi tiết sau khi tạo`; `Huỷ`; `Tạo & mở chi tiết` (tạo xong mở drawer). | ☐ |
| FIX-236 | chưa gắn màn | `A15` Import / Export Excel · `A15.01` | Chưa có thiết kế | Thêm `listening_lesson (bắt buộc)`: Mỗi dòng = 1 bài nghe \| `id` → mã dòng trong file (chỉ để nối sheet, không lưu làm mã bài); `title` → `Tên bài`; `mean` → `Mô tả`. Bỏ qua `lesson_id`. | ☐ |
| FIX-237 | chưa gắn màn | `A15` Import / Export Excel · `A15.02` | Chưa có thiết kế | Thêm `listening`: Kịch bản, mỗi dòng = 1 lượt thoại, theo thứ tự dòng \| `listening_lesson_id` → bài nghe; `character` → người nói (`A`, `B`…); `sentence` → câu gốc; `phonetic` → `Phiên âm`; `furigana` → phiên âm có chú thích (tiếng Nhật); `mean` → `Dịch`; `start` / `end` → mốc thời gian. Bỏ qua `id`, `_start`, `_end`. | ☐ |
| FIX-238 | chưa gắn màn | `A15` Import / Export Excel · `A15.03` | Chưa có thiết kế | Thêm `listening_question`: Câu hỏi của bài nghe \| `listening_lesson_id` → bài nghe; `question`, `a`–`d`, `answer` (số thứ tự đáp án đúng 1–4), `explain` → câu hỏi trắc nghiệm của bài (lưu vào bộ câu hỏi Listening của Thư viện bài tập). | ☐ |
| FIX-239 | chưa gắn màn | `A15` Import / Export Excel · `A15.04` | Chưa có thiết kế | Thêm `reading_lesson (bắt buộc)`: Mỗi dòng = 1 bài đọc \| `id` → mã dòng trong file; `title` → `Tên bài`; `mean` → `Mô tả`; `source` → nguồn (ghi chú). Bỏ qua `lesson_id`. | ☐ |
| FIX-240 | chưa gắn màn | `A15` Import / Export Excel · `A15.05` | Chưa có thiết kế | Thêm `reading`: Đoạn văn, mỗi dòng = 1 câu, theo thứ tự dòng \| `reading_lesson_id` → bài đọc; `sentence` → câu của đoạn văn; `phonetic` → `Phiên âm`; `furigana` → phiên âm có chú thích; `mean` → `Dịch`. Bỏ qua `id`, `note`. | ☐ |
| FIX-241 | chưa gắn màn | `A15` Import / Export Excel · `A15.06` | Chưa có thiết kế | Thêm `reading_question`: Câu hỏi của bài đọc \| `reading_lesson_id` → bài đọc; `question`, `image`, `question_type`, `a`–`d`, `answer`, `explain` → câu hỏi (bộ câu hỏi Reading của Thư viện bài tập). | ☐ |
| FIX-242 | chưa gắn màn | `A15` Import / Export Excel · `A15.07` | Chưa có thiết kế | Thêm `reading_vocabulary`: Từ vựng liên quan của bài đọc \| **Bắt buộc có cột `reading_lesson_id`** → bài đọc; `word`, `phonetic`, `type`, `furigana`, `mean`, `example`, `example_phonetic`, `example_mean` → từ vựng. Từ trùng với Từ vựng S1 của khoá thì nối vào từ đó; chưa có thì tạo từ mới trong S1 của khoá rồi nối. | ☐ |
| FIX-243 | chưa gắn màn | `A15` Import / Export Excel · `A15.08` | Chưa có thiết kế | Thêm `Import — sheet`: Thiếu sheet bắt buộc (`listening_lesson` / `reading_lesson`) → báo `Không tìm thấy sheet listening_lesson`, không import. Sheet phụ trống / không có thì bài thiếu phần đó (tính thiếu thông tin), vẫn import. | ☐ |
| FIX-244 | chưa gắn màn | `A15` Import / Export Excel · `A15.09` | Chưa có thiết kế | Thêm `Import — dòng bắt buộc`: Sheet bài gốc: `title`. Sheet phụ: cột nối `listening_lesson_id` / `reading_lesson_id` phải trùng một `id` của sheet bài gốc trong cùng file. Nghe cho phép trống file âm thanh (bài tính thiếu thông tin). | ☐ |
| FIX-245 | chưa gắn màn | `A15` Import / Export Excel · `A15.10` | Chưa có thiết kế | Thêm `Import — lỗi dữ liệu`: Có dòng lỗi → **chặn cả file**, không thêm bài nào; danh sách lỗi theo **sheet + số dòng** (vd `reading_vocabulary dòng 12: thiếu reading_lesson_id`, `listening dòng 40: listening_lesson_id 999 không có trong listening_lesson`). | ☐ |
| FIX-246 | chưa gắn màn | `A15` Import / Export Excel · `A15.11` | Chưa có thiết kế | Thêm `Import — thành công`: Mỗi dòng sheet bài gốc tạo 1 bản ghi thư viện mới `Nháp` (kèm kịch bản / đoạn văn, câu hỏi, từ vựng liên quan), gắn vào khoá theo thứ tự dòng, vào cụm đang chọn; Toast `Thành Công` `Đã import N bài nghe.`; gợi ý Soát lỗi AI. Không tự dò trùng bài. | ☐ |
| FIX-247 | chưa gắn màn | `A15` Import / Export Excel · `A15.12` | Chưa có thiết kế | Thêm `Export`: Toàn bộ bài của tab trong khoá (không theo bộ lọc); tên file `<Khoá học>_<Kỹ năng>.xlsx`; cùng các sheet và cột như bảng trên (Nghe 3 sheet, Đọc 4 sheet, `reading_vocabulary` có `reading_lesson_id`), `id` đánh lại theo thứ tự trong file; thêm cột `cluster` (tên các cụm, cách nhau `;`) ở sheet bài gốc để tham khảo. Không có cột bài học. | ☐ |
| FIX-248 | chưa gắn màn | `A20` Cụm liên kết với Chi tiết bài học · `A20.01` | Chưa có thiết kế | Thêm `Nguồn dữ liệu`: Với mỗi loại kỹ năng, bài học có tối đa 1 cụm liên kết; tab hiện bài của cụm đó theo `Thứ tự trong cụm`. | ☐ |
| FIX-249 | chưa gắn màn | `A20` Cụm liên kết với Chi tiết bài học · `A20.02` | Chưa có thiết kế | Thêm `Bộ lọc loại`: `Nghe` (mặc định), `Đọc`, `Viết`, `Nói`; loại chưa liên kết hiện `Chưa có cụm <loại> liên kết với bài này` + hướng dẫn `Liên kết tại Kỹ năng (S6) › panel Cụm`. | ☐ |
| FIX-250 | chưa gắn màn | `A20` Cụm liên kết với Chi tiết bài học · `A20.03` | Chưa có thiết kế | Thêm `Tiêu đề khung`: Tên cụm đã liên kết (vd `Cụm nghe: Chào hỏi · 3 bài`). | ☐ |
| FIX-251 | chưa gắn màn | `A20` Cụm liên kết với Chi tiết bài học · `A20.04` | Chưa có thiết kế | Thêm `Đồng bộ`: Thêm / gỡ / chuyển bài trong cụm, đổi tên cụm, đổi liên kết ở S6 → bài học cập nhật ngay. | ☐ |

## Học Kỳ - Tab Kiểm tra

Cụm `test` · MD: `docs/he-thong-ma/test.md`

| Mã | Màn | Khu vực | Loại | Việc cần làm | Xong |
|---|---|---|---|---|---|
| FIX-252 | chưa gắn màn | `A01` Danh sách bài kiểm tra | Figma khác requirement | Khác Figma CD-KH-030300: card chưa có menu `⋮` để xoá bài. | ☐ |
| FIX-253 | chưa gắn màn | `A01` Danh sách bài kiểm tra · `A01.01` | Chưa có thiết kế | Thêm `Card bài kiểm tra`: Icon kéo thả bên trái; `ID` bài (10 chữ số, hệ thống tự sinh, màu xanh); tên bài; chip thời gian làm bài (vd `30m`); chip số câu hỏi; nút `>` mở popup bài kiểm tra. | ☐ |
| FIX-254 | chưa gắn màn | `A01` Danh sách bài kiểm tra · `A01.02` | Chưa có thiết kế | Thêm `Chip thời gian`: Thời gian làm bài rút gọn: `30m`, `1h30m`; chưa cấu hình hiển thị `—`. | ☐ |
| FIX-255 | chưa gắn màn | `A01` Danh sách bài kiểm tra · `A01.03` | Chưa có thiết kế | Thêm `Chip số câu`: Số câu của bộ câu hỏi (tự tính); `0` khi chưa có câu. | ☐ |
| FIX-256 | chưa gắn màn | `A01` Danh sách bài kiểm tra · `A01.04` | Chưa có thiết kế | Thêm `Thêm bài kiểm tra mới`: Ô nhập cuối danh sách; nhập tên và Enter (hoặc bấm `+`) tạo bài mới ở cuối, rồi mở popup bài vừa tạo ở tab Thông tin. | ☐ |
| FIX-257 | chưa gắn màn | `A01` Danh sách bài kiểm tra · `A01.05` | Chưa có thiết kế | Thêm `Kéo thả`: Kéo icon bên trái để đổi thứ tự bài; thứ tự lưu lên backend và dùng ở menu Bài Tập Về Nhà, lớp học. | ☐ |
| FIX-258 | chưa gắn màn | `A01` Danh sách bài kiểm tra · `A01.06` | Chưa có thiết kế | Thêm `Xoá bài`: Menu `⋮` trên card có `Xoá` (popup xác nhận `Xoá bài kiểm tra "<tên>"? Bộ câu hỏi của bài cũng sẽ bị xoá.`, nút `Huỷ` / `Xoá`); xoá mềm (**UI cần bổ sung**). | ☐ |
| FIX-259 | chưa gắn màn | `A01` Danh sách bài kiểm tra · `A01.07` | Chưa có thiết kế | Thêm `Thứ tự mặc định`: Theo thứ tự đã sắp; bài mới ở cuối. | ☐ |
| FIX-260 | chưa gắn màn | `A02` Popup bài kiểm tra — Tab Thông tin | Figma khác requirement | Khác Figma CD-KH-030310: ô `Số câu hỏi` đang vẽ như ô nhập, requirement là chỉ đọc; ô `Tổng điểm` trên Figma cần bỏ. Dòng Lưu ý ghi `Số câu hỏi và tổng điểm có thể được cập nhật`. | ☐ |
| FIX-261 | chưa gắn màn | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi | Figma khác requirement | Khác Figma: bộ câu hỏi đang vẽ thành màn riêng `CD-KH-030340` (mở từ `>`); requirement đặt trong tab `Bộ Câu Hỏi` của popup (**UI cần bổ sung**). | ☐ |
| FIX-262 | chưa gắn màn | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi · `A03.01` | Chưa có thiết kế | Thêm `Nút thao tác`: `Import Excel`, `Export Excel`, `+ Thêm câu hỏi`, `Generate` (Tạo câu hỏi bằng AI), `Soát lỗi bằng AI`. | ☐ |
| FIX-263 | chưa gắn màn | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi · `A03.02` | Chưa có thiết kế | Thêm `Thẻ tổng quan`: `Tổng số câu`, `Thời gian làm bài` (từ tab Thông tin), `Cơ cấu theo dạng câu`; tag `Thang 10`. | ☐ |
| FIX-264 | chưa gắn màn | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi · `A03.03` | Chưa có thiết kế | Thêm `Bảng câu hỏi`: Cột `STT`, `Bài tập (câu hỏi)`, `Loại câu`, `Đáp án đúng`, `Kiến thức / Kỹ năng`, `Điểm`, `⋮`; tìm kiếm, lọc `Loại câu`, `Kiến thức / Kỹ năng`; câu hỏi con mở / thu. | ☐ |
| FIX-265 | chưa gắn màn | `A03` Popup bài kiểm tra — Tab Bộ Câu Hỏi · `A03.04` | Chưa có thiết kế | Thêm `Thêm / sửa câu, Import / Export, Generate, Soát lỗi`: Theo `homework-test.md`: soạn câu bắt buộc Số câu, Loại câu, Kiến thức / Kỹ năng; Excel cùng cột bảng; Generate không giới hạn số câu, chọn dòng rồi thêm; câu AI có tag `AI`. | ☐ |
