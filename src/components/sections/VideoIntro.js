export function renderVideoIntro(container) {
  const section = document.createElement("section");
  
  // Các class căn lề chuẩn theo thiết kế chung của trang web
  section.className = "max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16 bg-gray-50";

  section.innerHTML = `
    <!-- Phần tiêu đề -->
    <div class="text-center mb-10">
      <h2 class="font-headline-md text-3xl font-bold text-primary uppercase">
        Video Giới Thiệu
      </h2>
      <div class="w-24 h-1 bg-secondary mx-auto mt-4 mb-4"></div>
      <p class="text-lg text-on-surface-variant max-w-2xl mx-auto">
        Tìm hiểu thêm về hành trình và các hoạt động của Hiệp hội Văn hóa VietItalia.
      </p>
    </div>

    <!-- Khối chứa video YouTube -->
    <div class="max-w-5xl mx-auto w-full flex justify-center">
      <!-- aspect-video giúp khung hình luôn hiển thị đúng tỷ lệ 16:9 -->
      <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-outline-variant bg-black">
        <iframe 
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/3aEYC20XqYo"
          title="Video Giới Thiệu VietItalia" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;

  container.append(section);
}