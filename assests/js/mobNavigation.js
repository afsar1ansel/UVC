var pathPrefix = window.location.pathname.includes('/filters/') ? '../' : '';
document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("navBarMobile");
  box.innerHTML = ` 
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <div class="logo2">
            <img src="./assests/img/uvclogo.png" alt="" />
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          ≡
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <div class="offcanvas-title" id="offcanvasNavbarLabel">
              <a href="index.html">
                <img src="./assests/img/uvclogo.png" alt="" />
              </a>
            </div>
            <button
              style="
                margin-left: auto;
                box-shadow: none !important;
                background: none !important;
                border: none !important;
                font-size: 32px !important;
                color: #ffc631 !important;
              "
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              &#10539;
            </button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="./about.html">ABOUT</a>
              </li>
              <li class="nav-item dropdown">
                <p id="productDropdown">
                  <a class="nav-link" href="product.html" role="button">PRODUCTS</a>
                  <a href="javascript:void(0);">+</a>
                </p>
                <ul class="dropdown-menu">
                  <li class="dropdown">
                    <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=DPRG">Vacuum Measurement</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#">DPRG SERIES ></a>
                        <ul class="dropdown-menu">
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
                        <a class="dropdown-item dropdown-toggle" href="#" id="flexaDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          FLEXA SERIES
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="flexaDropdown">
                          <li><a class="dropdown-item" href="dprgDetail.html?id=FG-05A">FG-05A </a></li>
                          <p class="headDiv"> Decimal Display ───────</p>
                          <li><a class="dropdown-item deci" href="dprgDetail.html?id=FG-04">FG-04 </a></li>
                          <li><a class="dropdown-item deci" href="dprgDetail.html?id=FGD-1GH">FGD-1GH </a></li>
                          <li><a class="dropdown-item deci" href="dprgDetail.html?id=FGD-1GH-SP">FGD-1GH-SP </a></li>
                          <li><a class="dropdown-item deci" href="dprgDetail.html?id=FGD-1GH-2SP">FGD-1GH-2SP </a></li>
                          <li><a class="dropdown-item deci" href="dprgDetail.html?id=FGD-2GH">FGD-2GH </a></li>
                          <li><a class="dropdown-item deci" href="dprgDetail.html?id=FGD-2GH-SP">FGD-2GH-SP </a></li>
                          <p class="headDiv"> Exponential Display ─────</p>
                          <li><a class="dropdown-item expo" href="dprgDetail.html?id=FG-04">FG-04 </a></li>
                          <li><a class="dropdown-item expo" href="dprgDetail.html?id=FGE-1GH">FGE-1GH </a></li>
                          <li><a class="dropdown-item expo" href="dprgDetail.html?id=FGE-2GH">FGE-2GH </a></li>
                          <li><a class="dropdown-item expo" href="dprgDetail.html?id=FGE-1GH-SP">FGE-1GH-SP </a></li>
                          <li><a class="dropdown-item expo" href="dprgDetail.html?id=FGE-2GH-SP">FGE-2GH-SP </a></li> 
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">HYBRID SERIES</a>
                        <ul class="dropdown-menu">
                          <p class="headDiv"> Decimal Display ───────</p>
                          <li><a class="dropdown-item deci" href="dprgDetail.html?id=HPRGD-1GH-SP">HPRGD-1GH-SP </a></li>
                          <p class="headDiv"> Exponential Display ─────</p>
                          <li><a class="dropdown-item expo" href="dprgDetail.html?id=HPRGE-1GH-SP">HPRGE-1GH-SP </a></li>
                          <li><a class="dropdown-item expo" href="dprgDetail.html?id=HPRGE-2GH">HPRGE-2GH </a></li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">OnePirani SERIES</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="dprgDetail.html?id=HVP-4">HVP-4 </a></li>
                          <li><a class="dropdown-item" href="dprgDetail.html?id=HVP-5">HVP-5 </a></li>
                          <li><a class="dropdown-item" href="dprgDetail.html?id=HVP-7AT">HVP-7AT </a></li>
                          <li><a class="dropdown-item" href="dprgDetail.html?id=DVG-1S">DVG-1S </a></li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=MCLEOD">McLeod SERIES ></a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="dprgDetail.html?id=mcleod-gauge">UVG-1 / UVG-2</a></li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=UVG_DISPLAY" data-bs-toggle="dropdown">UVG DISPLAY CONTROLLERS</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="dprgDetail.html?id=uvge-2gh-sp">UVGE - 2GH - SP</a></li>
                          <li><a class="dropdown-item" href="dprgDetail.html?id=uvgs-1gh-sp">UVGS - 1GH - SP</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a class="dropdown-item dropdown-toggle" href="seriesDetail.html?series=VACUUM_PUMPS">Vacuum Pumps & Systems</a>
                    <ul class="dropdown-menu">
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
                        <a class="dropdown-item dropdown-toggle" href="heliumDetail.html?id=HLD-ASM-310">PFEIFFER ADIXEN ASM ></a>
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
                  <li><a class="dropdown-item" href="heliumDetail.html?id=HLD-HELIUM-LEAK-TEST-SYSTEM">Helium Test Systems</a></li>
                  <li class="dropdown">
                    <a class="dropdown-item dropdown-toggle" href="vacuumComponentsAndSupplies.html">Filters & Vacuum Components </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="heliumDetail.html?id=VACUUM-COMPONENTS">Vacuum Components</a></li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="filters.html">Filters</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="filters/particulateFilters.html">Particulate Filters</a></li>
                          <li><a class="dropdown-item" href="filters/liquidMistSeparators.html">Liquid & Mist Separators</a></li>
                          <li><a class="dropdown-item" href="filters/vaporRemoval.html">Vapor Removal</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <p id="servicesDropdown">
                  <a class="nav-link" href="services.html" role="button">SERVICES</a>
                  <a href="javascript:void(0);">+</a>
                </p>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="serviceDetail.html?id=1">Helium Leak Test Services</a></li>
                  <li><a class="dropdown-item" href="serviceDetail.html?id=2">Vacuum Gauge Calibration Services</a></li>
                  <li><a class="dropdown-item" href="serviceDetail.html?id=3">Leak Calibration Services</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html#solutions">INDUSTRIES SERVED</a>
              </li>
              <li class="nav-item">
              
              </li>
              <li class="nav-item">
                <a class="nav-link" href="download.html">DOWNLOADS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">CONTACT US</a>
              </li>
            </ul>

            <!-- Contact Info for Mobile View -->
            <div class="mobile-contact-info" style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 15px;">
              <div style="display: flex; align-items: center; gap: 12px; color: #fff; font-size: 13.5px;">
                <img src="./assests/img/call.png" alt="Phone" style="width: 16px; height: 16px; filter: brightness(0) invert(1);" />
                <span style="opacity: 0.85;">+91 9886726920 / 080-28367059</span>
              </div>
              <div style="display: flex; align-items: center; gap: 12px; color: #fff; font-size: 13.5px;">
                <img src="./assests/img/mapdot.png" alt="Address" style="width: 16px; height: 16px; filter: brightness(0) invert(1);" />
                <span style="opacity: 0.85; line-height: 1.4;">No. 57, 8th Cross, Doddanna Industrial Estate</span>
              </div>
              <div style="display: flex; align-items: center; gap: 12px; color: #fff; font-size: 13.5px;">
                <img src="./assests/img/msg.svg" alt="Email" style="width: 16px; height: 16px; filter: brightness(0) invert(1);" />
                <span style="opacity: 0.85;">support@uniquevacuum.co.in</span>
              </div>
            </div>
           
          </div>
        </div>
      </nav>
  `;

  // Prefix relative links and images for subpages
  if (pathPrefix) {
    box.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('javascript:')) {
        a.setAttribute('href', pathPrefix + href);
      }
    });
    box.querySelectorAll('img[src]').forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('data:')) {
        const cleanSrc = src.startsWith('./') ? src.slice(2) : src;
        img.setAttribute('src', pathPrefix + cleanSrc);
      }
    });
  }

  // Mobile touch dropdown handler: first click opens dropdown, second click navigates
  const mobileNav = document.getElementById("navBarMobile");
  if (mobileNav) {
    const dropdownLinks = mobileNav.querySelectorAll(".dropdown > a, .dropdown > p > a");

    dropdownLinks.forEach(link => {
      const parentLi = link.closest(".dropdown");
      const menu = parentLi ? parentLi.querySelector(":scope > .dropdown-menu") : null;

      if (menu) {
        link.addEventListener("click", function (e) {
          // If the menu is not visible, prevent navigation and open it
          const isVisible = window.getComputedStyle(menu).display === "block";
          if (!isVisible) {
            e.preventDefault();
            e.stopPropagation();

            // Close other sibling dropdowns at the same level
            const siblings = parentLi.parentElement.querySelectorAll(":scope > .dropdown");
            siblings.forEach(sib => {
              if (sib !== parentLi) {
                const sibMenu = sib.querySelector(":scope > .dropdown-menu");
                if (sibMenu) {
                  sibMenu.style.display = "none";
                  sibMenu.style.opacity = "0";
                }
              }
            });

            // Open this dropdown
            menu.style.display = "block";
            menu.style.opacity = "1";
            menu.style.position = "static";
          }
        });
      }
    });

    // Close all mobile dropdowns when clicking outside the nav
    document.addEventListener("click", function (e) {
      if (!mobileNav.contains(e.target)) {
        const menus = mobileNav.querySelectorAll(".dropdown-menu");
        menus.forEach(menu => {
          menu.style.display = "";
          menu.style.opacity = "";
          menu.style.position = "";
        });
      }
    });
  }
});
//line 156 -170
//  <div id="getQuoteM">
//               GET A QUOTE
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="12"
//                 height="13"
//                 viewBox="0 0 12 13"
//                 fill="none"
//               >
//                 <path
//                   d="M1.98771 1.50635C1.98771 1.24113 2.09307 0.986777 2.28061 0.799241C2.46814 0.611705 2.7225 0.506348 2.98771 0.506348H10.9877C11.2529 0.506348 11.5073 0.611705 11.6948 0.799241C11.8824 0.986777 11.9877 1.24113 11.9877 1.50635V9.50635C11.9877 9.77156 11.8824 10.0259 11.6948 10.2135C11.5073 10.401 11.2529 10.5063 10.9877 10.5063C10.7225 10.5063 10.4681 10.401 10.2806 10.2135C10.0931 10.0259 9.98771 9.77156 9.98771 9.50635V3.92035L1.69471 12.2133C1.50611 12.3955 1.25351 12.4963 0.991311 12.494C0.729114 12.4917 0.478302 12.3866 0.292894 12.2012C0.107485 12.0158 0.00231622 11.7649 3.78025e-05 11.5027C-0.00224062 11.2406 0.0985542 10.9879 0.280712 10.7993L8.57371 2.50635H2.98771C2.7225 2.50635 2.46814 2.40099 2.28061 2.21345C2.09307 2.02592 1.98771 1.77156 1.98771 1.50635Z"
//                   fill="black"
//                 />
//               </svg>
//             </div>

// line 148 - 150

// <ul class="dropdown-menu">
//   <li>
//     <a class="dropdown-item" href="#">
//       Action
//     </a>
//   </li>
//   <li>
//     <a class="dropdown-item" href="#">
//       Another action
//     </a>
//   </li>
//   <li>
//     <hr class="dropdown-divider" />
//   </li>
//   <li>
//     <a class="dropdown-item" href="#">
//       Something else here
//     </a>
//   </li>
// </ul>;

// between these :  <li class="nav-item">
//   <a class="nav-link" href="#">INDUSTRIES SERVED</a>
// </li>
// <li class="nav-item">
// here
// </li>
// <li class="nav-item">
//   <a class="nav-link" href="#">DOWNLOADS</a>
// <a class="nav-link" href="caseStudies.html">CASE STUDIES+</a>
