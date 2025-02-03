const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: document.querySelector(".swiper").getAttribute("data-slides"),
  spaceBetween: 30,
  loop: true,
  speed: 600,
  autoplay: false,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let autoplay = document.querySelector(".swiper").getAttribute("data-autoplay");

if (autoplay != null) {
  swiper.params.autoplay = {
    delay: 2000,
    disableOnInteraction: false,
  };
  swiper.autoplay.start();
}
