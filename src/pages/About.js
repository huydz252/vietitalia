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
        class="bg-cover bg-center bg-no-repeat text-white py-20 flex flex-col justify-center"
        style="
          height: 450px;
          background-image:
            linear-gradient(
              rgba(240, 93, 132, 0.75),
              rgba(51, 141, 112, 0.65)
            ),
            url('src/assets/images/italy/Rome.jpg');
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
        
        <!-- Khối Giới thiệu + Sứ mệnh/Tầm nhìn/Triết lý (Trái) & Ảnh (Phải) -->
        <!-- Đã đổi sang lưới 12 cột để căn chỉnh tỷ lệ -->
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          <!-- Cột Trái: Nội dung chữ (Ép lại chiếm 5/12 không gian) -->
          <div class="lg:col-span-5 flex flex-col justify-center">
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
                Trong bối cảnh toàn cầu hóa và chuyển đổi số, VietItalia không chỉ là một tổ chức giao lưu văn hóa mà còn là nền tảng kết nối tri thức, công nghệ và cơ hội hợp tác quốc tế. Thông qua các chương trình đào tạo, sự kiện văn hóa, hoạt động học thuật và các dự án cộng đồng, Hiệp hội mong muốn góp phần lan tỏa những giá trị tốt đẹp của hai nền văn hóa, đồng thời tạo thêm nhiều cơ hội học tập, nghề nghiệp và đầu tư cho công dân hai nước. Các mô hình hợp tác của Hiệp hội tập trung vào giáo dục, ngôn ngữ, đổi mới sáng tạo và kết nối cộng đồng, phù hợp với xu hướng phát triển của các tổ chức văn hóa hiện đại tại Ý và châu Âu.
              </p>
            </div>

            <!-- Khối Sứ mệnh, Tầm nhìn, Triết lý -->
            <div class="mt-8 space-y-6">
              <div class="border-l-4 border-primary pl-5 py-1">
                <h3 class="font-headline-sm text-primary text-lg uppercase font-bold">Sứ mệnh</h3>
                <p class="mt-2 text-sm text-on-surface-variant text-justify leading-relaxed">
                  Kết nối con người, tri thức và văn hóa giữa Việt Nam và Ý thông qua giáo dục, công nghệ và các hoạt động hợp tác quốc tế; góp phần xây dựng một cộng đồng hội nhập, sáng tạo và phát triển bền vững.
                </p>
              </div>
              
              <div class="border-l-4 border-secondary pl-5 py-1">
                <h3 class="font-headline-sm text-secondary text-lg uppercase font-bold">Tầm nhìn</h3>
                <p class="mt-2 text-sm text-on-surface-variant text-justify leading-relaxed">
                  Đến năm 2035, VietItalia trở thành một trong những tổ chức kết nối Việt Nam – Ý có uy tín trong các lĩnh vực văn hóa, giáo dục, ngôn ngữ và hợp tác doanh nghiệp; là cầu nối đáng tin cậy giữa các trường học, viện nghiên cứu, doanh nghiệp và cộng đồng người Việt tại châu Âu.
                </p>
              </div>

              <div class="border-l-4 border-primary pl-5 py-1">
                <h3 class="font-headline-sm text-primary text-lg uppercase font-bold">Triết lý hoạt động</h3>
                <p class="mt-2 text-sm font-semibold text-secondary mb-1">
                  Kết nối tri thức – Lan tỏa văn hóa – Kiến tạo cơ hội – Phát triển bền vững.
                </p>
                <p class="text-sm text-on-surface-variant text-justify leading-relaxed">
                  VietItalia tin rằng văn hóa là nền tảng của sự thấu hiểu, giáo dục là chìa khóa của tương lai và công nghệ là động lực tạo nên những kết nối không giới hạn. Mỗi chương trình đều hướng đến giá trị thực tiễn, lấy con người làm trung tâm.
                </p>
              </div>
            </div>
          </div>

          <!-- Cột Phải: Ảnh (Mở rộng ra chiếm 7/12 không gian, hiển thị đủ 100% tỷ lệ gốc) -->
          <div class="lg:col-span-7 w-full flex justify-center items-center">
            <img 
                src="src/assets/images/about/hiephoi.jpg" 
                alt="Hiệp hội Văn hóa VietItalia" 
                class="w-full h-auto object-contain rounded-xl shadow-lg border border-outline-variant"
            />
          </div>
        </div>

        <!-- Chức năng & Nhiệm vụ -->
        <div class="grid md:grid-cols-2 gap-10 mt-20 max-w-7xl mx-auto pt-10 border-t border-outline-variant">
          <div>
            <h3 class="font-headline-sm text-2xl mb-6 text-gray-900 border-b-2 border-primary pb-2 inline-block">Chức năng</h3>
            <ul class="space-y-3 text-sm text-on-surface-variant">
              <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> Kết nối các tổ chức, trường học, doanh nghiệp và cộng đồng giữa Việt Nam và Ý.</li>
              <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> Quảng bá văn hóa, lịch sử, ngôn ngữ, nghệ thuật và du lịch của hai quốc gia.</li>
              <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> Tổ chức các chương trình đào tạo, hội thảo, tọa đàm và giao lưu học thuật.</li>
              <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> Hỗ trợ học tập tiếng Việt, tiếng Ý và phát triển các chương trình đào tạo đa ngôn ngữ.</li>
              <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> Thúc đẩy chuyển đổi số trong giáo dục thông qua các nền tảng học tập trực tuyến và ứng dụng AI.</li>
              <li class="flex items-start"><span class="text-primary mr-2 font-bold">•</span> Xây dựng mạng lưới chuyên gia, doanh nhân, giảng viên và sinh viên Việt Nam – Ý.</li>
            </ul>
          </div>
          <div>
            <h3 class="font-headline-sm text-2xl mb-6 text-gray-900 border-b-2 border-secondary pb-2 inline-block">Nhiệm vụ</h3>
            <ul class="space-y-3 text-sm text-on-surface-variant">
              <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> Phát triển các chương trình giao lưu văn hóa Việt Nam – Ý.</li>
              <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> Kết nối các trường đại học, viện nghiên cứu và trung tâm đào tạo của hai quốc gia.</li>
              <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> Tổ chức các khóa học về văn hóa, ngôn ngữ, kỹ năng hội nhập quốc tế và phát triển nghề nghiệp.</li>
              <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> Hỗ trợ người Việt Nam tại Ý và người Ý có nhu cầu học tập, làm việc hoặc hợp tác với Việt Nam.</li>
              <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> Xây dựng mạng lưới "Đại sứ Văn hóa Việt – Ý" nhằm lan tỏa giá trị văn hóa và tăng cường giao lưu nhân dân.</li>
              <li class="flex items-start"><span class="text-secondary mr-2 font-bold">•</span> Thực hiện các chương trình thiện nguyện, hoạt động xã hội và các dự án vì cộng đồng.</li>
            </ul>
          </div>
        </div>

        <div class="mt-20 max-w-4xl mx-auto text-center border-y border-outline-variant py-10">
            <h3 class="text-primary font-bold uppercase mb-4 tracking-widest text-sm">Thông điệp</h3>
            <p class="italic text-xl text-gray-700 leading-relaxed">
              "Kết nối Việt Nam và Ý bằng tri thức, văn hóa và công nghệ; xây dựng những cây cầu hợp tác để cùng kiến tạo một tương lai hội nhập và phát triển bền vững."
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mt-6">
    ` +
    advisors
      .map(
        (advisor) => `
        `,
      )
      .join("") +
    `
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
        class="bg-white text-primary px-6 py-3 font-semibold"
      >
        ${t("about.ctaAmbassador")}
      </a>

      <a
        data-link
        href="/contact"
        class="border border-white px-6 py-3 font-semibold"
      >
        ${t("about.ctaContact")}
      </a>
    </div>
  `;

  container.append(c);
}