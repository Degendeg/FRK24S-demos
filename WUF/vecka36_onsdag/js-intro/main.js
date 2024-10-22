// När DOM-innehållet är fullständigt inläst och klart, körs det inuti
document.addEventListener('DOMContentLoaded', function () {
  // Lägg till en eventlyssnare på knappen som ändrar texten i ett element med id "intro".
  document.getElementById('changeTextButton').addEventListener('click', function () {
    document.getElementById('intro').innerText = 'Texten har ändrats tack vare JavaScript!';
  });
});

// document = reference to the document in the window
// read more: https://www.w3schools.com/Jsref/dom_obj_document.asp

/* 

  SCOPING - var

*/

var one = 1;

function varFn() {
  var one = 2;
  return one;
}

varFn();

if (true) {
  var one = 11;
}

console.log('var: ' + one); // 11, den är global

/* 

  SCOPING - let/const

*/

let two = 1;

function letFn() {
  let two = 2;
  return two;
}

letFn();

if (true) {
  let two = 11;
}

console.log('let: ' + two); // 1 den är block scopad