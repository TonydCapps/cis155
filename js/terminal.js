const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    let response = "";

    switch(command.toLowerCase()) {
      case "help":
        response = "Available commands: about, projects, contact";
        break;
      case "about":
        response = "I'm Tony — cybersecurity student & creative coder.";
        break;
      case "projects":
        response = "Check out my portfolio section for featured work.";
        break;
      case "contact":
        response = "Reach me via email or LinkedIn.";
        break;
      default:
        response = `Command not found: ${command}`;
    }

    const newLine = document.createElement("p");
    newLine.innerHTML = `<span class="prompt">guest@tony:~$</span> ${response}`;
    output.appendChild(newLine);

    input.value = "";
  }
});

