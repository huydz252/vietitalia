import { renderPartners } from "../components/sections/Partners.js";
import { t, getLocale } from "../i18n/i18n.js";
import { advisorsData } from "../data/advisorsData.js";
import { ambassadorsData } from "../data/ambassadorsData.js";

export default function About(container) {
  const lang = getLocale();
  const currentAdvisorsData = advisorsData[lang] ? advisorsData[lang] : advisorsData.vi;
  const currentAmbassadorsData = ambassadorsData[lang] ? ambassadorsData[lang] : ambassadorsData.vi;

  container.innerHTML = `
      <!-- HERO BANNER -->
      <section
        class="bg-cover bg-center bg-no-repeat text-white py-10 flex flex-col"
        style="height: 300px; background-image: linear-gradient(rgba(240, 93, 132, 0.75), rgba(51, 141, 112, 0.65)), url('/images/italy/Rome.jpg');"
      >
        <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop w-full mt-10">
          <p class="uppercase text-sm tracking-[0.2em] font-bold mb-2 shadow-sm">${t("about.bannerEyebrow")}</p>
          <h1 class="font-display-lg text-5xl md:text-6xl font-bold mt-2 text-white drop-shadow-md">${t("about.bannerTitle")}</h1>
          <p class="italic mt-4 text-lg md:text-xl drop-shadow-md">${t("about.subtitle")}</p>
        </div>
      </section>

      <!-- MỤC 1: SECTION BAN CỐ VẤN VIỆT NAM -->
      <section class="py-16 bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <!-- CỘT TRÁI (COL-5): Danh sách chọn Cố Vấn -->
            <div class="lg:col-span-5 space-y-6">
              <div>
                <span class="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                  VietItalia Advisory Board
                </span>
                <h2 class="text-3xl font-extrabold text-primary tracking-tight mt-3">
                  ${currentAdvisorsData.sectionTitle}
                </h2>
              </div>

              <div class="space-y-3">
                ${currentAdvisorsData.advisors.map((adv, index) => `
                  <div 
                    id="advisor-item-${adv.id}"
                    onclick="selectAdvisor('${adv.id}')"
                    class="advisor-card cursor-pointer p-3.5 rounded-2xl transition-all duration-300 flex items-center space-x-4 border ${index === 0 ? 'bg-emerald-50/50 border-emerald-300 shadow-sm opacity-100' : 'bg-transparent border-transparent opacity-60 hover:opacity-100'}"
                  >
                    <div class="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200 shadow-sm flex items-center justify-center">
                      <img 
                        src="${adv.avatar}" 
                        alt="${adv.name}" 
                        class="w-full h-full object-cover object-top"
                        onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(adv.name)}&background=81001d&color=fff'"
                      />
                    </div>
                    
                    <div>
                      <h3 class="text-base font-bold text-gray-900 leading-snug">${adv.name}</h3>
                      <p class="text-xs font-bold text-emerald-700 uppercase tracking-wide mt-0.5">${adv.role}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- CỘT PHẢI (COL-7): Chi tiết Cố Vấn -->
            <div class="lg:col-span-7 lg:border-l lg:border-gray-200 lg:pl-10 pt-0 flex flex-col items-start">
              
              <p class="text-sm text-gray-600 mb-6 leading-relaxed font-medium pb-4 border-b border-gray-100 w-full">
                ${currentAdvisorsData.sectionSub}
              </p>

              <div class="w-full">
                ${currentAdvisorsData.advisors.map((adv, index) => `
                  <div 
                    id="advisor-detail-${adv.id}"
                    class="advisor-detail-content ${index === 0 ? 'block' : 'hidden'} space-y-6 animate-fadeIn w-full"
                  >
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-gray-100 bg-gray-50/60 p-5 rounded-2xl border border-gray-100">
                      
                      <!-- 📸 KHUNG ẢNH CHUẨN TỈ LỆ 1:1 VỪA VẶN KHÔNG BỊ PHÓNG MẶT -->
                      <div class="w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-white ring-1 ring-gray-200 bg-gray-100 flex items-center justify-center">
                        <img 
                          src="${adv.avatar}" 
                          alt="${adv.name}" 
                          class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                          onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(adv.name)}&background=81001d&color=fff'"
                        />
                      </div>

                      <div class="space-y-1.5">
                        <h3 class="text-2xl sm:text-3xl font-extrabold text-primary leading-tight">${adv.name}</h3>
                        <span class="inline-block text-xs font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-300/60 uppercase tracking-wider px-3 py-1 rounded-md">
                          ${adv.role}
                        </span>
                        <p class="text-xs sm:text-sm text-gray-600 italic pt-1">${adv.title}</p>
                      </div>
                    </div>

                    <div class="pt-2">
                      <h4 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Chức vụ & Bằng cấp / Roles & Experience</h4>
                      <ul class="text-sm text-gray-700 space-y-3">
                        ${adv.highlights.map(h => `
                          <li class="flex items-start">
                            <span class="inline-flex items-center justify-center w-5 h-5 mr-3 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs shrink-0 mt-0.5">✓</span>
                            <span class="leading-relaxed">${h}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  </div>
                `).join('')}
              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- MỤC 2: SECTION ĐẠI SỨ VĂN HÓA & THÀNH VIÊN HIEP HỘI -->
      <section class="py-16 bg-slate-50/80 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <!-- CỘT TRÁI (COL-5): Danh sách chọn Đại Sứ -->
            <div class="lg:col-span-5 space-y-6">
              <div>
                <span class="text-xs font-bold uppercase tracking-widest text-primary bg-rose-50 px-3 py-1 rounded-md border border-rose-200">
                  Cultural Ambassadors
                </span>
                <h2 class="text-3xl font-extrabold text-primary tracking-tight mt-3">
                  ${currentAmbassadorsData.sectionTitle}
                </h2>
              </div>

              <div class="space-y-3">
                ${currentAmbassadorsData.ambassadors.map((amb, index) => `
                  <div 
                    id="ambassador-item-${amb.id}"
                    onclick="selectAmbassador('${amb.id}')"
                    class="ambassador-card cursor-pointer p-3.5 rounded-2xl transition-all duration-300 flex items-center space-x-4 border ${index === 0 ? 'bg-rose-50/60 border-rose-300 shadow-sm opacity-100' : 'bg-transparent border-transparent opacity-60 hover:opacity-100'}"
                  >
                    <div class="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200 shadow-sm flex items-center justify-center">
                      <img 
                        src="${amb.avatar}" 
                        alt="${amb.name}" 
                        class="w-full h-full object-cover object-center"
                        onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(amb.name)}&background=81001d&color=fff'"
                      />
                    </div>
                    
                    <div>
                      <h3 class="text-base font-bold text-gray-900 leading-snug">${amb.name}</h3>
                      <p class="text-xs font-bold text-rose-800 uppercase tracking-wide mt-0.5">${amb.role}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- CỘT PHẢI (COL-7): Chi tiết Đại Sứ -->
            <div class="lg:col-span-7 lg:border-l lg:border-gray-200 lg:pl-10 pt-0 flex flex-col items-start">
              
              <p class="text-sm text-gray-600 mb-6 leading-relaxed font-medium pb-4 border-b border-gray-200 w-full">
                ${currentAmbassadorsData.sectionSub}
              </p>

              <div class="w-full">
                ${currentAmbassadorsData.ambassadors.map((amb, index) => `
                  <div 
                    id="ambassador-detail-${amb.id}"
                    class="ambassador-detail-content ${index === 0 ? 'block' : 'hidden'} space-y-6 animate-fadeIn w-full"
                  >
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-gray-200 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                      
                      <!-- 📸 KHUNG ẢNH CHUẨN TỈ LỆ 1:1 CÂN ĐỐI CHO ĐẠI SỨ -->
                      <div class="w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-white ring-1 ring-gray-200 bg-gray-100 flex items-center justify-center">
                        <img 
                          src="${amb.avatar}" 
                          alt="${amb.name}" 
                          class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                          onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(amb.name)}&background=81001d&color=fff'"
                        />
                      </div>

                      <div class="space-y-1.5">
                        <h3 class="text-2xl sm:text-3xl font-extrabold text-primary leading-tight">${amb.name}</h3>
                        <span class="inline-block text-xs font-bold text-rose-900 bg-rose-100/80 border border-rose-300/60 uppercase tracking-wider px-3 py-1 rounded-md">
                          ${amb.role}
                        </span>
                        <p class="text-xs sm:text-sm text-gray-600 italic pt-1">${amb.title}</p>
                      </div>
                    </div>

                    <div class="pt-2">
                      <h4 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Thông tin & Vị trí đảm nhiệm</h4>
                      <ul class="text-sm text-gray-700 space-y-3">
                        ${amb.highlights.map(h => `
                          <li class="flex items-start">
                            <span class="inline-flex items-center justify-center w-5 h-5 mr-3 rounded-full bg-rose-100 text-rose-800 font-bold text-xs shrink-0 mt-0.5">✓</span>
                            <span class="leading-relaxed">${h}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  </div>
                `).join('')}
              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- NỘI DUNG GIỚI THIỆU HIỆP HỘI HIỆN CÓ -->
      <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="flex flex-col justify-center bg-gray-50 p-8 rounded-xl border border-outline-variant shadow-sm h-full">
            <h2 class="font-headline-md text-3xl font-bold text-primary uppercase">${t("about.orgName")}</h2>
            <p class="mt-3 text-lg font-semibold text-secondary">${t("about.orgSlogan")}</p>
            <div class="mt-6 text-on-surface-variant leading-relaxed text-justify space-y-4 text-base">
              <p>${t("about.p1")}</p>
              <p>${t("about.p2")}</p>
            </div>
          </div>
          <div class="h-full flex items-center justify-center bg-white rounded-xl shadow-lg border border-outline-variant overflow-hidden p-3">
            <img src="/images/about/hiephoi.jpg" alt="VietItalia" class="max-w-full max-h-full w-auto h-auto object-contain" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch mt-8 lg:mt-12">
          <div class="space-y-6 flex flex-col justify-center bg-white p-8 rounded-xl border border-outline-variant shadow-sm h-full">
            <div class="border-l-4 border-primary pl-5 py-1">
              <h3 class="font-headline-sm text-primary text-lg uppercase font-bold">${t("about.missionTitle")}</h3>
              <p class="mt-2 text-sm text-on-surface-variant text-justify leading-relaxed">${t("about.missionText")}</p>
            </div>
            <div class="border-l-4 border-secondary pl-5 py-1">
              <h3 class="font-headline-sm text-secondary text-lg uppercase font-bold">${t("about.visionTitle")}</h3>
              <p class="mt-2 text-sm text-on-surface-variant text-justify leading-relaxed">${t("about.visionText")}</p>
            </div>
            <div class="border-l-4 border-primary pl-5 py-1">
              <h3 class="font-headline-sm text-primary text-lg uppercase font-bold">${t("about.philosophyTitle")}</h3>
              <p class="mt-2 text-sm font-semibold text-secondary mb-1">${t("about.philosophySubtitle")}</p>
              <p class="text-sm text-on-surface-variant text-justify leading-relaxed">${t("about.philosophyText")}</p>
            </div>
          </div>

          <div class="flex flex-col justify-between bg-gray-50 p-8 rounded-xl border border-outline-variant shadow-sm h-full">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div>
                <h3 class="font-headline-sm text-xl mb-4 text-gray-900 border-b-2 border-primary pb-2 inline-block">${t("about.funcTitle")}</h3>
                <ul class="space-y-2 text-sm text-on-surface-variant">
                  <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> ${t("about.func1")}</li>
                  <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> ${t("about.func2")}</li>
                  <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> ${t("about.func3")}</li>
                  <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> ${t("about.func4")}</li>
                </ul>
              </div>
              <div>
                <h3 class="font-headline-sm text-xl mb-4 text-gray-900 border-b-2 border-secondary pb-2 inline-block">${t("about.taskTitle")}</h3>
                <ul class="space-y-2 text-sm text-on-surface-variant">
                  <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> ${t("about.task1")}</li>
                  <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> ${t("about.task2")}</li>
                  <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> ${t("about.task3")}</li>
                  <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> ${t("about.task4")}</li>
                </ul>
              </div>
            </div>
            <div class="mt-8 bg-white p-4 rounded-lg border border-outline-variant text-center">
              <h3 class="text-primary font-bold uppercase mb-2 tracking-widest text-xs">${t("about.msgTitle")}</h3>
              <p class="italic text-sm text-gray-700 leading-relaxed">${t("about.msgText")}</p>
            </div>
          </div>
        </div>
      </section>
    `;

  renderPartners(container);

  const c = document.createElement("section");
  c.className = "bg-primary text-white text-center p-12";
  c.innerHTML = `
    <h2 class="font-headline-md text-headline-md">${t("about.ctaTitle")}</h2>
    <div class="mt-6 flex justify-center flex-wrap gap-3">
      <a data-link href="/ambassador" class="bg-white text-primary px-6 py-3 font-semibold rounded-md transition-colors hover:bg-gray-100">${t("about.ctaAmbassador")}</a>
      <a data-link href="/contact" class="border border-white px-6 py-3 font-semibold rounded-md transition-colors hover:bg-white hover:text-primary">${t("about.ctaContact")}</a>
    </div>
  `;
  container.append(c);

  // JS TƯƠNG TÁC CHỌN BAN CỐ VẤN
  window.selectAdvisor = function(id) {
    document.querySelectorAll('.advisor-card').forEach(card => {
      card.className = "advisor-card cursor-pointer p-3.5 rounded-2xl transition-all duration-300 flex items-center space-x-4 border bg-transparent border-transparent opacity-60 hover:opacity-100";
    });

    const activeCard = document.getElementById('advisor-item-' + id);
    if (activeCard) {
      activeCard.className = "advisor-card cursor-pointer p-3.5 rounded-2xl transition-all duration-300 flex items-center space-x-4 border bg-emerald-50/50 border-emerald-300 shadow-sm opacity-100";
    }

    document.querySelectorAll('.advisor-detail-content').forEach(detail => {
      detail.classList.add('hidden');
      detail.classList.remove('block');
    });

    const activeDetail = document.getElementById('advisor-detail-' + id);
    if (activeDetail) {
      activeDetail.classList.remove('hidden');
      activeDetail.classList.add('block');
    }
  };

  // JS TƯƠNG TÁC CHỌN ĐẠI SỨ VĂN HÓA
  window.selectAmbassador = function(id) {
    document.querySelectorAll('.ambassador-card').forEach(card => {
      card.className = "ambassador-card cursor-pointer p-3.5 rounded-2xl transition-all duration-300 flex items-center space-x-4 border bg-transparent border-transparent opacity-60 hover:opacity-100";
    });

    const activeCard = document.getElementById('ambassador-item-' + id);
    if (activeCard) {
      activeCard.className = "ambassador-card cursor-pointer p-3.5 rounded-2xl transition-all duration-300 flex items-center space-x-4 border bg-rose-50/60 border-rose-300 shadow-sm opacity-100";
    }

    document.querySelectorAll('.ambassador-detail-content').forEach(detail => {
      detail.classList.add('hidden');
      detail.classList.remove('block');
    });

    const activeDetail = document.getElementById('ambassador-detail-' + id);
    if (activeDetail) {
      activeDetail.classList.remove('hidden');
      activeDetail.classList.add('block');
    }
  };
}