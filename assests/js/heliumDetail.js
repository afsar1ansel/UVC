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
      itemCodeHeader.innerHTML = `<h1 class="item-code-heading" style="font-size: 1.5rem; background: #ffcc00; padding: 5px 15px; border-radius: 4px; font-weight: bold; margin-bottom: 0; border-left: none;">${product.code}</h1>`;
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
  } else {
    document.getElementById("pdfViewer").innerHTML = "<h2 style='text-align: center; padding: 50px;'>Product not found!</h2>";
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

      // 3. Create the final canvas that gets added to the webpage
      const canvas = document.createElement('canvas');
      canvas.className = 'pdf-page-canvas';
      canvas.style.display = 'block';
      canvas.style.margin = '0 auto'; // Center it
      canvas.width = viewport.width;
      canvas.height = croppedHeight;
      
      const context = canvas.getContext('2d');
      
      // 4. Draw only the auto-detected inner portion of the canvas
      context.drawImage(
        tempCanvas, 
        0, contentTop, viewport.width, croppedHeight, 
        0, 0, viewport.width, croppedHeight
      );

      container.appendChild(canvas);
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
