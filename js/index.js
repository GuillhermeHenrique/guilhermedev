// elements
const navbar = document.querySelector("#navbar");

const projectsContainer = document.querySelector(".projects");
const left = document.getElementById("left");
const right = document.getElementById("right");

// events
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.backgroundColor = "#000000eb";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

right.addEventListener("click", () => {
  projectsContainer.scrollLeft += window.innerWidth;
});

left.addEventListener("click", () => {
  projectsContainer.scrollLeft -= window.innerWidth;
});
