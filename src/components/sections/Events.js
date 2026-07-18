// export function renderEventsPreview(container) {
//   const s = document.createElement("section");

//   s.className =
//     "py-16 max-w-container-max mx-auto px-margin-mobile xl:px-margin-desktop";

//   s.innerHTML = `
//     <div class="flex justify-between">
//       <h2 class="font-headline-md text-headline-md">
//         Sự kiện sắp tới
//       </h2>

//       <a
//         data-link
//         href="/events"
//         class="text-primary font-semibold"
//       >
//         Xem lịch →
//       </a>
//     </div>

//     <div class="grid md:grid-cols-3 gap-5 mt-7">
//       ${[
//         ["25.07", "Họp báo tại Ý"],
//         ["29.08", "Vietnam Day"],
//         ["Mùa Thu", "Festa Vietnamita"],
//       ]
//         .map(
//           ([date, title]) => `
//             <article class="border-l-4 border-secondary bg-surface-container-low p-5">
//               <p class="text-secondary font-semibold">
//                 ${date}
//               </p>

//               <h3 class="font-headline-sm text-headline-sm mt-2">
//                 ${title}
//               </h3>

//               <p class="text-sm text-on-surface-variant mt-2">
//                 Sắp diễn ra · Italia
//               </p>
//             </article>
//           `,
//         )
//         .join("")}
//     </div>
//   `;

//   container.append(s);
// }