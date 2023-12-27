(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.main-menu').toggleClass('siteBar');   
    $('body').toggleClass('body_overly');   
  }); 


  // owlCarousel
  $(".calender_date").owlCarousel({
    loop: true,
    margin: 30,
    navText: [
      '<i><img src="assets/img/arrow-left.svg" alt=""></i>',
      '<i ><img src="assets/img/arrow-right.svg" alt=""></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 3
      },
      767: {
        items: 5
      },
      992: {
        items: 7
      }
    }
  });


  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

  var tableOffset = $("#table-1").offset().top;
  var $header = $("#table-1 > thead").clone();
  var $fixedHeader = $("#table-header-fixed").append($header);
  
  $(window).bind("scroll", function() {
    var offset = $(this).scrollTop();
  
    if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
      $fixedHeader.show();
    } else if (offset < tableOffset) {
      $fixedHeader.hide();
    }
  });
 
})(jQuery);
