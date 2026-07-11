import { renderAmbassadorIntro } from "../components/sections/Ambassador.js";
const projects = [
  "Ẩm thực không biên giới",
  "Lớp tiếng Ý cộng đồng",
  "Sáng kiến du lịch xanh",
];
export default function Ambassador(container) {
  container.innerHTML =
    '<section class="banner-image bg-cover text-white py-20"><div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop"><p class="text-label-sm uppercase tracking-widest">VietItalia Bridge</p><h1 class="font-display-lg text-display-lg mt-3">Đại Sứ Văn Hóa Việt Ý</h1><p class="italic">Ambasciatori culturali Vietnam – Italia</p></div></section>';
  renderAmbassadorIntro(container);
  const s = document.createElement("section");
  s.className =
    "max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop pb-16";
  s.innerHTML =
    '<div class="grid lg:grid-cols-2 gap-10"><form class="bg-surface-container-low p-7 grid gap-4" novalidate><h2 class="font-headline-sm text-headline-sm">Đăng ký tham gia</h2><input required placeholder="Họ và tên"><input required type="email" placeholder="Email"><select required><option value="">Quốc gia</option><option>Việt Nam</option><option>Ý</option></select><textarea required rows="4" placeholder="Lý do tham gia"></textarea><button class="bg-primary text-white py-3">Gửi đăng ký</button><p class="form-message text-sm"></p></form><div><h2 class="font-headline-sm text-headline-sm">Dấu ấn chương trình</h2><div class="grid grid-cols-2 gap-4 mt-5">' +
    [
      ["48", "Đại sứ"],
      ["16", "Dự án"],
      ["12", "Tỉnh thành"],
      ["2", "Quốc gia"],
    ]
      .map(
        ([n, t]) =>
          `<div class="vietnam-accent bg-surface-container-low p-5"><p class="text-3xl font-headline-md text-primary">${n}</p><p class="text-sm">${t}</p></div>`,
      )
      .join("") +
    '</div></div></div><h2 class="font-headline-sm text-headline-sm mt-14">Dự án cộng đồng</h2><div class="grid md:grid-cols-3 gap-5 mt-5">' +
    projects
      .map(
        (x) =>
          `<article class="italy-accent bg-white institutional-shadow p-6"><span class="material-symbols-outlined text-secondary">diversity_3</span><h3 class="font-headline-sm text-headline-sm mt-4">${x}</h3><p class="text-sm mt-2 text-on-surface-variant">Kết nối sáng kiến địa phương với những người bạn Ý và Việt Nam.</p></article>`,
      )
      .join("") +
    '</div><div class="grid md:grid-cols-2 gap-6 mt-14"><article class="p-6 bg-surface-container-low"><h3 class="font-headline-sm text-headline-sm">Cultural Ambassador</h3><p class="mt-3 italic">“Tôi tìm thấy cộng đồng cùng gìn giữ những câu chuyện đẹp.”</p></article><article class="p-6 bg-surface-container-low"><h3 class="font-headline-sm text-headline-sm">Business Ambassador</h3><p class="mt-3 italic">“Mỗi kết nối đúng lúc có thể tạo nên một dự án bền vững.”</p></article></div><div class="grid md:grid-cols-2 gap-8 mt-14 items-center"><div class="h-52 media-cover grid place-items-center text-white text-center font-headline-sm">VIETITALIA<br>AMBASSADOR CERTIFICATE</div><div><h2 class="font-headline-sm text-headline-sm">Chứng nhận VietItalia</h2><p class="mt-3 text-on-surface-variant">Sau khi hoàn thành hành trình đào tạo và đóng góp dự án, đại sứ được ghi nhận bằng chứng nhận của VietItalia Bridge.</p></div></div>';
  s.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = e.currentTarget.checkValidity();
    s.querySelector(".form-message").textContent = ok
      ? "Đăng ký đã được ghi nhận."
      : "Vui lòng điền đủ thông tin.";
  });
  container.append(s);
}
