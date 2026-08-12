var swiperCategories = new Swiper(".categories-container", {
  spaceBetween: 24,
  loop: true,
    navigation: {
      nextEl: ".swiper-button-prev",
      prevEl: ".swiper-button-next",
    },

    breakpoints: {

      1024: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  });

var swiperrival= new Swiper(".arival-container", {
spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    }
  },
});

