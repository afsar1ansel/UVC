function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getUrlParameter("id");
  if (!window.heliumLeakDetectors) {
      console.error("heliumLeakDetectors data not found");
      return;
  }
  
  const product = window.heliumLeakDetectors.find((p) => p.id === id);

  if (product) {
    const itemCodeHeader = document.getElementById("item-code-header");
    if (itemCodeHeader) {
      itemCodeHeader.innerHTML = `<h1 class="item-code-heading" style="font-size: 28px; background: #ffcc00; padding: 5px 15px; border-radius: 4px; font-weight: bold; margin-bottom: 0; border-left: none;">${product.code}</h1>`;
    }

    const downloadContainer = document.getElementById("download-header-container");
    if (downloadContainer && product.pdf) {
      downloadContainer.innerHTML = `
        <a href="${product.pdf}" download class="btn btn-success d-flex align-items-center gap-2" style="padding: 10px 20px; font-weight: 600;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Download Brochure
        </a>
      `;
    }

    const pdfViewer = document.getElementById("pdfViewer");
    const structuredContainer = document.getElementById("structuredContainer");

    // Branch logic: Structured specifications view vs PDF brochure view
    if ((product.technicalSpecifications && product.technicalSpecifications.length > 0) || (product.models && product.models.length > 0)) {
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
  const container = document.querySelector(".main-image-container");
  const img = document.getElementById("main-image");

  if (container && img) {
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
  }
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
