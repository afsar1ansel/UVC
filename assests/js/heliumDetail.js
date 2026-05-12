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
      itemCodeHeader.innerHTML = `<h1 class="item-code-heading" style="font-size: 1.5rem; background: #ffcc00; padding: 5px 15px; border-radius: 4px; font-weight: bold; margin-bottom: 0;">${product.code}</h1>`;
    }

    const pdfViewer = document.getElementById("pdfViewer");
    if (product.pdf) {
      pdfViewer.innerHTML = `<iframe src="${product.pdf}#toolbar=1&view=FitH" class="pdf-frame"></iframe>`;
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
