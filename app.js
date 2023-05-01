// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const linksUl = document.querySelector(".links");
const navBtn = document.querySelector(".nav-toggle");

navBtn.addEventListener("click", () => {
  linksUl.classList.toggle("show-links");
});
