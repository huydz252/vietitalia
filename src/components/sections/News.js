export const articles = [
  [
    "trade-2026",
    "Đầu tư",
    "22.05.2026",
    "Việt Nam đẩy mạnh hợp tác công nghệ và tăng trưởng xanh với Ý",
    "Đại sứ Việt Nam tại Ý cho biết hai nước đang mở rộng hợp tác về chuyển giao công nghệ, AI, hạ tầng xanh và đào tạo nghề; thương mại song phương đạt gần 8 tỷ USD, Ý là đối tác thương mại lớn thứ 3 của Việt Nam trong EU.",
    "/images/news/trade-2026.jpg",
    null,
  ],
  [
    "hcmc-italy-2026",
    "Đầu tư",
    "02.06.2026",
    "TP.HCM mở rộng hợp tác với các đối tác Ý",
    "Nhân kỷ niệm 80 năm Quốc khánh Ý, lãnh đạo TP.HCM khẳng định quan hệ hợp tác ngày càng thực chất; thương mại giữa thành phố và Ý vượt 800 triệu USD năm 2025, Ý hiện có 92 dự án FDI tại TP.HCM.",
    "/images/news/hcmc-italy-2026.jpg",
    null,
  ],
  [
    "sci-tech-2026",
    "Chính sách mới",
    "11.05.2026",
    "Việt Nam – Ý mở rộng hợp tác khoa học công nghệ và đổi mới sáng tạo",
    "Bộ Khoa học và Công nghệ cùng Đại sứ quán Ý trao đổi định hướng hợp tác về AI, công nghệ vũ trụ; hai nước hiện có hơn 150 thỏa thuận hợp tác giữa các trường đại học và viện nghiên cứu.",
    "/images/news/sci-tech-2026.jpg",
    null,
  ],
  [
    "parliamentary-2026",
    "Chính sách mới",
    "14.04.2026",
    "Quan hệ nghị viện Việt Nam – Ý được củng cố",
    "Chủ tịch Quốc hội Trần Thanh Mẫn thăm Rome nhân 50 năm quan hệ ngoại giao hai nước; thương mại hai chiều đạt khoảng 7,3 tỷ USD năm 2025, đầu tư đăng ký từ Ý vượt 633 triệu USD.",
    "/images/news/parliamentary-2026.jpg",
    null,
  ],
  [
    "genoa-danang-2026",
    "Văn hóa",
    "19.06.2026",
    "Hội nghị Genoa – Đà Nẵng thúc đẩy hợp tác địa phương",
    "Hội nghị tại Genoa (Ý) đánh dấu bước cụ thể hóa hợp tác giữa hai thành phố; Đại sứ Việt Nam tại Ý nhấn mạnh quan hệ song phương không chỉ dừng ở thương mại và đầu tư mà còn sâu rộng về văn hóa.",
    "/images/news/genoa-danang-2026.jpg",
    null,
  ],
  [
    "consultations-2026",
    "Chính sách mới",
    "16.09.2025",
    "Việt Nam – Ý chuẩn bị vòng Tham vấn Chính trị năm 2026",
    "Hai nước dự kiến tổ chức Tham vấn Chính trị tại Rome vào tháng 3/2026, tập trung vào thương mại, an ninh và hợp tác công nghiệp trong khuôn khổ kế hoạch hành động 2025-2027.",
    "/images/news/consultations-2026.jpg",
    null,
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
