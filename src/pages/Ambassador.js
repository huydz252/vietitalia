// ==========================================================================
// TRANG ĐẠI SỨ VĂN HÓA VIETITALIA 2026
// ==========================================================================
// Đường dẫn ảnh đã cập nhật đúng theo thư mục thật đã xác nhận hoạt động:
//   /images/ambassador/ambassador-banner.jpg
//   /images/ambassador/flyer-vi.jpg
//   /images/ambassador/flyer-it.jpg
// ==========================================================================

import { getLocale } from "../i18n/i18n.js";

const themes = [
  "Văn hóa và lối sống của người Ý",
  "Hệ thống giáo dục và đào tạo nghề tại Veneto",
  "Các mô hình doanh nghiệp địa phương",
  "Cuộc sống cộng đồng tại Belluno và Feltre",
  "Cơ hội học tập, hợp tác và phát triển giữa Việt Nam và Ý",
  "Chương trình Đại Sứ Văn Hóa Việt Ý",
];

const audiences = [
  ["school", "Sinh viên"],
  ["cast_for_education", "Giáo viên"],
  ["work", "Doanh nhân"],
  ["travel_explore", "Người làm du lịch"],
  ["edit_note", "Người sáng tạo nội dung"],
  ["favorite", "Người yêu văn hóa Ý"],
];

const itinerary = [
  {
    day: 1,
    icon: "👋",
    title: "Chào mừng đến Feltre",
    items: [
      "Đón đoàn và nhận phòng.",
      "Giới thiệu chương trình Đại Sứ Văn Hóa VietItalia.",
      "Giao lưu làm quen với cộng đồng địa phương.",
      "Tìm hiểu tổng quan về Feltre, Belluno và vùng Veneto.",
    ],
  },
  {
    day: 2,
    icon: "🏛️",
    title: "Khám phá Feltre lịch sử",
    items: [
      "Tham quan trung tâm lịch sử Feltre.",
      "Khám phá bảo tàng, nhà thờ và di tích La Mã dưới lòng đất.",
      "Tìm hiểu lịch sử và văn hóa địa phương.",
      "Thực hành giao tiếp và quan sát đời sống người dân Ý.",
    ],
  },
  {
    day: 3,
    icon: "🏔️",
    title: "Thiên nhiên và phát triển bền vững",
    items: [
      "Tham quan khu vực Dolomiti UNESCO hoặc công viên tự nhiên.",
      "Tìm hiểu mô hình bảo tồn môi trường của Ý.",
      "Trao đổi về du lịch bền vững và chất lượng sống tại Belluno.",
    ],
  },
  {
    day: 4,
    icon: "🎓",
    title: "Giáo dục và Doanh nghiệp Ý",
    items: [
      "Tham quan trường đào tạo nghề hoặc đại học tại Belluno.",
      "Gặp gỡ doanh nghiệp địa phương.",
      "Tìm hiểu mô hình đào tạo nghề, khởi nghiệp và quản trị doanh nghiệp tại Ý.",
      'Chuyên đề: "Học nước Ý từ những người Ý thật".',
    ],
  },
  {
    day: 5,
    icon: "🤝",
    title: "Đại Sứ Văn Hóa VietItalia",
    items: [
      "Workshop về văn hóa Ý và kỹ năng giao tiếp quốc tế.",
      "Thảo luận về cơ hội hợp tác Việt Nam – Ý.",
      "Gặp gỡ các tổ chức, hiệp hội và cộng đồng địa phương.",
      "Xây dựng ý tưởng dự án cá nhân sau khi trở về Việt Nam.",
    ],
  },
  {
    day: 6,
    icon: "🚂",
    title: "Trải nghiệm Venice",
    items: [
      "Di chuyển bằng tàu hỏa đến Venice.",
      "Khám phá di sản văn hóa thế giới.",
      "Tìm hiểu mô hình phát triển du lịch và bảo tồn di sản của Ý.",
      "Ghi hình, thực hiện bài tập trải nghiệm văn hóa.",
    ],
  },
  {
    day: 7,
    icon: "🎤",
    title: "Kết nối và tốt nghiệp",
    items: [
      "Tổng kết chương trình.",
      "Thuyết trình ý tưởng hoặc kế hoạch hành động cá nhân.",
      "Nhận Chứng nhận tham gia chương trình.",
      "Chính thức gia nhập Mạng lưới Đại Sứ Văn Hóa VietItalia.",
      "Kết thúc chương trình, tự do di chuyển ra sân bay.",
    ],
  },
];

