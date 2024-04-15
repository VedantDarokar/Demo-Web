const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active"); // Toggle active class for styling
    navLinks.classList.toggle("show"); // Toggle show class for visibility
  });
}
