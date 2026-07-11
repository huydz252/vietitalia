import { renderNews } from "../components/sections/News.js";
export default function News(container) {
  container.innerHTML =
    '<section class="banner-image bg-cover text-white py-20"><div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop"><p class="text-label-sm uppercase tracking-widest">Góc nhìn song phương</p><h1 class="font-display-lg text-display-lg mt-3">Tin tức Việt Nam – Ý</h1><p class="italic">Notizie Vietnam – Italia</p></div></section>';
  renderNews(container, { limit: 20, filterable: true });
}
