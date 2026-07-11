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
  nav.className = "hidden xl:flex items-center gap-5";
  nav.dataset.locale = getLocale();
  getNavigationLinks().forEach(([path, label]) => {
    const a = document.createElement("a");
    a.href = path;
    a.dataset.link = "";
    a.dataset.route = path;
    a.className =
      "nav-link py-7 text-[11px] font-semibold uppercase tracking-wide whitespace-nowrap hover:text-primary";
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
