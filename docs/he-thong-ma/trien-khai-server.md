# QC Hub trên server công ty: icstestsapi.pls.edu.vn/docs-figma

Hub thay web docs cũ (MkDocs) ngay tại `https://icstestsapi.pls.edu.vn/docs-figma`. **Không cần root, không sửa nginx,
không cài Node**: dùng lại đúng những gì web cũ đã có.

- nginx đã chuyển `/docs-figma/` vào `127.0.0.1:8030` (cổng trong `/opt/docs-figma/app/.env`).
- Dịch vụ `docs-figma` chạy `/opt/docs-figma/app/scripts/dev.sh`; user SSH của deploy được `sudo systemctl restart docs-figma`.
- Workflow **Deploy demo** (job `server`) build trên GitHub Actions (kèm sẵn Node), gửi sang `/opt/docs-figma/hub`
  bằng rsync (lần đầu ~1,3 GB, sau đó chỉ phần đổi), đổi `dev.sh` để dịch vụ chạy Hub, khởi động lại, kiểm tra.
  Hub không lên thì tự trả lại web cũ và báo lỗi.

## Bật (một lần)

Repo `vyqc815/ics-docs-figma-sync` → Settings → Secrets and variables → Actions:

| Loại | Tên | Giá trị |
|---|---|---|
| Secret | `HUB_QC_WEB_PASSWORD` | mật khẩu team của Hub (như `QC_WEB_PASSWORD` trên Vercel) |
| Secret | `HUB_GITHUB_WRITE_TOKEN` | token classic quyền `repo` (như `GITHUB_WRITE_TOKEN` trên Vercel) |
| Variable | `DEPLOY_TARGET` | `both` (Vercel + server) hoặc `server` (chỉ server) |
| Variable | `HUB_BASE_PATH` | `/docs-figma` |

`DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`, `FIGMA_ACCESS_TOKEN` đã có sẵn.

Rồi Actions → **Deploy demo** → Run workflow. Dòng `Hub chạy rồi` ở job `server` là xong.

## Trên server sau khi chạy

```
/opt/docs-figma/hub/current      bản đang chạy (link tới releases/<commit>, giữ 3 bản)
/opt/docs-figma/hub/.env         mật khẩu + token (chỉ user deploy đọc được)
/opt/docs-figma/hub/start.sh     chạy Hub ở cổng của web cũ
/opt/docs-figma/app/scripts/dev.sh         giờ gọi start.sh
/opt/docs-figma/app/scripts/dev.sh.mkdocs  launcher web cũ
```

**Quay lại web cũ:** `cp /opt/docs-figma/app/scripts/dev.sh.mkdocs /opt/docs-figma/app/scripts/dev.sh && sudo systemctl restart docs-figma`
(hoặc đặt `DEPLOY_TARGET` về trống để các lần sau chỉ deploy Vercel).

**Quay lại bản Hub trước:** `ln -sfn /opt/docs-figma/hub/releases/<bản cũ> /opt/docs-figma/hub/current && sudo systemctl restart docs-figma`.
