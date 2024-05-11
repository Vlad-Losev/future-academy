// swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  // loop: true,
  speed: 500,
  effect: 'slider', //slider, cards, coverflow, flip, fade, cube (способ перелистывания),
  spaceBetween: 20,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
    1920: {
      slidesPerView: 7,
    }
  }
});