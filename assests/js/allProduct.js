
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
    },
    {
      title: "Vacuum Measurement ID 1",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 1",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 1",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 1",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
  ],
  [
    {
      title: "Vacuum Measurement ID 2",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 2",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 2",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 2",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 2",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
  ],
  [
    {
      title: "Vacuum Measurement ID 3",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 3",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 3",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 3",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 3",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
  ],
  [
    {
      title: "Vacuum Measurement ID 4",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 4",
      description: "Range: 30 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 4",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 4",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 4",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
  ],
  [
    {
      title: "Vacuum Measurement ID 5",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 5",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 5",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 5",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
    },
    {
      title: "Vacuum Measurement ID 5",
      description: "Range: 20 mbar to 0.001 mbar",
      image: "../img/Frame677.png",
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
              <div class="gridBtn" >view product</div>`;

    gridBox.appendChild(div);
  })

 }