# Requirement ↔ màn Figma ICS

- 77 file requirement; 62 đã nối được với màn.
- 128 màn chính; 108 có requirement, 20 chưa có.

## Màn chính chưa có requirement

- `ADM-GC-010000` Gift code / Danh sách gift code
- `ADM-KPI-010000` KPI & OT / Danh sách KPI
- `ADM-KPI-020000` KPI & OT / Danh sách OT
- `ADM-LSP-010000` Lương / Lương SP
- `ADM-TASK-010000` Task tuần
- `ADM-TASK-020000` Task ngày
- `ADM-TASK-030000` Task trực
- `ADM-TK-010000` Thống kê / Chỉ số
- `ADM-TL-010000` Tài liệu / Chi tiết tài liệu
- `ADM-TT-010000` Tương tác / Danh sách log
- `ADM-VC-010000` Voucher / Danh sách voucher
- `CD-KH-070200` Thư viện / Kỹ năng / Nghe
- `CD-MS-010000` Mindset thiết kế khoá học
- `CD-TL-010000` Tools / Giọng đọc / Đọc văn bản
- `CD-TL-010100` Tools / Giọng đọc / Hội thoại
- `CD-TL-010300` Tools / Giọng đọc / Âm tiết pinyin · Đang tạo
- `GV-LOP-040300` Chi tiết lớp / Bài tập và Kiểm tra / Màn chấm bài
- `GV-TC-010000` Trang chủ / Thống kê theo tháng
- `SYS-ERR-010000` Lỗi 403 · Không có quyền truy cập
- `SYS-ERR-020000` Lỗi 404 · Không tìm thấy trang

## Requirement chưa có màn Figma

- `action_board_requirement/action_board_requirements.md` — Chưa thấy màn Action Board trên Figma
- `class_handler_support/statistics/statistics.md` — Chưa thấy màn Thống kê của Phụ trách lớp (chỉ có ADM-TK-010000 của Admin)
- `login_ics/login_requirements.md` — Màn đăng nhập nằm ở mục 🚪 LOG IN nhưng chưa có mã màn
- `management_requirement/class_management/class_detail_meetings_requirements.md` — Admin chưa có màn Cuộc họp trong chi tiết lớp
- `management_requirement/class_management/class_detail_self_study_requirements.md` — Admin chưa có màn Tự học trong chi tiết lớp
- `receipt_management/tuition_detail/tuition_detail.md` — Có thể là ADM-HV-020300 (Học phí) hoặc phần xổ xuống của ADM-HD-010000
- 9 file `student_app/*` — app học viên, không nằm trong file Figma ICS

## Mã màn ghi trong requirement nhưng chưa có trong danh sách 608 màn

- `ADM-LGV-020010` (teacher_role/history_and_salary/history_and_salary_requirements.md)
- `CD-KH-030341` (course_management/homework-test/homework-test.md)
- `CD-KH-030342` (course_management/homework-test/homework-test.md)
- `CD-KH-030344` (course_management/homework-test/homework-test.md)
- `CD-KH-030345` (course_management/homework-test/homework-test.md)
- `CD-KH-030346` (course_management/homework-test/homework-test.md)
- `CD-KH-030349` (course_management/homework-test/homework-test.md)
- `CD-KH-030400` (course_management/knowledge-s1/knowledge-s1.md)
- `CD-KH-030540` (course_management/knowledge-s1/knowledge-s1.md)
- `CD-KH-050155` (course_management/skill-s6/skill-s6.md)
- `CD-KH-060110` (course_management/homework-test/homework-test.md)
- `CD-KH-060120` (course_management/homework-test/homework-test.md)
- `GV-LD-020010` (teacher_role/teaching_schedule/teaching_schedule_requirements.md)
- `GV-LS-010010` (teacher_role/history_and_salary/history_and_salary_requirements.md)
- `GV-LS-010012` (teacher_role/history_and_salary/history_and_salary_requirements.md)
- `GV-LS-010013` (teacher_role/history_and_salary/history_and_salary_requirements.md)
- `GV-LS-010015` (teacher_role/history_and_salary/history_and_salary_requirements.md)
- `GV-LS-010016` (teacher_role/history_and_salary/history_and_salary_requirements.md)

## Bảng nối

