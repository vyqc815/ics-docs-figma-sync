# Chuyển QC Hub từ Vercel lên server công ty

Server chỉ chạy Node. Code build trên GitHub Actions rồi copy sang qua SSH (server không phải build, khỏi lo thiếu RAM).
Làm một lần, khoảng 20 phút, người có quyền root trên server làm.

## 1. Trên server

```bash
# Node 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && sudo apt-get install -y nodejs

# user chạy Hub + thư mục
sudo useradd --system --create-home qchub
sudo mkdir -p /opt/qc-hub/releases && sudo chown -R qchub /opt/qc-hub

# biến môi trường: chép ops/server/env.example thành /opt/qc-hub/.env rồi điền
sudo -u qchub nano /opt/qc-hub/.env && sudo chmod 600 /opt/qc-hub/.env

# dịch vụ
sudo cp ops/server/qc-hub.service /etc/systemd/system/ && sudo systemctl daemon-reload && sudo systemctl enable qc-hub
```

User SSH mà GitHub Actions dùng phải ghi được `/opt/qc-hub` và chạy `sudo systemctl restart qc-hub` không cần mật khẩu:

```bash
echo "<user-ssh> ALL=(root) NOPASSWD: /bin/systemctl restart qc-hub" | sudo tee /etc/sudoers.d/qc-hub
sudo usermod -aG qchub <user-ssh> && sudo chmod -R g+w /opt/qc-hub
```

## 2. Tên miền + nginx

Hub dùng đường dẫn gốc (`/hub`, `/api`, `/figma`…), nên cần **tên miền con riêng**, ví dụ `qchub.pls.edu.vn`
(không đặt dưới `/qc-hub/` của `icstestsapi.pls.edu.vn` được).

1. Trỏ DNS `qchub.pls.edu.vn` về IP server.
2. Thêm `ops/server/nginx-qc-hub.conf` vào nginx: `sudo nginx -t && sudo systemctl reload nginx`.
3. HTTPS (bắt buộc, cookie đăng nhập chỉ gửi qua HTTPS): `sudo certbot --nginx -d qchub.pls.edu.vn`.

Nếu nginx của domain do script deploy BE sinh lại (như web docs-figma), thêm block vào template của repo BE thay vì sửa tay.

## 3. Trên GitHub (repo ics-figma-demo)

Settings → Secrets and variables → Actions:

| Loại | Tên | Giá trị |
|---|---|---|
| Secret | `DEPLOY_HOST` | IP / tên server |
| Secret | `DEPLOY_USER` | user SSH ở bước 1 |
| Secret | `DEPLOY_SSH_KEY` | private key (public key đã nằm trong `~/.ssh/authorized_keys` của user đó) |
| Secret | `DEPLOY_PORT` | chỉ khi SSH không ở cổng 22 |
| Variable | `DEPLOY_TARGET` | `server` |

Có thể dùng chung bộ secrets SSH với repo `ics-docs-figma-sync` (cùng server).

## 4. Deploy lần đầu và chuyển hẳn

1. Actions → **Deploy demo** → Run workflow. Job `server` build, copy, khởi động lại; dòng cuối in `Hub chạy rồi`.
2. Mở `https://qchub.pls.edu.vn/hub`, đăng nhập, kiểm tra.
3. Ổn thì báo team link mới. Bản Vercel có thể giữ thêm ít hôm rồi xoá project trên Vercel.

Từ đó, lịch deploy (9h, 13h, 17h) và nút "Đưa lên Hub ngay" khi sửa requirement đều đi lên server.
Mỗi lần deploy giữ 3 bản gần nhất trong `/opt/qc-hub/releases`; quay lại bản trước:
`ln -sfn /opt/qc-hub/releases/<bản cũ> /opt/qc-hub/current && sudo systemctl restart qc-hub`.

Muốn quay về Vercel: xoá biến `DEPLOY_TARGET`.
