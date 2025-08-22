const projectsContainer = document.querySelector(".projects");
const left = document.getElementById("left");
const right = document.getElementById("right");
const projectsWidth = document.querySelector(".project");

const navbar = document.querySelector("#navbar");

const navbarButton = document.querySelector("#navbar-button");
const mobileContainer = document.querySelector(".mobile-container");

right.addEventListener("click", () => {
  projectsContainer.scrollLeft += window.innerWidth;
});

left.addEventListener("click", () => {
  projectsContainer.scrollLeft -= window.innerWidth;
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.backgroundColor = "#000000eb";
    navbarButton.style.backgroundColor = "#000000eb";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbarButton.style.backgroundColor = "transparent";
  }
});

navbarButton.addEventListener("click", () => {
  mobileContainer.classList.toggle("active");
});
