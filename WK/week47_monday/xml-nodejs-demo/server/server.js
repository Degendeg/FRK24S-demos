const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { XMLParser, XMLValidator } = require("fast-xml-parser");

const app = express();
app.use(bodyParser.text({ type: "application/xml" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("use POST /api/validate, only endpoint that exists");
});

app.post("/api/validate", (req, res) => {
  const xmlBody = req.body;

  // Kontrollera att inkommande data är giltig XML
  if (!XMLValidator.validate(xmlBody)) {
    return res.status(400).json({
      isValid: false,
      error: "Invalid XML format",
    });
  }

  const parser = new XMLParser();
  const parsed = parser.parse(xmlBody);

  // Kontrollera att nödvändiga element finns i XML
  const xmlContent = parsed.ValidationRequest?.XML;
  const dtdContent = parsed.ValidationRequest?.DTD;

  if (!xmlContent || !dtdContent) {
    return res.status(400).json({
      isValid: false,
      error: "ValidationRequest must contain both XML and DTD",
    });
  }

  // Validering av XML
  const xmlIsValid = xmlContent.BusinessCard && xmlContent.BusinessCard.name;

  // DTD-kontroll (enkel validering här, kan utökas för mer komplex logik)
  const dtdIsValid = dtdContent['!ELEMENT'] && dtdContent['!ELEMENT']['!ELEMENT'];

  if (xmlIsValid && dtdIsValid) {
    return res.json({
      isValid: true,
      xmlDetails: xmlContent, // detaljer om XML
      dtdDetails: dtdContent, // detaljer om DTD
    });
  } else {
    return res.status(400).json({
      isValid: false,
      error: "XML does not match DTD requirements",
    });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));