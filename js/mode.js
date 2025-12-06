// Dark/Light Mode toggle with persistence
const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

// Update button text based on current mode
function updateButtonText() {
  if (body.classList.contains("light-mode")) {
    toggleBtn.textContent = "Switch to Dark Mode";
  } else {
    toggleBtn.textContent = "Switch to Light Mode";
  }
}

// Apply saved mode on page load
const savedMode = localStorage.getItem("theme");
if (savedMode === "light") {
  body.classList.add("light-mode");
}
if (toggleBtn) {
  updateButtonText();

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Save current mode
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }

    updateButtonText();
  });
}