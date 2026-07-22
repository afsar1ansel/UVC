var pathPrefix = window.location.pathname.includes('/filters/') ? '../' : '';
const nav = document.getElementById("navBarBox");

nav.innerHTML = `
<a href="index.html" class="logoBoxA">
  <div class="logo">
     <img src="./assests/img/common/uvclogo.webp" alt="" width="818" height="281" />
  </div>
</a>
<div class="navButtons">
  <div><a href="about.html" id="about">ABOUT</a></div>

  <div class="dropdown">
    <a href="product.html" class="dropdown-toggle" id="product">PRODUCTS</a>
    <ul class="dropdown-menu">
      <li class="dropdown">
        <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=DPRG">Vacuum Measurement</a>
        <ul class="dropdown-menu">
          <li class="dropdown">
            <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=DPRG">DPRG SERIES </a>
            <ul class="dropdown-menu" style="width: 200px;" >
            <p class="headDiv"> Decimal Display ───────</p>
              <li><a class="dropdown-item deci" href="dprgDetail.html?id=1ba">DPRG - 1GH</a></li> 
              <li><a class="dropdown-item deci" href="dprgDetail.html?id=1bb">DPRG - 2GH</a></li>
              <li><a class="dropdown-item deci" href="dprgDetail.html?id=1bc">DPRG - 1GH-SP</a></li>
              <li><a class="dropdown-item deci" href="dprgDetail.html?id=1bd">DPRG - 1GH-2SP</a></li>
              <li><a class="dropdown-item deci" href="dprgDetail.html?id=4ba">DPRG - 2GH-SP</a></li>
              <p class="headDiv"> Exponential Display ─────</p>
              <li><a class="dropdown-item expo" href="dprgDetail.html?id=DPRG-1GH">DPRG - 1GH</a></li>
              <li><a class="dropdown-item expo" href="dprgDetail.html?id=DPRG-1GH-SP">DPRG - 1GH-SP</a></li>
              <li><a class="dropdown-item expo" href="dprgDetail.html?id=DPRG-2GH-SP">DPRG - 2GH-SP</a></li>
              <li><a class="dropdown-item expo" href="dprgDetail.html?id=DPRG-2GH">DPRG - 2GH</a></li>  
            </ul>
          </li>
          <li class="dropdown">
            <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=FLEXA">FLEXA SERIES</a>
            <ul class="dropdown-menu" style="width: 200px;" >
            <li><a class="dropdown-item" href="dprgDetail.html?id=FG-05A">FG-05A Sensor</a></li>
              <li><a class="dropdown-item " href="dprgDetail.html?id=FG-04">FG-04 Sensor</a></li>

            <p class="headDiv"> Decimal Display ───────</p>
              <li><a class="dropdown-item deci" href="dprgDetail.html?id=FGD-1GH">FGD-1GH </a></li>
              <li><a class="dropdown-item deci" href="dprgDetail.html?id=FGD-1GH-SP">FGD-1GH-SP </a></li>
              <li><a class="dropdown-item deci" href="dprgDetail.html?id=FGD-1GH-2SP">FGD-1GH-2SP </a></li>
              <li><a class="dropdown-item deci" href="dprgDetail.html?id=FGD-2GH">FGD-2GH </a></li>
              <li><a class="dropdown-item deci" href="dprgDetail.html?id=FGD-2GH-SP">FGD-2GH-SP </a></li>
              <p class="headDiv"> Exponential Display ─────</p>
              <li><a class="dropdown-item expo" href="dprgDetail.html?id=FGE-1GH">FGE-1GH </a></li>
              <li><a class="dropdown-item expo" href="dprgDetail.html?id=FGE-2GH">FGE-2GH </a></li>
              <li><a class="dropdown-item expo" href="dprgDetail.html?id=FGE-1GH-SP">FGE-1GH-SP </a></li>
              <li><a class="dropdown-item expo" href="dprgDetail.html?id=FGE-2GH-SP">FGE-2GH-SP </a></li> 
            </ul>
          </li>
         <li class="dropdown">
  <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=HYBRID">HYBRID SERIES</a>
  <ul class="dropdown-menu" style="width: 200px;">
  <p class="headDiv"> Decimal Display ───────</p>
    <li><a class="dropdown-item deci" href="dprgDetail.html?id=HPRGD-1GH-SP">HPRGD-1GH-SP </a></li>
    <p class="headDiv"> Exponential Display ─────</p>
    <li><a class="dropdown-item expo" href="dprgDetail.html?id=HPRGE-1GH-SP">HPRGE-1GH-SP </a></li>
    <li><a class="dropdown-item expo" href="dprgDetail.html?id=HPRGE-2GH">HPRGE-2GH </a></li>
  </ul>
</li>

          <li class="dropdown">
  <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=ONEPIRANI">OnePirani SERIES</a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="dprgDetail.html?id=HVP-4">HVP-4 </a></li>
    <li><a class="dropdown-item" href="dprgDetail.html?id=HVP-5">HVP-5 </a></li>
    <li><a class="dropdown-item" href="dprgDetail.html?id=HVP-7AT">HVP-7AT </a></li>
    <li><a class="dropdown-item" href="dprgDetail.html?id=DVG-1S">DVG-1S </a></li>
  </ul>
</li>

          <li class="dropdown">
            <a
              class="dropdown-item dropdown-toggle"
              href="seriesDetail.html?series=MCLEOD"
              >McLeod SERIES </a
            >
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="dprgDetail.html?id=mcleod-gauge"
                  >UVG-1 / UVG-2</a
                >
              </li>
            </ul>
          </li>


          <li class="dropdown">
            <a
              class="dropdown-item dropdown-toggle"
              href="seriesDetail.html?series=UVG_DISPLAY"
              >UVG Display Controllers></a
            >
            <ul class="dropdown-menu" style="width: 250px">
              <li>
                <a class="dropdown-item" href="dprgDetail.html?id=uvge-2gh-sp"
                  >UVGE - 2GH - SP</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="dprgDetail.html?id=uvgs-1gh-sp"
                  >UVGS - 1GH - SP</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="dropdown">
        <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=VACUUM_PUMPS">Vacuum Pumps & Systems</a>
        <ul class="dropdown-menu" style="background-color: rgb(221, 212, 230);">
          <li class="dropdown">
            <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=VACUUM_PUMPS">Vacuum Pumps</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-IVP-SERIES">IVP-Series Oil Sealed Belt Drive Rotary Vane Vacuum Pump</a></li>
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-IVPVP-SERIES">IVPVP-Series Two Stage Rotary Piston Vacuum Pump</a></li>
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-IVRVP-M-SERIES">IVRVP-M Series Roots - Air Cooled Vacuum Pumps</a></li>
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-IVRVP-SERIES">IVRVP Series Roots - Water Cooled Vacuum Pumps</a></li>
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-IVRDP-SERIES">IVRDP Series Two Stage Rotary Vane Vacuum Pump</a></li>
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-IVSVP-SERIES">IVSVP Series Single Stage Vacuum Pumps</a></li>
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-E-SERIES">IVPVP-Series Alternate Brochure</a></li>
            </ul>
           </li>
          <li class="dropdown">
            <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=VACUUM_SYSTEMS">Vacuum Pumping Systems</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-ROTARY-ROOTS">Rotary Roots Pumping Systems</a></li>
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-TURBO-PUMPING">Turbo Pumping Systems</a></li>
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-DIFFUSION-PUMPING">Diffusion Pumping Systems</a></li>
              <li><a class="dropdown-item" href="uvsPumpDetail.html?id=UVS-CENTRALIZED-VACUUM-SYSTEM">Centralized Vacuum Systems</a></li>
            </ul>
           </li>
        </ul>
      </li>
      <li class="dropdown">
        <a class="dropdown-item dropdown-toggle" href="heliumLeakDetectors.html">Helium Leak Detectors</a>
        <ul class="dropdown-menu">
          <li class="dropdown">
            <a class="dropdown-item dropdown-toggle" href="heliumDetail.html?id=HLD-ASM-310">PFEIFFER ADIXEN ASM </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="heliumDetail.html?id=HLD-ASM-310">ASM 310</a></li>
              <li><a class="dropdown-item" href="heliumDetail.html?id=HLD-ASM-340">ASM 340</a></li>
              <li><a class="dropdown-item" href="heliumDetail.html?id=HLD-ASM-390-392">ASM 390 / 392</a></li>
              <li><a class="dropdown-item" href="heliumDetail.html?id=HLD-ASM-306S">ASM 306 S</a></li>
            </ul>
          </li>
          <li><a class="dropdown-item" href="heliumDetail.html?id=HLD-LEYBOLD-PHOENIX-QUADRO">LEYBOLD PHOENIX SERIES</a></li>
          <li><a class="dropdown-item" href="heliumDetail.html?id=HLD-CALIBRATED-LEAKS">CALIBRATED LEAKS</a></li>
          <li><a class="dropdown-item" href="heliumDetail.html?id=HLD-ABOUT-HELIUM-LEAK-DETECTORS">About Helium Leak Detectors</a></li>
        </ul>
      </li>
      <li><a class="dropdown-item" href="heliumDetail.html?id=HLD-HELIUM-LEAK-TEST-SYSTEM">Helium Leak Test Systems</a></li>
      <li class="dropdown">
        <a class="dropdown-item dropdown-toggle" href="vacuumComponentsAndSupplies.html">Filters & Vacuum Components </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="heliumDetail.html?id=VACUUM-COMPONENTS">Vacuum Components</a></li>
          <li class="dropdown">
            <a class="dropdown-item dropdown-toggle" href="filters.html">Filters</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="filters/particulateFilters.html">Particulate Filters</a></li>
              <li><a class="dropdown-item" href="filters/liquidMistSeparators.html">Liquid & Mist Separators</a></li>
              <li><a class="dropdown-item" href="filters/vaporRemoval.html">Vapor removal</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="dropdown">
    <a href="services.html" class="dropdown-toggle" id="services">SERVICES</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="serviceDetail.html?id=1">Helium Leak Test Services</a></li>
      <li><a class="dropdown-item" href="serviceDetail.html?id=2">Vacuum Gauge Calibration Services</a></li>
      <li><a class="dropdown-item" href="serviceDetail.html?id=3">Leak Calibration Services</a></li>
    </ul>
  </div>
  <div><a href="index.html#solutions" id="industries">INDUSTRIES SERVED</a></div>

  <div><a href="download.html" id="blog">DOWNLOAD</a></div>
  <div><a href="contact.html" id="contactUs">CONTACT US</a></div>

  <div class="search-container">
    <input type="text" id="searchInput" placeholder="Search..." />
    <div id="searchSuggestions" class="search-suggestions"></div>
  </div>

  <div id="getQuote">
    GET A QUOTE
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        d="M1.98771 1.50635C1.98771 1.24113 2.09307 0.986777 2.28061 0.799241C2.46814 0.611705 2.7225 0.506348 2.98771 0.506348H10.9877C11.2529 0.506348 11.5073 0.611705 11.6948 0.799241C11.8824 0.986777 11.9877 1.24113 11.9877 1.50635V9.50635C11.9877 9.77156 11.8824 10.0259 11.6948 10.2135C11.5073 10.401 11.2529 10.5063 10.9877 10.5063C10.7225 10.5063 10.4681 10.401 10.2806 10.2135C10.0931 10.0259 9.98771 9.77156 9.98771 9.50635V3.92035L1.69471 12.2133C1.50611 12.3955 1.25351 12.4963 0.991311 12.494C0.729114 12.4917 0.478302 12.3866 0.292894 12.2012C0.107485 12.0158 0.00231622 11.7649 3.78025e-05 11.5027C-0.00224062 11.2406 0.0985542 10.9879 0.280712 10.7993L8.57371 2.50635H2.98771C2.7225 2.50635 2.46814 2.40099 2.28061 2.21345C2.09307 2.02592 1.98771 1.77156 1.98771 1.50635Z"
        fill="black"
      />
    </svg>
  </div>
</div>
`;

