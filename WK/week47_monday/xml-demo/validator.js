document.getElementById("currentYear").innerText = new Date().getFullYear();

document.getElementById("validateBtn").addEventListener("click", () => {
  const xmlInput = document.getElementById("xmlInput").files[0];
  const dtdInput = document.getElementById("dtdInput").files[0];

  if (!xmlInput || !dtdInput) {
    alert("Vänligen välj både XML och DTD-filer.");
    return;
  }

  // Exempel: Logik för att läsa och validera filer
  const readerXML = new FileReader();
  const readerDTD = new FileReader();

  readerXML.onload = function () {
    const xmlContent = readerXML.result;

    readerDTD.onload = function () {
      const dtdContent = readerDTD.result;

      // Här lägger du till logiken för validering
      const isValid = validateXML(xmlContent, dtdContent); // Funktion att implementera
      const resultSection = document.getElementById("resultSection");
      const result = document.getElementById("result");

      if (isValid) {
        result.textContent = "Valideringen lyckades! XML-dokumentet är giltigt.";
        resultSection.classList.remove("hidden");
        resultSection.classList.replace("bg-red-100", "bg-green-100");
      } else {
        result.textContent = "Valideringen misslyckades. Kontrollera XML och DTD.";
        resultSection.classList.remove("hidden");
        resultSection.classList.replace("bg-green-100", "bg-red-100");
      }
    };

    readerDTD.readAsText(dtdInput);
  };

  readerXML.readAsText(xmlInput);
});

// Mockup valideringsfunktion
function validateXML(xmlContent, dtdContent) {
  // Här implementeras XML-DTD-validering med t.ex. DOMParser (eller server-side klient ej stödjer detta)
  console.log("XML:", xmlContent);
  console.log("DTD:", dtdContent);

  // Returnera mock-resultat för demo
  return xmlContent.includes("BusinessCard") && dtdContent.includes("DOCTYPE");
}
