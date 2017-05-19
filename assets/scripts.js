console.debug("[Scripts.js]", "Initialized");

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
var num = 40;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
      $('.header').addClass('fixed');
      $('.superbar').addClass('sup-fixed');
    } else {
      $('.header').removeClass('fixed');
      $('.superbar').removeClass('sup-fixed');
    };
});

//sildeshow
$(function() {
  $("[data-index-swiper]").swiper({
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

//slide from right to left on scroll
// $(function() {
//   var $animation_elements = $('.collection-group__list li');
//   var $window = $(window);
//   $window.on('scroll', check_if_in_view);
//   $window.trigger('scroll');
//
//   function check_if_in_view() {
//     var window_height = $window.height();
//     var window_top_position = $window.scrollTop();
//     var window_bottom_position = (window_top_position + window_height);
//
//     $.each($animation_elements, function() {
//       var $element = $(this);
//       var element_height = $element.outerHeight();
//       var element_top_position = $element.offset().top;
//       var element_bottom_position = (element_top_position + element_height);
//
//       //check to see if this current container is within viewport
//       if ((element_bottom_position >= window_top_position) &&
//           (element_top_position <= window_bottom_position)) {
//         $element.addClass('in-view');
//       } else {
//         $element.removeClass('in-view');
//       }
//     });
//   }
// });
