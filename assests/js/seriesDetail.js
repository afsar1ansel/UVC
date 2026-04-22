function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const sidebarSeries = [
  { name: "DPRG SERIES", id: "DPRG", category: "MEASUREMENT" },
  { name: "FLEXA SERIES", id: "FLEXA", category: "MEASUREMENT" },
  { name: "HYBRID SERIES", id: "HYBRID", category: "MEASUREMENT" },
  { name: "OnePirani SERIES", id: "ONEPIRANI", category: "MEASUREMENT" },
  { name: "McLeod SERIES", id: "MCLEOD", category: "MEASUREMENT" },
  { name: "UVG Display Controllers", id: "UVG_DISPLAY", category: "MEASUREMENT" },
  { name: "VACUUM PUMPS", id: "VACUUM_PUMPS", category: "PUMPS" },
  { name: "VACUUM PUMPING SYSTEMS", id: "VACUUM_SYSTEMS", category: "PUMPS" },
];

function renderSidebar(activeSeries) {
  const sidebar = document.getElementById("seriesSidebar");
  if (!sidebar) return;

  const currentSeries = sidebarSeries.find(s => s.id === activeSeries);
  const category = currentSeries ? currentSeries.category : "MEASUREMENT";

  sidebar.innerHTML = `<h4>${category === "PUMPS" ? "Vacuum Pumps & Systems" : "Vacuum Measurement"}</h4>`;
  
  sidebarSeries.filter(s => s.category === category).forEach((series) => {
    const btn = document.createElement("button");
    btn.className = `sidebar-btn ${series.id === activeSeries ? "active" : ""}`;
    btn.innerHTML = `<span>${series.name}</span>`;
    btn.onclick = () => loadSeries(series.id);
    sidebar.appendChild(btn);
  });
}

function loadSeries(series) {
  // Update URL without reloading
  const newUrl = `${window.location.pathname}?series=${series}`;
  window.history.pushState({ series: series }, "", newUrl);
  
  // Re-render components
  const gridBox = document.getElementById("gridBox");
  if (gridBox) gridBox.innerHTML = "";
  
  renderSidebar(series);
  renderContent(series);
}

