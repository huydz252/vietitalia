import { getLocale } from "../../i18n/i18n.js"; // Bổ sung import hàm getLocale

export function renderContact(container) {
  const isVi = getLocale() === "vi";

  // --- DỮ LIỆU ĐA NGÔN NGỮ ---
  const text = {
    title: isVi ? "Liên hệ" : "Contatti",
    subtitle: isVi ? "Kết nối với chúng tôi" : "Mettiti in contatto con noi",
    placeholderName: isVi ? "Họ và tên" : "Nome e Cognome",
    placeholderTopic: isVi ? "Chọn chủ đề" : "Seleziona un argomento",
    optCulture: isVi ? "Văn hóa" : "Cultura",
    optEdu: isVi ? "Giáo dục" : "Istruzione",
    optBiz: isVi ? "Kinh doanh" : "Business",
    placeholderMsg: isVi ? "Nội dung" : "Messaggio",
    btnSubmit: isVi ? "Gửi liên hệ" : "Invia messaggio",
    msgSuccess: isVi 
      ? "Cảm ơn bạn. Chúng tôi sẽ phản hồi sớm." 
      : "Grazie. Ti risponderemo al più presto.",
    msgError: isVi 
      ? "Vui lòng điền đầy đủ thông tin hợp lệ." 
      : "Per favore, inserisci informazioni valide in tutti i campi."
  };

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
          ${text.title}
        </h1>
        <p class="italic mt-2">
          ${text.subtitle}
        </p>
      </div>
    </section>

    <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">
      <div class="grid md:grid-cols-2 gap-10">
        <div>
          <h2 class="font-headline-sm text-headline-sm">
            Associazione Culturale VietItalia
          </h2>

          <p class="mt-4 text-on-surface-variant leading-relaxed">
            Feltre (BL) – Italia<br>
            kimleitalia@gmail.com<br>
            vietitalia.bridge@pec.it<br>
            +39 329 964 3581
          </p>
        </div>

        <form class="grid gap-4" novalidate>
          <input
            required
            class="border-outline-variant p-3 rounded-md"
            placeholder="${text.placeholderName}">

          <input
            required
            type="email"
            class="border-outline-variant p-3 rounded-md"
            placeholder="Email">

          <select required class="border-outline-variant p-3 rounded-md">
            <option value="">${text.placeholderTopic}</option>
            <option>${text.optCulture}</option>
            <option>${text.optEdu}</option>
            <option>${text.optBiz}</option>
          </select>

          <textarea
            required
            rows="4"
            class="border-outline-variant p-3 rounded-md"
            placeholder="${text.placeholderMsg}">
          </textarea>

          <button
            class="bg-primary text-white py-3 rounded-md uppercase font-semibold text-label-sm hover:bg-primary/90 transition">
            ${text.btnSubmit}
          </button>

          <p class="form-message text-sm font-medium mt-2"></p>
        </form>
      </div>
    </div>
  `;

  const form = section.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = section.querySelector(".form-message");
    const valid = event.currentTarget.checkValidity();

    message.textContent = valid ? text.msgSuccess : text.msgError;

    message.className =
      "form-message text-sm font-medium mt-2 " +
      (valid ? "text-secondary" : "text-primary");
  });

  container.append(section);
}