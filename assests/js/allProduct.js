
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const productId = getUrlParameter("id");

console.log("Product ID:", productId);
