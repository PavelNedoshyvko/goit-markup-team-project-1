import Swiper from 'swiper/bundle';
const swiper = new Swiper('.swiper-products', {
  // Optional parameters
  // direction: 'horizontal',
	// loop: true,

	slidesPerView: 4,
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
          slidesPerView: 4,
          spaceBetween: 24
        },
    },
	
	

  // If we need pagination
  pagination: {
    el: '.swiper-products-pagination',
    clickable:true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-products-scrollbar',
  // },
});