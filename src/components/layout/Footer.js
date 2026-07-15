export function renderFooter(container) {
  const foot = document.createElement("div");

  foot.className = "bg-on-surface text-white";

  foot.innerHTML = `


    <!-- Khối container bọc ngoài: canh giữa màn hình, sắp xếp ngang, khoảng cách giữa các logo là gap-10 -->
    
    <div class="w-full flex flex-col justify-center items-center py-8 my-10 bg-white">
      <div class="w-full flex justify-center items-center bg-white py-4">
        <h3 class="text-xl font-bold text-[#8B0022] uppercase">
          Đối tác hợp tác
        </h3>
      </div> 
      
      <div class="w-full flex flex-row justify-center items-center gap-10 bg-white">
        <!-- Logo Công ty 0 -->
        <!-- target="_blank" giúp mở liên kết ở một tab mới -->
        <a href="https://vinabook.edu.vn/" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img 
            src="/images/logos/ikigai.png" 
            alt="Tên công ty 1" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </a>

        <!-- Logo Công ty 1 -->
        <!-- target="_blank" giúp mở liên kết ở một tab mới -->
        <a href="https://link-cong-ty-1.com" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img 
            src="/images/logos/logo_Gimmy-removebg-preview.png" 
            alt="Tên công ty 1" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </a>

        <!-- Logo Công ty 2 -->
        <a href="https://dolomitihub.it/" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img 
            src="/images/logos/Logo_Unidolomiti.png" 
            alt="Tên công ty 2" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </a>

        <!-- Logo Công ty 3 -->
        <a href="https://link-cong-ty-3.com" target="_blank" rel="noopener noreferrer" 
          class="transition-transform duration-300 hover:scale-110">
          <img 
            src="/images/logos/logo_Villa_2.jpg" 
            alt="Tên công ty 3" 
            class="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </a>

      </div>
    </div>

    <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-12 grid md:grid-cols-3 gap-8">
      <div>
        <p class="font-headline-sm text-headline-sm">
          Viet<span class="text-secondary-container">Italia</span>
        </p>
        <p class="mt-3 text-sm text-white/70">
          Cầu nối văn hóa, giáo dục và kinh doanh giữa Việt Nam và Ý.
        </p>
      </div>

      <div>
        <p class="text-label-md uppercase tracking-widest">
          Liên hệ
        </p>
        <p class="mt-3 text-sm text-white/70">
          Feltre (BL) – Italia<br />
          +39 329 964 3581
        </p>
      </div>

      <div>
        <a
          class="block text-sm hover:text-secondary-container"
          href="mailto:kimleitalia@gmail.com"
        >
          kimleitalia@gmail.com
        </a>

        <a
          class="block mt-2 text-sm hover:text-secondary-container"
          href="mailto:vietitalia.bridge@pec.it"
        >
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