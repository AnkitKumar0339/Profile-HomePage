const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Show/hide sidebar
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
});

// Hide sidebar when clicking outside
overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});