// Enquiry Modal Implementation
const modalHTML = `
<div id="enquiryModal" class="modal-overlay">
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <h2>For Enquiry</h2>
    <form action="https://forms.zohopublic.com/nagendrautpathunique1/form/test/formperma/SteUfj-mKUH9-yO8901F-L0tZY9Yx8wA0dg9YJ0mPxc/htmlRecords/submit" 
          name="form" id="enquiryForm" method="POST" accept-charset="UTF-8" enctype="multipart/form-data">
      
      <!-- Zoho CRM Hidden Integration Inputs -->
      <input type="hidden" name="zf_referrer_name" value="">
      <input type="hidden" name="zf_redirect_url" id="zf_redirect_url" value="">
      <input type="hidden" name="zc_gad" value="">
      <input type="hidden" name="SingleLine" id="enquiryProduct" value="">

      <div class="form-group">
        <label for="enquiryName">Name</label>
        <input type="text" id="enquiryName" name="SingleLine2" required placeholder="Your Name">
      </div>
      <div class="form-group">
        <label for="enquiryEmail">Email</label>
        <input type="email" id="enquiryEmail" name="Email" required placeholder="Your Email">
      </div>
      <div class="form-group">
        <label for="enquiryPhone">Phone</label>
        <input type="text" id="enquiryPhone" name="PhoneNumber_countrycode" required placeholder="Your Phone Number">
      </div>
      <div class="form-group">
        <label for="enquiryCompany">Company</label>
        <input type="text" id="enquiryCompany" name="SingleLine1" placeholder="Company Name">
      </div>
      <button type="submit" class="submit-btn">Submit</button>
    </form>
  </div>
</div>
`;