| Requirement | Màn Figma | Cách nối |
|---|---|---|
| `account_management/account_management.md` — Quản lý tài khoản (Master) | MST-TK-010000, MST-TK-020000 | ghép theo tiêu đề |
| `action_board_requirement/action_board_requirements.md` — Action Board | — | Chưa thấy màn Action Board trên Figma |
| `appointment_requirement/appointment_requirements.md` — Lịch hẹn — Danh sách, thêm lịch hẹn và Review | ADM-LHN-010100, ADM-LHN-010200, ADM-LHN-010300, ADM-LHN-010400, ADM-LHN-020000 | ghép theo tiêu đề |
| `class_handler_support/overview/overview.md` — [Phụ trách lớp] Trang chủ — Thống kê tổng quan | CH-TC-010000 | ghép theo tiêu đề |
| `class_handler_support/process/process.md` — [Phụ trách lớp] Quy trình — Task Hôm Nay, Task Tuần Này, Task Tháng Này, Ca Trực, Task Khác | SP-TASK-010000, SP-TASK-020000, SP-TASK-030000 | ghép theo tiêu đề |
| `class_handler_support/statistics/statistics.md` — [Phụ trách lớp] Thống kê | — | Chưa thấy màn Thống kê của Phụ trách lớp (chỉ có ADM-TK-010000 của Admin) |
| `course_management/course_management.md` — Quản lý khoá học | CD-KH-010000 | ghép theo tiêu đề |
| `course_management/homework-test/homework-test.md` — [CD] Bài tập về nhà và Kiểm tra | CD-KH-030340, CD-KH-030341, CD-KH-030342, CD-KH-030343, CD-KH-030344, CD-KH-030345, CD-KH-030346, CD-KH-030347, CD-KH-030349, CD-KH-060100, CD-KH-060110, CD-KH-060120, CD-KH-060130, CD-KH-060200 | ghi trong file |
| `course_management/knowledge-s1/knowledge-s1.md` — Kiến thức (S1) | CD-KH-030270, CD-KH-030400, CD-KH-030540, CD-KH-040100, CD-KH-040200 | ghi trong file |
| `course_management/learning-path-s4/learning-path-s4.md` — Lộ Trình (S4) | CD-KH-020200 | ghép theo tiêu đề |
| `course_management/library/library.md` — [CD] Thư viện | CD-KH-070160, CD-KH-070161, CD-KH-070170, CD-KH-070171, CD-KH-070301, CD-KH-070302, CD-KH-070303, CD-KH-070304, CD-KH-070305 | ghi trong file |
| `course_management/overview-s2/overview-s2.md` — Tổng quan (S2) | CD-KH-020100 | ghép theo tiêu đề |
| `course_management/semester/information/information.md` — Học Kỳ | CD-KH-030100 | ghép theo tiêu đề |
| `course_management/semester/lesson/lesson.md` — Học Kỳ - Tab Bài học | CD-KH-030200 | ghép theo tiêu đề |
| `course_management/semester/test/test.md` — Học Kỳ - Tab Kiểm tra | CD-KH-030300, CD-KH-030310, CD-KH-030340 | ghi trong file |
| `course_management/skill-s6/skill-s6.md` — Kỹ năng (S6) — Nghe / Đọc | CD-KH-050100, CD-KH-050110, CD-KH-050120, CD-KH-050130, CD-KH-050140, CD-KH-050150, CD-KH-050155, CD-KH-050160, CD-KH-050180, CD-KH-050190, CD-KH-050200, CD-KH-050300, CD-KH-050400, CD-KH-070301, CD-KH-070302 | ghi trong file |
| `curriculum_management_requirement/category_management/category_management.md` — Quản lý danh sách danh mục | CD-DM-010000 | ghép theo tiêu đề |
| `curriculum_management_requirement/category_management/detail_category.md` — Chi tiết danh mục (Popup) | CD-DM-010000 | ghép theo tiêu đề |
| `curriculum_management_requirement/level_management/level_management.md` — Quản lý danh sách cấp độ | CD-CDO-010000 | ghép theo tiêu đề |
| `curriculum_management_requirement/level_management/level_management_requirements.md` — Quản lý cấp độ | CD-CDO-010000 | ghép theo tiêu đề |
| `login_ics/login_requirements.md` — Đăng nhập ICS | — | Màn đăng nhập nằm ở mục 🚪 LOG IN nhưng chưa có mã màn |
| `management_requirement/class_management/class_creation_requirements.md` — Tạo lớp học | ADM-LOP-010000 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_appointments_requirements.md` — Chi tiết lớp học — Menu Nhật ký — Tab Lịch hẹn | ADM-LOP-050100 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_homework_tests_requirements.md` — Chi tiết lớp học — Menu Bài tập và kiểm tra | ADM-LOP-020300 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_information_requirements.md` — Chi tiết lớp học — Tab Thông tin | ADM-LOP-040100 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_invoices_requirements.md` — Chi tiết lớp học — Tab Hóa đơn | ADM-LOP-040600 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_journal_requirements.md` — Chi tiết lớp học — Menu Nhật ký | ADM-LOP-050100 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_kpi_requirements.md` — Chi tiết lớp học — Tab KPI của Phụ trách lớp | ADM-LOP-040700 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_lessons_requirements.md` — Chi tiết lớp học — Menu Bài học | ADM-LOP-030100, ADM-LOP-030200, ADM-LOP-030300, ADM-LOP-030400, ADM-LOP-030500 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_meetings_requirements.md` — Chi tiết lớp học — Tab Cuộc họp | — | Admin chưa có màn Cuộc họp trong chi tiết lớp |
| `management_requirement/class_management/class_detail_messages_requirements.md` — Chi tiết lớp học — Menu Nhật ký — Tab Tin nhắn | ADM-LOP-050100 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_notes_requirements.md` — Chi tiết lớp học — Menu Nhật ký — Tab Ghi chú | ADM-LOP-050100 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_ot_requirements.md` — Chi tiết lớp học — Tab OT của Phụ trách lớp | ADM-LOP-040800 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_overview_requirements.md` — Chi tiết lớp học — Menu Tổng quan | ADM-LOP-020100 | ghi trong file |
| `management_requirement/class_management/class_detail_processes_requirements.md` — Chi tiết lớp học — Tiêu chuẩn lớp - giáo viên, CSKH và Quy trình lớp | ADM-LOP-020600, ADM-LOP-020700, ADM-LOP-020800 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_schedule_requirements.md` — Chi tiết lớp học — Tab Lịch dạy | ADM-LOP-040500 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_self_study_requirements.md` — Chi tiết lớp học — Menu Tự học | — | Admin chưa có màn Tự học trong chi tiết lớp |
| `management_requirement/class_management/class_detail_students_requirements.md` — Chi tiết lớp học — Tab Học viên | ADM-LOP-040200 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_support_handlers_requirements.md` — Chi tiết lớp học — Tab Trợ giảng & Phụ trách lớp | ADM-LOP-040400 | ghép theo tiêu đề |
| `management_requirement/class_management/class_detail_teachers_requirements.md` — Chi tiết lớp học — Tab Giáo viên | ADM-LOP-040300 | ghép theo tiêu đề |
| `management_requirement/class_management/class_management_requirements.md` — Quản lý danh sách lớp học | ADM-LOP-010000 | ghép theo tiêu đề |
| `management_requirement/salary_management/teacher_salary_requirements.md` — Lương giáo viên — Admin | ADM-LGV-010000 | ghi trong file |
| `management_requirement/schedule_management/teaching_schedule_requirements.md` — Lịch dạy tổng | ADM-LD-010000, ADM-LD-010010 | ghi trong file |
| `management_requirement/student_management/student_detail_requirements.md` — Chi tiết học viên | ADM-HV-020100, ADM-HV-020200, ADM-HV-020300, ADM-HV-020400, ADM-HV-020500, ADM-HV-020600 | ghép theo tiêu đề |
| `management_requirement/student_management/student_management_requirements.md` — Quản lý học viên | ADM-HV-010000 | ghép theo tiêu đề |
| `management_requirement/teacher_management/teacher_detail_requirements.md` — [Admin] Chi tiết giáo viên | ADM-GV-020100, ADM-GV-020200, ADM-GV-020300, ADM-GV-020400, ADM-GV-020500, ADM-GV-020600 | ghép theo tiêu đề |
| `management_requirement/teacher_management/teacher_management_requirements.md` — [Admin] Quản lý danh sách giáo viên | ADM-GV-010000 | ghép theo tiêu đề |
| `meeting_schedule/meeting_schedule.md` — [Phụ trách lớp, Admin] Lịch Họp | SP-LHP-010000, SP-LHP-020000 | ghép theo tiêu đề |
| `process_definition_requirement/process_definition_requirements.md` — Define quy trình | ADM-QT-010000, ADM-QT-020000 | ghép theo tiêu đề |
| `receipt_management/receipt/receipt.md` — Hoá Đơn | ADM-HD-010000 | ghép theo tiêu đề |
| `receipt_management/tuition_detail/tuition_detail.md` —  | — | Có thể là ADM-HV-020300 (Học phí) hoặc phần xổ xuống của ADM-HD-010000 |
| `ship_books/message_template/message_template.md` — Template Tin Nhắn | ADM-TN-010000 | ghép theo tiêu đề |
| `ship_books/ship_books/ship_books.md` — Ship Sách | ADM-SS-010000 | ghép theo tiêu đề |
| `student_app/account/account.md` — [Học viên] Tài khoản | — | App học viên, không thuộc file Figma ICS |
| `student_app/alphabet/alphabet.md` — [Học viên] Bảng chữ | — | App học viên, không thuộc file Figma ICS |
| `student_app/course/course.md` — [Học viên] Lớp học | — | App học viên, không thuộc file Figma ICS |
| `student_app/home_trial/home_trial.md` — [Học viên] Màn chính và trải nghiệm | — | App học viên, không thuộc file Figma ICS |
| `student_app/knowledge/knowledge.md` — [Học viên] Kiến thức | — | App học viên, không thuộc file Figma ICS |
| `student_app/lesson/lesson.md` — [Học viên] Bài học | — | App học viên, không thuộc file Figma ICS |
| `student_app/library/library.md` — [Học viên] Thư viện học tập | — | App học viên, không thuộc file Figma ICS |
| `student_app/skill/skill.md` — [Học viên] Kỹ năng | — | App học viên, không thuộc file Figma ICS |
| `student_app/test/test.md` — [Học viên] Kiểm tra | — | App học viên, không thuộc file Figma ICS |
| `survey_bug/bug/bug.md` — Báo lỗi & Góp ý | CD-BL-010000, CH-BL-010000, GV-BL-010000, ADM-GY-010000 | ghép theo tiêu đề |
| `survey_bug/survey/01-create-survey/01-create-survey.md` — Tạo khảo sát (Admin) | ADM-KS-010000, ADM-KS-020000, ADM-KS-030000 | ghép theo tiêu đề |
| `survey_bug/survey/02-assign-survey/02-assign-survey.md` — Giao khảo sát & Kết quả (Admin) | ADM-GKS-010000, ADM-GKS-020000, ADM-GKS-030000 | ghép theo tiêu đề |
| `survey_bug/survey/03-take-survey/03-take-survey.md` — Giáo viên làm khảo sát (Web) | GV-KS-010000 | ghép theo tiêu đề |
| `tag_definition_requirement/tag_definition_requirements.md` — Define Tag — Quản lý nhóm và tag | ADM-TAG-010000 | ghép theo tiêu đề |
| `teacher_role/class/class_course_requirements.md` — [Giáo viên] Chi tiết lớp — Khoá học | GV-LOP-080100, GV-LOP-090100 | ghi trong file |
| `teacher_role/class/class_evaluation_requirements.md` — [Giáo viên] Chi tiết lớp — Đánh giá | GV-LOP-100100 | ghi trong file |
| `teacher_role/class/class_information_requirements.md` — [Giáo viên] Chi tiết lớp — Thông tin | GV-LOP-110100, GV-LOP-110200, GV-LOP-110300 | ghi trong file |
| `teacher_role/class/class_overview_requirements.md` — [Giáo viên] Chi tiết lớp — Tổng quan | GV-LOP-010000, GV-LOP-020000 | ghi trong file |
| `teacher_role/class/class_process_requirements.md` — [Giáo viên] Chi tiết lớp — Quy trình | GV-LOP-060100, GV-LOP-070100 | ghi trong file |
| `teacher_role/class/class_teaching_requirements.md` — [Giáo viên] Chi tiết lớp — Giảng dạy | GV-LOP-030100, GV-LOP-030110, GV-LOP-030170, GV-LOP-030200, GV-LOP-030300, GV-LOP-030400, GV-LOP-030500, GV-LOP-040100, GV-LOP-040200, GV-LOP-050100 | ghi trong file |
| `teacher_role/class_list/class_list_requirements.md` — [Giáo viên] Lớp — Thống kê tổng quan | GV-LOP-010000 | ghi trong file |
| `teacher_role/history_and_salary/history_and_salary_requirements.md` — [Giáo viên] Lịch sử & lương | ADM-LGV-020010, GV-LS-010000, GV-LS-010003, GV-LS-010004, GV-LS-010010, GV-LS-010011, GV-LS-010012, GV-LS-010013, GV-LS-010014, GV-LS-010015, GV-LS-010016 | ghi trong file |
| `teacher_role/teaching_schedule/teaching_schedule_requirements.md` — [Giáo viên] Lịch dạy | GV-LD-010000, GV-LD-020000, GV-LD-020010 | ghi trong file |
| `tools/move_video/move_video.md` — Move Video | ADM-MV-010000, ADM-MV-020000 | ghép theo tiêu đề |
