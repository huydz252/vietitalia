import { renderPartners } from "../components/sections/Partners.js";
import { t } from "../i18n/i18n.js";

const advisors = [
  "Thạc sĩ Lê Thị Kim Lệ",
  "Marco Bianchi",
  "Nguyễn Minh Anh",
];

export default function About(container) {
  container.innerHTML =
    `
      <!-- Banner chính của trang -->
      <section
        class="bg-cover bg-center bg-no-repeat text-white py-10 flex flex-col "
        style="
          height: 300px;
          background-image:
            linear-gradient(
              rgba(240, 93, 132, 0.75),
              rgba(51, 141, 112, 0.65)
            ),
            url('/images/italy/Rome.jpg');
        "
      >
        <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop w-full mt-10">
          <p class="uppercase text-sm tracking-[0.2em] font-bold mb-2 shadow-sm">
            VỀ CHÚNG TÔI
          </p>

          <h1 class="font-display-lg text-6xl font-bold mt-2 text-white drop-shadow-md">
          Hiệp hội Văn hóa VietItalia
          </h1>

          <p class="italic mt-4 text-xl drop-shadow-md">
            Una comunità tra Vietnam e Italia
          </p>
        </div>
      </section>

      <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">

        <!-- KHỐI GIỚI THIỆU: chữ trái - ảnh phải, cân bằng theo tỉ lệ 3:2 -->
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <!-- CHỮ (trái, có khung/ô riêng) -->
          <div class="flex flex-col justify-center bg-gray-50 p-8 rounded-xl border border-outline-variant shadow-sm h-full">
            <h2 class="font-headline-md text-3xl font-bold text-primary uppercase">
              Hiệp hội Văn hóa VietItalia
            </h2>
            <p class="mt-3 text-lg font-semibold text-secondary">
              Cầu nối văn hóa – giáo dục – doanh nghiệp giữa Việt Nam và Ý
            </p>

            <div class="mt-6 text-on-surface-variant leading-relaxed text-justify space-y-4 text-base">
              <p>
                Hiệp hội Văn hóa VietItalia là tổ chức văn hóa được thành lập tại Cộng hòa Ý với sứ mệnh thúc đẩy giao lưu văn hóa, giáo dục, ngôn ngữ và hợp tác quốc tế giữa Việt Nam và Ý. Hiệp hội hướng tới xây dựng một cộng đồng kết nối bền vững, nơi người Việt Nam tại Ý, người Ý yêu mến Việt Nam cùng các tổ chức, trường học và doanh nghiệp có thể gặp gỡ, học tập, chia sẻ và cùng phát triển.
              </p>
              <p>
                Trong bối cảnh toàn cầu hóa và chuyển đổi số, VietItalia không chỉ là một tổ chức giao lưu văn hóa mà còn là nền tảng kết nối tri thức, công nghệ và cơ hội hợp tác quốc tế. Các mô hình hợp tác của Hiệp hội tập trung vào giáo dục, ngôn ngữ, đổi mới sáng tạo và kết nối cộng đồng, phù hợp với xu hướng phát triển hiện đại.
              </p>
            </div>
          </div>

          <!-- ẢNH (phải, khung cố định — ảnh bên trong tự co giãn vừa khung, không crop mất nội dung) -->
          <div class="h-full flex items-center justify-center bg-white rounded-xl shadow-lg border border-outline-variant overflow-hidden p-3">
            <img
                src="/images/about/hiephoi.jpg"
                alt="Hiệp hội Văn hóa VietItalia"
                class="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        </div>

        <!-- BỐ CỤC LƯỚI 2 Ô (Sứ mệnh/Tầm nhìn/Triết lý — Chức năng/Nhiệm vụ/Thông điệp) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch mt-8 lg:mt-12">

          <!-- SỨ MỆNH - TẦM NHÌN - TRIẾT LÝ -->
          <div class="space-y-6 flex flex-col justify-center bg-white p-8 rounded-xl border border-outline-variant shadow-sm h-full">
            <div class="border-l-4 border-primary pl-5 py-1">
              <h3 class="font-headline-sm text-primary text-lg uppercase font-bold">Sứ mệnh</h3>
              <p class="mt-2 text-sm text-on-surface-variant text-justify leading-relaxed">
                Kết nối con người, tri thức và văn hóa giữa Việt Nam và Ý thông qua giáo dục, công nghệ và các hoạt động hợp tác quốc tế; góp phần xây dựng một cộng đồng hội nhập, sáng tạo và phát triển bền vững.
              </p>
            </div>

            <div class="border-l-4 border-secondary pl-5 py-1">
              <h3 class="font-headline-sm text-secondary text-lg uppercase font-bold">Tầm nhìn</h3>
              <p class="mt-2 text-sm text-on-surface-variant text-justify leading-relaxed">
                Đến năm 2035, VietItalia trở thành một trong những tổ chức kết nối Việt Nam – Ý có uy tín trong các lĩnh vực văn hóa, giáo dục, ngôn ngữ và hợp tác doanh nghiệp.
              </p>
            </div>

            <div class="border-l-4 border-primary pl-5 py-1">
              <h3 class="font-headline-sm text-primary text-lg uppercase font-bold">Triết lý hoạt động</h3>
              <p class="mt-2 text-sm font-semibold text-secondary mb-1">
                Kết nối tri thức – Lan tỏa văn hóa – Kiến tạo cơ hội – Phát triển bền vững.
              </p>
              <p class="text-sm text-on-surface-variant text-justify leading-relaxed">
                Văn hóa là nền tảng của sự thấu hiểu, giáo dục là chìa khóa của tương lai và công nghệ là động lực tạo nên những kết nối không giới hạn.
              </p>
            </div>
          </div>

          <!-- CHỨC NĂNG - NHIỆM VỤ - THÔNG ĐIỆP -->
          <div class="flex flex-col justify-between bg-gray-50 p-8 rounded-xl border border-outline-variant shadow-sm h-full">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <!-- Chức năng -->
              <div>
                <h3 class="font-headline-sm text-xl mb-4 text-gray-900 border-b-2 border-primary pb-2 inline-block">Chức năng</h3>
                <ul class="space-y-2 text-sm text-on-surface-variant">
                  <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> Kết nối tổ chức, doanh nghiệp hai nước.</li>
                  <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> Quảng bá văn hóa, ngôn ngữ, du lịch.</li>
                  <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> Tổ chức đào tạo và giao lưu học thuật.</li>
                  <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> Thúc đẩy chuyển đổi số trong giáo dục.</li>
                </ul>
              </div>
              <!-- Nhiệm vụ -->
              <div>
                <h3 class="font-headline-sm text-xl mb-4 text-gray-900 border-b-2 border-secondary pb-2 inline-block">Nhiệm vụ</h3>
                <ul class="space-y-2 text-sm text-on-surface-variant">
                  <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> Kết nối trường đại học, viện nghiên cứu.</li>
                  <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> Tổ chức khóa học kỹ năng, ngôn ngữ.</li>
                  <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> Xây dựng mạng lưới Đại sứ Văn hóa.</li>
                  <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> Thực hiện các dự án vì cộng đồng.</li>
                </ul>
              </div>
            </div>

            <!-- Thông điệp -->
            <div class="mt-8 bg-white p-4 rounded-lg border border-outline-variant text-center">
              <h3 class="text-primary font-bold uppercase mb-2 tracking-widest text-xs">Thông điệp</h3>
              <p class="italic text-sm text-gray-700 leading-relaxed">
                "Kết nối Việt Nam và Ý bằng tri thức, văn hóa và công nghệ; cùng kiến tạo tương lai hội nhập và phát triển bền vững."
              </p>
            </div>
          </div>

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
        class="bg-white text-primary px-6 py-3 font-semibold rounded-md transition-colors hover:bg-gray-100"
      >
        ${t("about.ctaAmbassador")}
      </a>

      <a
        data-link
        href="/contact"
        class="border border-white px-6 py-3 font-semibold rounded-md transition-colors hover:bg-white hover:text-primary"
      >
        ${t("about.ctaContact")}
      </a>
    </div>
  `;

  container.append(c);
}