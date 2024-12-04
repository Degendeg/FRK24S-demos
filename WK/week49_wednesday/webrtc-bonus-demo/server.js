const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (index.html)
app.use(express.static(path.join(__dirname, '.')));

// Start the HTTP server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    // Broadcast the message to all connected clients except the sender
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
