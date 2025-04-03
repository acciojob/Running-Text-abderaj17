//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const text = "We love Programming!";
  const textElement = document.getElementById("text");
  const speedInput = document.getElementById("speed");

  // Function to render the text with a dynamic speed based on input
  function renderText() {
    const speed = parseInt(speedInput.value);
    const delay = 500 / speed;

    textElement.innerHTML = "";  // Clear previous text

    let i = 0;

    function addCharacter() {
      if (i < text.length) {
        textElement.innerHTML += text[i];
        i++;
        setTimeout(addCharacter, delay);  // Render next character with delay
      }
    }

    addCharacter();
  }

  // Initial render
  renderText();

  // Re-render when speed input changes
  speedInput.addEventListener("input", renderText);
});
