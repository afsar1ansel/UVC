function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function getFullHeliumContext(parentProduct, model) {
  const pId = parentProduct.id;
  let series = "";
  if (pId === "HLD-HELIUM-LEAK-TEST-SYSTEM") series = "Helium Leak Test Systems";
  else if (pId === "HLD-CALIBRATED-LEAKS") series = "Calibrated Leaks";
  else if (pId === "VACUUM-COMPONENTS") series = "Vacuum Components";
  else series = parentProduct.title || "Helium Leak Testing";
  
  return `Helium Leak Detectors & Systems - ${series} - ${model.name || parentProduct.code}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getUrlParameter("id");
  if (!window.heliumLeakDetectors) {
      console.error("heliumLeakDetectors data not found");
      return;
  }
  
  const product = window.heliumLeakDetectors.find((p) => p.id === id);

    if (product) {
      if (typeof window.updateMetaTags === "function") {
        window.updateMetaTags(
          `${product.title} (${product.code}) - Helium Leak Testing | UVS India`,
          `Learn about the ${product.title} (${product.code}) helium mass spectrometer leak testing equipment, systems, calibration standards, and components.`
        );
      } else {
        document.title = `${product.title} (${product.code}) - Helium Leak Testing | UVS India`;
      }

      const heroImg = document.querySelector("#hero img");
      if (heroImg) {
        if (id === "HLD-HELIUM-LEAK-TEST-SYSTEM") {
          heroImg.src = "./assests/img/products/HeliumLeakTestSystems.png";
        } else if (id === "VACUUM-COMPONENTS") {
          heroImg.src = "./assests/img/products/Filter&VacuumComponents.png";
        } else {
          heroImg.src = "./assests/img/products/HeliumLeakDetectors.png";
        }
      }

    const itemCodeHeader = document.getElementById("item-code-header");
    if (itemCodeHeader) {
      itemCodeHeader.innerHTML = `<h1 class="item-code-heading" style="font-size: 28px; background: #ffcc00; padding: 5px 15px; border-radius: 4px; font-weight: bold; margin-bottom: 0; border-left: none;">${product.code}</h1>`;
    }

    const downloadContainer = document.getElementById("download-header-container");
    if (downloadContainer) {
      downloadContainer.innerHTML = `
        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
          ${
            product.pdf
              ? `<a href="${product.pdf}" download class="btn btn-success d-flex align-items-center gap-2" style="padding: 10px 20px; font-weight: 600; text-decoration: none; border-radius: 4px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                  </svg>
                  Download Brochure
                </a>`
              : ""
          }
          <div class="downloadBtn" onclick="openEnquiryModal('${getFullHeliumContext(product, {})}')" style="display: flex; align-items: center; gap: 10px; background: #ffc631; color: #000810; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: bold; text-transform: uppercase; border: none;">
            Request Enquiry / Quote
          </div>
        </div>
      `;
    }

    const pdfViewer = document.getElementById("pdfViewer");
    const structuredContainer = document.getElementById("structuredContainer");

    // Branch logic: Educational content vs Systems Showcase vs Components Showcase vs Structured specifications view vs PDF brochure view
    if (product.isEducational) {
      if (pdfViewer) pdfViewer.style.display = "none";
      if (structuredContainer) structuredContainer.style.display = "block";

      renderAboutHeliumLeakTesting(product);
    } else if (product.isSystemsPage) {
      if (pdfViewer) pdfViewer.style.display = "none";
      if (structuredContainer) structuredContainer.style.display = "block";

      renderHeliumLeakTestSystems(product);
    } else if (product.isComponentsPage) {
      if (pdfViewer) pdfViewer.style.display = "none";
      if (structuredContainer) structuredContainer.style.display = "block";

      renderVacuumComponents(product);
    } else if ((product.technicalSpecifications && product.technicalSpecifications.length > 0) || (product.models && product.models.length > 0)) {
      // Hide PDF viewer, show structured layout container
      if (pdfViewer) pdfViewer.style.display = "none";
      if (structuredContainer) structuredContainer.style.display = "block";

      renderStructuredProduct(product);
    } else {
      // Keep existing PDF rendering behavior
      if (pdfViewer) pdfViewer.style.display = "flex";
      if (structuredContainer) structuredContainer.style.display = "none";

      if (product.viewPdf) {
        renderPDF(product.viewPdf, pdfViewer);
      } else if (product.pdf) {
        renderPDF(product.pdf, pdfViewer);
      } else {
        pdfViewer.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 400px; color: #999; border: 1px dashed #ccc; border-radius: 8px;">
              <h3>No Brochure Available</h3>
              <p>A detailed PDF brochure is not yet available for ${product.title}.</p>
              <button onclick="window.history.back()" style="margin-top: 20px; background: #0da574; color: white; border: none; padding: 10px 25px; border-radius: 5px;">Go Back</button>
          </div>
        `;
      }
    }
  } else {
    const pdfViewer = document.getElementById("pdfViewer");
    if (pdfViewer) {
      pdfViewer.innerHTML = "<h2 style='text-align: center; padding: 50px;'>Product not found!</h2>";
    }
  }
});

