

const foot = document.getElementById("foot")

const box = document.createElement("div")
box.classList.add("footer")
box.id = "footer"
box.innerHTML = ` <div class="footUp">
          <div class="footup1">
            <div class="logo2" style="margin-bottom: 24px;">
              <img src="./assests/img/uvclogo.png" alt="" />
            </div>
            <p>Delivering precision and reliability in every vacuum solution we provide. Trusted by industries across India, we offer comprehensive service from design to after-sales support.</p>
          </div>
          <div class="footup2">
            <h3>Contacts</h3>
            <div class="footup-box">
   <img src="./assests/img/call.png" alt="">
  <p>+91 9886726920 <br> 080 28367059</p>
</div>
<div class="footup-box">
  <img src="./assests/img/mapdot.png" alt="">
  <p>No. 57, 8th Cross, Doddanna Industrial Estate</p>
</div>           
          </div>
          <div class="footup3">
            <h3>Company</h3>
            <div class="footup3box">
              <img src="./assests/img/right.png" alt="">
              <p>ABOUT</p>
            </div>
            <div class="footup3box">
              <img src="./assests/img/right.png" alt="">
              <p>SERVICES</p>
            </div>
            <div class="footup3box">
              <img src="./assests/img/right.png" alt="">
              <p>PRODUCTS</p>
            </div>
            <div class="footup3box">
              <img src="./assests/img/right.png" alt="">
              <p>CAREERS</p>
            </div>
          </div>
          <div class="footup4">
            <h3>Subscribe to our news</h3>
            <p>Find out about the last days and the latest promotions of our Corporation</p>
            <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">SUBSCRIBE</button>
</div>
          </div>
        </div>
        <div class="footline"></div>
        <div class="footBottom">
            <p>Unique Vacuum Solutions © Third Eye Creatives All rights reserved Copyrights 2024</p>
            <div><img src="./assests/img/1fb.png" alt=""><img src="./assests/img/insta1.png" alt="">
            <img src="./assests/img/twitter1.png" alt="">
          <img src="./assests/img/whapp1.png" alt=""></div>
        </div>`;
foot.appendChild(box)





