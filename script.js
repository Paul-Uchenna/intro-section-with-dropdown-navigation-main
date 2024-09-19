const toggleButtons = document.querySelectorAll(".toogle-links");
const mobileMenu = document.querySelector(".mobile-menu-collapsed");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mobileMenu.classList.toggle("show-menu");
  });
});

const toggleButtonsDrop = document.querySelectorAll(".toogle-drop");

toggleButtonsDrop.forEach((button) => {
  button.addEventListener("click", () => {
    const dropMenu = button.nextElementSibling;
    const icon = button.querySelector("img");

    dropMenu.classList.toggle("show-drop");

    if (dropMenu.classList.contains("show-drop"))
      icon.src = "/images/icon-arrow-up.svg";
    else icon.src = "/images/icon-arrow-down.svg";
  });
});
