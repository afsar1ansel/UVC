// Product data is loaded from productsData.js

// Function to get URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Get the product ID from the URL
const id = getUrlParameter("id");
console.log("Product ID:", id);

// Find the product with the matching ID
const product = products.find((p) => p.id === id);

// Reference to the container where the gallery will be injected
const prod = document.getElementById("producter");
const productTable = document.getElementById("productTable");
const end = document.getElementById("end");

if (product) {
  // Generate dynamic HTML based on the product data
  const html = `
        <div class="image-gallery">
          <div class="thumbnail-container">
            ${product.images
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
          <div class="main-image-container">
            <img
              id="main-image"
              src="${product.images[0]}"
              alt="Main Product Image"
            />
           
          </div>
        </div>
        <div class="product-details">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div class="productCode">${product.code}</div>
            <div class="productCode">${product.name}</div>
             ${
               product.pdf
                 ? `<a href="${product.pdf}" download style="text-decoration: none;">
                      <div class="downloadBtn">
                        <img src="./assests/img/bookLines.svg" alt="" /> Download Brochure
                      </div>
                    </a>`
                 : ""
             }
          </div>
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <div class="detailFeatures">
            <h2>Key Features Overview</h2>
            ${product.features
              .map(
                (feature) => `
              <div style="display: flex; gap: 10px; align-items: center">
               *
                <p>${feature}</p>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `;
  prod.innerHTML = html;

  if (product.specifications) {
    const tableHtml = `
        <div class="product-table">
          <h2>Technical Specifications</h2>
          <div class="tableBox">
            <table>
              ${product.specifications
                .map(
                  (spec) => `
                <tr>
                  <th>${spec.name}</th>
                  <td>${spec.value}</td>
                </tr>
              `,
                )
                .join("")}
            </table>
          </div>
        </div>
      `;
    productTable.innerHTML = tableHtml;
  }

  if (product.end) {
    const endHtml = `
    <div class="end">
    <h2>Calibration: </h2>
    <p>${product.end}</p>
    </div>
    `;
    end.innerHTML = endHtml;
  }

  // Initialize the gallery functionality
  initializeGallery();
} else {
  // Show a message if the product is not found
  prod.innerHTML = "<p>Product not found!</p>";
}

// Add event listeners to thumbnails
function initializeGallery() {
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // Update the main image source
      mainImage.src = thumbnail.dataset.full;

      // Remove "active" class from all thumbnails
      thumbnails.forEach((t) => t.classList.remove("active"));

      // Add "active" class to the clicked thumbnail
      thumbnail.classList.add("active");
    });
  });
}

// table

// main image container inside it
//  <div class="Product_btns">
//    <div class="productBrochure">
//      <img src="../../assests/img/bookLines.svg" alt="Brochure Icon" /> Product
//      Brochure
//    </div>
//    <div class="requestQuote">Request a Quote</div>
//  </div>;
