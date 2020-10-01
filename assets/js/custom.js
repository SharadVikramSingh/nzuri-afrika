jQuery(document).ready(function ($) {

  /* Carousel-js */

  $('.bannerSlider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    smartSpeed: 600,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1024: {
        items: 1,
      },
      1200: {
        items: 1
      }
    }
  });

// sticky
  $(window).scroll(function(e) {
		if($(window).scrollTop() > 60) {
			 $('.header').addClass('sticky');
		} else {
			 $('.header').removeClass('sticky');
		}
		 
   });
//div  sticky on scroll
   var fixmeTop = $('.second_stickymenu').offset().top;
   $(window).scroll(function() {
       var currentScroll = $(window).scrollTop();
       if (currentScroll  >= fixmeTop ) {
           $('.second_stickymenu').addClass('stckymenu');
       } else {
           $('.second_stickymenu').removeClass('stckymenu');
       }
   });
   





});