$(document).ready(function () {
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
        items: 2,
      },
      768: {
        items: 2, // Show 2 full items and part of the next on medium screens
      },
      1024: {
        items: 3.6, // Show 2 full items and half of the next on larger screens
      },
    },
  });
});


function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const id = getUrlParameter("id");
console.log(id);

const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Update the main image source
    mainImage.src = thumbnail.dataset.full;

    // Remove "active" class from all thumbnails
    thumbnails.forEach((t) => t.classList.remove("active"));

    // Add "active" class to the clicked thumbnail
    thumbnail.classList.add("active");
  });
});
