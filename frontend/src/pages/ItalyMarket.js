import { getLocale } from "../i18n/i18n.js";
import { renderJobMarket } from "./JobMarket.js";

export default function ItalyMarket(container) {
  const isVi = getLocale() === "vi";

  const importNeeds = isVi ? ["Nông sản", "Thực phẩm", "Gia vị", "Cà phê", "Nội thất", "Dệt may"] : ["Prodotti agricoli", "Alimentari", "Spezie", "Caffè", "Arredamento", "Tessile"];
  const opportunities = isVi ? ["Du lịch", "Công nghệ", "Giáo dục", "Bất động sản"] : ["Turismo", "Tecnologia", "Istruzione", "Immobiliare"];

  // Logic grid helper
  const grid = (title, items, icon) => {
    const section = document.createElement("section");
    section.className = "mt-12";
    section.innerHTML = `
      <h2 class="font-headline-sm text-headline-sm">${title}</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        ${items.map(item => `
          <article class="italy-accent bg-surface-container-low p-5">
            <span class="material-symbols-outlined text-secondary">${icon}</span>
            <h3 class="font-headline-sm text-headline-sm mt-3">${item}</h3>
            <p class="mt-2 text-sm text-on-surface-variant">${isVi ? "Cơ hội hợp tác và phát triển chuỗi giá trị giữa hai thị trường." : "Opportunità di cooperazione e sviluppo della catena del valore tra i due mercati."}</p>
          </article>
        `).join("")}
      </div>
    `;
    return section;
  };

  container.innerHTML = `
    <section class="banner-image bg-cover text-white py-20" style="height: 400px; background-position: center; background-image: linear-gradient(rgba(240, 93, 132, 0.65), rgba(51, 141, 112, 0.55)), url('/images/italy/riomaggiore-shutterstock_1195849822_1118a4b73d.jpg');">
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
        <p class="text-label-sm uppercase tracking-widest">${isVi ? "Dành cho doanh nghiệp Việt Nam" : "Per le imprese vietnamite"}</p>
        <h1 class="font-display-lg text-display-lg mt-3">${isVi ? "THỊ TRƯỜNG Ý ĐANG CẦN GÌ?" : "COSA CERCA IL MERCATO ITALIANO?"}</h1>
        <p class="italic">Quali opportunità offre il mercato italiano?</p>
      </div>
    </section>
  `;

  const main = document.createElement("div");
  main.className = "max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16";
  main.append(
    grid(isVi ? "Nhu cầu nhập khẩu" : "Domanda di importazione", importNeeds, "inventory_2"),
    grid(isVi ? "Cơ hội hợp tác" : "Opportunità di collaborazione", opportunities, "handshake")
  );

  const tabs = document.createElement("div");
  tabs.className = "mt-14";
  tabs.innerHTML = `<button class="job-tab px-5 py-3 bg-secondary text-white text-label-sm uppercase">Job Market</button><div class="job-content"></div>`;
  
  main.append(tabs);
  container.append(main);

  const jobContent = tabs.querySelector(".job-content");
  const showJobs = () => { jobContent.replaceChildren(); renderJobMarket(jobContent, { embedded: true }); };

  tabs.querySelector(".job-tab").addEventListener("click", () => {
    history.replaceState({}, "", "/italy-market#job-market");
    showJobs();
  });

  if (location.hash === "#job-market") showJobs();

  const contact = document.createElement("section");
  contact.className = "bg-secondary text-white p-12 text-center";
  contact.innerHTML = `
    <h2 class="font-headline-md text-headline-md">${isVi ? "Sẵn sàng mở rộng hợp tác?" : "Pronto ad espandere la collaborazione?"}</h2>
    <a data-link href="/business-matching?from=vietnam-business" class="inline-block bg-white text-secondary px-6 py-3 mt-6 font-semibold">${isVi ? "Đăng nhu cầu hợp tác" : "Pubblica la tua richiesta di cooperazione"}</a>
  `;
  container.append(contact);
}