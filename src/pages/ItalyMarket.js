import { renderJobMarket } from "./JobMarket.js";
const importNeeds = [
  "Nông sản",
  "Thực phẩm",
  "Gia vị",
  "Cà phê",
  "Nội thất",
  "Dệt may",
];
const opportunities = ["Du lịch", "Công nghệ", "Giáo dục", "Bất động sản"];
function grid(title, items, icon) {
  const s = document.createElement("section");
  s.className = "mt-12";
  s.innerHTML = `<h2 class="font-headline-sm text-headline-sm">${title}</h2><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">${items.map((x) => `<article class="italy-accent bg-surface-container-low p-5"><span class="material-symbols-outlined text-secondary">${icon}</span><h3 class="font-headline-sm text-headline-sm mt-3">${x}</h3><p class="mt-2 text-sm text-on-surface-variant">Cơ hội hợp tác và phát triển chuỗi giá trị giữa hai thị trường.</p></article>`).join("")}</div>`;
  return s;
}
export default function ItalyMarket(container) {
  container.innerHTML =
    '<section class="banner-image bg-cover text-white py-20"><div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop"><p class="text-label-sm uppercase tracking-widest">Dành cho doanh nghiệp Việt Nam</p><h1 class="font-display-lg text-display-lg mt-3">THỊ TRƯỜNG Ý ĐANG CẦN GÌ?</h1><p class="italic">Quali opportunità offre il mercato italiano?</p></div></section>';
  const main = document.createElement("div");
  main.className =
    "max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16";
  main.append(
    grid("Nhu cầu nhập khẩu", importNeeds, "inventory_2"),
    grid("Cơ hội hợp tác", opportunities, "handshake"),
  );
  const tabs = document.createElement("div");
  tabs.className = "mt-14";
  tabs.innerHTML =
    '<button class="job-tab px-5 py-3 bg-secondary text-white text-label-sm uppercase">Job Market</button><div class="job-content"></div>';
  main.append(tabs);
  container.append(main);
  const showJobs = () => {
    tabs.querySelector(".job-content").replaceChildren();
    renderJobMarket(tabs.querySelector(".job-content"), { embedded: true });
  };
  tabs.querySelector(".job-tab").addEventListener("click", () => {
    history.replaceState({}, "", "/italy-market#job-market");
    showJobs();
  });
  if (location.hash === "#job-market") showJobs();
  const c = document.createElement("section");
  c.className = "bg-secondary text-white p-12 text-center";
  c.innerHTML =
    '<h2 class="font-headline-md text-headline-md">Sẵn sàng mở rộng hợp tác?</h2><a data-link href="/business-matching?from=vietnam-business" class="inline-block bg-white text-secondary px-6 py-3 mt-6 font-semibold">Đăng nhu cầu hợp tác</a>';
  container.append(c);
}
