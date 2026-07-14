export function renderAmbassadorIntro(container) {
  const s = document.createElement("section");

  s.className =
    "py-16 max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop grid md:grid-cols-2 gap-10";

  s.innerHTML = `
    <div>
      <p class="text-label-sm uppercase text-primary tracking-widest">
        Chương trình
      </p>

      <h2 class="font-headline-md text-headline-md mt-3">
        Trở thành người kể chuyện cho nhịp cầu Việt – Ý
      </h2>

      <p class="mt-5 text-on-surface-variant">
        Chương trình Đại sứ Văn hóa VietItalia quy tụ những cá nhân có tinh thần
        cống hiến, mang trải nghiệm và ý tưởng thiết thực tới cộng đồng hai nước.
      </p>

      <p class="italic mt-3 text-sm">
        Un programma per chi costruisce connessioni autentiche.
      </p>
    </div>

    <div class="bg-surface-container-low p-7 italy-accent">
      <p class="font-semibold">
        Điều bạn nhận được
      </p>

      <ul class="mt-4 space-y-2 text-on-surface-variant">
        <li>• Mạng lưới chuyên gia song phương</li>
        <li>• Cơ hội dẫn dắt dự án cộng đồng</li>
        <li>• Chứng nhận VietItalia Bridge</li>
      </ul>
    </div>
  `;

  container.append(s);
}