// JSON-sträng som representerar en student
const studentJSON = '{ "name": "Lisa Lind", "age": 31, "school": "JENSEN" }';

// 1. Parse JSON-strängen till ett JavaScript-objekt
const student = JSON.parse(studentJSON);
console.log("Studentens namn:", student.name);
console.log("Studentens skola:", student.school);

// 2. Omvandla ett JavaScript-objekt till en JSON-sträng
const newStudent = {
  name: "Anna Persson",
  age: 28,
  school: "JENSEN",
};
const newStudentJSON = JSON.stringify(newStudent);
console.log("Ny student som JSON:", newStudentJSON);

// 3. Arbeta med en JSON-array
const classJSON = `{
  "className": "FEND17",
  "students": [
    { "name": "Lisa Lind", "email": "lisalind@gmail.com" },
    { "name": "Kalle Karlsson", "email": "kalleK@gmail.com" },
    { "name": "Anna Persson", "email": "annaP@gmail.com" }
  ]
}`;
const studentClass = JSON.parse(classJSON);

console.log("Klassnamn:", studentClass.className);
console.log("Studentlista:");
studentClass.students.forEach(student => {
  console.log(`- ${student.name} (${student.email})`);
});

// 4. JSON med nested objects och arrayer
const contactInfoJSON = `{
  "fornamn": "Anna",
  "efternamn": "Johansson",
  "adress": {
    "Gatuadress": "Tomtebodavägen 3A",
    "postort": "SOLNA",
    "postanr": "17165"
  },
  "telefonnummer": [
    { "typ": "arbete", "nummer": "08-12345678" },
    { "typ": "mobil", "nummer": "073-5550200" }
  ]
}`;
const contactInfo = JSON.parse(contactInfoJSON);

console.log("Annas adress:", contactInfo.adress.Gatuadress);
console.log("Mobilnummer:", contactInfo.telefonnummer.find(t => t.typ === "mobil").nummer);

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });