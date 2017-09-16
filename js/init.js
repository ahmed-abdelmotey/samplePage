(function(){
  // initialize mixitup
  var containerEl = document.querySelector('#all-services');
  var mixer = mixitup(containerEl);

  // enable wow effect
  new WOW().init();

  // swiper config
  var swiper = new Swiper('#slider', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      parallax: true,
      speed: 600,
      // loop: true,
  });
})()