// Deklarera array och const-element högst upp
let numbers = [9, 3, 12, 5, 1, 88, 50, 60, 70];
const filterArrayDisplay = document.getElementById("filterArrayDisplay");
const filteredResult = document.getElementById("filteredResult");
const sortedResult = document.getElementById("sortedResult");
const mappedResult = document.getElementById("mappedResult");
const sumResult = document.getElementById("sumResult");
const averageResult = document.getElementById("averageResult");

// let persons = [
//     { id: 1, name: 'John Doe', age: 40 },
//     { id: 2, name: 'Foo Bar', age: 30 },
//     { id: 3, name: 'Biz Baz', age: 11 },
//     { id: 4, name: 'Alice Monroe', age: 55 },
// ]
// console.log(persons.sort((a, b) => a.age - b.age));

// Visa arrayen i början
filterArrayDisplay.innerText = JSON.stringify(numbers);

// Filter-funktion för att hitta värden över 50
function filterOver50() {
    const numbersOver50 = numbers.filter(num => num > 50);
    // Ifall ni vill påverka arrayen på rad 2, ersätt rad 23 med 25, rad 27 med 26
    // numbers = numbers.filter(num => num > 50);
    // filteredResult.innerText = JSON.stringify(numbers);
    filteredResult.innerText = JSON.stringify(numbersOver50);
}

// Sortera arrayen
function sortNumbers() {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    sortedResult.innerText = JSON.stringify(sortedNumbers);
}

// Map - öka varje värde med 3
function mapAddThree() {
    numbers = numbers.map(num => num + 3);
    mappedResult.innerText = JSON.stringify(modifiedNumbers);
}

// Reduce - summera alla värden i arrayen
function calculateSum() {
    const sum = numbers.reduce((total, value) => total + value, 0);
    sumResult.innerText = sum;
}

// Reduce - beräkna medelvärde
function calculateAverage() {
    // Använder 'reduce' för att summera alla värden i 'numbers'-arrayen
    // 'total' är den ackumulerade summan, och 'value' är det nuvarande värdet i arrayen
    const avg = numbers.reduce((total, value, index, array) => {
        // Lägg till det aktuella värdet till summan
        total += value;

        // Om vi är på sista elementet i arrayen, dividera summan med arrayens längd
        if (index === array.length - 1) {
            return total / array.length; // Returnera medelvärdet
        } else {
            return total; // Annars, returnera bara den löpande summan
        }
    }, 0); // Börja ackumulera från 0

    // Skriv ut det beräknade medelvärdet och avrunda det till två decimaler
    averageResult.innerText = avg.toFixed(2);
}
// --> ackumulera = lägg till något över tid, alltså successivt i en loop