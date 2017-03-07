//showing superbar
$(function(){
  $('.show-superbar').click(function(event){
      event.stopPropagation();
       $(".superbar").slideToggle().css('display', 'flex');
  });
  $(".superbar").on("click", function (event) {
      event.stopPropagation();
  });
});
$(document).on("click", function () {
    $(".superbar").slideUp();
});

//fixed header on scroll
var num = 92;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    };
    if ($(window).scrollTop() > num) {
      $('.superbar').addClass('sup-fixed');
    } else {
      $('.superbar').removeClass('sup-fixed');
    }
});

//sildeshow
$(function() {
  $(".index-swiper").swiper({
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      loop: true,
      effect: "fade",
      fade: {
        crossFade: true
      },
      speed: 1000,
      autoplay: 5000
  });
});


//to the top
$(function() {
  $('.to-the-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 800);
  });
});
