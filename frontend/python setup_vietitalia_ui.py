import os

def create_folder_structure():
    print("Đang tạo cấu trúc thư mục dự án Vite Modular cho VietItalia...")
    
    # 1. Danh sách các thư mục cần tạo dựa trên mô hình Dolomiti Hub
    folders = [
        "public",
        "src/assets/css",
        "src/assets/images/vietnam",
        "src/assets/images/italy",
        "src/assets/images/shared",
        "src/assets/images/partners",
        "src/assets/images/gallery",
        "src/assets/videos",
        "src/components/layout",       # Header, Footer, Menu...
        "src/components/sections",     # Hero, AboutUs, Events...
        "src/components/ui",           # Button, Card, Form...
        "src/pages",
        "src/utils"
    ]
    
    # 2. Danh sách các file cần tạo dựa trên sitemap yêu cầu
    files = [
        # File cấu hình gốc
        "index.html",
        "tailwind.config.js",
        "postcss.config.js",
        "package.json",
        "vite.config.js",
        "src/main.js",
        
        # Style
        "src/assets/css/style.css",
        
        # Components - Layout
        "src/components/layout/Header.js",
        "src/components/layout/Footer.js",
        "src/components/layout/Navigation.js",
        
        # Components - Sections (dựa trên menu chính)
        "src/components/sections/Hero.js",               # Banner lớn, Slogan
        "src/components/sections/AboutUs.js",            # Giới thiệu VietItalia
        "src/components/sections/Ambassador.js",         # Đại Sứ Văn Hóa
        "src/components/sections/Events.js",             # Sự kiện
        "src/components/sections/News.js",               # Tin tức
        "src/components/sections/MarketMatch.js",        # Ý/Việt Nam Cerca (Đề xuất đặc biệt)
        "src/components/sections/Partners.js",           # Đối tác
        "src/components/sections/Media.js",              # VietItalia TV
        "src/components/sections/Contact.js",            # Liên hệ
        
        # Pages (Các trang độc lập tương ứng với Menu)
        "src/pages/Home.js",                             # Lắp ráp Hero, MarketMatch, News...
        "src/pages/About.js",
        "src/pages/Ambassador.js",
        "src/pages/Events.js",
        "src/pages/News.js",
        "src/pages/ItalyMarket.js",                      # THỊ TRƯỜNG Ý ĐANG CẦN GÌ
        "src/pages/VietnamMarket.js",                    # THỊ TRƯỜNG VIỆT NAM
        "src/pages/JobMarket.js",                        # Ý đang thiếu lao động gì
        "src/pages/BusinessMatching.js"                  # Kết nối doanh nghiệp
    ]

    # Tạo thư mục
    for folder in folders:
        os.makedirs(folder, exist_ok=True)
        print(f"📁 Đã tạo thư mục: {folder}")

    # Tạo file rỗng
    for file_path in files:
        with open(file_path, "w", encoding="utf-8") as f:
            pass 
        print(f"📄 Đã tạo file trống: {file_path}")

    print("\\n✅ Hoàn tất! Cấu trúc thư mục chi tiết cho dự án VietItalia đã sẵn sàng.")

if __name__ == "__main__":
    create_folder_structure()
