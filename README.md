# VietItalia Bridge

Trang web giới thiệu và kết nối cộng đồng, văn hoá, giáo dục và cơ hội kinh doanh giữa Việt Nam và Ý. Dự án cung cấp thông tin thị trường, việc làm, sự kiện, tin tức và biểu mẫu kết nối doanh nghiệp.

## Tính năng

- Điều hướng kiểu SPA (Single-page Application) không tải lại toàn bộ trang.
- Hỗ trợ song ngữ tiếng Việt và tiếng Ý; lựa chọn ngôn ngữ được lưu trong `localStorage`.
- Các trang nội dung về VietItalia, đại sứ văn hoá, sự kiện, tin tức và thị trường hai nước.
- Khu vực Business Matching để người dùng gửi nhu cầu tìm đối tác.
- Biểu mẫu đăng ký đại sứ và kết nối doanh nghiệp có kiểm tra các trường bắt buộc ở trình duyệt.
- Giao diện đáp ứng cho màn hình di động và desktop, xây dựng với Tailwind CSS CDN cùng CSS tùy chỉnh.

## Các trang

| Đường dẫn | Nội dung |
| --- | --- |
| `/` | Trang chủ, giới thiệu nhanh, nhu cầu thị trường, tin tức và đối tác |
| `/about` | Giới thiệu VietItalia và hội đồng cố vấn |
| `/ambassador` | Chương trình Đại sứ Văn hoá Việt – Ý và form đăng ký |
| `/events` | Lịch sự kiện, thư viện khoảnh khắc và liên kết bài báo |
| `/news` | Tin tức Việt Nam – Ý |
| `/italy-market` | Nhu cầu nhập khẩu và cơ hội hợp tác tại Ý |
| `/italy-market#job-market` | Thị trường việc làm tại Ý |
| `/job-market` | Trang thị trường việc làm tại Ý |
| `/vietnam-market` | Cơ hội hợp tác tại Việt Nam |
| `/business-matching` | Form gửi nhu cầu kết nối doanh nghiệp |
| `/contact` | Thông tin/liên hệ |

## Công nghệ

- [Vite](https://vite.dev/) 7
- JavaScript ES Modules (không dùng framework)
- Tailwind CSS qua CDN
- Google Fonts: Playfair Display, Inter và Material Symbols

## Yêu cầu môi trường

- Node.js 20.19+ hoặc 22.12+ (khuyến nghị theo yêu cầu của Vite 7)
- npm

## Cài đặt và chạy dự án

```bash
git clone <repository-url>
cd vietitalia
npm install
npm run dev
```

Sau khi chạy, mở địa chỉ do Vite hiển thị trong terminal (thường là `http://localhost:5173`).

## Các lệnh có sẵn

```bash
# Chạy môi trường phát triển
npm run dev

# Tạo bản build tối ưu trong thư mục dist/
npm run build

# Xem trước bản build
npm run preview
```

## Cấu trúc thư mục

```text
vietitalia/
├── public/                    # Tài nguyên tĩnh được phục vụ trực tiếp
├── src/
│   ├── assets/css/style.css   # Kiểu dáng CSS tùy chỉnh
│   ├── components/
│   │   ├── layout/            # Header, footer và điều hướng
│   │   └── sections/          # Các khối nội dung tái sử dụng
│   ├── i18n/                  # Cấu hình và chuỗi dịch Việt/Ý
│   ├── pages/                 # Các trang tương ứng với từng route
│   └── main.js                # Khởi tạo ứng dụng và router phía client
├── index.html                 # HTML gốc và cấu hình Tailwind CDN
├── package.json               # Scripts và phụ thuộc dự án
└── vite.config.js             # Cấu hình Vite (cần xuất một object hợp lệ)
```

## Định tuyến và điều hướng

Danh sách route được khai báo tại `src/main.js`. Liên kết nội bộ dùng thuộc tính `data-link`; trình xử lý trung tâm sẽ gọi History API và render lại phần nội dung chính. Khi thêm trang mới:

1. Tạo module trong `src/pages/`, xuất một hàm nhận tham số `container`.
2. Import module đó trong `src/main.js`.
3. Thêm đường dẫn vào đối tượng `routes`.
4. Thêm liên kết điều hướng khi cần trong `src/components/layout/Navigation.js`.

## Đa ngôn ngữ

Các chuỗi dịch nằm trong `src/i18n/translations.js`; logic chọn ngôn ngữ nằm trong `src/i18n/i18n.js`.

- Ngôn ngữ mặc định: `vi`.
- Ngôn ngữ hiện tại lưu với khóa `vietitalia-locale` trong `localStorage`.
- Gọi `t("nhom.khoa")` để lấy chuỗi theo ngôn ngữ hiện tại.
- Gọi `setLocale("vi")`, `setLocale("it")` hoặc `toggleLocale()` để thay đổi ngôn ngữ.

Khi bổ sung nội dung mới, hãy thêm bản dịch cho cả `vi` và `it`. Nếu thiếu bản dịch, ứng dụng sẽ tự dùng tiếng Việt làm phương án dự phòng.

## Biểu mẫu và tích hợp backend

Hiện tại các biểu mẫu tại trang Đại sứ và Business Matching chỉ kiểm tra dữ liệu ở phía trình duyệt. Form Business Matching ghi dữ liệu hợp lệ ra `console`; dự án chưa gửi dữ liệu đến API, email hoặc cơ sở dữ liệu.

Để đưa vào vận hành, cần thay phần xử lý sự kiện `submit` bằng lời gọi API bảo mật, đồng thời bổ sung xử lý lỗi, thông báo thành công và biện pháp chống spam phù hợp.

## Triển khai

Sau khi cấu hình Vite hợp lệ, chạy `npm run build` để tạo thư mục `dist/`, rồi triển khai nội dung của thư mục này lên dịch vụ static hosting. Vì dự án dùng History API, máy chủ cần được cấu hình trả về `index.html` cho các route SPA như `/about` hoặc `/events`.

## Ghi chú phát triển

- `tailwind.config.js` và `postcss.config.js` hiện là các tệp dự phòng, vì Tailwind đang được nạp trực tiếp từ CDN trong `index.html`.
- `vite.config.js` đang trống nên Vite 7 không thể nạp cấu hình và `npm run build` sẽ lỗi. Để dùng cấu hình mặc định, hãy thêm `export default {};` vào tệp này (hoặc xóa tệp nếu không cần cấu hình riêng).
- Ảnh/asset dùng cho giao diện nên được đặt trong `public/` hoặc `src/assets/` tùy cách sử dụng.
- Trước khi tạo bản phát hành, hãy chạy `npm run build` để kiểm tra lỗi biên dịch.

## Giấy phép

Chưa có thông tin giấy phép. Hãy bổ sung tệp `LICENSE` nếu dự án cần được công khai hoặc phân phối.
