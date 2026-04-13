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

    // Sort products based on sequence property
    filteredProducts.sort((a, b) => (a.sequence || 999) - (b.sequence || 999));
    
    // Inject series description
    const seriesDescription = document.getElementById("seriesDescription");
    if (seriesDescription) {
      seriesDescription.style.textAlign = "left"; // Align text to the start (left)
      const firstWithDesc = filteredProducts.find(
        (p) => p.description && p.description.trim() !== "",
      );
      if (series === "UVG_DISPLAY") {
        seriesDescription.innerHTML = `
          <h2 style="color: #000810; font-size: 2rem; font-weight: 700; margin-bottom: 10px; text-transform: uppercase;">
            <span style="color: #0da574">UVGE & UVGS</span> DISPLAY CONTROLLERS
          </h2>
          <p style="margin-bottom: 30px;">The UVS Model UVGE series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from FG-05A sensor tube. It displays vacuum measurements based on the thermal conductivity of gases. The Model UVGE-2GH-SP unit covers the range from 0.001 mbar to 100 mbar, and controls relay with independent set point. <br><br> The UVS Model UVGS series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from HVP series sensor tubes. It displays vacuum measurements based on the thermal conductivity of gases. The Model UVGS-1GH-SP unit covers the range from 0.001 mbar to 10e-6 mbar, and controls relay with independent set point.</p>
        `;
      } else if (series === "MCLEOD") {
        seriesDescription.innerHTML = `
          <h2 style="color: #000810; font-size: 2rem; font-weight: 700; margin-bottom: 10px; text-transform: uppercase;">
            <span style="color: #0da574">McLeod</span> SERIES
          </h2>
          <p style="margin-bottom: 30px;">${firstWithDesc ? firstWithDesc.description : ""}</p>
        `;
      } else if (firstWithDesc) {
        seriesDescription.innerHTML = `
          <h2 style="color: #000810; font-size: 2rem; font-weight: 700; margin-bottom: 10px; text-transform: uppercase;">
            <span style="color: #0da574">${series}</span> SERIES
          </h2>
          <p style="margin-bottom: 30px;">${firstWithDesc.description}</p>
        `;
      } else {
        seriesDescription.innerHTML = `
          <h2 style="color: #000810; font-size: 2rem; font-weight: 700; margin-bottom: 10px; text-transform: uppercase;">
            <span style="color: #0da574">${series}</span> SERIES
          </h2>
        `;
      }
    }

    if (filteredProducts.length > 0) {
      filteredProducts.forEach((product) => {
        let div = document.createElement("div");
        div.classList.add("grids");

        // Determine image source - simplified logic to pick first image if available
        let imgSrc = "./assests/img/Frame677.png"; // Default
        if (product.images && product.images.length > 0) {
          imgSrc = product.images[0];
        }

        let contentHtml = `<h3>${product.title || product.name} </h3>
                      <p>${product.description ? product.description.substring(0, 100) + "..." : ""}</p>`;

        if (product.gridDetails && product.gridDetails.length > 0) {
          contentHtml =
            product.gridDetails
              .map((detail, index) => {
                if (index === 0) return `<h3>${detail}</h3>`;
                if (index === 1)
                  return `<h4 style="margin: 5px 0 10px 0; font-size: 1em;">${detail}</h4>`;
                return `<p style="margin: 2px 0;">${detail}</p>`;
              })
              .join("") + `<div style="margin-bottom: 15px;"></div>`;
        }

        div.innerHTML = ` <img src="${imgSrc}" alt="${product.name}" style="height: 200px; object-fit: contain;">
                      ${contentHtml}
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
