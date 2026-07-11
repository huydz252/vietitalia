const items = [
  "Du lịch",
  "Giáo dục",
  "Công nghệ",
  "Startup",
  "Bất động sản",
  "Logistic",
  "Nông nghiệp",
];
export default function VietnamMarket(container) {
  container.innerHTML =
    '<section class="banner-image bg-cover text-white py-20"><div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop"><p class="text-label-sm uppercase tracking-widest">Dành cho doanh nghiệp Ý</p><h1 class="font-display-lg text-display-lg mt-3">THỊ TRƯỜNG VIỆT NAM</h1><p class="italic">Opportunità per le imprese italiane</p></div></section><section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16"><h2 class="font-headline-md text-headline-md">Những cơ hội mở rộng</h2><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">' +
    items
      .map(
        (x) =>
          `<article class="vietnam-accent bg-surface-container-low p-6"><span class="material-symbols-outlined text-primary">trending_up</span><h3 class="font-headline-sm text-headline-sm mt-3">${x}</h3><p class="mt-2 text-sm text-on-surface-variant">Tiềm năng hợp tác dài hạn tại Việt Nam.</p></article>`,
      )
      .join("") +
    '</div></section><section class="bg-primary text-white text-center p-12"><h2 class="font-headline-md text-headline-md">Tìm đối tác Việt Nam</h2><a data-link href="/business-matching?from=italy-business" class="inline-block mt-6 bg-white text-primary px-6 py-3 font-semibold">Đăng nhu cầu tìm đối tác Việt Nam</a></section>';
}
