# Chuyển QC Hub từ Vercel lên server công ty

Server chỉ chạy Node. Code build trên GitHub Actions rồi gửi sang qua rsync/SSH (server không phải build, khỏi lo thiếu RAM). Bản build khoảng 1,3 GB (930 màn demo dựng sẵn, ảnh, code sinh): lần đầu gửi đủ, các lần sau chỉ gửi phần đổi. Cần trống khoảng 5 GB.
Làm một lần, khoảng 20 phút, người có quyền root trên server làm.

## 1. Trên server

```bash
# Node 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && sudo apt-get install -y nodejs rsync

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

## 3. Trên GitHub (repo vyqc815/ics-docs-figma-sync)

Repo đã có sẵn secrets SSH tới server (`DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`, dùng chung với web cũ). Chỉ cần:

- Settings → Secrets and variables → Actions → tab **Variables** → New variable: `DEPLOY_TARGET` = `server`.
- Nếu SSH không ở cổng 22: thêm secret `DEPLOY_PORT`.

## 4. Deploy lần đầu và chuyển hẳn

1. Actions → **Deploy demo** → Run workflow. Job `server` build, copy, khởi động lại; dòng cuối in `Hub chạy rồi`.
2. Mở `https://qchub.pls.edu.vn/hub`, đăng nhập, kiểm tra.
3. Ổn thì báo team link mới. Bản Vercel có thể giữ thêm ít hôm rồi xoá project trên Vercel.

Từ đó, lịch deploy (9h, 13h, 17h) và nút "Đưa lên Hub ngay" khi sửa requirement đều đi lên server.
Mỗi lần deploy giữ 3 bản gần nhất trong `/opt/qc-hub/releases`; quay lại bản trước:
`ln -sfn /opt/qc-hub/releases/<bản cũ> /opt/qc-hub/current && sudo systemctl restart qc-hub`.

Muốn quay về Vercel: xoá biến `DEPLOY_TARGET`.
