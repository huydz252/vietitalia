import { renderPartners } from "../components/sections/Partners.js";
import { t } from "../i18n/i18n.js";

const advisors = [
  "Kim Lê",
  "Marco Bianchi",
  "Nguyễn Minh Anh",
];

export default function About(container) {
  container.innerHTML =
    `
      <section
        class="bg-cover bg-center bg-no-repeat text-white py-20"
        style="
          height: 400px;
          background-image:
            linear-gradient(
              rgba(240, 93, 132, 0.65),
              rgba(51, 141, 112, 0.55)
            ),
            url('src/assets/images/italy/Rome.jpg');
        "
      >
        <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
          <p class="uppercase text-label-sm tracking-widest">
            ${t("about.eyebrow")}
          </p>

          <h1 class="font-display-lg text-display-lg mt-3">
            ${t("about.title")}
          </h1>

          <p class="italic mt-2">
            ${t("about.subtitle")}
          </p>
        </div>
      </section>

      <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">
        <div class="max-w-3xl">
          <h2 class="font-headline-md text-headline-md">
            ${t("about.introTitle")}
          </h2>

          <p class="mt-5 text-on-surface-variant">
            ${t("about.intro")}
          </p>
        </div>

        <h2 class="font-headline-sm text-headline-sm mt-14">
          ${t("about.advisorsTitle")}
        </h2>

        <div class="grid md:grid-cols-3 gap-6 mt-6">
    ` +
    advisors
      .map(
        (advisor) => `
          <article class="institutional-shadow bg-white">
            <div class="h-48 media-cover flex items-center justify-center text-white text-5xl font-headline-md">
              ${advisor[0]}
            </div>

            <div class="p-6">
              <h3 class="font-headline-sm text-headline-sm">
                ${advisor}
              </h3>

              <p class="text-primary text-label-sm mt-2">
                ${t("about.advisorRole")}
              </p>

              <p class="text-sm mt-3 text-on-surface-variant">
                ${t("about.advisorDescription")}
              </p>
            </div>
          </article>
        `,
      )
      .join("") +
    `
        </div>
      </section>
    `;

  renderPartners(container);

  const c = document.createElement("section");

  c.className = "bg-primary text-white text-center p-12";

  c.innerHTML = `
    <h2 class="font-headline-md text-headline-md">
      ${t("about.ctaTitle")}
    </h2>

    <div class="mt-6 flex justify-center flex-wrap gap-3">
      <a
        data-link
        href="/ambassador"
        class="bg-white text-primary px-6 py-3 font-semibold"
      >
        ${t("about.ctaAmbassador")}
      </a>

      <a
        data-link
        href="/contact"
        class="border border-white px-6 py-3 font-semibold"
      >
        ${t("about.ctaContact")}
      </a>
    </div>
  `;

  container.append(c);
}