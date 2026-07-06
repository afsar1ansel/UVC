function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

$(document).ready(function () {
  // Initialize the carousel if the carousel elements are on the page
  if ($(".carouselSection-owl").length > 0) {
    $(".carouselSection-owl").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: false,
      nav: true,
      margin: 10,
      navText: [`←`, `→`],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 2.6,
        },
      },
    });
  }

  const id = getUrlParameter("id");
  if (id === "1" || id === "2" || id === "3") {
    // Hide standard page details
    const structuredContainer = document.getElementById("structuredContainer");
    if (structuredContainer) {
      structuredContainer.style.display = "none";
    }

    // Show PDF view
    const backBtnContainer = document.getElementById("backBtnContainer");
    const pdfViewer = document.getElementById("pdfViewer");
    
    if (backBtnContainer) backBtnContainer.style.display = "flex";
    if (pdfViewer) pdfViewer.style.display = "flex";

    const itemCodeHeader = document.getElementById("item-code-header");
    const downloadContainer = document.getElementById("download-header-container");

    if (id === "1") {
      if (itemCodeHeader) {
        itemCodeHeader.innerHTML = `<h1 class="item-code-heading">HELIUM LEAK TEST SERVICES</h1>`;
      }
      const pdfUrl = "./assests/img/services/heliumleaktestservices/HLT SERVICES.pdf";
      if (downloadContainer) {
        downloadContainer.innerHTML = `
          <a href="${pdfUrl}" download class="btn btn-success d-flex align-items-center gap-2" style="padding: 10px 20px; font-weight: 600;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Brochure
          </a>
        `;
      }
      if (pdfViewer) {
        renderPDF(pdfUrl, pdfViewer);
      }
    } else if (id === "2") {
      if (itemCodeHeader) {
        itemCodeHeader.innerHTML = `<h1 class="item-code-heading">VACUUM GAUGE CALIBRATION SERVICES</h1>`;
      }
      const pdfUrl = "./assests/img/services/vacuumGaugeCalibrationService/vacuumGaugeCalibrationService.pdf";
      if (downloadContainer) {
        downloadContainer.innerHTML = `
          <a href="${pdfUrl}" download class="btn btn-success d-flex align-items-center gap-2" style="padding: 10px 20px; font-weight: 600;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Brochure
          </a>
        `;
      }
      if (pdfViewer) {
        renderPDF(pdfUrl, pdfViewer);
      }
    } else if (id === "3") {
      if (itemCodeHeader) {
        itemCodeHeader.innerHTML = `<h1 class="item-code-heading">LEAK CALIBRATION SERVICES</h1>`;
      }
      if (downloadContainer) {
        downloadContainer.innerHTML = "";
      }
      if (pdfViewer) {
        pdfViewer.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 400px; color: #999; border: 1px dashed #ccc; border-radius: 8px; width: 85vw; margin: auto;">
              <h3>No Brochure Available Yet</h3>
              <p>A detailed PDF brochure is not yet available for Leak Calibration Services.</p>
              <button onclick="window.history.back()" style="margin-top: 20px; background: #0da574; color: white; border: none; padding: 10px 25px; border-radius: 5px; cursor: pointer;">Go Back</button>
          </div>
        `;
      }
    }
  }
});

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
