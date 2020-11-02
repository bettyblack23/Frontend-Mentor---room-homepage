/*Slider----------------------------------------*/ 

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


let counter = 1;
let slideCounter;

nextBtn.addEventListener("click", () => {
  counter++;
  
  if (counter < 1) {
    counter = 3;
  } else if (counter > 3) {
    counter = 1;
  }
  changeImg();
});

prevBtn.addEventListener("click", () => {
  counter--;
  
  if (counter < 1) {
    counter = 3;
  } else if (counter > 3) {
    counter = 1;
  }
  changeImg();
});


changeImg = () => {
  if (counter === 1) {
    document.querySelector(".slide1").style.display = "block";
    document.querySelector(".slide2").style.display = "none";
    document.querySelector(".slide3").style.display = "none";
    document.querySelector(".hero-image-1").style.display = "block";
    document.querySelector(".hero-image-2").style.display = "none";
    document.querySelector(".hero-image-3").style.display = "none";
  } else if (counter === 2) {
    document.querySelector(".slide1").style.display = "none";
    document.querySelector(".slide2").style.display = "block";
    document.querySelector(".slide3").style.display = "none";
    document.querySelector(".hero-image-1").style.display = "none";
    document.querySelector(".hero-image-2").style.display = "block";
    document.querySelector(".hero-image-3").style.display = "none";
  } else if (counter === 3) {
    document.querySelector(".slide1").style.display = "none";
    document.querySelector(".slide2").style.display = "none";
    document.querySelector(".slide3").style.display = "block";
    document.querySelector(".hero-image-1").style.display = "none";
    document.querySelector(".hero-image-2").style.display = "none";
    document.querySelector(".hero-image-3").style.display = "block";
  }
};

/*Hamburger menu----------------------------------------*/ 
const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");


hamburgerBtn.addEventListener("click", () => {
  document.querySelector(".nav-container").classList.add("display-class");
  document.querySelector(".wrapper").style.background = "rgba(0, 0, 0, 0.50)";
  document.querySelector(".wrapper").style.filter = "brightness(50%)";
});

closeBtn.addEventListener("click", () => {
  document.querySelector(".nav-container").classList.remove("display-class");
  document.querySelector(".wrapper").style.background = "none";
  document.querySelector(".wrapper").style.filter = "none";
});