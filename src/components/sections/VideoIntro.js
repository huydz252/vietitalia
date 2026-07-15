import { getLocale, t } from "../../i18n/i18n.js";

const mainLinks = [
  ["/", "nav.home"],
  ["/about", "nav.about"],
  ["/ambassador", "nav.ambassador"],
  ["/events", "nav.events"],
  ["/contact", "nav.contact"],
];

const newsLinks = [
  ["/news", "nav.news"],
  ["/italy-market", "nav.italyMarket"],
  ["/vietnam-market", "nav.vietnamMarket"],
  ["/business-matching", "nav.businessMatching"],
];

const NAV_LINK_CLASS = [
  "nav-link",
  "px-3 py-1.5 rounded-full",
  "bg-primary/10 text-primary",
  "text-[10.5px] font-semibold uppercase tracking-wide",
  "whitespace-nowrap shrink-0",
  "transition-all duration-200",
  "hover:bg-primary hover:text-white",
  "hover:shadow-md hover:-translate-y-0.5",
].join(" ");

const DROPDOWN_CLASS = [
  "absolute left-0 top-full mt-2",
  "w-60",
  "bg-white",
  "border border-outline-variant",
  "rounded-xl shadow-lg",
  "opacity-0 invisible",
  "group-hover:opacity-100",
  "group-hover:visible",
  "transition-all duration-200",
  "z-50",
].join(" ");

const DROPDOWN_ITEM_CLASS = [
  "block",
  "px-5 py-3",
  "text-sm",
  "hover:bg-primary/10",
  "transition",
].join(" ");

export function getNavigationLinks() {
  return mainLinks.map(([path, key]) => [path, t(key)]);
}

export function renderNavigation(container) {
  const nav = document.createElement("nav");

  nav.className = "hidden xl:flex items-center gap-1 min-w-0";
  nav.dataset.locale = getLocale();

  // Menu chính - Dùng trực tiếp mainLinks để lấy key gán vào data-i18n
  mainLinks.forEach(([path, key]) => {
    const a = document.createElement("a");

    a.href = path;
    a.dataset.link = "";
    a.dataset.route = path;
    a.dataset.i18n = key; // Thêm dòng này để đánh dấu khóa dịch
    a.className = NAV_LINK_CLASS;
    a.textContent = t(key);

    nav.append(a);
  });

  // Dropdown Tin tức
  const wrapper = document.createElement("div");
  wrapper.className = "relative group";

  const button = document.createElement("button");
  button.type = "button";
  button.className = NAV_LINK_CLASS;

  // Tách riêng text vào thẻ span có data-i18n để khi đổi ngôn ngữ không làm mất icon
  button.innerHTML = `
    <span data-i18n="nav.news">${t("nav.news")}</span>
    <span class="material-symbols-outlined text-[16px] ml-1 align-middle">
      expand_more
    </span>
  `;

  wrapper.append(button);

  const dropdown = document.createElement("div");
  dropdown.className = DROPDOWN_CLASS;

  newsLinks.forEach(([path, key]) => {
    const a = document.createElement("a");

    a.href = path;
    a.dataset.link = "";
    a.dataset.route = path;
    a.dataset.i18n = key; // Thêm dòng này để đánh dấu khóa dịch
    a.className = DROPDOWN_ITEM_CLASS;
    a.textContent = t(key);

    dropdown.append(a);
  });

  wrapper.append(dropdown);
  nav.append(wrapper);
  container.append(nav);

  return nav;
}

export function updateActiveNavigation(path) {
  document.querySelectorAll("[data-route]").forEach((a) => {
    a.classList.toggle("active", a.dataset.route === path);
  });
}

// Hàm mới: Quét toàn bộ DOM để thay thế chữ dựa trên ngôn ngữ mới
export function updateNavigationLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key); // Dịch lại chữ bằng hàm t()
  });
}