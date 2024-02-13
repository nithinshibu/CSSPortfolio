function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  // * Whenever we click on it , it will have a class "open" added or removed
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
