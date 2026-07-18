

import { getLocale } from "../i18n/i18n.js";

// ---------------- DỮ LIỆU 3 HÀNH TRÌNH ----------------

const stories = [
  {
    id: "val-dignas",
    tag: "Trekking biên giới",
    title: "Khám Phá Vùng Biên Giới Ý – Áo Tại Val Dignas",
    subtitle: "Từ Feltre đến cột mốc biên giới Forcella Dignas (Tilliacher Joch)",
    cover: "/images/travel/val-dignas/anh-bia.jpg",
    stats: [
      ["straighten", "14 km", "Quãng đường đi bộ"],
      ["schedule", "~2h15", "Thời gian leo lên đỉnh"],
      ["landscape", "2.115 m", "Độ cao điểm cao nhất"],
      ["payments", "€5", "Phí gửi xe mùa hè"],
    ],
    intro:
      "Cuối tuần với hơn 14km đi bộ, mang lại trải nghiệm từ lịch sử, nông nghiệp, thiên nhiên đến chiều sâu tôn giáo. Một khoảnh khắc đáng nhớ: cô gái Việt Nam ngạc nhiên khi biết qua biên giới giữa các nước khối Schengen không cần kiểm tra giấy tờ hay xuất cảnh — sự tự do đi lại rất thú vị.",
    sections: [
      {
        heading: "Hành trình từ Feltre đến Santo Stefano di Cadore",
        body:
          "Xuất phát từ Feltre lúc 7:00 sáng, đoàn 4 người lái xe hơn 1h45 phút qua Valbelluna, Belluno, Ponte nelle Alpi rồi vào đường quốc gia Alemagna. Đi qua Longarone, Termine, Ospitale, cầu Ponte Cadore đến Pieve di Cadore, rồi chui qua hầm Comelico dài 4km — từng là hầm đường bộ dài nhất nước Ý. Ra khỏi hầm là vùng Comelico tuyệt đẹp phía Đông Bắc tỉnh Belluno.",
      },
      {
        heading: "Bữa sáng tại Santo Stefano di Cadore",
        body:
          "Khoảng 8h, đoàn dừng chân tại tiệm bánh địa phương nổi tiếng \"Bressan\", thưởng thức bánh ngọt giá chỉ từ 1,5 Euro (~42 nghìn đồng) cùng trà cacao – bạc hà, bên cạnh một nhà thờ cổ kính đặc trưng Ý.",
        image: "/images/travel/val-dignas/an-sang.jpg",
        caption: "Bánh ngọt \"Bressan\" nổi tiếng vùng Cadore, giá chỉ từ 1,5 Euro.",
      },
      {
        heading: "Val Visdende — dấu tích bão Vaia",
        body:
          "Đoạn đường qua Val Visdende còn in dấu cơn bão Vaia năm 2018, đã cuốn đi khoảng 150.000 mét khối gỗ quý — tương đương 1/4 diện tích rừng khu vực. Nhưng cũng nhờ vậy, thung lũng giữ được vẻ hoang sơ, ít du khách. Cảnh quan bất ngờ mở ra thành cánh đồng xanh mướt bao quanh bởi núi non.",
      },
      {
        heading: "Chinh phục Forcella Dignas — cột mốc biên giới Ý – Áo",
        body:
          "Từ bãi xe Ciadon, đoàn đi bộ dọc sông Londo, sau 1h10 đạt độ cao 1.810m tới ngôi nhà gỗ Malga Dignas (từ giữa tháng 6 đến cuối tháng 9 dùng chăn bò mùa hè). Tiếp tục lên cao, băng qua tàn dư tuyết mùa đông dưới chân dãy Dolomite của núi Palombino, đoàn tới những ngôi nhà đá từng là trạm kiểm soát biên giới Ý – Áo thời Phát xít. Đích đến — Forcella Dignas (Tilliacher Joch), độ cao 2.115m — nơi có thể ngồi ngay trên đường biên, nhìn sang nhà nghỉ Porzehütte và thị trấn Obertilliach phía Áo.",
        image: "/images/travel/val-dignas/bien-gioi.jpg",
        caption: "Cột mốc biên giới Ý – Áo tại Forcella Dignas.",
      },
      {
        heading: "Nhà thờ Madonna delle Nevi — nơi Đức Giáo Hoàng từng hành lễ",
        body:
          "Trên đường về, đoàn dừng tại nhà thờ Madonna delle Nevi (xây năm 1966), nơi ngày 12/7/1987 Đức Giáo Hoàng Gioan Phaolô II (vị Giáo hoàng người Ba Lan duy nhất) đã cử hành Thánh lễ, sau khi chính ông leo lên đỉnh Peralba. Ông từng nói về Val Visdende: \"Đây không chỉ là một điểm đến du lịch, mà còn là một cuộc hành trình gặp gỡ với thiên nhiên và chính chúng ta.\"",
      },
      {
        heading: "Kết thúc hành trình cùng kem Ý",
        body:
          "Chuyến đi khép lại tại Ponte nelle Alpi với một viên kem Ý mát lạnh, giá 1,6 Euro (~44 nghìn đồng) — vị ngọt tròn đầy cho một hành trình đáng nhớ.",
        image: "/images/travel/val-dignas/kem.jpg",
        caption: "Kem Ý 1,6 Euro/viên tại Ponte nelle Alpi.",
      },
    ],
    gallery: [
      "/images/travel/val-dignas/ban-do.jpg",
      "/images/travel/val-dignas/nha-tho.jpg",
      "/images/travel/val-dignas/tuyet.jpg",
      "/images/travel/val-dignas/nha-go.jpg",
    ],
    quote: "\"Mỗi bước chân là một phát hiện mới.\"",
    video: "https://youtu.be/FrQOmK67mvM",
    author: "Khả Tú Lệ Italia — kimleitalia@gmail.com",
  },

  {
    id: "val-venosta",
    tag: "Nông nghiệp & Du lịch bền vững",
    title: "Bí Mật Quản Lý Nông Nghiệp Và Du Lịch Tại Val Venosta",
    subtitle: "Từ Feltre đến Naturno, qua Trento, Bolzano và Merano",
    cover: "/images/travel/val-venosta/anh-bia.jpg",
    stats: [
      ["straighten", "14,3 km", "Quãng đường"],
      ["schedule", "5h49", "Tổng thời gian"],
      ["trending_up", "452 m ↑ / 1.458 m ↓", "Chênh lệch độ cao"],
      ["payments", "~25 €", "Chi phí cả ngày/người"],
    ],
    intro:
      "Hành trình từ Feltre đến Naturno — viên ngọc ẩn mình trong thung lũng Val Venosta (Vinschgau) — không chỉ là cuộc phiêu lưu địa lý mà còn hé lộ cách người Ý quản lý nông nghiệp và du lịch bền vững, gắn kết và tôn trọng thiên nhiên.",
    sections: [
      {
        heading: "Từ Feltre đến Naturno — thung lũng táo bạt ngàn",
        body:
          "Đi qua Trento, cao tốc A22 Brennero, hướng về Bolzano rồi Merano trước khi rẽ vào Val Venosta. Đặc trưng nổi bật của vùng là những vườn táo bạt ngàn — nơi sản sinh loại táo ngon nhất nước Ý. Chuyến đi hơn 2 giờ, phí cao tốc khoảng 3,8 Euro (~106 nghìn đồng).",
      },
      {
        heading: "Giao thông công cộng kiểu Ý",
        body:
          "Bãi đậu xe công cộng miễn phí, không camera giám sát nhưng vẫn rất an toàn. Xe buýt số 266 khởi hành 9:12 sáng, giá chỉ 1,5 Euro (~46 nghìn đồng). Đặc biệt, khách lưu trú tại khách sạn ở Alto Adige được dùng miễn phí xe buýt, tàu hỏa và cáp treo toàn tỉnh Bolzano — chiến lược du lịch bền vững rất hiệu quả.",
        image: "/images/travel/val-venosta/vuon-tao.jpg",
        caption: "Đường cao tốc băng qua những vườn táo xanh mướt Val Venosta.",
      },
      {
        heading: "Cáp treo lên độ cao 911m",
        body:
          "Từ thị trấn Naturno (6.000 dân, cao 528m), cáp treo Unterstell đưa đoàn lên cao 911m chỉ trong vài phút, giá vé 11 Euro/người. Bữa sáng cappuccino và bánh táo, bánh nho đặc sản vùng, ngắm toàn cảnh Val Venosta trải dài từ Đông sang Tây.",
        image: "/images/travel/val-venosta/cap-treo.jpg",
        caption: "Cáp treo đưa du khách lên cao 911m chỉ trong vài phút.",
      },
      {
        heading: "Cung đường mòn số 24 — cửa rào và ý thức bảo vệ hệ sinh thái",
        body:
          "Trên đường mòn số 24, đoàn đi qua nhiều cánh cửa rào — nhắc du khách đóng lại sau khi qua, bảo vệ đàn bò, cừu, dê không đi lạc. Đây là bài học sinh động về cách người dân địa phương và du khách cùng tự giác giữ gìn hệ sinh thái.",
        image: "/images/travel/val-venosta/duong-mon.jpg",
        caption: "Con đường mòn số 24 giữa những cánh đồng hoa cỏ mùa xuân.",
      },
      {
        heading: "\"Hẻm núi ngàn bậc thang\" và cầu treo Hängebrücke",
        body:
          "Đoạn dốc dẫn tới thác nước nằm trong khe núi được gọi là \"ngàn bậc thang\" — thực tế 989 bậc — thuộc thung lũng Lahnbach-Tal. Sau thử thách leo dốc là cây cầu treo Hängebrücke bắc ngang dòng suối xanh mát, cùng những biển cảnh báo đá rơi được đặt cẩn thận dọc đường.",
        image: "/images/travel/val-venosta/cau-treo.jpg",
        caption: "Cây cầu treo Hängebrücke giữa núi rừng Val Venosta.",
      },
      {
        heading: "Sân thượng ngắm cảnh Untersteller",
        body:
          "Dài 16 mét với khoảng trống 50 mét ở cuối, sân thượng Aussichtsplattform Unterstell mang lại tầm nhìn ngoạn mục xuống toàn thung lũng Val Venosta — một trong những điểm check-in đẹp nhất khu vực.",
        image: "/images/travel/val-venosta/san-thuong.jpg",
        caption: "Toàn cảnh Val Venosta nhìn từ sân thượng Untersteller.",
      },
      {
        heading: "Tổng kết & hệ thống hạ tầng thông minh",
        body:
          "Tổng cộng 14,3km trong 5h49, leo 452m và xuống 1.458m. Đáng chú ý là hệ thống ống dẫn nước từ núi cao xuống phục vụ cư dân — một công trình hạ tầng bền vững đáng học hỏi.",
      },
    ],
    gallery: [
      "/images/travel/val-venosta/ban-do.jpg",
    ],
    quote: "\"Người dân đây gắn kết và tôn trọng thiên nhiên, hòa mình vào hệ sinh thái phục vụ du lịch một cách tinh tế và bền vững.\"",
    video: "https://youtu.be/FrQOmK67mvM",
    author: "Khả Tú Lệ — Kimleitalia@gmail.com",
  },
];

