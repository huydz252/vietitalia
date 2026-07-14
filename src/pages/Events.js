import { renderMedia } from "../components/sections/Media.js";
import event1 from "../assets/images/events/event1.jpg";
import event2 from "../assets/images/events/event2.jpg";
import event3 from "../assets/images/events/event3.jpg";
import event4 from "../assets/images/events/event4.jpg";
import event5 from "../assets/images/events/event5.jpg";
import event6 from "../assets/images/events/event6.jpg";
import event7 from "../assets/images/events/event7.jpg";
import event8 from "../assets/images/events/event8.jpg";

const calendar = [
  [
    "Tháng 3",
    "Italian Design Day",
    "Sự kiện thường niên về thiết kế và đổi mới sáng tạo giữa Ý và Việt Nam.",
  ],
  [
    "Tháng 4",
    "Made in Italy Day",
    "Ngày hội quảng bá sản phẩm, công nghệ và thương hiệu Made in Italy.",
  ],
  [
    "02.06",
    "Festa della Repubblica Italiana",
    "Lễ Quốc khánh Ý do Đại sứ quán và Tổng Lãnh sự quán Ý tổ chức.",
  ],
  [
    "Hằng năm",
    "Vietnam Day Abroad",
    "Chương trình quảng bá văn hóa, du lịch và cơ hội đầu tư của Việt Nam tại Ý.",
  ],
  [
    "Tháng 11",
    "Week of Italian Cuisine in the World",
    "Tuần lễ Ẩm thực Ý giới thiệu tinh hoa ẩm thực và văn hóa Ý tại Việt Nam.",
  ],
  [
    "Theo từng kỳ",
    "Italy – Vietnam Business Forum",
    "Diễn đàn kết nối doanh nghiệp, thúc đẩy hợp tác thương mại và đầu tư giữa hai nước.",
  ],
];

export default function Events(container) {
  container.innerHTML = `
    <section class="banner-image bg-cover text-white py-20"
      style="
        height: 400px;
        background-position: center;
        background-image:
          linear-gradient(
              rgba(240, 93, 132, 0.65),
              rgba(51, 141, 112, 0.55)
            ),
          url('src/assets/images/italy/Florence-Duomo.jpg');
      "
    >
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
        <p class="text-label-sm uppercase tracking-widest">Lịch kết nối</p>
        <h1 class="font-display-lg text-display-lg mt-3">Sự kiện Việt Ý</h1>
        <p class="italic">Eventi Vietnam – Italia</p>
      </div>
    </section>

    <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">
      <h2 class="font-headline-md text-headline-md">Lịch sự kiện</h2>

      <div class="mt-7 border-l-2 border-outline-variant">
        ${calendar
      .map(
        ([date, name, status]) => `
              <article class="relative pl-8 py-5 border-b border-outline-variant">
                <span
                  class="absolute -left-[9px] top-7 w-4 h-4 bg-${status === "Đã qua" ? "outline" : "secondary"
          }">
                </span>

                <p class="text-primary font-semibold">${date}</p>
                <h3 class="font-headline-sm text-headline-sm">${name}</h3>
                <p class="text-sm text-on-surface-variant">${status}</p>
              </article>
            `,
      )
      .join("")}
      </div>

      <h2 class="font-headline-sm text-headline-sm mt-14">
        Khoảnh khắc sự kiện
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

${[
      event1,
      event2,
      event3,
      event4,
      event5,
      event6,
      event7,
      event8,
    ]
      .map(
        (img, index) => `
    <div class="overflow-hidden rounded-xl border border-outline-variant institutional-shadow group">

        <img
            src="${img}"
            alt="Event ${index + 1}"
            class="w-full h-44 object-cover transition duration-300 group-hover:scale-105"
        />

    </div> 
    `,
      )
      .join("")}

</div>
    </section>
  `;

  renderMedia(container);

  const press = document.createElement("section");

  press.className =
    "max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop pb-16";

  press.innerHTML = `
    <h2 class="font-headline-sm text-headline-sm">
      Báo chí đưa tin
    </h2>

    <div class="grid md:grid-cols-3 gap-4 mt-5">
      ${[
      ["economic-forum-2024", "Diễn đàn kinh tế"],
      ["verdi-vong-co", "Âm nhạc không biên giới"],
      ["vietnam-day", "Vietnam Day tại Ý"],
    ]
      .map(
        ([slug, title]) => `
            <a
              data-link
              href="/news#${slug}"
              class="border border-outline-variant p-5 hover:border-primary">
              ${title}
              <span class="text-primary">→</span>
            </a>
          `,
      )
      .join("")}
    </div>
  `;

  container.append(press);
}