$(function () {
  $('.mobile-menu').on('click', function () {
    $('.menu__list').slideToggle();
    if( $('.mobile-menu').hasClass('mobile-menu-active')){
      $('.mobile-menu').removeClass('mobile-menu-active');
    }else{
      $('.mobile-menu').addClass('mobile-menu-active');
    };
  });
});
 