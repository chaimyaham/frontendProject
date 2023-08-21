

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



