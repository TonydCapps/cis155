// Dark Mode toggle
const toggleBtn = document.getElementById("toggle-mode");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");
    // Change button text based on mode
    toggleBtn.textContent = isLight ? "Toggle Light Mode" : "Toggle Dark Mode";
  });
}

// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('active');
    navLinks.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
