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
      840: {
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
        slidesPerView: 1.3,
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


// MENU toggle

const menu_toggle = document.querySelector('.navbar__toggler');

const menu = document.querySelector('.navbar-collapse');

menu_toggle.addEventListener('click', function(){
    menu.classList.toggle('show');
    this.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    const target = event.target;
    
    if (!menu.contains(target) && !menu_toggle.contains(target)) {
      menu.classList.remove('show');
    }
});