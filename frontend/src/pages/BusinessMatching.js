import { getLocale } from "../i18n/i18n.js";

export default function BusinessMatching(container) {
  const isVi = getLocale() === "vi";

  // --- DỮ LIỆU ĐA NGÔN NGỮ ---
  const text = {
    tag: "VietItalia Bridge",
    title: isVi ? "Kết nối doanh nghiệp" : "Business Matching",
    subtitle: "Incontri tra imprese vietnamite e italiane",
    mouTitle: isVi ? "Biên bản ghi nhớ (MOU)" : "Memorandum d'Intesa (MOU)",
    mouSub: isVi 
      ? "Về việc hợp tác phát triển nền tảng văn hóa, giáo dục, y tế và kết nối Việt Nam – Ý" 
      : "Sulla cooperazione per lo sviluppo di piattaforme culturali, educative, sanitarie e di connessione tra Vietnam e Italia",
    mouNo: isVi ? "Số: 07/MOUVN/2026" : "Numero: 07/MOUVN/2026",
    mouDate: isVi ? "Thành phố Đà Nẵng, ngày 15 tháng 07 năm 2026" : "Da Nang, 15 Luglio 2026",
    p1: isVi 
      ? "Trong bối cảnh quan hệ hợp tác giữa Việt Nam và Cộng hòa Ý ngày càng được mở rộng trên các lĩnh vực văn hóa, giáo dục, khoa học, công nghệ và giao lưu nhân dân, việc xây dựng các chương trình hợp tác có tính bền vững, ứng dụng công nghệ số và kết nối nguồn lực quốc tế trở thành nhu cầu thiết thực của cả hai quốc gia."
      : "Nel contesto in cui le relazioni di cooperazione tra il Vietnam e la Repubblica Italiana si stanno sempre più espandendo nei settori della cultura, dell'istruzione, della scienza, della tecnologia e degli scambi interpersonali, la costruzione di programmi di cooperazione sostenibili, l'applicazione della tecnologia digitale e la connessione delle risorse internazionali diventano un'esigenza pratica per entrambi i Paesi.",
    p2: isVi 
      ? "Trên tinh thần hữu nghị, bình đẳng, tôn trọng lẫn nhau và cùng hướng đến mục tiêu phát triển lâu dài, Hiệp hội Văn hóa VietItalia (Italy) và Công ty TNHH MTV Vinabook – Trung tâm Đào tạo Kỹ năng mềm Quốc tế IKIGAI (Việt Nam) thống nhất ký kết Biên bản ghi nhớ (Memorandum of Understanding – MOU) nhằm thiết lập khuôn khổ hợp tác chiến lược trong việc phát triển các chương trình giáo dục, văn hóa, y tế, chuyển đổi số và kết nối cộng đồng giữa Việt Nam và Ý."
      : "Nello spirito di amicizia, uguaglianza, rispetto reciproco e verso obiettivi di sviluppo a lungo termine, l'Associazione Culturale VietItalia (Italia) e Vinabook Co., Ltd - IKIGAI International Soft Skills Training Center (Vietnam) concordano di firmare questo Memorandum d'Intesa (MOU) per stabilire un quadro di cooperazione strategica nello sviluppo di programmi educativi, culturali, sanitari, di trasformazione digitale e di connessione comunitaria tra Vietnam e Italia.",
    p3: isVi 
      ? "Thông qua Biên bản ghi nhớ này, hai bên mong muốn phát huy thế mạnh của mỗi đơn vị để cùng xây dựng hệ sinh thái giáo dục hiện đại; phát triển nền tảng công nghệ Kiwi Medias phục vụ học tập đa ngôn ngữ; kết nối các trường học, tổ chức giáo dục, doanh nghiệp, chuyên gia và cộng đồng người Việt tại Ý cũng như người Ý quan tâm đến văn hóa, ngôn ngữ và cơ hội hợp tác với Việt Nam."
      : "Attraverso questo MOU, le due parti desiderano promuovere i punti di forza di ciascuna entità per costruire congiuntamente un moderno ecosistema educativo; sviluppare la piattaforma tecnologica Kiwi Medias per l'apprendimento multilingue; connettere scuole, organizzazioni educative, imprese, esperti e la comunità vietnamita in Italia, nonché gli italiani interessati alla cultura, alla lingua e alle opportunità di cooperazione con il Vietnam.",
    imgAlt: isVi ? "Hợp tác VietItalia và IKIGAI" : "Cooperazione tra VietItalia e IKIGAI",
    imgCaption: isVi ? "Hình ảnh Hợp tác giữa VietItalia và IKIGAI" : "Immagine della cooperazione tra VietItalia e IKIGAI",
    p4: isVi 
      ? "Bên cạnh đó, hai bên sẽ phối hợp triển khai các chương trình đào tạo trực tuyến, giao lưu văn hóa, quảng bá du lịch, xúc tiến đầu tư, hỗ trợ du học, trao đổi học thuật, phát triển các dự án ứng dụng trí tuệ nhân tạo (AI) trong giáo dục và truyền thông, đồng thời xây dựng cộng đồng học tập xuyên biên giới, góp phần tăng cường sự hiểu biết, kết nối và hợp tác giữa nhân dân hai nước."
      : "Inoltre, le due parti si coordineranno per implementare programmi di formazione online, scambi culturali, promozione del turismo, promozione degli investimenti, supporto allo studio all'estero, scambi accademici, sviluppo di progetti che applicano l'Intelligenza Artificiale (IA) nell'istruzione e nella comunicazione, costruendo al contempo una comunità di apprendimento transfrontaliera, contribuendo a migliorare la comprensione, la connessione e la cooperazione tra i popoli dei due Paesi.",
    p5: isVi 
      ? "Biên bản ghi nhớ này là cơ sở để hai bên triển khai các hoạt động hợp tác theo từng giai đoạn, đồng thời là nền tảng để xây dựng các phụ lục, hợp đồng hoặc thỏa thuận chuyên đề khi cần thiết. Trừ các điều khoản liên quan đến bảo mật thông tin, quyền sở hữu trí tuệ, sử dụng thương hiệu, truyền thông và giải quyết tranh chấp, các nội dung còn lại trong MOU này được hiểu là định hướng hợp tác và không làm phát sinh nghĩa vụ tài chính hoặc trách nhiệm pháp lý bắt buộc nếu chưa có văn bản thỏa thuận chi tiết được ký kết giữa hai bên."
      : "Questo MOU costituisce la base affinché le due parti implementino attività di cooperazione per fasi ed è anche il fondamento per lo sviluppo di allegati, contratti o accordi tematici quando necessario. Fatta eccezione per le disposizioni relative alla riservatezza delle informazioni, ai diritti di proprietà intellettuale, all'uso dei marchi, alla comunicazione e alla risoluzione delle controversie, il restante contenuto di questo MOU è inteso come un orientamento di cooperazione e non crea obblighi finanziari o responsabilità legali vincolanti a meno che non venga firmato un accordo dettagliato tra le due parti.",
    p6: isVi 
      ? "Hai bên cam kết thực hiện Biên bản ghi nhớ trên nguyên tắc thiện chí, minh bạch, tuân thủ pháp luật của mỗi quốc gia, tôn trọng quyền và lợi ích hợp pháp của nhau, đồng thời cùng chia sẻ nguồn lực, kinh nghiệm và cơ hội phát triển nhằm xây dựng một hệ sinh thái giáo dục – văn hóa – công nghệ mang tầm quốc tế, góp phần thúc đẩy quan hệ hợp tác hữu nghị giữa Việt Nam và Cộng hòa Ý trong giai đoạn mới."
      : "Le due parti si impegnano ad attuare il MOU sui principi di buona fede, trasparenza, conformità alle leggi di ciascun Paese, rispetto dei reciproci diritti e interessi legittimi, condividendo risorse, esperienze e opportunità di sviluppo per costruire un ecosistema educativo - culturale - tecnologico di livello internazionale, contribuendo a promuovere relazioni di cooperazione amichevoli tra il Vietnam e la Repubblica Italiana in questa nuova fase."
  };

  container.innerHTML = `
    <section class="banner-image bg-cover text-white py-20"
      style="
        height: 400px;
        background-position: center;
        background-image:
          linear-gradient(
              rgba(159, 106, 106, 0.65),
              rgba(51, 141, 112, 0.55)
            ),
          url('/images/italy/image132431.jpg');
      "
    >
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
        <p class="text-label-sm uppercase tracking-widest">
          ${text.tag}
        </p>

        <h1 class="font-display-lg text-display-lg mt-3">
          ${text.title}
        </h1>

        <p class="italic">
          ${text.subtitle}
        </p>
      </div>
    </section>

    <!-- Phần nội dung bài viết (MOU) -->
    <section class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16">
      <article class="max-w-5xl mx-auto">
        
        <!-- Tiêu đề văn bản -->
        <div class="text-center mb-12 border-b border-outline-variant pb-8">
          <h2 class="font-headline-lg text-headline-lg text-primary uppercase mb-4">
            ${text.mouTitle}
          </h2>
          <p class="font-headline-sm text-headline-sm text-on-surface">
            ${text.mouSub}
          </p>
          <div class="text-on-surface-variant text-sm mt-6 flex flex-col items-center gap-1">
            <p>${text.mouNo}</p>
            <p class="italic">${text.mouDate}</p>
          </div>
        </div>

        <!-- Nội dung chi tiết -->
        <div class="space-y-6 text-on-surface leading-relaxed text-justify md:text-lg">
          <p>${text.p1}</p>
          <p>${text.p2}</p>
          <p>${text.p3}</p>

          <!-- KHỐI ẢNH ĐƯỢC CHÈN THÊM -->
          <div class="w-full flex flex-col items-center py-2">
            <img 
              src="/images/banner/banner1.png" 
              alt="${text.imgAlt}" 
              class="w-full h-auto rounded-xl shadow-md border border-gray-200 object-cover"
            />
            <!-- Dòng chú thích ảnh -->
            <p class="text-center text-sm text-gray-500 italic mt-3">
              ${text.imgCaption}
            </p>
          </div>
          <!-- KẾT THÚC KHỐI ẢNH -->

          <p>${text.p4}</p>
          <p>${text.p5}</p>
          <p>${text.p6}</p>
        </div>
        
      </article>
    </section>
  `;
}