// ---------------- BÀI SO SÁNH CHI PHÍ (song ngữ VI/IT) ----------------

const costItems = [
  ["directions_bus", "Xe buýt số 266", "1,50 €"],
  ["cable", "Cáp treo Unterstell", "11 €"],
  ["coffee", "Cà phê & bánh sáng", "5 – 10 €"],
];

const italianLifestylePoints = [
  "Đi bộ nhiều",
  "Sử dụng phương tiện công cộng",
  "Tham gia hoạt động cộng đồng",
  "Tận dụng thiên nhiên miễn phí",
  "Ưu tiên trải nghiệm hơn tiêu dùng",
];

const discoverList = [
  ["landscape", "Belluno"],
  ["account_balance", "Feltre"],
  ["hiking", "Dolomiti UNESCO"],
  ["diversity_3", "Gặp gỡ người dân địa phương"],
  ["school", "Tìm hiểu giáo dục"],
  ["work", "Khám phá doanh nghiệp"],
];

// ---------------- HELPER: render 1 story đầy đủ ----------------

function renderStory(s) {
  return `
    <article id="${s.id}" class="scroll-mt-24 py-16 border-t border-outline-variant first:border-t-0 first:pt-0">
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="h-[420px] flex flex-col justify-center bg-white rounded-2xl institutional-shadow border border-outline-variant p-8">
            <span class="inline-block bg-secondary/10 text-secondary text-label-sm uppercase tracking-widest px-3 py-1 w-fit">${s.tag}</span>
            <h2 class="font-headline-lg text-headline-lg mt-4">${s.title}</h2>
            <p class="mt-3 text-on-surface-variant italic">${s.subtitle}</p>
            <p class="mt-5 text-on-surface-variant leading-relaxed">${s.intro}</p>
          </div>
          <div class="h-[420px] flex items-center justify-center bg-white rounded-2xl institutional-shadow border border-outline-variant overflow-hidden p-3">
            <img src="${s.cover}" alt="${s.title}" class="max-w-full max-h-full w-auto h-auto object-contain">
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          ${s.stats
            .map(
              ([icon, value, label]) => `
            <div class="bg-surface-container-low p-5 text-center">
              <span class="material-symbols-outlined text-primary text-3xl">${icon}</span>
              <p class="font-headline-sm text-headline-sm mt-2">${value}</p>
              <p class="text-xs text-on-surface-variant mt-1">${label}</p>
            </div>`,
            )
            .join("")}
        </div>

        <div class="mt-12 space-y-10">
          ${s.sections
            .map(
              (sec) => `
            <div class="grid ${sec.image ? "md:grid-cols-2" : ""} gap-8 items-stretch">
              <div class="${sec.image ? "h-[350px] flex flex-col justify-center" : ""} bg-white rounded-lg institutional-shadow border border-outline-variant p-7">
                <h3 class="font-headline-sm text-headline-sm text-primary">${sec.heading}</h3>
                <p class="mt-3 text-on-surface-variant leading-relaxed">${sec.body}</p>
              </div>
              ${
                sec.image
                  ? `<figure class="h-full">
                      <div class="h-[450px] flex items-center justify-center bg-white rounded-lg institutional-shadow border border-outline-variant overflow-hidden p-2">
                        <img src="${sec.image}" alt="${sec.heading}" class="max-w-full max-h-full w-auto h-auto object-contain">
                      </div>
                      <figcaption class="text-xs text-on-surface-variant mt-2 italic">${sec.caption || ""}</figcaption>
                    </figure>`
                  : ""
              }
            </div>`,
            )
            .join("")}
        </div>

        ${
          s.gallery && s.gallery.length
            ? `<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
                ${s.gallery
                  .map(
                    (g) => `
                  <div class="h-40 flex items-center justify-center bg-white rounded-lg institutional-shadow border border-outline-variant overflow-hidden p-1.5">
                    <img src="${g}" alt="${s.title}" class="max-w-full max-h-full w-auto h-auto object-contain">
                  </div>`,
                  )
                  .join("")}
              </div>`
            : ""
        }

        <blockquote class="italy-accent bg-surface-container-low p-6 mt-10 italic text-on-surface-variant">
          ${s.quote}
        </blockquote>

        <div class="flex flex-wrap items-center justify-between gap-4 mt-6 text-sm text-on-surface-variant">
          <p>${s.author}</p>
          ${s.video ? `<a href="${s.video}" target="_blank" rel="noopener" class="text-primary font-semibold underline">▶ Xem video hành trình</a>` : ""}
        </div>
      </div>
    </article>
  `;
}

