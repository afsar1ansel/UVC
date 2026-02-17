function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

document.addEventListener("DOMContentLoaded", () => {
  const series = getUrlParameter("series");
  const gridBox = document.getElementById("gridBox");
  gridBox.innerHTML = "";

  if (series) {
    // Filter products based on series
    const filteredProducts = products.filter((product) => {
      const code = product.code ? product.code.toUpperCase() : "";
      const title = product.title ? product.title.toUpperCase() : "";
      const name = product.name ? product.name.toUpperCase() : "";

      if (series === "DPRG") {
        // DPRG series logic: matches DPRG code
        return code.includes("DPRG");
      } else if (series === "FLEXA") {
        // FLEXA series logic: matches FG/FGD/FGE code or Flexa in title/name
        return (
          code.startsWith("FG") ||
          title.includes("FLEXA") ||
          name.includes("FLEXA")
        );
      } else if (series === "HYBRID") {
        // Hybrid series logic: matches HPRG code
        return code.includes("HPRG") || title.includes("HYBRID");
      } else if (series === "ONEPIRANI") {
        // OnePirani logic: Matches HVP, DVG
        return code.startsWith("HVP") || code.startsWith("DVG");
      } else if (series === "MCLEOD") {
        // McLeod logic: Matches UVG-1, UVG-2
        return (
          code.startsWith("UVG-1") ||
          code.startsWith("UVG-2") ||
          title.includes("MCLEOD") ||
          name.includes("MCLEOD") ||
          title.includes("1MM OF HG") ||
          title.includes("10MM OF HG")
        );
      } else if (series === "UVG_DISPLAY") {
        // UVG Display Logic: Matches UVGE, UVGS
        return code.startsWith("UVGE") || code.startsWith("UVGS");
      }

      return false;
    });

    if (filteredProducts.length > 0) {
      filteredProducts.forEach((product) => {
        let div = document.createElement("div");
        div.classList.add("grids");

        // Determine image source - simplified logic to pick first image if available
        let imgSrc = "./assests/img/Frame677.png"; // Default
        if (product.images && product.images.length > 0) {
          imgSrc = product.images[0];
        }

        div.innerHTML = ` <img src="${imgSrc}" alt="${product.name}" style="height: 200px; object-fit: contain;">
                      <h3>${product.title || product.name} </h3>
                      <p>${product.description ? product.description.substring(0, 100) + "..." : ""}</p>
                      <div class="gridBtn" ><a href="dprgDetail.html?id=${product.id}">View Product</a></div>`;

        gridBox.appendChild(div);
      });
    } else {
      gridBox.innerHTML =
        "<p style='text-align:center; width:100%; color: white;'>No products found for this series.</p>";
    }
  } else {
    gridBox.innerHTML =
      "<p style='text-align:center; width:100%; color: white;'>No series selected.</p>";
  }

  // Hide the grid selectors from allProduct.html since we are just showing one list
  const gridSelectors = document.querySelector(".gridSelectors");
  if (gridSelectors) {
    gridSelectors.style.display = "none";
  }
});
