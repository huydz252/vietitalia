// src/components/Events.js
import { supabase } from '../config/supabase.js'; // Import client vừa tạo
import { getLocale } from '../i18n/i18n.js';

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split('.').map(Number);
  return new Date(year, month - 1, day);
}

export default function Events(container) {
  // Biến hàm render thành async để await dữ liệu từ DB
  async function render() {
    const lang = getLocale();
    
    container.innerHTML = `<div class="text-center py-20 text-secondary">Đang tải dữ liệu...</div>`;

    // 1. GỌI DỮ LIỆU ĐỘNG TỪ SUPABASE
    const { data: rawData, error } = await supabase
      .from('articles')           // Gọi bảng articles
      .select('*')                // Lấy tất cả các cột
      .eq('category', 'event')    // Lọc: Chỉ lấy các bài thuộc chuyên mục sự kiện
      .eq('lang', lang);          // Lọc: Chỉ lấy đúng ngôn ngữ hiện tại (vi hoặc it)

    if (error) {
      console.error("Lỗi lấy dữ liệu:", error);
      container.innerHTML = `<div class="text-center py-20 text-error">Không thể tải dữ liệu. Vui lòng thử lại sau!</div>`;
      return;
    }

    // 2. XỬ LÝ DỮ LIỆU ĐÃ TẢI VỀ (Sắp xếp theo ngày mới nhất)
    const currentData = [...rawData].sort((a, b) => parseDate(b.date) - parseDate(a.date));

    if (currentData.length === 0) {
      container.innerHTML = `<div class="text-center py-20 text-secondary">Chưa có bài viết nào.</div>`;
      return;
    }

    // 3. XÁC ĐỊNH BÀI VIẾT ĐANG XEM QUA HASH
    const uiText = {
      tag: lang === "vi" ? "Sự kiện" : "Eventi",
      title: lang === "vi" ? "Tin tức & Sự kiện" : "Notizie ed Eventi",
      dateLabel: lang === "vi" ? "Ngày đăng:" : "Data di pubblicazione:",
      otherEvents: lang === "vi" ? "Sự kiện khác" : "Altri eventi"
    };

    const hash = window.location.hash.substring(1);
    const currentPost = hash 
      ? (currentData.find(p => p.id === hash) || currentData[0])
      : currentData[0];

    // 4. TIẾN HÀNH RENDER HTML (Giữ nguyên 100% logic giao diện cũ của bạn)
    container.innerHTML = `
      <!-- Hero Banner -->
      <section class="bg-cover bg-center bg-no-repeat text-white p-20 flex flex-col justify-center items-center text-center" style="height: 300px; background-image: linear-gradient(rgba(240, 93, 132, 0.65), rgba(51, 141, 112, 0.55)), url('/images/italy/riomaggiore-shutterstock_1195849822_1118a4b73d.jpg');">
         <p class="text-label-sm uppercase tracking-widest">${uiText.tag}</p>
         <h1 class="font-display-lg text-display-lg mt-3">${uiText.title}</h1>
      </section>

      <!-- Bố cục 80/20 -->
      <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <article class="lg:col-span-9">
          <h1 class="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-2">${currentPost.title}</h1>
          <p class="text-sm text-secondary italic mb-6">${uiText.dateLabel} ${currentPost.date}</p>
          <div class="prose max-w-none text-on-surface-variant text-justify">
            ${currentPost.content}
          </div>
        </article>

        <aside class="grid grid-cols-1 border-t lg:border-t-0 lg:border-l border-outline-variant pt-10 lg:pt-0 lg:pl-8 mt-12 lg:mt-0 sticky top-24 self-start">
          <h3 class="font-headline-sm mb-6 pb-2 border-b">${uiText.otherEvents}</h3>
          <div class="max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
            <ul class="space-y-6">
              ${currentData.map(post => `
                <li>
                  <a href="#${post.id}" class="block group">
                    <span class="text-xs text-primary font-bold">${post.date}</span>
                    <h4 class="font-semibold text-on-surface-variant group-hover:text-primary transition">${post.title}</h4>
                  </a>
                </li>
              `).join("")}
            </ul>
          </div>
        </aside>
      </section>
    `;
  }

  render();
  window.addEventListener("hashchange", render);
}