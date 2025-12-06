// Dark/Light Mode toggle
const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

function updateButtonText() {
  if (body.classList.contains("light-mode")) {
    toggleBtn.textContent = "Switch to Dark Mode";
  } else {
    toggleBtn.textContent = "Switch to Light Mode";
  }
}

if (toggleBtn) {
  // Sync text on load
  updateButtonText();

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    updateButtonText();
  });
}

// Navigation toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('active');
    navLinks.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}