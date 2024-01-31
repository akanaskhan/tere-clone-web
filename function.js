//!============== header functionality ==============
var header = document.querySelector(".header");
var responsiveBtns = document.querySelector(".responsive-icons");
var navbarBtns = document.querySelectorAll(".navbar a");

responsiveBtns.addEventListener("click", () => {
  header.classList.toggle("show");
});

navbarBtns.forEach((item) => {
  item.addEventListener("click", () => {
    header.classList.remove("show");
  });
});