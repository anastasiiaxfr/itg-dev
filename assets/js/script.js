// SWIPER slider
const swiper = new Swiper(".swiper-blogs", {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: '.swiper-toggle-next',
        prevEl: '.swiper-toggle-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      520: {
        slidesPerView: 1.5,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
});

const swiper_services = new Swiper(".swiper-services", {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: '.swiper-services-toggle-next',
        prevEl: '.swiper-services-toggle-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1.5,
      },
      720: {
        slidesPerView: 2,
      },
      920: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3.5,
      },
    },
});