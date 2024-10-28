const burger = document.getElementById("menu-icon");
const menuPanel = document.getElementById("menu-panel-id");
const closeBtn = document.getElementById("close-icon");

burger.addEventListener("click", () => {
  menuPanel.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menuPanel.classList.remove("active");
});