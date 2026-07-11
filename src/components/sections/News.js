export const articles = [
  [
    "economic-forum-2024",
    "Đầu tư",
    "24.05.2024",
    "Diễn đàn kinh tế Việt Nam – Ý: củng cố liên kết thương mại",
    "Các thỏa thuận mới về nông nghiệp bền vững và công nghệ dệt may.",
  ],
  [
    "verdi-vong-co",
    "Văn hóa",
    "18.05.2024",
    "Verdi gặp Vọng cổ: đêm hòa âm hai nền văn hóa",
    "Âm nhạc opera Ý và dân ca Việt Nam gặp nhau trên sân khấu.",
  ],
  [
    "scholarship-2024",
    "Giáo dục",
    "12.05.2024",
    "Học bổng Việt – Ý 2024",
    "Chương trình đào tạo liên kết mở thêm cơ hội học thuật.",
  ],
  [
    "vietnam-day",
    "Du lịch",
    "29.04.2024",
    "Vietnam Day tại Ý",
    "Ngày hội giới thiệu điểm đến và ẩm thực Việt Nam.",
  ],
  [
    "logistics",
    "Đầu tư",
    "11.04.2024",
    "Logistics xanh cho chuỗi cung ứng mới",
    "Doanh nghiệp hai nước cùng trao đổi giải pháp logistics.",
  ],
  [
    "migration",
    "Di trú",
    "04.04.2024",
    "Hướng dẫn mới cho cộng đồng Việt tại Ý",
    "Thông tin cập nhật về các dịch vụ hỗ trợ.",
  ],
  [
    "policy",
    "Chính sách mới",
    "28.03.2024",
    "Chính sách hợp tác giáo dục song phương",
    "Những điểm đáng chú ý cho tổ chức và sinh viên.",
  ],
];
export function renderNews(container, { limit = 3, filterable = false } = {}) {
  const s = document.createElement("section");
  s.className =
    "py-20 max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop";
  s.innerHTML =
    '<div class="flex justify-between items-end gap-4 mb-8"><div><p class="text-primary text-label-sm uppercase tracking-widest">Cập nhật</p><h2 class="font-headline-md text-headline-md">Tin tức Việt Nam – Ý</h2></div><a data-link href="/news" class="text-primary font-semibold">Tất cả tin tức →</a></div>';
  if (filterable) {
    const filter = document.createElement("div");
    filter.className = "flex flex-wrap gap-2 mb-7";
    [
      "Tất cả",
      "Văn hóa",
      "Giáo dục",
      "Du lịch",
      "Đầu tư",
      "Di trú",
      "Chính sách mới",
    ].forEach((cat, i) => {
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
        .filter((a) => cat === "Tất cả" || a[1] === cat)
        .slice(0, limit)
        .map((a) => card(a)),
    );
  };
  renderCards("Tất cả");
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
function card([slug, cat, date, title, desc]) {
  const a = document.createElement("article");
  a.id = slug;
  a.className = "institutional-shadow bg-white border border-outline-variant";
  a.innerHTML = `<div class="media-cover h-32"></div><div class="p-5"><p class="text-label-sm text-primary uppercase">${cat} · ${date}</p><h3 class="font-headline-sm text-headline-sm mt-3">${title}</h3><p class="mt-3 text-sm text-on-surface-variant">${desc}</p><a data-link href="/events" class="inline-block mt-5 text-secondary font-semibold">Xem sự kiện liên quan →</a></div>`;
  return a;
}
