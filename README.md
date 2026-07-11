<<<<<<< HEAD
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
=======
# vietitalia

# 🇻🇳🇮🇹 VietItalia - Vietnam & Italy Bridge

**Uno spazio culturale, educativo e imprenditoriale tra Vietnam e Italia.**

VietItalia là dự án website cổng thông tin được xây dựng theo mô hình trung tâm không gian văn hóa, xã hội và công tác (lấy cảm hứng từ Dolomiti Hub). Dự án không chỉ là nơi giới thiệu thông tin hiệp hội mà còn là cầu nối giao thương trực tiếp giữa các doanh nghiệp, tổ chức giáo dục và cộng đồng hai nước.

## 🚀 Công nghệ sử dụng

*   **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+).
*   **Styling:** Tailwind CSS (tối ưu hóa thiết kế UI/UX nhanh chóng và responsive).
*   **Build Tool & Dev Server:** Vite (quản lý module, HMR và đóng gói siêu tốc).
*   **Architecture:** Modular Component-based (Cấu trúc SPA tự xây dựng bằng Vanilla JS, không sử dụng framework nặng như React/Vue để tối ưu tốc độ tải trang).

## 📂 Cấu trúc thư mục

Dự án được phân chia theo tiêu chuẩn hiện đại, giúp dễ dàng mở rộng và bảo trì:

```text
vietitalia/
├── public/                       # Tài nguyên tĩnh (favicon, file tải về không cần tối ưu)
├── src/                          # Toàn bộ mã nguồn chính của dự án
│   ├── assets/                   # Tài nguyên nội bộ (được Vite tự động tối ưu khi build)
│   │   ├── css/
│   │   │   └── style.css         # File CSS chính, dùng để nạp các class của Tailwind
│   │   ├── images/
│   │   │   ├── vietnam/          # Ảnh đặc trưng của Việt Nam
│   │   │   ├── italy/            # Ảnh đặc trưng của Ý (Dolomiti, Venice...)
│   │   │   ├── shared/           # Logo, icon dùng chung
│   │   │   ├── partners/         # Logo đối tác (Comune Feltre, Đại học...)
│   │   │   └── gallery/          # Ảnh từ các sự kiện
│   │   └── videos/               # Video truyền hình, talkshow
│   │
│   ├── components/               # Các mảnh ghép giao diện (UI Components)
│   │   ├── layout/               # Các thành phần cố định trên mọi trang
│   │   │   ├── Header.js         # Menu chính
│   │   │   ├── Footer.js         # Chân trang
│   │   │   └── Navigation.js     # Code điều hướng (nếu tách riêng)
│   │   ├── sections/             # Các khối nội dung độc lập
│   │   │   ├── Hero.js           # Banner chính (Slogan Vietnam - Italy Bridge)
│   │   │   ├── MarketMatch.js    # Khối Ý đang cần gì / Việt Nam đang cần gì
│   │   │   ├── AboutUs.js        # Khối giới thiệu
│   │   │   ├── Ambassador.js     # Khối Đại sứ
│   │   │   ├── Events.js         # Khối sự kiện sắp tới
│   │   │   ├── News.js           # Khối tin tức
│   │   │   ├── Partners.js       # Khối hiển thị logo đối tác
│   │   │   ├── Media.js          # Khối hiển thị video / TV
│   │   │   └── Contact.js        # Form liên hệ
│   │   └── ui/                   # Các UI nhỏ nhắn dùng đi dùng lại (Nút bấm, Card, Input)
│   │
│   ├── pages/                    # Các trang độc lập (Lắp ráp từ các Component ở trên)
│   │   ├── Home.js               # Trang chủ (gọi Hero.js, MarketMatch.js...)
│   │   ├── About.js              # Trang giới thiệu chi tiết
│   │   ├── Ambassador.js         # Trang thông tin Đại sứ
│   │   ├── Events.js             # Trang lịch sự kiện
│   │   ├── News.js               # Trang chuyên mục tin tức
│   │   ├── ItalyMarket.js        # Trang chuyên đề: Thị trường Ý
│   │   ├── VietnamMarket.js      # Trang chuyên đề: Thị trường VN
│   │   ├── JobMarket.js          # Trang chuyên đề: Việc làm
│   │   └── BusinessMatching.js   # Trang chuyên đề: Kết nối doanh nghiệp
│   │
│   ├── utils/                    # (Tuỳ chọn) Chứa các hàm xử lý logic phụ trợ
│   └── main.js                   # 🚀 TRẠM TRUNG CHUYỂN: Nạp Javascript, CSS và bơm HTML vào index
│
├── index.html                    # File HTML gốc (Chỉ chứa duy nhất thẻ <div id="app"></div>)
├── package.json                  # Chứa thông tin thư viện đã cài đặt (Vite, Tailwind...)
├── postcss.config.js             # Cấu hình biên dịch CSS
├── tailwind.config.js            # Cấu hình các class của Tailwind
└── vite.config.js                # Cấu hình môi trường dev và build của Vite
>>>>>>> 8ecebaa424be8e4cf0770b6f537d3e8deb2edc55
