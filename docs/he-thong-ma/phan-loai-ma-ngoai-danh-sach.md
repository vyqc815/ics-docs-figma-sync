# Phân loại 178 mã ngoài danh sách màn

Sinh tự động từ Figma (REST, chỉ đọc). Chưa thêm vào `figma.pages.json`, chưa sinh code.
Design duyệt các dòng có tin cậy *trung bình* / *thấp*. Màn cha suy từ prototype link, tên frame, mã và vị trí trên canvas (Section chỉ có một màn chính thì chắc chắn); “Hiển thị theo” là màn chính mở popup/trạng thái này (`?popup=`, `?state=`).

| Loại | Số mã |
|---|---|
| popup | 131 |
| trang-thai | 29 |
| dropdown | 13 |
| chua-ro | 5 |

Tin cậy: cao 108, trung bình 33, thấp 37.

## Cần duyệt

| Mã | Tên frame | Loại | Màn cha | Hiển thị theo | Tin cậy | Lý do / gợi ý khác |
|---|---|---|---|---|---|---|
| `ADM-GKS-010030` | Khảo sát / Giao khảo sát / Popup kết quả cá nhân | popup | ADM-GKS-010020 | ADM-GKS-010020 | thấp | tên: “Popup kết quả cá nhân”; màn cha có nhiều gợi ý; màn cha chỉ suy từ vị trí gần nhất; nguồn khác: ADM-GKS-010000 |
| `ADM-GKS-010040` | Khảo sát / Giao khảo sát / Popup chọn cuộc khảo sát | popup | ADM-GKS-010020 | ADM-GKS-010020 | thấp | tên: “Popup chọn cuộc khảo sát”; màn cha có nhiều gợi ý; màn cha chỉ suy từ vị trí gần nhất; nguồn khác: ADM-GKS-010000 |
| `ADM-GKS-020030` | Khảo sát / Giao khảo sát lớp / Popup kết quả cả lớp | popup | ADM-GKS-020020 | ADM-GKS-020020 | thấp | tên: “Popup kết quả cả lớp”; màn cha có nhiều gợi ý; màn cha chỉ suy từ vị trí gần nhất; nguồn khác: ADM-GKS-020000 |
| `ADM-GKS-020040` | Khảo sát / Giao khảo sát lớp / Popup chọn cuộc khảo sát | popup | ADM-GKS-020020 | ADM-GKS-020020 | thấp | tên: “Popup chọn cuộc khảo sát”; màn cha có nhiều gợi ý; màn cha chỉ suy từ vị trí gần nhất; nguồn khác: ADM-GKS-020000 |
| `ADM-GKS-030030` | Khảo sát / Giao khảo sát học viên / Popup kết quả cả trung tâm | popup | ADM-GKS-030020 | ADM-GKS-030020 | thấp | tên: “Popup kết quả cả trung tâm”; màn cha có nhiều gợi ý; màn cha chỉ suy từ vị trí gần nhất; nguồn khác: ADM-GKS-030000 |
| `ADM-GKS-030040` | Khảo sát / Giao khảo sát học viên / Popup chọn cuộc khảo sát | popup | ADM-GKS-030020 | ADM-GKS-030020 | thấp | tên: “Popup chọn cuộc khảo sát”; màn cha có nhiều gợi ý; màn cha chỉ suy từ vị trí gần nhất; nguồn khác: ADM-GKS-030000 |
| `ADM-GKS-030050` | Khảo sát / Giao khảo sát học viên / Popup giao khảo sát · Bắt buộc | popup | ADM-GKS-030045 | ADM-GKS-030020 | thấp | tên: “Popup giao khảo sát · Bắt buộc”; màn cha có nhiều gợi ý; nguồn khác: ADM-GKS-030000 |
| `ADM-GKS-030060` | Khảo sát / Giao khảo sát học viên / Popup giao khảo sát · Tuỳ chọn | popup | ADM-GKS-030045 | ADM-GKS-030020 | thấp | tên: “Popup giao khảo sát · Tuỳ chọn”; màn cha có nhiều gợi ý; nguồn khác: ADM-GKS-030000 |
| `ADM-GV-020310` | — | chua-ro | — | — | thấp | không còn frame, mã chỉ ghi trong bảng mục lục/ghi chú |
| `ADM-GV-020320` | — | chua-ro | — | — | thấp | không còn frame, mã chỉ ghi trong bảng mục lục/ghi chú |
| `ADM-HD-010011` | Hoá đơn / Popup thêm hoá đơn / Chọn đơn vị tiền | trang-thai | ADM-HD-010010 | ADM-HD-010000 | trung bình | trạng thái của popup: “Chọn đơn vị tiền”; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010000 |
| `ADM-HD-010012` | Hoá đơn / Popup thêm hoá đơn / Chọn học viên có sẵn | trang-thai | ADM-HD-010010 | ADM-HD-010000 | trung bình | trạng thái của popup: “Chọn học viên có sẵn”; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010000 |
| `ADM-HD-010013` | Hoá đơn / Popup thêm hoá đơn / Chọn học viên có sẵn / Mở danh sách | trang-thai | ADM-HD-010012 | ADM-HD-010000 | trung bình | trạng thái của popup: “Mở danh sách”; màn cha có nhiều gợi ý; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010000, ADM-HD-010010 |
| `ADM-HD-010061` | Hoá đơn / Popup thêm học phí / Học viên mới | trang-thai | ADM-HD-010060 | ADM-HD-010000 | trung bình | bước/trạng thái trong popup: “Học viên mới”; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010000 |
| `ADM-HD-010071` | Hoá đơn / Popup thêm người phụ trách / Chọn người phụ trách | trang-thai | ADM-HD-010070 | ADM-HD-010000 | trung bình | trạng thái của popup: “Chọn người phụ trách”; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010000 |
| `ADM-HD-010072` | Hoá đơn / Popup thêm người phụ trách / Chọn trạng thái | trang-thai | ADM-HD-010070 | ADM-HD-010000 | trung bình | trạng thái của popup: “Chọn trạng thái”; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010000 |
| `ADM-HD-010073` | Hoá đơn / Popup thêm người phụ trách / Chọn số KPI | trang-thai | ADM-HD-010070 | ADM-HD-010000 | trung bình | trạng thái của popup: “Chọn số KPI”; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010000 |
| `ADM-HD-010081` | Hoá đơn / Popup thêm / Chọn Xem lịch sử | trang-thai | ADM-HD-010000 | ADM-HD-010000 | trung bình | trạng thái của popup: “Chọn Xem lịch sử”; màn cha có nhiều gợi ý; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010080 |
| `ADM-HD-010082` | Hoá đơn / Popup thêm / Chọn Thêm Lịch Hẹn | trang-thai | ADM-HD-010000 | ADM-HD-010000 | trung bình | trạng thái của popup: “Chọn Thêm Lịch Hẹn”; màn cha có nhiều gợi ý; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010080 |
| `ADM-HD-010120` | Hoá đơn / Popup hồ sơ học viên / Lịch sử lớp | trang-thai | ADM-HD-010020 | ADM-HD-010000 | trung bình | bước/trạng thái trong popup: “Lịch sử lớp”; màn cha có nhiều gợi ý; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010000 |
| `ADM-HD-010231` | Hoá đơn / Popup hồ sơ học viên / Popup thêm ghi chú / Mở Loại | trang-thai | ADM-HD-010230 | ADM-HD-010000 | trung bình | trạng thái của popup: “Mở Loại”; nằm trong Section chỉ có màn chính ADM-HD-010000; nguồn khác: ADM-HD-010000 |
| `ADM-HV-010050` | Danh sách học viên / Popup thêm ghi chú | popup | ADM-HV-010000 | ADM-HV-010000 | thấp | không còn frame, mã chỉ ghi trong bảng mục lục/ghi chú (“Danh sách học viên / Popup thêm ghi chú”); tên: “Popup thêm ghi chú” |
| `ADM-KS-010030` | Khảo sát / Tạo khảo sát / Popup xem trước | popup | ADM-KS-010020 | ADM-KS-010020 | thấp | tên: “Popup xem trước”; màn cha có nhiều gợi ý; màn cha chỉ suy từ vị trí gần nhất; nguồn khác: ADM-KS-010000 |
| `ADM-KS-020030` | Khảo sát / Tạo khảo sát cho lớp / Popup xem trước | popup | ADM-KS-020020 | ADM-KS-020020 | thấp | tên: “Popup xem trước”; màn cha có nhiều gợi ý; màn cha chỉ suy từ vị trí gần nhất; nguồn khác: ADM-KS-020000 |
| `ADM-KS-030030` | Khảo sát / Tạo khảo sát học viên / Popup xem trước | popup | ADM-KS-030020 | ADM-KS-030020 | thấp | tên: “Popup xem trước”; màn cha có nhiều gợi ý; màn cha chỉ suy từ vị trí gần nhất; nguồn khác: ADM-KS-030000 |
| `ADM-LOP-020611` | Chi tiết lớp học / Tiêu chuẩn lớp - giáo viên / Popup thêm tiêu chuẩn  | trang-thai | ADM-LOP-020610 | ADM-LOP-020600 | trung bình | trạng thái của popup: “Xem trước”; nằm trong Section chỉ có màn chính ADM-LOP-020600; nguồn khác: ADM-LOP-020600 |
| `ADM-LOP-020612` | Chi tiết lớp học / Tiêu chuẩn lớp - giáo viên / Popup thêm tiêu chuẩn  | trang-thai | ADM-LOP-020611 | ADM-LOP-020600 | trung bình | trạng thái của popup: “Xem tiêu chí”; màn cha có nhiều gợi ý; nằm trong Section chỉ có màn chính ADM-LOP-020600; nguồn khác: ADM-LOP-020600, ADM-LOP-020610 |
| `ADM-LOP-020711` | Chi tiết lớp học / Quy trình lớp / Popup thêm quy trình / Xem trước | trang-thai | ADM-LOP-020710 | ADM-LOP-020700 | trung bình | trạng thái của popup: “Xem trước” |
| `ADM-LOP-020712` | Chi tiết lớp học / Quy trình lớp / Popup thêm quy trình / Xem tiêu chí | trang-thai | ADM-LOP-020711 | ADM-LOP-020700 | thấp | trạng thái của popup: “Xem tiêu chí”; màn cha có nhiều gợi ý; nguồn khác: ADM-LOP-020710 |
| `ADM-LOP-020811` | Chi tiết lớp học / CSKH / Popup thêm quy trình CSKH / Xem trước | trang-thai | ADM-LOP-020810 | ADM-LOP-020800 | trung bình | trạng thái của popup: “Xem trước” |
| `ADM-LOP-020812` | Chi tiết lớp học / CSKH / Popup thêm quy trình CSKH / Xem tiêu chí | trang-thai | ADM-LOP-020811 | ADM-LOP-020800 | thấp | trạng thái của popup: “Xem tiêu chí”; màn cha có nhiều gợi ý; nguồn khác: ADM-LOP-020810 |
| `ADM-LOP-040210` | Lớp học / Tổng quan / Popup lịch sử ghi chú | popup | ADM-LOP-040200 | ADM-LOP-040200 | trung bình | tên: “Popup lịch sử ghi chú”; Section chỉ có màn chính ADM-LOP-020100, khác màn cha đoán; nguồn khác: ADM-LOP-020100 |
| `ADM-LOP-040521` | Lớp học / Cài đặt / Lịch dạy / Popup thêm lịch dạy linh hoạt / Trùng l | trang-thai | ADM-LOP-040520 | ADM-LOP-040500 | trung bình | bước/trạng thái trong popup: “Trùng lịch cố định”; nằm trong Section chỉ có màn chính ADM-LOP-040500; nguồn khác: ADM-LOP-040500 |
| `ADM-LOP-050406` | Lớp học / Nhật ký / Tin nhắn / Popup xác nhận xoá | popup | ADM-LOP-050404 | ADM-LOP-050404 | trung bình | tên: “Popup xác nhận xoá”; màn cha chỉ suy từ vị trí gần nhất |
| `ADM-LOP-050407` | Lớp học / Nhật ký / Tin nhắn / Popup xác nhận gửi | popup | ADM-LOP-050404 | ADM-LOP-050404 | trung bình | tên: “Popup xác nhận gửi”; màn cha chỉ suy từ vị trí gần nhất |
| `ADM-LOP-050408` | Lớp học / Nhật ký / Tin nhắn / Popup tạo tin nhắn | popup | ADM-LOP-050404 | ADM-LOP-050404 | trung bình | tên: “Popup tạo tin nhắn”; màn cha chỉ suy từ vị trí gần nhất |
| `ADM-LOP-050410` | Lớp học / Nhật ký / Tin nhắn / Popup tạo tin nhắn bán tự động | popup | ADM-LOP-050404 | ADM-LOP-050404 | trung bình | tên: “Popup tạo tin nhắn bán tự động”; màn cha chỉ suy từ vị trí gần nhất |
| `ADM-SS-010012` | Ship sách / Popup thêm đơn sách / Đã chọn học viên có sẵn | trang-thai | ADM-SS-010010 | ADM-SS-010000 | trung bình | trạng thái của popup: “Đã chọn học viên có sẵn”; nằm trong Section chỉ có màn chính ADM-SS-010000; nguồn khác: ADM-SS-010000 |
| `ADM-SS-010034` | Ship sách / Popup xác nhận gửi tin nhắn / Đã chọn mẫu | trang-thai | ADM-SS-010000 | ADM-SS-010000 | trung bình | trạng thái của popup: “Đã chọn mẫu”; nằm trong Section chỉ có màn chính ADM-SS-010000 |
| `CD-CDO-010012` | Quản lý cấp độ / Popup kích hoạt công khai / Điền sai | trang-thai | CD-CDO-010010 | CD-CDO-010000 | trung bình | trạng thái của popup: “Điền sai”; nằm trong Section chỉ có màn chính CD-CDO-010000; nguồn khác: CD-CDO-010000 |
| `CD-DM-010057` | Quản lý danh mục / Popup danh mục & cấp độ / Quản lý danh mục / Thành  | trang-thai | CD-DM-010010 | CD-DM-010000 | trung bình | trạng thái của popup: “Thành công”; màn cha có nhiều gợi ý; nằm trong Section chỉ có màn chính CD-DM-010000; nguồn khác: CD-DM-010000 |
| `CD-DM-010062` | Quản lý danh mục / Popup kích hoạt công khai / Điền sai | trang-thai | CD-DM-010060 | CD-DM-010000 | trung bình | trạng thái của popup: “Điền sai” |
| `CD-KH-010012` | — | chua-ro | — | — | thấp | không còn frame, mã chỉ ghi trong bảng mục lục/ghi chú |
| `CD-KH-010013` | Quản lý khoá học / Popup kích hoạt công khai / ID hợp lệ | trang-thai | CD-KH-010010 | CD-KH-010000 | trung bình | trạng thái của popup: “ID hợp lệ” |
| `CD-KH-030220` | — | chua-ro | — | — | thấp | không còn frame, mã chỉ ghi trong bảng mục lục/ghi chú |
| `CD-KH-030320` | Học kỳ / Kiểm tra / Popup danh sách câu hỏi | popup | CD-KH-030300 | CD-KH-030300 | thấp | không còn frame, mã chỉ ghi trong bảng mục lục/ghi chú (“Học kỳ / Kiểm tra / Popup danh sách câu hỏi”); tên: “Popup danh sách câu hỏi” |
| `CD-KH-030330` | — | chua-ro | — | — | thấp | không còn frame, mã chỉ ghi trong bảng mục lục/ghi chú |
| `CD-KH-030344` | Học kỳ / Kiểm tra / Generate · Đang tạo bảng | trang-thai | CD-KH-030341 | CD-KH-030340 | trung bình | trạng thái của màn: “Generate · Đang tạo bảng”; màn cha có nhiều gợi ý; nằm trong Section chỉ có màn chính CD-KH-030340; nguồn khác: CD-KH-030300, CD-KH-030340, CD-KH-030342, CD-KH-030342-DK, CD-KH-030346, CD-KH-030350, CD-KH-030350-DK |
| `CD-KH-030345` | Học kỳ / Kiểm tra / Generate · Xác nhận bỏ bảng | trang-thai | CD-KH-030343 | CD-KH-030340 | trung bình | trạng thái của màn: “Generate · Xác nhận bỏ bảng”; màn cha có nhiều gợi ý; nằm trong Section chỉ có màn chính CD-KH-030340; nguồn khác: CD-KH-030300, CD-KH-030340, CD-KH-030343-DK |
| `CD-KH-030346` | Học kỳ / Kiểm tra / Generate · Lỗi | trang-thai | CD-KH-030300 | CD-KH-030300 | thấp | trạng thái của màn: “Generate · Lỗi”; màn cha có nhiều gợi ý; Section chỉ có màn chính CD-KH-030340, khác màn cha đoán; nguồn khác: CD-KH-030340 |
| `CD-KH-030350` | Học kỳ / Kiểm tra / Generate · Lỗi (tab Chọn kiến thức & kỹ năng) | trang-thai | CD-KH-030300 | CD-KH-030300 | trung bình | trạng thái của màn: “Generate · Lỗi (tab Chọn kiến thức & kỹ năng)”; Section chỉ có màn chính CD-KH-030340, khác màn cha đoán; nguồn khác: CD-KH-030340 |
| `CD-KH-040155` | Kiến thức (S1) / Từ vựng / Popup gỡ mục khỏi khoá | popup | CD-KH-040100 | CD-KH-040100 | thấp | tên: “Popup gỡ mục khỏi khoá”; màn cha có nhiều gợi ý; nguồn khác: CD-KH-040150 |
| `CD-KH-050155` | Kỹ năng (S6) / Nghe / Popup gỡ bài khỏi khoá | popup | CD-KH-050100 | CD-KH-050100 | thấp | tên: “Popup gỡ bài khỏi khoá”; màn cha có nhiều gợi ý; nguồn khác: CD-KH-050150 |
| `CD-KH-060120` | Bài tập về nhà / Popup soạn câu hỏi · Trắc nghiệm | popup | CD-KH-060110 | CD-KH-060100 | thấp | tên: “Popup soạn câu hỏi · Trắc nghiệm”; màn cha có nhiều gợi ý; nguồn khác: CD-KH-060100 |
| `CD-KH-060121` | Bài tập về nhà / Popup soạn câu hỏi · Sắp xếp | popup | CD-KH-060100 | CD-KH-060100 | thấp | tên: “Popup soạn câu hỏi · Sắp xếp”; màn cha có nhiều gợi ý; nguồn khác: CD-KH-060120 |
| `CD-KH-060122` | Bài tập về nhà / Popup soạn câu hỏi · Nối từ | popup | CD-KH-060100 | CD-KH-060100 | thấp | tên: “Popup soạn câu hỏi · Nối từ”; màn cha có nhiều gợi ý; nguồn khác: CD-KH-060120 |
| `CD-KH-060123` | Bài tập về nhà / Popup soạn câu hỏi · Nói | popup | CD-KH-060100 | CD-KH-060100 | thấp | tên: “Popup soạn câu hỏi · Nói”; màn cha có nhiều gợi ý; nguồn khác: CD-KH-060120 |
| `CD-KH-060124` | Bài tập về nhà / Popup soạn câu hỏi · Viết | popup | CD-KH-060100 | CD-KH-060100 | thấp | tên: “Popup soạn câu hỏi · Viết”; màn cha có nhiều gợi ý; nguồn khác: CD-KH-060120 |
| `CD-KH-060125` | Bài tập về nhà / Popup soạn câu hỏi · Câu hỏi con | popup | CD-KH-060100 | CD-KH-060100 | thấp | tên: “Popup soạn câu hỏi · Câu hỏi con”; màn cha có nhiều gợi ý; nguồn khác: CD-KH-060120 |
| `CD-KH-060140` | Bài tập về nhà / Kết quả Import | popup | CD-KH-060130 | CD-KH-060100 | thấp | tên: “Kết quả Import”, không ghi chữ Popup; màn cha có nhiều gợi ý; nguồn khác: CD-KH-060100 |
| `CD-KH-060141` | Bài tập về nhà / Kết quả Import | popup | CD-KH-060100 | CD-KH-060100 | thấp | tên: “Kết quả Import”, không ghi chữ Popup; màn cha có nhiều gợi ý; nguồn khác: CD-KH-060130, CD-KH-060140, CD-KH-060200 |
| `CD-KH-060150` | Bài tập về nhà / Soát lỗi bằng AI | popup | CD-KH-060100 | CD-KH-060100 | trung bình | tên: “Soát lỗi bằng AI”, không ghi chữ Popup; màn cha có nhiều gợi ý; nguồn khác: CD-KH-060130, CD-KH-060141, CD-KH-060200 |
| `GV-KS-010003` | Khảo sát / Dropdown thông báo khảo sát | dropdown | GV-KS-010000 | GV-KS-010000 | thấp | chỉ có frame bản tối -DK; tên: “Dropdown thông báo khảo sát” |
| `GV-LOP-030121` | Chi tiết lớp / Bài học / Popup bắt đầu buổi học | popup | GV-LOP-030100 | GV-LOP-030100 | thấp | tên: “Popup bắt đầu buổi học”; màn cha có nhiều gợi ý; nguồn khác: GV-LOP-030120 |
| `GV-LOP-030161` | Chi tiết lớp / Bài học / Popup tiếp tục buổi học | popup | GV-LOP-030150 | GV-LOP-030150 | thấp | tên: “Popup tiếp tục buổi học”; màn cha có nhiều gợi ý; nguồn khác: GV-LOP-030160 |
| `GV-LOP-040221` | Chi tiết lớp / Bài tập và Kiểm tra / Popup Thu hồi | popup | GV-LOP-040201 | GV-LOP-040200 | thấp | tên: “Popup Thu hồi”; màn cha có nhiều gợi ý; nguồn khác: GV-LOP-040200, GV-LOP-040210 |
| `GV-LOP-040310` | Chi tiết lớp / Bài tập và Kiểm tra / Popup chọn bài nguồn | popup | GV-LOP-040302 | GV-LOP-040300 | thấp | tên: “Popup chọn bài nguồn”; màn cha có nhiều gợi ý; nguồn khác: GV-LOP-040300 |
| `GV-LOP-040311` | Chi tiết lớp / Bài tập và Kiểm tra / Popup áp dụng nhận xét chung | popup | GV-LOP-040302 | GV-LOP-040300 | thấp | tên: “Popup áp dụng nhận xét chung”; màn cha có nhiều gợi ý; nguồn khác: GV-LOP-040310 |
| `GV-LS-010012` | Lịch sử & lương / Popup đề xuất tăng lương / Chọn lý do | trang-thai | GV-LS-010010 | GV-LS-010000 | trung bình | trạng thái của popup: “Chọn lý do” |
| `PRO-GD-010010` | Hồ sơ / Popup chọn màu giao diện | popup | MST-TK-020000 | MST-TK-020000 | trung bình | tên: “Popup chọn màu giao diện”; màn cha chỉ suy từ vị trí gần nhất |

