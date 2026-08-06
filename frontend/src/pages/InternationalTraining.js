import { getLocale } from '../i18n/i18n.js';

const API_URL = 'https://vietitalia.onrender.com/api';
// const API_URL = 'http://localhost:5000/api';

// Hàm bổ trợ: Parse ngày chuẩn ISO từ database
function parseDate(dateStr) {
  if (!dateStr) return new Date(0);
  return new Date(dateStr);
}

// Hàm hỗ trợ format tiền tệ (Học phí)
function formatFee(amount, lang) {
  if (!amount || amount === 0) return lang === 'vi' ? 'Miễn phí' : 'Gratuito';
  return new Intl.NumberFormat(lang === 'vi' ? 'vi-VN' : 'it-IT', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
}

export default function InternationalTraining(container) {
  async function render() {
    const lang = getLocale();

    const uiText = {
      tag: lang === "vi" ? "Đào tạo" : "Formazione",
      title: lang === "vi" ? "Đào Tạo Quốc Tế" : "Formazione Internazionale",
      dateLabel: lang === "vi" ? "Ngày đăng:" : "Data di pubblicazione:",
      durationLabel: lang === "vi" ? "Thời lượng:" : "Durata:",
      feeLabel: lang === "vi" ? "Học phí:" : "Tassa di iscrizione:",
      otherCourses: lang === "vi" ? "Khóa học khác" : "Altri corsi",
      loading: lang === "vi" ? "Đang tải chương trình..." : "Caricamento...",
      error: lang === "vi" ? "Chưa có chương trình đào tạo nào." : "Nessun corso trovato."
    };

    container.innerHTML = `
      <div class="flex justify-center items-center py-32">
        <p class="text-lg text-secondary animate-pulse">${uiText.loading}</p>
      </div>
    `;

    try {
      // 1. GỌI API COURSES
      const response = await fetch(`${API_URL}/courses`);
      const result = await response.json();

      let rawData = result.success && result.data.length > 0 ? result.data : [];

      // Lọc dữ liệu theo ngôn ngữ (vi/it)
      rawData = rawData.filter(course => course.lang === lang);

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

      // Sắp xếp khóa học mới nhất lên đầu dựa vào id hoặc created_at
      const currentData = [...rawData].sort((a, b) =>
        parseDate(b.created_at) - parseDate(a.created_at)
      );

      // Định tuyến bằng hash (#id)
      const hash = window.location.hash.substring(1);
      const currentCourse = hash
        ? (currentData.find(p => p.id == hash) || currentData[0])
        : currentData[0];

      const displayDate = new Date(currentCourse.created_at).toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'it-IT');

      // Giải mã danh sách hình ảnh/video từ cột course_media
      let mediaList = [];
      if (currentCourse.course_media) {
        try {
          mediaList = JSON.parse(currentCourse.course_media);
        } catch (e) {
          console.error("Lỗi parse JSON course_media:", e);
        }
      }

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

        <!-- Bố cục Main/Sidebar -->
        <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Cột nội dung chính (Col 80%) -->
          <article class="lg:col-span-9">
            <h1 class="text-3xl md:text-4xl font-extrabold text-primary leading-tight mb-3">${currentCourse.title}</h1>
            
            <!-- Metadata: Ngày đăng, Thời lượng, Học phí -->
            <div class="flex flex-wrap gap-4 text-sm text-gray-600 border-y border-gray-200 py-3 mb-6">
              <span>📅 <strong>${uiText.dateLabel}</strong> ${displayDate}</span>
              ${currentCourse.duration ? `<span>⏱️ <strong>${uiText.durationLabel}</strong> ${currentCourse.duration}</span>` : ''}
              ${currentCourse.fee !== null ? `<span>💳 <strong>${uiText.feeLabel}</strong> ${formatFee(currentCourse.fee, lang)}</span>` : ''}
            </div>

            <!-- Mô tả ngắn nếu có -->
            ${currentCourse.description ? `
              <div class="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded mb-6 text-gray-700 italic">
                ${currentCourse.description}
              </div>
            ` : ''}

            <!-- Render Media (Ảnh/Video) -->
            ${mediaList.length > 0 ? `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                ${mediaList.map(item => item.type === 'video' ? `
                  <video controls class="w-full rounded-lg shadow h-64 object-cover">
                    <source src="${item.url}" type="video/mp4">
                  </video>
                ` : `
                  <img src="${item.url}" alt="${currentCourse.title}" class="w-full rounded-lg shadow h-64 object-cover hover:opacity-95 transition">
                `).join('')}
              </div>
            ` : ''}

            <!-- Nội dung chi tiết khóa học -->
            <div class="prose max-w-none text-on-surface-variant text-justify leading-relaxed space-y-4">
              ${currentCourse.content || '<p class="text-gray-400">Đang cập nhật nội dung...</p>'}
            </div>
          </article>

          <!-- Sidebar (Col 20%) -->
          <aside class="lg:col-span-3 border-l border-outline-variant pl-8 sticky top-24 self-start">
            <h3 class="font-bold text-xl mb-6 pb-2 border-b text-gray-800">${uiText.otherCourses}</h3>
            
            <div class="max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
              <ul class="space-y-6">
                ${currentData.map(item => {
                  const itemDate = new Date(item.created_at).toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'it-IT');
                  const isActive = item.id == currentCourse.id;
                  return `
                  <li>
                    <a href="#${item.id}" class="block group p-2 rounded transition ${isActive ? 'bg-primary/10 border-l-2 border-primary' : ''}">
                      <span class="text-xs text-primary font-bold">${itemDate}</span>
                      <h4 class="font-semibold text-sm text-on-surface-variant group-hover:text-primary transition line-clamp-2 mt-1">${item.title}</h4>
                    </a>
                  </li>
                `}).join("")}
              </ul>
            </div>
          </aside>
        </section>
      `;
    } catch (error) {
      console.error("Lỗi khi tải chương trình đào tạo:", error);
      container.innerHTML = `<p class="text-center py-32 text-red-500">Lỗi kết nối máy chủ.</p>`;
    }
  }

  render();
  window.addEventListener("hashchange", () => {
    render();
    window.scrollTo(0, 0);
  });
}