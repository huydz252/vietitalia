import { renderPartners } from "../components/sections/Partners.js";
import { t } from "../i18n/i18n.js";

const advisors = [
  "Thạc sĩ Lê Thị Kim Lệ",
  "Marco Bianchi",
  "Nguyễn Minh Anh",
];

export default function About(container) {
  container.innerHTML = `
      <section
        class="bg-cover bg-center bg-no-repeat text-white py-10 flex flex-col "
        style="height: 300px; background-image: linear-gradient(rgba(240, 93, 132, 0.75), rgba(51, 141, 112, 0.65)), url('/images/italy/Rome.jpg');"
      >
        <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop w-full mt-10">
          <p class="uppercase text-sm tracking-[0.2em] font-bold mb-2 shadow-sm">${t("about.bannerEyebrow")}</p>
          <h1 class="font-display-lg text-6xl font-bold mt-2 text-white drop-shadow-md">${t("about.bannerTitle")}</h1>
          <p class="italic mt-4 text-xl drop-shadow-md">${t("about.subtitle")}</p>
        </div>
      </section>

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
}