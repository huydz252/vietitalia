import { getNavigationLinks, renderNavigation } from "./Navigation.js";
import { getLocale, toggleLocale } from "../../i18n/i18n.js";
import logoUrl from "../../assets/images/logoVNIT.png";

export function renderHeader(container) {
  const bar = document.createElement("div");
  bar.className =
    "fixed inset-x-0 top-0 z-50 bg-surface/95 backdrop-blur border-b border-outline-variant institutional-shadow";
  const row = document.createElement("div");
  row.className = "max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop min-h-[72px] flex items-center justify-between gap-3";

  const brand = document.createElement("a");
  brand.href = "/";
  brand.dataset.link = "";
  brand.className = "flex items-center gap-3 shrink-0";
  const logoImage = document.createElement("img");
  logoImage.src = logoUrl;
  logoImage.alt = "VietItalia logo";
  logoImage.className = "w-12 h-12 object-contain";
  const logoText = document.createElement("span");
  logoText.className = "font-headline-sm text-headline-sm text-primary leading-none";
  logoText.innerHTML = 'Viet<span class="text-secondary">Italia</span><small class="block font-label-sm text-[9px] tracking-[.18em] text-on-surface-variant mt-1">VIETNAM · ITALY</small>';
  brand.append(logoImage, logoText);
  row.append(brand);
  renderNavigation(row);

  const langButton = document.createElement("button");
  langButton.type = "button";
  langButton.className = "px-3 py-2 border border-outline text-label-sm font-semibold text-primary";
  langButton.setAttribute("aria-label", "Đổi ngôn ngữ");
  langButton.textContent = getLocale() === "vi" ? "IT" : "VN";
  langButton.addEventListener("click", () => toggleLocale());
  row.append(langButton);

  const menuButton = document.createElement("button");
  menuButton.type = "button";
  menuButton.className = "xl:hidden p-2 text-primary";
  menuButton.setAttribute("aria-label", "Mở menu");
  menuButton.innerHTML = '<span class="material-symbols-outlined">menu</span>';
  const mobile = document.createElement("div");
  mobile.className = "hidden absolute top-full inset-x-0 bg-surface border-b border-outline-variant p-5 xl:hidden";
  getNavigationLinks().forEach(([path, label]) => {
    const a = document.createElement("a");
    a.href = path;
    a.dataset.link = "";
    a.dataset.route = path;
    a.className = "nav-link block py-3 uppercase text-label-sm";
    a.textContent = label;
    mobile.append(a);
  });
  menuButton.addEventListener("click", () => mobile.classList.toggle("hidden"));
  row.append(menuButton);
  bar.append(row, mobile);
  container.append(bar);
}
