// Get the necessary elements
const textElement = document.querySelector("#text");
const styleButton = document.querySelector("#styleButton");
const classButton = document.querySelector("#classButton");
const resetButton = document.querySelector("#resetButton");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const body = document.body;

// Change the style of the text element directly
styleButton.addEventListener("click", function () {
  textElement.style.color = "green";
  textElement.style.fontSize = "24px";
  textElement.style.fontWeight = "bold";
  textElement.style.backgroundColor = "lightgray";
});

// Change the CSS class of the text element
classButton.addEventListener("click", function () {
  if (textElement.classList.contains("blueBackground")) {
    textElement.classList.remove("blueBackground");
    textElement.classList.add("redBackground");
  } else {
    textElement.classList.remove("redBackground");
    textElement.classList.add("blueBackground");
  }
});

// Reset the text element to its original state
resetButton.addEventListener("click", function () {
  textElement.style = "";  // Remove all inline styles
  textElement.className = "";  // Remove all classes
});

// Toggle between light and dark themes
themeToggle.addEventListener("click", function () {
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeIcon.textContent = "☀️";  // Change to sun emoji
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeIcon.textContent = "🌒";  // Change to moon emoji
  }
});
