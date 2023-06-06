// import Swiper JS
// import Swiper, { Pagination } from 'swiper';
// import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// Swiper.use([Pagination]);
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-review', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 24,

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24
        },
    },
  
    // If we need pagination
    pagination: {
        el: ".swiper-review-pagination",
        clickable: true,
    },
});