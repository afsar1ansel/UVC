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

    const backBtnContainer = document.getElementById("backBtnContainer");
    const dynamicServiceContainer = document.getElementById("dynamicServiceContainer");
    
    if (backBtnContainer) backBtnContainer.style.display = "flex";
    if (dynamicServiceContainer) dynamicServiceContainer.style.display = "block";

    const itemCodeHeader = document.getElementById("item-code-header");
    const downloadContainer = document.getElementById("download-header-container");

    // Find service data
    const service = window.servicesData ? window.servicesData.find(s => s.id === id) : null;
    if (service) {
      document.title = `${service.title} - Calibration & Leak Testing | UVS India`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', `Explore our professional service details for ${service.title}, traceable to NPL India and NIST standards with complete reporting.`);

      if (itemCodeHeader) {
        itemCodeHeader.innerHTML = `<h1 class="item-code-heading">${service.code}</h1>`;
      }
      
      if (downloadContainer) {
        downloadContainer.innerHTML = `
          <a href="${service.downloadPdf}" download class="btn btn-success d-flex align-items-center gap-2" style="padding: 10px 20px; font-weight: 600;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Brochure
          </a>
        `;
      }

      if (dynamicServiceContainer) {
        dynamicServiceContainer.innerHTML = renderServiceDetail(service);
      }
    }
  }
});

function renderServiceDetail(service) {
  let html = '';

  // 1. About / Description Section
  html += `
    <div class="service-about-section">
      <p>${service.description}</p>
      ${service.description2 ? `<p>${service.description2}</p>` : ''}
      ${service.description3 ? `<p>${service.description3}</p>` : ''}
    </div>
  `;

  // 2. Specialized Methods Section (ID 1)
  if (service.methods && service.methods.length > 0) {
    html += `
      <div class="service-section">
        <h2 class="section-title">${service.methodsTitle || 'Specialized Methods'}</h2>
        <div class="methods-grid">
          ${service.methods.map(m => `
            <div class="method-card">
              <h4>${m.name}</h4>
              <p>${m.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 3. Objectives Section (ID 2)
  if (service.objectives && service.objectives.length > 0) {
    html += `
      <div class="service-section">
        <h2 class="section-title">${service.objectivesTitle || 'Calibration Objectives'}</h2>
        <div class="methods-grid">
          ${service.objectives.map(obj => `
            <div class="method-card">
              <p style="font-size: 15px; font-weight: 500; color: #001f3f; margin: 0;">${obj}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 4. Calibration references / ranges (ID 2 & 3)
  if (service.gaugeTypes || service.references || service.offerings) {
    html += `
      <div class="service-list-grid">
    `;

    // Calibration ranges / types
    if (service.gaugeTypes && service.gaugeTypes.length > 0) {
      html += `
        <div class="service-list-box">
          <h3>${service.whyChooseTitle || 'Calibrated Equipment Types'}</h3>
          ${service.whyChooseDesc ? `<p style="font-size:14.5px; color:#4d5765; margin-bottom:15px;">${service.whyChooseDesc}</p>` : ''}
          <ul class="custom-bullet-list">
            ${service.gaugeTypes.map(g => `<li>${g}</li>`).join('')}
          </ul>
          ${service.scheduling ? `<p style="font-size:14px; font-style:italic; color:#4d5765; margin-top:20px; border-top:1px solid #eee; padding-top:15px;">${service.scheduling}</p>` : ''}
        </div>
      `;
    }

    // Job Execution & References
    if (service.references && service.references.length > 0) {
      html += `
        <div class="service-list-box">
          <h3>${service.executionTitle || 'Job Execution'}</h3>
          ${service.executionDesc ? `<p style="font-size:14.5px; color:#4d5765; margin-bottom:15px;">${service.executionDesc}</p>` : ''}
          <h5 style="font-size:15px; font-weight:700; color:#001f3f; margin-bottom:12px;">${service.referencesTitle}</h5>
          <ul class="custom-bullet-list">
            ${service.references.map(r => `<li>${r}</li>`).join('')}
          </ul>
          ${service.features ? `
            <div style="margin-top:20px; border-top:1px solid #eee; padding-top:15px;">
              ${service.features.map(f => `<p style="font-size:14px; color:#4d5765; margin-bottom:10px; font-weight:500;">• ${f}</p>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    // Offerings (ID 3)
    if (service.offerings && service.offerings.length > 0) {
      html += `
        <div class="service-list-box" style="grid-column: 1 / -1;">
          <h3>${service.whyChooseTitle || 'Our Offerings'}</h3>
          <ul class="custom-bullet-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">
            ${service.offerings.map(o => `<li>${o}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    html += `
      </div>
    `;
  }

  // 5. On-Site Procedure (ID 2)
  if (service.procedureSteps && service.procedureSteps.length > 0) {
    html += `
      <div class="service-section">
        <h2 class="section-title">${service.procedureTitle || 'Procedure'}</h2>
        <div class="service-about-section" style="border-left-color: #ffc631; padding: 30px;">
          <p>${service.procedureDesc}</p>
          <ul class="custom-bullet-list procedure-list" style="margin-top: 20px;">
            ${service.procedureSteps.map((step, idx) => `
              <li data-step="${idx + 1}">${step}</li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // 6. On-site areas and additional services lists (ID 1)
  if (service.onSiteAreas || service.additionalServices) {
    html += `
      <div class="service-list-grid">
    `;

    if (service.onSiteAreas && service.onSiteAreas.length > 0) {
      html += `
        <div class="service-list-box">
          <h3>${service.onSiteAreasTitle}</h3>
          <ul class="custom-bullet-list">
            ${service.onSiteAreas.map(area => `<li>${area}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (service.additionalServices && service.additionalServices.length > 0) {
      html += `
        <div class="service-list-box">
          <h3>${service.additionalServicesTitle}</h3>
          <ul class="custom-bullet-list">
            ${service.additionalServices.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    html += `
      </div>
    `;
  }

  // 7. Recent Projects Gallery / Photos Section (ID 1 & ID 2)
  if (service.projects && service.projects.length > 0) {
    html += `
      <div class="service-section">
        <h2 class="section-title">${service.projectsTitle || 'Project Gallery'}</h2>
        <div class="projects-grid">
          ${service.projects.map(proj => `
            <div class="project-card">
              <div class="project-card-content">
                <h4 style="margin-bottom: 15px;">${proj.name}</h4>
                <div class="project-images-gallery ${proj.images.length === 1 ? 'single-img' : ''}">
                  ${proj.images.map(img => `
                    <div class="project-img-wrapper">
                      <img src="${img}" alt="${proj.name}" loading="lazy" />
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 8. Mission Statement / Tagline / Footer Card
  if (service.mission) {
    html += `
      <div class="highlight-card">
        <h3>Our Mission</h3>
        <p style="margin: 0;">${service.mission}</p>
      </div>
    `;
  } else if (service.tagline) {
    html += `
      <div class="highlight-card">
        <h3>Precision & Reliability</h3>
        <p style="margin: 0;">${service.tagline}</p>
      </div>
    `;
  }

  return html;
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
