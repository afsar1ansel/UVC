$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, // Number of items to show at once
    loop: true, // Infinite loop
    margin: 10, // Margin between items
    nav: false, // Disable next/prev buttons
    dots: true, // Show pagination dots
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // Time between auto slides
    smartSpeed: 3000, // Speed of the transition between slides
    mouseDrag: false, // Disable dragging for vertical slides
    touchDrag: false, // Disable touch dragging for vertical slides
    animateIn: "fadeIn", // Optional: Fade transition in
    animateOut: "fadeOut", // Optional: Fade transition out
    responsiveClass: true,
    rtl: false,
    slideBy: 1,
    direction: "vertical",
  });
});
