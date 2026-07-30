const highlights = [
  ["landscape", "Dolomiti"],
  ["handshake", "Vietnam"],
  ["school", "Education"],
  ["public", "Business"],
  ["theater_comedy", "Culture"],
];

export function renderHero(container, translate = (key) => key) {
  const section = document.createElement("section");
  section.className =
    "hero-image bg-cover bg-center min-h-[680px] flex items-center justify-center text-white";
  section.innerHTML = `<div class="max-w-4xl px-margin-mobile text-center"><div class="flex flex-wrap justify-center gap-5 md:gap-8 mb-12">${highlights.map(([icon, label]) => `<div class="text-center"><span class="material-symbols-outlined border border-white/40 w-14 h-14 grid place-items-center mx-auto mb-2">${icon}</span><p class="text-[10px] uppercase tracking-widest">${label}</p></div>`).join("")}</div><h1 class="font-display-lg text-display-lg md:text-5xl">${translate("home.heroTitle")}</h1><p class="mt-3 text-xl md:text-2xl italic">${translate("home.heroSubtitle")}</p><p class="mt-7 text-body-lg uppercase tracking-wide border-y border-white/30 py-4">${translate("home.tagline")}</p></div>`;
  container.append(section);
}