const modalStyles = `
<style>
  .modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    position: relative;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  .close-modal {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
    color: #666;
  }
  .modal-content h2 {
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
    font-weight: 500;
  }
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  .submit-btn {
    width: 100%;
    padding: 12px;
    background-color: #ffc631;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .submit-btn:hover {
    background-color: #e6b22c;
  }
</style>
`;

document.body.insertAdjacentHTML("beforeend", modalHTML);
document.head.insertAdjacentHTML("beforeend", modalStyles);

// Modal Logic
window.openEnquiryModal = function (productCode) {
  const productInput = document.getElementById("enquiryProduct");
  if (productInput) {
    productInput.value = productCode || "General Inquiry";
  }

  const redirectInput = document.getElementById("zf_redirect_url");
  if (redirectInput) {
    redirectInput.value = window.location.href.split("?")[0] + "?enquiry=success";
  }

  document.getElementById("enquiryModal").style.display = "flex";
};

document.querySelector(".close-modal").addEventListener("click", function () {
  document.getElementById("enquiryModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("enquiryModal")) {
    document.getElementById("enquiryModal").style.display = "none";
  }
});

// Check for redirect success status
if (window.location.search.includes("enquiry=success")) {
  alert("Thank you! Your enquiry has been submitted successfully. We will get back to you soon.");
  const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
  window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
}

