// import Swiper JS
import Swiper, { Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([Pagination]);

const swiper = new Swiper('.section-review .swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 24,

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1159: {
          slidesPerView: 3,
          spaceBetween: 24
        },
    },
  
    // If we need pagination
    pagination: {
        el: ".section-review .swiper-pagination",
        clickable: true,
    },
});