const groups = [
  [
    "Đối tác giáo dục",
    ["Vinabook", "Unidolomiti", "Ikigai AI"]
  ],
  [
    "Đối tác doanh nghiệp & Tổ chức",
    ["Dolomiti Hub", "Centro Consorzi", "Villa San Liberale"]
  ],
  [
    "Đối tác truyền thông",
    ["Kiwi Media", "Gimmy"]
  ]
];

export function renderPartners(container, { compact = false } = {}) {
  const section = document.createElement("section");
  
  // Điều chỉnh padding theo biến compact
  const paddingClass = compact ? "py-12" : "py-20";
  section.className = `bg-surface-container-low border-y border-outline-variant ${paddingClass}`;

  section.innerHTML = `
    <div class="max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop">
      <div class="flex flex-col gap-8">
        ${groups
          .map(
            ([title, items]) => `
              <!-- Nhóm Đối Tác -->
              <div>
                <p class="text-label-sm uppercase tracking-widest text-primary mb-3">
                  ${title}
                </p>
                
                <div class="flex flex-wrap gap-2">
                  ${items
                    .map(
                      (item) => `
                        <span class="bg-white border border-outline-variant py-2 px-3 text-xs font-semibold rounded-md shadow-sm">
                          ${item}
                        </span>
                      `
                    )
                    .join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;

  container.append(section);
}