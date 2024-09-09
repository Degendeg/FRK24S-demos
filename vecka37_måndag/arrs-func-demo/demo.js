// Element deklarering
const invoiceAmount = document.getElementById("invoiceAmount");
const invoiceResult = document.getElementById("invoiceResult");
const arrayDisplay = document.getElementById("arrayDisplay");
const modifiedArrayDisplay = document.getElementById("modifiedArrayDisplay");
const multiplyInput = document.getElementById("multiplyInput");
const multiplyResult = document.getElementById("multiplyResult");

/* 
    NOTIS: Ni behöver inte så här många kodkommentarer, bättre med en övergriplig ovanför funktionen som beskriver.
    Jag gör såhär medvetet för att ni ska förstå rad för rad i koden. // Sebbe
*/

// Funktion för att räkna ut fakturabelopp inklusive moms
function calculateInvoice() {
    // Hämtar värdet från fältet invoiceAmount och omvandlar det till ett flyttal (decimal).
    const inBelopp = parseFloat(invoiceAmount.value);

    // Kollar om inmatningen inte är ett nummer (NaN = Not-a-Number).
    if (isNaN(inBelopp)) {
        // Visar ett felmeddelande om användaren inte anger ett giltigt belopp.
        invoiceResult.innerText = "Ange ett giltigt belopp.";
        return; // Avslutar funktionen om inmatningen inte är giltig.
    }

    // Räknar ut beloppet inklusive moms (25% moms = multiplicera med 1.25).
    const vardeMedMoms = inBelopp * 1.25;

    // Visar resultatet i DOM med två decimaler och lägger till "kr" för valutan.
    invoiceResult.innerText = "Fakturabelopp inklusive moms: " + vardeMedMoms.toFixed(2) + " kr";
}

// Exempel på en array med siffror
const numbers = [1, 3, 45, 5];

// Visar arrayen som en sträng i DOM med JSON.stringify för att formatet ska bli läsligt.
arrayDisplay.innerText = JSON.stringify(numbers);

// Funktion för att lägga till ett slumpmässigt nummer till arrayen
function addNumberToArray() {
    // Lägger till ett slumpmässigt heltal mellan 0 och 99 i arrayen numbers.
    numbers.push(Math.floor(Math.random() * 100));

    // Uppdaterar DOM för att visa den ändrade arrayen.
    modifiedArrayDisplay.innerText = JSON.stringify(numbers);
}

// Funktion för att ta bort det sista elementet i arrayen
function removeLastNumber() {
    // Tar bort det sista elementet i arrayen med pop().
    numbers.pop();

    // Uppdaterar DOM för att visa den ändrade arrayen.
    modifiedArrayDisplay.innerText = JSON.stringify(numbers);
}

// Funktion för att ta bort det första elementet i arrayen
function shiftArray() {
    // Tar bort det första elementet i arrayen med shift().
    numbers.shift();

    // Uppdaterar DOM för att visa den ändrade arrayen.
    modifiedArrayDisplay.innerText = JSON.stringify(numbers);
}

// Arrow function för att multiplicera ett tal med 2
const multiplyNumber = () => {

    let num = parseFloat(multiplyInput.value);

    // Kollar om inmatningen inte är ett giltigt nummer.
    if (isNaN(num)) {
        // Visar ett felmeddelande om användaren inte anger ett giltigt tal.
        multiplyResult.innerText = "Ange ett giltigt tal.";
        return; // Avslutar funktionen om inmatningen inte är giltig.
    }

    // Multiplicerar talet med 2.
    const result = num * 2;

    // Visar resultatet i DOM.
    multiplyResult.innerText = "Resultat: " + result;
}