import { PageHead, Panel } from "@/components/qc/ui";

type Step = { title: string; items: string[] };

const WRITE_WHERE = "Hub chỉ để xem. Viết, sửa file .md trong repo: mỗi dự án (kể cả ICS) ở projects/<tên>/requirements → commit → push lên main.";

const qcSteps = (): Step[] => [
  {
    title: "QC · Viết requirement",
    items: [
      WRITE_WHERE,
      "Không cần đặt mã trên Figma: mã màn do design đặt ở tên frame.",
      "Mỗi mục ### của phần UI là một Trang. Ghi mã màn đang mô tả (vd. CD-KH-060100) ngay trong mục đó, thường ở chú thích ảnh: Hub gắn đúng màn và ảnh Figma cho Trang.",
      "Không ghi mã màn thì Hub tự đoán theo chữ trên Figma; đoán không chắc thì Trang vào mục Chưa gắn mã.",
      "Không tự viết mã khu vực, item (A03.07): Hub tự đánh và giữ nguyên khi chèn, xoá dòng. Đổi chữ nhãn một dòng thì dòng đó nhận mã mới.",
      "Testcase để ở bảng có cột Given / When / Then.",
    ],
  },
  {
    title: "QC · Sau khi lưu",
    items: [
      "Hub chuyển bản gốc sang template, gắn mã, kiểm đủ nội dung rồi báo vào Google Chat.",
      "Bản chuyển thiếu câu, thiếu ô bảng hay lệch số testcase so với bản gốc thì dừng: Hub giữ bản cũ, Chat báo chỗ thiếu để sửa.",
      "Lên Hub ở lượt deploy kế tiếp (9h, 13h, 17h, thứ 2–7).",
      "Màn chưa có thiết kế: nhờ người giữ hệ thống mã cấp mã dự kiến. Trang hiện thẻ “Chưa có thiết kế”, design vẽ đúng mã thì thành ảnh thật.",
    ],
  },
  {
    title: "QC · Đối chiếu với Figma",
    items: [
      "Chấm cạnh tên tài liệu: 🟢 Đồng bộ · 🟠 Requirement đổi, UI chưa cập nhật · 🔵 UI đổi, requirement chưa cập nhật · 🔴 Cả hai đổi · ⚪ Chưa có mốc.",
      "Mở tài liệu, xem “Đổi sau mốc” và tab Trước–sau của màn đổi; cập nhật requirement nếu cần.",
      "Requirement và Figma đã khớp thì bấm “Đã đồng bộ” để đặt mốc mới.",
      "Trang Chưa gắn mã: các Trang Hub chưa nối được với màn nào, cần ghi mã màn vào.",
    ],
  },
];

const PROJECT_STEPS: Step[] = [
  {
    title: "QC · Thêm dự án mới",
    items: [
      "Dự án › Dự án mới: nhập Tên dự án, link file Figma, bấm Đọc file. File Figma phải được chia sẻ cho tài khoản Figma của server.",
      "Thư mục: chọn theo tên một thư mục có sẵn trong projects/, hoặc “+ Thư mục mới…” rồi gõ tên: Hub tạo projects/<tên>/requirements từ mẫu (projects/_mau-du-an).",
      "Tick cả trang hoặc từng Section cần quét; giữ “Chỉ frame có mã ở đầu tên” nếu frame đã đặt tên “<MÃ> — <tên>”. Bấm Quét, xem kết quả, rồi Lưu dự án.",
      "Lưu xong hệ thống mã chạy lần đầu (1–2 phút). Dán lại link Figma của một dự án đã có thì Hub cập nhật dự án đó, không tạo dự án mới. Cần quyền QC hoặc admin.",
    ],
  },
  {
    title: "QC · Viết requirement cho dự án",
    items: [
      "Bản gốc ở projects/<tên>/requirements (ICS cũng vậy: projects/ics/requirements): git pull → sửa / thêm <module>/<chuc-nang>.md → commit → push lên main.",
      "Viết theo template như ICS: ## 1. UI với các mục ### Trang N, ghi mã màn trong mục; testcase Given / When / Then; REQ; Cần xác nhận. Mẫu: projects/_mau-du-an, hướng dẫn: projects/README.md.",
      "Sau khi push, hệ thống chuyển template, gắn mã trang / khu vực / item, dựng cụm, registry, testcase như ICS (projects/<tên>/_hub, không sửa tay) và báo Chat. Thiếu nội dung thì dừng, giữ bản cũ.",
      "Hub có bản mới sau vài phút, không cần deploy; “Đọc lại docs” ở trang dự án để lấy ngay.",
    ],
  },
  {
    title: "QC · Dùng và cập nhật dự án",
    items: [
      "Chọn dự án ở ô “Dự án” trên đầu trang: Tổng quan, Requirement, Màn, Cụm, Item, Testcase, Đồng bộ, Tag, Tiến độ, Chưa gắn mã đều theo dự án đang chọn.",
      "Design thêm frame, đổi tên, đặt mã: trang dự án › “Quét lại Figma”; hệ thống mã chạy lại theo danh sách màn mới. Figma của dự án được quét mỗi giờ, tin đổi màn vào luồng Chat figma-<MÃ>.",
      "Chỉ màn có mã mới hiện trong Hub. File chưa có mã: Đề xuất mã → Duyệt mã & gửi design; mã đã lưu được dùng ngay, design đổi tên frame theo cột “Tên mới” rồi Quét lại Figma.",
      "Đổi thư mục ở trang dự án. Bỏ dự án (thùng rác) xoá dữ liệu Hub của dự án (lần quét, đề xuất mã, mốc đồng bộ, tag); thư mục projects/<tên> được giữ.",
    ],
  },
];

