import { getLocale } from "../i18n/i18n.js";

const itemsData = {
  vi: ["Du lịch", "Giáo dục", "Công nghệ", "Startup", "Bất động sản", "Logistic", "Nông nghiệp"],
  it: ["Turismo", "Istruzione", "Tecnologia", "Startup", "Immobiliare", "Logistica", "Agricoltura"]
};

export default function VietnamMarket(container) {
  const isVi = getLocale() === "vi";
  const items = isVi ? itemsData.vi : itemsData.it;

  container.innerHTML = `
    <section class="banner-image bg-cover text-white py-20" style="height: 400px; background-position: center; background-image: linear-gradient(rgba(240, 93, 132, 0.65), rgba(51, 141, 112, 0.55)), url('/images/vietnam/image.jpg');">
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
        <p class="text-label-sm uppercase tracking-widest">${isVi ? "Dành cho doanh nghiệp Ý" : "Per le imprese italiane"}</p>
        <h1 class="font-display-lg text-display-lg mt-3">${isVi ? "THỊ TRƯỜNG VIỆT NAM" : "MERCATO VIETNAMITA"}</h1>
        <p class="italic">${isVi ? "Cơ hội mở rộng cho doanh nghiệp Ý" : "Opportunità per le imprese italiane"}</p>
      </div>
    </section>

    <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">
      <h2 class="font-headline-md text-headline-md">${isVi ? "Những cơ hội mở rộng" : "Opportunità di espansione"}</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
        ${items.map(item => `
          <article class="vietnam-accent bg-surface-container-low p-6">
            <span class="material-symbols-outlined text-primary">trending_up</span>
            <h3 class="font-headline-sm text-headline-sm mt-3">${item}</h3>
            <p class="mt-2 text-sm text-on-surface-variant">${isVi ? "Tiềm năng hợp tác dài hạn tại Việt Nam." : "Potenziale di cooperazione a lungo termine in Vietnam."}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="bg-primary text-white text-center p-12">
      <h2 class="font-headline-md text-headline-md">${isVi ? "Tìm đối tác Việt Nam" : "Trova partner vietnamiti"}</h2>
      <a data-link href="/business-matching?from=italy-business" class="inline-block mt-6 bg-white text-primary px-6 py-3 font-semibold">
        ${isVi ? "Đăng nhu cầu tìm đối tác Việt Nam" : "Pubblica la tua richiesta di partner vietnamiti"}
      </a>
    </section>
  `;
}