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
