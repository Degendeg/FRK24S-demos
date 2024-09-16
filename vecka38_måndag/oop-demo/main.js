// Modern JavaScript-klass för användarkonto
class UserAccount {
  // Privat egenskap och metod (Inkapsling)
  #password;

  constructor(username, password, email) {
    this.username = username;
    this.#password = password;  // Lösenord inkapslas för säkerhet
    this.email = email;
  }

  // Publik metod för att logga in
  login(inputPassword) {
    if (this.#password === inputPassword) {
      return `${this.username} loggade in framgångsrikt!`;
    } else {
      return `Inloggning misslyckades för ${this.username}`;
    }
  }

  // Metod för att uppdatera e-postadress
  updateEmail(newEmail) {
    this.email = newEmail;
  }

  // Statisk metod för att jämföra två konton (utan instans)
  static compareAccounts(acc1, acc2) {
    return acc1.username === acc2.username && acc1.email === acc2.email;
  }

  // Publik metod för att få användarinfo
  getInfo() {
    return `Användare: ${this.username}, E-post: ${this.email}`;
  }
}

// Array för att lagra flera användarkonton
const accounts = [];

// Funktion för att skapa flera konton
function createAccounts() {
  if (accounts.length > 0) {
    displayMessage("Konton finns redan.");
    return;
  }

  // Skapa tre användarkonton och lägg till i listan
  const user1 = new UserAccount("Alice", "password123", "alice@example.com");
  const user2 = new UserAccount("Bob", "mypassword", "bob@example.com");
  const user3 = new UserAccount("Bob", "bob#123", "bob@example.com");
  accounts.push(user1, user2, user3);

  displayMessage("Skapande av konton lyckades ✅");
}

// Funktion för att visa användarkonton i gränssnittet
function displayAccounts() {
  if (accounts.length === 0) {
    displayMessage("Inga konton finns, skapa dem först!");
    return;
  }

  const output = document.getElementById("output");
  output.innerHTML = ""; // Rensa tidigare output

  // Visa information om varje konto
  accounts.forEach((account) => {
    const info = account.getInfo();
    const p = document.createElement("p");
    p.textContent = info;
    output.appendChild(p);
  });
}

// Funktion för att försöka logga in på det första kontot
function tryLogin() {
  if (accounts.length === 0) {
    displayMessage('Det finns inga konton tillgängliga, skapa dem först och försök igen!');
    return;
  }

  const output = document.getElementById("output");
  output.innerHTML = "Loggar in...";  // Visar en laddningstext

  setTimeout(() => {
    // Testa inloggning med korrekt och felaktigt lösenord
    const loginResult = accounts[0].login("password123"); // Rätt lösenord
    const loginResultWrong = accounts[1].login("wrongpassword"); // Fel lösenord
    const loginResultCorrect = accounts[2].login("bob#123"); // Rätt lösenord

    output.innerHTML = ""; // Rensa output
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.textContent = loginResult;
    p2.textContent = loginResultWrong;
    p3.textContent = loginResultCorrect;
    output.appendChild(p1);
    output.appendChild(p2);
    output.appendChild(p3);
  }, 2000);  // Vänta 2 sekunder för att simulera laddningstid
}

// Funktion för att jämföra två konton
function compareTwoAccounts() {
  if (accounts.length < 2) {
    displayMessage("Minst två konton krävs för att jämföra.");
    return;
  }

  // Använd den statiska metoden för att jämföra två konton
  const comparisonResult = UserAccount.compareAccounts(accounts[1], accounts[2]);

  const output = document.getElementById("output");
  output.innerHTML = `Konton ${accounts[1].username} och ${accounts[2].username} är ${comparisonResult ? "identiska" : "inte identiska"
    }.`;
}

// Hjälpfunktion för att visa ett meddelande i gränssnittet
function displayMessage(message) {
  const output = document.getElementById("output");
  output.innerHTML = `<p class="text-center">${message}</p>`;
}