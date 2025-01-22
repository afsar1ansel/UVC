const nav = document.getElementById("navBarBox");

nav.innerHTML = `
<a href="index.html" class="logoBoxA">
  <div class="logo">
     <img src="./assests/img/uvclogo.png" alt="" />
  </div>
</a>
<div class="navButtons">
  <div><a href="about.html" id="about">ABOUT</a></div>

  <div class="dropdown">
    <a href="product.html" class="dropdown-toggle" id="product" data-bs-toggle="dropdown">PRODUCTS</a>
    <ul class="dropdown-menu">
      <li class="dropdown">
        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">PRECISION VACUUM INSTRUMENTS +</a>
        <ul class="dropdown-menu">
          <li class="dropdown">
            <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">DPRG SERIES ></a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="dprgDetail.html?id=1ba">1BA - DPRG</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=1bb">1BB - DPRG</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=1bc">1BC - DPRG</a></li>
              <li><a class="dropdown-item" href="dprgDetail.html?id=1bd">1BD - DPRG</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">FLEXA SERIES</a>
            <ul class="dropdown-menu">
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
    <li><a class="dropdown-item" href="dprgDetail.html?id=HPRGD-1GH-SP">HPRGD-1GH-SP - HYBRID</a></li>
    <li><a class="dropdown-item" href="dprgDetail.html?id=HPRGE-1GH-SP">HPRGE-1GH-SP - HYBRID</a></li>
    <li><a class="dropdown-item" href="dprgDetail.html?id=HPRGE-2GH">HPRGE-2GH - HYBRID</a></li>
  </ul>
</li>

          <li><a class="dropdown-item" href="#">HVP SERIES</a></li>
        </ul>
      </li>
      <li><a class="dropdown-item" href="#">PRECISION VACUUM PUMPS & SYSTEMS</a></li>
      <li><a class="dropdown-item" href="#">HELIUM LEAK DETECTORS</a></li>
      <li><a class="dropdown-item" href="#">HELIUM TEST SYSTEMS</a></li>
      <li><a class="dropdown-item" href="#">VACUUM SOLUTIONS & COMPONENTS</a></li>
    </ul>
  </div>

  <div><a href="services.html" id="services">SERVICES +</a></div>
  <div><a href="/" id="industries">INDUSTRIES SERVED</a></div>
  <div><a href="caseStudies.html" id="caseStudies">CASE STUDIES</a></div>
  <div><a href="/" id="blog">DOWNLOAD</a></div>
  <div><a href="contact.html" id="contactUs">CONTACT US</a></div>
  <div id="getQuote">GET A QUOTE 
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
      <path d="M1.98771 1.50635C1.98771 1.24113 2.09307 0.986777 2.28061 0.799241C2.46814 0.611705 2.7225 0.506348 2.98771 0.506348H10.9877C11.2529 0.506348 11.5073 0.611705 11.6948 0.799241C11.8824 0.986777 11.9877 1.24113 11.9877 1.50635V9.50635C11.9877 9.77156 11.8824 10.0259 11.6948 10.2135C11.5073 10.401 11.2529 10.5063 10.9877 10.5063C10.7225 10.5063 10.4681 10.401 10.2806 10.2135C10.0931 10.0259 9.98771 9.77156 9.98771 9.50635V3.92035L1.69471 12.2133C1.50611 12.3955 1.25351 12.4963 0.991311 12.494C0.729114 12.4917 0.478302 12.3866 0.292894 12.2012C0.107485 12.0158 0.00231622 11.7649 3.78025e-05 11.5027C-0.00224062 11.2406 0.0985542 10.9879 0.280712 10.7993L8.57371 2.50635H2.98771C2.7225 2.50635 2.46814 2.40099 2.28061 2.21345C2.09307 2.02592 1.98771 1.77156 1.98771 1.50635Z" fill="black"/>
    </svg>
  </div>
</div>
`;

document.getElementById("product").addEventListener("click", function (e) {
  if (!this.classList.contains("dropdown-toggle")) {
    return; // Allow normal behavior
  }
  e.preventDefault(); // Prevent default link behavior
});