function renderStructuredProduct(product) {
  const tabsContainer = document.getElementById("modelTabsContainer");
  const producter = document.getElementById("producter");
  const productTable = document.getElementById("productTable");
  const end = document.getElementById("end");

  if (!producter || !productTable || !end) return;

  const parentDesc = document.getElementById("parentDescription");
  if (parentDesc) {
    if (product.models && product.models.length > 0) {
      parentDesc.style.display = "block";
      parentDesc.innerHTML = `
        <h2 style="font-size: 26px; font-weight: 700; color: #001f3f; margin-bottom: 15px;">
          ${product.id === "HLD-CALIBRATED-LEAKS" ? "CHOOSING A CALIBRATOR FOR HELIUM LEAK DETECTORS" : "About the " + product.title}
        </h2>
        <p style="color: #4d5765; font-size: 16px; line-height: 26px; text-align: justify; margin-bottom: 0;">${product.description}</p>
      `;
    } else {
      parentDesc.style.display = "none";
      parentDesc.innerHTML = "";
    }
  }

  // Clear any existing tabs
  if (tabsContainer) {
    tabsContainer.innerHTML = "";
    tabsContainer.style.display = "none";
  }

  // 1. Tier 1: Global Series Navigator (Redirects globally)
  if (tabsContainer && product.seriesId) {
    const seriesProducts = window.heliumLeakDetectors.filter(p => p.seriesId === product.seriesId);
    if (seriesProducts.length > 1) {
      const globalNav = document.createElement("div");
      globalNav.className = "d-flex gap-2 flex-wrap w-100";
      globalNav.style.paddingBottom = "15px";
      globalNav.style.borderBottom = "1px solid #dee2e6";
      globalNav.style.marginBottom = "20px";
      
      globalNav.innerHTML = seriesProducts
        .map(
          (p) => `
            <button class="series-nav-btn btn ${p.id === product.id ? 'btn-success' : 'btn-outline-secondary'}" 
                    onclick="window.location.href='heliumDetail.html?id=${p.id}'"
                    style="padding: 10px 25px; font-weight: 600; border-radius: 30px; transition: all 0.3s; margin-right: 8px; margin-bottom: 8px;">
              ${p.code}
            </button>
          `
        )
        .join("");
      
      tabsContainer.appendChild(globalNav);
      tabsContainer.style.display = "block";
    }
  }

  // 2. Tier 2: Model Variant Switcher (Toggles variants client-side)
  if (tabsContainer && product.models && product.models.length > 0) {
    const variantNav = document.createElement("div");
    variantNav.className = "d-flex gap-2 flex-wrap w-100";
    variantNav.style.marginTop = "10px";
    variantNav.style.marginBottom = "20px";
    
    variantNav.innerHTML = product.models
      .map(
        (m, index) => `
          <button class="variant-tab-btn btn ${index === 0 ? 'btn-dark' : 'btn-outline-dark'}" 
                  data-model-id="${m.id}"
                  style="padding: 8px 20px; font-weight: 600; border-radius: 4px; transition: all 0.3s; margin-right: 8px; margin-bottom: 8px;">
            ${m.name}
          </button>
        `
      )
      .join("");
    
    tabsContainer.appendChild(variantNav);
    tabsContainer.style.display = "block";

    // Set first model as active
    let activeModel = product.models[0];
    updateModelView(activeModel, product);

    // Setup variant switcher event listeners
    const buttons = variantNav.querySelectorAll(".variant-tab-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => {
          b.classList.remove("btn-dark");
          b.classList.add("btn-outline-dark");
        });
        btn.classList.remove("btn-outline-dark");
        btn.classList.add("btn-dark");

        const modelId = btn.dataset.modelId;
        activeModel = product.models.find((m) => m.id === modelId);
        if (activeModel) {
          updateModelView(activeModel, product);
        }
      });
    });
  } else {
    // Single model layout (e.g. ASM 310)
    updateModelView(product, product);
  }
}