// Zoho Form Submit Inspector
const formElement = document.getElementById("enquiryForm");
if (formElement) {
  formElement.addEventListener("submit", function (e) {
    const formData = new FormData(this);
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    console.log("----- [UVS Form Tracker] Submitting Enquiry Modal Form to Zoho -----");
    console.log("Action URL:", this.action);
    console.log("Payload:", payload);
    console.log("------------------------------------------------------------------");
  });
}

// Attach to Get Quote button
const getQuoteBtn = document.getElementById("getQuote");
if (getQuoteBtn) {
  getQuoteBtn.addEventListener("click", function () {
    openEnquiryModal();
  });
  getQuoteBtn.style.cursor = "pointer";
}

// Search Logic & Dynamic Script Indexing
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");

if (searchInput && searchSuggestions) {
  let isDataLoaded = false;
  let loadingPromise = null;

  // Helper function to load script dynamically
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.head.appendChild(script);
    });
  }

  // Load all search data sources
  function loadAllSearchData() {
    if (loadingPromise) return loadingPromise;
    loadingPromise = Promise.all([
      loadScript(pathPrefix + "assests/js/productsData.js"),
      loadScript(pathPrefix + "assests/js/heliumLeakDetectorsData.js"),
      loadScript(pathPrefix + "assests/js/vacuumPumpsAndSystemsData.js"),
      loadScript(pathPrefix + "assests/js/suppliesData.js"),
      loadScript(pathPrefix + "assests/js/servicesData.js")
    ]).then(() => {
      isDataLoaded = true;
    });
    return loadingPromise;
  }

  // Deep recursive object string match
  function objectContainsQuery(obj, query) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (['images', 'image', 'id', 'downloadPdf', 'pdf', 'url'].includes(key)) continue;
        const val = obj[key];
        if (typeof val === 'string' && val.toLowerCase().includes(query)) {
          return true;
        }
        if (Array.isArray(val)) {
          for (let item of val) {
            if (typeof item === 'string' && item.toLowerCase().includes(query)) {
              return true;
            }
            if (typeof item === 'object' && item !== null && objectContainsQuery(item, query)) {
              return true;
            }
          }
        }
        if (typeof val === 'object' && val !== null && objectContainsQuery(val, query)) {
          return true;
        }
      }
    }
    return false;
  }

  // Static pages catalog
  const staticPages = [
    {
      title: "Home / Welcome",
      description: "Unique Vacuum Solutions - expert vacuum chamber engineering, helium leak test systems, and calibration services.",
      url: "index.html"
    },
    {
      title: "About Unique Vacuum Solutions",
      description: "Our legacy of precision vacuum engineering, industrial expertise, and NPL/NIST calibration commitment since 2001.",
      url: "about.html"
    },
    {
      title: "Contact Us & Request Quote",
      description: "Get in touch with UVS. Request a quote or get technical support for your vacuum systems.",
      url: "contact.html"
    },
    {
      title: "Product Catalog",
      description: "Browse our complete range of vacuum products, gauges, pumps, leak detectors, custom systems, and supplies.",
      url: "product.html"
    },
    {
      title: "Services & Support",
      description: "Overview of our Helium Leak Test Services, Vacuum Gauge Calibration, and Leak Standard Calibration services.",
      url: "services.html"
    },
    {
      title: "Filters & Vacuum Components ",
      description: "Explore our range of vacuum fittings, flanges, clamps, quick-couplings, flexible bellows, and traps.",
      url: "vacuumComponentsAndSupplies.html"
    },
    {
      title: "Helium Leak Detectors & Custom Stations",
      description: "Explore calibration leaks, component specs, and custom leak test systems.",
      url: "heliumLeakDetectors.html"
    }
  ];

  // Perform search & suggestion rendering
  async function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    searchSuggestions.innerHTML = "";

    if (query.length === 0) {
      searchSuggestions.style.display = "none";
      return;
    }

    // Ensure all data files are loaded
    if (!isDataLoaded) {
      searchSuggestions.style.display = "block";
      searchSuggestions.innerHTML = `<div style="padding: 12px 16px; color: #9ca3af; font-size: 13px; text-align: center;">Searching database...</div>`;
      await loadAllSearchData();
      // If query changed during loading, perform search again
      if (searchInput.value.toLowerCase().trim() !== query) return;
      searchSuggestions.innerHTML = "";
    }

    const matchedPages = [];
    const matchedProducts = [];
    const matchedServices = [];

    // 1. Search Static Pages
    staticPages.forEach(page => {
      if (page.title.toLowerCase().includes(query) || page.description.toLowerCase().includes(query)) {
        matchedPages.push({
          title: page.title,
          desc: page.description,
          url: pathPrefix + page.url
        });
      }
    });

    // 2. Search Products
    // Products from productsData.js
    const activeProducts = (typeof products !== "undefined") ? products : (window.products || []);
    activeProducts.forEach(p => {
      if (objectContainsQuery(p, query)) {
        matchedProducts.push({
          title: p.code || p.name,
          desc: p.title || p.description,
          url: `${pathPrefix}dprgDetail.html?id=${p.id}`
        });
      }
    });

    // Products from vacuumPumpsAndSystemsData.js
    const activePumps = (typeof vacuumPumpsAndSystems !== "undefined") ? vacuumPumpsAndSystems : (window.vacuumPumpsAndSystems || []);
    activePumps.forEach(p => {
      if (objectContainsQuery(p, query)) {
        matchedProducts.push({
          title: p.code || p.name,
          desc: p.title || p.description,
          url: `${pathPrefix}uvsPumpDetail.html?id=${p.id}`
        });
      }
    });

    // Products from heliumLeakDetectorsData.js
    const activeHLDs = (typeof heliumLeakDetectors !== "undefined") ? heliumLeakDetectors : (window.heliumLeakDetectors || []);
    activeHLDs.forEach(p => {
      if (objectContainsQuery(p, query)) {
        matchedProducts.push({
          title: p.code || p.title,
          desc: p.description || p.title,
          url: `${pathPrefix}heliumDetail.html?id=${p.id}`
        });
      }
    });

    // Products from suppliesData.js
    const activeSupplies = (typeof suppliesProducts !== "undefined") ? suppliesProducts : (window.suppliesProducts || []);
    activeSupplies.forEach(p => {
      if (objectContainsQuery(p, query)) {
        matchedProducts.push({
          title: p.code || p.title,
          desc: p.description || p.title,
          url: `${pathPrefix}suppliesDetail.html?id=${p.id}`
        });
      }
    });

    // 3. Search Services
    const activeServices = (typeof servicesData !== "undefined") ? servicesData : (window.servicesData || []);
    activeServices.forEach(s => {
      if (objectContainsQuery(s, query)) {
        matchedServices.push({
          title: s.title,
          desc: s.description || s.code,
          url: `${pathPrefix}serviceDetail.html?id=${s.id}`
        });
      }
    });

    const hasResults = matchedPages.length > 0 || matchedProducts.length > 0 || matchedServices.length > 0;

    if (hasResults) {
      searchSuggestions.style.display = "block";

      // Render Categories
      if (matchedPages.length > 0) {
        const header = document.createElement("div");
        header.className = "suggestion-category-header";
        header.textContent = "Pages & Guides";
        searchSuggestions.appendChild(header);

        matchedPages.forEach(item => renderSuggestionItem(item));
      }

      if (matchedProducts.length > 0) {
        const header = document.createElement("div");
        header.className = "suggestion-category-header";
        header.textContent = "Products & Components";
        searchSuggestions.appendChild(header);

        matchedProducts.forEach(item => renderSuggestionItem(item));
      }

      if (matchedServices.length > 0) {
        const header = document.createElement("div");
        header.className = "suggestion-category-header";
        header.textContent = "Services & Support";
        searchSuggestions.appendChild(header);

        matchedServices.forEach(item => renderSuggestionItem(item));
      }
    } else {
      searchSuggestions.style.display = "block";
      searchSuggestions.innerHTML = `<div style="padding: 12px 16px; color: #9ca3af; font-size: 13px; text-align: center;">No results found for "${query}"</div>`;
    }
  }

  function renderSuggestionItem(item) {
    const div = document.createElement("div");
    div.className = "suggestion-item";

    const titleDiv = document.createElement("div");
    titleDiv.className = "suggestion-title";
    titleDiv.textContent = item.title;

    const descDiv = document.createElement("div");
    descDiv.className = "suggestion-desc";
    descDiv.textContent = item.desc || "";

    div.appendChild(titleDiv);
    div.appendChild(descDiv);

    div.addEventListener("click", () => {
      window.location.href = item.url;
    });

    searchSuggestions.appendChild(div);
  }

  // Bind Listeners
  searchInput.addEventListener("focus", loadAllSearchData);
  searchInput.addEventListener("input", performSearch);

  // Close suggestions when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !searchInput.contains(e.target) &&
      !searchSuggestions.contains(e.target)
    ) {
      searchSuggestions.style.display = "none";
    }
  });
}

