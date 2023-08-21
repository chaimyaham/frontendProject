// slider
let currentIndex = 1;

var timeOutId;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides((currentIndex += num));
}

function displaySlides(num) {
  let x;
  let slides = document.getElementsByClassName("imageSlides");
  let image_content = document.getElementsByClassName("image_content");

  console.log(slides);
  if (num > slides.length) {
    currentIndex = 1;
  }
  if (num < 1) {
    currentIndex = slides.length;
  }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";

  image_content[currentIndex - 1].style.display = "block";
  console.log("hi chaim");
}

// back to top function

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//   navbar mobile

const burger = document.getElementById("burger");

const isMobile = false;

burger.addEventListener("click", () => {
  const nav_items = document.getElementById("nav_items");

  const Mobilbtn = document.querySelector(".Mobilbtn");

  if (nav_items.style.display === "flex") {
    nav_items.style.display = "none";
    burger.style.background = "none";
    Mobilbtn.style.background = "rgb(255, 162, 0)";
  } else {
    nav_items.style.display = "flex";
    burger.style.background = "#d2d1d1";
    Mobilbtn.style.background = "rgb(255, 162, 0)";
  }
});

// slider automatically
const startSlide = () => {
  setInterval(() => {
    currentIndex++;
    console.log(currentIndex);
    displaySlides(currentIndex);
  }, 4000);
};
startSlide();

// mini drag slider
const slider = document.querySelector(".container");
const mycards = document.querySelector(".mycards");

let isPressed = false;

let cursorX;

slider.addEventListener("mousedown", (e) => {
  isPressed = true;
  cursorX = e.offsetX - mycards.offsetLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isPressed) return;
  e.preventDefault();
  mycards.style.left = `${e.offsetX - cursorX}px`;
  boundSlides();
});

function boundSlides() {
  const containerRect = slider.getBoundingClientRect();
  const mycardsRect = mycards.getBoundingClientRect();
  console.log(mycardsRect);
  if (parseInt(mycards.style.left) > 0) {
    mycards.style.left = 0;
  } else if (mycardsRect.right < containerRect.right) {
    mycards.style.left = `-${mycardsRect.width - containerRect.width}px`;
  }
}

// regle the navbar probleme when i switch from mobile to desktop mode
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    const nav_items = document.getElementById("nav_items");
    nav_items.style.display = "flex";
  }
}




var x = window.matchMedia("(min-width: 900px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);
