

var pathPrefix = window.location.pathname.includes('/filters/') ? '../' : '';
const foot = document.getElementById("foot")

const box = document.createElement("div")
box.classList.add("footer")
box.id = "footer"
box.innerHTML = ` <div class="footUp">
          <div class="footup1">
            <div class="logo2" style="margin-bottom: 24px;">
              <img src="./assests/img/common/uvclogo.webp" alt="" style="width: 200px; height: 70px;" />
            </div>
            <p>Delivering precision and reliability in every vacuum solution we provide. Trusted by industries across India, we offer comprehensive service from design to after-sales support.</p>
          </div>
          
          <div class="footup3">
            <h3>Company</h3>
            <div class="footup3box">
              <img src="./assests/img/common/right.webp" alt="">
              <a href="about.html"><p>ABOUT</p></a>
            </div>
            <div class="footup3box">
              <img src="./assests/img/common/right.webp" alt="">
              <a href="services.html"><p>SERVICES</p></a>
            </div>
            <div class="footup3box">
              <img src="./assests/img/common/right.webp" alt="">
              <a href="product.html"><p>PRODUCTS</p></a>
            </div>
            <div class="footup3box">
              <img src="./assests/img/common/right.webp" alt="">
              <a href="contact.html"><p>CAREERS</p></a>
            </div>
          </div>

          <div class="footup2">
            <h3>Contacts</h3>
            <div class="footup-box">
   <img src="./assests/img/common/call.webp" alt="">
  <p>+91 9886726920 <br> 080 28367059</p>
</div>
<div class="footup-box">
  <img src="./assests/img/common/msg.svg" alt="">
  <p>support@uniquevacuum.co.in</p>
</div>           
          </div>
          </div>
        </div>
        <div class="footline"></div>
        <div class="footBottom">
            <p>Unique Vacuum Solutions ©  All rights reserved Copyrights 2024</p>
            
        </div>`;
foot.appendChild(box)

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

// Dynamic Zoho Form Integration for standard page Contact Forms
document.addEventListener("DOMContentLoaded", function () {
  const formBox = document.querySelector(".formBox");
  if (formBox && !formBox.closest("form")) {
    const nameInput = formBox.querySelector('input[placeholder*="Name"]');
    const phoneInput = formBox.querySelector('input[placeholder*="Phn"]');
    const emailInput = formBox.querySelector('input[placeholder*="Email"]');
    const textarea = formBox.querySelector('textarea');
    const submitBtn = formBox.querySelector('button');

    if (nameInput && emailInput && phoneInput && submitBtn) {
      nameInput.setAttribute("name", "SingleLine2");
      phoneInput.setAttribute("name", "PhoneNumber_countrycode");
      emailInput.setAttribute("name", "Email");

      // Auto-populate saved contact information from LocalStorage
      const savedName = localStorage.getItem("uvc_contact_name");
      const savedPhone = localStorage.getItem("uvc_contact_phone");
      const savedEmail = localStorage.getItem("uvc_contact_email");

      if (savedName) nameInput.value = savedName;
      if (savedPhone) phoneInput.value = savedPhone;
      if (savedEmail) emailInput.value = savedEmail;

      const form = document.createElement("form");
      form.setAttribute("action", "https://forms.zohopublic.com/nagendrautpathunique1/form/test/formperma/SteUfj-mKUH9-yO8901F-L0tZY9Yx8wA0dg9YJ0mPxc/htmlRecords/submit");
      form.setAttribute("name", "form");
      form.setAttribute("method", "POST");
      form.setAttribute("accept-charset", "UTF-8");
      form.setAttribute("enctype", "multipart/form-data");
      form.style.display = "contents";

      form.innerHTML = `
        <input type="hidden" name="zf_referrer_name" value="">
        <input type="hidden" name="zf_redirect_url" class="zf_redirect_url" value="">
        <input type="hidden" name="zc_gad" value="">
        <input type="hidden" name="SingleLine" class="zf_enquiry_message" value="General Inquiry">
      `;

      while (formBox.firstChild) {
        form.appendChild(formBox.firstChild);
      }
      formBox.appendChild(form);

      submitBtn.setAttribute("type", "submit");

      form.addEventListener("submit", function (e) {
        // Save inputs to LocalStorage
        localStorage.setItem("uvc_contact_name", nameInput.value.trim());
        localStorage.setItem("uvc_contact_phone", phoneInput.value.trim());
        localStorage.setItem("uvc_contact_email", emailInput.value.trim());

        const redirectUrl = window.location.href.split("?")[0] + "?enquiry=success";
        form.querySelector(".zf_redirect_url").value = redirectUrl;

        if (textarea) {
          form.querySelector(".zf_enquiry_message").value = textarea.value.trim() || "General Inquiry";
        }

        const formData = new FormData(this);
        const payload = {};
        formData.forEach((value, key) => {
          payload[key] = value;
        });

        console.log("----- [UVS Form Tracker] Submitting Contact Form to Zoho -----");
        console.log("Action URL:", this.action);
        console.log("Payload:", payload);
        console.log("---------------------------------------------------------------");
      });
    }
  }
});
//53
// <div><img src="./assests/img/common/1fb.webp" alt=""><img src="./assests/img/common/insta1.webp" alt="">
//             <img src="./assests/img/common/twitter1.webp" alt="">
//           <img src="./assests/img/common/whapp1.webp" alt=""></div>


// line 45

//  <div class="footup4">
//             <h3>Subscribe to our news</h3>
//             <p>Find out about the last days and the latest promotions of our Corporation</p>
//             <div class="input-group mb-3">
//   <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2">
//   <button class="btn btn-outline-secondary" type="button" id="button-addon2">SUBSCRIBE</button>
// </div>

// Zoho SalesIQ Integration (Chat Widget & Visitor Tracking)
window.$zoho = window.$zoho || {};
window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

// Pre-populate Zoho chat widget with user details from localStorage to avoid re-asking
window.$zoho.salesiq.ready = function () {
  const savedName = localStorage.getItem("uvc_contact_name");
  const savedPhone = localStorage.getItem("uvc_contact_phone");
  const savedEmail = localStorage.getItem("uvc_contact_email");

  if (savedName) window.$zoho.salesiq.visitor.name(savedName);
  if (savedPhone) window.$zoho.salesiq.visitor.contactnumber(savedPhone);
  if (savedEmail) window.$zoho.salesiq.visitor.email(savedEmail);
};

const zsiqScript = document.createElement("script");
zsiqScript.id = "zsiqscript";
zsiqScript.src = "https://salesiq.zohopublic.com/widget?wc=siq7ed805fc3a4ed466ca9a8e55c9afe8d06c4bc321093ce6e6f078f87c18a854f6";
zsiqScript.defer = true;
document.body.appendChild(zsiqScript);


