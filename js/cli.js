const input = document.getElementById("cli-input");
const output = document.getElementById("cli-output");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    let response = "";

    switch (command.toLowerCase()) {
      case "help":
        response = "Available commands: about, projects, contact";
        break;
      case "about":
        response = "I'm Tony — cybersecurity student & creative coder.";
        break;
      case "projects":
        response = "Currently Im working on an all in one app for the avg everyday user. Check out my other projects, links at the top.";
        break;
      case "contact":
        response = "Reach me via email or LinkedIn(comming soon)";
        break;
      default:
        response = `Command not found: ${command}`;
    }

    const newLine = document.createElement("p");
    newLine.innerHTML = `<span class="prompt">guest@tony:~$</span> ${command}<br>${response}`;
    output.appendChild(newLine);

    input.value = "";
  }
});