function updateModelView(model, parentProduct) {
  const producter = document.getElementById("producter");
  const productTable = document.getElementById("productTable");
  const end = document.getElementById("end");

  if (!producter || !productTable || !end) return;

  // 1. Render primary description, features, image gallery
  const images = (model.images && model.images.length > 0) ? model.images : parentProduct.images;
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
              />
            `,
          )
          .join("")}
      </div>
    `
    : "";

  const seriesSubtitle = parentProduct.seriesId === "PFEIFFER-ADIXEN-ASM" 
    ? "PFEIFFER ADIXEN ASM SERIES" 
    : parentProduct.seriesId === "LEYBOLD-PHOENIX"
      ? "LEYBOLD PHOENIX SERIES"
      : "HELIUM LEAK DETECTOR";

  producter.innerHTML = `
    <div class="image-gallery" style="flex: 1; min-width: 300px;">
      ${thumbnailsHtml}
      <div class="main-image-container" style="border: none; background: transparent; padding: 0; display: flex; justify-content: center; align-items: center;">
        <img id="main-image" src="${images[0]}" alt="${model.title || model.name || parentProduct.title} Image" style="max-height: 300px; object-fit: contain;" />
      </div>
    </div>
    <div class="product-details" style="flex: 1.2; min-width: 300px;">
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 10px;">
        <div class="productCode" style="background-color: #0da574; border-radius: 3px; font-size: 12px; font-weight: 500; padding: 6px;">${model.name || parentProduct.code}</div>
        ${
          parentProduct.pdf
            ? `<a href="${parentProduct.pdf}" download style="text-decoration: none;">
                 <div class="downloadBtn" style="display: flex; align-items: center; gap: 10px; background: #0da574; color: white; padding: 6px 15px; border-radius: 3px; cursor: pointer; font-size: 12px; font-weight: 500; text-transform: uppercase;">
                   <img src="./assests/img/bookLines.svg" alt="" style="filter: brightness(0) invert(1); width: 14px; height: 14px;" /> Download Brochure
                 </div>
               </a>`
            : ""
        }
        <div class="downloadBtn" onclick="openEnquiryModal('${getFullHeliumContext(parentProduct, model)}')" style="display: flex; align-items: center; gap: 10px; background: #ffc631; color: #000810; padding: 6px 15px; border-radius: 3px; cursor: pointer; font-size: 12px; font-weight: bold; text-transform: uppercase;">
          Request Enquiry / Quote
        </div>
      </div>
      <h2 style="font-size: 32px; font-weight: 700; color: #001f3f; margin-bottom: 5px;">${model.title || model.name || parentProduct.title}</h2>
      <h4 style="font-size: 18px; font-weight: 600; color: #0da574; margin-bottom: 20px; font-style: italic;">${model.tagline || seriesSubtitle}</h4>
      <p style="color: #4d5765; font-size: 16px; line-height: 26px; margin-bottom: 30px; text-align: justify;">
        ${model.description || parentProduct.description}
      </p>
      
      <div class="detailFeatures">
        <h3 style="font-size: 20px; font-weight: 700; color: #001f3f; margin-bottom: 15px;">Key Features Overview</h3>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${model.highlights
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
    </div>
  `;

  // 2. Render Technical Specs Table
  const headers = model.columns || [model.name || parentProduct.code];
  const firstColWidth = headers.length > 1 ? "width: 40%;" : "width: 50%;";
  const colWidth = headers.length > 1 ? `width: ${Math.round(60 / headers.length)}%;` : "width: 50%;";
  const headerColsHtml = headers.map(h => `<th style="background-color: #f8f9fa; font-weight: 700; color: #333; border: 1px solid #dee2e6; padding: 12px 15px; ${colWidth}">${h}</th>`).join("");

  productTable.innerHTML = `
    <div class="product-table" style="margin-top: 40px; margin-bottom: 40px; width: 100%;">
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 25px; color: #001f3f;">Technical Specifications</h2>
      <div class="tableBox" style="overflow-x: auto; width: 100%; border: 1px solid #dee2e6; border-radius: 8px;">
        <table class="table table-striped table-bordered" style="width: 100%; table-layout: fixed; max-width: 100%; border-collapse: collapse; margin-bottom: 0; background: white;">
          <thead>
            <tr>
              <th style="background-color: #f8f9fa; font-weight: 700; color: #333; border: 1px solid #dee2e6; padding: 12px 15px; ${firstColWidth}">Technicalical data</th>
              ${headerColsHtml}
            </tr>
          </thead>
          <tbody>
            ${model.technicalSpecifications
              .map(
                (spec) => {
                  let valueCols = "";
                  if (Array.isArray(spec.values)) {
                    valueCols = spec.values.map(val => `<td style="border: 1px solid #dee2e6; padding: 10px 15px; color: #555;">${val}</td>`).join("");
                  } else {
                    valueCols = `<td style="border: 1px solid #dee2e6; padding: 10px 15px; color: #555;" colspan="${headers.length}">${spec.value}</td>`;
                  }
                  return `
                    <tr>
                      <td style="font-weight: 600; border: 1px solid #dee2e6; padding: 10px 15px; color: #444;">${spec.parameter}</td>
                      ${valueCols}
                    </tr>
                  `;
                }
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // 3. Render Benefits
  end.innerHTML = `
    <div class="end" style="margin-top: 40px; margin-bottom: 50px; width: 100%;">
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 25px; color: #001f3f;">${model.benefitsTitle || 'Benefits'}</h2>
      <div style="display: flex; flex-direction: column; gap: 15px;">
        ${model.benefits
          .map(
            (para) => `
          <p style="color: #4d5765; text-align: justify; font-size: 16px; font-style: normal; font-weight: 400; line-height: 26px; margin: 0;">
            ${para}
          </p>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  // 4. Initialize interactions
  initializeGallery();
  initializeZoom();
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
  const containers = document.querySelectorAll(".main-image-container");

  containers.forEach((container) => {
    const img = container.querySelector("img");
    if (!img) return;

    container.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = "scale(2)";
    });

    container.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.transformOrigin = "center center";
    });
  });
}

async function renderPDF(url, container) {
  // Set worker source
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  try {
    container.innerHTML = `
      <div class="pdf-loading">
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3 text-muted">Preparing brochure view...</p>
      </div>
    `;

    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;
    
    // Clear loading state
    container.innerHTML = '';

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      
      // Calculate scale to perfectly fit the container width (Full-bleed web look)
      const containerWidth = container.clientWidth;
      const viewportBase = page.getViewport({ scale: 1 });
      const scale = containerWidth / viewportBase.width;

      const viewport = page.getViewport({ scale: scale });

      // 1. Create a temporary off-screen canvas to render the full PDF page
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = viewport.width;
      tempCanvas.height = viewport.height;
      const tempContext = tempCanvas.getContext('2d');
      
      // Render the full page to the temporary canvas
      await page.render({ canvasContext: tempContext, viewport: viewport }).promise;

      // 2. SMART CROPPING: Scan the canvas pixels to find where the actual content starts and ends
      const imgData = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      const data = imgData.data;
      
      let contentTop = 0;
      let contentBottom = tempCanvas.height;
      const padding = 20; // 20px padding so text isn't right on the edge

      // Scan from top down to find the first non-white pixel
      for (let y = 0; y < tempCanvas.height; y += 2) {
        let isWhiteRow = true;
        for (let x = 0; x < tempCanvas.width; x += 4) {
          const i = (y * tempCanvas.width + x) * 4;
          // Check if pixel is not white (rgb < 250) and not fully transparent
          if (data[i+3] > 10 && (data[i] < 250 || data[i+1] < 250 || data[i+2] < 250)) {
            isWhiteRow = false;
            break;
          }
        }
        if (!isWhiteRow) {
          contentTop = Math.max(0, y - padding);
          break;
        }
      }

      // Scan from bottom up to find the last non-white pixel
      for (let y = tempCanvas.height - 1; y >= 0; y -= 2) {
        let isWhiteRow = true;
        for (let x = 0; x < tempCanvas.width; x += 4) {
          const i = (y * tempCanvas.width + x) * 4;
          if (data[i+3] > 10 && (data[i] < 250 || data[i+1] < 250 || data[i+2] < 250)) {
            isWhiteRow = false;
            break;
          }
        }
        if (!isWhiteRow) {
          contentBottom = Math.min(tempCanvas.height, y + padding);
          break;
        }
      }

      // Fallback if the page is completely blank
      if (contentTop >= contentBottom) {
        contentTop = 0;
        contentBottom = tempCanvas.height;
      }

      const croppedHeight = contentBottom - contentTop;

      // 3. Create a wrapper container for this PDF page (to position textLayer absolute relative to canvas)
      const pageWrapper = document.createElement('div');
      pageWrapper.className = 'pdf-page-wrapper';
      pageWrapper.style.width = `${viewport.width}px`;
      pageWrapper.style.height = `${croppedHeight}px`;

      // 4. Create the final canvas that gets added to the pageWrapper
      const canvas = document.createElement('canvas');
      canvas.className = 'pdf-page-canvas';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.width = viewport.width;
      canvas.height = croppedHeight;
      
      const context = canvas.getContext('2d');
      
      // 5. Draw only the auto-detected inner portion of the canvas
      context.drawImage(
        tempCanvas, 
        0, contentTop, viewport.width, croppedHeight, 
        0, 0, viewport.width, croppedHeight
      );
      pageWrapper.appendChild(canvas);

      // 6. Create the Text Layer container div
      const textLayerDiv = document.createElement('div');
      textLayerDiv.className = 'textLayer';
      textLayerDiv.style.top = `-${contentTop}px`;
      textLayerDiv.style.width = `${viewport.width}px`;
      textLayerDiv.style.height = `${viewport.height}px`;
      textLayerDiv.style.setProperty('--scale-factor', scale);
      pageWrapper.appendChild(textLayerDiv);

      // 7. Render Text Content into the Text Layer container
      try {
        const textContent = await page.getTextContent();
        if (typeof pdfjsLib.renderTextLayer === 'function') {
          await pdfjsLib.renderTextLayer({
            textContentSource: textContent,
            container: textLayerDiv,
            viewport: viewport,
          }).promise;
        } else if (pdfjsLib.TextLayer) {
          const textLayer = new pdfjsLib.TextLayer({
            textContentSource: textContent,
            container: textLayerDiv,
            viewport: viewport,
          });
          await textLayer.render();
        }
      } catch (err) {
        console.warn("Failed to render text layer for page " + pageNum, err);
      }

      container.appendChild(pageWrapper);
    }
  } catch (error) {
    console.error("Error rendering PDF:", error);
    container.innerHTML = `
      <div class="alert alert-danger m-5">
        <h4>Unable to display brochure</h4>
        <p>We encountered an issue rendering the PDF directly on the page.</p>
        <a href="${url}" target="_blank" class="btn btn-success mt-2">View PDF Directly</a>
      </div>
    `;
  }
}

function renderAboutHeliumLeakTesting(product) {
  const parentDesc = document.getElementById("parentDescription");
  const tabsContainer = document.getElementById("modelTabsContainer");
  const producter = document.getElementById("producter");
  const productTable = document.getElementById("productTable");
  const end = document.getElementById("end");

  if (parentDesc) parentDesc.style.display = "none";
  if (tabsContainer) tabsContainer.style.display = "none";

  const sec = product.sections;

  // 1. Render Intro & Behavior in producter
  producter.innerHTML = `
    <div style="width: 100%; display: flex; flex-direction: column; gap: 40px; color: #000810;">
      
      <!-- Section 1: Types of Leaks (Real & Virtual) -->
      <div style="display: flex; gap: 30px; flex-wrap: wrap;">
        <!-- Left: Text content -->
        <div style="flex: 1.2; min-width: 300px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #001f3f; margin-bottom: 20px; border-left: 5px solid #ffc631; padding-left: 15px;">${sec.intro.title}</h2>
          <p style="color: #4d5765; font-size: 16px; line-height: 26px; margin-bottom: 20px; text-align: justify;">
            ${sec.intro.description}
          </p>
          
          <!-- Identifying Vacuum Leaks Card -->
          <div style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <h4 style="font-size: 18px; font-weight: 700; color: #001f3f; margin-bottom: 15px;">${sec.intro.indicatorsTitle}</h4>
            <p style="color: #4d5765; font-size: 14.5px; margin-bottom: 15px; font-style: italic;">${sec.intro.indicatorsDesc}</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
              ${sec.intro.indicators.map(ind => `
                <div style="display: flex; gap: 10px; align-items: flex-start;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc3545" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px;">
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <p style="margin: 0; color: #4d5765; font-size: 14px; font-weight: 500;">${ind}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Real vs Virtual Info Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <!-- Real Leaks -->
            <div style="background: #eef9f5; border: 1px solid #d4edda; border-radius: 8px; padding: 20px;">
              <h4 style="font-size: 17px; font-weight: 700; color: #0da574; margin-bottom: 12px;">${sec.intro.realLeaksTitle}</h4>
              <p style="color: #4d5765; font-size: 14px; margin-bottom: 12px;">${sec.intro.categorizationDesc}</p>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${sec.intro.realLeaks.map(rl => `
                  <div style="font-size: 13.5px; color: #4d5765; line-height: 1.5;">
                    <strong style="color: #001f3f;">• ${rl.name}:</strong> ${rl.desc}
                  </div>
                `).join('')}
              </div>
            </div>
            <!-- Virtual Leaks -->
            <div style="background: #fffdf5; border: 1px solid #ffeeba; border-radius: 8px; padding: 20px;">
              <h4 style="font-size: 17px; font-weight: 700; color: #b58900; margin-bottom: 12px;">${sec.intro.virtualLeaksTitle}</h4>
              <p style="color: #4d5765; font-size: 13.5px; line-height: 1.6; text-align: justify; margin: 0;">
                ${sec.intro.virtualLeaksDesc}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Right: Figure 1 image with zoom -->
        <div style="flex: 0.8; min-width: 300px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 15px;">
          <div class="main-image-container" style="border: 1px solid #dee2e6; background: #fff; padding: 20px; border-radius: 8px; width: 100%; height: auto; max-height: none;">
            <img src="${sec.intro.image}" alt="Figure 1: Gas Sources" style="width: 100%; max-height: 450px; object-fit: contain;" />
          </div>
          <span style="font-size: 13px; font-weight: 600; color: #777; font-style: italic; text-align: center;">Figure 1: Summary of Real & Virtual Gas Sources in Vacuum Chamber</span>
        </div>
      </div>

      <!-- Adapted Method Alert Banner -->
      <div style="background: linear-gradient(135deg, #001f3f 0%, #003366 100%); color: #fff; padding: 30px; border-radius: 8px; border-left: 5px solid #0da574; box-shadow: 0 10px 20px rgba(0,0,0,0.05); margin-top: 10px;">
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #ffc642; text-transform: uppercase;">${sec.adaptedMethod.title}</h3>
        <p style="font-size: 15px; line-height: 1.7; margin: 0; text-align: justify; font-style: italic; opacity: 0.95;">
          ${sec.adaptedMethod.description}
        </p>
      </div>

      <!-- Section 2: Vacuum Behavior & System Impacts -->
      <div style="display: flex; gap: 30px; flex-wrap: wrap; margin-top: 20px;">
        <!-- Left: Graph image -->
        <div style="flex: 0.8; min-width: 300px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 15px;">
          <div class="main-image-container" style="border: 1px solid #dee2e6; background: #fff; padding: 20px; border-radius: 8px; width: 100%; height: auto; max-height: none;">
            <img src="${sec.behavior.image}" alt="Figure 2: Pressure curves" style="width: 100%; max-height: 350px; object-fit: contain;" />
          </div>
          <span style="font-size: 13px; font-weight: 600; color: #777; font-style: italic; text-align: center;">Figure 2: Evacuation Pressure Curves (Leakage vs Outgassing)</span>
        </div>

        <!-- Right: Behavior text & Consequences cards -->
        <div style="flex: 1.2; min-width: 300px;">
          <h2 style="font-size: 24px; font-weight: 700; color: #001f3f; margin-bottom: 15px;">${sec.behavior.title}</h2>
          <p style="color: #4d5765; font-size: 16px; line-height: 26px; margin-bottom: 25px; text-align: justify;">
            ${sec.behavior.description}
          </p>

          <h4 style="font-size: 18px; font-weight: 700; color: #001f3f; margin-bottom: 12px;">${sec.behavior.consequencesTitle}</h4>
          <p style="color: #4d5765; font-size: 14.5px; margin-bottom: 15px;">${sec.behavior.consequencesDesc}</p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
            ${sec.behavior.consequences.map(con => `
              <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; display: flex; gap: 12px; align-items: flex-start; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                <div style="background: #dc3545; color: #fff; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; margin-top: 2px;">!</div>
                <div>
                  <h5 style="font-size: 15px; font-weight: 700; color: #001f3f; margin-bottom: 4px;">${con.name}</h5>
                  <p style="margin: 0; color: #555; font-size: 13.5px; line-height: 1.4;">${con.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

    </div>
  `;

  // 2. Render Tracer Gas Methods Grid in productTable
  productTable.innerHTML = `
    <div style="margin-top: 30px; margin-bottom: 40px; width: 100%;">
      <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 30px; color: #001f3f; border-left: 5px solid #0da574; padding-left: 15px; text-transform: uppercase;">
        ${product.sections.tracerMethods.title}
      </h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(480px, 1fr)); gap: 30px;">
        ${sec.tracerMethods.methods.map(m => `
          <div style="background: #fff; border: 1px solid #dee2e6; border-radius: 8px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.04); display: flex; flex-direction: column;">
            <!-- Header bar -->
            <div style="background: #001f3f; color: #fff; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 16px; font-weight: 700; margin: 0; letter-spacing: 0.5px;">${m.name}</h3>
            </div>
            
            <!-- Diagram & details row -->
            <div style="padding: 20px; display: flex; gap: 20px; flex-wrap: wrap; flex-grow: 1;">
              <!-- Diagram box -->
              <div class="main-image-container" style="flex: 1; min-width: 180px; height: 200px; border: 1px solid #f0f0f0; background: #fafafa; border-radius: 6px; display: flex; justify-content: center; align-items: center; cursor: zoom-in; overflow: hidden; padding: 10px; position: relative; max-width: none; max-height: none;">
                <img src="${m.image}" alt="${m.name} diagram" style="max-width: 100%; max-height: 100%; object-fit: contain; transition: transform 0.1s ease-out;" />
              </div>
              
              <!-- Lists box -->
              <div style="flex: 1.5; min-width: 220px; display: flex; flex-direction: column; gap: 15px;">
                <!-- Advantages -->
                <div>
                  <h5 style="font-size: 14px; font-weight: 700; color: #0da574; margin-bottom: 6px; text-transform: uppercase;">Advantages</h5>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    ${m.advantages.map(adv => `
                      <div style="display: flex; gap: 6px; align-items: flex-start; font-size: 12.5px; color: #555;">
                        <span style="color: #0da574; font-weight: bold; flex-shrink: 0;">✔</span>
                        <span>${adv}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- Disadvantages -->
                <div>
                  <h5 style="font-size: 14px; font-weight: 700; color: #dc3545; margin-bottom: 6px; text-transform: uppercase;">Disadvantages</h5>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    ${m.disadvantages.map(dis => `
                      <div style="display: flex; gap: 6px; align-items: flex-start; font-size: 12.5px; color: #555;">
                        <span style="color: #dc3545; font-weight: bold; flex-shrink: 0;">✘</span>
                        <span>${dis}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>

            <!-- Range pill footer -->
            <div style="background: #fafafa; border-top: 1px solid #eee; padding: 12px 20px; font-size: 13px; color: #555; display: flex; align-items: center; gap: 8px;">
              <span style="background: #ffe699; color: #856404; font-size: 10.5px; font-weight: 700; padding: 3px 8px; border-radius: 20px; text-transform: uppercase; flex-shrink: 0;">Range</span>
              <strong style="font-weight: 600;">${m.range}</strong>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // 3. Render Technical Advantages & Low Vacuum Testing in end
  const propertiesHtml = sec.technicalAdvantages.properties.map(p => `
    <tr style="border-bottom: 1px solid #eee;">
      <td style="font-weight: 600; padding: 8px 12px; color: #001f3f; font-size: 13.5px; border: 1px solid #eee !important; width: 45%;">${p.parameter}</td>
      <td style="padding: 8px 12px; color: #555; font-size: 13.5px; border: 1px solid #eee !important; width: 55%;">${p.value}</td>
    </tr>
  `).join('');

  end.innerHTML = `
    <div style="margin-top: 40px; margin-bottom: 50px; width: 100%; display: flex; gap: 30px; flex-wrap: wrap;">
      
      <!-- Left Card: Trace Gas Technical Advantages & Properties -->
      <div style="flex: 1.1; min-width: 300px; background: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.03);">
        <h3 style="font-size: 20px; font-weight: 700; color: #001f3f; margin-bottom: 8px; border-bottom: 2px solid #001f3f; padding-bottom: 10px;">
          ${sec.technicalAdvantages.title}
        </h3>
        <h5 style="font-size: 14.5px; font-weight: 700; color: #0da574; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 0.5px;">
          ${sec.technicalAdvantages.subtitle}
        </h5>
        
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 25px;">
          ${sec.technicalAdvantages.reasons.map(reason => `
            <div style="display: flex; gap: 10px; align-items: flex-start;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0da574" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p style="margin: 0; color: #4d5765; font-size: 14px; font-weight: 500; text-align: justify;">${reason}</p>
            </div>
          `).join('')}
        </div>

        <h4 style="font-size: 15px; font-weight: 700; color: #001f3f; margin-bottom: 8px;">${sec.technicalAdvantages.propertiesTitle}</h4>
        <p style="color: #777; font-size: 13px; font-style: italic; margin-bottom: 12px;">${sec.technicalAdvantages.propertiesDesc}</p>
        
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #dee2e6;">
          <tbody>
            ${propertiesHtml}
          </tbody>
        </table>
      </div>

      <!-- Right Card: Low Vacuum Testing Advantages -->
      <div style="flex: 0.9; min-width: 300px; background: #fdfdfd; border: 1px solid #dee2e6; border-radius: 8px; padding: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <h3 style="font-size: 20px; font-weight: 700; color: #001f3f; margin-bottom: 15px; border-bottom: 2px solid #ffc631; padding-bottom: 10px;">
            LOW VACUUM ADVANTAGES
          </h3>
          <p style="font-size: 13.5px; color: #777; font-style: italic; margin-bottom: 20px;">
            Making leak tests under a low vacuum provides significant benefits over standard vacuum testing:
          </p>

          <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 25px;">
            ${sec.lowVacuumAdvantages.advantages.map(adv => `
              <div style="display: flex; gap: 10px; align-items: flex-start;">
                <span style="background: #e6f7ff; color: #1890ff; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✓</span>
                <p style="margin: 0; color: #4d5765; font-size: 14px; font-weight: 500; text-align: justify;">${adv}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background: #eefaf6; border: 1px dashed #0da574; border-radius: 6px; padding: 15px;">
          ${sec.lowVacuumAdvantages.extraInfo.map(info => `
            <p style="font-size: 13.5px; color: #2e7d32; line-height: 1.5; margin-bottom: 10px; font-weight: 600; text-align: justify; display: flex; gap: 8px;">
              <span style="color: #0da574;">★</span>
              <span>${info}</span>
            </p>
          `).join('')}
        </div>
      </div>

    </div>
  `;

  // 4. Initialize image interactions
  initializeZoom();
}

function renderHeliumLeakTestSystems(product) {
  const parentDesc = document.getElementById("parentDescription");
  const tabsContainer = document.getElementById("modelTabsContainer");
  const producter = document.getElementById("producter");
  const productTable = document.getElementById("productTable");
  const end = document.getElementById("end");

  if (parentDesc) parentDesc.style.display = "none";
  if (tabsContainer) tabsContainer.style.display = "none";

  // 1. Render Intro, Solutions points & Services description in producter
  producter.innerHTML = `
    <div style="width: 100%; display: flex; flex-direction: column; gap: 40px; color: #000810;">
      
      <!-- Section 1: Overview & Solutions -->
      <div style="display: flex; gap: 30px; flex-wrap: wrap;">
        <!-- Left Column: Intro & Checklist -->
        <div style="flex: 1.2; min-width: 300px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #001f3f; margin-bottom: 20px; border-left: 5px solid #0da574; padding-left: 15px;">${product.title}</h2>
          <p style="color: #4d5765; font-size: 16px; line-height: 26px; margin-bottom: 25px; text-align: justify;">
            ${product.description}
          </p>

          <div style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 25px;">
            <h4 style="font-size: 18px; font-weight: 700; color: #001f3f; margin-bottom: 15px;">${product.oneStopPointsTitle}</h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${product.oneStopPoints.map(pt => `
                <div style="display: flex; gap: 10px; align-items: flex-start;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0da574" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px;">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p style="margin: 0; color: #4d5765; font-size: 14.5px; font-weight: 500;">${pt}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right Column: Welcome Hero Box -->
        <div style="flex: 0.8; min-width: 300px; display: flex; flex-direction: column; justify-content: stretch;">
          <div style="background: linear-gradient(135deg, #001f3f 0%, #003366 100%); color: #fff; padding: 30px; border-radius: 8px; display: flex; flex-direction: column; justify-content: center; height: 100%; box-shadow: 0 10px 20px rgba(0,0,0,0.05);">
            <h3 style="font-size: 22px; font-weight: 700; color: #ffc642; margin-bottom: 15px;">CUSTOM BUILT VACUUM SYSTEMS</h3>
            <p style="font-size: 14.5px; line-height: 1.6; margin-bottom: 20px; opacity: 0.95; text-align: justify;">
              Unique Vacuum Solutions has designed, fabricated, and installed vacuum test chambers and systems tailored to extreme industrial environments since 2001. We deliver state-of-the-art mass spectrometer leak testing equipment that guarantees system integrity.
            </p>
            <div style="display: flex; align-items: center; gap: 10px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
              <span style="background: #0da574; color: white; padding: 5px 12px; font-size: 11px; font-weight: 700; border-radius: 3px;">ESTABLISHED 2001</span>
              <span style="font-size: 12.5px; color: #ffc642; font-weight: 600;">ISO COMPLIANT STATIONS</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Services Detail & Specializations Grid -->
      <div style="display: flex; gap: 30px; flex-wrap: wrap; margin-top: 10px;">
        <!-- Left column: more about leak testing services -->
        <div style="flex: 1.1; min-width: 300px;">
          <h3 style="font-size: 22px; font-weight: 700; color: #001f3f; margin-bottom: 15px; border-bottom: 2px solid #eee; padding-bottom: 8px;">
            ${product.aboutServicesTitle}
          </h3>
          <p style="color: #4d5765; font-size: 15px; line-height: 25px; text-align: justify; margin: 0;">
            ${product.aboutServicesDesc}
          </p>
        </div>

        <!-- Right column: Specializations checkmarks card -->
        <div style="flex: 0.9; min-width: 300px; background: #eefaf6; border: 1px solid #d4edda; border-radius: 8px; padding: 25px; display: flex; flex-direction: column; justify-content: center;">
          <h4 style="font-size: 17px; font-weight: 700; color: #0da574; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 0.5px;">
            ${product.specializationsTitle}
          </h4>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${product.specializations.map(spec => `
              <div style="display: flex; gap: 10px; align-items: flex-start;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0da574" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p style="margin: 0; color: #1b5e20; font-size: 14.5px; font-weight: 600;">${spec}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

    </div>
  `;

  // 2. Render Custom Testing Stations Grid in productTable
  const stationsHtml = product.stations.map(st => {
    let imageSectionHtml = '';
    
    if (st.images && st.images.length > 0) {
      const mainImg = st.images[0];
      const thumbnailStripHtml = st.images.length > 1
        ? `
          <div style="display: flex; gap: 6px; margin-top: 10px; justify-content: flex-start; overflow-x: auto; padding-bottom: 5px;">
            ${st.images.map((img, idx) => `
              <img
                class="station-thumbnail ${idx === 0 ? 'active' : ''}"
                src="${img}"
                alt="Thumbnail"
                style="width: 45px; height: 45px; object-fit: cover; cursor: pointer; border: 1.5px solid ${idx === 0 ? '#0da574' : '#dee2e6'}; border-radius: 3px; transition: border-color 0.2s;"
                onclick="updateStationImage(this, '${st.num}')"
              />
            `).join('')}
          </div>
        `
        : '';

      imageSectionHtml = `
        <div style="width: 100%; display: flex; flex-direction: column; align-items: stretch; margin-bottom: 15px;">
          <div class="main-image-container" style="width: 100%; height: 260px; border: 1px solid #dee2e6; background: #fafafa; border-radius: 6px; display: flex; justify-content: center; align-items: center; cursor: zoom-in; overflow: hidden; padding: 10px; position: relative; max-width: none; max-height: none; transition: transform 0.3s ease, box-shadow 0.3s ease;">
            <img class="station-main-img" src="${mainImg}" alt="${st.title}" style="max-width: 100%; max-height: 100%; object-fit: contain; transition: transform 0.1s ease-out;" />
          </div>
          ${thumbnailStripHtml}
        </div>
      `;
    } else {
      imageSectionHtml = `
        <div style="width: 100%; height: 260px; border: 1px dashed #ccc; background: #fafafa; border-radius: 6px; display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 15px; color: #999;">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 10px; opacity: 0.7;">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span style="font-size: 13.5px; font-weight: 500; font-style: italic;">Image Not Available</span>
        </div>
      `;
    }

    return `
      <div id="station-card-${st.num}" style="background: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <!-- Title with index number -->
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 15px;">
            <span style="background: #001f3f; color: #fff; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0;">${st.num}</span>
            <h3 style="font-size: 15.5px; font-weight: 700; color: #001f3f; margin: 0; line-height: 1.4;">${st.title}</h3>
          </div>
          
          <!-- Image block -->
          ${imageSectionHtml}
        </div>
        
        <!-- Description -->
        <p style="color: #555; font-size: 13.5px; line-height: 1.6; margin: 0; text-align: justify;">
          ${st.desc}
        </p>
      </div>
    `;
  }).join('');

  productTable.innerHTML = `
    <div style="margin-top: 30px; margin-bottom: 40px; width: 100%;">
      <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 30px; color: #001f3f; border-left: 5px solid #0da574; padding-left: 15px; text-transform: uppercase;">
        ${product.stationsTitle}
      </h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 30px;">
        ${stationsHtml}
      </div>
    </div>
  `;

  // 3. Render Mission Statement in end
  end.innerHTML = `
    <div style="margin-top: 40px; margin-bottom: 50px; width: 100%;">
      <div style="background: linear-gradient(135deg, #001f3f 0%, #0da574 100%); color: #fff; padding: 40px; border-radius: 8px; border-left: 5px solid #ffc631; box-shadow: 0 10px 25px rgba(0,0,0,0.06); text-align: center;">
        <h3 style="font-size: 22px; font-weight: 700; color: #ffc642; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px;">
          ${product.missionTitle}
        </h3>
        <p style="font-size: 16px; line-height: 1.8; margin: 0 auto; max-width: 800px; text-align: justify; font-style: italic; text-align-last: center; opacity: 0.95;">
          "${product.missionDesc}"
        </p>
      </div>
    </div>
  `;

  // Define dynamic image swapper global handler
  window.updateStationImage = function(thumbElement, stationNum) {
    const card = document.getElementById(`station-card-${stationNum}`);
    if (card) {
      const mainImg = card.querySelector(".station-main-img");
      if (mainImg) {
        mainImg.src = thumbElement.src;
      }
      const thumbs = card.querySelectorAll(".station-thumbnail");
      thumbs.forEach(t => {
        t.style.borderColor = "#dee2e6";
        t.classList.remove("active");
      });
      thumbElement.style.borderColor = "#0da574";
      thumbElement.classList.add("active");
    }
  };

  // 4. Initialize image interactions
  initializeZoom();
}

function renderVacuumComponents(product) {
  const parentDesc = document.getElementById("parentDescription");
  const tabsContainer = document.getElementById("modelTabsContainer");
  const producter = document.getElementById("producter");
  const productTable = document.getElementById("productTable");
  const end = document.getElementById("end");

  if (parentDesc) {
    parentDesc.innerHTML = product.description;
    parentDesc.style.display = "block";
  }
  
  if (tabsContainer) {
    tabsContainer.style.display = "flex";
    tabsContainer.innerHTML = product.categories.map((cat, idx) => `
      <button 
        class="category-tab ${idx === 0 ? 'active' : ''}" 
        id="cat-tab-${cat.id}"
        style="padding: 10px 22px; font-size: 14.5px; font-weight: 600; border-radius: 25px; border: 1.5px solid ${idx === 0 ? '#001f3f' : '#dee2e6'}; background: ${idx === 0 ? '#001f3f' : '#fff'}; color: ${idx === 0 ? '#fff' : '#001f3f'}; cursor: pointer; transition: all 0.2s;"
        onclick="switchCategory('${cat.id}')"
      >
        ${cat.name}
      </button>
    `).join('');
  }

  // Clear Table and End views
  if (productTable) productTable.innerHTML = '';
  if (end) end.innerHTML = '';

  // Render components list
  window.switchCategory = function(catId) {
    // 1. Update active tab styling
    const tabs = document.querySelectorAll(".category-tab");
    tabs.forEach(tab => {
      tab.style.background = "#fff";
      tab.style.color = "#001f3f";
      tab.style.borderColor = "#dee2e6";
    });
    const activeTab = document.getElementById(`cat-tab-${catId}`);
    if (activeTab) {
      activeTab.style.background = "#001f3f";
      activeTab.style.color = "#fff";
      activeTab.style.borderColor = "#001f3f";
    }

    // 2. Filter components
    const category = product.categories.find(cat => cat.id === catId);
    if (!category) return;

    producter.innerHTML = `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 35px; color: #000810; margin-top: 15px;">
        <h2 style="font-size: 24px; font-weight: 700; color: #001f3f; border-left: 5px solid #0da574; padding-left: 15px; text-transform: uppercase; margin-bottom: 20px;">
          ${category.name}
        </h2>
        
        <div style="display: grid; grid-template-columns: 1fr; gap: 30px;">
          ${category.components.map(comp => {
            const tableHeadersHtml = comp.headers.map(h => `
              <th style="background: #f8f9fa; color: #001f3f; font-weight: 700; padding: 8px 12px; font-size: 12.5px; border: 1px solid #dee2e6 !important; text-align: center;">${h}</th>
            `).join('');

            const tableRowsHtml = comp.rows.map(row => `
              <tr style="border-bottom: 1px solid #eee;">
                ${row.map(cell => `
                  <td style="padding: 8px 12px; color: #555; font-size: 13px; border: 1px solid #dee2e6 !important; text-align: center;">${cell}</td>
                `).join('')}
              </tr>
            `).join('');

            return `
              <div style="background: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.02); display: flex; gap: 30px; flex-wrap: wrap;">
                
                <!-- Left side: Images (Line drawing & photo) -->
                <div style="flex: 1; min-width: 320px; display: flex; flex-direction: column; justify-content: flex-start; gap: 10px;">
                  <h3 style="font-size: 16px; font-weight: 700; color: #001f3f; margin-bottom: 15px;">${comp.title}</h3>
                  <div style="display: flex; gap: 15px;">
                    <div class="main-image-container" style="flex: 1; height: 180px; border: 1px solid #dee2e6; border-radius: 6px; display: flex; justify-content: center; align-items: center; cursor: zoom-in; overflow: hidden; padding: 10px; background: #fafafa; position: relative;">
                      <img src="${comp.drawing}" alt="${comp.title} technical drawing" style="max-width: 100%; max-height: 100%; object-fit: contain; transition: transform 0.1s ease-out;" />
                    </div>
                    <div class="main-image-container" style="flex: 1; height: 180px; border: 1px solid #dee2e6; border-radius: 6px; display: flex; justify-content: center; align-items: center; cursor: zoom-in; overflow: hidden; padding: 10px; background: #fafafa; position: relative;">
                      <img src="${comp.photo}" alt="${comp.title} real photo" style="max-width: 100%; max-height: 100%; object-fit: contain; transition: transform 0.1s ease-out;" />
                    </div>
                  </div>
                  <span style="font-size: 11.5px; font-weight: 600; color: #999; font-style: italic; text-align: center;">Left: Technical Drawing | Right: Product Photo (Hover to zoom)</span>
                </div>

                <!-- Right side: Description & Dimensions table -->
                <div style="flex: 1.2; min-width: 320px; display: flex; flex-direction: column; justify-content: space-between; gap: 20px;">
                  <div style="display: flex; flex-direction: column; gap: 12px;">
                    <h4 style="font-size: 14px; font-weight: 700; color: #0da574; margin: 0; text-transform: uppercase;">Description & Specifications</h4>
                    <p style="color: #555; font-size: 14px; line-height: 1.5; margin: 0; text-align: justify;">
                      ${comp.desc}
                    </p>
                  </div>

                  <!-- Dimensions table -->
                  <div style="overflow-x: auto; width: 100%;">
                    <table style="width: 100%; border-collapse: collapse; border: 1px solid #dee2e6;">
                      <thead>
                        <tr>${tableHeadersHtml}</tr>
                      </thead>
                      <tbody>
                        ${tableRowsHtml}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // 3. Re-initialize image interactions
    initializeZoom();
  };

  // Initial category load
  if (product.categories && product.categories.length > 0) {
    window.switchCategory(product.categories[0].id);
  }
}