// Prefix relative links and images for subpages
if (pathPrefix) {
  nav.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('javascript:')) {
      a.setAttribute('href', pathPrefix + href);
    }
  });
  nav.querySelectorAll('img[src]').forEach(img => {
    const src = img.getAttribute('src');
    if (src && !src.startsWith('http') && !src.startsWith('data:')) {
      const cleanSrc = src.startsWith('./') ? src.slice(2) : src;
      img.setAttribute('src', pathPrefix + cleanSrc);
    }
  });
}

// SEO & Open Graph Metadata sync helper
window.updateMetaTags = function (title, description) {
  document.title = title;

  // SEO Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // OG Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', title);

  // OG Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute('content', description);

  // OG Image (Relative URL with pathPrefix prepended)
  let ogImg = document.querySelector('meta[property="og:image"]');
  if (!ogImg) {
    ogImg = document.createElement('meta');
    ogImg.setAttribute('property', 'og:image');
    document.head.appendChild(ogImg);
  }
  const prefix = typeof pathPrefix !== 'undefined' ? pathPrefix : '';
  ogImg.setAttribute('content', prefix + 'assests/img/products/uvc.webp');

  // OG URL (Absolute URL)
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', window.location.href);

  // OG Type
  let ogType = document.querySelector('meta[property="og:type"]');
  if (!ogType) {
    ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    document.head.appendChild(ogType);
  }
};

