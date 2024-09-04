"use strict";

// Variabler och datum https://www.w3schools.com/js/js_datatypes.asp
const dagensDatum = new Date();
let formatDate = true;

// Visa dagens datum
updateDate();

// Byt datumformat vid knapptryck https://www.w3schools.com/js/js_htmldom_eventlistener.asp
document.getElementById('changeDateFormatButton').addEventListener('click', function () {
  formatDate = !formatDate;
  updateDate();
});

// Räkna till 10 och visa resultatet https://www.w3schools.com/js/js_loop_for.asp
var numberList = document.getElementById('numberList');
for (var i = 1; i <= 10; i++) {
  var listItem = document.createElement('li');
  listItem.textContent = "Nummer " + i;
  numberList.appendChild(listItem);
}

// Typkontroll med if-sats https://www.w3schools.com/JS/js_if_else.asp
var x = 5;
var y = "5";
var typeCheckResult = (x === y) ? "x och y är lika och har samma typ" : "x och y är inte lika eller har olika typ";
document.getElementById('typeCheckResult').textContent = typeCheckResult;

// For-in loop: iterera över egenskaperna i ett objekt https://www.w3schools.com/JS/js_loop_forin.asp
var person = { namn: "Alice", ålder: 30, stad: "Stockholm" };
for (var key in person) {
  console.log(key + ": " + person[key]);
}

// For-of loop: iterera över värdena i en array https://www.w3schools.com/js/js_loop_forof.asp
var fruits = ["Äpple", "Banan", "Apelsin"];
for (var fruit of fruits) {
  console.log("Frukt: " + fruit);
}

// Foreach https://www.w3schools.com/jsref/jsref_foreach.asp
fruits.forEach(fruit => {
  console.log("Frukt: " + fruit + " (från forEach)")
});

// Uppdatera datumformatet, hämta datumelemetet och toggla via formatDate (se changeFormatButton & eventet) som är en boolean true/false
function updateDate() {
  var dateElement = document.getElementById('currentDate');
  // truthy https://developer.mozilla.org/en-US/docs/Glossary/Truthy
  if (formatDate) {
    dateElement.textContent = "Här visas dagens datum: " + dagensDatum.toLocaleDateString('sv-SE');
  } else {
    dateElement.textContent = "Här visas dagens datum: " + dagensDatum.toDateString();
  }
}
