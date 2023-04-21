import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = () => {
  Swiper.use([Navigation, Pagination]);

  document.addEventListener("DOMContentLoaded", function () {
    const mySwiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      slidesWidth: 400,
      // добавление пагинации
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // добавление кнопок "вперед" и "назад"
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 38,
        },
        1240: {
          slidesPerView: 2,
          spaceBetween: 42,
        },
      },
    });
  });
};
