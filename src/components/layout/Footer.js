import { getLocale } from "../../i18n/i18n.js"; // Bổ sung import hàm getLocale

export function renderFooter(container) {
  const isVi = getLocale() === "vi";

  // --- DỮ LIỆU ĐA NGÔN NGỮ ---
  const text = {
    partners: isVi ? "Đối tác hợp tác" : "Partner di cooperazione",
    slogan: isVi 
      ? "Cầu nối văn hóa, giáo dục và kinh doanh giữa Việt Nam và Ý." 
      : "Ponte culturale, educativo e commerciale tra Vietnam e Italia.",
    contact: isVi ? "Liên hệ" : "Contatti"
  };

  const foot = document.createElement("div");
  foot.className = "bg-on-surface text-white";

  foot.innerHTML = `
    <!-- Khối container bọc ngoài: canh giữa màn hình, sắp xếp ngang, khoảng cách giữa các logo là gap-10 -->
    <div class="w-full flex flex-col justify-center items-center py-8 my-10 bg-white">
      <div class="w-full flex justify-center items-center bg-white py-4">
        <h3 class="text-xl font-bold text-[#8B0022] uppercase border-b-2 border-[#8B0022] pb-2">
          ${text.partners}
        </h3>
      </div> 
      
      <div class="w-full flex flex-wrap justify-center items-center gap-6 md:gap-10 bg-white px-4">
        <!-- Logo Vinabook -->
        <a href="https://vinabook.edu.vn/" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img src="/images/logos/vina.png" alt="Vinabook" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </a>

        <!-- Logo Ikigai -->
        <a href="https://ai.vinabook.edu.vn/" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img src="/images/logos/ikigai.png" alt="Ikigai AI" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </a>

        <!-- Logo Kiwi Media -->
        <a href="https://kiwimedias-webapp.vercel.app/" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img src="/images/logos/WIKI_MEDIA.png" alt="Kiwi Media" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </a>

        <!-- Logo Gimmy -->
        <a href="https://link-cong-ty-1.com" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img src="/images/logos/logo_Gimmy-removebg-preview.png" alt="Gimmy" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </a>

        <!-- Logo Unidolomiti -->
        <a href="https://dolomitihub.it/" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img src="/images/logos/Logo_Unidolomiti.png" alt="Unidolomiti" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </a>

        <!-- Logo Villa -->
        <a href="https://link-cong-ty-3.com" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img src="/images/logos/logo_Villa_2.jpg" alt="Villa San Liberale" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </a>

        <!-- Logo Centro Consorzi -->
        <a href="https://link-cong-ty-3.com" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img src="/images/logos/Logo_Centro_Consorzi.png" alt="Centro Consorzi" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </a>

        <!-- Logo Telebelluno -->
        <a href="https://link-cong-ty-3.com" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img src="/images/logos/LOGO_TELEBELLUNO.png" alt="Telebelluno" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </a>
      </div>
    </div>

    <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-12 grid md:grid-cols-3 gap-8">
      <div>
        <p class="font-headline-sm text-headline-sm">
          Viet<span class="text-secondary-container">Italia</span>
        </p>
        <p class="mt-3 text-sm text-white/70">
          ${text.slogan}
        </p>
      </div>

      <div>
        <p class="text-label-md uppercase tracking-widest">
          ${text.contact}
        </p>
        <p class="mt-3 text-sm text-white/70">
          Feltre (BL) – Italia<br />
          +39 329 964 3581
        </p>
      </div>

      <div>
        <a class="block text-sm hover:text-secondary-container" href="mailto:kimleitalia@gmail.com">
          kimleitalia@gmail.com
        </a>
        <a class="block mt-2 text-sm hover:text-secondary-container" href="mailto:vietitalia.bridge@pec.it">
          vietitalia.bridge@pec.it
        </a>
      </div>
    </div>

    <div class="border-t border-white/10 text-center py-4 text-xs text-white/50">
      © VietItalia Bridge
    </div>
  `;

  container.append(foot);
}