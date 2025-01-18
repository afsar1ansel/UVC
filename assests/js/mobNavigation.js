document.addEventListener("DOMContentLoaded", function () {
  
const box = document.getElementById("navBarMobile");
box.innerHTML = ` <nav class="navbar bg-body-tertiary fixed-top" id="navBarMobile">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"
            >
            <div class="logo2">
              <img src="./assests/img/uvclogo.png" alt="" />
            </div></a
          >
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
                <img src="./assests/img/uvclogo.png" alt="" />
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
                      <a class="nav-link" href="product.html" role="button"
                        >PRODUCTS</a
                      >
                      <a href="javascript:void(0);"> +</a>
                    </p>
                    <ul class="dropdown-menu" style="background-color: #c7ebf5;">
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#"
                          >PRECISION VACUUM INSTRUMENTS +</a
                        >
                        <ul class="dropdown-menu" style="background-color: #92b2d6;">
                          <li class="dropdown">
                            <a class="dropdown-item dropdown-toggle" href="#" 
                              >DPRG SERIES ></a
                            >
                            <ul class="dropdown-menu" style="background-color: rgb(221, 212, 230);">
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="dprgDetail.html?id=1ba"
                                  >1BA - DPRG</a
                                >
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="dprgDetail.html?id=1bb"
                                  >1BB - DPRG</a
                                >
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="dprgDetail.html?id=1bc"
                                  >1BC - DPRG</a
                                >
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="dprgDetail.html?id=1bd"
                                  >1BD - DPRG</a
                                >
                              </li>
                            </ul>
                          </li>
                         <li class="dropdown">
    <a class="dropdown-item dropdown-toggle" href="#" id="flexaDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        FLEXA SERIES
    </a>
    <ul class="dropdown-menu" style="background-color: rgb(221, 212, 230);" aria-labelledby="flexaDropdown">
        <li><a class="dropdown-item" href="dprgDetail.html?id=FGD-1GH">FGD-1GH - FLEXA</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=FGD-2GH">FGD-2GH - FLEXA</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=FGD-2GH-SP">FGD-2GH-SP - FLEXA</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=FGD-1GH-2SP">FGD-1GH-2SP - FLEXA</a></li>
               <li><a class="dropdown-item" href="dprgDetail.html?id=FGE-1GH">FGE-1GH - FLEXA</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=FGE-1GH-SP">FGE-1GH-SP - FLEXA</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=FG-05A">FG-05A - FLEXA</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=FG-04">FG-04 - FLEXA</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=FGE-2GH-SP">FGE-2GH-SP - FLEXA</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=FG-04">FG-04 - FLEXA</a></li>
    </ul>
</li>

                          <li class="dropdown">
  <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">HYBRID SERIES</a>
  <ul class="dropdown-menu">
   <li><a class="dropdown-item" href="dprgDetail.html?id=HPRGD-1GH-SP">HPRGD-1GH-SP - DPRG</a></li>
    <li><a class="dropdown-item" href="dprgDetail.html?id="> - DPRG</a></li>
    <li><a class="dropdown-item" href="dprgDetail.html?id="> - DPRG</a></li>
    <li><a class="dropdown-item" href="dprgDetail.html?id="> - DPRG</a></li>
  </ul>
</li>
                          <li>
                            <a class="dropdown-item" href="#">HVP SERIES</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          >PRECISION VACUUM PUMPS & SYSTEMS</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          >HELIUM LEAK DETECTORS</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          >HELIUM TEST SYSTEMS</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          >VACUUM SOLUTIONS & COMPONENTS</a
                        >
                      </li>
                    </ul>
                  </li>
                <li class="nav-item dropdown">
                  <a
                    href="services.html"
                    role="button"
                    style=" text-decoration: none"
                  >
                    SERVICES+
                  </a>
                  
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">INDUSTRIES SERVED</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="caseStudies.html">CASE STUDIES+</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">DOWNLOADS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">CONTACT US</a>
                </li>
              </ul>
              <div id="getQuoteM">
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
          </div>
        </div>
      </nav>`;
});




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

