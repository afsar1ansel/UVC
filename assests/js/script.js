$(document).ready(function () {
  var owl = $(".owl-carousel");
  var itemCount = owl.find(".item").length;

  owl.owlCarousel({
    items: 1, // Number of items to show at once
    loop: itemCount > 1, // Only loop if there is more than 1 item
    margin: 10, // Margin between items
    nav: false, // Disable next/prev buttons
    dots: itemCount > 1, // Only show pagination dots if there is more than 1 item
    autoplay: itemCount > 1, // Only autoplay if there is more than 1 item
    autoplayTimeout: 3000, // Time between auto slides
    smartSpeed: 3000, // Speed of the transition between slides
    mouseDrag: itemCount > 1, // Disable dragging for single slide
    touchDrag: itemCount > 1, // Disable touch dragging for single slide
    animateIn: "fadeIn", // Optional: Fade transition in
    animateOut: "fadeOut", // Optional: Fade transition out
    responsiveClass: true,
    rtl: false,
    slideBy: 1,
    direction: "vertical",
  });
});
