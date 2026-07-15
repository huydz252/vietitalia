const eventsData = [
  {
    id: "01",
    title: "Chuyển giao công nghệ sản xuất Gelato Ý tại Belluno",
    date: "15.07.2026",
    content: `
      <img src="/images/events/event01.png" alt="Gelato banner" class="w-full h-auto mb-6 rounded-lg">
      <h2 class="font-headline-md text-primary mb-4">Cơ hội học nghề cùng chuyên gia hàng đầu nước Ý</h2>
      <p class="mb-4 text-on-surface-variant leading-relaxed">
        Bạn mong muốn mở cửa hàng kem Ý, nâng cao tay nghề hoặc tiếp cận 
        công nghệ sản xuất Gelato Artigianale chính thống? 
        Hiệp hội Văn hóa VietItalia chính thức triển khai chương trình 
        kết nối và chuyển giao công nghệ sản xuất kem Ý tại Feltre – Belluno.
      </p>
      <h3 class="font-headline-sm mt-6 mb-2">Chuyên gia trực tiếp hướng dẫn</h3>
      <p class="mb-4 text-on-surface-variant leading-relaxed">
        Chương trình được đồng hành bởi Marco – nghệ nhân gelato (Maestro Gelatiere) 
        giàu kinh nghiệm với hơn 20 năm hoạt động.
      </p>
      <ul class="list-disc pl-5 mb-4 text-on-surface-variant space-y-2">
        <li>Top 4 toàn quốc cuộc thi SIGEP Gelato d'Oro 2026.</li>
        <li>Điều phối sự kiện Gelato Gastronomico tại Olympic Milano – Cortina 2026.</li>
        <li>Quán quân khu vực Bắc Ý năm 2025.</li>
      </ul>
    `
  },
  {
    id: "02",
    title: "Chương trình Đại Sứ Văn Hóa VietItalia 2026",
    date: "20.07.2026",
    content: `
      <img src="/images/events/event02.jpg" alt="Đại sứ văn hóa" class="w-full h-auto mb-6 rounded-lg">
      
      <h2 class="font-headline-md text-primary mb-4">Khám phá Belluno – Feltre – Dolomiti qua Văn hóa, Giáo dục và Cộng đồng</h2>
      
      <p class="mb-4 text-on-surface-variant leading-relaxed">
        Chương trình trải nghiệm văn hóa và giáo dục quốc tế do <strong>Associazione Culturale VietItalia</strong> tổ chức. 
        Đây là hành trình dành cho sinh viên, giáo viên, doanh nhân và những người yêu nước Ý mong muốn tìm hiểu thực tế về văn hóa, 
        giáo dục và cộng đồng tại vùng Veneto.
      </p>

      <h3 class="font-headline-sm mt-6 mb-2">Vì sao nên tham gia?</h3>
      <ul class="list-disc pl-5 mb-4 text-on-surface-variant space-y-2">
        <li>Trải nghiệm Belluno như người bản địa.</li>
        <li>Giao lưu văn hóa Việt – Ý, nâng cao ngôn ngữ & hiểu biết.</li>
        <li>Kết nối với các doanh nghiệp và đối tác Ý.</li>
        <li>Khám phá hệ thống giáo dục và mô hình khởi nghiệp.</li>
        <li>Cơ hội nhận 01 vé máy bay khứ hồi Vietnam Airlines miễn phí.</li>
      </ul>

      <h3 class="font-headline-sm mt-6 mb-2">Lịch trình tiêu biểu (7 ngày - 6 đêm)</h3>
      <div class="space-y-4 text-on-surface-variant">
        <p><strong>Ngày 1-2:</strong> Chào mừng và khám phá lịch sử tại Feltre, bảo tàng và di tích La Mã.</p>
        <p><strong>Ngày 3-4:</strong> Trải nghiệm thiên nhiên tại Dolomiti UNESCO và tham quan các mô hình giáo dục, doanh nghiệp tại Belluno.</p>
        <p><strong>Ngày 5-6:</strong> Workshop Đại Sứ Văn Hóa và trải nghiệm di sản văn hóa thế giới tại Venice.</p>
        <p><strong>Ngày 7:</strong> Tổng kết, thuyết trình dự án cá nhân và nhận Chứng nhận tham gia.</p>
      </div>

      <div class="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
        <h4 class="font-bold text-primary">Thông tin liên hệ đăng ký:</h4>
        <p class="mt-2">Hotline: +39 329 964 3581</p>
        <p>Email: kimleitalia@gmail.com | vietitalia.bridge@pec.it</p>
        <p>Form đăng ký: <a href="http://www.vietitalia.org/ambassador" class="text-secondary underline">www.vietitalia.org/ambassador</a></p>
      </div>

      <a href="/ambassador" 
         class="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition shadow-md">
        <span>Xem chi tiết sự kiện tại đây</span>
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    `
  }
];

export default function Events(container) {
  function render() {
    const hash = window.location.hash.substring(1) || "01";
    const currentPost = eventsData.find(p => p.id === hash) || eventsData[0];

    container.innerHTML = `
      <!-- Hero Banner -->
      <section 
        class="bg-cover bg-center bg-no-repeat text-white p-20 flex flex-col justify-center items-center text-center"
        style="
          height: 300px;
          background-image:
            linear-gradient(rgba(240, 93, 132, 0.65), rgba(51, 141, 112, 0.55)),
            url('/images/italy/riomaggiore-shutterstock_1195849822_1118a4b73d.jpg');
        "
      >
         <p class="text-label-sm uppercase tracking-widest">Sự kiện</p>
         <h1 class="font-display-lg text-display-lg mt-3">Tin tức & Sự kiện</h1>
      </section>

      <!-- Bố cục 80/20 -->
      <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Cột chính 80% -->
        <article class="lg:col-span-9">
          <h1 class="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-2">${currentPost.title}</h1>
          <p class="text-sm text-secondary italic mb-6">Ngày đăng: ${currentPost.date}</p>
          <div class="prose max-w-none">
            ${currentPost.content}
          </div>
        </article>

        <!-- Sidebar 20% -->
        <!-- Thêm class: sticky top-24 -->
        <aside class="lg:col-span-3 border-l border-outline-variant pl-8 sticky top-24 self-start">
          <h3 class="font-headline-sm mb-6 pb-2 border-b">Sự kiện khác</h3>
          <ul class="space-y-6">
            ${eventsData.map(post => `
              <li>
                <a href="#${post.id}" class="block group">
                  <span class="text-xs text-primary font-bold">${post.date}</span>
                  <h4 class="font-semibold group-hover:text-primary transition">${post.title}</h4>
                </a>
              </li>
            `).join("")}
          </ul>
        </aside>
      </section>
    `;
  }

  // Khởi tạo render và lắng nghe thay đổi hash
  render();
  window.addEventListener("hashchange", render);
}