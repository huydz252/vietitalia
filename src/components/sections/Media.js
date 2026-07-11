export function renderMedia(container) {
  const s = document.createElement("section");
  s.className =
    "py-20 max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop";
  s.innerHTML =
    '<h2 class="font-headline-md text-headline-md">Góc truyền thông</h2><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">' +
    ["Truyền hình Ý", "Báo chí Việt Nam", "Talkshow", "Phỏng vấn chuyên gia"]
      .map(
        (x, i) =>
          `<article class="bg-surface-container-low p-6 italy-accent"><span class="material-symbols-outlined text-secondary text-4xl">play_circle</span><h3 class="font-headline-sm text-headline-sm mt-4">${x}</h3><p class="mt-2 text-sm text-on-surface-variant">Câu chuyện và góc nhìn kết nối hai quốc gia.</p></article>`,
      )
      .join("") +
    "</div>";
  container.append(s);
}
