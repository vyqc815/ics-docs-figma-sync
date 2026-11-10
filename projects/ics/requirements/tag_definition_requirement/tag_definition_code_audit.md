# Tag Management — Code audit theo requirement

**Ngày audit:** 05/10/2026  
**Requirement:** [tag_definition_requirements.md](./tag_definition_requirements.md)  
**DoD:** [tag-management-generic.md](../../pre_coding/features/tag_management/tag-management-generic.md)

## 1. Kết luận

Implementation trong project `fe_ics_2026` **chưa đạt requirement**. Branch `feature/manage-tag` đã có skeleton read-only gồm model/entity/mock datasource/repository load/usecase/Cubit và UI hai panel, nhưng chưa có route `/admin/tag`, menu, localization asset, DI generated registration hoặc CRUD thật. Vì vậy chưa có REQ nào đủ bằng chứng để đánh dấu Done.

Source legacy tại `/Users/triit/poro_project/ics/lib/roles/admin/tag` chỉ dùng tham khảo UI/hành vi. Không chuyển nguyên trạng vì dependency và một số flow lệch requirement mới.

## 2. Ma trận tuân thủ

| Requirement | Trạng thái | Khoảng trống |
|---|---|---|
| REQ01 — Hiển thị | ⚠️ Một phần | Có mock load, loading/error/retry, chọn nhóm và responsive panels; chưa có route/menu, empty state đầy đủ hoặc center scope. |
| REQ02 — Loại nhóm | ⚠️ Một phần | Có enum đúng 5 loại và badge; chưa có form tạo/sửa nhóm. |
| REQ03 — Loại tag | ❌ Chưa có | Chưa có form direct/group, kế thừa loại nhóm hoặc chặn mismatch. |
| REQ04 — Phản hồi | ❌ Chưa có | Nút CRUD chỉ hiện Toast `mock_notice`; chưa có mutation/repository result. |
| REQ05 — Nhập liệu | ❌ Chưa có | Chưa có form/test cho dữ liệu rỗng và trùng tên. |
| REQ06 — CRUD/quyền | ❌ Chưa có | Chưa có CRUD, delete, permission policy, route/menu. |
| REQ07 — ComGao/center | ❌ Chưa có | Entity/repository/datasource không có `centerId`. |

## 3. Blocker trong code hiện tại

| Mức độ | Phát hiện | Ảnh hưởng |
|---|---|---|
| Blocker | Các widget import `shared/widgets/app_text.dart` nhưng file không tồn tại. | Feature/test không compile. |
| Blocker | `TagManagementCubit`, datasource, repository và usecase có annotation nhưng generated DI config chưa đăng ký các type này. | `sl<TagManagementCubit>()` fail khi mở page. |
| Blocker | Không có route `/admin/tag`, menu item hoặc import page trong router. | Không thể truy cập màn theo yêu cầu. |
| Blocker | Constants `tag_management.*` tồn tại nhưng asset locale không có key tương ứng. | UI hiển thị key/translation warning thay vì nội dung. |
| High | Repository/datasource chỉ có `getTagGroups`; add/edit đều gọi Toast “mock”, delete không có. | REQ02–REQ06 chưa được implement. |
| High | `reorderGroups` chỉ đổi state local, không gọi usecase/repository và không rollback. | Thứ tự mất khi reload; chưa đạt flow reorder trong DoD. |
| High | Entity/repository không mang `centerId`; không có permission policy. | Không thể bảo đảm REQ06–REQ07. |
| High | `TagKind.fromApiValue` silently fallback về `student` với kind lạ. | Dữ liệu lỗi bị hiển thị sai loại thay vì failure rõ ràng. |
| Medium | Khi group không có tag, `_buildTags` chỉ render empty text và không render `Thêm tag`. | Không thể tạo tag đầu tiên trong nhóm rỗng. |
| Medium | `selectGroup` nhận id không tồn tại; `copyWith` không thể clear `selectedGroupId`. | State có thể giữ selection stale/không có card selected. |
| Medium | Test hiện tại chỉ kiểm tra happy path read/select/reorder local và model mapping. | Không có bằng chứng cho failure, CRUD, type inheritance, center, permission, route. |

## 4. Rủi ro nếu copy nguyên code legacy

| Mức độ | Phát hiện | Ảnh hưởng |
|---|---|---|
| Blocker | Cubit gọi `AdminServices` trực tiếp và giữ `BuildContext`. | Vi phạm Clean Architecture; khó thay mock/API adapter. |
| Blocker | `SetTagDialog` luôn render `TagKind`, kể cả tag trong nhóm. | Sai REQ03: form trong nhóm phải ẩn Loại và kế thừa. |
| Blocker | Không thấy center scope trong read/write flow Tag legacy. | Không chứng minh được REQ07. |
| High | `TagCubit.deleteTag` không await API, xóa local bất kể kết quả và gọi `showToastError('Xoá thành công')`. | Sai REQ04; có thể báo/xóa giả. |
| High | Reorder gửi nhiều write không await và không rollback. | Có thể mất đồng bộ thứ tự. |
| High | UI legacy nằm dưới Admin, chưa có policy Class Handler/Support. | Chưa đạt REQ06. |
| Medium | Text/màu hard-code, widget/file lớn. | Lệch localization/AppText và `poro_rule`. |
| Medium | Cubit dùng model Firestore/Timestamp trực tiếp. | Presentation phụ thuộc transport/storage. |

## 5. Hướng xử lý

- Xây mới feature-first theo `presentation → domain ← data`; legacy chỉ tham khảo field và màu preset.
- Mock implement cùng repository contract dùng cho API sau này và có CRUD/reorder thật.
- Enforce loại nhóm và center ở usecase/repository, không chỉ tại UI.
- Chỉ commit state/Toast success sau repository success; failure giữ hoặc rollback state.

## 6. Quality gate

- [x] Requirement có flow/REQ/testcase.
- [x] DoD và traceability được viết trước implementation.
- [x] Đã audit current project và source legacy.
- [x] Skeleton read-only tồn tại trong `fe_ics_2026`.
- [ ] Feature compile và DI resolve được.
- [ ] Route/menu/localization đã nối.
- [ ] Unit/widget tests pass.
- [ ] `flutter analyze` sạch cho scope Tag.
