import { getLocale } from '../i18n/i18n.js'; 

// const API_URL = 'https://vietitalia.onrender.com/api'; 
const API_URL = 'http://localhost:5000/api'; 

// Hàm bổ trợ: Xử lý linh hoạt cả ngày Database chuẩn ISO và ngày file tĩnh "DD.MM.YYYY"[cite: 12]
function parseDate(dateStr) {
  if (!dateStr) return new Date(0);
  
  // Nếu là ngày từ Database (ví dụ: 2026-07-15T00:00:00Z)
  if (dateStr.includes('-')) return new Date(dateStr);
  
  // Nếu là ngày từ cấu trúc tĩnh cũ (DD.MM.YYYY)
  const parts = dateStr.split('.');
  if (parts.length === 3) {
    const [day, month, year] = parts.map(Number);
    return new Date(year, month - 1, day);
  }
  
  return new Date(dateStr);
}

export default function Events(container) {
  async function render() {
    const lang = getLocale();
    console.log("Ngôn ngữ hiện tại:", lang);
    
    const uiText = {
      tag: lang === "vi" ? "Sự kiện" : "Eventi",
      title: lang === "vi" ? "Tin tức & Sự kiện" : "Notizie ed Eventi",
      dateLabel: lang === "vi" ? "Ngày đăng:" : "Data di pubblicazione:",
      otherEvents: lang === "vi" ? "Sự kiện khác" : "Altri eventi",
      loading: lang === "vi" ? "Đang tải sự kiện..." : "Caricamento...",
      error: lang === "vi" ? "Chưa có sự kiện nào." : "Nessun evento trovato."
    };

    container.innerHTML = `
      <div class="flex justify-center items-center py-32">
        <p class="text-lg text-secondary animate-pulse">${uiText.loading}</p>
      </div>
    `;

    try {
      const response = await fetch(`${API_URL}/events?lang=${lang}`);
      const result = await response.json();
      
      const rawData = result.success && result.data.length > 0 ? result.data : [];

      if (rawData.length === 0) {
        container.innerHTML = `
          <section class="bg-cover bg-center bg-no-repeat text-white p-20 flex flex-col justify-center items-center text-center" style="height: 300px; background-image: linear-gradient(rgba(240, 93, 132, 0.65), rgba(51, 141, 112, 0.55)), url('/images/italy/riomaggiore-shutterstock_1195849822_1118a4b73d.jpg');">
             <p class="text-label-sm uppercase tracking-widest">${uiText.tag}</p>
             <h1 class="font-display-lg text-display-lg mt-3">${uiText.title}</h1>
          </section>
          <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-24 text-center">
            <p class="text-xl text-on-surface-variant">${uiText.error}</p>
          </section>
        `;
        return;
      }

      // Sắp xếp theo ngày mới nhất lên đầu dựa vào hàm parseDate[cite: 12]
      const currentData = [...rawData].sort((a, b) => 
        parseDate(b.event_date || b.date) - parseDate(a.event_date || a.date)
      );

      // Nếu không có hash, lấy bài có ngày mới nhất[cite: 12]
      const hash = window.location.hash.substring(1);
      const currentPost = hash 
        ? (currentData.find(p => p.id == hash) || currentData[0])
        : currentData[0];

      // Đảm bảo hiển thị đúng định dạng ngày (lấy từ cột event_date hoặc date dự phòng)
      const displayDate = currentPost.event_date 
        ? new Date(currentPost.event_date).toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'it-IT')
        : currentPost.date;

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
           <p class="text-label-sm uppercase tracking-widest">${uiText.tag}</p>
           <h1 class="font-display-lg text-display-lg mt-3">${uiText.title}</h1>
        </section>

        <!-- Bố cục 80/20 -->
        <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Cột chính 80% -->
          <article class="lg:col-span-9">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-2">${currentPost.title}</h1>
            <p class="text-sm text-secondary italic mb-6">${uiText.dateLabel} ${displayDate || ''}</p>
            <div class="prose max-w-none text-on-surface-variant text-justify">
              ${currentPost.content || currentPost.description}
            </div>
          </article>

          <!-- Sidebar 20% -->
          <aside class="lg:col-span-3 border-l border-outline-variant pl-8 sticky top-24 self-start">
            <h3 class="font-headline-sm mb-6 pb-2 border-b">${uiText.otherEvents}</h3>
            
            <!-- Bọc danh sách bằng div giới hạn chiều cao và cho phép cuộn[cite: 12] -->
            <div class="max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
              <ul class="space-y-6">
                ${currentData.map(post => {
                  const itemDate = post.event_date 
                    ? new Date(post.event_date).toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'it-IT')
                    : post.date;
                  return `
                  <li>
                    <a href="#${post.id}" class="block group">
                      <span class="text-xs text-primary font-bold">${itemDate || ''}</span>
                      <h4 class="font-semibold text-on-surface-variant group-hover:text-primary transition">${post.title}</h4>
                    </a>
                  </li>
                `}).join("")}
              </ul>
            </div>
          </aside>
        </section>
      `;
    } catch (error) {
      console.error("Lỗi khi tải sự kiện:", error);
      container.innerHTML = `<p class="text-center py-32 text-red-500">Lỗi kết nối máy chủ.</p>`;
    }
  }

  render();
  window.addEventListener("hashchange", () => {
    render();
    window.scrollTo(0, 0);
  });
}