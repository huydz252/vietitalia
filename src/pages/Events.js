// File: Events.js
import { eventsData } from '../data/EventData.js';
import { getLocale } from '../i18n/i18n.js'; 

export default function Events(container) {
  function render() {
    const lang = getLocale();
    const currentData = eventsData[lang] || eventsData["vi"]; 

    const uiText = {
      tag: lang === "vi" ? "Sự kiện" : "Eventi",
      title: lang === "vi" ? "Tin tức & Sự kiện" : "Notizie ed Eventi",
      dateLabel: lang === "vi" ? "Ngày đăng:" : "Data di pubblicazione:",
      otherEvents: lang === "vi" ? "Sự kiện khác" : "Altri eventi"
    };

    const hash = window.location.hash.substring(1) || "01";
    const currentPost = currentData.find(p => p.id === hash) || currentData[0];

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
          <p class="text-sm text-secondary italic mb-6">${uiText.dateLabel} ${currentPost.date}</p>
          <div class="prose max-w-none text-on-surface-variant text-justify">
            ${currentPost.content}
          </div>
        </article>

        <!-- Sidebar 20% -->
        <aside class="lg:col-span-3 border-l border-outline-variant pl-8 sticky top-24 self-start">
          <h3 class="font-headline-sm mb-6 pb-2 border-b">${uiText.otherEvents}</h3>
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
        </aside>
      </section>
    `;
  }

  // Khởi tạo render và lắng nghe thay đổi hash
  render();
  window.addEventListener("hashchange", render);
}