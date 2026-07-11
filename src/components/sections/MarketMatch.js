export function renderMarketMatch(container, translate = (key) => key) {
  const section = document.createElement("section");
  section.className =
    "py-20 max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop";
  section.innerHTML = `<div class="grid md:grid-cols-2 gap-8"><article class="italy-accent bg-surface-container-low p-8 institutional-shadow text-center"><p class="text-secondary font-semibold">[IT]</p><h2 class="font-headline-md text-headline-md mt-2">${translate("home.italiaCercaTitle")}</h2><a data-link href="/business-matching?from=italy" class="inline-block bg-secondary text-white px-6 py-3 mt-6 uppercase text-label-sm">${translate("home.ctaViewDemand")}</a></article><article class="vietnam-accent bg-surface-container-low p-8 institutional-shadow text-center"><p class="text-primary font-semibold">[VN]</p><h2 class="font-headline-md text-headline-md mt-2">${translate("home.vietnamCercaTitle")}</h2><a data-link href="/business-matching?from=vietnam" class="inline-block bg-primary text-white px-6 py-3 mt-6 uppercase text-label-sm">${translate("home.ctaViewDemandVn")}</a></article></div>`;
  container.append(section);
}
