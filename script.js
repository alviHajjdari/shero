document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    perView: 5,
    gap: 24,
    breakpoints: {
      768: { perView: 2 },
    },
  }).mount();
});
