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

  readerXML.onload = async function () {
    const xmlContent = readerXML.result;

    readerDTD.onload = async function () {
      const dtdContent = readerDTD.result;

      // Validera på backend
      const validationResult = await validateXML(xmlContent, dtdContent);
      const resultSection = document.getElementById("resultSection");
      const result = document.getElementById("result");

      if (validationResult.isValid) {
        result.textContent = "Valideringen lyckades! XML-dokumentet är giltigt.";
        resultSection.classList.remove("hidden");
        resultSection.classList.replace("bg-red-100", "bg-green-100");

        /*
          Visa detaljer om XML och DTD.. i JSON, ironiskt va? Native stöd i JS!
          Att stringify:a XML på klientsidan = 🤯🥺😤
        */
        document.getElementById("xmlDetails").textContent = JSON.stringify(validationResult.xmlDetails, null, 2);
        document.getElementById("dtdDetails").textContent = JSON.stringify(validationResult.dtdDetails, null, 2);
      } else {
        result.textContent = "Valideringen misslyckades. Kontrollera XML och DTD.";
        resultSection.classList.remove("hidden");
        resultSection.classList.replace("bg-green-100", "bg-red-100");

        // Visa felmeddelande
        document.getElementById("xmlDetails").textContent = validationResult.error || "Ingen specifik felinformation.";
        document.getElementById("dtdDetails").textContent = "Kontrollera DTD-strukturen för korrekthet.";
      }
    };

    // DTD-filen som text
    readerDTD.readAsText(dtdInput);
  };

  // XML-filen som text
  readerXML.readAsText(xmlInput);
});

async function validateXML(xmlContent, dtdContent) {
  try {
    // Request body som XML
    const requestBody = `
    <ValidationRequest>
    <XML>${xmlContent}</XML>
    <DTD>${dtdContent}</DTD>
    </ValidationRequest>
    `;

    const response = await fetch("http://localhost:3000/api/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/xml", // notera header här
      },
      body: requestBody,
    });

    if (response.ok) {
      const result = await response.json();
      return {
        isValid: result.isValid,
        xmlDetails: result.xmlDetails, // detaljer om XML från backend
        dtdDetails: result.dtdDetails, // detaljer om DTD från backend
        error: result.error || "", // om validering misslyckas
      };
    } else {
      console.error("Validation failed:", response.statusText);
      return {
        isValid: false,
        error: "Backend validering misslyckades.",
      };
    }
  } catch (error) {
    console.error("Error during validation:", error);
    return {
      isValid: false,
      error: error.message,
    };
  }
}

// footer - nuvarande år
document.getElementById("currentYear").innerText = new Date().getFullYear();