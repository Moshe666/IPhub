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



}); 