const OTHER_STEPS: Step[] = [
  {
    title: "Dev · Đọc requirement",
    items: [
      "Requirement: mở tài liệu. Bấm mã màn (ô tím) trong bài để panel Figma bên phải mở đúng màn đó.",
      "Ảnh Figma trong bài là ảnh trực tiếp (trễ tối đa 5 phút), không cần tài khoản Figma.",
      "Trang một màn: tab Figma / Demo thật / Spec MD / Trước–sau, nút Xem code. “Item, testcase của cụm” cho danh sách item và testcase.",
      "Nhãn Final / Chưa làm / Đã bỏ trên màn lấy từ bảng NAVIGATION của design: chỉ code màn Final.",
      "Tài liệu chuyển 🔵 hoặc 🔴: UI vừa đổi, xem “Đổi sau mốc” trước khi code tiếp.",
    ],
  },
  {
    title: "Dev · Đánh dấu tiến độ",
    items: [
      "Ở đầu trang mỗi màn, hàng “Tôi:” chọn Chưa làm / Đang làm / Xong. Mỗi người chỉ đánh dấu phần của mình.",
      "Mỗi lần đánh dấu là mốc của bạn cho màn đó: Hub nhớ bạn code theo bản requirement và Figma lúc ấy.",
      "Tiến độ dev: tổng hợp theo từng người; ai đang làm, đã xong màn nào.",
      "Tài khoản dev chỉ xem tài liệu và báo tiến độ, không sửa requirement.",
    ],
  },
  {
    title: "Dev · Màn đổi sau khi đã code",
    items: [
      "Requirement của màn (các Trang nhắc tới màn, yêu cầu, testcase) hoặc frame Figma đổi sau mốc của bạn: trang màn hiện “Có cập nhật sau khi bạn đánh dấu”, kèm đổi gì, lúc nào.",
      "Tiến độ dev › “Có cập nhật sau khi code”: các màn đã đánh dấu mà đổi sau đó, theo từng người.",
      "Code xong phần thay đổi thì bấm “Đã code theo bản mới”: Hub đặt lại mốc.",
      "Google Chat: dán link webhook của bạn ở Tài khoản › Thông báo Google Chat, bấm Gửi thử. Figma đổi thì tin đến trong vòng 1 giờ; requirement đổi thì tin đến sau lượt deploy đưa bản mới lên Hub.",
      "Admin điền thêm webhook của dự án: mọi tin của cả team vào một space, ghi tên dev.",
    ],
  },
  {
    title: "Design · Cập nhật Figma",
    items: [
      "Đặt tên frame theo dạng “<MÃ> — <tên>”, vd. “CD-KH-060100 — Bài tập về nhà / BTVN”. Frame chưa có mã thì Hub không thấy.",
      "Mã: <DỰ ÁN>-<MODULE>-SSMMKK. KK = 00 màn gốc, 01–09 trạng thái, 10, 20… popup / dropdown; bản tối thêm -DK.",
      "Giữ bảng “Danh sách màn hình” trên trang NAVIGATION: Final, Chưa làm, gạch ngang là đã bỏ.",
      "Màn đã có mã dự kiến (thẻ “Chưa có thiết kế”, trang Chưa gắn mã): vẽ frame đặt đúng mã đó.",
      "File Figma mới chưa có mã: QC tạo dự án ở trang Dự án, bấm đề xuất mã, design đổi tên frame theo mã đã duyệt, QC bấm Quét lại Figma.",
    ],
  },
  {
    title: "Design · Sửa xong thì",
    items: [
      "Ảnh màn trong requirement đổi sau tối đa 5 phút.",
      "Figma được quét mỗi giờ (7h–19h, thứ 2–7): màn sửa thật được báo vào Google Chat, tài liệu nhắc tới nó chuyển 🔵.",
      "Code demo và Spec MD sinh lại lúc 8h30, 12h30, 16h30, lên Hub ở lượt deploy 9h, 13h, 17h.",
      "Đổi tên layer hay lệch ≤ 1px không tính là sửa.",
    ],
  },
  {
    title: "Tìm, tag, tài khoản",
    items: [
      "Tổng quan › ô tìm: theo mã màn, item, REQ, testcase, tên màn và cả chữ trong tài liệu.",
      "Tag gắn ở đầu mỗi tài liệu (QC, admin); bấm tag để xem các tài liệu cùng tag.",
      "dev: xem, báo tiến độ · qc: + sửa requirement, đánh dấu đồng bộ, tag, dự án · admin: + quản lý tài khoản, webhook dự án.",
      "Đổi mật khẩu ở Tài khoản; quên mật khẩu thì nhờ admin đặt lại.",
    ],
  },
];

/** How to use the hub, by role: QC writes requirements, dev reads and marks progress, design updates Figma. */
const HelpPage = (): React.JSX.Element => (
  <>
    <PageHead title="Hướng dẫn" sub="QC viết requirement, thêm dự án · Dev đọc và báo tiến độ · Design cập nhật Figma" />
    <div className="grid gap-4 lg:grid-cols-2">
      {[...qcSteps(), ...PROJECT_STEPS, ...OTHER_STEPS].map((s) => (
        <Panel key={s.title} title={s.title}>
          <ul className="list-disc space-y-1.5 pl-5 text-[13.5px] leading-relaxed text-(--hub-muted)">
            {s.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Panel>
      ))}
    </div>
  </>
);

export default HelpPage;
