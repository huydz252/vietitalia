import { renderPartners } from "../components/sections/Partners.js";
const advisors = ["Kim Lê", "Marco Bianchi", "Nguyễn Minh Anh"];
export default function About(container) {
  container.innerHTML =
    '<section class="banner-image bg-cover text-white py-20"><div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop"><p class="uppercase text-label-sm tracking-widest">Về chúng tôi</p><h1 class="font-display-lg text-display-lg mt-3">VietItalia là ai?</h1><p class="italic mt-2">Una comunità tra Vietnam e Italia</p></div></section><section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16"><div class="max-w-3xl"><h2 class="font-headline-md text-headline-md">Hiệp hội kết nối giá trị chung</h2><p class="mt-5 text-on-surface-variant">VietItalia là không gian hợp tác dành cho những con người, tổ chức và doanh nghiệp tin vào sức mạnh của đối thoại. Chúng tôi tạo điều kiện để văn hóa được chia sẻ, tri thức được trao đổi và các cơ hội kinh doanh được gặp gỡ một cách bền vững.</p></div><h2 class="font-headline-sm text-headline-sm mt-14">Hội đồng cố vấn</h2><div class="grid md:grid-cols-3 gap-6 mt-6">' +
    advisors
      .map(
        (x, i) =>
          `<article class="institutional-shadow bg-white"><div class="h-48 media-cover flex items-center justify-center text-white text-5xl font-headline-md">${x[0]}</div><div class="p-6"><h3 class="font-headline-sm text-headline-sm">${x}</h3><p class="text-primary text-label-sm mt-2">Đại sứ Văn hóa tại Ý</p><p class="text-sm mt-3 text-on-surface-variant">Đồng hành cùng các chương trình trao đổi và phát triển cộng đồng VietItalia.</p></div></article>`,
      )
      .join("") +
    "</div></section>";
  renderPartners(container);
  const c = document.createElement("section");
  c.className = "bg-primary text-white text-center p-12";
  c.innerHTML =
    '<h2 class="font-headline-md text-headline-md">Cùng xây nhịp cầu mới</h2><div class="mt-6 flex justify-center flex-wrap gap-3"><a data-link href="/ambassador" class="bg-white text-primary px-6 py-3 font-semibold">Trở thành Đại sứ</a><a data-link href="/contact" class="border border-white px-6 py-3 font-semibold">Liên hệ</a></div>';
  container.append(c);
}
