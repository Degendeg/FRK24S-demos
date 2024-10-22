// Sätter det nuvarande året i elementet med id="current_year"
document.getElementById('current_year').innerText = new Date().getFullYear();

// Lägger till en klickhändelse för varje länk i navigeringsmenyn
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (event) {
    // Förhindrar standardbeteendet för länken (dvs. att hoppa till sektionen)
    event.preventDefault();

    // Hämtar den sektion som länken pekar på med hjälp av href-attributet
    const section = document.querySelector(this.getAttribute('href'));

    // Använder CSS-transition för att smidigt ändra bakgrundsfärgen
    section.style.transition = 'background-color 0.5s ease';

    // Ändrar bakgrundsfärgen på den valda sektionen till grön
    section.style.backgroundColor = '#67EE6D';

    // Återställer bakgrundsfärgen till standard efter 2 sekunder
    setTimeout(() => {
      section.style.backgroundColor = '';
    }, 2000);
  });
});