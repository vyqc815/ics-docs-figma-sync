import { PageHead, Panel } from "@/components/qc/ui";

const STEPS: { title: string; items: string[] }[] = [
  {
    title: "Đọc tài liệu",
    items: [
      "Menu trái › Tài liệu: mở một requirement. Chấm màu cạnh tên là trạng thái đồng bộ.",
      "Bấm mã màn (ô tím) trong bài: panel Figma bên phải mở đúng màn đó. Kéo mép trái panel để đổi độ rộng, » để thu gọn.",
      "Ảnh trong bài và trong panel là ảnh Figma trực tiếp (trễ tối đa 5 phút), không cần đăng nhập Figma.",
      "Nút ⬇ tải file MD; nút bút chì sửa requirement (QC, admin).",
    ],
  },
  {
    title: "Trạng thái đồng bộ",
    items: [
      "🟢 Đồng bộ · 🟠 Requirement đổi, UI chưa cập nhật · 🔵 UI đổi, requirement chưa cập nhật · 🔴 Cả hai đổi · ⚪ Chưa có mốc.",
      "Figma được quét mỗi giờ (7h–19h, thứ 2–7); màn nào design sửa thật thì requirement nhắc tới nó chuyển 🔵.",
      "So requirement với Figma (xem “trước / sau” của màn đổi), khớp thì bấm “Đã đồng bộ” để đặt mốc mới.",
      "Trang Đồng bộ: lọc theo trạng thái, xem màn nào đổi, lúc nào, đổi gì.",
    ],
  },
  {
    title: "Màn hình",
    items: [
      "Trang một màn: tab Figma / Demo thật / Spec MD / Trước–sau; Mở Figma, Xem code.",
      "Nhãn Final / Chưa làm / Đã bỏ lấy từ bảng NAVIGATION trên Figma (design giữ bảng này).",
      "Dev: bấm Đang làm / Xong ở đầu trang màn để báo tiến độ của mình; tổng hợp ở Tiến độ dev.",
    ],
  },
  {
    title: "Tìm và lọc",
    items: [
      "Tổng quan › ô tìm: theo mã màn, item, REQ, testcase, tên màn và cả chữ trong tài liệu.",
      "Tag: gắn ở đầu mỗi tài liệu (QC, admin), bấm tag để xem các tài liệu cùng tag.",
    ],
  },
  {
    title: "Tài khoản",
    items: [
      "dev: chỉ xem và báo tiến độ · qc: + sửa requirement, đánh dấu đồng bộ, tag, dự án · admin: + quản lý tài khoản.",
      "Đổi mật khẩu: Tài khoản. Quên mật khẩu: nhờ admin đặt lại.",
    ],
  },
];

/** How to use the hub, step by step. */
const HelpPage = (): React.JSX.Element => (
  <>
    <PageHead title="Hướng dẫn" sub="Figma · Requirement · Testcase trên một web" />
    <div className="grid gap-4 lg:grid-cols-2">
      {STEPS.map((s) => (
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
