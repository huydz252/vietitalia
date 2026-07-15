export function renderContact(container) {
  const section = document.createElement("section");

  section.innerHTML = `
    <section class="banner-image bg-cover text-white py-20"
      style="
        height: 400px;
        background-position: center bottom;
        background-image:
          linear-gradient(
              rgba(199, 110, 134, 0.65),
              rgba(51, 141, 112, 0.55)
            ),
          url('/images/italy/Rome.jpg');
      "
    >
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
        <p class="text-label-sm uppercase tracking-widest">
          VietItalia Bridge
        </p>
        <h1 class="font-display-lg text-display-lg mt-3">
          Liên hệ
        </h1>
        <p class="italic">
          Contattaci
        </p>
      </div>
    </section>

    <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">
      <div class="grid md:grid-cols-2 gap-10">
        <div>
          <h2 class="font-headline-sm text-headline-sm">
            Associazione Culturale VietItalia
          </h2>

          <p class="mt-4 text-on-surface-variant">
            Feltre (BL) – Italia<br>
            kimleitalia@gmail.com<br>
            vietitalia.bridge@pec.it<br>
            +39 329 964 3581
          </p>
        </div>

        <form class="grid gap-4" novalidate>
          <input
            required
            class="border-outline-variant"
            placeholder="Họ và tên">

          <input
            required
            type="email"
            class="border-outline-variant"
            placeholder="Email">

          <select required class="border-outline-variant">
            <option value="">Chọn chủ đề</option>
            <option>Văn hóa</option>
            <option>Giáo dục</option>
            <option>Kinh doanh</option>
          </select>

          <textarea
            required
            rows="4"
            class="border-outline-variant"
            placeholder="Nội dung">
          </textarea>

          <button
            class="bg-primary text-white py-3 uppercase text-label-sm">
            Gửi liên hệ
          </button>

          <p class="form-message text-sm"></p>
        </form>
      </div>
    </div>
  `;

  // Xử lý logic submit form
  const form = section.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = section.querySelector(".form-message");
    const valid = event.currentTarget.checkValidity();

    message.textContent = valid
      ? "Cảm ơn bạn. Chúng tôi sẽ phản hồi sớm."
      : "Vui lòng điền đầy đủ thông tin hợp lệ.";

    message.className =
      "form-message text-sm " +
      (valid ? "text-secondary" : "text-primary");
  });

  container.append(section);
}