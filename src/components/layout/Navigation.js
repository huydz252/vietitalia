import { getLocale, t } from "../../i18n/i18n.js";

const linkDefinitions = [
  ["/", "nav.home"],
  ["/about", "nav.about"],
  ["/ambassador", "nav.ambassador"],
  ["/events", "nav.events"],
  ["/news", "nav.news"],
  ["/italy-market", "nav.italyMarket"],
  ["/vietnam-market", "nav.vietnamMarket"],
  ["/business-matching", "nav.businessMatching"],
  ["/contact", "nav.contact"],
];

export function getNavigationLinks() {
  return linkDefinitions.map(([path, key]) => [path, t(key)]);
}

export function renderNavigation(container) {
  const nav = document.createElement("nav");
  nav.className = "hidden xl:flex items-center gap-1 min-w-0";
  nav.dataset.locale = getLocale();
  getNavigationLinks().forEach(([path, label]) => {
    const a = document.createElement("a");
    a.href = path;
    a.dataset.link = "";
    a.dataset.route = path;
    a.className =
      "nav-link px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10.5px] font-semibold uppercase tracking-wide whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-md hover:-translate-y-0.5";
    a.textContent = label;
    nav.append(a);
  });
  container.append(nav);
  return nav;
}

export function updateActiveNavigation(path) {
  document
    .querySelectorAll("[data-route]")
    .forEach((a) => a.classList.toggle("active", a.dataset.route === path));
}