## Đã chắc (tin cậy cao)

| Mã | Tên frame | Loại | Màn cha | Hiển thị theo |
|---|---|---|---|---|
| `ADM-GC-010010` | Gift code / Popup tạo gift code | popup | ADM-GC-010001 | ADM-GC-010001 |
| `ADM-GC-010020` | Gift code / Popup cập nhật gift code | popup | ADM-GC-010001 | ADM-GC-010001 |
| `ADM-GKS-010005` | Khảo sát / Giao khảo sát / Popup chọn trung tâm | popup | ADM-GKS-010000 | ADM-GKS-010000 |
| `ADM-GKS-010010` | Khảo sát / Giao khảo sát / Popup chọn giáo viên | popup | ADM-GKS-010000 | ADM-GKS-010000 |
| `ADM-GKS-020005` | Khảo sát / Giao khảo sát lớp / Popup chọn trung tâm | popup | ADM-GKS-020000 | ADM-GKS-020000 |
| `ADM-GKS-020010` | Khảo sát / Giao khảo sát lớp / Popup chọn lớp | popup | ADM-GKS-020000 | ADM-GKS-020000 |
| `ADM-GV-010010` | Danh sách giáo viên / Popup tìm kiếm nâng cao | popup | ADM-GV-010000 | ADM-GV-010000 |
| `ADM-GV-010020` | Danh sách giáo viên / Popup thêm giáo viên | popup | ADM-GV-010000 | ADM-GV-010000 |
| `ADM-GV-010030` | Danh sách giáo viên / Popup thêm tag | popup | ADM-GV-010000 | ADM-GV-010000 |
| `ADM-GV-010040` | Danh sách giáo viên / Popup thêm lịch hẹn | popup | ADM-GV-010000 | ADM-GV-010000 |
| `ADM-GV-010042` | Danh sách giáo viên / Popup thêm lịch hẹn / Đang mở | dropdown | ADM-GV-010040 | ADM-GV-010000 |
| `ADM-GV-010050` | Danh sách giáo viên / Popup danh sách lịch hẹn | popup | ADM-GV-010000 | ADM-GV-010000 |
| `ADM-GV-020210` | Chi tiết giáo viên / Danh sách lớp / Popup chỉnh sửa lương | popup | ADM-GV-020200 | ADM-GV-020200 |
| `ADM-GV-020520` | Chi tiết giáo viên / Quản lý đăng ký lịch / Popup đăng ký khung giờ | popup | ADM-GV-020500 | ADM-GV-020500 |
| `ADM-HD-010010` | Hoá đơn / Popup thêm hoá đơn | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HD-010030` | Hoá đơn / Popup chỉnh sửa hoá đơn | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HD-010050` | Hoá đơn / Popup chọn học viên đã liên kết | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HD-010060` | Hoá đơn / Popup thêm học phí | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HD-010070` | Hoá đơn / Popup thêm người phụ trách | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HD-010080` | Hoá đơn / Popup thêm (thao tác học viên) | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HD-010090` | Hoá đơn / Popup thêm tag | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HD-010110` | Hoá đơn / Popup thêm lịch hẹn | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HD-010111` | Hoá đơn / Popup cập nhật lịch hẹn | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HD-010130` | Hoá đơn / Popup danh sách lịch hẹn | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HD-010230` | Hoá đơn / Popup hồ sơ học viên / Popup thêm ghi chú | popup | ADM-HD-010000 | ADM-HD-010000 |
| `ADM-HV-010010` | Danh sách học viên / Popup thêm học viên | popup | ADM-HV-010000 | ADM-HV-010000 |
| `ADM-HV-010012` | Danh sách học viên / Popup thêm học viên / Dropdown cấp độ | dropdown | ADM-HV-010010 | ADM-HV-010000 |
| `ADM-HV-010060` | Danh sách học viên / Popup thêm lịch hẹn | popup | ADM-HV-010000 | ADM-HV-010000 |
| `ADM-HV-010062` | Danh sách học viên / Popup thêm lịch hẹn / Đang mở | dropdown | ADM-HV-010060 | ADM-HV-010000 |
| `ADM-HV-010070` | Danh sách học viên / Popup danh sách lịch hẹn | popup | ADM-HV-010000 | ADM-HV-010000 |
| `ADM-HV-010102` | Danh sách học viên / Dropdown · Trạng thái | dropdown | ADM-HV-010000 | ADM-HV-010000 |
| `ADM-HV-010202` | Danh sách học viên / Dropdown · Tag | dropdown | ADM-HV-010000 | ADM-HV-010000 |
| `ADM-HV-020610` | Chi tiết học viên / Ghi chú / Popup thêm ghi chú | popup | ADM-HV-020600 | ADM-HV-020600 |
| `ADM-LGV-020010` | Lương / Đề xuất tăng lương / Popup duyệt đề xuất | popup | ADM-LGV-020000 | ADM-LGV-020000 |
| `ADM-LHN-010110` | Lịch hẹn / Hẹn lớp / Popup thêm lịch hẹn | popup | ADM-LHN-010100 | ADM-LHN-010100 |
| `ADM-LOP-010002` | Danh sách lớp học / Dropdown chọn nhân sự (đang mở) | dropdown | ADM-LOP-010000 | ADM-LOP-010000 |
| `ADM-LOP-010004` | Danh sách lớp học / Ẩn hiện cột | dropdown | ADM-LOP-010000 | ADM-LOP-010000 |
| `ADM-LOP-010010` | Danh sách lớp học / Popup thêm lớp học | popup | ADM-LOP-010000 | ADM-LOP-010000 |
| `ADM-LOP-010040` | Danh sách lớp học / Popup thêm tag | popup | ADM-LOP-010000 | ADM-LOP-010000 |
| `ADM-LOP-010050` | Danh sách lớp học / Popup thêm lịch hẹn | popup | ADM-LOP-010000 | ADM-LOP-010000 |
| `ADM-LOP-020610` | Chi tiết lớp học / Tiêu chuẩn lớp - giáo viên / Popup thêm tiêu chuẩn | popup | ADM-LOP-020600 | ADM-LOP-020600 |
| `ADM-LOP-020710` | Chi tiết lớp học / Quy trình lớp / Popup thêm quy trình | popup | ADM-LOP-020700 | ADM-LOP-020700 |
| `ADM-LOP-020810` | Chi tiết lớp học / CSKH / Popup thêm quy trình CSKH | popup | ADM-LOP-020800 | ADM-LOP-020800 |
| `ADM-LOP-040220` | Lớp học / Cài đặt / Học viên / Popup lịch sử trạng thái | popup | ADM-LOP-040200 | ADM-LOP-040200 |
| `ADM-LOP-040230` | Lớp học / Cài đặt / Học viên / Popup thêm học phí | popup | ADM-LOP-040200 | ADM-LOP-040200 |
| `ADM-LOP-040520` | Lớp học / Cài đặt / Lịch dạy / Popup thêm lịch dạy linh hoạt | popup | ADM-LOP-040500 | ADM-LOP-040500 |
| `ADM-LOP-040710` | Lớp học / Cài đặt / KPI / Popup chỉnh sửa KPI | popup | ADM-LOP-040700 | ADM-LOP-040700 |
| `ADM-LOP-040712` | Lớp học / Cài đặt / KPI / Popup chỉnh sửa KPI / Đang mở | dropdown | ADM-LOP-040710 | ADM-LOP-040700 |
| `ADM-LOP-040810` | Lớp học / Cài đặt / OT / Popup chỉnh sửa OT | popup | ADM-LOP-040800 | ADM-LOP-040800 |
| `ADM-LOP-040812` | Lớp học / Cài đặt / OT / Popup chỉnh sửa OT / Đang mở | dropdown | ADM-LOP-040810 | ADM-LOP-040800 |
| `ADM-MV-020010` | Move video / Danh sách video / Popup đổi tên video | popup | ADM-MV-020000 | ADM-MV-020000 |
| `ADM-MV-020020` | Move video / Danh sách video / Popup xác nhận xoá | popup | ADM-MV-020000 | ADM-MV-020000 |
| `ADM-MV-020030` | Move video / Danh sách video / Popup đổi tên & move video | popup | ADM-MV-020000 | ADM-MV-020000 |
| `ADM-SS-010010` | Ship sách / Popup thêm đơn sách | popup | ADM-SS-010000 | ADM-SS-010000 |
| `ADM-SS-010020` | Ship sách / Popup xác nhận xoá đơn sách | popup | ADM-SS-010000 | ADM-SS-010000 |
| `ADM-SS-010032` | Ship sách / Popup xác nhận gửi tin nhắn / Đang mở | dropdown | ADM-SS-010000 | ADM-SS-010000 |
| `ADM-SS-010040` | Ship sách / Popup cập nhật đơn sách | popup | ADM-SS-010000 | ADM-SS-010000 |
| `ADM-TAG-010010` | Tag / Popup thêm tag | popup | ADM-TAG-010000 | ADM-TAG-010000 |
| `ADM-TAG-010020` | Tag / Popup thêm nhóm tag | popup | ADM-TAG-010000 | ADM-TAG-010000 |
| `CD-BL-010010` | Báo lỗi / Popup gửi báo lỗi · Đối tượng PPT, PDF, BTVN | popup | CD-BL-010000 | CD-BL-010000 |
| `CD-BL-010011` | Báo lỗi / Popup gửi báo lỗi · Đối tượng Khác | popup | CD-BL-010000 | CD-BL-010000 |
| `CD-BL-010020` | Báo lỗi / Popup chi tiết báo lỗi · Đang xử lý | popup | CD-BL-010000 | CD-BL-010000 |
| `CD-BL-010030` | Báo lỗi / Popup chi tiết báo lỗi · Hoàn thành | popup | CD-BL-010000 | CD-BL-010000 |
| `CD-BL-010050` | Báo lỗi / Popup chi tiết báo lỗi · Hoàn thành · Nhập kết quả xử lý | popup | CD-BL-010040 | CD-BL-010000 |
| `CD-CDO-010010` | Quản lý cấp độ / Popup kích hoạt công khai | popup | CD-CDO-010000 | CD-CDO-010000 |
| `CD-DM-010060` | Quản lý danh mục / Popup kích hoạt công khai | popup | CD-DM-010000 | CD-DM-010000 |
| `CD-KH-010010` | Quản lý khoá học / Popup kích hoạt công khai | popup | CD-KH-010000 | CD-KH-010000 |
| `CD-KH-020261` | Lộ trình / Popup xoá bài học | popup | CD-KH-020260 | CD-KH-020260 |
| `CD-KH-030110` | Học kỳ / Thông tin / Popup thêm kỳ vào Tổng ôn | popup | CD-KH-030100 | CD-KH-030100 |
| `CD-KH-030120` | Học kỳ / Thông tin / Popup bỏ kỳ khỏi Tổng ôn | popup | CD-KH-030100 | CD-KH-030100 |
| `CD-KH-030341` | Học kỳ / Kiểm tra / Popup Generate · Nhập prompt | popup | CD-KH-030340 | CD-KH-030340 |
| `CD-KH-030342` | Học kỳ / Kiểm tra / Popup Generate · Chọn kiến thức & kỹ năng | popup | CD-KH-030341 | CD-KH-030340 |
| `CD-KH-030348` | Học kỳ / Kiểm tra / Popup chọn loại câu | popup | CD-KH-030340 | CD-KH-030340 |
| `CD-KH-030349` | Học kỳ / Kiểm tra / Popup soạn câu hỏi · Trắc nghiệm | popup | CD-KH-030348 | CD-KH-030340 |
| `CD-KH-060110` | Bài tập về nhà / Popup chọn loại câu | popup | CD-KH-060100 | CD-KH-060100 |
| `CD-KH-070103` | Thư viện / Popup xoá mục | popup | CD-KH-070102 | CD-KH-070100 |
| `CH-BL-010010` | Báo lỗi / Popup gửi báo lỗi · Đối tượng PPT, PDF, BTVN | popup | CH-BL-010000 | CH-BL-010000 |
| `CH-BL-010011` | Báo lỗi / Popup gửi báo lỗi · Đối tượng Khác | popup | CH-BL-010000 | CH-BL-010000 |
| `CH-BL-010020` | Báo lỗi / Popup chi tiết báo lỗi · Đang xử lý | popup | CH-BL-010000 | CH-BL-010000 |
| `CH-BL-010030` | Báo lỗi / Popup chi tiết báo lỗi · Hoàn thành | popup | CH-BL-010000 | CH-BL-010000 |
| `CH-BL-010050` | Báo lỗi / Popup chi tiết báo lỗi · Hoàn thành · Nhập kết quả xử lý | popup | CH-BL-010040 | CH-BL-010000 |
| `CH-BL-010070` | Báo lỗi / Popup nhắc báo lỗi chưa xử lý (mỗi ngày) | popup | CH-BL-010040 | CH-BL-010000 |
| `GV-BL-010010` | Báo lỗi / Popup gửi báo lỗi · Giáo trình | popup | GV-BL-010000 | GV-BL-010000 |
| `GV-BL-010020` | Báo lỗi / Popup chi tiết báo lỗi · Đang mở | popup | GV-BL-010000 | GV-BL-010000 |
| `GV-BL-010030` | Báo lỗi / Popup chi tiết báo lỗi · Đã giải quyết | popup | GV-BL-010000 | GV-BL-010000 |
| `GV-KS-010001` | Khảo sát / Popup thông báo khảo sát mới | popup | GV-KS-010000 | GV-KS-010000 |
| `GV-KS-010011` | Khảo sát / Popup xác nhận gửi | popup | GV-KS-010010 | GV-KS-010010 |
| `GV-KS-010012` | Khảo sát / Popup gửi thành công | popup | GV-KS-010010 | GV-KS-010010 |
| `GV-KS-010021` | Khảo sát / Popup câu trả lời của bạn | popup | GV-KS-010020 | GV-KS-010020 |
| `GV-LD-020010` | Lịch dạy / Quản lý đăng ký lịch / Popup đăng ký khung giờ | popup | GV-LD-020000 | GV-LD-020000 |
| `GV-LOP-020020` | Chi tiết lớp / Tổng quan / Popup Ghi chú theo bài | popup | GV-LOP-020000 | GV-LOP-020000 |
| `GV-LOP-020030` | Chi tiết lớp / Tổng quan / Popup Thời gian từng phần | popup | GV-LOP-020000 | GV-LOP-020000 |
| `GV-LOP-030120` | Chi tiết lớp / Bài học / Popup chọn lịch dạy | popup | GV-LOP-030100 | GV-LOP-030100 |
| `GV-LOP-030131` | Chi tiết lớp / Bài học / Popup kết thúc buổi học | popup | GV-LOP-030130 | GV-LOP-030130 |
| `GV-LOP-030141` | Chi tiết lớp / Bài học / Popup hoàn thành buổi học | popup | GV-LOP-030140 | GV-LOP-030140 |
| `GV-LOP-040211` | Chi tiết lớp / Bài tập và Kiểm tra / Popup Giao bài | popup | GV-LOP-040210 | GV-LOP-040200 |
| `GV-LOP-040340` | Chi tiết lớp / Bài tập và Kiểm tra / Popup Hoàn thành chấm | popup | GV-LOP-040300 | GV-LOP-040300 |
| `GV-LS-010010` | Lịch sử & lương / Popup đề xuất tăng lương | popup | GV-LS-010000 | GV-LS-010000 |
| `GV-LS-010013` | Lịch sử & lương / Popup lịch sử đề xuất | popup | GV-LS-010011 | GV-LS-010011 |
| `GV-LS-010015` | Lịch sử & lương / Popup xác nhận gửi đề xuất | popup | GV-LS-010010 | GV-LS-010000 |
| `GV-LS-010016` | Lịch sử & lương / Popup xác nhận huỷ đề xuất | popup | GV-LS-010014 | GV-LS-010014 |
| `MST-TK-010010` | Tài khoản / Popup thêm tài khoản | popup | MST-TK-010000 | MST-TK-010000 |
| `MST-TK-010020` | Tài khoản / Danh sách tài khoản / Popup xác nhận xoá | popup | MST-TK-010000 | MST-TK-010000 |
| `MST-TK-010030` | Tài khoản / Danh sách tài khoản / Popup đặt lại mật khẩu | popup | MST-TK-010000 | MST-TK-010000 |
| `SP-LHP-010010` | Lịch họp / Popup chi tiết cuộc họp | popup | SP-LHP-010000 | SP-LHP-010000 |
| `SP-TASK-030002` | Quy trình / Ca trực / Dropdown thời gian (đang mở) | dropdown | SP-TASK-030000 | SP-TASK-030000 |
| `SP-TASK-030004` | Quy trình / Ca trực / Dropdown ca (đang mở) | dropdown | SP-TASK-030000 | SP-TASK-030000 |
| `SP-TASK-030010` | Quy trình / Ca trực / Dialog người phụ trách | popup | SP-TASK-030000 | SP-TASK-030000 |
