steg 1) öppna mappen jwt-demo i VSCode

------------------------------------------------------------------

steg 2) starta server - CTRL+SHIFT+Ö (se till att stå i /server - cd server för att byta i terminalen) eller högerklicka på server.js och välj "Open in integrated terminal" - skriv:

node server
nodemon server

nodemon behöver vara installerat globalt, kör i terminalen:

npm i -g nodemon

------------------------------------------------------------------

steg 3) starta klienten - CTRL+SHIFT+Ö (se till att stå i /client - cd client för att byta i terminalen) och skriv:

npm i (för att installera paketen)

efterföljt av:

npm run dev (för att köra lokal miljö) som ligger på:

http://localhost:5173