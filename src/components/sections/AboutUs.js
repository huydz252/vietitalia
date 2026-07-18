import { getLocale } from "../../i18n/i18n";

export function renderAboutUs(container) {
  const isVi = getLocale() === "vi";
  
  // Dữ liệu song ngữ
  const btnText = isVi ? "Xem thêm →" : "Scopri di più →";
  const data = isVi 
    ? [
        ["Foundation", "VietItalia là ai?", "VietItalia kết nối những giá trị chung của hai quốc gia bằng các dự án văn hóa, học thuật và kinh doanh.", "/about"],
        ["Diplomacy", "Đại sứ văn hóa", "Cộng đồng những người truyền cảm hứng, vun đắp hiểu biết và hợp tác Việt – Ý.", "/ambassador"],
        ["Community", "Sự kiện", "Diễn đàn, lễ hội và workshop tạo nên những cuộc gặp gỡ có ý nghĩa.", "/events"],
      ]
    : [
        ["Fondazione", "Chi è VietItalia?", "VietItalia connette i valori condivisi delle due nazioni attraverso progetti culturali, accademici e aziendali.", "/about"],
        ["Diplomazia", "Ambasciatori Culturali", "Una comunità di persone che ispirano, coltivando la comprensione e la cooperazione Vietnam - Italia.", "/ambassador"],
        ["Comunità", "Eventi", "Forum, festival e workshop che creano incontri significativi.", "/events"],
      ];

  const s = document.createElement("section");
  s.className = "bg-surface-container-low py-20";
  s.innerHTML =
    '<div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop grid md:grid-cols-3 gap-8">' +
    data
      .map(
        ([k, t, d, l]) =>
          `<article class="border-l-2 border-primary pl-6"><p class="text-label-sm uppercase tracking-widest text-primary">${k}</p><h2 class="font-headline-sm text-headline-sm mt-3">${t}</h2><p class="text-on-surface-variant mt-3">${d}</p><a data-link href="${l}" class="inline-block mt-5 text-primary font-semibold">${btnText}</a></article>`,
      )
      .join("") +
    "</div>";
  container.append(s);
}