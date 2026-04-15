document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

function renderProducts() {
  const productGrid = document.getElementById("productGrid");
  if (!productGrid || !window.vacuumPumpsAndSystems) return;

  const products = window.vacuumPumpsAndSystems;

  productGrid.innerHTML = `
    <div class="gridBox">
      ${products
        .map(
          (product) => `
        <div class="grids" onclick="window.location.href='uvsPumpDetail.html?id=${product.id}'">
          <img src="${product.images && product.images[0] ? product.images[0] : ""}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <div class="product-code">${product.code}</div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}
