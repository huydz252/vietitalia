import { renderHero } from "../components/sections/Hero.js";
import { renderMarketMatch } from "../components/sections/MarketMatch.js";
import { renderAboutUs } from "../components/sections/AboutUs.js";
import { renderNews } from "../components/sections/News.js";
import { renderPartners } from "../components/sections/Partners.js";
import { t } from "../i18n/i18n.js";
export default function Home(container) {
  renderHero(container, t);
  renderMarketMatch(container, t);
  renderAboutUs(container);

  // renderVideoIntro(container);
  renderNews(container);
  renderPartners(container, { compact: true });
}
