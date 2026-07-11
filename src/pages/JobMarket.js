const jobs = [
  ["restaurant", "Nhà hàng", "Nhân sự phục vụ, bếp trưởng và quản lý nhà hàng"],
  ["hotel", "Khách sạn", "Nghiệp vụ khách sạn và quản trị trải nghiệm"],
  [
    "health_and_safety",
    "Điều dưỡng",
    "Chăm sóc sức khỏe với tiêu chuẩn quốc tế",
  ],
  ["precision_manufacturing", "Cơ khí", "Kỹ thuật viên cơ khí chính xác"],
  ["agriculture", "Nông nghiệp", "Nhân lực nông nghiệp chất lượng cao"],
];
export function renderJobMarket(container, { embedded = false } = {}) {
  const s = document.createElement("section");
  s.className = embedded
    ? "mt-10"
    : "max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop py-16";
  s.innerHTML = `${embedded ? "" : '<p class="text-sm text-on-surface-variant">Italy Market <span class="mx-2">›</span> <b>Job Market</b></p>'}<h2 class="font-headline-md text-headline-md mt-3">Thị trường việc làm tại Ý</h2><p class="mt-3 text-on-surface-variant">Những ngành đang thiếu lao động và cần kết nối nguồn nhân lực phù hợp từ Việt Nam.</p><div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-7">${jobs.map(([icon, title, desc]) => `<article class="italy-accent bg-surface-container-low p-5"><span class="material-symbols-outlined text-secondary">${icon}</span><h3 class="font-headline-sm text-headline-sm mt-3">${title}</h3><p class="mt-2 text-sm text-on-surface-variant">${desc}</p></article>`).join("")}</div>`;
  container.append(s);
}
export default function JobMarket(container) {
  renderJobMarket(container);
}
