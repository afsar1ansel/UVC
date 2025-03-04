$(document).ready(function(){
    $(".carouselSection-owl").owlCarousel({
      // items: 2.5,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      //   autoplayHoverPause: true,
      dots: false,
      nav: true,
      margin: 10,
      navText: [`←`, `→`],
      responsive: {
        0: {
          items: 1, // Show 1 full item and a bit of the next on small screens
        },
        480: {
          items: 1,
        },
        768: {
          items: 2, // Show 2 full items and part of the next on medium screens
        },
        1024: {
          items: 2.6, // Show 2 full items and half of the next on larger screens
        },
      },
    });
})

