import { renderMedia } from "../components/sections/Media.js";
const calendar = [
  ["25.07", "Họp báo tại Ý", "Sắp diễn ra"],
  ["29.08", "Vietnam Day", "Sắp diễn ra"],
  ["Mùa Thu", "Festa Vietnamita Mùa Thu", "Sắp diễn ra"],
  ["10.10", "Đà Nẵng Day", "Đã qua"],
  ["18.11", "Phú Quốc Day", "Đã qua"],
  ["05.12", "Startup Forum", "Sắp diễn ra"],
];
export default function Events(container) {
  container.innerHTML =
    '<section class="banner-image bg-cover text-white py-20"><div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop"><p class="text-label-sm uppercase tracking-widest">Lịch kết nối</p><h1 class="font-display-lg text-display-lg mt-3">Sự kiện Việt Ý</h1><p class="italic">Eventi Vietnam – Italia</p></div></section><section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16"><h2 class="font-headline-md text-headline-md">Lịch sự kiện</h2><div class="mt-7 border-l-2 border-outline-variant">' +
    calendar
      .map(
        ([d, n, status]) =>
          `<article class="relative pl-8 py-5 border-b border-outline-variant"><span class="absolute -left-[9px] top-7 w-4 h-4 bg-${status === "Đã qua" ? "outline" : "secondary"}"></span><p class="text-primary font-semibold">${d}</p><h3 class="font-headline-sm text-headline-sm">${n}</h3><p class="text-sm text-on-surface-variant">${status}</p></article>`,
      )
      .join("") +
    '</div><h2 class="font-headline-sm text-headline-sm mt-14">Khoảnh khắc sự kiện</h2><div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">' +
    Array.from(
      { length: 8 },
      (_, i) =>
        `<div class="media-cover h-36 grid place-items-center text-white text-sm">VietItalia ${i + 1}</div>`,
    ).join("") +
    "</div></section>";
  renderMedia(container);
  const press = document.createElement("section");
  press.className =
    "max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop pb-16";
  press.innerHTML =
    '<h2 class="font-headline-sm text-headline-sm">Báo chí đưa tin</h2><div class="grid md:grid-cols-3 gap-4 mt-5">' +
    [
      ["economic-forum-2024", "Diễn đàn kinh tế"],
      ["verdi-vong-co", "Âm nhạc không biên giới"],
      ["vietnam-day", "Vietnam Day tại Ý"],
    ]
      .map(
        ([slug, t]) =>
          `<a data-link href="/news#${slug}" class="border border-outline-variant p-5 hover:border-primary">${t} <span class="text-primary">→</span></a>`,
      )
      .join("") +
    "</div>";
  container.append(press);
}