function renderContent(series) {
  const gridBox = document.getElementById("gridBox");
  if (!gridBox) return;

  // Combine products and vacuumPumpsAndSystems if available
  const allAvailableProducts = [...products];
  if (typeof vacuumPumpsAndSystems !== "undefined") {
    allAvailableProducts.push(...vacuumPumpsAndSystems);
  }

  const filteredProducts = allAvailableProducts.filter((product) => {
    const code = product.code ? product.code.toUpperCase() : "";
    const title = product.title ? product.title.toUpperCase() : "";
    const name = product.name ? product.name.toUpperCase() : "";

    if (series === "DPRG") {
      return code.includes("DPRG");
    } else if (series === "FLEXA") {
      return (
        code.startsWith("FG") ||
        title.includes("FLEXA") ||
        name.includes("FLEXA")
      );
    } else if (series === "HYBRID") {
      return code.includes("HPRG") || title.includes("HYBRID");
    } else if (series === "ONEPIRANI") {
      return code.startsWith("HVP") || code.startsWith("DVG");
    } else if (series === "MCLEOD") {
      return (
        code.startsWith("UVG-1") ||
        code.startsWith("UVG-2") ||
        title.includes("MCLEOD") ||
        name.includes("MCLEOD") ||
        title.includes("1MM OF HG") ||
        title.includes("10MM OF HG")
      );
    } else if (series === "UVG_DISPLAY") {
      return code.startsWith("UVGE") || code.startsWith("UVGS");
    } else if (series === "VACUUM_PUMPS") {
      return product.id && (product.id === "UVS-IVP-SERIES" || product.id === "UVS-IVPVP-SERIES" || product.id === "UVS-IVPVP-ALTERNATE");
    } else if (series === "VACUUM_SYSTEMS") {
      return product.id && (product.id === "UVS-ROTARY-ROOTS" || product.id === "UVS-TURBO-PUMPING" || product.id === "UVS-DIFFUSION-PUMPING");
    }
    return false;
  });

  // Sort products based on sequence property
  filteredProducts.sort((a, b) => (a.sequence || 999) - (b.sequence || 999));

  // Update Series Description
  const seriesDescription = document.getElementById("seriesDescription");
  if (seriesDescription) {
    const firstWithDesc = filteredProducts.find(
      (p) => p.description && p.description.trim() !== "",
    );
    if (series === "UVG_DISPLAY") {
      seriesDescription.innerHTML = `
        <h2 style="color: #000810; font-weight: 700; text-transform: uppercase;">
          <span style="color: #0da574">UVGE & UVGS</span> DISPLAY CONTROLLERS
        </h2>
        <p>The UVS Model UVGE series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from FG-05A sensor tube. It displays vacuum measurements based on the thermal conductivity of gases. The Model UVGE-2GH-SP unit covers the range from 0.001 mbar to 100 mbar, and controls relay with independent set point. <br><br> The UVS Model UVGS series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from HVP series sensor tubes. It displays vacuum measurements based on the thermal conductivity of gases. The Model UVGS-1GH-SP unit covers the range from 0.001 mbar to 10e-6 mbar, and controls relay with independent set point.</p>
      `;
    } else if (series === "MCLEOD") {
      seriesDescription.innerHTML = `
        <h2 style="color: #000810; font-weight: 700; text-transform: uppercase;">
          <span style="color: #0da574">McLeod</span> SERIES
        </h2>
        <p>${firstWithDesc ? firstWithDesc.description : ""}</p>
      `;
    } else if (series === "VACUUM_PUMPS") {
      seriesDescription.innerHTML = `
        <h2 style="color: #000810; font-weight: 700; text-transform: uppercase;">
          <span style="color: #0da574">VACUUM</span> PUMPS
        </h2>
        <p>Reliable and high-performance vacuum pumps for various industrial and laboratory applications.</p>
      `;
    } else if (series === "VACUUM_SYSTEMS") {
      seriesDescription.innerHTML = `
        <h2 style="color: #000810; font-weight: 700; text-transform: uppercase;">
          <span style="color: #0da574">VACUUM</span> PUMPING SYSTEMS
        </h2>
        <p>Custom-engineered vacuum pumping systems designed to meet specific process requirements.</p>
      `;
    } else if (firstWithDesc) {
      seriesDescription.innerHTML = `
        <h2 style="color: #000810; font-weight: 700; text-transform: uppercase;">
          <span style="color: #0da574">${series}</span> SERIES
        </h2>
        <p>${firstWithDesc.description}</p>
      `;
    } else {
      seriesDescription.innerHTML = `
        <h2 style="color: #000810; font-weight: 700; text-transform: uppercase;">
          <span style="color: #0da574">${series}</span> SERIES
        </h2>
      `;
    }
  }

  // Render Grid
  if (filteredProducts.length > 0) {
    filteredProducts.forEach((product) => {
      let div = document.createElement("div");
      div.classList.add("grids");

      let imgSrc = "./assests/img/Frame677.png";
      if (product.images && product.images.length > 0) {
        imgSrc = product.images[0];
      }

      let contentHtml = "";
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
      } else {
        contentHtml = `<h3>${product.title || product.name} </h3>
                      <p>${product.description ? product.description.substring(0, 100) + "..." : ""}</p>`;
      }

      const detailPage = product.id && product.id.startsWith("UVS-") ? "uvsPumpDetail.html" : "dprgDetail.html";

      div.innerHTML = ` <img src="${imgSrc}" alt="${product.name}" style="height: 200px; object-fit: contain;">
                    ${contentHtml}
                    <div class="gridBtn" ><a href="${detailPage}?id=${product.id}">View Product</a></div>`;

      gridBox.appendChild(div);
    });
  } else {
    gridBox.innerHTML =
      "<p style='text-align:center; width:100%; color: #666;'>No products found for this series.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const series = getUrlParameter("series") || "DPRG";
  renderSidebar(series);
  renderContent(series);

  // Handle browser back/forward buttons
  window.onpopstate = (event) => {
    const poppedSeries = event.state ? event.state.series : getUrlParameter("series") || "DPRG";
    renderSidebar(poppedSeries);
    renderContent(poppedSeries);
  };

  // Hide the grid selectors from allProduct.html since we are just showing one list
  const gridSelectors = document.querySelector(".gridSelectors");
  if (gridSelectors) {
    gridSelectors.style.display = "none";
  }
});
