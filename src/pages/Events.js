import { renderMedia } from "../components/sections/Media.js";

// Đã xóa các dòng import event1 đến event8

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
    "Tuần lễ Ẩm thực Ý giới thiệu tinh hoa ẩm thực Ý tại Việt Nam.",
  ],
  [
    "Theo từng kỳ",
    "Italy – Vietnam Business Forum",
    "Diễn đàn kết nối doanh nghiệp, thúc đẩy hợp tác thương mại và đầu tư.",
  ],
];

const gallery = [
  {
    image: "/images/events/event1.jpg",
    title: "Vietnam Day Abroad",
    caption: "Chương trình quảng bá văn hóa, du lịch và hình ảnh Việt Nam tại Ý.",
  },
  {
    image: "/images/events/event2.jpg",
    title: "Italian Design Day",
    caption: "Sự kiện kết nối thiết kế, sáng tạo và đổi mới giữa hai quốc gia.",
  },
  {
    image: "/images/events/event3.jpg",
    title: "Made in Italy Day",
    caption: "Giới thiệu các sản phẩm, công nghệ và thương hiệu Made in Italy.",
  },
  {
    image: "/images/events/event4.jpg",
    title: "Festa della Repubblica Italiana",
    caption: "Lễ Quốc khánh Ý với nhiều hoạt động ngoại giao và giao lưu văn hóa.",
  },
  {
    image: "/images/events/event5.jpg",
    title: "Week of Italian Cuisine",
    caption: "Tuần lễ quảng bá ẩm thực Ý cùng các đầu bếp và nhà hàng nổi tiếng.",
  },
  {
    image: "/images/events/event6.jpg",
    title: "Italy – Vietnam Business Forum",
    caption: "Diễn đàn kết nối doanh nghiệp và mở rộng cơ hội đầu tư song phương.",
  },
  {
    image: "/images/events/event7.jpg",
    title: "Giao lưu văn hóa Việt Nam – Ý",
    caption: "Biểu diễn nghệ thuật và giao lưu cộng đồng giữa hai nền văn hóa.",
  },
  {
    image: "/images/events/event8.jpg",
    title: "Hội nghị hợp tác Việt Nam – Ý",
    caption: "Các địa phương và doanh nghiệp thúc đẩy hợp tác trong nhiều lĩnh vực.",
  },
];

export default function Events(container) {
  container.innerHTML = `
<section class="banner-image bg-cover text-white py-20"
style="
height:400px;
background-position:center;
background-image:
linear-gradient(
rgba(240,93,132,.65),
rgba(51,141,112,.55)
),
url('/images/italy/Florence-Duomo.jpg');
">

<div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">

<p class="text-label-sm uppercase tracking-widest">
Lịch kết nối
</p>

<h1 class="font-display-lg text-display-lg mt-3">
Sự kiện Việt Ý
</h1>

<p class="italic">
Eventi Vietnam – Italia
</p>

</div>

</section>

<section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">

<h2 class="font-headline-md text-headline-md">
Lịch sự kiện
</h2>

<div class="mt-8 border-l-2 border-outline-variant">

${calendar
  .map(
    ([date, title, description]) => `
<article class="relative pl-8 py-6 border-b border-outline-variant">

<span class="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-secondary"></span>

<p class="text-primary font-semibold">
${date}
</p>

<h3 class="font-headline-sm text-headline-sm mt-2">
${title}
</h3>

<p class="text-sm text-on-surface-variant mt-2 leading-6">
${description}
</p>

</article>
`,
  )
  .join("")}

</div>

<h2 class="font-headline-sm text-headline-sm mt-16">
Khoảnh khắc sự kiện
</h2>

<p class="text-on-surface-variant mt-2">
Những hình ảnh tiêu biểu ghi lại các hoạt động giao lưu văn hóa, ngoại giao,
kinh tế và hợp tác giữa Việt Nam và Ý.
</p>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

${gallery
  .map(
    (item) => `
<article class="bg-white rounded-xl overflow-hidden border border-outline-variant institutional-shadow group">

<img
src="${item.image}"
alt="${item.title}"
class="w-full h-52 object-cover transition duration-300 group-hover:scale-105"
/>

<div class="p-4">

<h3 class="font-semibold text-base">
${item.title}
</h3>

<p class="text-sm text-on-surface-variant mt-2 leading-6">
${item.caption}
</p>

</div>

</article>
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

<p class="text-on-surface-variant mt-2">
Các bài viết nổi bật phản ánh sự phát triển trong quan hệ hợp tác Việt Nam – Ý.
</p>

<div class="grid md:grid-cols-3 gap-5 mt-6">

${[
  [
    "trade-2026",
    "Việt Nam đẩy mạnh hợp tác công nghệ và tăng trưởng xanh với Ý",
  ],
  [
    "genoa-danang-2026",
    "Hội nghị Genoa – Đà Nẵng thúc đẩy hợp tác địa phương",
  ],
  [
    "parliamentary-2026",
    "Quan hệ nghị viện Việt Nam – Ý được củng cố",
  ],
]
  .map(
    ([slug, title]) => `
<a
data-link
href="/news#${slug}"
class="border border-outline-variant rounded-xl p-6 hover:border-primary hover:shadow-md transition">

<h3 class="font-semibold leading-7">
${title}
</h3>

<span class="inline-block mt-4 text-primary font-semibold">
Đọc bài viết →
</span>

</a>
`,
  )
  .join("")}

</div>
`;

  container.append(press);
}