const values = [
  "Hiểu sâu hơn về văn hóa và lối sống người Ý",
  "Khám phá hệ thống giáo dục và đào tạo nghề tại Veneto",
  "Tiếp cận doanh nghiệp địa phương và mô hình phát triển cộng đồng",
  "Trải nghiệm Belluno – Feltre – Dolomiti UNESCO – Venice",
  "Mở rộng mạng lưới quan hệ quốc tế",
  "Trở thành thành viên chương trình Đại Sứ Văn Hóa VietItalia",
];

export default function Ambassador(container) {
  container.innerHTML =
    // ---------------- BANNER ----------------
    `<section class="relative text-white pt-20 pb-16 md:pt-24 bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/italy/Rome.jpg')">
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop text-center">
        <p class="text-label-sm uppercase tracking-widest text-white/80">Chương trình 2026</p>
        <h1 class="font-display-lg text-display-lg mt-3 max-w-3xl mx-auto">Trở thành Đại Sứ Văn Hóa VietItalia</h1>
        <p class="mt-4 text-lg italic max-w-2xl mx-auto text-white/90">Khám phá Belluno – Feltre – Dolomiti qua Văn hóa, Giáo dục và Cộng đồng</p>
        <div class="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur px-5 py-3 border border-white/30">
          <span class="text-2xl">🎁</span>
          <span class="text-sm font-semibold">Giải thưởng: 01 vé máy bay khứ hồi Vietnam Airlines</span>
        </div>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#lich-trinh" class="bg-white text-primary px-6 py-3 font-semibold">Xem lịch trình 7 ngày</a>
        </div>
      </div>
    </section>` +

    // ---------------- GIỚI THIỆU ----------------
    `<section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">
      <div class="grid lg:grid-cols-5 gap-10 items-start">
        <div class="lg:col-span-3">
          <p class="text-primary text-label-sm uppercase tracking-widest">Giới thiệu chương trình</p>
          <h2 class="font-headline-md text-headline-md mt-2">Trải nghiệm văn hóa và giáo dục quốc tế</h2>
          <p class="mt-5 text-on-surface-variant leading-relaxed">Chương trình do <strong>Associazione Culturale VietItalia</strong> tổ chức, dành cho sinh viên, giáo viên, doanh nhân và những người yêu nước Ý mong muốn tìm hiểu thực tế về văn hóa, giáo dục và cộng đồng tại vùng Veneto, nước Ý.</p>
          <p class="mt-4 text-on-surface-variant leading-relaxed">Trong <strong>7 ngày trải nghiệm</strong>, người tham gia sẽ gặp gỡ doanh nghiệp địa phương, trường học, tổ chức cộng đồng, khám phá Dolomiti – di sản UNESCO, và xây dựng kế hoạch hành động cá nhân sau khi trở về Việt Nam.</p>
        </div>
        <div class="lg:col-span-2 bg-surface-container-low p-7">
          <h3 class="font-headline-sm text-headline-sm">Bạn sẽ tìm hiểu về</h3>
          <ul class="mt-4 space-y-3 text-sm">${themes.map((t) => `<li class="flex gap-2"><span class="text-secondary">✅</span><span>${t}</span></li>`).join("")}</ul>
        </div>
      </div>
    </section>` +

    // ---------------- CÂU TUYÊN NGÔN ----------------
    `<section class="bg-secondary text-white py-20 relative overflow-hidden">
      <svg class="absolute bottom-0 left-0 w-full opacity-15" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 200 L150 60 L260 140 L400 20 L520 130 L680 40 L820 150 L980 70 L1100 160 L1200 90 L1200 200 Z" fill="white"/>
      </svg>
      <div class="relative max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop text-center">
        <p class="font-headline-md text-headline-md italic max-w-3xl mx-auto">"Không chỉ đến để tham quan.<br>Đến để học hỏi, kết nối và tạo ra giá trị."</p>
      </div>
    </section>` +

    // ---------------- DÀNH CHO AI ----------------
    `<section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">
      <p class="text-primary text-label-sm uppercase tracking-widest">Đối tượng tham gia</p>
      <h2 class="font-headline-md text-headline-md mt-2">Dành cho ai?</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
        ${audiences
          .map(
            ([icon, label]) =>
              `<article class="vietnam-accent bg-surface-container-low p-5 flex items-center gap-3"><span class="material-symbols-outlined text-primary">${icon}</span><h3 class="font-headline-sm text-headline-sm">${label}</h3></article>`,
          )
          .join("")}
      </div>
      <p class="mt-5 text-sm text-on-surface-variant">📌 Điều kiện: Công dân Việt Nam từ 18 tuổi trở lên.</p>
    </section>` +

    // ---------------- ĐỊA ĐIỂM (ảnh tờ rơi song ngữ tự đổi theo locale) ----------------
    `<section class="bg-surface-container-low py-16">
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p class="text-primary text-label-sm uppercase tracking-widest">🏔 Địa điểm</p>
          <h2 class="font-headline-md text-headline-md mt-2">Feltre – Belluno – Dolomiti UNESCO – Veneto, Italia</h2>
          <p class="mt-4 text-on-surface-variant">Vùng núi Dolomiti được UNESCO công nhận là Di sản Thiên nhiên Thế giới, cùng thị trấn cổ Feltre và tỉnh Belluno thuộc vùng Veneto, miền Bắc nước Ý.</p>
        </div>
        <img src="/images/ambassador/flyer-${getLocale() === "it" ? "it" : "vi"}.jpg"
          alt="Tờ rơi chương trình Đại Sứ Văn Hóa VietItalia"
          class="w-full h-auto rounded-lg institutional-shadow">
      </div>
    </section>` +

    // ---------------- LỊCH TRÌNH 7 NGÀY ----------------
    `<section id="lich-trinh" class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">
      <p class="text-primary text-label-sm uppercase tracking-widest">Lịch trình</p>
      <h2 class="font-headline-md text-headline-md mt-2">7 ngày 6 đêm tại Belluno</h2>
      <div class="mt-10 border-l-2 border-outline-variant">
        ${itinerary
          .map(
            (d) =>
              `<article class="relative pl-10 pb-10 last:pb-0">
                <span class="absolute -left-6 top-0 w-12 h-12 rounded-full bg-primary text-white grid place-items-center font-headline-sm text-headline-sm">${d.day}</span>
                <h3 class="font-headline-sm text-headline-sm">${d.icon} Ngày ${d.day} – ${d.title}</h3>
                <ul class="mt-3 space-y-1.5 text-sm text-on-surface-variant">${d.items.map((i) => `<li>• ${i}</li>`).join("")}</ul>
              </article>`,
          )
          .join("")}
      </div>
    </section>` +

    // ---------------- GIÁ TRỊ NHẬN ĐƯỢC ----------------
    `<section class="italy-accent bg-surface-container-low py-16">
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
        <p class="text-secondary text-label-sm uppercase tracking-widest">Sau chương trình</p>
        <h2 class="font-headline-md text-headline-md mt-2">Giá trị nhận được</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
          ${values.map((v) => `<div class="bg-white p-5 flex gap-2"><span class="text-secondary">✅</span><p class="text-sm">${v}</p></div>`).join("")}
        </div>
      </div>
    </section>`;
}