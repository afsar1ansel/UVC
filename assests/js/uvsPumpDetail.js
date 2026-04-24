function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const id = getUrlParameter("id");
const product = window.vacuumPumpsAndSystems?.find((item) => item.id === id);
const prod = document.getElementById("producter");
const productTable = document.getElementById("productTable");
const productApplications = document.getElementById("productApplications");
const end = document.getElementById("end");

if (product) {
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
        <img id="main-image" src="${product.images[0]}" alt="Product Image" />
        <div class="Product_btns">
          ${
            product.pdf
              ? `<a href="${product.pdf}" download style="text-decoration:none;"><div class="productBrochure"><img src="./assests/img/bookLines.svg" alt="Brochure Icon" /> Download Brochure</div></a>`
              : ""
          }
        </div>
      </div>
    </div>
    <div class="product-details">
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <div class="productCode">${product.code}</div>
      </div>
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <div class="detailFeatures">
        <h2>Key Features Overview</h2>
        ${product.features
          .map(
            (feature) => `
              <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 5 20 19" fill="none">
                  <path d="M0.597521 0.0109729C0.734073 -0.00365762 0.734073 -0.00365762 0.870624 0.0109729C0.957278 0.140954 0.960586 0.192893 0.967856 0.345493C0.970304 0.389584 0.972753 0.433674 0.975276 0.479101C0.977756 0.526593 0.980236 0.574085 0.982791 0.623015C1.10876 2.61169 1.81369 4.54229 3.01643 6.13627C3.04889 6.18001 3.08135 6.22375 3.11381 6.26749C3.29934 6.51511 3.49622 6.7489 3.70696 6.9757C3.78444 7.05936 3.85924 7.14443 3.93327 7.23112C4.19013 7.52605 4.47208 7.79742 4.77209 8.04799C4.79268 8.06543 4.81327 8.08286 4.83448 8.10082C7.07644 9.99372 9.90303 11.0131 12.8091 11.2472C12.8592 11.2516 12.9093 11.2559 12.9609 11.2605C13.3505 11.2892 13.7403 11.2903 14.1307 11.2911C14.1731 11.2912 14.1731 11.2912 14.2164 11.2914C14.2974 11.2916 14.3785 11.2916 14.4596 11.2914C14.5308 11.2913 14.5308 11.2913 14.6035 11.2913C14.7228 11.2915 14.7228 11.2915 14.8379 11.2472C14.8025 11.2126 14.767 11.178 14.7306 11.1424C14.598 11.0126 14.4659 10.8823 14.334 10.7519C14.2771 10.6958 14.22 10.6398 14.1628 10.5839C13.3532 9.79305 13.3532 9.79305 13.3041 9.1843C13.3165 8.81313 13.4718 8.46758 13.741 8.21228C14.094 7.93071 14.4291 7.89011 14.8769 7.93095C15.3748 8.03367 15.7298 8.5048 16.0744 8.84848C16.1145 8.88833 16.1546 8.92817 16.1947 8.968C16.3248 9.09727 16.4547 9.22673 16.5845 9.3562C16.6296 9.40109 16.6746 9.44597 16.7197 9.49086C16.9311 9.70155 17.1424 9.91233 17.3537 10.1232C17.5965 10.3657 17.8396 10.6078 18.083 10.8496C18.272 11.0374 18.4607 11.2255 18.6491 11.4138C18.7613 11.5259 18.8737 11.6379 18.9864 11.7496C19.0922 11.8546 19.1977 11.9599 19.3029 12.0655C19.3414 12.104 19.38 12.1424 19.4187 12.1806C19.7706 12.5279 19.9902 12.8169 20 13.3198C19.9993 14.0043 19.525 14.3685 19.0709 14.8246C19.0311 14.8647 18.9913 14.9048 18.9516 14.9449C18.8225 15.075 18.6932 15.2049 18.5639 15.3347C18.5191 15.3798 18.4743 15.4248 18.4294 15.4699C18.2429 15.6572 18.0563 15.8445 17.8696 16.0317C17.6035 16.2985 17.3376 16.5656 17.0722 16.8332C16.8847 17.0223 16.6968 17.2109 16.5086 17.3993C16.3966 17.5115 16.2847 17.6238 16.1733 17.7366C16.0685 17.8425 15.9633 17.948 15.8577 18.0531C15.8192 18.0916 15.7809 18.1302 15.7428 18.1689C15.41 18.5075 15.0878 18.7408 14.6013 18.7502C14.2255 18.7506 13.9369 18.6535 13.6606 18.3945C13.4297 18.1166 13.3013 17.7816 13.3081 17.4207C13.3649 16.8189 13.8025 16.4415 14.2088 16.0436C14.2585 15.9944 14.3082 15.9453 14.3578 15.8961C14.4785 15.7767 14.5996 15.6577 14.7208 15.5388C14.6817 15.5351 14.6426 15.5314 14.6023 15.5276C12.7276 15.3489 10.8719 15.1539 9.0637 14.6025C9.00283 14.584 9.00283 14.584 8.94073 14.5652C8.12051 14.3128 7.32138 13.9874 6.56181 13.5874C6.48475 13.547 6.40723 13.5076 6.32963 13.4683C5.41106 12.9985 4.56309 12.4055 3.79672 11.7154C3.77491 11.6958 3.75309 11.6761 3.73062 11.6559C3.34167 11.3047 2.96354 10.9486 2.63649 10.5376C2.57869 10.4657 2.51948 10.3949 2.45879 10.3255C1.54292 9.27363 0.918971 7.99568 0.480477 6.68248C0.470274 6.65234 0.460071 6.62219 0.449559 6.59114C0.331444 6.23728 0.252323 5.87793 0.180552 5.51204C0.172644 5.47178 0.164735 5.43153 0.156587 5.39005C0.0367965 4.75045 -0.00236537 4.1281 0.00010931 3.4784C0.000180426 3.43964 0.000251543 3.40087 0.000324815 3.36094C0.00207032 2.79592 0.0182394 2.24424 0.129345 1.6886C0.14001 1.63308 0.14001 1.63308 0.150891 1.57644C0.397398 0.311158 0.397398 0.311158 0.597521 0.0109729Z" fill="#FFCC65" /></svg>
                <p>${feature}</p>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;

  prod.innerHTML = html;

  const itemCodeHeader = document.getElementById("item-code-header");
  if (itemCodeHeader) {
    itemCodeHeader.innerHTML = `<h1 class="item-code-heading">${product.code}</h1>`;
  }

  function getFieldLabel(field) {
    const labels = {
      model: "Model",
      displacement50Hz: "Displacement (50 Hz)",
      displacementM3hr: "Displacement (m³/hr)",
      ultimatePressureGasBallast: "Ultimate Pressure (w/ gas ballast)",
      ultimatePressureNoGasBallast: "Ultimate Pressure (w/o gas ballast)",
      ultimatePressure: "Ultimate Pressure",
      inletPort: "Inlet Port",
      exhaustPort: "Exhaust Port",
      motorPower: "Motor Power",
      rotationalSpeed: "Rotational Speed",
      oilCapacity: "Oil Capacity",
      coolingWater: "Cooling Water",
      weightPump: "Weight of Pump",
      weightWithMotor: "Weight including Motor",
      diffusionPump: "Diffusion Pump",
      rotaryPumpModel: "Rotary Pump Model",
      speedLitMin: "Speed (Lit/Min.)",
      highVacuumValveSize: "High Vacuum Valve Size",
      roughingBackingValves: "Roughing/Backing Valves",
      ultimateVacuum: "Ultimate Vacuum",
      inletCollarDiameter: "Inlet Collar Diameter",
      powerRequired: "Power Required",
      foreRoughPumpRange: "Fore & Rough Pump Range",
      turboPumpRange: "Turbo Pump Range",
      mounting: "Mounting",
      operation: "Operation",
      rotaryPumpCapacity: "Rotary Pump Capacity",
      rootsBlowerCapacity: "Roots Blower Capacity",
      applications: "Applications",
    };
    return labels[field] || field;
  }

  function renderTable(data, title) {
    if (!data || !data.length) return "";

    const fields = Object.keys(data[0]);
    return `
      <div class="product-table">
        <h2>${title}</h2>
        <div class="tableBox">
          <table>
            <tr>
              ${fields
                .map((field) => `<th>${getFieldLabel(field)}</th>`)
                .join("")}
            </tr>
            ${data
              .map(
                (row) => `
                  <tr>
                    ${fields
                      .map((field) => `<td>${row[field] || "-"}</td>`)
                      .join("")}
                  </tr>
                `,
              )
              .join("")}
          </table>
        </div>
      </div>
    `;
  }

  let tables = "";
  if (product.modelVariants) {
    tables += renderTable(product.modelVariants, "Technical Specifications");
  }
  if (product.dimensions) {
    tables += renderTable(product.dimensions, "Physical Dimensions");
  }

  productTable.innerHTML = tables;

  if (product.applications) {
    productApplications.innerHTML = `
      <h2>Industrial Applications</h2>
      <ul>
        ${product.applications
          .map((application) => `<li>${application}</li>`)
          .join("")}
      </ul>
    `;
  }

  if (product.end) {
    end.innerHTML = `
      <div class="end">
        <h2>Additional Information</h2>
        <p>${product.end}</p>
      </div>
    `;
  }

  initializeGallery();
  initializeZoom();
} else {
  prod.innerHTML = "<p>Product not found.</p>";
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

// Function to handle image zoom (Amazon-style)
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
