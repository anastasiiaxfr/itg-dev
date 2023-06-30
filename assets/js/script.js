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
      1400: {
        slidesPerView: 4,
      },
    },
});

const swiper_services = new Swiper(".swiper-services", {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: '.swiper-services-toggle-next-0',
        prevEl: '.swiper-services-toggle-prev-0',
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

function start_slider(name, num){
  const swiper_list = new Swiper(name, {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: `.swiper-services-toggle-next-${num}`,
        prevEl: `.swiper-services-toggle-prev-${num}`,
    },
  });
}

start_slider('.swiper-list-1', 1);
start_slider('.swiper-list-2', 2);
start_slider('.swiper-list-3', 3);
start_slider('.swiper-list-4', 4);


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



// FORM validation
let form = document.querySelector('.form');
let form_modal = document.querySelector('.form-modal');
let modal_overlay = document.querySelector('.modal__overlay');

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault()
        event.stopPropagation()

        let field = this.querySelectorAll('.form__field');
        let submit = this.querySelector('[type="submit"]');
        let field_error = this.querySelectorAll('.form__error');
        let field_success = this.querySelector('.form__success');
        
        let field_name = this.querySelector('[name="user_name"]');
        let field_email = this.querySelector('[name="user_email"]');
        let field_phone = this.querySelector('[name="user_tel"]');
        let field_question = this.querySelector('[name="user_msg"]');

        if (field_name && field_email && field_phone && field_question) {
            let name = field_name.value;
            let email = field_email.value;
            let tel = field_phone.value;
            let question = field_question.value;

            let data = {
                contact_user_name: name,
                contact_user_email: email,
                contact_user_tel: tel,
                contact_user_question: question,
            };

            if (name.length > 0 && email.length > 0 && tel.length > 0 && question.length > 0) {
                submit.disabled = false;
                //alert('DATA SEND')
                addUserQuestionToFirestore(data);
                modal_overlay.classList.remove('d-flex');
                form.reset();
                field_success.classList.add('d-block');
            } else {
                submit.disabled = true;
                field_error.forEach(i => {
                    i.classList.add('d-block');
                    i.classList.remove('d-none');
                });
            }
            //getAuthData(login_email, login_password);
        }

        field.forEach(i => i.addEventListener("input", function (e) {
            let inputs = Array.from(field).every(field => field.value.trim() !== '');
            console.log(inputs)
            if (inputs === true) {
                submit.disabled = false;
            }
            if (i.value.length > 0) {
                i.closest('.form__row').querySelector('.form__error').classList.add('d-none');
                i.closest('.form__row').querySelector('.form__error').classList.remove('d-block')
            }
        }))

    },
    false
);

form_modal.addEventListener(
  "submit",
  function (event) {

      event.preventDefault()
      event.stopPropagation()

      let field_modal = this.querySelectorAll('.form-modal__field');
      let submit = this.querySelector('.form-modal__btn');
      let field_error = this.querySelectorAll('.form-modal__error');
      let field_success = this.querySelector('.form-modal__success');
      
      let field_name = this.querySelector('[name="form-modal__name"]');
      let field_email = this.querySelector('[name="form-modal__email"]');
      let field_phone = this.querySelector('[name="form-modal__tel"]');
      let field_question = this.querySelector('[name="form-modal__questiion"]');

      if (field_name && field_email && field_phone && field_question) {
          let name = field_name.value;
          let email = field_email.value;
          let tel = field_phone.value;
          let question = field_question.value;

          let data = {
              contact_user_name: name,
              contact_user_email: email,
              contact_user_tel: tel,
              contact_user_question: question,
          };

          if (name.length > 0 && email.length > 0 && tel.length > 0 && question.length > 0) {
              submit.disabled = false;
              //alert('DATA SEND')
              addUserQuestionToFirestore(data);
              modal_overlay.classList.remove('d-flex');
              form_modal.reset();
              field_success.classList.add('d-block');
          } else {
              submit.disabled = true;
              field_error.forEach(i => {
                  i.classList.add('d-block');
                  i.classList.remove('d-none');
              });
          }
          //getAuthData(login_email, login_password);
      }

      field_modal.forEach(i => i.addEventListener("input", function (e) {
          let inputs_modal = Array.from(field_modal).every(field_modal => field_modal.value.trim() !== '');
          console.log(inputs_modal)
          if (inputs_modal === true) {
              submit.disabled = false;
          }
          if (i.value.length > 0) {
              i.closest('.form-modal__row').querySelector('.form-modal__error').classList.add('d-none');
              i.closest('.form-modal__row').querySelector('.form-modal__error').classList.remove('d-block')
          }
      }))

  },
  false
);


