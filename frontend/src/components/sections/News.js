import { getLocale } from "../../i18n/i18n"; 
import { articlesData } from "../../data/articlesData"

export function renderNews(container, { limit = 3, filterable = false } = {}) {
  const isVi = getLocale() === "vi";
  const articles = isVi ? articlesData.vi : articlesData.it;

  const uiText = {
    tag: isVi ? "Cập nhật" : "Aggiornamenti",
    title: isVi ? "Tin tức Việt Nam – Ý" : "Notizie Vietnam – Italia",
    allNews: isVi ? "Tất cả tin tức →" : "Tutte le notizie →",
    readMore: isVi ? "Xem chi tiết →" : "Leggi di più →",
    categories: isVi 
      ? ["Tất cả", "Văn hóa", "Giáo dục", "Du lịch", "Đầu tư", "Di trú", "Chính sách mới"]
      : ["Tutti", "Cultura", "Educazione", "Turismo", "Investimenti", "Immigrazione", "Nuove politiche"]
  };

  const s = document.createElement("section");
  s.className = "py-20 max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop";

  s.innerHTML = `
    <div class="flex justify-between items-end gap-4 mb-8">
      <div>
        <p class="text-primary text-label-sm uppercase tracking-widest">
          ${uiText.tag}
        </p>
        <h2 class="font-headline-md text-headline-md">
          ${uiText.title}
        </h2>
      </div>
      <a data-link href="/news" class="text-primary font-semibold">
        ${uiText.allNews}
      </a>
    </div>
  `;

  if (filterable) {
    const filter = document.createElement("div");
    filter.className = "flex flex-wrap gap-2 mb-7";
    uiText.categories.forEach((cat, i) => {
      const b = document.createElement("button");
      b.className = `news-filter px-4 py-2 border text-label-sm ${i ? "border-outline-variant" : "bg-primary text-white border-primary"}`;
      b.textContent = cat;
      b.dataset.category = cat;
      filter.append(b);
    });
    s.append(filter);
  }

  const grid = document.createElement("div");
  grid.className = "grid md:grid-cols-3 gap-6";
  
  const renderCards = (cat) => {
    grid.replaceChildren(
      ...articles
        // Tìm đúng vị trí index của danh mục để lọc chính xác (do hai ngôn ngữ có tên category khác nhau)
        .filter((a) => cat === uiText.categories[0] || a[1] === cat)
        .slice(0, limit)
        .map((a) => card(a, uiText.readMore))
    );
  };
  
  renderCards(uiText.categories[0]); // Mặc định hiển thị "Tất cả" / "Tutti"

  s.querySelectorAll(".news-filter").forEach((b) =>
    b.addEventListener("click", () => {
      s.querySelectorAll(".news-filter").forEach(
        (x) =>
          (x.className =
            "news-filter px-4 py-2 border border-outline-variant text-label-sm"),
      );
      b.className =
        "news-filter px-4 py-2 border border-primary bg-primary text-white text-label-sm";
      renderCards(b.dataset.category);
    }),
  );
  
  s.append(grid);
  container.append(s);
}

function card([slug, cat, date, title, desc, image, externalUrl], readMoreText) { 
  const a = document.createElement("article");
  a.id = slug;
  a.className = "institutional-shadow bg-white border border-outline-variant";

  const imageUrl = image?.startsWith("src/") ? `/${image}` : image;
  const imageMarkup = imageUrl
    ? `<img src="${imageUrl}" alt="${title}" class="w-full h-48 object-cover" loading="lazy">`
    : '<div class="media-cover h-48" aria-hidden="true"></div>';

  a.innerHTML = `
    ${imageMarkup}
    <div class="p-5">
      <p class="text-label-sm text-primary uppercase">${cat} · ${date}</p>
      <h3 class="font-headline-sm text-headline-sm mt-3">${title}</h3>
      <p class="mt-3 text-sm text-on-surface-variant">${desc}</p>
      <a href="${externalUrl || '#'}" target="_blank" rel="noopener noreferrer" class="inline-block mt-5 text-secondary font-semibold">
        ${readMoreText}
      </a>
    </div>
  `;
  return a;
}