// Exempel på att välja ett element och uppdatera dess text
const header = document.querySelector("#headerText");
setTimeout(() => {
  header.innerText = "Texten har uppdaterats efter 5 sek 😮";
}, 5000);

// Exempel på att välja flera element och läsa deras text
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, index) => {
  console.log(`Text i paragraf ${index + 1}: ${p.innerText}`);
});

// Exempel på att skapa ett nytt element och lägga till det i DOM
document.querySelector("#createBtn").addEventListener('click', () => {
  const newBtn = document.createElement("button");
  newBtn.textContent = "Jag är en ny knapp";
  document.body.appendChild(newBtn);
});

// Exempel på att ta bort ett element
const removeBtn = document.createElement("button");
removeBtn.textContent = "Ta bort första paragrafen";
document.body.appendChild(removeBtn);

removeBtn.addEventListener('click', () => {
  const firstParagraph = document.querySelector("#main p");
  if (firstParagraph) {
    firstParagraph.parentNode.removeChild(firstParagraph);
  }
});