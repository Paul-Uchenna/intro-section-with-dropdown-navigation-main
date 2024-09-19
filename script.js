const toggleButtons = document.querySelectorAll(".toogle-links");
const mobileMenu = document.querySelector(".mobile-menu-collapsed");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mobileMenu.classList.toggle("show-menu");
  });
});
