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
      navText: [
        "button-pre",
        "button-next"
      ],
      responsive: {
        0: {
          items: 1, // Show 1 full item and a bit of the next on small screens
        },
        480: {
          items: 1.2, // Show 1.5 items on small tablets
        },
        768: {
          items: 1.5, // Show 2 full items and part of the next on medium screens
        },
        1024: {
          items: 2.6, // Show 2 full items and half of the next on larger screens
        },
      },
    });
})

