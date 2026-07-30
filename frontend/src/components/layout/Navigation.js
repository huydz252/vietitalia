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
  ["/italy-travel", "nav.italyTravel"] // Đã bổ sung trang Du lịch
];

export function getNavigationLinks() {
  return mainLinks.map(([path, key]) => [path, t(key)]);
}

export function renderNavigation(container) {
  const nav = document.createElement("nav");
  nav.className = "hidden xl:flex items-center gap-1 min-w-0";
  nav.dataset.locale = getLocale();

  // Menu chính
  getNavigationLinks().forEach(([path, label]) => {
    const a = document.createElement("a");
    a.href = path;
    a.dataset.link = "";
    a.dataset.route = path;

    a.className = [
      "nav-link",
      "px-3 py-1.5 rounded-full",
      "bg-primary/10 text-primary",
      "text-[10.5px] font-semibold uppercase tracking-wide",
      "whitespace-nowrap shrink-0",
      "transition-all duration-200",
      "hover:bg-primary hover:text-white",
      "hover:shadow-md hover:-translate-y-0.5",
    ].join(" ");
    
    a.textContent = label;
    nav.append(a);
  });

  // Dropdown Tin tức
  const wrapper = document.createElement("div");
  wrapper.className = "relative group";

  const button = document.createElement("button");
  button.type = "button";
  button.className =
    "nav-link px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10.5px] font-semibold uppercase tracking-wide whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-md";

  button.innerHTML = `
    ${t("nav.news")}
    <span class="material-symbols-outlined text-[16px] ml-1 align-middle">
      expand_more
    </span>
  `;

  wrapper.append(button);

  const dropdown = document.createElement("div");
  dropdown.className =
    "absolute left-0 top-full mt-2 w-60 bg-white border border-outline-variant rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden";

  newsLinks.forEach(([path, key]) => {
    const a = document.createElement("a");
    a.href = path;
    a.dataset.link = "";
    a.dataset.route = path;
    // Bổ sung class để dễ style khi active
    a.className = "dropdown-item block px-5 py-3 text-sm hover:bg-primary/10 transition";
    a.textContent = t(key);
    dropdown.append(a);
  });

  wrapper.append(dropdown);
  nav.append(wrapper);

  container.append(nav);
  return nav;
}

export function updateActiveNavigation(path) {
  // 1. Reset tất cả các thẻ về trạng thái mặc định ban đầu
  document.querySelectorAll("[data-route], .nav-link, button, summary").forEach((el) => {
    el.classList.remove("active");
    el.classList.remove("text-primary", "font-bold", "bg-primary/5");
  });

  // 2. Tìm tất cả thẻ (cả Desktop & Mobile) có data-route khớp với URL hiện hành
  const activeLinks = document.querySelectorAll(`[data-route="${path}"]`);
  
  activeLinks.forEach((activeLink) => {
    // Kích hoạt thẻ hiện tại
    activeLink.classList.add("active");

    // === XỬ LÝ DROPDOWN TRÊN DESKTOP ===
    const desktopDropdown = activeLink.closest('.group');
    if (desktopDropdown) {
      // Làm đậm và đổi màu nền nhẹ cho mục đang chọn bên trong menu thả xuống
      activeLink.classList.add("text-primary", "font-bold", "bg-primary/5");
      
      // Tìm nút "TIN TỨC" cha và kích hoạt hiệu ứng active
      const parentBtn = desktopDropdown.querySelector('button');
      if (parentBtn) {
        parentBtn.classList.add("active");
      }
    }

    // === XỬ LÝ DROPDOWN TRÊN MOBILE ===
    const mobileDropdown = activeLink.closest('details');
    if (mobileDropdown) {
      // Làm đậm chữ mục đang chọn
      activeLink.classList.add("text-primary", "font-bold");
      
      // Đổi màu chữ cho nút "TIN TỨC" cha
      const parentSummary = mobileDropdown.querySelector('summary');
      if (parentSummary) {
        parentSummary.classList.add("text-primary");
      }
    }
  });
}

export function updateNavigationLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });
}