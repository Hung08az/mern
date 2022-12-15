### Tasks

- Từ khung source code hiện tại, tạo giao diện web theo yêu cầu, hỗ trợ hiển thị tốt trên mobile, tablet, pc ( Chỉ sử dụng quasar component và tailwindcss để style và thiết kế UI )
- Cần thực hiện validate các input theo file thiết kế ( sử dụng AJV https://ajv.js.org/)
- Hỏi nhiều hơn, xác nhận nhiều hơn

# Các bước để chạy project
1. Di chuyển đến thư mục client
`cd client`
2. Cài đặt Yarn
Nếu đang sử dụng NodeJS < 16
`npm i -g corepack`
Nếu sử dụng NodeJS >= 16
`corepack enable`
( gõ node -v để kiểm tra version NodeJS )

3. Cài đặt Quasar CLI
`yarn global add @quasar/cli`

4. Cài đặt các dependencies
`yarn install`
5. Chạy
`yarn dev`

# Yêu cầu
Dựa vào các đầu API về user của API sau : https://jsonplaceholder.typicode.com/ \
a) Danh sách users : \
GET https://jsonplaceholder.typicode.com/users \
b) Tạo user \
POST https://jsonplaceholder.typicode.com/users \
c) Update user : \
PUT https://jsonplaceholder.typicode.com/users/*user-id* . \
Ví dụ https://jsonplaceholder.typicode.com/users/1 ( 1 là id của user cần update ) . \
d) Xoá user : \
DELETE  https://jsonplaceholder.typicode.com/users/*user-id* . \
Ví dụ https://jsonplaceholder.typicode.com/users/2 ( 2 là id của user cần xoá ) . \

Các thông tin về user thì tham chiếu bảng dưới đây : \

| No  | Tên trường  | Kiểu dữ liệu  | Validation  |
| :------------ | :------------ | :------------ | :------------ |
| 1  | name   | string(30) - input  | Not empty, tối đa 30 kí tự  |
| 2 | username  | string(20) - input  | Not empty, tối đa 20 kí tự  |
| 3 | email  | string(50) - input  | Not empty, có định dạng email, tối đa 50 kí tự  |
| 4  | suite   | string(50) - input  |  Not empty, tối đa 30 kí tự |
| 5  | street   | string(50) - input  |  Not empty, tối đa 50 kí tự |
| 6  | city   | string(50) - selectbox  |  Not empty ( danh sách thành phố) |
| 7  | zipcode   | string(50) - input mask  |  Not empty, theo format xxxxx-xxxx (92998-3874) |
| 8  | phone    | string(11) - input  |  Not empty, tối đa 11 kí tự|
| 9  | website     | string(20) - input  |  Not empty, tối đa 30 kí tự|
| 10  | company name     | string(50) - input  |  Not empty, tối đa 50 kí tự|

1. Tạo màn hình đăng ký user
2. Tạo màn hình danh sách User, có thể tìm kiếm theo name, email, phone. Yêu cầu phân trang ( 10 user 1 trang ).
3. Tạo màn hình edit thông tin user ( chọn user cần update từ màn hình danh sách ) (Cần validate)
4. Thực hiện xoá user ( chọn user cần xoá từ màn hình danh sách )
5.  Có hiển thị dialog để xác nhận có xoá hay không ? Khi bấm YES thì thực hiện xoá và đóng dialog, khi bấm Cancel thì đóng dialog và không cử lý gì. \

Các xử lý đăng ký, tìm kiếm, sửa, xoá đều cần hiển thị message thông báo thành công/thất bại. ( dựa vào kết quả trả về của API)
###End
