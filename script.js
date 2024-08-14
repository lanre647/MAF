let navbar = document.querySelector("nav");
let menuLinks = document.querySelector("nav ul");

window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.style.background = "#000";
  } else {
    navbar.style.background = "transparent";
  }
};

function toggleMenu() {
  menuLinks.classList.toggle("show-menu");
}
