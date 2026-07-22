function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function getFullSuppliesContext(product) {
  const img = (product.images && product.images.length > 0) ? product.images[0] : "";
  let subCat = "Vacuum Supplies";
  if (img.includes("/supplies/")) subCat = "Filters & Traps";
  else if (img.includes("/liquid&mistRemoval/")) subCat = "Liquid & Mist Removal";
  else if (img.includes("/vaporCapture/")) subCat = "Vapor Capture";

  return `Filters & Vacuum Components  - ${subCat} - ${product.code}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getUrlParameter("id");
  if (!window.suppliesProducts) {
    console.error("suppliesProducts data not found");
    return;
  }

  const product = window.suppliesProducts.find((p) => p.id === id);

  if (product) {
    if (typeof window.updateMetaTags === "function") {
      window.updateMetaTags(
        `${product.title} - Solberg Vacuum Filters | UVS India`,
        `Specifications, connection sizing, and datasheets for Solberg ${product.title} inline vacuum pump filters, liquid separators, and traps.`
      );
    } else {
      document.title = `${product.title} - Solberg Vacuum Filters | UVS India`;
    }

    // 1. Set item code header
    const itemCodeHeader = document.getElementById("item-code-header");
    if (itemCodeHeader) {
      itemCodeHeader.innerHTML = `<h1 class="item-code-heading" style="font-size: 28px; background: #ffcc00; padding: 5px 15px; border-radius: 4px; font-weight: bold; margin-bottom: 0; border-left: none;">${product.code}</h1>`;
    }

    // 2. Render primary description, features, image gallery
    renderPrimaryDetails(product);

    // 3. Render Technical Specs Table
    renderTechSpecs(product);

    // 4. Render Applications
    renderApplications(product);

    // 5. Render Options
    renderOptions(product);

    // Initialize gallery and zoom events
    initializeGallery();
    initializeZoom();
  } else {
    const producter = document.getElementById("producter");
    if (producter) {
      producter.innerHTML = `
        <div style="text-align: center; width: 100%; padding: 50px 0;">
          <h2 style="color: #333;">Product not found!</h2>
          <button onclick="window.history.back()" style="margin-top: 20px; background: #0da574; color: white; border: none; padding: 10px 25px; border-radius: 5px; cursor: pointer;">Go Back</button>
        </div>
      `;
    }
  }
});

function renderPrimaryDetails(product) {
  const producter = document.getElementById("producter");
  if (!producter) return;

  const images = product.images && product.images.length > 0 ? product.images : ["./assests/img/products/ReplaceImage.png"];

  // Gallery HTML
  const thumbnailsHtml = images.length > 1
    ? `
      <div class="thumbnail-container">
        ${images
      .map(
        (img, index) => `
              <img
                class="thumbnail ${index === 0 ? "active" : ""}"
                src="${img}"
                alt="Thumbnail ${index + 1}"
                data-full="${img}"
                onerror="this.onerror=null; this.src='./assests/img/products/ReplaceImage.png';"
              />
            `
      )
      .join("")}
      </div>
    `
    : "";

  // Construction Options HTML
  let constructionHtml = "";
  if (product.constructionOptions && product.constructionOptions.length > 0) {
    constructionHtml = `
      <div class="construction-section">
        <h4 class="construction-title">${product.constructionTitle || "Construction Options"}</h4>
        ${product.constructionOptions
        .map(
          (opt) => `
            <div class="construction-card">
              <h5>${opt.name}</h5>
              <ul>
                ${opt.points.map((pt) => `<li>${pt}</li>`).join("")}
              </ul>
            </div>
          `
        )
        .join("")}
      </div>
    `;
  }

  // Key Features Highlights
  let highlightsHtml = "";
  if (product.highlights && product.highlights.length > 0) {
    if (typeof product.highlights[0] === "string") {
      highlightsHtml = `
        <div class="detailFeatures" style="margin-top: 30px;">
          <h3 style="font-size: 20px; font-weight: 700; color: #001f3f; margin-bottom: 15px;">Key Features Overview</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${product.highlights
          .map(
            (feature) => `
                  <div style="display: flex; gap: 10px; align-items: flex-start;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffc642" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px;">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <p style="margin: 0; color: #4d5765; font-size: 15px; font-weight: 500;">${feature}</p>
                  </div>
                `
          )
          .join("")}
          </div>
        </div>
      `;
    } else {
      highlightsHtml = `
        <div class="detailFeatures" style="margin-top: 30px;">
          <h3 style="font-size: 20px; font-weight: 700; color: #001f3f; margin-bottom: 15px;">Key Features Overview</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            ${product.highlights
          .map(
            (section) => `
                <div>
                  <h5 style="color: #001f3f; font-weight: 700; font-size: 16px; margin-bottom: 10px;">${section.title}</h5>
                  <div style="display: flex; flex-direction: column; gap: 10px;">
                    ${section.points
                .map(
                  (pt) => `
                        <div style="display: flex; gap: 10px; align-items: flex-start;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffc642" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px;">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <p style="margin: 0; color: #4d5765; font-size: 15px; font-weight: 500;">${pt}</p>
                        </div>
                      `
                )
                .join("")}
                  </div>
                </div>
              `
          )
          .join("")}
          </div>
        </div>
      `;
    }
  }

  producter.innerHTML = `
    <div class="image-gallery" style="flex: 1; min-width: 300px; display: flex; flex-direction: row; gap: 15px; border: none; padding: 0; margin: 0; align-self: flex-start;">
      ${thumbnailsHtml}
      <div class="main-image-container" style="flex-grow: 1; border: 1px solid #e1e1e1; background: #fff; padding: 20px; border-radius: 8px; max-height: 400px; overflow: hidden; display: flex; justify-content: center; align-items: center;">
        <img id="main-image" src="${images[0]}" alt="${product.title} Image" style="max-height: 100%; max-width: 100%; object-fit: contain; transition: transform 0.1s ease-out;" onerror="this.onerror=null; this.src='./assests/img/products/ReplaceImage.png';" />
      </div>
    </div>
    
    <div class="product-details" style="flex: 1.2; min-width: 300px;">
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 10px;">
        <div class="productCode" style="background-color: #0da574; border-radius: 3px;">${product.code}</div>
      </div>
      <h2 style="font-size: 32px; font-weight: 700; color: #001f3f; margin-bottom: 5px;">${product.title}</h2>
      <h4 style="font-size: 18px; font-weight: 600; color: #0da574; margin-bottom: 20px; font-style: italic;">${product.tagline}</h4>
      <p style="color: #4d5765; font-size: 16px; line-height: 26px; margin-bottom: 25px; text-align: justify;">
        ${product.description}
      </p>
      
      ${constructionHtml}
      
      ${highlightsHtml}
      
      <div class="Product_btns" style="margin-top: 30px; width: 100%;">
        <div class="requestQuote" onclick="openEnquiryModal('${getFullSuppliesContext(product)}')" style="width: 100%; max-width: 300px; justify-content: center; border-radius: 4px; font-weight: 600;">Request Enquiry / Quote</div>
      </div>
    </div>
  `;
}

function renderTechSpecs(product) {
  const productTable = document.getElementById("productTable");
  if (!productTable) return;

  if (!product.technicalSpecifications || product.technicalSpecifications.length === 0) {
    productTable.style.display = "none";
    return;
  }

  productTable.innerHTML = `
    <div class="product-table" style="margin-top: 40px; margin-bottom: 40px; width: 100%;">
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 25px; color: #001f3f;">Technical Specifications</h2>
      <div class="tableBox" style="overflow-x: auto; width: 100%; border: 1px solid #dee2e6; border-radius: 8px;">
        <table class="table table-striped table-bordered" style="width: 100%; table-layout: fixed; max-width: 100%; border-collapse: collapse; margin-bottom: 0; background: white;">
          <thead>
            <tr>
              <th style="background-color: #f8f9fa; font-weight: 700; color: #333; border: 1px solid #dee2e6; padding: 12px 15px; width: 45%;">Parameter</th>
              <th style="background-color: #f8f9fa; font-weight: 700; color: #333; border: 1px solid #dee2e6; padding: 12px 15px; width: 55%;">Specification</th>
            </tr>
          </thead>
          <tbody>
            ${product.technicalSpecifications
      .map(
        (spec) => `
                <tr>
                  <td style="font-weight: 600; border: 1px solid #dee2e6; padding: 10px 15px; color: #444;">${spec.parameter}</td>
                  <td style="border: 1px solid #dee2e6; padding: 10px 15px; color: #555;">${spec.value}</td>
                </tr>
              `
      )
      .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderApplications(product) {
  const container = document.getElementById("productApplications");
  if (!container) return;

  if (!product.applications || product.applications.length === 0) {
    container.style.display = "none";
    return;
  }

  container.innerHTML = `
    <div class="applications-box">
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 20px; color: #001f3f;">Industrial Applications</h2>
      <ul class="applications-list">
        ${product.applications
      .map(
        (app) => `
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0da574" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${app}</span>
            </li>
          `
      )
      .join("")}
      </ul>
    </div>
  `;
}

function renderOptions(product) {
  const container = document.getElementById("productOptions");
  if (!container) return;

  if (!product.options) {
    container.style.display = "none";
    return;
  }

  if (Array.isArray(product.options)) {
    container.innerHTML = `
      <div class="options-box">
        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 20px; color: #001f3f;">Available Options & Accessories</h2>
        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${product.options
        .map(
          (opt) => `
              <div>
                <h5 style="color: #0da574; font-weight: 700; font-size: 16px; margin-bottom: 10px;">${opt.title}</h5>
                <ul style="margin: 0; padding-left: 20px; color: #4d5765; font-size: 14px; line-height: 1.6;">
                  ${opt.points.map((pt) => `<li>${pt}</li>`).join("")}
                </ul>
              </div>
            `
        )
        .join("")}
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="options-box">
        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 15px; color: #001f3f;">Available Options & Accessories</h2>
        <p style="color: #4d5765; font-size: 15px; line-height: 24px; margin-bottom: 0; text-align: justify; font-weight: 500;">
          ${product.options}
        </p>
      </div>
    `;
  }
  container.style.display = "block";
}

function initializeGallery() {
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      mainImage.src = thumbnail.dataset.full;
      thumbnails.forEach((t) => t.classList.remove("active"));
      thumbnail.classList.add("active");
    });
  });
}

function initializeZoom() {
  const container = document.querySelector(".main-image-container");
  const img = document.getElementById("main-image");

  if (container && img) {
    container.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = "scale(1.5)";
    });

    container.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.transformOrigin = "center center";
    });
  }
}
