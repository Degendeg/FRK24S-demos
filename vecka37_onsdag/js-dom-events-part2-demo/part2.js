/*
  DOMContentLoaded: När hela HTML-dokumentet har laddats och tolkats, 
  men innan externa resurser som bilder, styles eller iframes har laddats. Ex:
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
  });
*/

/*
  onload: När hela sidan har laddats, inklusive alla externa resurser
  som bilder, styles och iframes. Ex:
  window.onload = function() {
    console.log('Page fully loaded with all resources');
  };
*/

window.onload = () => {
  // Välja element
  const textBox = document.querySelector("#textBox");
  const addTextBtn = document.querySelector("#addTextBtn");
  const highlightBtn = document.querySelector("#highlightBtn");
  const highlightWordBtn = document.querySelector("#highlightWordBtn");
  const clearHighlightBtn = document.querySelector("#clearHighlightBtn");
  const highlightWordSpan = document.querySelector("#highlightWord");
  const newContentDiv = document.querySelector("#newContent");
  const wordInput = document.querySelector("#wordInput");

  // Funktion för att lägga till en ny <p> tagg
  addTextBtn.addEventListener("click", () => {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = textBox.value || "Empty text";
    newParagraph.classList.add("mt-2");
    newContentDiv.appendChild(newParagraph);
    textBox.value = ""; // Rensa textfältet
  });

  // Funktion för att markera alla <p> element på sidan
  highlightBtn.addEventListener("click", () => {
    const allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach(paragraph => {
      paragraph.classList.toggle("highlight");
    });
  });

  // Funktion för att uppdatera knappen baserat på input
  wordInput.addEventListener("input", () => {
    const word = wordInput.value.trim();
    if (word.length >= 2) {
      highlightWordBtn.disabled = false;
      highlightWordSpan.innerText = word;
    } else {
      highlightWordBtn.disabled = true;
      highlightWordSpan.innerText = '';
    }
  });

  // Funktion för att markera ordet i alla <p> element
  highlightWordBtn.addEventListener("click", () => {
    const word = wordInput.value.trim();
    if (word.length >= 2) {
      const allParagraphs = document.querySelectorAll("p");
      allParagraphs.forEach(paragraph => {
        const text = paragraph.innerText;
        const words = text.split(/(\s+)/); // Dela upp texten i ord och mellanslag
        // Markera matchande ord genom att omge dem med <span> taggar
        const highlightedWords = words.map(w => w.toLowerCase() === word.toLowerCase() ?
          `<span class="highlight">${w}</span>` : w).join('');
        paragraph.innerHTML = highlightedWords;
      });
    }
  });

  clearHighlightBtn.addEventListener("click", () => {
    const allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach(p => {
      p.classList.remove("highlight");
    });
  });

}