document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

function renderProducts() {
  const productGrid = document.getElementById("productGrid");
  if (!productGrid || !window.heliumLeakDetectors) return;

  const products = window.heliumLeakDetectors.filter(p => p.id !== 'HLD-HELIUM-LEAK-TEST-SYSTEM');

  productGrid.innerHTML = `
    <div class="gridBox">
      ${products
        .map(
          (product) => `
        <div class="grids" onclick="window.location.href='heliumDetail.html?id=${product.id}'">
          <img src="${product.images && product.images[0] ? product.images[0] : ""}" alt="${product.title}" />
          <h3>${product.title}</h3>
          ${product.seriesId === "PFEIFFER-ADIXEN-ASM" ? `
            <div style="display: flex; justify-content: center; margin-bottom: 8px;">
              <span class="badge" style="background-color: #0da574; color: white; font-size: 11px; padding: 4px 10px; border-radius: 12px; font-weight: 600; text-transform: uppercase;">
                Pfeiffer Adixen Series
              </span>
            </div>
          ` : product.seriesId === "LEYBOLD-PHOENIX" ? `
            <div style="display: flex; justify-content: center; margin-bottom: 8px;">
              <span class="badge" style="background-color: #001f3f; color: white; font-size: 11px; padding: 4px 10px; border-radius: 12px; font-weight: 600; text-transform: uppercase;">
                Leybold Phoenix Series
              </span>
            </div>
          ` : ""}
          <p>${product.description}</p>
          <div style="display: flex; justify-content: center; align-items: center; margin-top: auto;">
            <div class="gridBtn" style="background: #ffc642; padding: 8px 25px; border-radius: 4px; font-weight: 600; font-size: 14px; cursor: pointer;">View Details</div>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}
