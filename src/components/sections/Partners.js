export function renderPartners(container, { compact = false } = {}) {
  const s = document.createElement("section");
  s.className = `bg-surface-container-low border-y border-outline-variant ${compact ? "py-12" : "py-20"}`;
 
  s.innerHTML =
    groups
      .map(
        ([t, ls]) =>
          `<div><p class="text-label-sm uppercase tracking-widest text-primary mb-3">${t}</p><div class="flex flex-wrap gap-2">${ls.map((x) => `<span class="bg-white border border-outline-variant py-2 px-3 text-xs font-semibold">${x}</span>`).join("")}</div></div>`,
      )
      .join("") +
    "</div></div>";
  container.append(s);
}
