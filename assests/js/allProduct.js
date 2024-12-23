
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
document.addEventListener("DOMContentLoaded", () => {
  const productId = getUrlParameter("id") || 1; // Default to 1 if no ID
  setGrid(Number(productId));

  const buttons = document.querySelectorAll(".selectBtn");

  // Set the correct button as active based on the productId
  buttons.forEach((button) => {
    if (button.getAttribute("data-value") == productId) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }

    // Add click event listener for buttons
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      setGrid(this.getAttribute("data-value"));
    });
  });
});

const datas = [
  [
    {
      title: "Vacuum Measurement ID 1",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 1
    },
    {
      title: "Vacuum Measurement ID 1",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 2
    },
    {
      title: "Vacuum Measurement ID 1",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 3
    },
    {
      title: "Vacuum Measurement ID 1",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 4
    },
    {
      title: "Vacuum Measurement ID 1",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 5
    },
  ],
  [
    {
      title: "Vacuum Measurement ID 2",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 6
    },
    {
      title: "Vacuum Measurement ID 2",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 7
    },
    {
      title: "Vacuum Measurement ID 2",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 8
    },
    {
      title: "Vacuum Measurement ID 2",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 9
    },
    {
      title: "Vacuum Measurement ID 2",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 10
    },
  ],
  [
    {
      title: "Vacuum Measurement ID 3",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 11
    },
    {
      title: "Vacuum Measurement ID 3",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 12
    },
    {
      title: "Vacuum Measurement ID 3",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 13
    },
    {
      title: "Vacuum Measurement ID 3",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 14
    },
    {
      title: "Vacuum Measurement ID 3",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 15
    },
  ],
  [
    {
      title: "Vacuum Measurement ID 4",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 16
    },
    {
      title: "Vacuum Measurement ID 4",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 17
    },
    {
      title: "Vacuum Measurement ID 4",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 18
    },
    {
      title: "Vacuum Measurement ID 4",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 19
    },
    {
      title: "Vacuum Measurement ID 4",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 20
    },
  ],
  [
    {
      title: "Vacuum Measurement ID 5",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 21
    },
    {
      title: "Vacuum Measurement ID 5",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 22
    },
    {
      title: "Vacuum Measurement ID 5",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 23
    },
    {
      title: "Vacuum Measurement ID 5",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 24
    },
    {
      title: "Vacuum Measurement ID 5",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
      id: 25
    },
  ],
];



 function setGrid(value) {
  console.log(value);

  const gridBox = document.getElementById("gridBox");
  gridBox.innerHTML = "";
  
  datas[value - 1].forEach((data) => {
    let div = document.createElement("div");
    div.classList.add("grids");
    // console.log(data);
    div.innerHTML = ` <img src="./assests/img/Frame677.png" alt="">
              <h3>${data.title} </h3>
              <p>${data.description}</p>
              <div class="gridBtn" ><a href="productDetails.html?id=${data.id}">View Product</a></div>`;

    gridBox.appendChild(div);
  })

 }