// ---------------- COMPONENT CHÍNH ----------------

export default function ItalyTravel(container) {
  container.innerHTML =
    // ---------------- BANNER ----------------
    `<section class="relative text-white pt-20 pb-16 md:pt-24 bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/travel/val-venosta/anh-bia.jpg')">
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop text-center">
        <p class="text-label-sm uppercase tracking-widest text-white/80">Câu chuyện từ người Việt sống tại Ý</p>
        <h1 class="font-display-lg text-display-lg mt-3 max-w-3xl mx-auto">Du Lịch &amp; Trải Nghiệm Ý</h1>
        <p class="mt-4 text-lg italic max-w-2xl mx-auto text-white/90">Khám phá nước Ý thật — không phải qua tour du lịch, mà qua từng bước chân trekking, từng chuyến xe buýt và từng buổi sáng cappuccino cùng người dân bản địa.</p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          ${stories
            .map(
              (s) =>
                `<a href="#${s.id}" class="bg-white/10 backdrop-blur border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/20 transition">${s.tag}</a>`,
            )
            .join("")}
          <a href="#song-nhu-nguoi-y" class="bg-white/10 backdrop-blur border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/20 transition">Sống như người Ý có đắt không?</a>
        </div>
      </div>
    </section>` +

    // ---------------- MỤC LỤC NHANH ----------------
    `<section class="bg-surface-container-low py-10">
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
        <p class="text-primary text-label-sm uppercase tracking-widest text-center">3 hành trình có thật</p>
        <div class="grid md:grid-cols-3 gap-4 mt-6">
          ${stories
            .map(
              (s) => `
            <a href="#${s.id}" class="vietnam-accent bg-white p-5 block hover:institutional-shadow transition">
              <span class="text-secondary text-label-sm uppercase tracking-widest">${s.tag}</span>
              <h3 class="font-headline-sm text-headline-sm mt-2">${s.title}</h3>
            </a>`,
            )
            .join("")}
          <a href="#song-nhu-nguoi-y" class="vietnam-accent bg-white p-5 block hover:institutional-shadow transition">
            <span class="text-secondary text-label-sm uppercase tracking-widest">Trải nghiệm & Chi phí</span>
            <h3 class="font-headline-sm text-headline-sm mt-2">Sống Như Người Ý Có Đắt Không? 🇻🇳🇮🇹</h3>
          </a>
        </div>
      </div>
    </section>` +

    // ---------------- 2 HÀNH TRÌNH TREKKING ĐẦY ĐỦ ----------------
    stories.map(renderStory).join("") +

    // ---------------- BÀI 3: SỐNG NHƯ NGƯỜI Ý CÓ ĐẮT KHÔNG (song ngữ) ----------------
    `<article id="song-nhu-nguoi-y" class="scroll-mt-24 py-16 border-t border-outline-variant">
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="h-[420px] flex flex-col justify-center bg-white rounded-2xl institutional-shadow border border-outline-variant p-8">
            <span class="inline-block bg-secondary/10 text-secondary text-label-sm uppercase tracking-widest px-3 py-1 w-fit">Trải nghiệm & Chi phí</span>
            <h2 class="font-headline-lg text-headline-lg mt-4">${
              getLocale() === "it"
                ? "Vivere Come Un Italiano È Davvero Costoso?"
                : "Sống Như Người Ý Có Đắt Không? 🇻🇳🇮🇹"
            }</h2>
            <p class="mt-3 text-on-surface-variant italic">${
              getLocale() === "it"
                ? "Un giorno tra montagne, funivie e panorami mozzafiato spendendo meno di quanto si pensi"
                : "Một ngày khám phá Alto Adige với chi phí chưa đến một bữa tối sang trọng"
            }</p>
            <p class="mt-5 text-on-surface-variant leading-relaxed">${
              getLocale() === "it"
                ? "L'Italia vissuta dai residenti è spesso molto diversa dall'Italia vista dai turisti: piccoli borghi, sentieri di montagna, trasporti pubblici efficienti e una qualità della vita straordinaria."
                : "Nước Ý của người dân địa phương rất khác nước Ý của những tour du lịch thông thường. Biết cách tận dụng giao thông công cộng, dịch vụ cộng đồng và hiểu văn hóa bản địa, bạn hoàn toàn có thể trải nghiệm cảnh đẹp hàng đầu châu Âu với chi phí rất hợp lý."
            }</p>
          </div>
          <div class="h-[420px] flex items-center justify-center bg-white rounded-2xl institutional-shadow border border-outline-variant overflow-hidden p-3">
            <img src="/images/travel/song-nhu-nguoi-y/anh-bia.jpg" alt="Sống như người Ý có đắt không" class="max-w-full max-h-full w-auto h-auto object-contain">
          </div>
        </div>

        <div class="grid sm:grid-cols-3 gap-4 mt-10">
          ${costItems
            .map(
              ([icon, label, price]) => `
            <div class="bg-surface-container-low p-5 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-3xl">${icon}</span>
              <div>
                <p class="font-headline-sm text-headline-sm">${price}</p>
                <p class="text-xs text-on-surface-variant">${label}</p>
              </div>
            </div>`,
            )
            .join("")}
        </div>

        <div class="grid md:grid-cols-2 gap-10 mt-12 items-stretch">
          <div class="h-[320px] flex flex-col justify-center bg-white rounded-lg institutional-shadow border border-outline-variant p-7">
            <h3 class="font-headline-sm text-headline-sm text-primary">989 bậc thang và cầu treo giữa núi rừng</h3>
            <p class="mt-3 text-on-surface-variant leading-relaxed">Cung đường trekking đi qua đồng cỏ Alpine, suối băng tan, thác nước, rừng thông và trang trại truyền thống. Điểm đặc biệt nhất: "Hẻm núi 1.000 bậc thang" — thực tế 989 bậc — đủ thử thách bất kỳ ai yêu thiên nhiên. Phần thưởng là cây cầu treo Hängebrücke nổi tiếng cùng góc nhìn ngoạn mục xuống thung lũng.</p>
          </div>
          <div class="h-[320px] flex items-center justify-center bg-white rounded-lg institutional-shadow border border-outline-variant overflow-hidden p-2">
            <img src="/images/travel/song-nhu-nguoi-y/bac-thang.jpg" alt="989 bậc thang" class="max-w-full max-h-full w-auto h-auto object-contain">
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-10 mt-10 items-stretch">
          <div class="h-[320px] flex items-center justify-center bg-white rounded-lg institutional-shadow border border-outline-variant overflow-hidden p-2 md:order-2">
            <img src="/images/travel/song-nhu-nguoi-y/san-thuong.jpg" alt="Sân ngắm cảnh Unterstell" class="max-w-full max-h-full w-auto h-auto object-contain">
          </div>
          <div class="h-[320px] flex flex-col justify-center bg-white rounded-lg institutional-shadow border border-outline-variant p-7 md:order-1">
            <h3 class="font-headline-sm text-headline-sm text-primary">Sân ngắm cảnh giữa không trung</h3>
            <p class="mt-3 text-on-surface-variant leading-relaxed">Sau khoảng 7km đường núi, sân ngắm cảnh Aussichtsplattform Unterstell dài 16 mét mở ra toàn bộ thung lũng Val Venosta. Vẫn giữ được sự yên bình, không đông đúc — đúng tinh thần sống chậm rãi của người Ý địa phương.</p>
          </div>
        </div>

        <div class="italy-accent bg-surface-container-low p-7 mt-12">
          <h3 class="font-headline-sm text-headline-sm">Người Ý thường:</h3>
          <div class="grid sm:grid-cols-2 gap-3 mt-4">
            ${italianLifestylePoints.map((p) => `<div class="flex gap-2 text-sm"><span class="text-secondary">✅</span><span>${p}</span></div>`).join("")}
          </div>
          <p class="mt-6 font-headline-sm text-headline-sm text-center">Vậy sống như người Ý có đắt không? Câu trả lời là: Không hẳn.</p>
        </div>

        <div class="mt-12">
          <h3 class="font-headline-sm text-headline-sm text-center">Muốn trải nghiệm nước Ý thật? Hãy thử:</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            ${discoverList
              .map(
                ([icon, label]) => `
              <div class="vietnam-accent bg-surface-container-low p-5 flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">${icon}</span>
                <span class="font-headline-sm text-headline-sm">${label}</span>
              </div>`,
              )
              .join("")}
          </div>
        </div>

        <blockquote class="bg-secondary text-white p-8 mt-12 text-center italic">
          "Đừng đi Ý như một khách du lịch. Hãy đến để sống, học hỏi và khám phá nước Ý từ bên trong."<br>
          <span class="not-italic font-semibold">🇮🇹🤝🇻🇳 VietItalia — Kết nối Văn hóa • Tạo Cơ hội • Xây dựng Tương lai</span>
        </blockquote>
      </div>
    </article>` +

    // ---------------- CTA CUỐI TRANG ----------------
    `<section class="bg-primary text-white py-16">
      <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop text-center">
        <p class="text-label-sm uppercase tracking-widest text-white/80">Tham gia cùng chúng tôi</p>
        <h2 class="font-headline-md text-headline-md mt-2 max-w-2xl mx-auto">Muốn tự mình khám phá những hành trình như thế này?</h2>
        <p class="mt-4 text-white/90 max-w-2xl mx-auto">Chương trình Đại Sứ Văn Hóa VietItalia đưa bạn đến tận nơi — Belluno, Feltre, Dolomiti UNESCO — để trải nghiệm, kết nối và học hỏi cùng cộng đồng người Ý.</p>
        <div class="mt-8">
          <a href="/ambassador" class="bg-white text-primary px-6 py-3 font-semibold inline-block">Tìm hiểu chương trình Đại Sứ Văn Hóa</a>
        </div>
      </div>
    </section>`;
}