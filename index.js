import hamburgerMenu from "./hamburger.js";

//* Comportamiento del scroll 
document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    window.scrollTo({
      behavior: "smooth",
      bottom: 0
    })
  }
})

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
})