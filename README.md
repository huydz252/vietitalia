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