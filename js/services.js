$(document).ready(function() {

  // ==================== SERVICES =======================

var mixer = mixitup('.services__cards');

$('.services__filter-button').on('click', function () {
  $('.services__filter-button').removeClass('services__filter-btn--active')
    $(this).addClass('services__filter-btn--active')
})


// ==================== PROCESS-TABS =======================

$('.tabs__triggers-item').click(function(e){
  e.preventDefault();

  $('.tabs__triggers-item').removeClass('tabs__triggers-step--active');
  $('.process__slide').removeClass('process__slide--active');
  $(this).children('.tabs__triggers-text').addClass('tabs__triggers-text--active')

  $(this).addClass('tabs__triggers-step--active');

  $($(this).attr('href')).addClass('process__slide--active')  
});


$('.tabs__triggers-item:first').click();

$('.tabs__triggers-item').on('click', function () {
  $('.tabs__triggers-text').removeClass('tabs__triggers-text--active')
  $(this).children('.tabs__triggers-text').addClass('tabs__triggers-text--active')
});

// ============================= BURGER =============================

$('.burger, .overlay').on('click', function (e) {
  e.preventDefault()
  $('.menu__wrapper').toggleClass('menu--open')
  $('.overlay').toggleClass('overlay--show')
  $('body').toggleClass('lock')
  $('.burger').toggleClass('burger--active')

})

$('.menu__wrapper, .overlay').on('click', function (e) {
  e.preventDefault()
  $('.menu__wrapper').removeClass('menu--open')
  $('.overlay').removeClass('overlay--show')
  $('body').removeClass('lock')
  $('.burger').removeClass('burger--active')

})
setInterval(() => {
  if ($(window).scrollTop() > 0 && $('.menu__wrapper').hasClass('menu--open') === false) {
      $('.burger').addClass('burger--follow')
  } else {
      $('.burger').removeClass('burger--follow')
  }
}, 0);

   // ============================= POPUP =============================

   $('.header__top-get,.header__button').on('click', function (e) {
    e.preventDefault()
    $('.modal').toggleClass('form--open')
    $('.overlay').toggleClass('overlay--show')
    $('body').toggleClass('lock')

})

$('.modal__close').on('click', function (e) {
    e.preventDefault()
    $('.modal').removeClass('form--open')
    $('.overlay').removeClass('overlay--show')
    $('body').removeClass('lock')

})

// ============================= ВАЛИДАЦИЯ  =============================

new window.JustValidate('.pop__form', {
    rules: {

    },
    messages: {
        email: {
            required: 'Укажите вашу почту',

        },
        name: {
            required: 'Укажите ваше имя',
        },

    }
}

)

}); 
