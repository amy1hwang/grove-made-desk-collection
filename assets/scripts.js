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
